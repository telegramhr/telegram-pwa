<template>
  <!-- Ovdje widget color preko sustava u style -->
  <div
    class="container cantha-small-block flex relative native-block partner-special-block column-vertical-pad stretch"
    style="--partner-color: #5c903e"
  >
    <div class="full flex stretch column-bottom-pad">
      <!-- Ovdje link na specijal -->
      <a
        href="https://www.telegram.hr/native/zelena-licnost/"
        target="_blank"
        class="fourth flex-responsive"
      >
        <!-- Ovdje sliku koju stave -->
        <img
          src="@/assets/img/extras/partner_widgets/zelena_licnost.jpg"
          alt="Telegram logo"
        />
      </a>
      <!-- Ovdje odabrana tri članka -->
      <div
        v-for="post in posts.slice(0, 3)"
        :key="post.id"
        class="fourth column-right-border flex-responsive column-horizontal-pad mobile-side-pad"
      >
        <standard
          :post="post"
          :utm="{ source: 'Telegram.hr', campaign: 'Partneri' }"
        ></standard>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartnerSpecial',
  computed: {
    posts() {
      return this.$store.state.promos.posts
    },
  },
  mounted() {
    this.$store.dispatch('promos/pullPosts')
  },
}
</script>
