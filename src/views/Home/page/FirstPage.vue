<script setup lang="ts">
import SvgIcon from "@/components/SvgIcon/index.vue";
</script>

<template>
  <div class="main-container w-500px mx-auto">
    <div class="main-text w-500px mx-auto">
      <h3 class="main-text-h3 text-48px mb-6">Hey!It's Zhangwenlei</h3>
      <h2 class="main-text-h2 text-64px font-bold mb-10">Call me Log</h2>
      <p class="main-text-desc text-36px mb-6">
        a front-end <span class="text-gray-500">programmer</span>
      </p>
    </div>
    <div class="link-group flex gap-2 w-500px mx-auto">
      <div class="github-link">
        <a href="https://github.com/LOG1997" target="_blank">
          <SvgIcon name="github"
        /></a>
      </div>
      <div class="instagram-link">
        <a href="https://www.instagram.com/log.z1997/" target="_blank">
          <SvgIcon name="instagram"
        /></a>
      </div>
    </div>
    <div class="button-container w-500px mx-auto">
      <button
        class="button w-30 h-10 mt-6 text-center leading-8 rounded-lg cursor-pointer"
      >
        Blog
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.github-link {
  &:hover {
    color: #797979;
  }
}
.instagram-link {
  &:hover {
    color: #bc1e99;
  }
}
.button {
  background-image: linear-gradient(
    45deg,
    #ff9a9e 0%,
    #fad0c4 99%,
    #fad0c4 100%
  );
  &:hover {
    background-image: linear-gradient(
      45deg,
      #fad0c4 0%,
      #ff9a9e 99%,
      #ff9a9e 100%
    );
  }
}
</style>
