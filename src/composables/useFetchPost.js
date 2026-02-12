import { onMounted, ref, watch } from "vue";

export function useFetchPost(url){

    const data=ref(null)
    const error=ref(null)
    const loading=ref(false)//Estado de la carga. si es false es que todavia no termina de cargas

 const login = async (body,urlAlternativa = null ) => {
        loading.value = true;
        error.value = null;

        // Si pasa una url, usa esa. Si no, usa la del composable.
    const urlDestino = urlAlternativa || url.value;
        try {
            const res = await fetch(urlDestino, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            if (!res.ok) throw new Error('Error al actualizar');

            return await res.json();
        } catch (err) {
            error.value = err.message;
            throw err;
        } finally {
            loading.value = false;
        }
    };

    
    return {data, error,loading, login}
}