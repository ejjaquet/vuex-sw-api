<template>
  <div class="home">
    <h1 class="text-4xl font-bold">Star Wars Movies - overview</h1>
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
