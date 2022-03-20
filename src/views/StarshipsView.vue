<template>
  <div class="starships">
    <h1 class="text-4xl font-bold">Star Wars Starships - overview</h1>
    <starship-items></starship-items>
  </div>
</template>

<script>
import StarshipItems from "@/components/StarshipItems";

export default {
  name: "StarhipView",
  components: {
    StarshipItems,
  },
};
</script>
