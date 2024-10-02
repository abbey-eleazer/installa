<script setup>
import { ref } from 'vue';
import CardTwo from './SubHero.vue';

const showThankyou = ref(true)

function thanks(){
  showThankyou.value = false
}
</script>

<template>
  <header class="mx-8 md:mx-24 lg:mx-32">
    <h1 class="text-3xl lg:text-6xl font-bold text-center text-darkgray mb-2 mt-12">Contact Us</h1>
   
    <CardTwo class="-mt-8 flex-col lg:flex-row">
      <img
        src="../assets//contact.png"
        alt="welcome image"
        class="w-[30rem] md:w-[30rem] 2xl:w-[50rem]"
      />
      <div>
        <h3 class="font-bold text-xl md:text-2xl lg:text-3xl mb-5">
          Ready to take the next step and work together? Let’s do it!
        </h3>
        <p class="text-md mb-5">
          The digital marketing environment is highly dynamic and competitive. Gain a competitive
          edge and advance your online presence by making use of our strategic business planning,
          innovative technology, and in-depth analysis.
        </p>
        <p class="text-md">
          Do not hesitate to reach out to us by filling out the contact form below. Out Team will
          get in touch with you shortly, so we can further discuss your current and further business
          strategies.
        </p>
        <div class="w-full flex justify-end">
          <img
            src="../assets/zigzag.png"
            alt="zigzag"
            class="ml-36 w-56 h-8 my-3 lg:w-[29rem] md:h-12 md:my-8"
          />
        </div>
      </div>
    </CardTwo>
    <div class="mx-auto pt-10">
      <img
        src="../assets/down-arrow 2.png"
        alt="arrow down"
        class="mx-auto w-[5rem] md:w-[6rem] 2xl:w-[8rem]"
      />
    </div>
  </header>

 <main>
  <section v-if="showThankyou" class="mx-8 md:mx-24 xl:mx-32 md:pt-20 pb-24">
    <h3 class="font-bold text-xl md:text-2xl lg:3xl mb- text-center">Let's get in touch.</h3>
    <form>
      <div class="w-full mx-auto flex justify-center items-center gap-10 flex-wrap mt-10">
        <div class="w-full gap-8 flex flex-col md:flex-row md:gap-12">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name*"
            class="flex-1 bg-lighterRed/30 border border-lightRed rounded-full p-2 text-sm text-lightRed w-full md:w-[50rem] outline-none"
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email*"
            class="flex-1 bg-lighterRed/30 border border-lightRed rounded-full p-2 text-sm text-lightRed w-full md:w-[50rem] outline-none"
          />
        </div>
        <div class="w-full gap-8 flex flex-col md:flex-row md:gap-12">
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject*"
            class="flex-1 bg-lighterRed/30 border border-lightRed rounded-full p-2 text-sm text-lightRed w-full md:w-[50rem] outline-none"
          />
         
        </div>
      </div>
      <div>
       
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Your message*"
          class="bg-lighterRed/30 border border-lightRed rounded-lg p-2 text-sm text-lightRed w-full outline-none mt-10"
        ></textarea>
      </div>
      <div class="w-full flex justify-start">
        <router-link @click="thanks"
          to="/thankyou"
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
 </main>
</template>
