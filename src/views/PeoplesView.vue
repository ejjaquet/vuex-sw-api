<template>
  <div class="peoples">
    <h1 class="text-4xl font-bold">Star Wars Characters - overview</h1>
    <people-items></people-items>
  </div>
</template>

<script>
import PeopleItems from "@/components/PeopleItems.vue";

export default {
  name: "PeopleView",
  components: {
    PeopleItems,
  },
};
</script>
