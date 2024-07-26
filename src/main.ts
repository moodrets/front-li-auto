// styles
import 'swiper/css/bundle'
import 'baguettebox.js/dist/baguetteBox.min.css'
import '@/styles/main.scss'

// scripts
import {
    initGallerySlider,
    initPartnersSlider,
    initReviewsSlider,
    initVideoSlider,
} from '@/scripts/initSliders'
import { initScrollAnimate } from '@/scripts/initScrollAnimate'
import { initGallery } from '@/scripts/initGallery'

// vue imports
import { createApp } from 'vue'
import App from '@/App.vue'

// vue directives
import ScrollToDirective from '@/directives/scrollTo'
import ModalDirective from '@/directives/modal'

// vue global components
import MobileMenuTrigger from '@/components/common/MobileMenuTrigger.vue'
import SocialPopover from '@/components/common/SocialPopover.vue'
import SubscribeForm from '@/components/common/SubscribeForm.vue'
import Accordion from '@/components/common/Accordion.vue'
import CallbackForm from '@/components/common/CallbackForm.vue'
import Modal from '@/components/common/Modal.vue'
import Offcanvas from '@/components/common/Offcanvas.vue'

// vue app
createApp(App)
    .directive('scroll-to', ScrollToDirective)
    .directive('modal-call', ModalDirective)
    .component('modal', Modal)
    .component('offcanvas', Offcanvas)
    .component('callbackform', CallbackForm)
    .component('accordion', Accordion)
    .component('mobiletrigger', MobileMenuTrigger)
    .component('socialpopover', SocialPopover)
    .component('subscribeform', SubscribeForm)
    .mount('#app')

document.addEventListener('DOMContentLoaded', () => {
    initPartnersSlider()
    initReviewsSlider()
    initScrollAnimate()
    initGallerySlider()
    initVideoSlider()
    initGallery()
})
