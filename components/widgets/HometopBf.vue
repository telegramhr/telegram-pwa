<template>
  <app-link
    v-if="showA"
    to="/pretplata"
    class="full center relative pretplata-subs-special darkened-bg"
  >
    <div
      class="full center relative dark-mode pretplata-bf pretplata-bf-special column-full-pad mobile-full-pad"
    >
      <img
        src="@/assets/img/tg_black_friday_bg.jpg"
        alt="Kolaž naslovnih fotografija raznih istraživačkih specijala Telegrama"
        class="img-as-bg"
      />
      <div class="container center flex-wrap relative column-vertical-pad">
        <div class="half flex flex-responsive column-horizontal-pad">
          <div
            class="full flex highlight-text barlow bold column-mini-bottom-pad"
          >
            {{ overtitle }}
          </div>
          <div class="full nothtwo">{{ title }}</div>
          <div class="full flex column-mini-top-pad mobile-bottom-pad">
            <div class="flex newbtn huge-newbtn animate">
              {{ cta }}
            </div>
          </div>
        </div>
        <div class="half flex-responsive flex relative align-children-end">
          <p class="full center-text column-vertical-pad barlow faded">
            {{ subtitle }}
          </p>
          <div class="full center countdown-element relative mobile-top-pad">
            <div class="countdown-day-block center">
              <div class="countdown-tiles flex">
                <div id="cd-day-2" class="countdown-tile">0</div>
                <div id="cd-day-3" class="countdown-tile">0</div>
              </div>
              <div class="countdown-subtitle">dana</div>
            </div>
            <div class="countdown-day-divider center">:</div>
            <div class="countdown-day-block center">
              <div class="countdown-tiles flex">
                <div id="cd-hour-1" class="countdown-tile">0</div>
                <div id="cd-hour-2" class="countdown-tile">0</div>
              </div>
              <div class="countdown-subtitle">sati</div>
            </div>
            <div class="countdown-day-divider center">:</div>
            <div class="countdown-day-block center">
              <div class="countdown-tiles flex">
                <div id="cd-min-1" class="countdown-tile">0</div>
                <div id="cd-min-2" class="countdown-tile">0</div>
              </div>
              <div class="countdown-subtitle">minuta</div>
            </div>
            <div class="countdown-day-divider center">:</div>
            <div class="countdown-day-block center">
              <div class="countdown-tiles flex">
                <div id="cd-sec-1" class="countdown-tile">0</div>
                <div id="cd-sec-2" class="countdown-tile">0</div>
              </div>
              <div class="countdown-subtitle">sekundi</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </app-link>
</template>

<script>
export default {
  name: 'HometopBf',
  data() {
    return {
      counter: null,
      show: false,
      showA: false,
      title:
        'Platite 1 godinu Premium pretplate bez reklama i dobivate 2 godine!',
      cta: 'Iskoristite ponudu!',
      overtitle: 'Black Friday na Telegramu',
      subtitle: 'Ponuda je ograničena. Požurite!',
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('piano_header_bf', this.load)
      if (this.showA) {
        setTimeout(() => {
          if (this.$store.state.user.access) {
            this.showA = false
            return
          }
          if (this.show) {
            return
          }
          this.showA = false
        }, 500)
      }
    })
  },
  destroyed() {
    window.removeEventListener('piano_header', this.load)
    this.counter = null
  },
  methods: {
    createCounter() {
      // Countdown
      const countDownDate = new Date('Nov 30, 2024 23:59:59').getTime()
      this.counter = setInterval(function () {
        const now = new Date().getTime()
        const distance = countDownDate - now

        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        const day2 = Math.floor((days % 100) / 10)
        const day3 = Math.floor(days % 10)

        const hour1 = Math.floor(hours / 10)
        const hour2 = Math.floor(hours % 10)

        const min1 = Math.floor(minutes / 10)
        const min2 = Math.floor(minutes % 10)

        const sec1 = Math.floor(seconds / 10)
        const sec2 = Math.floor(seconds % 10)

        document.getElementById('cd-day-2').innerHTML = day2
        document.getElementById('cd-day-3').innerHTML = day3

        document.getElementById('cd-hour-1').innerHTML = hour1
        document.getElementById('cd-hour-2').innerHTML = hour2

        document.getElementById('cd-min-1').innerHTML = min1
        document.getElementById('cd-min-2').innerHTML = min2

        document.getElementById('cd-sec-1').innerHTML = sec1
        document.getElementById('cd-sec-2').innerHTML = sec2
        if (distance < 0) {
          clearInterval(this.counter)
        }
      }, 1000)
    },
    load(e) {
      if (e.detail) {
        this.title = e.detail.title
        this.subtitle = e.detail.subtitle
        this.cta = e.detail.cta
        this.show = true
        this.showA = true
        this.createCounter()
      }
    },
  },
}
</script>
