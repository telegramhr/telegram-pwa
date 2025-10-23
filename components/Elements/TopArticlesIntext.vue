<template>
  <div class="containerArticles">
    <div class="titleArticles">Upravo se čita</div>
    <div class="gridArticles">
      <mini-box
        v-for="(post, index) in posts"
        :key="post.id"
        :post="post"
        :widgetPosition="index + 1"
        :widget-type="'inArticle'"
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
  line-height: 19px;
  letter-spacing: 0%;
  text-align: center;
  margin-bottom: 28px;
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
    portal: {
      type: String,
      default: 'telegram',
    },
    position: {
      type: String,
      default: 'inArticle',
    },
    id: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      posts: [],
    }
  },
  mounted() {
    this.getPosts()
  },
  methods: {
    getPosts() {
      this.$axios
        .get('/api/top-articles-ctr/' + this.portal + '/' + this.id)
        .then((res) => {
          if (this.position === 'inArticle') {
            this.posts = res.data.slice(0, 3)
          } else {
            this.posts = res.data.slice(3, 8)
          }
        })
        .catch(() => {
          // TODO: error logging
        })
    },
  },
}
</script>
