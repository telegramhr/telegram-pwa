export default ({ route }) => {
    if (sessionStorage.getItem('_diag_sent')) return

    setTimeout(() => {
        sessionStorage.setItem('_diag_sent', '1')

        const data = {
            ts: new Date().toISOString(),
            path: route.path,
            ua: navigator.userAgent,

            // DotMetrics
            dm_obj: typeof window.DotMetricsObj !== 'undefined',
            dm_window: typeof window.dm !== 'undefined',
            dm_ajaxCount: window.dm && Array.isArray(window.dm.AjaxData) ?
                window.dm.AjaxData.length :
                0,

            // Marfeel
            mrf_obj: typeof window.marfeel !== 'undefined',
            mrf_config: !!(window.marfeel && window.marfeel.config),

            // CMP / TCF
            tcfapi_exists: typeof window.__tcfapi === 'function',

            // Consent (populated async)
            consent_dm: null,
            consent_mrf: null,

            // Ad blocker (populated async)
            blocked_dotmetrics: null,
            blocked_marfeel: null,
        }

        const promises = []

        // TCF consent query
        promises.push(
            new Promise((resolve) => {
                if (typeof window.__tcfapi !== 'function') {
                    resolve()
                    return
                }
                let resolved = false
                try {
                    window.__tcfapi('getTCData', 2.2, (tcData, success) => {
                        if (resolved) return
                        resolved = true
                        if (success && tcData && tcData.vendor && tcData.vendor.consents) {
                            data.consent_dm = !!tcData.vendor.consents[896]
                            data.consent_mrf = !!tcData.vendor.consents[943]
                        }
                        resolve()
                    })
                } catch (e) {
                    resolved = true
                    resolve()
                }
                setTimeout(() => {
                    if (!resolved) {
                        resolved = true
                        resolve()
                    }
                }, 2000)
            })
        )

        // Ad blocker: DotMetrics domain
        promises.push(
            fetch('https://script.dotmetrics.net/door.js?id=1182', {
                method: 'HEAD',
                mode: 'no-cors',
            })
            .then(() => {
                data.blocked_dotmetrics = false
            })
            .catch(() => {
                data.blocked_dotmetrics = true
            })
        )

        // Ad blocker: Marfeel domain
        promises.push(
            fetch('https://sdk.mrf.io/statics/marfeel-sdk.js?id=1279', {
                method: 'HEAD',
                mode: 'no-cors',
            })
            .then(() => {
                data.blocked_marfeel = false
            })
            .catch(() => {
                data.blocked_marfeel = true
            })
        )

        Promise.allSettled(promises).then(() => {
            const blob = new Blob([JSON.stringify(data)], {
                type: 'application/json',
            })
            if (navigator.sendBeacon) {
                navigator.sendBeacon('/diagnostics/analytics', blob)
            } else {
                fetch('/diagnostics/analytics', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: { 'Content-Type': 'application/json' },
                    keepalive: true,
                }).catch(() => {})
            }
        })
    }, 5000)
}