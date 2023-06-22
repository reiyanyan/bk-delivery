<template>
  <div class="flex flex-col gap-8">
    <div class="bg-green-400">
      <p>search</p>
    </div>
    <div class="flex flex-col gap-4">
      <div
        v-for="(item, index) in categoryList"
        :key="index"
        class="rounded-lg px-4 py-2 cursor-pointer"
        :class="[
          modelValue === getSlugFromString(item)
            ? 'bg-[#faaf18]'
            : 'bg-[#fbe6d6]',
        ]"
        @click="redirect(item)"
      >
        <p class="text-xl font-bold">{{ item }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useCatalogueStore } from "@/store";
import { useRouter } from "vue-router";
import { getSlugFromString } from "@/helpers";

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue"],
  setup(_, { emit }) {
    const router = useRouter();
    const catalogue = useCatalogueStore();

    const categoryList = computed(() => catalogue.categoryList);

    const redirect = (val: string) => {
      console.log({ val });
      const slug = getSlugFromString(val);
      router.push(`/menus/${slug}`);
      emit("update:modelValue", slug);
    };

    return {
      categoryList,
      getSlugFromString,
      redirect,
    };
  },
});
</script>
