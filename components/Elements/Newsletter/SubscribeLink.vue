<template>
  <a
    v-if="show"
    class="full relative article-head-newsletter"
    @click.prevent="sub"
  >
    <template v-if="show === 1">
      <span>Za još članaka ovog autora pretplatite se </span>
      <b>newsletter autora.</b></template
    >
    <template v-if="show === 2">
      <span>Za još važnih vijesti, istraga i analiza pretplatite se na </span>
      <b>Dnevni Telegram</b><span> newsletter.</span>
    </template>
  </a>
</template>

<script>
export default {
  name: 'SubscribeLink',
  props: {
    author: {
      type: Object,
      required: false,
      default() {
        return {
          url: '',
          name: '',
          image: '',
          newsletter_image: '',
          newsletter_list: 0,
          newsletter_description: '',
        }
      },
    },
  },
  computed: {
    show() {
      if (!this.author.newsletter_list) {
        // if author has no newsletter show daily
        if (this.$store.state.newsletters.lists[2128]) {
          // but only if user not already on the list
          return 0
        }
        return 2
      } else {
        // but if author has newsletter, show it if user has no subscription
        if (this.$store.state.newsletters.lists[this.author.newsletter_list]) {
          // if already subscribed check for daily
          if (this.$store.state.newsletters.lists[2128]) {
            // but only if user not already on the daily list
            return 0
          }
        }
        return 1
      }
    },
  },
  methods: {
    sub() {
      this.$store.dispatch('newsletters/subscribe', {
        mlid: this.show === 1 ? this.author.newsletter_list : 2128,
      })
    },
  },
}
</script>
