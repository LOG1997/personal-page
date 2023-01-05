<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { getResume } from "@/api/main/about";
import { iPersonResume } from "@/types/resume";
let resumeData = ref({} as iPersonResume);
const getResumeData = () => {
  getResume({}).then((res) => {
    resumeData.value = res.data;
    console.log(resumeData.value);
  });
};
onMounted(() => {
  getResumeData();
});
</script>

<template>
  <div class="resume-container">
    <div class="resume-background"></div>
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
    <div class="resume-baseinfo">
      <div class="base-title">基本信息</div>
      <div class="resume-baseinfo-container">
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
    <div class="resume-experience">
      <div class="base-title">工作经历</div>
      <div class="resume-experience-container">
        <div
          class="resume-experience-item"
          v-for="item in resumeData.job_experience"
          :key="item.company"
        >
          <div class="resume-experience-item-title">
            <div class="resume-experience-item-title-left">
              <div class="resume-experience-item-title-left-company">
                <span>{{ item.company }}</span>
              </div>
              <div class="resume-experience-item-title-left-position">
                <span>{{ item.position }}</span>
              </div>
            </div>
            <div class="resume-experience-item-title-right">
              <span>{{ item.time_slot }}</span>
            </div>
          </div>
          <div class="resume-experience-item-desc">
            <p>{{ item.job_desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.resume-container {
  margin: 0 auto;
  height: 100%;
  width: 100vw;
  min-width: 1200px;
  display: flex;
  flex-direction: column;

  .resume-background {
    height: 200px;
    background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);
    background-size: 300% 300%;
    animation: gradientBG 5s ease infinite;
  }
  .resume-header {
    // height: 200px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #6f7072;
    .resume-userinfo {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 200px;
      .resume-userinfo-avatar {
        overflow: hidden;
        width: 150px;
        height: 150px;
        // background-color: #fccb90;
        margin-top: -30px;
        .resume-userinfo-avatar_image {
          position: absolute;
          width: 150px;
          height: 150px;
          margin-top: -30px;
          border-radius: 50%;
          object-fit: cover;
          @include themeChildify {
            box-shadow: 5px 5px 10px themed(shawdow-color);
          }
        }
      }
      .resume-userinfo-user {
        margin: -90px 0 0 20px;
        width: 600px;
        .resume-userinfo-name {
          font-size: 24px;
          font-weight: 600;
          line-height: 48px;
        }
        .resume-userinfo-desc {
          font-size: 16px;
          font-weight: 400;
          @include themeChildify {
            color: themed("font-color-second");
          }
        }
      }
    }
    .resume-user-button {
      button {
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
        @include themeChildify {
          background-color: themed("header-bg-color");
          box-shadow: 5px 5px 10px themed(shawdow-color);
          &:hover {
            background-color: themed("header-bg-color-hover");
            box-shadow: 5px 5px 10px themed(shawdow-color-hover);
          }
        }
      }
    }
  }
  .resume-baseinfo {
    width: 100%;
    max-width: 1200px;
    // height: 400px;
    padding: 30px 0;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #6f7072;
    .resume-baseinfo-container {
      display: flex;
      justify-content: space-between;
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
        height: 150px;
        // width: 100%;
        display: flex;
        justify-content: space-between;
        @include themeChildify {
          background-color: themed("important-bg-color");
        }
        align-items: center;
        .resume-baseinfo-contact-item {
          margin-left: 10px;
          width: 20%;
          height: 90%;
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
  .resume-experience {
    width: 100%;
    max-width: 1200px;
    // height: 400px;
    padding: 30px 0;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #6f7072;
    .resume-experience-container {
      width: 100%;
      .resume-experience-item {
        margin-bottom: 30px;
        .resume-experience-item-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .resume-experience-item-title-left {
            display: flex;
            align-items: center;
            .resume-experience-item-title-left-company {
              font-size: 20px;
              font-weight: 600;
              line-height: 32px;
              margin-right: 20px;
            }
            .resume-experience-item-title-left-position {
              font-size: 16px;
              font-weight: 400;
              line-height: 32px;
              @include themeChildify {
                color: themed("font-color-second");
              }
            }
          }
          .resume-experience-item-title-right {
            font-size: 16px;
            font-weight: 400;
            line-height: 32px;
            @include themeChildify {
              color: themed("font-color-second");
            }
          }
        }
        .resume-experience-item-desc {
          margin-top: 20px;
          p {
            font-size: 16px;
            font-weight: 400;
            line-height: 32px;
            @include themeChildify {
              color: themed("font-color-second");
            }
          }
        }
      }
    }
  }
}

.base-title {
  font-size: 24px;
  font-weight: 600;
  // line-height: 48px;
  width: 30%;
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
