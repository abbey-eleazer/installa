<script setup>
import { ref } from 'vue';

const showThankyou = ref(true)
function thanks(){
  showThankyou.value = false
}
</script>

<template>
  <section v-if="showThankyou" class="mx-8 md:mx-24 xl:mx-32 md:pt-20 pb-24">
    <h3 class="font-bold text-xl md:text-2xl lg:3xl mb-5 text-center">Apply for Project Manager</h3>
    <form>
      <div class="w-full mx-auto flex justify-center items-center gap-10 flex-wrap mt-10">
        <div class="w-full gap-8 flex flex-col md:flex-row md:gap-12">
          <input
            type="text"
            id="full-name"
            name="full-name"
            placeholder="full name*"
            class="flex-1 bg-lighterRed/30 border border-lightRed rounded-full p-2 text-sm text-lightRed w-full md:w-[50rem] outline-none"
          />
          <input
            type="text"
            id="location"
            name="location"
            placeholder="location*"
            class="flex-1 bg-lighterRed/30 border border-lightRed rounded-full p-2 text-sm text-lightRed w-full md:w-[50rem] outline-none"
          />
        </div>
        <div class="w-full gap-8 flex flex-col md:flex-row md:gap-12">
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email*"
            class="flex-1 bg-lighterRed/30 border border-lightRed rounded-full p-2 text-sm text-lightRed w-full md:w-[50rem] outline-none"
          />
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="phone*"
            class="flex-1 bg-lighterRed/30 border border-lightRed rounded-full p-2 text-sm text-lightRed w-full md:w-[50rem] outline-none"
          />
        </div>
      </div>
      <div>
        <div class="flex items-center gap-4 mt-12 mb-8">
          <img src="../assets/upload.png" alt="icon" class="w-7" />
          <p class="text-lightRed text-md">Upload your resume</p>
        </div>
        <textarea
          name="cover-letter"
          id="cover-letter"
          cols="30"
          rows="10"
          placeholder="Cover letter (optional)"
          class="bg-lighterRed/30 border border-lightRed rounded-lg p-2 text-sm text-lightRed w-full outline-none"
        ></textarea>
      </div>
      <div class="w-full flex justify-end">
        <router-link @click="thanks"
          to="/careers/apply"
          class="w-44 h-10 mt-10 md:mt-24 font-medium text-red text-md border border-red rounded-full flex items-center justify-center bg-[#fff] hover:bg-red hover:text-[#fff]"
        >
          Send
        </router-link>
      </div>
    </form>
  </section>

  <section>
    <div v-if="!showThankyou" class="mx-8 pt-52 pb-52 md:mx-24 2xl:mx-32 flex justify-center items-center text-center ">
      <h3 class="font-bold text-xl md:text-2xl lg:3xl mb-5">
        <span class="text-red">Thank you!</span> We will review your request and contact you in a short.
      </h3>
    </div>
  </section>
  
</template>
