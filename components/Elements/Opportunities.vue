<template>
  <div>
    <h3 class="full flex overtitle os-widget-overtitle">Pregled prilika</h3>
    <app-link
      v-for="opportunity in opportunities"
      :key="opportunity.id"
      :to="opportunity.permalink"
      class="full flex komentar os-prilika relative"
    >
      <div class="komentar-author relative flex">
        <img :src="opportunity.company_image" loading="lazy" />
        <i class="full mobile-only">Donosi</i>
        <span class="full mobile-only">{{ opportunity.company }}</span>
      </div>
      <div class="komentar-box relative">
        <div class="komentar-quotation">
          <font-awesome-icon :icon="['fas', 'briefcase']"></font-awesome-icon>
        </div>
        <div class="komentar-image">
          <picture>
            <img :src="opportunity.image" loading="lazy" />
          </picture>
        </div>
        <div class="komentar-content full">
          <div class="komentar-author relative flex desktop-only">
            <i class="full">Donosi</i>
            <span class="full">{{ opportunity.company }}</span>
          </div>
          <h2 class="full animate">
            {{ opportunity.title }}
          </h2>
          <h5 v-show="opportunity.ends_at" class="full flex article-meta">
            <span class="meta-author"><i>Prijave do</i></span>
            <span class="meta-date">{{ opportunity.ends_at }}</span>
          </h5>
        </div>
      </div>
    </app-link>
  </div>
</template>

<script>
export default {
  name: 'Opportunities',
  async fetch() {
    this.opportunities = await this.$axios.$get('/api/widgets/opportunities')
  },
  data() {
    return {
      opportunities: [],
    }
  },
}
</script>
