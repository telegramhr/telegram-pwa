<template>
  <div class="cta">
    <span>{{ text }}</span>
    <a :href="link.url" rel="noopener noreferrer">
      <button :class="{ 'is-overlay': variant === 'overlay' }">
        {{ link.text }}
      </button>
    </a>
  </div>
</template>
<script>
export default {
  name: 'PretplataCTA',
  props: {
    text: {
      type: String,
      required: true,
      default: '',
    },
    link: {
      type: Object,
      required: true,
      default: () => ({
        url: '#',
        text: 'Iskoristite ponudu',
      }),
    },
    variant: {
      type: String,
      default: '',
    },
  },
}
</script>
<style scoped>
.cta {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 406px;
  width: 100%;
  margin: 0 auto;
  padding: 0px 16px;
  padding-bottom: 32px;
}
.cta span {
  font-family: 'Barlow', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
}
.cta button {
  background-color: #37ae37;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 18px 28px;
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  line-height: 20px;
  font-weight: 600;
  cursor: pointer;
  width: fit-content;
  margin: 0 auto;
}
.cta button:hover {
  background-color: #237023;
}
.cta button.is-overlay {
  background-color: #217613;
  border-radius: 10px;
  box-shadow: 0px 0px 8px -2px rgba(255, 255, 255, 0.48) inset,
    0px 3px 4px -3px rgba(255, 255, 255, 0.56) inset,
    0px 3px 3px -1.5px rgba(0, 0, 0, 0.03),
    0px 1px 1px -0.5px rgba(0, 0, 0, 0.03);
}
.cta button.is-overlay:hover {
  background-color: #1a5e0f;
}

@media (min-width: 1024px) {
  .cta {
    gap: 36px;
    padding-bottom: 72px;
  }
  .cta span {
    font-size: 28px;
    line-height: 36px;
  }
}
</style>
