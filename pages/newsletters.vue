<template>
  <div
    class="main-container flex red-header-page single-article hide-billboard"
  >
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
            Prijavite se za newslettere i primajte najbolje od Telegrama.
          </p>
        </div>
      </div>
    </div>
    <div class="full flex relative">
      <div
        class="container newsletters-list flex relative stretch mobile-side-pad"
      >
        <div class="third flex-responsive column-full-pad flex stretch">
          <div class="full newsletter-listing flex relative stretch">
            <div class="full flex newsletter-header">
              <div class="newsletter-avatar newsletter-dnevni">
                <img
                  src="@/assets/img/tg_newsletter_avatars_dnevni.jpg"
                  aria-hidden="true"
                />
              </div>
              <div class="full relative">
                <h3 class="full overtitle">Radnim danom</h3>
                <h2 class="full newsletter-title">Dnevni Telegram</h2>
                <h3 class="full subtitle">Odabir najvažnijih tema</h3>
              </div>
            </div>
            <div class="full flex newsletter-box">
              <p class="full newsletter-intro">
                Iz dana u dan, naši nagrađivani novinari donose važne priče o
                Hrvatskoj i svijetu, ekskluzivno otkrivaju afere zbog kojih
                odlaze ministri i objašnjavaju kontekst dnevnih događaja.
              </p>
              <div
                v-if="hasSub(2128)"
                class="btn animate btn-unsub"
                @click="unsub(2128)"
              >
                Odjavi me
                <font-awesome-icon
                  :icon="['fal', 'minus-square']"
                ></font-awesome-icon>
              </div>
              <div v-else class="btn animate" @click="sub(2128)">
                Prijavi me
                <font-awesome-icon
                  :icon="['fal', 'plus-square']"
                ></font-awesome-icon>
              </div>
            </div>
          </div>
        </div>
        <div class="third flex-responsive column-full-pad flex stretch">
          <div class="full newsletter-listing flex relative stretch">
            <div class="full flex newsletter-header">
              <div class="newsletter-avatar newsletter-tjedni">
                <img
                  src="@/assets/img/tg_newsletter_avatars_propustili.jpg"
                  aria-hidden="true"
                />
              </div>
              <div class="full relative">
                <h3 class="full overtitle">Ponedjeljkom</h3>
                <h2 class="full newsletter-title">Možda ste propustili</h2>
                <h3 class="full subtitle">Personaliziran za vas</h3>
              </div>
            </div>
            <div class="full flex newsletter-box">
              <p class="full newsletter-intro">
                Naši najbolji tekstovi, kolumne, istrage, intervjui i longform
                priče tjedna. Personaliziran prema vašim čitateljskim navikama,
                kako ne biste propustili nešto važno.
              </p>
              <div
                v-if="hasSub(2554)"
                class="btn animate btn-unsub"
                @click="unsub(2554)"
              >
                Odjavi me
                <font-awesome-icon
                  :icon="['fal', 'minus-square']"
                ></font-awesome-icon>
              </div>
              <div v-else class="btn animate" @click="sub(2554)">
                Prijavi me
                <font-awesome-icon
                  :icon="['fal', 'plus-square']"
                ></font-awesome-icon>
              </div>
            </div>
          </div>
        </div>
        <div class="third flex-responsive column-full-pad flex stretch">
          <div class="full newsletter-listing flex relative stretch">
            <div class="full flex newsletter-header">
              <div class="newsletter-avatar newsletter-tag">
                <img
                  src="@/assets/img/tg_newsletter_avatars_vikend.jpg"
                  aria-hidden="true"
                />
              </div>
              <div class="full relative">
                <h3 class="full overtitle">Petkom</h3>
                <h2 class="full newsletter-title">Vikend na Telegramu</h2>
                <h3 class="full subtitle">Najbolje za vikend čitanje</h3>
              </div>
            </div>
            <div class="full flex newsletter-box">
              <p class="full newsletter-intro">
                Odabir naših najboljih tekstova za koje možda niste imali
                dovoljno vremena preko tjedna, ali bi vam mogli biti izvrsno
                štivo tijekom vikenda.
              </p>
              <div
                v-if="hasSub(2555)"
                class="btn animate btn-unsub"
                @click="unsub(2555)"
              >
                Odjavi me
                <font-awesome-icon
                  :icon="['fal', 'minus-square']"
                ></font-awesome-icon>
              </div>
              <div v-else class="btn animate" @click="sub(2555)">
                Prijavi me
                <font-awesome-icon
                  :icon="['fal', 'plus-square']"
                ></font-awesome-icon>
              </div>
            </div>
          </div>
        </div>
        <div class="full column-horizontal-pad">
          <h2 class="full flex section-title">Komentari i analize</h2>
        </div>
        <div class="full flex newsletter-komentari relative stretch">
          <div class="full flex newsletter-komentari relative stretch">
            <div class="third flex-responsive column-full-pad flex stretch">
              <div class="full newsletter-listing flex relative stretch">
                <div class="full flex newsletter-header">
                  <div class="newsletter-avatar">
                    <img
                      src="https://www.telegram.hr/wp-content/uploads/2019/06/tg-sanja-modric.png"
                      aria-hidden="true"
                    />
                  </div>
                  <div class="full relative">
                    <h3 class="full overtitle">Četiri puta tjedno</h3>
                    <h2 class="full newsletter-title">Sanja Modrić</h2>
                    <h3 class="full subtitle">Puni članci autora</h3>
                  </div>
                </div>
                <div class="full flex newsletter-box">
                  <p class="full newsletter-intro">
                    Analize i komentari jedne od najpoznatijih hrvatskih
                    novinarki, nagrađene za životno djelo, za svoj rad u
                    Jutarnjem, Novom listu i Feralu. Na Telegramu komentira
                    društvene pojave.
                  </p>
                  <div
                    v-if="hasSub(2560)"
                    class="btn animate btn-unsub"
                    @click="unsub(2560)"
                  >
                    Odjavi me
                    <font-awesome-icon
                      :icon="['fal', 'minus-square']"
                    ></font-awesome-icon>
                  </div>
                  <app-link
                    v-else-if="!$store.state.user.active_sub"
                    to="/pretplata"
                    class="btn animate"
                  >
                    Dostupno samo za pretplatnike
                  </app-link>
                  <div v-else class="btn animate" @click="sub(2560, 1)">
                    Prijavi me
                    <font-awesome-icon
                      :icon="['fal', 'plus-square']"
                    ></font-awesome-icon>
                  </div>
                </div>
              </div>
            </div>
            <div class="third flex-responsive column-full-pad flex stretch">
              <div class="full newsletter-listing flex relative stretch">
                <div class="full flex newsletter-header">
                  <div class="newsletter-avatar">
                    <img
                      src="https://www.telegram.hr/wp-content/uploads/2018/07/tg_klaric.png"
                      aria-hidden="true"
                    />
                  </div>
                  <div class="full relative">
                    <h3 class="full overtitle">Redovito</h3>
                    <h2 class="full newsletter-title">Jasmin Klarić</h2>
                    <h3 class="full subtitle">Puni članci autora</h3>
                  </div>
                </div>
                <div class="full flex newsletter-box">
                  <p class="full newsletter-intro">
                    Telegramov politički analitičar i urednik svakodnevno
                    analizira hrvatsku politiku i njene aktere, s dubinskim
                    uvidom u stvarne odnose i agende.
                  </p>
                  <div
                    v-if="hasSub(2596)"
                    class="btn animate btn-unsub"
                    @click="unsub(2596)"
                  >
                    Odjavi me
                    <font-awesome-icon
                      :icon="['fal', 'minus-square']"
                    ></font-awesome-icon>
                  </div>
                  <app-link
                    v-else-if="!$store.state.user.active_sub"
                    to="/pretplata"
                    class="btn animate"
                  >
                    Dostupno samo za pretplatnike
                  </app-link>
                  <div v-else class="btn animate" @click="sub(2596, 1)">
                    Prijavi me
                    <font-awesome-icon
                      :icon="['fal', 'plus-square']"
                    ></font-awesome-icon>
                  </div>
                </div>
              </div>
            </div>
            <div class="third flex-responsive column-full-pad flex stretch">
              <div class="full newsletter-listing flex relative stretch">
                <div class="full flex newsletter-header">
                  <div class="newsletter-avatar">
                    <img
                      src="https://www.telegram.hr/wp-content/uploads/2020/04/repecki2.png"
                      aria-hidden="true"
                    />
                  </div>
                  <div class="full relative">
                    <h3 class="full overtitle">Redovito</h3>
                    <h2 class="full newsletter-title">Marko Repecki</h2>
                    <h3 class="full subtitle">Puni članci autora</h3>
                  </div>
                </div>
                <div class="full flex newsletter-box">
                  <p class="full newsletter-intro">
                    Autorske kolumne, analize i priče Telegramovog novinara i
                    komentatora za ekonomiju, biznis, državne financije i
                    poduzetništvo.
                  </p>
                  <div
                    v-if="hasSub(2562)"
                    class="btn animate btn-unsub"
                    @click="unsub(2562)"
                  >
                    Odjavi me
                    <font-awesome-icon
                      :icon="['fal', 'minus-square']"
                    ></font-awesome-icon>
                  </div>
                  <app-link
                    v-else-if="!$store.state.user.active_sub"
                    to="/pretplata"
                    class="btn animate"
                  >
                    Dostupno samo za pretplatnike
                  </app-link>
                  <div v-else class="btn animate" @click="sub(2562, 1)">
                    Prijavi me
                    <font-awesome-icon
                      :icon="['fal', 'plus-square']"
                    ></font-awesome-icon>
                  </div>
                </div>
              </div>
            </div>
            <div class="third flex-responsive column-full-pad flex stretch">
              <div class="full newsletter-listing flex relative stretch">
                <div class="full flex newsletter-header">
                  <div class="newsletter-avatar">
                    <img
                      src="https://www.telegram.hr/wp-content/uploads/2017/09/goranko_fizulic.png"
                      aria-hidden="true"
                    />
                  </div>
                  <div class="full relative">
                    <h3 class="full overtitle">Redovito</h3>
                    <h2 class="full newsletter-title">Goranko Fižulić</h2>
                    <h3 class="full subtitle">Puni članci autora</h3>
                  </div>
                </div>
                <div class="full flex newsletter-box">
                  <p class="full newsletter-intro">
                    Društvene, ekonomske i političke analize nekadašnjeg
                    ministra gospodarstva, saborskog zastupnika, suosnivača
                    HSLS-a i poduzetnika.
                  </p>
                  <div
                    v-if="hasSub(2559)"
                    class="btn animate btn-unsub"
                    @click="unsub(2559)"
                  >
                    Odjavi me
                    <font-awesome-icon
                      :icon="['fal', 'minus-square']"
                    ></font-awesome-icon>
                  </div>
                  <app-link
                    v-else-if="!$store.state.user.active_sub"
                    to="/pretplata"
                    class="btn animate"
                  >
                    Dostupno samo za pretplatnike
                  </app-link>
                  <div v-else class="btn animate" @click="sub(2559, 1)">
                    Prijavi me
                    <font-awesome-icon
                      :icon="['fal', 'plus-square']"
                    ></font-awesome-icon>
                  </div>
                </div>
              </div>
            </div>
            <div class="third flex-responsive column-full-pad flex stretch">
              <div class="full newsletter-listing flex relative stretch">
                <div class="full flex newsletter-header">
                  <div class="newsletter-avatar">
                    <img
                      src="https://www.telegram.hr/wp-content/uploads/2017/06/divo2.png"
                      aria-hidden="true"
                    />
                  </div>
                  <div class="full relative">
                    <h3 class="full overtitle">Redovito</h3>
                    <h2 class="full newsletter-title">Đivo Đurović</h2>
                    <h3 class="full subtitle">Puni članci autora</h3>
                  </div>
                </div>
                <div class="full flex newsletter-box">
                  <p class="full newsletter-intro">
                    Naš vanjskopolitički analitičar i dopisnik iz Amerike, u
                    kojoj je magistrirao međunarodne odnose na Sveučilištu
                    Columbia. Za Telegram donosi priče i analize američke
                    politike.
                  </p>
                  <div
                    v-if="hasSub(2561)"
                    class="btn animate btn-unsub"
                    @click="unsub(2561)"
                  >
                    Odjavi me
                    <font-awesome-icon
                      :icon="['fal', 'minus-square']"
                    ></font-awesome-icon>
                  </div>
                  <app-link
                    v-else-if="!$store.state.user.active_sub"
                    to="/pretplata"
                    class="btn animate"
                  >
                    Dostupno samo za pretplatnike
                  </app-link>
                  <div v-else class="btn animate" @click="sub(2561, 1)">
                    Prijavi me
                    <font-awesome-icon
                      :icon="['fal', 'plus-square']"
                    ></font-awesome-icon>
                  </div>
                </div>
              </div>
            </div>
            <div class="third flex-responsive column-full-pad flex stretch">
              <div class="full newsletter-listing flex relative stretch">
                <div class="full flex newsletter-header">
                  <div class="newsletter-avatar">
                    <img
                      src="https://www.telegram.hr/wp-content/uploads/2017/09/dragan_markovina.png"
                      aria-hidden="true"
                    />
                  </div>
                  <div class="full relative">
                    <h3 class="full overtitle">Redovito</h3>
                    <h2 class="full newsletter-title">Dragan Markovina</h2>
                    <h3 class="full subtitle">Puni članci autora</h3>
                  </div>
                </div>
                <div class="full flex newsletter-box">
                  <p class="full newsletter-intro">
                    Povjesničar, publicist i autor brojnih knjiga, za Telegram
                    komentira politička, kulturna i društvena zbivanja.
                  </p>
                  <div
                    v-if="hasSub(2563)"
                    class="btn animate btn-unsub"
                    @click="unsub(2563)"
                  >
                    Odjavi me
                    <font-awesome-icon
                      :icon="['fal', 'minus-square']"
                    ></font-awesome-icon>
                  </div>
                  <app-link
                    v-else-if="!$store.state.user.active_sub"
                    to="/pretplata"
                    class="btn animate"
                  >
                    Dostupno samo za pretplatnike
                  </app-link>
                  <div v-else class="btn animate" @click="sub(2563, 1)">
                    Prijavi me
                    <font-awesome-icon
                      :icon="['fal', 'plus-square']"
                    ></font-awesome-icon>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="full column-horizontal-pad">
            <h2 class="full flex section-title">Telegram autori</h2>
          </div>
          <div class="full flex newsletter-komentari relative stretch">
            <div class="third flex-responsive column-full-pad flex stretch">
              <div class="full newsletter-listing flex relative stretch">
                <div class="full flex newsletter-header">
                  <div class="newsletter-avatar">
                    <img
                      src="https://www.telegram.hr/wp-content/uploads/2017/09/drago_hedl-1.png"
                      aria-hidden="true"
                    />
                  </div>
                  <div class="full relative">
                    <h3 class="full overtitle">Redovito</h3>
                    <h2 class="full newsletter-title">Drago Hedl</h2>
                    <h3 class="full subtitle">Puni članci autora</h3>
                  </div>
                </div>
                <div class="full flex newsletter-box">
                  <p class="full newsletter-intro">
                    Jedan od najnagrađivanijih hrvatskih novinara, autor čuvenih
                    istraživačkih serijala, knjiga i romana, za Telegram gotovo
                    svakodnevno otkriva nove afere moćnika.
                  </p>
                  <div
                    v-if="hasSub(2564)"
                    class="btn animate btn-unsub"
                    @click="unsub(2564)"
                  >
                    Odjavi me
                    <font-awesome-icon
                      :icon="['fal', 'minus-square']"
                    ></font-awesome-icon>
                  </div>
                  <app-link
                    v-else-if="!$store.state.user.active_sub"
                    to="/pretplata"
                    class="btn animate"
                  >
                    Dostupno samo za pretplatnike
                  </app-link>
                  <div v-else class="btn animate" @click="sub(2564, 1)">
                    Prijavi me
                    <font-awesome-icon
                      :icon="['fal', 'plus-square']"
                    ></font-awesome-icon>
                  </div>
                </div>
              </div>
            </div>
            <div class="third flex-responsive column-full-pad flex stretch">
              <div class="full newsletter-listing flex relative stretch">
                <div class="full flex newsletter-header">
                  <div class="newsletter-avatar">
                    <img
                      src="https://www.telegram.hr/wp-content/uploads/2017/09/ana_raic_3.png"
                      aria-hidden="true"
                    />
                  </div>
                  <div class="full relative">
                    <h3 class="full overtitle">Redovito</h3>
                    <h2 class="full newsletter-title">Ana Raić Knežević</h2>
                    <h3 class="full subtitle">Puni članci autora</h3>
                  </div>
                </div>
                <div class="full flex newsletter-box">
                  <p class="full newsletter-intro">
                    Telegramova novinarka za crnu kroniku, kriminal i korupciju,
                    s ekskluzivnim informacijama i istraživačkim radom koji
                    događajima daje puni kontekst.
                  </p>
                  <div
                    v-if="hasSub(2565)"
                    class="btn animate btn-unsub"
                    @click="unsub(2565)"
                  >
                    Odjavi me
                    <font-awesome-icon
                      :icon="['fal', 'minus-square']"
                    ></font-awesome-icon>
                  </div>
                  <app-link
                    v-else-if="!$store.state.user.active_sub"
                    to="/pretplata"
                    class="btn animate"
                  >
                    Dostupno samo za pretplatnike
                  </app-link>
                  <div v-else class="btn animate" @click="sub(2565, 1)">
                    Prijavi me
                    <font-awesome-icon
                      :icon="['fal', 'plus-square']"
                    ></font-awesome-icon>
                  </div>
                </div>
              </div>
            </div>
            <div class="third flex-responsive column-full-pad flex stretch">
              <div class="full newsletter-listing flex relative stretch">
                <div class="full flex newsletter-header">
                  <div class="newsletter-avatar">
                    <img
                      src="https://www.telegram.hr/wp-content/uploads/2019/01/tg-andrej.png"
                      aria-hidden="true"
                    />
                  </div>
                  <div class="full relative">
                    <h3 class="full overtitle">Redovito</h3>
                    <h2 class="full newsletter-title">Andrej Dimitrijević</h2>
                    <h3 class="full subtitle">Puni članci autora</h3>
                  </div>
                </div>
                <div class="full flex newsletter-box">
                  <p class="full newsletter-intro">
                    Proglašen HND-ovim istraživačkim i internetskim novinarom
                    godine zbog serijala o imovini ministara Kuščevića i
                    Kujundžića, marljivo kopa afere.
                  </p>
                  <div
                    v-if="hasSub(2597)"
                    class="btn animate btn-unsub"
                    @click="unsub(2597)"
                  >
                    Odjavi me
                    <font-awesome-icon
                      :icon="['fal', 'minus-square']"
                    ></font-awesome-icon>
                  </div>
                  <app-link
                    v-else-if="!$store.state.user.active_sub"
                    to="/pretplata"
                    class="btn animate"
                  >
                    Dostupno samo za pretplatnike
                  </app-link>
                  <div v-else class="btn animate" @click="sub(2597, 1)">
                    Prijavi me
                    <font-awesome-icon
                      :icon="['fal', 'plus-square']"
                    ></font-awesome-icon>
                  </div>
                </div>
              </div>
            </div>
            <div class="third flex-responsive column-full-pad flex stretch">
              <div class="full newsletter-listing flex relative stretch">
                <div class="full flex newsletter-header">
                  <div class="newsletter-avatar">
                    <img
                      src="https://www.telegram.hr/wp-content/uploads/2019/09/tg_krsul.png"
                      aria-hidden="true"
                    />
                  </div>
                  <div class="full relative">
                    <h3 class="full overtitle">Redovito</h3>
                    <h2 class="full newsletter-title">Dora Kršul</h2>
                    <h3 class="full subtitle">Puni članci autora</h3>
                  </div>
                </div>
                <div class="full flex newsletter-box">
                  <p class="full newsletter-intro">
                    Dobitnica dvije nagrade HND-a, specijalizirana za školstvo,
                    redovno otkriva važne priče poput dubrovačkog apartmana
                    rektora Borasa i seksualnog zlostavljanja na Sveučilištu.
                  </p>
                  <div
                    v-if="hasSub(2566)"
                    class="btn animate btn-unsub"
                    @click="unsub(2566)"
                  >
                    Odjavi me
                    <font-awesome-icon
                      :icon="['fal', 'minus-square']"
                    ></font-awesome-icon>
                  </div>
                  <app-link
                    v-else-if="!$store.state.user.active_sub"
                    to="/pretplata"
                    class="btn animate"
                  >
                    Dostupno samo za pretplatnike
                  </app-link>
                  <div v-else class="btn animate" @click="sub(2566, 1)">
                    Prijavi me
                    <font-awesome-icon
                      :icon="['fal', 'plus-square']"
                    ></font-awesome-icon>
                  </div>
                </div>
              </div>
            </div>
            <div class="third flex-responsive column-full-pad flex stretch">
              <div class="full newsletter-listing flex relative stretch">
                <div class="full flex newsletter-header">
                  <div class="newsletter-avatar">
                    <img
                      src="https://www.telegram.hr/wp-content/uploads/2020/08/rajko-grlic.png"
                      aria-hidden="true"
                    />
                  </div>
                  <div class="full relative">
                    <h3 class="full overtitle">Redovito</h3>
                    <h2 class="full newsletter-title">Rajko Grlić</h2>
                    <h3 class="full subtitle">Puni članci autora</h3>
                  </div>
                </div>
                <div class="full flex newsletter-box">
                  <p class="full newsletter-intro">
                    Cijenjeni redatelj i scenarist, redovni profesor filma u
                    Americi, za Telegram piše kolumnu 'Iz svakog džepa ponešto',
                    o filmu, društvu, obitelji i gastronomiji.
                  </p>
                  <div
                    v-if="hasSub(2642)"
                    class="btn animate btn-unsub"
                    @click="unsub(2642)"
                  >
                    Odjavi me
                    <font-awesome-icon
                      :icon="['fal', 'minus-square']"
                    ></font-awesome-icon>
                  </div>
                  <app-link
                    v-else-if="!$store.state.user.active_sub"
                    to="/pretplata"
                    class="btn animate"
                  >
                    Dostupno samo za pretplatnike
                  </app-link>
                  <div v-else class="btn animate" @click="sub(2642, 1)">
                    Prijavi me
                    <font-awesome-icon
                      :icon="['fal', 'plus-square']"
                    ></font-awesome-icon>
                  </div>
                </div>
              </div>
            </div>
            <div class="third flex-responsive column-full-pad flex stretch">
              <div class="full newsletter-listing flex relative stretch">
                <div class="full flex newsletter-header">
                  <div class="newsletter-avatar">
                    <img
                      src="https://www.telegram.hr/wp-content/uploads/2017/08/zrinka_paladino_2.png"
                      aria-hidden="true"
                    />
                  </div>
                  <div class="full relative">
                    <h3 class="full overtitle">Redovito</h3>
                    <h2 class="full newsletter-title">Zrinka Paladino</h2>
                    <h3 class="full subtitle">Puni članci autora</h3>
                  </div>
                </div>
                <div class="full flex newsletter-box">
                  <p class="full newsletter-intro">
                    Arhitektica, konzervatorica i naša kolumnistica, koja se na
                    Telegramu bavi pitanjima arhitekture, urbanizma i gradske
                    politike.
                  </p>
                  <div
                    v-if="hasSub(2599)"
                    class="btn animate btn-unsub"
                    @click="unsub(2599)"
                  >
                    Odjavi me
                    <font-awesome-icon
                      :icon="['fal', 'minus-square']"
                    ></font-awesome-icon>
                  </div>
                  <app-link
                    v-else-if="!$store.state.user.active_sub"
                    to="/pretplata"
                    class="btn animate"
                  >
                    Dostupno samo za pretplatnike
                  </app-link>
                  <div v-else class="btn animate" @click="sub(2599, 1)">
                    Prijavi me
                    <font-awesome-icon
                      :icon="['fal', 'plus-square']"
                    ></font-awesome-icon>
                  </div>
                </div>
              </div>
            </div>
            <div class="third flex-responsive column-full-pad flex stretch">
              <div class="full newsletter-listing flex relative stretch">
                <div class="full flex newsletter-header">
                  <div class="newsletter-avatar">
                    <img
                      src="https://www.telegram.hr/wp-content/uploads/2017/09/plese.png"
                      aria-hidden="true"
                    />
                  </div>
                  <div class="full relative">
                    <h3 class="full overtitle">Redovito</h3>
                    <h2 class="full newsletter-title">Mladen Pleše</h2>
                    <h3 class="full subtitle">Puni članci autora</h3>
                  </div>
                </div>
                <div class="full flex newsletter-box">
                  <p class="full newsletter-intro">
                    Višegodišnji novinar i glavni urednik izdanja kao što su
                    Start, Slobodna Dalmacija i Jutarnji list, za Telegram piše
                    velike životne priče, intervjue, vijesti i analize.
                  </p>
                  <div
                    v-if="hasSub(2567)"
                    class="btn animate btn-unsub"
                    @click="unsub(2567)"
                  >
                    Odjavi me
                    <font-awesome-icon
                      :icon="['fal', 'minus-square']"
                    ></font-awesome-icon>
                  </div>
                  <app-link
                    v-else-if="!$store.state.user.active_sub"
                    to="/pretplata"
                    class="btn animate"
                  >
                    Dostupno samo za pretplatnike
                  </app-link>
                  <div v-else class="btn animate" @click="sub(2598, 1)">
                    Prijavi me
                    <font-awesome-icon
                      :icon="['fal', 'plus-square']"
                    ></font-awesome-icon>
                  </div>
                </div>
              </div>
            </div>
            <div class="third flex-responsive column-full-pad flex stretch">
              <div class="full newsletter-listing flex relative stretch">
                <div class="full flex newsletter-header">
                  <div class="newsletter-avatar">
                    <img
                      src="https://www.telegram.hr/wp-content/uploads/2018/11/irena.png"
                      aria-hidden="true"
                    />
                  </div>
                  <div class="full relative">
                    <h3 class="full overtitle">Redovito</h3>
                    <h2 class="full newsletter-title">
                      Irena Frlan Gašparović
                    </h2>
                    <h3 class="full subtitle">Puni članci autora</h3>
                  </div>
                </div>
                <div class="full flex newsletter-box">
                  <p class="full newsletter-intro">
                    Novinarka i analitičarka Telegrama specijalizirana za
                    vanjsku politiku, Europsku uniju, EU fondove, o kojima
                    donosi dubinske analize i priče.
                  </p>
                  <div
                    v-if="hasSub(2568)"
                    class="btn animate btn-unsub"
                    @click="unsub(2568)"
                  >
                    Odjavi me
                    <font-awesome-icon
                      :icon="['fal', 'minus-square']"
                    ></font-awesome-icon>
                  </div>
                  <app-link
                    v-else-if="!$store.state.user.active_sub"
                    to="/pretplata"
                    class="btn animate"
                  >
                    Dostupno samo za pretplatnike
                  </app-link>
                  <div v-else class="btn animate" @click="sub(2568, 1)">
                    Prijavi me
                    <font-awesome-icon
                      :icon="['fal', 'plus-square']"
                    ></font-awesome-icon>
                  </div>
                </div>
              </div>
            </div>
            <div class="third flex-responsive column-full-pad flex stretch">
              <div class="full newsletter-listing flex relative stretch">
                <div class="full flex newsletter-header">
                  <div class="newsletter-avatar">
                    <img
                      src="https://www.telegram.hr/wp-content/uploads/2019/05/spisic.png"
                      aria-hidden="true"
                    />
                  </div>
                  <div class="full relative">
                    <h3 class="full overtitle">Redovito</h3>
                    <h2 class="full newsletter-title">Davor Špišić</h2>
                    <h3 class="full subtitle">Puni članci autora</h3>
                  </div>
                </div>
                <div class="full flex newsletter-box">
                  <p class="full newsletter-intro">
                    Telegramov redovni suradnik za kulturu i umjetnost, s
                    naglaskom na kazališnu produkciju i književnost. Piše
                    recenzije, intervjue, najave i analize.
                  </p>
                  <div
                    v-if="hasSub(2600)"
                    class="btn animate btn-unsub"
                    @click="unsub(2600)"
                  >
                    Odjavi me
                    <font-awesome-icon
                      :icon="['fal', 'minus-square']"
                    ></font-awesome-icon>
                  </div>
                  <app-link
                    v-else-if="!$store.state.user.active_sub"
                    to="/pretplata"
                    class="btn animate"
                  >
                    Dostupno samo za pretplatnike
                  </app-link>
                  <div v-else class="btn animate" @click="sub(2600, 1)">
                    Prijavi me
                    <font-awesome-icon
                      :icon="['fal', 'plus-square']"
                    ></font-awesome-icon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="full flex relative stretch">
          <div class="full column-horizontal-pad">
            <h2 class="full flex section-title">Rubrike</h2>
          </div>
          <div class="third flex-responsive column-full-pad flex stretch">
            <div class="full newsletter-listing flex relative stretch">
              <div class="full flex newsletter-header">
                <div class="newsletter-avatar">
                  <img
                    src="@/assets/img/tg_newsletter_avatars_pk.jpg"
                    aria-hidden="true"
                  />
                </div>
                <div class="full relative">
                  <h3 class="full overtitle">Jednom tjedno</h3>
                  <h2 class="full newsletter-title">Politika & kriminal</h2>
                  <h3 class="full subtitle">Najbolje iz rubrike</h3>
                </div>
              </div>
              <div class="full flex newsletter-box">
                <p class="full newsletter-intro">
                  Tjedni odabir najboljih Telegramovih priča iz rubrike Politika
                  & kriminal.
                </p>
                <div
                  v-if="hasSub(2626)"
                  class="btn animate btn-unsub"
                  @click="unsub(2626)"
                >
                  Odjavi me
                  <font-awesome-icon
                    :icon="['fal', 'minus-square']"
                  ></font-awesome-icon>
                </div>
                <div v-else class="btn animate" @click="sub(2626)">
                  Prijavi me
                  <font-awesome-icon
                    :icon="['fal', 'plus-square']"
                  ></font-awesome-icon>
                </div>
              </div>
            </div>
          </div>
          <div class="third flex-responsive column-full-pad flex stretch">
            <div class="full newsletter-listing flex relative stretch">
              <div class="full flex newsletter-header">
                <div class="newsletter-avatar">
                  <img
                    src="@/assets/img/tg_newsletter_avatars_komentari.jpg"
                    aria-hidden="true"
                  />
                </div>
                <div class="full relative">
                  <h3 class="full overtitle">Jednom tjedno</h3>
                  <h2 class="full newsletter-title">Komentari</h2>
                  <h3 class="full subtitle">Najbolje iz rubrike</h3>
                </div>
              </div>
              <div class="full flex newsletter-box">
                <p class="full newsletter-intro">
                  Tjedni odabir najboljih Telegramovih komentara, analiza i
                  kolumni.
                </p>
                <div
                  v-if="hasSub(2627)"
                  class="btn animate btn-unsub"
                  @click="unsub(2627)"
                >
                  Odjavi me
                  <font-awesome-icon
                    :icon="['fal', 'minus-square']"
                  ></font-awesome-icon>
                </div>
                <div v-else class="btn animate" @click="sub(2627)">
                  Prijavi me
                  <font-awesome-icon
                    :icon="['fal', 'plus-square']"
                  ></font-awesome-icon>
                </div>
              </div>
            </div>
          </div>
          <div class="third flex-responsive column-full-pad flex stretch">
            <div class="full newsletter-listing flex relative stretch">
              <div class="full flex newsletter-header">
                <div class="newsletter-avatar">
                  <img
                    src="@/assets/img/tg_newsletter_avatars_bt.jpg"
                    aria-hidden="true"
                  />
                </div>
                <div class="full relative">
                  <h3 class="full overtitle">Jednom tjedno</h3>
                  <h2 class="full newsletter-title">Biznis & tech</h2>
                  <h3 class="full subtitle">Najbolje iz rubrike</h3>
                </div>
              </div>
              <div class="full flex newsletter-box">
                <p class="full newsletter-intro">
                  Tjedni odabir najboljih Telegramovih priča iz rubrike Biznis &
                  tech.
                </p>
                <div
                  v-if="hasSub(2628)"
                  class="btn animate btn-unsub"
                  @click="unsub(2628)"
                >
                  Odjavi me
                  <font-awesome-icon
                    :icon="['fal', 'minus-square']"
                  ></font-awesome-icon>
                </div>
                <div v-else class="btn animate" @click="sub(2628)">
                  Prijavi me
                  <font-awesome-icon
                    :icon="['fal', 'plus-square']"
                  ></font-awesome-icon>
                </div>
              </div>
            </div>
          </div>
          <div class="third flex-responsive column-full-pad flex stretch">
            <div class="full newsletter-listing flex relative stretch">
              <div class="full flex newsletter-header">
                <div class="newsletter-avatar">
                  <img
                    src="@/assets/img/tg_newsletter_avatars_zivot.jpg"
                    aria-hidden="true"
                  />
                </div>
                <div class="full relative">
                  <h3 class="full overtitle">Jednom tjedno</h3>
                  <h2 class="full newsletter-title">Život</h2>
                  <h3 class="full subtitle">Najbolje iz rubrike</h3>
                </div>
              </div>
              <div class="full flex newsletter-box">
                <p class="full newsletter-intro">
                  Tjedni odabir najboljih Telegramovih priča iz rubrike Život.
                </p>
                <div
                  v-if="hasSub(2629)"
                  class="btn animate btn-unsub"
                  @click="unsub(2629)"
                >
                  Odjavi me
                  <font-awesome-icon
                    :icon="['fal', 'minus-square']"
                  ></font-awesome-icon>
                </div>
                <div v-else class="btn animate" @click="sub(2629)">
                  Prijavi me
                  <font-awesome-icon
                    :icon="['fal', 'plus-square']"
                  ></font-awesome-icon>
                </div>
              </div>
            </div>
          </div>
          <div class="third flex-responsive column-full-pad flex stretch">
            <div class="full newsletter-listing flex relative stretch">
              <div class="full flex newsletter-header">
                <div class="newsletter-avatar">
                  <img
                    src="@/assets/img/tg_newsletter_avatars_price.jpg"
                    aria-hidden="true"
                  />
                </div>
                <div class="full relative">
                  <h3 class="full overtitle">Povremeno</h3>
                  <h2 class="full newsletter-title">Velike priče</h2>
                  <h3 class="full subtitle">Puni longform članci</h3>
                </div>
              </div>
              <div class="full flex newsletter-box">
                <p class="full newsletter-intro">
                  Primite svaki Telegramov longform članak iz rubrike Velike
                  priče.
                </p>
                <div
                  v-if="hasSub(2630)"
                  class="btn animate btn-unsub"
                  @click="unsub(2630)"
                >
                  Odjavi me
                  <font-awesome-icon
                    :icon="['fal', 'minus-square']"
                  ></font-awesome-icon>
                </div>
                <app-link
                  v-else-if="!$store.state.user.active_sub"
                  to="/pretplata"
                  class="btn animate"
                >
                  Dostupno samo za pretplatnike
                </app-link>
                <div v-else class="btn animate" @click="sub(2630, 1)">
                  Prijavi me
                  <font-awesome-icon
                    :icon="['fal', 'plus-square']"
                  ></font-awesome-icon>
                </div>
              </div>
            </div>
          </div>
          <div class="third flex-responsive column-full-pad flex stretch">
            <div class="full newsletter-listing flex relative stretch">
              <div class="full flex newsletter-header">
                <div class="newsletter-avatar">
                  <img
                    src="@/assets/img/tg_newsletter_avatars_next.jpg"
                    aria-hidden="true"
                  />
                </div>
                <div class="full relative">
                  <h3 class="full overtitle">To nije sve</h3>
                  <h2 class="full newsletter-title">Još newslettera</h2>
                  <h3 class="full subtitle">Dolazi uskoro</h3>
                </div>
              </div>
              <div class="full flex newsletter-box">
                <p class="full newsletter-intro">
                  Još newslettera dolazi uskoro. Imate ideju? Javite nam se!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <tfooter></tfooter>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Newsletters',
  data() {
    return {
      api_key: 'V2rR5WTQbQyHEqCMvFEaUGU3ZNVkt4s6hnvmCz9dXt9aUwzMaUmXAhVzmv83',
      lists: {
        2128: false,
        2554: false,
        2555: false,
        2560: false,
        2561: false,
        2562: false,
        2563: false,
        2564: false,
        2565: false,
        2566: false,
        2567: false,
        2568: false,
        2596: false,
        2597: false,
        2598: false,
        2599: false,
        2600: false,
        2626: false,
        2627: false,
        2628: false,
        2629: false,
        2630: false,
        2631: false,
        2642: false,
      },
    }
  },
  mounted() {
    this.checkAccess()
  },
  methods: {
    checkAccess() {
      let email = this.$store.state.user.email
      if (!email && this.$route.query.user) {
        email = this.$route.query.email
      }
      if (!email) {
        return
      }
      Object.keys(this.lists).forEach((key) => {
        if (this.$store.state.user.email && key) {
          this.$axios
            .get(
              `https://api-esp.piano.io/tracker/securesub/email/${this.$store.state.user.email}/ml/${key}?api_key=${this.api_key}`
            )
            .then(() => {
              this.lists[key] = true
            })
            .catch(() => {
              this.lists[key] = false
            })
        }
      })
    },
    hasSub(mlid) {
      return this.lists[mlid]
    },
    sub(mlid, full) {
      if (!this.$store.state.user.email) {
        // no user, prompt to login
        const _that = this
        window.tp.pianoId.show({
          screen: 'login',
          width: window.innerWidth > 720 ? 600 : 375,
          loggedIn(data) {
            _that.$store.dispatch('user/setUser', data.user)
            _that.sub(mlid)
          },
        })
      } else if (full && this.$store.state.user.active_sub) {
        this.$axios
          .post(
            'https://api-esp.piano.io/tracker/securesub?api_key=V2rR5WTQbQyHEqCMvFEaUGU3ZNVkt4s6hnvmCz9dXt9aUwzMaUmXAhVzmv83',
            {
              email: this.$store.state.user.email,
              mlids: [mlid],
            }
          )
          .then(() => {
            this.lists[mlid] = true
          })
      }
    },
    unsub(mlid) {
      this.$axios
        .delete(
          'https://api-esp.piano.io/tracker/securesub?api_key=V2rR5WTQbQyHEqCMvFEaUGU3ZNVkt4s6hnvmCz9dXt9aUwzMaUmXAhVzmv83',
          {
            data: {
              email: this.$store.state.user.email,
              mlids: [mlid],
            },
          }
        )
        .then(() => {
          this.lists[mlid] = false
        })
    },
  },
}
</script>

<style scoped>
.newsletter-listing {
  padding-top: 86px;
  height: 100%;
  align-items: stretch;
  align-content: stretch;
}
.pretplata-page-content {
  margin-bottom: 20px;
}
.newsletter-box .btn {
  position: absolute;
  bottom: 16px;
  left: 16px;
}
.section-title {
  margin-bottom: 0px;
}
.newsletter-header {
  flex-wrap: nowrap;
  padding: 16px;
  align-items: flex-end;
  position: absolute;
  top: 0;
  left: 0;
}
.newsletter-box {
  border: 1px solid #c8c8c8;
  padding: 16px;
  padding-top: 42px;
  padding-bottom: 56px;
}
.newsletter-header > .full {
  width: auto;
}
.newsletter-avatar {
  padding: 0px;
  width: 100px;
  height: 100px;
  z-index: 5;
  background-image: url('@/assets/img/yellow_paper.jpg');
  margin-right: 16px;
  align-items: flex-end;
  display: flex;
}
.newsletter-avatar img {
  object-fit: contain;
}
.newsletter-komentari .newsletter-avatar img {
  filter: grayscale(100);
}
.newsletter-komentari .third:nth-child(2) .newsletter-avatar,
.newsletter-komentari .third:nth-child(4) .newsletter-avatar,
.newsletter-komentari .third:nth-child(9) .newsletter-avatar {
  background-image: url('@/assets/img/green_paper.jpg');
}
.newsletter-komentari .third:nth-child(3) .newsletter-avatar,
.newsletter-komentari .third:nth-child(5) .newsletter-avatar,
.newsletter-komentari .third:nth-child(7) .newsletter-avatar {
  background-image: url('@/assets/img/blue_paper.jpg');
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
  font-size: 1.6rem;
  letter-spacing: -0.05em;
  height: 37px;
  width: 150%;
  overflow-x: visible;
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
.newsletter-box .btn svg {
  margin-left: 8px;
}
.newsletter-box .btn-unsub {
  border: 1px solid #111;
  background-color: transparent;
  color: #111;
}
.dark-mode .newsletter-box .btn-unsub {
  border: 1px solid #eee;
  color: #eee;
}
.newsletter-box p {
  line-height: 1.55em;
  opacity: 0.8;
}
@media screen and (max-width: 1025px) {
  .newsletter-title {
    font-size: 1.6rem;
  }
  .newsletter-box {
    margin-bottom: 24px;
  }
  .newsletter-box .btn {
    bottom: 40px;
  }
  .section-title {
    margin-bottom: 24px;
  }
}
</style>
