<script setup>
import { ref } from 'vue'
const name = ref('')
const mobile = ref('')
</script>

<template>
<form>
  <div class="mb-3">
    <label for="name" class="form-label">姓名</label>
    <input type="text" class="form-control" id="name" aria-describedby="nameHelp">
    <div id="nameHelp" class="form-text">請輸入姓名</div>
  </div>
  <div class="mb-3">
    <label for="mobile" class="form-label">電話</label>
    <input type="text" class="form-control" id="mobile" aria-describedby="mobileHelp">
    <div id="mobileHelp" class="form-text">請輸入電話</div>
  </div>

  <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
  <label class="form-check-label" for="flexRadioDefault2">
    Default checked radio
  </label>
</div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</template>

<style scoped>
</style>