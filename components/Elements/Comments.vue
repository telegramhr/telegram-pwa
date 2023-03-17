<template>
  <div v-if="!post.comments_off" class="full fb-parent">
    <div id="coral_thread"></div>
  </div>
</template>

<script>
export default {
  name: 'Comments',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      embed: null,
    }
  },
  beforeDestroy() {
    if (this.embed) {
      this.embed = null
    }
  },
  mounted() {
    if (this.$route.params.category === 'preview' || this.post.comments_off)
      return
    if (this.post.social.path.includes('?p=')) return
    console.log('loadComments')
    /* global Coral */
    this.embed = Coral.createStreamEmbed({
      id: 'coral_thread',
      autoRender: true,
      rootURL: 'https://talk.telegram.hr',
      storyID: this.post.id,
      storyURL: this.post.social.path,
      events: (events) => {
        events.onAny((eventName, data) => {
          if (eventName === 'showAuthPopup' || eventName === 'loginPrompt') {
            this.$store.dispatch('user/login')
          }
          if (
            eventName === 'createCommentFocus' &&
            !this.$store.state.user.uid
          ) {
            this.$store.dispatch('user/login')
          }
        })
      },
    })
    if (this.$store.state.user.uid) {
      console.log('loadComments: user logged in')
      this.$store.dispatch('user/getCoralToken').then((token) => {
        console.log('loadComments: token', token)
        this.embed.login(token)
      })
    }
  },
}
</script>
