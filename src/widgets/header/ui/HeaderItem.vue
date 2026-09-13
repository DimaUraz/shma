<template>
  <Router-link :to="props.path" class="nav-item" :class="{ 'nav-item--active': isActive }">
    {{ label }}
  </Router-link>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps<{
  label: string
  path: string
}>()

const route = useRoute()

const isActive = computed(() => route.path === props.path)
</script>

<style scoped lang="scss">
@use 'sass:color';
@use '@/shared/config/variables' as *;

.nav-item {
  font-size: 35px;
  text-decoration: none;
  color: $text-muted;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;

  transition:
    color 0.2s,
    background-color 0.2s;

  &--active {
    color: $primary;
    background: color.adjust($primary, $lightness: 40%);
  }

  &:hover {
    color: $primary-hover;
  }
}
</style>
