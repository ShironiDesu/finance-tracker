import { computed } from "vue";
import { useStore } from "vuex";

export function useBiggestSpend() {
  const store = useStore();

  const biggestSpend = computed(() => store.getters.biggestSpend);

  return {
    biggestSpend,
  };
}
