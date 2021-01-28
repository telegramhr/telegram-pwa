<template>
  <div
    v-if="loading"
    class="container center column-full-pad loading-container"
  >
    <div class="loader3-animation">
      <div class="animate"></div>
      <div class="animate"></div>
      <div class="animate"></div>
      <div class="animate"></div>
      <div class="animate"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>

<style scoped>
.loading-container {
  position: fixed;
  height: 100vh;
  width: 100vw;
  max-width: 100vw;
}
.loader3-animation {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 200px;
  height: 30px;
}
.loader3-animation .animate {
  background-color: #c8c8c8;
  width: 10px;
  height: 10px;
  margin: 10px;
  animation-name: loader3-animation-frames;
  animation-iteration-count: infinite;
  animation-duration: 2.5s;
}
.loader3-animation .animate:nth-child(2) {
  animation-delay: 0.5s;
}
.loader3-animation .animate:nth-child(3) {
  animation-delay: 1s;
}
.loader3-animation .animate:nth-child(4) {
  animation-delay: 1.5s;
}
.loader3-animation .animate:nth-child(5) {
  animation-delay: 2s;
}
@keyframes loader3-animation-frames {
  0% {
    background-color: #c8c8c8;
    width: 10px;
    height: 10px;
    margin: 10px;
  }
  20% {
    background-color: #ae3737;
    width: 20px;
    height: 20px;
    margin: 5px;
  }
  40% {
    background-color: #c8c8c8;
    width: 10px;
    height: 10px;
    margin: 10px;
  }
  100% {
    background-color: #c8c8c8;
    width: 10px;
    height: 10px;
    margin: 10px;
  }
}
</style>
