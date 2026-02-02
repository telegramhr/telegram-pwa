<template>
  <div class="main-container flex relative fancy-rubrika trebam-hitno">
    <div class="full flex relative">
      <div class="container flex relative">
        <h2 class="full center-text">Trebam naslovnu hitno! <br />Daj mi...</h2>
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
              id="kockica"
              v-model="selected"
              :value="'kockica'"
              type="radio"
              name="overlay"
            />
            <label class="clickable animate" for="kockica">Kockica</label>
            <input
              id="autor"
              v-model="selected"
              :value="'autor'"
              type="radio"
              name="overlay"
            />
            <label class="clickable animate" for="autor">Autora</label>
            <input
              id="specijal"
              v-model="selected"
              :value="'specijal'"
              type="radio"
              name="overlay"
            />
            <label class="clickable animate" for="specijal">Specijal</label>
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
            <input
              id="kolazpola"
              v-model="selected"
              :value="'kolazpola'"
              type="radio"
              name="overlay"
            />
            <label class="clickable animate" for="kolazpola"
              >Kolaž polovina</label
            >
            <input
              id="podcast"
              v-model="selected"
              :value="'podcast'"
              type="radio"
              name="overlay"
            />
            <label class="clickable animate" for="podcast">Podcast</label>
          </div>
          <div class="third flex-responsive relative">
            <div
              v-show="
                selected != 'kolaz' &&
                selected != 'kolazpola' &&
                selected != 'podcast'
              "
              class="full center flex"
              style="margin-bottom: 1.5rem"
            >
              <h2 class="full center-text">Na ovo:</h2>
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
              <div
                v-for="(autor, key) in autori"
                :key="key"
                class="half flex relative"
              >
                <input
                  :id="key"
                  v-model="autorType"
                  :value="key"
                  type="radio"
                  name="autorType"
                />
                <label class="clickable animate" :for="key">{{
                  autor.name
                }}</label>
              </div>
            </div>
            <div
              v-show="selected === 'specijal'"
              class="full flex relative generator-submenu"
            >
              <h2 class="full center-text">Specijal je:</h2>
              <div
                v-for="(spec, key) in specijali"
                :key="'specijal-' + key"
                class="half flex relative"
              >
                <input
                  :id="'specijal-' + key"
                  v-model="specijalType"
                  :value="key"
                  type="radio"
                  name="specijalType"
                />
                <label class="clickable animate" :for="'specijal-' + key">{{
                  spec.name
                }}</label>
              </div>
            </div>
            <div
              v-show="selected === 'kockica'"
              class="full flex relative generator-submenu"
            >
              <h2 class="full center-text">Autor je:</h2>
              <div
                v-for="(autor, key) in kockiceAutori"
                :key="'kockica-' + key"
                class="half flex relative"
              >
                <input
                  :id="'kockica-' + key"
                  v-model="kockicaAutor"
                  :value="key"
                  type="radio"
                  name="kockicaAutor"
                />
                <label class="clickable animate" :for="'kockica-' + key">{{
                  autor.name
                }}</label>
              </div>
              <h2 class="full center-text column-top-pad">Pozicija:</h2>
              <div class="half flex relative">
                <input
                  id="kockica-gore-lijevo"
                  v-model="kockicaPosition"
                  :value="'gore-lijevo'"
                  type="radio"
                  name="kockicaPosition"
                />
                <label class="clickable animate" for="kockica-gore-lijevo"
                  >Gore lijevo</label
                >
              </div>
              <div class="half flex relative">
                <input
                  id="kockica-gore-desno"
                  v-model="kockicaPosition"
                  :value="'gore-desno'"
                  type="radio"
                  name="kockicaPosition"
                />
                <label class="clickable animate" for="kockica-gore-desno"
                  >Gore desno</label
                >
              </div>
              <div class="half flex relative">
                <input
                  id="kockica-dolje-lijevo"
                  v-model="kockicaPosition"
                  :value="'dolje-lijevo'"
                  type="radio"
                  name="kockicaPosition"
                />
                <label class="clickable animate" for="kockica-dolje-lijevo"
                  >Dolje lijevo</label
                >
              </div>
              <div class="half flex relative">
                <input
                  id="kockica-dolje-desno"
                  v-model="kockicaPosition"
                  :value="'dolje-desno'"
                  type="radio"
                  name="kockicaPosition"
                />
                <label class="clickable animate" for="kockica-dolje-desno"
                  >Dolje desno</label
                >
              </div>
              <h2 class="full center-text column-top-pad">Sjena:</h2>
              <div class="half flex relative">
                <input id="sjena-gore" v-model="sjenaGore" type="checkbox" />
                <label class="clickable animate" for="sjena-gore"
                  >Sjena gore</label
                >
              </div>
              <div class="half flex relative">
                <input id="sjena-dolje" v-model="sjenaDolje" type="checkbox" />
                <label class="clickable animate" for="sjena-dolje"
                  >Sjena dolje</label
                >
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
            <h2 v-show="selected == 'podcast'" class="full center-text">
              Nek piše:
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
            <div v-show="selected == 'kolazpola'" class="full flex">
              <h2 class="full center-text">Lijevo stavi:</h2>
              <div class="full center">
                <div class="full generator-file-upload clickable">
                  <div class="file-select">
                    <div class="file-select-button">Odaberi datoteku</div>
                    <div class="file-select-name">
                      Datoteka će biti dodana na kolaž
                    </div>
                    <input
                      id="chooseFilePolaLeft"
                      type="file"
                      name="chooseFilePolaLeft"
                      @change="handlePolaLeftChange"
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
                    id="kolaz-pola-left-position"
                    v-model="kolazPolaLeft"
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
                    <div class="file-select-button">Odaberi datoteku</div>
                    <div class="file-select-name">
                      Datoteka će biti dodana na kolaž
                    </div>
                    <input
                      id="chooseFilePolaRight"
                      type="file"
                      name="chooseFilePolaRight"
                      @change="handlePolaRightChange"
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
                    id="kolaz-pola-right-position"
                    v-model="kolazPolaRight"
                    type="range"
                    min="-100"
                    max="0"
                    step="1"
                  />
                </div>
                <div class="fourth right-text faded">Desno</div>
              </div>
            </div>
            <div
              v-show="
                selected === 'autor' ||
                selected === 'specijal' ||
                selected === 'kockica' ||
                selected === 'kolaz' ||
                selected === 'kolazpola'
              "
              class="full flex relative generator-submenu"
              style="margin-top: 1.5rem"
            >
              <h2 class="full center-text">Tekstura:</h2>
              <div class="half flex relative">
                <input
                  id="tekstura-none"
                  v-model="teksturaType"
                  :value="'none'"
                  type="radio"
                  name="teksturaType"
                />
                <label class="clickable animate" for="tekstura-none"
                  >Bez teksture</label
                >
              </div>
              <div class="half flex relative">
                <input
                  id="tekstura-1"
                  v-model="teksturaType"
                  :value="'tekstura_1'"
                  type="radio"
                  name="teksturaType"
                />
                <label class="clickable animate" for="tekstura-1"
                  >Tekstura 1</label
                >
              </div>
              <div class="half flex relative">
                <input
                  id="tekstura-2"
                  v-model="teksturaType"
                  :value="'tekstura_2'"
                  type="radio"
                  name="teksturaType"
                />
                <label class="clickable animate" for="tekstura-2"
                  >Tekstura 2</label
                >
              </div>
              <div class="half flex relative">
                <input
                  id="tekstura-3"
                  v-model="teksturaType"
                  :value="'tekstura_3'"
                  type="radio"
                  name="teksturaType"
                />
                <label class="clickable animate" for="tekstura-3"
                  >Tekstura 3</label
                >
              </div>
            </div>
            <div v-show="selected == 'podcast'" class="full center">
              <input v-model="podcastText" type="text" />
            </div>
          </div>
          <div
            class="third flex flex-responsive center relative"
            style="position: sticky; top: 1rem; align-self: flex-start"
          >
            <div id="preview-container" class="full">
              <canvas id="preview-canvas"></canvas>
              <button id="saveimagebutton" class="full animate clickable btn">
                Hitno!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="full flex relative" style="margin-top: 2rem">
      <div id="generator-img-render" style="width: 2664px; height: 1680px">
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
        <div
          v-if="selected === 'kolazpola'"
          id="generator-kolaz-pola"
          class="center"
        >
          <div class="half relative kolaz-half">
            <img
              id="kolaz-pola-right"
              src="@/assets/img/grey_placeholder.png"
              :style="{ left: kolazPolaRight + '%' }"
            />
          </div>
          <div class="half relative kolaz-half">
            <img
              id="kolaz-pola-left"
              src="@/assets/img/grey_placeholder.png"
              :style="{ left: kolazPolaLeft + '%' }"
            />
          </div>
          <div class="kolaz-pola-border"></div>
        </div>
        <img
          v-if="selected === 'podcast' && podcastType === 'prviglas'"
          id="prviglas-bg"
          class="generator-img-background"
          src="@/assets/img/extras/naslovne/prvi_glas_bg.png"
          width="2664"
          height="1680"
        />
        <img
          v-if="selected === 'autor'"
          id="autor-overlay"
          class="generator-img-overlay"
          :src="autori[autorType].image"
          width="2664"
          height="1680"
        />
        <img
          v-if="selected === 'specijal'"
          id="specijal-overlay"
          class="generator-img-overlay"
          :src="specijali[specijalType].image"
          width="2664"
          height="1680"
        />
        <img
          v-if="selected === 'kockica'"
          id="kockica-overlay"
          class="generator-img-overlay"
          :src="kockicaImage"
          width="2664"
          height="1680"
        />
        <img
          v-if="selected === 'kockica' && sjenaGore"
          id="sjena-gore-overlay"
          class="generator-img-shadow"
          src="@/assets/img/extras/naslovne/sjena_gore.png"
          width="2664"
          height="1680"
        />
        <img
          v-if="selected === 'kockica' && sjenaDolje"
          id="sjena-dolje-overlay"
          class="generator-img-shadow"
          src="@/assets/img/extras/naslovne/sjena_dolje.png"
          width="2664"
          height="1680"
        />
        <img
          v-if="
            teksturaType !== 'none' &&
            (selected === 'autor' ||
              selected === 'specijal' ||
              selected === 'kockica' ||
              selected === 'kolaz' ||
              selected === 'kolazpola')
          "
          id="tekstura-overlay"
          class="generator-img-tekstura"
          style="z-index: 3"
          :src="teksturaImage"
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
        <div v-if="selected === 'podcast'" id="podcast-date">
          {{ podcastText }}
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
    const tomorrow = new Date(Date.now() + 86400000)
      .toLocaleDateString('en-GB')
      .split('/')
      .map((x, i) => (i < 2 ? x : x.slice(-2)))
      .join('/')
    return {
      selected: 'autor',
      krugType: 'gorelijevo',
      autorType: 'modric',
      specijalType: 'ekskluziv_telegram',
      kockicaAutor: 'modric',
      kockicaPosition: 'gore-lijevo',
      sjenaGore: false,
      sjenaDolje: false,
      teksturaType: 'none',
      kolazMidThird: 'null',
      kolazLeftThird: -50,
      kolazRightThird: -50,
      kolazMidThirdPosition: 'xMidYMid slice',
      kolazPolaLeft: -50,
      kolazPolaRight: -50,
      podcastType: 'prviglas',
      podcastText: tomorrow,
      autori: {
        modric: {
          name: 'Modrić',
          image: require('~/assets/img/extras/naslovne/tg_dajmi_overlay_modric.png'),
        },
        silvana: {
          name: 'Menđušić',
          image: require('~/assets/img/extras/naslovne/tg_dajmi_overlay_mendusic.png'),
        },
        redzepovic: {
          name: 'Redžepović',
          image: require('~/assets/img/extras/naslovne/tg_dajmi_overlay_redzepovic.png'),
        },
        divo: {
          name: 'Đurović',
          image: require('~/assets/img/extras/naslovne/tg_dajmi_overlay_divo.png'),
        },
        jasmin: {
          name: 'Klarić',
          image: require('~/assets/img/extras/naslovne/tg_dajmi_overlay_klaric.png'),
        },
        jakovina: {
          name: 'Jakovina',
          image: require('~/assets/img/extras/naslovne/tg_dajmi_overlay_jakovina.png'),
        },
        markovina: {
          name: 'Markovina',
          image: require('~/assets/img/extras/naslovne/tg_dajmi_overlay_markovina.png'),
        },
        snajder: {
          name: 'Šnajder',
          image: require('~/assets/img/extras/naslovne/tg_dajmi_overlay_snajder.png'),
        },
        hedl: {
          name: 'Hedl',
          image: require('~/assets/img/extras/naslovne/tg_dajmi_overlay_hedl.png'),
        },
        frlan: {
          name: 'Frlan Gašparović',
          image: require('~/assets/img/extras/naslovne/tg_dajmi_overlay_frlan.png'),
        },
      },
      kockiceAutori: {
        butkovic: { name: 'Butković' },
        divo: { name: 'Đurović' },
        fizulic: { name: 'Fižulić' },
        frlan: { name: 'Frlan Gašparović' },
        jakovina: { name: 'Jakovina' },
        klaric: { name: 'Klarić' },
        krsul: { name: 'Kršul' },
        mahmutovic: { name: 'Mahmutović' },
        maric: { name: 'Marić' },
        markovina: { name: 'Markovina' },
        mendusic: { name: 'Menđušić' },
        modric: { name: 'Modrić' },
        plese: { name: 'Pleše' },
        redzepovic: { name: 'Redžepović' },
        violic: { name: 'Violić' },
      },
      specijali: {
        ekskluziv_telegram: {
          name: 'Ekskluziv Telegram',
          image: require('~/assets/img/extras/naslovne/specijali/ekskluziv_telegram.png'),
        },
        ekskluziv_hedl: {
          name: 'Ekskluziv Hedl',
          image: require('~/assets/img/extras/naslovne/specijali/ekskluziv_hedl.png'),
        },
        intervju_telegram: {
          name: 'Intervju Telegram',
          image: require('~/assets/img/extras/naslovne/specijali/intervju_telegram.png'),
        },
        istraga_hedl: {
          name: 'Istraga Hedl',
          image: require('~/assets/img/extras/naslovne/specijali/istraga_hedl.png'),
        },
        logo_telegram: {
          name: 'Logo Telegram',
          image: require('~/assets/img/extras/naslovne/specijali/logo_telegram.png'),
        },
      },
    }
  },
  watch: {
    selected() {
      this.$nextTick(() => setTimeout(() => this.updatePreview(), 100))
    },
    krugType() {
      this.$nextTick(() => setTimeout(() => this.updatePreview(), 100))
    },
    autorType() {
      this.$nextTick(() => setTimeout(() => this.updatePreview(), 100))
    },
    specijalType() {
      this.$nextTick(() => setTimeout(() => this.updatePreview(), 100))
    },
    kockicaAutor() {
      this.$nextTick(() => setTimeout(() => this.updatePreview(), 100))
    },
    kockicaPosition() {
      this.$nextTick(() => setTimeout(() => this.updatePreview(), 100))
    },
    sjenaGore() {
      this.$nextTick(() => setTimeout(() => this.updatePreview(), 100))
    },
    sjenaDolje() {
      this.$nextTick(() => setTimeout(() => this.updatePreview(), 100))
    },
    teksturaType() {
      this.$nextTick(() => setTimeout(() => this.updatePreview(), 100))
    },
    kolazMidThird() {
      this.$nextTick(() => setTimeout(() => this.updatePreview(), 100))
    },
    kolazLeftThird() {
      this.$nextTick(() => setTimeout(() => this.updatePreview(), 100))
    },
    kolazRightThird() {
      this.$nextTick(() => setTimeout(() => this.updatePreview(), 100))
    },
    kolazMidThirdPosition() {
      this.$nextTick(() => setTimeout(() => this.updatePreview(), 100))
    },
    kolazPolaLeft() {
      this.$nextTick(() => setTimeout(() => this.updatePreview(), 100))
    },
    kolazPolaRight() {
      this.$nextTick(() => setTimeout(() => this.updatePreview(), 100))
    },
    podcastText() {
      this.$nextTick(() => setTimeout(() => this.updatePreview(), 100))
    },
  },
  computed: {
    kockicaImage() {
      const autor = this.kockicaAutor
      const position = this.kockicaPosition
      return require(`~/assets/img/extras/naslovne/kockice/${autor}/${autor}_${position}.png`)
    },
    teksturaImage() {
      if (this.teksturaType === 'none') return null
      return require(`~/assets/img/extras/naslovne/teksture/${this.teksturaType}.png`)
    },
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

    const self = this

    // Update export canvas at full resolution
    function updateCanvas() {
      html2canvas(document.querySelector('#generator-img-render'), {
        scale: 1,
        width: 2664,
        height: 1680,
        windowWidth: 2664,
        windowHeight: 1680,
      }).then(function (canvas) {
        imgData = canvas.toDataURL('image/jpeg', 0.7)
      })
    }

    // Initial preview update - wait for images to load
    setTimeout(() => self.updatePreview(), 1000)
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
        setTimeout(() => self.updatePreview(), 100)
      }
      if (file) {
        reader.readAsDataURL(file)
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
        setTimeout(() => self.updatePreview(), 100)
      }
      if (file) {
        reader.readAsDataURL(file)
      }
    }
  },
  methods: {
    updatePreview() {
      const source = document.querySelector('#generator-img-render')
      const previewCanvas = document.querySelector('#preview-canvas')
      // Use fixed source dimensions (2664x1680) since element is off-screen
      const sourceWidth = 2664
      const previewWidth = 400
      const scale = previewWidth / sourceWidth
      html2canvas(source, {
        scale,
        width: sourceWidth,
        height: 1680,
        windowWidth: sourceWidth,
        windowHeight: 1680,
      }).then(function (canvas) {
        previewCanvas.width = canvas.width
        previewCanvas.height = canvas.height
        const ctx = previewCanvas.getContext('2d')
        ctx.drawImage(canvas, 0, 0)
      })
    },
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
        setTimeout(() => this.updatePreview(), 100)
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
        setTimeout(() => this.updatePreview(), 100)
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
        setTimeout(() => this.updatePreview(), 100)
      }

      reader.readAsDataURL(file)
    },
    handlePolaLeftChange(event) {
      const file = event.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = () => {
          document.getElementById('kolaz-pola-left').src = reader.result
          setTimeout(() => this.updatePreview(), 100)
        }
        reader.readAsDataURL(file)
      }
    },
    handlePolaRightChange(event) {
      const file = event.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = () => {
          document.getElementById('kolaz-pola-right').src = reader.result
          setTimeout(() => this.updatePreview(), 100)
        }
        reader.readAsDataURL(file)
      }
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

<style scoped>
#preview-container {
  width: 100%;
}
#preview-canvas {
  width: 100%;
  max-width: 400px;
  height: auto;
  border: 1px solid #ccc;
  background: #f5f5f5;
  margin-bottom: 1rem;
}
</style>

<style>
/* Override overflow to allow sticky positioning */
.trebam-hitno.main-container {
  overflow-x: visible;
  overflow: visible;
}
</style>
