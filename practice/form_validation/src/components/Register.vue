<script setup>
import { ref,reactive } from 'vue'
const name = ref('')
const mobile = ref('')
const birthday = ref('')
const warning = reactive([true,true,true])
</script>

<template>
<form>
  <div class="mb-3">
    <label for="name" class="form-label">姓名</label>
    <input type="text" v-model="name" class="form-control" id="name" aria-describedby="nameHelp">
    <div id="nameHelp" class="form-text text-danger" :class="{'d-none':warning[0]}">請輸入姓名</div>
  </div>
  <div class="mb-3">
    <label for="mobile" class="form-label">電話</label>
    <input type="text" v-model="mobile" class="form-control" id="mobile" aria-describedby="mobileHelp">
    <div id="mobileHelp" class="form-text text-danger" :class="{'d-none':warning[1]}">請輸入電話</div>
  </div>
  <div class="mb-3">
    <label for="birthday" class="form-label">生日</label>
    <input type="date" v-model="birthday" class="form-control" id="birthday" aria-describedby="birthdayHelp">
    <div id="birthdayHelp" class="form-text text-danger" :class="{'d-none':warning[2]}">請輸入生日</div>
  </div>

  <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
    男
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
  <label class="form-check-label" for="flexRadioDefault2">
    女
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
.text-danger{
  color: red;
}
</style>