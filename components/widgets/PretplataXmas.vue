<template>
  <a
    href="#"
    class="full dark-element bottom-pretplata-promo pretplata-new-promo sitetop-xmas relative"
    @click.prevent="handleClick($event)"
  >
    <img
      src="@/assets/img/tg_bg_xmas.svg"
      alt="Kolaž naslovnih fotografija raznih istraživačkih specijala Telegrama"
      class="img-as-bg"
    />
    <div class="container stretch relative flex" data-nosnippet>
      <div class="full center flex-responsive mobile-side-pad">
        <div class="full flex article">
          <div class="full center">
            <img src="@/assets/img/tg_icon_xmastree.svg" />
          </div>
          <div class="nothfour full center-text">
            Telegramova najveća akcija dosad
          </div>
          <h1 class="full center-text">1kn za 3 mjeseca pretplate</h1>
          <div class="full center">
            <div class="newbtn huge-newbtn">Pretplatite se</div>
          </div>
          <h2 class="full relative center-text">
            <span class="faded strikethrough">147 kn</span> 1 kn
          </h2>
          <p class="full relative center-text">
            (<span class="faded strikethrough">19,50€</span> 0,13€)
          </p>
          <div class="nothfour full center-text desktop-only">
            Samo do 01.01.2023.
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'PretplataXmas',
  methods: {
    handleClick($event) {
      if (this.$route.name === 'pretplata') {
        this.$emit('trigger')
      } else {
        this.$router.push('/pretplata?promo_code=KHD6THX')
      }
    },
  },
}
</script>
