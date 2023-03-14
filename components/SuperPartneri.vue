<template>
  <section v-if="posts.length" class="full flex relative">
    <div class="container flex relative">
      <div class="full center relative">
        <h3 class="flex superone-section-title superone-st-bottompad">
          <img src="@/assets/img/s1_logo_clean_noline.svg" alt="Super1 logo" />
          <img
            src="@/assets/img/s1_logo_clean_noline_white.svg"
            alt="Super1 logo"
            class="dark-mode-only"
          />Partneri
        </h3>
      </div>
      <div
        class="full flex relative superone-st-bottompad mobile-side-pad superone-mini-articles"
      >
        <div
          v-for="post in posts.slice(0, 4)"
          :key="post.id"
          class="fourth flex-responsive flex column-horizontal-pad"
        >
          <superfeat :key="post.id" :post="post"></superfeat>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SuperPartneri',
  async fetch() {
    this.posts = await this.$axios.$get('/api/s1/zone/s1-partneri')
  },
  data() {
    return {
      posts: [],
    }
  },
}
</script>
