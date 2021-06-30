<template>
  <div v-show="$store.state.breaking.on" class="full flex breaking-news">
    <div class="container column-full-pad">
      <b>Breaking:</b> {{ $store.state.breaking.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Breaking',
  mounted() {
    this.$store.dispatch('breaking/pullPosts')
  },
}
</script>
