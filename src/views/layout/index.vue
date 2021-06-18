<template>
  <a-layout class="ant-layout ant-layout-has-sider layout-wrapper">
    <!-- 左侧边栏 -->
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo"></div>
      <Menu />
    </a-layout-sider>
    <!-- 右侧栏 -->
    <a-layout class="ant-layout">
      <!-- 头部 -->
      <a-layout-header
        class="ant-layout-header app-header"
        style="background: #fff; padding: 0"
      >
        <div class="log_out" @click="logout">
          <icon-font type="icon-tuichu" />
        </div>
      </a-layout-header>

      <!-- 内容区 -->
      <a-layout-content
        class="ant-layout-content layout-content"
        style="margin: 0 16px"
      >
        <Tabs />
        <div>
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer class="ant-layout-footer" style="text-align: center">
        Ant Design ©2021 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Tabs from '@/components/tabs/index.vue'
import Menu from './menu/index.vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { CHANGEROUTE ,ADDROUTINGPATHDATA} from '@/store/mutation-types'
export default defineComponent({
  components: {
    Tabs,
    Menu,
  },
  setup() {
    const router = useRouter()
    const store = useStore()
    const logout = () => {
      store.commit(CHANGEROUTE, [])
      store.commit(ADDROUTINGPATHDATA, [])
      localStorage.removeItem('token')
      router.push({ path: '/login' })
    }
    return {
      collapsed: ref<boolean>(false),
      logout,
    }
  },
})
</script>
<style lang="less">
.layout-wrapper {
  min-height: 100vh !important;
  .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
    display:flex;
    justify-content: center;
    align-items: center;
    color:#ccc;
  }

  .site-layout .site-layout-background {
    background: #fff;
  }
  [data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
  }
  .log_out {
    float: right;
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 15px;
    svg {
      font-size: 30px;
      margin-right: 20px;
      cursor: pointer;
      fill: #1890ff;
    }
  }
}
</style>
