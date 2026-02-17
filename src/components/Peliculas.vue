<script setup>
import { ref} from 'vue';
import { useFetch } from '../composables/useFetch';


const url=ref(`http://localhost:3000/movies`)

const {data, error,loading}=useFetch(url);
</script>

<template>
  <div class="container">
    <h1>Catalogo de películas</h1>

    <div v-if="loading" class="state">
      <p>loading</p>
    </div>

    <div v-else-if="error" class="state error">
      <p>Error: {{ error }}</p>
    </div>

    <div v-else>
      <!--Aquí ya se cargó los datos de la api-->

      <div class="actions">
        <RouterLink to="/peliculas/new" class="enlaces">Agregar una nueva pelicula</RouterLink>
      </div>

      <div v-if="data && data.movies" class="containerSong">
        <div v-for="movie in data.movies" class="container-items">
          <div class="item-info">
            <p><strong>Titulo: </strong>{{ movie.title }}</p>
            <p><strong>Cantante: </strong>{{ movie.director }}</p>
          </div>
          <RouterLink :to="`/peliculas/${movie.id}`" class="enlaces subtle">Ver detalle de la película</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
<style  scoped>
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

.state{
  padding: 12px 14px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.state.error{
  background: rgba(220, 38, 38, 0.12);
  border-color: rgba(220, 38, 38, 0.35);
}

.search-bar{
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
}

.search-bar label{
  font-size: 14px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  opacity: 0.8;
}

.search-controls{
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.search-controls input{
  flex: 1 1 220px;
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(5, 7, 10, 0.65);
  color: #f7f4ef;
}

.search-controls input:focus{
  outline: none;
  border-color: rgba(245, 158, 11, 0.6);
  box-shadow: 0 0 0 2px rgba(245, 158, 11, 0.2);
}

.actions{
  display: flex;
  justify-content: flex-start;
}

.containerSong{
  display: grid;
  gap: 14px;
}

.container-items{
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
}

.item-info p{
  margin: 0 0 6px;
}

.container .enlaces, button{
  height: fit-content;
  border-radius: 15px;
  border: 0px;
  padding: 10px 14px;
  background-color:#1E3A8A;
  margin: 5px 0;
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 12px;
  opacity: 0.9;
  transition: opacity 0.2s ease, transform 0.2s ease, background-color 0.2s ease;
}

.container .enlaces:hover, button:hover{
  background-color:#F59E0B;
  opacity: 1;
  transform: translateY(-1px);
}

.container .enlaces.subtle{
  align-self: flex-start;
}
</style>

