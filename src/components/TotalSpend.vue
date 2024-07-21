<template>
  <div class="total-spend-container">
    <span class="total-spend-text">Общий расход: {{ totalSpend }}</span>
  </div>
</template>

<script>
import { useTotalSpend } from "../composables/useTotalSpend.js";

export default {
  name: "TotalSpend",
  setup() {
    const { totalSpend } = useTotalSpend();

    return {
      totalSpend,
    };
  },
};
</script>

<style scoped>
.total-spend-container {
  padding: 15px;
  background-color: #ffe9e9;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.total-spend-text {
  font-size: 18px;
  color: #333;
  font-weight: 600;
}
</style>
