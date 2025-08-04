import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { ElMessage } from 'element-plus'

export const useUserStore = defineStore('user', () => {
  const isSelect = ref(localStorage.getItem('isSelect') === 'true')
  const role = ref(localStorage.getItem('role') || '')
  const isLogin = ref(localStorage.getItem('isLogin') === 'true')

  function select(asRole: string) {
    isSelect.value = true
    role.value = asRole
  }

  function login() {
    isLogin.value = true
    ElMessage({
    message: '登入成功！',
    type: 'success',
    showClose: false,
    duration: 1000, // 顯示 2 秒後自動消失
    })
  }

  function logout() {
    isLogin.value = false
    isSelect.value = false
    role.value = ''
    ElMessage({
    message: '登出成功！',
    type: 'error',
    customClass: 'logout-message',
    showClose: false,
    duration: 1000, // 顯示 1秒後自動消失
    })
  }

  // 自動儲存到 localStorage（監聽 ref 變化）
  watch(isSelect, (val) => localStorage.setItem('isSelect', String(val)))
  watch(role, (val) => localStorage.setItem('role', val))
  watch(isLogin, (val) => localStorage.setItem('isLogin', String(val)))

  return { isSelect, role, isLogin, select, login, logout }
})
