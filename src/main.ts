// styles
import '@/styles/main.scss'

// vue imports
import { createApp } from 'vue'
import App from '@/App.vue'

// vue global components
import MobileMenuTrigger from '@/components/common/MobileMenuTrigger.vue'
import SocialList from '@/components/common/SocialList.vue'

createApp(App)
    .component('mobiletrigger', MobileMenuTrigger)
    .component('sociallist', SocialList)
    .mount('#app')
