<template>
  <div
    :class="[
      'main-container',
      'flex',
      'single-article',
      typeClass,
      categoryClass,
    ]"
  >
    <template v-if="!($fetchState.error || post.title === 'Objava ne postoji')">
      <theader
        :id="Number(post.id)"
        :headline="post.portal_title"
        :post="post"
      ></theader>
      <client-only>
        <breaking></breaking>
        <hometop-ten></hometop-ten>
      </client-only>
      <!-- Above header banner manual -->
      <client-only>
        <div
          v-if="!$mobile && $route.name.includes('category-slug')"
          class="full center header-billboard have-background"
        >
          <div class="container wallpaper-banners animate">
            <div class="wallpaper-left">
              <ad-unit id="telegram_desktop_wallpaper_left"></ad-unit>
            </div>
            <div class="wallpaper-right">
              <ad-unit id="telegram_dekstop_wallpaper_right"></ad-unit>
            </div>
          </div>
        </div>
      </client-only>
      <div
        v-if="post.type === 'premium'"
        class="full premium-article-head relative"
      >
        <div v-if="post.image.author" class="meta-foto">
          FOTO: {{ post.image.author | parseCat }}
        </div>
        <img
          v-if="post.image.full"
          class="article-head-image"
          :src="post.image.full"
          :alt="post.image.alt"
          :width="post.image.width"
          :height="post.image.height"
        />
        <div class="full flex article-head">
          <div class="full flex overtitle-parent">
            <div
              class="noththree overtitle"
              :class="{
                'dynamic-overtitle': post.live,
                'overtitle-live': post.live && !post.live_end,
                'overtitle-live--finished': post.live && post.live_end,
              }"
            >
              <span v-if="post.live" class="dynamic-overtitle-element">{{
                post.live_end ? 'Završeno' : 'Uživo'
              }}</span>
              <AppLink
                :to="
                  post.overtitle_link
                    ? post.overtitle_link
                    : '/' + post.category_link
                "
              >
                {{ parsedOvertitle }}
              </AppLink>
              <client-only>
                <span
                  v-if="
                    this.$store.state.user.access && post.paywall === 'always'
                  "
                  class="fancy-overtitle-premium"
                >
                  <img
                    src="@/assets/img/t_logo.svg"
                    alt="Telegram monogram logo (T)"
                  />
                  Samo za pretplatnike
                </span>
              </client-only>
            </div>
            <div v-if="post.promo.partner" class="collab-overtitle">
              <div class="noththree overtitle">{{ post.promo.prefix }}</div>
              <img :src="post.promo.logo" :alt="post.promo.partner" />
            </div>
          </div>
          <h1 class="full">
            {{
              post.single_title !== ''
                ? post.single_title
                : post.portal_title | parseCat
            }}
          </h1>
          <h2 class="full">{{ post.subtitle | parseCat }}</h2>
        </div>
      </div>
      <div class="full relative">
        <div class="full">
          <client-only>
            <ad-unit id="telegram_background"></ad-unit>
          </client-only>
          <article
            id="article-body"
            class="container column-full-pad flex relative mobile-side-pad have-background"
            itemscope
            itemtype="http://schema.org/NewsArticle"
          >
            <div class="full column article-head column-top-pad flex">
              <div class="full flex overtitle-parent relative">
                <div
                  class="noththree overtitle"
                  :class="{
                    'dynamic-overtitle': post.live,
                    'overtitle-live': post.live && !post.live_end,
                    'overtitle-live--finished': post.live && post.live_end,
                  }"
                >
                  <span v-if="post.live" class="dynamic-overtitle-element">{{
                    post.live_end ? 'Završeno' : 'Uživo'
                  }}</span>
                  <AppLink
                    :to="
                      post.overtitle_link
                        ? post.overtitle_link
                        : '/' + post.category_link
                    "
                  >
                    {{ parsedOvertitle }}
                  </AppLink>
                </div>
                <client-only
                  ><span
                    v-if="
                      this.$store.state.user.access && post.paywall === 'always'
                    "
                    class="fancy-overtitle-premium"
                  >
                    <img
                      src="@/assets/img/t_logo.svg"
                      alt="Telegram monogram logo (T)"
                    />
                    Samo za pretplatnike
                  </span>
                </client-only>
                <div v-if="post.promo.partner" class="collab-overtitle">
                  <div class="noththree overtitle">{{ post.promo.prefix }}</div>
                  <a
                    v-if="post.promo.link"
                    :href="post.promo.link"
                    target="_blank"
                    rel="sponsored"
                  >
                    <img :src="post.promo.logo" :alt="post.promo.partner" />
                  </a>
                  <img
                    v-else
                    :src="post.promo.logo"
                    :alt="post.promo.partner"
                  />
                </div>
              </div>
              <div class="full nothone">
                <b v-if="categoryClass && categoryClass.includes('superone')">{{
                  parsedOvertitle
                }}</b>
                <h1 class="full" itemprop="headline">
                  {{
                    post.single_title !== ''
                      ? post.single_title
                      : post.portal_title | parseCat
                  }}
                </h1>
              </div>
              <h2 class="full">
                {{ post.subtitle | parseCat }}
              </h2>
              <div
                v-if="post.type === 'commentary'"
                class="nothfive full flex relative article-meta mobile-only"
              >
                <app-link
                  v-for="author in post.authors"
                  :key="author.name"
                  :to="author.url"
                  class="meta-author flex"
                  itemprop="author"
                  ><img
                    v-if="author.image"
                    :src="author.image"
                    :alt="author.name"
                  />
                  <span>Piše</span
                  ><span class="vcard author" rel="author">{{
                    author.name
                  }}</span></app-link
                >
                <client-only>
                  <subscribe-link
                    v-if="post.type === 'commentary'"
                    :author="post.authors[0]"
                  ></subscribe-link>
                </client-only>
                <div class="commentary-meta-other">
                  <time
                    class="meta-date"
                    :datetime="post.time | isoDatetime"
                    :title="post.time | parseReadableTime"
                    >{{ post.time | parseTime }}</time
                  >
                  <span
                    v-if="post.recommendations"
                    class="meta-preporuke"
                    itemprop="interactionStatistics"
                    >{{ post.recommendations }} preporuka</span
                  >
                </div>
              </div>
              <div
                v-if="post.type !== 'noimage'"
                class="nothfive full flex relative article-meta article-meta-nonCommentary"
              >
                <div class="meta-all">
                  <div class="meta-author-all">
                    <app-link
                      v-for="author in post.authors"
                      :key="author.name"
                      :to="author.url"
                      class="meta-author flex"
                      ><img
                        v-if="author.image"
                        :src="author.image"
                        :alt="author.name"
                      /><span>Piše</span
                      ><span
                        class="vcard author"
                        rel="author"
                        itemprop="author"
                        >{{ author.name }}</span
                      ></app-link
                    >
                  </div>
                  <div class="meta-other">
                    <div class="flex">
                      <time
                        class="meta-date"
                        :datetime="post.time | isoDatetime"
                        :title="post.time | parseReadableTime"
                        >{{ post.time | parseTime }}</time
                      >
                      <span
                        v-if="post.recommendations"
                        class="meta-preporuke"
                        itemprop="interactionStatistics"
                        >{{ post.recommendations }} preporuka</span
                      >
                    </div>
                    <client-only>
                      <action-bar
                        v-if="!post.audio || post.live"
                        :class="{
                          nonAudio: true,
                          nonComments:
                            post.category_slug.includes('superone') ||
                            post.category_slug.includes('pitanje-zdravlja') ||
                            post.category_slug.includes('openspace') ||
                            post.category_slug.includes('super1'),
                        }"
                        :comment-count="post.comments"
                        :is-premium="post.paywall === 'always'"
                        :paywall="post.paywall"
                        :article-id="post.id"
                        :article-title="post.portal_title || post.title"
                        :article-author="
                          post.authors && post.authors.length
                            ? post.authors[0].display_name
                            : ''
                        "
                        @comments="comments = !comments"
                        @share="fbShare()"
                      ></action-bar>
                    </client-only>
                  </div>
                </div>
                <div class="full flex relative article-meta desktop-only-meta">
                  <div class="meta-author-all">
                    <app-link
                      v-for="author in post.authors"
                      :key="author.name"
                      :to="author.url"
                      class="meta-author flex"
                      ><img
                        v-if="author.image"
                        :src="author.image"
                        :alt="author.name"
                      /><span>Piše</span
                      ><span
                        class="vcard author"
                        rel="author"
                        itemprop="author"
                        >{{ author.name }}</span
                      ></app-link
                    >
                  </div>
                  <time
                    class="meta-date"
                    :datetime="post.time | isoDatetime"
                    :title="post.time | parseReadableTime"
                    >{{ post.time | parseTime }}</time
                  >
                  <span
                    v-if="post.recommendations"
                    class="meta-preporuke"
                    itemprop="interactionStatistics"
                    >{{ post.recommendations }} preporuka</span
                  >
                  <client-only>
                    <action-bar
                      v-if="!post.audio || post.live"
                      :class="{
                        nonAudio: true,
                        nonComments:
                          post.category_slug.includes('superone') ||
                          post.category_slug.includes('pitanje-zdravlja') ||
                          post.category_slug.includes('openspace') ||
                          post.category_slug.includes('super1'),
                      }"
                      :comment-count="post.comments"
                      :is-premium="post.paywall === 'always'"
                      :paywall="post.paywall"
                      :article-id="post.id"
                      :article-title="post.portal_title || post.title"
                      :article-author="
                        post.authors && post.authors.length
                          ? post.authors[0].display_name
                          : ''
                      "
                      @comments="comments = !comments"
                      @share="fbShare()"
                    ></action-bar>
                  </client-only>
                </div>
              </div>
              <div
                v-if="post.type !== 'noimage' && (post.image.url || post.video)"
                class="full flex article-head-image-parent relative"
              >
                <template v-if="post.video">
                  <!-- eslint-disable-next-line -->
                  <div style="width: 100%" v-html="post.video" />
                </template>
                <template v-else>
                  <picture class="article-head-image" itemprop="image">
                    <source
                      :src="post.image.url"
                      :srcset="srcset"
                      type="image/webp"
                      width="888"
                      :height="
                        post.category_slug.includes('super1') ? 888 : 560
                      "
                    />
                    <img
                      :src="
                        post.category_slug.includes('super1')
                          ? post.image.s1jpg
                          : post.image.jpg
                      "
                      :alt="post.image.alt"
                      width="888"
                      :height="
                        post.category_slug.includes('super1') ? 888 : 560
                      "
                      fetchpriority="high"
                    />
                  </picture>
                  <div v-if="post.image.author" class="meta-foto">
                    FOTO: {{ post.image.author | parseCat }}
                  </div>
                </template>
              </div>
              <!-- eslint-disable-next-line -->
              <client-only>
                <action-bar
                  v-if="post.audio && !post.live"
                  :class="'with-audio'"
                  :comment-count="post.comments"
                  :audio="post.audio"
                  :is-premium="post.paywall === 'always'"
                  :paywall="post.paywall"
                  :article-id="post.id"
                  :article-title="post.portal_title || post.title"
                  :article-author="
                    post.authors && post.authors.length
                      ? post.authors[0].display_name
                      : ''
                  "
                  @play="() => $emit('play-audio')"
                  @gift="() => $emit('gift-article')"
                  @comments="comments = !comments"
                  @share="fbShare()"
                ></action-bar>
              </client-only>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <p
                v-if="post.perex"
                class="perex"
                itemprop="articleBody"
                v-html="post.perex"
              ></p>
            </div>

            <div class="full relative center single-top-banner">
              <div>
                <ad-unit
                  id="telegram_desktop_billboard_v1"
                  :disable="
                    post.disable_ads.includes('all') ||
                    (post.category_slug &&
                      post.category_slug.includes('openspace'))
                  "
                ></ad-unit>
              </div>
            </div>
            <div class="full relative single-article-body">
              <client-only>
                <mini-pretplata-new
                  v-if="canLogIn && post.paywall === 'always'"
                ></mini-pretplata-new>
              </client-only>
              <!-- eslint-disable vue/no-v-html -->
              <div
                id="article-content"
                class="cXenseParse mrf-article-body"
                itemprop="articleBody"
                @click="handleClick"
                v-html="post.content"
              ></div>
              <!--
                Live blog updates container.
                Renders reverse-chronological updates from ACF repeater.
                role="log" + aria-live="polite" for screen reader announcements.
                Polling detects new updates via lightweight /api/live-check endpoint,
                then full article is fetched only when user clicks "Novo ažuriranje".
              -->
              <div
                v-if="
                  post.live && post.live_updates && post.live_updates.length
                "
                class="live-updates-container"
                role="log"
                aria-live="polite"
                aria-label="Live ažuriranja"
              >
                <article
                  v-for="update in post.live_updates"
                  :id="update.anchor"
                  :key="update.anchor"
                  class="live-update"
                  :class="{ 'live-update--highlight': update.highlight }"
                >
                  <time
                    class="live-update__time"
                    :datetime="new Date(update.time * 1000).toISOString()"
                    :title="update.date_formatted + ' ' + update.time_formatted"
                  >
                    <span class="live-update__hour">{{
                      liveRelativeTime(update.time)
                    }}</span>
                  </time>
                  <div class="live-update__content">
                    <div class="live-update__header">
                      <h2 class="live-update__headline">
                        {{ update.headline }}
                      </h2>
                      <a
                        :href="'#' + update.anchor"
                        class="live-update__link"
                        :aria-label="'Kopiraj link na ' + update.headline"
                        title="Kopiraj link"
                        @click.prevent="copyAnchorLink(update.anchor)"
                        ><font-awesome-icon :icon="['fas', 'link']"
                      /></a>
                    </div>
                    <div
                      v-if="update.body.replace(/<[^>]*>/g, '').length <= 1000 || liveExpandedUpdates.includes(update.anchor)"
                      v-html="update.body"
                    ></div>
                    <template v-else>
                      <p>{{ update.body.replace(/<[^>]*>/g, '').substring(0, 300) }}...</p>
                      <button
                        class="live-update__read-more"
                        @click="liveExpandedUpdates.push(update.anchor)"
                      >
                        Pročitajte više
                      </button>
                    </template>
                  </div>
                </article>
              </div>
              <div class="remp-banner"></div>
              <client-only>
                <portal
                  v-if="
                    useSparPortal &&
                    !hasPremium &&
                    !(
                      post.disable_ads &&
                      (post.disable_ads.includes('spar') ||
                        post.disable_ads.includes('all'))
                    )
                  "
                  selector="#intext_premium"
                >
                  <div class="full">
                    <offers-premium></offers-premium>
                  </div>
                </portal>
                <portal v-if="showQuiz" selector="#quiz-container">
                  <quiz
                    v-if="post.quiz"
                    :data="post.quiz"
                    :post="parseInt(post.id)"
                  ></quiz>
                </portal>
                <portal
                  v-for="gallery in post.galleries"
                  :key="gallery.id"
                  :selector="`#gallery-${gallery.id}`"
                >
                  <gallery :gallery="gallery"></gallery>
                </portal>

                <portal
                  v-for="box in post.compare_boxes"
                  :key="box.id"
                  :selector="`#compare-box-${box.id}`"
                >
                  <img-comparison-slider>
                    <!-- eslint-disable vue/no-deprecated-slot-attribute -->
                    <img slot="first" style="width: 100%" :src="box.img1.url" />
                    <img
                      slot="second"
                      style="width: 100%"
                      :src="box.img2.url"
                    />
                    <!-- eslint-enable -->
                  </img-comparison-slider>
                </portal>
                <pretplata-promos></pretplata-promos>
              </client-only>
            </div>
          </article>
          <intext-remp></intext-remp>
          <!-- Article footer -->
          <div
            class="container column-full-pad flex relative mobile-side-pad have-background"
          >
            <div class="full relative single-article-body">
              <midas
                v-if="!hasPremium && hasLinker"
                :key="`midas-text-${post.id}`"
                type="text-only"
              ></midas>
              <div
                class="full relative single-article-footer flex column-top-pad"
              >
                <div class="half flex-responsive article-tags">
                  <app-link
                    v-for="tag in post.tags"
                    :key="tag.slug"
                    :to="'/tema/' + tag.slug"
                    >{{ tag.name }},
                  </app-link>
                </div>
                <div class="half flex-responsive">
                  <client-only>
                    <action-bar
                      :key="`action-bar-footer-${post.id}`"
                      :paywall="post.paywall"
                      :is-premium="post.paywall === 'always'"
                      :article-id="post.id"
                      :article-title="post.portal_title || post.title"
                      :article-author="
                        post.authors && post.authors.length
                          ? post.authors[0].display_name
                          : ''
                      "
                      class="nonAudio nonComments bottom"
                    ></action-bar>
                  </client-only>
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="
              !(
                post.category_slug.includes('super1') ||
                post.category_slug.includes('pitanje-zdravlja') ||
                post.category_slug.includes('openspace')
              )
            "
            class="full"
          >
            <top-articles-bottom
              v-if="top_articles"
              :algorithm-type="top_articles_version"
              :posts="top_articles.slice(3, 8)"
            ></top-articles-bottom>
          </div>
          <div
            v-if="
              post.id &&
              !post.category_slug.includes('superone') &&
              !post.category_slug.includes('pitanje-zdravlja') &&
              !post.category_slug.includes('openspace') &&
              !post.category_slug.includes('super1')
            "
            class="full relative column-top-pad commentsContainer"
          >
            <client-only>
              <comments :post="post"></comments>
            </client-only>
          </div>
        </div>
        <client-only>
          <div v-if="!hasPremium && hasLinker" class="full have-background">
            <midas :key="`midas-16-${post.id}`" type="standard-16"></midas>
          </div>
          <div
            v-if="
              !hasPremium &&
              !(post.disable_ads && post.disable_ads.includes('all'))
            "
            class="full has-background"
          >
            <div class="container flex center have-background">
              <div>
                <ad-unit id="telegram_underarticle_v2"></ad-unit>
              </div>
            </div>
          </div>
          <div class="container flex center have-background">
            <midas :key="`midas-ecoom-${post.id}`" type="ecomm"></midas>
            <div>
              <ad-unit id="telegram_underarticle_v1"></ad-unit>
            </div>
          </div>
          <keep-reading
            :category="$route.params.category"
            :p="Number(post.id)"
            :permalink="post.permalink"
            class="have-background"
          ></keep-reading>
        </client-only>
        <!--<ticker></ticker>-->
      </div>
    </template>
    <template v-if="$fetchState.error || post.title === 'Objava ne postoji'">
      <div class="full flex tg-red">
        <client-only>
          <theader
            :id="Number(post.id)"
            :headline="post.portal_title"
            :side-menu-show="showSideMenu"
            :search-menu-show="showSearchMenu"
          ></theader>
        </client-only>
        <div class="full header-filler filler-404"></div>
      </div>
      <div
        class="block-title news-block-title header-block-title full mobile-side-pad desktop-only"
      >
        <div class="full block-title-pattern relative"></div>
        <div class="container flex relative">
          <app-link to="/" class="logo column-left-pad" aria-label="Naslovnica"
            ><img
              src="@/assets/img/telegram_logo_white.svg"
              alt="Telegram logo"
          /></app-link>
          <h2 class="full column-horizontal-pad desktop-only site-subtitle">
            Nekad je nužno odabrati stranu
          </h2>
        </div>
      </div>
      <div class="full mobile-only filler-404 tg-red"></div>
      <img src="@/assets/img/tg_tear.png" aria-hidden="true" class="tear-404" />
      <div class="container relative mobile-side-pad column-full-pad">
        <div class="full center flex">
          <h1 class="full title-404 center-text">404</h1>
          <h2 class="full subtitle-404 center-text">
            Nažalost ova stranica nije pronađena.
          </h2>
          <p class="full text-404 center-text"></p>
        </div>
      </div>
      <!--<div class="full flex">
        <div
          class="container flex relative native-block stretch mobile-side-pad"
        >
          <div class="full column-horizontal-pad flex">
            <h2 class="full flex section-title">Možda će vas zanimati</h2>
          </div>
          <div class="fourth flex-responsive column-full-pad">
            <standard></standard>
          </div>
        </div>
        <div class="container flex relative mobile-side-pad">
        <div class="full center subtle-btn-parent relative clickable" onclick="requestArticles(this);">
          <div class="subtle-btn animate">Vidi više</div>
          <div class="subtle-btn-line"></div>
          <div class="full center cool-loader hide"><div class="loader-square"><div></div><div></div><div></div></div></div>
        </div>
      </div>
      </div>-->
    </template>
    <tfooter v-if="post.id || $fetchState.error" :post="post"></tfooter>
    <client-only>
      <div
        v-if="
          post.live &&
          !post.live_end &&
          post.live_updates &&
          post.live_updates.length
        "
        class="live-scroll-latest"
        role="button"
        tabindex="0"
        aria-label="Idi na najnovije ažuriranje"
        @click="scrollToLatest"
        @keydown.enter="scrollToLatest"
      >
        &#9650; Najnovije
      </div>
      <div
        v-if="livePendingUpdates"
        class="live-new-updates"
        role="button"
        tabindex="0"
        aria-label="Učitaj novo ažuriranje"
        @click="applyLiveUpdates"
        @keydown.enter="applyLiveUpdates"
      >
        &#9650; Novo ažuriranje
      </div>
    </client-only>
  </div>
</template>
<style scoped>
.meta-preporuke {
  margin-left: 10px;
}
.commentsContainer {
  max-width: 710px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
}
.meta-all {
  display: flex;
  gap: 24px;
  flex-direction: column;
}
.meta-author-all {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
.meta-other {
  display: flex;
  justify-content: space-between;
  width: 90vw;
}
.article-meta.desktop-only-meta {
  display: none !important;
}
.commentary-meta-other {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
  width: fit-content;
}
.commentary-meta-other .meta-date,
.commentary-meta-other .meta-preporuke {
  padding-top: 0 !important;
  margin: unset !important;
}
.article-head-newsletter {
  margin-bottom: 12px;
}
@media screen and (min-width: 600px) {
  .article-meta.desktop-only-meta {
    display: flex !important;
    padding-right: 0 !important;
  }
  .article-meta.desktop-only-meta .meta-date {
    margin-left: 10px;
  }
  .meta-all {
    display: none;
  }
}
@media screen and (min-width: 768px) {
  .commentsContainer {
    padding-left: 0px;
    padding-right: 0px;
  }
  .article-head-newsletter {
    margin-bottom: 0px;
  }
}

/* Live blog updates */
.live-updates-container {
  max-width: 710px;
  margin: 30px auto 0;
  padding: 0 20px;
  border-left: 3px solid var(--tg-primary-highlight-color);
}
.live-update {
  position: relative;
  padding: 16px 16px 16px 20px;
  scroll-margin-top: 80px;
}
.live-update::before {
  content: '';
  position: absolute;
  left: -7px;
  top: 24px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--tg-primary-highlight-color);
}
.live-update--highlight {
  background: var(--tg-secondary-background-color);
  border-radius: 4px;
}
.live-update__time {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 4px;
}
.live-update__hour {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 14px;
  font-weight: 600;
  color: var(--tg-primary-highlight-color);
}
.live-update__date {
  font-size: 12px;
  color: var(--tg-primary-text-color);
  opacity: 0.5;
}
.live-update__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}
.live-update__headline {
  font-family: 'Merriweather', serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.3;
  margin: 0 0 8px;
  color: var(--tg-primary-text-color);
  flex: 1;
}
.live-update__link {
  color: var(--tg-primary-text-color);
  opacity: 0.3;
  flex-shrink: 0;
  padding: 4px;
  font-size: 16px;
  transition: opacity 0.2s;
}
.live-update__link:hover {
  opacity: 0.7;
}
.live-update__read-more {
  background: none;
  border: none;
  color: var(--tg-primary-highlight-color);
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 4px 0;
  margin-top: 4px;
}
.live-update__read-more:hover {
  text-decoration: underline;
}
.live-update__content >>> img {
  max-width: 100%;
  height: auto;
  margin: 12px 0;
  border-radius: 4px;
}
.live-update__content >>> p {
  font-family: 'Merriweather', serif;
  margin: 0 0 8px;
  line-height: 1.6;
}

/* Scroll to latest button — right side */
.live-scroll-latest {
  position: fixed;
  bottom: 24px;
  right: 24px;
  background: var(--tg-secondary-background-color);
  color: var(--tg-primary-text-color);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 99;
  transition: transform 0.2s;
}
.live-scroll-latest:hover {
  transform: translateY(-2px);
}

/* New updates notification button — center */
.live-new-updates {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--tg-primary-highlight-color);
  color: white;
  padding: 10px 24px;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.25);
  z-index: 100;
  transition: transform 0.2s;
  white-space: nowrap;
}
.live-new-updates:hover {
  transform: translateX(-50%) translateY(-2px);
}

@media screen and (max-width: 767px) {
  .live-updates-container {
    padding: 0 16px;
  }
  .live-update__headline {
    font-size: 16px;
  }
  .live-new-updates {
    bottom: 16px;
    font-size: 13px;
    padding: 8px 18px;
  }
  .live-scroll-latest {
    bottom: 16px;
    right: 16px;
    font-size: 12px;
    padding: 6px 12px;
  }
}
</style>
<style>
.telegram-post-embed {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 12px 0;
}
.telegram-post-embed__link {
  display: block;
  text-decoration: none;
  color: inherit;
}
.telegram-post-embed__image {
  width: 100%;
  display: block;
  object-fit: cover;
}
.telegram-post-embed__content {
  padding: 12px 14px;
}
.telegram-post-embed__title {
  font-weight: 700;
  font-size: 15px;
  margin: 0 0 4px;
  color: var(--tg-primary-text-color);
}
.telegram-post-embed__excerpt {
  font-size: 13px;
  color: var(--tg-primary-text-color);
  opacity: 0.7;
  margin: 0;
}
</style>
<script>
import { Portal } from '@linusborg/vue-simple-portal'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
  name: 'Slug',
  scrollToTop: true,
  components: { Portal },
  async fetch() {
    if (!this.$route.params.slug && !this.$route.params.category) {
      return
    }
    // Clean up live blog state from previous article.
    // Nuxt 2 reuses _slug.vue across route changes — beforeDestroy doesn't fire,
    // so we must reset live state here in fetch() to avoid stale intervals/data.
    this.stopLivePolling()
    this.livePendingUpdates = null
    this.liveApplying = false
    this.liveRemoteCount = 0
    this.liveExpandedUpdates = []
    const slug = this.$route.params.slug || this.$route.params.category
    this.top_articles_version = Math.random() < 0.5 ? 'v1' : 'v2'
    const version = this.top_articles_version === 'v1' ? '1' : '2'
    let post
    if (process.client) {
      this.$nextTick(() => {
        this.$telegram.$loading.start()
      })
      post = this.$store.state.posts.posts[slug]
    }
    if (!post || !post.top_articles) {
      if (this.$route.params.category === 'preview') {
        post = await this.$axios.$get(encodeURI('/api/preview/' + slug))
      } else {
        post = await this.$axios.$get(
          encodeURI('/api/single/' + slug + '?version=' + version)
        )
      }
    }
    if (post && post.id) {
      this.top_articles = post.top_articles || []
      if (
        process.server &&
        this.$route.params.category !== 'preview' &&
        post.social.path.replace(this.$config.apiBaseUrl, '') !==
          this.$route.path
      ) {
        this.$telegram.context.res.statusCode = 301
        this.$telegram.context.res.setHeader(
          'Location',
          post.social.path.replace(this.$config.apiBaseUrl, '')
        )
        return
      }
      this.post = post
    } else {
      this.post.title = 'Objava ne postoji'
      this.post.portal_title = 'Objava ne postoji'
      // set status code on server and
      if (process.server) {
        this.$telegram.context.res.statusCode = 404
      }
    }
  },
  data() {
    return {
      useSparPortal: false,
      portal_title: '',
      single_title: '',
      showMidasIntext: false,
      showQuiz: false,
      comments: false,
      comments_embed: null,
      showSideMenu: false,
      showSearchMenu: false,
      widgetVariant: 'v1',
      post: {
        comments_off: false,
        type: '',
        image: {
          url: '',
          alt: '',
          author: '',
        },
        authors: [
          {
            url: '',
            name: '',
            image: '',
            newsletter_image: '',
            newsletter_list: 0,
          },
        ],
        overtitle: '',
        overtitle_tag: '',
        overtitle_link: '',
        intext_related_off: false,
        title: '',
        subtitle: '',
        content: '',
        recommendations: 0,
        comments: 0,
        time: 0,
        timem: 0,
        tags: [],
        category: '',
        category_slug: '',
        category_link: '#',
        social: {
          title: '',
          description: '',
          image: '',
          width: '',
          height: '',
          path: '',
        },
        disable_ads: [],
        promo: {
          signature_logo_off: false,
          partner: '',
        },
        quiz: null,
        live: false,
        live_end: null,
        live_updates: [],
      },
      // Live blog polling state
      livePollingInterval: null,    // setInterval ID for polling
      livePendingUpdates: null,     // true when server has more updates than local
      liveApplying: false,          // double-click guard for applyLiveUpdates
      liveRemoteCount: 0,           // server-reported count, used as cache-bust param ?v=
      liveTimeNow: Math.floor(Date.now() / 1000), // current time in seconds, ticks every 30s for relative time display
      liveTimeInterval: null,       // setInterval ID for liveTimeNow ticker
      liveExpandedUpdates: [],      // anchors of updates expanded by "Pročitajte više"
      top_articles: [],
      top_articles_version: 'v1',
      related_posts: [],
      hasLinker: false,
      giftValid: false,
    }
  },
  computed: {
    parsedOvertitle() {
      return this.$options.filters.parseCat(
        this.post.overtitle ? this.post.overtitle : this.post.category
      )
    },
    exclude() {
      if (
        (this.post.disable_ads && this.post.disable_ads.includes('spar')) ||
        this.post.category_slug.includes('superone')
      ) {
        return true
      }
      const terms = 'lidl'
      const filtered = this.post.tags.filter((tag) => {
        return terms.includes(tag.slug)
      })
      return !!filtered.length
    },
    hasPremium() {
      return this.$store.getters['user/hasPremium']
    },
    canLogIn() {
      return this.$store.getters['user/canLogIn']
    },
    jsonld() {
      const images = [
        {
          '@type': 'ImageObject',
          contentUrl: this.post.image.url,
          url: this.post.image.url,
          height: 505,
          width: 800,
          creditText: this.$options.filters.parseCat(this.post.image.author),
          caption: this.$options.filters.parseCat(this.post.image.alt),
          acquireLicensePage:
            'https://www.telegram.hr/stranica/uvjeti-koristenja',
          license: 'https://www.telegram.hr/stranica/uvjeti-koristenja',
          copyrightNotice: this.$options.filters.parseCat(
            this.post.image.author
          ),
          publisher: this.$store.state.header.publisher,
        },
      ]
      if (this.post.image.url2) {
        images.push({
          '@type': 'ImageObject',
          contentUrl: this.post.image.url2,
          url: this.post.image.url2,
          height: 1010,
          width: 1600,
          creditText: this.$options.filters.parseCat(this.post.image.author),
          caption: this.$options.filters.parseCat(this.post.image.alt),
          acquireLicensePage:
            'https://www.telegram.hr/stranica/uvjeti-koristenja',
          license: 'https://www.telegram.hr/stranica/uvjeti-koristenja',
          copyrightNotice: this.$options.filters.parseCat(
            this.post.image.author
          ),
        })
      }
      if (this.post.image.url3) {
        images.push({
          '@type': 'ImageObject',
          contentUrl: this.post.image.url3,
          url: this.post.image.url3,
          height: 1515,
          width: 2400,
          creditText: this.$options.filters.parseCat(this.post.image.author),
          caption: this.$options.filters.parseCat(this.post.image.alt),
          acquireLicensePage:
            'https://www.telegram.hr/stranica/uvjeti-koristenja',
          license: 'https://www.telegram.hr/stranica/uvjeti-koristenja',
          copyrightNotice: this.$options.filters.parseCat(
            this.post.image.author
          ),
        })
      }
      if (this.post.image.full) {
        images.push({
          '@type': 'ImageObject',
          contentUrl: this.post.image.full,
          url: this.post.image.full,
          height: this.post.image.height,
          width: this.post.image.width,
          creditText: this.$options.filters.parseCat(this.post.image.author),
          caption: this.$options.filters.parseCat(this.post.image.alt),
          acquireLicensePage:
            'https://www.telegram.hr/stranica/uvjeti-koristenja',
          license: 'https://www.telegram.hr/stranica/uvjeti-koristenja',
          copyrightNotice: this.$options.filters.parseCat(
            this.post.image.author
          ),
        })
      }
      if (this.post.image.facebook) {
        images.push({
          '@type': 'ImageObject',
          contentUrl: this.post.image.facebook,
          url: this.post.image.facebook,
          height: Math.round(
            (1200 * this.post.image.height) / this.post.image.width
          ),
          width: 1200,
          creditText: this.$options.filters.parseCat(this.post.image.author),
          caption: this.$options.filters.parseCat(this.post.image.alt),
          acquireLicensePage:
            'https://www.telegram.hr/stranica/uvjeti-koristenja',
          license: 'https://www.telegram.hr/stranica/uvjeti-koristenja',
          copyrightNotice: this.$options.filters.parseCat(
            this.post.image.author
          ),
        })
      }
      const breadcrumb = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: this.post.category,
            item: 'https://www.telegram.hr/' + this.post.category_link,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: this.post.title,
            item: this.post.social.path,
          },
        ],
      }
      const article = {
        '@context': 'https://schema.org',
        '@type': this.post.live
          ? 'LiveBlogPosting' // For live/breaking news
          : this.post.category === 'Komentari'
          ? 'OpinionNewsArticle'
          : 'NewsArticle',
        '@id': this.post.social.path,
        headline: this.$options.filters.parseCat(this.post.title),
        mainEntityOfPage: this.post.social.path,
        datePublished: new Date(this.post.time * 1000).toISOString(),
        dateModified: new Date(this.post.timem * 1000).toISOString(),
        image: images,
        publisher: this.$store.state.header.publisher,
        author: this.post.authors.map((author) => {
          const person = {
            '@type': 'Person',
            name: author.name,
          }
          if (author.url) person.url = author.url
          if (author.image) person.image = author.image
          if (author.description) person.description = author.description
          if (
            author.sameAs &&
            author.sameAs.length &&
            author.sameAs.some((s) => s.startsWith('http'))
          )
            person.sameAs = author.sameAs.filter((s) => s.startsWith('http'))
          return person
        }),
        keywords: this.post.tags.map((tag) => tag.slug),
        articleSection: [this.$options.filters.parseCat(this.post.category)],
      }
      // Google LiveBlogPosting structured data (schema.org)
      // coverageStartTime/EndTime define the live window for Google Search carousel.
      // liveBlogUpdate entries are BlogPosting with @id anchored to update URL.
      // articleBody is stripped of HTML/entities for clean plain text.
      if (this.post.live) {
        article.coverageStartTime = new Date(
          this.post.time * 1000
        ).toISOString()
        if (this.post.live_end) {
          article.coverageEndTime = new Date(
            this.post.live_end * 1000
          ).toISOString()
        }
        if (this.post.live_updates && this.post.live_updates.length) {
          article.liveBlogUpdate = this.post.live_updates.map((update) => {
            const url = this.post.social.path + '#' + update.anchor
            return {
              '@type': 'BlogPosting',
              '@id': url,
              headline: update.headline,
              datePublished: new Date(update.time * 1000).toISOString(),
              dateModified: new Date(update.time * 1000).toISOString(),
              articleBody: update.body
                .replace(/<[^>]*>/g, '')
                .replace(/&nbsp;/g, ' ')
                .replace(/&amp;/g, '&')
                .replace(/&[a-z]+;/gi, '')
                .replace(/&#\d+;/g, '')
                .trim(),
              url,
            }
          })
        }
      }
      if (this.post.paywall !== 'never') {
        article.isAccessibleForFree = false
        article.hasPart = {
          '@type': 'WebPageElement',
          isAccessibleForFree: false,
          cssSelector: '.piano-content',
        }
      }
      return [article, breadcrumb]
    },
    typeClass() {
      switch (this.post.type) {
        case 'premium':
          return 'single-article-premium single-article-premium-alt'
        case 'commentary':
          return 'single-article-commentary'
        default:
          return ''
      }
    },
    categoryClass() {
      return this.post.category_slug
    },
    srcset() {
      let set
      if (this.categoryClass && this.categoryClass.includes('superone')) {
        set = `${this.post.image.s1url}`
        if (this.post.image.s1url2) {
          set += `, ${this.post.image.s1url2} 2x`
        }
        if (this.post.image.s1url3) {
          set += `, ${this.post.image.s1url3} 3x`
        }
      } else {
        set = `${this.post.image.url}`
        if (this.post.image.url2) {
          set += `, ${this.post.image.url2} 2x`
        }
        if (this.post.image.url3) {
          set += `, ${this.post.image.url3} 3x`
        }
      }
      return set
    },
    locked() {
      if (this.giftValid) {
        return 'never'
      }
      return this.post.paywall
    },
  },
  watch: {
    'post.live': {
      handler(val) {
        if (val && !this.post.live_end) {
          this.startLivePolling()
        }
      },
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.getPost()
      window.addEventListener('scroll', this.handleScroll)
      if (this.$route.params.category === 'l') {
        window.history.replaceState({}, null, this.post.permalink)
      }
    })
    this.widgetVariant = this.getWidgetVariant()
    // Tick liveTimeNow every 30s so relative timestamps update
    this.liveTimeInterval = setInterval(() => {
      this.liveTimeNow = Math.floor(Date.now() / 1000)
    }, 30000)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    this.comments_embed = null
    this.stopLivePolling()
    if (this.liveTimeInterval) {
      clearInterval(this.liveTimeInterval)
      this.liveTimeInterval = null
    }
  },
  methods: {
    // Returns Croatian relative time string ("prije 2 min") for timestamps
    // within the last 12 hours, or formatted date/time for older entries.
    liveRelativeTime(unixSeconds) {
      const diff = this.liveTimeNow - unixSeconds
      if (diff < 0) return 'upravo sad'
      if (diff < 60) return 'upravo sad'
      if (diff < 3600) {
        const mins = Math.floor(diff / 60)
        return 'prije ' + mins + ' min'
      }
      if (diff < 43200) { // 12 hours
        const hours = Math.floor(diff / 3600)
        return 'prije ' + hours + ' h'
      }
      // Older than 12h — show date and time
      const d = new Date(unixSeconds * 1000)
      const day = d.getDate()
      const month = d.getMonth() + 1
      const year = d.getFullYear()
      const hours = String(d.getHours()).padStart(2, '0')
      const minutes = String(d.getMinutes()).padStart(2, '0')
      return day + '.' + month + '.' + year + '. ' + hours + ':' + minutes
    },
    handleScroll() {
      const walls = document.getElementsByClassName('wallpaper-banners')
      const bill =
        document
          .getElementById('telegram_desktop_billboard_v1')
          .getBoundingClientRect().top - 10
      if (bill < 0) {
        walls.forEach((item) => {
          item.classList.add('sticky-single-wallpaper')
        })
      } else {
        walls.forEach((item) => {
          item.classList.remove('sticky-single-wallpaper')
        })
      }
    },
    loadAds() {
      this.useSparPortal = true
      this.$store.dispatch('ads/initAds', {
        route: this.$route,
        options: this.post.disable_ads,
        tags: this.post.tags,
        category_slug: this.post.category_slug,
      })
      if (
        !this.post.disable_ads.includes('all') &&
        !this.post.disable_ads.includes('midas') &&
        !this.post.disable_ads.includes('nepromo')
      ) {
        this.hasLinker = true
      }
      if (this.hasPremium) {
        const midas = document.getElementById('intext_midas')
        const midas2 = document.getElementById('intext_midas2')
        if (midas) {
          midas.style.display = 'none'
        }
        if (midas2) {
          midas2.style.display = 'none'
        }
      }
    },
    loadRemp() {
      this.$store.dispatch('user/saveIP')
      window.remplib = window.remplib || {}
      const rempConfig = {
        token: 'd4fa2928-7d6a-4f6c-ac95-1f5a1ddd1702',
        signedIn: !!this.$store.state.user.id,
        userId: this.$store.state.user.id.toString() ?? '',
        userSubscribed: !!this.$store.state.user.access.length,
        cookieDomain: '.telegram.hr',
        storage: 'local_storage',
        storageExpiration: {
          default: 15,
          keys: {
            browser_id: 1051200,
            campaigns: 1051200,
          },
        },
        article: {
          id: this.post.id.toString(),
          category: this.post.category,
          locked: this.locked === 'always',
          tags: this.post.tags.map((tag) => {
            return tag.slug
          }),
          elementFn: () => {
            return document.getElementById('article-content')
          },
          author_id: this.post.authors[0].display_name,
        },
        tracker: {
          url: 'https://tracker.telegram.hr',
          timeSpent: {
            enabled: true,
          },
          canonicalUrl: 'https://tracker.telegram.hr',
        },
        campaign: {
          url: 'https://campaign.telegram.hr',
          pageviewAttributes: {
            postType: 'post',
            category: this.$route.params.category,
            groupCategory: [
              'velike-price',
              'vijesti',
              'komentari',
              'politika-kriminal',
            ].includes(this.$route.params.category)
              ? 1
              : 0,
            locked: this.post.paywall,
            isS1: this.post.category_slug.includes('super1') ? '1' : '0',
            segment: Math.floor(Math.random() * 4).toString(),
            userSubscribed: this.$store.state.user.access.length ? '1' : '0',
            ip: this.$store.state.user.ip,
            hasContentAccess: this.$store.getters['user/hasContentAccess'](
              this.$route.path
            )
              ? '1'
              : '0',
          },
        },
      }
      window.remplib.tracker.init(rempConfig)
      window.remplib.campaign.init(rempConfig)
    },
    loadPiano() {
      if (this.post.paywall === 'always' && this.$route.query.gift_token) {
        // verify token
        this.$axios
          .post('/pretplate/api/gift-article/verify', {
            token: this.$route.query.gift_token,
            url: this.post.permalink,
          })
          .then((res) => {
            if (res.status === 200) {
              window.marfeel = window.marfeel || { cmd: [] }
              window.marfeel.cmd.push([
                'compass',
                function (compass) {
                  compass.setPageVar('gifted', 'true')
                },
              ])
              this.giftValid = true
            }
          })
      }
      if (this.post.paywall === 'never') {
        return
      }
      const _that = this
      window.marfeel.cmd.push([
        'compass',
        function (compass) {
          if (_that.post.paywall === 'always') {
            compass.setPageVar('closed', 'hard-paywall')
          }
          if (
            _that.post.paywall === 'none' ||
            _that.post.paywall === 'paragraphs'
          ) {
            compass.setPageVar('closed', 'dynamic-paywall')
          }
        },
      ])
    },
    triggerAnalytics() {
      if (this.post.category_slug.includes('telesport')) {
        setTimeout(() => {
          this.$dotmetrics.postLoad(this.post.category_slug)
        }, 10000)
      }
    },
    getPost() {
      if (this.post && this.post.id) {
        if (process.client) {
          this.$telegram.$loading.finish()
        }
        if (this.post.quiz) {
          this.showQuiz = true
        }
        this.$store.commit('history/setData', this.post)
        this.triggerAnalytics()
        this.loadPiano()
        this.loadRemp()
        this.loadAds()
        if (this.$store.state.user.token && this.post.paywall === 'always') {
          this.$store.dispatch('gifts/getUserGifts')
        }
        this.loadInArticleWidget()
        this.$store.commit('pretplata/setLastArticle', this.post.id)
        if (typeof FB !== 'undefined') {
          FB.XFBML.parse()
        }
        /* global instgrm */
        if (typeof instgrm !== 'undefined') {
          instgrm.Embeds.process()
        }
        if (document.getElementsByClassName('twitter-tweet').length) {
          const head = document.getElementsByTagName('head')[0]
          const scriptTag = document.createElement('script')
          scriptTag.src = 'https://platform.twitter.com/widgets.js'
          head.append(scriptTag)
        }
        if (!document.getElementsByClassName('coral-counters-script').length) {
          const head = document.getElementsByTagName('head')[0]
          const scriptTag = document.createElement('script')
          scriptTag.classList.add('coral-counters-script')
          scriptTag.src = 'https://talk.telegram.hr/assets/js/count.js'
          head.append(scriptTag)
        }
        if (document.getElementsByClassName('tiktok-embed').length) {
          const head = document.getElementsByTagName('head')[0]
          const scriptTag = document.createElement('script')
          scriptTag.src = 'https://www.tiktok.com/embed.js'
          head.append(scriptTag)
        }
        if (document.getElementById('article-content')) {
          const images = [
            ...document
              .getElementById('article-content')
              .getElementsByTagName('img'),
          ]
          images.forEach((image) => {
            if (image.width < image.height) {
              image.classList.remove('size-full')
              if (image.parentElement.classList.contains('size-full')) {
                image.parentElement.classList.remove('size-full')
              }
            }
          })
        }
        if (this.post.content.indexOf('data-aos')) {
          this.$nextTick(() => {
            AOS.init()
            setTimeout(() => {
              AOS.refresh()
            }, 1000)
          })
        }
      } else {
        setTimeout(this.getPost, 500)
      }
    },
    loadInArticleWidget() {
      const container = document.getElementById('article-content')
      if (!container) return

      const paragraphs = container.querySelectorAll('p')
      if (paragraphs.length < 2) return
      if (this.post.id === 2774378) return

      // avoid duplicate injection
      if (document.getElementById('top-articles-widget')) return

      // create placeholder div
      const widgetEl = document.createElement('div')
      widgetEl.id = 'top-articles-widget'
      paragraphs[1].insertAdjacentElement('afterend', widgetEl)

      // Dynamically create and mount <top-articles> using this component’s context
      if (
        this.post.category_slug.includes('super1') ||
        this.post.category_slug.includes('pitanje-zdravlja') ||
        this.post.category_slug.includes('openspace')
      )
        return // do not show widget on super1, openspace, pitanje-zdravlja articles

      if (this.post.intext_related_off === '1') return
      const widget = new this.$root.constructor({
        parent: this, // inherit current context (so global components are visible)
        render: (h) =>
          h('top-articles-intext', {
            props: {
              posts: this.top_articles.slice(0, 3),
              algorithmType: this.top_articles_version,
            },
          }),
      })
      widget.$mount(widgetEl)
    },
    fbShare() {
      /* global FB */
      FB.ui(
        { method: 'share', href: this.post.social.path },
        function (response) {}
      )
    },
    handleClick(event) {
      // ensure we use the link, in case the click has been received by a subelement
      let { target } = event
      while (target && target.tagName !== 'A') target = target.parentNode
      // handle only links that occur inside the component and do not reference external resources
      if (
        target &&
        target.matches('#article-content a') &&
        target.href &&
        target.href.match(/^https?:\/\/www.telegram.hr/) &&
        !target.href.match(/^https?:\/\/www.telegram.hr\/native/)
      ) {
        // some sanity checks taken from vue-router:
        // https://github.com/vuejs/vue-router/blob/dev/src/components/link.js#L106
        const { altKey, ctrlKey, metaKey, shiftKey, button, defaultPrevented } =
          event
        // don't handle with control keys
        if (metaKey || altKey || ctrlKey || shiftKey) return
        // don't handle when preventDefault called
        if (defaultPrevented) return
        // don't handle right clicks
        if (button !== undefined && button !== 0) return
        // don't handle if `target="_blank"`
        if (target && target.getAttribute) {
          const linkTarget = target.getAttribute('target')
          if (/\b_blank\b/i.test(linkTarget)) return
        }
        // don't handle same page links/anchors
        const url = new URL(target.href)
        const to = url.pathname
        if (window.location.pathname !== to && event.preventDefault) {
          event.preventDefault()
          this.$router.push(to)
        }
      }
    },
    /**
     * Live blog polling system.
     *
     * Flow: startLivePolling() → pollLiveUpdates() every ~20s with jitter
     *   → hits lightweight /api/live-check/{id} (returns count + live_end only)
     *   → if count > local count, shows "Novo ažuriranje" button
     *   → user clicks → applyLiveUpdates() fetches full article with cache-busting
     *   → smooth scroll + fade animation to show new updates
     *
     * Cache busting: ?v={count} makes each update a unique URL for nginx proxy_cache.
     * Cache-Control: no-cache header bypasses browser HTTP cache without affecting server caches.
     * WordPress Redis cache is cleared on save_post via clear_pwa_cache() in Admin.php.
     */
    startLivePolling() {
      if (!this.post.live || this.post.live_end) return
      if (this.livePollingInterval) return
      this.pollLiveUpdates() // Immediate first check
      const jitter = 18000 + Math.random() * 4000 // 18-22s random to spread load
      this.livePollingInterval = setInterval(() => {
        this.pollLiveUpdates()
      }, jitter)
    },
    stopLivePolling() {
      if (this.livePollingInterval) {
        clearInterval(this.livePollingInterval)
        this.livePollingInterval = null
      }
    },
    async pollLiveUpdates() {
      try {
        // Lightweight endpoint — returns {count, live_end} only, no full article processing
        const data = await this.$axios.$get('/api/live-check/' + this.post.id)
        const currentCount = this.post.live_updates
          ? this.post.live_updates.length
          : 0
        if (data.count > currentCount) {
          this.livePendingUpdates = true
          this.liveRemoteCount = data.count
        }
        // If live_end is set, update post and stop polling permanently
        if (data.live_end) {
          this.$set(this.post, 'live_end', data.live_end)
          this.stopLivePolling()
        }
      } catch (e) {}
    },
    async applyLiveUpdates() {
      if (this.liveApplying) return // Double-click guard
      this.liveApplying = true
      try {
        const slug = this.$route.params.slug || this.$route.params.category
        // ?v={count} busts nginx proxy_cache (keyed by $request_uri)
        // Cache-Control: no-cache bypasses browser HTTP cache
        const data = await this.$axios.$get(
          encodeURI('/api/single/' + slug) + '?v=' + this.liveRemoteCount,
          { headers: { 'Cache-Control': 'no-cache' } }
        )
        const currentCount = this.post.live_updates
          ? this.post.live_updates.length
          : 0
        if (
          data &&
          data.live_updates &&
          data.live_updates.length > currentCount
        ) {
          const container = this.$el.querySelector('.live-updates-container')
          if (!container) {
            this.liveApplying = false
            return
          }

          // 1. Scroll to container with 10vh offset above
          const offset = window.innerHeight * 0.1
          const top =
            container.getBoundingClientRect().top + window.scrollY - offset
          window.scrollTo({ top, behavior: 'smooth' })

          // 2. Wait for scroll to finish, then swap content with fade animation
          // Uses both scrollend event and 800ms fallback (Safari doesn't support scrollend)
          let fired = false
          const onScrollDone = () => {
            if (fired) return // Guard against double-fire from both scrollend + fallback
            fired = true
            container.style.transition = 'opacity 0.15s ease'
            container.style.opacity = '0'

            setTimeout(() => {
              this.$set(this.post, 'live_updates', data.live_updates)
              this.livePendingUpdates = false

              this.$nextTick(() => {
                container.style.transition = 'opacity 0.4s ease'
                container.style.opacity = '1'
                setTimeout(() => {
                  container.style.transition = ''
                  this.liveApplying = false
                }, 500)
              })
            }, 150)
          }

          const fallback = setTimeout(onScrollDone, 800)
          window.addEventListener(
            'scrollend',
            () => {
              clearTimeout(fallback)
              onScrollDone()
            },
            { once: true }
          )
        } else {
          // Server returned same or fewer updates (cache not yet cleared) — allow retry
          this.liveApplying = false
        }
      } catch (e) {
        this.liveApplying = false
      }
    },
    copyAnchorLink(anchor) {
      const url = this.post.social.path + '#' + anchor
      if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
          const el = document.getElementById(anchor)
          if (!el) return
          const link = el.querySelector('.live-update__link')
          if (!link) return
          link.style.opacity = '1'
          setTimeout(() => {
            link.style.opacity = ''
          }, 1000)
        })
      }
    },
    // Scroll to the newest live update (first in array, since sorted reverse chronological)
    scrollToLatest() {
      if (this.post.live_updates && this.post.live_updates.length) {
        const el = document.getElementById(this.post.live_updates[0].anchor)
        if (el) {
          const top =
            el.getBoundingClientRect().top +
            window.scrollY -
            window.innerHeight * 0.1
          window.scrollTo({ top, behavior: 'smooth' })
        }
      }
    },
    getWidgetVariant() {
      const stored = localStorage.getItem('widgetVersion')
      if (stored) return stored

      const variant = Math.random() < 0.5 ? 'v1' : 'v2'
      localStorage.setItem('widgetVersion', variant)
      return variant
    },
  },
  head() {
    let link = [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: this.post.social.path,
      },
      {
        hid: 'block-styles',
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://www.telegram.hr/wp-includes/css/dist/block-library/style.min.css',
      },
      {
        hid: 'shortlink',
        rel: 'shortlink',
        href: `https://www.telegram.hr/l/${this.post.id}`,
      },
    ]
    let script = [
      {
        vmid: 'schema-ld',
        hid: 'schema-ld',
        type: 'application/ld+json',
        json: this.jsonld,
      },
      {
        hid: 'facebook',
        src: 'https://connect.facebook.net/hr_HR/sdk.js#xfbml=1&version=v11.0&appId=1383786971938581',
        async: true,
        defer: true,
        crossorigin: 'anonymous',
        nonce: 'LFZOW4mi',
      },
      {
        hid: 'instagram',
        src: 'https://www.instagram.com/static/bundles/metro/EmbedSDK.js/33cd2c5d5d59.js',
        async: true,
        defer: true,
      },
    ]
    // charts and tables
    if (this.post.tables) {
      const wdtStyles = [
        'bootstrap/wpdatatables-bootstrap.min.css',
        'bootstrap/bootstrap-select/bootstrap-select.min.css',
        'bootstrap/bootstrap-tagsinput/bootstrap-tagsinput.css',
        'bootstrap/bootstrap-datetimepicker/bootstrap-datetimepicker.min.css',
        'bootstrap/bootstrap-nouislider/bootstrap-nouislider.min.css',
        'bootstrap/bootstrap-datetimepicker/wdt-bootstrap-datetimepicker.min.css',
        'bootstrap/bootstrap-colorpicker/bootstrap-colorpicker.min.css',
        'style.min.css',
        'animate/animate.min.css',
        'uikit/uikit.css',
        'wdt.frontend.min.css',
        'wdt-skins/light.css',
        'wdt.simpleTable.min.css',
        'wpdatatables.min.css',
      ]
      wdtStyles.forEach((item) => {
        link.push({
          hid: item,
          rel: 'stylesheet',
          type: 'text/css',
          href:
            'https://www.telegram.hr/wp-content/plugins/wpdatatables/assets/css/' +
            item,
        })
      })
    }
    const fbPaywall = {
      none: 'metered',
      paragraphs: 'metered',
      always: 'locked',
      never: 'free',
    }
    if (this.post.tables) {
      const wdtScripts = [
        // 'wpdatatables/admin/common.js',
        // 'wpdatatables/wdt.frontend.min.js',
        'wpdatatables/wdt.chartsRender.min.js',
        'wpdatatables/wdt.apexcharts.min.js',
        /* 'bootstrap/bootstrap.min.js',
      'bootstrap/bootstrap-select/bootstrap-select.min.js',
      'bootstrap/bootstrap-select/ajax-bootstrap-select.min.js',
      'bootstrap/bootstrap-tagsinput/bootstrap-tagsinput.js',
      'moment/moment.js',
      'bootstrap/bootstrap-datetimepicker/bootstrap-datetimepicker.min.js',
      'bootstrap/bootstrap-nouislider/bootstrap-nouislider.min.js',
      'bootstrap/bootstrap-nouislider/wNumb.min.js',
      'bootstrap/bootstrap-colorpicker/bootstrap-colorpicker.min.js',
      'bootstrap/bootstrap-growl/bootstrap-growl.min.js', */
      ]
      script = [
        ...script,
        {
          hid: 'jquery',
          src: 'https://code.jquery.com/jquery-3.6.1.min.js',
        },
        {
          hid: 'wdt-apexcharts',
          src: 'https://cdn.jsdelivr.net/npm/apexcharts',
        },
        {
          hid: 'wdt_frontend_strings',
          innerHTML: 'var wpdatatables_frontend_strings = [];',
        },
      ]
      wdtScripts.forEach((item) => {
        script.push({
          hid: item,
          src:
            'https://www.telegram.hr/wp-content/plugins/wpdatatables/assets/js/' +
            item,
        })
      })
    }
    let meta = [
      {
        hid: 'cXenseParse:articleid',
        name: 'cXenseParse:articleid',
        content: this.post.id,
      },
      {
        hid: 'cXenseParse:image',
        name: 'cXenseParse:image',
        content: this.post.image.url,
      },
      {
        hid: 'cXenseParse:title',
        name: 'cXenseParse:title',
        content: this.$options.filters.parseCat(this.post.portal_title),
      },
      {
        hid: 'description',
        name: 'description',
        content: this.post.description,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: this.post.social.description,
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'article',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: this.$options.filters.parseCat(this.post.social.title),
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          this.$route.params.category === 'preview'
            ? '/img/tg_preview_placeholder.jpg'
            : this.post.social.image,
      },
      {
        hid: 'og:image:width',
        property: 'og:image:width',
        content: 1200,
      },
      {
        hid: 'og:image:height',
        property: 'og:image:height',
        content: Math.round(
          (1200 * this.post.image.height) / this.post.image.width
        ),
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: this.post.social.path,
      },
      {
        hid: 'fb:app_id',
        property: 'fb:app_id',
        content: '1383786971938581',
      },
      {
        hid: 'article:opinion',
        property: 'article:opinion',
        content: this.post.category === 'Komentari',
      },
      {
        hid: 'article:content_tier',
        property: 'article:content_tier',
        content: fbPaywall[this.post.paywall],
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:widgets:theme',
        name: 'twitter:widgets:theme',
        content: this.$store.state.theme.theme === 'dark' ? 'dark' : 'light',
      },
      {
        hid: 'robots',
        name: 'robots',
        content:
          this.$route.params.category === 'preview' ||
          this.post.status !== 'publish' ||
          this.post.tags.filter((tag) => tag.slug === 'demantij').length
            ? 'noindex, noarchive, nocache, nosnippet'
            : 'index, follow, max-image-preview:large, max-snippet:-1',
      },
      {
        hid: 'nrbi:sections',
        name: 'nrbi:sections',
        property: 'nrbi:sections',
        content: this.$options.filters.parseCat(this.post.category),
      },
      {
        hid: 'mrf:tags',
        name: 'mrf:tags',
        property: 'mrf:tags',
        content: this.post.tags.map((tag) => `keyword:${tag.slug}`).join(';'),
      },
    ]
    let siteName = 'Telegram.hr'
    if (this.post.category_slug.includes('superone')) {
      link = [
        ...link,
        {
          hid: 'favicon',
          rel: 'icon',
          href: '/s1_fav/favicon.ico',
        },
        {
          hid: 'apple-touch-icon',
          rel: 'apple-touch-icon',
          href: '/s1_fav/apple-touch-icon.png',
        },
        {
          hid: 'manifest',
          rel: 'manifest',
          href: '/s1_fav/site.webmanifest',
        },
      ]
      meta = [
        ...meta,
        {
          hid: 'apple-mobile-web-app-title',
          name: 'apple-mobile-web-app-title',
          content: 'Super1.hr',
        },
      ]
      siteName = 'Super1.hr'
    }
    const style = [
      {
        id: 'global-styles',
        innerHTML: this.post.styles || '',
      },
    ]
    if (this.post.additional_scripts) {
      Object.keys(this.post.additional_scripts).forEach((item) => {
        script.push({
          hid: `additional-script-${item}`,
          src: this.post.additional_scripts[item],
        })
      })
    }
    if (this.post.additional_styles) {
      Object.keys(this.post.additional_styles).forEach((item) => {
        style.push({
          hid: `additional-style-${item}`,
          rel: 'stylesheet',
          type: 'text/css',
          innerHTML: this.post.additional_styles[item],
        })
      })
    }
    return {
      bodyAttrs: {
        class: [this.$store.state.theme.theme, this.post.category_slug],
      },
      title: this.$options.filters.parseCat(this.post.title),
      titleTemplate: `%s | ${siteName}`,
      meta,
      script,
      link,
      style,
    }
  },
  bodyAppend() {
    const wdtScripts = [
      // 'wpdatatables/admin/common.js',
      // 'wpdatatables/wdt.frontend.min.js',
      'wpdatatables/wdt.chartsRender.min.js',
      'wpdatatables/wdt.apexcharts.min.js',
      /* 'bootstrap/bootstrap.min.js',
      'bootstrap/bootstrap-select/bootstrap-select.min.js',
      'bootstrap/bootstrap-select/ajax-bootstrap-select.min.js',
      'bootstrap/bootstrap-tagsinput/bootstrap-tagsinput.js',
      'moment/moment.js',
      'bootstrap/bootstrap-datetimepicker/bootstrap-datetimepicker.min.js',
      'bootstrap/bootstrap-nouislider/bootstrap-nouislider.min.js',
      'bootstrap/bootstrap-nouislider/wNumb.min.js',
      'bootstrap/bootstrap-colorpicker/bootstrap-colorpicker.min.js',
      'bootstrap/bootstrap-growl/bootstrap-growl.min.js', */
    ]
    const script = [
      {
        hid: 'jquery',
        src: 'https://code.jquery.com/jquery-3.6.1.min.js',
      },
      {
        hid: 'wdt-apexcharts',
        src: 'https://cdn.jsdelivr.net/npm/apexcharts',
      },
      {
        hid: 'wdt_frontend_strings',
        innerHTML: 'var wpdatatables_frontend_strings = [];',
      },
    ]
    wdtScripts.forEach((item) => {
      script.push({
        hid: item,
        src:
          'https://www.telegram.hr/wp-content/plugins/wpdatatables/assets/js/' +
          item,
      })
    })
    return {
      script,
    }
  },
}
</script>
