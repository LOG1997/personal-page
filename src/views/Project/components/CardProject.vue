<script setup lang="ts">
import { ref, reactive } from "vue";
import { iProjectlist } from "@/types/projectList";
import { emit } from "process";
defineProps<{
  cardData: iProjectlist;
}>();
const emits = defineEmits(["handleMouseOver"]);
const handleMouseOver = (cardData: iProjectlist) => {
  // console.log("mouse over", Date());
  emits("handleMouseOver", cardData);
};
</script>

<template>
  <div class="card_container" @mouseover="handleMouseOver(cardData)">
    <div class="card_icon">
      <img :src="cardData.projectIcon" alt="" />
    </div>
    <div class="card_name">{{ cardData.projecName }}</div>
    <div class="card_status">{{ cardData.currentStatus }}</div>
  </div>
</template>

<style scoped lang="scss">
.card_container {
  cursor: pointer;
  width: 18%;
  min-width: 150px;
  height: 140px;
  margin-right: 2.5%;
  margin-bottom: 2.5%;
  border-radius: 20px;
  position: relative;
  @include themeChildify {
    background-color: themed("important-bg-color");
    box-shadow: themed("shawdow-color");
    color: themed("dark-card-color");
  }
  backdrop-filter: blur(20px);
  &:hover {
    @include themeChildify {
      background-image: linear-gradient(
        -120deg,
        themed("important-color"),
        themed("border-color")
      );
      color: themed("font-color");
      background-color: themed("important-color");
      box-shadow: themed("shawdow-color-hover");
    }
    backdrop-filter: blur(10px);
    .card_status {
      @include themeChildify {
        color: themed("font-color-second");
      }
    }
  }
  .card_icon {
    width: 60%;
    margin: 10px;
    img {
      width: 50px;
      height: 50px;
    }
  }
  .card_name {
    margin: 10px;
    position: absolute;
    top: 10px;
    left: 80px;
    font-size: 24px;
    font-weight: 600;
  }
  .card_status {
    width: 100%;
    margin: 10px;
    position: absolute;
    bottom: 5px;
    left: 80px;
    font-size: 12px;
    font-weight: 600;
    @include themeChildify {
      color: darken(themed("dark-card-color"), 50%);
    }
  }
}
.card_container:nth-child(5n) {
  margin-right: 0;
}
</style>
