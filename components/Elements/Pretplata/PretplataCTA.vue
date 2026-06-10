<template>
  <div class="cta">
    <span>{{ text }}</span>
    <TgButton :href="link.url">{{ link.text }}</TgButton>
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
  align-items: center;
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
