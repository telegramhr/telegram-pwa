<template>
  <div class="sudoku grid" @focusout="handleBlur">
    <cell v-for="cell in sudoku" :key="cell.id" v-bind="cell" />
  </div>
</template>

<script>
export default {
  name: 'Sudoku',
  computed: {
    sudoku() {
      return this.$store.state.sudoku.sudoku.board
    },
  },
  methods: {
    handleBlur() {
      setTimeout(() => {
        if (!this.$el.contains(document.activeElement)) {
          // this.$store.clearHighlights()
        }
      })
    },
  },
}
</script>

<style scoped>
@import '@/assets/css/sudoku.css';
</style>
