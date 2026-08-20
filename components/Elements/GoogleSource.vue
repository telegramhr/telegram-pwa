<template>
  <div class="google-source" data-nosnippet>
    <a
      class="google-source-btn"
      href="https://google.com/preferences/source?q=telegram.hr"
      target="_blank"
      rel="nofollow noopener"
      @click="track"
    >
      <span class="google-source-icon">
        <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
          <path
            fill="#EA4335"
            d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
          />
          <path
            fill="#4285F4"
            d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
          />
          <path
            fill="#FBBC05"
            d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
          />
          <path
            fill="#34A853"
            d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
          />
        </svg>
      </span>
      <span class="google-source-text">
        Dodajte <strong>Telegram.hr</strong> među omiljene izvore na Googleu
      </span>
      <span class="google-source-arrow" aria-hidden="true">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 3L11 8L6 13"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
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
.google-source {
  width: 100%;
  margin: 24px 0;
}

.google-source-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  box-sizing: border-box;
  padding: 14px 18px;
  border: 1px solid #ddd;
  border-radius: 12px;
  background: #fff;
  color: #333;
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  line-height: 1.3;
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s;
}

.google-source-btn:hover {
  background: #efded0;
  border-color: #d8c4b2;
}

.superone .google-source-btn:hover,
.openspace .google-source-btn:hover,
.pitanje-zdravlja .google-source-btn:hover {
  background: #efefef;
  border-color: #ddd;
}

.google-source-icon {
  display: flex;
  flex-shrink: 0;
}

.google-source-icon svg {
  width: 22px;
  height: 22px;
  display: block;
}

.google-source-text {
  flex: 1 1 auto;
}

.google-source-text strong {
  font-weight: 700;
}

.google-source-arrow {
  display: flex;
  flex-shrink: 0;
  color: #999;
}

@media (max-width: 480px) {
  .google-source-btn {
    padding: 12px 14px;
    font-size: 15px;
    gap: 10px;
  }
}

body.dark-mode .google-source-btn {
  background: #1e1e1e;
  border-color: #3a3a3a;
  color: #f2f2f2;
}

body.dark-mode .google-source-btn:hover {
  background: #2a2a2a;
  border-color: #4a4a4a;
}

body.contrast-mode .google-source-btn {
  background: #000;
  border-color: #fff;
  color: #fff;
}

body.contrast-mode .google-source-btn:hover {
  background: #222;
}

body.dark-mode .google-source-arrow,
body.contrast-mode .google-source-arrow {
  color: inherit;
}
</style>
