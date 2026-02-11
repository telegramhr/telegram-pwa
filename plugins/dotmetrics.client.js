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
            if (doorLoaded) return
            doorLoaded = true
            appendDoorScript(path)
        }

        // Ideal path: wait for CMP consent API
        window.googlefc = window.googlefc || {}
        window.googlefc.callbackQueue = window.googlefc.callbackQueue || []
        window.googlefc.callbackQueue.push({
            CONSENT_API_READY: () => {
                loadOnce()
            },
        })

        // Fallback: if CMP doesn't load (ad blocker, etc.), load door.js anyway
        setTimeout(loadOnce, 2500)
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