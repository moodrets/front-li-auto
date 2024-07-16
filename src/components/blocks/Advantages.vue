<template>
    <section class="py-10 lg:py-24 text-center">
        <div class="centered">
            <div class="h1 mb-10">
                Выгодные условия сотрудничества<br />
                для наших клиентов
            </div>
            <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                <div v-for="(adv, advIndex) in advantages" :key="advIndex">
                    <div class="flex justify-center mb-4">
                        <img :src="adv.img" alt="" />
                    </div>
                    <div class="mb-4 text-[20px] font-medium lg:text-[24px]">
                        {{ adv.title }}
                    </div>
                    <div class="text-[16px] lg:text-[18px]">
                        {{ adv.desc }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { advantages } from '@/data/common'
</script>
