<script setup>
import { reactive, ref} from 'vue';
import { useFetch } from '../composables/useFetch';
import router from '@/router';

const url= ref(`http://localhost:3000/movies`)
const {data, error,loading,insert}=useFetch(url);

const form=reactive({
    title:'',
    singer:'',
    year:''
})

const insertHandler=async()=>{

    const url=`http://localhost:3000/movies/movies`
    try{
        const res=await insert(form, "POST",url )

        if(res){
            console.log("Nuevo Item introducido correctamente")
            const id=res.id
            setTimeout(()=>router.push(`/pelciulas/${id}`),500)

        }
    }catch(error){
        console.log("Fallo Insertando el nuevo item:", error.message)
    }
}
</script>

<template>

<main class=" container">
    <h1>Editar la película</h1>

     <div v-if="loading" class="state">
      <p>loading</p>
    </div>

    <div v-else-if="error" class="state error">
      <p>Error: {{ error }}</p>
    </div>

    <div v-else>
    <form  @submit.prevent="insertHandler">
            <label class="field" for="title">
                    <span>Nombre de la película</span>
                    <input type="text" name="title" required v-model="form.title"/>
            </label>
            <label class="field" for="singer">
                    <span>Nombre del director </span>
                    <input type="text" name="singer" required v-model="form.singer"/>
            </label>

            <label class="field" for="year">
                    <span>Año de lanzamiento </span>
                    <input type="number" name="year" required v-model="form.year" />
            </label>

            <div>
                <button type="submit">Insertar</button>
            </div>
        </form>
    </div>
 

</main>
</template>
<style scoped>
</style>