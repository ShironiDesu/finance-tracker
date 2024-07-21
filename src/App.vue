<script>
import BiggestIncomeVue from "./components/BiggestIncome.vue";
import BiggestSpendVue from "./components/BiggestSpend.vue";
import HeaderComponentVue from "./components/HeaderComponent.vue";
import IncomesChartVue from "./components/IncomesChart.vue";
import SpendAndIncomeListVue from "./components/SpendAndIncomeList.vue";
import SpendsChartVue from "./components/SpendsChart.vue";
import TotalBalanceVue from "./components/TotalBalance.vue";
import TotalIncomeVue from "./components/TotalIncome.vue";
import TotalSpendVue from "./components/TotalSpend.vue";

export default {
  components: {
    HeaderComponentVue,
    SpendAndIncomeListVue,
    TotalBalanceVue,
    TotalSpendVue,
    TotalIncomeVue,
    BiggestSpendVue,
    BiggestIncomeVue,
    IncomesChartVue,
    SpendsChartVue,
  },
};
</script>

<template>
  <div class="dashboard">
    <HeaderComponentVue />
    <div class="cards-container">
      <div class="card">
        <TotalSpendVue />
      </div>
      <div class="card">
        <TotalIncomeVue />
      </div>
    </div>
    <div class="cards-container">
      <div class="card">
        <BiggestSpendVue />
      </div>
      <div class="card">
        <BiggestIncomeVue />
      </div>
    </div>
    <div class="charts-container">
      <IncomesChartVue />
      <TotalBalanceVue />
      <SpendsChartVue />
    </div>
    <SpendAndIncomeListVue />
  </div>
</template>

<style>
#app {
  width: 100vw;
  display: flex;
  justify-content: center;
}
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.cards-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.card {
  flex: 1;
  min-width: 300px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  box-sizing: border-box;
}

.charts-container {
  display: flex;
  gap: 20px;
  width: 100%;
  flex-wrap: wrap;
}

.charts-container > * {
  flex: 1;
  min-width: 300px;
}
</style>
