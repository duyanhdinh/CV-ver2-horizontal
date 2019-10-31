<template>
  <div class="w-full h-full lg:relative bottom-0">
    <flickity class="w-full h-screen" ref="flickity" :options="flickityOptions">
      <div class="w-full h-full relative bg-gray-600">
        <img class="w-full h-auto absolute bottom-0" :src="img1" alt="" />
      </div>
      <div class="w-full h-full relative bg-gray-500">
        <img class="w-full h-auto absolute bottom-0" :src="img2" alt="" />
      </div>
    </flickity>
    <div class="w-1/2 h-auto absolute left-0 bottom-0 mb-20 sm:mb-40">
      <div
        class="mx-2 sm:mx-12 uppercase font-oswald"
        :class="[pre.text + color.c3]"
      >
        <div class="text-lg sm:text-4xl md:text-5xl font-normal">
          {{ step.hi }}
        </div>
        <div class="text-lg sm:text-4xl md:text-5xl font-bold">
          {{ step.name }}
        </div>
        <div
          class="text-xl border-t-1 border-b-1 mt-4 py-2 opacity-80 tracking-wider"
          :class="[pre.border + color.c3]"
        >
          {{ step.career }}
        </div>
      </div>
    </div>
  </div>
</template>

<script src="js@/components/home/slider.js"></script>
