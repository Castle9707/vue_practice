<script setup>
import { ref } from 'vue'
const boxColor = ref('initial')
const msg = ref('')

const changeColor = (color) =>{
  boxColor.value = color
}
const showMsg = (e) => {
  msg.value = '你按到enter啦的哈哈哈'
  alert(msg.value)
}
</script>

<template>
<div id="box" :style="{ backgroundColor: boxColor }"></div>
  <div class="container">
  <button @click.stop="changeColor('red')">Red</button>
  <button @click.prevent="changeColor('green')">Green</button>
  <button @click.capture="changeColor('yellow')">Yellow</button>
  <button @click.self="changeColor('tomato')">Tomato</button>
  <button @click.middle="changeColor('orange')">按滑鼠滾輪變成Orange</button>
  <button @click.once="changeColor('purple')">Purple只能變一次</button>
  <button @wheel.passive="changeColor('pink')">Pink</button>
  <input @keydown.enter="showMsg(e)" >
</div>
</template>

<style scoped>
#box{
  margin-bottom: 20px;
  width: 200px;
  height: 200px;
}

button{
  color: aliceblue;
  background-color: rgb(92, 168, 234);
  margin-right: 16px;
}
</style>