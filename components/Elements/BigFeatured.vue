<template>
  <section v-if="post.id" class="full desktop-only">
    <app-link
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
            <h2 class="full">{{ post.title }}</h2>
            <h5 v-if="post.authors.length" class="full flex article-meta">
              piše
              {{ post.authors[0].name }}
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
      <div
        class="immersive-fade mobile-only"
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
  </section>
</template>

<script>
export default {
  name: 'BigFeatured',
  data() {
    return {
      post: {
        id: 0,
        type: '',
        image: {
          url: '',
          alt: '',
          author: '',
        },
        authors: [
          {
            url: '',
            name: '',
            image: '',
          },
        ],
        overtitle: '',
        title: '',
        subtitle: '',
        content: '',
        recommendations: 0,
        comments: 0,
        time: 0,
        tags: [],
        social: {
          title: '',
          description: '',
          image: '',
        },
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
  mounted() {
    this.$axios
      .get('big-break')
      .then((res) => {
        this.post = res.data
      })
      .catch(() => {
        // TODO: error logging
      })
  },
}
</script>
