/* eslint-disable */
export default ({ route }, inject) => {
  function parse(path, category_slug) {
    let pp_gemius_identifier = 'nSblbvtw7YnzUiC8AtarvJdS3yggumM2F_xjEZ.9W1..57'
    if ((category_slug && category_slug.includes('politika-kriminal')) || path.includes('/politika-kriminal')) {
      pp_gemius_identifier = 'B8LrC2M_SDgyAhNNdFR0m7bvPzHwbSNkjTfp3wsMi9T.T7'
    }
    else if ((category_slug && category_slug.includes('biznis-tech')) || path.includes('/biznis-tech')) {
      pp_gemius_identifier = 'B8LlDWM_7dM4HvpilXmwCLbv353wbWMat5lj3jhrA2z.H7'
    }
    else if ((category_slug && category_slug.includes('kultura')) || path.includes('/kultura')) {
      pp_gemius_identifier = 'nczrCvuiSDiTTzjVqj3v_JeAfXAgAzrQTPxnBVuL3iv.d7'
    }
    else if ((category_slug && category_slug.includes('sport')) || path.includes('/sport')) {
      pp_gemius_identifier = 'nSdLaPtwWDjz8rNOgspcbpbyP_ggyiNot0lj3JiKi6H.G7'
    }
    else if ((category_slug && category_slug.includes('velike-price')) || path.includes('/velike-price')) {
      pp_gemius_identifier = 'nSbrCPtwSAGdwXMWSgCUMuVzP1IdASN00odjESlss0D.j7'
    }
    else if ((category_slug && category_slug.includes('zivot')) || path.includes('/zivot')) {
      pp_gemius_identifier = 'nSdLyvtwW.A9i9jJKh9.c_UTHZEdEXuOnL7hjdYBhsX.h7'
    }
    else if ((category_slug && category_slug.includes('superone')) || path.includes('/super1')) {
      pp_gemius_identifier = 'zD3q8PgBo_V9omhMQ2MA95dSXhYgui8o54R37RQllmv.J7'
    }
    return pp_gemius_identifier
  }

  function postLoad(path, category_slug) {
    if (typeof(window.pp_gemius_hit) == 'undefined') {
      init(path, category_slug)
    } else {
      window.pp_gemius_hit(parse(path, category_slug))
    }
  }

  function gemius_pending(i) {
    window[i] =
      window[i] ||
      function () {
        const x = (window[i + '_pdata'] = window[i + '_pdata'] || [])
        x[x.length] = arguments
      }
  }

  function init(path, category_slug) {
    window.pp_gemius_use_cmp = true
    window.pp_gemius_identifier = parse(path, category_slug)

    gemius_pending('gemius_hit')
    gemius_pending('gemius_event')
    gemius_pending('pp_gemius_hit')
    gemius_pending('pp_gemius_event')

    ;(function (d, t) {
      try {
        const gt = d.createElement(t)
        const s = d.getElementsByTagName(t)[0]
        gt.setAttribute('async', 'async')
        gt.setAttribute('defer', 'defer')
        gt.src = 'https://hr.hit.gemius.pl/xgemius.js'
        s.parentNode.insertBefore(gt, s)
      } catch (e) {}
    })(document, 'script')
  }
  if (!route.name.includes('slug')) {
    postLoad(route.path, '')
  }

  inject('gemius', { postLoad })
}
