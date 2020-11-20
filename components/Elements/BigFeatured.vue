<template>
  <section class="full desktop-only">
    <app-link
      :to="post.permalink"
      class="immersive-break flex"
      :style="{ backgroundColor: `rgb(${post.color})` }"
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
          background: `linear-gradient(to right, rgba(${post.color}, 0) 0%, rgba(${post.color}, 1) 50%, rgba(${post.color}, 0) 100%)`,
        }"
      ></div>
      <div
        class="immersive-fade mobile-only"
        :style="{
          background: `linear-gradient(to right, rgba(${post.color}, 0) 0%, rgba(${post.color}, 1) 50%, rgba(${post.color}, 0) 100%)`,
        }"
      ></div>
      <div class="dark-fade"></div>
      <div class="blurred-image">
        <img :src="post.image.url" :alt="post.image.alt" />
      </div>
      <div class="main-image">
        <img :src="post.image.url" :alt="post.image.alt" />
      </div>
    </app-link>
  </section>
</template>

<script>
export default {
  name: 'BigFeatured',
  props: {
    post: {
      type: Object,
      required: true,
      default() {
        return {
          authors: [],
          image: {
            url: '',
            alt: '',
            author: '',
          },
          permalink: '',
        }
      },
    },
  },
}
</script>
