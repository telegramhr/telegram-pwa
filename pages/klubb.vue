<template>
  <div
    class="main-container flex red-header-page single-article hide-billboard newsletter-page"
  >
    <div class="full flex tg-red">
      <client-only>
        <theader
          headline="Telegram Klub - ekskluzivne ponude za pretplatnike"
        ></theader>
      </client-only>
    </div>
    <!-- Header -->
    <div class="full flex relative">
      <div
        class="container relative flex mobile-side-pad stretch column-vertical-pad klub-header"
      >
        <div class="half flex-responsive center column-full-pad">
          <div class="full flex">
            <img src="@/assets/img/tg_klub_logo.svg" alt="Telegram Klub logo" />
            <h4 class="full flex small-top-margin">
              Ekskluzivno za pretplatnike: popusti i posebne akcije u
              kazalištima, knjižarama i muzejima.
            </h4>
          </div>
        </div>
        <div class="half flex-responsive center column-full-pad">
          <img
            src="@/assets/img/tg_pretplata_keypoint_vizual_klub.jpg"
            aria-hidden="true"
            class="light-mode-only"
          />
          <img
            src="@/assets/img/tg_pretplata_keypoint_vizual_klub_dark.jpg"
            aria-hidden="true"
            class="dark-mode-only"
          />
          <img
            src="@/assets/img/tg_pretplata_keypoint_vizual_klub_white.jpg"
            aria-hidden="true"
            class="contrast-mode-only"
          />
        </div>
      </div>
    </div>
    <div class="full flex relative">
      <div class="container relative flex mobile-side-pad stretch"></div>
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
              Kako do popusta?
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
              Kako do popusta?
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
              Kako do popusta?
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
              Kako do popusta?
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
              Kako do popusta?
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
              Kako do popusta?
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
              Kako do popusta?
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
              kupnju ulaznica i upišite kod ___________. Ili posjetite blagajnu
              kazališta i pokažite svoju digitalnu pretplatničku iskaznicu, koju
              možete preuzeti ovdje.
            </p>
          </div>
          <div v-show="canLogIn" class="full flex">
            <p class="full bold">
              Telegram Klub pogodnosti dostupne su ekskluzivno pretplatnicima.
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
              kupnju ulaznica i upišite kod ZKM+TELEGRAM. Ili posjetite blagajnu
              kazališta i pokažite svoju digitalnu pretplatničku iskaznicu, koju
              možete preuzeti ovdje.
            </p>
          </div>
          <div v-show="canLogIn" class="full flex">
            <p class="full bold">
              Telegram Klub pogodnosti dostupne su ekskluzivno pretplatnicima.
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
              kupnju ulaznica i upišite kod ______________. Ili posjetite
              blagajnu kazališta i pokažite svoju digitalnu pretplatničku
              iskaznicu, koju možete preuzeti ovdje.
            </p>
          </div>
          <div v-show="canLogIn" class="full flex">
            <p class="full bold">
              Telegram Klub pogodnosti dostupne su ekskluzivno pretplatnicima.
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
              Kako biste ostvarili svoj popust, posjetite web stranicu za online
              kupnju ulaznica i upišite kod ______________. Ili posjetite
              blagajnu kazališta i pokažite svoju digitalnu pretplatničku
              iskaznicu, koju možete preuzeti ovdje.
            </p>
          </div>
          <div v-show="canLogIn" class="full flex">
            <p class="full bold">
              Telegram Klub pogodnosti dostupne su ekskluzivno pretplatnicima.
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
              kupnju ulaznica i upišite kod tmghnkvz. Ili posjetite blagajnu
              kazališta i pokažite svoju digitalnu pretplatničku iskaznicu, koju
              možete preuzeti ovdje.
            </p>
          </div>
          <div v-show="canLogIn" class="full flex">
            <p class="full bold">
              Telegram Klub pogodnosti dostupne su ekskluzivno pretplatnicima.
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
              Kako biste ostvarili svoj popust, posjetite web stranicu za online
              kupnju ulaznica i upišite kod ____________. Ili posjetite blagajnu
              kazališta i pokažite svoju digitalnu pretplatničku iskaznicu, koju
              možete preuzeti ovdje.
            </p>
          </div>
          <div v-show="canLogIn" class="full flex">
            <p class="full bold">
              Telegram Klub pogodnosti dostupne su ekskluzivno pretplatnicima.
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
              Kako biste ostvarili svoj popust,posjetite blagajnu dvorane
              Lisinski i pokažite svoju digitalnu pretplatničku iskaznicu, koju
              možete preuzeti ovdje.
            </p>
          </div>
          <div v-show="canLogIn" class="full flex">
            <p class="full bold">
              Telegram Klub pogodnosti dostupne su ekskluzivno pretplatnicima.
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
          Knjižare
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
              Kako do popusta?
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
              Kako do popusta?
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
              Kako do popusta?
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
              Kako do popusta?
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
              TELEGRAM22. Ili posjetite knjižaru Fraktura i pokažite svoju
              digitalnu pretplatničku iskaznicu, koju možete preuzeti ovdje.
            </p>
          </div>
          <div v-show="canLogIn" class="full flex">
            <p class="full bold">
              Telegram Klub pogodnosti dostupne su ekskluzivno pretplatnicima.
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
              Kako biste ostvarili svoj popust, posjetite link knjige koju
              želite kupiti i pri odabiru načina plaćanja upišite kod ________.
              Ili posjetite jednu od knjižara Školske knjige i pokažite svoju
              digitalnu pretplatničku iskaznicu, koju možete preuzeti ovdje.
            </p>
          </div>
          <div v-show="canLogIn" class="full flex">
            <p class="full bold">
              Telegram Klub pogodnosti dostupne su ekskluzivno pretplatnicima.
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
              želite kupiti i pri odabiru načina plaćanja upišite kod ________.
              Ili posjetite jednu od knjižara Hoću knjigu i pokažite svoju
              digitalnu pretplatničku iskaznicu, koju možete preuzeti ovdje.
            </p>
          </div>
          <div v-show="canLogIn" class="full flex">
            <p class="full bold">
              Telegram Klub pogodnosti dostupne su ekskluzivno pretplatnicima.
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
              TELEGRAM10. Ili posjetite jednu od knjižara Ljevak i pokažite
              svoju digitalnu pretplatničku iskaznicu, koju možete preuzeti
              ovdje.
            </p>
          </div>
          <div v-show="canLogIn" class="full flex">
            <p class="full bold">
              Telegram Klub pogodnosti dostupne su ekskluzivno pretplatnicima.
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
              Kako do popusta?
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
              Kako do popusta?
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
              Kako do popusta?
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
              Kako do popusta?
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
              Kako do popusta?
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
              preuzeti ovdje.
            </p>
          </div>
          <div v-show="canLogIn" class="full flex">
            <p class="full bold">
              Telegram Klub pogodnosti dostupne su ekskluzivno pretplatnicima.
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
              možete preuzeti ovdje.
            </p>
          </div>
          <div v-show="canLogIn" class="full flex">
            <p class="full bold">
              Telegram Klub pogodnosti dostupne su ekskluzivno pretplatnicima.
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
              iskaznicu, koju možete preuzeti ovdje.
            </p>
          </div>
          <div v-show="canLogIn" class="full flex">
            <p class="full bold">
              Telegram Klub pogodnosti dostupne su ekskluzivno pretplatnicima.
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
              iskaznicu, koju možete preuzeti ovdje.
            </p>
          </div>
          <div v-show="canLogIn" class="full flex">
            <p class="full bold">
              Telegram Klub pogodnosti dostupne su ekskluzivno pretplatnicima.
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
              možete preuzeti ovdje.
            </p>
          </div>
          <div v-show="canLogIn" class="full flex">
            <p class="full bold">
              Telegram Klub pogodnosti dostupne su ekskluzivno pretplatnicima.
            </p>
            <app-link to="/pretplata" class="newbtn huge-newbtn"
              >Pretplatite se</app-link
            >
          </div>
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
