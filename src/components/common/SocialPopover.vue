<template>
    <div class="social-popover">
        <div class="social-popover__trigger">
            <div class="svg-icon">
                <svg><use xlink:href="#social-email"></use></svg>
            </div>
        </div>
        <div class="social-popover__list"></div>
    </div>
</template>

<style lang="scss">
.social-popover {
    @apply fixed right-4 bottom-4 md:bottom-16 xl:right-10 xl:bottom-10;

    &__trigger {
        @apply p-3
            cursor-pointer
            bg-white
            rounded-full
            xl:p-4;

        .svg-icon {
            @apply block w-7 h-7 xl:w-10 xl:h-10;
        }
    }

    &__list {
    }
}
</style>
