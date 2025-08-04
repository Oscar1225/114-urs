<template>
  <div class="d-flex flex-column vh-100 bg-info px-3 py-3">
    <!-- 🔹 頂部長方形卡片 with Icon -->
    <div class="bg-white rounded-3 shadow-sm border px-4 py-3 mb-3">
      <div class="d-flex align-items-center gap-2">
        <!-- 預留 logo，用 Element Plus icon -->
        <el-icon size="24"><Shop /></el-icon>
        <h5 class="mb-0 fw-bold">格外品媒合系統 - 賣家</h5>
      </div>
    </div>

    <!-- 🔸 左右主內容 -->
    <div class="d-flex flex-grow-1 gap-3 h-100">
      <!-- 左側 -->
      <div class="bg-white rounded-3 shadow-sm border p-3" style="width: 260px; height: 100%;">
        <el-menu
          default-active="sellerproduct"
          class="h-100"
          @select="handleSelect"
          active-text-color="#409EFF"
          style="border: none;"
        >
          <el-sub-menu index="goods">
            <template #title>格外品管理</template>
            <el-menu-item index="sellerproduct">商品管理</el-menu-item>
            <el-menu-item index="status">商品狀態</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="order">
            <template #title>訂單管理</template>
            <el-menu-item index="neworder">新訂單</el-menu-item>
            <el-menu-item index="Orderhistory">訂單紀錄</el-menu-item>
          </el-sub-menu>

          <el-menu-item index="logout">登出</el-menu-item>
        </el-menu>
      </div>

      <!-- 右側 -->
      <div class="bg-white rounded-3 shadow-sm border p-4 flex-grow-1 h-100 overflow-auto">
        <component :is="currentComponent" />
      </div>
    </div>
  </div>
</template>



<script setup lang="ts">
import { ref } from 'vue'
import { Shop } from '@element-plus/icons-vue' // ✅ 使用 Shop 圖示當 Logo
import SellerLogout from "@/views/seller/Product Management/sellerlogout.vue"
import Status from "@/views/seller/Product Management/status.vue"
import SellerProduct from "@/views/seller/Product Management/sellerproduct.vue"
import Neworder from './order/neworder.vue'
import Orderhistory from './order/Orderhistory.vue'

const currentComponent = ref(SellerProduct)

const handleSelect = (key: string) => {
  if (key === 'logout') currentComponent.value = SellerLogout
  else if (key === 'status') currentComponent.value = Status
  else if (key === 'sellerproduct') currentComponent.value = SellerProduct
  else if (key === 'neworder') currentComponent.value = Neworder
  else if (key === 'Orderhistory') currentComponent.value = Orderhistory
}
</script>