<template>
  <div>
    <a-menu
      class="a-menu"
      :selected-keys="selectedKeys"
      v-model:openKeys="openKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
    >
      <template v-for="item in list" :key="item.name">
        <template v-if="!item.children">
          <a-menu-item :key="item.name" @click="goRoute(item)">
            <icon-font :type="item.meta.icon" />
            <span>{{ item.meta.title }}</span>
          </a-menu-item>
        </template>
        <template v-else>
          <sub-menu @propsClick="goRoute" :menu-info="item" :key="item.name" />
        </template>
      </template>
    </a-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import SubMenu from './sub-menu.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { CHANGEACTIVEKEYS } from '@/store/mutation-types'
export default defineComponent({
  setup() {
    const store = useStore()
    const list = computed(() => store.state.menuList)
    const selectedKeys = computed(() => store.state.selectedKeys)
    const router = useRouter()
    const collapsed = ref<boolean>(false)
    const { matched } = router.currentRoute.value
    const openKeysList = matched.map((item) => item.name)
    const openKeys = ref(openKeysList)

    const toggleCollapsed = () => {
      collapsed.value = !collapsed.value
    }
    const goRoute = (item: any) => {
      if (router.hasRoute(item.name)) {
        router.push({ name: item.name })
        store.commit(CHANGEACTIVEKEYS, [item.name])
      } else {
        router.push({ name: 'Error403' })
      }
    }
    return {
      list,
      collapsed,
      toggleCollapsed,
      goRoute,
      selectedKeys,
      openKeys,
    }
  },
  components: {
    'sub-menu': SubMenu,
  },
})
</script>

<style lang="less" >
.a-menu {
  .anticon {
    vertical-align: sub;
    svg {
      font-size: 20px;
    }
  }
}
</style>