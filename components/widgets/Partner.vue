<template>
  <div class="container flex relative stretch special-partner-widget">
    <div class="line-decoration-box animate">
      <div class="line-1 animate"></div>
      <div class="line-2 animate"></div>
      <div class="line-3 animate"></div>
    </div>
    <div class="fourth flex-responsive relative center hide">
      <div class="full flex article-standard article relative mobile-side-pad">
        <h2 class="full">Sadržaj donosi Mastercard</h2>
      </div>
    </div>
    <div
      v-for="post in $store.state.partner.posts"
      :key="post.image.id"
      class="fourth flex-responsive column-full-pad mobile-side-pad"
    >
      <a
        class="full flex article-standard article relative"
        :href="post.permalink"
        target="_blank"
      >
        <img
          :src="post.image.url"
          :srcset="srcset(post)"
          :alt="post.portal_title"
          loading="lazy"
        />
        <div class="full flex article-pad">
          <div class="full flex desktop-only">
            <div class="noththree overtitle"></div>
          </div>
          <h2 class="full">
            {{ post.title }}
          </h2>
          <div class="nothfour full"></div>
          <div class="nothfive full flex article-meta">
            <span class="meta-author"></span>
            <span class="meta-preporuke"></span>
            <span class="meta-date"></span>
          </div>
        </div>
      </a>
    </div>
    <div class="nothfour full center-text special-partner-signature">
      <span class="faded">Sadržaj donosi</span> Uplift.hr
    </div>
    <div class="line-decoration-box animate">
      <div class="line-1 animate"></div>
      <div class="line-2 animate"></div>
      <div class="line-3 animate"></div>
    </div>
  </div>
</template>

<style scoped>
.special-partner-widget .partner-widget-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}
.special-partner-widget .fourth:nth-child(2) .article {
  z-index: 3;
  position: relative;
  padding: 0 24px;
}
.special-partner-widget .fourth:nth-child(2) .article img {
  position: absolute;
  width: 100%;
  height: auto;
  left: 0;
  top: -35px;
  z-index: 1;
}
.special-partner-widget .fourth:nth-child(2) .article img:last-child {
  top: auto;
  bottom: -35px;
}
.special-partner-widget .fourth:nth-child(2) .article-standard {
  min-height: auto;
  margin-bottom: 0px;
}
.special-partner-widget .fourth:nth-child(2) .article-standard:hover h2 {
  color: inherit;
}
.special-partner-widget .fourth:nth-child(2) .article h2 {
  font-size: 2.4rem;
  position: relative;
  z-index: 5;
}
.special-partner-widget .fourth:nth-child(2) .article .nothfour {
  display: block;
  margin-bottom: 0px;
  z-index: 5;
  position: relative;
}
@media screen and (min-width: 1025px) {
  .special-partner-widget .article img {
    height: 150px;
  }
}
@media screen and (max-width: 1024px) {
  .special-partner-widget .fourth:nth-child(2) .article {
    padding: 4vw;
    padding-top: 64px;
  }
  .special-partner-widget {
    padding-top: 0px;
  }
}
</style>

<script>
export default {
  name: 'Partner',
  mounted() {
    if (!this.$storageAvailable) {
      return
    }
    this.$store.dispatch('partner/pullPosts')
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
