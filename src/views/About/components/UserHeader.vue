<script setup lang="ts">
import { iPersonResume } from "@/types/resume";
defineProps<{
  resumeData: iPersonResume;
}>();
</script>

<template>
  <div class="resume-header">
    <div class="resume-userinfo">
      <div class="resume-userinfo-avatar">
        <img
          class="resume-userinfo-avatar_image"
          :src="resumeData.avatar"
          alt=""
        />
      </div>
      <div class="resume-userinfo-user">
        <div class="resume-userinfo-name">
          <span>{{ resumeData.name }}</span>
        </div>
        <div class="resume-userinfo-desc">
          <span>{{ resumeData.desc }}</span>
        </div>
      </div>
    </div>
    <div class="resume-user-button">
      <a :href="resumeData.github" target="_blank">
        <button class="w-30 h-10 leading-10">
          <svg-icon :name="'github'"></svg-icon>
          <p>Github</p>
        </button></a
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.resume-header {
  min-height: 160px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 20px;
  border-bottom: 1px solid #6f7072;
  .resume-userinfo {
    display: flex;
    margin-right: 20px;
    .resume-userinfo-avatar {
      .resume-userinfo-avatar_image {
        min-width: 120px;
        max-width: 150px;
        border-radius: 100px;
        margin-top: -50px;
        @include themeChildify {
          border: 2px solid themed("font-color");
        }
      }
    }
    .resume-userinfo-user {
      margin-left: 20px;
      margin-top: 20px;
      .resume-userinfo-name {
        font-size: 30px;
        font-weight: 600;
        @include themeChildify {
          color: themed("font-color");
        }
      }
      .resume-userinfo-desc {
        font-size: 16px;
        @include themeChildify {
          color: themed("font-color-second");
        }
      }
    }
    @media (min-width: 1200px) {
      width: 800px;
    }
  }
  .resume-user-button {
    margin-top: 20px;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #6f7072;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.3s;
      @include themeChildify {
        background-color: themed("header-bg-color");
      }
      &:hover {
        @include themeChildify {
          background-color: themed("header-bg-color-hover");
          color: themed("font-color");
        }
      }
      svg-icon {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
    }
  }
  @media (max-width: 1200px) {
    .resume-user-button {
      margin-left: 170px;
    }
  }
}
</style>
