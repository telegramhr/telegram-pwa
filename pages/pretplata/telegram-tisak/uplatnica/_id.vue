<template>
  <div class="tisak">
    <main id="main" class="tt-flow">
      <div class="tt-flow__inner">
        <ol class="tt-steps" aria-label="Koraci">
          <li>Podaci</li>
          <li aria-current="step">Plaćanje</li>
          <li>Potvrda</li>
        </ol>
        <div class="tt-flow__grid">
          <div>
            <h1 class="tt-flow__title">Platite uplatnicom</h1>
            <p class="tt-flow__lead">
              Skenirajte barkod u aplikaciji svoje banke ili prepišite podatke.
              Iste podatke poslali smo Vam
              <template v-if="email"
                >na <strong>{{ email }}</strong></template
              ><template v-else>e-poštom</template>.
            </p>
            <div v-if="error" class="tt-banner" role="alert">
              <strong>Uplatnicu nismo pronašli.</strong>
              Podatke za uplatu poslali smo Vam e-poštom. Ako ih nema, pišite
              nam na pretplata@telegram.hr.
            </div>
            <div v-else class="tt-card">
              <div class="tt-barcode">
                <img
                  v-if="code"
                  :src="`data:image/png;base64,${code}`"
                  alt="Barkod za plaćanje (HUB-3)"
                />
                <span v-else class="tt-loader" aria-label="Učitavanje"></span>
              </div>
              <dl class="tt-pay">
                <div v-for="row in rows" :key="row.id">
                  <dt>{{ row.label }}</dt>
                  <dd>{{ row.value }}</dd>
                  <button type="button" @click="copy(row)">
                    {{ copied === row.id ? 'Kopirano' : 'Kopiraj' }}
                  </button>
                </div>
              </dl>
            </div>
          </div>
          <aside class="tt-summary">
            <p class="tt-summary__label">Što slijedi</p>
            <ul class="tt-ticks">
              <li>
                Uplata obično stiže za 1–2 radna dana. Tada Vam šaljemo potvrdu.
              </li>
              <li>
                Važno je upisati točan poziv na broj, da Vašu uplatu prepoznamo.
              </li>
              <li>Ako uplata ne stigne, podsjetit ćemo Vas e-poštom.</li>
              <li>Plaćeno razdoblje počinje izlaskom prvog broja.</li>
            </ul>
            <div class="tt-summary__note">
              <p>
                Ako u 30 dana ne prikupimo dovoljno pretplatnika, vraćamo Vam
                cijeli iznos na račun s kojeg ste platili.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>

    <TisakFooter slim />
  </div>
</template>

<script>
import { BANK, PLANS, eur, loadDraft } from '~/utils/tisak'

export default {
  name: 'TelegramTisakUplatnica',
  data() {
    return {
      price: null,
      reference: '',
      code: '',
      email: '',
      error: false,
      copied: '',
    }
  },
  computed: {
    plan() {
      const byQuery = PLANS[this.$route.query.plan]
      if (byQuery) return byQuery
      return Object.values(PLANS).find((p) => p.price === Number(this.price))
    },
    rows() {
      return [
        {
          id: 'iznos',
          label: 'Iznos',
          value: this.price ? eur(this.price) : '…',
          copy: this.price ? String(this.price).replace('.', ',') : '',
        },
        {
          id: 'primatelj',
          label: 'Primatelj',
          value: `${BANK.recipient}, ${BANK.address}`,
        },
        { id: 'iban', label: 'IBAN primatelja', value: BANK.iban },
        {
          id: 'poziv',
          label: 'Model i poziv na broj',
          value: `${BANK.model} ${this.reference || '…'}`,
        },
        {
          id: 'opis',
          label: 'Opis plaćanja',
          // Matches the description encoded in the HUB-3 barcode.
          value: `Pretplata - ${this.email || 'e-pošta Vašeg računa'}`,
        },
      ]
    },
  },
  mounted() {
    const draft = loadDraft()
    if (draft && draft.fields) {
      this.email = draft.fields.email
    }
    this.$axios
      .$get(`/pretplate/api/pretplata/bank/${this.$route.params.id}`)
      .then((res) => {
        this.price = res.price
        this.reference = res.number
        this.code = res.code
      })
      .catch(() => {
        this.error = true
      })
  },
  methods: {
    copy(row) {
      const text = row.copy || row.value
      const done = () => {
        this.copied = row.id
        setTimeout(() => {
          if (this.copied === row.id) this.copied = ''
        }, 1500)
      }
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(done, done)
      } else {
        done()
      }
    },
  },
  head() {
    return {
      title: 'Uplatnica – Tiskani Telegram',
      meta: [{ hid: 'robots', name: 'robots', content: 'noindex' }],
    }
  },
}
</script>

<style src="~/assets/telegram-tisak.css"></style>
