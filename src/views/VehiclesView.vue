<template>
  <div class="vehicles">
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
