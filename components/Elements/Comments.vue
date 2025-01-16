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
        embed.login(
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzY5NjgyNjgsIm5iZiI6MTczNjk2ODI2OCwiZXhwIjoxNzM5NTYwMjY4LCJ1c2VyIjp7ImlkIjoiZGYwN2QzYmUtMjY1OC00ZDk4LTlmYmUtNDRhMTVjODM0N2Y2IiwiZW1haWwiOiJ2YW5qYWxpc2pha0BpY2xvdWQuY29tIiwidXNlcm5hbWUiOiJ2YW5qYSBsaXNqYWsgIiwidXJsIjoiaHR0cHM6Ly90ZWxlZ3JhbS5oci9tb2otcmFjdW4vIiwicm9sZSI6Ik1FTUJFUiJ9fQ.cj7zW4jnEziC5jLrEkeYfxojVyfKZZ4n74UG3cxcZhI'
        )
      })
    }
  },
}
</script>
