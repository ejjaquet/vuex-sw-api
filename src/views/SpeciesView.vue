<template>
  <div class="species">
    <h1 class="text-4xl font-bold">Star Wars Species - overview</h1>
    <species-items></species-items>
  </div>
</template>

<script>
import SpeciesItems from "@/components/SpeciesItems.vue";

export default {
  name: "SpeciesView",
  components: {
    SpeciesItems,
  },
};
</script>
