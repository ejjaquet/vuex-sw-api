<template>
  <div id="app" class="flex flex-col h-screen justify-between">
    <header>
      <nav-bar />
      <breadcrumbs-bar />
    </header>
    <main class="mb-auto mt-12 lg:mt-32">
      <section class="container mx-auto px-6">
        <router-view />
      </section>
    </main>
    <footer-bar />
  </div>
</template>

<script>
import NavBar from "@/components/layout/NavBar";
import FooterBar from "./components/layout/FooterBar.vue";
import BreadcrumbsBar from "./components/layout/BreadcrumbsBar";

export default {
  name: "HomeView",
  components: {
    NavBar,
    FooterBar,
    BreadcrumbsBar,
  },
};
</script>
