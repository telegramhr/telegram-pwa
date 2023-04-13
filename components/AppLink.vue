<template>
  <!-- eslint-disable-next-line -->
  <component v-bind="linkProperties(to)" @click.prevent="click(to)">
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
        }
      }
      return {
        is: 'nuxt-link',
        to: {
          path: route,
        },
      }
    },
    click(route) {
      if (route.match(/^(http(s)?|ftp):\/\//)) {
        this.$browser.open(route)
      }
    },
  },
}
</script>
