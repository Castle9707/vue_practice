<script setup>
import { ref, reactive } from 'vue'

const formValue = reactive({
  name: '',
  mobile: '',
  birthday: '',
  gender: '',
})

const validation = reactive({
  name: true,
  mobile: true,
  birthday: true,
  gender: true,
})

const isShow = ref(false)
const handleSubmit = () => {
  validation.name = formValue.name.length >= 2
  validation.mobile = formValue.mobile.length === 10
  validation.birthday = formValue.birthday !== ''
  validation.gender = formValue.gender !== ''

  if (validation.name && validation.mobile && validation.birthday && validation.gender) {
    isShow.value = true
    
  } else {
    isShow.value = false
  }
}
</script>

<template>
  <form id="regis-form" @submit.prevent="handleSubmit">
    <div>
      <label for="name">姓名</label>
      <input type="text" id="name" name="name" v-model="formValue.name">
      <div class="vali-text" v-if="!validation.name">請輸入姓名</div>
    </div>
    <div>
      <label for="mobile">電話</label>
      <input type="text" id="mobile" name="mobile" v-model="formValue.mobile">
      <div class="vali-text" v-if="!validation.mobile">請輸入電話</div>
    </div>
    <div>
      <label for="birthday">生日</label>
      <input type="date" id="birthday" name="birthday" v-model="formValue.birthday">
      <div class="vali-text" v-if="!validation.birthday">請選擇生日</div>
    </div>
    <div>
      <label>性別</label>
      <input type="radio" id="gender-male" name="gender" value="男" v-model="formValue.gender">
      <label for="gender-male">生理男</label>
      <input type="radio" id="gender-female" name="gender" value="女" v-model="formValue.gender">
      <label for="gender-female">生理女</label>
      <div class="vali-text" v-if="!validation.gender">請選擇性別</div>
    </div>
    <button type="submit">送出</button>
  </form>

  <!-- 顯示表單結果 -->
  <div v-show="isShow">
    <div>姓名:{{ formValue.name }}</div>
    <div>電話:{{ formValue.mobile }}</div>
    <div>生日:{{ formValue.birthday }}</div>
    <div>性別:{{ formValue.gender }}</div>
  </div>
</template>

<style scoped>
.vali-text{
  font-size: 16px;
  color: red;
}
</style>