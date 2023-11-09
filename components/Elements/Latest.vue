<template>
  <div class="full flex relative mobile-bottom-pad">
    <div class="full flex latest-articles-header mobile-only stretch">
      <div
        class="third flex center animate"
        :class="{ 'active-latest-header': category === 'najnovije' }"
        @click="category = 'najnovije'"
      >
        <span>Najnovije</span>
      </div>
      <div
        class="third flex center animate"
        :class="{ 'active-latest-header': category === 'sport' }"
        @click="category = 'sport'"
      >
        <span>Sport</span>
      </div>
      <div
        class="third flex center animate"
        :class="{ 'active-latest-header': category === 'zivot' }"
        @click="category = 'zivot'"
      >
        <span>Život</span>
      </div>
    </div>
    <div class="full flex relative column-left-border stretch">
      <mini-alt
        v-for="post in posts[category].slice(0, 4)"
        :key="post.id"
        :post="post"
      ></mini-alt>
      <div
        class="full latest-feed-btn flex-responsive flex relative mobile-side-pad"
      >
        <app-link to="/uzivo" class="flex newbtn">Još vijesti</app-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Latest',
  async fetch() {
    await this.$store.dispatch('uzivo/getPosts')
  },
  data() {
    return {
      category: 'najnovije',
    }
  },
  computed: {
    posts() {
      return this.$store.state.uzivo.posts
    },
  },
}
</script>
