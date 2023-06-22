<template>
  <div
    class="flex flex-row justify-between items-center border border-gray-300 rounded px-1"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-5 h-5 cursor-pointer text-bk-primary"
      @click="decrease"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
    </svg>
    <input
      v-model="modelValue"
      class="text-center w-[50px] select-none"
      type="text"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-5 h-5 cursor-pointer text-bk-primary"
      @click="increase"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
export default defineComponent({
  props: {
    modelValue: {
      type: Number,
      default: 1,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const decrease = () => {
      if (props.modelValue > 1) emit("update:modelValue", props.modelValue - 1);
    };

    const increase = () => {
      if (props.modelValue > 0) emit("update:modelValue", props.modelValue + 1);
    };

    watch(
      () => props.modelValue,
      (val) => {
        emit("update:modelValue", val);
      }
    );

    return {
      increase,
      decrease,
    };
  },
});
</script>
