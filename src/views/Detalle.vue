<script setup>
import { ref} from 'vue';
import { useFetch } from '../composables/useFetch';
import { useRoute } from 'vue-router';
import router from '@/router';


const route=useRoute();
const itemId=route.params.id

const url= ref(`http://localhost:3000/songs/show/${itemId}`)
const {data, error,loading,deleteRequest}=useFetch(url);

const deleteHandler=async()=>{

  try{

    const res=  await deleteRequest(`http://localhost:3000/songs/${itemId}`)

    if(res){
      console.log("Canción eliminada correctamente:", res)
      setTimeout(()=>router.push('/canciones'),500)
    }
  }catch(error){
    console.error("Fallo eliminando la canción:",error.message);
  }

}

const editHandler=()=>router.push(`/editar/${itemId}`)
</script>

<template>
  <div class="container">
    <h1>Detalle de la cancion</h1>

    <div v-if="loading" class="state">
      <p>loading</p>
    </div>

    <div v-else-if="error" class="state error">
      <p>Error: {{ error }}</p>
    </div>

    <div v-else>
      <!--Aquí ya se cargó los datos de la api-->
      <div v-if="data && data.song" class="detail-card">
        <p><strong>Titulo: </strong>{{ data.song.title }}</p>
        <p><strong>Cantante: </strong>{{ data.song.singer }}</p>
        <p class="muted">{{ data.song.year }}</p>
      </div>
    </div>
    <div class="btns">
      <button id="btn-eliminar" @click="deleteHandler">Eliminar</button>
      <button @click="editHandler">Editar</button>
    </div>
    

  </div>
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
}

.state{
  padding: 12px 14px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(224, 179, 106, 0.25);
}

.state.error{
  background: rgba(220, 38, 38, 0.12);
  border-color: rgba(220, 38, 38, 0.35);
}

.detail-card{
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  border-radius: 14px;
  border: 1px solid rgba(224, 179, 106, 0.25);
  background: rgba(22, 26, 34, 0.8);
}

.detail-card p{
  margin: 0;
}

.muted{
  color: rgba(247, 244, 239, 0.7);
}

.btns{
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 8px;
}

.btns button{
  height: fit-content;
  border-radius: 14px;
  border: 1px solid rgba(224, 179, 106, 0.4);
  padding: 10px 16px;
  background: rgba(17, 20, 26, 0.9);
  color: #f7f4ef;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 12px;
  opacity: 0.95;
  transition: opacity 0.2s ease, transform 0.2s ease, background-color 0.2s ease, color 0.2s ease;
}

.btns button:hover{
  background: #e0b36a;
  color: #0c0f14;
  opacity: 1;
  transform: translateY(-1px);
}

.btns #btn-eliminar:hover{
  background:red;
  color:black;
}

.btns button:focus-visible{
  outline: none;
  box-shadow: 0 0 0 2px rgba(224, 179, 106, 0.35);
}
</style>