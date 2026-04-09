<script setup>
import { ref, computed, watch } from 'vue'
import { useUserStore } from '../../stores/user'
import ramuFace from '../../assets/ramu_face.png'

const userStore = useUserStore()

// 닉네임
const nickname = ref('')

// 월 목표 예산
const monthlyBudget = ref('')

// 프로필 이미지 미리보기 (기본: 라무 캐릭터)
const profileImagePreview = ref(ramuFace)

// 파일 입력 요소 참조
const fileInputRef = ref(null)

// 닉네임 유효성: 2~8자, 한글/영문/숫자만 허용 (특수문자 불가)
const isNicknameValid = computed(() =>
  /^[가-힣a-zA-Z0-9]{2,8}$/.test(nickname.value),
)

// 폼 전체 유효성 (닉네임만 필수, 예산은 선택)
const isFormValid = computed(() => isNicknameValid.value)

// 사진 변경 버튼 클릭 시 파일 입력 트리거
function handleImageClick() {
  fileInputRef.value?.click()
}

// 이미지 파일 선택 시 base64로 변환 후 스토어에 저장
function handleFileChange(event) {
  const file = event.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = (e) => {
    profileImagePreview.value = e.target.result
    userStore.setProfileImage(e.target.result)
  }
  reader.readAsDataURL(file)
}

// 닉네임 변경 시 스토어에 동기화
watch(nickname, (val) => {
  userStore.setNickname(val)
})

// 예산 변경 시 숫자로 파싱 후 스토어에 동기화
watch(monthlyBudget, (val) => {
  const parsed = parseInt(val, 10)
  userStore.setMonthlyBudget(isNaN(parsed) ? null : parsed)
})

// 유효성 변경 시 스토어에 동기화
watch(isFormValid, (val) => {
  userStore.setProfileStepValid(val)
}, { immediate: true })
</script>

<template>
  <!-- 타이틀 영역 -->
  <h1 class="text-2xl font-bold text-kb-dark-gray leading-snug">프로필을 설정해요</h1>
  <p class="text-sm text-kb-gray mt-1">가계부에서 사용할 닉네임을 알려주세요</p>

  <!-- 프로필 이미지 -->
  <div class="flex flex-col items-center mt-6">
    <div class="relative w-24 h-24">
      <img
        :src="profileImagePreview"
        alt="프로필 이미지"
        class="w-24 h-24 rounded-full object-cover border-2 border-zinc-200"
      />
      <!-- 사진 변경 버튼 -->
      <button
        @click="handleImageClick"
        type="button"
        class="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-kb-yellow flex items-center justify-center shadow"
      >
        <span class="text-white text-xs font-bold">✎</span>
      </button>
    </div>
    <span class="text-xs text-kb-yellow mt-2 cursor-pointer" @click="handleImageClick">사진 변경</span>

    <!-- 숨겨진 파일 입력 -->
    <input
      ref="fileInputRef"
      type="file"
      accept="image/*"
      class="hidden"
      @change="handleFileChange"
    />
  </div>

  <!-- 입력 폼 -->
  <div class="mt-6 flex flex-col gap-5">

    <!-- 닉네임 -->
    <div class="flex flex-col gap-1.5">
      <div class="flex items-center justify-between">
        <label class="text-sm font-medium text-kb-dark-gray">닉네임</label>
        <span class="text-xs text-red-500">특수문자는 사용할 수 없습니다</span>
      </div>
      <input
        v-model="nickname"
        type="text"
        placeholder="2~8자 이내로 입력해주세요"
        maxlength="8"
        class="w-full px-4 py-3.5 rounded-2xl border border-zinc-200 bg-white text-sm text-kb-dark-gray placeholder:text-zinc-300 outline-none focus:border-kb-yellow transition-colors duration-200"
      />
    </div>

    <!-- 월 목표 예산 (선택) -->
    <div class="flex flex-col gap-1.5">
      <label class="text-sm font-medium text-kb-dark-gray">
        월 목표 예산
        <span class="text-xs text-kb-gray font-normal ml-1">(선택)</span>
      </label>
      <input
        v-model="monthlyBudget"
        type="number"
        placeholder="예: 500000     나중에 설정에서 변경할 수 있어요"
        class="w-full px-4 py-3.5 rounded-2xl border border-zinc-200 bg-white text-sm text-kb-dark-gray placeholder:text-zinc-300 outline-none focus:border-kb-yellow transition-colors duration-200"
      />
    </div>

  </div>
</template>

<style lang="scss" scoped></style>
