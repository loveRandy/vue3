
<template>
  <div class="tabs-content">
    <a-tabs
      type="editable-card"
      v-model:activeKey="activeKey"
      @tabClick="tabClick"
       @edit="onEdit"
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
      const whiteList = ['404', '403', '500', 'login']
      if (whiteList.indexOf(name) === -1) {
        let data = {
          path: fullPath,
          keepAlive: meta.keepAlive,
          title: meta.title,
        }
        //获取新的tabs列表
        const list = getNewList(data)
        store.commit(ADDROUTINGPATHDATA, list)
        store.commit(CHANGEACTIVEKEYS, [name])
        activeKey.value = fullPath
      }
    }

    //点击close按钮
    const onEdit = (targetKey) => {
      const l = [...store.state.routingPathData]
      if(l.length <= 1){return}
      const i= l.findIndex(item=>item.path === targetKey)
      const index = i === 0 ? 1 :i

      const list =l.filter(item=>{
        return item.path !== targetKey
      })
        store.commit(ADDROUTINGPATHDATA, list)
        const path = list[index - 1 ].path
        router.push({ path: path })
    }

    const getNewList = (paramsData) => {
        // 判断RoutingPathData内是否存在新的路由不存在则插入
      let flag = true
      const list =[...store.state.routingPathData]
      for (let i = 0; i < list.length; i++) {
        if (list[i].path == paramsData.path) {
          flag = false
          break
        }
      }
      if (flag) {
        list.push(paramsData)
      }
      return list
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
      onEdit
    }
  },
})
</script>