<template>
  <nav class="px-2 sm:px-4 py-2.5 flex mt-4" aria-label="Breadcrumb">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li
          class="inline-flex items-center"
          v-for="(breadcrumb, idx) in breadcrumbList"
          :key="idx"
          @click="routeTo(idx)"
          :class="{ linked: !!breadcrumb.link }"
        >
          <svg
            class="w-5 h-5 mr-3 text-gray-400"
            :class="{ nohomeicon: breadcrumb.name != 'Home' }"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
            ></path>
          </svg>
          <svg
            class="w-6 h-6 text-gray-400 chevron"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          {{ breadcrumb.name }}
        </li>
      </ol>
    </div>
  </nav>
</template>

<script>
export default {
  name: "BreadcrumbsBar",
  data() {
    return {
      breadcrumbList: [],
    };
  },
  mounted() {
    this.updateList();
  },
  watch: {
    $route() {
      this.updateList();
    },
  },
  methods: {
    routeTo(pRouteTo) {
      if (this.breadcrumbList[pRouteTo].link)
        this.$router.push(this.breadcrumbList[pRouteTo].link);
    },
    updateList() {
      this.breadcrumbList = this.$route.meta.breadcrumb;
    },
  },
};
</script>

<style scoped>
.nohomeicon {
  display: none;
}
ol > li:first-of-type .chevron {
  display: none;
}
.linked {
  cursor: pointer;
}
.linked:hover {
  text-decoration: underline;
}
</style>
