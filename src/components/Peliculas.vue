<script setup>
import { ref} from 'vue';
import { useFetch } from '../composables/useFetch';

const url=ref(`http://localhost:3000/movies`)

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
    <div  v-if="data && data.movies" class="containerMeals">
        <div v-for="item in data.movies" >
            <p><strong>Titulo: </strong>{{ item.title }}</p>
            <p v-show="item.singer"><strong>Cantante: </strong>{{ item.singer }}</p>

        </div>
    </div>
    </div>
</template>
<style>
    
</style>