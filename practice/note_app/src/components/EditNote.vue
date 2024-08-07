<script setup>
import { useNoteStore } from '../stores/NoteStores.js'
const noteStore = useNoteStore()
</script>

<template>
  <div class="mb-3">
  <label for="title" class="form-label">標題</label>
  <input type="text" class="form-control" id="title" placeholder="請輸入標題">
</div>
<div class="mb-3">
  <label for="content" class="form-label">內容</label>
  <textarea class="form-control" id="content" rows="3" placeholder="請輸入so4bj/6
  "></textarea>
</div>
</template>

<style scoped>

</style>
