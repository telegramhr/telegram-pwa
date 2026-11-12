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
          v-if="data.show_correct && revealed && answer.correct"
          :icon="['fas', 'check']"
          style="color: lightgreen; margin-left: 20px"
        ></font-awesome-icon>
        <font-awesome-icon
          v-if="
            data.show_correct &&
            revealed &&
            answer.id === answered &&
            !answer.correct
          "
          :icon="['fas', 'times']"
          style="color: lightcoral; margin-left: 20px"
        ></font-awesome-icon
      ></span>
    </label>
    <div
      v-if="revealed"
      class="quiz-explanation"
      :class="{ correct: isCorrect }"
      v-html="data.explanation"
    ></div>
    <button class="classic-btn" @click="next">
      {{ needsConfirm && !revealed ? 'Potvrdi' : 'Sljedeće' }}
    </button>
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
  computed: {
    // correct answers and explanations are only revealed after Potvrdi
    needsConfirm() {
      return Boolean(this.data.explanation || this.data.show_correct)
    },
    isCorrect() {
      const picked = this.data.answers.find(
        (answer) => answer.id === this.answered
      )
      return Boolean(picked && picked.correct)
    },
  },
  methods: {
    next() {
      if (this.data.required && !this.answered) {
        return
      }
      // the first click locks the answer and reveals the result;
      // the second click moves on
      if (this.needsConfirm && !this.revealed) {
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
.quiz-explanation.correct {
  border-left-color: #2e8b57;
}
</style>
