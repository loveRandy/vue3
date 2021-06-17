<template>
  <a-sub-menu :key="menuInfo.key" v-bind="$attrs">
    <template #title>
      <span>
        <MailOutlined /><span>{{ menuInfo.meta.title }}</span>
      </span>
    </template>
    <template v-for="item in menuInfo.children" :key="item.name">
      <template v-if="!item.children">
        <a-menu-item :key="item.key" @click="goRoute(item)">
          <PieChartOutlined />
          <span>{{ item.meta.title }}</span>
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu :menu-info="item" :key="item.name" />
      </template>
    </template>
  </a-sub-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PieChartOutlined, MailOutlined } from '@ant-design/icons-vue'
export default defineComponent({
  name: 'SubMenu',
  components: {
    PieChartOutlined,
    MailOutlined,
  },
  props: {
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, context) {
    const goRoute = (item: any) => {
      context.emit('click', item)
    }
    return {
      goRoute,
    }
  },
})
</script>

<style>
</style>