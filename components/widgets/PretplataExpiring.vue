<template>
  <div v-show="show" class="full flex stretch relative pretplata-expiring">
    <div
      class="container smaller-container flex column-full-pad mobile-full-pad pretplata-faq"
    >
      <details class="full flex relative">
        <summary class="full relative">
          {{ line1 }}
        </summary>
        <div
          class="full nothtwo bold column-top-pad column-mini-bottom-pad column-top-border column-top-margin"
        >
          {{ line2 }}
        </div>
        <p class="full">
          {{ line3 }}
        </p>
        <div class="full flex">
          <app-link
            :to="cta_link"
            class="newbtn huge-newbtn flex center center-text"
          >
            {{ cta }}
          </app-link>
        </div>
      </details>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PretplataExpiring',
  data() {
    return {
      show: false,
      line1: 'Postoji problem s vašom pretplatom.',
      line2:
        'Vaša kartica je istekla te uskoro nećemo moći obnoviti vašu pretplatu.',
      line3:
        'Molimo vas da unesete nove podatke kako bi nastavili koristiti svoju pretplatu.',
      cta: 'Opcije plaćanja',
      cta_link: '/moj-racun',
    }
  },
  mounted() {
    window.addEventListener('piano_expiring', this.load)
  },
  destroyed() {
    window.removeEventListener('piano_expiring', this.load)
  },
  methods: {
    login() {
      this.$store.dispatch('user/login')
    },
    load(e) {
      if (e.detail) {
        this.line1 = e.detail.line1 ?? this.line1
        this.line2 = e.detail.line2 ?? this.line2
        this.line3 = e.detail.line3 ?? this.line3
        this.cta = e.detail.cta ?? this.cta
        this.cta_link = e.detail.cta_link ?? this.cta_link
      }
      this.show = true
    },
    checkout(termId) {
      this.$piano.start(termId)
    },
  },
}
</script>
