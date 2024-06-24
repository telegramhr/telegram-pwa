<template>
  <div class="native-quiz">
    <VueSlickCarousel
      v-if="data.questions.length"
      ref="carousel"
      :arrows="false"
      :draggable="false"
      :adaptive-height="true"
      :infinite="false"
      style="display: block; width: 100%"
      @beforeChange="beforeChange"
    >
      <div v-for="question in data.questions" :key="question.id">
        <component
          :is="question.type"
          :data="question"
          :post="post"
          @answer="getAnswer"
        ></component>
      </div>
      <div v-if="result">
        <h2>{{ result.title }}</h2>
        <!-- eslint-disable vue/no-v-html -->
        <p v-html="parsedResultsDescription"></p>
        <!-- eslint-enable vue/no-v-html -->
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
export default {
  name: 'Quiz',
  props: {
    data: {
      type: Object,
      required: false,
      default() {
        return {
          questions: [],
          results: [],
          scoring: {},
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
      scores: [],
      answers: {},
      submitted: false,
    }
  },
  computed: {
    totalScore() {
      return this.scores.reduce((score, answer, question) => {
        return score + parseInt(this.data.scoring[question][answer])
      }, 0)
    },
    result() {
      return this.data.results.filter((result) => {
        if (
          this.totalScore >= parseInt(result.score_from) &&
          this.totalScore <= parseInt(result.score_to)
        ) {
          return true
        }
      })[0]
    },
    parsedResultsDescription() {
      if (this.result) {
        return this.result.description.replace('{answered}', this.totalScore)
      }
      return ''
    },
  },
  methods: {
    beforeChange(oldSlide, newSlide) {
      let noSlides = this.data.questions.length
      if (this.result) {
        noSlides++
      }
      noSlides--
      if (newSlide === noSlides && !this.submitted) {
        this.submit()
      }
    },
    getAnswer(question, val) {
      const q = parseInt(question) - 1
      if (this.data.questions[q].type === 'QuizSingleAnswer') {
        this.$set(this.scores, question, val)
      }
      if (this.data.questions[q].type === 'QuizPersonalDetails') {
        this.$set(this.answers, 'ime', val.name)
        this.$set(this.answers, 'email', val.email)
      } else if (this.data.questions[q].answers.length) {
        this.$set(
          this.answers,
          'q' + q,
          this.data.questions[q].answers[parseInt(val) - 1].text
        )
      } else {
        this.$set(this.answers, 'q' + q, val)
      }
      // advance slide
      this.$refs.carousel.next()
    },
    submit() {
      if (this.data.script && !this.submitted) {
        this.submitted = true
        window.fbq('trackCustom', 'kviz', { content_ids: [this.post] })
        this.$axios
          .get('/gscripts/' + this.data.script, {
            params: this.answers,
          })
          .catch(() => {
            this.$refs.carousel.next()
          })
      }
    },
  },
}
</script>
