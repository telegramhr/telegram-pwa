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
  },
  methods: {
    linkProperties(route) {
      if (!route) {
        return {
          is: 'span',
        }
      }
      // Strip local/staging domain so links route internally
      route = route.replace('https://telegram-wp.ddev.site', '').replace(this.$config.apiBaseUrl, '')
      if (route.match(/^(http(s)?|ftp):\/\//)) {
        return {
          is: 'a',
          href: route,
          target: '_blank',
        }
      }
      if (route.match(/\/native\//)) {
        return {
          is: 'a',
          href: route,
        }
      }
      return {
        is: 'nuxt-link',
        to: {
          path:
            route + (route.at(-1) !== '/' && !route.includes('?') ? '/' : ''),
        },
      }
    },
  },
}
</script>
