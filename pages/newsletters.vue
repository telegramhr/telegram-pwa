<template>
  <div class="main-container flex">
    <div class="full flex tg-red">
      <client-only>
        <theader></theader>
      </client-only>
    </div>
    <div class="full flex pretplata-page">
      <div class="full flex relative pretplata-page-content">
        <div
          class="container relative flex mobile-side-pad stretch column-full-pad"
        >
          <h1 class="full center-text">Telegram, svaki dan, u vašem inboxu.</h1>
          <p class="full center-text pretplata-tagline">
            Lorem ipsum dolor sit amet sit lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
    <div class="full flex relative">
      <div
        class="container newsletters-list flex relative stretch mobile-side-pad"
      >
        <div class="third flex-responsive column-full-pad flex stretch">
          <div class="full newsletter-listing relative stretch">
            <div class="full flex newsletter-header">
              <div class="newsletter-avatar newsletter-dnevni">
                <img
                  src="@/assets/img/tg_newsletter_avatars_dnevni.png"
                  aria-hidden="true"
                />
              </div>
              <div class="full relative">
                <h3 class="full overtitle">Svaki dan</h3>
                <h2 class="full newsletter-title">Dnevni Telegram</h2>
                <h3 class="full subtitle">Personaliziran za čitatelja</h3>
              </div>
            </div>
            <div class="full flex newsletter-box">
              <p class="full newsletter-intro">
                Iz dana u dan, Telegramovi nagrađivani novinari, analitičari i
                istraživači donose važne i velike priče o Hrvatskoj i svijetu,
                otkrivaju krupne afere radi kojih odlaze ministri i objašnjavaju
                kontekst dnevnih događaja.
              </p>
              <div class="btn animate btn-unsub">Odjavi me</div>
            </div>
          </div>
        </div>
        <div class="third flex-responsive column-full-pad flex stretch">
          <div class="full newsletter-listing relative stretch">
            <div class="full flex newsletter-header">
              <div class="newsletter-avatar newsletter-tjedni">
                <img
                  src="@/assets/img/tg_newsletter_avatars_tjedni.png"
                  aria-hidden="true"
                />
              </div>
              <div class="full relative">
                <h3 class="full overtitle">Svaki dan</h3>
                <h2 class="full newsletter-title">Tjedni Telegram</h2>
                <h3 class="full subtitle">Kuriraju naši autori</h3>
              </div>
            </div>
            <div class="full flex newsletter-box">
              <p class="full newsletter-intro">
                Iz dana u dan, Telegramovi nagrađivani novinari, analitičari i
                istraživači donose važne i velike priče o Hrvatskoj i svijetu,
                otkrivaju krupne afere radi kojih odlaze ministri i objašnjavaju
                kontekst dnevnih događaja.
              </p>
              <div class="btn animate">Prijavi me</div>
            </div>
          </div>
        </div>
        <div class="third flex-responsive column-full-pad flex stretch">
          <div class="full newsletter-listing relative stretch">
            <div class="full flex newsletter-header">
              <div class="newsletter-avatar newsletter-tag">
                <img
                  src="@/assets/img/tg_newsletter_avatars_user.png"
                  aria-hidden="true"
                />
              </div>
              <div class="full relative">
                <h3 class="full overtitle">Svaki dan</h3>
                <h2 class="full newsletter-title">Teme za Vas</h2>
                <h3 class="full subtitle">Personaliziran za čitatelja</h3>
              </div>
            </div>
            <div class="full flex newsletter-box">
              <p class="full newsletter-intro">
                Iz dana u dan, Telegramovi nagrađivani novinari, analitičari i
                istraživači donose važne i velike priče o Hrvatskoj i svijetu,
                otkrivaju krupne afere radi kojih odlaze ministri i objašnjavaju
                kontekst dnevnih događaja.
              </p>
              <div class="btn animate btn-unsub">Odjavi me</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'Newsletters',
}
</script>

<style scoped>
.newsletter-listing {
  padding-top: 36px;
}
.newsletter-header {
  flex-wrap: nowrap;
  padding: 16px;
  align-items: flex-end;
}
.newsletter-box {
  margin-top: -48px;
  border: 1px solid #c8c8c8;
  padding: 16px;
  padding-top: 42px;
}
.newsletter-header > .full {
  width: auto;
}
.newsletter-avatar {
  padding: 8px;
  width: 100px;
  height: 100px;
  z-index: 5;
  background-color: #f8c889;
  margin-right: 16px;
}
.newsletter-avatar img {
  object-fit: contain;
}
.newsletter-tjedni {
  background-color: #c4ded8;
}
.newsletter-header .overtitle,
.newsletter-header .subtitle {
  font-size: 11px;
  padding-left: 1px;
  font-size: 0.55rem;
  text-transform: uppercase;
}
.newsletter-header .overtitle {
  color: #ae3737;
  margin-bottom: 4px;
}
.newsletter-header .subtitle {
  padding-top: 16px;
  opacity: 0.5;
  padding-bottom: 8px;
}
.newsletter-tag {
  background-color: #c4decf;
}
.newsletter-title {
  font-size: 2rem;
  letter-spacing: -0.05em;
}
.newsletter-box .btn {
  margin-top: 16px;
  cursor: pointer;
  background-color: #ae3737;
  color: white;
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 13px;
  font-size: 0.65rem;
  padding: 5px 20px;
}
.newsletter-box .btn-unsub {
  border: 1px solid #111;
  background-color: transparent;
  color: #111;
}
.newsletter-box p {
  line-height: 1.55em;
  color: #333;
}
@media screen and (max-width: 1025px) {
  .newsletter-title {
    font-size: 1.6rem;
  }
}
</style>
