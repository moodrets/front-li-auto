// styles
import '@/styles/main.scss'

// vue imports
import { createApp } from 'vue'
import App from '@/App.vue'

// vue global components
import MobileMenuTrigger from '@/components/common/MobileMenuTrigger.vue'
import SocialPopover from '@/components/common/SocialPopover.vue'
import SubscribeForm from '@/components/common/SubscribeForm.vue'
import Accordion from '@/components/common/Accordion.vue'
import CallbackForm from '@/components/common/CallbackForm.vue'

createApp(App)
    .component('callbackform', CallbackForm)
    .component('accordion', Accordion)
    .component('mobiletrigger', MobileMenuTrigger)
    .component('socialpopover', SocialPopover)
    .component('subscribeform', SubscribeForm)
    .mount('#app')
