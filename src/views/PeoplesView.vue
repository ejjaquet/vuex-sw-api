<template>
  <div class="peoples">
    <PeopleItems></PeopleItems>
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
