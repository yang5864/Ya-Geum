<template>
  <div
    class="w-full h-full bg-[#FFBC00] flex flex-col items-center justify-between overflow-hidden font-['Noto_Sans_KR']"
  >
    <!-- 중앙 로고 영역 -->
    <div class="flex-1 flex flex-col items-center justify-center">
      <img
        src="@/assets/character.png"
        alt="야금 캐릭터"
        class="w-[399px] h-[266px] object-contain mb-1"
      />

      <img
        src="@/assets/logoText.png"
        alt="야무진 금융 챌린지"
        class="h-[24px] object-contain mt-2.5"
      />
    </div>

    <!-- 버튼 영역: 3초 후 슬라이드업 -->
    <Transition
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="translate-y-16 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
    >
      <div v-if="showButtons" class="w-full px-6 pb-11 flex flex-col items-center">
        <button
          class="w-full h-[54px] rounded-xl bg-[#2D1200] text-[#F5C800] text-base font-bold active:scale-95 active:opacity-80 transition-transform"
          @click="handleLogin"
        >
          로그인
        </button>
        <button
          class="w-full h-[54px] rounded-xl border border-[#5A3E00] bg-transparent text-[#5A3E00] text-base font-bold mt-2.5 active:scale-95 active:opacity-80 transition-all duration-300"
          @click="handleSignup"
        >
          회원가입
        </button>
        <p class="text-[11px] text-[#7A5500] text-center leading-relaxed mt-3 px-2">
          로그인 시 이용약관 및 개인정보처리방침에 동의하게 됩니다.
        </p>
        <img src="@/assets/kbLogo.png" alt="KB 국민은행" class="h-[24px] object-contain mt-2.5" />
      </div>
    </Transition>

    <!-- 초기 로딩: KB 국민은행 로고만 -->
    <Transition
      leave-active-class="transition-opacity duration-300 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="!showButtons" class="w-full flex justify-center pb-12">
        <img src="@/assets/kbLogo.png" alt="KB 국민은행" class="h-[36px] object-contain mt-2.5" />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const showButtons = ref(false)

onMounted(() => {
  setTimeout(() => {
    showButtons.value = true
  }, 3000)
})

const handleLogin = () => {
  router.push('/login')
}

const handleSignup = () => {
  router.push('/register')
}
</script>
