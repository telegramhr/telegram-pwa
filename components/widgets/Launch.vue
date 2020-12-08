<template>
  <div
    id="animation_container"
    style="background-color: rgba(255, 255, 255, 1); width: 100%; height: 500px"
  >
    <a href="https://www.telegram.hr/native">
      <div class="full hero-element center relative">
        <video preload="auto" autoplay="" muted="" playsinline>
          <source
            src="https://www.telegram.hr/wp-content/themes/telegram2-desktop/templates/native/erste/tgneue/img/tg_header_countdown.mp4"
            type="video/mp4"
          />
        </video>
        <div class="full hero-content">
          <h1 class="full center-text">Stigao je novi Telegram.</h1>
          <div class="full center clock">
            <div class="clock-square">
              <div class="clock-figure">2</div>
            </div>
            <div class="clock-square">
              <div class="clock-figure">0</div>
            </div>
            <div class="clock-square">
              <div class="clock-figure third-clock-figure">1</div>
              <div class="clock-figure">2</div>
            </div>
            <div class="clock-square">
              <div class="clock-figure fourth-clock-figure">5</div>
              <div class="clock-figure">6</div>
              <div class="clock-figure">7</div>
              <div class="clock-figure">8</div>
              <div class="clock-figure">9</div>
              <div class="clock-figure">0</div>
            </div>
          </div>
        </div>
        <div class="btn">Pročitaj naš specijal</div>
        <div class="full center george-2">
          <h3 class="full center-text powered-by">Powered by</h3>
          <img
            src="https://www.telegram.hr/wp-content/themes/telegram2-desktop/templates/native/erste/tgneue/img/george_full_logo.svg"
            aria-hidden="true"
          />
        </div>
      </div>
      <div
        id="dom_overlay_container"
        style="
          pointer-events: none;
          overflow: hidden;
          width: 100%;
          height: 500px;
          position: absolute;
          left: 0px;
          top: 0px;
          display: block;
        "
      ></div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Launch',
}
</script>
