<template>
  <div class="tisak">
    <TisakHeader flow />

    <main id="main" class="tt-flow">
      <div class="tt-flow__inner tt-flow__inner--narrow">
        <ol class="tt-steps" aria-label="Koraci">
          <li>Podaci</li>
          <li>Plaćanje</li>
          <li aria-current="step">Potvrda</li>
        </ol>
        <div class="tt-done__mark" aria-hidden="true"></div>
        <h1 class="tt-flow__title">Hvala! Pretplata je zabilježena.</h1>
        <p class="tt-flow__lead">
          Potvrdu smo poslali na
          <strong>{{ order.email || 'Vašu e-poštu' }}</strong
          >.
        </p>
        <div class="tt-card">
          <dl class="tt-facts">
            <div>
              <dt>Pretplata</dt>
              <dd>{{ plan.name }}, {{ eur(plan.price) }} {{ plan.per }}</dd>
            </div>
            <div v-if="order.address">
              <dt>Adresa dostave</dt>
              <dd>
                {{ order.address }}. Krivo?
                <a href="https://www.telegram.hr/stranica/kontaktirajte-nas/"
                  >Javite nam se</a
                >.
              </dd>
            </div>
            <div>
              <dt>Obnova i otkaz</dt>
              <dd>
                Plaćeno razdoblje počinje izlaskom prvog broja. Otkazati možete
                kad god želite.
              </dd>
            </div>
            <div>
              <dt>Ako ne krenemo</dt>
              <dd>
                Ako u 30 dana ne prikupimo dovoljno pretplatnika, vraćamo Vam
                cijeli iznos.
              </dd>
            </div>
            <div>
              <dt>Vaš Telegram račun</dt>
              <dd v-if="order.hadAccount">
                Pretplata je povezana s Vašim računom.
              </dd>
              <dd v-else>
                Pristupne podatke za račun
                <template v-if="order.email">{{ order.email }}</template>
                poslali smo Vam e-poštom. Možete i
                <a
                  href="https://pretplata.telegram.hr/social-login/social-sign/request-password"
                  target="_blank"
                  rel="noopener"
                  >postaviti novu lozinku</a
                >.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </main>

    <TisakFooter slim />
  </div>
</template>

<script>
import { PLANS, DEFAULT_PLAN, eur, loadDraft, clearDraft } from '~/utils/tisak'

export default {
  name: 'TelegramTisakHvala',
  data() {
    return {
      order: { email: '', address: '', plan: DEFAULT_PLAN, hadAccount: false },
    }
  },
  computed: {
    plan() {
      return PLANS[this.order.plan] || PLANS[DEFAULT_PLAN]
    },
  },
  mounted() {
    // Readers normally arrive from /pretplata/dobrodosli/ in the top window.
    // If a future CRM change loads this page inside the TrustPay iframe, it is
    // same-origin with the page there and can replace the whole page.
    if (window.top !== window.self) {
      try {
        window.top.location.href = window.location.href
        return
      } catch (e) {}
    }
    const draft = loadDraft()
    if (draft && draft.fields) {
      const f = draft.fields
      this.order = {
        email: f.email,
        address: [f.ime, f.ulica, `${f.postanski} ${f.mjesto}`]
          .filter((x) => x && x.trim())
          .join(', '),
        plan: draft.plan,
        hadAccount: !!draft.hadAccount,
      }
      // The order is done: a later visit to the form should start clean.
      clearDraft()
    }
    // Refresh access so the new subscription shows up in the header and paywall.
    this.$store.dispatch('user/checkAccess')
  },
  methods: { eur },
  head() {
    return {
      title: 'Hvala – Tiskani Telegram',
      meta: [{ hid: 'robots', name: 'robots', content: 'noindex' }],
    }
  },
}
</script>

<style src="~/assets/telegram-tisak.css"></style>
