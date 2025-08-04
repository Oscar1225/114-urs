<template>
  <adminPage v-if="user.isLogin" />
  <adminLoginPage v-else />
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import adminLoginPage from './adminLoginPage.vue';
import adminPage from './adminbPage.vue';

const user = useUserStore()
</script>
