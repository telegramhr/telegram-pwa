<template>
  <div>
    <client-only>
      <h1 style="margin-bottom: 4vw">Uredi postavke obavijesti</h1>
      <div v-if="!enabled" class="full flex">
        <button
          class="newbtn animate clickable signup-btn"
          style="margin-bottom: 4vw"
          @click="sub"
        >
          Omogući notifikacije
        </button>
      </div>
      <p style="margin-bottom: 2vw">
        Odaberite vrstu obavijesti koje želite primati:
      </p>
      <ul style="margin-bottom: 4vw">
        <li v-for="type in types" :key="type.title">
          <label
            ><input v-model="type.value" class="tgred-accent" type="checkbox" />
            {{ type.title }}</label
          >
        </li>
      </ul>
      <div class="full flex">
        <button
          class="newbtn animate clickable"
          style="margin-bottom: 4vw"
          @click="save"
        >
          Spremi
        </button>
      </div>
    </client-only>
  </div>
</template>

<script>
import { PushNotifications } from '@capacitor/push-notifications'

export default {
  name: 'Obavijesti',
  data() {
    return {
      types: null,
      enabled: true,
    }
  },
  mounted() {
    this.getTypes()
    this.check()
  },
  methods: {
    check() {
      PushNotifications.checkPermissions().then((status) => {
        if (status.receive !== 'granted') {
          this.enabled = false
        }
      })
    },
    async getTypes() {
      this.types = await this.$axios.$get(
        'https://pretplate.telegram.hr/api/notifications/types',
        {
          params: {
            uid: this.$store.state.user.uid,
          },
        }
      )
    },
    sub() {
      PushNotifications.requestPermissions().then((status) => {
        if (status.receive === 'granted') {
          PushNotifications.register()
        }
      })
    },
    save() {
      this.$axios.post(
        'https://pretplate.telegram.hr/api/notifications/types',
        {
          uid: this.$store.state.user.uid,
          types: this.types,
        }
      )
    },
  },
}
</script>
