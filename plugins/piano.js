/* eslint-disable */
export default function ({ route, store }, inject) {
  window.PianoESPConfig = {
    id: 280
  }
  // Piano conf
  window.tp = window.tp || []
  window.tp.push(['setAid', 'QuTHmVhFpu'])
  window.tp.push(['setCxenseSiteId', '1128464677385494954']);
  window.tp.push(['setSandbox', false])
  window.tp.push(['setDebug', false])
  window.tp.push(['setUsePianoIdUserProvider', true])
  window.tp.push(['setCloudflareWorkerUrl', 'https://auth.telegram.hr']);
  window.tp.push(["setMaxCookieExpirationInDays", 365]);

  if (!route.name.includes('category-slug')) {
    window.tp.push([
      'init',
      function () {
        window.tp.experience.execute()
        window.tp.enableGACrossDomainLinking()
      },
    ])
  }

  const piano = {
    start: function (termId) {
      if (store.state.user.token) {
        this.checkout(termId)
      } else {
        this.register(termId)
      }
    },
    register: function (termId) {
      const _that = this
      window.tp.push([
        'init',
        () => {
          window.tp.pianoId.show({
            screen: 'register',
            width: window.innerWidth > 720 ? 600 : 375,
            loggedIn(data) {
              store.dispatch('user/setUser', data.user)
              _that.checkout(termId)
            },
            registrationSuccess(data) {
              window.marfeel.cmd.push([
                'compass',
                function (compass) {
                  compass.trackConversion('register')
                },
              ])
            },
          })
        },
      ])
    },
    checkout: function (termId, back) {
      const _that = this
      window.tp.push([
        'init',
        () => {
          window.tp.offer.show({
            offerId: 'OFFY1ZO333EV',
            termId,
            templateId: 'OTXWXSOL0WWS',
            checkoutFlowId: 'CF65KTMVQXXX',
            closeOnLogout: true,
            complete: (data) => {
              store.dispatch('user/checkAccess')
              window.marfeel.cmd.push([
                'compass',
                function (compass) {
                  compass.trackConversion('subscribe')
                },
              ])
              window.fbq('track', 'Purchase', {
                content_ids: data.termId,
                currency: data.chargeCurrency,
                value: data.chargeAmount,
              })
              window.fbq('track', 'Subscribe', {
                currency: data.chargeCurrency,
                value: data.chargeAmount,
              })
              window.PianoESP &&
              typeof window.PianoESP.handleUserDataPromise === 'function' &&
              window.PianoESP.handleUserDataPromise({
                email: _that.$store.state.user.email,
                squads: [2128, 2555, 2554, 10670, 10671],
              }).then(() => {
                  _that.$router.push('/pretplata/dobrodosli')
              })
            },
          })
        },
      ])
    }
  }

  inject('piano', piano)
}
