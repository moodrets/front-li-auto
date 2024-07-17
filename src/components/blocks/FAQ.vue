<template>
    <section
        class="py-10 lg:py-24 bg-cover bg-center bg-no-repeat backface-cover"
        :style="`background-image: url(${basePath}img/faq-bg.jpg)`"
        data-animated-block="fadeInUp"
    >
        <div class="centered">
            <div class="h1 text-center">Что вы хотели знать о Liхiang</div>
            <accordion>
                <template #title>Что такое последовательный гибрид?</template>
                <template #body>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit voluptatum dicta
                    culpa? Explicabo, labore quos. Architecto, quam, itaque velit, illo esse magnam
                    quisquam sequi voluptates possimus quas totam consectetur repudiandae.
                </template>
            </accordion>
            <accordion>
                <template #title
                    >Каковы основные преимущества гибридного двигателя по сравнению с обычным
                    двигателем внутреннего сгорания?</template
                >
                <template #body>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit voluptatum dicta
                    culpa? Explicabo, labore quos. Architecto, quam, itaque velit, illo esse magnam
                    quisquam sequi voluptates possimus quas totam consectetur repudiandae.
                </template>
            </accordion>
            <accordion>
                <template #title>Насколько безопасен электромобиль?</template>
                <template #body>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit voluptatum dicta
                    culpa? Explicabo, labore quos. Architecto, quam, itaque velit, illo esse magnam
                    quisquam sequi voluptates possimus quas totam consectetur repudiandae.
                </template>
            </accordion>
            <accordion>
                <template #title>Какие расстояния может преодолевать электромобиль</template>
                <template #body>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit voluptatum dicta
                    culpa? Explicabo, labore quos. Architecto, quam, itaque velit, illo esse magnam
                    quisquam sequi voluptates possimus quas totam consectetur repudiandae.
                </template>
            </accordion>
        </div>
    </section>
</template>

<script setup lang="ts">
import { basePath } from '@/data/common'
</script>
