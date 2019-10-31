<template>
  <div class="pb-16 mb-10">
    <div class="font-oswald text-2xl font-medium uppercase">
      {{ title }}
    </div>
    <div class="mt-8 w-full h-full">
      <div v-for="item in data" :key="item.id" class="my-8">
        <div
          class="text-base sm:text-lg font-oswald my-4"
          :class="[pre.text + color.c1]"
        >
          <i :style="hourglass_style" class="fad fa-hourglass-half"></i>
          {{ item.time }}
        </div>
        <em class="text-base sm:text-lg font-oswald font-medium my-4 uppercase"
          >{{ item.type }} / {{ item.place }}</em
        >
        <div class="text-base sm:text-lg font-medium my-4"></div>
        <div
          v-if="item.description"
          class="mt-4 text-base sm:text-lg font-normal"
        >
          {{ item.description }}
        </div>
        <div
          v-if="item.project"
          v-for="project in item.project"
          :key="project.id"
          class="px-2"
        >
          <div
            class="text-base sm:text-xl font-oswald my-4"
            :class="[pre.text + color.c1]"
          >
            <i
              :style="hourglass_style"
              class="fad fa-hand-point-right mx-2"
            ></i>
            {{ project.name }}
          </div>
          <div
            class="text-base sm:text-lg font-oswald my-4 px-4"
            :class="[pre.text + color.c2]"
          >
            <i :style="hourglass_style" class="fad fa-user-crown mx-2"></i>
            {{ project.customer }}
          </div>
          <div
            class="text-base sm:text-lg font-oswald my-4 px-4"
            :class="[pre.text + color.c2]"
          >
            <i :style="hourglass_style" class="fad fa-cogs mx-2"></i>
            {{ project.technologies }}
          </div>
          <div
            class="text-base sm:text-lg font-oswald my-4 px-4"
            :class="[pre.text + color.c2]"
          >
            <i :style="hourglass_style" class="fad fa-user-friends mx-2"></i>
            {{ project.team_size }}
          </div>
          <div
            class="text-base sm:text-lg font-oswald my-4 px-4"
            :class="[pre.text + color.c2]"
          >
            <i :style="hourglass_style" class="fad fa-crop-alt mx-2"></i>
            {{ project.description }}
          </div>
          <div class=" my-4 px-8" :class="[pre.text + color.c2]">
            <div class="my-2" v-for="text in project.responsibility">
              <i :style="hourglass_style" class="fad fa-pen mx-2"></i>
              {{ text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="js@/components/common/time-line-part.js"></script>
