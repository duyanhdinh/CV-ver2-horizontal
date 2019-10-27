<template>
  <div>
    <div
      class="h-full w-full py-8 flex flex-col items-center"
      :class="[pre.bg + color.c2]"
    >
      <div class="w-36 h-36 bg-cover"
           :class="[pre.bg + color.c1]"
           :style="style_avatar"
      ></div>
      <div class="w-36 h-36 mt-10">
        <div
                v-for="(item) in list_menu"
                :key="item.id"
          class="w-full my-2 py-2 cursor-pointer border-b-1 capitalize"
          :class="[
            pre.border + color.c2s,
            pre.hover + pre.text + color.c1,
            (index_active == item.index) ? pre.text + color.c1 : pre.text + color.c3,
          ]"
          @click="clickMenu(item)"
        >
          {{item.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script src="js@/components/home/side-bar-menu.js"></script>
