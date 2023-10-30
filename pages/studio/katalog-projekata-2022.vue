<template>
  <div class="main-container flex single-article">
    <client-only>
      <theader></theader>
    </client-only>
    <div class="full flex tg-red">
      <h1 class="full center-text page-title">
        Katalog projekata za 2022. godinu
      </h1>
      <div class="full header-filler"></div>
    </div>
    <div class="full flex">
      <article class="container column-full-pad flex relative mobile-side-pad">
        <div class="full relative single-article-body" />
      </article>
    </div>
    <tfooter></tfooter>
  </div>
</template>

<script>
export default {
  name: 'KatalogProjekata2022',
  head() {
    return {
      title: 'Katalog projekata 2022.',
      titleTemplate: '%s | Telegram.hr',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Odaberite svoju priču uspjeha',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Odaberite svoju priču uspjeha',
        },
        {
          hid: 'og:type',
          name: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: 'Katalog projekata 2022.',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: 'https://www.telegram.hr/img/tmg_projekti_thumb.jpg',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: 'https://www.telegram.hr/studio/katalog-projekata-2022/',
        },
        {
          hid: 'fb:app_id',
          name: 'fb:app_id',
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
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://www.telegram.hr/studio/katalog-projekata-2022/',
        },
      ],
    }
  },
}
</script>
