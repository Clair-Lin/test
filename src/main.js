import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

// 在 main.js 中添加全局错误处理
app.config.errorHandler = (err) => {
    console.error('Vue error:', err)
  }