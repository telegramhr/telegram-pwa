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
      <div v-for="(question, index) in data.questions" :key="question.id">
        <component
          :is="question.type"
          :data="question"
          :order="index"
          :post="post"
          :stats="data.stats"
          @answer="getAnswer"
          @next="nextSlide"
          @resize="adaptHeight"
        ></component>
      </div>
      <div>
        <template v-if="result">
          <h2>{{ result.title }}</h2>
          <!-- eslint-disable vue/no-v-html -->
          <p v-html="parsedResultsDescription"></p>
          <!-- eslint-enable vue/no-v-html -->
        </template>
        <template v-else-if="maxScore">
          <h2>Tvoj rezultat</h2>
          <p v-if="scoreMode === 'points'">
            Broj bodova: {{ totalScore }} / {{ maxScore }}
          </p>
          <p v-else>Točnih odgovora: {{ totalScore }} / {{ maxScore }}</p>
        </template>
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
    scoredQuestions() {
      return this.data.questions.filter(
        (question) => question.type === 'QuizSingleAnswer'
      )
    },
    // Quizzes with points ("Bodovi") on any answer sum the points; quizzes
    // without points count answers marked correct ("Točno").
    scoreMode() {
      const hasPoints = this.scoredQuestions.some((question) =>
        question.answers.some((answer) => parseInt(answer.score))
      )
      return hasPoints ? 'points' : 'correct'
    },
    totalScore() {
      return this.scores.reduce((score, answer, question) => {
        // unanswered optional question
        if (!answer) {
          return score
        }
        if (this.scoreMode === 'points') {
          return score + (parseInt(this.data.scoring[question][answer]) || 0)
        }
        const picked = this.data.questions[question - 1].answers[answer - 1]
        return score + (picked && picked.correct ? 1 : 0)
      }, 0)
    },
    maxScore() {
      if (this.scoreMode === 'points') {
        return this.scoredQuestions.reduce(
          (max, question) =>
            max +
            Math.max(0, ...question.answers.map((a) => parseInt(a.score) || 0)),
          0
        )
      }
      return this.scoredQuestions.filter((question) =>
        question.answers.some((answer) => answer.correct)
      ).length
    },
    result() {
      return (
        this.data.results.find(
          (result) =>
            this.totalScore >= parseInt(result.score_from) &&
            this.totalScore <= parseInt(result.score_to)
        ) ?? null
      )
    },
    parsedResultsDescription() {
      if (this.result) {
        return this.result.description.replace('{answered}', this.totalScore)
      }
      return ''
    },
  },
  methods: {
    adaptHeight() {
      // slick only re-measures on its own re-render, not when slide content grows
      this.$nextTick(() => {
        const slider =
          this.$refs.carousel && this.$refs.carousel.$refs.innerSlider
        if (slider) {
          slider.adaptHeight()
        }
      })
    },
    nextSlide() {
      this.$refs.carousel.next()
    },
    beforeChange(oldSlide, newSlide) {
      // the result slide always follows the last question
      const resultSlide = this.data.questions.length
      if (newSlide === resultSlide && !this.submitted) {
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
      this.nextSlide()
    },
    submit() {
      if (this.data.script && !this.submitted) {
        this.submitted = true
        // window.fbq('trackCustom', 'kviz', { content_ids: [this.post] })
        this.$gtm.push({
          event: 'quiz-success',
        })
        this.$axios
          .get('/gscripts/' + this.data.script, {
            params: this.answers,
          })
          .catch(() => {
            this.nextSlide()
          })
      } else {
        this.nextSlide()
      }
    },
  },
}
</script>
