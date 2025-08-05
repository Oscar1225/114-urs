<template>
  <div>
    <h2>格外品資訊搜尋</h2>


    <!-- 搜尋列 -->
    <el-input
      v-model="searchKeyword"
      placeholder="請輸入商品名稱"
      class="mb-3"
      clearable
    />


    <!-- 價格篩選 -->
    <el-select v-model="priceOrder" placeholder="價格排序" class="mb-3" clearable>
      <el-option label="價格由低至高" value="asc" />
      <el-option label="價格由高至低" value="desc" />
    </el-select>


    <!-- 類別篩選 -->
    <el-radio-group v-model="categoryFilter" class="mb-3">
      <el-radio-button label="全部" />
      <el-radio-button label="蔬菜" />
      <el-radio-button label="水果" />
      <el-radio-button label="果醬" />
      <el-radio-button label="糕餅" />
      <el-radio-button label="果乾" />
      <el-radio-button label="禮盒" />
    </el-radio-group>


    <!-- 搜尋結果 -->
    <el-table :data="filteredData" style="width: 100%">
      <el-table-column prop="name" label="商品名稱" />
      <el-table-column prop="category" label="類別" />
      <el-table-column prop="price" label="價格" />
    </el-table>
  </div>
</template>


<script setup>
import { ref, computed } from 'vue'


// 模擬商品資料
const products = ref([
  { name: '番茄', category: '蔬菜', price: 30 },
  { name: '蘋果', category: '水果', price: 50 },
  { name: '鳳梨酥', category: '糕餅', price: 70 },
  { name: '青椒', category: '蔬菜', price: 40 },
  { name: '香蕉', category: '水果', price: 20 },
  { name: '水蜜桃', category: '水果', price: 20 },
  { name: '芭樂', category: '水果', price: 20 },
  { name: '橘子', category: '水果', price: 20 },
  { name: '水梨', category: '水果', price: 20 },
  { name: '草莓果醬', category: '果醬', price: 100 },
  { name: '有機蘋果', category: '水果', price: 80 },
  { name: '手工果醬', category: '果醬', price: 150 },
  { name: '新春旺來禮盒', category: '禮盒', price: 288 },
  { name: '手工餅乾', category: '糕餅', price: 120 },
  { name: '白蘿蔔', category: '蔬菜', price: 35 },
  { name: '有機菠菜', category: '蔬菜', price: 45 },
  { name: '蜜餞柑橘', category: '果乾', price: 55 },
  { name: '蜜餞芒果', category: '果乾', price: 65 },
  { name: '手工芒果蛋糕', category: '糕餅', price: 150 },
  { name: '手工草莓蛋糕', category: '糕餅', price: 150 },
  { name: '有機紅蘿蔔', category: '蔬菜', price: 30 },
  { name: '有機高麗菜', category: '蔬菜', price: 25 },
  { name: '有機小黃瓜', category: '蔬菜', price: 35 },
  { name: '有機青江菜', category: '蔬菜', price: 30 },
  { name: '有機西紅柿', category: '蔬菜', price: 45 },
  { name: '有機番茄', category: '蔬菜', price: 40 },
  { name: '有機黃瓜', category: '蔬菜', price: 30 },
  { name: '蜜餞水果', category: '果乾', price: 60 },
  { name: '葡萄乾', category: '果乾', price: 45 },
  { name: '草莓乾', category: '果乾', price: 90 },
  { name: '芒果乾', category: '果乾', price: 90 },
  { name: '水果禮盒', category: '禮盒', price: 200 }
])


const searchKeyword = ref('')
const priceOrder = ref(null) // 'asc' 或 'desc'
const categoryFilter = ref('全部')


// 綜合篩選邏輯（交集篩選）
const filteredData = computed(() => {
  let result = products.value


  // 關鍵字搜尋
  if (searchKeyword.value) {
    result = result.filter(p =>
      p.name.toLowerCase().includes(searchKeyword.value.toLowerCase())
    )
  }


  // 類別分類
  if (categoryFilter.value !== '全部') {
    result = result.filter(p => p.category === categoryFilter.value)
  }


  // 價格排序
  if (priceOrder.value === 'asc') {
    result = result.sort((a, b) => a.price - b.price)
  } else if (priceOrder.value === 'desc') {
    result = result.sort((a, b) => b.price - a.price)
  }


  return result
})
</script>


<style scoped>
.mb-3 {
  margin-bottom: 12px;
}
</style>



