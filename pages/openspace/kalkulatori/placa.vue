<template>
  <div class="main-container flex fancy-rubrika openspace">
    <div class="full flex">
      <client-only>
        <theader
          headline="Kalkulator plaće - preračunajte neto u bruto i obrnuto"
        ></theader>
      </client-only>
    </div>
    <app-link to="/openspace" class="full flex relative mini-os-header">
      <h1
        class="full section-title mobile-side-pad center-text column-full-pad os-section-title hide"
      >
        openspace
      </h1>
      <div class="full center">
        <img
          src="@/assets/img/openspace_logo_normal.svg"
          class="os-header-logo light-mode-only"
          alt="openspace logo"
        />
        <img
          src="@/assets/img/openspace_logo_normal.svg"
          class="os-header-logo contrast-mode-only"
          alt="openspace logo"
        />
        <img
          src="@/assets/img/openspace_logo_negative.svg"
          class="os-header-logo dark-mode-only"
          alt="openspace logo"
        />
      </div>
    </app-link>
    <div class="full flex os-special-page">
      <div
        class="container relative mobile-side-pad flex article-width-container"
      >
        <h1 class="full center-text">Kalkulator plaće</h1>
        <h4 class="full center-text">
          Uz Telegramov kalkulator plaće brzo preračunajte neto u bruto ili
          obrnuto, naučite više o faktorima koji utječu na oporezivanje plaće,
          te saznajte koje doprinose plaćate koliko.
        </h4>
        <form class="full flex relative os-calculator" @submit.prevent="submit">
          <div
            class="full column-full-pad flex-responsive flex os-calculator-section"
          >
            <label class="full os-calculator-title" for="iznos">Iznos</label>
            <input
              id="iznos"
              v-model="iznos"
              class="full"
              type="number"
              required
            />
            <p class="full os-calculator-description">
              Iznos plaće u kunama koji će biti osnova za sve izračune.
            </p>
          </div>
          <div
            class="full column-full-pad flex-responsive flex os-calculator-section"
          >
            <label class="full os-calculator-title">Vrsta izračuna</label>
            <div class="full flex os-calculator-radio">
              <div class="half flex">
                <input
                  id="neto-u-bruto"
                  v-model="smjerKonverzije"
                  value="neto-u-bruto"
                  name="smjerKonverzije"
                  type="radio"
                  class="hide"
                />
                <label for="neto-u-bruto" class="full center animate"
                  >Neto
                  <font-awesome-icon icon="fa-light fa-arrow-right" />
                  Bruto</label
                >
              </div>
              <div class="half flex">
                <input
                  id="bruto-u-neto"
                  v-model="smjerKonverzije"
                  value="bruto-u-neto"
                  name="smjerKonverzije"
                  type="radio"
                  class="hide"
                />
                <label for="bruto-u-neto" class="full center animate"
                  >Bruto
                  <font-awesome-icon icon="fa-light fa-arrow-right" />
                  Neto</label
                >
              </div>
            </div>
            <p class="full os-calculator-description">
              Neto plaća je iznos koji zaposleniku sjeda na račun. Bruto plaća
              je iznos koji poslodavac mora izdvojiti za plaću zaposlenika. U
              ugovoru o radu obično se nalazi bruto iznos.
            </p>
          </div>
          <div
            class="full column-full-pad flex-responsive flex os-calculator-section"
          >
            <label class="full os-calculator-title" for="prebivalište"
              >Mjesto prebivališta</label
            >
            <select
              id="prebivaliste"
              v-model="prebivaliste"
              class="full"
              required
            >
              <optgroup label="Veliki gradovi">
                <option value="zagreb">Zagreb (18%)</option>
                <option value="rijeka">Rijeka (14%)</option>
                <option value="split">Split (15%)</option>
                <option value="osijek">Osijek (13%)</option>
              </optgroup>
              <optgroup label="Gradovi i općine">
                <option value="andrijasevci">Andrijaševci (8%)</option>
                <option value="antunovac">Antunovac (0%)</option>
                <option value="babinagreda">Babina Greda (5%)</option>
                <option value="bale">Bale (1%)</option>
                <option value="barban">Barban (5%)</option>
                <option value="bedenica">Bedenica (3%)</option>
                <option value="bednja">Bednja (10%)</option>
                <option value="belimanastir">Beli Manastir (5%)</option>
                <option value="belica">Belica (0%)</option>
                <option value="belisce">Belišće (7%)</option>
                <option value="benkovac">Benkovac (5%)</option>
                <option value="beretinec">Beretinec (7%)</option>
                <option value="bilice">Bilice (10%)</option>
                <option value="bilje">Bilje (5%)</option>
                <option value="biogradnamoru">Biograd na Moru (12%)</option>
                <option value="biskupija">Biskupija (4%)</option>
                <option value="bistra">Bistra (10%)</option>
                <option value="bizovac">Bizovac (3%)</option>
                <option value="bjelovar">Bjelovar (0%)</option>
                <option value="blato">Blato (10%)</option>
                <option value="bol">Bol (10%)</option>
                <option value="borovo">Borovo (6%)</option>
                <option value="brckovljani">Brckovljani (3%)</option>
                <option value="brdovec">Brdovec (10%)</option>
                <option value="brela">Brela (5%)</option>
                <option value="brestovac">Brestovac (5%)</option>
                <option value="breznica">Breznica (10%)</option>
                <option value="breznickihum">Breznički Hum (3%)</option>
                <option value="brinje">Brinje (10%)</option>
                <option value="brodskistupnik">Brodski Stupnik (10%)</option>
                <option value="buje">Buje (6%)</option>
                <option value="bukovlje">Bukovlje (10%)</option>
                <option value="buzet">Buzet (6%)</option>
                <option value="cerna">Cerna (5%)</option>
                <option value="cernik">Cernik (10%)</option>
                <option value="cerovlje">Cerovlje (2%)</option>
                <option value="cestica">Cestica (10%)</option>
                <option value="cistaprovo">Cista Provo (3%)</option>
                <option value="civljane">Civljane (5%)</option>
                <option value="crikvenica">Crikvenica (10%)</option>
                <option value="cabar">Čabar (5%)</option>
                <option value="caglin">Čaglin (5%)</option>
                <option value="cakovec">Čakovec (0%)</option>
                <option value="cazma">Čazma (5%)</option>
                <option value="ceminac">Čeminac (10%)</option>
                <option value="cepin">Čepin (10%)</option>
                <option value="darda">Darda (5%)</option>
                <option value="daruvar">Daruvar (10%)</option>
                <option value="davor">Davor (10%)</option>
                <option value="delnice">Delnice (5%)</option>
                <option value="dezanovac">Dežanovac (5%)</option>
                <option value="dicmo">Dicmo (8%)</option>
                <option value="donjastubica">Donja Stubica (10%)</option>
                <option value="donjavoca">Donja Voća (10%)</option>
                <option value="donjiandrijevci">Donji Andrijevci (8%)</option>
                <option value="donjikukuruzari">Donji Kukuruzari (6%)</option>
                <option value="donjilapac">Donji Lapac (5%)</option>
                <option value="donjimartijanec">Donji Martijanec (5%)</option>
                <option value="donjimiholjac">Donji Miholjac (5%)</option>
                <option value="dragalic">Dragalić (10%)</option>
                <option value="draz">Draž (2%)</option>
                <option value="drenovci">Drenovci (5%)</option>
                <option value="drnis">Drniš (5%)</option>
                <option value="dubrava">Dubrava (6%)</option>
                <option value="dubravica">Dubravica (10%)</option>
                <option value="dubrovackoprimorje">
                  Dubrovačko primorje (10%)
                </option>
                <option value="dubrovnik">Dubrovnik (10%)</option>
                <option value="dugaresa">Duga Resa (10%)</option>
                <option value="dugoselo">Dugo Selo (9%)</option>
                <option value="dugopolje">Dugopolje (0%)</option>
                <option value="dvor">Dvor (5%)</option>
                <option value="dakovo">Đakovo (10%)</option>
                <option value="durdenovac">Đurđenovac (10%)</option>
                <option value="erdut">Erdut (5%)</option>
                <option value="ernestinovo">Ernestinovo (10%)</option>
                <option value="ervenik">Ervenik (3%)</option>
                <option value="farkasevac">Farkaševac (3%)</option>
                <option value="fazana">Fažana (3%)</option>
                <option value="fericanci">Feričanci (10%)</option>
                <option value="fuzine">Fužine (5%)</option>
                <option value="garcin">Garčin (10%)</option>
                <option value="garesnica">Garešnica (10%)</option>
                <option value="gornjibogicevci">Gornji Bogićevci (5%)</option>
                <option value="gornjikneginec">Gornji Kneginec (10%)</option>
                <option value="gospic">Gospić (10%)</option>
                <option value="gracac">Gračac (7%)</option>
                <option value="gracisce">Gračišće (5%)</option>
                <option value="gradec">Gradec (5%)</option>
                <option value="grubisnopolje">Grubišno Polje (5%)</option>
                <option value="gunja">Gunja (5%)</option>
                <option value="hrascina">Hrašćina (5%)</option>
                <option value="hrvace">Hrvace (10%)</option>
                <option value="hrvatskadubica">Hrvatska Dubica (3%)</option>
                <option value="hrvatskakostajnica">
                  Hrvatska Kostajnica (6%)
                </option>
                <option value="ilok">Ilok (0%)</option>
                <option value="imotski">Imotski (6%)</option>
                <option value="ivanec">Ivanec (10%)</option>
                <option value="ivanicgrad">Ivanić grad (6%)</option>
                <option value="ivankovo">Ivankovo (10%)</option>
                <option value="jagodnjak">Jagodnjak (3%)</option>
                <option value="jakovlje">Jakovlje (5%)</option>
                <option value="jaksic">Jakšić (5%)</option>
                <option value="jastrebarsko">Jastrebarsko (9%)</option>
                <option value="jelsa">Jelsa (10%)</option>
                <option value="kamanje">Kamanje (10%)</option>
                <option value="kanfanar">Kanfanar (3%)</option>
                <option value="kapela">Kapela (8%)</option>
                <option value="kaptol">Kaptol (10%)</option>
                <option value="karlovac">Karlovac (9%)</option>
                <option value="karojba">Karojba (5%)</option>
                <option value="kastela">Kaštela (12%)</option>
                <option value="kastelirlabinci">Kaštelir-Labinci (5%)</option>
                <option value="kijevo">Kijevo (5%)</option>
                <option value="kistanje">Kistanje (3%)</option>
                <option value="klanjec">Klanjec (12%)</option>
                <option value="klenovnik">Klenovnik (7%)</option>
                <option value="klincasela">Klinča Sela (10%)</option>
                <option value="klis">Klis (10%)</option>
                <option value="klostarivanic">Kloštar Ivanić (2%)</option>
                <option value="klostarpodravski">Kloštar Podravski (5%)</option>
                <option value="knezevivinogradi">Kneževi Vinogradi (4%)</option>
                <option value="knin">Knin (10%)</option>
                <option value="komiza">Komiža (5%)</option>
                <option value="konavle">Konavle (10%)</option>
                <option value="koncanica">Končanica (5%)</option>
                <option value="konjscina">Konjšćina (10%)</option>
                <option value="korcula">Korčula (6%)</option>
                <option value="kraljevica">Kraljevica (5%)</option>
                <option value="krasic">Krašić (6%)</option>
                <option value="kravarsko">Kravarsko (5%)</option>
                <option value="kriz">Križ (2%)</option>
                <option value="krizevci">Križevci (10%)</option>
                <option value="krnjak">Krnjak (8%)</option>
                <option value="kulanorinska">Kula Norinska (10%)</option>
                <option value="kutina">Kutina (12%)</option>
                <option value="kutjevo">Kutjevo (10%)</option>
                <option value="labin">Labin (6%)</option>
                <option value="lanisce">Lanišće (5%)</option>
                <option value="lasinja">Lasinja (10%)</option>
                <option value="lastovo">Lastovo (10%)</option>
                <option value="lepoglava">Lepoglava (8%)</option>
                <option value="lipik">Lipik (10%)</option>
                <option value="lipovljani">Lipovljani (6%)</option>
                <option value="lisaneostrovicke">Lišane Ostrovičke (6%)</option>
                <option value="liznjan">Ližnjan (5%)</option>
                <option value="lokvicici">Lokvičići (7%)</option>
                <option value="lovas">Lovas (5%)</option>
                <option value="lovinac">Lovinac (8%)</option>
                <option value="ludbreg">Ludbreg (12%)</option>
                <option value="luka">Luka (5%)</option>
                <option value="lukac">Lukač (8%)</option>
                <option value="lumbarda">Lumbarda (5%)</option>
                <option value="lupoglav">Lupoglav (1%)</option>
                <option value="ljubescica">Ljubešćica (10%)</option>
                <option value="magadenovac">Magadenovac (2%)</option>
                <option value="majur">Majur (5%)</option>
                <option value="makarska">Makarska (10%)</option>
                <option value="malibukovec">Mali Bukovec (10%)</option>
                <option value="marcana">Marčana (5%)</option>
                <option value="marijagorica">Marija Gorica (10%)</option>
                <option value="marijanci">Marijanci (5%)</option>
                <option value="markusica">Markušica (5%)</option>
                <option value="marusevec">Maruševec (5%)</option>
                <option value="matulji">Matulji (10%)</option>
                <option value="medulin">Medulin (5%)</option>
                <option value="metkovic">Metković (8%)</option>
                <option value="mihovljan">Mihovljan (8%)</option>
                <option value="milna">Milna (3%)</option>
                <option value="mljet">Mljet (10%)</option>
                <option value="motovun">Motovun (0%)</option>
                <option value="mrkopalj">Mrkopalj (7%)</option>
                <option value="muc">Muć (7%)</option>
                <option value="murterkornati">Murter-Kornati (8%)</option>
                <option value="nasice">Našice (8%)</option>
                <option value="negoslavci">Negoslavci (5%)</option>
                <option value="novagradiska">Nova Gradiška (12%)</option>
                <option value="novakapela">Nova Kapela (10%)</option>
                <option value="novimarof">Novi Marof (10%)</option>
                <option value="novivinodolski">Novi Vinodolski (7%)</option>
                <option value="novska">Novska (8%)</option>
                <option value="nustar">Nuštar (6%)</option>
                <option value="ogulin">Ogulin (5%)</option>
                <option value="okucani">Okučani (10%)</option>
                <option value="omis">Omiš (8%)</option>
                <option value="opatija">Opatija (0%)</option>
                <option value="opuzen">Opuzen (10%)</option>
                <option value="orle">Orle (5%)</option>
                <option value="osijek">Osijek (13%)</option>
                <option value="otocac">Otočac (7%)</option>
                <option value="otoksinj">Otok (Sinj) (5%)</option>
                <option value="otokvinkovci">Otok (Vinkovci) (5%)</option>
                <option value="ozalj">Ozalj (10%)</option>
                <option value="pakrac">Pakrac (7%)</option>
                <option value="pazin">Pazin (9%)</option>
                <option value="perusic">Perušić (2%)</option>
                <option value="petlovac">Petlovac (5%)</option>
                <option value="petrijanec">Petrijanec (5%)</option>
                <option value="petrijevci">Petrijevci (5%)</option>
                <option value="petrinja">Petrinja (10%)</option>
                <option value="pican">Pićan (0%)</option>
                <option value="pirovac">Pirovac (6%)</option>
                <option value="pisarovina">Pisarovina (6%)</option>
                <option value="pleternica">Pleternica (0%)</option>
                <option value="plitvickajezera">Plitvička jezera (8%)</option>
                <option value="ploce">Ploče (10%)</option>
                <option value="podbablje">Podbablje (6%)</option>
                <option value="podcrkavlje">Podcrkavlje (5%)</option>
                <option value="podgora">Podgora (10%)</option>
                <option value="podgorac">Podgorač (5%)</option>
                <option value="podstrana">Podstrana (10%)</option>
                <option value="pokupsko">Pokupsko (5%)</option>
                <option value="polaca">Polača (10%)</option>
                <option value="popovac">Popovac (3%)</option>
                <option value="popovaca">Popovača (6%)</option>
                <option value="pozega">Požega (7%)</option>
                <option value="pregrada">Pregrada (10%)</option>
                <option value="preseka">Preseka (5%)</option>
                <option value="primosten">Primošten (10%)</option>
                <option value="prolozac">Proložac (5%)</option>
                <option value="promina">Promina (0%)</option>
                <option value="pucisca">Pučišća (5%)</option>
                <option value="pula">Pula (12%)</option>
                <option value="pusca">Pušća (10%)</option>
                <option value="radoboj">Radoboj (8%)</option>
                <option value="rakovec">Rakovec (3%)</option>
                <option value="rakovica">Rakovica (8%)</option>
                <option value="rasa">Raša (6%)</option>
                <option value="ravnagora">Ravna Gora (7.5%)</option>
                <option value="resetari">Rešetari (10%)</option>
                <option value="ribnik">Ribnik (5%)</option>
                <option value="rijeka">Rijeka (14%)</option>
                <option value="rovinj">Rovinj (6%)</option>
                <option value="rugvica">Rugvica (0%)</option>
                <option value="runovici">Runovići (6%)</option>
                <option value="ruzic">Ružić (5%)</option>
                <option value="senj">Senj (10%)</option>
                <option value="sibinj">Sibinj (10%)</option>
                <option value="sinj">Sinj (0%)</option>
                <option value="sisak">Sisak (10%)</option>
                <option value="skradin">Skradin (5%)</option>
                <option value="slatina">Slatina (6%)</option>
                <option value="slavonskibrod">Slavonski Brod (6%)</option>
                <option value="slunj">Slunj (5%)</option>
                <option value="solin">Solin (10%)</option>
                <option value="split">Split (15%)</option>
                <option value="sracinec">Sračinec (5%)</option>
                <option value="staragradiska">Stara Gradiška (5%)</option>
                <option value="starigrad">Stari Grad (10%)</option>
                <option value="starimikanovci">Stari Mikanovci (10%)</option>
                <option value="staropetrovoselo">
                  Staro Petrovo Selo (10%)
                </option>
                <option value="stupnik">Stupnik (6%)</option>
                <option value="supetar">Supetar (10%)</option>
                <option value="sutivan">Sutivan (10%)</option>
                <option value="svetanedeljalabin">
                  Sveta Nedelja (Labin) (6%)
                </option>
                <option value="svetanedeljasamobor">
                  Sveta Nedelja (Samobor) (0%)
                </option>
                <option value="svetidurd">Sveti Đurđ (5%)</option>
                <option value="svetifilipijakov">
                  Sveti Filip i Jakov (10%)
                </option>
                <option value="svetiilija">Sveti Ilija (10%)</option>
                <option value="svetiivanzelina">Sveti Ivan Zelina (12%)</option>
                <option value="svetilovrec">Sveti Lovreč (5%)</option>
                <option value="svetipetarusumi">Sveti Petar u Šumi (7%)</option>
                <option value="svetvincenat">Svetvinčenat (5%)</option>
                <option value="sibenik">Šibenik (10%)</option>
                <option value="skabrnja">Škabrnja (10%)</option>
                <option value="spisicbukovica">Špišić Bukovica (9%)</option>
                <option value="stefanje">Štefanje (0%)</option>
                <option value="stitar">Štitar (5%)</option>
                <option value="tinjan">Tinjan (5%)</option>
                <option value="tisno">Tisno (9%)</option>
                <option value="tordinci">Tordinci (5%)</option>
                <option value="tribunj">Tribunj (6%)</option>
                <option value="trnovecbartolovecki">
                  Trnovec Bartolovečki (7%)
                </option>
                <option value="trogir">Trogir (8%)</option>
                <option value="trpanj">Trpanj (10%)</option>
                <option value="tucepi">Tučepi (10%)</option>
                <option value="udbina">Udbina (5%)</option>
                <option value="umag">Umag (6%)</option>
                <option value="unesic">Unešić (5%)</option>
                <option value="valpovo">Valpovo (8%)</option>
                <option value="varazdin">Varaždin (7.5%)</option>
                <option value="varazdinsketoplice">
                  Varaždinske Toplice (10%)
                </option>
                <option value="velaluka">Vela Luka (9%)</option>
                <option value="velikagorica">Velika Gorica (12%)</option>
                <option value="velikakopanica">Velika Kopanica (7%)</option>
                <option value="velikibukovec">Veliki Bukovec (5%)</option>
                <option value="velikotrgovisce">Veliko Trgovišće (7.5%)</option>
                <option value="vidovec">Vidovec (7%)</option>
                <option value="vinica">Vinica (5%)</option>
                <option value="vinkovci">Vinkovci (10%)</option>
                <option value="virovitica">Virovitica (10%)</option>
                <option value="vis">Vis (3%)</option>
                <option value="visoko">Visoko (10%)</option>
                <option value="visnjan">Višnjan (5%)</option>
                <option value="vizinada">Vižinada (3%)</option>
                <option value="vladislavci">Vladislavci (10%)</option>
                <option value="vodice">Vodice (0%)</option>
                <option value="vodnjan">Vodnjan (7.5%)</option>
                <option value="vodinci">Vođinci (10%)</option>
                <option value="vojnic">Vojnić (7.5%)</option>
                <option value="vrbanja">Vrbanja (5%)</option>
                <option value="vrbje">Vrbje (3%)</option>
                <option value="vrbovec">Vrbovec (12%)</option>
                <option value="vrbovsko">Vrbovsko (10%)</option>
                <option value="vrgorac">Vrgorac (10%)</option>
                <option value="vrhovine">Vrhovine (5%)</option>
                <option value="vrlika">Vrlika (7%)</option>
                <option value="zadar">Zadar (12%)</option>
                <option value="zagreb">Zagreb (18%)</option>
                <option value="zagvozd">Zagvozd (6%)</option>
                <option value="zapresic">Zaprešić (12%)</option>
                <option value="zlatar">Zlatar (10%)</option>
                <option value="zlatarbistrica">Zlatar Bistrica (5%)</option>
                <option value="zmijavci">Zmijavci (8%)</option>
                <option value="zakanje">Žakanje (0%)</option>
                <option value="zminj">Žminj (5%)</option>
                <option value="zumberak">Žumberak (3%)</option>
                <option value="zupadubrovacka">Župa Dubrovačka (10%)</option>
                <option value="zupanja">Županja (9%)</option>
              </optgroup>
            </select>
            <p class="full os-calculator-description">
              Vaše mjesto prebivališta utječe na količinu prireza (poreza na
              porez) koji određuje vaša lokalna samouprava.
            </p>
          </div>
          <div
            class="full column-full-pad flex-responsive flex os-calculator-section"
          >
            <label class="full os-calculator-title">Uzdržavane osobe</label>
            <div class="full flex relative">
              <div class="half flex flex-responsive column-right-pad">
                <p class="full os-calculator-subtitle">Djeca</p>
                <input
                  id="djeca"
                  v-model="djeca"
                  class="full"
                  type="number"
                  max="9"
                  required
                />
              </div>
              <div class="half flex flex-responsive column-left-pad">
                <p class="full os-calculator-subtitle">
                  Punoljetne uzdržavane osobe
                </p>
                <input
                  id="uzdrzavani"
                  v-model="uzdrzavani"
                  class="full"
                  type="number"
                  max="9"
                  required
                />
              </div>
            </div>
            <p class="full os-calculator-description">
              Uzdržavani članovi uže obitelji i uzdržavana djeca su fizičke
              osobe kojima oporezivi primici na godišnjoj razini ne prelaze
              15.000,00 kn.
            </p>
            <p class="full os-calculator-description">
              Uzdržavani članovi vašeg kućanstva povećavaju vaš osobni odbitak,
              što smanjuje vaš porez na dohodak. Koeficijent raste s brojem
              uzdržavanih osoba te djeca imaju veći koeficijent od punoljetnih
              uzdržavanih osoba.
            </p>
          </div>
          <div
            class="full column-full-pad flex-responsive flex os-calculator-section"
          >
            <label class="full os-calculator-title">Invalidnost</label>
            <div class="full flex os-calculator-radio">
              <div class="third flex">
                <input
                  id="invalidnost-none"
                  v-model="invalidnost"
                  value="invalidnost-none"
                  name="invalidnost"
                  type="radio"
                  class="hide"
                />
                <label for="invalidnost-none" class="full center animate"
                  >Ne</label
                >
              </div>
              <div class="third flex">
                <input
                  id="invalidnost-half"
                  v-model="invalidnost"
                  value="invalidnost-half"
                  name="invalidnost"
                  type="radio"
                  class="hide"
                />
                <label for="invalidnost-half" class="full center animate"
                  >50%</label
                >
              </div>
              <div class="third flex">
                <input
                  id="invalidnost-full"
                  v-model="invalidnost"
                  value="invalidnost-full"
                  name="invalidnost"
                  type="radio"
                  class="hide"
                />
                <label for="invalidnost-full" class="full center animate"
                  >100%</label
                >
              </div>
            </div>
            <p class="full os-calculator-description">
              Invalidnost povećava vaš osobni odbitak, što smanjuje vaš porez na
              dohodak.
            </p>
          </div>
          <div
            class="full column-full-pad flex-responsive flex os-calculator-section"
          >
            <label class="full os-calculator-title">Vaš izračun</label>
            <div
              class="half flex flex-responsive column-right-pad column-right-border"
            >
              <h4 class="full overtitle">Neto plaća</h4>
              <p class="full os-calculator-result">{{ netoPlaca }} kn</p>
              <h4 class="full overtitle">{{ netoPlacaEur }} EUR</h4>
            </div>
            <div
              class="full flex mobile-only column-bottom-border-mobile os-calculator-mobile-space"
            ></div>
            <div class="half flex flex-responsive column-left-pad">
              <h4 class="full overtitle">Bruto plaća</h4>
              <p class="full os-calculator-result">{{ brutoPlaca }} kn</p>
              <h4 class="full overtitle">{{ brutoPlacaEur }} EUR</h4>
            </div>
            <p class="full os-calculator-description">
              Telegramov kalkulator plaće je isključivo informativan te se ne
              može koristiti za drugu svrhu.
            </p>
            <div class="full flex os-calculator-table column-top-border">
              <div
                class="full bold flex relative column-bottom-border column-bottom-border-mobile"
              >
                <div class="third flex-responsive">Bruto iznos</div>
                <div class="two-thirds flex-responsive flex">
                  <div class="third"></div>
                  <div class="third right-text">{{ brutoPlaca }} HRK</div>
                  <div class="third right-text">{{ brutoPlacaEur }} EUR</div>
                </div>
              </div>
              <div
                class="full flex relative column-bottom-border column-bottom-border-mobile"
              >
                <div class="third flex-responsive">
                  Mirovinsko osiguranje, prvi stup
                </div>
                <div class="two-thirds flex-responsive flex">
                  <div class="third">15.00%</div>
                  <div class="third right-text">{{ mirovinskoJedan }} HRK</div>
                  <div class="third right-text">
                    {{ mirovinskoJedanEur }} EUR
                  </div>
                </div>
              </div>
              <div
                class="full flex relative column-bottom-border column-bottom-border-mobile"
              >
                <div class="third flex-responsive">
                  Mirovinsko osiguranje, drugi stup
                </div>
                <div class="two-thirds flex-responsive flex">
                  <div class="third">5.00%</div>
                  <div class="third right-text">{{ mirovinskoDva }} HRK</div>
                  <div class="third right-text">{{ mirovinskoDvaEur }} EUR</div>
                </div>
              </div>
              <div
                class="full bold flex relative column-bottom-border column-bottom-border-mobile"
              >
                <div class="third flex-responsive">Ukupno doprinosi</div>
                <div class="two-thirds flex-responsive flex">
                  <div class="third">20.00%</div>
                  <div class="third right-text">{{ doprinosi }} HRK</div>
                  <div class="third right-text">{{ doprinosiEur }} EUR</div>
                </div>
              </div>
              <div
                class="full flex relative column-bottom-border column-bottom-border-mobile"
              >
                <div class="third flex-responsive">Dohodak</div>
                <div class="two-thirds flex-responsive flex">
                  <div class="third"></div>
                  <div class="third right-text">{{ dohodak }} HRK</div>
                  <div class="third right-text">{{ dohodakEur }} EUR</div>
                </div>
              </div>
              <div
                class="full flex relative column-bottom-border column-bottom-border-mobile"
              >
                <div class="third flex-responsive">Osobni odbitak</div>
                <div class="two-thirds flex-responsive flex">
                  <div class="third"></div>
                  <div class="third right-text">{{ osobniOdbitak }} HRK</div>
                  <div class="third right-text">{{ osobniOdbitakEur }} EUR</div>
                </div>
              </div>
              <div
                class="full bold flex relative column-bottom-border column-bottom-border-mobile"
              >
                <div class="third flex-responsive">Porezna osnovica</div>
                <div class="two-thirds flex-responsive flex">
                  <div class="third"></div>
                  <div class="third right-text">{{ poreznaOsnovica }} HRK</div>
                  <div class="third right-text">
                    {{ poreznaOsnovicaEur }} EUR
                  </div>
                </div>
              </div>
              <div
                class="full flex relative column-bottom-border column-bottom-border-mobile"
              >
                <div class="third flex-responsive">Porez ispod 30,000 kn</div>
                <div class="two-thirds flex-responsive flex">
                  <div class="third">20.00%</div>
                  <div class="third right-text">{{ porez1 }} HRK</div>
                  <div class="third right-text">{{ porez1Eur }} EUR</div>
                </div>
              </div>
              <div
                class="full flex relative column-bottom-border column-bottom-border-mobile"
              >
                <div class="third flex-responsive">Porez preko 30,000 kn</div>
                <div class="two-thirds flex-responsive flex">
                  <div class="third">30.00%</div>
                  <div class="third right-text">{{ porez2 }} HRK</div>
                  <div class="third right-text">{{ porez2Eur }} EUR</div>
                </div>
              </div>
              <div
                class="full flex relative column-bottom-border column-bottom-border-mobile"
              >
                <div class="third flex-responsive">Prirez</div>
                <div class="two-thirds flex-responsive flex">
                  <div class="third">
                    {{ prirez[prebivaliste].toFixed(2) }} %
                  </div>
                  <div class="third right-text">{{ prirezKn }} HRK</div>
                  <div class="third right-text">{{ prirezEur }} EUR</div>
                </div>
              </div>
              <div
                class="full bold flex relative column-bottom-border column-bottom-border-mobile"
              >
                <div class="third flex-responsive">Ukupan porez i prirez</div>
                <div class="two-thirds flex-responsive flex">
                  <div class="third">{{ efektivnaPoreznaStopa }} %</div>
                  <div class="third right-text">{{ ukupanPorez }} HRK</div>
                  <div class="third right-text">{{ ukupanPorezEur }} EUR</div>
                </div>
              </div>
              <div
                class="full bold flex relative column-bottom-border column-bottom-border-mobile"
              >
                <div class="third flex-responsive">Neto iznos</div>
                <div class="two-thirds flex-responsive flex">
                  <div class="third"></div>
                  <div class="third right-text">{{ netoPlaca }} HRK</div>
                  <div class="third right-text">{{ netoPlacaEur }} EUR</div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="full column-full-pad flex-responsive flex os-calculator-section"
          >
            <label class="full os-calculator-title">Trošak plaće</label>
            <div
              class="half flex flex-responsive column-right-pad column-right-border"
            >
              <h4 class="full overtitle">Bruto plaća</h4>
              <p class="full os-calculator-result">{{ brutoPlaca }} kn</p>
              <h4 class="full overtitle">{{ brutoPlacaEur }} EUR</h4>
            </div>
            <div
              class="full flex mobile-only column-bottom-border-mobile os-calculator-mobile-space"
            ></div>
            <div class="half flex flex-responsive column-left-pad">
              <h4 class="full overtitle">Trošak plaće (Bruto 2)</h4>
              <p class="full os-calculator-result">{{ brutoDva }} kn</p>
              <h4 class="full overtitle">{{ brutoDvaEur }} EUR</h4>
            </div>
            <p class="full os-calculator-description">
              Na bruto plaću poslodavac još plaća doprinos za zdravstveno
              osiguranje, s kojim nastaje trošak plaće, ili tzv. "bruto 2"
              iznos.
              <a
                href="https://gov.hr/hr/pravo-na-oslobodjenje-od-placanja-doprinosa-na-osnovicu-za-mladu-osobu/1388"
                target="_blank"
                class="underline"
                >Postoji iznimka za mlade ispod 30 godina u svom prvom ugovornom
                odnosu na neodređeno vrijeme.</a
              >
            </p>
            <div class="full flex os-calculator-table column-top-border">
              <div
                class="full bold flex relative column-bottom-border column-bottom-border-mobile"
              >
                <div class="third flex-responsive">Bruto 1</div>
                <div class="two-thirds flex-responsive flex">
                  <div class="third"></div>
                  <div class="third right-text">{{ brutoPlaca }} HRK</div>
                  <div class="third right-text">{{ brutoPlacaEur }} EUR</div>
                </div>
              </div>
              <div
                class="full flex relative column-bottom-border column-bottom-border-mobile"
              >
                <div class="third flex-responsive">
                  Doprinos za zdravstveno osiguranje
                </div>
                <div class="two-thirds flex-responsive flex">
                  <div class="third">16.5%</div>
                  <div class="third right-text">{{ zdravstvo }} HRK</div>
                  <div class="third right-text">{{ zdravstvoEur }} EUR</div>
                </div>
              </div>
              <div
                class="full bold flex relative column-bottom-border column-bottom-border-mobile"
              >
                <div class="third flex-responsive">Bruto 2</div>
                <div class="two-thirds flex-responsive flex">
                  <div class="third"></div>
                  <div class="third right-text">{{ brutoDva }} HRK</div>
                  <div class="third right-text">{{ brutoDvaEur }} EUR</div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="full column-full-pad flex-responsive flex os-calculator-section"
          >
            <label class="full os-calculator-title">Izvori informacija</label>
            <a
              class="full flex underline"
              target="blank"
              href="https://www.hnb.hr/-/hrvatska-uvodi-euro-1-sijecnja-2023"
              >Tečaj: HNB</a
            >
            <a
              class="full flex small-top-margin underline"
              target="blank"
              href="https://www.consilium.europa.eu/hr/press/press-releases/2022/07/12/croatia-set-to-join-the-euro-area-on-1-january-2023-council-adopts-final-required-legal-acts/"
              >Tečaj: Europsko vijeće - Vijeće Europske unije</a
            >
            <a
              class="full flex small-top-margin underline"
              target="blank"
              href="Ministarstvo financija (Porezna uprava)"
              >Tečaj: Europska središnja banka</a
            >
            <a
              class="full flex small-top-margin underline"
              target="blank"
              href="https://www.porezna-uprava.hr/HR_porezni_sustav/Stranice/Popisi/Stope.aspx"
              >Prirez: Ministarstvo financija (Porezna uprava)</a
            >
            <a
              class="full flex small-top-margin underline"
              target="blank"
              href="https://www.zakon.hr/z/365/Zakon-o-doprinosima"
              >Zakon o doprinosima: Doprinosi za obvezno zdravstveno osiguranje
              (članak 14.)</a
            >
            <a
              class="full flex small-top-margin underline"
              target="blank"
              href="https://www.porezna-uprava.hr/baza_znanja/Stranice/OsobniOdbitak.aspx"
              >Osobni odbitak: Ministarstvo financija (Porezna uprava)</a
            >
            <a
              class="full flex small-top-margin underline"
              target="blank"
              href="https://www.porezna-uprava.hr/HR_porezni_sustav/Stranice/porez_na_dohodak.aspx"
              >Porez na dohodak: Ministarstvo financija (Porezna uprava)</a
            >
          </div>
        </form>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'KalkulatorPlaca',
  data() {
    return {
      iznos: 7690,
      uzdrzavani: 0,
      djeca: 0,
      prebivaliste: 'zagreb',
      prirez: {
        andrijasevci: 8,
        antunovac: 0,
        babinagreda: 5,
        bale: 1,
        barban: 5,
        bedenica: 3,
        bednja: 10,
        belimanastir: 5,
        belica: 0,
        belisce: 7,
        benkovac: 5,
        beretinec: 7,
        bilice: 10,
        bilje: 5,
        biogradnamoru: 12,
        biskupija: 4,
        bistra: 10,
        bizovac: 3,
        bjelovar: 0,
        blato: 10,
        bol: 10,
        borovo: 6,
        brckovljani: 3,
        brdovec: 10,
        brela: 5,
        brestovac: 5,
        breznica: 10,
        breznickihum: 3,
        brinje: 10,
        brodskistupnik: 10,
        buje: 6,
        bukovlje: 10,
        buzet: 6,
        cerna: 5,
        cernik: 10,
        cerovlje: 2,
        cestica: 10,
        cistaprovo: 3,
        civljane: 5,
        crikvenica: 10,
        čabar: 5,
        caglin: 5,
        cakovec: 0,
        cazma: 5,
        ceminac: 10,
        cepin: 10,
        darda: 5,
        daruvar: 10,
        davor: 10,
        delnice: 5,
        dezanovac: 5,
        dicmo: 8,
        donjastubica: 10,
        donjavoca: 10,
        donjiandrijevci: 8,
        donjikukuruzari: 6,
        donjilapac: 5,
        donjimartijanec: 5,
        donjimiholjac: 5,
        dragalic: 10,
        draz: 2,
        drenovci: 5,
        drnis: 5,
        dubrava: 6,
        dubravica: 10,
        dubrovackoprimorje: 10,
        dubrovnik: 10,
        dugaresa: 10,
        dugoselo: 9,
        dugopolje: 0,
        dvor: 5,
        dakovo: 10,
        durdenovac: 10,
        erdut: 5,
        ernestinovo: 10,
        ervenik: 3,
        farkasevac: 3,
        fazana: 3,
        fericanci: 10,
        fuzine: 5,
        garcin: 10,
        garesnica: 10,
        gornjibogicevci: 5,
        gornjikneginec: 10,
        gospic: 10,
        gracac: 7,
        gracisce: 5,
        gradec: 5,
        grubisnopolje: 5,
        gunja: 5,
        hrascina: 5,
        hrvace: 10,
        hrvatskadubica: 3,
        hrvatskakostajnica: 6,
        ilok: 0,
        imotski: 6,
        ivanec: 10,
        ivanicgrad: 6,
        ivankovo: 10,
        jagodnjak: 3,
        jakovlje: 5,
        jaksic: 5,
        jastrebarsko: 9,
        jelsa: 10,
        kamanje: 10,
        kanfanar: 3,
        kapela: 8,
        kaptol: 10,
        karlovac: 9,
        karojba: 5,
        kastela: 12,
        kastelirlabinci: 5,
        kijevo: 5,
        kistanje: 3,
        klanjec: 12,
        klenovnik: 7,
        klincasela: 10,
        klis: 10,
        klostarivanic: 2,
        klostarpodravski: 5,
        knezevivinogradi: 4,
        knin: 10,
        komiza: 5,
        konavle: 10,
        koncanica: 5,
        konjscina: 10,
        korcula: 6,
        kraljevica: 5,
        krasic: 6,
        kravarsko: 5,
        kriz: 2,
        krizevci: 10,
        krnjak: 8,
        kulanorinska: 10,
        kutina: 12,
        kutjevo: 10,
        labin: 6,
        lanisce: 5,
        lasinja: 10,
        lastovo: 10,
        lepoglava: 8,
        lipik: 10,
        lipovljani: 6,
        lisaneostrovicke: 6,
        liznjan: 5,
        lokvicici: 7,
        lovas: 5,
        lovinac: 8,
        ludbreg: 12,
        luka: 5,
        lukac: 8,
        lumbarda: 5,
        lupoglav: 1,
        ljubescica: 10,
        magadenovac: 2,
        majur: 5,
        makarska: 10,
        malibukovec: 10,
        marcana: 5,
        marijagorica: 10,
        marijanci: 5,
        markusica: 5,
        marusevec: 5,
        matulji: 10,
        medulin: 5,
        metkovic: 8,
        mihovljan: 8,
        milna: 3,
        mljet: 10,
        motovun: 0,
        mrkopalj: 7,
        muc: 7,
        murterkornati: 8,
        nasice: 8,
        negoslavci: 5,
        novagradiska: 12,
        novakapela: 10,
        novimarof: 10,
        novivinodolski: 7,
        novska: 8,
        nustar: 6,
        ogulin: 5,
        okucani: 10,
        omis: 8,
        opatija: 0,
        opuzen: 10,
        orle: 5,
        osijek: 13,
        otocac: 7,
        otoksinj: 5,
        otokvinkovci: 5,
        ozalj: 10,
        pakrac: 7,
        pazin: 9,
        perusic: 2,
        petlovac: 5,
        petrijanec: 5,
        petrijevci: 5,
        petrinja: 10,
        pican: 0,
        pirovac: 6,
        pisarovina: 6,
        pleternica: 0,
        plitvickajezera: 8,
        ploce: 10,
        podbablje: 6,
        podcrkavlje: 5,
        podgora: 10,
        podgorac: 5,
        podstrana: 10,
        pokupsko: 5,
        polaca: 10,
        popovac: 3,
        popovaca: 6,
        pozega: 7,
        pregrada: 10,
        preseka: 5,
        primosten: 10,
        prolozac: 5,
        promina: 0,
        pucisca: 5,
        pula: 12,
        pusca: 10,
        radoboj: 8,
        rakovec: 3,
        rakovica: 8,
        rasa: 6,
        ravnagora: 7,
        resetari: 10,
        ribnik: 5,
        rijeka: 14,
        rovinj: 6,
        rugvica: 0,
        runovici: 6,
        ruzic: 5,
        senj: 10,
        sibinj: 10,
        sinj: 0,
        sisak: 10,
        skradin: 5,
        slatina: 6,
        slavonskibrod: 6,
        slunj: 5,
        solin: 10,
        split: 15,
        sracinec: 5,
        staragradiska: 5,
        starigrad: 10,
        starimikanovci: 10,
        staropetrovoselo: 10,
        stupnik: 6,
        supetar: 10,
        sutivan: 10,
        svetanedeljalabin: 6,
        svetanedeljasamobor: 0,
        svetidurd: 5,
        svetifilipijakov: 10,
        svetiilija: 10,
        svetiivanzelina: 12,
        svetilovrec: 5,
        svetipetarusumi: 7,
        svetvincenat: 5,
        sibenik: 10,
        skabrnja: 10,
        spisicbukovica: 9,
        stefanje: 0,
        stitar: 5,
        tinjan: 5,
        tisno: 9,
        tordinci: 5,
        tribunj: 6,
        trnovecbartolovecki: 7,
        trogir: 8,
        trpanj: 10,
        tucepi: 10,
        udbina: 5,
        umag: 6,
        unesic: 5,
        valpovo: 8,
        varazdin: 7,
        varazdinsketoplice: 10,
        velaluka: 9,
        velikagorica: 12,
        velikakopanica: 7,
        velikibukovec: 5,
        velikotrgovisce: 7,
        vidovec: 7,
        vinica: 5,
        vinkovci: 10,
        virovitica: 10,
        vis: 3,
        visoko: 10,
        visnjan: 5,
        vizinada: 3,
        vladislavci: 10,
        vodice: 0,
        vodnjan: 7,
        vodinci: 10,
        vojnic: 7,
        vrbanja: 5,
        vrbje: 3,
        vrbovec: 12,
        vrbovsko: 10,
        vrgorac: 10,
        vrhovine: 5,
        vrlika: 7,
        zadar: 12,
        zagreb: 18,
        zagvozd: 6,
        zapresic: 12,
        zlatar: 10,
        zlatarbistrica: 5,
        zmijavci: 8,
        zakanje: 0,
        zminj: 5,
        zumberak: 3,
        zupadubrovacka: 10,
        zupanja: 9,
      },
      eurTecaj: 7.5345,
      invalidnost: 'invalidnost-none',
      smjerKonverzije: 'neto-u-bruto',
      loading: false,
      posts: [],
      page: 1,
      email: '',
      thanks: false,
    }
  },
  computed: {
    mirovinskoJedan() {
      if (this.smjerKonverzije === 'neto-u-bruto') {
        return Number(this.dohodak * 0.1875).toFixed(2)
      } else {
        return Number(this.iznos * 0.15).toFixed(2)
      }
    },
    mirovinskoJedanEur() {
      return (this.mirovinskoJedan / this.eurTecaj).toFixed(2)
    },
    mirovinskoDva() {
      if (this.smjerKonverzije === 'neto-u-bruto') {
        return Number(this.dohodak * 0.0625).toFixed(2)
      } else {
        return Number(this.iznos * 0.05).toFixed(2)
      }
    },
    mirovinskoDvaEur() {
      return Number(this.mirovinskoDva / this.eurTecaj).toFixed(2)
    },
    doprinosi() {
      return Number(
        Number(this.mirovinskoJedan) + Number(this.mirovinskoDva)
      ).toFixed(2)
    },
    doprinosiEur() {
      return Number(
        Number(this.mirovinskoJedanEur) + Number(this.mirovinskoDvaEur)
      ).toFixed(2)
    },
    dohodak() {
      if (this.smjerKonverzije === 'neto-u-bruto') {
        if (this.poreznaOsnovicaReverse < 30001) {
          return Number(
            Number(this.poreznaOsnovicaReverse) /
              Number(
                1 -
                  Number(
                    Number(
                      Number(Number(this.prirez[this.prebivaliste]) / 100) * 0.2
                    ) + 0.2
                  )
              ) +
              Number(this.osobniOdbitak)
          ).toFixed(2)
        } else {
          return Number(
            Number(
              Number(
                (Number(this.poreznaOsnovicaReverse) -
                  3000 -
                  3000 * Number(this.prirezKn)) /
                  Number(0.7 - Number(0.3 * Number(this.prirezKn)))
              )
            ) + Number(this.osobniOdbitak)
          ).toFixed(2)
        }
      } else {
        return Number(Number(this.iznos) - Number(this.doprinosi)).toFixed(2)
      }
    },
    dohodakEur() {
      return Number(this.dohodak / this.eurTecaj).toFixed(2)
    },
    invalidnostBonus() {
      switch (this.invalidnost) {
        case 'invalidnost-none': {
          return 0
        }
        case 'invalidnost-half': {
          return 1000
        }
        case 'invalidnost-full': {
          return 3750
        }
        default: {
          return 0
        }
      }
    },
    djecaBonus() {
      switch (Number(this.djeca)) {
        case 0: {
          return 0
        }
        case 1: {
          return 1750
        }
        case 2: {
          return 4250
        }
        case 3: {
          return 7750
        }
        case 4: {
          return 12500
        }
        case 5: {
          return 18750
        }
        case 6: {
          return 26750
        }
        case 7: {
          return 36750
        }
        case 8: {
          return 49000
        }
        case 9: {
          return 63750
        }
        default: {
          return 0
        }
      }
    },
    uzdrzavaniBonus() {
      switch (Number(this.uzdrzavani)) {
        case 0: {
          return 0
        }
        case 1: {
          return 1750
        }
        case 2: {
          return 3500
        }
        case 3: {
          return 5250
        }
        case 4: {
          return 7000
        }
        case 5: {
          return 8750
        }
        case 6: {
          return 10500
        }
        case 7: {
          return 12250
        }
        case 8: {
          return 14000
        }
        case 9: {
          return 15750
        }
        default: {
          return 0
        }
      }
    },
    osobniOdbitak() {
      return Number(
        this.invalidnostBonus + this.djecaBonus + this.uzdrzavaniBonus + 4000
      ).toFixed(2)
    },
    osobniOdbitakEur() {
      return Number(this.osobniOdbitak / this.eurTecaj).toFixed(2)
    },
    poreznaOsnovica() {
      if (Number(this.dohodak) > Number(this.osobniOdbitak)) {
        return Number(this.dohodak - this.osobniOdbitak).toFixed(2)
      } else {
        return Number(0).toFixed(2)
      }
    },
    poreznaOsnovicaReverse() {
      if (this.smjerKonverzije === 'neto-u-bruto') {
        if (Number(this.iznos) > Number(this.osobniOdbitak)) {
          return Number(this.iznos - this.osobniOdbitak).toFixed(2)
        } else {
          return Number(0).toFixed(2)
        }
      } else {
        return Number(0).toFixed(2)
      }
    },
    poreznaOsnovicaEur() {
      return Number(this.poreznaOsnovica / this.eurTecaj).toFixed(2)
    },
    porez1() {
      if (this.poreznaOsnovica < 30001) {
        return Number(Number(this.poreznaOsnovica) * 0.2).toFixed(2)
      } else {
        return Number(6000).toFixed(2)
      }
    },
    porez1Eur() {
      return Number(this.porez1 / this.eurTecaj).toFixed(2)
    },
    porez2() {
      if (this.poreznaOsnovica > 30000) {
        return Number(Number(this.poreznaOsnovica - 30000) * 0.3).toFixed(2)
      } else {
        return Number(0).toFixed(2)
      }
    },
    porez2Eur() {
      return Number(this.porez2 / this.eurTecaj).toFixed(2)
    },
    prirezKn() {
      return Number(
        Number(Number(this.porez1) + Number(this.porez2)) *
          Number(Number(this.prirez[this.prebivaliste]) / 100)
      ).toFixed(2)
    },
    prirezEur() {
      return Number(this.prirezKn / this.eurTecaj).toFixed(2)
    },
    ukupanPorez() {
      return Number(
        Number(this.porez1) + Number(this.porez2) + Number(this.prirezKn)
      ).toFixed(2)
    },
    ukupanPorezEur() {
      return Number(this.ukupanPorez / this.eurTecaj).toFixed(2)
    },
    efektivnaPoreznaStopa() {
      return Number(Number(this.ukupanPorez / this.dohodak) * 100).toFixed(2)
    },
    netoPlaca() {
      if (this.smjerKonverzije === 'neto-u-bruto') {
        return Number(this.iznos)
      } else {
        return Number(this.dohodak - this.ukupanPorez).toFixed(2)
      }
    },
    netoPlacaEur() {
      return Number(this.netoPlaca / this.eurTecaj).toFixed(2)
    },
    brutoPlaca() {
      if (this.smjerKonverzije === 'neto-u-bruto') {
        return Number(Number(this.dohodak) + Number(this.doprinosi)).toFixed(2)
      } else {
        return Number(this.iznos).toFixed(2)
      }
    },
    brutoPlacaEur() {
      return Number(this.brutoPlaca / this.eurTecaj).toFixed(2)
    },
    zdravstvo() {
      return Number(Number(Number(this.brutoPlaca) * 0.165)).toFixed(2)
    },
    zdravstvoEur() {
      return Number(this.zdravstvo / this.eurTecaj).toFixed(2)
    },
    brutoDva() {
      return Number(Number(this.zdravstvo) + Number(this.brutoPlaca)).toFixed(2)
    },
    brutoDvaEur() {
      return Number(this.brutoDva / this.eurTecaj).toFixed(2)
    },
  },
  head() {
    const link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.telegram.hr/kalkulatori/placa',
      },
    ]
    return {
      title: 'Kalkulator plaće',
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Preračunajte neto u bruto i obrnuto',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Preračunajte neto u bruto i obrnuto',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Kalkulator plaće',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/kalkulatori/placa',
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
