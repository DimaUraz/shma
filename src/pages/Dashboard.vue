<template>
  <div class="VStack">
    <span>Hello!</span>
    <button type="button" class="button__test" @click="handleClick()">Go to Test</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ServicePages } from '../app/route/config.ts'

const router = useRouter()

const handleClick = () => {
  router.push(ServicePages.test.path)
}
</script>

<style scoped>
.VStack {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.button__test {
  width: 100px;
}
</style>
