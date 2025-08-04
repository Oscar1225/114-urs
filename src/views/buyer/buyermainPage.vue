<template>
  <buyerPage v-if="user.isLogin" />
  <buyerLoginPage v-else />
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import buyerLoginPage from "@/views/buyer/buyerLoginPage.vue"
import buyerPage from "@/views/buyer/buyerPage.vue"

const user = useUserStore()
</script>
