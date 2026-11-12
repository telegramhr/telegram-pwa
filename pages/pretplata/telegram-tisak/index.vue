<template>
  <div class="tisak">
    <TisakHeader />

    <main>
      <section class="tt-hero">
        <div class="tt-container tt-hero__inner">
          <div class="tt-hero__stack" aria-hidden="true">
            <img
              v-for="n in [1, 2, 3]"
              :key="n"
              :class="`tt-hero__paper tt-hero__paper--${n}`"
              :src="img(`hero/paper-${n}.webp`)"
              :srcset="`${img(`hero/paper-${n}-sm.webp`)} 618w, ${img(
                `hero/paper-${n}.webp`
              )} 1236w`"
              sizes="(min-width: 900px) 440px, 94vw"
              alt=""
              width="1236"
              height="1179"
              :fetchpriority="n === 3 ? 'high' : null"
            />
          </div>
          <h1 class="tt-hero__title">
            Samo istina. Svakog jutra na&nbsp;Vašim vratima.
          </h1>
          <p class="tt-hero__lead">
            Predstavljamo dnevni Telegram, ozbiljne, neovisne i kvalitetne
            novine. Jer neke stvari važno je dokumentirati.
          </p>
        </div>
      </section>

      <section id="pretplata" class="tt-plans" aria-label="Pretplata">
        <div class="tt-container">
          <div class="tt-plans__grid">
            <article
              v-for="plan in plans"
              :key="plan.id"
              class="tt-plan"
              :class="{ 'tt-plan--best': plan.id === 'godisnja' }"
            >
              <p v-if="plan.id === 'godisnja'" class="tt-plan__pill">
                Najbolja vrijednost
              </p>
              <h3 class="tt-plan__price">
                <strong>{{ eur(plan.price) }}</strong>
                <span>{{ plan.per }}</span>
              </h3>
              <TgButton
                class="tt-btn tt-btn--outline tt-plan__btn"
                :href="`/pretplata/telegram-tisak/podaci/?plan=${plan.id}`"
                @click.native.prevent="choose(plan.id)"
              >
                Pretplatite se
              </TgButton>
              <p class="tt-plan__cancel">Otkažite kad god želite.</p>
              <ul class="tt-plan__list">
                <li>Najbolji autori u Hrvatskoj</li>
                <li>Ekskluzivne priče, analize i otkrića</li>
                <li>Šest brojeva tjedno, od ponedjeljka do subote</li>
                <li>Dostava uključena u cijenu</li>
              </ul>
            </article>
          </div>
          <p class="tt-plans__fine">
            Pretplatu možete kupiti i za nekog drugog. Ako ne prikupimo dovoljno
            pretplatnika za pokretanje tiskanog izdanja, uplaćeni iznos vraćamo
            u cijelosti.
          </p>
        </div>
      </section>

      <section class="tt-why" aria-labelledby="why-title">
        <div class="tt-container tt-why__grid">
          <h2 id="why-title" class="tt-why__title">
            Neke stvari u Hrvatskoj treba dokumentirati. Stvari kao što su afere
            i društvene anomalije.
          </h2>
          <div class="tt-why__body">
            <p>
              Brojni pretplatnici pitali su nas zašto Telegram nema tiskano
              izdanje. Neki ne mogu bez jutarnjeg listanja uz kavu. Neki žele u
              miru, bez distrakcija na internetu, čitati Dragu Hedla, Doru
              Kršul, Jasmina Klarića, Silvanu Menđušić ili Sanju Modrić. Neki
              imaju roditelje koji ne mogu bez tiska.
            </p>
            <p>
              A mnogi bi voljeli da u Hrvatskoj postoje ozbiljne, kvalitetne i
              neovisne novine koje financiraju čitatelji, a ne moćnici na
              vlasti. Koje slobodno razotkrivaju i dokumentiraju sve koruptivne
              afere, zataškane istine i društvene anomalije. Pozivamo Vas da nam
              pomognete pokrenuti ih.
            </p>
          </div>
        </div>
        <div class="tt-container tt-authors">
          <div class="tt-authors__card">
            <h3 class="tt-authors__title">Za Telegram pišu</h3>
            <ul class="tt-authors__list">
              <li
                v-for="author in authors"
                :key="author[0]"
                class="tt-authors__item"
              >
                <img
                  :src="img(`authors/${author[0]}.webp`)"
                  alt=""
                  width="160"
                  height="160"
                  loading="lazy"
                />
                <span>{{ author[1] }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="tt-faq" aria-labelledby="faq-title">
        <div class="tt-container tt-faq__grid">
          <h2 id="faq-title" class="tt-section-title">Česta pitanja</h2>
          <div class="tt-faq__list">
            <details>
              <summary>Kada stiže prvi broj?</summary>
              <p>
                Kad prikupimo dovoljno pretplatnika. Planiramo ga poslati za
                nekoliko tjedana, a točan datum javit ćemo Vam e-poštom.
              </p>
            </details>
            <details>
              <summary>Mogu li pretplatu kupiti za nekog drugog?</summary>
              <p>
                Da. Pri narudžbi upišite ime i adresu osobe kojoj novine trebaju
                stizati.
              </p>
            </details>
            <details>
              <summary>Kako se otkazuje pretplata?</summary>
              <p>
                Mjesečnu pretplatu možete otkazati u bilo kojem trenutku;
                vrijedi do kraja razdoblja koje ste platili.
              </p>
            </details>
            <details>
              <summary>Kako mogu platiti? Može li R1 račun?</summary>
              <p>
                Karticom (Visa, Mastercard, Apple Pay, Google Pay) ili
                uplatnicom. R1 račun za tvrtku zatražite pri narudžbi, uz naziv
                tvrtke i OIB.
              </p>
            </details>
            <details>
              <summary>Mogu li vas direktno kontaktirati?</summary>
              <p>
                Ako nas želite kontaktirati direktno, javite nam se na
                <a href="mailto:pretplata@telegram.hr">pretplata@telegram.hr</a
                >.
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>

    <TisakFooter />
  </div>
</template>

<script>
import { PLANS, eur } from '~/utils/tisak'

export default {
  name: 'TelegramTisak',
  data() {
    return {
      plans: [PLANS.mjesecna, PLANS.godisnja],
      authors: [
        ['hedl', 'Drago Hedl'],
        ['krsul', 'Dora Kršul'],
        ['klaric', 'Jasmin Klarić'],
        ['mendusic', 'Silvana Menđušić'],
        ['modric', 'Sanja Modrić'],
        ['mahmutovic', 'Denis Mahmutović'],
        ['maric', 'Jagoda Marić'],
        ['durovic', 'Đivo Đurović'],
        ['jakovina', 'Tvrtko Jakovina'],
        ['frlan', 'Irena Frlan Gašparović'],
        ['plese', 'Mladen Pleše'],
        ['markovina', 'Dragan Markovina'],
        ['fizulic', 'Goranko Fižulić'],
        ['redzepovic', 'Goran Redžepović'],
        ['holiga', 'Aleksandar Holiga'],
      ],
    }
  },
  methods: {
    eur,
    img(path) {
      return require(`~/assets/img/pretplata/telegram-tisak/${path}`)
    },
    choose(plan) {
      this.$router.push({
        path: '/pretplata/telegram-tisak/podaci/',
        query: { plan },
      })
    },
  },
  head() {
    const title = 'Tiskani Telegram – pretplata'
    const description =
      'Samo istina. Svakog jutra na Vašim vratima. Dnevni Telegram, 39 € mjesečno ili 399 € godišnje, dostava uključena.'
    const url = 'https://www.telegram.hr/pretplata/telegram-tisak/'
    // Share previews need a fixed absolute URL, so this one copy stays in
    // static/; every image on the page itself comes from assets/.
    const image =
      'https://www.telegram.hr/img/pretplata/telegram-tisak-share.webp'
    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:description', name: 'og:description', content: description },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:image', property: 'og:image', content: image },
        { hid: 'og:url', property: 'og:url', content: url },
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: url },
        {
          hid: 'font-instrument-serif',
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Instrument+Serif&display=swap',
        },
      ],
    }
  },
}
</script>

<style src="~/assets/telegram-tisak.css"></style>
