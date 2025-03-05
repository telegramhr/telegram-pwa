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
    if (this.position === 'header' && this.$store.state.user.token) {
      this.$store.dispatch('gifts/getUserGifts')
    }
  },
  methods: {
    async getLink() {
      if (this.hasGifted.length) {
        this.link = this.hasGifted[0].link
        this.showGiftSubmenu = !this.showGiftSubmenu
        return this.link
      }
      return await this.$axios
        .$post('/pretplate/api/gift-article/', {
          url: this.$route.fullPath,
        })
        .then((res) => {
          this.link = res.link
          this.$store.commit('gifts/updateAvailable', res)
          return res.link
        })
    },
    async copyLink() {
      const link = await this.getLink()
      await navigator.clipboard.writeText(link)
    },
    async fbShare() {
      const link = await this.getLink()
      /* global FB */
      FB.ui(
        {
          method: 'share',
          href: link,
        },
        function (response) {}
      )
    },
    async twitterShare() {
      let link = await this.getLink()
      link = encodeURIComponent(link)
      const url = `https://twitter.com/intent/tweet?url=${link}&text=Ovaj Telegram članak poklon je pretplatnika i možete ga pročitati besplatno.`
      window.open(url, '_blank')
    },
    async whatsappShare() {
      let link = await this.getLink()
      link = encodeURIComponent(link)
      const url = `https://api.whatsapp.com/send?text=Ovaj Telegram članak poklon je pretplatnika i možete ga pročitati besplatno. ${link}`
      window.open(url, '_blank')
    },
    async telegramShare() {
      let link = await this.getLink()
      link = encodeURIComponent(link)
      const url = `https://t.me/share/url?url=${link}&text=Ovaj Telegram članak poklon je pretplatnika i možete ga pročitati besplatno.`
      window.open(url, '_blank')
    },
    async viberShare() {
      let link = await this.getLink()
      link = encodeURIComponent(link)
      const url = `viber://forward?text=Ovaj Telegram članak poklon je pretplatnika i možete ga pročitati besplatno. ${link}`
      window.open(url, '_blank')
    },
    async emailShare() {
      let link = await this.getLink()
      link = encodeURIComponent(link)
      const url = `mailto:?subject=Ovaj Telegram članak poklon je pretplatnika i možete ga pročitati besplatno.&body=${link}`
      window.open(url, 'top')
    },
  },
}
</script>

<template>
  <div
    class="flex relative article-gift-button"
    :class="{ 'float-right': position === 'footer' }"
  >
    <label class="clickable" @click="showGiftSubmenu = !showGiftSubmenu"
      ><font-awesome-icon
        :icon="['far', 'gift']"
        class="animate"
      ></font-awesome-icon>
      <span>Poklonite članak</span></label
    >
    <div v-show="showGiftSubmenu" class="article-gift-submenu flex">
      <template v-if="!$store.state.user.access">
        <p class="full gift-submenu-title">Samo za pretplatnike</p>
        <p class="full gift-submenu-description">
          Pretplatnici Telegrama mogu besplatno pokloniti 10 članaka mjesečno.
          Pretplatite se ili prijavite u svoj račun.
        </p>
      </template>
      <template v-else-if="userGifts.available">
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
        <div
          class="full gift-submenu-item clickable animate"
          @click="whatsappShare"
        >
          <font-awesome-icon
            :icon="['fab', 'whatsapp']"
            class="animate"
          ></font-awesome-icon>
          Podijeli na WhatsApp
        </div>
        <div
          class="full gift-submenu-item clickable animate"
          @click="viberShare"
        >
          <font-awesome-icon
            :icon="['fab', 'viber']"
            class="animate"
          ></font-awesome-icon>
          Podijeli na Viber
        </div>
        <div
          class="full gift-submenu-item clickable animate"
          @click="telegramShare"
        >
          <font-awesome-icon
            :icon="['fab', 'telegram-plane']"
            class="animate"
          ></font-awesome-icon>
          Podijeli na Telegram
        </div>
        <div
          class="full gift-submenu-item clickable animate"
          @click="emailShare"
        >
          <font-awesome-icon
            :icon="['fad', 'envelope-open-text']"
            class="animate"
          ></font-awesome-icon>
          Podijeli emailom
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
