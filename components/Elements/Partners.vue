<template>
  <div
    class="container cantha-small-block flex relative native-block column-top-pad stretch mobile-side-pad"
  >
    <div class="full column-horizontal-pad">
      <div class="full cantha-separator"></div>
    </div>
    <div class="full flex column-horizontal-pad">
      <div
        class="noththree full center-text column-vertical-pad subsection-title"
      >
        Partneri
      </div>
    </div>
    <div class="full flex stretch column-bottom-pad">
      <div
        v-for="post in posts"
        :key="post.id"
        class="fourth column-right-border flex-responsive column-horizontal-pad"
      >
        <standard
          :post="post"
          :utm="{ source: 'Telegram.hr', campaign: 'Partneri' }"
        ></standard>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Partners',
  computed: {
    posts() {
      return this.$store.state.promos.posts
    },
  },
  mounted() {
    this.$store.dispatch('promos/pullPosts')
  },
}
</script>
