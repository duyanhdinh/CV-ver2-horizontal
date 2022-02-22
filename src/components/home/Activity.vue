<template>
  <div class="w-full h-full">
    <step-common>
      <template slot="title">{{ step.title }}</template>
      <div class="font-oswald text-xl font-medium uppercase">
        {{ step.description }}
      </div>
      <div
        class="my-10 sm:my-20 w-full pb-50r relative group inset-0 shadow-lg hover:shadow-2xl cursor-pointer"
        v-for="(item, index) in step.activate"
        :key="item.id"
        @click="$modal.show('activity', { index: index })"
      >
        <img class="absolute z-10 w-full h-full" :src="item.img" alt="" />
        <div
          class="hidden group-hover:block absolute z-20 w-full h-full opacity-90"
          :class="[pre.bg + color.c1]"
        >
          <div
            class="h-full font-oswald text-xl font-medium uppercase flex items-center justify-center"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </step-common>
    <activity-modal></activity-modal>
  </div>
</template>

<script src="js@/components/home/activity.js"></script>
