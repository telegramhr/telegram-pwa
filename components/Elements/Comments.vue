<template>
  <div class="full fb-parent">
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
  mounted() {
    if (this.$route.params.category === 'preview' || this.post.comments_off)
      return
    if (this.post.social.path && this.post.social.path.includes('?p=')) return
    /* global Coral */
    const embed = Coral.createStreamEmbed({
      id: 'coral_thread',
      autoRender: true,
      rootURL: 'https://talk.telegram.hr',
      storyID: this.post.id,
      storyURL: this.post.social.path,
      events: (events) => {
        events.onAny((eventName, data) => {
          if (
            eventName === 'showAuthPopup' ||
            (eventName === 'createCommentFocus' && !this.$store.state.user.uid)
          ) {
            this.$store.dispatch('user/login')
          }
        })
      },
    })
    if (this.$store.state.user.uid) {
      this.$store.dispatch('user/getCoralToken').then((token) => {
        embed.login(token)
      })
    }
  },
}
</script>
