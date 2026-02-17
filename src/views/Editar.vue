<script setup>
import { reactive, ref, watchEffect} from 'vue';
import { useFetch } from '../composables/useFetch';
import { useRoute } from 'vue-router';
import router from '@/router';



const route=useRoute();
const itemId=route.params.id

const url= ref(`http://localhost:3000/songs/show/${itemId}`)
const {data, error,loading,insert}=useFetch(url);

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

const editHandler=async()=>{

    const url=`http://localhost:3000/songs/songs/${itemId}`
    try{
        const res=await insert(form, "PUT",url )

        if(res){
            console.log("Detalle echo existosamente")
            const id= res.id
            setTimeout(()=>router.push(`/canciones/${id}`),500)

        }
    }catch(error){
        console.log("Fallo actualizando la canción:", error.message)
    }
}
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
    <form  @submit.prevent="editHandler">
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
                <button type="submit">Editar</button>
            </div>
        </form>
    </div>
 

</main>
</template>
<style scoped>
</style>