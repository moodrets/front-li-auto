<template>
    <header class="app-header text-content py-5 md:py-6 lg:py-12">
        <div class="centered flex items-center justify-between">
            <a href="#">
                <img class="max-w-[120px] md:max-w-[220px]" src="/img/header-logo.png" alt="" />
            </a>
            <ul class="gap-5 text-[17px] leading-[1.5] hidden lg:flex">
                <li v-for="(menuItem, menuItemIndex) in carList" :key="menuItemIndex">
                    <a href="#" class="decor-link">{{ menuItem.title }}</a>
                </li>
            </ul>
            <div class="flex items-center gap-5">
                <a href="#" class="hidden text-[18px] font-bold sm:block">+7 123 456 13 57</a>
                <mobiletrigger class="lg:hidden"></mobiletrigger>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { carList } from '@/data/common'
</script>
