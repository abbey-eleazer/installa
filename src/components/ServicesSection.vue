<script setup>
import Card from './Card.vue'
import CardTwo from './SubHero.vue'
</script>

<template>
  <div class="mx-32 pt-20">
    <h2 class="text-5xl font-bold text-center text-darkgray mb-20">Services</h2>
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


  <section class="pt-[27rem]">
    <h2 class="text-5xl font-bold text-center text-darkgray mb-20">
      The Installa Solutions
    </h2>

    <CardTwo flexRev="flex-row-reverse">
        <div class=" w-[41rem] flex-1 pt-10">
          <h3 class=" font-bold text-3xl mb-5">
            Creating Business Growth
          </h3>
          <p class="text-xl">
            At Installa we offer you a results-driven approach to effectively reach your audience,
            while ensuring your brand’s relevancy on all social platforms through our strategic
            contextual targeting concepts. In addition, we optimize key KPIs like customer turnover
            rate and sales percentage of new clients, with the means to enable well-informed
            business decisions regarding the overall direction of your business’ current, as well as
            future projects.
          </p>
        
          <router-link to="/contact-us" class="w-44 h-10 mt-24 font-medium text-red  text-md border border-red rounded-full flex items-center justify-center hover:bg-red hover:text-[#fff] ml-[30rem]" >
            Get started now
          </router-link>
        </div>
        <img src="../assets/Installa_section3 1.png" alt="gif image" class="w-[50rem] h-[34re] flex-1"/>
      
    </CardTwo>
  </section>

  <section class="pt-[22rem]">
    <h2 class="text-5xl font-bold text-center text-darkgray mb-20">
      The Installa Approach
    </h2>

    <CardTwo flexRev="">
        <div class=" w-[41rem] flex-1 ">
          <h3 class=" font-bold text-3xl mb-5">
            Tailor-Made Marketing Strategies
          </h3>
          <p class="text-xl pb-4">
            As a business-focused consultancy agency, our aspiration is to provide professional advisory services to its clients through specialized tailor-made solutions. We aim to offer you individually crafted marketing campaigns and audience insights analysis, equipping you with data-rich reports and real-time ROI measurements.
          </p>
            <p class="text-xl">
            With our work, we strive to provide you with business expansion opportunities, an increase of brand recognition, and higher customer purchase rates. Moreover, our vast experience in the field enables a more personalized, flexible approach when it comes to the strategic business planning and marketing strategy set up of our client’s companies.
          </p>
        
          <router-link to="/contact-us" class="w-44 h-10 font-medium text-md text-red border border-red rounded-full flex items-center justify-center hover:bg-red hover:text-[#fff] mt-24" >
            More about us
          </router-link>
        </div>
        <img src="../assets/Installa_section4 1.png" alt="gif image" class="w-[50rem] flex-1"/>
      
    </CardTwo>
    <div class="w-36 mx-auto">
       <img src="../assets/down-arrow 2.png" alt="arrow down" />
     </div>
  </section>
</div>
</template>
