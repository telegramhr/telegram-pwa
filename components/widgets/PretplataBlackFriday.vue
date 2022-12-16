<template>
  <app-link
    to="pretplata"
    class="full dark-element bottom-pretplata-promo pretplata-new-promo sitetop-bf relative"
    data-nosnippet
  >
    <img
      src="@/assets/img/tg_black_friday_bg.jpg"
      alt="Kolaž naslovnih fotografija raznih istraživačkih specijala Telegrama"
      class="img-as-bg"
    />
    <div class="container stretch relative flex">
      <div class="full center relative">
        <img
          src="@/assets/img/tg_blackfriday_logo.png"
          class="bf-logo"
          alt="Kolaž naslovnih fotografija raznih istraživačkih specijala Telegrama"
        />
      </div>
      <div class="full center flex-responsive mobile-side-pad">
        <div class="full flex article">
          <h1 class="full center-text">Godinu dana pretplate besplatno</h1>
          <h4 class="full center-text">
            Kupite jednu godinu, drugu dobijete besplatno
          </h4>
          <div class="full center">
            <div class="newbtn huge-newbtn">Pretplatite se</div>
          </div>
        </div>
      </div>
    </div>
  </app-link>
</template>

<script>
export default {
  name: 'PretplataFirstTime',
}
</script>
