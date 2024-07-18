<template>
    <AppHeader></AppHeader>
    <div class="overflow-hidden">
        <MainBlock></MainBlock>
        <VideoList></VideoList>
        <PresentBlock></PresentBlock>
        <Models></Models>
        <Partners></Partners>
        <GalleryBlock></GalleryBlock>
        <Advantages></Advantages>
        <Reviews></Reviews>
        <CallbackFormBlock></CallbackFormBlock>
        <ContactsBlock></ContactsBlock>
        <FAQ></FAQ>
        <AppFooter></AppFooter>
    </div>
    <socialpopover></socialpopover>
    <Modals></Modals>
    <offcanvas name="mobileMenu">
        <div class="mb-6 sm:hidden">
            <a href="#" class="text-[18px] font-bold">+7 123 456 13 57</a>
        </div>
        <ul class="space-y-3 mb-4">
            <li class="mb-3 font-bold">Автомобили</li>
            <li v-for="(menuItem, menuItemIndex) in carList" :key="menuItemIndex">
                <a href="#" class="decor-link">{{ menuItem.title }}</a>
            </li>
        </ul>
        <ul class="space-y-3 mb-4">
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
    </offcanvas>
    <SvgSprite></SvgSprite>
</template>

<script setup lang="ts">
import AppHeader from '@/components/blocks/AppHeader.vue'
import AppFooter from '@/components/blocks/AppFooter.vue'
import SvgSprite from '@/components/blocks/SvgSprite.vue'
import MainBlock from '@/components/blocks/MainBlock.vue'
import ContactsBlock from '@/components/blocks/ContactsBlock.vue'
import CallbackFormBlock from '@/components/blocks/CallbackFormBlock.vue'
import FAQ from '@/components/blocks/FAQ.vue'
import PresentBlock from '@/components/blocks/PresentBlock.vue'
import Advantages from '@/components/blocks/Advantages.vue'
import Partners from '@/components/blocks/Partners.vue'
import Reviews from '@/components/blocks/Reviews.vue'
import Modals from '@/components/blocks/Modals.vue'
import Models from '@/components/blocks/Models.vue'
import GalleryBlock from '@/components/blocks/GalleryBlock.vue'
import VideoList from '@/components/blocks/VideoList.vue'
import { carList, mainMenu, otherMenu } from '@/data/common'
</script>
