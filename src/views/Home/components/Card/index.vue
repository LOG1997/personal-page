<script setup lang="ts">
import { ref, reactive } from "vue";
import { ISkill } from "@/types/home";
defineProps<{
  skillItem: ISkill;
}>();
</script>

<template>
  <div class="card-item">
    <div class="card-icon">
      <svg-icon :name="skillItem.icon"></svg-icon>
    </div>
    <div class="card-title">
      <span class="card-title__title">{{ skillItem.title }}</span>
      <span class="card-title__version">{{ skillItem.version }}</span>
    </div>
    <div class="card-desc">{{ skillItem.desc }}</div>
  </div>
</template>

<style scoped lang="scss">
.card-item {
  width: 30%;
  height: 200px;
  margin-bottom: 80px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  &:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }
  .card-icon {
    width: 100%;
    height: 100px;
    position: absolute;
    top: -70px;
    svg {
      width: 150px;
      height: 150px;
    }
  }
  .card-title {
    width: 100%;
    height: 50px;
    margin-top: -30px;
    .card-title__title {
      font-weight: 600;
      font-size: 40px;
    }
    .card-title__version {
      font-size: 16px;
      color: #999;
    }
  }
  .card-desc {
    margin-left: 120px;
    text-align: left;
    font-size: 16px;
    color: #999;
  }
}
</style>
