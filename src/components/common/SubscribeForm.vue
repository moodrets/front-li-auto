<template>
    <form @submit.prevent="onSubmit" class="relative">
        <input type="email" placeholder="E-Mail Adress" class="form-control pr-8" />
        <div class="svg-icon svg-icon--stroke size-4 pointer-events-none absolute right-0 top-4">
            <svg><use xlink:href="#subscribe"></use></svg>
        </div>
    </form>
</template>

<script lang="ts" setup>
async function onSubmit() {}
</script>
