<template>
  <div class="google-source" data-nosnippet>
    <p class="google-source-lead">
      Želite da vam Google češće prikazuje Telegramove priče?
    </p>
    <a
      class="google-source-btn"
      href="https://google.com/preferences/source?q=telegram.hr"
      target="_blank"
      rel="nofollow noopener"
      @click="track"
    >
      <span class="google-source-inner">
        <img
          class="google-source-icon"
          src="@/assets/img/google-g.svg"
          alt=""
          width="16"
          height="16"
        />
        <span class="google-source-label">Pratite Telegram.hr na Googleu</span>
      </span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'GoogleSource',
  methods: {
    track() {
      if (!this.$gtm) return
      this.$gtm.push({
        event: 'google_preferred_source',
        'gps-action': 'click',
        'gps-path': this.$route ? this.$route.path : '',
      })
    },
  },
}
</script>

<style scoped>
/* Figma: Article Redesign — Google follow (desktop 1731:2559, mobile 1731:3127) */
.google-source {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  box-sizing: border-box;
  padding: 16px 24px;
  background: #fdf6ef;
}

.google-source-lead {
  margin: 0;
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 24.5px;
  color: #343434;
  text-align: center;
  white-space: nowrap;
  text-box: trim-both cap alphabetic;
}

.google-source-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  box-sizing: border-box;
  padding: 6px 8px;
  border-radius: 14px;
  background: #fff;
  text-decoration: none;
}

.google-source-inner {
  display: flex;
  align-items: center;
  gap: 3.5px;
}

.google-source-icon {
  display: block;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
}

.google-source-label {
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 24.5px;
  color: #343434;
  white-space: nowrap;
  text-box: trim-both cap alphabetic;
}

@media screen and (max-width: 767px) {
  .google-source {
    border-radius: 4px;
  }

  .google-source-lead {
    line-height: 18px;
    white-space: normal;
    margin-bottom: 0 !important;
  }

  .google-source-btn {
    height: 32px;
    padding: 7.529px 8px;
    border-radius: 18.824px;
  }

  .google-source-inner {
    gap: 3.765px;
    padding: 0 7.529px;
  }

  .google-source-icon {
    width: 14.222px;
    height: 14.222px;
  }

  .google-source-label {
    font-size: 14px;
  }
}
</style>
