import { ref, computed } from "vue";
import { useStore } from "vuex";

export function UseSpends() {
  const store = useStore();
  const spends = computed(() => store.getters.filteredSpends);
  const spendsCategories = computed(() => store.getters.spendsCategories);
  const newSpend = ref("");
  const newSpendCount = ref(null);
  const today = new Date().toISOString().substr(0, 10);
  const newSpendDate = ref(today);
  const timeFrameSpend = computed({
    get: () => store.state.timeFrame,
    set: (value) => store.commit("setTimeFrameSpends", value),
  });
  const selectedSpendCategory = ref("");

  const addSpends = () => {
    if (
      newSpend.value.trim() &&
      selectedSpendCategory.value &&
      newSpendCount.value !== null
    ) {
      const spend = {
        id: Date.now(),
        description: newSpend.value,
        count: Number(newSpendCount.value),
        date: newSpendDate.value,
        category: selectedSpendCategory.value,
      };
      store.commit("addSpends", spend);
      newSpend.value = "";
      newSpendCount.value = null;
      selectedSpendCategory.value = "";
    }
  };

  const deleteSpend = (id) => {
    store.commit("deleteSpend", id);
  };

  return {
    spends,
    newSpend,
    newSpendCount,
    spendsCategories,
    selectedSpendCategory,
    timeFrameSpend,
    newSpendDate,
    addSpends,
    deleteSpend,
  };
}
