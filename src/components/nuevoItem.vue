<script setup>
import { reactive } from 'vue';


//title,singer,year of released

const objecto= reactive({
    id:null,
    title:'',
    singer:'',
    year:null
})

const insertarNuevoItem=()=>{

}
</script>
<template>
<h1>Nueva canción</h1>
    <form id="form-create-song">
        <label for="title">Title:{{ objecto.title }}</label>
        <input type="text" id="title" name="title"value=""required v-model="objecto.title">

        <label for="singer">Singer:{{ objecto.singer }}</label>
        <input type="text" id="singer" name="singer" value="" required v-model="objecto.singer">

        <label for="year">Year of released:{{ objecto.year }}</label>
        <input type="number" id="year" name="year" value="" min="1700" max="2030" v-model="objecto.year">
        <div class="btns">
            <button type="button" id="btn-cancel-song">Cancel</button>
            <button type="submit" id="btn-form-newsong">New Song</button>
        </div>
</form>
</template>

<style>
/*Estilo formularios*/
.container-form{
    width: 400px;
    height: 500px;
    border: solid #9D174D;
    background-color: white;
    color:black;
    border-radius: 10px;
    margin-top: 100px;
}

.container-form h1{
    margin: 10px;
}

#form-create-song{

    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    margin-top: 50px;
    color:black;
    font-size: 17px;
    font-weight: 800;
}

input{
    width: 300px;
    height: 50px;
    border-radius: 10px;
    margin: 10px;
}

#btn-form-cancelar:hover{

    background-color: red;
}

</style>