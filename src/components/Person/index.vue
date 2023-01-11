<script setup lang="ts">
import { Developer } from "@/types/projectList";
// 头像、名字、主页链接
defineProps<{
  person_info: Developer;
}>();
</script>

<template>
  <div class="person-container">
    <a :href="person_info.link" target="_blank">
      <div class="person-avatar">
        <img :src="person_info.avatar" alt="" />
      </div>
      <div class="person-name">
        {{ person_info.name }}
      </div></a
    >
  </div>
</template>

<style scoped lang="scss">
.person-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  .person-avatar {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .person-name {
    margin-top: 10px;
    font-size: 14px;
    color: #333;
  }
}
</style>
