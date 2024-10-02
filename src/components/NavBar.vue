<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="w-full h-16 lg:w-full lg:h-18 bg-[#fff] border-b border-lighterRed">
    <div class="bg-white flex items-center justify-between p-3 mx-2 md:p-2 lg:mx-32 lg:p-2">
      <div>
        <router-link to="/" class="text-md ">
          <img class="w-24 lg:w-32 lg:h-12" src="../assets/logo-color.jpg" alt="installa logo">
        </router-link>
        
      </div>
      <div>
        <ul class="hidden md:flex items-center md:gap-10 lg:gap-18">
          <router-link active-class="text-red" to="/" class="text-md ">Home</router-link>
          <router-link active-class="text-red" to="/about-us" class="text-md ">About Us</router-link>
          <router-link active-class="text-red" to="/services" class="text-md ">Services</router-link>
          <router-link active-class="text-red" to="/careers" class="text-md ">Careers</router-link>
      
          <router-link to="/contact-us" class="w-44 h-10 font-medium text-md border border-red rounded-full flex items-center text-red justify-center bg-[#fff] hover:bg-red hover:text-[#fff]" >Contact Us</router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>