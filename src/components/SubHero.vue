<script setup>
// import { defineProps } from 'vue';

defineProps({
  flexRev:{
    type: String,
    default: 'flex-row-reverse',
  }

})
</script>

<template>
  <div :class="`${flexRev} flex items-center gap-40 pt-32`">
    
    <slot></slot>
  </div>
</template>