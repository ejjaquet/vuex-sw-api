<template>
  <div class="planets">
    <planet-items></planet-items>
  </div>
</template>

<script>
import PlanetItems from "@/components/PlanetItems.vue";

export default {
  name: "PlanetView",
  components: {
    PlanetItems,
  },
};
</script>
