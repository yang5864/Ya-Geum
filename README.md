# 야금 (Ya-Geum)

> **야**무진 **금**융 챌린지 — 소비를 기록하고, 절약을 경쟁하는 모바일 가계부 앱

---

## 소개

**야금**은 KB국민은행 스타일의 UI를 기반으로 만든 개인 재무 관리 모바일 웹 앱입니다.  
단순한 수입·지출 기록을 넘어, 월별 챌린지와 절약 랭킹 시스템을 통해 소비 습관 개선을 유도합니다.

---

## 주요 기능

### 가계부
- 월별 수입·지출 내역 기록 및 조회
- 카테고리 필터 (식비, 카페, 쇼핑, 교통, 여가, 의료 등)
- 날짜별 그룹핑 및 일별 합계 표시
- 드래그로 닫는 모달 방식의 거래 추가

### 요약
- 월별 수입·지출 막대 차트 시각화
- 월별 순이익 테이블 (수입 / 지출 / 순이익)
- 카테고리별 지출 비율 바 차트

### 챌린지
- 운영자가 매월 지정한 절약 챌린지 참여 (예: 10만원 한달살기)
- 나의 소비 금액 실시간 진행률 표시
- 같은 챌린지 참여자 간 절약 금액 기준 실시간 랭킹 (3초 폴링)
- 소비 0원인 유저는 랭킹 미노출

### 프로필
- 닉네임·프로필 이미지 수정
- 챌린지 성공 횟수 기반 레벨 시스템
- 나의 챌린지 히스토리 (성공 / 실패 / 진행중 상태 표시)

### 인증
- 이메일 + 비밀번호 로그인 / 회원가입
- 신규 가입 시 이번 달 챌린지 자동 참여
- 스플래시 화면 → 로그인 → 메인 흐름

---

## 기술 스택

| 구분 | 기술 |
|------|------|
| 프레임워크 | Vue 3 (Composition API, `<script setup>`) |
| 빌드 도구 | Vite 7 |
| 상태 관리 | Pinia |
| 라우터 | Vue Router 5 |
| 스타일 | Tailwind CSS 4 |
| HTTP 클라이언트 | Axios |
| 날짜 유틸 | Day.js |
| 백엔드 | json-server (Glitch 배포) |
| 프론트 배포 | Vercel |

---

## 화면 구성

```
스플래시 → 로그인 / 회원가입
              ↓
    ┌─────────────────────┐
    │  NavBar (야금 로고)   │
    ├──────┬──────┬───────┤
    │ 가계부│ 요약 │챌린지 │ 프로필
    └──────┴──────┴───────┘
              ↕ (좌우 스와이프 탭 전환)
    BottomBar (가계부 / 요약 / 챌린지 / 프로필)
```

---

## 프로젝트 구조

```
src/
├── api/            # axios 인스턴스, 트랜잭션/챌린지 API
├── assets/         # 아이콘, 이미지, 전역 CSS
├── components/
│   ├── challenge/  # ChallengeCard, RankingList
│   ├── common/     # NavBar, BottomBar
│   ├── profile/    # ProfileCard, ChallengeHistory, ChallengeItem
│   ├── Register/   # 회원가입 단계별 컴포넌트
│   └── transaction/# TransactionItem, TransactionModal
├── router/         # Vue Router 설정
├── stores/         # Pinia 스토어 (user, budget, register)
├── utils/          # format, icons 유틸
└── views/          # 각 탭 뷰 (Home, Summary, Challenge, Profile 등)
```

---

## 디자인 시스템

KB국민은행 브랜드 컬러 기반의 커스텀 Tailwind 테마를 사용합니다.

| 토큰 | 용도 |
|------|------|
| `kb-yellow` | 주요 액션, 강조 |
| `kb-income` | 수입 (초록) |
| `kb-expense` | 지출 (빨강) |
| `kb-profit` | 본문 텍스트 |
| `kb-app-bg` | 배경 |
| `kb-card` | 카드 배경 |


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
