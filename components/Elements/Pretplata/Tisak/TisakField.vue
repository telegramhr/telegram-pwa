<template>
  <div class="tt-field">
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      :name="id"
      :type="type"
      :value="value"
      :inputmode="inputmode || null"
      :autocomplete="autocomplete || null"
      :maxlength="maxlength || null"
      :readonly="readonly"
      :aria-invalid="error ? 'true' : null"
      :aria-describedby="describedBy"
      @input="onInput"
      @blur="$emit('blur')"
    />
    <p v-if="hint" :id="`${id}-hint`" class="tt-field__hint">{{ hint }}</p>
    <p v-if="error" :id="`${id}-err`" class="tt-field__error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: 'TisakField',
  props: {
    id: { type: String, required: true },
    label: { type: String, required: true },
    value: { type: String, default: '' },
    type: { type: String, default: 'text' },
    inputmode: { type: String, default: '' },
    autocomplete: { type: String, default: '' },
    maxlength: { type: [String, Number], default: null },
    hint: { type: String, default: '' },
    error: { type: String, default: '' },
    readonly: { type: Boolean, default: false },
    // Strip everything but digits, up to maxlength (postcodes, OIB).
    digits: { type: Boolean, default: false },
  },
  computed: {
    describedBy() {
      const ids = []
      if (this.hint) ids.push(`${this.id}-hint`)
      if (this.error) ids.push(`${this.id}-err`)
      return ids.join(' ') || null
    },
  },
  methods: {
    onInput(e) {
      let v = e.target.value
      if (this.digits) {
        v = v.replace(/\D/g, '')
        if (this.maxlength) v = v.slice(0, Number(this.maxlength))
        if (v !== e.target.value) e.target.value = v
      }
      this.$emit('input', v)
    },
  },
}
</script>
