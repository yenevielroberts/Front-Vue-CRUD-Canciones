import { onMounted, ref, watch } from "vue";

export function useFetchPost(url){

    const data=ref(null)
    const error=ref(null)
    const loading=ref(false)//Estado de la carga. si es false es que todavia no termina de cargas

 const login = async (body ) => {
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

            if (!res.ok) return alert("Credenciales incorrectas");
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