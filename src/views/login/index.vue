<template>
  <div class="login-container">
    <n-form class="login-form">
      <n-form-item label="用户名">
        <n-input placeholder="请输入用户名"></n-input>
      </n-form-item>
      <n-form-item label="密码">
        <n-input placeholder="请输入密码"></n-input>
      </n-form-item>
      <n-form-item>
        <n-button attr-type="button" block @click="handleLogin">
          登陆
        </n-button>
      </n-form-item>
    </n-form>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/modules/user'

const router = useRouter()
const userStore = useUserStore()

function handleLogin() {
  userStore.login().then((res) => {
    router.replace('/home')
  })
}
</script>

<style lang="scss">
.login-container {
  position: relative;
  height: 100%;
  background: #f1f8fd;
  .login-form {
    position: absolute;
    right: 10%;
    top: 50%;
    transform: translateY(-50%);
    width: 300px;
    padding: 36px 24px;
    background: #fff;
    border-radius: 4px;
  }
}
</style>
