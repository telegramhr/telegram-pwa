<template>
  <div class="main-container flex single-article alternative-single">
    <div class="full flex tg-red">
      <theader
        headline="Pretplatite se i podržite naše bespoštedno novinarstvo."
      ></theader>
    </div>
    <div class="full flex">
      <div class="full flex relative pretplata-page-content">
        <div
          class="container relative flex mobile-side-pad stretch column-full-pad"
        >
          <div class="full flex single-article-body">
            <h1 class="full center-text column-bottom-pad">
              Plaćanje uspješno: pretplata je sada aktivna.
            </h1>
            <p
              class="full center-text pretplata-tagline column-bottom-pad column-bottom-border column-bottom-margin mobile-vertical-pad mobile-bottom-border"
            >
              Hvala Vam što podržavate neovisno novinarstvo.
            </p>
            <h2 class="full">
              Idući korak: odaberite što želite primati na mail
            </h2>
            <p class="full">
              Vaša pretplata uključuje ove popularne newslettere:
            </p>
            <div class="full flex relative">
              <div
                class="full minicard newsletter-minicard darkened-bg flex relative"
              >
                <img
                  src="@/assets/img/tg_newsletter_avatars_dnevni.jpg"
                  aria-hidden="true"
                />
                <div class="full minicard-title">Dnevni Telegram</div>
                <div class="full minicard-text">
                  pregled najvažnijih vijesti, analiza i tema
                </div>
                <div class="minicard-input center">
                  <input id="dnevni" type="checkbox" class="cbx" checked />
                  <label class="check" for="dnevni">
                    <svg width="18px" height="18px" viewBox="0 0 18 18">
                      <path
                        d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"
                      ></path>
                      <polyline points="1 9 7 14 15 4"></polyline>
                    </svg>
                  </label>
                </div>
              </div>
              <div
                class="full minicard newsletter-minicard darkened-bg flex relative"
              >
                <img
                  src="@/assets/img/tg_newsletter_avatars_propustili.jpg"
                  aria-hidden="true"
                />
                <div class="full minicard-title">Možda ste propustili</div>
                <div class="full minicard-text">
                  naši najbolji tekstovi, personalizirani za Vas
                </div>
                <div class="minicard-input center">
                  <input id="propustili" type="checkbox" class="cbx" checked />
                  <label class="check" for="propustili">
                    <svg width="18px" height="18px" viewBox="0 0 18 18">
                      <path
                        d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"
                      ></path>
                      <polyline points="1 9 7 14 15 4"></polyline>
                    </svg>
                  </label>
                </div>
              </div>
              <div
                class="full minicard newsletter-minicard darkened-bg flex relative column-bottom-margin"
              >
                <img
                  src="@/assets/img/tg_newsletter_avatars_vikend.jpg"
                  aria-hidden="true"
                />
                <div class="full minicard-title">Vikend na Telegramu</div>
                <div class="full minicard-text">
                  izvrsno štivo tijekom vikenda
                </div>

                <div class="minicard-input center">
                  <input id="vikend" type="checkbox" class="cbx" checked />
                  <label class="check" for="vikend">
                    <svg width="18px" height="18px" viewBox="0 0 18 18">
                      <path
                        d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"
                      ></path>
                      <polyline points="1 9 7 14 15 4"></polyline>
                    </svg>
                  </label>
                </div>
              </div>
              <div
                class="full minicard newsletter-minicard darkened-bg flex relative"
              >
                <img
                  src="https://www.telegram.hr/wp-content/uploads/2018/07/tg_klaric.png"
                  aria-hidden="true"
                />
                <div class="full minicard-title">Jasmin Klarić</div>
                <div class="full minicard-text">
                  Puni članci Telegramovog političkog analitičara
                </div>
                <div class="minicard-input center">
                  <input id="klaric" type="checkbox" class="cbx" />
                  <label class="check" for="klaric">
                    <svg width="18px" height="18px" viewBox="0 0 18 18">
                      <path
                        d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"
                      ></path>
                      <polyline points="1 9 7 14 15 4"></polyline>
                    </svg>
                  </label>
                </div>
              </div>
              <div
                class="full minicard newsletter-minicard darkened-bg flex relative"
              >
                <img
                  src="https://www.telegram.hr/wp-content/uploads/2019/09/dora-krsul.png"
                  aria-hidden="true"
                />
                <div class="full minicard-title">Dora Kršul</div>
                <div class="full minicard-text">
                  Puni članci specijalizirani za školstvo i akademsku zajednicu
                </div>
                <div class="minicard-input center">
                  <input id="krsul" type="checkbox" class="cbx" />
                  <label class="check" for="krsul">
                    <svg width="18px" height="18px" viewBox="0 0 18 18">
                      <path
                        d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"
                      ></path>
                      <polyline points="1 9 7 14 15 4"></polyline>
                    </svg>
                  </label>
                </div>
              </div>
              <div
                class="full minicard newsletter-minicard darkened-bg flex relative"
              >
                <img
                  src="https://www.telegram.hr/wp-content/uploads/2017/09/drago_hedl-1.png"
                  aria-hidden="true"
                />
                <div class="full minicard-title">Drago Hedl</div>
                <div class="full minicard-text">
                  Puni članci jednog od najnagrađivanijih hrvatskih novinara
                </div>
                <div class="minicard-input center">
                  <input id="hedl" type="checkbox" class="cbx" />
                  <label class="check" for="hedl">
                    <svg width="18px" height="18px" viewBox="0 0 18 18">
                      <path
                        d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"
                      ></path>
                      <polyline points="1 9 7 14 15 4"></polyline>
                    </svg>
                  </label>
                </div>
              </div>
              <app-link
                target="_blank"
                to="/newsletters"
                class="full darkened-bg center column-mini-vertical-pad"
              >
                <div class="full center-text minicard-text">
                  Pogledajte sve newslettere
                </div>
              </app-link>
            </div>
            <div class="full flex">
              <h2 class="full">
                Znate li za sve pogodnosti uključene u vašu pretplatu?
              </h2>
              <p class="full">
                Vaša pretplata uključuje niz ekskluzivnih ponuda, pogodnosti i
                popusta.
              </p>
              <app-link
                target="_blank"
                to="/pretplata/pogodnosti"
                class="full darkened-bg center column-mini-vertical-pad"
              >
                <div class="full center-text minicard-text">
                  Pogledajte sve pogodnosti
                </div>
              </app-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="full center column-full-pad column-bottom-margin">
      <app-link to="/" class="newbtn huge-newbtn gigantic-newbtn"
        >Počnite koristiti Telegram</app-link
      >
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'PretplataUspjeh',
  data() {
    return {
      price: 0,
      nacinPlacanja: 'none',
    }
  },
  mounted() {
    this.$store.dispatch('newsletters/checkAccess', this.$route.query.email)
  },
  head() {
    const link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.telegram.hr/pretplata/uspjeh/',
      },
    ]
    return {
      title: 'Telegram Pretplata - Uspjeh',
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Vaša pretplata je aktivna. Hvala Vam što podržavate naše bespoštedno novinarstvo.',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'Vaša pretplata je aktivna. Hvala Vam što podržavate naše bespoštedno novinarstvo.',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Telegram Pretplata - Uspjeh',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content:
            'https://www.telegram.hr/wp-content/uploads/2021/01/tg-background.jpg',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/pretplata/uspjeh/',
        },
      ],
      link,
    }
  },
}
</script>
