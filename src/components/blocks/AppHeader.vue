<template>
    <header
        class="app-header sticky z-[80] top-0 bg-white shadow-lg text-base py-5 md:py-6 lg:py-12 overflow-hidden"
    >
        <div class="centered flex items-center justify-between">
            <a href="#" data-animated-block="fadeInRight">
                <img
                    class="max-w-[120px] md:max-w-[220px]"
                    :src="`${basePath}img/header-logo.svg`"
                    alt=""
                />
            </a>
            <ul class="gap-5 text-[17px] leading-[1.5] hidden lg:flex">
                <li v-for="(menuItem, menuItemIndex) in carList" :key="menuItemIndex">
                    <a href="#" class="decor-link">{{ menuItem.title }}</a>
                </li>
            </ul>
            <div class="flex items-center gap-5" data-animated-block="fadeInLeft">
                <div class="hidden sm:block">
                    <a href="#" class="text-[18px] font-bold">+7 123 456 13 57</a>
                </div>
                <mobiletrigger class="lg:hidden"></mobiletrigger>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { basePath, carList } from '@/data/common'
</script>
