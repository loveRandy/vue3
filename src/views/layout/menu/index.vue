<template>
  <a-menu-item key="1">
    <pie-chart-outlined />
    <span>Option 1</span>
  </a-menu-item>
  <a-menu-item key="2">
    <desktop-outlined />
    <span>Option 2</span>
  </a-menu-item>
  <a-sub-menu key="sub1">
    <template #title>
      <span>
        <user-outlined />
        <span>User</span>
      </span>
    </template>
    <a-menu-item key="3">Tom</a-menu-item>
    <a-menu-item key="4">Bill</a-menu-item>
    <a-menu-item key="5">Alex</a-menu-item>
  </a-sub-menu>
</template>

<script>
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined
} from '@ant-design/icons-vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined
  },
})
</script>