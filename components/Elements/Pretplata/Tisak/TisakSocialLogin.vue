<template>
  <div class="tt-social">
    <p v-if="text" class="tt-social__text">{{ text }}</p>
    <!-- Same look as the newest checkout, PaymentFlowAuth.vue (.pf-social-btn). -->
    <div class="tt-social__row">
      <button type="button" class="tt-social__btn" @click="go('google')">
        <img src="~/assets/img/google-logo.svg" alt="" />
        Google
      </button>
      <button type="button" class="tt-social__btn" @click="go('facebook')">
        <img src="~/assets/img/facebook.svg" alt="" />
        Facebook
      </button>
    </div>
  </div>
</template>

<script>
// Sign in with Google or Facebook through the CRM, the same links as
// components/Login.vue. The CRM logs the reader in, sets the n_token cookie
// on .telegram.hr and sends them back to this page, where the form picks up
// the login. The URL is built on click, in the browser, so it always returns
// to the page's own origin (dev, staging or www).
export default {
  name: 'TisakSocialLogin',
  props: {
    text: { type: String, default: '' },
  },
  methods: {
    go(provider) {
      const crm = (
        this.$config.crmPublicUrl || 'https://pretplata.telegram.hr'
      ).replace(/\/$/, '')
      const back = encodeURIComponent(window.location.href)
      const url =
        provider === 'google'
          ? `${crm}/users/google/sign?url=${back}`
          : `${crm}/social-login/social-sign/sign?social_provider_key=facebook&success_login_url=${back}`
      // Let the form save its draft before the page is left.
      this.$emit('leave')
      window.location.href = url
    },
  },
}
</script>
