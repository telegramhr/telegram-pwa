<template>
  <section class="lm" :class="{ loading: isLoading }">
    <div class="lm-top">
      <div class="lm-topLeft">
        <div class="lm-kicker">DODATNE INFORMACIJE</div>
        <h3 class="lm-title">
          Želite više konteksta, objašnjenja ili povezanih informacija?
        </h3>
        <p class="lm-subtitle">
          Ovaj modul čitatelju nudi kratke promptove za dodatno razumijevanje
          teme, bez napuštanja članka.
        </p>
      </div>

      <div class="lm-topRight">
        <div class="lm-ask">
          <div class="lm-ask-label">INPUT / AI PROMPT BOX</div>
          <div class="lm-ask-row">
            <input
              v-model.trim="customPrompt"
              class="lm-input"
              type="text"
              :placeholder="'Postavite pitanje o temi ovog članka...'"
              :disabled="isLoadingAnswer"
              @keydown.enter.prevent="submitCustom"
            />
            <button
              class="lm-btn"
              :disabled="isLoadingAnswer"
              @click="submitCustom"
            >
              Pitaj
            </button>
          </div>

          <div v-if="error" class="lm-error">
            {{ error }}
          </div>
        </div>
      </div>
    </div>

    <div class="lm-prompts">
      <button
        v-for="(p, idx) in promptCards"
        :key="idx"
        class="lm-prompt"
        :disabled="isLoadingAnswer"
        @click="ask(p.title)"
      >
        <div class="lm-prompt-title">{{ p.title }}</div>
        <div v-if="p.subtitle" class="lm-prompt-subtitle">{{ p.subtitle }}</div>
      </button>
    </div>

    <div class="lm-answer">
      <div class="lm-answer-label">ODGOVOR</div>
      <div class="lm-answer-body" :class="{ empty: !answer && !isLoadingAnswer }">
        <div v-if="isLoadingAnswer" class="lm-answer-loading">Učitavam…</div>
        <div v-else-if="answer">{{ answer }}</div>
        <div v-else class="lm-answer-placeholder">
          Odaberite jedan od prijedloga ili postavite vlastito pitanje.
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LearnMore',
  props: {
    postId: { type: [Number, String], required: true },
    postTitle: { type: String, default: '' },
    initialPrompts: { type: Array, default: () => [] },
  },
  computed: {
    promptCards() {
      // If we have rich defaults, keep title+subtitle; otherwise show just titles.
      return (this.prompts || []).map((p) => {
        if (typeof p === 'string') return { title: p, subtitle: '' }
        return { title: p?.title || '', subtitle: p?.subtitle || '' }
      })
    },
  },
  data() {
    return {
      isLoading: true,
      isLoadingAnswer: false,
      // Show immediate default cards; replace with AI prompts when loaded.
      prompts: [],
      customPrompt: '',
      answer: '',
      history: [],
      error: '',
    }
  },
  created() {
    // created() runs earlier than mounted() on the client, which reduces the
    // "blank then pop-in" effect on heavy article pages.
    if (Array.isArray(this.initialPrompts) && this.initialPrompts.length === 6) {
      this.prompts = this.initialPrompts
      this.isLoading = false
    } else {
      this.prompts = this.fallbackCards()
    }
  },
  mounted() {
    // If SSR already provided initial prompts, skip immediate refetch.
    if (!Array.isArray(this.initialPrompts) || this.initialPrompts.length !== 6) {
      this.loadPrompts()
    }
  },
  methods: {
    async loadPrompts() {
      this.error = ''
      this.isLoading = true
      try {
        const res = await this.$axios.$get(
          `/api/learn-more/prompts/${Number(this.postId)}`
        )
        this.prompts = Array.isArray(res?.prompts) ? res.prompts.slice(0, 6) : []
        if (this.prompts.length !== 6) this.prompts = this.fallbackCards()
      } catch (e) {
        this.error = 'Trenutno nije dostupno.'
        this.prompts = this.fallbackCards()
      } finally {
        this.isLoading = false
      }
    },

    async ask(prompt) {
      if (!prompt) return
      this.customPrompt = ''
      await this.submit(prompt)
    },

    async submitCustom() {
      if (!this.customPrompt) return
      const p = this.customPrompt
      this.customPrompt = ''
      await this.submit(p)
    },

    async submit(prompt) {
      this.error = ''
      this.isLoadingAnswer = true
      try {
        const payload = {
          post_id: Number(this.postId),
          prompt,
          history: this.history.slice(-6),
        }
        const res = await this.$axios.$post('/api/learn-more/answer', payload)
        if (typeof res?.answer === 'string') {
          this.answer = res.answer
          this.history.push({ prompt, answer: res.answer })
        }
        if (Array.isArray(res?.prompts) && res.prompts.length) {
          this.prompts = res.prompts.slice(0, 6)
        } else {
          await this.loadPrompts()
        }
      } catch (e) {
        this.error = 'Nešto je pošlo po zlu. Pokušajte ponovno.'
      } finally {
        this.isLoadingAnswer = false
      }
    },

    fallbackCards() {
      return [
        {
          title: 'Objasni kontekst',
          subtitle: 'Sažetak pozadine teme i zašto je važna.',
        },
        {
          title: 'Što se dogodilo prije?',
          subtitle: 'Kratka kronologija ključnih događaja.',
        },
        {
          title: 'Tko su glavni akteri?',
          subtitle: 'Pregled osoba, institucija i njihovih uloga.',
        },
        {
          title: 'Što ovo znači za mene?',
          subtitle: 'Praktične posljedice i mogući učinci.',
        },
        {
          title: 'Provjeri brojke',
          subtitle: 'Najvažniji podaci, brojke i usporedbe.',
        },
        {
          title: 'Povezani članci',
          subtitle: 'Još tekstova za dublje razumijevanje teme.',
        },
      ]
    },
  },
}
</script>

<style scoped>
.lm {
  --lm-red: var(--tg-primary-highlight-color);
  --lm-border: rgba(0, 0, 0, 0.08);
  --lm-soft: rgba(0, 0, 0, 0.04);
  --lm-text: rgba(0, 0, 0, 0.85);
  --lm-muted: rgba(0, 0, 0, 0.62);
  --lm-bg: var(--tg-secondary-background-color);
  --lm-card: var(--tg-primary-background-color);

  font-family: 'Barlow', system-ui, -apple-system, Segoe UI, sans-serif;
  color: var(--lm-text);
  border: 1px solid var(--lm-border);
  border-radius: 22px;
  padding: 22px;
  margin: 22px 0;
  background: var(--lm-bg);
}
.lm-kicker {
  display: inline-block;
  padding: 6px 10px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.08em;
  background: rgba(220, 0, 0, 0.06);
  color: var(--lm-red);
}
.lm-title {
  margin: 10px 0 8px;
  font-size: 28px;
  line-height: 1.1;
  letter-spacing: -0.01em;
}
.lm-subtitle {
  margin: 0;
  color: var(--lm-muted);
}

.lm-top {
  display: grid;
  gap: 16px;
}
.lm-topLeft {
  min-width: 0;
}
.lm-topRight {
  min-width: 0;
}

.lm-prompts {
  display: grid;
  gap: 12px;
  margin-top: 16px;
}

.lm-prompt {
  text-align: left;
  border: 1px solid var(--lm-border);
  background: var(--lm-card);
  border-radius: 16px;
  padding: 14px 16px;
  cursor: pointer;
  transition: transform 120ms ease, box-shadow 120ms ease;
}
.lm.loading .lm-prompt {
  position: relative;
  overflow: hidden;
}
.lm.loading .lm-prompt::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-100%);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.45) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  animation: lmShimmer 1.2s ease-in-out infinite;
}
.lm.loading .lm-prompt-title,
.lm.loading .lm-prompt-subtitle {
  opacity: 0.85;
}
.lm.loading .lm-prompt-subtitle {
  opacity: 0.6;
}
.lm-prompt:disabled {
  opacity: 0.6;
  cursor: default;
}
.lm-prompt:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.06);
}
.lm-prompt-title {
  font-weight: 700;
  line-height: 1.25;
}
.lm-prompt-subtitle {
  margin-top: 6px;
  font-size: 13px;
  line-height: 1.35;
  color: var(--lm-muted);
}

.lm-ask {
  border: 1px solid var(--lm-border);
  border-radius: 16px;
  padding: 14px 16px;
  background: var(--lm-card);
}
.lm-ask-label {
  font-size: 11px;
  letter-spacing: 0.08em;
  font-weight: 700;
  color: var(--lm-muted);
  margin-bottom: 10px;
}
.lm-ask-row {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
}
.lm-input {
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  padding: 12px 12px;
  font-size: 14px;
  outline: none;
}
.lm-input:focus {
  border-color: rgba(184, 0, 0, 0.35);
  box-shadow: 0 0 0 3px rgba(184, 0, 0, 0.12);
}
.lm-btn {
  border: 0;
  border-radius: 999px;
  padding: 11px 18px;
  background: var(--lm-red);
  color: #fff;
  font-weight: 800;
  cursor: pointer;
}
.lm-btn:disabled {
  opacity: 0.6;
  cursor: default;
}

.lm-error {
  margin-top: 10px;
  color: var(--lm-red);
  font-weight: 600;
}

.lm-answer {
  margin-top: 16px;
  border-top: 1px solid var(--lm-border);
  padding-top: 14px;
}
.lm-answer-label {
  font-size: 11px;
  letter-spacing: 0.08em;
  font-weight: 700;
  color: var(--lm-muted);
  margin-bottom: 10px;
}
.lm-answer-body {
  border: 1px solid var(--lm-border);
  border-radius: 16px;
  padding: 14px 16px;
  line-height: 1.5;
  background: var(--lm-card);
  min-height: 96px;
}
.lm-answer-loading {
  opacity: 0.7;
}
.lm-answer-placeholder {
  color: var(--lm-muted);
}

@keyframes lmShimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@media (min-width: 920px) {
  .lm-prompts {
    grid-template-columns: 1fr 1fr;
  }
  .lm-top {
    grid-template-columns: 1.25fr 0.9fr;
    align-items: start;
  }
  .lm-title {
    font-size: 34px;
  }
}
</style>

