<template>
    <section class="py-10 lg:py-24" data-animated-block="fadeInUp">
        <div class="centered">
            <div class="h1 text-center mb-10">Что клиенты говорят о нас</div>
            <div class="swiper pt-5 js-reviews-slider">
                <div class="swiper-wrapper reviews-slider items-center">
                    <div
                        v-for="(slide, slideIndex) in reviewsList"
                        :key="slideIndex"
                        class="swiper-slide px-4"
                    >
                        <div class="shadow-lg p-5 rounded-xl">
                            <div class="flex items-center mb-4 gap-4">
                                <div class="flex-none w-16 h-16 rounded-full">
                                    <img
                                        class="rounder-[inherit] object-cover"
                                        :src="slide.avatar"
                                        alt=""
                                    />
                                </div>
                                <div class="leading-[1.0]">
                                    <div class="font-bold mb-2 text-[20px] lg:text-[24px]">
                                        {{ slide.name }}
                                    </div>
                                    <div class="text-[16px] lg:text-[18px]">{{ slide.func }}</div>
                                </div>
                            </div>
                            <div class="mb-4">
                                <div class="flex gap-1">
                                    <div
                                        v-for="(_, starIndex) in 5"
                                        class="svg-icon w-6 h-6 text-warning"
                                        :class="slide.rating > starIndex ? '' : 'svg-icon--stroke'"
                                    >
                                        <svg><use xlink:href="#star"></use></svg>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center font-bold mb-4 text-[18px] lg:text-[22px]">
                                {{ slide.title }}
                            </div>
                            <div class="text-center text-[15px] lg:text-[17px]">
                                {{ slide.text }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-center gap-8 justify-center mt-14 text-dirt">
                    <div class="slider-control slider-control--static slider-control--prev">
                        <div class="svg-icon svg-icon--stroke">
                            <svg><use xlink:href="#arrow-left"></use></svg>
                        </div>
                    </div>
                    <div class="slider-pagination"></div>
                    <div class="slider-control slider-control--static slider-control--next">
                        <div class="svg-icon svg-icon--stroke">
                            <svg><use xlink:href="#arrow-right"></use></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { reviewsList } from '@/data/common'
</script>
