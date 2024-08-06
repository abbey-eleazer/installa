<script setup>
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div
    class="bg-scroll w-full h-[100vh]"
    style="background-image: url(../src/assets/background-elements.png)"
  >
    <NavBar />
    <RouterView />
  </div>
</template>
