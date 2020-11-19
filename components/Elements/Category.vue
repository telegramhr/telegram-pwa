<template>
  <section
    class="fourth flex-responsive column-horizontal-pad flex mobile-side-pad"
  >
    <h2 class="full flex section-title">{{ title }}</h2>
    <featured :post="{}"></featured>
    <standard></standard>
    <!-- 3x -->
  </section>
</template>

<script>
export default {
  name: 'Category',
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
  },
}
</script>
