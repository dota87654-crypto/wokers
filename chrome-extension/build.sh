#!/bin/bash
# Daily Planner Chrome Extension 빌드 스크립트
# 루트 디렉터리의 style.css, main.js를 익스텐션 폴더로 복사합니다.

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"

echo "▶ style.css 복사 중..."
cp "$ROOT_DIR/style.css" "$SCRIPT_DIR/style.css"

echo "▶ main.js 복사 중..."
cp "$ROOT_DIR/main.js" "$SCRIPT_DIR/main.js"

echo "✅ 빌드 완료! chrome-extension/ 폴더를 크롬에 로드하세요."
echo ""
echo "크롬 로드 방법:"
echo "  1. chrome://extensions 접속"
echo "  2. '개발자 모드' 활성화"
echo "  3. '압축해제된 확장 프로그램을 로드합니다' 클릭"
echo "  4. chrome-extension/ 폴더 선택"
