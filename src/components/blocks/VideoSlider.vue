<template>
    <section class="pt-24 max-w-[1920px] mx-auto">
        <div class="centered">
            <div class="text-center h1 mb-12" data-animated-block="zoomIn">
                Больше о Lixiang в наших видео
            </div>
        </div>
        <div class="swiper js-video-slider" data-animated-block="fadeInUp">
            <div class="swiper-wrapper">
                <div
                    class="swiper-slide w-[220px] md:w-[320px] lg:w-1/3 xl:w-1/5"
                    v-for="(video, videoIndex) in videoList"
                    :key="videoIndex"
                >
                    <video :src="video.src" class="w-full" controls></video>
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
    </section>
</template>

<script setup lang="ts">
import { videoList } from '@/data/common'
</script>
