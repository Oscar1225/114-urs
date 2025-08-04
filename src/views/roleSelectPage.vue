<template>
  <div class=" d-flex justify-content-center align-items-center vh-100 bg-image">
    <el-card class="w-100" style="max-width: 400px; padding: 20px;">
      <h3 class="text-center mb-4">格外品媒合系統身分選擇</h3>

      <el-form>
        <el-form-item>
          <el-button type="primary" class="w-100" @click="buyerlogin">買家登入/註冊</el-button>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" class="w-100" @click="sellerlogin">賣家登入/註冊</el-button>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" class="w-100" @click="adminlogin">管理員登入</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const user = useUserStore()

const buyerlogin = () => {
  user.select('buyer')
  router.push('/buyer/login')
}
const sellerlogin = () => {
  user.select('seller')
  router.push('/seller/login')
}
const adminlogin = () => {
  user.select('admin')
  router.push('/admin/login')
}
</script>

<style scoped>
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
