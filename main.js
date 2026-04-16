// ===================================================
//  I18N — 다국어 지원
// ===================================================
const TRANSLATIONS = {
  ko: {
    // 헤더
    streak:              '{0}일 연속 출석',
    logout:              '로그아웃',
    guest_mode:          '게스트 모드',
    login:               '로그인',
    widget_edit:         '✏ 편집',
    widget_edit_done:    '✓ 편집 완료',
    widget_add:          '+ 위젯 추가',
    widget_reset:        '↺ 초기화',
    theme_toggle_dark:   '다크 모드로 전환',
    theme_toggle_light:  '라이트 모드로 전환',
    contact_btn:         '✉ 문의하기',
    // 로그인 오버레이
    login_desc:          '로그인하면 어디서든\n내 계획을 확인할 수 있습니다.',
    google_login:        'Google로 로그인',
    or:                  '또는',
    guest_btn:           '게스트로 이용하기',
    guest_note:          '게스트 데이터는 이 기기에만 저장됩니다',
    // 위젯 제목
    widget_weather:      '🌤 날씨',
    widget_calendar:     '📅 달력',
    widget_plans:        '📋 계획 목록',
    widget_clock:        '🕐 시계',
    widget_progress:     '📊 오늘 진행률',
    widget_pomodoro:     '🍅 뽀모도로',
    widget_memo:         '📝 메모장',
    // 달력
    days_short:          ['일','월','화','수','목','금','토'],
    months:              ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
    today:               '오늘',
    cal_add:             '+ 계획 등록',
    cal_more:            '+{0} 더',
    cal_title:           '{0}년 {1}월',
    // 날짜 표시
    date_display:        '{0}년 {1}월 {2}일 ({3})',
    plan_modal_date:     '{0}년 {1}월 {2}일 ({3})',
    // 계획 목록
    plans_title:         '계획 목록',
    select_mode:         '선택하기',
    sort_datetime:       '⇅ 날짜+시간순',
    sort_priority:       '⇅ 우선순위순',
    sort_created:        '⇅ 등록순',
    delete_all:          '전체 삭제',
    filter_all:          '전체',
    filter_incomplete:   '미완료',
    filter_complete:     '완료',
    filter_today:        '오늘',
    filter_future:       '미래',
    select_all:          '전체 선택',
    n_selected:          '{0}개 선택',
    delete:              '삭제',
    cancel:              '취소',
    no_title:            '(제목 없음)',
    no_plans:            '등록된 계획이 없습니다.',
    edit_item:           '수정',
    delete_item:         '삭제',
    save:                '저장',
    time_undecided:      '시간 미정',
    time_undecided_badge:'🕐 시간 미정',
    priority_tbd:        '미정',
    incomplete_title:    '⚠ 미완료 계획',
    // 진행률
    no_today_plans:      '오늘 등록된 계획이 없습니다',
    today_tasks:         '오늘 할 일',
    progress_count:      '완료 {0}개 / 전체 {1}개',
    // 계획 등록 모달
    modal_add_plan:      '계획 등록',
    label_title:         '제목',
    placeholder_title:   '계획 제목을 입력하세요',
    label_content:       '내용',
    optional:            '(선택)',
    placeholder_content: '상세 내용을 입력하세요',
    label_start_date:    '시작 날짜',
    label_time:          '시간',
    label_priority:      '우선순위',
    label_tag:           '태그',
    tag_manage_link:     '+ 태그 관리',
    repeat_plan:         '반복 계획',
    repeat_period:       '반복 주기',
    repeat_daily:        '매일',
    repeat_3days:        '3일',
    repeat_weekly:       '매주',
    repeat_monthly:      '매달',
    repeat_3months:      '3개월',
    repeat_6months:      '반년',
    repeat_custom:       '임의',
    repeat_interval:     '반복 간격',
    repeat_interval_sfx: '일마다',
    repeat_end_date:     '반복 종료일',
    add_btn:             '추가하기',
    adding_n:            '{0}개 등록 중...',
    alert_no_start:      '시작 날짜를 선택해주세요.',
    alert_no_end:        '반복 종료일을 선택해주세요.',
    alert_end_before:    '종료일이 시작일보다 이전입니다.',
    alert_no_items:      '생성할 계획이 없습니다.',
    preview_n:           '총 {0}개 계획이 등록됩니다.',
    preview_end_before:  '종료일이 시작일보다 이전입니다.',
    // 태그
    tag_manage_title:    '태그 관리',
    no_tags:             '아직 태그가 없습니다.',
    new_tag_name:        '새 태그 이름',
    tag_name_ph:         '태그 이름 입력',
    color_select:        '색상 선택',
    add_tag:             '태그 추가',
    tag_none:            '없음',
    tag_filter_all:      '전체',
    // 문의 모달
    contact_title:       '제휴 문의',
    contact_subtitle:    '아래 양식을 작성해 주시면 빠르게 연락드리겠습니다.',
    success_title:       '문의가 접수되었습니다!',
    success_desc:        '빠른 시일 내로 회신 드리겠습니다.',
    close:               '닫기',
    label_name:          '이름 / 회사명',
    ph_name:             '홍길동 / (주)회사명',
    label_email:         '이메일',
    label_phone:         '연락처',
    ph_phone:            '010-0000-0000',
    label_type:          '문의 유형',
    type_ph:             '선택해 주세요',
    type_ad:             '광고 / 마케팅',
    type_content:        '콘텐츠 제휴',
    type_tech:           '기술 협력',
    type_other:          '기타',
    label_message:       '문의 내용',
    ph_message:          '문의 내용을 입력해 주세요.',
    submit:              '문의 보내기',
    submitting:          '전송 중...',
    rate_limit:          '하루 최대 3건까지만 문의할 수 있습니다. 내일 다시 시도해 주세요.',
    send_failed:         '전송에 실패했습니다. 잠시 후 다시 시도해 주세요.',
    network_error:       '네트워크 오류가 발생했습니다.',
    // 날씨
    weather_loading:     '📍 위치 정보를 가져오는 중...',
    current_location:    '현재 위치',
    search_city:         '다른 지역 검색',
    fav_add:             '즐겨찾기에 추가',
    fav_remove:          '즐겨찾기에서 제거',
    favorites:           '즐겨찾기',
    wind:                '바람 {0} km/h',
    city_search_ph:      '도시 이름 입력 (예: 부산, Tokyo, New York)',
    search:              '검색',
    no_geo:              '위치 정보를 지원하지 않습니다.',
    no_geo_ph:           '도시 이름으로 검색하세요',
    no_perm:             '위치 권한이 없습니다.<br>도시를 직접 검색해보세요.',
    no_perm_ph:          '도시 이름 입력 (예: 서울, 부산)',
    weather_error:       '날씨 정보를 불러올 수 없습니다.',
    search_error:        '검색 중 오류가 발생했습니다.',
    fav_empty:           '☆ 버튼으로 즐겨찾는 지역을 추가하세요.',
    unknown_weather:     '알 수 없음',
    // 위젯 시스템
    widget_no_hidden:    '숨긴 위젯이 없어요',
    widget_add_suffix:   ' 추가',
    widget_clock_add:    '🕐 시계 추가',
    reset_confirm:       '위젯 배치를 기본값으로 초기화할까요?',
    // 선택 삭제
    del_selected:        '{0}개의 계획을 삭제할까요?',
    del_all:             '현재 목록의 계획 {0}개를 모두 삭제할까요?',
    // 메모
    memo_default:        '메모 1',
    memo_tab_n:          '메모 {0}',
    memo_mode_text:      '✏ 텍스트',
    memo_mode_draw:      '🖌 그리기',
    memo_mode_combined:  '✏🖌 같이쓰기',
    memo_sub_text:       '✏ 텍스트 편집',
    memo_sub_draw:       '🖌 그리기',
    memo_eraser:         '🧹 지우개',
    memo_clear:          '🗑 전체',
    memo_ph:             '메모를 입력하세요...',
    memo_rename:         '탭 이름 변경:',
    memo_last_tab:       '마지막 탭은 삭제할 수 없어요.',
    // 뽀모도로
    pomo_focus:          '🍅 집중',
    pomo_break:          '☕ 휴식',
    pomo_longbreak:      '🌙 긴 휴식',
    pomo_pause:          '⏸ 일시정지',
    pomo_start:          '▶ 시작',
    pomo_skip_title:     '다음 단계로',
    pomo_reset_title:    '초기화',
    pomo_mute_off:       '알람 끄기',
    pomo_mute_on:        '알람 켜기',
    pomo_focus_lbl:      '집중',
    pomo_break_lbl:      '휴식',
    pomo_min:            '분',
    pomo_notify_focus:   '🍅 집중 시간을 시작하세요!',
    pomo_notify_break:   '☕ 잠깐 쉬어가세요!',
    pomo_notify_long:    '🌙 긴 휴식 시간입니다!',
    pomo_notify_title:   '뽀모도로',
    // 시계 타임존
    tz_korea:      '🇰🇷 한국',
    tz_japan:      '🇯🇵 일본',
    tz_china:      '🇨🇳 중국',
    tz_singapore:  '🇸🇬 싱가포르',
    tz_india:      '🇮🇳 인도',
    tz_dubai:      '🇦🇪 두바이',
    tz_russia:     '🇷🇺 러시아(모스크바)',
    tz_uk:         '🇬🇧 영국',
    tz_germany:    '🇩🇪 독일',
    tz_france:     '🇫🇷 프랑스',
    tz_us_east:    '🇺🇸 미국 동부',
    tz_us_west:    '🇺🇸 미국 서부',
    tz_brazil:     '🇧🇷 브라질',
    tz_australia:  '🇦🇺 호주(시드니)',
    tz_newzealand: '🇳🇿 뉴질랜드',
    // 푸터
    privacy:       '개인정보처리방침',
    ext_download:  '🧩 크롬 익스텐션 다운로드',
  },
  en: {
    // Header
    streak:              '{0}-day streak 🔥',
    logout:              'Logout',
    guest_mode:          'Guest Mode',
    login:               'Login',
    widget_edit:         '✏ Edit',
    widget_edit_done:    '✓ Done',
    widget_add:          '+ Add Widget',
    widget_reset:        '↺ Reset',
    theme_toggle_dark:   'Switch to dark mode',
    theme_toggle_light:  'Switch to light mode',
    contact_btn:         '✉ Contact',
    // Login overlay
    login_desc:          'Log in to access your plans\nfrom anywhere.',
    google_login:        'Sign in with Google',
    or:                  'or',
    guest_btn:           'Continue as Guest',
    guest_note:          'Guest data is saved on this device only',
    // Widget titles
    widget_weather:      '🌤 Weather',
    widget_calendar:     '📅 Calendar',
    widget_plans:        '📋 Plans',
    widget_clock:        '🕐 Clock',
    widget_progress:     '📊 Today\'s Progress',
    widget_pomodoro:     '🍅 Pomodoro',
    widget_memo:         '📝 Memo',
    // Calendar
    days_short:          ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
    months:              ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    today:               'Today',
    cal_add:             '+ Add Plan',
    cal_more:            '+{0} more',
    cal_title:           '{1} {0}',
    // Date display (args: year, month, day, dow)
    date_display:        '{1}/{2}/{0} ({3})',
    plan_modal_date:     '{1}/{2}/{0} ({3})',
    // Plans
    plans_title:         'Plans',
    select_mode:         'Select',
    sort_datetime:       '⇅ Date & Time',
    sort_priority:       '⇅ Priority',
    sort_created:        '⇅ Created',
    delete_all:          'Delete All',
    filter_all:          'All',
    filter_incomplete:   'Incomplete',
    filter_complete:     'Done',
    filter_today:        'Today',
    filter_future:       'Future',
    select_all:          'Select All',
    n_selected:          '{0} selected',
    delete:              'Delete',
    cancel:              'Cancel',
    no_title:            '(No title)',
    no_plans:            'No plans yet.',
    edit_item:           'Edit',
    delete_item:         'Delete',
    save:                'Save',
    time_undecided:      'Time TBD',
    time_undecided_badge:'🕐 Time TBD',
    priority_tbd:        'TBD',
    incomplete_title:    '⚠ Incomplete Plans',
    // Progress
    no_today_plans:      'No plans for today',
    today_tasks:         'Today\'s Tasks',
    progress_count:      '{0} / {1} completed',
    // Add plan modal
    modal_add_plan:      'Add Plan',
    label_title:         'Title',
    placeholder_title:   'Enter plan title',
    label_content:       'Content',
    optional:            '(optional)',
    placeholder_content: 'Enter details',
    label_start_date:    'Start Date',
    label_time:          'Time',
    label_priority:      'Priority',
    label_tag:           'Tag',
    tag_manage_link:     '+ Manage Tags',
    repeat_plan:         'Repeat',
    repeat_period:       'Repeat Period',
    repeat_daily:        'Daily',
    repeat_3days:        '3 Days',
    repeat_weekly:       'Weekly',
    repeat_monthly:      'Monthly',
    repeat_3months:      '3 Months',
    repeat_6months:      '6 Months',
    repeat_custom:       'Custom',
    repeat_interval:     'Repeat Interval',
    repeat_interval_sfx: 'days',
    repeat_end_date:     'End Date',
    add_btn:             'Add',
    adding_n:            'Adding {0}...',
    alert_no_start:      'Please select a start date.',
    alert_no_end:        'Please select an end date.',
    alert_end_before:    'End date is before start date.',
    alert_no_items:      'No plans to create.',
    preview_n:           '{0} plans will be added.',
    preview_end_before:  'End date is before start date.',
    // Tags
    tag_manage_title:    'Manage Tags',
    no_tags:             'No tags yet.',
    new_tag_name:        'New tag name',
    tag_name_ph:         'Enter tag name',
    color_select:        'Choose Color',
    add_tag:             'Add Tag',
    tag_none:            'None',
    tag_filter_all:      'All',
    // Contact modal
    contact_title:       'Contact Us',
    contact_subtitle:    'Fill out the form below and we\'ll get back to you.',
    success_title:       'Message sent!',
    success_desc:        'We\'ll get back to you soon.',
    close:               'Close',
    label_name:          'Name / Company',
    ph_name:             'John Doe / Company Ltd.',
    label_email:         'Email',
    label_phone:         'Phone',
    ph_phone:            '+1-000-000-0000',
    label_type:          'Inquiry Type',
    type_ph:             'Please select',
    type_ad:             'Advertising / Marketing',
    type_content:        'Content Partnership',
    type_tech:           'Technical Collaboration',
    type_other:          'Other',
    label_message:       'Message',
    ph_message:          'Enter your message.',
    submit:              'Send Message',
    submitting:          'Sending...',
    rate_limit:          'You can only send 3 messages per day. Try again tomorrow.',
    send_failed:         'Failed to send. Please try again later.',
    network_error:       'A network error occurred.',
    // Weather
    weather_loading:     '📍 Getting your location...',
    current_location:    'Current Location',
    search_city:         'Search another city',
    fav_add:             'Add to favorites',
    fav_remove:          'Remove from favorites',
    favorites:           'Favorites',
    wind:                'Wind {0} km/h',
    city_search_ph:      'Enter city name (e.g. London, Tokyo, New York)',
    search:              'Search',
    no_geo:              'Geolocation is not supported.',
    no_geo_ph:           'Search by city name',
    no_perm:             'Location permission denied.<br>Search for a city manually.',
    no_perm_ph:          'Enter city name (e.g. London, Paris)',
    weather_error:       'Could not load weather data.',
    search_error:        'An error occurred during search.',
    fav_empty:           'Use ☆ to save your favorite locations.',
    unknown_weather:     'Unknown',
    // Widget system
    widget_no_hidden:    'No hidden widgets',
    widget_add_suffix:   ' Add',
    widget_clock_add:    '🕐 Add Clock',
    reset_confirm:       'Reset widget layout to defaults?',
    // Delete confirms
    del_selected:        'Delete {0} plans?',
    del_all:             'Delete all {0} plans in the current view?',
    // Memo
    memo_default:        'Memo 1',
    memo_tab_n:          'Memo {0}',
    memo_mode_text:      '✏ Text',
    memo_mode_draw:      '🖌 Draw',
    memo_mode_combined:  '✏🖌 Combined',
    memo_sub_text:       '✏ Edit Text',
    memo_sub_draw:       '🖌 Draw',
    memo_eraser:         '🧹 Eraser',
    memo_clear:          '🗑 Clear All',
    memo_ph:             'Enter your memo...',
    memo_rename:         'Rename tab:',
    memo_last_tab:       'Cannot delete the last tab.',
    // Pomodoro
    pomo_focus:          '🍅 Focus',
    pomo_break:          '☕ Break',
    pomo_longbreak:      '🌙 Long Break',
    pomo_pause:          '⏸ Pause',
    pomo_start:          '▶ Start',
    pomo_skip_title:     'Next',
    pomo_reset_title:    'Reset',
    pomo_mute_off:       'Mute alarm',
    pomo_mute_on:        'Unmute alarm',
    pomo_focus_lbl:      'Focus',
    pomo_break_lbl:      'Break',
    pomo_min:            'min',
    pomo_notify_focus:   '🍅 Time to focus!',
    pomo_notify_break:   '☕ Take a break!',
    pomo_notify_long:    '🌙 Long break time!',
    pomo_notify_title:   'Pomodoro',
    // Timezones
    tz_korea:      '🇰🇷 Korea',
    tz_japan:      '🇯🇵 Japan',
    tz_china:      '🇨🇳 China',
    tz_singapore:  '🇸🇬 Singapore',
    tz_india:      '🇮🇳 India',
    tz_dubai:      '🇦🇪 Dubai',
    tz_russia:     '🇷🇺 Russia (Moscow)',
    tz_uk:         '🇬🇧 UK',
    tz_germany:    '🇩🇪 Germany',
    tz_france:     '🇫🇷 France',
    tz_us_east:    '🇺🇸 US East',
    tz_us_west:    '🇺🇸 US West',
    tz_brazil:     '🇧🇷 Brazil',
    tz_australia:  '🇦🇺 Australia (Sydney)',
    tz_newzealand: '🇳🇿 New Zealand',
    // Footer
    privacy:       'Privacy Policy',
    ext_download:  '🧩 Download Chrome Extension',
  },
};

let currentLang = (() => {
  const saved = localStorage.getItem('dp_lang');
  if (saved) return saved;
  const browser = (navigator.language || navigator.userLanguage || 'ko').toLowerCase();
  return browser.startsWith('ko') ? 'ko' : 'en';
})();

function t(key, ...args) {
  const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.ko;
  let str = dict[key];
  if (str === undefined) str = (TRANSLATIONS.ko)[key];
  if (str === undefined) return key;
  if (Array.isArray(str)) return str;
  args.forEach((a, i) => { str = str.replace(new RegExp(`\\{${i}\\}`, 'g'), String(a)); });
  return str;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    el.title = t(el.dataset.i18nTitle);
  });
  // 언어 토글 버튼
  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) langBtn.textContent = currentLang === 'ko' ? 'EN' : '한';
  // HTML lang 속성
  document.getElementById('html-root')?.setAttribute('lang', currentLang === 'ko' ? 'ko' : 'en');
  // 달력 요일 헤더
  const weekdayEl = document.getElementById('cal-weekdays');
  if (weekdayEl) {
    const days = t('days_short');
    const spans = weekdayEl.querySelectorAll('span');
    spans.forEach((sp, i) => { sp.textContent = days[i]; });
  }
  // 로그인 설명문 (줄바꿈 포함)
  const loginDesc = document.getElementById('login-desc');
  if (loginDesc) loginDesc.innerHTML = t('login_desc').replace(/\n/g, '<br>');
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('dp_lang', lang);
  applyTranslations();
  // 동적 렌더링 갱신
  initDateDisplay();
  if (_cachedWeatherData && _weatherLat !== null) {
    renderWeatherUI(_cachedWeatherData, _weatherCity);
  }
  renderCalendar();
  renderTodoList();
  renderIncompletePanel();
  renderProgressWidget();
  renderPomoTimer();
  updateThemeBtn(document.body.classList.contains('dark') ? 'dark' : 'light');
  renderMemoContent();
  renderTagFilter();
  renderTagSelector('tag-selector', selectedTagId, id => { selectedTagId = id; });
}

// ===================================================
//  SUPABASE SETUP
// ===================================================
const SUPABASE_URL = 'https://wtrastebtdlkusmgkwyj.supabase.co';
const SUPABASE_KEY = 'sb_publishable_zsPwpQTmfyiKogJmau1_Jw_vD5qfJ-K';
const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: {
    flowType: 'pkce',        // implicit 대신 PKCE — 토큰이 URL에 노출되지 않음
    detectSessionInUrl: true, // 리다이렉트 후 자동으로 코드 교환
  }
});

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
  db.auth.onAuthStateChange((_event, session) => {
    // 로그인 후 URL에 남은 인증 파라미터 제거
    if (window.location.hash.includes('access_token') ||
        window.location.search.includes('code=')) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
    handleSession(session);
  });
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
    renderProgressWidget();
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
  renderProgressWidget();
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
  const isExtension = typeof chrome !== 'undefined' && !!chrome.runtime?.id;
  const redirectTo  = isExtension
    ? chrome.runtime.getURL('newtab.html')
    : window.location.origin;
  await db.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo },
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
  badge.innerHTML = t('streak', streak);
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
function initDateDisplay() {
  const now  = new Date();
  const days = t('days_short');
  document.getElementById('dash-date').textContent =
    t('date_display', now.getFullYear(), now.getMonth()+1, now.getDate(), days[now.getDay()]);
}
initDateDisplay();

// ===================================================
//  날씨
// ===================================================
const WMO_TEXT = {
  ko: {
    0:'맑음', 1:'대체로 맑음', 2:'구름 조금', 3:'흐림',
    45:'안개', 48:'결빙 안개',
    51:'가벼운 이슬비', 53:'이슬비', 55:'강한 이슬비',
    61:'가벼운 비', 63:'비', 65:'강한 비',
    71:'가벼운 눈', 73:'눈', 75:'강한 눈',
    80:'소나기', 81:'강한 소나기', 82:'폭우',
    95:'뇌우', 99:'강한 우박 뇌우',
  },
  en: {
    0:'Clear sky', 1:'Mainly clear', 2:'Partly cloudy', 3:'Overcast',
    45:'Fog', 48:'Icy fog',
    51:'Light drizzle', 53:'Drizzle', 55:'Heavy drizzle',
    61:'Light rain', 63:'Rain', 65:'Heavy rain',
    71:'Light snow', 73:'Snow', 75:'Heavy snow',
    80:'Showers', 81:'Heavy showers', 82:'Violent showers',
    95:'Thunderstorm', 99:'Heavy hail storm',
  },
};

function getWmoText(code) {
  return (WMO_TEXT[currentLang] || WMO_TEXT.ko)[code] || t('unknown_weather');
}

const WMO = {
  0:  { get text(){ return getWmoText(0);  }, icon:'☀️',  bg:'linear-gradient(135deg,#f7971e,#ffd200)' },
  1:  { get text(){ return getWmoText(1);  }, icon:'🌤️', bg:'linear-gradient(135deg,#f7971e,#ffd200)' },
  2:  { get text(){ return getWmoText(2);  }, icon:'⛅',  bg:'linear-gradient(135deg,#667eea,#764ba2)' },
  3:  { get text(){ return getWmoText(3);  }, icon:'☁️',  bg:'linear-gradient(135deg,#4b6cb7,#182848)' },
  45: { get text(){ return getWmoText(45); }, icon:'🌫️', bg:'linear-gradient(135deg,#757f9a,#d7dde8)' },
  48: { get text(){ return getWmoText(48); }, icon:'🌫️', bg:'linear-gradient(135deg,#757f9a,#d7dde8)' },
  51: { get text(){ return getWmoText(51); }, icon:'🌦️', bg:'linear-gradient(135deg,#4b6cb7,#182848)' },
  53: { get text(){ return getWmoText(53); }, icon:'🌦️', bg:'linear-gradient(135deg,#4b6cb7,#182848)' },
  55: { get text(){ return getWmoText(55); }, icon:'🌧️', bg:'linear-gradient(135deg,#2c3e50,#4ca1af)' },
  61: { get text(){ return getWmoText(61); }, icon:'🌧️', bg:'linear-gradient(135deg,#2c3e50,#4ca1af)' },
  63: { get text(){ return getWmoText(63); }, icon:'🌧️', bg:'linear-gradient(135deg,#2c3e50,#4ca1af)' },
  65: { get text(){ return getWmoText(65); }, icon:'🌧️', bg:'linear-gradient(135deg,#1a1a2e,#16213e)' },
  71: { get text(){ return getWmoText(71); }, icon:'🌨️', bg:'linear-gradient(135deg,#89cff0,#6190b0)' },
  73: { get text(){ return getWmoText(73); }, icon:'❄️',  bg:'linear-gradient(135deg,#89cff0,#6190b0)' },
  75: { get text(){ return getWmoText(75); }, icon:'❄️',  bg:'linear-gradient(135deg,#667db6,#0082c8)' },
  80: { get text(){ return getWmoText(80); }, icon:'🌦️', bg:'linear-gradient(135deg,#4b6cb7,#182848)' },
  81: { get text(){ return getWmoText(81); }, icon:'🌧️', bg:'linear-gradient(135deg,#2c3e50,#4ca1af)' },
  82: { get text(){ return getWmoText(82); }, icon:'⛈️',  bg:'linear-gradient(135deg,#1a1a2e,#16213e)' },
  95: { get text(){ return getWmoText(95); }, icon:'⛈️',  bg:'linear-gradient(135deg,#1a1a2e,#16213e)' },
  99: { get text(){ return getWmoText(99); }, icon:'⛈️',  bg:'linear-gradient(135deg,#1a1a2e,#16213e)' },
};

let _weatherLat = null;
let _weatherLon = null;
let _weatherCity = '';
let _cachedWeatherData = null;

function renderWeatherUI(wData, city) {
  const el = document.getElementById('dash-weather');
  if (!el || !wData) return;
  const cw  = wData.current_weather;
  const wmo = WMO[cw.weathercode] || { text: t('unknown_weather'), icon:'🌡️', bg:'linear-gradient(135deg,#667eea,#764ba2)' };
  el.style.background = wmo.bg;

  const days  = t('days_short');
  const daily = wData.daily;
  const weeklyHtml = daily ? daily.time.map((dateStr, i) => {
    const d       = new Date(dateStr + 'T00:00:00');
    const dayName = i === 0 ? t('today') : days[d.getDay()];
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
            <button class="weather-search-toggle" id="weather-search-toggle" title="${t('search_city')}">🔍</button>
            <button class="weather-fav-save" id="weather-fav-save" title="${t('fav_add')}">☆</button>
            <button class="weather-fav-toggle" id="weather-fav-toggle" title="${t('favorites')}">${t('favorites')}</button>
          </div>
          <div class="weather-temp">${Math.round(cw.temperature)}°C</div>
          <div class="weather-desc">${wmo.text}</div>
          <div class="weather-wind">${t('wind', cw.windspeed)}</div>
        </div>
      </div>
      <div class="weather-weekly">${weeklyHtml}</div>
    </div>
    <div class="weather-search-row" id="weather-search-row" style="display:none;">
      <input type="text" id="weather-city-input" class="weather-city-input" placeholder="${t('city_search_ph')}" autocomplete="off" />
      <button class="weather-search-btn" id="weather-search-btn">${t('search')}</button>
    </div>
    <div class="weather-fav-row" id="weather-fav-row" style="display:none;"></div>`;

  attachWeatherSearchEvents();
}

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
      city = gData.address?.city || gData.address?.town || gData.address?.county || t('current_location');
    }

    _weatherLat = lat; _weatherLon = lon; _weatherCity = city;
    _cachedWeatherData = wData;

    renderWeatherUI(wData, city);
  } catch {
    el.innerHTML = `<span class="weather-error">${t('weather_error')}</span>`;
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
    el.innerHTML = `<span class="weather-error">${t('search_error')}</span>`;
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
  btn.title = saved ? t('fav_remove') : t('fav_add');
  btn.classList.toggle('saved', saved);
}

function renderFavRow() {
  const row = document.getElementById('weather-fav-row');
  if (!row) return;
  const favs = getFavorites();
  if (!favs.length) {
    row.innerHTML = `<span class="weather-fav-empty">${t('fav_empty')}</span>`;
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
      <div class="weather-desc">${t('no_geo')}</div>
      <div class="weather-search-row" style="display:flex;margin-top:12px;">
        <input type="text" id="weather-city-input" class="weather-city-input" placeholder="${t('no_geo_ph')}" autocomplete="off" />
        <button class="weather-search-btn" id="weather-search-btn">${t('search')}</button>
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
        <div class="weather-desc" style="margin-bottom:12px;">${t('no_perm')}</div>
        <div class="weather-search-row" style="display:flex;">
          <input type="text" id="weather-city-input" class="weather-city-input" placeholder="${t('no_perm_ph')}" autocomplete="off" />
          <button class="weather-search-btn" id="weather-search-btn">${t('search')}</button>
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
function getTodoTitle(todo) { return todo.headline || todo.text || t('no_title'); }
function getTodoContent(todo) { return todo.headline ? (todo.text || '') : ''; }

function renderCalendar() {
  const titleEl = document.getElementById('cal-title');
  const gridEl  = document.getElementById('cal-grid');

  titleEl.textContent = t('cal_title', calYear, calMonth + 1);

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
    const moreHtml = plans.length > 2 ? `<div class="cal-event-more">${t('cal_more', plans.length - 2)}</div>` : '';

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
  const days = t('days_short');
  const dow  = new Date(+y, +m-1, +d).getDay();
  planModalDate.textContent = t('plan_modal_date', +y, +m, +d, days[dow]);

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
    renderTodoList(); renderIncompletePanel(); renderCalendar(); renderProgressWidget();
    return;
  }
  const { data, error } = await db.from('todos').select('*').order('created_at', { ascending: true });
  if (!error) {
    cachedTodos = data;
    renderTodoList(); renderIncompletePanel(); renderCalendar(); renderProgressWidget();
  }
}

let currentFilter    = 'all';
let currentSort      = 'datetime';
let editingId        = null;
let selectionMode    = false;
let selectedIds      = new Set();
let isTimeUndecided  = false;
let selectedPriority = null; // null | 0(미정) | 1-5

const PRIORITY_CFG = {
  1: { bg: '#e74c3c', text: '#fff',  label: 'P1' },
  2: { bg: '#e67e22', text: '#fff',  label: 'P2' },
  3: { bg: '#f1c40f', text: '#333',  label: 'P3' },
  4: { bg: '#2ecc71', text: '#fff',  label: 'P4' },
  5: { bg: '#95a5a6', text: '#fff',  label: 'P5' },
  0: { bg: '#d0d0d0', text: '#777',  label: null }, // label은 t()로 동적 처리
};

function escapeHtml(str) {
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ---- 미완료 패널 ----
function renderIncompletePanel() {
  const panel      = document.getElementById('incomplete-panel');
  const listEl     = document.getElementById('incomplete-list');
  const incomplete = cachedTodos.filter(td => !td.completed);
  if (incomplete.length === 0) { panel.style.display = 'none'; return; }

  // 미완료 패널 제목 갱신
  const titleEl = panel.querySelector('.incomplete-panel-title');
  if (titleEl) titleEl.textContent = t('incomplete_title');

  listEl.innerHTML = incomplete.map(td => `
    <div class="incomplete-item">
      <span class="incomplete-dot"></span>
      <span>${escapeHtml(getTodoTitle(td))}</span>
      ${td.date ? `<span class="incomplete-item-date">${td.date}</span>` : ''}
    </div>`).join('');
  panel.style.display = 'block';
}

// ---- 오늘 진행률 위젯 ----
function renderProgressWidget() {
  const el = document.getElementById('progress-widget-content');
  if (!el) return;
  const todayStr = toDateStr(new Date());
  const todayTodos = cachedTodos.filter(t => t.date === todayStr);
  if (todayTodos.length === 0) {
    el.innerHTML = `<div class="progress-empty">${t('no_today_plans')}</div>`;
    return;
  }
  const done  = todayTodos.filter(td => td.completed).length;
  const total = todayTodos.length;
  const pct   = Math.round((done / total) * 100);
  const isFull = pct === 100;
  el.innerHTML = `
    <div class="progress-title-row">
      <span>${t('today_tasks')}</span>
      <span class="progress-pct">${pct}%</span>
    </div>
    <div class="progress-bar-track">
      <div class="progress-bar-fill${isFull ? ' full' : ''}" style="width:${pct}%"></div>
    </div>
    <div class="progress-count-row">${t('progress_count', done, total)}</div>
  `;
}

// ---- 할 일 목록 ----
function getFilteredTodos() {
  const todayStr = toDateStr(new Date());
  let todos = [...cachedTodos];
  if (currentFilter === 'incomplete') todos = todos.filter(t => !t.completed);
  if (currentFilter === 'complete')   todos = todos.filter(t =>  t.completed);
  if (currentFilter === 'today')      todos = todos.filter(t => t.date === todayStr);
  if (currentFilter === 'future')     todos = todos.filter(t => t.date && t.date > todayStr);
  if (filterTagId)                    todos = todos.filter(t => t.tag_id === filterTagId);
  return todos;
}

function renderTodoList() {
  const listEl = document.getElementById('todo-list');
  let todos = getFilteredTodos();
  const prioVal = t => (t.priority === null || t.priority === undefined) ? 999 : t.priority === 0 ? 998 : t.priority;
  if (currentSort === 'datetime') {
    const tval = t => (t.time && t.time !== '미정') ? t.time : 'zz:zz';
    todos.sort((a, b) => {
      if (a.completed !== b.completed) return a.completed ? 1 : -1;
      const dc = (a.date || '9999').localeCompare(b.date || '9999');
      if (dc !== 0) return dc;
      return tval(a).localeCompare(tval(b));
    });
  } else if (currentSort === 'priority') {
    todos.sort((a, b) => {
      if (a.completed !== b.completed) return a.completed ? 1 : -1;
      const pc = prioVal(a) - prioVal(b);
      if (pc !== 0) return pc;
      return (a.date || '9999').localeCompare(b.date || '9999');
    });
  } else {
    todos.sort((a, b) => {
      if (a.completed !== b.completed) return a.completed ? 1 : -1;
      return (a.created_at || '').localeCompare(b.created_at || '');
    });
  }

  if (todos.length === 0) { listEl.innerHTML = `<div class="todo-empty">${t('no_plans')}</div>`; return; }

  listEl.innerHTML = todos.map(todo => {
    const title   = escapeHtml(getTodoTitle(todo));
    const content = escapeHtml(getTodoContent(todo));
    const tag     = getTag(todo.tag_id);
    const tagHtml = tag
      ? `<span class="tag-pill" style="background:${tag.color};color:${getTextColor(tag.color)};">${escapeHtml(tag.name)}</span>`
      : '';

    // ---- 선택 모드 ----
    if (selectionMode) {
      const checked = selectedIds.has(todo.id);
      return `
        <div class="todo-item ${todo.completed ? 'completed' : ''} selectable ${checked ? 'sel-checked' : ''}" data-id="${todo.id}">
          <input type="checkbox" class="todo-select-cb" data-id="${todo.id}" ${checked ? 'checked' : ''} />
          <div class="todo-item-content">
            <div class="todo-item-top">
              <span class="todo-item-headline">${title}</span>
              ${tagHtml}
            </div>
            ${content ? `<span class="todo-item-text">${content}</span>` : ''}
            ${renderDateTimeBadge(todo)}
          </div>
        </div>`;
    }

    // ---- 수정 폼 ----
    if (editingId === todo.id) {
      const editTimeVal = (todo.time && todo.time !== '미정') ? todo.time : '';
      const editUndecided = todo.time === '미정';
      return `
        <div class="todo-item editing" data-id="${todo.id}">
          <div class="todo-edit-form">
            <input type="text" class="edit-headline-input" placeholder="${t('label_title')}" value="${escapeHtml(todo.headline || todo.text || '')}" />
            <textarea class="edit-text-input" placeholder="${t('label_content')} ${t('optional')}" rows="2">${escapeHtml(todo.headline ? (todo.text || '') : '')}</textarea>
            <input type="date" class="edit-date-input" value="${todo.date || ''}" />
            <div class="time-input-row">
              <input type="time" class="edit-time-input modal-time-input" value="${editTimeVal}" ${editUndecided ? 'disabled' : ''} />
              <button type="button" class="time-undecided-btn edit-time-undecided-btn${editUndecided ? ' active' : ''}">${t('time_undecided')}</button>
            </div>
            <div class="priority-row edit-priority-row" data-selected="${todo.priority ?? ''}">
              ${priorityRowHtml(todo.priority ?? null)}
            </div>
            <div class="tag-selector" id="edit-tag-selector-${todo.id}" data-selected="${todo.tag_id || ''}"></div>
            <div class="edit-actions">
              <button class="edit-save-btn" data-id="${todo.id}">${t('save')}</button>
              <button class="edit-cancel-btn">${t('cancel')}</button>
            </div>
          </div>
        </div>`;
    }

    // ---- 일반 ----
    return `
      <div class="todo-item ${todo.completed ? 'completed' : ''}" data-id="${todo.id}">
        <button class="todo-check-btn" data-id="${todo.id}">${todo.completed ? '✓' : '○'}</button>
        <div class="todo-item-content">
          <div class="todo-item-top">
            ${getPriorityBadge(todo.priority)}
            <span class="todo-item-headline">${title}</span>
            ${tagHtml}
          </div>
          ${content ? `<span class="todo-item-text">${content}</span>` : ''}
          ${renderDateTimeBadge(todo)}
        </div>
        <div class="todo-item-actions">
          <button class="todo-edit-btn" data-id="${todo.id}">${t('edit_item')}</button>
          <button class="todo-delete-btn" data-id="${todo.id}">${t('delete_item')}</button>
        </div>
      </div>`;
  }).join('');

  if (selectionMode) {
    // 선택 모드 체크박스 이벤트
    listEl.querySelectorAll('.todo-select-cb').forEach(cb => {
      cb.addEventListener('change', () => {
        if (cb.checked) selectedIds.add(cb.dataset.id);
        else selectedIds.delete(cb.dataset.id);
        cb.closest('.todo-item').classList.toggle('sel-checked', cb.checked);
        updateSelectionBar();
      });
    });
    listEl.querySelectorAll('.todo-item.selectable').forEach(item => {
      item.addEventListener('click', e => {
        if (e.target.type === 'checkbox') return;
        const cb = item.querySelector('.todo-select-cb');
        cb.checked = !cb.checked;
        cb.dispatchEvent(new Event('change'));
      });
    });
    return;
  }

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
      const date         = item.querySelector('.edit-date-input').value;
      const tagSel       = item.querySelector('[id^="edit-tag-selector-"]');
      const tagId        = tagSel?.dataset.selected || null;
      const timeUndBtn   = item.querySelector('.edit-time-undecided-btn');
      const timeInput    = item.querySelector('.edit-time-input');
      const time         = timeUndBtn?.classList.contains('active') ? t('time_undecided') : (timeInput?.value || null);
      const prioRow      = item.querySelector('.edit-priority-row');
      const prioVal      = prioRow?.dataset.selected;
      const priority     = (prioVal !== '' && prioVal !== undefined) ? parseInt(prioVal) : null;
      if (headline) editTodo(btn.dataset.id, headline, text, date, tagId, time, priority);
    }));
  listEl.querySelectorAll('.edit-cancel-btn').forEach(btn =>
    btn.addEventListener('click', () => { editingId = null; renderTodoList(); }));
  listEl.querySelectorAll('.edit-headline-input').forEach(input =>
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') input.closest('.todo-item').querySelector('.edit-save-btn').click();
      if (e.key === 'Escape') { editingId = null; renderTodoList(); }
    }));
  // 수정 폼 시간 미정 토글
  listEl.querySelectorAll('.edit-time-undecided-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const isActive = btn.classList.toggle('active');
      const ti = btn.closest('.time-input-row').querySelector('.edit-time-input');
      ti.disabled = isActive;
      if (isActive) ti.value = '';
    });
  });
  // 수정 폼 우선순위 토글
  listEl.querySelectorAll('.edit-priority-row').forEach(row => {
    row.querySelectorAll('.priority-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const p     = btn.dataset.p;
        const isSel = btn.classList.contains('selected');
        row.querySelectorAll('.priority-btn').forEach(b => b.classList.remove('selected'));
        if (!isSel) { btn.classList.add('selected'); row.dataset.selected = p; }
        else          row.dataset.selected = '';
      });
    });
  });
}

// ---- 우선순위 배지 ----
function getPriorityBadge(priority) {
  if (priority === null || priority === undefined) return '';
  const cfg = PRIORITY_CFG[priority];
  if (!cfg) return '';
  return `<span class="priority-badge" style="background:${cfg.bg};color:${cfg.text};">${cfg.label}</span>`;
}

// ---- 우선순위 버튼 HTML (수정 폼용) ----
function priorityRowHtml(current) {
  return [1,2,3,4,5,0].map(p => {
    const cfg = PRIORITY_CFG[p];
    const sel = current === p ? ' selected' : '';
    const cls = p === 0 ? 'pund' : `p${p}`;
    return `<button type="button" class="priority-btn ${cls}${sel}" data-p="${p}">${p === 0 ? t('priority_tbd') : p}</button>`;
  }).join('');
}

// ---- 날짜+시간 배지 렌더링 ----
function renderDateTimeBadge(todo) {
  const hasDate = !!todo.date;
  const hasTime = !!todo.time;
  if (!hasDate && !hasTime) return '';
  const timeLabel = todo.time === '미정' ? t('time_undecided_badge') : (todo.time ? `🕐 ${todo.time}` : '');
  return `<span class="todo-item-date">${hasDate ? `📅 ${todo.date}` : ''}${hasDate && hasTime ? '&ensp;' : ''}${timeLabel}</span>`;
}

// ---- CRUD ----
async function handleAddTodo() {
  if (!currentUser && !isGuest) return false;
  const headlineEl = document.getElementById('todo-headline');
  const textEl     = document.getElementById('todo-text');
  const dateEl     = document.getElementById('todo-date-input');
  const timeEl     = document.getElementById('todo-time-input');
  const headline   = headlineEl.value.trim();
  if (!headline) { headlineEl.focus(); return false; }

  const todoTime     = isTimeUndecided ? t('time_undecided') : (timeEl?.value || null);
  const todoPriority = selectedPriority ?? null;
  const isRepeat     = document.getElementById('repeat-toggle').checked;
  const addBtn   = document.getElementById('todo-add-btn');

  if (isRepeat) {
    // ---- 반복 계획 ----
    const endStr   = document.getElementById('repeat-end-date').value;
    const interval = parseInt(document.getElementById('custom-interval').value) || 1;

    if (!dateEl.value) { alert(t('alert_no_start')); return false; }
    if (!endStr)       { alert(t('alert_no_end')); return false; }
    if (new Date(endStr) < new Date(dateEl.value)) { alert(t('alert_end_before')); return false; }

    const dates = generateDates(dateEl.value, selectedRepeatType, interval, endStr);
    if (!dates.length) { alert(t('alert_no_items')); return false; }

    addBtn.disabled = true;
    addBtn.textContent = t('adding_n', dates.length);

    if (isGuest) {
      const newItems = dates.map(date => ({
        id: 'guest-' + Date.now() + '-' + Math.random().toString(36).slice(2),
        headline, text: textEl.value.trim(), date, time: todoTime,
        priority: todoPriority, completed: false,
        tag_id: selectedTagId || null, created_at: new Date().toISOString(),
      }));
      cachedTodos.push(...newItems);
      localStorage.setItem(GUEST_TODOS_KEY, JSON.stringify(cachedTodos));
    } else {
      const baseItem = (date) => ({ user_id: currentUser.id, headline, text: textEl.value.trim(), date, completed: false, tag_id: selectedTagId || null });
      let todoArray = dates.map(date => {
        const item = baseItem(date);
        if (todoTime)              item.time     = todoTime;
        if (todoPriority !== null) item.priority = todoPriority;
        return item;
      });
      let { data, error } = await db.from('todos').insert(todoArray).select();
      if (error) {
        // 컬럼 없음 오류 → 기본 필드만으로 재시도
        ({ data, error } = await db.from('todos').insert(dates.map(baseItem)).select());
      }
      if (!error) { cachedTodos.push(...data); }
    }

    addBtn.disabled = false;
    addBtn.textContent = t('add_btn');

  } else {
    // ---- 단일 계획 ----
    if (isGuest) {
      const newItem = {
        id: 'guest-' + Date.now(),
        headline, text: textEl.value.trim(), date: dateEl.value || null,
        time: todoTime, priority: todoPriority,
        completed: false, tag_id: selectedTagId || null, created_at: new Date().toISOString(),
      };
      cachedTodos.push(newItem);
      localStorage.setItem(GUEST_TODOS_KEY, JSON.stringify(cachedTodos));
    } else {
      const tempId  = 'temp-' + Date.now();
      const newItem = { id: tempId, headline, text: textEl.value.trim(), date: dateEl.value || null, time: todoTime, priority: todoPriority, completed: false, tag_id: selectedTagId || null, created_at: new Date().toISOString() };
      cachedTodos.push(newItem);

      const insertPayload = { user_id: currentUser.id, headline: newItem.headline, text: newItem.text, date: newItem.date, completed: false, tag_id: newItem.tag_id };
      if (newItem.time)                  insertPayload.time     = newItem.time;
      if (newItem.priority !== null)     insertPayload.priority = newItem.priority;
      const { data, error } = await db.from('todos')
        .insert([insertPayload])
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
  renderTodoList(); renderIncompletePanel(); renderCalendar(); renderProgressWidget();
  return true;
}

async function toggleTodo(id) {
  const todo = cachedTodos.find(t => t.id === id);
  if (!todo) return;
  todo.completed = !todo.completed;
  renderTodoList(); renderIncompletePanel(); renderCalendar(); renderProgressWidget();
  if (isGuest) { localStorage.setItem(GUEST_TODOS_KEY, JSON.stringify(cachedTodos)); return; }
  await db.from('todos').update({ completed: todo.completed }).eq('id', id);
}

async function deleteTodo(id) {
  cachedTodos = cachedTodos.filter(t => t.id !== id);
  if (editingId === id) editingId = null;
  renderTodoList(); renderIncompletePanel(); renderCalendar(); renderProgressWidget();
  if (isGuest) { localStorage.setItem(GUEST_TODOS_KEY, JSON.stringify(cachedTodos)); return; }
  await db.from('todos').delete().eq('id', id);
}

async function editTodo(id, headline, text, date, tagId, time, priority) {
  const todo = cachedTodos.find(t => t.id === id);
  if (!todo) return;
  todo.headline = headline; todo.text = text; todo.date = date || null;
  todo.tag_id = tagId || null; todo.time = time || null;
  todo.priority = priority ?? null;
  editingId = null;
  renderTodoList(); renderCalendar(); renderProgressWidget();
  if (isGuest) { localStorage.setItem(GUEST_TODOS_KEY, JSON.stringify(cachedTodos)); return; }
  const updatePayload = { headline, text, date: date || null, tag_id: tagId || null };
  if (time)                    updatePayload.time     = time;
  else if (todo.time)          updatePayload.time     = null; // 기존 시간 지우기
  if (priority !== undefined)  updatePayload.priority = priority ?? null;
  await db.from('todos').update(updatePayload).eq('id', id);
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
    <button class="tag-filter-btn all-btn ${allActive ? 'active' : ''}" data-id="">${t('tag_filter_all')}</button>
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
    <button type="button" class="tag-option ${noneSelected ? 'none-selected' : ''}" data-id="">${t('tag_none')}</button>
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
    listEl.innerHTML = `<div class="tag-manage-empty">${t('no_tags')}</div>`;
    return;
  }
  listEl.innerHTML = cachedTags.map(tag => `
    <div class="tag-manage-item">
      <span class="tag-pill" style="background:${tag.color};color:${getTextColor(tag.color)};">${escapeHtml(tag.name)}</span>
      <button class="tag-delete-btn" data-id="${tag.id}">${t('delete')}</button>
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
    preview.textContent = t('preview_end_before');
    preview.className = 'repeat-preview warn';
    return;
  }

  const dates = generateDates(startStr, selectedRepeatType, interval, endStr);
  preview.textContent = t('preview_n', dates.length);
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
  // 시간 초기화
  isTimeUndecided = false;
  const timeEl    = document.getElementById('todo-time-input');
  const timeBtn   = document.getElementById('time-undecided-btn');
  if (timeEl)  { timeEl.value = ''; timeEl.disabled = false; }
  if (timeBtn) timeBtn.classList.remove('active');
  // 우선순위 초기화
  selectedPriority = null;
  document.querySelectorAll('#add-priority-row .priority-btn').forEach(b => b.classList.remove('selected'));
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
//  선택 모드
// ===================================================
function enterSelectionMode() {
  selectionMode = true;
  selectedIds.clear();
  document.getElementById('selection-bar').style.display = 'flex';
  renderTodoList();
  updateSelectionBar();
}

function exitSelectionMode() {
  selectionMode = false;
  selectedIds.clear();
  document.getElementById('selection-bar').style.display = 'none';
  renderTodoList();
}

function updateSelectionBar() {
  const countEl = document.getElementById('sel-count');
  const allCb   = document.getElementById('select-all-cb');
  if (countEl) countEl.textContent = t('n_selected', selectedIds.size);
  const visibleIds = getFilteredTodos().map(t => t.id);
  if (allCb && visibleIds.length > 0) {
    const allChecked = visibleIds.every(id => selectedIds.has(id));
    allCb.indeterminate = selectedIds.size > 0 && !allChecked;
    allCb.checked = allChecked;
  }
}

async function deleteSelected() {
  if (!selectedIds.size) return;
  if (!confirm(t('del_selected', selectedIds.size))) return;
  const ids = [...selectedIds];
  cachedTodos = cachedTodos.filter(t => !ids.includes(t.id));
  exitSelectionMode();
  renderIncompletePanel(); renderCalendar();
  if (isGuest) {
    localStorage.setItem(GUEST_TODOS_KEY, JSON.stringify(cachedTodos));
  } else {
    await Promise.all(ids.map(id => db.from('todos').delete().eq('id', id)));
  }
}

async function deleteAllVisible() {
  const visible = getFilteredTodos();
  if (!visible.length) return;
  if (!confirm(t('del_all', visible.length))) return;
  const ids = visible.map(t => t.id);
  cachedTodos = cachedTodos.filter(t => !ids.includes(t.id));
  renderTodoList(); renderIncompletePanel(); renderCalendar(); renderProgressWidget();
  if (isGuest) {
    localStorage.setItem(GUEST_TODOS_KEY, JSON.stringify(cachedTodos));
  } else {
    await Promise.all(ids.map(id => db.from('todos').delete().eq('id', id)));
  }
}

// ⋮ 메뉴
document.getElementById('sidebar-menu-btn').addEventListener('click', e => {
  e.stopPropagation();
  const dd = document.getElementById('sidebar-menu-dropdown');
  dd.style.display = dd.style.display === 'none' ? 'block' : 'none';
});
document.getElementById('menu-select-mode').addEventListener('click', () => {
  document.getElementById('sidebar-menu-dropdown').style.display = 'none';
  enterSelectionMode();
});
// 정렬 메뉴
function setSortMode(mode) {
  currentSort = mode;
  document.getElementById('sidebar-menu-dropdown').style.display = 'none';
  ['menu-sort-datetime','menu-sort-priority','menu-sort-created'].forEach(id => {
    document.getElementById(id)?.classList.remove('active-sort');
  });
  document.getElementById(`menu-sort-${mode}`)?.classList.add('active-sort');
  renderTodoList();
}
document.getElementById('menu-sort-datetime').addEventListener('click',  () => setSortMode('datetime'));
document.getElementById('menu-sort-priority').addEventListener('click',  () => setSortMode('priority'));
document.getElementById('menu-sort-created').addEventListener('click',   () => setSortMode('created'));

// 등록 모달 우선순위 버튼
document.getElementById('add-priority-row').querySelectorAll('.priority-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const p     = parseInt(btn.dataset.p);
    const isSel = btn.classList.contains('selected');
    document.querySelectorAll('#add-priority-row .priority-btn').forEach(b => b.classList.remove('selected'));
    if (!isSel) { btn.classList.add('selected'); selectedPriority = p; }
    else          selectedPriority = null;
  });
});

// 시간 미정 토글 (등록 모달)
document.getElementById('time-undecided-btn').addEventListener('click', () => {
  isTimeUndecided = !isTimeUndecided;
  const timeEl  = document.getElementById('todo-time-input');
  const timeBtn = document.getElementById('time-undecided-btn');
  timeBtn.classList.toggle('active', isTimeUndecided);
  timeEl.disabled = isTimeUndecided;
  if (isTimeUndecided) timeEl.value = '';
});
document.getElementById('todo-time-input').addEventListener('input', () => {
  if (isTimeUndecided) {
    isTimeUndecided = false;
    document.getElementById('time-undecided-btn').classList.remove('active');
  }
});

document.getElementById('menu-delete-all').addEventListener('click', () => {
  document.getElementById('sidebar-menu-dropdown').style.display = 'none';
  deleteAllVisible();
});
document.addEventListener('click', () => {
  const dd = document.getElementById('sidebar-menu-dropdown');
  if (dd) dd.style.display = 'none';
});

// 선택 바 이벤트
document.getElementById('select-all-cb').addEventListener('change', function () {
  const visibleIds = getFilteredTodos().map(t => t.id);
  if (this.checked) visibleIds.forEach(id => selectedIds.add(id));
  else selectedIds.clear();
  renderTodoList();
  updateSelectionBar();
});
document.getElementById('sel-delete-btn').addEventListener('click', deleteSelected);
document.getElementById('sel-cancel-btn').addEventListener('click', exitSelectionMode);

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

function getContactRateLimit() {
  try { return JSON.parse(localStorage.getItem('contact_rate') || '{}'); } catch { return {}; }
}
function checkContactRateLimit() {
  const today = new Date().toISOString().slice(0, 10);
  const r = getContactRateLimit();
  return r.date === today ? (r.count || 0) : 0;
}
function incrementContactRateLimit() {
  const today = new Date().toISOString().slice(0, 10);
  const r = getContactRateLimit();
  const count = (r.date === today ? (r.count || 0) : 0) + 1;
  localStorage.setItem('contact_rate', JSON.stringify({ date: today, count }));
}

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (checkContactRateLimit() >= 3) {
    alert(t('rate_limit'));
    return;
  }
  submitBtn.disabled = true;
  submitBtn.textContent = t('submitting');
  try {
    const res = await fetch('https://formspree.io/f/xjgpqyyw', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(contactForm),
    });
    if (res.ok) {
      incrementContactRateLimit();
      contactForm.style.display = 'none'; successBox.style.display = 'block'; contactForm.reset();
    } else alert(t('send_failed'));
  } catch { alert(t('network_error')); }
  finally { submitBtn.disabled = false; submitBtn.textContent = t('submit'); }
});

// ===================================================
//  초기화
// ===================================================
document.getElementById('todo-date-input').value = toDateStr(new Date());
initCalendar();
initAuth();

// ===================================================
//  ADMIN MODE (익스텐션 다운로드 버튼 표시)
//  활성화: 사이트 URL 뒤에 #admin-unlock 붙여서 접속
//  비활성화: 콘솔에서 localStorage.removeItem('dp_admin') 실행
// ===================================================
(function initAdminMode() {
  if (window.location.hash === '#admin-unlock') {
    localStorage.setItem('dp_admin', '1');
    history.replaceState(null, '', window.location.pathname);
  }
  if (localStorage.getItem('dp_admin') === '1') {
    const link = document.getElementById('ext-download-link');
    if (link) link.style.display = '';
  }
})();

// ===================================================
//  DARK / LIGHT MODE
// ===================================================
(function initTheme() {
  const saved = localStorage.getItem('theme') || 'light';
  if (saved === 'dark') document.body.classList.add('dark');
  updateThemeBtn(saved);
})();

function updateThemeBtn(theme) {
  const btn = document.getElementById('theme-toggle-btn');
  if (!btn) return;
  btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  btn.title = theme === 'dark' ? t('theme_toggle_light') : t('theme_toggle_dark');
}

document.getElementById('theme-toggle-btn').addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  const theme = isDark ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
  updateThemeBtn(theme);
});

// ===================================================
//  WIDGET SYSTEM
// ===================================================
const WIDGET_LAYOUT_KEY = 'daily_widget_layout_v2';
let isEditMode = false;

function getWidgetLabels() {
  return {
    'widget-weather':   t('widget_weather'),
    'widget-calendar':  t('widget_calendar'),
    'widget-plans':     t('widget_plans'),
    'widget-progress':  t('widget_progress'),
    'widget-memo':      t('widget_memo'),
    'widget-pomodoro':  t('widget_pomodoro'),
    'widget-clock-1':   t('widget_clock') + ' 1',
    'widget-clock-2':   t('widget_clock') + ' 2',
    'widget-clock-3':   t('widget_clock') + ' 3',
    'widget-clock-4':   t('widget_clock') + ' 4',
    'widget-clock-5':   t('widget_clock') + ' 5',
  };
}
// 하위 호환성을 위해 WIDGET_LABELS도 유지
const WIDGET_LABELS = {
  'widget-weather':   '🌤 날씨',
  'widget-calendar':  '📅 달력',
  'widget-plans':     '📋 계획 목록',
  'widget-progress':  '📊 오늘 진행률',
  'widget-memo':      '📝 메모장',
  'widget-pomodoro':  '🍅 뽀모도로',
  'widget-clock-1':   '🕐 시계 1',
  'widget-clock-2':   '🕐 시계 2',
  'widget-clock-3':   '🕐 시계 3',
  'widget-clock-4':   '🕐 시계 4',
  'widget-clock-5':   '🕐 시계 5',
};
// 원래 dash-body 3fr/2fr 그리드 기준 (page-wrapper 960px, padding 36px×2 = widget-area 888px)
const WIDGET_DEFAULTS = {
  'widget-weather':   { top: 0,   left: 0,   width: 888, height: 175 },
  'widget-calendar':  { top: 199, left: 0,   width: 518, height: 620 },
  'widget-plans':     { top: 199, left: 542, width: 346, height: 620 },
  'widget-progress':  { top: 199, left: 294, width: 244, height: 160, hiddenByDefault: true },
  'widget-memo':      { top: 60,  left: 160, width: 540, height: 500, hiddenByDefault: true },
  'widget-pomodoro':  { top: 199, left: 294, width: 300, height: 360, hiddenByDefault: true },
  'widget-clock-1':   { top: 60,  left: 320, width: 280, height: 180, hiddenByDefault: true },
  'widget-clock-2':   { top: 60,  left: 320, width: 280, height: 180, hiddenByDefault: true },
  'widget-clock-3':   { top: 60,  left: 320, width: 280, height: 180, hiddenByDefault: true },
  'widget-clock-4':   { top: 60,  left: 320, width: 280, height: 180, hiddenByDefault: true },
  'widget-clock-5':   { top: 60,  left: 320, width: 280, height: 180, hiddenByDefault: true },
};

function saveWidgetLayout() {
  const layout = {};
  document.querySelectorAll('.widget').forEach(w => {
    layout[w.id] = {
      top:    parseInt(w.style.top)    || 0,
      left:   parseInt(w.style.left)   || 0,
      width:  parseInt(w.style.width)  || 300,
      height: parseInt(w.style.height) || 200,
      hidden: w.classList.contains('widget-hidden'),
    };
  });
  localStorage.setItem(WIDGET_LAYOUT_KEY, JSON.stringify(layout));
}

function loadWidgetLayout() {
  try { return JSON.parse(localStorage.getItem(WIDGET_LAYOUT_KEY)) || {}; }
  catch { return {}; }
}

function applyWidgetLayout() {
  if (window.innerWidth <= 800) return;
  const saved = loadWidgetLayout();
  document.querySelectorAll('.widget').forEach(w => {
    const def    = WIDGET_DEFAULTS[w.id] || { top: 0, left: 0, width: 300, height: 200 };
    const s      = saved[w.id];
    const layout = s ?? def;
    w.style.top    = layout.top    + 'px';
    w.style.left   = layout.left   + 'px';
    w.style.width  = layout.width  + 'px';
    w.style.height = layout.height + 'px';
    // 저장된 레이아웃 있으면 hidden 값, 없으면 hiddenByDefault 사용
    const isHidden = s ? !!s.hidden : !!def.hiddenByDefault;
    w.classList.toggle('widget-hidden', isHidden);
  });
  updateWidgetAreaHeight();
}

function updateWidgetAreaHeight() {
  if (window.innerWidth <= 800) return;
  const area = document.getElementById('widget-area');
  let maxBottom = 400;
  document.querySelectorAll('.widget:not(.widget-hidden)').forEach(w => {
    const bottom = (parseInt(w.style.top) || 0) + (parseInt(w.style.height) || 0);
    if (bottom > maxBottom) maxBottom = bottom;
  });
  area.style.minHeight = (maxBottom + 40) + 'px';
}

function updateWidgetMgrDropdown() {
  const dropdown = document.getElementById('widget-mgr-dropdown');
  const hidden   = [...document.querySelectorAll('.widget.widget-hidden')];

  // 시계 위젯은 그룹으로 묶어 하나의 항목으로 표시
  const hiddenClocks = hidden.filter(w => w.id.startsWith('widget-clock-'));
  const hiddenOthers = hidden.filter(w => !w.id.startsWith('widget-clock-'));

  const items = [];
  const wLabels = getWidgetLabels();
  hiddenOthers.forEach(w => {
    items.push({ label: `${wLabels[w.id] || w.id}${t('widget_add_suffix')}`, widgetId: w.id });
  });
  if (hiddenClocks.length > 0) {
    items.push({ label: t('widget_clock_add'), widgetId: '__clock__' });
  }

  if (!items.length) {
    dropdown.innerHTML = `<div class="widget-mgr-empty">${t('widget_no_hidden')}</div>`;
    return;
  }

  dropdown.innerHTML = items.map(it =>
    `<button class="widget-mgr-item" data-widget="${it.widgetId}">${it.label}</button>`
  ).join('');

  dropdown.querySelectorAll('.widget-mgr-item').forEach(btn => {
    btn.addEventListener('click', () => {
      let id = btn.dataset.widget;
      if (id === '__clock__') {
        const next = document.querySelector('.widget.widget-hidden[id^="widget-clock-"]');
        if (!next) return;
        id = next.id;
      }
      const widget = document.getElementById(id);
      if (widget) {
        widget.classList.remove('widget-hidden');
        saveWidgetLayout();
        updateWidgetMgrDropdown();
        updateWidgetAreaHeight();
      }
      document.getElementById('widget-mgr-dropdown').style.display = 'none';
    });
  });
}

// 편집 모드 전환
function setEditMode(on) {
  isEditMode = on;
  const area    = document.getElementById('widget-area');
  const editBtn = document.getElementById('widget-edit-btn');
  const wrap    = document.getElementById('widget-mgr-wrap');
  area.classList.toggle('edit-mode', on);
  editBtn.classList.toggle('active', on);
  editBtn.textContent = on ? t('widget_edit_done') : t('widget_edit');
  wrap.classList.toggle('edit-active', on);
  document.querySelector('.dash-header')?.classList.toggle('edit-active', on);
  if (!on) document.getElementById('widget-mgr-dropdown').style.display = 'none';
}

document.getElementById('widget-edit-btn').addEventListener('click', () => {
  setEditMode(!isEditMode);
});

// 초기화
function resetWidgetLayout() {
  localStorage.removeItem(WIDGET_LAYOUT_KEY);
  document.querySelectorAll('.widget').forEach(w => {
    const def = WIDGET_DEFAULTS[w.id];
    if (!def) return;
    w.style.top    = def.top    + 'px';
    w.style.left   = def.left   + 'px';
    w.style.width  = def.width  + 'px';
    w.style.height = def.height + 'px';
    const hideByDefault = !!(WIDGET_DEFAULTS[w.id]?.hiddenByDefault);
    w.classList.toggle('widget-hidden', hideByDefault);
    w.classList.remove('wt-tiny', 'wt-mini', 'wt-compact');
    w.style.zIndex = '';
  });
  updateWidgetAreaHeight();
}

document.getElementById('widget-reset-btn').addEventListener('click', () => {
  if (!confirm(t('reset_confirm'))) return;
  resetWidgetLayout();
});

// 위젯 추가 버튼 (편집 모드일 때만 보임)
document.getElementById('widget-add-btn').addEventListener('click', e => {
  e.stopPropagation();
  const dd   = document.getElementById('widget-mgr-dropdown');
  const open = dd.style.display !== 'none';
  dd.style.display = open ? 'none' : 'block';
  if (!open) updateWidgetMgrDropdown();
});

// 외부 클릭 시 드롭다운 닫기
document.addEventListener('click', e => {
  if (!e.target.closest('.widget-mgr-wrap')) {
    document.getElementById('widget-mgr-dropdown').style.display = 'none';
  }
});

// 드래그 (편집 모드일 때만 동작)
function initWidgetDrag(widget) {
  const header = widget.querySelector('.widget-header');

  header.addEventListener('mousedown', e => {
    if (!isEditMode || window.innerWidth <= 800) return;
    if (e.target.classList.contains('widget-close')) return;
    e.preventDefault();
    document.querySelectorAll('.widget').forEach(w => w.style.zIndex = '1');
    widget.style.zIndex = '10';
    header.classList.add('is-dragging');
    const startX = e.clientX - widget.offsetLeft;
    const startY = e.clientY - widget.offsetTop;
    const onMove = e => {
      widget.style.left = (e.clientX - startX) + 'px';
      widget.style.top  = Math.max(0, e.clientY - startY) + 'px';
    };
    const onUp = () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      header.classList.remove('is-dragging');
      saveWidgetLayout();
      updateWidgetAreaHeight();
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  });

  header.addEventListener('touchstart', e => {
    if (!isEditMode || window.innerWidth <= 800) return;
    if (e.target.classList.contains('widget-close')) return;
    const t = e.touches[0];
    widget.style.zIndex = '10';
    header.classList.add('is-dragging');
    const startX = t.clientX - widget.offsetLeft;
    const startY = t.clientY - widget.offsetTop;
    const onMove = e => {
      e.preventDefault();
      const tc = e.touches[0];
      widget.style.left = (tc.clientX - startX) + 'px';
      widget.style.top  = Math.max(0, tc.clientY - startY) + 'px';
    };
    const onEnd = () => {
      document.removeEventListener('touchmove', onMove);
      document.removeEventListener('touchend', onEnd);
      header.classList.remove('is-dragging');
      saveWidgetLayout();
      updateWidgetAreaHeight();
    };
    document.addEventListener('touchmove', onMove, { passive: false });
    document.addEventListener('touchend', onEnd);
  }, { passive: true });
}

// 리사이즈 (편집 모드일 때만 동작)
function initWidgetResize(widget) {
  const handle = widget.querySelector('.widget-resize-handle');
  handle.addEventListener('mousedown', e => {
    if (!isEditMode || window.innerWidth <= 800) return;
    e.preventDefault();
    e.stopPropagation();
    widget.style.zIndex = '10';
    const startX = e.clientX, startY = e.clientY;
    const startW = widget.offsetWidth, startH = widget.offsetHeight;
    const onMove = e => {
      widget.style.width  = Math.max(220, startW + e.clientX - startX) + 'px';
      widget.style.height = Math.max(80,  startH + e.clientY - startY) + 'px';
    };
    const onUp = () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      saveWidgetLayout();
      updateWidgetAreaHeight();
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  });
}

// 닫기 (편집 모드일 때만 동작)
function initWidgetClose(widget) {
  widget.querySelector('.widget-close').addEventListener('click', () => {
    if (!isEditMode) return;
    widget.classList.add('widget-hidden');
    saveWidgetLayout();
    updateWidgetAreaHeight();
  });
}

// 초기화
document.querySelectorAll('.widget').forEach(widget => {
  initWidgetDrag(widget);
  initWidgetResize(widget);
  initWidgetClose(widget);
});

applyWidgetLayout();

// 날씨 위젯 반응형 (크기에 따라 compact/mini/tiny 모드)
(function initWeatherResize() {
  const w = document.getElementById('widget-weather');
  if (!w || !window.ResizeObserver) return;
  new ResizeObserver(entries => {
    const { width: ww, height: wh } = entries[0].contentRect;
    const tiny    = ww < 210 || wh < 82;
    const mini    = !tiny    && (ww < 340 || wh < 108);
    const compact = !mini    && !tiny && (ww < 520 || wh < 148);
    w.classList.toggle('wt-tiny',    tiny);
    w.classList.toggle('wt-mini',    mini);
    w.classList.toggle('wt-compact', compact);
  }).observe(w);
})();

// ===================================================
//  MEMO WIDGET
// ===================================================
const MEMO_KEY = 'daily_memo_v1';
let memoData   = null;
let memoCanvas = null;
let memoCtx    = null;
let memoDrawing = false;
let memoLastPos = null;
let memoTool   = { color: '#1a1a2e', size: 3, eraser: false };
let memoCombinedSubMode = 'text'; // 'text' | 'draw'
let memoSaveTarget = 'canvasData'; // initMemoCanvas 시점에 고정: 'canvasData' | 'combinedCanvas'

const MEMO_COLORS = ['#1a1a2e','#e74c3c','#3498db','#27ae60','#f39c12','#9b59b6','#ffffff'];
const MEMO_SIZES  = [2, 5, 12];

function loadMemoData() {
  try {
    const saved = JSON.parse(localStorage.getItem(MEMO_KEY));
    if (saved?.tabs?.length) { memoData = saved; return; }
  } catch {}
  const id = 'tab-' + Date.now();
  memoData = { tabs: [{ id, name: t('memo_default'), mode: 'text', text: '', canvasData: null }], activeId: id };
}

function saveMemoData() {
  localStorage.setItem(MEMO_KEY, JSON.stringify(memoData));
}

function memoGetActive() {
  return memoData?.tabs.find(t => t.id === memoData.activeId) ?? null;
}

function renderMemoTabs() {
  const el = document.getElementById('memo-tabs');
  if (!el) return;
  el.innerHTML = memoData.tabs.map(t => `
    <div class="memo-tab${t.id === memoData.activeId ? ' active' : ''}" data-id="${t.id}">
      <span class="memo-tab-name" data-id="${t.id}">${escapeHtml(t.name)}</span>
      ${memoData.tabs.length > 1
        ? `<button class="memo-tab-del" data-id="${t.id}" title="탭 삭제">✕</button>`
        : ''}
    </div>`).join('');

  el.querySelectorAll('.memo-tab').forEach(div => {
    div.addEventListener('click', e => {
      if (e.target.classList.contains('memo-tab-del')) return;
      memoSwitchTab(div.dataset.id);
    });
  });
  el.querySelectorAll('.memo-tab-name').forEach(span => {
    span.addEventListener('dblclick', () => {
      const tab = memoData.tabs.find(x => x.id === span.dataset.id);
      if (!tab) return;
      const n = prompt(t('memo_rename'), tab.name);
      if (n?.trim()) { tab.name = n.trim(); saveMemoData(); renderMemoTabs(); }
    });
  });
  el.querySelectorAll('.memo-tab-del').forEach(btn => {
    btn.addEventListener('click', e => { e.stopPropagation(); memoDeleteTab(btn.dataset.id); });
  });
}

function memoDrawToolbarHTML() {
  const colorBtns = MEMO_COLORS.map(c =>
    `<button class="memo-color-btn${(!memoTool.eraser && memoTool.color===c)?' active':''}" data-color="${c}"
     style="background:${c};${c==='#ffffff'?'border:1.5px solid #ccc;':''}"></button>`
  ).join('');
  const sizeBtns = MEMO_SIZES.map(s =>
    `<button class="memo-size-btn${memoTool.size===s?' active':''}" data-size="${s}">
       <span style="width:${s+3}px;height:${s+3}px;border-radius:50%;background:#444;display:inline-block;pointer-events:none;"></span>
     </button>`
  ).join('');
  return `<div class="memo-draw-toolbar">
    <div class="memo-colors">${colorBtns}</div>
    <div class="memo-tool-sep"></div>
    <div class="memo-sizes">${sizeBtns}</div>
    <div class="memo-tool-sep"></div>
    <button class="memo-eraser-btn${memoTool.eraser?' active':''}" id="memo-eraser">${t('memo_eraser')}</button>
    <button class="memo-clear-btn" id="memo-clear">${t('memo_clear')}</button>
  </div>`;
}

function memoBindDrawTools(cont, tab) {
  cont.querySelectorAll('.memo-color-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      memoTool.color = btn.dataset.color; memoTool.eraser = false;
      cont.querySelectorAll('.memo-color-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('memo-eraser')?.classList.remove('active');
    });
  });
  cont.querySelectorAll('.memo-size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      memoTool.size = parseInt(btn.dataset.size);
      cont.querySelectorAll('.memo-size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
  document.getElementById('memo-eraser')?.addEventListener('click', function() {
    memoTool.eraser = !memoTool.eraser;
    this.classList.toggle('active', memoTool.eraser);
    cont.querySelectorAll('.memo-color-btn').forEach(b => b.classList.remove('active'));
    if (!memoTool.eraser) cont.querySelector(`[data-color="${memoTool.color}"]`)?.classList.add('active');
  });
  document.getElementById('memo-clear')?.addEventListener('click', () => {
    if (!memoCtx || !memoCanvas) return;
    memoCtx.globalCompositeOperation = 'source-over';
    if (memoSaveTarget === 'combinedCanvas') {
      memoCtx.clearRect(0, 0, memoCanvas.width, memoCanvas.height);
    } else {
      memoCtx.fillStyle = '#ffffff';
      memoCtx.fillRect(0, 0, memoCanvas.width, memoCanvas.height);
    }
    const t = memoGetActive();
    if (t) { t[memoSaveTarget] = null; saveMemoData(); }
  });
}

function renderMemoContent() {
  const cont = document.getElementById('memo-content');
  if (!cont) return;
  const tab = memoGetActive();
  if (!tab) { cont.innerHTML = ''; return; }

  const modeBar = `
    <div class="memo-toolbar">
      <button class="memo-mode-btn${tab.mode==='text'    ?' active':''}" data-mode="text">${t('memo_mode_text')}</button>
      <button class="memo-mode-btn${tab.mode==='draw'    ?' active':''}" data-mode="draw">${t('memo_mode_draw')}</button>
      <button class="memo-mode-btn${tab.mode==='combined'?' active':''}" data-mode="combined">${t('memo_mode_combined')}</button>
    </div>`;

  if (tab.mode === 'text') {
    cont.innerHTML = modeBar +
      `<textarea class="memo-textarea" id="memo-ta" placeholder="${t('memo_ph')}">${escapeHtml(tab.text)}</textarea>`;
    document.getElementById('memo-ta').addEventListener('input', function() { tab.text = this.value; saveMemoData(); });

  } else if (tab.mode === 'draw') {
    cont.innerHTML = modeBar + memoDrawToolbarHTML() +
      `<canvas class="memo-canvas" id="memo-canvas"></canvas>`;
    memoBindDrawTools(cont, tab);
    initMemoCanvas();

  } else { // combined — 텍스트 위에 투명 캔버스 오버레이 (별도 데이터: combinedText, combinedCanvas)
    const isDrawSub = memoCombinedSubMode === 'draw';
    const drawTools = isDrawSub ? memoDrawToolbarHTML() : '';
    cont.innerHTML = modeBar +
      `<div class="memo-combined-toolbar">
         <button class="memo-submode-btn${!isDrawSub?' active':''}" data-submode="text">${t('memo_sub_text')}</button>
         <button class="memo-submode-btn${isDrawSub?' active':''}" data-submode="draw">${t('memo_sub_draw')}</button>
         ${drawTools}
       </div>
       <div class="memo-overlay-wrap" id="memo-overlay-wrap">
         <textarea class="memo-textarea memo-overlay-text" id="memo-ta"
           placeholder="${t('memo_ph')}">${escapeHtml(tab.combinedText || '')}</textarea>
         <canvas class="memo-canvas memo-overlay-canvas${isDrawSub?'':' no-pointer'}"
           id="memo-canvas"></canvas>
       </div>`;
    document.getElementById('memo-ta').addEventListener('input', function() { tab.combinedText = this.value; saveMemoData(); });
    if (isDrawSub) memoBindDrawTools(cont, tab);
    initMemoCanvas(true); // overlay=true → 투명 배경, combinedCanvas에서 복원

    cont.querySelectorAll('.memo-submode-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.dataset.submode === memoCombinedSubMode) return;
        if (memoCombinedSubMode === 'draw' && memoCanvas) { tab.combinedCanvas = memoCanvas.toDataURL(); saveMemoData(); }
        memoCombinedSubMode = btn.dataset.submode;
        renderMemoContent();
      });
    });
  }

  cont.querySelectorAll('.memo-mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.mode === tab.mode) return;
      if (tab.mode === 'draw'     && memoCanvas) { tab.canvasData    = memoCanvas.toDataURL(); }
      if (tab.mode === 'combined' && memoCanvas) { tab.combinedCanvas = memoCanvas.toDataURL(); }
      tab.mode = btn.dataset.mode; saveMemoData(); renderMemoContent();
    });
  });
}

function initMemoCanvas(overlay = false) {
  setTimeout(() => {
    const canvas = document.getElementById('memo-canvas');
    if (!canvas) return;
    let w, h;
    if (overlay) {
      // 오버레이 모드: textarea와 같은 크기로 맞춤
      const wrap = document.getElementById('memo-overlay-wrap');
      w = wrap?.offsetWidth  || 520;
      h = wrap?.offsetHeight || 400;
    } else {
      const body    = document.getElementById('memo-widget-body');
      const tabBar  = document.querySelector('.memo-tab-bar');
      const toolBar = document.querySelector('.memo-draw-toolbar');
      const modeBar = document.querySelector('#memo-content .memo-toolbar');
      const usedH   = (tabBar?.offsetHeight || 36) + (modeBar?.offsetHeight || 36) + (toolBar?.offsetHeight || 42);
      w = body?.offsetWidth  || 520;
      h = Math.max(200, (body?.offsetHeight || 500) - usedH);
    }
    canvas.width  = w;
    canvas.height = h;
    memoCanvas = canvas; memoCtx = canvas.getContext('2d');
    memoSaveTarget = overlay ? 'combinedCanvas' : 'canvasData'; // 저장 대상 고정
    memoCtx.lineCap = 'round'; memoCtx.lineJoin = 'round';
    if (!overlay) {
      // 흰 배경 (일반 그리기 모드만)
      memoCtx.fillStyle = '#ffffff';
      memoCtx.fillRect(0, 0, w, h);
    }
    // 저장된 그림 복원 (overlay=combined모드는 combinedCanvas, 일반=canvasData)
    const tab = memoGetActive();
    const savedImg = overlay ? tab?.combinedCanvas : tab?.canvasData;
    if (savedImg) {
      const img = new Image();
      img.onload = () => memoCtx.drawImage(img, 0, 0);
      img.src = savedImg;
    }
    attachMemoCanvasEvents(canvas);
  }, 0);
}

function attachMemoCanvasEvents(canvas) {
  const getPos = (e, touch) => {
    const r = canvas.getBoundingClientRect();
    const sx = canvas.width / r.width, sy = canvas.height / r.height;
    const src = touch ? e.touches[0] : e;
    return { x: (src.clientX - r.left) * sx, y: (src.clientY - r.top) * sy };
  };
  const start = e => {
    e.preventDefault(); memoDrawing = true;
    const p = getPos(e, e.touches);
    memoLastPos = p;
    memoCtx.globalCompositeOperation = memoTool.eraser ? 'destination-out' : 'source-over';
    memoCtx.beginPath();
    memoCtx.arc(p.x, p.y, (memoTool.eraser ? memoTool.size * 3 : memoTool.size) / 2, 0, Math.PI*2);
    memoCtx.fillStyle = memoTool.eraser ? 'rgba(0,0,0,1)' : memoTool.color;
    memoCtx.fill();
  };
  const move = e => {
    if (!memoDrawing) return; e.preventDefault();
    const p = getPos(e, e.touches);
    memoCtx.globalCompositeOperation = memoTool.eraser ? 'destination-out' : 'source-over';
    memoCtx.beginPath();
    memoCtx.moveTo(memoLastPos.x, memoLastPos.y);
    memoCtx.lineTo(p.x, p.y);
    memoCtx.strokeStyle = memoTool.eraser ? 'rgba(0,0,0,1)' : memoTool.color;
    memoCtx.lineWidth   = memoTool.eraser ? memoTool.size * 3 : memoTool.size;
    memoCtx.stroke();
    memoLastPos = p;
  };
  const end = () => {
    if (!memoDrawing) return; memoDrawing = false;
    const tab = memoGetActive();
    if (tab) { tab[memoSaveTarget] = memoCanvas.toDataURL(); saveMemoData(); }
  };
  canvas.addEventListener('mousedown', start);
  canvas.addEventListener('mousemove', move);
  canvas.addEventListener('mouseup',   end);
  canvas.addEventListener('mouseleave',end);
  canvas.addEventListener('touchstart', start, { passive: false });
  canvas.addEventListener('touchmove',  move,  { passive: false });
  canvas.addEventListener('touchend',   end);
}

function memoSwitchTab(id) {
  const old = memoGetActive();
  if (old?.mode === 'draw'     && memoCanvas) old.canvasData     = memoCanvas.toDataURL();
  if (old?.mode === 'combined' && memoCanvas) old.combinedCanvas = memoCanvas.toDataURL();
  memoData.activeId = id; saveMemoData(); renderMemoTabs(); renderMemoContent();
}
function memoDeleteTab(id) {
  if (memoData.tabs.length <= 1) { alert(t('memo_last_tab')); return; }
  const idx = memoData.tabs.findIndex(t => t.id === id);
  memoData.tabs.splice(idx, 1);
  if (memoData.activeId === id) memoData.activeId = memoData.tabs[Math.max(0, idx-1)].id;
  saveMemoData(); renderMemoTabs(); renderMemoContent();
}
function memoAddTab() {
  const id = 'tab-' + Date.now();
  memoData.tabs.push({ id, name: t('memo_tab_n', memoData.tabs.length + 1), mode: 'text', text: '', canvasData: null, combinedText: '', combinedCanvas: null });
  memoSwitchTab(id);
}

// 위젯 크기 변경 시 캔버스 재초기화
const memoWidgetEl = document.getElementById('widget-memo');
if (memoWidgetEl && window.ResizeObserver) {
  new ResizeObserver(() => {
    const tab = memoGetActive();
    const isHidden = memoWidgetEl.classList.contains('widget-hidden');
    if (!isHidden && (tab?.mode === 'draw' || tab?.mode === 'combined')) {
      // memoCanvas가 현재 DOM의 캔버스와 같을 때만 저장
      // (모드 전환 직후엔 memoCanvas가 이전 모드 캔버스를 가리키므로 저장 금지)
      const domCanvas = document.getElementById('memo-canvas');
      if (memoCanvas && memoCanvas === domCanvas) {
        tab[memoSaveTarget] = memoCanvas.toDataURL();
      }
      initMemoCanvas(tab.mode === 'combined');
    }
  }).observe(memoWidgetEl);
}

loadMemoData();
renderMemoTabs();
renderMemoContent();
document.getElementById('memo-tab-add')?.addEventListener('click', memoAddTab);

// ===================================================
//  뽀모도로 타이머
// ===================================================
const POMO_KEY = 'pomo_settings_v1';

let pomoState = (() => {
  const saved = JSON.parse(localStorage.getItem(POMO_KEY) || 'null');
  return saved || {
    mode: 'focus',      // 'focus' | 'break' | 'longbreak'
    timeLeft: 25 * 60,
    running: false,
    session: 0,         // 완료된 집중 세션 수 (0~3)
    focusMins: 25,
    breakMins: 5,
    longBreakMins: 15,
    muted: false,
  };
})();
// 페이지 로드 시 실행 중이었던 상태는 중단으로 초기화
pomoState.running = false;

let pomoInterval = null;

function pomoSave() {
  localStorage.setItem(POMO_KEY, JSON.stringify(pomoState));
}

function pomoPlayAlarm() {
  if (pomoState.muted) return;
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const beep = (t, freq, dur) => {
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.35, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + dur);
      osc.start(t);
      osc.stop(t + dur);
    };
    const now = ctx.currentTime;
    beep(now,        880, 0.25);
    beep(now + 0.32, 880, 0.25);
    beep(now + 0.64, 1100, 0.5);
  } catch (e) {}
}

function pomoTotalSecs() {
  if (pomoState.mode === 'focus')     return pomoState.focusMins     * 60;
  if (pomoState.mode === 'break')     return pomoState.breakMins     * 60;
  return pomoState.longBreakMins * 60;
}

function pomoTick() {
  pomoState.timeLeft--;
  if (pomoState.timeLeft <= 0) {
    pomoFinish();
  } else {
    renderPomoTimer();
    pomoSave();
  }
}

function pomoFinish() {
  clearInterval(pomoInterval);
  pomoInterval = null;
  pomoState.running = false;

  if (pomoState.mode === 'focus') {
    pomoState.session = (pomoState.session + 1) % 4;
    if (pomoState.session === 0) {
      pomoState.mode = 'longbreak';
      pomoState.timeLeft = pomoState.longBreakMins * 60;
    } else {
      pomoState.mode = 'break';
      pomoState.timeLeft = pomoState.breakMins * 60;
    }
  } else {
    pomoState.mode = 'focus';
    pomoState.timeLeft = pomoState.focusMins * 60;
  }

  pomoSave();
  renderPomoTimer();
  pomoPlayAlarm();

  // 브라우저 알림 (권한 있을 때만)
  if (Notification?.permission === 'granted') {
    const msg = pomoState.mode === 'focus' ? t('pomo_notify_focus') :
                pomoState.mode === 'break' ? t('pomo_notify_break') : t('pomo_notify_long');
    new Notification(t('pomo_notify_title'), { body: msg, icon: '/favicon.ico' });
  }
}

function pomoStart() {
  if (pomoState.running) return;
  pomoState.running = true;
  pomoInterval = setInterval(pomoTick, 1000);
  renderPomoTimer();
  pomoSave();
}

function pomoPause() {
  if (!pomoState.running) return;
  pomoState.running = false;
  clearInterval(pomoInterval);
  pomoInterval = null;
  renderPomoTimer();
  pomoSave();
}

function pomoReset() {
  clearInterval(pomoInterval);
  pomoInterval = null;
  pomoState.running = false;
  pomoState.mode = 'focus';
  pomoState.timeLeft = pomoState.focusMins * 60;
  pomoState.session = 0;
  renderPomoTimer();
  pomoSave();
}

function pomoSkip() {
  if (pomoState.running) { clearInterval(pomoInterval); pomoInterval = null; }
  pomoFinish();
}

function renderPomoTimer() {
  const el = document.getElementById('pomo-display');
  if (!el) return;

  const mins = String(Math.floor(pomoState.timeLeft / 60)).padStart(2, '0');
  const secs = String(pomoState.timeLeft % 60).padStart(2, '0');

  const total    = pomoTotalSecs();
  const r        = 52;
  const circ     = 2 * Math.PI * r;
  const offset   = circ * (1 - pomoState.timeLeft / total);

  const isFocus = pomoState.mode === 'focus';
  const isLong  = pomoState.mode === 'longbreak';
  const modeLabel = isFocus ? t('pomo_focus') : isLong ? t('pomo_longbreak') : t('pomo_break');
  const modeColor = isFocus ? '#e05252' : isLong ? '#5b8dee' : '#3dba7d';
  const trackColor = isFocus ? '#fde8e8' : isLong ? '#dde8fd' : '#d4f5e5';

  const dots = Array.from({ length: 4 }, (_, i) =>
    `<span class="pomo-dot${i < pomoState.session ? ' done' : ''}"
      style="${i < pomoState.session ? `background:${modeColor}` : ''}"></span>`
  ).join('');

  el.innerHTML = `
    <div class="pomo-mode">${modeLabel}</div>
    <div class="pomo-ring-wrap">
      <svg class="pomo-svg" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <circle class="pomo-track" cx="60" cy="60" r="${r}" fill="none"
          stroke="${trackColor}" stroke-width="8"/>
        <circle class="pomo-arc" cx="60" cy="60" r="${r}" fill="none"
          stroke="${modeColor}" stroke-width="8" stroke-linecap="round"
          stroke-dasharray="${circ.toFixed(2)}" stroke-dashoffset="${offset.toFixed(2)}"
          transform="rotate(-90 60 60)"/>
      </svg>
      <div class="pomo-time">${mins}:${secs}</div>
    </div>
    <div class="pomo-dots">${dots}</div>
    <div class="pomo-controls">
      ${pomoState.running
        ? `<button class="pomo-btn pomo-btn-main" id="pomo-pause-btn">${t('pomo_pause')}</button>`
        : `<button class="pomo-btn pomo-btn-main" id="pomo-start-btn"
            style="background:${modeColor}">${t('pomo_start')}</button>`}
      <button class="pomo-btn pomo-btn-sub" id="pomo-skip-btn" title="${t('pomo_skip_title')}">⏭</button>
      <button class="pomo-btn pomo-btn-sub" id="pomo-reset-btn" title="${t('pomo_reset_title')}">↺</button>
      <button class="pomo-btn pomo-btn-sub pomo-mute-btn${pomoState.muted ? ' muted' : ''}"
        id="pomo-mute-btn" title="${pomoState.muted ? t('pomo_mute_on') : t('pomo_mute_off')}">
        ${pomoState.muted ? '🔇' : '🔔'}
      </button>
    </div>
    <div class="pomo-settings">
      <label>${t('pomo_focus_lbl')} <input class="pomo-mins-input" id="pomo-focus-input" type="number" min="1" max="60" value="${pomoState.focusMins}">${t('pomo_min')}</label>
      <label>${t('pomo_break_lbl')} <input class="pomo-mins-input" id="pomo-break-input" type="number" min="1" max="30" value="${pomoState.breakMins}">${t('pomo_min')}</label>
    </div>
  `;

  el.querySelector('#pomo-start-btn')?.addEventListener('click', pomoStart);
  el.querySelector('#pomo-pause-btn')?.addEventListener('click', pomoPause);
  el.querySelector('#pomo-skip-btn')?.addEventListener('click', pomoSkip);
  el.querySelector('#pomo-reset-btn')?.addEventListener('click', pomoReset);
  el.querySelector('#pomo-mute-btn')?.addEventListener('click', () => {
    pomoState.muted = !pomoState.muted;
    pomoSave();
    renderPomoTimer();
  });
  el.querySelector('#pomo-focus-input')?.addEventListener('change', function() {
    const v = Math.max(1, Math.min(60, parseInt(this.value) || 25));
    pomoState.focusMins = v;
    if (pomoState.mode === 'focus' && !pomoState.running) pomoState.timeLeft = v * 60;
    pomoSave(); renderPomoTimer();
  });
  el.querySelector('#pomo-break-input')?.addEventListener('change', function() {
    const v = Math.max(1, Math.min(30, parseInt(this.value) || 5));
    pomoState.breakMins = v;
    if (pomoState.mode === 'break' && !pomoState.running) pomoState.timeLeft = v * 60;
    pomoSave(); renderPomoTimer();
  });
}

// 위젯이 보일 때마다 렌더링 (show 이벤트 대신 초기 렌더)
renderPomoTimer();

// ===================================================
//  시계 위젯 (최대 5개, 각각 독립 타임존)
// ===================================================
const CLOCK_SETTINGS_KEY = 'clock_settings_v1';

function getClockTimezones() {
  return [
    { label: t('tz_korea'),      tz: 'Asia/Seoul' },
    { label: t('tz_japan'),      tz: 'Asia/Tokyo' },
    { label: t('tz_china'),      tz: 'Asia/Shanghai' },
    { label: t('tz_singapore'),  tz: 'Asia/Singapore' },
    { label: t('tz_india'),      tz: 'Asia/Kolkata' },
    { label: t('tz_dubai'),      tz: 'Asia/Dubai' },
    { label: t('tz_russia'),     tz: 'Europe/Moscow' },
    { label: t('tz_uk'),         tz: 'Europe/London' },
    { label: t('tz_germany'),    tz: 'Europe/Berlin' },
    { label: t('tz_france'),     tz: 'Europe/Paris' },
    { label: t('tz_us_east'),    tz: 'America/New_York' },
    { label: t('tz_us_west'),    tz: 'America/Los_Angeles' },
    { label: t('tz_brazil'),     tz: 'America/Sao_Paulo' },
    { label: t('tz_australia'),  tz: 'Australia/Sydney' },
    { label: t('tz_newzealand'), tz: 'Pacific/Auckland' },
  ];
}
// 하위 호환성
const CLOCK_TIMEZONES = [
  { label: '🇰🇷 한국',              tz: 'Asia/Seoul' },
  { label: '🇯🇵 일본',              tz: 'Asia/Tokyo' },
  { label: '🇨🇳 중국',              tz: 'Asia/Shanghai' },
  { label: '🇸🇬 싱가포르',          tz: 'Asia/Singapore' },
  { label: '🇮🇳 인도',              tz: 'Asia/Kolkata' },
  { label: '🇦🇪 두바이',            tz: 'Asia/Dubai' },
  { label: '🇷🇺 러시아(모스크바)',  tz: 'Europe/Moscow' },
  { label: '🇬🇧 영국',              tz: 'Europe/London' },
  { label: '🇩🇪 독일',              tz: 'Europe/Berlin' },
  { label: '🇫🇷 프랑스',            tz: 'Europe/Paris' },
  { label: '🇺🇸 미국 동부',         tz: 'America/New_York' },
  { label: '🇺🇸 미국 서부',         tz: 'America/Los_Angeles' },
  { label: '🇧🇷 브라질',            tz: 'America/Sao_Paulo' },
  { label: '🇦🇺 호주(시드니)',       tz: 'Australia/Sydney' },
  { label: '🇳🇿 뉴질랜드',          tz: 'Pacific/Auckland' },
];

const CLOCK_TZ_DEFAULTS = {
  'widget-clock-1': 'Asia/Seoul',
  'widget-clock-2': 'America/New_York',
  'widget-clock-3': 'Europe/London',
  'widget-clock-4': 'Asia/Tokyo',
  'widget-clock-5': 'Asia/Shanghai',
};

function loadClockSettings() {
  try { return JSON.parse(localStorage.getItem(CLOCK_SETTINGS_KEY)) || {}; }
  catch { return {}; }
}

function getClockTz(clockId) {
  return loadClockSettings()[clockId] || CLOCK_TZ_DEFAULTS[clockId] || 'Asia/Seoul';
}

function saveClockTz(clockId, tz) {
  const s = loadClockSettings();
  s[clockId] = tz;
  localStorage.setItem(CLOCK_SETTINGS_KEY, JSON.stringify(s));
}

// 위젯 구조 초기화 (처음 한 번만)
function initClockWidget(num) {
  const el = document.getElementById(`clock-display-${num}`);
  if (!el || el.dataset.init) return;
  el.dataset.init = '1';

  const clockId = `widget-clock-${num}`;
  const tz = getClockTz(clockId);
  const opts = getClockTimezones().map(tzItem =>
    `<option value="${tzItem.tz}"${tzItem.tz === tz ? ' selected' : ''}>${tzItem.label}</option>`
  ).join('');

  el.innerHTML = `
    <select class="clock-tz-select" id="clock-select-${num}">${opts}</select>
    <div class="clock-time" id="clock-time-${num}"></div>
    <div class="clock-date" id="clock-date-${num}"></div>
  `;

  document.getElementById(`clock-select-${num}`).addEventListener('change', function() {
    saveClockTz(clockId, this.value);
    tickClock(num);
  });
}

// 매초 시간만 업데이트
function tickClock(num) {
  const timeEl = document.getElementById(`clock-time-${num}`);
  const dateEl = document.getElementById(`clock-date-${num}`);
  if (!timeEl || !dateEl) return;

  const tz   = getClockTz(`widget-clock-${num}`);
  const now  = new Date();
  const locale = currentLang === 'ko' ? 'ko-KR' : 'en-US';
  try {
    const timeStr = now.toLocaleTimeString(locale, { timeZone: tz, hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const dateStr = now.toLocaleDateString(locale, { timeZone: tz, year: 'numeric', month: 'short', day: 'numeric', weekday: 'short' });
    const parts = timeStr.split(':');
    const [hh, mm, ss] = parts;
    timeEl.innerHTML = `${hh}<span class="clock-colon">:</span>${mm}<span class="clock-colon">:</span>${ss}`;
    dateEl.textContent = dateStr;
  } catch {}
}

function tickAllClocks() {
  for (let i = 1; i <= 5; i++) {
    initClockWidget(i);
    tickClock(i);
  }
}

tickAllClocks();
setInterval(tickAllClocks, 1000);

// ===================================================
//  언어 토글
// ===================================================
document.getElementById('lang-toggle-btn')?.addEventListener('click', () => {
  setLang(currentLang === 'ko' ? 'en' : 'ko');
});

// 초기 번역 적용 (한국어가 아닐 때)
applyTranslations();
