/**
 * Curated articles for the HT "AIMO! znati uz AI" campaign.
 *
 * Single source of truth for two behaviours:
 *  - the articles section on the HT AI landing page renders these cards
 *    (pages/ht-ai-landing.vue); titles, excerpts and thumbnails are
 *    hardcoded copies of the production articles, no runtime API fetch
 *  - the HT AI Kalkulator popup shows only on these articles
 *    (pages/_category/_slug.vue, matched by slug)
 */
export const HT_CAMPAIGN_ARTICLES = [{
        slug: 'ai-drasticno-mijenja-trziste-rada-ovim-se-trendovima-poslodavci-i-posloprimci-moraju-prilagoditi-vec-danas',
        title: "'AI drastično mijenja tržište rada. Ovim se trendovima poslodavci i posloprimci moraju prilagoditi već danas'",
        excerpt: 'Što to znači u praksi otkrile su nam HR stručnjakinja i voditeljica portala posao.hr',
        image: '/ht-landing/article-1.jpg',
        link: '/partneri/ai-drasticno-mijenja-trziste-rada-ovim-se-trendovima-poslodavci-i-posloprimci-moraju-prilagoditi-vec-danas/',
    },
    {
        slug: 'djeca-danas-cesce-uce-uz-chatgpt-strucnjaci-nam-otkrivaju-kakve-ce-to-posljedice-ostaviti-na-skolstvo',
        title: 'Djeca danas češće uče uz ChatGPT. Stručnjaci nam otkrivaju kakve će to posljedice ostaviti na školstvo',
        excerpt: 'Dejan Nemčić objašnjava kako se sama srž učenja mijenja u trenutku kada je znanje dostupno na dlanu',
        image: '/ht-landing/article-2.jpg',
        link: '/partneri/djeca-danas-cesce-uce-uz-chatgpt-strucnjaci-nam-otkrivaju-kakve-ce-to-posljedice-ostaviti-na-skolstvo/',
    },
    {
        slug: 'philatz-je-uz-pomoc-ai-ja-ozivio-nostalgiju-cijele-jedne-generacije-hoce-li-ista-tehnologija-promijeniti-kreativnu-industriju',
        title: 'Philatz je uz pomoć AI-ja oživio nostalgiju cijele jedne generacije. Hoće li ista tehnologija promijeniti kreativnu industriju?',
        excerpt: 'Poslove koji su nekad trajali tjednima danas je moguće odraditi u sat vremena',
        image: '/ht-landing/article-3.jpg',
        link: '/partneri/philatz-je-uz-pomoc-ai-ja-ozivio-nostalgiju-cijele-jedne-generacije-hoce-li-ista-tehnologija-promijeniti-kreativnu-industriju/',
    },
    {
        slug: 'pred-omiljenog-lovca-stavili-smo-genijalan-izazov-koji-otkriva-koliko-vremena-umjetna-inteligencija-moze-ustedjeti',
        title: 'Pred omiljenog lovca stavili smo genijalan izazov koji otkriva koliko vremena umjetna inteligencija može uštedjeti',
        excerpt: 'Krešimir Sučević Međeral testirao je kako izgleda isti zadatak sa i bez AI-ja',
        image: '/ht-landing/article-4.webp',
        link: '/partneri/pred-omiljenog-lovca-stavili-smo-genijalan-izazov-koji-otkriva-koliko-vremena-umjetna-inteligencija-moze-ustedjeti/',
    },
]

export const HT_CAMPAIGN_ARTICLE_SLUGS = HT_CAMPAIGN_ARTICLES.map(
    (article) => article.slug
)