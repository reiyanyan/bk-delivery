<template>
  <textarea
    v-bind="$attrs"
    class="border border-[#e0e0e0] py-[10px] px-[15px] rounded"
    :class="{ 'bg-[#efefef] opacity-30 border-gray-500': disabled }"
    :disabled="disabled"
    :value="modelValue"
    @input="updateValue"
  >
  </textarea>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      required: true,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  setup(_, { emit }) {
    const updateValue = (event: Event) => {
      emit("update:modelValue", (event.target as HTMLInputElement).value);
    };

    return { updateValue };
  },
});
</script>
