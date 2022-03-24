<template>
  <footer>
    <div>
      <span :class="{ nodisplay: prevDisabled }">
        <router-link
          :to="prevPage"
          class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Prev
        </router-link>
      </span>
      <span :class="{ nodisplay: nextDisabled }">
        <router-link
          :to="nextPage"
          class="inline-flex items-center py-2 px-4 ml-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
        </router-link>
      </span>
    </div>
    <p class="mt-2">
      <span class="text-sm">Page {{ page }}</span>
      <span v-if="numberOfPages" class="text-sm">/{{ numberOfPages }}</span>
    </p>
  </footer>
</template>

<script>
export default {
  name: "PaginationBar",
  props: ["name", "numberOfPages", "page"],
  computed: {
    prevPage() {
      let prevPage = `/${this.name}`;
      prevPage += `?page=${parseInt(this.page) - 1}`;
      return prevPage;
    },
    nextPage() {
      let nextPage = `/${this.name}`;
      nextPage += `?page=${parseInt(this.page) + 1}`;
      return nextPage;
    },
    prevDisabled() {
      return parseInt(this.page) === 1;
    },
    nextDisabled() {
      return parseInt(this.page) === parseInt(this.numberOfPages);
    },
  },
};
</script>

<style scoped>
.nodisplay {
  opacity: 0.5;
  pointer-events: none;
}
</style>
