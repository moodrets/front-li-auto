<template>
    <div
        v-cloak
        tabindex="0"
        class="app-modal"
        ref="appModalRef"
        :class="{ 'is-open': isOpen }"
        :style="{ '--app-modal-width': `${props.width}px` }"
        @click="clickHandler"
        @keydown.esc="onClose"
    >
        <div class="app-modal__body">
            <div class="app-modal__close" @click="onClose">
                <div class="svg-icon w-6 h-6 md:w-8 md:h-8">
                    <svg><use xlink:href="#close"></use></svg>
                </div>
            </div>
            <slot :onClose="onClose" :isOpen="isOpen"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { modalController } from '@/composables/useModal'
import { computed, onUpdated, ref } from 'vue'

const props = withDefaults(
    defineProps<{
        width?: number
        name: string
    }>(),
    {
        name: 'defaultModal',
        width: 480,
    }
)

modalController.state.value[props.name] = false

const appModalRef = ref<HTMLElement>()

const isOpen = computed<boolean>(() => {
    return modalController.state.value[props.name]
})

function onClose() {
    modalController.close(props.name)
}

function clickHandler(event: Event) {
    const target = event.target as HTMLElement

    if (target.classList.contains('app-modal') || !target.closest('.app-modal')) {
        modalController.close(props.name)
    }
}

onUpdated(() => {
    if (modalController.state.value[props.name] === true) {
        appModalRef?.value?.focus()
    }
    if (modalController.state.value[props.name] === false) {
        appModalRef?.value?.blur()
    }
})
</script>

<style lang="scss">
.app-modal {
    $this: &;

    @apply flex
        fixed
        z-[200]
        left-0
        right-0
        top-0
        bottom-0
        bg-dark
        bg-opacity-60
        backdrop-blur-sm
        overflow-y-auto
        p-5
        opacity-0
        pointer-events-none
        transition-all
        duration-300
        lg:p-8;

    &__close {
        @apply cursor-pointer
            absolute
            right-4
            top-4
            z-10;

        .svg-icon {
            @apply block;
        }
    }

    &__body {
        @apply relative
            m-auto
            max-w-full
            w-[--app-modal-width]
            rounded-xl
            bg-white
            p-5
            transition-all
            duration-300
            translate-y-[40px]
            lg:p-8;
    }

    &.is-open {
        @apply opacity-100
            pointer-events-auto;

        .app-modal__body {
            @apply translate-y-0;
        }
    }

    &--configurator {
        @apply p-0 lg:p-0 bg-white;

        #{$this}__close {
            @apply top-5;
        }

        #{$this}__body {
            @apply translate-y-0 bg-transparent m-0 p-0 w-full rounded-none flex flex-col;
        }
    }
}
</style>
