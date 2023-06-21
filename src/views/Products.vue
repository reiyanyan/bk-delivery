<template>
  <div class="bg-bk py-14">
    <div class="container grid grid-cols-8 gap-8">
      <div class="col-span-2 flex flex-col gap-8">
        <div class="bg-green-400">
          <p>search</p>
        </div>
        <div class="flex flex-col gap-4">
          <div
            v-for="i in 8"
            :key="i"
            class="rounded-lg px-4 py-2"
            :class="[i === 4 ? 'bg-[#faaf18]' : 'bg-[#fbe6d6]']"
          >
            <p class="text-xl font-bold">search</p>
          </div>
        </div>
      </div>
      <div class="col-span-6">
        <div class="grid grid-cols-5 p-4 rounded-md bg-white shadow-2xl">
          <div class="col-span-3 flex flex-col gap-4">
            <p>2 Pcs Chicken Strips</p>
            <p>2 pcs chicken strips</p>
            <img
              class="aspect-square h-[200px] w-[200px]"
              src="https://via.placeholder.com/250"
              alt=""
            />
          </div>
          <div class="col-span-2 flex flex-col gap-4">
            <p>2 Pcs Chicken Strips</p>
            <div class="flex flex-row justify-around">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18 12H6"
                />
              </svg>
              <input class="text-center" v-model="productCount" type="text" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
            </div>
            <BkButton>Add to Cart</BkButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BkButton from "@/components/button/BkButton.vue";

export default defineComponent({
  components: {
    BkButton,
  },
  setup() {
    const productCount = ref(1);

    return {
      productCount,
    };
  },
});
</script>
