<template>
  <div class="main">
    <span>Odaberite poklon knjigu</span>

    <div class="books-wrapper">
      <label class="book-option">
        <input
          v-model="selectedBook"
          type="radio"
          name="book"
          value="igla-pila-ravnalo"
          class="radio-input"
          @change="handleBookSelection"
        />
        <span class="radio-mark"></span>
        <div class="book-content">
          <img
            src="@/assets/img/pretplata/igla-pila-ravnalo.png"
            alt="Igla, pila, ravnalo"
            class="book-image"
          />
          <div class="book-info">
            <p class="book-title">Igla, pila, ravnalo</p>
            <p class="book-author">Sanja Modrić</p>
          </div>
        </div>
      </label>

      <label class="book-option">
        <input
          v-model="selectedBook"
          type="radio"
          name="book"
          value="o-zagrebu"
          class="radio-input"
          @change="handleBookSelection"
        />
        <span class="radio-mark"></span>
        <div class="book-content">
          <img
            src="@/assets/img/pretplata/o-zagrebu.png"
            alt="O Zagrebu i..."
            class="book-image"
          />
          <div class="book-info">
            <p class="book-title">O Zagrebu i...</p>
            <p class="book-author">Zrinka Paladino</p>
          </div>
        </div>
      </label>
    </div>

    <div v-if="selectedBook" class="delivery-info">
      <span>Unesite podatke za primitak knjige</span>
      <div class="input-wrapper">
        <input
          :value="bookName"
          type="text"
          placeholder="Vaše ime i prezime"
          class="input-field"
          @input="handleNameInput"
        />
        <input
          :value="bookAddress"
          type="text"
          placeholder="Vaša adresa i grad"
          class="input-field"
          @input="handleAddressInput"
        />
        <input
          :value="bookPhone"
          type="tel"
          placeholder="Vaš broj telefona"
          class="input-field"
          @input="handlePhoneInput"
        />
      </div>
      <p class="delivery-note">
        Po evidentiranoj uplati, poklon knjiga bit će poslana na navedenu
        adresu.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PretplataPoklon',
  props: {
    bookSelected: {
      type: String,
      required: false,
      default: '',
    },
    bookName: {
      type: String,
      required: false,
      default: '',
    },
    bookAddress: {
      type: String,
      required: false,
      default: '',
    },
    bookPhone: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      selectedBook: this.bookSelected,
    }
  },
  watch: {
    bookSelected(newValue) {
      this.selectedBook = newValue
    },
  },
  methods: {
    handleBookSelection() {
      this.$emit('updateBookSelected', this.selectedBook)
    },
    handleNameInput(event) {
      this.$emit('updateBookName', event.target.value)
    },
    handleAddressInput(event) {
      this.$emit('updateBookAddress', event.target.value)
    },
    handlePhoneInput(event) {
      this.$emit('updateBookPhone', event.target.value)
    },
  },
}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 28px;
  padding: 28px 0px;
  border-top: 1px solid #b5b5b5;
}

.main > span {
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: #5f5f5f;
  font-weight: 500;
}

.books-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.book-option {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  position: relative;
  border-radius: 8px;
  border: 2px solid transparent;
  transition: all 0.2s ease;
}

.radio-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.radio-mark {
  appearance: none;
  -webkit-appearance: none;
  width: 24px;
  height: 24px;
  border: 1.2px solid #b5b5b5;
  border-radius: 50%;
  background-color: #fff;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
  margin-top: 2px;
}

.radio-input:checked ~ .radio-mark {
  background-color: #000;
  border-color: #000;
}

.radio-input:checked ~ .radio-mark::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  background-color: #fff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.radio-input:checked ~ .book-content {
  opacity: 1;
}

.book-content {
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.book-image {
  width: 60px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
}

.book-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.book-title {
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: #000;
  margin: 0;
}

.book-author {
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: #5f5f5f;
  margin: 0;
}

.delivery-info {
  display: flex;
  flex-direction: column;
  gap: 16px;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.delivery-info > span {
  font-family: 'Barlow', sans-serif;
  font-size: 14px;
  line-height: 22px;
  color: #5f5f5f;
  font-weight: 500;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}

.input-field {
  background-color: #ffffff;
  width: 100%;
  padding: 11px 20px;
  border: 1px solid white;
  border-radius: 6px;
  font-family: 'Barlow', sans-serif;
  font-size: 18px;
  line-height: 24px;
}

.input-field:focus {
  outline: none;
  border-color: black;
}

.delivery-note {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: #5f5f5f;
  margin: 0;
}

@media screen and (min-width: 768px) {
  .main {
    padding: 24px 0px;
  }

  .books-wrapper {
    gap: 16px;
    flex-direction: row;
  }

  .book-option {
    width: fit-content;
    padding-right: 28px;
  }

  .book-image {
    height: 60px;
    width: 40px;
  }

  .input-field {
    font-size: 16px;
    line-height: 24px;
    max-width: 352px;
  }

  .input-wrapper {
    margin: 0 auto;
    flex-direction: row;
  }

  .delivery-info > span {
    font-size: 16px;
    line-height: 24px;
  }

  .delivery-note {
    font-size: 12px;
    line-height: 16px;
  }
}
</style>
