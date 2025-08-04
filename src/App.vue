<script setup lang="ts">
import { useUserStore } from './stores/user'
import RoleSelectPage from './views/roleSelectPage.vue'
import zhTw from 'element-plus/es/locale/lang/zh-tw'
import homePage from "@/views/homePage.vue"


const user = useUserStore()
</script>

<style>
  .logout-message {
  background-color: #ffe0e0 !important;  /* 淡紅背景 */
  color: #c0392b !important;             /* 深紅字體 */
  font-weight: bold;
}
</style>

<template>
  <el-config-provider :locale="zhTw">
    <homePage v-if="user.isSelect" />
    <RoleSelectPage v-else />
  </el-config-provider>
</template>

