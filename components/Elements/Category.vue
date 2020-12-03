<template>
  <section
    v-if="posts.length"
    class="fourth flex-responsive column-horizontal-pad flex mobile-side-pad"
  >
    <h2 class="full flex section-title" v-html="category"></h2>
    <featured :post="posts[0]"></featured>
    <standard
      v-for="i in [1, 2, 3]"
      :key="posts[i].id"
      :post="posts[i]"
    ></standard>
  </section>
</template>

<script>
export default {
  name: 'Category',
  props: {
    slug: {
      type: String,
      required: true,
      default: '',
    },
  },
  data() {
    return {
      posts: [],
      category: '',
    }
  },
  mounted() {
    this.$axios.get('category/' + this.slug).then((res) => {
      this.posts = res.data.posts
      this.category = res.data.category
    })
  },
}
</script>
