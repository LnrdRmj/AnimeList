import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VueObserveVisibility from 'vue-observe-visibility'

const app = createApp(App)
app.use(VueObserveVisibility)
app.mount('#app')
