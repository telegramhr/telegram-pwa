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
        :value="answer.text"
      />
      <div
        class="newbtn clickable"
        :style="{
          backgroundColor: answered === answer.text ? '#ae3737' : '#888888',
        }"
      >
        {{ answer.text | parseCat }}
        <i v-if="answered && stats[order][answer.text]"
          >({{ Math.round((stats[order][answer.text] * 100) / total) }}%)</i
        >
      </div>
    </label>
    <label
      v-if="answered"
      class="column-right-pad mobile-right-pad"
      style="justify-content: space-between"
      @click="$emit('next')"
    >
      <div
        class="newbtn clickable"
        :style="{
          backgroundColor: '#ae3737',
        }"
      >
        Sljedeće pitanje
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'QuizPredictAnswer',
  props: {
    order: {
      type: Number,
      required: true,
    },
    stats: {
      type: Array,
      required: false,
      default() {
        return []
      },
    },
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
          stats: [],
        }
      },
    },
    post: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      answered: 0,
      done: false,
      showNext: false,
    }
  },
  computed: {
    total() {
      return Object.values(this.stats[this.order]).reduce((a, b) => a + b, 0)
    },
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
            q: this.data.id,
          },
        })
        .then((res) => {
          // show result
          this.done = true
          this.showNext = true
        })

      // show hidden-content
      if (document.getElementById('hidden-content')) {
        document.getElementById('hidden-content').style.display = 'block'
      }
    },
  },
}
</script>
