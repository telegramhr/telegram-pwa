export default ({ route }) => {
    if (sessionStorage.getItem('_diag_sent')) return
    sessionStorage.setItem('_diag_sent', '1')

    // Snapshot script state at a given moment
    function snapshot() {
        return {
            dm_obj: typeof window.DotMetricsObj !== 'undefined',
            dm_window: typeof window.dm !== 'undefined',
            mrf_obj: typeof window.marfeel !== 'undefined',
        }
    }

    // TCF consent (resolved once, reused for all beacons)
    const tcfData = { consent_dm: null, consent_mrf: null, tcf_status: null }
    const tcfReady = new Promise((resolve) => {
        if (typeof window.__tcfapi !== 'function') { resolve(); return }
        let done = false
        try {
            window.__tcfapi('addEventListener', 2.2, (td, success) => {
                if (done) return
                done = true
                tcfData.tcf_status = td ? td.eventStatus : 'no-tcData'
                if (success && td && td.vendor && td.vendor.consents) {
                    tcfData.consent_dm = !!td.vendor.consents[896]
                    tcfData.consent_mrf = !!td.vendor.consents[943]
                }
                resolve()
            })
        } catch (e) { done = true;
            resolve() }
        setTimeout(() => { if (!done) { done = true;
                resolve() } }, 2000)
    })

    // Ad blocker checks (resolved once, reused for all beacons)
    const blockerData = { blocked_dotmetrics: null, blocked_marfeel: null }
    const blockerReady = Promise.allSettled([
        fetch('https://script.dotmetrics.net/door.js?id=1182', { method: 'HEAD', mode: 'no-cors' })
        .then(() => { blockerData.blocked_dotmetrics = false })
        .catch(() => { blockerData.blocked_dotmetrics = true }),
        fetch('https://sdk.mrf.io/statics/marfeel-sdk.js?id=1279', { method: 'HEAD', mode: 'no-cors' })
        .then(() => { blockerData.blocked_marfeel = false })
        .catch(() => { blockerData.blocked_marfeel = true }),
    ])

    function send(checkpointSec, snap) {
        const data = {
            ts: new Date().toISOString(),
            t: checkpointSec,
            path: route.path,
            ua: navigator.userAgent,
            tcfapi_exists: typeof window.__tcfapi === 'function',
            ...snap,
            ...tcfData,
            ...blockerData,
        }
        const blob = new Blob([JSON.stringify(data)], { type: 'application/json' })
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
    }

    const ready = Promise.all([tcfReady, blockerReady])

    setTimeout(() => { ready.then(() => send(2, snapshot())) }, 2000)
    setTimeout(() => { ready.then(() => send(5, snapshot())) }, 5000)
    setTimeout(() => { ready.then(() => send(8, snapshot())) }, 8000)
}