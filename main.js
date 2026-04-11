// ===================================================
//  SUPABASE SETUP
// ===================================================
const SUPABASE_URL = 'https://wtrastebtdlkusmgkwyj.supabase.co';
const SUPABASE_KEY = 'sb_publishable_zsPwpQTmfyiKogJmau1_Jw_vD5qfJ-K';
const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

let currentUser = null;
let cachedTodos = [];

// ===================================================
//  AUTH
// ===================================================
async function initAuth() {
  const { data: { session } } = await db.auth.getSession();
  handleSession(session);

  db.auth.onAuthStateChange((_event, session) => {
    handleSession(session);
  });
}

function handleSession(session) {
  currentUser = session?.user ?? null;
  if (currentUser) {
    showUserInfo();
    hideLoginOverlay();
    fetchTodos();
  } else {
    showLoginOverlay();
    hideUserInfo();
    cachedTodos = [];
    renderTodoList();
    renderIncompletePanel();
    renderCalendar();
  }
}

function showUserInfo() {
  const meta    = currentUser.user_metadata || {};
  const avatarEl = document.getElementById('user-avatar');
  const nameEl   = document.getElementById('user-name');
  const infoEl   = document.getElementById('user-info');

  if (meta.avatar_url) {
    avatarEl.src = meta.avatar_url;
    avatarEl.style.display = 'block';
  } else {
    avatarEl.style.display = 'none';
  }
  nameEl.textContent = meta.full_name || meta.name || currentUser.email || '';
  infoEl.style.display = 'flex';
}

function hideUserInfo() {
  document.getElementById('user-info').style.display = 'none';
}

function showLoginOverlay() {
  document.getElementById('login-overlay').style.display = 'flex';
}

function hideLoginOverlay() {
  document.getElementById('login-overlay').style.display = 'none';
}

async function signInWithGoogle() {
  await db.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: window.location.origin },
  });
}

async function signOut() {
  await db.auth.signOut();
}

document.getElementById('google-login-btn').addEventListener('click', signInWithGoogle);
document.getElementById('logout-btn').addEventListener('click', signOut);

// ===================================================
//  날짜 표시
// ===================================================
(function initDate() {
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const now  = new Date();
  const y = now.getFullYear(), m = now.getMonth() + 1, d = now.getDate();
  document.getElementById('dash-date').textContent =
    `${y}년 ${m}월 ${d}일 (${days[now.getDay()]})`;
})();

// ===================================================
//  날씨
// ===================================================
const WMO = {
  0:  { text: '맑음',           icon: '☀️',  bg: 'linear-gradient(135deg,#f7971e,#ffd200)' },
  1:  { text: '대체로 맑음',    icon: '🌤️', bg: 'linear-gradient(135deg,#f7971e,#ffd200)' },
  2:  { text: '구름 조금',      icon: '⛅',  bg: 'linear-gradient(135deg,#667eea,#764ba2)' },
  3:  { text: '흐림',           icon: '☁️',  bg: 'linear-gradient(135deg,#4b6cb7,#182848)' },
  45: { text: '안개',           icon: '🌫️', bg: 'linear-gradient(135deg,#757f9a,#d7dde8)' },
  48: { text: '결빙 안개',      icon: '🌫️', bg: 'linear-gradient(135deg,#757f9a,#d7dde8)' },
  51: { text: '가벼운 이슬비',  icon: '🌦️', bg: 'linear-gradient(135deg,#4b6cb7,#182848)' },
  53: { text: '이슬비',         icon: '🌦️', bg: 'linear-gradient(135deg,#4b6cb7,#182848)' },
  55: { text: '강한 이슬비',    icon: '🌧️', bg: 'linear-gradient(135deg,#2c3e50,#4ca1af)' },
  61: { text: '가벼운 비',      icon: '🌧️', bg: 'linear-gradient(135deg,#2c3e50,#4ca1af)' },
  63: { text: '비',             icon: '🌧️', bg: 'linear-gradient(135deg,#2c3e50,#4ca1af)' },
  65: { text: '강한 비',        icon: '🌧️', bg: 'linear-gradient(135deg,#1a1a2e,#16213e)' },
  71: { text: '가벼운 눈',      icon: '🌨️', bg: 'linear-gradient(135deg,#89cff0,#6190b0)' },
  73: { text: '눈',             icon: '❄️',  bg: 'linear-gradient(135deg,#89cff0,#6190b0)' },
  75: { text: '강한 눈',        icon: '❄️',  bg: 'linear-gradient(135deg,#667db6,#0082c8)' },
  77: { text: '싸라기눈',       icon: '🌨️', bg: 'linear-gradient(135deg,#89cff0,#6190b0)' },
  80: { text: '소나기',         icon: '🌦️', bg: 'linear-gradient(135deg,#4b6cb7,#182848)' },
  81: { text: '강한 소나기',    icon: '🌧️', bg: 'linear-gradient(135deg,#2c3e50,#4ca1af)' },
  82: { text: '폭우',           icon: '⛈️',  bg: 'linear-gradient(135deg,#1a1a2e,#16213e)' },
  95: { text: '뇌우',           icon: '⛈️',  bg: 'linear-gradient(135deg,#1a1a2e,#16213e)' },
  96: { text: '우박 뇌우',      icon: '⛈️',  bg: 'linear-gradient(135deg,#1a1a2e,#16213e)' },
  99: { text: '강한 우박 뇌우', icon: '⛈️',  bg: 'linear-gradient(135deg,#1a1a2e,#16213e)' },
};

async function loadWeather() {
  const el = document.getElementById('dash-weather');
  if (!navigator.geolocation) {
    el.innerHTML = '<span class="weather-error">위치 정보를 지원하지 않는 브라우저입니다.</span>';
    return;
  }
  navigator.geolocation.getCurrentPosition(async (pos) => {
    const { latitude: lat, longitude: lon } = pos.coords;
    try {
      const [wRes, gRes] = await Promise.all([
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`),
        fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`),
      ]);
      const wData = await wRes.json();
      const gData = await gRes.json();
      const cw  = wData.current_weather;
      const wmo = WMO[cw.weathercode] || { text: '알 수 없음', icon: '🌡️', bg: 'linear-gradient(135deg,#667eea,#764ba2)' };
      const city = gData.address?.city || gData.address?.town || gData.address?.county || '현재 위치';
      el.style.background = wmo.bg;
      el.innerHTML = `
        <div class="weather-icon">${wmo.icon}</div>
        <div>
          <div class="weather-city">📍 ${city}</div>
          <div class="weather-temp">${Math.round(cw.temperature)}°C</div>
          <div class="weather-desc">${wmo.text}</div>
          <div class="weather-wind">바람 ${cw.windspeed} km/h</div>
        </div>`;
    } catch {
      el.innerHTML = '<span class="weather-error">날씨 정보를 불러올 수 없습니다.</span>';
    }
  }, () => {
    el.innerHTML = `<div class="weather-icon">📍</div>
      <div><div class="weather-desc">위치 권한을 허용하면<br>날씨를 확인할 수 있습니다.</div></div>`;
  });
}

loadWeather();

// ===================================================
//  달력
// ===================================================
let calYear, calMonth;

function toDateStr(date) {
  return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
}

function renderCalendar() {
  const titleEl = document.getElementById('cal-title');
  const gridEl  = document.getElementById('cal-grid');

  titleEl.textContent = `${calYear}년 ${calMonth + 1}월`;

  const todoDates   = new Set(cachedTodos.map(t => t.date).filter(Boolean));
  const todayStr    = toDateStr(new Date());
  const selectedVal = document.getElementById('todo-date-input').value;
  const firstDayOfWeek = new Date(calYear, calMonth, 1).getDay();
  const daysInMonth    = new Date(calYear, calMonth + 1, 0).getDate();

  let html = '';
  for (let i = 0; i < firstDayOfWeek; i++) html += '<div class="cal-cell empty"></div>';

  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr   = `${calYear}-${String(calMonth+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const dow       = (firstDayOfWeek + d - 1) % 7;
    const isToday   = dateStr === todayStr;
    const isSel     = dateStr === selectedVal && !isToday;
    const hasTodo   = todoDates.has(dateStr);

    let cls = 'cal-cell';
    if (dow === 0) cls += ' sun';
    if (dow === 6) cls += ' sat';
    if (isToday)  cls += ' today';
    if (isSel)    cls += ' selected';

    html += `<div class="${cls}" data-date="${dateStr}">${d}${hasTodo ? '<span class="cal-dot"></span>' : ''}</div>`;
  }

  gridEl.innerHTML = html;
  gridEl.querySelectorAll('.cal-cell[data-date]').forEach(cell => {
    cell.addEventListener('click', () => {
      document.getElementById('todo-date-input').value = cell.dataset.date;
      renderCalendar();
    });
  });
}

function initCalendar() {
  const now = new Date();
  calYear  = now.getFullYear();
  calMonth = now.getMonth();
  renderCalendar();
}

document.getElementById('cal-prev').addEventListener('click', () => {
  if (--calMonth < 0) { calMonth = 11; calYear--; }
  renderCalendar();
});
document.getElementById('cal-next').addEventListener('click', () => {
  if (++calMonth > 11) { calMonth = 0; calYear++; }
  renderCalendar();
});

// ===================================================
//  TODO — Supabase CRUD
// ===================================================
async function fetchTodos() {
  const { data, error } = await db
    .from('todos')
    .select('*')
    .order('created_at', { ascending: true });

  if (!error) {
    cachedTodos = data;
    renderTodoList();
    renderIncompletePanel();
    renderCalendar();
  }
}

function getTodos() { return cachedTodos; }

let currentFilter = 'all';
let editingId     = null;

function escapeHtml(str) {
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ---- 미완료 패널 ----
function renderIncompletePanel() {
  const panel      = document.getElementById('incomplete-panel');
  const listEl     = document.getElementById('incomplete-list');
  const incomplete = cachedTodos.filter(t => !t.completed);

  if (incomplete.length === 0) { panel.style.display = 'none'; return; }

  listEl.innerHTML = incomplete.map(t => `
    <div class="incomplete-item">
      <span class="incomplete-dot"></span>
      <span>${escapeHtml(t.text)}</span>
      ${t.date ? `<span class="incomplete-item-date">${t.date}</span>` : ''}
    </div>`).join('');
  panel.style.display = 'block';
}

// ---- 할 일 목록 ----
function renderTodoList() {
  const listEl = document.getElementById('todo-list');
  let todos = [...cachedTodos];

  if (currentFilter === 'incomplete') todos = todos.filter(t => !t.completed);
  if (currentFilter === 'complete')   todos = todos.filter(t =>  t.completed);

  todos.sort((a, b) => {
    if (a.completed !== b.completed) return a.completed ? 1 : -1;
    return (a.date || '9999').localeCompare(b.date || '9999');
  });

  if (todos.length === 0) {
    listEl.innerHTML = '<div class="todo-empty">등록된 계획이 없습니다.</div>';
    return;
  }

  listEl.innerHTML = todos.map(todo => {
    if (editingId === todo.id) {
      return `
        <div class="todo-item editing" data-id="${todo.id}">
          <div class="todo-edit-form">
            <input type="text" class="edit-text-input" value="${escapeHtml(todo.text)}" />
            <input type="date" class="edit-date-input" value="${todo.date || ''}" />
            <div class="edit-actions">
              <button class="edit-save-btn" data-id="${todo.id}">저장</button>
              <button class="edit-cancel-btn">취소</button>
            </div>
          </div>
        </div>`;
    }
    return `
      <div class="todo-item ${todo.completed ? 'completed' : ''}" data-id="${todo.id}">
        <button class="todo-check-btn" data-id="${todo.id}">
          ${todo.completed ? '✓' : '○'}
        </button>
        <div class="todo-item-content">
          <span class="todo-item-text">${escapeHtml(todo.text)}</span>
          ${todo.date ? `<span class="todo-item-date">📅 ${todo.date}</span>` : ''}
        </div>
        <div class="todo-item-actions">
          <button class="todo-edit-btn" data-id="${todo.id}">수정</button>
          <button class="todo-delete-btn" data-id="${todo.id}">삭제</button>
        </div>
      </div>`;
  }).join('');

  listEl.querySelectorAll('.todo-check-btn').forEach(btn =>
    btn.addEventListener('click', () => toggleTodo(btn.dataset.id)));
  listEl.querySelectorAll('.todo-edit-btn').forEach(btn =>
    btn.addEventListener('click', () => {
      editingId = btn.dataset.id; renderTodoList();
      listEl.querySelector('.edit-text-input')?.focus();
    }));
  listEl.querySelectorAll('.todo-delete-btn').forEach(btn =>
    btn.addEventListener('click', () => deleteTodo(btn.dataset.id)));
  listEl.querySelectorAll('.edit-save-btn').forEach(btn =>
    btn.addEventListener('click', () => {
      const item = btn.closest('.todo-item');
      const text = item.querySelector('.edit-text-input').value.trim();
      const date = item.querySelector('.edit-date-input').value;
      if (text) editTodo(btn.dataset.id, text, date);
    }));
  listEl.querySelectorAll('.edit-cancel-btn').forEach(btn =>
    btn.addEventListener('click', () => { editingId = null; renderTodoList(); }));
  listEl.querySelectorAll('.edit-text-input').forEach(input =>
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter')  input.closest('.todo-item').querySelector('.edit-save-btn').click();
      if (e.key === 'Escape') { editingId = null; renderTodoList(); }
    }));
}

// ---- CRUD ----
async function handleAddTodo() {
  if (!currentUser) return;
  const textEl = document.getElementById('todo-text');
  const dateEl = document.getElementById('todo-date-input');
  const text   = textEl.value.trim();
  if (!text) { textEl.focus(); return; }

  // 낙관적 업데이트 (즉시 화면에 반영)
  const tempId  = 'temp-' + Date.now();
  const newItem = { id: tempId, text, date: dateEl.value || null, completed: false, created_at: new Date().toISOString() };
  cachedTodos.push(newItem);
  textEl.value = '';
  renderTodoList(); renderIncompletePanel(); renderCalendar();

  const { data, error } = await db.from('todos')
    .insert([{ user_id: currentUser.id, text, date: newItem.date, completed: false }])
    .select().single();

  if (!error) {
    const idx = cachedTodos.findIndex(t => t.id === tempId);
    if (idx !== -1) cachedTodos[idx] = data;
  } else {
    cachedTodos = cachedTodos.filter(t => t.id !== tempId);
    renderTodoList();
  }
}

async function toggleTodo(id) {
  const todo = cachedTodos.find(t => t.id === id);
  if (!todo) return;
  todo.completed = !todo.completed;
  renderTodoList(); renderIncompletePanel(); renderCalendar();
  await db.from('todos').update({ completed: todo.completed }).eq('id', id);
}

async function deleteTodo(id) {
  cachedTodos = cachedTodos.filter(t => t.id !== id);
  if (editingId === id) editingId = null;
  renderTodoList(); renderIncompletePanel(); renderCalendar();
  await db.from('todos').delete().eq('id', id);
}

async function editTodo(id, text, date) {
  const todo = cachedTodos.find(t => t.id === id);
  if (!todo) return;
  todo.text = text; todo.date = date || null;
  editingId = null;
  renderTodoList(); renderCalendar();
  await db.from('todos').update({ text, date: date || null }).eq('id', id);
}

// ---- 이벤트 ----
document.getElementById('todo-add-btn').addEventListener('click', handleAddTodo);
document.getElementById('todo-text').addEventListener('keydown', e => {
  if (e.key === 'Enter') handleAddTodo();
});
document.getElementById('todo-text').addEventListener('focus', renderIncompletePanel);

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderTodoList();
  });
});

// ===================================================
//  문의 모달
// ===================================================
const modal        = document.getElementById('contact-modal');
const openBtn      = document.getElementById('open-contact-btn');
const closeBtn     = document.getElementById('close-contact-btn');
const contactForm  = document.getElementById('contact-form');
const successBox   = document.getElementById('modal-success');
const submitBtn    = document.getElementById('contact-submit-btn');
const successClose = document.getElementById('success-close-btn');

function openModal() {
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (successBox.style.display === 'block') {
    successBox.style.display  = 'none';
    contactForm.style.display = 'block';
  }
}

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
successClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
});

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  submitBtn.disabled = true;
  submitBtn.textContent = '전송 중...';
  try {
    const res = await fetch('https://formspree.io/f/xjgpqyyw', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(contactForm),
    });
    if (res.ok) {
      contactForm.style.display = 'none';
      successBox.style.display  = 'block';
      contactForm.reset();
    } else {
      alert('전송에 실패했습니다. 잠시 후 다시 시도해 주세요.');
    }
  } catch {
    alert('네트워크 오류가 발생했습니다.');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = '문의 보내기';
  }
});

// ===================================================
//  초기화
// ===================================================
document.getElementById('todo-date-input').value = toDateStr(new Date());
initCalendar();
initAuth();
