<template>
  <app-link
    to="knjiga/zrinka-paladino-o-zagrebu"
    class="widget widget-podcast widget-knjiga relative full flex"
  >
    <div class="widget-box full flex">
      <h2 class="full">Telegram predstavlja: nova knjiga Zrinke Paladino</h2>
      <div class="full center relative podcast-art">
        <img
          src="@/assets/img/paladino_cover.jpg"
          alt="Naslovnica nove knjige Zrinke Paladino"
        />
        <img
          src="@/assets/img/text.jpg"
          class="podcast-bg"
          aria-hidden="true"
        />
      </div>
      <div class="full center">
        <div class="btn animate">Kupite</div>
      </div>
      <div class="full center">
        <font-awesome-icon :icon="['fas', 'book']"></font-awesome-icon>
      </div>
    </div>
  </app-link>
</template>

<script>
export default {
  name: 'Knjiga',
}
</script>
