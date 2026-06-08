import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/views/home/HomeView.vue'
import ProjectsView from '@/views/projects/ProjectsView.vue'
import ProjectDetailView from '@/views/projects/ProjectDetailView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/projects', component: ProjectsView },
  { path: '/projects/:slug', component: ProjectDetailView, name: 'ProjectDetail' }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, _savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    return { top: 0, behavior: 'smooth' };
  }
})