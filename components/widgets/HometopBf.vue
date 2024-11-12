<template>
  <app-link
    to="/pretplata/black-friday"
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
            Ponuda je ograničena. Požurite!
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
      title:
        'Platite 1 godinu Premium pretplate bez reklama i dobivate 2 godine!',
      cta: 'Iskoristite ponudu!',
      overtitle: 'Black Friday na Telegramu',
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$route.query.checkout) {
        this.checkout('TMH4A5EB08L8')
      }
    })
    // Countdown
    const countDownDate = new Date('Nov 30, 2024 23:59:59').getTime()
    const x = setInterval(function () {
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
        clearInterval(x)
      }
    }, 1000)
  },
}
</script>
