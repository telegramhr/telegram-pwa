<template>
  <div class="containerArticles full">
    <div class="container">
      <h2 class="titleArticles">Možda ste propustili</h2>
      <div class="gridArticles">
        <mini-box-bottom
          v-for="(post, index) in posts"
          :key="post.id"
          :post="post"
          :widget-position="index + 1"
          :widget-type="'bottomV1'"
          :utm="{ campaign: 'TGbottom' }"
          :recirculation="'TGBottom' + algorithmType"
        ></mini-box-bottom>
      </div>
    </div>
  </div>
</template>
<style scoped>
.containerArticles {
  background-color: #eee3d8;
  padding: 24px 20px;
}
.titleArticles {
  font-weight: 400;
  font-size: 18px;
  line-height: 19px;
  text-align: center;
  font-family: 'barlow', sans-serif;
  margin-bottom: 24px;
}
.gridArticles {
  display: flex;
  flex-direction: column;
  max-width: 710px;
  margin: 0 auto;
}
.dark-mode .containerArticles {
  background-color: #373737;
}
.contrast-mode .containerArticles {
  background-color: #f5f5f5;
}
@media screen and (min-width: 768px) {
  .containerArticles {
    padding: 40px 0px;
  }
  .titleArticles {
    margin-bottom: 40px;
    font-size: 24px;
  }
}
</style>
<script>
export default {
  name: 'TopArticlesBottom',
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
    algorithmType: {
      type: String,
      default: 'v1',
    },
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>
