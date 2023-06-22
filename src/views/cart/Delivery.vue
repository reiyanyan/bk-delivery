<template>
  <div class="col-span-2 pr-8">
    <div class="flex flex-col gap-4">
      <p class="uppercase font-medium">Guest Details</p>
      <div class="flex flex-col gap-2">
        <BkInput v-model="input.fullName" placeholder="Full Name" required />
        <BkInputPhone
          v-model="input.phone"
          placeholder="Mobile Number"
          required
        />
      </div>
    </div>
  </div>
  <div class="col-span-4 pl-8">
    <div class="flex flex-col gap-4">
      <p class="text-xl font-bold">Lokasi Pengantaran</p>
      <div class="flex flex-col gap-1">
        <p class="text-sm font-medium">1. Set Lokasi Pengantaran di Peta</p>
        <p class="text-xs">
          Pastikan pin lokasi sudah sesuai dengan lokasi pengantaran
        </p>
      </div>
      <Maps></Maps>
      <div class="flex flex-col gap-1">
        <p class="text-sm font-medium">2. Berikan Alamat Lengkap</p>
        <p class="text-xs">
          Tambahkan catatan atau acuan jika perlu (contoh: "di sebelah salon")
        </p>
      </div>
      <BkTextarea
        v-model="input.address"
        rows="4"
        cols="40"
        placeholder="Mohon set lokasi pengantaran di peta sebelum mengisi alamat pengantaran"
        :disabled="true"
      ></BkTextarea>
      <BkButton @click="$router.push('/cart/payment')">Continue</BkButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import { useCartStore } from "@/store";
import Stepper from "@/components/stepper/Stepper.vue";
import BkInput from "@/components/input/BkInput.vue";
import BkInputPhone from "@/components/input/BkInputPhone.vue";
import BkTextarea from "@/components/textarea/BkTextarea.vue";
import BkButton from "@/components/button/BkButton.vue";
import Maps from "@/components/maps/Maps.vue";

export default defineComponent({
  components: {
    Stepper,
    BkInput,
    BkInputPhone,
    BkTextarea,
    BkButton,
    Maps,
  },
  setup() {
    const cart = useCartStore();

    const input = reactive({
      fullName: "",
      phone: "",
      address: "",
    });

    onMounted(() => {
      cart.stepActive = "DELIVERY";
    });

    return {
      input,
    };
  },
});
</script>
