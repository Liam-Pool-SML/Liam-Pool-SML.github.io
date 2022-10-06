var ln = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};

function $c(e) {
	if (e.__esModule) return e;
	var t = Object.defineProperty({}, "__esModule", {
		value: !0
	});
	return Object.keys(e).forEach(function(n) {
		var r = Object.getOwnPropertyDescriptor(e, n);
		Object.defineProperty(t, n, r.get ? r : {
			enumerable: !0,
			get: function() {
				return e[n]
			}
		})
	}), t
}
var ao = {
		exports: {}
	},
	Fn, j, ol, sl, hn, Yo, al, cr = {},
	ll = [],
	Hc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

function ct(e, t) {
	for (var n in t) e[n] = t[n];
	return e
}

function ul(e) {
	var t = e.parentNode;
	t && t.removeChild(e)
}

function we(e, t, n) {
	var r, i, o, s = {};
	for (o in t) o == "key" ? r = t[o] : o == "ref" ? i = t[o] : s[o] = t[o];
	if (arguments.length > 2 && (s.children = arguments.length > 3 ? Fn.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
		for (o in e.defaultProps) s[o] === void 0 && (s[o] = e.defaultProps[o]);
	return pn(e, s, r, i, null)
}

function pn(e, t, n, r, i) {
	var o = {
		type: e,
		props: t,
		key: n,
		ref: r,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__d: void 0,
		__c: null,
		__h: null,
		constructor: void 0,
		__v: i == null ? ++ol : i
	};
	return i == null && j.vnode != null && j.vnode(o), o
}

function cl() {
	return {
		current: null
	}
}

function Fe(e) {
	return e.children
}

function Xe(e, t) {
	this.props = e, this.context = t
}

function $t(e, t) {
	if (t == null) return e.__ ? $t(e.__, e.__.__k.indexOf(e) + 1) : null;
	for (var n; t < e.__k.length; t++)
		if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
	return typeof e.type == "function" ? $t(e) : null
}

function fl(e) {
	var t, n;
	if ((e = e.__) != null && e.__c != null) {
		for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
			if ((n = e.__k[t]) != null && n.__e != null) {
				e.__e = e.__c.base = n.__e;
				break
			} return fl(e)
	}
}

function Ai(e) {
	(!e.__d && (e.__d = !0) && hn.push(e) && !fr.__r++ || Yo !== j.debounceRendering) && ((Yo = j.debounceRendering) || setTimeout)(fr)
}

function fr() {
	for (var e; fr.__r = hn.length;) e = hn.sort(function(t, n) {
		return t.__v.__b - n.__v.__b
	}), hn = [], e.some(function(t) {
		var n, r, i, o, s, a;
		t.__d && (s = (o = (n = t).__v).__e, (a = n.__P) && (r = [], (i = ct({}, o)).__v = o.__v + 1, lo(a, o, i, n.__n, a.ownerSVGElement !== void 0, o.__h != null ? [s] : null, r, s == null ? $t(o) : s, o.__h), ml(r, o), o.__e != s && fl(o)))
	})
}

function dl(e, t, n, r, i, o, s, a, l, c) {
	var u, f, p, h, d, m, g, y = r && r.__k || ll,
		k = y.length;
	for (n.__k = [], u = 0; u < t.length; u++)
		if ((h = n.__k[u] = (h = t[u]) == null || typeof h == "boolean" ? null : typeof h == "string" || typeof h == "number" || typeof h == "bigint" ? pn(null, h, null, null, h) : Array.isArray(h) ? pn(Fe, {
				children: h
			}, null, null, null) : h.__b > 0 ? pn(h.type, h.props, h.key, null, h.__v) : h) != null) {
			if (h.__ = n, h.__b = n.__b + 1, (p = y[u]) === null || p && h.key == p.key && h.type === p.type) y[u] = void 0;
			else
				for (f = 0; f < k; f++) {
					if ((p = y[f]) && h.key == p.key && h.type === p.type) {
						y[f] = void 0;
						break
					}
					p = null
				}
			lo(e, h, p = p || cr, i, o, s, a, l, c), d = h.__e, (f = h.ref) && p.ref != f && (g || (g = []), p.ref && g.push(p.ref, null, h), g.push(f, h.__c || d, h)), d != null ? (m == null && (m = d), typeof h.type == "function" && h.__k === p.__k ? h.__d = l = hl(h, l, e) : l = pl(e, h, p, y, d, l), typeof n.type == "function" && (n.__d = l)) : l && p.__e == l && l.parentNode != e && (l = $t(p))
		} for (n.__e = m, u = k; u--;) y[u] != null && (typeof n.type == "function" && y[u].__e != null && y[u].__e == n.__d && (n.__d = $t(r, u + 1)), yl(y[u], y[u]));
	if (g)
		for (u = 0; u < g.length; u++) gl(g[u], g[++u], g[++u])
}

function hl(e, t, n) {
	for (var r, i = e.__k, o = 0; i && o < i.length; o++)(r = i[o]) && (r.__ = e, t = typeof r.type == "function" ? hl(r, t, n) : pl(n, r, r, i, r.__e, t));
	return t
}

function it(e, t) {
	return t = t || [], e == null || typeof e == "boolean" || (Array.isArray(e) ? e.some(function(n) {
		it(n, t)
	}) : t.push(e)), t
}

function pl(e, t, n, r, i, o) {
	var s, a, l;
	if (t.__d !== void 0) s = t.__d, t.__d = void 0;
	else if (n == null || i != o || i.parentNode == null) e: if (o == null || o.parentNode !== e) e.appendChild(i), s = null;
		else {
			for (a = o, l = 0;
				(a = a.nextSibling) && l < r.length; l += 2)
				if (a == i) break e;
			e.insertBefore(i, o), s = o
		} return s !== void 0 ? s : i.nextSibling
}

function qc(e, t, n, r, i) {
	var o;
	for (o in n) o === "children" || o === "key" || o in t || dr(e, o, null, n[o], r);
	for (o in t) i && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || dr(e, o, t[o], n[o], r)
}

function Xo(e, t, n) {
	t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Hc.test(t) ? n : n + "px"
}

function dr(e, t, n, r, i) {
	var o;
	e: if (t === "style")
		if (typeof n == "string") e.style.cssText = n;
		else {
			if (typeof r == "string" && (e.style.cssText = r = ""), r)
				for (t in r) n && t in n || Xo(e.style, t, "");
			if (n)
				for (t in n) r && n[t] === r[t] || Xo(e.style, t, n[t])
		}
	else if (t[0] === "o" && t[1] === "n") o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Ko : Go, o) : e.removeEventListener(t, o ? Ko : Go, o);
	else if (t !== "dangerouslySetInnerHTML") {
		if (i) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
		else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e) try {
			e[t] = n == null ? "" : n;
			break e
		} catch {}
		typeof n == "function" || (n != null && (n !== !1 || t[0] === "a" && t[1] === "r") ? e.setAttribute(t, n) : e.removeAttribute(t))
	}
}

function Go(e) {
	this.l[e.type + !1](j.event ? j.event(e) : e)
}

function Ko(e) {
	this.l[e.type + !0](j.event ? j.event(e) : e)
}

function lo(e, t, n, r, i, o, s, a, l) {
	var c, u, f, p, h, d, m, g, y, k, w, C, E, b = t.type;
	if (t.constructor !== void 0) return null;
	n.__h != null && (l = n.__h, a = t.__e = n.__e, t.__h = null, o = [a]), (c = j.__b) && c(t);
	try {
		e: if (typeof b == "function") {
			if (g = t.props, y = (c = b.contextType) && r[c.__c], k = c ? y ? y.props.value : c.__ : r, n.__c ? m = (u = t.__c = n.__c).__ = u.__E : ("prototype" in b && b.prototype.render ? t.__c = u = new b(g, k) : (t.__c = u = new Xe(g, k), u.constructor = b, u.render = Qc), y && y.sub(u), u.props = g, u.state || (u.state = {}), u.context = k, u.__n = r, f = u.__d = !0, u.__h = []), u.__s == null && (u.__s = u.state), b.getDerivedStateFromProps != null && (u.__s == u.state && (u.__s = ct({}, u.__s)), ct(u.__s, b.getDerivedStateFromProps(g, u.__s))), p = u.props, h = u.state, f) b.getDerivedStateFromProps == null && u.componentWillMount != null && u.componentWillMount(), u.componentDidMount != null && u.__h.push(u.componentDidMount);
			else {
				if (b.getDerivedStateFromProps == null && g !== p && u.componentWillReceiveProps != null && u.componentWillReceiveProps(g, k), !u.__e && u.shouldComponentUpdate != null && u.shouldComponentUpdate(g, u.__s, k) === !1 || t.__v === n.__v) {
					u.props = g, u.state = u.__s, t.__v !== n.__v && (u.__d = !1), u.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(A) {
						A && (A.__ = t)
					}), u.__h.length && s.push(u);
					break e
				}
				u.componentWillUpdate != null && u.componentWillUpdate(g, u.__s, k), u.componentDidUpdate != null && u.__h.push(function() {
					u.componentDidUpdate(p, h, d)
				})
			}
			if (u.context = k, u.props = g, u.__v = t, u.__P = e, w = j.__r, C = 0, "prototype" in b && b.prototype.render) u.state = u.__s, u.__d = !1, w && w(t), c = u.render(u.props, u.state, u.context);
			else
				do u.__d = !1, w && w(t), c = u.render(u.props, u.state, u.context), u.state = u.__s; while (u.__d && ++C < 25);
			u.state = u.__s, u.getChildContext != null && (r = ct(ct({}, r), u.getChildContext())), f || u.getSnapshotBeforeUpdate == null || (d = u.getSnapshotBeforeUpdate(p, h)), E = c != null && c.type === Fe && c.key == null ? c.props.children : c, dl(e, Array.isArray(E) ? E : [E], t, n, r, i, o, s, a, l), u.base = t.__e, t.__h = null, u.__h.length && s.push(u), m && (u.__E = u.__ = null), u.__e = !1
		} else o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Wc(n.__e, t, n, r, i, o, s, l);
		(c = j.diffed) && c(t)
	}
	catch (A) {
		t.__v = null, (l || o != null) && (t.__e = a, t.__h = !!l, o[o.indexOf(a)] = null), j.__e(A, t, n)
	}
}

function ml(e, t) {
	j.__c && j.__c(t, e), e.some(function(n) {
		try {
			e = n.__h, n.__h = [], e.some(function(r) {
				r.call(n)
			})
		} catch (r) {
			j.__e(r, n.__v)
		}
	})
}

function Wc(e, t, n, r, i, o, s, a) {
	var l, c, u, f = n.props,
		p = t.props,
		h = t.type,
		d = 0;
	if (h === "svg" && (i = !0), o != null) {
		for (; d < o.length; d++)
			if ((l = o[d]) && "setAttribute" in l == !!h && (h ? l.localName === h : l.nodeType === 3)) {
				e = l, o[d] = null;
				break
			}
	}
	if (e == null) {
		if (h === null) return document.createTextNode(p);
		e = i ? document.createElementNS("http://www.w3.org/2000/svg", h) : document.createElement(h, p.is && p), o = null, a = !1
	}
	if (h === null) f === p || a && e.data === p || (e.data = p);
	else {
		if (o = o && Fn.call(e.childNodes), c = (f = n.props || cr).dangerouslySetInnerHTML, u = p.dangerouslySetInnerHTML, !a) {
			if (o != null)
				for (f = {}, d = 0; d < e.attributes.length; d++) f[e.attributes[d].name] = e.attributes[d].value;
			(u || c) && (u && (c && u.__html == c.__html || u.__html === e.innerHTML) || (e.innerHTML = u && u.__html || ""))
		}
		if (qc(e, p, f, i, a), u) t.__k = [];
		else if (d = t.props.children, dl(e, Array.isArray(d) ? d : [d], t, n, r, i && h !== "foreignObject", o, s, o ? o[0] : n.__k && $t(n, 0), a), o != null)
			for (d = o.length; d--;) o[d] != null && ul(o[d]);
		a || ("value" in p && (d = p.value) !== void 0 && (d !== e.value || h === "progress" && !d || h === "option" && d !== f.value) && dr(e, "value", d, f.value, !1), "checked" in p && (d = p.checked) !== void 0 && d !== e.checked && dr(e, "checked", d, f.checked, !1))
	}
	return e
}

function gl(e, t, n) {
	try {
		typeof e == "function" ? e(t) : e.current = t
	} catch (r) {
		j.__e(r, n)
	}
}

function yl(e, t, n) {
	var r, i;
	if (j.unmount && j.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || gl(r, null, t)), (r = e.__c) != null) {
		if (r.componentWillUnmount) try {
			r.componentWillUnmount()
		} catch (o) {
			j.__e(o, t)
		}
		r.base = r.__P = null
	}
	if (r = e.__k)
		for (i = 0; i < r.length; i++) r[i] && yl(r[i], t, typeof e.type != "function");
	n || e.__e == null || ul(e.__e), e.__e = e.__d = void 0
}

function Qc(e, t, n) {
	return this.constructor(e, n)
}

function Ht(e, t, n) {
	var r, i, o;
	j.__ && j.__(e, t), i = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], lo(t, e = (!r && n || t).__k = we(Fe, null, [e]), i || cr, cr, t.ownerSVGElement !== void 0, !r && n ? [n] : i ? null : t.firstChild ? Fn.call(t.childNodes) : null, o, !r && n ? n : i ? i.__e : t.firstChild, r), ml(o, e)
}

function uo(e, t) {
	Ht(e, t, uo)
}

function bl(e, t, n) {
	var r, i, o, s = ct({}, e.props);
	for (o in t) o == "key" ? r = t[o] : o == "ref" ? i = t[o] : s[o] = t[o];
	return arguments.length > 2 && (s.children = arguments.length > 3 ? Fn.call(arguments, 2) : n), pn(e.type, s, r || e.key, i || e.ref, null)
}

function Sr(e, t) {
	var n = {
		__c: t = "__cC" + al++,
		__: e,
		Consumer: function(r, i) {
			return r.children(i)
		},
		Provider: function(r) {
			var i, o;
			return this.getChildContext || (i = [], (o = {})[t] = this, this.getChildContext = function() {
				return o
			}, this.shouldComponentUpdate = function(s) {
				this.props.value !== s.value && i.some(Ai)
			}, this.sub = function(s) {
				i.push(s);
				var a = s.componentWillUnmount;
				s.componentWillUnmount = function() {
					i.splice(i.indexOf(s), 1), a && a.call(s)
				}
			}), r.children
		}
	};
	return n.Provider.__ = n.Consumer.contextType = n
}
Fn = ll.slice, j = {
	__e: function(e, t, n, r) {
		for (var i, o, s; t = t.__;)
			if ((i = t.__c) && !i.__) try {
				if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), s = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, r || {}), s = i.__d), s) return i.__E = i
			} catch (a) {
				e = a
			}
		throw e
	}
}, ol = 0, sl = function(e) {
	return e != null && e.constructor === void 0
}, Xe.prototype.setState = function(e, t) {
	var n;
	n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ct({}, this.state), typeof e == "function" && (e = e(ct({}, n), this.props)), e && ct(n, e), e != null && this.__v && (t && this.__h.push(t), Ai(this))
}, Xe.prototype.forceUpdate = function(e) {
	this.__v && (this.__e = !0, e && this.__h.push(e), Ai(this))
}, Xe.prototype.render = Fe, hn = [], fr.__r = 0, al = 0;
var Yc = Object.freeze(Object.defineProperty({
		__proto__: null,
		render: Ht,
		hydrate: uo,
		createElement: we,
		h: we,
		Fragment: Fe,
		createRef: cl,
		get isValidElement() {
			return sl
		},
		Component: Xe,
		cloneElement: bl,
		createContext: Sr,
		toChildArray: it,
		get options() {
			return j
		}
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	Xc = $c(Yc);
(function(e, t) {
	(function(n, r) {
		e.exports = r()
	})(ln, function() {
		return (() => {
			var n = {
					470: (s, a, l) => {
						var c;
						l.r(a), l.d(a, {
								ErrorTypes: () => c,
								getAsyncComponent: () => y,
								getAttributeObject: () => d,
								getAttributeProps: () => m,
								getDocument: () => h,
								getElementAttributes: () => w,
								getElementTag: () => k,
								getPropKey: () => g,
								isPromise: () => u,
								parseJson: () => p,
								selfClosingTags: () => f
							}),
							function(C) {
								C.Promise = "Error: Promises cannot be used for SSR", C.Missing = "Error: Cannot find component in provided function", C.Json = "Error: Invalid JSON string passed to component"
							}(c || (c = {}));
						const u = C => C && typeof C.then == "function",
							f = ["area", "base", "br", "col", "hr", "img", "input", "link", "meta", "source", "embed", "param", "track", "wbr"];

						function p(C) {
							const {
								tagName: E
							} = this, {
								formatProps: b
							} = this.__options;
							let A = {};
							try {
								A = JSON.parse(C)
							} catch {
								console.error(c.Json, `: <${E.toLowerCase()}>`)
							}
							return b && (A = b(A)), A
						}

						function h(C) {
							const E = `<!DOCTYPE html>
<html><body>${C}</body></html>`;
							let b;
							try {
								b = new DOMParser().parseFromString(E, "text/html")
							} catch {}
							if (b) return b.body
						}

						function d(C) {
							const E = {};
							if (!(C != null && C.length)) return E;
							for (let b = C.length - 1; b >= 0; b--) {
								const A = C[b];
								E[A.name] = A.value
							}
							return E
						}

						function m(C, E) {
							const b = d(C);
							let A = {};
							for (const R of Object.keys(b))(E == null ? void 0 : E.indexOf(R)) !== -1 && (A[g(R)] = b[R]);
							return A
						}

						function g(C) {
							const E = C.trim().replace(/[\s_]/g, "-");
							return E.charAt(0).toLowerCase() + E.slice(1).replace(/-([a-z])/g, ({
								1: b
							}) => b.toUpperCase())
						}

						function y(C, E) {
							return C.then(b => function(A, R) {
								let F;
								return typeof A == "function" ? A : (typeof A == "object" && (F = A[z = R, (z = z.toLowerCase()).replace(/(^\w|-\w)/g, O => O.replace(/-/, "").toUpperCase())] || void 0), F);
								var z
							}(b, E))
						}

						function k(C) {
							let E = C.toLowerCase();
							return E.indexOf("-") < 0 && (E = "component-" + E), E
						}

						function w() {
							const {
								attributes: C = []
							} = this.__options;
							return this.hasAttributes() ? m(this.attributes, C) : {}
						}
					},
					710: function(s, a, l) {
						var c = this && this.__rest || function(h, d) {
							var m = {};
							for (var g in h) Object.prototype.hasOwnProperty.call(h, g) && d.indexOf(g) < 0 && (m[g] = h[g]);
							if (h != null && typeof Object.getOwnPropertySymbols == "function") {
								var y = 0;
								for (g = Object.getOwnPropertySymbols(h); y < g.length; y++) d.indexOf(g[y]) < 0 && Object.prototype.propertyIsEnumerable.call(h, g[y]) && (m[g[y]] = h[g[y]])
							}
							return m
						};
						Object.defineProperty(a, "__esModule", {
							value: !0
						}), a.parseHtml = void 0;
						const u = l(108),
							f = l(470);

						function p(h) {
							var d;
							if (h.nodeType === 3) return ((d = h.textContent) === null || d === void 0 ? void 0 : d.trim()) || "";
							if (h.nodeType !== 1) return null;
							const m = String(h.nodeName).toLowerCase(),
								g = Array.from(h.childNodes),
								y = () => g.map(E => p.call(this, E)),
								k = (0, f.getAttributeObject)(h.attributes),
								{
									slot: w
								} = k,
								C = c(k, ["slot"]);
							return m === "script" ? null : m === "body" ? (0, u.h)(u.Fragment, {}, y()) : f.selfClosingTags.includes(m) ? (0, u.h)(m, C) : w ? (this.__slots[(0, f.getPropKey)(w)] = function(E) {
								return E.every(b => typeof b == "string") ? E.join(" ") : (0, u.h)(u.Fragment, {}, E)
							}(y()), null) : (0, u.h)(m, C, y())
						}
						a.parseHtml = function() {
							const h = (0, f.getDocument)(this.innerHTML);
							if (!h) return;
							const d = p.call(this, h);
							return () => d
						}
					},
					108: s => {
						s.exports = Xc
					}
				},
				r = {};

			function i(s) {
				var a = r[s];
				if (a !== void 0) return a.exports;
				var l = r[s] = {
					exports: {}
				};
				return n[s].call(l.exports, l, l.exports, i), l.exports
			}
			i.d = (s, a) => {
				for (var l in a) i.o(a, l) && !i.o(s, l) && Object.defineProperty(s, l, {
					enumerable: !0,
					get: a[l]
				})
			}, i.o = (s, a) => Object.prototype.hasOwnProperty.call(s, a), i.r = s => {
				typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, {
					value: "Module"
				}), Object.defineProperty(s, "__esModule", {
					value: !0
				})
			};
			var o = {};
			return (() => {
				var s = o;
				Object.defineProperty(s, "__esModule", {
					value: !0
				}), s.define = void 0;
				const a = i(108),
					l = i(470),
					c = i(710);

				function u() {
					const d = l.getElementAttributes.call(this),
						m = this.getAttribute("props"),
						g = this.querySelector('[type="application/json"]'),
						y = l.parseJson.call(this, m || (g == null ? void 0 : g.innerHTML) || "{}");
					g == null || g.remove();
					let k = this.__children;
					this.__mounted || this.hasAttribute("server") || (k = (0, a.h)(c.parseHtml.call(this), {})), this.__properties = Object.assign(Object.assign(Object.assign({}, this.__slots), y), d), this.__children = k || [], this.removeAttribute("server"), this.innerHTML = "";
					const w = this.__component(),
						C = E => h.call(this, E);
					(0, l.isPromise)(w) ? (0, l.getAsyncComponent)(w, this.tagName).then(C): C(w)
				}

				function f(d, m, g) {
					if (!this.__mounted) return;
					g = g == null ? void 0 : g;
					let y = this.__properties;
					d === "props" ? y = Object.assign(Object.assign({}, y), l.parseJson.call(this, g)) : y[(0, l.getPropKey)(d)] = g, this.__properties = y, (0, a.render)((0, a.h)(this.__instance, Object.assign(Object.assign({}, y), {
						parent: this,
						children: this.__children
					})), this)
				}

				function p() {
					(0, a.render)(null, this)
				}

				function h(d) {
					const {
						tagName: m
					} = this, {
						wrapComponent: g
					} = this.__options;
					if (!d) return void console.error(l.ErrorTypes.Missing, `: <${m.toLowerCase()}>`);
					g && (d = g(d)), this.__instance = d, this.__mounted = !0;
					const y = Object.assign(Object.assign({}, this.__properties), {
						parent: this,
						children: this.__children
					});
					(0, a.render)((0, a.h)(d, y), this)
				}
				s.define = function(d, m, g = {}) {
					const {
						wrapComponent: y
					} = g, k = typeof window == "undefined", w = (0, l.getElementTag)(d);
					if (!k) return void customElements.define(w, function(b, A = {}) {
						var R;
						const {
							attributes: F = []
						} = A;
						if (typeof Reflect != "undefined" && Reflect.construct) {
							const z = function() {
								const O = Reflect.construct(HTMLElement, [], z);
								return O.__mounted = !1, O.__component = b, O.__properties = {}, O.__slots = {}, O.__children = void 0, O.__options = A, O
							};
							return z.observedAttributes = ["props", ...F], z.prototype = Object.create(HTMLElement.prototype), z.prototype.constructor = z, z.prototype.connectedCallback = u, z.prototype.attributeChangedCallback = f, z.prototype.disconnectedCallback = p, z
						}
						return R = class extends HTMLElement {
							constructor() {
								super(...arguments), this.__mounted = !1, this.__component = b, this.__properties = {}, this.__slots = {}, this.__children = void 0, this.__options = A
							}
							connectedCallback() {
								u.call(this)
							}
							attributeChangedCallback(...z) {
								f.call(this, ...z)
							}
							disconnectedCallback() {
								p.call(this)
							}
						}, R.observedAttributes = ["props", ...F], R
					}(m, g));
					const C = m();
					if ((0, l.isPromise)(C)) throw new Error(`${l.ErrorTypes.Promise} : <${d}>`);
					let E = C;
					return y && (E = y(C)), b => (0, a.h)(w, {
						server: !0
					}, [(0, a.h)("script", {
						type: "application/json",
						dangerouslySetInnerHTML: {
							__html: JSON.stringify(b)
						}
					}), (0, a.h)(E, b)])
				}
			})(), o
		})()
	})
})(ao);
var je = function() {
		function e() {
			this._callbacks = []
		}
		return e.prototype.addListener = function(t) {
			this._callbacks.push(t)
		}, e.prototype.removeListener = function(t) {
			var n = this._callbacks.indexOf(t);
			n > -1 && this._callbacks.splice(n, 1)
		}, e.prototype.call = function() {
			for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
			this._callbacks.forEach(function(r) {
				r.apply(r, t)
			}, this)
		}, e
	}(),
	hr = function() {
		function e(t, n) {
			this._scene = t, this._personaId = n, this._scene.onConversationResultEvents[n] || (this._scene.onConversationResultEvents[n] = new je), this._onConversationResultEvent = this._scene.onConversationResultEvents[n], this._scene.onSpeechMarkerEvents[n] || (this._scene.onSpeechMarkerEvents[n] = new je), this._onSpeechMarkerEvent = this._scene.onSpeechMarkerEvents[n]
		}
		return e.prototype.startSpeaking = function(t, n, r) {
			n === void 0 && (n = null), r === void 0 && (r = null);
			var i = {
				personaId: this._personaId,
				text: t
			};
			return n && (i.context = n), r && (i.optionalArgs = r), this._scene.sendRequest("startSpeaking", i)
		}, e.prototype.stopSpeaking = function() {
			var t = {
				personaId: this._personaId
			};
			return this._scene.sendRequest("stopSpeaking", t)
		}, e.prototype.conversationSend = function(t, n, r) {
			var i = {
				personaId: this._personaId,
				text: t,
				variables: n,
				optionalArgs: r
			};
			return this._scene.sendRequest("conversationSend", i)
		}, e.prototype.conversationSetVariables = function(t) {
			var n = {
				personaId: this._personaId,
				variables: t
			};
			return this._scene.sendRequest("conversationSetVariables", n)
		}, e.prototype.conversationGetVariables = function() {
			var t = {
				personaId: this._personaId
			};
			return this._scene.sendRequest("conversationGetVariables", t)
		}, e.prototype.animateToNamedCameraWithOrbitPan = function(t, n, r, i, o, s) {
			var a = {
				personaId: this._personaId,
				cameraName: t,
				time: n,
				orbitDegX: r,
				orbitDegY: i,
				panDeg: o,
				tiltDeg: s
			};
			return this._scene.sendRequest("animateToNamedCamera", a)
		}, e.prototype.playAnimation = function(t) {
			var n = {
				personaId: this._personaId,
				animation: t
			};
			return this._scene.sendRequest("playAnimation", n)
		}, e.prototype.getVariables = function(t, n, r) {
			n === void 0 && (n = !1), r === void 0 && (r = "");
			var i = {
				personaId: this._personaId,
				names: t,
				errorTolerant: n,
				format: r
			};
			return this._scene.sendRequest("getVariables", i)
		}, e.prototype.setVariables = function(t) {
			var n = {
				personaId: this._personaId,
				Variables: t
			};
			return this._scene.sendRequest("setVariables", n)
		}, e.prototype.setVariablesOneway = function(t) {
			var n = {
				personaId: this._personaId,
				Variables: t
			};
			this._scene.sendOnewaySceneRequest("setVariables", n)
		}, e.prototype.getVariablesList = function() {
			var t = {
				personaId: this._personaId
			};
			return this._scene.sendRequest("getVariablesList", t)
		}, e.prototype.getModelVariablesList = function(t) {
			var n = {
				personaId: this._personaId,
				Models: t
			};
			return this._scene.sendRequest("getModelVariablesList", n)
		}, e.prototype.getModelChildren = function(t) {
			var n = {
				personaId: this._personaId,
				Models: t
			};
			return this._scene.sendRequest("getModelChildren", n)
		}, e.prototype.getModelFilterSearchResult = function(t) {
			var n = {
				personaId: this._personaId,
				Models: t
			};
			return this._scene.sendRequest("getModelFilterSearchResult", n)
		}, e.prototype.getModelVariableFilterSearchResult = function(t) {
			var n = {
				personaId: this._personaId,
				Models: t
			};
			return this._scene.sendRequest("getModelVariableFilterSearchResult", n)
		}, e.prototype.getConnectorEntries = function(t) {
			var n = {
				personaId: this._personaId,
				model: t
			};
			return this._scene.sendRequest("getConnectorEntries", n)
		}, e.prototype.startBlProfiling = function() {
			var t = {
				personaId: this._personaId
			};
			return this._scene.sendRequest("startBlProfiling", t)
		}, e.prototype.stopBlProfiling = function(t) {
			var n = {
				personaId: this._personaId,
				reverse: t
			};
			return this._scene.sendRequest("stopBlProfiling", n)
		}, e.prototype.getModelHierarchy = function(t) {
			var n = {
				personaId: this._personaId,
				model: t
			};
			return this._scene.sendRequest("getModelHierarchy", n)
		}, e.prototype.createMonitorSet = function(t, n) {
			var r = {
				personaId: this._personaId,
				setName: [{
					SetName: t
				}],
				variables: n
			};
			return this._scene.sendRequest("createMonitorSet", r)
		}, e.prototype.removeMonitorSet = function(t) {
			var n = {
				personaId: this._personaId,
				setName: [{
					SetName: t
				}]
			};
			return this._scene.sendRequest("removeMonitorSet", n)
		}, e.prototype.addVariableToMonitorSet = function(t, n) {
			var r = {
				personaId: this._personaId,
				setName: [{
					SetName: t
				}],
				variables: n
			};
			return this._scene.sendRequest("addVariableToMonitorSet", r)
		}, e.prototype.removeVariableFromMonitorSet = function(t, n) {
			var r = {
				personaId: this._personaId,
				setName: [{
					SetName: t
				}],
				variables: n
			};
			return this._scene.sendRequest("removeVariableFromMonitorSet", r)
		}, e.prototype.renderModel = function(t) {
			var n = {
				personaId: this._personaId,
				modelName: t
			};
			return this._scene.sendRequest("renderModel", n)
		}, Object.defineProperty(e.prototype, "onConversationResultEvent", {
			get: function() {
				return this._onConversationResultEvent
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "onSpeechMarkerEvent", {
			get: function() {
				return this._onSpeechMarkerEvent
			},
			enumerable: !1,
			configurable: !0
		}), e
	}(),
	Oi = function(e, t) {
		return Oi = Object.setPrototypeOf || {
			__proto__: []
		}
		instanceof Array && function(n, r) {
			n.__proto__ = r
		} || function(n, r) {
			for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i])
		}, Oi(e, t)
	};

function Gc(e, t) {
	if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
	Oi(e, t);

	function n() {
		this.constructor = e
	}
	e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n)
}
var tt = function() {
	return tt = Object.assign || function(t) {
		for (var n, r = 1, i = arguments.length; r < i; r++) {
			n = arguments[r];
			for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
		}
		return t
	}, tt.apply(this, arguments)
};

function Kc(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function")
		for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n
}

function de(e, t, n, r) {
	function i(o) {
		return o instanceof n ? o : new n(function(s) {
			s(o)
		})
	}
	return new(n || (n = Promise))(function(o, s) {
		function a(u) {
			try {
				c(r.next(u))
			} catch (f) {
				s(f)
			}
		}

		function l(u) {
			try {
				c(r.throw(u))
			} catch (f) {
				s(f)
			}
		}

		function c(u) {
			u.done ? o(u.value) : i(u.value).then(a, l)
		}
		c((r = r.apply(e, t || [])).next())
	})
}

function he(e, t) {
	var n = {
			label: 0,
			sent: function() {
				if (o[0] & 1) throw o[1];
				return o[1]
			},
			trys: [],
			ops: []
		},
		r, i, o, s;
	return s = {
		next: a(0),
		throw: a(1),
		return: a(2)
	}, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
		return this
	}), s;

	function a(c) {
		return function(u) {
			return l([c, u])
		}
	}

	function l(c) {
		if (r) throw new TypeError("Generator is already executing.");
		for (; n;) try {
			if (r = 1, i && (o = c[0] & 2 ? i.return : c[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, c[1])).done) return o;
			switch (i = 0, o && (c = [c[0] & 2, o.value]), c[0]) {
				case 0:
				case 1:
					o = c;
					break;
				case 4:
					return n.label++, {
						value: c[1],
						done: !1
					};
				case 5:
					n.label++, i = c[1], c = [0];
					continue;
				case 7:
					c = n.ops.pop(), n.trys.pop();
					continue;
				default:
					if (o = n.trys, !(o = o.length > 0 && o[o.length - 1]) && (c[0] === 6 || c[0] === 2)) {
						n = 0;
						continue
					}
					if (c[0] === 3 && (!o || c[1] > o[0] && c[1] < o[3])) {
						n.label = c[1];
						break
					}
					if (c[0] === 6 && n.label < o[1]) {
						n.label = o[1], o = c;
						break
					}
					if (o && n.label < o[2]) {
						n.label = o[2], n.ops.push(c);
						break
					}
					o[2] && n.ops.pop(), n.trys.pop();
					continue
			}
			c = t.call(e, n)
		} catch (u) {
			c = [6, u], i = 0
		} finally {
			r = o = 0
		}
		if (c[0] & 5) throw c[1];
		return {
			value: c[0] ? c[1] : void 0,
			done: !0
		}
	}
}

function wt(e) {
	var t = typeof Symbol == "function" && Symbol.iterator,
		n = t && e[t],
		r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return {
		next: function() {
			return e && r >= e.length && (e = void 0), {
				value: e && e[r++],
				done: !e
			}
		}
	};
	throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}

function Mi(e, t) {
	var n = typeof Symbol == "function" && e[Symbol.iterator];
	if (!n) return e;
	var r = n.call(e),
		i, o = [],
		s;
	try {
		for (;
			(t === void 0 || t-- > 0) && !(i = r.next()).done;) o.push(i.value)
	} catch (a) {
		s = {
			error: a
		}
	} finally {
		try {
			i && !i.done && (n = r.return) && n.call(r)
		} finally {
			if (s) throw s.error
		}
	}
	return o
}

function Ii(e, t, n) {
	if (n || arguments.length === 2)
		for (var r = 0, i = t.length, o; r < i; r++)(o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
	return e.concat(o || Array.prototype.slice.call(t))
}
var mn = function() {
		function e() {
			var t = this;
			this.state = "pending", this.fate = "unresolved", this.promise = new Promise(function(n, r) {
				t._resolve = n, t._reject = r
			}), this.promise.then(function() {
				return t.state = "fulfilled"
			}, function() {
				return t.state = "rejected"
			})
		}
		return e.prototype.resolve = function(t) {
			if (this.fate === "resolved") {
				console.error("Deferred cannot be resolved twice");
				return
			}
			this.fate = "resolved", this._resolve(t)
		}, e.prototype.reject = function(t) {
			if (this.fate === "resolved") {
				console.error("Deferred cannot be resolved twice");
				return
			}
			this.fate = "resolved", this._reject(t)
		}, e.prototype.isResolved = function() {
			return this.fate === "resolved"
		}, e.prototype.isPending = function() {
			return this.state === "pending"
		}, e.prototype.isFulfilled = function() {
			return this.state === "fulfilled"
		}, e.prototype.isRejected = function() {
			return this.state === "rejected"
		}, e
	}(),
	Er = function() {
		function e() {
			this._hasMicrophone = !1, this._hasCamera = !1, this._isAndroid = !1, this._isBrowserSupported = !1, this._isEdge = !1, this._isIos = !1, this._isAndroid = this.detectAndroid(), this._isEdge = this.detectEdge(), this._isIos = this.detectIos()
		}
		return e.prototype.detectEdge = function() {
			return this.userAgentMatches("Edge")
		}, e.prototype.detectAndroid = function() {
			return this.userAgentMatches("Android")
		}, e.prototype.detectIos = function() {
			var t = (/iPad|iPhone|iPod/i.test(navigator.platform) || navigator && navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && !window.MSStream;
			return t
		}, e.prototype.userAgentMatches = function(t) {
			var n = window.navigator.userAgent,
				r = n.match(t);
			return r ? r.length > 0 : !1
		}, e.prototype.detectWebRTCFeatures = function() {
			var t = this;
			return new Promise(function(n, r) {
				window.SmIsUnderRuntimeHost && (t._isBrowserSupported = !0, t._hasMicrophone = !0, t._hasCamera = !0, n(t));
				var i = !1;
				["RTCPeerConnection", "webkitRTCPeerConnection", "mozRTCPeerConnection", "RTCIceGatherer"].forEach(function(c) {
					i || c in window && (i = !0)
				});
				var o = navigator.userAgent.match(/iPhone|iPad|iPod/i) && !window.MSStream,
					s = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
				i && o && !s && (i = !1), t._isBrowserSupported = i, t._isBrowserSupported || n(t);
				var a = null;
				navigator.mediaDevices && navigator.mediaDevices.enumerateDevices && (a = function(c) {
					Promise.resolve(navigator.mediaDevices.enumerateDevices()).then(function(u) {
						u === void 0 && (u = []), c(u)
					}).catch(function() {
						c([])
					})
				});
				var l = window.MediaStreamTrack;
				!a && l && l.getSources && (a = l.getSources.bind(l)), !a && navigator.enumerateDevices && (a = navigator.enumerateDevices.bind(navigator)), a ? a(function(c) {
					c.forEach(function(u) {
						u.kind === "audioinput" && (t._hasMicrophone = !0), u.kind === "videoinput" && (t._hasCamera = !0)
					}), n(t)
				}) : n(t)
			})
		}, Object.defineProperty(e.prototype, "hasMicrophone", {
			get: function() {
				return this._hasMicrophone
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "hasCamera", {
			get: function() {
				return this._hasCamera
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "isAndroid", {
			get: function() {
				return this._isAndroid
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "isBrowserSupported", {
			get: function() {
				return this._isBrowserSupported
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "isEdge", {
			get: function() {
				return this._isEdge
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "isIos", {
			get: function() {
				return this._isIos
			},
			enumerable: !1,
			configurable: !0
		}), e
	}(),
	Zo = ["debug", "log", "warn", "error"],
	Et = function() {
		function e(t, n) {
			t === void 0 && (t = "log"), n === void 0 && (n = !0), this.isEnabled = n, this.availableLogLevels = [], this._minLogLevel = "log", this.setMinLogLevel(t)
		}
		return e.prototype.log = function(t) {
			for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
			this.isEnabled && this.availableLogLevels.includes(t) && console[t].apply(console, Ii([], Mi(n), !1))
		}, e.prototype.enableLogging = function(t) {
			this.isEnabled = t
		}, e.prototype.getMinLogLevel = function() {
			return this._minLogLevel
		}, e.prototype.setMinLogLevel = function(t) {
			var n = Zo.indexOf(t);
			this._minLogLevel = t, this.availableLogLevels = Zo.slice(n)
		}, e
	}();

function ue(e, t) {
	var n = new Error(e);
	return n.name = t, n
}
var Zc = function() {
		function e(t, n) {
			n === void 0 && (n = new Et);
			var r = this;
			this.logger = n, this._isMicrophoneConnected = !1, this._isCameraConnected = !1, this._onConnectedStorage = function(i, o, s, a) {}, this._closed = !1, this._outgoingQueue = [], this._microphoneMuteDelay = -1, this._offsetX = 0, this._offsetY = 0, t && (this._viewport_element = t), window.SmRuntimeHostReceiveMessage = this.receiveMessage.bind(this), typeof window.SmRuntimeHostStyleViewportElement == "function" && window.SmRuntimeHostStyleViewportElement(this._viewport_element), this._onClose = function(i) {}, this._onMessage = function(i) {}, this._onUserText = function(i) {}, this.sendVideoBounds(0, 0), setTimeout(function() {
				r.sendVideoBounds(0, 0)
			}, 3e3), this._features = new Er, this.log("Local session created!")
		}
		return e.prototype.receiveMessage = function(t) {
			var n, r, i = JSON.parse(t);
			this.log("message received: ".concat(t)), this._onMessage(i), i.name === "state" && i.category === "scene" && ((r = (n = i.body) === null || n === void 0 ? void 0 : n.session) === null || r === void 0 ? void 0 : r.state) === "idle" && (this.log("Local session ending - conversationEnded"), this.close(!0, "conversationEnded"))
		}, Object.defineProperty(e.prototype, "onConnected", {
			set: function(t) {
				this._onConnectedStorage = t
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "onClose", {
			set: function(t) {
				this._onClose = t
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "onMessage", {
			set: function(t) {
				this._onMessage = t
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "onUserText", {
			set: function(t) {
				this._onUserText = t
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "loggingEnabled", {
			get: function() {
				return this.logger.isEnabled
			},
			set: function(t) {
				this.logger.log("warn", "loggingEnabled is deprecated and will be removed in a future version. Please use setLogging(boolean)"), this.logger.enableLogging(t)
			},
			enumerable: !1,
			configurable: !0
		}), e.prototype.setMinLogLevel = function(t) {
			this.logger.setMinLogLevel(t)
		}, e.prototype.setLogging = function(t) {
			this.logger.enableLogging(t)
		}, e.prototype.log = function(t) {
			this.logger.log("log", t)
		}, e.prototype.sendVideoBounds = function(t, n) {
			var r = this;
			setTimeout(function() {
				var i = r._viewport_element;
				if (i) {
					var o = document.defaultView || window,
						s = parseInt(o.getComputedStyle(i).width, 10),
						a = parseInt(o.getComputedStyle(i).height, 10);
					for (r._offsetX = 0, r._offsetY = 0; i && !isNaN(i.offsetLeft) && !isNaN(i.offsetTop);) r._offsetX += i.offsetLeft - i.scrollLeft, r._offsetY += i.offsetTop - i.scrollTop, i = i.offsetParent;
					if (document.documentElement) {
						var l = document.documentElement.scrollLeft,
							c = document.documentElement.scrollTop;
						r._offsetX -= l, r._offsetY -= c
					}
					r.log("Updating bounds: x =  ".concat(r._offsetX, " , y = ").concat(r._offsetY, "', w = ").concat(s, ", h = ").concat(a));
					var u = r._offsetY,
						f = r._offsetX,
						p = r._offsetY + a,
						h = r._offsetX + s,
						d = {
							name: "videoBounds",
							body: {
								top: u,
								left: f,
								bottom: p,
								right: h
							},
							category: "local",
							kind: "event"
						};
					r.sendMessage(d)
				}
			}, 0)
		}, e.prototype.hideVideo = function() {
			var t = 0,
				n = 0,
				r = 0,
				i = 0,
				o = {
					name: "videoBounds",
					body: {
						top: t,
						left: n,
						bottom: r,
						right: i
					},
					category: "local",
					kind: "event"
				};
			this.sendMessage(o)
		}, e.prototype.sendRtcEvent = function(t, n) {}, e.prototype.connect = function() {
			return de(this, void 0, void 0, function() {
				var t, n, r, i = this;
				return he(this, function(o) {
					switch (o.label) {
						case 0:
							return t = new mn, this.log("Local session connecting!"), this._closed = !1, [4, this._features.detectWebRTCFeatures()];
						case 1:
							return n = o.sent(), this._closed = !1, this._sessionId = void 0, this._isMicrophoneConnected = n.hasMicrophone, this._isCameraConnected = n.hasCamera, typeof window.local_websocket_port == "number" ? (this._serverConnection = new WebSocket("ws://localhost:" + window.local_websocket_port), this.log("websocket open"), this._serverConnection.onmessage = function(s) {
								i.gotMessageFromServer(s)
							}, this._serverConnection.onerror = function(s) {
								t.isPending() && t.reject(ue("websocket failed", "serverConnectionFailed"))
							}, this._serverConnection.onopen = function(s) {
								window.SmRuntimeHostReceiveMessage = function() {}, i.log("Local session connected!");
								for (var a = 0; a < i._outgoingQueue.length; a++) i._serverConnection.send(JSON.stringify(i._outgoingQueue[a])), i.logger.log("log", "SmLocalSession.prototype.sendMessage, forwarding message to Web Socket: " + i._outgoingQueue[a]);
								i._outgoingQueue = [], t.isPending() && t.resolve()
							}, this._serverConnection.onclose = function(s) {
								i.logger.log("log", "websocket closed: code(".concat(s.code, "), reason(").concat(s.reason, "), clean(").concat(s.wasClean, ")")), t.isRejected || i.close(!1, "normal")
							}) : (this.log("local_websocket_port not found! Failed to create WebSocket"), t.isPending() && t.reject(ue("websocket failed", "local_websocket_port not found"))), r = {
								name: "startSession",
								body: {},
								category: "scene",
								kind: "request"
							}, this.sendMessage(r), [2, t.promise]
					}
				})
			})
		}, e.prototype.gotMessageFromServer = function(t) {
			var n = t.data,
				r = JSON.parse(n),
				i = r.category,
				o = r.name,
				s = r.body;
			i !== "webrtc" ? this._onMessage(r) : o === "close" && this.close(!1, s.reason), o === "state" && i === "scene" && s.session !== null && s.session !== void 0 && s.session.state === "idle" && (this.log("Local session ending due to server idle message"), this.close(!0, "conversationEnded"))
		}, e.prototype.sendMessage = function(t) {
			var n = JSON.stringify(t);
			this._serverConnection && this._serverConnection.readyState === WebSocket.OPEN ? (this._serverConnection.send(n), this.log("SmLocalSession.prototype.sendMessage, forwarding message to Web Socket: ".concat(n))) : this._outgoingQueue.push(t)
		}, e.prototype.sendUserText = function(t) {
			this.logger.log("log", "SmLocalSession.prototype.sendUserText, discarding text: " + t)
		}, e.prototype.close = function(t, n) {
			if (n === void 0 && (n = "normal"), !this._closed && (this._closed = !0, this._onClose(n), this._isMicrophoneConnected = !1, this._isCameraConnected = !1, this.hideVideo(), this._serverConnection)) {
				this.log("closing server connection");
				var r = 1e3;
				this._serverConnection.close(r, n)
			}
		}, Object.defineProperty(e.prototype, "peerConnection", {
			get: function() {
				return null
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "userMediaStream", {
			get: function() {
				return null
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "serverConnection", {
			get: function() {
				return this._serverConnection
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "sessionId", {
			get: function() {
				return this._sessionId
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "isMicrophoneConnected", {
			get: function() {
				return this._isMicrophoneConnected
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "isCameraConnected", {
			get: function() {
				return this._isCameraConnected
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "features", {
			get: function() {
				return this._features
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "microphoneMuteDelay", {
			get: function() {
				return this._microphoneMuteDelay
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "microphoneMuted", {
			get: function() {
				return typeof window.SmRuntimeHostIsMicrophoneMuted == "function" ? window.SmRuntimeHostIsMicrophoneMuted() : !1
			},
			set: function(t) {
				typeof window.SmRuntimeHostMuteMicrophone == "function" && window.SmRuntimeHostMuteMicrophone(t)
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "offsetX", {
			get: function() {
				return this._offsetX
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "offsetY", {
			get: function() {
				return this._offsetY
			},
			enumerable: !1,
			configurable: !0
		}), e.prototype.isMicrophoneActive = function() {
			return this.isMicrophoneConnected && !this.microphoneMuted
		}, e.prototype.isCameraActive = function() {
			return this.isCameraConnected
		}, e.prototype.setMediaDeviceActive = function(t) {
			return t.microphone, t.camera, de(this, void 0, void 0, function() {
				return he(this, function(n) {
					throw ue("setMediaDeviceActive not supported on LocalSession", "notSupported")
				})
			})
		}, e
	}(),
	Jc = function(e) {
		Gc(t, e);

		function t() {
			var n = e !== null && e.apply(this, arguments) || this;
			return n.requestName = "", n.status = 0, n
		}
		return Object.defineProperty(t.prototype, "message", {
			get: function() {
				return "Scene response failed, status: ".concat(this.status)
			},
			enumerable: !1,
			configurable: !0
		}), t
	}(Error),
	G;
(function(e) {
	e[e.None = 0] = "None", e[e.Microphone = 1] = "Microphone", e[e.MicrophoneAndCamera = 2] = "MicrophoneAndCamera", e[e.Camera = 3] = "Camera"
})(G || (G = {}));
var Ri;
(function(e) {
	e.PAGE_METADATA = "PAGE_METADATA"
})(Ri || (Ri = {}));
var nt;
(function(e) {
	e.Disconnected = "Disconnected", e.SearchingForDigitalPerson = "SearchingForDigitalPerson", e.DownloadingAssets = "DownloadingAssets", e.ConnectingToDigitalPerson = "ConnectingToDigitalPerson", e.Connected = "Connected"
})(nt || (nt = {}));
var ef = function() {
		function e(t, n, r, i, o, s, a, l, c, u) {
			var f = this;
			this._connectPendingRemoteStream = null, this._resumeRequested = !1, this._isResumedSession = !1, this._outgoingQueue = [], this._controlOpen = !1, this._controlQueue = [], this._requestedUserMedia = G.None, this._requiredUserMedia = G.None, this._onConnected = function(p, h, d, m) {}, this._pendingLog = [], this._closed = !1, this._shouldLogToServer = !1, this._microphoneMuteDelay = -1, this._changeUserMediaQueue = new Array, this._removeListeners = new Array, this._videoOptions = {
				frameRate: 10,
				width: 640,
				height: 480,
				facingMode: "user"
			}, this._audioOptions = {
				noiseSuppression: !1,
				autoGainControl: !1,
				channelCount: 1,
				sampleRate: 16e3,
				sampleSize: 16,
				echoCancellation: !0
			}, this._videoElement = t, this._serverUri = n, this._connectUserText = r || "", this._accessToken = i, this._audioOnly = o, this._audioOptions.echoCancellation = l, this._requiredUserMedia = a, this._requestedUserMedia = s, this._logger = c, this._onClose = function(p) {}, this._onMessage = function(p) {}, this._onUserText = function(p) {}, this._sessionError = function(p) {
				f.log("session error: ".concat(p), "error")
			}, this._features = new Er, this._connectionState = u
		}
		return Object.defineProperty(e.prototype, "onConnected", {
			set: function(t) {
				this._onConnected = t
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "onClose", {
			set: function(t) {
				this._onClose = t
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "onMessage", {
			set: function(t) {
				this._onMessage = t
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "onUserText", {
			set: function(t) {
				this._onUserText = t
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "loggingEnabled", {
			get: function() {
				return this._logger.isEnabled
			},
			set: function(t) {
				this.log("loggingEnabled is deprecated and will be removed in a future version. Please use setLogging(boolean)", "warn"), this._logger.enableLogging(t)
			},
			enumerable: !1,
			configurable: !0
		}), e.prototype.setMinLogLevel = function(t) {
			this._logger.setMinLogLevel(t)
		}, e.prototype.setLogging = function(t) {
			this._logger.enableLogging(t)
		}, e.prototype.log = function(t, n) {
			if (n === void 0 && (n = "debug"), this._logger.isEnabled) {
				var r = new Date,
					i = "smsdk: ".concat(r.toISOString(), ": ").concat(t);
				this._shouldLogToServer && this.logToServer(i), this._logger.log(n, i)
			}
		}, e.prototype.logToServer = function(t) {
			this.sessionId ? this.sendlogMessage([t]) : this._pendingLog.push(t)
		}, e.prototype.sendlogMessage = function(t) {
			if (this._sessionId && t && t.length > 0) {
				var n = {
					category: "diagnostics",
					kind: "event",
					name: "log",
					body: {
						name: "browser",
						text: t
					}
				};
				this.sendMessage(n)
			}
		}, e.prototype.connect = function(t) {
			return de(this, void 0, void 0, function() {
				var n, r, i = this;
				return he(this, function(o) {
					return n = new mn, this._closed = !1, t && (this._connectUserText = t), this._serverUri && (this._serverUri.startsWith("ws:") || this._serverUri.startsWith("wss:")) ? (this.selectUserMedia(this._requestedUserMedia, this._requiredUserMedia, n, this.getUserMediaSuccess.bind(this)), [2, n.promise]) : (r = new XMLHttpRequest, r.open("GET", "/api/jwt" + window.location.search), r.onreadystatechange = function(s) {
						return de(i, void 0, void 0, function() {
							var a;
							return he(this, function(l) {
								return r.readyState === XMLHttpRequest.DONE && (r.status === 200 ? (this.log("JWT request returned: ".concat(r.responseText)), a = JSON.parse(r.responseText), this._serverUri = a.url, this._accessToken = a.jwt, this.selectUserMedia(this._requestedUserMedia, this._requiredUserMedia, n, this.getUserMediaSuccess.bind(this))) : (this.log("JWT Request failed, status: ".concat(r.statusText), "error"), n.reject(ue("Failed to acquire jwt at /api/jwt", "noServer")))), [2]
							})
						})
					}, r.send(), [2, n.promise])
				})
			})
		}, e.prototype.webcamRequested = function(t, n) {
			return !this._audioOnly && [G.MicrophoneAndCamera, G.Camera].some(function(r) {
				return [t, n].includes(r)
			})
		}, e.prototype.micRequested = function(t, n) {
			return [G.Microphone, G.MicrophoneAndCamera].some(function(r) {
				return [t, n].includes(r)
			})
		}, e.prototype.getMediaConstraints = function(t, n) {
			var r = navigator.mediaDevices.getSupportedConstraints();
			return this.log("Browser supports media constraints: ".concat(r)), {
				audio: this.micRequested(t, n) ? this.buildAudioOptions() : !1,
				video: this.webcamRequested(t, n) ? this._videoOptions : !1
			}
		}, e.prototype.buildAudioOptions = function() {
			var t = navigator.mediaDevices.getSupportedConstraints(),
				n = tt({}, this._audioOptions);
			return Object.keys(n).forEach(function(r) {
				t[r] || delete n[r]
			}), n
		}, e.prototype.selectUserMedia = function(t, n, r, i) {
			var o = this;
			if (t === G.None && n === G.None) {
				i(null, r);
				return
			}
			if (navigator.mediaDevices.getUserMedia) {
				var s = this.getMediaConstraints(t, n);
				this.log("Best video constraints: ".concat(s)), navigator.mediaDevices.getUserMedia(s).then(function(a) {
					i(a, r)
				}).catch(function(a) {
					n === t ? (o.log("getUserMedia could not get required media, error given: ".concat(a), "error"), r.reject(o.MakeErrorForUserMedia(a))) : n !== G.None ? o.getUserMediaRequiredOnlyFallback(n, r, i) : t === G.MicrophoneAndCamera ? o.getUserMediaAudioOnlyFallback(r, i) : i(null, r)
				})
			} else r.reject(ue("Your browser does not support getUserMedia API", "notSupported"))
		}, e.prototype.getUserMediaRequiredOnlyFallback = function(t, n, r) {
			var i = this;
			this.log("Retrying with required media only");
			var o = this.getMediaConstraints(G.None, t);
			return this.log("Attempt constraints: ".concat(o)), navigator.mediaDevices.getUserMedia(o).then(function(s) {
				r(s, n)
			}).catch(function(s) {
				i.log("getUserMedia could not get required media, error given: ".concat(s), "error"), n.reject(i.MakeErrorForUserMedia(s))
			})
		}, e.prototype.getUserMediaAudioOnlyFallback = function(t, n) {
			var r = this;
			this.log("Retrying with microphone only");
			var i = {
				video: !1,
				audio: this.buildAudioOptions()
			};
			return this.log("Attempt constraints: ".concat(i)), navigator.mediaDevices.getUserMedia(i).then(function(o) {
				n(o, t)
			}).catch(function(o) {
				r.log("getUserMedia could not get microphone audio, error given: ".concat(o), "error"), n(null, t)
			})
		}, e.prototype.MakeErrorForUserMedia = function(t) {
			var n = "noUserMedia";
			return ue(t.message, n)
		}, e.prototype.getUserMediaSuccess = function(t, n) {
			var r = this;
			this.log("Got user media"), this._localStream = t, this.microphoneMuted = !0, this.log("connecting to: ".concat(this._serverUri)), this._accessToken ? this._serverConnection = new WebSocket(this._serverUri + "?access_token=" + this._accessToken) : this._serverConnection = new WebSocket(this._serverUri), this._serverConnection.onmessage = function(i) {
				try {
					r.gotMessageFromServer(i, n)
				} catch (o) {
					r.log("unexpected exception processing received message: ".concat(o), "error")
				}
			}, this._serverConnection.onerror = function(i) {
				n.isPending() && n.reject(ue("websocket failed", "serverConnectionFailed"))
			}, this._serverConnection.onopen = function(i) {
				r.log("Websocket open"), r._connectionState.setConnectionState(nt.SearchingForDigitalPerson)
			}, this._serverConnection.onclose = function(i) {
				r.log("websocket closed: code(".concat(i.code, "), reason(").concat(i.reason, "), clean(").concat(i.wasClean, ")")), n.isRejected || r.close(!1, "normal", n)
			}
		}, e.prototype.hasTurnServer = function(t) {
			var n, r, i, o;
			if (!t) return !1;
			try {
				for (var s = wt(t), a = s.next(); !a.done; a = s.next()) {
					var l = a.value;
					if (!(!l || !l.urls)) try {
						for (var c = (i = void 0, wt(l.urls)), u = c.next(); !u.done; u = c.next()) {
							var f = u.value;
							if (f.indexOf("turn:") === 0) return !0
						}
					} catch (p) {
						i = {
							error: p
						}
					} finally {
						try {
							u && !u.done && (o = c.return) && o.call(c)
						} finally {
							if (i) throw i.error
						}
					}
				}
			} catch (p) {
				n = {
					error: p
				}
			} finally {
				try {
					a && !a.done && (r = s.return) && r.call(s)
				} finally {
					if (n) throw n.error
				}
			}
			return !1
		}, e.prototype.gotMessageFromServer = function(t, n) {
			var r = this,
				i, o, s = t.data;
			this.log("message received: ".concat(s));
			var a = JSON.parse(s),
				l = a.category,
				c = a.name,
				u = a.body;
			if (l !== "webrtc") {
				this._controlConnection !== null && l === "scene" && (this._controlOpen && this._serverConnection.readyState === WebSocket.OPEN ? this._controlConnection.send(s) : this._controlQueue.push(s)), this._onMessage(a);
				return
			}
			if (a.kind === "event")
				if (c === "established") {
					this._connectionState.setConnectionState(nt.DownloadingAssets);
					var f = {
						iceServers: []
					};
					if (u.iceServers && (f.iceServers = u.iceServers, this.hasTurnServer(u.iceServers) && (this.log("Detected turn server, forcing relay mode"), f.iceTransportPolicy = "relay")), this.log("selected ice servers: ".concat(f.iceServers)), u.settings && typeof u.settings.microphoneMuteDelay == "number" && (this._microphoneMuteDelay = u.settings.microphoneMuteDelay), this.log("microphone mute delay after persona speech: ".concat(this._microphoneMuteDelay)), this._shouldLogToServer = (o = (i = u.settings) === null || i === void 0 ? void 0 : i.logToServer) !== null && o !== void 0 ? o : !1, this._peerConnection = new RTCPeerConnection(f), this._peerConnection.onicecandidate = this.gotIceCandidate.bind(this), "ontrack" in this._peerConnection && !this._features.isEdge ? (this._peerConnection.ontrack = function(b) {
							(b.track.kind === "video" || b.track.kind === "audio") && (!r._remoteStream || !r._audioOnly && b.track.kind === "video") && r.onRemoteStream(b.streams[0])
						}, this._videoElement.addEventListener("loadeddata", this.onVideoLoaded.bind(this)), this._removeListeners.push({
							target: this._videoElement,
							name: "loadeddata",
							callback: this.onVideoLoaded
						})) : this._peerConnection.onaddstream = function(b) {
							r.onRemoteStream(b.stream)
						}, this._peerConnection.oniceconnectionstatechange = function(b) {
							r.log("ICE connection state: ".concat(r._peerConnection.iceConnectionState)), r._peerConnection.iceConnectionState === "failed" && (ue("ice connection failed", "mediaStreamFailed"), n && n.isPending() && (r._serverConnection.close(), r._controlConnection && (r._controlConnection.readyState === WebSocket.OPEN || r._controlConnection.readyState === WebSocket.CONNECTING) && r._controlConnection.close(), n.reject(ue("ice connection failed", "mediaStreamFailed"))))
						}, this.log("adding local media stream if any"), this._localStream)
						if (!this._peerConnection.addTrack) this._peerConnection.addStream(this._localStream), this.log("adding local media stream by stream");
						else try {
							this.log("adding local media stream by track"), this._localStream.getTracks().forEach(function(b) {
								r._peerConnection.addTrack(b, r._localStream)
							})
						} catch (b) {
							this.log("error: ".concat(b), "error")
						}
					if (this._peerConnection.addTransceiver("audio", {
							direction: "sendrecv"
						}), this._peerConnection.addTransceiver("video", {
							direction: "sendrecv"
						}), u.resumeSessionId) {
						var p = {
							voiceActivityDetection: !1,
							iceRestart: !0
						};
						this._sessionId = u.resumeSessionId, this._isResumedSession = !0, this.log("established, trying to resume session with session_id = ".concat(u.resumeSessionId)), this.createOffer(this._peerConnection, p).then(function(b) {
							r.createdDescription.bind(r), r.createdDescription(b, "updateOffer")
						}).catch(this._sessionError.bind(this))
					} else {
						var p = {
							voiceActivityDetection: !1,
							iceRestart: !1
						};
						this._isResumedSession = !1, this.createOffer(this._peerConnection, p).then(this.createdDescription.bind(this)).catch(this._sessionError.bind(this))
					}
				} else if (c === "accepted") {
				this._connectionState.setConnectionState(nt.ConnectingToDigitalPerson), this.log("accepted, session_id = ".concat(u.sessionId)), this._sessionId = u.sessionId, this._resumeRequested = u.resumeRequested, this._server = u.server, this._sceneId = u.sceneId;
				for (var h = 0; h < this._outgoingQueue.length; h++) this._outgoingQueue[h].body.sessionId = this._sessionId, this.sendMessage(this._outgoingQueue[h]);
				this._outgoingQueue = [];
				var d = function() {
					r && r.sendCameraRotation()
				};
				window.addEventListener("orientationchange", d), this._removeListeners.push({
					target: window,
					name: "orientationchange",
					callback: d
				}), this.sendCameraRotation();
				var m = document.defaultView || window,
					g = m.getComputedStyle(this._videoElement),
					y = parseInt("".concat(g.width), 10),
					k = parseInt("".concat(g.height), 10);
				this.log("accepted, sending video width/height: ".concat(y, " / ").concat(k)), this.sendVideoBounds(y, k), this.sendlogMessage(this._pendingLog), this._pendingLog = [], u.controlUrl && (this._controlUrl = u.controlUrl, this._controlQueue = [], this._controlOpen = !1, this._controlConnection = new WebSocket(u.controlUrl + "?access_token=" + this._accessToken), this._controlConnection.onmessage = function(b) {
					var A = b.data;
					A && r._serverConnection.readyState === WebSocket.OPEN && r._serverConnection.send(A)
				}, this._controlConnection.onerror = function() {
					r.close(!0, "controlFailed", n)
				}, this._controlConnection.onopen = function(b) {
					if (r.log("control websocket open"), !r._controlOpen) {
						r._controlOpen = !0;
						for (var A = 0; A < r._controlQueue.length; A++) r.log("control websocket now open, forwarding queued message: ".concat(r._controlQueue[A])), r._controlConnection.send(r._controlQueue[A]);
						r._controlQueue = []
					}
				}, this._controlConnection.onclose = function(b) {
					r.log("control closed: code(".concat(b.code, "), reason(").concat(b.reason, "), clean(").concat(b.wasClean, ")")), r.close(!0, "controlDisconnected", n)
				})
			} else if (c === "answer") {
				this.log("set remote description"), this.log(JSON.stringify(u));
				var w = {
					sdp: u.sdp,
					type: "answer"
				};
				this.setRemoteDescription(this._peerConnection, w).then(function() {}).catch(this._sessionError.bind(this))
			} else if (c === "connected") this._remoteStream ? (this._connectionState.setConnectionState(nt.Connected), this.onConnectedSuccess(), n && n.resolve(u.sessionId)) : (this.log("Connected but no remote media stream available"), this._connectPendingRemoteStream = function() {
				r.onConnectedSuccess(), n && n.resolve(u.sessionId)
			});
			else if (c === "ice") {
				this.log("add ice candidate");
				var C = void 0;
				if (u.complete) this._features.isEdge && (C = this._peerConnection.addIceCandidate(new RTCIceCandidate({
					candidate: "",
					sdpMid: "",
					sdpMLineIndex: 0
				})));
				else {
					var E = new RTCIceCandidate({
						candidate: u.candidate,
						sdpMid: u.sdpMid,
						sdpMLineIndex: u.sdpMLineIndex
					});
					C = this._peerConnection.addIceCandidate(E)
				}
				C && C.catch(this._sessionError.bind(this))
			} else if (c === "offer") {
				this._sessionId = u.sessionId;
				var w = {
					sdp: u.sdp,
					type: "offer"
				};
				this.setRemoteDescription(this._peerConnection, w).then(function() {
					return r.createAnswer(r._peerConnection)
				}).then(this.createdDescription.bind(this)).catch(this._sessionError.bind(this))
			} else c === "userText" ? (this.log("rtc - user text message received: ".concat(u.userText)), this._onUserText(u.userText)) : c === "close" && this.close(!1, u.reason, n)
		}, e.prototype.gotIceCandidate = function(t) {
			t.candidate ? (this.log("got local ice candidate"), this.sendRtcEvent("ice", {
				complete: !1,
				candidate: t.candidate.candidate,
				sdpMid: t.candidate.sdpMid,
				sdpMLineIndex: t.candidate.sdpMLineIndex
			})) : (this.log("end ice candidate"), this.sendRtcEvent("ice", {
				complete: !0,
				candidate: "",
				sdpMid: "",
				sdpMLineIndex: 0
			}))
		}, e.prototype.createdDescription = function(t, n) {
			var r = this;
			n === void 0 && (n = "offer"), this.log("got description");
			var i = {
				sdp: t.sdp,
				type: t.type
			};
			this.log(JSON.stringify({
				sdp: i
			})), this.setLocalDescription(this._peerConnection, t).then(function() {
				r.log("send sdp offer to server"), r.sendRtcEvent(n, {
					sdp: r._peerConnection.localDescription ? r._peerConnection.localDescription.sdp : null,
					type: r._peerConnection.localDescription ? r._peerConnection.localDescription.type : null,
					user_text: r._connectUserText,
					features: {
						videoStartedEvent: !0
					}
				})
			}).catch(this._sessionError.bind(this))
		}, e.prototype.onRemoteStream = function(t) {
			this.log("got remote stream"), this._remoteStream = t, this.log("ICE connection state: ".concat(this._peerConnection.iceConnectionState)), this._connectPendingRemoteStream && (this._connectPendingRemoteStream(), this._connectPendingRemoteStream = null)
		}, e.prototype.onConnectedSuccess = function() {
			var t = this,
				n, r;
			this._onConnected(this._resumeRequested, this._isResumedSession, this._server, this.sessionId), this._videoElement.hidden = !1, this._videoElement.srcObject = this._remoteStream;
			var i = function(o) {
				return de(t, void 0, void 0, function() {
					return he(this, function(s) {
						return this._remoteStream && this._remoteStream.addTrack(o.track), [2]
					})
				})
			};
			this._peerConnection.addEventListener("track", i), this._removeListeners.push({
				target: this._peerConnection,
				name: "track",
				callback: i
			}), this.log("video enabled"), this.sendUserCamera(), (n = this._onMicrophoneActive) === null || n === void 0 || n.call(this.isMicrophoneActive()), (r = this._onCameraActive) === null || r === void 0 || r.call(this.isCameraActive())
		}, e.prototype.onVideoLoaded = function(t) {
			var n = this;
			this.log("video has loaded");
			var r = function() {
				n.log("video has started playing"), n.sendRtcEvent("videoStarted", {}), n.microphoneMuted = !1
			};
			if (!this._videoElement.muted) {
				r();
				return
			}
			var i = function() {
				r(), n._videoElement.removeEventListener("volumechange", i)
			};
			this._videoElement.addEventListener("volumechange", i, !1)
		}, e.prototype.sendRtcEvent = function(t, n) {
			if (this._serverConnection !== null) {
				this._sessionId && (n.sessionId = this._sessionId);
				var r = {
					category: "webrtc",
					kind: "event",
					name: t,
					body: n
				};
				this._sessionId || t === "offer" ? this.sendMessage(r) : this._outgoingQueue.push(r)
			}
		}, e.prototype.sendVideoBounds = function(t, n) {
			this.sendRtcEvent("videoBounds", {
				width: t,
				height: n
			})
		}, e.prototype.sendUserCamera = function(t) {
			var n = {
				active: this.isCameraActive()
			};
			t !== void 0 && (n.rotation = t), this.sendRtcEvent("userCamera", n)
		}, e.prototype.sendCameraRotation = function() {
			if (this._features.isIos) {
				var t = window.orientation;
				this.log("send updated camera rotation, device orientation: ".concat(t));
				var n = 0;
				t === 0 ? n = 90 : t === 90 ? n = 180 : t === 180 ? n = 270 : t === -90 && (n = 0), this.sendUserCamera(n)
			}
		}, e.prototype.sendMessage = function(t) {
			!this._serverConnection || (this._serverConnection.readyState === WebSocket.OPEN ? this._serverConnection.send(JSON.stringify(t)) : this.log("server connection not ready, discarding message: ".concat(t)))
		}, e.prototype.sendUserText = function(t) {
			this.sendRtcEvent("userText", {
				userText: t
			})
		}, e.prototype.hasCamera = function(t) {
			return t === G.Camera || t === G.MicrophoneAndCamera
		}, e.prototype.hasMicrophone = function(t) {
			return t === G.Microphone || t === G.MicrophoneAndCamera
		}, e.prototype.makeUserMedia = function(t, n) {
			return t && n ? G.MicrophoneAndCamera : t ? G.Microphone : n ? G.Camera : G.None
		}, e.prototype.findSenderTrackByKind = function(t) {
			var n, r, i;
			if (!this._peerConnection) return null;
			var o = this._peerConnection.getSenders();
			try {
				for (var s = wt(o), a = s.next(); !a.done; a = s.next()) {
					var l = a.value;
					if (l.track && ((i = l.track) === null || i === void 0 ? void 0 : i.kind) === t) return l.track
				}
			} catch (c) {
				n = {
					error: c
				}
			} finally {
				try {
					a && !a.done && (r = s.return) && r.call(s)
				} finally {
					if (n) throw n.error
				}
			}
			return null
		}, e.prototype.findSenderByKind = function(t) {
			var n, r, i, o, s, a;
			if (!this._peerConnection) return null;
			try {
				for (var l = wt(this._peerConnection.getTransceivers()), c = l.next(); !c.done; c = l.next()) {
					var u = c.value;
					if (u.direction === "sendrecv" && ((a = (s = u.receiver) === null || s === void 0 ? void 0 : s.track) === null || a === void 0 ? void 0 : a.kind) === t) return u.sender
				}
			} catch (d) {
				n = {
					error: d
				}
			} finally {
				try {
					c && !c.done && (r = l.return) && r.call(l)
				} finally {
					if (n) throw n.error
				}
			}
			try {
				for (var f = wt(this._peerConnection.getSenders()), p = f.next(); !p.done; p = f.next()) {
					var h = p.value;
					if (h.track === null || h.track.kind === t) return h
				}
			} catch (d) {
				i = {
					error: d
				}
			} finally {
				try {
					p && !p.done && (o = f.return) && o.call(f)
				} finally {
					if (i) throw i.error
				}
			}
			return null
		}, e.prototype.processChangeUserMediaQueue = function() {
			var t, n, r, i;
			return de(this, void 0, void 0, function() {
				var o, s, a, l;
				return he(this, function(c) {
					switch (c.label) {
						case 0:
							if (o = this._changeUserMediaQueue.length > 0 ? this._changeUserMediaQueue[0] : void 0, !o) return [3, 5];
							c.label = 1;
						case 1:
							return c.trys.push([1, 3, , 4]), s = this.isMicrophoneActive(), a = this.isCameraActive(), [4, this.changeUserMediaInternal(this.makeUserMedia((t = o.microphone) !== null && t !== void 0 ? t : s, (n = o.camera) !== null && n !== void 0 ? n : a))];
						case 2:
							return c.sent(), o.microphone !== void 0 && o.microphone !== s && ((r = this._onMicrophoneActive) === null || r === void 0 || r.call(this.isMicrophoneActive())), o.camera !== void 0 && o.camera !== a && ((i = this._onCameraActive) === null || i === void 0 || i.call(this.isCameraActive())), o.deferred.resolve(), [3, 4];
						case 3:
							return l = c.sent(), o.deferred.reject(l), [3, 4];
						case 4:
							this._changeUserMediaQueue.shift(), c.label = 5;
						case 5:
							if (o) return [3, 0];
							c.label = 6;
						case 6:
							return [2]
					}
				})
			})
		}, e.prototype.changeUserMediaInternal = function(t) {
			return de(this, void 0, void 0, function() {
				var n, r, i, o, s, a, l, c = this;
				return he(this, function(u) {
					switch (u.label) {
						case 0:
							return n = this.findSenderTrackByKind("audio"), r = this.findSenderTrackByKind("video"), i = this.hasMicrophone(t) && (!n || n.readyState === "ended"), o = this.hasCamera(t) && (!r || r.readyState === "ended"), s = null, i || o ? (a = this.makeUserMedia(i, o), l = new mn, this.selectUserMedia(a, a, l, function(f, p) {
								return de(c, void 0, void 0, function() {
									return he(this, function(h) {
										return s = f, p.resolve(), [2]
									})
								})
							}), [4, l.promise]) : [3, 2];
						case 1:
							u.sent(), this._localStream || (this._localStream = new MediaStream), u.label = 2;
						case 2:
							return [4, this.updateSenderTrack("audio", this.hasMicrophone(t), s)];
						case 3:
							return u.sent(), [4, this.updateSenderTrack("video", this.hasCamera(t), s)];
						case 4:
							return u.sent(), this.sendUserCamera(), [2]
					}
				})
			})
		}, e.prototype.updateSenderTrack = function(t, n, r) {
			var i, o;
			return de(this, void 0, void 0, function() {
				var s, a, l, c;
				return he(this, function(u) {
					switch (u.label) {
						case 0:
							if (s = this.findSenderByKind(t), a = s == null ? void 0 : s.track, !(!!s && (!a || n !== a.enabled))) return [3, 7];
							if (this.log("new user " + t + " active state = " + n), !n) return [3, 6];
							u.label = 1;
						case 1:
							return u.trys.push([1, 4, , 5]), a && ((i = this._localStream) === null || i === void 0 || i.removeTrack(a)), r ? (l = this.getTrackByKind(r, t), l ? ((o = this._localStream) === null || o === void 0 || o.addTrack(l), s.track === l ? [3, 3] : (this.log("replacing user " + t + " track"), [4, s.replaceTrack(l)])) : [3, 3]) : [3, 3];
						case 2:
							u.sent(), u.label = 3;
						case 3:
							return [3, 5];
						case 4:
							throw c = u.sent(), this.log("failed to get user ".concat(t, " track, error: ").concat(c), "error"), ue("failed to get user " + t + ": " + c, "failedUpgrade");
						case 5:
							return [3, 7];
						case 6:
							a && (a.enabled = !1, a.stop()), u.label = 7;
						case 7:
							return [2]
					}
				})
			})
		}, e.prototype.getTrackByKind = function(t, n) {
			var r, i;
			if (t) try {
				for (var o = wt(t.getTracks()), s = o.next(); !s.done; s = o.next()) {
					var a = s.value;
					if (a.kind === n) return a
				}
			} catch (l) {
				r = {
					error: l
				}
			} finally {
				try {
					s && !s.done && (i = o.return) && i.call(o)
				} finally {
					if (r) throw r.error
				}
			}
		}, e.prototype.isSenderTrackEnabled = function(t) {
			var n = this.findSenderTrackByKind(t);
			return Boolean(n == null ? void 0 : n.enabled)
		}, e.prototype.isMicrophoneActive = function() {
			return this.isSenderTrackEnabled("audio")
		}, e.prototype.isCameraActive = function() {
			return this.isSenderTrackEnabled("video")
		}, e.prototype.setMediaDeviceActive = function(t) {
			var n = t.microphone,
				r = t.camera;
			return de(this, void 0, void 0, function() {
				var i;
				return he(this, function(o) {
					return i = new mn, this._changeUserMediaQueue.push({
						microphone: n,
						camera: r,
						deferred: i
					}), this._changeUserMediaQueue.length === 1 && this.processChangeUserMediaQueue(), [2, i.promise]
				})
			})
		}, e.prototype.close = function(t, n, r) {
			var i, o;
			if (t === void 0 && (t = !0), n === void 0 && (n = "normal"), !this._closed) {
				if (this._closed = !0, this._peerConnection) try {
					this._peerConnection.close()
				} catch (f) {
					this.log("error: ".concat(f), "error")
				}
				if (this._localStream) try {
					var s = this._localStream.getTracks();
					for (var a in s) s[a].stop()
				} catch (f) {
					this.log("error: ".concat(f), "error")
				}
				t && this.sendRtcEvent("close", {
					reason: "normal"
				}), r && (r.isResolved() ? this._onClose(n) : r.reject(ue("websocket closed: " + n, n))), this._serverConnection && (this.log("closing server connection"), this._serverConnection.close()), this._controlConnection && this._controlConnection.close();
				try {
					for (var l = wt(this._removeListeners), c = l.next(); !c.done; c = l.next()) {
						var u = c.value;
						u.target.removeEventListener(u.name, u.callback)
					}
				} catch (f) {
					i = {
						error: f
					}
				} finally {
					try {
						c && !c.done && (o = l.return) && o.call(l)
					} finally {
						if (i) throw i.error
					}
				}
			}
		}, e.prototype.createOffer = function(t, n) {
			return t.createOffer(n)
		}, e.prototype.setRemoteDescription = function(t, n) {
			return t.setRemoteDescription(n)
		}, e.prototype.setLocalDescription = function(t, n) {
			return t.setLocalDescription(n)
		}, e.prototype.createAnswer = function(t) {
			return t.createAnswer()
		}, Object.defineProperty(e.prototype, "peerConnection", {
			get: function() {
				return this._peerConnection
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "serverConnection", {
			get: function() {
				return this._serverConnection
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "sessionId", {
			get: function() {
				return this._sessionId
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "server", {
			get: function() {
				return this._server
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "sceneId", {
			get: function() {
				return this._sceneId
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "isMicrophoneConnected", {
			get: function() {
				return !!this.findSenderTrackByKind("audio")
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "isCameraConnected", {
			get: function() {
				return !!this.findSenderTrackByKind("video")
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "features", {
			get: function() {
				return this._features
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "microphoneMuteDelay", {
			get: function() {
				return this._microphoneMuteDelay
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "userMediaStream", {
			get: function() {
				return this._localStream
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "microphoneMuted", {
			get: function() {
				if (!this._localStream) return !0;
				var t = this._localStream.getAudioTracks();
				return !t || t.length < 1 ? !0 : !t[0].enabled
			},
			set: function(t) {
				var n, r;
				if (!!this._localStream) {
					var i = this._localStream.getAudioTracks();
					if (!(!i || i.length < 1)) {
						var o = this.findSenderByKind("audio");
						if (((n = o == null ? void 0 : o.track) === null || n === void 0 ? void 0 : n.readyState) === "live" && o.track === i[0]) {
							var s = !t;
							i[0].enabled = s, this.log("microphone muted active notification: ".concat(s)), (r = this._onMicrophoneActive) === null || r === void 0 || r.call(s)
						}
					}
				}
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "webcamMuted", {
			get: function() {
				if (!this._localStream) return !0;
				var t = this._localStream.getVideoTracks();
				return !t || t.length < 1 ? !0 : !t[0].enabled
			},
			set: function(t) {
				var n, r;
				if (!!this._localStream) {
					var i = this._localStream.getVideoTracks();
					if (!(!i || i.length < 1)) {
						var o = this.findSenderByKind("video");
						if (((n = o == null ? void 0 : o.track) === null || n === void 0 ? void 0 : n.readyState) === "live" && o.track === i[0]) {
							var s = !t;
							i[0].enabled = s, (r = this._onCameraActive) === null || r === void 0 || r.call(s)
						}
					}
				}
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "offsetX", {
			get: function() {
				return 0
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "offsetY", {
			get: function() {
				return 0
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "microphoneActiveCallbacks", {
			set: function(t) {
				this._onMicrophoneActive = t
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "cameraActiveCallbacks", {
			set: function(t) {
				this._onCameraActive = t
			},
			enumerable: !1,
			configurable: !0
		}), e
	}(),
	tf = function() {
		function e(t, n, r) {
			r === void 0 && (r = new Et);
			var i = this;
			this.logger = r, this._outgoingQueue = [], this._onConnectedStorage = function(o, s, a, l) {}, this._pendingLog = [], this._closed = !1, this._shouldLogToServer = !1, this._serverUri = t, this._accessToken = n, this._onClose = function(o) {}, this._onMessage = function(o) {}, this._sessionError = function(o) {
				i.logger.log("error", "session error: ".concat(o))
			}, this._features = new Er
		}
		return Object.defineProperty(e.prototype, "onConnected", {
			set: function(t) {
				this._onConnectedStorage = t
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "onClose", {
			set: function(t) {
				this._onClose = t
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "onMessage", {
			set: function(t) {
				this._onMessage = t
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "loggingEnabled", {
			get: function() {
				return this.logger.isEnabled
			},
			set: function(t) {
				this.logger.log("warn", "loggingEnabled is deprecated and will be removed in a future version. Please use setLogging(boolean)"), this.logger.enableLogging(t)
			},
			enumerable: !1,
			configurable: !0
		}), e.prototype.setMinLogLevel = function(t) {
			this.logger.setMinLogLevel(t)
		}, e.prototype.setLogging = function(t) {
			this.logger.enableLogging(t)
		}, e.prototype.log = function(t) {
			this.loggingEnabled && (this._shouldLogToServer ? this.logToServer(t) : this.logger.log("log", t))
		}, e.prototype.logToServer = function(t) {
			this.sessionId ? this.sendlogMessage([t]) : this._pendingLog.push(t)
		}, e.prototype.sendlogMessage = function(t) {
			if (this._sessionId && t && t.length > 0) {
				var n = {
					category: "diagnostics",
					kind: "event",
					name: "log",
					body: {
						name: "browser",
						text: t
					}
				};
				this.sendMessage(n)
			}
		}, e.prototype.connect = function() {
			return de(this, void 0, void 0, function() {
				var t;
				return he(this, function(n) {
					return t = new mn, this._closed = !1, this._serverUri && (this._serverUri.startsWith("ws:") || this._serverUri.startsWith("wss:")) && this.connectByWebSocket(t), [2, t.promise]
				})
			})
		}, e.prototype.connectByWebSocket = function(t) {
			var n = this;
			this.log("connecting to: ".concat(this._serverUri)), this._accessToken ? this._serverConnection = new WebSocket(this._serverUri + "?access_token=" + this._accessToken) : this._serverConnection = new WebSocket(this._serverUri), this._serverConnection.onmessage = function(r) {
				n.gotMessageFromServer(r, t)
			}, this._serverConnection.onerror = function(r) {
				t.isPending() && t.reject(ue("websocket failed", "serverConnectionFailed"))
			}, this._serverConnection.onopen = function(r) {
				n.log("websocket open"), t.resolve()
			}, this._serverConnection.onclose = function(r) {
				n.log("websocket closed: code(".concat(r.code, "), reason(").concat(r.reason, "), clean(").concat(r.wasClean, ")")), t.isRejected || n.close(!1, "normal", t)
			}
		}, e.prototype.gotMessageFromServer = function(t, n) {
			var r = t.data;
			this.log("message received: ".concat(r));
			var i = JSON.parse(r),
				o = i.category,
				s = i.name,
				a = i.body;
			if (o !== "webrtc") {
				this._onMessage(i);
				return
			}
			if (i.kind === "event")
				if (s === "accepted") {
					this.log("accepted, session_id = ".concat(a.sessionId)), this._sessionId = a.sessionId;
					for (var l = 0; l < this._outgoingQueue.length; l++) this._outgoingQueue[l].body.sessionId = this._sessionId, this.sendMessage(this._outgoingQueue[l]);
					this._outgoingQueue = [], this.sendlogMessage(this._pendingLog), this._pendingLog = []
				} else s === "close" && this.close(!1, a.reason, n)
		}, e.prototype.sendMessage = function(t) {
			!this._serverConnection || (this._serverConnection.readyState === WebSocket.OPEN ? this._serverConnection.send(JSON.stringify(t)) : this.log("not ready, discarding message: ".concat(t)))
		}, e.prototype.close = function(t, n, r) {
			n === void 0 && (n = "normal"), !this._closed && (this._closed = !0, r && (r.isResolved() ? this._onClose(n) : r.reject(ue("websocket closed: " + n, n))), this._serverConnection && (this.log("closing server connection"), this._serverConnection.close()))
		}, Object.defineProperty(e.prototype, "serverConnection", {
			get: function() {
				return this._serverConnection
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "sessionId", {
			get: function() {
				return this._sessionId
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "peerConnection", {
			get: function() {
				return null
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "features", {
			get: function() {
				return this._features
			},
			enumerable: !1,
			configurable: !0
		}), e.prototype.sendRtcEvent = function(t, n) {}, e.prototype.sendVideoBounds = function(t, n) {}, e.prototype.sendUserText = function(t) {
			this.logger.log("error", "WebSocketSession discarding text: " + t)
		}, Object.defineProperty(e.prototype, "microphoneMuteDelay", {
			get: function() {},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "microphoneMuted", {
			get: function() {
				return null
			},
			set: function(t) {},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "onUserText", {
			set: function(t) {},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "isMicrophoneConnected", {
			get: function() {
				return null
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "isCameraConnected", {
			get: function() {
				return null
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "offsetX", {
			get: function() {
				return 0
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "offsetY", {
			get: function() {
				return 0
			},
			enumerable: !1,
			configurable: !0
		}), e.prototype.isMicrophoneActive = function() {
			return !1
		}, e.prototype.isCameraActive = function() {
			return !1
		}, e.prototype.setMediaDeviceActive = function(t) {
			return t.microphone, t.camera, de(this, void 0, void 0, function() {
				return he(this, function(n) {
					throw ue("setMediaDeviceActive not supported on WebSocketSession", "notSupported")
				})
			})
		}, e
	}(),
	pr;
(function(e) {
	e.Scene = "scene"
})(pr || (pr = {}));
var gn;
(function(e) {
	e.Response = "response", e.Request = "request"
})(gn || (gn = {}));
var Cn;
(function(e) {
	e.Idle = "idle", e.Animating = "animating", e.Speaking = "speaking"
})(Cn || (Cn = {}));
var mr;
(function(e) {
	e.UI_CONTENT_AWARENESS = "UI_CONTENT_AWARENESS", e.UI_SDK_CAMERA_CONTROL = "UI_SDK_CAMERA_CONTROL"
})(mr || (mr = {}));
var Tt = [],
	nf = function() {
		return Tt.some(function(e) {
			return e.activeTargets.length > 0
		})
	},
	rf = function() {
		return Tt.some(function(e) {
			return e.skippedTargets.length > 0
		})
	},
	Jo = "ResizeObserver loop completed with undelivered notifications.",
	of = function() {
		var e;
		typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
			message: Jo
		}) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = Jo), window.dispatchEvent(e)
	},
	Sn;
(function(e) {
	e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box"
})(Sn || (Sn = {}));
var At = function(e) {
		return Object.freeze(e)
	},
	sf = function() {
		function e(t, n) {
			this.inlineSize = t, this.blockSize = n, At(this)
		}
		return e
	}(),
	vl = function() {
		function e(t, n, r, i) {
			return this.x = t, this.y = n, this.width = r, this.height = i, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, At(this)
		}
		return e.prototype.toJSON = function() {
			var t = this,
				n = t.x,
				r = t.y,
				i = t.top,
				o = t.right,
				s = t.bottom,
				a = t.left,
				l = t.width,
				c = t.height;
			return {
				x: n,
				y: r,
				top: i,
				right: o,
				bottom: s,
				left: a,
				width: l,
				height: c
			}
		}, e.fromRect = function(t) {
			return new e(t.x, t.y, t.width, t.height)
		}, e
	}(),
	co = function(e) {
		return e instanceof SVGElement && "getBBox" in e
	},
	_l = function(e) {
		if (co(e)) {
			var t = e.getBBox(),
				n = t.width,
				r = t.height;
			return !n && !r
		}
		var i = e,
			o = i.offsetWidth,
			s = i.offsetHeight;
		return !(o || s || e.getClientRects().length)
	},
	es = function(e) {
		var t, n;
		if (e instanceof Element) return !0;
		var r = (n = (t = e) === null || t === void 0 ? void 0 : t.ownerDocument) === null || n === void 0 ? void 0 : n.defaultView;
		return !!(r && e instanceof r.Element)
	},
	af = function(e) {
		switch (e.tagName) {
			case "INPUT":
				if (e.type !== "image") break;
			case "VIDEO":
			case "AUDIO":
			case "EMBED":
			case "OBJECT":
			case "CANVAS":
			case "IFRAME":
			case "IMG":
				return !0
		}
		return !1
	},
	yn = typeof window != "undefined" ? window : {},
	qn = new WeakMap,
	ts = /auto|scroll/,
	lf = /^tb|vertical/,
	uf = /msie|trident/i.test(yn.navigator && yn.navigator.userAgent),
	Ze = function(e) {
		return parseFloat(e || "0")
	},
	Ft = function(e, t, n) {
		return e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = !1), new sf((n ? t : e) || 0, (n ? e : t) || 0)
	},
	ns = At({
		devicePixelContentBoxSize: Ft(),
		borderBoxSize: Ft(),
		contentBoxSize: Ft(),
		contentRect: new vl(0, 0, 0, 0)
	}),
	wl = function(e, t) {
		if (t === void 0 && (t = !1), qn.has(e) && !t) return qn.get(e);
		if (_l(e)) return qn.set(e, ns), ns;
		var n = getComputedStyle(e),
			r = co(e) && e.ownerSVGElement && e.getBBox(),
			i = !uf && n.boxSizing === "border-box",
			o = lf.test(n.writingMode || ""),
			s = !r && ts.test(n.overflowY || ""),
			a = !r && ts.test(n.overflowX || ""),
			l = r ? 0 : Ze(n.paddingTop),
			c = r ? 0 : Ze(n.paddingRight),
			u = r ? 0 : Ze(n.paddingBottom),
			f = r ? 0 : Ze(n.paddingLeft),
			p = r ? 0 : Ze(n.borderTopWidth),
			h = r ? 0 : Ze(n.borderRightWidth),
			d = r ? 0 : Ze(n.borderBottomWidth),
			m = r ? 0 : Ze(n.borderLeftWidth),
			g = f + c,
			y = l + u,
			k = m + h,
			w = p + d,
			C = a ? e.offsetHeight - w - e.clientHeight : 0,
			E = s ? e.offsetWidth - k - e.clientWidth : 0,
			b = i ? g + k : 0,
			A = i ? y + w : 0,
			R = r ? r.width : Ze(n.width) - b - E,
			F = r ? r.height : Ze(n.height) - A - C,
			z = R + g + E + k,
			O = F + y + C + w,
			L = At({
				devicePixelContentBoxSize: Ft(Math.round(R * devicePixelRatio), Math.round(F * devicePixelRatio), o),
				borderBoxSize: Ft(z, O, o),
				contentBoxSize: Ft(R, F, o),
				contentRect: new vl(f, l, R, F)
			});
		return qn.set(e, L), L
	},
	xl = function(e, t, n) {
		var r = wl(e, n),
			i = r.borderBoxSize,
			o = r.contentBoxSize,
			s = r.devicePixelContentBoxSize;
		switch (t) {
			case Sn.DEVICE_PIXEL_CONTENT_BOX:
				return s;
			case Sn.BORDER_BOX:
				return i;
			default:
				return o
		}
	},
	cf = function() {
		function e(t) {
			var n = wl(t);
			this.target = t, this.contentRect = n.contentRect, this.borderBoxSize = At([n.borderBoxSize]), this.contentBoxSize = At([n.contentBoxSize]), this.devicePixelContentBoxSize = At([n.devicePixelContentBoxSize])
		}
		return e
	}(),
	kl = function(e) {
		if (_l(e)) return 1 / 0;
		for (var t = 0, n = e.parentNode; n;) t += 1, n = n.parentNode;
		return t
	},
	ff = function() {
		var e = 1 / 0,
			t = [];
		Tt.forEach(function(s) {
			if (s.activeTargets.length !== 0) {
				var a = [];
				s.activeTargets.forEach(function(c) {
					var u = new cf(c.target),
						f = kl(c.target);
					a.push(u), c.lastReportedSize = xl(c.target, c.observedBox), f < e && (e = f)
				}), t.push(function() {
					s.callback.call(s.observer, a, s.observer)
				}), s.activeTargets.splice(0, s.activeTargets.length)
			}
		});
		for (var n = 0, r = t; n < r.length; n++) {
			var i = r[n];
			i()
		}
		return e
	},
	rs = function(e) {
		Tt.forEach(function(n) {
			n.activeTargets.splice(0, n.activeTargets.length), n.skippedTargets.splice(0, n.skippedTargets.length), n.observationTargets.forEach(function(i) {
				i.isActive() && (kl(i.target) > e ? n.activeTargets.push(i) : n.skippedTargets.push(i))
			})
		})
	},
	df = function() {
		var e = 0;
		for (rs(e); nf();) e = ff(), rs(e);
		return rf() && of (), e > 0
	},
	ri, Cl = [],
	hf = function() {
		return Cl.splice(0).forEach(function(e) {
			return e()
		})
	},
	pf = function(e) {
		if (!ri) {
			var t = 0,
				n = document.createTextNode(""),
				r = {
					characterData: !0
				};
			new MutationObserver(function() {
				return hf()
			}).observe(n, r), ri = function() {
				n.textContent = "" + (t ? t-- : t++)
			}
		}
		Cl.push(e), ri()
	},
	mf = function(e) {
		pf(function() {
			requestAnimationFrame(e)
		})
	},
	Jn = 0,
	gf = function() {
		return !!Jn
	},
	yf = 250,
	bf = {
		attributes: !0,
		characterData: !0,
		childList: !0,
		subtree: !0
	},
	is = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"],
	os = function(e) {
		return e === void 0 && (e = 0), Date.now() + e
	},
	ii = !1,
	vf = function() {
		function e() {
			var t = this;
			this.stopped = !0, this.listener = function() {
				return t.schedule()
			}
		}
		return e.prototype.run = function(t) {
			var n = this;
			if (t === void 0 && (t = yf), !ii) {
				ii = !0;
				var r = os(t);
				mf(function() {
					var i = !1;
					try {
						i = df()
					} finally {
						if (ii = !1, t = r - os(), !gf()) return;
						i ? n.run(1e3) : t > 0 ? n.run(t) : n.start()
					}
				})
			}
		}, e.prototype.schedule = function() {
			this.stop(), this.run()
		}, e.prototype.observe = function() {
			var t = this,
				n = function() {
					return t.observer && t.observer.observe(document.body, bf)
				};
			document.body ? n() : yn.addEventListener("DOMContentLoaded", n)
		}, e.prototype.start = function() {
			var t = this;
			this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), is.forEach(function(n) {
				return yn.addEventListener(n, t.listener, !0)
			}))
		}, e.prototype.stop = function() {
			var t = this;
			this.stopped || (this.observer && this.observer.disconnect(), is.forEach(function(n) {
				return yn.removeEventListener(n, t.listener, !0)
			}), this.stopped = !0)
		}, e
	}(),
	Pi = new vf,
	ss = function(e) {
		!Jn && e > 0 && Pi.start(), Jn += e, !Jn && Pi.stop()
	},
	_f = function(e) {
		return !co(e) && !af(e) && getComputedStyle(e).display === "inline"
	},
	wf = function() {
		function e(t, n) {
			this.target = t, this.observedBox = n || Sn.CONTENT_BOX, this.lastReportedSize = {
				inlineSize: 0,
				blockSize: 0
			}
		}
		return e.prototype.isActive = function() {
			var t = xl(this.target, this.observedBox, !0);
			return _f(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize
		}, e
	}(),
	xf = function() {
		function e(t, n) {
			this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = n
		}
		return e
	}(),
	Wn = new WeakMap,
	as = function(e, t) {
		for (var n = 0; n < e.length; n += 1)
			if (e[n].target === t) return n;
		return -1
	},
	Qn = function() {
		function e() {}
		return e.connect = function(t, n) {
			var r = new xf(t, n);
			Wn.set(t, r)
		}, e.observe = function(t, n, r) {
			var i = Wn.get(t),
				o = i.observationTargets.length === 0;
			as(i.observationTargets, n) < 0 && (o && Tt.push(i), i.observationTargets.push(new wf(n, r && r.box)), ss(1), Pi.schedule())
		}, e.unobserve = function(t, n) {
			var r = Wn.get(t),
				i = as(r.observationTargets, n),
				o = r.observationTargets.length === 1;
			i >= 0 && (o && Tt.splice(Tt.indexOf(r), 1), r.observationTargets.splice(i, 1), ss(-1))
		}, e.disconnect = function(t) {
			var n = this,
				r = Wn.get(t);
			r.observationTargets.slice().forEach(function(i) {
				return n.unobserve(t, i.target)
			}), r.activeTargets.splice(0, r.activeTargets.length)
		}, e
	}(),
	kf = function() {
		function e(t) {
			if (arguments.length === 0) throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
			if (typeof t != "function") throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
			Qn.connect(this, t)
		}
		return e.prototype.observe = function(t, n) {
			if (arguments.length === 0) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
			if (!es(t)) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
			Qn.observe(this, t, n)
		}, e.prototype.unobserve = function(t) {
			if (arguments.length === 0) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
			if (!es(t)) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
			Qn.unobserve(this, t)
		}, e.prototype.disconnect = function() {
			Qn.disconnect(this)
		}, e.toString = function() {
			return "function ResizeObserver () { [polyfill code] }"
		}, e
	}(),
	Cf = function() {
		return Promise.all(Array.from(document.images).filter(function(e) {
			return !e.complete
		}).map(function(e) {
			return new Promise(function(t) {
				e.onload = t, e.onerror = t
			})
		}))
	},
	Sf = function(e, t) {
		t === void 0 && (t = 500);
		var n = -1;
		return function() {
			n && clearTimeout(n), n = setTimeout(function() {
				return e()
			}, t)
		}
	},
	Ef = function() {
		function e(t, n, r) {
			n === void 0 && (n = 300), r === void 0 && (r = new Et);
			var i = this;
			this.scene = t, this.debounceTime = n, this.logger = r, this.VIDEO_FRAME_STR = "data-sm-video", this.VIDEO_FRAME_STR_BRACKETED = "[".concat(this.VIDEO_FRAME_STR, "]"), this.CONTENT_STR = "data-sm-content", this.CONTENT_STR_BRACKETED = "[".concat(this.CONTENT_STR, "]"), this.CUE_ATTRIBUTES = [this.VIDEO_FRAME_STR, this.CONTENT_STR], this.CUE_ATTRIBUTES_BRACKETED = [this.VIDEO_FRAME_STR_BRACKETED, this.CONTENT_STR_BRACKETED].join(), this.RESIZE_OBSERVER_BOX_OPTIONS = "border-box", this.callMeasure = !1, this.contentCollection = {}, this.videoFrame = null, this.debouncedMeasure = Sf(function() {
				return i.measureInternal()
			}, n), this.resizeObserver = new kf(function() {
				return i.measureDebounced()
			}), this.getInitialElements(), this.mutationObserver = new MutationObserver(function(o) {
				return i.mutationCallback(o)
			}), this.setupEventListeners(), this.observeMutations(), this.measureInternal()
		}
		return e.prototype.isLoggingEnabled = function() {
			return this.logger.isEnabled
		}, e.prototype.setLogging = function(t) {
			this.logger.enableLogging(t)
		}, e.prototype.getMinLogLevel = function() {
			return this.logger.getMinLogLevel()
		}, e.prototype.setMinLogLevel = function(t) {
			this.logger.setMinLogLevel(t)
		}, e.prototype.setupEventListeners = function() {
			var t = this;
			window.addEventListener("resize", function() {
				return t.measureDebounced()
			})
		}, e.prototype.getInitialElements = function() {
			var t = this,
				n = document.querySelector(this.VIDEO_FRAME_STR_BRACKETED),
				r = document.querySelectorAll(this.CONTENT_STR_BRACKETED);
			this.trackVideoElement(n), Array.from(r).map(function(i) {
				return t.trackContentElement(i)
			})
		}, e.prototype.observeMutations = function() {
			var t = document.documentElement || document.body;
			this.mutationObserver.observe(t, {
				attributeFilter: this.CUE_ATTRIBUTES,
				attributeOldValue: !0,
				childList: !0,
				subtree: !0
			})
		}, e.prototype.disconnect = function() {
			var t = this;
			this.mutationObserver.disconnect(), this.resizeObserver.disconnect(), window.removeEventListener("resize", function() {
				return t.measureDebounced()
			}), this.scene.contentAwareness = void 0
		}, e.prototype.reconnect = function() {
			this.scene.contentAwareness = this, this.observeMutations(), this.setupEventListeners(), this.measure()
		}, e.prototype.measure = function() {
			this.measureInternal()
		}, e.prototype.measureDebounced = function() {
			this.debouncedMeasure()
		}, e.prototype.measureInternal = function() {
			if (!this.scene.isConnected()) {
				this.logger.log("error", "ContentAwareness: Scene does not exist or is not connected yet");
				return
			}
			var t = this.measureWindow(),
				n = this.measureVideoFrame(),
				r = this.measureContent();
			if (t && n && r) {
				var i = this.buildUpdateContentAwarenessRequest(t.innerWidth, t.innerHeight, n, r);
				this.scene.sendRequest("updateContentAwareness", i)
			}
		}, e.prototype.measureVideoFrame = function() {
			if (!this.videoFrame) return this.logger.log("error", "ContentAwareness: Unable to find a video element"), null;
			var t = this.videoFrame.getBoundingClientRect();
			return this.invalidDimensions(t) ? (this.logger.log("warn", "ContentAwareness: Video has a zero width and height"), null) : {
				x1: Math.round(t.left),
				x2: Math.round(t.right),
				y1: Math.round(t.top),
				y2: Math.round(t.bottom)
			}
		}, e.prototype.measureContent = function() {
			var t = this,
				n = [];
			return Object.keys(this.contentCollection).map(function(r) {
				var i = t.contentCollection[r],
					o = i.getBoundingClientRect();
				if (t.invalidDimensions(o) && t.logger.log("warn", "ContentAwareness: Element '".concat(r, "' has a zero width and height")), t.invalidContent(o)) {
					t.logger.log("warn", "ContentAwareness: Element '".concat(r, "' is not being tracked")), delete t.contentCollection[r];
					return
				}
				n.push({
					id: r,
					x1: Math.round(o.left),
					x2: Math.round(o.right),
					y1: Math.round(o.top),
					y2: Math.round(o.bottom)
				})
			}), n
		}, e.prototype.invalidDimensions = function(t) {
			return t.width === 0 && t.height === 0
		}, e.prototype.invalidContent = function(t) {
			return t.top === 0 && t.bottom === 0 && t.right === 0 && t.left === 0
		}, e.prototype.measureWindow = function() {
			return {
				innerHeight: Math.round(window.innerHeight),
				innerWidth: Math.round(window.innerWidth)
			}
		}, e.prototype.buildUpdateContentAwarenessRequest = function(t, n, r, i) {
			return {
				viewWidth: t,
				viewHeight: n,
				videoFrame: r,
				content: i
			}
		}, e.prototype.trackVideoElement = function(t) {
			!t || (this.videoFrame && (this.logger.log("warn", "ContentAwareness: Already observing a video element, switching to new video element"), this.untrackVideoElement(this.videoFrame)), this.videoFrame = t, this.resizeObserver.observe(this.videoFrame, {
				box: this.RESIZE_OBSERVER_BOX_OPTIONS
			}))
		}, e.prototype.trackContentElement = function(t) {
			var n = t.getAttribute(this.CONTENT_STR);
			return n ? (this.contentCollection[n] = t, this.resizeObserver.observe(t, {
				box: this.RESIZE_OBSERVER_BOX_OPTIONS
			}), !0) : !1
		}, e.prototype.untrackContentElement = function(t) {
			var n = t.getAttribute(this.CONTENT_STR),
				r = this.contentCollection[n];
			t === r && (delete this.contentCollection[n], this.resizeObserver.unobserve(t))
		}, e.prototype.untrackVideoElement = function(t) {
			this.videoFrame = null, this.resizeObserver.unobserve(t)
		}, e.prototype.mutationCallback = function(t) {
			var n = this,
				r = !1;
			this.callMeasure = !1;
			for (var i = 0; i < t.length; ++i) switch (t[i].type) {
				case "childList": {
					if (t[i].target.nodeType !== Node.ELEMENT_NODE) break;
					this.untrackRemovedNodeWithCUE(t[i].removedNodes), this.trackAddedNodeWithCUE(t[i].addedNodes);
					for (var o = 0; o < t[i].addedNodes.length; o++) try {
						var s = t[i].addedNodes[o];
						if (!s.hasAttribute) continue;
						var a = s.tagName === "IMG",
							l = !!s.querySelector("img");
						if (r = a || l, r) break
					} catch {
						this.logger.log("warn", "ContentAwareness: Failed to track non-element node", t[i].addedNodes[o])
					}
					break
				}
				case "attributes": {
					if (t[i].target.nodeType !== Node.ELEMENT_NODE) break;
					try {
						var s = t[i].target,
							c = t[i].attributeName;
						if (c === this.VIDEO_FRAME_STR) s.hasAttribute(c) ? (this.trackVideoElement(s), this.callMeasure = !0) : this.videoFrame && this.untrackVideoElement(s);
						else if (c === this.CONTENT_STR) {
							var u = s.getAttribute(c),
								f = t[i].oldValue;
							f && (this.resizeObserver.unobserve(this.contentCollection[f]), delete this.contentCollection[f]), u && (this.contentCollection[u] = s, this.resizeObserver.observe(s, {
								box: this.RESIZE_OBSERVER_BOX_OPTIONS
							})), this.callMeasure = !0
						}
						break
					} catch {
						this.logger.log("warn", "ContentAwareness: Failed to track non-element node", t[i].target)
					}
				}
			}
			this.callMeasure && (r ? Cf().then(function() {
				n.measureDebounced()
			}) : this.measureDebounced())
		}, e.prototype.trackAddedNodeWithCUE = function(t) {
			var n = this;
			t.forEach(function(r) {
				try {
					var i = r;
					if (!i.hasAttribute) return;
					i.hasAttribute(n.VIDEO_FRAME_STR) ? (n.trackVideoElement(i), n.callMeasure = !0) : i.hasAttribute(n.CONTENT_STR) && (n.callMeasure = n.trackContentElement(i)), i.querySelector(n.CUE_ATTRIBUTES_BRACKETED) !== null && i.querySelectorAll(n.CUE_ATTRIBUTES_BRACKETED).forEach(function(o) {
						o.hasAttribute(n.VIDEO_FRAME_STR) ? (n.trackVideoElement(o), n.callMeasure = !0) : o.hasAttribute(n.CONTENT_STR) && (n.callMeasure = n.trackContentElement(o))
					})
				} catch {
					n.logger.log("warn", "ContentAwareness: Failed to track non-element node", r)
				}
			})
		}, e.prototype.untrackRemovedNodeWithCUE = function(t) {
			var n = this;
			t.forEach(function(r) {
				try {
					var i = r;
					if (!i.hasAttribute) return;
					i.hasAttribute(n.VIDEO_FRAME_STR) ? n.untrackVideoElement(i) : i.hasAttribute(n.CONTENT_STR) && (n.untrackContentElement(i), n.callMeasure = !0), i.querySelector(n.CUE_ATTRIBUTES_BRACKETED) !== null && i.querySelectorAll(n.CUE_ATTRIBUTES_BRACKETED).forEach(function(o) {
						o.hasAttribute(n.VIDEO_FRAME_STR) ? n.untrackVideoElement(o) : o.hasAttribute(n.CONTENT_STR) && (n.untrackContentElement(o), n.callMeasure = !0)
					})
				} catch {
					n.logger.log("warn", "ContentAwareness: Failed to track non-element node", r)
				}
			})
		}, e
	}(),
	ls = function(e, t) {
		return t === void 0 && (t = G.None), e ? e.camera && e.microphone ? G.MicrophoneAndCamera : e.camera ? G.Camera : e.microphone ? G.Microphone : G.None : t
	},
	bn;
(function(e) {
	e.Showcards = "showcards", e.Hidecards = "hidecards", e.Feature = "feature", e.Marker = "marker"
})(bn || (bn = {}));
var ve;
(function(e) {
	e.dpSpeaking = "dpSpeaking", e.userSpeaking = "userSpeaking", e.dpProcessing = "dpProcessing", e.idle = "idle"
})(ve || (ve = {}));
var Tf = function() {
		function e() {
			this._conversationState = ve.idle, this._userActive = !1, this._onConversationStateUpdated = new je
		}
		return e.prototype.processStateMessage = function(t) {
			if (t && t.persona && Object.keys(t.persona).length > 0) {
				var n = Object.keys(t.persona)[0];
				if (!this._userActive && t.persona[n].speechState) {
					var r = t.persona[n].speechState;
					r === Cn.Idle ? this.setSpeechState(ve.idle) : r === Cn.Speaking && this.setSpeechState(ve.dpSpeaking)
				}
			}
		}, e.prototype.processRecognizeResultsMessage = function(t) {
			this._userActive = !0;
			var n = t.results && t.results.some(function(r) {
				return r.final
			});
			n ? this.setSpeechState(ve.dpProcessing) : this.setSpeechState(ve.userSpeaking), this._userActive = !1
		}, e.prototype.setSpeechState = function(t) {
			this._conversationState !== t && (this._conversationState = t, this._onConversationStateUpdated.call(this._conversationState))
		}, e.prototype.getSpeechState = function() {
			return this._conversationState
		}, Object.defineProperty(e.prototype, "onConversationStateUpdated", {
			get: function() {
				return this._onConversationStateUpdated
			},
			enumerable: !1,
			configurable: !0
		}), e.prototype.reset = function() {
			this._userActive = !1, this._conversationState = ve.idle, this._onConversationStateUpdated.call(this._conversationState)
		}, e
	}(),
	Af = function() {
		function e(t, n) {
			t === void 0 && (t = new Et), n === void 0 && (n = new Tf), this.logger = t, this.conversationState = n, this._onCardChanged = new je, this._autoClearCards = !1, this.cardData = new Map, this.activeCardIds = new Set
		}
		return e.prototype.processStateMessage = function(t) {
			this.conversationState.processStateMessage(t)
		}, e.prototype.processRecognizeResultsMessage = function(t) {
			this.conversationState.processRecognizeResultsMessage(t)
		}, Object.defineProperty(e.prototype, "onConversationStateUpdated", {
			get: function() {
				return this.conversationState.onConversationStateUpdated
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "autoClearCards", {
			set: function(t) {
				this._autoClearCards = t
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "onCardChanged", {
			get: function() {
				return this._onCardChanged
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "activeCards", {
			get: function() {
				var t = this,
					n = [];
				return this.activeCardIds.forEach(function(r) {
					var i = t.cardData.get(r);
					i ? n.push(tt(tt({}, i), {
						id: r
					})) : t.logger.log("error", "card data for ".concat(r, " does not exist"))
				}), n
			},
			enumerable: !1,
			configurable: !0
		}), e.prototype.onSpeechMarker = function(t) {
			var n = t.arguments;
			t.name === bn.Showcards ? this.addActiveCardIds(n) : t.name === bn.Hidecards && this.removeActiveCards(n), n.length === 0 && t.name === bn.Hidecards && this.clearActiveCards()
		}, e.prototype.onConversationResult = function(t) {
			var n = this,
				r = this.formatMessageBody(t);
			this._autoClearCards && this.clearActiveCards(), r.map(function(i) {
				var o = i.id,
					s = i.data;
				n.cardData.set(o, s)
			})
		}, e.prototype.reset = function() {
			this.clearActiveCards(), this.cardData.clear(), this.conversationState.reset()
		}, e.prototype.clearActiveCards = function() {
			this.activeCardIds.clear(), this.onCardChanged.call(this.activeCards)
		}, e.prototype.formatMessageBody = function(t) {
			var n, r = (n = t.provider.meta.dialogflow) === null || n === void 0 ? void 0 : n.queryResult.fulfillmentMessages,
				i = r == null ? void 0 : r.find(function(o) {
					return Boolean(o == null ? void 0 : o.payload)
				});
			return i ? this.formatDialogflow(i) : this.formatContextData(t.output.context)
		}, e.prototype.formatDialogflow = function(t) {
			var n = this,
				r = t.payload.soulmachines;
			return Object.keys(r).map(function(i) {
				return {
					id: i,
					data: n.formatCardData(r[i])
				}
			})
		}, e.prototype.formatContextData = function(t) {
			var n = this;
			return this.allowedIds(t).map(function(r) {
				var i = r.replace("public-", "");
				return {
					id: i,
					data: n.formatCardData(t[r])
				}
			})
		}, e.prototype.allowedIds = function(t) {
			return Object.keys(t).filter(function(n) {
				return /public-/.test(n) === !0
			}).filter(function(n) {
				return /\.original/gm.test(n) === !1
			})
		}, e.prototype.addActiveCardIds = function(t) {
			this.activeCardIds = new Set(Ii(Ii([], Mi(this.activeCardIds), !1), Mi(t), !1)), this.onCardChanged.call(this.activeCards)
		}, e.prototype.removeActiveCards = function(t) {
			var n = this;
			t.forEach(function(r) {
				return n.activeCardIds.delete(r)
			}), this.onCardChanged.call(this.activeCards)
		}, e.prototype.formatCardData = function(t) {
			var n = typeof t == "string" ? JSON.parse(t) : t,
				r = n.component,
				i = n.type,
				o = Kc(n, ["component", "type"]);
			return tt({
				type: i || r
			}, o)
		}, e
	}(),
	Of = function() {
		function e(t) {
			var n = this;
			this.scene = t, this._previousUrl = window.location.href, this._observer = new MutationObserver(function() {
				return n.observeDocumentChanges()
			})
		}
		return e.prototype.observeUrlChanges = function() {
			this._observer.observe(document, {
				subtree: !0,
				childList: !0
			})
		}, e.prototype.disconnect = function() {
			this._observer.disconnect()
		}, e.prototype.send = function() {
			var t = {
				personaId: this.scene.currentPersonaId,
				text: Ri.PAGE_METADATA,
				variables: {
					pageUrl: window.location.href.split("?")[0]
				},
				optionalArgs: {}
			};
			this.scene.sendRequest("conversationSend", t)
		}, e.prototype.observeDocumentChanges = function() {
			window.location.href !== this._previousUrl && (this._previousUrl = window.location.href, this.send())
		}, e
	}(),
	oi = Object.keys(nt).length,
	Mf = function() {
		function e() {
			this._connectionState = {
				name: nt.Disconnected,
				totalSteps: oi,
				currentStep: 0,
				percentageLoaded: 0
			}, this._onConnectionStateUpdated = new je
		}
		return e.prototype.setConnectionState = function(t) {
			if (this._connectionState.name !== t) {
				var n = Object.keys(nt).indexOf(t),
					r = {
						name: t,
						currentStep: n,
						totalSteps: oi,
						percentageLoaded: 100 / (oi - 1) * n
					};
				this._connectionState = r, this._onConnectionStateUpdated.call(r)
			}
		}, e.prototype.getConnectionState = function() {
			return this._connectionState
		}, Object.defineProperty(e.prototype, "onConnectionStateUpdated", {
			get: function() {
				return this._onConnectionStateUpdated
			},
			enumerable: !1,
			configurable: !0
		}), e.prototype.reset = function() {
			this.setConnectionState(nt.Disconnected)
		}, e
	}();

function If(e) {
	return new Promise(function(t) {
		return setTimeout(function() {
			return t()
		}, e)
	})
}
var Rf = 50,
	Pf = 200,
	Lf = 1;

function Df(e, t, n) {
	return t === void 0 && (t = {}), de(this, void 0, void 0, function() {
		var r, i, o, s, a, l;
		return he(this, function(c) {
			switch (c.label) {
				case 0:
					r = [], i = t.maxRetries || Rf, o = t.delayMs || Pf, a = 0, c.label = 1;
				case 1:
					if (!(a < i)) return [3, 8];
					c.label = 2;
				case 2:
					return c.trys.push([2, 4, , 6]), [4, e()];
				case 3:
					return s = c.sent(), n.connectionResult = {
						message: "success",
						value: s,
						retries: r
					}, [3, 6];
				case 4:
					if (l = c.sent(), r.push(l), n.connectionResult = {
							message: "failed",
							retries: r
						}, l instanceof Error && l.name === "noSessionToResume" && er(), !(l instanceof Error) || l.name !== "noScene") throw l;
					if (r.length === i) throw console.warn("Retry gave up after ".concat(i, ` retries:
`).concat(r.map(function(u) {
						return u instanceof Error ? u.message : u.toString()
					}).join(`
`))), l;
					return [4, If(o)];
				case 5:
					return c.sent(), [3, 7];
				case 6:
					return [3, 8];
				case 7:
					return a++, [3, 1];
				case 8:
					return [2, s]
			}
		})
	})
}

function Ff(e, t, n) {
	sessionStorage.setItem("sm-server", e), sessionStorage.setItem("sm-session-id", t), sessionStorage.setItem("sm-api-key", n)
}

function us() {
	return {
		server: sessionStorage.getItem("sm-server"),
		resumeSessionId: sessionStorage.getItem("sm-session-id"),
		savedApiKey: sessionStorage.getItem("sm-api-key")
	}
}

function er() {
	sessionStorage.removeItem("sm-server"), sessionStorage.removeItem("sm-session-id"), sessionStorage.removeItem("sm-api-key")
}
var Sl = function() {
		function e(t, n, r, i, o, s) {
			n === void 0 && (n = !1), r === void 0 && (r = G.MicrophoneAndCamera), i === void 0 && (i = G.Microphone);
			var a = this;
			if (this._onConversationResultEvents = {}, this._onSpeechMarkerEvents = {}, this._session = void 0, this._isWebSocketOnly = !1, this._transactionId = 0, this._pendingResponses = {}, this._microphoneUnmuteTimer = void 0, this._echoCancellationEnabled = !0, this._serverControlledCameras = !1, this._loggingConfig = {
					session: {},
					contentAwareness: {}
				}, this._logger = new Et, this._sessionResumeEnabled = !1, this._isResumedSession = !1, this._sendMetadata = {
					pageUrl: !1
				}, this._onMicrophoneActive = new je, this._onCameraActive = new je, this.currentPersonaId = Lf, this.iosVisibilityChange = function() {
					var u = document.visibilityState === "visible";
					setTimeout(function() {
						a._session && a._session.sendRtcEvent("ui", {
							visible: u
						})
					}, 500)
				}, this.stopSpeakingWhenNotVisible = function() {
					document.visibilityState !== "visible" && a.sendRequest("stopSpeaking", {
						personaId: a.currentPersonaId
					})
				}, this.isSceneOptions(t)) {
				var l = t;
				this._videoElement = l.videoElement, this._apiKey = l.apiKey, this._audioOnly = l.audioOnly || n, this._requestedUserMedia = ls(l.requestedMediaDevices, r), this._requiredUserMedia = ls(l.requiredMediaDevices, i), this.contentAwarenessDebounceTime = l.contentAwarenessDebounceTime, this._loggingConfig = tt(tt({}, this._loggingConfig), l.loggingConfig || {}), l.sendMetadata && (this._sendMetadata = l.sendMetadata)
			} else this._videoElement = t, this._audioOnly = n, this._requestedUserMedia = r, this._requiredUserMedia = i, this.contentAwarenessDebounceTime = o, this._loggingConfig = tt(tt({}, this._loggingConfig), s);
			this._logger = new Et(this._loggingConfig.session.minLogLevel, this._loggingConfig.session.enabled), this._onStateEvent = new je, this._onStateEvent.addListener(function(u, f) {
				a._onState && a._onState(u, f)
			}), this._onRecognizeResultsEvent = new je, this._onRecognizeResultsEvent.addListener(function(u, f, p, h) {
				a._onRecognizeResults && a._onRecognizeResults(u, f, p, h)
			}), this._onDisconnectedEvent = new je, this._onDisconnectedEvent.addListener(function(u, f, p) {
				er(), a._onDisconnected && a._onDisconnected(u, f, p)
			}), this._onUserTextEvent = new je, this._onUserTextEvent.addListener(function(u, f) {
				a._onUserText && a._onUserText(u, f)
			}), this._onDemoModeEvent = new je, this._underRuntimeHost = Boolean(window.SmIsUnderRuntimeHost);
			var c = new Uint32Array(3);
			window.crypto.getRandomValues(c), this._sceneId = c.toString().replace(/,/g, "-"), this.conversation = new Af, this.connectionState = new Mf, this._metadataSender = new Of(this)
		}
		return e.prototype.isSceneOptions = function(t) {
			var n = !!t,
				r = !!(t != null && t.tagName);
			return n && !r
		}, e.prototype.connectionValid = function() {
			return !!(this._underRuntimeHost || this._session && this._session.serverConnection)
		}, e.prototype.isConnected = function() {
			return !!(this.connectionValid() && this._session && this._session.serverConnection && this._session.serverConnection.readyState === this._session.serverConnection.OPEN)
		}, e.prototype.keepAlive = function() {
			this._session && this._session.peerConnection !== null && this._session.sendRtcEvent("keepAlive", {})
		}, e.prototype.disconnect = function() {
			var t, n;
			er(), this.connectionState.reset(), this.conversation.reset(), (t = this.contentAwareness) === null || t === void 0 || t.disconnect(), this._metadataSender.disconnect(), document.removeEventListener("visibilitychange", this.stopSpeakingWhenNotVisible), (n = this._session) === null || n === void 0 || n.close(!0), this._session = void 0
		}, e.prototype.connect = function(t, n, r, i) {
			return de(this, void 0, void 0, function() {
				var o, s, a, l, c, u = this;
				return he(this, function(f) {
					switch (f.label) {
						case 0:
							return o = this.connectArgsToConfig(t, n, r, i), this._underRuntimeHost ? (this._session = new Zc(this._videoElement, this._logger), [3, 7]) : [3, 1];
						case 1:
							if (s = o.tokenServerUri || o.tokenServerAccessToken, this._apiKey && s && this._logger.log("warn", "You are trying to connect via an API key and a token server. Please use one or the other"), !(this._apiKey && !s)) return [3, 6];
							f.label = 2;
						case 2:
							return f.trys.push([2, 5, , 6]), [4, this.fetchAuthConfig(this._apiKey)];
						case 3:
							return a = f.sent(), [4, a.json()];
						case 4:
							return l = f.sent(), c = us().server, o.tokenServerUri = l.url, o.tokenServerAccessToken = l.jwt, c && (o.tokenServerUri = l.url[l.url.length - 1] === "/" ? l.url + "server/" + c : l.url + "/server/" + c), [3, 6];
						case 5:
							throw f.sent(), ue("Invalid API key", "serverConnectionFailed");
						case 6:
							if (!o.tokenServerUri || !o.tokenServerAccessToken) throw ue("Please authenticate via an API key or with a serverUri and accessToken", "serverConnectionFailed");
							this._isWebSocketOnly ? this._session = new tf(o.tokenServerUri, o.tokenServerAccessToken, this._logger) : this._session = new ef(this._videoElement, o.tokenServerUri, o.userText, o.tokenServerAccessToken, this._audioOnly, this._requestedUserMedia, this._requiredUserMedia, this._echoCancellationEnabled, this._logger, this.connectionState), f.label = 7;
						case 7:
							return this._session.onConnected = this.sessionConnected.bind(this), this._session.onMessage = this.onMessage.bind(this), this._session.onClose = this.sessionClosed.bind(this), this._session.onUserText = this.rtcUserText.bind(this), "microphoneActiveCallbacks" in this._session && (this._session.microphoneActiveCallbacks = this._onMicrophoneActive), "cameraActiveCallbacks" in this._session && (this._session.cameraActiveCallbacks = this._onCameraActive), this._session.features.isIos && document.addEventListener("visibilitychange", this.iosVisibilityChange), [4, Df(function() {
								return de(u, void 0, void 0, function() {
									return he(this, function(p) {
										switch (p.label) {
											case 0:
												return [4, this._session.connect()];
											case 1:
												return [2, p.sent()]
										}
									})
								})
							}, o.retryOptions, this)];
						case 8:
							return [2, f.sent()]
					}
				})
			})
		}, e.prototype.onMessage = function(t) {
			var n = t.category;
			if (n === "scene") {
				var r = t;
				this.onSceneMessage(r);
				return
			}
		}, e.prototype.sendOnewaySceneRequest = function(t, n) {
			if (!!this._session) {
				var r = {
					name: t,
					body: n,
					category: pr.Scene,
					kind: gn.Request
				};
				this._session.sendMessage(r)
			}
		}, e.prototype.sendRequest = function(t, n) {
			var r = this;
			return n === void 0 && (n = {}), new Promise(function(i, o) {
				if (!r._session) {
					o(ue("No session available", "noSession"));
					return
				}
				var s = r._sceneId + "_" + ++r._transactionId,
					a = {
						transaction: s,
						name: t,
						body: n,
						category: pr.Scene,
						kind: gn.Request
					},
					l = {
						resolve: i,
						reject: o
					};
				r._pendingResponses[s] = l, r._session && r._session.sendMessage(a)
			})
		}, e.prototype.onSceneMessage = function(t) {
			var n, r, i, o = t.name,
				s = t.body,
				a = t.kind,
				l = t.status,
				c = t.transaction;
			if (s && o === "state") {
				var u = s;
				this._onStateEvent.call(this, u), !((n = u.scene) === null || n === void 0) && n.featureFlags && this.enableFlaggedFeatures(u.scene.featureFlags), !((r = u.scene) === null || r === void 0) && r.sdkVersion && this._logger.log("log", "SDK version:", (i = u.scene) === null || i === void 0 ? void 0 : i.sdkVersion), this.conversation.processStateMessage(u), this.controlMicrophoneMute(s)
			} else if (s && o === "recognizeResults") {
				var f = s,
					p = f.status,
					h = f.errorMessage,
					d = f.results;
				this.conversation.processRecognizeResultsMessage(s), this._onRecognizeResultsEvent.call(this, p, h, d)
			} else if (s && o === "conversationResult") {
				this.conversation.onConversationResult(s);
				var m = s.personaId;
				if (m) {
					var g = new hr(this, m),
						y = this._onConversationResultEvents[m];
					y.call(g, s), this.currentPersonaId = m
				}
			} else if (s && o === "speechMarker") {
				this.conversation.onSpeechMarker(s);
				var m = s.personaId;
				if (m) {
					var g = new hr(this, m),
						k = this._onSpeechMarkerEvents[m];
					k.call(g, s), this.currentPersonaId = m
				}
			} else s && o === "demoMode" && this._onDemoModeEvent.call(this, s);
			a === gn.Response && c && this.processResponse(s, o, l, c)
		}, e.prototype.processResponse = function(t, n, r, i) {
			var o = this._pendingResponses[i];
			if (o) {
				if (r === 0) o.resolve(t);
				else {
					var s = new Jc;
					s.requestName = n, s.status = r, s.responseBody = t, o.reject(s)
				}
				delete this._pendingResponses[i]
			}
		}, e.prototype.controlMicrophoneMute = function(t) {
			var n = this;
			if (t.persona && this._session && this._session.microphoneMuteDelay !== -1)
				for (var r in t.persona) {
					var i = t.persona[r];
					!i.speechState || (i.speechState === Cn.Speaking ? (this._session.microphoneMuted || (this._logger.log("warn", "Persona is speaking - mute microphone"), this._session.microphoneMuted = !0), this._microphoneUnmuteTimer && (clearTimeout(this._microphoneUnmuteTimer), this._microphoneUnmuteTimer = void 0)) : this._session.microphoneMuted && !this._microphoneUnmuteTimer && (this._microphoneUnmuteTimer = setTimeout(function() {
						!n._session || !n._microphoneUnmuteTimer || (n._logger.log("warn", "Persona is no longer speaking - unmute microphone"), n._session.microphoneMuted = !1, n._microphoneUnmuteTimer = void 0)
					}, this._session.microphoneMuteDelay)))
				}
		}, e.prototype.close = function() {
			this._session && this._session.close(!0)
		}, e.prototype.sessionConnected = function(t, n, r, i) {
			document.addEventListener("visibilitychange", this.stopSpeakingWhenNotVisible), this._sendMetadata.pageUrl && this._metadataSender.observeUrlChanges(), this._isResumedSession = n, t && (this._sessionResumeEnabled = !0, Ff(r, i, this._apiKey || "")), n && this._sendMetadata.pageUrl && this._metadataSender.send()
		}, e.prototype.sessionClosed = function(t) {
			er(), this._session && (this._session.features.isIos && document.removeEventListener("visibilitychange", this.iosVisibilityChange), document.removeEventListener("visibilitychange", this.stopSpeakingWhenNotVisible), this.connectionState.reset(), this.conversation.reset(), this._onDisconnectedEvent.call(this, this._session.sessionId, t))
		}, e.prototype.rtcUserText = function(t) {
			this._onUserTextEvent.call(this, t)
		}, e.prototype.enableFlaggedFeatures = function(t) {
			t.includes(mr.UI_CONTENT_AWARENESS) && (this.contentAwareness || (this.contentAwareness = new Ef(this, this.contentAwarenessDebounceTime, new Et(this._loggingConfig.contentAwareness.minLogLevel, this._loggingConfig.contentAwareness.enabled)))), this._serverControlledCameras = t.includes(mr.UI_SDK_CAMERA_CONTROL)
		}, e.prototype.sendContent = function() {
			var t;
			this.contentAwareness || console.warn("ContentAwareness is not enabled for this project"), (t = this.contentAwareness) === null || t === void 0 || t.measure()
		}, e.prototype.sendVideoBounds = function(t, n) {
			this._session && this._session.sendVideoBounds(t, n)
		}, e.prototype.configure = function(t) {
			return this.sendRequest("configure", t)
		}, e.prototype.sendUserText = function(t) {
			this._session && this._session.sendUserText(t)
		}, e.prototype.startRecognize = function(t) {
			var n = {};
			return t !== void 0 && (n.audioSource = t), this.sendRequest("startRecognize", n)
		}, e.prototype.stopRecognize = function() {
			return this.sendRequest("stopRecognize")
		}, e.prototype.isMicrophoneConnected = function() {
			return this._session ? this._session.isMicrophoneConnected : !1
		}, e.prototype.isCameraConnected = function() {
			return this._session ? this._session.isCameraConnected : !1
		}, e.prototype.session = function() {
			return this._session
		}, e.prototype.hasContentAwareness = function() {
			return !!this.contentAwareness
		}, e.prototype.hasServerControlledCameras = function() {
			return this._serverControlledCameras
		}, e.prototype.supportsSessionPersistence = function() {
			return this._sessionResumeEnabled
		}, e.prototype.isResumedSession = function() {
			return this._isResumedSession
		}, Object.defineProperty(e.prototype, "onConversationResultEvents", {
			get: function() {
				return this._onConversationResultEvents
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "onSpeechMarkerEvents", {
			get: function() {
				return this._onSpeechMarkerEvents
			},
			enumerable: !1,
			configurable: !0
		}), e.prototype.getState = function() {
			return de(this, void 0, void 0, function() {
				return he(this, function(t) {
					return [2, this.sendRequest("getState")]
				})
			})
		}, Object.defineProperty(e.prototype, "onStateEvent", {
			get: function() {
				return this._onStateEvent
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "onState", {
			set: function(t) {
				this._onState = t
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "onDisconnectedEvent", {
			get: function() {
				return this._onDisconnectedEvent
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "onDisconnected", {
			set: function(t) {
				this._onDisconnected = t
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "onRecognizeResultsEvent", {
			get: function() {
				return this._onRecognizeResultsEvent
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "onRecognizeResults", {
			set: function(t) {
				this._onRecognizeResults = t
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "onUserTextEvent", {
			get: function() {
				return this._onUserTextEvent
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "onUserText", {
			set: function(t) {
				this._onUserText = t
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "echoCancellationEnabled", {
			get: function() {
				return this._echoCancellationEnabled
			},
			set: function(t) {
				this._echoCancellationEnabled = t
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "onDemoModeEvent", {
			get: function() {
				return this._onDemoModeEvent
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "videoElement", {
			get: function() {
				return this._videoElement
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "viewerOffsetX", {
			get: function() {
				return this._session ? this._session.offsetX : 0
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "viewerOffsetY", {
			get: function() {
				return this._session ? this._session.offsetY : 0
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "isWebSocketOnly", {
			get: function() {
				return this._isWebSocketOnly
			},
			set: function(t) {
				this._isWebSocketOnly = t
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e.prototype, "onMicrophoneActive", {
			get: function() {
				return this._onMicrophoneActive
			},
			enumerable: !1,
			configurable: !0
		}), e.prototype.isMicrophoneActive = function() {
			var t;
			return Boolean((t = this._session) === null || t === void 0 ? void 0 : t.isMicrophoneActive())
		}, Object.defineProperty(e.prototype, "onCameraActive", {
			get: function() {
				return this._onCameraActive
			},
			enumerable: !1,
			configurable: !0
		}), e.prototype.isCameraActive = function() {
			var t;
			return Boolean((t = this._session) === null || t === void 0 ? void 0 : t.isCameraActive())
		}, e.prototype.setMediaDeviceActive = function(t) {
			var n;
			return de(this, void 0, void 0, function() {
				return he(this, function(r) {
					switch (r.label) {
						case 0:
							return this.isConnected() ? [4, (n = this._session) === null || n === void 0 ? void 0 : n.setMediaDeviceActive({
								microphone: t.microphone,
								camera: t.camera
							})] : [3, 2];
						case 1:
							return r.sent(), [3, 3];
						case 2:
							throw ue("Connection has not been established", "noConnection");
						case 3:
							return [2]
					}
				})
			})
		}, e.prototype.startVideo = function(t) {
			return de(this, void 0, void 0, function() {
				var n;
				return he(this, function(r) {
					switch (r.label) {
						case 0:
							if (n = t || this._videoElement, !n) throw ue("Cannot find HTMLVideoElement", "noVideoElement");
							return [4, this.playVideo(n)];
						case 1:
							return r.sent() ? [2, {
								video: !0,
								audio: !0
							}] : (n.muted = !0, [4, this.playVideo(n)]);
						case 2:
							if (r.sent()) return [2, {
								video: !0,
								audio: !1
							}];
							throw ue("Cannot start media playback", "userInteractionRequired")
					}
				})
			})
		}, e.prototype.playVideo = function(t) {
			return de(this, void 0, void 0, function() {
				return he(this, function(n) {
					switch (n.label) {
						case 0:
							return n.trys.push([0, 2, , 3]), [4, t.play()];
						case 1:
							return n.sent(), [2, !0];
						case 2:
							return n.sent(), [2, !1];
						case 3:
							return [2]
					}
				})
			})
		}, e.prototype.fetchAuthConfig = function(t) {
			var n = JSON.parse(atob(t)),
				r = n.authServer,
				i = us(),
				o = i.server,
				s = i.resumeSessionId,
				a = i.savedApiKey;
			return o && s && a === t && (r = r + "?sessionId=" + s), fetch(r, {
				headers: {
					key: t
				}
			})
		}, e.prototype.connectArgsToConfig = function(t, n, r, i) {
			var o, s;
			return typeof t == "string" ? {
				tokenServerUri: t,
				tokenServerAccessToken: r,
				userText: n,
				retryOptions: i
			} : {
				tokenServerUri: ((o = t == null ? void 0 : t.tokenServer) === null || o === void 0 ? void 0 : o.uri) || "",
				tokenServerAccessToken: (s = t == null ? void 0 : t.tokenServer) === null || s === void 0 ? void 0 : s.token,
				userText: t == null ? void 0 : t.userText,
				retryOptions: t == null ? void 0 : t.retryOptions
			}
		}, e.prototype.isLoggingEnabled = function() {
			return this._logger.isEnabled
		}, e.prototype.getMinLogLevel = function() {
			return this._logger.getMinLogLevel()
		}, e.prototype.setLogging = function(t) {
			this._logger.enableLogging(t)
		}, e.prototype.setMinLogLevel = function(t) {
			this._logger.setMinLogLevel(t)
		}, e
	}(),
	cs;
(function(e) {
	e[e.none = 0] = "none", e[e.microphone = 1] = "microphone", e[e.microphoneAndCamera = 2] = "microphoneAndCamera", e[e.camera = 3] = "camera"
})(cs || (cs = {}));
var zf = function() {
	function e() {
		this.Scene = Sl, this.Persona = hr, this.userMedia = {
			none: G.None,
			microphone: G.Microphone,
			microphoneAndCamera: G.MicrophoneAndCamera,
			camera: G.Camera
		}, this.DetectCapabilities = function() {
			return new Er().detectWebRTCFeatures()
		}, this.setLogging = function(t) {}
	}
	return e
}();
new zf;
var Xt, oe, si, fs, qt = 0,
	El = [],
	tr = [],
	ds = j.__b,
	hs = j.__r,
	ps = j.diffed,
	ms = j.__c,
	gs = j.unmount;

function zn(e, t) {
	j.__h && j.__h(oe, e, qt || t), qt = 0;
	var n = oe.__H || (oe.__H = {
		__: [],
		__h: []
	});
	return e >= n.__.length && n.__.push({
		__V: tr
	}), n.__[e]
}

function Ee(e) {
	return qt = 1, Tl(Al, e)
}

function Tl(e, t, n) {
	var r = zn(Xt++, 2);
	if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Al(void 0, t), function(o) {
			var s = r.__N ? r.__N[0] : r.__[0],
				a = r.t(s, o);
			s !== a && (r.__N = [a, r.__[1]], r.__c.setState({}))
		}], r.__c = oe, !oe.u)) {
		oe.u = !0;
		var i = oe.shouldComponentUpdate;
		oe.shouldComponentUpdate = function(o, s, a) {
			if (!r.__c.__H) return !0;
			var l = r.__c.__H.__.filter(function(u) {
				return u.__c
			});
			if (l.every(function(u) {
					return !u.__N
				})) return !i || i.call(this, o, s, a);
			var c = !1;
			return l.forEach(function(u) {
				if (u.__N) {
					var f = u.__[0];
					u.__ = u.__N, u.__N = void 0, f !== u.__[0] && (c = !0)
				}
			}), !!c && (!i || i.call(this, o, s, a))
		}
	}
	return r.__N || r.__
}

function pe(e, t) {
	var n = zn(Xt++, 3);
	!j.__s && fo(n.__H, t) && (n.__ = e, n.i = t, oe.__H.__h.push(n))
}

function En(e, t) {
	var n = zn(Xt++, 4);
	!j.__s && fo(n.__H, t) && (n.__ = e, n.i = t, oe.__h.push(n))
}

function ye(e) {
	return qt = 5, rt(function() {
		return {
			current: e
		}
	}, [])
}

function Nf(e, t, n) {
	qt = 6, En(function() {
		return typeof e == "function" ? (e(t()), function() {
			return e(null)
		}) : e ? (e.current = t(), function() {
			return e.current = null
		}) : void 0
	}, n == null ? n : n.concat(e))
}

function rt(e, t) {
	var n = zn(Xt++, 7);
	return fo(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__
}

function dt(e, t) {
	return qt = 8, rt(function() {
		return e
	}, t)
}

function Nn(e) {
	var t = oe.context[e.__c],
		n = zn(Xt++, 9);
	return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(oe)), t.props.value) : e.__
}

function jf(e, t) {
	j.useDebugValue && j.useDebugValue(t ? t(e) : e)
}

function Bf() {
	for (var e; e = El.shift();)
		if (e.__P && e.__H) try {
			e.__H.__h.forEach(nr), e.__H.__h.forEach(Li), e.__H.__h = []
		} catch (t) {
			e.__H.__h = [], j.__e(t, e.__v)
		}
}
j.__b = function(e) {
	oe = null, ds && ds(e)
}, j.__r = function(e) {
	hs && hs(e), Xt = 0;
	var t = (oe = e.__c).__H;
	t && (si === oe ? (t.__h = [], oe.__h = [], t.__.forEach(function(n) {
		n.__N && (n.__ = n.__N), n.__V = tr, n.__N = n.i = void 0
	})) : (t.__h.forEach(nr), t.__h.forEach(Li), t.__h = [])), si = oe
}, j.diffed = function(e) {
	ps && ps(e);
	var t = e.__c;
	t && t.__H && (t.__H.__h.length && (El.push(t) !== 1 && fs === j.requestAnimationFrame || ((fs = j.requestAnimationFrame) || function(n) {
		var r, i = function() {
				clearTimeout(o), ys && cancelAnimationFrame(r), setTimeout(n)
			},
			o = setTimeout(i, 100);
		ys && (r = requestAnimationFrame(i))
	})(Bf)), t.__H.__.forEach(function(n) {
		n.i && (n.__H = n.i), n.__V !== tr && (n.__ = n.__V), n.i = void 0, n.__V = tr
	})), si = oe = null
}, j.__c = function(e, t) {
	t.some(function(n) {
		try {
			n.__h.forEach(nr), n.__h = n.__h.filter(function(r) {
				return !r.__ || Li(r)
			})
		} catch (r) {
			t.some(function(i) {
				i.__h && (i.__h = [])
			}), t = [], j.__e(r, n.__v)
		}
	}), ms && ms(e, t)
}, j.unmount = function(e) {
	gs && gs(e);
	var t, n = e.__c;
	n && n.__H && (n.__H.__.forEach(function(r) {
		try {
			nr(r)
		} catch (i) {
			t = i
		}
	}), t && j.__e(t, n.__v))
};
var ys = typeof requestAnimationFrame == "function";

function nr(e) {
	var t = oe,
		n = e.__c;
	typeof n == "function" && (e.__c = void 0, n()), oe = t
}

function Li(e) {
	var t = oe;
	e.__c = e.__(), oe = t
}

function fo(e, t) {
	return !e || e.length !== t.length || t.some(function(n, r) {
		return n !== e[r]
	})
}

function Al(e, t) {
	return typeof t == "function" ? t(e) : t
}
var _e = (e => (e.DISCONNECTED = "DISCONNECTED", e.CONNECTING = "CONNECTING", e.CONNECTED = "CONNECTED", e.TIMED_OUT = "TIMED_OUT", e.ERRORED = "ERRORED", e))(_e || {}),
	un = (e => (e.BOTTOM_LEFT = "bottomLeft", e.BOTTOM_RIGHT = "bottomRight", e))(un || {}),
	Re = (e => (e.sessionId = "sm-session-id", e.apiKey = "sm-api-key", e.server = "sm-server", e.cameraEnabled = "sm-camera-enabled", e.microphoneEnabled = "sm-microphone-enabled", e.videoMuted = "sm-video-muted", e))(Re || {});

function Uf(e, t) {
	const [n, r] = Ee(_e.DISCONNECTED), [i, o] = Ee(!1), [s, a] = Ee(null), l = ye(null), c = dt(async () => {
		var h;
		try {
			const d = {};
			if (a(null), r(_e.CONNECTING), t) {
				const g = await fetch(t),
					{
						url: y,
						jwt: k
					} = await g.json();
				d.tokenServer = {
					uri: y,
					token: k
				}
			}
			await e.connect(d), l.current && (l.current.muted = !1);
			const m = (h = l.current) == null ? void 0 : h.play();
			m == null || m.then(() => {
				o(!0)
			}).catch(() => {
				o(!1)
			}), r(_e.CONNECTED)
		} catch (d) {
			d instanceof Error && a(d), f(), r(_e.ERRORED)
		}
	}, [e, t]), u = () => {
		f(), p(), e.disconnect(), r(_e.DISCONNECTED)
	}, f = () => {
		sessionStorage.removeItem(Re.sessionId), sessionStorage.removeItem(Re.apiKey), sessionStorage.removeItem(Re.server), sessionStorage.removeItem(Re.cameraEnabled), sessionStorage.removeItem(Re.microphoneEnabled), sessionStorage.removeItem(Re.videoMuted)
	}, p = () => {
		!l.current || (l.current.srcObject = null)
	};
	return e.onDisconnectedEvent.addListener(() => {
		f(), p(), r(_e.TIMED_OUT)
	}), {
		connectionStatus: n,
		connectionError: s,
		canAutoPlayAudio: i,
		connect: c,
		disconnect: u,
		videoRef: l,
		cleanupSessionStorage: f
	}
}

function Vf({
	scene: e,
	canAutoPlayAudio: t,
	videoRef: n
}) {
	const [r, i] = Ee(!t), [o, s] = Ee(e.isMicrophoneActive()), [a, l] = Ee(e.isCameraActive()), c = e == null ? void 0 : e.isConnected(), u = dt(async g => {
		try {
			await e.setMediaDeviceActive({
				microphone: g
			}), s(g), sessionStorage.setItem(Re.microphoneEnabled, g.toString())
		} catch (y) {
			console.error(y)
		}
	}, [e]), f = dt(async g => {
		try {
			await e.setMediaDeviceActive({
				camera: g
			}), l(g), sessionStorage.setItem(Re.cameraEnabled, g.toString())
		} catch (y) {
			console.error(y)
		}
	}, [e]), p = dt(({
		mute: g,
		saveSetting: y
	}) => {
		i(g), n.current && (n.current.muted = g), y && sessionStorage.setItem(Re.videoMuted, g.toString())
	}, [n]);
	return pe(() => {
		if (c) {
			const g = sessionStorage.getItem(Re.videoMuted) === "true";
			p({
				mute: !t || g,
				saveSetting: !1
			})
		}
	}, [t, p, c]), pe(() => {
		if (c) {
			const g = sessionStorage.getItem(Re.cameraEnabled) === "true",
				y = sessionStorage.getItem(Re.microphoneEnabled) === "true";
			g && f(!0), y && u(!0)
		}
	}, [c, f, u]), pe(() => {
		c || (s(!1), l(!1))
	}, [c]), {
		isMicrophoneEnabled: o,
		isCameraEnabled: a,
		isVideoMuted: r,
		toggleMicrophone: () => u(!o),
		toggleCamera: () => f(!a),
		toggleVideoMuted: () => {
			p({
				mute: !r,
				saveSetting: !0
			})
		}
	}
}

function $f(e) {
	const [t, n] = Ee(ve.idle);
	return pe(() => {
		e.conversation.onConversationStateUpdated.addListener(r => {
			n(r)
		})
	}, [e]), {
		conversationState: t
	}
}

function Hf(e) {
	const [t, n] = Ee(e.connectionState.getConnectionState());
	return pe(() => {
		e.connectionState.onConnectionStateUpdated.addListener(r => {
			n(r)
		})
	}, [e]), {
		connectionState: t
	}
}
var qf = 0;

function S(e, t, n, r, i) {
	var o, s, a = {};
	for (s in t) s == "ref" ? o = t[s] : a[s] = t[s];
	var l = {
		type: e,
		props: a,
		key: n,
		ref: o,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__d: void 0,
		__c: null,
		__h: null,
		constructor: void 0,
		__v: --qf,
		__source: i,
		__self: r
	};
	if (typeof e == "function" && (o = e.defaultProps))
		for (s in o) a[s] === void 0 && (a[s] = o[s]);
	return j.vnode && j.vnode(l), l
}
const Ol = Sr(void 0);

function Ml({
	children: e,
	apiKey: t,
	tokenServer: n
}) {
	const i = rt(() => new Sl({
			videoElement: document.createElement("video"),
			apiKey: t,
			requestedMediaDevices: {
				microphone: !1,
				camera: !1
			},
			requiredMediaDevices: {
				microphone: !1,
				camera: !1
			},
			sendMetadata: {
				pageUrl: !0
			}
		}), [t]),
		o = new hr(i, 1),
		s = p => {
			try {
				o.conversationSend(p, {}, {})
			} catch (h) {
				console.error(h)
			}
		},
		a = p => {
			var h, d;
			try {
				i.setLogging(p), (h = i.contentAwareness) == null || h.setLogging(p), p && (i.setMinLogLevel("debug"), (d = i.contentAwareness) == null || d.setMinLogLevel("debug"))
			} catch (m) {
				console.error(m)
			}
		},
		l = $f(i),
		c = Hf(i),
		u = Uf(i, n),
		f = Vf({
			scene: i,
			canAutoPlayAudio: u.canAutoPlayAudio,
			videoRef: u.videoRef
		});
	return S(Ol.Provider, {
		value: {
			scene: i,
			persona: o,
			sendTextMessage: s,
			enableDebugLogging: a,
			...u,
			...f,
			...l,
			...c
		},
		children: e
	})
}

function It() {
	const e = Nn(Ol);
	if (e === void 0) throw new Error("useSoulMachines must be used within a SoulMachinesProvider");
	return e
}

function Il(e, t) {
	for (var n in t) e[n] = t[n];
	return e
}

function Di(e, t) {
	for (var n in e)
		if (n !== "__source" && !(n in t)) return !0;
	for (var r in t)
		if (r !== "__source" && e[r] !== t[r]) return !0;
	return !1
}

function Fi(e) {
	this.props = e
}

function Wf(e, t) {
	function n(i) {
		var o = this.props.ref,
			s = o == i.ref;
		return !s && o && (o.call ? o(null) : o.current = null), t ? !t(this.props, i) || !s : Di(this.props, i)
	}

	function r(i) {
		return this.shouldComponentUpdate = n, we(e, i)
	}
	return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r
}(Fi.prototype = new Xe).isPureReactComponent = !0, Fi.prototype.shouldComponentUpdate = function(e, t) {
	return Di(this.props, e) || Di(this.state, t)
};
var bs = j.__b;
j.__b = function(e) {
	e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), bs && bs(e)
};
var Qf = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.forward_ref") || 3911;

function Rl(e) {
	function t(n) {
		var r = Il({}, n);
		return delete r.ref, e(r, n.ref || null)
	}
	return t.$$typeof = Qf, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t
}
var vs = function(e, t) {
		return e == null ? null : it(it(e).map(t))
	},
	Yf = {
		map: vs,
		forEach: vs,
		count: function(e) {
			return e ? it(e).length : 0
		},
		only: function(e) {
			var t = it(e);
			if (t.length !== 1) throw "Children.only";
			return t[0]
		},
		toArray: it
	},
	Xf = j.__e;
j.__e = function(e, t, n, r) {
	if (e.then) {
		for (var i, o = t; o = o.__;)
			if ((i = o.__c) && i.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k), i.__c(e, t)
	}
	Xf(e, t, n, r)
};
var _s = j.unmount;

function rr() {
	this.__u = 0, this.t = null, this.__b = null
}

function Pl(e) {
	var t = e.__.__c;
	return t && t.__a && t.__a(e)
}

function Gf(e) {
	var t, n, r;

	function i(o) {
		if (t || (t = e()).then(function(s) {
				n = s.default || s
			}, function(s) {
				r = s
			}), r) throw r;
		if (!n) throw t;
		return we(n, o)
	}
	return i.displayName = "Lazy", i.__f = !0, i
}

function cn() {
	this.u = null, this.o = null
}
j.unmount = function(e) {
	var t = e.__c;
	t && t.__R && t.__R(), t && e.__h === !0 && (e.type = null), _s && _s(e)
}, (rr.prototype = new Xe).__c = function(e, t) {
	var n = t.__c,
		r = this;
	r.t == null && (r.t = []), r.t.push(n);
	var i = Pl(r.__v),
		o = !1,
		s = function() {
			o || (o = !0, n.__R = null, i ? i(a) : a())
		};
	n.__R = s;
	var a = function() {
			if (!--r.__u) {
				if (r.state.__a) {
					var c = r.state.__a;
					r.__v.__k[0] = function f(p, h, d) {
						return p && (p.__v = null, p.__k = p.__k && p.__k.map(function(m) {
							return f(m, h, d)
						}), p.__c && p.__c.__P === h && (p.__e && d.insertBefore(p.__e, p.__d), p.__c.__e = !0, p.__c.__P = d)), p
					}(c, c.__c.__P, c.__c.__O)
				}
				var u;
				for (r.setState({
						__a: r.__b = null
					}); u = r.t.pop();) u.forceUpdate()
			}
		},
		l = t.__h === !0;
	r.__u++ || l || r.setState({
		__a: r.__b = r.__v.__k[0]
	}), e.then(s, s)
}, rr.prototype.componentWillUnmount = function() {
	this.t = []
}, rr.prototype.render = function(e, t) {
	if (this.__b) {
		if (this.__v.__k) {
			var n = document.createElement("div"),
				r = this.__v.__k[0].__c;
			this.__v.__k[0] = function o(s, a, l) {
				return s && (s.__c && s.__c.__H && (s.__c.__H.__.forEach(function(c) {
					typeof c.__c == "function" && c.__c()
				}), s.__c.__H = null), (s = Il({}, s)).__c != null && (s.__c.__P === l && (s.__c.__P = a), s.__c = null), s.__k = s.__k && s.__k.map(function(c) {
					return o(c, a, l)
				})), s
			}(this.__b, n, r.__O = r.__P)
		}
		this.__b = null
	}
	var i = t.__a && we(Fe, null, e.fallback);
	return i && (i.__h = null), [we(Fe, null, t.__a ? null : e.children), i]
};
var ws = function(e, t, n) {
	if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
		for (n = e.u; n;) {
			for (; n.length > 3;) n.pop()();
			if (n[1] < n[0]) break;
			e.u = n = n[2]
		}
};

function Kf(e) {
	return this.getChildContext = function() {
		return e.context
	}, e.children
}

function Zf(e) {
	var t = this,
		n = e.i;
	t.componentWillUnmount = function() {
		Ht(null, t.l), t.l = null, t.i = null
	}, t.i && t.i !== n && t.componentWillUnmount(), e.__v ? (t.l || (t.i = n, t.l = {
		nodeType: 1,
		parentNode: n,
		childNodes: [],
		appendChild: function(r) {
			this.childNodes.push(r), t.i.appendChild(r)
		},
		insertBefore: function(r, i) {
			this.childNodes.push(r), t.i.appendChild(r)
		},
		removeChild: function(r) {
			this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), t.i.removeChild(r)
		}
	}), Ht(we(Kf, {
		context: t.context
	}, e.__v), t.l)) : t.l && t.componentWillUnmount()
}

function Jf(e, t) {
	var n = we(Zf, {
		__v: e,
		i: t
	});
	return n.containerInfo = t, n
}(cn.prototype = new Xe).__a = function(e) {
	var t = this,
		n = Pl(t.__v),
		r = t.o.get(e);
	return r[0]++,
		function(i) {
			var o = function() {
				t.props.revealOrder ? (r.push(i), ws(t, e, r)) : i()
			};
			n ? n(o) : o()
		}
}, cn.prototype.render = function(e) {
	this.u = null, this.o = new Map;
	var t = it(e.children);
	e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
	for (var n = t.length; n--;) this.o.set(t[n], this.u = [1, 0, this.u]);
	return e.children
}, cn.prototype.componentDidUpdate = cn.prototype.componentDidMount = function() {
	var e = this;
	this.o.forEach(function(t, n) {
		ws(e, n, t)
	})
};
var Ll = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.element") || 60103,
	ed = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
	td = typeof document != "undefined",
	nd = function(e) {
		return (typeof Symbol != "undefined" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(e)
	};

function rd(e, t, n) {
	return t.__k == null && (t.textContent = ""), Ht(e, t), typeof n == "function" && n(), e ? e.__c : null
}

function id(e, t, n) {
	return uo(e, t), typeof n == "function" && n(), e ? e.__c : null
}
Xe.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
	Object.defineProperty(Xe.prototype, e, {
		configurable: !0,
		get: function() {
			return this["UNSAFE_" + e]
		},
		set: function(t) {
			Object.defineProperty(this, e, {
				configurable: !0,
				writable: !0,
				value: t
			})
		}
	})
});
var xs = j.event;

function od() {}

function sd() {
	return this.cancelBubble
}

function ad() {
	return this.defaultPrevented
}
j.event = function(e) {
	return xs && (e = xs(e)), e.persist = od, e.isPropagationStopped = sd, e.isDefaultPrevented = ad, e.nativeEvent = e
};
var Dl, ks = {
		configurable: !0,
		get: function() {
			return this.class
		}
	},
	Cs = j.vnode;
j.vnode = function(e) {
	var t = e.type,
		n = e.props,
		r = n;
	if (typeof t == "string") {
		var i = t.indexOf("-") === -1;
		for (var o in r = {}, n) {
			var s = n[o];
			td && o === "children" && t === "noscript" || o === "value" && "defaultValue" in n && s == null || (o === "defaultValue" && "value" in n && n.value == null ? o = "value" : o === "download" && s === !0 ? s = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !nd(n.type) ? o = "oninput" : /^onfocus$/i.test(o) ? o = "onfocusin" : /^onblur$/i.test(o) ? o = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o) ? o = o.toLowerCase() : i && ed.test(o) ? o = o.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : s === null && (s = void 0), /^oninput$/i.test(o) && (o = o.toLowerCase(), r[o] && (o = "oninputCapture")), r[o] = s)
		}
		t == "select" && r.multiple && Array.isArray(r.value) && (r.value = it(n.children).forEach(function(a) {
			a.props.selected = r.value.indexOf(a.props.value) != -1
		})), t == "select" && r.defaultValue != null && (r.value = it(n.children).forEach(function(a) {
			a.props.selected = r.multiple ? r.defaultValue.indexOf(a.props.value) != -1 : r.defaultValue == a.props.value
		})), e.props = r, n.class != n.className && (ks.enumerable = "className" in n, n.className != null && (r.class = n.className), Object.defineProperty(r, "className", ks))
	}
	e.$$typeof = Ll, Cs && Cs(e)
};
var Ss = j.__r;
j.__r = function(e) {
	Ss && Ss(e), Dl = e.__c
};
var ld = {
	ReactCurrentDispatcher: {
		current: {
			readContext: function(e) {
				return Dl.__n[e.__c].props.value
			}
		}
	}
};

function ud(e) {
	return we.bind(null, e)
}

function Fl(e) {
	return !!e && e.$$typeof === Ll
}

function cd(e) {
	return Fl(e) ? bl.apply(null, arguments) : e
}

function fd(e) {
	return !!e.__k && (Ht(null, e), !0)
}

function dd(e) {
	return e && (e.base || e.nodeType === 1 && e) || null
}
var zl = function(e, t) {
		return e(t)
	},
	hd = function(e, t) {
		return e(t)
	};

function Nl(e) {
	e()
}

function pd(e) {
	return e
}

function md() {
	return [!1, Nl]
}

function gd(e, t) {
	var n = t(),
		r = Ee({
			s: {
				__: n,
				h: t
			}
		}),
		i = r[0].s,
		o = r[1];
	return En(function() {
		i.__ = n, i.h = t, i.__ !== t() && o({
			s: i
		})
	}, [e, n, t]), pe(function() {
		return i.__ !== i.h() && o({
			s: i
		}), e(function() {
			i.__ !== i.h() && o({
				s: i
			})
		})
	}, [e]), n
}
var zt = {
	useState: Ee,
	useReducer: Tl,
	useEffect: pe,
	useLayoutEffect: En,
	useInsertionEffect: En,
	useTransition: md,
	useDeferredValue: pd,
	useSyncExternalStore: gd,
	startTransition: Nl,
	useRef: ye,
	useImperativeHandle: Nf,
	useMemo: rt,
	useCallback: dt,
	useContext: Nn,
	useDebugValue: jf,
	version: "17.0.2",
	Children: Yf,
	render: rd,
	hydrate: id,
	unmountComponentAtNode: fd,
	createPortal: Jf,
	createElement: we,
	createContext: Sr,
	createFactory: ud,
	cloneElement: cd,
	createRef: cl,
	Fragment: Fe,
	isValidElement: Fl,
	findDOMNode: dd,
	Component: Xe,
	PureComponent: Fi,
	memo: Wf,
	forwardRef: Rl,
	flushSync: hd,
	unstable_batchedUpdates: zl,
	StrictMode: Fe,
	Suspense: rr,
	SuspenseList: cn,
	lazy: Gf,
	__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ld
};

function zi() {
	return zi = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
		}
		return e
	}, zi.apply(this, arguments)
}
var Es = function(e) {
		var t = ye(e);
		return t.current = e, t
	},
	yd = "\u{1F4A1} react-cool-dimensions: the browser doesn't support Resize Observer, please use polyfill: https://github.com/wellyshen/react-cool-dimensions#resizeobserver-polyfill",
	bd = "\u{1F4A1} react-cool-dimensions: the browser doesn't support border-box size, fallback to content-box size. Please see: https://github.com/wellyshen/react-cool-dimensions#border-box-size-measurement",
	vd = function(t, n) {
		var r = "",
			i = -1;
		return Object.keys(t).forEach(function(o) {
			var s = t[o];
			n >= s && s > i && (r = o, i = s)
		}), r
	},
	_d = function(t) {
		var n = t === void 0 ? {} : t,
			r = n.useBorderBoxSize,
			i = n.breakpoints,
			o = n.updateOnBreakpointChange,
			s = n.shouldUpdate,
			a = n.onResize,
			l = n.polyfill,
			c = Ee({
				currentBreakpoint: "",
				width: 0,
				height: 0
			}),
			u = c[0],
			f = c[1],
			p = ye({}),
			h = ye(),
			d = ye(),
			m = ye(!1),
			g = ye(),
			y = Es(a),
			k = Es(s),
			w = dt(function() {
				d.current && d.current.disconnect()
			}, []),
			C = dt(function(E) {
				E && E !== g.current && (w(), g.current = E), d.current && g.current && d.current.observe(g.current)
			}, [w]);
		return pe(function() {
			if ((!("ResizeObserver" in window) || !("ResizeObserverEntry" in window)) && !l) return console.error(yd),
				function() {
					return null
				};
			var E = null;
			return d.current = new(l || ResizeObserver)(function(b) {
					var A = b[0];
					E = requestAnimationFrame(function() {
						var R = A.contentBoxSize,
							F = A.borderBoxSize,
							z = A.contentRect,
							O = R;
						r && (F ? O = F : m.current || (console.warn(bd), m.current = !0)), O = Array.isArray(O) ? O[0] : O;
						var L = O ? O.inlineSize : z.width,
							B = O ? O.blockSize : z.height;
						if (!(L === p.current.width && B === p.current.height)) {
							p.current = {
								width: L,
								height: B
							};
							var D = {
								currentBreakpoint: "",
								width: L,
								height: B,
								entry: A,
								observe: C,
								unobserve: w
							};
							i ? (D.currentBreakpoint = vd(i, L), D.currentBreakpoint !== h.current && (y.current && y.current(D), h.current = D.currentBreakpoint)) : y.current && y.current(D);
							var N = {
								currentBreakpoint: D.currentBreakpoint,
								width: L,
								height: B,
								entry: A
							};
							if (!(k.current && !k.current(N))) {
								if (!k.current && i && o) {
									f(function(x) {
										return x.currentBreakpoint !== N.currentBreakpoint ? N : x
									});
									return
								}
								f(N)
							}
						}
					})
				}), C(),
				function() {
					w(), E && cancelAnimationFrame(E)
				}
		}, [JSON.stringify(i), r, C, w, o]), zi({}, u, {
			observe: C,
			unobserve: w
		})
	};
let ho = Bn();
const W = e => jn(e, ho);
let po = Bn();
W.write = e => jn(e, po);
let Tr = Bn();
W.onStart = e => jn(e, Tr);
let mo = Bn();
W.onFrame = e => jn(e, mo);
let go = Bn();
W.onFinish = e => jn(e, go);
let Nt = [];
W.setTimeout = (e, t) => {
	let n = W.now() + t,
		r = () => {
			let o = Nt.findIndex(s => s.cancel == r);
			~o && Nt.splice(o, 1), yt -= ~o ? 1 : 0
		},
		i = {
			time: n,
			handler: e,
			cancel: r
		};
	return Nt.splice(jl(n), 0, i), yt += 1, Bl(), i
};
let jl = e => ~(~Nt.findIndex(t => t.time > e) || ~Nt.length);
W.cancel = e => {
	Tr.delete(e), mo.delete(e), go.delete(e), ho.delete(e), po.delete(e)
};
W.sync = e => {
	Ni = !0, W.batchedUpdates(e), Ni = !1
};
W.throttle = e => {
	let t;

	function n() {
		try {
			e(...t)
		} finally {
			t = null
		}
	}

	function r(...i) {
		t = i, W.onStart(n)
	}
	return r.handler = e, r.cancel = () => {
		Tr.delete(n), t = null
	}, r
};
let yo = typeof window != "undefined" ? window.requestAnimationFrame : () => {};
W.use = e => yo = e;
W.now = typeof performance != "undefined" ? () => performance.now() : Date.now;
W.batchedUpdates = e => e();
W.catch = console.error;
W.frameLoop = "always";
W.advance = () => {
	W.frameLoop !== "demand" ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : Vl()
};
let gt = -1,
	yt = 0,
	Ni = !1;

function jn(e, t) {
	Ni ? (t.delete(e), e(0)) : (t.add(e), Bl())
}

function Bl() {
	gt < 0 && (gt = 0, W.frameLoop !== "demand" && yo(Ul))
}

function wd() {
	gt = -1
}

function Ul() {
	~gt && (yo(Ul), W.batchedUpdates(Vl))
}

function Vl() {
	let e = gt;
	gt = W.now();
	let t = jl(gt);
	if (t && ($l(Nt.splice(0, t), n => n.handler()), yt -= t), !yt) {
		wd();
		return
	}
	Tr.flush(), ho.flush(e ? Math.min(64, gt - e) : 16.667), mo.flush(), po.flush(), go.flush()
}

function Bn() {
	let e = new Set,
		t = e;
	return {
		add(n) {
			yt += t == e && !e.has(n) ? 1 : 0, e.add(n)
		},
		delete(n) {
			return yt -= t == e && e.has(n) ? 1 : 0, e.delete(n)
		},
		flush(n) {
			t.size && (e = new Set, yt -= t.size, $l(t, r => r(n) && e.add(r)), yt += e.size, t = e)
		}
	}
}

function $l(e, t) {
	e.forEach(n => {
		try {
			t(n)
		} catch (r) {
			W.catch(r)
		}
	})
}

function ji() {}
const xd = (e, t, n) => Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		configurable: !0
	}),
	M = {
		arr: Array.isArray,
		obj: e => !!e && e.constructor.name === "Object",
		fun: e => typeof e == "function",
		str: e => typeof e == "string",
		num: e => typeof e == "number",
		und: e => e === void 0
	};

function ut(e, t) {
	if (M.arr(e)) {
		if (!M.arr(t) || e.length !== t.length) return !1;
		for (let n = 0; n < e.length; n++)
			if (e[n] !== t[n]) return !1;
		return !0
	}
	return e === t
}
const V = (e, t) => e.forEach(t);

function ot(e, t, n) {
	if (M.arr(e)) {
		for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
		return
	}
	for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r)
}
const Ce = e => M.und(e) ? [] : M.arr(e) ? e : [e];

function vn(e, t) {
	if (e.size) {
		const n = Array.from(e);
		e.clear(), V(n, t)
	}
}
const fn = (e, ...t) => vn(e, n => n(...t)),
	bo = () => typeof window == "undefined" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
let vo, Hl, bt = null,
	ql = !1,
	_o = ji;
const kd = e => {
	e.to && (Hl = e.to), e.now && (W.now = e.now), e.colors !== void 0 && (bt = e.colors), e.skipAnimation != null && (ql = e.skipAnimation), e.createStringInterpolator && (vo = e.createStringInterpolator), e.requestAnimationFrame && W.use(e.requestAnimationFrame), e.batchedUpdates && (W.batchedUpdates = e.batchedUpdates), e.willAdvance && (_o = e.willAdvance), e.frameLoop && (W.frameLoop = e.frameLoop)
};
var st = Object.freeze({
	__proto__: null,
	get createStringInterpolator() {
		return vo
	},
	get to() {
		return Hl
	},
	get colors() {
		return bt
	},
	get skipAnimation() {
		return ql
	},
	get willAdvance() {
		return _o
	},
	assign: kd
});
const _n = new Set;
let Ve = [],
	ai = [],
	gr = 0;
const Ar = {
	get idle() {
		return !_n.size && !Ve.length
	},
	start(e) {
		gr > e.priority ? (_n.add(e), W.onStart(Cd)) : (Wl(e), W(Bi))
	},
	advance: Bi,
	sort(e) {
		if (gr) W.onFrame(() => Ar.sort(e));
		else {
			const t = Ve.indexOf(e);
			~t && (Ve.splice(t, 1), Ql(e))
		}
	},
	clear() {
		Ve = [], _n.clear()
	}
};

function Cd() {
	_n.forEach(Wl), _n.clear(), W(Bi)
}

function Wl(e) {
	Ve.includes(e) || Ql(e)
}

function Ql(e) {
	Ve.splice(Sd(Ve, t => t.priority > e.priority), 0, e)
}

function Bi(e) {
	const t = ai;
	for (let n = 0; n < Ve.length; n++) {
		const r = Ve[n];
		gr = r.priority, r.idle || (_o(r), r.advance(e), r.idle || t.push(r))
	}
	return gr = 0, ai = Ve, ai.length = 0, Ve = t, Ve.length > 0
}

function Sd(e, t) {
	const n = e.findIndex(t);
	return n < 0 ? e.length : n
}
const Ed = {
		transparent: 0,
		aliceblue: 4042850303,
		antiquewhite: 4209760255,
		aqua: 16777215,
		aquamarine: 2147472639,
		azure: 4043309055,
		beige: 4126530815,
		bisque: 4293182719,
		black: 255,
		blanchedalmond: 4293643775,
		blue: 65535,
		blueviolet: 2318131967,
		brown: 2771004159,
		burlywood: 3736635391,
		burntsienna: 3934150143,
		cadetblue: 1604231423,
		chartreuse: 2147418367,
		chocolate: 3530104575,
		coral: 4286533887,
		cornflowerblue: 1687547391,
		cornsilk: 4294499583,
		crimson: 3692313855,
		cyan: 16777215,
		darkblue: 35839,
		darkcyan: 9145343,
		darkgoldenrod: 3095792639,
		darkgray: 2846468607,
		darkgreen: 6553855,
		darkgrey: 2846468607,
		darkkhaki: 3182914559,
		darkmagenta: 2332068863,
		darkolivegreen: 1433087999,
		darkorange: 4287365375,
		darkorchid: 2570243327,
		darkred: 2332033279,
		darksalmon: 3918953215,
		darkseagreen: 2411499519,
		darkslateblue: 1211993087,
		darkslategray: 793726975,
		darkslategrey: 793726975,
		darkturquoise: 13554175,
		darkviolet: 2483082239,
		deeppink: 4279538687,
		deepskyblue: 12582911,
		dimgray: 1768516095,
		dimgrey: 1768516095,
		dodgerblue: 512819199,
		firebrick: 2988581631,
		floralwhite: 4294635775,
		forestgreen: 579543807,
		fuchsia: 4278255615,
		gainsboro: 3705462015,
		ghostwhite: 4177068031,
		gold: 4292280575,
		goldenrod: 3668254975,
		gray: 2155905279,
		green: 8388863,
		greenyellow: 2919182335,
		grey: 2155905279,
		honeydew: 4043305215,
		hotpink: 4285117695,
		indianred: 3445382399,
		indigo: 1258324735,
		ivory: 4294963455,
		khaki: 4041641215,
		lavender: 3873897215,
		lavenderblush: 4293981695,
		lawngreen: 2096890111,
		lemonchiffon: 4294626815,
		lightblue: 2916673279,
		lightcoral: 4034953471,
		lightcyan: 3774873599,
		lightgoldenrodyellow: 4210742015,
		lightgray: 3553874943,
		lightgreen: 2431553791,
		lightgrey: 3553874943,
		lightpink: 4290167295,
		lightsalmon: 4288707327,
		lightseagreen: 548580095,
		lightskyblue: 2278488831,
		lightslategray: 2005441023,
		lightslategrey: 2005441023,
		lightsteelblue: 2965692159,
		lightyellow: 4294959359,
		lime: 16711935,
		limegreen: 852308735,
		linen: 4210091775,
		magenta: 4278255615,
		maroon: 2147483903,
		mediumaquamarine: 1724754687,
		mediumblue: 52735,
		mediumorchid: 3126187007,
		mediumpurple: 2473647103,
		mediumseagreen: 1018393087,
		mediumslateblue: 2070474495,
		mediumspringgreen: 16423679,
		mediumturquoise: 1221709055,
		mediumvioletred: 3340076543,
		midnightblue: 421097727,
		mintcream: 4127193855,
		mistyrose: 4293190143,
		moccasin: 4293178879,
		navajowhite: 4292783615,
		navy: 33023,
		oldlace: 4260751103,
		olive: 2155872511,
		olivedrab: 1804477439,
		orange: 4289003775,
		orangered: 4282712319,
		orchid: 3664828159,
		palegoldenrod: 4008225535,
		palegreen: 2566625535,
		paleturquoise: 2951671551,
		palevioletred: 3681588223,
		papayawhip: 4293907967,
		peachpuff: 4292524543,
		peru: 3448061951,
		pink: 4290825215,
		plum: 3718307327,
		powderblue: 2967529215,
		purple: 2147516671,
		rebeccapurple: 1714657791,
		red: 4278190335,
		rosybrown: 3163525119,
		royalblue: 1097458175,
		saddlebrown: 2336560127,
		salmon: 4202722047,
		sandybrown: 4104413439,
		seagreen: 780883967,
		seashell: 4294307583,
		sienna: 2689740287,
		silver: 3233857791,
		skyblue: 2278484991,
		slateblue: 1784335871,
		slategray: 1887473919,
		slategrey: 1887473919,
		snow: 4294638335,
		springgreen: 16744447,
		steelblue: 1182971135,
		tan: 3535047935,
		teal: 8421631,
		thistle: 3636451583,
		tomato: 4284696575,
		turquoise: 1088475391,
		violet: 4001558271,
		wheat: 4125012991,
		white: 4294967295,
		whitesmoke: 4126537215,
		yellow: 4294902015,
		yellowgreen: 2597139199
	},
	Ye = "[-+]?\\d*\\.?\\d+",
	yr = Ye + "%";

function Or(...e) {
	return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
}
const Td = new RegExp("rgb" + Or(Ye, Ye, Ye)),
	Ad = new RegExp("rgba" + Or(Ye, Ye, Ye, Ye)),
	Od = new RegExp("hsl" + Or(Ye, yr, yr)),
	Md = new RegExp("hsla" + Or(Ye, yr, yr, Ye)),
	Id = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
	Rd = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
	Pd = /^#([0-9a-fA-F]{6})$/,
	Ld = /^#([0-9a-fA-F]{8})$/;

function Dd(e) {
	let t;
	return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = Pd.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : bt && bt[e] !== void 0 ? bt[e] : (t = Td.exec(e)) ? (Lt(t[1]) << 24 | Lt(t[2]) << 16 | Lt(t[3]) << 8 | 255) >>> 0 : (t = Ad.exec(e)) ? (Lt(t[1]) << 24 | Lt(t[2]) << 16 | Lt(t[3]) << 8 | Os(t[4])) >>> 0 : (t = Id.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = Ld.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = Rd.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = Od.exec(e)) ? (Ts(As(t[1]), Yn(t[2]), Yn(t[3])) | 255) >>> 0 : (t = Md.exec(e)) ? (Ts(As(t[1]), Yn(t[2]), Yn(t[3])) | Os(t[4])) >>> 0 : null
}

function li(e, t, n) {
	return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function Ts(e, t, n) {
	const r = n < .5 ? n * (1 + t) : n + t - n * t,
		i = 2 * n - r,
		o = li(i, r, e + 1 / 3),
		s = li(i, r, e),
		a = li(i, r, e - 1 / 3);
	return Math.round(o * 255) << 24 | Math.round(s * 255) << 16 | Math.round(a * 255) << 8
}

function Lt(e) {
	const t = parseInt(e, 10);
	return t < 0 ? 0 : t > 255 ? 255 : t
}

function As(e) {
	return (parseFloat(e) % 360 + 360) % 360 / 360
}

function Os(e) {
	const t = parseFloat(e);
	return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255)
}

function Yn(e) {
	const t = parseFloat(e);
	return t < 0 ? 0 : t > 100 ? 1 : t / 100
}

function Ms(e) {
	let t = Dd(e);
	if (t === null) return e;
	t = t || 0;
	let n = (t & 4278190080) >>> 24,
		r = (t & 16711680) >>> 16,
		i = (t & 65280) >>> 8,
		o = (t & 255) / 255;
	return `rgba(${n}, ${r}, ${i}, ${o})`
}
const Tn = (e, t, n) => {
	if (M.fun(e)) return e;
	if (M.arr(e)) return Tn({
		range: e,
		output: t,
		extrapolate: n
	});
	if (M.str(e.output[0])) return vo(e);
	const r = e,
		i = r.output,
		o = r.range || [0, 1],
		s = r.extrapolateLeft || r.extrapolate || "extend",
		a = r.extrapolateRight || r.extrapolate || "extend",
		l = r.easing || (c => c);
	return c => {
		const u = zd(c, o);
		return Fd(c, o[u], o[u + 1], i[u], i[u + 1], l, s, a, r.map)
	}
};

function Fd(e, t, n, r, i, o, s, a, l) {
	let c = l ? l(e) : e;
	if (c < t) {
		if (s === "identity") return c;
		s === "clamp" && (c = t)
	}
	if (c > n) {
		if (a === "identity") return c;
		a === "clamp" && (c = n)
	}
	return r === i ? r : t === n ? e <= t ? r : i : (t === -1 / 0 ? c = -c : n === 1 / 0 ? c = c - t : c = (c - t) / (n - t), c = o(c), r === -1 / 0 ? c = -c : i === 1 / 0 ? c = c + r : c = c * (i - r) + r, c)
}

function zd(e, t) {
	for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
	return n - 1
}

function Ui() {
	return Ui = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
		}
		return e
	}, Ui.apply(this, arguments)
}
const Wt = Symbol.for("FluidValue.get"),
	Ot = Symbol.for("FluidValue.observers"),
	Be = e => Boolean(e && e[Wt]),
	Me = e => e && e[Wt] ? e[Wt]() : e,
	Is = e => e[Ot] || null;

function Nd(e, t) {
	e.eventObserved ? e.eventObserved(t) : e(t)
}

function An(e, t) {
	let n = e[Ot];
	n && n.forEach(r => {
		Nd(r, t)
	})
}
class Yl {
	constructor(t) {
		if (this[Wt] = void 0, this[Ot] = void 0, !t && !(t = this.get)) throw Error("Unknown getter");
		jd(this, t)
	}
}
const jd = (e, t) => Xl(e, Wt, t);

function Gt(e, t) {
	if (e[Wt]) {
		let n = e[Ot];
		n || Xl(e, Ot, n = new Set), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t))
	}
	return t
}

function On(e, t) {
	let n = e[Ot];
	if (n && n.has(t)) {
		const r = n.size - 1;
		r ? n.delete(t) : e[Ot] = null, e.observerRemoved && e.observerRemoved(r, t)
	}
}
const Xl = (e, t, n) => Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		configurable: !0
	}),
	ir = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
	Bd = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
	Rs = new RegExp(`(${ir.source})(%|[a-z]+)`, "i"),
	Ud = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
	Mr = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
	Gl = e => {
		const [t, n] = Vd(e);
		if (!t || bo()) return e;
		const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
		if (r) return r.trim();
		if (n && n.startsWith("--")) {
			const i = window.getComputedStyle(document.documentElement).getPropertyValue(n);
			return i || e
		} else {
			if (n && Mr.test(n)) return Gl(n);
			if (n) return n
		}
		return e
	},
	Vd = e => {
		const t = Mr.exec(e);
		if (!t) return [, ];
		const [, n, r] = t;
		return [n, r]
	};
let ui;
const $d = (e, t, n, r, i) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,
	Kl = e => {
		ui || (ui = bt ? new RegExp(`(${Object.keys(bt).join("|")})(?!\\w)`, "g") : /^\b$/);
		const t = e.output.map(o => Me(o).replace(Mr, Gl).replace(Bd, Ms).replace(ui, Ms)),
			n = t.map(o => o.match(ir).map(Number)),
			i = n[0].map((o, s) => n.map(a => {
				if (!(s in a)) throw Error('The arity of each "output" value must be equal');
				return a[s]
			})).map(o => Tn(Ui({}, e, {
				output: o
			})));
		return o => {
			var s;
			const a = !Rs.test(t[0]) && ((s = t.find(c => Rs.test(c))) == null ? void 0 : s.replace(ir, ""));
			let l = 0;
			return t[0].replace(ir, () => `${i[l++](o)}${a||""}`).replace(Ud, $d)
		}
	},
	wo = "react-spring: ",
	Zl = e => {
		const t = e;
		let n = !1;
		if (typeof t != "function") throw new TypeError(`${wo}once requires a function parameter`);
		return (...r) => {
			n || (t(...r), n = !0)
		}
	},
	Hd = Zl(console.warn);

function qd() {
	Hd(`${wo}The "interpolate" function is deprecated in v9 (use "to" instead)`)
}
const Wd = Zl(console.warn);

function Qd() {
	Wd(`${wo}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`)
}

function Ir(e) {
	return M.str(e) && (e[0] == "#" || /\d/.test(e) || !bo() && Mr.test(e) || e in (bt || {}))
}
const St = bo() ? pe : En,
	Yd = () => {
		const e = ye(!1);
		return St(() => (e.current = !0, () => {
			e.current = !1
		}), []), e
	};

function xo() {
	const e = Ee()[1],
		t = Yd();
	return () => {
		t.current && e(Math.random())
	}
}

function Xd(e, t) {
	const [n] = Ee(() => ({
		inputs: t,
		result: e()
	})), r = ye(), i = r.current;
	let o = i;
	return o ? Boolean(t && o.inputs && Gd(t, o.inputs)) || (o = {
		inputs: t,
		result: e()
	}) : o = n, pe(() => {
		r.current = o, i == n && (n.inputs = n.result = void 0)
	}, [o]), o.result
}

function Gd(e, t) {
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n++)
		if (e[n] !== t[n]) return !1;
	return !0
}
const ko = e => pe(e, Kd),
	Kd = [];

function Vi(e) {
	const t = ye();
	return pe(() => {
		t.current = e
	}), t.current
}
const Mn = Symbol.for("Animated:node"),
	Zd = e => !!e && e[Mn] === e,
	et = e => e && e[Mn],
	Co = (e, t) => xd(e, Mn, t),
	Rr = e => e && e[Mn] && e[Mn].getPayload();
class Jl {
	constructor() {
		this.payload = void 0, Co(this, this)
	}
	getPayload() {
		return this.payload || []
	}
}
class Kt extends Jl {
	constructor(t) {
		super(), this.done = !0, this.elapsedTime = void 0, this.lastPosition = void 0, this.lastVelocity = void 0, this.v0 = void 0, this.durationProgress = 0, this._value = t, M.num(this._value) && (this.lastPosition = this._value)
	}
	static create(t) {
		return new Kt(t)
	}
	getPayload() {
		return [this]
	}
	getValue() {
		return this._value
	}
	setValue(t, n) {
		return M.num(t) && (this.lastPosition = t, n && (t = Math.round(t / n) * n, this.done && (this.lastPosition = t))), this._value === t ? !1 : (this._value = t, !0)
	}
	reset() {
		const {
			done: t
		} = this;
		this.done = !1, M.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, t && (this.lastVelocity = null), this.v0 = null)
	}
}
class Qt extends Kt {
	constructor(t) {
		super(0), this._string = null, this._toString = void 0, this._toString = Tn({
			output: [t, t]
		})
	}
	static create(t) {
		return new Qt(t)
	}
	getValue() {
		let t = this._string;
		return t == null ? this._string = this._toString(this._value) : t
	}
	setValue(t) {
		if (M.str(t)) {
			if (t == this._string) return !1;
			this._string = t, this._value = 1
		} else if (super.setValue(t)) this._string = null;
		else return !1;
		return !0
	}
	reset(t) {
		t && (this._toString = Tn({
			output: [this.getValue(), t]
		})), this._value = 0, super.reset()
	}
}
const br = {
	dependencies: null
};
class Pr extends Jl {
	constructor(t) {
		super(), this.source = t, this.setValue(t)
	}
	getValue(t) {
		const n = {};
		return ot(this.source, (r, i) => {
			Zd(r) ? n[i] = r.getValue(t) : Be(r) ? n[i] = Me(r) : t || (n[i] = r)
		}), n
	}
	setValue(t) {
		this.source = t, this.payload = this._makePayload(t)
	}
	reset() {
		this.payload && V(this.payload, t => t.reset())
	}
	_makePayload(t) {
		if (t) {
			const n = new Set;
			return ot(t, this._addToPayload, n), Array.from(n)
		}
	}
	_addToPayload(t) {
		br.dependencies && Be(t) && br.dependencies.add(t);
		const n = Rr(t);
		n && V(n, r => this.add(r))
	}
}
class So extends Pr {
	constructor(t) {
		super(t)
	}
	static create(t) {
		return new So(t)
	}
	getValue() {
		return this.source.map(t => t.getValue())
	}
	setValue(t) {
		const n = this.getPayload();
		return t.length == n.length ? n.map((r, i) => r.setValue(t[i])).some(Boolean) : (super.setValue(t.map(Jd)), !0)
	}
}

function Jd(e) {
	return (Ir(e) ? Qt : Kt).create(e)
}

function $i(e) {
	const t = et(e);
	return t ? t.constructor : M.arr(e) ? So : Ir(e) ? Qt : Kt
}

function vr() {
	return vr = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
		}
		return e
	}, vr.apply(this, arguments)
}
const Ps = (e, t) => {
	const n = !M.fun(e) || e.prototype && e.prototype.isReactComponent;
	return Rl((r, i) => {
		const o = ye(null),
			s = n && dt(d => {
				o.current = nh(i, d)
			}, [i]),
			[a, l] = th(r, t),
			c = xo(),
			u = () => {
				const d = o.current;
				if (n && !d) return;
				(d ? t.applyAnimatedValues(d, a.getValue(!0)) : !1) === !1 && c()
			},
			f = new eh(u, l),
			p = ye();
		St(() => (p.current = f, V(l, d => Gt(d, f)), () => {
			p.current && (V(p.current.deps, d => On(d, p.current)), W.cancel(p.current.update))
		})), pe(u, []), ko(() => () => {
			const d = p.current;
			V(d.deps, m => On(m, d))
		});
		const h = t.getComponentProps(a.getValue());
		return we(e, vr({}, h, {
			ref: s
		}))
	})
};
class eh {
	constructor(t, n) {
		this.update = t, this.deps = n
	}
	eventObserved(t) {
		t.type == "change" && W.write(this.update)
	}
}

function th(e, t) {
	const n = new Set;
	return br.dependencies = n, e.style && (e = vr({}, e, {
		style: t.createAnimatedStyle(e.style)
	})), e = new Pr(e), br.dependencies = null, [e, n]
}

function nh(e, t) {
	return e && (M.fun(e) ? e(t) : e.current = t), t
}
const Ls = Symbol.for("AnimatedComponent"),
	rh = (e, {
		applyAnimatedValues: t = () => !1,
		createAnimatedStyle: n = i => new Pr(i),
		getComponentProps: r = i => i
	} = {}) => {
		const i = {
				applyAnimatedValues: t,
				createAnimatedStyle: n,
				getComponentProps: r
			},
			o = s => {
				const a = Ds(s) || "Anonymous";
				return M.str(s) ? s = o[s] || (o[s] = Ps(s, i)) : s = s[Ls] || (s[Ls] = Ps(s, i)), s.displayName = `Animated(${a})`, s
			};
		return ot(e, (s, a) => {
			M.arr(e) && (a = Ds(s)), o[a] = o(s)
		}), {
			animated: o
		}
	},
	Ds = e => M.str(e) ? e : e && M.str(e.displayName) ? e.displayName : M.fun(e) && e.name || null;

function se() {
	return se = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
		}
		return e
	}, se.apply(this, arguments)
}

function Ie(e, ...t) {
	return M.fun(e) ? e(...t) : e
}
const wn = (e, t) => e === !0 || !!(t && e && (M.fun(e) ? e(t) : Ce(e).includes(t))),
	eu = (e, t) => M.obj(e) ? t && e[t] : e,
	tu = (e, t) => e.default === !0 ? e[t] : e.default ? e.default[t] : void 0,
	ih = e => e,
	Lr = (e, t = ih) => {
		let n = oh;
		e.default && e.default !== !0 && (e = e.default, n = Object.keys(e));
		const r = {};
		for (const i of n) {
			const o = t(e[i], i);
			M.und(o) || (r[i] = o)
		}
		return r
	},
	oh = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
	sh = {
		config: 1,
		from: 1,
		to: 1,
		ref: 1,
		loop: 1,
		reset: 1,
		pause: 1,
		cancel: 1,
		reverse: 1,
		immediate: 1,
		default: 1,
		delay: 1,
		onProps: 1,
		onStart: 1,
		onChange: 1,
		onPause: 1,
		onResume: 1,
		onRest: 1,
		onResolve: 1,
		items: 1,
		trail: 1,
		sort: 1,
		expires: 1,
		initial: 1,
		enter: 1,
		update: 1,
		leave: 1,
		children: 1,
		onDestroyed: 1,
		keys: 1,
		callId: 1,
		parentId: 1
	};

function ah(e) {
	const t = {};
	let n = 0;
	if (ot(e, (r, i) => {
			sh[i] || (t[i] = r, n++)
		}), n) return t
}

function Eo(e) {
	const t = ah(e);
	if (t) {
		const n = {
			to: t
		};
		return ot(e, (r, i) => i in t || (n[i] = r)), n
	}
	return se({}, e)
}

function In(e) {
	return e = Me(e), M.arr(e) ? e.map(In) : Ir(e) ? st.createStringInterpolator({
		range: [0, 1],
		output: [e, e]
	})(1) : e
}

function nu(e) {
	for (const t in e) return !0;
	return !1
}

function Hi(e) {
	return M.fun(e) || M.arr(e) && M.obj(e[0])
}

function qi(e, t) {
	var n;
	(n = e.ref) == null || n.delete(e), t == null || t.delete(e)
}

function ru(e, t) {
	if (t && e.ref !== t) {
		var n;
		(n = e.ref) == null || n.delete(e), t.add(e), e.ref = t
	}
}
const Dr = {
		default: {
			tension: 170,
			friction: 26
		},
		gentle: {
			tension: 120,
			friction: 14
		},
		wobbly: {
			tension: 180,
			friction: 12
		},
		stiff: {
			tension: 210,
			friction: 20
		},
		slow: {
			tension: 280,
			friction: 60
		},
		molasses: {
			tension: 280,
			friction: 120
		}
	},
	_r = 1.70158,
	Xn = _r * 1.525,
	Fs = _r + 1,
	zs = 2 * Math.PI / 3,
	Ns = 2 * Math.PI / 4.5,
	Gn = e => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375,
	lh = {
		linear: e => e,
		easeInQuad: e => e * e,
		easeOutQuad: e => 1 - (1 - e) * (1 - e),
		easeInOutQuad: e => e < .5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
		easeInCubic: e => e * e * e,
		easeOutCubic: e => 1 - Math.pow(1 - e, 3),
		easeInOutCubic: e => e < .5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
		easeInQuart: e => e * e * e * e,
		easeOutQuart: e => 1 - Math.pow(1 - e, 4),
		easeInOutQuart: e => e < .5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
		easeInQuint: e => e * e * e * e * e,
		easeOutQuint: e => 1 - Math.pow(1 - e, 5),
		easeInOutQuint: e => e < .5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2,
		easeInSine: e => 1 - Math.cos(e * Math.PI / 2),
		easeOutSine: e => Math.sin(e * Math.PI / 2),
		easeInOutSine: e => -(Math.cos(Math.PI * e) - 1) / 2,
		easeInExpo: e => e === 0 ? 0 : Math.pow(2, 10 * e - 10),
		easeOutExpo: e => e === 1 ? 1 : 1 - Math.pow(2, -10 * e),
		easeInOutExpo: e => e === 0 ? 0 : e === 1 ? 1 : e < .5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2,
		easeInCirc: e => 1 - Math.sqrt(1 - Math.pow(e, 2)),
		easeOutCirc: e => Math.sqrt(1 - Math.pow(e - 1, 2)),
		easeInOutCirc: e => e < .5 ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
		easeInBack: e => Fs * e * e * e - _r * e * e,
		easeOutBack: e => 1 + Fs * Math.pow(e - 1, 3) + _r * Math.pow(e - 1, 2),
		easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * ((Xn + 1) * 2 * e - Xn) / 2 : (Math.pow(2 * e - 2, 2) * ((Xn + 1) * (e * 2 - 2) + Xn) + 2) / 2,
		easeInElastic: e => e === 0 ? 0 : e === 1 ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * zs),
		easeOutElastic: e => e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, -10 * e) * Math.sin((e * 10 - .75) * zs) + 1,
		easeInOutElastic: e => e === 0 ? 0 : e === 1 ? 1 : e < .5 ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Ns)) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Ns) / 2 + 1,
		easeInBounce: e => 1 - Gn(1 - e),
		easeOutBounce: Gn,
		easeInOutBounce: e => e < .5 ? (1 - Gn(1 - 2 * e)) / 2 : (1 + Gn(2 * e - 1)) / 2
	},
	Wi = se({}, Dr.default, {
		mass: 1,
		damping: 1,
		easing: lh.linear,
		clamp: !1
	});
class uh {
	constructor() {
		this.tension = void 0, this.friction = void 0, this.frequency = void 0, this.damping = void 0, this.mass = void 0, this.velocity = 0, this.restVelocity = void 0, this.precision = void 0, this.progress = void 0, this.duration = void 0, this.easing = void 0, this.clamp = void 0, this.bounce = void 0, this.decay = void 0, this.round = void 0, Object.assign(this, Wi)
	}
}

function ch(e, t, n) {
	n && (n = se({}, n), js(n, t), t = se({}, n, t)), js(e, t), Object.assign(e, t);
	for (const s in Wi) e[s] == null && (e[s] = Wi[s]);
	let {
		mass: r,
		frequency: i,
		damping: o
	} = e;
	return M.und(i) || (i < .01 && (i = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / i, 2) * r, e.friction = 4 * Math.PI * o * r / i), e
}

function js(e, t) {
	if (!M.und(t.decay)) e.duration = void 0;
	else {
		const n = !M.und(t.tension) || !M.und(t.friction);
		(n || !M.und(t.frequency) || !M.und(t.damping) || !M.und(t.mass)) && (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0)
	}
}
const Bs = [];
class fh {
	constructor() {
		this.changed = !1, this.values = Bs, this.toValues = null, this.fromValues = Bs, this.to = void 0, this.from = void 0, this.config = new uh, this.immediate = !1
	}
}

function iu(e, {
	key: t,
	props: n,
	defaultProps: r,
	state: i,
	actions: o
}) {
	return new Promise((s, a) => {
		var l;
		let c, u, f = wn((l = n.cancel) != null ? l : r == null ? void 0 : r.cancel, t);
		if (f) d();
		else {
			M.und(n.pause) || (i.paused = wn(n.pause, t));
			let m = r == null ? void 0 : r.pause;
			m !== !0 && (m = i.paused || wn(m, t)), c = Ie(n.delay || 0, t), m ? (i.resumeQueue.add(h), o.pause()) : (o.resume(), h())
		}

		function p() {
			i.resumeQueue.add(h), i.timeouts.delete(u), u.cancel(), c = u.time - W.now()
		}

		function h() {
			c > 0 && !st.skipAnimation ? (i.delayed = !0, u = W.setTimeout(d, c), i.pauseQueue.add(p), i.timeouts.add(u)) : d()
		}

		function d() {
			i.delayed && (i.delayed = !1), i.pauseQueue.delete(p), i.timeouts.delete(u), e <= (i.cancelId || 0) && (f = !0);
			try {
				o.start(se({}, n, {
					callId: e,
					cancel: f
				}), s)
			} catch (m) {
				a(m)
			}
		}
	})
}
const To = (e, t) => t.length == 1 ? t[0] : t.some(n => n.cancelled) ? jt(e.get()) : t.every(n => n.noop) ? ou(e.get()) : Qe(e.get(), t.every(n => n.finished)),
	ou = e => ({
		value: e,
		noop: !0,
		finished: !0,
		cancelled: !1
	}),
	Qe = (e, t, n = !1) => ({
		value: e,
		finished: t,
		cancelled: n
	}),
	jt = e => ({
		value: e,
		cancelled: !0,
		finished: !1
	});

function su(e, t, n, r) {
	const {
		callId: i,
		parentId: o,
		onRest: s
	} = t, {
		asyncTo: a,
		promise: l
	} = n;
	return !o && e === a && !t.reset ? l : n.promise = (async () => {
		n.asyncId = i, n.asyncTo = e;
		const c = Lr(t, (g, y) => y === "onRest" ? void 0 : g);
		let u, f;
		const p = new Promise((g, y) => (u = g, f = y)),
			h = g => {
				const y = i <= (n.cancelId || 0) && jt(r) || i !== n.asyncId && Qe(r, !1);
				if (y) throw g.result = y, f(g), g
			},
			d = (g, y) => {
				const k = new Us,
					w = new Vs;
				return (async () => {
					if (st.skipAnimation) throw Rn(n), w.result = Qe(r, !1), f(w), w;
					h(k);
					const C = M.obj(g) ? se({}, g) : se({}, y, {
						to: g
					});
					C.parentId = i, ot(c, (b, A) => {
						M.und(C[A]) && (C[A] = b)
					});
					const E = await r.start(C);
					return h(k), n.paused && await new Promise(b => {
						n.resumeQueue.add(b)
					}), E
				})()
			};
		let m;
		if (st.skipAnimation) return Rn(n), Qe(r, !1);
		try {
			let g;
			M.arr(e) ? g = (async y => {
				for (const k of y) await d(k)
			})(e) : g = Promise.resolve(e(d, r.stop.bind(r))), await Promise.all([g.then(u), p]), m = Qe(r.get(), !0, !1)
		} catch (g) {
			if (g instanceof Us) m = g.result;
			else if (g instanceof Vs) m = g.result;
			else throw g
		} finally {
			i == n.asyncId && (n.asyncId = o, n.asyncTo = o ? a : void 0, n.promise = o ? l : void 0)
		}
		return M.fun(s) && W.batchedUpdates(() => {
			s(m, r, r.item)
		}), m
	})()
}

function Rn(e, t) {
	vn(e.timeouts, n => n.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
}
class Us extends Error {
	constructor() {
		super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."), this.result = void 0
	}
}
class Vs extends Error {
	constructor() {
		super("SkipAnimationSignal"), this.result = void 0
	}
}
const Qi = e => e instanceof Ao;
let dh = 1;
class Ao extends Yl {
	constructor(...t) {
		super(...t), this.id = dh++, this.key = void 0, this._priority = 0
	}
	get priority() {
		return this._priority
	}
	set priority(t) {
		this._priority != t && (this._priority = t, this._onPriorityChange(t))
	}
	get() {
		const t = et(this);
		return t && t.getValue()
	}
	to(...t) {
		return st.to(this, t)
	}
	interpolate(...t) {
		return qd(), st.to(this, t)
	}
	toJSON() {
		return this.get()
	}
	observerAdded(t) {
		t == 1 && this._attach()
	}
	observerRemoved(t) {
		t == 0 && this._detach()
	}
	_attach() {}
	_detach() {}
	_onChange(t, n = !1) {
		An(this, {
			type: "change",
			parent: this,
			value: t,
			idle: n
		})
	}
	_onPriorityChange(t) {
		this.idle || Ar.sort(this), An(this, {
			type: "priority",
			parent: this,
			priority: t
		})
	}
}
const Mt = Symbol.for("SpringPhase"),
	au = 1,
	Yi = 2,
	Xi = 4,
	ci = e => (e[Mt] & au) > 0,
	mt = e => (e[Mt] & Yi) > 0,
	nn = e => (e[Mt] & Xi) > 0,
	$s = (e, t) => t ? e[Mt] |= Yi | au : e[Mt] &= ~Yi,
	Hs = (e, t) => t ? e[Mt] |= Xi : e[Mt] &= ~Xi;
class hh extends Ao {
	constructor(t, n) {
		if (super(), this.key = void 0, this.animation = new fh, this.queue = void 0, this.defaultProps = {}, this._state = {
				paused: !1,
				delayed: !1,
				pauseQueue: new Set,
				resumeQueue: new Set,
				timeouts: new Set
			}, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !M.und(t) || !M.und(n)) {
			const r = M.obj(t) ? se({}, t) : se({}, n, {
				from: t
			});
			M.und(r.default) && (r.default = !0), this.start(r)
		}
	}
	get idle() {
		return !(mt(this) || this._state.asyncTo) || nn(this)
	}
	get goal() {
		return Me(this.animation.to)
	}
	get velocity() {
		const t = et(this);
		return t instanceof Kt ? t.lastVelocity || 0 : t.getPayload().map(n => n.lastVelocity || 0)
	}
	get hasAnimated() {
		return ci(this)
	}
	get isAnimating() {
		return mt(this)
	}
	get isPaused() {
		return nn(this)
	}
	get isDelayed() {
		return this._state.delayed
	}
	advance(t) {
		let n = !0,
			r = !1;
		const i = this.animation;
		let {
			config: o,
			toValues: s
		} = i;
		const a = Rr(i.to);
		!a && Be(i.to) && (s = Ce(Me(i.to))), i.values.forEach((u, f) => {
			if (u.done) return;
			const p = u.constructor == Qt ? 1 : a ? a[f].lastPosition : s[f];
			let h = i.immediate,
				d = p;
			if (!h) {
				if (d = u.lastPosition, o.tension <= 0) {
					u.done = !0;
					return
				}
				let m = u.elapsedTime += t;
				const g = i.fromValues[f],
					y = u.v0 != null ? u.v0 : u.v0 = M.arr(o.velocity) ? o.velocity[f] : o.velocity;
				let k;
				if (M.und(o.duration))
					if (o.decay) {
						const w = o.decay === !0 ? .998 : o.decay,
							C = Math.exp(-(1 - w) * m);
						d = g + y / (1 - w) * (1 - C), h = Math.abs(u.lastPosition - d) < .1, k = y * C
					} else {
						k = u.lastVelocity == null ? y : u.lastVelocity;
						const w = o.precision || (g == p ? .005 : Math.min(1, Math.abs(p - g) * .001)),
							C = o.restVelocity || w / 10,
							E = o.clamp ? 0 : o.bounce,
							b = !M.und(E),
							A = g == p ? u.v0 > 0 : g < p;
						let R, F = !1;
						const z = 1,
							O = Math.ceil(t / z);
						for (let L = 0; L < O && (R = Math.abs(k) > C, !(!R && (h = Math.abs(p - d) <= w, h))); ++L) {
							b && (F = d == p || d > p == A, F && (k = -k * E, d = p));
							const B = -o.tension * 1e-6 * (d - p),
								D = -o.friction * .001 * k,
								N = (B + D) / o.mass;
							k = k + N * z, d = d + k * z
						}
					}
				else {
					let w = 1;
					o.duration > 0 && (this._memoizedDuration !== o.duration && (this._memoizedDuration = o.duration, u.durationProgress > 0 && (u.elapsedTime = o.duration * u.durationProgress, m = u.elapsedTime += t)), w = (o.progress || 0) + m / this._memoizedDuration, w = w > 1 ? 1 : w < 0 ? 0 : w, u.durationProgress = w), d = g + o.easing(w) * (p - g), k = (d - u.lastPosition) / t, h = w == 1
				}
				u.lastVelocity = k, Number.isNaN(d) && (console.warn("Got NaN while animating:", this), h = !0)
			}
			a && !a[f].done && (h = !1), h ? u.done = !0 : n = !1, u.setValue(d, o.round) && (r = !0)
		});
		const l = et(this),
			c = l.getValue();
		if (n) {
			const u = Me(i.to);
			(c !== u || r) && !o.decay ? (l.setValue(u), this._onChange(u)) : r && o.decay && this._onChange(c), this._stop()
		} else r && this._onChange(c)
	}
	set(t) {
		return W.batchedUpdates(() => {
			this._stop(), this._focus(t), this._set(t)
		}), this
	}
	pause() {
		this._update({
			pause: !0
		})
	}
	resume() {
		this._update({
			pause: !1
		})
	}
	finish() {
		if (mt(this)) {
			const {
				to: t,
				config: n
			} = this.animation;
			W.batchedUpdates(() => {
				this._onStart(), n.decay || this._set(t, !1), this._stop()
			})
		}
		return this
	}
	update(t) {
		return (this.queue || (this.queue = [])).push(t), this
	}
	start(t, n) {
		let r;
		return M.und(t) ? (r = this.queue || [], this.queue = []) : r = [M.obj(t) ? t : se({}, n, {
			to: t
		})], Promise.all(r.map(i => this._update(i))).then(i => To(this, i))
	}
	stop(t) {
		const {
			to: n
		} = this.animation;
		return this._focus(this.get()), Rn(this._state, t && this._lastCallId), W.batchedUpdates(() => this._stop(n, t)), this
	}
	reset() {
		this._update({
			reset: !0
		})
	}
	eventObserved(t) {
		t.type == "change" ? this._start() : t.type == "priority" && (this.priority = t.priority + 1)
	}
	_prepareNode(t) {
		const n = this.key || "";
		let {
			to: r,
			from: i
		} = t;
		r = M.obj(r) ? r[n] : r, (r == null || Hi(r)) && (r = void 0), i = M.obj(i) ? i[n] : i, i == null && (i = void 0);
		const o = {
			to: r,
			from: i
		};
		return ci(this) || (t.reverse && ([r, i] = [i, r]), i = Me(i), M.und(i) ? et(this) || this._set(r) : this._set(i)), o
	}
	_update(t, n) {
		let r = se({}, t);
		const {
			key: i,
			defaultProps: o
		} = this;
		r.default && Object.assign(o, Lr(r, (l, c) => /^on/.test(c) ? eu(l, i) : l)), Ws(this, r, "onProps"), on(this, "onProps", r, this);
		const s = this._prepareNode(r);
		if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
		const a = this._state;
		return iu(++this._lastCallId, {
			key: i,
			props: r,
			defaultProps: o,
			state: a,
			actions: {
				pause: () => {
					nn(this) || (Hs(this, !0), fn(a.pauseQueue), on(this, "onPause", Qe(this, rn(this, this.animation.to)), this))
				},
				resume: () => {
					nn(this) && (Hs(this, !1), mt(this) && this._resume(), fn(a.resumeQueue), on(this, "onResume", Qe(this, rn(this, this.animation.to)), this))
				},
				start: this._merge.bind(this, s)
			}
		}).then(l => {
			if (r.loop && l.finished && !(n && l.noop)) {
				const c = lu(r);
				if (c) return this._update(c, !0)
			}
			return l
		})
	}
	_merge(t, n, r) {
		if (n.cancel) return this.stop(!0), r(jt(this));
		const i = !M.und(t.to),
			o = !M.und(t.from);
		if (i || o)
			if (n.callId > this._lastToId) this._lastToId = n.callId;
			else return r(jt(this));
		const {
			key: s,
			defaultProps: a,
			animation: l
		} = this, {
			to: c,
			from: u
		} = l;
		let {
			to: f = c,
			from: p = u
		} = t;
		o && !i && (!n.default || M.und(f)) && (f = p), n.reverse && ([f, p] = [p, f]);
		const h = !ut(p, u);
		h && (l.from = p), p = Me(p);
		const d = !ut(f, c);
		d && this._focus(f);
		const m = Hi(n.to),
			{
				config: g
			} = l,
			{
				decay: y,
				velocity: k
			} = g;
		(i || o) && (g.velocity = 0), n.config && !m && ch(g, Ie(n.config, s), n.config !== a.config ? Ie(a.config, s) : void 0);
		let w = et(this);
		if (!w || M.und(f)) return r(Qe(this, !0));
		const C = M.und(n.reset) ? o && !n.default : !M.und(p) && wn(n.reset, s),
			E = C ? p : this.get(),
			b = In(f),
			A = M.num(b) || M.arr(b) || Ir(b),
			R = !m && (!A || wn(a.immediate || n.immediate, s));
		if (d) {
			const L = $i(f);
			if (L !== w.constructor)
				if (R) w = this._set(b);
				else throw Error(`Cannot animate between ${w.constructor.name} and ${L.name}, as the "to" prop suggests`)
		}
		const F = w.constructor;
		let z = Be(f),
			O = !1;
		if (!z) {
			const L = C || !ci(this) && h;
			(d || L) && (O = ut(In(E), b), z = !O), (!ut(l.immediate, R) && !R || !ut(g.decay, y) || !ut(g.velocity, k)) && (z = !0)
		}
		if (O && mt(this) && (l.changed && !C ? z = !0 : z || this._stop(c)), !m && ((z || Be(c)) && (l.values = w.getPayload(), l.toValues = Be(f) ? null : F == Qt ? [1] : Ce(b)), l.immediate != R && (l.immediate = R, !R && !C && this._set(c)), z)) {
			const {
				onRest: L
			} = l;
			V(mh, D => Ws(this, n, D));
			const B = Qe(this, rn(this, c));
			fn(this._pendingCalls, B), this._pendingCalls.add(r), l.changed && W.batchedUpdates(() => {
				l.changed = !C, L == null || L(B, this), C ? Ie(a.onRest, B) : l.onStart == null || l.onStart(B, this)
			})
		}
		C && this._set(E), m ? r(su(n.to, n, this._state, this)) : z ? this._start() : mt(this) && !d ? this._pendingCalls.add(r) : r(ou(E))
	}
	_focus(t) {
		const n = this.animation;
		t !== n.to && (Is(this) && this._detach(), n.to = t, Is(this) && this._attach())
	}
	_attach() {
		let t = 0;
		const {
			to: n
		} = this.animation;
		Be(n) && (Gt(n, this), Qi(n) && (t = n.priority + 1)), this.priority = t
	}
	_detach() {
		const {
			to: t
		} = this.animation;
		Be(t) && On(t, this)
	}
	_set(t, n = !0) {
		const r = Me(t);
		if (!M.und(r)) {
			const i = et(this);
			if (!i || !ut(r, i.getValue())) {
				const o = $i(r);
				!i || i.constructor != o ? Co(this, o.create(r)) : i.setValue(r), i && W.batchedUpdates(() => {
					this._onChange(r, n)
				})
			}
		}
		return et(this)
	}
	_onStart() {
		const t = this.animation;
		t.changed || (t.changed = !0, on(this, "onStart", Qe(this, rn(this, t.to)), this))
	}
	_onChange(t, n) {
		n || (this._onStart(), Ie(this.animation.onChange, t, this)), Ie(this.defaultProps.onChange, t, this), super._onChange(t, n)
	}
	_start() {
		const t = this.animation;
		et(this).reset(Me(t.to)), t.immediate || (t.fromValues = t.values.map(n => n.lastPosition)), mt(this) || ($s(this, !0), nn(this) || this._resume())
	}
	_resume() {
		st.skipAnimation ? this.finish() : Ar.start(this)
	}
	_stop(t, n) {
		if (mt(this)) {
			$s(this, !1);
			const r = this.animation;
			V(r.values, o => {
				o.done = !0
			}), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), An(this, {
				type: "idle",
				parent: this
			});
			const i = n ? jt(this.get()) : Qe(this.get(), rn(this, t != null ? t : r.to));
			fn(this._pendingCalls, i), r.changed && (r.changed = !1, on(this, "onRest", i, this))
		}
	}
}

function rn(e, t) {
	const n = In(t),
		r = In(e.get());
	return ut(r, n)
}

function lu(e, t = e.loop, n = e.to) {
	let r = Ie(t);
	if (r) {
		const i = r !== !0 && Eo(r),
			o = (i || e).reverse,
			s = !i || i.reset;
		return Pn(se({}, e, {
			loop: t,
			default: !1,
			pause: void 0,
			to: !o || Hi(n) ? n : void 0,
			from: s ? e.from : void 0,
			reset: s
		}, i))
	}
}

function Pn(e) {
	const {
		to: t,
		from: n
	} = e = Eo(e), r = new Set;
	return M.obj(t) && qs(t, r), M.obj(n) && qs(n, r), e.keys = r.size ? Array.from(r) : null, e
}

function ph(e) {
	const t = Pn(e);
	return M.und(t.default) && (t.default = Lr(t)), t
}

function qs(e, t) {
	ot(e, (n, r) => n != null && t.add(r))
}
const mh = ["onStart", "onRest", "onChange", "onPause", "onResume"];

function Ws(e, t, n) {
	e.animation[n] = t[n] !== tu(t, n) ? eu(t[n], e.key) : void 0
}

function on(e, t, ...n) {
	var r, i, o, s;
	(r = (i = e.animation)[t]) == null || r.call(i, ...n), (o = (s = e.defaultProps)[t]) == null || o.call(s, ...n)
}
const gh = ["onStart", "onChange", "onRest"];
let yh = 1;
class uu {
	constructor(t, n) {
		this.id = yh++, this.springs = {}, this.queue = [], this.ref = void 0, this._flush = void 0, this._initialProps = void 0, this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._item = void 0, this._state = {
			paused: !1,
			pauseQueue: new Set,
			resumeQueue: new Set,
			timeouts: new Set
		}, this._events = {
			onStart: new Map,
			onChange: new Map,
			onRest: new Map
		}, this._onFrame = this._onFrame.bind(this), n && (this._flush = n), t && this.start(se({
			default: !0
		}, t))
	}
	get idle() {
		return !this._state.asyncTo && Object.values(this.springs).every(t => t.idle && !t.isDelayed && !t.isPaused)
	}
	get item() {
		return this._item
	}
	set item(t) {
		this._item = t
	}
	get() {
		const t = {};
		return this.each((n, r) => t[r] = n.get()), t
	}
	set(t) {
		for (const n in t) {
			const r = t[n];
			M.und(r) || this.springs[n].set(r)
		}
	}
	update(t) {
		return t && this.queue.push(Pn(t)), this
	}
	start(t) {
		let {
			queue: n
		} = this;
		return t ? n = Ce(t).map(Pn) : this.queue = [], this._flush ? this._flush(this, n) : (pu(this, n), Gi(this, n))
	}
	stop(t, n) {
		if (t !== !!t && (n = t), n) {
			const r = this.springs;
			V(Ce(n), i => r[i].stop(!!t))
		} else Rn(this._state, this._lastAsyncId), this.each(r => r.stop(!!t));
		return this
	}
	pause(t) {
		if (M.und(t)) this.start({
			pause: !0
		});
		else {
			const n = this.springs;
			V(Ce(t), r => n[r].pause())
		}
		return this
	}
	resume(t) {
		if (M.und(t)) this.start({
			pause: !1
		});
		else {
			const n = this.springs;
			V(Ce(t), r => n[r].resume())
		}
		return this
	}
	each(t) {
		ot(this.springs, t)
	}
	_onFrame() {
		const {
			onStart: t,
			onChange: n,
			onRest: r
		} = this._events, i = this._active.size > 0, o = this._changed.size > 0;
		(i && !this._started || o && !this._started) && (this._started = !0, vn(t, ([l, c]) => {
			c.value = this.get(), l(c, this, this._item)
		}));
		const s = !i && this._started,
			a = o || s && r.size ? this.get() : null;
		o && n.size && vn(n, ([l, c]) => {
			c.value = a, l(c, this, this._item)
		}), s && (this._started = !1, vn(r, ([l, c]) => {
			c.value = a, l(c, this, this._item)
		}))
	}
	eventObserved(t) {
		if (t.type == "change") this._changed.add(t.parent), t.idle || this._active.add(t.parent);
		else if (t.type == "idle") this._active.delete(t.parent);
		else return;
		W.onFrame(this._onFrame)
	}
}

function Gi(e, t) {
	return Promise.all(t.map(n => cu(e, n))).then(n => To(e, n))
}
async function cu(e, t, n) {
	const {
		keys: r,
		to: i,
		from: o,
		loop: s,
		onRest: a,
		onResolve: l
	} = t, c = M.obj(t.default) && t.default;
	s && (t.loop = !1), i === !1 && (t.to = null), o === !1 && (t.from = null);
	const u = M.arr(i) || M.fun(i) ? i : void 0;
	u ? (t.to = void 0, t.onRest = void 0, c && (c.onRest = void 0)) : V(gh, m => {
		const g = t[m];
		if (M.fun(g)) {
			const y = e._events[m];
			t[m] = ({
				finished: k,
				cancelled: w
			}) => {
				const C = y.get(g);
				C ? (k || (C.finished = !1), w && (C.cancelled = !0)) : y.set(g, {
					value: null,
					finished: k || !1,
					cancelled: w || !1
				})
			}, c && (c[m] = t[m])
		}
	});
	const f = e._state;
	t.pause === !f.paused ? (f.paused = t.pause, fn(t.pause ? f.pauseQueue : f.resumeQueue)) : f.paused && (t.pause = !0);
	const p = (r || Object.keys(e.springs)).map(m => e.springs[m].start(t)),
		h = t.cancel === !0 || tu(t, "cancel") === !0;
	(u || h && f.asyncId) && p.push(iu(++e._lastAsyncId, {
		props: t,
		state: f,
		actions: {
			pause: ji,
			resume: ji,
			start(m, g) {
				h ? (Rn(f, e._lastAsyncId), g(jt(e))) : (m.onRest = a, g(su(u, m, f, e)))
			}
		}
	})), f.paused && await new Promise(m => {
		f.resumeQueue.add(m)
	});
	const d = To(e, await Promise.all(p));
	if (s && d.finished && !(n && d.noop)) {
		const m = lu(t, s, i);
		if (m) return pu(e, [m]), cu(e, m, !0)
	}
	return l && W.batchedUpdates(() => l(d, e, e.item)), d
}

function Ki(e, t) {
	const n = se({}, e.springs);
	return t && V(Ce(t), r => {
		M.und(r.keys) && (r = Pn(r)), M.obj(r.to) || (r = se({}, r, {
			to: void 0
		})), hu(n, r, i => du(i))
	}), fu(e, n), n
}

function fu(e, t) {
	ot(t, (n, r) => {
		e.springs[r] || (e.springs[r] = n, Gt(n, e))
	})
}

function du(e, t) {
	const n = new hh;
	return n.key = e, t && Gt(n, t), n
}

function hu(e, t, n) {
	t.keys && V(t.keys, r => {
		(e[r] || (e[r] = n(r)))._prepareNode(t)
	})
}

function pu(e, t) {
	V(t, n => {
		hu(e.springs, n, r => du(r, e))
	})
}

function bh(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		i, o;
	for (o = 0; o < r.length; o++) i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n
}
const vh = ["children"],
	Un = e => {
		let {
			children: t
		} = e, n = bh(e, vh);
		const r = Nn(wr),
			i = n.pause || !!r.pause,
			o = n.immediate || !!r.immediate;
		n = Xd(() => ({
			pause: i,
			immediate: o
		}), [i, o]);
		const {
			Provider: s
		} = wr;
		return we(s, {
			value: n
		}, t)
	},
	wr = _h(Un, {});
Un.Provider = wr.Provider;
Un.Consumer = wr.Consumer;

function _h(e, t) {
	return Object.assign(e, Sr(t)), e.Provider._context = e, e.Consumer._context = e, e
}
const mu = () => {
	const e = [],
		t = function(i) {
			Qd();
			const o = [];
			return V(e, (s, a) => {
				if (M.und(i)) o.push(s.start());
				else {
					const l = n(i, s, a);
					l && o.push(s.start(l))
				}
			}), o
		};
	t.current = e, t.add = function(r) {
		e.includes(r) || e.push(r)
	}, t.delete = function(r) {
		const i = e.indexOf(r);
		~i && e.splice(i, 1)
	}, t.pause = function() {
		return V(e, r => r.pause(...arguments)), this
	}, t.resume = function() {
		return V(e, r => r.resume(...arguments)), this
	}, t.set = function(r) {
		V(e, i => i.set(r))
	}, t.start = function(r) {
		const i = [];
		return V(e, (o, s) => {
			if (M.und(r)) i.push(o.start());
			else {
				const a = this._getProps(r, o, s);
				a && i.push(o.start(a))
			}
		}), i
	}, t.stop = function() {
		return V(e, r => r.stop(...arguments)), this
	}, t.update = function(r) {
		return V(e, (i, o) => i.update(this._getProps(r, i, o))), this
	};
	const n = function(i, o, s) {
		return M.fun(i) ? i(s, o) : i
	};
	return t._getProps = n, t
};

function wh(e, t, n) {
	const r = M.fun(t) && t;
	r && !n && (n = []);
	const i = rt(() => r || arguments.length == 3 ? mu() : void 0, []),
		o = ye(0),
		s = xo(),
		a = rt(() => ({
			ctrls: [],
			queue: [],
			flush(y, k) {
				const w = Ki(y, k);
				return o.current > 0 && !a.queue.length && !Object.keys(w).some(E => !y.springs[E]) ? Gi(y, k) : new Promise(E => {
					fu(y, w), a.queue.push(() => {
						E(Gi(y, k))
					}), s()
				})
			}
		}), []),
		l = ye([...a.ctrls]),
		c = [],
		u = Vi(e) || 0;
	rt(() => {
		V(l.current.slice(e, u), y => {
			qi(y, i), y.stop(!0)
		}), l.current.length = e, f(u, e)
	}, [e]), rt(() => {
		f(0, Math.min(u, e))
	}, n);

	function f(y, k) {
		for (let w = y; w < k; w++) {
			const C = l.current[w] || (l.current[w] = new uu(null, a.flush)),
				E = r ? r(w, C) : t[w];
			E && (c[w] = ph(E))
		}
	}
	const p = l.current.map((y, k) => Ki(y, c[k])),
		h = Nn(Un),
		d = Vi(h),
		m = h !== d && nu(h);
	St(() => {
		o.current++, a.ctrls = l.current;
		const {
			queue: y
		} = a;
		y.length && (a.queue = [], V(y, k => k())), V(l.current, (k, w) => {
			i == null || i.add(k), m && k.start({
				default: h
			});
			const C = c[w];
			C && (ru(k, C.ref), k.ref ? k.queue.push(C) : k.start(C))
		})
	}), ko(() => () => {
		V(a.ctrls, y => y.stop(!0))
	});
	const g = p.map(y => se({}, y));
	return i ? [g, i] : g
}

function xr(e, t) {
	const n = M.fun(e),
		[
			[r], i
		] = wh(1, n ? e : [e], n ? t || [] : t);
	return n || arguments.length == 2 ? [r, i] : r
}
let ke;
(function(e) {
	e.MOUNT = "mount", e.ENTER = "enter", e.UPDATE = "update", e.LEAVE = "leave"
})(ke || (ke = {}));

function gu(e, t, n) {
	const r = M.fun(t) && t,
		{
			reset: i,
			sort: o,
			trail: s = 0,
			expires: a = !0,
			exitBeforeEnter: l = !1,
			onDestroyed: c,
			ref: u,
			config: f
		} = r ? r() : t,
		p = rt(() => r || arguments.length == 3 ? mu() : void 0, []),
		h = Ce(e),
		d = [],
		m = ye(null),
		g = i ? null : m.current;
	St(() => {
		m.current = d
	}), ko(() => (V(d, D => {
		p == null || p.add(D.ctrl), D.ctrl.ref = p
	}), () => {
		V(m.current, D => {
			D.expired && clearTimeout(D.expirationId), qi(D.ctrl, p), D.ctrl.stop(!0)
		})
	}));
	const y = kh(h, r ? r() : t, g),
		k = i && m.current || [];
	St(() => V(k, ({
		ctrl: D,
		item: N,
		key: x
	}) => {
		qi(D, p), Ie(c, N, x)
	}));
	const w = [];
	if (g && V(g, (D, N) => {
			D.expired ? (clearTimeout(D.expirationId), k.push(D)) : (N = w[N] = y.indexOf(D.key), ~N && (d[N] = D))
		}), V(h, (D, N) => {
			d[N] || (d[N] = {
				key: y[N],
				item: D,
				phase: ke.MOUNT,
				ctrl: new uu
			}, d[N].ctrl.item = D)
		}), w.length) {
		let D = -1;
		const {
			leave: N
		} = r ? r() : t;
		V(w, (x, X) => {
			const $ = g[X];
			~x ? (D = d.indexOf($), d[D] = se({}, $, {
				item: h[x]
			})) : N && d.splice(++D, 0, $)
		})
	}
	M.fun(o) && d.sort((D, N) => o(D.item, N.item));
	let C = -s;
	const E = xo(),
		b = Lr(t),
		A = new Map,
		R = ye(new Map),
		F = ye(!1);
	V(d, (D, N) => {
		const x = D.key,
			X = D.phase,
			$ = r ? r() : t;
		let Z, K, _ = Ie($.delay || 0, x);
		if (X == ke.MOUNT) Z = $.enter, K = ke.ENTER;
		else {
			const ge = y.indexOf(x) < 0;
			if (X != ke.LEAVE)
				if (ge) Z = $.leave, K = ke.LEAVE;
				else if (Z = $.update) K = ke.UPDATE;
			else return;
			else if (!ge) Z = $.enter, K = ke.ENTER;
			else return
		}
		if (Z = Ie(Z, D.item, N), Z = M.obj(Z) ? Eo(Z) : {
				to: Z
			}, !Z.config) {
			const ge = f || b.config;
			Z.config = Ie(ge, D.item, N, K)
		}
		C += s;
		const v = se({}, b, {
			delay: _ + C,
			ref: u,
			immediate: $.immediate,
			reset: !1
		}, Z);
		if (K == ke.ENTER && M.und(v.from)) {
			const ge = r ? r() : t,
				ne = M.und(ge.initial) || g ? ge.from : ge.initial;
			v.from = Ie(ne, D.item, N)
		}
		const {
			onResolve: ze
		} = v;
		v.onResolve = ge => {
			Ie(ze, ge);
			const ne = m.current,
				fe = ne.find(Te => Te.key === x);
			if (!!fe && !(ge.cancelled && fe.phase != ke.UPDATE) && fe.ctrl.idle) {
				const Te = ne.every(Ae => Ae.ctrl.idle);
				if (fe.phase == ke.LEAVE) {
					const Ae = Ie(a, fe.item);
					if (Ae !== !1) {
						const Ke = Ae === !0 ? 0 : Ae;
						if (fe.expired = !0, !Te && Ke > 0) {
							Ke <= 2147483647 && (fe.expirationId = setTimeout(E, Ke));
							return
						}
					}
				}
				Te && ne.some(Ae => Ae.expired) && (R.current.delete(fe), l && (F.current = !0), E())
			}
		};
		const pt = Ki(D.ctrl, v);
		K === ke.LEAVE && l ? R.current.set(D, {
			phase: K,
			springs: pt,
			payload: v
		}) : A.set(D, {
			phase: K,
			springs: pt,
			payload: v
		})
	});
	const z = Nn(Un),
		O = Vi(z),
		L = z !== O && nu(z);
	St(() => {
		L && V(d, D => {
			D.ctrl.start({
				default: z
			})
		})
	}, [z]), V(A, (D, N) => {
		if (R.current.size) {
			const x = d.findIndex(X => X.key === N.key);
			d.splice(x, 1)
		}
	}), St(() => {
		V(R.current.size ? R.current : A, ({
			phase: D,
			payload: N
		}, x) => {
			const {
				ctrl: X
			} = x;
			x.phase = D, p == null || p.add(X), L && D == ke.ENTER && X.start({
				default: z
			}), N && (ru(X, N.ref), (X.ref || p) && !F.current ? X.update(N) : (X.start(N), F.current && (F.current = !1)))
		})
	}, i ? void 0 : n);
	const B = D => we(Fe, null, d.map((N, x) => {
		const {
			springs: X
		} = A.get(N) || N.ctrl, $ = D(se({}, X), N.item, N, x);
		return $ && $.type ? we($.type, se({}, $.props, {
			key: M.str(N.key) || M.num(N.key) ? N.key : N.ctrl.id,
			ref: $.ref
		})) : $
	}));
	return p ? [B, p] : B
}
let xh = 1;

function kh(e, {
	key: t,
	keys: n = t
}, r) {
	if (n === null) {
		const i = new Set;
		return e.map(o => {
			const s = r && r.find(a => a.item === o && a.phase !== ke.LEAVE && !i.has(a));
			return s ? (i.add(s), s.key) : xh++
		})
	}
	return M.und(n) ? e : M.fun(n) ? e.map(n) : Ce(n)
}
class Ch extends Ao {
	constructor(t, n) {
		super(), this.key = void 0, this.idle = !0, this.calc = void 0, this._active = new Set, this.source = t, this.calc = Tn(...n);
		const r = this._get(),
			i = $i(r);
		Co(this, i.create(r))
	}
	advance(t) {
		const n = this._get(),
			r = this.get();
		ut(n, r) || (et(this).setValue(n), this._onChange(n, this.idle)), !this.idle && Qs(this._active) && fi(this)
	}
	_get() {
		const t = M.arr(this.source) ? this.source.map(Me) : Ce(Me(this.source));
		return this.calc(...t)
	}
	_start() {
		this.idle && !Qs(this._active) && (this.idle = !1, V(Rr(this), t => {
			t.done = !1
		}), st.skipAnimation ? (W.batchedUpdates(() => this.advance()), fi(this)) : Ar.start(this))
	}
	_attach() {
		let t = 1;
		V(Ce(this.source), n => {
			Be(n) && Gt(n, this), Qi(n) && (n.idle || this._active.add(n), t = Math.max(t, n.priority + 1))
		}), this.priority = t, this._start()
	}
	_detach() {
		V(Ce(this.source), t => {
			Be(t) && On(t, this)
		}), this._active.clear(), fi(this)
	}
	eventObserved(t) {
		t.type == "change" ? t.idle ? this.advance() : (this._active.add(t.parent), this._start()) : t.type == "idle" ? this._active.delete(t.parent) : t.type == "priority" && (this.priority = Ce(this.source).reduce((n, r) => Math.max(n, (Qi(r) ? r.priority : 0) + 1), 0))
	}
}

function Sh(e) {
	return e.idle !== !1
}

function Qs(e) {
	return !e.size || Array.from(e).every(Sh)
}

function fi(e) {
	e.idle || (e.idle = !0, V(Rr(e), t => {
		t.done = !0
	}), An(e, {
		type: "idle",
		parent: e
	}))
}
st.assign({
	createStringInterpolator: Kl,
	to: (e, t) => new Ch(e, t)
});

function Oo(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		i, o;
	for (o = 0; o < r.length; o++) i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n
}
const Eh = ["style", "children", "scrollTop", "scrollLeft"],
	yu = /^--/;

function Th(e, t) {
	return t == null || typeof t == "boolean" || t === "" ? "" : typeof t == "number" && t !== 0 && !yu.test(e) && !(xn.hasOwnProperty(e) && xn[e]) ? t + "px" : ("" + t).trim()
}
const Ys = {};

function Ah(e, t) {
	if (!e.nodeType || !e.setAttribute) return !1;
	const n = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter",
		r = t,
		{
			style: i,
			children: o,
			scrollTop: s,
			scrollLeft: a
		} = r,
		l = Oo(r, Eh),
		c = Object.values(l),
		u = Object.keys(l).map(f => n || e.hasAttribute(f) ? f : Ys[f] || (Ys[f] = f.replace(/([A-Z])/g, p => "-" + p.toLowerCase())));
	o !== void 0 && (e.textContent = o);
	for (let f in i)
		if (i.hasOwnProperty(f)) {
			const p = Th(f, i[f]);
			yu.test(f) ? e.style.setProperty(f, p) : e.style[f] = p
		} u.forEach((f, p) => {
		e.setAttribute(f, c[p])
	}), s !== void 0 && (e.scrollTop = s), a !== void 0 && (e.scrollLeft = a)
}
let xn = {
	animationIterationCount: !0,
	borderImageOutset: !0,
	borderImageSlice: !0,
	borderImageWidth: !0,
	boxFlex: !0,
	boxFlexGroup: !0,
	boxOrdinalGroup: !0,
	columnCount: !0,
	columns: !0,
	flex: !0,
	flexGrow: !0,
	flexPositive: !0,
	flexShrink: !0,
	flexNegative: !0,
	flexOrder: !0,
	gridRow: !0,
	gridRowEnd: !0,
	gridRowSpan: !0,
	gridRowStart: !0,
	gridColumn: !0,
	gridColumnEnd: !0,
	gridColumnSpan: !0,
	gridColumnStart: !0,
	fontWeight: !0,
	lineClamp: !0,
	lineHeight: !0,
	opacity: !0,
	order: !0,
	orphans: !0,
	tabSize: !0,
	widows: !0,
	zIndex: !0,
	zoom: !0,
	fillOpacity: !0,
	floodOpacity: !0,
	stopOpacity: !0,
	strokeDasharray: !0,
	strokeDashoffset: !0,
	strokeMiterlimit: !0,
	strokeOpacity: !0,
	strokeWidth: !0
};
const Oh = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1),
	Mh = ["Webkit", "Ms", "Moz", "O"];
xn = Object.keys(xn).reduce((e, t) => (Mh.forEach(n => e[Oh(n, t)] = e[t]), e), xn);
const Ih = ["x", "y", "z"],
	Rh = /^(matrix|translate|scale|rotate|skew)/,
	Ph = /^(translate)/,
	Lh = /^(rotate|skew)/,
	di = (e, t) => M.num(e) && e !== 0 ? e + t : e,
	or = (e, t) => M.arr(e) ? e.every(n => or(n, t)) : M.num(e) ? e === t : parseFloat(e) === t;
class Dh extends Pr {
	constructor(t) {
		let {
			x: n,
			y: r,
			z: i
		} = t, o = Oo(t, Ih);
		const s = [],
			a = [];
		(n || r || i) && (s.push([n || 0, r || 0, i || 0]), a.push(l => [`translate3d(${l.map(c=>di(c,"px")).join(",")})`, or(l, 0)])), ot(o, (l, c) => {
			if (c === "transform") s.push([l || ""]), a.push(u => [u, u === ""]);
			else if (Rh.test(c)) {
				if (delete o[c], M.und(l)) return;
				const u = Ph.test(c) ? "px" : Lh.test(c) ? "deg" : "";
				s.push(Ce(l)), a.push(c === "rotate3d" ? ([f, p, h, d]) => [`rotate3d(${f},${p},${h},${di(d,u)})`, or(d, 0)] : f => [`${c}(${f.map(p=>di(p,u)).join(",")})`, or(f, c.startsWith("scale") ? 1 : 0)])
			}
		}), s.length && (o.transform = new Fh(s, a)), super(o)
	}
}
class Fh extends Yl {
	constructor(t, n) {
		super(), this._value = null, this.inputs = t, this.transforms = n
	}
	get() {
		return this._value || (this._value = this._get())
	}
	_get() {
		let t = "",
			n = !0;
		return V(this.inputs, (r, i) => {
			const o = Me(r[0]),
				[s, a] = this.transforms[i](M.arr(o) ? o : r.map(Me));
			t += " " + s, n = n && a
		}), n ? "none" : t
	}
	observerAdded(t) {
		t == 1 && V(this.inputs, n => V(n, r => Be(r) && Gt(r, this)))
	}
	observerRemoved(t) {
		t == 0 && V(this.inputs, n => V(n, r => Be(r) && On(r, this)))
	}
	eventObserved(t) {
		t.type == "change" && (this._value = null), An(this, t)
	}
}
const zh = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"],
	Nh = ["scrollTop", "scrollLeft"];
st.assign({
	batchedUpdates: zl,
	createStringInterpolator: Kl,
	colors: Ed
});
const jh = rh(zh, {
		applyAnimatedValues: Ah,
		createAnimatedStyle: e => new Dh(e),
		getComponentProps: e => Oo(e, Nh)
	}),
	Yt = jh.animated;

function Bh(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function")
}
var bu = Bh,
	Uh = typeof ln == "object" && ln && ln.Object === Object && ln,
	Vh = Uh,
	$h = Vh,
	Hh = typeof self == "object" && self && self.Object === Object && self,
	qh = $h || Hh || Function("return this")(),
	vu = qh,
	Wh = vu,
	Qh = function() {
		return Wh.Date.now()
	},
	Yh = Qh,
	Xh = /\s/;

function Gh(e) {
	for (var t = e.length; t-- && Xh.test(e.charAt(t)););
	return t
}
var Kh = Gh,
	Zh = Kh,
	Jh = /^\s+/;

function ep(e) {
	return e && e.slice(0, Zh(e) + 1).replace(Jh, "")
}
var tp = ep,
	np = vu,
	rp = np.Symbol,
	_u = rp,
	Xs = _u,
	wu = Object.prototype,
	ip = wu.hasOwnProperty,
	op = wu.toString,
	sn = Xs ? Xs.toStringTag : void 0;

function sp(e) {
	var t = ip.call(e, sn),
		n = e[sn];
	try {
		e[sn] = void 0;
		var r = !0
	} catch {}
	var i = op.call(e);
	return r && (t ? e[sn] = n : delete e[sn]), i
}
var ap = sp,
	lp = Object.prototype,
	up = lp.toString;

function cp(e) {
	return up.call(e)
}
var fp = cp,
	Gs = _u,
	dp = ap,
	hp = fp,
	pp = "[object Null]",
	mp = "[object Undefined]",
	Ks = Gs ? Gs.toStringTag : void 0;

function gp(e) {
	return e == null ? e === void 0 ? mp : pp : Ks && Ks in Object(e) ? dp(e) : hp(e)
}
var yp = gp;

function bp(e) {
	return e != null && typeof e == "object"
}
var vp = bp,
	_p = yp,
	wp = vp,
	xp = "[object Symbol]";

function kp(e) {
	return typeof e == "symbol" || wp(e) && _p(e) == xp
}
var Cp = kp,
	Sp = tp,
	Zs = bu,
	Ep = Cp,
	Js = 0 / 0,
	Tp = /^[-+]0x[0-9a-f]+$/i,
	Ap = /^0b[01]+$/i,
	Op = /^0o[0-7]+$/i,
	Mp = parseInt;

function Ip(e) {
	if (typeof e == "number") return e;
	if (Ep(e)) return Js;
	if (Zs(e)) {
		var t = typeof e.valueOf == "function" ? e.valueOf() : e;
		e = Zs(t) ? t + "" : t
	}
	if (typeof e != "string") return e === 0 ? e : +e;
	e = Sp(e);
	var n = Ap.test(e);
	return n || Op.test(e) ? Mp(e.slice(2), n ? 2 : 8) : Tp.test(e) ? Js : +e
}
var Rp = Ip,
	Pp = bu,
	hi = Yh,
	ea = Rp,
	Lp = "Expected a function",
	Dp = Math.max,
	Fp = Math.min;

function zp(e, t, n) {
	var r, i, o, s, a, l, c = 0,
		u = !1,
		f = !1,
		p = !0;
	if (typeof e != "function") throw new TypeError(Lp);
	t = ea(t) || 0, Pp(n) && (u = !!n.leading, f = "maxWait" in n, o = f ? Dp(ea(n.maxWait) || 0, t) : o, p = "trailing" in n ? !!n.trailing : p);

	function h(b) {
		var A = r,
			R = i;
		return r = i = void 0, c = b, s = e.apply(R, A), s
	}

	function d(b) {
		return c = b, a = setTimeout(y, t), u ? h(b) : s
	}

	function m(b) {
		var A = b - l,
			R = b - c,
			F = t - A;
		return f ? Fp(F, o - R) : F
	}

	function g(b) {
		var A = b - l,
			R = b - c;
		return l === void 0 || A >= t || A < 0 || f && R >= o
	}

	function y() {
		var b = hi();
		if (g(b)) return k(b);
		a = setTimeout(y, m(b))
	}

	function k(b) {
		return a = void 0, p && r ? h(b) : (r = i = void 0, s)
	}

	function w() {
		a !== void 0 && clearTimeout(a), c = 0, r = l = i = a = void 0
	}

	function C() {
		return a === void 0 ? s : k(hi())
	}

	function E() {
		var b = hi(),
			A = g(b);
		if (r = arguments, i = this, l = b, A) {
			if (a === void 0) return d(l);
			if (f) return clearTimeout(a), a = setTimeout(y, t), h(l)
		}
		return a === void 0 && (a = setTimeout(y, t)), s
	}
	return E.cancel = w, E.flush = C, E
}
var Np = zp;

function Mo({
	title: e
}) {
	return S("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		fill: "currentcolor",
		width: "100%",
		height: "100%",
		preserveAspectRatio: "xMidYMid",
		viewBox: "0 0 100 100",
		children: [S("title", {
			children: e
		}), S("rect", {
			width: "0.738em",
			height: "0.738em",
			x: "42.5",
			y: "22.5",
			rx: "7.5",
			ry: "7.5",
			children: S("animate", {
				attributeName: "opacity",
				begin: "-0.8s",
				dur: "1s",
				keyTimes: "0;1",
				repeatCount: "indefinite",
				values: "1;0"
			})
		}), S("rect", {
			width: "0.738em",
			height: "0.738em",
			x: "42.5",
			y: "22.5",
			rx: "7.5",
			ry: "7.5",
			transform: "rotate(72 50 50)",
			children: S("animate", {
				attributeName: "opacity",
				begin: "-0.6s",
				dur: "1s",
				keyTimes: "0;1",
				repeatCount: "indefinite",
				values: "1;0"
			})
		}), S("rect", {
			width: "0.738em",
			height: "0.738em",
			x: "42.5",
			y: "22.5",
			rx: "7.5",
			ry: "7.5",
			transform: "rotate(144 50 50)",
			children: S("animate", {
				attributeName: "opacity",
				begin: "-0.4s",
				dur: "1s",
				keyTimes: "0;1",
				repeatCount: "indefinite",
				values: "1;0"
			})
		}), S("rect", {
			width: "0.738em",
			height: "0.738em",
			x: "42.5",
			y: "22.5",
			rx: "7.5",
			ry: "7.5",
			transform: "rotate(216 50 50)",
			children: S("animate", {
				attributeName: "opacity",
				begin: "-0.2s",
				dur: "1s",
				keyTimes: "0;1",
				repeatCount: "indefinite",
				values: "1;0"
			})
		}), S("rect", {
			width: "0.738em",
			height: "0.738em",
			x: "42.5",
			y: "22.5",
			rx: "7.5",
			ry: "7.5",
			transform: "rotate(288 50 50)",
			children: S("animate", {
				attributeName: "opacity",
				begin: "0s",
				dur: "1s",
				keyTimes: "0;1",
				repeatCount: "indefinite",
				values: "1;0"
			})
		})]
	})
}
Mo.defaultProps = {
	title: "Loading..."
};
var xu = {
	exports: {}
};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
(function(e) {
	(function() {
		var t = {}.hasOwnProperty;

		function n() {
			for (var r = [], i = 0; i < arguments.length; i++) {
				var o = arguments[i];
				if (!!o) {
					var s = typeof o;
					if (s === "string" || s === "number") r.push(o);
					else if (Array.isArray(o)) {
						if (o.length) {
							var a = n.apply(null, o);
							a && r.push(a)
						}
					} else if (s === "object")
						if (o.toString === Object.prototype.toString)
							for (var l in o) t.call(o, l) && o[l] && r.push(l);
						else r.push(o.toString())
				}
			}
			return r.join(" ")
		}
		e.exports ? (n.default = n, e.exports = n) : window.classNames = n
	})()
})(xu);
var Le = xu.exports;
const jp = (e, t) => {
	const n = Math.round(t.width * devicePixelRatio),
		r = Math.round(t.height * devicePixelRatio);
	e.sendVideoBounds(n, r)
};

function ku({
	loadingIndicator: e,
	autoConnect: t
}) {
	var m;
	const {
		videoRef: n,
		scene: r,
		connectionStatus: i,
		isVideoMuted: o,
		connect: s
	} = It(), a = (m = r.videoElement) == null ? void 0 : m.srcObject, l = i === _e.CONNECTING, c = i === _e.CONNECTED, {
		observe: u
	} = _d({
		onResize: rt(() => Np(({
			width: g,
			height: y
		}) => {
			jp(r, {
				width: g,
				height: y
			})
		}, 500), [r])
	}), f = dt(() => {
		n.current && (document.visibilityState !== "visible" ? n.current.pause() : n.current.play())
	}, [n]), p = xr({
		opacity: c ? "1" : "0",
		delay: c ? 1100 : 0,
		config: Dr.gentle
	}), h = Le({
		"sm-w-full sm-h-full sm-overflow-hidden": !0,
		"sm-hidden": !c && !l
	}), d = Le({
		"sm-w-full sm-h-full sm-object-cover": !0,
		"sm-hidden": !c
	});
	return pe(() => {
		t && s()
	}, [s, t]), pe(() => {
		n.current && a && (n.current.srcObject = a)
	}, [n, a]), pe(() => (c && document.addEventListener("visibilitychange", f), () => {
		document.removeEventListener("visibilitychange", f)
	}), [c, f]), S("div", {
		className: h,
		children: [l && (e || S(Mo, {})), S(Yt.video, {
			style: p,
			autoPlay: !0,
			playsInline: !0,
			"data-sm-video": !0,
			className: d,
			muted: o,
			ref: g => {
				u(g), g && (n.current = g)
			}
		})]
	})
}

function Cu({
	autoConnect: e,
	tokenServer: t,
	apiKey: n,
	connectingIndicator: r
}) {
	return S(Ml, {
		apiKey: n,
		tokenServer: t,
		children: S(ku, {
			autoConnect: e === "true",
			loadingIndicator: r
		})
	})
}
Cu.defaultProps = {
	autoConnect: "true"
};
ao.exports.define("sm-video", () => Cu, {
	attributes: ["api-key", "token-server", "auto-connect"]
});
const Bp = ({
		title: e
	}) => S(Fe, {
		children: [S("span", {
			class: "sm-sr-only",
			children: e
		}), S("span", {
			className: "sm-h-1 sm-w-1 sm-rounded-full sm-origin-center sm-bg-black"
		}), S("span", {
			className: "sm-h-1 sm-w-1 sm-rounded-full sm-origin-center sm-bg-black"
		}), S("span", {
			className: "sm-h-1 sm-w-1 sm-rounded-full sm-origin-center sm-bg-black"
		}), S("span", {
			className: "sm-h-1 sm-w-1 sm-rounded-full sm-origin-center sm-bg-black"
		})]
	}),
	ta = ({
		title: e
	}) => S(Fe, {
		children: [S("span", {
			class: "sm-sr-only",
			children: e
		}), S("span", {
			className: "sm-h-4 sm-w-1 sm-rounded-full sm-origin-center sm-bg-white sm-animate-[grow_1.3s_ease-in-out_infinite_0.3s]"
		}), S("span", {
			className: "sm-h-4 sm-w-1 sm-rounded-full sm-origin-center sm-bg-white sm-animate-[grow_0.95s_ease-in-out_infinite]"
		}), S("span", {
			className: "sm-h-4 sm-w-1 sm-rounded-full sm-origin-center sm-bg-white sm-animate-[grow_0.65s_ease-in-out_infinite_0.15s]"
		}), S("span", {
			className: "sm-h-4 sm-w-1 sm-rounded-full sm-origin-center sm-bg-white sm-animate-[grow_1s_ease-in-out_infinite_0.5s]"
		})]
	});

function Up({
	state: e
}) {
	const t = Le({
		"sm-flex sm-justify-center sm-items-center sm-transition-all sm-w-[42px] sm-h-[42px] sm-rounded-full sm-gap-x-1": !0,
		"sm-bg-black": e === ve.dpSpeaking,
		"sm-bg-white sm-animate-spread": e === ve.idle,
		"sm-bg-secondary-base": e === ve.userSpeaking,
		"sm-bg-white": e === ve.dpProcessing
	});
	return S("div", {
		className: t,
		children: [e === ve.dpSpeaking && S(ta, {
			title: "Digital Person Speaking"
		}), e === ve.idle && S(Bp, {
			title: "Digital Person Waiting"
		}), e === ve.userSpeaking && S(ta, {
			title: "User Speaking"
		}), e === ve.dpProcessing && S(Mo, {
			title: "Digital Person Processing"
		})]
	})
}
const Vp = {
	microphone: ["M12 0C10.9391 0 9.92172 0.421427 9.17157 1.17157C8.42143 1.92172 8 2.93913 8 4V12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12V4C16 2.93913 15.5786 1.92172 14.8284 1.17157C14.0783 0.421427 13.0609 0 12 0ZM10.5858 2.58579C10.9609 2.21071 11.4696 2 12 2C12.5304 2 13.0391 2.21071 13.4142 2.58579C13.7893 2.96086 14 3.46957 14 4V12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12V4C10 3.46957 10.2107 2.96086 10.5858 2.58579Z", "M6 10C6 9.44771 5.55228 9 5 9C4.44772 9 4 9.44771 4 10V12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.60577 18.9195 9.247 19.7165 11 19.9373V22H8C7.44772 22 7 22.4477 7 23C7 23.5523 7.44772 24 8 24H16C16.5523 24 17 23.5523 17 23C17 22.4477 16.5523 22 16 22H13V19.9373C14.753 19.7165 16.3942 18.9195 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12V10C20 9.44771 19.5523 9 19 9C18.4477 9 18 9.44771 18 10V12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12V10Z"],
	microphoneOff: ["M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L8 9.41421V12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16C12.7206 16 13.4212 15.8056 14.0315 15.4457L15.4762 16.8904C14.4675 17.6075 13.254 18 12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12V10C6 9.44771 5.55228 9 5 9C4.44772 9 4 9.44771 4 10V12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.60577 18.9195 9.247 19.7165 11 19.9373V22H8C7.44772 22 7 22.4477 7 23C7 23.5523 7.44772 24 8 24H16C16.5523 24 17 23.5523 17 23C17 22.4477 16.5523 22 16 22H13V19.9373C14.423 19.758 15.7724 19.1991 16.9054 18.3196L22.2929 23.7071C22.6834 24.0976 23.3166 24.0976 23.7071 23.7071C24.0976 23.3166 24.0976 22.6834 23.7071 22.2929L1.70711 0.292893ZM12.5176 13.9319L10 11.4142V12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14C12.1763 14 12.3502 13.9767 12.5176 13.9319Z", "M9.17157 1.17157C9.92172 0.421427 10.9391 1.49012e-08 12 1.49012e-08C13.0609 1.49012e-08 14.0783 0.421427 14.8284 1.17157C15.5786 1.92172 16 2.93913 16 4V9.57683C16 10.1291 15.5523 10.5768 15 10.5768C14.4477 10.5768 14 10.1291 14 9.57683V4C14 3.46957 13.7893 2.96086 13.4142 2.58579C13.0391 2.21071 12.5304 2 12 2C11.4696 2 10.9609 2.21071 10.5858 2.58579C10.2731 2.89846 10.0746 3.30404 10.0173 3.73766C9.94484 4.28517 9.44228 4.67031 8.89476 4.59788C8.34725 4.52545 7.96211 4.02289 8.03454 3.47537C8.14926 2.60815 8.54615 1.79699 9.17157 1.17157Z", "M19 9C19.5523 9 20 9.44771 20 10V12C20 12.5535 19.9426 13.1011 19.8312 13.6349C19.7183 14.1755 19.1886 14.5223 18.6479 14.4094C18.1073 14.2965 17.7605 13.7668 17.8734 13.2261C17.957 12.8259 18 12.4152 18 12V10C18 9.44771 18.4477 9 19 9Z"],
	copy: ["M3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H13C13.2652 3 13.5196 3.10536 13.7071 3.29289C13.8946 3.48043 14 3.73478 14 4V5C14 5.55228 14.4477 6 15 6C15.5523 6 16 5.55228 16 5V4C16 3.20435 15.6839 2.44129 15.1213 1.87868C14.5587 1.31607 13.7956 1 13 1H4C3.20435 1 2.44129 1.31607 1.87868 1.87868C1.31607 2.44129 1 3.20435 1 4V13C1 13.7956 1.31607 14.5587 1.87868 15.1213C2.44129 15.6839 3.20435 16 4 16H5C5.55228 16 6 15.5523 6 15C6 14.4477 5.55228 14 5 14H4C3.73478 14 3.48043 13.8946 3.29289 13.7071C3.10536 13.5196 3 13.2652 3 13V4C3 3.73478 3.10536 3.48043 3.29289 3.29289Z", "M11 8C9.34315 8 8 9.34315 8 11V20C8 21.6569 9.34315 23 11 23H20C21.6569 23 23 21.6569 23 20V11C23 9.34315 21.6569 8 20 8H11ZM10 11C10 10.4477 10.4477 10 11 10H20C20.5523 10 21 10.4477 21 11V20C21 20.5523 20.5523 21 20 21H11C10.4477 21 10 20.5523 10 20V11Z"],
	close: ["M18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711Z"],
	profile: ["M12 .2c2.5 0 4.6 2.1 4.6 4.6S14.5 9.4 12 9.4 7.4 7.3 7.4 4.8 9.5.2 12 .2zm-7 15c.4-2.8 2.8-4.9 5.6-4.9h2.7c2.8 0 5.2 2.1 5.6 4.9l.9 6.1c.2 1.3-.8 2.4-2.1 2.4l-5.7.1-5.8-.1c-1.3 0-2.3-1.2-2.1-2.4l.9-6.1z"],
	camera: ["M17 10.0568V7C17 5.34315 15.6569 4 14 4H3C1.34315 4 0 5.34315 0 7V17C0 18.6569 1.34315 20 3 20H14C15.6569 20 17 18.6569 17 17V13.9432L22.4188 17.8137C22.7236 18.0315 23.1245 18.0606 23.4576 17.8892C23.7907 17.7178 24 17.3746 24 17V7C24 6.62541 23.7907 6.28224 23.4576 6.11083C23.1245 5.93943 22.7236 5.96854 22.4188 6.18627L17 10.0568ZM2 7C2 6.44772 2.44772 6 3 6H14C14.5523 6 15 6.44772 15 7V17C15 17.5523 14.5523 18 14 18H3C2.44772 18 2 17.5523 2 17V7ZM22 15.0568L17.7205 12L22 8.94319V15.0568Z"],
	cameraOff: ["M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L2.61109 4.0253C1.95895 4.11055 1.34882 4.40854 0.87868 4.87868C0.316071 5.44129 1.49012e-08 6.20435 1.49012e-08 7V17C1.49012e-08 17.7957 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H14C14.7957 20 15.5587 19.6839 16.1213 19.1213C16.3957 18.847 16.6114 18.5249 16.7605 18.1747L22.2929 23.7071C22.6834 24.0976 23.3166 24.0976 23.7071 23.7071C24.0976 23.3166 24.0976 22.6834 23.7071 22.2929L1.70711 0.292893ZM15 16.4142L4.58579 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7V17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H14C14.2652 18 14.5196 17.8946 14.7071 17.7071C14.8946 17.5196 15 17.2652 15 17V16.4142Z", "M10.66 6H14C14.2652 6 14.5196 6.10536 14.7071 6.29289C14.8946 6.48043 15 6.73478 15 7V10.34C15 10.6052 15.1054 10.8596 15.2929 11.0471L16.2929 12.0471C16.6402 12.3944 17.1882 12.4381 17.5861 12.1503L22 8.95752V17C22 17.5523 22.4477 18 23 18C23.5523 18 24 17.5523 24 17V7C24 6.62434 23.7895 6.28037 23.4549 6.10947C23.1204 5.93857 22.7183 5.96958 22.4139 6.18975L17.1045 10.0303L17 9.92579V7C17 6.20435 16.6839 5.44129 16.1213 4.87868C15.5587 4.31607 14.7956 4 14 4H10.66C10.1077 4 9.66 4.44772 9.66 5C9.66 5.55228 10.1077 6 10.66 6Z"],
	chevronDown: ["M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"],
	chevronRight: ["M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z"],
	volume: ["M19.7772 4.22299C19.3868 3.83241 18.7536 3.83231 18.363 4.22278C17.9724 4.61324 17.9723 5.24641 18.3628 5.63699C20.05 7.32474 20.9979 9.61352 20.9979 12C20.9979 14.3865 20.05 16.6752 18.3628 18.363C17.9723 18.7536 17.9724 19.3867 18.363 19.7772C18.7536 20.1677 19.3868 20.1676 19.7772 19.777C21.8394 17.7142 22.9979 14.9168 22.9979 12C22.9979 9.08319 21.8394 6.2858 19.7772 4.22299Z", "M16.2472 7.75299C15.8568 7.36241 15.2236 7.36231 14.833 7.75278C14.4424 8.14324 14.4423 8.77641 14.8328 9.16699C15.5827 9.9171 16.0039 10.9343 16.0039 11.995C16.0039 13.0556 15.5827 14.0729 14.8328 14.823C14.4423 15.2136 14.4424 15.8467 14.833 16.2372C15.2236 16.6277 15.8568 16.6276 16.2472 16.237C17.372 15.1118 18.0039 13.586 18.0039 11.995C18.0039 10.404 17.372 8.87816 16.2472 7.75299Z", "M12 4.99999C12 4.61559 11.7797 4.26521 11.4332 4.09869C11.0867 3.93217 10.6755 3.97899 10.3753 4.21913L5.64922 7.99999H2C1.44772 7.99999 1 8.44771 1 8.99999V15C1 15.5523 1.44772 16 2 16H5.64922L10.3753 19.7809C10.6755 20.021 11.0867 20.0678 11.4332 19.9013C11.7797 19.7348 12 19.3844 12 19V4.99999ZM6.62469 9.78086L10 7.08062V16.9194L6.62469 14.2191C6.44738 14.0773 6.22707 14 6 14H3V9.99999H6C6.22707 9.99999 6.44738 9.92271 6.62469 9.78086Z"],
	volumeOff: ["M11.4332 4.09869C11.7797 4.26521 12 4.61559 12 4.99999V19C12 19.3844 11.7797 19.7348 11.4332 19.9013C11.0867 20.0678 10.6755 20.021 10.3753 19.7809L5.64922 16H2C1.44772 16 1 15.5523 1 15V8.99999C1 8.44771 1.44772 7.99999 2 7.99999H5.64922L10.3753 4.21913C10.6755 3.97899 11.0867 3.93217 11.4332 4.09869ZM10 7.08062L6.62469 9.78086C6.44738 9.92271 6.22707 9.99999 6 9.99999H3V14H6C6.22707 14 6.44738 14.0773 6.62469 14.2191L10 16.9194V7.08062Z", "M23.7071 8.29289C24.0976 8.68342 24.0976 9.31658 23.7071 9.70711L21.4142 12L23.7071 14.2929C24.0976 14.6834 24.0976 15.3166 23.7071 15.7071C23.3166 16.0976 22.6834 16.0976 22.2929 15.7071L20 13.4142L17.7071 15.7071C17.3166 16.0976 16.6834 16.0976 16.2929 15.7071C15.9024 15.3166 15.9024 14.6834 16.2929 14.2929L18.5858 12L16.2929 9.70711C15.9024 9.31658 15.9024 8.68342 16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289L20 10.5858L22.2929 8.29289C22.6834 7.90237 23.3166 7.90237 23.7071 8.29289Z"]
};

function Fr({
	size: e,
	name: t,
	title: n
}) {
	return S("svg", {
		width: e,
		height: e,
		viewBox: "0 0 24 24",
		fill: "currentcolor",
		xmlns: "http://www.w3.org/2000/svg",
		"fill-rule": "evenodd",
		children: [S("title", {
			children: n || t
		}), Vp[t].map(r => S("path", {
			d: r
		}, r))]
	})
}
Fr.defaultProps = {
	size: "20px"
};
var dn = (e => (e.default = "default", e.danger = "danger", e))(dn || {});

function Dt({
	name: e,
	size: t,
	title: n,
	shadow: r,
	theme: i,
	onClick: o
}) {
	const s = Le({
		"sm-border-solid sm-border-1 sm-border-gray-lightest sm-cursor-pointer sm-transition-colors": !0,
		"sm-bg-white sm-rounded-full sm-p-3 hover:sm-bg-gray-lightest hover:sm-border-gray-lightest focus:sm-border-gray-light focus:sm-outline focus:sm-outline-2 focus:sm-outline-primary-light": i == "default",
		"sm-border-transparent sm-bg-tertiary-base sm-rounded-full sm-p-3 sm-text-white hover:sm-bg-tertiary-dark focus:sm-outline focus:sm-outline-2 focus:sm-outline-primary-light": i == "danger",
		"sm-shadow-sm": r
	});
	return S("button", {
		onClick: o,
		className: s,
		children: S(Fr, {
			name: e,
			size: t,
			title: n
		})
	})
}
Dt.defaultProps = {
	theme: "default",
	size: "20px"
};

function $p() {
	const {
		disconnect: e,
		isMicrophoneEnabled: t,
		isCameraEnabled: n,
		isVideoMuted: r,
		conversationState: i,
		toggleMicrophone: o,
		toggleCamera: s,
		toggleVideoMuted: a
	} = It(), l = r ? "volumeOff" : "volume", c = r ? "Unmute video" : "Mute video", u = t ? "microphone" : "microphoneOff", f = n ? "camera" : "cameraOff", p = t ? "Disable microphone" : "Enable microphone", h = n ? "Disable camera" : "Enable camera";
	return S("div", {
		className: "sm-p-3 sm-flex sm-flex-col sm-justify-between sm-absolute sm-top-0 sm-left-0 sm-w-full sm-h-full",
		children: [S("div", {
			className: "sm-flex sm-justify-between",
			children: [S(Dt, {
				onClick: a,
				name: l,
				title: c
			}), S(Dt, {
				onClick: e,
				name: "close",
				title: "Close video"
			})]
		}), S("div", {
			className: "sm-flex sm-flex-col sm-gap-y-2",
			children: [S("div", {
				children: S(Up, {
					state: i
				})
			}), S("div", {
				className: "sm-flex sm-justify-between",
				children: [S(Dt, {
					onClick: o,
					name: u,
					title: p,
					theme: t ? dn.default : dn.danger
				}), S(Dt, {
					onClick: s,
					name: f,
					title: h,
					theme: n ? dn.default : dn.danger
				})]
			})]
		})]
	})
}

function Zt({
	children: e,
	isDismissible: t,
	style: n,
	flush: r
} = {
	isDismissible: !0
}) {
	const [i, o] = Ee(!1), s = Le({
		"sm-bg-white sm-rounded-xl sm-w-full sm-shadow-lg sm-overflow-hidden": !0,
		"sm-p-6": !r
	});
	return gu(!i, {
		from: {
			opacity: 0
		},
		enter: {
			opacity: 1
		},
		leave: {
			opacity: 0
		}
	})((l, c) => c && S(Yt.div, {
		className: "sm-relative sm-flex sm-overflow-hidden sm-pointer-events-auto sm-p-8 -sm-m-8",
		style: {
			...l,
			...n
		},
		children: [S("div", {
			className: s,
			children: e
		}), t && S("div", {
			className: "sm-absolute sm-top-8 sm-right-8 sm-translate-x-1/3 -sm-translate-y-1/3",
			children: S(Dt, {
				name: "close",
				title: "Hide card",
				shadow: !0,
				onClick: () => o(!0)
			})
		})]
	}))
}
Zt.defaultProps = {
	isDismissible: !0,
	flush: !1
};

function Bt({
	children: e,
	size: t,
	...n
}) {
	const r = Le({
		"sm-text-xs md:sm-text-sm": t === "sm",
		"sm-text-sm md:sm-text-base": t === "md",
		"sm-text-base md:sm-text-lg": t === "lg"
	});
	return S("p", {
		className: `sm-text-primary-text sm-font-primary sm-font-normal sm-m-0 ${r}`,
		...n,
		children: e
	})
}
Bt.defaultProps = {
	size: "md"
};

function Ln({
	children: e,
	theme: t,
	onClick: n
}) {
	const r = Le({
		"sm-cursor-pointer sm-px-4 sm-py-2 sm-font-primary sm-text-sm sm-tracking-wider sm-transition-colors sm-uppercase sm-font-medium sm-outline disabled:sm-bg-primary-light disabled:sm-cursor-not-allowed md:sm-text-base": !0,
		"sm-border-none sm-text-white sm-rounded-lg sm-bg-primary-base hover:sm-bg-primary-dark active:sm-bg-primary-dark focus:sm-bg-primary-dark focus:sm-outline-2 focus:sm-outline-primary-light": t === "default",
		"sm-text-left sm-flex sm-justify-between sm-items-center sm-bg-transparent sm-rounded-sm sm-text-primary-text sm-capitalize sm-font-normal sm-border-gray-lightest sm-border sm-border-solid sm-transition-colors sm-outline-transparent sm-outline-1 sm-outline-offset-[-2px] hover:sm-border-primary-base hover:sm-outline-primary-base focus:sm-border-primary-base focus:sm-outline-primary-base active:sm-text-white active:sm-bg-primary-base": t === "outline"
	});
	return S("button", {
		onClick: n,
		className: r,
		children: e
	})
}
Ln.defaultProps = {
	theme: "default"
};

function Hp({
	greeting: e
}) {
	const {
		connectionStatus: t,
		connect: n,
		connectionError: r
	} = It();
	return S(Zt, {
		children: (() => {
			if (t === _e.ERRORED) return S("div", {
				className: "sm-flex sm-flex-col sm-gap-y-3 sm-items-start",
				children: [S(Bt, {
					children: `Unable to connect. ${r==null?void 0:r.message}`
				}), S(Ln, {
					onClick: n,
					children: "Retry"
				})]
			});
			if (t === _e.TIMED_OUT) return S("div", {
				className: "sm-flex sm-flex-col sm-gap-y-3 sm-items-start",
				children: [S(Bt, {
					children: "Your session has ended. You can reconnect anytime you are ready."
				}), S(Ln, {
					onClick: n,
					children: "Connect"
				})]
			});
			if (t === _e.DISCONNECTED) return S("div", {
				children: S(Bt, {
					"data-sm-cy": "greetingText",
					children: e || "Got any questions? I'm happy to help."
				})
			})
		})()
	})
}

function qp({
	src: e
}) {
	const t = "Digital person";
	return e ? S("div", {
		style: {
			backgroundImage: `url(${e})`
		},
		className: "sm-w-full sm-h-full sm-bg-cover sm-bg-center",
		"data-sm-cy": "profileImage",
		children: S("span", {
			class: "sm-sr-only",
			children: t
		})
	}) : S("div", {
		className: "sm-w-5 md:sm-w-12",
		children: S(Fr, {
			name: "profile",
			title: t,
			size: "100%"
		})
	})
}

function Su({
	totalSteps: e,
	percentageLoaded: t,
	durationMs: n,
	stepName: r
}) {
	const i = Math.round(100 / e),
		o = t + i,
		s = o < 100 ? o : 100,
		a = {
			reset: !0,
			config: {
				duration: n
			}
		},
		l = xr({
			...a,
			from: {
				width: `${t}%`
			},
			to: {
				width: `${s}%`
			}
		}),
		{
			number: c
		} = xr({
			...a,
			from: {
				number: t
			},
			to: {
				number: s
			}
		}),
		u = Le({
			"sm-transition-all sm-duration-300 sm-font-primary sm-flex sm-items-center sm-justify-center sm-text-[6em] md:sm-text-[10em] sm-relative sm-w-full sm-h-full": !0,
			"sm-translate-y-8 sm-opacity-60": t === 0
		});
	return S("div", {
		"aria-label": "Loading...",
		role: "progressbar",
		"aria-busy": t < 100,
		"aria-valuenow": t,
		className: u,
		children: [r && S("span", {
			className: "sm-sr-only",
			children: r
		}), S("div", {
			className: "sm-bg-white sm-rounded-3xl sm-border-gray-light sm-border sm-border-solid sm-overflow-hidden sm-w-2/5 sm-h-3 sm-absolute sm-top-1/2 sm-left-1/2 -sm-translate-x-1/2 -sm-translate-y-1/2",
			children: S(Yt.div, {
				className: "sm-bg-primary-base sm-h-full",
				style: l
			})
		}), S(Yt.div, {
			className: "sm-text-primary-lightest",
			children: c.to(f => f.toFixed(0))
		})]
	})
}
Su.defaultProps = {
	from: 0,
	to: 0,
	durationMs: 1e4
};

function Eu({
	content: e,
	style: t
}) {
	const n = e.data;
	return n.url ? S("div", {
		className: "sm-flex sm-justify-center",
		children: S(Zt, {
			isDismissible: !0,
			flush: !0,
			style: t,
			children: S("img", {
				"data-sm-content": e.id,
				src: n.url,
				alt: n.alt,
				className: "sm-mx-auto sm-object-contain sm-max-w-full sm-h-full sm-max-h-87"
			})
		})
	}) : null
}
Eu.defaultProps = {
	alt: ""
};

function kt({
	type: e,
	children: t,
	size: n = "lg"
}) {
	const r = Le({
		"sm-text-xs md:sm-text-xs": n === "xs",
		"sm-text-xs md:sm-text-sm": n === "sm",
		"sm-text-sm md:sm-text-base": n === "md",
		"sm-text-base md:sm-text-lg": n === "lg",
		"sm-text-lg md:sm-text-xl": n === "xl",
		"sm-text-xl md:sm-text-2xl": n === "2xl"
	});
	return we(e, {
		className: `sm-font-primary sm-font-medium sm-m-0 sm-text-primary-text ${r}`
	}, t)
}

function Io({
	content: e,
	isExternal: t,
	style: n
}) {
	const r = e.data,
		i = {};
	return t && (i.target = "_blank", i.rel = "noreferrer"), S(Zt, {
		style: n,
		children: S("div", {
			"data-sm-content": e.id,
			className: "sm-flex sm-flex-col sm-gap-y-3 sm-items-start sm-h-full sm-max-h-contentCard sm-overflow-y-auto",
			children: [r.imageUrl && S("img", {
				src: r.imageUrl,
				alt: r.title
			}), S(kt, {
				type: "h2",
				children: r.title
			}), r.description && S("div", {
				className: "sm-hidden md:sm-block",
				children: S(Bt, {
					children: r.description
				})
			}), S("div", {
				className: "sm-bg-white sm-sticky sm-bottom-0 sm-w-full sm-pt-5 sm-border-solid sm-border-0 sm-border-t-2 sm-border-gray-50",
				children: S("a", {
					className: "sm-text-white sm-no-underline",
					href: r.url,
					...i,
					children: S(Ln, {
						children: "View Page"
					})
				})
			})]
		})
	})
}
Io.defaultProps = {
	isExternal: !0
};
const na = ["http", "https", "mailto", "tel"];

function Wp(e) {
	const t = (e || "").trim(),
		n = t.charAt(0);
	if (n === "#" || n === "/") return t;
	const r = t.indexOf(":");
	if (r === -1) return t;
	let i = -1;
	for (; ++i < na.length;) {
		const o = na[i];
		if (r === o.length && t.slice(0, o.length).toLowerCase() === o) return t
	}
	return i = t.indexOf("?"), i !== -1 && r > i || (i = t.indexOf("#"), i !== -1 && r > i) ? t : "javascript:void(0)"
}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var Tu = function(t) {
	return t != null && t.constructor != null && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t)
};

function Qp(e) {
	return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? ra(e.position) : "start" in e || "end" in e ? ra(e) : "line" in e || "column" in e ? Zi(e) : ""
}

function Zi(e) {
	return ia(e && e.line) + ":" + ia(e && e.column)
}

function ra(e) {
	return Zi(e && e.start) + "-" + Zi(e && e.end)
}

function ia(e) {
	return e && typeof e == "number" ? e : 1
}
class He extends Error {
	constructor(t, n, r) {
		const i = [null, null];
		let o = {
			start: {
				line: null,
				column: null
			},
			end: {
				line: null,
				column: null
			}
		};
		if (super(), typeof n == "string" && (r = n, n = void 0), typeof r == "string") {
			const s = r.indexOf(":");
			s === -1 ? i[1] = r : (i[0] = r.slice(0, s), i[1] = r.slice(s + 1))
		}
		n && ("type" in n || "position" in n ? n.position && (o = n.position) : "start" in n || "end" in n ? o = n : ("line" in n || "column" in n) && (o.start = n)), this.name = Qp(n) || "1:1", this.message = typeof t == "object" ? t.message : t, this.stack = typeof t == "object" ? t.stack : "", this.reason = this.message, this.fatal, this.line = o.start.line, this.column = o.start.column, this.source = i[0], this.ruleId = i[1], this.position = o, this.actual, this.expected, this.file, this.url, this.note
	}
}
He.prototype.file = "";
He.prototype.name = "";
He.prototype.reason = "";
He.prototype.message = "";
He.prototype.stack = "";
He.prototype.fatal = null;
He.prototype.column = null;
He.prototype.line = null;
He.prototype.source = null;
He.prototype.ruleId = null;
He.prototype.position = null;
const Je = {
	basename: Yp,
	dirname: Xp,
	extname: Gp,
	join: Kp,
	sep: "/"
};

function Yp(e, t) {
	if (t !== void 0 && typeof t != "string") throw new TypeError('"ext" argument must be a string');
	Vn(e);
	let n = 0,
		r = -1,
		i = e.length,
		o;
	if (t === void 0 || t.length === 0 || t.length > e.length) {
		for (; i--;)
			if (e.charCodeAt(i) === 47) {
				if (o) {
					n = i + 1;
					break
				}
			} else r < 0 && (o = !0, r = i + 1);
		return r < 0 ? "" : e.slice(n, r)
	}
	if (t === e) return "";
	let s = -1,
		a = t.length - 1;
	for (; i--;)
		if (e.charCodeAt(i) === 47) {
			if (o) {
				n = i + 1;
				break
			}
		} else s < 0 && (o = !0, s = i + 1), a > -1 && (e.charCodeAt(i) === t.charCodeAt(a--) ? a < 0 && (r = i) : (a = -1, r = s));
	return n === r ? r = s : r < 0 && (r = e.length), e.slice(n, r)
}

function Xp(e) {
	if (Vn(e), e.length === 0) return ".";
	let t = -1,
		n = e.length,
		r;
	for (; --n;)
		if (e.charCodeAt(n) === 47) {
			if (r) {
				t = n;
				break
			}
		} else r || (r = !0);
	return t < 0 ? e.charCodeAt(0) === 47 ? "/" : "." : t === 1 && e.charCodeAt(0) === 47 ? "//" : e.slice(0, t)
}

function Gp(e) {
	Vn(e);
	let t = e.length,
		n = -1,
		r = 0,
		i = -1,
		o = 0,
		s;
	for (; t--;) {
		const a = e.charCodeAt(t);
		if (a === 47) {
			if (s) {
				r = t + 1;
				break
			}
			continue
		}
		n < 0 && (s = !0, n = t + 1), a === 46 ? i < 0 ? i = t : o !== 1 && (o = 1) : i > -1 && (o = -1)
	}
	return i < 0 || n < 0 || o === 0 || o === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n)
}

function Kp(...e) {
	let t = -1,
		n;
	for (; ++t < e.length;) Vn(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
	return n === void 0 ? "." : Zp(n)
}

function Zp(e) {
	Vn(e);
	const t = e.charCodeAt(0) === 47;
	let n = Jp(e, !t);
	return n.length === 0 && !t && (n = "."), n.length > 0 && e.charCodeAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n
}

function Jp(e, t) {
	let n = "",
		r = 0,
		i = -1,
		o = 0,
		s = -1,
		a, l;
	for (; ++s <= e.length;) {
		if (s < e.length) a = e.charCodeAt(s);
		else {
			if (a === 47) break;
			a = 47
		}
		if (a === 47) {
			if (!(i === s - 1 || o === 1))
				if (i !== s - 1 && o === 2) {
					if (n.length < 2 || r !== 2 || n.charCodeAt(n.length - 1) !== 46 || n.charCodeAt(n.length - 2) !== 46) {
						if (n.length > 2) {
							if (l = n.lastIndexOf("/"), l !== n.length - 1) {
								l < 0 ? (n = "", r = 0) : (n = n.slice(0, l), r = n.length - 1 - n.lastIndexOf("/")), i = s, o = 0;
								continue
							}
						} else if (n.length > 0) {
							n = "", r = 0, i = s, o = 0;
							continue
						}
					}
					t && (n = n.length > 0 ? n + "/.." : "..", r = 2)
				} else n.length > 0 ? n += "/" + e.slice(i + 1, s) : n = e.slice(i + 1, s), r = s - i - 1;
			i = s, o = 0
		} else a === 46 && o > -1 ? o++ : o = -1
	}
	return n
}

function Vn(e) {
	if (typeof e != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(e))
}
const em = {
	cwd: tm
};

function tm() {
	return "/"
}

function Ji(e) {
	return e !== null && typeof e == "object" && e.href && e.origin
}

function nm(e) {
	if (typeof e == "string") e = new URL(e);
	else if (!Ji(e)) {
		const t = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + e + "`");
		throw t.code = "ERR_INVALID_ARG_TYPE", t
	}
	if (e.protocol !== "file:") {
		const t = new TypeError("The URL must be of scheme file");
		throw t.code = "ERR_INVALID_URL_SCHEME", t
	}
	return rm(e)
}

function rm(e) {
	if (e.hostname !== "") {
		const r = new TypeError('File URL host must be "localhost" or empty on darwin');
		throw r.code = "ERR_INVALID_FILE_URL_HOST", r
	}
	const t = e.pathname;
	let n = -1;
	for (; ++n < t.length;)
		if (t.charCodeAt(n) === 37 && t.charCodeAt(n + 1) === 50) {
			const r = t.charCodeAt(n + 2);
			if (r === 70 || r === 102) {
				const i = new TypeError("File URL path must not include encoded / characters");
				throw i.code = "ERR_INVALID_FILE_URL_PATH", i
			}
		} return decodeURIComponent(t)
}
const pi = ["history", "path", "basename", "stem", "extname", "dirname"];
class Au {
	constructor(t) {
		let n;
		t ? typeof t == "string" || Tu(t) ? n = {
			value: t
		} : Ji(t) ? n = {
			path: t
		} : n = t : n = {}, this.data = {}, this.messages = [], this.history = [], this.cwd = em.cwd(), this.value, this.stored, this.result, this.map;
		let r = -1;
		for (; ++r < pi.length;) {
			const o = pi[r];
			o in n && n[o] !== void 0 && (this[o] = o === "history" ? [...n[o]] : n[o])
		}
		let i;
		for (i in n) pi.includes(i) || (this[i] = n[i])
	}
	get path() {
		return this.history[this.history.length - 1]
	}
	set path(t) {
		Ji(t) && (t = nm(t)), gi(t, "path"), this.path !== t && this.history.push(t)
	}
	get dirname() {
		return typeof this.path == "string" ? Je.dirname(this.path) : void 0
	}
	set dirname(t) {
		oa(this.basename, "dirname"), this.path = Je.join(t || "", this.basename)
	}
	get basename() {
		return typeof this.path == "string" ? Je.basename(this.path) : void 0
	}
	set basename(t) {
		gi(t, "basename"), mi(t, "basename"), this.path = Je.join(this.dirname || "", t)
	}
	get extname() {
		return typeof this.path == "string" ? Je.extname(this.path) : void 0
	}
	set extname(t) {
		if (mi(t, "extname"), oa(this.dirname, "extname"), t) {
			if (t.charCodeAt(0) !== 46) throw new Error("`extname` must start with `.`");
			if (t.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots")
		}
		this.path = Je.join(this.dirname, this.stem + (t || ""))
	}
	get stem() {
		return typeof this.path == "string" ? Je.basename(this.path, this.extname) : void 0
	}
	set stem(t) {
		gi(t, "stem"), mi(t, "stem"), this.path = Je.join(this.dirname || "", t + (this.extname || ""))
	}
	toString(t) {
		return (this.value || "").toString(t)
	}
	message(t, n, r) {
		const i = new He(t, n, r);
		return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = !1, this.messages.push(i), i
	}
	info(t, n, r) {
		const i = this.message(t, n, r);
		return i.fatal = null, i
	}
	fail(t, n, r) {
		const i = this.message(t, n, r);
		throw i.fatal = !0, i
	}
}

function mi(e, t) {
	if (e && e.includes(Je.sep)) throw new Error("`" + t + "` cannot be a path: did not expect `" + Je.sep + "`")
}

function gi(e, t) {
	if (!e) throw new Error("`" + t + "` cannot be empty")
}

function oa(e, t) {
	if (!e) throw new Error("Setting `" + t + "` requires `path` to be set too")
}

function sa(e) {
	if (e) throw e
}
var sr = Object.prototype.hasOwnProperty,
	Ou = Object.prototype.toString,
	aa = Object.defineProperty,
	la = Object.getOwnPropertyDescriptor,
	ua = function(t) {
		return typeof Array.isArray == "function" ? Array.isArray(t) : Ou.call(t) === "[object Array]"
	},
	ca = function(t) {
		if (!t || Ou.call(t) !== "[object Object]") return !1;
		var n = sr.call(t, "constructor"),
			r = t.constructor && t.constructor.prototype && sr.call(t.constructor.prototype, "isPrototypeOf");
		if (t.constructor && !n && !r) return !1;
		var i;
		for (i in t);
		return typeof i == "undefined" || sr.call(t, i)
	},
	fa = function(t, n) {
		aa && n.name === "__proto__" ? aa(t, n.name, {
			enumerable: !0,
			configurable: !0,
			value: n.newValue,
			writable: !0
		}) : t[n.name] = n.newValue
	},
	da = function(t, n) {
		if (n === "__proto__")
			if (sr.call(t, n)) {
				if (la) return la(t, n).value
			} else return;
		return t[n]
	},
	ha = function e() {
		var t, n, r, i, o, s, a = arguments[0],
			l = 1,
			c = arguments.length,
			u = !1;
		for (typeof a == "boolean" && (u = a, a = arguments[1] || {}, l = 2), (a == null || typeof a != "object" && typeof a != "function") && (a = {}); l < c; ++l)
			if (t = arguments[l], t != null)
				for (n in t) r = da(a, n), i = da(t, n), a !== i && (u && i && (ca(i) || (o = ua(i))) ? (o ? (o = !1, s = r && ua(r) ? r : []) : s = r && ca(r) ? r : {}, fa(a, {
					name: n,
					newValue: e(u, s, i)
				})) : typeof i != "undefined" && fa(a, {
					name: n,
					newValue: i
				}));
		return a
	};

function eo(e) {
	if (typeof e != "object" || e === null) return !1;
	const t = Object.getPrototypeOf(e);
	return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
}

function im() {
	const e = [],
		t = {
			run: n,
			use: r
		};
	return t;

	function n(...i) {
		let o = -1;
		const s = i.pop();
		if (typeof s != "function") throw new TypeError("Expected function as last argument, not " + s);
		a(null, ...i);

		function a(l, ...c) {
			const u = e[++o];
			let f = -1;
			if (l) {
				s(l);
				return
			}
			for (; ++f < i.length;)(c[f] === null || c[f] === void 0) && (c[f] = i[f]);
			i = c, u ? om(u, a)(...c) : s(null, ...c)
		}
	}

	function r(i) {
		if (typeof i != "function") throw new TypeError("Expected `middelware` to be a function, not " + i);
		return e.push(i), t
	}
}

function om(e, t) {
	let n;
	return r;

	function r(...s) {
		const a = e.length > s.length;
		let l;
		a && s.push(i);
		try {
			l = e.apply(this, s)
		} catch (c) {
			const u = c;
			if (a && n) throw u;
			return i(u)
		}
		a || (l instanceof Promise ? l.then(o, i) : l instanceof Error ? i(l) : o(l))
	}

	function i(s, ...a) {
		n || (n = !0, t(s, ...a))
	}

	function o(s) {
		i(null, s)
	}
}
const sm = Iu().freeze(),
	Mu = {}.hasOwnProperty;

function Iu() {
	const e = im(),
		t = [];
	let n = {},
		r, i = -1;
	return o.data = s, o.Parser = void 0, o.Compiler = void 0, o.freeze = a, o.attachers = t, o.use = l, o.parse = c, o.stringify = u, o.run = f, o.runSync = p, o.process = h, o.processSync = d, o;

	function o() {
		const m = Iu();
		let g = -1;
		for (; ++g < t.length;) m.use(...t[g]);
		return m.data(ha(!0, {}, n)), m
	}

	function s(m, g) {
		return typeof m == "string" ? arguments.length === 2 ? (vi("data", r), n[m] = g, o) : Mu.call(n, m) && n[m] || null : m ? (vi("data", r), n = m, o) : n
	}

	function a() {
		if (r) return o;
		for (; ++i < t.length;) {
			const [m, ...g] = t[i];
			if (g[0] === !1) continue;
			g[0] === !0 && (g[0] = void 0);
			const y = m.call(o, ...g);
			typeof y == "function" && e.use(y)
		}
		return r = !0, i = Number.POSITIVE_INFINITY, o
	}

	function l(m, ...g) {
		let y;
		if (vi("use", r), m != null)
			if (typeof m == "function") E(m, ...g);
			else if (typeof m == "object") Array.isArray(m) ? C(m) : w(m);
		else throw new TypeError("Expected usable value, not `" + m + "`");
		return y && (n.settings = Object.assign(n.settings || {}, y)), o;

		function k(b) {
			if (typeof b == "function") E(b);
			else if (typeof b == "object")
				if (Array.isArray(b)) {
					const [A, ...R] = b;
					E(A, ...R)
				} else w(b);
			else throw new TypeError("Expected usable value, not `" + b + "`")
		}

		function w(b) {
			C(b.plugins), b.settings && (y = Object.assign(y || {}, b.settings))
		}

		function C(b) {
			let A = -1;
			if (b != null)
				if (Array.isArray(b))
					for (; ++A < b.length;) {
						const R = b[A];
						k(R)
					} else throw new TypeError("Expected a list of plugins, not `" + b + "`")
		}

		function E(b, A) {
			let R = -1,
				F;
			for (; ++R < t.length;)
				if (t[R][0] === b) {
					F = t[R];
					break
				} F ? (eo(F[1]) && eo(A) && (A = ha(!0, F[1], A)), F[1] = A) : t.push([...arguments])
		}
	}

	function c(m) {
		o.freeze();
		const g = an(m),
			y = o.Parser;
		return yi("parse", y), pa(y, "parse") ? new y(String(g), g).parse() : y(String(g), g)
	}

	function u(m, g) {
		o.freeze();
		const y = an(g),
			k = o.Compiler;
		return bi("stringify", k), ma(m), pa(k, "compile") ? new k(m, y).compile() : k(m, y)
	}

	function f(m, g, y) {
		if (ma(m), o.freeze(), !y && typeof g == "function" && (y = g, g = void 0), !y) return new Promise(k);
		k(null, y);

		function k(w, C) {
			e.run(m, an(g), E);

			function E(b, A, R) {
				A = A || m, b ? C(b) : w ? w(A) : y(null, A, R)
			}
		}
	}

	function p(m, g) {
		let y, k;
		return o.run(m, g, w), ga("runSync", "run", k), y;

		function w(C, E) {
			sa(C), y = E, k = !0
		}
	}

	function h(m, g) {
		if (o.freeze(), yi("process", o.Parser), bi("process", o.Compiler), !g) return new Promise(y);
		y(null, g);

		function y(k, w) {
			const C = an(m);
			o.run(o.parse(C), C, (b, A, R) => {
				if (b || !A || !R) E(b);
				else {
					const F = o.stringify(A, R);
					F == null || (um(F) ? R.value = F : R.result = F), E(b, R)
				}
			});

			function E(b, A) {
				b || !A ? w(b) : k ? k(A) : g(null, A)
			}
		}
	}

	function d(m) {
		let g;
		o.freeze(), yi("processSync", o.Parser), bi("processSync", o.Compiler);
		const y = an(m);
		return o.process(y, k), ga("processSync", "process", g), y;

		function k(w) {
			g = !0, sa(w)
		}
	}
}

function pa(e, t) {
	return typeof e == "function" && e.prototype && (am(e.prototype) || t in e.prototype)
}

function am(e) {
	let t;
	for (t in e)
		if (Mu.call(e, t)) return !0;
	return !1
}

function yi(e, t) {
	if (typeof t != "function") throw new TypeError("Cannot `" + e + "` without `Parser`")
}

function bi(e, t) {
	if (typeof t != "function") throw new TypeError("Cannot `" + e + "` without `Compiler`")
}

function vi(e, t) {
	if (t) throw new Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")
}

function ma(e) {
	if (!eo(e) || typeof e.type != "string") throw new TypeError("Expected node, got `" + e + "`")
}

function ga(e, t, n) {
	if (!n) throw new Error("`" + e + "` finished async. Use `" + t + "` instead")
}

function an(e) {
	return lm(e) ? e : new Au(e)
}

function lm(e) {
	return Boolean(e && typeof e == "object" && "message" in e && "messages" in e)
}

function um(e) {
	return typeof e == "string" || Tu(e)
}

function cm(e, t) {
	var {
		includeImageAlt: n = !0
	} = t || {};
	return Ru(e, n)
}

function Ru(e, t) {
	return e && typeof e == "object" && (e.value || (t ? e.alt : "") || "children" in e && ya(e.children, t) || Array.isArray(e) && ya(e, t)) || ""
}

function ya(e, t) {
	for (var n = [], r = -1; ++r < e.length;) n[r] = Ru(e[r], t);
	return n.join("")
}

function De(e, t, n, r) {
	const i = e.length;
	let o = 0,
		s;
	if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4) s = Array.from(r), s.unshift(t, n), [].splice.apply(e, s);
	else
		for (n && [].splice.apply(e, [t, n]); o < r.length;) s = r.slice(o, o + 1e4), s.unshift(t, 0), [].splice.apply(e, s), o += 1e4, t += 1e4
}

function Ue(e, t) {
	return e.length > 0 ? (De(e, e.length, 0, t), e) : t
}
const ba = {}.hasOwnProperty;

function Pu(e) {
	const t = {};
	let n = -1;
	for (; ++n < e.length;) fm(t, e[n]);
	return t
}

function fm(e, t) {
	let n;
	for (n in t) {
		const i = (ba.call(e, n) ? e[n] : void 0) || (e[n] = {}),
			o = t[n];
		let s;
		for (s in o) {
			ba.call(i, s) || (i[s] = []);
			const a = o[s];
			dm(i[s], Array.isArray(a) ? a : a ? [a] : [])
		}
	}
}

function dm(e, t) {
	let n = -1;
	const r = [];
	for (; ++n < t.length;)(t[n].add === "after" ? e : r).push(t[n]);
	De(e, 0, 0, r)
}
const hm = /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
	$e = _t(/[A-Za-z]/),
	kr = _t(/\d/),
	pm = _t(/[\dA-Fa-f]/),
	Se = _t(/[\dA-Za-z]/),
	mm = _t(/[!-/:-@[-`{-~]/),
	va = _t(/[#-'*+\--9=?A-Z^-~]/);

function Dn(e) {
	return e !== null && (e < 32 || e === 127)
}

function ce(e) {
	return e !== null && (e < 0 || e === 32)
}

function U(e) {
	return e !== null && e < -2
}

function te(e) {
	return e === -2 || e === -1 || e === 32
}
const zr = _t(/\s/),
	Nr = _t(hm);

function _t(e) {
	return t;

	function t(n) {
		return n !== null && e.test(String.fromCharCode(n))
	}
}

function Y(e, t, n, r) {
	const i = r ? r - 1 : Number.POSITIVE_INFINITY;
	let o = 0;
	return s;

	function s(l) {
		return te(l) ? (e.enter(n), a(l)) : t(l)
	}

	function a(l) {
		return te(l) && o++ < i ? (e.consume(l), a) : (e.exit(n), t(l))
	}
}
const gm = {
	tokenize: ym
};

function ym(e) {
	const t = e.attempt(this.parser.constructs.contentInitial, r, i);
	let n;
	return t;

	function r(a) {
		if (a === null) {
			e.consume(a);
			return
		}
		return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), Y(e, t, "linePrefix")
	}

	function i(a) {
		return e.enter("paragraph"), o(a)
	}

	function o(a) {
		const l = e.enter("chunkText", {
			contentType: "text",
			previous: n
		});
		return n && (n.next = l), n = l, s(a)
	}

	function s(a) {
		if (a === null) {
			e.exit("chunkText"), e.exit("paragraph"), e.consume(a);
			return
		}
		return U(a) ? (e.consume(a), e.exit("chunkText"), o) : (e.consume(a), s)
	}
}
const bm = {
		tokenize: vm
	},
	_a = {
		tokenize: _m
	};

function vm(e) {
	const t = this,
		n = [];
	let r = 0,
		i, o, s;
	return a;

	function a(w) {
		if (r < n.length) {
			const C = n[r];
			return t.containerState = C[1], e.attempt(C[0].continuation, l, c)(w)
		}
		return c(w)
	}

	function l(w) {
		if (r++, t.containerState._closeFlow) {
			t.containerState._closeFlow = void 0, i && k();
			const C = t.events.length;
			let E = C,
				b;
			for (; E--;)
				if (t.events[E][0] === "exit" && t.events[E][1].type === "chunkFlow") {
					b = t.events[E][1].end;
					break
				} y(r);
			let A = C;
			for (; A < t.events.length;) t.events[A][1].end = Object.assign({}, b), A++;
			return De(t.events, E + 1, 0, t.events.slice(C)), t.events.length = A, c(w)
		}
		return a(w)
	}

	function c(w) {
		if (r === n.length) {
			if (!i) return p(w);
			if (i.currentConstruct && i.currentConstruct.concrete) return d(w);
			t.interrupt = Boolean(i.currentConstruct && !i._gfmTableDynamicInterruptHack)
		}
		return t.containerState = {}, e.check(_a, u, f)(w)
	}

	function u(w) {
		return i && k(), y(r), p(w)
	}

	function f(w) {
		return t.parser.lazy[t.now().line] = r !== n.length, s = t.now().offset, d(w)
	}

	function p(w) {
		return t.containerState = {}, e.attempt(_a, h, d)(w)
	}

	function h(w) {
		return r++, n.push([t.currentConstruct, t.containerState]), p(w)
	}

	function d(w) {
		if (w === null) {
			i && k(), y(0), e.consume(w);
			return
		}
		return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
			contentType: "flow",
			previous: o,
			_tokenizer: i
		}), m(w)
	}

	function m(w) {
		if (w === null) {
			g(e.exit("chunkFlow"), !0), y(0), e.consume(w);
			return
		}
		return U(w) ? (e.consume(w), g(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, a) : (e.consume(w), m)
	}

	function g(w, C) {
		const E = t.sliceStream(w);
		if (C && E.push(null), w.previous = o, o && (o.next = w), o = w, i.defineSkip(w.start), i.write(E), t.parser.lazy[w.start.line]) {
			let b = i.events.length;
			for (; b--;)
				if (i.events[b][1].start.offset < s && (!i.events[b][1].end || i.events[b][1].end.offset > s)) return;
			const A = t.events.length;
			let R = A,
				F, z;
			for (; R--;)
				if (t.events[R][0] === "exit" && t.events[R][1].type === "chunkFlow") {
					if (F) {
						z = t.events[R][1].end;
						break
					}
					F = !0
				} for (y(r), b = A; b < t.events.length;) t.events[b][1].end = Object.assign({}, z), b++;
			De(t.events, R + 1, 0, t.events.slice(A)), t.events.length = b
		}
	}

	function y(w) {
		let C = n.length;
		for (; C-- > w;) {
			const E = n[C];
			t.containerState = E[1], E[0].exit.call(t, e)
		}
		n.length = w
	}

	function k() {
		i.write([null]), o = void 0, i = void 0, t.containerState._closeFlow = void 0
	}
}

function _m(e, t, n) {
	return Y(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
}

function Cr(e) {
	if (e === null || ce(e) || zr(e)) return 1;
	if (Nr(e)) return 2
}

function jr(e, t, n) {
	const r = [];
	let i = -1;
	for (; ++i < e.length;) {
		const o = e[i].resolveAll;
		o && !r.includes(o) && (t = o(t, n), r.push(o))
	}
	return t
}
const to = {
	name: "attention",
	tokenize: xm,
	resolveAll: wm
};

function wm(e, t) {
	let n = -1,
		r, i, o, s, a, l, c, u;
	for (; ++n < e.length;)
		if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
			for (r = n; r--;)
				if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
					if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)) continue;
					l = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
					const f = Object.assign({}, e[r][1].end),
						p = Object.assign({}, e[n][1].start);
					wa(f, -l), wa(p, l), s = {
						type: l > 1 ? "strongSequence" : "emphasisSequence",
						start: f,
						end: Object.assign({}, e[r][1].end)
					}, a = {
						type: l > 1 ? "strongSequence" : "emphasisSequence",
						start: Object.assign({}, e[n][1].start),
						end: p
					}, o = {
						type: l > 1 ? "strongText" : "emphasisText",
						start: Object.assign({}, e[r][1].end),
						end: Object.assign({}, e[n][1].start)
					}, i = {
						type: l > 1 ? "strong" : "emphasis",
						start: Object.assign({}, s.start),
						end: Object.assign({}, a.end)
					}, e[r][1].end = Object.assign({}, s.start), e[n][1].start = Object.assign({}, a.end), c = [], e[r][1].end.offset - e[r][1].start.offset && (c = Ue(c, [
						["enter", e[r][1], t],
						["exit", e[r][1], t]
					])), c = Ue(c, [
						["enter", i, t],
						["enter", s, t],
						["exit", s, t],
						["enter", o, t]
					]), c = Ue(c, jr(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), c = Ue(c, [
						["exit", o, t],
						["enter", a, t],
						["exit", a, t],
						["exit", i, t]
					]), e[n][1].end.offset - e[n][1].start.offset ? (u = 2, c = Ue(c, [
						["enter", e[n][1], t],
						["exit", e[n][1], t]
					])) : u = 0, De(e, r - 1, n - r + 3, c), n = r + c.length - u - 2;
					break
				}
		} for (n = -1; ++n < e.length;) e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
	return e
}

function xm(e, t) {
	const n = this.parser.constructs.attentionMarkers.null,
		r = this.previous,
		i = Cr(r);
	let o;
	return s;

	function s(l) {
		return e.enter("attentionSequence"), o = l, a(l)
	}

	function a(l) {
		if (l === o) return e.consume(l), a;
		const c = e.exit("attentionSequence"),
			u = Cr(l),
			f = !u || u === 2 && i || n.includes(l),
			p = !i || i === 2 && u || n.includes(r);
		return c._open = Boolean(o === 42 ? f : f && (i || !p)), c._close = Boolean(o === 42 ? p : p && (u || !f)), t(l)
	}
}

function wa(e, t) {
	e.column += t, e.offset += t, e._bufferIndex += t
}
const km = {
	name: "autolink",
	tokenize: Cm
};

function Cm(e, t, n) {
	let r = 1;
	return i;

	function i(d) {
		return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(d), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), o
	}

	function o(d) {
		return $e(d) ? (e.consume(d), s) : va(d) ? c(d) : n(d)
	}

	function s(d) {
		return d === 43 || d === 45 || d === 46 || Se(d) ? a(d) : c(d)
	}

	function a(d) {
		return d === 58 ? (e.consume(d), l) : (d === 43 || d === 45 || d === 46 || Se(d)) && r++ < 32 ? (e.consume(d), a) : c(d)
	}

	function l(d) {
		return d === 62 ? (e.exit("autolinkProtocol"), h(d)) : d === null || d === 32 || d === 60 || Dn(d) ? n(d) : (e.consume(d), l)
	}

	function c(d) {
		return d === 64 ? (e.consume(d), r = 0, u) : va(d) ? (e.consume(d), c) : n(d)
	}

	function u(d) {
		return Se(d) ? f(d) : n(d)
	}

	function f(d) {
		return d === 46 ? (e.consume(d), r = 0, u) : d === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", h(d)) : p(d)
	}

	function p(d) {
		return (d === 45 || Se(d)) && r++ < 63 ? (e.consume(d), d === 45 ? p : f) : n(d)
	}

	function h(d) {
		return e.enter("autolinkMarker"), e.consume(d), e.exit("autolinkMarker"), e.exit("autolink"), t
	}
}
const $n = {
	tokenize: Sm,
	partial: !0
};

function Sm(e, t, n) {
	return Y(e, r, "linePrefix");

	function r(i) {
		return i === null || U(i) ? t(i) : n(i)
	}
}
const Lu = {
	name: "blockQuote",
	tokenize: Em,
	continuation: {
		tokenize: Tm
	},
	exit: Am
};

function Em(e, t, n) {
	const r = this;
	return i;

	function i(s) {
		if (s === 62) {
			const a = r.containerState;
			return a.open || (e.enter("blockQuote", {
				_container: !0
			}), a.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(s), e.exit("blockQuoteMarker"), o
		}
		return n(s)
	}

	function o(s) {
		return te(s) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(s), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(s))
	}
}

function Tm(e, t, n) {
	return Y(e, e.attempt(Lu, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
}

function Am(e) {
	e.exit("blockQuote")
}
const Du = {
	name: "characterEscape",
	tokenize: Om
};

function Om(e, t, n) {
	return r;

	function r(o) {
		return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(o), e.exit("escapeMarker"), i
	}

	function i(o) {
		return mm(o) ? (e.enter("characterEscapeValue"), e.consume(o), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(o)
	}
}
const xa = document.createElement("i");

function Ro(e) {
	const t = "&" + e + ";";
	xa.innerHTML = t;
	const n = xa.textContent;
	return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n
}
const Fu = {
	name: "characterReference",
	tokenize: Mm
};

function Mm(e, t, n) {
	const r = this;
	let i = 0,
		o, s;
	return a;

	function a(f) {
		return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), l
	}

	function l(f) {
		return f === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(f), e.exit("characterReferenceMarkerNumeric"), c) : (e.enter("characterReferenceValue"), o = 31, s = Se, u(f))
	}

	function c(f) {
		return f === 88 || f === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(f), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, s = pm, u) : (e.enter("characterReferenceValue"), o = 7, s = kr, u(f))
	}

	function u(f) {
		let p;
		return f === 59 && i ? (p = e.exit("characterReferenceValue"), s === Se && !Ro(r.sliceSerialize(p)) ? n(f) : (e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), e.exit("characterReference"), t)) : s(f) && i++ < o ? (e.consume(f), u) : n(f)
	}
}
const ka = {
	name: "codeFenced",
	tokenize: Im,
	concrete: !0
};

function Im(e, t, n) {
	const r = this,
		i = {
			tokenize: E,
			partial: !0
		},
		o = {
			tokenize: C,
			partial: !0
		},
		s = this.events[this.events.length - 1],
		a = s && s[1].type === "linePrefix" ? s[2].sliceSerialize(s[1], !0).length : 0;
	let l = 0,
		c;
	return u;

	function u(b) {
		return e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), c = b, f(b)
	}

	function f(b) {
		return b === c ? (e.consume(b), l++, f) : (e.exit("codeFencedFenceSequence"), l < 3 ? n(b) : Y(e, p, "whitespace")(b))
	}

	function p(b) {
		return b === null || U(b) ? g(b) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
			contentType: "string"
		}), h(b))
	}

	function h(b) {
		return b === null || ce(b) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), Y(e, d, "whitespace")(b)) : b === 96 && b === c ? n(b) : (e.consume(b), h)
	}

	function d(b) {
		return b === null || U(b) ? g(b) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
			contentType: "string"
		}), m(b))
	}

	function m(b) {
		return b === null || U(b) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), g(b)) : b === 96 && b === c ? n(b) : (e.consume(b), m)
	}

	function g(b) {
		return e.exit("codeFencedFence"), r.interrupt ? t(b) : y(b)
	}

	function y(b) {
		return b === null ? w(b) : U(b) ? e.attempt(o, e.attempt(i, w, a ? Y(e, y, "linePrefix", a + 1) : y), w)(b) : (e.enter("codeFlowValue"), k(b))
	}

	function k(b) {
		return b === null || U(b) ? (e.exit("codeFlowValue"), y(b)) : (e.consume(b), k)
	}

	function w(b) {
		return e.exit("codeFenced"), t(b)
	}

	function C(b, A, R) {
		const F = this;
		return z;

		function z(L) {
			return b.enter("lineEnding"), b.consume(L), b.exit("lineEnding"), O
		}

		function O(L) {
			return F.parser.lazy[F.now().line] ? R(L) : A(L)
		}
	}

	function E(b, A, R) {
		let F = 0;
		return Y(b, z, "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);

		function z(B) {
			return b.enter("codeFencedFence"), b.enter("codeFencedFenceSequence"), O(B)
		}

		function O(B) {
			return B === c ? (b.consume(B), F++, O) : F < l ? R(B) : (b.exit("codeFencedFenceSequence"), Y(b, L, "whitespace")(B))
		}

		function L(B) {
			return B === null || U(B) ? (b.exit("codeFencedFence"), A(B)) : R(B)
		}
	}
}
const _i = {
		name: "codeIndented",
		tokenize: Pm
	},
	Rm = {
		tokenize: Lm,
		partial: !0
	};

function Pm(e, t, n) {
	const r = this;
	return i;

	function i(c) {
		return e.enter("codeIndented"), Y(e, o, "linePrefix", 4 + 1)(c)
	}

	function o(c) {
		const u = r.events[r.events.length - 1];
		return u && u[1].type === "linePrefix" && u[2].sliceSerialize(u[1], !0).length >= 4 ? s(c) : n(c)
	}

	function s(c) {
		return c === null ? l(c) : U(c) ? e.attempt(Rm, s, l)(c) : (e.enter("codeFlowValue"), a(c))
	}

	function a(c) {
		return c === null || U(c) ? (e.exit("codeFlowValue"), s(c)) : (e.consume(c), a)
	}

	function l(c) {
		return e.exit("codeIndented"), t(c)
	}
}

function Lm(e, t, n) {
	const r = this;
	return i;

	function i(s) {
		return r.parser.lazy[r.now().line] ? n(s) : U(s) ? (e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), i) : Y(e, o, "linePrefix", 4 + 1)(s)
	}

	function o(s) {
		const a = r.events[r.events.length - 1];
		return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(s) : U(s) ? i(s) : n(s)
	}
}
const Dm = {
	name: "codeText",
	tokenize: Nm,
	resolve: Fm,
	previous: zm
};

function Fm(e) {
	let t = e.length - 4,
		n = 3,
		r, i;
	if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
		for (r = n; ++r < t;)
			if (e[r][1].type === "codeTextData") {
				e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
				break
			}
	}
	for (r = n - 1, t++; ++r <= t;) i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
	return e
}

function zm(e) {
	return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape"
}

function Nm(e, t, n) {
	let r = 0,
		i, o;
	return s;

	function s(f) {
		return e.enter("codeText"), e.enter("codeTextSequence"), a(f)
	}

	function a(f) {
		return f === 96 ? (e.consume(f), r++, a) : (e.exit("codeTextSequence"), l(f))
	}

	function l(f) {
		return f === null ? n(f) : f === 96 ? (o = e.enter("codeTextSequence"), i = 0, u(f)) : f === 32 ? (e.enter("space"), e.consume(f), e.exit("space"), l) : U(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), l) : (e.enter("codeTextData"), c(f))
	}

	function c(f) {
		return f === null || f === 32 || f === 96 || U(f) ? (e.exit("codeTextData"), l(f)) : (e.consume(f), c)
	}

	function u(f) {
		return f === 96 ? (e.consume(f), i++, u) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(f)) : (o.type = "codeTextData", c(f))
	}
}

function zu(e) {
	const t = {};
	let n = -1,
		r, i, o, s, a, l, c;
	for (; ++n < e.length;) {
		for (; n in t;) n = t[n];
		if (r = e[n], n && r[1].type === "chunkFlow" && e[n - 1][1].type === "listItemPrefix" && (l = r[1]._tokenizer.events, o = 0, o < l.length && l[o][1].type === "lineEndingBlank" && (o += 2), o < l.length && l[o][1].type === "content"))
			for (; ++o < l.length && l[o][1].type !== "content";) l[o][1].type === "chunkText" && (l[o][1]._isInFirstContentOfListItem = !0, o++);
		if (r[0] === "enter") r[1].contentType && (Object.assign(t, jm(e, n)), n = t[n], c = !0);
		else if (r[1]._container) {
			for (o = n, i = void 0; o-- && (s = e[o], s[1].type === "lineEnding" || s[1].type === "lineEndingBlank");) s[0] === "enter" && (i && (e[i][1].type = "lineEndingBlank"), s[1].type = "lineEnding", i = o);
			i && (r[1].end = Object.assign({}, e[i][1].start), a = e.slice(i, n), a.unshift(r), De(e, i, n - i + 1, a))
		}
	}
	return !c
}

function jm(e, t) {
	const n = e[t][1],
		r = e[t][2];
	let i = t - 1;
	const o = [],
		s = n._tokenizer || r.parser[n.contentType](n.start),
		a = s.events,
		l = [],
		c = {};
	let u, f, p = -1,
		h = n,
		d = 0,
		m = 0;
	const g = [m];
	for (; h;) {
		for (; e[++i][1] !== h;);
		o.push(i), h._tokenizer || (u = r.sliceStream(h), h.next || u.push(null), f && s.defineSkip(h.start), h._isInFirstContentOfListItem && (s._gfmTasklistFirstContentOfListItem = !0), s.write(u), h._isInFirstContentOfListItem && (s._gfmTasklistFirstContentOfListItem = void 0)), f = h, h = h.next
	}
	for (h = n; ++p < a.length;) a[p][0] === "exit" && a[p - 1][0] === "enter" && a[p][1].type === a[p - 1][1].type && a[p][1].start.line !== a[p][1].end.line && (m = p + 1, g.push(m), h._tokenizer = void 0, h.previous = void 0, h = h.next);
	for (s.events = [], h ? (h._tokenizer = void 0, h.previous = void 0) : g.pop(), p = g.length; p--;) {
		const y = a.slice(g[p], g[p + 1]),
			k = o.pop();
		l.unshift([k, k + y.length - 1]), De(e, k, 2, y)
	}
	for (p = -1; ++p < l.length;) c[d + l[p][0]] = d + l[p][1], d += l[p][1] - l[p][0] - 1;
	return c
}
const Bm = {
		tokenize: $m,
		resolve: Vm
	},
	Um = {
		tokenize: Hm,
		partial: !0
	};

function Vm(e) {
	return zu(e), e
}

function $m(e, t) {
	let n;
	return r;

	function r(a) {
		return e.enter("content"), n = e.enter("chunkContent", {
			contentType: "content"
		}), i(a)
	}

	function i(a) {
		return a === null ? o(a) : U(a) ? e.check(Um, s, o)(a) : (e.consume(a), i)
	}

	function o(a) {
		return e.exit("chunkContent"), e.exit("content"), t(a)
	}

	function s(a) {
		return e.consume(a), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
			contentType: "content",
			previous: n
		}), n = n.next, i
	}
}

function Hm(e, t, n) {
	const r = this;
	return i;

	function i(s) {
		return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), Y(e, o, "linePrefix")
	}

	function o(s) {
		if (s === null || U(s)) return n(s);
		const a = r.events[r.events.length - 1];
		return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(s) : e.interrupt(r.parser.constructs.flow, n, t)(s)
	}
}

function Nu(e, t, n, r, i, o, s, a, l) {
	const c = l || Number.POSITIVE_INFINITY;
	let u = 0;
	return f;

	function f(y) {
		return y === 60 ? (e.enter(r), e.enter(i), e.enter(o), e.consume(y), e.exit(o), p) : y === null || y === 41 || Dn(y) ? n(y) : (e.enter(r), e.enter(s), e.enter(a), e.enter("chunkString", {
			contentType: "string"
		}), m(y))
	}

	function p(y) {
		return y === 62 ? (e.enter(o), e.consume(y), e.exit(o), e.exit(i), e.exit(r), t) : (e.enter(a), e.enter("chunkString", {
			contentType: "string"
		}), h(y))
	}

	function h(y) {
		return y === 62 ? (e.exit("chunkString"), e.exit(a), p(y)) : y === null || y === 60 || U(y) ? n(y) : (e.consume(y), y === 92 ? d : h)
	}

	function d(y) {
		return y === 60 || y === 62 || y === 92 ? (e.consume(y), h) : h(y)
	}

	function m(y) {
		return y === 40 ? ++u > c ? n(y) : (e.consume(y), m) : y === 41 ? u-- ? (e.consume(y), m) : (e.exit("chunkString"), e.exit(a), e.exit(s), e.exit(r), t(y)) : y === null || ce(y) ? u ? n(y) : (e.exit("chunkString"), e.exit(a), e.exit(s), e.exit(r), t(y)) : Dn(y) ? n(y) : (e.consume(y), y === 92 ? g : m)
	}

	function g(y) {
		return y === 40 || y === 41 || y === 92 ? (e.consume(y), m) : m(y)
	}
}

function ju(e, t, n, r, i, o) {
	const s = this;
	let a = 0,
		l;
	return c;

	function c(h) {
		return e.enter(r), e.enter(i), e.consume(h), e.exit(i), e.enter(o), u
	}

	function u(h) {
		return h === null || h === 91 || h === 93 && !l || h === 94 && !a && "_hiddenFootnoteSupport" in s.parser.constructs || a > 999 ? n(h) : h === 93 ? (e.exit(o), e.enter(i), e.consume(h), e.exit(i), e.exit(r), t) : U(h) ? (e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), u) : (e.enter("chunkString", {
			contentType: "string"
		}), f(h))
	}

	function f(h) {
		return h === null || h === 91 || h === 93 || U(h) || a++ > 999 ? (e.exit("chunkString"), u(h)) : (e.consume(h), l = l || !te(h), h === 92 ? p : f)
	}

	function p(h) {
		return h === 91 || h === 92 || h === 93 ? (e.consume(h), a++, f) : f(h)
	}
}

function Bu(e, t, n, r, i, o) {
	let s;
	return a;

	function a(p) {
		return e.enter(r), e.enter(i), e.consume(p), e.exit(i), s = p === 40 ? 41 : p, l
	}

	function l(p) {
		return p === s ? (e.enter(i), e.consume(p), e.exit(i), e.exit(r), t) : (e.enter(o), c(p))
	}

	function c(p) {
		return p === s ? (e.exit(o), l(s)) : p === null ? n(p) : U(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), Y(e, c, "linePrefix")) : (e.enter("chunkString", {
			contentType: "string"
		}), u(p))
	}

	function u(p) {
		return p === s || p === null || U(p) ? (e.exit("chunkString"), c(p)) : (e.consume(p), p === 92 ? f : u)
	}

	function f(p) {
		return p === s || p === 92 ? (e.consume(p), u) : u(p)
	}
}

function kn(e, t) {
	let n;
	return r;

	function r(i) {
		return U(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : te(i) ? Y(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i)
	}
}

function Ge(e) {
	return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase()
}
const qm = {
		name: "definition",
		tokenize: Qm
	},
	Wm = {
		tokenize: Ym,
		partial: !0
	};

function Qm(e, t, n) {
	const r = this;
	let i;
	return o;

	function o(l) {
		return e.enter("definition"), ju.call(r, e, s, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(l)
	}

	function s(l) {
		return i = Ge(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), l === 58 ? (e.enter("definitionMarker"), e.consume(l), e.exit("definitionMarker"), kn(e, Nu(e, e.attempt(Wm, Y(e, a, "whitespace"), Y(e, a, "whitespace")), n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString"))) : n(l)
	}

	function a(l) {
		return l === null || U(l) ? (e.exit("definition"), r.parser.defined.includes(i) || r.parser.defined.push(i), t(l)) : n(l)
	}
}

function Ym(e, t, n) {
	return r;

	function r(s) {
		return ce(s) ? kn(e, i)(s) : n(s)
	}

	function i(s) {
		return s === 34 || s === 39 || s === 40 ? Bu(e, Y(e, o, "whitespace"), n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(s) : n(s)
	}

	function o(s) {
		return s === null || U(s) ? t(s) : n(s)
	}
}
const Xm = {
	name: "hardBreakEscape",
	tokenize: Gm
};

function Gm(e, t, n) {
	return r;

	function r(o) {
		return e.enter("hardBreakEscape"), e.enter("escapeMarker"), e.consume(o), i
	}

	function i(o) {
		return U(o) ? (e.exit("escapeMarker"), e.exit("hardBreakEscape"), t(o)) : n(o)
	}
}
const Km = {
	name: "headingAtx",
	tokenize: Jm,
	resolve: Zm
};

function Zm(e, t) {
	let n = e.length - 2,
		r = 3,
		i, o;
	return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
		type: "atxHeadingText",
		start: e[r][1].start,
		end: e[n][1].end
	}, o = {
		type: "chunkText",
		start: e[r][1].start,
		end: e[n][1].end,
		contentType: "text"
	}, De(e, r, n - r + 1, [
		["enter", i, t],
		["enter", o, t],
		["exit", o, t],
		["exit", i, t]
	])), e
}

function Jm(e, t, n) {
	const r = this;
	let i = 0;
	return o;

	function o(u) {
		return e.enter("atxHeading"), e.enter("atxHeadingSequence"), s(u)
	}

	function s(u) {
		return u === 35 && i++ < 6 ? (e.consume(u), s) : u === null || ce(u) ? (e.exit("atxHeadingSequence"), r.interrupt ? t(u) : a(u)) : n(u)
	}

	function a(u) {
		return u === 35 ? (e.enter("atxHeadingSequence"), l(u)) : u === null || U(u) ? (e.exit("atxHeading"), t(u)) : te(u) ? Y(e, a, "whitespace")(u) : (e.enter("atxHeadingText"), c(u))
	}

	function l(u) {
		return u === 35 ? (e.consume(u), l) : (e.exit("atxHeadingSequence"), a(u))
	}

	function c(u) {
		return u === null || u === 35 || ce(u) ? (e.exit("atxHeadingText"), a(u)) : (e.consume(u), c)
	}
}
const eg = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"],
	Ca = ["pre", "script", "style", "textarea"],
	tg = {
		name: "htmlFlow",
		tokenize: ig,
		resolveTo: rg,
		concrete: !0
	},
	ng = {
		tokenize: og,
		partial: !0
	};

function rg(e) {
	let t = e.length;
	for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"););
	return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e
}

function ig(e, t, n) {
	const r = this;
	let i, o, s, a, l;
	return c;

	function c(v) {
		return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(v), u
	}

	function u(v) {
		return v === 33 ? (e.consume(v), f) : v === 47 ? (e.consume(v), d) : v === 63 ? (e.consume(v), i = 3, r.interrupt ? t : Z) : $e(v) ? (e.consume(v), s = String.fromCharCode(v), o = !0, m) : n(v)
	}

	function f(v) {
		return v === 45 ? (e.consume(v), i = 2, p) : v === 91 ? (e.consume(v), i = 5, s = "CDATA[", a = 0, h) : $e(v) ? (e.consume(v), i = 4, r.interrupt ? t : Z) : n(v)
	}

	function p(v) {
		return v === 45 ? (e.consume(v), r.interrupt ? t : Z) : n(v)
	}

	function h(v) {
		return v === s.charCodeAt(a++) ? (e.consume(v), a === s.length ? r.interrupt ? t : O : h) : n(v)
	}

	function d(v) {
		return $e(v) ? (e.consume(v), s = String.fromCharCode(v), m) : n(v)
	}

	function m(v) {
		return v === null || v === 47 || v === 62 || ce(v) ? v !== 47 && o && Ca.includes(s.toLowerCase()) ? (i = 1, r.interrupt ? t(v) : O(v)) : eg.includes(s.toLowerCase()) ? (i = 6, v === 47 ? (e.consume(v), g) : r.interrupt ? t(v) : O(v)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(v) : o ? k(v) : y(v)) : v === 45 || Se(v) ? (e.consume(v), s += String.fromCharCode(v), m) : n(v)
	}

	function g(v) {
		return v === 62 ? (e.consume(v), r.interrupt ? t : O) : n(v)
	}

	function y(v) {
		return te(v) ? (e.consume(v), y) : F(v)
	}

	function k(v) {
		return v === 47 ? (e.consume(v), F) : v === 58 || v === 95 || $e(v) ? (e.consume(v), w) : te(v) ? (e.consume(v), k) : F(v)
	}

	function w(v) {
		return v === 45 || v === 46 || v === 58 || v === 95 || Se(v) ? (e.consume(v), w) : C(v)
	}

	function C(v) {
		return v === 61 ? (e.consume(v), E) : te(v) ? (e.consume(v), C) : k(v)
	}

	function E(v) {
		return v === null || v === 60 || v === 61 || v === 62 || v === 96 ? n(v) : v === 34 || v === 39 ? (e.consume(v), l = v, b) : te(v) ? (e.consume(v), E) : (l = null, A(v))
	}

	function b(v) {
		return v === null || U(v) ? n(v) : v === l ? (e.consume(v), R) : (e.consume(v), b)
	}

	function A(v) {
		return v === null || v === 34 || v === 39 || v === 60 || v === 61 || v === 62 || v === 96 || ce(v) ? C(v) : (e.consume(v), A)
	}

	function R(v) {
		return v === 47 || v === 62 || te(v) ? k(v) : n(v)
	}

	function F(v) {
		return v === 62 ? (e.consume(v), z) : n(v)
	}

	function z(v) {
		return te(v) ? (e.consume(v), z) : v === null || U(v) ? O(v) : n(v)
	}

	function O(v) {
		return v === 45 && i === 2 ? (e.consume(v), N) : v === 60 && i === 1 ? (e.consume(v), x) : v === 62 && i === 4 ? (e.consume(v), K) : v === 63 && i === 3 ? (e.consume(v), Z) : v === 93 && i === 5 ? (e.consume(v), $) : U(v) && (i === 6 || i === 7) ? e.check(ng, K, L)(v) : v === null || U(v) ? L(v) : (e.consume(v), O)
	}

	function L(v) {
		return e.exit("htmlFlowData"), B(v)
	}

	function B(v) {
		return v === null ? _(v) : U(v) ? e.attempt({
			tokenize: D,
			partial: !0
		}, B, _)(v) : (e.enter("htmlFlowData"), O(v))
	}

	function D(v, ze, pt) {
		return ge;

		function ge(fe) {
			return v.enter("lineEnding"), v.consume(fe), v.exit("lineEnding"), ne
		}

		function ne(fe) {
			return r.parser.lazy[r.now().line] ? pt(fe) : ze(fe)
		}
	}

	function N(v) {
		return v === 45 ? (e.consume(v), Z) : O(v)
	}

	function x(v) {
		return v === 47 ? (e.consume(v), s = "", X) : O(v)
	}

	function X(v) {
		return v === 62 && Ca.includes(s.toLowerCase()) ? (e.consume(v), K) : $e(v) && s.length < 8 ? (e.consume(v), s += String.fromCharCode(v), X) : O(v)
	}

	function $(v) {
		return v === 93 ? (e.consume(v), Z) : O(v)
	}

	function Z(v) {
		return v === 62 ? (e.consume(v), K) : v === 45 && i === 2 ? (e.consume(v), Z) : O(v)
	}

	function K(v) {
		return v === null || U(v) ? (e.exit("htmlFlowData"), _(v)) : (e.consume(v), K)
	}

	function _(v) {
		return e.exit("htmlFlow"), t(v)
	}
}

function og(e, t, n) {
	return r;

	function r(i) {
		return e.exit("htmlFlowData"), e.enter("lineEndingBlank"), e.consume(i), e.exit("lineEndingBlank"), e.attempt($n, t, n)
	}
}
const sg = {
	name: "htmlText",
	tokenize: ag
};

function ag(e, t, n) {
	const r = this;
	let i, o, s, a;
	return l;

	function l(_) {
		return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(_), c
	}

	function c(_) {
		return _ === 33 ? (e.consume(_), u) : _ === 47 ? (e.consume(_), A) : _ === 63 ? (e.consume(_), E) : $e(_) ? (e.consume(_), z) : n(_)
	}

	function u(_) {
		return _ === 45 ? (e.consume(_), f) : _ === 91 ? (e.consume(_), o = "CDATA[", s = 0, g) : $e(_) ? (e.consume(_), C) : n(_)
	}

	function f(_) {
		return _ === 45 ? (e.consume(_), p) : n(_)
	}

	function p(_) {
		return _ === null || _ === 62 ? n(_) : _ === 45 ? (e.consume(_), h) : d(_)
	}

	function h(_) {
		return _ === null || _ === 62 ? n(_) : d(_)
	}

	function d(_) {
		return _ === null ? n(_) : _ === 45 ? (e.consume(_), m) : U(_) ? (a = d, $(_)) : (e.consume(_), d)
	}

	function m(_) {
		return _ === 45 ? (e.consume(_), K) : d(_)
	}

	function g(_) {
		return _ === o.charCodeAt(s++) ? (e.consume(_), s === o.length ? y : g) : n(_)
	}

	function y(_) {
		return _ === null ? n(_) : _ === 93 ? (e.consume(_), k) : U(_) ? (a = y, $(_)) : (e.consume(_), y)
	}

	function k(_) {
		return _ === 93 ? (e.consume(_), w) : y(_)
	}

	function w(_) {
		return _ === 62 ? K(_) : _ === 93 ? (e.consume(_), w) : y(_)
	}

	function C(_) {
		return _ === null || _ === 62 ? K(_) : U(_) ? (a = C, $(_)) : (e.consume(_), C)
	}

	function E(_) {
		return _ === null ? n(_) : _ === 63 ? (e.consume(_), b) : U(_) ? (a = E, $(_)) : (e.consume(_), E)
	}

	function b(_) {
		return _ === 62 ? K(_) : E(_)
	}

	function A(_) {
		return $e(_) ? (e.consume(_), R) : n(_)
	}

	function R(_) {
		return _ === 45 || Se(_) ? (e.consume(_), R) : F(_)
	}

	function F(_) {
		return U(_) ? (a = F, $(_)) : te(_) ? (e.consume(_), F) : K(_)
	}

	function z(_) {
		return _ === 45 || Se(_) ? (e.consume(_), z) : _ === 47 || _ === 62 || ce(_) ? O(_) : n(_)
	}

	function O(_) {
		return _ === 47 ? (e.consume(_), K) : _ === 58 || _ === 95 || $e(_) ? (e.consume(_), L) : U(_) ? (a = O, $(_)) : te(_) ? (e.consume(_), O) : K(_)
	}

	function L(_) {
		return _ === 45 || _ === 46 || _ === 58 || _ === 95 || Se(_) ? (e.consume(_), L) : B(_)
	}

	function B(_) {
		return _ === 61 ? (e.consume(_), D) : U(_) ? (a = B, $(_)) : te(_) ? (e.consume(_), B) : O(_)
	}

	function D(_) {
		return _ === null || _ === 60 || _ === 61 || _ === 62 || _ === 96 ? n(_) : _ === 34 || _ === 39 ? (e.consume(_), i = _, N) : U(_) ? (a = D, $(_)) : te(_) ? (e.consume(_), D) : (e.consume(_), i = void 0, X)
	}

	function N(_) {
		return _ === i ? (e.consume(_), x) : _ === null ? n(_) : U(_) ? (a = N, $(_)) : (e.consume(_), N)
	}

	function x(_) {
		return _ === 62 || _ === 47 || ce(_) ? O(_) : n(_)
	}

	function X(_) {
		return _ === null || _ === 34 || _ === 39 || _ === 60 || _ === 61 || _ === 96 ? n(_) : _ === 62 || ce(_) ? O(_) : (e.consume(_), X)
	}

	function $(_) {
		return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(_), e.exit("lineEnding"), Y(e, Z, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
	}

	function Z(_) {
		return e.enter("htmlTextData"), a(_)
	}

	function K(_) {
		return _ === 62 ? (e.consume(_), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(_)
	}
}
const Po = {
		name: "labelEnd",
		tokenize: hg,
		resolveTo: dg,
		resolveAll: fg
	},
	lg = {
		tokenize: pg
	},
	ug = {
		tokenize: mg
	},
	cg = {
		tokenize: gg
	};

function fg(e) {
	let t = -1,
		n;
	for (; ++t < e.length;) n = e[t][1], (n.type === "labelImage" || n.type === "labelLink" || n.type === "labelEnd") && (e.splice(t + 1, n.type === "labelImage" ? 4 : 2), n.type = "data", t++);
	return e
}

function dg(e, t) {
	let n = e.length,
		r = 0,
		i, o, s, a;
	for (; n--;)
		if (i = e[n][1], o) {
			if (i.type === "link" || i.type === "labelLink" && i._inactive) break;
			e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0)
		} else if (s) {
		if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (o = n, i.type !== "labelLink")) {
			r = 2;
			break
		}
	} else i.type === "labelEnd" && (s = n);
	const l = {
			type: e[o][1].type === "labelLink" ? "link" : "image",
			start: Object.assign({}, e[o][1].start),
			end: Object.assign({}, e[e.length - 1][1].end)
		},
		c = {
			type: "label",
			start: Object.assign({}, e[o][1].start),
			end: Object.assign({}, e[s][1].end)
		},
		u = {
			type: "labelText",
			start: Object.assign({}, e[o + r + 2][1].end),
			end: Object.assign({}, e[s - 2][1].start)
		};
	return a = [
		["enter", l, t],
		["enter", c, t]
	], a = Ue(a, e.slice(o + 1, o + r + 3)), a = Ue(a, [
		["enter", u, t]
	]), a = Ue(a, jr(t.parser.constructs.insideSpan.null, e.slice(o + r + 4, s - 3), t)), a = Ue(a, [
		["exit", u, t], e[s - 2], e[s - 1],
		["exit", c, t]
	]), a = Ue(a, e.slice(s + 1)), a = Ue(a, [
		["exit", l, t]
	]), De(e, o, e.length, a), e
}

function hg(e, t, n) {
	const r = this;
	let i = r.events.length,
		o, s;
	for (; i--;)
		if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
			o = r.events[i][1];
			break
		} return a;

	function a(u) {
		return o ? o._inactive ? c(u) : (s = r.parser.defined.includes(Ge(r.sliceSerialize({
			start: o.end,
			end: r.now()
		}))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(u), e.exit("labelMarker"), e.exit("labelEnd"), l) : n(u)
	}

	function l(u) {
		return u === 40 ? e.attempt(lg, t, s ? t : c)(u) : u === 91 ? e.attempt(ug, t, s ? e.attempt(cg, t, c) : c)(u) : s ? t(u) : c(u)
	}

	function c(u) {
		return o._balanced = !0, n(u)
	}
}

function pg(e, t, n) {
	return r;

	function r(l) {
		return e.enter("resource"), e.enter("resourceMarker"), e.consume(l), e.exit("resourceMarker"), kn(e, i)
	}

	function i(l) {
		return l === 41 ? a(l) : Nu(e, o, n, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(l)
	}

	function o(l) {
		return ce(l) ? kn(e, s)(l) : a(l)
	}

	function s(l) {
		return l === 34 || l === 39 || l === 40 ? Bu(e, kn(e, a), n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(l) : a(l)
	}

	function a(l) {
		return l === 41 ? (e.enter("resourceMarker"), e.consume(l), e.exit("resourceMarker"), e.exit("resource"), t) : n(l)
	}
}

function mg(e, t, n) {
	const r = this;
	return i;

	function i(s) {
		return ju.call(r, e, o, n, "reference", "referenceMarker", "referenceString")(s)
	}

	function o(s) {
		return r.parser.defined.includes(Ge(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(s) : n(s)
	}
}

function gg(e, t, n) {
	return r;

	function r(o) {
		return e.enter("reference"), e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), i
	}

	function i(o) {
		return o === 93 ? (e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), e.exit("reference"), t) : n(o)
	}
}
const yg = {
	name: "labelStartImage",
	tokenize: bg,
	resolveAll: Po.resolveAll
};

function bg(e, t, n) {
	const r = this;
	return i;

	function i(a) {
		return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(a), e.exit("labelImageMarker"), o
	}

	function o(a) {
		return a === 91 ? (e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelImage"), s) : n(a)
	}

	function s(a) {
		return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(a) : t(a)
	}
}
const vg = {
	name: "labelStartLink",
	tokenize: _g,
	resolveAll: Po.resolveAll
};

function _g(e, t, n) {
	const r = this;
	return i;

	function i(s) {
		return e.enter("labelLink"), e.enter("labelMarker"), e.consume(s), e.exit("labelMarker"), e.exit("labelLink"), o
	}

	function o(s) {
		return s === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(s) : t(s)
	}
}
const wi = {
	name: "lineEnding",
	tokenize: wg
};

function wg(e, t) {
	return n;

	function n(r) {
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), Y(e, t, "linePrefix")
	}
}
const ar = {
	name: "thematicBreak",
	tokenize: xg
};

function xg(e, t, n) {
	let r = 0,
		i;
	return o;

	function o(l) {
		return e.enter("thematicBreak"), i = l, s(l)
	}

	function s(l) {
		return l === i ? (e.enter("thematicBreakSequence"), a(l)) : te(l) ? Y(e, s, "whitespace")(l) : r < 3 || l !== null && !U(l) ? n(l) : (e.exit("thematicBreak"), t(l))
	}

	function a(l) {
		return l === i ? (e.consume(l), r++, a) : (e.exit("thematicBreakSequence"), s(l))
	}
}
const Oe = {
		name: "list",
		tokenize: Sg,
		continuation: {
			tokenize: Eg
		},
		exit: Ag
	},
	kg = {
		tokenize: Og,
		partial: !0
	},
	Cg = {
		tokenize: Tg,
		partial: !0
	};

function Sg(e, t, n) {
	const r = this,
		i = r.events[r.events.length - 1];
	let o = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0,
		s = 0;
	return a;

	function a(h) {
		const d = r.containerState.type || (h === 42 || h === 43 || h === 45 ? "listUnordered" : "listOrdered");
		if (d === "listUnordered" ? !r.containerState.marker || h === r.containerState.marker : kr(h)) {
			if (r.containerState.type || (r.containerState.type = d, e.enter(d, {
					_container: !0
				})), d === "listUnordered") return e.enter("listItemPrefix"), h === 42 || h === 45 ? e.check(ar, n, c)(h) : c(h);
			if (!r.interrupt || h === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), l(h)
		}
		return n(h)
	}

	function l(h) {
		return kr(h) && ++s < 10 ? (e.consume(h), l) : (!r.interrupt || s < 2) && (r.containerState.marker ? h === r.containerState.marker : h === 41 || h === 46) ? (e.exit("listItemValue"), c(h)) : n(h)
	}

	function c(h) {
		return e.enter("listItemMarker"), e.consume(h), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || h, e.check($n, r.interrupt ? n : u, e.attempt(kg, p, f))
	}

	function u(h) {
		return r.containerState.initialBlankLine = !0, o++, p(h)
	}

	function f(h) {
		return te(h) ? (e.enter("listItemPrefixWhitespace"), e.consume(h), e.exit("listItemPrefixWhitespace"), p) : n(h)
	}

	function p(h) {
		return r.containerState.size = o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(h)
	}
}

function Eg(e, t, n) {
	const r = this;
	return r.containerState._closeFlow = void 0, e.check($n, i, o);

	function i(a) {
		return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, Y(e, t, "listItemIndent", r.containerState.size + 1)(a)
	}

	function o(a) {
		return r.containerState.furtherBlankLines || !te(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, s(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(Cg, t, s)(a))
	}

	function s(a) {
		return r.containerState._closeFlow = !0, r.interrupt = void 0, Y(e, e.attempt(Oe, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a)
	}
}

function Tg(e, t, n) {
	const r = this;
	return Y(e, i, "listItemIndent", r.containerState.size + 1);

	function i(o) {
		const s = r.events[r.events.length - 1];
		return s && s[1].type === "listItemIndent" && s[2].sliceSerialize(s[1], !0).length === r.containerState.size ? t(o) : n(o)
	}
}

function Ag(e) {
	e.exit(this.containerState.type)
}

function Og(e, t, n) {
	const r = this;
	return Y(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1);

	function i(o) {
		const s = r.events[r.events.length - 1];
		return !te(o) && s && s[1].type === "listItemPrefixWhitespace" ? t(o) : n(o)
	}
}
const Sa = {
	name: "setextUnderline",
	tokenize: Ig,
	resolveTo: Mg
};

function Mg(e, t) {
	let n = e.length,
		r, i, o;
	for (; n--;)
		if (e[n][0] === "enter") {
			if (e[n][1].type === "content") {
				r = n;
				break
			}
			e[n][1].type === "paragraph" && (i = n)
		} else e[n][1].type === "content" && e.splice(n, 1), !o && e[n][1].type === "definition" && (o = n);
	const s = {
		type: "setextHeading",
		start: Object.assign({}, e[i][1].start),
		end: Object.assign({}, e[e.length - 1][1].end)
	};
	return e[i][1].type = "setextHeadingText", o ? (e.splice(i, 0, ["enter", s, t]), e.splice(o + 1, 0, ["exit", e[r][1], t]), e[r][1].end = Object.assign({}, e[o][1].end)) : e[r][1] = s, e.push(["exit", s, t]), e
}

function Ig(e, t, n) {
	const r = this;
	let i = r.events.length,
		o, s;
	for (; i--;)
		if (r.events[i][1].type !== "lineEnding" && r.events[i][1].type !== "linePrefix" && r.events[i][1].type !== "content") {
			s = r.events[i][1].type === "paragraph";
			break
		} return a;

	function a(u) {
		return !r.parser.lazy[r.now().line] && (r.interrupt || s) ? (e.enter("setextHeadingLine"), e.enter("setextHeadingLineSequence"), o = u, l(u)) : n(u)
	}

	function l(u) {
		return u === o ? (e.consume(u), l) : (e.exit("setextHeadingLineSequence"), Y(e, c, "lineSuffix")(u))
	}

	function c(u) {
		return u === null || U(u) ? (e.exit("setextHeadingLine"), t(u)) : n(u)
	}
}
const Rg = {
	tokenize: Pg
};

function Pg(e) {
	const t = this,
		n = e.attempt($n, r, e.attempt(this.parser.constructs.flowInitial, i, Y(e, e.attempt(this.parser.constructs.flow, i, e.attempt(Bm, i)), "linePrefix")));
	return n;

	function r(o) {
		if (o === null) {
			e.consume(o);
			return
		}
		return e.enter("lineEndingBlank"), e.consume(o), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n
	}

	function i(o) {
		if (o === null) {
			e.consume(o);
			return
		}
		return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), t.currentConstruct = void 0, n
	}
}
const Lg = {
		resolveAll: Vu()
	},
	Dg = Uu("string"),
	Fg = Uu("text");

function Uu(e) {
	return {
		tokenize: t,
		resolveAll: Vu(e === "text" ? zg : void 0)
	};

	function t(n) {
		const r = this,
			i = this.parser.constructs[e],
			o = n.attempt(i, s, a);
		return s;

		function s(u) {
			return c(u) ? o(u) : a(u)
		}

		function a(u) {
			if (u === null) {
				n.consume(u);
				return
			}
			return n.enter("data"), n.consume(u), l
		}

		function l(u) {
			return c(u) ? (n.exit("data"), o(u)) : (n.consume(u), l)
		}

		function c(u) {
			if (u === null) return !0;
			const f = i[u];
			let p = -1;
			if (f)
				for (; ++p < f.length;) {
					const h = f[p];
					if (!h.previous || h.previous.call(r, r.previous)) return !0
				}
			return !1
		}
	}
}

function Vu(e) {
	return t;

	function t(n, r) {
		let i = -1,
			o;
		for (; ++i <= n.length;) o === void 0 ? n[i] && n[i][1].type === "data" && (o = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== o + 2 && (n[o][1].end = n[i - 1][1].end, n.splice(o + 2, i - o - 2), i = o + 2), o = void 0);
		return e ? e(n, r) : n
	}
}

function zg(e, t) {
	let n = 0;
	for (; ++n <= e.length;)
		if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
			const r = e[n - 1][1],
				i = t.sliceStream(r);
			let o = i.length,
				s = -1,
				a = 0,
				l;
			for (; o--;) {
				const c = i[o];
				if (typeof c == "string") {
					for (s = c.length; c.charCodeAt(s - 1) === 32;) a++, s--;
					if (s) break;
					s = -1
				} else if (c === -2) l = !0, a++;
				else if (c !== -1) {
					o++;
					break
				}
			}
			if (a) {
				const c = {
					type: n === e.length || l || a < 2 ? "lineSuffix" : "hardBreakTrailing",
					start: {
						line: r.end.line,
						column: r.end.column - a,
						offset: r.end.offset - a,
						_index: r.start._index + o,
						_bufferIndex: o ? s : r.start._bufferIndex + s
					},
					end: Object.assign({}, r.end)
				};
				r.end = Object.assign({}, c.start), r.start.offset === r.end.offset ? Object.assign(r, c) : (e.splice(n, 0, ["enter", c, t], ["exit", c, t]), n += 2)
			}
			n++
		} return e
}

function Ng(e, t, n) {
	let r = Object.assign(n ? Object.assign({}, n) : {
		line: 1,
		column: 1,
		offset: 0
	}, {
		_index: 0,
		_bufferIndex: -1
	});
	const i = {},
		o = [];
	let s = [],
		a = [];
	const l = {
			consume: k,
			enter: w,
			exit: C,
			attempt: A(E),
			check: A(b),
			interrupt: A(b, {
				interrupt: !0
			})
		},
		c = {
			previous: null,
			code: null,
			containerState: {},
			events: [],
			parser: e,
			sliceStream: h,
			sliceSerialize: p,
			now: d,
			defineSkip: m,
			write: f
		};
	let u = t.tokenize.call(c, l);
	return t.resolveAll && o.push(t), c;

	function f(O) {
		return s = Ue(s, O), g(), s[s.length - 1] !== null ? [] : (R(t, 0), c.events = jr(o, c.events, c), c.events)
	}

	function p(O, L) {
		return Bg(h(O), L)
	}

	function h(O) {
		return jg(s, O)
	}

	function d() {
		return Object.assign({}, r)
	}

	function m(O) {
		i[O.line] = O.column, z()
	}

	function g() {
		let O;
		for (; r._index < s.length;) {
			const L = s[r._index];
			if (typeof L == "string")
				for (O = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === O && r._bufferIndex < L.length;) y(L.charCodeAt(r._bufferIndex));
			else y(L)
		}
	}

	function y(O) {
		u = u(O)
	}

	function k(O) {
		U(O) ? (r.line++, r.column = 1, r.offset += O === -3 ? 2 : 1, z()) : O !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === s[r._index].length && (r._bufferIndex = -1, r._index++)), c.previous = O
	}

	function w(O, L) {
		const B = L || {};
		return B.type = O, B.start = d(), c.events.push(["enter", B, c]), a.push(B), B
	}

	function C(O) {
		const L = a.pop();
		return L.end = d(), c.events.push(["exit", L, c]), L
	}

	function E(O, L) {
		R(O, L.from)
	}

	function b(O, L) {
		L.restore()
	}

	function A(O, L) {
		return B;

		function B(D, N, x) {
			let X, $, Z, K;
			return Array.isArray(D) ? v(D) : "tokenize" in D ? v([D]) : _(D);

			function _(ne) {
				return fe;

				function fe(Te) {
					const Ae = Te !== null && ne[Te],
						Ke = Te !== null && ne.null,
						ti = [...Array.isArray(Ae) ? Ae : Ae ? [Ae] : [], ...Array.isArray(Ke) ? Ke : Ke ? [Ke] : []];
					return v(ti)(Te)
				}
			}

			function v(ne) {
				return X = ne, $ = 0, ne.length === 0 ? x : ze(ne[$])
			}

			function ze(ne) {
				return fe;

				function fe(Te) {
					return K = F(), Z = ne, ne.partial || (c.currentConstruct = ne), ne.name && c.parser.constructs.disable.null.includes(ne.name) ? ge() : ne.tokenize.call(L ? Object.assign(Object.create(c), L) : c, l, pt, ge)(Te)
				}
			}

			function pt(ne) {
				return O(Z, K), N
			}

			function ge(ne) {
				return K.restore(), ++$ < X.length ? ze(X[$]) : x
			}
		}
	}

	function R(O, L) {
		O.resolveAll && !o.includes(O) && o.push(O), O.resolve && De(c.events, L, c.events.length - L, O.resolve(c.events.slice(L), c)), O.resolveTo && (c.events = O.resolveTo(c.events, c))
	}

	function F() {
		const O = d(),
			L = c.previous,
			B = c.currentConstruct,
			D = c.events.length,
			N = Array.from(a);
		return {
			restore: x,
			from: D
		};

		function x() {
			r = O, c.previous = L, c.currentConstruct = B, c.events.length = D, a = N, z()
		}
	}

	function z() {
		r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1)
	}
}

function jg(e, t) {
	const n = t.start._index,
		r = t.start._bufferIndex,
		i = t.end._index,
		o = t.end._bufferIndex;
	let s;
	return n === i ? s = [e[n].slice(r, o)] : (s = e.slice(n, i), r > -1 && (s[0] = s[0].slice(r)), o > 0 && s.push(e[i].slice(0, o))), s
}

function Bg(e, t) {
	let n = -1;
	const r = [];
	let i;
	for (; ++n < e.length;) {
		const o = e[n];
		let s;
		if (typeof o == "string") s = o;
		else switch (o) {
			case -5: {
				s = "\r";
				break
			}
			case -4: {
				s = `
`;
				break
			}
			case -3: {
				s = `\r
`;
				break
			}
			case -2: {
				s = t ? " " : "	";
				break
			}
			case -1: {
				if (!t && i) continue;
				s = " ";
				break
			}
			default:
				s = String.fromCharCode(o)
		}
		i = o === -2, r.push(s)
	}
	return r.join("")
}
const Ug = {
		[42]: Oe,
		[43]: Oe,
		[45]: Oe,
		[48]: Oe,
		[49]: Oe,
		[50]: Oe,
		[51]: Oe,
		[52]: Oe,
		[53]: Oe,
		[54]: Oe,
		[55]: Oe,
		[56]: Oe,
		[57]: Oe,
		[62]: Lu
	},
	Vg = {
		[91]: qm
	},
	$g = {
		[-2]: _i,
		[-1]: _i,
		[32]: _i
	},
	Hg = {
		[35]: Km,
		[42]: ar,
		[45]: [Sa, ar],
		[60]: tg,
		[61]: Sa,
		[95]: ar,
		[96]: ka,
		[126]: ka
	},
	qg = {
		[38]: Fu,
		[92]: Du
	},
	Wg = {
		[-5]: wi,
		[-4]: wi,
		[-3]: wi,
		[33]: yg,
		[38]: Fu,
		[42]: to,
		[60]: [km, sg],
		[91]: vg,
		[92]: [Xm, Du],
		[93]: Po,
		[95]: to,
		[96]: Dm
	},
	Qg = {
		null: [to, Lg]
	},
	Yg = {
		null: [42, 95]
	},
	Xg = {
		null: []
	};
var Gg = Object.freeze(Object.defineProperty({
	__proto__: null,
	document: Ug,
	contentInitial: Vg,
	flowInitial: $g,
	flow: Hg,
	string: qg,
	text: Wg,
	insideSpan: Qg,
	attentionMarkers: Yg,
	disable: Xg
}, Symbol.toStringTag, {
	value: "Module"
}));

function Kg(e = {}) {
	const t = Pu([Gg].concat(e.extensions || [])),
		n = {
			defined: [],
			lazy: {},
			constructs: t,
			content: r(gm),
			document: r(bm),
			flow: r(Rg),
			string: r(Dg),
			text: r(Fg)
		};
	return n;

	function r(i) {
		return o;

		function o(s) {
			return Ng(n, i, s)
		}
	}
}
const Ea = /[\0\t\n\r]/g;

function Zg() {
	let e = 1,
		t = "",
		n = !0,
		r;
	return i;

	function i(o, s, a) {
		const l = [];
		let c, u, f, p, h;
		for (o = t + o.toString(s), f = 0, t = "", n && (o.charCodeAt(0) === 65279 && f++, n = void 0); f < o.length;) {
			if (Ea.lastIndex = f, c = Ea.exec(o), p = c && c.index !== void 0 ? c.index : o.length, h = o.charCodeAt(p), !c) {
				t = o.slice(f);
				break
			}
			if (h === 10 && f === p && r) l.push(-3), r = void 0;
			else switch (r && (l.push(-5), r = void 0), f < p && (l.push(o.slice(f, p)), e += p - f), h) {
				case 0: {
					l.push(65533), e++;
					break
				}
				case 9: {
					for (u = Math.ceil(e / 4) * 4, l.push(-2); e++ < u;) l.push(-1);
					break
				}
				case 10: {
					l.push(-4), e = 1;
					break
				}
				default:
					r = !0, e = 1
			}
			f = p + 1
		}
		return a && (r && l.push(-5), t && l.push(t), l.push(null)), l
	}
}

function Jg(e) {
	for (; !zu(e););
	return e
}

function $u(e, t) {
	const n = Number.parseInt(e, t);
	return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) === 65535 || (n & 65535) === 65534 || n > 1114111 ? "\uFFFD" : String.fromCharCode(n)
}
const ey = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;

function Hu(e) {
	return e.replace(ey, ty)
}

function ty(e, t, n) {
	if (t) return t;
	if (n.charCodeAt(0) === 35) {
		const i = n.charCodeAt(1),
			o = i === 120 || i === 88;
		return $u(n.slice(o ? 2 : 1), o ? 16 : 10)
	}
	return Ro(n) || e
}

function lr(e) {
	return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Ta(e.position) : "start" in e || "end" in e ? Ta(e) : "line" in e || "column" in e ? no(e) : ""
}

function no(e) {
	return Aa(e && e.line) + ":" + Aa(e && e.column)
}

function Ta(e) {
	return no(e && e.start) + "-" + no(e && e.end)
}

function Aa(e) {
	return e && typeof e == "number" ? e : 1
}
const ro = {}.hasOwnProperty,
	ny = function(e, t, n) {
		return typeof t != "string" && (n = t, t = void 0), ry(n)(Jg(Kg(n).document().write(Zg()(e, t, !0))))
	};

function ry(e = {}) {
	const t = qu({
			transforms: [],
			canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
			enter: {
				autolink: l(Wo),
				autolinkProtocol: L,
				autolinkEmail: L,
				atxHeading: l($o),
				blockQuote: l(Pc),
				characterEscape: L,
				characterReference: L,
				codeFenced: l(Vo),
				codeFencedFenceInfo: c,
				codeFencedFenceMeta: c,
				codeIndented: l(Vo, c),
				codeText: l(Lc, c),
				codeTextData: L,
				data: L,
				codeFlowValue: L,
				definition: l(Dc),
				definitionDestinationString: c,
				definitionLabelString: c,
				definitionTitleString: c,
				emphasis: l(Fc),
				hardBreakEscape: l(Ho),
				hardBreakTrailing: l(Ho),
				htmlFlow: l(qo, c),
				htmlFlowData: L,
				htmlText: l(qo, c),
				htmlTextData: L,
				image: l(zc),
				label: c,
				link: l(Wo),
				listItem: l(Nc),
				listItemValue: m,
				listOrdered: l(Qo, d),
				listUnordered: l(Qo),
				paragraph: l(jc),
				reference: ne,
				referenceString: c,
				resourceDestinationString: c,
				resourceTitleString: c,
				setextHeading: l($o),
				strong: l(Bc),
				thematicBreak: l(Vc)
			},
			exit: {
				atxHeading: f(),
				atxHeadingSequence: R,
				autolink: f(),
				autolinkEmail: ti,
				autolinkProtocol: Ke,
				blockQuote: f(),
				characterEscapeValue: B,
				characterReferenceMarkerHexadecimal: Te,
				characterReferenceMarkerNumeric: Te,
				characterReferenceValue: Ae,
				codeFenced: f(w),
				codeFencedFence: k,
				codeFencedFenceInfo: g,
				codeFencedFenceMeta: y,
				codeFlowValue: B,
				codeIndented: f(C),
				codeText: f($),
				codeTextData: B,
				data: B,
				definition: f(),
				definitionDestinationString: A,
				definitionLabelString: E,
				definitionTitleString: b,
				emphasis: f(),
				hardBreakEscape: f(N),
				hardBreakTrailing: f(N),
				htmlFlow: f(x),
				htmlFlowData: B,
				htmlText: f(X),
				htmlTextData: B,
				image: f(K),
				label: v,
				labelText: _,
				lineEnding: D,
				link: f(Z),
				listItem: f(),
				listOrdered: f(),
				listUnordered: f(),
				paragraph: f(),
				referenceString: fe,
				resourceDestinationString: ze,
				resourceTitleString: pt,
				resource: ge,
				setextHeading: f(O),
				setextHeadingLineSequence: z,
				setextHeadingText: F,
				strong: f(),
				thematicBreak: f()
			}
		}, e.mdastExtensions || []),
		n = {};
	return r;

	function r(T) {
		let P = {
			type: "root",
			children: []
		};
		const q = [P],
			ee = [],
			Ne = [],
			en = {
				stack: q,
				tokenStack: ee,
				config: t,
				enter: u,
				exit: p,
				buffer: c,
				resume: h,
				setData: o,
				getData: s
			};
		let re = -1;
		for (; ++re < T.length;)
			if (T[re][1].type === "listOrdered" || T[re][1].type === "listUnordered")
				if (T[re][0] === "enter") Ne.push(re);
				else {
					const be = Ne.pop();
					re = i(T, be, re)
				} for (re = -1; ++re < T.length;) {
			const be = t[T[re][0]];
			ro.call(be, T[re][1].type) && be[T[re][1].type].call(Object.assign({
				sliceSerialize: T[re][2].sliceSerialize
			}, en), T[re][1])
		}
		if (ee.length > 0) {
			const be = ee[ee.length - 1];
			(be[1] || Oa).call(en, void 0, be[0])
		}
		for (P.position = {
				start: a(T.length > 0 ? T[0][1].start : {
					line: 1,
					column: 1,
					offset: 0
				}),
				end: a(T.length > 0 ? T[T.length - 2][1].end : {
					line: 1,
					column: 1,
					offset: 0
				})
			}, re = -1; ++re < t.transforms.length;) P = t.transforms[re](P) || P;
		return P
	}

	function i(T, P, q) {
		let ee = P - 1,
			Ne = -1,
			en = !1,
			re, be, Pt, tn;
		for (; ++ee <= q;) {
			const ae = T[ee];
			if (ae[1].type === "listUnordered" || ae[1].type === "listOrdered" || ae[1].type === "blockQuote" ? (ae[0] === "enter" ? Ne++ : Ne--, tn = void 0) : ae[1].type === "lineEndingBlank" ? ae[0] === "enter" && (re && !tn && !Ne && !Pt && (Pt = ee), tn = void 0) : ae[1].type === "linePrefix" || ae[1].type === "listItemValue" || ae[1].type === "listItemMarker" || ae[1].type === "listItemPrefix" || ae[1].type === "listItemPrefixWhitespace" || (tn = void 0), !Ne && ae[0] === "enter" && ae[1].type === "listItemPrefix" || Ne === -1 && ae[0] === "exit" && (ae[1].type === "listUnordered" || ae[1].type === "listOrdered")) {
				if (re) {
					let ni = ee;
					for (be = void 0; ni--;) {
						const lt = T[ni];
						if (lt[1].type === "lineEnding" || lt[1].type === "lineEndingBlank") {
							if (lt[0] === "exit") continue;
							be && (T[be][1].type = "lineEndingBlank", en = !0), lt[1].type = "lineEnding", be = ni
						} else if (!(lt[1].type === "linePrefix" || lt[1].type === "blockQuotePrefix" || lt[1].type === "blockQuotePrefixWhitespace" || lt[1].type === "blockQuoteMarker" || lt[1].type === "listItemIndent")) break
					}
					Pt && (!be || Pt < be) && (re._spread = !0), re.end = Object.assign({}, be ? T[be][1].start : ae[1].end), T.splice(be || ee, 0, ["exit", re, ae[2]]), ee++, q++
				}
				ae[1].type === "listItemPrefix" && (re = {
					type: "listItem",
					_spread: !1,
					start: Object.assign({}, ae[1].start)
				}, T.splice(ee, 0, ["enter", re, ae[2]]), ee++, q++, Pt = void 0, tn = !0)
			}
		}
		return T[P][1]._spread = en, q
	}

	function o(T, P) {
		n[T] = P
	}

	function s(T) {
		return n[T]
	}

	function a(T) {
		return {
			line: T.line,
			column: T.column,
			offset: T.offset
		}
	}

	function l(T, P) {
		return q;

		function q(ee) {
			u.call(this, T(ee), ee), P && P.call(this, ee)
		}
	}

	function c() {
		this.stack.push({
			type: "fragment",
			children: []
		})
	}

	function u(T, P, q) {
		return this.stack[this.stack.length - 1].children.push(T), this.stack.push(T), this.tokenStack.push([P, q]), T.position = {
			start: a(P.start)
		}, T
	}

	function f(T) {
		return P;

		function P(q) {
			T && T.call(this, q), p.call(this, q)
		}
	}

	function p(T, P) {
		const q = this.stack.pop(),
			ee = this.tokenStack.pop();
		if (ee) ee[0].type !== T.type && (P ? P.call(this, T, ee[0]) : (ee[1] || Oa).call(this, T, ee[0]));
		else throw new Error("Cannot close `" + T.type + "` (" + lr({
			start: T.start,
			end: T.end
		}) + "): it\u2019s not open");
		return q.position.end = a(T.end), q
	}

	function h() {
		return cm(this.stack.pop())
	}

	function d() {
		o("expectingFirstListItemValue", !0)
	}

	function m(T) {
		if (s("expectingFirstListItemValue")) {
			const P = this.stack[this.stack.length - 2];
			P.start = Number.parseInt(this.sliceSerialize(T), 10), o("expectingFirstListItemValue")
		}
	}

	function g() {
		const T = this.resume(),
			P = this.stack[this.stack.length - 1];
		P.lang = T
	}

	function y() {
		const T = this.resume(),
			P = this.stack[this.stack.length - 1];
		P.meta = T
	}

	function k() {
		s("flowCodeInside") || (this.buffer(), o("flowCodeInside", !0))
	}

	function w() {
		const T = this.resume(),
			P = this.stack[this.stack.length - 1];
		P.value = T.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), o("flowCodeInside")
	}

	function C() {
		const T = this.resume(),
			P = this.stack[this.stack.length - 1];
		P.value = T.replace(/(\r?\n|\r)$/g, "")
	}

	function E(T) {
		const P = this.resume(),
			q = this.stack[this.stack.length - 1];
		q.label = P, q.identifier = Ge(this.sliceSerialize(T)).toLowerCase()
	}

	function b() {
		const T = this.resume(),
			P = this.stack[this.stack.length - 1];
		P.title = T
	}

	function A() {
		const T = this.resume(),
			P = this.stack[this.stack.length - 1];
		P.url = T
	}

	function R(T) {
		const P = this.stack[this.stack.length - 1];
		if (!P.depth) {
			const q = this.sliceSerialize(T).length;
			P.depth = q
		}
	}

	function F() {
		o("setextHeadingSlurpLineEnding", !0)
	}

	function z(T) {
		const P = this.stack[this.stack.length - 1];
		P.depth = this.sliceSerialize(T).charCodeAt(0) === 61 ? 1 : 2
	}

	function O() {
		o("setextHeadingSlurpLineEnding")
	}

	function L(T) {
		const P = this.stack[this.stack.length - 1];
		let q = P.children[P.children.length - 1];
		(!q || q.type !== "text") && (q = Uc(), q.position = {
			start: a(T.start)
		}, P.children.push(q)), this.stack.push(q)
	}

	function B(T) {
		const P = this.stack.pop();
		P.value += this.sliceSerialize(T), P.position.end = a(T.end)
	}

	function D(T) {
		const P = this.stack[this.stack.length - 1];
		if (s("atHardBreak")) {
			const q = P.children[P.children.length - 1];
			q.position.end = a(T.end), o("atHardBreak");
			return
		}!s("setextHeadingSlurpLineEnding") && t.canContainEols.includes(P.type) && (L.call(this, T), B.call(this, T))
	}

	function N() {
		o("atHardBreak", !0)
	}

	function x() {
		const T = this.resume(),
			P = this.stack[this.stack.length - 1];
		P.value = T
	}

	function X() {
		const T = this.resume(),
			P = this.stack[this.stack.length - 1];
		P.value = T
	}

	function $() {
		const T = this.resume(),
			P = this.stack[this.stack.length - 1];
		P.value = T
	}

	function Z() {
		const T = this.stack[this.stack.length - 1];
		s("inReference") ? (T.type += "Reference", T.referenceType = s("referenceType") || "shortcut", delete T.url, delete T.title) : (delete T.identifier, delete T.label), o("referenceType")
	}

	function K() {
		const T = this.stack[this.stack.length - 1];
		s("inReference") ? (T.type += "Reference", T.referenceType = s("referenceType") || "shortcut", delete T.url, delete T.title) : (delete T.identifier, delete T.label), o("referenceType")
	}

	function _(T) {
		const P = this.stack[this.stack.length - 2],
			q = this.sliceSerialize(T);
		P.label = Hu(q), P.identifier = Ge(q).toLowerCase()
	}

	function v() {
		const T = this.stack[this.stack.length - 1],
			P = this.resume(),
			q = this.stack[this.stack.length - 1];
		o("inReference", !0), q.type === "link" ? q.children = T.children : q.alt = P
	}

	function ze() {
		const T = this.resume(),
			P = this.stack[this.stack.length - 1];
		P.url = T
	}

	function pt() {
		const T = this.resume(),
			P = this.stack[this.stack.length - 1];
		P.title = T
	}

	function ge() {
		o("inReference")
	}

	function ne() {
		o("referenceType", "collapsed")
	}

	function fe(T) {
		const P = this.resume(),
			q = this.stack[this.stack.length - 1];
		q.label = P, q.identifier = Ge(this.sliceSerialize(T)).toLowerCase(), o("referenceType", "full")
	}

	function Te(T) {
		o("characterReferenceType", T.type)
	}

	function Ae(T) {
		const P = this.sliceSerialize(T),
			q = s("characterReferenceType");
		let ee;
		q ? (ee = $u(P, q === "characterReferenceMarkerNumeric" ? 10 : 16), o("characterReferenceType")) : ee = Ro(P);
		const Ne = this.stack.pop();
		Ne.value += ee, Ne.position.end = a(T.end)
	}

	function Ke(T) {
		B.call(this, T);
		const P = this.stack[this.stack.length - 1];
		P.url = this.sliceSerialize(T)
	}

	function ti(T) {
		B.call(this, T);
		const P = this.stack[this.stack.length - 1];
		P.url = "mailto:" + this.sliceSerialize(T)
	}

	function Pc() {
		return {
			type: "blockquote",
			children: []
		}
	}

	function Vo() {
		return {
			type: "code",
			lang: null,
			meta: null,
			value: ""
		}
	}

	function Lc() {
		return {
			type: "inlineCode",
			value: ""
		}
	}

	function Dc() {
		return {
			type: "definition",
			identifier: "",
			label: null,
			title: null,
			url: ""
		}
	}

	function Fc() {
		return {
			type: "emphasis",
			children: []
		}
	}

	function $o() {
		return {
			type: "heading",
			depth: void 0,
			children: []
		}
	}

	function Ho() {
		return {
			type: "break"
		}
	}

	function qo() {
		return {
			type: "html",
			value: ""
		}
	}

	function zc() {
		return {
			type: "image",
			title: null,
			url: "",
			alt: null
		}
	}

	function Wo() {
		return {
			type: "link",
			title: null,
			url: "",
			children: []
		}
	}

	function Qo(T) {
		return {
			type: "list",
			ordered: T.type === "listOrdered",
			start: null,
			spread: T._spread,
			children: []
		}
	}

	function Nc(T) {
		return {
			type: "listItem",
			spread: T._spread,
			checked: null,
			children: []
		}
	}

	function jc() {
		return {
			type: "paragraph",
			children: []
		}
	}

	function Bc() {
		return {
			type: "strong",
			children: []
		}
	}

	function Uc() {
		return {
			type: "text",
			value: ""
		}
	}

	function Vc() {
		return {
			type: "thematicBreak"
		}
	}
}

function qu(e, t) {
	let n = -1;
	for (; ++n < t.length;) {
		const r = t[n];
		Array.isArray(r) ? qu(e, r) : iy(e, r)
	}
	return e
}

function iy(e, t) {
	let n;
	for (n in t)
		if (ro.call(t, n)) {
			const r = n === "canContainEols" || n === "transforms",
				o = (ro.call(e, n) ? e[n] : void 0) || (e[n] = r ? [] : {}),
				s = t[n];
			s && (r ? e[n] = [...o, ...s] : Object.assign(o, s))
		}
}

function Oa(e, t) {
	throw e ? new Error("Cannot close `" + e.type + "` (" + lr({
		start: e.start,
		end: e.end
	}) + "): a different token (`" + t.type + "`, " + lr({
		start: t.start,
		end: t.end
	}) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + lr({
		start: t.start,
		end: t.end
	}) + ") is still open")
}

function oy(e) {
	Object.assign(this, {
		Parser: n => {
			const r = this.data("settings");
			return ny(n, Object.assign({}, r, e, {
				extensions: this.data("micromarkExtensions") || [],
				mdastExtensions: this.data("fromMarkdownExtensions") || []
			}))
		}
	})
}
var me = function(e, t, n) {
	var r = {
		type: String(e)
	};
	return n == null && (typeof t == "string" || Array.isArray(t)) ? n = t : Object.assign(r, t), Array.isArray(n) ? r.children = n : n != null && (r.value = String(n)), r
};
const ur = {}.hasOwnProperty;

function sy(e, t) {
	const n = t.data || {};
	return "value" in t && !(ur.call(n, "hName") || ur.call(n, "hProperties") || ur.call(n, "hChildren")) ? e.augment(t, me("text", t.value)) : e(t, "div", xe(e, t))
}

function Wu(e, t, n) {
	const r = t && t.type;
	let i;
	if (!r) throw new Error("Expected node, got `" + t + "`");
	return ur.call(e.handlers, r) ? i = e.handlers[r] : e.passThrough && e.passThrough.includes(r) ? i = ay : i = e.unknownHandler, (typeof i == "function" ? i : sy)(e, t, n)
}

function ay(e, t) {
	return "children" in t ? {
		...t,
		children: xe(e, t)
	} : t
}

function xe(e, t) {
	const n = [];
	if ("children" in t) {
		const r = t.children;
		let i = -1;
		for (; ++i < r.length;) {
			const o = Wu(e, r[i], t);
			if (o) {
				if (i && r[i - 1].type === "break" && (!Array.isArray(o) && o.type === "text" && (o.value = o.value.replace(/^\s+/, "")), !Array.isArray(o) && o.type === "element")) {
					const s = o.children[0];
					s && s.type === "text" && (s.value = s.value.replace(/^\s+/, ""))
				}
				Array.isArray(o) ? n.push(...o) : n.push(o)
			}
		}
	}
	return n
}
const Qu = function(e) {
	if (e == null) return fy;
	if (typeof e == "string") return cy(e);
	if (typeof e == "object") return Array.isArray(e) ? ly(e) : uy(e);
	if (typeof e == "function") return Br(e);
	throw new Error("Expected function, string, or object as test")
};

function ly(e) {
	const t = [];
	let n = -1;
	for (; ++n < e.length;) t[n] = Qu(e[n]);
	return Br(r);

	function r(...i) {
		let o = -1;
		for (; ++o < t.length;)
			if (t[o].call(this, ...i)) return !0;
		return !1
	}
}

function uy(e) {
	return Br(t);

	function t(n) {
		let r;
		for (r in e)
			if (n[r] !== e[r]) return !1;
		return !0
	}
}

function cy(e) {
	return Br(t);

	function t(n) {
		return n && n.type === e
	}
}

function Br(e) {
	return t;

	function t(...n) {
		return Boolean(e.call(this, ...n))
	}
}

function fy() {
	return !0
}
const dy = !0,
	hy = "skip",
	Ma = !1,
	py = function(e, t, n, r) {
		typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null);
		const i = Qu(t),
			o = r ? -1 : 1;
		s(e, null, [])();

		function s(a, l, c) {
			const u = typeof a == "object" && a !== null ? a : {};
			let f;
			return typeof u.type == "string" && (f = typeof u.tagName == "string" ? u.tagName : typeof u.name == "string" ? u.name : void 0, Object.defineProperty(p, "name", {
				value: "node (" + (u.type + (f ? "<" + f + ">" : "")) + ")"
			})), p;

			function p() {
				let h = [],
					d, m, g;
				if ((!t || i(a, l, c[c.length - 1] || null)) && (h = my(n(a, c)), h[0] === Ma)) return h;
				if (a.children && h[0] !== hy)
					for (m = (r ? a.children.length : -1) + o, g = c.concat(a); m > -1 && m < a.children.length;) {
						if (d = s(a.children[m], m, g)(), d[0] === Ma) return d;
						m = typeof d[1] == "number" ? d[1] : m + o
					}
				return h
			}
		}
	};

function my(e) {
	return Array.isArray(e) ? e : typeof e == "number" ? [dy, e] : [e]
}
const Yu = function(e, t, n, r) {
		typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null), py(e, t, i, r);

		function i(o, s) {
			const a = s[s.length - 1];
			return n(o, a ? a.children.indexOf(o) : null, a)
		}
	},
	Xu = Ku("start"),
	Gu = Ku("end");

function Ku(e) {
	return t;

	function t(n) {
		const r = n && n.position && n.position[e] || {};
		return {
			line: r.line || null,
			column: r.column || null,
			offset: r.offset > -1 ? r.offset : null
		}
	}
}

function gy(e) {
	return !e || !e.position || !e.position.start || !e.position.start.line || !e.position.start.column || !e.position.end || !e.position.end.line || !e.position.end.column
}
const Ia = {}.hasOwnProperty;

function yy(e) {
	const t = Object.create(null);
	if (!e || !e.type) throw new Error("mdast-util-definitions expected node");
	return Yu(e, "definition", r => {
		const i = Ra(r.identifier);
		i && !Ia.call(t, i) && (t[i] = r)
	}), n;

	function n(r) {
		const i = Ra(r);
		return i && Ia.call(t, i) ? t[i] : null
	}
}

function Ra(e) {
	return String(e || "").toUpperCase()
}
const by = {
	'"': "quot",
	"&": "amp",
	"<": "lt",
	">": "gt"
};

function vy(e) {
	return e.replace(/["&<>]/g, t);

	function t(n) {
		return "&" + by[n] + ";"
	}
}

function Zu(e, t) {
	const n = vy(_y(e || ""));
	if (!t) return n;
	const r = n.indexOf(":"),
		i = n.indexOf("?"),
		o = n.indexOf("#"),
		s = n.indexOf("/");
	return r < 0 || s > -1 && r > s || i > -1 && r > i || o > -1 && r > o || t.test(n.slice(0, r)) ? n : ""
}

function _y(e) {
	const t = [];
	let n = -1,
		r = 0,
		i = 0;
	for (; ++n < e.length;) {
		const o = e.charCodeAt(n);
		let s = "";
		if (o === 37 && Se(e.charCodeAt(n + 1)) && Se(e.charCodeAt(n + 2))) i = 2;
		else if (o < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) || (s = String.fromCharCode(o));
		else if (o > 55295 && o < 57344) {
			const a = e.charCodeAt(n + 1);
			o < 56320 && a > 56319 && a < 57344 ? (s = String.fromCharCode(o, a), i = 1) : s = "\uFFFD"
		} else s = String.fromCharCode(o);
		s && (t.push(e.slice(r, n), encodeURIComponent(s)), r = n + i + 1, s = ""), i && (n += i, i = 0)
	}
	return t.join("") + e.slice(r)
}

function ft(e, t) {
	const n = [];
	let r = -1;
	for (t && n.push(me("text", `
`)); ++r < e.length;) r && n.push(me("text", `
`)), n.push(e[r]);
	return t && e.length > 0 && n.push(me("text", `
`)), n
}

function wy(e) {
	let t = -1;
	const n = [];
	for (; ++t < e.footnoteOrder.length;) {
		const r = e.footnoteById[e.footnoteOrder[t].toUpperCase()];
		if (!r) continue;
		const i = xe(e, r),
			o = String(r.identifier),
			s = Zu(o.toLowerCase());
		let a = 0;
		const l = [];
		for (; ++a <= e.footnoteCounts[o];) {
			const f = {
				type: "element",
				tagName: "a",
				properties: {
					href: "#" + e.clobberPrefix + "fnref-" + s + (a > 1 ? "-" + a : ""),
					dataFootnoteBackref: !0,
					className: ["data-footnote-backref"],
					ariaLabel: e.footnoteBackLabel
				},
				children: [{
					type: "text",
					value: "\u21A9"
				}]
			};
			a > 1 && f.children.push({
				type: "element",
				tagName: "sup",
				children: [{
					type: "text",
					value: String(a)
				}]
			}), l.length > 0 && l.push({
				type: "text",
				value: " "
			}), l.push(f)
		}
		const c = i[i.length - 1];
		if (c && c.type === "element" && c.tagName === "p") {
			const f = c.children[c.children.length - 1];
			f && f.type === "text" ? f.value += " " : c.children.push({
				type: "text",
				value: " "
			}), c.children.push(...l)
		} else i.push(...l);
		const u = {
			type: "element",
			tagName: "li",
			properties: {
				id: e.clobberPrefix + "fn-" + s
			},
			children: ft(i, !0)
		};
		r.position && (u.position = r.position), n.push(u)
	}
	return n.length === 0 ? null : {
		type: "element",
		tagName: "section",
		properties: {
			dataFootnotes: !0,
			className: ["footnotes"]
		},
		children: [{
			type: "element",
			tagName: "h2",
			properties: {
				id: "footnote-label",
				className: ["sr-only"]
			},
			children: [me("text", e.footnoteLabel)]
		}, {
			type: "text",
			value: `
`
		}, {
			type: "element",
			tagName: "ol",
			properties: {},
			children: ft(n, !0)
		}, {
			type: "text",
			value: `
`
		}]
	}
}

function xy(e, t) {
	return e(t, "blockquote", ft(xe(e, t), !0))
}

function ky(e, t) {
	return [e(t, "br"), me("text", `
`)]
}

function Cy(e, t) {
	const n = t.value ? t.value + `
` : "",
		r = t.lang && t.lang.match(/^[^ \t]+(?=[ \t]|$)/),
		i = {};
	r && (i.className = ["language-" + r]);
	const o = e(t, "code", i, [me("text", n)]);
	return t.meta && (o.data = {
		meta: t.meta
	}), e(t.position, "pre", [o])
}

function Sy(e, t) {
	return e(t, "del", xe(e, t))
}

function Ey(e, t) {
	return e(t, "em", xe(e, t))
}

function Ju(e, t) {
	const n = String(t.identifier),
		r = Zu(n.toLowerCase()),
		i = e.footnoteOrder.indexOf(n);
	let o;
	i === -1 ? (e.footnoteOrder.push(n), e.footnoteCounts[n] = 1, o = e.footnoteOrder.length) : (e.footnoteCounts[n]++, o = i + 1);
	const s = e.footnoteCounts[n];
	return e(t, "sup", [e(t.position, "a", {
		href: "#" + e.clobberPrefix + "fn-" + r,
		id: e.clobberPrefix + "fnref-" + r + (s > 1 ? "-" + s : ""),
		dataFootnoteRef: !0,
		ariaDescribedBy: "footnote-label"
	}, [me("text", String(o))])])
}

function Ty(e, t) {
	const n = e.footnoteById;
	let r = 1;
	for (; r in n;) r++;
	const i = String(r);
	return n[i] = {
		type: "footnoteDefinition",
		identifier: i,
		children: [{
			type: "paragraph",
			children: t.children
		}],
		position: t.position
	}, Ju(e, {
		type: "footnoteReference",
		identifier: i,
		position: t.position
	})
}

function Ay(e, t) {
	return e(t, "h" + t.depth, xe(e, t))
}

function Oy(e, t) {
	return e.dangerous ? e.augment(t, me("raw", t.value)) : null
}
var Pa = {};

function My(e) {
	var t, n, r = Pa[e];
	if (r) return r;
	for (r = Pa[e] = [], t = 0; t < 128; t++) n = String.fromCharCode(t), /^[0-9a-z]$/i.test(n) ? r.push(n) : r.push("%" + ("0" + t.toString(16).toUpperCase()).slice(-2));
	for (t = 0; t < e.length; t++) r[e.charCodeAt(t)] = e[t];
	return r
}

function Ur(e, t, n) {
	var r, i, o, s, a, l = "";
	for (typeof t != "string" && (n = t, t = Ur.defaultChars), typeof n == "undefined" && (n = !0), a = My(t), r = 0, i = e.length; r < i; r++) {
		if (o = e.charCodeAt(r), n && o === 37 && r + 2 < i && /^[0-9a-f]{2}$/i.test(e.slice(r + 1, r + 3))) {
			l += e.slice(r, r + 3), r += 2;
			continue
		}
		if (o < 128) {
			l += a[o];
			continue
		}
		if (o >= 55296 && o <= 57343) {
			if (o >= 55296 && o <= 56319 && r + 1 < i && (s = e.charCodeAt(r + 1), s >= 56320 && s <= 57343)) {
				l += encodeURIComponent(e[r] + e[r + 1]), r++;
				continue
			}
			l += "%EF%BF%BD";
			continue
		}
		l += encodeURIComponent(e[r])
	}
	return l
}
Ur.defaultChars = ";/?:@&=+$,-_.!~*'()#";
Ur.componentChars = "-_.!~*'()";
var Vr = Ur;

function ec(e, t) {
	const n = t.referenceType;
	let r = "]";
	if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference") return me("text", "![" + t.alt + r);
	const i = xe(e, t),
		o = i[0];
	o && o.type === "text" ? o.value = "[" + o.value : i.unshift(me("text", "["));
	const s = i[i.length - 1];
	return s && s.type === "text" ? s.value += r : i.push(me("text", r)), i
}

function Iy(e, t) {
	const n = e.definition(t.identifier);
	if (!n) return ec(e, t);
	const r = {
		src: Vr(n.url || ""),
		alt: t.alt
	};
	return n.title !== null && n.title !== void 0 && (r.title = n.title), e(t, "img", r)
}

function Ry(e, t) {
	const n = {
		src: Vr(t.url),
		alt: t.alt
	};
	return t.title !== null && t.title !== void 0 && (n.title = t.title), e(t, "img", n)
}

function Py(e, t) {
	return e(t, "code", [me("text", t.value.replace(/\r?\n|\r/g, " "))])
}

function Ly(e, t) {
	const n = e.definition(t.identifier);
	if (!n) return ec(e, t);
	const r = {
		href: Vr(n.url || "")
	};
	return n.title !== null && n.title !== void 0 && (r.title = n.title), e(t, "a", r, xe(e, t))
}

function Dy(e, t) {
	const n = {
		href: Vr(t.url)
	};
	return t.title !== null && t.title !== void 0 && (n.title = t.title), e(t, "a", n, xe(e, t))
}

function Fy(e, t, n) {
	const r = xe(e, t),
		i = n ? zy(n) : tc(t),
		o = {},
		s = [];
	if (typeof t.checked == "boolean") {
		let c;
		r[0] && r[0].type === "element" && r[0].tagName === "p" ? c = r[0] : (c = e(null, "p", []), r.unshift(c)), c.children.length > 0 && c.children.unshift(me("text", " ")), c.children.unshift(e(null, "input", {
			type: "checkbox",
			checked: t.checked,
			disabled: !0
		})), o.className = ["task-list-item"]
	}
	let a = -1;
	for (; ++a < r.length;) {
		const c = r[a];
		(i || a !== 0 || c.type !== "element" || c.tagName !== "p") && s.push(me("text", `
`)), c.type === "element" && c.tagName === "p" && !i ? s.push(...c.children) : s.push(c)
	}
	const l = r[r.length - 1];
	return l && (i || !("tagName" in l) || l.tagName !== "p") && s.push(me("text", `
`)), e(t, "li", o, s)
}

function zy(e) {
	let t = e.spread;
	const n = e.children;
	let r = -1;
	for (; !t && ++r < n.length;) t = tc(n[r]);
	return Boolean(t)
}

function tc(e) {
	const t = e.spread;
	return t == null ? e.children.length > 1 : t
}

function Ny(e, t) {
	const n = {},
		r = t.ordered ? "ol" : "ul",
		i = xe(e, t);
	let o = -1;
	for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++o < i.length;) {
		const s = i[o];
		if (s.type === "element" && s.tagName === "li" && s.properties && Array.isArray(s.properties.className) && s.properties.className.includes("task-list-item")) {
			n.className = ["contains-task-list"];
			break
		}
	}
	return e(t, r, n, ft(i, !0))
}

function jy(e, t) {
	return e(t, "p", xe(e, t))
}

function By(e, t) {
	return e.augment(t, me("root", ft(xe(e, t))))
}

function Uy(e, t) {
	return e(t, "strong", xe(e, t))
}

function Vy(e, t) {
	const n = t.children;
	let r = -1;
	const i = t.align || [],
		o = [];
	for (; ++r < n.length;) {
		const s = n[r].children,
			a = r === 0 ? "th" : "td",
			l = [];
		let c = -1;
		const u = t.align ? i.length : s.length;
		for (; ++c < u;) {
			const f = s[c];
			l.push(e(f, a, {
				align: i[c]
			}, f ? xe(e, f) : []))
		}
		o[r] = e(n[r], "tr", ft(l, !0))
	}
	return e(t, "table", ft([e(o[0].position, "thead", ft([o[0]], !0))].concat(o[1] ? e({
		start: Xu(o[1]),
		end: Gu(o[o.length - 1])
	}, "tbody", ft(o.slice(1), !0)) : []), !0))
}
const La = 9,
	Da = 32;

function $y(e) {
	const t = String(e),
		n = /\r?\n|\r/g;
	let r = n.exec(t),
		i = 0;
	const o = [];
	for (; r;) o.push(Fa(t.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = n.exec(t);
	return o.push(Fa(t.slice(i), i > 0, !1)), o.join("")
}

function Fa(e, t, n) {
	let r = 0,
		i = e.length;
	if (t) {
		let o = e.codePointAt(r);
		for (; o === La || o === Da;) r++, o = e.codePointAt(r)
	}
	if (n) {
		let o = e.codePointAt(i - 1);
		for (; o === La || o === Da;) i--, o = e.codePointAt(i - 1)
	}
	return i > r ? e.slice(r, i) : ""
}

function Hy(e, t) {
	return e.augment(t, me("text", $y(String(t.value))))
}

function qy(e, t) {
	return e(t, "hr")
}
const Wy = {
	blockquote: xy,
	break: ky,
	code: Cy,
	delete: Sy,
	emphasis: Ey,
	footnoteReference: Ju,
	footnote: Ty,
	heading: Ay,
	html: Oy,
	imageReference: Iy,
	image: Ry,
	inlineCode: Py,
	linkReference: Ly,
	link: Dy,
	listItem: Fy,
	list: Ny,
	paragraph: jy,
	root: By,
	strong: Uy,
	table: Vy,
	text: Hy,
	thematicBreak: qy,
	toml: Kn,
	yaml: Kn,
	definition: Kn,
	footnoteDefinition: Kn
};

function Kn() {
	return null
}
const Qy = {}.hasOwnProperty;

function Yy(e, t) {
	const n = t || {},
		r = n.allowDangerousHtml || !1,
		i = {};
	return s.dangerous = r, s.clobberPrefix = n.clobberPrefix === void 0 || n.clobberPrefix === null ? "user-content-" : n.clobberPrefix, s.footnoteLabel = n.footnoteLabel || "Footnotes", s.footnoteBackLabel = n.footnoteBackLabel || "Back to content", s.definition = yy(e), s.footnoteById = i, s.footnoteOrder = [], s.footnoteCounts = {}, s.augment = o, s.handlers = {
		...Wy,
		...n.handlers
	}, s.unknownHandler = n.unknownHandler, s.passThrough = n.passThrough, Yu(e, "footnoteDefinition", a => {
		const l = String(a.identifier).toUpperCase();
		Qy.call(i, l) || (i[l] = a)
	}), s;

	function o(a, l) {
		if (a && "data" in a && a.data) {
			const c = a.data;
			c.hName && (l.type !== "element" && (l = {
				type: "element",
				tagName: "",
				properties: {},
				children: []
			}), l.tagName = c.hName), l.type === "element" && c.hProperties && (l.properties = {
				...l.properties,
				...c.hProperties
			}), "children" in l && l.children && c.hChildren && (l.children = c.hChildren)
		}
		if (a) {
			const c = "type" in a ? a : {
				position: a
			};
			gy(c) || (l.position = {
				start: Xu(c),
				end: Gu(c)
			})
		}
		return l
	}

	function s(a, l, c, u) {
		return Array.isArray(c) && (u = c, c = {}), o(a, {
			type: "element",
			tagName: l,
			properties: c || {},
			children: u || []
		})
	}
}

function nc(e, t) {
	const n = Yy(e, t),
		r = Wu(n, e, null),
		i = wy(n);
	return i && r.children.push(me("text", `
`), i), Array.isArray(r) ? {
		type: "root",
		children: r
	} : r
}
const Xy = function(e, t) {
	return e && "run" in e ? Ky(e, t) : Zy(e || t)
};
var Gy = Xy;

function Ky(e, t) {
	return (n, r, i) => {
		e.run(nc(n, t), r, o => {
			i(o)
		})
	}
}

function Zy(e) {
	return t => nc(t, e)
}
var rc = {
		exports: {}
	},
	Jy = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
	e1 = Jy,
	t1 = e1;

function ic() {}

function oc() {}
oc.resetWarningCache = ic;
var n1 = function() {
	function e(r, i, o, s, a, l) {
		if (l !== t1) {
			var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
			throw c.name = "Invariant Violation", c
		}
	}
	e.isRequired = e;

	function t() {
		return e
	}
	var n = {
		array: e,
		bigint: e,
		bool: e,
		func: e,
		number: e,
		object: e,
		string: e,
		symbol: e,
		any: e,
		arrayOf: t,
		element: e,
		elementType: e,
		instanceOf: t,
		node: e,
		objectOf: t,
		oneOf: t,
		oneOfType: t,
		shape: t,
		exact: t,
		checkPropTypes: oc,
		resetWarningCache: ic
	};
	return n.PropTypes = n, n
};
rc.exports = n1();
var H = rc.exports;
class Hn {
	constructor(t, n, r) {
		this.property = t, this.normal = n, r && (this.space = r)
	}
}
Hn.prototype.property = {};
Hn.prototype.normal = {};
Hn.prototype.space = null;

function sc(e, t) {
	const n = {},
		r = {};
	let i = -1;
	for (; ++i < e.length;) Object.assign(n, e[i].property), Object.assign(r, e[i].normal);
	return new Hn(n, r, t)
}

function io(e) {
	return e.toLowerCase()
}
class qe {
	constructor(t, n) {
		this.property = t, this.attribute = n
	}
}
qe.prototype.space = null;
qe.prototype.boolean = !1;
qe.prototype.booleanish = !1;
qe.prototype.overloadedBoolean = !1;
qe.prototype.number = !1;
qe.prototype.commaSeparated = !1;
qe.prototype.spaceSeparated = !1;
qe.prototype.commaOrSpaceSeparated = !1;
qe.prototype.mustUseProperty = !1;
qe.prototype.defined = !1;
let r1 = 0;
const Q = Rt(),
	le = Rt(),
	ac = Rt(),
	I = Rt(),
	ie = Rt(),
	Ut = Rt(),
	Pe = Rt();

function Rt() {
	return 2 ** ++r1
}
var oo = Object.freeze(Object.defineProperty({
	__proto__: null,
	boolean: Q,
	booleanish: le,
	overloadedBoolean: ac,
	number: I,
	spaceSeparated: ie,
	commaSeparated: Ut,
	commaOrSpaceSeparated: Pe
}, Symbol.toStringTag, {
	value: "Module"
}));
const xi = Object.keys(oo);
class Lo extends qe {
	constructor(t, n, r, i) {
		let o = -1;
		if (super(t, n), za(this, "space", i), typeof r == "number")
			for (; ++o < xi.length;) {
				const s = xi[o];
				za(this, xi[o], (r & oo[s]) === oo[s])
			}
	}
}
Lo.prototype.defined = !0;

function za(e, t, n) {
	n && (e[t] = n)
}
const i1 = {}.hasOwnProperty;

function Jt(e) {
	const t = {},
		n = {};
	let r;
	for (r in e.properties)
		if (i1.call(e.properties, r)) {
			const i = e.properties[r],
				o = new Lo(r, e.transform(e.attributes || {}, r), i, e.space);
			e.mustUseProperty && e.mustUseProperty.includes(r) && (o.mustUseProperty = !0), t[r] = o, n[io(r)] = r, n[io(o.attribute)] = r
		} return new Hn(t, n, e.space)
}
const lc = Jt({
		space: "xlink",
		transform(e, t) {
			return "xlink:" + t.slice(5).toLowerCase()
		},
		properties: {
			xLinkActuate: null,
			xLinkArcRole: null,
			xLinkHref: null,
			xLinkRole: null,
			xLinkShow: null,
			xLinkTitle: null,
			xLinkType: null
		}
	}),
	uc = Jt({
		space: "xml",
		transform(e, t) {
			return "xml:" + t.slice(3).toLowerCase()
		},
		properties: {
			xmlLang: null,
			xmlBase: null,
			xmlSpace: null
		}
	});

function cc(e, t) {
	return t in e ? e[t] : t
}

function fc(e, t) {
	return cc(e, t.toLowerCase())
}
const dc = Jt({
		space: "xmlns",
		attributes: {
			xmlnsxlink: "xmlns:xlink"
		},
		transform: fc,
		properties: {
			xmlns: null,
			xmlnsXLink: null
		}
	}),
	hc = Jt({
		transform(e, t) {
			return t === "role" ? t : "aria-" + t.slice(4).toLowerCase()
		},
		properties: {
			ariaActiveDescendant: null,
			ariaAtomic: le,
			ariaAutoComplete: null,
			ariaBusy: le,
			ariaChecked: le,
			ariaColCount: I,
			ariaColIndex: I,
			ariaColSpan: I,
			ariaControls: ie,
			ariaCurrent: null,
			ariaDescribedBy: ie,
			ariaDetails: null,
			ariaDisabled: le,
			ariaDropEffect: ie,
			ariaErrorMessage: null,
			ariaExpanded: le,
			ariaFlowTo: ie,
			ariaGrabbed: le,
			ariaHasPopup: null,
			ariaHidden: le,
			ariaInvalid: null,
			ariaKeyShortcuts: null,
			ariaLabel: null,
			ariaLabelledBy: ie,
			ariaLevel: I,
			ariaLive: null,
			ariaModal: le,
			ariaMultiLine: le,
			ariaMultiSelectable: le,
			ariaOrientation: null,
			ariaOwns: ie,
			ariaPlaceholder: null,
			ariaPosInSet: I,
			ariaPressed: le,
			ariaReadOnly: le,
			ariaRelevant: null,
			ariaRequired: le,
			ariaRoleDescription: ie,
			ariaRowCount: I,
			ariaRowIndex: I,
			ariaRowSpan: I,
			ariaSelected: le,
			ariaSetSize: I,
			ariaSort: null,
			ariaValueMax: I,
			ariaValueMin: I,
			ariaValueNow: I,
			ariaValueText: null,
			role: null
		}
	}),
	o1 = Jt({
		space: "html",
		attributes: {
			acceptcharset: "accept-charset",
			classname: "class",
			htmlfor: "for",
			httpequiv: "http-equiv"
		},
		transform: fc,
		mustUseProperty: ["checked", "multiple", "muted", "selected"],
		properties: {
			abbr: null,
			accept: Ut,
			acceptCharset: ie,
			accessKey: ie,
			action: null,
			allow: null,
			allowFullScreen: Q,
			allowPaymentRequest: Q,
			allowUserMedia: Q,
			alt: null,
			as: null,
			async: Q,
			autoCapitalize: null,
			autoComplete: ie,
			autoFocus: Q,
			autoPlay: Q,
			capture: Q,
			charSet: null,
			checked: Q,
			cite: null,
			className: ie,
			cols: I,
			colSpan: null,
			content: null,
			contentEditable: le,
			controls: Q,
			controlsList: ie,
			coords: I | Ut,
			crossOrigin: null,
			data: null,
			dateTime: null,
			decoding: null,
			default: Q,
			defer: Q,
			dir: null,
			dirName: null,
			disabled: Q,
			download: ac,
			draggable: le,
			encType: null,
			enterKeyHint: null,
			form: null,
			formAction: null,
			formEncType: null,
			formMethod: null,
			formNoValidate: Q,
			formTarget: null,
			headers: ie,
			height: I,
			hidden: Q,
			high: I,
			href: null,
			hrefLang: null,
			htmlFor: ie,
			httpEquiv: ie,
			id: null,
			imageSizes: null,
			imageSrcSet: null,
			inputMode: null,
			integrity: null,
			is: null,
			isMap: Q,
			itemId: null,
			itemProp: ie,
			itemRef: ie,
			itemScope: Q,
			itemType: ie,
			kind: null,
			label: null,
			lang: null,
			language: null,
			list: null,
			loading: null,
			loop: Q,
			low: I,
			manifest: null,
			max: null,
			maxLength: I,
			media: null,
			method: null,
			min: null,
			minLength: I,
			multiple: Q,
			muted: Q,
			name: null,
			nonce: null,
			noModule: Q,
			noValidate: Q,
			onAbort: null,
			onAfterPrint: null,
			onAuxClick: null,
			onBeforePrint: null,
			onBeforeUnload: null,
			onBlur: null,
			onCancel: null,
			onCanPlay: null,
			onCanPlayThrough: null,
			onChange: null,
			onClick: null,
			onClose: null,
			onContextLost: null,
			onContextMenu: null,
			onContextRestored: null,
			onCopy: null,
			onCueChange: null,
			onCut: null,
			onDblClick: null,
			onDrag: null,
			onDragEnd: null,
			onDragEnter: null,
			onDragExit: null,
			onDragLeave: null,
			onDragOver: null,
			onDragStart: null,
			onDrop: null,
			onDurationChange: null,
			onEmptied: null,
			onEnded: null,
			onError: null,
			onFocus: null,
			onFormData: null,
			onHashChange: null,
			onInput: null,
			onInvalid: null,
			onKeyDown: null,
			onKeyPress: null,
			onKeyUp: null,
			onLanguageChange: null,
			onLoad: null,
			onLoadedData: null,
			onLoadedMetadata: null,
			onLoadEnd: null,
			onLoadStart: null,
			onMessage: null,
			onMessageError: null,
			onMouseDown: null,
			onMouseEnter: null,
			onMouseLeave: null,
			onMouseMove: null,
			onMouseOut: null,
			onMouseOver: null,
			onMouseUp: null,
			onOffline: null,
			onOnline: null,
			onPageHide: null,
			onPageShow: null,
			onPaste: null,
			onPause: null,
			onPlay: null,
			onPlaying: null,
			onPopState: null,
			onProgress: null,
			onRateChange: null,
			onRejectionHandled: null,
			onReset: null,
			onResize: null,
			onScroll: null,
			onSecurityPolicyViolation: null,
			onSeeked: null,
			onSeeking: null,
			onSelect: null,
			onSlotChange: null,
			onStalled: null,
			onStorage: null,
			onSubmit: null,
			onSuspend: null,
			onTimeUpdate: null,
			onToggle: null,
			onUnhandledRejection: null,
			onUnload: null,
			onVolumeChange: null,
			onWaiting: null,
			onWheel: null,
			open: Q,
			optimum: I,
			pattern: null,
			ping: ie,
			placeholder: null,
			playsInline: Q,
			poster: null,
			preload: null,
			readOnly: Q,
			referrerPolicy: null,
			rel: ie,
			required: Q,
			reversed: Q,
			rows: I,
			rowSpan: I,
			sandbox: ie,
			scope: null,
			scoped: Q,
			seamless: Q,
			selected: Q,
			shape: null,
			size: I,
			sizes: null,
			slot: null,
			span: I,
			spellCheck: le,
			src: null,
			srcDoc: null,
			srcLang: null,
			srcSet: null,
			start: I,
			step: null,
			style: null,
			tabIndex: I,
			target: null,
			title: null,
			translate: null,
			type: null,
			typeMustMatch: Q,
			useMap: null,
			value: le,
			width: I,
			wrap: null,
			align: null,
			aLink: null,
			archive: ie,
			axis: null,
			background: null,
			bgColor: null,
			border: I,
			borderColor: null,
			bottomMargin: I,
			cellPadding: null,
			cellSpacing: null,
			char: null,
			charOff: null,
			classId: null,
			clear: null,
			code: null,
			codeBase: null,
			codeType: null,
			color: null,
			compact: Q,
			declare: Q,
			event: null,
			face: null,
			frame: null,
			frameBorder: null,
			hSpace: I,
			leftMargin: I,
			link: null,
			longDesc: null,
			lowSrc: null,
			marginHeight: I,
			marginWidth: I,
			noResize: Q,
			noHref: Q,
			noShade: Q,
			noWrap: Q,
			object: null,
			profile: null,
			prompt: null,
			rev: null,
			rightMargin: I,
			rules: null,
			scheme: null,
			scrolling: le,
			standby: null,
			summary: null,
			text: null,
			topMargin: I,
			valueType: null,
			version: null,
			vAlign: null,
			vLink: null,
			vSpace: I,
			allowTransparency: null,
			autoCorrect: null,
			autoSave: null,
			disablePictureInPicture: Q,
			disableRemotePlayback: Q,
			prefix: null,
			property: null,
			results: I,
			security: null,
			unselectable: null
		}
	}),
	s1 = Jt({
		space: "svg",
		attributes: {
			accentHeight: "accent-height",
			alignmentBaseline: "alignment-baseline",
			arabicForm: "arabic-form",
			baselineShift: "baseline-shift",
			capHeight: "cap-height",
			className: "class",
			clipPath: "clip-path",
			clipRule: "clip-rule",
			colorInterpolation: "color-interpolation",
			colorInterpolationFilters: "color-interpolation-filters",
			colorProfile: "color-profile",
			colorRendering: "color-rendering",
			crossOrigin: "crossorigin",
			dataType: "datatype",
			dominantBaseline: "dominant-baseline",
			enableBackground: "enable-background",
			fillOpacity: "fill-opacity",
			fillRule: "fill-rule",
			floodColor: "flood-color",
			floodOpacity: "flood-opacity",
			fontFamily: "font-family",
			fontSize: "font-size",
			fontSizeAdjust: "font-size-adjust",
			fontStretch: "font-stretch",
			fontStyle: "font-style",
			fontVariant: "font-variant",
			fontWeight: "font-weight",
			glyphName: "glyph-name",
			glyphOrientationHorizontal: "glyph-orientation-horizontal",
			glyphOrientationVertical: "glyph-orientation-vertical",
			hrefLang: "hreflang",
			horizAdvX: "horiz-adv-x",
			horizOriginX: "horiz-origin-x",
			horizOriginY: "horiz-origin-y",
			imageRendering: "image-rendering",
			letterSpacing: "letter-spacing",
			lightingColor: "lighting-color",
			markerEnd: "marker-end",
			markerMid: "marker-mid",
			markerStart: "marker-start",
			navDown: "nav-down",
			navDownLeft: "nav-down-left",
			navDownRight: "nav-down-right",
			navLeft: "nav-left",
			navNext: "nav-next",
			navPrev: "nav-prev",
			navRight: "nav-right",
			navUp: "nav-up",
			navUpLeft: "nav-up-left",
			navUpRight: "nav-up-right",
			onAbort: "onabort",
			onActivate: "onactivate",
			onAfterPrint: "onafterprint",
			onBeforePrint: "onbeforeprint",
			onBegin: "onbegin",
			onCancel: "oncancel",
			onCanPlay: "oncanplay",
			onCanPlayThrough: "oncanplaythrough",
			onChange: "onchange",
			onClick: "onclick",
			onClose: "onclose",
			onCopy: "oncopy",
			onCueChange: "oncuechange",
			onCut: "oncut",
			onDblClick: "ondblclick",
			onDrag: "ondrag",
			onDragEnd: "ondragend",
			onDragEnter: "ondragenter",
			onDragExit: "ondragexit",
			onDragLeave: "ondragleave",
			onDragOver: "ondragover",
			onDragStart: "ondragstart",
			onDrop: "ondrop",
			onDurationChange: "ondurationchange",
			onEmptied: "onemptied",
			onEnd: "onend",
			onEnded: "onended",
			onError: "onerror",
			onFocus: "onfocus",
			onFocusIn: "onfocusin",
			onFocusOut: "onfocusout",
			onHashChange: "onhashchange",
			onInput: "oninput",
			onInvalid: "oninvalid",
			onKeyDown: "onkeydown",
			onKeyPress: "onkeypress",
			onKeyUp: "onkeyup",
			onLoad: "onload",
			onLoadedData: "onloadeddata",
			onLoadedMetadata: "onloadedmetadata",
			onLoadStart: "onloadstart",
			onMessage: "onmessage",
			onMouseDown: "onmousedown",
			onMouseEnter: "onmouseenter",
			onMouseLeave: "onmouseleave",
			onMouseMove: "onmousemove",
			onMouseOut: "onmouseout",
			onMouseOver: "onmouseover",
			onMouseUp: "onmouseup",
			onMouseWheel: "onmousewheel",
			onOffline: "onoffline",
			onOnline: "ononline",
			onPageHide: "onpagehide",
			onPageShow: "onpageshow",
			onPaste: "onpaste",
			onPause: "onpause",
			onPlay: "onplay",
			onPlaying: "onplaying",
			onPopState: "onpopstate",
			onProgress: "onprogress",
			onRateChange: "onratechange",
			onRepeat: "onrepeat",
			onReset: "onreset",
			onResize: "onresize",
			onScroll: "onscroll",
			onSeeked: "onseeked",
			onSeeking: "onseeking",
			onSelect: "onselect",
			onShow: "onshow",
			onStalled: "onstalled",
			onStorage: "onstorage",
			onSubmit: "onsubmit",
			onSuspend: "onsuspend",
			onTimeUpdate: "ontimeupdate",
			onToggle: "ontoggle",
			onUnload: "onunload",
			onVolumeChange: "onvolumechange",
			onWaiting: "onwaiting",
			onZoom: "onzoom",
			overlinePosition: "overline-position",
			overlineThickness: "overline-thickness",
			paintOrder: "paint-order",
			panose1: "panose-1",
			pointerEvents: "pointer-events",
			referrerPolicy: "referrerpolicy",
			renderingIntent: "rendering-intent",
			shapeRendering: "shape-rendering",
			stopColor: "stop-color",
			stopOpacity: "stop-opacity",
			strikethroughPosition: "strikethrough-position",
			strikethroughThickness: "strikethrough-thickness",
			strokeDashArray: "stroke-dasharray",
			strokeDashOffset: "stroke-dashoffset",
			strokeLineCap: "stroke-linecap",
			strokeLineJoin: "stroke-linejoin",
			strokeMiterLimit: "stroke-miterlimit",
			strokeOpacity: "stroke-opacity",
			strokeWidth: "stroke-width",
			tabIndex: "tabindex",
			textAnchor: "text-anchor",
			textDecoration: "text-decoration",
			textRendering: "text-rendering",
			typeOf: "typeof",
			underlinePosition: "underline-position",
			underlineThickness: "underline-thickness",
			unicodeBidi: "unicode-bidi",
			unicodeRange: "unicode-range",
			unitsPerEm: "units-per-em",
			vAlphabetic: "v-alphabetic",
			vHanging: "v-hanging",
			vIdeographic: "v-ideographic",
			vMathematical: "v-mathematical",
			vectorEffect: "vector-effect",
			vertAdvY: "vert-adv-y",
			vertOriginX: "vert-origin-x",
			vertOriginY: "vert-origin-y",
			wordSpacing: "word-spacing",
			writingMode: "writing-mode",
			xHeight: "x-height",
			playbackOrder: "playbackorder",
			timelineBegin: "timelinebegin"
		},
		transform: cc,
		properties: {
			about: Pe,
			accentHeight: I,
			accumulate: null,
			additive: null,
			alignmentBaseline: null,
			alphabetic: I,
			amplitude: I,
			arabicForm: null,
			ascent: I,
			attributeName: null,
			attributeType: null,
			azimuth: I,
			bandwidth: null,
			baselineShift: null,
			baseFrequency: null,
			baseProfile: null,
			bbox: null,
			begin: null,
			bias: I,
			by: null,
			calcMode: null,
			capHeight: I,
			className: ie,
			clip: null,
			clipPath: null,
			clipPathUnits: null,
			clipRule: null,
			color: null,
			colorInterpolation: null,
			colorInterpolationFilters: null,
			colorProfile: null,
			colorRendering: null,
			content: null,
			contentScriptType: null,
			contentStyleType: null,
			crossOrigin: null,
			cursor: null,
			cx: null,
			cy: null,
			d: null,
			dataType: null,
			defaultAction: null,
			descent: I,
			diffuseConstant: I,
			direction: null,
			display: null,
			dur: null,
			divisor: I,
			dominantBaseline: null,
			download: Q,
			dx: null,
			dy: null,
			edgeMode: null,
			editable: null,
			elevation: I,
			enableBackground: null,
			end: null,
			event: null,
			exponent: I,
			externalResourcesRequired: null,
			fill: null,
			fillOpacity: I,
			fillRule: null,
			filter: null,
			filterRes: null,
			filterUnits: null,
			floodColor: null,
			floodOpacity: null,
			focusable: null,
			focusHighlight: null,
			fontFamily: null,
			fontSize: null,
			fontSizeAdjust: null,
			fontStretch: null,
			fontStyle: null,
			fontVariant: null,
			fontWeight: null,
			format: null,
			fr: null,
			from: null,
			fx: null,
			fy: null,
			g1: Ut,
			g2: Ut,
			glyphName: Ut,
			glyphOrientationHorizontal: null,
			glyphOrientationVertical: null,
			glyphRef: null,
			gradientTransform: null,
			gradientUnits: null,
			handler: null,
			hanging: I,
			hatchContentUnits: null,
			hatchUnits: null,
			height: null,
			href: null,
			hrefLang: null,
			horizAdvX: I,
			horizOriginX: I,
			horizOriginY: I,
			id: null,
			ideographic: I,
			imageRendering: null,
			initialVisibility: null,
			in: null,
			in2: null,
			intercept: I,
			k: I,
			k1: I,
			k2: I,
			k3: I,
			k4: I,
			kernelMatrix: Pe,
			kernelUnitLength: null,
			keyPoints: null,
			keySplines: null,
			keyTimes: null,
			kerning: null,
			lang: null,
			lengthAdjust: null,
			letterSpacing: null,
			lightingColor: null,
			limitingConeAngle: I,
			local: null,
			markerEnd: null,
			markerMid: null,
			markerStart: null,
			markerHeight: null,
			markerUnits: null,
			markerWidth: null,
			mask: null,
			maskContentUnits: null,
			maskUnits: null,
			mathematical: null,
			max: null,
			media: null,
			mediaCharacterEncoding: null,
			mediaContentEncodings: null,
			mediaSize: I,
			mediaTime: null,
			method: null,
			min: null,
			mode: null,
			name: null,
			navDown: null,
			navDownLeft: null,
			navDownRight: null,
			navLeft: null,
			navNext: null,
			navPrev: null,
			navRight: null,
			navUp: null,
			navUpLeft: null,
			navUpRight: null,
			numOctaves: null,
			observer: null,
			offset: null,
			onAbort: null,
			onActivate: null,
			onAfterPrint: null,
			onBeforePrint: null,
			onBegin: null,
			onCancel: null,
			onCanPlay: null,
			onCanPlayThrough: null,
			onChange: null,
			onClick: null,
			onClose: null,
			onCopy: null,
			onCueChange: null,
			onCut: null,
			onDblClick: null,
			onDrag: null,
			onDragEnd: null,
			onDragEnter: null,
			onDragExit: null,
			onDragLeave: null,
			onDragOver: null,
			onDragStart: null,
			onDrop: null,
			onDurationChange: null,
			onEmptied: null,
			onEnd: null,
			onEnded: null,
			onError: null,
			onFocus: null,
			onFocusIn: null,
			onFocusOut: null,
			onHashChange: null,
			onInput: null,
			onInvalid: null,
			onKeyDown: null,
			onKeyPress: null,
			onKeyUp: null,
			onLoad: null,
			onLoadedData: null,
			onLoadedMetadata: null,
			onLoadStart: null,
			onMessage: null,
			onMouseDown: null,
			onMouseEnter: null,
			onMouseLeave: null,
			onMouseMove: null,
			onMouseOut: null,
			onMouseOver: null,
			onMouseUp: null,
			onMouseWheel: null,
			onOffline: null,
			onOnline: null,
			onPageHide: null,
			onPageShow: null,
			onPaste: null,
			onPause: null,
			onPlay: null,
			onPlaying: null,
			onPopState: null,
			onProgress: null,
			onRateChange: null,
			onRepeat: null,
			onReset: null,
			onResize: null,
			onScroll: null,
			onSeeked: null,
			onSeeking: null,
			onSelect: null,
			onShow: null,
			onStalled: null,
			onStorage: null,
			onSubmit: null,
			onSuspend: null,
			onTimeUpdate: null,
			onToggle: null,
			onUnload: null,
			onVolumeChange: null,
			onWaiting: null,
			onZoom: null,
			opacity: null,
			operator: null,
			order: null,
			orient: null,
			orientation: null,
			origin: null,
			overflow: null,
			overlay: null,
			overlinePosition: I,
			overlineThickness: I,
			paintOrder: null,
			panose1: null,
			path: null,
			pathLength: I,
			patternContentUnits: null,
			patternTransform: null,
			patternUnits: null,
			phase: null,
			ping: ie,
			pitch: null,
			playbackOrder: null,
			pointerEvents: null,
			points: null,
			pointsAtX: I,
			pointsAtY: I,
			pointsAtZ: I,
			preserveAlpha: null,
			preserveAspectRatio: null,
			primitiveUnits: null,
			propagate: null,
			property: Pe,
			r: null,
			radius: null,
			referrerPolicy: null,
			refX: null,
			refY: null,
			rel: Pe,
			rev: Pe,
			renderingIntent: null,
			repeatCount: null,
			repeatDur: null,
			requiredExtensions: Pe,
			requiredFeatures: Pe,
			requiredFonts: Pe,
			requiredFormats: Pe,
			resource: null,
			restart: null,
			result: null,
			rotate: null,
			rx: null,
			ry: null,
			scale: null,
			seed: null,
			shapeRendering: null,
			side: null,
			slope: null,
			snapshotTime: null,
			specularConstant: I,
			specularExponent: I,
			spreadMethod: null,
			spacing: null,
			startOffset: null,
			stdDeviation: null,
			stemh: null,
			stemv: null,
			stitchTiles: null,
			stopColor: null,
			stopOpacity: null,
			strikethroughPosition: I,
			strikethroughThickness: I,
			string: null,
			stroke: null,
			strokeDashArray: Pe,
			strokeDashOffset: null,
			strokeLineCap: null,
			strokeLineJoin: null,
			strokeMiterLimit: I,
			strokeOpacity: I,
			strokeWidth: null,
			style: null,
			surfaceScale: I,
			syncBehavior: null,
			syncBehaviorDefault: null,
			syncMaster: null,
			syncTolerance: null,
			syncToleranceDefault: null,
			systemLanguage: Pe,
			tabIndex: I,
			tableValues: null,
			target: null,
			targetX: I,
			targetY: I,
			textAnchor: null,
			textDecoration: null,
			textRendering: null,
			textLength: null,
			timelineBegin: null,
			title: null,
			transformBehavior: null,
			type: null,
			typeOf: Pe,
			to: null,
			transform: null,
			u1: null,
			u2: null,
			underlinePosition: I,
			underlineThickness: I,
			unicode: null,
			unicodeBidi: null,
			unicodeRange: null,
			unitsPerEm: I,
			values: null,
			vAlphabetic: I,
			vMathematical: I,
			vectorEffect: null,
			vHanging: I,
			vIdeographic: I,
			version: null,
			vertAdvY: I,
			vertOriginX: I,
			vertOriginY: I,
			viewBox: null,
			viewTarget: null,
			visibility: null,
			width: null,
			widths: null,
			wordSpacing: null,
			writingMode: null,
			x: null,
			x1: null,
			x2: null,
			xChannelSelector: null,
			xHeight: I,
			y: null,
			y1: null,
			y2: null,
			yChannelSelector: null,
			z: null,
			zoomAndPan: null
		}
	}),
	a1 = /^data[-\w.:]+$/i,
	Na = /-[a-z]/g,
	l1 = /[A-Z]/g;

function u1(e, t) {
	const n = io(t);
	let r = t,
		i = qe;
	if (n in e.normal) return e.property[e.normal[n]];
	if (n.length > 4 && n.slice(0, 4) === "data" && a1.test(t)) {
		if (t.charAt(4) === "-") {
			const o = t.slice(5).replace(Na, f1);
			r = "data" + o.charAt(0).toUpperCase() + o.slice(1)
		} else {
			const o = t.slice(4);
			if (!Na.test(o)) {
				let s = o.replace(l1, c1);
				s.charAt(0) !== "-" && (s = "-" + s), t = "data" + s
			}
		}
		i = Lo
	}
	return new i(r, t)
}

function c1(e) {
	return "-" + e.toLowerCase()
}

function f1(e) {
	return e.charAt(1).toUpperCase()
}
const ja = {
		classId: "classID",
		dataType: "datatype",
		itemId: "itemID",
		strokeDashArray: "strokeDasharray",
		strokeDashOffset: "strokeDashoffset",
		strokeLineCap: "strokeLinecap",
		strokeLineJoin: "strokeLinejoin",
		strokeMiterLimit: "strokeMiterlimit",
		typeOf: "typeof",
		xLinkActuate: "xlinkActuate",
		xLinkArcRole: "xlinkArcrole",
		xLinkHref: "xlinkHref",
		xLinkRole: "xlinkRole",
		xLinkShow: "xlinkShow",
		xLinkTitle: "xlinkTitle",
		xLinkType: "xlinkType",
		xmlnsXLink: "xmlnsXlink"
	},
	d1 = sc([uc, lc, dc, hc, o1], "html"),
	h1 = sc([uc, lc, dc, hc, s1], "svg"),
	pc = function(e) {
		if (e == null) return y1;
		if (typeof e == "string") return g1(e);
		if (typeof e == "object") return Array.isArray(e) ? p1(e) : m1(e);
		if (typeof e == "function") return $r(e);
		throw new Error("Expected function, string, or object as test")
	};

function p1(e) {
	const t = [];
	let n = -1;
	for (; ++n < e.length;) t[n] = pc(e[n]);
	return $r(r);

	function r(...i) {
		let o = -1;
		for (; ++o < t.length;)
			if (t[o].call(this, ...i)) return !0;
		return !1
	}
}

function m1(e) {
	return $r(t);

	function t(n) {
		let r;
		for (r in e)
			if (n[r] !== e[r]) return !1;
		return !0
	}
}

function g1(e) {
	return $r(t);

	function t(n) {
		return n && n.type === e
	}
}

function $r(e) {
	return t;

	function t(...n) {
		return Boolean(e.call(this, ...n))
	}
}

function y1() {
	return !0
}
const b1 = !0,
	v1 = "skip",
	Ba = !1,
	_1 = function(e, t, n, r) {
		typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null);
		const i = pc(t),
			o = r ? -1 : 1;
		s(e, null, [])();

		function s(a, l, c) {
			const u = typeof a == "object" && a !== null ? a : {};
			let f;
			return typeof u.type == "string" && (f = typeof u.tagName == "string" ? u.tagName : typeof u.name == "string" ? u.name : void 0, Object.defineProperty(p, "name", {
				value: "node (" + (u.type + (f ? "<" + f + ">" : "")) + ")"
			})), p;

			function p() {
				let h = [],
					d, m, g;
				if ((!t || i(a, l, c[c.length - 1] || null)) && (h = w1(n(a, c)), h[0] === Ba)) return h;
				if (a.children && h[0] !== v1)
					for (m = (r ? a.children.length : -1) + o, g = c.concat(a); m > -1 && m < a.children.length;) {
						if (d = s(a.children[m], m, g)(), d[0] === Ba) return d;
						m = typeof d[1] == "number" ? d[1] : m + o
					}
				return h
			}
		}
	};

function w1(e) {
	return Array.isArray(e) ? e : typeof e == "number" ? [b1, e] : [e]
}
const x1 = function(e, t, n, r) {
	typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null), _1(e, t, i, r);

	function i(o, s) {
		const a = s[s.length - 1];
		return n(o, a ? a.children.indexOf(o) : null, a)
	}
};

function k1(e) {
	if (e.allowedElements && e.disallowedElements) throw new TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");
	if (e.allowedElements || e.disallowedElements || e.allowElement) return t => {
		x1(t, "element", (n, r, i) => {
			const o = i;
			let s;
			if (e.allowedElements ? s = !e.allowedElements.includes(n.tagName) : e.disallowedElements && (s = e.disallowedElements.includes(n.tagName)), !s && e.allowElement && typeof r == "number" && (s = !e.allowElement(n, r, o)), s && typeof r == "number") return e.unwrapDisallowed && n.children ? o.children.splice(r, 1, ...n.children) : o.children.splice(r, 1), r
		})
	}
}
var mc = {
		exports: {}
	},
	J = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Do = Symbol.for("react.element"),
	Fo = Symbol.for("react.portal"),
	Hr = Symbol.for("react.fragment"),
	qr = Symbol.for("react.strict_mode"),
	Wr = Symbol.for("react.profiler"),
	Qr = Symbol.for("react.provider"),
	Yr = Symbol.for("react.context"),
	C1 = Symbol.for("react.server_context"),
	Xr = Symbol.for("react.forward_ref"),
	Gr = Symbol.for("react.suspense"),
	Kr = Symbol.for("react.suspense_list"),
	Zr = Symbol.for("react.memo"),
	Jr = Symbol.for("react.lazy"),
	S1 = Symbol.for("react.offscreen"),
	gc;
gc = Symbol.for("react.module.reference");

function We(e) {
	if (typeof e == "object" && e !== null) {
		var t = e.$$typeof;
		switch (t) {
			case Do:
				switch (e = e.type, e) {
					case Hr:
					case Wr:
					case qr:
					case Gr:
					case Kr:
						return e;
					default:
						switch (e = e && e.$$typeof, e) {
							case C1:
							case Yr:
							case Xr:
							case Jr:
							case Zr:
							case Qr:
								return e;
							default:
								return t
						}
				}
				case Fo:
					return t
		}
	}
}
J.ContextConsumer = Yr;
J.ContextProvider = Qr;
J.Element = Do;
J.ForwardRef = Xr;
J.Fragment = Hr;
J.Lazy = Jr;
J.Memo = Zr;
J.Portal = Fo;
J.Profiler = Wr;
J.StrictMode = qr;
J.Suspense = Gr;
J.SuspenseList = Kr;
J.isAsyncMode = function() {
	return !1
};
J.isConcurrentMode = function() {
	return !1
};
J.isContextConsumer = function(e) {
	return We(e) === Yr
};
J.isContextProvider = function(e) {
	return We(e) === Qr
};
J.isElement = function(e) {
	return typeof e == "object" && e !== null && e.$$typeof === Do
};
J.isForwardRef = function(e) {
	return We(e) === Xr
};
J.isFragment = function(e) {
	return We(e) === Hr
};
J.isLazy = function(e) {
	return We(e) === Jr
};
J.isMemo = function(e) {
	return We(e) === Zr
};
J.isPortal = function(e) {
	return We(e) === Fo
};
J.isProfiler = function(e) {
	return We(e) === Wr
};
J.isStrictMode = function(e) {
	return We(e) === qr
};
J.isSuspense = function(e) {
	return We(e) === Gr
};
J.isSuspenseList = function(e) {
	return We(e) === Kr
};
J.isValidElementType = function(e) {
	return typeof e == "string" || typeof e == "function" || e === Hr || e === Wr || e === qr || e === Gr || e === Kr || e === S1 || typeof e == "object" && e !== null && (e.$$typeof === Jr || e.$$typeof === Zr || e.$$typeof === Qr || e.$$typeof === Yr || e.$$typeof === Xr || e.$$typeof === gc || e.getModuleId !== void 0)
};
J.typeOf = We;
mc.exports = J;
var E1 = mc.exports;

function T1(e) {
	var t = e && typeof e == "object" && e.type === "text" ? e.value || "" : e;
	return typeof t == "string" && t.replace(/[ \t\n\f\r]/g, "") === ""
}

function A1(e) {
	return e.join(" ").trim()
}

function O1(e, t) {
	var n = t || {};
	return e[e.length - 1] === "" && (e = e.concat("")), e.join((n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")).trim()
}
var Ua = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
	M1 = /\n/g,
	I1 = /^\s*/,
	R1 = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
	P1 = /^:\s*/,
	L1 = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
	D1 = /^[;\s]*/,
	F1 = /^\s+|\s+$/g,
	z1 = `
`,
	Va = "/",
	$a = "*",
	Ct = "",
	N1 = "comment",
	j1 = "declaration",
	B1 = function(e, t) {
		if (typeof e != "string") throw new TypeError("First argument must be a string");
		if (!e) return [];
		t = t || {};
		var n = 1,
			r = 1;

		function i(d) {
			var m = d.match(M1);
			m && (n += m.length);
			var g = d.lastIndexOf(z1);
			r = ~g ? d.length - g : r + d.length
		}

		function o() {
			var d = {
				line: n,
				column: r
			};
			return function(m) {
				return m.position = new s(d), c(), m
			}
		}

		function s(d) {
			this.start = d, this.end = {
				line: n,
				column: r
			}, this.source = t.source
		}
		s.prototype.content = e;

		function a(d) {
			var m = new Error(t.source + ":" + n + ":" + r + ": " + d);
			if (m.reason = d, m.filename = t.source, m.line = n, m.column = r, m.source = e, !t.silent) throw m
		}

		function l(d) {
			var m = d.exec(e);
			if (!!m) {
				var g = m[0];
				return i(g), e = e.slice(g.length), m
			}
		}

		function c() {
			l(I1)
		}

		function u(d) {
			var m;
			for (d = d || []; m = f();) m !== !1 && d.push(m);
			return d
		}

		function f() {
			var d = o();
			if (!(Va != e.charAt(0) || $a != e.charAt(1))) {
				for (var m = 2; Ct != e.charAt(m) && ($a != e.charAt(m) || Va != e.charAt(m + 1));) ++m;
				if (m += 2, Ct === e.charAt(m - 1)) return a("End of comment missing");
				var g = e.slice(2, m - 2);
				return r += 2, i(g), e = e.slice(m), r += 2, d({
					type: N1,
					comment: g
				})
			}
		}

		function p() {
			var d = o(),
				m = l(R1);
			if (!!m) {
				if (f(), !l(P1)) return a("property missing ':'");
				var g = l(L1),
					y = d({
						type: j1,
						property: Ha(m[0].replace(Ua, Ct)),
						value: g ? Ha(g[0].replace(Ua, Ct)) : Ct
					});
				return l(D1), y
			}
		}

		function h() {
			var d = [];
			u(d);
			for (var m; m = p();) m !== !1 && (d.push(m), u(d));
			return d
		}
		return c(), h()
	};

function Ha(e) {
	return e ? e.replace(F1, Ct) : Ct
}
var U1 = B1;

function V1(e, t) {
	var n = null;
	if (!e || typeof e != "string") return n;
	for (var r, i = U1(e), o = typeof t == "function", s, a, l = 0, c = i.length; l < c; l++) r = i[l], s = r.property, a = r.value, o ? t(s, a, r) : a && (n || (n = {}), n[s] = a);
	return n
}
var $1 = V1;
const so = {}.hasOwnProperty,
	H1 = new Set(["table", "thead", "tbody", "tfoot", "tr"]);

function yc(e, t) {
	const n = [];
	let r = -1,
		i;
	for (; ++r < t.children.length;) i = t.children[r], i.type === "element" ? n.push(q1(e, i, r, t)) : i.type === "text" ? (t.type !== "element" || !H1.has(t.tagName) || !T1(i)) && n.push(i.value) : i.type === "raw" && !e.options.skipHtml && n.push(i.value);
	return n
}

function q1(e, t, n, r) {
	const i = e.options,
		o = e.schema,
		s = t.tagName,
		a = {};
	let l = o,
		c;
	if (o.space === "html" && s === "svg" && (l = h1, e.schema = l), t.properties)
		for (c in t.properties) so.call(t.properties, c) && Q1(a, c, t.properties[c], e);
	(s === "ol" || s === "ul") && e.listDepth++;
	const u = yc(e, t);
	(s === "ol" || s === "ul") && e.listDepth--, e.schema = o;
	const f = t.position || {
			start: {
				line: null,
				column: null,
				offset: null
			},
			end: {
				line: null,
				column: null,
				offset: null
			}
		},
		p = i.components && so.call(i.components, s) ? i.components[s] : s,
		h = typeof p == "string" || p === zt.Fragment;
	if (!E1.isValidElementType(p)) throw new TypeError(`Component for name \`${s}\` not defined or is not renderable`);
	if (a.key = [s, f.start.line, f.start.column, n].join("-"), s === "a" && i.linkTarget && (a.target = typeof i.linkTarget == "function" ? i.linkTarget(String(a.href || ""), t.children, typeof a.title == "string" ? a.title : null) : i.linkTarget), s === "a" && i.transformLinkUri && (a.href = i.transformLinkUri(String(a.href || ""), t.children, typeof a.title == "string" ? a.title : null)), !h && s === "code" && r.type === "element" && r.tagName !== "pre" && (a.inline = !0), !h && (s === "h1" || s === "h2" || s === "h3" || s === "h4" || s === "h5" || s === "h6") && (a.level = Number.parseInt(s.charAt(1), 10)), s === "img" && i.transformImageUri && (a.src = i.transformImageUri(String(a.src || ""), String(a.alt || ""), typeof a.title == "string" ? a.title : null)), !h && s === "li" && r.type === "element") {
		const d = W1(t);
		a.checked = d && d.properties ? Boolean(d.properties.checked) : null, a.index = ki(r, t), a.ordered = r.tagName === "ol"
	}
	return !h && (s === "ol" || s === "ul") && (a.ordered = s === "ol", a.depth = e.listDepth), (s === "td" || s === "th") && (a.align && (a.style || (a.style = {}), a.style.textAlign = a.align, delete a.align), h || (a.isHeader = s === "th")), !h && s === "tr" && r.type === "element" && (a.isHeader = Boolean(r.tagName === "thead")), i.sourcePos && (a["data-sourcepos"] = G1(f)), !h && i.rawSourcePos && (a.sourcePosition = t.position), !h && i.includeElementIndex && (a.index = ki(r, t), a.siblingCount = ki(r)), h || (a.node = t), u.length > 0 ? zt.createElement(p, a, u) : zt.createElement(p, a)
}

function W1(e) {
	let t = -1;
	for (; ++t < e.children.length;) {
		const n = e.children[t];
		if (n.type === "element" && n.tagName === "input") return n
	}
	return null
}

function ki(e, t) {
	let n = -1,
		r = 0;
	for (; ++n < e.children.length && e.children[n] !== t;) e.children[n].type === "element" && r++;
	return r
}

function Q1(e, t, n, r) {
	const i = u1(r.schema, t);
	let o = n;
	o == null || o !== o || (Array.isArray(o) && (o = i.commaSeparated ? O1(o) : A1(o)), i.property === "style" && typeof o == "string" && (o = Y1(o)), i.space && i.property ? e[so.call(ja, i.property) ? ja[i.property] : i.property] = o : i.attribute && (e[i.attribute] = o))
}

function Y1(e) {
	const t = {};
	try {
		$1(e, n)
	} catch {}
	return t;

	function n(r, i) {
		const o = r.slice(0, 4) === "-ms-" ? `ms-${r.slice(4)}` : r;
		t[o.replace(/-([a-z])/g, X1)] = i
	}
}

function X1(e, t) {
	return t.toUpperCase()
}

function G1(e) {
	return [e.start.line, ":", e.start.column, "-", e.end.line, ":", e.end.column].map(t => String(t)).join("")
}
const qa = {}.hasOwnProperty,
	K1 = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md",
	Zn = {
		plugins: {
			to: "plugins",
			id: "change-plugins-to-remarkplugins"
		},
		renderers: {
			to: "components",
			id: "change-renderers-to-components"
		},
		astPlugins: {
			id: "remove-buggy-html-in-markdown-parser"
		},
		allowDangerousHtml: {
			id: "remove-buggy-html-in-markdown-parser"
		},
		escapeHtml: {
			id: "remove-buggy-html-in-markdown-parser"
		},
		source: {
			to: "children",
			id: "change-source-to-children"
		},
		allowNode: {
			to: "allowElement",
			id: "replace-allownode-allowedtypes-and-disallowedtypes"
		},
		allowedTypes: {
			to: "allowedElements",
			id: "replace-allownode-allowedtypes-and-disallowedtypes"
		},
		disallowedTypes: {
			to: "disallowedElements",
			id: "replace-allownode-allowedtypes-and-disallowedtypes"
		},
		includeNodeIndex: {
			to: "includeElementIndex",
			id: "change-includenodeindex-to-includeelementindex"
		}
	};

function zo(e) {
	for (const o in Zn)
		if (qa.call(Zn, o) && qa.call(e, o)) {
			const s = Zn[o];
			console.warn(`[react-markdown] Warning: please ${s.to?`use \`${s.to}\` instead of`:"remove"} \`${o}\` (see <${K1}#${s.id}> for more info)`), delete Zn[o]
		} const t = sm().use(oy).use(e.remarkPlugins || []).use(Gy, {
			...e.remarkRehypeOptions,
			allowDangerousHtml: !0
		}).use(e.rehypePlugins || []).use(k1, e),
		n = new Au;
	typeof e.children == "string" ? n.value = e.children : e.children !== void 0 && e.children !== null && console.warn(`[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`);
	const r = t.runSync(t.parse(n), n);
	if (r.type !== "root") throw new TypeError("Expected a `root` node");
	let i = zt.createElement(zt.Fragment, {}, yc({
		options: e,
		schema: d1,
		listDepth: 0
	}, r));
	return e.className && (i = zt.createElement("div", {
		className: e.className
	}, i)), i
}
zo.defaultProps = {
	transformLinkUri: Wp
};
zo.propTypes = {
	children: H.string,
	className: H.string,
	allowElement: H.func,
	allowedElements: H.arrayOf(H.string),
	disallowedElements: H.arrayOf(H.string),
	unwrapDisallowed: H.bool,
	remarkPlugins: H.arrayOf(H.oneOfType([H.object, H.func, H.arrayOf(H.oneOfType([H.bool, H.string, H.object, H.func, H.arrayOf(H.any)]))])),
	rehypePlugins: H.arrayOf(H.oneOfType([H.object, H.func, H.arrayOf(H.oneOfType([H.bool, H.string, H.object, H.func, H.arrayOf(H.any)]))])),
	sourcePos: H.bool,
	rawSourcePos: H.bool,
	skipHtml: H.bool,
	includeElementIndex: H.bool,
	transformLinkUri: H.oneOfType([H.func, H.bool]),
	linkTarget: H.oneOfType([H.func, H.string]),
	transformImageUri: H.func,
	components: H.object
};
const Z1 = {
		tokenize: r0,
		partial: !0
	},
	bc = {
		tokenize: i0,
		partial: !0
	},
	vc = {
		tokenize: o0,
		partial: !0
	},
	Vt = {
		tokenize: a0,
		partial: !0
	},
	_c = {
		tokenize: s0,
		partial: !0
	},
	wc = {
		tokenize: t0,
		previous: Cc
	},
	xc = {
		tokenize: n0,
		previous: jo
	},
	ht = {
		tokenize: e0,
		previous: Sc
	},
	at = {},
	J1 = {
		text: at
	};
let xt = 48;
for (; xt < 123;) at[xt] = ht, xt++, xt === 58 ? xt = 65 : xt === 91 && (xt = 97);
at[43] = ht;
at[45] = ht;
at[46] = ht;
at[95] = ht;
at[72] = [ht, xc];
at[104] = [ht, xc];
at[87] = [ht, wc];
at[119] = [ht, wc];

function e0(e, t, n) {
	const r = this;
	let i, o;
	return s;

	function s(h) {
		return !Wa(h) || !Sc(r.previous) || Bo(r.events) ? n(h) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), a(h))
	}

	function a(h) {
		return Wa(h) ? (e.consume(h), a) : h === 64 ? (e.consume(h), l) : n(h)
	}

	function l(h) {
		return h === 46 ? e.check(Vt, p, c)(h) : h === 45 || h === 95 ? e.check(Vt, n, u)(h) : Se(h) ? (!o && kr(h) && (o = !0), e.consume(h), l) : p(h)
	}

	function c(h) {
		return e.consume(h), i = !0, o = void 0, l
	}

	function u(h) {
		return e.consume(h), f
	}

	function f(h) {
		return h === 46 ? e.check(Vt, n, c)(h) : l(h)
	}

	function p(h) {
		return i && !o ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(h)) : n(h)
	}
}

function t0(e, t, n) {
	const r = this;
	return i;

	function i(s) {
		return s !== 87 && s !== 119 || !Cc(r.previous) || Bo(r.events) ? n(s) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(Z1, e.attempt(bc, e.attempt(vc, o), n), n)(s))
	}

	function o(s) {
		return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(s)
	}
}

function n0(e, t, n) {
	const r = this;
	return i;

	function i(d) {
		return d !== 72 && d !== 104 || !jo(r.previous) || Bo(r.events) ? n(d) : (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), e.consume(d), o)
	}

	function o(d) {
		return d === 84 || d === 116 ? (e.consume(d), s) : n(d)
	}

	function s(d) {
		return d === 84 || d === 116 ? (e.consume(d), a) : n(d)
	}

	function a(d) {
		return d === 80 || d === 112 ? (e.consume(d), l) : n(d)
	}

	function l(d) {
		return d === 83 || d === 115 ? (e.consume(d), c) : c(d)
	}

	function c(d) {
		return d === 58 ? (e.consume(d), u) : n(d)
	}

	function u(d) {
		return d === 47 ? (e.consume(d), f) : n(d)
	}

	function f(d) {
		return d === 47 ? (e.consume(d), p) : n(d)
	}

	function p(d) {
		return d === null || Dn(d) || zr(d) || Nr(d) ? n(d) : e.attempt(bc, e.attempt(vc, h), n)(d)
	}

	function h(d) {
		return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(d)
	}
}

function r0(e, t, n) {
	return r;

	function r(l) {
		return e.consume(l), i
	}

	function i(l) {
		return l === 87 || l === 119 ? (e.consume(l), o) : n(l)
	}

	function o(l) {
		return l === 87 || l === 119 ? (e.consume(l), s) : n(l)
	}

	function s(l) {
		return l === 46 ? (e.consume(l), a) : n(l)
	}

	function a(l) {
		return l === null || U(l) ? n(l) : t(l)
	}
}

function i0(e, t, n) {
	let r, i;
	return o;

	function o(l) {
		return l === 38 ? e.check(_c, a, s)(l) : l === 46 || l === 95 ? e.check(Vt, a, s)(l) : l === null || Dn(l) || zr(l) || l !== 45 && Nr(l) ? a(l) : (e.consume(l), o)
	}

	function s(l) {
		return l === 46 ? (i = r, r = void 0, e.consume(l), o) : (l === 95 && (r = !0), e.consume(l), o)
	}

	function a(l) {
		return !i && !r ? t(l) : n(l)
	}
}

function o0(e, t) {
	let n = 0;
	return r;

	function r(s) {
		return s === 38 ? e.check(_c, t, i)(s) : (s === 40 && n++, s === 41 ? e.check(Vt, o, i)(s) : No(s) ? t(s) : kc(s) ? e.check(Vt, t, i)(s) : (e.consume(s), r))
	}

	function i(s) {
		return e.consume(s), r
	}

	function o(s) {
		return n--, n < 0 ? t(s) : i(s)
	}
}

function s0(e, t, n) {
	return r;

	function r(s) {
		return e.consume(s), i
	}

	function i(s) {
		return $e(s) ? (e.consume(s), i) : s === 59 ? (e.consume(s), o) : n(s)
	}

	function o(s) {
		return No(s) ? t(s) : n(s)
	}
}

function a0(e, t, n) {
	return r;

	function r(o) {
		return e.consume(o), i
	}

	function i(o) {
		return kc(o) ? (e.consume(o), i) : No(o) ? t(o) : n(o)
	}
}

function kc(e) {
	return e === 33 || e === 34 || e === 39 || e === 41 || e === 42 || e === 44 || e === 46 || e === 58 || e === 59 || e === 60 || e === 63 || e === 95 || e === 126
}

function No(e) {
	return e === null || e === 60 || ce(e)
}

function Wa(e) {
	return e === 43 || e === 45 || e === 46 || e === 95 || Se(e)
}

function Cc(e) {
	return e === null || e === 40 || e === 42 || e === 95 || e === 126 || ce(e)
}

function jo(e) {
	return e === null || !$e(e)
}

function Sc(e) {
	return e !== 47 && jo(e)
}

function Bo(e) {
	let t = e.length,
		n = !1;
	for (; t--;) {
		const r = e[t][1];
		if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
			n = !0;
			break
		}
		if (r._gfmAutolinkLiteralWalkedInto) {
			n = !1;
			break
		}
	}
	return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n
}
const l0 = {
	tokenize: g0,
	partial: !0
};

function u0() {
	return {
		document: {
			[91]: {
				tokenize: h0,
				continuation: {
					tokenize: p0
				},
				exit: m0
			}
		},
		text: {
			[91]: {
				tokenize: d0
			},
			[93]: {
				add: "after",
				tokenize: c0,
				resolveTo: f0
			}
		}
	}
}

function c0(e, t, n) {
	const r = this;
	let i = r.events.length;
	const o = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
	let s;
	for (; i--;) {
		const l = r.events[i][1];
		if (l.type === "labelImage") {
			s = l;
			break
		}
		if (l.type === "gfmFootnoteCall" || l.type === "labelLink" || l.type === "label" || l.type === "image" || l.type === "link") break
	}
	return a;

	function a(l) {
		if (!s || !s._balanced) return n(l);
		const c = Ge(r.sliceSerialize({
			start: s.end,
			end: r.now()
		}));
		return c.charCodeAt(0) !== 94 || !o.includes(c.slice(1)) ? n(l) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(l), e.exit("gfmFootnoteCallLabelMarker"), t(l))
	}
}

function f0(e, t) {
	let n = e.length;
	for (; n--;)
		if (e[n][1].type === "labelImage" && e[n][0] === "enter") {
			e[n][1];
			break
		} e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
	const r = {
			type: "gfmFootnoteCall",
			start: Object.assign({}, e[n + 3][1].start),
			end: Object.assign({}, e[e.length - 1][1].end)
		},
		i = {
			type: "gfmFootnoteCallMarker",
			start: Object.assign({}, e[n + 3][1].end),
			end: Object.assign({}, e[n + 3][1].end)
		};
	i.end.column++, i.end.offset++, i.end._bufferIndex++;
	const o = {
			type: "gfmFootnoteCallString",
			start: Object.assign({}, i.end),
			end: Object.assign({}, e[e.length - 1][1].start)
		},
		s = {
			type: "chunkString",
			contentType: "string",
			start: Object.assign({}, o.start),
			end: Object.assign({}, o.end)
		},
		a = [e[n + 1], e[n + 2],
			["enter", r, t], e[n + 3], e[n + 4],
			["enter", i, t],
			["exit", i, t],
			["enter", o, t],
			["enter", s, t],
			["exit", s, t],
			["exit", o, t], e[e.length - 2], e[e.length - 1],
			["exit", r, t]
		];
	return e.splice(n, e.length - n + 1, ...a), e
}

function d0(e, t, n) {
	const r = this,
		i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
	let o = 0,
		s;
	return a;

	function a(p) {
		return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(p), e.exit("gfmFootnoteCallLabelMarker"), l
	}

	function l(p) {
		return p !== 94 ? n(p) : (e.enter("gfmFootnoteCallMarker"), e.consume(p), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", c)
	}

	function c(p) {
		let h;
		return p === null || p === 91 || o++ > 999 ? n(p) : p === 93 ? s ? (e.exit("chunkString"), h = e.exit("gfmFootnoteCallString"), i.includes(Ge(r.sliceSerialize(h))) ? f(p) : n(p)) : n(p) : (e.consume(p), ce(p) || (s = !0), p === 92 ? u : c)
	}

	function u(p) {
		return p === 91 || p === 92 || p === 93 ? (e.consume(p), o++, c) : c(p)
	}

	function f(p) {
		return e.enter("gfmFootnoteCallLabelMarker"), e.consume(p), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t
	}
}

function h0(e, t, n) {
	const r = this,
		i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
	let o, s = 0,
		a;
	return l;

	function l(m) {
		return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionLabelMarker"), c
	}

	function c(m) {
		return m === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), u) : n(m)
	}

	function u(m) {
		let g;
		return m === null || m === 91 || s > 999 ? n(m) : m === 93 ? a ? (g = e.exit("gfmFootnoteDefinitionLabelString"), o = Ge(r.sliceSerialize(g)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), h) : n(m) : U(m) ? (e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), s++, u) : (e.enter("chunkString").contentType = "string", f(m))
	}

	function f(m) {
		return m === null || U(m) || m === 91 || m === 93 || s > 999 ? (e.exit("chunkString"), u(m)) : (ce(m) || (a = !0), s++, e.consume(m), m === 92 ? p : f)
	}

	function p(m) {
		return m === 91 || m === 92 || m === 93 ? (e.consume(m), s++, f) : f(m)
	}

	function h(m) {
		return m === 58 ? (e.enter("definitionMarker"), e.consume(m), e.exit("definitionMarker"), Y(e, d, "gfmFootnoteDefinitionWhitespace")) : n(m)
	}

	function d(m) {
		return i.includes(o) || i.push(o), t(m)
	}
}

function p0(e, t, n) {
	return e.check($n, t, e.attempt(l0, t, n))
}

function m0(e) {
	e.exit("gfmFootnoteDefinition")
}

function g0(e, t, n) {
	const r = this;
	return Y(e, i, "gfmFootnoteDefinitionIndent", 4 + 1);

	function i(o) {
		const s = r.events[r.events.length - 1];
		return s && s[1].type === "gfmFootnoteDefinitionIndent" && s[2].sliceSerialize(s[1], !0).length === 4 ? t(o) : n(o)
	}
}

function y0(e = {}) {
	let t = e.singleTilde;
	const n = {
		tokenize: i,
		resolveAll: r
	};
	return t == null && (t = !0), {
		text: {
			[126]: n
		},
		insideSpan: {
			null: [n]
		},
		attentionMarkers: {
			null: [126]
		}
	};

	function r(o, s) {
		let a = -1;
		for (; ++a < o.length;)
			if (o[a][0] === "enter" && o[a][1].type === "strikethroughSequenceTemporary" && o[a][1]._close) {
				let l = a;
				for (; l--;)
					if (o[l][0] === "exit" && o[l][1].type === "strikethroughSequenceTemporary" && o[l][1]._open && o[a][1].end.offset - o[a][1].start.offset === o[l][1].end.offset - o[l][1].start.offset) {
						o[a][1].type = "strikethroughSequence", o[l][1].type = "strikethroughSequence";
						const c = {
								type: "strikethrough",
								start: Object.assign({}, o[l][1].start),
								end: Object.assign({}, o[a][1].end)
							},
							u = {
								type: "strikethroughText",
								start: Object.assign({}, o[l][1].end),
								end: Object.assign({}, o[a][1].start)
							},
							f = [
								["enter", c, s],
								["enter", o[l][1], s],
								["exit", o[l][1], s],
								["enter", u, s]
							];
						De(f, f.length, 0, jr(s.parser.constructs.insideSpan.null, o.slice(l + 1, a), s)), De(f, f.length, 0, [
							["exit", u, s],
							["enter", o[a][1], s],
							["exit", o[a][1], s],
							["exit", c, s]
						]), De(o, l - 1, a - l + 3, f), a = l + f.length - 2;
						break
					}
			} for (a = -1; ++a < o.length;) o[a][1].type === "strikethroughSequenceTemporary" && (o[a][1].type = "data");
		return o
	}

	function i(o, s, a) {
		const l = this.previous,
			c = this.events;
		let u = 0;
		return f;

		function f(h) {
			return l === 126 && c[c.length - 1][1].type !== "characterEscape" ? a(h) : (o.enter("strikethroughSequenceTemporary"), p(h))
		}

		function p(h) {
			const d = Cr(l);
			if (h === 126) return u > 1 ? a(h) : (o.consume(h), u++, p);
			if (u < 2 && !t) return a(h);
			const m = o.exit("strikethroughSequenceTemporary"),
				g = Cr(h);
			return m._open = !g || g === 2 && Boolean(d), m._close = !d || d === 2 && Boolean(g), s(h)
		}
	}
}
const b0 = {
		flow: {
			null: {
				tokenize: _0,
				resolve: v0
			}
		}
	},
	Qa = {
		tokenize: w0,
		partial: !0
	};

function v0(e, t) {
	let n = -1,
		r, i, o, s, a, l, c;
	for (; ++n < e.length;) {
		const u = e[n][1];
		if (o && (u.type === "temporaryTableCellContent" && (s = s || n, a = n), (u.type === "tableCellDivider" || u.type === "tableRow") && a)) {
			const f = {
					type: "tableContent",
					start: e[s][1].start,
					end: e[a][1].end
				},
				p = {
					type: "chunkText",
					start: f.start,
					end: f.end,
					contentType: "text"
				};
			e.splice(s, a - s + 1, ["enter", f, t], ["enter", p, t], ["exit", p, t], ["exit", f, t]), n -= a - s - 3, s = void 0, a = void 0
		}
		if (e[n][0] === "exit" && l !== void 0 && l + (c ? 0 : 1) < n && (u.type === "tableCellDivider" || u.type === "tableRow" && (l + 3 < n || e[l][1].type !== "whitespace"))) {
			const f = {
				type: i ? "tableDelimiter" : r ? "tableHeader" : "tableData",
				start: e[l][1].start,
				end: e[n][1].end
			};
			e.splice(n + (u.type === "tableCellDivider" ? 1 : 0), 0, ["exit", f, t]), e.splice(l, 0, ["enter", f, t]), n += 2, l = n + 1, c = !0
		}
		u.type === "tableRow" && (o = e[n][0] === "enter", o && (l = n + 1, c = !1)), u.type === "tableDelimiterRow" && (i = e[n][0] === "enter", i && (l = n + 1, c = !1)), u.type === "tableHead" && (r = e[n][0] === "enter")
	}
	return e
}

function _0(e, t, n) {
	const r = this,
		i = [];
	let o = 0,
		s, a;
	return l;

	function l(x) {
		return e.enter("table")._align = i, e.enter("tableHead"), e.enter("tableRow"), x === 124 ? c(x) : (o++, e.enter("temporaryTableCellContent"), p(x))
	}

	function c(x) {
		return e.enter("tableCellDivider"), e.consume(x), e.exit("tableCellDivider"), s = !0, u
	}

	function u(x) {
		return x === null || U(x) ? d(x) : te(x) ? (e.enter("whitespace"), e.consume(x), f) : (s && (s = void 0, o++), x === 124 ? c(x) : (e.enter("temporaryTableCellContent"), p(x)))
	}

	function f(x) {
		return te(x) ? (e.consume(x), f) : (e.exit("whitespace"), u(x))
	}

	function p(x) {
		return x === null || x === 124 || ce(x) ? (e.exit("temporaryTableCellContent"), u(x)) : (e.consume(x), x === 92 ? h : p)
	}

	function h(x) {
		return x === 92 || x === 124 ? (e.consume(x), p) : p(x)
	}

	function d(x) {
		if (x === null) return n(x);
		e.exit("tableRow"), e.exit("tableHead");
		const X = r.interrupt;
		return r.interrupt = !0, e.attempt({
			tokenize: N,
			partial: !0
		}, function($) {
			return r.interrupt = X, e.enter("tableDelimiterRow"), m($)
		}, function($) {
			return r.interrupt = X, n($)
		})(x)
	}

	function m(x) {
		return x === null || U(x) ? C(x) : te(x) ? (e.enter("whitespace"), e.consume(x), g) : x === 45 ? (e.enter("tableDelimiterFiller"), e.consume(x), a = !0, i.push("none"), y) : x === 58 ? (e.enter("tableDelimiterAlignment"), e.consume(x), e.exit("tableDelimiterAlignment"), i.push("left"), k) : x === 124 ? (e.enter("tableCellDivider"), e.consume(x), e.exit("tableCellDivider"), m) : n(x)
	}

	function g(x) {
		return te(x) ? (e.consume(x), g) : (e.exit("whitespace"), m(x))
	}

	function y(x) {
		return x === 45 ? (e.consume(x), y) : (e.exit("tableDelimiterFiller"), x === 58 ? (e.enter("tableDelimiterAlignment"), e.consume(x), e.exit("tableDelimiterAlignment"), i[i.length - 1] = i[i.length - 1] === "left" ? "center" : "right", w) : m(x))
	}

	function k(x) {
		return x === 45 ? (e.enter("tableDelimiterFiller"), e.consume(x), a = !0, y) : n(x)
	}

	function w(x) {
		return x === null || U(x) ? C(x) : te(x) ? (e.enter("whitespace"), e.consume(x), g) : x === 124 ? (e.enter("tableCellDivider"), e.consume(x), e.exit("tableCellDivider"), m) : n(x)
	}

	function C(x) {
		return e.exit("tableDelimiterRow"), !a || o !== i.length ? n(x) : x === null ? E(x) : e.check(Qa, E, e.attempt({
			tokenize: N,
			partial: !0
		}, Y(e, b, "linePrefix", 4), E))(x)
	}

	function E(x) {
		return e.exit("table"), t(x)
	}

	function b(x) {
		return e.enter("tableBody"), A(x)
	}

	function A(x) {
		return e.enter("tableRow"), x === 124 ? R(x) : (e.enter("temporaryTableCellContent"), O(x))
	}

	function R(x) {
		return e.enter("tableCellDivider"), e.consume(x), e.exit("tableCellDivider"), F
	}

	function F(x) {
		return x === null || U(x) ? B(x) : te(x) ? (e.enter("whitespace"), e.consume(x), z) : x === 124 ? R(x) : (e.enter("temporaryTableCellContent"), O(x))
	}

	function z(x) {
		return te(x) ? (e.consume(x), z) : (e.exit("whitespace"), F(x))
	}

	function O(x) {
		return x === null || x === 124 || ce(x) ? (e.exit("temporaryTableCellContent"), F(x)) : (e.consume(x), x === 92 ? L : O)
	}

	function L(x) {
		return x === 92 || x === 124 ? (e.consume(x), O) : O(x)
	}

	function B(x) {
		return e.exit("tableRow"), x === null ? D(x) : e.check(Qa, D, e.attempt({
			tokenize: N,
			partial: !0
		}, Y(e, A, "linePrefix", 4), D))(x)
	}

	function D(x) {
		return e.exit("tableBody"), E(x)
	}

	function N(x, X, $) {
		return Z;

		function Z(_) {
			return x.enter("lineEnding"), x.consume(_), x.exit("lineEnding"), Y(x, K, "linePrefix")
		}

		function K(_) {
			if (r.parser.lazy[r.now().line] || _ === null || U(_)) return $(_);
			const v = r.events[r.events.length - 1];
			return !r.parser.constructs.disable.null.includes("codeIndented") && v && v[1].type === "linePrefix" && v[2].sliceSerialize(v[1], !0).length >= 4 ? $(_) : (r._gfmTableDynamicInterruptHack = !0, x.check(r.parser.constructs.flow, function(ze) {
				return r._gfmTableDynamicInterruptHack = !1, $(ze)
			}, function(ze) {
				return r._gfmTableDynamicInterruptHack = !1, X(ze)
			})(_))
		}
	}
}

function w0(e, t, n) {
	let r = 0;
	return i;

	function i(s) {
		return e.enter("check"), e.consume(s), o
	}

	function o(s) {
		return s === -1 || s === 32 ? (e.consume(s), r++, r === 4 ? t : o) : s === null || ce(s) ? t(s) : n(s)
	}
}
const x0 = {
		tokenize: C0
	},
	k0 = {
		text: {
			[91]: x0
		}
	};

function C0(e, t, n) {
	const r = this;
	return i;

	function i(a) {
		return r.previous !== null || !r._gfmTasklistFirstContentOfListItem ? n(a) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(a), e.exit("taskListCheckMarker"), o)
	}

	function o(a) {
		return ce(a) ? (e.enter("taskListCheckValueUnchecked"), e.consume(a), e.exit("taskListCheckValueUnchecked"), s) : a === 88 || a === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(a), e.exit("taskListCheckValueChecked"), s) : n(a)
	}

	function s(a) {
		return a === 93 ? (e.enter("taskListCheckMarker"), e.consume(a), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), e.check({
			tokenize: S0
		}, t, n)) : n(a)
	}
}

function S0(e, t, n) {
	const r = this;
	return Y(e, i, "whitespace");

	function i(o) {
		const s = r.events[r.events.length - 1];
		return (s && s[1].type === "whitespace" || U(o)) && o !== null ? t(o) : n(o)
	}
}

function E0(e) {
	return Pu([J1, u0(), y0(e), b0, k0])
}

function Ya(e, t) {
	const n = String(e);
	if (typeof t != "string") throw new TypeError("Expected character");
	let r = 0,
		i = n.indexOf(t);
	for (; i !== -1;) r++, i = n.indexOf(t, i + t.length);
	return r
}

function T0(e) {
	if (typeof e != "string") throw new TypeError("Expected a string");
	return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")
}
const Uo = function(e) {
	if (e == null) return I0;
	if (typeof e == "string") return M0(e);
	if (typeof e == "object") return Array.isArray(e) ? A0(e) : O0(e);
	if (typeof e == "function") return ei(e);
	throw new Error("Expected function, string, or object as test")
};

function A0(e) {
	const t = [];
	let n = -1;
	for (; ++n < e.length;) t[n] = Uo(e[n]);
	return ei(r);

	function r(...i) {
		let o = -1;
		for (; ++o < t.length;)
			if (t[o].call(this, ...i)) return !0;
		return !1
	}
}

function O0(e) {
	return ei(t);

	function t(n) {
		let r;
		for (r in e)
			if (n[r] !== e[r]) return !1;
		return !0
	}
}

function M0(e) {
	return ei(t);

	function t(n) {
		return n && n.type === e
	}
}

function ei(e) {
	return t;

	function t(...n) {
		return Boolean(e.call(this, ...n))
	}
}

function I0() {
	return !0
}
const R0 = !0,
	P0 = "skip",
	Xa = !1,
	L0 = function(e, t, n, r) {
		typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null);
		const i = Uo(t),
			o = r ? -1 : 1;
		s(e, null, [])();

		function s(a, l, c) {
			const u = typeof a == "object" && a !== null ? a : {};
			let f;
			return typeof u.type == "string" && (f = typeof u.tagName == "string" ? u.tagName : typeof u.name == "string" ? u.name : void 0, Object.defineProperty(p, "name", {
				value: "node (" + (u.type + (f ? "<" + f + ">" : "")) + ")"
			})), p;

			function p() {
				let h = [],
					d, m, g;
				if ((!t || i(a, l, c[c.length - 1] || null)) && (h = D0(n(a, c)), h[0] === Xa)) return h;
				if (a.children && h[0] !== P0)
					for (m = (r ? a.children.length : -1) + o, g = c.concat(a); m > -1 && m < a.children.length;) {
						if (d = s(a.children[m], m, g)(), d[0] === Xa) return d;
						m = typeof d[1] == "number" ? d[1] : m + o
					}
				return h
			}
		}
	};

function D0(e) {
	return Array.isArray(e) ? e : typeof e == "number" ? [R0, e] : [e]
}
const F0 = {}.hasOwnProperty,
	z0 = function(e, t, n, r) {
		let i, o;
		typeof t == "string" || t instanceof RegExp ? (o = [
			[t, n]
		], i = r) : (o = t, i = n), i || (i = {});
		const s = Uo(i.ignore || []),
			a = N0(o);
		let l = -1;
		for (; ++l < a.length;) L0(e, "text", c);
		return e;

		function c(f, p) {
			let h = -1,
				d;
			for (; ++h < p.length;) {
				const m = p[h];
				if (s(m, d ? d.children.indexOf(m) : void 0, d)) return;
				d = m
			}
			if (d) return u(f, p)
		}

		function u(f, p) {
			const h = p[p.length - 1],
				d = a[l][0],
				m = a[l][1];
			let g = 0;
			const y = h.children.indexOf(f);
			let k = !1,
				w = [],
				C;
			d.lastIndex = 0;
			let E = d.exec(f.value);
			for (; E;) {
				C = E.index;
				const b = {
					index: E.index,
					input: E.input,
					stack: [...p, f]
				};
				let A = m(...E, b);
				if (typeof A == "string" && (A = A.length > 0 ? {
						type: "text",
						value: A
					} : void 0), A !== !1 && (g !== C && w.push({
						type: "text",
						value: f.value.slice(g, C)
					}), Array.isArray(A) ? w.push(...A) : A && w.push(A), g = C + E[0].length, k = !0), !d.global) break;
				E = d.exec(f.value)
			}
			return k ? (g < f.value.length && w.push({
				type: "text",
				value: f.value.slice(g)
			}), h.children.splice(y, 1, ...w)) : w = [f], y + w.length
		}
	};

function N0(e) {
	const t = [];
	if (typeof e != "object") throw new TypeError("Expected array or object as schema");
	if (Array.isArray(e)) {
		let n = -1;
		for (; ++n < e.length;) t.push([Ga(e[n][0]), Ka(e[n][1])])
	} else {
		let n;
		for (n in e) F0.call(e, n) && t.push([Ga(n), Ka(e[n])])
	}
	return t
}

function Ga(e) {
	return typeof e == "string" ? new RegExp(T0(e), "g") : e
}

function Ka(e) {
	return typeof e == "function" ? e : () => e
}
const Ci = "phrasing",
	Si = ["autolink", "link", "image", "label"],
	j0 = {
		transforms: [W0],
		enter: {
			literalAutolink: U0,
			literalAutolinkEmail: Ei,
			literalAutolinkHttp: Ei,
			literalAutolinkWww: Ei
		},
		exit: {
			literalAutolink: q0,
			literalAutolinkEmail: H0,
			literalAutolinkHttp: V0,
			literalAutolinkWww: $0
		}
	},
	B0 = {
		unsafe: [{
			character: "@",
			before: "[+\\-.\\w]",
			after: "[\\-.\\w]",
			inConstruct: Ci,
			notInConstruct: Si
		}, {
			character: ".",
			before: "[Ww]",
			after: "[\\-.\\w]",
			inConstruct: Ci,
			notInConstruct: Si
		}, {
			character: ":",
			before: "[ps]",
			after: "\\/",
			inConstruct: Ci,
			notInConstruct: Si
		}]
	};

function U0(e) {
	this.enter({
		type: "link",
		title: null,
		url: "",
		children: []
	}, e)
}

function Ei(e) {
	this.config.enter.autolinkProtocol.call(this, e)
}

function V0(e) {
	this.config.exit.autolinkProtocol.call(this, e)
}

function $0(e) {
	this.config.exit.data.call(this, e);
	const t = this.stack[this.stack.length - 1];
	t.url = "http://" + this.sliceSerialize(e)
}

function H0(e) {
	this.config.exit.autolinkEmail.call(this, e)
}

function q0(e) {
	this.exit(e)
}

function W0(e) {
	z0(e, [
		[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, Q0],
		[/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, Y0]
	], {
		ignore: ["link", "linkReference"]
	})
}

function Q0(e, t, n, r, i) {
	let o = "";
	if (!Ec(i) || (/^w/i.test(t) && (n = t + n, t = "", o = "http://"), !X0(n))) return !1;
	const s = G0(n + r);
	if (!s[0]) return !1;
	const a = {
		type: "link",
		title: null,
		url: o + t + s[0],
		children: [{
			type: "text",
			value: t + s[0]
		}]
	};
	return s[1] ? [a, {
		type: "text",
		value: s[1]
	}] : a
}

function Y0(e, t, n, r) {
	return !Ec(r, !0) || /[_-\d]$/.test(n) ? !1 : {
		type: "link",
		title: null,
		url: "mailto:" + t + "@" + n,
		children: [{
			type: "text",
			value: t + "@" + n
		}]
	}
}

function X0(e) {
	const t = e.split(".");
	return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])))
}

function G0(e) {
	const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
	let n, r, i, o;
	if (t)
		for (e = e.slice(0, t.index), o = t[0], n = o.indexOf(")"), r = Ya(e, "("), i = Ya(e, ")"); n !== -1 && r > i;) e += o.slice(0, n + 1), o = o.slice(n + 1), n = o.indexOf(")"), i++;
	return [e, o]
}

function Ec(e, t) {
	const n = e.input.charCodeAt(e.index - 1);
	return (e.index === 0 || zr(n) || Nr(n)) && (!t || n !== 47)
}

function Za(e) {
	return e.label || !e.identifier ? e.label || "" : Hu(e.identifier)
}

function vt(e) {
	const t = e || {},
		n = t.now || {};
	let r = t.lineShift || 0,
		i = n.line || 1,
		o = n.column || 1;
	return {
		move: l,
		current: s,
		shift: a
	};

	function s() {
		return {
			now: {
				line: i,
				column: o
			},
			lineShift: r
		}
	}

	function a(c) {
		r += c
	}

	function l(c = "") {
		const u = c.split(/\r?\n|\r/g),
			f = u[u.length - 1];
		return i += u.length - 1, o = u.length === 1 ? o + f.length : 1 + f.length + r, c
	}
}

function Tc(e, t, n) {
	const r = t.indexStack,
		i = e.children || [],
		o = vt(n),
		s = [];
	let a = -1;
	for (r.push(-1); ++a < i.length;) {
		const c = i[a];
		r[r.length - 1] = a, s.push(o.move(t.handle(c, e, t, {
			before: `
`,
			after: `
`,
			...o.current()
		}))), c.type !== "list" && (t.bulletLastUsed = void 0), a < i.length - 1 && s.push(o.move(l(c, i[a + 1])))
	}
	return r.pop(), s.join("");

	function l(c, u) {
		let f = t.join.length;
		for (; f--;) {
			const p = t.join[f](c, u, e, t);
			if (p === !0 || p === 1) break;
			if (typeof p == "number") return `
`.repeat(1 + p);
			if (p === !1) return `

<!---->

`
		}
		return `

`
	}
}
const K0 = /\r?\n|\r/g;

function Ac(e, t) {
	const n = [];
	let r = 0,
		i = 0,
		o;
	for (; o = K0.exec(e);) s(e.slice(r, o.index)), n.push(o[0]), r = o.index + o[0].length, i++;
	return s(e.slice(r)), n.join("");

	function s(a) {
		n.push(t(a, i, !a))
	}
}

function Oc(e) {
	if (!e._compiled) {
		const t = (e.atBreak ? "[\\r\\n][\\t ]*" : "") + (e.before ? "(?:" + e.before + ")" : "");
		e._compiled = new RegExp((t ? "(" + t + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(e.character) ? "\\" : "") + e.character + (e.after ? "(?:" + e.after + ")" : ""), "g")
	}
	return e._compiled
}

function Z0(e, t) {
	return Ja(e, t.inConstruct, !0) && !Ja(e, t.notInConstruct, !1)
}

function Ja(e, t, n) {
	if (!t) return n;
	typeof t == "string" && (t = [t]);
	let r = -1;
	for (; ++r < t.length;)
		if (e.includes(t[r])) return !0;
	return !1
}

function el(e, t, n) {
	const r = (n.before || "") + (t || "") + (n.after || ""),
		i = [],
		o = [],
		s = {};
	let a = -1;
	for (; ++a < e.unsafe.length;) {
		const u = e.unsafe[a];
		if (!Z0(e.stack, u)) continue;
		const f = Oc(u);
		let p;
		for (; p = f.exec(r);) {
			const h = "before" in u || Boolean(u.atBreak),
				d = "after" in u,
				m = p.index + (h ? p[1].length : 0);
			i.includes(m) ? (s[m].before && !h && (s[m].before = !1), s[m].after && !d && (s[m].after = !1)) : (i.push(m), s[m] = {
				before: h,
				after: d
			})
		}
	}
	i.sort(J0);
	let l = n.before ? n.before.length : 0;
	const c = r.length - (n.after ? n.after.length : 0);
	for (a = -1; ++a < i.length;) {
		const u = i[a];
		u < l || u >= c || u + 1 < c && i[a + 1] === u + 1 && s[u].after && !s[u + 1].before && !s[u + 1].after || i[a - 1] === u - 1 && s[u].before && !s[u - 1].before && !s[u - 1].after || (l !== u && o.push(tl(r.slice(l, u), "\\")), l = u, /[!-/:-@[-`{-~]/.test(r.charAt(u)) && (!n.encode || !n.encode.includes(r.charAt(u))) ? o.push("\\") : (o.push("&#x" + r.charCodeAt(u).toString(16).toUpperCase() + ";"), l++))
	}
	return o.push(tl(r.slice(l, c), n.after)), o.join("")
}

function J0(e, t) {
	return e - t
}

function tl(e, t) {
	const n = /\\(?=[!-/:-@[-`{-~])/g,
		r = [],
		i = [],
		o = e + t;
	let s = -1,
		a = 0,
		l;
	for (; l = n.exec(o);) r.push(l.index);
	for (; ++s < r.length;) a !== r[s] && i.push(e.slice(a, r[s])), i.push("\\"), a = r[s];
	return i.push(e.slice(a)), i.join("")
}

function eb() {
	return {
		enter: {
			gfmFootnoteDefinition: e,
			gfmFootnoteDefinitionLabelString: t,
			gfmFootnoteCall: i,
			gfmFootnoteCallString: o
		},
		exit: {
			gfmFootnoteDefinition: r,
			gfmFootnoteDefinitionLabelString: n,
			gfmFootnoteCall: a,
			gfmFootnoteCallString: s
		}
	};

	function e(l) {
		this.enter({
			type: "footnoteDefinition",
			identifier: "",
			label: "",
			children: []
		}, l)
	}

	function t() {
		this.buffer()
	}

	function n(l) {
		const c = this.resume(),
			u = this.stack[this.stack.length - 1];
		u.label = c, u.identifier = Ge(this.sliceSerialize(l)).toLowerCase()
	}

	function r(l) {
		this.exit(l)
	}

	function i(l) {
		this.enter({
			type: "footnoteReference",
			identifier: "",
			label: ""
		}, l)
	}

	function o() {
		this.buffer()
	}

	function s(l) {
		const c = this.resume(),
			u = this.stack[this.stack.length - 1];
		u.label = c, u.identifier = Ge(this.sliceSerialize(l)).toLowerCase()
	}

	function a(l) {
		this.exit(l)
	}
}

function tb() {
	return e.peek = t, {
		unsafe: [{
			character: "[",
			inConstruct: ["phrasing", "label", "reference"]
		}],
		handlers: {
			footnoteDefinition: n,
			footnoteReference: e
		}
	};

	function e(r, i, o, s) {
		const a = vt(s);
		let l = a.move("[^");
		const c = o.enter("footnoteReference"),
			u = o.enter("reference");
		return l += a.move(el(o, Za(r), {
			...a.current(),
			before: l,
			after: "]"
		})), u(), c(), l += a.move("]"), l
	}

	function t() {
		return "["
	}

	function n(r, i, o, s) {
		const a = vt(s);
		let l = a.move("[^");
		const c = o.enter("footnoteDefinition"),
			u = o.enter("label");
		return l += a.move(el(o, Za(r), {
			...a.current(),
			before: l,
			after: "]"
		})), u(), l += a.move("]:" + (r.children && r.children.length > 0 ? " " : "")), a.shift(4), l += a.move(Ac(Tc(r, o, a.current()), f)), c(), l;

		function f(p, h, d) {
			return h ? (d ? "" : "    ") + p : p
		}
	}
}

function Mc(e, t, n) {
	const r = t.indexStack,
		i = e.children || [],
		o = [];
	let s = -1,
		a = n.before;
	r.push(-1);
	let l = vt(n);
	for (; ++s < i.length;) {
		const c = i[s];
		let u;
		if (r[r.length - 1] = s, s + 1 < i.length) {
			let f = t.handle.handlers[i[s + 1].type];
			f && f.peek && (f = f.peek), u = f ? f(i[s + 1], e, t, {
				before: "",
				after: "",
				...l.current()
			}).charAt(0) : ""
		} else u = n.after;
		o.length > 0 && (a === "\r" || a === `
`) && c.type === "html" && (o[o.length - 1] = o[o.length - 1].replace(/(\r?\n|\r)$/, " "), a = " ", l = vt(n), l.move(o.join(""))), o.push(l.move(t.handle(c, e, t, {
			...l.current(),
			before: a,
			after: u
		}))), a = o[o.length - 1].slice(-1)
	}
	return r.pop(), o.join("")
}
const nb = {
		canContainEols: ["delete"],
		enter: {
			strikethrough: ib
		},
		exit: {
			strikethrough: ob
		}
	},
	rb = {
		unsafe: [{
			character: "~",
			inConstruct: "phrasing"
		}],
		handlers: {
			delete: Ic
		}
	};
Ic.peek = sb;

function ib(e) {
	this.enter({
		type: "delete",
		children: []
	}, e)
}

function ob(e) {
	this.exit(e)
}

function Ic(e, t, n, r) {
	const i = vt(r),
		o = n.enter("emphasis");
	let s = i.move("~~");
	return s += Mc(e, n, {
		...i.current(),
		before: s,
		after: "~"
	}), s += i.move("~~"), o(), s
}

function sb() {
	return "~"
}
Rc.peek = ab;

function Rc(e, t, n) {
	let r = e.value || "",
		i = "`",
		o = -1;
	for (; new RegExp("(^|[^`])" + i + "([^`]|$)").test(r);) i += "`";
	for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++o < n.unsafe.length;) {
		const s = n.unsafe[o],
			a = Oc(s);
		let l;
		if (!!s.atBreak)
			for (; l = a.exec(r);) {
				let c = l.index;
				r.charCodeAt(c) === 10 && r.charCodeAt(c - 1) === 13 && c--, r = r.slice(0, c) + " " + r.slice(l.index + 1)
			}
	}
	return i + r + i
}

function ab() {
	return "`"
}

function lb(e, t = {}) {
	const n = (t.align || []).concat(),
		r = t.stringLength || cb,
		i = [],
		o = [],
		s = [],
		a = [];
	let l = 0,
		c = -1;
	for (; ++c < e.length;) {
		const d = [],
			m = [];
		let g = -1;
		for (e[c].length > l && (l = e[c].length); ++g < e[c].length;) {
			const y = ub(e[c][g]);
			if (t.alignDelimiters !== !1) {
				const k = r(y);
				m[g] = k, (a[g] === void 0 || k > a[g]) && (a[g] = k)
			}
			d.push(y)
		}
		o[c] = d, s[c] = m
	}
	let u = -1;
	if (typeof n == "object" && "length" in n)
		for (; ++u < l;) i[u] = nl(n[u]);
	else {
		const d = nl(n);
		for (; ++u < l;) i[u] = d
	}
	u = -1;
	const f = [],
		p = [];
	for (; ++u < l;) {
		const d = i[u];
		let m = "",
			g = "";
		d === 99 ? (m = ":", g = ":") : d === 108 ? m = ":" : d === 114 && (g = ":");
		let y = t.alignDelimiters === !1 ? 1 : Math.max(1, a[u] - m.length - g.length);
		const k = m + "-".repeat(y) + g;
		t.alignDelimiters !== !1 && (y = m.length + y + g.length, y > a[u] && (a[u] = y), p[u] = y), f[u] = k
	}
	o.splice(1, 0, f), s.splice(1, 0, p), c = -1;
	const h = [];
	for (; ++c < o.length;) {
		const d = o[c],
			m = s[c];
		u = -1;
		const g = [];
		for (; ++u < l;) {
			const y = d[u] || "";
			let k = "",
				w = "";
			if (t.alignDelimiters !== !1) {
				const C = a[u] - (m[u] || 0),
					E = i[u];
				E === 114 ? k = " ".repeat(C) : E === 99 ? C % 2 ? (k = " ".repeat(C / 2 + .5), w = " ".repeat(C / 2 - .5)) : (k = " ".repeat(C / 2), w = k) : w = " ".repeat(C)
			}
			t.delimiterStart !== !1 && !u && g.push("|"), t.padding !== !1 && !(t.alignDelimiters === !1 && y === "") && (t.delimiterStart !== !1 || u) && g.push(" "), t.alignDelimiters !== !1 && g.push(k), g.push(y), t.alignDelimiters !== !1 && g.push(w), t.padding !== !1 && g.push(" "), (t.delimiterEnd !== !1 || u !== l - 1) && g.push("|")
		}
		h.push(t.delimiterEnd === !1 ? g.join("").replace(/ +$/, "") : g.join(""))
	}
	return h.join(`
`)
}

function ub(e) {
	return e == null ? "" : String(e)
}

function cb(e) {
	return e.length
}

function nl(e) {
	const t = typeof e == "string" ? e.codePointAt(0) : 0;
	return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0
}
const fb = {
	enter: {
		table: db,
		tableData: rl,
		tableHeader: rl,
		tableRow: pb
	},
	exit: {
		codeText: mb,
		table: hb,
		tableData: Ti,
		tableHeader: Ti,
		tableRow: Ti
	}
};

function db(e) {
	const t = e._align;
	this.enter({
		type: "table",
		align: t.map(n => n === "none" ? null : n),
		children: []
	}, e), this.setData("inTable", !0)
}

function hb(e) {
	this.exit(e), this.setData("inTable")
}

function pb(e) {
	this.enter({
		type: "tableRow",
		children: []
	}, e)
}

function Ti(e) {
	this.exit(e)
}

function rl(e) {
	this.enter({
		type: "tableCell",
		children: []
	}, e)
}

function mb(e) {
	let t = this.resume();
	this.getData("inTable") && (t = t.replace(/\\([\\|])/g, gb));
	const n = this.stack[this.stack.length - 1];
	n.value = t, this.exit(e)
}

function gb(e, t) {
	return t === "|" ? t : e
}

function yb(e) {
	const t = e || {},
		n = t.tableCellPadding,
		r = t.tablePipeAlign,
		i = t.stringLength,
		o = n ? " " : "|";
	return {
		unsafe: [{
			character: "\r",
			inConstruct: "tableCell"
		}, {
			character: `
`,
			inConstruct: "tableCell"
		}, {
			atBreak: !0,
			character: "|",
			after: "[	 :-]"
		}, {
			character: "|",
			inConstruct: "tableCell"
		}, {
			atBreak: !0,
			character: ":",
			after: "-"
		}, {
			atBreak: !0,
			character: "-",
			after: "[:|-]"
		}],
		handlers: {
			table: s,
			tableRow: a,
			tableCell: l,
			inlineCode: p
		}
	};

	function s(h, d, m, g) {
		return c(u(h, m, g), h.align)
	}

	function a(h, d, m, g) {
		const y = f(h, m, g),
			k = c([y]);
		return k.slice(0, k.indexOf(`
`))
	}

	function l(h, d, m, g) {
		const y = m.enter("tableCell"),
			k = m.enter("phrasing"),
			w = Mc(h, m, {
				...g,
				before: o,
				after: o
			});
		return k(), y(), w
	}

	function c(h, d) {
		return lb(h, {
			align: d,
			alignDelimiters: r,
			padding: n,
			stringLength: i
		})
	}

	function u(h, d, m) {
		const g = h.children;
		let y = -1;
		const k = [],
			w = d.enter("table");
		for (; ++y < g.length;) k[y] = f(g[y], d, m);
		return w(), k
	}

	function f(h, d, m) {
		const g = h.children;
		let y = -1;
		const k = [],
			w = d.enter("tableRow");
		for (; ++y < g.length;) k[y] = l(g[y], h, d, m);
		return w(), k
	}

	function p(h, d, m) {
		let g = Rc(h, d, m);
		return m.stack.includes("tableCell") && (g = g.replace(/\|/g, "\\$&")), g
	}
}

function bb(e) {
	const t = e.options.bullet || "*";
	if (t !== "*" && t !== "+" && t !== "-") throw new Error("Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`");
	return t
}

function vb(e) {
	const t = e.options.listItemIndent || "tab";
	if (t === 1 || t === "1") return "one";
	if (t !== "tab" && t !== "one" && t !== "mixed") throw new Error("Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
	return t
}

function _b(e, t, n, r) {
	const i = vb(n);
	let o = n.bulletCurrent || bb(n);
	t && t.type === "list" && t.ordered && (o = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + o);
	let s = o.length + 1;
	(i === "tab" || i === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (s = Math.ceil(s / 4) * 4);
	const a = vt(r);
	a.move(o + " ".repeat(s - o.length)), a.shift(s);
	const l = n.enter("listItem"),
		c = Ac(Tc(e, n, a.current()), u);
	return l(), c;

	function u(f, p, h) {
		return p ? (h ? "" : " ".repeat(s)) + f : (h ? o : o + " ".repeat(s - o.length)) + f
	}
}
const wb = {
		exit: {
			taskListCheckValueChecked: il,
			taskListCheckValueUnchecked: il,
			paragraph: kb
		}
	},
	xb = {
		unsafe: [{
			atBreak: !0,
			character: "-",
			after: "[:|-]"
		}],
		handlers: {
			listItem: Cb
		}
	};

function il(e) {
	const t = this.stack[this.stack.length - 2];
	t.checked = e.type === "taskListCheckValueChecked"
}

function kb(e) {
	const t = this.stack[this.stack.length - 2],
		n = this.stack[this.stack.length - 1],
		r = t.children,
		i = n.children[0];
	let o = -1,
		s;
	if (t && t.type === "listItem" && typeof t.checked == "boolean" && i && i.type === "text") {
		for (; ++o < r.length;) {
			const a = r[o];
			if (a.type === "paragraph") {
				s = a;
				break
			}
		}
		s === n && (i.value = i.value.slice(1), i.value.length === 0 ? n.children.shift() : n.position && i.position && typeof i.position.start.offset == "number" && (i.position.start.column++, i.position.start.offset++, n.position.start = Object.assign({}, i.position.start)))
	}
	this.exit(e)
}

function Cb(e, t, n, r) {
	const i = e.children[0],
		o = typeof e.checked == "boolean" && i && i.type === "paragraph",
		s = "[" + (e.checked ? "x" : " ") + "] ",
		a = vt(r);
	o && a.move(s);
	let l = _b(e, t, n, {
		...r,
		...a.current()
	});
	return o && (l = l.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, c)), l;

	function c(u) {
		return u + s
	}
}

function Sb() {
	return [j0, eb(), nb, fb, wb]
}

function Eb(e) {
	return {
		extensions: [B0, tb(), rb, yb(e), xb]
	}
}

function Tb(e = {}) {
	const t = this.data();
	n("micromarkExtensions", E0(e)), n("fromMarkdownExtensions", Sb()), n("toMarkdownExtensions", Eb(e));

	function n(r, i) {
		(t[r] ? t[r] : t[r] = []).push(i)
	}
}

function Ab({
	content: e,
	style: t
}) {
	const n = e.data;
	if (!n.text) return null;
	const r = n.text;
	return S(Zt, {
		style: t,
		children: S("div", {
			"data-sm-content": e.id,
			className: "sm-sans sm-flex sm-flex-col sm-gap-y-3 sm-items-start sm-h-full sm-max-h-contentCard sm-overflow-y-auto sm-text-primary-text sm-font-normal sm-font-primary",
			children: S(zo, {
				remarkPlugins: [Tb],
				components: {
					h1: ({
						type: i = "h1",
						children: o,
						size: s = "2xl"
					}) => S(kt, {
						type: i,
						children: o,
						size: s
					}),
					h2: ({
						type: i = "h2",
						children: o,
						size: s = "2xl"
					}) => S(kt, {
						type: i,
						children: o,
						size: s
					}),
					h3: ({
						type: i = "h3",
						children: o,
						size: s = "lg"
					}) => S(kt, {
						type: i,
						children: o,
						size: s
					}),
					h4: ({
						type: i = "h4",
						children: o,
						size: s = "lg"
					}) => S(kt, {
						type: i,
						children: o,
						size: s
					}),
					h5: ({
						type: i = "h5",
						children: o,
						size: s = "md"
					}) => S(kt, {
						type: i,
						children: o,
						size: s
					}),
					h6: ({
						type: i = "h6",
						children: o,
						size: s = "md"
					}) => S(kt, {
						type: i,
						children: o,
						size: s
					}),
					li: ({
						children: i
					}) => S("li", {
						children: i
					}),
					ol: ({
						children: i
					}) => S("ol", {
						className: "sm-ml-4 sm-list-decimal",
						children: i
					}),
					ul: ({
						children: i,
						className: o
					}) => o === "task-list-item" ? S("ul", {
						className: "sm-ml-4 sm-list-none",
						children: i
					}) : S("ul", {
						className: "sm-ml-4 sm-list-disc",
						children: i
					}),
					a: ({
						href: i,
						children: o,
						title: s,
						target: a
					}) => {
						let l = !1;
						if (!a) {
							const u = window.location.hostname,
								f = new URL(i).hostname;
							u !== f && (l = !0)
						}
						const c = {};
						return l && (c.target = "_blank", c.rel = "noopener noreferrer"), S("a", {
							className: "sm-text-primary-base active:sm-text-primary-dark hover:sm-underline focus:underline visited:sm-text-primary-dark",
							href: i,
							title: s,
							...c,
							children: o
						})
					},
					p: ({
						children: i
					}) => S(Bt, {
						children: i,
						size: "md"
					}),
					hr: () => S("hr", {
						className: "sm-w-11/12 sm-bg-gray-lightest"
					}),
					table: ({
						...i
					}) => S("table", {
						className: "sm-table-auto md:sm-table-fixed sm-w-full sm-border-spacing-0",
						...i
					}),
					tr: ({
						...i
					}) => S("tr", {
						className: "even:sm-bg-gray-lightest",
						...i
					}),
					thead: ({
						...i
					}) => S("thead", {
						className: "sm-bg-gray-light sm-text-left",
						...i
					}),
					pre: ({
						...i
					}) => S("pre", {
						className: "sm-bg-gray-light sm-rounded-sm",
						...i
					})
				},
				children: r
			})
		})
	})
}

function Ob({
	content: e,
	style: t
}) {
	const {
		sendTextMessage: n
	} = It(), r = e.data;
	return r.options.length ? S(Zt, {
		isDismissible: !1,
		style: t,
		children: S("div", {
			"data-sm-content": e.id,
			className: "sm-max-h-contentCard sm-h-full sm-flex sm-flex-col sm-gap-y-2 sm-overflow-y-auto",
			children: r.options.map(i => S(Ln, {
				theme: "outline",
				onClick: () => n((i == null ? void 0 : i.value) || i.label),
				children: [i.label, S(Fr, {
					name: "chevronRight"
				})]
			}, e.id + i.label))
		})
	}) : null
}
const Mb = e => S(Io, {
		...e,
		isExternal: !0
	}),
	Ib = e => S(Io, {
		...e,
		isExternal: !1
	});

function Rb() {
	const {
		scene: e
	} = It(), [t, n] = Ee([]), r = gu(t, {
		from: {
			opacity: 0,
			transform: "translateY(20px)"
		},
		enter: {
			opacity: 1,
			transform: "translateY(0px)"
		},
		config: Dr.gentle
	}), i = {
		options: Ob,
		image: Eu,
		externalLink: Mb,
		internalLink: Ib,
		markdown: Ab
	};
	return pe(() => {
		e.conversation.onCardChanged.addListener(o => n(o)), e.conversation.autoClearCards = !0
	}, [e]), S(Fe, {
		children: r((o, s) => {
			const a = i[(s == null ? void 0 : s.type) || ""];
			if (!a) return null;
			const l = Yt(a);
			return S(l, {
				style: o,
				content: s
			})
		})
	})
}

function Pb({
	profilePicture: e,
	greeting: t,
	loadingIndicator: n,
	position: r = un.BOTTOM_RIGHT
}) {
	const {
		connectionStatus: i,
		connectionState: o,
		connect: s
	} = It(), a = i === _e.CONNECTED, l = i === _e.CONNECTING || a, c = i === _e.DISCONNECTED, u = Le({
		"sm-right-0": r === un.BOTTOM_RIGHT,
		"sm-left-0": r === un.BOTTOM_LEFT
	}), f = Le({
		"sm-flex-row-reverse": r === un.BOTTOM_LEFT
	});
	pe(() => {
		c && sessionStorage.getItem(Re.sessionId) && s()
	}, [s, c]);
	const p = () => S("div", {
			className: "sm-flex sm-h-full sm-items-center sm-justify-center sm-text-primary-base",
			children: n || S(Su, {
				stepName: o.name,
				totalSteps: o.totalSteps,
				percentageLoaded: o.percentageLoaded
			})
		}),
		h = xr({
			transform: l ? "scale(2)" : "scale(1)",
			config: Dr.stiff
		}),
		d = Le({
			"sm-scale-50 sm-origin-bottom-right": l
		});
	return S("div", {
		className: `sm-text-primary-text sm-z-max sm-pointer-events-none sm-h-full  ${u}`,
		children: S("div", {
			className: "",
			children: [S("div", {
				class: "",
				children: S(Rb, {})
			}), S("div", {
				className: ` ${f}`,
				children: [!l && S("div", {
					className: "sm-max-w-xs sm-z-10",
					children: S(Hp, {
						greeting: t
					})
				}), S("div", {
					className: d,
					children: S(Yt.div, {
						style: h,
						className: "sm-shadow-lg sm-bg-white sm-pointer-events-auto",
						children: [c && S("button", {
							onClick: s,
							"data-sm-cy": "connectButton",
							className: "sm-w-18 sm-h-18 md:sm-w-35 md:sm-h-35 sm-flex sm-justify-center sm-items-center sm-text-primary-base sm-border-none sm-outline sm-outline-2 sm-outline-transparent sm-bg-transparent hover:sm-outline-secondary-base sm-transition-colors sm-overflow-hidden",
							children: S(qp, {
								src: e
							})
						}), S("div", {
							className: Le({
								"sm-transform-gpu": !0,
								"sm-w-63 sm-h-40 md:sm-h-54 md:sm-w-88 sm-border-2 sm-border-solid sm-border-gray-lightest": l
							}),
							children: [S(ku, {
								autoConnect: !1,
								loadingIndicator: S(p, {})
							}), a && S($p, {})]
						})]
					})
				})]
			})]
		})
	})
}

function Lb({
	element: e
}) {
	const t = e,
		{
			connectionStatus: n,
			sendTextMessage: r,
			enableDebugLogging: i
		} = It();
	return pe(() => {
		const o = [
				["sendTextMessage", r],
				["enableDebugLogging", i]
			],
			s = () => {
				o.map(([l, c]) => {
					t[l] = c
				})
			},
			a = () => {
				o.map(([l]) => {
					t[l] = void 0
				})
			};
		n === _e.CONNECTED ? s() : a()
	}, [n, t, r, i]), null
}

function Db({
	tokenServer: e,
	apiKey: t,
	connectingIndicator: n,
	greeting: r,
	profilePicture: i,
	position: o,
	parent: s
}) {
	return S(Ml, {
		apiKey: t,
		tokenServer: e,
		children: [S(Lb, {
			element: s
		}), S(Pb, {
			greeting: r,
			profilePicture: i,
			loadingIndicator: n,
			position: o
		})]
	})
}
ao.exports.define("sm-widget", () => Db, {
	attributes: ["api-key", "token-server", "greeting", "profile-picture", "position"]
});