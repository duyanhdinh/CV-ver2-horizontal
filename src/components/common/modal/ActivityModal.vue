<template>
    <modal
            name="activity"
            @before-open="getIndex"
            @opened="getFirst"
            :width="width"
            height="auto"
    >
        <div class="w-full pb-50r relative">
            <div class="absolute w-full h-full p-2 sm:p-8">
                <flickity
                        ref="flickity-activity"
                        :options="flickityOptions"
                        class="w-full h-full shadow-lg"

                >
                    <img v-for="(item, index) in step.activate"
                         :key="item.id"
                         class="w-full h-full"
                         :src="item.img"
                         alt=""
                         :id="'activity' + index"
                    >
                </flickity>
            </div>
        </div>
        <div class="px-2 pb-2 sm:px-8 sm:pb-8 w-full">
            <div class="w-full text-center">
                <div class="font-oswald text-sm sm:text-xl font-medium uppercase my-2">{{data.name}}</div>
                <div class="text-sm sm:text-lg font-normal">
                    {{data.description}}
                </div>
                <div class="flex justify-center w-full mt-4">
                    <div class="text-sm sm:text-xl px-4 py-2 w-1/2 sm:w-1/3 md:w-1/4 font-bold cursor-pointer"
                         :class="[pre.bg + color.c1, pre.text + color.c3]"
                         @click="gotoLink()"
                    >
                        <a @click.self.prevent class="w-full h-full" :href="data.url">Go to link</a>
                        <a :id="'url_activity' + index" target="_blank" :href="data.url" hidden></a>
                    </div>
                </div>
            </div>

        </div>


    </modal>
</template>

<script src="js@/components/common/modal/activity-modal.js"></script>