import { computed } from "vue";
import { useStore } from "vuex";

export function useTotalIncome() {
  const store = useStore();

  const totalIncome = computed(() => store.getters.totalIncome);

  return {
    totalIncome,
  };
}
