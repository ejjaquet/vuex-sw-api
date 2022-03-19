<template>
  <div class="peoples">
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
