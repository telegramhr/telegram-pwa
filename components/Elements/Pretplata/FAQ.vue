<script>
export default {
  name: 'FAQ',
  data() {
    return {
      openIndex: null,
      contentHeights: [],
      faqs: [
        {
          question: 'Kako funkcionira pretplata?',
          answer: 'Pretplata se aktivira odmah nakon kupnje i traje 30 dana.',
        },
        {
          question: 'Mogu li otkazati kada želim?',
          answer:
            'Da, otkazivanje je moguće u bilo kojem trenutku bez dodatnih naknada.',
        },
        {
          question: 'Jesu li članci dostupni offline?',
          answer: 'Premium korisnici mogu spremati članke za offline čitanje.',
        },
      ],
    }
  },
  methods: {
    toggle(index) {
      const el = this.$refs.answer[index]
      const wrapper = el.parentElement

      if (this.openIndex === index) {
        // ZATVARANJE
        const height = wrapper.scrollHeight
        wrapper.style.height = height + 'px'
        this.openIndex = null

        requestAnimationFrame(() => {
          wrapper.style.height = '0px'
        })

        return
      }

      // OTVARANJE
      this.openIndex = index

      this.$nextTick(() => {
        wrapper.style.height = wrapper.scrollHeight + 'px'

        // nakon animacije height: auto
        wrapper.addEventListener(
          'transitionend',
          () => {
            if (this.openIndex === index) wrapper.style.height = 'auto'
          },
          { once: true }
        )
      })
    },
  },
}
</script>

<template>
  <div class="main">
    <div class="wrapper">
      <span class="title">Vaša pitanja, naši odgovori</span>

      <div class="questions">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="question-item"
          @click="toggle(index)"
        >
          <div class="question-header">
            <span>{{ faq.question }}</span>
            <div class="icon" :class="{ open: openIndex === index }">
              <font-awesome-icon size="sm" :icon="['fa', 'chevron-up']" />
            </div>
          </div>

          <div class="answer-wrapper" :class="{ open: openIndex === index }">
            <div class="answer" ref="answer" v-html="faq.answer"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  width: 100%;
  overflow: hidden;
  background-color: #eee3d8;
  padding: 0px 16px;
}

.wrapper {
  max-width: 868px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px 0;
  text-align: center;
}

.wrapper .title {
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  line-height: 16px;
  color: black;
  font-weight: 500;
}

.questions {
  display: flex;
  flex-direction: column;
  gap: 0px;
}

.question-item {
  padding: 18px 0;
  text-align: left;
  border-bottom: 1px solid #747474;
  cursor: pointer;
}
.question-item:first-child {
  border-top: 1px solid #747474;
}

.question-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  line-height: 13px;
}

.icon {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
}

.icon.open {
  transform: rotate(180deg);
}

.answer-wrapper {
  height: 0;
  overflow: hidden;
  transition: height 0.35s ease;
}

.answer {
  margin-top: 12px;
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  line-height: 22px;
  color: #000;
}
@media (min-width: 1024px) {
  .wrapper {
    padding: 52px 0;
    gap: 24px;
  }
  .wrapper .title {
    font-size: 22px;
    line-height: 28px;
    font-weight: 500;
  }
  .question-item {
    padding: 24px 0;
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
