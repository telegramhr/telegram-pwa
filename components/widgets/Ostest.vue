<template>
  <app-link to="/dojave" class="widget widget-newsletter relative full flex">
    <div class="widget-box full flex">
      <h2 class="full">
        Riješite naš test i pronađite idealno radno mjesto za sebe
      </h2>
      <div class="full center">
        <div class="btn animate">Isprobajte test</div>
      </div>
      <div class="full center">
        <font-awesome-icon
          :icon="['fad', 'map-marker-question']"
        ></font-awesome-icon>
      </div>
    </div>
  </app-link>
</template>

<script>
export default {
  name: 'Ostest',
}
</script>
