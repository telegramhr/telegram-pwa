<template>
  <div class="main-container flex relative fancy-rubrika trebam-hitno">
    <div class="full flex relative">
      <div class="container flex relative">
        <h1 class="full center-text">Trebam naslovnu hitno! <br />Daj mi...</h1>
        <div class="full flex relative">
          <div class="third flex-responsive flex relative">
            <input
              id="empty"
              v-model="selected"
              :value="'empty'"
              type="radio"
              name="overlay"
            />
            <label class="clickable animate" for="empty">Sredi veličinu</label>
            <input
              id="autor"
              v-model="selected"
              :value="'autor'"
              type="radio"
              name="overlay"
            />
            <label class="clickable animate" for="autor">Autora</label>
            <input
              id="krug"
              v-model="selected"
              :value="'krug'"
              type="radio"
              name="overlay"
              checked
            />
            <label class="clickable animate" for="krug">Krug</label>
            <input
              id="kolaz"
              v-model="selected"
              :value="'kolaz'"
              type="radio"
              name="overlay"
            />
            <label class="clickable animate" for="kolaz">Kolaž trećina</label>
          </div>
          <div class="third flex-responsive relative">
            <div
              v-if="selected === 'krug'"
              class="full flex relative generator-submenu"
            >
              <h2 class="full center-text">Krug nek bude:</h2>
              <div class="half flex relative">
                <input
                  id="gorelijevo"
                  v-model="krugType"
                  :value="'gorelijevo'"
                  type="radio"
                  name="krugType"
                />
                <label class="clickable animate" for="gorelijevo"
                  >Gore lijevo</label
                >
              </div>
              <div class="half flex relative">
                <input
                  id="goredesno"
                  v-model="krugType"
                  :value="'goredesno'"
                  type="radio"
                  name="krugType"
                />
                <label class="clickable animate" for="goredesno"
                  >Gore desno</label
                >
              </div>
              <div class="half flex relative">
                <input
                  id="doljelijevo"
                  v-model="krugType"
                  :value="'doljelijevo'"
                  type="radio"
                  name="krugType"
                />
                <label class="clickable animate" for="doljelijevo"
                  >Dolje lijevo</label
                >
              </div>
              <div class="half flex relative">
                <input
                  id="doljedesno"
                  v-model="krugType"
                  :value="'doljedesno'"
                  type="radio"
                  name="krugType"
                />
                <label class="clickable animate" for="doljedesno"
                  >Dolje desno</label
                >
              </div>
            </div>
            <div
              v-show="selected === 'autor'"
              class="full flex relative generator-submenu"
            >
              <h2 class="full center-text">Autor je:</h2>
              <div class="half flex relative">
                <input
                  id="modric"
                  v-model="autorType"
                  :value="'modric'"
                  type="radio"
                  name="autorType"
                />
                <label class="clickable animate" for="modric">Modrić</label>
              </div>
              <div class="half flex relative">
                <input
                  id="silvana"
                  v-model="autorType"
                  :value="'silvana'"
                  type="radio"
                  name="autorType"
                />
                <label class="clickable animate" for="silvana">Menđušić</label>
              </div>
              <div class="half flex relative">
                <input
                  id="divo"
                  v-model="autorType"
                  :value="'divo'"
                  type="radio"
                  name="autorType"
                />
                <label class="clickable animate" for="divo">Đurović</label>
              </div>
              <div class="half flex relative">
                <input
                  id="redzepovic"
                  v-model="autorType"
                  :value="'redzepovic'"
                  type="radio"
                  name="autorType"
                />
                <label class="clickable animate" for="redzepovic"
                  >Redžepović</label
                >
              </div>
              <div class="half flex relative">
                <input
                  id="jasmin"
                  v-model="autorType"
                  :value="'jasmin'"
                  type="radio"
                  name="autorType"
                />
                <label class="clickable animate" for="jasmin">Klarić</label>
              </div>
              <div class="half flex relative">
                <input
                  id="jakovina"
                  v-model="autorType"
                  :value="'jakovina'"
                  type="radio"
                  name="autorType"
                />
                <label class="clickable animate" for="jakovina">Jakovina</label>
              </div>
              <div class="half flex relative">
                <input
                  id="hrdalo"
                  v-model="autorType"
                  :value="'hrdalo'"
                  type="radio"
                  name="autorType"
                />
                <label class="clickable animate" for="hrdalo">Hrdalo</label>
              </div>
            </div>
            <div v-show="selected === 'krug'" class="full flex relative">
              <h2 class="full center-text">U krug stavi:</h2>
              <div class="full center">
                <div class="full generator-file-upload clickable">
                  <div class="file-select">
                    <div class="file-select-button">Odaberi datoteku</div>
                    <div class="file-select-name">
                      Datoteka će biti dodana u krug
                    </div>
                    <input id="chooseFile2" type="file" name="chooseFile2" />
                  </div>
                </div>
              </div>
              <div class="full flex small-top-margin"></div>
            </div>
            <h2 v-show="selected === 'empty'" class="full center-text">
              Ove fotke:
            </h2>
            <h2
              v-show="selected != 'empty' && selected != 'kolaz'"
              class="full center-text"
            >
              Na ovo:
            </h2>
            <div v-show="selected == 'kolaz'" class="full flex">
              <h2 class="full center-text">U sredinu stavi:</h2>
              <div class="full center">
                <div class="full generator-file-upload clickable">
                  <div class="file-select">
                    <div id="fileName" class="file-select-button">
                      Odaberi datoteku
                    </div>
                    <div id="noFile" class="file-select-name">
                      Datoteka će biti dodana na kolaž
                    </div>
                    <input
                      id="chooseFile3"
                      type="file"
                      name="chooseFile3"
                      @change="handleMidChange"
                    />
                  </div>
                </div>
              </div>
              <p class="full center-text column-mini-top-pad">
                Koji dio slike da se vidi?
              </p>
              <div class="full center trebam-hitno-smaller-thirds">
                <div class="third flex">
                  <input
                    id="lijevo"
                    v-model="kolazMidThirdPosition"
                    :value="'xMinYMid slice'"
                    type="radio"
                    name="kolazMidThirdPosition"
                  />
                  <label class="clickable animate" for="lijevo">Lijevi</label>
                </div>
                <div class="third flex">
                  <input
                    id="sredina"
                    v-model="kolazMidThirdPosition"
                    :value="'xMidYMid slice'"
                    type="radio"
                    name="kolazMidThirdPosition"
                  />
                  <label class="clickable animate" for="sredina">Sredina</label>
                </div>
                <div class="third flex">
                  <input
                    id="desno"
                    v-model="kolazMidThirdPosition"
                    :value="'xMaxYMid slice'"
                    type="radio"
                    name="kolazMidThirdPosition"
                  />
                  <label class="clickable animate" for="desno">Desni</label>
                </div>
              </div>
              <h2 class="full center-text">Lijevo stavi:</h2>
              <div class="full center">
                <div class="full generator-file-upload clickable">
                  <div class="file-select">
                    <div id="fileName" class="file-select-button">
                      Odaberi datoteku
                    </div>
                    <div id="noFile" class="file-select-name">
                      Datoteka će biti dodana na kolaž
                    </div>
                    <input
                      id="chooseFile4"
                      type="file"
                      name="chooseFile4"
                      @change="handleLeftChange"
                    />
                  </div>
                </div>
              </div>
              <p class="full center-text column-mini-vertical-pad">
                Pomakni je malo:
              </p>
              <div class="full flex relative">
                <div class="fourth faded">Lijevo</div>
                <div class="half center">
                  <input
                    id="kolaz-left-third-position"
                    v-model="kolazLeftThird"
                    type="range"
                    min="-100"
                    max="0"
                    step="1"
                  />
                </div>
                <div class="fourth right-text faded">Desno</div>
              </div>
              <h2 class="full center-text column-top-pad">Desno stavi:</h2>
              <div class="full center">
                <div class="full generator-file-upload clickable">
                  <div class="file-select">
                    <div id="fileName" class="file-select-button">
                      Odaberi datoteku
                    </div>
                    <div id="noFile" class="file-select-name">
                      Datoteka će biti dodana na kolaž
                    </div>
                    <input
                      id="chooseFile5"
                      type="file"
                      name="chooseFile5"
                      @change="handleRightChange"
                    />
                  </div>
                </div>
              </div>
              <p class="full center-text column-mini-vertical-pad">
                Pomakni je malo:
              </p>
              <div class="full flex relative">
                <div class="fourth faded">Lijevo</div>
                <div class="half center">
                  <input
                    id="kolaz-right-third-position"
                    v-model="kolazRightThird"
                    type="range"
                    min="-100"
                    max="0"
                    step="1"
                  />
                </div>
                <div class="fourth right-text faded">Desno</div>
              </div>
            </div>
            <div v-show="selected != 'kolaz'" class="full center">
              <div class="full generator-file-upload clickable">
                <div class="file-select">
                  <div id="fileName" class="file-select-button">
                    Odaberi datoteku
                  </div>
                  <div id="noFile" class="file-select-name">
                    Datoteka će biti dodana kao pozadina
                  </div>
                  <input id="chooseFile" type="file" name="chooseFile" />
                </div>
              </div>
            </div>
          </div>
          <div class="third flex-responsive center relative">
            <button id="saveimagebutton" class="full animate clickable btn">
              Hitno!
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="full flex relative">
      <div id="generator-img-render">
        <div id="generator-img-deliver" />
        <div v-if="selected === 'kolaz'" id="generator-kolaz" class="center">
          <div class="half relative kolaz-third">
            <img
              id="kolaz-right-third"
              src="@/assets/img/grey_placeholder.png"
              :style="{ left: kolazRightThird + '%' }"
            />
          </div>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 150"
            xmlns="http://www.w3.org/2000/svg"
            class="kolaz-middle"
          >
            <defs>
              <clipPath id="trapezoid">
                <polygon points="15,0 85,0 100,150 0,150" />
              </clipPath>
            </defs>
            <image
              id="kolaz-mid-third"
              :preserveAspectRatio="kolazMidThirdPosition"
              :xlink:href="kolazMidThird"
              width="100"
              height="150"
              clip-path="url(#trapezoid)"
            />
          </svg>
          <div class="half relative kolaz-third">
            <img
              id="kolaz-left-third"
              src="@/assets/img/grey_placeholder.png"
              :style="{ left: kolazLeftThird + '%' }"
            />
          </div>
          <div class="kolaz-border-1"></div>
          <div class="kolaz-border-2"></div>
        </div>
        <img
          v-if="selected === 'autor' && autorType === 'modric'"
          id="modric-overlay"
          class="generator-img-overlay"
          src="@/assets/img/extras/naslovne/tg_dajmi_overlay_modric.png"
          width="2664"
          height="1680"
        />
        <img
          v-if="selected === 'autor' && autorType === 'silvana'"
          id="silvana-overlay"
          class="generator-img-overlay"
          src="@/assets/img/extras/naslovne/tg_dajmi_overlay_mendusic.png"
          width="2664"
          height="1680"
        />
        <img
          v-if="selected === 'autor' && autorType === 'redzepovic'"
          id="redzepovic-overlay"
          class="generator-img-overlay"
          src="@/assets/img/extras/naslovne/tg_dajmi_overlay_redzepovic.png"
          width="2664"
          height="1680"
        />
        <img
          v-if="selected === 'autor' && autorType === 'divo'"
          id="divo-overlay"
          class="generator-img-overlay"
          src="@/assets/img/extras/naslovne/tg_dajmi_overlay_divo.png"
          width="2664"
          height="1680"
        />
        <img
          v-if="selected === 'autor' && autorType === 'jasmin'"
          id="jasmin-overlay"
          class="generator-img-overlay"
          src="@/assets/img/extras/naslovne/tg_dajmi_overlay_klaric.png"
          width="2664"
          height="1680"
        />
        <img
          v-if="selected === 'autor' && autorType === 'jakovina'"
          id="jakovina-overlay"
          class="generator-img-overlay"
          src="@/assets/img/extras/naslovne/tg_dajmi_overlay_jakovina.png"
          width="2664"
          height="1680"
        />
        <img
          v-if="selected === 'autor' && autorType === 'hrdalo'"
          id="hrdalo-overlay"
          class="generator-img-overlay"
          src="@/assets/img/extras/naslovne/tg_dajmi_overlay_hrdalo.png"
          width="2664"
          height="1680"
        />
        <div v-if="selected === 'krug'" id="generator-krug" :class="krugType">
          <div class="krug-bg"></div>
          <img
            id="generator-krug-target"
            src="@/assets/img/grey_placeholder.png"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'
export default {
  name: 'TelegramKlub',
  data() {
    return {
      selected: 'autor',
      krugType: 'gorelijevo',
      autorType: 'modric',
      kolazMidThird: 'null',
      kolazLeftThird: -50,
      kolazRightThird: -50,
      kolazMidThirdPosition: 'xMidYMid slice',
    }
  },
  mounted() {
    let imgData
    const saveimagebutton = document.querySelector('#saveimagebutton')
    let counter = 1
    let filename = 'tg_naslovna.jpg'
    function updateDate(date) {
      const yyyy = date.getFullYear().toString()
      const mm = (date.getMonth() + 1).toString()
      const dd = date.getDate().toString()
      const mmChars = mm.split('')
      const ddChars = dd.split('')
      const convertedDate =
        yyyy +
        '_' +
        (mmChars[1] ? mm : '0' + mmChars[0]) +
        '_' +
        (ddChars[1] ? dd : '0' + ddChars[0]) +
        '_' +
        counter
      counter++
      filename = 'tg_naslovna_' + convertedDate + '.jpg'
    }
    function getRandomInt(max) {
      return Math.floor(Math.random() * max)
    }
    function updateCanvas() {
      html2canvas(document.querySelector('#generator-img-render'), {
        scale: 1,
      }).then(function (canvas) {
        imgData = canvas.toDataURL('image/jpeg', 0.7)
      })
    }
    document.querySelector('#saveimagebutton').addEventListener(
      'click',
      function () {
        updateCanvas()
        updateDate(new Date())

        saveimagebutton.textContent = '...'
        setTimeout(() => {
          const a = document.createElement('a')
          a.href = imgData
          a.download = filename
          a.click()
          switch (getRandomInt(4)) {
            case 0:
              saveimagebutton.textContent = 'Hitno!'
              break
            case 1:
              saveimagebutton.textContent = 'Odmah!'
              break
            case 2:
              saveimagebutton.textContent = 'Brzo!'
              break
            case 3:
              saveimagebutton.textContent = 'Što prije!'
              break
            default:
              saveimagebutton.textContent = 'Hitno!'
              break
          }
        }, 2000)
      },
      false
    )
    document
      .getElementById('chooseFile')
      .addEventListener('change', readURL, true)
    function readURL() {
      const file = document.getElementById('chooseFile').files[0]
      const reader = new FileReader()
      reader.onloadend = function () {
        document.getElementById('generator-img-deliver').style.backgroundImage =
          "url('" + reader.result + "')"
      }
      if (file) {
        reader.readAsDataURL(file)
      } else {
      }
    }
    document
      .getElementById('chooseFile2')
      .addEventListener('change', readURL2, true)
    function readURL2() {
      const file = document.getElementById('chooseFile2').files[0]
      const reader = new FileReader()
      reader.onloadend = function () {
        document.getElementById('generator-krug-target').src = reader.result
      }
      if (file) {
        reader.readAsDataURL(file)
      } else {
      }
    }
  },
  methods: {
    handleMidChange(event) {
      const file = event.target.files[0]

      if (file) {
        // Convert the selected image to base64
        this.convertMidToBase64(file)
      }
    },
    convertMidToBase64(file) {
      const reader = new FileReader()

      reader.onload = () => {
        // Set the base64-encoded image data to the data property
        this.kolazMidThird = reader.result
      }

      reader.readAsDataURL(file)
    },
    handleLeftChange(event) {
      const file = event.target.files[0]

      if (file) {
        // Convert the selected image to base64
        this.convertLeftToBase64(file)
      }
    },
    convertLeftToBase64(file) {
      const reader = new FileReader()

      reader.onload = () => {
        // Set the base64-encoded image data to the data property
        document.getElementById('kolaz-left-third').src = reader.result
      }

      reader.readAsDataURL(file)
    },
    handleRightChange(event) {
      const file = event.target.files[0]

      if (file) {
        // Convert the selected image to base64
        this.convertRightToBase64(file)
      }
    },
    convertRightToBase64(file) {
      const reader = new FileReader()

      reader.onload = () => {
        // Set the base64-encoded image data to the data property
        document.getElementById('kolaz-right-third').src = reader.result
      }

      reader.readAsDataURL(file)
    },
  },
  head() {
    const link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.telegram.hr/studio/naslovne/',
      },
    ]
    return {
      title: 'Telegram Studio - alat za naslovne',
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'cXenseParse:image',
          name: 'cXenseParse:image',
          content: require('~/assets/img/extras/naslovne/trebam_hitno_preview.jpg'),
        },
        {
          hid: 'cXenseParse:title',
          name: 'cXenseParse:title',
          content: 'Telegram Studio - alat za naslovne',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Trebam naslovnu hitno! Daj mi ___ na ___ što prije.',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Trebam naslovnu hitno! Daj mi ___ na ___ što prije.',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Telegram Studio - alat za naslovne',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: require('~/assets/img/extras/naslovne/trebam_hitno_preview.jpg'),
        },
        {
          hid: 'og:image:width',
          property: 'og:image:width',
          content: '2664',
        },
        {
          hid: 'og:image:height',
          property: 'og:image:height',
          content: '1680',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/studio/naslovne/',
        },
        {
          hid: 'fb:app_id',
          property: 'fb:app_id',
          content: '1383786971938581',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: '@TelegramHR',
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'index, follow',
        },
      ],
      link,
    }
  },
}
</script>
