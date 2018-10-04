import Vue from 'vue'
import Router from 'vue-router'

import DashboardLayout from '@/components/Dashboard/Layout/DashboardLayout'
import NotFound from '@/components/CommonViews/PageNotFound'

// Admin Pages
import Overview from '@/components/Dashboard/Views/Home'
import Settings from '@/components/Dashboard/Views/Settings'
import VueMDC from '@/components/Dashboard/Views/VueMDC'
import Material from '@/components/Dashboard/Views/Material'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'DashboardLayout',
      component: DashboardLayout
    },
    {
      path: '/admin',
      component: DashboardLayout,
      children: [
        {
          path: 'overview',
          name: 'Overview',
          component: Overview
        },
        {
          path: 'vue/mdc',
          name: 'vueMdc',
          component: VueMDC
        },
        {
          path: 'material',
          name: 'Material',
          component: Material
        },
        {
          path: 'settings',
          name: 'Settings',
          component: Settings
        }
      ]
    },
    {
      path: '*', component: NotFound
    }
  ]
})

export default router
