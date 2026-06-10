<template>
  <component
    :is="href ? 'a' : 'button'"
    class="tg-button"
    :class="[`tg-button--${variant}`, { 'tg-button--block': block }]"
    :href="href || null"
    :type="href ? null : type"
    :disabled="href ? null : disabled"
    :rel="href ? rel : null"
    @click="$emit('click', $event)"
  >
    <span class="tg-button__label"><slot /></span>
  </component>
</template>

<script>
export default {
  name: 'TgButton',
  props: {
    // Visual style. 'primary' = green design button, 'neutral' = grey (e.g. unselected state)
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'neutral'].includes(value),
    },
    // When set, renders an <a> instead of a <button>
    href: {
      type: String,
      default: '',
    },
    // Native button type when rendering a <button>
    type: {
      type: String,
      default: 'button',
    },
    rel: {
      type: String,
      default: 'noopener noreferrer',
    },
    block: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.tg-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 12px 16px;
  border: none;
  border-radius: 10px;
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  box-shadow: inset 0 0 8px -2px hsla(0, 0%, 100%, 0.48),
    inset 0 3px 4px -3px hsla(0, 0%, 100%, 0.56),
    0 3px 3px -1.5px rgba(0, 0, 0, 0.03), 0 1px 1px -0.5px rgba(0, 0, 0, 0.03);
  transition: background-color 0.3s ease;
}
.tg-button__label {
  padding: 0 4px;
  white-space: nowrap;
}
.tg-button--block {
  width: 100%;
}

@media screen and (min-width: 1024px) {
  .tg-button {
    padding: 16px;
    font-size: 16px;
  }
}

/* Primary — green design button */
.tg-button--primary {
  background-color: #217613;
}
.tg-button--primary:hover {
  background-color: #1a5e0f;
}
.tg-button--primary:active {
  background-color: #217613;
}

/* Neutral — used for unselected states */
.tg-button--neutral {
  background-color: #b5b5b5;
}
.tg-button--neutral:hover {
  background-color: #1a5e0f;
}
.tg-button--neutral:active {
  background-color: #217613;
}

.tg-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
