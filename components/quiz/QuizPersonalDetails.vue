<template>
  <div>
    <h2>{{ data.question }}</h2>
    <label>Ime i prezime</label>
    <input v-model="name" type="text" />
    <label>Email</label>
    <input v-model="email" type="email" />
    <label>
      <input v-model="consent" type="checkbox" value="1" />
      Prihvaćam
      <app-link to="/stranica/pravila-privatnosti"
        >pravila privatnosti Telegram.hr</app-link
      >
      <template v-if="data.terms_conditions">
        i
        <a
          v-if="data.terms_conditions"
          target="_blank"
          :href="data.terms_conditions"
        >
          pravila natječaja
        </a>
      </template>
    </label>
    <button @click="submit">Pošalji</button>
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
    }
  },
  methods: {
    submit() {
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
