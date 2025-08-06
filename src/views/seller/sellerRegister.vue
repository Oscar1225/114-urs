<template>
  <div class="bg-image d-flex justify-content-center align-items-center vh-100 position-relative">
    <el-card class="w-100 position-relative" style="max-width: 500px; padding: 20px;">
      <!-- 返回箭頭 -->
      <el-button
        class="position-absolute"
        style="top: 10px; left: 10px; background: transparent; border: none; box-shadow: none;"
        :icon="ArrowLeft"
        @click="goBack"
      />

      <h3 class="text-center mb-4">賣家註冊</h3>

      <el-form :model="form" :rules="rules" ref="registerForm" label-position="top">
        <el-form-item label="帳號" prop="username">
          <el-input v-model="form.username" placeholder="請輸入帳號" />
        </el-form-item>

        <el-form-item label="密碼" prop="password">
          <el-input v-model="form.password" type="password" placeholder="請輸入密碼" show-password />
        </el-form-item>

        <el-form-item label="確認密碼" prop="confirmPassword">
          <el-input v-model="form.confirmPassword" type="password" placeholder="請再次輸入密碼" show-password />
        </el-form-item>

        <el-form-item label="聯絡電話" prop="phone">
          <el-input v-model="form.phone" placeholder="請輸入聯絡電話" />
        </el-form-item>

        <el-form-item label="聯絡 Email" prop="email">
          <el-input v-model="form.email" placeholder="請輸入 Email" />
        </el-form-item>

        <el-form-item label="地址" prop="address">
          <el-input v-model="form.address" placeholder="請輸入地址" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" class="w-100" @click="handleRegister">註冊</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <!-- 手機驗證 Dialog -->
    <el-dialog v-model="verifyPhoneDialogVisible" title="手機驗證" width="400px" center>
      <el-card shadow="never">
        <p>請輸入發送至手機 {{ form.phone }} 的驗證碼：</p>
        <el-input v-model="phoneVerificationCode" placeholder="輸入驗證碼" class="mb-3" />
        <div class="d-flex justify-content-end">
          <el-button @click="verifyPhoneDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handlePhoneVerify">確認</el-button>
        </div>
      </el-card>
    </el-dialog>

    <!-- Email 驗證 Dialog -->
    <el-dialog v-model="verifyEmailDialogVisible" title="Email 驗證" width="400px" center>
      <el-card shadow="never">
        <p>請輸入發送至 Email {{ form.email }} 的驗證碼：</p>
        <el-input v-model="emailVerificationCode" placeholder="輸入驗證碼" class="mb-3" />
        <div class="d-flex justify-content-end">
          <el-button @click="verifyEmailDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleEmailVerify">確認</el-button>
        </div>
      </el-card>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ArrowLeft } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const user = useUserStore()
const router = useRouter()

const form = reactive({
  username: '',
  password: '',
  confirmPassword: '',
  phone: '',
  email: '',
  address: '',
})

const registerForm = ref<FormInstance>()

const rules: FormRules = {
  username: [
    { required: true, message: '請輸入帳號', trigger: 'blur' },
    { min: 4, message: '帳號至少 4 碼', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '請輸入密碼', trigger: 'blur' },
    { min: 6, message: '密碼至少 6 碼', trigger: 'blur' }
  ],
  confirmPassword: [
    { required: true, message: '請再次輸入密碼', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        if (value !== form.password) {
          callback(new Error('兩次輸入的密碼不一致'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ],
  phone: [
    { required: true, message: '請輸入電話', trigger: 'blur' },
    { pattern: /^09\d{8}$/, message: '電話格式錯誤，需為台灣手機格式 09xxxxxxxx', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '請輸入 Email', trigger: 'blur' },
    { type: 'email', message: 'Email 格式錯誤', trigger: 'blur' }
  ],
  address: [
    { required: false, message: '請輸入地址', trigger: 'blur' }
  ],
}

// 驗證視窗與驗證碼
const verifyPhoneDialogVisible = ref(false)
const verifyEmailDialogVisible = ref(false)

const phoneVerificationCode = ref('')
const emailVerificationCode = ref('')

// 點擊註冊
const handleRegister = () => {
  registerForm.value?.validate((valid) => {
    if (valid) {
      // TODO: 呼叫後端發送手機驗證碼
      verifyPhoneDialogVisible.value = true
    } else {
      console.warn('表單驗證未通過')
    }
  })
}

// 確認手機驗證碼
const handlePhoneVerify = () => {
  const isCodeCorrect = phoneVerificationCode.value === '123456' // 假設驗證碼
  if (isCodeCorrect) {
    verifyPhoneDialogVisible.value = false
    // TODO: 呼叫後端發送 Email 驗證碼
    verifyEmailDialogVisible.value = true
  } else {
    user.registerError()
  }
}

// 確認 Email 驗證碼
const handleEmailVerify = () => {
  const isCodeCorrect = emailVerificationCode.value === '654321' // 假設驗證碼
  if (isCodeCorrect) {
    verifyEmailDialogVisible.value = false
    user.register()
    console.log('註冊表單資料：', form)

    // TODO: 呼叫後端完成註冊
    router.push('/seller/login')
  } else {
    user.registerError()
  }
}

const goBack = () => {
  router.push('/seller/login')
}
</script>

<style scoped>
.bg-image {
  height: 100vh;
  width: 100vw;
  background-image: url('@/assets/bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
