import { createRouter, createWebHistory } from 'vue-router'
import buyerLoginPage from '@/views/buyer/buyerLoginPage.vue'
import BuyermainPage from '@/views/buyer/buyermainPage.vue'
import SellerLoginPage from '@/views/seller/sellerLoginPage.vue'
import SellermainPage from '@/views/seller/sellermainPage.vue'
import RoleSelectPage from '@/views/roleSelectPage.vue'
import AdminLoginPage from '@/views/admin/adminLoginPage.vue'
import AdminMainPage from '@/views/admin/AdminMainPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  //身分選擇
    {path: '/',name: 'roleSelectPage', component:RoleSelectPage},
  //買家
    {path: '/buyer/login',name: 'BuyerLogin', component:buyerLoginPage},
    {path: '/buyer/main',name: 'Buyermain', component:BuyermainPage},
  //賣家
    {path: '/seller/login',name: 'SellerLogin', component:SellerLoginPage},
    {path: '/seller/main',name: 'Sellermain', component:SellermainPage},
  //管理員
    {path: '/admin/login',name: 'AdminLogin', component:AdminLoginPage},
    {path: '/admin/main',name: 'Adminmain', component:AdminMainPage},
  ],
})

export default router
