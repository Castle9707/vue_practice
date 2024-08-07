<script setup>
import { useNoteStore } from '../stores/NoteStores.js'
import { storeToRefs } from 'pinia'
const noteStore = useNoteStore()
const { pinnedNotes } = storeToRefs(noteStore)
const { markedPinned } = noteStore
</script>

<template>
  <router-link :to="{ name: 'add'}">
    <button class="btn btn-primary mt-4">新增</button>
    </router-link>
  
 <h3 class="my-4">重要事項</h3>
 <ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center" v-for="pinned in pinnedNotes">
    {{ pinned.title }}
    <div class="icon-group d-flex justify-content-between">
      <i class="fa-solid fa-thumbtack mx-1" @click="markedPinned(pinned.id)"></i>
      <i class="fa-solid fa-trash-can mx-1"></i>
    </div>
</li>
</ul>
<h3 class="my-4">所有列表</h3>
<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center" v-for="note in noteStore.notes">
    {{ note.title }}
    <div class="icon-group d-flex justify-content-between">
      <i class="fa-solid fa-thumbtack mx-1"  @click="markedPinned(note.id)"></i>
      <i class="fa-solid fa-trash-can mx-1"></i>
    </div>
  </li>
</ul>
</template>

<style scoped>

</style>
