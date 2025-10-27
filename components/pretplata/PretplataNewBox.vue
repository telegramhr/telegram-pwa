<template>
  <div class="box-wrapper">
    <div class="heading-section">
      <div class="title">
        <h3 :class="{ 'premium-title': type === 'premium' }">
          {{ card.title }}
        </h3>
        <p>{{ card.price }}<span>/mjesečno</span></p>
      </div>
      <div class="tag-wrapper">
        <span class="benefit premium-recommended" v-if="type === 'premium'">
          Preporučeno
        </span>
        <span class="benefit">{{ card.tag }}</span>
      </div>
      <div class="content">
        <div
          class="feature"
          v-for="(feat, index) in card.features"
          :key="index"
        >
          <font-awesome-icon class="benefit-icon" :icon="['fas', 'check']" />
          <p>{{ feat }}</p>
        </div>
      </div>
    </div>

    <div class="footer">
      <button>{{ card.buttonText }}</button>
      <span>{{ card.footerText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubscriptionCard',
  props: {
    type: {
      type: String,
      default: 'standard', // defaultna opcija
      validator: (value) => ['standard', 'premium'].includes(value),
    },
  },
  computed: {
    card() {
      if (this.type === 'premium') {
        return {
          title: 'Premium',
          price: '12,99€',
          tag: 'BEZ REKLAMA',
          features: [
            'Neograničeno čitanje svih članaka',
            'Ekskluzivni newsletteri i analize',
            '30 poklon članaka mjesečno',
            'Posebni popusti i pogodnosti Telegram Kluba',
          ],
          buttonText: 'Odabrano',
          footerText: 'Otkažite u bilo kojem trenutku.',
        }
      }
      return {
        title: 'Standard',
        price: '7,99€',
        tag: 'MANJE REKLAMA',
        features: [
          'Neograničeno čitanje Telegrama i pristup arhivi svih članaka',
          'Ekskluzivni newsletteri s posebnim analizama nagrađivanih autora',
          '10 poklon članaka mjesečno',
          'Posebni popusti i pogodnost Telegram Kluba',
        ],
        buttonText: 'Odabrano',
        footerText: 'Otkažite u bilo kojem trenutku.',
      }
    },
  },
}
</script>

<style scoped>
.box-wrapper {
  width: 100%;
  max-width: 402px;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: white;
  padding: 28px 32px;
  border: 2px solid #9f9f9f;
  border-radius: 10px;
  gap: 28px;
  justify-content: space-between;
}
.heading-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
  margin: 0 auto;
}
.heading-section .title {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.heading-section .title h3 {
  font-family: 'Lora', sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
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
  font-size: 20px;
  line-height: 20px;
  color: black;
}
.title p span {
  font-weight: 600;
  color: #9f9f9f;
}
.tag-wrapper {
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: center;
}
.benefit {
  font-family: 'Barlow', sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: #747474;
  padding: 10px;
  border: 2px solid #747474;
  border-radius: 8px;
  width: fit-content;
  letter-spacing: 1px;
  background-color: #ffffff;
}
.premium-recommended {
  text-transform: uppercase;
  background: linear-gradient(90.58deg, #946d29 15.27%, #f2c591 100.28%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border: 2px solid;
  border-radius: 8px;
  border-image-slice: 1;
  border-width: 2px;
  border-image-source: linear-gradient(
    90.58deg,
    #946d29 15.27%,
    #f2c591 100.28%
  );
}

.content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 16px;
  border-top: 1px solid #dfdfdf;
}
.content .feature {
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  line-height: 22px;
  color: black;
  display: flex;
  flex-direction: row;
  gap: 7px;
  text-align: left;
  align-items: center;
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
  padding: 13px;
  background-color: #37ae37;
  font-family: 'Barlow', sans-serif;
  color: white;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  border: none;
  border-radius: 8px;
}
.footer span {
  font-size: 12px;
  line-height: 16px;
  text-align: center;
}
</style>
