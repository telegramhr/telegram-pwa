<template>
  <div class="full">
    <div class="block-title news-block-title full">
      <div class="full block-title-pattern relative"></div>
      <div class="container flex relative">
        <h1 class="column-left-pad mobile-side-pad full">Nastavite čitati</h1>
      </div>
    </div>
    <div class="container flex relative block-related standard-block stretch">
      <section
        class="fourth flex desktop-only column-horizontal-pad column-right-border"
      >
        <latest :portal="1" :desktop="false"></latest>
      </section>
      <div
        v-if="posts.length"
        class="three-fourths flex-responsive flex elevate-over-section mobile-side-pad"
      >
        <template v-for="(post, index) in posts">
          <div
            v-if="index === 0"
            :key="post.id"
            class="third flex-responsive flex"
          >
            <div class="full flex column-horizontal-pad">
              <featured :post="post"></featured>
            </div>
          </div>
          <div v-else :key="post.id" class="third flex-responsive flex">
            <div class="full flex column-horizontal-pad">
              <standard :post="post"></standard>
            </div>
          </div>
        </template>
      </div>
      <div
        class="full center subtle-btn-parent relative clickable"
        @click="loadMore"
      >
        <div class="subtle-btn animate">Vidi više</div>
        <div class="subtle-btn-line"></div>
        <div class="full center cool-loader hide">
          <div class="loader-square">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KeepReading',
  props: {
    category: {
      type: String,
      required: true,
      default: '',
    },
    p: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  data() {
    return {
      posts: [],
      page: 1,
    }
  },
  mounted() {
    this.loadMore()
  },
  methods: {
    loadMore() {
      if (this.category) {
        this.$axios
          .get('category/' + this.category + '/page/' + this.page)
          .then((res) => {
            const posts = res.data.posts.filter((item) => {
              return item.id !== this.p
            })
            this.posts = [...this.posts, ...posts]
            this.page++
          })
      }
    },
  },
}
</script>
