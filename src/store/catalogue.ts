import axios, { AxiosResponse } from "axios";
import { computed, ref } from "vue";

import { defineStore } from "pinia";

export const CATALOGUE_STORE = "catalogue";

interface TAxiosResponse<T> {
  message: string;
  payload: T;
}

export type ProductItem = {
  id: string;
  name: string;
  desc: string;
  img: string;
  price: number;
  slug: string;
};

export type CatalogueType = {
  [key: string]: ProductItem[];
};

export const useCatalogueStore = defineStore(CATALOGUE_STORE, () => {
  const catalogue = ref<CatalogueType>({});

  const categoryList = computed(() => Object.keys(catalogue.value));

  async function getCatalogue(): Promise<
    AxiosResponse<TAxiosResponse<CatalogueType>>
  > {
    try {
      const response = await axios.get<TAxiosResponse<CatalogueType>>(
        "/json/catalogue.json"
      );
      catalogue.value = response.data.payload;
      return Promise.resolve(response);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  return { catalogue, getCatalogue, categoryList };
});
