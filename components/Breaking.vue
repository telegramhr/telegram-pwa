<template>
  <div v-show="has_breaking" class="full flex breaking-news">
    <div class="container column-full-pad"><b>Breaking:</b> {{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'Breaking',
  async fetch() {
    await this.$axios.get('api/breaking').then((res) => {
      if (res.data.title) {
        this.title = res.data.title
        this.has_breaking = true
      }
    })
  },
  data() {
    return {
      has_breaking: false,
      title: '',
    }
  },
}
</script>
