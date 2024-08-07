<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
<ul>
  <li><router-link to="/">首頁</router-link></li>
  <li><router-link to="/pinia">Pinia</router-link></li>
  <li><router-link to="/register">表單驗證</router-link></li>
  <li><router-link to="/data_send">父子組件傳值</router-link></li>
  <li><router-link to="/axios_demo">AxiosDemo</router-link></li>
</ul>
<div class="container">
  <router-view></router-view>
</div>
</template>

<style scoped>
.container{
  margin-top: 30px;
  width: 500px;
  height: 600px;
}
</style>