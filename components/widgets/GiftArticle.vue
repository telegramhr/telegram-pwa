<script>
export default {
  name: 'GiftArticle',
  props: {
    position: {
      type: String,
      required: false,
      default: 'header',
    },
  },
  data() {
    return {
      link: '',
      showGiftSubmenu: false,
    }
  },
  computed: {
    userGifts() {
      return this.$store.state.gifts
    },
    hasGifted() {
      return this.userGifts.articles.filter(
        (article) => article.url === this.$route.fullPath
      )
    },
  },
  mounted() {
    if (this.position === 'header') {
      this.$store.dispatch('gifts/getUserGifts')
    }
  },
  methods: {
    async getLink() {
      if (this.hasGifted.length) {
        this.link = this.hasGifted[0].link
        this.showGiftSubmenu = !this.showGiftSubmenu
        return
      }
      await this.$axios
        .$post('/pretplate/api/gift-article/', {
          url: this.$route.fullPath,
        })
        .then((res) => {
          this.link = res.link
          this.$store.commit('gifts/updateAvailable', res)
          this.showGiftSubmenu = !this.showGiftSubmenu
        })
        .catch((err) => {
          console.log(err)
        })
    },
    copyLink() {
      navigator.clipboard.writeText(this.link)
    },
    fbShare() {
      /* global FB */
      FB.ui({ method: 'share', href: this.link }, function (response) {})
    },
    twitterShare() {
      const url = `https://twitter.com/intent/tweet?url=${this.link}`
      window.open(url, '_blank')
    },
  },
}
</script>

<template>
  <div
    class="flex relative article-gift-button"
    :class="{ 'float-right': position === 'footer' }"
  >
    <label class="clickable" @click="getLink"
      ><font-awesome-icon
        :icon="['far', 'gift']"
        class="animate"
      ></font-awesome-icon>
      <span>Poklonite članak</span></label
    >
    <div v-show="showGiftSubmenu" class="article-gift-submenu flex">
      <template v-if="userGifts.available && link">
        <p class="full gift-submenu-title">Poklonite članak</p>
        <p class="full gift-submenu-description">
          Kao pretplatnik možete nekom pokloniti članke koji su zaključani.
          Imate još <b>{{ userGifts.available }}/10</b> članaka za podijeliti
          ovaj mjesec.
        </p>
        <div class="full gift-submenu-item clickable animate" @click="copyLink">
          <font-awesome-icon
            :icon="['fas', 'link']"
            class="animate"
          ></font-awesome-icon>
          Kopiraj link
        </div>
        <div class="full gift-submenu-item clickable animate" @click="fbShare">
          <font-awesome-icon
            :icon="['fab', 'facebook-f']"
            class="animate"
          ></font-awesome-icon>
          Podijeli na Facebook
        </div>
        <div
          class="full gift-submenu-item clickable animate"
          @click="twitterShare"
        >
          <font-awesome-icon
            :icon="['fab', 'x-twitter']"
            class="animate"
          ></font-awesome-icon>
          Podijeli na X (Twitter)
        </div>
      </template>
      <template v-else>
        <p class="full gift-submenu-title">Nemate više poklona</p>
        <p class="full gift-submenu-description">
          Nažalost potrošili ste sve poklone za ovaj mjesec.
        </p>
      </template>
    </div>
  </div>
</template>
