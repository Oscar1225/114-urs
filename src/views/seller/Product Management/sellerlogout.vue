<template>
  <el-button type="danger" @click="handleLogout">登出</el-button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const user = useUserStore()
const router = useRouter()

function handleLogout() {
  user.logout()
  router.push('/') // 或你要導去的頁面，如 /login
}
</script>
