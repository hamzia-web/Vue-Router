import { createApp } from 'vue'
import App from './App.vue'

//Configure font-awesome and bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import '@fortawesome/fontawesome-free/css/all.css'

import router from './router'

createApp(App).use(router).mount('#app')
