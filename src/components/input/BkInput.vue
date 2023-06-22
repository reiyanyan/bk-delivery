<template>
  <input
    :value="modelValue"
    @input="updateValue"
    type="text"
    class="outline-gray-300 border border-gray-300 rounded p-2"
    :placeholder="placeholder"
    :maxlength="maxlength"
    v-bind="$attrs"
  />
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
    placeholder: {
      type: String,
      default: "Default placeholder",
    },
    maxlength: {
      type: Number,
      default: 225,
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
