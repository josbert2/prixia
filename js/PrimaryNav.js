/*
 * priority-nav - v1.0.13 | (c) 2018 @gijsroge | MIT license
 * Repository: https://github.com/gijsroge/priority-navigation.git
 * Description: Priority+ pattern navigation that hides menu items if they don't fit on screen.
 * Demo: http://gijsroge.github.io/priority-nav.js/
 */

! function(e, t) {
    "function" == typeof define && define.amd ? define("priorityNav", t(e)) : "object" == typeof exports ? module.exports = t(e) : e.priorityNav = t(e)
}(window || this, function(e) {
    "use strict";
    var i, d, c, s, u, a, l, p = {},
        v = [],
        h = !!document.querySelector && !!e.addEventListener,
        m = {},
        f = 0,
        y = 0,
        w = {
            initClass: "js-priorityNav",
            mainNavWrapper: "nav",
            mainNav: "ul",
            navDropdownClassName: "nav__dropdown",
            navDropdownToggleClassName: "nav__dropdown-toggle",
            navDropdownLabel: "more",
            navDropdownBreakpointLabel: "menu",
            breakPoint: 500,
            throttleDelay: 50,
            offsetPixels: 0,
            count: !0,
            moved: function() {},
            movedBack: function() {}
        },
        S = function(e, t, n) {
            if ("[object Object]" === Object.prototype.toString.call(e))
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(n, e[o], o, e);
            else
                for (var r = 0, i = e.length; r < i; r++) t.call(n, e[r], r, e)
        };
    var o = function(e, t) {
            if (e.classList) e.classList.toggle(t);
            else {
                var n = e.className.split(" "),
                    o = n.indexOf(t);
                0 <= o ? n.splice(o, 1) : n.push(t), e.className = n.join(" ")
            }
        },
        n = function(e) {
            var t, n, o, r, i, a, s, l;
            t = e, n = window.getComputedStyle(t), o = parseFloat(n.paddingLeft) + parseFloat(n.paddingRight), d = t.clientWidth - o, e.querySelector(u).parentNode === e ? e.querySelector(u).offsetWidth : 0, c = q(e) + m.offsetPixels, y = (r = document, i = window, a = r.compatMode && "CSS1Compat" === r.compatMode ? r.documentElement : r.body, s = a.clientWidth, l = a.clientHeight, i.innerWidth && s > i.innerWidth && (s = i.innerWidth, l = i.innerHeight), {
                width: s,
                height: l
            }).width
        };
    p.doesItFit = function(t) {
        var o, r, i, a, e = 0 === t.getAttribute("instance") ? e : m.throttleDelay;
        0, (o = function() {
            var e = t.getAttribute("instance");
            for (n(t); d <= c && 0 < t.querySelector(s).children.length || y < m.breakPoint && 0 < t.querySelector(s).children.length;) p.toDropdown(t, e), n(t), y < m.breakPoint && b(t, e, m.navDropdownBreakpointLabel);
            for (; d >= v[e][v[e].length - 1] && y > m.breakPoint;) p.toMenu(t, e), y > m.breakPoint && b(t, e, m.navDropdownLabel);
            v[e].length < 1 && (t.querySelector(u).classList.remove("show"), b(t, e, m.navDropdownLabel)), t.querySelector(s).children.length < 1 ? (t.classList.add("is-empty"), b(t, e, m.navDropdownBreakpointLabel)) : t.classList.remove("is-empty"), g(t, e)
        }, r = e, function() {
            var e = this,
                t = arguments,
                n = i && !a;
            clearTimeout(a), a = setTimeout(function() {
                a = null, i || o.apply(e, t)
            }, r), n && o.apply(e, t)
        })()
    };
    var g = function(e, t) {
            v[t].length < 1 ? (e.querySelector(a).classList.add("priority-nav-is-hidden"), e.querySelector(a).classList.remove("priority-nav-is-visible"), e.classList.remove("priority-nav-has-dropdown"), e.querySelector(".priority-nav__wrapper").setAttribute("aria-haspopup", "false")) : (e.querySelector(a).classList.add("priority-nav-is-visible"), e.querySelector(a).classList.remove("priority-nav-is-hidden"), e.classList.add("priority-nav-has-dropdown"), e.querySelector(".priority-nav__wrapper").setAttribute("aria-haspopup", "true"))
        },
        r = function(e, t) {
            e.querySelector(a).setAttribute("priorityNav-count", v[t].length)
        },
        b = function(e, t, n) {
            e.querySelector(a).innerHTML = n
        };
    p.toDropdown = function(e, t) {
        e.querySelector(u).firstChild && 0 < e.querySelector(s).children.length ? e.querySelector(u).insertBefore(e.querySelector(s).lastElementChild, e.querySelector(u).firstChild) : 0 < e.querySelector(s).children.length && e.querySelector(u).appendChild(e.querySelector(s).lastElementChild), v[t].push(c), g(e, t), 0 < e.querySelector(s).children.length && m.count && r(e, t), m.moved()
    }, p.toMenu = function(e, t) {
        0 < e.querySelector(u).children.length && e.querySelector(s).appendChild(e.querySelector(u).firstElementChild), v[t].pop(), g(e, t), 0 < e.querySelector(s).children.length && m.count && r(e, t), m.movedBack()
    };
    var q = function(e) {
            for (var t = e.childNodes, n = 0, o = 0; o < t.length; o++) 3 !== t[o].nodeType && (isNaN(t[o].offsetWidth) || (n += t[o].offsetWidth));
            return n
        },
        L = function(t, n) {
            window.attachEvent ? window.attachEvent("onresize", function() {
                p.doesItFit && p.doesItFit(t)
            }) : window.addEventListener && window.addEventListener("resize", function() {
                p.doesItFit && p.doesItFit(t)
            }, !0), t.querySelector(a).addEventListener("click", function() {
                o(t.querySelector(u), "show"), o(this, "is-open"), o(t, "is-open"), -1 !== t.className.indexOf("is-open") ? t.querySelector(u).setAttribute("aria-hidden", "false") : (t.querySelector(u).setAttribute("aria-hidden", "true"), t.querySelector(u).blur())
            }), document.addEventListener("click", function(e) {
                (function(e, t) {
                    for (var n = t.charAt(0); e && e !== document; e = e.parentNode)
                        if ("." === n) {
                            if (e.classList.contains(t.substr(1))) return e
                        } else if ("#" === n) {
                        if (e.id === t.substr(1)) return e
                    } else if ("[" === n && e.hasAttribute(t.substr(1, t.length - 2))) return e;
                    return !1
                })(e.target, "." + n.navDropdownClassName) || e.target === t.querySelector(a) || (t.querySelector(u).classList.remove("show"), t.querySelector(a).classList.remove("is-open"), t.classList.remove("is-open"))
            }), document.onkeydown = function(e) {
                27 === (e = e || window.event).keyCode && (document.querySelector(u).classList.remove("show"), document.querySelector(a).classList.remove("is-open"), i.classList.remove("is-open"))
            }
        };
    Element.prototype.remove = function() {
        this.parentElement.removeChild(this)
    }, NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
        for (var e = 0, t = this.length; e < t; e++) this[e] && this[e].parentElement && this[e].parentElement.removeChild(this[e])
    }, p.destroy = function() {
        m && (document.documentElement.classList.remove(m.initClass), l.remove(), m = null, delete p.init, delete p.doesItFit)
    }, h && "undefined" != typeof Node && (Node.prototype.insertAfter = function(e, t) {
        this.insertBefore(e, t.nextSibling)
    });
    var N = function(e) {
        var t = e.charAt(0);
        return "." !== t && "#" !== t
    };
    return p.init = function(e) {
        var n, o, r;
        if (o = e || {}, r = {}, S(n = w, function(e, t) {
                r[t] = n[t]
            }), S(o, function(e, t) {
                r[t] = o[t]
            }), m = r, h || "undefined" != typeof Node)
            if (N(m.navDropdownClassName) && N(m.navDropdownToggleClassName)) {
                var t = document.querySelectorAll(m.mainNavWrapper);
                S(t, function(e) {
                    var t, n;
                    (v[f] = [], e.setAttribute("instance", f++), i = e) ? (s = m.mainNav, e.querySelector(s) ? (t = e, n = m, l = document.createElement("span"), u = document.createElement("ul"), (a = document.createElement("button")).innerHTML = n.navDropdownLabel, a.setAttribute("aria-controls", "menu"), a.setAttribute("type", "button"), u.setAttribute("aria-hidden", "true"), t.querySelector(s).parentNode === t ? (t.insertAfter(l, t.querySelector(s)), l.appendChild(a), l.appendChild(u), u.classList.add(n.navDropdownClassName), u.classList.add("priority-nav__dropdown"), a.classList.add(n.navDropdownToggleClassName), a.classList.add("priority-nav__dropdown-toggle"), a.setAttribute("type", "button"), l.classList.add(n.navDropdownClassName + "-wrapper"), l.classList.add("priority-nav__wrapper"), t.classList.add("priority-nav")) : console.warn("mainNav is not a direct child of mainNavWrapper, double check please"), u = "." + m.navDropdownClassName, e.querySelector(u) ? (a = "." + m.navDropdownToggleClassName, e.querySelector(a) ? (L(e, m), p.doesItFit(e)) : console.warn("couldn't find the specified navDropdownToggle element")) : console.warn("couldn't find the specified navDropdown element")) : console.warn("couldn't find the specified mainNav element")) : console.warn("couldn't find the specified mainNavWrapper element")
                }), 0, document.documentElement.classList.add(m.initClass)
            } else console.warn("No symbols allowed in navDropdownClassName & navDropdownToggleClassName. These are not selectors.");
        else console.warn("This browser doesn't support priorityNav")
    }, p
});