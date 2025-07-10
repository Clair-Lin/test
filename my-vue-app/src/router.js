import { createRouter, createWebHistory } from 'vue-router'

// 路由懒加载页面组件（后续会创建这些组件）
const Login = () => import('./components/Login.vue')
const Home = () => import('./components/Home.vue')

const routes = [
  { path: '/login', component: Login },
  { path: '/', component: Home },
  // 添加通配符路由
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 