<script setup>
import {ref} from 'vue'
const text = ref('click me')
function handleclick(){
  alert('button clicked!')
}
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