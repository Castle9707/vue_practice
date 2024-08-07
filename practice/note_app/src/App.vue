<script setup>
import NavBar from './components/NavBar.vue';
import LeftBar from './components/LeftBar.vue';
</script>

<template>
  <NavBar />
    <div class="row">
      <div class="col-3"><div  class="mx-5"><LeftBar /></div></div>
      <div class="col-9"><router-view></router-view></div>
    </div> 
</template>

<style scoped>

</style>
