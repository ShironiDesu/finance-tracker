import { ref, computed } from "vue";
import { useStore } from "vuex";

export function useIncomes() {
  const store = useStore();
  const incomes = computed(() => store.getters.incomes);
  const incomeCategories = computed(() => {
    return store.getters.incomeCategories;
  });
  const newIncome = ref("");
  const newIncomeCount = ref(null);
  const selectedIncomeCategory = ref("");
  const today = new Date().toISOString().substr(0, 10);
  const newIncomeDate = ref(today);
  const timeFrame = ref("allIncomes");
  const addIncome = () => {
    if (
      newIncome.value.trim() &&
      selectedIncomeCategory.value &&
      newIncomeCount.value !== null
    ) {
      const income = {
        id: Date.now(),
        category: selectedIncomeCategory.value,
        description: newIncome.value,
        date: newIncomeDate.value,
        count: Number(newIncomeCount.value),
      };
      store.commit("addIncome", income);
      newIncome.value = "";
      newIncomeCount.value = null;
      selectedIncomeCategory.value = "";
      newIncomeDate.value = today;
    }
  };
  const filteredIncomes = computed(() => {
    if (timeFrame.value === "allIncomes") {
      return incomes.value;
    }
    const now = new Date();
    let filteredIncomes;
    switch (timeFrame.value) {
      case "3days":
        filteredIncomes = new Date(now.setDate(now.getDate() - 3));
        break;
      case "week":
        filteredIncomes = new Date(now.setDate(now.getDate() - 7));
        break;
      case "halfYear":
        filteredIncomes = new Date(now.setMonth(now.getMonth() - 6));
        break;
      case "year":
        filteredIncomes = new Date(now.setFullYear(now.getFullYear() - 1));
        break;
      default:
        return incomes.value;
    }
    return incomes.value.filter((income) => {
      return new Date(income.date) >= filteredIncomes;
    });
  });
  const deleteIncome = (id) => {
    store.commit("deleteIncome", id);
  };

  return {
    incomes: filteredIncomes,
    newIncome,
    newIncomeCount,
    selectedIncomeCategory,
    incomeCategories,
    newIncomeDate,
    timeFrame,
    addIncome,
    deleteIncome,
  };
}
