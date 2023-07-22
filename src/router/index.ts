import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import SearchPage from '../pages/SearchPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/search',
    name: 'search',
    component: SearchPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
