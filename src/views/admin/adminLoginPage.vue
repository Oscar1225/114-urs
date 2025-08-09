<template>
  <div class="bg-image d-flex justify-content-center align-items-center vh-100">
    <el-card class="w-100 position-relative" style="max-width: 400px; padding: 20px;">
      <!-- 返回箭頭，絕對定位在 el-card 左上角 -->
      <el-button
        class="position-absolute"
        style="top: 10px; left: 10px; background: transparent; border: none; box-shadow: none;"
        :icon="ArrowLeft"
        circle
        @click="goBack"
      />

      <h3 class="text-center mb-4">管理員登入</h3>

      <el-form :model="form">
        <el-form-item label="帳號">
          <el-input v-model="form.username" placeholder="請輸入帳號" />
        </el-form-item>

        <el-form-item label="密碼">
          <el-input v-model="form.password" type="password" placeholder="請輸入密碼" show-password />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" class="w-100" @click="handleLogin">登入</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { ArrowLeft } from '@element-plus/icons-vue'

const user = useUserStore()
const router = useRouter()

const form = reactive({
  username: '',
  password: '',
  role: 'admin',
})

const handleLogin = () => {
  console.log('登入帳號:', form.username, '密碼:', form.password)
  user.login()
  router.push('/admin/main')
}

const goBack = () => {
  user.isSelect=false
  user.role=" "
  router.push('/')
}
</script>

<style scoped>
a {
  color: #409EFF;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.bg-image {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  background-image: url('@/assets/bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
