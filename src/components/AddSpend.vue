<template>
  
    <div v-if="isModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <button class="modal-close" @click="closeModal">X</button>
        <h2 class="modal-title">Добавить расход</h2>
        <div class="modal-body">
          <div class="form-group">
            <label for="spend-title">Название</label>
            <input type="text" v-model="newSpend" id="spend-title" />
          </div>

          <div class="form-group">
            <label for="spend-count">Сумма</label>
            <input type="number" v-model="newSpendCount" id="spend-count" />
          </div>

          <div class="form-group">
            <label for="spend-date">Дата</label>
            <input type="date" v-model="newSpendDate" id="spend-date" />
          </div>

          <div class="form-group">
            <label for="spend-category">Категория</label>
            <select v-model="selectedSpendCategory" id="spend-category">
              <option disabled value="">Выберите категорию</option>
              <option
                v-for="spendsCategory in spendsCategories"
                :key="spendsCategory"
                :value="spendsCategory"
              >
                {{ spendsCategory }}
              </option>
            </select>
          </div>

          <button class="modal-submit" @click="addSpends">Добавить</button>
        </div>
      </div>
    </div>
  
</template>

<script>
import { UseSpends } from "../composables/useSpends.js";

export default {
  name: "AddSpends",
  props: {
    isModal: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { emit }) {
    const {
      spends,
      newSpend,
      newSpendCount,
      spendsCategories,
      selectedSpendCategory,
      deleteSpend,
      newSpendDate,
      addSpends,
    } = UseSpends();

    const closeModal = () => {
      emit("closeModal");
    };

    return {
      spends,
      newSpend,
      newSpendDate,
      newSpendCount,
      spendsCategories,
      selectedSpendCategory,
      deleteSpend,
      addSpends,
      closeModal,
    };
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  position: relative;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
}

.modal-title {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

.modal-body {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.form-group label {
  font-size: 16px;
  color: #333;
}

.form-group input,
.form-group select {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 16px;
}

.modal-submit {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #3498db;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  align-self: center;
  transition: background-color 0.3s;
}

.modal-submit:hover {
  background-color: #2980b9;
}
</style>
