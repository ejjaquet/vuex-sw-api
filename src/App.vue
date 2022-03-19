<template>
  <div id="app">
    <header>
      <nav-bar />
    </header>
    <main class="mt-12 lg:mt-32">
      <section class="container mx-auto px-6">
        <router-view />
      </section>
    </main>
  </div>
</template>

<script>
import NavBar from "@/components/layout/NavBar";

export default {
  name: "HomeView",
  components: {
    NavBar,
  },
};
</script>
