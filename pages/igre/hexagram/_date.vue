<template>
  <div :class="['main-container', 'flex', 'single-article']">
    <div class="full flex relative single-article">
      <client-only>
        <theader></theader>
      </client-only>
    </div>
    <div class="full relative">
      <div class="full flex">
        <article
          id="article-body"
          class="container column-full-pad flex relative mobile-side-pad have-background"
        >
          <hexagram v-if="user"></hexagram>
          <div v-else>Please login to play the game.</div>
        </article>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'HexagramDat',
  computed: {
    user() {
      return this.$store.state.user
    },
  },
}
</script>
