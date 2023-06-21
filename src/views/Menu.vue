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
        <div class="grid grid-cols-2 gap-8">
          <div
            v-for="i in 4"
            :key="i"
            class="flex flex-col gap-4 p-4 rounded-md bg-white shadow-2xl"
          >
            <img
              class="aspect-square h-full"
              src="https://via.placeholder.com/250"
              alt=""
            />
            <div class="flex flex-row justify-between">
              <div class="flex flex-col">
                <p>Nama Menu</p>
                <p>Rp.123,900</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();

    onMounted(() => {
      const { slug } = route.params;

      if (!slug) router.replace("/menu/halo");
    });

    return {};
  },
});
</script>
