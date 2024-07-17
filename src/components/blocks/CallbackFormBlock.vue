<template>
    <section
        class="py-10 lg:py-24 text-white bg-[#161616] bg-cover bg-center bg-no-repeat backface-cover backface-cover--dark before:bg-opacity-40"
        :style="`background-image: url(${basePath}img/callback-form-bg.png)`"
        data-animated-block="fadeInUp"
    >
        <div class="centered">
            <div class="lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center">
                <div class="text-center lg:text-left">
                    <div class="h1">Заявка</div>
                    <div class="text-[18px] lg:text-[26px]">
                        Заполните форму сбоку или<br />
                        свяжитесь с нами по телефону.
                    </div>
                </div>
                <div class="mt-10 lg:mt-0">
                    <callbackform></callbackform>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { basePath } from '@/data/common'
</script>
