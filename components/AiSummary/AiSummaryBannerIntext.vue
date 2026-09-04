<template>
  <app-link
    style="margin-bottom: 15px"
    :to="'https://ad.doubleclick.net/ddm/trackclk/N48406.1983717TELEGRAM.HR/B36357733.453292138;dc_trk_aid=647554540;dc_trk_cid=261170536;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1'"
  >
    <img
      SRC="https://ad.doubleclick.net/ddm/trackimp/N48406.1983717TELEGRAM.HR/B36357733.453292138;dc_trk_aid=647554540;dc_trk_cid=261170536;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1?"
      attributionsrc
      BORDER="0"
      HEIGHT="1"
      WIDTH="1"
      ALT="Advertisement"
    />
    <img
      class="ai-banner desktop-only"
      src="@/assets/img/ai-summary/samsung-desktop.png"
    />
    <img
      class="ai-banner mobile-only"
      src="@/assets/img/ai-summary/samsung-mobile.png"
    />
  </app-link>
</template>

<script>
export default {
  name: 'AiSummaryBanner',
}
</script>

<style scoped></style>
