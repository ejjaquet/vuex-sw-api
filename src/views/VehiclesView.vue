<template>
  <div class="vehicles">
    <VehicleItems></VehicleItems>
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
