<template>
  <app-link
    to="https://pretplata.telegram.hr/sales-funnel/sales-funnel-frontend/show?funnel=main"
    class="full center relative pretplata-subs-special darkened-bg"
  >
    <!-- Just a template, no composer connection required -->
    <div class="container center flex-wrap relative relative stretch">
      <div
        class="half flex-responsive flex column-full-pad mobile-full-pad m-order-2"
      >
        <div class="full flex overtitle-parent">
          <div class="overtitle noththree">
            <span>{{ overtitle }}</span>
          </div>
        </div>
        <div class="full nothtwo">
          {{ title }}
        </div>
        <p class="full highlight-pitch">
          {{ subtitle }}
        </p>
        <div class="full flex column-top-pad mobile-top-pad">
          <div class="newbtn huge-newbtn">{{ cta }}</div>
        </div>
      </div>

      <div class="half flex-responsive flex m-order-1">
        <img :src="image" aria-hidden="true" />
      </div>
    </div>
  </app-link>
</template>

<script>
export default {
  name: 'HometopAdvanced',
  data() {
    return {
      title: 'Lorem ipsum dolor',
      subtitle: 'Simply dummy text of the printing and typesetting industry',
      overtitle: 'Nadnaslov',
      cta: 'Pretplatite se',
      image: 'https://www.telegram.hr/img/tg_share_odabrati_stranu.jpg',
    }
  },
}
</script>
