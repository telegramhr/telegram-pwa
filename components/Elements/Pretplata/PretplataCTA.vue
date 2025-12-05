<template>
  <div class="cta">
    <span>{{ text }}</span>
    <a :href="link.url" rel="noopener noreferrer">
      <button>{{ link.text }}</button>
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
