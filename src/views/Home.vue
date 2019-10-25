<template>
  <div class="absolute w-screen h-screen overflow-x-hidden lg:overflow-hidden">
    <side-bar-menu style="width: 200px" class="absolute z-50 h-screen inset-0 hidden lg:block"
                   @x:move="moveX($event)"
    ></side-bar-menu>
    <transition name="fade">
      <div :style="style"
           class="absolute inset-0 left-0 lg:left-auto"
      >
          <div @click="moveX(0)" class="relative lg:absolute inset-0 w-full lg:w-200 min-h-screen bg-blue-600"></div>
          <div @click="moveX(50)" class="relative lg:absolute inset-0 w-full lg:w-200 min-h-screen left-0 lg:left-50 bg-red-400"></div>
          <div @click="moveX(100)" class="relative lg:absolute inset-0 w-full lg:w-200 min-h-screen left-0 lg:left-100 bg-gray-600"></div>
          <div @click="moveX(150)" class="relative lg:absolute inset-0 w-full lg:w-200 min-h-screen left-0 lg:left-150 bg-gray-400"></div>
          <div @click="moveX(200)" class="relative lg:absolute inset-0 w-full lg:w-200 min-h-screen left-0 lg:left-200 bg-gray-600"></div>
      </div>
    </transition>

  </div>
</template>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>

<script src="js@/view/home.js"></script>
