<script setup lang="ts">
import Header from "./Header/index.vue";
import Footer from "./Footer/index.vue";
</script>

<template>
  <div class="container w-screen">
    <header class="head-container">
      <Header></Header>
    </header>
    <main class="main-container w-screen box-content min-h-[calc(100vh-10rem)]">
      <!-- <router-view class="main-container-content"></router-view> -->
    </main>
    <footer class="footer-container w-screen">
      <Footer></Footer>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.main-container {
  // 居中
  .main-container-content {
    // 居中
  }
}
.head-container {
  width: 100vw;
  display: flex;
  justify-content: center;
}
.footer-container {
}
</style>
