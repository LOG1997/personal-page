<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import FirstPageVue from "./page/FirstPage.vue";
import SecondPageVue from "./page/SecondPage.vue";
import { getSkill } from "@/api/main/home";
import { ISkill } from "@/types/home";
let skillData = reactive({ data: [] as ISkill[] });
const getSkillData = async () => {
  getSkill({}).then((res) => {
    skillData.data = res.data.data;
    console.log("😈skillData:", skillData);
  });
};
onMounted(() => {
  getSkillData();
});
</script>

<template>
  <FirstPageVue class="first-page"></FirstPageVue>
  <SecondPageVue
    class="second-page"
    :skillData="skillData.data"
  ></SecondPageVue>
</template>

<style scoped lang="scss">
.first-page {
  padding-top: 50px;
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  height: calc(100vh - 60px);
}
.second-page {
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
}
// .logo {
//   height: 6em;
//   padding: 1.5em;
//   will-change: filter;
//   z-index: 0;
// }
// .logo:hover {
//   filter: drop-shadow(0 0 2em #646cffaa);
// }
// .logo.vue:hover {
//   filter: drop-shadow(0 0 2em #42b883aa);
// }
</style>
