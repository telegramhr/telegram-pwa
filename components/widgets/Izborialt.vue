<template>
  <div class="full article flex weather-widget izbori-mini-widget stretch">
    <div
      class="full izbori-widget-header mobile-side-pad column-horizontal-pad"
    >
      <h2 class="full center-text column-top-border">
        Lokalni izbori - izlazne ankete
      </h2>
    </div>
    <div class="fourth flex column-full-pad grad-segment">
      <div class="noththree full overtitle column-top-border">ZAGREB</div>
      <div class="full flex kandidat">
        <div class="half">
          <img
            src="@/assets/img/extras/izbori_lokalni/tomislav-tomasevic.gif"
          />
        </div>
        <div class="half flex center">
          <div class="full">
            <p class="full faded smaller-text">TOMISLAV TOMAŠEVIĆ (M!)</p>
            <p class="full"><span class="big-number">68,3%</span></p>
          </div>
        </div>
      </div>
      <div class="full flex kandidat">
        <div class="half">
          <img src="@/assets/img/extras/izbori_lokalni/miroslav-skoro.gif" />
        </div>
        <div class="half flex center">
          <div class="full">
            <p class="full faded smaller-text">MIROSLAV ŠKORO (DP)</p>
            <p class="full"><span class="big-number">31,7%</span></p>
          </div>
        </div>
      </div>
    </div>
    <div class="fourth flex column-full-pad grad-segment">
      <div class="noththree full overtitle column-top-border">SPLIT</div>
      <div class="full flex kandidat">
        <div class="half">
          <img src="@/assets/img/extras/izbori_lokalni/ivica-puljak.gif" />
        </div>
        <div class="half flex center">
          <div class="full">
            <p class="full faded smaller-text">IVICA PULJAK (CENTAR)</p>
            <p class="full"><span class="big-number">59,2%</span></p>
          </div>
        </div>
      </div>
      <div class="full flex kandidat">
        <div class="half">
          <img src="@/assets/img/extras/izbori_lokalni/vice-mihanovic.gif" />
        </div>
        <div class="half flex center">
          <div class="full">
            <p class="full faded smaller-text">VICE MIHANOVIĆ (HDZ)</p>
            <p class="full"><span class="big-number">40,8%</span></p>
          </div>
        </div>
      </div>
    </div>
    <div class="fourth flex column-full-pad grad-segment">
      <div class="noththree full overtitle column-top-border">RIJEKA</div>
      <div class="full flex kandidat">
        <div class="half">
          <img src="@/assets/img/extras/izbori_lokalni/marko-filipovic.gif" />
        </div>
        <div class="half flex center">
          <div class="full">
            <p class="full faded smaller-text">MARKO FILIPOVIĆ (SDP)</p>
            <p class="full"><span class="big-number">57,8%</span></p>
          </div>
        </div>
      </div>
      <div class="full flex kandidat">
        <div class="half">
          <img src="@/assets/img/extras/izbori_lokalni/davor-stimac.gif" />
        </div>
        <div class="half flex center">
          <div class="full">
            <p class="full faded smaller-text">DAVOR ŠTIMAC (NEZAVISAN)</p>
            <p class="full"><span class="big-number">42,2%</span></p>
          </div>
        </div>
      </div>
    </div>
    <div class="fourth flex column-full-pad grad-segment">
      <div class="noththree full overtitle column-top-border">OSIJEK</div>
      <div class="full flex kandidat">
        <div class="half">
          <img src="@/assets/img/extras/izbori_lokalni/ivan-radic.gif" />
        </div>
        <div class="half flex center">
          <div class="full">
            <p class="full faded smaller-text">IVAN RADIĆ (HDZ)</p>
            <p class="full"><span class="big-number">63,1%</span></p>
          </div>
        </div>
      </div>
      <div class="full flex kandidat">
        <div class="half">
          <img
            src="@/assets/img/extras/izbori_lokalni/berislav-mlinarevic.gif"
          />
        </div>
        <div class="half flex center">
          <div class="full">
            <p class="full faded smaller-text">BERISLAV MLINAREVIĆ (DP)</p>
            <p class="full"><span class="big-number">36,9%</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.izbori-mini-widget {
  padding-top: 0px;
}
.izbori-mini-widget:hover h2 {
  color: #111;
}
.izbori-widget-header h2 {
  text-transform: none;
  font-size: 48px;
  font-size: 2.4rem;
}
.izbori-mini-widget .izbori-widget-header h2 {
  padding-top: 8px;
  padding-bottom: 8px;
}
.izbori-mini-widget .half img {
  background-color: #bbbbbb;
  border-radius: 25px;
  width: 40px;
  height: 40px;
  margin-right: 8px;
  position: relative;
  top: -1px;
}
.izbori-mini-widget .big-number {
  font-size: 24px;
  font-size: 1.2rem;
}
.izbori-mini-widget .kandidat {
  margin-bottom: 8px;
}
.izbori-mini-widget .noththree.overtitle {
  padding-top: 8px;
  margin-bottom: 20px;
}
.grad-segment {
  padding-top: 0px;
}
.kandidat {
  position: relative;
  padding-left: 48px;
}
.kandidat > .half {
  width: auto;
}
.kandidat > .half:first-child {
  width: 48px;
  position: absolute;
  top: 0;
  left: 0;
}
.kandidat:nth-child(5) {
  margin-bottom: 0px;
}
.izbori-mini-widget .noththree.overtitle .data-age-time {
  color: #111;
  opacity: 0.25;
  float: right;
}
.dark-mode .izbori-mini-widget .noththree.overtitle .data-age-time {
  color: #efefef;
}
.izbori-mini-widget .noththree.overtitle:hover .data-age-time {
  opacity: 0.7;
}
@media screen and (max-width: 1024px) {
  .grad-segment {
    margin-bottom: 6vw;
  }
  .grad-segment .noththree.overtitle {
    border-top: 1px solid #c8c8c8;
  }
  .dark-mode .grad-segment .noththree.overtitle {
    border-color: #555;
  }
  .izbori-mini-widget {
    position: relative;
    z-index: 9;
    background-color: #fcf1e7;
  }
  .contrast-mode .izbori-mini-widget {
    background-color: white;
  }
  .dark-mode .izbori-mini-widget {
    background-color: #212121;
  }
  .izbori-mini-widget .fourth {
    padding-left: 4vw;
    padding-right: 4vw;
    width: 49.99%;
  }
  .izbori-mini-widget .smaller-text {
    font-size: 10px;
    font-size: 0.5rem;
  }
  .izbori-widget-header h2 {
    margin-top: 4vw;
    border-top: 1px solid #c8c8c8;
    font-size: 1.6rem;
  }
  .dark-mode .izbori-widget-header h2 {
    border-color: #555;
  }
}
</style>

<script>
export default {
  name: 'Izborialt',
}
</script>
