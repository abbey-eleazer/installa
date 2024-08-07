import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'
import CareersView from '@/views/CareersView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ServicesPage from '@/components/ServicesPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutView,
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesPage,
    },
    {
      path: '/careers',
      name: 'careers',
      component: CareersView,
    },
   
  ]
})

export default router
