<template>
  <div class="menu-container">
    <template v-for="item in menuList">
      <!-- 下拉项 -->
      <a-sub-menu v-if="item.children && item.children.length> 0" :key="item.path">
        <template #title>
          <span>
            <icon-font :type="item.meta.icon" />
            <span>{{ item.title }}</span>
          </span>
        </template>
				<dynamic-menu :menuList="item.children"></dynamic-menu>
        <a-menu-item :key="item.path">{{ item.title }}</a-menu-item>
      </a-sub-menu>

      <!-- 单个项 -->
      <a-menu-item v-else :key="item.path">
        <icon-font :type="item.meta.icon" />
        <span>{{ item.title }}</span>
      </a-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: 'dynamic-menu',
  props: {
    menuList: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  methods: {
    gotoRoute(name) {
      this.$router.push({ name })
    },
  },
}
</script>