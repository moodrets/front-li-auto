<template>
    <div v-cloak class="app-offcanvas" :class="{ 'is-open': isOpen }" @click="clickHandler">
        <div class="app-offcanvas__body">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { offcanvasController } from '@/composables/useOffcanvas'

const props = defineProps<{
    name: string
}>()

offcanvasController.state.value[props.name] = false

const isOpen = computed<boolean>(() => {
    return offcanvasController.state.value[props.name]
})

function clickHandler(event: Event) {
    const target = event.target as HTMLElement
    if (target.classList.contains('app-offcanvas')) {
        offcanvasController.toggle(props.name)
    }
}
</script>

<style lang="scss">
.app-offcanvas {
    @apply fixed
        left-0
        top-0
        bottom-0
        right-0
        z-[100]
        transition-all
        duration-300
        pointer-events-none
        opacity-0
        backdrop-blur-sm
        bg-dark
        bg-opacity-50;

    &__body {
        @apply transition-all
            duration-300
            -translate-x-[120%]
            bg-white
            w-[280px]
            h-full
            overflow-y-auto
            p-5
            pb-10
            shadow-xl;
    }

    &.is-open {
        @apply opacity-100
            pointer-events-auto;

        .app-offcanvas__body {
            @apply translate-x-[0];
        }
    }
}
</style>
