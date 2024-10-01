<script setup>
// import { defineProps } from 'vue';

// defineProps({
//   flexRev:{
//     type: String,
//     default: 'md:flex-row-reverse',
//   }, 

// })
</script>

<template>
   <!-- <div :class="`md:${flexRev} flex  items-center md:gap-12 lg:gap-40 pt-32`">  -->
   <div class=" flex items-center md:gap-12 xl:gap-40 pt-32"> 
 
    
    <slot></slot>
  </div>
</template>