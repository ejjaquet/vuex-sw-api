<template>
  <div class="home">
    <film-items></film-items>
  </div>
</template>

<script>
import FilmItems from "@/components/FilmItems.vue";

export default {
  name: "HomeView",
  components: {
    FilmItems,
  },
};
</script>
