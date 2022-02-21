<template>
  <div
    class="container cantha-small-block flex relative native-block stretch mobile-side-pad"
  >
    <div class="full column-horizontal-pad">
      <div class="full cantha-separator"></div>
    </div>
    <h3 class="full center-text column-full-pad subsection-title">openspace</h3>
    <div class="full column-bottom-pad flex relative the-big-gs stretch">
      <div
        class="half column-horizontal-pad split-articles flex-responsive flex"
      >
        <medium
          v-for="post in posts.slice(0, 1)"
          :key="post.id"
          :post="post"
        ></medium>
      </div>
      <div class="half flex-responsive flex stretch stretchtwo">
        <div
          class="half flex-responsive column-horizontal-pad column-right-border column-left-border flex no-image-block"
        >
          <standard
            v-for="post in posts.slice(1, 2)"
            :key="post.id"
            :post="post"
          ></standard>
        </div>
        <div class="half flex-responsive column-horizontal-pad flex">
          <mini
            v-for="post in posts.slice(2, 5)"
            :key="post.id"
            :post="post"
          ></mini>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Partners',
  async fetch() {
    this.posts = await this.$axios
      .get('/api/category/openspace?pure=1')
      .then((res) => res.data.posts.slice(0, 4))
  },
  data() {
    return {
      posts: [],
    }
  },
}
</script>
