import { computed, ref } from "vue";

import { ProductItem } from "./catalogue";
import { defineStore } from "pinia";

export const CART_STORE = "cart";
export const KEY_LOCALSTORAGE_CART = "carts";

export type CartType = {
  id: string;
  count: number;
} & Pick<ProductItem, "name" | "img" | "price" | "slug">;

export const Step = ["CART", "DELIVERY", "PAYMENT"] as const;
export type StepType = (typeof Step)[number];

export const useCartStore = defineStore(CART_STORE, () => {
  const carts = ref<CartType[]>([]);
  const stepActive = ref<StepType>("CART");

  const totalPriceCart = computed(() =>
    carts.value.reduce(
      (currentTotal, item) => currentTotal + item.price * item.count,
      0
    )
  );

  function isItemExist(item: Pick<CartType, "slug">) {
    const index = carts.value.findIndex((val) => val.slug === item.slug);
    if (index >= 0)
      return {
        index,
        value: carts.value[index],
      };
    else return undefined;
  }

  // function that could be add or update data in carts localstorage
  function addToCarts(item: CartType) {
    const { slug } = item;
    const isExist = isItemExist({ slug });

    if (isExist) carts.value[isExist.index] = item;
    else carts.value.push(item);

    localStorage.setItem(KEY_LOCALSTORAGE_CART, JSON.stringify(carts.value));
  }

  function loadCarts() {
    const ls = localStorage.getItem(KEY_LOCALSTORAGE_CART);
    if (ls !== null) carts.value = [...JSON.parse(ls)];
  }

  function deleteItems(item: CartType) {
    const index = carts.value.findIndex((val) => val.id === item.id);

    if (index >= 0) carts.value.splice(index, 1);

    localStorage.setItem(KEY_LOCALSTORAGE_CART, JSON.stringify(carts.value));
  }

  function isStepActive(step: StepType) {
    const index = Step.findIndex((val) => val === step);
    const indexActive = Step.findIndex((val) => val === stepActive.value);

    if (index <= indexActive) return true;
    else return false;
  }

  return {
    carts,
    addToCarts,
    loadCarts,
    deleteItems,
    isItemExist,
    stepActive,
    isStepActive,
    totalPriceCart,
  };
});
