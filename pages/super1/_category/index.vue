<template>
  <div>
    <template v-if="$store.state.category.categories[$route.params.category]">
      <tcategory></tcategory>
    </template>
    <template v-else>
      <slug></slug>
    </template>
  </div>
</template>

<script>
import tcategory from '~/pages/_category/index.vue'
import slug from '~/pages/_category/_slug.vue'
export default {
  components: { tcategory, slug },
}
</script>
