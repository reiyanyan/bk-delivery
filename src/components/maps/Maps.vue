<template>
  <div
    class="h-[300px] bg-bk-primary text-white flex flex-row items-center justify-center"
  >
    <div ref="googleMapRef"></div>
    <p>Google Maps JavaScript API error: Had No API Key</p>
  </div>
</template>

<script lang="ts">
import { Loader } from "@googlemaps/js-api-loader";
import { defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  setup() {
    const googleMapRef = ref<HTMLDivElement>();

    const loader = new Loader({
      apiKey: "",
      libraries: ["geocoding"],
    });

    const map = ref();

    const initialize = async (
      zoom: number,
      lat: number | null,
      long: number | null
    ) => {
      loader
        .importLibrary("geocoding")
        .then((val: google.maps.GeocodingLibrary) => {
          console.log({ val });
          const latLong = new google.maps.LatLng(
            lat ?? -6.096996,
            long ?? -253.17438
          );
          map.value = new google.maps.Map(googleMapRef.value!, {
            center: latLong,
            zoom: zoom,
            mapTypeControl: false, // disabled satelite
            streetViewControl: false, // disabled street view
            disableDefaultUI: false, // disabled all component in UI
            clickableIcons: false, // Disable clicking on landmarks
            fullscreenControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
          });
        });
    };

    onMounted(() => {
      initialize(12, null, null);
    });

    return {
      googleMapRef,
    };
  },
});
</script>
