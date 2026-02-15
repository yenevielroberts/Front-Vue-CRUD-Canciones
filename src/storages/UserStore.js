import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const user = ref(null);
  const token=ref(null);
  const loading = ref(false);

  const setUser = (data) => {
    user.value = data;
  };

  const clearUser = () => {
    user.value = null;
  };

   const setToken = (data) => {
    token.value = data;
  };

  return { user, loading, setUser, clearUser, setToken };
});