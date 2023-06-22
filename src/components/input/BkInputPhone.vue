<template>
  <div class="flex flex-row items-center border border-gray-300 rounded p-2">
    <p>+62</p>
    <BkInput v-bind="$attrs" class="outline-0 border-0"></BkInput>
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
