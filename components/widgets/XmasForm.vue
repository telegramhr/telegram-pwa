<template>
  <div id="xmasform" class="full flex relative inarticle-form column-top-pad">
    <h2 class="full">Ultimativni Santa's bag</h2>
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
