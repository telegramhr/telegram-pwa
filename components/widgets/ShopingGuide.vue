<template>
  <div class="container flex relative native-block stretch mobile-side-pad">
    <div class="full column-horizontal-pad flex">
      <h2 class="full flex section-title">
        <app-link to="/soping-vodic/bozicni-pokloni-2021/"
          >Najbolji božićni pokloni</app-link
        >
      </h2>
    </div>
    <div
      v-for="post in posts"
      :key="post.id"
      class="fourth flex-responsive column-full-pad"
    >
      <standard :post="post"></standard>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopingGuide',
  async fetch() {
    this.posts = await this.$axios
      .get('/api/shop-guide/related/1182196')
      .then((res) => {
        const shuffled = res.data.sort(() => 0.5 - Math.random())
        return shuffled.slice(0, 4)
      })
  },
  data() {
    return {
      posts: [],
    }
  },
}
</script>
