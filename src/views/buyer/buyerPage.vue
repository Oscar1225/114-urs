<template>
    <div class="d-flex flex-column vh-100 bg-info px-3 py-3">
    <!-- 🔹 頂部長方形卡片 with Icon -->
    <div class="bg-white rounded-3 shadow-sm border px-4 py-3 mb-3">
      <div class="d-flex align-items-center gap-2">
        <!-- 預留 logo，用 Element Plus icon -->
        <el-icon size="24"><Shop /></el-icon>
        <h5 class="mb-0 fw-bold">格外品媒合系統 - 買家</h5>
      </div>
    </div>


    <!-- 🔸 左右主內容 -->
    <div class="d-flex flex-grow-1 gap-3 h-100">
      <!-- 左側 -->
      <div class="bg-white rounded-3 shadow-sm border p-3" style="width: 260px; height: 100%;">
        <el-menu
          default-active="productlist"
          class="h-100"
          @select="handleSelect"
          active-text-color="#409EFF"
          style="border: none;"
        >
          <el-sub-menu index="product">
            <template #title>格外品資訊搜索 </template>
            <el-menu-item index="productsearch">商品搜尋</el-menu-item>
            <el-menu-item index="productlist">商品列表</el-menu-item>
            <el-menu-item index="productdetails">商品詳情</el-menu-item>
          </el-sub-menu>


          <el-sub-menu index="matching">
            <template #title>發起媒合申請 </template>
            <el-menu-item index="apply">申請單</el-menu-item>
          </el-sub-menu>


          <el-sub-menu index="recordmanagement">
            <template #title>媒合紀錄管理</template>
            <el-menu-item index="proposedstatus">已提出的媒合狀態</el-menu-item>
            <el-menu-item index="historicalrecords">媒合歷史紀錄</el-menu-item>
          </el-sub-menu>


          <el-sub-menu index="customerservice">
            <template #title>客服聯絡</template>
            <el-menu-item index="serviceform">客服表單</el-menu-item>
            <el-menu-item index="serviceemail">客服信箱</el-menu-item>
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
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'


import productsearch from "@/views/buyer/product/productsearch.vue"
import productlist from "@/views/buyer/product/productlist.vue"
import productdetails from "@/views/buyer/product/productdetails.vue"
import apply from "@/views/buyer/matching/apply.vue"
import proposedstatus from "@/views/buyer/record management/proposedstatus.vue"
import historicalrecords from "@/views/buyer/record management/historicalrecords.vue"
import serviceform from "@/views/buyer/customer service/serviceform.vue"
import serviceemail from "@/views/buyer/customer service/serviceemail.vue"
import buyerLogout from "@/views/buyer/buyerLogoutPage.vue"


const currentComponent = ref<any>(productlist) // 預設顯示商品列表


const user = useUserStore()
const router = useRouter()


const handleSelect = (key: string) => {
  if (key === 'productsearch') currentComponent.value = productsearch
  else if (key === 'productlist') currentComponent.value = productlist
  else if (key === 'productdetails') currentComponent.value = productdetails
  else if (key === 'apply') currentComponent.value = apply
  else if (key === 'proposedstatus') currentComponent.value = proposedstatus
  else if (key === 'historicalrecords') currentComponent.value = historicalrecords
  else if (key === 'serviceform') currentComponent.value = serviceform
  else if (key === 'serviceemail') currentComponent.value = serviceemail
  else if (key === 'logout') currentComponent.value = buyerLogout
}


function handleLogout() {
  user.logout()
  router.push('/') // 回首頁或登入頁
}
</script>