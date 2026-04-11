// ===================================================
//  SUPABASE SETUP
// ===================================================
const SUPABASE_URL = 'https://wtrastebtdlkusmgkwyj.supabase.co';
const SUPABASE_KEY = 'sb_publishable_zsPwpQTmfyiKogJmau1_Jw_vD5qfJ-K';
const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

let currentUser = null;
let cachedTodos = [];
let isGuest     = false;

const GUEST_TODOS_KEY = 'guest_todos_v1';
const GUEST_TAGS_KEY  = 'guest_tags_v1';

// ===================================================
//  AUTH
// ===================================================
async function initAuth() {
  const { data: { session } } = await db.auth.getSession();
  handleSession(session);
  db.auth.onAuthStateChange((_event, session) => handleSession(session));
}

function handleSession(session) {
  if (isGuest) return;  // guest mode takes precedence
  currentUser = session?.user ?? null;
  if (currentUser) {
    showUserInfo();
    hideLoginOverlay();
    fetchTags().then(() => { renderTagFilter(); fetchTodos(); });
    checkAttendanceAndStreak();
  } else {
    showLoginOverlay();
    hideUserInfo();
    hideStreakBadge();
    cachedTodos = [];
    renderTodoList();
    renderIncompletePanel();
    renderCalendar();
  }
}

function enterGuestMode() {
  isGuest = true;
  currentUser = null;
  hideLoginOverlay();
  hideUserInfo();
  hideStreakBadge();
  document.getElementById('guest-badge').style.display = 'flex';
  cachedTodos = JSON.parse(localStorage.getItem(GUEST_TODOS_KEY) || '[]');
  cachedTags  = JSON.parse(localStorage.getItem(GUEST_TAGS_KEY)  || '[]');
  renderTagFilter();
  renderTodoList();
  renderIncompletePanel();
  renderCalendar();
}

function exitGuestMode() {
  isGuest = false;
  cachedTodos = [];
  cachedTags  = [];
  document.getElementById('guest-badge').style.display = 'none';
  showLoginOverlay();
}

function showUserInfo() {
  const meta    = currentUser.user_metadata || {};
  const avatarEl = document.getElementById('user-avatar');
  const nameEl   = document.getElementById('user-name');
  const infoEl   = document.getElementById('user-info');
  if (meta.avatar_url) { avatarEl.src = meta.avatar_url; avatarEl.style.display = 'block'; }
  else avatarEl.style.display = 'none';
  nameEl.textContent = meta.full_name || meta.name || currentUser.email || '';
  infoEl.style.display = 'flex';
}

function hideUserInfo() { document.getElementById('user-info').style.display = 'none'; }
function hideStreakBadge() { document.getElementById('streak-badge').style.display = 'none'; }
function showLoginOverlay() { document.getElementById('login-overlay').style.display = 'flex'; }
function hideLoginOverlay() { document.getElementById('login-overlay').style.display = 'none'; }

async function signInWithGoogle() {
  await db.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: window.location.origin },
  });
}

async function signOut() { await db.auth.signOut(); }

document.getElementById('google-login-btn').addEventListener('click', signInWithGoogle);
document.getElementById('logout-btn').addEventListener('click', signOut);
document.getElementById('guest-btn').addEventListener('click', enterGuestMode);
document.getElementById('guest-login-btn').addEventListener('click', exitGuestMode);

// ===================================================
//  출석 & 연속 출석 스트릭
// ===================================================
async function checkAttendanceAndStreak() {
  const today = toDateStr(new Date());

  // 오늘 출석 기록 (중복 무시)
  await db.from('attendance')
    .upsert({ user_id: currentUser.id, date: today }, { onConflict: 'user_id,date' });

  // 최근 365일 출석 기록 가져오기
  const { data, error } = await db
    .from('attendance')
    .select('date')
    .eq('user_id', currentUser.id)
    .order('date', { ascending: false })
    .limit(365);

  if (error || !data?.length) return;

  const dates = data.map(r => r.date);
  const streak = calcStreak(dates, today);

  const badge = document.getElementById('streak-badge');
  const count  = document.getElementById('streak-count');
  count.textContent = streak;
  badge.style.display = 'flex';
}

function calcStreak(dates, today) {
  // dates: 내림차순 정렬된 날짜 배열 (YYYY-MM-DD)
  if (!dates.length) return 0;

  // 오늘 또는 어제부터 시작하지 않으면 스트릭 없음
  const yesterday = toDateStr(new Date(Date.now() - 86400000));
  if (dates[0] !== today && dates[0] !== yesterday) return 0;

  let streak = 1;
  for (let i = 1; i < dates.length; i++) {
    // 이전 날짜가 현재 날짜보다 정확히 1일 전인지 확인
    const prev = new Date(dates[i - 1]);
    prev.setDate(prev.getDate() - 1);
    if (toDateStr(prev) === dates[i]) {
      streak++;
    } else {
      break;
    }
  }
  return streak;
}

// ===================================================
//  날짜 표시
// ===================================================
(function initDate() {
  const days = ['일','월','화','수','목','금','토'];
  const now  = new Date();
  document.getElementById('dash-date').textContent =
    `${now.getFullYear()}년 ${now.getMonth()+1}월 ${now.getDate()}일 (${days[now.getDay()]})`;
})();

// ===================================================
//  날씨
// ===================================================
const WMO = {
  0:  { text:'맑음',           icon:'☀️',  bg:'linear-gradient(135deg,#f7971e,#ffd200)' },
  1:  { text:'대체로 맑음',    icon:'🌤️', bg:'linear-gradient(135deg,#f7971e,#ffd200)' },
  2:  { text:'구름 조금',      icon:'⛅',  bg:'linear-gradient(135deg,#667eea,#764ba2)' },
  3:  { text:'흐림',           icon:'☁️',  bg:'linear-gradient(135deg,#4b6cb7,#182848)' },
  45: { text:'안개',           icon:'🌫️', bg:'linear-gradient(135deg,#757f9a,#d7dde8)' },
  48: { text:'결빙 안개',      icon:'🌫️', bg:'linear-gradient(135deg,#757f9a,#d7dde8)' },
  51: { text:'가벼운 이슬비',  icon:'🌦️', bg:'linear-gradient(135deg,#4b6cb7,#182848)' },
  53: { text:'이슬비',         icon:'🌦️', bg:'linear-gradient(135deg,#4b6cb7,#182848)' },
  55: { text:'강한 이슬비',    icon:'🌧️', bg:'linear-gradient(135deg,#2c3e50,#4ca1af)' },
  61: { text:'가벼운 비',      icon:'🌧️', bg:'linear-gradient(135deg,#2c3e50,#4ca1af)' },
  63: { text:'비',             icon:'🌧️', bg:'linear-gradient(135deg,#2c3e50,#4ca1af)' },
  65: { text:'강한 비',        icon:'🌧️', bg:'linear-gradient(135deg,#1a1a2e,#16213e)' },
  71: { text:'가벼운 눈',      icon:'🌨️', bg:'linear-gradient(135deg,#89cff0,#6190b0)' },
  73: { text:'눈',             icon:'❄️',  bg:'linear-gradient(135deg,#89cff0,#6190b0)' },
  75: { text:'강한 눈',        icon:'❄️',  bg:'linear-gradient(135deg,#667db6,#0082c8)' },
  80: { text:'소나기',         icon:'🌦️', bg:'linear-gradient(135deg,#4b6cb7,#182848)' },
  81: { text:'강한 소나기',    icon:'🌧️', bg:'linear-gradient(135deg,#2c3e50,#4ca1af)' },
  82: { text:'폭우',           icon:'⛈️',  bg:'linear-gradient(135deg,#1a1a2e,#16213e)' },
  95: { text:'뇌우',           icon:'⛈️',  bg:'linear-gradient(135deg,#1a1a2e,#16213e)' },
  99: { text:'강한 우박 뇌우', icon:'⛈️',  bg:'linear-gradient(135deg,#1a1a2e,#16213e)' },
};

let _weatherLat = null;
let _weatherLon = null;
let _weatherCity = '';

async function fetchAndRenderWeather(lat, lon, cityName) {
  const el = document.getElementById('dash-weather');
  try {
    const requests = [
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`),
    ];
    if (!cityName) {
      requests.push(fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`));
    }
    const results = await Promise.all(requests);
    const wData = await results[0].json();

    let city = cityName;
    if (!city && results[1]) {
      const gData = await results[1].json();
      city = gData.address?.city || gData.address?.town || gData.address?.county || '현재 위치';
    }

    _weatherLat = lat; _weatherLon = lon; _weatherCity = city;

    const cw  = wData.current_weather;
    const wmo = WMO[cw.weathercode] || { text:'알 수 없음', icon:'🌡️', bg:'linear-gradient(135deg,#667eea,#764ba2)' };
    el.style.background = wmo.bg;

    const days  = ['일','월','화','수','목','금','토'];
    const daily = wData.daily;
    const weeklyHtml = daily ? daily.time.map((dateStr, i) => {
      const d       = new Date(dateStr + 'T00:00:00');
      const dayName = i === 0 ? '오늘' : days[d.getDay()];
      const dWmo    = WMO[daily.weathercode[i]] || { icon:'🌡️' };
      return `<div class="wdc">
        <div class="wdc-day">${dayName}</div>
        <div class="wdc-icon">${dWmo.icon}</div>
        <div class="wdc-max">${Math.round(daily.temperature_2m_max[i])}°</div>
        <div class="wdc-min">${Math.round(daily.temperature_2m_min[i])}°</div>
      </div>`;
    }).join('') : '';

    el.innerHTML = `
      <div class="weather-top">
        <div class="weather-current">
          <div class="weather-icon">${wmo.icon}</div>
          <div class="weather-info">
            <div class="weather-city-row">
              <span class="weather-city">📍 ${city}</span>
              <button class="weather-search-toggle" id="weather-search-toggle" title="다른 지역 검색">🔍</button>
              <button class="weather-fav-save" id="weather-fav-save" title="즐겨찾기에 추가">☆</button>
              <button class="weather-fav-toggle" id="weather-fav-toggle" title="즐겨찾기 목록">즐겨찾기</button>
            </div>
            <div class="weather-temp">${Math.round(cw.temperature)}°C</div>
            <div class="weather-desc">${wmo.text}</div>
            <div class="weather-wind">바람 ${cw.windspeed} km/h</div>
          </div>
        </div>
        <div class="weather-weekly">${weeklyHtml}</div>
      </div>
      <div class="weather-search-row" id="weather-search-row" style="display:none;">
        <input type="text" id="weather-city-input" class="weather-city-input" placeholder="도시 이름 입력 (예: 부산, Tokyo, New York)" autocomplete="off" />
        <button class="weather-search-btn" id="weather-search-btn">검색</button>
      </div>
      <div class="weather-fav-row" id="weather-fav-row" style="display:none;"></div>`;

    attachWeatherSearchEvents();
  } catch {
    el.innerHTML = '<span class="weather-error">날씨 정보를 불러올 수 없습니다.</span>';
  }
}

async function searchCityWeather() {
  const input = document.getElementById('weather-city-input');
  const query = input?.value.trim();
  if (!query) return;

  const el = document.getElementById('dash-weather');
  const prevBg = el.style.background;
  input.disabled = true;

  try {
    const gRes  = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1`);
    const gData = await gRes.json();
    if (!gData.length) {
      input.disabled = false;
      input.focus();
      input.style.borderColor = '#ff6b6b';
      setTimeout(() => { input.style.borderColor = ''; }, 1500);
      return;
    }
    const { lat, lon } = gData[0];
    const addr = gData[0].address || {};
    const city = addr.city || addr.town || addr.county || addr.state || query;
    await fetchAndRenderWeather(parseFloat(lat), parseFloat(lon), city);
  } catch {
    input.disabled = false;
    el.innerHTML = '<span class="weather-error">검색 중 오류가 발생했습니다.</span>';
  }
}

// ---- 즐겨찾기 ----
const WEATHER_FAV_KEY = 'weather_favorites_v1';

function getFavorites() {
  return JSON.parse(localStorage.getItem(WEATHER_FAV_KEY) || '[]');
}

function isFavorite(name) {
  return getFavorites().some(f => f.name === name);
}

function toggleFavorite() {
  if (!_weatherCity || _weatherLat === null) return;
  const favs = getFavorites();
  if (isFavorite(_weatherCity)) {
    localStorage.setItem(WEATHER_FAV_KEY, JSON.stringify(favs.filter(f => f.name !== _weatherCity)));
  } else {
    favs.push({ name: _weatherCity, lat: _weatherLat, lon: _weatherLon });
    localStorage.setItem(WEATHER_FAV_KEY, JSON.stringify(favs));
  }
  updateFavSaveBtn();
  // 즐겨찾기 패널이 열려있으면 갱신
  const favRow = document.getElementById('weather-fav-row');
  if (favRow && favRow.style.display !== 'none') renderFavRow();
}

function updateFavSaveBtn() {
  const btn = document.getElementById('weather-fav-save');
  if (!btn) return;
  const saved = isFavorite(_weatherCity);
  btn.textContent = saved ? '★' : '☆';
  btn.title = saved ? '즐겨찾기에서 제거' : '즐겨찾기에 추가';
  btn.classList.toggle('saved', saved);
}

function renderFavRow() {
  const row = document.getElementById('weather-fav-row');
  if (!row) return;
  const favs = getFavorites();
  if (!favs.length) {
    row.innerHTML = '<span class="weather-fav-empty">☆ 버튼으로 즐겨찾는 지역을 추가하세요.</span>';
    return;
  }
  row.innerHTML = favs.map((f, i) => `
    <button class="weather-fav-item" data-lat="${f.lat}" data-lon="${f.lon}" data-name="${f.name.replace(/"/g,'&quot;')}">
      ${f.name}
      <span class="weather-fav-del" data-idx="${i}">×</span>
    </button>`).join('');

  row.querySelectorAll('.weather-fav-item').forEach(btn => {
    btn.addEventListener('click', e => {
      if (e.target.classList.contains('weather-fav-del')) {
        e.stopPropagation();
        const favs2 = getFavorites();
        favs2.splice(parseInt(e.target.dataset.idx), 1);
        localStorage.setItem(WEATHER_FAV_KEY, JSON.stringify(favs2));
        updateFavSaveBtn();
        renderFavRow();
        return;
      }
      fetchAndRenderWeather(parseFloat(btn.dataset.lat), parseFloat(btn.dataset.lon), btn.dataset.name);
    });
  });
}

function attachWeatherSearchEvents() {
  const toggleBtn    = document.getElementById('weather-search-toggle');
  const searchRow    = document.getElementById('weather-search-row');
  const searchBtn    = document.getElementById('weather-search-btn');
  const input        = document.getElementById('weather-city-input');
  const favSaveBtn   = document.getElementById('weather-fav-save');
  const favToggleBtn = document.getElementById('weather-fav-toggle');
  const favRow       = document.getElementById('weather-fav-row');

  updateFavSaveBtn();

  toggleBtn?.addEventListener('click', () => {
    const hidden = searchRow.style.display === 'none';
    searchRow.style.display = hidden ? 'flex' : 'none';
    if (hidden) {
      favRow.style.display = 'none';
      setTimeout(() => input?.focus(), 50);
    }
  });

  favSaveBtn?.addEventListener('click', toggleFavorite);

  favToggleBtn?.addEventListener('click', () => {
    const hidden = favRow.style.display === 'none';
    favRow.style.display = hidden ? 'flex' : 'none';
    if (hidden) {
      searchRow.style.display = 'none';
      renderFavRow();
    }
  });

  searchBtn?.addEventListener('click', searchCityWeather);
  input?.addEventListener('keydown', e => { if (e.key === 'Enter') searchCityWeather(); });
}

function loadWeather() {
  const el = document.getElementById('dash-weather');
  if (!navigator.geolocation) {
    el.style.background = 'linear-gradient(135deg,#4b6cb7,#182848)';
    el.innerHTML = `<div class="weather-no-location">
      <div class="weather-desc">위치 정보를 지원하지 않습니다.</div>
      <div class="weather-search-row" style="display:flex;margin-top:12px;">
        <input type="text" id="weather-city-input" class="weather-city-input" placeholder="도시 이름으로 검색하세요" autocomplete="off" />
        <button class="weather-search-btn" id="weather-search-btn">검색</button>
      </div>
    </div>`;
    attachWeatherSearchEvents();
    return;
  }
  navigator.geolocation.getCurrentPosition(
    pos => fetchAndRenderWeather(pos.coords.latitude, pos.coords.longitude),
    () => {
      el.style.background = 'linear-gradient(135deg,#4b6cb7,#182848)';
      el.innerHTML = `<div class="weather-no-location">
        <div class="weather-desc" style="margin-bottom:12px;">위치 권한이 없습니다.<br>도시를 직접 검색해보세요.</div>
        <div class="weather-search-row" style="display:flex;">
          <input type="text" id="weather-city-input" class="weather-city-input" placeholder="도시 이름 입력 (예: 서울, 부산)" autocomplete="off" />
          <button class="weather-search-btn" id="weather-search-btn">검색</button>
        </div>
      </div>`;
      attachWeatherSearchEvents();
    }
  );
}

loadWeather();

// ===================================================
//  달력
// ===================================================
let calYear, calMonth;

function toDateStr(date) {
  return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
}

// 제목 반환 헬퍼 (기존 데이터 호환)
function getTodoTitle(todo) { return todo.headline || todo.text || '(제목 없음)'; }
function getTodoContent(todo) { return todo.headline ? (todo.text || '') : ''; }

function renderCalendar() {
  const titleEl = document.getElementById('cal-title');
  const gridEl  = document.getElementById('cal-grid');

  titleEl.textContent = `${calYear}년 ${calMonth + 1}월`;

  // 날짜별 계획 그룹핑
  const byDate = {};
  cachedTodos.forEach(t => {
    if (t.date) {
      if (!byDate[t.date]) byDate[t.date] = [];
      byDate[t.date].push(t);
    }
  });

  const todayStr    = toDateStr(new Date());
  const selectedVal = document.getElementById('todo-date-input').value;
  const firstDow    = new Date(calYear, calMonth, 1).getDay();
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();

  let html = '';
  for (let i = 0; i < firstDow; i++) html += '<div class="cal-cell empty"></div>';

  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${calYear}-${String(calMonth+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const dow     = (firstDow + d - 1) % 7;
    const isToday = dateStr === todayStr;
    const isSel   = dateStr === selectedVal && !isToday;
    const plans   = byDate[dateStr] || [];

    let cls = 'cal-cell';
    if (dow === 0) cls += ' sun';
    if (dow === 6) cls += ' sat';
    if (isToday)  cls += ' today';
    if (isSel)    cls += ' selected';
    if (plans.length) cls += ' has-plans';

    const eventsHtml = plans.slice(0, 2).map(p => {
      const tag = getTag(p.tag_id);
      const bg  = p.completed ? '#bbb' : (tag ? tag.color : '#4f8ef7');
      const fg  = p.completed ? '#fff' : (tag ? getTextColor(tag.color) : '#fff');
      return `<div class="cal-event-item${p.completed ? ' done' : ''}" style="background:${bg};color:${fg};">${escapeHtml(getTodoTitle(p))}</div>`;
    }).join('');
    const moreHtml = plans.length > 2 ? `<div class="cal-event-more">+${plans.length - 2} 더</div>` : '';

    html += `<div class="${cls}" data-date="${dateStr}">
      <span class="cal-day-num">${d}</span>
      <div class="cal-events">${eventsHtml}${moreHtml}</div>
    </div>`;
  }

  gridEl.innerHTML = html;

  gridEl.querySelectorAll('.cal-cell[data-date]').forEach(cell => {
    cell.addEventListener('click', () => {
      const date = cell.dataset.date;
      document.getElementById('todo-date-input').value = date;
      renderCalendar();
      if (byDate[date]?.length) {
        // 계획 있는 날짜 → 계획 상세 팝업
        openPlanModal(date, byDate[date]);
      } else {
        // 빈 날짜 → 계획 등록 모달
        openPlanAddModal();
      }
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
//  계획 팝업 모달 (날짜 클릭)
// ===================================================
const planModal      = document.getElementById('plan-modal');
const planModalClose = document.getElementById('plan-modal-close');
const planModalDate  = document.getElementById('plan-modal-date');
const planModalList  = document.getElementById('plan-modal-list');

function openPlanModal(dateStr, plans) {
  const [y, m, d] = dateStr.split('-');
  const days = ['일','월','화','수','목','금','토'];
  const dow  = new Date(+y, +m-1, +d).getDay();
  planModalDate.textContent = `${+y}년 ${+m}월 ${+d}일 (${days[dow]})`;

  planModalList.innerHTML = plans.map(p => `
    <div class="plan-modal-item${p.completed ? ' completed' : ''}" data-id="${p.id}">
      <button class="plan-modal-check" data-id="${p.id}">${p.completed ? '✓' : '○'}</button>
      <div class="plan-modal-body">
        <div class="plan-modal-headline">${escapeHtml(getTodoTitle(p))}</div>
        ${getTodoContent(p) ? `<div class="plan-modal-content">${escapeHtml(getTodoContent(p))}</div>` : ''}
      </div>
    </div>`).join('');

  planModalList.querySelectorAll('.plan-modal-check').forEach(btn => {
    btn.addEventListener('click', async () => {
      await toggleTodo(btn.dataset.id);
      // 팝업 내용 갱신
      const updated = cachedTodos.filter(t => t.date === dateStr);
      if (updated.length) openPlanModal(dateStr, updated);
      else closePlanModal();
    });
  });

  planModal.classList.add('active');
  planModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closePlanModal() {
  planModal.classList.remove('active');
  planModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

planModalClose.addEventListener('click', closePlanModal);
planModal.addEventListener('click', e => { if (e.target === planModal) closePlanModal(); });

// ===================================================
//  TODO — Supabase CRUD
// ===================================================
async function fetchTodos() {
  if (isGuest) {
    cachedTodos = JSON.parse(localStorage.getItem(GUEST_TODOS_KEY) || '[]');
    renderTodoList(); renderIncompletePanel(); renderCalendar();
    return;
  }
  const { data, error } = await db.from('todos').select('*').order('created_at', { ascending: true });
  if (!error) {
    cachedTodos = data;
    renderTodoList(); renderIncompletePanel(); renderCalendar();
  }
}

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
      <span>${escapeHtml(getTodoTitle(t))}</span>
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
  if (filterTagId)                    todos = todos.filter(t => t.tag_id === filterTagId);
  todos.sort((a, b) => {
    if (a.completed !== b.completed) return a.completed ? 1 : -1;
    return (a.date || '9999').localeCompare(b.date || '9999');
  });

  if (todos.length === 0) { listEl.innerHTML = '<div class="todo-empty">등록된 계획이 없습니다.</div>'; return; }

  listEl.innerHTML = todos.map(todo => {
    const title   = escapeHtml(getTodoTitle(todo));
    const content = escapeHtml(getTodoContent(todo));

    const tag    = getTag(todo.tag_id);
    const tagHtml = tag
      ? `<span class="tag-pill" style="background:${tag.color};color:${getTextColor(tag.color)};">${escapeHtml(tag.name)}</span>`
      : '';

    if (editingId === todo.id) {
      return `
        <div class="todo-item editing" data-id="${todo.id}">
          <div class="todo-edit-form">
            <input type="text" class="edit-headline-input" placeholder="제목" value="${escapeHtml(todo.headline || todo.text || '')}" />
            <textarea class="edit-text-input" placeholder="내용 (선택사항)" rows="2">${escapeHtml(todo.headline ? (todo.text || '') : '')}</textarea>
            <input type="date" class="edit-date-input" value="${todo.date || ''}" />
            <div class="tag-selector" id="edit-tag-selector-${todo.id}" data-selected="${todo.tag_id || ''}"></div>
            <div class="edit-actions">
              <button class="edit-save-btn" data-id="${todo.id}">저장</button>
              <button class="edit-cancel-btn">취소</button>
            </div>
          </div>
        </div>`;
    }
    return `
      <div class="todo-item ${todo.completed ? 'completed' : ''}" data-id="${todo.id}">
        <button class="todo-check-btn" data-id="${todo.id}">${todo.completed ? '✓' : '○'}</button>
        <div class="todo-item-content">
          <div class="todo-item-top">
            <span class="todo-item-headline">${title}</span>
            ${tagHtml}
          </div>
          ${content ? `<span class="todo-item-text">${content}</span>` : ''}
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
    btn.addEventListener('click', () => { editingId = btn.dataset.id; renderTodoList(); listEl.querySelector('.edit-headline-input')?.focus(); }));
  listEl.querySelectorAll('.todo-delete-btn').forEach(btn =>
    btn.addEventListener('click', () => deleteTodo(btn.dataset.id)));

  // 수정 폼 태그 selector 초기화
  listEl.querySelectorAll('[id^="edit-tag-selector-"]').forEach(el => {
    const initTagId = el.dataset.selected || null;
    renderTagSelector(el.id, initTagId, id => { el.dataset.selected = id || ''; });
  });

  listEl.querySelectorAll('.edit-save-btn').forEach(btn =>
    btn.addEventListener('click', () => {
      const item     = btn.closest('.todo-item');
      const headline = item.querySelector('.edit-headline-input').value.trim();
      const text     = item.querySelector('.edit-text-input').value.trim();
      const date     = item.querySelector('.edit-date-input').value;
      const tagSel   = item.querySelector('[id^="edit-tag-selector-"]');
      const tagId    = tagSel?.dataset.selected || null;
      if (headline) editTodo(btn.dataset.id, headline, text, date, tagId);
    }));
  listEl.querySelectorAll('.edit-cancel-btn').forEach(btn =>
    btn.addEventListener('click', () => { editingId = null; renderTodoList(); }));
  listEl.querySelectorAll('.edit-headline-input').forEach(input =>
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') input.closest('.todo-item').querySelector('.edit-save-btn').click();
      if (e.key === 'Escape') { editingId = null; renderTodoList(); }
    }));
}

// ---- CRUD ----
async function handleAddTodo() {
  if (!currentUser && !isGuest) return false;
  const headlineEl = document.getElementById('todo-headline');
  const textEl     = document.getElementById('todo-text');
  const dateEl     = document.getElementById('todo-date-input');
  const headline   = headlineEl.value.trim();
  if (!headline) { headlineEl.focus(); return false; }

  const isRepeat = document.getElementById('repeat-toggle').checked;
  const addBtn   = document.getElementById('todo-add-btn');

  if (isRepeat) {
    // ---- 반복 계획 ----
    const endStr   = document.getElementById('repeat-end-date').value;
    const interval = parseInt(document.getElementById('custom-interval').value) || 1;

    if (!dateEl.value) { alert('시작 날짜를 선택해주세요.'); return false; }
    if (!endStr)       { alert('반복 종료일을 선택해주세요.'); return false; }
    if (new Date(endStr) < new Date(dateEl.value)) { alert('종료일이 시작일보다 이전입니다.'); return false; }

    const dates = generateDates(dateEl.value, selectedRepeatType, interval, endStr);
    if (!dates.length) { alert('생성할 계획이 없습니다.'); return false; }

    addBtn.disabled = true;
    addBtn.textContent = `${dates.length}개 등록 중...`;

    if (isGuest) {
      const newItems = dates.map(date => ({
        id: 'guest-' + Date.now() + '-' + Math.random().toString(36).slice(2),
        headline, text: textEl.value.trim(), date, completed: false,
        tag_id: selectedTagId || null, created_at: new Date().toISOString(),
      }));
      cachedTodos.push(...newItems);
      localStorage.setItem(GUEST_TODOS_KEY, JSON.stringify(cachedTodos));
    } else {
      const todoArray = dates.map(date => ({
        user_id: currentUser.id,
        headline,
        text: textEl.value.trim(),
        date,
        completed: false,
        tag_id: selectedTagId || null,
      }));
      // Supabase는 한 번에 최대 1000행 삽입 가능 — 500개로 제한했으므로 안전
      const { data, error } = await db.from('todos').insert(todoArray).select();
      if (!error) { cachedTodos.push(...data); }
    }

    addBtn.disabled = false;
    addBtn.textContent = '추가하기';

  } else {
    // ---- 단일 계획 ----
    if (isGuest) {
      const newItem = {
        id: 'guest-' + Date.now(),
        headline, text: textEl.value.trim(), date: dateEl.value || null,
        completed: false, tag_id: selectedTagId || null, created_at: new Date().toISOString(),
      };
      cachedTodos.push(newItem);
      localStorage.setItem(GUEST_TODOS_KEY, JSON.stringify(cachedTodos));
    } else {
      const tempId  = 'temp-' + Date.now();
      const newItem = { id: tempId, headline, text: textEl.value.trim(), date: dateEl.value || null, completed: false, tag_id: selectedTagId || null, created_at: new Date().toISOString() };
      cachedTodos.push(newItem);

      const { data, error } = await db.from('todos')
        .insert([{ user_id: currentUser.id, headline: newItem.headline, text: newItem.text, date: newItem.date, completed: false, tag_id: newItem.tag_id }])
        .select().single();

      if (!error) {
        const idx = cachedTodos.findIndex(t => t.id === tempId);
        if (idx !== -1) cachedTodos[idx] = data;
      } else {
        cachedTodos = cachedTodos.filter(t => t.id !== tempId);
      }
    }
  }

  headlineEl.value = '';
  textEl.value     = '';
  renderTodoList(); renderIncompletePanel(); renderCalendar();
  return true;
}

async function toggleTodo(id) {
  const todo = cachedTodos.find(t => t.id === id);
  if (!todo) return;
  todo.completed = !todo.completed;
  renderTodoList(); renderIncompletePanel(); renderCalendar();
  if (isGuest) { localStorage.setItem(GUEST_TODOS_KEY, JSON.stringify(cachedTodos)); return; }
  await db.from('todos').update({ completed: todo.completed }).eq('id', id);
}

async function deleteTodo(id) {
  cachedTodos = cachedTodos.filter(t => t.id !== id);
  if (editingId === id) editingId = null;
  renderTodoList(); renderIncompletePanel(); renderCalendar();
  if (isGuest) { localStorage.setItem(GUEST_TODOS_KEY, JSON.stringify(cachedTodos)); return; }
  await db.from('todos').delete().eq('id', id);
}

async function editTodo(id, headline, text, date, tagId) {
  const todo = cachedTodos.find(t => t.id === id);
  if (!todo) return;
  todo.headline = headline; todo.text = text; todo.date = date || null; todo.tag_id = tagId || null;
  editingId = null;
  renderTodoList(); renderCalendar();
  if (isGuest) { localStorage.setItem(GUEST_TODOS_KEY, JSON.stringify(cachedTodos)); return; }
  await db.from('todos').update({ headline, text, date: date || null, tag_id: tagId || null }).eq('id', id);
}

// ===================================================
//  태그
// ===================================================
const TAG_COLORS = ['#e00404','#f7f70c','#62ec2b','#17e6f1','#0a6ce4','#be17f1','#ed357e'];

let cachedTags    = [];
let selectedTagId = null;  // 등록 모달에서 선택한 태그
let filterTagId   = null;  // 사이드바 태그 필터
let tagColorPick  = TAG_COLORS[0];

function getTextColor(hex) {
  const r = parseInt(hex.slice(1,3), 16);
  const g = parseInt(hex.slice(3,5), 16);
  const b = parseInt(hex.slice(5,7), 16);
  return (0.299*r + 0.587*g + 0.114*b) / 255 > 0.5 ? '#000' : '#fff';
}

function getTag(tagId) {
  return cachedTags.find(t => t.id === tagId) || null;
}

async function fetchTags() {
  if (isGuest) {
    cachedTags = JSON.parse(localStorage.getItem(GUEST_TAGS_KEY) || '[]');
    return;
  }
  const { data } = await db.from('tags').select('*').order('created_at', { ascending: true });
  if (data) cachedTags = data;
}

// 사이드바 태그 필터 렌더링
function renderTagFilter() {
  const row = document.getElementById('tag-filter-row');
  if (!row) return;

  if (!cachedTags.length) { row.innerHTML = ''; return; }

  const allActive = !filterTagId;
  row.innerHTML = `
    <button class="tag-filter-btn all-btn ${allActive ? 'active' : ''}" data-id="">전체</button>
    ${cachedTags.map(t => {
      const isActive = filterTagId === t.id;
      const border   = isActive ? `border-color:${t.color};box-shadow:0 0 0 2px ${t.color}40;` : '';
      return `<button class="tag-filter-btn" data-id="${t.id}"
        style="background:${t.color};color:${getTextColor(t.color)};${border}">
        ${escapeHtml(t.name)}
      </button>`;
    }).join('')}
  `;

  row.querySelectorAll('.tag-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id || null;
      // 같은 태그 클릭 시 해제
      filterTagId = filterTagId === id ? null : id;
      renderTagFilter();
      renderTodoList();
    });
  });
}

// 태그 선택 UI 렌더링
function renderTagSelector(containerId, currentTagId, onSelect) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const noneSelected = !currentTagId;
  container.innerHTML = `
    <button type="button" class="tag-option ${noneSelected ? 'none-selected' : ''}" data-id="">없음</button>
    ${cachedTags.map(t => {
      const isSelected = currentTagId === t.id;
      return `<button type="button"
        class="tag-option tag-colored ${isSelected ? 'color-selected' : ''}"
        data-id="${t.id}"
        style="background:${t.color};color:${getTextColor(t.color)};">
        ${escapeHtml(t.name)}
      </button>`;
    }).join('')}
  `;

  container.querySelectorAll('.tag-option').forEach(el => {
    el.addEventListener('click', () => {
      const id = el.dataset.id || null;
      onSelect(id);
      renderTagSelector(containerId, id, onSelect);
    });
  });
}

// 태그 관리 모달
const tagManageModal = document.getElementById('tag-manage-modal');
const tagManageClose = document.getElementById('tag-manage-close');
const tagManageBtn   = document.getElementById('tag-manage-btn');

function openTagManageModal() {
  renderTagManageList();
  renderTagColorPicker();
  tagManageModal.classList.add('active');
  tagManageModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeTagManageModal() {
  tagManageModal.classList.remove('active');
  tagManageModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function renderTagManageList() {
  const listEl = document.getElementById('tag-manage-list');
  if (!cachedTags.length) {
    listEl.innerHTML = '<div class="tag-manage-empty">아직 태그가 없습니다.</div>';
    return;
  }
  listEl.innerHTML = cachedTags.map(t => `
    <div class="tag-manage-item">
      <span class="tag-pill" style="background:${t.color};color:${getTextColor(t.color)};">${escapeHtml(t.name)}</span>
      <button class="tag-delete-btn" data-id="${t.id}">삭제</button>
    </div>`).join('');

  listEl.querySelectorAll('.tag-delete-btn').forEach(btn => {
    btn.addEventListener('click', () => deleteTag(btn.dataset.id));
  });
}

function renderTagColorPicker() {
  const picker = document.getElementById('tag-color-picker');
  picker.innerHTML = TAG_COLORS.map(color => `
    <div class="tag-color-swatch ${tagColorPick === color ? 'selected' : ''}"
         data-color="${color}"
         style="background:${color};"></div>`).join('');

  picker.querySelectorAll('.tag-color-swatch').forEach(s => {
    s.addEventListener('click', () => {
      tagColorPick = s.dataset.color;
      renderTagColorPicker();
    });
  });
}

async function createTag() {
  const nameInput = document.getElementById('tag-name-input');
  const name = nameInput.value.trim();
  if (!name) { nameInput.focus(); return; }

  if (isGuest) {
    const newTag = { id: 'guest-tag-' + Date.now(), name, color: tagColorPick, created_at: new Date().toISOString() };
    cachedTags.push(newTag);
    localStorage.setItem(GUEST_TAGS_KEY, JSON.stringify(cachedTags));
    nameInput.value = '';
    renderTagManageList();
    renderTagSelector('tag-selector', selectedTagId, id => { selectedTagId = id; });
    renderTagFilter();
    return;
  }

  const { data, error } = await db.from('tags')
    .insert([{ user_id: currentUser.id, name, color: tagColorPick }])
    .select().single();

  if (!error) {
    cachedTags.push(data);
    nameInput.value = '';
    renderTagManageList();
    renderTagSelector('tag-selector', selectedTagId, id => { selectedTagId = id; });
    renderTagFilter();
  }
}

async function deleteTag(id) {
  if (isGuest) {
    cachedTags = cachedTags.filter(t => t.id !== id);
    localStorage.setItem(GUEST_TAGS_KEY, JSON.stringify(cachedTags));
    if (selectedTagId === id) selectedTagId = null;
    if (filterTagId === id)   filterTagId   = null;
    renderTagManageList();
    renderTagSelector('tag-selector', selectedTagId, id => { selectedTagId = id; });
    renderTagFilter();
    renderTodoList();
    renderCalendar();
    return;
  }
  const { error } = await db.from('tags').delete().eq('id', id);
  if (!error) {
    cachedTags = cachedTags.filter(t => t.id !== id);
    if (selectedTagId === id) selectedTagId = null;
    if (filterTagId === id)   filterTagId   = null;
    renderTagManageList();
    renderTagSelector('tag-selector', selectedTagId, id => { selectedTagId = id; });
    renderTagFilter();
    renderTodoList();
    renderCalendar();
  }
}

tagManageBtn.addEventListener('click', openTagManageModal);
tagManageClose.addEventListener('click', closeTagManageModal);
tagManageModal.addEventListener('click', e => { if (e.target === tagManageModal) closeTagManageModal(); });
document.getElementById('tag-create-btn').addEventListener('click', createTag);
document.getElementById('tag-name-input').addEventListener('keydown', e => { if (e.key === 'Enter') createTag(); });

// ===================================================
//  반복 계획
// ===================================================
let selectedRepeatType = 'daily';

function generateDates(startStr, repeatType, customInterval, endStr) {
  const dates  = [];
  const end    = new Date(endStr + 'T00:00:00');
  let current  = new Date(startStr + 'T00:00:00');
  const MAX    = 500;

  while (current <= end && dates.length < MAX) {
    dates.push(toDateStr(current));
    const next = new Date(current);
    switch (repeatType) {
      case 'daily':   next.setDate(next.getDate() + 1); break;
      case '3days':   next.setDate(next.getDate() + 3); break;
      case 'weekly':  next.setDate(next.getDate() + 7); break;
      case 'monthly': next.setMonth(next.getMonth() + 1); break;
      case '3months': next.setMonth(next.getMonth() + 3); break;
      case '6months': next.setMonth(next.getMonth() + 6); break;
      case 'custom':  next.setDate(next.getDate() + (customInterval || 1)); break;
    }
    current = next;
  }
  return dates;
}

function updateRepeatPreview() {
  const preview  = document.getElementById('repeat-preview');
  const startStr = document.getElementById('todo-date-input').value;
  const endStr   = document.getElementById('repeat-end-date').value;
  const interval = parseInt(document.getElementById('custom-interval').value) || 1;

  if (!startStr || !endStr) { preview.textContent = ''; return; }

  if (new Date(endStr) < new Date(startStr)) {
    preview.textContent = '종료일이 시작일보다 이전입니다.';
    preview.className = 'repeat-preview warn';
    return;
  }

  const dates = generateDates(startStr, selectedRepeatType, interval, endStr);
  preview.textContent = `총 ${dates.length}개 계획이 등록됩니다.`;
  preview.className = 'repeat-preview';
}

// 반복 주기 버튼
document.querySelectorAll('.repeat-type-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.repeat-type-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedRepeatType = btn.dataset.type;
    document.getElementById('custom-interval-wrap').style.display =
      selectedRepeatType === 'custom' ? 'block' : 'none';
    updateRepeatPreview();
  });
});

// 반복 토글
document.getElementById('repeat-toggle').addEventListener('change', function () {
  document.getElementById('repeat-section').classList.toggle('visible', this.checked);
  if (this.checked) updateRepeatPreview();
});

document.getElementById('repeat-end-date').addEventListener('change', updateRepeatPreview);
document.getElementById('custom-interval').addEventListener('input', updateRepeatPreview);
document.getElementById('todo-date-input').addEventListener('change', updateRepeatPreview);

function resetRepeatUI() {
  const toggle = document.getElementById('repeat-toggle');
  toggle.checked = false;
  document.getElementById('repeat-section').classList.remove('visible');
  document.getElementById('repeat-preview').textContent = '';
  document.getElementById('repeat-end-date').value = '';
  selectedRepeatType = 'daily';
  document.querySelectorAll('.repeat-type-btn').forEach((b, i) => b.classList.toggle('active', i === 0));
  document.getElementById('custom-interval-wrap').style.display = 'none';
  document.getElementById('custom-interval').value = '2';
}

// ===================================================
//  계획 등록 모달
// ===================================================
const planAddModal  = document.getElementById('plan-add-modal');
const planAddClose  = document.getElementById('plan-add-close');
const openPlanAddBtn = document.getElementById('open-plan-add');

function openPlanAddModal() {
  renderIncompletePanel();
  renderTagSelector('tag-selector', selectedTagId, id => { selectedTagId = id; });
  planAddModal.classList.add('active');
  planAddModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('todo-headline')?.focus(), 100);
}

function closePlanAddModal() {
  planAddModal.classList.remove('active');
  planAddModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  selectedTagId = null;
  resetRepeatUI();
}

openPlanAddBtn.addEventListener('click', openPlanAddModal);
planAddClose.addEventListener('click', closePlanAddModal);
planAddModal.addEventListener('click', e => { if (e.target === planAddModal) closePlanAddModal(); });

// ---- 이벤트 ----
document.getElementById('todo-add-btn').addEventListener('click', async () => {
  await handleAddTodo();
  closePlanAddModal();
});
document.getElementById('todo-headline').addEventListener('keydown', e => { if (e.key === 'Enter') handleAddTodo(); });

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
  if (e.key === 'Escape') {
    if (tagManageModal.classList.contains('active')) closeTagManageModal();
    else if (planAddModal.classList.contains('active')) closePlanAddModal();
    else if (planModal.classList.contains('active')) closePlanModal();
    else if (modal.classList.contains('active')) closeModal();
  }
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
    if (res.ok) { contactForm.style.display = 'none'; successBox.style.display = 'block'; contactForm.reset(); }
    else alert('전송에 실패했습니다. 잠시 후 다시 시도해 주세요.');
  } catch { alert('네트워크 오류가 발생했습니다.'); }
  finally { submitBtn.disabled = false; submitBtn.textContent = '문의 보내기'; }
});

// ===================================================
//  초기화
// ===================================================
document.getElementById('todo-date-input').value = toDateStr(new Date());
initCalendar();
initAuth();
