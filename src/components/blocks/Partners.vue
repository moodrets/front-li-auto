<template>
    <section class="py-10 lg:py-24" data-animated-block="fadeInUp">
        <div class="centered">
            <div class="text-center h1">Лизинг и кредитование</div>
            <div class="text-center mb-10 font-medium text-[20px] lg:text-[24px]">
                Банки партнеры
            </div>
            <div class="swiper js-partners-slider">
                <div class="swiper-wrapper items-center">
                    <div
                        v-for="(slide, slideIndex) in partnersList"
                        :key="slideIndex"
                        class="swiper-slide px-10"
                    >
                        <a href="#" class="block text-center">
                            <img class="inline-block" :src="slide.img" alt="" />
                        </a>
                    </div>
                </div>
                <div class="slider-pagination text-dirt mt-14"></div>
                <div class="top-0 translate-y-0 slider-control slider-control--prev text-dirt">
                    <div class="svg-icon svg-icon--stroke">
                        <svg><use xlink:href="#arrow-left"></use></svg>
                    </div>
                </div>
                <div class="top-0 translate-y-0 slider-control slider-control--next text-dirt">
                    <div class="svg-icon svg-icon--stroke">
                        <svg><use xlink:href="#arrow-right"></use></svg>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { partnersList } from '@/data/common'
</script>
