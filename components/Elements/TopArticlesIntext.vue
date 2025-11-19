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
        :algorithm-type="algorithmType"
      ></mini-box>
    </div>
  </div>
</template>
<style scoped>
.containerArticles {
  padding-top: 16px;
  padding-bottom: 20px;
  border-top: 2px solid #e6dbd1;
  border-bottom: 2px solid #e6dbd1;
  margin-top: 28px;
  margin-bottom: 28px;
}
.titleArticles {
  margin-top: 0;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 13px;
  line-height: 100%;
  letter-spacing: 5%;
  text-align: center;
  margin-bottom: 24px;
  font-family: 'barlow', sans-serif;
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
    padding-top: 20px;
    padding-bottom: 22px;
    margin-top: 48px;
    margin-bottom: 48px;
  }
  .titleArticles {
    margin-bottom: 20px;
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
