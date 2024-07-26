<template>
    <section class="gallery-slider">
        <div class="swiper js-gallery-slider">
            <div
                class="justify-start js-lightbox swiper-wrapper h-[300px] md:h-[450px] lg:h-[700px]"
            >
                <a
                    v-for="(slide, slideIndex) in galleryList"
                    :key="slideIndex"
                    class="swiper-slide gallery-item bg-no-repeat bg-cover bg-center"
                    :style="`background-image: url(${slide.img})`"
                    :href="slide.img"
                >
                    <div class="gallery-item__cover">
                        <div class="font-bold mb-3 text-[20px] lg:text-[32px]">Lixiang</div>
                        <div class="font-medium text-[16px] lg:text-[20px]">
                            Современный, авангардный, футуристический, инновационный
                        </div>
                    </div>
                </a>
            </div>
            <!-- <div class="slider-pagination mt-10"></div> -->
            <div class="slider-control slider-control--prev text-white">
                <div class="svg-icon svg-icon--stroke">
                    <svg><use xlink:href="#arrow-left"></use></svg>
                </div>
            </div>
            <div class="slider-control slider-control--next text-white">
                <div class="svg-icon svg-icon--stroke">
                    <svg><use xlink:href="#arrow-right"></use></svg>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { galleryList } from '@/data/common'
</script>
