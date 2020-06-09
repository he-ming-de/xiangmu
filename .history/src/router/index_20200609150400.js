import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: ()=>import('../views/register/Register'),
    meta:{
      title:'注册'
    }
  },
  {
    path: '/landingpage',
    name: 'Landingpage',
    component: ()=>import('../views/landingpage/Landingpage'),
    meta:{
      title:'登录'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next)=>{
  document.
 let user = JSON.parse(localStorage.getItem('user'))
 if(user){
  next()
 } else {
   next('/landingpage')
 }
})
export default router
