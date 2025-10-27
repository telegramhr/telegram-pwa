<template>
  <div class="main">
    <div class="column-wrapper">
      <span>Odaberite trajanje pretplate</span>

      <!-- Annual subscription -->
      <div
        class="radio-wrapper"
        :class="{ active: subscription === 'annual' }"
        @click="subscription = 'annual'"
      >
        <input
          type="radio"
          value="annual"
          v-model="subscription"
          @click.stop
          class="custom-radio"
        />

        <div class="radio-option">
          <div class="radio-heading">
            <span>Godišnja pretplata</span>
            <button class="discount">42% popusta</button>
          </div>
          <p class="radio-description">208€ za godinu dana unaprijed</p>
        </div>
      </div>

      <!-- monthly subscription -->
      <div
        class="radio-wrapper"
        :class="{ active: subscription === 'monthly' }"
        @click="subscription = 'monthly'"
      >
        <input
          type="radio"
          value="monthly"
          v-model="subscription"
          @click.stop
          class="custom-radio"
        />

        <div class="radio-option">
          <div class="radio-heading">
            <span>Mjesečna pretplata</span>
            <button class="discount">30% popusta</button>
          </div>
          <p class="radio-description">
            20,99€, možete otkazati u bilo kojem trenutku
          </p>
        </div>
      </div>
    </div>

    <div class="column-wrapper">
      <span>Odaberite način plaćanja</span>

      <!-- card -->
      <div
        class="radio-wrapper"
        :class="{ active: payment === 'card' }"
        @click="payment = 'card'"
      >
        <input
          type="radio"
          value="card"
          v-model="payment"
          @click.stop
          class="custom-radio"
        />

        <div class="radio-option">
          <div class="radio-heading">
            <span>Kartica</span>
          </div>
          <p class="radio-description">
            Visa, Mastercard, Apple Pay i Google Pay
          </p>
        </div>
      </div>

      <!-- bank -->
      <div
        class="radio-wrapper"
        :class="{ active: payment === 'bank' }"
        @click="payment = 'bank'"
      >
        <input
          type="radio"
          value="bank"
          v-model="payment"
          @click.stop
          class="custom-radio"
        />

        <div class="radio-option">
          <div class="radio-heading">
            <span>Bankovna uplata</span>
          </div>
          <p class="radio-description">
            Generirat ćemo uplatnicu s podacima za plaćanje
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubscriptionOptions',
  data() {
    return {
      subscription: 'annual',
      payment: '',
    }
  },
}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 62px;
  border-top: 1px solid #b5b5b5;
  padding: 24px 0px;
}

.column-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  gap: 24px;
}

.column-wrapper span {
  font-family: 'Barlow';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #5f5f5f;
}

.radio-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}

.radio-option {
  display: flex;
  flex-direction: column;
}

.radio-heading {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
}

.radio-heading span {
  font-family: 'Lora', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: black;
}

.discount {
  background: #f0faf0;
  color: #2e902e;
  border: solid 1px #2e902e;
  border-radius: 8px;
  padding: 8px;
  font-size: 12px;
  font-family: 'Barlow', sans-serif;
  font-weight: 700;
  cursor: default;
  text-transform: uppercase;
}

.radio-description {
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
  line-height: 24px;
  color: #5f5f5f;
}

/* Custom radio button */
.custom-radio {
  appearance: none;
  -webkit-appearance: none;
  width: 24px;
  height: 24px;
  border: 1.2px solid #b5b5b5;
  border-radius: 50%;
  background-color: #fff;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;
}

.custom-radio:checked {
  background-color: #000;
  border-color: #000;
}

.custom-radio:checked::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  background-color: #fff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
</style>
