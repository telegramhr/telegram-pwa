<template>
  <div class="tisak">
    <div v-if="loading" class="tt-overlay" aria-live="polite">
      <span class="tt-loader" aria-label="Učitavanje"></span>
    </div>
    <TisakHeader flow />

    <main id="main" class="tt-flow">
      <div class="tt-flow__inner">
        <ol class="tt-steps" aria-label="Koraci">
          <li aria-current="step">Podaci</li>
          <li>Plaćanje</li>
          <li>Potvrda</li>
        </ol>
        <div class="tt-flow__grid">
          <div>
            <h1 class="tt-flow__title">Podaci za dostavu</h1>
            <p class="tt-planbar">
              <span
                >Tiskani Telegram,
                <strong
                  >{{ eur(current.price) }} {{ current.per }}</strong
                ></span
              >
              <a href="#sum-title">Promijeni</a>
            </p>

            <div
              v-if="banner"
              ref="banner"
              class="tt-banner"
              :class="{ 'tt-banner--info': banner.info }"
              role="alert"
              tabindex="-1"
            >
              <strong>{{ banner.title }}</strong>
              <template v-if="banner.text">{{ banner.text }}</template>
              <ul v-if="banner.list">
                <li v-for="item in banner.list" :key="item.id">
                  <a :href="`#${item.id}`" @click.prevent="focus(item.id)">{{
                    item.msg
                  }}</a>
                </li>
              </ul>
            </div>

            <form
              id="details"
              class="tt-card"
              novalidate
              action="#"
              method="post"
              @submit.prevent="submit"
            >
              <TisakSocialLogin
                v-if="!loggedIn && !emailTaken"
                text="Imate Telegram račun?"
                @leave="persistNow"
              />

              <TisakField
                id="email"
                v-model="f.email"
                label="E-pošta"
                type="email"
                inputmode="email"
                autocomplete="email"
                :readonly="loggedIn"
                :hint="loggedIn ? '' : 'Na nju šaljemo potvrdu i račun.'"
                :error="errors.email"
              />

              <p v-if="loggedIn" class="tt-signed">
                Prijavljeni ste.
                <button type="button" class="tt-link" @click="logout">
                  Niste Vi? Odjavite se
                </button>
              </p>
              <div v-else-if="emailTaken" class="tt-signin">
                <p>
                  Ova adresa već ima Telegram račun. Prijavite se lozinkom ili
                  putem Googlea ili Facebooka i podatke ćemo ispuniti za Vas.
                </p>
                <TisakField
                  id="password"
                  v-model="password"
                  label="Lozinka"
                  type="password"
                  autocomplete="current-password"
                  :error="errors.password || loginError"
                />
                <div class="tt-signin__row">
                  <TgButton class="tt-btn" @click="login"
                    >Prijavite se</TgButton
                  >
                  <a
                    href="https://pretplata.telegram.hr/social-login/social-sign/request-password"
                    target="_blank"
                    rel="noopener"
                    >Zaboravili ste lozinku?</a
                  >
                </div>
                <TisakSocialLogin
                  text="Registrirali ste se putem Googlea ili Facebooka?"
                  @leave="persistNow"
                />
              </div>

              <TisakField
                id="ime"
                v-model="f.ime"
                label="Ime i prezime"
                autocomplete="name"
                :error="errors.ime"
              />
              <div class="tt-field-row tt-field-row--street">
                <TisakField
                  id="ulica"
                  v-model="f.ulica"
                  label="Ulica"
                  autocomplete="address-line1"
                  :error="errors.ulica"
                />
                <TisakField
                  id="kucni_broj"
                  v-model="f.kucni_broj"
                  label="Kućni broj"
                  autocomplete="off"
                  maxlength="12"
                  :error="errors.kucni_broj"
                />
              </div>
              <div class="tt-field-row">
                <TisakField
                  id="postanski"
                  v-model="f.postanski"
                  label="Poštanski broj"
                  inputmode="numeric"
                  autocomplete="postal-code"
                  maxlength="5"
                  digits
                  :error="errors.postanski"
                />
                <TisakField
                  id="mjesto"
                  :value="f.mjesto"
                  label="Mjesto"
                  autocomplete="address-level2"
                  :error="errors.mjesto"
                  @input="onTownInput"
                />
              </div>
              <p class="tt-static"><span>Država:</span> Hrvatska</p>
              <TisakField
                id="mobitel"
                v-model="f.mobitel"
                label="Broj mobitela"
                type="tel"
                inputmode="tel"
                autocomplete="tel"
                hint="Samo za dostavu, ako nas dostavljač treba kontaktirati."
                :error="errors.mobitel"
              />

              <fieldset class="tt-choices">
                <legend>Način plaćanja</legend>
                <label
                  class="tt-choice"
                  :class="{ 'is-checked': f.placanje === 'kartica' }"
                >
                  <input v-model="f.placanje" type="radio" value="kartica" />
                  <span
                    ><strong>Kartica</strong
                    ><small
                      >Visa, Mastercard, Apple Pay, Google Pay</small
                    ></span
                  >
                </label>
                <label
                  class="tt-choice"
                  :class="{ 'is-checked': f.placanje === 'uplata' }"
                >
                  <input v-model="f.placanje" type="radio" value="uplata" />
                  <span
                    ><strong>Bankovna uplata</strong
                    ><small
                      >Dobit ćete uplatnicu s barkodom za plaćanje u aplikaciji
                      banke.</small
                    ></span
                  >
                </label>
              </fieldset>

              <div class="tt-r1">
                <label class="tt-check"
                  ><input v-model="f.r1" type="checkbox" @change="onR1" /><span
                    >Trebam R1 račun</span
                  ></label
                >
                <div v-if="f.r1" class="tt-r1__fields">
                  <TisakField
                    id="tvrtka"
                    v-model="f.tvrtka"
                    label="Naziv tvrtke"
                    autocomplete="organization"
                    :error="errors.tvrtka"
                  />
                  <TisakField
                    id="oib"
                    v-model="f.oib"
                    label="OIB tvrtke"
                    inputmode="numeric"
                    maxlength="11"
                    digits
                    autocomplete="off"
                    :error="errors.oib"
                  />
                </div>
              </div>

              <div class="tt-r1">
                <label class="tt-check"
                  ><input
                    v-model="f.racun"
                    type="checkbox"
                    @change="onRacun"
                  /><span
                    >Adresa za račun razlikuje se od adrese dostave</span
                  ></label
                >
                <div v-if="f.racun" class="tt-r1__fields">
                  <TisakField
                    v-if="!f.r1"
                    id="racun_ime"
                    v-model="f.racun_ime"
                    label="Ime i prezime na računu"
                    autocomplete="billing name"
                    :error="errors.racun_ime"
                  />
                  <div class="tt-field-row tt-field-row--street">
                    <TisakField
                      id="racun_ulica"
                      v-model="f.racun_ulica"
                      label="Ulica"
                      autocomplete="billing address-line1"
                      :error="errors.racun_ulica"
                    />
                    <TisakField
                      id="racun_kucni_broj"
                      v-model="f.racun_kucni_broj"
                      label="Kućni broj"
                      maxlength="12"
                      :error="errors.racun_kucni_broj"
                    />
                  </div>
                  <div class="tt-field-row">
                    <TisakField
                      id="racun_postanski"
                      v-model="f.racun_postanski"
                      label="Poštanski broj"
                      inputmode="numeric"
                      autocomplete="billing postal-code"
                      maxlength="5"
                      digits
                      :error="errors.racun_postanski"
                    />
                    <TisakField
                      id="racun_mjesto"
                      v-model="f.racun_mjesto"
                      label="Mjesto"
                      autocomplete="billing address-level2"
                      :error="errors.racun_mjesto"
                    />
                  </div>
                </div>
              </div>

              <label class="tt-check"
                ><input v-model="f.obavijesti" type="checkbox" /><span
                  >Želim primati Telegramove obavijesti i ponude e-poštom.</span
                ></label
              >

              <div class="tt-submit">
                <TgButton class="tt-btn" type="submit" block>
                  {{
                    f.placanje === 'uplata'
                      ? 'Nastavi na uplatnicu'
                      : 'Nastavi na plaćanje'
                  }}
                </TgButton>
                <p v-if="submitError" class="tt-submit__error" role="alert">
                  {{ submitError }}
                </p>
                <p class="tt-fine">
                  Pretplatom prihvaćate
                  <a
                    href="https://www.telegram.hr/stranica/uvjeti-koristenja/"
                    target="_blank"
                    >uvjete prodaje</a
                  >
                  i
                  <a
                    href="https://www.telegram.hr/stranica/pravila-privatnosti/"
                    target="_blank"
                    >pravila privatnosti</a
                  >.
                </p>
              </div>
            </form>
          </div>

          <aside class="tt-summary" aria-labelledby="sum-title">
            <p id="sum-title" class="tt-summary__label">Vaša pretplata</p>
            <fieldset class="tt-choices">
              <legend class="tt-sr-only">Odaberite pretplatu</legend>
              <label
                v-for="p in planList"
                :key="p.id"
                class="tt-choice"
                :class="{ 'is-checked': plan === p.id }"
              >
                <input
                  type="radio"
                  name="plan"
                  :value="p.id"
                  :checked="plan === p.id"
                  @change="setPlan(p.id)"
                />
                <span
                  ><strong>{{ eur(p.price) }} {{ p.per }}</strong
                  ><small>{{
                    p.id === 'godisnja'
                      ? 'Jedno plaćanje za cijelu godinu'
                      : 'Otkažite kad god želite'
                  }}</small></span
                >
                <span v-if="p.id === 'godisnja'" class="tt-choice__tag"
                  >Najbolja vrijednost</span
                >
              </label>
            </fieldset>
            <ul class="tt-ticks">
              <li>Najbolji autori u Hrvatskoj</li>
              <li>Šest brojeva tjedno, od ponedjeljka do subote</li>
              <li>Dostava uključena u cijenu</li>
            </ul>
            <dl>
              <dt class="tt-total">Plaćate danas</dt>
              <dd class="tt-total">{{ eur(current.price) }}</dd>
              <dt>Zatim</dt>
              <dd>{{ eur(current.price) }} {{ current.per }}</dd>
            </dl>
            <div class="tt-summary__note">
              <p>
                Cijene uključuju PDV. Plaćeno razdoblje počinje izlaskom prvog
                broja.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>

    <TisakFooter slim />
    <iframe id="TrustPayFrame" allow="clipboard-write *; payment *"></iframe>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'
import {
  DEFAULT_PLAN,
  FUNNEL_URL_KEY,
  PLANS,
  POSTCODES,
  eur,
  houseNumber,
  loadDraft,
  markCardPending,
  saveDraft,
  validEmail,
  validHouseNumber,
  validOib,
  validPhone,
  validPostcode,
} from '~/utils/tisak'

const PAYMENT_GATEWAY = 'trustpay_recurrent'
const THANK_YOU_URL = 'https://www.telegram.hr/pretplata/telegram-tisak/hvala/'

function emptyForm() {
  return {
    email: '',
    ime: '',
    ulica: '',
    kucni_broj: '',
    postanski: '',
    mjesto: '',
    mobitel: '',
    placanje: 'kartica',
    r1: false,
    tvrtka: '',
    oib: '',
    racun: false,
    racun_ime: '',
    racun_ulica: '',
    racun_kucni_broj: '',
    racun_postanski: '',
    racun_mjesto: '',
    obavijesti: false,
  }
}

export default {
  name: 'TelegramTisakPodaci',
  data() {
    return {
      plan: PLANS[this.$route.query.plan]
        ? this.$route.query.plan
        : DEFAULT_PLAN,
      planList: [PLANS.godisnja, PLANS.mjesecna],
      f: emptyForm(),
      townAuto: true,
      errors: {},
      banner: null,
      emailTaken: false,
      password: '',
      loading: false,
      submitError: '',
      prefilled: false,
    }
  },
  computed: {
    current() {
      return PLANS[this.plan]
    },
    loggedIn() {
      return !!this.$store.state.user.id
    },
    loginError() {
      return this.emailTaken ? this.$store.state.user.error : ''
    },
  },
  watch: {
    f: {
      deep: true,
      handler() {
        this.persist()
      },
    },
    'f.email'(value) {
      if (!this.loggedIn) {
        this.checkEmail(value)
      }
    },
    'f.postanski'(pc) {
      if (pc.length !== 5) return
      const town = POSTCODES[pc]
      if (town && (!this.f.mjesto || this.townAuto)) {
        this.f.mjesto = town
        this.townAuto = true
        this.$delete(this.errors, 'mjesto')
      }
      if (validPostcode(pc)) {
        this.$delete(this.errors, 'postanski')
      } else {
        this.$set(
          this.errors,
          'postanski',
          'Dostavljamo samo na adrese u Hrvatskoj. Provjerite poštanski broj.'
        )
      }
    },
    'f.racun_postanski'(pc) {
      if (pc.length === 5 && POSTCODES[pc] && !this.f.racun_mjesto) {
        this.f.racun_mjesto = POSTCODES[pc]
      }
    },
    loggedIn(value) {
      if (value) {
        this.emailTaken = false
        this.password = ''
        this.$delete(this.errors, 'password')
        this.prefill()
      }
    },
  },
  mounted() {
    const draft = loadDraft()
    if (draft && draft.fields) {
      this.f = { ...emptyForm(), ...draft.fields }
      if (!PLANS[this.$route.query.plan] && PLANS[draft.plan]) {
        this.plan = draft.plan
      }
    }
    // Back from the payment provider without paying (if the CRM cancel URL points here).
    if (this.$route.query.placanje === 'nedovrseno') {
      this.banner = {
        info: true,
        title: 'Plaćanje nije dovršeno.',
        text: 'Ništa nije naplaćeno, a Vaši podaci su sačuvani. Pokušajte ponovno ili odaberite bankovnu uplatu.',
      }
    }
    this.$store.commit('user/setError', '')
    // A restored email is checked by the f.email watcher.
    if (this.loggedIn) {
      this.prefill()
    }

    this.messageHandler = (event) => {
      if (event.data === 'popupLoaded') {
        this.loading = false
      }
    }
    window.addEventListener('message', this.messageHandler, false)
    this.loadTrustPay()
  },
  beforeDestroy() {
    window.removeEventListener('message', this.messageHandler, false)
  },
  created() {
    this.persist = debounce(this.persistNow, 300)
    this.checkEmail = debounce(this.checkEmailNow, 700)
  },
  methods: {
    eur,
    focus(id) {
      const el = document.getElementById(id)
      if (el) el.focus()
    },
    setPlan(id) {
      this.plan = id
      this.persist()
      this.$router.replace({ query: { ...this.$route.query, plan: id } })
    },
    onTownInput(value) {
      this.f.mjesto = value
      this.townAuto = false
    },
    onR1() {
      if (this.f.r1) {
        this.$nextTick(() => this.focus('tvrtka'))
      }
    },
    onRacun() {
      if (this.f.racun) {
        this.$nextTick(() =>
          this.focus(this.f.r1 ? 'racun_ulica' : 'racun_ime')
        )
      }
    },
    // TrustPay's popup.js needs jQuery when it runs, and vue-meta loads head
    // scripts async in no fixed order, so load them one after the other.
    loadTrustPay() {
      const load = (src, ready) =>
        new Promise((resolve, reject) => {
          if (ready()) return resolve()
          const el = document.createElement('script')
          el.src = src
          el.onload = resolve
          el.onerror = reject
          document.head.appendChild(el)
        })
      this.trustPayReady = load(
        'https://code.jquery.com/jquery-3.7.1.min.js',
        () => !!window.jQuery
      ).then(() =>
        load(
          'https://mapi.trustpay.eu/mapi5/Scripts/TrustPay/popup.js',
          () => typeof window.openPopup === 'function'
        )
      )
      this.trustPayReady.catch(() => {})
    },
    persistNow() {
      saveDraft({ plan: this.plan, fields: this.f, hadAccount: this.loggedIn })
    },

    // ---------- Account ----------
    checkEmailNow(value) {
      if (this.loggedIn || !validEmail(value)) {
        this.emailTaken = false
        return
      }
      const formData = new FormData()
      formData.append('email', value.trim())
      this.$axios
        .$post('/crm/api/v2/users/email', formData, {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        })
        .then((data) => {
          // Ignore a late answer for an email the reader has since changed.
          if (value !== this.f.email) return
          this.emailTaken = data.status === 'taken'
        })
        .catch(() => {
          this.emailTaken = false
        })
    },
    login() {
      this.$delete(this.errors, 'password')
      if (!this.password) {
        this.$set(this.errors, 'password', 'Upišite lozinku.')
        this.focus('password')
        return
      }
      this.$store.commit('user/setError', '')
      this.$store.dispatch('user/loginSubmit', {
        email: this.f.email.trim(),
        password: this.password,
        reload: false,
      })
    },
    logout() {
      this.$store.dispatch('user/logout')
      this.f.email = ''
      this.prefilled = false
      this.$nextTick(() => this.focus('email'))
    },
    // Fill only what the reader hasn't typed: name from the account, the rest from
    // the account's saved print (delivery) and invoice addresses, if any.
    prefill() {
      const user = this.$store.state.user
      this.f.email = user.email || this.f.email
      if (this.prefilled) return
      this.prefilled = true
      const name = [user.first_name, user.last_name].filter(Boolean).join(' ')
      if (!this.f.ime && name) this.f.ime = name
      if (!user.token) return
      const headers = { Authorization: `Bearer ${user.token}` }
      // Keyed by address id. The CRM's current address is the newest one, but
      // JS orders numeric keys ascending, so take the highest id.
      const first = (res) => {
        const all = (res && res.addresses) || {}
        const ids = Object.keys(all).sort((a, b) => b - a)
        return ids.length ? all[ids[0]] : undefined
      }
      this.$axios
        .$get('/crm/api/v1/user/addresses', {
          params: { type: 'print' },
          headers,
        })
        .then((res) => {
          const a = first(res)
          if (!a) return
          const fullName = [a.first_name, a.last_name].filter(Boolean).join(' ')
          if (!this.f.ime && fullName) this.f.ime = fullName
          if (!this.f.ulica && a.street) {
            this.f.ulica = a.street
            this.f.kucni_broj = a.number || ''
          }
          if (!this.f.postanski && a.zip) this.f.postanski = String(a.zip)
          if (!this.f.mjesto && a.city) this.f.mjesto = a.city
          if (!this.f.mobitel && a.phone_number) this.f.mobitel = a.phone_number
        })
        .catch(() => {})
      this.$axios
        .$get('/crm/api/v1/user/addresses', {
          params: { type: 'invoice' },
          headers,
        })
        .then((res) => {
          // Prefilled but not ticked: the reader decides again per order.
          const a = first(res)
          if (!a) return
          if (a.company_name && !this.f.tvrtka) {
            this.f.tvrtka = a.company_name
            this.f.oib = a.company_id || this.f.oib
          }
          if (a.street && !this.f.racun_ulica) {
            this.f.racun_ime = [a.first_name, a.last_name]
              .filter(Boolean)
              .join(' ')
            this.f.racun_ulica = a.street
            this.f.racun_kucni_broj = a.number || ''
            this.f.racun_postanski = a.zip ? String(a.zip) : ''
            this.f.racun_mjesto = a.city || ''
          }
        })
        .catch(() => {})
    },

    // ---------- Validation ----------
    validate() {
      const f = this.f
      const list = []
      const errors = {}
      const need = (id, ok, msg) => {
        if (!ok) {
          errors[id] = msg
          list.push({ id, msg })
        }
      }
      need(
        'email',
        validEmail(f.email),
        'Upišite ispravnu adresu e-pošte, npr. ime@primjer.hr.'
      )
      if (this.emailTaken && !this.loggedIn) {
        need('password', false, 'Prijavite se lozinkom svog Telegram računa.')
      }
      need(
        'ime',
        f.ime.trim().split(/\s+/).length >= 2,
        'Upišite ime i prezime osobe kojoj novine stižu.'
      )
      need('ulica', f.ulica.trim().length >= 3, 'Upišite ulicu.')
      need('kucni_broj', validHouseNumber(f.kucni_broj), 'Npr. 12, 12a ili bb.')
      need(
        'postanski',
        validPostcode(f.postanski),
        'Dostavljamo samo na adrese u Hrvatskoj. Provjerite poštanski broj.'
      )
      need('mjesto', f.mjesto.trim().length >= 2, 'Upišite mjesto.')
      need(
        'mobitel',
        validPhone(f.mobitel),
        'Upišite broj mobitela, npr. 091 234 5678.'
      )
      if (f.r1) {
        need(
          'tvrtka',
          f.tvrtka.trim().length >= 2,
          'Upišite naziv tvrtke za R1 račun.'
        )
        need(
          'oib',
          validOib(f.oib),
          'OIB nije ispravan. Provjerite 11 znamenki.'
        )
      }
      if (f.racun) {
        if (!f.r1) {
          need(
            'racun_ime',
            f.racun_ime.trim().split(/\s+/).length >= 2,
            'Upišite ime i prezime na koje glasi račun.'
          )
        }
        need(
          'racun_ulica',
          f.racun_ulica.trim().length >= 3,
          'Upišite ulicu za račun.'
        )
        need(
          'racun_kucni_broj',
          validHouseNumber(f.racun_kucni_broj),
          'Npr. 12, 12a ili bb.'
        )
        need(
          'racun_postanski',
          /^\d{5}$/.test(f.racun_postanski),
          'Upišite poštanski broj za račun.'
        )
        need(
          'racun_mjesto',
          f.racun_mjesto.trim().length >= 2,
          'Upišite mjesto za račun.'
        )
      }
      this.errors = errors
      return list
    },

    // Delivery and invoice details travel with the payment as metadata, so they
    // show on the payment in the CRM and in the bank transfer record.
    metadata() {
      const f = this.f
      const meta = {
        print_ime: f.ime.trim(),
        print_ulica: f.ulica.trim(),
        print_kucni_broj: houseNumber(f.kucni_broj),
        print_postanski: f.postanski,
        print_mjesto: f.mjesto.trim(),
        print_drzava: 'HR',
        print_mobitel: f.mobitel.trim(),
        print_plan: this.plan,
      }
      if (f.r1) {
        meta.r1 = '1'
        meta.r1_tvrtka = f.tvrtka.trim()
        meta.r1_oib = f.oib
      }
      // Without this the invoice goes to the delivery address.
      if (f.racun) {
        meta.racun = '1'
        if (!f.r1) meta.racun_ime = f.racun_ime.trim()
        meta.racun_ulica = f.racun_ulica.trim()
        meta.racun_kucni_broj = houseNumber(f.racun_kucni_broj)
        meta.racun_postanski = f.racun_postanski
        meta.racun_mjesto = f.racun_mjesto.trim()
      }
      return meta
    },

    // ---------- Submit ----------
    submit() {
      this.submitError = ''
      const list = this.validate()
      if (list.length) {
        this.banner = { title: 'Provjerite označena polja.', list }
        this.$nextTick(() => this.focus(list[0].id))
        return
      }
      this.banner = null
      this.persist.cancel()
      this.persistNow()
      this.loading = true
      if (this.f.placanje === 'uplata') {
        this.bankTransfer()
      } else {
        this.cardPayment()
      }
    },
    cardPayment(attempt = 0) {
      const data = new FormData()
      data.append('allow_redirect', '1')
      data.append('funnel_url_key', FUNNEL_URL_KEY)
      data.append('subscription_type', this.current.code)
      data.append('payment_gateway', PAYMENT_GATEWAY)
      data.append('price', String(this.current.price))
      data.append('auth', '1')
      data.append('email', this.f.email.trim())
      if (this.f.obavijesti) {
        data.append('newsletters_subscribe', '1')
      }
      const meta = this.metadata()
      Object.keys(meta).forEach((key) =>
        data.append(`payment_metadata[${key}]`, meta[key])
      )
      Promise.resolve(this.trustPayReady)
        .then(() =>
          fetch(
            `/crm/sales-funnel/sales-funnel-frontend/submit?referer=${encodeURIComponent(
              THANK_YOU_URL
            )}`,
            { method: 'POST', body: data, credentials: 'include' }
          )
        )
        .then((response) => response.json())
        .then((res) => {
          if (res.status !== 'ok' || !res.url) {
            throw new Error('funnel')
          }
          markCardPending(this.plan)
          this.saveAddress()
          const frame = document.getElementById('TrustPayFrame')
          frame.src = res.url + '&Localization=hr'
          frame.style.position = 'fixed'
          frame.style.zIndex = '100'
          /* global openPopup */
          openPopup()
          // popup.js posts 'popupLoaded'; this is the fallback.
          setTimeout(() => {
            this.loading = false
          }, 4000)
        })
        .catch(() => {
          if (attempt < 1) {
            setTimeout(() => this.cardPayment(attempt + 1), 500)
            return
          }
          this.loading = false
          this.submitError =
            'Plaćanje se nije uspjelo pokrenuti. Pokušajte ponovno ili odaberite bankovnu uplatu.'
        })
    },
    // The funnel submit has just created or logged in the CRM user and set
    // its n_token cookie (.telegram.hr). pretplate saves the delivery address
    // as a CRM "print" address on that token's user only, and never
    // overwrites. A failure must not block the payment.
    saveAddress(attempt = 0) {
      const token = this.$cookies.get('n_token') || this.$store.state.user.token
      if (!token) return
      this.$axios
        .$post(
          '/pretplate/api/pretplata/print-address',
          { metadata: this.metadata() },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .catch((e) => {
          // pretplate retries CRM failures itself; this covers not reaching
          // pretplate at all. A 401/422 won't get better on a retry.
          const status = e.response && e.response.status
          if (attempt < 1 && (!status || status >= 500)) {
            setTimeout(() => this.saveAddress(attempt + 1), 2000)
          }
        })
    },
    // pretplate saves the address of an existing account only with that
    // reader's own token.
    authHeaders() {
      const token = this.loggedIn && this.$store.state.user.token
      return token ? { headers: { Authorization: `Bearer ${token}` } } : {}
    },
    bankTransfer() {
      this.$axios
        .$post(
          '/pretplate/api/pretplata/bank',
          {
            subscription_type: this.current.code,
            price: this.current.price,
            email: this.f.email.trim(),
            referer: THANK_YOU_URL,
            newsletters_subscribe: this.f.obavijesti,
            metadata: this.metadata(),
          },
          this.authHeaders()
        )
        .then((res) => {
          if (!res.id) throw new Error('bank')
          this.$router.push({
            path: `/pretplata/telegram-tisak/uplatnica/${res.id}/`,
            query: { plan: this.plan },
          })
        })
        .catch(() => {
          this.loading = false
          this.submitError =
            'Uplatnica se nije uspjela izraditi. Pokušajte ponovno ili nam pišite na pretplata@telegram.hr.'
        })
    },
  },
  head() {
    return {
      title: 'Vaši podaci – Tiskani Telegram',
      meta: [{ hid: 'robots', name: 'robots', content: 'noindex' }],
    }
  },
}
</script>

<style src="~/assets/telegram-tisak.css"></style>
