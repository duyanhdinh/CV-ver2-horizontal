<template>
    <modal
            name="menu"
            :pivotX="1"
            :width="width"
            height="100%"
            transition="sidebar-menu"
    >
        <div class="p-8 w-full h-full" :class="[pre.bg + color.bg2]">
            <div class="cursor-pointer" @click="$modal.hide('menu')">
                <i :style="font_style" class="fad fa-chevron-right text-3xl"></i>
            </div>
            <div :style="{height: list_height}"
                 class="overflow-y-auto"
            >
                <div v-for="item in menu"
                     :key="item.id"
                     @click="$emit('scrollY', item.id)"
                     class="w-full border-b-1 py-2 text-right font-bold capitalize cursor-pointer"
                     :class="[pre.border + color.c2s, pre.text + color.c2]"
                >
                    {{item.name}}
                </div>
            </div>
            <div :style="{height: bottom_height}"
                 class="overflow-y-auto"
            >
                <div class="w-full flex justify-around text-2xl my-4">
                    <div class="w-1/3 flex justify-center">
                        <a href="https://dazzard.com"
                           target="_blank"
                           class="w-1/3 flex justify-center items-end"
                        >
                            <div class="w-6 h-6 bg-contain bg-no-repeat cursor-pointer" :style="style_web"></div>
                        </a>
                    </div>
                    <div class="w-1/3 text-blue-500 flex justify-center">
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
                     :class="[pre.text + color.c2s]"
                >
                    Duy Anh Dinh <i class="fad fa-copyright mx-2"></i> All Rights Reserved 2019
                </div>

            </div>
        </div>
    </modal>
</template>

<style>
    .sidebar-menu-enter-active {
        animation: fade-in-right 0.5s;
    }
    .sidebar-menu-leave-active {
        animation: fade-in-right 0.5s reverse;
    }
</style>

<script src="js@/components/common/modal/menu-modal.js"></script>