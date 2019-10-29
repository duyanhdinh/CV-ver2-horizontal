<template>
    <div class="w-full h-full mt-8">
        <step-common>
            <template slot="title">{{step.title}}</template>
            <div v-for="item in step.data"
                 :key="item.id"
                 class="w-full h-full"
            >
                <time-line-part
                        :title="item.title"
                        :data="item.data"
                ></time-line-part>
            </div>

        </step-common>
    </div>
</template>

<script src="js@/components/home/time-line.js"></script>
