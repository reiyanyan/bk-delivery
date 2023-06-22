<template>
  <nav
    class="flex flex-row bg-stone-800 text-white px-20 h-[5.5rem] justify-between"
  >
    <div class="relative flex flex-row gap-[4rem] items-center h-full py-3">
      <img
        class="absolute rounded-full h-[90px] w-[90px] inset-y-4"
        src="https://via.placeholder.com/100"
        alt=""
      />
      <router-link class="ml-[130px]" to="/">
        <div class="flex flex-col">
          <p class="text-sm">Delivery</p>
          <p class="text-2xl font-bold">Order</p>
        </div>
      </router-link>
      <router-link to="/">
        <div class="flex flex-col">
          <p class="text-sm">Get Fresh</p>
          <p class="text-2xl font-bold">Promotions</p>
        </div>
      </router-link>
    </div>
    <div class="flex flex-row gap-4 items-center">
      <p class="text-2xl font-semibold">Login</p>
      <div
        class="flex bg-bk-primary h-full px-3 items-center cursor-pointer"
        @click="$router.push('/cart/preview')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
        <div
          v-if="cartItemsLength > 0"
          class="inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -mt-7 -ml-4"
        >
          {{ cartItemsLength }}
        </div>
      </div>
    </div>
  </nav>
  <slot></slot>
  <footer class="bg-stone-800 text-white py-4">
    <div class="container flex flex-col gap-4">
      <p class="text-xl font-bold">Burger King Delivery</p>
      <div class="flex flex-row gap-14 items-center">
        <p class="text-xl font-bold flex flex-row gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clip-rule="evenodd"
            />
          </svg>
          1500 25
        </p>
        <p class="font-bold flex flex-row gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-4 h-4"
          >
            <path
              d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
            />
            <path
              d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
            />
          </svg>
          guestservice@burgerking.co.id
        </p>
        <div class="flex flex-row items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-4 h-4"
          >
            <path
              d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
            />
            <path
              d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-4 h-4"
          >
            <path
              d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
            />
            <path
              d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-4 h-4"
          >
            <path
              d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
            />
            <path
              d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-4 h-4"
          >
            <path
              d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
            />
            <path
              d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
            />
          </svg>
        </div>
      </div>
      <div class="container flex flex-row divide-x text-sm text-[#919191]">
        <p class="pr-4">About Us</p>
        <p class="px-4">Kebijakan Privasi</p>
        <p class="pl-4">Syarat dan Ketentuan</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import { useCartStore } from "@/store";

export default defineComponent({
  setup() {
    const cart = useCartStore();
    const cartItemsLength = computed(() => cart.carts.length);

    onMounted(() => {
      cart.loadCarts();
    });

    return {
      cartItemsLength,
    };
  },
});
</script>
