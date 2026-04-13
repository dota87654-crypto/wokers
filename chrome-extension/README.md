# Daily Planner — Chrome Extension

새 탭을 열면 [wokers-99z.pages.dev](https://wokers-99z.pages.dev) 사이트를 바로 불러옵니다.  
사이트가 업데이트되면 익스텐션을 재배포하지 않아도 자동으로 반영됩니다.

## 설치 방법

1. `chrome://extensions` 접속
2. 우측 상단 **개발자 모드** 활성화
3. **압축해제된 확장 프로그램을 로드합니다** 클릭
4. `chrome-extension/` 폴더 선택

## 파일 구조

```
chrome-extension/
├── manifest.json   # MV3 익스텐션 설정
├── newtab.html     # 새 탭 진입점
├── redirect.js     # wokers-99z.pages.dev 로 리다이렉트
└── icons/          # 익스텐션 아이콘
```
