<template>
  <div class="chart-container">
    <h2 class="chart-title">Общий баланс</h2>
    <div class="chart-wrapper">
      <Pie :data="chartData" :options="options" />
    </div>
  </div>
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "vue-chartjs";
import { computed } from "vue";
import { useStore } from "vuex";

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: "TotalBalance",
  components: { Pie },
  setup() {
    const store = useStore();

    const chartData = computed(() => {
      const totalIncome = store.getters.totalIncome;
      const totalSpend = store.getters.totalSpend;

      let data, backgroundColor;

      if (totalIncome === 0 && totalSpend === 0) {
        data = [1];
        backgroundColor = ["gray"];
      } else {
        data = [totalIncome, totalSpend];
        backgroundColor = ["green", "red"];
      }

      return {
        labels: ["Общий доход", "Общий расход"],
        datasets: [
          {
            backgroundColor: backgroundColor,
            data: data,
          },
        ],
      };
    });

    const options = {
      responsive: true,
      maintainAspectRatio: false,
    };

    return {
      chartData,
      options,
    };
  },
};
</script>

<style scoped>
.chart-container {
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.chart-title {
  font-size: 20px;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
}

.chart-wrapper {
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 300px;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.chart-wrapper canvas {
  max-width: 100%;
  max-height: 100%;
}
</style>
