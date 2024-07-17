<template>
    <div
        class="svg-icon flex-none cursor-pointer"
        @click.prevent="offcanvasController.toggle('mobileMenu')"
    >
        <svg v-if="offcanvasController.isOpen('mobileMenu')"><use xlink:href="#close"></use></svg>
        <svg v-else><use xlink:href="#menu"></use></svg>
    </div>
</template>

<script lang="ts" setup>
import { offcanvasController } from '@/composables/useOffcanvas'
</script>
