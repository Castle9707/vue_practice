<script setup>
import { onBeforeMount } from 'vue';
import { onMounted } from 'vue';
import {ref} from 'vue'
const text = ref('click me')
function handleclick(){
  alert('button clicked!')
}
onBeforeMount(()=>{
  alert('啟動onMounted')
})
onMounted(()=>{
  console.log('已載入元件')
})
</script>

<template>
  <button id="show" @click="handleclick">{{ text }}</button>  
</template>

<style scoped>
#show{
  background-color: tomato;
  color: white;
}
</style>