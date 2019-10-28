<template>
    <div class="pb-16 mb-10">
        <div class="font-oswald text-2xl font-medium uppercase">
            {{title}}
        </div>
        <div class="mt-8 w-full h-full">
            <div v-for="item in data"
                 :key="item.id"
                 class="my-8"
            >
                <div class="text-base sm:text-lg font-oswald my-4"
                     :class="[pre.text + color.c1]"
                >
                    <i :style="hourglass_style" class="fad fa-hourglass-half"></i> {{item.time}}
                </div>
                <em class="text-base sm:text-lg font-oswald font-medium my-4 uppercase">{{item.type}} / {{item.place}}</em>
                <div class="text-base sm:text-lg font-medium my-4"></div>
                <div class="mt-4 text-base sm:text-lg font-normal">{{item.description}}</div>
            </div>

        </div>
    </div>
</template>

<script src="js@/components/common/time-line-part.js"></script>
