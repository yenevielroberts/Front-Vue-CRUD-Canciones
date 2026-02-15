import { onMounted, ref, watch } from "vue";
import {useUserStore} from '@/storages/UserStore'

export function useFetch(url){
    const {user,token}=useUserStore();

    const data=ref(null)
    const error=ref(null)
    const loading=ref(false)//Estado de la carga. si es false es que todavia no termina de cargas

    const fetchData= async()=>{

        loading.value=true
        error.value=null

        try {
            const res= await fetch(url.value,{
                method:'GET',
                credentials:'include',
                headers:{ 'Content-Type': 'application/json' },
              
            });

            const resultado= await res.json();
            if(!res.ok){
                error.value=resultado.message ||"Error en el servidor";
                throw new Error(error.value)
            }

            data.value=resultado
            return resultado

        } catch (err) {
            error.value=err.message
            throw err;

        }finally{

            loading.value=false
        }
    }

    

    //Disparador que esta que no cargue el componente no pasa los datos, no llama la función
    onMounted(fetchData);//Ejecuta la función

    watch(url,fetchData)//Necesario para cada vez que se cambie el paramtro se redenrise la página
    return {data, error,loading, fetchData}
}