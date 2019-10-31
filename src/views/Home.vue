<template>
  <div class="absolute w-screen h-screen overflow-x-hidden lg:overflow-hidden">
    <side-bar-menu
      style="width: 200px"
      class="relative z-50 h-screen inset-0 hidden lg:block"
      @x:move="moveX($event)"
    ></side-bar-menu>

    <side-bar-menu-small
      class="lg:hidden fixed z-50 top-0"
    ></side-bar-menu-small>
    <menu-modal @scrollY="scrollY($event)"></menu-modal>

    <div class="relative lg:absolute inset-0 left-0 lg:left-25/2">
      <div :style="style" class="absolute inset-0">
        <div
          ref="slider"
          @click="goStep(0, 0)"
          class="relative lg:absolute inset-0 w-full lg:w-200 min-h-screen left-0"
        >
          <slider></slider>
        </div>
        <div
          ref="about-me"
          @click="goStep(1, 50)"
          class="relative lg:absolute lg:scroll-style lg:overflow-y-auto overflow-hidden inset-0 w-full lg:w-200 min-h-screen left-0 lg:left-50"
          :class="[pre.bg + color.bg1]"
        >
          <about-me></about-me>
        </div>
        <div
          ref="skills"
          @click="goStep(2, 100)"
          class="relative lg:absolute lg:scroll-style lg:overflow-y-auto overflow-hidden inset-0 w-full lg:w-200 min-h-screen left-0 lg:left-100"
          :class="[pre.bg + color.bg2]"
        >
          <skills></skills>
        </div>
        <div
          ref="activity"
          @click="goStep(3, 150)"
          class="relative lg:absolute lg:scroll-style lg:overflow-y-auto overflow-hidden inset-0 w-full lg:w-200 min-h-screen left-0 lg:left-150"
          :class="[pre.bg + color.bg1]"
        >
          <activity></activity>
        </div>
        <div
          ref="time-line"
          @click="goStep(4, 200)"
          class="relative lg:absolute lg:scroll-style lg:overflow-y-auto overflow-hidden inset-0 w-full lg:w-200 min-h-screen left-0 lg:left-200"
          :class="[pre.bg + color.bg2]"
        >
          <time-line></time-line>
        </div>

        <div
          @click="goStep(null, 250)"
          class="hidden lg:block absolute overflow-hidden inset-0 w-full min-h-screen left-0 lg:left-250 bg-repeat"
          :style="backgroundImage"
        >
          <!--            <div class="opacity-25">Hình ảnh được cung cấp bởi <a href="https://pixabay.com/vi/users/DavidRockDesign-2595351/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3177667">DavidRockDesign</a> từ <a href="https://pixabay.com/vi/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3177667">Pixabay</a></div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script src="js@/view/home.js"></script>
