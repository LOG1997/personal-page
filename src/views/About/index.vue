<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { getResume } from "@/api/main/about";
import { iPersonResume } from "@/types/resume";
import ResumeHeaderVue from "./components/UserHeader.vue";
import ResumeBaseInfoVue from "./components/BaseInfo.vue";
import ExperienceInfoVue from "./components/ExperienceInfo.vue";
let resumeData = ref({} as iPersonResume);
const getResumeData = () => {
  getResume({}).then((res) => {
    resumeData.value = res.data;
  });
};
onMounted(() => {
  getResumeData();
});
</script>

<template>
  <div class="resume-container">
    <div class="resume-background"></div>
    <ResumeHeaderVue :resumeData="resumeData"></ResumeHeaderVue>
    <ResumeBaseInfoVue :resumeData="resumeData"></ResumeBaseInfoVue>
    <ExperienceInfoVue :resumeData="resumeData"></ExperienceInfoVue>
  </div>
</template>

<style scoped lang="scss">
.resume-container {
  margin: 0 auto;
  height: 100%;
  width: 100vw;
  // min-width: 1200px;
  display: flex;
  flex-direction: column;
  .resume-background {
    height: 200px;
    background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);
    background-size: 300% 300%;
    animation: gradientBG 5s ease infinite;
  }
}

@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
