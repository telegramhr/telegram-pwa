<template>
  <div v-show="shown" class="full pretplata-ticker special-ticker relative">
    <div class="close-ticker-btn center animate" @click="shown = !shown">
      <font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>
    </div>
    <div class="container flex relative">
      <img
        src="@/assets/img/tg_ticker_special_bg_mobile.jpg"
        class="mobile-only"
        aria-hidden="true"
      />
      <img
        src="@/assets/img/tg_ticker_special_bg_desktop.jpg"
        class="desktop-only"
        aria-hidden="true"
      />
      <div class="half flex-responsive flex">
        <h2 class="full">U 2023. zajedno možemo napraviti više. Puno više.</h2>
        <p class="full">
          Iz godine u godinu, novinari Telegrama razotkrivaju goleme afere i
          mračnu korupciju. Takvo bespoštedno novinarstvo moguće je samo uz
          podršku naših pretplatnika. Oni razumiju da Hrvatska ne može naprijed,
          dok se ne riješimo onih koji je drže na dnu.
        </p>
        <p class="full bold">
          Za neograničeno čitanje i podršku radu Telegrama,<br />
          pretplatite se već od 6,49 eura mjesečno.
        </p>
        <div class="full center">
          <app-link to="/pretplata" class="btn animate"
            >Pretplatite se</app-link
          >
          <app-link to="/donacije" class="btn animate">Donirajte</app-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TickerSpecial',
  data() {
    return {
      shown: true,
    }
  },
}
</script>
