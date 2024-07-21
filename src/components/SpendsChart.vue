<template>
  <div class="chart-container">
    <h2 class="chart-title">Расходы</h2>
    <div class="chart-wrapper">
      <Pie :data="chartData" :options="options" />
    </div>
  </div>
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "vue-chartjs";
import { computed } from "vue";
import { UseSpends } from "../composables/useSpends";

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: "SpendsChart",
  components: { Pie },
  setup() {
    const { spends } = UseSpends();

    const aggregatedData = computed(() => {
      const categories = [];
      const counts = [];

      spends.value.forEach((spend) => {
        const index = categories.indexOf(spend.category);
        if (index === -1) {
          categories.push(spend.category);
          counts.push(spend.count);
        } else {
          counts[index] += spend.count;
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
            backgroundColor: [
              "green",
              "blue",
              "orange",
              "purple",
              "yellow",
              "lightblue",
              "brown",
              "red",
              "pink",
              "gray",
              "black",
              "white",
              "lightblue",
              "green",
              "orange",
            ],
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
