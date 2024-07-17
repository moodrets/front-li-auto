import Swiper from 'swiper'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'

export function initPartnersSlider() {
    const swiper = new Swiper('.js-partners-slider', {
        modules: [Navigation, Pagination],
        speed: 700,
        slidesPerView: 1,
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            1366: {
                slidesPerView: 5,
            },
        },
        navigation: {
            nextEl: '.slider-control--next',
            prevEl: '.slider-control--prev',
        },
        pagination: {
            clickable: true,
            el: '.slider-pagination',
            bulletClass: 'slider-pagination__item',
            bulletActiveClass: 'is-active',
        },
    })

    return swiper
}

export function initReviewsSlider() {
    const swiper = new Swiper('.js-reviews-slider', {
        modules: [Navigation, Pagination],
        speed: 700,
        slidesPerView: 1,
        centeredSlides: true,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1366: {
                slidesPerView: 3,
            },
        },
        navigation: {
            nextEl: '.slider-control--next',
            prevEl: '.slider-control--prev',
        },
        pagination: {
            clickable: true,
            el: '.slider-pagination',
            bulletClass: 'slider-pagination__item',
            bulletActiveClass: 'is-active',
        },
    })

    return swiper
}
