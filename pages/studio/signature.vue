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
    portalLink() {
      switch (this.portal) {
        case 'telegram':
          return 'https://www.telegram.hr'
        case 'super1':
          return 'https://www.super1.hr'
        case 'telesport':
          return 'https://www.telesport.hr'
        default:
          return 'https://www.telegram.hr'
      }
    },
    portalImage() {
      switch (this.portal) {
        case 'telegram':
          return '/icon.png'
        case 'super1':
          return '/s1_fav/apple-touch-icon.png'
        case 'telesport':
          return '/icon.png'
        default:
          return '/icon.png'
      }
    },
    portalTitle() {
      switch (this.portal) {
        case 'telegram':
          return 'www.telegram.hr'
        case 'super1':
          return 'www.super1.hr'
        case 'telesport':
          return 'www.telesport.hr'
        default:
          return 'www.telegram.hr'
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
          <option value="telegram">Telegram</option>
          <option value="super1">Super1</option>
          <!--<option value="telesport">Telesport</option>-->
        </select>
      </div>

      <hr />
      <div class="flex full">
        <div class="third">
          <table
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
            <tr></tr>
            <tr>
              <td style="font-weight: bold"><br />A</td>
              <td style="letter-spacing: 1px">
                <br />Frane Petračića 4 | Zagreb
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
                <a href="mailto:{{ email }}">{{ email }}</a>
              </td>
            </tr>
            <tr>
              <td style="font-weight: bold">W</td>
              <td style="color: #ee1d3a; letter-spacing: 1px">
                <a :href="portalLink" target="_blank">{{ portalTitle }}</a>
              </td>
            </tr>
          </table>
          <br /><br />
          <button @click="selectElementContents">Odaberi sve</button>
        </div>
        <div class="two-thirds">
          <!--<pre>
&lt;table id="tablica" style="font-size: 11px; color:#585858; font-family: Arial, sans-serif;"&gt;
	&lt;tr&gt;&lt;td colspan="2" style=" font-size: 15px; font-weight: bold;"&gt;{{
              ime
            }};&lt;/td&gt;&lt;/tr&gt;
	&lt;tr&gt;&lt;td colspan="2" style="color:#7e7d7d; font-style: italic; letter-spacing:1px;"&gt;{{
              titula
            }}>&lt;/td&gt;&lt;/tr&gt;
	&lt;tr&gt;&lt;td colspan="2"&gt;&lt;br&gt;&lt;img src="https://apps.adriaticmedia.hr/apps/apps/signature/tmg_logo.png" height="37.5" width="148" align="left"/&gt;&lt;br&gt;&lt;/td&gt;&lt;/tr&gt;
	&lt;tr&gt;&lt;td style="font-weight: bold;"&gt;&lt;br&gt;A&lt;/td&gt;&lt;td style="letter-spacing: 1px;"&gt;&lt;br&gt;Frane Petračića 4 | Zagreb&lt;/td&gt;&lt;/tr&gt;
	&lt;tr&gt;&lt;td style="font-weight: bold;"&gt;M&lt;/td&gt;&lt;td style="letter-spacing: 1px;"&gt;{{
              mobitel
            }}&lt;/td&gt;&lt;/tr&gt;
	&lt;tr&gt;&lt;td style="font-weight: bold;"&gt;E&lt;/td&gt;&lt;td style="color:#ee1d3a; letter-spacing: 1px;"&gt;{{
              email
            }}&lt;/td&gt;&lt;/tr&gt;
	&lt;tr&gt;&lt;td style="font-weight: bold;"&gt;W&lt;/td&gt;&lt;td style="color:#ee1d3a; letter-spacing: 1px;"&gt;&lt;a href="http://www.telegram.hr" target="_blank"&gt;www.telegram.hr&lt;/a&gt;&lt;/td&gt;&lt;/tr&gt;
&lt;/table&gt;
</pre
          >-->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
