<template>
  <div
    class="w-full h-16 flex px-4 justify-between items-center text-2xl"
    :class="[pre.bg + color.c2]"
  >
    <div
      class="text-xl font-bold font-oswald tracking-wide"
      :class="[pre.text + color.c1]"
    >
      Duy Anh Dinh
    </div>
    <div class="cursor-pointer" @click="$modal.show('menu')">
      <i :style="bars_style" class="fad fa-bars"></i>
    </div>
  </div>
</template>

<script src="js@/components/home/side-bar-menu-small.js"></script>
