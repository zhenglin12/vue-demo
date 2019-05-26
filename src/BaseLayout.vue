<template>
  <!-- <div id="app"> -->
    <el-container>
      <el-header class="header-flex" style="padding: 0;">
        <span class="header-title">GTC</span>
        <span class="header-nav">
        <Header />
        </span>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  <!-- </div> -->
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";

export default {
  name: "BaseLayout",
  components: {
    // HelloWorld,
    Header
    // Task
  }
};
</script>

<style>
.header-flex {
  display: flex;
}
.header-title {
  flex-shrink: 0;
  width: 200px;
  font-weight: 500;
  font-size: 20px;
  height: 60px;
  color: #fff;
  line-height: 60px;
  text-align: center;
  background: rgb(84, 92, 100);
}
.header-nav {
  flex-shrink: 0;
  flex-grow: 1;
}
</style>

