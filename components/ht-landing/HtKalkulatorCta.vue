<template>
  <section class="ht-kalk-cta">
    <div class="ht-kalk-cta__text">
      <h2 class="ht-kalk-cta__heading">
        Koliko vremena gubite na zadatke koje AI može obaviti umjesto vas?
      </h2>
      <p class="ht-kalk-cta__sub">
        Odgovorite na 6 kratkih pitanja i saznajte koliko sati mjesečno možete
        uštedjeti uz pomoć umjetne inteligencije.
      </p>
    </div>

    <button
      class="ht-kalk-cta__btn"
      type="button"
      @click="$emit('open-kalkulator')"
    >
      <span>Kreni</span>
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    </button>
  </section>
</template>

<script>
export default {
  name: 'HtKalkulatorCta',
}
</script>

<style scoped>
.ht-kalk-cta {
  width: 100%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 28px;
  padding: 80px 24px;
}
.ht-kalk-cta__text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-width: 560px;
}
.ht-kalk-cta__heading {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.12;
  color: #111111;
  margin: 0;
}
.ht-kalk-cta__sub {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #555555;
  margin: 0;
}
.ht-kalk-cta__btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--ht-magenta, #e2007a);
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  padding: 16px 24px;
  border: none;
  border-radius: 28px;
  cursor: pointer;
  transition: background 0.2s ease;
}
.ht-kalk-cta__btn:hover {
  background: var(--ht-magenta-hover, #c1006a);
}
.ht-kalk-cta__btn:focus-visible {
  outline: 3px solid var(--ht-magenta, #e2007a);
  outline-offset: 2px;
}

@media (min-width: 1024px) {
  .ht-kalk-cta {
    padding: 85px 24px 80px;
  }
}
</style>
