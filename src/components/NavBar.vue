<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

import 'primeicons/primeicons.css'


const isOpen = ref(false)

const close = () => {
  return (isOpen.value = false)
}
</script>

<template>
  <nav class="w-full h-16 lg:w-full lg:h-18 bg-[#fff] border-b border-lighterRed">
    <div class="bg-white flex items-center justify-between p-3 mx-2 md:p-2 lg:mx-32 lg:p-2">
      <div>
        <router-link to="/" class="text-md">
          <img class="w-24 lg:w-32 lg:h-12" src="../assets/logo-color.jpg" alt="installa logo" />
        </router-link>
      </div>
      <div>
        <ul class="hidden md:flex items-center md:gap-10 lg:gap-18">
          <router-link active-class="text-red" to="/" class="text-md">Home</router-link>
          <router-link active-class="text-red" to="/about-us" class="text-md">About Us</router-link>
          <router-link active-class="text-red" to="/services" class="text-md">Services</router-link>
          <router-link active-class="text-red" to="/careers" class="text-md">Careers</router-link>

          <router-link
            to="/contact-us"
            class="w-44 h-10 font-medium text-md border border-red rounded-full flex items-center text-red justify-center bg-[#fff] hover:bg-red hover:text-[#fff]"
            >Contact Us</router-link
          >
        </ul>
      </div>

      <div class="md:hidden">
        <i
          :class="isOpen ? 'pi pi-times' : 'pi pi-bars'"
          style="font-size: 2rem;"
          class=" cursor-pointer "
          @click="isOpen = !isOpen"
          
        ></i>
      </div>
    </div>
  </nav>
  <div v-if="isOpen" class="absolute z-[5]">
    <div class="bg-[#fff] w-[20rem] h-[30rem] flex justify-center items-center">
      <ul class="pt-12 flex flex-col items-center justify-center text-xl gap-5 tracking-wide pl-4">
        <li class="hover:text-red text-md">
          <router-link @click="close" to="/">Home</router-link>
        </li>
        <li class="hover:text-red text-md">
          <router-link @click="close" to="/about-us">About Us</router-link>
        </li>
        <li class="hover:text-red text-md">
          <router-link @click="close" to="/services">Services</router-link>
        </li>
        <li class="hover:text-red text-md">
          <router-link @click="close" to="/careers">Careers</router-link>
        </li>
        <li class="hover:text-red text-md">
          <router-link
            @click="close"
            to="/contact-us"
            class="w-44 h-10 font-medium text-md border border-red rounded-full flex items-center text-red justify-center bg-[#fff] hover:bg-red hover:text-[#fff]"
            >Contact Us</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>
