<script setup>
import { ref, computed } from 'vue';
import router from '@/router';
import { useRoute } from 'vue-router'
import BarraNavegación from './components/BarraNavegación.vue';
import { useFetchUser } from './composables/useFetchPost';

const route=useRoute()

//con el computed vue observa si la ruta cambia
const mostrarBarra=computed(()=>{
    
    if(route.path !="/sinAcceso") return true
})


const url=ref('http://localhost:3000/logout');
const {logout, loading, error}=useFetchUser(url)

const logoutHandler=async()=>{
     try {

        const res= await logout()//En esta variable guardo lo que devuelve el composable

        if(res){
            //Si la respuesta de peticionPost es ok redirijo a la home page
            console.log("logout exitoso:",res)
            //Redirigimos al home después de 1 segundo
            setTimeout(()=>router.push('/'),500)
        }
        //Si la respuesta no es ok, no redirijo y muestro la variable error en el HTML

    } catch (error) {
        console.error("Fallo haciendo el cierre de sessión:",error.message);
    }
}
</script>

<template>
    <BarraNavegación @logout="logoutHandler" v-show="mostrarBarra" />
    <p v-if="error">{{ error }}</p>
    <RouterView></RouterView>
</template>

<style scoped></style>
