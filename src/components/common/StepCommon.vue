<template>
  <div class="px-8 sm:px-16 py-6 sm:py-12">
    <div class="font-oswald text-4xl sm:text-5xl  font-medium uppercase">
      <slot name="title">hi</slot>
    </div>
    <div
      class="w-20 border-b-4 sm:border-b-6 mt-4"
      :class="[pre.border + color.c1]"
    ></div>

    <div class="mt-10 w-full h-full">
      <slot>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</slot>
    </div>
  </div>
</template>

<script src="js@/components/common/step-common.js"></script>
