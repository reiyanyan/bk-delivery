import { ProductItem } from "./catalogue";
import { defineStore } from "pinia";
import { ref } from "vue";

export const CART_STORE = "cart";
export const KEY_LOCALSTORAGE_CART = "carts";

export type CartType = {
  id: string;
  count: number;
} & Pick<ProductItem, "name" | "img" | "price">;

export const useCartStore = defineStore(CART_STORE, () => {
  const carts = ref<CartType[]>([]);

  function addToCarts(item: CartType) {
    const index = carts.value.findIndex((val) => val.id === item.id);

    if (index >= 0) carts.value[index] = item;
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

  return {
    carts,
    addToCarts,
    loadCarts,
    deleteItems,
  };
});
