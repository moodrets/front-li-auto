import Swiper from 'swiper'
import { EffectCoverflow, Grid, Navigation, Pagination } from 'swiper/modules'

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

export function initGallerySlider() {
    const swiper = new Swiper('.js-gallery-slider', {
        modules: [Navigation, Pagination, Grid],
        speed: 700,
        slidesPerView: 1,
        breakpoints: {
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                },
            },
            1366: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                },
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

export function initVideoSlider() {
    const swiper = new Swiper('.js-video-slider', {
        modules: [EffectCoverflow, Navigation, Pagination, Grid],
        speed: 700,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 40,
        simulateTouch: false,
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
        },
        breakpoints: {
            768: {
                coverflowEffect: {
                    rotate: 20,
                },
            },
            1366: {},
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
        on: {
            slideChange(swiper: Swiper) {
                swiper.el
                    .querySelectorAll<HTMLVideoElement>(`.swiper-slide video`)
                    .forEach((video) => video.pause())

                let currentVideo = swiper.el.querySelector<HTMLVideoElement>(
                    `.swiper-slide:nth-child(${swiper.activeIndex + 1}) video`
                )
                currentVideo?.play()
            },
        },
    })

    return swiper
}
