<template>
  <HeaderItem label="Home" :path="routes.Home" />
  <HeaderItem label="Notes" :path="routes.Notes" />
  <HeaderItem label="Tasks" :path="routes.Tasks" />
</template>

<script setup lang="ts">
  import { HeaderItem } from '@/widgets';
  import { routes } from '@/shared';
</script>