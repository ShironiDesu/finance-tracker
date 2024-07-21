<template>
  <div class="header-container">
    <button class="add-income-btn" @click="openIncomeModal">
      Добавить доходы
    </button>
    <AddIncomeVue
      v-if="incomeModalOpen"
      @closeModal="closeIncomeModal"
      :isModal="incomeModalOpen"
    />

    <button class="add-spend-btn" @click="openSpendModal">
      Добавить расход
    </button>
    <AddSpendVue
      v-if="spendModalOpen"
      @closeModal="closeSpendModal"
      :isModal="spendModalOpen"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import AddIncomeVue from "./AddIncome.vue";
import AddSpendVue from "./AddSpend.vue";

export default {
  name: "HeaderComponent",
  components: {
    AddIncomeVue,
    AddSpendVue,
  },
  setup() {
    const incomeModalOpen = ref(false);
    const spendModalOpen = ref(false);

    const openIncomeModal = () => {
      incomeModalOpen.value = true;
    };

    const closeIncomeModal = () => {
      incomeModalOpen.value = false;
    };

    const openSpendModal = () => {
      spendModalOpen.value = true;
    };

    const closeSpendModal = () => {
      spendModalOpen.value = false;
    };

    return {
      incomeModalOpen,
      openIncomeModal,
      closeIncomeModal,
      spendModalOpen,
      openSpendModal,
      closeSpendModal,
    };
  },
};
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding:  20px 0;
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
  width: 100%;
}

.header-container button {
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.header-container button:hover {
  background-color: #0056b3;
}

.add-income-btn {
  margin-right: 10px;
}

.add-spend-btn {
  margin-left: 10px;
}
@media screen and (max-width:440px) {
  .header-container button {
    padding: 5px 10px;
    font-size: 12px;
  }
}
</style>
