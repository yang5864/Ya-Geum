<template>
  <!-- 전체 배경 -->
  <div class="min-h-screen bg-gray-100 flex justify-center items-center">
    <!-- 아이폰 틀 (390 x 844) -->
    <div class="relative w-[390px] h-[844px] bg-white shadow-2xl overflow-hidden flex flex-col">
      <!-- 상단 헤더 (NavBar.vue를 헤더로 사용) -->
      <NavBar />

      <!-- 메인 컨텐츠 (스크롤 영역) 
      <main class="flex-1 overflow-y-auto bg-white">
        <router-view />
      </main>
      -->
      <!-- 하단 바 (BottomBar.vue를 하단 바로 사용) -->
      <BottomBar />
    </div>
  </div>
</template>

<script setup>
import './assets/main.css'
import NavBar from './components/common/NavBar.vue'
import BottomBar from './components/common/BottomBar.vue'
</script>
