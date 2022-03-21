<template>
  <div class="starships">
    <starship-item />
  </div>
</template>

<script>
import StarshipItem from "@/components/StarshipItem.vue";
export default {
  components: { StarshipItem },
  name: "StarshipDetailView",
};
</script>
