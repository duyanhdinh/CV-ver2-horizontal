<template>
  <div class="w-full h-full">
    <step-common>
      <template slot="title">{{ step.title }}</template>
      <skills-part
        class="border-b-1 hidden sm:block"
        :class="[pre.border + color.c3s]"
      >
        <template slot="title">{{ step.main.title }}</template>
        <div class="w-full h-full flex justify-center">
          <div class="relative w-120 h-120">
            <div class="absolute w-full h-full flex flex-wrap">
              <div
                class="relative w-60 h-60 flex rounded-lg"
                :class="[pre.border + color.c1, item.class]"
                v-for="item in step.main.skills"
                :key="item.id"
              >
                <div class="p-4 font-oswald font-medium text-center capitalize">
                  <div class="opacity-50">{{ item.type }}</div>
                  <div>{{ item.name }}</div>
                </div>
                <div
                  class="absolute w-full h-full flex justify-center items-center"
                >
                  <img class="w-20 h-20" :src="item.img" :alt="item.name" />
                </div>
              </div>
            </div>

            <div
              class="absolute w-full h-full flex justify-center items-center"
            >
              <i class="fad fa-fan fa-spin text-9xl" :style="fan_style"></i>
            </div>
          </div>
        </div>
      </skills-part>
      <skills-part
        class="border-b-1 block sm:hidden"
        :class="[pre.border + color.c3s]"
      >
        <template slot="title">{{ step.main.title }}</template>
        <div class="w-full flex flex-wrap justify-around">
          <div
            v-for="item in step.main.skills"
            :key="item.id"
            class="w-1/2 sm:w-1/4 flex justify-center"
          >
            <div>
              <div class="w-full flex justify-center">
                <img class="h-20" :src="item.img" :alt="item.name" />
              </div>
              <div class="p-4 font-oswald font-medium text-center capitalize">
                <div class="opacity-50">{{ item.type }}</div>
                <div>{{ item.name }}</div>
              </div>
            </div>
          </div>
        </div>
      </skills-part>
      <skills-part class="border-b-1" :class="[pre.border + color.c3s]">
        <template slot="title">{{ step.knowledge.title }}</template>
        <div class="w-full flex flex-wrap justify-around">
          <div
            v-for="item in step.knowledge.skills"
            :key="item.id"
            class="w-1/2 sm:w-1/4 flex justify-center"
          >
            <div>
              <div class="w-full flex justify-center">
                <img class="h-20" :src="item.img" :alt="item.name" />
              </div>
              <div class="p-4 font-oswald font-medium text-center capitalize">
                <div class="opacity-50">{{ item.type }}</div>
                <div>{{ item.name }}</div>
              </div>
            </div>
          </div>
        </div>
      </skills-part>
      <skills-part class="border-b-1" :class="[pre.border + color.c3s]">
        <template slot="title">{{ step.others.title }}</template>
        <div class="w-full flex flex-wrap justify-around">
          <div
            v-for="item in step.others.skills"
            :key="item.id"
            class="w-1/2 sm:w-1/4 flex justify-center"
          >
            <div>
              <div class="w-full flex justify-center">
                <img class="h-20" :src="item.img" :alt="item.name" />
              </div>
              <div class="p-4 font-oswald font-medium text-center capitalize">
                <!--                                <div class="opacity-50">{{item.type}}</div>-->
                <div>{{ item.name }}</div>
              </div>
            </div>
          </div>
        </div>
      </skills-part>
      <skills-part class="border-b-1" :class="[pre.border + color.c3s]">
        <template slot="title">{{ step.language.title }}</template>
        <div v-for="item in step.language.info" :key="item.id" class="w-full">
          <div class="font-oswald font-medium text-lg opacity-75">
            {{ item.name }}
          </div>
          <div class="w-full flex flex-wrap justify-between my-4">
            <div
              class="w-full sm:w-4/5 flex justify-around text-lg"
              :class="[pre.text + color.c1]"
            >
              <div v-for="i in item.full" :key="i.id">
                <i class="fas fa-circle"></i>
              </div>
              <div v-for="i in item.empty" :key="i.id">
                <i class="far fa-circle"></i>
              </div>
            </div>
            <div
              class="w-full sm:w-1/5 uppercase font-medium text-lg hidden sm:block"
            >
              {{ item.mean }}
            </div>
          </div>
        </div>
      </skills-part>
    </step-common>
  </div>
</template>

<script src="js@/components/home/skills.js"></script>
