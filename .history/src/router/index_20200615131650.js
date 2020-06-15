import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Public from '../views/public/Public'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/',
    name: 'public',
    component: Public,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
        meta: {
          title: '首页'
        },
      },
      {
        path: '/out',
        name: 'Out',
        component:  () => import('../views/out/Out'),
        meta: {
          title: '退出系统'
        },
      },
      {
        path: '/label',
        name: 'Label',
        component: ()=>import('../views/label/Label'),
        meta: {
          title: '标签'
        },
      },
      {
        path: '/iexport',
        name: 'Lexport',
        component: ()=>import('../views/iexport/Iexport'),
        meta: {
          title: '导出excel'
        },
      },
      {
        path: '/upload',
        name: 'Upload',
        component:  () => import('../views/upload/Upload'),
        meta: {
          title: '图片上传'
        },
      },
      {
        path: '/mpaging',
        name: 'Mpaging',
        component:  () => import('../views/mpaging/Mpaging'),
        meta: {
          title: '表格分页'
        },
      },
      {
        path: '/published',
        name: 'Published',
        component:  () => import('../views/published/Published'),
        meta: {
          title: '已发布'
        },
      },
      {
        path: '/statistics',
        name: 'Statistics',
        component:  () => import('../views/statistics/Statistics'),
        meta: {
          title: '统计'
        },
      },
      {
        path: '/publish',
        name: 'Publish',
        component:  () => import('../views/publish/Publish'),
        meta: {
          title: '发表文章'
        },
      },
      
    ]
  },
  {
    path: '/publish',
    name: 'Publish',
    component:  () => import('../views/publish/Publish'),
    meta: {
      title: '查看详情页'
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/register/Register'),
    meta: {
      title: '注册'
    }
  },
  {
    path: '/landingpage',
    name: 'Landingpage',
    component: () => import('../views/landingpage/Landingpage'),
    meta: {
      title: '登录'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  let user = localStorage.getItem('user')
  if (to.path === '/landingpage' || to.path === "/register") {
    next()
  } else {
    if (user) {
      next()
    } else {
      next('/landingpage')
    }
  }
})
export default router
