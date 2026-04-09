<template>
  <div v-if="active" id="studenac-widget" class="full">
    <div
      class="container flex relative block-related cantha-related standard-block stretch have-background"
    >
      <div class="full column-horizontal-pad column-top-pad mobile-side-pad">
        <div class="full cantha-separator"></div>
      </div>
      <div class="full flex column-horizontal-pad">
        <div
          class="noththree full center-text column-vertical-pad subsection-title"
        >
          Jedan roditelj, stotinu uloga
        </div>
      </div>
      <div class="full center-text studenac-sponsor">
        Donosi <span>Narančasta ribica</span>
      </div>
      <div class="full flex mobile-side-pad">
        <div
          v-for="(item, index) in items.slice(0, 4)"
          :key="index"
          class="fourth flex-responsive flex"
        >
          <div class="full flex column-horizontal-pad">
            <a
              class="full flex article-standard article relative"
              :href="item.link"
              target="_blank"
              @click.prevent="trackClick(item.link)"
            >
              <img :src="item.image" :alt="item.title" loading="lazy" />
              <div class="full flex article-pad">
                <div class="full nothtwo">{{ item.title }}</div>
                <div class="nothfour full">{{ item.description }}</div>
                <div
                  v-if="
                    (item.authors && item.authors.length) ||
                    item.recommendations > 0
                  "
                  class="nothfive full flex article-meta"
                >
                  <span
                    v-if="item.authors && item.authors.length"
                    class="meta-author"
                    ><i>Piše</i> {{ item.authors[0].name }}</span
                  >
                  <span v-if="item.recommendations > 0" class="meta-preporuke"
                    >{{ item.recommendations }} preporuka</span
                  >
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudenacWidget',
  data() {
    return {
      active: false,
      items: [],
    }
  },
  async mounted() {
    await this.$store.dispatch('homepageWidget/fetch')
    const { variant, items } = this.$store.state.homepageWidget
    if (variant !== 'studenac') {
      this.active = false
      return
    }
    this.items = this.shuffleArray(items)
    this.active = this.items.length > 0
    if (!this.active) return
    this.$gtm.push({
      event: 'webshop-widget',
      'webshop-category': 'studenac-widget',
      'webshop-action': 'view',
      'webshop-label': 'impression',
    })
  },
  methods: {
    trackClick(link) {
      this.$gtm.push({
        event: 'webshop-widget',
        'webshop-category': 'studenac-widget',
        'webshop-action': 'click',
        'webshop-label': 'click',
        'webshop-value': link,
      })
      window.open(link, '_blank')
    },
    shuffleArray(array) {
      const shuffled = [...array]
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
      }
      return shuffled
    },
  },
}
</script>

<style scoped>
.studenac-sponsor {
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  color: #666;
  margin-top: -16px;
  margin-bottom: 28px;
}
#studenac-widget .nothtwo,
#studenac-widget .nothfour {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  overflow: hidden;
}
.dark-mode .studenac-sponsor {
  color: #aaa;
}
#studenac-widget {
  margin-top: 60px;
}
@media screen and (max-width: 767px) {
  #studenac-widget {
    margin-top: 40px;
  }
}
</style>
