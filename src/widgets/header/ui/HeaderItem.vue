<template>
  <button type="button" @click="pageSwitch()">{{ label }}</button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const props = defineProps<{
  label: string
  path: string
}>()

const router = useRouter()

const pageSwitch = () => {
  router.push(props.path)
}
</script>
