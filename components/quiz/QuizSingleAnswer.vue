<template>
  <div>
    <h2>{{ data.question }}</h2>
    <label v-for="answer in data.answers" :key="answer.id">
      <input v-model="answered" type="radio" :value="answer.id" />
      <span>{{ answer.text }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'QuizSingleAnswer',
  props: {
    data: {
      type: Object,
      required: true,
      default() {
        return {
          id: 0,
          type: '',
          question: '',
          answers: [
            {
              id: 0,
              text: '',
            },
          ],
        }
      },
    },
  },
  data() {
    return {
      answered: 0,
    }
  },
  watch: {
    answered() {
      this.$emit('answer', this.data.id, this.answered)
    },
  },
}
</script>
