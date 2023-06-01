<template>
  <div>
    <h2 v-html="data.question"></h2>
    <label v-for="answer in data.answers" :key="answer.id">
      <input
        v-model="answered"
        type="radio"
        :name="'answer-' + data.id + '-' + answer.id"
        :value="answer.id"
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
    }
  },
  methods: {
    next() {
      if (this.data.required && !this.answered) {
        return
      }
      this.$emit('answer', this.data.id, this.answered)
    },
  },
}
</script>
