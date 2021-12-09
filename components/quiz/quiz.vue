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
    >
      <div v-for="question in data.questions" :key="question.id">
        <component
          :is="question.type"
          :data="question"
          @answer="getAnswer"
        ></component>
      </div>
      <div>
        <h2>{{ result.title }}</h2>
        <p v-html="result.description"></p>
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
  },
  data() {
    return {
      scores: [],
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
  },
  methods: {
    getAnswer(question, val) {
      if (this.data.questions[question].type === 'QuizSingleAnswer') {
        this.$set(this.scores, question, val)
      }
      if (this.data.questions[question].type === 'QuizPersonalDetails') {
        // submit
      }
      // advance slide
      this.$refs.carousel.next()
    },
  },
}
</script>
