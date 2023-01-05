<script setup lang="ts">
import SwitchTheme from "./components/SwitchTheme/index.vue";
import Nav from "./components/Nav/index.vue";
</script>

<template>
  <div class="header-container">
    <div class="header-logo">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <Nav></Nav>
    </div>
    <div class="header-info">
      <SwitchTheme></SwitchTheme>
      <!-- <el-dropdown :hide-on-click="true" @command="selectTheme">
        <button class="w-20 h-10 rounded-3xl bg-blue-400">切换主题</button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="default">default</el-dropdown-item>
            <el-dropdown-item command="blue_theme">blue_theme</el-dropdown-item>
            <el-dropdown-item command="dark_theme">dark_theme</el-dropdown-item>
            <el-dropdown-item command="purple_theme"
              >purple_theme</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown> -->
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-container {
  // background-color: $bg-color;
  display: flex;
  height: 60px;
  vertical-align: middle;
  min-width: 1200px;
  .header-logo {
    flex: 1;
    display: flex;
    align-items: center;
    .logo {
      width: 2rem;
      height: 2rem;
      margin-right: 1rem;
    }
  }
}
</style>
