<template>
  <app-link
    to="/knjiga/boris-dezulovic-bili-libar-2"
    class="full flex relative center mobile-side-pad darkened-bg column-full-pad shoo-bottom"
  >
    <div class="container relative flex stretch">
      <div class="forty tablet-full flex flex-responsive center">
        <div class="full center-text newbook-overtitle">Telegram naklada</div>
        <h2 class="full center-text newbook-title newbook-title-smaller">
          BILI LIBAR 2
        </h2>
        <div class="full center-text newbook-author">Boris Dežulović</div>
        <p class="full center-text newbook-intro">
          Veliki Telegramov hit dobio je nastavak, s 12 još raskošnijih, još
          čudesnijih i luđih priča o jednom nogometnom klubu. I, naravno, ne
          samo o njemu.
        </p>
      </div>

      <div class="forty tablet-full flex flex-responsive center">
        <img
          src="@/assets/img/tg_book_clean_dezulovic2.png"
          alt="Naslovnica nove knjige Borisa Dežulovića 'BILI LIBAR 2'"
        />
      </div>
      <div class="fifth tablet-full flex flex-responsive center">
        <div class="full relative center-text newbook-price">19,99€</div>
        <div class="full relative center-text neat-numbers">
          (150,61 kn)
          <br />
          Besplatna dostava po cijeloj Hrvatskoj
        </div>
        <div class="full center btn-parent newbook-btn">
          <div class="newbtn clickable huge-newbtn animate">Kupite</div>
        </div>
      </div>
    </div>
  </app-link>
</template>

<script>
export default {
  name: 'Knjiga',
}
</script>
