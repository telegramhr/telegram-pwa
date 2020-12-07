<template>
  <app-link
    to="/newsletter"
    class="widget widget-newsletter relative full flex"
  >
    <div class="widget-box full flex">
      <h2 class="full">
        Prijavite se na naš newsletter za najnovije vijesti i komentare
      </h2>
      <div class="full center"><div class="btn animate">Pretplati me</div></div>
      <div class="full center"><i class="fas fa-envelope-open-text"></i></div>
    </div>
  </app-link>
</template>

<script>
export default {
  name: 'Newsletter',
}
</script>
