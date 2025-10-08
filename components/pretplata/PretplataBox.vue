<template>
  <div class="pretplata-content">
    <!-- Radio input za odabir paketa -->
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
        <!-- Header sa nazivom, cijenom i popustom -->
        <div class="pack-header">
          <span v-if="discountText" class="discount-highlight">{{
            discountText
          }}</span>
          <span class="pack-title">{{ title }}</span>
          <p class="pack-price">{{ price }}€ <span>/ Mjesečno</span></p>
          <p class="pack-price">{{ priceAnnual }}€ <span>/ Godišnje</span></p>
        </div>

        <!-- Lista benefita -->
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

      <!-- Gumb za odabir paketa -->
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
    modelValue: { type: String, default: '' },
    id: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: [String, Number], required: true },
    priceAnnual: { type: [String, Number], required: true },
    discountText: { type: String, default: '' },
    benefits: { type: Array, required: true },
    buttonText: { type: String, required: true },
  },
  emits: ['update:modelValue'],
  computed: {
    internalValue: {
      get() {
        return this.modelValue
      },
      set(val) {
        this.$emit('update:modelValue', val)
      },
    },
  },
}
</script>
