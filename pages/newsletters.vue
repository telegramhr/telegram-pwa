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
              <subscribe-button :mlid="2128"></subscribe-button>
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
              <subscribe-button :mlid="2554"></subscribe-button>
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
              <subscribe-button :mlid="2555"></subscribe-button>
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
                  <subscribe-button
                    :mlid="2560"
                    :free="false"
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
                  <subscribe-button
                    :mlid="2596"
                    :free="false"
                  ></subscribe-button>
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
                  <subscribe-button
                    :mlid="2562"
                    :free="false"
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
                  <subscribe-button
                    :mlid="2559"
                    :free="false"
                  ></subscribe-button>
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
                  <subscribe-button
                    :mlid="2561"
                    :free="false"
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
                  <subscribe-button
                    :mlid="2563"
                    :free="false"
                  ></subscribe-button>
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
                  <subscribe-button
                    :mlid="2564"
                    :free="false"
                  ></subscribe-button>
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
                  <subscribe-button
                    :mlid="2565"
                    :free="false"
                  ></subscribe-button>
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
                  <subscribe-button
                    :mlid="2597"
                    :free="false"
                  ></subscribe-button>
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
                  <subscribe-button
                    :mlid="2566"
                    :free="false"
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
                  <subscribe-button
                    :mlid="2642"
                    :free="false"
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
                  <subscribe-button
                    :mlid="2599"
                    :free="false"
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
                  <subscribe-button
                    :mlid="2567"
                    :free="false"
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
                  <subscribe-button
                    :mlid="2568"
                    :free="false"
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
                  <subscribe-button
                    :mlid="2600"
                    :free="false"
                  ></subscribe-button>
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
                <subscribe-button :mlid="2626"></subscribe-button>
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
                <subscribe-button :mlid="2627"></subscribe-button>
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
                <subscribe-button :mlid="2628"></subscribe-button>
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
                <subscribe-button :mlid="2629"></subscribe-button>
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
                <subscribe-button :mlid="2630" :free="false"></subscribe-button>
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
  mounted() {
    this.$store.dispatch('newsletters/checkAccess', this.$route.query.email)
  },
  head() {
    const link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.telegram.hr/newsletters',
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
          content: 'https://www.telegram.hr/newsletters',
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
