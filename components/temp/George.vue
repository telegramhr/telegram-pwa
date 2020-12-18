<template>
  <div class="full flex">
    <div class="container flex relative column-full-pad">
      <a
        class="full flex relative tgneue-widget-special stretch"
        href="https://www.telegram.hr/native/stigao-je-novi-telegram/"
        target="_blank"
      >
        <div class="line-decoration-box animate">
          <div class="line-1 animate"></div>
          <div class="line-2 animate"></div>
          <div class="line-3 animate"></div>
        </div>
        <div
          class="fourth relative flex-responsive relative column-full-pad center widget-special-title mobile-side-pad"
        >
          <div class="full flex article-pad">
            <h2 class="full">Stigao je novi Telegram.</h2>
            <p class="full">
              Pročitaj naš specijal <i class="fas fa-angle-right"></i>
            </p>
          </div>
          <div class="full george-disclaimer center">
            <img
              src="https://www.telegram.hr/wp-content/uploads/2020/12/george-logo-mini.jpg"
              aria-hidden="true"
            />
          </div>
          <img
            src="https://images.telegram.hr/SqEI6sJmZ-RnAPwJOpBT-W_pgaDV96PuHP0s8zi6Mik/preset:article2/aHR0cHM6Ly93d3cudGVsZWdyYW0uaHIvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMTIvdGctYmFja2dyb3VuZC5qcGc.jpg"
            aria-hidden="true"
            loading="lazy"
          />
        </div>
        <div
          class="three-fourths flex flex-responsive relative mobile-side-pad"
        >
          <div
            class="third flex flex-responsive article-standard article relative column-full-pad"
          >
            <img
              src="https://images.telegram.hr/prWgeprmcyxcUi1DYcgOxH3dQO_nJxRaXO7JHdxdNhg/preset:article2/aHR0cHM6Ly93d3cudGVsZWdyYW0uaHIvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMTIvc3JlZG5qYTEuanBn.jpg"
              alt=""
              loading="lazy"
            />
            <div class="full flex article-pad">
              <div class="full flex desktop-only">
                <h3 class="overtitle"></h3>
              </div>
              <h2 class="full">
                Kroz ovih pet godina Telegram je pedantno pratio priče o
                poslovnim uspjesima. Donosimo 12 najinspirativnijih
              </h2>
              <h5 class="full flex article-meta">
                <span class="meta-preporuke">8 preporuka</span>
              </h5>
            </div>
          </div>
          <div
            class="third flex flex-responsive article-standard article relative column-full-pad"
          >
            <img
              src="https://images.telegram.hr/NeF7Rg8sJ16er8O9NiTPUDNQEg5-xguZffmgKtFlzAA/preset:article2/aHR0cHM6Ly93d3cudGVsZWdyYW0uaHIvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMTIvZXJzdGUtaXZhbi1rb21wNC5qcGc.jpg"
              alt=""
              loading="lazy"
            />
            <div class="full flex article-pad">
              <div class="full flex desktop-only">
                <h3 class="overtitle"></h3>
              </div>
              <h2 class="full">
                Otvaranje računa u banci uvijek mi je kao odlazak odvjetniku. S
                Georgeom sam bio gotov za 20 minuta
              </h2>
              <h5 class="full flex article-meta">
                <span class="meta-preporuke">27 preporuka</span>
              </h5>
            </div>
          </div>
          <div
            class="third flex flex-responsive article-standard article relative column-full-pad"
          >
            <img
              src="https://images.telegram.hr/k9Pfdj5gV_M3oNZzM3v1f7i99SPJgNRispGMn2P2BbQ/preset:article2/aHR0cHM6Ly93d3cudGVsZWdyYW0uaHIvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMTIvZ3JpZC0xLmpwZw.jpg"
              alt=""
              loading="lazy"
            />
            <div class="full flex article-pad">
              <div class="full flex desktop-only">
                <h3 class="overtitle"></h3>
              </div>
              <h2 class="full">
                Pitali smo nekoliko redovnih čitatelja koje autore i teme
                najviše vole na Telegramu
              </h2>
              <h5 class="full flex article-meta">
                <span class="meta-preporuke">38 preporuka</span>
              </h5>
            </div>
          </div>
        </div>
        <div class="line-decoration-box animate">
          <div class="line-1 animate"></div>
          <div class="line-2 animate"></div>
          <div class="line-3 animate"></div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'George',
}
</script>

<style scoped>
/* Specijal widget */

.tgneue-widget-special {
  background-color: #212121;
  color: white;
  margin-top: 32px;
  margin-bottom: 32px;
}
.tgneue-widget-special .widget-special-title {
  padding-bottom: 100px;
}

.tgneue-widget-special .widget-special-title > img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  object-fit: cover;
  height: 100%;
  filter: grayscale(100);
  opacity: 0.15;
}

.tgneue-widget-special .widget-special-title h2 {
  line-height: 1em;
  letter-spacing: -0.05em;
  font-size: 40px;
  margin-bottom: 12px;
}

.tgneue-widget-special .widget-special-title p,
.tgneue-widget-special .powered-by {
  font-size: 12px;
  text-transform: uppercase;
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  opacity: 0.7;
}

.tgneue-widget-special .widget-special-title p i {
  margin-left: 4px;
  color: #ae3737;
}

.tgneue-widget-special .article-standard {
  margin-bottom: 0px;
}

.tgneue-widget-special .fourth .article-pad {
  position: relative;
  z-index: 5;
}

.tgneue-widget-special .meta-preporuke {
  color: white;
  opacity: 0.4;
}

.tgneue-widget-special .line-decoration-box {
  position: absolute;
  top: -31px;
  left: -48px;
  height: 64px;
  width: 33%;
}

.tgneue-widget-special:hover .line-decoration-box,
.article:hover .line-decoration-box {
  width: 36%;
}

.tgneue-widget-special .line-decoration-box > div {
  height: 7px;
  z-index: 5;
  background-color: #ae3737;
  position: absolute;
}

.tgneue-widget-special .line-1 {
  width: 30%;
  top: 0px;
  left: 20%;
}

.tgneue-widget-special .line-2 {
  width: 95%;
  top: 27px;
  left: 0%;
}

.tgneue-widget-special .line-3 {
  width: 15%;
  bottom: 0px;
  left: 5%;
}

.tgneue-widget-special .line-decoration-box:last-child {
  top: auto;
  bottom: -32px;
  left: auto;
  right: -48px;
}

.tgneue-widget-special .line-decoration-box:last-child .line-1 {
  left: 50%;
  top: auto;
  bottom: 0px;
}

.tgneue-widget-special .line-decoration-box:last-child .line-2 {
  left: 5%;
  top: 28px;
}

.tgneue-widget-special .line-decoration-box:last-child .line-3 {
  left: 80%;
  bottom: auto;
  top: 0px;
}
.tgneue-widget-special .george-disclaimer {
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 100px;
  height: 100px;
  background-color: #79c794;
  z-index: 5;
}
.tgneue-widget-special .george-disclaimer img {
  width: 100px;
  height: 100px;
  margin: 0 auto;
}
@media screen and (min-width: 1025px) {
  .tgneue-widget-special .article:hover h2 {
    color: white;
  }

  .tgneue-widget-special .article-standard {
    border-bottom: none;
    padding-left: 24px;
  }
}

@media screen and (max-width: 1023px) {
  .tgneue-widget-special .line-decoration-box {
    left: 0px;
    width: 50%;
  }
  .tgneue-widget-special .line-decoration-box:last-child {
    right: 0px;
  }
  .tgneue-widget-special .article-standard {
    border-bottom-color: #333;
  }
  .tgneue-widget-special .widget-special-title .article-pad {
    padding-top: 64px;
    border-bottom: none;
    padding-bottom: 16px;
  }
  .tgneue-widget-special .widget-special-title p i {
    transform: rotate(90deg);
  }
}
</style>
