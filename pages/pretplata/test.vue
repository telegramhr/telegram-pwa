<template>
  <div class="podcast-platforms">
    <div v-if="hasLinks" class="podcasts-wrapper">
      <a
        v-if="link1"
        :href="link1"
        target="_blank"
        rel="noopener noreferrer"
        class="podcast-box youtube"
      >
        <img src="@/assets/img/youtube.svg" alt="Youtube" />
        <div class="text-wrapper">
          <span class="listen">Slušaj na</span>
          <span class="title">Youtube</span>
        </div>
      </a>

      <a
        v-if="link2"
        :href="link2"
        target="_blank"
        rel="noopener noreferrer"
        class="podcast-box spotify"
      >
        <img src="@/assets/img/spotify.svg" alt="Spotify" />
        <div class="text-wrapper">
          <span class="listen">Slušaj na</span>
          <span class="title">Spotify</span>
        </div>
      </a>

      <a
        v-if="link3"
        :href="link3"
        target="_blank"
        rel="noopener noreferrer"
        class="podcast-box apple"
      >
        <img src="@/assets/img/apple-podcasts.svg" alt="Apple Podcasts" />
        <div class="text-wrapper">
          <span class="listen">Slušaj na</span>
          <span class="title">Apple Podcasts</span>
        </div>
      </a>

      <a
        v-if="link4"
        :href="link4"
        target="_blank"
        rel="noopener noreferrer"
        class="podcast-box random"
      >
        <img src="@/assets/img/random-platform.svg" alt="Svugdje" />
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
  name: 'Platforms',
  props: {
    link1: { type: String, default: '#' },
    link2: { type: String, default: '#' },
    link3: { type: String, default: '#' },
    link4: { type: String, default: '#' },
  },
  computed: {
    hasLinks() {
      return this.link1 || this.link2 || this.link3 || this.link4
    },
  },
}
</script>

<style scoped>
.podcast-platforms {
  color: #fff;
  padding: 2px;
}

.podcasts-wrapper {
  display: flex;
  flex-direction: row;
  gap: 8px;
  background-color: transparent;
}

.podcast-box {
  display: flex !important;
  flex-direction: row !important;
  gap: 6px !important;
  background-color: white;
  border: 1px solid #e4e4e4 !important;
  border-radius: 4px !important;
  cursor: pointer !important;
  text-decoration: none;
}

.podcast-box img {
  max-width: 16px;
}

.podcast-box.youtube {
  padding: 4px 6px !important;
}
.podcast-box.spotify {
  padding: 4px 8px !important;
}
.podcast-box.apple {
  padding: 4px 6px !important;
}
.podcast-box.random {
  padding: 4px 8px !important;
}

.podcast-box .text-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: left;
}

.text-wrapper .listen {
  font-family: 'Inter', sans-serif !important;
  font-weight: 600 !important;
  font-size: 8px !important;
  line-height: 100% !important;
  color: #adadad !important;
  margin: 0 !important;
}

.text-wrapper .title {
  font-family: 'Inter', sans-serif !important;
  font-weight: 600 !important;
  font-size: 10px !important;
  line-height: 100% !important;
  color: black !important;
}
@media (min-width: 1024px) {
  .podcasts-wrapper {
    gap: 24px;
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

  .podcast-box.youtube {
    padding: 6px 7px !important;
  }
  .podcast-box.spotify {
    padding: 6px 14px !important;
  }
  .podcast-box.apple {
    padding: 6px 8px !important;
  }
  .podcast-box.random {
    padding: 6px 12px !important;
  }

  .text-wrapper .title {
    font-weight: 600;

    font-size: 12px !important;
  }
}
</style>
