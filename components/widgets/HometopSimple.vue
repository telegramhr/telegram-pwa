<template>
  <app-link
    to="/pretplata"
    class="full relative darkened-bg birati-stranu-widget"
  >
    <!--TODO: connect to composer -->
    <div class="container column-full-pad mobile-full-pad flex relative">
      <p
        class="full center-text column-top-pad mobile-top-pad birati-stranu-title"
      >
        {{ title }}
      </p>
      <p class="full center-text birati-stranu-subtitle">
        <span v-if="secondarySubtitle" class="strikethrough faded">{{
          secondarySubtitle
        }}</span
        >{{ subtitle }}
      </p>
      <div class="full center column-vertical-pad mobile-vertical-pad">
        <div class="newbtn huge-newbtn">{{ cta }}</div>
      </div>
    </div>
  </app-link>
</template>

<script>
export default {
  name: 'HometopSimple',
  data() {
    return {
      title: 'Posebna akcija',
      secondarySubtitle: '7.99€',
      subtitle: '12.99€ plati više dobij isto',
      cta: 'Pretplatite se',
    }
  },
}
</script>
