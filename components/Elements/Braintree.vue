<template>
  <div id="book-pay-popup" class="center">
    <div class="flex relative">
      <div id="close-book-popup" class="center center-text">
        <i class="fas fa-times"></i>
      </div>
      <div class="full flex book-popup-content">
        <div class="full center book-popup-header">
          <img src="@/assets/img/tg_neue_favicon.png" alt="Telegram Logo" />
        </div>
        <div class="full flex column-full-pad mobile-side-pad">
          <h2 class="full center-text">Unesite podatke</h2>
          <label for="name">Ime i prezime</label>
          <input
            id="name"
            v-model="name"
            type="text"
            name="name"
            placeholder="Ime i prezime"
          />
          <label for="address">Adresa</label>
          <input
            id="address"
            v-model="address"
            type="text"
            name="address"
            placeholder="Ulica i broj"
          />
          <label for="address2">Dodatne informacije za dostavu</label>
          <input
            id="address2"
            v-model="address2"
            type="text"
            name="address2"
            placeholder="Broj stana, ime na vratima,..."
          />
          <label for="city">Grad</label>
          <input
            id="city"
            v-model="city"
            type="text"
            name="city"
            placeholder="Grad"
          />
          <label>Poštanski broj</label>
          <div id="postal-code" class="hosted-field"></div>
          <label>Država</label>
          <input
            v-model="country"
            type="text"
            name="country"
            placeholder="Hrvatska"
          />
          <label>Broj kartice</label>
          <div id="credit-card" class="hosted-field"></div>
          <label>CVV</label>
          <div id="cvv" class="hosted-field"></div>
          <label>Datum isteka</label>
          <div id="expiration-date" class="hosted-field"></div>
          <button @click="submit">Plati</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import braintree from 'braintree-web'

export default {
  name: 'Braintree',
  data() {
    return {
      name: '',
      address: '',
      address2: '',
      city: '',
      token: '',
      country: '',
      deviceData: null,
      hostedInstance: null,
      threeDS: null,
    }
  },
  mounted() {
    this.getToken()
  },
  methods: {
    getToken() {
      this.$axios
        .get('https://pretplate.test/braintree/client/1')
        .then((res) => {
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
                      'font-size': '16px',
                      color: '#666',
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
                      supportedCardBrands: {
                        'diners-club': false,
                      },
                    },
                    cvv: {
                      selector: '#cvv',
                      placeholder: '111',
                    },
                    expirationDate: {
                      selector: '#expiration-date',
                      placeholder: 'MM/YYYY',
                    },
                    postalCode: {
                      selector: '#postal-code',
                      placeholder: '12345',
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
              this.deviceData = instances[2]
            })
            .catch((err) => {
              console.error(err)
            })
        })
    },
    submit() {
      this.hostedInstance
        .tokenize({
          vault: true,
          cardholderName: this.name,
        })
        .then((payload) => {
          return this.threeDS.verifyCard({
            onLookupComplete: (data, next) => {
              next()
            },
            ammount: '179.00',
            nonce: payload.nonce,
            bin: payload.details.bin,
            email: this.email,
            billingAddress: {
              streetAddress: this.address,
              postalCode: this.postalCode,
            },
          })
        })
        .then((payload) => {
          if (!payload.liabilityShifted) {
            console.log('Liability did not shift', payload)
            // TODO: error out
          }
          // TODO: submit to server for transaction with payload.nonce
        })
    },
  },
}
</script>

<style>
#book-pay-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 500;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 24px;
}
#book-pay-popup h2 {
  letter-spacing: -0.05em;
  font-size: 36px;
  font-size: 1.8rem;
}
#book-pay-popup > div {
  border: 1px solid #c8c8c8;
  background-color: #fcf1e7;
  width: 100%;
  max-width: 480px;
}
.book-popup-header {
  padding-top: 50px;
  margin-bottom: 50px;
  background-color: #ae3737;
}
.book-popup-header img {
  width: 100px;
  height: 100px;
  margin-bottom: -50px;
}
#book-pay-popup input {
  width: 100%;
  font-size: 16px;
  background: none;
  outline: none;
  border: none;
  padding: 0px;
  height: 24px;
  color: #666;
  padding-bottom: 4px;
  border-bottom: 1px solid #c8c8c8;
}
#book-pay-popup label {
  opacity: 0.7;
  font-size: 14px;
  font-size: 0.7rem;
  font-family: 'Barlow', sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  margin-top: 24px;
  margin-bottom: 8px;
}
.hosted-field {
  height: 24px;
  padding-bottom: 4px;
  border-bottom: 1px solid #c8c8c8;
  width: 100%;
}
#book-pay-popup button {
  padding: 8px 32px;
  text-align: center;
  display: block;
  margin: 16px auto;
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
  font-size: 20px;
  font-size: 1rem;
  background-color: #ae3737;
  position: relative;
  z-index: 200;
  cursor: pointer;
}
#close-book-popup {
  position: absolute;
  top: -16px;
  right: -16px;
  width: 36px;
  height: 36px;
  background-color: white;
  border: 1px solid #c8c8c8;
  border-radius: 18px;
  color: #666;
  font-size: 24px;
  z-index: 501;
  cursor: pointer;
}

@media screen and (max-height: 900px) {
  #book-pay-popup .book-popup-content {
    max-height: 90vh;
    overflow-y: scroll;
  }
}
@media screen and (max-width: 1024px) {
  #book-pay-popup {
    padding: 4vw;
  }
  #close-book-popup {
    position: absolute;
    top: 8px;
    right: 8px;
  }
}
</style>
