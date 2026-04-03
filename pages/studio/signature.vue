<script>
export default {
  name: 'Signature',
  data() {
    return {
      ime: '',
      titula: '',
      mobitel: '',
      email: '',
      portal: 'presshaus',
    }
  },
  computed: {
    portalImage() {
      switch (this.portal) {
        case 'presshaus':
          return '/presshaus/logo_transparent.png'
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
    selectElementContents() {
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
          <option value="presshaus">Presshaus</option>
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
            id="tablica"
            style="
              font-size: 14px;
              color: black;
              font-family: Inter, Arial, sans-serif;
              border-spacing: 0px;
            "
          >
            <template v-if="portal === 'story' || portal === 'presshaus'">
              <tr>
                <td style="vertical-align: middle">
                  <img :src="portalImage" width="200" alt="Logo" />
                </td>
              </tr>
              <tr>
                <td
                  style="
                    font-size: 14px;
                    font-weight: bold;
                    letter-spacing: 0px;
                    padding-top: 20px;
                  "
                >
                  {{ ime }}
                </td>
              </tr>
              <tr>
                <td style="letter-spacing: 1px; padding-bottom: 20px">
                  {{ titula }}
                </td>
              </tr>
            </template>
            <template v-else>
              <tr>
                <td rowspan="2" style="vertical-align: middle; padding: 0px">
                  <img
                    :src="portalImage"
                    height="37.5"
                    width="37.5"
                    alt="Telegram logo"
                  />
                </td>
                <td
                  style="
                    font-size: 14px;
                    font-weight: bold;
                    letter-spacing: 0px;
                    padding-top: 10px;
                  "
                >
                  {{ ime }}
                </td>
              </tr>
              <tr>
                <td style="font-style: italic; letter-spacing: 0px">
                  {{ titula }}
                </td>
              </tr>
            </template>
            <tr v-if="mobitel">
              <td style="letter-spacing: 0px">
                {{ mobitel }}
              </td>
            </tr>
            <tr>
              <td style="letter-spacing: 1px; text-decoration: none">
                <a
                  style="text-decoration: none; color: black"
                  :href="`mailto:${email}`"
                  >{{ email }}</a
                >
              </td>
            </tr>
            <tr>
              <td
                style="letter-spacing: 0px; text-decoration: none; color: black"
              >
                <a
                  style="text-decoration: none; color: black"
                  href="https://www.presshaus.hr"
                  >www.presshaus.hr</a
                >
              </td>
            </tr>
          </table>

          <br /><br />
          <button @click="selectElementContents">Odaberi sve</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-color: #fff !important;
}
</style>
