<template>
  <app-link
    to="pretplata"
    class="full dark-element bottom-pretplata-promo pretplata-new-promo relative"
  >
    <div class="container stretch relative flex" data-nosnippet>
      <div class="third column-full-pad center flex-responsive mobile-side-pad">
        <div class="full flex article">
          <h3 class="full overtitle">Bespoštedno novinarstvo</h3>
          <h1 class="full">Podržite Telegram</h1>
          <h4 class="full">
            Najkvalitetniji hrvatski portal, po velikom međunarodnom
            istraživanju navika čitatelja
          </h4>
        </div>
      </div>
      <div class="two-thirds stretch flex flex-responsive">
        <div class="half column-top-pad center">
          <img
            src="@/assets/img/tg_pretplata_keypoint_vizual_korupcija_header.jpg"
            alt="Kolaž naslovnih fotografija raznih istraživačkih specijala Telegrama"
            width="1200"
            height="1000"
          />
        </div>
        <div class="half center column-horizontal-pad mobile-side-pad">
          <div class="full column-left-pad flex article">
            <h2 class="full relative center-text">
              <span class="faded strikethrough">6,49€</span> 5,16€
            </h2>
            <h2 class="full relative center-text">
              (<span class="faded strikethrough">49 kn</span> 39 kn) <br />
              mjesečno, ako odmah uzmete za godinu dana
            </h2>
            <div class="full center">
              <div class="newbtn huge-newbtn">Pretplatite se</div>
            </div>
            <h5 class="full center-text desktop-only">
              Neograničeno čitanje svih naših reportera, kolumnista, vijesti i
              analiza.
            </h5>
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
