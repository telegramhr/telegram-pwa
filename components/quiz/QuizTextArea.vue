<template>
  <div>
    <h2 v-html="data.question"></h2>
    <textarea v-model="answer"></textarea>
    <button class="classic-btn" @click="next">Sljedeće</button>
  </div>
</template>

<script>
export default {
  name: 'QuizTextArea',
  props: {
    data: {
      type: Object,
      required: true,
      default() {
        return {
          id: 0,
          type: '',
          question: '',
          required: 0,
        }
      },
    },
  },
  data() {
    return {
      answer: '',
    }
  },
  methods: {
    next() {
      if (this.data.required && !this.answer) {
        return
      }
      this.$emit('answer', this.data.id, this.answer)
    },
  },
}
</script>
