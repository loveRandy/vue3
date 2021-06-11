
<template>
  <div class="tabs-content">
    <a-tabs type="editable-card"  v-model:activeKey="activeKey">
      <a-tab-pane
        v-for="(item) in routingPathData"
        :key="item.path"
        :tab="item.title"
      ></a-tab-pane>
    </a-tabs>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed, watch, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { ADDROUTINGPATHDATA } from '@/store/mutation-types'
export default defineComponent({
  name: 'tabs',
  setup() {
    const store = useStore()
    const routingPathData = computed(() => store.state.routingPathData)
    let activeKey = ref('')
    const route = useRoute()
    const router = useRouter()

		function changeTabs(){
			const {  fullPath, meta } = router.currentRoute.value
      let data = {
        path: fullPath,
        keepAlive: meta.keepAlive,
        title: meta.title,
      }
      store.commit(ADDROUTINGPATHDATA, data)
      activeKey.value = fullPath
		}

    watch(
      () => route.fullPath,
      () => {
				changeTabs()
      }
    )

    onMounted(() => {
      changeTabs()
    })

    return {
      routingPathData,
      activeKey,
    }
  },
})
</script>