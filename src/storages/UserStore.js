import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  // Carga el usuario guardado cuando inicia la app.
  const storedUser = localStorage.getItem('user');
  const user = ref(storedUser ? JSON.parse(storedUser) : null);
  const token = ref(localStorage.getItem('token'));
  const loading = ref(false);

  const setUser = (data) => {
    user.value = data;
    // Guarda el usuario para no perderlo al recargar.
    if (data) {
      localStorage.setItem('user', JSON.stringify(data));
    } else {
      localStorage.removeItem('user');
    }
  };

  const clearUser = () => {
    // Limpia los datos locales al cerrar sesion.
    user.value = null;
    token.value = null;
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

   const setToken = (data) => {
    token.value = data;
    // Guarda el token para validar el acceso.
    if (data) {
      localStorage.setItem('token', data);
    } else {
      localStorage.removeItem('token');
    }
  };

  return { user, loading, setUser, clearUser, setToken };
});