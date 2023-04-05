<template>
  <div class="main-container flex category-page">
    <div class="full flex relative single-article">
      <client-only>
        <theader></theader>
      </client-only>
    </div>
    <div class="container full relative">
      <client-only>
        <div>
          <h1>Vaš račun</h1>
          <p>
            Ime: {{ $store.state.user.first_name }}
            {{ $store.state.user.last_name }}
          </p>
          <p>
            <app-link to="/moj-racun/obavijesti"> Obavijesti </app-link>
          </p>
        </div>
      </client-only>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
import { PushNotifications } from '@capacitor/push-notifications'

export default {
  name: 'MojRacun',
  methods: {
    sub() {
      PushNotifications.requestPermissions().then((status) => {
        if (status.receive === 'granted') {
          PushNotifications.register()
        }
      })
    },
  },
}
</script>
