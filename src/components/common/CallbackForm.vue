<template>
    <form @submit.prevent="onSubmit" class="grid gap-x-5 gap-y-5 lg:grid-cols-2">
        <div>
            <input type="text" class="form-control" placeholder="Ф.И.О" />
        </div>
        <div>
            <input type="email" class="form-control" placeholder="Почта" />
        </div>
        <div class="lg:col-span-2">
            <input type="tel" class="form-control" placeholder="Номер телефона" />
        </div>
        <div class="lg:col-span-2">
            <textarea class="form-control resize-none h-[120px]" placeholder="Сообщение"></textarea>
        </div>
        <div class="lg:col-span-2 mt-5">
            <button type="submit" class="app-button app-button--light">Оставить заявку</button>
        </div>
    </form>
</template>

<script setup lang="ts">
async function onSubmit() {}
</script>
