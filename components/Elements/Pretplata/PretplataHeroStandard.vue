<script>
export default {
  name: 'PretplataHeroStandard',
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    highlightedText: {
      type: String,
      required: true,
    },
    button: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    disclaimer: {
      type: String,
      required: true,
    },
  },
}
</script>
<template>
  <div class="wrapper">
    <div class="left-container">
      <div class="left-wrapper">
        <img
          class="telegram-logo"
          src="@/assets/img/telegram_logo_black.svg"
          alt="Telegram Logo"
        />
        <div class="text-wrapper-desktop">
          <h1 class="title">{{ title }}</h1>
          <p class="subtitle">
            {{ text }}
            <span style="font-weight: 700">{{ highlightedText }}</span>
            tjedno.
          </p>
          <button href="#pretplataPayment" class="subscribe-btn">
            {{ button }}
          </button>
        </div>
        <p class="disclaimer">
          {{ disclaimer }}
        </p>
      </div>
    </div>
    <div class="main">
      <div class="content-wrapper">
        <div class="text-wrapper">
          <h1>{{ title }}</h1>
          <p>
            {{ text }}
            <span style="font-weight: 700">{{ highlightedText }}</span> tjedno.
          </p>
          <button class="subscribe-btn">{{ button }}</button>
        </div>
        <div class="listen-wrapper">
          <div class="listen-section">
            <button class="listen-button">
              <img src="@/assets/img/pretplata/standard/play.png" alt="" />
              Poslušajte ovaj članak
              <span class="duration"> • {{ duration }}</span>
            </button>
            <div class="share-section">
              <button class="gift">
                <img src="@/assets/img/pretplata/standard/gift.png" alt="" />
                Poklonite članak
              </button>
              <button class="comments">
                <img src="@/assets/img/pretplata/standard/comment.png" alt="" />
                24
              </button>
              <button class="share">
                <img src="@/assets/img/pretplata/standard/share.png" alt="" />
              </button>
            </div>
          </div>
        </div>
        <div class="images">
          <img
            class="iphone"
            src="@/assets/img/pretplata/standard/iphone.png"
            alt="Iphone"
          />
          <img
            class="macbook"
            src="@/assets/img/pretplata/standard/macbook-desktop.png"
            alt="Macbook"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.main {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 32px;
  background: radial-gradient(
    50.13% 47.95% at 50.13% 47.85%,
    #3c82b3 0%,
    #041c2c 100%
  );
}
.left-container {
  display: none;
}
.content-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  color: white;
  gap: 20px;
}
.content-wrapper h1 {
  text-align: center;
  font-size: 28px;
  line-height: 32px;
  font-weight: 500;
  font-family: 'Lora', serif;
  color: white;
}
.text-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 16px;
}
.text-wrapper p {
  text-align: center;
  font-size: 18px;
  line-height: 24px;
  font-family: 'Barlow', sans-serif;
  color: white;
}
.subscribe-btn {
  background-color: #217613;
  color: white;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  padding: 12px 14px;
  border: none;
  width: fit-content;
  border-radius: 10px;
  margin: 0 auto;
  cursor: pointer;
  transition: background-color 0.2s;
}
.subscribe-btn:hover {
  background-color: #1a5e0f;
}
.listen-wrapper {
  padding: 0 16px;
}
.duration {
  display: none;
}
.listen-section {
  display: flex;
  flex-direction: row;
  gap: 28px;
  width: fit-content;
  justify-content: space-between;
  padding: 9px 7px;
  margin: 0 auto;
  border-radius: 6px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(153, 153, 153, 0.15) 100%
  );
}
.listen-section button {
  background-color: transparent;
  color: white;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
  align-items: center;
}
.listen-button {
  display: flex;
  flex-direction: row;
  gap: 4px !important;
  font-size: 10px;
  line-height: 17px;
  cursor: pointer;
}
.listen-button img {
  width: 17px;
  height: 17px;
}
.share-section {
  display: flex;
  flex-direction: row;
  gap: 4px;
}
.share-section button {
  border: 0.53px solid white;
  border-radius: 9px;
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  font-size: 8px;
  line-height: 14px;
  cursor: pointer;
  transition: background-color 0.2s;
}
.share-section button:hover {
  background-color: rgba(255, 255, 255, 0.15);
}
.share-section button img {
  width: 10px;
  height: 10px;
}
.share-section .share {
  border-radius: 99999px;
  padding: 0 4px;
}
.images {
  position: relative;
  min-height: 196px;
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
}
.images .iphone {
  position: absolute;
  bottom: 0px;
  left: 30px;
  width: 98px;
}
.images .macbook {
  position: absolute;
  bottom: -60px;
  right: -50px;
  width: 480px;
}
@media (min-width: 1024px) {
  .main {
    padding-top: 64px;
    flex: 1;
  }
  .wrapper {
    display: flex;
    flex-direction: row;
  }
  .left-container {
    display: flex;
    flex: 1;
    padding: 64px 67px 30px 0px;
    justify-content: end;
  }
  .telegram-logo {
    max-width: 156px;
  }
  .text-wrapper {
    display: none;
  }

  .text-wrapper-desktop {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .text-wrapper-desktop button {
    margin: 0;
  }
  .left-wrapper {
    display: flex;
    flex-direction: column;
    max-width: 381px;
    gap: 72px;
  }
  .listen-section {
    margin: 0;
  }
  .listen-button {
    font-size: 12px;
    line-height: 24px;
  }
  .share-section {
    gap: 8px;
  }
  .share-section button img {
    width: 16px;
    height: 16px;
  }
  .listen-button img {
    width: 24px;
    height: 24px;
  }
  .share-section button {
    font-size: 12px;
    line-height: 22px;
    border: 0.76px solid white;
    border-radius: 12px;
  }
  .left-container h1 {
    text-align: left;
    font-size: 40px;
    line-height: 46px;
    font-weight: 500;
    font-family: 'Lora', serif;
    color: #343434;
  }
  .left-container span {
    font-weight: 700;
  }
  .left-container p {
    text-align: left;
    font-size: 18px;
    line-height: 24px;
    font-family: 'Barlow';
    color: #343434;
  }
  .subscribe-btn {
    font-size: 16px;
    line-height: 20px;
    padding: 14px 20px;
    margin: 0px;
  }
  .listen-section {
    padding: 10px;
  }

  .left-container .disclaimer {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0%;
    color: #342f2f;
    font-family: 'Barlow', sans-serif;
  }
  .content-wrapper {
    padding-left: 86px;
  }
  .images {
    max-width: 700px;
    margin: 0px;
    min-height: 378px;
  }

  .images .iphone {
    display: block;
    position: absolute;
    bottom: -20px;
    right: 120px;
    left: auto;
    z-index: 10;
    width: 198px;
  }
  .images .macbook {
    position: absolute;
    bottom: 0px;
    left: -160px;
    right: auto;
    width: 580px;
  }
}
@media (min-width: 1024px) and (max-width: 1260px) {
  .content-wrapper {
    padding-left: 24px;
  }
  .images .iphone {
    left: auto;
    right: 30px;
    width: 178px;
  }
  .images .macbook {
    left: -100px;
    right: auto;
    width: 550px;
  }
}
@media (min-width: 1261px) {
  .duration {
    display: block;
  }
}
</style>
