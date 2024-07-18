<template>
    <section class="models-block py-10 lg:py-24">
        <div class="centered">
            <div class="grid lg:grid-cols-2 gap-3">
                <div
                    v-for="(model, modelIndex) in modelsList"
                    :key="modelIndex"
                    class="overflow-hidden"
                    :class="modelIndex === 0 ? 'lg:col-span-2' : ''"
                    data-animated-block="fadeInRight"
                >
                    <div
                        class="relative transition-all duration-300 p-6 text-center bg-center bg-no-repeat bg-cover h-[270px] hover:scale-[1.05] md:h-[320px] lg:h-[600px] lg:p-10"
                        :style="`background-image: url(${model.img})`"
                    >
                        <div class="mb-5 text-[36px] font-semibold md:text-[48px]">
                            {{ model.title }}
                        </div>
                        <div>
                            <a
                                href="#"
                                class="app-button app-button--light"
                                v-modal-call="{ name: 'configurator' }"
                                >Узнать больше</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { modelsList } from '@/data/common'
</script>
