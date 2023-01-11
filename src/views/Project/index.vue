<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { getProjectList } from "@/api/main/projectList";
import { iProjectlist } from "@/types/projectList";
import CardProject from "./components/CardProject.vue";
import ProjectType from "./components/ProjectType.vue";
import PersonCard from "./components/PersonCard.vue";

import { debounce } from "lodash";

const ProjectList = ref<iProjectlist[]>([]);
const project = ref<iProjectlist>({} as iProjectlist);

const getProjectListData = async () => {
  getProjectList({}).then((res) => {
    console.log(res);
    ProjectList.value = res.data;
    project.value = res.data[0];
  });
};
const handleMouseOver = (cardData: iProjectlist) => {
  debounce(() => {
    // console.log("mouse over", Date());
    project.value = cardData;
  }, 1000)();
};
onMounted(async () => {
  getProjectListData();
});
</script>

<template>
  <div class="projectlist_container">
    <div class="project_back">
      <div class="img-back"></div>
      <img :src="project?.projectImage" alt="" />
    </div>
    <div class="project_projectList container">
      <div class="project_title">{{ project.projectTitle }}</div>
      <div class="project_types">
        <ProjectType :projectTypes="project.projectTypes"></ProjectType>
      </div>
      <div class="projectList_cardList">
        <CardProject
          class="cardProject"
          v-for="item in ProjectList"
          :key="item.projecName"
          @handleMouseOver="handleMouseOver"
          :cardData="item"
        ></CardProject>
      </div>
    </div>
    <div class="project_desc container">
      <p>描述</p>
      <p class="project_desc-content">{{ project.projectDesc }}</p>
    </div>
    <div class="project_dev container">
      <p>开发参与者</p>
      <PersonCard :person_info="project.developers"></PersonCard>
    </div>
  </div>
</template>

<style scoped lang="scss">
.projectlist_container {
  width: 100%;
  height: 100%;
  .project_back {
    width: 100%;
    min-height: 40vh;
    position: relative;
    .img-back {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0));
      opacity: 0.8;
      z-index: -1;
    }
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -1000;
    }
  }

  .project_projectList {
    // background-color: #ff0;
    margin-top: -160px;

    max-width: 1200px;
    // margin-top: 20px;
    .project_title {
      width: 100%;
      font-size: 30px;
      font-weight: 600;
      margin-bottom: 20px;
      @include themeChildify {
        color: themed("dark-card-color");
      }
    }
    .project_types {
      width: 100%;
      margin-bottom: 20px;
    }
    .projectList_cardList {
      width: 100%;
      max-width: 1200px;
      display: flex;
      flex-wrap: wrap;
    }
  }
  .project_desc {
    max-width: 1200px;
    margin-bottom: 50px;
    font-size: 20px;
    @include themeChildify {
      color: themed("font-color-second");
    }
    .project_desc-content {
      width: 60%;
      text-align: left;
      margin-top: 20px;
      font-size: 16px;
      line-height: 2;
      @include themeChildify {
        color: themed("font-color");
      }
    }
  }
  .project_dev {
    max-width: 1200px;
    font-size: 20px;
    @include themeChildify {
      color: themed("font-color-second");
    }
  }
  @media (max-width: 768px) {
    .project_projectList {
      flex-direction: column;
      align-items: center;
    }
    .cardProject {
      margin-bottom: 20px;
      width: 100%;
    }
  }
}
</style>
