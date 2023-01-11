import { ref } from "vue";
export const useTime = (time: number, ProjectList: any) => {
  const project = ref(ProjectList.value[0]);
  const projectIndex = ref(0);
  const setProjectIndex = () => {
    setInterval(() => {
      if (projectIndex.value < ProjectList.value.length) {
        projectIndex.value++;
        console.log("😈projectIndex:", projectIndex.value);
      } else {
        projectIndex.value = 0;
      }
    }, time);
  };

  return { projectIndex, setProjectIndex, project };
};
