import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import CoursesView from './views/CoursesView.vue'
import ExercisesView from './views/ExercisesView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/cours', component: CoursesView },
  { path: '/exercices', component: ExercisesView },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Remonte en haut de page à chaque changement de page
    return { top: 0 }
  }
})

export default router