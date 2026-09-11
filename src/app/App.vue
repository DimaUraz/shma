<template>
  <DefaultLayout>
    <RouterView />
  </DefaultLayout>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { default as DefaultLayout } from './layout/DefaultLayout.vue'
</script>
