<template>
  <div class="min-h-screen bg-bk py-14">
    <div class="container grid grid-cols-8 gap-8">
      <div class="col-span-2">
        <SideMenu></SideMenu>
      </div>
      <div class="col-span-6">
        <div
          class="grid grid-cols-5 p-4 rounded-md divide-x bg-white shadow-2xl"
        >
          <div class="col-span-3 flex flex-col pr-8 gap-4 items-center">
            <p class="text-2xl font-bold">{{ product.name }}</p>
            <p>{{ product.desc }}</p>
            <img
              class="aspect-square h-[200px] w-[200px]"
              :src="product.img"
              alt=""
            />
          </div>
          <div class="col-span-2 flex flex-col pl-8 gap-4">
            <p class="text-2xl font-bold">
              {{ rupiahFormatter(product.price) }}
            </p>
            <QtyButton v-model="productCount"></QtyButton>
            <BkButton @click="addToCart">Add to Cart</BkButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import BkButton from "@/components/button/BkButton.vue";
import { useRoute, useRouter } from "vue-router";
import SideMenu from "@/components/menu/SideMenu.vue";
import { useCatalogueStore, useCartStore, type ProductItem } from "@/store";
import { turnSlugToString, rupiahFormatter } from "@/helpers";
import QtyButton from "@/components/button/QtyButton.vue";
import { CartType } from "../store/cart";

export default defineComponent({
  components: {
    BkButton,
    SideMenu,
    QtyButton,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const catalogue = useCatalogueStore();
    const cart = useCartStore();

    const productCount = ref(1);
    const product = ref<ProductItem>({
      id: "",
      name: "",
      desc: "",
      img: "",
      price: 0,
      slug: "",
    });

    const findObject = (category: string, name: string) => {
      const avail = catalogue.catalogue[category].find((item) => {
        return item.name === turnSlugToString(name);
      });

      if (!avail) return undefined;

      const isCartExist = cart.isItemExist({ slug: avail.slug });
      if (isCartExist) productCount.value = isCartExist.value.count;

      return avail;
    };

    const checkProductAvailable = async (name: string) => {
      let exist = false;
      await Promise.all(
        catalogue.categoryList.map((val) => {
          const avail = findObject(val, name);
          if (avail) {
            exist = true;
            product.value = avail;
          }
        })
      ).then(() => {
        if (!exist) router.push("/404");
      });
    };

    const addToCart = () => {
      const { id, name, img, price, slug } = product.value;
      const item: CartType = {
        id,
        name,
        img,
        price,
        slug,
        count: productCount.value,
      };
      cart.addToCarts(item);
    };

    onMounted(async () => {
      await catalogue.getCatalogue();
      const { slug } = route.params;
      checkProductAvailable(String(slug));
    });

    return {
      productCount,
      product,
      rupiahFormatter,
      addToCart,
    };
  },
});
</script>
