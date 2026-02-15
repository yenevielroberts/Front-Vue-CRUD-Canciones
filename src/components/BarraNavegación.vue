<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route=useRoute()

//con el computed vue observa si la ruta cambia
const mostrarNavPrivado=computed(()=>{
    const rutasPublicas=[ '/','/login','/signup']

    
    return !rutasPublicas.includes(route.path)
})

const emit=defineEmits(["logout"])

const logout=()=>{
    emit('logout')
}
</script>

<template>

    <header>
        <div class="logo">RitmoLocal</div>
        <nav v-if="mostrarNavPrivado">
            <RouterLink to="/canciones" class="enlace-nav">Canciones</RouterLink>
            <RouterLink to="/peliculas" class="enlace-nav">Películas</RouterLink>
            <RouterLink to="/home" class="enlace-nav">Inicio</RouterLink>
            <button @click="logout" class="enlace-nav">Log out</button>
        </nav>
        <nav v-else>
            <RouterLink to="/login" class="enlace-nav">Login</RouterLink>
            <RouterLink to="/" class="enlace-nav">Inicio</RouterLink>
        </nav>
    </header>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Space+Grotesk:wght@300;400;500;600&display=swap");

header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding: 14px 20px;
    background: rgba(12, 15, 20, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(12px);
    font-family: "Space Grotesk", sans-serif;
}

h1 {
    margin: 0;
    font-family: "DM Serif Display", serif;
    font-size: 22px;
    letter-spacing: 1px;
    color: #f7f4ef;
}

.logo {
	font-family: "DM Serif Display", serif;
	font-size: 24px;
	letter-spacing: 1px;
}

nav {
    display: flex;
    align-items: center;
    gap: 18px;
}

.enlace-nav {
    color: #f7f4ef;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 1px;
    opacity: 0.75;
    position: relative;
    transition: opacity 0.2s ease, transform 0.2s ease;
}

.enlace-nav::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #e0b36a, rgba(224, 179, 106, 0));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.2s ease;
}

.enlace-nav:hover {
    opacity: 1;
    transform: translateY(-1px);
}

.enlace-nav:hover::after {
    transform: scaleX(1);
}

@media (max-width: 720px) {
    header {
        flex-direction: column;
        align-items: flex-start;
        border-radius: 20px;
    }

    nav {
        flex-wrap: wrap;
    }
}
</style>