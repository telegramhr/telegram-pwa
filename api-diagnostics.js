const fs = require('fs')
const path = require('path')

const LOG_FILE = path.join(__dirname, 'diagnostics-analytics.log')
const MAX_BODY = 10240

module.exports = function(req, res) {
    if (req.method !== 'POST') {
        res.statusCode = 405
        res.end()
        return
    }

    const chunks = []
    let size = 0

    req.on('data', (chunk) => {
        size += chunk.length
        if (size > MAX_BODY) {
            res.statusCode = 413
            res.end()
            req.destroy()
            return
        }
        chunks.push(chunk)
    })

    req.on('end', () => {
        try {
            const body = Buffer.concat(chunks).toString('utf8')
            const data = JSON.parse(body)
            data._serverTs = new Date().toISOString()
            data._ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress

            fs.appendFile(LOG_FILE, JSON.stringify(data) + '\n', (err) => {
                if (err) {
                    console.error('[diagnostics] write error:', err.message)
                    res.statusCode = 500
                } else {
                    res.statusCode = 204
                }
                res.end()
            })
        } catch (e) {
            res.statusCode = 400
            res.end()
        }
    })

    req.on('error', () => {
        res.statusCode = 500
        res.end()
    })
}