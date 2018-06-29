<template lang="pug">
dl
  dt {{ data.Name }}
  dd {{ data.Description }}
  dd {{ data.Category }}
  dd
    template(v-for="tag in data.Tags")
      span {{ tag }}
</template>

<script>
export default {
  props: ['data']
}
</script>