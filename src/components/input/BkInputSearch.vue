<template>
  <div
    class="flex flex-row items-center border border-gray-300 rounded-lg justify-between bg-white"
  >
    <div class="py-2">
      <BkInput
        v-bind="$attrs"
        class="outline-0 border-0 pl-4"
        placeholder="Search"
      ></BkInput>
    </div>
    <div class="rounded-tr-lg rounded-br-lg bg-bk-primary px-1 py-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-6 h-6 text-white"
      >
        <path
          fill-rule="evenodd"
          d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BkInput from "./BkInput.vue";

export default defineComponent({
  components: {
    BkInput,
  },
});
</script>

<style scoped>
input {
  height: 24px;
}
</style>
