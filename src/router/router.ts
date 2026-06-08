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
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    // Set smooth to false or just omit it to ensure immediate scroll
    return { top: 0, left: 0 };
  }
})