<template>
  <app-link
    to="/pretplata"
    class="full center relative dark-mode pretplata-bf pretplata-blue"
  >
    <div class="container flex relative">
      <img
        src="@/assets/img/tg_visual_2024_05_pretplata.jpg"
        alt="Premijer Andrej Plenković"
        class="absolute-half-img"
      />
      <div
        class="third tablet-two-thirds third-forced-size mobile-side-pad column-full-pad column-top-margin column-bottom-margin flex-responsive flex relative stretch mobile-top-pad pb-topover"
      >
        <p class="full nothtwo">Podržite Telegram i Doru Kršul</p>
        <div class="full mobile-half center pb-stickerbox flex-wrap">
          <div>2 za 1</div>
          <div class="full center-text">Akcija traje do 15.5.</div>
        </div>
        <div class="full mobile-half center flex-wrap pb-combo">
          <div class="nothtwo">99€</div>
          <p>
            <span class="ib">2 godine Premium </span
            ><span class="ib">pretplate bez oglasa</span>
            <span class="ib">za cijenu 1 godine!</span>
          </p>
        </div>
        <!--<div class="full pretplata-benefits">
          <p class="full animate">
            <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
            Neograničeno čitanje Telegrama i Telesporta
          </p>
          <p class="full animate">
            <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
            Premium iskustvo korištenja bez oglasa
          </p>
          <p class="full animate">
            <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
            Živciranje Plenkovića i podrška novinarstvu
          </p>
        </div>-->
        <div class="full center relative">
          <div class="flex newbtn huge-newbtn animate clickable">
            Pretplatite se
          </div>
        </div>
      </div>
    </div>
  </app-link>
</template>

<script>
export default {
  name: 'HometopBlue',
}
</script>
