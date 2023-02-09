<template>
  <div>
    <h2>{{ data.question }}</h2>
    <label
      v-for="answer in data.answers"
      :key="answer.id"
      class="flex"
      style="justify-content: space-between"
    >
      <input
        v-model="answered"
        type="radio"
        :name="'answer-' + data.id + '-' + answer.id"
        :value="answer.id"
      />
      <span
        :style="{
          backgroundColor: sums[answer.id]
            ? answered === answer.id
              ? '#ae3737'
              : '#c8c8c8'
            : '',
          width: sums[answer.id]
            ? Math.round((sums[answer.id] * 100) / total) + '%'
            : '',
        }"
      >
        {{ answer.text | parseCat }}
      </span>
      <i v-if="sums[answer.id]"
        >{{ Math.round((sums[answer.id] * 100) / total) }} %</i
      >
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
