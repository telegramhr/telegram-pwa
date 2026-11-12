// Shared config and helpers for the print subscription flow (/pretplata/telegram-tisak/).
// Prices are shown here for display only; REMP takes the price from the subscription type.

export const FUNNEL_URL_KEY = 'print'

export const PLANS = {
  mjesecna: {
    id: 'mjesecna',
    code: 'telegram_print_mjesec',
    name: 'Mjesečna pretplata',
    price: 39,
    per: 'mjesečno',
  },
  godisnja: {
    id: 'godisnja',
    code: 'telegram_print_godina',
    name: 'Godišnja pretplata',
    price: 399,
    per: 'godišnje',
  },
}

export const DEFAULT_PLAN = 'godisnja'

export function planFor(id) {
  return PLANS[id] || PLANS[DEFAULT_PLAN]
}

export function eur(n) {
  return Number(n).toLocaleString('hr-HR') + '€'
}

// A starter list of Croatian postcodes for auto-filling the town. Any other code with a
// valid Croatian prefix is accepted and the reader types the town by hand.
export const POSTCODES = {
  10000: 'Zagreb',
  10020: 'Zagreb-Novi Zagreb',
  10040: 'Zagreb-Dubrava',
  10090: 'Zagreb-Susedgrad',
  10110: 'Zagreb',
  10290: 'Zaprešić',
  10310: 'Ivanić-Grad',
  10360: 'Sesvete',
  10410: 'Velika Gorica',
  10430: 'Samobor',
  20000: 'Dubrovnik',
  20260: 'Korčula',
  20350: 'Metković',
  21000: 'Split',
  21210: 'Solin',
  21220: 'Trogir',
  21260: 'Imotski',
  21300: 'Makarska',
  21310: 'Omiš',
  21400: 'Supetar',
  21450: 'Hvar',
  22000: 'Šibenik',
  22300: 'Knin',
  23000: 'Zadar',
  23210: 'Biograd na Moru',
  31000: 'Osijek',
  31400: 'Đakovo',
  31500: 'Našice',
  32000: 'Vukovar',
  32100: 'Vinkovci',
  33000: 'Virovitica',
  34000: 'Požega',
  35000: 'Slavonski Brod',
  40000: 'Čakovec',
  42000: 'Varaždin',
  42240: 'Ivanec',
  43000: 'Bjelovar',
  44000: 'Sisak',
  44250: 'Petrinja',
  44320: 'Kutina',
  47000: 'Karlovac',
  47300: 'Ogulin',
  48000: 'Koprivnica',
  49000: 'Krapina',
  49210: 'Zabok',
  51000: 'Rijeka',
  51260: 'Crikvenica',
  51410: 'Opatija',
  51500: 'Krk',
  51550: 'Mali Lošinj',
  52100: 'Pula',
  52210: 'Rovinj',
  52440: 'Poreč',
  52470: 'Umag',
  53000: 'Gospić',
}

const HR_PREFIXES = [
  '10',
  '20',
  '21',
  '22',
  '23',
  '31',
  '32',
  '33',
  '34',
  '35',
  '40',
  '42',
  '43',
  '44',
  '47',
  '48',
  '49',
  '51',
  '52',
  '53',
]

export function validEmail(value) {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test((value || '').trim())
}

export function validPostcode(pc) {
  return /^\d{5}$/.test(pc) && HR_PREFIXES.includes(pc.slice(0, 2))
}

export function validPhone(value) {
  return /^\+?\d{8,15}$/.test((value || '').replace(/[\s/()-]/g, ''))
}

// OIB check digit, ISO 7064 MOD 11,10.
export function validOib(oib) {
  if (!/^\d{11}$/.test(oib)) {
    return false
  }
  let a = 10
  for (let i = 0; i < 10; i++) {
    a = (a + Number(oib[i])) % 10
    if (a === 0) {
      a = 10
    }
    a = (a * 2) % 11
  }
  let check = 11 - a
  if (check === 10) {
    check = 0
  }
  return check === Number(oib[10])
}

// What the reader typed is kept on this device for 7 days so a reload or an
// abandoned payment doesn't lose it. Never card data (there is none on our side).
const DRAFT_KEY = 'tgPrintOrder'
const WEEK = 7 * 24 * 60 * 60 * 1000

export function loadDraft() {
  try {
    const o = JSON.parse(window.localStorage.getItem(DRAFT_KEY) || 'null')
    if (o && Date.now() - o.ts < WEEK) {
      return o
    }
  } catch (e) {}
  return null
}

export function saveDraft(o) {
  try {
    window.localStorage.setItem(
      DRAFT_KEY,
      JSON.stringify({ ...o, ts: Date.now() })
    )
  } catch (e) {}
}

// The CRM sends every paid funnel to /pretplata/dobrodosli/ (fatchilli's
// telegram-module overrides the sales-funnel success route) with no payment
// details. Before opening TrustPay the form leaves this note, so dobrodosli
// can tell a print order apart and forward to our hvala page.
const CARD_KEY = 'tgPrintCardPending'
const CARD_TTL = 60 * 60 * 1000
export function markCardPending(plan) {
  try {
    window.localStorage.setItem(
      CARD_KEY,
      JSON.stringify({ plan, ts: Date.now() })
    )
  } catch (e) {}
}
// Returns the note once and removes it; null if missing or older than an hour.
export function takeCardPending() {
  try {
    const o = JSON.parse(window.localStorage.getItem(CARD_KEY) || 'null')
    window.localStorage.removeItem(CARD_KEY)
    if (o && Date.now() - o.ts < CARD_TTL) {
      return o
    }
  } catch (e) {}
  return null
}
export function clearDraft() {
  try {
    window.localStorage.removeItem(DRAFT_KEY)
  } catch (e) {}
}

export const BANK = {
  recipient: 'Presshaus d.o.o.',
  address: 'Franje Petračića 4, 10000 Zagreb',
  iban: 'HR4723600001503346846',
  model: 'HR00',
}
