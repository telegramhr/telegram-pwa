<template>
  <app-link
    to="/newsletter"
    class="widget widget-newsletter relative full flex"
  >
    <div class="widget-box full flex">
      <h2 class="full">
        Telegram u vašem inboxu: prvi čitajte važne vijesti, istrage i analize
      </h2>
      <div class="full center"><div class="btn animate">Prijavite se</div></div>
      <div class="full center">
        <font-awesome-icon
          :icon="['fas', 'envelope-open-text']"
        ></font-awesome-icon>
      </div>
    </div>
  </app-link>
</template>

<script>
export default {
  name: 'Newsletter',
}
</script>
