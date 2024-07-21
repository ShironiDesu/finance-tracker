import { createStore } from "vuex";

const store = createStore({
  state: {
    incomes: JSON.parse(localStorage.getItem("incomes")) || [],
    spends: JSON.parse(localStorage.getItem("spends")) || [],
    spendsCategories: [
      "Продукты питания",
      "Напитки",
      "Транспорт",
      "Развлечения",
      "Одежда и обувь",
      "Коммунальные услуги",
      "Интернет и связь",
      "Здоровье",
      "Образование",
      "Подарки и пожертвования",
      "Бытовая химия",
      "Гигиена и уход",
      "Электроника",
      "Дом и сад",
      "Товары для детей",
    ],
    incomeCategories: ["Зарплата", "Подработка", "Инвестиции", "Прочее"],
    timeFrameSpends: "allSpends",
    timeFrameIncomes: "allIncomes",
  },
  mutations: {
    addIncome(state, income) {
      state.incomes.push(income);
      localStorage.setItem("incomes", JSON.stringify(state.incomes));
    },
    addSpends(state, spend) {
      state.spends.push(spend);
      localStorage.setItem("spends", JSON.stringify(state.spends));
    },
    deleteIncome(state, id) {
      state.incomes = state.incomes.filter((income) => income.id !== id);
      localStorage.setItem("incomes", JSON.stringify(state.incomes));
    },
    deleteSpend(state, id) {
      state.spends = state.spends.filter((spend) => spend.id !== id);
      localStorage.setItem("spends", JSON.stringify(state.spends));
    },
    setTimeFrameSpends(state, timeFrame) {
      state.timeFrameSpends = timeFrame;
    },
    setTimeFrameIncomes(state, timeFrame) {
      state.timeFrameIncomes = timeFrame;
    },
  },
  getters: {
    incomes: (state) => state.incomes,
    spends: (state) => state.spends,
    spendsCategories: (state) => state.spendsCategories,
    incomeCategories: (state) => state.incomeCategories,
    totalSpend: (state) => {
      return state.spends.reduce((total, spend) => total + spend.count, 0);
    },
    totalIncome: (state) => {
      return state.incomes.reduce((total, income) => total + income.count, 0);
    },
    biggestSpend: (state) => {
      if (state.spends.length === 0) return 0;
      return state.spends.reduce(
        (maxSpend, spend) => (spend.count > maxSpend.count ? spend : maxSpend),
        state.spends[0]
      );
    },
    biggestIncome: (state) => {
      if (state.incomes.length === 0) return 0;
      return state.incomes.reduce(
        (maxIncome, income) =>
          income.count > maxIncome.count ? income : maxIncome,
        state.incomes[0]
      );
    },
    filteredSpends: (state) => {
      const now = new Date();
      let filteredDate;

      switch (state.timeFrameSpends) {
        case "3days":
          filteredDate = new Date(now.setDate(now.getDate() - 3));
          break;
        case "week":
          filteredDate = new Date(now.setDate(now.getDate() - 7));
          break;
        case "halfYear":
          filteredDate = new Date(now.setMonth(now.getMonth() - 6));
          break;
        case "year":
          filteredDate = new Date(now.setFullYear(now.getFullYear() - 1));
          break;
        default:
          return state.spends;
      }

      return state.spends.filter(
        (spend) => new Date(spend.date) >= filteredDate
      );
    },
    filteredIncomes: (state) => {
      const now = new Date();
      let filteredDate;

      switch (state.timeFrameIncomes) {
        case "3days":
          filteredDate = new Date(now.setDate(now.getDate() - 3));
          break;
        case "week":
          filteredDate = new Date(now.setDate(now.getDate() - 7));
          break;
        case "halfYear":
          filteredDate = new Date(now.setMonth(now.getMonth() - 6));
          break;
        case "year":
          filteredDate = new Date(now.setFullYear(now.getFullYear() - 1));
          break;
        default:
          return state.incomes;
      }

      return state.incomes.filter(
        (income) => new Date(income.date) >= filteredDate
      );
    },
    totalSpend: (state, getters) => {
      return getters.filteredSpends.reduce(
        (total, spend) => total + spend.count,
        0
      );
    },
    totalIncome: (state, getters) => {
      return getters.filteredIncomes.reduce(
        (total, income) => total + income.count,
        0
      );
    },
    filteredBiggestSpend: (state, getters) => {
      const filteredSpends = getters.filteredSpends;
      if (filteredSpends.length === 0) return 0;
      return filteredSpends.reduce(
        (maxSpend, spend) => (spend.count > maxSpend.count ? spend : maxSpend),
        filteredSpends[0]
      );
    },
    filteredBiggestIncome: (state, getters) => {
      const filteredIncomes = getters.filteredIncomes;
      if (filteredIncomes.length === 0) return 0;
      return filteredIncomes.reduce(
        (maxIncome, income) =>
          income.count > maxIncome.count ? income : maxIncome,
        filteredIncomes[0]
      );
    },
  },
});

export default store;
