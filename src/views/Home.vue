<script setup>
import {useUserStore} from '@/storages/UserStore'
import { checkUser } from '@/utils/functions';

const {user, loading}= useUserStore();


if(!loading && !user){

   checkUser(true) 
}


</script>

<template>
      <!--Aquí ya se cargó los datos de la api-->
      <div class="container">
        <h1 v-if="loading">Datos del usuario cargando...</h1>
        <h1 v-else-if="user">{{ user.username }}</h1>
        <h1 v-else>Usuario no disponible</h1>
          <div id="admin-panel">
            <!--<h1>Hi <%=username%>!</h1>-->
            <p>You are in the admin pannel</p>

            <div class="container-manage-btn">
                <RouterLink  to="/peliculas" class="enlaces">Manage catalogo - Películas</RouterLink>
                <RouterLink  to="/canciones" class="enlaces">Manage catalogo - Canciones</RouterLink>
            </div>
           
          </div>
        </div>
</template>

<style>
/*Estilo Home*/
.container{
    width: 100%;
    min-height: 520px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:flex-start;
    border-radius: 18px;
    margin: 40px auto 0;
    padding: 24px;
    background: rgba(12, 15, 20, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(12px);
    gap: 18px;
} 

#admin-panel{
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0;
    gap: 20px;
    align-items: flex-start; 
    padding: 16px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.03);
}

#admin-panel p{
    margin: 0;
    font-size: 16px;
    letter-spacing: 0.3px;
    color: #f7f4ef;
    opacity: 0.9;
}

/*End estilo Home*/

/*Botones y enlaces*/
.btns{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    justify-content: center;
    margin: 10px;
}

.container .enlaces, button{
    height: fit-content;
    border-radius: 15px;
    border: 0px;
    padding: 10px 14px;
    background-color:#1E3A8A;
    color: black;
    margin: 5px;
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 12px;
    opacity: 0.9;
    transition: opacity 0.2s ease, transform 0.2s ease, background-color 0.2s ease;
}

.container .enlaces:hover{
    background-color:#F59E0B;
    opacity: 1;
    transform: translateY(-1px);
}

button:hover{
    background-color:#F59E0B;
    opacity: 1;
    transform: translateY(-1px);
}

/* End Botones y enlaces*/
</style>
```// filepath: c:\Users\yenev\Documents\insti\Desarrollo entorno movil\Front-Vue-CRUD-Canciones\src\views\Home.vue
// ...existing code...
<style>
/*Estilo Home*/
.container{
    width: min(900px, 92vw);
    min-height: 520px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    border-radius: 18px;
    margin: 40px auto 0;
    padding: 24px;
    background: rgba(12, 15, 20, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(12px);
    gap: 18px;
} 

#admin-panel{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
    align-items: flex-start; 
    gap: 10px;
    padding: 16px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.03);
}

#admin-panel p{
    margin: 0;
    font-size: 16px;
    letter-spacing: 0.3px;
    color: #f7f4ef;
    opacity: 0.9;
}

/*End estilo Home*/

/*Botones y enlaces*/
.btns{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    justify-content: center;
    margin: 10px;
}

.container .enlaces, button{
    height: fit-content;
    border-radius: 15px;
    border: 0px;
    padding: 10px 14px;
    background-color:#1E3A8A;
    color: black;
    margin: 5px;
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 12px;
    opacity: 0.9;
    transition: opacity 0.2s ease, transform 0.2s ease, background-color 0.2s ease;
}

.container .enlaces:hover{
    background-color:#F59E0B;
    opacity: 1;
    transform: translateY(-1px);
}

button:hover{
    background-color:#F59E0B;
    opacity: 1;
    transform: translateY(-1px);
}

/* End Botones y enlaces*/
</style>