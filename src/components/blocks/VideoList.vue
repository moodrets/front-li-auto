<template>
    <section class="py-24">
        <div class="centered">
            <div class="text-center h1 mb-12">Больше о Lixiang в наших видео</div>
        </div>
        <div
            class="text-[0] md:gap-0 md:columns-2 lg:columns-3 xl:columns-4"
            style="column-fill: balance-all"
        >
            <div
                v-for="(video, videoIndex) in videoList"
                :key="videoIndex"
                class="inline-block w-full"
                data-animated-block="zoomIn"
            >
                <video :src="video.src" class="w-full" controls></video>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { videoList } from '@/data/common'
</script>
