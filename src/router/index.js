import { createRouter, createWebHistory } from 'vue-router'
import TodoIndexView from '../views/TodoIndexView.vue'


const routes = [
  {
    path: '/',
    name: 'todos',
    component: TodoIndexView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
