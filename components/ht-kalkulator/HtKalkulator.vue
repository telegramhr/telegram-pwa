<template>
  <div
    v-if="visible"
    class="ht-kalkulator-overlay"
    @keydown.esc="handleEsc"
    @keydown.tab="handleTab"
  >
    <div
      ref="wrapper"
      class="ht-kalkulator"
      role="dialog"
      aria-modal="true"
      aria-label="HT AI Kalkulator"
      tabindex="-1"
      @keydown.enter="handleEnter"
    >
      <button
        class="ht-kalkulator-close"
        aria-label="Zatvori"
        @click="handleDismiss"
      >
        &times;
      </button>

      <ht-kalkulator-intro
        v-if="state === 'intro'"
        @start="handleStart"
        @dismiss="handleDismiss"
      />

      <ht-kalkulator-question
        v-if="state === 'questions'"
        :key="currentQuestion.id"
        :question="currentQuestion"
        :question-index="answers.length + 1"
        :total-questions="questions.length"
        @answer="handleAnswer"
      />

      <ht-kalkulator-result
        v-if="state === 'result'"
        :results="results"
        @restart="handleRestart"
      />
    </div>
  </div>
</template>

<script>
import {
  QUESTIONS,
  STORAGE_KEY,
  calculateResults,
} from '~/store/ht-kalkulator/data'

const FOCUSABLE =
  'button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])'

export default {
  name: 'HtKalkulator',
  data() {
    return {
      state: 'intro',
      visible: true,
      questions: QUESTIONS,
      answers: [],
      results: null,
    }
  },
  computed: {
    currentQuestion() {
      return this.questions[this.answers.length] || this.questions[0]
    },
  },
  mounted() {
    const stored = this.getStoredState()
    if (stored === 'dismissed' || stored === 'completed') {
      this.visible = false
      return
    }
    this.$nextTick(() => {
      if (this.$refs.wrapper) {
        this.$refs.wrapper.focus()
      }
    })
  },
  methods: {
    handleStart() {
      this.state = 'questions'
      this.answers = []
      this.results = null
      this.$gtm.push({ event: 'ht-kalkulator-start' })
    },

    handleAnswer(answer) {
      this.answers.push(answer)

      this.$gtm.push({
        event: 'ht-kalkulator-question',
        kalkulator_question: answer.questionId,
        kalkulator_answer_minutes: answer.minutes,
      })

      if (this.answers.length === this.questions.length) {
        this.showResults()
      }
    },

    showResults() {
      this.results = calculateResults(this.answers)
      this.state = 'result'

      this.setStoredState('completed')

      this.$gtm.push({
        event: 'ht-kalkulator-complete',
        kalkulator_total_hours_weekly: this.results.totalHoursWeekly,
        kalkulator_total_hours_monthly: this.results.totalHoursMonthly,
        kalkulator_savings_hours_monthly: this.results.savedHoursMonthly,
      })
    },

    handleDismiss() {
      this.setStoredState('dismissed')
      this.visible = false
    },

    handleRestart() {
      this.state = 'intro'
      this.answers = []
      this.results = null
      this.removeStoredState()

      this.$nextTick(() => {
        if (this.$refs.wrapper) {
          this.$refs.wrapper.focus()
        }
      })
    },

    handleEsc() {
      if (this.state === 'questions') {
        this.handleRestart()
      } else {
        this.handleDismiss()
      }
    },

    handleEnter() {
      if (this.state === 'intro') {
        this.handleStart()
      }
    },

    handleTab(e) {
      const wrapper = this.$refs.wrapper
      if (!wrapper) return
      const focusable = [...wrapper.querySelectorAll(FOCUSABLE)]
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    },

    getStoredState() {
      try {
        return localStorage.getItem(STORAGE_KEY)
      } catch {
        return null
      }
    },

    setStoredState(value) {
      try {
        localStorage.setItem(STORAGE_KEY, value)
      } catch {
        // localStorage unavailable
      }
    },

    removeStoredState() {
      try {
        localStorage.removeItem(STORAGE_KEY)
      } catch {
        // localStorage unavailable
      }
    },
  },
}
</script>

<style scoped>
.ht-kalkulator-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  pointer-events: none;
}

.ht-kalkulator {
  width: 100%;
  max-width: 640px;
  background: #fff;
  pointer-events: auto;
  border-radius: 16px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.15);
  position: relative;
}

.ht-kalkulator:focus {
  outline: none;
}

.ht-kalkulator-close {
  position: absolute;
  top: 12px;
  right: 16px;
  z-index: 10;
  background: none;
  border: none;
  font-size: 28px;
  line-height: 1;
  color: #999;
  cursor: pointer;
  padding: 4px 8px;
  transition: color 0.2s;
}

.ht-kalkulator-close:hover {
  color: #333;
}

.ht-kalkulator-close:focus-visible {
  outline: 3px solid #e20074;
  outline-offset: 2px;
}

@media (max-width: 767px) {
  .ht-kalkulator-overlay {
    padding: 10px;
  }

  .ht-kalkulator {
    border-radius: 12px;
  }
}
</style>
