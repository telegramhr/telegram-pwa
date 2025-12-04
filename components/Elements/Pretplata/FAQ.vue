<script>
export default {
  name: 'FAQ',
  data() {
    return {
      openIndex: null,
      contentHeights: [],
      faqs: [
        {
          question: '1.	Kako mogu čitati Telegram Premium članke?',
          answer:
            'Za neograničen pristup Premium sadržaju potrebno je biti prijavljen u svoj korisnički račun. Provjerite jeste li prijavljeni na stranici Telegrama.',
        },
        {
          question: '2.	Mogu li otkazati pretplatu nakon što se pretplatim?',
          answer:
            'Da. Svi pretplatnici mogu u bilo kojem trenutku otkazati svoju pretplatu.',
        },
        {
          question: '3.	Zaboravio/la sam lozinku. Kako mogu dobiti novu?',
          answer:
            'Kliknite na <a target="_blank" href="https://pretplata.telegram.hr/social-login/social-sign/request-password#dmid=8dba3a11-53a2-4ed9-89e8-5bc44ab0a814"> poveznicu za obnovu lozinke</a> i unesite e-mail adresu svog korisničkog računa. Ubrzo ćete primiti poruku s uputama za postavljanje nove lozinke.',
        },
        {
          question: '4.	Mogu li dijeliti svoju pretplatu s drugima?',
          answer:
            'Nije dopušteno dijeliti korisnički račun i podatke s drugim osobama.',
        },
        {
          question: '5.	Vrijedi li pretplata na više uređaja?',
          answer:
            'Da. Pretplata vrijedi na najviše 3 uređaja. Dijeljenje računa s drugim osobama nije dopušteno.',
        },
        {
          question: '6.	Kako funkcionira obnova pretplate?',
          answer:
            'Mjesečne i godišnje pretplate automatski se obnavljaju nakon isteka, na isti vremenski period. Upravljati svojom pretplatom možete unutar svog korisničkog sučelja.',
        },
        {
          question:
            '7.	Gdje se mogu obratiti za dodatna pitanja u vezi s pretplatom?',
          answer:
            'Slobodno nam se javite putem e-maila: <a target="__blank" href="mailto:pretplata@telegram.hr">pretplata@telegram.hr</a>',
        },
      ],
    }
  },
  methods: {
    toggle(index) {
      const el = this.$refs.answer[index]
      const wrapper = el.parentElement

      if (this.openIndex === index) {
        const height = wrapper.scrollHeight
        wrapper.style.height = height + 'px'
        this.openIndex = null

        requestAnimationFrame(() => {
          wrapper.style.height = '0px'
        })

        return
      }
      if (this.openIndex !== null) {
        const prevEl = this.$refs.answer[this.openIndex]
        const prevWrapper = prevEl.parentElement
        const prevHeight = prevWrapper.scrollHeight

        prevWrapper.style.height = prevHeight + 'px'

        requestAnimationFrame(() => {
          prevWrapper.style.height = '0px'
        })
      }

      this.openIndex = index

      this.$nextTick(() => {
        wrapper.style.height = wrapper.scrollHeight + 'px'

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
              <font-awesome-icon size="xs" :icon="['fa', 'chevron-up']" />
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
}
.question-item:first-child {
  border-top: 1px solid #747474;
}

.question-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  line-height: 24px;
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
  margin-top: 8px;
  font-family: 'Barlow', sans-serif;
  padding-right: 24px;
  font-size: 16px;
  line-height: 24px;
  color: #000;
}
:deep(.answer a) {
  cursor: pointer;
  color: #ae3737;
  text-decoration: underline;
}
@media (min-width: 1024px) {
  .wrapper {
    padding: 52px 0;
    gap: 24px;
    text-align: left;
  }
  .wrapper .title {
    font-size: 22px;
    line-height: 28px;
    font-weight: 500;
  }
  .answer {
    margin-top: 4px;
    font-size: 14px;
    line-height: 24px;
    padding-right: 64px;
  }
  .question-item {
    padding: 20px 0;
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
