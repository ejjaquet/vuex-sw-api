<template>
  <footer>
    <div>
      <router-link
        tag="button"
        :to="prevPage"
        :disabled="prevDisabled"
        class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Prev
      </router-link>
      <router-link
        tag="button"
        :to="nextPage"
        :disabled="nextDisabled"
        class="inline-flex items-center py-2 px-4 ml-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Next
      </router-link>
    </div>
    <p class="mt-2">
      <span class="text-sm">Page {{ pagesInfo.page }}</span>
      <span v-if="pagesInfo.numberOfPages" class="text-sm"
        >/{{ pagesInfo.numberOfPages }}</span
      >
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
      prevPage += `?page=${this.page - 1}`;
      return prevPage;
    },
    nextPage() {
      let nextPage = `/${this.name}`;
      nextPage += `?page=${this.page + 1}`;
      return nextPage;
    },
    prevDisabled() {
      return this.page === 1;
    },
    nextDisabled() {
      return this.page === this.numberOfPages;
    },
    pagesInfo() {
      return {
        page: this.page,
        numberOfPages: this.numberOfPages,
      };
    },
  },
};
</script>
