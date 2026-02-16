<script setup>
import { reactive, ref, watchEffect} from 'vue';
import { useFetch } from '../composables/useFetch';
import { useRoute } from 'vue-router';
import router from '@/router';


const route=useRoute();
const itemId=route.params.id

const url= ref(`http://localhost:3000/songs/show/${itemId}`)
const {data, error,loading,deleteRequest}=useFetch(url);

const form=reactive({
    title:'',
    singer:'',
    year:''
})

watchEffect(()=>{

    if(data.value?.song){
        form.title=data.value.song.title || '';
        form.singer=data.value.song.singer || '';
        form.year=data.value.song.year || '';
    }
})
</script>

<template>

<main class=" container">
    <h1>Editar canción</h1>

     <div v-if="loading" class="state">
      <p>loading</p>
    </div>

    <div v-else-if="error" class="state error">
      <p>Error: {{ error }}</p>
    </div>

    <div v-else>
    <form>
            <label class="field" for="title">
                    <span>Nombre de la canción</span>
                    <input type="text" name="title" required v-model="form.title"/>
            </label>
            <label class="field" for="singer">
                    <span>Nombre del Cantante </span>
                    <input type="text" name="singer" required v-model="form.singer"/>
            </label>

            <label class="field" for="year">
                    <span>Año de lanzamiento </span>
                    <input type="text" name="year" required v-model="form.year" />
            </label>

            <div>
                <button>Editar</button>
            </div>
        </form>
    </div>
 

</main>
</template>
<style scoped>
</style>