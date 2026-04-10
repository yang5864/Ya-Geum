import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createGtag } from 'vue-gtag'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

// ────────────────────────────────────────────
// 앱 초기화
// - initAuth: localStorage의 userId로 로그인 상태 복원
// - resetRegister: 회원가입 도중 앱이 종료된 경우를 대비해 상태 초기화
// router 등록 전에 initAuth를 완료해야 초기 네비게이션 가드가
// 올바른 isLoggedIn 상태를 참조할 수 있음
// ────────────────────────────────────────────
import { useAuthStore } from './stores/user'
import { useRegisterStore } from './stores/useRegisterStore'

const authStore = useAuthStore()
const registerStore = useRegisterStore()

// 회원가입 상태 초기화 (앱 재시작 시 깨끗한 상태 보장)
registerStore.resetRegister()

// 로그인 상태 복원 후 router 등록 → 앱 마운트
// (router를 먼저 등록하면 초기 네비게이션 가드가 isLoggedIn=false 상태에서 실행됨)
authStore.initAuth().finally(() => {
  app.use(router)
  app.use(createGtag({ tagId: 'G-0GF7PNFY10', pageTracker: { router } }))
  app.mount('#app')
})
