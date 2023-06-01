<template>
  <div class="flex column-bottom-pad mobile-bottom-pad">
    <h2 class="full" v-html="data.question"></h2>
    <label
      v-for="answer in data.answers"
      :key="answer.id"
      class="column-right-pad mobile-right-pad"
      style="justify-content: space-between"
    >
      <input
        v-model="answered"
        type="radio"
        :name="'answer-' + data.id + '-' + answer.id"
        :value="answer.id"
      />
      <div
        class="newbtn clickable"
        :style="{
          backgroundColor: sums[answer.id]
            ? answered === answer.id
              ? '#ae3737'
              : '#888888'
            : '#888888',
        }"
      >
        {{ answer.text | parseCat }}
        <i v-if="sums[answer.id]"
          >({{ Math.round((sums[answer.id] * 100) / total) }}%)</i
        >
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'QuizPredictAnswer',
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
    post: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      answered: 0,
      total: 0,
      sums: [],
      done: false,
    }
  },
  watch: {
    answered() {
      if (!this.done) {
        this.next()
      }
    },
  },
  methods: {
    next() {
      // make request to api
      this.$axios
        .post('/api/quiz/prediction', {
          data: {
            post: this.post,
            answer: this.answered,
          },
        })
        .then((res) => {
          // show result
          this.total = Object.values(res.data).reduce((a, b) => a + b, 0)
          this.sums = res.data
          this.done = true
        })

      // show hidden-content
      document.getElementById('hidden-content').style.display = 'block'
    },
  },
}
</script>
