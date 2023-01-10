<script setup lang="ts">
import { iPersonResume } from "@/types/resume";
defineProps<{
  resumeData: iPersonResume;
}>();
</script>

<template>
  <div class="resume-experience">
    <div class="base-title">工作经历</div>
    <div class="resume-experience-container container">
      <div
        class="resume-experience-item"
        v-for="item in resumeData.job_experience"
        :key="item.company"
      >
        <div class="resume-experience-item-title">
          <div class="resume-experience-item-title-comPic">
            <svg-icon
              class="icon"
              :name="item.companyPic || 'tengxun'"
            ></svg-icon>
          </div>
          <div class="resume-experience-item-specific">
            <div class="resume-experience-item-title-position">
              {{ item.position }}
            </div>
            <div class="resume-experience-item-title-company">
              {{ item.company }}
            </div>
          </div>
        </div>
        <div class="resume-experience-item-title-time">
          {{ item.time_slot }}
        </div>
        <div class="resume-experience-item-time"></div>
        <div class="resume-experience-item-bottom"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.resume-experience {
  width: 100%;
  max-width: 1200px;
  // height: 400px;
  padding: 30px 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #6f7072;
  .base-title {
    font-size: 24px;
    font-weight: 600;
    // line-height: 48px;
    width: 30%;
    max-width: 150px;
    margin-right: 10px;
  }
  .resume-experience-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .resume-experience-item {
      cursor: pointer;
      margin-bottom: 30px;
      width: 45%;
      min-height: 150px;
      border-radius: 10px;
      @include themeChildify {
        background-color: themed("important-bg-color");
      }

      .resume-experience-item-title {
        margin-top: 10px;
        display: flex;
        padding-bottom: 20px;
        .resume-experience-item-title-comPic {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin: 5px;
          @include themeChildify {
            background-color: themed("important-bg-color");
          }
          .icon {
            width: 40px;
            height: 40px;
            margin: 5px auto;
          }
        }
        .resume-experience-item-specific {
          .resume-experience-item-title-position {
            font-weight: 600;
            font-size: 24px;
            @include themeChildify {
              color: themed("font-color");
            }
          }
          .resume-experience-item-title-company {
            font-weight: 400;
            font-size: 16px;
            @include themeChildify {
              color: themed("font-color-second");
            }
          }
        }
      }
      .resume-experience-item-title-time {
        margin: 0 0 20px 50px;
        line-height: 30px;
        border-bottom: 1px solid #a7a8a9;
      }
    }
  }
}
@media (max-width: 1200px) {
  .resume-experience {
    flex-direction: column;
    .resume-experience-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      .resume-experience-item {
        width: 100%;
      }
    }
    .base-title {
      width: 100%;
      max-width: 100%;
      margin-bottom: 20px;
    }
  }
}
</style>
