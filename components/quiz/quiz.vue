<template>
  <div class="native-quiz">
    <VueSlickCarousel
      v-if="data.questions.length"
      ref="carousel"
      :arrows="false"
      :draggable="false"
      :adaptive-height="true"
      style="display: block; width: 100%"
    >
      <template v-for="question in data.questions">
        <component
          :is="question.type"
          :key="question.id"
          :data="question"
          @answer="getAnswer"
        ></component>
      </template>
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
          questions: [
            {
              id: 0,
              type: 'QuizSingleAnswer',
              question: 'Koje je pitanje?',
              answers: [
                {
                  id: 0,
                  text: 'Odgovor 1',
                },
                {
                  id: 1,
                  text: 'Odgovor 2',
                },
              ],
            },
          ],
          results: [
            {
              score_from: 0,
              score_to: 20,
              title: 'Neko rješenje',
              description: 'Opis ',
            },
          ],
          scoring: {
            0: {
              0: 0,
              1: 2,
            },
          },
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
      this.$set(this.scores, question, val)
      // advance slide
      this.$refs.carousel.next()
    },
  },
}
</script>
