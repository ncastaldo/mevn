<script setup>
import { ref } from 'vue'
import { getTasks, createTask } from '../services/TaskService'

const tasks = ref([])

tasks.value = await getTasks();

</script>

<template>
  <h1>Tasks</h1>
  <div>
    <div v-for="(task, i) in tasks" :key="i">
      <h5>{{task}}</h5>
    </div>
  </div>

</template>

<style scoped>
</style>
