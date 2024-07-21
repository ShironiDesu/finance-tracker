<template>
  <div class="biggest-income-container">
    <span class="biggest-income-title">Самый большой доход:</span>
    <div v-if="biggestIncome.count" class="biggest-income-details">
      <span class="biggest-income-item">Сумма: {{ biggestIncome.count }}</span>
      <span class="biggest-income-item"
        >Категория: {{ biggestIncome.category }}</span
      >
      <span class="biggest-income-item">Дата: {{ biggestIncome.date }}</span>
    </div>
    <div v-else>
      <span>Нет данных о доходах</span>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "BiggestIncome",
  setup() {
    const store = useStore();
    const biggestIncome = computed(() => store.getters.filteredBiggestIncome);

    return {
      biggestIncome,
    };
  },
};
</script>

<style scoped>
.biggest-income-container {
  padding: 20px;
  background-color: #e3f2fd;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.biggest-income-title {
  font-size: 20px;
  font-weight: 700;
  color: #333;
}

.biggest-income-details {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.biggest-income-item {
  font-size: 16px;
  color: #555;
}
</style>
