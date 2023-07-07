<template>
  <!-- Ovdje widget color preko sustava u style -->
  <div
    v-show="widget.url"
    class="container cantha-small-block flex relative native-block partner-special-block column-vertical-pad stretch"
    :style="{ '--partner-color': widget.color }"
  >
    <div class="full flex stretch column-bottom-pad">
      <!-- Ovdje link na specijal -->
      <a :href="widget.url" target="_blank" class="fourth flex-responsive">
        <!-- Ovdje sliku koju stave -->
        <img :src="widget.image" alt="Telegram logo" />
      </a>
      <!-- Ovdje odabrana tri članka -->
      <div
        v-for="post in posts.slice(0, 3)"
        :key="post.id"
        class="fourth column-right-border flex-responsive column-horizontal-pad mobile-side-pad"
      >
        <standard
          :post="post"
          :utm="{
            source: 'Telegram.hr',
            campaign: 'SpecialWidget-' + position,
          }"
        ></standard>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartnerSpecial',
  props: {
    position: {
      type: String,
      required: true,
      default: 'tg',
    },
  },
  computed: {
    posts() {
      return this.$store.state.partner.widget[this.position].posts ?? []
    },
    widget() {
      return this.$store.state.partner.widget[this.position] ?? { url: null }
    },
  },
  mounted() {
    this.$store.dispatch('partner/pullSpecialWidget', this.position)
  },
}
</script>
