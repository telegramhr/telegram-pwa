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
      if (route.match(/^(http(s)?|ftp):\/\//)) {
        return {
          is: 'a',
          href: route,
          target: '_blank',
        }
      }

      return {
        is: 'router-link',
        to: route,
      }
    },
  },
}
</script>
