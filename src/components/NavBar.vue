<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="w-full h-20 bg-white  border-b border-[#f8cbce]">
    <div class="flex items-center justify-between p-5 mx-32">
      <div>
        <img class="w-32 h-12" src="../assets/logo-color.jpg" alt="installa logo">
      </div>
      <div>
        <ul class="flex items-center gap-16">
          <router-link to="/" class="text-md ">Home</router-link>
          <li>About Us</li>
          <li>Services</li>
          <li>Careers</li>
          <router-link to="/contact-us" class="w-44 h-10 font-medium text-md border border-[#fe4e5a] rounded-full flex items-center justify-center hover:bg-[#fe4e5a] hover:text-white" >Contact Us</router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>