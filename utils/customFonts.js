/*
 * Editor-selectable custom fonts whose stylesheets are loaded per page,
 * only when the rendered content actually uses them.
 *
 * Slugs must match the `has-<slug>-font-family` utility classes that the
 * block editor stamps on blocks (registered in the telegram-desktop theme,
 * functions-shared.php) and the matching classes in assets/style.css.
 * `family` is the CSS family name the classic editor (TinyMCE) writes as
 * an inline style (`<span style="font-family: aukio-std, ...">`) — as a
 * regex source, since inline usage carries no class to match on.
 */
const CUSTOM_FONTS = [
  {
    slug: 'termina',
    family: 'termina',
    href: 'https://use.typekit.net/rhj2chq.css',
  },
  {
    slug: 'aukio',
    family: 'aukio-std',
    href: 'https://use.typekit.net/wpf5opw.css',
  },
  {
    slug: 'degular',
    family: 'degular',
    href: 'https://use.typekit.net/ijo6mdc.css',
  },
  {
    slug: 'inter',
    family: 'Inter\\b',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
  {
    slug: 'clash-display',
    family: 'Clash Display',
    href: 'https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap',
  },
]

/*
 * Fields that carry CSS/JS rather than editor content. WordPress global
 * styles (post.styles) define `.has-<slug>-font-family` rules for EVERY
 * registered font on every post, so scanning them would load every font
 * everywhere.
 */
const NON_CONTENT_KEYS = ['styles', 'additional_styles', 'additional_scripts']

/**
 * Head link objects for the custom fonts referenced in the post's content.
 * Scans every field of the post (content, perex, live updates, captions...)
 * except the CSS/JS ones above.
 *
 * @param {object} post
 * @returns {Array<{hid: string, rel: string, href: string}>}
 */
export function customFontLinks(post) {
  if (!post) {
    return []
  }

  const html = JSON.stringify(post, (key, value) =>
    NON_CONTENT_KEYS.includes(key) ? undefined : value
  )

  // Match the block editor's utility class or a classic-editor inline
  // declaration where the font is the first family listed. The character
  // class only lets whitespace, quotes and JSON escapes sit between
  // `font-family:` and the name, so `var(--wp--preset...)` never matches.
  return CUSTOM_FONTS.filter(
    (font) =>
      html.includes(`has-${font.slug}-font-family`) ||
      new RegExp(`font-family:[\\s"'\\\\]*${font.family}`, 'i').test(html)
  ).map((font) => ({
    hid: `font-${font.slug}`,
    rel: 'stylesheet',
    href: font.href,
  }))
}
