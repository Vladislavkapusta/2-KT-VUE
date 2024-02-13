import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import PrivateView from '../views/PrivateView.vue'
import PublicView from '../views/PublicView.vue'

function checkAuth(){
  let password = localStorage.getItem('password')
  if (password === 'admin'){
    return true
  } else{
    return false
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'public',
      component: PublicView
    },
    {
      path: '/private',
      name: 'private',
      component: PrivateView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})

router.beforeEach((to, from, next)=>{
  if (to.path==='/private' && !checkAuth()){
    next('/login')
  }else{
    next()
  }
})

export default router
