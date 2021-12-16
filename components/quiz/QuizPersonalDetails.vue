<template>
  <div>
    <h2>{{ data.question }}</h2>
    <label>Ime i prezime</label>
    <input v-model="name" type="text" />
    <label>Email</label>
    <input v-model="email" type="email" />
    <label class="clickable">
      <input v-model="consent" type="checkbox" value="1" />
      Prihvaćam
      <app-link to="/stranica/pravila-privatnosti"
        >pravila privatnosti Telegram.hr</app-link
      >
    </label>
    <br />
    <label v-if="data.terms_conditions" class="clickable">
      <input v-model="consent2" type="checkbox" value="1" />
      Prihvaćam
      <a target="_blank" :href="data.terms_conditions"> pravila natječaja </a>
    </label>
    <button class="classic-btn" @click="submit">Pošalji</button>
  </div>
</template>

<script>
export default {
  name: 'QuizPersonalDetails',
  props: {
    data: {
      type: Object,
      required: true,
      default() {
        return {
          id: 0,
          type: '',
          question: '',
          terms_conditions: '',
        }
      },
    },
  },
  data() {
    return {
      email: '',
      name: '',
      consent: 0,
      consent2: 0,
    }
  },
  methods: {
    submit() {
      if (this.data.terms_conditions && !this.consent2) {
        return
      }
      if (this.consent) {
        this.$emit('answer', this.data.id, {
          email: this.email,
          name: this.name,
        })
      }
    },
  },
}
</script>
