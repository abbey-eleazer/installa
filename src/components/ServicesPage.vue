<script setup>
import CardTwo from './SubHero.vue'
import Card from './Card.vue';
</script>

<template>
  <header class="mx-32">
    <h1 class="text-6xl font-bold text-center text-darkgray mb-2 mt-12">Our Services</h1>
    <p class="text-xl text-center pb-12">We are an extension of your team.</p>
    <img src="../assets/services.png" alt="service image" class="mx-auto h-[60vh]" />

    <div class="w-12 lg:w-36 mx-auto pt-10">
      <img src="../assets/down-arrow 2.png" alt="arrow down" class="mx-auto" />
    </div>
  </header>
  <main class="mx-32">
    <CardTwo flex-rev="" class="mt-24">
      <img src="../assets/61322-megaphone-message 1.png" alt="mega image" class="h-[70vh] flex-1" />
      <div class="pt-40 flex-1">
        <h3 class="font-bold text-3xl mb-5">Campaign Performance and Audience Analysis</h3>
        <p class="text-xl mb-5">
          As part of our strategic arsenal, we provide businesses with access to personalized,
          data-rich reports on their audience’s online habits, interests, geographical location,
          gender, and device.
        </p>
        <p class="text-xl">
          By doing so, we provide our clients with key information regarding the possible
          opportunities they can advance their digital marketing campaigns. By optimizing their
          current initiatives, our clients would gain access to real-time ROI measurements, a
          significant improvement of key KPIs such as: customer turnover rate ad percentage of sales
          from clients.
        </p>
        <img
          src="../assets/zigzag.png"
          alt="zigzag"
          class="ml-40 w-56 h-8 my-3 lg:w-[29rem] md:h-12 md:my-8"
        />
      </div>
    </CardTwo>
    <CardTwo  class="mt-24">
      <img src="../assets/47138-seo-work-and-marketing (1) 1.png" alt="mega image" class="h-[70vh] flex-1" />
      <div class="pt-40 flex-1">
        <h3 class="font-bold text-3xl mb-5">
          Build comprehensive, and purpose-driven campaigns for an impactful online presence.
        </h3>
        
        <p class="text-xl">
          In addition to the mentioned above strategic techniques, Installa’s team provides a unique approach to conducting keyword research and grouping, which allows for an improved advertising and targeting initiative across different social media channels.
        </p>
        <img
          src="../assets/zigzag.png"
          alt="zigzag"
          class="mr-36 w-56 h-8 my-3 lg:w-[29rem] md:h-12 md:my-8"
        />
      </div>
    </CardTwo>

    <section class="mt-72">
      <h2 class="text-5xl font-black text-center text-darkgray mb-20">Bring Value to Your Business</h2>
    
    <div class="flex justify-between">
      <Card>
        <img src="../assets/research 1.png" alt="icon" class="mx-auto pt-20 pb-16" />
        <h3 class="w-[23rem] font-bold text-3xl text-center mb-5">
          User & Audience Insights Analysis
        </h3>
        <p class="text-xl">
          Data-rich audience insight reports, segmenting of audience based on their online habits,
          interests, and keywords.
        </p>
      </Card>
      <Card>
        <img src="../assets/seo 1.png" alt="icon" class="mx-auto pt-20 pb-16" />
        <h3 class="w-[23rem] font-bold text-3xl text-center mb-5">
          Performance Marketing Campaigns
        </h3>
        <p class="text-xl">
          Real-time ROI measurements optimizing KPIs such as customer turnover rate and percentage
          of sales from new clients.
        </p>
      </Card>
      <Card>
        <img src="../assets/content 1.png" alt="icon" class="mx-auto pt-20 pb-16" />
        <h3 class="w-[23rem] font-bold text-3xl text-center mb-5">Keyword Targeting</h3>
        <p class="text-xl">
          Contextual targeting with a selection of highly used keywords and topics showing your ads
          only on relevant platforms.
        </p>
      </Card>
    </div>

    </section>
  </main>
    <div class="w-full h-64 mt-32 text-center bg-lighterRed">
      <h2 class="text-5xl font-bold text-center text-darkgray mb-12 pt-14">Let's Work Together!
      </h2>
      <router-link to="/contact-us" class="w-44 h-10 mt-12 mx-auto font-medium text-md border border-red rounded-full flex items-center text-red justify-center bg-[#fff] hover:bg-red hover:text-[#fff]" >Contact Us</router-link>
    </div>
</template>
