<template>
  <div
    class="main-container flex red-header-page single-article hide-billboard newsletter-page"
  >
    <div class="full flex tg-red">
      <client-only>
        <theader headline="Telegram, svaki dan, u vašem inboxu."></theader>
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
                <div class="noththree full overtitle">Radnim danom</div>
                <h2 class="full newsletter-title">Dnevni Telegram</h2>
                <div class="noththree full subtitle">
                  Odabir najvažnijih tema
                </div>
              </div>
            </div>
            <div class="full flex newsletter-box">
              <p class="full newsletter-intro">
                Iz dana u dan, naši nagrađivani novinari donose važne priče o
                Hrvatskoj i svijetu, ekskluzivno otkrivaju afere zbog kojih
                odlaze ministri i objašnjavaju kontekst dnevnih događaja.
              </p>
              <subscribe-button
                mlid="dnevni"
                title="Dnevni Telegram"
              ></subscribe-button>
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
                <div class="noththree full overtitle">Ponedjeljkom</div>
                <h2 class="full newsletter-title">Možda ste propustili</h2>
                <div class="noththree full subtitle">Personaliziran za vas</div>
              </div>
            </div>
            <div class="full flex newsletter-box">
              <p class="full newsletter-intro">
                Naši najbolji tekstovi, kolumne, istrage, intervjui i longform
                priče tjedna. Personaliziran prema vašim čitateljskim navikama,
                kako ne biste propustili nešto važno.
              </p>
              <subscribe-button
                mlid="Možda ste propustili"
                title="Možda ste propustili"
              ></subscribe-button>
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
                <div class="noththree full overtitle">Petkom</div>
                <h2 class="full newsletter-title">Vikend na Telegramu</h2>
                <div class="noththree full subtitle">
                  Najbolje za vikend čitanje
                </div>
              </div>
            </div>
            <div class="full flex newsletter-box">
              <p class="full newsletter-intro">
                Odabir naših najboljih tekstova za koje možda niste imali
                dovoljno vremena preko tjedna, ali bi vam mogli biti izvrsno
                štivo tijekom vikenda.
              </p>
              <subscribe-button
                mlid="Vikend na Telegramu"
                title="Vikend na Telegramu"
              ></subscribe-button>
            </div>
          </div>
        </div>
        <div class="full column-horizontal-pad column-top-pad">
          <div class="full cantha-separator"></div>
        </div>
        <div class="full flex column-horizontal-pad">
          <div
            class="noththree full center-text column-vertical-pad subsection-title"
          >
            Komentari i analize
          </div>
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
                    <div class="noththree full overtitle">
                      Četiri puta tjedno
                    </div>
                    <h2 class="full newsletter-title">Sanja Modrić</h2>
                    <div class="noththree full subtitle">
                      Puni članci autora
                    </div>
                  </div>
                </div>
                <div class="full flex newsletter-box">
                  <p class="full newsletter-intro">
                    Analize i komentari jedne od najpoznatijih hrvatskih
                    novinarki, nagrađene za životno djelo, za svoj rad u
                    Jutarnjem, Novom listu i Feralu. Na Telegramu komentira
                    društvene pojave.
                  </p>
                  <subscribe-button
                    mlid="Sanja Modrić"
                    :free="false"
                    title="Sanja Modrić"
                  ></subscribe-button>
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
                    <div class="noththree full overtitle">Redovito</div>
                    <h2 class="full newsletter-title">Jasmin Klarić</h2>
                    <div class="noththree full subtitle">
                      Puni članci autora
                    </div>
                  </div>
                </div>
                <div class="full flex newsletter-box">
                  <p class="full newsletter-intro">
                    Telegramov politički analitičar i urednik svakodnevno
                    analizira hrvatsku politiku i njene aktere, s dubinskim
                    uvidom u stvarne odnose i agende.
                  </p>
                  <subscribe-button
                    mlid="Jasmin Klarić"
                    :free="false"
                    title="Jasmin Klarić"
                  ></subscribe-button>
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
                    <div class="noththree full overtitle">Redovito</div>
                    <h2 class="full newsletter-title">Goranko Fižulić</h2>
                    <div class="noththree full subtitle">
                      Puni članci autora
                    </div>
                  </div>
                </div>
                <div class="full flex newsletter-box">
                  <p class="full newsletter-intro">
                    Društvene, ekonomske i političke analize nekadašnjeg
                    ministra gospodarstva, saborskog zastupnika, suosnivača
                    HSLS-a i poduzetnika.
                  </p>
                  <subscribe-button
                    mlid="Goranko Fižulić"
                    :free="false"
                    title="Goranko Fižulić"
                  ></subscribe-button>
                </div>
              </div>
            </div>
            <div class="third flex-responsive column-full-pad flex stretch">
              <div class="full newsletter-listing flex relative stretch">
                <div class="full flex newsletter-header">
                  <div class="newsletter-avatar">
                    <img
                      src="https://www.telegram.hr/wp-content/uploads/2017/06/divo-durovic-2-2-1.png"
                      aria-hidden="true"
                    />
                  </div>
                  <div class="full relative">
                    <div class="noththree full overtitle">Redovito</div>
                    <h2 class="full newsletter-title">Đivo Đurović</h2>
                    <div class="noththree full subtitle">
                      Puni članci autora
                    </div>
                  </div>
                </div>
                <div class="full flex newsletter-box">
                  <p class="full newsletter-intro">
                    Naš vanjskopolitički analitičar i dopisnik iz Amerike, u
                    kojoj je magistrirao međunarodne odnose na Sveučilištu
                    Columbia. Za Telegram donosi priče i analize američke
                    politike.
                  </p>
                  <subscribe-button
                    mlid="Đivo Đurović"
                    :free="false"
                    title="Đivo Đurović"
                  ></subscribe-button>
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
                    <div class="noththree full overtitle">Redovito</div>
                    <h2 class="full newsletter-title">Dragan Markovina</h2>
                    <div class="noththree full subtitle">
                      Puni članci autora
                    </div>
                  </div>
                </div>
                <div class="full flex newsletter-box">
                  <p class="full newsletter-intro">
                    Povjesničar, publicist i autor brojnih knjiga, za Telegram
                    komentira politička, kulturna i društvena zbivanja.
                  </p>
                  <subscribe-button
                    mlid="Dragan Markovina"
                    :free="false"
                    title="Dragan Markovina"
                  ></subscribe-button>
                </div>
              </div>
            </div>
          </div>
          <div class="full column-horizontal-pad column-top-pad">
            <div class="full cantha-separator"></div>
          </div>
          <div class="full flex column-horizontal-pad">
            <div
              class="noththree full center-text column-vertical-pad subsection-title"
            >
              Telegram autori
            </div>
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
                    <div class="noththree full overtitle">Redovito</div>
                    <h2 class="full newsletter-title">Drago Hedl</h2>
                    <div class="noththree full subtitle">
                      Puni članci autora
                    </div>
                  </div>
                </div>
                <div class="full flex newsletter-box">
                  <p class="full newsletter-intro">
                    Jedan od najnagrađivanijih hrvatskih novinara, autor čuvenih
                    istraživačkih serijala, knjiga i romana, za Telegram gotovo
                    svakodnevno otkriva nove afere moćnika.
                  </p>
                  <subscribe-button
                    mlid="Drago Hedl"
                    :free="false"
                    title="Drago Hedl"
                  ></subscribe-button>
                </div>
              </div>
            </div>
            <div class="third flex-responsive column-full-pad flex stretch">
              <div class="full newsletter-listing flex relative stretch">
                <div class="full flex newsletter-header">
                  <div class="newsletter-avatar">
                    <img
                      src="https://www.telegram.hr/wp-content/uploads/2023/06/silvana-mendusic.png"
                      aria-hidden="true"
                    />
                  </div>
                  <div class="full relative">
                    <div class="noththree full overtitle">Redovito</div>
                    <h2 class="full newsletter-title">Silvana Menđušić</h2>
                    <div class="noththree full subtitle">
                      Puni članci autora
                    </div>
                  </div>
                </div>
                <div class="full flex newsletter-box">
                  <p class="full newsletter-intro">
                    Dugogodišnja reporterka i urednica, za Telegram redovito
                    donosi istraživačke serijale i ljudske sudbine
                  </p>
                  <subscribe-button
                    mlid="Silvana Menđušić"
                    :free="false"
                    title="Silvana Menđušić"
                  ></subscribe-button>
                </div>
              </div>
            </div>
            <div class="third flex-responsive column-full-pad flex stretch">
              <div class="full newsletter-listing flex relative stretch">
                <div class="full flex newsletter-header">
                  <div class="newsletter-avatar">
                    <img
                      src="https://www.telegram.hr/wp-content/uploads/2019/09/dora-krsul.png"
                      aria-hidden="true"
                    />
                  </div>
                  <div class="full relative">
                    <div class="noththree full overtitle">Redovito</div>
                    <h2 class="full newsletter-title">Dora Kršul</h2>
                    <div class="noththree full subtitle">
                      Puni članci autora
                    </div>
                  </div>
                </div>
                <div class="full flex newsletter-box">
                  <p class="full newsletter-intro">
                    Dobitnica tri nagrade HND-a, specijalizirana za školstvo i
                    akademsku zajednicu, otkriva važne priče poput afere
                    ministrice Obuljen Koržinek povezane s nepravilnostima na
                    Geodetskom fakultetu.
                  </p>
                  <subscribe-button
                    mlid="Dora Kršul"
                    :free="false"
                    title="Dora Kršul"
                  ></subscribe-button>
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
                    <div class="noththree full overtitle">Redovito</div>
                    <h2 class="full newsletter-title">Rajko Grlić</h2>
                    <div class="noththree full subtitle">
                      Puni članci autora
                    </div>
                  </div>
                </div>
                <div class="full flex newsletter-box">
                  <p class="full newsletter-intro">
                    Cijenjeni redatelj i scenarist, redovni profesor filma u
                    Americi, za Telegram piše kolumnu 'Iz svakog džepa ponešto',
                    o filmu, društvu, obitelji i gastronomiji.
                  </p>
                  <subscribe-button
                    mlid="Rajko Grlić"
                    :free="false"
                    title="Rajko Grlić"
                  ></subscribe-button>
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
                    <div class="noththree full overtitle">Redovito</div>
                    <h2 class="full newsletter-title">Zrinka Paladino</h2>
                    <div class="noththree full subtitle">
                      Puni članci autora
                    </div>
                  </div>
                </div>
                <div class="full flex newsletter-box">
                  <p class="full newsletter-intro">
                    Arhitektica, konzervatorica i naša kolumnistica, koja se na
                    Telegramu bavi pitanjima arhitekture, urbanizma i gradske
                    politike.
                  </p>
                  <subscribe-button
                    mlid="Zrinka Paladino"
                    :free="false"
                    title="Zrinka Paladino"
                  ></subscribe-button>
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
                    <div class="noththree full overtitle">Redovito</div>
                    <h2 class="full newsletter-title">Mladen Pleše</h2>
                    <div class="noththree full subtitle">
                      Puni članci autora
                    </div>
                  </div>
                </div>
                <div class="full flex newsletter-box">
                  <p class="full newsletter-intro">
                    Višegodišnji novinar i glavni urednik izdanja kao što su
                    Start, Slobodna Dalmacija i Jutarnji list, za Telegram piše
                    velike životne priče, intervjue, vijesti i analize.
                  </p>
                  <subscribe-button
                    mlid="Mladen Pleše"
                    :free="false"
                    title="Mladen Pleše"
                  ></subscribe-button>
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
                    <div class="noththree full overtitle">Redovito</div>
                    <h2 class="full newsletter-title">
                      Irena Frlan Gašparović
                    </h2>
                    <div class="noththree full subtitle">
                      Puni članci autora
                    </div>
                  </div>
                </div>
                <div class="full flex newsletter-box">
                  <p class="full newsletter-intro">
                    Novinarka i analitičarka Telegrama specijalizirana za
                    vanjsku politiku, Europsku uniju, EU fondove, o kojima
                    donosi dubinske analize i priče.
                  </p>
                  <subscribe-button
                    mlid="Irena Frlan Gašparović"
                    :free="false"
                    title="Irena Frlan Gašparović"
                  ></subscribe-button>
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
                    <div class="noththree full overtitle">Redovito</div>
                    <h2 class="full newsletter-title">Davor Špišić</h2>
                    <div class="noththree full subtitle">
                      Puni članci autora
                    </div>
                  </div>
                </div>
                <div class="full flex newsletter-box">
                  <p class="full newsletter-intro">
                    Telegramov redovni suradnik za kulturu i umjetnost, s
                    naglaskom na kazališnu produkciju i književnost. Piše
                    recenzije, intervjue, najave i analize.
                  </p>
                  <subscribe-button
                    mlid="Davor Špišić"
                    :free="false"
                    title="Davor Špišić"
                  ></subscribe-button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="full flex relative stretch">
          <div class="full column-horizontal-pad column-top-pad">
            <div class="full cantha-separator"></div>
          </div>
          <div class="full flex column-horizontal-pad">
            <div
              class="noththree full center-text column-vertical-pad subsection-title"
            >
              Rubrike
            </div>
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
                  <div class="noththree full overtitle">Jednom tjedno</div>
                  <h2 class="full newsletter-title">Politika & kriminal</h2>
                  <div class="noththree full subtitle">Najbolje iz rubrike</div>
                </div>
              </div>
              <div class="full flex newsletter-box">
                <p class="full newsletter-intro">
                  Tjedni odabir najboljih Telegramovih priča iz rubrike Politika
                  & kriminal.
                </p>
                <subscribe-button
                  mlid="Politika i Kriminal"
                  title="Politika & Kriminal"
                ></subscribe-button>
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
                  <div class="noththree full overtitle">Jednom tjedno</div>
                  <h2 class="full newsletter-title">Komentari</h2>
                  <div class="noththree full subtitle">Najbolje iz rubrike</div>
                </div>
              </div>
              <div class="full flex newsletter-box">
                <p class="full newsletter-intro">
                  Tjedni odabir najboljih Telegramovih komentara, analiza i
                  kolumni.
                </p>
                <subscribe-button
                  mlid="Komentari"
                  title="Komentari"
                ></subscribe-button>
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
                  <div class="noththree full overtitle">Jednom tjedno</div>
                  <h2 class="full newsletter-title">Biznis & tech</h2>
                  <div class="noththree full subtitle">Najbolje iz rubrike</div>
                </div>
              </div>
              <div class="full flex newsletter-box">
                <p class="full newsletter-intro">
                  Tjedni odabir najboljih Telegramovih priča iz rubrike Biznis &
                  tech.
                </p>
                <subscribe-button
                  mlid="Biznis & Tech"
                  title="Biznis & Tech"
                ></subscribe-button>
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
                  <div class="noththree full overtitle">Jednom tjedno</div>
                  <h2 class="full newsletter-title">Život</h2>
                  <div class="noththree full subtitle">Najbolje iz rubrike</div>
                </div>
              </div>
              <div class="full flex newsletter-box">
                <p class="full newsletter-intro">
                  Tjedni odabir najboljih Telegramovih priča iz rubrike Život.
                </p>
                <subscribe-button mlid="Život" title="Život"></subscribe-button>
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
                  <div class="noththree full overtitle">Povremeno</div>
                  <h2 class="full newsletter-title">Velike priče</h2>
                  <div class="noththree full subtitle">
                    Puni longform članci
                  </div>
                </div>
              </div>
              <div class="full flex newsletter-box">
                <p class="full newsletter-intro">
                  Primite svaki Telegramov longform članak iz rubrike Velike
                  priče.
                </p>
                <subscribe-button
                  mlid="Velike priče"
                  :free="false"
                  title="Velike priče"
                ></subscribe-button>
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
                  <div class="noththree full overtitle">To nije sve</div>
                  <h2 class="full newsletter-title">Još newslettera</h2>
                  <div class="noththree full subtitle">Dolazi uskoro</div>
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
  mounted() {
    this.$store.dispatch('newsletters/checkAccess', this.$route.query.email)
  },
  head() {
    const link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.telegram.hr/newsletters/',
      },
    ]
    return {
      title: 'Telegram, svaki dan u vašem inboxu',
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'cXenseParse:image',
          name: 'cXenseParse:image',
          content: require('~/assets/img/tg_share_newsletter.jpg'),
        },
        {
          hid: 'cXenseParse:title',
          name: 'cXenseParse:title',
          content: 'Telegram, svaki dan u vašem inboxu',
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'Prijavite se za newslettere i primajte najbolje od Telegrama. ',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Prijavite se za newslettere i primajte najbolje od Telegrama. ',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Telegram, svaki dan u vašem inboxu',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: require('~/assets/img/tg_share_newsletter.jpg'),
        },
        {
          hid: 'og:image:width',
          property: 'og:image:width',
          content: '1920',
        },
        {
          hid: 'og:image:height',
          property: 'og:image:height',
          content: '1080',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/newsletters/',
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
