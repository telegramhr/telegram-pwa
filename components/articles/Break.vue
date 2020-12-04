<template>
  <app-link
    class="full flex article-break article relative"
    :to="post.permalink"
  >
    <div class="blurred-image">
      <img :src="post.image.url" :alt="post.image.alt" loading="lazy" />
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
        <h2 class="full center-text">{{ post.portal_title }}</h2>
        <h5 class="full article-meta center-text">
          <span class="meta-author"
            ><i>Piše</i>
            {{ post.authors[0].name }}
          </span>
        </h5>
        <div class="full flex">
          <img
            class="break-image"
            :src="post.image.url"
            :alt="post.image.alt"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </app-link>
</template>

<script>
export default {
  name: 'Break',
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
  mounted() {
    this.$axios.get('big-break').then((res) => {
      this.post = res.data
    })
  },
}
</script>
