<template>
  <div class="containerArticles full">
    <div class="container">
      <div class="titleArticles">Možda ste propustili</div>
      <div class="gridArticles">
        <mini-box-bottom
          v-for="(post, index) in posts"
          :key="post.id"
          :post="post"
          :widgetPosition="index + 1"
          :widget-type="'bottomV1'"
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
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>
