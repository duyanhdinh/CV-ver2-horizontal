<template>
  <div class="absolute w-screen h-screen overflow-x-hidden lg:overflow-hidden">
    <side-bar-menu
      style="width: 200px"
      class="relative z-50 h-screen inset-0 hidden lg:block"
      @x:move="moveX($event)"
    ></side-bar-menu>

    <div class="absolute inset-0 left-0 lg:left-25/2">
      <transition name="fade">
        <div :style="style" class="absolute inset-0">
          <div
            @click="goStep(0, 0)"
            class="relative lg:absolute inset-0 w-full lg:w-200 min-h-screen left-0"
          >
            <slider></slider>
          </div>
          <div
            @click="goStep(1, 50)"
            class="relative lg:absolute lg:scroll-style lg:overflow-y-auto overflow-hidden inset-0 w-full lg:w-200 min-h-screen left-0 lg:left-50"
            :class="[pre.bg + color.bg1]"
          >
            <about-me></about-me>
          </div>
          <div
            @click="goStep(2, 100)"
            class="relative lg:absolute lg:scroll-style lg:overflow-y-auto overflow-hidden inset-0 w-full lg:w-200 min-h-screen left-0 lg:left-100"
            :class="[pre.bg + color.bg2]"
          >
            <skills></skills>
          </div>
          <div
            @click="goStep(3, 150)"
            class="relative lg:absolute lg:scroll-style lg:overflow-y-auto overflow-hidden inset-0 w-full lg:w-200 min-h-screen left-0 lg:left-150"
            :class="[pre.bg + color.bg1]"
          ></div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<script src="js@/view/home.js"></script>
