<template>
  <div class="spends-list-container">
    <h2>Расходы</h2>
    <div class="filter-container">
      <select v-model="timeFrameSpend">
        <option value="allSpends" selected>Показать все</option>
        <option value="3days">за 3 дня</option>
        <option value="week">за неделю</option>
        <option value="halfYear">за пол года</option>
        <option value="year">за год</option>
      </select>
    </div>
    <div v-if="spends.length === 0" class="no-spend-message">Нет расходов</div>
    <ul v-else class="spends-list">
      <li v-for="spend in spends" :key="spend.id" class="spend-item">
        <span class="spend-description">Название: {{ spend.description }}</span>
        <span class="spend-count">Расход: {{ spend.count }}</span>
        <span class="spend-category">Категория: {{ spend.category }}</span>
        <span class="spend-date">Дата: {{ spend.date }}</span>
        <button class="delete-spend-btn" @click="deleteSpend(spend.id)">
          &#128465;
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { UseSpends } from "../composables/useSpends.js";

export default {
  name: "SpendList",
  setup() {
    const {
      spends,
      newSpend,
      newSpendCount,
      spendsCategories,
      selectedSpendCategory,
      deleteSpend,
      timeFrameSpend,
      addSpends,
    } = UseSpends();

    return {
      spends,
      newSpend,
      newSpendCount,
      spendsCategories,
      selectedSpendCategory,
      deleteSpend,
      timeFrameSpend,
      addSpends,
    };
  },
};
</script>

<style scoped>
.spends-list-container {
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

.spends-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.spend-item {
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

.spend-item:hover {
  background-color: #f1f1f1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.spend-description,
.spend-count,
.spend-category,
.spend-date {
  flex: 1;
  text-align: left;
}

.spend-count,
.spend-date {
  text-align: center;
}

.delete-spend-btn {
  background: none;
  border: none;
  color: #d9534f;
  cursor: pointer;
  font-size: 16px;
  transition: color 0.3s, transform 0.3s;
}

.delete-spend-btn:hover {
  color: #c9302c;
  transform: scale(1.1);
}

.no-spend-message {
  text-align: center;
  color: #888;
  font-size: 18px;
  padding: 20px;
}

@media screen and (max-width: 650px) {
  .spend-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .spend-description,
  .spend-count,
  .spend-category,
  .spend-date {
    text-align: left;
    font-size: 14px;
    margin: 5px 0;
  }

  .delete-spend-btn {
    align-self: flex-end;
    margin-top: 10px;
  }
}

@media screen and (max-width: 400px) {
  .spend-description,
  .spend-count,
  .spend-category,
  .spend-date {
    font-size: 12px;
  }

  .delete-spend-btn {
    font-size: 14px;
  }
}
</style>
