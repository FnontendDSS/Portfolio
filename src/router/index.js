import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Projects from '@/pages/Projects.vue'
import Skills from '@/pages/Skills.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/projects', name: 'Projects', component: Projects},
    {path: '/about', name: 'About', component: About},
    {path: '/skills', name: 'Skills', component: Skills},
  ]
})


export default router