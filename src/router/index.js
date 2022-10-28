import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import AppView from '../views/AppView.vue'

import LoginCom from '../components/LoginCom.vue'
import Register from '../components/Register.vue'
import UserProfile from '../components/UserProfile.vue'


const routes = [
  {
    path: '/',
    name: 'login_register',
    component: LoginView,
    children: [
      {
        path: '/login',
        component: LoginCom
      },
      {
        path: '/register',
        component: Register
      }
    ]
  },
  
  {
    path: '/',
    name: 'app',

    component: AppView,
    children: [
      {
        path: '/user-info',
        component: UserProfile
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
