import braintree from 'braintree-web'

export default ({ app, req, store }, inject) => {
  const getToken = (email, _this) => {
    if (email === '') {
      return
    }
    app.$axios
          .$get('/crm/api/v1/braintree/token', {
        params: {
          email,
        },
      })
      .then((data) => {
        _this.token = data.token
        _this.customerId = data.customer_id
        braintree.client
          .create({
            authorization: data.token,
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
                    placeholder: 'Broj kartice',
                  },
                  cvv: {
                    selector: '#cvv',
                    placeholder: 'CVV sigurnosni kod',
                  },
                  expirationDate: {
                    selector: '#expiration-date',
                    placeholder: 'MM/GGGG',
                  },
                },
              }),
              braintree.threeDSecure.create({
                authorization: data.token,
                version: 2,
              }),
              braintree.dataCollector.create({
                client: clientInstance,
              }),
            ])
          })
          .then((instances) => {
            _this.instance = instances[0]
            _this.instance.on('validityChange', function (event) {
              const field = event.fields[event.emittedBy]

              if (field.isValid || field.isPotentiallyValid) {
                switch (event.emittedBy) {
                  case 'number':
                    _this.creditCard = true
                    break
                  case 'cvv':
                    _this.cvv = true
                    break
                  case 'expirationDate':
                    _this.expirationDate = true
                    break
                  default:
                    break
                }
              } else {
                switch (event.emittedBy) {
                  case 'number':
                    _this.creditCard = false
                    break
                  case 'cvv':
                    _this.cvv = false
                    break
                  case 'expirationDate':
                    _this.expirationDate = false
                    break
                  default:
                    break
                }
              }
            })
            _this.threeDS = instances[1]
            _this.deviceData = instances[2].deviceData
          })
      })
  }

  const submit = (_this) => {
    _this.instance
      .tokenize()
      .then((payload) => {
        return _this.threeDS.verifyCard({
          onLookupComplete: (data, next) => {
            next()
          },
          amount: _this.totalPrice,
          nonce: payload.nonce,
          bin: payload.details.bin,
          email: _this.email,
        })
      })
      .then((payload) => {
        _this.loading = false
        if (!payload.liabilityShifted) {
          _this.error = '3DS autorizacija kartice nije prošla. Probajte ponovo.'
        } else {
          _this.nonce = payload.nonce
          store.commit('pretplata/setSubscriptionStarted', true)
          setTimeout(
            () => document.getElementById('payment-form').submit(),
            500
          )
        }
      })
  }
  inject('checkout', {
    getToken,
    submit,
  })
}
