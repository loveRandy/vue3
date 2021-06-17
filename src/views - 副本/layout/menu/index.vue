<template>
  <div>
    <a-menu
      :selected-keys="selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
    >
      <template v-for="item in list" :key="item.name">
        <template v-if="!item.children">
          <a-menu-item :key="item.path" @click="goRoute(item)">
            <icon-font :type="item.meta.icon" />
            <span>{{ item.meta.title }}</span>
          </a-menu-item>
        </template>
        <template v-else>
          <sub-menu @click="goRoute" :menu-info="item" :key="item.name" />
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
    console.log(selectedKeys)

    const router = useRouter()
    const collapsed = ref<boolean>(false)

    const toggleCollapsed = () => {
      collapsed.value = !collapsed.value
    }
    const goRoute = (item: any) => {
			if(router.hasRoute(item.name)){
				router.push({ name:item.name })
        store.commit(CHANGEACTIVEKEYS, [item.name])
			}else{
				router.push({name:'Error403'})
			}
    }
    return {
      list,
      collapsed,
      toggleCollapsed,
      goRoute,
      selectedKeys,
    }
  },
  components: {
    'sub-menu': SubMenu,
  },
})
</script>