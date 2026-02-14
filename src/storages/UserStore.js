import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const user = ref(null);
  const loading = ref(false);

  const setUser = (data) => {
    user.value = data;
  };

  const clearUser = () => {
    user.value = null;
  };

  return { user, loading, setUser, clearUser };
});