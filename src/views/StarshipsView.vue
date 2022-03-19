<template>
  <div class="starships">
    <StarshipItems></StarshipItems>
  </div>
</template>

<script>
import StarshipItems from "@/components/StarshipItems.vue";

export default {
  name: "PlanetView",
  components: {
    StarshipItems,
  },
};
</script>
