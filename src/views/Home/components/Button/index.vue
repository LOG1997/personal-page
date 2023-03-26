<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template>
  <div class="button-container w-20 h-6">
    <span>{{ text }}</span>
  </div>
</template>

<style scoped lang="scss"></style>
