import {
    s as B,
    _ as F,
    v as T,
    o as E,
    k as W,
    d as v,
    t as Y,
    l as A
} from "./index.7bc83f92.js";
var C = {
    exports: {}
};
(function(w, D) {
    (function(c, r) {
        w.exports = r()
    })(B, function() {
        var c, r, p = 1e3,
            y = 6e4,
            _ = 36e5,
            b = 864e5,
            O = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
            M = 31536e6,
            x = 2592e6,
            P = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,
            m = {
                years: M,
                months: x,
                days: b,
                hours: _,
                minutes: y,
                seconds: p,
                milliseconds: 1,
                weeks: 6048e5
            },
            g = function(i) {
                return i instanceof z
            },
            f = function(i, s, t) {
                return new z(i, t, s.$l)
            },
            $ = function(i) {
                return r.p(i) + "s"
            },
            H = function(i) {
                return i < 0
            },
            h = function(i) {
                return H(i) ? Math.ceil(i) : Math.floor(i)
            },
            j = function(i) {
                return Math.abs(i)
            },
            l = function(i, s) {
                return i ? H(i) ? {
                    negative: !0,
                    format: "" + j(i) + s
                } : {
                    negative: !1,
                    format: "" + i + s
                } : {
                    negative: !1,
                    format: ""
                }
            },
            z = function() {
                function i(t, n, o) {
                    var e = this;
                    if (this.$d = {}, this.$l = o, t === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), n) return f(t * m[$(n)], this);
                    if (typeof t == "number") return this.$ms = t, this.parseFromMilliseconds(), this;
                    if (typeof t == "object") return Object.keys(t).forEach(function(u) {
                        e.$d[$(u)] = t[u]
                    }), this.calMilliseconds(), this;
                    if (typeof t == "string") {
                        var a = t.match(P);
                        if (a) {
                            var d = a.slice(2).map(function(u) {
                                return u != null ? Number(u) : 0
                            });
                            return this.$d.years = d[0], this.$d.months = d[1], this.$d.weeks = d[2], this.$d.days = d[3], this.$d.hours = d[4], this.$d.minutes = d[5], this.$d.seconds = d[6], this.calMilliseconds(), this
                        }
                    }
                    return this
                }
                var s = i.prototype;
                return s.calMilliseconds = function() {
                    var t = this;
                    this.$ms = Object.keys(this.$d).reduce(function(n, o) {
                        return n + (t.$d[o] || 0) * m[o]
                    }, 0)
                }, s.parseFromMilliseconds = function() {
                    var t = this.$ms;
                    this.$d.years = h(t / M), t %= M, this.$d.months = h(t / x), t %= x, this.$d.days = h(t / b), t %= b, this.$d.hours = h(t / _), t %= _, this.$d.minutes = h(t / y), t %= y, this.$d.seconds = h(t / p), t %= p, this.$d.milliseconds = t
                }, s.toISOString = function() {
                    var t = l(this.$d.years, "Y"),
                        n = l(this.$d.months, "M"),
                        o = +this.$d.days || 0;
                    this.$d.weeks && (o += 7 * this.$d.weeks);
                    var e = l(o, "D"),
                        a = l(this.$d.hours, "H"),
                        d = l(this.$d.minutes, "M"),
                        u = this.$d.seconds || 0;
                    this.$d.milliseconds && (u += this.$d.milliseconds / 1e3);
                    var k = l(u, "S"),
                        I = t.negative || n.negative || e.negative || a.negative || d.negative || k.negative,
                        N = a.format || d.format || k.format ? "T" : "",
                        S = (I ? "-" : "") + "P" + t.format + n.format + e.format + N + a.format + d.format + k.format;
                    return S === "P" || S === "-P" ? "P0D" : S
                }, s.toJSON = function() {
                    return this.toISOString()
                }, s.format = function(t) {
                    var n = t || "YYYY-MM-DDTHH:mm:ss",
                        o = {
                            Y: this.$d.years,
                            YY: r.s(this.$d.years, 2, "0"),
                            YYYY: r.s(this.$d.years, 4, "0"),
                            M: this.$d.months,
                            MM: r.s(this.$d.months, 2, "0"),
                            D: this.$d.days,
                            DD: r.s(this.$d.days, 2, "0"),
                            H: this.$d.hours,
                            HH: r.s(this.$d.hours, 2, "0"),
                            m: this.$d.minutes,
                            mm: r.s(this.$d.minutes, 2, "0"),
                            s: this.$d.seconds,
                            ss: r.s(this.$d.seconds, 2, "0"),
                            SSS: r.s(this.$d.milliseconds, 3, "0")
                        };
                    return n.replace(O, function(e, a) {
                        return a || String(o[e])
                    })
                }, s.as = function(t) {
                    return this.$ms / m[$(t)]
                }, s.get = function(t) {
                    var n = this.$ms,
                        o = $(t);
                    return o === "milliseconds" ? n %= 1e3 : n = o === "weeks" ? h(n / m[o]) : this.$d[o], n === 0 ? 0 : n
                }, s.add = function(t, n, o) {
                    var e;
                    return e = n ? t * m[$(n)] : g(t) ? t.$ms : f(t, this).$ms, f(this.$ms + e * (o ? -1 : 1), this)
                }, s.subtract = function(t, n) {
                    return this.add(t, n, !0)
                }, s.locale = function(t) {
                    var n = this.clone();
                    return n.$l = t, n
                }, s.clone = function() {
                    return f(this.$ms, this)
                }, s.humanize = function(t) {
                    return c().add(this.$ms, "ms").locale(this.$l).fromNow(!t)
                }, s.milliseconds = function() {
                    return this.get("milliseconds")
                }, s.asMilliseconds = function() {
                    return this.as("milliseconds")
                }, s.seconds = function() {
                    return this.get("seconds")
                }, s.asSeconds = function() {
                    return this.as("seconds")
                }, s.minutes = function() {
                    return this.get("minutes")
                }, s.asMinutes = function() {
                    return this.as("minutes")
                }, s.hours = function() {
                    return this.get("hours")
                }, s.asHours = function() {
                    return this.as("hours")
                }, s.days = function() {
                    return this.get("days")
                }, s.asDays = function() {
                    return this.as("days")
                }, s.weeks = function() {
                    return this.get("weeks")
                }, s.asWeeks = function() {
                    return this.as("weeks")
                }, s.months = function() {
                    return this.get("months")
                }, s.asMonths = function() {
                    return this.as("months")
                }, s.years = function() {
                    return this.get("years")
                }, s.asYears = function() {
                    return this.as("years")
                }, i
            }();
        return function(i, s, t) {
            c = t, r = t().$utils(), t.duration = function(e, a) {
                var d = t.locale();
                return f(e, {
                    $l: d
                }, a)
            }, t.isDuration = g;
            var n = s.prototype.add,
                o = s.prototype.subtract;
            s.prototype.add = function(e, a) {
                return g(e) && (e = e.asMilliseconds()), n.bind(this)(e, a)
            }, s.prototype.subtract = function(e, a) {
                return g(e) && (e = e.asMilliseconds()), o.bind(this)(e, a)
            }
        }
    })
})(C);
const G = {
        class: "page-ido"
    },
    J = {
        class: "title"
    },
    R = {
        class: "body wrap"
    },
    U = {
        class: "btn"
    },
    V = {
        __name: "index",
        setup(w) {
            const D = T();
            return (c, r) => (E(), W("div", G, [v("div", {
                class: "list animate__bounceInUp animate__animated",
                onClick: r[0] || (r[0] = p => A(D).push({
                    name: "ido.pmm"
                }))
            }, [v("div", J, Y(c.$t("ido.pmm.title")), 1), v("div", R, Y(c.$t("ido.pmm.body")), 1), v("div", U, Y(c.$t("ido.btn")), 1)])]))
        }
    };
var q = F(V, [
    ["__scopeId", "data-v-713a9510"]
]);
export {
    q as
    default
};