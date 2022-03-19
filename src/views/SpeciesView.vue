<template>
  <div class="species">
    <SpeciesItems></SpeciesItems>
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
