<template>
    <div>
        <div class="h-full w-full py-8 flex flex-col items-center"
             :class="[pre.bg + color.c2]"
        >
            <div class="w-36 h-36 bg-cover"
                 :style="style_avatar"
            ></div>
            <div class="w-36 h-36 mt-20">
                <div class="w-full my-2 cursor-pointer border-b-2 text-white"
                     @click="$emit('x:move',0)"
                >
                    1
                </div>
                <div class="w-full my-2 cursor-pointer border-b-2 text-white"
                     @click="$emit('x:move',50)"
                >
                    2
                </div>
                <div class="w-full my-2 cursor-pointer border-b-2 text-white"
                     @click="$emit('x:move',100)"
                >
                    3
                </div>
                <div class="w-full my-2 cursor-pointer border-b-2 text-white"
                     @click="$emit('x:move',150)"
                >
                    4
                </div>

            </div>
        </div>
    </div>
</template>

<script src="js@/components/home/side-bar-menu.js"></script>