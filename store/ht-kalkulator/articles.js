/**
 * Curated articles for the HT "AIMO! znati uz AI" campaign.
 *
 * Single source of truth for two behaviours:
 *  - the articles section on the HT AI landing page fetches these posts
 *    via /api/single/{slug} (pages/ht-ai-landing.vue)
 *  - the HT AI Kalkulator popup shows only on these articles
 *    (pages/_category/_slug.vue)
 */
export const HT_CAMPAIGN_ARTICLE_SLUGS = [
  'ai-drasticno-mijenja-trziste-rada-ovim-se-trendovima-poslodavci-i-posloprimci-moraju-prilagoditi-vec-danas',
  'djeca-danas-cesce-uce-uz-chatgpt-strucnjaci-nam-otkrivaju-kakve-ce-to-posljedice-ostaviti-na-skolstvo',
  'philatz-je-uz-pomoc-ai-ja-ozivio-nostalgiju-cijele-jedne-generacije-hoce-li-ista-tehnologija-promijeniti-kreativnu-industriju',
]
