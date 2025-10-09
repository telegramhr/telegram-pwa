<template>
  <div class="pretplata-content">
    <input
      :id="id"
      v-model="internalValue"
      type="radio"
      class="hide"
      name="pretplata-paket"
      :value="id"
    />

    <label
      :for="id"
      class="full flex relative pretplata-pack animate clickable"
    >
      <div class="flex flex-column">
        <div class="pack-header">
          <span v-if="discountText" class="discount-highlight">{{
            discountText
          }}</span>
          <span class="pack-title">{{ title }}</span>
          <p class="pack-price">{{ price }}€ <span>/ Mjesečno</span></p>
          <p class="pack-price">{{ priceAnnual }}€ <span>/ Godišnje</span></p>
        </div>

        <div class="pack-benefits">
          <div
            v-for="(benefit, index) in benefits"
            :key="index"
            class="single-benefit"
          >
            <font-awesome-icon class="benefit-icon" :icon="['fas', 'check']" />
            <p class="full" v-html="benefit"></p>
          </div>
        </div>
      </div>

      <div class="pack-button-wrapper">
        <div class="choose-btn">{{ buttonText }}</div>
        <span>Otkažite u bilo kojem trenutku.</span>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'PretplataBox',
  props: {
    value: { type: String, default: '' },
    id: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: [String, Number], required: true },
    priceAnnual: { type: [String, Number], required: true },
    discountText: { type: String, default: '' },
    benefits: { type: Array, required: true },
    buttonText: { type: String, required: true },
  },
  computed: {
    internalValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
}
</script>
<style>
.pretplata-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1 1 0%;
}
.pretplata-pack {
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid #dfdfdf;
  justify-content: space-between;
  height: 100%;
  border-radius: 9px;
  text-align: center;
  padding: 36px 28px;
  margin: 0px !important;
}
.pack-header {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding-bottom: 28px;
}
.discount-highlight {
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  padding: 4px 8px;
  color: #478041;
  background-color: #e5ffe2;
  border: 1px solid #e5ffe2;
  border-radius: 4px;
}
/* Style label when radio is checked */
input[type='radio']:checked + label.pretplata-pack {
  border-color: #6d4726;
}

/* Style button when radio is checked */
input[type='radio']:checked + label.pretplata-pack .choose-btn {
  background-color: #37ae37;
  color: white;
}
.pack-title {
  font-family: 'Lora', serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 24px;
  text-align: center;
}
.pack-price {
  font-family: 'Lora', serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 18px;
  color: black;
}
.pack-price span {
  font-weight: 600px;
  color: #9e9e9e;
}
.iliText {
  align-self: center;
  margin-bottom: 14px;
}
.pack-benefits {
  border-top: 1px solid #dfdfdf;
  display: flex;
  width: 100%;
  padding-top: 15px;
  flex-direction: column;
  gap: 16px;
}
.single-benefit {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: left;
}
.single-benefit > svg {
  color: #8d5b31;
}
.pack-button-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 36px;
}
.choose-btn {
  width: 100%;
  background: #b5b5b5;
  font-family: 'Barlow', sans-serif;
  color: white;
  border-radius: 2px;
  padding: 18px 48px;
  font-size: 16px;
  line-height: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.pack-button-wrapper span {
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #121212;
}
</style>
