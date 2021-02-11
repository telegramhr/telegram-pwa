<template>
  <div class="container flex relative stretch special-partner-widget">
    <div class="line-decoration-box animate">
      <div class="line-1 animate"></div>
      <div class="line-2 animate"></div>
      <div class="line-3 animate"></div>
    </div>
    <div class="fourth flex-responsive column-full-pad mobile-side-pad">
      <div class="full flex relative">
        <img
          src="https://www.telegram.hr/wp-content/uploads/2021/02/afera-boras-widget.jpg"
          alt="Afera Boras na Telegram.hr"
        />
        <p class="full special-partner-tagline">
          Serijal Telegramove Dore Kršul <br />
          o zlostavljanju na Sveučilištu
        </p>
      </div>
    </div>
    <div
      v-for="post in posts"
      :key="post.id"
      class="fourth flex-responsive column-full-pad mobile-side-pad"
    >
      <app-link
        class="full flex article-standard article relative"
        :to="post.permalink"
        target="_blank"
      >
        <img
          :srcset="srcset(post)"
          :src="post.image.url"
          :alt="post.image.alt"
          loading="lazy"
        />
        <div class="full flex article-pad">
          <div class="full flex desktop-only">
            <h3 class="overtitle"></h3>
          </div>
          <h2 class="full">
            {{ post.title }}
          </h2>
          <h4 class="full"></h4>
          <h5 class="full flex article-meta">
            <span class="meta-author"></span>
            <span class="meta-preporuke"></span>
            <span class="meta-date"></span>
          </h5>
        </div>
      </app-link>
    </div>
    <h5 class="full center-text special-partner-signature hide">
      <span class="faded">Omogućuje</span> {{ title }}
    </h5>
    <div class="line-decoration-box animate">
      <div class="line-1 animate"></div>
      <div class="line-2 animate"></div>
      <div class="line-3 animate"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Partner',
  async fetch() {
    await this.$axios.$get('partner-widget').then((res) => {
      this.posts = res.posts
      this.title = res.title
    })
  },
  data() {
    return {
      posts: [],
      title: '',
    }
  },
  methods: {
    srcset(post) {
      let set = `${post.image.url}`
      if (post.image.url2) {
        set += `, ${post.image.url2} 2x`
      }
      if (post.image.url3) {
        set += `, ${post.image.url3} 3x`
      }
      return set
    },
  },
}
</script>
