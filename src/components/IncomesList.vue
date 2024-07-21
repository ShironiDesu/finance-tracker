<template>
  <div class="incomes-list-container">
    <h2>Доход</h2>
    <div class="filter-container">
      <select v-model="timeFrame">
        <option value="allIncomes">Показать все</option>
        <option value="3days">за 3 дня</option>
        <option value="week">за неделю</option>
        <option value="halfYear">за пол года</option>
        <option value="year">за год</option>
      </select>
    </div>
    <div v-if="incomes.length === 0" class="no-income-message">Нет доходов</div>
    <ul v-else class="incomes-list">
      <li v-for="income in incomes" :key="income.id" class="income-item">
        <span class="income-description"
          >Название: {{ income.description }}</span
        >
        <span class="income-count">Доход: {{ income.count }}</span>
        <span class="income-category">Категория: {{ income.category }}</span>
        <span class="income-date">Дата: {{ income.date }}</span>
        <button class="delete-income-btn" @click="deleteIncome(income.id)">
          &#128465;
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { useIncomes } from "../composables/useIncomes";

export default {
  name: "IncomesList",
  setup() {
    const {
      incomes,
      newIncome,
      newIncomeCount,
      selectedIncomeCategory,
      incomeCategories,
      newIncomeDate,
      timeFrame,
      addIncome,
      deleteIncome,
    } = useIncomes();

    return {
      incomes,
      newIncome,
      newIncomeCount,
      selectedIncomeCategory,
      incomeCategories,
      newIncomeDate,
      timeFrame,
      addIncome,
      deleteIncome,
    };
  },
};
</script>

<style scoped>
.incomes-list-container {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
}

.filter-container {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
}

.filter-container select {
  padding: 5px 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.incomes-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.income-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-bottom: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: background-color 0.3s, box-shadow 0.3s;
}

.income-item:hover {
  background-color: #f1f1f1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.income-description,
.income-count,
.income-category,
.income-date {
  flex: 1;
  text-align: left;
}

.income-count,
.income-date {
  text-align: center;
}

.delete-income-btn {
  background: none;
  border: none;
  color: #d9534f;
  cursor: pointer;
  font-size: 16px;
  transition: color 0.3s, transform 0.3s;
}

.delete-income-btn:hover {
  color: #c9302c;
  transform: scale(1.1);
}

.no-income-message {
  text-align: center;
  color: #888;
  font-size: 18px;
  padding: 20px;
}

@media screen and (max-width: 650px) {
  .income-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .income-description,
  .income-count,
  .income-category,
  .income-date {
    text-align: left;
    font-size: 14px;
    margin: 5px 0;
  }

  .delete-income-btn {
    align-self: flex-end;
    margin-top: 10px;
  }
}

@media screen and (max-width: 400px) {
  .income-description,
  .income-count,
  .income-category,
  .income-date {
    font-size: 12px;
  }

  .delete-income-btn {
    font-size: 14px;
  }
}
</style>
