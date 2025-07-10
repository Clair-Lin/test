<template>
  <div class="login-container">
    <h2>登录</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-row">
        <label class="form-label">用户名：</label>
        <input v-model="username" required />
      </div>
      <div class="form-row">
        <label class="form-label">密码：</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">登录</button>
    </form>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

function handleLogin() {
  if (!username.value) {
    error.value = '请输入用户名'
    return
  }
  // 模拟权限判断
  const role = username.value === 'admin' ? 'admin' : 'user'
  sessionStorage.setItem('role', role)
  sessionStorage.setItem('username', username.value)
  router.push('/home')
}
</script>

<style scoped>
.login-container {
  max-width: 320px;
  margin: 80px auto;
  padding: 32px;
  border: 1px solid #eee;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 8px #eee;
}
.login-container h2 {
  text-align: center;
  margin-bottom: 24px;
}
.form-row {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
.form-label {
  display: inline-block;
  width: 60px;
  text-align: right;
  margin-right: 8px;
  white-space: nowrap;
}
.login-container input {
  flex: 1;
  min-width: 0;
  padding: 6px 8px;
}
button {
  width: 100%;
  padding: 8px;
  background: #42b983;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}
.error {
  color: red;
  margin-top: 12px;
  text-align: center;
}
</style> 