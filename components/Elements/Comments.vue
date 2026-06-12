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

    const initEmbed = (initialToken) => {
      /* global Coral */
      Coral.createStreamEmbed({
        id: 'coral_thread',
        autoRender: true,
        rootURL: 'https://talk.telegram.hr',
        storyID: this.post.id,
        storyURL: this.post.social.path,
        // Initial token comes from the in-memory cache (fast, no extra load).
        accessToken: initialToken || undefined,
        // Coral calls this whenever it needs a (new) token — including when the
        // current one is rejected with 401 TOKEN_INVALID. We force a fresh token
        // from pretplate and hand it back via nextStep(), and Coral retries the
        // request. This self-heals any stale/invalid cached token without a
        // manual localStorage clear. force:true so we never echo the bad one.
        refreshAccessToken: (nextStep) => {
          if (!this.$store.state.user.uid) {
            nextStep()
            return
          }
          this.$store
            .dispatch('user/getCoralToken', { force: true })
            .then((token) => nextStep(token))
            .catch(() => nextStep())
        },
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
    }

    if (this.$store.state.user.uid) {
      this.$store
        .dispatch('user/getCoralToken')
        .then((token) => initEmbed(token))
        .catch(() => initEmbed())
    } else {
      initEmbed()
    }
  },
}
</script>
