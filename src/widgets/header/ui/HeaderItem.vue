<template>
  <button class="nav-item" :class="{ 'nav-item--active': isActive }" @click="pageSwitch()">
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps<{
  label: string
  path: string
}>()

const router = useRouter()
const route = useRoute()

const pageSwitch = () => {
  router.push(props.path)
}

const isActive = computed(() => route.path === props.path)
</script>

<style scoped lang="scss">
@use 'sass:color';
@use '@/styles/variables' as *;

.nav-item {
  border: none;
  background: transparent;
  font: inherit;
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
