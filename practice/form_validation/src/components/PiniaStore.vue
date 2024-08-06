<script setup>
import { ref } from 'vue'
import { useCounterStore } from '../stores/stores'
import { storeToRefs } from 'pinia'
const todoStore = useCounterStore()
const { finishedTodos } = storeToRefs(todoStore)
const { addTodo, toggleTodo } = todoStore
const newItem = ref('')
</script>

<template>
  <h1>Pinia 狀態管理</h1>
  <div class="container">
    <input type="text" v-model="newItem" @keydown.enter="addTodo(newItem)" />
    <button type="button" @click="addTodo(newItem)" >新增待辦事項</button>
      <div class="form-check d-flex"  v-for="item in todoStore.todos">
        <input class="form-check-input box" type="checkbox" value="" id="flexCheckDefault" @click="toggleTodo(item.id)" />
        <label class="form-check-label" for="flexCheckDefault">{{item.text}}</label>
      </div>
    <hr />
    <h3>已完成清單</h3>
    <ul class="list">
      <li class="item2" v-for="finish_item in finishedTodos">{{ finish_item.text }}</li>
    </ul>
  </div>
</template>

<style scoped>
input {
  width:100%;
}
button{
  margin-top: 20px;
  margin-bottom: 20px;
}
h3{
  font-weight: 900;
}
.list{
  color:blue;
  font-weight: 600;
}
.item{
  color:rgb(3, 102, 69);
  list-style: none;
  display: flex;
}
.item2{
  color:rgb(55, 44, 90);
}
.box{
  width: 16px;
  margin-right: 12px;
}
</style>