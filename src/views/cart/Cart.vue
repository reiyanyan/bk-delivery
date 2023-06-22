<template>
  <div class="col-span-4 pr-8 flex flex-col gap-8">
    <table v-if="cartList.length > 0" class="text-left w-full">
      <thead>
        <tr class="border-b">
          <th>Menu Item</th>
          <th class="px-8">Quantity</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cartList" :key="index" class="border-b">
          <td class="flex flex-row gap-4 py-2 items-center">
            <img class="h-[50px] w-[60px]" :src="item.img" />
            <p>{{ item.name }}</p>
          </td>
          <td class="py-2 w-[100px] px-8">
            <QtyButton v-model="item.count"></QtyButton>
          </td>
          <td class="py-2">
            <div class="flex flex-row gap-2 items-center">
              <p>{{ rupiahFormatter(item.price) }}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 cursor-pointer"
                @click="deleteItems(item)"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else class="h-1/4 flex items-center justify-center">
      <p>No items in Cart</p>
    </div>
    <router-link to="/menus" class="text-bk-primary">
      Continue Shopping
    </router-link>
    <div class="flex flex-col gap-2">
      <p>Add Notes</p>
      <BkInput
        v-model="notes"
        :maxlength="15"
        placeholder="Notes ..."
      ></BkInput>
      <p class="w-full text-end text-sm">{{ notes.length }}/15</p>
    </div>
  </div>
  <div class="col-span-2 pl-8">
    <div class="flex flex-col gap-8">
      <div class="flex flex-col gap-4">
        <p>Order Subtotal</p>
        <p>{{ rupiahFormatter(totalPrice) }}</p>
        <p>*Price might change due to your delivery location</p>
      </div>
      <div class="flex flex-col gap-4">
        <BkButton>Login To Order</BkButton>
        <BkButton @click="$router.push('/cart/delivery')">
          Continue as Guest
        </BkButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, ref, watch } from "vue";
import Stepper from "@/components/stepper/Stepper.vue";
import QtyButton from "@/components/button/QtyButton.vue";
import BkButton from "@/components/button/BkButton.vue";
import { useCartStore, type CartType } from "@/store";
import { rupiahFormatter } from "@/helpers";
import BkInput from "@/components/input/BkInput.vue";

export default defineComponent({
  components: {
    Stepper,
    QtyButton,
    BkButton,
    BkInput,
  },
  setup() {
    const cart = useCartStore();

    const notes = ref("");
    const cartList = computed(() => cart.carts);
    const totalPrice = computed(() => cart.totalPriceCart);

    const deleteItems = (item: CartType) => {
      cart.deleteItems(item);
    };

    watch(
      () => cartList.value,
      (val) => val.map((item) => cart.addToCarts(item)),
      { deep: true }
    );

    onMounted(() => {
      cart.loadCarts();
      cart.stepActive = "CART";
    });

    return {
      cartList,
      notes,
      rupiahFormatter,
      deleteItems,
      totalPrice,
    };
  },
});
</script>
