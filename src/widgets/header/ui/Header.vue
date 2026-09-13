<template>
  <nav class="header">
    <HeaderItem label="Home" :path="routes.Home" />
    <HeaderItem label="Notes" :path="routes.Notes" />
    <HeaderItem label="Tasks" :path="routes.Tasks" />
  </nav>
</template>

<script setup lang="ts">
import { routes } from '@/shared'
import { HeaderItem } from '@/widgets'
</script>

<style scoped lang="scss">
@use '@/shared/config/variables' as *;

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 64px;
  padding: 8px 16px;
  background: $bg-card;
  border-bottom: 1px solid $border-color;
  margin-bottom: 20px;
}
</style>
