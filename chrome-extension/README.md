# Daily Planner — Chrome Extension

새 탭을 열면 Daily Planner가 바로 표시되는 크롬 익스텐션입니다.

## 설치 방법

### 1단계: 빌드 (최신 코드 반영)
```bash
cd chrome-extension
bash build.sh
```

### 2단계: 크롬에 로드
1. 크롬 주소창에 `chrome://extensions` 입력
2. 우측 상단 **개발자 모드** 활성화
3. **압축해제된 확장 프로그램을 로드합니다** 클릭
4. `chrome-extension/` 폴더 선택

### 3단계: 새 탭 확인
새 탭을 열면 Daily Planner가 표시됩니다.

---

## Google 로그인 설정 (선택사항)

익스텐션에서 Google 로그인을 사용하려면 Supabase에 Redirect URL을 등록해야 합니다.

1. `chrome://extensions`에서 **Daily Planner** 카드의 ID 복사  
   (예: `abcdefghijklmnopqrstuvwxyzabcdef`)
2. [Supabase Dashboard](https://supabase.com/dashboard) → Authentication → URL Configuration
3. **Redirect URLs**에 아래 주소 추가:
   ```
   chrome-extension://[여기에_익스텐션_ID]/newtab.html
   ```

> 💡 Google 로그인 없이도 **게스트 모드**로 모든 기능을 사용할 수 있습니다.  
> 게스트 데이터는 브라우저 localStorage에 저장됩니다.

---

## 파일 구조

```
chrome-extension/
├── manifest.json       # MV3 익스텐션 설정
├── newtab.html         # 새 탭 페이지 (Analytics/AdSense 제외)
├── style.css           # 웹앱과 동일한 스타일 (build.sh로 복사)
├── main.js             # 웹앱과 동일한 로직 (build.sh로 복사)
├── supabase.min.js     # Supabase JS SDK (로컬 번들)
├── icons/              # 익스텐션 아이콘
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── build.sh            # style.css, main.js 복사 스크립트
```

## 웹앱과 익스텐션의 차이

| 항목 | 웹앱 | 익스텐션 |
|------|------|----------|
| Google Analytics | ✅ | ❌ (제외) |
| AdSense 광고 | ✅ | ❌ (제외) |
| Microsoft Clarity | ✅ | ❌ (제외) |
| Supabase 동기화 | ✅ | ✅ (동일 계정) |
| 게스트 모드 | ✅ | ✅ |
| 다크/라이트 모드 | ✅ | ✅ |
