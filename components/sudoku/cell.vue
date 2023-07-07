<template>
  <div
    ref="cell"
    class="cell"
    :class="[
      rowClass,
      columnClass,
      {
        userInput,
        isHighlighted,
        hasError,
        isSimilar,
      },
    ]"
    tabIndex="0"
  >
    <span>{{ value }}</span>
  </div>
</template>

<script>
export default {
  name: 'Cell',
  props: {
    id: String,
    column: Number,
    row: Number,
    block: Number,
    expectedValue: String,
    value: String,
    userInput: Boolean,
    isHighlighted: Boolean,
    isSimilar: Boolean,
    hasError: Boolean,
    hasFocus: Boolean,
  },
  data() {
    return {
      rowClass: `row-${this.row}`,
      columnClass: `col-${this.column}`,
    }
  },
  updated() {
    if (this.hasFocus) {
      this.$refs.cell.focus()
    }
  },
  methods: {
    moveFocus(distance) {
      console.log('moving focus ' + distance)

      const index = this.$store.grid.findIndex(({ id }) => id === this.id)

      console.log(this.$store.grid[index + distance])
      this.$store.selectCell(this.$store.grid[index + distance])
    },
    handleClick() {
      this.$store.commit('sudoku/selectCell', this.props)
    },
    handleKeydown(e) {
      if (!this.userInput) return

      if (e.key === 'Delete' || e.key === 'Backspace') {
        this.$store.setCellValue(this, '')
      }
      if (/[1-9]/.test(e.key)) {
        this.$store.setCellValue(this, e.key)
        if (e.key !== this.expectedValue && e.key !== this.value) {
          this.$store.addMistake()
        }
      }
    },
  },
}
</script>
