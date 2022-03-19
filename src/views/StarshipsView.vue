<template>
  <div class="starships">
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
