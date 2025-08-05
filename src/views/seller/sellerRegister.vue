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
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ArrowLeft } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = reactive({
  username: '',
  password: '',
  confirmPassword: '', // 新增確認密碼
  phone: '',
  email: '',
  address: '',
})


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
    { type: 'email', message: 'Email 格式錯誤', trigger:'blur' }
  ],
  address: [
    { required: true, message: '請輸入地址', trigger: 'blur' }
  ],
}


const registerForm = ref<FormInstance>()

const handleRegister = () => {
  registerForm.value?.validate((valid) => {
    if (valid) {
      console.log('註冊資料:', form)
      alert('註冊成功！')
    } else {
      console.warn('表單驗證未通過')
    }
  })
}

const goBack = () => {
  router.push('/seller/login') // 返回首頁或登入頁
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
