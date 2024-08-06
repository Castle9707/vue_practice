<script setup>
// import Register from './components/Register.vue'
import DataSend from './components/DataSend.vue'
import { ref } from 'vue'
const appMsg = ref('這是來自APP的訊息')
const money = ref(50000)
let receiveMsg = ref('預設訊息')
function updateMsg(newMsg){
  receiveMsg.value = newMsg
}
</script>

<template>
<!-- <Register /> -->
<p>子組件傳來的訊息</p>
<p>{{receiveMsg}}</p>
 <DataSend :msg="appMsg" :money="money" @update:msg="updateMsg" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>