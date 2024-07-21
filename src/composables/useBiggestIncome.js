import { computed } from "vue";
import { useStore } from "vuex";

export function useBiggestIncome() {
  const store = useStore();

  const biggestIncome = computed(() => store.getters.biggestIncome);

  return {
    biggestIncome,
  };
}
