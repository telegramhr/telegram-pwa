<template>
  <div class="main-container flex category-page">
    <div class="full flex relative single-article">
      <client-only>
        <theader></theader>
      </client-only>
    </div>
    <div
      class="full flex relative inarticle-form mobile-side-pad column-top-pad article-full-width"
    >
      <div class="container full relative">
        <form class="full flex relative cantha-form" @submit.prevent="submit">
          <div class="full flex column-horizontal-pad column-bottom-pad">
            <h2 class="section-title">Molimo da upišete podatke za dostavu</h2>
          </div>
          <div class="half column-horizontal-pad flex-responsive flex">
            <label class="full" for="xmas-ime">Ime</label>
            <input
              id="xmas-ime"
              v-model="first_name"
              class="full"
              type="text"
              required
            />
          </div>
          <div class="half column-horizontal-pad flex-responsive flex">
            <label class="full" for="xmas-prezime">Prezime</label>
            <input
              id="xmas-prezime"
              v-model="last_name"
              class="full"
              type="text"
              required
            />
          </div>
          <div
            class="full column-horizontal-pad column-top-pad flex-responsive flex"
          >
            <label class="full" for="xmas-adresa">Adresa</label>
            <input
              id="xmas-adresa"
              v-model="address"
              class="full"
              type="text"
              required
            />
          </div>
          <div class="full column-horizontal-pad flex-responsive flex">
            <label class="full" for="xmas-adresa2">Adresa dodatno</label>
            <input
              id="xmas-adresa2"
              v-model="address2"
              class="full"
              type="text"
            />
          </div>
          <div class="half column-horizontal-pad flex-responsive flex">
            <label class="full" for="xmas-city">Grad</label>
            <input id="xmas-city" v-model="city" class="full" type="text" />
          </div>
          <div class="half column-horizontal-pad flex-responsive flex">
            <label class="full" for="xmas-adresa">Poštanski broj</label>
            <input
              id="xmas-postal"
              v-model="postal_code"
              class="full"
              type="text"
              required
            />
          </div>
          <div class="full column-horizontal-pad flex-responsive flex">
            <label class="full" for="xmas-country">Država</label>
            <input
              id="xmas-country"
              v-model="country"
              class="full"
              type="text"
              required
            />
          </div>
          <div
            class="full column-horizontal-pad column-top-pad flex-responsive flex"
          >
            <label class="full">Veličina majice</label>
            <select v-model="shirt_size" required>
              <option value="" disabled selected>
                Odaberite svoju veličinu
              </option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
              <option value="xxl">XXL</option>
              <option value="xxxl">XXXL</option>
            </select>
          </div>
          <div class="full column-horizontal-pad flex-responsive">
            <button type="submit" class="classic-btn">Spremi</button>
            <div v-show="submitted" class="full form-info-msg">
              Podaci su spremljeni.
            </div>
            <div v-show="error" class="full form-info-msg">
              Podaci nisu spremljeni. Molimo provjerite unos i probajte ponovo.
            </div>
          </div>
        </form>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<style scoped>
.cantha-form input {
  border: 1px solid #c8c8c8;
}
.cantha-form label {
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  font-size: 16px;
  font-size: 0.8rem;
}
.cantha-form select {
  margin-top: 8px;
  background: none;
  outline: none;
  border: none;
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  font-size: 16px;
  font-size: 0.8rem;
  padding: 4px;
  margin-bottom: 16px;
  border: 1px solid #c8c8c8;
}
.cantha-form .form-info-msg {
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  font-size: 16px;
  font-size: 0.8rem;
  opacity: 0.7;
}
.cantha-form .classic-btn {
  outline: none;
  border: none;
}
.dark-mode .cantha-form select {
  color: white;
}
.dark-mode .cantha-form option {
  color: #111;
}
</style>

<script>
export default {
  name: 'Adresa',
  data() {
    return {
      first_name: '',
      last_name: '',
      address: '',
      address2: '',
      city: '',
      postal_code: '',
      country: 'Hrvatska',
      shirt_size: '',
      submitted: false,
      error: false,
    }
  },
  mounted() {
    this.getUser()
  },
  methods: {
    login() {
      const _that = this
      window.tp.pianoId.show({
        screen: 'login',
        loggedIn(data) {
          _that.$store.dispatch('user/setUser', data.user)
          _that.$store.commit('user/setToken', data.token)
          window.tp.api.callApi('/access/list', {}, function (response) {
            _that.$store.dispatch('user/setAccess', response).then(() => {
              this.getUser()
            })
          })
        },
      })
    },
    getUser() {
      if (!this.$store.state.user.uid) {
        this.login()
        return
      }
      this.$axios
        .get(
          `https://pretplate.telegram.hr/api/customer/getBasic/${this.$store.state.user.uid}`
        )
        .then((res) => {
          this.first_name = res.data.first_name
          this.last_name = res.data.last_name
          this.address = res.data.address
          this.address2 = res.data.address2
          this.city = res.data.city
          this.postal_code = res.data.postal_code
          this.country = res.data.country
          this.shirt_size = res.data.shirt_size
        })
    },
    submit() {
      this.$axios
        .post('https://pretplate.telegram.hr/api/customer/form', {
          first_name: this.first_name,
          last_name: this.last_name,
          shipping_address: this.address,
          shipping_address2: this.address2,
          shipping_city: this.city,
          shipping_postal_code: this.postal_code,
          shipping_country: this.country,
          shirt_size: this.shirt_size,
          piano_id: this.$store.state.user.uid,
        })
        .then(() => {
          this.submitted = true
        })
        .catch(() => {
          this.error = true
        })
    },
  },
}
</script>
