<script setup lang="ts">
import { navList } from "./config";
import SwitchTheme from "./components/SwitchTheme/index.vue";

const skip = (url: string) => {
  window.open(url, "_self");
};
</script>

<template>
  <div class="header-container flex justify-between max-w-1200px mx-auto">
    <div class="header-logo w-14 flex justify-center items-center">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
    </div>
    <div class="flex gap-8">
      <nav>
        <ul class="header-nav flex gap-10">
          <li
            v-for="item in navList.data"
            :key="item.id"
            class="header-nav-item cursor-pointer hover:text-gray-100/60"
            @click="skip(item.url)"
          >
            <span class="leading-56px"> {{ item.name }}</span>
          </li>
        </ul>
      </nav>
      <div></div>
      <div class="header-info mt-1">
        <SwitchTheme></SwitchTheme>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
