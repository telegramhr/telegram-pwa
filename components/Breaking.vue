<template>
  <div v-show="$store.state.breaking.on" class="full flex breaking-news">
    <div class="container column-full-pad">
      <nuxt-link
        :to="$store.state.breaking.link ? $store.state.breaking.link : '#'"
        ><b>Breaking:</b> {{ $store.state.breaking.title }}</nuxt-link
      >
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
