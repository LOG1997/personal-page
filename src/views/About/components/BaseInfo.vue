<script setup lang="ts">
import { iPersonResume } from "@/types/resume";
defineProps<{
  resumeData: iPersonResume;
}>();
</script>

<template>
  <div class="resume-baseinfo container">
    <div class="base-title">基本信息</div>
    <div class="resume-baseinfo-container container">
      <div class="resume-baseinfo-introduce">
        <p>{{ resumeData.introduce }}</p>
        <div class="resume-baseinfo-contact">
          <div class="resume-baseinfo-contact-item">
            <div class="contact-item-title">
              <svg-icon :name="'email'"></svg-icon>
              <span>邮箱</span>
            </div>
            <p>{{ resumeData.email }}</p>
          </div>
          <div class="resume-baseinfo-contact-item">
            <div class="contact-item-title">
              <svg-icon :name="'phone'"></svg-icon>
              <span>手机</span>
            </div>
            <p>{{ resumeData.phone }}</p>
          </div>
          <div class="resume-baseinfo-contact-item">
            <div class="contact-item-title">
              <svg-icon :name="'location'"></svg-icon>
              <span>地址</span>
            </div>
            <p>{{ resumeData.address }}</p>
          </div>
          <div class="resume-baseinfo-contact-item">
            <div class="contact-item-title">
              <svg-icon :name="'website'"></svg-icon>
              <span>个人网站</span>
            </div>
            <a :href="resumeData.website" target="_blank">
              <p>{{ resumeData.website }}</p></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.resume-baseinfo {
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
  .resume-baseinfo-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .resume-baseinfo-introduce {
      > p {
        font-size: 16px;
        font-weight: 400;
        line-height: 32px;
        @include themeChildify {
          color: themed("font-color-second");
        }
      }
    }
    .resume-baseinfo-contact {
      cursor: default;
      margin-top: 30px;
      border-radius: 12px;
      min-height: 150px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      @include themeChildify {
        background-color: themed("important-bg-color");
      }
      align-items: center;
      .resume-baseinfo-contact-item {
        margin: 0 10px;
        width: 20%;
        height: 90%;
        min-width: 200px;
        @include themeChildify {
          color: themed("important-color");
        }
        .contact-item-title {
          display: flex;
          line-height: 50px;
          align-items: center;
          span {
            margin-left: 10px;
          }
          @include themeChildify {
            color: lighten(themed("important-color"), 10%);
          }
        }
        p {
          font-size: 20px;
          font-weight: 600;
          line-height: 32px;
          // 超长隐藏
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        // background-color: #fccb90;
      }
    }
  }
}
@media (max-width: 1200px) {
  .resume-baseinfo {
    flex-direction: column;
    .base-title {
      width: 100%;
      max-width: 100%;
      margin-bottom: 20px;
    }
    .resume-baseinfo-container {
      flex-direction: column;
      .resume-baseinfo-introduce {
        width: 100%;
        max-width: 100%;
      }
      .resume-baseinfo-contact {
        width: 100%;
        max-width: 100%;
        margin-top: 20px;
        flex-wrap: wrap;
        .resume-baseinfo-contact-item {
          margin-bottom: 30px;
        }
        @media (max-width: 600px) {
          .resume-baseinfo-contact-item {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
