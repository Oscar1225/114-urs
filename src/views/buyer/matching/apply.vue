<template>
  <div>
    <h4>媒合申請單</h4>
    <el-form :model="form" ref="formRef" label-position="top" label-width="100px">


      <!-- 格外品全名 -->
      <el-form-item label="格外品全名" prop="extraProductFullName">
        <el-input v-model="form.extraProductFullName" />
      </el-form-item>


      <!-- 賣家帳號名稱 -->
      <el-form-item label="賣家帳號名稱" prop="sellerAccount">
        <el-input v-model="form.sellerAccount" />
      </el-form-item>


      <!-- 有效期限 -->
      <el-form-item label="申請有效期限" prop="validUntil">
        <el-date-picker
          v-model="form.validUntil"
          type="date"
          placeholder="選擇有效期限"
          format="YYYY-MM-DD"
        />
      </el-form-item>


      <!-- 提交按鈕 -->
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交申請</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { ElForm } from 'element-plus'


const formRef = ref<InstanceType<typeof ElForm> | null>(null)


const form = ref({
  extraProductFullName: '',
  sellerAccount: '',
  validUntil: ''
})


function submitForm() {
  formRef.value?.validate((valid) => {
    if (valid) {
      console.log('提交的表單數據:', form.value)
    } else {
      console.log('表單驗證失敗')
    }
  })
}
</script>