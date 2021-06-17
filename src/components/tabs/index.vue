
<template>
  <div class="tabs-content">
    <a-tabs
      type="editable-card"
      v-model:activeKey="activeKey"
      @tabClick="tabClick"
    >
      <a-tab-pane
        v-for="item in routingPathData"
        :key="item.path"
        :tab="item.title"
      ></a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import { defineComponent, computed, watch, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { ADDROUTINGPATHDATA, CHANGEACTIVEKEYS } from '@/store/mutation-types'
export default defineComponent({
  name: 'tabs',
  setup() {
    const store = useStore()
    const routingPathData = computed(() => store.state.routingPathData)
    let activeKey = ref('')
    const route = useRoute()
    const router = useRouter()

    //路由改变时把路由存进redux中并且设置选中的a-menu-item
    const routeChange = () => {
      const { fullPath, meta, name } = router.currentRoute.value
      if (name !== '404') {
        let data = {
          path: fullPath,
          keepAlive: meta.keepAlive,
          title: meta.title,
        }
        store.commit(ADDROUTINGPATHDATA, data)
        store.commit(CHANGEACTIVEKEYS, [name])
        activeKey.value = fullPath
      }
    }

    //点击tab的回调事件
    const tabClick = (path) => {
      router.push({ path: path })
    }

    //监听路由改变
    watch(
      () => route.fullPath,
      () => {
        routeChange()
      }
    )

    onMounted(() => {
      routeChange()
    })

    return {
      routingPathData,
      activeKey,
      tabClick,
    }
  },
})
</script>