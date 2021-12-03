<template>
  <div id="xmasform" class="full flex relative inarticle-form">
    <img
      src="https://www.telegram.hr/wp-content/uploads/2021/12/xmas-goodybag.jpg"
      alt="Sadržaj ultimativnog Santa's baga"
    />
    <h2 class="full">Ultimativni Santa's bag</h2>
    <p>
      Dok vi birate poklone za druge, mi brinemo o poklonima za vas. Odgovorite
      na nagradno pitanje i osvojite Ultimativni Santa's bag prepun poklona.
      Svaki dan biramo jednog dobitnika, a što se krije u vreći poklona saznajte
      <a target="_blank" class="bold">ovdje.</a>
    </p>
    <form id="xmas-form" class="full flex relative">
      <label class="full" for="xmas-ime">Vaše ime i prezime:</label>
      <input id="xmas-ime" class="full" type="text" name="xmas-ime" />
      <label class="full" for="xmas-email">Vaš email:</label>
      <input id="xmas-email" class="full" type="text" name="xmas-email" />
      <label class="full" for="xmas-idea"
        ><b>Nagradno pitanje:</b> Tražimo najoriginalnije i zabavnije ideje za
        poklone! Recite nam svoju ideju idealnog poklona, za koga je namijenjen,
        o kojem poklonu je riječ i zašto je baš to dobra ideja?</label
      >
      <textarea id="xmas-idea" class="full" name="xmas-idea"></textarea>
      <input
        id="consent"
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
        <div v-show="!xmasattempt" class="classic-btn" @click="xmassubmit">
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
    }
  },
  methods: {
    xmassubmit() {
      this.xmasattempt = true
      this.xmasloading = true
      // This is where the smart stuff would go if I knew how to code smart stuff.
    },
  },
}
</script>
