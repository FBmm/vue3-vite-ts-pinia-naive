<template>
  <div class="login-container">
    <div class="login-panel">
      <h3>系统登陆</h3>
      <n-form class="login-form">
        <n-form-item label="用户名">
          <n-input placeholder="请输入用户名">
            <template #prefix>
              <n-icon :component="Person" />
            </template>
          </n-input>
        </n-form-item>
        <n-form-item label="密码">
          <n-input placeholder="请输入密码">
            <template #prefix>
              <n-icon :component="LockClosedSharp" />
            </template>
          </n-input>
        </n-form-item>
        <n-form-item>
          <n-button attr-type="button" block @click="handleLogin">
            登陆
          </n-button>
        </n-form-item>
      </n-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/modules/user'

export default defineComponent({
  setup() {
    const router = useRouter()
    const userStore = useUserStore()
    function handleLogin() {
      userStore.login().then((res) => {
        router.replace('/home')
      })
    }
    return {
      handleLogin,
    }
  },
})
</script>

<style lang="scss">
.login-container {
  position: relative;
  height: 100%;
  background: #f1f8fd;
  .login-panel {
    position: absolute;
    right: 10%;
    top: 50%;
    transform: translateY(-50%);
    width: 300px;
    padding: 16px 24px;
    background: #fff;
    border-radius: 4px;
  }
}
</style>
