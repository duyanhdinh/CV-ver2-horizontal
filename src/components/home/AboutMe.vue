<template>
    <div class="w-full h-full">
        <step-common>
            <template slot="title">{{step.title}}</template>
            <div v-for="(item) in step.info"
                 :key="item.id"
                 class="w-full sm:w-1/2 border-b-1 py-3 font-normal text-lg block sm:flex justify-between text-center"
                 :class="[pre.border + color.c3s]"
            >
                <div class="">{{item.name}}</div>
                <div class="">{{item.value}}</div>
            </div>
            <div class="w-full mt-10">
                <div class="capitalize font-bold text-lg font-oswald"
                >{{step.me.title}}</div>
                <div class="mt-4 font-medium text-sm sm:text-lg"
                     :class="[pre.text + color.c2s]"
                >{{step.me.description}}</div>
            </div>
            <div class="uppercase py-2 border-2 w-full sm:w-1/2 md:w-1/3 mt-5 text-center cursor-pointer font-bold"
                 :class="[
                 pre.border + color.c1
                 , pre.hover + pre.bg + color.c1
                 , pre.hover + pre.text + color.c3
                 ]"
            >
                {{step.download}}
            </div>
        </step-common>
    </div>
</template>

<script src="js@/components/home/about-me.js"></script>
