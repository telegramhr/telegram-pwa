<template>
  <div class="containerArticles">
    <h2 class="titleArticles">Što biste sljedeće trebali pročitati</h2>
    <div class="gridArticles">
      <mini-box
        v-for="(post, index) in posts"
        :key="post.id"
        :post="post"
        :widgetPosition="index + 1"
        :widget-type="'inArticle'"
        :utm="{ campaign: 'TGintext' }"
        :recirculation="'TGIntext' + algorithmType"
      ></mini-box>
    </div>
  </div>
</template>
<style scoped>
.containerArticles {
  padding-top: 16px;
  padding-bottom: 28px;
  border-top: 2px solid #e6dbd1;
  border-bottom: 2px solid #e6dbd1;
  margin-top: 28px;
  margin-bottom: 28px;
}
.titleArticles {
  font-weight: 400;
  font-size: 24px;
  line-height: 26px;
  letter-spacing: 0%;
  text-align: center;
  margin-bottom: 28px;
  font-family: 'barlow', sans-serif;
  margin-top: 0px;
}
.gridArticles {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
@media screen and (min-width: 768px) {
  .gridArticles {
    flex-direction: row;
    gap: 36px;
  }
  .containerArticles {
    padding-top: 28px;
    padding-bottom: 36px;
    margin-top: 48px;
    margin-bottom: 48px;
  }
  .titleArticles {
    margin-bottom: 32px;
  }
}
</style>
<script>
export default {
  name: 'TopArticles',
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
