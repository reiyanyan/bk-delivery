<template>
  <div class="bg-bk">
    <carousel :autoplay="5000" :wrapAround="true">
      <slide v-for="slide in 10" :key="slide">
        <img
          class="w-full h-[400px]"
          src="https://via.placeholder.com/100"
          alt=""
        />
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
    <div class="container flex flex-col items-center py-8 gap-4">
      <p class="text-2xl font-semibold">Our Menus</p>
      <div class="grid grid-cols-3 gap-8 w-full">
        <div
          v-for="(item, index) in categoryList"
          :key="index"
          class="flex flex-col gap-4 p-4 rounded-md bg-white shadow-2xl cursor-pointer"
          @click="redirect(item)"
        >
          <img
            class="aspect-square h-full"
            src="https://via.placeholder.com/100"
            alt=""
          />
          <div class="flex flex-row justify-between items-center">
            <p class="font-bold text-xl text-bk-dark">{{ item }}</p>
            <BkButton>Order</BkButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import BkButton from "@/components/button/BkButton.vue";
import { useCatalogueStore } from "@/store";
import { useRouter } from "vue-router";
import { getSlugFromString } from "@/helpers";

export default defineComponent({
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    BkButton,
  },
  setup() {
    const catalogue = useCatalogueStore();
    const router = useRouter();

    const categoryList = computed(() => catalogue.categoryList);

    const redirect = (val: string) => {
      router.push(`/menus/${getSlugFromString(val)}`);
    };

    onMounted(async () => {
      await catalogue.getCatalogue();
    });

    return {
      categoryList,
      redirect,
    };
  },
});
</script>

<style scoped>
:deep(.carousel__pagination-button::after) {
  height: 7px;
  width: 7px;
  border-radius: 50%;
  background-color: #f1bc87;
}

:deep(.carousel__pagination-button--active::after) {
  height: 7px;
  width: 7px;
  border-radius: 50%;
  background-color: #ed7801;
}
</style>
