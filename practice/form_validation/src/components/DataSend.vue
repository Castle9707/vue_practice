<script setup>
import { ref } from 'vue'
const props = defineProps({
  msg: String,
  money: Number
})
let showMsg = ref(props.msg)
let salary = ref(props.money)
const emit = defineEmits(['update:msg'])
const sendMsg = () => {
  emit('update:msg', showMsg)
}
</script>

<template>
  <h2>{{ showMsg }}</h2>
  <h2>{{ salary }}</h2>
  <input type="text" v-model="showMsg">
  <button type="button" @click="sendMsg">送訊息到父元件</button>
</template>

<style scoped>
h2{
  padding: 10px;
  border: 1px solid blueviolet;
}
</style>