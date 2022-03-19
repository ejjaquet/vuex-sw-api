<template>
  <div class="species">
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
