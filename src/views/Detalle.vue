<script setup>
import { ref} from 'vue';
import { useFetch } from '../composables/useFetch';
import { useRoute } from 'vue-router';


const route=useRoute();
const itemId=route.params.id

const url= ref(`http://localhost:3000/songs/show/${itemId}`)
const {data, error,loading, fetchData}=useFetch(url);

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
    <div  v-if="data && data.song" class="containerMeals">
        <p><strong>Titulo: </strong>{{ data.song.title }}</p>
        <p><strong>Cantante: </strong>{{ data.song.singer }}</p>
        <p>{{ data.song.year }}</p>
    </div>
    </div>
</template>

<style  scoped>
</style>