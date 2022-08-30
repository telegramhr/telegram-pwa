<template>
  <div
    class="main-container flex red-header-page single-article hide-billboard newsletter-page"
  >
    <div class="full flex tg-red dark-mode">
      <client-only>
        <theader
          headline="Telegram Klub - ekskluzivne ponude za pretplatnike"
        ></theader>
      </client-only>
    </div>
    <!-- Header -->
    <div class="full flex relative klub-header">
      <div class="container relative flex stretch">
        <div
          class="forty flex-responsive center column-full-pad mobile-side-pad"
        >
          <div class="full flex">
            <img
              src="@/assets/img/tg_klub_logo_negative.svg"
              alt="Telegram Klub logo"
            />
            <h4 class="full flex small-top-margin">
              Postoje klubovi koji nisu za sve. <br />Ali su zato sve onima,
              koji im pripadaju.
            </h4>
            <h4 class="full flex small-top-margin">
              Klub ekskluzivnih ponuda, pogodnosti i popusta, samo za
              pretplatnike Telegrama.
            </h4>
          </div>
        </div>
        <div class="three-fourths flex-responsive">
          <img
            src="@/assets/img/tg_klub_header_vizual.jpg"
            class="desktop-only"
            alt="Telegram Klub kolaž"
          />
          <img
            src="@/assets/img/tg_klub_header_vizual_mobile.jpg"
            class="mobile-only"
            alt="Telegram Klub kolaž"
          />
        </div>
      </div>
    </div>
    <!-- Kazalista -->
    <div class="full flex relative mobile-side-pad">
      <div class="container flex relative">
        <div class="full column-horizontal-pad column-top-pad">
          <div class="full cantha-separator"></div>
        </div>
        <h3 class="full center-text column-full-pad subsection-title">
          Kazališta
        </h3>
        <div class="full flex relative stretch mobile-native-slider">
          <div
            class="fourth flex article klub-ponuda relative column-horizontal-pad"
          >
            <div class="klub-ponuda-tile relative">
              <div class="klub-sticker center">
                <div class="full center-text klub-sticker-amount">30%</div>
                <div class="full center-text klub-sticker-text">popust</div>
              </div>
              <div class="full center">
                <img
                  src="@/assets/img/extras/klub/tg_visual_klub_gavella.jpg"
                  aria-hidden="true"
                />
              </div>
            </div>
            <h3 class="full overtitle">Kazalište Gavella</h3>
            <h2 class="full">
              Popust na ulaznice za predstave kazališta Gavella
            </h2>
            <a
              href="#kazalista"
              class="newbtn clickable"
              @click="selected_kazaliste = 'gavella'"
            >
              Iskoristite ponudu
            </a>
          </div>
          <div
            class="fourth flex article klub-ponuda relative column-horizontal-pad"
          >
            <div class="klub-ponuda-tile relative">
              <div class="klub-sticker center">
                <div class="full center-text klub-sticker-amount">
                  20<span class="klub-sticker-smaller">kn</span>
                </div>
                <div class="full center-text klub-sticker-text">popust</div>
              </div>
              <div class="full center">
                <img
                  src="@/assets/img/extras/klub/tg_visual_klub_zkm.jpg"
                  aria-hidden="true"
                />
              </div>
            </div>
            <h3 class="full overtitle">Zagrebačko kazalište mladih</h3>
            <h2 class="full">Popust na ulaznice za ZKM-ove predstave</h2>
            <a
              href="#kazalista"
              class="newbtn clickable"
              @click="selected_kazaliste = 'zkm'"
            >
              Iskoristite ponudu
            </a>
          </div>
          <div
            class="fourth flex article klub-ponuda relative column-horizontal-pad"
          >
            <div class="klub-ponuda-tile relative">
              <div class="klub-sticker center">
                <div class="full center-text klub-sticker-amount">30%</div>
                <div class="full center-text klub-sticker-text">popust</div>
              </div>
              <div class="full center">
                <img
                  src="@/assets/img/extras/klub/tg_visual_klub_kerempuh.jpg"
                  aria-hidden="true"
                />
              </div>
            </div>
            <h3 class="full overtitle">Kazalište Kerempuh</h3>
            <h2 class="full">Popust na ulaznice za Kerempuhove predstave</h2>
            <a
              href="#kazalista"
              class="newbtn clickable"
              @click="selected_kazaliste = 'kerempuh'"
            >
              Iskoristite ponudu
            </a>
          </div>
          <div
            class="fourth flex article klub-ponuda relative column-horizontal-pad"
          >
            <div class="klub-ponuda-tile relative">
              <div class="klub-sticker center">
                <div class="full center-text klub-sticker-amount">10%</div>
                <div class="full center-text klub-sticker-text">popust</div>
              </div>
              <div class="full center">
                <img
                  src="@/assets/img/extras/klub/tg_visual_klub_komedija.jpg"
                  aria-hidden="true"
                />
              </div>
            </div>
            <h3 class="full overtitle">Kazalište Komedija</h3>
            <h2 class="full">
              Popust na ulaznice za predstave Kazališta Komedije
            </h2>
            <a
              href="#kazalista"
              class="newbtn clickable"
              @click="selected_kazaliste = 'komedija'"
            >
              Iskoristite ponudu
            </a>
          </div>
          <div
            class="fourth flex article klub-ponuda relative column-horizontal-pad"
          >
            <div class="klub-ponuda-tile relative">
              <div class="klub-sticker center">
                <div class="full center-text klub-sticker-amount">20%</div>
                <div class="full center-text klub-sticker-text">popust</div>
              </div>
              <div class="full center">
                <img
                  src="@/assets/img/extras/klub/tg_visual_klub_hnkvz.jpg"
                  aria-hidden="true"
                />
              </div>
            </div>
            <h3 class="full overtitle">Kazalište HNK Varaždin</h3>
            <h2 class="full">
              Popust na ulaznice za predstave kazališta HNK Varaždin
            </h2>
            <a
              href="#kazalista"
              class="newbtn clickable"
              @click="selected_kazaliste = 'hnkvz'"
            >
              Iskoristite ponudu
            </a>
          </div>
          <div
            class="fourth flex article klub-ponuda relative column-horizontal-pad"
          >
            <div class="klub-ponuda-tile relative">
              <div class="klub-sticker center">
                <div class="full center-text klub-sticker-amount">50%</div>
                <div class="full center-text klub-sticker-text">popust</div>
              </div>
              <div class="full center">
                <img
                  src="@/assets/img/extras/klub/tg_visual_klub_kmd.jpg"
                  aria-hidden="true"
                />
              </div>
            </div>
            <h3 class="full overtitle">Kazalište Marina Držića Dubrovnik</h3>
            <h2 class="full">
              Popust na ulaznice za predstave kazališta Marin Držić u Dubrovniku
            </h2>
            <a
              href="#kazalista"
              class="newbtn clickable"
              @click="selected_kazaliste = 'kmd'"
            >
              Iskoristite ponudu
            </a>
          </div>
          <div
            class="fourth flex article klub-ponuda relative column-horizontal-pad"
          >
            <div class="klub-ponuda-tile relative">
              <div class="klub-sticker center">
                <div class="full center-text klub-sticker-amount">20%</div>
                <div class="full center-text klub-sticker-text">popust</div>
              </div>
              <div class="full center">
                <img
                  src="@/assets/img/extras/klub/tg_visual_klub_lisinski.jpg"
                  aria-hidden="true"
                />
              </div>
            </div>
            <h3 class="full overtitle">Koncertna dvorana Vatroslav Lisinski</h3>
            <h2 class="full">
              Popust na ulaznice za pojedinačne koncerte u Dvorani Lisinski
            </h2>
            <a
              href="#kazalista"
              class="newbtn clickable"
              @click="selected_kazaliste = 'lisinski'"
            >
              Iskoristite ponudu
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- Kazalista expandables -->
    <div id="kazalista" class="full flex fake-inpage-anchor"></div>
    <div
      v-if="selected_kazaliste === 'kerempuh'"
      id="kerempuh"
      class="full flex relative klub-expanded"
    >
      <div class="container flex relative stretch mobile-side-pad">
        <div class="close-klub-expand" @click="selected_kazaliste = ''">x</div>
        <div class="third center flex-responsive column-left-pad">
          <img
            src="@/assets/img/extras/klub/tg_visual_klub_kerempuh.jpg"
            aria-hidden="true"
          />
        </div>
        <div class="two-thirds center flex-responsive article">
          <h3 class="full overtitle">Kazalište Kerempuh</h3>
          <h2 class="full">Popust na ulaznice za Kerempuhove predstave</h2>
          <h4 class="full">
            Telegramovi pretplatnici ostvaruju 30% popusta na ulaznice za sve
            predstave u Kerempuhu.
          </h4>
          <div v-show="!canLogIn" class="full flex">
            <p class="full bold">Kako do popusta?</p>
            <p class="full">
              Kako biste ostvarili svoj popust, posjetite web stranicu za online
              kupnju ulaznica i upišite kod ___________.
            </p>
            <p class="full">
              Možete posjetiti i jednu od blagajni kazališta i pokazati svoju
              digitalnu pretplatničku iskaznicu, koju možete preuzeti
              <a href="#iskaznica">ovdje.</a>
            </p>
          </div>
          <div v-show="canLogIn" class="full flex">
            <p class="full bold">
              Pogodnosti Telegram kluba ekskluzivno su dostupne samo našim
              pretplatnicima.
            </p>
            <app-link to="/pretplata" class="newbtn huge-newbtn"
              >Pretplatite se</app-link
            >
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="selected_kazaliste === 'zkm'"
      id="zkm"
      class="full flex relative klub-expanded"
    >
      <div class="container flex relative stretch mobile-side-pad">
        <div class="close-klub-expand" @click="selected_kazaliste = ''">x</div>
        <div class="third center flex-responsive column-left-pad">
          <img
            src="@/assets/img/extras/klub/tg_visual_klub_zkm.jpg"
            aria-hidden="true"
          />
        </div>
        <div class="two-thirds center flex-responsive article">
          <h3 class="full overtitle">Zagrebačko kazalište mladih - ZKM</h3>
          <h2 class="full">Popust na ulaznice za ZKM-ove predstave</h2>
          <h4 class="full">
            Telegramovi pretplatnici ostvaruju 20 kuna popusta na ulaznice za
            sve predstave u ZKM-u.
          </h4>
          <div v-show="!canLogIn" class="full flex">
            <p class="full bold">Kako do popusta?</p>
            <p class="full">
              Kako biste ostvarili svoj popust, posjetite web stranicu za online
              kupnju ulaznica i upišite kod <b>ZKM+TELEGRAM</b>.
            </p>
            <a
              href="https://www.zekaem.hr/raspored/"
              target="_blank"
              class="newbtn huge-newbtn"
              >Kupite ovdje</a
            >
            <p class="full small-top-margin">
              Možete posjetiti i jednu od blagajni kazališta i pokazati svoju
              digitalnu pretplatničku iskaznicu, koju možete preuzeti
              <a href="#iskaznica">ovdje.</a>
            </p>
          </div>
          <div v-show="canLogIn" class="full flex">
            <p class="full bold">
              Pogodnosti Telegram kluba ekskluzivno su dostupne samo našim
              pretplatnicima.
            </p>
            <app-link to="/pretplata" class="newbtn huge-newbtn"
              >Pretplatite se</app-link
            >
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="selected_kazaliste === 'komedija'"
      id="komedija"
      class="full flex relative klub-expanded"
    >
      <div class="container flex relative stretch mobile-side-pad">
        <div class="close-klub-expand" @click="selected_kazaliste = ''">x</div>
        <div class="third center flex-responsive column-left-pad">
          <img
            src="@/assets/img/extras/klub/tg_visual_klub_komedija.jpg"
            aria-hidden="true"
          />
        </div>
        <div class="two-thirds center flex-responsive article">
          <h3 class="full overtitle">Kazalište Komedija</h3>
          <h2 class="full">
            Popust na ulaznice za predstave Kazališta Komedije
          </h2>
          <h4 class="full">
            Telegramovi pretplatnici ostvaruju 10 % popusta na ulaznice za sve
            predstave u Kazalištu Komedija.
          </h4>
          <div v-show="!canLogIn" class="full flex">
            <p class="full bold">Kako do popusta?</p>
            <p class="full">
              Kako biste ostvarili svoj popust, posjetite web stranicu za online
              kupnju ulaznica i upišite kod <b>TELEGRAM10</b>.
            </p>
            <p class="full">
              Možete posjetiti i jednu od blagajni kazališta i pokazati svoju
              digitalnu pretplatničku iskaznicu, koju možete preuzeti
              <a href="#iskaznica">ovdje.</a>
            </p>
            <a
              href="https://ulaznice.hr/r/Kazaliste_Komedija"
              target="_blank"
              class="newbtn huge-newbtn"
              >Kupite ovdje</a
            >
          </div>
          <div v-show="canLogIn" class="full flex">
            <p class="full bold">
              Pogodnosti Telegram kluba ekskluzivno su dostupne samo našim
              pretplatnicima.
            </p>
            <app-link to="/pretplata" class="newbtn huge-newbtn"
              >Pretplatite se</app-link
            >
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="selected_kazaliste === 'kmd'"
      id="kmd"
      class="full flex relative klub-expanded"
    >
      <div class="container flex relative stretch mobile-side-pad">
        <div class="close-klub-expand" @click="selected_kazaliste = ''">x</div>
        <div class="third center flex-responsive column-left-pad">
          <img
            src="@/assets/img/extras/klub/tg_visual_klub_kmd.jpg"
            aria-hidden="true"
          />
        </div>
        <div class="two-thirds center flex-responsive article">
          <h3 class="full overtitle">Kazalište Marina Držića Dubrovnik</h3>
          <h2 class="full">
            Popust na ulaznice za predstave kazališta Marin Držić u Dubrovniku
          </h2>
          <h4 class="full">
            Telegramovi pretplatnici ostvaruju 50 % popusta na ulaznice za sve
            predstave u Kazalištu Marina Držića u Dubrovniku.
          </h4>
          <div v-show="!canLogIn" class="full flex">
            <p class="full bold">Kako do popusta?</p>
            <p class="full">
              Kako biste ostvarili svoj popust, posjetite blagajnu kazališta i
              pokažite svoju digitalnu pretplatničku iskaznicu, koju možete
              preuzeti <a href="#iskaznica">ovdje.</a>
            </p>
          </div>
          <div v-show="canLogIn" class="full flex">
            <p class="full bold">
              Pogodnosti Telegram kluba ekskluzivno su dostupne samo našim
              pretplatnicima.
            </p>
            <app-link to="/pretplata" class="newbtn huge-newbtn"
              >Pretplatite se</app-link
            >
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="selected_kazaliste === 'hnkvz'"
      id="hnkvz"
      class="full flex relative klub-expanded"
    >
      <div class="container flex relative stretch mobile-side-pad">
        <div class="close-klub-expand" @click="selected_kazaliste = ''">x</div>
        <div class="third center flex-responsive column-left-pad">
          <img
            src="@/assets/img/extras/klub/tg_visual_klub_hnkvz.jpg"
            aria-hidden="true"
          />
        </div>
        <div class="two-thirds center flex-responsive article">
          <h3 class="full overtitle">Kazalište HNK Varaždin</h3>
          <h2 class="full">
            Popust na ulaznice za predstave kazališta HNK Varaždin
          </h2>
          <h4 class="full">
            Telegramovi pretplatnici ostvaruju 20 % popusta na ulaznice za sve
            predstave u HNK Varaždin.
          </h4>
          <div v-show="!canLogIn" class="full flex">
            <p class="full bold">Kako do popusta?</p>
            <p class="full">
              Kako biste ostvarili svoj popust, posjetite web stranicu za online
              kupnju ulaznica i upišite kod <b>tmghnkvz</b>.
            </p>
            <a
              href="https://hnkvz.mojekarte.hr/hr/all.html"
              target="_blank"
              class="newbtn huge-newbtn"
              >Kupite ovdje</a
            >
            <p class="full small-top-margin">
              Možete posjetiti i jednu od blagajni kazališta i pokazati svoju
              digitalnu pretplatničku iskaznicu, koju možete preuzeti
              <a href="#iskaznica">ovdje.</a>
            </p>
          </div>
          <div v-show="canLogIn" class="full flex">
            <p class="full bold">
              Pogodnosti Telegram kluba ekskluzivno su dostupne samo našim
              pretplatnicima.
            </p>
            <app-link to="/pretplata" class="newbtn huge-newbtn"
              >Pretplatite se</app-link
            >
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="selected_kazaliste === 'gavella'"
      id="gavella"
      class="full flex relative klub-expanded"
    >
      <div class="container flex relative stretch mobile-side-pad">
        <div class="close-klub-expand" @click="selected_kazaliste = ''">x</div>
        <div class="third center flex-responsive column-left-pad">
          <img
            src="@/assets/img/extras/klub/tg_visual_klub_gavella.jpg"
            aria-hidden="true"
          />
        </div>
        <div class="two-thirds center flex-responsive article">
          <h3 class="full overtitle">Kazalište Gavella</h3>
          <h2 class="full">
            Popust na ulaznice za predstave kazališta Gavella
          </h2>
          <h4 class="full">
            Telegramovi pretplatnici ostvaruju 30 % popusta na ulaznice za sve
            predstave u Kazalištu Gavella.
          </h4>
          <div v-show="!canLogIn" class="full flex">
            <p class="full bold">Kako do popusta?</p>
            <p class="full">
              Kako biste ostvarili svoj popust, posjetite blagajnu kazališta i
              pokažite svoju digitalnu pretplatničku iskaznicu, koju možete
              preuzeti <a href="#iskaznica">ovdje.</a>
            </p>
          </div>
          <div v-show="canLogIn" class="full flex">
            <p class="full bold">
              Pogodnosti Telegram kluba ekskluzivno su dostupne samo našim
              pretplatnicima.
            </p>
            <app-link to="/pretplata" class="newbtn huge-newbtn"
              >Pretplatite se</app-link
            >
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="selected_kazaliste === 'lisinski'"
      id="lisinski"
      class="full flex relative klub-expanded"
    >
      <div class="container flex relative stretch mobile-side-pad">
        <div class="close-klub-expand" @click="selected_kazaliste = ''">x</div>
        <div class="third center flex-responsive column-left-pad">
          <img
            src="@/assets/img/extras/klub/tg_visual_klub_lisinski.jpg"
            aria-hidden="true"
          />
        </div>
        <div class="two-thirds center flex-responsive article">
          <h3 class="full overtitle">Koncertna dvorana Vatroslav Lisinski</h3>
          <h2 class="full">
            Popust na ulaznice za pojedinačne koncerte u Dvorani Lisinski
          </h2>
          <h4 class="full">
            Telegramovi pretplatnici ostvaruju 20 % popusta na ulaznice za
            pojedinačne događaje u organizaciji dvorane Lisinski.
          </h4>
          <div v-show="!canLogIn" class="full flex">
            <p class="full bold">Kako do popusta?</p>
            <p class="full">
              Kako biste ostvarili svoj popust, posjetite blagajnu dvorane
              Lisinski i pokažite svoju digitalnu pretplatničku iskaznicu, koju
              možete preuzeti <a href="#iskaznica">ovdje.</a>
            </p>
          </div>
          <div v-show="canLogIn" class="full flex">
            <p class="full bold">
              Pogodnosti Telegram kluba ekskluzivno su dostupne samo našim
              pretplatnicima.
            </p>
            <app-link to="/pretplata" class="newbtn huge-newbtn"
              >Pretplatite se</app-link
            >
          </div>
        </div>
      </div>
    </div>
    <!-- Knjizare -->
    <div class="full flex relative mobile-side-pad">
      <div class="container flex relative">
        <div class="full column-horizontal-pad column-top-pad">
          <div class="full cantha-separator"></div>
        </div>
        <h3 class="full center-text column-full-pad subsection-title">
          Knjige
        </h3>
        <div class="full flex relative stretch mobile-native-slider">
          <div
            class="fourth flex article klub-ponuda relative column-horizontal-pad"
          >
            <div class="klub-ponuda-tile relative">
              <div class="klub-sticker center">
                <div class="full center-text klub-sticker-amount">50%</div>
                <div class="full center-text klub-sticker-text">popust</div>
              </div>
              <div class="full center">
                <img
                  src="@/assets/img/extras/klub/tg_visual_klub_fraktura.jpg"
                  aria-hidden="true"
                />
              </div>
            </div>
            <h3 class="full overtitle">Fraktura</h3>
            <h2 class="full">Popust na odabrane naslove knjižare Fraktura</h2>
            <a
              href="#knjizare"
              class="newbtn clickable"
              @click="selected_knjizara = 'fraktura'"
            >
              Iskoristite ponudu
            </a>
          </div>
          <div
            class="fourth flex article klub-ponuda relative column-horizontal-pad"
          >
            <div class="klub-ponuda-tile relative">
              <div class="klub-sticker center">
                <div class="full center-text klub-sticker-amount">10%</div>
                <div class="full center-text klub-sticker-text">popust</div>
              </div>
              <div class="full center">
                <img
                  src="@/assets/img/extras/klub/tg_visual_klub_ljevak.jpg"
                  aria-hidden="true"
                />
              </div>
            </div>
            <h3 class="full overtitle">Knjižara Ljevak</h3>
            <h2 class="full">Popust na odabrane naslove knjižare Ljevak</h2>
            <a
              href="#knjizare"
              class="newbtn clickable"
              @click="selected_knjizara = 'ljevak'"
            >
              Iskoristite ponudu
            </a>
          </div>
          <div
            class="fourth flex article klub-ponuda relative column-horizontal-pad"
          >
            <div class="klub-ponuda-tile relative">
              <div class="klub-sticker center">
                <div class="full center-text klub-sticker-amount">10%</div>
                <div class="full center-text klub-sticker-text">popust</div>
              </div>
              <div class="full center">
                <img
                  src="@/assets/img/extras/klub/tg_visual_klub_hocuknjigu.jpg"
                  aria-hidden="true"
                />
              </div>
            </div>
            <h3 class="full overtitle">Hoću knjigu</h3>
            <h2 class="full">Popust na naslove u knjižari Hoću knjigu</h2>
            <a
              href="#knjizare"
              class="newbtn clickable"
              @click="selected_knjizara = 'hocuknjigu'"
            >
              Iskoristite ponudu
            </a>
          </div>
          <div
            class="fourth flex article klub-ponuda relative column-horizontal-pad"
          >
            <div class="klub-ponuda-tile relative">
              <div class="klub-sticker center">
                <div class="full center-text klub-sticker-amount">10%</div>
                <div class="full center-text klub-sticker-text">popust</div>
              </div>
              <div class="full center">
                <img
                  src="@/assets/img/extras/klub/tg_visual_klub_sk.jpg"
                  aria-hidden="true"
                />
              </div>
            </div>
            <h3 class="full overtitle">Školska knjiga</h3>
            <h2 class="full">Popust na naslove izdavača Školska knjiga</h2>
            <a
              href="#knjizare"
              class="newbtn clickable"
              @click="selected_knjizara = 'sk'"
            >
              Iskoristite ponudu
            </a>
          </div>
          <div
            class="fourth flex article klub-ponuda relative column-horizontal-pad"
          >
            <div class="klub-ponuda-tile relative">
              <div class="klub-sticker center">
                <div class="full center-text klub-sticker-amount">30%</div>
                <div class="full center-text klub-sticker-text">popust</div>
              </div>
              <div class="full center">
                <img
                  src="@/assets/img/extras/klub/tg_visual_klub_tg.jpg"
                  aria-hidden="true"
                />
              </div>
            </div>
            <h3 class="full overtitle">Telegram</h3>
            <h2 class="full">Popust na naslove izdavača Telegram</h2>
            <a
              href="#knjizare"
              class="newbtn clickable"
              @click="selected_knjizara = 'telegram'"
            >
              Iskoristite ponudu
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- Knjizare expandables -->
    <div id="knjizare" class="full flex fake-inpage-anchor"></div>
    <div
      v-if="selected_knjizara === 'fraktura'"
      id="fraktura"
      class="full flex relative klub-expanded"
    >
      <div class="container flex relative stretch mobile-side-pad">
        <div class="close-klub-expand" @click="selected_knjizara = ''">x</div>
        <div class="third center flex-responsive column-left-pad">
          <img
            src="@/assets/img/extras/klub/tg_visual_klub_fraktura.jpg"
            aria-hidden="true"
          />
        </div>
        <div class="two-thirds center flex-responsive article">
          <h3 class="full overtitle">Fraktura</h3>
          <h2 class="full">Popust na odabrane naslove knjižare Fraktura</h2>
          <h4 class="full">
            Telegramovi pretplatnici ostvaruju 50% popusta na odabrane naslove
            knjižare Fraktura.
          </h4>
          <p class="full bold">Dostupni naslovi su:</p>
          <ul class="full">
            <li>
              <a
                href="https://fraktura.hr/krvava-prostranstva.html"
                target="_blank"
                >Krvava prostranstva</a
              >
            </li>
            <li>
              <a
                href="https://fraktura.hr/raditi-kako-treba.html"
                target="_blank"
                >Raditi kako treba</a
              >
            </li>
            <li>
              <a
                href="https://fraktura.hr/krvnikov-prijelaz.html"
                target="_blank"
                >Krvnikov prijelaz</a
              >
            </li>
            <li>
              <a href="https://fraktura.hr/redovnik-moke.html" target="_blank"
                >Redovnik Moke</a
              >
            </li>
            <li>
              <a
                href="https://fraktura.hr/konkvistadori-s-kistom.html"
                target="_blank"
                >Konkvistadori s kistom</a
              >
            </li>
          </ul>
          <div v-show="!canLogIn" class="full flex">
            <p class="full bold">Kako do popusta?</p>
            <p class="full">
              Kako biste ostvarili svoj popust, posjetite link knjige koju
              želite kupiti i pri odabiru načina plaćanja upišite kod
              <b>TELEGRAM22</b>.
            </p>
            <p class="full">
              Možete posjetiti i knjižaru Fraktura i pokazati svoju digitalnu
              pretplatničku iskaznicu, koju možete preuzeti
              <a href="#iskaznica">ovdje.</a>
            </p>
          </div>
          <div v-show="canLogIn" class="full flex">
            <p class="full bold">
              Pogodnosti Telegram kluba ekskluzivno su dostupne samo našim
              pretplatnicima.
            </p>
            <app-link to="/pretplata" class="newbtn huge-newbtn"
              >Pretplatite se</app-link
            >
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="selected_knjizara === 'sk'"
      id="sk"
      class="full flex relative klub-expanded"
    >
      <div class="container flex relative stretch mobile-side-pad">
        <div class="close-klub-expand" @click="selected_knjizara = ''">x</div>
        <div class="third center flex-responsive column-left-pad">
          <img
            src="@/assets/img/extras/klub/tg_visual_klub_sk.jpg"
            aria-hidden="true"
          />
        </div>
        <div class="two-thirds center flex-responsive article">
          <h3 class="full overtitle">Školska knjiga</h3>
          <h2 class="full">Popust na naslove izdavača Školska knjiga</h2>
          <h4 class="full">
            Telegramovi pretplatnici ostvaruju dodatnih 10% popusta na naslove u
            ponudi Školske knjige.
          </h4>
          <div v-show="!canLogIn" class="full flex">
            <p class="full bold">Kako do popusta?</p>
            <p class="full">
              Kako biste ostvarili svoj popust, posjetite jednu od knjižara
              Školske knjige i pokažite svoju digitalnu pretplatničku iskaznicu,
              koju možete preuzeti <a href="#iskaznica">ovdje.</a>
            </p>
          </div>
          <div v-show="canLogIn" class="full flex">
            <p class="full bold">
              Pogodnosti Telegram kluba ekskluzivno su dostupne samo našim
              pretplatnicima.
            </p>
            <app-link to="/pretplata" class="newbtn huge-newbtn"
              >Pretplatite se</app-link
            >
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="selected_knjizara === 'hocuknjigu'"
      id="hocuknjigu"
      class="full flex relative klub-expanded"
    >
      <div class="container flex relative stretch mobile-side-pad">
        <div class="close-klub-expand" @click="selected_knjizara = ''">x</div>
        <div class="third center flex-responsive column-left-pad">
          <img
            src="@/assets/img/extras/klub/tg_visual_klub_hocuknjigu.jpg"
            aria-hidden="true"
          />
        </div>
        <div class="two-thirds center flex-responsive article">
          <h3 class="full overtitle">Hoću knjigu</h3>
          <h2 class="full">Popust na naslove u knjižari Hoću knjigu</h2>
          <h4 class="full">
            Telegramovi pretplatnici ostvaruju dodatnih 10% popusta na naslove u
            ponudi Hoću knjigu.
          </h4>
          <div v-show="!canLogIn" class="full flex">
            <p class="full bold">Kako do popusta?</p>
            <p class="full">
              Kako biste ostvarili svoj popust, posjetite link knjige koju
              želite kupiti i pri odabiru načina plaćanja upišite kod
              <b>HKTG10</b>.
            </p>
            <a
              href="https://www.hocuknjigu.hr/?gclid=CjwKCAjw14uVBhBEEiwAaufYxyafX-1BrWomTMdFgs2kQP0hcVMYFg6-uUc1dSNltjvadgPSnFRAKxoCpmAQAvD_BwE"
              target="_blank"
              class="newbtn huge-newbtn"
              >Kupite ovdje</a
            >
            <p class="full small-top-margin">
              Možete posjetiti i jednu od knjižara Hoću knjigu i pokazati svoju
              digitalnu pretplatničku iskaznicu, koju možete preuzeti
              <a href="#iskaznica">ovdje.</a>
            </p>
          </div>
          <div v-show="canLogIn" class="full flex">
            <p class="full bold">
              Pogodnosti Telegram kluba ekskluzivno su dostupne samo našim
              pretplatnicima.
            </p>
            <app-link to="/pretplata" class="newbtn huge-newbtn"
              >Pretplatite se</app-link
            >
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="selected_knjizara === 'ljevak'"
      id="ljevak"
      class="full flex relative klub-expanded"
    >
      <div class="container flex relative stretch mobile-side-pad">
        <div class="close-klub-expand" @click="selected_knjizara = ''">x</div>
        <div class="third center flex-responsive column-left-pad">
          <img
            src="@/assets/img/extras/klub/tg_visual_klub_ljevak.jpg"
            aria-hidden="true"
          />
        </div>
        <div class="two-thirds center flex-responsive article">
          <h3 class="full overtitle">Knjižara Ljevak</h3>
          <h2 class="full">Popust na odabrane naslove knjižare Ljevak</h2>
          <h4 class="full">
            Telegramovi pretplatnici ostvaruju dodatnih 10% popusta na naslove
            knjižare Ljevak uz minimalnu narudžbu od 100 kuna.
          </h4>
          <div v-show="!canLogIn" class="full flex">
            <p class="full bold">Kako do popusta?</p>
            <p class="full">
              Kako biste ostvarili svoj popust, posjetite link knjige koju
              želite kupiti i pri odabiru načina plaćanja upišite kod
              <b>TELEGRAM10</b>.
            </p>
            <a
              href="https://www.ljevak.hr/"
              target="_blank"
              class="newbtn huge-newbtn"
              >Kupite ovdje</a
            >
            <p class="full small-top-margin">
              Možete posjetiti i jednu od knjižara Ljevak i pokazati svoju
              digitalnu pretplatničku iskaznicu, koju možete preuzeti
              <a href="#iskaznica">ovdje.</a>
            </p>
          </div>
          <div v-show="canLogIn" class="full flex">
            <p class="full bold">
              Pogodnosti Telegram kluba ekskluzivno su dostupne samo našim
              pretplatnicima.
            </p>
            <app-link to="/pretplata" class="newbtn huge-newbtn"
              >Pretplatite se</app-link
            >
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="selected_knjizara === 'telegram'"
      id="telegram"
      class="full flex relative klub-expanded"
    >
      <div class="container flex relative stretch mobile-side-pad">
        <div class="close-klub-expand" @click="selected_knjizara = ''">x</div>
        <div class="third center flex-responsive column-left-pad">
          <img
            src="@/assets/img/extras/klub/tg_visual_klub_tg.jpg"
            aria-hidden="true"
          />
        </div>
        <div class="two-thirds center flex-responsive article">
          <h3 class="full overtitle">Telegram Media Grupa</h3>
          <h2 class="full">
            Popust na sve naslove izdavača Telegram Media Grupa
          </h2>
          <h4 class="full">
            Telegramovi pretplatnici ostvaruju 30% popusta na sve naslove
            izdavača Telegram Media Grupa.
          </h4>
          <div v-show="!canLogIn" class="full flex">
            <p class="full bold">Kako do popusta?</p>
            <p class="full">
              Kako biste ostvarili svoj popust, prijavite se na svoj Telegram
              račun s aktivnom pretplatom te posjetite link knjige koju želite
              kupiti. Popust će biti automatski aktiviran.
            </p>
            <p class="full bold small-top-margin">Dostupni naslovi su:</p>
            <ul class="full">
              <li>
                <a
                  href="https://www.telegram.hr/knjiga/zrinka-paladino-o-zagrebu"
                  target="_blank"
                  >Zrinka Paladino - O Zagrebu i... Telegramovih 48</a
                >
              </li>
              <li>
                <a
                  href="https://www.telegram.hr/knjiga/boris-dezulovic-bili-libar"
                  target="_blank"
                  >Boris Dežulović: Bili libar</a
                >
              </li>
            </ul>
          </div>
          <div v-show="canLogIn" class="full flex">
            <p class="full bold">
              Pogodnosti Telegram kluba ekskluzivno su dostupne samo našim
              pretplatnicima.
            </p>
            <app-link to="/pretplata" class="newbtn huge-newbtn"
              >Pretplatite se</app-link
            >
          </div>
        </div>
      </div>
    </div>
    <!-- Muzeji -->
    <div class="full flex relative mobile-side-pad">
      <div class="container flex relative">
        <div class="full column-horizontal-pad column-top-pad">
          <div class="full cantha-separator"></div>
        </div>
        <h3 class="full center-text column-full-pad subsection-title">
          Muzeji
        </h3>
        <div class="full flex relative stretch mobile-native-slider">
          <div
            class="fourth flex article klub-ponuda relative column-horizontal-pad"
          >
            <div class="klub-ponuda-tile relative">
              <div class="klub-sticker center">
                <div class="full center-text klub-sticker-amount">30%</div>
                <div class="full center-text klub-sticker-text">popust</div>
              </div>
              <div class="full center">
                <img
                  src="@/assets/img/extras/klub/tg_visual_klub_msu.jpg"
                  aria-hidden="true"
                />
              </div>
            </div>
            <h3 class="full overtitle">Muzej Suvremene Umjetnosti</h3>
            <h2 class="full">Popust na ulaznice za MSU izložbe i događaje</h2>
            <a
              href="#muzeji"
              class="newbtn clickable"
              @click="selected_muzej = 'msu'"
            >
              Iskoristite ponudu
            </a>
          </div>
          <div
            class="fourth flex article klub-ponuda relative column-horizontal-pad"
          >
            <div class="klub-ponuda-tile relative">
              <div class="klub-sticker center">
                <div class="full center-text klub-sticker-amount">
                  10<span class="klub-sticker-smaller">kn</span>
                </div>
                <div class="full center-text klub-sticker-text">popust</div>
              </div>
              <div class="full center">
                <img
                  src="@/assets/img/extras/klub/tg_visual_klub_veza.jpg"
                  aria-hidden="true"
                />
              </div>
            </div>
            <h3 class="full overtitle">Muzej prekinutih veza</h3>
            <h2 class="full">
              Popust na ulaznice za izložbe Muzeja prekinutih veza
            </h2>
            <a
              href="#muzeji"
              class="newbtn clickable"
              @click="selected_muzej = 'veza'"
            >
              Iskoristite ponudu
            </a>
          </div>
          <div
            class="fourth flex article klub-ponuda relative column-horizontal-pad"
          >
            <div class="klub-ponuda-tile relative">
              <div class="klub-sticker center">
                <div class="full center-text klub-sticker-amount">
                  10<span class="klub-sticker-smaller">kn</span>
                </div>
                <div class="full center-text klub-sticker-text">popust</div>
              </div>
              <div class="full center">
                <img
                  src="@/assets/img/extras/klub/tg_visual_klub_amz.jpg"
                  aria-hidden="true"
                />
              </div>
            </div>
            <h3 class="full overtitle">Arheološki muzej</h3>
            <h2 class="full">
              Popust na ulaznice za park Arheološkog muzeja u Zagrebu
            </h2>
            <a
              href="#muzeji"
              class="newbtn clickable"
              @click="selected_muzej = 'amz'"
            >
              Iskoristite ponudu
            </a>
          </div>
          <div
            class="fourth flex article klub-ponuda relative column-horizontal-pad"
          >
            <div class="klub-ponuda-tile relative">
              <div class="klub-sticker center">
                <div class="full center-text klub-sticker-amount">
                  10<span class="klub-sticker-smaller">kn</span>
                </div>
                <div class="full center-text klub-sticker-text">popust</div>
              </div>
              <div class="full center">
                <img
                  src="@/assets/img/extras/klub/tg_visual_klub_iluzija.jpg"
                  aria-hidden="true"
                />
              </div>
            </div>
            <h3 class="full overtitle">Muzej iluzija</h3>
            <h2 class="full">Popust na ulaznice za izložbu Muzeja iluzija</h2>
            <a
              href="#muzeji"
              class="newbtn clickable"
              @click="selected_muzej = 'iluzija'"
            >
              Iskoristite ponudu
            </a>
          </div>
          <div
            class="fourth flex article klub-ponuda relative column-horizontal-pad"
          >
            <div class="klub-ponuda-tile relative">
              <div class="klub-sticker center">
                <div class="full center-text klub-sticker-amount">
                  10<span class="klub-sticker-smaller">kn</span>
                </div>
                <div class="full center-text klub-sticker-text">popust</div>
              </div>
              <div class="full center">
                <img
                  src="@/assets/img/extras/klub/tg_visual_klub_mvk.jpg"
                  aria-hidden="true"
                />
              </div>
            </div>
            <h3 class="full overtitle">Muzej Vučedolske kulture</h3>
            <h2 class="full">
              Popust na ulaznice za izložbe Muzeja Vučedolske kulture
            </h2>
            <a
              href="#muzeji"
              class="newbtn clickable"
              @click="selected_muzej = 'mvk'"
            >
              Iskoristite ponudu
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- Muzeji expendables -->
    <div id="muzeji" class="full flex fake-inpage-anchor"></div>
    <div
      v-if="selected_muzej === 'msu'"
      id="msu"
      class="full flex relative klub-expanded"
    >
      <div class="container flex relative stretch mobile-side-pad">
        <div class="close-klub-expand" @click="selected_muzej = ''">x</div>
        <div class="third center flex-responsive column-left-pad">
          <img
            src="@/assets/img/extras/klub/tg_visual_klub_msu.jpg"
            aria-hidden="true"
          />
        </div>
        <div class="two-thirds center flex-responsive article">
          <h3 class="full overtitle">Muzej Suvremene Umjetnosti</h3>
          <h2 class="full">Popust na ulaznice za MSU izložbe i događaje</h2>
          <h4 class="full">
            Telegramovi pretplatnici ostvaruju 30% popusta na izložbe i događaje
            MSU-a.
          </h4>
          <div v-show="!canLogIn" class="full flex">
            <p class="full bold">Kako do popusta?</p>
            <p class="full">
              Kako biste ostvarili svoj popust, posjetite blagajnu MSU-a i
              pokažite svoju digitalnu pretplatničku iskaznicu, koju možete
              preuzeti <a href="#iskaznica">ovdje.</a>
            </p>
          </div>
          <div v-show="canLogIn" class="full flex">
            <p class="full bold">
              Pogodnosti Telegram kluba ekskluzivno su dostupne samo našim
              pretplatnicima.
            </p>
            <app-link to="/pretplata" class="newbtn huge-newbtn"
              >Pretplatite se</app-link
            >
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="selected_muzej === 'amz'"
      id="amz"
      class="full flex relative klub-expanded"
    >
      <div class="container flex relative stretch mobile-side-pad">
        <div class="close-klub-expand" @click="selected_muzej = ''">x</div>
        <div class="third center flex-responsive column-left-pad">
          <img
            src="@/assets/img/extras/klub/tg_visual_klub_amz.jpg"
            aria-hidden="true"
          />
        </div>
        <div class="two-thirds center flex-responsive article">
          <h3 class="full overtitle">Arheološki muzej</h3>
          <h2 class="full">
            Popust na ulaznice za park Arheološkog muzeja u Zagrebu
          </h2>
          <h4 class="full">
            Telegramovi pretplatnici ostvaruju 10 kuna popusta na ulaznice
            Arheološkog Parka.
          </h4>
          <div v-show="!canLogIn" class="full flex">
            <p class="full bold">Kako do popusta?</p>
            <p class="full">
              Kako biste ostvarili svoj popust, posjetite blagajnu Arheološkog
              muzeja i pokažite svoju digitalnu pretplatničku iskaznicu, koju
              možete preuzeti <a href="#iskaznica">ovdje.</a>
            </p>
          </div>
          <div v-show="canLogIn" class="full flex">
            <p class="full bold">
              Pogodnosti Telegram kluba ekskluzivno su dostupne samo našim
              pretplatnicima.
            </p>
            <app-link to="/pretplata" class="newbtn huge-newbtn"
              >Pretplatite se</app-link
            >
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="selected_muzej === 'veza'"
      id="veza"
      class="full flex relative klub-expanded"
    >
      <div class="container flex relative stretch mobile-side-pad">
        <div class="close-klub-expand" @click="selected_muzej = ''">x</div>
        <div class="third center flex-responsive column-left-pad">
          <img
            src="@/assets/img/extras/klub/tg_visual_klub_veza.jpg"
            aria-hidden="true"
          />
        </div>
        <div class="two-thirds center flex-responsive article">
          <h3 class="full overtitle">Muzej prekinutih veza</h3>
          <h2 class="full">
            Popust na ulaznice za izložbe Muzeja prekinutih veza
          </h2>
          <h4 class="full">
            Telegramovi pretplatnici ostvaruju 10 kuna popusta na izložbe Muzeja
            prekinutih veza.
          </h4>
          <div v-show="!canLogIn" class="full flex">
            <p class="full bold">Kako do popusta?</p>
            <p class="full">
              Kako biste ostvarili svoj popust, posjetite blagajnu Muzeja
              prekinutih veza i pokažite svoju digitalnu pretplatničku
              iskaznicu, koju možete preuzeti <a href="#iskaznica">ovdje.</a>
            </p>
          </div>
          <div v-show="canLogIn" class="full flex">
            <p class="full bold">
              Pogodnosti Telegram kluba ekskluzivno su dostupne samo našim
              pretplatnicima.
            </p>
            <app-link to="/pretplata" class="newbtn huge-newbtn"
              >Pretplatite se</app-link
            >
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="selected_muzej === 'mvk'"
      id="mvk"
      class="full flex relative klub-expanded"
    >
      <div class="container flex relative stretch mobile-side-pad">
        <div class="close-klub-expand" @click="selected_muzej = ''">x</div>
        <div class="third center flex-responsive column-left-pad">
          <img
            src="@/assets/img/extras/klub/tg_visual_klub_mvk.jpg"
            aria-hidden="true"
          />
        </div>
        <div class="two-thirds center flex-responsive article">
          <h3 class="full overtitle">Muzej Vučedolske kulture</h3>
          <h2 class="full">
            Popust na ulaznice za izložbe Muzeja Vučedolske kulture
          </h2>
          <h4 class="full">
            Telegramovi pretplatnici ostvaruju 10 kuna popusta na izložbe Muzeja
            Vučedolske kulture.
          </h4>
          <div v-show="!canLogIn" class="full flex">
            <p class="full bold">Kako do popusta?</p>
            <p class="full">
              Kako biste ostvarili svoj popust, posjetite blagajnu Muzeja
              Vučedolske kulture i pokažite svoju digitalnu pretplatničku
              iskaznicu, koju možete preuzeti <a href="#iskaznica">ovdje.</a>
            </p>
          </div>
          <div v-show="canLogIn" class="full flex">
            <p class="full bold">
              Pogodnosti Telegram kluba ekskluzivno su dostupne samo našim
              pretplatnicima.
            </p>
            <app-link to="/pretplata" class="newbtn huge-newbtn"
              >Pretplatite se</app-link
            >
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="selected_muzej === 'iluzija'"
      id="iluzija"
      class="full flex relative klub-expanded"
    >
      <div class="container flex relative stretch mobile-side-pad">
        <div class="close-klub-expand" @click="selected_muzej = ''">x</div>
        <div class="third center flex-responsive column-left-pad">
          <img
            src="@/assets/img/extras/klub/tg_visual_klub_iluzija.jpg"
            aria-hidden="true"
          />
        </div>
        <div class="two-thirds center flex-responsive article">
          <h3 class="full overtitle">Muzej iluzija</h3>
          <h2 class="full">Popust na ulaznice za izložbu Muzeja iluzija</h2>
          <h4 class="full">
            Telegramovi pretplatnici ostvaruju 10 kuna popusta na izložbe Muzeja
            iluzija.
          </h4>
          <div v-show="!canLogIn" class="full flex">
            <p class="full bold">Kako do popusta?</p>
            <p class="full">
              Kako biste ostvarili svoj popust, posjetite blagajnu Muzeja
              iluzija i pokažite svoju digitalnu pretplatničku iskaznicu, koju
              možete preuzeti <a href="#iskaznica">ovdje.</a>
            </p>
          </div>
          <div v-show="canLogIn" class="full flex">
            <p class="full bold">
              Pogodnosti Telegram kluba ekskluzivno su dostupne samo našim
              pretplatnicima.
            </p>
            <app-link to="/pretplata" class="newbtn huge-newbtn"
              >Pretplatite se</app-link
            >
          </div>
        </div>
      </div>
    </div>
    <div id="iskaznica" class="full flex fake-inpage-anchor"></div>
    <div v-show="!canLogIn" class="full flex relative mobile-side-pad">
      <div class="container flex relative column-bottom-pad">
        <div class="full column-horizontal-pad column-top-pad">
          <div class="full cantha-separator"></div>
        </div>
        <h3 class="full center-text column-full-pad subsection-title">
          Vaša klub iskaznica
        </h3>
        <div class="full center relative">
          <div class="klub-card flex stretch relative">
            <div class="full flex center">
              <img
                src="@/assets/img/telegram_logo_white.svg"
                alt="Telegram logo"
              />
              <div class="full flex klub-card-content">
                <p class="full center-text">{{ subscriber_klub_ime }}</p>
                <p class="full center-text">ID {{ subscriber_klub_id }}</p>
                <p class="full center-text">
                  Datum isteka: {{ subscriber_klub_expiration }}
                </p>
              </div>
            </div>
            <div class="full flex center klub-qr">
              <img src="@/assets/img/extras/klub/tg_qr_klub.png" />
            </div>
            <img
              src="@/assets/img/tg_bg_fancyarc.jpg"
              aria-hidden="true"
              class="img-as-bg"
            />
          </div>
        </div>
        <div class="full center">
          <p class="full faded center-text klub-disclaimer">
            Ovo je digitalna iskaznica koja vas identificira kao pretplatnika
            Telegrama. Nije prenosiva i vrijedi samo dok vam traje pretplata.
          </p>
        </div>
      </div>
    </div>
    <div class="full flex column-full-pad"></div>
    <!-- Footer -->
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'TelegramKlub',
  data() {
    return {
      selected_kazaliste: '',
      selected_knjizara: '',
      selected_muzej: '',
      subscriber_klub_ime: 'Pero Perić',
      subscriber_klub_id: '42069',
      subscriber_klub_expiration: '01.01.2023.',
    }
  },
  computed: {
    canLogIn() {
      return this.$store.state.user.exp * 1000 < new Date().getTime()
    },
  },
  mounted() {
    this.$store.dispatch('newsletters/checkAccess', this.$route.query.email)
  },
  head() {
    const link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.telegram.hr/klub',
      },
    ]
    return {
      title: 'Telegram Klub - ekskluzivne ponude za pretplatnike',
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
          content: 'Telegram Klub - ekskluzivne ponude za pretplatnike',
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'Popusti i posebne akcije u kazalištima, knjižarama i muzejima.',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Popusti i posebne akcije u kazalištima, knjižarama i muzejima.',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article klub-ponuda',
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
