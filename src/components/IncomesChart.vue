<template>
  <div class="chart-container">
    <h2>Доходы</h2>
    <div class="chart-wrapper">
      <Pie :data="chartData" :options="options" />
    </div>
  </div>
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "vue-chartjs";
import { computed } from "vue";
import { useIncomes } from "../composables/useIncomes.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: "IncomesChart",
  components: { Pie },
  setup() {
    const { incomes } = useIncomes();

    const aggregatedData = computed(() => {
      const categories = [];
      const counts = [];

      incomes.value.forEach((income) => {
        const index = categories.indexOf(income.category);
        if (index === -1) {
          categories.push(income.category);
          counts.push(income.count);
        } else {
          counts[index] += income.count;
        }
      });

      if (categories.length === 0) {
        return {
          labels: [],
          datasets: [
            {
              backgroundColor: ["gray"],
              data: [1],
            },
          ],
        };
      }

      return {
        labels: categories,
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
            data: counts,
          },
        ],
      };
    });

    const options = {
      responsive: true,
      maintainAspectRatio: false,
    };

    return {
      chartData: aggregatedData,
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

.chart-wrapper {
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 300px;
  border: 2px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
}

.chart-wrapper canvas {
  max-width: 100%;
  max-height: 100%;
}
</style>
