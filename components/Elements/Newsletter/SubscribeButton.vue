<template>
  <client-only>
    <div v-if="hasSub()" class="btn animate btn-unsub" @click="unsub()">
      Odjavi me
      <font-awesome-icon :icon="['fal', 'minus-square']"></font-awesome-icon>
    </div>
    <app-link
      v-else-if="!$store.state.user.active_sub && !free"
      to="/pretplata"
      class="btn animate"
    >
      Dostupno samo za pretplatnike
    </app-link>
    <div v-else class="btn animate" @click="sub(free)">
      Prijavi me
      <font-awesome-icon :icon="['fal', 'plus-square']"></font-awesome-icon>
    </div>
  </client-only>
</template>

<script>
export default {
  name: 'SubscribeButton',
  props: {
    mlid: {
      type: Number,
      required: true,
      default() {
        return 1707
      },
    },
    free: {
      type: Boolean,
      required: false,
      default() {
        return true
      },
    },
  },
  methods: {
    hasSub() {
      return this.$store.state.newsletters.lists[this.mlid]
    },
    sub() {
      this.$store.dispatch('newsletters/subscribe', {
        free: this.free,
        mlid: this.mlid,
      })
    },
    unsub() {
      this.$store.dispatch('newsletters/unsubscribe', {
        email: this.$route.query.email,
        mlid: this.mlid,
      })
    },
  },
}
</script>
