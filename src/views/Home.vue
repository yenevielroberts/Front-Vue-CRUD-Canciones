<script setup>
import Peliculas from '@/components/Peliculas.vue';

</script>

<template>
      <!--Aquí ya se cargó los datos de la api-->
      <div class="container">
          <div id="admin-panel">
            <!--<h1>Hi <%=username%>!</h1>-->
            <p>You are in the admin pannel</p>
            <a href="/protected" class="enlaces">Manage items</a>
            <button id="close-session">Log out</button>
          </div>
          
          <Peliculas Genero='songs'/>
        <Peliculas Genero='movies'/>
        </div>
</template>

<style>
/*Estilo Home*/
.container{
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   /* background-color: #F5F3F4;
    */
    border-radius: 5px;
    margin-top: 50px;
    border: solid #9D174D;
} 

#admin-panel{
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 100%;
    margin: 10px;
    align-items: center; 
}

/*End estilo Home*/

/*Botones y enlaces*/
.btns{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    justify-content: center;
    margin: 10px;
}

.container .enlaces, button{
    height: fit-content;
    border-radius: 15px;
    border: 0px;
    padding: 10px;
    background-color:#1E3A8A;
    color: black;
    margin: 5px;
    text-decoration: none;
    color: white;
}

.container .enlaces:hover{
    background-color:#F59E0B;

}

button:hover{
    background-color:#F59E0B;
}

/* End Botones y enlaces*/
</style>