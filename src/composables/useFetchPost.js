import { onMounted, ref, watch } from "vue";

export function useFetchPost(url){

    const data=ref(null)
    const error=ref(null)
    const loading=ref(false)//Estado de la carga. si es false es que todavia no termina de cargas

 const peticionPost = async (body ) => {
        loading.value = true;
        error.value = null;

        // Si pasa una url, usa esa. Si no, usa la del composable.

        try {
            const res = await fetch(url.value, {
                method: 'POST',
                credentials:'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            //Obtenemos el JSON de la respuesta (sea éxito o error)
            const resultado= await res.json();

            if(!res.ok){
                error.value=resultado.error || "Error en el servidor";
                throw new Error (error.value);
            }
            data.value=resultado;
            return resultado;

        } catch (err) {
            error.value = err.message;
            throw err; // Re-lanzamos para que el signupHandler lo capture
        } finally {
            loading.value = false;
        }
    };
    
    return {data, error,loading, peticionPost}
}