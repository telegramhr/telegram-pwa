<template>
  <section
    v-show="post.id"
    :class="['full', $mobile ? 'mobile-only' : 'desktop-only']"
  >
    <app-link
      v-if="!$mobile"
      :to="post.permalink"
      class="immersive-break flex"
      :style="{ backgroundColor: `rgb(${post.image.color})` }"
    >
      <div class="container flex column-horizontal-pad center">
        <div class="full flex">
          <div class="half flex flex-responsive">
            <div class="full flex">
              <h3 class="overtitle">
                <img
                  src="@/assets/img/telegram_logo_white.svg"
                  alt="Telegram logo"
                />
                preporuka
              </h3>
            </div>
            <h2 class="full">{{ post.portal_title }}</h2>
            <h5 v-show="post.authors[0]" class="full flex article-meta">
              piše
              {{ post.authors[0] ? post.authors[0].name : '' }}
            </h5>
            <h4 class="full hide">{{ post.subtitle }}</h4>
          </div>
          <div class="reading-line"></div>
        </div>
      </div>
      <div
        class="immersive-fade desktop-only"
        :style="{
          background: `linear-gradient(to right, rgba(${post.image.color}, 0) 0%, rgba(${post.image.color}, 1) 50%, rgba(${post.image.color}, 0) 100%)`,
        }"
      ></div>
      <div class="dark-fade"></div>
      <div class="blurred-image">
        <img :srcset="srcset" :src="post.image.url" :alt="post.image.alt" />
      </div>
      <div class="main-image">
        <img :srcset="srcset" :src="post.image.url" :alt="post.image.alt" />
      </div>
    </app-link>
    <app-link
      v-if="$mobile"
      class="full flex article-break article relative"
      :to="post.permalink"
      :aria-labelledby="'break-' + post.id"
    >
      <div class="blurred-image">
        <img
          :srcset="srcset"
          :src="post.image.url"
          :alt="post.image.alt"
          loading="lazy"
        />
      </div>
      <div class="full flex mobile-side-pad relative">
        <div class="full flex article-pad relative">
          <div class="border-element"></div>
          <div class="full center">
            <img
              src="@/assets/img/telegram_logo_white.svg"
              class="logo"
              alt="Telegram logo"
            />
          </div>
          <h3 class="overtitle full center-text">Preporuka</h3>
          <h2 :id="'break-' + post.id" class="full center-text">
            {{ post.portal_title }}
          </h2>
          <h5
            v-show="post.authors.length"
            class="full article-meta center-text"
          >
            <span class="meta-author"
              ><i>Piše</i>
              {{ post.authors[0] ? post.authors[0].name : '' }}
            </span>
          </h5>
          <div class="full flex">
            <img
              class="break-image"
              :srcset="srcset"
              :src="post.image.url"
              :alt="post.image.alt"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </app-link>
  </section>
</template>

<script>
export default {
  name: 'BigFeatured',
  props: {
    type: {
      type: String,
      required: false,
      default: 'homepage',
    },
  },
  async fetch() {
    this.post = await this.$axios.$get('/api/big-break/' + this.type)
  },
  data() {
    return {
      post: {
        id: 0,
        color: '',
        image: {
          url: '',
          url2: '',
          url3: '',
          alt: '',
          color: '',
        },
        authors: [],
        permalink: '',
      },
    }
  },
  computed: {
    srcset() {
      let set = `${this.post.image.url}`
      if (this.post.image.url2) {
        set += `, ${this.post.image.url2} 2x`
      }
      if (this.post.image.url3) {
        set += `, ${this.post.image.url3} 3x`
      }
      return set
    },
  },
}
</script>
