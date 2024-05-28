<script>
export default {
  name: 'SpellingBeeDate',
  data() {
    return {
      zindex: 1,
    }
  },
}
</script>

<template>
  <div>
    <h1>Spelling Bee</h1>
    <Hive :z-index="zindex" />
  </div>
</template>
