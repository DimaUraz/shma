import { createRouter, createWebHistory } from 'vue-router'
import { ServicePages } from './config.ts'

const routes = Object.values(ServicePages)

export const router = createRouter({
  history: createWebHistory(),
  routes
})
