/* Set up using Vue 3 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
library.add(faMoon)
library.add(faSun)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
