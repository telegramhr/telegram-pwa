<template>
  <div class="ht-kalkulator-question">
    <div class="ht-kalkulator-question-header">
      <ht-kalkulator-progress
        :current="questionIndex"
        :total="totalQuestions"
      />
    </div>
    <h3 class="ht-kalkulator-question-title">{{ question.title }}</h3>
    <div
      class="ht-kalkulator-question-options"
      role="radiogroup"
      :aria-label="question.title"
    >
      <button
        v-for="(option, idx) in question.options"
        :key="idx"
        class="ht-kalkulator-option"
        :class="{ 'ht-kalkulator-option-selected': selectedIndex === idx }"
        role="radio"
        :aria-checked="selectedIndex === idx ? 'true' : 'false'"
        @click="selectOption(idx)"
      >
        <span class="ht-kalkulator-option-text">{{ option.label }}</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HtKalkulatorQuestion',
  props: {
    question: {
      type: Object,
      required: true,
    },
    questionIndex: {
      type: Number,
      required: true,
    },
    totalQuestions: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      selectedIndex: -1,
    }
  },
  methods: {
    selectOption(idx) {
      this.selectedIndex = idx
      const option = this.question.options[idx]
      this.$emit('answer', {
        questionId: this.question.id,
        minutes: option.minutes,
        label: option.label,
      })
    },
  },
}
</script>

<style scoped>
.ht-kalkulator-question {
  padding: 32px 24px;
}

.ht-kalkulator-question-header {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 24px;
}

.ht-kalkulator-question-title {
  font-family: 'Lora', serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
  color: var(--tg-primary-text-color, #111);
  margin-bottom: 24px;
}

.ht-kalkulator-question-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.ht-kalkulator-option {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 14px 18px;
  background: #fff;
  border: 2px solid #e8e8e8;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
  font-family: 'Barlow', sans-serif;
  font-size: 15px;
  line-height: 1.4;
  color: var(--tg-primary-text-color, #111);
}

.ht-kalkulator-option:hover {
  border-color: #ae3737;
  background: #f9eeee;
}

.ht-kalkulator-option:focus-visible {
  outline: 3px solid #ae3737;
  outline-offset: 2px;
}

.ht-kalkulator-option-selected {
  border-color: #ae3737;
  background: #ae3737;
  color: #fff;
}

.ht-kalkulator-option-selected:hover {
  background: #922e2e;
  border-color: #922e2e;
}

@media (max-width: 768px) {
  .ht-kalkulator-question {
    padding: 24px 16px;
  }

  .ht-kalkulator-question-title {
    font-size: 18px;
  }

  .ht-kalkulator-option {
    padding: 12px 14px;
    font-size: 14px;
  }
}
</style>
