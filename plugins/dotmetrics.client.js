export default ({ route }, inject) => {
    function check(path) {
        let dotmetricsId = '1182'
        if (
            path.includes('politika-kriminal') ||
            path.includes('biznis-tech') ||
            path.includes('komentari') ||
            path.includes('vijesti')
        ) {
            dotmetricsId = '15854'
        }
        if (
            path.includes('kultura') ||
            path.includes('zivot') ||
            path.includes('pitanje-zdravlja') ||
            path.includes('velike-price')
        ) {
            dotmetricsId = '15855'
        }
        if (path.includes('super1') || path.includes('superone')) {
            dotmetricsId = '4136'
        }
        if (path.includes('telesport') || path.includes('sport')) {
            dotmetricsId = '1175'
        }
        return dotmetricsId
    }

    function appendDoorScript(path) {
        const s = document.createElement('script')
        s.type = 'text/javascript'
        s.async = true
        s.src = 'https://script.dotmetrics.net/door.js?id=' + check(path)
        document.head.appendChild(s)
    }

    function load(path) {
        window.dm = window.dm || { AjaxData: [] }
        window.dm.AjaxEvent = function(et, d, ssid, ad) {
            window.dm.AjaxData.push({
                et,
                d,
                ssid,
                ad,
            })
            if (
                typeof window.DotMetricsObj !== 'undefined' &&
                window.DotMetricsObj.onAjaxDataUpdate
            ) {
                window.DotMetricsObj.onAjaxDataUpdate()
            }
        }

        let doorLoaded = false

        function loadOnce() {
            if (doorLoaded || window.__dmDoorInjected) return
            doorLoaded = true
            window.__dmDoorInjected = true
            appendDoorScript(path)
        }

        // The SSR'd head tag (nuxt.config.js, hid 'dotmetrics-door') normally
        // injects door.js long before this plugin can hydrate and sets
        // window.__dmDoorInjected, so everything below is usually a no-op. It
        // stays as a fallback for the case where the head tag never ran.
        window.googlefc = window.googlefc || {}
        window.googlefc.callbackQueue = window.googlefc.callbackQueue || []
        window.googlefc.callbackQueue.push({
            CONSENT_API_READY: () => {
                loadOnce()
            },
        })

        // Backstop for a CMP that is present but never fires CONSENT_API_READY.
        // door.js does its own TCF gating and only needs __tcfapi to exist, so
        // this is safe — but it must stay gated on that check. Loading bare is
        // what caused the original breach: with __tcfapi undefined door.js reads
        // it as "cmp does not use TCF", assumes full consent and writes
        // persistent identity cookies. The head tag owns the no-CMP case, where
        // it installs a no-consent TCF API before loading door.js anonymously.
        setTimeout(() => {
            if (typeof window.__tcfapi === 'function') {
                loadOnce()
            }
        }, 2500)
    }

    function postLoad(path) {
        if (typeof window.DotMetricsObj === 'undefined') {
            load(path)
        } else {
            window.dm.AjaxEvent('pageview', null, check(path))
        }
    }

    load(route.path)
    inject('dotmetrics', {
        load,
        check,
        postLoad,
    })
}