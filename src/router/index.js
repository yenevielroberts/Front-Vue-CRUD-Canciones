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
import NewMovie from '@/views/NewMovie.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Rutas abiertas
    {path:"/", name:"Inicio", component:Inicio},
    {path:"/login", name:"Login", component:Login},
    {path:"/signup", name:"Signup", component:Signup},
    {path:"/sinAcceso", name:"SinAcceso", component:SinAcceso},
    // Rutas con acceso solo si hay token
    {path:"/home", name:"Home", component:Home, meta:{requiresAuth:true}},
    {path:"/canciones", name:"Canciones", component:Canciones, meta:{requiresAuth:true}},
    {path:"/canciones/:id", name:"Detalle",component:Detalle, meta:{requiresAuth:true}},
    {path:"/editar/:id", name:"Editar",component:Editar, meta:{requiresAuth:true}},
    {path:"/canciones/new",name:"nuevoItem", component:NewItem, meta:{requiresAuth:true}},
    {path:"/peliculas/new",name:"nuevoItem", component:NewMovie, meta:{requiresAuth:true}},
    {path:"/peliculas", name:"Peliculas", component:Peliculas, meta:{requiresAuth:true}},
  ],
})

router.beforeEach((to) => {
  // Si no hay token, manda a SinAcceso
  if (!to.meta.requiresAuth) return true;

  const token = localStorage.getItem('token');
  if (!token && to.path !== '/sinAcceso') {
    return '/sinAcceso';
  }

  return true;
})

export default router
