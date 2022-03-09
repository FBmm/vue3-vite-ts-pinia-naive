<template>
  <MainHeader class="main-header"></MainHeader>
  <n-layout class="layout-container" position="absolute" has-sider>
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      show-trigger
    >
      <n-menu
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
        children-field="children"
      />
    </n-layout-sider>
    <n-layout-content content-style="background: #f1f5f9;padding: 16px 24px;">
      <router-view></router-view>
    </n-layout-content>
  </n-layout>
</template>

<script lang="ts">
import { defineComponent, h, Component } from 'vue'
import type { MenuOption } from 'naive-ui'
import { RouterLink, useRouter, RouteRecord } from 'vue-router'
import MainHeader from './components/MainHeader.vue'
import { renderIcon } from '@/utils/render'

function getMenuOptions(routes: RouteRecord[]): MenuOption[] {
  console.log(routes)
  const menuOptions: MenuOption[] = []
  routes.forEach((route) => {
    menuOptions.push({
      key: route.name as string,
      label: () =>
        h(
          RouterLink,
          {
            to: {
              path: route.path,
            },
          },
          { default: () => route.name },
        ),
      icon: route.meta.icon && renderIcon(route.meta.icon),
    })
  })
  return menuOptions
}

export default defineComponent({
  components: { MainHeader },
  setup() {
    const router = useRouter()
    const menuOptions = getMenuOptions(router.getRoutes())
    return {
      menuOptions,
    }
  },
})
</script>

<style lang="scss">
.main-header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
}
.layout-container.n-layout {
  top: 56px;
}
</style>
