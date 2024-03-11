<template>
  <div class="full center">
    <app-link :to="clickTarget" class="full flex zgt-salebox">
      <div class="full center zgts-topbar">
        <div>Samo do 01.04.</div>
      </div>
      <div class="full center-text noththree overtitle">
        {{ packName }}
      </div>
      <div class="full center-text sub-price bold">
        <span class="faded strikethrough">99€</span> 78€
      </div>
      <div class="full center-text zgts-subtitle">{{ termDurationText }}</div>
      <div class="full center">
        <div class="zgts-separator"></div>
      </div>
      <div class="full center">
        <p class="full center-text">
          {{ subtitle }}
        </p>
      </div>
      <div class="full center">
        <div class="newbtn huge-newbtn center-text">Pretplatite se</div>
      </div>
      <div class="full center">
        <div class="flex remp-icon-list">
          <font-awesome-icon :icon="['fab', 'cc-visa']"></font-awesome-icon>
          <font-awesome-icon
            :icon="['fab', 'cc-mastercard']"
          ></font-awesome-icon>
          <font-awesome-icon
            :icon="['fab', 'cc-diners-club']"
          ></font-awesome-icon>
        </div>
      </div>
    </app-link>
  </div>
</template>

<script>
export default {
  name: 'IntextNew',
  data() {
    return {
      termId: null,
      clickTarget: '/pretplata',
      upcomingPrice: 99,
      promoPrice: 78,
      packName: 'Telegram Premium (bez oglasa)',
      termDurationText: 'za 12 mjeseci',
      subtitle: 'Uzmite odmah i iskoristite staru cijenu',
    }
  },
}
</script>
