<template>
  <div v-show="has_breaking" class="full flex breaking-news">
    <div class="container column-full-pad">
      <b>Breaking:</b> Čovjek koji je ubio trudnu Ukrajinku pobjegao sa suda.
      Još ga traže
    </div>
  </div>
</template>

<script>
export default {
  name: 'Breaking',
  data() {
    return {
      has_breaking: false,
    }
  },
}
</script>
