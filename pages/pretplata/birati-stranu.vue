<template>
  <div class="main-container flex single-article birati-stranu">
    <div class="full flex">
      <theader headline="Nekad je nužno odabrati stranu."></theader>
    </div>
    <!-- Title element -->
    <div class="full flex relative odabir-title">
      <div class="container flex relative column-full-pad mobile-side-pad">
        <div class="full flex">
          <h1 class="full center-text">
            <span class="animate">Nekad je nužno</span
            ><span class="animate"> odabrati stranu.</span>
          </h1>
        </div>
      </div>
    </div>
    <!-- Manifesto and CTA -->
    <div class="full flex relative">
      <div
        class="container flex relative column-full-pad mobile-side-pad mobile-bottom-pad"
      >
        <div class="full center-text odabir-manifesto">
          <p>
            <span>
              Jedna od većih čovjekovih zabluda, ona je da naprosto možeš
              okrenuti glavu.
            </span>
          </p>
          <p>
            <span>
              Da je bolje šutjeti i ništa ne kazati. Da je ludost nešto pokušati
              promijeniti. Posebno ovdje.
            </span>
          </p>
          <p>
            <span>
              Nešto stvoriti. Napraviti. Kreirati. Da se u to mogu upuštati samo
              lunatici.
            </span>
          </p>
          <p>
            <span>
              Ali nekad, nekad ludost ima smisla. Nekad je veća ludost ne
              pokušati.
            </span>
          </p>
          <p>
            <span>
              Jer svaki potez kista, svaka priča i svaka nota, svaka lopta i
              svaka afera, koliko god djelovali maleno i nevažno, mijenjaju
              stvari.
            </span>
          </p>
          <p><span>Razotkrivaju i afirmiraju, potiču i avansiraju.</span></p>
          <p>
            <span>
              Kap po kap, korak po korak, guraju nas naprijed. <br />I zato,
              ludost nekad itekako ima smisla.
            </span>
          </p>
          <p>
            <span>Nekad se moraš odlučiti za što jesi. I za što nisi.</span>
          </p>
          <p>
            <span>Što možeš suportirati i čemu se moraš suprostaviti.</span>
          </p>
          <p><span>Nekad ne možeš okrenuti glavu.</span></p>
          <p class="bold"><span>Nekad je nužno odabrati stranu.</span></p>
        </div>
        <div class="full center relative column-vertical-pad mobile-top-pad">
          <app-link to="/pretplata" class="newbtn huge-newbtn"
            >Postanite Telegramov pretplatnik</app-link
          >
        </div>
      </div>
    </div>
    <!-- Key players -->
    <div class="full flex relative">
      <div class="container flex relative column-full-pad mobile-side-pad">
        <div class="full center uglednik-tile relative column-full-pad">
          <img
            src="https://telegram.hr/wp-content/themes/telegram2-desktop/templates/native/erste/tgneue/img/grlic1-1.png?ver=2.0"
            alt="Rajko Grlić"
          />
          <p class="full uglednik-quote">
            Telegram je jedan od rijetkih portala koji pogledam, svakodnevno,
            zato što mi odgovara cijeli koncept. Kroz članke izbija i političko
            opredjeljenje koje mi se čini prihvatljivo. Najupečatljivije je bilo
            kada ste počeli skidati ministre, jednog po jednog. To je bilo
            uzbudljivo i dokaz da možda ima neka iluzija nade u ovoj zemlji.
            Mislim da je to bila jedna ozbiljna novinarska rabota koju ste
            radili. Najviše čitam tekstove vezane uz kulturu, a najčešće Mladena
            Plešea i Dragu Hedla. Mislim da ste totalno drugačiji od ostalih
            portala, jednostavniji i politički nekako, što bi se reklo u
            socijalizmu, napredniji. Jako je zdravo da postoji Telegram.
          </p>
          <p class="full uglednik-name">Rajko Grlić</p>
        </div>
        <div class="full center uglednik-tile relative column-full-pad">
          <img
            src="https://www.telegram.hr/wp-content/themes/telegram2-desktop/templates/native/erste/tgneue/img/sprajc.png?ver=2.0"
            alt="Zoran Šprajc"
          />
          <p class="full uglednik-quote">
            Telegram je učinio internetsko novinarstvo zanimljivijim. Pokazao da
            ne mora biti nižeg reda i niže razine, da može biti ozbiljno, ako ne
            i ozbiljnije od takozvanih tradicionalnih medija. Letvicu
            istraživačkog novinarstva podignuli ste dosta visoko. Telegram čitam
            dva puta dnevno, najčešće kolumne o politici i kriminalu. Drugo što
            čitam su tekstovi kolege Andreja Dimitrijevića, jer ga znam i kao
            novinara Direkta, pa znam kada napiše nešto na Telegramu, nekom će
            se stolica zatresti.
          </p>
          <p class="full uglednik-name">Zoran Šprajc</p>
        </div>
      </div>
    </div>
    <!-- Another CTA -->
    <div
      class="full center relative column-bottom-pad mobile-bottom-pad mobile-top-pad mobile-side-pad"
    >
      <app-link to="/pretplata" class="newbtn huge-newbtn"
        >Postanite Telegramov pretplatnik</app-link
      >
    </div>
    <!-- Articles -->
    <div class="full flex relative">
      <div
        class="container flex relative column-full-pad mobile-side-pad mobile-bottom-pad"
      >
        Članci...
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<style scoped>
.birati-stranu {
  font-family: 'Barlow', sans-serif;
}
.birati-stranu .huge-newbtn {
  font-size: 20px;
  font-size: 1rem;
  padding: 12px 24px;
  padding-top: 12px;
  padding-top: 11px;
}
.uglednik-tile {
  background-color: rgba(0, 0, 0, 0.07);
  padding-right: 15%;
  min-height: 250px;
  flex-wrap: wrap;
  overflow: hidden;
  margin-bottom: 24px;
}
.uglednik-tile:last-child {
  margin-bottom: 0px;
}
.uglednik-tile img {
  filter: grayscale(100);
  position: absolute;
  bottom: 0;
  right: -17.5%;
  width: 35%;
  max-height: 100%;
  height: auto;
  object-fit: contain;
  object-position: bottom left;
}
.uglednik-name {
  font-weight: 400;
  opacity: 0.5;
  margin-top: 16px;
}
.uglednik-quote {
  font-weight: 300;
  font-size: 24px;
  font-size: 1.2rem;
}
.odabir-title h1 {
  font-size: 3rem;
  margin-top: 25vh;
  margin-bottom: 5vh;
}

.odabir-title h1 span.animate {
  opacity: 0;
}
.odabir-title h1 span.animate:first-child {
  animation: reveal-anim 1s ease-in-out 0.5s 1 forwards;
}
.odabir-title h1 span.animate:nth-child(2) {
  animation: reveal-anim 1s ease-in-out 2s 1 forwards;
}
.birati-stranu .container {
  max-width: 964px;
}
.odabir-manifesto p {
  background-color: rgba(0, 0, 0, 0.07);
  font-size: 26px;
  font-size: 1.3rem;
  line-height: 1.33341em;
  letter-spacing: 0.009em;
  padding: 16px;
  margin-bottom: 20px;
}
.odabir-manifesto p:last-child {
  margin-bottom: 0px;
}
.odabir-manifesto p span {
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  opacity: 0;
}
.odabir-manifesto p:first-child span {
  animation: reveal-anim 1s ease-in-out 4s 1 forwards;
}
.odabir-manifesto p:nth-child(2) span {
  animation: reveal-anim 1s ease-in-out 5.5s 1 forwards;
}
.odabir-manifesto p:nth-child(3) span {
  animation: reveal-anim 1s ease-in-out 7s 1 forwards;
}
.odabir-manifesto p:nth-child(4) span {
  animation: reveal-anim 1s ease-in-out 8.5s 1 forwards;
}
.odabir-manifesto p:nth-child(5) span {
  animation: reveal-anim 1s ease-in-out 10s 1 forwards;
}
.odabir-manifesto p:nth-child(6) span {
  animation: reveal-anim 1s ease-in-out 11.5s 1 forwards;
}
.odabir-manifesto p:nth-child(7) span {
  animation: reveal-anim 1s ease-in-out 13s 1 forwards;
}
.odabir-manifesto p:nth-child(8) span {
  animation: reveal-anim 1s ease-in-out 15s 1 forwards;
}
.odabir-manifesto p:nth-child(9) span {
  animation: reveal-anim 1s ease-in-out 17s 1 forwards;
}
.odabir-manifesto p:nth-child(10) span {
  animation: reveal-anim 1s ease-in-out 18.5s 1 forwards;
}
.odabir-manifesto p:nth-child(11) span {
  animation: reveal-anim 1s ease-in-out 20s 1 forwards;
}

@keyframes reveal-anim {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media screen and (max-width: 767px) {
  .odabir-title h1 {
    font-size: 10vw;
  }
  .odabir-manifesto p,
  .uglednik-quote {
    font-size: 18px;
    font-size: 0.9rem;
  }
  .uglednik-tile {
    padding: 4vw;
    padding-right: 15%;
    margin-bottom: 4vw;
  }
  .birati-stranu .huge-newbtn {
    width: 100%;
    margin-bottom: 8vw;
  }
}
</style>

<script>
export default {
  name: 'Dojave',
  data() {
    return {
      loading: false,
      posts: [],
      page: 1,
      email: '',
      thanks: false,
    }
  },
  head() {
    const link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.telegram.hr/birati-stranu',
      },
    ]
    return {
      title: 'Nekad je nužno odabrati stranu.',
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Postanite Telegramov pretplatnik.',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Postanite Telegramov pretplatnik.',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Telegram Dojave',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/birati-stranu',
        },
        {
          hid: 'fb:app_id',
          property: 'fb:app_id',
          content: '1383786971938581',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@TelegramHR',
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'index, follow',
        },
      ],
      link,
    }
  },
}
</script>
