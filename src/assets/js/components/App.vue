<template lang="pug">
div.app-container
  p(v-text="name")
  app-data-list
</template>

<script>
import AppDataList from './AppDataList.vue'

export default {
  computed: {
    name () {
      return this.$store.getters.name
    }
  },
  components: {
    AppDataList
  }
}
</script>