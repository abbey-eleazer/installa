<template>
  <div class="mx-0 md:mx-24 ">
    <h2  class="text-2xl md:text-3xl lg:text-5xl font-bold text-center text-darkgray mt-5 mb-0 lg:mb-20">
      Open positions
    </h2>
    <div class="mt-32 mb-64 flex flex-col gap-10">
      <div class="flex items-center justify-between px-1 md:px-5 lg:px-12 py-1  bg-lighterRed/40">
        <div class="flex-1">
          <span class="text-red text-xs md:text-sm font-medium">Customer service</span>
          <p class="text-md md:text-lg font-black">Project Manager</p>
        </div>
        <div class="flex-1 text-sm">
          <p>Location: Everywhere</p>
          <p>Full-Time Job</p>
        </div>
        <router-link to="/careers/job-detail" class="w-44 h-10 font-medium text-md border border-red rounded-full flex items-center text-red justify-center bg-[#fff] hover:bg-red hover:text-[#fff]" >Apply now</router-link>
      </div>
      <div class="flex items-center justify-between px-1 py-1 md:px-5 lg:px-12 bg-lighterRed/40">
        <div class="flex-1">
          <span class="text-red text-xs md:text-sm font-medium">Customer service</span>
          <p class="text-md md:text-lg font-black">Marketing Researcher</p>
        </div>
        <div class="flex-1 text-sm">
          <p>Location: Everywhere</p>
          <p>Full-Time Job</p>
        </div>
        <router-link to="/careers/job-detail" class="w-44 h-10 font-medium text-md border border-red rounded-full flex items-center text-red justify-center bg-[#fff] hover:bg-red hover:text-[#fff]" >Apply now</router-link>
      </div>
      <div class="flex items-center justify-between px-1 py-1 gap-1 md:px-5 lg:px-12 bg-lighterRed/40">
        <div class="flex-1">
          <span class="text-red text-xs md:text-sm font-medium">Customer service</span>
          <p class="text-md md:text-lg font-black">Product Marketing Manager</p>
        </div>
        <div class="flex-1 text-sm">
          <p>Location: Everywhere</p>
          <p>Full-Time Job</p>
        </div>
        <router-link to="/careers/job-detail" class="w-44 h-10 font-medium text-md border border-red rounded-full flex items-center text-red justify-center bg-[#fff] hover:bg-red hover:text-[#fff]" >Apply now</router-link>
      </div>
      <div class="flex items-center justify-between px-1 py-1 md:px-5 lg:px-12 bg-lighterRed/40">
        <div class="flex-1">
          <span class="text-red text-xs md:text-sm font-medium">Customer service</span>
          <p class="text-md md:text-lg font-black">Promotions Specialist</p>
        </div>
        <div class="flex-1 text-sm">
          <p>Location: Everywhere</p>
          <p>Full-Time Job</p>
        </div>
        <router-link to="/careers/job-detail" class="w-44 h-10 font-medium text-md border border-red rounded-full flex items-center text-red justify-center bg-[#fff] hover:bg-red hover:text-[#fff]" >Apply now</router-link>
      </div>
    </div>
  </div>
</template>