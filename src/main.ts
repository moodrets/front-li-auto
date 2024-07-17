// styles
import 'swiper/css/bundle'
import '@/styles/main.scss'

// scripts
import { initPartnersSlider, initReviewsSlider } from '@/scripts/initSliders'
import { initScrollAnimate } from '@/scripts/initScrollAnimate'

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

// vue app
createApp(App)
    .directive('scroll-to', ScrollToDirective)
    .directive('modal-call', ModalDirective)
    .component('modal', Modal)
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
})
