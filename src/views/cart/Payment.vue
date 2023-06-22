<template>
  <div class="col-span-3 pr-8">
    <div class="flex flex-col gap-2">
      <p class="font-bold">Order Summary</p>
      <table v-if="cartList.length > 0">
        <tbody class="border-t">
          <tr
            v-for="(item, index) in cartList"
            :key="index"
            class="border-b text-xs"
          >
            <td class="py-4">{{ item.name }}</td>
            <td class="py-4 tracking-widest">x{{ item.count }}</td>
            <td class="py-4 text-end">{{ rupiahFormatter(item.price) }}</td>
          </tr>
        </tbody>
      </table>
      <div v-else class="h-1/4 flex items-center justify-center">
        <p>No items in Cart</p>
      </div>
      <div class="flex flex-col gap-2 mt-2">
        <div class="flex flex-row justify-between items-center font-medium">
          <p>Subtotal</p>
          <p>{{ removeRp(subTotal) }}</p>
        </div>
        <div class="flex flex-row justify-between items-center font-medium">
          <p>Delivery Fee</p>
          <p>{{ removeRp(fee.delivery) }}</p>
        </div>
        <div class="flex flex-row justify-between items-center font-medium">
          <p>PPN 10%</p>
          <p>{{ removeRp(fee.ppn) }}</p>
        </div>
        <div class="flex flex-row justify-between items-center font-medium">
          <p>Delivery Surcharge</p>
          <p>{{ removeRp(fee.surcharge) }}</p>
        </div>
        <div
          class="flex flex-row justify-between items-center font-bold text-2xl"
        >
          <p class="uppercase">Total</p>
          <p>{{ rupiahFormatter(totalPrice) }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="col-span-3 pl-8">
    <div class="flex flex-col gap-8">
      <div class="flex flex-col text-xs gap-1">
        <p class="font-semibold">Deliver To</p>
        <p>
          Cupcake ipsum dolor sit amet candy canes. Powder danish lollipop I
          love jelly. Danish donut halvah sesame snaps chupa chups dessert
          marshmallow I love. Apple pie oat.
        </p>
      </div>
      <div class="flex flex-row justify-between items-center">
        <BkButton class="text-xs" :outlined="true" @click="modal = true">
          Apply Kupon / Promo Code
        </BkButton>
        <p class="text-2xl font-bold">{{ rupiahFormatter(52800) }}</p>
      </div>
      <div class="flex flex-col text-xs gap-1">
        <p>Pay With</p>
        <div class="flex flex-row justify-between gap-4">
          <div
            v-for="(item, index) in ['DANA', 'OVO', 'GOPAY']"
            :key="index"
            class="flex border border-gray-400 w-full items-center justify-center py-2 rounded"
          >
            <p>{{ item }}</p>
          </div>
        </div>
      </div>
      <BkButton>Place My Order</BkButton>
    </div>

    <Teleport to="body">
      <Modal v-model="modal" @close="onCloseModal">
        <template #body>
          <div class="flex flex-col gap-2">
            <p class="text-xl font-bold">Use Coupun or Promo Code</p>
            <BkInput placeholder="Masukkan Kode Promo"></BkInput>
          </div>
        </template>
      </Modal>
    </Teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, ref } from "vue";
import { useCartStore } from "@/store";
import { rupiahFormatter } from "@/helpers";
import BkButton from "@/components/button/BkButton.vue";
import Modal from "@/components/modal/Modal.vue";
import BkInput from "@/components/input/BkInput.vue";

export default defineComponent({
  components: {
    BkButton,
    Modal,
    BkInput,
  },
  setup() {
    const cart = useCartStore();

    const modal = ref(false);
    const cartList = computed(() => cart.carts);
    const subTotal = computed(() => cart.totalPriceCart);
    const fee = computed(() => {
      return {
        delivery: cartList.value.length !== 0 ? 12345 : 0,
        ppn: cartList.value.length !== 0 ? 54321 : 0,
        surcharge: cartList.value.length !== 0 ? 112233 : 0,
      };
    });

    const removeRp = (val: number) => {
      return rupiahFormatter(val).replace("Rp", "").trim();
    };

    const totalPrice = computed(() => {
      const { delivery, ppn, surcharge } = fee.value;
      return subTotal.value + delivery + ppn + surcharge;
    });

    const onCloseModal = () => {
      console.log({
        modal: modal.value,
      });
    };

    onMounted(() => {
      cart.loadCarts();
      cart.stepActive = "PAYMENT";
    });

    return {
      rupiahFormatter,
      removeRp,
      cartList,
      fee,
      subTotal,
      totalPrice,
      modal,
      onCloseModal,
    };
  },
});
</script>
