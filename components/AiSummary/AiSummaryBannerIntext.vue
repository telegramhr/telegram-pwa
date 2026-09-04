<template>
  <!--
    Samsung intext banner, mounted after the third paragraph of the article
    (see loadInArticleAiBanner in pages/_category/_slug.vue). Campaign Manager
    360 tracking ad: the 1x1 pixel counts the impression on mount, the link goes
    through the click tracker. Per the tag sheet, [timestamp] is replaced with a
    random cache buster per mount. The GDPR macros are sent empty for now
    (consent is not passed yet); the click tracker gets the same values.
  -->
  <app-link :to="clickUrl" @click.native="trackAiSummary('click')">
    <img
      v-if="impressionUrl"
      :src="impressionUrl"
      attributionsrc
      alt=""
      aria-hidden="true"
      width="1"
      height="1"
    />
    <img
      class="ai-banner desktop-only"
      src="@/assets/img/ai-summary/samsung-desktop.png"
      alt="Samsung Galaxy Z Fold8: Skrati dugu priču. AI Summary izdvaja najbitnije."
    />
    <img
      class="ai-banner mobile-only"
      src="@/assets/img/ai-summary/samsung-mobile.png"
      alt="Samsung Galaxy Z Fold8: Skrati dugu priču. AI Summary izdvaja najbitnije."
    />
  </app-link>
</template>

<script>
import aiSummaryTracking from '~/utils/aiSummaryTracking'

const DCM_PLACEMENT =
  'N48406.1983717TELEGRAM.HR/B36357733.453292138;dc_trk_aid=647554540;dc_trk_cid=261170536'
const DCM_TAIL =
  'dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=;gdpr_consent=;ltd=;dc_tdv=1'

export default {
  name: 'AiSummaryBannerIntext',
  mixins: [aiSummaryTracking],
  data() {
    return {
      aiPlacement: 'intext-banner',
      clickUrl: `https://ad.doubleclick.net/ddm/trackclk/${DCM_PLACEMENT};${DCM_TAIL}`,
      // Set on mount so the pixel is requested exactly once per mount, client-side.
      impressionUrl: '',
    }
  },
  mounted() {
    const ord = `${Date.now()}${Math.floor(Math.random() * 1e6)}`
    this.impressionUrl = `https://ad.doubleclick.net/ddm/trackimp/${DCM_PLACEMENT};ord=${ord};${DCM_TAIL}?`
  },
}
</script>

<style scoped></style>
