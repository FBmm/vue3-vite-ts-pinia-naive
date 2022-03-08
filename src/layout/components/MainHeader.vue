<template>
  <div class="main-header">
    <div class="main-header__logo">
      <img src="" alt="" />
    </div>
    <div class="main-header__right">
      <n-dropdown trigger="click" :options="options">
        <div class="user-avatar">
          <img
            src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
            alt=""
          />
        </div>
      </n-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, h } from 'vue'
import type { Component } from 'vue'
import { NIcon } from 'naive-ui'
import {
  PersonCircleOutline as UserIcon,
  LocationOutline as LocalIcon,
  LogOutOutline as LogoutIcon,
} from '@vicons/ionicons5'

const renderIcon = (icon: Component) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon),
    })
  }
}

export default defineComponent({
  setup() {
    return {
      options: [
        {
          label: '用户资料',
          key: 'profile',
          icon: renderIcon(UserIcon),
        },
        {
          label: '项目地址',
          key: 'projectLocation',
          icon: renderIcon(LocalIcon),
        },
        {
          label: '退出登录',
          key: 'logout',
          icon: renderIcon(LogoutIcon),
        },
      ],
    }
  },
})
</script>

<style lang="scss">
.main-header {
  height: 56px;
  box-sizing: border-box;
  border-bottom: 1px solid #e6ebed;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  .main-header__logo {}
  .main-header__right {
    .user-avatar {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }
  }
}
</style>
