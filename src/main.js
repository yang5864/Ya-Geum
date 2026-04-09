import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

// ────────────────────────────────────────────
// 앱 시작 시 localStorage의 userId로 로그인 상태 복원
// router가 등록된 이후, mount 이전에 실행해야 가드가 올바르게 동작함
// ────────────────────────────────────────────
import { useUserStore } from './stores/user'
const userStore = useUserStore()
userStore.initAuth().finally(() => {
  app.mount('#app')
})
