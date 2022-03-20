<template>
  <div class="planets">
    <h1 class="text-4xl font-bold">Star Wars Planets - overview</h1>
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
