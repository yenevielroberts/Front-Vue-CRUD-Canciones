<script setup>
import { ref} from 'vue';
import { useFetch } from '../composables/useFetch';


const url=ref(`http://localhost:3000/songs`)

const {data, error,loading, fetchData}=useFetch(url);
const idItem=ref(null)
</script>

<template>
  <div v-if="loading">
      <p>loading</p>
  </div>

  <div v-else-if="error">
    <p>Error: {{ error }}</p>
  </div>

  <div v-else>
      <!--Aquí ya se cargó los datos de la api-->
      <p>{{ idItem }}</p>
      <div id="buscardor">
           <input type="text" v-model="idItem"/> 
           <button type="button" >Buscar</button>
      </div>
      <RouterLink to="/canciones/new">Agregar una nueva canción</RouterLink>
   
    <div  v-if="data && data.songs" class="containerMeals">
        <div v-for="song in data.songs" class="container-items">
            <p><strong>Titulo: </strong>{{ song.title }}</p>
            <p><strong>Cantante: </strong>{{ song.singer }}</p>
            <RouterLink :to="`/canciones/${song.id}`">Ver detalle del canción</RouterLink>
        </div>
    </div>
    </div>
</template>
<style  scoped>
    
.container-items{
  display: flex;
  flex-direction: row;
}

.container-items > p{
  margin: 10px;
}
</style>