<template>
  <div class="total-income-container">
    <span class="total-income-text">Общий доход: {{ totalIncome }}</span>
  </div>
</template>

<script>
import { useTotalIncome } from "../composables/useTotalIncome.js";

export default {
  name: "TotalIncome",
  setup() {
    const { totalIncome } = useTotalIncome();
    return {
      totalIncome,
    };
  },
};
</script>

<style scoped>
.total-income-container {
  padding: 15px;
  background-color: #e9f5ff;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.total-income-text {
  font-size: 18px;
  color: #333;
  font-weight: 600;
}
</style>
