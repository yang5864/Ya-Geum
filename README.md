# Ya-Geum

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

---

## 📋 협업 컨벤션

### 1️⃣ Commit Message

커밋 메시지는 **type: subject** 형태로 작성한다. (콜론 뒤 space 주의 ⚠️)

#### Tag

| 태그 | 설명 |
|------|------|
| `feat` | 새로운 기능 추가 |
| `fix` | 버그 수정 |
| `docs` | 문서 수정 (ex. README) |
| `refactor` | 코드 리팩토링 |
| `test` | 테스트 코드 관련 내용 추가 |
| `chore` | 빌드 업데이트, 설정 변경 (코드 수정 X) |
| `init` | 프로젝트 초기 설정 |

- 태그는 모두 **소문자**로 작성
- 제목은 간결하게, 한글로 직접적으로 표현
- 마침표 및 특수기호 사용 금지
- 명령문 사용

```
feat: User Entity 구현
```

#### Body (Optional)

- 커밋 Subject로 해결이 어려울 때만 작성
- 무엇을 바꿨는지 한 줄로 작성 (50자 이내)

```
boolean으로 선언되어있던 role을 Enum 타입으로 바꾸어 가독성 높임
```

#### Footer

사용하지 않는다. (코드 리뷰는 PR에서 관리)

---

### 2️⃣ Issue

GitHub Issue를 태스크, 버그 관리 등 해야 할 것들을 기록하는 용도로 사용한다.

- 커밋 컨벤션 tag를 사용하되, **모두 대문자**로 적고 **대괄호**로 감싼다.
- 대괄호 뒤 space에 유의 ⚠️

```
[FEAT] 네이버 소셜 로그인 구현
```

---

### 3️⃣ Pull Request

리뷰어가 코드 문맥을 빠르게 파악할 수 있도록 PR 내용에서 충분한 정보를 전달한다.

---

### 4️⃣ Branch

이슈 넘버링을 활용하여 브랜치를 생성한다.

```
타입/#이슈번호
```

예시: `feat/#1`, `fix/#7`

---

### 5️⃣ 폴더 구조 컨벤션

프론트엔드 작업 시 역할 분담을 명확히 하기 위한 구조.

```
src/
├── views/       # 화면 단위 컴포넌트 (예: HomeView.vue, ChallengeView.vue)
├── components/  # 재사용 가능한 UI 조각 (예: GnbTemplate.vue, TransactionItem.vue)
├── api/         # Axios 인스턴스 및 json-server와 통신하는 함수들
└── stores/      # Pinia 상태 관리 로직
```

| 디렉토리 | 역할 |
|----------|------|
| `views/` | 라우트와 연결되는 화면 단위 컴포넌트 |
| `components/` | 여러 화면에서 재사용되는 UI 조각 |
| `api/` | Axios 인스턴스 설정 및 API 통신 함수 |
| `stores/` | Pinia 기반 전역 상태 관리 |
