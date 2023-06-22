<template>
  <button
    class="bg-bk-primary rounded text-white font-bold px-8 py-2 tracking-wider select-none"
    :class="{
      'bg-transparent border border-bk-primary text-bk-primary': outlined,
    }"
    v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// should be defined variant, but no need for now

export default defineComponent({
  props: {
    outlined: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
