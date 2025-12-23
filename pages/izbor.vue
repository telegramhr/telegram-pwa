<template>
  <div :class="['main-container', 'flex', 'category-page']">
    <!-- TG Multiverse header -->
    <div class="full flex relative single-article">
      <client-only>
        <theader headline="Telegram izbor"></theader>
      </client-only>
    </div>

    <!-- Category header -->
    <div class="full flex relative">
      <div class="container flex mobile-side-pad relative mobile-top-pad">
        <div class="full column-full-pad">
          <div class="full cantha-separator"></div>
        </div>
        <div class="full column-horizontal-pad">
          <h1 class="full center-text">Telegram izbor</h1>
        </div>
        <div class="full column-horizontal-pad column-top-pad mobile-side-pad">
          <div class="full column-top-border"></div>
        </div>
      </div>
    </div>
    <!-- Veliki blok - intro -->
    <div class="full relative">
      <div class="container flex relative stretch block-kaineng mobile-top-pad">
        <div class="full flex">
          <div class="full flex mobile-side-pad stretch">
            <div
              class="full column-horizontal-pad column-top-pad flex split-articles big-split alt-big-break center-text"
            >
              <standard
                v-for="post in posts.slice(0, 1)"
                :key="post.id"
                :post="post"
              ></standard>
            </div>
          </div>
          <client-only>
            <div class="full relative center column-bottom-margin">
              <ad-unit id="telegram_desktop_billboard_v1"></ad-unit>
            </div>
          </client-only>
        </div>
        <div class="full flex mobile-side-pad stretch">
          <div class="full flex column-full-pad">
            <div class="full column-top-border"></div>
          </div>
          <div
            v-for="post in posts.slice(1, 4)"
            :key="post.id"
            class="third flex-responsive column-right-border stretch"
          >
            <div class="full flex column-horizontal-pad">
              <featured :post="post"></featured>
            </div>
          </div>
        </div>
        <div class="full column-full-pad mobile-side-pad">
          <div class="full column-top-border"></div>
        </div>
      </div>
    </div>
    <!-- Echovald rubrika -->
    <div class="full flex">
      <div
        class="container flex relative block-echovald stretch mobile-side-pad"
      >
        <div class="three-fourths flex-responsive flex stretch">
          <div class="half flex-responsive flex column-horizontal-pad">
            <featured
              v-for="post in posts.slice(4, 5)"
              :key="post.id"
              :post="post"
            />
          </div>
          <div
            class="half super-sidebar flex column-horizontal-pad column-left-border column-right-border flex-responsive split-articles"
          >
            <medium
              v-for="post in posts.slice(5, 8)"
              :key="post.id"
              :post="post"
            ></medium>
          </div>
        </div>
        <div
          class="fourth flex-responsive column-horizontal-pad desktop-mini-force"
        >
          <standard
            v-for="post in posts.slice(8, 12)"
            :key="post.id"
            :post="post"
          ></standard>
        </div>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'Izbor',
  computed: {
    posts() {
      return this.$store.state.mostread.posts
    },
  },
  mounted() {
    this.$store.dispatch('mostread/pullPosts')
    this.$nextTick(() => {
      this.$store.dispatch('ads/initAds', { route: this.$route })
    })
  },
}
</script>
