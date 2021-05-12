<template>
  <div id="book-pay-popup" class="center">
    <div class="flex relative">
      <div id="close-book-popup" class="center center-text" @click="close">
        <i class="fas fa-times"></i>
      </div>
      <div class="full flex book-popup-content">
        <div class="full center book-popup-header">
          <img src="@/assets/img/tg_neue_favicon.png" alt="Telegram Logo" />
        </div>
        <div v-if="error" class="full flex column-full-pad mobile-side-pad">
          <h2 class="full center-text">
            Nešto je pošlo po zlu, probajte ponovo.
          </h2>
        </div>
        <div v-if="thankyou" class="full flex column-full-pad mobile-side-pad">
          <h2 class="full center-text">
            Hvala na narudžbi. Uskoro ćete primiti email s potvrdom narudžbe.
          </h2>
        </div>
        <div
          v-if="!thankyou && !error"
          class="full flex column-full-pad mobile-side-pad"
        >
          <h2 class="full center-text">Unesite podatke za dostavu</h2>
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
          <label for="postal-code">Poštanski broj</label>
          <input
            id="postal-code"
            v-model="postal_code"
            type="text"
            name="postal_code"
            placeholder="10000"
          />
          <label>Država</label>
          <input v-model="country" type="text" name="country" disabled />
          <small
            >Ako želite naručite van Hrvatske, molimo javite nam se na
            <a href="mailto:pretplata@telegram.hr"
              >pretplata@telegram.hr</a
            ></small
          >
          <textarea
            v-model="note"
            name="note"
            placeholder="Napomene"
          ></textarea>
          <template v-if="price">
            <label>Broj kartice</label>
            <div id="credit-card" class="hosted-field"></div>
            <label>CVV</label>
            <div id="cvv" class="hosted-field"></div>
            <label>Datum isteka</label>
            <div id="expiration-date" class="hosted-field"></div>
            <button @click="submit">Platite {{ price }} kn</button>
          </template>
          <template v-else>
            <button @click="order">Naručite</button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import braintree from 'braintree-web'

export default {
  name: 'Braintree',
  props: {
    price: {
      required: true,
      type: Number,
      default: 179,
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
      address: '',
      address2: '',
      city: '',
      postal_code: '',
      note: '',
      token: '',
      country: 'Hrvatska',
      deviceData: null,
      hostedInstance: null,
      threeDS: null,
    }
  },
  mounted() {
    if (this.price) {
      this.getToken()
    }
  },
  methods: {
    getToken() {
      if (this.price) {
        this.$axios
          .get('https://pretplate.telegram.hr/braintree/client/1')
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
            billingAddress: {
              streetAddress: this.address,
              postalCode: this.postal_code,
            },
          })
        })
        .then((payload) => {
          if (!payload.liabilityShifted) {
            console.log('Liability did not shift', payload)
            this.error = true
          }
          this.nonce = payload.nonce
          this.submitToServer()
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
        .get('https://pretplate.telegram.hr/sanctum/csrf-cookie')
        .then(() => {
          this.$axios
            .post('https://pretplate.telegram.hr/api/order', {
              name: this.name,
              email: this.$store.state.user.email,
              uid: this.$store.state.user.uid,
              shipping: {
                name: this.name,
                address: this.address,
                address2: this.address2,
                city: this.city,
                country: this.country,
                postal_code: this.postal_code,
                note: this.note,
              },
              billing: false,
              nonce: this.nonce,
              amount: this.price,
              deviceData: this.deviceData.deviceData,
            })
            .then(() => {
              this.thankyou = true
            })
            .catch(() => {
              this.error = true
            })
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
.dark-mode #book-pay-popup > div {
  border: 1px solid #c8c8c8;
  background-color: #121212;
  color: white;
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
.dark-mode #book-pay-popup input {
  border-color: #555;
  color: #efefef;
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
.dark-mode .hosted-field {
  border-color: #555;
  color: #efefef;
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
#book-pay-popup textarea {
  width: 100%;
  height: 80px;
  border: 1px solid #c8c8c8;
  margin-top: 16px;
  background: none;
  outline: none;
  font-family: 'Barlow', sans-serif;
  color: #666;
  font-size: 16px;
}
.dark-mode #book-pay-popup textarea {
  border-color: #555;
  color: #efefef;
}
#book-pay-popup small {
  margin-top: 16px;
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
