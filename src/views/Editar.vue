<script setup>
import { reactive, ref, watchEffect, computed} from 'vue';
import { useFetch } from '../composables/useFetch';
import { useRoute } from 'vue-router';
import router from '@/router';


const route=useRoute();
const itemId=route.params.id

// Detecta automáticamente si es canción o película según la ruta
const tipo = computed(() => route.path.includes('canciones') ? 'canciones' : 'peliculas');
const endpoint = computed(() => tipo.value === 'canciones' ? 'songs' : 'movies');
const tituloTipo = computed(() => tipo.value === 'canciones' ? 'la canción' : 'la película');

const url= ref(`http://localhost:3000/${endpoint.value}/show/${itemId}`)
const {data, error,loading,insert}=useFetch(url);

const form=reactive({
    title:'',
    singer:'',
    director:'',
    year:''
})

watchEffect(()=>{

    if(tipo.value === 'canciones' && data.value?.song){
        form.title=data.value.song.title || '';
        form.singer=data.value.song.singer || '';
        form.year=data.value.song.year || '';
        form.director = '';//Esta vacio porque este campo no es de este item
    }

    if (tipo.value === 'peliculas' && data.value?.movie) {
        form.title = data.value.movie.title || '';
        form.director = data.value.movie.director || '';
        form.year = data.value.movie.year || '';
        form.singer = '';
    }
})

const editHandler=async()=>{

      const updateUrl = `http://localhost:3000/${endpoint.value}/${endpoint.value}/${itemId}`;
      //Payload para poder enviar el campo de singer y director con el item adecuado. Si solo envio el form se puede enviar el campo director o singer con el item que no es
      const payload = tipo.value === 'canciones'
        ? { title: form.title, singer: form.singer, year: form.year }
        : { title: form.title, director: form.director, year: form.year };

    try{
        const res=await insert(payload, "PUT", updateUrl )

        if(res){
            console.log(`Detalle de ${tituloTipo.value} actualizado correctamente`)
            setTimeout(()=>router.push(`/${tipo.value}/${itemId}`),500)

        }
    }catch(error){
        console.log(`Fallo actualizando ${tituloTipo.value}:`, error.message)
    }
}
</script>

<template>

<main class=" container">
    <h1>Editar {{ tipo === 'canciones' ? 'canción' : 'película' }}</h1>

     <div v-if="loading" class="state">
      <p>loading</p>
    </div>

    <div v-else-if="error" class="state error">
      <p>Error: {{ error }}</p>
    </div>

   <div v-else class="form-wrapper">
      <form @submit.prevent="editHandler" class="edit-form">
        <label class="field" for="title">
          <span>Título {{ tipo === 'canciones' ? 'de la canción' : 'de la película' }}</span>
          <input type="text" name="title" required v-model="form.title" placeholder="Ingresa el título"/>
        </label>

        <label v-if="tipo === 'canciones'" class="field" for="singer">
          <span>Cantante</span>
          <input type="text" name="singer" required v-model="form.singer" placeholder="Nombre del cantante"/>
        </label>

        <label v-else class="field" for="director">
          <span>Director</span>
          <input type="text" name="director" required v-model="form.director" placeholder="Nombre del director"/>
        </label>

        <label class="field" for="year">
          <span>Año de lanzamiento</span>
          <input type="number" name="year" required v-model="form.year" placeholder="Ej: 2024"/>
        </label>

        <div class="actions">
          <button type="submit" class="btn-submit">Guardar cambios</button>
          <button type="button" class="btn-cancel" @click="router.push(`/${tipo}/${itemId}`)">Cancelar</button>
        </div>
      </form>
    </div>
 

</main>
</template>

<style scoped>
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

.container h1{
  margin: 0;
  color: #e0b36a;
  letter-spacing: 0.3px;
  font-size: 28px;
}

.state{
  padding: 12px 14px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  text-align: center;
}

.state.error{
  background: rgba(220, 38, 38, 0.12);
  border-color: rgba(220, 38, 38, 0.35);
}

.form-wrapper{
  width: 100%;
}

.edit-form{
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.field{
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.field span{
  font-size: 13px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: rgba(247, 244, 239, 0.8);
  font-weight: 500;
}

.field input{
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(5, 7, 10, 0.65);
  color: #f7f4ef;
  font-size: 15px;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.field input::placeholder{
  color: rgba(247, 244, 239, 0.4);
}

.field input:focus{
  border-color: rgba(224, 179, 106, 0.6);
  box-shadow: 0 0 0 3px rgba(224, 179, 106, 0.15);
  background: rgba(5, 7, 10, 0.85);
}

.actions{
  display: flex;
  gap: 12px;
  margin-top: 8px;
  flex-wrap: wrap;
}

.btn-submit, .btn-cancel{
  height: fit-content;
  border-radius: 14px;
  border: 1px solid rgba(224, 179, 106, 0.4);
  padding: 12px 20px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-submit{
  background: #e0b36a;
  color: #0c0f14;
  border-color: #e0b36a;
}

.btn-submit:hover{
  background: #f0c37a;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(224, 179, 106, 0.3);
}

.btn-cancel{
  background: rgba(17, 20, 26, 0.9);
  color: #f7f4ef;
}

.btn-cancel:hover{
  background: rgba(30, 35, 45, 1);
  transform: translateY(-1px);
  border-color: rgba(224, 179, 106, 0.6);
}
</style>