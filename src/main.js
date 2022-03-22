import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/en-GB'
import 'quasar/src/css/index.sass'

createApp(App)
    .use(router)
    .use(store)
    .use(Quasar, {quasarLang})
    .mount('#app')
