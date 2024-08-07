<script setup>
import { ref } from 'vue'
import { useNoteStore } from '../stores/NoteStores.js'
import { storeToRefs } from 'pinia'

const noteStore = useNoteStore()
const newNoteTitle = ref('')
const newNoteContent = ref('筆記內容...')
const { notes } = storeToRefs(noteStore)
const { addNote } = noteStore

const clearPlaceholder = () =>{
  document.querySelector('#title').placeholder = ''
}
const clearTextArea = () => {
  newNoteContent.value = ''
}
</script>

<template>
  <div class="container">
    <form @submit.prevent="addNote(newNoteTitle, newNoteContent)">
      <div class="mt-3 mb-3">
        <label for="title" class="form-label">標題</label>
        <input type="text" class="form-control" id="title" v-model="newNoteTitle" placeholder="請輸入標題" @fucus="clearPlaceholder">
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">內容</label>
        <textarea class="form-control" id="content" v-model="newNoteContent" rows="3" placeholder="請輸入內容
        "></textarea>
      </div>
      <button class="btn btn-outline-success">送出</button>
      </form>
  </div>
</template>

<style scoped>

</style>
