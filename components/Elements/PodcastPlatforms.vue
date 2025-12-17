<template>
  <div class="podcast-platforms">
    <div v-if="hasLinks" class="podcasts-wrapper">
      <a
        v-if="youtube"
        :href="youtube"
        target="_blank"
        rel="noopener noreferrer"
        class="podcast-box youtube"
      >
        <img src="@/assets/img/youtube.png" alt="Youtube" />
        <div class="text-wrapper">
          <span class="listen">Slušaj na</span>
          <span class="title">Youtube</span>
        </div>
      </a>

      <a
        v-if="spotify"
        :href="spotify"
        target="_blank"
        rel="noopener noreferrer"
        class="podcast-box spotify"
      >
        <img src="@/assets/img/spotify.png" alt="Spotify" />
        <div class="text-wrapper">
          <span class="listen">Slušaj na</span>
          <span class="title">Spotify</span>
        </div>
      </a>

      <a
        v-if="apple"
        :href="apple"
        target="_blank"
        rel="noopener noreferrer"
        class="podcast-box apple"
      >
        <img src="@/assets/img/apple-podcasts.png" alt="Apple Podcasts" />
        <div class="text-wrapper">
          <span class="listen">Slušaj na</span>
          <span class="title">Apple Podcasts</span>
        </div>
      </a>

      <a
        v-if="random"
        :href="random"
        target="_blank"
        rel="noopener noreferrer"
        class="podcast-box random"
      >
        <img src="@/assets/img/random-platform.png" alt="Svugdje" />
        <div class="text-wrapper">
          <span class="listen">Slušaj</span>
          <span class="title">Svugdje</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PodcastPlatforms',
  props: {
    youtube: { type: String, default: '#' },
    spotify: { type: String, default: '#' },
    apple: { type: String, default: '#' },
    random: { type: String, default: '#' },
  },
  computed: {
    hasLinks() {
      return this.youtube || this.spotify || this.apple || this.random
    },
  },
  mounted() {
    console.log('youtube:', this.youtube)
    console.log('spotify:', this.spotify)
    console.log('apple:', this.apple)
    console.log('random:', this.random)
  },
}
</script>

<style scoped>
.podcast-platforms {
  width: 100%;
}

.podcasts-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 400px;
  display: grid;
  grid-template-columns: 2fr 2fr;
  gap: 12px;
  background-color: transparent;
}

.podcast-box {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  padding: 10px 0px;
}
.contrast-mode .podcast-box {
  background-color: #333;
}

.podcast-box img {
  object-fit: contain;
  height: 16px;
}

.podcast-box .text-wrapper {
  display: flex;
  flex-direction: row;
  gap: 3px;
  text-align: left;
  align-items: center;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 10px;
  line-height: 100%;
}
html.small-fontsize .text-wrapper {
  font-size: 8px;
}
html.large-fontsize .text-wrapper {
  font-size: 11px;
}
.text-wrapper .listen {
  color: #adadad;
  margin: 0;
}

.text-wrapper .title {
  color: black;
}
.contrast-mode .text-wrapper .title {
  color: white;
}
@media (min-width: 1024px) {
  .podcasts-wrapper {
    gap: 16px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .podcast-box {
    gap: 4px;
  }
  .text-wrapper {
    gap: 4px;
  }

  .podcast-box img {
    max-width: 26px;
  }
}
</style>
