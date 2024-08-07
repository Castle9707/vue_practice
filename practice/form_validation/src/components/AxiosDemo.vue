<script setup>
import axios from 'axios'
import {ref, onMounted} from 'vue'
const posts = ref([])
onMounted(async()=>{
try{
  // 定義要提交的資料
  const postData = {
    title: 'Foooo',
    body: 'bar',
    userId: 1,
  }
// 發送POST請求
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts'
  axios.post(apiUrl, postData)
    .then((response) => {
        console.log('請求成功:', response.data);
        posts.value.push(response.data)
    })
    .catch((error) => {
        console.error('請求失敗:', error);
    });
  // Get
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  posts.value = response.data
}catch(error){
  console.error('請求失敗:', error)
}

})
</script>

<template>
<h2>AxiosDemo</h2>
<!-- 
  <ul>
  <li v-for="post in posts" :key="post.id" >{{ post.id }}.  {{ post.title }}</li>
</ul>
-->

<table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">userId</th>
      <th scope="col">id</th>
      <th scope="col">title</th>
      <th scope="col">body</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="post in posts" :key="post.id">
      <th scope="row">{{ post.userId }}</th>
      <td>{{ post.id }}</td>
      <td>{{ post.title }}</td>
      <td>{{ post.body }}</td>
    </tr>
  </tbody>
</table>
</template>

<style scoped>
li {
  list-style: none;
}
</style>