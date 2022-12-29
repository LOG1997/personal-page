<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { getResume } from "@/api/main/about";
let resumeData = reactive({ data: {} as any });
const getResumeData = () => {
  getResume({}).then((res) => {
    resumeData.data = res.data;
    console.log(resumeData.data);
  });
};
onMounted(() => {
  getResumeData();
});
</script>

<template>
  <div class="resume-container">
    <div class="resume-header">
      <div class="resume-header_icon">
        <svg-icon :name="'avatar'"></svg-icon>
      </div>
      <div class="resume-header_name">
        <span> {{ resumeData.data.name }}</span>
        <span class="resume-header_name__age"> {{ resumeData.data.age }}</span>
        <p>{{ resumeData.data.position }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.resume-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .resume-header {
    width: 100%;
    height: 150px;
    margin-top: 40px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    .resume-header_icon {
      width: 100px;
      height: 100px;
      margin: 0 20px;
      background-color: aliceblue;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      svg {
        margin: 0 auto;
        width: 80px;
        height: 80px;
      }
    }
    .resume-header_name {
      span {
        font-size: 30px;
        line-height: 60px;
        font-weight: 600;
      }
      p {
        font-size: 16px;
        font-weight: 400;
      }
      .resume-header_name__age {
        font-size: 16px;
        font-weight: normal;
        margin-left: 30px;
      }
    }
  }
}
</style>
