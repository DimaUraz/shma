import { Home, Notes, Tasks } from '@/pages'
import { routes } from '@/shared'

export const ServicePages = {
  Home: { path: routes.Home, component: Home },
  Notes: { path: routes.Notes, component: Notes },
  Tasks: { path: routes.Tasks, component: Tasks }
}