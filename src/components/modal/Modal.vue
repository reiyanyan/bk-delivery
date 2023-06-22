<template>
  <Transition>
    <div
      v-if="modelValue"
      class="flex items-center justify-center fixed bg-stone-800/60 top-0 left-0 right-0 z-[2000] h-screen w-screen"
      @click="onClose"
    >
      <div
        class="relative w-1/2 p-6 bg-white rounded-lg"
        @click.stop="() => {}"
      >
        <div
          class="absolute -top-[10px] -right-[10px] inline-flex items-center justify-center p-1 text-xs font-bold text-white bg-bk-primary rounded-full cursor-pointer"
          @click="onClose"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <slot name="body">default body</slot>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    modelValue: Boolean,
  },
  emits: ["update:modelValue", "close"],
  setup(_, { emit }) {
    const onClose = () => {
      emit("update:modelValue", false);
      emit("close");
    };

    return { onClose };
  },
});
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
</style>
