<template>
  <div class="icons-list">
    <SmileTwoTone />
    <HeartTwoTone twoToneColor="#eb2f96" />
    <CheckCircleTwoTone twoToneColor="#52c41a" />
  </div>
</template>
<script>
import { SmileTwoTone, HeartTwoTone, CheckCircleTwoTone } from '@ant-design/icons-vue';
export default {
  components: {
    SmileTwoTone,
    HeartTwoTone,
    CheckCircleTwoTone,
  },
};
</script>
<style scoped>
.icons-list :deep(.anticon) {
  margin-right: 6px;
  font-size: 24px;
}
</style>