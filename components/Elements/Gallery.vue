<template>
  <div class="full flex gallery-content relative">
    <VueSlickCarousel
      :ref="`carousel-${gallery.id}`"
      :arrows="false"
      style="display: block; width: 100%"
    >
      <figure
        v-for="image in gallery.images"
        :key="image.id"
        class="full relative"
      >
        <img :src="image.url" :alt="image.caption" />
        <figcaption class="wp-caption-text img-portrait">
          <!-- eslint-disable-next-line -->
          <span v-html="image.caption"></span>
        </figcaption>
        <figcaption class="wp-caption-text img-portrait">
          <span class="photographer">{{ image.author }}</span>
        </figcaption>
      </figure>
    </VueSlickCarousel>
    <div
      class="gallery-left center gallery-arrow desktop-only animate"
      @click="$refs[`carousel-${gallery.id}`].prev()"
    >
      <font-awesome-icon
        :icon="['far', 'angle-left']"
        class="animate"
      ></font-awesome-icon>
    </div>
    <div
      class="gallery-right center gallery-arrow desktop-only animate"
      @click="$refs[`carousel-${gallery.id}`].next()"
    >
      <font-awesome-icon
        :icon="['far', 'angle-right']"
        class="animate"
      ></font-awesome-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: {
    gallery: {
      required: true,
      type: Object,
      default() {
        return {
          id: 0,
          images: [],
        }
      },
    },
  },
}
</script>
