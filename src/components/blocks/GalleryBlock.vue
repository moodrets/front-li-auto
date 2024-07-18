<template>
    <section class="py-10 lg:py-24">
        <div class="gallery-list js-lightbox">
            <a
                v-for="(item, index) in galleryList"
                :key="index"
                :href="item.img"
                data-caption="Описание картинки"
                class="gallery-item"
                data-animated-block="zoomIn"
            >
                <img class="object-cover w-full" :src="item.img" alt="" />
                <div class="gallery-item__cover">
                    <div class="font-bold mb-3 text-[20px] lg:text-[32px]">Lixiang</div>
                    <div class="font-medium text-[16px] lg:text-[20px]">
                        Современный, авангардный, футуристический, инновационный
                    </div>
                </div>
            </a>
        </div>
    </section>
</template>

<script setup lang="ts">
import { galleryList } from '@/data/common'
</script>
