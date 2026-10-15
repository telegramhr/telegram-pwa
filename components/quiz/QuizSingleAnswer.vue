<template>
  <div>
    <h2 v-html="data.question"></h2>
    <label v-for="answer in data.answers" :key="answer.id">
      <input
        v-model="answered"
        type="radio"
        :name="'answer-' + data.id + '-' + answer.id"
        :value="answer.id"
        :disabled="revealed"
      />
      <span>
        {{ answer.text | parseCat }}
        <font-awesome-icon
          v-if="data.show_correct && answer.correct && answered"
          :icon="['fas', 'check']"
          style="color: lightgreen; margin-left: 20px"
        ></font-awesome-icon>
        <font-awesome-icon
          v-if="data.show_correct && answer.id === answered && !answer.correct"
          :icon="['fas', 'times']"
          style="color: lightcoral; margin-left: 20px"
        ></font-awesome-icon
      ></span>
    </label>
    <div
      v-if="revealed"
      class="quiz-explanation"
      v-html="data.explanation"
    ></div>
    <button class="classic-btn" @click="next">Sljedeće</button>
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
          show_correct: false,
          question: '',
          required: 0,
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
      revealed: false,
    }
  },
  methods: {
    next() {
      if (this.data.required && !this.answered) {
        return
      }
      // with an explanation, the first click locks the answer and shows it;
      // the second click moves on
      if (this.data.explanation && !this.revealed) {
        this.revealed = true
        this.$emit('resize')
        return
      }
      this.$emit('answer', this.data.id, this.answered)
    },
  },
}
</script>

<style scoped>
.quiz-explanation {
  margin: 16px 0;
  padding: 4px 0 4px 16px;
  border-left: 3px solid #ae3737;
}
</style>
