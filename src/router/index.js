import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'
import Inicio from '@/views/Inicio.vue'
import Home from '@/views/Home.vue'
import Canciones from '@/components/Canciones.vue'
import Peliculas from '@/components/Peliculas.vue'
import Detalle from '@/views/Detalle.vue'
import NewItem from '@/views/NewItem.vue'
import SinAcceso from '@/views/SinAcceso.vue'
import Editar from '@/views/Editar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:"/", name:"Inicio", component:Inicio},
    {path:"/home", name:"Home", component:Home},
    {path:"/login", name:"Login", component:Login},
    {path:"/canciones", name:"Canciones", component:Canciones},
    {path:"/canciones/:id", name:"Detalle",component:Detalle},
    {path:"/editar/:id", name:"Editar",component:Editar},
    {path:"/canciones/new",name:"nuevoItem", component:NewItem},
    {path:"/peliculas", name:"Peliculas", component:Peliculas},
    {path:"/signup", name:"Signup", component:Signup},
    {path:"/sinAcceso", name:"SinAcceso", component:SinAcceso},

  ],
})

export default router
