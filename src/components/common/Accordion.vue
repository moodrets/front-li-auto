<template>
    <div class="app-acc" :class="{ 'is-open': state.isOpen }">
        <div class="app-acc__title" @click="onToggle">
            <div class="flex-1"><slot name="title"></slot></div>
            <div v-if="state.isOpen" class="flex-none svg-icon svg-icon--stroke">
                <svg><use xlink:href="#minus"></use></svg>
            </div>
            <div v-else class="flex-none svg-icon svg-icon--stroke">
                <svg><use xlink:href="#plus"></use></svg>
            </div>
        </div>
        <div class="app-acc__body">
            <div style="min-height: 0">
                <slot name="body" :isOpen="state.isOpen" :toggle="onToggle"></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, reactive } from 'vue'

const props = defineProps<{
    open?: boolean
}>()

const state = reactive({
    isOpen: false,
})

function onToggle() {
    state.isOpen = !state.isOpen
}

onBeforeMount(() => {
    if (state.isOpen !== props.open) {
        state.isOpen = props.open
    }
})
</script>

<style lang="scss">
.app-acc {
    + .app-acc {
        @apply mt-6;
    }

    &__title {
        @apply select-none
            cursor-pointer 
            flex-1
            flex
            items-center
            gap-5
            text-[17px]
            font-semibold;
    }

    &__body {
        @apply overflow-hidden
            grid
            transition-all
            duration-300
            text-base
            leading-normal;
        grid-template-rows: 0fr;
    }

    &.is-open {
        .app-acc__body {
            grid-template-rows: 1fr;
            @apply py-5;
        }
    }
}
</style>
