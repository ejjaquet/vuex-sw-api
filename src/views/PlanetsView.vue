<template>
  <div class="planets">
    <PlanetItems></PlanetItems>
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
