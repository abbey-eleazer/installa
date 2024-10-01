<script setup>
import Card from './Card.vue'
</script>

<template>
  <section class="mx-8 md:mx-auto lg:mx-32 mt-60">
    <div
      class="flex flex-col gap-12 md:flex-row md:flex-wrap justify-center xl:w-[70rem] lg:mx-auto lg:gap-24"
    >
      <!-- <div class=" flex flex-col md:flex-row md:flex-wrap justify-between md:justify-center 2xl:w-[80rem] lg:mx-auto gap-8 lg:gap-24"> -->
      <Card class="">
        <img
          src="../assets/concept 1.png"
          alt="icon"
          class="w-[3rem] md:w-[5rem] mx-auto pt-8 pb-8"
        />
        <h3 class="font-bold text-xl md:text-2xl lg:text-3xl text-center mb-2">Clear Concepts</h3>
        <p class="text-md lg:text-lg">
          In terms of our strategic business planning, we possess a clear view on how to structure
          our marketing campaigns, as we heavily rely on in-depth research and analysis.
        </p>
      </Card>
      <Card class="">
        <img
          src="../assets/creativity 1.png"
          alt="icon"
          class="w-[3rem] md:w-[5rem] mx-auto pt-8 pb-8"
        />
        <h3 class="font-bold text-xl md:text-2xl lg:text-3xl text-center mb-2">
          Innovative Technology
        </h3>
        <p class="text-md lg:text-lg">
          We utilize a unique approach when it comes to keyword research, grouping, as well as
          discovery. We conduct keyword analysis, considering the intent of searchers and use that
          to your advantage.
        </p>
      </Card>
      <Card class="">
        <img
          src="../assets/monitor (1) 1.png"
          alt="icon"
          class="w-[3rem] md:w-[5rem] mx-auto pt-8 pb-8"
        />
        <h3 class="font-bold text-xl md:text-2xl lg:text-3xl text-center mb-2">
          In-depth Analysis
        </h3>
        <p class="text-md lg:text-lg">
          We perform extensive research in order to improve or adjust targeting techniques, making
          sure we translate those efforts throughout all advertising platforms your business makes
          use of.
        </p>
      </Card>
      <Card class="">
        <img
          src="../assets/management 1.png"
          alt="icon"
          class="w-[3rem] md:w-[5rem] mx-auto pt-8 pb-8"
        />
        <h3 class="font-bold text-xl md:text-2xl lg:text-3xl text-center mb-2">
          Performance Enhancement
        </h3>
        <p class="text-md lg:text-lg">
          We help you breakdown your campaign initiatives and narrow down your targeting towards the
          people who actively clicking on your ads – we provide filtering by gender, age, placement,
          and device.
        </p>
      </Card>
    </div>

    <div class="mt-64 w-full xl:w-[57rem] mx-auto">
      <div class=" text-center">
        <h2 class="text-2xl md:text-3xl lg:text-5xl font-bold text-darkgray mb-5 ">
          Get Your Campaign Performance on Another Level!
        </h2>
        <p class="text-md md:text-lg">
          Further develop your successful online presence and scale up your business.
        </p>
        <router-link
          to="/contact-us"
          class="w-44 h-10 mt-10 lg:mt-24 font-medium text-red text-md border border-red rounded-full flex items-center justify-center bg-[#fff] hover:bg-red hover:text-[#fff] mx-auto"
        >
          Get in touch
        </router-link>
      </div>
      <img
        src="../assets/Installa_section5 2.png"
        alt="image"
        class="w-[30rem] md:w-[35rem] 2xl:w-[50rem] mx-auto"
      />
    </div>
  </section>
</template>
