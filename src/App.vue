<script setup>
import NavBar from './components/NavBar.vue'
import FooterNav from './components/FooterNav.vue';
</script>

<template>
  <div
    class="bg-scroll w-full h-full "
    style="background-image: url(../src/assets/background-elements.png)"
  >
    <NavBar />
    <RouterView />
    <FooterNav />
  </div>
</template>
