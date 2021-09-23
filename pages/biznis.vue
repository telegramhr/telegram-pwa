<template>
  <div class="main-container flex fancy-rubrika tg-biznis">
    <div class="full flex">
      <theader></theader>
    </div>
    <div class="full flex relative fancy-rubrika-header">
      <div class="os-section-title-left-el"></div>
      <div class="os-section-title-right-el"></div>
      <div class="container flex os-section-parent stretch">
        <div
          class="third flex-responsive flex rubrika-header-logo column-full-pad"
        >
          <div class="full flex">
            <img
              src="@/assets/img/telegram_logo_black.svg"
              alt="Telegram"
              class="tg-overlogo"
            />
          </div>
          <div class="full flex">
            <img
              src="@/assets/img/tg_biznis_logo.svg"
              alt="Telegram Biznis"
              class="rubrika-logo"
            />
          </div>
        </div>
        <div class="two-thirds flex-responsive flex center">
          <div class="half flex">
            <client-only>
              <stocks></stocks>
            </client-only>
          </div>
          <div class="half flex">
            <client-only>
              <stocks></stocks>
            </client-only>
          </div>
        </div>
        <nav class="full center page-header-nav hide">
          <app-link role="menuitem" to="/biznis-tech">Vještine</app-link>
          <app-link role="menuitem" to="/biznis-tech"
            >Tvrtke i karijere</app-link
          >
          <app-link role="menuitem" to="/biznis-tech"
            >Kvizovi i testovi</app-link
          >
          <app-link role="menuitem" to="/biznis-tech">Vodiči</app-link>
        </nav>
      </div>
    </div>
    <div class="full relative">
      <div class="container flex relative stretch standard-block intro-block">
        <div
          class="full flex column-horizontal-pad column-top-pad mobile-side-pad"
        >
          <div class="full flex article-big column-bottom-border">
            <!--<featured :key="posts[0].id" :post="posts[0]"></featured>-->
            <div class="full flex article-featured article" role="article">
              <a
                href="https://www.telegram.hr/biznis-tech/kako-je-ht-nagradio-napore-svojih-zaposlenika-ovog-bozica-usred-pandemije-koronavirusa/"
              >
                <img
                  src="https://images.telegram.hr/nJ4pWuHi0fEcQfzBfxRlJfN_79KCZyj6WmUMN05CVYc/preset:single2/aHR0cHM6Ly93d3cudGVsZWdyYW0uaHIvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMTIvYmFydHVsb3ZpYy1pdmFuMi5qcGc.jpg"
                />
              </a>
              <div class="full flex article-pad">
                <div class="full flex">
                  <h3 class="overtitle">Tvrtke i karijere</h3>
                </div>
                <h2 class="full animate">
                  Kako je HT nagradio napore svojih zaposlenika ovog Božića
                  usred pandemije koronavirusa
                </h2>
                <h4 class="full">
                  Član Uprave za ljudske potencijale HT-a nam je pojasnio kako
                  nagrađuju svoje zaposlenike
                </h4>
                <h5 class="full flex article-meta">
                  <span class="meta-author"><i>Piše</i> Ivan Luzar</span>
                  <span class="meta-preporuke">0 preporuka</span>
                  <span class="meta-date">22. 12. 2020.</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div class="full flex mobile-side-pad stretch">
          <div class="third flex-responsive column-vertical-pad stretch">
            <div class="full flex column-horizontal-pad">
              <!--<featured :key="posts[1].id" :post="posts[1]"></featured>-->
              <div class="full flex article-featured article" role="article">
                <a
                  href="https://www.telegram.hr/velike-price/ovo-je-tvrtka-zbog-koje-u-nasim-ducanima-mozete-platiti-mobitelom-bili-smo-u-njezinim-uredima-u-zagrebu/"
                >
                  <img
                    src="https://www.telegram.hr/wp-content/uploads/2019/10/mercury-otvorna.jpg"
                  />
                </a>
                <div class="full flex article-pad">
                  <div class="full flex">
                    <h3 class="overtitle">Tvrtke i karijere</h3>
                  </div>
                  <h2 class="full animate">
                    Ovo je tvrtka zbog koje u našim dućanima možete platiti
                    mobitelom. Bili smo u njezinim uredima u Zagrebu
                  </h2>
                  <h4 class="full">
                    Reportaža iz zagrebačkog sjedišta Mercury Processing
                    Services Internationala u kojem radi 300 ljudi
                  </h4>
                  <h5 class="full flex article-meta">
                    <span class="meta-author"><i>Piše</i> Petra Smoljak</span>
                    <span class="meta-preporuke">0 preporuka</span>
                    <span class="meta-date">22. 12. 2020.</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div class="third flex-responsive column-vertical-pad stretch">
            <div
              class="full flex column-horizontal-pad column-left-border column-right-border"
            >
              <!--<featured :key="posts[2].id" :post="posts[2]"></featured>-->
              <div class="full flex article-featured article" role="article">
                <a
                  href="https://www.telegram.hr/zivot/hoce-li-posao-od-8-sati-u-komadu-uskoro-nestati-ova-generacija-zbilja-bi-mogla-dokrajciti-radno-vrijeme-od-9-do-17/"
                >
                  <img
                    src="https://www.telegram.hr/wp-content/uploads/2019/04/glavna-2.jpg"
                  />
                </a>
                <div class="full flex article-pad">
                  <div class="full flex">
                    <h3 class="overtitle">Tvrtke i karijere</h3>
                  </div>
                  <h2 class="full animate">
                    Hoće li posao od 8 sati u komadu uskoro nestati? Ova
                    generacija zbilja bi mogla dokrajčiti radno vrijeme od 9 do
                    17
                  </h2>
                  <h4 class="full">
                    O zakon poslu razgovarali smo sa 100 milenijalaca iz cijele
                    Hrvatske. Ovaj put otkrivaju što su za njih zakon radno
                    vrijeme i zakon godišnji
                  </h4>
                  <h5 class="full flex article-meta">
                    <span class="meta-author"><i>Piše</i> Telegram</span>
                    <span class="meta-preporuke">0 preporuka</span>
                    <span class="meta-date">22. 12. 2020.</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div class="third flex-responsive column-vertical-pad stretch">
            <div class="full flex column-horizontal-pad">
              <!--<featured :key="posts[3].id" :post="posts[3]"></featured>-->
              <div class="full flex article-featured article" role="article">
                <a
                  href="https://www.telegram.hr/zivot/cim-dobijete-prvi-posao-i-placu-dosta-je-vazno-ne-propustiti-jednu-stvar-za-koju-imate-rok-od-samo-30-dana/"
                >
                  <img
                    src="https://images.telegram.hr/7aWHdBY3ZjJ8-iADicNP_Dub8FPDYWrCdkeIqk0icxA/preset:single2/aHR0cHM6Ly93d3cudGVsZWdyYW0uaHIvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMTAvbmlrYV91dm9kbmEtZm90b190ZWxlZ3JhbS5qcGc.jpg"
                  />
                </a>
                <div class="full flex article-pad">
                  <div class="full flex">
                    <h3 class="overtitle">Vještine</h3>
                  </div>
                  <h2 class="full animate">
                    Čim dobijete prvi posao i plaću, dosta je važno ne
                    propustiti jednu stvar za koju imate rok od samo 30 dana
                  </h2>
                  <h4 class="full">
                    Korak po korak kako odabrati i promijeniti mirovinski fond
                    te upravljati svojom mirovinskom štednjom
                  </h4>
                  <h5 class="full flex article-meta">
                    <span class="meta-author"><i>Piše</i> Telegram</span>
                    <span class="meta-preporuke">0 preporuka</span>
                    <span class="meta-date">22. 12. 2020.</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="full center column-full-pad">
      <div style="width: 1200px; height: 250px; background-color: #ccc"></div>
    </div>
    <div class="full relative">
      <div class="container flex relative block-2 standard-block stretch">
        <section
          class="fourth flex flex-responsive column-horizontal-pad mobile-side-pad"
        >
          <div class="full flex desktop-only">
            <trending :id="1"></trending>
            <h2 class="full flex section-title">Newsletter</h2>
            <newsletter></newsletter>
          </div>
        </section>
        <div class="three-fourths flex-responsive flex">
          <section
            class="two-thirds flex-responsive flex mobile-side-pad column-horizontal-pad column-right-border column-left-border"
          >
            <featured :key="posts[1].id" :post="posts[1]"></featured>
            <div class="full flex split-articles">
              <medium :key="posts[2].id" :post="posts[2]"></medium>
              <medium :key="posts[3].id" :post="posts[3]"></medium>
              <medium :key="posts[4].id" :post="posts[4]"></medium>
            </div>
          </section>
          <section
            class="third flex-responsive flex mobile-side-pad column-horizontal-pad"
          >
            <standard :key="posts[5].id" :post="posts[5]"></standard>
            <standard :key="posts[6].id" :post="posts[6]"></standard>
            <standard :key="posts[7].id" :post="posts[7]"></standard>
          </section>
        </div>
      </div>
    </div>
    <client-only>
      <big-featured></big-featured>
    </client-only>
    <div class="full flex">
      <div class="container flex relative native-block stretch mobile-side-pad">
        <div class="fourth flex-responsive column-full-pad">
          <standard :key="posts[8].id" :post="posts[8]"></standard>
        </div>
        <div class="fourth flex-responsive column-full-pad">
          <standard :key="posts[9].id" :post="posts[9]"></standard>
        </div>
        <div class="fourth flex-responsive column-full-pad">
          <standard :key="posts[1].id" :post="posts[1]"></standard>
        </div>
        <div class="fourth flex-responsive column-full-pad">
          <standard :key="posts[2].id" :post="posts[2]"></standard>
        </div>
        <div class="fourth flex-responsive column-full-pad">
          <standard :key="posts[3].id" :post="posts[3]"></standard>
        </div>
        <div class="fourth flex-responsive column-full-pad">
          <standard :key="posts[4].id" :post="posts[4]"></standard>
        </div>
        <div class="fourth flex-responsive column-full-pad">
          <standard :key="posts[5].id" :post="posts[5]"></standard>
        </div>
        <div class="fourth flex-responsive column-full-pad">
          <standard :key="posts[6].id" :post="posts[6]"></standard>
        </div>
        <div class="full center subtle-btn-parent relative clickable">
          <div class="subtle-btn animate">Vidi više</div>
          <div class="subtle-btn-line"></div>
        </div>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  async fetch() {
    await this.$axios
      .get('/api/author/ivan-luzar')
      .then((res) => {
        this.posts = res.data.posts
      })
      .catch(() => {
        // set status code on server and
        if (process.server) {
          this.$telegram.context.res.statusCode = 404
        }
        // use throw new Error()
        throw new Error('User not found')
      })
  },
  data() {
    return {
      loading: false,
      posts: [],
      page: 2,
      hasMore: true,
    }
  },
  head() {
    return {
      title: 'Telegram Biznis',
    }
  },
}
</script>
