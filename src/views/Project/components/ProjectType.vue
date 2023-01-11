<script setup lang="ts">
import { ref, reactive, onMounted, watch } from "vue";
const props = withDefaults(
  defineProps<{
    projectTypes: string;
  }>(),
  {
    projectTypes: "",
  }
);
// 监听projectTypes
watch(
  () => props.projectTypes,
  (newVal, oldVal) => {
    handleVersion(props.projectTypes);
  }
);
const typeList = ref<string[]>([]);
const handleVersion = (projectTypes: string) => {
  console.log("projectTypes:", projectTypes);
  typeList.value = projectTypes.split(",");
  console.log("😄typeList:", typeList);
};
onMounted(() => handleVersion(props.projectTypes));
</script>

<template>
  <div class="w-full flex">
    <div
      class="mx-2 px-2 rounded-md bg-cool-gray-400"
      v-for="(item, index) in typeList"
      :key="index"
    >
      {{ item }}
    </div>
  </div>
</template>

<style scoped></style>
