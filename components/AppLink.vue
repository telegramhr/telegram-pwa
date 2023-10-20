<template>
  <!-- eslint-disable-next-line -->
  <component v-bind="linkProperties(to)">
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    to: {
      required: true,
      type: String,
    },
    tracker: {
      required: false,
      type: String,
      default: '',
    },
  },
  methods: {
    linkProperties(route) {
      if (route.match(/^(http(s)?|ftp):\/\//)) {
        return {
          is: 'a',
          href: route,
          target: '_blank',
        }
      }
      return {
        is: 'nuxt-link',
        to: {
          path:
            route + ((route.at(-1) && !route.includes('?')) === '/' ? '' : '/'),
          query: this.tracker
            ? {
                tracker: this.tracker,
              }
            : {},
        },
      }
    },
  },
}
</script>
