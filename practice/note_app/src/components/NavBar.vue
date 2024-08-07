<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
     
      <a class="navbar-brand"><img class="logo-img" src="/note_logo.png" />My Note</a>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<style scoped>
.logo-img{
  width: 80px;
}
</style>
