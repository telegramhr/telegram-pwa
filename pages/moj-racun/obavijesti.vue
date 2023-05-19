<template>
  <div class="main-container flex category-page">
    <div class="full flex relative single-article">
      <client-only>
        <theader></theader>
      </client-only>
    </div>
    <div class="container flex mobile-side-pad full relative">
      <client-only>
        <h1 style="margin-bottom: 4vw">Uredi postavke obavijesti</h1>
        <div class="full flex">
          <button
            class="newbtn animate clickable signup-btn"
            style="margin-bottom: 4vw"
            @click="sub"
          >
            Aktiviraj notifikacije
          </button>
        </div>
        <p style="margin-bottom: 2vw">
          Odaberite vrstu obavijesti koje želite primati:
        </p>
        <ul style="margin-bottom: 4vw">
          <li v-for="type in types" :key="type.title">
            <label
              ><input
                v-model="type.value"
                class="tgred-accent"
                type="checkbox"
              />
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
    <tfooter></tfooter>
  </div>
</template>

<script>
import { PushNotifications } from '@capacitor/push-notifications'

export default {
  name: 'Obavijesti',
  data() {
    return {
      types: {
        breaking: {
          title: 'Breaking',
          value: false,
        },
        'politika-kriminal': {
          title: 'Politika i kriminal',
          value: false,
        },
        'biznis-tech': {
          title: 'Biznis i tech',
          value: false,
        },
        kultura: {
          title: 'Kultura',
          value: false,
        },
        zivot: {
          title: 'Život',
          value: false,
        },
        commentary: {
          title: 'Komentari',
          value: false,
        },
      },
    }
  },
  mounted() {
    this.getTypes()
  },
  methods: {
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
