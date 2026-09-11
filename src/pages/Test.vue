<template>
  <div class="VStack">
    <span>Test!</span>
    <button type="button" class="button__test" @click="handleClick()">Go to Dashboard</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ServicePages } from '../app/route/config.ts'

const router = useRouter()

const handleClick = () => {
  router.push(ServicePages.dashboard.path)
}
</script>

<style scoped>
.VStack {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.button__test {
  width: 150px;
}
</style>
