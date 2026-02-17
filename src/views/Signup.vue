<script setup>
import {ref} from 'vue'
import { useFetchUser } from '../composables/useFetchPost';
import router from '@/router';

const url=ref('http://localhost:3000/signup');
const {peticionPostUser, loading, error}=useFetchUser(url)

const form=ref({
    username:'',
    password:''
})

const signupHandler=async()=>{

    try {

        const res= await peticionPostUser(form.value)//En esta variable guardo lo que devuelve el composable

        if(res){
            //Si la respuesta de peticionPost es ok redirijo a la home page
            console.log("Registro exitoso:",res)
            //Redirigimos al home después de 1 segundo
            setTimeout(()=>router.push('/home'),500)
        }
        //Si la respuesta no es ok, no redirijo y muestro la variable error en el HTML

    } catch (error) {
        console.error("Fallo en el registro:",error.message);
    }
}
</script>

<template>
    <main class="registro">
        <section class="card">
            <p class="eyebrow">Registro</p>
            <h1>Registro</h1>
            <p class="sub">Registrate para comenzar a administrar tu catalogo musical.</p>
            <p v-if="error" class="error">{{ error }}</p>
            <form class="form" @submit.prevent="signupHandler">
                <label class="field" for="name">
                    <span>Nombre de usuario</span>
                    <input type="text" name="name" placeholder="tuUserName" required v-model="form.username"/>
                </label>
                <label class="field" for="password">
                    <span>Contrasena</span>
                    <input type="password" name="password" placeholder="********" required v-model="form.password">
                </label>
                <button class="btn" type="submit">
                    {{ loading ?'Registrando' : 'Sign up' }}
                </button>
            </form>
            <div class="actions">
                <RouterLink class="link" to="/login">¿Ya tienes una cuenta?</RouterLink>
            </div>
        </section>
    </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Space+Grotesk:wght@300;400;500;600&display=swap");

.registro {
    min-height: 100vh;
    display: grid;
    place-items: center;
    padding: 32px;
    font-family: "Space Grotesk", sans-serif;
    background:
        radial-gradient(circle at 20% 20%, #2c1a12 0%, transparent 45%),
        radial-gradient(circle at 80% 10%, #1a2c2b 0%, transparent 50%),
        linear-gradient(135deg, #0c0f14 0%, #11171f 60%, #0c0f14 100%);
    color: #f7f4ef;
}

.error{
    color: red;
    font-weight: bold;
}
.card {
    width: min(420px, 100%);
    padding: 32px;
    border-radius: 24px;
    background: rgba(12, 15, 20, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(12px);
}

.eyebrow {
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 2px;
    color: #e0b36a;
    margin: 0 0 8px;
}

h1 {
    margin: 0 0 10px;
    font-family: "DM Serif Display", serif;
    font-size: 32px;
}

.sub {
    margin: 0 0 24px;
    color: rgba(247, 244, 239, 0.75);
}

.form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 18px;
}

.field {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 13px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: rgba(247, 244, 239, 0.7);
}

.field input {
    padding: 12px 14px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(10, 12, 16, 0.7);
    color: #f7f4ef;
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.field input:focus {
    border-color: rgba(224, 179, 106, 0.7);
    box-shadow: 0 0 0 3px rgba(224, 179, 106, 0.15);
}

.actions {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;
}

.btn {
    padding: 12px 20px;
    border-radius: 999px;
    border: none;
    background: #e0b36a;
    color: #111217;
    font-weight: 600;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    box-shadow: 0 16px 30px rgba(224, 179, 106, 0.4);
}

.btn:hover {
    transform: translateY(-2px);
}

.link {
    color: #e0b36a;
    text-decoration: none;
    text-align: center;
}

.muted {
    color: rgba(247, 244, 239, 0.6);
}
</style>