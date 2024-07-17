<template>
    <div class="social-popover">
        <div
            class="social-popover__icon social-popover__icon--trigger"
            @click.prevent="isOpen = !isOpen"
        >
            <div class="svg-icon svg-icon--close">
                <svg v-if="isOpen"><use xlink:href="#close"></use></svg>
                <svg v-else><use xlink:href="#social-email"></use></svg>
            </div>
        </div>
        <div class="social-popover__list" :class="{ 'is-open': isOpen }">
            <a target="_blank" href="#" class="social-popover__icon social-popover__icon--vk">
                <div class="svg-icon">
                    <svg><use xlink:href="#vk"></use></svg>
                </div>
            </a>
            <a target="_blank" href="#" class="social-popover__icon social-popover__icon--telegram">
                <div class="svg-icon">
                    <svg><use xlink:href="#telegram"></use></svg>
                </div>
            </a>
            <a target="_blank" href="#" class="social-popover__icon social-popover__icon--whatsapp">
                <div class="svg-icon">
                    <svg><use xlink:href="#whatsapp"></use></svg>
                </div>
            </a>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isOpen = ref<boolean>(false)
</script>

<style lang="scss">
.social-popover {
    @apply fixed right-4 z-[50] bottom-4 md:bottom-16 xl:right-10 xl:bottom-10;

    &__list {
        @apply absolute 
            bottom-full
            transition-all
            duration-300
            right-0
            opacity-0 
            pointer-events-none
            translate-y-[40px];

        &.is-open {
            @apply opacity-100 pointer-events-auto translate-y-0;
        }
    }

    &__icon {
        @apply cursor-pointer
            bg-white
            rounded-full
            shadow-lg
            mb-4
            flex
            items-center
            justify-center
            transition-all
            duration-300
            size-[50px]
            lg:size-[70px];

        .svg-icon {
            @apply size-[60%];

            svg {
                @apply block size-full;
            }
        }

        &--whatsapp {
            @apply text-white bg-[#67C15E];
        }

        &--telegram {
            @apply text-white bg-[#40B3E0];
        }

        &--vk {
            @apply text-white bg-[#345E90];
        }

        &--trigger {
            @apply mb-0;
        }
    }
}
</style>
