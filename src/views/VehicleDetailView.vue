<template>
  <div class="vehicles">
    <vehicle-item />
  </div>
</template>

<script>
import VehicleItem from "@/components/VehicleItem.vue";
export default {
  components: { VehicleItem },
  name: "VehicleDetailView",
};
</script>
