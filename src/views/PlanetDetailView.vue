<template>
  <div class="planets">
    <planet-item />
  </div>
</template>

<script>
import PlanetItem from "@/components/PlanetItem.vue";
export default {
  components: { PlanetItem },
  name: "PlanetDetailView",
};
</script>
