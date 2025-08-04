<template>
  <SellerPage v-if="user.isLogin" />
  <SellerLoginPage v-else />
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import SellerPage from './sellerPage.vue';
import SellerLoginPage from './sellerLoginPage.vue';

const user = useUserStore()
</script>
