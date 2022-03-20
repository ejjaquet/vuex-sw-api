<template>
  <div class="vehicles">
    <h1 class="text-4xl font-bold">Star Wars Vehicles - overview</h1>
    <vehicle-items></vehicle-items>
  </div>
</template>

<script>
import VehicleItems from "@/components/VehicleItems.vue";

export default {
  name: "VehicleView",
  components: {
    VehicleItems,
  },
};
</script>
