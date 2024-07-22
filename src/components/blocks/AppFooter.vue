<template>
    <footer class="app-footer bg-[#161616] py-8 lg:py-20 text-white" data-animated-block="fadeInUp">
        <div class="centered">
            <div class="flex items-center justify-between mb-12 lg:mb-14">
                <a href="#">
                    <img
                        class="max-w-[140px] md:max-w-[220px]"
                        :src="`${basePath}img/footer-logo.svg`"
                        alt=""
                    />
                </a>
                <a href="#" class="app-button app-button--light">Скачать прайс</a>
            </div>
            <div class="lg:flex justify-between mb-12 lg:mb-20">
                <div class="text-[17px] grid grid-cols-2 gap-x-4 gap-y-10 md:gap-20 md:grid-cols-3">
                    <ul class="space-y-3">
                        <li class="mb-3 font-bold">Автомобили</li>
                        <li v-for="(menuItem, menuItemIndex) in carList" :key="menuItemIndex">
                            <a href="#" class="decor-link">{{ menuItem.title }}</a>
                        </li>
                    </ul>
                    <ul class="space-y-3">
                        <li class="mb-3 font-bold">Компания</li>
                        <li v-for="(menuItem, menuItemIndex) in mainMenu" :key="menuItemIndex">
                            <a href="#" class="decor-link">{{ menuItem.title }}</a>
                        </li>
                    </ul>
                    <ul class="space-y-3">
                        <li class="mb-3 font-bold">Покупка</li>
                        <li v-for="(menuItem, menuItemIndex) in otherMenu" :key="menuItemIndex">
                            <a href="#" class="decor-link">{{ menuItem.title }}</a>
                        </li>
                    </ul>
                </div>
                <div class="mt-10">
                    <div class="mb-4 text-[20px] font-bold">Мы держим вас в курсе</div>
                    <subscribeform class="md:w-[340px]"></subscribeform>
                </div>
            </div>
            <div
                class="flex flex-col items-center gap-3 justify-between text-[14px] md:flex-row md:gap-6"
            >
                <div>© 2024 REtstudio.All right reserved</div>
                <div class="md:ml-auto">
                    <a href="#" class="decor-link" v-modal-call="{ name: 'politics' }"
                        >Политика конфеденциальности</a
                    >
                </div>
                <div>
                    <a href="#" class="decor-link">Правовая информация</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { basePath, carList, mainMenu, otherMenu } from '@/data/common'
</script>
