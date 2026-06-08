<template>
  <div
    :class="{ selected: selected }"
    class="box-wrapper"
    @click="handleSelect"
  >
    <div class="heading-section">
      <div class="box-header">
        <div class="title">
          <h3 :class="{ 'premium-title': type === 'premium' }">
            {{ card.title }}
          </h3>
          <p>
            {{ card.price }}<span class="term">/{{ card.term }}</span>
          </p>
        </div>
        <div class="tag-wrapper">
          <span v-if="type === 'premium'" class="benefit premium-recommended">
            Preporučeno
          </span>
          <span class="benefit" :class="{ premium: type === 'premium' }">{{
            card.tag
          }}</span>
        </div>
      </div>
      <div class="content">
        <div
          v-for="(feat, index) in card.features"
          :key="index"
          class="feature"
        >
          <font-awesome-icon class="benefit-icon" :icon="['fas', 'check']" />
          <p class="feature-content" v-html="feat"></p>
        </div>
      </div>
    </div>

    <div class="footer">
      <button :class="{ selected: selected }">
        {{ selected ? 'Odabrano' : card.buttonText }}
      </button>
      <span>{{ card.footerText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PretplataNewBoxKooltura',
  props: {
    type: {
      type: String,
      default: 'standard',
      validator: (value) => ['standard', 'premium'].includes(value),
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    card() {
      if (this.type === 'premium') {
        return {
          title: 'Premium',
          price: '19,99 €',
          term: '2 godine',
          tag: 'BEZ REKLAMA',
          features: [
            'Neograničeno čitanje Telegrama i Telesporta uz pristup arhivi svih članaka',
            'Ekskluzivni newsletteri s posebnim analizama nagrađivanih autora',
            'Čitanje bez reklama',
            '10 poklon članaka mjesečno',
            'Posebni popusti i pogodnost Telegram Kluba',
          ],
          buttonText: 'Odaberi Premium',
          footerText:
            'Nakon isteka prve 2 godine pretplata se automatski obnavlja po punoj cijeni.',
        }
      }
      return {
        title: 'Standard',
        price: '16,99 €',
        term: '2 godine',
        tag: 'MANJE REKLAMA',
        features: [
          'Neograničeno čitanje Telegrama i pristup arhivi svih članaka',
          'Ekskluzivni newsletteri s posebnim analizama nagrađivanih autora',
          '10 poklon članaka mjesečno',
          'Posebni popusti i pogodnost Telegram Kluba',
        ],
        buttonText: 'Odaberi Standard',
        footerText:
          'Nakon isteka prve 2 godine pretplata se automatski obnavlja po punoj cijeni.',
      }
    },
  },
  methods: {
    handleSelect() {
      this.$emit('select', this.type)
    },
  },
}
</script>

<style scoped>
.box-wrapper {
  margin: 0 auto;
  width: 100%;
  max-width: 402px;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: white;
  padding: 24px 25px 28px 25px;
  border-radius: 8px;
  gap: 24px;
  justify-content: space-between;
  flex: 1 1 0;
  cursor: pointer;
}
.box-wrapper.selected {
  outline: 2px solid #9f9f9f;
  outline-offset: -2px;
}
.heading-section {
  display: flex;
  flex-direction: column;
  gap: 14px;
  text-align: center;
  margin: 0 auto;
}
.heading-section .title {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.box-header {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.heading-section .title h3 {
  font-family: 'Lora', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: black;
}
.premium-title {
  background: linear-gradient(93.6deg, #8f2284 15.27%, #e4633a 100.28%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.heading-section .title p {
  font-family: 'Lora', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: black;
}
.title p .term {
  color: #9f9f9f;
  font-weight: 600;
}
.tag-wrapper {
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
}
.benefit {
  font-family: 'Barlow', sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: #747474;
  padding: 8px 9px;
  border: 2px solid #747474;
  border-radius: 8px;
  width: fit-content;
  letter-spacing: 1px;
  background-color: #ffffff;
}
.benefit.premium {
  padding: 8px 10px;
  line-height: 14px;
}
.premium-recommended {
  text-transform: uppercase;
  color: #91237e;
  border: 2px solid #8f2284;
  border-radius: 8px;
  background-color: #ffffff;
}
.content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 14px;
  border-top: 1px solid #dfdfdf;
}
.content .feature {
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
}
.feature-content {
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: black;
  text-align: left;
  align-items: center;
}
.feature-content ::v-deep(span),
.feature-content ::v-deep(b) {
  font-weight: 600;
}
.benefit-icon {
  color: #8d5b31;
}
.footer {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.footer button {
  width: 100%;
  padding: 16px;
  background-color: #b5b5b5;
  font-family: 'Barlow', sans-serif;
  color: white;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.footer button:hover {
  background-color: #37ae37;
  color: white;
}
.footer button:active {
  background-color: #237023;
}
.footer button.selected {
  background-color: #37ae37;
  color: white;
}
.footer span {
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  font-size: 10px;
  line-height: 16px;
  text-align: center;
}
@media screen and (min-width: 1024px) {
  .box-wrapper {
    padding: 28px 32px;
    gap: 28px;
    border-radius: 10px;
  }
  .heading-section .title h3 {
    font-size: 28px;
    line-height: 40px;
  }
  .heading-section {
    gap: 16px;
  }
  .content {
    padding-top: 16px;
  }
  .heading-section .title p {
    font-size: 20px;
    line-height: 20px;
  }
  .heading-section .title {
    gap: 18px;
  }
  .content .feature {
    font-size: 16px;
    line-height: 22px;
  }
  .tag-wrapper {
    gap: 12px;
  }
  .benefit {
    padding: 8px 10px;
  }
  .footer span {
    line-height: 16px;
  }
}
</style>
