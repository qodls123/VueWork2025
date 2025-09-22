<template>
  <ToDoList/>
</template>

<script setup>
  //
  import ToDoList from '@/components/ToDoList.vue';
</script>

<route lang="json">
  {
    "meta": {
      "requireAuth": true
    }
  }
</route>
