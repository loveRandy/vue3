<template>
  <a-sub-menu :key="menuInfo.key" v-bind="$attrs">
    <template #title>
      <span>
        <icon-font :type="menuInfo.meta.icon" />
        <span>{{ menuInfo.meta.title }}</span>
      </span>
    </template>
    <template v-for="item in menuInfo.children" :key="item.name">
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
  </a-sub-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SubMenu',
  props: {
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, context) {
    const goRoute = (item: any) => {
      context.emit('propsClick', item)
    }
    return {
      goRoute,
    }
  },
})
</script>

<style>
</style>