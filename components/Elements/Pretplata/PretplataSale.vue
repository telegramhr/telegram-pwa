<template>
  <div class="full flex relative pretplata-sale">
    <div
      class="container center relative mobile-side-pad pretplata-packs pretplata-packboxes"
    >
      <div
        class="full flex-responsive flex relative pretplata-packbox sale-packbox stretch"
      >
        <img
          class="ps-xmas1"
          src="@/assets/img/tg_xmas_1.png"
          aria-hidden="true"
        />
        <img
          class="ps-xmas2"
          src="@/assets/img/tg_xmas_2.png"
          aria-hidden="true"
        />
        <div class="full flex overtitle-parent">
          <h3 class="overtitle">Božićna akcija</h3>
        </div>
        <h2 class="full"><span>49kn</span>1kn</h2>
        <h4 class="full center-text undertitle">
          Prvi mjesec (0,13€), poslije 49kn mjesečno (6,50€)
        </h4>
        <div class="full pretplata-benefits">
          <p class="full animate">
            <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
            prvi mjesec za samo 1 kunu (0,13€)
          </p>
          <p class="full animate">
            <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
            mjesečna Standard pretplata
          </p>
          <p class="full animate">
            <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
            neograničeno čitanje Telegrama
          </p>
          <p class="full animate">
            <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
            specijalni newsletteri
          </p>
          <p class="full animate">
            <font-awesome-icon :icon="['fas', 'check']"></font-awesome-icon>
            možete otkazati bilo kada
          </p>
          <h4 class="full center-text undertitle">
            *promotivna ponuda vrijedi samo za nove pretplatnike
          </h4>
        </div>
        <div class="full center btn-parent" @click="checkout(promo)">
          <div class="btn animate">Odaberi</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PretplataSale',
}
</script>
