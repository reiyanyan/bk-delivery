<template>
  <div class="min-h-screen py-14 bg-[#f9f4f2]">
    <div class="container">
      <Stepper></Stepper>
      <div
        class="grid grid-cols-6 divide-x w-full rounded shadow-xl p-[30px] bg-white"
      >
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Stepper from "@/components/stepper/Stepper.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Stepper,
  },
});
</script>
