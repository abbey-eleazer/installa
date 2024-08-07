<script setup>
import CardTwo from './SubHero.vue';
</script>

<template>
  <header class="mx-32">
    <h1 class="text-6xl font-bold text-center text-darkgray mb-2 mt-12">
      Welcome to Installa 
    </h1>
    <p class="text-xl text-center">
      Home to Effective Marketing Strategies Based on Innovative, In-Depth Analysis.
    </p>
    <CardTwo flex-rev class="-mt-8">
      <img src="../assets//welcome.png" alt="welcome image">
      <div>
        <h3 class=" font-bold text-3xl mb-5">
          Our Clear Concepts and Innovative Technology
        </h3>
        <p class="text-xl mb-5">
          Our professional business philosophy is based on the understanding that substantial growth opportunities come from strategic, well-researched digital campaign initiatives.
        </p>
        <p class="text-xl">
          Therefore, with the means of our clear concepts and innovative technology, we aim to offer our clients with business expansion opportunities, along with a significant increase of brand recognition, and higher customer purchase rates.
        </p>
        <img src="../assets/zigzag.png" alt="zigzag" class="ml-36 w-56 h-8 my-3 lg:w-[29rem] md:h-12 md:my-8" />
      </div>
    </CardTwo>
    <div class="w-12 lg:w-36 mx-auto pt-10">
    <img src="../assets/down-arrow 2.png" alt="arrow down" class=" mx-auto " />
  </div>
</header>

<main class="mx-32 mb-32">
  <CardTwo class="mt-24">
      <img src="../assets/29138-lottie-animation 1.png" alt="animation image">
      <div class="pt-40">
        <h3 class=" font-bold text-3xl mb-5">
          We Are Passionate About Advancing Your Online Impact
        </h3>
        <p class="text-xl mb-5">
          Our extensive experience in the digital marketing scene allows us to present opportunities for a more personalized, tailor-made approach when it comes to the strategic business planning and marketing strategy set up of our client’s companies.
        </p>
        <p class="text-xl">
          In addition, being a business-oriented consultancy agency, our mission as a company consists of providing professional advisory services through specialized individualized solutions.
        </p>
        <img src="../assets/zigzag.png" alt="zigzag" class="mr-36 w-56 h-8 my-3 lg:w-[29rem] md:h-12 md:my-8" />
      </div>
  </CardTwo>
  <CardTwo flex-rev="" class="mt-52">
      <img src="../assets/26572-creativity-comes-from-within 1.png" alt="creativity image">
      <div class="pt-40">
        <h3 class=" font-bold text-3xl mb-5">
          We Design Your Success
        </h3>
        <p class="text-xl mb-5">
          Installa’s creative team strives to offer you carefully built marketing campaigns and audience insights analysis, equipping businesses with data-rich reports and real-time ROI measurements.
        </p>
        <p class="text-xl mb-5">
          At Installa we offer you a results-driven approach on how to effectively reach your audience, while ensuring your brand’s relevancy on all social platforms through contextual targeting.
        </p>
        <p class="text-xl">
          Moreover, we optimize KPIs like customer turnover rate and sales percentage of new clients in order to enable well-informed business decisions about the direction of your current projects.
        </p>
        <h3 class=" font-bold text-2xl pt-12">
          Installa Marketing is your One-Stop-Solution for Campaign Performance Enhancement and Keyword Targeting Initiatives.
        </h3>
        <router-link to="/contact-us" class="w-44 h-10 mt-24 translate-x-[30rem] font-medium text-md border border-red rounded-full flex items-center text-red justify-center hover:bg-red hover:text-[#fff]" >Contact Us</router-link>
      </div>
  </CardTwo>
</main>
</template>