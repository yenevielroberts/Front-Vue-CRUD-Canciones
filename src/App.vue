<script setup>
import { ref } from 'vue';
import router from '@/router';
import BarraNavegación from './components/BarraNavegación.vue';
import { useFetchPost } from './composables/useFetchPost';

const url=ref('http://localhost:3000/logout');
const {logout, loading, error}=useFetchPost(url)

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
    <BarraNavegación @logout="logoutHandler"/>
    <p v-if="error">{{ error }}</p>
    <RouterView></RouterView>
</template>

<style scoped></style>
