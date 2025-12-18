import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import Canciones from '@/components/Canciones.vue'
import Peliculas from '@/components/Peliculas.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:"/", name:"Login", component:Login},
    {path:"/home", name:"Home", component:Home},
    {path:"/canciones", name:"Canciones", component:Canciones},
    {path:"/peliculas", name:"Peliculas", component:Peliculas},
  ],
})

export default router
