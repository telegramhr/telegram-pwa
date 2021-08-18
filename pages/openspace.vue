<template>
  <div class="main-container flex openspace">
    <div class="full flex tg-red">
      <theader></theader>
    </div>
    <div class="full relative">
      <div v-if="posts.length" class="container flex relative stretch">
        <div
          class="full center-text column-horizontal-pad column-top-pad mobile-side-pad"
        >
          <h1 class="full openspace-header">Open Space</h1>
        </div>
        <div
          class="full flex column-horizontal-pad column-top-pad mobile-side-pad"
        >
          <div class="full flex os-article1 column-bottom-border">
            <featured :key="posts[0].id" :post="posts[0]"></featured>
          </div>
        </div>
        <div class="full flex mobile-side-pad stretch">
          <div class="third flex-responsive column-vertical-pad stretch">
            <div class="full flex column-horizontal-pad">
              <featured :key="posts[1].id" :post="posts[1]"></featured>
            </div>
          </div>
          <div class="third flex-responsive column-vertical-pad stretch">
            <div
              class="full flex column-horizontal-pad column-left-border column-right-border"
            >
              <featured :key="posts[2].id" :post="posts[2]"></featured>
            </div>
          </div>
          <div class="third flex-responsive column-vertical-pad stretch">
            <div class="full flex column-horizontal-pad">
              <featured :key="posts[3].id" :post="posts[3]"></featured>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="block-title news-block-title full mobile-side-pad hide">
      <div class="full block-title-pattern relative"></div>
      <div class="container flex relative">
        <h1 class="column-left-pad full">Još priča</h1>
      </div>
    </div>
    <div class="full flex">
      <div class="container relative flex mobile-side-pad column-full-pad">
        <h2 class="full section-title center">Još motivirajućih priča</h2>
      </div>
    </div>
    <div class="full relative">
      <div class="container flex relative block-2 standard-block stretch">
        <section
          class="fourth flex flex-responsive column-horizontal-pad mobile-side-pad"
        ></section>
        <div class="three-fourths flex-responsive flex">
          <section
            class="two-thirds flex-responsive flex mobile-side-pad column-horizontal-pad column-right-border column-left-border"
          >
            <div class="full flex split-articles">
              <medium :key="posts[4].id" :post="posts[4]"></medium>
              <medium :key="posts[5].id" :post="posts[5]"></medium>
              <medium :key="posts[6].id" :post="posts[6]"></medium>
              <medium :key="posts[7].id" :post="posts[7]"></medium>
              <medium :key="posts[8].id" :post="posts[8]"></medium>
            </div>
          </section>
          <section
            class="third flex-responsive flex mobile-side-pad column-horizontal-pad"
          >
            <standard :key="posts[9].id" :post="posts[9]"></standard>
            <standard :key="posts[10].id" :post="posts[10]"></standard>
            <standard :key="posts[11].id" :post="posts[11]"></standard>
          </section>
        </div>
      </div>
    </div>
    <client-only>
      <big-featured></big-featured>
    </client-only>
    <div class="full flex">
      <div class="container flex relative native-block stretch mobile-side-pad">
        <div class="fourth flex-responsive column-full-pad">
          <standard :key="posts[12].id" :post="posts[12]"></standard>
        </div>
        <div class="fourth flex-responsive column-full-pad">
          <standard :key="posts[13].id" :post="posts[13]"></standard>
        </div>
        <div class="fourth flex-responsive column-full-pad">
          <standard :key="posts[14].id" :post="posts[14]"></standard>
        </div>
        <div class="fourth flex-responsive column-full-pad">
          <standard :key="posts[2].id" :post="posts[2]"></standard>
        </div>
        <div class="fourth flex-responsive column-full-pad">
          <standard :key="posts[3].id" :post="posts[3]"></standard>
        </div>
        <div class="fourth flex-responsive column-full-pad">
          <standard :key="posts[4].id" :post="posts[4]"></standard>
        </div>
        <div class="fourth flex-responsive column-full-pad">
          <standard :key="posts[5].id" :post="posts[5]"></standard>
        </div>
        <div class="fourth flex-responsive column-full-pad">
          <standard :key="posts[6].id" :post="posts[6]"></standard>
        </div>
        <div class="full center subtle-btn-parent relative clickable">
          <div class="subtle-btn animate">Vidi više</div>
          <div class="subtle-btn-line"></div>
        </div>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  async fetch() {
    await this.$axios
      .get('/api/author/ivan-luzar')
      .then((res) => {
        this.posts = res.data.posts
      })
      .catch(() => {
        // set status code on server and
        if (process.server) {
          this.$telegram.context.res.statusCode = 404
        }
        // use throw new Error()
        throw new Error('User not found')
      })
  },
  data() {
    return {
      loading: false,
      posts: [],
      page: 2,
      hasMore: true,
    }
  },
  head() {
    return {
      title: 'Open Space',
    }
  },
}
</script>
