export const state = () => ({
  pack: 'pretplata-standard',
  term: 'pretplata-godisnje',
  subscriptionType: 'individual',
  selectedPlan: 'standard',
  subscriptionDuration: 'annual',
  paymentMethod: 'card',
  promoCode: '',
  discountValue: null,
  voucherLogId: null,

  prices: {
    'pretplata-standard': {
      'pretplata-mjesecno': 7.99,
      'pretplata-godisnje': 79,
    },
    'pretplata-premium': {
      'pretplata-mjesecno': 9.99,
      'pretplata-godisnje': 99,
    },
  },
})

export const getters = {
  basePrice: (state) => {
    return state.prices[state.pack][state.term]
  },

  totalPrice: (state, getters) => {
    if (state.discountValue) return state.discountValue
    return getters.basePrice
  },
  standardPrice: (state) => {
    return state.prices['pretplata-standard'][state.term]
  },

  premiumPrice: (state) => {
    return state.prices['pretplata-premium'][state.term]
  },

  subscriptionType: (state) => {
    if (state.pack === 'pretplata-standard') {
      return state.term === 'pretplata-mjesecno'
        ? 'telegram_standard_4_tjedna_pretplata_2024'
        : 'telegram_standard_godisnja_pretplata_2024'
    }
    return state.term === 'pretplata-mjesecno'
      ? 'telegram_premium_4_tjedna_pretplata_2024'
      : 'telegram_premium_godisnja_pretplata_2024'
  },
}

export const mutations = {
  SET_PACK(state, pack) {
    state.pack = pack
  },
  SET_TERM(state, term) {
    state.term = term
  },
  SET_PROMO(state, code) {
    state.promoCode = code
  },
  SET_DISCOUNT(state, { amount, voucherLogId }) {
    state.discountValue = amount
    state.voucherLogId = voucherLogId
  },
  SET_SELECTED_PLAN(state, plan) {
    state.selectedPlan = plan
    state.pack =
      plan === 'standard' ? 'pretplata-standard' : 'pretplata-premium'
  },
  SET_SUBSCRIPTION_DURATION(state, val) {
    state.subscriptionDuration = val
  },
  SET_PAYMENT_METHOD(state, val) {
    state.paymentMethod = val
  },

  CLEAR_PROMO(state) {
    state.promoCode = ''
    state.discountValue = null
    state.voucherLogId = null
  },
}

export const actions = {
  setPack({ commit }, pack) {
    commit('SET_PACK', pack)
  },

  setTerm({ commit }, term) {
    commit('SET_TERM', term)
  },

  setPromo({ commit }, code) {
    commit('SET_PROMO', code)
  },

  async validatePromo({ commit, getters }, axios) {
    try {
      const res = await axios.get('/crm/api/v2/voucher/check', {
        params: {
          code: getters.promoCode,
          subscription_type_code: getters.subscriptionType,
          include_discounted_amount: true,
        },
      })

      commit('SET_DISCOUNT', {
        amount: res.data.discounted_amount,
        voucherLogId: res.data.voucher_log_id,
      })

      return { ok: true }
    } catch (e) {
      commit('CLEAR_PROMO')
      return { ok: false, error: 'Promo kod nije važeći' }
    }
  },
}
