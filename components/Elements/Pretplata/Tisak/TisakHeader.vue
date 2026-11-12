<template>
  <!-- A div, not <header>: the site CSS makes every <header> position: fixed. -->
  <div class="tt-header">
    <div class="tt-header__inner">
      <nuxt-link
        :to="flow ? '/pretplata/telegram-tisak/' : '/'"
        class="tt-header__logo"
        :aria-label="flow ? 'Natrag na pretplatu' : 'Telegram.hr – naslovnica'"
      >
        <img
          src="~/assets/img/pretplata/telegram-tisak/logo/telegram-T-square.svg"
          alt="Telegram"
          width="50"
          height="50"
        />
      </nuxt-link>
      <nav v-if="!flow" class="tt-header__nav" aria-label="Račun">
        <button
          v-if="!loggedIn"
          type="button"
          class="tt-header__login"
          @click="$store.dispatch('user/login', { reload: false })"
        >
          Prijava
        </button>
        <a href="#pretplata" class="tt-header__cta">Pretplatite se</a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TisakHeader',
  props: {
    // Flow screens show only the logo, to keep the reader in the checkout.
    flow: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    loggedIn() {
      return !!this.$store.state.user.id
    },
  },
}
</script>
