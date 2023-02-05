<script setup lang="ts">
import { Developer } from "@/types/projectList";
// 头像、名字、主页链接
defineProps<{
  person_info: Developer[];
}>();
</script>

<template>
  <div class="flex">
    <div
      class="person-container"
      v-for="item in person_info"
      :key="item.developersName"
    >
      <a :href="item.developersGithub" target="_blank">
        <div class="person-avatar">
          <img :src="item.developersAvatar" alt="" />
        </div>
        <div class="person-name">
          {{ item.developersName }}
        </div></a
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.person-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8%;
  min-width: 80px;
  height: 100px;
  .person-avatar {
    margin: 0 auto;
    width: 30px;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }
  .person-name {
    margin-top: 10px;
    font-size: 14px;
    width: 80px;
    @include themeChildify {
      color: themed("font-color-second");
    }
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
