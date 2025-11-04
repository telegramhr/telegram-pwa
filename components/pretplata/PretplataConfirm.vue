<template>
  <div class="main">
    <div class="promo-wrapper">
      <span>Imate li promo kod?</span>
      <div class="toggle-container">
        <span>Ne</span>

        <button
          type="button"
          class="toggle"
          :class="{ 'is-on': promo }"
          @click="promo = !promo"
        >
          <span class="thumb" />
        </button>

        <span>Da</span>
      </div>
      <div v-if="promo" class="promo-input-wrapper">
        <input
          type="text"
          placeholder="Promo kod"
          class="promo-input"
          v-model="promoCode"
        />
        <button class="apply-btn" @click="applyPromo">Primijeni</button>
      </div>
    </div>
    <div class="confirm-wrapper">
      <div>
        <label class="checkbox">
          <input class="checkbox-input" type="checkbox" />
          <span class="checkmark"></span>
          <p class="checkbox-label">Prihvaćam <span>uvjete korištenja</span></p>
        </label>
      </div>
      <div>
        <label class="checkbox">
          <input class="checkbox-input" type="checkbox" />
          <span class="checkmark"></span>
          <p class="checkbox-label">
            Prihvaćam <span>pravila privatnosti</span>
          </p>
        </label>
      </div>
    </div>

    <div class="submit-wrapper">
      <button>Dovršite kupnju za 208€</button>
      <p>
        Ispunite sve korake iznad kako bi dovršili kupnju.<br />
        Pretplatu možete otkazati u bilo kojem trenutku. Pretplata se automatski
        obnavlja.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PromoSection',
  data() {
    return {
      promo: false,
      promoCode: '',
    }
  },
  methods: {
    applyPromo() {
      if (this.promoCode.trim()) {
        alert(`Promo kod "${this.promoCode}" primijenjen!`)
      }
    },
  },
}
</script>

<style scoped>
.main {
  padding-top: 28px;
  border-top: 1px solid #b5b5b5;
  display: flex;
  flex-direction: column;
  font-family: 'Barlow', sans-serif;
  gap: 28px;
}

.promo-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.promo-wrapper span {
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #5f5f5f;
}
.promo-input {
  padding: 11px 16px 11px 20px;
  width: 100%;
  max-width: 222px;
  font-size: 16px;
  line-height: 24px;
  border: none;
  border-radius: 8px;
}
.apply-btn {
  background-color: transparent;
  border: none;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #902e2e;
  padding: 0px;
  position: relative;
  left: -86px;
}
.toggle-container {
  display: flex;
  align-items: center;
  gap: 12px;
}

.toggle {
  width: 48px;
  height: 25px;
  border: none;
  border-radius: 999px;
  background-color: #d9d9d9;
  position: relative;
  padding: 0;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.toggle.is-on {
  background-color: #ae3737;
}

.thumb {
  width: 19px;
  height: 19px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: 3px;
  transition: left 0.2s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
}

.toggle.is-on .thumb {
  left: 26px;
}
.confirm-wrapper {
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding-bottom: 20px;
}

.confirm-wrapper div {
  display: flex;
  align-items: center;
  gap: 8px;
}

.checkbox-label {
  font-size: 16px;
  line-height: 20px;
}
.checkbox-label span {
  font-weight: 600;
}

.checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  position: relative;
}

.checkbox-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  width: 20px;
  height: 20px;
  border: 1.25px solid #b5b5b5;
  border-radius: 2px;
  background-color: white;
  flex-shrink: 0;
  transition: all 0.2s ease;
}

.checkbox-input:checked + .checkmark {
  background-color: black;
  border-color: black;
}

.checkbox-input:checked + .checkmark::after {
  content: '';
  position: absolute;
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox:hover .checkmark {
  border-color: gray;
}

.submit-wrapper {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.submit-wrapper button {
  background-color: #37ae37;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  border: none;
  border-radius: 8px;
  padding: 14px;
  cursor: pointer;
}
.submit-wrapper button:hover {
  background-color: #237023;
}

.submit-wrapper p {
  text-align: center;
  font-size: 12px;
  line-height: 18px;
  color: #5f5f5f;
}
@media (min-width: 1024px) {
  .main {
    padding-top: 24px;
    gap: 24px;
  }
  .promo-wrapper span {
    font-size: 16px;
    line-height: 24px;
  }
  .confirm-wrapper {
    padding-bottom: 0px;
    gap: 20px;
  }
  .toggle-container {
    gap: 16px;
  }
}
</style>
