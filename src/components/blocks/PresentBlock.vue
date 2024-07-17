<template>
    <section class="py-10 lg:py-24 text-white">
        <div class="centered">
            <div
                class="p-5 md:p-10 bg-dark rounded-3xl bg-cover bg-center bg-no-repeat backface-cover backface-cover--dark before:bg-opacity-75"
                :style="`background-image: url(${basePath}img/present-block-bg.png)`"
            >
                <div class="lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center">
                    <div data-animated-block="fadeInRight">
                        <div class="text-[28px] mb-6 lg:text-[40px]">
                            Один шаг к автомобилю<br />
                            Вашей мечты
                        </div>
                        <p class="text-[16px] mb-6 lg:text-[20px]">
                            Сделайте свой выбор, выберите<br />
                            Lixiang с нашей помощью
                        </p>
                        <a
                            href="#"
                            class="app-button app-button--light"
                            v-modal-call="{ name: 'callbackModal' }"
                            >Подробнее</a
                        >
                    </div>
                    <div class="mt-10 lg:mt-0" data-animated-block="fadeInLeft">
                        <img :src="`${basePath}img/present-block-pic.jpg`" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { basePath } from '@/data/common'
</script>
