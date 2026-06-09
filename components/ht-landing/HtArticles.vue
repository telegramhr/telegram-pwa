<template>
  <section class="ht-articles">
    <div class="ht-articles__inner">
      <div class="ht-articles__head">
        <h2 class="ht-articles__title">Iza hypea</h2>
        <p class="ht-articles__subtitle">
          Što AI doista mijenja u različitim profesijama?
        </p>
      </div>

      <div class="ht-articles__grid">
        <article
          v-for="(article, index) in articles"
          :key="index"
          class="ht-article-card"
        >
          <div class="ht-article-card__thumb">
            <img
              v-if="article.image"
              :src="article.image"
              :alt="article.title"
              loading="lazy"
            />
          </div>
          <div class="ht-article-card__body">
            <div class="ht-article-card__text">
              <h3 class="ht-article-card__heading">{{ article.title }}</h3>
              <p class="ht-article-card__excerpt">{{ article.excerpt }}</p>
            </div>
            <a
              class="ht-article-card__btn"
              :href="article.link || '#'"
              :aria-label="`Pročitaj više: ${article.title}`"
              >Pročitaj više</a
            >
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HtArticles',
  data() {
    return {
      articles: [
        {
          title:
            'Djeca danas češće uče uz ChatGPT. Stručnjaci nam otkrivaju kakve će to posljedice ostaviti na školstvo',
          excerpt:
            'Dejan Nemčić objašnjava kako se sama srž učenja mijenja u trenutku kada je znanje dostupno na dlanu',
          image: '/ht-landing/article-1.jpg',
          link: '#',
        },
        {
          title:
            "'AI drastično mijenja tržište rada. Ovim se trendovima poslodavci i posloprimci moraju prilagoditi već danas'",
          excerpt:
            'Što to znači u praksi otkrile su nam HR stručnjakinja i voditeljica portala posao.hr',
          image: '/ht-landing/article-2.jpg',
          link: '#',
        },
        {
          title:
            'Lorem ipsum dolor sit amet consectetur. Urna pulvinar sed amet urna elementum.',
          excerpt:
            'Lorem ipsum dolor sit amet consectetur. Pellentesque pretium purus in malesuada. Pellentesque pretium purus in malesuada.',
          image: null,
          link: '#',
        },
        {
          title:
            'Lorem ipsum dolor sit amet consectetur. Urna pulvinar sed amet urna elementum.',
          excerpt:
            'Lorem ipsum dolor sit amet consectetur. Pellentesque pretium purus in malesuada. Pellentesque pretium purus in malesuada.',
          image: null,
          link: '#',
        },
      ],
    }
  },
}
</script>

<style scoped>
.ht-articles {
  width: 100%;
  background: #f4f4f4;
  padding: 64px 16px;
}
.ht-articles__inner {
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 48px;
}
.ht-articles__head {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.ht-articles__title {
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: 32px;
  line-height: 1.2;
  color: var(--ht-dark, #2e2b26);
  text-align: center;
  margin: 0;
  /* Trim the line-height leading so the 20px gap is measured cap-to-baseline,
     matching the Figma text-box-trim spec (cap / alphabetic). */
  text-box-trim: trim-both;
  text-box-edge: cap alphabetic;
}
.ht-articles__subtitle {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.3;
  color: var(--ht-dark, #2e2b26);
  text-align: center;
  margin: 0;
  text-box-trim: trim-both;
  text-box-edge: cap alphabetic;
}
.ht-articles__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
}

.ht-article-card {
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
}
.ht-article-card__thumb {
  width: 100%;
  /* Mobile/tablet: wide thumbnail (~16:9) as in the Figma mobile design. */
  aspect-ratio: 16 / 9;
  border-radius: 4px;
  overflow: hidden;
  background: #d9d9d9;
}
.ht-article-card__thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.ht-article-card__body {
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
}
.ht-article-card__text {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.ht-article-card__heading {
  font-family: 'Barlow', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.25;
  color: #2d2d2d;
  margin: 0;
  /* Up to 4 lines, then the excerpt follows immediately (no reserved gap). */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  overflow: hidden;
}
.ht-article-card__excerpt {
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.375;
  color: #6d6762;
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  overflow: hidden;
}
.ht-article-card__btn {
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--ht-dark, #2e2b26);
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  text-decoration: none;
  padding: 16px 24px;
  border-radius: 28px;
  transition: background 0.2s ease;
}
.ht-article-card__btn:hover {
  background: var(--ht-dark-hover, #1c1a17);
}

@media (min-width: 600px) {
  .ht-articles__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .ht-articles {
    padding: 80px 100px;
  }
  .ht-articles__inner {
    gap: 56px;
  }
  .ht-articles__subtitle {
    font-size: 22px;
  }
  .ht-articles__grid {
    grid-template-columns: repeat(4, 1fr);
  }
  .ht-article-card__thumb {
    aspect-ratio: 278 / 203;
  }
}
</style>
