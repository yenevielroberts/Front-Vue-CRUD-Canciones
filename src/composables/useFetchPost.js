import {  ref } from "vue";
import {useUserStore} from '@/storages/UserStore'



export function useFetchPost(url){
    const userStore=useUserStore();

    const data=ref(null)
    const error=ref(null)
    const loading=ref(false)//Estado de la carga. si es false es que todavia no termina de cargas

 const peticionPost = async (body ) => {
        loading.value = true;
     userStore.loading = true;
        error.value = null;

        try {
           const  res = await fetch(url.value, {
                method: 'POST',
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
            userStore.setUser(resultado.user)
            return resultado //sin esto el if res del login nunca se cumple
        } catch (err) {
            error.value = err.message;
            throw err; // Re-lanzamos para que el signupHandler lo capture
        } finally {
            loading.value = false;
            userStore.loading = false;
        }
    };

    const logout = async () => {
        loading.value = true;
        userStore.loading = true;
        error.value = null;


        try {

       
            const res = await fetch(url.value, {
                method: 'POST',
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
            userStore.loading = false;
        }
    };
    
    return {data, error,loading, peticionPost, logout}
}