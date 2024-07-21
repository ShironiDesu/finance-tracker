import { computed } from "vue";
import { useStore } from "vuex";

export function useTotalSpend() {
  const store = useStore();

  const totalSpend = computed(() => store.getters.totalSpend);

  return {
    totalSpend,
  };
}
