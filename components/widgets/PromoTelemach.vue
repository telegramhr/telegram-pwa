<template>
  <div
    class="full flex column-vertical-pad mobile-vertical-pad extra-width partner-new-promo"
  >
    <div class="full flex column-vertical-pad darkened-bg mobile-full-pad">
      <div class="full nothtwo bold column-horizontal-pad">
        Neograničene minute i internet za samo 1€ mjesečno. Ispuni obrazac za
        genijalnu ponudu!
      </div>
      <p class="full barlow column-horizontal-pad">
        Ostavi svoj kontakt, prijeđi na Telemach i surfaj gotovo besplatno
        sljedećih do 6 mjeseci
      </p>
      <form
        v-show="!success"
        id="telemach-promo"
        class="full flex relative column-mini-horizontal-pad"
        @submit.prevent="submit"
      >
        <div class="fourth column-mini-horizontal-pad flex-responsive flex">
          <input
            id="name"
            v-model="name"
            type="text"
            name="name"
            placeholder="Ime i prezime"
            required
            class="full subtle-input"
          />
        </div>
        <div class="fourth column-mini-horizontal-pad flex-responsive flex">
          <input
            id="email"
            v-model="email"
            type="email"
            name="email"
            placeholder="Email"
            required
            class="full subtle-input"
          />
        </div>
        <div class="fourth column-mini-horizontal-pad flex-responsive flex">
          <input
            id="telefon"
            v-model="phone"
            type="tel"
            name="name"
            placeholder="Telefon"
            required
            class="full subtle-input"
          />
        </div>
        <div class="fourth column-mini-horizontal-pad flex-responsive flex">
          <input
            type="submit"
            value="Pošalji"
            class="full newbtn huge-newbtn clickable"
          />
        </div>
        <div class="full column-mini-horizontal-pad barlow faded smaller-text">
          Ispunjavanjem obrasca ustupate svoje osobne podatke društvu Telemach
          Hrvatska d.o.o. kao voditelju obrade kako bi Vas isti kontaktirao i
          ponudio Vam proizvode i usluge Telemacha. Više o načinu na koji
          Telemach obrađuje osobne podatke i svojim pravima pogledajte u
          <a
            href="https://telemach.hr/podrska/opci-dokumenti-i-uvjeti-koristenja-sve/opca-uredba-o-zastiti-podataka-gdpr"
            target="_blank"
            >Obavijesti o obradi osobnih podataka.</a
          >
          Navedene podatke obrađuje i društvo Telegram media grupa d.o.o. kao
          izvršitelj obrade u svrhu prikupljanja podataka i dostave istih
          voditelju obrade.
        </div>
      </form>
      <div
        v-show="success"
        class="full flex column-vertical-pad darkened-bg mobile-full-pad"
      >
        <div class="full nothtwo bold column-horizontal-pad">
          Hvala na prijavi!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PromoTelemach',
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      success: false,
    }
  },
  methods: {
    submit() {
      if (!this.name || !this.email || !this.phone) {
        return
      }
      this.$axios.$get(
        '/gscripts/AKfycbzXtM7mN5WqKOLZcoXWi2_iKeP15I2v9NCv4LKFKLO4BEiHml_Sq7pckEDHJbBwqovr',
        {
          params: {
            name: this.name,
            email: this.email,
            phone: this.phone,
          },
        }
      )
      this.name = ''
      this.email = ''
      this.phone = ''

      this.success = true
    },
  },
}
</script>
