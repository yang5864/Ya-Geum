<template>
  <div class="min-h-screen bg-gray-100 flex justify-center items-center">
    <div class="relative w-[390px] h-[844px] bg-white shadow-2xl overflow-hidden flex flex-col">
      <!-- v-if 로직을 하나로 합쳐서 관리하는 것이 깨끗합니다 -->
      <NavBar v-if="showNav" />

      <!-- 하단바/네비바가 없을 때 Splash가 꽉 차도록 flex-1 확인 -->
      <main class="flex-1 overflow-y-auto">
        <RouterView />
      </main>

      <BottomBar v-if="showBottomBar" />
    </div>
  </div>
</template>
<script setup>
import '@/assets/main.css'
import NavBar from '@/components/common/NavBar.vue'
import BottomBar from '@/components/common/BottomBar.vue'

import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// 1. 레이아웃을 숨길 경로/이름 정의
const isHideLayout = computed(() => {
  const hidePaths = ['/', '/login', '/register']
  const hideNames = ['splash', 'login', 'register', 'registerAgreement', 'registerAccount']

  return hideNames.includes(route.name) || hidePaths.includes(route.path)
})

// 2. 상단 네비바 표시 여부
const showNav = computed(() => !isHideLayout.value)

// 3. 하단바 표시 여부 (두 조건을 하나로 합침)
const showBottomBar = computed(() => {
  // 레이아웃 숨김 대상이 아니고 && /register로 시작하는 경로가 아닐 때만 true
  return !isHideLayout.value && !route.path.startsWith('/register')
})
</script>
