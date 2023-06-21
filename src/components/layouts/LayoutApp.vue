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
      <div class="flex bg-orange-500 h-full px-3 items-center">
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
          class="inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -mt-7 -ml-4"
        >
          20
        </div>
      </div>
    </div>
  </nav>
  <slot></slot>
  <footer>
    <p>footer</p>
  </footer>
</template>
