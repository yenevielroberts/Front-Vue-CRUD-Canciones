<script setup>

</script>

<template>

    <header>
        <h1>CRUD</h1>
        <nav>
            <RouterLink to="/canciones" class="enlace-nav">Canciones</RouterLink>
            <RouterLink to="/peliculas" class="enlace-nav">Películas</RouterLink>
            <RouterLink to="/home" class="enlace-nav">Inicio</RouterLink>
        </nav>
    </header>
</template>
<style  scoped>

header{
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
   
}
h1{
    margin-right: 20px;
}
nav{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.enlace-nav{

    margin:20px;
}
</style>