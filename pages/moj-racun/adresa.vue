<template>
  <div class="main-container flex category-page">
    <div class="full flex relative single-article">
      <client-only>
        <theader></theader>
      </client-only>
    </div>
    <div
      class="full flex relative inarticle-form column-top-pad article-full-width"
    >
      <div class="container full relative">
        <div v-show="submitted">Podaci su spremljeni</div>
        <form class="full flex relative" @submit.prevent="submit">
          <label class="full" for="xmas-ime">Ime:</label>
          <input id="xmas-ime" v-model="first_name" class="full" type="text" />
          <label class="full" for="xmas-prezime">Prezime:</label>
          <input
            id="xmas-prezime"
            v-model="last_name"
            class="full"
            type="text"
          />
          <label class="full" for="xmas-adresa">Adresa:</label>
          <input id="xmas-adresa" v-model="address" class="full" type="text" />
          <label class="full" for="xmas-adresa2">Adresa druga linija:</label>
          <input
            id="xmas-adresa2"
            v-model="address2"
            class="full"
            type="text"
          />
          <label class="full" for="xmas-city">Grad:</label>
          <input id="xmas-city" v-model="city" class="full" type="text" />
          <label class="full" for="xmas-adresa">Poštanski broj:</label>
          <input
            id="xmas-postal"
            v-model="postal_code"
            class="full"
            type="text"
          />
          <label class="full" for="xmas-country">Država:</label>
          <input id="xmas-country" v-model="country" class="full" type="text" />
          <label class="full">Veličina majice:</label>
          <select v-model="shirt_size">
            <option value="ms">Muški S</option>
            <option value="mm">Muški M</option>
            <option value="ml">Muški L</option>
            <option value="mxl">Muški XL</option>
            <option value="fs">Ženski S</option>
            <option value="fm">Ženski M</option>
            <option value="lm">Ženski L</option>
          </select>
        </form>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

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
      country: '',
      shirt_size: '',
      submitted: false,
    }
  },
  mounted() {
    this.getUser()
  },
  methods: {
    getUser() {
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
    },
  },
}
</script>
