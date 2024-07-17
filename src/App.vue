<template>
    <AppHeader></AppHeader>
    <div class="overflow-hidden">
        <MainBlock></MainBlock>
        <PresentBlock></PresentBlock>
        <Partners></Partners>
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
        <div class="mb-8 sm:hidden">
            <a href="#" class="text-[18px] font-bold">+7 123 456 13 57</a>
        </div>
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
</script>
