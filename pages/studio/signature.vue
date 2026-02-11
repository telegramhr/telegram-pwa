<script>
export default {
  name: 'Signature',
  data() {
    return {
      ime: '',
      titula: '',
      mobitel: '',
      email: '',
      portal: 'telegram',
    }
  },
  computed: {
    portalImage() {
      switch (this.portal) {
        case 'telegram':
          return '/icon.png'
        case 'super1':
          return '/s1_fav/apple-touch-icon.png'
        case 'telesport':
          return '/icon.png'
        case 'story':
          return '/img/story.png'
        default:
          return '/icon.png'
      }
    },
  },
  methods: {
    async selectElementContents() {
      const el = document.getElementById('tablica')
      const body = document.body
      let range
      let sel
      if (document.createRange && window.getSelection) {
        range = document.createRange()
        sel = window.getSelection()
        sel.removeAllRanges()
        try {
          range.selectNodeContents(el)
          sel.addRange(range)
        } catch (e) {
          range.selectNode(el)
          sel.addRange(range)
        }
      } else if (body.createTextRange) {
        range = body.createTextRange()
        range.moveToElementText(el)
        range.select()
      }
      await navigator.clipboard.writeText(range)
      alert('Prekopirano, slobodno zalijepite u postavkama')
    },
  },
}
</script>

<template>
  <div class="main-container flex relative donation-form">
    <div class="container flex relative">
      <h2 class="full center-text">TMG generator potpisa</h2>
      <div class="full">
        <p>Unesite svoje podatke kako bi Vam se generirao potpis.</p>
        <p>
          Za implementaciju potpisa, kliknite na gumb 'Odaberi sve' te desnim
          klikom kopirajte označen potpis.<br />
          Otvorite svoj službeni Gmail račun, te u postavkama potpisa zalijepite
          prethodno kopirani sadržaj.
        </p>
      </div>

      <h2 class="full center-text">Popunite svoje podatke</h2>
      <div class="flex full">
        <label for="ime">Ime i prezime</label>
        <input id="ime" v-model="ime" type="text" name="ime" />

        <label for="titula">Radna titula</label>
        <input id="titula" v-model="titula" type="text" name="titula" />

        <label for="mobitel">Mobitel</label>
        <input id="mobitel" v-model="mobitel" type="text" name="mobitel" />

        <label for="email">Email</label>
        <input id="email" v-model="email" type="text" name="email" />

        <label for="portal">Portal</label>
        <select id="portal" v-model="portal" name="portal">
          <option value="telegram">Telegram</option>
          <option value="super1">Super1</option>
          <option value="story">Story</option>
          <!--<option value="telesport">Telesport</option>-->
        </select>
      </div>

      <hr />
      <div class="flex full">
        <div class="third">
          <table
            v-if="portal === 'story'"
            id="tablica"
            style="
              font-size: 11px;
              color: #585858;
              font-family: Arial, sans-serif;
            "
          >
            <tr>
              <td style="vertical-align: middle">
                <img :src="portalImage" width="100" alt="Telegram logo" />
              </td>
            </tr>
            <tr>
              <td style="font-size: 15px; font-weight: bold">
                {{ ime }}
              </td>
            </tr>
            <tr>
              <td
                style="color: #7e7d7d; font-style: italic; letter-spacing: 1px"
              >
                {{ titula }}
              </td>
            </tr>
          </table>
          <table
            v-else
            id="tablica"
            style="
              font-size: 11px;
              color: #585858;
              font-family: Arial, sans-serif;
            "
          >
            <tr>
              <td rowspan="2" style="vertical-align: middle; padding: 5px">
                <img
                  :src="portalImage"
                  height="37.5"
                  width="37.5"
                  alt="Telegram logo"
                />
              </td>
              <td style="font-size: 15px; font-weight: bold">
                {{ ime }}
              </td>
            </tr>
            <tr>
              <td
                style="color: #7e7d7d; font-style: italic; letter-spacing: 1px"
              >
                {{ titula }}
              </td>
            </tr>
          </table>

          <table
            id="tablica"
            style="
              font-size: 11px;
              color: #585858;
              font-family: Arial, sans-serif;
            "
          >
            <tr>
              <td style="font-weight: bold"><br />A</td>
              <td style="letter-spacing: 1px">
                <br />Telegram Media Grupa <br />Franje Petračića 4, Zagreb
              </td>
            </tr>
            <tr v-if="mobitel">
              <td style="font-weight: bold">M</td>
              <td style="letter-spacing: 1px">
                {{ mobitel }}
              </td>
            </tr>
            <tr>
              <td style="font-weight: bold">E</td>
              <td style="color: #ee1d3a; letter-spacing: 1px">
                <a :href="`mailto:${email}`">{{ email }}</a>
              </td>
            </tr>
          </table>
          <br /><br />
          <button @click="selectElementContents">Kopiraj</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
