<template>
  <div class="biggest-spend-container">
    <span class="biggest-spend-title">Самый большой расход:</span>
    <div v-if="biggestSpend.count" class="biggest-spend-details">
      <span class="biggest-spend-item">Сумма: {{ biggestSpend.count }}</span>
      <span class="biggest-spend-item"
        >Категория: {{ biggestSpend.category }}</span
      >
      <span class="biggest-spend-item">Дата: {{ biggestSpend.date }}</span>
    </div>
    <div v-else>
      <span>Нет данных о расходах</span>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "BiggestSpend",
  setup() {
    const store = useStore();
    const biggestSpend = computed(() => store.getters.filteredBiggestSpend);

    return {
      biggestSpend,
    };
  },
};
</script>

<style scoped>
.biggest-spend-container {
  padding: 20px;
  background-color: #fff8e1;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.biggest-spend-title {
  font-size: 20px;
  font-weight: 700;
  color: #333;
}

.biggest-spend-details {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.biggest-spend-item {
  font-size: 16px;
  color: #555;
}
</style>
