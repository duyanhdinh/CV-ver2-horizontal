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
      <div class="absolute bottom-0 px-6">
        <div class="w-full flex justify-around text-2xl my-4">
          <div class="w-1/3 flex justify-center">
            <a href="https://dazzard.com"
               target="_blank"
               class="w-1/3 flex justify-center items-end"
            >
              <div class="w-6 h-6 bg-contain bg-no-repeat cursor-pointer" :style="style_web"></div>
            </a>
          </div>
          <div class="w-1/3 text-white flex justify-center">
            <a href="https://www.linkedin.com/in/duy-anh-%C4%91inh-611156154"
               target="_blank"
               class="w-1/3"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
          <div class="w-1/3 text-purple-700 flex justify-center">
            <a href="https://github.com/duyanhdinh"
               target="_blank"
               class="w-1/3"
            >
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div class="w-full flex justify-between">
          <div class="w-12 h-12 bg-contain bg-no-repeat cursor-pointer"
               :class="[language == 'vi'? active : not_active]"
               :style="style_vi"
               @click="setLanguage('vi')"
          ></div>
          <div class="w-12 h-12 bg-contain bg-no-repeat cursor-pointer"
               :class="[language == 'en'? active : not_active]"
               :style="style_en"
               @click="setLanguage('en')"
          ></div>
        </div>
        <div class="text-sm mt-2"
                :class="[pre.text + color.c3]"
        >
          Duy Anh Dinh <i class="fad fa-copyright mx-2"></i> All Rights Reserved 2019
        </div>
      </div>
    </div>
  </div>
</template>

<script src="js@/components/home/side-bar-menu.js"></script>
