// styles
import '@/styles/main.scss'

// vue imports
import { createApp } from 'vue'
import App from '@/App.vue'

// vue global components
import MobileMenuTrigger from '@/components/common/MobileMenuTrigger.vue'
import SocialPopover from '@/components/common/SocialPopover.vue'
import SubscribeForm from '@/components/common/SubscribeForm.vue'

createApp(App)
    .component('mobiletrigger', MobileMenuTrigger)
    .component('socialpopover', SocialPopover)
    .component('subscribeform', SubscribeForm)
    .mount('#app')
