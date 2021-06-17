<template>
  <a-layout class="layout-wrapper">
    <!-- 左侧边栏 -->
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <Menu />
    </a-layout-sider>
    <!-- 右侧栏 -->
    <a-layout>
      <!-- 头部 -->
      <a-layout-header style="background: #fff; padding: 0" />

      <!-- 内容区 -->
      <a-layout-content style="margin: 0 16px">
        <!-- <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb> -->
        <Tabs />
        <div>
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2021 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Tabs from '@/components/tabs/index.vue'
import Menu from './menu/index.vue'
export default defineComponent({
  components: {
    Tabs,
    Menu,
  },
  setup() {
    return {
      collapsed: ref<boolean>(false),
    }
  },
})
</script>
<style lang="less">
.layout-wrapper {
  min-height: 100vh;
  .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }

  .site-layout .site-layout-background {
    background: #fff;
  }
  [data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
  }
}
</style>
