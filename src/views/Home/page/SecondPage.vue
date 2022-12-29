<script setup lang="ts">
import { ISkill } from "@/types/home";
import CardVue from "../components/Card/index.vue";
defineProps<{
  skillData: ISkill[];
}>();
</script>

<template>
  <div class="card-container">
    <CardVue
      calss="card-item__father"
      v-for="item in skillData"
      :key="item.id"
      :skillItem="item"
    ></CardVue>
  </div>
  <!-- <p>{{ skillData }}</p> -->
</template>

<style scoped lang="scss">
.card-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
}
</style>
