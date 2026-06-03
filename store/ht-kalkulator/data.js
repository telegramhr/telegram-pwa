export const QUESTIONS = [
  {
    id: 1,
    category: 'email',
    title:
      'Koliko vremena tjedno potrošiš na čitanje, odgovaranje i pretraživanje emailova i poruka (WhatsApp, Slack, Teams…)?',
    aiSavingsPercent: 0.3,
    options: [
      { label: 'Samo brzinski, tu i tamo — do 30 min tjedno', minutes: 15 },
      { label: 'Malo svaki dan — 30–60 min tjedno', minutes: 45 },
      { label: 'Većinu tjedna — 1–3 sata tjedno', minutes: 120 },
      { label: 'Prilično puno vremena — 3–5 sati tjedno', minutes: 240 },
      { label: 'To mi je ozbiljan dio posla — 5–10 sati tjedno', minutes: 450 },
      {
        label: 'Imam osjećaj da stalno odgovaram — 10+ sati tjedno',
        minutes: 720,
      },
    ],
  },
  {
    id: 2,
    category: 'pisanje',
    title:
      'Koliko vremena trošiš na pisanje mailova, ponuda, izvještaja, prezentacija ili članaka?',
    aiSavingsPercent: 0.4,
    options: [
      { label: 'Manji dio radnog dana', minutes: 45 },
      { label: 'Prilično puno vremena', minutes: 240 },
      { label: 'To mi je ozbiljan dio posla', minutes: 450 },
      { label: 'Praktički stalno nešto pišem', minutes: 720 },
    ],
  },
  {
    id: 3,
    category: 'admin',
    title:
      'Koliko vremena tjedno potrošiš na administraciju, tablice, unos podataka i traženje dokumenata?',
    aiSavingsPercent: 0.35,
    options: [
      { label: 'Samo osnovno kad moram', minutes: 15 },
      { label: 'Većinu tjedna', minutes: 120 },
      { label: 'Prilično puno vremena', minutes: 240 },
      { label: 'To mi je velik dio posla', minutes: 450 },
      { label: 'Osjećam se kao da sam stalno u Excelu', minutes: 720 },
    ],
  },
  {
    id: 4,
    category: 'istrazivanje',
    title:
      'Koliko vremena provedeš tražeći informacije na Googleu ili kroz dokumente i mailove?',
    aiSavingsPercent: 0.45,
    options: [
      { label: 'Rijetko i kratko', minutes: 15 },
      { label: 'Manje od 1 sata tjedno', minutes: 45 },
      { label: 'Prilično puno vremena', minutes: 240 },
      { label: 'To mi je čest zadatak', minutes: 450 },
      { label: 'Stalno nešto istražujem', minutes: 720 },
    ],
  },
  {
    id: 5,
    category: 'planiranje',
    title:
      'Koliko vremena trošiš na planiranje zadataka, sastanaka i rasporeda?',
    aiSavingsPercent: 0.25,
    options: [
      { label: 'Manje od 1 sata tjedno', minutes: 15 },
      { label: '1-3 sata tjedno', minutes: 45 },
      { label: '3-5 sati tjedno', minutes: 240 },
      { label: '5-10 sati tjedno', minutes: 450 },
      { label: 'Više od 10 sati tjedno', minutes: 720 },
    ],
  },
  {
    id: 6,
    category: 'marketing',
    title: 'Koliko vremena trošiš na pripremu objava ili marketing sadržaja?',
    aiSavingsPercent: 0.4,
    options: [
      { label: 'Gotovo ništa, do 30 min tjedno', minutes: 15 },
      { label: 'Manje od 1 sata tjedno, 30–60 min', minutes: 45 },
      { label: '3-5 sati tjedno', minutes: 240 },
      { label: '5-10 sati tjedno', minutes: 450 },
      { label: 'Više od 10 sati tjedno', minutes: 720 },
    ],
  },
]

export const STORAGE_KEY = 'ht-ai-kalkulator'

export function calculateResults(answers) {
  const totalMinutes = answers.reduce((sum, a) => sum + a.minutes, 0)
  const totalHoursWeekly = totalMinutes / 60
  const totalHoursMonthly = totalHoursWeekly * 4

  const savedMinutes = answers.reduce(
    (sum, a, i) => sum + a.minutes * QUESTIONS[i].aiSavingsPercent,
    0
  )
  const savedHoursMonthly = (savedMinutes / 60) * 4
  const savedWorkDaysMonthly = (savedMinutes / 60 / 8) * 4

  let dynamicPhrase = ''
  if (savedWorkDaysMonthly >= 10) {
    dynamicPhrase = 'više od dva tjedna'
  } else if (savedWorkDaysMonthly >= 6) {
    dynamicPhrase = 'više od tjedan dana'
  } else if (savedWorkDaysMonthly >= 3) {
    dynamicPhrase = 'skoro tjedan dana'
  } else if (savedWorkDaysMonthly >= 1) {
    dynamicPhrase = 'više od pola tjedna'
  } else {
    dynamicPhrase = 'nekoliko sati'
  }

  return {
    totalHoursWeekly: Math.round(totalHoursWeekly * 10) / 10,
    totalHoursMonthly: Math.round(totalHoursMonthly * 10) / 10,
    savedHoursMonthly: Math.round(savedHoursMonthly * 10) / 10,
    dynamicPhrase,
  }
}
