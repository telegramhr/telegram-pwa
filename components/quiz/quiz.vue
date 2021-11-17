<template>
  <div>
    <VueSlickCarousel
      v-if="data.questions.length"
      ref="carousel"
      :arrows="false"
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
        <h2>{{ data.results[0].title }}</h2>
        <p>{{ data.results[0].description }}</p>
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
              score_min: 0,
              score_max: 20,
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
  methods: {
    getAnswer(question, val) {
      this.scores[question] = val
      // advance slide
      this.$refs.carousel.next()
    },
  },
}
</script>
