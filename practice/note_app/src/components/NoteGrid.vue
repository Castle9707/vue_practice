<script setup>
import { useNoteStore } from '../stores/NoteStores.js'
const noteStore = useNoteStore()
</script>

<template>
  <h1 class="my-3" >筆記列表</h1>
  <div class="row">
    <div class="card col-3 m-2" style="width: 18rem;" v-for="note in noteStore.notes">
      <div class="card-body">
        <h5 class="card-title">{{ note.title }}</h5>
        <p class="card-text">{{ note.content }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 0.8em;
  transform: all 0.3s;
}
.card:hover{
  background-color: rgb(245, 228, 228);
  box-shadow: 0px 2px 8px rgba(0,0,0,0.1);
  cursor: pointer;
}
</style>
