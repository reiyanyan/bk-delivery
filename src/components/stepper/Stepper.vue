<template>
  <div class="step_sections">
    <p class="step" :class="{ active: isStepActive('CART') }">
      <span
        class="inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -mt-7 -ml-4"
      >
        1
      </span>
      <strong class="text">Cart</strong>
    </p>
    <p class="step" :class="{ active: isStepActive('DELIVERY') }">
      <span
        class="inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -mt-7 -ml-4"
      >
        2
      </span>
      <strong class="text"> Delivery Info </strong>
    </p>
    <p class="step" :class="{ active: isStepActive('PAYMENT') }">
      <span
        class="inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -mt-7 -ml-4"
      >
        3
      </span>
      <strong class="text">Payment</strong>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCartStore, type StepType } from "@/store";

export default defineComponent({
  setup() {
    const cart = useCartStore();

    const isStepActive = (step: StepType) => cart.isStepActive(step);

    return {
      isStepActive,
    };
  },
});
</script>

<style scoped>
.step_sections {
  margin: 0px 0px 20px;
  display: table;
  width: 100%;
  z-index: 99;
  position: relative;
  overflow: hidden;
}

.step_sections .text {
  font-weight: normal;
  position: relative;
  z-index: 1000;
  margin-left: 5px;
}

.step {
  padding: 12px 12px 10px;
  width: 33.33333%;
  float: left;
  font: 21px/20px "Flame-Regular";
  text-align: center;
  color: #c5a997;
  background-color: #fcebd9;
  position: relative;
  box-sizing: border-box;
}

.step.active {
  background-color: #faaf18;
  color: #8b542f;
}

.step.active span {
  background-color: #8b542f;
}

.step:first-child {
  border-radius: 5px 0px 0px 5px;
}

.step:last-child {
  border-radius: 0px 5px 5px 0px;
}

.step:last-child:before {
  display: none;
}

.step.active:before {
  content: "";
  width: 32px;
  height: 32px;
  position: absolute;
  right: -16px;
  top: 6px;
  transform: rotate(45deg);
  background: #faaf18;
  border-radius: 2px 5px 2px 0px;
  z-index: 1000;
}
</style>
