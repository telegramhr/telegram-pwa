<template>
  <div class="main-container flex category-page">
    <div class="full flex relative single-article">
      <client-only>
        <theader></theader>
      </client-only>
    </div>
    <div class="container flex mobile-side-pad full relative">
      <client-only>
        <h1>Vaš račun</h1>
        <p class="full" style="margin-bottom: 4vw">
          Ime: {{ $store.state.user.first_name }}
          {{ $store.state.user.last_name }}
        </p>
        <p class="full infotext" style="margin-bottom: 5vw">
          Za upravljanje vašom pretplatom, kliknite
          <a target="_blank" href="https://www.telegram.hr/moj-racun">ovdje.</a>
        </p>
        <app-link
          class="newbtn animate clickable"
          style="margin-bottom: 4vw"
          to="/moj-racun/obavijesti"
        >
          Obavijesti
        </app-link>
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
