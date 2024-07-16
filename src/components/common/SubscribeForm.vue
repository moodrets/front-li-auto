<template>
    <form @submit.prevent="onSubmit" class="relative">
        <input required type="email" placeholder="E-Mail Adress" class="form-control pr-9" />
        <button type="submit" class="p-2 absolute right-0 top-3">
            <div class="block svg-icon svg-icon--stroke size-4">
                <svg><use xlink:href="#subscribe"></use></svg>
            </div>
        </button>
    </form>
</template>

<script lang="ts" setup>
async function onSubmit() {}
</script>
