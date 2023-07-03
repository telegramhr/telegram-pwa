<template>
  <div class="main-container flex single-article birati-stranu">
    <div class="full flex">
      <theader headline="Nekad je nužno odabrati stranu."></theader>
    </div>
    <!-- Title element -->
    <div class="full flex relative birati-stranu-header darkened-bg">
      <h1 class="full center-text">
        <span data-aos="fade-up" data-aos-delay="0" data-aos-duration="750"
          >Nekad je nužno</span
        ><span data-aos="fade-up" data-aos-delay="1250" data-aos-duration="750">
          odabrati stranu.</span
        >
      </h1>
      <img
        src="@/assets/img/tg_visual_biratistranu_normal.jpg"
        class="light-mode-only"
        alt="Grafika moćnika koje je raskrinalo Telegramovo istraživačko novinarstvo"
      />
      <img
        src="@/assets/img/tg_visual_biratistranu_dark.jpg"
        class="dark-mode-only"
        alt="Grafika moćnika koje je raskrinalo Telegramovo istraživačko novinarstvo"
      />
      <img
        src="@/assets/img/tg_visual_biratistranu_contrast.jpg"
        class="contrast-mode-only"
        alt="Grafika moćnika koje je raskrinalo Telegramovo istraživačko novinarstvo"
      />
      <p class="full center-text desktop-only birati-stranu-note">
        Svaki novi pretplatnik omogućit će Telegramu da proširi listu
        raskrinkanih moćnika
      </p>
    </div>
    <!-- Manifesto article -->
    <div class="full flex single-article relative">
      <article
        id="article-body"
        class="container column-full-pad mobile-full-pad flex relative mobile-side-pad"
      >
        <p
          class="full center-text mobile-only birati-stranu-note"
          data-aos="flip-up"
          data-aos-delay="1750"
          data-aos-duration="500"
        >
          Svaki novi pretplatnik omogućit će Telegramu da proširi listu
          raskrinkanih moćnika
        </p>
        <div class="full relative single-article-body birati-stranu-body">
          <p>
            Jedna od većih čovjekovih zabluda, ona je da naprosto možeš okrenuti
            glavu. Da je bolje šutjeti i ništa ne kazati, da je ludost nešto
            pokušati promijeniti. Posebno ovdje.
          </p>
          <p>Nešto stvoriti. Napraviti. Pokrenuti. Da to mogu samo lunatici.</p>
          <p>
            Ali nekad, nekad ludost ima smisla. Nekad je veća ludost ne
            pokušati.
          </p>
          <p>
            Jer svaki potez kista, svaka priča i svaka nota, svaka lopta i svaka
            afera, koliko god djelovali maleno i nevažno, mijenjaju stvari.
          </p>
          <p>
            Razotkrivaju i afirmiraju, potiču i avansiraju. Kap po kap, korak po
            korak, guraju nas naprijed. I zato, ludost nekad itekako ima smisla.
          </p>
          <p>Nekad se moraš odlučiti za što jesi. I za što nisi.</p>
          <p>Što možeš suportirati i čemu se moraš suprostaviti.</p>
          <p>Nekad ne možeš okrenuti glavu. Nekad je nužno odabrati stranu.</p>
        </div>
      </article>
    </div>
    <!-- CTA widget -->
    <div class="full flex relative darkened-bg">
      <div class="container column-full-pad mobile-full-pad flex relative">
        <p
          class="full center-text birati-stranu-title column-top-pad mobile-top-pad"
          data-aos="fade-down"
          data-aos-delay="0"
          data-aos-duration="500"
          data-aos-offset="250"
        >
          Nekad je nužno odabrati stranu.
        </p>
        <p
          class="full center-text birati-stranu-subtitle"
          data-aos="fade-up"
          data-aos-delay="1000"
          data-aos-duration="500"
          data-aos-offset="250"
        >
          Postanite Telegramov pretplatnik
        </p>
        <div
          class="full center column-vertical-pad mobile-vertical-pad"
          data-aos="flip-up"
          data-aos-delay="1500"
          data-aos-duration="750"
        >
          <app-link to="/pretplata" class="newbtn huge-newbtn"
            >Pretplatite se</app-link
          >
        </div>
        <div class="full center column-bottom-pad mobile-bottom-pad">
          <img
            src="@/assets/img/tg_visual_autori_lineup.png"
            alt="Neki od poznatih novinara i autora Telegrama"
          />
        </div>
        <p
          class="full column-vertical-pad mobile-vertical-pad center-text italic"
        >
          “Vodeće mjesto u Hrvatskoj za istraživačko novinarstvo” -
          Journalism.co.uk
        </p>
      </div>
    </div>
    <!-- Pretplatnici list -->
    <div class="full flex relative">
      <div class="container column-full-pad mobile-full-pad flex relative">
        <p
          class="full center-text column-vertical-pad mobile-vertical-pad birati-stranu-title"
        >
          <span>Pretplatnici Telegrama</span> <span>odabrali su stranu.</span>
        </p>
        <div class="full column-vertical-pad mobile-full-pad flex">
          <div
            class="half flex-responsive flex relative birati-stranu-pretplatnik"
            data-aos="fade-right"
            data-aos-delay="150"
            data-aos-duration="500"
            data-aos-offset="250"
          >
            <img
              src="@/assets/img/extras/pretplatnici/emil.jpg"
              alt="Emil Tedeschi - pretplatnik i poduzetnik"
            />
          </div>
          <div
            class="half flex-responsive flex relative birati-stranu-pretplatnik"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="500"
            data-aos-offset="250"
          >
            <img
              src="@/assets/img/extras/pretplatnici/maja.jpg"
              alt="Maja Sever - pretplatnica i novinarka"
            />
          </div>
          <div
            class="half flex-responsive flex relative birati-stranu-pretplatnik"
            data-aos="fade-right"
            data-aos-delay="150"
            data-aos-duration="500"
            data-aos-offset="250"
          >
            <img
              src="@/assets/img/extras/pretplatnici/rade.jpg"
              alt="Rade Šerbedžija - pretplatnik i umjetnik"
            />
          </div>
          <div
            class="half flex-responsive flex relative birati-stranu-pretplatnik"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="500"
            data-aos-offset="250"
          >
            <img
              src="@/assets/img/extras/pretplatnici/ivana.jpg"
              alt="Ivana Gadžić - pretplatnica i predsjednica Zagrebačke burze"
            />
          </div>
          <div
            class="half flex-responsive flex relative birati-stranu-pretplatnik"
            data-aos="fade-right"
            data-aos-delay="150"
            data-aos-duration="500"
            data-aos-offset="250"
          >
            <img
              src="@/assets/img/extras/pretplatnici/luka.jpg"
              alt="Luka Abrus - pretplatnik i poduzetnik"
            />
          </div>
          <div
            class="half flex-responsive flex relative birati-stranu-pretplatnik"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="500"
            data-aos-offset="250"
          >
            <img
              src="@/assets/img/extras/pretplatnici/cedo.jpg"
              alt="Čedo Prodanović - pretplatnik i odvjetnik"
            />
          </div>
          <div
            class="half flex-responsive flex relative birati-stranu-pretplatnik"
            data-aos="fade-right"
            data-aos-delay="150"
            data-aos-duration="500"
            data-aos-offset="250"
          >
            <img
              src="@/assets/img/extras/pretplatnici/ivanaS.jpg"
              alt="Ivana Šoljan - pretplatnica i poduzetnica"
            />
          </div>
          <div
            class="half flex-responsive flex relative birati-stranu-pretplatnik"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="500"
            data-aos-offset="250"
          >
            <img
              src="@/assets/img/extras/pretplatnici/tvrtko.jpg"
              alt="Tvrtko Jakovina - pretplatnik i povjesničar"
            />
          </div>
          <div
            class="half flex-responsive flex relative birati-stranu-pretplatnik"
            data-aos="fade-right"
            data-aos-delay="150"
            data-aos-duration="500"
            data-aos-offset="250"
          >
            <img
              src="@/assets/img/extras/pretplatnici/ankica.jpg"
              alt="Ankica Mamić - pretplatnica i PR stručnjakinja"
            />
          </div>
          <div
            class="half flex-responsive flex relative birati-stranu-pretplatnik"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="500"
            data-aos-offset="250"
          >
            <img
              src="@/assets/img/extras/pretplatnici/ivanaD.jpg"
              alt="Ivana Dragičević - pretplatnica i novinarka"
            />
          </div>
          <div
            class="half flex-responsive flex relative birati-stranu-pretplatnik"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="500"
            data-aos-offset="250"
          >
            <img
              src="@/assets/img/extras/pretplatnici/vuk.jpg"
              alt="Vuk Vuković - pretplatnik i ekonomist"
            />
          </div>
          <div
            class="half flex-responsive flex relative birati-stranu-pretplatnik"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="500"
            data-aos-offset="250"
          >
            <img
              src="@/assets/img/extras/pretplatnici/manuela.jpg"
              alt="Manuela Šola - pretplatnica i poduzetnica"
            />
          </div>
          <div
            class="half flex-responsive flex relative birati-stranu-pretplatnik"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="500"
            data-aos-offset="250"
          >
            <img
              src="@/assets/img/extras/pretplatnici/zeljko.jpg"
              alt="Željko Vela - pretplatnik i novinar"
            />
          </div>
          <div
            class="half flex-responsive flex relative birati-stranu-pretplatnik"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="500"
            data-aos-offset="250"
          >
            <img
              src="@/assets/img/extras/pretplatnici/majaV.jpg"
              alt="Maja Vehovec - pretplatnica i ekonomistica"
            />
          </div>
          <div
            class="half flex-responsive flex relative birati-stranu-pretplatnik"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="500"
            data-aos-offset="250"
          >
            <img
              src="@/assets/img/extras/pretplatnici/marko.jpg"
              alt="Marko Rakar - pretplatnik i IT stručnjak"
            />
          </div>
          <div
            class="half flex-responsive flex relative birati-stranu-pretplatnik"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="500"
            data-aos-offset="250"
          >
            <img
              src="@/assets/img/extras/pretplatnici/snjezana.jpg"
              alt="Snježana Prljić Samadržija - pretplatnica i rektorica Sveučilišta u Rijeci"
            />
          </div>
          <div
            class="half flex-responsive flex relative birati-stranu-pretplatnik"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="500"
            data-aos-offset="250"
          >
            <img
              src="@/assets/img/extras/pretplatnici/nebojsa.jpg"
              alt="Nebojša Taraba - pretplatnik i producent"
            />
          </div>
          <div
            class="half flex-responsive flex relative birati-stranu-pretplatnik"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="500"
            data-aos-offset="250"
          >
            <img
              src="@/assets/img/extras/pretplatnici/ivica.jpg"
              alt="Ivica Matošević - pretplatnik i vinar"
            />
          </div>
          <div
            class="half flex-responsive flex relative birati-stranu-pretplatnik"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="500"
            data-aos-offset="250"
          >
            <img
              src="@/assets/img/extras/pretplatnici/vesna.jpg"
              alt="Vesna Alaburić - pretplatnica i odvjetnica"
            />
          </div>
          <div
            class="half flex-responsive flex relative birati-stranu-pretplatnik"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="500"
            data-aos-offset="250"
          >
            <img
              src="@/assets/img/extras/pretplatnici/nevio.jpg"
              alt="Nevio Marasović - pretplatnik i redatelj"
            />
          </div>
          <div
            class="half flex-responsive flex relative birati-stranu-pretplatnik"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="500"
            data-aos-offset="250"
          >
            <img
              src="@/assets/img/extras/pretplatnici/vlatko.jpg"
              alt="Vlatko Silobrčić - pretplatnik i akademik"
            />
          </div>
          <div
            class="half flex-responsive flex relative birati-stranu-pretplatnik"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="500"
            data-aos-offset="250"
          >
            <img
              src="@/assets/img/extras/pretplatnici/mia.jpg"
              alt="Mia Biberović - pretplatnica i glavna urednica portala Netokracija"
            />
          </div>
          <div
            class="half flex-responsive flex relative birati-stranu-pretplatnik"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="500"
            data-aos-offset="250"
          >
            <img
              src="@/assets/img/extras/pretplatnici/davor.jpg"
              alt="Davor Bruketa - pretplatnik i marketinški stručnjak"
            />
          </div>
          <div
            class="half flex-responsive flex relative birati-stranu-pretplatnik"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="500"
            data-aos-offset="250"
          >
            <img
              src="@/assets/img/extras/pretplatnici/jelena.jpg"
              alt="Jelena Šuran - pretplatnica i poduzetnica"
            />
          </div>
          <div
            class="half flex-responsive flex relative birati-stranu-pretplatnik"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="500"
            data-aos-offset="250"
          >
            <img
              src="@/assets/img/extras/pretplatnici/ante.jpg"
              alt="Ante Mandić - pretplatnik i poduzetnik"
            />
          </div>
          <div
            class="half flex-responsive flex relative birati-stranu-pretplatnik"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="500"
            data-aos-offset="250"
          >
            <img
              src="@/assets/img/extras/pretplatnici/viktorija.jpg"
              alt="Viktorija Đurđek - pretplatnica i operna pjevačica"
            />
          </div>
          <div
            class="half flex-responsive flex relative birati-stranu-pretplatnik"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="500"
            data-aos-offset="250"
          >
            <img
              src="@/assets/img/extras/pretplatnici/borna.jpg"
              alt="Borna Sor - pretplatnik i satiričar"
            />
          </div>
          <div
            class="half flex-responsive flex relative birati-stranu-pretplatnik"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="500"
            data-aos-offset="250"
          >
            <img
              src="@/assets/img/extras/pretplatnici/ratko.jpg"
              alt="Ratko Rudić - pretplatnik i trener
"
            />
          </div>
          <div
            class="half flex-responsive flex relative birati-stranu-pretplatnik"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="500"
            data-aos-offset="250"
          >
            <img
              src="@/assets/img/extras/pretplatnici/branka.jpg"
              alt="Branka Bebić - pretplatnica i poduzetnica"
            />
          </div>
          <div
            class="half flex-responsive flex relative birati-stranu-pretplatnik"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="500"
            data-aos-offset="250"
          >
            <img
              src="@/assets/img/extras/pretplatnici/hrvoje.jpg"
              alt="Hrvoje Hribar - pretplatnik i redatelj"
            />
          </div>
          <a
            class="full clickable center-text italic"
            href="https://www.telegram.hr/native/stigao-je-novi-telegram/"
            target="_blank"
            >Pročitajte još izjava pretplatnika na našoj strani</a
          >
        </div>
      </div>
    </div>
    <!-- CTA widget -->
    <div class="full flex relative darkened-bg">
      <div class="container column-full-pad mobile-full-pad flex relative">
        <p
          class="full center-text column-top-pad mobile-top-pad birati-stranu-title"
          data-aos="fade-down"
          data-aos-delay="0"
          data-aos-duration="500"
          data-aos-offset="250"
        >
          Nekad je nužno odabrati stranu.
        </p>
        <p
          class="full center-text birati-stranu-subtitle birati-stranu-alt-subtitle"
          data-aos="fade-up"
          data-aos-delay="1000"
          data-aos-duration="500"
          data-aos-offset="250"
        >
          Paketi pretplate već od 5,16 EUR/mj.
        </p>
        <div
          class="full center column-vertical-pad mobile-vertical-pad"
          data-aos="flip-up"
          data-aos-delay="1500"
          data-aos-duration="750"
        >
          <app-link to="/pretplata" class="newbtn huge-newbtn"
            >Pretplatite se</app-link
          >
        </div>
      </div>
    </div>
    <!-- Big logo -->
    <div class="full flex relative">
      <div
        class="container column-vertical-pad mobile-vertical-pad center relative"
      >
        <div
          class="two-thirds center relative column-vertical-pad mobile-vertical-pad"
        >
          <img
            class="column-full-pad light-mode-only"
            src="@/assets/img/telegram_logo_black.svg"
            alt="Telegram logo"
          />
          <img
            class="column-full-pad contrast-mode-only"
            src="@/assets/img/telegram_logo_black.svg"
            alt="Telegram logo"
          />
          <img
            class="column-full-pad dark-mode-only"
            src="@/assets/img/telegram_logo_white.svg"
            alt="Telegram logo"
          />
        </div>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<style scoped>
.birati-stranu .container {
  max-width: 1048px;
}
.birati-stranu-header h1 {
  position: absolute;
  top: 4%;
  left: 0;
  text-align: center;
  width: 100%;
  font-family: 'Barlow', sans-serif;
  font-weight: 700;
  font-size: 48px;
  font-size: 2.4rem;
}
.birati-stranu-header p {
  position: absolute;
  bottom: 15%;
  left: 0;
}
.birati-stranu-note {
  font-family: 'Barlow', sans-serif;
  font-style: italic;
  font-size: 16px;
  font-size: 0.8rem;
  opacity: 0.7;
}
.birati-stranu-title {
  font-family: 'Barlow', sans-serif;
  font-size: 30px;
  font-size: 1.5rem;
  font-weight: bold;
}
.birati-stranu-title span {
  display: inline-block;
}
.birati-stranu-subtitle {
  font-family: 'Barlow', sans-serif;
  font-size: 30px;
  font-size: 1.48rem;
}
.birati-stranu-alt-subtitle {
  font-size: 27px;
  font-size: 1.36rem;
}
.birati-stranu-header {
  margin-bottom: -14vw;
}
.birati-stranu-body p {
  font-size: 21px;
  font-size: 1.05rem;
  line-height: 1.5em;
}
.birati-stranu-pretplatnik {
  padding-bottom: 24px;
}
.input-hidden {
  display: none;
}
input:checked ~ .input-hidden {
  display: flex;
}
@media screen and (min-width: 767px) {
  .birati-stranu-pretplatnik:nth-child(odd) {
    padding-right: 12px;
  }
  .birati-stranu-pretplatnik:nth-child(even) {
    padding-left: 12px;
  }
  .birati-stranu-header {
    margin-bottom: -10vw;
  }
}
@media screen and (max-width: 767px) {
  .birati-stranu-header {
    padding-top: 4vw;
  }
  .birati-stranu-header h1 {
    position: relative;
    font-size: 10vw;
  }
  .birati-stranu-note {
    position: relative;
    font-size: 15px;
    font-size: 0.75rem;
    padding-bottom: 24px;
  }
  .birati-stranu-title {
    font-family: 'Barlow', sans-serif;
    font-size: 24px;
    font-size: 1.2rem;
    font-weight: bold;
  }
  .birati-stranu-subtitle {
    font-family: 'Barlow', sans-serif;
    font-size: 24px;
    font-size: 1.18rem;
  }
  .birati-stranu-alt-subtitle {
    font-size: 21px;
    font-size: 1.08rem;
  }
  .birati-stranu-header img {
    width: 152vw;
    max-width: 152vw;
    left: -27vw;
    position: relative;
  }
  .birati-stranu-body p {
    font-size: 18px;
    font-size: 0.9rem;
    line-height: 1.45em;
  }
}
</style>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
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
  mounted() {
    AOS.init({
      once: true,
    })
  },
  head() {
    const link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.telegram.hr/pretplata/odabrati-stranu',
      },
    ]
    return {
      title: 'Nekad je nužno odabrati stranu',
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Postanite Telegramov pretplatnik',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Postanite Telegramov pretplatnik',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: 'https://www.telegram.hr/img/tg_share_odabrati_stranu.jpg',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Nekad je nužno odabrati stranu',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/pretplata/odabrati-stranu',
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
