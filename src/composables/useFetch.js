import { onMounted, ref, watch } from "vue";
import {useUserStore} from '@/storages/UserStore'

export function useFetch(url){
    const {user,token}=useUserStore();

    const data=ref(null)
    const error=ref(null)
    const loading=ref(false)//Estado de la carga. si es false es que todavia no termina de cargas

    //Función para hacer peticiones con metedo GET de las canciones y pelícuas
    const fetchData= async()=>{

        loading.value=true
        error.value=null

        try {
            const res= await fetch(url.value,{
                method:'GET',
                credentials:'include',
                headers:{ 'Content-Type': 'application/json' },
                session:user,
                cookie:token,
              
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


    //Función para hacer peticiones con metedo POST o PUT de las canciones y pelícuas
    const insert = async(body, method="POST", urlReq)=>{
        loading.value = true;
        error.value = null;

        try {
           const  res = await fetch(urlReq, {
                method: method,
                credentials:'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            
            //Obtenemos el JSON de la respuesta del backend(sea éxito o error)
            const resultado= await res.json();

            if(!res.ok){
                //Si la respuesta que devuelve el backend no es ok guardamos el error que devuelve dentro de la variable error
                error.value=resultado.error || "Error en el servidor";
                throw new Error (error.value);
            }
            data.value=resultado;//Guardo lo que devuelve el back
            return resultado //sin esto el if res del login nunca se cumple
        } catch (err) {
            error.value = err.message;
            throw err; // Re-lanzamos para que el signupHandler lo capture
        } finally {
            loading.value = false;
        }
    
    }

    //Función para hacer peticiones con metedo DELETE de las canciones y pelícuas
      const deleteRequest = async (urlReq) => {
        loading.value = true;
        error.value = null;

        try {
            const res = await fetch(urlReq, {
                method: 'DELETE',
                credentials:'include',
                headers: { 'Content-Type': 'application/json' },
            });
            
            //Obtenemos el JSON de la respuesta del backend(sea éxito o error)
            const resultado= await res.json();

            if(!res.ok){
                //Si la respuesta que devuelve el backend no es ok guardamos el error que devuelve dentro de la variable error
                error.value=resultado.error || "Error en el servidor";
                throw new Error (error.value);
            }
            data.value=resultado;//Guardo lo que devuelve el back
            return resultado
        } catch (err) {
            error.value = err.message;
            throw err; // Re-lanzamos para que el signupHandler lo capture
        } finally {
            loading.value = false;
        }
    };

    

    //Disparador que esta que no cargue el componente no pasa los datos, no llama la función
    onMounted(fetchData);//Ejecuta la función

    watch(url,fetchData)//Necesario para cada vez que se cambie el paramtro se redenrise la página
    return {data, error,loading, fetchData, insert, deleteRequest}
}