<template>
  <div
    id="xmasform"
    class="full flex relative inarticle-form column-top-pad article-full-width"
  >
    <h2 class="full inarticle-form-title">Ultimativni Santa's bag</h2>
    <img
      src="@/assets/img/xmas_proizvodi.gif"
      alt="Sadržaj ultimativnog Santa's baga"
      class="xmas-santasbag-gif"
    />
    <p>
      Dok vi birate poklone za druge, mi brinemo o poklonima za vas. Odgovorite
      na nagradno pitanje i osvojite Ultimativni Santa's bag prepun poklona.
      Svaki dan biramo jednog dobitnika, a što se krije u vreći poklona saznajte
      <a
        target="_blank"
        href="https://super1.telegram.hr/relax/xmas-giveaway-2021/"
        class="bold"
        >ovdje.</a
      >
    </p>
    <div class="full article-head center-text">
      <h3 class="overtitle">Dobitnički odgovori</h3>
    </div>
    <VueSlickCarousel
      :arrows="false"
      :dots="false"
      :autoplay="true"
      :speed="1000"
    >
      <div
        v-for="winner in winners"
        :key="winner.date"
        class="full flex big-quote"
      >
        <p>
          {{ winner.message }}
        </p>
        <span class="quote-author"
          >- {{ winner.person }}, dobitnik {{ winner.date }}</span
        >
      </div>
    </VueSlickCarousel>
    <div class="full article-head center-text">
      <h3 class="overtitle">Pošaljite vašu prijavu</h3>
    </div>
    <form id="xmas-form" class="full flex relative">
      <label class="full" for="xmas-ime">Vaše ime i prezime:</label>
      <input
        id="xmas-ime"
        v-model="ime"
        class="full"
        type="text"
        name="xmas-ime"
      />
      <label class="full" for="xmas-email">Vaš email:</label>
      <input
        id="xmas-email"
        v-model="email"
        class="full"
        type="text"
        name="xmas-email"
      />
      <label class="full" for="xmas-idea">
        <b>Nagradno pitanje:</b> Tražimo najoriginalnije i zabavnije ideje za
        poklone! Recite nam svoju ideju idealnog poklona, kome je namijenjen, o
        kojem poklonu je riječ i zašto je baš to dobra ideja?
      </label>
      <textarea id="xmas-idea" v-model="odgovor" class="full"></textarea>
      <input
        id="consent"
        v-model="consent"
        type="checkbox"
        name="consent"
        value="1"
        required
      /><label class="consent-label" for="consent"
        >Prihvaćam
        <a
          class="animate"
          target="_blank"
          href="https://super1.telegram.hr/promo/pravila-nagradnog-natjecaja-za-xmas-goodie-bag/"
          >pravila nagradnog natječaja</a
        ></label
      >
      <div class="full flex">
        <div
          v-show="!xmasattempt"
          class="classic-btn"
          @click.prevent="xmassubmit"
        >
          Pošalji prijavu
        </div>
        <div v-show="xmasloading" class="full center cool-loader">
          <div class="loader-square">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <p v-show="xmassent" class="full">Prijava je spremljena!</p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'XmasForm',
  data() {
    return {
      xmasloading: false,
      xmassent: false,
      xmasattempt: false,
      ime: '',
      email: '',
      odgovor: '',
      consent: false,
      winners: [
        {
          message:
            'Poklon za supruga: avionska karta za Kolumbiju, da pobjegne iz zime u divno ljeto.',
          person: 'Radmila Trbojević',
          date: '6.12.',
        },
        {
          message:
            "Moj idealni poklon je wellness escape za mene i sestru jer obje radimo jako puno i jako stresno 🙂 Osim toga, ljudima je to ideja kao nešto što si možeš priuštiti sam pa uvijek 'izvisiš'.",
          person: 'Barbara Buble',
          date: '7.12.',
        },
        {
          message:
            'Maska za lice 🤭 da mi suprug lakše mijenja pelene našem dvomjesečnom bebaču,a ja da imam više vremena za sebe.',
          person: 'Tihana Vučić',
          date: '8.12.',
        },
        {
          message:
            'Tečaj kuhanja za supruga kojem je u ovom trenu kulinarski domet jaje na oko. To bi bio prijenos obveza na finjaka, obzirom da sam godinama dežurna kuharica u obitelji.',
          person: 'Ljiljana Stanić',
          date: '9.12.',
        },
        {
          message:
            'Kupio bi nam plesne cipele jer supruga već godina želi da naučimo latino plesove. Time bi joj pokazao da sam spreman za plesni tečaj, odmah prije nego se predomislim! 😄',
          person: 'Marko Jertec',
          date: '10.12.',
        },
        {
          message:
            'Diktafon za baku kojoj ide na živce u dućanu vaditi naočale da bi pročitala popis za kupovinu.',
          person: 'Ljubica Baranašić',
          date: '11.12',
        },
        {
          message:
            'Dioptrijske naočale za mog šefa da konačno vidi koliko radim i unaprijedi me što i zaslužujem\n',
          person: 'Sanja Kruljac',
          date: '12.12',
        },
        {
          message:
            'Duuugački produženi kabel za mog muža koji nikad ne usisava auto jer kaže da mu je kabel od usisavača prekratki i ne može dosegnuti. E pa da mu ga produžim ;).',
          person: 'Marina Pavlić',
          date: '13.12',
        },
        {
          message:
            'Kupila bih suprugu knjigu "Sam svoj majstor". Možda , konačno, popravi vrata na ormaru.',
          person: 'Dubravka Šarić',
          date: '14.12',
        },
        {
          message:
            'Susjedi bih poklonila dalekozor jer joj se od mojih dostavljača učinilo da imam ljubavnika 🤣',
          person: 'Marina Mršić',
          date: '15.12',
        },
        {
          message:
            'Neki eliksir mladosti ili bar kremu za pomlađivanje jer su mi neki dan ponudili mjesto u tramvaju. Za šok bi dobro došla i čokolada',
          person: 'Marina Babić',
          date: '16.12',
        },
        {
          message:
            'Najdražem sinu komplet putnih kofera pod bor. Obzirom da još nije iselio iz roditeljskog gnijezda, poruka će biti i više nego jasna.',
          person: 'Ruža Vrbanić',
          date: '17.12',
        },
        {
          message:
            'Kupila bih susjedi nove čizme ili ove pođonila.Svako jutro kada ide na posao lupa s njima i budi cijelu zgradu.😂😂😂😂😂😂😂😂',
          person: 'Dajana Gugo',
          date: '18.12',
        },
        {
          message:
            'Ja bih za sebe poklon u vidu spreja protiv punice kad dođe zabadati nos u lonce sa hranom i komentirati šta i kako. Podatke imate pa ako nađete šta slično...',
          person: 'Aljoša Krželj',
          date: '19.12',
        },
      ],
    }
  },
  methods: {
    xmassubmit() {
      if (this.consent) {
        this.xmasattempt = true
        this.xmasloading = true
        this.$axios
          .get(
            '/gscripts/AKfycbz1N8o3ioCOzaz_nSdpg-goTrQd37AZtKkXB-5ePjmQFdaZfPev_KcWazsMRl0ATkvFbw/exec',
            {
              params: {
                ime: this.ime,
                email: this.email,
                odgovor: this.odgovor,
              },
            }
          )
          .then(() => {
            this.xmasattempt = false
            this.xmasloading = false
            this.xmassent = true
          })
          .catch(() => {
            // special case because CORS fails, but data goes through
            this.xmasattempt = false
            this.xmasloading = false
            this.xmassent = true
          })
      }
    },
  },
}
</script>
