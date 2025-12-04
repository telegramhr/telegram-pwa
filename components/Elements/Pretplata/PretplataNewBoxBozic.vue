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
          <p>{{ card.price }}<span>/godišnje</span></p>
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
        {{ selected ? 'Odabrano' : 'Odaberite' }}
      </button>
      <span>{{ card.footerText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PretplataNewBoxBozic',
  props: {
    type: {
      type: String,
      default: 'standard',
      validator: (value) =>
        ['standard', 'premium', 'telesport'].includes(value),
    },
    subscriptionType: {
      type: String,
      default: 'individual',
      validator: (value) => ['individual', 'family'].includes(value),
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
          price: '49€',
          oldPrice: '99€',
          tag: 'BEZ REKLAMA',
          features: [
            'Neograničeno čitanje Telegrama i Telesporta uz pristup arhivi',
            'Ekskluzivni newsletteri s posebnim analizama nagrađivanih autora',
            'Fokus na sadržaj - <b> čitanje bez reklama</b>',
            '10 poklon članaka mjesečno',
            'Posebni popusti i pogodnost Telegram Kluba',
          ],
          buttonText: 'Odabrano',
          footerText: 'Otkažite u bilo kojem trenutku.',
        }
      }
      return {
        title: 'Standard',
        price: '39€',
        oldPrice: '79€',
        tag: 'MANJE REKLAMA',
        features: [
          'Neograničeno čitanje svih članaka Telegrama uz pristup arhivi',
          'Ekskluzivni newsletteri s posebnim analizama nagrađivanih autora',
          '10 poklon članaka mjesečno',
          'Posebni popusti i pogodnosti Telegram Kluba',
        ],
        buttonText: 'Odabrano',
        footerText: 'Otkažite u bilo kojem trenutku.',
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
  background: linear-gradient(90.58deg, #946d29 15.27%, #f2c591 100.28%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.heading-section .title p {
  font-family: 'Lora', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: black;
}

.title p span {
  font-weight: 600;
  color: #9f9f9f;
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
  position: relative;
  line-height: 1.6;
  text-transform: uppercase;
  background: linear-gradient(90.58deg, #946d29 15.27%, #f2c591 100.28%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border-radius: 8px;
  border: none;
  display: inline-block;
}

.premium-recommended::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 8px;
  padding: 2px;
  background: linear-gradient(90.58deg, #946d29 15.27%, #f2c591 100.28%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
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
  font-size: 18px;
  line-height: 24px;
  color: black;
  text-align: left;
  align-items: center;
}
.feature-content ::v-deep(span) {
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
  font-size: 12px;
  line-height: 14px;
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
  content {
    padding-top: 16px;
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
