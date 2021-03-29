<template>
  <div
    class="main-container flex red-header-page pretplata-page single-article"
  >
    <div class="full flex tg-red">
      <theader></theader>
    </div>
    <div class="full flex pretplata-page-content">
      <div class="full flex relative">
        <div
          class="container relative flex mobile-side-pad stretch column-full-pad"
        >
          <h1 class="full center-text">Priče koje guraju društvo naprijed.</h1>
          <p class="full center-text">
            Pretplatite se i podržite naše bespoštedno novinarstvo.
          </p>
        </div>
      </div>
      <div class="full flex">
        <div class="container relative flex pretplata-packs mobile-side-pad">
          <input id="yeartoggle" type="checkbox" name="yeartoggle" />
          <div class="full center yeartoggle-parent">
            <label for="yeartoggle" class="relative">
              <div class="best-price-sticker animate">
                Najbolja <br />vrijednost
              </div>
              <div class="togglemonth">Mjesečno</div>
              <div class="toggleyear">Godišnje</div>
            </label>
          </div>
          <div class="full flex center pretplata-packboxes">
            <div
              class="half flex-responsive flex relative pretplata-packbox stretch"
            >
              <div class="full flex overtitle-parent">
                <h3 class="overtitle">Standard</h3>
              </div>
              <h2 class="full">49kn</h2>
              <div class="full pretplata-benefits">
                <p class="full animate">neograničeno čitanje Telegrama</p>
                <p class="full animate">specijalni newsletteri</p>
              </div>
              <div
                class="full center btn-parent"
                @click="checkout('TM0FMYURHRA3')"
              >
                <div class="btn animate">Odaberi</div>
              </div>
            </div>
            <div
              class="half flex-responsive flex relative pretplata-packbox stretch"
            >
              <div class="full flex overtitle-parent">
                <h3 class="overtitle">Premium</h3>
              </div>
              <h2 class="full">69kn</h2>
              <div class="full pretplata-benefits">
                <p class="full animate">neograničeno čitanje Telegrama</p>
                <p class="full animate">neograničeno čitanje Telesporta</p>
                <p class="full animate">specijalni newsletteri</p>
                <p class="full animate">surfanje bez oglasa</p>
                <p class="full animate">
                  knjiga jednog od naših autora<a href="#knjige-disclaimer"
                    >*</a
                  >
                </p>
              </div>
              <div
                class="full center btn-parent"
                @click="checkout('TMVUCFM94OA7')"
              >
                <div class="btn animate">Odaberi</div>
              </div>
            </div>
            <div
              class="half flex-responsive flex relative pretplata-packbox stretch"
            >
              <div class="full flex overtitle-parent">
                <h3 class="overtitle">Standard</h3>
              </div>
              <h2 class="full">499kn</h2>
              <div class="full pretplata-benefits">
                <p class="full animate">neograničeno čitanje Telegrama</p>
                <p class="full animate">specijalni newsletteri</p>
              </div>
              <div
                class="full center btn-parent"
                @click="checkout('TMXKYJUN5YN5')"
              >
                <div class="btn animate">Odaberi</div>
              </div>
            </div>
            <div
              class="half flex-responsive flex relative pretplata-packbox stretch"
            >
              <div class="full flex overtitle-parent">
                <h3 class="overtitle">Premium</h3>
              </div>
              <h2 class="full">699kn</h2>
              <div class="full pretplata-benefits">
                <p class="full animate">neograničeno čitanje Telegrama</p>
                <p class="full animate">neograničeno čitanje Telesporta</p>
                <p class="full animate">specijalni newsletteri</p>
                <p class="full animate">surfanje bez oglasa</p>
                <p class="full animate">
                  knjiga jednog od naših autora<a href="#knjige-disclaimer"
                    >*</a
                  >
                </p>
              </div>
              <div
                class="full center btn-parent"
                @click="checkout('TM8R9U7RK5B1')"
              >
                <div class="btn animate">Odaberi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="full flex relative">
        <div class="container relative flex">
          <div
            class="pretplata-keypoint fourth flex-responsive column-full-pad mobile-side-pad"
          >
            <h3>Vrhunski autori</h3>
          </div>
          <div
            class="pretplata-keypoint fourth flex-responsive column-full-pad mobile-side-pad"
          >
            <h3>Otkrivanje korupcije</h3>
          </div>
          <div
            class="pretplata-keypoint fourth flex-responsive column-full-pad mobile-side-pad"
          >
            <h3>Istraživački specijali</h3>
          </div>
          <div
            class="pretplata-keypoint fourth flex-responsive column-full-pad mobile-side-pad"
          >
            <h3>Inspirativne reportaže</h3>
          </div>
        </div>
      </div>
      <div class="full flex relative sub-point">
        <div class="container relative flex mobile-side-pad stretch">
          <div class="half flex-responsive column-full-pad">
            <img
              src="@/assets/img/tg_pretplata_keypoint_vizual_autori.jpg"
              aria-hidden="true"
            />
          </div>
          <div class="half center flex-responsive column-full-pad">
            <div class="full flex">
              <h2 class="full">
                Autorski pristup i dublji uvid u ključne društvene teme
              </h2>
              <p>
                Telegramovu ekipu čine renomirana imena i nagrađivani novinari
                kao što su Drago Hedl, Sanja Modrić, Andrej Dimitrijević, Ana
                Raić Knežević, Jasmin Klarić, Marko Repecki, Dora Kršul,
                Aleksandar Holiga, Mladen Pleše, Đivo Đurović i mnogi drugi. A
                želimo se, naravno, i pojačati.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="full flex relative sub-point alt-sub-point">
        <div class="container relative flex mobile-side-pad stretch">
          <div class="half flex-responsive column-full-pad">
            <img
              src="@/assets/img/tg_pretplata_keypoint_vizual_korupcija.jpg"
              aria-hidden="true"
            />
          </div>
          <div class="half center flex-responsive column-full-pad">
            <div class="full flex">
              <h2 class="full">
                Bespoštedne istrage koje moćnici ne mogu ignorirati.
              </h2>
              <p>
                Telegramova otkrića zataškanih kvadrata, nesrazmjera primanja i
                imovine i drugih sumnjivih radnji dovela su do smjene
                potpredsjednika Vlade Tomislava Tolušića, ministra Kuščevića i
                ministra Kujundžića, kao i velikog broja lokalnih moćnika. No,
                ne mislimo stati.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="full flex relative sub-point">
        <div class="container relative flex mobile-side-pad stretch">
          <div class="half flex-responsive column-full-pad">
            <img
              src="@/assets/img/tg_pretplata_keypoint_vizual_istrazivacki.jpg"
              aria-hidden="true"
            />
          </div>
          <div class="half center flex-responsive column-full-pad">
            <div class="full flex">
              <h2 class="full">
                Istraživački serijali i otvaranje tema o kojima se šuti.
              </h2>
              <p>
                Otkrili smo i otvorili stotine priča i tema, a među najvažnijima
                bio je istraživački serijal o zataškanom seksualnom
                uznemiravanju na Sveučilištu u Zagrebu, nakon čega nas je rektor
                Boras optužio da izmišljamo iskaze žrtava. A ima još puno tema
                koje želimo otvoriti.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="full flex relative sub-point alt-sub-point">
        <div class="container relative flex mobile-side-pad stretch">
          <div class="half flex-responsive column-full-pad">
            <img
              src="@/assets/img/tg_pretplata_keypoint_vizual_inspiracija.jpg"
              aria-hidden="true"
              class="light-mode-only"
            />
            <img
              src="@/assets/img/tg_pretplata_keypoint_vizual_inspiracija_dark.jpg"
              aria-hidden="true"
              class="dark-mode-only"
            />
          </div>
          <div class="half center flex-responsive column-full-pad">
            <div class="full flex">
              <h2 class="full">
                Inspirativne priče o ljudima koji guraju Hrvatsku naprijed.
              </h2>
              <p>
                Pozitivne priče o nevjerojatnim postignućima marginaliziranih
                pojedinca koji su nadvladali teške životne okolnosti i poslovnim
                uspjesima domaćih genija koji marljivo prkose močvarnom tlu
                hrvatske ekonomije. To su priče na kakve želimo stavljati sve
                više fokusa.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="full flex pretplata-faq">
        <div
          class="container relative flex mobile-side-pad column-full-pad single-article-body"
        >
          <h2 class="full">Često postavljana pitanja</h2>
          <details class="full flex relative">
            <summary class="full flex relative">
              Što je pretplata na Telegram?
            </summary>
            <p>
              Pretplata na Telegram omogućuje Vam, ovisno o paketu, neograničeno
              čitanje Telegrama, Telesporta i Super1, ali i brojne druge
              benefite i funkcionalnosti poput surfanja bez oglasa ili
              ekskluzivnih newslettera koje ćemo uskoro pokrenuti.
            </p>
          </details>
          <details class="full flex relative">
            <summary class="full flex relative">
              Zašto postoji pretplata na Telegramu?
            </summary>
            <p>
              Bespoštedno i neovisno novinarstvo, istraživački specijali i
              velike priče nisu jeftini. Svake godine stotine tisuća kuna odlaze
              nam na sudske borbe protiv moćnika koji, nakon što smo ih uhvatili
              u nedjelima, pokušavaju takvim pritiskom financijski devastirati
              Telegram. Nerijetko za tužbe i odmazde koriste javni novac,
              odnosno neograničena sredstva institucija na čijem su čelu, a
              protiv neograničenih sredstava nije se lako boriti. Upravo zato
              odlučili smo pitati vas, naše čitatelje, za podršku u ovome što
              radimo.
            </p>
          </details>
          <details class="full flex relative">
            <summary class="full flex relative">
              Kako da se pretplatim na Telegram?
            </summary>
            <p>
              Vrlo jednostavno, samo odaberite jedan od gore ponuđenih mjesečnih
              ili godišnjih paketa, a sustav će Vas dalje sam voditi kroz vrlo
              kratak i jednostavan proces.
            </p>
          </details>
          <details class="full flex relative">
            <summary class="full flex relative">
              Koliko košta pretplata?
            </summary>
            <p>
              Cijena pretplate ovisi o paketu koji odaberete. Možete se
              pretplatiti na mjesečnoj ili godišnjoj bazi i to na samo jedan ili
              više naših portala. Kako bismo Vam izašli u susret, pripremili smo
              povoljnu premium opciju mjesečne pretplate, kao i još povoljnije
              godišnje pretplate.
            </p>
          </details>
          <details class="full flex relative">
            <summary class="full flex relative">
              Koja mi se opcija pretplate najviše isplati?
            </summary>
            <p>
              Najisplativija opcija je godišnja premium pretplata koja Vam za 49
              kuna mjesečno omogućuje dvanaest mjeseci neograničenog čitanja
              Telegrama, Telesporta i Super1 bez oglasa, nove funkcionalnosti
              koje ćemo uvoditi i knjigu jednog od naših autora kao poseban
              poklon.
            </p>
          </details>
          <details id="knjige-disclaimer" class="full flex relative" open>
            <summary class="full flex relative">
              Kako mogu dobiti knjigu na poklon?
            </summary>
            <p>
              Ubrzo ćemo izdati knjigu jednog od naših autora, ali detalje još
              čuvamo u tajnosti. Kada knjiga bude predstavljena, poklonit ćemo
              ju našim najvjernijim pretplatnicima, a pravo na poklon knjigu
              ostvarujete pretplatom na Premium paket za cijelu godinu, ili
              nakon 3 mjeseca Premium mjesečnog paketa.
            </p>
          </details>
          <details class="full flex relative">
            <summary class="full flex relative">
              Kako mogu platiti pretplatu?
            </summary>
            <p>
              Pretplatu možete sigurno platiti svim Maestro, Mastercard i Visa
              karticama.
            </p>
          </details>
          <details class="full flex relative">
            <summary class="full flex relative">
              Mogu li nekome pokloniti pretplatu?
            </summary>
            <p>
              Trenutno ne, ali radimo na tome i uskoro ćemo to uvesti kao
              mogućnost.
            </p>
          </details>
          <details class="full flex relative">
            <summary class="full flex relative">
              Mogu li čitati Telegram sa svih uređaja jednom kad se pretplatim?
            </summary>
            <p>
              Da, svaki pretplatnik može čitati Telegram na svakom uređaju, bio
              to mobitel, računalo ili tablet.
            </p>
          </details>
          <details class="full flex relative">
            <summary class="full flex relative">
              Mi smo tvrtka/škola/knjižnica/fakultet, postoji li opcija grupne
              pretplate?
            </summary>
            <p>
              Za opcije grupne pretplate pravnim osobama javite se na
              pretplata@telegram.hr.
            </p>
          </details>
          <details class="full flex relative">
            <summary class="full flex relative">
              Hoću li moći čitati Telegram i ako se ne pretplatim?
            </summary>
            <p>
              Sve naše članke, pa i najbolje kolumne i istraživačke serijale, i
              dalje ćete moći nesmetano i besplatno čitati, ali do određene
              količine mjesečno. Nakon što potrošite svoju količinu besplatnih
              članaka u mjesecu, da bi ste nastavili čitati bit će Vam potrebna
              pretplata.
            </p>
          </details>
          <details class="full flex relative">
            <summary class="full flex relative">
              Mogu li se pretplatiti samo na Telesport ili Super1?
            </summary>
            <p>
              Naravno, možete se pretplatiti samo na neki od naših portala ili
              na sve portale zajedno, kako Vama više odgovara.
            </p>
          </details>
          <details class="full flex relative">
            <summary class="full flex relative">
              Ne mogu pronaći odgovor na svoje pitanje.
            </summary>
            <p>
              Javite nam se na
              <a href="mailto:pretplata@telegram.hr">pretplata@telegram.hr</a> i
              odgovorit ćemo vam u najkraćem roku.
            </p>
          </details>
        </div>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'Pretplata',
  methods: {
    checkout(termId) {
      if (this.$store.state.user.token) {
        this.checkout2(termId)
      } else {
        const _that = this
        window.tp.pianoId.show({
          screen: 'register',
          loggedIn(data) {
            _that.$store.dispatch('user/setUser', data)
            // window.location.reload()
            _that.checkout2(termId)
          },
        })
      }
    },
    checkout2(termId) {
      window.tp.push([
        'init',
        () => {
          window.tp.offer.show({
            offerId: 'OF5JVPQYFLE1',
            termId,
            templateId: 'OTXWXSOL0WWS',
            checkoutFlowId: 'CF65KTMVQXXX',
            closeOnLogout: true,
            complete: () => {
              this.$router.back()
            },
          })
        },
      ])
    },
  },
}
</script>
