<template>
  <span ref="el" class="ht-count-up">
    <span :class="numClass">{{ display }}</span
    ><span v-if="unitText" :class="unitClass">{{ unitText }}</span>
  </span>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useTransition, useIntersectionObserver } from '@vueuse/core'

export default {
  name: 'HtCountUp',
  props: {
    to: { type: Number, required: true },
    from: { type: Number, default: 0 },
    duration: { type: Number, default: 1800 },
    decimals: { type: Number, default: 0 },
    // Optional unit: a string, or a function (currentValue) => string so the
    // label can follow the live value (e.g. Croatian sat/sata/sati).
    unit: { type: [Function, String], default: null },
    numClass: { type: [String, Array, Object], default: null },
    unitClass: { type: [String, Array, Object], default: null },
  },
  setup(props) {
    const el = ref(null)
    const source = ref(props.from)

    // Organic "loader" feel: snappy start, long deceleration that settles
    // on the target (easeOutExpo-style cubic-bezier).
    const output = useTransition(source, {
      duration: props.duration,
      transition: [0.16, 1, 0.3, 1],
    })

    onMounted(() => {
      // Run the count-up the first time the number scrolls into view, so it
      // also works when reused lower on the page.
      const { stop } = useIntersectionObserver(
        el,
        ([entry]) => {
          if (entry && entry.isIntersecting) {
            source.value = props.to
            stop()
          }
        },
        { threshold: 0.4 }
      )
    })

    const display = computed(() => output.value.toFixed(props.decimals))

    const unitText = computed(() => {
      if (!props.unit) return ''
      if (typeof props.unit === 'function') {
        return props.unit(Number(display.value))
      }
      return props.unit
    })

    return { el, display, unitText }
  },
}
</script>
