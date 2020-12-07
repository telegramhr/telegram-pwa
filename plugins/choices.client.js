/* eslint-disable */
export default ({ app }) => {
  ;(function (w) {
    ;(function () {
      /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
      'use strict'
      const g = function (a) {
        let b = 0
        return function () {
          return b < a.length ? { done: !1, value: a[b++] } : { done: !0 }
        }
      }
      const l = this || self
      const m = /^[\w+/_-]+[=]{0,2}$/
      let p = null
      const q = function () {}
      const r = function (a) {
        const b = typeof a
        if (b == 'object')
          if (a) {
            if (Array.isArray(a)) return 'array'
            if (a instanceof Object) return b
            const c = Object.prototype.toString.call(a)
            if (c == '[object Window]') return 'object'
            if (
              c == '[object Array]' ||
              (typeof a.length === 'number' &&
                typeof a.splice !== 'undefined' &&
                typeof a.propertyIsEnumerable !== 'undefined' &&
                !a.propertyIsEnumerable('splice'))
            )
              return 'array'
            if (
              c == '[object Function]' ||
              (typeof a.call !== 'undefined' &&
                typeof a.propertyIsEnumerable !== 'undefined' &&
                !a.propertyIsEnumerable('call'))
            )
              return 'function'
          } else return 'null'
        else if (b == 'function' && typeof a.call === 'undefined')
          return 'object'
        return b
      }
      const u = function (a, b) {
        function c() {}
        c.prototype = b.prototype
        a.prototype = new c()
        a.prototype.constructor = a
      }
      const v = function (a, b) {
        Object.defineProperty(l, a, {
          configurable: !1,
          get() {
            return b
          },
          set: q,
        })
      }
      const y = function (a, b) {
        this.b = (a === w && b) || ''
        this.a = x
      }
      var x = {}
      var w = {}
      const aa = function (a, b) {
        a.src =
          b instanceof y && b.constructor === y && b.a === x
            ? b.b
            : 'type_error:TrustedResourceUrl'
        if (p === null)
          b: {
            b = l.document
            if (
              (b = b.querySelector && b.querySelector('script[nonce]')) &&
              (b = b.nonce || b.getAttribute('nonce')) &&
              m.test(b)
            ) {
              p = b
              break b
            }
            p = ''
          }
        b = p
        b && a.setAttribute('nonce', b)
      }
      const z = function () {
        return (
          Math.floor(2147483648 * Math.random()).toString(36) +
          Math.abs(
            Math.floor(2147483648 * Math.random()) ^ +new Date()
          ).toString(36)
        )
      }
      const A = function (a, b) {
        b = String(b)
        a.contentType === 'application/xhtml+xml' && (b = b.toLowerCase())
        return a.createElement(b)
      }
      const B = function (a) {
        this.a = a || l.document || document
      }
      B.prototype.appendChild = function (a, b) {
        a.appendChild(b)
      }
      var C = function (a, b, c, d, e, f) {
        try {
          const k = a.a
          const h = A(a.a, 'SCRIPT')
          h.async = !0
          aa(h, b)
          k.head.appendChild(h)
          h.addEventListener('load', function () {
            e()
            d && k.head.removeChild(h)
          })
          h.addEventListener('error', function () {
            c > 0 ? C(a, b, c - 1, d, e, f) : (d && k.head.removeChild(h), f())
          })
        } catch (n) {
          f()
        }
      }
      const ba = l.atob(
        'aHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vaW1hZ2VzL2ljb25zL21hdGVyaWFsL3N5c3RlbS8xeC93YXJuaW5nX2FtYmVyXzI0ZHAucG5n'
      )
      const ca = l.atob(
        'WW91IGFyZSBzZWVpbmcgdGhpcyBtZXNzYWdlIGJlY2F1c2UgYWQgb3Igc2NyaXB0IGJsb2NraW5nIHNvZnR3YXJlIGlzIGludGVyZmVyaW5nIHdpdGggdGhpcyBwYWdlLg=='
      )
      const da = l.atob(
        'RGlzYWJsZSBhbnkgYWQgb3Igc2NyaXB0IGJsb2NraW5nIHNvZnR3YXJlLCB0aGVuIHJlbG9hZCB0aGlzIHBhZ2Uu'
      )
      const ea = function (a, b, c) {
        this.b = a
        this.f = new B(this.b)
        this.a = null
        this.c = []
        this.g = !1
        this.i = b
        this.h = c
      }
      const F = function (a) {
        if (a.b.body && !a.g) {
          const b = function () {
            D(a)
            l.setTimeout(function () {
              return E(a, 3)
            }, 50)
          }
          C(
            a.f,
            a.i,
            2,
            !0,
            function () {
              l[a.h] || b()
            },
            b
          )
          a.g = !0
        }
      }
      var D = function (a) {
        for (var b = G(1, 5), c = 0; c < b; c++) {
          var d = H(a)
          a.b.body.appendChild(d)
          a.c.push(d)
        }
        b = H(a)
        b.style.bottom = '0'
        b.style.left = '0'
        b.style.position = 'fixed'
        b.style.width = G(100, 110).toString() + '%'
        b.style.zIndex = G(2147483544, 2147483644).toString()
        b.style['background-color'] = I(249, 259, 242, 252, 219, 229)
        b.style['box-shadow'] = '0 0 12px #888'
        b.style.color = I(0, 10, 0, 10, 0, 10)
        b.style.display = 'flex'
        b.style['justify-content'] = 'center'
        b.style['font-family'] = 'Roboto, Arial'
        c = H(a)
        c.style.width = G(80, 85).toString() + '%'
        c.style.maxWidth = G(750, 775).toString() + 'px'
        c.style.margin = '24px'
        c.style.display = 'flex'
        c.style['align-items'] = 'flex-start'
        c.style['justify-content'] = 'center'
        d = A(a.f.a, 'IMG')
        d.className = z()
        d.src = ba
        d.style.height = '24px'
        d.style.width = '24px'
        d.style['padding-right'] = '16px'
        const e = H(a)
        const f = H(a)
        f.style['font-weight'] = 'bold'
        f.textContent = ca
        const k = H(a)
        k.textContent = da
        J(a, e, f)
        J(a, e, k)
        J(a, c, d)
        J(a, c, e)
        J(a, b, c)
        a.a = b
        a.b.body.appendChild(a.a)
        b = G(1, 5)
        for (c = 0; c < b; c++) (d = H(a)), a.b.body.appendChild(d), a.c.push(d)
      }
      var J = function (a, b, c) {
        for (var d = G(1, 5), e = 0; e < d; e++) {
          const f = H(a)
          b.appendChild(f)
        }
        b.appendChild(c)
        c = G(1, 5)
        for (d = 0; d < c; d++) (e = H(a)), b.appendChild(e)
      }
      var G = function (a, b) {
        return Math.floor(a + Math.random() * (b - a))
      }
      var I = function (a, b, c, d, e, f) {
        return (
          'rgb(' +
          G(Math.max(a, 0), Math.min(b, 255)).toString() +
          ',' +
          G(Math.max(c, 0), Math.min(d, 255)).toString() +
          ',' +
          G(Math.max(e, 0), Math.min(f, 255)).toString() +
          ')'
        )
      }
      var H = function (a) {
        a = A(a.f.a, 'DIV')
        a.className = z()
        return a
      }
      var E = function (a, b) {
        b <= 0 ||
          (a.a != null && a.a.offsetHeight != 0 && a.a.offsetWidth != 0) ||
          (fa(a),
          D(a),
          l.setTimeout(function () {
            return E(a, b - 1)
          }, 50))
      }
      var fa = function (a) {
        let b = a.c
        let c =
          typeof Symbol !== 'undefined' && Symbol.iterator && b[Symbol.iterator]
        b = c ? c.call(b) : { next: g(b) }
        for (c = b.next(); !c.done; c = b.next())
          (c = c.value) && c.parentNode && c.parentNode.removeChild(c)
        a.c = []
        ;(b = a.a) && b.parentNode && b.parentNode.removeChild(b)
        a.a = null
      }
      const ia = function (a, b, c, d, e) {
        const f = ha(c)
        const k = function (n) {
          n.appendChild(f)
          l.setTimeout(function () {
            f
              ? (f.offsetHeight !== 0 && f.offsetWidth !== 0 ? b() : a(),
                f.parentNode && f.parentNode.removeChild(f))
              : a()
          }, d)
        }
        var h = function (n) {
          document.body
            ? k(document.body)
            : n > 0
            ? l.setTimeout(function () {
                h(n - 1)
              }, e)
            : b()
        }
        h(3)
      }
      var ha = function (a) {
        const b = document.createElement('div')
        b.className = a
        b.style.width = '1px'
        b.style.height = '1px'
        b.style.position = 'absolute'
        b.style.left = '-10000px'
        b.style.top = '-10000px'
        b.style.zIndex = '-10000'
        return b
      }
      const K = {}
      let L = null
      const M = function () {}
      const N = typeof Uint8Array === 'function'
      const O = function (a, b) {
        a.b = null
        b || (b = [])
        a.j = void 0
        a.f = -1
        a.a = b
        a: {
          if ((b = a.a.length)) {
            --b
            const c = a.a[b]
            if (
              !(
                c === null ||
                typeof c !== 'object' ||
                Array.isArray(c) ||
                (N && c instanceof Uint8Array)
              )
            ) {
              a.g = b - a.f
              a.c = c
              break a
            }
          }
          a.g = Number.MAX_VALUE
        }
        a.i = {}
      }
      const P = []
      const Q = function (a, b) {
        if (b < a.g) {
          b += a.f
          var c = a.a[b]
          return c === P ? (a.a[b] = []) : c
        }
        if (a.c) return (c = a.c[b]), c === P ? (a.c[b] = []) : c
      }
      const R = function (a, b, c) {
        a.b || (a.b = {})
        if (!a.b[c]) {
          const d = Q(a, c)
          d && (a.b[c] = new b(d))
        }
        return a.b[c]
      }
      M.prototype.h = N
        ? function () {
            const a = Uint8Array.prototype.toJSON
            Uint8Array.prototype.toJSON = function () {
              let b
              void 0 === b && (b = 0)
              if (!L) {
                L = {}
                for (
                  var c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(
                      ''
                    ),
                    d = ['+/=', '+/', '-_=', '-_.', '-_'],
                    e = 0;
                  e < 5;
                  e++
                ) {
                  var f = c.concat(d[e].split(''))
                  K[e] = f
                  for (var k = 0; k < f.length; k++) {
                    var h = f[k]
                    void 0 === L[h] && (L[h] = k)
                  }
                }
              }
              b = K[b]
              c = []
              for (d = 0; d < this.length; d += 3) {
                let n = this[d]
                let t = (e = d + 1 < this.length) ? this[d + 1] : 0
                h = (f = d + 2 < this.length) ? this[d + 2] : 0
                k = n >> 2
                n = ((n & 3) << 4) | (t >> 4)
                t = ((t & 15) << 2) | (h >> 6)
                h &= 63
                f || ((h = 64), e || (t = 64))
                c.push(b[k], b[n], b[t] || '', b[h] || '')
              }
              return c.join('')
            }
            try {
              return JSON.stringify(this.a && this.a, S)
            } finally {
              Uint8Array.prototype.toJSON = a
            }
          }
        : function () {
            return JSON.stringify(this.a && this.a, S)
          }
      var S = function (a, b) {
        return typeof b !== 'number' ||
          (!isNaN(b) && Infinity !== b && -Infinity !== b)
          ? b
          : String(b)
      }
      M.prototype.toString = function () {
        return this.a.toString()
      }
      const T = function (a) {
        O(this, a)
      }
      u(T, M)
      const U = function (a) {
        O(this, a)
      }
      u(U, M)
      const ja = function (a, b) {
        this.c = new B(a)
        let c = R(b, T, 5)
        c = new y(w, Q(c, 4) || '')
        this.b = new ea(a, c, Q(b, 4))
        this.a = b
      }
      const ka = function (a, b, c, d) {
        b = new T(b ? JSON.parse(b) : null)
        b = new y(w, Q(b, 4) || '')
        C(a.c, b, 3, !1, c, function () {
          ia(
            function () {
              F(a.b)
              d(!1)
            },
            function () {
              d(!0)
            },
            Q(a.a, 2),
            Q(a.a, 3),
            Q(a.a, 1)
          )
        })
      }
      const la = function (a, b) {
        V(a, 'internal_api_load_with_sb', function (c, d, e) {
          ka(b, c, d, e)
        })
        V(a, 'internal_api_sb', function () {
          F(b.b)
        })
      }
      var V = function (a, b, c) {
        a = l.btoa(a + b)
        v(a, c)
      }
      const W = function (a, b, c) {
        for (var d = [], e = 2; e < arguments.length; ++e)
          d[e - 2] = arguments[e]
        e = l.btoa(a + b)
        e = l[e]
        if (r(e) == 'function') e.apply(null, d)
        else throw new Error('API not exported.')
      }
      const X = function (a) {
        O(this, a)
      }
      u(X, M)
      const Y = function (a) {
        this.h = window
        this.a = a
        this.b = Q(this.a, 1)
        this.f = R(this.a, T, 2)
        this.g = R(this.a, U, 3)
        this.c = !1
      }
      Y.prototype.start = function () {
        ma()
        const a = new ja(this.h.document, this.g)
        la(this.b, a)
        na(this)
      }
      var ma = function () {
        var a = function () {
          if (!l.frames.googlefcPresent)
            if (document.body) {
              const b = document.createElement('iframe')
              b.style.display = 'none'
              b.style.width = '0px'
              b.style.height = '0px'
              b.style.border = 'none'
              b.style.zIndex = '-1000'
              b.style.left = '-1000px'
              b.style.top = '-1000px'
              b.name = 'googlefcPresent'
              document.body.appendChild(b)
            } else l.setTimeout(a, 5)
        }
        a()
      }
      var na = function (a) {
        const b = Date.now()
        W(
          a.b,
          'internal_api_load_with_sb',
          a.f.h(),
          function () {
            let c
            let d = a.b
            let e = l[l.btoa(d + 'loader_js')]
            if (e) {
              e = l.atob(e)
              e = parseInt(e, 10)
              d = l.btoa(d + 'loader_js').split('.')
              let f = l
              d[0] in f ||
                typeof f.execScript === 'undefined' ||
                f.execScript('var ' + d[0])
              for (; d.length && (c = d.shift()); )
                d.length
                  ? f[c] && f[c] !== Object.prototype[c]
                    ? (f = f[c])
                    : (f = f[c] = {})
                  : (f[c] = null)
              c = Math.abs(b - e)
              c = c < 1728e5 ? 0 : c
            } else c = -1
            c != 0 && (W(a.b, 'internal_api_sb'), Z(a, Q(a.a, 6)))
          },
          function (c) {
            Z(a, c ? Q(a.a, 4) : Q(a.a, 5))
          }
        )
      }
      var Z = function (a, b) {
        a.c ||
          ((a.c = !0),
          (a = new l.XMLHttpRequest()),
          a.open('GET', b, !0),
          a.send())
      }
      ;(function (a, b) {
        l[a] = function (c) {
          for (var d = [], e = 0; e < arguments.length; ++e)
            d[e - 0] = arguments[e]
          l[a] = q
          b.apply(null, d)
        }
      })('__d3lUW8vwsKlB__', function (a) {
        typeof window.atob === 'function' &&
          ((a = window.atob(a)),
          (a = new X(a ? JSON.parse(a) : null)),
          new Y(a).start())
      })
    }.call(this))
    w.__d3lUW8vwsKlB__(
      'WyI5NjI0NjFhZWY4ZDNjNTIxIixbbnVsbCxudWxsLG51bGwsImh0dHBzOi8vZnVuZGluZ2Nob2ljZXNtZXNzYWdlcy5nb29nbGUuY29tL2YvQUdTS1d4VjFWTk5xWlFXcGFPeTQ4Y25oZlNuZWw2ZTVWSWxrTS16d1g0VnZfOU1LVVBpWFJrLWJpSFlyNG5FWWs0cF9JVjJicVp5aVdNRWxzN1ZIRUJQRElVRVx1MDAzZCJdCixbMjAsImRpdi1ncHQtYWQiLDEwMCwiT1RZeU5EWXhZV1ZtT0dRell6VXlNUVx1MDAzZFx1MDAzZCIsW251bGwsbnVsbCxudWxsLCJodHRwczovL3d3dy5nc3RhdGljLmNvbS8wZW1uL2YvcC85NjI0NjFhZWY4ZDNjNTIxLmpzP3VzcXBcdTAwM2RDQWMiXQpdCiwiaHR0cHM6Ly9mdW5kaW5nY2hvaWNlc21lc3NhZ2VzLmdvb2dsZS5jb20vbC9BR1NLV3hXN1NZUHBkNW1FSkZDNTVwUDZwdDZHZmk1OVU4OGZ1WFh5bmYxSlcyX2Nscld4MkwzV1p1UTgzeFBIM2M3YkVyRmg4M2JCcjhMUVJzUnhENGZUP2FiXHUwMDNkMSIsImh0dHBzOi8vZnVuZGluZ2Nob2ljZXNtZXNzYWdlcy5nb29nbGUuY29tL2wvQUdTS1d4Vy1wZ1h6MlhydVVNcndiU09Nc3Z4X0VmQlZRRVlNRllDN0k0ZjdTT2c2aGdtNEF0VWVObWJhZXRKMXJIeEhZZUR2SktWQ3dTZmFOdF9aUm5YaT9hYlx1MDAzZDJcdTAwMjZzYmZcdTAwM2QxIiwiaHR0cHM6Ly9mdW5kaW5nY2hvaWNlc21lc3NhZ2VzLmdvb2dsZS5jb20vbC9BR1NLV3hXcEt3UlRhaGZyNDJKTTRGT1ZWUW1pd2VqdTJ0bmlBSlE3TUNTVWUwdVd0RmdMcGxkTWdoa0RWTUdSZHUtRng1ak1UYWsweXlIdkZwRmlZb0VYP3NiZlx1MDAzZDIiXQo='
    )
  })(window)
}
