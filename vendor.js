!function(e) {
    function __webpack_require__(n) {
        if (t[n])
            return t[n].exports;
        var i = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, __webpack_require__),
        i.l = !0,
        i.exports
    }
    var t = {};
    __webpack_require__.m = e,
    __webpack_require__.c = t,
    __webpack_require__.i = function(e) {
        return e
    }
    ,
    __webpack_require__.d = function(e, t, n) {
        __webpack_require__.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }
    ,
    __webpack_require__.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return __webpack_require__.d(t, "a", t),
        t
    }
    ,
    __webpack_require__.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    __webpack_require__.p = "/assets/js/",
    __webpack_require__(__webpack_require__.s = 340)
}({
    115: function(e, t) {
        !function(t, n) {
            var i = n(t, t.document);
            t.lazySizes = i,
            "object" == typeof e && e.exports && (e.exports = i)
        }(window, function(e, t) {
            "use strict";
            if (t.getElementsByClassName) {
                var n, i, a = t.documentElement, r = e.Date, s = e.HTMLPictureElement, o = "addEventListener", l = "getAttribute", d = e[o], u = e.setTimeout, c = e.requestAnimationFrame || u, p = e.requestIdleCallback, f = /^picture$/i, h = ["load", "error", "lazyincluded", "_lazyloaded"], v = {}, m = Array.prototype.forEach, g = function(e, t) {
                    return v[t] || (v[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")),
                    v[t].test(e[l]("class") || "") && v[t]
                }, y = function(e, t) {
                    g(e, t) || e.setAttribute("class", (e[l]("class") || "").trim() + " " + t)
                }, b = function(e, t) {
                    var n;
                    (n = g(e, t)) && e.setAttribute("class", (e[l]("class") || "").replace(n, " "))
                }, x = function(e, t, n) {
                    var i = n ? o : "removeEventListener";
                    n && x(e, t),
                    h.forEach(function(n) {
                        e[i](n, t)
                    })
                }, w = function(e, i, a, r, s) {
                    var o = t.createEvent("CustomEvent");
                    return a || (a = {}),
                    a.instance = n,
                    o.initCustomEvent(i, !r, !s, a),
                    e.dispatchEvent(o),
                    o
                }, T = function(t, n) {
                    var a;
                    !s && (a = e.picturefill || i.pf) ? a({
                        reevaluate: !0,
                        elements: [t]
                    }) : n && n.src && (t.src = n.src)
                }, C = function(e, t) {
                    return (getComputedStyle(e, null) || {})[t]
                }, E = function(e, t, n) {
                    for (n = n || e.offsetWidth; n < i.minSize && t && !e._lazysizesWidth; )
                        n = t.offsetWidth,
                        t = t.parentNode;
                    return n
                }, S = function() {
                    var e, n, i = [], a = [], r = i, s = function() {
                        var t = r;
                        for (r = i.length ? a : i,
                        e = !0,
                        n = !1; t.length; )
                            t.shift()();
                        e = !1
                    }, o = function(i, a) {
                        e && !a ? i.apply(this, arguments) : (r.push(i),
                        n || (n = !0,
                        (t.hidden ? u : c)(s)))
                    };
                    return o._lsFlush = s,
                    o
                }(), k = function(e, t) {
                    return t ? function() {
                        S(e)
                    }
                    : function() {
                        var t = this
                          , n = arguments;
                        S(function() {
                            e.apply(t, n)
                        })
                    }
                }, M = function(e) {
                    var t, n = 0, a = i.ricTimeout, s = function() {
                        t = !1,
                        n = r.now(),
                        e()
                    }, o = p && i.ricTimeout ? function() {
                        p(s, {
                            timeout: a
                        }),
                        a !== i.ricTimeout && (a = i.ricTimeout)
                    }
                    : k(function() {
                        u(s)
                    }, !0);
                    return function(e) {
                        var i;
                        (e = !0 === e) && (a = 33),
                        t || (t = !0,
                        i = 125 - (r.now() - n),
                        i < 0 && (i = 0),
                        e || i < 9 && p ? o() : u(o, i))
                    }
                }, z = function(e) {
                    var t, n, i = 99, a = function() {
                        t = null,
                        e()
                    }, s = function() {
                        var e = r.now() - n;
                        e < i ? u(s, i - e) : (p || a)(a)
                    };
                    return function() {
                        n = r.now(),
                        t || (t = u(s, i))
                    }
                };
                !function() {
                    var t, n = {
                        lazyClass: "lazyload",
                        loadedClass: "lazyloaded",
                        loadingClass: "lazyloading",
                        preloadClass: "lazypreload",
                        errorClass: "lazyerror",
                        autosizesClass: "lazyautosizes",
                        srcAttr: "data-src",
                        srcsetAttr: "data-srcset",
                        sizesAttr: "data-sizes",
                        minSize: 40,
                        customMedia: {},
                        init: !0,
                        expFactor: 1.5,
                        hFac: .8,
                        loadMode: 2,
                        loadHidden: !0,
                        ricTimeout: 300
                    };
                    i = e.lazySizesConfig || e.lazysizesConfig || {};
                    for (t in n)
                        t in i || (i[t] = n[t]);
                    e.lazySizesConfig = i,
                    u(function() {
                        i.init && D()
                    })
                }();
                var P = function() {
                    var s, c, p, h, v, E, P, D, N, L, $, I, O, H, j = /^img$/i, F = /^iframe$/i, q = "onscroll"in e && !/glebot/.test(navigator.userAgent), R = 0, B = 0, _ = 0, X = -1, W = function(e) {
                        _--,
                        e && e.target && x(e.target, W),
                        (!e || _ < 0 || !e.target) && (_ = 0)
                    }, G = function(e, n) {
                        var i, r = e, s = "hidden" == C(t.body, "visibility") || "hidden" != C(e, "visibility");
                        for (D -= n,
                        $ += n,
                        N -= n,
                        L += n; s && (r = r.offsetParent) && r != t.body && r != a; )
                            (s = (C(r, "opacity") || 1) > 0) && "visible" != C(r, "overflow") && (i = r.getBoundingClientRect(),
                            s = L > i.left && N < i.right && $ > i.top - 1 && D < i.bottom + 1);
                        return s
                    }, Y = function() {
                        var e, r, o, d, u, p, f, v, m, g = n.elements;
                        if ((h = i.loadMode) && _ < 8 && (e = g.length)) {
                            r = 0,
                            X++,
                            null == O && ("expand"in i || (i.expand = a.clientHeight > 500 && a.clientWidth > 500 ? 500 : 370),
                            I = i.expand,
                            O = I * i.expFactor),
                            B < O && _ < 1 && X > 2 && h > 2 && !t.hidden ? (B = O,
                            X = 0) : B = h > 1 && X > 1 && _ < 6 ? I : R;
                            for (; r < e; r++)
                                if (g[r] && !g[r]._lazyRace)
                                    if (q)
                                        if ((v = g[r][l]("data-expand")) && (p = 1 * v) || (p = B),
                                        m !== p && (E = innerWidth + p * H,
                                        P = innerHeight + p,
                                        f = -1 * p,
                                        m = p),
                                        o = g[r].getBoundingClientRect(),
                                        ($ = o.bottom) >= f && (D = o.top) <= P && (L = o.right) >= f * H && (N = o.left) <= E && ($ || L || N || D) && (i.loadHidden || "hidden" != C(g[r], "visibility")) && (c && _ < 3 && !v && (h < 3 || X < 4) || G(g[r], p))) {
                                            if (te(g[r]),
                                            u = !0,
                                            _ > 9)
                                                break
                                        } else
                                            !u && c && !d && _ < 4 && X < 4 && h > 2 && (s[0] || i.preloadAfterLoad) && (s[0] || !v && ($ || L || N || D || "auto" != g[r][l](i.sizesAttr))) && (d = s[0] || g[r]);
                                    else
                                        te(g[r]);
                            d && !u && te(d)
                        }
                    }, V = M(Y), U = function(e) {
                        y(e.target, i.loadedClass),
                        b(e.target, i.loadingClass),
                        x(e.target, Q),
                        w(e.target, "lazyloaded")
                    }, K = k(U), Q = function(e) {
                        K({
                            target: e.target
                        })
                    }, J = function(e, t) {
                        try {
                            e.contentWindow.location.replace(t)
                        } catch (n) {
                            e.src = t
                        }
                    }, Z = function(e) {
                        var t, n = e[l](i.srcsetAttr);
                        (t = i.customMedia[e[l]("data-media") || e[l]("media")]) && e.setAttribute("media", t),
                        n && e.setAttribute("srcset", n)
                    }, ee = k(function(e, t, n, a, r) {
                        var s, o, d, c, h, v;
                        (h = w(e, "lazybeforeunveil", t)).defaultPrevented || (a && (n ? y(e, i.autosizesClass) : e.setAttribute("sizes", a)),
                        o = e[l](i.srcsetAttr),
                        s = e[l](i.srcAttr),
                        r && (d = e.parentNode,
                        c = d && f.test(d.nodeName || "")),
                        v = t.firesLoad || "src"in e && (o || s || c),
                        h = {
                            target: e
                        },
                        v && (x(e, W, !0),
                        clearTimeout(p),
                        p = u(W, 2500),
                        y(e, i.loadingClass),
                        x(e, Q, !0)),
                        c && m.call(d.getElementsByTagName("source"), Z),
                        o ? e.setAttribute("srcset", o) : s && !c && (F.test(e.nodeName) ? J(e, s) : e.src = s),
                        r && (o || c) && T(e, {
                            src: s
                        })),
                        e._lazyRace && delete e._lazyRace,
                        b(e, i.lazyClass),
                        S(function() {
                            (!v || e.complete && e.naturalWidth > 1) && (v ? W(h) : _--,
                            U(h))
                        }, !0)
                    }), te = function(e) {
                        var t, n = j.test(e.nodeName), a = n && (e[l](i.sizesAttr) || e[l]("sizes")), r = "auto" == a;
                        (!r && c || !n || !e[l]("src") && !e.srcset || e.complete || g(e, i.errorClass) || !g(e, i.lazyClass)) && (t = w(e, "lazyunveilread").detail,
                        r && A.updateElem(e, !0, e.offsetWidth),
                        e._lazyRace = !0,
                        _++,
                        ee(e, t, r, a, n))
                    }, ne = function() {
                        if (!c) {
                            if (r.now() - v < 999)
                                return void u(ne, 999);
                            var e = z(function() {
                                i.loadMode = 3,
                                V()
                            });
                            c = !0,
                            i.loadMode = 3,
                            V(),
                            d("scroll", function() {
                                3 == i.loadMode && (i.loadMode = 2),
                                e()
                            }, !0)
                        }
                    };
                    return {
                        _: function() {
                            v = r.now(),
                            n.elements = t.getElementsByClassName(i.lazyClass),
                            s = t.getElementsByClassName(i.lazyClass + " " + i.preloadClass),
                            H = i.hFac,
                            d("scroll", V, !0),
                            d("resize", V, !0),
                            e.MutationObserver ? new MutationObserver(V).observe(a, {
                                childList: !0,
                                subtree: !0,
                                attributes: !0
                            }) : (a[o]("DOMNodeInserted", V, !0),
                            a[o]("DOMAttrModified", V, !0),
                            setInterval(V, 999)),
                            d("hashchange", V, !0),
                            ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function(e) {
                                t[o](e, V, !0)
                            }),
                            /d$|^c/.test(t.readyState) ? ne() : (d("load", ne),
                            t[o]("DOMContentLoaded", V),
                            u(ne, 2e4)),
                            n.elements.length ? (Y(),
                            S._lsFlush()) : V()
                        },
                        checkElems: V,
                        unveil: te
                    }
                }()
                  , A = function() {
                    var e, n = k(function(e, t, n, i) {
                        var a, r, s;
                        if (e._lazysizesWidth = i,
                        i += "px",
                        e.setAttribute("sizes", i),
                        f.test(t.nodeName || ""))
                            for (a = t.getElementsByTagName("source"),
                            r = 0,
                            s = a.length; r < s; r++)
                                a[r].setAttribute("sizes", i);
                        n.detail.dataAttr || T(e, n.detail)
                    }), a = function(e, t, i) {
                        var a, r = e.parentNode;
                        r && (i = E(e, r, i),
                        a = w(e, "lazybeforesizes", {
                            width: i,
                            dataAttr: !!t
                        }),
                        a.defaultPrevented || (i = a.detail.width) && i !== e._lazysizesWidth && n(e, r, a, i))
                    }, r = function() {
                        var t, n = e.length;
                        if (n)
                            for (t = 0; t < n; t++)
                                a(e[t])
                    }, s = z(r);
                    return {
                        _: function() {
                            e = t.getElementsByClassName(i.autosizesClass),
                            d("resize", s)
                        },
                        checkElems: s,
                        updateElem: a
                    }
                }()
                  , D = function() {
                    D.i || (D.i = !0,
                    A._(),
                    P._())
                };
                return n = {
                    cfg: i,
                    autoSizer: A,
                    loader: P,
                    init: D,
                    uP: T,
                    aC: y,
                    rC: b,
                    hC: g,
                    fire: w,
                    gW: E,
                    rAF: S
                }
            }
        })
    },
    116: function(e, t, n) {
        !function(t, n) {
            e.exports = n()
        }(0, function() {
            "use strict";
            function e(e, t) {
                var n = []
                  , i = 0;
                if (e && !t && e instanceof r)
                    return e;
                if (e)
                    if ("string" == typeof e) {
                        var a, s, o = e.trim();
                        if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                            var l = "div";
                            for (0 === o.indexOf("<li") && (l = "ul"),
                            0 === o.indexOf("<tr") && (l = "tbody"),
                            0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (l = "tr"),
                            0 === o.indexOf("<tbody") && (l = "table"),
                            0 === o.indexOf("<option") && (l = "select"),
                            (s = document.createElement(l)).innerHTML = o,
                            i = 0; i < s.childNodes.length; i += 1)
                                n.push(s.childNodes[i])
                        } else
                            for (a = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || document).querySelectorAll(e.trim()) : [document.getElementById(e.trim().split("#")[1])],
                            i = 0; i < a.length; i += 1)
                                a[i] && n.push(a[i])
                    } else if (e.nodeType || e === window || e === document)
                        n.push(e);
                    else if (e.length > 0 && e[0].nodeType)
                        for (i = 0; i < e.length; i += 1)
                            n.push(e[i]);
                return new r(n)
            }
            function t(e) {
                for (var t = [], n = 0; n < e.length; n += 1)
                    -1 === t.indexOf(e[n]) && t.push(e[n]);
                return t
            }
            function a() {
                var e = "onwheel"in u;
                if (!e) {
                    var t = u.createElement("div");
                    t.setAttribute("onwheel", "return;"),
                    e = "function" == typeof t.onwheel
                }
                return !e && u.implementation && u.implementation.hasFeature && !0 !== u.implementation.hasFeature("", "") && (e = u.implementation.hasFeature("Events.wheel", "3.0")),
                e
            }
            var n, i = n = "undefined" == typeof window ? {
                navigator: {
                    userAgent: ""
                },
                location: {},
                history: {},
                addEventListener: function() {},
                removeEventListener: function() {},
                getComputedStyle: function() {
                    return {}
                },
                Image: function() {},
                Date: function() {},
                screen: {}
            } : window, r = function(e) {
                for (var t = this, n = 0; n < e.length; n += 1)
                    t[n] = e[n];
                return t.length = e.length,
                this
            };
            e.fn = r.prototype,
            e.Class = r,
            e.Dom7 = r,
            "resize scroll".split(" ");
            var s = {
                addClass: function(e) {
                    var t = this;
                    if (void 0 === e)
                        return this;
                    for (var n = e.split(" "), i = 0; i < n.length; i += 1)
                        for (var a = 0; a < this.length; a += 1)
                            void 0 !== t[a].classList && t[a].classList.add(n[i]);
                    return this
                },
                removeClass: function(e) {
                    for (var t = this, n = e.split(" "), i = 0; i < n.length; i += 1)
                        for (var a = 0; a < this.length; a += 1)
                            void 0 !== t[a].classList && t[a].classList.remove(n[i]);
                    return this
                },
                hasClass: function(e) {
                    return !!this[0] && this[0].classList.contains(e)
                },
                toggleClass: function(e) {
                    for (var t = this, n = e.split(" "), i = 0; i < n.length; i += 1)
                        for (var a = 0; a < this.length; a += 1)
                            void 0 !== t[a].classList && t[a].classList.toggle(n[i]);
                    return this
                },
                attr: function(e, t) {
                    var n = arguments
                      , i = this;
                    if (1 !== arguments.length || "string" != typeof e) {
                        for (var a = 0; a < this.length; a += 1)
                            if (2 === n.length)
                                i[a].setAttribute(e, t);
                            else
                                for (var r in e)
                                    i[a][r] = e[r],
                                    i[a].setAttribute(r, e[r]);
                        return this
                    }
                    if (this[0])
                        return this[0].getAttribute(e)
                },
                removeAttr: function(e) {
                    for (var t = this, n = 0; n < this.length; n += 1)
                        t[n].removeAttribute(e);
                    return this
                },
                data: function(e, t) {
                    var n, i = this;
                    if (void 0 !== t) {
                        for (var a = 0; a < this.length; a += 1)
                            (n = i[a]).dom7ElementDataStorage || (n.dom7ElementDataStorage = {}),
                            n.dom7ElementDataStorage[e] = t;
                        return this
                    }
                    if (n = this[0]) {
                        if (n.dom7ElementDataStorage && e in n.dom7ElementDataStorage)
                            return n.dom7ElementDataStorage[e];
                        var r = n.getAttribute("data-" + e);
                        if (r)
                            return r
                    }
                },
                transform: function(e) {
                    for (var t = this, n = 0; n < this.length; n += 1) {
                        var i = t[n].style;
                        i.webkitTransform = e,
                        i.transform = e
                    }
                    return this
                },
                transition: function(e) {
                    var t = this;
                    "string" != typeof e && (e += "ms");
                    for (var n = 0; n < this.length; n += 1) {
                        var i = t[n].style;
                        i.webkitTransitionDuration = e,
                        i.transitionDuration = e
                    }
                    return this
                },
                on: function() {
                    function t(t) {
                        var n = t.target;
                        if (n) {
                            var i = t.target.dom7EventData || [];
                            if (i.unshift(t),
                            e(n).is(o))
                                l.apply(n, i);
                            else
                                for (var a = e(n).parents(), r = 0; r < a.length; r += 1)
                                    e(a[r]).is(o) && l.apply(a[r], i)
                        }
                    }
                    function a(e) {
                        var t = e && e.target ? e.target.dom7EventData || [] : [];
                        t.unshift(e),
                        l.apply(this, t)
                    }
                    for (var n = this, i = [], r = arguments.length; r--; )
                        i[r] = arguments[r];
                    var s = i[0]
                      , o = i[1]
                      , l = i[2]
                      , d = i[3];
                    if ("function" == typeof i[1]) {
                        var u;
                        s = (u = i)[0],
                        l = u[1],
                        d = u[2],
                        o = void 0
                    }
                    d || (d = !1);
                    for (var c, p = s.split(" "), f = 0; f < this.length; f += 1) {
                        var h = n[f];
                        if (o)
                            for (c = 0; c < p.length; c += 1)
                                h.dom7LiveListeners || (h.dom7LiveListeners = []),
                                h.dom7LiveListeners.push({
                                    type: s,
                                    listener: l,
                                    proxyListener: t
                                }),
                                h.addEventListener(p[c], t, d);
                        else
                            for (c = 0; c < p.length; c += 1)
                                h.dom7Listeners || (h.dom7Listeners = []),
                                h.dom7Listeners.push({
                                    type: s,
                                    listener: l,
                                    proxyListener: a
                                }),
                                h.addEventListener(p[c], a, d)
                    }
                    return this
                },
                off: function() {
                    for (var e = this, t = [], n = arguments.length; n--; )
                        t[n] = arguments[n];
                    var i = t[0]
                      , a = t[1]
                      , r = t[2]
                      , s = t[3];
                    if ("function" == typeof t[1]) {
                        var o;
                        i = (o = t)[0],
                        r = o[1],
                        s = o[2],
                        a = void 0
                    }
                    s || (s = !1);
                    for (var l = i.split(" "), d = 0; d < l.length; d += 1)
                        for (var u = 0; u < this.length; u += 1) {
                            var c = e[u];
                            if (a) {
                                if (c.dom7LiveListeners)
                                    for (var p = 0; p < c.dom7LiveListeners.length; p += 1)
                                        r ? c.dom7LiveListeners[p].listener === r && c.removeEventListener(l[d], c.dom7LiveListeners[p].proxyListener, s) : c.dom7LiveListeners[p].type === l[d] && c.removeEventListener(l[d], c.dom7LiveListeners[p].proxyListener, s)
                            } else if (c.dom7Listeners)
                                for (var f = 0; f < c.dom7Listeners.length; f += 1)
                                    r ? c.dom7Listeners[f].listener === r && c.removeEventListener(l[d], c.dom7Listeners[f].proxyListener, s) : c.dom7Listeners[f].type === l[d] && c.removeEventListener(l[d], c.dom7Listeners[f].proxyListener, s)
                        }
                    return this
                },
                trigger: function() {
                    for (var e = this, t = [], n = arguments.length; n--; )
                        t[n] = arguments[n];
                    for (var i = t[0].split(" "), a = t[1], r = 0; r < i.length; r += 1)
                        for (var s = 0; s < this.length; s += 1) {
                            var o = void 0;
                            try {
                                o = new window.CustomEvent(i[r],{
                                    detail: a,
                                    bubbles: !0,
                                    cancelable: !0
                                })
                            } catch (e) {
                                (o = document.createEvent("Event")).initEvent(i[r], !0, !0),
                                o.detail = a
                            }
                            e[s].dom7EventData = t.filter(function(e, t) {
                                return t > 0
                            }),
                            e[s].dispatchEvent(o),
                            e[s].dom7EventData = [],
                            delete e[s].dom7EventData
                        }
                    return this
                },
                transitionEnd: function(e) {
                    function t(r) {
                        if (r.target === this)
                            for (e.call(this, r),
                            n = 0; n < i.length; n += 1)
                                a.off(i[n], t)
                    }
                    var n, i = ["webkitTransitionEnd", "transitionend"], a = this;
                    if (e)
                        for (n = 0; n < i.length; n += 1)
                            a.on(i[n], t);
                    return this
                },
                outerWidth: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            var t = this.styles();
                            return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                        }
                        return this[0].offsetWidth
                    }
                    return null
                },
                outerHeight: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            var t = this.styles();
                            return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                        }
                        return this[0].offsetHeight
                    }
                    return null
                },
                offset: function() {
                    if (this.length > 0) {
                        var e = this[0]
                          , t = e.getBoundingClientRect()
                          , n = document.body
                          , i = e.clientTop || n.clientTop || 0
                          , a = e.clientLeft || n.clientLeft || 0
                          , r = e === window ? window.scrollY : e.scrollTop
                          , s = e === window ? window.scrollX : e.scrollLeft;
                        return {
                            top: t.top + r - i,
                            left: t.left + s - a
                        }
                    }
                    return null
                },
                css: function(e, t) {
                    var n, i = this;
                    if (1 === arguments.length) {
                        if ("string" != typeof e) {
                            for (n = 0; n < this.length; n += 1)
                                for (var a in e)
                                    i[n].style[a] = e[a];
                            return this
                        }
                        if (this[0])
                            return window.getComputedStyle(this[0], null).getPropertyValue(e)
                    }
                    if (2 === arguments.length && "string" == typeof e) {
                        for (n = 0; n < this.length; n += 1)
                            i[n].style[e] = t;
                        return this
                    }
                    return this
                },
                each: function(e) {
                    var t = this;
                    if (!e)
                        return this;
                    for (var n = 0; n < this.length; n += 1)
                        if (!1 === e.call(t[n], n, t[n]))
                            return t;
                    return this
                },
                html: function(e) {
                    var t = this;
                    if (void 0 === e)
                        return this[0] ? this[0].innerHTML : void 0;
                    for (var n = 0; n < this.length; n += 1)
                        t[n].innerHTML = e;
                    return this
                },
                text: function(e) {
                    var t = this;
                    if (void 0 === e)
                        return this[0] ? this[0].textContent.trim() : null;
                    for (var n = 0; n < this.length; n += 1)
                        t[n].textContent = e;
                    return this
                },
                is: function(t) {
                    var n, i, a = this[0];
                    if (!a || void 0 === t)
                        return !1;
                    if ("string" == typeof t) {
                        if (a.matches)
                            return a.matches(t);
                        if (a.webkitMatchesSelector)
                            return a.webkitMatchesSelector(t);
                        if (a.msMatchesSelector)
                            return a.msMatchesSelector(t);
                        for (n = e(t),
                        i = 0; i < n.length; i += 1)
                            if (n[i] === a)
                                return !0;
                        return !1
                    }
                    if (t === document)
                        return a === document;
                    if (t === window)
                        return a === window;
                    if (t.nodeType || t instanceof r) {
                        for (n = t.nodeType ? [t] : t,
                        i = 0; i < n.length; i += 1)
                            if (n[i] === a)
                                return !0;
                        return !1
                    }
                    return !1
                },
                index: function() {
                    var e, t = this[0];
                    if (t) {
                        for (e = 0; null !== (t = t.previousSibling); )
                            1 === t.nodeType && (e += 1);
                        return e
                    }
                },
                eq: function(e) {
                    if (void 0 === e)
                        return this;
                    var t, n = this.length;
                    return e > n - 1 ? new r([]) : e < 0 ? (t = n + e,
                    new r(t < 0 ? [] : [this[t]])) : new r([this[e]])
                },
                append: function() {
                    for (var e = this, t = [], n = arguments.length; n--; )
                        t[n] = arguments[n];
                    for (var i, a = 0; a < t.length; a += 1) {
                        i = t[a];
                        for (var s = 0; s < this.length; s += 1)
                            if ("string" == typeof i) {
                                var o = document.createElement("div");
                                for (o.innerHTML = i; o.firstChild; )
                                    e[s].appendChild(o.firstChild)
                            } else if (i instanceof r)
                                for (var l = 0; l < i.length; l += 1)
                                    e[s].appendChild(i[l]);
                            else
                                e[s].appendChild(i)
                    }
                    return this
                },
                prepend: function(e) {
                    var t, n, i = this;
                    for (t = 0; t < this.length; t += 1)
                        if ("string" == typeof e) {
                            var a = document.createElement("div");
                            for (a.innerHTML = e,
                            n = a.childNodes.length - 1; n >= 0; n -= 1)
                                i[t].insertBefore(a.childNodes[n], i[t].childNodes[0])
                        } else if (e instanceof r)
                            for (n = 0; n < e.length; n += 1)
                                i[t].insertBefore(e[n], i[t].childNodes[0]);
                        else
                            i[t].insertBefore(e, i[t].childNodes[0]);
                    return this
                },
                next: function(t) {
                    return new r(this.length > 0 ? t ? this[0].nextElementSibling && e(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
                },
                nextAll: function(t) {
                    var n = []
                      , i = this[0];
                    if (!i)
                        return new r([]);
                    for (; i.nextElementSibling; ) {
                        var a = i.nextElementSibling;
                        t ? e(a).is(t) && n.push(a) : n.push(a),
                        i = a
                    }
                    return new r(n)
                },
                prev: function(t) {
                    if (this.length > 0) {
                        var n = this[0];
                        return new r(t ? n.previousElementSibling && e(n.previousElementSibling).is(t) ? [n.previousElementSibling] : [] : n.previousElementSibling ? [n.previousElementSibling] : [])
                    }
                    return new r([])
                },
                prevAll: function(t) {
                    var n = []
                      , i = this[0];
                    if (!i)
                        return new r([]);
                    for (; i.previousElementSibling; ) {
                        var a = i.previousElementSibling;
                        t ? e(a).is(t) && n.push(a) : n.push(a),
                        i = a
                    }
                    return new r(n)
                },
                parent: function(n) {
                    for (var i = this, a = [], r = 0; r < this.length; r += 1)
                        null !== i[r].parentNode && (n ? e(i[r].parentNode).is(n) && a.push(i[r].parentNode) : a.push(i[r].parentNode));
                    return e(t(a))
                },
                parents: function(n) {
                    for (var i = this, a = [], r = 0; r < this.length; r += 1)
                        for (var s = i[r].parentNode; s; )
                            n ? e(s).is(n) && a.push(s) : a.push(s),
                            s = s.parentNode;
                    return e(t(a))
                },
                closest: function(e) {
                    var t = this;
                    return void 0 === e ? new r([]) : (t.is(e) || (t = t.parents(e).eq(0)),
                    t)
                },
                find: function(e) {
                    for (var t = this, n = [], i = 0; i < this.length; i += 1)
                        for (var a = t[i].querySelectorAll(e), s = 0; s < a.length; s += 1)
                            n.push(a[s]);
                    return new r(n)
                },
                children: function(n) {
                    for (var i = this, a = [], s = 0; s < this.length; s += 1)
                        for (var o = i[s].childNodes, l = 0; l < o.length; l += 1)
                            n ? 1 === o[l].nodeType && e(o[l]).is(n) && a.push(o[l]) : 1 === o[l].nodeType && a.push(o[l]);
                    return new r(t(a))
                },
                remove: function() {
                    for (var e = this, t = 0; t < this.length; t += 1)
                        e[t].parentNode && e[t].parentNode.removeChild(e[t]);
                    return this
                },
                add: function() {
                    for (var t = [], n = arguments.length; n--; )
                        t[n] = arguments[n];
                    var i, a, r = this;
                    for (i = 0; i < t.length; i += 1) {
                        var s = e(t[i]);
                        for (a = 0; a < s.length; a += 1)
                            r[r.length] = s[a],
                            r.length += 1
                    }
                    return r
                },
                styles: function() {
                    return this[0] ? window.getComputedStyle(this[0], null) : {}
                }
            };
            Object.keys(s).forEach(function(t) {
                e.fn[t] = s[t]
            });
            var l, d = {
                deleteProps: function(e) {
                    var t = e;
                    Object.keys(t).forEach(function(e) {
                        try {
                            t[e] = null
                        } catch (e) {}
                        try {
                            delete t[e]
                        } catch (e) {}
                    })
                },
                nextTick: function(e, t) {
                    return void 0 === t && (t = 0),
                    setTimeout(e, t)
                },
                now: function() {
                    return Date.now()
                },
                getTranslate: function(e, t) {
                    void 0 === t && (t = "x");
                    var n, a, r, s = i.getComputedStyle(e, null);
                    return i.WebKitCSSMatrix ? ((a = s.transform || s.webkitTransform).split(",").length > 6 && (a = a.split(", ").map(function(e) {
                        return e.replace(",", ".")
                    }).join(", ")),
                    r = new i.WebKitCSSMatrix("none" === a ? "" : a)) : n = (r = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","),
                    "x" === t && (a = i.WebKitCSSMatrix ? r.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])),
                    "y" === t && (a = i.WebKitCSSMatrix ? r.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])),
                    a || 0
                },
                parseUrlQuery: function(e) {
                    var t, n, a, r, s = {}, o = e || i.location.href;
                    if ("string" == typeof o && o.length)
                        for (r = (n = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(function(e) {
                            return "" !== e
                        })).length,
                        t = 0; t < r; t += 1)
                            a = n[t].replace(/#\S+/g, "").split("="),
                            s[decodeURIComponent(a[0])] = void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || "";
                    return s
                },
                isObject: function(e) {
                    return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
                },
                extend: function() {
                    for (var e = [], t = arguments.length; t--; )
                        e[t] = arguments[t];
                    for (var n = Object(e[0]), i = 1; i < e.length; i += 1) {
                        var a = e[i];
                        if (void 0 !== a && null !== a)
                            for (var r = Object.keys(Object(a)), s = 0, o = r.length; s < o; s += 1) {
                                var l = r[s]
                                  , u = Object.getOwnPropertyDescriptor(a, l);
                                void 0 !== u && u.enumerable && (d.isObject(n[l]) && d.isObject(a[l]) ? d.extend(n[l], a[l]) : !d.isObject(n[l]) && d.isObject(a[l]) ? (n[l] = {},
                                d.extend(n[l], a[l])) : n[l] = a[l])
                            }
                    }
                    return n
                }
            }, u = l = "undefined" == typeof document ? {
                addEventListener: function() {},
                removeEventListener: function() {},
                activeElement: {
                    blur: function() {},
                    nodeName: ""
                },
                querySelector: function() {
                    return {}
                },
                querySelectorAll: function() {
                    return []
                },
                createElement: function() {
                    return {
                        style: {},
                        setAttribute: function() {},
                        getElementsByTagName: function() {
                            return []
                        }
                    }
                },
                location: {
                    hash: ""
                }
            } : document, c = {
                touch: i.Modernizr && !0 === i.Modernizr.touch || !!("ontouchstart"in i || i.DocumentTouch && u instanceof i.DocumentTouch),
                transforms3d: i.Modernizr && !0 === i.Modernizr.csstransforms3d || function() {
                    var e = u.createElement("div").style;
                    return "webkitPerspective"in e || "MozPerspective"in e || "OPerspective"in e || "MsPerspective"in e || "perspective"in e
                }(),
                flexbox: function() {
                    for (var e = u.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), n = 0; n < t.length; n += 1)
                        if (t[n]in e)
                            return !0;
                    return !1
                }(),
                observer: "MutationObserver"in i || "WebkitMutationObserver"in i,
                passiveListener: function() {
                    var e = !1;
                    try {
                        var t = Object.defineProperty({}, "passive", {
                            get: function() {
                                e = !0
                            }
                        });
                        i.addEventListener("testPassiveListener", null, t)
                    } catch (e) {}
                    return e
                }(),
                gestures: "ongesturestart"in i
            }, p = function(e) {
                void 0 === e && (e = {});
                var t = this;
                t.params = e,
                t.eventsListeners = {},
                t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
                    t.on(e, t.params.on[e])
                })
            }, f = {
                components: {}
            };
            p.prototype.on = function(e, t) {
                var n = this;
                return "function" != typeof t ? n : (e.split(" ").forEach(function(e) {
                    n.eventsListeners[e] || (n.eventsListeners[e] = []),
                    n.eventsListeners[e].push(t)
                }),
                n)
            }
            ,
            p.prototype.once = function(e, t) {
                function a() {
                    for (var i = [], r = arguments.length; r--; )
                        i[r] = arguments[r];
                    t.apply(n, i),
                    n.off(e, a)
                }
                var n = this;
                return "function" != typeof t ? n : n.on(e, a)
            }
            ,
            p.prototype.off = function(e, t) {
                var n = this;
                return e.split(" ").forEach(function(e) {
                    void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e].forEach(function(i, a) {
                        i === t && n.eventsListeners[e].splice(a, 1)
                    })
                }),
                n
            }
            ,
            p.prototype.emit = function() {
                for (var e = [], t = arguments.length; t--; )
                    e[t] = arguments[t];
                var n = this;
                if (!n.eventsListeners)
                    return n;
                var i, a, r;
                return "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0],
                a = e.slice(1, e.length),
                r = n) : (i = e[0].events,
                a = e[0].data,
                r = e[0].context || n),
                (Array.isArray(i) ? i : i.split(" ")).forEach(function(e) {
                    if (n.eventsListeners[e]) {
                        var t = [];
                        n.eventsListeners[e].forEach(function(e) {
                            t.push(e)
                        }),
                        t.forEach(function(e) {
                            e.apply(r, a)
                        })
                    }
                }),
                n
            }
            ,
            p.prototype.useModulesParams = function(e) {
                var t = this;
                t.modules && Object.keys(t.modules).forEach(function(n) {
                    var i = t.modules[n];
                    i.params && d.extend(e, i.params)
                })
            }
            ,
            p.prototype.useModules = function(e) {
                void 0 === e && (e = {});
                var t = this;
                t.modules && Object.keys(t.modules).forEach(function(n) {
                    var i = t.modules[n]
                      , a = e[n] || {};
                    i.instance && Object.keys(i.instance).forEach(function(e) {
                        var n = i.instance[e];
                        t[e] = "function" == typeof n ? n.bind(t) : n
                    }),
                    i.on && t.on && Object.keys(i.on).forEach(function(e) {
                        t.on(e, i.on[e])
                    }),
                    i.create && i.create.bind(t)(a)
                })
            }
            ,
            f.components.set = function(e) {
                var t = this;
                t.use && t.use(e)
            }
            ,
            p.installModule = function(e) {
                for (var t = [], n = arguments.length - 1; n-- > 0; )
                    t[n] = arguments[n + 1];
                var i = this;
                i.prototype.modules || (i.prototype.modules = {});
                var a = e.name || Object.keys(i.prototype.modules).length + "_" + d.now();
                return i.prototype.modules[a] = e,
                e.proto && Object.keys(e.proto).forEach(function(t) {
                    i.prototype[t] = e.proto[t]
                }),
                e.static && Object.keys(e.static).forEach(function(t) {
                    i[t] = e.static[t]
                }),
                e.install && e.install.apply(i, t),
                i
            }
            ,
            p.use = function(e) {
                for (var t = [], n = arguments.length - 1; n-- > 0; )
                    t[n] = arguments[n + 1];
                var i = this;
                return Array.isArray(e) ? (e.forEach(function(e) {
                    return i.installModule(e)
                }),
                i) : i.installModule.apply(i, [e].concat(t))
            }
            ,
            Object.defineProperties(p, f);
            var h = {
                updateSize: function() {
                    var e, t, n = this, i = n.$el;
                    e = void 0 !== n.params.width ? n.params.width : i[0].clientWidth,
                    t = void 0 !== n.params.height ? n.params.height : i[0].clientHeight,
                    0 === e && n.isHorizontal() || 0 === t && n.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10),
                    t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10),
                    d.extend(n, {
                        width: e,
                        height: t,
                        size: n.isHorizontal() ? e : t
                    }))
                },
                updateSlides: function() {
                    var e = this
                      , t = e.params
                      , n = e.$wrapperEl
                      , i = e.size
                      , a = e.rtl
                      , r = e.wrongRTL
                      , s = n.children("." + e.params.slideClass)
                      , o = e.virtual && t.virtual.enabled ? e.virtual.slides.length : s.length
                      , l = []
                      , u = []
                      , p = []
                      , f = t.slidesOffsetBefore;
                    "function" == typeof f && (f = t.slidesOffsetBefore.call(e));
                    var h = t.slidesOffsetAfter;
                    "function" == typeof h && (h = t.slidesOffsetAfter.call(e));
                    var v = o
                      , m = e.snapGrid.length
                      , g = e.snapGrid.length
                      , y = t.spaceBetween
                      , b = -f
                      , x = 0
                      , w = 0;
                    if (void 0 !== i) {
                        "string" == typeof y && y.indexOf("%") >= 0 && (y = parseFloat(y.replace("%", "")) / 100 * i),
                        e.virtualSize = -y,
                        a ? s.css({
                            marginLeft: "",
                            marginTop: ""
                        }) : s.css({
                            marginRight: "",
                            marginBottom: ""
                        });
                        var T;
                        t.slidesPerColumn > 1 && (T = Math.floor(o / t.slidesPerColumn) === o / e.params.slidesPerColumn ? o : Math.ceil(o / t.slidesPerColumn) * t.slidesPerColumn,
                        "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (T = Math.max(T, t.slidesPerView * t.slidesPerColumn)));
                        for (var C, E = t.slidesPerColumn, S = T / E, k = S - (t.slidesPerColumn * S - o), M = 0; M < o; M += 1) {
                            C = 0;
                            var z = s.eq(M);
                            if (t.slidesPerColumn > 1) {
                                var P = void 0
                                  , A = void 0
                                  , D = void 0;
                                "column" === t.slidesPerColumnFill ? (D = M - (A = Math.floor(M / E)) * E,
                                (A > k || A === k && D === E - 1) && (D += 1) >= E && (D = 0,
                                A += 1),
                                P = A + D * T / E,
                                z.css({
                                    "-webkit-box-ordinal-group": P,
                                    "-moz-box-ordinal-group": P,
                                    "-ms-flex-order": P,
                                    "-webkit-order": P,
                                    order: P
                                })) : A = M - (D = Math.floor(M / S)) * S,
                                z.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== D && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", A).attr("data-swiper-row", D)
                            }
                            "none" !== z.css("display") && ("auto" === t.slidesPerView ? (C = e.isHorizontal() ? z.outerWidth(!0) : z.outerHeight(!0),
                            t.roundLengths && (C = Math.floor(C))) : (C = (i - (t.slidesPerView - 1) * y) / t.slidesPerView,
                            t.roundLengths && (C = Math.floor(C)),
                            s[M] && (e.isHorizontal() ? s[M].style.width = C + "px" : s[M].style.height = C + "px")),
                            s[M] && (s[M].swiperSlideSize = C),
                            p.push(C),
                            t.centeredSlides ? (b = b + C / 2 + x / 2 + y,
                            0 === x && 0 !== M && (b = b - i / 2 - y),
                            0 === M && (b = b - i / 2 - y),
                            Math.abs(b) < .001 && (b = 0),
                            w % t.slidesPerGroup == 0 && l.push(b),
                            u.push(b)) : (w % t.slidesPerGroup == 0 && l.push(b),
                            u.push(b),
                            b = b + C + y),
                            e.virtualSize += C + y,
                            x = C,
                            w += 1)
                        }
                        e.virtualSize = Math.max(e.virtualSize, i) + h;
                        var N;
                        if (a && r && ("slide" === t.effect || "coverflow" === t.effect) && n.css({
                            width: e.virtualSize + t.spaceBetween + "px"
                        }),
                        c.flexbox && !t.setWrapperSize || (e.isHorizontal() ? n.css({
                            width: e.virtualSize + t.spaceBetween + "px"
                        }) : n.css({
                            height: e.virtualSize + t.spaceBetween + "px"
                        })),
                        t.slidesPerColumn > 1 && (e.virtualSize = (C + t.spaceBetween) * T,
                        e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween,
                        e.isHorizontal() ? n.css({
                            width: e.virtualSize + t.spaceBetween + "px"
                        }) : n.css({
                            height: e.virtualSize + t.spaceBetween + "px"
                        }),
                        t.centeredSlides)) {
                            N = [];
                            for (var L = 0; L < l.length; L += 1)
                                l[L] < e.virtualSize + l[0] && N.push(l[L]);
                            l = N
                        }
                        if (!t.centeredSlides) {
                            N = [];
                            for (var $ = 0; $ < l.length; $ += 1)
                                l[$] <= e.virtualSize - i && N.push(l[$]);
                            l = N,
                            Math.floor(e.virtualSize - i) - Math.floor(l[l.length - 1]) > 1 && l.push(e.virtualSize - i)
                        }
                        0 === l.length && (l = [0]),
                        0 !== t.spaceBetween && (e.isHorizontal() ? a ? s.css({
                            marginLeft: y + "px"
                        }) : s.css({
                            marginRight: y + "px"
                        }) : s.css({
                            marginBottom: y + "px"
                        })),
                        d.extend(e, {
                            slides: s,
                            snapGrid: l,
                            slidesGrid: u,
                            slidesSizesGrid: p
                        }),
                        o !== v && e.emit("slidesLengthChange"),
                        l.length !== m && e.emit("snapGridLengthChange"),
                        u.length !== g && e.emit("slidesGridLengthChange"),
                        (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
                    }
                },
                updateAutoHeight: function() {
                    var e, t = this, n = [], i = 0;
                    if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                        for (e = 0; e < Math.ceil(t.params.slidesPerView); e += 1) {
                            var a = t.activeIndex + e;
                            if (a > t.slides.length)
                                break;
                            n.push(t.slides.eq(a)[0])
                        }
                    else
                        n.push(t.slides.eq(t.activeIndex)[0]);
                    for (e = 0; e < n.length; e += 1)
                        if (void 0 !== n[e]) {
                            var r = n[e].offsetHeight;
                            i = r > i ? r : i
                        }
                    i && t.$wrapperEl.css("height", i + "px")
                },
                updateSlidesOffset: function() {
                    for (var e = this, t = e.slides, n = 0; n < t.length; n += 1)
                        t[n].swiperSlideOffset = e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop
                },
                updateSlidesProgress: function(e) {
                    void 0 === e && (e = this.translate || 0);
                    var t = this
                      , n = t.params
                      , i = t.slides
                      , a = t.rtl;
                    if (0 !== i.length) {
                        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                        var r = -e;
                        a && (r = e),
                        i.removeClass(n.slideVisibleClass);
                        for (var s = 0; s < i.length; s += 1) {
                            var o = i[s]
                              , l = (r + (n.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + n.spaceBetween);
                            if (n.watchSlidesVisibility) {
                                var d = -(r - o.swiperSlideOffset)
                                  , u = d + t.slidesSizesGrid[s];
                                (d >= 0 && d < t.size || u > 0 && u <= t.size || d <= 0 && u >= t.size) && i.eq(s).addClass(n.slideVisibleClass)
                            }
                            o.progress = a ? -l : l
                        }
                    }
                },
                updateProgress: function(e) {
                    void 0 === e && (e = this.translate || 0);
                    var t = this
                      , n = t.params
                      , i = t.maxTranslate() - t.minTranslate()
                      , a = t.progress
                      , r = t.isBeginning
                      , s = t.isEnd
                      , o = r
                      , l = s;
                    0 === i ? (a = 0,
                    r = !0,
                    s = !0) : (r = (a = (e - t.minTranslate()) / i) <= 0,
                    s = a >= 1),
                    d.extend(t, {
                        progress: a,
                        isBeginning: r,
                        isEnd: s
                    }),
                    (n.watchSlidesProgress || n.watchSlidesVisibility) && t.updateSlidesProgress(e),
                    r && !o && t.emit("reachBeginning toEdge"),
                    s && !l && t.emit("reachEnd toEdge"),
                    (o && !r || l && !s) && t.emit("fromEdge"),
                    t.emit("progress", a)
                },
                updateSlidesClasses: function() {
                    var e = this
                      , t = e.slides
                      , n = e.params
                      , i = e.$wrapperEl
                      , a = e.activeIndex
                      , r = e.realIndex
                      , s = e.virtual && n.virtual.enabled;
                    t.removeClass(n.slideActiveClass + " " + n.slideNextClass + " " + n.slidePrevClass + " " + n.slideDuplicateActiveClass + " " + n.slideDuplicateNextClass + " " + n.slideDuplicatePrevClass);
                    var o;
                    (o = s ? e.$wrapperEl.find("." + n.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(n.slideActiveClass),
                    n.loop && (o.hasClass(n.slideDuplicateClass) ? i.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(n.slideDuplicateActiveClass) : i.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(n.slideDuplicateActiveClass));
                    var l = o.nextAll("." + n.slideClass).eq(0).addClass(n.slideNextClass);
                    n.loop && 0 === l.length && (l = t.eq(0)).addClass(n.slideNextClass);
                    var d = o.prevAll("." + n.slideClass).eq(0).addClass(n.slidePrevClass);
                    n.loop && 0 === d.length && (d = t.eq(-1)).addClass(n.slidePrevClass),
                    n.loop && (l.hasClass(n.slideDuplicateClass) ? i.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass) : i.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass),
                    d.hasClass(n.slideDuplicateClass) ? i.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass) : i.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass))
                },
                updateActiveIndex: function(e) {
                    var t, n = this, i = n.rtl ? n.translate : -n.translate, a = n.slidesGrid, r = n.snapGrid, s = n.params, o = n.activeIndex, l = n.realIndex, u = n.snapIndex, c = e;
                    if (void 0 === c) {
                        for (var p = 0; p < a.length; p += 1)
                            void 0 !== a[p + 1] ? i >= a[p] && i < a[p + 1] - (a[p + 1] - a[p]) / 2 ? c = p : i >= a[p] && i < a[p + 1] && (c = p + 1) : i >= a[p] && (c = p);
                        s.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
                    }
                    if ((t = r.indexOf(i) >= 0 ? r.indexOf(i) : Math.floor(c / s.slidesPerGroup)) >= r.length && (t = r.length - 1),
                    c !== o) {
                        var f = parseInt(n.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                        d.extend(n, {
                            snapIndex: t,
                            realIndex: f,
                            previousIndex: o,
                            activeIndex: c
                        }),
                        n.emit("activeIndexChange"),
                        n.emit("snapIndexChange"),
                        l !== f && n.emit("realIndexChange"),
                        n.emit("slideChange")
                    } else
                        t !== u && (n.snapIndex = t,
                        n.emit("snapIndexChange"))
                },
                updateClickedSlide: function(t) {
                    var n = this
                      , i = n.params
                      , a = e(t.target).closest("." + i.slideClass)[0]
                      , r = !1;
                    if (a)
                        for (var s = 0; s < n.slides.length; s += 1)
                            n.slides[s] === a && (r = !0);
                    if (!a || !r)
                        return n.clickedSlide = void 0,
                        void (n.clickedIndex = void 0);
                    n.clickedSlide = a,
                    n.virtual && n.params.virtual.enabled ? n.clickedIndex = parseInt(e(a).attr("data-swiper-slide-index"), 10) : n.clickedIndex = e(a).index(),
                    i.slideToClickedSlide && void 0 !== n.clickedIndex && n.clickedIndex !== n.activeIndex && n.slideToClickedSlide()
                }
            }
              , v = {
                getTranslate: function(e) {
                    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                    var t = this
                      , n = t.params
                      , i = t.rtl
                      , a = t.translate
                      , r = t.$wrapperEl;
                    if (n.virtualTranslate)
                        return i ? -a : a;
                    var s = d.getTranslate(r[0], e);
                    return i && (s = -s),
                    s || 0
                },
                setTranslate: function(e, t) {
                    var n = this
                      , i = n.rtl
                      , a = n.params
                      , r = n.$wrapperEl
                      , s = n.progress
                      , o = 0
                      , l = 0;
                    n.isHorizontal() ? o = i ? -e : e : l = e,
                    a.roundLengths && (o = Math.floor(o),
                    l = Math.floor(l)),
                    a.virtualTranslate || (c.transforms3d ? r.transform("translate3d(" + o + "px, " + l + "px, 0px)") : r.transform("translate(" + o + "px, " + l + "px)")),
                    n.translate = n.isHorizontal() ? o : l;
                    var d = n.maxTranslate() - n.minTranslate();
                    (0 === d ? 0 : (e - n.minTranslate()) / d) !== s && n.updateProgress(e),
                    n.emit("setTranslate", n.translate, t)
                },
                minTranslate: function() {
                    return -this.snapGrid[0]
                },
                maxTranslate: function() {
                    return -this.snapGrid[this.snapGrid.length - 1]
                }
            }
              , m = {
                setTransition: function(e, t) {
                    var n = this;
                    n.$wrapperEl.transition(e),
                    n.emit("setTransition", e, t)
                },
                transitionStart: function(e) {
                    void 0 === e && (e = !0);
                    var t = this
                      , n = t.activeIndex
                      , i = t.params
                      , a = t.previousIndex;
                    i.autoHeight && t.updateAutoHeight(),
                    t.emit("transitionStart"),
                    e && n !== a && (t.emit("slideChangeTransitionStart"),
                    n > a ? t.emit("slideNextTransitionStart") : t.emit("slidePrevTransitionStart"))
                },
                transitionEnd: function(e) {
                    void 0 === e && (e = !0);
                    var t = this
                      , n = t.activeIndex
                      , i = t.previousIndex;
                    t.animating = !1,
                    t.setTransition(0),
                    t.emit("transitionEnd"),
                    e && n !== i && (t.emit("slideChangeTransitionEnd"),
                    n > i ? t.emit("slideNextTransitionEnd") : t.emit("slidePrevTransitionEnd"))
                }
            }
              , g = function() {
                return {
                    isSafari: function() {
                        var e = i.navigator.userAgent.toLowerCase();
                        return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
                    }(),
                    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent),
                    ie: i.navigator.pointerEnabled || i.navigator.msPointerEnabled,
                    ieTouch: i.navigator.msPointerEnabled && i.navigator.msMaxTouchPoints > 1 || i.navigator.pointerEnabled && i.navigator.maxTouchPoints > 1,
                    lteIE9: function() {
                        var e = u.createElement("div");
                        return e.innerHTML = "\x3c!--[if lte IE 9]><i></i><![endif]--\x3e",
                        1 === e.getElementsByTagName("i").length
                    }()
                }
            }()
              , y = {
                slideTo: function(e, t, n, i) {
                    void 0 === e && (e = 0),
                    void 0 === t && (t = this.params.speed),
                    void 0 === n && (n = !0);
                    var a = this
                      , r = e;
                    r < 0 && (r = 0);
                    var s = a.params
                      , o = a.snapGrid
                      , l = a.slidesGrid
                      , d = a.previousIndex
                      , u = a.activeIndex
                      , c = a.rtl
                      , p = a.$wrapperEl
                      , f = Math.floor(r / s.slidesPerGroup);
                    f >= o.length && (f = o.length - 1),
                    (u || s.initialSlide || 0) === (d || 0) && n && a.emit("beforeSlideChangeStart");
                    var h = -o[f];
                    if (a.updateProgress(h),
                    s.normalizeSlideIndex)
                        for (var v = 0; v < l.length; v += 1)
                            -Math.floor(100 * h) >= Math.floor(100 * l[v]) && (r = v);
                    return !(!a.allowSlideNext && h < a.translate && h < a.minTranslate() || !a.allowSlidePrev && h > a.translate && h > a.maxTranslate() && (u || 0) !== r || (c && -h === a.translate || !c && h === a.translate ? (a.updateActiveIndex(r),
                    s.autoHeight && a.updateAutoHeight(),
                    a.updateSlidesClasses(),
                    "slide" !== s.effect && a.setTranslate(h),
                    1) : (0 === t || g.lteIE9 ? (a.setTransition(0),
                    a.setTranslate(h),
                    a.updateActiveIndex(r),
                    a.updateSlidesClasses(),
                    a.emit("beforeTransitionStart", t, i),
                    a.transitionStart(n),
                    a.transitionEnd(n)) : (a.setTransition(t),
                    a.setTranslate(h),
                    a.updateActiveIndex(r),
                    a.updateSlidesClasses(),
                    a.emit("beforeTransitionStart", t, i),
                    a.transitionStart(n),
                    a.animating || (a.animating = !0,
                    p.transitionEnd(function() {
                        a && !a.destroyed && a.transitionEnd(n)
                    }))),
                    0)))
                },
                slideNext: function(e, t, n) {
                    void 0 === e && (e = this.params.speed),
                    void 0 === t && (t = !0);
                    var i = this
                      , a = i.params
                      , r = i.animating;
                    return a.loop ? !r && (i.loopFix(),
                    i._clientLeft = i.$wrapperEl[0].clientLeft,
                    i.slideTo(i.activeIndex + a.slidesPerGroup, e, t, n)) : i.slideTo(i.activeIndex + a.slidesPerGroup, e, t, n)
                },
                slidePrev: function(e, t, n) {
                    void 0 === e && (e = this.params.speed),
                    void 0 === t && (t = !0);
                    var i = this
                      , a = i.params
                      , r = i.animating;
                    return a.loop ? !r && (i.loopFix(),
                    i._clientLeft = i.$wrapperEl[0].clientLeft,
                    i.slideTo(i.activeIndex - 1, e, t, n)) : i.slideTo(i.activeIndex - 1, e, t, n)
                },
                slideReset: function(e, t, n) {
                    void 0 === e && (e = this.params.speed),
                    void 0 === t && (t = !0);
                    var i = this;
                    return i.slideTo(i.activeIndex, e, t, n)
                },
                slideToClickedSlide: function() {
                    var t, n = this, i = n.params, a = n.$wrapperEl, r = "auto" === i.slidesPerView ? n.slidesPerViewDynamic() : i.slidesPerView, s = n.clickedIndex;
                    if (i.loop) {
                        if (n.animating)
                            return;
                        t = parseInt(e(n.clickedSlide).attr("data-swiper-slide-index"), 10),
                        i.centeredSlides ? s < n.loopedSlides - r / 2 || s > n.slides.length - n.loopedSlides + r / 2 ? (n.loopFix(),
                        s = a.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(),
                        d.nextTick(function() {
                            n.slideTo(s)
                        })) : n.slideTo(s) : s > n.slides.length - r ? (n.loopFix(),
                        s = a.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(),
                        d.nextTick(function() {
                            n.slideTo(s)
                        })) : n.slideTo(s)
                    } else
                        n.slideTo(s)
                }
            }
              , b = {
                loopCreate: function() {
                    var t = this
                      , n = t.params
                      , i = t.$wrapperEl;
                    i.children("." + n.slideClass + "." + n.slideDuplicateClass).remove();
                    var a = i.children("." + n.slideClass);
                    if (n.loopFillGroupWithBlank) {
                        var r = n.slidesPerGroup - a.length % n.slidesPerGroup;
                        if (r !== n.slidesPerGroup) {
                            for (var s = 0; s < r; s += 1) {
                                var o = e(u.createElement("div")).addClass(n.slideClass + " " + n.slideBlankClass);
                                i.append(o)
                            }
                            a = i.children("." + n.slideClass)
                        }
                    }
                    "auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = a.length),
                    t.loopedSlides = parseInt(n.loopedSlides || n.slidesPerView, 10),
                    t.loopedSlides += n.loopAdditionalSlides,
                    t.loopedSlides > a.length && (t.loopedSlides = a.length);
                    var l = []
                      , d = [];
                    a.each(function(n, i) {
                        var r = e(i);
                        n < t.loopedSlides && d.push(i),
                        n < a.length && n >= a.length - t.loopedSlides && l.push(i),
                        r.attr("data-swiper-slide-index", n)
                    });
                    for (var c = 0; c < d.length; c += 1)
                        i.append(e(d[c].cloneNode(!0)).addClass(n.slideDuplicateClass));
                    for (var p = l.length - 1; p >= 0; p -= 1)
                        i.prepend(e(l[p].cloneNode(!0)).addClass(n.slideDuplicateClass))
                },
                loopFix: function() {
                    var e, t = this, n = t.params, i = t.activeIndex, a = t.slides, r = t.loopedSlides, s = t.allowSlidePrev, o = t.allowSlideNext;
                    t.allowSlidePrev = !0,
                    t.allowSlideNext = !0,
                    i < r ? (e = a.length - 3 * r + i,
                    e += r,
                    t.slideTo(e, 0, !1, !0)) : ("auto" === n.slidesPerView && i >= 2 * r || i > a.length - 2 * n.slidesPerView) && (e = -a.length + i + r,
                    e += r,
                    t.slideTo(e, 0, !1, !0)),
                    t.allowSlidePrev = s,
                    t.allowSlideNext = o
                },
                loopDestroy: function() {
                    var e = this
                      , t = e.$wrapperEl
                      , n = e.params
                      , i = e.slides;
                    t.children("." + n.slideClass + "." + n.slideDuplicateClass).remove(),
                    i.removeAttr("data-swiper-slide-index")
                }
            }
              , x = {
                setGrabCursor: function(e) {
                    var t = this;
                    if (!c.touch && t.params.simulateTouch) {
                        var n = t.el;
                        n.style.cursor = "move",
                        n.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                        n.style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                        n.style.cursor = e ? "grabbing" : "grab"
                    }
                },
                unsetGrabCursor: function() {
                    var e = this;
                    c.touch || (e.el.style.cursor = "")
                }
            }
              , w = {
                appendSlide: function(e) {
                    var t = this
                      , n = t.$wrapperEl
                      , i = t.params;
                    if (i.loop && t.loopDestroy(),
                    "object" == typeof e && "length"in e)
                        for (var a = 0; a < e.length; a += 1)
                            e[a] && n.append(e[a]);
                    else
                        n.append(e);
                    i.loop && t.loopCreate(),
                    i.observer && c.observer || t.update()
                },
                prependSlide: function(e) {
                    var t = this
                      , n = t.params
                      , i = t.$wrapperEl
                      , a = t.activeIndex;
                    n.loop && t.loopDestroy();
                    var r = a + 1;
                    if ("object" == typeof e && "length"in e) {
                        for (var s = 0; s < e.length; s += 1)
                            e[s] && i.prepend(e[s]);
                        r = a + e.length
                    } else
                        i.prepend(e);
                    n.loop && t.loopCreate(),
                    n.observer && c.observer || t.update(),
                    t.slideTo(r, 0, !1)
                },
                removeSlide: function(e) {
                    var t = this
                      , n = t.params
                      , i = t.$wrapperEl
                      , a = t.activeIndex;
                    n.loop && (t.loopDestroy(),
                    t.slides = i.children("." + n.slideClass));
                    var r, s = a;
                    if ("object" == typeof e && "length"in e) {
                        for (var o = 0; o < e.length; o += 1)
                            r = e[o],
                            t.slides[r] && t.slides.eq(r).remove(),
                            r < s && (s -= 1);
                        s = Math.max(s, 0)
                    } else
                        r = e,
                        t.slides[r] && t.slides.eq(r).remove(),
                        r < s && (s -= 1),
                        s = Math.max(s, 0);
                    n.loop && t.loopCreate(),
                    n.observer && c.observer || t.update(),
                    n.loop ? t.slideTo(s + t.loopedSlides, 0, !1) : t.slideTo(s, 0, !1)
                },
                removeAllSlides: function() {
                    for (var e = this, t = [], n = 0; n < e.slides.length; n += 1)
                        t.push(n);
                    e.removeSlide(t)
                }
            }
              , T = function() {
                var e = i.navigator.userAgent
                  , t = {
                    ios: !1,
                    android: !1,
                    androidChrome: !1,
                    desktop: !1,
                    windows: !1,
                    iphone: !1,
                    ipod: !1,
                    ipad: !1,
                    cordova: i.cordova || i.phonegap,
                    phonegap: i.cordova || i.phonegap
                }
                  , n = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/)
                  , a = e.match(/(Android);?[\s\/]+([\d.]+)?/)
                  , r = e.match(/(iPad).*OS\s([\d_]+)/)
                  , s = e.match(/(iPod)(.*OS\s([\d_]+))?/)
                  , o = !r && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
                if (n && (t.os = "windows",
                t.osVersion = n[2],
                t.windows = !0),
                a && !n && (t.os = "android",
                t.osVersion = a[2],
                t.android = !0,
                t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0),
                (r || o || s) && (t.os = "ios",
                t.ios = !0),
                o && !s && (t.osVersion = o[2].replace(/_/g, "."),
                t.iphone = !0),
                r && (t.osVersion = r[2].replace(/_/g, "."),
                t.ipad = !0),
                s && (t.osVersion = s[3] ? s[3].replace(/_/g, ".") : null,
                t.iphone = !0),
                t.ios && t.osVersion && e.indexOf("Version/") >= 0 && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]),
                t.desktop = !(t.os || t.android || t.webView),
                t.webView = (o || r || s) && e.match(/.*AppleWebKit(?!.*Safari)/i),
                t.os && "ios" === t.os) {
                    var l = t.osVersion.split(".")
                      , d = u.querySelector('meta[name="viewport"]');
                    t.minimalUi = !t.webView && (s || o) && (1 * l[0] == 7 ? 1 * l[1] >= 1 : 1 * l[0] > 7) && d && d.getAttribute("content").indexOf("minimal-ui") >= 0
                }
                return t.pixelRatio = i.devicePixelRatio || 1,
                t
            }()
              , C = function(t) {
                var n = this
                  , i = n.touchEventsData
                  , a = n.params
                  , r = n.touches
                  , s = t;
                if (s.originalEvent && (s = s.originalEvent),
                i.isTouchEvent = "touchstart" === s.type,
                (i.isTouchEvent || !("which"in s) || 3 !== s.which) && (!i.isTouched || !i.isMoved))
                    if (a.noSwiping && e(s.target).closest("." + a.noSwipingClass)[0])
                        n.allowClick = !0;
                    else if (!a.swipeHandler || e(s).closest(a.swipeHandler)[0]) {
                        r.currentX = "touchstart" === s.type ? s.targetTouches[0].pageX : s.pageX,
                        r.currentY = "touchstart" === s.type ? s.targetTouches[0].pageY : s.pageY;
                        var o = r.currentX
                          , l = r.currentY;
                        if (!(T.ios && !T.cordova && a.iOSEdgeSwipeDetection && o <= a.iOSEdgeSwipeThreshold && o >= window.screen.width - a.iOSEdgeSwipeThreshold)) {
                            if (d.extend(i, {
                                isTouched: !0,
                                isMoved: !1,
                                allowTouchCallbacks: !0,
                                isScrolling: void 0,
                                startMoving: void 0
                            }),
                            r.startX = o,
                            r.startY = l,
                            i.touchStartTime = d.now(),
                            n.allowClick = !0,
                            n.updateSize(),
                            n.swipeDirection = void 0,
                            a.threshold > 0 && (i.allowThresholdMove = !1),
                            "touchstart" !== s.type) {
                                var c = !0;
                                e(s.target).is(i.formElements) && (c = !1),
                                u.activeElement && e(u.activeElement).is(i.formElements) && u.activeElement.blur(),
                                c && n.allowTouchMove && s.preventDefault()
                            }
                            n.emit("touchStart", s)
                        }
                    }
            }
              , E = function(t) {
                var n = this
                  , i = n.touchEventsData
                  , a = n.params
                  , r = n.touches
                  , s = n.rtl
                  , o = t;
                if (o.originalEvent && (o = o.originalEvent),
                !i.isTouchEvent || "mousemove" !== o.type) {
                    var l = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX
                      , c = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;
                    if (o.preventedByNestedSwiper)
                        return r.startX = l,
                        void (r.startY = c);
                    if (!n.allowTouchMove)
                        return n.allowClick = !1,
                        void (i.isTouched && (d.extend(r, {
                            startX: l,
                            startY: c,
                            currentX: l,
                            currentY: c
                        }),
                        i.touchStartTime = d.now()));
                    if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
                        if (n.isVertical()) {
                            if (c < r.startY && n.translate <= n.maxTranslate() || c > r.startY && n.translate >= n.minTranslate())
                                return i.isTouched = !1,
                                void (i.isMoved = !1)
                        } else if (l < r.startX && n.translate <= n.maxTranslate() || l > r.startX && n.translate >= n.minTranslate())
                            return;
                    if (i.isTouchEvent && u.activeElement && o.target === u.activeElement && e(o.target).is(i.formElements))
                        return i.isMoved = !0,
                        void (n.allowClick = !1);
                    if (i.allowTouchCallbacks && n.emit("touchMove", o),
                    !(o.targetTouches && o.targetTouches.length > 1)) {
                        r.currentX = l,
                        r.currentY = c;
                        var p = r.currentX - r.startX
                          , f = r.currentY - r.startY;
                        if (void 0 === i.isScrolling) {
                            var h;
                            n.isHorizontal() && r.currentY === r.startY || n.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : p * p + f * f >= 25 && (h = 180 * Math.atan2(Math.abs(f), Math.abs(p)) / Math.PI,
                            i.isScrolling = n.isHorizontal() ? h > a.touchAngle : 90 - h > a.touchAngle)
                        }
                        if (i.isScrolling && n.emit("touchMoveOpposite", o),
                        "undefined" == typeof startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)),
                        i.isTouched)
                            if (i.isScrolling)
                                i.isTouched = !1;
                            else if (i.startMoving) {
                                n.allowClick = !1,
                                o.preventDefault(),
                                a.touchMoveStopPropagation && !a.nested && o.stopPropagation(),
                                i.isMoved || (a.loop && n.loopFix(),
                                i.startTranslate = n.getTranslate(),
                                n.setTransition(0),
                                n.animating && n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                                i.allowMomentumBounce = !1,
                                !a.grabCursor || !0 !== n.allowSlideNext && !0 !== n.allowSlidePrev || n.setGrabCursor(!0),
                                n.emit("sliderFirstMove", o)),
                                n.emit("sliderMove", o),
                                i.isMoved = !0;
                                var v = n.isHorizontal() ? p : f;
                                r.diff = v,
                                v *= a.touchRatio,
                                s && (v = -v),
                                n.swipeDirection = v > 0 ? "prev" : "next",
                                i.currentTranslate = v + i.startTranslate;
                                var m = !0
                                  , g = a.resistanceRatio;
                                if (a.touchReleaseOnEdges && (g = 0),
                                v > 0 && i.currentTranslate > n.minTranslate() ? (m = !1,
                                a.resistance && (i.currentTranslate = n.minTranslate() - 1 + Math.pow(-n.minTranslate() + i.startTranslate + v, g))) : v < 0 && i.currentTranslate < n.maxTranslate() && (m = !1,
                                a.resistance && (i.currentTranslate = n.maxTranslate() + 1 - Math.pow(n.maxTranslate() - i.startTranslate - v, g))),
                                m && (o.preventedByNestedSwiper = !0),
                                !n.allowSlideNext && "next" === n.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
                                !n.allowSlidePrev && "prev" === n.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
                                a.threshold > 0) {
                                    if (!(Math.abs(v) > a.threshold || i.allowThresholdMove))
                                        return void (i.currentTranslate = i.startTranslate);
                                    if (!i.allowThresholdMove)
                                        return i.allowThresholdMove = !0,
                                        r.startX = r.currentX,
                                        r.startY = r.currentY,
                                        i.currentTranslate = i.startTranslate,
                                        void (r.diff = n.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                                }
                                a.followFinger && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (n.updateActiveIndex(),
                                n.updateSlidesClasses()),
                                a.freeMode && (0 === i.velocities.length && i.velocities.push({
                                    position: r[n.isHorizontal() ? "startX" : "startY"],
                                    time: i.touchStartTime
                                }),
                                i.velocities.push({
                                    position: r[n.isHorizontal() ? "currentX" : "currentY"],
                                    time: d.now()
                                })),
                                n.updateProgress(i.currentTranslate),
                                n.setTranslate(i.currentTranslate))
                            }
                    }
                }
            }
              , S = function(e) {
                var t = this
                  , n = t.touchEventsData
                  , i = t.params
                  , a = t.touches
                  , r = t.rtl
                  , s = t.$wrapperEl
                  , o = t.slidesGrid
                  , l = t.snapGrid
                  , u = e;
                if (u.originalEvent && (u = u.originalEvent),
                n.allowTouchCallbacks && t.emit("touchEnd", u),
                n.allowTouchCallbacks = !1,
                n.isTouched) {
                    i.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                    var c = d.now()
                      , p = c - n.touchStartTime;
                    if (t.allowClick && (t.updateClickedSlide(u),
                    t.emit("tap", u),
                    p < 300 && c - n.lastClickTime > 300 && (n.clickTimeout && clearTimeout(n.clickTimeout),
                    n.clickTimeout = d.nextTick(function() {
                        t && !t.destroyed && t.emit("click", u)
                    }, 300)),
                    p < 300 && c - n.lastClickTime < 300 && (n.clickTimeout && clearTimeout(n.clickTimeout),
                    t.emit("doubleTap", u))),
                    n.lastClickTime = d.now(),
                    d.nextTick(function() {
                        t.destroyed || (t.allowClick = !0)
                    }),
                    !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === a.diff || n.currentTranslate === n.startTranslate)
                        return n.isTouched = !1,
                        void (n.isMoved = !1);
                    n.isTouched = !1,
                    n.isMoved = !1;
                    var f;
                    if (f = i.followFinger ? r ? t.translate : -t.translate : -n.currentTranslate,
                    i.freeMode) {
                        if (f < -t.minTranslate())
                            return void t.slideTo(t.activeIndex);
                        if (f > -t.maxTranslate())
                            return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                        if (i.freeModeMomentum) {
                            if (n.velocities.length > 1) {
                                var h = n.velocities.pop()
                                  , v = n.velocities.pop()
                                  , m = h.position - v.position
                                  , g = h.time - v.time;
                                t.velocity = m / g,
                                t.velocity /= 2,
                                Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0),
                                (g > 150 || d.now() - h.time > 300) && (t.velocity = 0)
                            } else
                                t.velocity = 0;
                            t.velocity *= i.freeModeMomentumVelocityRatio,
                            n.velocities.length = 0;
                            var y = 1e3 * i.freeModeMomentumRatio
                              , b = t.velocity * y
                              , x = t.translate + b;
                            r && (x = -x);
                            var w, T = !1, C = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                            if (x < t.maxTranslate())
                                i.freeModeMomentumBounce ? (x + t.maxTranslate() < -C && (x = t.maxTranslate() - C),
                                w = t.maxTranslate(),
                                T = !0,
                                n.allowMomentumBounce = !0) : x = t.maxTranslate();
                            else if (x > t.minTranslate())
                                i.freeModeMomentumBounce ? (x - t.minTranslate() > C && (x = t.minTranslate() + C),
                                w = t.minTranslate(),
                                T = !0,
                                n.allowMomentumBounce = !0) : x = t.minTranslate();
                            else if (i.freeModeSticky) {
                                for (var E, S = 0; S < l.length; S += 1)
                                    if (l[S] > -x) {
                                        E = S;
                                        break
                                    }
                                x = -(x = Math.abs(l[E] - x) < Math.abs(l[E - 1] - x) || "next" === t.swipeDirection ? l[E] : l[E - 1])
                            }
                            if (0 !== t.velocity)
                                y = r ? Math.abs((-x - t.translate) / t.velocity) : Math.abs((x - t.translate) / t.velocity);
                            else if (i.freeModeSticky)
                                return void t.slideReset();
                            i.freeModeMomentumBounce && T ? (t.updateProgress(w),
                            t.setTransition(y),
                            t.setTranslate(x),
                            t.transitionStart(),
                            t.animating = !0,
                            s.transitionEnd(function() {
                                t && !t.destroyed && n.allowMomentumBounce && (t.emit("momentumBounce"),
                                t.setTransition(i.speed),
                                t.setTranslate(w),
                                s.transitionEnd(function() {
                                    t && !t.destroyed && t.transitionEnd()
                                }))
                            })) : t.velocity ? (t.updateProgress(x),
                            t.setTransition(y),
                            t.setTranslate(x),
                            t.transitionStart(),
                            t.animating || (t.animating = !0,
                            s.transitionEnd(function() {
                                t && !t.destroyed && t.transitionEnd()
                            }))) : t.updateProgress(x),
                            t.updateActiveIndex(),
                            t.updateSlidesClasses()
                        }
                        (!i.freeModeMomentum || p >= i.longSwipesMs) && (t.updateProgress(),
                        t.updateActiveIndex(),
                        t.updateSlidesClasses())
                    } else {
                        for (var k = 0, M = t.slidesSizesGrid[0], z = 0; z < o.length; z += i.slidesPerGroup)
                            void 0 !== o[z + i.slidesPerGroup] ? f >= o[z] && f < o[z + i.slidesPerGroup] && (k = z,
                            M = o[z + i.slidesPerGroup] - o[z]) : f >= o[z] && (k = z,
                            M = o[o.length - 1] - o[o.length - 2]);
                        var P = (f - o[k]) / M;
                        if (p > i.longSwipesMs) {
                            if (!i.longSwipes)
                                return void t.slideTo(t.activeIndex);
                            "next" === t.swipeDirection && (P >= i.longSwipesRatio ? t.slideTo(k + i.slidesPerGroup) : t.slideTo(k)),
                            "prev" === t.swipeDirection && (P > 1 - i.longSwipesRatio ? t.slideTo(k + i.slidesPerGroup) : t.slideTo(k))
                        } else {
                            if (!i.shortSwipes)
                                return void t.slideTo(t.activeIndex);
                            "next" === t.swipeDirection && t.slideTo(k + i.slidesPerGroup),
                            "prev" === t.swipeDirection && t.slideTo(k)
                        }
                    }
                }
            }
              , k = function() {
                var e = this
                  , t = e.params
                  , n = e.el;
                if (!n || 0 !== n.offsetWidth) {
                    t.breakpoints && e.setBreakpoint();
                    var i = e.allowSlideNext
                      , a = e.allowSlidePrev;
                    if (e.allowSlideNext = !0,
                    e.allowSlidePrev = !0,
                    e.updateSize(),
                    e.updateSlides(),
                    t.freeMode) {
                        var r = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(r),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses(),
                        t.autoHeight && e.updateAutoHeight()
                    } else
                        e.updateSlidesClasses(),
                        ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
                    e.allowSlidePrev = a,
                    e.allowSlideNext = i
                }
            }
              , M = function(e) {
                var t = this;
                t.allowClick || (t.params.preventClicks && e.preventDefault(),
                t.params.preventClicksPropagation && t.animating && (e.stopPropagation(),
                e.stopImmediatePropagation()))
            }
              , z = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                iOSEdgeSwipeDetection: !1,
                iOSEdgeSwipeThreshold: 20,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeMomentumVelocityRatio: 1,
                freeModeSticky: !1,
                freeModeMinimumVelocity: .02,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 1,
                centeredSlides: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !0,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopFillGroupWithBlank: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                passiveListeners: !0,
                containerModifierClass: "swiper-container-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0
            }
              , P = {
                update: h,
                translate: v,
                transition: m,
                slide: y,
                loop: b,
                grabCursor: x,
                manipulation: w,
                events: {
                    attachEvents: function() {
                        var e = this
                          , t = e.params
                          , n = e.touchEvents
                          , i = e.el
                          , a = e.wrapperEl;
                        e.onTouchStart = C.bind(e),
                        e.onTouchMove = E.bind(e),
                        e.onTouchEnd = S.bind(e),
                        e.onClick = M.bind(e);
                        var r = "container" === t.touchEventsTarget ? i : a
                          , s = !!t.nested;
                        if (g.ie)
                            r.addEventListener(n.start, e.onTouchStart, !1),
                            (c.touch ? r : u).addEventListener(n.move, e.onTouchMove, s),
                            (c.touch ? r : u).addEventListener(n.end, e.onTouchEnd, !1);
                        else {
                            if (c.touch) {
                                var o = !("touchstart" !== n.start || !c.passiveListener || !t.passiveListeners) && {
                                    passive: !0,
                                    capture: !1
                                };
                                r.addEventListener(n.start, e.onTouchStart, o),
                                r.addEventListener(n.move, e.onTouchMove, c.passiveListener ? {
                                    passive: !1,
                                    capture: s
                                } : s),
                                r.addEventListener(n.end, e.onTouchEnd, o)
                            }
                            (t.simulateTouch && !T.ios && !T.android || t.simulateTouch && !c.touch && T.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1),
                            u.addEventListener("mousemove", e.onTouchMove, s),
                            u.addEventListener("mouseup", e.onTouchEnd, !1))
                        }
                        (t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0),
                        e.on("resize observerUpdate", k)
                    },
                    detachEvents: function() {
                        var e = this
                          , t = e.params
                          , n = e.touchEvents
                          , i = e.el
                          , a = e.wrapperEl
                          , r = "container" === t.touchEventsTarget ? i : a
                          , s = !!t.nested;
                        if (g.ie)
                            r.removeEventListener(n.start, e.onTouchStart, !1),
                            (c.touch ? r : u).removeEventListener(n.move, e.onTouchMove, s),
                            (c.touch ? r : u).removeEventListener(n.end, e.onTouchEnd, !1);
                        else {
                            if (c.touch) {
                                var o = !("onTouchStart" !== n.start || !c.passiveListener || !t.passiveListeners) && {
                                    passive: !0,
                                    capture: !1
                                };
                                r.removeEventListener(n.start, e.onTouchStart, o),
                                r.removeEventListener(n.move, e.onTouchMove, s),
                                r.removeEventListener(n.end, e.onTouchEnd, o)
                            }
                            (t.simulateTouch && !T.ios && !T.android || t.simulateTouch && !c.touch && T.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1),
                            u.removeEventListener("mousemove", e.onTouchMove, s),
                            u.removeEventListener("mouseup", e.onTouchEnd, !1))
                        }
                        (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0),
                        e.off("resize observerUpdate", k)
                    }
                },
                breakpoints: {
                    setBreakpoint: function() {
                        var e = this
                          , t = e.activeIndex
                          , n = e.loopedSlides;
                        void 0 === n && (n = 0);
                        var i = e.params
                          , a = i.breakpoints;
                        if (a && (!a || 0 !== Object.keys(a).length)) {
                            var r = e.getBreakpoint(a);
                            if (r && e.currentBreakpoint !== r) {
                                var s = r in a ? a[r] : e.originalParams
                                  , o = i.loop && s.slidesPerView !== i.slidesPerView;
                                d.extend(e.params, s),
                                d.extend(e, {
                                    allowTouchMove: e.params.allowTouchMove,
                                    allowSlideNext: e.params.allowSlideNext,
                                    allowSlidePrev: e.params.allowSlidePrev
                                }),
                                e.currentBreakpoint = r,
                                o && (e.loopDestroy(),
                                e.loopCreate(),
                                e.updateSlides(),
                                e.slideTo(t - n + e.loopedSlides, 0, !1)),
                                e.emit("breakpoint", s)
                            }
                        }
                    },
                    getBreakpoint: function(e) {
                        if (e) {
                            var t = !1
                              , n = [];
                            Object.keys(e).forEach(function(e) {
                                n.push(e)
                            }),
                            n.sort(function(e, t) {
                                return parseInt(e, 10) - parseInt(t, 10)
                            });
                            for (var a = 0; a < n.length; a += 1) {
                                var r = n[a];
                                r >= i.innerWidth && !t && (t = r)
                            }
                            return t || "max"
                        }
                    }
                },
                classes: {
                    addClasses: function() {
                        var e = this
                          , t = e.classNames
                          , n = e.params
                          , a = e.rtl
                          , r = e.$el
                          , s = [];
                        s.push(n.direction),
                        n.freeMode && s.push("free-mode"),
                        c.flexbox || s.push("no-flexbox"),
                        n.autoHeight && s.push("autoheight"),
                        a && s.push("rtl"),
                        n.slidesPerColumn > 1 && s.push("multirow"),
                        T.android && s.push("android"),
                        T.ios && s.push("ios"),
                        (i.navigator.pointerEnabled || i.navigator.msPointerEnabled) && s.push("wp8-" + n.direction),
                        s.forEach(function(e) {
                            t.push(n.containerModifierClass + e)
                        }),
                        r.addClass(t.join(" "))
                    },
                    removeClasses: function() {
                        var e = this
                          , t = e.$el
                          , n = e.classNames;
                        t.removeClass(n.join(" "))
                    }
                },
                images: {
                    loadImage: function(e, t, n, a, r, s) {
                        function o() {
                            s && s()
                        }
                        var l;
                        e.complete && r ? o() : t ? ((l = new i.Image).onload = o,
                        l.onerror = o,
                        a && (l.sizes = a),
                        n && (l.srcset = n),
                        t && (l.src = t)) : o()
                    },
                    preloadImages: function() {
                        var e = this;
                        e.imagesToLoad = e.$el.find("img");
                        for (var t = 0; t < e.imagesToLoad.length; t += 1) {
                            var n = e.imagesToLoad[t];
                            e.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, function() {
                                void 0 !== e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                                e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(),
                                e.emit("imagesReady")))
                            })
                        }
                    }
                }
            }
              , A = {}
              , D = function(t) {
                function a() {
                    for (var n = [], r = arguments.length; r--; )
                        n[r] = arguments[r];
                    var s, o;
                    if (1 === n.length && n[0].constructor && n[0].constructor === Object)
                        o = n[0];
                    else {
                        var l;
                        s = (l = n)[0],
                        o = l[1]
                    }
                    o || (o = {}),
                    o = d.extend({}, o),
                    s && !o.el && (o.el = s),
                    t.call(this, o),
                    Object.keys(P).forEach(function(e) {
                        Object.keys(P[e]).forEach(function(t) {
                            a.prototype[t] || (a.prototype[t] = P[e][t])
                        })
                    });
                    var u = this;
                    void 0 === u.modules && (u.modules = {}),
                    Object.keys(u.modules).forEach(function(e) {
                        var t = u.modules[e];
                        if (t.params) {
                            var n = Object.keys(t.params)[0]
                              , i = t.params[n];
                            if ("object" != typeof i)
                                return;
                            if (!(n in o && "enabled"in i))
                                return;
                            !0 === o[n] && (o[n] = {
                                enabled: !0
                            }),
                            "object" != typeof o[n] || "enabled"in o[n] || (o[n].enabled = !0),
                            o[n] || (o[n] = {
                                enabled: !1
                            })
                        }
                    });
                    var p = d.extend({}, z);
                    u.useModulesParams(p),
                    u.params = d.extend({}, p, A, o),
                    u.originalParams = d.extend({}, u.params),
                    u.passedParams = d.extend({}, o);
                    var f = e(u.params.el);
                    if (s = f[0]) {
                        if (f.length > 1) {
                            var h = [];
                            return f.each(function(e, t) {
                                var n = d.extend({}, o, {
                                    el: t
                                });
                                h.push(new a(n))
                            }),
                            h
                        }
                        s.swiper = u,
                        f.data("swiper", u);
                        var v = f.children("." + u.params.wrapperClass);
                        return d.extend(u, {
                            $el: f,
                            el: s,
                            $wrapperEl: v,
                            wrapperEl: v[0],
                            classNames: [],
                            slides: e(),
                            slidesGrid: [],
                            snapGrid: [],
                            slidesSizesGrid: [],
                            isHorizontal: function() {
                                return "horizontal" === u.params.direction
                            },
                            isVertical: function() {
                                return "vertical" === u.params.direction
                            },
                            rtl: "horizontal" === u.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === f.css("direction")),
                            wrongRTL: "-webkit-box" === v.css("display"),
                            activeIndex: 0,
                            realIndex: 0,
                            isBeginning: !0,
                            isEnd: !1,
                            translate: 0,
                            progress: 0,
                            velocity: 0,
                            animating: !1,
                            allowSlideNext: u.params.allowSlideNext,
                            allowSlidePrev: u.params.allowSlidePrev,
                            touchEvents: function() {
                                var e = ["touchstart", "touchmove", "touchend"]
                                  , t = ["mousedown", "mousemove", "mouseup"];
                                return i.navigator.pointerEnabled ? t = ["pointerdown", "pointermove", "pointerup"] : i.navigator.msPointerEnabled && (t = ["MSPointerDown", "MsPointerMove", "MsPointerUp"]),
                                {
                                    start: c.touch || !u.params.simulateTouch ? e[0] : t[0],
                                    move: c.touch || !u.params.simulateTouch ? e[1] : t[1],
                                    end: c.touch || !u.params.simulateTouch ? e[2] : t[2]
                                }
                            }(),
                            touchEventsData: {
                                isTouched: void 0,
                                isMoved: void 0,
                                allowTouchCallbacks: void 0,
                                touchStartTime: void 0,
                                isScrolling: void 0,
                                currentTranslate: void 0,
                                startTranslate: void 0,
                                allowThresholdMove: void 0,
                                formElements: "input, select, option, textarea, button, video",
                                lastClickTime: d.now(),
                                clickTimeout: void 0,
                                velocities: [],
                                allowMomentumBounce: void 0,
                                isTouchEvent: void 0,
                                startMoving: void 0
                            },
                            allowClick: !0,
                            allowTouchMove: u.params.allowTouchMove,
                            touches: {
                                startX: 0,
                                startY: 0,
                                currentX: 0,
                                currentY: 0,
                                diff: 0
                            },
                            imagesToLoad: [],
                            imagesLoaded: 0
                        }),
                        u.useModules(),
                        u.params.init && u.init(),
                        u
                    }
                }
                t && (a.__proto__ = t),
                a.prototype = Object.create(t && t.prototype),
                a.prototype.constructor = a;
                var n = {
                    extendedDefaults: {},
                    defaults: {},
                    Class: {},
                    $: {}
                };
                return a.prototype.slidesPerViewDynamic = function() {
                    var e = this
                      , t = e.params
                      , n = e.slides
                      , i = e.slidesGrid
                      , a = e.size
                      , r = e.activeIndex
                      , s = 1;
                    if (t.centeredSlides) {
                        for (var o, l = n[r].swiperSlideSize, d = r + 1; d < n.length; d += 1)
                            n[d] && !o && (s += 1,
                            (l += n[d].swiperSlideSize) > a && (o = !0));
                        for (var u = r - 1; u >= 0; u -= 1)
                            n[u] && !o && (s += 1,
                            (l += n[u].swiperSlideSize) > a && (o = !0))
                    } else
                        for (var c = r + 1; c < n.length; c += 1)
                            i[c] - i[r] < a && (s += 1);
                    return s
                }
                ,
                a.prototype.update = function() {
                    function e() {
                        n = Math.min(Math.max(t.translate, t.maxTranslate()), t.minTranslate()),
                        t.setTranslate(n),
                        t.updateActiveIndex(),
                        t.updateSlidesClasses()
                    }
                    var t = this;
                    if (t && !t.destroyed) {
                        t.updateSize(),
                        t.updateSlides(),
                        t.updateProgress(),
                        t.updateSlidesClasses();
                        var n;
                        t.params.freeMode ? (e(),
                        t.params.autoHeight && t.updateAutoHeight()) : (("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0)) || e(),
                        t.emit("update")
                    }
                }
                ,
                a.prototype.init = function() {
                    var e = this;
                    e.initialized || (e.emit("beforeInit"),
                    e.params.breakpoints && e.setBreakpoint(),
                    e.addClasses(),
                    e.params.loop && e.loopCreate(),
                    e.updateSize(),
                    e.updateSlides(),
                    e.params.grabCursor && e.setGrabCursor(),
                    e.params.preloadImages && e.preloadImages(),
                    e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit),
                    e.attachEvents(),
                    e.initialized = !0,
                    e.emit("init"))
                }
                ,
                a.prototype.destroy = function(e, t) {
                    void 0 === e && (e = !0),
                    void 0 === t && (t = !0);
                    var n = this
                      , i = n.params
                      , a = n.$el
                      , r = n.$wrapperEl
                      , s = n.slides;
                    n.emit("beforeDestroy"),
                    n.initialized = !1,
                    n.detachEvents(),
                    i.loop && n.loopDestroy(),
                    t && (n.removeClasses(),
                    a.removeAttr("style"),
                    r.removeAttr("style"),
                    s && s.length && s.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")),
                    n.emit("destroy"),
                    Object.keys(n.eventsListeners).forEach(function(e) {
                        n.off(e)
                    }),
                    !1 !== e && (n.$el[0].swiper = null,
                    n.$el.data("swiper", null),
                    d.deleteProps(n)),
                    n.destroyed = !0
                }
                ,
                a.extendDefaults = function(e) {
                    d.extend(A, e)
                }
                ,
                n.extendedDefaults.get = function() {
                    return A
                }
                ,
                n.defaults.get = function() {
                    return z
                }
                ,
                n.Class.get = function() {
                    return t
                }
                ,
                n.$.get = function() {
                    return e
                }
                ,
                Object.defineProperties(a, n),
                a
            }(p)
              , N = {
                name: "device",
                proto: {
                    device: T
                },
                static: {
                    device: T
                }
            }
              , L = {
                name: "support",
                proto: {
                    support: c
                },
                static: {
                    support: c
                }
            }
              , $ = {
                name: "browser",
                proto: {
                    browser: g
                },
                static: {
                    browser: g
                }
            }
              , I = {
                name: "resize",
                create: function() {
                    var e = this;
                    d.extend(e, {
                        resize: {
                            resizeHandler: function() {
                                e && !e.destroyed && e.initialized && (e.emit("beforeResize"),
                                e.emit("resize"))
                            },
                            orientationChangeHandler: function() {
                                e && !e.destroyed && e.initialized && e.emit("orientationchange")
                            }
                        }
                    })
                },
                on: {
                    init: function() {
                        var e = this;
                        i.addEventListener("resize", e.resize.resizeHandler),
                        i.addEventListener("orientationchange", e.resize.orientationChangeHandler)
                    },
                    destroy: function() {
                        var e = this;
                        i.removeEventListener("resize", e.resize.resizeHandler),
                        i.removeEventListener("orientationchange", e.resize.orientationChangeHandler)
                    }
                }
            }
              , O = {
                func: i.MutationObserver || i.WebkitMutationObserver,
                attach: function(e, t) {
                    void 0 === t && (t = {});
                    var n = this
                      , i = new (0,
                    O.func)(function(e) {
                        e.forEach(function(e) {
                            n.emit("observerUpdate", e)
                        })
                    }
                    );
                    i.observe(e, {
                        attributes: void 0 === t.attributes || t.attributes,
                        childList: void 0 === t.childList || t.childList,
                        characterData: void 0 === t.characterData || t.characterData
                    }),
                    n.observer.observers.push(i)
                },
                init: function() {
                    var e = this;
                    if (c.observer && e.params.observer) {
                        if (e.params.observeParents)
                            for (var t = e.$el.parents(), n = 0; n < t.length; n += 1)
                                e.observer.attach(t[n]);
                        e.observer.attach(e.$el[0], {
                            childList: !1
                        }),
                        e.observer.attach(e.$wrapperEl[0], {
                            attributes: !1
                        })
                    }
                },
                destroy: function() {
                    var e = this;
                    e.observer.observers.forEach(function(e) {
                        e.disconnect()
                    }),
                    e.observer.observers = []
                }
            }
              , H = {
                name: "observer",
                params: {
                    observer: !1,
                    observeParents: !1
                },
                create: function() {
                    var e = this;
                    d.extend(e, {
                        observer: {
                            init: O.init.bind(e),
                            attach: O.attach.bind(e),
                            destroy: O.destroy.bind(e),
                            observers: []
                        }
                    })
                },
                on: {
                    init: function() {
                        this.observer.init()
                    },
                    destroy: function() {
                        this.observer.destroy()
                    }
                }
            }
              , j = {
                update: function(e) {
                    function t() {
                        n.updateSlides(),
                        n.updateProgress(),
                        n.updateSlidesClasses(),
                        n.lazy && n.params.lazy.enabled && n.lazy.load()
                    }
                    var n = this
                      , i = n.params
                      , a = i.slidesPerView
                      , r = i.slidesPerGroup
                      , s = i.centeredSlides
                      , o = n.virtual
                      , l = o.from
                      , u = o.to
                      , c = o.slides
                      , p = o.slidesGrid
                      , f = o.renderSlide
                      , h = o.offset;
                    n.updateActiveIndex();
                    var v, m = n.activeIndex || 0;
                    v = n.rtl && n.isHorizontal() ? "right" : n.isHorizontal() ? "left" : "top";
                    var g, y;
                    s ? (g = Math.floor(a / 2) + r,
                    y = Math.floor(a / 2) + r) : (g = a + (r - 1),
                    y = r);
                    var b = Math.max((m || 0) - y, 0)
                      , x = Math.min((m || 0) + g, c.length - 1)
                      , w = (n.slidesGrid[b] || 0) - (n.slidesGrid[0] || 0);
                    if (d.extend(n.virtual, {
                        from: b,
                        to: x,
                        offset: w,
                        slidesGrid: n.slidesGrid
                    }),
                    l === b && u === x && !e)
                        return n.slidesGrid !== p && w !== h && n.slides.css(v, w + "px"),
                        void n.updateProgress();
                    if (n.params.virtual.renderExternal)
                        return n.params.virtual.renderExternal.call(n, {
                            offset: w,
                            from: b,
                            to: x,
                            slides: function() {
                                for (var e = [], t = b; t <= x; t += 1)
                                    e.push(c[t]);
                                return e
                            }()
                        }),
                        void t();
                    var T = []
                      , C = [];
                    if (e)
                        n.$wrapperEl.find("." + n.params.slideClass).remove();
                    else
                        for (var E = l; E <= u; E += 1)
                            (E < b || E > x) && n.$wrapperEl.find("." + n.params.slideClass + '[data-swiper-slide-index="' + E + '"]').remove();
                    for (var S = 0; S < c.length; S += 1)
                        S >= b && S <= x && (void 0 === u || e ? C.push(S) : (S > u && C.push(S),
                        S < l && T.push(S)));
                    C.forEach(function(e) {
                        n.$wrapperEl.append(f(c[e], e))
                    }),
                    T.sort(function(e, t) {
                        return e < t
                    }).forEach(function(e) {
                        n.$wrapperEl.prepend(f(c[e], e))
                    }),
                    n.$wrapperEl.children(".swiper-slide").css(v, w + "px"),
                    t()
                },
                renderSlide: function(t, n) {
                    var i = this
                      , a = i.params.virtual;
                    if (a.cache && i.virtual.cache[n])
                        return i.virtual.cache[n];
                    var r = e(a.renderSlide ? a.renderSlide.call(i, t, n) : '<div class="' + i.params.slideClass + '" data-swiper-slide-index="' + n + '">' + t + "</div>");
                    return r.attr("data-swiper-slide-index") || r.attr("data-swiper-slide-index", n),
                    a.cache && (i.virtual.cache[n] = r),
                    r
                },
                appendSlide: function(e) {
                    var t = this;
                    t.virtual.slides.push(e),
                    t.virtual.update(!0)
                },
                prependSlide: function(e) {
                    var t = this;
                    if (t.virtual.slides.unshift(e),
                    t.params.virtual.cache) {
                        var n = t.virtual.cache
                          , i = {};
                        Object.keys(n).forEach(function(e) {
                            i[e + 1] = n[e]
                        }),
                        t.virtual.cache = i
                    }
                    t.virtual.update(!0),
                    t.slideNext(0)
                }
            }
              , F = {
                name: "virtual",
                params: {
                    virtual: {
                        enabled: !1,
                        slides: [],
                        cache: !0,
                        renderSlide: null,
                        renderExternal: null
                    }
                },
                create: function() {
                    var e = this;
                    d.extend(e, {
                        virtual: {
                            update: j.update.bind(e),
                            appendSlide: j.appendSlide.bind(e),
                            prependSlide: j.prependSlide.bind(e),
                            renderSlide: j.renderSlide.bind(e),
                            slides: e.params.virtual.slides,
                            cache: {}
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        var e = this;
                        if (e.params.virtual.enabled) {
                            e.classNames.push(e.params.containerModifierClass + "virtual");
                            var t = {
                                watchSlidesProgress: !0
                            };
                            d.extend(e.params, t),
                            d.extend(e.originalParams, t),
                            e.virtual.update()
                        }
                    },
                    setTranslate: function() {
                        var e = this;
                        e.params.virtual.enabled && e.virtual.update()
                    }
                }
            }
              , q = {
                handle: function(e) {
                    var t = this
                      , n = e;
                    n.originalEvent && (n = n.originalEvent);
                    var a = n.keyCode || n.charCode;
                    if (!t.allowSlideNext && (t.isHorizontal() && 39 === a || t.isVertical() && 40 === a))
                        return !1;
                    if (!t.allowSlidePrev && (t.isHorizontal() && 37 === a || t.isVertical() && 38 === a))
                        return !1;
                    if (!(n.shiftKey || n.altKey || n.ctrlKey || n.metaKey || u.activeElement && u.activeElement.nodeName && ("input" === u.activeElement.nodeName.toLowerCase() || "textarea" === u.activeElement.nodeName.toLowerCase()))) {
                        if (37 === a || 39 === a || 38 === a || 40 === a) {
                            var r = !1;
                            if (t.$el.parents("." + t.params.slideClass).length > 0 && 0 === t.$el.parents("." + t.params.slideActiveClass).length)
                                return;
                            var s = {
                                left: i.pageXOffset,
                                top: i.pageYOffset
                            }
                              , o = i.innerWidth
                              , l = i.innerHeight
                              , d = t.$el.offset();
                            t.rtl && (d.left -= t.$el[0].scrollLeft);
                            for (var c = [[d.left, d.top], [d.left + t.width, d.top], [d.left, d.top + t.height], [d.left + t.width, d.top + t.height]], p = 0; p < c.length; p += 1) {
                                var f = c[p];
                                f[0] >= s.left && f[0] <= s.left + o && f[1] >= s.top && f[1] <= s.top + l && (r = !0)
                            }
                            if (!r)
                                return
                        }
                        t.isHorizontal() ? (37 !== a && 39 !== a || (n.preventDefault ? n.preventDefault() : n.returnValue = !1),
                        (39 === a && !t.rtl || 37 === a && t.rtl) && t.slideNext(),
                        (37 === a && !t.rtl || 39 === a && t.rtl) && t.slidePrev()) : (38 !== a && 40 !== a || (n.preventDefault ? n.preventDefault() : n.returnValue = !1),
                        40 === a && t.slideNext(),
                        38 === a && t.slidePrev()),
                        t.emit("keyPress", a)
                    }
                },
                enable: function() {
                    var t = this;
                    t.keyboard.enabled || (e(u).on("keydown", t.keyboard.handle),
                    t.keyboard.enabled = !0)
                },
                disable: function() {
                    var t = this;
                    t.keyboard.enabled && (e(u).off("keydown", t.keyboard.handle),
                    t.keyboard.enabled = !1)
                }
            }
              , R = {
                name: "keyboard",
                params: {
                    keyboard: {
                        enabled: !1
                    }
                },
                create: function() {
                    var e = this;
                    d.extend(e, {
                        keyboard: {
                            enabled: !1,
                            enable: q.enable.bind(e),
                            disable: q.disable.bind(e),
                            handle: q.handle.bind(e)
                        }
                    })
                },
                on: {
                    init: function() {
                        var e = this;
                        e.params.keyboard.enabled && e.keyboard.enable()
                    },
                    destroy: function() {
                        var e = this;
                        e.keyboard.enabled && e.keyboard.disable()
                    }
                }
            }
              , B = {
                lastScrollTime: d.now(),
                event: i.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : a() ? "wheel" : "mousewheel",
                normalize: function(e) {
                    var t = 0
                      , n = 0
                      , i = 0
                      , a = 0;
                    return "detail"in e && (n = e.detail),
                    "wheelDelta"in e && (n = -e.wheelDelta / 120),
                    "wheelDeltaY"in e && (n = -e.wheelDeltaY / 120),
                    "wheelDeltaX"in e && (t = -e.wheelDeltaX / 120),
                    "axis"in e && e.axis === e.HORIZONTAL_AXIS && (t = n,
                    n = 0),
                    i = 10 * t,
                    a = 10 * n,
                    "deltaY"in e && (a = e.deltaY),
                    "deltaX"in e && (i = e.deltaX),
                    (i || a) && e.deltaMode && (1 === e.deltaMode ? (i *= 40,
                    a *= 40) : (i *= 800,
                    a *= 800)),
                    i && !t && (t = i < 1 ? -1 : 1),
                    a && !n && (n = a < 1 ? -1 : 1),
                    {
                        spinX: t,
                        spinY: n,
                        pixelX: i,
                        pixelY: a
                    }
                },
                handle: function(e) {
                    var t = e
                      , n = this
                      , a = n.params.mousewheel;
                    t.originalEvent && (t = t.originalEvent);
                    var r = 0
                      , s = n.rtl ? -1 : 1
                      , o = B.normalize(t);
                    if (a.forceToAxis)
                        if (n.isHorizontal()) {
                            if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY)))
                                return !0;
                            r = o.pixelX * s
                        } else {
                            if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX)))
                                return !0;
                            r = o.pixelY
                        }
                    else
                        r = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * s : -o.pixelY;
                    if (0 === r)
                        return !0;
                    if (a.invert && (r = -r),
                    n.params.freeMode) {
                        var l = n.getTranslate() + r * a.sensitivity
                          , u = n.isBeginning
                          , c = n.isEnd;
                        if (l >= n.minTranslate() && (l = n.minTranslate()),
                        l <= n.maxTranslate() && (l = n.maxTranslate()),
                        n.setTransition(0),
                        n.setTranslate(l),
                        n.updateProgress(),
                        n.updateActiveIndex(),
                        n.updateSlidesClasses(),
                        (!u && n.isBeginning || !c && n.isEnd) && n.updateSlidesClasses(),
                        n.params.freeModeSticky && (clearTimeout(n.mousewheel.timeout),
                        n.mousewheel.timeout = d.nextTick(function() {
                            n.slideReset()
                        }, 300)),
                        n.emit("scroll", t),
                        n.params.autoplay && n.params.autoplayDisableOnInteraction && n.stopAutoplay(),
                        0 === l || l === n.maxTranslate())
                            return !0
                    } else {
                        if (d.now() - n.mousewheel.lastScrollTime > 60)
                            if (r < 0)
                                if (n.isEnd && !n.params.loop || n.animating) {
                                    if (a.releaseOnEdges)
                                        return !0
                                } else
                                    n.slideNext(),
                                    n.emit("scroll", t);
                            else if (n.isBeginning && !n.params.loop || n.animating) {
                                if (a.releaseOnEdges)
                                    return !0
                            } else
                                n.slidePrev(),
                                n.emit("scroll", t);
                        n.mousewheel.lastScrollTime = (new i.Date).getTime()
                    }
                    return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
                    !1
                },
                enable: function() {
                    var t = this;
                    if (!B.event)
                        return !1;
                    if (t.mousewheel.enabled)
                        return !1;
                    var n = t.$el;
                    return "container" !== t.params.mousewheel.eventsTarged && (n = e(t.params.mousewheel.eventsTarged)),
                    n.on(B.event, t.mousewheel.handle),
                    t.mousewheel.enabled = !0,
                    !0
                },
                disable: function() {
                    var t = this;
                    if (!B.event)
                        return !1;
                    if (!t.mousewheel.enabled)
                        return !1;
                    var n = t.$el;
                    return "container" !== t.params.mousewheel.eventsTarged && (n = e(t.params.mousewheel.eventsTarged)),
                    n.off(B.event, t.mousewheel.handle),
                    t.mousewheel.enabled = !1,
                    !0
                }
            }
              , _ = {
                name: "mousewheel",
                params: {
                    mousewheel: {
                        enabled: !1,
                        releaseOnEdges: !1,
                        invert: !1,
                        forceToAxis: !1,
                        sensitivity: 1,
                        eventsTarged: "container"
                    }
                },
                create: function() {
                    var e = this;
                    d.extend(e, {
                        mousewheel: {
                            enabled: !1,
                            enable: B.enable.bind(e),
                            disable: B.disable.bind(e),
                            handle: B.handle.bind(e),
                            lastScrollTime: d.now()
                        }
                    })
                },
                on: {
                    init: function() {
                        var e = this;
                        e.params.mousewheel.enabled && e.mousewheel.enable()
                    },
                    destroy: function() {
                        var e = this;
                        e.mousewheel.enabled && e.mousewheel.disable()
                    }
                }
            }
              , X = {
                update: function() {
                    var e = this
                      , t = e.params.navigation;
                    if (!e.params.loop) {
                        var n = e.navigation
                          , i = n.$nextEl
                          , a = n.$prevEl;
                        a && a.length > 0 && (e.isBeginning ? a.addClass(t.disabledClass) : a.removeClass(t.disabledClass)),
                        i && i.length > 0 && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass))
                    }
                },
                init: function() {
                    var t = this
                      , n = t.params.navigation;
                    if (n.nextEl || n.prevEl) {
                        var i, a;
                        n.nextEl && (i = e(n.nextEl),
                        t.params.uniqueNavElements && "string" == typeof n.nextEl && i.length > 1 && 1 === t.$el.find(n.nextEl).length && (i = t.$el.find(n.nextEl))),
                        n.prevEl && (a = e(n.prevEl),
                        t.params.uniqueNavElements && "string" == typeof n.prevEl && a.length > 1 && 1 === t.$el.find(n.prevEl).length && (a = t.$el.find(n.prevEl))),
                        i && i.length > 0 && i.on("click", function(e) {
                            e.preventDefault(),
                            t.isEnd && !t.params.loop || t.slideNext()
                        }),
                        a && a.length > 0 && a.on("click", function(e) {
                            e.preventDefault(),
                            t.isBeginning && !t.params.loop || t.slidePrev()
                        }),
                        d.extend(t.navigation, {
                            $nextEl: i,
                            nextEl: i && i[0],
                            $prevEl: a,
                            prevEl: a && a[0]
                        })
                    }
                },
                destroy: function() {
                    var e = this
                      , t = e.navigation
                      , n = t.$nextEl
                      , i = t.$prevEl;
                    n && n.length && (n.off("click"),
                    n.removeClass(e.params.navigation.disabledClass)),
                    i && i.length && (i.off("click"),
                    i.removeClass(e.params.navigation.disabledClass))
                }
            }
              , W = {
                name: "navigation",
                params: {
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden"
                    }
                },
                create: function() {
                    var e = this;
                    d.extend(e, {
                        navigation: {
                            init: X.init.bind(e),
                            update: X.update.bind(e),
                            destroy: X.destroy.bind(e)
                        }
                    })
                },
                on: {
                    init: function() {
                        var e = this;
                        e.navigation.init(),
                        e.navigation.update()
                    },
                    toEdge: function() {
                        this.navigation.update()
                    },
                    fromEdge: function() {
                        this.navigation.update()
                    },
                    destroy: function() {
                        this.navigation.destroy()
                    },
                    click: function(t) {
                        var n = this
                          , i = n.navigation
                          , a = i.$nextEl
                          , r = i.$prevEl;
                        !n.params.navigation.hideOnClick || e(t.target).is(r) || e(t.target).is(a) || (a && a.toggleClass(n.params.navigation.hiddenClass),
                        r && r.toggleClass(n.params.navigation.hiddenClass))
                    }
                }
            }
              , G = {
                update: function() {
                    var t = this
                      , n = t.rtl
                      , i = t.params.pagination;
                    if (i.el && t.pagination.el && t.pagination.$el && 0 !== t.pagination.$el.length) {
                        var a, r = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length, s = t.pagination.$el, o = t.params.loop ? Math.ceil((r - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                        if (t.params.loop ? ((a = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup)) > r - 1 - 2 * t.loopedSlides && (a -= r - 2 * t.loopedSlides),
                        a > o - 1 && (a -= o),
                        a < 0 && "bullets" !== t.params.paginationType && (a = o + a)) : a = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0,
                        "bullets" === i.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                            var l = t.pagination.bullets;
                            if (i.dynamicBullets && (t.pagination.bulletSize = l.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                            s.css(t.isHorizontal() ? "width" : "height", 5 * t.pagination.bulletSize + "px")),
                            l.removeClass(i.bulletActiveClass + " " + i.bulletActiveClass + "-next " + i.bulletActiveClass + "-next-next " + i.bulletActiveClass + "-prev " + i.bulletActiveClass + "-prev-prev"),
                            s.length > 1)
                                l.each(function(t, n) {
                                    var r = e(n);
                                    r.index() === a && (r.addClass(i.bulletActiveClass),
                                    i.dynamicBullets && (r.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"),
                                    r.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next")))
                                });
                            else {
                                var d = l.eq(a);
                                d.addClass(i.bulletActiveClass),
                                i.dynamicBullets && (d.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"),
                                d.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next"))
                            }
                            if (i.dynamicBullets) {
                                var u = Math.min(l.length, 5)
                                  , c = (t.pagination.bulletSize * u - t.pagination.bulletSize) / 2 - a * t.pagination.bulletSize
                                  , p = n ? "right" : "left";
                                l.css(t.isHorizontal() ? p : "top", c + "px")
                            }
                        }
                        if ("fraction" === i.type && (s.find("." + i.currentClass).text(a + 1),
                        s.find("." + i.totalClass).text(o)),
                        "progressbar" === i.type) {
                            var f = (a + 1) / o
                              , h = f
                              , v = 1;
                            t.isHorizontal() || (v = f,
                            h = 1),
                            s.find("." + i.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + h + ") scaleY(" + v + ")").transition(t.params.speed)
                        }
                        "custom" === i.type && i.renderCustom ? (s.html(i.renderCustom(t, a + 1, o)),
                        t.emit("paginationRender", t, s[0])) : t.emit("paginationUpdate", t, s[0])
                    }
                },
                render: function() {
                    var e = this
                      , t = e.params.pagination;
                    if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                        var n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
                          , i = e.pagination.$el
                          , a = "";
                        if ("bullets" === t.type) {
                            for (var r = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, s = 0; s < r; s += 1)
                                t.renderBullet ? a += t.renderBullet.call(e, s, t.bulletClass) : a += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                            i.html(a),
                            e.pagination.bullets = i.find("." + t.bulletClass)
                        }
                        "fraction" === t.type && (a = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>',
                        i.html(a)),
                        "progressbar" === t.type && (a = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>',
                        i.html(a)),
                        "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
                    }
                },
                init: function() {
                    var t = this
                      , n = t.params.pagination;
                    if (n.el) {
                        var i = e(n.el);
                        0 !== i.length && (t.params.uniqueNavElements && "string" == typeof n.el && i.length > 1 && 1 === t.$el.find(n.el).length && (i = t.$el.find(n.el)),
                        "bullets" === n.type && n.clickable && i.addClass(n.clickableClass),
                        i.addClass(n.modifierClass + n.type),
                        "bullets" === n.type && n.dynamicBullets && i.addClass("" + n.modifierClass + n.type + "-dynamic"),
                        n.clickable && i.on("click", "." + n.bulletClass, function(n) {
                            n.preventDefault();
                            var i = e(this).index() * t.params.slidesPerGroup;
                            t.params.loop && (i += t.loopedSlides),
                            t.slideTo(i)
                        }),
                        d.extend(t.pagination, {
                            $el: i,
                            el: i[0]
                        }))
                    }
                },
                destroy: function() {
                    var e = this
                      , t = e.params.pagination;
                    if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                        var n = e.pagination.$el;
                        n.removeClass(t.hiddenClass),
                        n.removeClass(t.modifierClass + t.type),
                        e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass),
                        t.clickable && n.off("click", "." + t.bulletClass)
                    }
                }
            }
              , Y = {
                name: "pagination",
                params: {
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        type: "bullets",
                        dynamicBullets: !1,
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                        modifierClass: "swiper-pagination-",
                        currentClass: "swiper-pagination-current",
                        totalClass: "swiper-pagination-total",
                        hiddenClass: "swiper-pagination-hidden",
                        progressbarFillClass: "swiper-pagination-progressbar-fill",
                        clickableClass: "swiper-pagination-clickable"
                    }
                },
                create: function() {
                    var e = this;
                    d.extend(e, {
                        pagination: {
                            init: G.init.bind(e),
                            render: G.render.bind(e),
                            update: G.update.bind(e),
                            destroy: G.destroy.bind(e)
                        }
                    })
                },
                on: {
                    init: function() {
                        var e = this;
                        e.pagination.init(),
                        e.pagination.render(),
                        e.pagination.update()
                    },
                    activeIndexChange: function() {
                        var e = this;
                        e.params.loop ? e.pagination.update() : void 0 === e.snapIndex && e.pagination.update()
                    },
                    snapIndexChange: function() {
                        var e = this;
                        e.params.loop || e.pagination.update()
                    },
                    slidesLengthChange: function() {
                        var e = this;
                        e.params.loop && (e.pagination.render(),
                        e.pagination.update())
                    },
                    snapGridLengthChange: function() {
                        var e = this;
                        e.params.loop || (e.pagination.render(),
                        e.pagination.update())
                    },
                    destroy: function() {
                        this.pagination.destroy()
                    },
                    click: function(t) {
                        var n = this;
                        n.params.pagination.el && n.params.pagination.hideOnClick && n.pagination.$el.length > 0 && !e(t.target).hasClass(n.params.pagination.bulletClass) && n.pagination.$el.toggleClass(n.params.pagination.hiddenClass)
                    }
                }
            }
              , V = {
                setTranslate: function() {
                    var e = this;
                    if (e.params.scrollbar.el && e.scrollbar.el) {
                        var t = e.scrollbar
                          , n = e.rtl
                          , i = e.progress
                          , a = t.dragSize
                          , r = t.trackSize
                          , s = t.$dragEl
                          , o = t.$el
                          , l = e.params.scrollbar
                          , d = a
                          , u = (r - a) * i;
                        n && e.isHorizontal() ? (u = -u) > 0 ? (d = a - u,
                        u = 0) : -u + a > r && (d = r + u) : u < 0 ? (d = a + u,
                        u = 0) : u + a > r && (d = r - u),
                        e.isHorizontal() ? (c.transforms3d ? s.transform("translate3d(" + u + "px, 0, 0)") : s.transform("translateX(" + u + "px)"),
                        s[0].style.width = d + "px") : (c.transforms3d ? s.transform("translate3d(0px, " + u + "px, 0)") : s.transform("translateY(" + u + "px)"),
                        s[0].style.height = d + "px"),
                        l.hide && (clearTimeout(e.scrollbar.timeout),
                        o[0].style.opacity = 1,
                        e.scrollbar.timeout = setTimeout(function() {
                            o[0].style.opacity = 0,
                            o.transition(400)
                        }, 1e3))
                    }
                },
                setTransition: function(e) {
                    var t = this;
                    t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
                },
                updateSize: function() {
                    var e = this;
                    if (e.params.scrollbar.el && e.scrollbar.el) {
                        var t = e.scrollbar
                          , n = t.$dragEl
                          , i = t.$el;
                        n[0].style.width = "",
                        n[0].style.height = "";
                        var a, r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, s = e.size / e.virtualSize, o = s * (r / e.size);
                        a = "auto" === e.params.scrollbar.dragSize ? r * s : parseInt(e.params.scrollbar.dragSize, 10),
                        e.isHorizontal() ? n[0].style.width = a + "px" : n[0].style.height = a + "px",
                        i[0].style.display = s >= 1 ? "none" : "",
                        e.params.scrollbarHide && (i[0].style.opacity = 0),
                        d.extend(t, {
                            trackSize: r,
                            divider: s,
                            moveDivider: o,
                            dragSize: a
                        })
                    }
                },
                setDragPosition: function(e) {
                    var t, n = this, i = n.scrollbar, a = i.$el, r = i.dragSize, s = i.trackSize;
                    t = ((n.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - a.offset()[n.isHorizontal() ? "left" : "top"] - r / 2) / (s - r),
                    t = Math.max(Math.min(t, 1), 0),
                    n.rtl && (t = 1 - t);
                    var o = n.minTranslate() + (n.maxTranslate() - n.minTranslate()) * t;
                    n.updateProgress(o),
                    n.setTranslate(o),
                    n.updateActiveIndex(),
                    n.updateSlidesClasses()
                },
                onDragStart: function(e) {
                    var t = this
                      , n = t.params.scrollbar
                      , i = t.scrollbar
                      , a = t.$wrapperEl
                      , r = i.$el
                      , s = i.$dragEl;
                    t.scrollbar.isTouched = !0,
                    e.preventDefault(),
                    e.stopPropagation(),
                    a.transition(100),
                    s.transition(100),
                    i.setDragPosition(e),
                    clearTimeout(t.scrollbar.dragTimeout),
                    r.transition(0),
                    n.hide && r.css("opacity", 1),
                    t.emit("scrollbarDragStart", e)
                },
                onDragMove: function(e) {
                    var t = this
                      , n = t.scrollbar
                      , i = t.$wrapperEl
                      , a = n.$el
                      , r = n.$dragEl;
                    t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                    n.setDragPosition(e),
                    i.transition(0),
                    a.transition(0),
                    r.transition(0),
                    t.emit("scrollbarDragMove", e))
                },
                onDragEnd: function(e) {
                    var t = this
                      , n = t.params.scrollbar
                      , i = t.scrollbar.$el;
                    t.scrollbar.isTouched && (t.scrollbar.isTouched = !1,
                    n.hide && (clearTimeout(t.scrollbar.dragTimeout),
                    t.scrollbar.dragTimeout = d.nextTick(function() {
                        i.css("opacity", 0),
                        i.transition(400)
                    }, 1e3)),
                    t.emit("scrollbarDragEnd", e),
                    n.snapOnRelease && t.slideReset())
                },
                enableDraggable: function() {
                    var t = this;
                    if (t.params.scrollbar.el) {
                        var n = t.scrollbar.$el
                          , i = c.touch ? n[0] : document;
                        n.on(t.scrollbar.dragEvents.start, t.scrollbar.onDragStart),
                        e(i).on(t.scrollbar.dragEvents.move, t.scrollbar.onDragMove),
                        e(i).on(t.scrollbar.dragEvents.end, t.scrollbar.onDragEnd)
                    }
                },
                disableDraggable: function() {
                    var t = this;
                    if (t.params.scrollbar.el) {
                        var n = t.scrollbar.$el
                          , i = c.touch ? n[0] : document;
                        n.off(t.scrollbar.dragEvents.start),
                        e(i).off(t.scrollbar.dragEvents.move),
                        e(i).off(t.scrollbar.dragEvents.end)
                    }
                },
                init: function() {
                    var t = this;
                    if (t.params.scrollbar.el) {
                        var n = t.scrollbar
                          , i = t.$el
                          , a = t.touchEvents
                          , r = t.params.scrollbar
                          , s = e(r.el);
                        t.params.uniqueNavElements && "string" == typeof r.el && s.length > 1 && 1 === i.find(r.el).length && (s = i.find(r.el));
                        var o = s.find(".swiper-scrollbar-drag");
                        0 === o.length && (o = e('<div class="swiper-scrollbar-drag"></div>'),
                        s.append(o)),
                        t.scrollbar.dragEvents = !1 !== t.params.simulateTouch || c.touch ? a : {
                            start: "mousedown",
                            move: "mousemove",
                            end: "mouseup"
                        },
                        d.extend(n, {
                            $el: s,
                            el: s[0],
                            $dragEl: o,
                            dragEl: o[0]
                        }),
                        r.draggable && n.enableDraggable()
                    }
                },
                destroy: function() {
                    this.scrollbar.disableDraggable()
                }
            }
              , U = {
                name: "scrollbar",
                params: {
                    scrollbar: {
                        el: null,
                        dragSize: "auto",
                        hide: !1,
                        draggable: !1,
                        snapOnRelease: !0
                    }
                },
                create: function() {
                    var e = this;
                    d.extend(e, {
                        scrollbar: {
                            init: V.init.bind(e),
                            destroy: V.destroy.bind(e),
                            updateSize: V.updateSize.bind(e),
                            setTranslate: V.setTranslate.bind(e),
                            setTransition: V.setTransition.bind(e),
                            enableDraggable: V.enableDraggable.bind(e),
                            disableDraggable: V.disableDraggable.bind(e),
                            setDragPosition: V.setDragPosition.bind(e),
                            onDragStart: V.onDragStart.bind(e),
                            onDragMove: V.onDragMove.bind(e),
                            onDragEnd: V.onDragEnd.bind(e),
                            isTouched: !1,
                            timeout: null,
                            dragTimeout: null
                        }
                    })
                },
                on: {
                    init: function() {
                        var e = this;
                        e.scrollbar.init(),
                        e.scrollbar.updateSize(),
                        e.scrollbar.setTranslate()
                    },
                    update: function() {
                        this.scrollbar.updateSize()
                    },
                    resize: function() {
                        this.scrollbar.updateSize()
                    },
                    observerUpdate: function() {
                        this.scrollbar.updateSize()
                    },
                    setTranslate: function() {
                        this.scrollbar.setTranslate()
                    },
                    setTransition: function(e) {
                        this.scrollbar.setTransition(e)
                    },
                    destroy: function() {
                        this.scrollbar.destroy()
                    }
                }
            }
              , K = {
                setTransform: function(t, n) {
                    var i = this
                      , a = i.rtl
                      , r = e(t)
                      , s = a ? -1 : 1
                      , o = r.attr("data-swiper-parallax") || "0"
                      , l = r.attr("data-swiper-parallax-x")
                      , d = r.attr("data-swiper-parallax-y")
                      , u = r.attr("data-swiper-parallax-scale")
                      , c = r.attr("data-swiper-parallax-opacity");
                    if (l || d ? (l = l || "0",
                    d = d || "0") : i.isHorizontal() ? (l = o,
                    d = "0") : (d = o,
                    l = "0"),
                    l = l.indexOf("%") >= 0 ? parseInt(l, 10) * n * s + "%" : l * n * s + "px",
                    d = d.indexOf("%") >= 0 ? parseInt(d, 10) * n + "%" : d * n + "px",
                    void 0 !== c && null !== c) {
                        var p = c - (c - 1) * (1 - Math.abs(n));
                        r[0].style.opacity = p
                    }
                    if (void 0 === u || null === u)
                        r.transform("translate3d(" + l + ", " + d + ", 0px)");
                    else {
                        var f = u - (u - 1) * (1 - Math.abs(n));
                        r.transform("translate3d(" + l + ", " + d + ", 0px) scale(" + f + ")")
                    }
                },
                setTranslate: function() {
                    var t = this
                      , n = t.$el
                      , i = t.slides
                      , a = t.progress
                      , r = t.snapGrid;
                    n.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, n) {
                        t.parallax.setTransform(n, a)
                    }),
                    i.each(function(n, i) {
                        var s = i.progress;
                        t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (s += Math.ceil(n / 2) - a * (r.length - 1)),
                        s = Math.min(Math.max(s, -1), 1),
                        e(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, n) {
                            t.parallax.setTransform(n, s)
                        })
                    })
                },
                setTransition: function(t) {
                    void 0 === t && (t = this.params.speed),
                    this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(n, i) {
                        var a = e(i)
                          , r = parseInt(a.attr("data-swiper-parallax-duration"), 10) || t;
                        0 === t && (r = 0),
                        a.transition(r)
                    })
                }
            }
              , Q = {
                name: "parallax",
                params: {
                    parallax: {
                        enabled: !1
                    }
                },
                create: function() {
                    var e = this;
                    d.extend(e, {
                        parallax: {
                            setTransform: K.setTransform.bind(e),
                            setTranslate: K.setTranslate.bind(e),
                            setTransition: K.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        this.params.watchSlidesProgress = !0
                    },
                    init: function() {
                        var e = this;
                        e.params.parallax && e.parallax.setTranslate()
                    },
                    setTranslate: function() {
                        var e = this;
                        e.params.parallax && e.parallax.setTranslate()
                    },
                    setTransition: function(e) {
                        var t = this;
                        t.params.parallax && t.parallax.setTransition(e)
                    }
                }
            }
              , J = {
                getDistanceBetweenTouches: function(e) {
                    if (e.targetTouches.length < 2)
                        return 1;
                    var t = e.targetTouches[0].pageX
                      , n = e.targetTouches[0].pageY
                      , i = e.targetTouches[1].pageX
                      , a = e.targetTouches[1].pageY;
                    return Math.sqrt(Math.pow(i - t, 2) + Math.pow(a - n, 2))
                },
                onGestureStart: function(t) {
                    var n = this
                      , i = n.params.zoom
                      , a = n.zoom
                      , r = a.gesture;
                    if (a.fakeGestureTouched = !1,
                    a.fakeGestureMoved = !1,
                    !c.gestures) {
                        if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2)
                            return;
                        a.fakeGestureTouched = !0,
                        r.scaleStart = J.getDistanceBetweenTouches(t)
                    }
                    r.$slideEl && r.$slideEl.length || (r.$slideEl = e(this),
                    0 === r.$slideEl.length && (r.$slideEl = n.slides.eq(n.activeIndex)),
                    r.$imageEl = r.$slideEl.find("img, svg, canvas"),
                    r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass),
                    r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio,
                    0 !== r.$imageWrapEl.length) ? (r.$imageEl.transition(0),
                    n.zoom.isScaling = !0) : r.$imageEl = void 0
                },
                onGestureChange: function(e) {
                    var t = this
                      , n = t.params.zoom
                      , i = t.zoom
                      , a = i.gesture;
                    if (!c.gestures) {
                        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                            return;
                        i.fakeGestureMoved = !0,
                        a.scaleMove = J.getDistanceBetweenTouches(e)
                    }
                    a.$imageEl && 0 !== a.$imageEl.length && (c.gestures ? t.zoom.scale = e.scale * i.currentScale : i.scale = a.scaleMove / a.scaleStart * i.currentScale,
                    i.scale > a.maxRatio && (i.scale = a.maxRatio - 1 + Math.pow(i.scale - a.maxRatio + 1, .5)),
                    i.scale < n.minRatio && (i.scale = n.minRatio + 1 - Math.pow(n.minRatio - i.scale + 1, .5)),
                    a.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
                },
                onGestureEnd: function(e) {
                    var t = this
                      , n = t.params.zoom
                      , i = t.zoom
                      , a = i.gesture;
                    if (!c.gestures) {
                        if (!i.fakeGestureTouched || !i.fakeGestureMoved)
                            return;
                        if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !T.android)
                            return;
                        i.fakeGestureTouched = !1,
                        i.fakeGestureMoved = !1
                    }
                    a.$imageEl && 0 !== a.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, a.maxRatio), n.minRatio),
                    a.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"),
                    i.currentScale = i.scale,
                    i.isScaling = !1,
                    1 === i.scale && (a.$slideEl = void 0))
                },
                onTouchStart: function(e) {
                    var t = this.zoom
                      , n = t.gesture
                      , i = t.image;
                    n.$imageEl && 0 !== n.$imageEl.length && (i.isTouched || (T.android && e.preventDefault(),
                    i.isTouched = !0,
                    i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
                    i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
                },
                onTouchMove: function(e) {
                    var t = this
                      , n = t.zoom
                      , i = n.gesture
                      , a = n.image
                      , r = n.velocity;
                    if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1,
                    a.isTouched && i.$slideEl)) {
                        a.isMoved || (a.width = i.$imageEl[0].offsetWidth,
                        a.height = i.$imageEl[0].offsetHeight,
                        a.startX = d.getTranslate(i.$imageWrapEl[0], "x") || 0,
                        a.startY = d.getTranslate(i.$imageWrapEl[0], "y") || 0,
                        i.slideWidth = i.$slideEl[0].offsetWidth,
                        i.slideHeight = i.$slideEl[0].offsetHeight,
                        i.$imageWrapEl.transition(0),
                        t.rtl && (a.startX = -a.startX),
                        t.rtl && (a.startY = -a.startY));
                        var s = a.width * n.scale
                          , o = a.height * n.scale;
                        if (!(s < i.slideWidth && o < i.slideHeight)) {
                            if (a.minX = Math.min(i.slideWidth / 2 - s / 2, 0),
                            a.maxX = -a.minX,
                            a.minY = Math.min(i.slideHeight / 2 - o / 2, 0),
                            a.maxY = -a.minY,
                            a.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                            a.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                            !a.isMoved && !n.isScaling) {
                                if (t.isHorizontal() && (Math.floor(a.minX) === Math.floor(a.startX) && a.touchesCurrent.x < a.touchesStart.x || Math.floor(a.maxX) === Math.floor(a.startX) && a.touchesCurrent.x > a.touchesStart.x))
                                    return void (a.isTouched = !1);
                                if (!t.isHorizontal() && (Math.floor(a.minY) === Math.floor(a.startY) && a.touchesCurrent.y < a.touchesStart.y || Math.floor(a.maxY) === Math.floor(a.startY) && a.touchesCurrent.y > a.touchesStart.y))
                                    return void (a.isTouched = !1)
                            }
                            e.preventDefault(),
                            e.stopPropagation(),
                            a.isMoved = !0,
                            a.currentX = a.touchesCurrent.x - a.touchesStart.x + a.startX,
                            a.currentY = a.touchesCurrent.y - a.touchesStart.y + a.startY,
                            a.currentX < a.minX && (a.currentX = a.minX + 1 - Math.pow(a.minX - a.currentX + 1, .8)),
                            a.currentX > a.maxX && (a.currentX = a.maxX - 1 + Math.pow(a.currentX - a.maxX + 1, .8)),
                            a.currentY < a.minY && (a.currentY = a.minY + 1 - Math.pow(a.minY - a.currentY + 1, .8)),
                            a.currentY > a.maxY && (a.currentY = a.maxY - 1 + Math.pow(a.currentY - a.maxY + 1, .8)),
                            r.prevPositionX || (r.prevPositionX = a.touchesCurrent.x),
                            r.prevPositionY || (r.prevPositionY = a.touchesCurrent.y),
                            r.prevTime || (r.prevTime = Date.now()),
                            r.x = (a.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2,
                            r.y = (a.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2,
                            Math.abs(a.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0),
                            Math.abs(a.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0),
                            r.prevPositionX = a.touchesCurrent.x,
                            r.prevPositionY = a.touchesCurrent.y,
                            r.prevTime = Date.now(),
                            i.$imageWrapEl.transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)")
                        }
                    }
                },
                onTouchEnd: function() {
                    var e = this.zoom
                      , t = e.gesture
                      , n = e.image
                      , i = e.velocity;
                    if (t.$imageEl && 0 !== t.$imageEl.length) {
                        if (!n.isTouched || !n.isMoved)
                            return n.isTouched = !1,
                            void (n.isMoved = !1);
                        n.isTouched = !1,
                        n.isMoved = !1;
                        var a = 300
                          , r = 300
                          , s = i.x * a
                          , o = n.currentX + s
                          , l = i.y * r
                          , d = n.currentY + l;
                        0 !== i.x && (a = Math.abs((o - n.currentX) / i.x)),
                        0 !== i.y && (r = Math.abs((d - n.currentY) / i.y));
                        var u = Math.max(a, r);
                        n.currentX = o,
                        n.currentY = d;
                        var c = n.width * e.scale
                          , p = n.height * e.scale;
                        n.minX = Math.min(t.slideWidth / 2 - c / 2, 0),
                        n.maxX = -n.minX,
                        n.minY = Math.min(t.slideHeight / 2 - p / 2, 0),
                        n.maxY = -n.minY,
                        n.currentX = Math.max(Math.min(n.currentX, n.maxX), n.minX),
                        n.currentY = Math.max(Math.min(n.currentY, n.maxY), n.minY),
                        t.$imageWrapEl.transition(u).transform("translate3d(" + n.currentX + "px, " + n.currentY + "px,0)")
                    }
                },
                onTransitionEnd: function() {
                    var e = this
                      , t = e.zoom
                      , n = t.gesture;
                    n.$slideEl && e.previousIndex !== e.activeIndex && (n.$imageEl.transform("translate3d(0,0,0) scale(1)"),
                    n.$imageWrapEl.transform("translate3d(0,0,0)"),
                    n.$slideEl = void 0,
                    n.$imageEl = void 0,
                    n.$imageWrapEl = void 0,
                    t.scale = 1,
                    t.currentScale = 1)
                },
                toggle: function(e) {
                    var t = this.zoom;
                    t.scale && 1 !== t.scale ? t.out() : t.in(e)
                },
                in: function(t) {
                    var n = this
                      , i = n.zoom
                      , a = n.params.zoom
                      , r = i.gesture
                      , s = i.image;
                    if (r.$slideEl || (r.$slideEl = n.clickedSlide ? e(n.clickedSlide) : n.slides.eq(n.activeIndex),
                    r.$imageEl = r.$slideEl.find("img, svg, canvas"),
                    r.$imageWrapEl = r.$imageEl.parent("." + a.containerClass)),
                    r.$imageEl && 0 !== r.$imageEl.length) {
                        r.$slideEl.addClass("" + a.zoomedSlideClass);
                        var o, l, d, u, c, p, f, h, v, m, g, y, b, x, w, T;
                        void 0 === s.touchesStart.x && t ? (o = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX,
                        l = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (o = s.touchesStart.x,
                        l = s.touchesStart.y),
                        i.scale = r.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio,
                        i.currentScale = r.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio,
                        t ? (w = r.$slideEl[0].offsetWidth,
                        T = r.$slideEl[0].offsetHeight,
                        d = r.$slideEl.offset().left + w / 2 - o,
                        u = r.$slideEl.offset().top + T / 2 - l,
                        f = r.$imageEl[0].offsetWidth,
                        h = r.$imageEl[0].offsetHeight,
                        v = f * i.scale,
                        m = h * i.scale,
                        b = -(g = Math.min(w / 2 - v / 2, 0)),
                        x = -(y = Math.min(T / 2 - m / 2, 0)),
                        c = d * i.scale,
                        p = u * i.scale,
                        c < g && (c = g),
                        c > b && (c = b),
                        p < y && (p = y),
                        p > x && (p = x)) : (c = 0,
                        p = 0),
                        r.$imageWrapEl.transition(300).transform("translate3d(" + c + "px, " + p + "px,0)"),
                        r.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + i.scale + ")")
                    }
                },
                out: function() {
                    var t = this
                      , n = t.zoom
                      , i = t.params.zoom
                      , a = n.gesture;
                    a.$slideEl || (a.$slideEl = t.clickedSlide ? e(t.clickedSlide) : t.slides.eq(t.activeIndex),
                    a.$imageEl = a.$slideEl.find("img, svg, canvas"),
                    a.$imageWrapEl = a.$imageEl.parent("." + i.containerClass)),
                    a.$imageEl && 0 !== a.$imageEl.length && (n.scale = 1,
                    n.currentScale = 1,
                    a.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                    a.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
                    a.$slideEl.removeClass("" + i.zoomedSlideClass),
                    a.$slideEl = void 0)
                },
                enable: function() {
                    var t = this
                      , n = t.zoom;
                    if (!n.enabled) {
                        n.enabled = !0;
                        var i = t.slides
                          , a = !("touchstart" !== t.touchEvents.start || !c.passiveListener || !t.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        c.gestures ? (i.on("gesturestart", n.onGestureStart, a),
                        i.on("gesturechange", n.onGestureChange, a),
                        i.on("gestureend", n.onGestureEnd, a)) : "touchstart" === t.touchEvents.start && (i.on(t.touchEvents.start, n.onGestureStart, a),
                        i.on(t.touchEvents.move, n.onGestureChange, a),
                        i.on(t.touchEvents.end, n.onGestureEnd, a)),
                        t.slides.each(function(i, a) {
                            var r = e(a);
                            r.find("." + t.params.zoom.containerClass).length > 0 && r.on(t.touchEvents.move, n.onTouchMove)
                        })
                    }
                },
                disable: function() {
                    var t = this
                      , n = t.zoom;
                    if (n.enabled) {
                        t.zoom.enabled = !1;
                        var i = t.slides
                          , a = !("touchstart" !== t.touchEvents.start || !c.passiveListener || !t.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        c.gestures ? (i.off("gesturestart", n.onGestureStart, a),
                        i.off("gesturechange", n.onGestureChange, a),
                        i.off("gestureend", n.onGestureEnd, a)) : "touchstart" === t.touchEvents.start && (i.off(t.touchEvents.start, n.onGestureStart, a),
                        i.off(t.touchEvents.move, n.onGestureChange, a),
                        i.off(t.touchEvents.end, n.onGestureEnd, a)),
                        t.slides.each(function(i, a) {
                            var r = e(a);
                            r.find("." + t.params.zoom.containerClass).length > 0 && r.off(t.touchEvents.move, n.onTouchMove)
                        })
                    }
                }
            }
              , Z = {
                name: "zoom",
                params: {
                    zoom: {
                        enabled: !1,
                        maxRatio: 3,
                        minRatio: 1,
                        toggle: !0,
                        containerClass: "swiper-zoom-container",
                        zoomedSlideClass: "swiper-slide-zoomed"
                    }
                },
                create: function() {
                    var e = this
                      , t = {
                        enabled: !1,
                        scale: 1,
                        currentScale: 1,
                        isScaling: !1,
                        gesture: {
                            $slideEl: void 0,
                            slideWidth: void 0,
                            slideHeight: void 0,
                            $imageEl: void 0,
                            $imageWrapEl: void 0,
                            maxRatio: 3
                        },
                        image: {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {},
                            touchesCurrent: {}
                        },
                        velocity: {
                            x: void 0,
                            y: void 0,
                            prevPositionX: void 0,
                            prevPositionY: void 0,
                            prevTime: void 0
                        }
                    };
                    "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(n) {
                        t[n] = J[n].bind(e)
                    }),
                    d.extend(e, {
                        zoom: t
                    })
                },
                on: {
                    init: function() {
                        var e = this;
                        e.params.zoom.enabled && e.zoom.enable()
                    },
                    destroy: function() {
                        this.zoom.disable()
                    },
                    touchStart: function(e) {
                        var t = this;
                        t.zoom.enabled && t.zoom.onTouchStart(e)
                    },
                    touchEnd: function(e) {
                        var t = this;
                        t.zoom.enabled && t.zoom.onTouchEnd(e)
                    },
                    doubleTap: function(e) {
                        var t = this;
                        t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e)
                    },
                    transitionEnd: function() {
                        var e = this;
                        e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
                    }
                }
            }
              , ee = {
                loadInSlide: function(t, n) {
                    void 0 === n && (n = !0);
                    var i = this
                      , a = i.params.lazy;
                    if (void 0 !== t && 0 !== i.slides.length) {
                        var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + t + '"]') : i.slides.eq(t)
                          , s = r.find("." + a.elementClass + ":not(." + a.loadedClass + "):not(." + a.loadingClass + ")");
                        !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || (s = s.add(r[0])),
                        0 !== s.length && s.each(function(t, s) {
                            var o = e(s);
                            o.addClass(a.loadingClass);
                            var l = o.attr("data-background")
                              , d = o.attr("data-src")
                              , u = o.attr("data-srcset")
                              , c = o.attr("data-sizes");
                            i.loadImage(o[0], d || l, u, c, !1, function() {
                                if (void 0 !== i && null !== i && i && (!i || i.params) && !i.destroyed) {
                                    if (l ? (o.css("background-image", 'url("' + l + '")'),
                                    o.removeAttr("data-background")) : (u && (o.attr("srcset", u),
                                    o.removeAttr("data-srcset")),
                                    c && (o.attr("sizes", c),
                                    o.removeAttr("data-sizes")),
                                    d && (o.attr("src", d),
                                    o.removeAttr("data-src"))),
                                    o.addClass(a.loadedClass).removeClass(a.loadingClass),
                                    r.find("." + a.preloaderClass).remove(),
                                    i.params.loop && n) {
                                        var e = r.attr("data-swiper-slide-index");
                                        if (r.hasClass(i.params.slideDuplicateClass)) {
                                            var t = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                            i.lazy.loadInSlide(t.index(), !1)
                                        } else {
                                            var s = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                            i.lazy.loadInSlide(s.index(), !1)
                                        }
                                    }
                                    i.emit("lazyImageReady", r[0], o[0])
                                }
                            }),
                            i.emit("lazyImageLoad", r[0], o[0])
                        })
                    }
                },
                load: function() {
                    function t(e) {
                        if (l) {
                            if (i.children("." + r.slideClass + '[data-swiper-slide-index="' + e + '"]').length)
                                return !0
                        } else if (s[e])
                            return !0;
                        return !1
                    }
                    function a(t) {
                        return l ? e(t).attr("data-swiper-slide-index") : e(t).index()
                    }
                    var n = this
                      , i = n.$wrapperEl
                      , r = n.params
                      , s = n.slides
                      , o = n.activeIndex
                      , l = n.virtual && r.virtual.enabled
                      , d = r.lazy
                      , u = r.slidesPerView;
                    if ("auto" === u && (u = 0),
                    n.lazy.initialImageLoaded || (n.lazy.initialImageLoaded = !0),
                    n.params.watchSlidesVisibility)
                        i.children("." + r.slideVisibleClass).each(function(t, i) {
                            var a = l ? e(i).attr("data-swiper-slide-index") : e(i).index();
                            n.lazy.loadInSlide(a)
                        });
                    else if (u > 1)
                        for (var c = o; c < o + u; c += 1)
                            t(c) && n.lazy.loadInSlide(c);
                    else
                        n.lazy.loadInSlide(o);
                    if (d.loadPrevNext)
                        if (u > 1 || d.loadPrevNextAmount && d.loadPrevNextAmount > 1) {
                            for (var p = d.loadPrevNextAmount, f = u, h = Math.min(o + f + Math.max(p, f), s.length), v = Math.max(o - Math.max(f, p), 0), m = o + u; m < h; m += 1)
                                t(m) && n.lazy.loadInSlide(m);
                            for (var g = v; g < o; g += 1)
                                t(g) && n.lazy.loadInSlide(g)
                        } else {
                            var y = i.children("." + r.slideNextClass);
                            y.length > 0 && n.lazy.loadInSlide(a(y));
                            var b = i.children("." + r.slidePrevClass);
                            b.length > 0 && n.lazy.loadInSlide(a(b))
                        }
                }
            }
              , te = {
                name: "lazy",
                params: {
                    lazy: {
                        enabled: !1,
                        loadPrevNext: !1,
                        loadPrevNextAmount: 1,
                        loadOnTransitionStart: !1,
                        elementClass: "swiper-lazy",
                        loadingClass: "swiper-lazy-loading",
                        loadedClass: "swiper-lazy-loaded",
                        preloaderClass: "swiper-lazy-preloader"
                    }
                },
                create: function() {
                    var e = this;
                    d.extend(e, {
                        lazy: {
                            initialImageLoaded: !1,
                            load: ee.load.bind(e),
                            loadInSlide: ee.loadInSlide.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        var e = this;
                        e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
                    },
                    init: function() {
                        var e = this;
                        e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load()
                    },
                    scroll: function() {
                        var e = this;
                        e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
                    },
                    resize: function() {
                        var e = this;
                        e.params.lazy.enabled && e.lazy.load()
                    },
                    scrollbarDragMove: function() {
                        var e = this;
                        e.params.lazy.enabled && e.lazy.load()
                    },
                    transitionStart: function() {
                        var e = this;
                        e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
                    },
                    transitionEnd: function() {
                        var e = this;
                        e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load()
                    }
                }
            }
              , ne = {
                LinearSpline: function(e, t) {
                    var n = function() {
                        var e, t, n;
                        return function(i, a) {
                            for (t = -1,
                            e = i.length; e - t > 1; )
                                i[n = e + t >> 1] <= a ? t = n : e = n;
                            return e
                        }
                    }();
                    this.x = e,
                    this.y = t,
                    this.lastIndex = e.length - 1;
                    var i, a;
                    return this.interpolate = function(e) {
                        return e ? (a = n(this.x, e),
                        i = a - 1,
                        (e - this.x[i]) * (this.y[a] - this.y[i]) / (this.x[a] - this.x[i]) + this.y[i]) : 0
                    }
                    ,
                    this
                },
                getInterpolateFunction: function(e) {
                    var t = this;
                    t.controller.spline || (t.controller.spline = t.params.loop ? new ne.LinearSpline(t.slidesGrid,e.slidesGrid) : new ne.LinearSpline(t.snapGrid,e.snapGrid))
                },
                setTranslate: function(e, t) {
                    function a(e) {
                        var t = e.rtl && "horizontal" === e.params.direction ? -r.translate : r.translate;
                        "slide" === r.params.controller.by && (r.controller.getInterpolateFunction(e),
                        i = -r.controller.spline.interpolate(-t)),
                        i && "container" !== r.params.controller.by || (n = (e.maxTranslate() - e.minTranslate()) / (r.maxTranslate() - r.minTranslate()),
                        i = (t - r.minTranslate()) * n + e.minTranslate()),
                        r.params.controller.inverse && (i = e.maxTranslate() - i),
                        e.updateProgress(i),
                        e.setTranslate(i, r),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses()
                    }
                    var n, i, r = this, s = r.controller.control;
                    if (Array.isArray(s))
                        for (var o = 0; o < s.length; o += 1)
                            s[o] !== t && s[o]instanceof D && a(s[o]);
                    else
                        s instanceof D && t !== s && a(s)
                },
                setTransition: function(e, t) {
                    function a(t) {
                        t.setTransition(e, i),
                        0 !== e && (t.transitionStart(),
                        t.$wrapperEl.transitionEnd(function() {
                            r && (t.params.loop && "slide" === i.params.controller.by && t.loopFix(),
                            t.transitionEnd())
                        }))
                    }
                    var n, i = this, r = i.controller.control;
                    if (Array.isArray(r))
                        for (n = 0; n < r.length; n += 1)
                            r[n] !== t && r[n]instanceof D && a(r[n]);
                    else
                        r instanceof D && t !== r && a(r)
                }
            }
              , ie = {
                name: "controller",
                params: {
                    controller: {
                        control: void 0,
                        inverse: !1,
                        by: "slide"
                    }
                },
                create: function() {
                    var e = this;
                    d.extend(e, {
                        controller: {
                            control: e.params.controller.control,
                            getInterpolateFunction: ne.getInterpolateFunction.bind(e),
                            setTranslate: ne.setTranslate.bind(e),
                            setTransition: ne.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    update: function() {
                        var e = this;
                        e.controller.control && e.controller.spline && (e.controller.spline = void 0,
                        delete e.controller.spline)
                    },
                    resize: function() {
                        var e = this;
                        e.controller.control && e.controller.spline && (e.controller.spline = void 0,
                        delete e.controller.spline)
                    },
                    observerUpdate: function() {
                        var e = this;
                        e.controller.control && e.controller.spline && (e.controller.spline = void 0,
                        delete e.controller.spline)
                    },
                    setTranslate: function(e, t) {
                        var n = this;
                        n.controller.control && n.controller.setTranslate(e, t)
                    },
                    setTransition: function(e, t) {
                        var n = this;
                        n.controller.control && n.controller.setTransition(e, t)
                    }
                }
            }
              , ae = {
                makeElFocusable: function(e) {
                    return e.attr("tabIndex", "0"),
                    e
                },
                addElRole: function(e, t) {
                    return e.attr("role", t),
                    e
                },
                addElLabel: function(e, t) {
                    return e.attr("aria-label", t),
                    e
                },
                disableEl: function(e) {
                    return e.attr("aria-disabled", !0),
                    e
                },
                enableEl: function(e) {
                    return e.attr("aria-disabled", !1),
                    e
                },
                onEnterKey: function(t) {
                    var n = this
                      , i = n.params.a11y;
                    if (13 === t.keyCode) {
                        var a = e(t.target);
                        n.navigation && n.navigation.$nextEl && a.is(n.navigation.$nextEl) && (n.isEnd && !n.params.loop || n.slideNext(),
                        n.isEnd ? n.a11y.notify(i.lastSlideMessage) : n.a11y.notify(i.nextSlideMessage)),
                        n.navigation && n.navigation.$prevEl && a.is(n.navigation.$prevEl) && (n.isBeginning && !n.params.loop || n.slidePrev(),
                        n.isBeginning ? n.a11y.notify(i.firstSlideMessage) : n.a11y.notify(i.prevSlideMessage)),
                        n.pagination && a.is("." + n.params.pagination.bulletClass) && a[0].click()
                    }
                },
                notify: function(e) {
                    var t = this.a11y.liveRegion;
                    0 !== t.length && (t.html(""),
                    t.html(e))
                },
                updateNavigation: function() {
                    var e = this;
                    if (!e.params.loop) {
                        var t = e.navigation
                          , n = t.$nextEl
                          , i = t.$prevEl;
                        i && i.length > 0 && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)),
                        n && n.length > 0 && (e.isEnd ? e.a11y.disableEl(n) : e.a11y.enableEl(n))
                    }
                },
                updatePagination: function() {
                    var t = this
                      , n = t.params.a11y;
                    t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length && t.pagination.bullets.each(function(i, a) {
                        var r = e(a);
                        t.a11y.makeElFocusable(r),
                        t.a11y.addElRole(r, "button"),
                        t.a11y.addElLabel(r, n.paginationBulletMessage.replace(/{{index}}/, r.index() + 1))
                    })
                },
                init: function() {
                    var e = this;
                    e.$el.append(e.a11y.liveRegion);
                    var t, n, i = e.params.a11y;
                    e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
                    e.navigation && e.navigation.$prevEl && (n = e.navigation.$prevEl),
                    t && (e.a11y.makeElFocusable(t),
                    e.a11y.addElRole(t, "button"),
                    e.a11y.addElLabel(t, i.nextSlideMessage),
                    t.on("keydown", e.a11y.onEnterKey)),
                    n && (e.a11y.makeElFocusable(n),
                    e.a11y.addElRole(n, "button"),
                    e.a11y.addElLabel(n, i.prevSlideMessage),
                    n.on("keydown", e.a11y.onEnterKey)),
                    e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
                },
                destroy: function() {
                    var e = this;
                    e.a11y.liveRegion && e.a11y.liveRegion.length > 0 && e.a11y.liveRegion.remove();
                    var t, n;
                    e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
                    e.navigation && e.navigation.$prevEl && (n = e.navigation.$prevEl),
                    t && t.off("keydown", e.a11y.onEnterKey),
                    n && n.off("keydown", e.a11y.onEnterKey),
                    e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.off("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
                }
            }
              , re = {
                name: "a11y",
                params: {
                    a11y: {
                        enabled: !1,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}"
                    }
                },
                create: function() {
                    var t = this;
                    d.extend(t, {
                        a11y: {
                            liveRegion: e('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                        }
                    }),
                    Object.keys(ae).forEach(function(e) {
                        t.a11y[e] = ae[e].bind(t)
                    })
                },
                on: {
                    init: function() {
                        var e = this;
                        e.params.a11y.enabled && (e.a11y.init(),
                        e.a11y.updateNavigation())
                    },
                    toEdge: function() {
                        var e = this;
                        e.params.a11y.enabled && e.a11y.updateNavigation()
                    },
                    fromEdge: function() {
                        var e = this;
                        e.params.a11y.enabled && e.a11y.updateNavigation()
                    },
                    paginationUpdate: function() {
                        var e = this;
                        e.params.a11y.enabled && e.a11y.updatePagination()
                    },
                    destroy: function() {
                        var e = this;
                        e.params.a11y.enabled && e.a11y.destroy()
                    }
                }
            }
              , se = {
                init: function() {
                    var e = this;
                    if (e.params.history) {
                        if (!i.history || !i.history.pushState)
                            return e.params.history.enabled = !1,
                            void (e.params.hashNavigation.enabled = !0);
                        var t = e.history;
                        t.initialized = !0,
                        t.paths = se.getPathValues(),
                        (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit),
                        e.params.history.replaceState || i.addEventListener("popstate", e.history.setHistoryPopState))
                    }
                },
                destroy: function() {
                    var e = this;
                    e.params.history.replaceState || i.removeEventListener("popstate", e.history.setHistoryPopState)
                },
                setHistoryPopState: function() {
                    var e = this;
                    e.history.paths = se.getPathValues(),
                    e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1)
                },
                getPathValues: function() {
                    var e = i.location.pathname.slice(1).split("/").filter(function(e) {
                        return "" !== e
                    })
                      , t = e.length;
                    return {
                        key: e[t - 2],
                        value: e[t - 1]
                    }
                },
                setHistory: function(e, t) {
                    var n = this;
                    if (n.history.initialized && n.params.history.enabled) {
                        var a = n.slides.eq(t)
                          , r = se.slugify(a.attr("data-history"));
                        i.location.pathname.includes(e) || (r = e + "/" + r);
                        var s = i.history.state;
                        s && s.value === r || (n.params.history.replaceState ? i.history.replaceState({
                            value: r
                        }, null, r) : i.history.pushState({
                            value: r
                        }, null, r))
                    }
                },
                slugify: function(e) {
                    return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                },
                scrollToSlide: function(e, t, n) {
                    var i = this;
                    if (t)
                        for (var a = 0, r = i.slides.length; a < r; a += 1) {
                            var s = i.slides.eq(a);
                            if (se.slugify(s.attr("data-history")) === t && !s.hasClass(i.params.slideDuplicateClass)) {
                                var o = s.index();
                                i.slideTo(o, e, n)
                            }
                        }
                    else
                        i.slideTo(0, e, n)
                }
            }
              , oe = {
                name: "history",
                params: {
                    history: {
                        enabled: !1,
                        replaceState: !1,
                        key: "slides"
                    }
                },
                create: function() {
                    var e = this;
                    d.extend(e, {
                        history: {
                            init: se.init.bind(e),
                            setHistory: se.setHistory.bind(e),
                            setHistoryPopState: se.setHistoryPopState.bind(e),
                            scrollToSlide: se.scrollToSlide.bind(e),
                            destroy: se.destroy.bind(e)
                        }
                    })
                },
                on: {
                    init: function() {
                        var e = this;
                        e.params.history.enabled && e.history.init()
                    },
                    destroy: function() {
                        var e = this;
                        e.params.history.enabled && e.history.destroy()
                    },
                    transitionEnd: function() {
                        var e = this;
                        e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex)
                    }
                }
            }
              , le = {
                onHashCange: function() {
                    var e = this
                      , t = u.location.hash.replace("#", "");
                    t !== e.slides.eq(e.activeIndex).attr("data-hash") && e.slideTo(e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index())
                },
                setHash: function() {
                    var e = this;
                    if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
                        if (e.params.hashNavigation.replaceState && i.history && i.history.replaceState)
                            i.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");
                        else {
                            var t = e.slides.eq(e.activeIndex)
                              , n = t.attr("data-hash") || t.attr("data-history");
                            u.location.hash = n || ""
                        }
                },
                init: function() {
                    var t = this;
                    if (!(!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled)) {
                        t.hashNavigation.initialized = !0;
                        var n = u.location.hash.replace("#", "");
                        if (n)
                            for (var a = 0, r = t.slides.length; a < r; a += 1) {
                                var s = t.slides.eq(a);
                                if ((s.attr("data-hash") || s.attr("data-history")) === n && !s.hasClass(t.params.slideDuplicateClass)) {
                                    var o = s.index();
                                    t.slideTo(o, 0, t.params.runCallbacksOnInit, !0)
                                }
                            }
                        t.params.hashNavigation.watchState && e(i).on("hashchange", t.hashNavigation.onHashCange)
                    }
                },
                destroy: function() {
                    var t = this;
                    t.params.hashNavigation.watchState && e(i).off("hashchange", t.hashNavigation.onHashCange)
                }
            }
              , de = {
                name: "hash-navigation",
                params: {
                    hashNavigation: {
                        enabled: !1,
                        replaceState: !1,
                        watchState: !1
                    }
                },
                create: function() {
                    var e = this;
                    d.extend(e, {
                        hashNavigation: {
                            initialized: !1,
                            init: le.init.bind(e),
                            destroy: le.destroy.bind(e),
                            setHash: le.setHash.bind(e),
                            onHashCange: le.onHashCange.bind(e)
                        }
                    })
                },
                on: {
                    init: function() {
                        var e = this;
                        e.params.hashNavigation.enabled && e.hashNavigation.init()
                    },
                    destroy: function() {
                        var e = this;
                        e.params.hashNavigation.enabled && e.hashNavigation.destroy()
                    },
                    transitionEnd: function() {
                        var e = this;
                        e.hashNavigation.initialized && e.hashNavigation.setHash()
                    }
                }
            }
              , ue = {
                run: function() {
                    var e = this
                      , t = e.slides.eq(e.activeIndex)
                      , n = e.params.autoplay.delay;
                    t.attr("data-swiper-autoplay") && (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
                    e.autoplay.timeout = d.nextTick(function() {
                        e.params.loop ? (e.loopFix(),
                        e.slideNext(e.params.speed, !0, !0),
                        e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0),
                        e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0),
                        e.emit("autoplay"))
                    }, n)
                },
                start: function() {
                    var e = this;
                    return void 0 === e.autoplay.timeout && !e.autoplay.running && (e.autoplay.running = !0,
                    e.emit("autoplayStart"),
                    e.autoplay.run(),
                    !0)
                },
                stop: function() {
                    var e = this;
                    return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout),
                    e.autoplay.timeout = void 0),
                    e.autoplay.running = !1,
                    e.emit("autoplayStop"),
                    !0)
                },
                pause: function(e) {
                    var t = this;
                    t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
                    t.autoplay.paused = !0,
                    0 === e ? (t.autoplay.paused = !1,
                    t.autoplay.run()) : t.$wrapperEl.transitionEnd(function() {
                        t && !t.destroyed && (t.autoplay.paused = !1,
                        t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
                    })))
                }
            }
              , ce = {
                name: "autoplay",
                params: {
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1
                    }
                },
                create: function() {
                    var e = this;
                    d.extend(e, {
                        autoplay: {
                            running: !1,
                            paused: !1,
                            run: ue.run.bind(e),
                            start: ue.start.bind(e),
                            stop: ue.stop.bind(e),
                            pause: ue.pause.bind(e)
                        }
                    })
                },
                on: {
                    init: function() {
                        var e = this;
                        e.params.autoplay.enabled && e.autoplay.start()
                    },
                    beforeTransitionStart: function(e, t) {
                        var n = this;
                        n.autoplay.running && (t || !n.params.autoplay.disableOnInteraction ? n.autoplay.pause(e) : n.autoplay.stop())
                    },
                    sliderFirstMove: function() {
                        var e = this;
                        e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
                    },
                    destroy: function() {
                        var e = this;
                        e.autoplay.running && e.autoplay.stop()
                    }
                }
            }
              , pe = {
                setTranslate: function() {
                    for (var e = this, t = e.slides, n = 0; n < t.length; n += 1) {
                        var i = e.slides.eq(n)
                          , a = -i[0].swiperSlideOffset;
                        e.params.virtualTranslate || (a -= e.translate);
                        var r = 0;
                        e.isHorizontal() || (r = a,
                        a = 0);
                        var s = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                        i.css({
                            opacity: s
                        }).transform("translate3d(" + a + "px, " + r + "px, 0px)")
                    }
                },
                setTransition: function(e) {
                    var t = this
                      , n = t.slides
                      , i = t.$wrapperEl;
                    if (n.transition(e),
                    t.params.virtualTranslate && 0 !== e) {
                        var a = !1;
                        n.transitionEnd(function() {
                            if (!a && t && !t.destroyed) {
                                a = !0,
                                t.animating = !1;
                                for (var e = ["webkitTransitionEnd", "transitionend"], n = 0; n < e.length; n += 1)
                                    i.trigger(e[n])
                            }
                        })
                    }
                }
            }
              , fe = {
                name: "effect-fade",
                params: {
                    fadeEffect: {
                        crossFade: !1
                    }
                },
                create: function() {
                    var e = this;
                    d.extend(e, {
                        fadeEffect: {
                            setTranslate: pe.setTranslate.bind(e),
                            setTransition: pe.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        var e = this;
                        if ("fade" === e.params.effect) {
                            e.classNames.push(e.params.containerModifierClass + "fade");
                            var t = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                spaceBetween: 0,
                                virtualTranslate: !0
                            };
                            d.extend(e.params, t),
                            d.extend(e.originalParams, t)
                        }
                    },
                    setTranslate: function() {
                        var e = this;
                        "fade" === e.params.effect && e.fadeEffect.setTranslate()
                    },
                    setTransition: function(e) {
                        var t = this;
                        "fade" === t.params.effect && t.fadeEffect.setTransition(e)
                    }
                }
            }
              , he = {
                setTranslate: function() {
                    var t, n = this, i = n.$el, a = n.$wrapperEl, r = n.slides, s = n.width, o = n.height, l = n.rtl, d = n.size, u = n.params.cubeEffect, c = n.isHorizontal(), p = n.virtual && n.params.virtual.enabled, f = 0;
                    u.shadow && (c ? (0 === (t = a.find(".swiper-cube-shadow")).length && (t = e('<div class="swiper-cube-shadow"></div>'),
                    a.append(t)),
                    t.css({
                        height: s + "px"
                    })) : 0 === (t = i.find(".swiper-cube-shadow")).length && (t = e('<div class="swiper-cube-shadow"></div>'),
                    i.append(t)));
                    for (var h = 0; h < r.length; h += 1) {
                        var v = r.eq(h)
                          , m = h;
                        p && (m = parseInt(v.attr("data-swiper-slide-index"), 10));
                        var y = 90 * m
                          , b = Math.floor(y / 360);
                        l && (y = -y,
                        b = Math.floor(-y / 360));
                        var x = Math.max(Math.min(v[0].progress, 1), -1)
                          , w = 0
                          , T = 0
                          , C = 0;
                        m % 4 == 0 ? (w = 4 * -b * d,
                        C = 0) : (m - 1) % 4 == 0 ? (w = 0,
                        C = 4 * -b * d) : (m - 2) % 4 == 0 ? (w = d + 4 * b * d,
                        C = d) : (m - 3) % 4 == 0 && (w = -d,
                        C = 3 * d + 4 * d * b),
                        l && (w = -w),
                        c || (T = w,
                        w = 0);
                        var E = "rotateX(" + (c ? 0 : -y) + "deg) rotateY(" + (c ? y : 0) + "deg) translate3d(" + w + "px, " + T + "px, " + C + "px)";
                        if (x <= 1 && x > -1 && (f = 90 * m + 90 * x,
                        l && (f = 90 * -m - 90 * x)),
                        v.transform(E),
                        u.slideShadows) {
                            var S = c ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top")
                              , k = c ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                            0 === S.length && (S = e('<div class="swiper-slide-shadow-' + (c ? "left" : "top") + '"></div>'),
                            v.append(S)),
                            0 === k.length && (k = e('<div class="swiper-slide-shadow-' + (c ? "right" : "bottom") + '"></div>'),
                            v.append(k)),
                            S.length && (S[0].style.opacity = Math.max(-x, 0)),
                            k.length && (k[0].style.opacity = Math.max(x, 0))
                        }
                    }
                    if (a.css({
                        "-webkit-transform-origin": "50% 50% -" + d / 2 + "px",
                        "-moz-transform-origin": "50% 50% -" + d / 2 + "px",
                        "-ms-transform-origin": "50% 50% -" + d / 2 + "px",
                        "transform-origin": "50% 50% -" + d / 2 + "px"
                    }),
                    u.shadow)
                        if (c)
                            t.transform("translate3d(0px, " + (s / 2 + u.shadowOffset) + "px, " + -s / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + u.shadowScale + ")");
                        else {
                            var M = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90)
                              , z = 1.5 - (Math.sin(2 * M * Math.PI / 360) / 2 + Math.cos(2 * M * Math.PI / 360) / 2)
                              , P = u.shadowScale
                              , A = u.shadowScale / z
                              , D = u.shadowOffset;
                            t.transform("scale3d(" + P + ", 1, " + A + ") translate3d(0px, " + (o / 2 + D) + "px, " + -o / 2 / A + "px) rotateX(-90deg)")
                        }
                    var N = g.isSafari || g.isUiWebView ? -d / 2 : 0;
                    a.transform("translate3d(0px,0," + N + "px) rotateX(" + (n.isHorizontal() ? 0 : f) + "deg) rotateY(" + (n.isHorizontal() ? -f : 0) + "deg)")
                },
                setTransition: function(e) {
                    var t = this
                      , n = t.$el;
                    t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                    t.params.cubeEffect.shadow && !t.isHorizontal() && n.find(".swiper-cube-shadow").transition(e)
                }
            }
              , ve = {
                name: "effect-cube",
                params: {
                    cubeEffect: {
                        slideShadows: !0,
                        shadow: !0,
                        shadowOffset: 20,
                        shadowScale: .94
                    }
                },
                create: function() {
                    var e = this;
                    d.extend(e, {
                        cubeEffect: {
                            setTranslate: he.setTranslate.bind(e),
                            setTransition: he.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        var e = this;
                        if ("cube" === e.params.effect) {
                            e.classNames.push(e.params.containerModifierClass + "cube"),
                            e.classNames.push(e.params.containerModifierClass + "3d");
                            var t = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                resistanceRatio: 0,
                                spaceBetween: 0,
                                centeredSlides: !1,
                                virtualTranslate: !0
                            };
                            d.extend(e.params, t),
                            d.extend(e.originalParams, t)
                        }
                    },
                    setTranslate: function() {
                        var e = this;
                        "cube" === e.params.effect && e.cubeEffect.setTranslate()
                    },
                    setTransition: function(e) {
                        var t = this;
                        "cube" === t.params.effect && t.cubeEffect.setTransition(e)
                    }
                }
            }
              , me = {
                setTranslate: function() {
                    for (var t = this, n = t.slides, i = 0; i < n.length; i += 1) {
                        var a = n.eq(i)
                          , r = a[0].progress;
                        t.params.flipEffect.limitRotation && (r = Math.max(Math.min(a[0].progress, 1), -1));
                        var s = -180 * r
                          , o = 0
                          , l = -a[0].swiperSlideOffset
                          , d = 0;
                        if (t.isHorizontal() ? t.rtl && (s = -s) : (d = l,
                        l = 0,
                        o = -s,
                        s = 0),
                        a[0].style.zIndex = -Math.abs(Math.round(r)) + n.length,
                        t.params.flipEffect.slideShadows) {
                            var u = t.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top")
                              , c = t.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                            0 === u.length && (u = e('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "left" : "top") + '"></div>'),
                            a.append(u)),
                            0 === c.length && (c = e('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "right" : "bottom") + '"></div>'),
                            a.append(c)),
                            u.length && (u[0].style.opacity = Math.max(-r, 0)),
                            c.length && (c[0].style.opacity = Math.max(r, 0))
                        }
                        a.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + s + "deg)")
                    }
                },
                setTransition: function(e) {
                    var t = this
                      , n = t.slides
                      , i = t.activeIndex
                      , a = t.$wrapperEl;
                    if (n.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                    t.params.virtualTranslate && 0 !== e) {
                        var r = !1;
                        n.eq(i).transitionEnd(function() {
                            if (!r && t && !t.destroyed) {
                                r = !0,
                                t.animating = !1;
                                for (var e = ["webkitTransitionEnd", "transitionend"], n = 0; n < e.length; n += 1)
                                    a.trigger(e[n])
                            }
                        })
                    }
                }
            }
              , ge = {
                name: "effect-flip",
                params: {
                    flipEffect: {
                        slideShadows: !0,
                        limitRotation: !0
                    }
                },
                create: function() {
                    var e = this;
                    d.extend(e, {
                        flipEffect: {
                            setTranslate: me.setTranslate.bind(e),
                            setTransition: me.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        var e = this;
                        if ("flip" === e.params.effect) {
                            e.classNames.push(e.params.containerModifierClass + "flip"),
                            e.classNames.push(e.params.containerModifierClass + "3d");
                            var t = {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerGroup: 1,
                                watchSlidesProgress: !0,
                                spaceBetween: 0,
                                virtualTranslate: !0
                            };
                            d.extend(e.params, t),
                            d.extend(e.originalParams, t)
                        }
                    },
                    setTranslate: function() {
                        var e = this;
                        "flip" === e.params.effect && e.flipEffect.setTranslate()
                    },
                    setTransition: function(e) {
                        var t = this;
                        "flip" === t.params.effect && t.flipEffect.setTransition(e)
                    }
                }
            }
              , ye = {
                setTranslate: function() {
                    for (var t = this, n = t.width, i = t.height, a = t.slides, r = t.$wrapperEl, s = t.slidesSizesGrid, o = t.params.coverflowEffect, l = t.isHorizontal(), d = t.translate, u = l ? n / 2 - d : i / 2 - d, c = l ? o.rotate : -o.rotate, p = o.depth, f = 0, h = a.length; f < h; f += 1) {
                        var v = a.eq(f)
                          , m = s[f]
                          , y = (u - v[0].swiperSlideOffset - m / 2) / m * o.modifier
                          , b = l ? c * y : 0
                          , x = l ? 0 : c * y
                          , w = -p * Math.abs(y)
                          , T = l ? 0 : o.stretch * y
                          , C = l ? o.stretch * y : 0;
                        Math.abs(C) < .001 && (C = 0),
                        Math.abs(T) < .001 && (T = 0),
                        Math.abs(w) < .001 && (w = 0),
                        Math.abs(b) < .001 && (b = 0),
                        Math.abs(x) < .001 && (x = 0);
                        var E = "translate3d(" + C + "px," + T + "px," + w + "px)  rotateX(" + x + "deg) rotateY(" + b + "deg)";
                        if (v.transform(E),
                        v[0].style.zIndex = 1 - Math.abs(Math.round(y)),
                        o.slideShadows) {
                            var S = l ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top")
                              , k = l ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                            0 === S.length && (S = e('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'),
                            v.append(S)),
                            0 === k.length && (k = e('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'),
                            v.append(k)),
                            S.length && (S[0].style.opacity = y > 0 ? y : 0),
                            k.length && (k[0].style.opacity = -y > 0 ? -y : 0)
                        }
                    }
                    g.ie && (r[0].style.perspectiveOrigin = u + "px 50%")
                },
                setTransition: function(e) {
                    this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                }
            }
              , be = {
                name: "effect-coverflow",
                params: {
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: !0
                    }
                },
                create: function() {
                    var e = this;
                    d.extend(e, {
                        coverflowEffect: {
                            setTranslate: ye.setTranslate.bind(e),
                            setTransition: ye.setTransition.bind(e)
                        }
                    })
                },
                on: {
                    beforeInit: function() {
                        var e = this;
                        "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"),
                        e.classNames.push(e.params.containerModifierClass + "3d"),
                        e.params.watchSlidesProgress = !0,
                        e.originalParams.watchSlidesProgress = !0)
                    },
                    setTranslate: function() {
                        var e = this;
                        "coverflow" === e.params.effect && e.coverflowEffect.setTranslate()
                    },
                    setTransition: function(e) {
                        var t = this;
                        "coverflow" === t.params.effect && t.coverflowEffect.setTransition(e)
                    }
                }
            };
            return D.use([N, L, $, I, H, F, R, _, W, Y, U, Q, Z, te, ie, re, oe, de, ce, fe, ve, ge, be]),
            D
        })
    },
    340: function(e, t, n) {
        "use strict";
        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = n(49)
          , a = _interopRequireDefault(i)
          , r = n(116)
          , s = _interopRequireDefault(r);
        n(115),
        window.$ = window.jQuery = a.default,
        window.Swiper = s.default
    },
    49: function(e, t, n) {
        var i, a;
        !function(t, n) {
            "use strict";
            "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
                if (!e.document)
                    throw new Error("jQuery requires a window with a document");
                return n(e)
            }
            : n(t)
        }("undefined" != typeof window ? window : this, function(n, r) {
            "use strict";
            function DOMEval(e, t) {
                t = t || o;
                var n = t.createElement("script");
                n.text = e,
                t.head.appendChild(n).parentNode.removeChild(n)
            }
            function isArrayLike(e) {
                var t = !!e && "length"in e && e.length
                  , n = x.type(e);
                return "function" !== n && !x.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }
            function nodeName(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }
            function winnow(e, t, n) {
                return x.isFunction(t) ? x.grep(e, function(e, i) {
                    return !!t.call(e, i, e) !== n
                }) : t.nodeType ? x.grep(e, function(e) {
                    return e === t !== n
                }) : "string" != typeof t ? x.grep(e, function(e) {
                    return p.call(t, e) > -1 !== n
                }) : A.test(t) ? x.filter(t, e, n) : (t = x.filter(t, e),
                x.grep(e, function(e) {
                    return p.call(t, e) > -1 !== n && 1 === e.nodeType
                }))
            }
            function sibling(e, t) {
                for (; (e = e[t]) && 1 !== e.nodeType; )
                    ;
                return e
            }
            function createOptions(e) {
                var t = {};
                return x.each(e.match(I) || [], function(e, n) {
                    t[n] = !0
                }),
                t
            }
            function Identity(e) {
                return e
            }
            function Thrower(e) {
                throw e
            }
            function adoptValue(e, t, n, i) {
                var a;
                try {
                    e && x.isFunction(a = e.promise) ? a.call(e).done(t).fail(n) : e && x.isFunction(a = e.then) ? a.call(e, t, n) : t.apply(void 0, [e].slice(i))
                } catch (e) {
                    n.apply(void 0, [e])
                }
            }
            function completed() {
                o.removeEventListener("DOMContentLoaded", completed),
                n.removeEventListener("load", completed),
                x.ready()
            }
            function Data() {
                this.expando = x.expando + Data.uid++
            }
            function getData(e) {
                return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : B.test(e) ? JSON.parse(e) : e)
            }
            function dataAttr(e, t, n) {
                var i;
                if (void 0 === n && 1 === e.nodeType)
                    if (i = "data-" + t.replace(_, "-$&").toLowerCase(),
                    "string" == typeof (n = e.getAttribute(i))) {
                        try {
                            n = getData(n)
                        } catch (e) {}
                        R.set(e, t, n)
                    } else
                        n = void 0;
                return n
            }
            function adjustCSS(e, t, n, i) {
                var a, r = 1, s = 20, o = i ? function() {
                    return i.cur()
                }
                : function() {
                    return x.css(e, t, "")
                }
                , l = o(), d = n && n[3] || (x.cssNumber[t] ? "" : "px"), u = (x.cssNumber[t] || "px" !== d && +l) && W.exec(x.css(e, t));
                if (u && u[3] !== d) {
                    d = d || u[3],
                    n = n || [],
                    u = +l || 1;
                    do {
                        r = r || ".5",
                        u /= r,
                        x.style(e, t, u + d)
                    } while (r !== (r = o() / l) && 1 !== r && --s)
                }
                return n && (u = +u || +l || 0,
                a = n[1] ? u + (n[1] + 1) * n[2] : +n[2],
                i && (i.unit = d,
                i.start = u,
                i.end = a)),
                a
            }
            function getDefaultDisplay(e) {
                var t, n = e.ownerDocument, i = e.nodeName, a = U[i];
                return a || (t = n.body.appendChild(n.createElement(i)),
                a = x.css(t, "display"),
                t.parentNode.removeChild(t),
                "none" === a && (a = "block"),
                U[i] = a,
                a)
            }
            function showHide(e, t) {
                for (var n, i, a = [], r = 0, s = e.length; r < s; r++)
                    i = e[r],
                    i.style && (n = i.style.display,
                    t ? ("none" === n && (a[r] = q.get(i, "display") || null,
                    a[r] || (i.style.display = "")),
                    "" === i.style.display && Y(i) && (a[r] = getDefaultDisplay(i))) : "none" !== n && (a[r] = "none",
                    q.set(i, "display", n)));
                for (r = 0; r < s; r++)
                    null != a[r] && (e[r].style.display = a[r]);
                return e
            }
            function getAll(e, t) {
                var n;
                return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
                void 0 === t || t && nodeName(e, t) ? x.merge([e], n) : n
            }
            function setGlobalEval(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    q.set(e[n], "globalEval", !t || q.get(t[n], "globalEval"))
            }
            function buildFragment(e, t, n, i, a) {
                for (var r, s, o, l, d, u, c = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++)
                    if ((r = e[f]) || 0 === r)
                        if ("object" === x.type(r))
                            x.merge(p, r.nodeType ? [r] : r);
                        else if (ee.test(r)) {
                            for (s = s || c.appendChild(t.createElement("div")),
                            o = (Q.exec(r) || ["", ""])[1].toLowerCase(),
                            l = Z[o] || Z._default,
                            s.innerHTML = l[1] + x.htmlPrefilter(r) + l[2],
                            u = l[0]; u--; )
                                s = s.lastChild;
                            x.merge(p, s.childNodes),
                            s = c.firstChild,
                            s.textContent = ""
                        } else
                            p.push(t.createTextNode(r));
                for (c.textContent = "",
                f = 0; r = p[f++]; )
                    if (i && x.inArray(r, i) > -1)
                        a && a.push(r);
                    else if (d = x.contains(r.ownerDocument, r),
                    s = getAll(c.appendChild(r), "script"),
                    d && setGlobalEval(s),
                    n)
                        for (u = 0; r = s[u++]; )
                            J.test(r.type || "") && n.push(r);
                return c
            }
            function returnTrue() {
                return !0
            }
            function returnFalse() {
                return !1
            }
            function safeActiveElement() {
                try {
                    return o.activeElement
                } catch (e) {}
            }
            function on(e, t, n, i, a, r) {
                var s, o;
                if ("object" == typeof t) {
                    "string" != typeof n && (i = i || n,
                    n = void 0);
                    for (o in t)
                        on(e, o, n, i, t[o], r);
                    return e
                }
                if (null == i && null == a ? (a = n,
                i = n = void 0) : null == a && ("string" == typeof n ? (a = i,
                i = void 0) : (a = i,
                i = n,
                n = void 0)),
                !1 === a)
                    a = returnFalse;
                else if (!a)
                    return e;
                return 1 === r && (s = a,
                a = function(e) {
                    return x().off(e),
                    s.apply(this, arguments)
                }
                ,
                a.guid = s.guid || (s.guid = x.guid++)),
                e.each(function() {
                    x.event.add(this, t, a, i, n)
                })
            }
            function manipulationTarget(e, t) {
                return nodeName(e, "table") && nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? x(">tbody", e)[0] || e : e
            }
            function disableScript(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
                e
            }
            function restoreScript(e) {
                var t = le.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"),
                e
            }
            function cloneCopyEvent(e, t) {
                var n, i, a, r, s, o, l, d;
                if (1 === t.nodeType) {
                    if (q.hasData(e) && (r = q.access(e),
                    s = q.set(t, r),
                    d = r.events)) {
                        delete s.handle,
                        s.events = {};
                        for (a in d)
                            for (n = 0,
                            i = d[a].length; n < i; n++)
                                x.event.add(t, a, d[a][n])
                    }
                    R.hasData(e) && (o = R.access(e),
                    l = x.extend({}, o),
                    R.set(t, l))
                }
            }
            function fixInput(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && K.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }
            function domManip(e, t, n, i) {
                t = u.apply([], t);
                var a, r, s, o, l, d, c = 0, p = e.length, f = p - 1, h = t[0], v = x.isFunction(h);
                if (v || p > 1 && "string" == typeof h && !y.checkClone && oe.test(h))
                    return e.each(function(a) {
                        var r = e.eq(a);
                        v && (t[0] = h.call(this, a, r.html())),
                        domManip(r, t, n, i)
                    });
                if (p && (a = buildFragment(t, e[0].ownerDocument, !1, e, i),
                r = a.firstChild,
                1 === a.childNodes.length && (a = r),
                r || i)) {
                    for (s = x.map(getAll(a, "script"), disableScript),
                    o = s.length; c < p; c++)
                        l = a,
                        c !== f && (l = x.clone(l, !0, !0),
                        o && x.merge(s, getAll(l, "script"))),
                        n.call(e[c], l, c);
                    if (o)
                        for (d = s[s.length - 1].ownerDocument,
                        x.map(s, restoreScript),
                        c = 0; c < o; c++)
                            l = s[c],
                            J.test(l.type || "") && !q.access(l, "globalEval") && x.contains(d, l) && (l.src ? x._evalUrl && x._evalUrl(l.src) : DOMEval(l.textContent.replace(de, ""), d))
                }
                return e
            }
            function remove(e, t, n) {
                for (var i, a = t ? x.filter(t, e) : e, r = 0; null != (i = a[r]); r++)
                    n || 1 !== i.nodeType || x.cleanData(getAll(i)),
                    i.parentNode && (n && x.contains(i.ownerDocument, i) && setGlobalEval(getAll(i, "script")),
                    i.parentNode.removeChild(i));
                return e
            }
            function curCSS(e, t, n) {
                var i, a, r, s, o = e.style;
                return n = n || pe(e),
                n && (s = n.getPropertyValue(t) || n[t],
                "" !== s || x.contains(e.ownerDocument, e) || (s = x.style(e, t)),
                !y.pixelMarginRight() && ce.test(s) && ue.test(t) && (i = o.width,
                a = o.minWidth,
                r = o.maxWidth,
                o.minWidth = o.maxWidth = o.width = s,
                s = n.width,
                o.width = i,
                o.minWidth = a,
                o.maxWidth = r)),
                void 0 !== s ? s + "" : s
            }
            function addGetHookIf(e, t) {
                return {
                    get: function() {
                        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                    }
                }
            }
            function vendorPropName(e) {
                if (e in ye)
                    return e;
                for (var t = e[0].toUpperCase() + e.slice(1), n = ge.length; n--; )
                    if ((e = ge[n] + t)in ye)
                        return e
            }
            function finalPropName(e) {
                var t = x.cssProps[e];
                return t || (t = x.cssProps[e] = vendorPropName(e) || e),
                t
            }
            function setPositiveNumber(e, t, n) {
                var i = W.exec(t);
                return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
            }
            function augmentWidthOrHeight(e, t, n, i, a) {
                var r, s = 0;
                for (r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; r < 4; r += 2)
                    "margin" === n && (s += x.css(e, n + G[r], !0, a)),
                    i ? ("content" === n && (s -= x.css(e, "padding" + G[r], !0, a)),
                    "margin" !== n && (s -= x.css(e, "border" + G[r] + "Width", !0, a))) : (s += x.css(e, "padding" + G[r], !0, a),
                    "padding" !== n && (s += x.css(e, "border" + G[r] + "Width", !0, a)));
                return s
            }
            function getWidthOrHeight(e, t, n) {
                var i, a = pe(e), r = curCSS(e, t, a), s = "border-box" === x.css(e, "boxSizing", !1, a);
                return ce.test(r) ? r : (i = s && (y.boxSizingReliable() || r === e.style[t]),
                "auto" === r && (r = e["offset" + t[0].toUpperCase() + t.slice(1)]),
                (r = parseFloat(r) || 0) + augmentWidthOrHeight(e, t, n || (s ? "border" : "content"), i, a) + "px")
            }
            function Tween(e, t, n, i, a) {
                return new Tween.prototype.init(e,t,n,i,a)
            }
            function schedule() {
                xe && (!1 === o.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(schedule) : n.setTimeout(schedule, x.fx.interval),
                x.fx.tick())
            }
            function createFxNow() {
                return n.setTimeout(function() {
                    be = void 0
                }),
                be = x.now()
            }
            function genFx(e, t) {
                var n, i = 0, a = {
                    height: e
                };
                for (t = t ? 1 : 0; i < 4; i += 2 - t)
                    n = G[i],
                    a["margin" + n] = a["padding" + n] = e;
                return t && (a.opacity = a.width = e),
                a
            }
            function createTween(e, t, n) {
                for (var i, a = (Animation.tweeners[t] || []).concat(Animation.tweeners["*"]), r = 0, s = a.length; r < s; r++)
                    if (i = a[r].call(n, t, e))
                        return i
            }
            function defaultPrefilter(e, t, n) {
                var i, a, r, s, o, l, d, u, c = "width"in t || "height"in t, p = this, f = {}, h = e.style, v = e.nodeType && Y(e), m = q.get(e, "fxshow");
                n.queue || (s = x._queueHooks(e, "fx"),
                null == s.unqueued && (s.unqueued = 0,
                o = s.empty.fire,
                s.empty.fire = function() {
                    s.unqueued || o()
                }
                ),
                s.unqueued++,
                p.always(function() {
                    p.always(function() {
                        s.unqueued--,
                        x.queue(e, "fx").length || s.empty.fire()
                    })
                }));
                for (i in t)
                    if (a = t[i],
                    we.test(a)) {
                        if (delete t[i],
                        r = r || "toggle" === a,
                        a === (v ? "hide" : "show")) {
                            if ("show" !== a || !m || void 0 === m[i])
                                continue;
                            v = !0
                        }
                        f[i] = m && m[i] || x.style(e, i)
                    }
                if ((l = !x.isEmptyObject(t)) || !x.isEmptyObject(f)) {
                    c && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                    d = m && m.display,
                    null == d && (d = q.get(e, "display")),
                    u = x.css(e, "display"),
                    "none" === u && (d ? u = d : (showHide([e], !0),
                    d = e.style.display || d,
                    u = x.css(e, "display"),
                    showHide([e]))),
                    ("inline" === u || "inline-block" === u && null != d) && "none" === x.css(e, "float") && (l || (p.done(function() {
                        h.display = d
                    }),
                    null == d && (u = h.display,
                    d = "none" === u ? "" : u)),
                    h.display = "inline-block")),
                    n.overflow && (h.overflow = "hidden",
                    p.always(function() {
                        h.overflow = n.overflow[0],
                        h.overflowX = n.overflow[1],
                        h.overflowY = n.overflow[2]
                    })),
                    l = !1;
                    for (i in f)
                        l || (m ? "hidden"in m && (v = m.hidden) : m = q.access(e, "fxshow", {
                            display: d
                        }),
                        r && (m.hidden = !v),
                        v && showHide([e], !0),
                        p.done(function() {
                            v || showHide([e]),
                            q.remove(e, "fxshow");
                            for (i in f)
                                x.style(e, i, f[i])
                        })),
                        l = createTween(v ? m[i] : 0, i, p),
                        i in m || (m[i] = l.start,
                        v && (l.end = l.start,
                        l.start = 0))
                }
            }
            function propFilter(e, t) {
                var n, i, a, r, s;
                for (n in e)
                    if (i = x.camelCase(n),
                    a = t[i],
                    r = e[n],
                    Array.isArray(r) && (a = r[1],
                    r = e[n] = r[0]),
                    n !== i && (e[i] = r,
                    delete e[n]),
                    (s = x.cssHooks[i]) && "expand"in s) {
                        r = s.expand(r),
                        delete e[i];
                        for (n in r)
                            n in e || (e[n] = r[n],
                            t[n] = a)
                    } else
                        t[i] = a
            }
            function Animation(e, t, n) {
                var i, a, r = 0, s = Animation.prefilters.length, o = x.Deferred().always(function() {
                    delete l.elem
                }), l = function() {
                    if (a)
                        return !1;
                    for (var t = be || createFxNow(), n = Math.max(0, d.startTime + d.duration - t), i = n / d.duration || 0, r = 1 - i, s = 0, l = d.tweens.length; s < l; s++)
                        d.tweens[s].run(r);
                    return o.notifyWith(e, [d, r, n]),
                    r < 1 && l ? n : (l || o.notifyWith(e, [d, 1, 0]),
                    o.resolveWith(e, [d]),
                    !1)
                }, d = o.promise({
                    elem: e,
                    props: x.extend({}, t),
                    opts: x.extend(!0, {
                        specialEasing: {},
                        easing: x.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: be || createFxNow(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = x.Tween(e, d.opts, t, n, d.opts.specialEasing[t] || d.opts.easing);
                        return d.tweens.push(i),
                        i
                    },
                    stop: function(t) {
                        var n = 0
                          , i = t ? d.tweens.length : 0;
                        if (a)
                            return this;
                        for (a = !0; n < i; n++)
                            d.tweens[n].run(1);
                        return t ? (o.notifyWith(e, [d, 1, 0]),
                        o.resolveWith(e, [d, t])) : o.rejectWith(e, [d, t]),
                        this
                    }
                }), u = d.props;
                for (propFilter(u, d.opts.specialEasing); r < s; r++)
                    if (i = Animation.prefilters[r].call(d, e, u, d.opts))
                        return x.isFunction(i.stop) && (x._queueHooks(d.elem, d.opts.queue).stop = x.proxy(i.stop, i)),
                        i;
                return x.map(u, createTween, d),
                x.isFunction(d.opts.start) && d.opts.start.call(e, d),
                d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always),
                x.fx.timer(x.extend(l, {
                    elem: e,
                    anim: d,
                    queue: d.opts.queue
                })),
                d
            }
            function stripAndCollapse(e) {
                return (e.match(I) || []).join(" ")
            }
            function getClass(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }
            function buildParams(e, t, n, i) {
                var a;
                if (Array.isArray(t))
                    x.each(t, function(t, a) {
                        n || Ne.test(e) ? i(e, a) : buildParams(e + "[" + ("object" == typeof a && null != a ? t : "") + "]", a, n, i)
                    });
                else if (n || "object" !== x.type(t))
                    i(e, t);
                else
                    for (a in t)
                        buildParams(e + "[" + a + "]", t[a], n, i)
            }
            function addToPrefiltersOrTransports(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t,
                    t = "*");
                    var i, a = 0, r = t.toLowerCase().match(I) || [];
                    if (x.isFunction(n))
                        for (; i = r[a++]; )
                            "+" === i[0] ? (i = i.slice(1) || "*",
                            (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
                }
            }
            function inspectPrefiltersOrTransports(e, t, n, i) {
                function inspect(s) {
                    var o;
                    return a[s] = !0,
                    x.each(e[s] || [], function(e, s) {
                        var l = s(t, n, i);
                        return "string" != typeof l || r || a[l] ? r ? !(o = l) : void 0 : (t.dataTypes.unshift(l),
                        inspect(l),
                        !1)
                    }),
                    o
                }
                var a = {}
                  , r = e === Xe;
                return inspect(t.dataTypes[0]) || !a["*"] && inspect("*")
            }
            function ajaxExtend(e, t) {
                var n, i, a = x.ajaxSettings.flatOptions || {};
                for (n in t)
                    void 0 !== t[n] && ((a[n] ? e : i || (i = {}))[n] = t[n]);
                return i && x.extend(!0, e, i),
                e
            }
            function ajaxHandleResponses(e, t, n) {
                for (var i, a, r, s, o = e.contents, l = e.dataTypes; "*" === l[0]; )
                    l.shift(),
                    void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                if (i)
                    for (a in o)
                        if (o[a] && o[a].test(i)) {
                            l.unshift(a);
                            break
                        }
                if (l[0]in n)
                    r = l[0];
                else {
                    for (a in n) {
                        if (!l[0] || e.converters[a + " " + l[0]]) {
                            r = a;
                            break
                        }
                        s || (s = a)
                    }
                    r = r || s
                }
                if (r)
                    return r !== l[0] && l.unshift(r),
                    n[r]
            }
            function ajaxConvert(e, t, n, i) {
                var a, r, s, o, l, d = {}, u = e.dataTypes.slice();
                if (u[1])
                    for (s in e.converters)
                        d[s.toLowerCase()] = e.converters[s];
                for (r = u.shift(); r; )
                    if (e.responseFields[r] && (n[e.responseFields[r]] = t),
                    !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                    l = r,
                    r = u.shift())
                        if ("*" === r)
                            r = l;
                        else if ("*" !== l && l !== r) {
                            if (!(s = d[l + " " + r] || d["* " + r]))
                                for (a in d)
                                    if (o = a.split(" "),
                                    o[1] === r && (s = d[l + " " + o[0]] || d["* " + o[0]])) {
                                        !0 === s ? s = d[a] : !0 !== d[a] && (r = o[0],
                                        u.unshift(o[1]));
                                        break
                                    }
                            if (!0 !== s)
                                if (s && e.throws)
                                    t = s(t);
                                else
                                    try {
                                        t = s(t)
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: s ? e : "No conversion from " + l + " to " + r
                                        }
                                    }
                        }
                return {
                    state: "success",
                    data: t
                }
            }
            var s = []
              , o = n.document
              , l = Object.getPrototypeOf
              , d = s.slice
              , u = s.concat
              , c = s.push
              , p = s.indexOf
              , f = {}
              , h = f.toString
              , v = f.hasOwnProperty
              , m = v.toString
              , g = m.call(Object)
              , y = {}
              , b = "3.2.1"
              , x = function(e, t) {
                return new x.fn.init(e,t)
            }
              , w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
              , T = /^-ms-/
              , C = /-([a-z])/g
              , E = function(e, t) {
                return t.toUpperCase()
            };
            x.fn = x.prototype = {
                jquery: b,
                constructor: x,
                length: 0,
                toArray: function() {
                    return d.call(this)
                },
                get: function(e) {
                    return null == e ? d.call(this) : e < 0 ? this[e + this.length] : this[e]
                },
                pushStack: function(e) {
                    var t = x.merge(this.constructor(), e);
                    return t.prevObject = this,
                    t
                },
                each: function(e) {
                    return x.each(this, e)
                },
                map: function(e) {
                    return this.pushStack(x.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function() {
                    return this.pushStack(d.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length
                      , n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: c,
                sort: s.sort,
                splice: s.splice
            },
            x.extend = x.fn.extend = function() {
                var e, t, n, i, a, r, s = arguments[0] || {}, o = 1, l = arguments.length, d = !1;
                for ("boolean" == typeof s && (d = s,
                s = arguments[o] || {},
                o++),
                "object" == typeof s || x.isFunction(s) || (s = {}),
                o === l && (s = this,
                o--); o < l; o++)
                    if (null != (e = arguments[o]))
                        for (t in e)
                            n = s[t],
                            i = e[t],
                            s !== i && (d && i && (x.isPlainObject(i) || (a = Array.isArray(i))) ? (a ? (a = !1,
                            r = n && Array.isArray(n) ? n : []) : r = n && x.isPlainObject(n) ? n : {},
                            s[t] = x.extend(d, r, i)) : void 0 !== i && (s[t] = i));
                return s
            }
            ,
            x.extend({
                expando: "jQuery" + (b + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isFunction: function(e) {
                    return "function" === x.type(e)
                },
                isWindow: function(e) {
                    return null != e && e === e.window
                },
                isNumeric: function(e) {
                    var t = x.type(e);
                    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
                },
                isPlainObject: function(e) {
                    var t, n;
                    return !(!e || "[object Object]" !== h.call(e)) && (!(t = l(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && m.call(n) === g)
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e)
                        return !1;
                    return !0
                },
                type: function(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[h.call(e)] || "object" : typeof e
                },
                globalEval: function(e) {
                    DOMEval(e)
                },
                camelCase: function(e) {
                    return e.replace(T, "ms-").replace(C, E)
                },
                each: function(e, t) {
                    var n, i = 0;
                    if (isArrayLike(e))
                        for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++)
                            ;
                    else
                        for (i in e)
                            if (!1 === t.call(e[i], i, e[i]))
                                break;
                    return e
                },
                trim: function(e) {
                    return null == e ? "" : (e + "").replace(w, "")
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (isArrayLike(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)),
                    n
                },
                inArray: function(e, t, n) {
                    return null == t ? -1 : p.call(t, e, n)
                },
                merge: function(e, t) {
                    for (var n = +t.length, i = 0, a = e.length; i < n; i++)
                        e[a++] = t[i];
                    return e.length = a,
                    e
                },
                grep: function(e, t, n) {
                    for (var i = [], a = 0, r = e.length, s = !n; a < r; a++)
                        !t(e[a], a) !== s && i.push(e[a]);
                    return i
                },
                map: function(e, t, n) {
                    var i, a, r = 0, s = [];
                    if (isArrayLike(e))
                        for (i = e.length; r < i; r++)
                            null != (a = t(e[r], r, n)) && s.push(a);
                    else
                        for (r in e)
                            null != (a = t(e[r], r, n)) && s.push(a);
                    return u.apply([], s)
                },
                guid: 1,
                proxy: function(e, t) {
                    var n, i, a;
                    if ("string" == typeof t && (n = e[t],
                    t = e,
                    e = n),
                    x.isFunction(e))
                        return i = d.call(arguments, 2),
                        a = function() {
                            return e.apply(t || this, i.concat(d.call(arguments)))
                        }
                        ,
                        a.guid = e.guid = e.guid || x.guid++,
                        a
                },
                now: Date.now,
                support: y
            }),
            "function" == typeof Symbol && (x.fn[Symbol.iterator] = s[Symbol.iterator]),
            x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
                f["[object " + t + "]"] = t.toLowerCase()
            });
            var S = function(e) {
                function Sizzle(e, t, i, a) {
                    var r, o, d, u, c, h, g, y = t && t.ownerDocument, T = t ? t.nodeType : 9;
                    if (i = i || [],
                    "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T)
                        return i;
                    if (!a && ((t ? t.ownerDocument || t : w) !== f && p(t),
                    t = t || f,
                    v)) {
                        if (11 !== T && (c = Q.exec(e)))
                            if (r = c[1]) {
                                if (9 === T) {
                                    if (!(d = t.getElementById(r)))
                                        return i;
                                    if (d.id === r)
                                        return i.push(d),
                                        i
                                } else if (y && (d = y.getElementById(r)) && b(t, d) && d.id === r)
                                    return i.push(d),
                                    i
                            } else {
                                if (c[2])
                                    return N.apply(i, t.getElementsByTagName(e)),
                                    i;
                                if ((r = c[3]) && n.getElementsByClassName && t.getElementsByClassName)
                                    return N.apply(i, t.getElementsByClassName(r)),
                                    i
                            }
                        if (n.qsa && !k[e + " "] && (!m || !m.test(e))) {
                            if (1 !== T)
                                y = t,
                                g = e;
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((u = t.getAttribute("id")) ? u = u.replace(te, ne) : t.setAttribute("id", u = x),
                                h = s(e),
                                o = h.length; o--; )
                                    h[o] = "#" + u + " " + toSelector(h[o]);
                                g = h.join(","),
                                y = J.test(e) && testContext(t.parentNode) || t
                            }
                            if (g)
                                try {
                                    return N.apply(i, y.querySelectorAll(g)),
                                    i
                                } catch (e) {} finally {
                                    u === x && t.removeAttribute("id")
                                }
                        }
                    }
                    return l(e.replace(R, "$1"), t, i, a)
                }
                function createCache() {
                    function cache(t, n) {
                        return e.push(t + " ") > i.cacheLength && delete cache[e.shift()],
                        cache[t + " "] = n
                    }
                    var e = [];
                    return cache
                }
                function markFunction(e) {
                    return e[x] = !0,
                    e
                }
                function assert(e) {
                    var t = f.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t),
                        t = null
                    }
                }
                function addHandle(e, t) {
                    for (var n = e.split("|"), a = n.length; a--; )
                        i.attrHandle[n[a]] = t
                }
                function siblingCheck(e, t) {
                    var n = t && e
                      , i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (i)
                        return i;
                    if (n)
                        for (; n = n.nextSibling; )
                            if (n === t)
                                return -1;
                    return e ? 1 : -1
                }
                function createInputPseudo(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }
                function createButtonPseudo(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }
                function createDisabledPseudo(e) {
                    return function(t) {
                        return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label"in t && t.disabled === e
                    }
                }
                function createPositionalPseudo(e) {
                    return markFunction(function(t) {
                        return t = +t,
                        markFunction(function(n, i) {
                            for (var a, r = e([], n.length, t), s = r.length; s--; )
                                n[a = r[s]] && (n[a] = !(i[a] = n[a]))
                        })
                    })
                }
                function testContext(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }
                function setFilters() {}
                function toSelector(e) {
                    for (var t = 0, n = e.length, i = ""; t < n; t++)
                        i += e[t].value;
                    return i
                }
                function addCombinator(e, t, n) {
                    var i = t.dir
                      , a = t.next
                      , r = a || i
                      , s = n && "parentNode" === r
                      , o = C++;
                    return t.first ? function(t, n, a) {
                        for (; t = t[i]; )
                            if (1 === t.nodeType || s)
                                return e(t, n, a);
                        return !1
                    }
                    : function(t, n, l) {
                        var d, u, c, p = [T, o];
                        if (l) {
                            for (; t = t[i]; )
                                if ((1 === t.nodeType || s) && e(t, n, l))
                                    return !0
                        } else
                            for (; t = t[i]; )
                                if (1 === t.nodeType || s)
                                    if (c = t[x] || (t[x] = {}),
                                    u = c[t.uniqueID] || (c[t.uniqueID] = {}),
                                    a && a === t.nodeName.toLowerCase())
                                        t = t[i] || t;
                                    else {
                                        if ((d = u[r]) && d[0] === T && d[1] === o)
                                            return p[2] = d[2];
                                        if (u[r] = p,
                                        p[2] = e(t, n, l))
                                            return !0
                                    }
                        return !1
                    }
                }
                function elementMatcher(e) {
                    return e.length > 1 ? function(t, n, i) {
                        for (var a = e.length; a--; )
                            if (!e[a](t, n, i))
                                return !1;
                        return !0
                    }
                    : e[0]
                }
                function multipleContexts(e, t, n) {
                    for (var i = 0, a = t.length; i < a; i++)
                        Sizzle(e, t[i], n);
                    return n
                }
                function condense(e, t, n, i, a) {
                    for (var r, s = [], o = 0, l = e.length, d = null != t; o < l; o++)
                        (r = e[o]) && (n && !n(r, i, a) || (s.push(r),
                        d && t.push(o)));
                    return s
                }
                function setMatcher(e, t, n, i, a, r) {
                    return i && !i[x] && (i = setMatcher(i)),
                    a && !a[x] && (a = setMatcher(a, r)),
                    markFunction(function(r, s, o, l) {
                        var d, u, c, p = [], f = [], h = s.length, v = r || multipleContexts(t || "*", o.nodeType ? [o] : o, []), m = !e || !r && t ? v : condense(v, p, e, o, l), g = n ? a || (r ? e : h || i) ? [] : s : m;
                        if (n && n(m, g, o, l),
                        i)
                            for (d = condense(g, f),
                            i(d, [], o, l),
                            u = d.length; u--; )
                                (c = d[u]) && (g[f[u]] = !(m[f[u]] = c));
                        if (r) {
                            if (a || e) {
                                if (a) {
                                    for (d = [],
                                    u = g.length; u--; )
                                        (c = g[u]) && d.push(m[u] = c);
                                    a(null, g = [], d, l)
                                }
                                for (u = g.length; u--; )
                                    (c = g[u]) && (d = a ? $(r, c) : p[u]) > -1 && (r[d] = !(s[d] = c))
                            }
                        } else
                            g = condense(g === s ? g.splice(h, g.length) : g),
                            a ? a(null, s, g, l) : N.apply(s, g)
                    })
                }
                function matcherFromTokens(e) {
                    for (var t, n, a, r = e.length, s = i.relative[e[0].type], o = s || i.relative[" "], l = s ? 1 : 0, u = addCombinator(function(e) {
                        return e === t
                    }, o, !0), c = addCombinator(function(e) {
                        return $(t, e) > -1
                    }, o, !0), p = [function(e, n, i) {
                        var a = !s && (i || n !== d) || ((t = n).nodeType ? u(e, n, i) : c(e, n, i));
                        return t = null,
                        a
                    }
                    ]; l < r; l++)
                        if (n = i.relative[e[l].type])
                            p = [addCombinator(elementMatcher(p), n)];
                        else {
                            if (n = i.filter[e[l].type].apply(null, e[l].matches),
                            n[x]) {
                                for (a = ++l; a < r && !i.relative[e[a].type]; a++)
                                    ;
                                return setMatcher(l > 1 && elementMatcher(p), l > 1 && toSelector(e.slice(0, l - 1).concat({
                                    value: " " === e[l - 2].type ? "*" : ""
                                })).replace(R, "$1"), n, l < a && matcherFromTokens(e.slice(l, a)), a < r && matcherFromTokens(e = e.slice(a)), a < r && toSelector(e))
                            }
                            p.push(n)
                        }
                    return elementMatcher(p)
                }
                function matcherFromGroupMatchers(e, t) {
                    var n = t.length > 0
                      , a = e.length > 0
                      , r = function(r, s, o, l, u) {
                        var c, h, m, g = 0, y = "0", b = r && [], x = [], w = d, C = r || a && i.find.TAG("*", u), E = T += null == w ? 1 : Math.random() || .1, S = C.length;
                        for (u && (d = s === f || s || u); y !== S && null != (c = C[y]); y++) {
                            if (a && c) {
                                for (h = 0,
                                s || c.ownerDocument === f || (p(c),
                                o = !v); m = e[h++]; )
                                    if (m(c, s || f, o)) {
                                        l.push(c);
                                        break
                                    }
                                u && (T = E)
                            }
                            n && ((c = !m && c) && g--,
                            r && b.push(c))
                        }
                        if (g += y,
                        n && y !== g) {
                            for (h = 0; m = t[h++]; )
                                m(b, x, s, o);
                            if (r) {
                                if (g > 0)
                                    for (; y--; )
                                        b[y] || x[y] || (x[y] = A.call(l));
                                x = condense(x)
                            }
                            N.apply(l, x),
                            u && !r && x.length > 0 && g + t.length > 1 && Sizzle.uniqueSort(l)
                        }
                        return u && (T = E,
                        d = w),
                        b
                    };
                    return n ? markFunction(r) : r
                }
                var t, n, i, a, r, s, o, l, d, u, c, p, f, h, v, m, g, y, b, x = "sizzle" + 1 * new Date, w = e.document, T = 0, C = 0, E = createCache(), S = createCache(), k = createCache(), M = function(e, t) {
                    return e === t && (c = !0),
                    0
                }, z = {}.hasOwnProperty, P = [], A = P.pop, D = P.push, N = P.push, L = P.slice, $ = function(e, t) {
                    for (var n = 0, i = e.length; n < i; n++)
                        if (e[n] === t)
                            return n;
                    return -1
                }, I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", O = "[\\x20\\t\\r\\n\\f]", H = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", j = "\\[" + O + "*(" + H + ")(?:" + O + "*([*^$|!~]?=)" + O + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + O + "*\\]", F = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + j + ")*)|.*)\\)|)", q = new RegExp(O + "+","g"), R = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$","g"), B = new RegExp("^" + O + "*," + O + "*"), _ = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"), X = new RegExp("=" + O + "*([^\\]'\"]*?)" + O + "*\\]","g"), W = new RegExp(F), G = new RegExp("^" + H + "$"), Y = {
                    ID: new RegExp("^#(" + H + ")"),
                    CLASS: new RegExp("^\\.(" + H + ")"),
                    TAG: new RegExp("^(" + H + "|[*])"),
                    ATTR: new RegExp("^" + j),
                    PSEUDO: new RegExp("^" + F),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)","i"),
                    bool: new RegExp("^(?:" + I + ")$","i"),
                    needsContext: new RegExp("^" + O + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)","i")
                }, V = /^(?:input|select|textarea|button)$/i, U = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, J = /[+~]/, Z = new RegExp("\\\\([\\da-f]{1,6}" + O + "?|(" + O + ")|.)","ig"), ee = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function(e, t) {
                    return t ? "\0" === e ? " " : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                }, ie = function() {
                    p()
                }, ae = addCombinator(function(e) {
                    return !0 === e.disabled && ("form"in e || "label"in e)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
                try {
                    N.apply(P = L.call(w.childNodes), w.childNodes),
                    P[w.childNodes.length].nodeType
                } catch (e) {
                    N = {
                        apply: P.length ? function(e, t) {
                            D.apply(e, L.call(t))
                        }
                        : function(e, t) {
                            for (var n = e.length, i = 0; e[n++] = t[i++]; )
                                ;
                            e.length = n - 1
                        }
                    }
                }
                n = Sizzle.support = {},
                r = Sizzle.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }
                ,
                p = Sizzle.setDocument = function(e) {
                    var t, a, s = e ? e.ownerDocument || e : w;
                    return s !== f && 9 === s.nodeType && s.documentElement ? (f = s,
                    h = f.documentElement,
                    v = !r(f),
                    w !== f && (a = f.defaultView) && a.top !== a && (a.addEventListener ? a.addEventListener("unload", ie, !1) : a.attachEvent && a.attachEvent("onunload", ie)),
                    n.attributes = assert(function(e) {
                        return e.className = "i",
                        !e.getAttribute("className")
                    }),
                    n.getElementsByTagName = assert(function(e) {
                        return e.appendChild(f.createComment("")),
                        !e.getElementsByTagName("*").length
                    }),
                    n.getElementsByClassName = K.test(f.getElementsByClassName),
                    n.getById = assert(function(e) {
                        return h.appendChild(e).id = x,
                        !f.getElementsByName || !f.getElementsByName(x).length
                    }),
                    n.getById ? (i.filter.ID = function(e) {
                        var t = e.replace(Z, ee);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }
                    ,
                    i.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && v) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }
                    ) : (i.filter.ID = function(e) {
                        var t = e.replace(Z, ee);
                        return function(e) {
                            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }
                    ,
                    i.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && v) {
                            var n, i, a, r = t.getElementById(e);
                            if (r) {
                                if ((n = r.getAttributeNode("id")) && n.value === e)
                                    return [r];
                                for (a = t.getElementsByName(e),
                                i = 0; r = a[i++]; )
                                    if ((n = r.getAttributeNode("id")) && n.value === e)
                                        return [r]
                            }
                            return []
                        }
                    }
                    ),
                    i.find.TAG = n.getElementsByTagName ? function(e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                    }
                    : function(e, t) {
                        var n, i = [], a = 0, r = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = r[a++]; )
                                1 === n.nodeType && i.push(n);
                            return i
                        }
                        return r
                    }
                    ,
                    i.find.CLASS = n.getElementsByClassName && function(e, t) {
                        if (void 0 !== t.getElementsByClassName && v)
                            return t.getElementsByClassName(e)
                    }
                    ,
                    g = [],
                    m = [],
                    (n.qsa = K.test(f.querySelectorAll)) && (assert(function(e) {
                        h.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                        e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + O + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length || m.push("\\[" + O + "*(?:value|" + I + ")"),
                        e.querySelectorAll("[id~=" + x + "-]").length || m.push("~="),
                        e.querySelectorAll(":checked").length || m.push(":checked"),
                        e.querySelectorAll("a#" + x + "+*").length || m.push(".#.+[+~]")
                    }),
                    assert(function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = f.createElement("input");
                        t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length && m.push("name" + O + "*[*^$|!~]?="),
                        2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                        h.appendChild(e).disabled = !0,
                        2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        m.push(",.*:")
                    })),
                    (n.matchesSelector = K.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && assert(function(e) {
                        n.disconnectedMatch = y.call(e, "*"),
                        y.call(e, "[s!='']:x"),
                        g.push("!=", F)
                    }),
                    m = m.length && new RegExp(m.join("|")),
                    g = g.length && new RegExp(g.join("|")),
                    t = K.test(h.compareDocumentPosition),
                    b = t || K.test(h.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e
                          , i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    }
                    : function(e, t) {
                        if (t)
                            for (; t = t.parentNode; )
                                if (t === e)
                                    return !0;
                        return !1
                    }
                    ,
                    M = t ? function(e, t) {
                        if (e === t)
                            return c = !0,
                            0;
                        var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return i || (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                        1 & i || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === f || e.ownerDocument === w && b(w, e) ? -1 : t === f || t.ownerDocument === w && b(w, t) ? 1 : u ? $(u, e) - $(u, t) : 0 : 4 & i ? -1 : 1)
                    }
                    : function(e, t) {
                        if (e === t)
                            return c = !0,
                            0;
                        var n, i = 0, a = e.parentNode, r = t.parentNode, s = [e], o = [t];
                        if (!a || !r)
                            return e === f ? -1 : t === f ? 1 : a ? -1 : r ? 1 : u ? $(u, e) - $(u, t) : 0;
                        if (a === r)
                            return siblingCheck(e, t);
                        for (n = e; n = n.parentNode; )
                            s.unshift(n);
                        for (n = t; n = n.parentNode; )
                            o.unshift(n);
                        for (; s[i] === o[i]; )
                            i++;
                        return i ? siblingCheck(s[i], o[i]) : s[i] === w ? -1 : o[i] === w ? 1 : 0
                    }
                    ,
                    f) : f
                }
                ,
                Sizzle.matches = function(e, t) {
                    return Sizzle(e, null, null, t)
                }
                ,
                Sizzle.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== f && p(e),
                    t = t.replace(X, "='$1']"),
                    n.matchesSelector && v && !k[t + " "] && (!g || !g.test(t)) && (!m || !m.test(t)))
                        try {
                            var i = y.call(e, t);
                            if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                                return i
                        } catch (e) {}
                    return Sizzle(t, f, null, [e]).length > 0
                }
                ,
                Sizzle.contains = function(e, t) {
                    return (e.ownerDocument || e) !== f && p(e),
                    b(e, t)
                }
                ,
                Sizzle.attr = function(e, t) {
                    (e.ownerDocument || e) !== f && p(e);
                    var a = i.attrHandle[t.toLowerCase()]
                      , r = a && z.call(i.attrHandle, t.toLowerCase()) ? a(e, t, !v) : void 0;
                    return void 0 !== r ? r : n.attributes || !v ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }
                ,
                Sizzle.escape = function(e) {
                    return (e + "").replace(te, ne)
                }
                ,
                Sizzle.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }
                ,
                Sizzle.uniqueSort = function(e) {
                    var t, i = [], a = 0, r = 0;
                    if (c = !n.detectDuplicates,
                    u = !n.sortStable && e.slice(0),
                    e.sort(M),
                    c) {
                        for (; t = e[r++]; )
                            t === e[r] && (a = i.push(r));
                        for (; a--; )
                            e.splice(i[a], 1)
                    }
                    return u = null,
                    e
                }
                ,
                a = Sizzle.getText = function(e) {
                    var t, n = "", i = 0, r = e.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof e.textContent)
                                return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling)
                                n += a(e)
                        } else if (3 === r || 4 === r)
                            return e.nodeValue
                    } else
                        for (; t = e[i++]; )
                            n += a(t);
                    return n
                }
                ,
                i = Sizzle.selectors = {
                    cacheLength: 50,
                    createPseudo: markFunction,
                    match: Y,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(Z, ee),
                            e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee),
                            "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(),
                            "nth" === e[1].slice(0, 3) ? (e[3] || Sizzle.error(e[0]),
                            e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                            e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && Sizzle.error(e[0]),
                            e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && W.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                            e[2] = n.slice(0, t)),
                            e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(Z, ee).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            }
                            : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = E[e + " "];
                            return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && E(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, t, n) {
                            return function(i) {
                                var a = Sizzle.attr(i, e);
                                return null == a ? "!=" === t : !t || (a += "",
                                "=" === t ? a === n : "!=" === t ? a !== n : "^=" === t ? n && 0 === a.indexOf(n) : "*=" === t ? n && a.indexOf(n) > -1 : "$=" === t ? n && a.slice(-n.length) === n : "~=" === t ? (" " + a.replace(q, " ") + " ").indexOf(n) > -1 : "|=" === t && (a === n || a.slice(0, n.length + 1) === n + "-"))
                            }
                        },
                        CHILD: function(e, t, n, i, a) {
                            var r = "nth" !== e.slice(0, 3)
                              , s = "last" !== e.slice(-4)
                              , o = "of-type" === t;
                            return 1 === i && 0 === a ? function(e) {
                                return !!e.parentNode
                            }
                            : function(t, n, l) {
                                var d, u, c, p, f, h, v = r !== s ? "nextSibling" : "previousSibling", m = t.parentNode, g = o && t.nodeName.toLowerCase(), y = !l && !o, b = !1;
                                if (m) {
                                    if (r) {
                                        for (; v; ) {
                                            for (p = t; p = p[v]; )
                                                if (o ? p.nodeName.toLowerCase() === g : 1 === p.nodeType)
                                                    return !1;
                                            h = v = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [s ? m.firstChild : m.lastChild],
                                    s && y) {
                                        for (p = m,
                                        c = p[x] || (p[x] = {}),
                                        u = c[p.uniqueID] || (c[p.uniqueID] = {}),
                                        d = u[e] || [],
                                        f = d[0] === T && d[1],
                                        b = f && d[2],
                                        p = f && m.childNodes[f]; p = ++f && p && p[v] || (b = f = 0) || h.pop(); )
                                            if (1 === p.nodeType && ++b && p === t) {
                                                u[e] = [T, f, b];
                                                break
                                            }
                                    } else if (y && (p = t,
                                    c = p[x] || (p[x] = {}),
                                    u = c[p.uniqueID] || (c[p.uniqueID] = {}),
                                    d = u[e] || [],
                                    f = d[0] === T && d[1],
                                    b = f),
                                    !1 === b)
                                        for (; (p = ++f && p && p[v] || (b = f = 0) || h.pop()) && ((o ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++b || (y && (c = p[x] || (p[x] = {}),
                                        u = c[p.uniqueID] || (c[p.uniqueID] = {}),
                                        u[e] = [T, b]),
                                        p !== t)); )
                                            ;
                                    return (b -= a) === i || b % i == 0 && b / i >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, t) {
                            var n, a = i.pseudos[e] || i.setFilters[e.toLowerCase()] || Sizzle.error("unsupported pseudo: " + e);
                            return a[x] ? a(t) : a.length > 1 ? (n = [e, e, "", t],
                            i.setFilters.hasOwnProperty(e.toLowerCase()) ? markFunction(function(e, n) {
                                for (var i, r = a(e, t), s = r.length; s--; )
                                    i = $(e, r[s]),
                                    e[i] = !(n[i] = r[s])
                            }) : function(e) {
                                return a(e, 0, n)
                            }
                            ) : a
                        }
                    },
                    pseudos: {
                        not: markFunction(function(e) {
                            var t = []
                              , n = []
                              , i = o(e.replace(R, "$1"));
                            return i[x] ? markFunction(function(e, t, n, a) {
                                for (var r, s = i(e, null, a, []), o = e.length; o--; )
                                    (r = s[o]) && (e[o] = !(t[o] = r))
                            }) : function(e, a, r) {
                                return t[0] = e,
                                i(t, null, r, n),
                                t[0] = null,
                                !n.pop()
                            }
                        }),
                        has: markFunction(function(e) {
                            return function(t) {
                                return Sizzle(e, t).length > 0
                            }
                        }),
                        contains: markFunction(function(e) {
                            return e = e.replace(Z, ee),
                            function(t) {
                                return (t.textContent || t.innerText || a(t)).indexOf(e) > -1
                            }
                        }),
                        lang: markFunction(function(e) {
                            return G.test(e || "") || Sizzle.error("unsupported lang: " + e),
                            e = e.replace(Z, ee).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                        return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === h
                        },
                        focus: function(e) {
                            return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: createDisabledPseudo(!1),
                        disabled: createDisabledPseudo(!0),
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex,
                            !0 === e.selected
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6)
                                    return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !i.pseudos.empty(e)
                        },
                        header: function(e) {
                            return U.test(e.nodeName)
                        },
                        input: function(e) {
                            return V.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: createPositionalPseudo(function() {
                            return [0]
                        }),
                        last: createPositionalPseudo(function(e, t) {
                            return [t - 1]
                        }),
                        eq: createPositionalPseudo(function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: createPositionalPseudo(function(e, t) {
                            for (var n = 0; n < t; n += 2)
                                e.push(n);
                            return e
                        }),
                        odd: createPositionalPseudo(function(e, t) {
                            for (var n = 1; n < t; n += 2)
                                e.push(n);
                            return e
                        }),
                        lt: createPositionalPseudo(function(e, t, n) {
                            for (var i = n < 0 ? n + t : n; --i >= 0; )
                                e.push(i);
                            return e
                        }),
                        gt: createPositionalPseudo(function(e, t, n) {
                            for (var i = n < 0 ? n + t : n; ++i < t; )
                                e.push(i);
                            return e
                        })
                    }
                },
                i.pseudos.nth = i.pseudos.eq;
                for (t in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                })
                    i.pseudos[t] = createInputPseudo(t);
                for (t in {
                    submit: !0,
                    reset: !0
                })
                    i.pseudos[t] = createButtonPseudo(t);
                return setFilters.prototype = i.filters = i.pseudos,
                i.setFilters = new setFilters,
                s = Sizzle.tokenize = function(e, t) {
                    var n, a, r, s, o, l, d, u = S[e + " "];
                    if (u)
                        return t ? 0 : u.slice(0);
                    for (o = e,
                    l = [],
                    d = i.preFilter; o; ) {
                        n && !(a = B.exec(o)) || (a && (o = o.slice(a[0].length) || o),
                        l.push(r = [])),
                        n = !1,
                        (a = _.exec(o)) && (n = a.shift(),
                        r.push({
                            value: n,
                            type: a[0].replace(R, " ")
                        }),
                        o = o.slice(n.length));
                        for (s in i.filter)
                            !(a = Y[s].exec(o)) || d[s] && !(a = d[s](a)) || (n = a.shift(),
                            r.push({
                                value: n,
                                type: s,
                                matches: a
                            }),
                            o = o.slice(n.length));
                        if (!n)
                            break
                    }
                    return t ? o.length : o ? Sizzle.error(e) : S(e, l).slice(0)
                }
                ,
                o = Sizzle.compile = function(e, t) {
                    var n, i = [], a = [], r = k[e + " "];
                    if (!r) {
                        for (t || (t = s(e)),
                        n = t.length; n--; )
                            r = matcherFromTokens(t[n]),
                            r[x] ? i.push(r) : a.push(r);
                        r = k(e, matcherFromGroupMatchers(a, i)),
                        r.selector = e
                    }
                    return r
                }
                ,
                l = Sizzle.select = function(e, t, n, a) {
                    var r, l, d, u, c, p = "function" == typeof e && e, f = !a && s(e = p.selector || e);
                    if (n = n || [],
                    1 === f.length) {
                        if (l = f[0] = f[0].slice(0),
                        l.length > 2 && "ID" === (d = l[0]).type && 9 === t.nodeType && v && i.relative[l[1].type]) {
                            if (!(t = (i.find.ID(d.matches[0].replace(Z, ee), t) || [])[0]))
                                return n;
                            p && (t = t.parentNode),
                            e = e.slice(l.shift().value.length)
                        }
                        for (r = Y.needsContext.test(e) ? 0 : l.length; r-- && (d = l[r],
                        !i.relative[u = d.type]); )
                            if ((c = i.find[u]) && (a = c(d.matches[0].replace(Z, ee), J.test(l[0].type) && testContext(t.parentNode) || t))) {
                                if (l.splice(r, 1),
                                !(e = a.length && toSelector(l)))
                                    return N.apply(n, a),
                                    n;
                                break
                            }
                    }
                    return (p || o(e, f))(a, t, !v, n, !t || J.test(e) && testContext(t.parentNode) || t),
                    n
                }
                ,
                n.sortStable = x.split("").sort(M).join("") === x,
                n.detectDuplicates = !!c,
                p(),
                n.sortDetached = assert(function(e) {
                    return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
                }),
                assert(function(e) {
                    return e.innerHTML = "<a href='#'></a>",
                    "#" === e.firstChild.getAttribute("href")
                }) || addHandle("type|href|height|width", function(e, t, n) {
                    if (!n)
                        return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }),
                n.attributes && assert(function(e) {
                    return e.innerHTML = "<input/>",
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                }) || addHandle("value", function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase())
                        return e.defaultValue
                }),
                assert(function(e) {
                    return null == e.getAttribute("disabled")
                }) || addHandle(I, function(e, t, n) {
                    var i;
                    if (!n)
                        return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }),
                Sizzle
            }(n);
            x.find = S,
            x.expr = S.selectors,
            x.expr[":"] = x.expr.pseudos,
            x.uniqueSort = x.unique = S.uniqueSort,
            x.text = S.getText,
            x.isXMLDoc = S.isXML,
            x.contains = S.contains,
            x.escapeSelector = S.escape;
            var k = function(e, t, n) {
                for (var i = [], a = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                    if (1 === e.nodeType) {
                        if (a && x(e).is(n))
                            break;
                        i.push(e)
                    }
                return i
            }
              , M = function(e, t) {
                for (var n = []; e; e = e.nextSibling)
                    1 === e.nodeType && e !== t && n.push(e);
                return n
            }
              , z = x.expr.match.needsContext
              , P = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
              , A = /^.[^:#\[\.,]*$/;
            x.filter = function(e, t, n) {
                var i = t[0];
                return n && (e = ":not(" + e + ")"),
                1 === t.length && 1 === i.nodeType ? x.find.matchesSelector(i, e) ? [i] : [] : x.find.matches(e, x.grep(t, function(e) {
                    return 1 === e.nodeType
                }))
            }
            ,
            x.fn.extend({
                find: function(e) {
                    var t, n, i = this.length, a = this;
                    if ("string" != typeof e)
                        return this.pushStack(x(e).filter(function() {
                            for (t = 0; t < i; t++)
                                if (x.contains(a[t], this))
                                    return !0
                        }));
                    for (n = this.pushStack([]),
                    t = 0; t < i; t++)
                        x.find(e, a[t], n);
                    return i > 1 ? x.uniqueSort(n) : n
                },
                filter: function(e) {
                    return this.pushStack(winnow(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(winnow(this, e || [], !0))
                },
                is: function(e) {
                    return !!winnow(this, "string" == typeof e && z.test(e) ? x(e) : e || [], !1).length
                }
            });
            var D, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (x.fn.init = function(e, t, n) {
                var i, a;
                if (!e)
                    return this;
                if (n = n || D,
                "string" == typeof e) {
                    if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : N.exec(e)) || !i[1] && t)
                        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (i[1]) {
                        if (t = t instanceof x ? t[0] : t,
                        x.merge(this, x.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : o, !0)),
                        P.test(i[1]) && x.isPlainObject(t))
                            for (i in t)
                                x.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                        return this
                    }
                    return a = o.getElementById(i[2]),
                    a && (this[0] = a,
                    this.length = 1),
                    this
                }
                return e.nodeType ? (this[0] = e,
                this.length = 1,
                this) : x.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(x) : x.makeArray(e, this)
            }
            ).prototype = x.fn,
            D = x(o);
            var L = /^(?:parents|prev(?:Until|All))/
              , $ = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
            x.fn.extend({
                has: function(e) {
                    var t = x(e, this)
                      , n = t.length;
                    return this.filter(function() {
                        for (var e = 0; e < n; e++)
                            if (x.contains(this, t[e]))
                                return !0
                    })
                },
                closest: function(e, t) {
                    var n, i = 0, a = this.length, r = [], s = "string" != typeof e && x(e);
                    if (!z.test(e))
                        for (; i < a; i++)
                            for (n = this[i]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                                    r.push(n);
                                    break
                                }
                    return this.pushStack(r.length > 1 ? x.uniqueSort(r) : r)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? p.call(x(e), this[0]) : p.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t))))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }),
            x.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function(e) {
                    return k(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return k(e, "parentNode", n)
                },
                next: function(e) {
                    return sibling(e, "nextSibling")
                },
                prev: function(e) {
                    return sibling(e, "previousSibling")
                },
                nextAll: function(e) {
                    return k(e, "nextSibling")
                },
                prevAll: function(e) {
                    return k(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return k(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return k(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return M((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return M(e.firstChild)
                },
                contents: function(e) {
                    return nodeName(e, "iframe") ? e.contentDocument : (nodeName(e, "template") && (e = e.content || e),
                    x.merge([], e.childNodes))
                }
            }, function(e, t) {
                x.fn[e] = function(n, i) {
                    var a = x.map(this, t, n);
                    return "Until" !== e.slice(-5) && (i = n),
                    i && "string" == typeof i && (a = x.filter(i, a)),
                    this.length > 1 && ($[e] || x.uniqueSort(a),
                    L.test(e) && a.reverse()),
                    this.pushStack(a)
                }
            });
            var I = /[^\x20\t\r\n\f]+/g;
            x.Callbacks = function(e) {
                e = "string" == typeof e ? createOptions(e) : x.extend({}, e);
                var t, n, i, a, r = [], s = [], o = -1, l = function() {
                    for (a = a || e.once,
                    i = t = !0; s.length; o = -1)
                        for (n = s.shift(); ++o < r.length; )
                            !1 === r[o].apply(n[0], n[1]) && e.stopOnFalse && (o = r.length,
                            n = !1);
                    e.memory || (n = !1),
                    t = !1,
                    a && (r = n ? [] : "")
                }, d = {
                    add: function() {
                        return r && (n && !t && (o = r.length - 1,
                        s.push(n)),
                        function add(t) {
                            x.each(t, function(t, n) {
                                x.isFunction(n) ? e.unique && d.has(n) || r.push(n) : n && n.length && "string" !== x.type(n) && add(n)
                            })
                        }(arguments),
                        n && !t && l()),
                        this
                    },
                    remove: function() {
                        return x.each(arguments, function(e, t) {
                            for (var n; (n = x.inArray(t, r, n)) > -1; )
                                r.splice(n, 1),
                                n <= o && o--
                        }),
                        this
                    },
                    has: function(e) {
                        return e ? x.inArray(e, r) > -1 : r.length > 0
                    },
                    empty: function() {
                        return r && (r = []),
                        this
                    },
                    disable: function() {
                        return a = s = [],
                        r = n = "",
                        this
                    },
                    disabled: function() {
                        return !r
                    },
                    lock: function() {
                        return a = s = [],
                        n || t || (r = n = ""),
                        this
                    },
                    locked: function() {
                        return !!a
                    },
                    fireWith: function(e, n) {
                        return a || (n = n || [],
                        n = [e, n.slice ? n.slice() : n],
                        s.push(n),
                        t || l()),
                        this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments),
                        this
                    },
                    fired: function() {
                        return !!i
                    }
                };
                return d
            }
            ,
            x.extend({
                Deferred: function(e) {
                    var t = [["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2], ["resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected"]]
                      , i = "pending"
                      , a = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments),
                            this
                        },
                        catch: function(e) {
                            return a.then(null, e)
                        },
                        pipe: function() {
                            var e = arguments;
                            return x.Deferred(function(n) {
                                x.each(t, function(t, i) {
                                    var a = x.isFunction(e[i[4]]) && e[i[4]];
                                    r[i[1]](function() {
                                        var e = a && a.apply(this, arguments);
                                        e && x.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, a ? [e] : arguments)
                                    })
                                }),
                                e = null
                            }).promise()
                        },
                        then: function(e, i, a) {
                            function resolve(e, t, i, a) {
                                return function() {
                                    var s = this
                                      , o = arguments
                                      , l = function() {
                                        var n, l;
                                        if (!(e < r)) {
                                            if ((n = i.apply(s, o)) === t.promise())
                                                throw new TypeError("Thenable self-resolution");
                                            l = n && ("object" == typeof n || "function" == typeof n) && n.then,
                                            x.isFunction(l) ? a ? l.call(n, resolve(r, t, Identity, a), resolve(r, t, Thrower, a)) : (r++,
                                            l.call(n, resolve(r, t, Identity, a), resolve(r, t, Thrower, a), resolve(r, t, Identity, t.notifyWith))) : (i !== Identity && (s = void 0,
                                            o = [n]),
                                            (a || t.resolveWith)(s, o))
                                        }
                                    }
                                      , d = a ? l : function() {
                                        try {
                                            l()
                                        } catch (n) {
                                            x.Deferred.exceptionHook && x.Deferred.exceptionHook(n, d.stackTrace),
                                            e + 1 >= r && (i !== Thrower && (s = void 0,
                                            o = [n]),
                                            t.rejectWith(s, o))
                                        }
                                    }
                                    ;
                                    e ? d() : (x.Deferred.getStackHook && (d.stackTrace = x.Deferred.getStackHook()),
                                    n.setTimeout(d))
                                }
                            }
                            var r = 0;
                            return x.Deferred(function(n) {
                                t[0][3].add(resolve(0, n, x.isFunction(a) ? a : Identity, n.notifyWith)),
                                t[1][3].add(resolve(0, n, x.isFunction(e) ? e : Identity)),
                                t[2][3].add(resolve(0, n, x.isFunction(i) ? i : Thrower))
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? x.extend(e, a) : a
                        }
                    }
                      , r = {};
                    return x.each(t, function(e, n) {
                        var s = n[2]
                          , o = n[5];
                        a[n[1]] = s.add,
                        o && s.add(function() {
                            i = o
                        }, t[3 - e][2].disable, t[0][2].lock),
                        s.add(n[3].fire),
                        r[n[0]] = function() {
                            return r[n[0] + "With"](this === r ? void 0 : this, arguments),
                            this
                        }
                        ,
                        r[n[0] + "With"] = s.fireWith
                    }),
                    a.promise(r),
                    e && e.call(r, r),
                    r
                },
                when: function(e) {
                    var t = arguments.length
                      , n = t
                      , i = Array(n)
                      , a = d.call(arguments)
                      , r = x.Deferred()
                      , s = function(e) {
                        return function(n) {
                            i[e] = this,
                            a[e] = arguments.length > 1 ? d.call(arguments) : n,
                            --t || r.resolveWith(i, a)
                        }
                    };
                    if (t <= 1 && (adoptValue(e, r.done(s(n)).resolve, r.reject, !t),
                    "pending" === r.state() || x.isFunction(a[n] && a[n].then)))
                        return r.then();
                    for (; n--; )
                        adoptValue(a[n], s(n), r.reject);
                    return r.promise()
                }
            });
            var O = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            x.Deferred.exceptionHook = function(e, t) {
                n.console && n.console.warn && e && O.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
            }
            ,
            x.readyException = function(e) {
                n.setTimeout(function() {
                    throw e
                })
            }
            ;
            var H = x.Deferred();
            x.fn.ready = function(e) {
                return H.then(e).catch(function(e) {
                    x.readyException(e)
                }),
                this
            }
            ,
            x.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(e) {
                    (!0 === e ? --x.readyWait : x.isReady) || (x.isReady = !0,
                    !0 !== e && --x.readyWait > 0 || H.resolveWith(o, [x]))
                }
            }),
            x.ready.then = H.then,
            "complete" === o.readyState || "loading" !== o.readyState && !o.documentElement.doScroll ? n.setTimeout(x.ready) : (o.addEventListener("DOMContentLoaded", completed),
            n.addEventListener("load", completed));
            var j = function(e, t, n, i, a, r, s) {
                var o = 0
                  , l = e.length
                  , d = null == n;
                if ("object" === x.type(n)) {
                    a = !0;
                    for (o in n)
                        j(e, t, o, n[o], !0, r, s)
                } else if (void 0 !== i && (a = !0,
                x.isFunction(i) || (s = !0),
                d && (s ? (t.call(e, i),
                t = null) : (d = t,
                t = function(e, t, n) {
                    return d.call(x(e), n)
                }
                )),
                t))
                    for (; o < l; o++)
                        t(e[o], n, s ? i : i.call(e[o], o, t(e[o], n)));
                return a ? e : d ? t.call(e) : l ? t(e[0], n) : r
            }
              , F = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };
            Data.uid = 1,
            Data.prototype = {
                cache: function(e) {
                    var t = e[this.expando];
                    return t || (t = {},
                    F(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))),
                    t
                },
                set: function(e, t, n) {
                    var i, a = this.cache(e);
                    if ("string" == typeof t)
                        a[x.camelCase(t)] = n;
                    else
                        for (i in t)
                            a[x.camelCase(i)] = t[i];
                    return a
                },
                get: function(e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][x.camelCase(t)]
                },
                access: function(e, t, n) {
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
                    void 0 !== n ? n : t)
                },
                remove: function(e, t) {
                    var n, i = e[this.expando];
                    if (void 0 !== i) {
                        if (void 0 !== t) {
                            Array.isArray(t) ? t = t.map(x.camelCase) : (t = x.camelCase(t),
                            t = t in i ? [t] : t.match(I) || []),
                            n = t.length;
                            for (; n--; )
                                delete i[t[n]]
                        }
                        (void 0 === t || x.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                },
                hasData: function(e) {
                    var t = e[this.expando];
                    return void 0 !== t && !x.isEmptyObject(t)
                }
            };
            var q = new Data
              , R = new Data
              , B = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
              , _ = /[A-Z]/g;
            x.extend({
                hasData: function(e) {
                    return R.hasData(e) || q.hasData(e)
                },
                data: function(e, t, n) {
                    return R.access(e, t, n)
                },
                removeData: function(e, t) {
                    R.remove(e, t)
                },
                _data: function(e, t, n) {
                    return q.access(e, t, n)
                },
                _removeData: function(e, t) {
                    q.remove(e, t)
                }
            }),
            x.fn.extend({
                data: function(e, t) {
                    var n, i, a, r = this[0], s = r && r.attributes;
                    if (void 0 === e) {
                        if (this.length && (a = R.get(r),
                        1 === r.nodeType && !q.get(r, "hasDataAttrs"))) {
                            for (n = s.length; n--; )
                                s[n] && (i = s[n].name,
                                0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)),
                                dataAttr(r, i, a[i])));
                            q.set(r, "hasDataAttrs", !0)
                        }
                        return a
                    }
                    return "object" == typeof e ? this.each(function() {
                        R.set(this, e)
                    }) : j(this, function(t) {
                        var n;
                        if (r && void 0 === t) {
                            if (void 0 !== (n = R.get(r, e)))
                                return n;
                            if (void 0 !== (n = dataAttr(r, e)))
                                return n
                        } else
                            this.each(function() {
                                R.set(this, e, t)
                            })
                    }, null, t, arguments.length > 1, null, !0)
                },
                removeData: function(e) {
                    return this.each(function() {
                        R.remove(this, e)
                    })
                }
            }),
            x.extend({
                queue: function(e, t, n) {
                    var i;
                    if (e)
                        return t = (t || "fx") + "queue",
                        i = q.get(e, t),
                        n && (!i || Array.isArray(n) ? i = q.access(e, t, x.makeArray(n)) : i.push(n)),
                        i || []
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = x.queue(e, t)
                      , i = n.length
                      , a = n.shift()
                      , r = x._queueHooks(e, t)
                      , s = function() {
                        x.dequeue(e, t)
                    };
                    "inprogress" === a && (a = n.shift(),
                    i--),
                    a && ("fx" === t && n.unshift("inprogress"),
                    delete r.stop,
                    a.call(e, s, r)),
                    !i && r && r.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return q.get(e, n) || q.access(e, n, {
                        empty: x.Callbacks("once memory").add(function() {
                            q.remove(e, [t + "queue", n])
                        })
                    })
                }
            }),
            x.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e,
                    e = "fx",
                    n--),
                    arguments.length < n ? x.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var n = x.queue(this, e, t);
                        x._queueHooks(this, e),
                        "fx" === e && "inprogress" !== n[0] && x.dequeue(this, e)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        x.dequeue(this, e)
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n, i = 1, a = x.Deferred(), r = this, s = this.length, o = function() {
                        --i || a.resolveWith(r, [r])
                    };
                    for ("string" != typeof e && (t = e,
                    e = void 0),
                    e = e || "fx"; s--; )
                        (n = q.get(r[s], e + "queueHooks")) && n.empty && (i++,
                        n.empty.add(o));
                    return o(),
                    a.promise(t)
                }
            });
            var X = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
              , W = new RegExp("^(?:([+-])=|)(" + X + ")([a-z%]*)$","i")
              , G = ["Top", "Right", "Bottom", "Left"]
              , Y = function(e, t) {
                return e = t || e,
                "none" === e.style.display || "" === e.style.display && x.contains(e.ownerDocument, e) && "none" === x.css(e, "display")
            }
              , V = function(e, t, n, i) {
                var a, r, s = {};
                for (r in t)
                    s[r] = e.style[r],
                    e.style[r] = t[r];
                a = n.apply(e, i || []);
                for (r in t)
                    e.style[r] = s[r];
                return a
            }
              , U = {};
            x.fn.extend({
                show: function() {
                    return showHide(this, !0)
                },
                hide: function() {
                    return showHide(this)
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                        Y(this) ? x(this).show() : x(this).hide()
                    })
                }
            });
            var K = /^(?:checkbox|radio)$/i
              , Q = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
              , J = /^$|\/(?:java|ecma)script/i
              , Z = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
            Z.optgroup = Z.option,
            Z.tbody = Z.tfoot = Z.colgroup = Z.caption = Z.thead,
            Z.th = Z.td;
            var ee = /<|&#?\w+;/;
            !function() {
                var e = o.createDocumentFragment()
                  , t = e.appendChild(o.createElement("div"))
                  , n = o.createElement("input");
                n.setAttribute("type", "radio"),
                n.setAttribute("checked", "checked"),
                n.setAttribute("name", "t"),
                t.appendChild(n),
                y.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
                t.innerHTML = "<textarea>x</textarea>",
                y.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
            }();
            var te = o.documentElement
              , ne = /^key/
              , ie = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
              , ae = /^([^.]*)(?:\.(.+)|)/;
            x.event = {
                global: {},
                add: function(e, t, n, i, a) {
                    var r, s, o, l, d, u, c, p, f, h, v, m = q.get(e);
                    if (m)
                        for (n.handler && (r = n,
                        n = r.handler,
                        a = r.selector),
                        a && x.find.matchesSelector(te, a),
                        n.guid || (n.guid = x.guid++),
                        (l = m.events) || (l = m.events = {}),
                        (s = m.handle) || (s = m.handle = function(t) {
                            return void 0 !== x && x.event.triggered !== t.type ? x.event.dispatch.apply(e, arguments) : void 0
                        }
                        ),
                        t = (t || "").match(I) || [""],
                        d = t.length; d--; )
                            o = ae.exec(t[d]) || [],
                            f = v = o[1],
                            h = (o[2] || "").split(".").sort(),
                            f && (c = x.event.special[f] || {},
                            f = (a ? c.delegateType : c.bindType) || f,
                            c = x.event.special[f] || {},
                            u = x.extend({
                                type: f,
                                origType: v,
                                data: i,
                                handler: n,
                                guid: n.guid,
                                selector: a,
                                needsContext: a && x.expr.match.needsContext.test(a),
                                namespace: h.join(".")
                            }, r),
                            (p = l[f]) || (p = l[f] = [],
                            p.delegateCount = 0,
                            c.setup && !1 !== c.setup.call(e, i, h, s) || e.addEventListener && e.addEventListener(f, s)),
                            c.add && (c.add.call(e, u),
                            u.handler.guid || (u.handler.guid = n.guid)),
                            a ? p.splice(p.delegateCount++, 0, u) : p.push(u),
                            x.event.global[f] = !0)
                },
                remove: function(e, t, n, i, a) {
                    var r, s, o, l, d, u, c, p, f, h, v, m = q.hasData(e) && q.get(e);
                    if (m && (l = m.events)) {
                        for (t = (t || "").match(I) || [""],
                        d = t.length; d--; )
                            if (o = ae.exec(t[d]) || [],
                            f = v = o[1],
                            h = (o[2] || "").split(".").sort(),
                            f) {
                                for (c = x.event.special[f] || {},
                                f = (i ? c.delegateType : c.bindType) || f,
                                p = l[f] || [],
                                o = o[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                s = r = p.length; r--; )
                                    u = p[r],
                                    !a && v !== u.origType || n && n.guid !== u.guid || o && !o.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(r, 1),
                                    u.selector && p.delegateCount--,
                                    c.remove && c.remove.call(e, u));
                                s && !p.length && (c.teardown && !1 !== c.teardown.call(e, h, m.handle) || x.removeEvent(e, f, m.handle),
                                delete l[f])
                            } else
                                for (f in l)
                                    x.event.remove(e, f + t[d], n, i, !0);
                        x.isEmptyObject(l) && q.remove(e, "handle events")
                    }
                },
                dispatch: function(e) {
                    var t, n, i, a, r, s, o = x.event.fix(e), l = new Array(arguments.length), d = (q.get(this, "events") || {})[o.type] || [], u = x.event.special[o.type] || {};
                    for (l[0] = o,
                    t = 1; t < arguments.length; t++)
                        l[t] = arguments[t];
                    if (o.delegateTarget = this,
                    !u.preDispatch || !1 !== u.preDispatch.call(this, o)) {
                        for (s = x.event.handlers.call(this, o, d),
                        t = 0; (a = s[t++]) && !o.isPropagationStopped(); )
                            for (o.currentTarget = a.elem,
                            n = 0; (r = a.handlers[n++]) && !o.isImmediatePropagationStopped(); )
                                o.rnamespace && !o.rnamespace.test(r.namespace) || (o.handleObj = r,
                                o.data = r.data,
                                void 0 !== (i = ((x.event.special[r.origType] || {}).handle || r.handler).apply(a.elem, l)) && !1 === (o.result = i) && (o.preventDefault(),
                                o.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, o),
                        o.result
                    }
                },
                handlers: function(e, t) {
                    var n, i, a, r, s, o = [], l = t.delegateCount, d = e.target;
                    if (l && d.nodeType && !("click" === e.type && e.button >= 1))
                        for (; d !== this; d = d.parentNode || this)
                            if (1 === d.nodeType && ("click" !== e.type || !0 !== d.disabled)) {
                                for (r = [],
                                s = {},
                                n = 0; n < l; n++)
                                    i = t[n],
                                    a = i.selector + " ",
                                    void 0 === s[a] && (s[a] = i.needsContext ? x(a, this).index(d) > -1 : x.find(a, this, null, [d]).length),
                                    s[a] && r.push(i);
                                r.length && o.push({
                                    elem: d,
                                    handlers: r
                                })
                            }
                    return d = this,
                    l < t.length && o.push({
                        elem: d,
                        handlers: t.slice(l)
                    }),
                    o
                },
                addProp: function(e, t) {
                    Object.defineProperty(x.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: x.isFunction(t) ? function() {
                            if (this.originalEvent)
                                return t(this.originalEvent)
                        }
                        : function() {
                            if (this.originalEvent)
                                return this.originalEvent[e]
                        }
                        ,
                        set: function(t) {
                            Object.defineProperty(this, e, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: t
                            })
                        }
                    })
                },
                fix: function(e) {
                    return e[x.expando] ? e : new x.Event(e)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            if (this !== safeActiveElement() && this.focus)
                                return this.focus(),
                                !1
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            if (this === safeActiveElement() && this.blur)
                                return this.blur(),
                                !1
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            if ("checkbox" === this.type && this.click && nodeName(this, "input"))
                                return this.click(),
                                !1
                        },
                        _default: function(e) {
                            return nodeName(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            },
            x.removeEvent = function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }
            ,
            x.Event = function(e, t) {
                if (!(this instanceof x.Event))
                    return new x.Event(e,t);
                e && e.type ? (this.originalEvent = e,
                this.type = e.type,
                this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? returnTrue : returnFalse,
                this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
                this.currentTarget = e.currentTarget,
                this.relatedTarget = e.relatedTarget) : this.type = e,
                t && x.extend(this, t),
                this.timeStamp = e && e.timeStamp || x.now(),
                this[x.expando] = !0
            }
            ,
            x.Event.prototype = {
                constructor: x.Event,
                isDefaultPrevented: returnFalse,
                isPropagationStopped: returnFalse,
                isImmediatePropagationStopped: returnFalse,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = returnTrue,
                    e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = returnTrue,
                    e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = returnTrue,
                    e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation()
                }
            },
            x.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function(e) {
                    var t = e.button;
                    return null == e.which && ne.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ie.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                }
            }, x.event.addProp),
            x.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(e, t) {
                x.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, i = this, a = e.relatedTarget, r = e.handleObj;
                        return a && (a === i || x.contains(i, a)) || (e.type = r.origType,
                        n = r.handler.apply(this, arguments),
                        e.type = t),
                        n
                    }
                }
            }),
            x.fn.extend({
                on: function(e, t, n, i) {
                    return on(this, e, t, n, i)
                },
                one: function(e, t, n, i) {
                    return on(this, e, t, n, i, 1)
                },
                off: function(e, t, n) {
                    var i, a;
                    if (e && e.preventDefault && e.handleObj)
                        return i = e.handleObj,
                        x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                        this;
                    if ("object" == typeof e) {
                        for (a in e)
                            this.off(a, t, e[a]);
                        return this
                    }
                    return !1 !== t && "function" != typeof t || (n = t,
                    t = void 0),
                    !1 === n && (n = returnFalse),
                    this.each(function() {
                        x.event.remove(this, e, n, t)
                    })
                }
            });
            var re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
              , se = /<script|<style|<link/i
              , oe = /checked\s*(?:[^=]|=\s*.checked.)/i
              , le = /^true\/(.*)/
              , de = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            x.extend({
                htmlPrefilter: function(e) {
                    return e.replace(re, "<$1></$2>")
                },
                clone: function(e, t, n) {
                    var i, a, r, s, o = e.cloneNode(!0), l = x.contains(e.ownerDocument, e);
                    if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
                        for (s = getAll(o),
                        r = getAll(e),
                        i = 0,
                        a = r.length; i < a; i++)
                            fixInput(r[i], s[i]);
                    if (t)
                        if (n)
                            for (r = r || getAll(e),
                            s = s || getAll(o),
                            i = 0,
                            a = r.length; i < a; i++)
                                cloneCopyEvent(r[i], s[i]);
                        else
                            cloneCopyEvent(e, o);
                    return s = getAll(o, "script"),
                    s.length > 0 && setGlobalEval(s, !l && getAll(e, "script")),
                    o
                },
                cleanData: function(e) {
                    for (var t, n, i, a = x.event.special, r = 0; void 0 !== (n = e[r]); r++)
                        if (F(n)) {
                            if (t = n[q.expando]) {
                                if (t.events)
                                    for (i in t.events)
                                        a[i] ? x.event.remove(n, i) : x.removeEvent(n, i, t.handle);
                                n[q.expando] = void 0
                            }
                            n[R.expando] && (n[R.expando] = void 0)
                        }
                }
            }),
            x.fn.extend({
                detach: function(e) {
                    return remove(this, e, !0)
                },
                remove: function(e) {
                    return remove(this, e)
                },
                text: function(e) {
                    return j(this, function(e) {
                        return void 0 === e ? x.text(this) : this.empty().each(function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        })
                    }, null, e, arguments.length)
                },
                append: function() {
                    return domManip(this, arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            manipulationTarget(this, e).appendChild(e)
                        }
                    })
                },
                prepend: function() {
                    return domManip(this, arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = manipulationTarget(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function() {
                    return domManip(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function() {
                    return domManip(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++)
                        1 === e.nodeType && (x.cleanData(getAll(e, !1)),
                        e.textContent = "");
                    return this
                },
                clone: function(e, t) {
                    return e = null != e && e,
                    t = null == t ? e : t,
                    this.map(function() {
                        return x.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return j(this, function(e) {
                        var t = this[0] || {}
                          , n = 0
                          , i = this.length;
                        if (void 0 === e && 1 === t.nodeType)
                            return t.innerHTML;
                        if ("string" == typeof e && !se.test(e) && !Z[(Q.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = x.htmlPrefilter(e);
                            try {
                                for (; n < i; n++)
                                    t = this[n] || {},
                                    1 === t.nodeType && (x.cleanData(getAll(t, !1)),
                                    t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = [];
                    return domManip(this, arguments, function(t) {
                        var n = this.parentNode;
                        x.inArray(this, e) < 0 && (x.cleanData(getAll(this)),
                        n && n.replaceChild(t, this))
                    }, e)
                }
            }),
            x.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, t) {
                x.fn[e] = function(e) {
                    for (var n, i = [], a = x(e), r = a.length - 1, s = 0; s <= r; s++)
                        n = s === r ? this : this.clone(!0),
                        x(a[s])[t](n),
                        c.apply(i, n.get());
                    return this.pushStack(i)
                }
            });
            var ue = /^margin/
              , ce = new RegExp("^(" + X + ")(?!px)[a-z%]+$","i")
              , pe = function(e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = n),
                t.getComputedStyle(e)
            };
            !function() {
                function computeStyleTests() {
                    if (s) {
                        s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                        s.innerHTML = "",
                        te.appendChild(r);
                        var o = n.getComputedStyle(s);
                        e = "1%" !== o.top,
                        a = "2px" === o.marginLeft,
                        t = "4px" === o.width,
                        s.style.marginRight = "50%",
                        i = "4px" === o.marginRight,
                        te.removeChild(r),
                        s = null
                    }
                }
                var e, t, i, a, r = o.createElement("div"), s = o.createElement("div");
                s.style && (s.style.backgroundClip = "content-box",
                s.cloneNode(!0).style.backgroundClip = "",
                y.clearCloneStyle = "content-box" === s.style.backgroundClip,
                r.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
                r.appendChild(s),
                x.extend(y, {
                    pixelPosition: function() {
                        return computeStyleTests(),
                        e
                    },
                    boxSizingReliable: function() {
                        return computeStyleTests(),
                        t
                    },
                    pixelMarginRight: function() {
                        return computeStyleTests(),
                        i
                    },
                    reliableMarginLeft: function() {
                        return computeStyleTests(),
                        a
                    }
                }))
            }();
            var fe = /^(none|table(?!-c[ea]).+)/
              , he = /^--/
              , ve = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }
              , me = {
                letterSpacing: "0",
                fontWeight: "400"
            }
              , ge = ["Webkit", "Moz", "ms"]
              , ye = o.createElement("div").style;
            x.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = curCSS(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    float: "cssFloat"
                },
                style: function(e, t, n, i) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var a, r, s, o = x.camelCase(t), l = he.test(t), d = e.style;
                        if (l || (t = finalPropName(o)),
                        s = x.cssHooks[t] || x.cssHooks[o],
                        void 0 === n)
                            return s && "get"in s && void 0 !== (a = s.get(e, !1, i)) ? a : d[t];
                        r = typeof n,
                        "string" === r && (a = W.exec(n)) && a[1] && (n = adjustCSS(e, t, a),
                        r = "number"),
                        null != n && n === n && ("number" === r && (n += a && a[3] || (x.cssNumber[o] ? "" : "px")),
                        y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (d[t] = "inherit"),
                        s && "set"in s && void 0 === (n = s.set(e, n, i)) || (l ? d.setProperty(t, n) : d[t] = n))
                    }
                },
                css: function(e, t, n, i) {
                    var a, r, s, o = x.camelCase(t);
                    return he.test(t) || (t = finalPropName(o)),
                    s = x.cssHooks[t] || x.cssHooks[o],
                    s && "get"in s && (a = s.get(e, !0, n)),
                    void 0 === a && (a = curCSS(e, t, i)),
                    "normal" === a && t in me && (a = me[t]),
                    "" === n || n ? (r = parseFloat(a),
                    !0 === n || isFinite(r) ? r || 0 : a) : a
                }
            }),
            x.each(["height", "width"], function(e, t) {
                x.cssHooks[t] = {
                    get: function(e, n, i) {
                        if (n)
                            return !fe.test(x.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? getWidthOrHeight(e, t, i) : V(e, ve, function() {
                                return getWidthOrHeight(e, t, i)
                            })
                    },
                    set: function(e, n, i) {
                        var a, r = i && pe(e), s = i && augmentWidthOrHeight(e, t, i, "border-box" === x.css(e, "boxSizing", !1, r), r);
                        return s && (a = W.exec(n)) && "px" !== (a[3] || "px") && (e.style[t] = n,
                        n = x.css(e, t)),
                        setPositiveNumber(e, n, s)
                    }
                }
            }),
            x.cssHooks.marginLeft = addGetHookIf(y.reliableMarginLeft, function(e, t) {
                if (t)
                    return (parseFloat(curCSS(e, "marginLeft")) || e.getBoundingClientRect().left - V(e, {
                        marginLeft: 0
                    }, function() {
                        return e.getBoundingClientRect().left
                    })) + "px"
            }),
            x.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(e, t) {
                x.cssHooks[e + t] = {
                    expand: function(n) {
                        for (var i = 0, a = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                            a[e + G[i] + t] = r[i] || r[i - 2] || r[0];
                        return a
                    }
                },
                ue.test(e) || (x.cssHooks[e + t].set = setPositiveNumber)
            }),
            x.fn.extend({
                css: function(e, t) {
                    return j(this, function(e, t, n) {
                        var i, a, r = {}, s = 0;
                        if (Array.isArray(t)) {
                            for (i = pe(e),
                            a = t.length; s < a; s++)
                                r[t[s]] = x.css(e, t[s], !1, i);
                            return r
                        }
                        return void 0 !== n ? x.style(e, t, n) : x.css(e, t)
                    }, e, t, arguments.length > 1)
                }
            }),
            x.Tween = Tween,
            Tween.prototype = {
                constructor: Tween,
                init: function(e, t, n, i, a, r) {
                    this.elem = e,
                    this.prop = n,
                    this.easing = a || x.easing._default,
                    this.options = t,
                    this.start = this.now = this.cur(),
                    this.end = i,
                    this.unit = r || (x.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = Tween.propHooks[this.prop];
                    return e && e.get ? e.get(this) : Tween.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = Tween.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                    this.now = (this.end - this.start) * t + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : Tween.propHooks._default.set(this),
                    this
                }
            },
            Tween.prototype.init.prototype = Tween.prototype,
            Tween.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = x.css(e.elem, e.prop, ""),
                        t && "auto" !== t ? t : 0)
                    },
                    set: function(e) {
                        x.fx.step[e.prop] ? x.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[x.cssProps[e.prop]] && !x.cssHooks[e.prop] ? e.elem[e.prop] = e.now : x.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            },
            Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            },
            x.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            },
            x.fx = Tween.prototype.init,
            x.fx.step = {};
            var be, xe, we = /^(?:toggle|show|hide)$/, Te = /queueHooks$/;
            x.Animation = x.extend(Animation, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return adjustCSS(n.elem, e, W.exec(t), n),
                        n
                    }
                    ]
                },
                tweener: function(e, t) {
                    x.isFunction(e) ? (t = e,
                    e = ["*"]) : e = e.match(I);
                    for (var n, i = 0, a = e.length; i < a; i++)
                        n = e[i],
                        Animation.tweeners[n] = Animation.tweeners[n] || [],
                        Animation.tweeners[n].unshift(t)
                },
                prefilters: [defaultPrefilter],
                prefilter: function(e, t) {
                    t ? Animation.prefilters.unshift(e) : Animation.prefilters.push(e)
                }
            }),
            x.speed = function(e, t, n) {
                var i = e && "object" == typeof e ? x.extend({}, e) : {
                    complete: n || !n && t || x.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !x.isFunction(t) && t
                };
                return x.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in x.fx.speeds ? i.duration = x.fx.speeds[i.duration] : i.duration = x.fx.speeds._default),
                null != i.queue && !0 !== i.queue || (i.queue = "fx"),
                i.old = i.complete,
                i.complete = function() {
                    x.isFunction(i.old) && i.old.call(this),
                    i.queue && x.dequeue(this, i.queue)
                }
                ,
                i
            }
            ,
            x.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter(Y).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function(e, t, n, i) {
                    var a = x.isEmptyObject(e)
                      , r = x.speed(t, n, i)
                      , s = function() {
                        var t = Animation(this, x.extend({}, e), r);
                        (a || q.get(this, "finish")) && t.stop(!0)
                    };
                    return s.finish = s,
                    a || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
                },
                stop: function(e, t, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop,
                        t(n)
                    };
                    return "string" != typeof e && (n = t,
                    t = e,
                    e = void 0),
                    t && !1 !== e && this.queue(e || "fx", []),
                    this.each(function() {
                        var t = !0
                          , a = null != e && e + "queueHooks"
                          , r = x.timers
                          , s = q.get(this);
                        if (a)
                            s[a] && s[a].stop && i(s[a]);
                        else
                            for (a in s)
                                s[a] && s[a].stop && Te.test(a) && i(s[a]);
                        for (a = r.length; a--; )
                            r[a].elem !== this || null != e && r[a].queue !== e || (r[a].anim.stop(n),
                            t = !1,
                            r.splice(a, 1));
                        !t && n || x.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"),
                    this.each(function() {
                        var t, n = q.get(this), i = n[e + "queue"], a = n[e + "queueHooks"], r = x.timers, s = i ? i.length : 0;
                        for (n.finish = !0,
                        x.queue(this, e, []),
                        a && a.stop && a.stop.call(this, !0),
                        t = r.length; t--; )
                            r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0),
                            r.splice(t, 1));
                        for (t = 0; t < s; t++)
                            i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }),
            x.each(["toggle", "show", "hide"], function(e, t) {
                var n = x.fn[t];
                x.fn[t] = function(e, i, a) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(genFx(t, !0), e, i, a)
                }
            }),
            x.each({
                slideDown: genFx("show"),
                slideUp: genFx("hide"),
                slideToggle: genFx("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                x.fn[e] = function(e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }),
            x.timers = [],
            x.fx.tick = function() {
                var e, t = 0, n = x.timers;
                for (be = x.now(); t < n.length; t++)
                    (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || x.fx.stop(),
                be = void 0
            }
            ,
            x.fx.timer = function(e) {
                x.timers.push(e),
                x.fx.start()
            }
            ,
            x.fx.interval = 13,
            x.fx.start = function() {
                xe || (xe = !0,
                schedule())
            }
            ,
            x.fx.stop = function() {
                xe = null
            }
            ,
            x.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            },
            x.fn.delay = function(e, t) {
                return e = x.fx ? x.fx.speeds[e] || e : e,
                t = t || "fx",
                this.queue(t, function(t, i) {
                    var a = n.setTimeout(t, e);
                    i.stop = function() {
                        n.clearTimeout(a)
                    }
                })
            }
            ,
            function() {
                var e = o.createElement("input")
                  , t = o.createElement("select")
                  , n = t.appendChild(o.createElement("option"));
                e.type = "checkbox",
                y.checkOn = "" !== e.value,
                y.optSelected = n.selected,
                e = o.createElement("input"),
                e.value = "t",
                e.type = "radio",
                y.radioValue = "t" === e.value
            }();
            var Ce, Ee = x.expr.attrHandle;
            x.fn.extend({
                attr: function(e, t) {
                    return j(this, x.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        x.removeAttr(this, e)
                    })
                }
            }),
            x.extend({
                attr: function(e, t, n) {
                    var i, a, r = e.nodeType;
                    if (3 !== r && 8 !== r && 2 !== r)
                        return void 0 === e.getAttribute ? x.prop(e, t, n) : (1 === r && x.isXMLDoc(e) || (a = x.attrHooks[t.toLowerCase()] || (x.expr.match.bool.test(t) ? Ce : void 0)),
                        void 0 !== n ? null === n ? void x.removeAttr(e, t) : a && "set"in a && void 0 !== (i = a.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                        n) : a && "get"in a && null !== (i = a.get(e, t)) ? i : (i = x.find.attr(e, t),
                        null == i ? void 0 : i))
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!y.radioValue && "radio" === t && nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t),
                                n && (e.value = n),
                                t
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var n, i = 0, a = t && t.match(I);
                    if (a && 1 === e.nodeType)
                        for (; n = a[i++]; )
                            e.removeAttribute(n)
                }
            }),
            Ce = {
                set: function(e, t, n) {
                    return !1 === t ? x.removeAttr(e, n) : e.setAttribute(n, n),
                    n
                }
            },
            x.each(x.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var n = Ee[t] || x.find.attr;
                Ee[t] = function(e, t, i) {
                    var a, r, s = t.toLowerCase();
                    return i || (r = Ee[s],
                    Ee[s] = a,
                    a = null != n(e, t, i) ? s : null,
                    Ee[s] = r),
                    a
                }
            });
            var Se = /^(?:input|select|textarea|button)$/i
              , ke = /^(?:a|area)$/i;
            x.fn.extend({
                prop: function(e, t) {
                    return j(this, x.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return this.each(function() {
                        delete this[x.propFix[e] || e]
                    })
                }
            }),
            x.extend({
                prop: function(e, t, n) {
                    var i, a, r = e.nodeType;
                    if (3 !== r && 8 !== r && 2 !== r)
                        return 1 === r && x.isXMLDoc(e) || (t = x.propFix[t] || t,
                        a = x.propHooks[t]),
                        void 0 !== n ? a && "set"in a && void 0 !== (i = a.set(e, n, t)) ? i : e[t] = n : a && "get"in a && null !== (i = a.get(e, t)) ? i : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = x.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : Se.test(e.nodeName) || ke.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }),
            y.optSelected || (x.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex,
                    null
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex)
                }
            }),
            x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                x.propFix[this.toLowerCase()] = this
            }),
            x.fn.extend({
                addClass: function(e) {
                    var t, n, i, a, r, s, o, l = 0;
                    if (x.isFunction(e))
                        return this.each(function(t) {
                            x(this).addClass(e.call(this, t, getClass(this)))
                        });
                    if ("string" == typeof e && e)
                        for (t = e.match(I) || []; n = this[l++]; )
                            if (a = getClass(n),
                            i = 1 === n.nodeType && " " + stripAndCollapse(a) + " ") {
                                for (s = 0; r = t[s++]; )
                                    i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                                o = stripAndCollapse(i),
                                a !== o && n.setAttribute("class", o)
                            }
                    return this
                },
                removeClass: function(e) {
                    var t, n, i, a, r, s, o, l = 0;
                    if (x.isFunction(e))
                        return this.each(function(t) {
                            x(this).removeClass(e.call(this, t, getClass(this)))
                        });
                    if (!arguments.length)
                        return this.attr("class", "");
                    if ("string" == typeof e && e)
                        for (t = e.match(I) || []; n = this[l++]; )
                            if (a = getClass(n),
                            i = 1 === n.nodeType && " " + stripAndCollapse(a) + " ") {
                                for (s = 0; r = t[s++]; )
                                    for (; i.indexOf(" " + r + " ") > -1; )
                                        i = i.replace(" " + r + " ", " ");
                                o = stripAndCollapse(i),
                                a !== o && n.setAttribute("class", o)
                            }
                    return this
                },
                toggleClass: function(e, t) {
                    var n = typeof e;
                    return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function(n) {
                        x(this).toggleClass(e.call(this, n, getClass(this), t), t)
                    }) : this.each(function() {
                        var t, i, a, r;
                        if ("string" === n)
                            for (i = 0,
                            a = x(this),
                            r = e.match(I) || []; t = r[i++]; )
                                a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
                        else
                            void 0 !== e && "boolean" !== n || (t = getClass(this),
                            t && q.set(this, "__className__", t),
                            this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : q.get(this, "__className__") || ""))
                    })
                },
                hasClass: function(e) {
                    var t, n, i = 0;
                    for (t = " " + e + " "; n = this[i++]; )
                        if (1 === n.nodeType && (" " + stripAndCollapse(getClass(n)) + " ").indexOf(t) > -1)
                            return !0;
                    return !1
                }
            });
            var Me = /\r/g;
            x.fn.extend({
                val: function(e) {
                    var t, n, i, a = this[0];
                    {
                        if (arguments.length)
                            return i = x.isFunction(e),
                            this.each(function(n) {
                                var a;
                                1 === this.nodeType && (a = i ? e.call(this, n, x(this).val()) : e,
                                null == a ? a = "" : "number" == typeof a ? a += "" : Array.isArray(a) && (a = x.map(a, function(e) {
                                    return null == e ? "" : e + ""
                                })),
                                (t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, a, "value") || (this.value = a))
                            });
                        if (a)
                            return (t = x.valHooks[a.type] || x.valHooks[a.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(a, "value")) ? n : (n = a.value,
                            "string" == typeof n ? n.replace(Me, "") : null == n ? "" : n)
                    }
                }
            }),
            x.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = x.find.attr(e, "value");
                            return null != t ? t : stripAndCollapse(x.text(e))
                        }
                    },
                    select: {
                        get: function(e) {
                            var t, n, i, a = e.options, r = e.selectedIndex, s = "select-one" === e.type, o = s ? null : [], l = s ? r + 1 : a.length;
                            for (i = r < 0 ? l : s ? r : 0; i < l; i++)
                                if (n = a[i],
                                (n.selected || i === r) && !n.disabled && (!n.parentNode.disabled || !nodeName(n.parentNode, "optgroup"))) {
                                    if (t = x(n).val(),
                                    s)
                                        return t;
                                    o.push(t)
                                }
                            return o
                        },
                        set: function(e, t) {
                            for (var n, i, a = e.options, r = x.makeArray(t), s = a.length; s--; )
                                i = a[s],
                                (i.selected = x.inArray(x.valHooks.option.get(i), r) > -1) && (n = !0);
                            return n || (e.selectedIndex = -1),
                            r
                        }
                    }
                }
            }),
            x.each(["radio", "checkbox"], function() {
                x.valHooks[this] = {
                    set: function(e, t) {
                        if (Array.isArray(t))
                            return e.checked = x.inArray(x(e).val(), t) > -1
                    }
                },
                y.checkOn || (x.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                }
                )
            });
            var ze = /^(?:focusinfocus|focusoutblur)$/;
            x.extend(x.event, {
                trigger: function(e, t, i, a) {
                    var r, s, l, d, u, c, p, f = [i || o], h = v.call(e, "type") ? e.type : e, m = v.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (s = l = i = i || o,
                    3 !== i.nodeType && 8 !== i.nodeType && !ze.test(h + x.event.triggered) && (h.indexOf(".") > -1 && (m = h.split("."),
                    h = m.shift(),
                    m.sort()),
                    u = h.indexOf(":") < 0 && "on" + h,
                    e = e[x.expando] ? e : new x.Event(h,"object" == typeof e && e),
                    e.isTrigger = a ? 2 : 3,
                    e.namespace = m.join("."),
                    e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    e.result = void 0,
                    e.target || (e.target = i),
                    t = null == t ? [e] : x.makeArray(t, [e]),
                    p = x.event.special[h] || {},
                    a || !p.trigger || !1 !== p.trigger.apply(i, t))) {
                        if (!a && !p.noBubble && !x.isWindow(i)) {
                            for (d = p.delegateType || h,
                            ze.test(d + h) || (s = s.parentNode); s; s = s.parentNode)
                                f.push(s),
                                l = s;
                            l === (i.ownerDocument || o) && f.push(l.defaultView || l.parentWindow || n)
                        }
                        for (r = 0; (s = f[r++]) && !e.isPropagationStopped(); )
                            e.type = r > 1 ? d : p.bindType || h,
                            c = (q.get(s, "events") || {})[e.type] && q.get(s, "handle"),
                            c && c.apply(s, t),
                            (c = u && s[u]) && c.apply && F(s) && (e.result = c.apply(s, t),
                            !1 === e.result && e.preventDefault());
                        return e.type = h,
                        a || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(f.pop(), t) || !F(i) || u && x.isFunction(i[h]) && !x.isWindow(i) && (l = i[u],
                        l && (i[u] = null),
                        x.event.triggered = h,
                        i[h](),
                        x.event.triggered = void 0,
                        l && (i[u] = l)),
                        e.result
                    }
                },
                simulate: function(e, t, n) {
                    var i = x.extend(new x.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    x.event.trigger(i, null, t)
                }
            }),
            x.fn.extend({
                trigger: function(e, t) {
                    return this.each(function() {
                        x.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    if (n)
                        return x.event.trigger(e, t, n, !0)
                }
            }),
            x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
                x.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }),
            x.fn.extend({
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }),
            y.focusin = "onfocusin"in n,
            y.focusin || x.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                var n = function(e) {
                    x.event.simulate(t, e.target, x.event.fix(e))
                };
                x.event.special[t] = {
                    setup: function() {
                        var i = this.ownerDocument || this
                          , a = q.access(i, t);
                        a || i.addEventListener(e, n, !0),
                        q.access(i, t, (a || 0) + 1)
                    },
                    teardown: function() {
                        var i = this.ownerDocument || this
                          , a = q.access(i, t) - 1;
                        a ? q.access(i, t, a) : (i.removeEventListener(e, n, !0),
                        q.remove(i, t))
                    }
                }
            });
            var Pe = n.location
              , Ae = x.now()
              , De = /\?/;
            x.parseXML = function(e) {
                var t;
                if (!e || "string" != typeof e)
                    return null;
                try {
                    t = (new n.DOMParser).parseFromString(e, "text/xml")
                } catch (e) {
                    t = void 0
                }
                return t && !t.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + e),
                t
            }
            ;
            var Ne = /\[\]$/
              , Le = /\r?\n/g
              , $e = /^(?:submit|button|image|reset|file)$/i
              , Ie = /^(?:input|select|textarea|keygen)/i;
            x.param = function(e, t) {
                var n, i = [], a = function(e, t) {
                    var n = x.isFunction(t) ? t() : t;
                    i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
                if (Array.isArray(e) || e.jquery && !x.isPlainObject(e))
                    x.each(e, function() {
                        a(this.name, this.value)
                    });
                else
                    for (n in e)
                        buildParams(n, e[n], t, a);
                return i.join("&")
            }
            ,
            x.fn.extend({
                serialize: function() {
                    return x.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var e = x.prop(this, "elements");
                        return e ? x.makeArray(e) : this
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !x(this).is(":disabled") && Ie.test(this.nodeName) && !$e.test(e) && (this.checked || !K.test(e))
                    }).map(function(e, t) {
                        var n = x(this).val();
                        return null == n ? null : Array.isArray(n) ? x.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(Le, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(Le, "\r\n")
                        }
                    }).get()
                }
            });
            var Oe = /%20/g
              , He = /#.*$/
              , je = /([?&])_=[^&]*/
              , Fe = /^(.*?):[ \t]*([^\r\n]*)$/gm
              , qe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
              , Re = /^(?:GET|HEAD)$/
              , Be = /^\/\//
              , _e = {}
              , Xe = {}
              , We = "*/".concat("*")
              , Ge = o.createElement("a");
            Ge.href = Pe.href,
            x.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: Pe.href,
                    type: "GET",
                    isLocal: qe.test(Pe.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": We,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": x.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? ajaxExtend(ajaxExtend(e, x.ajaxSettings), t) : ajaxExtend(x.ajaxSettings, e)
                },
                ajaxPrefilter: addToPrefiltersOrTransports(_e),
                ajaxTransport: addToPrefiltersOrTransports(Xe),
                ajax: function(e, t) {
                    function done(e, t, s, o) {
                        var d, p, f, w, T, C = t;
                        u || (u = !0,
                        l && n.clearTimeout(l),
                        i = void 0,
                        r = o || "",
                        E.readyState = e > 0 ? 4 : 0,
                        d = e >= 200 && e < 300 || 304 === e,
                        s && (w = ajaxHandleResponses(h, E, s)),
                        w = ajaxConvert(h, w, E, d),
                        d ? (h.ifModified && (T = E.getResponseHeader("Last-Modified"),
                        T && (x.lastModified[a] = T),
                        (T = E.getResponseHeader("etag")) && (x.etag[a] = T)),
                        204 === e || "HEAD" === h.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = w.state,
                        p = w.data,
                        f = w.error,
                        d = !f)) : (f = C,
                        !e && C || (C = "error",
                        e < 0 && (e = 0))),
                        E.status = e,
                        E.statusText = (t || C) + "",
                        d ? g.resolveWith(v, [p, C, E]) : g.rejectWith(v, [E, C, f]),
                        E.statusCode(b),
                        b = void 0,
                        c && m.trigger(d ? "ajaxSuccess" : "ajaxError", [E, h, d ? p : f]),
                        y.fireWith(v, [E, C]),
                        c && (m.trigger("ajaxComplete", [E, h]),
                        --x.active || x.event.trigger("ajaxStop")))
                    }
                    "object" == typeof e && (t = e,
                    e = void 0),
                    t = t || {};
                    var i, a, r, s, l, d, u, c, p, f, h = x.ajaxSetup({}, t), v = h.context || h, m = h.context && (v.nodeType || v.jquery) ? x(v) : x.event, g = x.Deferred(), y = x.Callbacks("once memory"), b = h.statusCode || {}, w = {}, T = {}, C = "canceled", E = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (u) {
                                if (!s)
                                    for (s = {}; t = Fe.exec(r); )
                                        s[t[1].toLowerCase()] = t[2];
                                t = s[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return u ? r : null
                        },
                        setRequestHeader: function(e, t) {
                            return null == u && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e,
                            w[e] = t),
                            this
                        },
                        overrideMimeType: function(e) {
                            return null == u && (h.mimeType = e),
                            this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (u)
                                    E.always(e[E.status]);
                                else
                                    for (t in e)
                                        b[t] = [b[t], e[t]];
                            return this
                        },
                        abort: function(e) {
                            var t = e || C;
                            return i && i.abort(t),
                            done(0, t),
                            this
                        }
                    };
                    if (g.promise(E),
                    h.url = ((e || h.url || Pe.href) + "").replace(Be, Pe.protocol + "//"),
                    h.type = t.method || t.type || h.method || h.type,
                    h.dataTypes = (h.dataType || "*").toLowerCase().match(I) || [""],
                    null == h.crossDomain) {
                        d = o.createElement("a");
                        try {
                            d.href = h.url,
                            d.href = d.href,
                            h.crossDomain = Ge.protocol + "//" + Ge.host != d.protocol + "//" + d.host
                        } catch (e) {
                            h.crossDomain = !0
                        }
                    }
                    if (h.data && h.processData && "string" != typeof h.data && (h.data = x.param(h.data, h.traditional)),
                    inspectPrefiltersOrTransports(_e, h, t, E),
                    u)
                        return E;
                    c = x.event && h.global,
                    c && 0 == x.active++ && x.event.trigger("ajaxStart"),
                    h.type = h.type.toUpperCase(),
                    h.hasContent = !Re.test(h.type),
                    a = h.url.replace(He, ""),
                    h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Oe, "+")) : (f = h.url.slice(a.length),
                    h.data && (a += (De.test(a) ? "&" : "?") + h.data,
                    delete h.data),
                    !1 === h.cache && (a = a.replace(je, "$1"),
                    f = (De.test(a) ? "&" : "?") + "_=" + Ae++ + f),
                    h.url = a + f),
                    h.ifModified && (x.lastModified[a] && E.setRequestHeader("If-Modified-Since", x.lastModified[a]),
                    x.etag[a] && E.setRequestHeader("If-None-Match", x.etag[a])),
                    (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && E.setRequestHeader("Content-Type", h.contentType),
                    E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + We + "; q=0.01" : "") : h.accepts["*"]);
                    for (p in h.headers)
                        E.setRequestHeader(p, h.headers[p]);
                    if (h.beforeSend && (!1 === h.beforeSend.call(v, E, h) || u))
                        return E.abort();
                    if (C = "abort",
                    y.add(h.complete),
                    E.done(h.success),
                    E.fail(h.error),
                    i = inspectPrefiltersOrTransports(Xe, h, t, E)) {
                        if (E.readyState = 1,
                        c && m.trigger("ajaxSend", [E, h]),
                        u)
                            return E;
                        h.async && h.timeout > 0 && (l = n.setTimeout(function() {
                            E.abort("timeout")
                        }, h.timeout));
                        try {
                            u = !1,
                            i.send(w, done)
                        } catch (e) {
                            if (u)
                                throw e;
                            done(-1, e)
                        }
                    } else
                        done(-1, "No Transport");
                    return E
                },
                getJSON: function(e, t, n) {
                    return x.get(e, t, n, "json")
                },
                getScript: function(e, t) {
                    return x.get(e, void 0, t, "script")
                }
            }),
            x.each(["get", "post"], function(e, t) {
                x[t] = function(e, n, i, a) {
                    return x.isFunction(n) && (a = a || i,
                    i = n,
                    n = void 0),
                    x.ajax(x.extend({
                        url: e,
                        type: t,
                        dataType: a,
                        data: n,
                        success: i
                    }, x.isPlainObject(e) && e))
                }
            }),
            x._evalUrl = function(e) {
                return x.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    throws: !0
                })
            }
            ,
            x.fn.extend({
                wrapAll: function(e) {
                    var t;
                    return this[0] && (x.isFunction(e) && (e = e.call(this[0])),
                    t = x(e, this[0].ownerDocument).eq(0).clone(!0),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t.map(function() {
                        for (var e = this; e.firstElementChild; )
                            e = e.firstElementChild;
                        return e
                    }).append(this)),
                    this
                },
                wrapInner: function(e) {
                    return x.isFunction(e) ? this.each(function(t) {
                        x(this).wrapInner(e.call(this, t))
                    }) : this.each(function() {
                        var t = x(this)
                          , n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function(e) {
                    var t = x.isFunction(e);
                    return this.each(function(n) {
                        x(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function(e) {
                    return this.parent(e).not("body").each(function() {
                        x(this).replaceWith(this.childNodes)
                    }),
                    this
                }
            }),
            x.expr.pseudos.hidden = function(e) {
                return !x.expr.pseudos.visible(e)
            }
            ,
            x.expr.pseudos.visible = function(e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            }
            ,
            x.ajaxSettings.xhr = function() {
                try {
                    return new n.XMLHttpRequest
                } catch (e) {}
            }
            ;
            var Ye = {
                0: 200,
                1223: 204
            }
              , Ve = x.ajaxSettings.xhr();
            y.cors = !!Ve && "withCredentials"in Ve,
            y.ajax = Ve = !!Ve,
            x.ajaxTransport(function(e) {
                var t, i;
                if (y.cors || Ve && !e.crossDomain)
                    return {
                        send: function(a, r) {
                            var s, o = e.xhr();
                            if (o.open(e.type, e.url, e.async, e.username, e.password),
                            e.xhrFields)
                                for (s in e.xhrFields)
                                    o[s] = e.xhrFields[s];
                            e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType),
                            e.crossDomain || a["X-Requested-With"] || (a["X-Requested-With"] = "XMLHttpRequest");
                            for (s in a)
                                o.setRequestHeader(s, a[s]);
                            t = function(e) {
                                return function() {
                                    t && (t = i = o.onload = o.onerror = o.onabort = o.onreadystatechange = null,
                                    "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? r(0, "error") : r(o.status, o.statusText) : r(Ye[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {
                                        binary: o.response
                                    } : {
                                        text: o.responseText
                                    }, o.getAllResponseHeaders()))
                                }
                            }
                            ,
                            o.onload = t(),
                            i = o.onerror = t("error"),
                            void 0 !== o.onabort ? o.onabort = i : o.onreadystatechange = function() {
                                4 === o.readyState && n.setTimeout(function() {
                                    t && i()
                                })
                            }
                            ,
                            t = t("abort");
                            try {
                                o.send(e.hasContent && e.data || null)
                            } catch (e) {
                                if (t)
                                    throw e
                            }
                        },
                        abort: function() {
                            t && t()
                        }
                    }
            }),
            x.ajaxPrefilter(function(e) {
                e.crossDomain && (e.contents.script = !1)
            }),
            x.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return x.globalEval(e),
                        e
                    }
                }
            }),
            x.ajaxPrefilter("script", function(e) {
                void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET")
            }),
            x.ajaxTransport("script", function(e) {
                if (e.crossDomain) {
                    var t, n;
                    return {
                        send: function(i, a) {
                            t = x("<script>").prop({
                                charset: e.scriptCharset,
                                src: e.url
                            }).on("load error", n = function(e) {
                                t.remove(),
                                n = null,
                                e && a("error" === e.type ? 404 : 200, e.type)
                            }
                            ),
                            o.head.appendChild(t[0])
                        },
                        abort: function() {
                            n && n()
                        }
                    }
                }
            });
            var Ue = []
              , Ke = /(=)\?(?=&|$)|\?\?/;
            x.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = Ue.pop() || x.expando + "_" + Ae++;
                    return this[e] = !0,
                    e
                }
            }),
            x.ajaxPrefilter("json jsonp", function(e, t, i) {
                var a, r, s, o = !1 !== e.jsonp && (Ke.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ke.test(e.data) && "data");
                if (o || "jsonp" === e.dataTypes[0])
                    return a = e.jsonpCallback = x.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                    o ? e[o] = e[o].replace(Ke, "$1" + a) : !1 !== e.jsonp && (e.url += (De.test(e.url) ? "&" : "?") + e.jsonp + "=" + a),
                    e.converters["script json"] = function() {
                        return s || x.error(a + " was not called"),
                        s[0]
                    }
                    ,
                    e.dataTypes[0] = "json",
                    r = n[a],
                    n[a] = function() {
                        s = arguments
                    }
                    ,
                    i.always(function() {
                        void 0 === r ? x(n).removeProp(a) : n[a] = r,
                        e[a] && (e.jsonpCallback = t.jsonpCallback,
                        Ue.push(a)),
                        s && x.isFunction(r) && r(s[0]),
                        s = r = void 0
                    }),
                    "script"
            }),
            y.createHTMLDocument = function() {
                var e = o.implementation.createHTMLDocument("").body;
                return e.innerHTML = "<form></form><form></form>",
                2 === e.childNodes.length
            }(),
            x.parseHTML = function(e, t, n) {
                if ("string" != typeof e)
                    return [];
                "boolean" == typeof t && (n = t,
                t = !1);
                var i, a, r;
                return t || (y.createHTMLDocument ? (t = o.implementation.createHTMLDocument(""),
                i = t.createElement("base"),
                i.href = o.location.href,
                t.head.appendChild(i)) : t = o),
                a = P.exec(e),
                r = !n && [],
                a ? [t.createElement(a[1])] : (a = buildFragment([e], t, r),
                r && r.length && x(r).remove(),
                x.merge([], a.childNodes))
            }
            ,
            x.fn.load = function(e, t, n) {
                var i, a, r, s = this, o = e.indexOf(" ");
                return o > -1 && (i = stripAndCollapse(e.slice(o)),
                e = e.slice(0, o)),
                x.isFunction(t) ? (n = t,
                t = void 0) : t && "object" == typeof t && (a = "POST"),
                s.length > 0 && x.ajax({
                    url: e,
                    type: a || "GET",
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    r = arguments,
                    s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
                }).always(n && function(e, t) {
                    s.each(function() {
                        n.apply(this, r || [e.responseText, t, e])
                    })
                }
                ),
                this
            }
            ,
            x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                x.fn[t] = function(e) {
                    return this.on(t, e)
                }
            }),
            x.expr.pseudos.animated = function(e) {
                return x.grep(x.timers, function(t) {
                    return e === t.elem
                }).length
            }
            ,
            x.offset = {
                setOffset: function(e, t, n) {
                    var i, a, r, s, o, l, d, u = x.css(e, "position"), c = x(e), p = {};
                    "static" === u && (e.style.position = "relative"),
                    o = c.offset(),
                    r = x.css(e, "top"),
                    l = x.css(e, "left"),
                    d = ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1,
                    d ? (i = c.position(),
                    s = i.top,
                    a = i.left) : (s = parseFloat(r) || 0,
                    a = parseFloat(l) || 0),
                    x.isFunction(t) && (t = t.call(e, n, x.extend({}, o))),
                    null != t.top && (p.top = t.top - o.top + s),
                    null != t.left && (p.left = t.left - o.left + a),
                    "using"in t ? t.using.call(e, p) : c.css(p)
                }
            },
            x.fn.extend({
                offset: function(e) {
                    if (arguments.length)
                        return void 0 === e ? this : this.each(function(t) {
                            x.offset.setOffset(this, e, t)
                        });
                    var t, n, i, a, r = this[0];
                    if (r)
                        return r.getClientRects().length ? (i = r.getBoundingClientRect(),
                        t = r.ownerDocument,
                        n = t.documentElement,
                        a = t.defaultView,
                        {
                            top: i.top + a.pageYOffset - n.clientTop,
                            left: i.left + a.pageXOffset - n.clientLeft
                        }) : {
                            top: 0,
                            left: 0
                        }
                },
                position: function() {
                    if (this[0]) {
                        var e, t, n = this[0], i = {
                            top: 0,
                            left: 0
                        };
                        return "fixed" === x.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
                        t = this.offset(),
                        nodeName(e[0], "html") || (i = e.offset()),
                        i = {
                            top: i.top + x.css(e[0], "borderTopWidth", !0),
                            left: i.left + x.css(e[0], "borderLeftWidth", !0)
                        }),
                        {
                            top: t.top - i.top - x.css(n, "marginTop", !0),
                            left: t.left - i.left - x.css(n, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent; e && "static" === x.css(e, "position"); )
                            e = e.offsetParent;
                        return e || te
                    })
                }
            }),
            x.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(e, t) {
                var n = "pageYOffset" === t;
                x.fn[e] = function(i) {
                    return j(this, function(e, i, a) {
                        var r;
                        if (x.isWindow(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                        void 0 === a)
                            return r ? r[t] : e[i];
                        r ? r.scrollTo(n ? r.pageXOffset : a, n ? a : r.pageYOffset) : e[i] = a
                    }, e, i, arguments.length)
                }
            }),
            x.each(["top", "left"], function(e, t) {
                x.cssHooks[t] = addGetHookIf(y.pixelPosition, function(e, n) {
                    if (n)
                        return n = curCSS(e, t),
                        ce.test(n) ? x(e).position()[t] + "px" : n
                })
            }),
            x.each({
                Height: "height",
                Width: "width"
            }, function(e, t) {
                x.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, function(n, i) {
                    x.fn[i] = function(a, r) {
                        var s = arguments.length && (n || "boolean" != typeof a)
                          , o = n || (!0 === a || !0 === r ? "margin" : "border");
                        return j(this, function(t, n, a) {
                            var r;
                            return x.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement,
                            Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === a ? x.css(t, n, o) : x.style(t, n, a, o)
                        }, t, s ? a : void 0, s)
                    }
                })
            }),
            x.fn.extend({
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, i) {
                    return this.on(t, e, n, i)
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            }),
            x.holdReady = function(e) {
                e ? x.readyWait++ : x.ready(!0)
            }
            ,
            x.isArray = Array.isArray,
            x.parseJSON = JSON.parse,
            x.nodeName = nodeName,
            i = [],
            void 0 !== (a = function() {
                return x
            }
            .apply(t, i)) && (e.exports = a);
            var Qe = n.jQuery
              , Je = n.$;
            return x.noConflict = function(e) {
                return n.$ === x && (n.$ = Je),
                e && n.jQuery === x && (n.jQuery = Qe),
                x
            }
            ,
            r || (n.jQuery = n.$ = x),
            x
        })
    }
});
