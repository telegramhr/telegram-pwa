<template>
  <div class="ht-kalkulator-progress" aria-hidden="true">
    <span class="ht-kalkulator-progress-current">{{ current }}</span>
    <span class="ht-kalkulator-progress-separator">/</span>
    <span class="ht-kalkulator-progress-total">{{ total }}</span>
  </div>
</template>

<script>
export default {
  name: 'HtKalkulatorProgress',
  props: {
    current: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style scoped>
.ht-kalkulator-progress {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 6px 14px;
  border-radius: 20px;
  background: #f5f5f5;
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #666;
}

.ht-kalkulator-progress-current {
  color: #ae3737;
}
</style>
