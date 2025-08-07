<template>
    <h4>客服表單</h4>
    <el-form :model="form" ref="formRef" label-position="top" label-width="100px">


      <!-- 填寫日期-->
        <el-form-item label="填寫日期" prop="date">
            <el-date-picker
            v-model="form.date"
            type="date"
            placeholder="選擇日期"
            format="YYYY-MM-DD"
            />
        </el-form-item>


      <!-- 帳號名稱 -->
      <el-form-item label="帳號名稱" prop="accountName">
        <el-input v-model="form.accountName" />
      </el-form-item>


      <!-- email -->
      <el-form-item label="Email" prop="email">
        <el-input v-model="form.email" />
      </el-form-item>


      <!-- 您的問題 -->
      <el-form-item label="您的問題" prop="question">
        <el-input type="textarea" v-model="form.question" />
      </el-form-item>


      <!-- 提交按鈕 -->
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交表單</el-button>
      </el-form-item>
    </el-form>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { ElForm } from 'element-plus'


const formRef = ref<InstanceType<typeof ElForm> | null>(null)


const form = ref({
  date: '',
  accountName: '',
  email: '',
  question: ''
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

