<template>
  <el-menu :default-active="activeIndex" background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">任务概览</el-menu-item>
  <el-menu-item index="2">我的job</el-menu-item>
  <el-menu-item index="3">我的收藏</el-menu-item>
</el-menu>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>

</style>
