import { createRouter, createWebHistory } from 'vue-router'

// 路由懒加载页面组件（后续会创建这些组件）
const Login = () => import('./components/Login.vue')
const Home = () => import('./components/Home.vue')

const routes = [
  { path: '/', component: Login },
  { path: '/login', component: Login },
  { path: '/home', component: Home }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 