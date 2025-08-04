<template>
  <router-view/>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

const user = useUserStore()
const router = useRouter()

onMounted(() => {
  switch (user.role) {
    case 'buyer':
      if (user.isSelect) {
        if (user.isLogin) {
          router.push('/buyer/main')
        } else {
          router.push('/buyer/login')
        }
      } else {
        router.push('/')
      }
      break

    case 'seller':
      if (user.isSelect) {
        if (user.isLogin) {
          router.push('/seller/main')
        } else {
          router.push('/seller/login')
        }
      } else {
        router.push('/')
      }
      break

    case 'admin':
      if (user.isSelect) {
        if (user.isLogin) {
          router.push('/admin/main')
        } else {
          router.push('/admin/login')
        }
      } else {
        router.push('/')
      }
      break

    default:
      router.push('/')
  }
})
</script>

