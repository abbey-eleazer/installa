<script setup>
// import JobList from './JobList.vue';
import JobList from './JobList.vue';
</script>

<template>
  <header class="mx-8 md:mx-24 2xl:mx-32">
    <h1 class="text-3xl md:text-4xl xl:text-6xl font-bold text-center text-darkgray mb-2 mt-12">Careers</h1>
    <p class="text-xl text-center pb-12">Join our team at Installa</p>
    <img src="../assets/careers.png" alt="service image" class="mx-auto w-[30rem] md:w-[35rem] 2xl:w-[50rem]" />

    <div class="w-12 lg:w-36 mx-auto pt-10">
      <img src="../assets/down-arrow 2.png" alt="arrow down" class="mx-auto " />
    </div>
  </header>
  <!-- <JobList /> -->
  <JobList />
</template>
