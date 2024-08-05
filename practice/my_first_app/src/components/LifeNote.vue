<script setup>
import { onUnmounted } from 'vue';
import { onUpdated } from 'vue';
import { ref } from 'vue'
const note = ref('')
const text = ref('請輸入')
const textStyle = ref({color:'tomato', fontSize: '20px', fontWeight: 'bold'})
const textTrue = ref('')
const fruits = reactive(['蘋果','香蕉','芒果','草莓'])

onUnmounted(()=>{
  updateLocalStorage()
  console.log('onUnmounted')
})
onUpdated(()=>{
  if(note.value == 'font30'){
    textTrue.value = true
  } else {
    textTrue.value = false
  }
  updateLocalStorage()
  console.log('筆記應用已更新')
})

const updateLocalStorage = ()=>{
  localStorage.setItem('userNote', note.value)
}

function showFruit(item,index){
  alert('您選擇的水果是' + item)
  console.log('index', index)
}

function showMsg(msg){
  alert(msg)
}
</script>

<template>
  <h1>我的Note</h1>
  <input v-model="note" type="text" :placeholder="text" @change="showMsg(note)" >
  <p v-bind:style="textStyle">您的筆記: {{note}}</p>
  <p :class="note">{{ 3+10 }}</p>
  <img v-show="note.length >= 10" src="../assets/images/cover123.jpg" >
  <p v-if="textTrue == true">這是font30</p>
  <p v-else>這是font20</p>
  <ul>
    <li v-for="(item, index) in fruits" @click="showFruit(item, index)">{{ index + 1 }} . {{ item }}</li>
  </ul>
</template>

<style scoped>
.font20{
  color: green;
  font-size: 20px;  
}
.font30{
  color: aqua;
  font-size: 30px;  
}
.font40{
  color:blue;
  font-size: 40px;  
}
li {
  list-style: none;
}
</style>