<template>
  <a href="#" class="widget widget-podcast relative full flex">
    <div class="widget-box full flex">
      <h2 class="full">
        Razgovor s dva ekonomista o Lorem Ipsum Dolor Sit Amet
      </h2>
      <div class="full center relative podcast-art">
        <img
          src="@/assets/img/podcast_art_trecarepublika.jpg"
          alt="Treća republika by Goranko Fižulić podcast cover"
        />
        <img
          src="@/assets/img/soundwave.jpg"
          class="podcast-bg"
          aria-hidden="true"
        />
      </div>
      <div class="full center">
        <div class="btn animate">Poslušaj podcast</div>
      </div>
      <div class="full center">
        <font-awesome-icon :icon="['fas', 'podcast']"></font-awesome-icon>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'Podcast',
}
</script>

<style scoped></style>
