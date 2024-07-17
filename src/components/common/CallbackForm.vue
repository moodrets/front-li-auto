<template>
    <div class="relative">
        <div
            v-if="state.loading"
            class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
            <div class="spinner"></div>
        </div>
        <form
            @submit.prevent="onSubmit"
            :class="[formClass, { 'pointer-events-none opacity-30': state.loading }]"
        >
            <div>
                <input type="text" :class="formControllClass" placeholder="Ф.И.О" />
            </div>
            <div>
                <input type="email" :class="formControllClass" placeholder="Почта" />
            </div>
            <div :class="placement === 'block' ? 'lg:col-span-2' : ''">
                <input type="tel" :class="formControllClass" placeholder="Номер телефона" />
            </div>
            <div :class="placement === 'block' ? 'lg:col-span-2' : ''">
                <textarea
                    :class="[formControllClass, `resize-none h-[120px]`]"
                    placeholder="Сообщение"
                ></textarea>
            </div>
            <div :class="placement === 'block' ? 'lg:col-span-2 mt-5' : ''">
                <button
                    type="submit"
                    class="app-button"
                    :class="placement === 'block' ? 'app-button--light' : 'app-button--secondary'"
                >
                    Оставить заявку
                </button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'

const props = withDefaults(
    defineProps<{
        theme: 'light' | 'dark' | ''
        placement: 'block' | 'modal'
    }>(),
    {
        placement: 'block',
        theme: '',
    }
)

const state = reactive({
    loading: false,
})

const formControllClass = computed<string>(() => {
    return `form-control${props.theme ? ` form-control--${props.theme}` : ''}`
})

const formClass = computed<string>(() => {
    return props.placement === 'block' ? 'grid gap-x-5 gap-y-5 lg:grid-cols-2' : 'grid gap-5'
})

async function onSubmit() {
    state.loading = true
}
</script>
