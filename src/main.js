import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VueObserveVisibility from 'vue-observe-visibility'

import { createRouter, createWebHashHistory } from 'vue-router'
import $ from 'jquery'
window.$ = $

import Home from './components/Home.vue'
import AnimePageInfo from './components/AnimePageInfo.vue'

const routes =  [
                    { path: '/', component: Home },
                    {
                        path: '/animeInfo/:name',
                        component: AnimePageInfo,
                        name: 'animepageinfo',
                        props: true
                    },
                ]

const router = createRouter({
        history: createWebHashHistory(),
        routes, // short for `routes: routes`
    })

const app = createApp(App)
app.use(VueObserveVisibility)
app.use(router)
app.mount('#app')
