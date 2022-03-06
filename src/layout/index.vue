<template>
  <n-layout has-sider>
    <n-layout-sider bordered :width="240">
      <n-menu :options="menuOptions" children-field="children" />
    </n-layout-sider>
    <n-layout />
  </n-layout>
</template>

<script lang="ts">
import { defineComponent, h, ref, Component, computed } from 'vue'
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { RouterLink, useRouter } from 'vue-router'

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

function getMenuOptions(routes): MenuOption[] {
  console.log(routes)
  const menuOptions = []
  routes.forEach((route) => {
    menuOptions.push({
      key: route.name,
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
    })
  })
  return menuOptions
}

export default defineComponent({
  setup() {
    const router = useRouter()
    const menuOptions = getMenuOptions(router.getRoutes())
    return {
      menuOptions,
    }
  },
})
</script>
