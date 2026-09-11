<template>
  <HeaderItem label="Home" :path="ServicePages.Home.path" />
  <HeaderItem label="Notes" :path="ServicePages.Notes.path" />
  <HeaderItem label="Tasks" :path="ServicePages.Tasks.path" />
</template>

<script setup lang="ts">
  import { HeaderItem } from '@/shared';
  import { ServicePages } from '@/app';
</script>