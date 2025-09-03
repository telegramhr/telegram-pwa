<template>
  <div>
    <!-- Chatbot Toggle Button -->
    <div
      v-if="!chatbotOpen"
      class="chatbot-hint"
      :class="{ hidden: hintHidden }"
    >
      <p><strong>Trebate pomoć?</strong></p>
    </div>
    <button
      class="center chatbot-toggle"
      :class="{ open: chatbotOpen }"
      @click="toggleChatbot"
    >
      <img src="@/assets/img/chat-icon.png" alt="Chat bubble icon" />
    </button>

    <!-- Chatbot Container -->
    <div class="chatbot-container" :class="{ open: chatbotOpen }">
      <!-- Chatbot Header -->
      <div class="chatbot-header">
        <div class="flex full relative">
          <div class="chatbot-header-logo">
            <img src="@/assets/img/t-znak.svg" alt="Telegram T" />
          </div>
          <div class="chatbot-header-text left-text">
            <h2 class="full">Telegram</h2>
            <h2 class="full">Podrška</h2>
          </div>
          <img
            src="@/assets/img/bg-chat-bubble.svg"
            class="chatbot-header-bg"
            alt="Chat Bubble"
          />
        </div>
      </div>

      <!-- Chat Messages Area -->
      <div ref="messagesContainer" class="chat-messages">
        <div
          v-for="(msg, index) in messages"
          :key="index"
          :class="['message', msg.sender]"
        >
          <div class="message-content" v-html="msg.text"></div>

          <!-- feedback block: shown only when this bot message has showFeedback=true -->
          <div
            v-if="msg.sender === 'bot' && msg.showFeedback"
            class="feedback center-text"
          >
            <p><strong>Je li vam ovo pomoglo?</strong></p>
            <button class="yes-btn" @click="feedbackYes(index)">Da</button>
            <button class="no-btn" @click="feedbackNo(index)">Ne</button>
          </div>
        </div>
      </div>

      <!-- Quick Questions -->
      <div class="quick-questions">
        <h4>Brza pitanja:</h4>
        <button
          v-for="(q, idx) in questions"
          :key="idx"
          class="question-btn"
          @click="askQuestion(q)"
        >
          {{ q }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chatbot',
  data() {
    return {
      gtm: null,
      chatbotOpen: false,
      messages: [],
      messagesContainer: null,
      hintHidden: false,
      qaPairs: {
        'kako se mogu pretplatiti na telegram?':
          "<p>Pretplatiti se možete odabirom željene pretplate na našoj <a href='https://www.telegram.hr/pretplata' target='_blank'>prodajnoj stranici</a>.</p><p>Sustav će vas voditi kroz jednostavan postupak registracije i plaćanja karticom.</p><p>Ako pretplatu želite platiti putem bankovnog transfera, javite nam se na <a href='mailto:pretplata@telegram.hr' target='_blank'>pretplata@telegram.hr</a></p>",
        'mogu li se pretplatiti samo na telesport?':
          "<p>Možete. Pretplata na Telesport dostupna je putem zasebne stranice. <a href='https://www.telegram.hr/pretplata/telesport/' target='_blank'> Link na stranicu</a></p>",
        'imam aktivnu pretplatu, ali ne mogu čitati članke.':
          "<p>Za neograničen pristup sadržaju potrebno je biti prijavljen u svoj korisnički račun.</p><p>Provjerite jeste li prijavljeni na stranici <a href='https://www.telegram.hr' target='_blank'>Telegrama.</a></p>",
        'kako se prijavljujem u svoj korisnički račun?':
          "<p><strong>Na računalu</strong>: na stranici <a href='https://www.telegram.hr' target='_blank'>telegram.hr</a> kliknite gumb <i>Prijava</i> u gornjem desnom kutu i unesite svoj e-mail i lozinku.</p> <p><strong>Na mobilnom uređaju</strong>: na istoj stranici kliknite na izbornik (tri crtice u gornjem desnom kutu), odaberite <i>Prijava</i> i unesite svoje podatke.</p>",
        'zaboravio/la sam lozinku. kako mogu dobiti novu?':
          "<p>Kliknite na <a href='https://pretplata.telegram.hr/social-login/social-sign/request-password' target='_blank'>poveznicu za obnovu lozinke</a>.</p> <p>Potrebno je unijeti e-mail adresu svog korisničkog računa, nakon čega ćete primiti verifikacijsku poruku.</p>",
        'kako funkcionira obnova pretplate?':
          "<p>Sve mjesečne i godišnje pretplate automatski se obnavljaju po isteku, na isti vremenski period.</p><p>Ako želite isključiti automatsku obnovu, to možete jednostavno učiniti jednim klikom u svom <a href='https://pretplata.telegram.hr/payments/payments/my' target='_blank'>korisničkom sučelju</a>.</p>",
        'ne pronalazim odgovor na svoje pitanje.':
          "<p>Slobodno nas kontaktirajte putem e-maila na <a href='mailto:pretplata@telegram.hr' target='_blank'>pretplata@telegram.hr</a>.</p>",
      },
      questions: [
        'Kako se mogu pretplatiti na Telegram?',
        'Mogu li se pretplatiti samo na Telesport?',
        'Imam aktivnu pretplatu, ali ne mogu čitati članke.',
        'Kako se prijavljujem u svoj korisnički račun?',
        'Zaboravio/la sam lozinku. Kako mogu dobiti novu?',
        'Kako funkcionira obnova pretplate?',
        'Ne pronalazim odgovor na svoje pitanje.',
      ],
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.hideHintOnScroll, {
        passive: true,
      })
    })
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.hideHintOnScroll)
  },
  methods: {
    scrollToBottom() {
      if (this.messagesContainer) {
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight
      }
    },
    trackEvent(action, label = null) {
      const payload = {
        event: 'chatbot_interaction',
        'chatbot-action': action,
        'chatbot-label': label,
        'chatbot-timestamp': new Date().toISOString(),
      }
      this.$gtm.push(payload)
    },
    toggleChatbot() {
      this.chatbotOpen = !this.chatbotOpen
      // show intro the first time it's opened
      if (this.chatbotOpen) {
        this.trackEvent('chat_opened')
      } else {
        this.trackEvent('chat_closed')
      }

      if (this.chatbotOpen && this.messages.length === 0) {
        this.messages.push({
          text: '<p>Poštovani, kako vam možemo pomoći? Kliknite na jedno od pitanja ispod!</p>',
          sender: 'bot',
          showFeedback: false,
        })
      }
      this.scrollToBottom()
    },
    findAnswer(question) {
      const normalized = question.toLowerCase().trim()
      return (
        this.qaPairs[normalized] ||
        '<p>Žao mi je, nemam točan odgovor. Kontaktirajte nas e-mailom.</p>'
      )
    },
    askQuestion(question) {
      // Push user message
      this.trackEvent('faq_clicked', question)

      this.messages.push({ text: `<p>${question}</p>`, sender: 'user' })
      this.$nextTick(this.scrollToBottom)

      // Simulate bot typing
      setTimeout(() => {
        // Add typing indicator
        this.messages.push({
          text: "<span class='typing-dots'><span>.</span><span>.</span><span>.</span></span>",
          sender: 'bot',
          showFeedback: false,
          isTyping: true,
        })
        this.$nextTick(this.scrollToBottom)

        // After a delay, replace typing message with real answer
        setTimeout(() => {
          // remove typing indicator (last message)
          this.messages.pop()

          const answer = this.findAnswer(question)
          this.messages.push({
            text: answer,
            sender: 'bot',
            showFeedback: true,
          })
          this.$nextTick(this.scrollToBottom)
        }, 2500) // 👈 adjust delay (ms) here
      }, 500) // short delay before typing starts
    },
    feedbackYes(index) {
      this.trackEvent('feedback_yes', this.messages[index]?.text)
      const msg = this.messages[index]
      if (!msg) return
      // replace feedback block content with thank you message and hide feedback controls
      msg.text = '<p>Hvala! Drago nam je da smo pomogli.</p>'
      msg.showFeedback = false
      this.$nextTick(this.scrollToBottom)
      setTimeout(() => {
        this.chatbotOpen = false
      }, 2000)
    },

    feedbackNo(index) {
      this.trackEvent('feedback_no', this.messages[index]?.text)
      const msg = this.messages[index]
      if (!msg) return

      msg.text =
        'Kontaktirajte nas putem e-maila na <a>pretplata@telegram.hr</a></p>'
      msg.showFeedback = false
      this.$nextTick(this.scrollToBottom)

      if (this.$mobile) {
        // On mobile: open email client
        // alert("mailto triggered!");
        window.location.href = 'mailto:pretplata@telegram.hr'
      }
    },

    hideHintOnScroll() {
      if (window.scrollY > 50) {
        this.hintHidden = true
        window.removeEventListener('scroll', this.hideHintOnScroll)
      }
    },
  },
}
</script>
