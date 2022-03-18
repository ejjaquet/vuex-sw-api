<template>
  <div class="home">
    <FilmItems></FilmItems>
  </div>
</template>

<script>
// @ is an alias to /src
import FilmItems from "@/components/FilmItems.vue";

export default {
  name: "HomeView",
  components: {
    FilmItems,
  },
};
</script>
