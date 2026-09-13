<template>
  <div class="layout">
    <Header />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { Header } from '@/widgets'
</script>

<style scoped lang="scss">
.layout {
  padding: 20px;
}
</style>
