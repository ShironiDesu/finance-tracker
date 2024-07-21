import { computed } from "vue";
import { useStore } from "vuex";

export function useTotalBalance() {
  const store = useStore();

  const totalBalance = computed(() => store.getters.totalBalance);

  return {
    totalBalance,
  };
}
