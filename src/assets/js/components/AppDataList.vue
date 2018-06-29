<template lang="pug">
div
  p data list
  ul
  template(v-for="item in items")
    li
      a(:href="item.fields.Url" target="brank")
        my-item(:data="item.fields")

</template>

<script>
import MyItem from './AppDataItem.vue'

export default {
  computed: {
    items () {
      return this.$store.getters.data
    }
  },
  components: {
    MyItem,
  }
}
</script>