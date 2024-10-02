import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'
import CareersView from '@/views/CareersView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ServicesView from '@/views/ServicesView.vue'
import CareersJobForm from '@/components/CareersJobForm.vue'
import CareersJobsDetail from '@/components/CareersJobsDetail.vue'
import ContactView from '@/views/ContactView.vue'

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
      component: ServicesView,
    },
    {
      path: '/careers',
      name: 'careers',
      component: CareersView,
    },
    {
      path: '/careers/job-detail',
      name: 'careers-jobs-detail',
      component: CareersJobsDetail,
    },
    {
      path: '/careers/apply',
      name: 'careers-job-form',
      component: CareersJobForm,
    },
   
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactView,
    },
   
  ]
})

export default router
