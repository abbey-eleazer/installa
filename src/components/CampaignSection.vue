<script setup>
import Card from './Card.vue';
</script>


<template>
  <section class="mx-32 mt-60">
  <div class=" flex flex-wrap justify-between gap-24">
    <Card class="w-[47rem] h-[21rem]">
        <img src="../assets/concept 1.png" alt="icon" class="mx-auto pt-8 pb-8" />
        
        <h3 class=" font-bold text-3xl text-center mb-2">
          Clear Concepts
        </h3>
        <p class="text-xl">
          In terms of our strategic business planning, we possess a clear view on how to structure our marketing campaigns, as we heavily rely on in-depth research and analysis.

        </p>
      
      </Card>
    <Card class="w-[47rem] h-[21rem]">
        <img src="../assets/creativity 1.png" alt="icon" class="mx-auto pt-8 pb-8" />
        <h3 class="font-bold text-3xl text-center mb-2">
          Innovative Technology
        </h3>
        <p class="text-xl">
          We utilize a unique approach when it comes to keyword research, grouping, as well as discovery. We conduct keyword analysis, considering the intent of searchers and use that to your advantage.

        </p>
      </Card>
    <Card class="w-[47rem] h-[21rem]">
        <img src="../assets/monitor (1) 1.png" alt="icon" class="mx-auto pt-8 pb-8" />
        <h3 class="font-bold text-3xl text-center mb-2">
          In-depth Analysis
        </h3>
        <p class="text-xl">
          We perform extensive research in order to improve or adjust targeting techniques, making sure we translate those efforts throughout all advertising platforms your business makes use of.
        </p>
      </Card>
    <Card class="w-[47rem] h-[21rem]">
        <img src="../assets/management 1.png" alt="icon" class="mx-auto pt-8 pb-8" />
        <h3 class="font-bold text-3xl text-center mb-2">
          Performance Enhancement
        </h3>
        <p class="text-xl">
          We help you breakdown your campaign initiatives and narrow down your targeting towards the people who actively clicking on your ads – we provide filtering by gender, age, placement, and device.

        </p>
      </Card>
    
  </div>

  <div class="mt-64 w-[57rem] mx-auto">
    <div>
      <h2 class="text-5xl font-bold text-center text-darkgray mb-5">
        Get Your Campaign Performance on
        Another Level!
      </h2>
      <p class="text-xl text-center">
        Further develop your successful online presence and scale up your business.
      </p>
      <router-link to="/contact-us" class="w-44 h-10 mt-24 font-medium text-red text-md border border-red rounded-full flex items-center justify-center hover:bg-red hover:text-[#fff] mx-auto" >
            Get in touch
          </router-link>
    </div>
    <img src="../assets/Installa_section5 2.png" alt="image"/>
  </div>
</section>
</template>