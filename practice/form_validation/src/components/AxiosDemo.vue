<script setup>
import axios from 'axios'
import {ref, onMounted} from 'vue'
const posts = ref([])
onMounted(async()=>{
try{
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  posts.value = response.data
  console.log(posts.value)
}catch(error){
  console.error('請求失敗:', error)
}

})
</script>

<template>
<h2>AxiosDemo</h2>
<ul>
  <li v-for="post in posts" :key="post.id" >{{ post.id }}.  {{ post.title }}</li>
</ul>
</template>

<style scoped>
li {
  list-style: none;
}
</style>