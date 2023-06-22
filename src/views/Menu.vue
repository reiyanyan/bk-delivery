<template>
  <div class="min-h-screen bg-bk py-14">
    <div class="container grid grid-cols-8 gap-8">
      <div class="col-span-2">
        <SideMenu v-model="currentSlug"></SideMenu>
      </div>
      <div class="col-span-6">
        <div class="grid grid-cols-2 gap-8">
          <div
            v-for="(item, index) in productList"
            :key="index"
            class="flex flex-col gap-4 p-4 rounded-md bg-white shadow-2xl cursor-pointer"
            @click="redirectProducts(item.slug)"
          >
            <img class="aspect-square h-full" :src="item.img" alt="" />
            <div class="flex flex-row justify-between">
              <div class="flex flex-col">
                <p class="text-xl font-bold">{{ item.name }}</p>
                <p class="text-lg font-bold">
                  {{ rupiahFormatter(item.price) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ProductItem, useCatalogueStore } from "@/store";
import {
  getSlugFromString,
  turnSlugToString,
  rupiahFormatter,
} from "@/helpers";
import SideMenu from "@/components/menu/SideMenu.vue";

export default defineComponent({
  components: {
    SideMenu,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const catalogue = useCatalogueStore();

    const categoryList = computed(() => catalogue.categoryList);
    const currentSlug = ref("");
    const productList = ref<ProductItem[]>([]);

    const getProductList = () => {
      productList.value =
        catalogue.catalogue[turnSlugToString(currentSlug.value)];
    };

    const redirectProducts = (val: string) => {
      router.push("/products/" + getSlugFromString(val));
    };

    watch(
      () => currentSlug.value,
      () => getProductList()
    );

    onMounted(async () => {
      await catalogue.getCatalogue();

      const { slug } = route.params;
      if (
        !slug ||
        !categoryList.value.includes(turnSlugToString(String(slug)))
      ) {
        const mockedSlug = getSlugFromString(categoryList.value[0]);
        router.replace("/menus/" + mockedSlug);
        currentSlug.value = mockedSlug;
      } else {
        currentSlug.value = String(slug);
      }

      getProductList();
    });

    return {
      getSlugFromString,
      currentSlug,
      productList,
      rupiahFormatter,
      redirectProducts,
    };
  },
});
</script>
