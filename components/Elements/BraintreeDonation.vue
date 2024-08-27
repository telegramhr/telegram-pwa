<template>
  <div class="full flex relative donation-form">
    <div class="full column-full-pad flex relative">
      <div class="full column-top-border"></div>
    </div>
    <div v-if="error" class="full flex column-full-pad mobile-side-pad">
      <h2 class="full center-text">
        {{ error }}
      </h2>
    </div>
    <div v-if="thankyou" class="full flex column-vertical-pad mobile-side-pad">
      <h2 class="full center-text">
        Hvala na donaciji. Uskoro ćete primiti email s potvrdom.
      </h2>
    </div>
    <div v-if="!thankyou && !error" class="full flex mobile-side-pad stretch">
      <div
        class="third flex flex-responsive column-horizontal-pad column-right-border"
      >
        <div class="nothfour full">Unesite podatke</div>
        <label for="name">Ime i prezime:</label>
        <input
          id="name"
          v-model="name"
          type="text"
          name="name"
          placeholder="Ime i prezime"
        />
        <label for="email">Email adresa:</label>
        <input
          id="email"
          v-model="email"
          type="text"
          name="email"
          placeholder="vas@email.com"
        />
        <label for="note">Poruka:</label>
        <textarea
          v-model="note"
          placeholder="Ako želite, napišite nam poruku."
          name="note"
        ></textarea>
      </div>
      <div
        class="third flex flex-responsive column-horizontal-pad column-right-border"
      >
        <div class="nothfour full">Način doniranja</div>
        <div class="full flex desktop-only">
          <label class="half" for="price">Odaberite iznos (u €):</label>
          <label class="half">Ili upišite sami:</label>
        </div>
        <label class="mobile-only" for="price">Odaberite iznos (u €):</label>
        <div class="full flex donation-select">
          <div class="half flex flex-responsive column-right-pad">
            <div class="third">
              <input
                id="price-100"
                v-model="price"
                value="100"
                name="price-100"
                type="radio"
                class="hide"
              />
              <label class="center" for="price-100">100</label>
            </div>
            <div class="third">
              <input
                id="price-250"
                v-model="price"
                value="250"
                name="price-250"
                type="radio"
                class="hide"
              />
              <label class="center" for="price-250">250</label>
            </div>
            <div class="third">
              <input
                id="price-500"
                v-model="price"
                value="500"
                name="price-500"
                type="radio"
                class="hide"
              />
              <label class="center" for="price-500">500</label>
            </div>
          </div>
          <label class="mobile-only">Ili upišite sami:</label>
          <input
            id="price"
            v-model="price"
            class="half flex-responsive"
            type="number"
            name="price"
          />
        </div>
        <label>Podaci za uplatu</label>
        <div class="full flex">
          <div>
            <input
              id="kreditna-kartica"
              v-model="nacinPlacanja"
              value="kreditna-kartica"
              name="nacinPlacanja"
              type="radio"
              class="hide"
            />
            <label
              for="kreditna-kartica"
              class="payment-tile center center-text animate"
              ><font-awesome-icon icon="fa-duotone fa-credit-card" />Kreditna
              kartica</label
            >
          </div>
          <div>
            <input
              id="bankovna-uplata"
              v-model="nacinPlacanja"
              value="bankovna-uplata"
              name="nacinPlacanja"
              type="radio"
              class="hide"
            />
            <label
              for="bankovna-uplata"
              class="payment-tile center center-text animate"
              ><font-awesome-icon icon="fa-duotone fa-university" />Bankovna
              uplata</label
            >
          </div>
        </div>
      </div>
      <div
        v-show="nacinPlacanja === 'kreditna-kartica'"
        class="third flex flex-responsive column-horizontal-pad"
      >
        <div class="nothfour full">Izvršite donaciju</div>
        <label>Broj kartice:</label>
        <div id="credit-card" class="hosted-field"></div>
        <div class="half flex flex-responsive column-right-pad">
          <label>CVV (kontrolni broj):</label>
          <div id="cvv" class="hosted-field"></div>
        </div>
        <div class="half flex flex-responsive">
          <label>Datum isteka:</label>
          <div id="expiration-date" class="hosted-field"></div>
        </div>
        <button @click="submit">Platite {{ price }} €</button>
      </div>
      <div
        v-show="nacinPlacanja === 'bankovna-uplata'"
        class="third flex-responsive column-horizontal-pad contains-code-image"
      >
        <div class="nothfour full">Izvršite donaciju</div>
        <p class="small-top-margin">IBAN: HR4723600001503346846</p>
        <p>Telegram Media Grupa d.o.o.</p>
        <p>Iznos: {{ price }},00 €</p>
        <p v-if="number">Model plaćanja: 00</p>
        <p v-if="number">Poziv na broj: {{ number }}</p>
        <p>Opis plaćanja: Donacija - {{ name }}</p>
        <p v-if="code"><img :src="'data:image/png;base64,' + code" /></p>
        <button @click="submitBank">Generiraj kod za plaćanje</button>
      </div>
    </div>
  </div>
</template>

<script>
import braintree from 'braintree-web'

export default {
  name: 'BraintreeDonation',
  props: {
    initPrice: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return {
      access: {},
      thankyou: false,
      error: false,
      name:
        this.$store.state.user.first_name +
        ' ' +
        this.$store.state.user.last_name,
      email: this.$store.state.user.email,
      note: '',
      nacinPlacanja: 'kreditna-kartica',
      token: '',
      deviceData: null,
      hostedInstance: null,
      threeDS: null,
      number: false,
      code: false,
      price: this.initPrice,
    }
  },
  mounted() {
    if (this.price) {
      this.getToken()
    }
  },
  methods: {
    submitBank() {
      this.$axios
        .get('/pretplate/sanctum/csrf-cookie', {
          withCredentials: true,
        })
        .then(() => {
          this.$axios
            .post(
              '/pretplate/donation',
              {
                name: this.name,
                email: this.email,
                note: this.note,
                amount: this.price,
                type: 'bank',
              },
              { withCredentials: true }
            )
            .then((res) => {
              this.number = res.data.number
              this.code = res.data.code
            })
        })
    },
    getToken() {
      if (this.price) {
        this.$axios.get('/pretplate/braintree/client/1').then((res) => {
          this.token = res.data.token
          braintree.client
            .create({
              authorization: res.data.token,
            })
            .then((clientInstance) => {
              return Promise.all([
                braintree.hostedFields.create({
                  client: clientInstance,
                  styles: {
                    input: {
                      'font-family': '"Barlow", sans-serif',
                      'font-size': '20px',
                      'font-weight': '700',
                      height: '38px',
                      color: '#111',
                    },
                    'input.invalid': {
                      color: '#ae3737',
                    },
                    'input.valid': {
                      color: '#35a843',
                    },
                  },
                  fields: {
                    number: {
                      selector: '#credit-card',
                      placeholder: '1111 1111 1111 1111',
                    },
                    cvv: {
                      selector: '#cvv',
                      placeholder: '111',
                    },
                    expirationDate: {
                      selector: '#expiration-date',
                      placeholder: 'MM/YYYY',
                    },
                  },
                }),
                braintree.threeDSecure.create({
                  authorization: res.data.token,
                  version: 2,
                }),
                braintree.dataCollector.create({
                  client: clientInstance,
                }),
              ])
            })
            .then((instances) => {
              this.hostedInstance = instances[0]
              this.threeDS = instances[1]
              this.deviceData = instances[2].deviceData
            })
        })
      }
    },
    close() {
      this.error = false
      this.$emit('close')
    },
    submit() {
      this.hostedInstance
        .tokenize({
          cardholderName: this.name,
          billingAddress: {
            postalCode: this.postal_code,
            streetAddress: this.address,
            locality: this.city,
          },
        })
        .then((payload) => {
          return this.threeDS.verifyCard({
            onLookupComplete: (data, next) => {
              next()
            },
            amount: this.price,
            nonce: payload.nonce,
            bin: payload.details.bin,
            email: this.$store.state.user.email,
            challengeRequested: true,
            billingAddress: {
              streetAddress: this.address,
              postalCode: this.postal_code,
            },
          })
        })
        .then((payload) => {
          if (!payload.liabilityShifted) {
            this.error =
              '3DS autorizacija kartice nije prošla. Probajte ponovo.'
          } else {
            this.nonce = payload.nonce
            this.submitToServer()
          }
        })
    },
    order() {
      if (!(this.name && this.address && this.city && this.postal_code)) {
        return
      }
      if (this.token) {
        this.submit()
      } else {
        this.submitToServer()
      }
    },
    submitToServer() {
      this.$axios
        .get('/pretplate/sanctum/csrf-cookie', {
          withCredentials: true,
        })
        .then(() => {
          this.$axios
            .post(
              '/pretplate/donation',
              {
                name: this.name,
                email: this.email,
                uid: this.$store.state.user.uid,
                nonce: this.nonce,
                amount: this.price,
                deviceData: this.deviceData,
                note: this.note,
                type: 'credit',
              },
              { withCredentials: true }
            )
            .then(() => {
              this.thankyou = true
            })
            .catch(() => {
              this.error = 'Plaćanje nije uspjelo. Probajte ponovo.'
            })
        })
    },
  },
}
</script>
