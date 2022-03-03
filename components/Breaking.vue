<template>
  <div
    v-show="$store.state.breaking.on"
    class="full flex new-breaking mobile-side-pad"
  >
    <div class="container column-vertical-pad column-bottom-border center-text">
      <nuxt-link
        :to="$store.state.breaking.link ? $store.state.breaking.link : '#'"
        ><b>{{ $store.state.breaking.prefix }}</b>
        {{ $store.state.breaking.title }}</nuxt-link
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
