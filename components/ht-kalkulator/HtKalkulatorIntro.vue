<template>
  <div class="ht-kalkulator-intro">
    <h2 class="ht-kalkulator-intro-title">
      Koliko vremena gubite na zadatke koje AI može obaviti umjesto vas?
    </h2>
    <p class="ht-kalkulator-intro-description">
      Odgovorite na 6 kratkih pitanja i saznajte koliko sati mjesečno možete
      uštedjeti uz pomoć umjetne inteligencije.
    </p>
    <button class="ht-kalkulator-intro-cta" @click="$emit('start')">
      Kreni
    </button>
    <button class="ht-kalkulator-intro-dismiss" @click="$emit('dismiss')">
      Ne zanima me
    </button>
  </div>
</template>

<script>
export default {
  name: 'HtKalkulatorIntro',
}
</script>

<style scoped>
.ht-kalkulator-intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 48px 24px;
}

.ht-kalkulator-intro-title {
  font-family: 'Lora', serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.3;
  color: var(--tg-primary-text-color, #111);
  margin-bottom: 16px;
  max-width: 480px;
}

.ht-kalkulator-intro-description {
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #555;
  margin-bottom: 32px;
  max-width: 420px;
}

.ht-kalkulator-intro-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 48px;
  background: #e20074;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  margin-bottom: 16px;
}

.ht-kalkulator-intro-cta:hover {
  background: #c80066;
}

.ht-kalkulator-intro-cta:focus-visible {
  outline: 3px solid #e20074;
  outline-offset: 2px;
}

.ht-kalkulator-intro-dismiss {
  background: none;
  border: none;
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
  color: #999;
  cursor: pointer;
  padding: 8px 16px;
  transition: color 0.2s;
}

.ht-kalkulator-intro-dismiss:hover {
  color: #666;
}

@media (max-width: 768px) {
  .ht-kalkulator-intro {
    padding: 32px 16px;
  }

  .ht-kalkulator-intro-title {
    font-size: 20px;
  }

  .ht-kalkulator-intro-cta {
    width: 100%;
    padding: 14px 24px;
  }
}
</style>
