var sn = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};

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
var ro = {
		exports: {}
	},
	Rn, j, el, tl, cn, nl, Vo, rl, ir = {},
	il = [],
	Hc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

function lt(e, t) {
	for (var n in t) e[n] = t[n];
	return e
}

function ol(e) {
	var t = e.parentNode;
	t && t.removeChild(e)
}

function _e(e, t, n) {
	var r, i, o, s = {};
	for (o in t) o == "key" ? r = t[o] : o == "ref" ? i = t[o] : s[o] = t[o];
	if (arguments.length > 2 && (s.children = arguments.length > 3 ? Rn.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
		for (o in e.defaultProps) s[o] === void 0 && (s[o] = e.defaultProps[o]);
	return fn(e, s, r, i, null)
}

function fn(e, t, n, r, i) {
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
		__v: i == null ? ++el : i
	};
	return i == null && j.vnode != null && j.vnode(o), o
}

function sl() {
	return {
		current: null
	}
}

function Xe(e) {
	return e.children
}

function We(e, t) {
	this.props = e, this.context = t
}

function Vt(e, t) {
	if (t == null) return e.__ ? Vt(e.__, e.__.__k.indexOf(e) + 1) : null;
	for (var n; t < e.__k.length; t++)
		if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
	return typeof e.type == "function" ? Vt(e) : null
}

function al(e) {
	var t, n;
	if ((e = e.__) != null && e.__c != null) {
		for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
			if ((n = e.__k[t]) != null && n.__e != null) {
				e.__e = e.__c.base = n.__e;
				break
			} return al(e)
	}
}

function xi(e) {
	(!e.__d && (e.__d = !0) && cn.push(e) && !or.__r++ || Vo !== j.debounceRendering) && ((Vo = j.debounceRendering) || nl)(or)
}

function or() {
	for (var e; or.__r = cn.length;) e = cn.sort(function(t, n) {
		return t.__v.__b - n.__v.__b
	}), cn = [], e.some(function(t) {
		var n, r, i, o, s, a;
		t.__d && (s = (o = (n = t).__v).__e, (a = n.__P) && (r = [], (i = lt({}, o)).__v = o.__v + 1, io(a, o, i, n.__n, a.ownerSVGElement !== void 0, o.__h != null ? [s] : null, r, s == null ? Vt(o) : s, o.__h), fl(r, o), o.__e != s && al(o)))
	})
}

function ll(e, t, n, r, i, o, s, a, l, u) {
	var c, f, p, h, d, m, g, y = r && r.__k || il,
		k = y.length;
	for (n.__k = [], c = 0; c < t.length; c++)
		if ((h = n.__k[c] = (h = t[c]) == null || typeof h == "boolean" ? null : typeof h == "string" || typeof h == "number" || typeof h == "bigint" ? fn(null, h, null, null, h) : Array.isArray(h) ? fn(Xe, {
				children: h
			}, null, null, null) : h.__b > 0 ? fn(h.type, h.props, h.key, null, h.__v) : h) != null) {
			if (h.__ = n, h.__b = n.__b + 1, (p = y[c]) === null || p && h.key == p.key && h.type === p.type) y[c] = void 0;
			else
				for (f = 0; f < k; f++) {
					if ((p = y[f]) && h.key == p.key && h.type === p.type) {
						y[f] = void 0;
						break
					}
					p = null
				}
			io(e, h, p = p || ir, i, o, s, a, l, u), d = h.__e, (f = h.ref) && p.ref != f && (g || (g = []), p.ref && g.push(p.ref, null, h), g.push(f, h.__c || d, h)), d != null ? (m == null && (m = d), typeof h.type == "function" && h.__k === p.__k ? h.__d = l = ul(h, l, e) : l = cl(e, h, p, y, d, l), typeof n.type == "function" && (n.__d = l)) : l && p.__e == l && l.parentNode != e && (l = Vt(p))
		} for (n.__e = m, c = k; c--;) y[c] != null && (typeof n.type == "function" && y[c].__e != null && y[c].__e == n.__d && (n.__d = Vt(r, c + 1)), hl(y[c], y[c]));
	if (g)
		for (c = 0; c < g.length; c++) dl(g[c], g[++c], g[++c])
}

function ul(e, t, n) {
	for (var r, i = e.__k, o = 0; i && o < i.length; o++)(r = i[o]) && (r.__ = e, t = typeof r.type == "function" ? ul(r, t, n) : cl(n, r, r, i, r.__e, t));
	return t
}

function nt(e, t) {
	return t = t || [], e == null || typeof e == "boolean" || (Array.isArray(e) ? e.some(function(n) {
		nt(n, t)
	}) : t.push(e)), t
}

function cl(e, t, n, r, i, o) {
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
	for (o in n) o === "children" || o === "key" || o in t || sr(e, o, null, n[o], r);
	for (o in t) i && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || n[o] === t[o] || sr(e, o, t[o], n[o], r)
}

function $o(e, t, n) {
	t[0] === "-" ? e.setProperty(t, n) : e[t] = n == null ? "" : typeof n != "number" || Hc.test(t) ? n : n + "px"
}

function sr(e, t, n, r, i) {
	var o;
	e: if (t === "style")
		if (typeof n == "string") e.style.cssText = n;
		else {
			if (typeof r == "string" && (e.style.cssText = r = ""), r)
				for (t in r) n && t in n || $o(e.style, t, "");
			if (n)
				for (t in n) r && n[t] === r[t] || $o(e.style, t, n[t])
		}
	else if (t[0] === "o" && t[1] === "n") o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? qo : Ho, o) : e.removeEventListener(t, o ? qo : Ho, o);
	else if (t !== "dangerouslySetInnerHTML") {
		if (i) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
		else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e) try {
			e[t] = n == null ? "" : n;
			break e
		} catch {}
		typeof n == "function" || (n != null && (n !== !1 || t[0] === "a" && t[1] === "r") ? e.setAttribute(t, n) : e.removeAttribute(t))
	}
}

function Ho(e) {
	this.l[e.type + !1](j.event ? j.event(e) : e)
}

function qo(e) {
	this.l[e.type + !0](j.event ? j.event(e) : e)
}

function io(e, t, n, r, i, o, s, a, l) {
	var u, c, f, p, h, d, m, g, y, k, _, C, S, b = t.type;
	if (t.constructor !== void 0) return null;
	n.__h != null && (l = n.__h, a = t.__e = n.__e, t.__h = null, o = [a]), (u = j.__b) && u(t);
	try {
		e: if (typeof b == "function") {
			if (g = t.props, y = (u = b.contextType) && r[u.__c], k = u ? y ? y.props.value : u.__ : r, n.__c ? m = (c = t.__c = n.__c).__ = c.__E : ("prototype" in b && b.prototype.render ? t.__c = c = new b(g, k) : (t.__c = c = new We(g, k), c.constructor = b, c.render = Qc), y && y.sub(c), c.props = g, c.state || (c.state = {}), c.context = k, c.__n = r, f = c.__d = !0, c.__h = []), c.__s == null && (c.__s = c.state), b.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = lt({}, c.__s)), lt(c.__s, b.getDerivedStateFromProps(g, c.__s))), p = c.props, h = c.state, f) b.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
			else {
				if (b.getDerivedStateFromProps == null && g !== p && c.componentWillReceiveProps != null && c.componentWillReceiveProps(g, k), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(g, c.__s, k) === !1 || t.__v === n.__v) {
					c.props = g, c.state = c.__s, t.__v !== n.__v && (c.__d = !1), c.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(T) {
						T && (T.__ = t)
					}), c.__h.length && s.push(c);
					break e
				}
				c.componentWillUpdate != null && c.componentWillUpdate(g, c.__s, k), c.componentDidUpdate != null && c.__h.push(function() {
					c.componentDidUpdate(p, h, d)
				})
			}
			if (c.context = k, c.props = g, c.__v = t, c.__P = e, _ = j.__r, C = 0, "prototype" in b && b.prototype.render) c.state = c.__s, c.__d = !1, _ && _(t), u = c.render(c.props, c.state, c.context);
			else
				do c.__d = !1, _ && _(t), u = c.render(c.props, c.state, c.context), c.state = c.__s; while (c.__d && ++C < 25);
			c.state = c.__s, c.getChildContext != null && (r = lt(lt({}, r), c.getChildContext())), f || c.getSnapshotBeforeUpdate == null || (d = c.getSnapshotBeforeUpdate(p, h)), S = u != null && u.type === Xe && u.key == null ? u.props.children : u, ll(e, Array.isArray(S) ? S : [S], t, n, r, i, o, s, a, l), c.base = t.__e, t.__h = null, c.__h.length && s.push(c), m && (c.__E = c.__ = null), c.__e = !1
		} else o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Wc(n.__e, t, n, r, i, o, s, l);
		(u = j.diffed) && u(t)
	}
	catch (T) {
		t.__v = null, (l || o != null) && (t.__e = a, t.__h = !!l, o[o.indexOf(a)] = null), j.__e(T, t, n)
	}
}

function fl(e, t) {
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
	var l, u, c, f = n.props,
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
		if (o = o && Rn.call(e.childNodes), u = (f = n.props || ir).dangerouslySetInnerHTML, c = p.dangerouslySetInnerHTML, !a) {
			if (o != null)
				for (f = {}, d = 0; d < e.attributes.length; d++) f[e.attributes[d].name] = e.attributes[d].value;
			(c || u) && (c && (u && c.__html == u.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""))
		}
		if (qc(e, p, f, i, a), c) t.__k = [];
		else if (d = t.props.children, ll(e, Array.isArray(d) ? d : [d], t, n, r, i && h !== "foreignObject", o, s, o ? o[0] : n.__k && Vt(n, 0), a), o != null)
			for (d = o.length; d--;) o[d] != null && ol(o[d]);
		a || ("value" in p && (d = p.value) !== void 0 && (d !== e.value || h === "progress" && !d || h === "option" && d !== f.value) && sr(e, "value", d, f.value, !1), "checked" in p && (d = p.checked) !== void 0 && d !== e.checked && sr(e, "checked", d, f.checked, !1))
	}
	return e
}

function dl(e, t, n) {
	try {
		typeof e == "function" ? e(t) : e.current = t
	} catch (r) {
		j.__e(r, n)
	}
}

function hl(e, t, n) {
	var r, i;
	if (j.unmount && j.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || dl(r, null, t)), (r = e.__c) != null) {
		if (r.componentWillUnmount) try {
			r.componentWillUnmount()
		} catch (o) {
			j.__e(o, t)
		}
		r.base = r.__P = null
	}
	if (r = e.__k)
		for (i = 0; i < r.length; i++) r[i] && hl(r[i], t, typeof e.type != "function");
	n || e.__e == null || ol(e.__e), e.__e = e.__d = void 0
}

function Qc(e, t, n) {
	return this.constructor(e, n)
}

function $t(e, t, n) {
	var r, i, o;
	j.__ && j.__(e, t), i = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], io(t, e = (!r && n || t).__k = _e(Xe, null, [e]), i || ir, ir, t.ownerSVGElement !== void 0, !r && n ? [n] : i ? null : t.firstChild ? Rn.call(t.childNodes) : null, o, !r && n ? n : i ? i.__e : t.firstChild, r), fl(o, e)
}

function oo(e, t) {
	$t(e, t, oo)
}

function pl(e, t, n) {
	var r, i, o, s = lt({}, e.props);
	for (o in t) o == "key" ? r = t[o] : o == "ref" ? i = t[o] : s[o] = t[o];
	return arguments.length > 2 && (s.children = arguments.length > 3 ? Rn.call(arguments, 2) : n), fn(e.type, s, r || e.key, i || e.ref, null)
}

function vr(e, t) {
	var n = {
		__c: t = "__cC" + rl++,
		__: e,
		Consumer: function(r, i) {
			return r.children(i)
		},
		Provider: function(r) {
			var i, o;
			return this.getChildContext || (i = [], (o = {})[t] = this, this.getChildContext = function() {
				return o
			}, this.shouldComponentUpdate = function(s) {
				this.props.value !== s.value && i.some(xi)
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
Rn = il.slice, j = {
	__e: function(e, t, n, r) {
		for (var i, o, s; t = t.__;)
			if ((i = t.__c) && !i.__) try {
				if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(e)), s = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, r || {}), s = i.__d), s) return i.__E = i
			} catch (a) {
				e = a
			}
		throw e
	}
}, el = 0, tl = function(e) {
	return e != null && e.constructor === void 0
}, We.prototype.setState = function(e, t) {
	var n;
	n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = lt({}, this.state), typeof e == "function" && (e = e(lt({}, n), this.props)), e && lt(n, e), e != null && this.__v && (t && this.__h.push(t), xi(this))
}, We.prototype.forceUpdate = function(e) {
	this.__v && (this.__e = !0, e && this.__h.push(e), xi(this))
}, We.prototype.render = Xe, cn = [], nl = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, or.__r = 0, rl = 0;
var Xc = Object.freeze(Object.defineProperty({
		__proto__: null,
		render: $t,
		hydrate: oo,
		createElement: _e,
		h: _e,
		Fragment: Xe,
		createRef: sl,
		get isValidElement() {
			return tl
		},
		Component: We,
		cloneElement: pl,
		createContext: vr,
		toChildArray: nt,
		get options() {
			return j
		}
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	ml = $c(Xc);
(function(e, t) {
	(function(n, r) {
		e.exports = r()
	})(sn, function() {
		return (() => {
			var n = {
					470: (s, a, l) => {
						var u;
						l.r(a), l.d(a, {
								ErrorTypes: () => u,
								getAsyncComponent: () => y,
								getAttributeObject: () => d,
								getAttributeProps: () => m,
								getDocument: () => h,
								getElementAttributes: () => _,
								getElementTag: () => k,
								getPropKey: () => g,
								isPromise: () => c,
								parseJson: () => p,
								selfClosingTags: () => f
							}),
							function(C) {
								C.Promise = "Error: Promises cannot be used for SSR", C.Missing = "Error: Cannot find component in provided function", C.Json = "Error: Invalid JSON string passed to component"
							}(u || (u = {}));
						const c = C => C && typeof C.then == "function",
							f = ["area", "base", "br", "col", "hr", "img", "input", "link", "meta", "source", "embed", "param", "track", "wbr"];

						function p(C) {
							const {
								tagName: S
							} = this, {
								formatProps: b
							} = this.__options;
							let T = {};
							try {
								T = JSON.parse(C)
							} catch {
								console.error(u.Json, `: <${S.toLowerCase()}>`)
							}
							return b && (T = b(T)), T
						}

						function h(C) {
							const S = `<!DOCTYPE html>
<html><body>${C}</body></html>`;
							let b;
							try {
								b = new DOMParser().parseFromString(S, "text/html")
							} catch {}
							if (b) return b.body
						}

						function d(C) {
							const S = {};
							if (!(C != null && C.length)) return S;
							for (let b = C.length - 1; b >= 0; b--) {
								const T = C[b];
								S[T.name] = T.value
							}
							return S
						}

						function m(C, S) {
							const b = d(C);
							let T = {};
							for (const M of Object.keys(b))(S == null ? void 0 : S.indexOf(M)) !== -1 && (T[g(M)] = b[M]);
							return T
						}

						function g(C) {
							const S = C.trim().replace(/[\s_]/g, "-");
							return S.charAt(0).toLowerCase() + S.slice(1).replace(/-([a-z])/g, ({
								1: b
							}) => b.toUpperCase())
						}

						function y(C, S) {
							return C.then(b => function(T, M) {
								let F;
								return typeof T == "function" ? T : (typeof T == "object" && (F = T[z = M, (z = z.toLowerCase()).replace(/(^\w|-\w)/g, A => A.replace(/-/, "").toUpperCase())] || void 0), F);
								var z
							}(b, S))
						}

						function k(C) {
							let S = C.toLowerCase();
							return S.indexOf("-") < 0 && (S = "component-" + S), S
						}

						function _() {
							const {
								attributes: C = []
							} = this.__options;
							return this.hasAttributes() ? m(this.attributes, C) : {}
						}
					},
					710: function(s, a, l) {
						var u = this && this.__rest || function(h, d) {
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
						const c = l(108),
							f = l(470);

						function p(h) {
							var d;
							if (h.nodeType === 3) return ((d = h.textContent) === null || d === void 0 ? void 0 : d.trim()) || "";
							if (h.nodeType !== 1) return null;
							const m = String(h.nodeName).toLowerCase(),
								g = Array.from(h.childNodes),
								y = () => g.map(S => p.call(this, S)),
								k = (0, f.getAttributeObject)(h.attributes),
								{
									slot: _
								} = k,
								C = u(k, ["slot"]);
							return m === "script" ? null : m === "body" ? (0, c.h)(c.Fragment, {}, y()) : f.selfClosingTags.includes(m) ? (0, c.h)(m, C) : _ ? (this.__slots[(0, f.getPropKey)(_)] = function(S) {
								return S.every(b => typeof b == "string") ? S.join(" ") : (0, c.h)(c.Fragment, {}, S)
							}(y()), null) : (0, c.h)(m, C, y())
						}
						a.parseHtml = function() {
							const h = (0, f.getDocument)(this.innerHTML);
							if (!h) return;
							const d = p.call(this, h);
							return () => d
						}
					},
					108: s => {
						s.exports = ml
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
					u = i(710);

				function c() {
					const d = l.getElementAttributes.call(this),
						m = this.getAttribute("props"),
						g = this.querySelector('[type="application/json"]'),
						y = l.parseJson.call(this, m || (g == null ? void 0 : g.innerHTML) || "{}");
					g == null || g.remove();
					let k = this.__children;
					this.__mounted || this.hasAttribute("server") || (k = (0, a.h)(u.parseHtml.call(this), {})), this.__properties = Object.assign(Object.assign(Object.assign({}, this.__slots), y), d), this.__children = k || [], this.removeAttribute("server"), this.innerHTML = "";
					const _ = this.__component(),
						C = S => h.call(this, S);
					(0, l.isPromise)(_) ? (0, l.getAsyncComponent)(_, this.tagName).then(C): C(_)
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
					} = g, k = typeof window == "undefined", _ = (0, l.getElementTag)(d);
					if (!k) return void customElements.define(_, function(b, T = {}) {
						var M;
						const {
							attributes: F = []
						} = T;
						if (typeof Reflect != "undefined" && Reflect.construct) {
							const z = function() {
								const A = Reflect.construct(HTMLElement, [], z);
								return A.__mounted = !1, A.__component = b, A.__properties = {}, A.__slots = {}, A.__children = void 0, A.__options = T, A
							};
							return z.observedAttributes = ["props", ...F], z.prototype = Object.create(HTMLElement.prototype), z.prototype.constructor = z, z.prototype.connectedCallback = c, z.prototype.attributeChangedCallback = f, z.prototype.disconnectedCallback = p, z
						}
						return M = class extends HTMLElement {
							constructor() {
								super(...arguments), this.__mounted = !1, this.__component = b, this.__properties = {}, this.__slots = {}, this.__children = void 0, this.__options = T
							}
							connectedCallback() {
								c.call(this)
							}
							attributeChangedCallback(...z) {
								f.call(this, ...z)
							}
							disconnectedCallback() {
								p.call(this)
							}
						}, M.observedAttributes = ["props", ...F], M
					}(m, g));
					const C = m();
					if ((0, l.isPromise)(C)) throw new Error(`${l.ErrorTypes.Promise} : <${d}>`);
					let S = C;
					return y && (S = y(C)), b => (0, a.h)(_, {
						server: !0
					}, [(0, a.h)("script", {
						type: "application/json",
						dangerouslySetInnerHTML: {
							__html: JSON.stringify(b)
						}
					}), (0, a.h)(S, b)])
				}
			})(), o
		})()
	})
})(ro);
var Ze = function() {
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
	ar = function() {
		function e(t, n) {
			this._scene = t, this._personaId = n, this._scene.onConversationResultEvents[n] || (this._scene.onConversationResultEvents[n] = new Ze), this._onConversationResultEvent = this._scene.onConversationResultEvents[n], this._scene.onSpeechMarkerEvents[n] || (this._scene.onSpeechMarkerEvents[n] = new Ze), this._onSpeechMarkerEvent = this._scene.onSpeechMarkerEvents[n]
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
	}();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var ki = function(e, t) {
	return ki = Object.setPrototypeOf || {
		__proto__: []
	}
	instanceof Array && function(n, r) {
		n.__proto__ = r
	} || function(n, r) {
		for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i])
	}, ki(e, t)
};

function Gc(e, t) {
	if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
	ki(e, t);

	function n() {
		this.constructor = e
	}
	e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n)
}
var et = function() {
	return et = Object.assign || function(t) {
		for (var n, r = 1, i = arguments.length; r < i; r++) {
			n = arguments[r];
			for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
		}
		return t
	}, et.apply(this, arguments)
};

function Yc(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function")
		for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n
}

function fe(e, t, n, r) {
	function i(o) {
		return o instanceof n ? o : new n(function(s) {
			s(o)
		})
	}
	return new(n || (n = Promise))(function(o, s) {
		function a(c) {
			try {
				u(r.next(c))
			} catch (f) {
				s(f)
			}
		}

		function l(c) {
			try {
				u(r.throw(c))
			} catch (f) {
				s(f)
			}
		}

		function u(c) {
			c.done ? o(c.value) : i(c.value).then(a, l)
		}
		u((r = r.apply(e, t || [])).next())
	})
}

function de(e, t) {
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

	function a(u) {
		return function(c) {
			return l([u, c])
		}
	}

	function l(u) {
		if (r) throw new TypeError("Generator is already executing.");
		for (; n;) try {
			if (r = 1, i && (o = u[0] & 2 ? i.return : u[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, u[1])).done) return o;
			switch (i = 0, o && (u = [u[0] & 2, o.value]), u[0]) {
				case 0:
				case 1:
					o = u;
					break;
				case 4:
					return n.label++, {
						value: u[1],
						done: !1
					};
				case 5:
					n.label++, i = u[1], u = [0];
					continue;
				case 7:
					u = n.ops.pop(), n.trys.pop();
					continue;
				default:
					if (o = n.trys, !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
						n = 0;
						continue
					}
					if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
						n.label = u[1];
						break
					}
					if (u[0] === 6 && n.label < o[1]) {
						n.label = o[1], o = u;
						break
					}
					if (o && n.label < o[2]) {
						n.label = o[2], n.ops.push(u);
						break
					}
					o[2] && n.ops.pop(), n.trys.pop();
					continue
			}
			u = t.call(e, n)
		} catch (c) {
			u = [6, c], i = 0
		} finally {
			r = o = 0
		}
		if (u[0] & 5) throw u[1];
		return {
			value: u[0] ? u[1] : void 0,
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

function Ci(e, t) {
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

function Si(e, t, n) {
	if (n || arguments.length === 2)
		for (var r = 0, i = t.length, o; r < i; r++)(o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
	return e.concat(o || Array.prototype.slice.call(t))
}
var dn = function() {
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
	wr = function() {
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
				["RTCPeerConnection", "webkitRTCPeerConnection", "mozRTCPeerConnection", "RTCIceGatherer"].forEach(function(u) {
					i || u in window && (i = !0)
				});
				var o = navigator.userAgent.match(/iPhone|iPad|iPod/i) && !window.MSStream,
					s = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
				i && o && !s && (i = !1), t._isBrowserSupported = i, t._isBrowserSupported || n(t);
				var a = null;
				navigator.mediaDevices && navigator.mediaDevices.enumerateDevices && (a = function(u) {
					Promise.resolve(navigator.mediaDevices.enumerateDevices()).then(function(c) {
						c === void 0 && (c = []), u(c)
					}).catch(function() {
						u([])
					})
				});
				var l = window.MediaStreamTrack;
				!a && l && l.getSources && (a = l.getSources.bind(l)), !a && navigator.enumerateDevices && (a = navigator.enumerateDevices.bind(navigator)), a ? a(function(u) {
					u.forEach(function(c) {
						c.kind === "audioinput" && (t._hasMicrophone = !0), c.kind === "videoinput" && (t._hasCamera = !0)
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
	Wo = ["debug", "log", "warn", "error"],
	Tt = function() {
		function e(t, n) {
			t === void 0 && (t = "log"), n === void 0 && (n = !0), this.isEnabled = n, this.availableLogLevels = [], this._minLogLevel = "log", this.setMinLogLevel(t)
		}
		return e.prototype.log = function(t) {
			for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
			this.isEnabled && this.availableLogLevels.includes(t) && console[t].apply(console, Si([], Ci(n), !1))
		}, e.prototype.enableLogging = function(t) {
			this.isEnabled = t
		}, e.prototype.getMinLogLevel = function() {
			return this._minLogLevel
		}, e.prototype.setMinLogLevel = function(t) {
			var n = Wo.indexOf(t);
			this._minLogLevel = t, this.availableLogLevels = Wo.slice(n)
		}, e
	}();

function le(e, t) {
	var n = new Error(e);
	return n.name = t, n
}
var Kc = function() {
		function e(t, n, r, i, o, s) {
			s === void 0 && (s = new Tt);
			var a = this;
			this.logger = s, this._isMicrophoneConnected = !1, this._isCameraConnected = !1, this._onConnectedStorage = function(l, u, c, f) {}, this._closed = !1, this._outgoingQueue = [], this._microphoneMuteDelay = -1, this._offsetX = 0, this._offsetY = 0, t && (this._viewport_element = t), window.SmRuntimeHostReceiveMessage = this.receiveMessage.bind(this), typeof window.SmRuntimeHostStyleViewportElement == "function" && window.SmRuntimeHostStyleViewportElement(this._viewport_element), this._onClose = function(l) {}, this._onMessage = function(l) {}, this._onUserText = function(l) {}, this.sendVideoBounds(0, 0), setTimeout(function() {
				a.sendVideoBounds(0, 0)
			}, 3e3), this._features = new wr, this.log("Local session created!")
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
							u = document.documentElement.scrollTop;
						r._offsetX -= l, r._offsetY -= u
					}
					r.log("Updating bounds: x =  ".concat(r._offsetX, " , y = ").concat(r._offsetY, "', w = ").concat(s, ", h = ").concat(a));
					var c = r._offsetY,
						f = r._offsetX,
						p = r._offsetY + a,
						h = r._offsetX + s,
						d = {
							name: "videoBounds",
							body: {
								top: c,
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
			return fe(this, void 0, void 0, function() {
				var t, n, r, i = this;
				return de(this, function(o) {
					switch (o.label) {
						case 0:
							return t = new dn, this.log("Local session connecting!"), this._closed = !1, [4, this._features.detectWebRTCFeatures()];
						case 1:
							return n = o.sent(), this._closed = !1, this._sessionId = void 0, this._isMicrophoneConnected = n.hasMicrophone, this._isCameraConnected = n.hasCamera, typeof window.local_websocket_port == "number" ? (this._serverConnection = new WebSocket("ws://localhost:" + window.local_websocket_port), this.log("smsdk: websocket open"), this._serverConnection.onmessage = function(s) {
								i.gotMessageFromServer(s)
							}, this._serverConnection.onerror = function(s) {
								t.isPending() && t.reject(le("smsdk websocket failed", "serverConnectionFailed"))
							}, this._serverConnection.onopen = function(s) {
								window.SmRuntimeHostReceiveMessage = function() {}, i.log("Local session connected!");
								for (var a = 0; a < i._outgoingQueue.length; a++) i._serverConnection.send(JSON.stringify(i._outgoingQueue[a])), i.logger.log("log", "SmLocalSession.prototype.sendMessage, forwarding message to Web Socket: " + i._outgoingQueue[a]);
								i._outgoingQueue = [], t.isPending() && t.resolve()
							}, this._serverConnection.onclose = function(s) {
								i.logger.log("log", "smsdk: websocket closed: code(".concat(s.code, "), reason(").concat(s.reason, "), clean(").concat(s.wasClean, ")")), t.isRejected || i.close(!1, "normal")
							}) : (this.log("local_websocket_port not found! Failed to create WebSocket"), t.isPending() && t.reject(le("smsdk websocket failed", "local_websocket_port not found"))), r = {
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
				this.log("smsdk: closing server connection");
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
			return t.microphone, t.camera, fe(this, void 0, void 0, function() {
				return de(this, function(n) {
					throw le("setMediaDeviceActive not supported on LocalSession", "notSupported")
				})
			})
		}, e
	}(),
	Zc = function(e) {
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
	Y;
(function(e) {
	e[e.None = 0] = "None", e[e.Microphone = 1] = "Microphone", e[e.MicrophoneAndCamera = 2] = "MicrophoneAndCamera", e[e.Camera = 3] = "Camera"
})(Y || (Y = {}));
var lr;
(function(e) {
	e.PAGE_LOADED = "PAGE_LOADED"
})(lr || (lr = {}));
var Jc = function() {
		function e(t, n, r, i, o, s, a, l, u) {
			u === void 0 && (u = new Tt);
			var c = this;
			this.logger = u, this._connectPendingRemoteStream = null, this._resumeRequested = !1, this._isResumedSession = !1, this._outgoingQueue = [], this._controlOpen = !1, this._controlQueue = [], this._requestedUserMedia = Y.None, this._requiredUserMedia = Y.None, this._onConnected = function(f, p, h, d) {}, this._pendingLog = [], this._closed = !1, this._shouldLogToServer = !1, this._microphoneMuteDelay = -1, this._changeUserMediaQueue = new Array, this._removeListeners = new Array, this._videoOptions = {
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
			}, this._videoElement = t, this._serverUri = n, this._connectUserText = r || "", this._accessToken = i, this._audioOnly = o, this._audioOptions.echoCancellation = l, this._requiredUserMedia = a, this._requestedUserMedia = s, this._onClose = function(f) {}, this._onMessage = function(f) {}, this._onUserText = function(f) {}, this._sessionError = function(f) {
				c.log("smsdk - session error: ".concat(f))
			}, this._features = new wr
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
		}, e.prototype.log = function(t, n) {
			if (n === void 0 && (n = "log"), this.loggingEnabled) {
				var r = new Date,
					i = "".concat(r.toISOString(), " ").concat(t);
				this._shouldLogToServer && this.logToServer(i), this.logger.log(n, i)
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
			return fe(this, void 0, void 0, function() {
				var n, r, i = this;
				return de(this, function(o) {
					return n = new dn, this._closed = !1, t && (this._connectUserText = t), this._serverUri && (this._serverUri.startsWith("ws:") || this._serverUri.startsWith("wss:")) ? (this.selectUserMedia(this._requestedUserMedia, this._requiredUserMedia, n, this.getUserMediaSuccess.bind(this)), [2, n.promise]) : (r = new XMLHttpRequest, r.open("GET", "/api/jwt" + window.location.search), r.onreadystatechange = function(s) {
						return fe(i, void 0, void 0, function() {
							var a;
							return de(this, function(l) {
								return r.readyState === XMLHttpRequest.DONE && (r.status === 200 ? (this.log("JWT request returned: ".concat(r.responseText)), a = JSON.parse(r.responseText), this._serverUri = a.url, this._accessToken = a.jwt, this.selectUserMedia(this._requestedUserMedia, this._requiredUserMedia, n, this.getUserMediaSuccess.bind(this))) : (this.log("JWT Request failed, status: ".concat(r.statusText)), n.reject(le("Failed to acquire jwt at /api/jwt", "noServer")))), [2]
							})
						})
					}, r.send(), [2, n.promise])
				})
			})
		}, e.prototype.webcamRequested = function(t, n) {
			return !this._audioOnly && [Y.MicrophoneAndCamera, Y.Camera].some(function(r) {
				return [t, n].includes(r)
			})
		}, e.prototype.micRequested = function(t, n) {
			return [Y.Microphone, Y.MicrophoneAndCamera].some(function(r) {
				return [t, n].includes(r)
			})
		}, e.prototype.getMediaConstraints = function(t, n) {
			var r = navigator.mediaDevices.getSupportedConstraints();
			return this.log("Browser supports media constraints: ".concat(r), "debug"), {
				audio: this.micRequested(t, n) ? this.buildAudioOptions() : !1,
				video: this.webcamRequested(t, n) ? this._videoOptions : !1
			}
		}, e.prototype.buildAudioOptions = function() {
			var t = navigator.mediaDevices.getSupportedConstraints(),
				n = et({}, this._audioOptions);
			return Object.keys(n).forEach(function(r) {
				t[r] || delete n[r]
			}), n
		}, e.prototype.selectUserMedia = function(t, n, r, i) {
			var o = this;
			if (t === Y.None && n === Y.None) {
				i(null, r);
				return
			}
			if (navigator.mediaDevices.getUserMedia) {
				var s = this.getMediaConstraints(t, n);
				this.log("Best video constraints: ".concat(s), "debug"), navigator.mediaDevices.getUserMedia(s).then(function(a) {
					i(a, r)
				}).catch(function(a) {
					n === t ? (o.log("getUserMedia could not get required media, error given: ".concat(a), "debug"), r.reject(o.MakeErrorForUserMedia(a))) : n !== Y.None ? o.getUserMediaRequiredOnlyFallback(n, r, i) : t === Y.MicrophoneAndCamera ? o.getUserMediaAudioOnlyFallback(r, i) : i(null, r)
				})
			} else r.reject(le("Your browser does not support getUserMedia API", "notSupported"))
		}, e.prototype.getUserMediaRequiredOnlyFallback = function(t, n, r) {
			var i = this;
			this.log("Retrying with required media only", "debug");
			var o = this.getMediaConstraints(Y.None, t);
			return this.log("Attempt constraints: ".concat(o), "debug"), navigator.mediaDevices.getUserMedia(o).then(function(s) {
				r(s, n)
			}).catch(function(s) {
				i.log("getUserMedia could not get required media, error given: ".concat(s), "debug"), n.reject(i.MakeErrorForUserMedia(s))
			})
		}, e.prototype.getUserMediaAudioOnlyFallback = function(t, n) {
			var r = this;
			this.log("Retrying with microphone only", "debug");
			var i = {
				video: !1,
				audio: this.buildAudioOptions()
			};
			return this.log("Attempt constraints: ".concat(i), "debug"), navigator.mediaDevices.getUserMedia(i).then(function(o) {
				n(o, t)
			}).catch(function(o) {
				r.log("getUserMedia could not get microphone audio, error given: ".concat(o), "debug"), n(null, t)
			})
		}, e.prototype.MakeErrorForUserMedia = function(t) {
			var n = "noUserMedia";
			return le(t.message, n)
		}, e.prototype.getUserMediaSuccess = function(t, n) {
			var r = this;
			this.log("Got user media", "debug"), this._localStream = t, this.microphoneMuted = !0, this.log("smsdk: connecting to: ".concat(this._serverUri)), this._accessToken ? this._serverConnection = new WebSocket(this._serverUri + "?access_token=" + this._accessToken) : this._serverConnection = new WebSocket(this._serverUri), this._serverConnection.onmessage = function(i) {
				try {
					r.gotMessageFromServer(i, n)
				} catch (o) {
					r.log("smsdk: unexpected exception processing received message: " + o)
				}
			}, this._serverConnection.onerror = function(i) {
				n.isPending() && n.reject(le("websocket failed", "serverConnectionFailed"))
			}, this._serverConnection.onopen = function(i) {
				r.log("Websocket open")
			}, this._serverConnection.onclose = function(i) {
				r.log("smsdk: websocket closed: code(".concat(i.code, "), reason(").concat(i.reason, "), clean(").concat(i.wasClean, ")")), n.isRejected || r.close(!1, "normal", n)
			}
		}, e.prototype.hasTurnServer = function(t) {
			var n, r, i, o;
			if (!t) return !1;
			try {
				for (var s = wt(t), a = s.next(); !a.done; a = s.next()) {
					var l = a.value;
					if (!(!l || !l.urls)) try {
						for (var u = (i = void 0, wt(l.urls)), c = u.next(); !c.done; c = u.next()) {
							var f = c.value;
							if (f.indexOf("turn:") === 0) return !0
						}
					} catch (p) {
						i = {
							error: p
						}
					} finally {
						try {
							c && !c.done && (o = u.return) && o.call(u)
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
				u = a.name,
				c = a.body;
			if (l !== "webrtc") {
				this._controlConnection !== null && l === "scene" && (this._controlOpen && this._serverConnection.readyState === WebSocket.OPEN ? this._controlConnection.send(s) : this._controlQueue.push(s)), this._onMessage(a);
				return
			}
			if (a.kind === "event")
				if (u === "established") {
					var f = {
						iceServers: []
					};
					if (c.iceServers && (f.iceServers = c.iceServers, this.hasTurnServer(c.iceServers) && (this.log("Detected turn server, forcing relay mode"), f.iceTransportPolicy = "relay")), this.log("selected ice servers: ".concat(f.iceServers)), c.settings && typeof c.settings.microphoneMuteDelay == "number" && (this._microphoneMuteDelay = c.settings.microphoneMuteDelay), this.log("microphone mute delay after persona speech: ".concat(this._microphoneMuteDelay)), this._shouldLogToServer = (o = (i = c.settings) === null || i === void 0 ? void 0 : i.logToServer) !== null && o !== void 0 ? o : !1, this._peerConnection = new RTCPeerConnection(f), this._peerConnection.onicecandidate = this.gotIceCandidate.bind(this), "ontrack" in this._peerConnection && !this._features.isEdge ? (this._peerConnection.ontrack = function(b) {
							(b.track.kind === "video" || b.track.kind === "audio") && (!r._remoteStream || !r._audioOnly && b.track.kind === "video") && r.onRemoteStream(b.streams[0])
						}, this._videoElement.addEventListener("loadeddata", this.onVideoLoaded.bind(this)), this._removeListeners.push({
							target: this._videoElement,
							name: "loadeddata",
							callback: this.onVideoLoaded
						})) : this._peerConnection.onaddstream = function(b) {
							r.onRemoteStream(b.stream)
						}, this._peerConnection.oniceconnectionstatechange = function(b) {
							r.log("ICE connection state: ".concat(r._peerConnection.iceConnectionState)), r._peerConnection.iceConnectionState === "failed" && (le("ice connection failed", "mediaStreamFailed"), n && n.isPending() && (r._serverConnection.close(), r._controlConnection && (r._controlConnection.readyState === WebSocket.OPEN || r._controlConnection.readyState === WebSocket.CONNECTING) && r._controlConnection.close(), n.reject(le("ice connection failed", "mediaStreamFailed"))))
						}, this.log("adding local media stream if any", "debug"), this._localStream)
						if (!this._peerConnection.addTrack) this._peerConnection.addStream(this._localStream), this.log("adding local media stream by stream", "debug");
						else try {
							this.log("adding local media stream by track", "debug"), this._localStream.getTracks().forEach(function(b) {
								r._peerConnection.addTrack(b, r._localStream)
							})
						} catch (b) {
							this.logger.log("error", b)
						}
					if (this._peerConnection.addTransceiver("audio", {
							direction: "sendrecv"
						}), this._peerConnection.addTransceiver("video", {
							direction: "sendrecv"
						}), c.resumeSessionId) {
						var p = {
							voiceActivityDetection: !1,
							iceRestart: !0
						};
						this._sessionId = c.resumeSessionId, this._isResumedSession = !0, this.log("established, trying to resume session with session_id = ".concat(c.resumeSessionId), "debug"), this.createOffer(this._peerConnection, p).then(function(b) {
							r.createdDescription.bind(r), r.createdDescription(b, "updateOffer")
						}).catch(this._sessionError.bind(this))
					} else {
						var p = {
							voiceActivityDetection: !1,
							iceRestart: !1
						};
						this._isResumedSession = !1, this.createOffer(this._peerConnection, p).then(this.createdDescription.bind(this)).catch(this._sessionError.bind(this))
					}
				} else if (u === "accepted") {
				this.log("accepted, session_id = ".concat(c.sessionId)), this._sessionId = c.sessionId, this._resumeRequested = c.resumeRequested, this._server = c.server, this._sceneId = c.sceneId;
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
				this.log("accepted, sending video width/height: ".concat(y, " / ").concat(k)), this.sendVideoBounds(y, k), this.sendlogMessage(this._pendingLog), this._pendingLog = [], c.controlUrl && (this._controlUrl = c.controlUrl, this._controlQueue = [], this._controlOpen = !1, this._controlConnection = new WebSocket(c.controlUrl + "?access_token=" + this._accessToken), this._controlConnection.onmessage = function(b) {
					var T = b.data;
					T && r._serverConnection.readyState === WebSocket.OPEN && r._serverConnection.send(T)
				}, this._controlConnection.onerror = function() {
					r.close(!0, "controlFailed", n)
				}, this._controlConnection.onopen = function(b) {
					if (r.log("smsdk: control websocket open"), !r._controlOpen) {
						r._controlOpen = !0;
						for (var T = 0; T < r._controlQueue.length; T++) r.log("smsdk: control websocket now open, forwarding queued message: ".concat(r._controlQueue[T])), r._controlConnection.send(r._controlQueue[T]);
						r._controlQueue = []
					}
				}, this._controlConnection.onclose = function(b) {
					r.log("smsdk: control closed: code(".concat(b.code, "), reason(").concat(b.reason, "), clean(").concat(b.wasClean, ")")), r.close(!0, "controlDisconnected", n)
				})
			} else if (u === "answer") {
				this.log("set remote description"), this.log(JSON.stringify(c));
				var _ = {
					sdp: c.sdp,
					type: "answer"
				};
				this.setRemoteDescription(this._peerConnection, _).then(function() {}).catch(this._sessionError.bind(this))
			} else if (u === "connected") this._remoteStream ? (this.onConnectedSuccess(), n && n.resolve(c.sessionId)) : (this.log("Connected but no remote media stream available"), this._connectPendingRemoteStream = function() {
				r.onConnectedSuccess(), n && n.resolve(c.sessionId)
			});
			else if (u === "ice") {
				this.log("add ice candidate");
				var C = void 0;
				if (c.complete) this._features.isEdge && (C = this._peerConnection.addIceCandidate(new RTCIceCandidate({
					candidate: "",
					sdpMid: "",
					sdpMLineIndex: 0
				})));
				else {
					var S = new RTCIceCandidate({
						candidate: c.candidate,
						sdpMid: c.sdpMid,
						sdpMLineIndex: c.sdpMLineIndex
					});
					C = this._peerConnection.addIceCandidate(S)
				}
				C && C.catch(this._sessionError.bind(this))
			} else if (u === "offer") {
				this._sessionId = c.sessionId;
				var _ = {
					sdp: c.sdp,
					type: "offer"
				};
				this.setRemoteDescription(this._peerConnection, _).then(function() {
					return r.createAnswer(r._peerConnection)
				}).then(this.createdDescription.bind(this)).catch(this._sessionError.bind(this))
			} else u === "userText" ? (this.log("rtc - user text message received: ".concat(c.userText)), this._onUserText(c.userText)) : u === "close" && this.close(!1, c.reason, n)
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
			this.log("smsdk - got remote stream"), this._remoteStream = t, this.log("smsdk - ICE connection state: ".concat(this._peerConnection.iceConnectionState)), this._connectPendingRemoteStream && (this._connectPendingRemoteStream(), this._connectPendingRemoteStream = null)
		}, e.prototype.onConnectedSuccess = function() {
			var t = this,
				n, r;
			this._onConnected(this._resumeRequested, this._isResumedSession, this._server, this.sessionId), this._videoElement.hidden = !1, this._videoElement.srcObject = this._remoteStream;
			var i = function(o) {
				return fe(t, void 0, void 0, function() {
					return de(this, function(s) {
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
			!this._serverConnection || (this._serverConnection.readyState === WebSocket.OPEN ? this._serverConnection.send(JSON.stringify(t)) : this.log("smsdk - not ready, discarding message: ".concat(t)))
		}, e.prototype.sendUserText = function(t) {
			this.sendRtcEvent("userText", {
				userText: t
			})
		}, e.prototype.hasCamera = function(t) {
			return t === Y.Camera || t === Y.MicrophoneAndCamera
		}, e.prototype.hasMicrophone = function(t) {
			return t === Y.Microphone || t === Y.MicrophoneAndCamera
		}, e.prototype.makeUserMedia = function(t, n) {
			return t && n ? Y.MicrophoneAndCamera : t ? Y.Microphone : n ? Y.Camera : Y.None
		}, e.prototype.findSenderTrackByKind = function(t) {
			var n, r, i;
			if (!this._peerConnection) return null;
			var o = this._peerConnection.getSenders();
			try {
				for (var s = wt(o), a = s.next(); !a.done; a = s.next()) {
					var l = a.value;
					if (l.track && ((i = l.track) === null || i === void 0 ? void 0 : i.kind) === t) return l.track
				}
			} catch (u) {
				n = {
					error: u
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
				for (var l = wt(this._peerConnection.getTransceivers()), u = l.next(); !u.done; u = l.next()) {
					var c = u.value;
					if (c.direction === "sendrecv" && ((a = (s = c.receiver) === null || s === void 0 ? void 0 : s.track) === null || a === void 0 ? void 0 : a.kind) === t) return c.sender
				}
			} catch (d) {
				n = {
					error: d
				}
			} finally {
				try {
					u && !u.done && (r = l.return) && r.call(l)
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
			return fe(this, void 0, void 0, function() {
				var o, s, a, l;
				return de(this, function(u) {
					switch (u.label) {
						case 0:
							if (o = this._changeUserMediaQueue.length > 0 ? this._changeUserMediaQueue[0] : void 0, !o) return [3, 5];
							u.label = 1;
						case 1:
							return u.trys.push([1, 3, , 4]), s = this.isMicrophoneActive(), a = this.isCameraActive(), [4, this.changeUserMediaInternal(this.makeUserMedia((t = o.microphone) !== null && t !== void 0 ? t : s, (n = o.camera) !== null && n !== void 0 ? n : a))];
						case 2:
							return u.sent(), o.microphone !== void 0 && o.microphone !== s && ((r = this._onMicrophoneActive) === null || r === void 0 || r.call(this.isMicrophoneActive())), o.camera !== void 0 && o.camera !== a && ((i = this._onCameraActive) === null || i === void 0 || i.call(this.isCameraActive())), o.deferred.resolve(), [3, 4];
						case 3:
							return l = u.sent(), o.deferred.reject(l), [3, 4];
						case 4:
							this._changeUserMediaQueue.shift(), u.label = 5;
						case 5:
							if (o) return [3, 0];
							u.label = 6;
						case 6:
							return [2]
					}
				})
			})
		}, e.prototype.changeUserMediaInternal = function(t) {
			return fe(this, void 0, void 0, function() {
				var n, r, i, o, s, a, l, u = this;
				return de(this, function(c) {
					switch (c.label) {
						case 0:
							return n = this.findSenderTrackByKind("audio"), r = this.findSenderTrackByKind("video"), i = this.hasMicrophone(t) && (!n || n.readyState === "ended"), o = this.hasCamera(t) && (!r || r.readyState === "ended"), s = null, i || o ? (a = this.makeUserMedia(i, o), l = new dn, this.selectUserMedia(a, a, l, function(f, p) {
								return fe(u, void 0, void 0, function() {
									return de(this, function(h) {
										return s = f, p.resolve(), [2]
									})
								})
							}), [4, l.promise]) : [3, 2];
						case 1:
							c.sent(), this._localStream || (this._localStream = new MediaStream), c.label = 2;
						case 2:
							return [4, this.updateSenderTrack("audio", this.hasMicrophone(t), s)];
						case 3:
							return c.sent(), [4, this.updateSenderTrack("video", this.hasCamera(t), s)];
						case 4:
							return c.sent(), this.sendUserCamera(), [2]
					}
				})
			})
		}, e.prototype.updateSenderTrack = function(t, n, r) {
			var i, o;
			return fe(this, void 0, void 0, function() {
				var s, a, l, u;
				return de(this, function(c) {
					switch (c.label) {
						case 0:
							if (s = this.findSenderByKind(t), a = s == null ? void 0 : s.track, !(!!s && (!a || n !== a.enabled))) return [3, 7];
							if (this.log("new user " + t + " active state = " + n), !n) return [3, 6];
							c.label = 1;
						case 1:
							return c.trys.push([1, 4, , 5]), a && ((i = this._localStream) === null || i === void 0 || i.removeTrack(a)), r ? (l = this.getTrackByKind(r, t), l ? ((o = this._localStream) === null || o === void 0 || o.addTrack(l), s.track === l ? [3, 3] : (this.log("replacing user " + t + " track"), [4, s.replaceTrack(l)])) : [3, 3]) : [3, 3];
						case 2:
							c.sent(), c.label = 3;
						case 3:
							return [3, 5];
						case 4:
							throw u = c.sent(), this.log("failed to get user " + t + " track, error: " + u), le("failed to get user " + t + ": " + u, "failedUpgrade");
						case 5:
							return [3, 7];
						case 6:
							a && (a.enabled = !1, a.stop()), c.label = 7;
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
			return fe(this, void 0, void 0, function() {
				var i;
				return de(this, function(o) {
					return i = new dn, this._changeUserMediaQueue.push({
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
					this.logger.log("error", f)
				}
				if (this._localStream) try {
					var s = this._localStream.getTracks();
					for (var a in s) s[a].stop()
				} catch (f) {
					this.logger.log("error", f)
				}
				t && this.sendRtcEvent("close", {
					reason: "normal"
				}), r && (r.isResolved() ? this._onClose(n) : r.reject(le("websocket closed: " + n, n))), this._serverConnection && (this.log("smsdk: closing server connection"), this._serverConnection.close()), this._controlConnection && this._controlConnection.close();
				try {
					for (var l = wt(this._removeListeners), u = l.next(); !u.done; u = l.next()) {
						var c = u.value;
						c.target.removeEventListener(c.name, c.callback)
					}
				} catch (f) {
					i = {
						error: f
					}
				} finally {
					try {
						u && !u.done && (o = l.return) && o.call(l)
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
							i[0].enabled = s, console.log("microphone muted active notification: " + s), (r = this._onMicrophoneActive) === null || r === void 0 || r.call(s)
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
	ef = function() {
		function e(t, n, r) {
			r === void 0 && (r = new Tt);
			var i = this;
			this.logger = r, this._outgoingQueue = [], this._onConnectedStorage = function(o, s, a, l) {}, this._pendingLog = [], this._closed = !1, this._shouldLogToServer = !1, this._serverUri = t, this._accessToken = n, this._onClose = function(o) {}, this._onMessage = function(o) {}, this._sessionError = function(o) {
				i.logger.log("error", "smsdk - session error: ".concat(o))
			}, this._features = new wr
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
			return fe(this, void 0, void 0, function() {
				var t;
				return de(this, function(n) {
					return t = new dn, this._closed = !1, this._serverUri && (this._serverUri.startsWith("ws:") || this._serverUri.startsWith("wss:")) && this.connectByWebSocket(t), [2, t.promise]
				})
			})
		}, e.prototype.connectByWebSocket = function(t) {
			var n = this;
			this.log("smsdk: connecting to: ".concat(this._serverUri)), this._accessToken ? this._serverConnection = new WebSocket(this._serverUri + "?access_token=" + this._accessToken) : this._serverConnection = new WebSocket(this._serverUri), this._serverConnection.onmessage = function(r) {
				n.gotMessageFromServer(r, t)
			}, this._serverConnection.onerror = function(r) {
				t.isPending() && t.reject(le("smsdk websocket failed", "serverConnectionFailed"))
			}, this._serverConnection.onopen = function(r) {
				n.log("smsdk: websocket open"), t.resolve()
			}, this._serverConnection.onclose = function(r) {
				n.log("smsdk: websocket closed: code(".concat(r.code, "), reason(").concat(r.reason, "), clean(").concat(r.wasClean, ")")), t.isRejected || n.close(!1, "normal", t)
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
			!this._serverConnection || (this._serverConnection.readyState === WebSocket.OPEN ? this._serverConnection.send(JSON.stringify(t)) : this.log("smsdk - not ready, discarding message: ".concat(t)))
		}, e.prototype.close = function(t, n, r) {
			n === void 0 && (n = "normal"), !this._closed && (this._closed = !0, r && (r.isResolved() ? this._onClose(n) : r.reject(le("websocket closed: " + n, n))), this._serverConnection && (this.log("smsdk: closing server connection"), this._serverConnection.close()))
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
			return t.microphone, t.camera, fe(this, void 0, void 0, function() {
				return de(this, function(n) {
					throw le("setMediaDeviceActive not supported on WebSocketSession", "notSupported")
				})
			})
		}, e
	}(),
	ur;
(function(e) {
	e.Scene = "scene"
})(ur || (ur = {}));
var hn;
(function(e) {
	e.Response = "response", e.Request = "request"
})(hn || (hn = {}));
var Ei;
(function(e) {
	e.Idle = "idle", e.Animating = "animating", e.Speaking = "speaking"
})(Ei || (Ei = {}));
var cr;
(function(e) {
	e.UI_CONTENT_AWARENESS = "UI_CONTENT_AWARENESS", e.UI_SDK_CAMERA_CONTROL = "UI_SDK_CAMERA_CONTROL"
})(cr || (cr = {}));
var St = [],
	tf = function() {
		return St.some(function(e) {
			return e.activeTargets.length > 0
		})
	},
	nf = function() {
		return St.some(function(e) {
			return e.skippedTargets.length > 0
		})
	},
	Qo = "ResizeObserver loop completed with undelivered notifications.",
	rf = function() {
		var e;
		typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
			message: Qo
		}) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = Qo), window.dispatchEvent(e)
	},
	_n;
(function(e) {
	e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box"
})(_n || (_n = {}));
var Et = function(e) {
		return Object.freeze(e)
	},
	of = function() {
		function e(t, n) {
			this.inlineSize = t, this.blockSize = n, Et(this)
		}
		return e
	}(),
	gl = function() {
		function e(t, n, r, i) {
			return this.x = t, this.y = n, this.width = r, this.height = i, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Et(this)
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
				u = t.height;
			return {
				x: n,
				y: r,
				top: i,
				right: o,
				bottom: s,
				left: a,
				width: l,
				height: u
			}
		}, e.fromRect = function(t) {
			return new e(t.x, t.y, t.width, t.height)
		}, e
	}(),
	so = function(e) {
		return e instanceof SVGElement && "getBBox" in e
	},
	yl = function(e) {
		if (so(e)) {
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
	Xo = function(e) {
		var t, n;
		if (e instanceof Element) return !0;
		var r = (n = (t = e) === null || t === void 0 ? void 0 : t.ownerDocument) === null || n === void 0 ? void 0 : n.defaultView;
		return !!(r && e instanceof r.Element)
	},
	sf = function(e) {
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
	pn = typeof window != "undefined" ? window : {},
	Bn = new WeakMap,
	Go = /auto|scroll/,
	af = /^tb|vertical/,
	lf = /msie|trident/i.test(pn.navigator && pn.navigator.userAgent),
	Ye = function(e) {
		return parseFloat(e || "0")
	},
	Dt = function(e, t, n) {
		return e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = !1), new of ((n ? t : e) || 0, (n ? e : t) || 0)
	},
	Yo = Et({
		devicePixelContentBoxSize: Dt(),
		borderBoxSize: Dt(),
		contentBoxSize: Dt(),
		contentRect: new gl(0, 0, 0, 0)
	}),
	bl = function(e, t) {
		if (t === void 0 && (t = !1), Bn.has(e) && !t) return Bn.get(e);
		if (yl(e)) return Bn.set(e, Yo), Yo;
		var n = getComputedStyle(e),
			r = so(e) && e.ownerSVGElement && e.getBBox(),
			i = !lf && n.boxSizing === "border-box",
			o = af.test(n.writingMode || ""),
			s = !r && Go.test(n.overflowY || ""),
			a = !r && Go.test(n.overflowX || ""),
			l = r ? 0 : Ye(n.paddingTop),
			u = r ? 0 : Ye(n.paddingRight),
			c = r ? 0 : Ye(n.paddingBottom),
			f = r ? 0 : Ye(n.paddingLeft),
			p = r ? 0 : Ye(n.borderTopWidth),
			h = r ? 0 : Ye(n.borderRightWidth),
			d = r ? 0 : Ye(n.borderBottomWidth),
			m = r ? 0 : Ye(n.borderLeftWidth),
			g = f + u,
			y = l + c,
			k = m + h,
			_ = p + d,
			C = a ? e.offsetHeight - _ - e.clientHeight : 0,
			S = s ? e.offsetWidth - k - e.clientWidth : 0,
			b = i ? g + k : 0,
			T = i ? y + _ : 0,
			M = r ? r.width : Ye(n.width) - b - S,
			F = r ? r.height : Ye(n.height) - T - C,
			z = M + g + S + k,
			A = F + y + C + _,
			D = Et({
				devicePixelContentBoxSize: Dt(Math.round(M * devicePixelRatio), Math.round(F * devicePixelRatio), o),
				borderBoxSize: Dt(z, A, o),
				contentBoxSize: Dt(M, F, o),
				contentRect: new gl(f, l, M, F)
			});
		return Bn.set(e, D), D
	},
	vl = function(e, t, n) {
		var r = bl(e, n),
			i = r.borderBoxSize,
			o = r.contentBoxSize,
			s = r.devicePixelContentBoxSize;
		switch (t) {
			case _n.DEVICE_PIXEL_CONTENT_BOX:
				return s;
			case _n.BORDER_BOX:
				return i;
			default:
				return o
		}
	},
	uf = function() {
		function e(t) {
			var n = bl(t);
			this.target = t, this.contentRect = n.contentRect, this.borderBoxSize = Et([n.borderBoxSize]), this.contentBoxSize = Et([n.contentBoxSize]), this.devicePixelContentBoxSize = Et([n.devicePixelContentBoxSize])
		}
		return e
	}(),
	wl = function(e) {
		if (yl(e)) return 1 / 0;
		for (var t = 0, n = e.parentNode; n;) t += 1, n = n.parentNode;
		return t
	},
	cf = function() {
		var e = 1 / 0,
			t = [];
		St.forEach(function(s) {
			if (s.activeTargets.length !== 0) {
				var a = [];
				s.activeTargets.forEach(function(u) {
					var c = new uf(u.target),
						f = wl(u.target);
					a.push(c), u.lastReportedSize = vl(u.target, u.observedBox), f < e && (e = f)
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
	Ko = function(e) {
		St.forEach(function(n) {
			n.activeTargets.splice(0, n.activeTargets.length), n.skippedTargets.splice(0, n.skippedTargets.length), n.observationTargets.forEach(function(i) {
				i.isActive() && (wl(i.target) > e ? n.activeTargets.push(i) : n.skippedTargets.push(i))
			})
		})
	},
	ff = function() {
		var e = 0;
		for (Ko(e); tf();) e = cf(), Ko(e);
		return nf() && rf(), e > 0
	},
	Zr, _l = [],
	df = function() {
		return _l.splice(0).forEach(function(e) {
			return e()
		})
	},
	hf = function(e) {
		if (!Zr) {
			var t = 0,
				n = document.createTextNode(""),
				r = {
					characterData: !0
				};
			new MutationObserver(function() {
				return df()
			}).observe(n, r), Zr = function() {
				n.textContent = "" + (t ? t-- : t++)
			}
		}
		_l.push(e), Zr()
	},
	pf = function(e) {
		hf(function() {
			requestAnimationFrame(e)
		})
	},
	Xn = 0,
	mf = function() {
		return !!Xn
	},
	gf = 250,
	yf = {
		attributes: !0,
		characterData: !0,
		childList: !0,
		subtree: !0
	},
	Zo = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"],
	Jo = function(e) {
		return e === void 0 && (e = 0), Date.now() + e
	},
	Jr = !1,
	bf = function() {
		function e() {
			var t = this;
			this.stopped = !0, this.listener = function() {
				return t.schedule()
			}
		}
		return e.prototype.run = function(t) {
			var n = this;
			if (t === void 0 && (t = gf), !Jr) {
				Jr = !0;
				var r = Jo(t);
				pf(function() {
					var i = !1;
					try {
						i = ff()
					} finally {
						if (Jr = !1, t = r - Jo(), !mf()) return;
						i ? n.run(1e3) : t > 0 ? n.run(t) : n.start()
					}
				})
			}
		}, e.prototype.schedule = function() {
			this.stop(), this.run()
		}, e.prototype.observe = function() {
			var t = this,
				n = function() {
					return t.observer && t.observer.observe(document.body, yf)
				};
			document.body ? n() : pn.addEventListener("DOMContentLoaded", n)
		}, e.prototype.start = function() {
			var t = this;
			this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Zo.forEach(function(n) {
				return pn.addEventListener(n, t.listener, !0)
			}))
		}, e.prototype.stop = function() {
			var t = this;
			this.stopped || (this.observer && this.observer.disconnect(), Zo.forEach(function(n) {
				return pn.removeEventListener(n, t.listener, !0)
			}), this.stopped = !0)
		}, e
	}(),
	Ti = new bf,
	es = function(e) {
		!Xn && e > 0 && Ti.start(), Xn += e, !Xn && Ti.stop()
	},
	vf = function(e) {
		return !so(e) && !sf(e) && getComputedStyle(e).display === "inline"
	},
	wf = function() {
		function e(t, n) {
			this.target = t, this.observedBox = n || _n.CONTENT_BOX, this.lastReportedSize = {
				inlineSize: 0,
				blockSize: 0
			}
		}
		return e.prototype.isActive = function() {
			var t = vl(this.target, this.observedBox, !0);
			return vf(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize
		}, e
	}(),
	_f = function() {
		function e(t, n) {
			this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = n
		}
		return e
	}(),
	Un = new WeakMap,
	ts = function(e, t) {
		for (var n = 0; n < e.length; n += 1)
			if (e[n].target === t) return n;
		return -1
	},
	Vn = function() {
		function e() {}
		return e.connect = function(t, n) {
			var r = new _f(t, n);
			Un.set(t, r)
		}, e.observe = function(t, n, r) {
			var i = Un.get(t),
				o = i.observationTargets.length === 0;
			ts(i.observationTargets, n) < 0 && (o && St.push(i), i.observationTargets.push(new wf(n, r && r.box)), es(1), Ti.schedule())
		}, e.unobserve = function(t, n) {
			var r = Un.get(t),
				i = ts(r.observationTargets, n),
				o = r.observationTargets.length === 1;
			i >= 0 && (o && St.splice(St.indexOf(r), 1), r.observationTargets.splice(i, 1), es(-1))
		}, e.disconnect = function(t) {
			var n = this,
				r = Un.get(t);
			r.observationTargets.slice().forEach(function(i) {
				return n.unobserve(t, i.target)
			}), r.activeTargets.splice(0, r.activeTargets.length)
		}, e
	}(),
	xf = function() {
		function e(t) {
			if (arguments.length === 0) throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
			if (typeof t != "function") throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
			Vn.connect(this, t)
		}
		return e.prototype.observe = function(t, n) {
			if (arguments.length === 0) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
			if (!Xo(t)) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
			Vn.observe(this, t, n)
		}, e.prototype.unobserve = function(t) {
			if (arguments.length === 0) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
			if (!Xo(t)) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
			Vn.unobserve(this, t)
		}, e.prototype.disconnect = function() {
			Vn.disconnect(this)
		}, e.toString = function() {
			return "function ResizeObserver () { [polyfill code] }"
		}, e
	}(),
	kf = function() {
		return Promise.all(Array.from(document.images).filter(function(e) {
			return !e.complete
		}).map(function(e) {
			return new Promise(function(t) {
				e.onload = t, e.onerror = t
			})
		}))
	},
	Cf = function(e, t) {
		t === void 0 && (t = 500);
		var n = -1;
		return function() {
			n && clearTimeout(n), n = setTimeout(function() {
				return e()
			}, t)
		}
	},
	Sf = function() {
		function e(t, n, r) {
			n === void 0 && (n = 300), r === void 0 && (r = new Tt);
			var i = this;
			this.scene = t, this.debounceTime = n, this.logger = r, this.VIDEO_FRAME_STR = "data-sm-video", this.VIDEO_FRAME_STR_BRACKETED = "[".concat(this.VIDEO_FRAME_STR, "]"), this.CONTENT_STR = "data-sm-content", this.CONTENT_STR_BRACKETED = "[".concat(this.CONTENT_STR, "]"), this.CUE_ATTRIBUTES = [this.VIDEO_FRAME_STR, this.CONTENT_STR], this.CUE_ATTRIBUTES_BRACKETED = [this.VIDEO_FRAME_STR_BRACKETED, this.CONTENT_STR_BRACKETED].join(), this.RESIZE_OBSERVER_BOX_OPTIONS = "border-box", this.callMeasure = !1, this.contentCollection = {}, this.videoFrame = null, this.debouncedMeasure = Cf(function() {
				return i.measureInternal()
			}, n), this.resizeObserver = new xf(function() {
				return i.measureDebounced()
			}), this.getInitialElements(), this.mutationObserver = new MutationObserver(function(o) {
				return i.mutationCallback(o)
			}), this.setupEventListeners(), this.observeMutations(), this.measureInternal()
		}
		return e.prototype.isLoggingEnabled = function() {
			return this.logger.isEnabled
		}, e.prototype.setLogging = function(t) {
			this.logger.enableLogging(t)
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
							u = t[i].attributeName;
						if (u === this.VIDEO_FRAME_STR) s.hasAttribute(u) ? (this.trackVideoElement(s), this.callMeasure = !0) : this.videoFrame && this.untrackVideoElement(s);
						else if (u === this.CONTENT_STR) {
							var c = s.getAttribute(u),
								f = t[i].oldValue;
							f && (this.resizeObserver.unobserve(this.contentCollection[f]), delete this.contentCollection[f]), c && (this.contentCollection[c] = s, this.resizeObserver.observe(s, {
								box: this.RESIZE_OBSERVER_BOX_OPTIONS
							})), this.callMeasure = !0
						}
						break
					} catch {
						this.logger.log("warn", "ContentAwareness: Failed to track non-element node", t[i].target)
					}
				}
			}
			this.callMeasure && (r ? kf().then(function() {
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
	ns = function(e, t) {
		return t === void 0 && (t = Y.None), e ? e.camera && e.microphone ? Y.MicrophoneAndCamera : e.camera ? Y.Camera : e.microphone ? Y.Microphone : Y.None : t
	},
	mn;
(function(e) {
	e.Showcards = "showcards", e.Hidecards = "hidecards", e.Feature = "feature", e.Marker = "marker"
})(mn || (mn = {}));
var Ef = function() {
	function e(t) {
		t === void 0 && (t = new Tt), this.logger = t, this._onCardChanged = new Ze, this._autoClearCards = !1, this.cardData = new Map, this.activeCardIds = new Set
	}
	return Object.defineProperty(e.prototype, "autoClearCards", {
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
				i ? n.push(et(et({}, i), {
					id: r
				})) : t.logger.log("error", "card data for ".concat(r, " does not exist"))
			}), n
		},
		enumerable: !1,
		configurable: !0
	}), e.prototype.onSpeechMarker = function(t) {
		var n = t.arguments;
		t.name === mn.Showcards ? this.addActiveCardIds(n) : t.name === mn.Hidecards && this.removeActiveCards(n), n.length === 0 && t.name === mn.Hidecards && this.clearActiveCards()
	}, e.prototype.onConversationResult = function(t) {
		var n = this,
			r = this.formatMessageBody(t);
		this._autoClearCards && this.clearActiveCards(), r.map(function(i) {
			var o = i.id,
				s = i.data;
			n.cardData.set(o, s)
		})
	}, e.prototype.reset = function() {
		this.clearActiveCards(), this.cardData.clear()
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
		this.activeCardIds = new Set(Si(Si([], Ci(this.activeCardIds), !1), Ci(t), !1)), this.onCardChanged.call(this.activeCards)
	}, e.prototype.removeActiveCards = function(t) {
		var n = this;
		t.forEach(function(r) {
			return n.activeCardIds.delete(r)
		}), this.onCardChanged.call(this.activeCards)
	}, e.prototype.formatCardData = function(t) {
		var n = typeof t == "string" ? JSON.parse(t) : t,
			r = n.component,
			i = n.type,
			o = Yc(n, ["component", "type"]);
		return et({
			type: i || r
		}, o)
	}, e
}();

function Tf(e) {
	return new Promise(function(t) {
		return setTimeout(function() {
			return t()
		}, e)
	})
}
var Af = 50,
	Of = 200,
	rs = 1;

function If(e, t, n) {
	return t === void 0 && (t = {}), fe(this, void 0, void 0, function() {
		var r, i, o, s, a, l;
		return de(this, function(u) {
			switch (u.label) {
				case 0:
					r = [], i = t.maxRetries || Af, o = t.delayMs || Of, a = 0, u.label = 1;
				case 1:
					if (!(a < i)) return [3, 8];
					u.label = 2;
				case 2:
					return u.trys.push([2, 4, , 6]), [4, e()];
				case 3:
					return s = u.sent(), n.connectionResult = {
						message: "success",
						value: s,
						retries: r
					}, [3, 6];
				case 4:
					if (l = u.sent(), r.push(l), n.connectionResult = {
							message: "failed",
							retries: r
						}, l instanceof Error && l.name === "noSessionToResume" && Gn(), !(l instanceof Error) || l.name !== "noScene") throw l;
					if (r.length === i) throw console.warn("Retry gave up after ".concat(i, ` retries:
`).concat(r.map(function(c) {
						return c instanceof Error ? c.message : c.toString()
					}).join(`
`))), l;
					return [4, Tf(o)];
				case 5:
					return u.sent(), [3, 7];
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

function Rf(e, t, n) {
	sessionStorage.setItem("sm-server", e), sessionStorage.setItem("sm-session-id", t), sessionStorage.setItem("sm-api-key", n)
}

function is() {
	return {
		server: sessionStorage.getItem("sm-server"),
		resumeSessionId: sessionStorage.getItem("sm-session-id"),
		savedApiKey: sessionStorage.getItem("sm-api-key")
	}
}

function Gn() {
	sessionStorage.removeItem("sm-server"), sessionStorage.removeItem("sm-session-id"), sessionStorage.removeItem("sm-api-key")
}
var xl = function() {
		function e(t, n, r, i, o, s) {
			n === void 0 && (n = !1), r === void 0 && (r = Y.MicrophoneAndCamera), i === void 0 && (i = Y.Microphone);
			var a = this;
			if (this._onConversationResultEvents = {}, this._onSpeechMarkerEvents = {}, this._session = void 0, this._isWebSocketOnly = !1, this._transactionId = 0, this._pendingResponses = {}, this._microphoneUnmuteTimer = void 0, this._echoCancellationEnabled = !0, this._serverControlledCameras = !1, this._loggingConfig = {
					session: {},
					contentAwareness: {}
				}, this._sessionResumeEnabled = !1, this._isResumedSession = !1, this._sendMetadata = {
					pageUrl: !1
				}, this._onMicrophoneActive = new Ze, this._onCameraActive = new Ze, this.iosVisibilityChange = function() {
					var c = document.visibilityState === "visible";
					console.log("rtc - new ui visibility: " + c), setTimeout(function() {
						a._session && a._session.sendRtcEvent("ui", {
							visible: c
						})
					}, 500)
				}, this.stopSpeakingWhenNotVisible = function() {
					document.visibilityState !== "visible" && a.sendRequest("stopSpeaking", {
						personaId: rs
					})
				}, this.isSceneOptions(t)) {
				var l = t;
				this._videoElement = l.videoElement, this._apiKey = l.apiKey, this._audioOnly = l.audioOnly || n, this._requestedUserMedia = ns(l.requestedMediaDevices, r), this._requiredUserMedia = ns(l.requiredMediaDevices, i), this.contentAwarenessDebounceTime = l.contentAwarenessDebounceTime, this._loggingConfig = et(et({}, this._loggingConfig), l.loggingConfig || {}), l.sendMetadata && (this._sendMetadata = l.sendMetadata)
			} else this._videoElement = t, this._audioOnly = n, this._requestedUserMedia = r, this._requiredUserMedia = i, this.contentAwarenessDebounceTime = o, this._loggingConfig = et(et({}, this._loggingConfig), s);
			this._onStateEvent = new Ze, this._onStateEvent.addListener(function(c, f) {
				a._onState && a._onState(c, f)
			}), this._onRecognizeResultsEvent = new Ze, this._onRecognizeResultsEvent.addListener(function(c, f, p, h) {
				a._onRecognizeResults && a._onRecognizeResults(c, f, p, h)
			}), this._onDisconnectedEvent = new Ze, this._onDisconnectedEvent.addListener(function(c, f, p) {
				Gn(), a._onDisconnected && a._onDisconnected(c, f, p)
			}), this._onUserTextEvent = new Ze, this._onUserTextEvent.addListener(function(c, f) {
				a._onUserText && a._onUserText(c, f)
			}), this._onDemoModeEvent = new Ze, this._underRuntimeHost = Boolean(window.SmIsUnderRuntimeHost);
			var u = new Uint32Array(3);
			window.crypto.getRandomValues(u), this._sceneId = u.toString().replace(/,/g, "-"), this.conversation = new Ef
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
			Gn(), this.conversation.reset(), (t = this.contentAwareness) === null || t === void 0 || t.disconnect(), document.removeEventListener("visibilitychange", this.stopSpeakingWhenNotVisible), (n = this._session) === null || n === void 0 || n.close(!0), this._session = void 0
		}, e.prototype.connect = function(t, n, r, i) {
			return fe(this, void 0, void 0, function() {
				var o, s, a, l, u, c, f = this;
				return de(this, function(p) {
					switch (p.label) {
						case 0:
							if (o = new Tt(this._loggingConfig.session.minLogLevel, this._loggingConfig.session.enabled), s = this.connectArgsToConfig(t, n, r, i), a = s.tokenServerUri || s.tokenServerAccessToken, this._apiKey && a && o.log("warn", "You are trying to connect via an API key and a token server. Please use one or the other"), !(this._apiKey && !a)) return [3, 5];
							p.label = 1;
						case 1:
							return p.trys.push([1, 4, , 5]), [4, this.fetchAuthConfig(this._apiKey)];
						case 2:
							return l = p.sent(), [4, l.json()];
						case 3:
							return u = p.sent(), c = is().server, s.tokenServerUri = u.url, s.tokenServerAccessToken = u.jwt, c && (s.tokenServerUri = u.url[u.url.length - 1] === "/" ? u.url + "server/" + c : u.url + "/server/" + c), [3, 5];
						case 4:
							throw p.sent(), le("Invalid API key", "serverConnectionFailed");
						case 5:
							if (!s.tokenServerUri || !s.tokenServerAccessToken) throw le("Please authenticate via an API key or with a serverUri and accessToken", "serverConnectionFailed");
							return this._underRuntimeHost ? (console.log("Detected RuntimeHost, creating local session"), this._session = new Kc(this._videoElement, s.tokenServerUri, s.userText, s.tokenServerAccessToken, this._audioOnly, o)) : this._isWebSocketOnly ? (console.log("Creating WebSocket session only"), this._session = new ef(s.tokenServerUri, s.tokenServerAccessToken, o)) : this._session = new Jc(this._videoElement, s.tokenServerUri, s.userText, s.tokenServerAccessToken, this._audioOnly, this._requestedUserMedia, this._requiredUserMedia, this._echoCancellationEnabled, o), this._session.onConnected = this.sessionConnected.bind(this), this._session.onMessage = this.onMessage.bind(this), this._session.onClose = this.sessionClosed.bind(this), this._session.onUserText = this.rtcUserText.bind(this), "microphoneActiveCallbacks" in this._session && (this._session.microphoneActiveCallbacks = this._onMicrophoneActive), "cameraActiveCallbacks" in this._session && (this._session.cameraActiveCallbacks = this._onCameraActive), this._session.features.isIos && document.addEventListener("visibilitychange", this.iosVisibilityChange), [4, If(function() {
								return fe(f, void 0, void 0, function() {
									return de(this, function(h) {
										switch (h.label) {
											case 0:
												return [4, this._session.connect()];
											case 1:
												return [2, h.sent()]
										}
									})
								})
							}, s.retryOptions, this)];
						case 6:
							return [2, p.sent()]
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
					category: ur.Scene,
					kind: hn.Request
				};
				this._session.sendMessage(r)
			}
		}, e.prototype.sendRequest = function(t, n) {
			var r = this;
			return n === void 0 && (n = {}), new Promise(function(i, o) {
				if (!r._session) {
					o(le("No session available", "noSession"));
					return
				}
				var s = r._sceneId + "_" + ++r._transactionId,
					a = {
						transaction: s,
						name: t,
						body: n,
						category: ur.Scene,
						kind: hn.Request
					},
					l = {
						resolve: i,
						reject: o
					};
				r._pendingResponses[s] = l, r._session && r._session.sendMessage(a)
			})
		}, e.prototype.onSceneMessage = function(t) {
			var n, r = t.name,
				i = t.body,
				o = t.kind,
				s = t.status,
				a = t.transaction;
			if (i && r === "state") {
				var l = i;
				this._onStateEvent.call(this, l), !((n = l.scene) === null || n === void 0) && n.featureFlags && this.enableFlaggedFeatures(l.scene.featureFlags), this.controlMicrophoneMute(i)
			} else if (i && r === "recognizeResults") {
				var u = i,
					c = u.status,
					f = u.errorMessage,
					p = u.results;
				this._onRecognizeResultsEvent.call(this, c, f, p)
			} else if (i && r === "conversationResult") {
				this.conversation.onConversationResult(i);
				var h = i.personaId;
				if (h) {
					var d = new ar(this, h),
						m = this._onConversationResultEvents[h];
					m.call(d, i)
				}
			} else if (i && r === "speechMarker") {
				this.conversation.onSpeechMarker(i);
				var h = i.personaId;
				if (h) {
					var d = new ar(this, h),
						g = this._onSpeechMarkerEvents[h];
					g.call(d, i)
				}
			} else i && r === "demoMode" && this._onDemoModeEvent.call(this, i);
			o === hn.Response && a && this.processResponse(i, r, s, a)
		}, e.prototype.processResponse = function(t, n, r, i) {
			var o = this._pendingResponses[i];
			if (o) {
				if (r === 0) o.resolve(t);
				else {
					var s = new Zc;
					s.requestName = n, s.status = r, s.responseBody = t, o.reject(s)
				}
				delete this._pendingResponses[i]
			}
		}, e.prototype.controlMicrophoneMute = function(t) {
			var n = this;
			if (t.persona && this._session && this._session.microphoneMuteDelay !== -1)
				for (var r in t.persona) {
					var i = t.persona[r];
					!i.speechState || (i.speechState === Ei.Speaking ? (this._session.microphoneMuted || (this._session.log("Persona is speaking - mute microphone"), this._session.microphoneMuted = !0), this._microphoneUnmuteTimer && (clearTimeout(this._microphoneUnmuteTimer), this._microphoneUnmuteTimer = void 0)) : this._session.microphoneMuted && !this._microphoneUnmuteTimer && (this._microphoneUnmuteTimer = setTimeout(function() {
						!n._session || !n._microphoneUnmuteTimer || (n._session.log("Persona is no longer speaking - unmute microphone"), n._session.microphoneMuted = !1, n._microphoneUnmuteTimer = void 0)
					}, this._session.microphoneMuteDelay)))
				}
		}, e.prototype.close = function() {
			this._session && this._session.close(!0)
		}, e.prototype.sessionConnected = function(t, n, r, i) {
			if (document.addEventListener("visibilitychange", this.stopSpeakingWhenNotVisible), this._sendMetadata.pageUrl) {
				var o = {
					personaId: rs,
					text: lr.PAGE_LOADED,
					variables: {
						pageUrl: window.location.href.split("?")[0]
					},
					optionalArgs: {}
				};
				//this.sendRequest("conversationSend", o), console.log(lr.PAGE_LOADED, o)
			}
			this._isResumedSession = n, t && (this._sessionResumeEnabled = !0, Rf(r, i, this._apiKey || ""))
		}, e.prototype.sessionClosed = function(t) {
			Gn(), this._session && (this._session.features.isIos && document.removeEventListener("visibilitychange", this.iosVisibilityChange), document.removeEventListener("visibilitychange", this.stopSpeakingWhenNotVisible), this.conversation.reset(), this._onDisconnectedEvent.call(this, this._session.sessionId, t))
		}, e.prototype.rtcUserText = function(t) {
			this._onUserTextEvent.call(this, t)
		}, e.prototype.enableFlaggedFeatures = function(t) {
			t.includes(cr.UI_CONTENT_AWARENESS) && (this.contentAwareness || (this.contentAwareness = new Sf(this, this.contentAwarenessDebounceTime, new Tt(this._loggingConfig.contentAwareness.minLogLevel, this._loggingConfig.contentAwareness.enabled)))), this._serverControlledCameras = t.includes(cr.UI_SDK_CAMERA_CONTROL)
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
			return fe(this, void 0, void 0, function() {
				return de(this, function(t) {
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
			return fe(this, void 0, void 0, function() {
				return de(this, function(r) {
					switch (r.label) {
						case 0:
							return this.isConnected() ? [4, (n = this._session) === null || n === void 0 ? void 0 : n.setMediaDeviceActive({
								microphone: t.microphone,
								camera: t.camera
							})] : [3, 2];
						case 1:
							return r.sent(), [3, 3];
						case 2:
							throw le("Connection has not been established", "noConnection");
						case 3:
							return [2]
					}
				})
			})
		}, e.prototype.startVideo = function(t) {
			return fe(this, void 0, void 0, function() {
				var n;
				return de(this, function(r) {
					switch (r.label) {
						case 0:
							if (n = t || this._videoElement, !n) throw le("Cannot find HTMLVideoElement", "noVideoElement");
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
							throw le("Cannot start media playback", "userInteractionRequired")
					}
				})
			})
		}, e.prototype.playVideo = function(t) {
			return fe(this, void 0, void 0, function() {
				return de(this, function(n) {
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
				i = is(),
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
		}, e
	}(),
	os;
(function(e) {
	e[e.none = 0] = "none", e[e.microphone = 1] = "microphone", e[e.microphoneAndCamera = 2] = "microphoneAndCamera", e[e.camera = 3] = "camera"
})(os || (os = {}));
var Mf = function() {
	function e() {
		this.Scene = xl, this.Persona = ar, this.userMedia = {
			none: Y.None,
			microphone: Y.Microphone,
			microphoneAndCamera: Y.MicrophoneAndCamera,
			camera: Y.Camera
		}, this.DetectCapabilities = function() {
			return new wr().detectWebRTCFeatures()
		}, this.setLogging = function(t) {}
	}
	return e
}();
new Mf;
var Qt, me, ei, ss, Ht = 0,
	kl = [],
	as = j.__b,
	ls = j.__r,
	us = j.diffed,
	cs = j.__c,
	fs = j.unmount;

function Mn(e, t) {
	j.__h && j.__h(me, e, Ht || t), Ht = 0;
	var n = me.__H || (me.__H = {
		__: [],
		__h: []
	});
	return e >= n.__.length && n.__.push({}), n.__[e]
}

function Be(e) {
	return Ht = 1, Cl(Sl, e)
}

function Cl(e, t, n) {
	var r = Mn(Qt++, 2);
	return r.t = e, r.__c || (r.__ = [n ? n(t) : Sl(void 0, t), function(i) {
		var o = r.t(r.__[0], i);
		r.__[0] !== o && (r.__ = [o, r.__[1]], r.__c.setState({}))
	}], r.__c = me), r.__
}

function we(e, t) {
	var n = Mn(Qt++, 3);
	!j.__s && lo(n.__H, t) && (n.__ = e, n.u = t, me.__H.__h.push(n))
}

function ao(e, t) {
	var n = Mn(Qt++, 4);
	!j.__s && lo(n.__H, t) && (n.__ = e, n.u = t, me.__h.push(n))
}

function ge(e) {
	return Ht = 5, tt(function() {
		return {
			current: e
		}
	}, [])
}

function Pf(e, t, n) {
	Ht = 6, ao(function() {
		return typeof e == "function" ? (e(t()), function() {
			return e(null)
		}) : e ? (e.current = t(), function() {
			return e.current = null
		}) : void 0
	}, n == null ? n : n.concat(e))
}

function tt(e, t) {
	var n = Mn(Qt++, 7);
	return lo(n.__H, t) ? (n.o = e(), n.u = t, n.__h = e, n.o) : n.__
}

function ct(e, t) {
	return Ht = 8, tt(function() {
		return e
	}, t)
}

function Pn(e) {
	var t = me.context[e.__c],
		n = Mn(Qt++, 9);
	return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(me)), t.props.value) : e.__
}

function Lf(e, t) {
	j.useDebugValue && j.useDebugValue(t ? t(e) : e)
}

function Df() {
	for (var e; e = kl.shift();)
		if (e.__P) try {
			e.__H.__h.forEach(Yn), e.__H.__h.forEach(Ai), e.__H.__h = []
		} catch (t) {
			e.__H.__h = [], j.__e(t, e.__v)
		}
}
j.__b = function(e) {
	me = null, as && as(e)
}, j.__r = function(e) {
	ls && ls(e), Qt = 0;
	var t = (me = e.__c).__H;
	t && (ei === me ? (t.__h = [], me.__h = [], t.__.forEach(function(n) {
		n.o = n.u = void 0
	})) : (t.__.forEach(function(n) {
		n.u && (n.__H = n.u), n.o && (n.__ = n.o), n.o = n.u = void 0
	}), t.__h.forEach(Yn), t.__h.forEach(Ai), t.__h = [])), ei = me
}, j.diffed = function(e) {
	us && us(e);
	var t = e.__c;
	t && t.__H && t.__H.__h.length && (kl.push(t) !== 1 && ss === j.requestAnimationFrame || ((ss = j.requestAnimationFrame) || function(n) {
		var r, i = function() {
				clearTimeout(o), ds && cancelAnimationFrame(r), setTimeout(n)
			},
			o = setTimeout(i, 100);
		ds && (r = requestAnimationFrame(i))
	})(Df)), me = null, ei = null
}, j.__c = function(e, t) {
	t.some(function(n) {
		try {
			n.__H && n.__H.__.forEach(function(r) {
				r.u && (r.__H = r.u), r.o && (r.__ = r.o), r.o = r.u = void 0
			}), n.__h.forEach(Yn), n.__h = n.__h.filter(function(r) {
				return !r.__ || Ai(r)
			})
		} catch (r) {
			t.some(function(i) {
				i.__h && (i.__h = [])
			}), t = [], j.__e(r, n.__v)
		}
	}), cs && cs(e, t)
}, j.unmount = function(e) {
	fs && fs(e);
	var t, n = e.__c;
	n && n.__H && (n.__H.__.forEach(function(r) {
		try {
			Yn(r)
		} catch (i) {
			t = i
		}
	}), t && j.__e(t, n.__v))
};
var ds = typeof requestAnimationFrame == "function";

function Yn(e) {
	var t = me,
		n = e.__c;
	typeof n == "function" && (e.__c = void 0, n()), me = t
}

function Ai(e) {
	var t = me;
	e.__c = e.__(), me = t
}

function lo(e, t) {
	return !e || e.length !== t.length || t.some(function(n, r) {
		return n !== e[r]
	})
}

function Sl(e, t) {
	return typeof t == "function" ? t(e) : t
}
var be = (e => (e.DISCONNECTED = "DISCONNECTED", e.CONNECTING = "CONNECTING", e.CONNECTED = "CONNECTED", e.TIMED_OUT = "TIMED_OUT", e.ERRORED = "ERRORED", e))(be || {}),
	Re = (e => (e.sessionId = "sm-session-id", e.apiKey = "sm-api-key", e.server = "sm-server", e.cameraEnabled = "sm-camera-enabled", e.microphoneEnabled = "sm-microphone-enabled", e.videoMuted = "sm-video-muted", e))(Re || {});

function Ff(e, t) {
	const [n, r] = Be(be.DISCONNECTED), [i, o] = Be(!1), [s, a] = Be(null), l = ge(null), u = ct(async () => {
		var h;
		try {
			const d = {};
			if (a(null), r(be.CONNECTING), t) {
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
			}), r(be.CONNECTED)
		} catch (d) {
			d instanceof Error && a(d), f(), r(be.ERRORED)
		}
	}, [e, t]), c = () => {
		f(), p(), e.disconnect(), r(be.DISCONNECTED)
	}, f = () => {
		sessionStorage.removeItem(Re.sessionId), sessionStorage.removeItem(Re.apiKey), sessionStorage.removeItem(Re.server), sessionStorage.removeItem(Re.cameraEnabled), sessionStorage.removeItem(Re.microphoneEnabled), sessionStorage.removeItem(Re.videoMuted)
	}, p = () => {
		!l.current || (l.current.srcObject = null)
	};
	return e.onDisconnectedEvent.addListener(() => {
		f(), p(), r(be.TIMED_OUT)
	}), {
		connectionStatus: n,
		connectionError: s,
		canAutoPlayAudio: i,
		connect: u,
		disconnect: c,
		videoRef: l,
		cleanupSessionStorage: f
	}
}

function zf({
	scene: e,
	canAutoPlayAudio: t,
	videoRef: n
}) {
	const [r, i] = Be(!t), [o, s] = Be(e.isMicrophoneActive()), [a, l] = Be(e.isCameraActive()), u = e == null ? void 0 : e.isConnected(), c = ct(async g => {
		try {
			await e.setMediaDeviceActive({
				microphone: g
			}), s(g), sessionStorage.setItem(Re.microphoneEnabled, g.toString())
		} catch {}
	}, [e]), f = ct(async g => {
		try {
			await e.setMediaDeviceActive({
				camera: g
			}), l(g), sessionStorage.setItem(Re.cameraEnabled, g.toString())
		} catch {}
	}, [e]), p = ct(({
		mute: g,
		saveSetting: y
	}) => {
		i(g), n.current && (n.current.muted = g), y && sessionStorage.setItem(Re.videoMuted, g.toString())
	}, [n]);
	return we(() => {
		if (u) {
			const g = sessionStorage.getItem(Re.videoMuted) === "true";
			p({
				mute: !t || g,
				saveSetting: !1
			})
		}
	}, [t, p, u]), we(() => {
		if (u) {
			const g = sessionStorage.getItem(Re.cameraEnabled) === "true",
				y = sessionStorage.getItem(Re.microphoneEnabled) === "true";
			g && f(!0), y && c(!0)
		}
	}, [u, f, c]), we(() => {
		u || (s(!1), l(!1))
	}, [u]), {
		isMicrophoneEnabled: o,
		isCameraEnabled: a,
		isVideoMuted: r,
		toggleMicrophone: () => c(!o),
		toggleCamera: () => f(!a),
		toggleVideoMuted: () => {
			p({
				mute: !r,
				saveSetting: !0
			})
		}
	}
}
var El, Tl, Oi = ml,
	Nf = 0;

function hs(e, t, n, r, i) {
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
		__v: --Nf,
		__source: i,
		__self: r
	};
	if (typeof e == "function" && (o = e.defaultProps))
		for (s in o) a[s] === void 0 && (a[s] = o[s]);
	return Oi.options.vnode && Oi.options.vnode(l), l
}
Oi.Fragment, Tl = hs, El = hs;
const I = Tl,
	ve = El,
	Al = vr(void 0);

function Ol({
	children: e,
	apiKey: t,
	tokenServer: n
}) {
	const i = tt(() => new xl({
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
		o = new ar(i, 1),
		s = u => {
			try {
				o.conversationSend(u, {}, {})
			} catch (c) {
				console.error(c)
			}
		},
		a = Ff(i, n),
		l = zf({
			scene: i,
			canAutoPlayAudio: a.canAutoPlayAudio,
			videoRef: a.videoRef
		});
	return I(Al.Provider, {
		value: {
			scene: i,
			persona: o,
			sendTextMessage: s,
			...a,
			...l
		},
		children: e
	})
}

function It() {
	const e = Pn(Al);
	if (e === void 0) throw new Error("useSoulMachines must be used within a SoulMachinesProvider");
	return e
}

function Il(e, t) {
	for (var n in t) e[n] = t[n];
	return e
}

function Ii(e, t) {
	for (var n in e)
		if (n !== "__source" && !(n in t)) return !0;
	for (var r in t)
		if (r !== "__source" && e[r] !== t[r]) return !0;
	return !1
}

function Ri(e) {
	this.props = e
}

function jf(e, t) {
	function n(i) {
		var o = this.props.ref,
			s = o == i.ref;
		return !s && o && (o.call ? o(null) : o.current = null), t ? !t(this.props, i) || !s : Ii(this.props, i)
	}

	function r(i) {
		return this.shouldComponentUpdate = n, _e(e, i)
	}
	return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r
}(Ri.prototype = new We).isPureReactComponent = !0, Ri.prototype.shouldComponentUpdate = function(e, t) {
	return Ii(this.props, e) || Ii(this.state, t)
};
var ps = j.__b;
j.__b = function(e) {
	e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), ps && ps(e)
};
var Bf = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.forward_ref") || 3911;

function Rl(e) {
	function t(n) {
		var r = Il({}, n);
		return delete r.ref, e(r, n.ref || null)
	}
	return t.$$typeof = Bf, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t
}
var ms = function(e, t) {
		return e == null ? null : nt(nt(e).map(t))
	},
	Uf = {
		map: ms,
		forEach: ms,
		count: function(e) {
			return e ? nt(e).length : 0
		},
		only: function(e) {
			var t = nt(e);
			if (t.length !== 1) throw "Children.only";
			return t[0]
		},
		toArray: nt
	},
	Vf = j.__e;
j.__e = function(e, t, n, r) {
	if (e.then) {
		for (var i, o = t; o = o.__;)
			if ((i = o.__c) && i.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k), i.__c(e, t)
	}
	Vf(e, t, n, r)
};
var gs = j.unmount;

function Kn() {
	this.__u = 0, this.t = null, this.__b = null
}

function Ml(e) {
	var t = e.__.__c;
	return t && t.__e && t.__e(e)
}

function $f(e) {
	var t, n, r;

	function i(o) {
		if (t || (t = e()).then(function(s) {
				n = s.default || s
			}, function(s) {
				r = s
			}), r) throw r;
		if (!n) throw t;
		return _e(n, o)
	}
	return i.displayName = "Lazy", i.__f = !0, i
}

function an() {
	this.u = null, this.o = null
}
j.unmount = function(e) {
	var t = e.__c;
	t && t.__R && t.__R(), t && e.__h === !0 && (e.type = null), gs && gs(e)
}, (Kn.prototype = new We).__c = function(e, t) {
	var n = t.__c,
		r = this;
	r.t == null && (r.t = []), r.t.push(n);
	var i = Ml(r.__v),
		o = !1,
		s = function() {
			o || (o = !0, n.__R = null, i ? i(a) : a())
		};
	n.__R = s;
	var a = function() {
			if (!--r.__u) {
				if (r.state.__e) {
					var u = r.state.__e;
					r.__v.__k[0] = function f(p, h, d) {
						return p && (p.__v = null, p.__k = p.__k && p.__k.map(function(m) {
							return f(m, h, d)
						}), p.__c && p.__c.__P === h && (p.__e && d.insertBefore(p.__e, p.__d), p.__c.__e = !0, p.__c.__P = d)), p
					}(u, u.__c.__P, u.__c.__O)
				}
				var c;
				for (r.setState({
						__e: r.__b = null
					}); c = r.t.pop();) c.forceUpdate()
			}
		},
		l = t.__h === !0;
	r.__u++ || l || r.setState({
		__e: r.__b = r.__v.__k[0]
	}), e.then(s, s)
}, Kn.prototype.componentWillUnmount = function() {
	this.t = []
}, Kn.prototype.render = function(e, t) {
	if (this.__b) {
		if (this.__v.__k) {
			var n = document.createElement("div"),
				r = this.__v.__k[0].__c;
			this.__v.__k[0] = function o(s, a, l) {
				return s && (s.__c && s.__c.__H && (s.__c.__H.__.forEach(function(u) {
					typeof u.__c == "function" && u.__c()
				}), s.__c.__H = null), (s = Il({}, s)).__c != null && (s.__c.__P === l && (s.__c.__P = a), s.__c = null), s.__k = s.__k && s.__k.map(function(u) {
					return o(u, a, l)
				})), s
			}(this.__b, n, r.__O = r.__P)
		}
		this.__b = null
	}
	var i = t.__e && _e(Xe, null, e.fallback);
	return i && (i.__h = null), [_e(Xe, null, t.__e ? null : e.children), i]
};
var ys = function(e, t, n) {
	if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
		for (n = e.u; n;) {
			for (; n.length > 3;) n.pop()();
			if (n[1] < n[0]) break;
			e.u = n = n[2]
		}
};

function Hf(e) {
	return this.getChildContext = function() {
		return e.context
	}, e.children
}

function qf(e) {
	var t = this,
		n = e.i;
	t.componentWillUnmount = function() {
		$t(null, t.l), t.l = null, t.i = null
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
	}), $t(_e(Hf, {
		context: t.context
	}, e.__v), t.l)) : t.l && t.componentWillUnmount()
}

function Wf(e, t) {
	var n = _e(qf, {
		__v: e,
		i: t
	});
	return n.containerInfo = t, n
}(an.prototype = new We).__e = function(e) {
	var t = this,
		n = Ml(t.__v),
		r = t.o.get(e);
	return r[0]++,
		function(i) {
			var o = function() {
				t.props.revealOrder ? (r.push(i), ys(t, e, r)) : i()
			};
			n ? n(o) : o()
		}
}, an.prototype.render = function(e) {
	this.u = null, this.o = new Map;
	var t = nt(e.children);
	e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
	for (var n = t.length; n--;) this.o.set(t[n], this.u = [1, 0, this.u]);
	return e.children
}, an.prototype.componentDidUpdate = an.prototype.componentDidMount = function() {
	var e = this;
	this.o.forEach(function(t, n) {
		ys(e, n, t)
	})
};
var Pl = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.element") || 60103,
	Qf = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
	Xf = typeof document != "undefined",
	Gf = function(e) {
		return (typeof Symbol != "undefined" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(e)
	};

function Yf(e, t, n) {
	return t.__k == null && (t.textContent = ""), $t(e, t), typeof n == "function" && n(), e ? e.__c : null
}

function Kf(e, t, n) {
	return oo(e, t), typeof n == "function" && n(), e ? e.__c : null
}
We.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
	Object.defineProperty(We.prototype, e, {
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
var bs = j.event;

function Zf() {}

function Jf() {
	return this.cancelBubble
}

function ed() {
	return this.defaultPrevented
}
j.event = function(e) {
	return bs && (e = bs(e)), e.persist = Zf, e.isPropagationStopped = Jf, e.isDefaultPrevented = ed, e.nativeEvent = e
};
var Ll, vs = {
		configurable: !0,
		get: function() {
			return this.class
		}
	},
	ws = j.vnode;
j.vnode = function(e) {
	var t = e.type,
		n = e.props,
		r = n;
	if (typeof t == "string") {
		var i = t.indexOf("-") === -1;
		for (var o in r = {}, n) {
			var s = n[o];
			Xf && o === "children" && t === "noscript" || o === "value" && "defaultValue" in n && s == null || (o === "defaultValue" && "value" in n && n.value == null ? o = "value" : o === "download" && s === !0 ? s = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !Gf(n.type) ? o = "oninput" : /^onfocus$/i.test(o) ? o = "onfocusin" : /^onblur$/i.test(o) ? o = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o) ? o = o.toLowerCase() : i && Qf.test(o) ? o = o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : s === null && (s = void 0), /^oninput/i.test(o) && (o = o.toLowerCase(), r[o] && (o = "oninputCapture")), r[o] = s)
		}
		t == "select" && r.multiple && Array.isArray(r.value) && (r.value = nt(n.children).forEach(function(a) {
			a.props.selected = r.value.indexOf(a.props.value) != -1
		})), t == "select" && r.defaultValue != null && (r.value = nt(n.children).forEach(function(a) {
			a.props.selected = r.multiple ? r.defaultValue.indexOf(a.props.value) != -1 : r.defaultValue == a.props.value
		})), e.props = r, n.class != n.className && (vs.enumerable = "className" in n, n.className != null && (r.class = n.className), Object.defineProperty(r, "className", vs))
	}
	e.$$typeof = Pl, ws && ws(e)
};
var _s = j.__r;
j.__r = function(e) {
	_s && _s(e), Ll = e.__c
};
var td = {
	ReactCurrentDispatcher: {
		current: {
			readContext: function(e) {
				return Ll.__n[e.__c].props.value
			}
		}
	}
};

function nd(e) {
	return _e.bind(null, e)
}

function Dl(e) {
	return !!e && e.$$typeof === Pl
}

function rd(e) {
	return Dl(e) ? pl.apply(null, arguments) : e
}

function id(e) {
	return !!e.__k && ($t(null, e), !0)
}

function od(e) {
	return e && (e.base || e.nodeType === 1 && e) || null
}
var Fl = function(e, t) {
		return e(t)
	},
	sd = function(e, t) {
		return e(t)
	},
	Ft = {
		useState: Be,
		useReducer: Cl,
		useEffect: we,
		useLayoutEffect: ao,
		useRef: ge,
		useImperativeHandle: Pf,
		useMemo: tt,
		useCallback: ct,
		useContext: Pn,
		useDebugValue: Lf,
		version: "17.0.2",
		Children: Uf,
		render: Yf,
		hydrate: Kf,
		unmountComponentAtNode: id,
		createPortal: Wf,
		createElement: _e,
		createContext: vr,
		createFactory: nd,
		cloneElement: rd,
		createRef: sl,
		Fragment: Xe,
		isValidElement: Dl,
		findDOMNode: od,
		Component: We,
		PureComponent: Ri,
		memo: jf,
		forwardRef: Rl,
		flushSync: sd,
		unstable_batchedUpdates: Fl,
		StrictMode: Xe,
		Suspense: Kn,
		SuspenseList: an,
		lazy: $f,
		__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: td
	};

function Mi() {
	return Mi = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
		}
		return e
	}, Mi.apply(this, arguments)
}
var xs = function(e) {
		var t = ge(e);
		return t.current = e, t
	},
	ad = "\u{1F4A1} react-cool-dimensions: the browser doesn't support Resize Observer, please use polyfill: https://github.com/wellyshen/react-cool-dimensions#resizeobserver-polyfill",
	ld = "\u{1F4A1} react-cool-dimensions: the browser doesn't support border-box size, fallback to content-box size. Please see: https://github.com/wellyshen/react-cool-dimensions#border-box-size-measurement",
	ud = function(t, n) {
		var r = "",
			i = -1;
		return Object.keys(t).forEach(function(o) {
			var s = t[o];
			n >= s && s > i && (r = o, i = s)
		}), r
	},
	cd = function(t) {
		var n = t === void 0 ? {} : t,
			r = n.useBorderBoxSize,
			i = n.breakpoints,
			o = n.updateOnBreakpointChange,
			s = n.shouldUpdate,
			a = n.onResize,
			l = n.polyfill,
			u = Be({
				currentBreakpoint: "",
				width: 0,
				height: 0
			}),
			c = u[0],
			f = u[1],
			p = ge({}),
			h = ge(),
			d = ge(),
			m = ge(!1),
			g = ge(),
			y = xs(a),
			k = xs(s),
			_ = ct(function() {
				d.current && d.current.disconnect()
			}, []),
			C = ct(function(S) {
				S && S !== g.current && (_(), g.current = S), d.current && g.current && d.current.observe(g.current)
			}, [_]);
		return we(function() {
			if ((!("ResizeObserver" in window) || !("ResizeObserverEntry" in window)) && !l) return console.error(ad),
				function() {
					return null
				};
			var S = null;
			return d.current = new(l || ResizeObserver)(function(b) {
					var T = b[0];
					S = requestAnimationFrame(function() {
						var M = T.contentBoxSize,
							F = T.borderBoxSize,
							z = T.contentRect,
							A = M;
						r && (F ? A = F : m.current || (console.warn(ld), m.current = !0)), A = Array.isArray(A) ? A[0] : A;
						var D = A ? A.inlineSize : z.width,
							B = A ? A.blockSize : z.height;
						if (!(D === p.current.width && B === p.current.height)) {
							p.current = {
								width: D,
								height: B
							};
							var L = {
								currentBreakpoint: "",
								width: D,
								height: B,
								entry: T,
								observe: C,
								unobserve: _
							};
							i ? (L.currentBreakpoint = ud(i, D), L.currentBreakpoint !== h.current && (y.current && y.current(L), h.current = L.currentBreakpoint)) : y.current && y.current(L);
							var N = {
								currentBreakpoint: L.currentBreakpoint,
								width: D,
								height: B,
								entry: T
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
					_(), S && cancelAnimationFrame(S)
				}
		}, [JSON.stringify(i), r, C, _, o]), Mi({}, c, {
			observe: C,
			unobserve: _
		})
	};
let uo = Dn();
const W = e => Ln(e, uo);
let co = Dn();
W.write = e => Ln(e, co);
let _r = Dn();
W.onStart = e => Ln(e, _r);
let fo = Dn();
W.onFrame = e => Ln(e, fo);
let ho = Dn();
W.onFinish = e => Ln(e, ho);
let zt = [];
W.setTimeout = (e, t) => {
	let n = W.now() + t,
		r = () => {
			let o = zt.findIndex(s => s.cancel == r);
			~o && zt.splice(o, 1), gt -= ~o ? 1 : 0
		},
		i = {
			time: n,
			handler: e,
			cancel: r
		};
	return zt.splice(zl(n), 0, i), gt += 1, Nl(), i
};
let zl = e => ~(~zt.findIndex(t => t.time > e) || ~zt.length);
W.cancel = e => {
	_r.delete(e), fo.delete(e), uo.delete(e), co.delete(e), ho.delete(e)
};
W.sync = e => {
	Pi = !0, W.batchedUpdates(e), Pi = !1
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
		_r.delete(n), t = null
	}, r
};
let po = typeof window != "undefined" ? window.requestAnimationFrame : () => {};
W.use = e => po = e;
W.now = typeof performance != "undefined" ? () => performance.now() : Date.now;
W.batchedUpdates = e => e();
W.catch = console.error;
W.frameLoop = "always";
W.advance = () => {
	W.frameLoop !== "demand" ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : Bl()
};
let mt = -1,
	gt = 0,
	Pi = !1;

function Ln(e, t) {
	Pi ? (t.delete(e), e(0)) : (t.add(e), Nl())
}

function Nl() {
	mt < 0 && (mt = 0, W.frameLoop !== "demand" && po(jl))
}

function fd() {
	mt = -1
}

function jl() {
	~mt && (po(jl), W.batchedUpdates(Bl))
}

function Bl() {
	let e = mt;
	mt = W.now();
	let t = zl(mt);
	t && (Ul(zt.splice(0, t), n => n.handler()), gt -= t), _r.flush(), uo.flush(e ? Math.min(64, mt - e) : 16.667), fo.flush(), co.flush(), ho.flush(), gt || fd()
}

function Dn() {
	let e = new Set,
		t = e;
	return {
		add(n) {
			gt += t == e && !e.has(n) ? 1 : 0, e.add(n)
		},
		delete(n) {
			return gt -= t == e && e.has(n) ? 1 : 0, e.delete(n)
		},
		flush(n) {
			t.size && (e = new Set, gt -= t.size, Ul(t, r => r(n) && e.add(r)), gt += e.size, t = e)
		}
	}
}

function Ul(e, t) {
	e.forEach(n => {
		try {
			t(n)
		} catch (r) {
			W.catch(r)
		}
	})
}

function Li() {}
const dd = (e, t, n) => Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		configurable: !0
	}),
	O = {
		arr: Array.isArray,
		obj: e => !!e && e.constructor.name === "Object",
		fun: e => typeof e == "function",
		str: e => typeof e == "string",
		num: e => typeof e == "number",
		und: e => e === void 0
	};

function at(e, t) {
	if (O.arr(e)) {
		if (!O.arr(t) || e.length !== t.length) return !1;
		for (let n = 0; n < e.length; n++)
			if (e[n] !== t[n]) return !1;
		return !0
	}
	return e === t
}
const V = (e, t) => e.forEach(t);

function rt(e, t, n) {
	if (O.arr(e)) {
		for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
		return
	}
	for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r)
}
const Ce = e => O.und(e) ? [] : O.arr(e) ? e : [e];

function gn(e, t) {
	if (e.size) {
		const n = Array.from(e);
		e.clear(), V(n, t)
	}
}
const ln = (e, ...t) => gn(e, n => n(...t)),
	Vl = () => typeof window == "undefined" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
let mo, $l, yt = null,
	Hl = !1,
	go = Li;
const hd = e => {
	e.to && ($l = e.to), e.now && (W.now = e.now), e.colors !== void 0 && (yt = e.colors), e.skipAnimation != null && (Hl = e.skipAnimation), e.createStringInterpolator && (mo = e.createStringInterpolator), e.requestAnimationFrame && W.use(e.requestAnimationFrame), e.batchedUpdates && (W.batchedUpdates = e.batchedUpdates), e.willAdvance && (go = e.willAdvance), e.frameLoop && (W.frameLoop = e.frameLoop)
};
var it = Object.freeze({
	__proto__: null,
	get createStringInterpolator() {
		return mo
	},
	get to() {
		return $l
	},
	get colors() {
		return yt
	},
	get skipAnimation() {
		return Hl
	},
	get willAdvance() {
		return go
	},
	assign: hd
});
const yn = new Set;
let Ne = [],
	ti = [],
	fr = 0;
const xr = {
	get idle() {
		return !yn.size && !Ne.length
	},
	start(e) {
		fr > e.priority ? (yn.add(e), W.onStart(pd)) : (ql(e), W(Di))
	},
	advance: Di,
	sort(e) {
		if (fr) W.onFrame(() => xr.sort(e));
		else {
			const t = Ne.indexOf(e);
			~t && (Ne.splice(t, 1), Wl(e))
		}
	},
	clear() {
		Ne = [], yn.clear()
	}
};

function pd() {
	yn.forEach(ql), yn.clear(), W(Di)
}

function ql(e) {
	Ne.includes(e) || Wl(e)
}

function Wl(e) {
	Ne.splice(md(Ne, t => t.priority > e.priority), 0, e)
}

function Di(e) {
	const t = ti;
	for (let n = 0; n < Ne.length; n++) {
		const r = Ne[n];
		fr = r.priority, r.idle || (go(r), r.advance(e), r.idle || t.push(r))
	}
	return fr = 0, ti = Ne, ti.length = 0, Ne = t, Ne.length > 0
}

function md(e, t) {
	const n = e.findIndex(t);
	return n < 0 ? e.length : n
}
const gd = {
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
	qe = "[-+]?\\d*\\.?\\d+",
	dr = qe + "%";

function kr(...e) {
	return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
}
const yd = new RegExp("rgb" + kr(qe, qe, qe)),
	bd = new RegExp("rgba" + kr(qe, qe, qe, qe)),
	vd = new RegExp("hsl" + kr(qe, dr, dr)),
	wd = new RegExp("hsla" + kr(qe, dr, dr, qe)),
	_d = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
	xd = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
	kd = /^#([0-9a-fA-F]{6})$/,
	Cd = /^#([0-9a-fA-F]{8})$/;

function Sd(e) {
	let t;
	return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = kd.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : yt && yt[e] !== void 0 ? yt[e] : (t = yd.exec(e)) ? (Pt(t[1]) << 24 | Pt(t[2]) << 16 | Pt(t[3]) << 8 | 255) >>> 0 : (t = bd.exec(e)) ? (Pt(t[1]) << 24 | Pt(t[2]) << 16 | Pt(t[3]) << 8 | Ss(t[4])) >>> 0 : (t = _d.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = Cd.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = xd.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = vd.exec(e)) ? (ks(Cs(t[1]), $n(t[2]), $n(t[3])) | 255) >>> 0 : (t = wd.exec(e)) ? (ks(Cs(t[1]), $n(t[2]), $n(t[3])) | Ss(t[4])) >>> 0 : null
}

function ni(e, t, n) {
	return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function ks(e, t, n) {
	const r = n < .5 ? n * (1 + t) : n + t - n * t,
		i = 2 * n - r,
		o = ni(i, r, e + 1 / 3),
		s = ni(i, r, e),
		a = ni(i, r, e - 1 / 3);
	return Math.round(o * 255) << 24 | Math.round(s * 255) << 16 | Math.round(a * 255) << 8
}

function Pt(e) {
	const t = parseInt(e, 10);
	return t < 0 ? 0 : t > 255 ? 255 : t
}

function Cs(e) {
	return (parseFloat(e) % 360 + 360) % 360 / 360
}

function Ss(e) {
	const t = parseFloat(e);
	return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255)
}

function $n(e) {
	const t = parseFloat(e);
	return t < 0 ? 0 : t > 100 ? 1 : t / 100
}

function Es(e) {
	let t = Sd(e);
	if (t === null) return e;
	t = t || 0;
	let n = (t & 4278190080) >>> 24,
		r = (t & 16711680) >>> 16,
		i = (t & 65280) >>> 8,
		o = (t & 255) / 255;
	return `rgba(${n}, ${r}, ${i}, ${o})`
}
const xn = (e, t, n) => {
	if (O.fun(e)) return e;
	if (O.arr(e)) return xn({
		range: e,
		output: t,
		extrapolate: n
	});
	if (O.str(e.output[0])) return mo(e);
	const r = e,
		i = r.output,
		o = r.range || [0, 1],
		s = r.extrapolateLeft || r.extrapolate || "extend",
		a = r.extrapolateRight || r.extrapolate || "extend",
		l = r.easing || (u => u);
	return u => {
		const c = Td(u, o);
		return Ed(u, o[c], o[c + 1], i[c], i[c + 1], l, s, a, r.map)
	}
};

function Ed(e, t, n, r, i, o, s, a, l) {
	let u = l ? l(e) : e;
	if (u < t) {
		if (s === "identity") return u;
		s === "clamp" && (u = t)
	}
	if (u > n) {
		if (a === "identity") return u;
		a === "clamp" && (u = n)
	}
	return r === i ? r : t === n ? e <= t ? r : i : (t === -1 / 0 ? u = -u : n === 1 / 0 ? u = u - t : u = (u - t) / (n - t), u = o(u), r === -1 / 0 ? u = -u : i === 1 / 0 ? u = u + r : u = u * (i - r) + r, u)
}

function Td(e, t) {
	for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
	return n - 1
}

function Fi() {
	return Fi = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
		}
		return e
	}, Fi.apply(this, arguments)
}
const qt = Symbol.for("FluidValue.get"),
	At = Symbol.for("FluidValue.observers"),
	Fe = e => Boolean(e && e[qt]),
	Oe = e => e && e[qt] ? e[qt]() : e,
	Ts = e => e[At] || null;

function Ad(e, t) {
	e.eventObserved ? e.eventObserved(t) : e(t)
}

function kn(e, t) {
	let n = e[At];
	n && n.forEach(r => {
		Ad(r, t)
	})
}
class Ql {
	constructor(t) {
		if (this[qt] = void 0, this[At] = void 0, !t && !(t = this.get)) throw Error("Unknown getter");
		Od(this, t)
	}
}
const Od = (e, t) => Xl(e, qt, t);

function Xt(e, t) {
	if (e[qt]) {
		let n = e[At];
		n || Xl(e, At, n = new Set), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t))
	}
	return t
}

function Cn(e, t) {
	let n = e[At];
	if (n && n.has(t)) {
		const r = n.size - 1;
		r ? n.delete(t) : e[At] = null, e.observerRemoved && e.observerRemoved(r, t)
	}
}
const Xl = (e, t, n) => Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		configurable: !0
	}),
	Zn = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
	Id = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
	As = new RegExp(`(${Zn.source})(%|[a-z]+)`, "i"),
	Rd = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
	Cr = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
	Gl = e => {
		const [t, n] = Md(e);
		if (!t || Vl()) return e;
		const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
		if (r) return r.trim();
		if (n && n.startsWith("--")) {
			const i = window.getComputedStyle(document.documentElement).getPropertyValue(n);
			return i || e
		} else {
			if (n && Cr.test(n)) return Gl(n);
			if (n) return n
		}
		return e
	},
	Md = e => {
		const t = Cr.exec(e);
		if (!t) return [, ];
		const [, n, r] = t;
		return [n, r]
	};
let ri;
const Pd = (e, t, n, r, i) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,
	Yl = e => {
		ri || (ri = yt ? new RegExp(`(${Object.keys(yt).join("|")})(?!\\w)`, "g") : /^\b$/);
		const t = e.output.map(o => Oe(o).replace(Cr, Gl).replace(Id, Es).replace(ri, Es)),
			n = t.map(o => o.match(Zn).map(Number)),
			i = n[0].map((o, s) => n.map(a => {
				if (!(s in a)) throw Error('The arity of each "output" value must be equal');
				return a[s]
			})).map(o => xn(Fi({}, e, {
				output: o
			})));
		return o => {
			var s;
			const a = !As.test(t[0]) && ((s = t.find(u => As.test(u))) == null ? void 0 : s.replace(Zn, ""));
			let l = 0;
			return t[0].replace(Zn, () => `${i[l++](o)}${a||""}`).replace(Rd, Pd)
		}
	},
	yo = "react-spring: ",
	Kl = e => {
		const t = e;
		let n = !1;
		if (typeof t != "function") throw new TypeError(`${yo}once requires a function parameter`);
		return (...r) => {
			n || (t(...r), n = !0)
		}
	},
	Ld = Kl(console.warn);

function Dd() {
	Ld(`${yo}The "interpolate" function is deprecated in v9 (use "to" instead)`)
}
const Fd = Kl(console.warn);

function zd() {
	Fd(`${yo}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`)
}

function Sr(e) {
	return O.str(e) && (e[0] == "#" || /\d/.test(e) || !Vl() && Cr.test(e) || e in (yt || {}))
}
const Ct = typeof window != "undefined" && window.document && window.document.createElement ? ao : we,
	Nd = () => {
		const e = ge(!1);
		return Ct(() => (e.current = !0, () => {
			e.current = !1
		}), []), e
	};

function bo() {
	const e = Be()[1],
		t = Nd();
	return () => {
		t.current && e(Math.random())
	}
}

function jd(e, t) {
	const [n] = Be(() => ({
		inputs: t,
		result: e()
	})), r = ge(), i = r.current;
	let o = i;
	return o ? Boolean(t && o.inputs && Bd(t, o.inputs)) || (o = {
		inputs: t,
		result: e()
	}) : o = n, we(() => {
		r.current = o, i == n && (n.inputs = n.result = void 0)
	}, [o]), o.result
}

function Bd(e, t) {
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n++)
		if (e[n] !== t[n]) return !1;
	return !0
}
const vo = e => we(e, Ud),
	Ud = [];

function zi(e) {
	const t = ge();
	return we(() => {
		t.current = e
	}), t.current
}
const Sn = Symbol.for("Animated:node"),
	Vd = e => !!e && e[Sn] === e,
	Je = e => e && e[Sn],
	wo = (e, t) => dd(e, Sn, t),
	Er = e => e && e[Sn] && e[Sn].getPayload();
class Zl {
	constructor() {
		this.payload = void 0, wo(this, this)
	}
	getPayload() {
		return this.payload || []
	}
}
class Gt extends Zl {
	constructor(t) {
		super(), this.done = !0, this.elapsedTime = void 0, this.lastPosition = void 0, this.lastVelocity = void 0, this.v0 = void 0, this.durationProgress = 0, this._value = t, O.num(this._value) && (this.lastPosition = this._value)
	}
	static create(t) {
		return new Gt(t)
	}
	getPayload() {
		return [this]
	}
	getValue() {
		return this._value
	}
	setValue(t, n) {
		return O.num(t) && (this.lastPosition = t, n && (t = Math.round(t / n) * n, this.done && (this.lastPosition = t))), this._value === t ? !1 : (this._value = t, !0)
	}
	reset() {
		const {
			done: t
		} = this;
		this.done = !1, O.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, t && (this.lastVelocity = null), this.v0 = null)
	}
}
class Wt extends Gt {
	constructor(t) {
		super(0), this._string = null, this._toString = void 0, this._toString = xn({
			output: [t, t]
		})
	}
	static create(t) {
		return new Wt(t)
	}
	getValue() {
		let t = this._string;
		return t == null ? this._string = this._toString(this._value) : t
	}
	setValue(t) {
		if (O.str(t)) {
			if (t == this._string) return !1;
			this._string = t, this._value = 1
		} else if (super.setValue(t)) this._string = null;
		else return !1;
		return !0
	}
	reset(t) {
		t && (this._toString = xn({
			output: [this.getValue(), t]
		})), this._value = 0, super.reset()
	}
}
const hr = {
	dependencies: null
};
class Tr extends Zl {
	constructor(t) {
		super(), this.source = t, this.setValue(t)
	}
	getValue(t) {
		const n = {};
		return rt(this.source, (r, i) => {
			Vd(r) ? n[i] = r.getValue(t) : Fe(r) ? n[i] = Oe(r) : t || (n[i] = r)
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
			return rt(t, this._addToPayload, n), Array.from(n)
		}
	}
	_addToPayload(t) {
		hr.dependencies && Fe(t) && hr.dependencies.add(t);
		const n = Er(t);
		n && V(n, r => this.add(r))
	}
}
class _o extends Tr {
	constructor(t) {
		super(t)
	}
	static create(t) {
		return new _o(t)
	}
	getValue() {
		return this.source.map(t => t.getValue())
	}
	setValue(t) {
		const n = this.getPayload();
		return t.length == n.length ? n.map((r, i) => r.setValue(t[i])).some(Boolean) : (super.setValue(t.map($d)), !0)
	}
}

function $d(e) {
	return (Sr(e) ? Wt : Gt).create(e)
}

function Ni(e) {
	const t = Je(e);
	return t ? t.constructor : O.arr(e) ? _o : Sr(e) ? Wt : Gt
}

function pr() {
	return pr = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
		}
		return e
	}, pr.apply(this, arguments)
}
const Os = (e, t) => {
	const n = !O.fun(e) || e.prototype && e.prototype.isReactComponent;
	return Rl((r, i) => {
		const o = ge(null),
			s = n && ct(d => {
				o.current = Wd(i, d)
			}, [i]),
			[a, l] = qd(r, t),
			u = bo(),
			c = () => {
				const d = o.current;
				if (n && !d) return;
				(d ? t.applyAnimatedValues(d, a.getValue(!0)) : !1) === !1 && u()
			},
			f = new Hd(c, l),
			p = ge();
		Ct(() => (p.current = f, V(l, d => Xt(d, f)), () => {
			p.current && (V(p.current.deps, d => Cn(d, p.current)), W.cancel(p.current.update))
		})), we(c, []), vo(() => () => {
			const d = p.current;
			V(d.deps, m => Cn(m, d))
		});
		const h = t.getComponentProps(a.getValue());
		return _e(e, pr({}, h, {
			ref: s
		}))
	})
};
class Hd {
	constructor(t, n) {
		this.update = t, this.deps = n
	}
	eventObserved(t) {
		t.type == "change" && W.write(this.update)
	}
}

function qd(e, t) {
	const n = new Set;
	return hr.dependencies = n, e.style && (e = pr({}, e, {
		style: t.createAnimatedStyle(e.style)
	})), e = new Tr(e), hr.dependencies = null, [e, n]
}

function Wd(e, t) {
	return e && (O.fun(e) ? e(t) : e.current = t), t
}
const Is = Symbol.for("AnimatedComponent"),
	Qd = (e, {
		applyAnimatedValues: t = () => !1,
		createAnimatedStyle: n = i => new Tr(i),
		getComponentProps: r = i => i
	} = {}) => {
		const i = {
				applyAnimatedValues: t,
				createAnimatedStyle: n,
				getComponentProps: r
			},
			o = s => {
				const a = Rs(s) || "Anonymous";
				return O.str(s) ? s = o[s] || (o[s] = Os(s, i)) : s = s[Is] || (s[Is] = Os(s, i)), s.displayName = `Animated(${a})`, s
			};
		return rt(e, (s, a) => {
			O.arr(e) && (a = Rs(s)), o[a] = o(s)
		}), {
			animated: o
		}
	},
	Rs = e => O.str(e) ? e : e && O.str(e.displayName) ? e.displayName : O.fun(e) && e.name || null;

function oe() {
	return oe = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
		}
		return e
	}, oe.apply(this, arguments)
}

function Ie(e, ...t) {
	return O.fun(e) ? e(...t) : e
}
const bn = (e, t) => e === !0 || !!(t && e && (O.fun(e) ? e(t) : Ce(e).includes(t))),
	Jl = (e, t) => O.obj(e) ? t && e[t] : e,
	eu = (e, t) => e.default === !0 ? e[t] : e.default ? e.default[t] : void 0,
	Xd = e => e,
	Ar = (e, t = Xd) => {
		let n = Gd;
		e.default && e.default !== !0 && (e = e.default, n = Object.keys(e));
		const r = {};
		for (const i of n) {
			const o = t(e[i], i);
			O.und(o) || (r[i] = o)
		}
		return r
	},
	Gd = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
	Yd = {
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

function Kd(e) {
	const t = {};
	let n = 0;
	if (rt(e, (r, i) => {
			Yd[i] || (t[i] = r, n++)
		}), n) return t
}

function xo(e) {
	const t = Kd(e);
	if (t) {
		const n = {
			to: t
		};
		return rt(e, (r, i) => i in t || (n[i] = r)), n
	}
	return oe({}, e)
}

function En(e) {
	return e = Oe(e), O.arr(e) ? e.map(En) : Sr(e) ? it.createStringInterpolator({
		range: [0, 1],
		output: [e, e]
	})(1) : e
}

function tu(e) {
	for (const t in e) return !0;
	return !1
}

function ji(e) {
	return O.fun(e) || O.arr(e) && O.obj(e[0])
}

function Bi(e, t) {
	var n;
	(n = e.ref) == null || n.delete(e), t == null || t.delete(e)
}

function nu(e, t) {
	if (t && e.ref !== t) {
		var n;
		(n = e.ref) == null || n.delete(e), t.add(e), e.ref = t
	}
}
const Or = {
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
	mr = 1.70158,
	Hn = mr * 1.525,
	Ms = mr + 1,
	Ps = 2 * Math.PI / 3,
	Ls = 2 * Math.PI / 4.5,
	qn = e => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375,
	Zd = {
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
		easeInBack: e => Ms * e * e * e - mr * e * e,
		easeOutBack: e => 1 + Ms * Math.pow(e - 1, 3) + mr * Math.pow(e - 1, 2),
		easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * ((Hn + 1) * 2 * e - Hn) / 2 : (Math.pow(2 * e - 2, 2) * ((Hn + 1) * (e * 2 - 2) + Hn) + 2) / 2,
		easeInElastic: e => e === 0 ? 0 : e === 1 ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * Ps),
		easeOutElastic: e => e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, -10 * e) * Math.sin((e * 10 - .75) * Ps) + 1,
		easeInOutElastic: e => e === 0 ? 0 : e === 1 ? 1 : e < .5 ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Ls)) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Ls) / 2 + 1,
		easeInBounce: e => 1 - qn(1 - e),
		easeOutBounce: qn,
		easeInOutBounce: e => e < .5 ? (1 - qn(1 - 2 * e)) / 2 : (1 + qn(2 * e - 1)) / 2
	},
	Ui = oe({}, Or.default, {
		mass: 1,
		damping: 1,
		easing: Zd.linear,
		clamp: !1
	});
class Jd {
	constructor() {
		this.tension = void 0, this.friction = void 0, this.frequency = void 0, this.damping = void 0, this.mass = void 0, this.velocity = 0, this.restVelocity = void 0, this.precision = void 0, this.progress = void 0, this.duration = void 0, this.easing = void 0, this.clamp = void 0, this.bounce = void 0, this.decay = void 0, this.round = void 0, Object.assign(this, Ui)
	}
}

function eh(e, t, n) {
	n && (n = oe({}, n), Ds(n, t), t = oe({}, n, t)), Ds(e, t), Object.assign(e, t);
	for (const s in Ui) e[s] == null && (e[s] = Ui[s]);
	let {
		mass: r,
		frequency: i,
		damping: o
	} = e;
	return O.und(i) || (i < .01 && (i = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / i, 2) * r, e.friction = 4 * Math.PI * o * r / i), e
}

function Ds(e, t) {
	if (!O.und(t.decay)) e.duration = void 0;
	else {
		const n = !O.und(t.tension) || !O.und(t.friction);
		(n || !O.und(t.frequency) || !O.und(t.damping) || !O.und(t.mass)) && (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0)
	}
}
const Fs = [];
class th {
	constructor() {
		this.changed = !1, this.values = Fs, this.toValues = null, this.fromValues = Fs, this.to = void 0, this.from = void 0, this.config = new Jd, this.immediate = !1
	}
}

function ru(e, {
	key: t,
	props: n,
	defaultProps: r,
	state: i,
	actions: o
}) {
	return new Promise((s, a) => {
		var l;
		let u, c, f = bn((l = n.cancel) != null ? l : r == null ? void 0 : r.cancel, t);
		if (f) d();
		else {
			O.und(n.pause) || (i.paused = bn(n.pause, t));
			let m = r == null ? void 0 : r.pause;
			m !== !0 && (m = i.paused || bn(m, t)), u = Ie(n.delay || 0, t), m ? (i.resumeQueue.add(h), o.pause()) : (o.resume(), h())
		}

		function p() {
			i.resumeQueue.add(h), i.timeouts.delete(c), c.cancel(), u = c.time - W.now()
		}

		function h() {
			u > 0 && !it.skipAnimation ? (i.delayed = !0, c = W.setTimeout(d, u), i.pauseQueue.add(p), i.timeouts.add(c)) : d()
		}

		function d() {
			i.delayed && (i.delayed = !1), i.pauseQueue.delete(p), i.timeouts.delete(c), e <= (i.cancelId || 0) && (f = !0);
			try {
				o.start(oe({}, n, {
					callId: e,
					cancel: f
				}), s)
			} catch (m) {
				a(m)
			}
		}
	})
}
const ko = (e, t) => t.length == 1 ? t[0] : t.some(n => n.cancelled) ? Nt(e.get()) : t.every(n => n.noop) ? iu(e.get()) : He(e.get(), t.every(n => n.finished)),
	iu = e => ({
		value: e,
		noop: !0,
		finished: !0,
		cancelled: !1
	}),
	He = (e, t, n = !1) => ({
		value: e,
		finished: t,
		cancelled: n
	}),
	Nt = e => ({
		value: e,
		cancelled: !0,
		finished: !1
	});

function ou(e, t, n, r) {
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
		const u = Ar(t, (g, y) => y === "onRest" ? void 0 : g);
		let c, f;
		const p = new Promise((g, y) => (c = g, f = y)),
			h = g => {
				const y = i <= (n.cancelId || 0) && Nt(r) || i !== n.asyncId && He(r, !1);
				if (y) throw g.result = y, f(g), g
			},
			d = (g, y) => {
				const k = new zs,
					_ = new Ns;
				return (async () => {
					if (it.skipAnimation) throw Tn(n), _.result = He(r, !1), f(_), _;
					h(k);
					const C = O.obj(g) ? oe({}, g) : oe({}, y, {
						to: g
					});
					C.parentId = i, rt(u, (b, T) => {
						O.und(C[T]) && (C[T] = b)
					});
					const S = await r.start(C);
					return h(k), n.paused && await new Promise(b => {
						n.resumeQueue.add(b)
					}), S
				})()
			};
		let m;
		if (it.skipAnimation) return Tn(n), He(r, !1);
		try {
			let g;
			O.arr(e) ? g = (async y => {
				for (const k of y) await d(k)
			})(e) : g = Promise.resolve(e(d, r.stop.bind(r))), await Promise.all([g.then(c), p]), m = He(r.get(), !0, !1)
		} catch (g) {
			if (g instanceof zs) m = g.result;
			else if (g instanceof Ns) m = g.result;
			else throw g
		} finally {
			i == n.asyncId && (n.asyncId = o, n.asyncTo = o ? a : void 0, n.promise = o ? l : void 0)
		}
		return O.fun(s) && W.batchedUpdates(() => {
			s(m, r, r.item)
		}), m
	})()
}

function Tn(e, t) {
	gn(e.timeouts, n => n.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
}
class zs extends Error {
	constructor() {
		super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."), this.result = void 0
	}
}
class Ns extends Error {
	constructor() {
		super("SkipAnimationSignal"), this.result = void 0
	}
}
const Vi = e => e instanceof Co;
let nh = 1;
class Co extends Ql {
	constructor(...t) {
		super(...t), this.id = nh++, this.key = void 0, this._priority = 0
	}
	get priority() {
		return this._priority
	}
	set priority(t) {
		this._priority != t && (this._priority = t, this._onPriorityChange(t))
	}
	get() {
		const t = Je(this);
		return t && t.getValue()
	}
	to(...t) {
		return it.to(this, t)
	}
	interpolate(...t) {
		return Dd(), it.to(this, t)
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
		kn(this, {
			type: "change",
			parent: this,
			value: t,
			idle: n
		})
	}
	_onPriorityChange(t) {
		this.idle || xr.sort(this), kn(this, {
			type: "priority",
			parent: this,
			priority: t
		})
	}
}
const Ot = Symbol.for("SpringPhase"),
	su = 1,
	$i = 2,
	Hi = 4,
	ii = e => (e[Ot] & su) > 0,
	pt = e => (e[Ot] & $i) > 0,
	en = e => (e[Ot] & Hi) > 0,
	js = (e, t) => t ? e[Ot] |= $i | su : e[Ot] &= ~$i,
	Bs = (e, t) => t ? e[Ot] |= Hi : e[Ot] &= ~Hi;
class rh extends Co {
	constructor(t, n) {
		if (super(), this.key = void 0, this.animation = new th, this.queue = void 0, this.defaultProps = {}, this._state = {
				paused: !1,
				delayed: !1,
				pauseQueue: new Set,
				resumeQueue: new Set,
				timeouts: new Set
			}, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !O.und(t) || !O.und(n)) {
			const r = O.obj(t) ? oe({}, t) : oe({}, n, {
				from: t
			});
			O.und(r.default) && (r.default = !0), this.start(r)
		}
	}
	get idle() {
		return !(pt(this) || this._state.asyncTo) || en(this)
	}
	get goal() {
		return Oe(this.animation.to)
	}
	get velocity() {
		const t = Je(this);
		return t instanceof Gt ? t.lastVelocity || 0 : t.getPayload().map(n => n.lastVelocity || 0)
	}
	get hasAnimated() {
		return ii(this)
	}
	get isAnimating() {
		return pt(this)
	}
	get isPaused() {
		return en(this)
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
		const a = Er(i.to);
		!a && Fe(i.to) && (s = Ce(Oe(i.to))), i.values.forEach((c, f) => {
			if (c.done) return;
			const p = c.constructor == Wt ? 1 : a ? a[f].lastPosition : s[f];
			let h = i.immediate,
				d = p;
			if (!h) {
				if (d = c.lastPosition, o.tension <= 0) {
					c.done = !0;
					return
				}
				let m = c.elapsedTime += t;
				const g = i.fromValues[f],
					y = c.v0 != null ? c.v0 : c.v0 = O.arr(o.velocity) ? o.velocity[f] : o.velocity;
				let k;
				if (O.und(o.duration))
					if (o.decay) {
						const _ = o.decay === !0 ? .998 : o.decay,
							C = Math.exp(-(1 - _) * m);
						d = g + y / (1 - _) * (1 - C), h = Math.abs(c.lastPosition - d) < .1, k = y * C
					} else {
						k = c.lastVelocity == null ? y : c.lastVelocity;
						const _ = o.precision || (g == p ? .005 : Math.min(1, Math.abs(p - g) * .001)),
							C = o.restVelocity || _ / 10,
							S = o.clamp ? 0 : o.bounce,
							b = !O.und(S),
							T = g == p ? c.v0 > 0 : g < p;
						let M, F = !1;
						const z = 1,
							A = Math.ceil(t / z);
						for (let D = 0; D < A && (M = Math.abs(k) > C, !(!M && (h = Math.abs(p - d) <= _, h))); ++D) {
							b && (F = d == p || d > p == T, F && (k = -k * S, d = p));
							const B = -o.tension * 1e-6 * (d - p),
								L = -o.friction * .001 * k,
								N = (B + L) / o.mass;
							k = k + N * z, d = d + k * z
						}
					}
				else {
					let _ = 1;
					o.duration > 0 && (this._memoizedDuration !== o.duration && (this._memoizedDuration = o.duration, c.durationProgress > 0 && (c.elapsedTime = o.duration * c.durationProgress, m = c.elapsedTime += t)), _ = (o.progress || 0) + m / this._memoizedDuration, _ = _ > 1 ? 1 : _ < 0 ? 0 : _, c.durationProgress = _), d = g + o.easing(_) * (p - g), k = (d - c.lastPosition) / t, h = _ == 1
				}
				c.lastVelocity = k, Number.isNaN(d) && (console.warn("Got NaN while animating:", this), h = !0)
			}
			a && !a[f].done && (h = !1), h ? c.done = !0 : n = !1, c.setValue(d, o.round) && (r = !0)
		});
		const l = Je(this),
			u = l.getValue();
		if (n) {
			const c = Oe(i.to);
			(u !== c || r) && !o.decay ? (l.setValue(c), this._onChange(c)) : r && o.decay && this._onChange(u), this._stop()
		} else r && this._onChange(u)
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
		if (pt(this)) {
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
		return O.und(t) ? (r = this.queue || [], this.queue = []) : r = [O.obj(t) ? t : oe({}, n, {
			to: t
		})], Promise.all(r.map(i => this._update(i))).then(i => ko(this, i))
	}
	stop(t) {
		const {
			to: n
		} = this.animation;
		return this._focus(this.get()), Tn(this._state, t && this._lastCallId), W.batchedUpdates(() => this._stop(n, t)), this
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
		r = O.obj(r) ? r[n] : r, (r == null || ji(r)) && (r = void 0), i = O.obj(i) ? i[n] : i, i == null && (i = void 0);
		const o = {
			to: r,
			from: i
		};
		return ii(this) || (t.reverse && ([r, i] = [i, r]), i = Oe(i), O.und(i) ? Je(this) || this._set(r) : this._set(i)), o
	}
	_update(t, n) {
		let r = oe({}, t);
		const {
			key: i,
			defaultProps: o
		} = this;
		r.default && Object.assign(o, Ar(r, (l, u) => /^on/.test(u) ? Jl(l, i) : l)), Vs(this, r, "onProps"), nn(this, "onProps", r, this);
		const s = this._prepareNode(r);
		if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
		const a = this._state;
		return ru(++this._lastCallId, {
			key: i,
			props: r,
			defaultProps: o,
			state: a,
			actions: {
				pause: () => {
					en(this) || (Bs(this, !0), ln(a.pauseQueue), nn(this, "onPause", He(this, tn(this, this.animation.to)), this))
				},
				resume: () => {
					en(this) && (Bs(this, !1), pt(this) && this._resume(), ln(a.resumeQueue), nn(this, "onResume", He(this, tn(this, this.animation.to)), this))
				},
				start: this._merge.bind(this, s)
			}
		}).then(l => {
			if (r.loop && l.finished && !(n && l.noop)) {
				const u = au(r);
				if (u) return this._update(u, !0)
			}
			return l
		})
	}
	_merge(t, n, r) {
		if (n.cancel) return this.stop(!0), r(Nt(this));
		const i = !O.und(t.to),
			o = !O.und(t.from);
		if (i || o)
			if (n.callId > this._lastToId) this._lastToId = n.callId;
			else return r(Nt(this));
		const {
			key: s,
			defaultProps: a,
			animation: l
		} = this, {
			to: u,
			from: c
		} = l;
		let {
			to: f = u,
			from: p = c
		} = t;
		o && !i && (!n.default || O.und(f)) && (f = p), n.reverse && ([f, p] = [p, f]);
		const h = !at(p, c);
		h && (l.from = p), p = Oe(p);
		const d = !at(f, u);
		d && this._focus(f);
		const m = ji(n.to),
			{
				config: g
			} = l,
			{
				decay: y,
				velocity: k
			} = g;
		(i || o) && (g.velocity = 0), n.config && !m && eh(g, Ie(n.config, s), n.config !== a.config ? Ie(a.config, s) : void 0);
		let _ = Je(this);
		if (!_ || O.und(f)) return r(He(this, !0));
		const C = O.und(n.reset) ? o && !n.default : !O.und(p) && bn(n.reset, s),
			S = C ? p : this.get(),
			b = En(f),
			T = O.num(b) || O.arr(b) || Sr(b),
			M = !m && (!T || bn(a.immediate || n.immediate, s));
		if (d) {
			const D = Ni(f);
			if (D !== _.constructor)
				if (M) _ = this._set(b);
				else throw Error(`Cannot animate between ${_.constructor.name} and ${D.name}, as the "to" prop suggests`)
		}
		const F = _.constructor;
		let z = Fe(f),
			A = !1;
		if (!z) {
			const D = C || !ii(this) && h;
			(d || D) && (A = at(En(S), b), z = !A), (!at(l.immediate, M) && !M || !at(g.decay, y) || !at(g.velocity, k)) && (z = !0)
		}
		if (A && pt(this) && (l.changed && !C ? z = !0 : z || this._stop(u)), !m && ((z || Fe(u)) && (l.values = _.getPayload(), l.toValues = Fe(f) ? null : F == Wt ? [1] : Ce(b)), l.immediate != M && (l.immediate = M, !M && !C && this._set(u)), z)) {
			const {
				onRest: D
			} = l;
			V(oh, L => Vs(this, n, L));
			const B = He(this, tn(this, u));
			ln(this._pendingCalls, B), this._pendingCalls.add(r), l.changed && W.batchedUpdates(() => {
				l.changed = !C, D == null || D(B, this), C ? Ie(a.onRest, B) : l.onStart == null || l.onStart(B, this)
			})
		}
		C && this._set(S), m ? r(ou(n.to, n, this._state, this)) : z ? this._start() : pt(this) && !d ? this._pendingCalls.add(r) : r(iu(S))
	}
	_focus(t) {
		const n = this.animation;
		t !== n.to && (Ts(this) && this._detach(), n.to = t, Ts(this) && this._attach())
	}
	_attach() {
		let t = 0;
		const {
			to: n
		} = this.animation;
		Fe(n) && (Xt(n, this), Vi(n) && (t = n.priority + 1)), this.priority = t
	}
	_detach() {
		const {
			to: t
		} = this.animation;
		Fe(t) && Cn(t, this)
	}
	_set(t, n = !0) {
		const r = Oe(t);
		if (!O.und(r)) {
			const i = Je(this);
			if (!i || !at(r, i.getValue())) {
				const o = Ni(r);
				!i || i.constructor != o ? wo(this, o.create(r)) : i.setValue(r), i && W.batchedUpdates(() => {
					this._onChange(r, n)
				})
			}
		}
		return Je(this)
	}
	_onStart() {
		const t = this.animation;
		t.changed || (t.changed = !0, nn(this, "onStart", He(this, tn(this, t.to)), this))
	}
	_onChange(t, n) {
		n || (this._onStart(), Ie(this.animation.onChange, t, this)), Ie(this.defaultProps.onChange, t, this), super._onChange(t, n)
	}
	_start() {
		const t = this.animation;
		Je(this).reset(Oe(t.to)), t.immediate || (t.fromValues = t.values.map(n => n.lastPosition)), pt(this) || (js(this, !0), en(this) || this._resume())
	}
	_resume() {
		it.skipAnimation ? this.finish() : xr.start(this)
	}
	_stop(t, n) {
		if (pt(this)) {
			js(this, !1);
			const r = this.animation;
			V(r.values, o => {
				o.done = !0
			}), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), kn(this, {
				type: "idle",
				parent: this
			});
			const i = n ? Nt(this.get()) : He(this.get(), tn(this, t != null ? t : r.to));
			ln(this._pendingCalls, i), r.changed && (r.changed = !1, nn(this, "onRest", i, this))
		}
	}
}

function tn(e, t) {
	const n = En(t),
		r = En(e.get());
	return at(r, n)
}

function au(e, t = e.loop, n = e.to) {
	let r = Ie(t);
	if (r) {
		const i = r !== !0 && xo(r),
			o = (i || e).reverse,
			s = !i || i.reset;
		return An(oe({}, e, {
			loop: t,
			default: !1,
			pause: void 0,
			to: !o || ji(n) ? n : void 0,
			from: s ? e.from : void 0,
			reset: s
		}, i))
	}
}

function An(e) {
	const {
		to: t,
		from: n
	} = e = xo(e), r = new Set;
	return O.obj(t) && Us(t, r), O.obj(n) && Us(n, r), e.keys = r.size ? Array.from(r) : null, e
}

function ih(e) {
	const t = An(e);
	return O.und(t.default) && (t.default = Ar(t)), t
}

function Us(e, t) {
	rt(e, (n, r) => n != null && t.add(r))
}
const oh = ["onStart", "onRest", "onChange", "onPause", "onResume"];

function Vs(e, t, n) {
	e.animation[n] = t[n] !== eu(t, n) ? Jl(t[n], e.key) : void 0
}

function nn(e, t, ...n) {
	var r, i, o, s;
	(r = (i = e.animation)[t]) == null || r.call(i, ...n), (o = (s = e.defaultProps)[t]) == null || o.call(s, ...n)
}
const sh = ["onStart", "onChange", "onRest"];
let ah = 1;
class lu {
	constructor(t, n) {
		this.id = ah++, this.springs = {}, this.queue = [], this.ref = void 0, this._flush = void 0, this._initialProps = void 0, this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._item = void 0, this._state = {
			paused: !1,
			pauseQueue: new Set,
			resumeQueue: new Set,
			timeouts: new Set
		}, this._events = {
			onStart: new Map,
			onChange: new Map,
			onRest: new Map
		}, this._onFrame = this._onFrame.bind(this), n && (this._flush = n), t && this.start(oe({
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
			O.und(r) || this.springs[n].set(r)
		}
	}
	update(t) {
		return t && this.queue.push(An(t)), this
	}
	start(t) {
		let {
			queue: n
		} = this;
		return t ? n = Ce(t).map(An) : this.queue = [], this._flush ? this._flush(this, n) : (hu(this, n), qi(this, n))
	}
	stop(t, n) {
		if (t !== !!t && (n = t), n) {
			const r = this.springs;
			V(Ce(n), i => r[i].stop(!!t))
		} else Tn(this._state, this._lastAsyncId), this.each(r => r.stop(!!t));
		return this
	}
	pause(t) {
		if (O.und(t)) this.start({
			pause: !0
		});
		else {
			const n = this.springs;
			V(Ce(t), r => n[r].pause())
		}
		return this
	}
	resume(t) {
		if (O.und(t)) this.start({
			pause: !1
		});
		else {
			const n = this.springs;
			V(Ce(t), r => n[r].resume())
		}
		return this
	}
	each(t) {
		rt(this.springs, t)
	}
	_onFrame() {
		const {
			onStart: t,
			onChange: n,
			onRest: r
		} = this._events, i = this._active.size > 0, o = this._changed.size > 0;
		(i && !this._started || o && !this._started) && (this._started = !0, gn(t, ([l, u]) => {
			u.value = this.get(), l(u, this, this._item)
		}));
		const s = !i && this._started,
			a = o || s && r.size ? this.get() : null;
		o && n.size && gn(n, ([l, u]) => {
			u.value = a, l(u, this, this._item)
		}), s && (this._started = !1, gn(r, ([l, u]) => {
			u.value = a, l(u, this, this._item)
		}))
	}
	eventObserved(t) {
		if (t.type == "change") this._changed.add(t.parent), t.idle || this._active.add(t.parent);
		else if (t.type == "idle") this._active.delete(t.parent);
		else return;
		W.onFrame(this._onFrame)
	}
}

function qi(e, t) {
	return Promise.all(t.map(n => uu(e, n))).then(n => ko(e, n))
}
async function uu(e, t, n) {
	const {
		keys: r,
		to: i,
		from: o,
		loop: s,
		onRest: a,
		onResolve: l
	} = t, u = O.obj(t.default) && t.default;
	s && (t.loop = !1), i === !1 && (t.to = null), o === !1 && (t.from = null);
	const c = O.arr(i) || O.fun(i) ? i : void 0;
	c ? (t.to = void 0, t.onRest = void 0, u && (u.onRest = void 0)) : V(sh, m => {
		const g = t[m];
		if (O.fun(g)) {
			const y = e._events[m];
			t[m] = ({
				finished: k,
				cancelled: _
			}) => {
				const C = y.get(g);
				C ? (k || (C.finished = !1), _ && (C.cancelled = !0)) : y.set(g, {
					value: null,
					finished: k || !1,
					cancelled: _ || !1
				})
			}, u && (u[m] = t[m])
		}
	});
	const f = e._state;
	t.pause === !f.paused ? (f.paused = t.pause, ln(t.pause ? f.pauseQueue : f.resumeQueue)) : f.paused && (t.pause = !0);
	const p = (r || Object.keys(e.springs)).map(m => e.springs[m].start(t)),
		h = t.cancel === !0 || eu(t, "cancel") === !0;
	(c || h && f.asyncId) && p.push(ru(++e._lastAsyncId, {
		props: t,
		state: f,
		actions: {
			pause: Li,
			resume: Li,
			start(m, g) {
				h ? (Tn(f, e._lastAsyncId), g(Nt(e))) : (m.onRest = a, g(ou(c, m, f, e)))
			}
		}
	})), f.paused && await new Promise(m => {
		f.resumeQueue.add(m)
	});
	const d = ko(e, await Promise.all(p));
	if (s && d.finished && !(n && d.noop)) {
		const m = au(t, s, i);
		if (m) return hu(e, [m]), uu(e, m, !0)
	}
	return l && W.batchedUpdates(() => l(d, e, e.item)), d
}

function Wi(e, t) {
	const n = oe({}, e.springs);
	return t && V(Ce(t), r => {
		O.und(r.keys) && (r = An(r)), O.obj(r.to) || (r = oe({}, r, {
			to: void 0
		})), du(n, r, i => fu(i))
	}), cu(e, n), n
}

function cu(e, t) {
	rt(t, (n, r) => {
		e.springs[r] || (e.springs[r] = n, Xt(n, e))
	})
}

function fu(e, t) {
	const n = new rh;
	return n.key = e, t && Xt(n, t), n
}

function du(e, t, n) {
	t.keys && V(t.keys, r => {
		(e[r] || (e[r] = n(r)))._prepareNode(t)
	})
}

function hu(e, t) {
	V(t, n => {
		du(e.springs, n, r => fu(r, e))
	})
}

function lh(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		i, o;
	for (o = 0; o < r.length; o++) i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n
}
const uh = ["children"],
	Fn = e => {
		let {
			children: t
		} = e, n = lh(e, uh);
		const r = Pn(gr),
			i = n.pause || !!r.pause,
			o = n.immediate || !!r.immediate;
		n = jd(() => ({
			pause: i,
			immediate: o
		}), [i, o]);
		const {
			Provider: s
		} = gr;
		return _e(s, {
			value: n
		}, t)
	},
	gr = ch(Fn, {});
Fn.Provider = gr.Provider;
Fn.Consumer = gr.Consumer;

function ch(e, t) {
	return Object.assign(e, vr(t)), e.Provider._context = e, e.Consumer._context = e, e
}
const pu = () => {
	const e = [],
		t = function(i) {
			zd();
			const o = [];
			return V(e, (s, a) => {
				if (O.und(i)) o.push(s.start());
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
			if (O.und(r)) i.push(o.start());
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
		return O.fun(i) ? i(s, o) : i
	};
	return t._getProps = n, t
};

function fh(e, t, n) {
	const r = O.fun(t) && t;
	r && !n && (n = []);
	const i = tt(() => r || arguments.length == 3 ? pu() : void 0, []),
		o = ge(0),
		s = bo(),
		a = tt(() => ({
			ctrls: [],
			queue: [],
			flush(y, k) {
				const _ = Wi(y, k);
				return o.current > 0 && !a.queue.length && !Object.keys(_).some(S => !y.springs[S]) ? qi(y, k) : new Promise(S => {
					cu(y, _), a.queue.push(() => {
						S(qi(y, k))
					}), s()
				})
			}
		}), []),
		l = ge([...a.ctrls]),
		u = [],
		c = zi(e) || 0;
	tt(() => {
		V(l.current.slice(e, c), y => {
			Bi(y, i), y.stop(!0)
		}), l.current.length = e, f(c, e)
	}, [e]), tt(() => {
		f(0, Math.min(c, e))
	}, n);

	function f(y, k) {
		for (let _ = y; _ < k; _++) {
			const C = l.current[_] || (l.current[_] = new lu(null, a.flush)),
				S = r ? r(_, C) : t[_];
			S && (u[_] = ih(S))
		}
	}
	const p = l.current.map((y, k) => Wi(y, u[k])),
		h = Pn(Fn),
		d = zi(h),
		m = h !== d && tu(h);
	Ct(() => {
		o.current++, a.ctrls = l.current;
		const {
			queue: y
		} = a;
		y.length && (a.queue = [], V(y, k => k())), V(l.current, (k, _) => {
			i == null || i.add(k), m && k.start({
				default: h
			});
			const C = u[_];
			C && (nu(k, C.ref), k.ref ? k.queue.push(C) : k.start(C))
		})
	}), vo(() => () => {
		V(a.ctrls, y => y.stop(!0))
	});
	const g = p.map(y => oe({}, y));
	return i ? [g, i] : g
}

function mu(e, t) {
	const n = O.fun(e),
		[
			[r], i
		] = fh(1, n ? e : [e], n ? t || [] : t);
	return n || arguments.length == 2 ? [r, i] : r
}
let ke;
(function(e) {
	e.MOUNT = "mount", e.ENTER = "enter", e.UPDATE = "update", e.LEAVE = "leave"
})(ke || (ke = {}));

function gu(e, t, n) {
	const r = O.fun(t) && t,
		{
			reset: i,
			sort: o,
			trail: s = 0,
			expires: a = !0,
			exitBeforeEnter: l = !1,
			onDestroyed: u,
			ref: c,
			config: f
		} = r ? r() : t,
		p = tt(() => r || arguments.length == 3 ? pu() : void 0, []),
		h = Ce(e),
		d = [],
		m = ge(null),
		g = i ? null : m.current;
	Ct(() => {
		m.current = d
	}), vo(() => (V(m.current, L => {
		var N;
		(N = L.ctrl.ref) == null || N.add(L.ctrl);
		const x = T.get(L);
		x && L.ctrl.start(x.payload)
	}), () => {
		V(m.current, L => {
			L.expired && clearTimeout(L.expirationId), Bi(L.ctrl, p), L.ctrl.stop(!0)
		})
	}));
	const y = hh(h, r ? r() : t, g),
		k = i && m.current || [];
	Ct(() => V(k, ({
		ctrl: L,
		item: N,
		key: x
	}) => {
		Bi(L, p), Ie(u, N, x)
	}));
	const _ = [];
	if (g && V(g, (L, N) => {
			L.expired ? (clearTimeout(L.expirationId), k.push(L)) : (N = _[N] = y.indexOf(L.key), ~N && (d[N] = L))
		}), V(h, (L, N) => {
			d[N] || (d[N] = {
				key: y[N],
				item: L,
				phase: ke.MOUNT,
				ctrl: new lu
			}, d[N].ctrl.item = L)
		}), _.length) {
		let L = -1;
		const {
			leave: N
		} = r ? r() : t;
		V(_, (x, G) => {
			const $ = g[G];
			~x ? (L = d.indexOf($), d[L] = oe({}, $, {
				item: h[x]
			})) : N && d.splice(++L, 0, $)
		})
	}
	O.fun(o) && d.sort((L, N) => o(L.item, N.item));
	let C = -s;
	const S = bo(),
		b = Ar(t),
		T = new Map,
		M = ge(new Map),
		F = ge(!1);
	V(d, (L, N) => {
		const x = L.key,
			G = L.phase,
			$ = r ? r() : t;
		let Z, K, w = Ie($.delay || 0, x);
		if (G == ke.MOUNT) Z = $.enter, K = ke.ENTER;
		else {
			const pe = y.indexOf(x) < 0;
			if (G != ke.LEAVE)
				if (pe) Z = $.leave, K = ke.LEAVE;
				else if (Z = $.update) K = ke.UPDATE;
			else return;
			else if (!pe) Z = $.enter, K = ke.ENTER;
			else return
		}
		if (Z = Ie(Z, L.item, N), Z = O.obj(Z) ? xo(Z) : {
				to: Z
			}, !Z.config) {
			const pe = f || b.config;
			Z.config = Ie(pe, L.item, N, K)
		}
		C += s;
		const v = oe({}, b, {
			delay: w + C,
			ref: c,
			immediate: $.immediate,
			reset: !1
		}, Z);
		if (K == ke.ENTER && O.und(v.from)) {
			const pe = r ? r() : t,
				ne = O.und(pe.initial) || g ? pe.from : pe.initial;
			v.from = Ie(ne, L.item, N)
		}
		const {
			onResolve: Le
		} = v;
		v.onResolve = pe => {
			Ie(Le, pe);
			const ne = m.current,
				ce = ne.find(Ee => Ee.key === x);
			if (!!ce && !(pe.cancelled && ce.phase != ke.UPDATE) && ce.ctrl.idle) {
				const Ee = ne.every(Te => Te.ctrl.idle);
				if (ce.phase == ke.LEAVE) {
					const Te = Ie(a, ce.item);
					if (Te !== !1) {
						const Ge = Te === !0 ? 0 : Te;
						if (ce.expired = !0, !Ee && Ge > 0) {
							Ge <= 2147483647 && (ce.expirationId = setTimeout(S, Ge));
							return
						}
					}
				}
				Ee && ne.some(Te => Te.expired) && (M.current.delete(ce), l && (F.current = !0), S())
			}
		};
		const ht = Wi(L.ctrl, v);
		K === ke.LEAVE && l ? M.current.set(L, {
			phase: K,
			springs: ht,
			payload: v
		}) : T.set(L, {
			phase: K,
			springs: ht,
			payload: v
		})
	});
	const z = Pn(Fn),
		A = zi(z),
		D = z !== A && tu(z);
	Ct(() => {
		D && V(d, L => {
			L.ctrl.start({
				default: z
			})
		})
	}, [z]), V(T, (L, N) => {
		if (M.current.size) {
			const x = d.findIndex(G => G.key === N.key);
			d.splice(x, 1)
		}
	}), Ct(() => {
		V(M.current.size ? M.current : T, ({
			phase: L,
			payload: N
		}, x) => {
			const {
				ctrl: G
			} = x;
			x.phase = L, p == null || p.add(G), D && L == ke.ENTER && G.start({
				default: z
			}), N && (nu(G, N.ref), G.ref && !F.current ? G.update(N) : (G.start(N), F.current && (F.current = !1)))
		})
	}, i ? void 0 : n);
	const B = L => _e(Xe, null, d.map((N, x) => {
		const {
			springs: G
		} = T.get(N) || N.ctrl, $ = L(oe({}, G), N.item, N, x);
		return $ && $.type ? _e($.type, oe({}, $.props, {
			key: O.str(N.key) || O.num(N.key) ? N.key : N.ctrl.id,
			ref: $.ref
		})) : $
	}));
	return p ? [B, p] : B
}
let dh = 1;

function hh(e, {
	key: t,
	keys: n = t
}, r) {
	if (n === null) {
		const i = new Set;
		return e.map(o => {
			const s = r && r.find(a => a.item === o && a.phase !== ke.LEAVE && !i.has(a));
			return s ? (i.add(s), s.key) : dh++
		})
	}
	return O.und(n) ? e : O.fun(n) ? e.map(n) : Ce(n)
}
class ph extends Co {
	constructor(t, n) {
		super(), this.key = void 0, this.idle = !0, this.calc = void 0, this._active = new Set, this.source = t, this.calc = xn(...n);
		const r = this._get(),
			i = Ni(r);
		wo(this, i.create(r))
	}
	advance(t) {
		const n = this._get(),
			r = this.get();
		at(n, r) || (Je(this).setValue(n), this._onChange(n, this.idle)), !this.idle && $s(this._active) && oi(this)
	}
	_get() {
		const t = O.arr(this.source) ? this.source.map(Oe) : Ce(Oe(this.source));
		return this.calc(...t)
	}
	_start() {
		this.idle && !$s(this._active) && (this.idle = !1, V(Er(this), t => {
			t.done = !1
		}), it.skipAnimation ? (W.batchedUpdates(() => this.advance()), oi(this)) : xr.start(this))
	}
	_attach() {
		let t = 1;
		V(Ce(this.source), n => {
			Fe(n) && Xt(n, this), Vi(n) && (n.idle || this._active.add(n), t = Math.max(t, n.priority + 1))
		}), this.priority = t, this._start()
	}
	_detach() {
		V(Ce(this.source), t => {
			Fe(t) && Cn(t, this)
		}), this._active.clear(), oi(this)
	}
	eventObserved(t) {
		t.type == "change" ? t.idle ? this.advance() : (this._active.add(t.parent), this._start()) : t.type == "idle" ? this._active.delete(t.parent) : t.type == "priority" && (this.priority = Ce(this.source).reduce((n, r) => Math.max(n, (Vi(r) ? r.priority : 0) + 1), 0))
	}
}

function mh(e) {
	return e.idle !== !1
}

function $s(e) {
	return !e.size || Array.from(e).every(mh)
}

function oi(e) {
	e.idle || (e.idle = !0, V(Er(e), t => {
		t.done = !0
	}), kn(e, {
		type: "idle",
		parent: e
	}))
}
it.assign({
	createStringInterpolator: Yl,
	to: (e, t) => new ph(e, t)
});

function So(e, t) {
	if (e == null) return {};
	var n = {},
		r = Object.keys(e),
		i, o;
	for (o = 0; o < r.length; o++) i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n
}
const gh = ["style", "children", "scrollTop", "scrollLeft"],
	yu = /^--/;

function yh(e, t) {
	return t == null || typeof t == "boolean" || t === "" ? "" : typeof t == "number" && t !== 0 && !yu.test(e) && !(vn.hasOwnProperty(e) && vn[e]) ? t + "px" : ("" + t).trim()
}
const Hs = {};

function bh(e, t) {
	if (!e.nodeType || !e.setAttribute) return !1;
	const n = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter",
		r = t,
		{
			style: i,
			children: o,
			scrollTop: s,
			scrollLeft: a
		} = r,
		l = So(r, gh),
		u = Object.values(l),
		c = Object.keys(l).map(f => n || e.hasAttribute(f) ? f : Hs[f] || (Hs[f] = f.replace(/([A-Z])/g, p => "-" + p.toLowerCase())));
	o !== void 0 && (e.textContent = o);
	for (let f in i)
		if (i.hasOwnProperty(f)) {
			const p = yh(f, i[f]);
			yu.test(f) ? e.style.setProperty(f, p) : e.style[f] = p
		} c.forEach((f, p) => {
		e.setAttribute(f, u[p])
	}), s !== void 0 && (e.scrollTop = s), a !== void 0 && (e.scrollLeft = a)
}
let vn = {
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
const vh = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1),
	wh = ["Webkit", "Ms", "Moz", "O"];
vn = Object.keys(vn).reduce((e, t) => (wh.forEach(n => e[vh(n, t)] = e[t]), e), vn);
const _h = ["x", "y", "z"],
	xh = /^(matrix|translate|scale|rotate|skew)/,
	kh = /^(translate)/,
	Ch = /^(rotate|skew)/,
	si = (e, t) => O.num(e) && e !== 0 ? e + t : e,
	Jn = (e, t) => O.arr(e) ? e.every(n => Jn(n, t)) : O.num(e) ? e === t : parseFloat(e) === t;
class Sh extends Tr {
	constructor(t) {
		let {
			x: n,
			y: r,
			z: i
		} = t, o = So(t, _h);
		const s = [],
			a = [];
		(n || r || i) && (s.push([n || 0, r || 0, i || 0]), a.push(l => [`translate3d(${l.map(u=>si(u,"px")).join(",")})`, Jn(l, 0)])), rt(o, (l, u) => {
			if (u === "transform") s.push([l || ""]), a.push(c => [c, c === ""]);
			else if (xh.test(u)) {
				if (delete o[u], O.und(l)) return;
				const c = kh.test(u) ? "px" : Ch.test(u) ? "deg" : "";
				s.push(Ce(l)), a.push(u === "rotate3d" ? ([f, p, h, d]) => [`rotate3d(${f},${p},${h},${si(d,c)})`, Jn(d, 0)] : f => [`${u}(${f.map(p=>si(p,c)).join(",")})`, Jn(f, u.startsWith("scale") ? 1 : 0)])
			}
		}), s.length && (o.transform = new Eh(s, a)), super(o)
	}
}
class Eh extends Ql {
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
			const o = Oe(r[0]),
				[s, a] = this.transforms[i](O.arr(o) ? o : r.map(Oe));
			t += " " + s, n = n && a
		}), n ? "none" : t
	}
	observerAdded(t) {
		t == 1 && V(this.inputs, n => V(n, r => Fe(r) && Xt(r, this)))
	}
	observerRemoved(t) {
		t == 0 && V(this.inputs, n => V(n, r => Fe(r) && Cn(r, this)))
	}
	eventObserved(t) {
		t.type == "change" && (this._value = null), kn(this, t)
	}
}
const Th = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"],
	Ah = ["scrollTop", "scrollLeft"];
it.assign({
	batchedUpdates: Fl,
	createStringInterpolator: Yl,
	colors: gd
});
const Oh = Qd(Th, {
		applyAnimatedValues: bh,
		createAnimatedStyle: e => new Sh(e),
		getComponentProps: e => So(e, Ah)
	}),
	Ir = Oh.animated;

function Ih(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function")
}
var bu = Ih,
	Rh = typeof sn == "object" && sn && sn.Object === Object && sn,
	Mh = Rh,
	Ph = Mh,
	Lh = typeof self == "object" && self && self.Object === Object && self,
	Dh = Ph || Lh || Function("return this")(),
	vu = Dh,
	Fh = vu,
	zh = function() {
		return Fh.Date.now()
	},
	Nh = zh,
	jh = /\s/;

function Bh(e) {
	for (var t = e.length; t-- && jh.test(e.charAt(t)););
	return t
}
var Uh = Bh,
	Vh = Uh,
	$h = /^\s+/;

function Hh(e) {
	return e && e.slice(0, Vh(e) + 1).replace($h, "")
}
var qh = Hh,
	Wh = vu,
	Qh = Wh.Symbol,
	wu = Qh,
	qs = wu,
	_u = Object.prototype,
	Xh = _u.hasOwnProperty,
	Gh = _u.toString,
	rn = qs ? qs.toStringTag : void 0;

function Yh(e) {
	var t = Xh.call(e, rn),
		n = e[rn];
	try {
		e[rn] = void 0;
		var r = !0
	} catch {}
	var i = Gh.call(e);
	return r && (t ? e[rn] = n : delete e[rn]), i
}
var Kh = Yh,
	Zh = Object.prototype,
	Jh = Zh.toString;

function ep(e) {
	return Jh.call(e)
}
var tp = ep,
	Ws = wu,
	np = Kh,
	rp = tp,
	ip = "[object Null]",
	op = "[object Undefined]",
	Qs = Ws ? Ws.toStringTag : void 0;

function sp(e) {
	return e == null ? e === void 0 ? op : ip : Qs && Qs in Object(e) ? np(e) : rp(e)
}
var ap = sp;

function lp(e) {
	return e != null && typeof e == "object"
}
var up = lp,
	cp = ap,
	fp = up,
	dp = "[object Symbol]";

function hp(e) {
	return typeof e == "symbol" || fp(e) && cp(e) == dp
}
var pp = hp,
	mp = qh,
	Xs = bu,
	gp = pp,
	Gs = 0 / 0,
	yp = /^[-+]0x[0-9a-f]+$/i,
	bp = /^0b[01]+$/i,
	vp = /^0o[0-7]+$/i,
	wp = parseInt;

function _p(e) {
	if (typeof e == "number") return e;
	if (gp(e)) return Gs;
	if (Xs(e)) {
		var t = typeof e.valueOf == "function" ? e.valueOf() : e;
		e = Xs(t) ? t + "" : t
	}
	if (typeof e != "string") return e === 0 ? e : +e;
	e = mp(e);
	var n = bp.test(e);
	return n || vp.test(e) ? wp(e.slice(2), n ? 2 : 8) : yp.test(e) ? Gs : +e
}
var xp = _p,
	kp = bu,
	ai = Nh,
	Ys = xp,
	Cp = "Expected a function",
	Sp = Math.max,
	Ep = Math.min;

function Tp(e, t, n) {
	var r, i, o, s, a, l, u = 0,
		c = !1,
		f = !1,
		p = !0;
	if (typeof e != "function") throw new TypeError(Cp);
	t = Ys(t) || 0, kp(n) && (c = !!n.leading, f = "maxWait" in n, o = f ? Sp(Ys(n.maxWait) || 0, t) : o, p = "trailing" in n ? !!n.trailing : p);

	function h(b) {
		var T = r,
			M = i;
		return r = i = void 0, u = b, s = e.apply(M, T), s
	}

	function d(b) {
		return u = b, a = setTimeout(y, t), c ? h(b) : s
	}

	function m(b) {
		var T = b - l,
			M = b - u,
			F = t - T;
		return f ? Ep(F, o - M) : F
	}

	function g(b) {
		var T = b - l,
			M = b - u;
		return l === void 0 || T >= t || T < 0 || f && M >= o
	}

	function y() {
		var b = ai();
		if (g(b)) return k(b);
		a = setTimeout(y, m(b))
	}

	function k(b) {
		return a = void 0, p && r ? h(b) : (r = i = void 0, s)
	}

	function _() {
		a !== void 0 && clearTimeout(a), u = 0, r = l = i = a = void 0
	}

	function C() {
		return a === void 0 ? s : k(ai())
	}

	function S() {
		var b = ai(),
			T = g(b);
		if (r = arguments, i = this, l = b, T) {
			if (a === void 0) return d(l);
			if (f) return clearTimeout(a), a = setTimeout(y, t), h(l)
		}
		return a === void 0 && (a = setTimeout(y, t)), s
	}
	return S.cancel = _, S.flush = C, S
}
var Ap = Tp;

function xu() {
	return ve("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		fill: "currentcolor",
		width: "100%",
		height: "100%",
		preserveAspectRatio: "xMidYMid",
		viewBox: "0 0 100 100",
		children: [I("title", {
			children: "Loading..."
		}), I("rect", {
			width: "0.938em",
			height: "0.938em",
			x: "42.5",
			y: "22.5",
			rx: "7.5",
			ry: "7.5",
			children: I("animate", {
				attributeName: "opacity",
				begin: "-0.8s",
				dur: "1s",
				keyTimes: "0;1",
				repeatCount: "indefinite",
				values: "1;0"
			})
		}), I("rect", {
			width: "0.938em",
			height: "0.938em",
			x: "42.5",
			y: "22.5",
			rx: "7.5",
			ry: "7.5",
			transform: "rotate(72 50 50)",
			children: I("animate", {
				attributeName: "opacity",
				begin: "-0.6s",
				dur: "1s",
				keyTimes: "0;1",
				repeatCount: "indefinite",
				values: "1;0"
			})
		}), I("rect", {
			width: "0.938em",
			height: "0.938em",
			x: "42.5",
			y: "22.5",
			rx: "7.5",
			ry: "7.5",
			transform: "rotate(144 50 50)",
			children: I("animate", {
				attributeName: "opacity",
				begin: "-0.4s",
				dur: "1s",
				keyTimes: "0;1",
				repeatCount: "indefinite",
				values: "1;0"
			})
		}), I("rect", {
			width: "0.938em",
			height: "0.938em",
			x: "42.5",
			y: "22.5",
			rx: "7.5",
			ry: "7.5",
			transform: "rotate(216 50 50)",
			children: I("animate", {
				attributeName: "opacity",
				begin: "-0.2s",
				dur: "1s",
				keyTimes: "0;1",
				repeatCount: "indefinite",
				values: "1;0"
			})
		}), I("rect", {
			width: "0.938em",
			height: "0.938em",
			x: "42.5",
			y: "22.5",
			rx: "7.5",
			ry: "7.5",
			transform: "rotate(288 50 50)",
			children: I("animate", {
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
var ku = {
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
})(ku);
var ft = ku.exports;
const Op = (e, t) => {
	const n = Math.round(t.width * devicePixelRatio),
		r = Math.round(t.height * devicePixelRatio);
	e.sendVideoBounds(n, r)
};

function Cu({
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
	} = It(), a = (m = r.videoElement) == null ? void 0 : m.srcObject, l = i === be.CONNECTING, u = i === be.CONNECTED, {
		observe: c
	} = cd({
		onResize: tt(() => Ap(({
			width: g,
			height: y
		}) => {
			Op(r, {
				width: g,
				height: y
			})
		}, 500), [r])
	}), f = ct(() => {
		n.current && (document.visibilityState !== "visible" ? n.current.pause() : n.current.play())
	}, [n]), p = mu({
		opacity: u ? "1" : "0",
		delay: u ? 1100 : 0,
		config: Or.gentle
	}), h = ft({
		"sm-w-full sm-h-full sm-overflow-hidden": !0,
		"sm-hidden": !u && !l
	}), d = ft({
		"sm-w-full sm-h-full sm-object-cover": !0,
		"sm-hidden": !u
	});
	return we(() => {
		t && s()
	}, [s, t]), we(() => {
		n.current && a && (n.current.srcObject = a)
	}, [n, a]), we(() => (u && document.addEventListener("visibilitychange", f), () => {
		document.removeEventListener("visibilitychange", f)
	}), [u, f]), ve("div", {
		className: h,
		children: [l && (e || I(xu, {})), I(Ir.video, {
			style: p,
			autoPlay: !0,
			playsInline: !0,
			"data-sm-video": !0,
			className: d,
			muted: o,
			ref: g => {
				c(g), g && (n.current = g)
			}
		})]
	})
}

function Su({
	autoConnect: e,
	tokenServer: t,
	apiKey: n,
	connectingIndicator: r
}) {
	return I(Ol, {
		apiKey: n,
		tokenServer: t,
		children: I(Cu, {
			autoConnect: e === "true",
			loadingIndicator: r
		})
	})
}
Su.defaultProps = {
	autoConnect: "true"
};
ro.exports.define("sm-video", () => Su, {
	attributes: ["api-key", "token-server", "auto-connect"]
});
const Ip = {
	microphone: ["M12 0C10.9391 0 9.92172 0.421427 9.17157 1.17157C8.42143 1.92172 8 2.93913 8 4V12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12V4C16 2.93913 15.5786 1.92172 14.8284 1.17157C14.0783 0.421427 13.0609 0 12 0ZM10.5858 2.58579C10.9609 2.21071 11.4696 2 12 2C12.5304 2 13.0391 2.21071 13.4142 2.58579C13.7893 2.96086 14 3.46957 14 4V12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12V4C10 3.46957 10.2107 2.96086 10.5858 2.58579Z", "M6 10C6 9.44771 5.55228 9 5 9C4.44772 9 4 9.44771 4 10V12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.60577 18.9195 9.247 19.7165 11 19.9373V22H8C7.44772 22 7 22.4477 7 23C7 23.5523 7.44772 24 8 24H16C16.5523 24 17 23.5523 17 23C17 22.4477 16.5523 22 16 22H13V19.9373C14.753 19.7165 16.3942 18.9195 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12V10C20 9.44771 19.5523 9 19 9C18.4477 9 18 9.44771 18 10V12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12V10Z"],
	microphoneOff: ["M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L8 9.41421V12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16C12.7206 16 13.4212 15.8056 14.0315 15.4457L15.4762 16.8904C14.4675 17.6075 13.254 18 12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12V10C6 9.44771 5.55228 9 5 9C4.44772 9 4 9.44771 4 10V12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.60577 18.9195 9.247 19.7165 11 19.9373V22H8C7.44772 22 7 22.4477 7 23C7 23.5523 7.44772 24 8 24H16C16.5523 24 17 23.5523 17 23C17 22.4477 16.5523 22 16 22H13V19.9373C14.423 19.758 15.7724 19.1991 16.9054 18.3196L22.2929 23.7071C22.6834 24.0976 23.3166 24.0976 23.7071 23.7071C24.0976 23.3166 24.0976 22.6834 23.7071 22.2929L1.70711 0.292893ZM12.5176 13.9319L10 11.4142V12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14C12.1763 14 12.3502 13.9767 12.5176 13.9319Z", "M9.17157 1.17157C9.92172 0.421427 10.9391 1.49012e-08 12 1.49012e-08C13.0609 1.49012e-08 14.0783 0.421427 14.8284 1.17157C15.5786 1.92172 16 2.93913 16 4V9.57683C16 10.1291 15.5523 10.5768 15 10.5768C14.4477 10.5768 14 10.1291 14 9.57683V4C14 3.46957 13.7893 2.96086 13.4142 2.58579C13.0391 2.21071 12.5304 2 12 2C11.4696 2 10.9609 2.21071 10.5858 2.58579C10.2731 2.89846 10.0746 3.30404 10.0173 3.73766C9.94484 4.28517 9.44228 4.67031 8.89476 4.59788C8.34725 4.52545 7.96211 4.02289 8.03454 3.47537C8.14926 2.60815 8.54615 1.79699 9.17157 1.17157Z", "M19 9C19.5523 9 20 9.44771 20 10V12C20 12.5535 19.9426 13.1011 19.8312 13.6349C19.7183 14.1755 19.1886 14.5223 18.6479 14.4094C18.1073 14.2965 17.7605 13.7668 17.8734 13.2261C17.957 12.8259 18 12.4152 18 12V10C18 9.44771 18.4477 9 19 9Z"],
	close: ["M18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711Z"],
	profile: ["M12 .2c2.5 0 4.6 2.1 4.6 4.6S14.5 9.4 12 9.4 7.4 7.3 7.4 4.8 9.5.2 12 .2zm-7 15c.4-2.8 2.8-4.9 5.6-4.9h2.7c2.8 0 5.2 2.1 5.6 4.9l.9 6.1c.2 1.3-.8 2.4-2.1 2.4l-5.7.1-5.8-.1c-1.3 0-2.3-1.2-2.1-2.4l.9-6.1z"],
	camera: ["M17 10.0568V7C17 5.34315 15.6569 4 14 4H3C1.34315 4 0 5.34315 0 7V17C0 18.6569 1.34315 20 3 20H14C15.6569 20 17 18.6569 17 17V13.9432L22.4188 17.8137C22.7236 18.0315 23.1245 18.0606 23.4576 17.8892C23.7907 17.7178 24 17.3746 24 17V7C24 6.62541 23.7907 6.28224 23.4576 6.11083C23.1245 5.93943 22.7236 5.96854 22.4188 6.18627L17 10.0568ZM2 7C2 6.44772 2.44772 6 3 6H14C14.5523 6 15 6.44772 15 7V17C15 17.5523 14.5523 18 14 18H3C2.44772 18 2 17.5523 2 17V7ZM22 15.0568L17.7205 12L22 8.94319V15.0568Z"],
	cameraOff: ["M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L2.61109 4.0253C1.95895 4.11055 1.34882 4.40854 0.87868 4.87868C0.316071 5.44129 1.49012e-08 6.20435 1.49012e-08 7V17C1.49012e-08 17.7957 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H14C14.7957 20 15.5587 19.6839 16.1213 19.1213C16.3957 18.847 16.6114 18.5249 16.7605 18.1747L22.2929 23.7071C22.6834 24.0976 23.3166 24.0976 23.7071 23.7071C24.0976 23.3166 24.0976 22.6834 23.7071 22.2929L1.70711 0.292893ZM15 16.4142L4.58579 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7V17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H14C14.2652 18 14.5196 17.8946 14.7071 17.7071C14.8946 17.5196 15 17.2652 15 17V16.4142Z", "M10.66 6H14C14.2652 6 14.5196 6.10536 14.7071 6.29289C14.8946 6.48043 15 6.73478 15 7V10.34C15 10.6052 15.1054 10.8596 15.2929 11.0471L16.2929 12.0471C16.6402 12.3944 17.1882 12.4381 17.5861 12.1503L22 8.95752V17C22 17.5523 22.4477 18 23 18C23.5523 18 24 17.5523 24 17V7C24 6.62434 23.7895 6.28037 23.4549 6.10947C23.1204 5.93857 22.7183 5.96958 22.4139 6.18975L17.1045 10.0303L17 9.92579V7C17 6.20435 16.6839 5.44129 16.1213 4.87868C15.5587 4.31607 14.7956 4 14 4H10.66C10.1077 4 9.66 4.44772 9.66 5C9.66 5.55228 10.1077 6 10.66 6Z"],
	chevronDown: ["M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"],
	chevronRight: ["M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z"],
	volume: ["M19.7772 4.22299C19.3868 3.83241 18.7536 3.83231 18.363 4.22278C17.9724 4.61324 17.9723 5.24641 18.3628 5.63699C20.05 7.32474 20.9979 9.61352 20.9979 12C20.9979 14.3865 20.05 16.6752 18.3628 18.363C17.9723 18.7536 17.9724 19.3867 18.363 19.7772C18.7536 20.1677 19.3868 20.1676 19.7772 19.777C21.8394 17.7142 22.9979 14.9168 22.9979 12C22.9979 9.08319 21.8394 6.2858 19.7772 4.22299Z", "M16.2472 7.75299C15.8568 7.36241 15.2236 7.36231 14.833 7.75278C14.4424 8.14324 14.4423 8.77641 14.8328 9.16699C15.5827 9.9171 16.0039 10.9343 16.0039 11.995C16.0039 13.0556 15.5827 14.0729 14.8328 14.823C14.4423 15.2136 14.4424 15.8467 14.833 16.2372C15.2236 16.6277 15.8568 16.6276 16.2472 16.237C17.372 15.1118 18.0039 13.586 18.0039 11.995C18.0039 10.404 17.372 8.87816 16.2472 7.75299Z", "M12 4.99999C12 4.61559 11.7797 4.26521 11.4332 4.09869C11.0867 3.93217 10.6755 3.97899 10.3753 4.21913L5.64922 7.99999H2C1.44772 7.99999 1 8.44771 1 8.99999V15C1 15.5523 1.44772 16 2 16H5.64922L10.3753 19.7809C10.6755 20.021 11.0867 20.0678 11.4332 19.9013C11.7797 19.7348 12 19.3844 12 19V4.99999ZM6.62469 9.78086L10 7.08062V16.9194L6.62469 14.2191C6.44738 14.0773 6.22707 14 6 14H3V9.99999H6C6.22707 9.99999 6.44738 9.92271 6.62469 9.78086Z"],
	volumeOff: ["M11.4332 4.09869C11.7797 4.26521 12 4.61559 12 4.99999V19C12 19.3844 11.7797 19.7348 11.4332 19.9013C11.0867 20.0678 10.6755 20.021 10.3753 19.7809L5.64922 16H2C1.44772 16 1 15.5523 1 15V8.99999C1 8.44771 1.44772 7.99999 2 7.99999H5.64922L10.3753 4.21913C10.6755 3.97899 11.0867 3.93217 11.4332 4.09869ZM10 7.08062L6.62469 9.78086C6.44738 9.92271 6.22707 9.99999 6 9.99999H3V14H6C6.22707 14 6.44738 14.0773 6.62469 14.2191L10 16.9194V7.08062Z", "M23.7071 8.29289C24.0976 8.68342 24.0976 9.31658 23.7071 9.70711L21.4142 12L23.7071 14.2929C24.0976 14.6834 24.0976 15.3166 23.7071 15.7071C23.3166 16.0976 22.6834 16.0976 22.2929 15.7071L20 13.4142L17.7071 15.7071C17.3166 16.0976 16.6834 16.0976 16.2929 15.7071C15.9024 15.3166 15.9024 14.6834 16.2929 14.2929L18.5858 12L16.2929 9.70711C15.9024 9.31658 15.9024 8.68342 16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289L20 10.5858L22.2929 8.29289C22.6834 7.90237 23.3166 7.90237 23.7071 8.29289Z"]
};

function Rr({
	size: e,
	name: t,
	title: n
}) {
	return ve("svg", {
		width: e,
		height: e,
		viewBox: "0 0 24 24",
		fill: "currentcolor",
		xmlns: "http://www.w3.org/2000/svg",
		"fill-rule": "evenodd",
		children: [I("title", {
			children: n || t
		}), Ip[t].map(r => I("path", {
			d: r
		}, r))]
	})
}
Rr.defaultProps = {
	size: "20px"
};
var un = (e => (e.default = "default", e.danger = "danger", e))(un || {});

function Lt({
	name: e,
	size: t,
	title: n,
	shadow: r,
	theme: i,
	onClick: o
}) {
	const s = ft({
		"sm-border-none sm-cursor-pointer sm-transition-colors": !0,
		"sm-bg-white sm-rounded-full sm-p-3 hover:sm-bg-grayscale-100 focus:sm-outline focus:sm-outline-2 focus:sm-outline-primary-200": i == "default",
		"sm-bg-error-400 sm-rounded-full sm-p-3 sm-text-white hover:sm-bg-error-500 focus:sm-outline focus:sm-outline-2 focus:sm-outline-primary-200": i == "danger",
		"sm-shadow": r
	});
	return I("button", {
		onClick: o,
		className: s,
		children: I(Rr, {
			name: e,
			size: t,
			title: n
		})
	})
}
Lt.defaultProps = {
	theme: "default",
	size: "20px"
};

function Rp() {
	const {
		disconnect: e,
		isMicrophoneEnabled: t,
		isCameraEnabled: n,
		isVideoMuted: r,
		toggleMicrophone: i,
		toggleCamera: o,
		toggleVideoMuted: s
	} = It(), a = r ? "volumeOff" : "volume", l = r ? "Unmute video" : "Mute video", u = t ? "microphone" : "microphoneOff", c = n ? "camera" : "cameraOff", f = t ? "Disable microphone" : "Enable microphone", p = n ? "Disable camera" : "Enable camera";
	return ve("div", {
		className: "sm-p-3 sm-flex sm-flex-col sm-justify-between sm-absolute sm-left-0 sm-w-full sm-h-full sm-top-0",
		children: [ve("div", {
			className: "sm-flex sm-justify-between",
			children: [I(Lt, {
				onClick: s,
				name: a,
				title: l
			}), I(Lt, {
				onClick: e,
				name: "close",
				title: "Close video"
			})]
		}), ve("div", {
			className: "sm-flex sm-justify-between",
			children: [I(Lt, {
				onClick: i,
				name: u,
				title: f,
				theme: t ? un.default : un.danger
			}), I(Lt, {
				onClick: o,
				name: c,
				title: p,
				theme: n ? un.default : un.danger
			})]
		})]
	})
}

function Yt({
	children: e,
	isDismissible: t,
	style: n,
	flush: r
} = {
	isDismissible: !0
}) {
	const [i, o] = Be(!1), s = ft({
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
	})((l, u) => u && ve(Ir.div, {
		className: "sm-fixed sm-z-max sm-max-w-contentCard sm-right-0 sm-flex sm-overflow-hidden sm-pointer-events-auto sm-p-8 -sm-m-8",
		style: {
			...l,
			...n
		},
		children: [I("div", {
			className: s,
			children: e
		}), t && I("div", {
			className: "sm-absolute sm-top-8 sm-right-8 sm-translate-x-1/3 -sm-translate-y-1/3",
			children: I(Lt, {
				name: "close",
				title: "Hide card",
				shadow: !0,
				onClick: () => o(!0)
			})
		})]
	}))
}
Yt.defaultProps = {
	isDismissible: !0,
	flush: !1
};

function jt({
	children: e,
	size: t,
	...n
}) {
	const r = ft({
		"sm-text-xs md:sm-text-sm": t === "sm",
		"sm-text-sm md:sm-text-base": t === "md",
		"sm-text-base md:sm-text-lg": t === "lg"
	});
	return I("p", {
		className: `sm-text-neutral-700 sm-font-primary sm-font-normal sm-m-0 ${r}`,
		...n,
		children: e
	})
}
jt.defaultProps = {
	size: "md"
};

function On({
	children: e,
	theme: t,
	onClick: n
}) {
	const r = ft({
		"sm-cursor-pointer sm-px-4 sm-py-2 sm-font-primary sm-text-sm sm-tracking-wider sm-transition-colors sm-uppercase sm-font-medium sm-outline disabled:sm-bg-primary-200  disabled:sm-cursor-not-allowed md:sm-text-base": !0,
		"sm-text-white sm-rounded-lg sm-bg-primary-600 hover:sm-bg-primary-700 active:sm-bg-primary-800 focus:sm-bg-primary-600 focus:sm-outline-2 focus:sm-outline-primary-200": t === "default",
		"sm-text-left sm-flex sm-justify-between sm-items-center sm-bg-transparent sm-rounded-sm sm-text-neutral-700 sm-capitalize sm-font-normal sm-border-grayscale-100 sm-border sm-border-solid sm-transition-colors sm-outline-1 sm-outline-offset-[-2px] hover:sm-border-neutral-600  hover:sm-outline-neutral-600  focus:sm-border-neutral-600 focus:sm-outline-neutral-600 active:sm-text-white active:sm-bg-neutral-600": t === "outline"
	});
	return I("button", {
		onClick: n,
		className: r,
		children: e
	})
}
On.defaultProps = {
	theme: "default"
};

function Mp({
	greeting: e
}) {
	const {
		connectionStatus: t,
		connect: n,
		connectionError: r
	} = It();
	return I(Yt, {
		children: (() => {
			if (t === be.ERRORED) return ve("div", {
				className: "sm-flex sm-flex-col sm-gap-y-3 sm-items-start",
				children: [I(jt, {
					children: `Unable to connect. ${r==null?void 0:r.message}`
				}), I(On, {
					onClick: n,
					children: "Retry"
				})]
			});
			if (t === be.TIMED_OUT) return ve("div", {
				className: "sm-flex sm-flex-col sm-gap-y-3 sm-items-start",
				children: [I(jt, {
					children: "Your call has ended. You can reconnect anytime you are ready."
				}), I(On, {
					onClick: n,
					children: "Connect"
				})]
			});
			if (t === be.DISCONNECTED) return I("div", {
				children: I(jt, {
					"data-sm-cy": "greetingText",
					children: e || "Got any questions? I'm happy to help."
				})
			})
		})()
	})
}

function Pp({
	src: e
}) {
	const t = "Digital person";
	return e ? I("div", {
		style: {
			backgroundImage: `url(${e})`
		},
		className: "sm-w-full sm-h-full sm-bg-cover sm-bg-center",
		"data-sm-cy": "profileImage",
		children: I("span", {
			class: "sm-sr-only",
			children: t
		})
	}) : I("div", {
		className: "sm-w-5 md:sm-w-12",
		children: I(Rr, {
			name: "profile",
			title: t,
			size: "100%"
		})
	})
}

function Eu({
	content: e,
	style: t
}) {
	const n = e.data;
	return n.url ? I("div", {
		className: "sm-flex sm-right-0",
		children: I(Yt, {
			isDismissible: !0,
			flush: !0,
			style: t,
			children: I("img", {
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

function xt({
	type: e,
	children: t,
	size: n = "lg"
}) {
	const r = ft({
		"sm-text-2xs md:sm-text-xs": n === "xs",
		"sm-text-xs md:sm-text-sm": n === "sm",
		"sm-text-sm md:sm-text-base": n === "md",
		"sm-text-base md:sm-text-lg": n === "lg",
		"sm-text-lg md:sm-text-xl": n === "xl",
		"sm-text-xl md:sm-text-2xl": n === "2xl"
	});
	return _e(e, {
		className: `sm-font-primary sm-font-medium sm-m-0 sm-text-neutral-700 ${r}`
	}, t)
}

function Qi({
	content: e,
	isExternal: t,
	style: n
}) {
	const r = e.data,
		i = {};
	return t && (i.target = "_blank", i.rel = "noreferrer"), I(Yt, {
		style: n,
		children: ve("div", {
			"data-sm-content": e.id,
			className: "sm-flex sm-flex-col sm-gap-y-3 sm-items-start sm-h-full sm-max-h-contentCard sm-overflow-y-auto",
			children: [r.imageUrl && I("img", {
				src: r.imageUrl,
				alt: r.title
			}), I(xt, {
				type: "h2",
				children: r.title
			}), r.description && I("div", {
				className: "sm-hidden md:sm-block",
				children: I(jt, {
					children: r.description
				})
			}), I("div", {
				className: "sm-bg-white sm-sticky sm-bottom-0 sm-w-full sm-pt-5 sm-border-solid sm-border-0 sm-border-t-2 sm-border-gray-50",
				children: I("a", {
					className: "sm-text-white sm-no-underline",
					href: r.url,
					...i,
					children: I(On, {
						children: "View Page"
					})
				})
			})]
		})
	})
}
Qi.defaultProps = {
	isExternal: !0
};
const Ks = ["http", "https", "mailto", "tel"];

function Lp(e) {
	const t = (e || "").trim(),
		n = t.charAt(0);
	if (n === "#" || n === "/") return t;
	const r = t.indexOf(":");
	if (r === -1) return t;
	let i = -1;
	for (; ++i < Ks.length;) {
		const o = Ks[i];
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

function Dp(e) {
	return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Zs(e.position) : "start" in e || "end" in e ? Zs(e) : "line" in e || "column" in e ? Xi(e) : ""
}

function Xi(e) {
	return Js(e && e.line) + ":" + Js(e && e.column)
}

function Zs(e) {
	return Xi(e && e.start) + "-" + Xi(e && e.end)
}

function Js(e) {
	return e && typeof e == "number" ? e : 1
}
class Ue extends Error {
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
		n && ("type" in n || "position" in n ? n.position && (o = n.position) : "start" in n || "end" in n ? o = n : ("line" in n || "column" in n) && (o.start = n)), this.name = Dp(n) || "1:1", this.message = typeof t == "object" ? t.message : t, this.stack = typeof t == "object" ? t.stack : "", this.reason = this.message, this.fatal, this.line = o.start.line, this.column = o.start.column, this.source = i[0], this.ruleId = i[1], this.position = o, this.actual, this.expected, this.file, this.url, this.note
	}
}
Ue.prototype.file = "";
Ue.prototype.name = "";
Ue.prototype.reason = "";
Ue.prototype.message = "";
Ue.prototype.stack = "";
Ue.prototype.fatal = null;
Ue.prototype.column = null;
Ue.prototype.line = null;
Ue.prototype.source = null;
Ue.prototype.ruleId = null;
Ue.prototype.position = null;
const Ke = {
	basename: Fp,
	dirname: zp,
	extname: Np,
	join: jp,
	sep: "/"
};

function Fp(e, t) {
	if (t !== void 0 && typeof t != "string") throw new TypeError('"ext" argument must be a string');
	zn(e);
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

function zp(e) {
	if (zn(e), e.length === 0) return ".";
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

function Np(e) {
	zn(e);
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

function jp(...e) {
	let t = -1,
		n;
	for (; ++t < e.length;) zn(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
	return n === void 0 ? "." : Bp(n)
}

function Bp(e) {
	zn(e);
	const t = e.charCodeAt(0) === 47;
	let n = Up(e, !t);
	return n.length === 0 && !t && (n = "."), n.length > 0 && e.charCodeAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n
}

function Up(e, t) {
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

function zn(e) {
	if (typeof e != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(e))
}
const Vp = {
	cwd: $p
};

function $p() {
	return "/"
}

function Gi(e) {
	return e !== null && typeof e == "object" && e.href && e.origin
}

function Hp(e) {
	if (typeof e == "string") e = new URL(e);
	else if (!Gi(e)) {
		const t = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + e + "`");
		throw t.code = "ERR_INVALID_ARG_TYPE", t
	}
	if (e.protocol !== "file:") {
		const t = new TypeError("The URL must be of scheme file");
		throw t.code = "ERR_INVALID_URL_SCHEME", t
	}
	return qp(e)
}

function qp(e) {
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
const li = ["history", "path", "basename", "stem", "extname", "dirname"];
class Au {
	constructor(t) {
		let n;
		t ? typeof t == "string" || Tu(t) ? n = {
			value: t
		} : Gi(t) ? n = {
			path: t
		} : n = t : n = {}, this.data = {}, this.messages = [], this.history = [], this.cwd = Vp.cwd(), this.value, this.stored, this.result, this.map;
		let r = -1;
		for (; ++r < li.length;) {
			const o = li[r];
			o in n && n[o] !== void 0 && (this[o] = o === "history" ? [...n[o]] : n[o])
		}
		let i;
		for (i in n) li.includes(i) || (this[i] = n[i])
	}
	get path() {
		return this.history[this.history.length - 1]
	}
	set path(t) {
		Gi(t) && (t = Hp(t)), ci(t, "path"), this.path !== t && this.history.push(t)
	}
	get dirname() {
		return typeof this.path == "string" ? Ke.dirname(this.path) : void 0
	}
	set dirname(t) {
		ea(this.basename, "dirname"), this.path = Ke.join(t || "", this.basename)
	}
	get basename() {
		return typeof this.path == "string" ? Ke.basename(this.path) : void 0
	}
	set basename(t) {
		ci(t, "basename"), ui(t, "basename"), this.path = Ke.join(this.dirname || "", t)
	}
	get extname() {
		return typeof this.path == "string" ? Ke.extname(this.path) : void 0
	}
	set extname(t) {
		if (ui(t, "extname"), ea(this.dirname, "extname"), t) {
			if (t.charCodeAt(0) !== 46) throw new Error("`extname` must start with `.`");
			if (t.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots")
		}
		this.path = Ke.join(this.dirname, this.stem + (t || ""))
	}
	get stem() {
		return typeof this.path == "string" ? Ke.basename(this.path, this.extname) : void 0
	}
	set stem(t) {
		ci(t, "stem"), ui(t, "stem"), this.path = Ke.join(this.dirname || "", t + (this.extname || ""))
	}
	toString(t) {
		return (this.value || "").toString(t)
	}
	message(t, n, r) {
		const i = new Ue(t, n, r);
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

function ui(e, t) {
	if (e && e.includes(Ke.sep)) throw new Error("`" + t + "` cannot be a path: did not expect `" + Ke.sep + "`")
}

function ci(e, t) {
	if (!e) throw new Error("`" + t + "` cannot be empty")
}

function ea(e, t) {
	if (!e) throw new Error("Setting `" + t + "` requires `path` to be set too")
}

function ta(e) {
	if (e) throw e
}
var er = Object.prototype.hasOwnProperty,
	Ou = Object.prototype.toString,
	na = Object.defineProperty,
	ra = Object.getOwnPropertyDescriptor,
	ia = function(t) {
		return typeof Array.isArray == "function" ? Array.isArray(t) : Ou.call(t) === "[object Array]"
	},
	oa = function(t) {
		if (!t || Ou.call(t) !== "[object Object]") return !1;
		var n = er.call(t, "constructor"),
			r = t.constructor && t.constructor.prototype && er.call(t.constructor.prototype, "isPrototypeOf");
		if (t.constructor && !n && !r) return !1;
		var i;
		for (i in t);
		return typeof i == "undefined" || er.call(t, i)
	},
	sa = function(t, n) {
		na && n.name === "__proto__" ? na(t, n.name, {
			enumerable: !0,
			configurable: !0,
			value: n.newValue,
			writable: !0
		}) : t[n.name] = n.newValue
	},
	aa = function(t, n) {
		if (n === "__proto__")
			if (er.call(t, n)) {
				if (ra) return ra(t, n).value
			} else return;
		return t[n]
	},
	la = function e() {
		var t, n, r, i, o, s, a = arguments[0],
			l = 1,
			u = arguments.length,
			c = !1;
		for (typeof a == "boolean" && (c = a, a = arguments[1] || {}, l = 2), (a == null || typeof a != "object" && typeof a != "function") && (a = {}); l < u; ++l)
			if (t = arguments[l], t != null)
				for (n in t) r = aa(a, n), i = aa(t, n), a !== i && (c && i && (oa(i) || (o = ia(i))) ? (o ? (o = !1, s = r && ia(r) ? r : []) : s = r && oa(r) ? r : {}, sa(a, {
					name: n,
					newValue: e(c, s, i)
				})) : typeof i != "undefined" && sa(a, {
					name: n,
					newValue: i
				}));
		return a
	};

function Yi(e) {
	if (typeof e != "object" || e === null) return !1;
	const t = Object.getPrototypeOf(e);
	return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
}

function Wp() {
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

		function a(l, ...u) {
			const c = e[++o];
			let f = -1;
			if (l) {
				s(l);
				return
			}
			for (; ++f < i.length;)(u[f] === null || u[f] === void 0) && (u[f] = i[f]);
			i = u, c ? Qp(c, a)(...u) : s(null, ...u)
		}
	}

	function r(i) {
		if (typeof i != "function") throw new TypeError("Expected `middelware` to be a function, not " + i);
		return e.push(i), t
	}
}

function Qp(e, t) {
	let n;
	return r;

	function r(...s) {
		const a = e.length > s.length;
		let l;
		a && s.push(i);
		try {
			l = e.apply(this, s)
		} catch (u) {
			const c = u;
			if (a && n) throw c;
			return i(c)
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
const Xp = Ru().freeze(),
	Iu = {}.hasOwnProperty;

function Ru() {
	const e = Wp(),
		t = [];
	let n = {},
		r, i = -1;
	return o.data = s, o.Parser = void 0, o.Compiler = void 0, o.freeze = a, o.attachers = t, o.use = l, o.parse = u, o.stringify = c, o.run = f, o.runSync = p, o.process = h, o.processSync = d, o;

	function o() {
		const m = Ru();
		let g = -1;
		for (; ++g < t.length;) m.use(...t[g]);
		return m.data(la(!0, {}, n)), m
	}

	function s(m, g) {
		return typeof m == "string" ? arguments.length === 2 ? (hi("data", r), n[m] = g, o) : Iu.call(n, m) && n[m] || null : m ? (hi("data", r), n = m, o) : n
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
		if (hi("use", r), m != null)
			if (typeof m == "function") S(m, ...g);
			else if (typeof m == "object") Array.isArray(m) ? C(m) : _(m);
		else throw new TypeError("Expected usable value, not `" + m + "`");
		return y && (n.settings = Object.assign(n.settings || {}, y)), o;

		function k(b) {
			if (typeof b == "function") S(b);
			else if (typeof b == "object")
				if (Array.isArray(b)) {
					const [T, ...M] = b;
					S(T, ...M)
				} else _(b);
			else throw new TypeError("Expected usable value, not `" + b + "`")
		}

		function _(b) {
			C(b.plugins), b.settings && (y = Object.assign(y || {}, b.settings))
		}

		function C(b) {
			let T = -1;
			if (b != null)
				if (Array.isArray(b))
					for (; ++T < b.length;) {
						const M = b[T];
						k(M)
					} else throw new TypeError("Expected a list of plugins, not `" + b + "`")
		}

		function S(b, T) {
			let M = -1,
				F;
			for (; ++M < t.length;)
				if (t[M][0] === b) {
					F = t[M];
					break
				} F ? (Yi(F[1]) && Yi(T) && (T = la(!0, F[1], T)), F[1] = T) : t.push([...arguments])
		}
	}

	function u(m) {
		o.freeze();
		const g = on(m),
			y = o.Parser;
		return fi("parse", y), ua(y, "parse") ? new y(String(g), g).parse() : y(String(g), g)
	}

	function c(m, g) {
		o.freeze();
		const y = on(g),
			k = o.Compiler;
		return di("stringify", k), ca(m), ua(k, "compile") ? new k(m, y).compile() : k(m, y)
	}

	function f(m, g, y) {
		if (ca(m), o.freeze(), !y && typeof g == "function" && (y = g, g = void 0), !y) return new Promise(k);
		k(null, y);

		function k(_, C) {
			e.run(m, on(g), S);

			function S(b, T, M) {
				T = T || m, b ? C(b) : _ ? _(T) : y(null, T, M)
			}
		}
	}

	function p(m, g) {
		let y, k;
		return o.run(m, g, _), fa("runSync", "run", k), y;

		function _(C, S) {
			ta(C), y = S, k = !0
		}
	}

	function h(m, g) {
		if (o.freeze(), fi("process", o.Parser), di("process", o.Compiler), !g) return new Promise(y);
		y(null, g);

		function y(k, _) {
			const C = on(m);
			o.run(o.parse(C), C, (b, T, M) => {
				if (b || !T || !M) S(b);
				else {
					const F = o.stringify(T, M);
					F == null || (Kp(F) ? M.value = F : M.result = F), S(b, M)
				}
			});

			function S(b, T) {
				b || !T ? _(b) : k ? k(T) : g(null, T)
			}
		}
	}

	function d(m) {
		let g;
		o.freeze(), fi("processSync", o.Parser), di("processSync", o.Compiler);
		const y = on(m);
		return o.process(y, k), fa("processSync", "process", g), y;

		function k(_) {
			g = !0, ta(_)
		}
	}
}

function ua(e, t) {
	return typeof e == "function" && e.prototype && (Gp(e.prototype) || t in e.prototype)
}

function Gp(e) {
	let t;
	for (t in e)
		if (Iu.call(e, t)) return !0;
	return !1
}

function fi(e, t) {
	if (typeof t != "function") throw new TypeError("Cannot `" + e + "` without `Parser`")
}

function di(e, t) {
	if (typeof t != "function") throw new TypeError("Cannot `" + e + "` without `Compiler`")
}

function hi(e, t) {
	if (t) throw new Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")
}

function ca(e) {
	if (!Yi(e) || typeof e.type != "string") throw new TypeError("Expected node, got `" + e + "`")
}

function fa(e, t, n) {
	if (!n) throw new Error("`" + e + "` finished async. Use `" + t + "` instead")
}

function on(e) {
	return Yp(e) ? e : new Au(e)
}

function Yp(e) {
	return Boolean(e && typeof e == "object" && "message" in e && "messages" in e)
}

function Kp(e) {
	return typeof e == "string" || Tu(e)
}

function Zp(e, t) {
	var {
		includeImageAlt: n = !0
	} = t || {};
	return Mu(e, n)
}

function Mu(e, t) {
	return e && typeof e == "object" && (e.value || (t ? e.alt : "") || "children" in e && da(e.children, t) || Array.isArray(e) && da(e, t)) || ""
}

function da(e, t) {
	for (var n = [], r = -1; ++r < e.length;) n[r] = Mu(e[r], t);
	return n.join("")
}

function Pe(e, t, n, r) {
	const i = e.length;
	let o = 0,
		s;
	if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4) s = Array.from(r), s.unshift(t, n), [].splice.apply(e, s);
	else
		for (n && [].splice.apply(e, [t, n]); o < r.length;) s = r.slice(o, o + 1e4), s.unshift(t, 0), [].splice.apply(e, s), o += 1e4, t += 1e4
}

function ze(e, t) {
	return e.length > 0 ? (Pe(e, e.length, 0, t), e) : t
}
const ha = {}.hasOwnProperty;

function Pu(e) {
	const t = {};
	let n = -1;
	for (; ++n < e.length;) Jp(t, e[n]);
	return t
}

function Jp(e, t) {
	let n;
	for (n in t) {
		const i = (ha.call(e, n) ? e[n] : void 0) || (e[n] = {}),
			o = t[n];
		let s;
		for (s in o) {
			ha.call(i, s) || (i[s] = []);
			const a = o[s];
			em(i[s], Array.isArray(a) ? a : a ? [a] : [])
		}
	}
}

function em(e, t) {
	let n = -1;
	const r = [];
	for (; ++n < t.length;)(t[n].add === "after" ? e : r).push(t[n]);
	Pe(e, 0, 0, r)
}
const tm = /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
	je = vt(/[A-Za-z]/),
	yr = vt(/\d/),
	nm = vt(/[\dA-Fa-f]/),
	Se = vt(/[\dA-Za-z]/),
	rm = vt(/[!-/:-@[-`{-~]/),
	pa = vt(/[#-'*+\--9=?A-Z^-~]/);

function In(e) {
	return e !== null && (e < 32 || e === 127)
}

function ue(e) {
	return e !== null && (e < 0 || e === 32)
}

function U(e) {
	return e !== null && e < -2
}

function te(e) {
	return e === -2 || e === -1 || e === 32
}
const Mr = vt(/\s/),
	Pr = vt(tm);

function vt(e) {
	return t;

	function t(n) {
		return n !== null && e.test(String.fromCharCode(n))
	}
}

function X(e, t, n, r) {
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
const im = {
	tokenize: om
};

function om(e) {
	const t = e.attempt(this.parser.constructs.contentInitial, r, i);
	let n;
	return t;

	function r(a) {
		if (a === null) {
			e.consume(a);
			return
		}
		return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), X(e, t, "linePrefix")
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
const sm = {
		tokenize: am
	},
	ma = {
		tokenize: lm
	};

function am(e) {
	const t = this,
		n = [];
	let r = 0,
		i, o, s;
	return a;

	function a(_) {
		if (r < n.length) {
			const C = n[r];
			return t.containerState = C[1], e.attempt(C[0].continuation, l, u)(_)
		}
		return u(_)
	}

	function l(_) {
		if (r++, t.containerState._closeFlow) {
			t.containerState._closeFlow = void 0, i && k();
			const C = t.events.length;
			let S = C,
				b;
			for (; S--;)
				if (t.events[S][0] === "exit" && t.events[S][1].type === "chunkFlow") {
					b = t.events[S][1].end;
					break
				} y(r);
			let T = C;
			for (; T < t.events.length;) t.events[T][1].end = Object.assign({}, b), T++;
			return Pe(t.events, S + 1, 0, t.events.slice(C)), t.events.length = T, u(_)
		}
		return a(_)
	}

	function u(_) {
		if (r === n.length) {
			if (!i) return p(_);
			if (i.currentConstruct && i.currentConstruct.concrete) return d(_);
			t.interrupt = Boolean(i.currentConstruct && !i._gfmTableDynamicInterruptHack)
		}
		return t.containerState = {}, e.check(ma, c, f)(_)
	}

	function c(_) {
		return i && k(), y(r), p(_)
	}

	function f(_) {
		return t.parser.lazy[t.now().line] = r !== n.length, s = t.now().offset, d(_)
	}

	function p(_) {
		return t.containerState = {}, e.attempt(ma, h, d)(_)
	}

	function h(_) {
		return r++, n.push([t.currentConstruct, t.containerState]), p(_)
	}

	function d(_) {
		if (_ === null) {
			i && k(), y(0), e.consume(_);
			return
		}
		return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
			contentType: "flow",
			previous: o,
			_tokenizer: i
		}), m(_)
	}

	function m(_) {
		if (_ === null) {
			g(e.exit("chunkFlow"), !0), y(0), e.consume(_);
			return
		}
		return U(_) ? (e.consume(_), g(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, a) : (e.consume(_), m)
	}

	function g(_, C) {
		const S = t.sliceStream(_);
		if (C && S.push(null), _.previous = o, o && (o.next = _), o = _, i.defineSkip(_.start), i.write(S), t.parser.lazy[_.start.line]) {
			let b = i.events.length;
			for (; b--;)
				if (i.events[b][1].start.offset < s && (!i.events[b][1].end || i.events[b][1].end.offset > s)) return;
			const T = t.events.length;
			let M = T,
				F, z;
			for (; M--;)
				if (t.events[M][0] === "exit" && t.events[M][1].type === "chunkFlow") {
					if (F) {
						z = t.events[M][1].end;
						break
					}
					F = !0
				} for (y(r), b = T; b < t.events.length;) t.events[b][1].end = Object.assign({}, z), b++;
			Pe(t.events, M + 1, 0, t.events.slice(T)), t.events.length = b
		}
	}

	function y(_) {
		let C = n.length;
		for (; C-- > _;) {
			const S = n[C];
			t.containerState = S[1], S[0].exit.call(t, e)
		}
		n.length = _
	}

	function k() {
		i.write([null]), o = void 0, i = void 0, t.containerState._closeFlow = void 0
	}
}

function lm(e, t, n) {
	return X(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
}

function br(e) {
	if (e === null || ue(e) || Mr(e)) return 1;
	if (Pr(e)) return 2
}

function Lr(e, t, n) {
	const r = [];
	let i = -1;
	for (; ++i < e.length;) {
		const o = e[i].resolveAll;
		o && !r.includes(o) && (t = o(t, n), r.push(o))
	}
	return t
}
const Ki = {
	name: "attention",
	tokenize: cm,
	resolveAll: um
};

function um(e, t) {
	let n = -1,
		r, i, o, s, a, l, u, c;
	for (; ++n < e.length;)
		if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
			for (r = n; r--;)
				if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
					if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)) continue;
					l = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
					const f = Object.assign({}, e[r][1].end),
						p = Object.assign({}, e[n][1].start);
					ga(f, -l), ga(p, l), s = {
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
					}, e[r][1].end = Object.assign({}, s.start), e[n][1].start = Object.assign({}, a.end), u = [], e[r][1].end.offset - e[r][1].start.offset && (u = ze(u, [
						["enter", e[r][1], t],
						["exit", e[r][1], t]
					])), u = ze(u, [
						["enter", i, t],
						["enter", s, t],
						["exit", s, t],
						["enter", o, t]
					]), u = ze(u, Lr(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), u = ze(u, [
						["exit", o, t],
						["enter", a, t],
						["exit", a, t],
						["exit", i, t]
					]), e[n][1].end.offset - e[n][1].start.offset ? (c = 2, u = ze(u, [
						["enter", e[n][1], t],
						["exit", e[n][1], t]
					])) : c = 0, Pe(e, r - 1, n - r + 3, u), n = r + u.length - c - 2;
					break
				}
		} for (n = -1; ++n < e.length;) e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
	return e
}

function cm(e, t) {
	const n = this.parser.constructs.attentionMarkers.null,
		r = this.previous,
		i = br(r);
	let o;
	return s;

	function s(l) {
		return e.enter("attentionSequence"), o = l, a(l)
	}

	function a(l) {
		if (l === o) return e.consume(l), a;
		const u = e.exit("attentionSequence"),
			c = br(l),
			f = !c || c === 2 && i || n.includes(l),
			p = !i || i === 2 && c || n.includes(r);
		return u._open = Boolean(o === 42 ? f : f && (i || !p)), u._close = Boolean(o === 42 ? p : p && (c || !f)), t(l)
	}
}

function ga(e, t) {
	e.column += t, e.offset += t, e._bufferIndex += t
}
const fm = {
	name: "autolink",
	tokenize: dm
};

function dm(e, t, n) {
	let r = 1;
	return i;

	function i(d) {
		return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(d), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), o
	}

	function o(d) {
		return je(d) ? (e.consume(d), s) : pa(d) ? u(d) : n(d)
	}

	function s(d) {
		return d === 43 || d === 45 || d === 46 || Se(d) ? a(d) : u(d)
	}

	function a(d) {
		return d === 58 ? (e.consume(d), l) : (d === 43 || d === 45 || d === 46 || Se(d)) && r++ < 32 ? (e.consume(d), a) : u(d)
	}

	function l(d) {
		return d === 62 ? (e.exit("autolinkProtocol"), h(d)) : d === null || d === 32 || d === 60 || In(d) ? n(d) : (e.consume(d), l)
	}

	function u(d) {
		return d === 64 ? (e.consume(d), r = 0, c) : pa(d) ? (e.consume(d), u) : n(d)
	}

	function c(d) {
		return Se(d) ? f(d) : n(d)
	}

	function f(d) {
		return d === 46 ? (e.consume(d), r = 0, c) : d === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", h(d)) : p(d)
	}

	function p(d) {
		return (d === 45 || Se(d)) && r++ < 63 ? (e.consume(d), d === 45 ? p : f) : n(d)
	}

	function h(d) {
		return e.enter("autolinkMarker"), e.consume(d), e.exit("autolinkMarker"), e.exit("autolink"), t
	}
}
const Nn = {
	tokenize: hm,
	partial: !0
};

function hm(e, t, n) {
	return X(e, r, "linePrefix");

	function r(i) {
		return i === null || U(i) ? t(i) : n(i)
	}
}
const Lu = {
	name: "blockQuote",
	tokenize: pm,
	continuation: {
		tokenize: mm
	},
	exit: gm
};

function pm(e, t, n) {
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

function mm(e, t, n) {
	return X(e, e.attempt(Lu, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
}

function gm(e) {
	e.exit("blockQuote")
}
const Du = {
	name: "characterEscape",
	tokenize: ym
};

function ym(e, t, n) {
	return r;

	function r(o) {
		return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(o), e.exit("escapeMarker"), i
	}

	function i(o) {
		return rm(o) ? (e.enter("characterEscapeValue"), e.consume(o), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(o)
	}
}
const ya = document.createElement("i");

function Eo(e) {
	const t = "&" + e + ";";
	ya.innerHTML = t;
	const n = ya.textContent;
	return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n
}
const Fu = {
	name: "characterReference",
	tokenize: bm
};

function bm(e, t, n) {
	const r = this;
	let i = 0,
		o, s;
	return a;

	function a(f) {
		return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), l
	}

	function l(f) {
		return f === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(f), e.exit("characterReferenceMarkerNumeric"), u) : (e.enter("characterReferenceValue"), o = 31, s = Se, c(f))
	}

	function u(f) {
		return f === 88 || f === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(f), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, s = nm, c) : (e.enter("characterReferenceValue"), o = 7, s = yr, c(f))
	}

	function c(f) {
		let p;
		return f === 59 && i ? (p = e.exit("characterReferenceValue"), s === Se && !Eo(r.sliceSerialize(p)) ? n(f) : (e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), e.exit("characterReference"), t)) : s(f) && i++ < o ? (e.consume(f), c) : n(f)
	}
}
const ba = {
	name: "codeFenced",
	tokenize: vm,
	concrete: !0
};

function vm(e, t, n) {
	const r = this,
		i = {
			tokenize: S,
			partial: !0
		},
		o = {
			tokenize: C,
			partial: !0
		},
		s = this.events[this.events.length - 1],
		a = s && s[1].type === "linePrefix" ? s[2].sliceSerialize(s[1], !0).length : 0;
	let l = 0,
		u;
	return c;

	function c(b) {
		return e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), u = b, f(b)
	}

	function f(b) {
		return b === u ? (e.consume(b), l++, f) : (e.exit("codeFencedFenceSequence"), l < 3 ? n(b) : X(e, p, "whitespace")(b))
	}

	function p(b) {
		return b === null || U(b) ? g(b) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
			contentType: "string"
		}), h(b))
	}

	function h(b) {
		return b === null || ue(b) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), X(e, d, "whitespace")(b)) : b === 96 && b === u ? n(b) : (e.consume(b), h)
	}

	function d(b) {
		return b === null || U(b) ? g(b) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
			contentType: "string"
		}), m(b))
	}

	function m(b) {
		return b === null || U(b) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), g(b)) : b === 96 && b === u ? n(b) : (e.consume(b), m)
	}

	function g(b) {
		return e.exit("codeFencedFence"), r.interrupt ? t(b) : y(b)
	}

	function y(b) {
		return b === null ? _(b) : U(b) ? e.attempt(o, e.attempt(i, _, a ? X(e, y, "linePrefix", a + 1) : y), _)(b) : (e.enter("codeFlowValue"), k(b))
	}

	function k(b) {
		return b === null || U(b) ? (e.exit("codeFlowValue"), y(b)) : (e.consume(b), k)
	}

	function _(b) {
		return e.exit("codeFenced"), t(b)
	}

	function C(b, T, M) {
		const F = this;
		return z;

		function z(D) {
			return b.enter("lineEnding"), b.consume(D), b.exit("lineEnding"), A
		}

		function A(D) {
			return F.parser.lazy[F.now().line] ? M(D) : T(D)
		}
	}

	function S(b, T, M) {
		let F = 0;
		return X(b, z, "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);

		function z(B) {
			return b.enter("codeFencedFence"), b.enter("codeFencedFenceSequence"), A(B)
		}

		function A(B) {
			return B === u ? (b.consume(B), F++, A) : F < l ? M(B) : (b.exit("codeFencedFenceSequence"), X(b, D, "whitespace")(B))
		}

		function D(B) {
			return B === null || U(B) ? (b.exit("codeFencedFence"), T(B)) : M(B)
		}
	}
}
const pi = {
		name: "codeIndented",
		tokenize: _m
	},
	wm = {
		tokenize: xm,
		partial: !0
	};

function _m(e, t, n) {
	const r = this;
	return i;

	function i(u) {
		return e.enter("codeIndented"), X(e, o, "linePrefix", 4 + 1)(u)
	}

	function o(u) {
		const c = r.events[r.events.length - 1];
		return c && c[1].type === "linePrefix" && c[2].sliceSerialize(c[1], !0).length >= 4 ? s(u) : n(u)
	}

	function s(u) {
		return u === null ? l(u) : U(u) ? e.attempt(wm, s, l)(u) : (e.enter("codeFlowValue"), a(u))
	}

	function a(u) {
		return u === null || U(u) ? (e.exit("codeFlowValue"), s(u)) : (e.consume(u), a)
	}

	function l(u) {
		return e.exit("codeIndented"), t(u)
	}
}

function xm(e, t, n) {
	const r = this;
	return i;

	function i(s) {
		return r.parser.lazy[r.now().line] ? n(s) : U(s) ? (e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), i) : X(e, o, "linePrefix", 4 + 1)(s)
	}

	function o(s) {
		const a = r.events[r.events.length - 1];
		return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(s) : U(s) ? i(s) : n(s)
	}
}
const km = {
	name: "codeText",
	tokenize: Em,
	resolve: Cm,
	previous: Sm
};

function Cm(e) {
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

function Sm(e) {
	return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape"
}

function Em(e, t, n) {
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
		return f === null ? n(f) : f === 96 ? (o = e.enter("codeTextSequence"), i = 0, c(f)) : f === 32 ? (e.enter("space"), e.consume(f), e.exit("space"), l) : U(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), l) : (e.enter("codeTextData"), u(f))
	}

	function u(f) {
		return f === null || f === 32 || f === 96 || U(f) ? (e.exit("codeTextData"), l(f)) : (e.consume(f), u)
	}

	function c(f) {
		return f === 96 ? (e.consume(f), i++, c) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(f)) : (o.type = "codeTextData", u(f))
	}
}

function zu(e) {
	const t = {};
	let n = -1,
		r, i, o, s, a, l, u;
	for (; ++n < e.length;) {
		for (; n in t;) n = t[n];
		if (r = e[n], n && r[1].type === "chunkFlow" && e[n - 1][1].type === "listItemPrefix" && (l = r[1]._tokenizer.events, o = 0, o < l.length && l[o][1].type === "lineEndingBlank" && (o += 2), o < l.length && l[o][1].type === "content"))
			for (; ++o < l.length && l[o][1].type !== "content";) l[o][1].type === "chunkText" && (l[o][1]._isInFirstContentOfListItem = !0, o++);
		if (r[0] === "enter") r[1].contentType && (Object.assign(t, Tm(e, n)), n = t[n], u = !0);
		else if (r[1]._container) {
			for (o = n, i = void 0; o-- && (s = e[o], s[1].type === "lineEnding" || s[1].type === "lineEndingBlank");) s[0] === "enter" && (i && (e[i][1].type = "lineEndingBlank"), s[1].type = "lineEnding", i = o);
			i && (r[1].end = Object.assign({}, e[i][1].start), a = e.slice(i, n), a.unshift(r), Pe(e, i, n - i + 1, a))
		}
	}
	return !u
}

function Tm(e, t) {
	const n = e[t][1],
		r = e[t][2];
	let i = t - 1;
	const o = [],
		s = n._tokenizer || r.parser[n.contentType](n.start),
		a = s.events,
		l = [],
		u = {};
	let c, f, p = -1,
		h = n,
		d = 0,
		m = 0;
	const g = [m];
	for (; h;) {
		for (; e[++i][1] !== h;);
		o.push(i), h._tokenizer || (c = r.sliceStream(h), h.next || c.push(null), f && s.defineSkip(h.start), h._isInFirstContentOfListItem && (s._gfmTasklistFirstContentOfListItem = !0), s.write(c), h._isInFirstContentOfListItem && (s._gfmTasklistFirstContentOfListItem = void 0)), f = h, h = h.next
	}
	for (h = n; ++p < a.length;) a[p][0] === "exit" && a[p - 1][0] === "enter" && a[p][1].type === a[p - 1][1].type && a[p][1].start.line !== a[p][1].end.line && (m = p + 1, g.push(m), h._tokenizer = void 0, h.previous = void 0, h = h.next);
	for (s.events = [], h ? (h._tokenizer = void 0, h.previous = void 0) : g.pop(), p = g.length; p--;) {
		const y = a.slice(g[p], g[p + 1]),
			k = o.pop();
		l.unshift([k, k + y.length - 1]), Pe(e, k, 2, y)
	}
	for (p = -1; ++p < l.length;) u[d + l[p][0]] = d + l[p][1], d += l[p][1] - l[p][0] - 1;
	return u
}
const Am = {
		tokenize: Rm,
		resolve: Im
	},
	Om = {
		tokenize: Mm,
		partial: !0
	};

function Im(e) {
	return zu(e), e
}

function Rm(e, t) {
	let n;
	return r;

	function r(a) {
		return e.enter("content"), n = e.enter("chunkContent", {
			contentType: "content"
		}), i(a)
	}

	function i(a) {
		return a === null ? o(a) : U(a) ? e.check(Om, s, o)(a) : (e.consume(a), i)
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

function Mm(e, t, n) {
	const r = this;
	return i;

	function i(s) {
		return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), X(e, o, "linePrefix")
	}

	function o(s) {
		if (s === null || U(s)) return n(s);
		const a = r.events[r.events.length - 1];
		return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(s) : e.interrupt(r.parser.constructs.flow, n, t)(s)
	}
}

function Nu(e, t, n, r, i, o, s, a, l) {
	const u = l || Number.POSITIVE_INFINITY;
	let c = 0;
	return f;

	function f(y) {
		return y === 60 ? (e.enter(r), e.enter(i), e.enter(o), e.consume(y), e.exit(o), p) : y === null || y === 41 || In(y) ? n(y) : (e.enter(r), e.enter(s), e.enter(a), e.enter("chunkString", {
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
		return y === 40 ? ++c > u ? n(y) : (e.consume(y), m) : y === 41 ? c-- ? (e.consume(y), m) : (e.exit("chunkString"), e.exit(a), e.exit(s), e.exit(r), t(y)) : y === null || ue(y) ? c ? n(y) : (e.exit("chunkString"), e.exit(a), e.exit(s), e.exit(r), t(y)) : In(y) ? n(y) : (e.consume(y), y === 92 ? g : m)
	}

	function g(y) {
		return y === 40 || y === 41 || y === 92 ? (e.consume(y), m) : m(y)
	}
}

function ju(e, t, n, r, i, o) {
	const s = this;
	let a = 0,
		l;
	return u;

	function u(h) {
		return e.enter(r), e.enter(i), e.consume(h), e.exit(i), e.enter(o), c
	}

	function c(h) {
		return h === null || h === 91 || h === 93 && !l || h === 94 && !a && "_hiddenFootnoteSupport" in s.parser.constructs || a > 999 ? n(h) : h === 93 ? (e.exit(o), e.enter(i), e.consume(h), e.exit(i), e.exit(r), t) : U(h) ? (e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), c) : (e.enter("chunkString", {
			contentType: "string"
		}), f(h))
	}

	function f(h) {
		return h === null || h === 91 || h === 93 || U(h) || a++ > 999 ? (e.exit("chunkString"), c(h)) : (e.consume(h), l = l || !te(h), h === 92 ? p : f)
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
		return p === s ? (e.enter(i), e.consume(p), e.exit(i), e.exit(r), t) : (e.enter(o), u(p))
	}

	function u(p) {
		return p === s ? (e.exit(o), l(s)) : p === null ? n(p) : U(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), X(e, u, "linePrefix")) : (e.enter("chunkString", {
			contentType: "string"
		}), c(p))
	}

	function c(p) {
		return p === s || p === null || U(p) ? (e.exit("chunkString"), u(p)) : (e.consume(p), p === 92 ? f : c)
	}

	function f(p) {
		return p === s || p === 92 ? (e.consume(p), c) : c(p)
	}
}

function wn(e, t) {
	let n;
	return r;

	function r(i) {
		return U(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : te(i) ? X(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i)
	}
}

function Qe(e) {
	return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase()
}
const Pm = {
		name: "definition",
		tokenize: Dm
	},
	Lm = {
		tokenize: Fm,
		partial: !0
	};

function Dm(e, t, n) {
	const r = this;
	let i;
	return o;

	function o(l) {
		return e.enter("definition"), ju.call(r, e, s, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(l)
	}

	function s(l) {
		return i = Qe(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), l === 58 ? (e.enter("definitionMarker"), e.consume(l), e.exit("definitionMarker"), wn(e, Nu(e, e.attempt(Lm, X(e, a, "whitespace"), X(e, a, "whitespace")), n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString"))) : n(l)
	}

	function a(l) {
		return l === null || U(l) ? (e.exit("definition"), r.parser.defined.includes(i) || r.parser.defined.push(i), t(l)) : n(l)
	}
}

function Fm(e, t, n) {
	return r;

	function r(s) {
		return ue(s) ? wn(e, i)(s) : n(s)
	}

	function i(s) {
		return s === 34 || s === 39 || s === 40 ? Bu(e, X(e, o, "whitespace"), n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(s) : n(s)
	}

	function o(s) {
		return s === null || U(s) ? t(s) : n(s)
	}
}
const zm = {
	name: "hardBreakEscape",
	tokenize: Nm
};

function Nm(e, t, n) {
	return r;

	function r(o) {
		return e.enter("hardBreakEscape"), e.enter("escapeMarker"), e.consume(o), i
	}

	function i(o) {
		return U(o) ? (e.exit("escapeMarker"), e.exit("hardBreakEscape"), t(o)) : n(o)
	}
}
const jm = {
	name: "headingAtx",
	tokenize: Um,
	resolve: Bm
};

function Bm(e, t) {
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
	}, Pe(e, r, n - r + 1, [
		["enter", i, t],
		["enter", o, t],
		["exit", o, t],
		["exit", i, t]
	])), e
}

function Um(e, t, n) {
	const r = this;
	let i = 0;
	return o;

	function o(c) {
		return e.enter("atxHeading"), e.enter("atxHeadingSequence"), s(c)
	}

	function s(c) {
		return c === 35 && i++ < 6 ? (e.consume(c), s) : c === null || ue(c) ? (e.exit("atxHeadingSequence"), r.interrupt ? t(c) : a(c)) : n(c)
	}

	function a(c) {
		return c === 35 ? (e.enter("atxHeadingSequence"), l(c)) : c === null || U(c) ? (e.exit("atxHeading"), t(c)) : te(c) ? X(e, a, "whitespace")(c) : (e.enter("atxHeadingText"), u(c))
	}

	function l(c) {
		return c === 35 ? (e.consume(c), l) : (e.exit("atxHeadingSequence"), a(c))
	}

	function u(c) {
		return c === null || c === 35 || ue(c) ? (e.exit("atxHeadingText"), a(c)) : (e.consume(c), u)
	}
}
const Vm = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"],
	va = ["pre", "script", "style", "textarea"],
	$m = {
		name: "htmlFlow",
		tokenize: Wm,
		resolveTo: qm,
		concrete: !0
	},
	Hm = {
		tokenize: Qm,
		partial: !0
	};

function qm(e) {
	let t = e.length;
	for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"););
	return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e
}

function Wm(e, t, n) {
	const r = this;
	let i, o, s, a, l;
	return u;

	function u(v) {
		return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(v), c
	}

	function c(v) {
		return v === 33 ? (e.consume(v), f) : v === 47 ? (e.consume(v), d) : v === 63 ? (e.consume(v), i = 3, r.interrupt ? t : Z) : je(v) ? (e.consume(v), s = String.fromCharCode(v), o = !0, m) : n(v)
	}

	function f(v) {
		return v === 45 ? (e.consume(v), i = 2, p) : v === 91 ? (e.consume(v), i = 5, s = "CDATA[", a = 0, h) : je(v) ? (e.consume(v), i = 4, r.interrupt ? t : Z) : n(v)
	}

	function p(v) {
		return v === 45 ? (e.consume(v), r.interrupt ? t : Z) : n(v)
	}

	function h(v) {
		return v === s.charCodeAt(a++) ? (e.consume(v), a === s.length ? r.interrupt ? t : A : h) : n(v)
	}

	function d(v) {
		return je(v) ? (e.consume(v), s = String.fromCharCode(v), m) : n(v)
	}

	function m(v) {
		return v === null || v === 47 || v === 62 || ue(v) ? v !== 47 && o && va.includes(s.toLowerCase()) ? (i = 1, r.interrupt ? t(v) : A(v)) : Vm.includes(s.toLowerCase()) ? (i = 6, v === 47 ? (e.consume(v), g) : r.interrupt ? t(v) : A(v)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(v) : o ? k(v) : y(v)) : v === 45 || Se(v) ? (e.consume(v), s += String.fromCharCode(v), m) : n(v)
	}

	function g(v) {
		return v === 62 ? (e.consume(v), r.interrupt ? t : A) : n(v)
	}

	function y(v) {
		return te(v) ? (e.consume(v), y) : F(v)
	}

	function k(v) {
		return v === 47 ? (e.consume(v), F) : v === 58 || v === 95 || je(v) ? (e.consume(v), _) : te(v) ? (e.consume(v), k) : F(v)
	}

	function _(v) {
		return v === 45 || v === 46 || v === 58 || v === 95 || Se(v) ? (e.consume(v), _) : C(v)
	}

	function C(v) {
		return v === 61 ? (e.consume(v), S) : te(v) ? (e.consume(v), C) : k(v)
	}

	function S(v) {
		return v === null || v === 60 || v === 61 || v === 62 || v === 96 ? n(v) : v === 34 || v === 39 ? (e.consume(v), l = v, b) : te(v) ? (e.consume(v), S) : (l = null, T(v))
	}

	function b(v) {
		return v === null || U(v) ? n(v) : v === l ? (e.consume(v), M) : (e.consume(v), b)
	}

	function T(v) {
		return v === null || v === 34 || v === 39 || v === 60 || v === 61 || v === 62 || v === 96 || ue(v) ? C(v) : (e.consume(v), T)
	}

	function M(v) {
		return v === 47 || v === 62 || te(v) ? k(v) : n(v)
	}

	function F(v) {
		return v === 62 ? (e.consume(v), z) : n(v)
	}

	function z(v) {
		return te(v) ? (e.consume(v), z) : v === null || U(v) ? A(v) : n(v)
	}

	function A(v) {
		return v === 45 && i === 2 ? (e.consume(v), N) : v === 60 && i === 1 ? (e.consume(v), x) : v === 62 && i === 4 ? (e.consume(v), K) : v === 63 && i === 3 ? (e.consume(v), Z) : v === 93 && i === 5 ? (e.consume(v), $) : U(v) && (i === 6 || i === 7) ? e.check(Hm, K, D)(v) : v === null || U(v) ? D(v) : (e.consume(v), A)
	}

	function D(v) {
		return e.exit("htmlFlowData"), B(v)
	}

	function B(v) {
		return v === null ? w(v) : U(v) ? e.attempt({
			tokenize: L,
			partial: !0
		}, B, w)(v) : (e.enter("htmlFlowData"), A(v))
	}

	function L(v, Le, ht) {
		return pe;

		function pe(ce) {
			return v.enter("lineEnding"), v.consume(ce), v.exit("lineEnding"), ne
		}

		function ne(ce) {
			return r.parser.lazy[r.now().line] ? ht(ce) : Le(ce)
		}
	}

	function N(v) {
		return v === 45 ? (e.consume(v), Z) : A(v)
	}

	function x(v) {
		return v === 47 ? (e.consume(v), s = "", G) : A(v)
	}

	function G(v) {
		return v === 62 && va.includes(s.toLowerCase()) ? (e.consume(v), K) : je(v) && s.length < 8 ? (e.consume(v), s += String.fromCharCode(v), G) : A(v)
	}

	function $(v) {
		return v === 93 ? (e.consume(v), Z) : A(v)
	}

	function Z(v) {
		return v === 62 ? (e.consume(v), K) : v === 45 && i === 2 ? (e.consume(v), Z) : A(v)
	}

	function K(v) {
		return v === null || U(v) ? (e.exit("htmlFlowData"), w(v)) : (e.consume(v), K)
	}

	function w(v) {
		return e.exit("htmlFlow"), t(v)
	}
}

function Qm(e, t, n) {
	return r;

	function r(i) {
		return e.exit("htmlFlowData"), e.enter("lineEndingBlank"), e.consume(i), e.exit("lineEndingBlank"), e.attempt(Nn, t, n)
	}
}
const Xm = {
	name: "htmlText",
	tokenize: Gm
};

function Gm(e, t, n) {
	const r = this;
	let i, o, s, a;
	return l;

	function l(w) {
		return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(w), u
	}

	function u(w) {
		return w === 33 ? (e.consume(w), c) : w === 47 ? (e.consume(w), T) : w === 63 ? (e.consume(w), S) : je(w) ? (e.consume(w), z) : n(w)
	}

	function c(w) {
		return w === 45 ? (e.consume(w), f) : w === 91 ? (e.consume(w), o = "CDATA[", s = 0, g) : je(w) ? (e.consume(w), C) : n(w)
	}

	function f(w) {
		return w === 45 ? (e.consume(w), p) : n(w)
	}

	function p(w) {
		return w === null || w === 62 ? n(w) : w === 45 ? (e.consume(w), h) : d(w)
	}

	function h(w) {
		return w === null || w === 62 ? n(w) : d(w)
	}

	function d(w) {
		return w === null ? n(w) : w === 45 ? (e.consume(w), m) : U(w) ? (a = d, $(w)) : (e.consume(w), d)
	}

	function m(w) {
		return w === 45 ? (e.consume(w), K) : d(w)
	}

	function g(w) {
		return w === o.charCodeAt(s++) ? (e.consume(w), s === o.length ? y : g) : n(w)
	}

	function y(w) {
		return w === null ? n(w) : w === 93 ? (e.consume(w), k) : U(w) ? (a = y, $(w)) : (e.consume(w), y)
	}

	function k(w) {
		return w === 93 ? (e.consume(w), _) : y(w)
	}

	function _(w) {
		return w === 62 ? K(w) : w === 93 ? (e.consume(w), _) : y(w)
	}

	function C(w) {
		return w === null || w === 62 ? K(w) : U(w) ? (a = C, $(w)) : (e.consume(w), C)
	}

	function S(w) {
		return w === null ? n(w) : w === 63 ? (e.consume(w), b) : U(w) ? (a = S, $(w)) : (e.consume(w), S)
	}

	function b(w) {
		return w === 62 ? K(w) : S(w)
	}

	function T(w) {
		return je(w) ? (e.consume(w), M) : n(w)
	}

	function M(w) {
		return w === 45 || Se(w) ? (e.consume(w), M) : F(w)
	}

	function F(w) {
		return U(w) ? (a = F, $(w)) : te(w) ? (e.consume(w), F) : K(w)
	}

	function z(w) {
		return w === 45 || Se(w) ? (e.consume(w), z) : w === 47 || w === 62 || ue(w) ? A(w) : n(w)
	}

	function A(w) {
		return w === 47 ? (e.consume(w), K) : w === 58 || w === 95 || je(w) ? (e.consume(w), D) : U(w) ? (a = A, $(w)) : te(w) ? (e.consume(w), A) : K(w)
	}

	function D(w) {
		return w === 45 || w === 46 || w === 58 || w === 95 || Se(w) ? (e.consume(w), D) : B(w)
	}

	function B(w) {
		return w === 61 ? (e.consume(w), L) : U(w) ? (a = B, $(w)) : te(w) ? (e.consume(w), B) : A(w)
	}

	function L(w) {
		return w === null || w === 60 || w === 61 || w === 62 || w === 96 ? n(w) : w === 34 || w === 39 ? (e.consume(w), i = w, N) : U(w) ? (a = L, $(w)) : te(w) ? (e.consume(w), L) : (e.consume(w), i = void 0, G)
	}

	function N(w) {
		return w === i ? (e.consume(w), x) : w === null ? n(w) : U(w) ? (a = N, $(w)) : (e.consume(w), N)
	}

	function x(w) {
		return w === 62 || w === 47 || ue(w) ? A(w) : n(w)
	}

	function G(w) {
		return w === null || w === 34 || w === 39 || w === 60 || w === 61 || w === 96 ? n(w) : w === 62 || ue(w) ? A(w) : (e.consume(w), G)
	}

	function $(w) {
		return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(w), e.exit("lineEnding"), X(e, Z, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
	}

	function Z(w) {
		return e.enter("htmlTextData"), a(w)
	}

	function K(w) {
		return w === 62 ? (e.consume(w), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(w)
	}
}
const To = {
		name: "labelEnd",
		tokenize: tg,
		resolveTo: eg,
		resolveAll: Jm
	},
	Ym = {
		tokenize: ng
	},
	Km = {
		tokenize: rg
	},
	Zm = {
		tokenize: ig
	};

function Jm(e) {
	let t = -1,
		n;
	for (; ++t < e.length;) n = e[t][1], (n.type === "labelImage" || n.type === "labelLink" || n.type === "labelEnd") && (e.splice(t + 1, n.type === "labelImage" ? 4 : 2), n.type = "data", t++);
	return e
}

function eg(e, t) {
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
		u = {
			type: "label",
			start: Object.assign({}, e[o][1].start),
			end: Object.assign({}, e[s][1].end)
		},
		c = {
			type: "labelText",
			start: Object.assign({}, e[o + r + 2][1].end),
			end: Object.assign({}, e[s - 2][1].start)
		};
	return a = [
		["enter", l, t],
		["enter", u, t]
	], a = ze(a, e.slice(o + 1, o + r + 3)), a = ze(a, [
		["enter", c, t]
	]), a = ze(a, Lr(t.parser.constructs.insideSpan.null, e.slice(o + r + 4, s - 3), t)), a = ze(a, [
		["exit", c, t], e[s - 2], e[s - 1],
		["exit", u, t]
	]), a = ze(a, e.slice(s + 1)), a = ze(a, [
		["exit", l, t]
	]), Pe(e, o, e.length, a), e
}

function tg(e, t, n) {
	const r = this;
	let i = r.events.length,
		o, s;
	for (; i--;)
		if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
			o = r.events[i][1];
			break
		} return a;

	function a(c) {
		return o ? o._inactive ? u(c) : (s = r.parser.defined.includes(Qe(r.sliceSerialize({
			start: o.end,
			end: r.now()
		}))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(c), e.exit("labelMarker"), e.exit("labelEnd"), l) : n(c)
	}

	function l(c) {
		return c === 40 ? e.attempt(Ym, t, s ? t : u)(c) : c === 91 ? e.attempt(Km, t, s ? e.attempt(Zm, t, u) : u)(c) : s ? t(c) : u(c)
	}

	function u(c) {
		return o._balanced = !0, n(c)
	}
}

function ng(e, t, n) {
	return r;

	function r(l) {
		return e.enter("resource"), e.enter("resourceMarker"), e.consume(l), e.exit("resourceMarker"), wn(e, i)
	}

	function i(l) {
		return l === 41 ? a(l) : Nu(e, o, n, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(l)
	}

	function o(l) {
		return ue(l) ? wn(e, s)(l) : a(l)
	}

	function s(l) {
		return l === 34 || l === 39 || l === 40 ? Bu(e, wn(e, a), n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(l) : a(l)
	}

	function a(l) {
		return l === 41 ? (e.enter("resourceMarker"), e.consume(l), e.exit("resourceMarker"), e.exit("resource"), t) : n(l)
	}
}

function rg(e, t, n) {
	const r = this;
	return i;

	function i(s) {
		return ju.call(r, e, o, n, "reference", "referenceMarker", "referenceString")(s)
	}

	function o(s) {
		return r.parser.defined.includes(Qe(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(s) : n(s)
	}
}

function ig(e, t, n) {
	return r;

	function r(o) {
		return e.enter("reference"), e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), i
	}

	function i(o) {
		return o === 93 ? (e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), e.exit("reference"), t) : n(o)
	}
}
const og = {
	name: "labelStartImage",
	tokenize: sg,
	resolveAll: To.resolveAll
};

function sg(e, t, n) {
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
const ag = {
	name: "labelStartLink",
	tokenize: lg,
	resolveAll: To.resolveAll
};

function lg(e, t, n) {
	const r = this;
	return i;

	function i(s) {
		return e.enter("labelLink"), e.enter("labelMarker"), e.consume(s), e.exit("labelMarker"), e.exit("labelLink"), o
	}

	function o(s) {
		return s === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(s) : t(s)
	}
}
const mi = {
	name: "lineEnding",
	tokenize: ug
};

function ug(e, t) {
	return n;

	function n(r) {
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), X(e, t, "linePrefix")
	}
}
const tr = {
	name: "thematicBreak",
	tokenize: cg
};

function cg(e, t, n) {
	let r = 0,
		i;
	return o;

	function o(l) {
		return e.enter("thematicBreak"), i = l, s(l)
	}

	function s(l) {
		return l === i ? (e.enter("thematicBreakSequence"), a(l)) : te(l) ? X(e, s, "whitespace")(l) : r < 3 || l !== null && !U(l) ? n(l) : (e.exit("thematicBreak"), t(l))
	}

	function a(l) {
		return l === i ? (e.consume(l), r++, a) : (e.exit("thematicBreakSequence"), s(l))
	}
}
const Ae = {
		name: "list",
		tokenize: hg,
		continuation: {
			tokenize: pg
		},
		exit: gg
	},
	fg = {
		tokenize: yg,
		partial: !0
	},
	dg = {
		tokenize: mg,
		partial: !0
	};

function hg(e, t, n) {
	const r = this,
		i = r.events[r.events.length - 1];
	let o = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0,
		s = 0;
	return a;

	function a(h) {
		const d = r.containerState.type || (h === 42 || h === 43 || h === 45 ? "listUnordered" : "listOrdered");
		if (d === "listUnordered" ? !r.containerState.marker || h === r.containerState.marker : yr(h)) {
			if (r.containerState.type || (r.containerState.type = d, e.enter(d, {
					_container: !0
				})), d === "listUnordered") return e.enter("listItemPrefix"), h === 42 || h === 45 ? e.check(tr, n, u)(h) : u(h);
			if (!r.interrupt || h === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), l(h)
		}
		return n(h)
	}

	function l(h) {
		return yr(h) && ++s < 10 ? (e.consume(h), l) : (!r.interrupt || s < 2) && (r.containerState.marker ? h === r.containerState.marker : h === 41 || h === 46) ? (e.exit("listItemValue"), u(h)) : n(h)
	}

	function u(h) {
		return e.enter("listItemMarker"), e.consume(h), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || h, e.check(Nn, r.interrupt ? n : c, e.attempt(fg, p, f))
	}

	function c(h) {
		return r.containerState.initialBlankLine = !0, o++, p(h)
	}

	function f(h) {
		return te(h) ? (e.enter("listItemPrefixWhitespace"), e.consume(h), e.exit("listItemPrefixWhitespace"), p) : n(h)
	}

	function p(h) {
		return r.containerState.size = o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(h)
	}
}

function pg(e, t, n) {
	const r = this;
	return r.containerState._closeFlow = void 0, e.check(Nn, i, o);

	function i(a) {
		return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, X(e, t, "listItemIndent", r.containerState.size + 1)(a)
	}

	function o(a) {
		return r.containerState.furtherBlankLines || !te(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, s(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(dg, t, s)(a))
	}

	function s(a) {
		return r.containerState._closeFlow = !0, r.interrupt = void 0, X(e, e.attempt(Ae, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a)
	}
}

function mg(e, t, n) {
	const r = this;
	return X(e, i, "listItemIndent", r.containerState.size + 1);

	function i(o) {
		const s = r.events[r.events.length - 1];
		return s && s[1].type === "listItemIndent" && s[2].sliceSerialize(s[1], !0).length === r.containerState.size ? t(o) : n(o)
	}
}

function gg(e) {
	e.exit(this.containerState.type)
}

function yg(e, t, n) {
	const r = this;
	return X(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1);

	function i(o) {
		const s = r.events[r.events.length - 1];
		return !te(o) && s && s[1].type === "listItemPrefixWhitespace" ? t(o) : n(o)
	}
}
const wa = {
	name: "setextUnderline",
	tokenize: vg,
	resolveTo: bg
};

function bg(e, t) {
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

function vg(e, t, n) {
	const r = this;
	let i = r.events.length,
		o, s;
	for (; i--;)
		if (r.events[i][1].type !== "lineEnding" && r.events[i][1].type !== "linePrefix" && r.events[i][1].type !== "content") {
			s = r.events[i][1].type === "paragraph";
			break
		} return a;

	function a(c) {
		return !r.parser.lazy[r.now().line] && (r.interrupt || s) ? (e.enter("setextHeadingLine"), e.enter("setextHeadingLineSequence"), o = c, l(c)) : n(c)
	}

	function l(c) {
		return c === o ? (e.consume(c), l) : (e.exit("setextHeadingLineSequence"), X(e, u, "lineSuffix")(c))
	}

	function u(c) {
		return c === null || U(c) ? (e.exit("setextHeadingLine"), t(c)) : n(c)
	}
}
const wg = {
	tokenize: _g
};

function _g(e) {
	const t = this,
		n = e.attempt(Nn, r, e.attempt(this.parser.constructs.flowInitial, i, X(e, e.attempt(this.parser.constructs.flow, i, e.attempt(Am, i)), "linePrefix")));
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
const xg = {
		resolveAll: Vu()
	},
	kg = Uu("string"),
	Cg = Uu("text");

function Uu(e) {
	return {
		tokenize: t,
		resolveAll: Vu(e === "text" ? Sg : void 0)
	};

	function t(n) {
		const r = this,
			i = this.parser.constructs[e],
			o = n.attempt(i, s, a);
		return s;

		function s(c) {
			return u(c) ? o(c) : a(c)
		}

		function a(c) {
			if (c === null) {
				n.consume(c);
				return
			}
			return n.enter("data"), n.consume(c), l
		}

		function l(c) {
			return u(c) ? (n.exit("data"), o(c)) : (n.consume(c), l)
		}

		function u(c) {
			if (c === null) return !0;
			const f = i[c];
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

function Sg(e, t) {
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
				const u = i[o];
				if (typeof u == "string") {
					for (s = u.length; u.charCodeAt(s - 1) === 32;) a++, s--;
					if (s) break;
					s = -1
				} else if (u === -2) l = !0, a++;
				else if (u !== -1) {
					o++;
					break
				}
			}
			if (a) {
				const u = {
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
				r.end = Object.assign({}, u.start), r.start.offset === r.end.offset ? Object.assign(r, u) : (e.splice(n, 0, ["enter", u, t], ["exit", u, t]), n += 2)
			}
			n++
		} return e
}

function Eg(e, t, n) {
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
			enter: _,
			exit: C,
			attempt: T(S),
			check: T(b),
			interrupt: T(b, {
				interrupt: !0
			})
		},
		u = {
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
	let c = t.tokenize.call(u, l);
	return t.resolveAll && o.push(t), u;

	function f(A) {
		return s = ze(s, A), g(), s[s.length - 1] !== null ? [] : (M(t, 0), u.events = Lr(o, u.events, u), u.events)
	}

	function p(A, D) {
		return Ag(h(A), D)
	}

	function h(A) {
		return Tg(s, A)
	}

	function d() {
		return Object.assign({}, r)
	}

	function m(A) {
		i[A.line] = A.column, z()
	}

	function g() {
		let A;
		for (; r._index < s.length;) {
			const D = s[r._index];
			if (typeof D == "string")
				for (A = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === A && r._bufferIndex < D.length;) y(D.charCodeAt(r._bufferIndex));
			else y(D)
		}
	}

	function y(A) {
		c = c(A)
	}

	function k(A) {
		U(A) ? (r.line++, r.column = 1, r.offset += A === -3 ? 2 : 1, z()) : A !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === s[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = A
	}

	function _(A, D) {
		const B = D || {};
		return B.type = A, B.start = d(), u.events.push(["enter", B, u]), a.push(B), B
	}

	function C(A) {
		const D = a.pop();
		return D.end = d(), u.events.push(["exit", D, u]), D
	}

	function S(A, D) {
		M(A, D.from)
	}

	function b(A, D) {
		D.restore()
	}

	function T(A, D) {
		return B;

		function B(L, N, x) {
			let G, $, Z, K;
			return Array.isArray(L) ? v(L) : "tokenize" in L ? v([L]) : w(L);

			function w(ne) {
				return ce;

				function ce(Ee) {
					const Te = Ee !== null && ne[Ee],
						Ge = Ee !== null && ne.null,
						Yr = [...Array.isArray(Te) ? Te : Te ? [Te] : [], ...Array.isArray(Ge) ? Ge : Ge ? [Ge] : []];
					return v(Yr)(Ee)
				}
			}

			function v(ne) {
				return G = ne, $ = 0, ne.length === 0 ? x : Le(ne[$])
			}

			function Le(ne) {
				return ce;

				function ce(Ee) {
					return K = F(), Z = ne, ne.partial || (u.currentConstruct = ne), ne.name && u.parser.constructs.disable.null.includes(ne.name) ? pe() : ne.tokenize.call(D ? Object.assign(Object.create(u), D) : u, l, ht, pe)(Ee)
				}
			}

			function ht(ne) {
				return A(Z, K), N
			}

			function pe(ne) {
				return K.restore(), ++$ < G.length ? Le(G[$]) : x
			}
		}
	}

	function M(A, D) {
		A.resolveAll && !o.includes(A) && o.push(A), A.resolve && Pe(u.events, D, u.events.length - D, A.resolve(u.events.slice(D), u)), A.resolveTo && (u.events = A.resolveTo(u.events, u))
	}

	function F() {
		const A = d(),
			D = u.previous,
			B = u.currentConstruct,
			L = u.events.length,
			N = Array.from(a);
		return {
			restore: x,
			from: L
		};

		function x() {
			r = A, u.previous = D, u.currentConstruct = B, u.events.length = L, a = N, z()
		}
	}

	function z() {
		r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1)
	}
}

function Tg(e, t) {
	const n = t.start._index,
		r = t.start._bufferIndex,
		i = t.end._index,
		o = t.end._bufferIndex;
	let s;
	return n === i ? s = [e[n].slice(r, o)] : (s = e.slice(n, i), r > -1 && (s[0] = s[0].slice(r)), o > 0 && s.push(e[i].slice(0, o))), s
}

function Ag(e, t) {
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
const Og = {
		[42]: Ae,
		[43]: Ae,
		[45]: Ae,
		[48]: Ae,
		[49]: Ae,
		[50]: Ae,
		[51]: Ae,
		[52]: Ae,
		[53]: Ae,
		[54]: Ae,
		[55]: Ae,
		[56]: Ae,
		[57]: Ae,
		[62]: Lu
	},
	Ig = {
		[91]: Pm
	},
	Rg = {
		[-2]: pi,
		[-1]: pi,
		[32]: pi
	},
	Mg = {
		[35]: jm,
		[42]: tr,
		[45]: [wa, tr],
		[60]: $m,
		[61]: wa,
		[95]: tr,
		[96]: ba,
		[126]: ba
	},
	Pg = {
		[38]: Fu,
		[92]: Du
	},
	Lg = {
		[-5]: mi,
		[-4]: mi,
		[-3]: mi,
		[33]: og,
		[38]: Fu,
		[42]: Ki,
		[60]: [fm, Xm],
		[91]: ag,
		[92]: [zm, Du],
		[93]: To,
		[95]: Ki,
		[96]: km
	},
	Dg = {
		null: [Ki, xg]
	},
	Fg = {
		null: [42, 95]
	},
	zg = {
		null: []
	};
var Ng = Object.freeze(Object.defineProperty({
	__proto__: null,
	document: Og,
	contentInitial: Ig,
	flowInitial: Rg,
	flow: Mg,
	string: Pg,
	text: Lg,
	insideSpan: Dg,
	attentionMarkers: Fg,
	disable: zg
}, Symbol.toStringTag, {
	value: "Module"
}));

function jg(e = {}) {
	const t = Pu([Ng].concat(e.extensions || [])),
		n = {
			defined: [],
			lazy: {},
			constructs: t,
			content: r(im),
			document: r(sm),
			flow: r(wg),
			string: r(kg),
			text: r(Cg)
		};
	return n;

	function r(i) {
		return o;

		function o(s) {
			return Eg(n, i, s)
		}
	}
}
const _a = /[\0\t\n\r]/g;

function Bg() {
	let e = 1,
		t = "",
		n = !0,
		r;
	return i;

	function i(o, s, a) {
		const l = [];
		let u, c, f, p, h;
		for (o = t + o.toString(s), f = 0, t = "", n && (o.charCodeAt(0) === 65279 && f++, n = void 0); f < o.length;) {
			if (_a.lastIndex = f, u = _a.exec(o), p = u && u.index !== void 0 ? u.index : o.length, h = o.charCodeAt(p), !u) {
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
					for (c = Math.ceil(e / 4) * 4, l.push(-2); e++ < c;) l.push(-1);
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

function Ug(e) {
	for (; !zu(e););
	return e
}

function $u(e, t) {
	const n = Number.parseInt(e, t);
	return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) === 65535 || (n & 65535) === 65534 || n > 1114111 ? "\uFFFD" : String.fromCharCode(n)
}
const Vg = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;

function Hu(e) {
	return e.replace(Vg, $g)
}

function $g(e, t, n) {
	if (t) return t;
	if (n.charCodeAt(0) === 35) {
		const i = n.charCodeAt(1),
			o = i === 120 || i === 88;
		return $u(n.slice(o ? 2 : 1), o ? 16 : 10)
	}
	return Eo(n) || e
}

function nr(e) {
	return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? xa(e.position) : "start" in e || "end" in e ? xa(e) : "line" in e || "column" in e ? Zi(e) : ""
}

function Zi(e) {
	return ka(e && e.line) + ":" + ka(e && e.column)
}

function xa(e) {
	return Zi(e && e.start) + "-" + Zi(e && e.end)
}

function ka(e) {
	return e && typeof e == "number" ? e : 1
}
const Ji = {}.hasOwnProperty,
	Hg = function(e, t, n) {
		return typeof t != "string" && (n = t, t = void 0), qg(n)(Ug(jg(n).document().write(Bg()(e, t, !0))))
	};

function qg(e = {}) {
	const t = qu({
			transforms: [],
			canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
			enter: {
				autolink: l(Bo),
				autolinkProtocol: D,
				autolinkEmail: D,
				atxHeading: l(zo),
				blockQuote: l(Pc),
				characterEscape: D,
				characterReference: D,
				codeFenced: l(Fo),
				codeFencedFenceInfo: u,
				codeFencedFenceMeta: u,
				codeIndented: l(Fo, u),
				codeText: l(Lc, u),
				codeTextData: D,
				data: D,
				codeFlowValue: D,
				definition: l(Dc),
				definitionDestinationString: u,
				definitionLabelString: u,
				definitionTitleString: u,
				emphasis: l(Fc),
				hardBreakEscape: l(No),
				hardBreakTrailing: l(No),
				htmlFlow: l(jo, u),
				htmlFlowData: D,
				htmlText: l(jo, u),
				htmlTextData: D,
				image: l(zc),
				label: u,
				link: l(Bo),
				listItem: l(Nc),
				listItemValue: m,
				listOrdered: l(Uo, d),
				listUnordered: l(Uo),
				paragraph: l(jc),
				reference: ne,
				referenceString: u,
				resourceDestinationString: u,
				resourceTitleString: u,
				setextHeading: l(zo),
				strong: l(Bc),
				thematicBreak: l(Vc)
			},
			exit: {
				atxHeading: f(),
				atxHeadingSequence: M,
				autolink: f(),
				autolinkEmail: Yr,
				autolinkProtocol: Ge,
				blockQuote: f(),
				characterEscapeValue: B,
				characterReferenceMarkerHexadecimal: Ee,
				characterReferenceMarkerNumeric: Ee,
				characterReferenceValue: Te,
				codeFenced: f(_),
				codeFencedFence: k,
				codeFencedFenceInfo: g,
				codeFencedFenceMeta: y,
				codeFlowValue: B,
				codeIndented: f(C),
				codeText: f($),
				codeTextData: B,
				data: B,
				definition: f(),
				definitionDestinationString: T,
				definitionLabelString: S,
				definitionTitleString: b,
				emphasis: f(),
				hardBreakEscape: f(N),
				hardBreakTrailing: f(N),
				htmlFlow: f(x),
				htmlFlowData: B,
				htmlText: f(G),
				htmlTextData: B,
				image: f(K),
				label: v,
				labelText: w,
				lineEnding: L,
				link: f(Z),
				listItem: f(),
				listOrdered: f(),
				listUnordered: f(),
				paragraph: f(),
				referenceString: ce,
				resourceDestinationString: Le,
				resourceTitleString: ht,
				resource: pe,
				setextHeading: f(A),
				setextHeadingLineSequence: z,
				setextHeadingText: F,
				strong: f(),
				thematicBreak: f()
			}
		}, e.mdastExtensions || []),
		n = {};
	return r;

	function r(E) {
		let P = {
			type: "root",
			children: []
		};
		const q = [P],
			ee = [],
			De = [],
			Zt = {
				stack: q,
				tokenStack: ee,
				config: t,
				enter: c,
				exit: p,
				buffer: u,
				resume: h,
				setData: o,
				getData: s
			};
		let re = -1;
		for (; ++re < E.length;)
			if (E[re][1].type === "listOrdered" || E[re][1].type === "listUnordered")
				if (E[re][0] === "enter") De.push(re);
				else {
					const ye = De.pop();
					re = i(E, ye, re)
				} for (re = -1; ++re < E.length;) {
			const ye = t[E[re][0]];
			Ji.call(ye, E[re][1].type) && ye[E[re][1].type].call(Object.assign({
				sliceSerialize: E[re][2].sliceSerialize
			}, Zt), E[re][1])
		}
		if (ee.length > 0) {
			const ye = ee[ee.length - 1];
			(ye[1] || Ca).call(Zt, void 0, ye[0])
		}
		for (P.position = {
				start: a(E.length > 0 ? E[0][1].start : {
					line: 1,
					column: 1,
					offset: 0
				}),
				end: a(E.length > 0 ? E[E.length - 2][1].end : {
					line: 1,
					column: 1,
					offset: 0
				})
			}, re = -1; ++re < t.transforms.length;) P = t.transforms[re](P) || P;
		return P
	}

	function i(E, P, q) {
		let ee = P - 1,
			De = -1,
			Zt = !1,
			re, ye, Mt, Jt;
		for (; ++ee <= q;) {
			const se = E[ee];
			if (se[1].type === "listUnordered" || se[1].type === "listOrdered" || se[1].type === "blockQuote" ? (se[0] === "enter" ? De++ : De--, Jt = void 0) : se[1].type === "lineEndingBlank" ? se[0] === "enter" && (re && !Jt && !De && !Mt && (Mt = ee), Jt = void 0) : se[1].type === "linePrefix" || se[1].type === "listItemValue" || se[1].type === "listItemMarker" || se[1].type === "listItemPrefix" || se[1].type === "listItemPrefixWhitespace" || (Jt = void 0), !De && se[0] === "enter" && se[1].type === "listItemPrefix" || De === -1 && se[0] === "exit" && (se[1].type === "listUnordered" || se[1].type === "listOrdered")) {
				if (re) {
					let Kr = ee;
					for (ye = void 0; Kr--;) {
						const st = E[Kr];
						if (st[1].type === "lineEnding" || st[1].type === "lineEndingBlank") {
							if (st[0] === "exit") continue;
							ye && (E[ye][1].type = "lineEndingBlank", Zt = !0), st[1].type = "lineEnding", ye = Kr
						} else if (!(st[1].type === "linePrefix" || st[1].type === "blockQuotePrefix" || st[1].type === "blockQuotePrefixWhitespace" || st[1].type === "blockQuoteMarker" || st[1].type === "listItemIndent")) break
					}
					Mt && (!ye || Mt < ye) && (re._spread = !0), re.end = Object.assign({}, ye ? E[ye][1].start : se[1].end), E.splice(ye || ee, 0, ["exit", re, se[2]]), ee++, q++
				}
				se[1].type === "listItemPrefix" && (re = {
					type: "listItem",
					_spread: !1,
					start: Object.assign({}, se[1].start)
				}, E.splice(ee, 0, ["enter", re, se[2]]), ee++, q++, Mt = void 0, Jt = !0)
			}
		}
		return E[P][1]._spread = Zt, q
	}

	function o(E, P) {
		n[E] = P
	}

	function s(E) {
		return n[E]
	}

	function a(E) {
		return {
			line: E.line,
			column: E.column,
			offset: E.offset
		}
	}

	function l(E, P) {
		return q;

		function q(ee) {
			c.call(this, E(ee), ee), P && P.call(this, ee)
		}
	}

	function u() {
		this.stack.push({
			type: "fragment",
			children: []
		})
	}

	function c(E, P, q) {
		return this.stack[this.stack.length - 1].children.push(E), this.stack.push(E), this.tokenStack.push([P, q]), E.position = {
			start: a(P.start)
		}, E
	}

	function f(E) {
		return P;

		function P(q) {
			E && E.call(this, q), p.call(this, q)
		}
	}

	function p(E, P) {
		const q = this.stack.pop(),
			ee = this.tokenStack.pop();
		if (ee) ee[0].type !== E.type && (P ? P.call(this, E, ee[0]) : (ee[1] || Ca).call(this, E, ee[0]));
		else throw new Error("Cannot close `" + E.type + "` (" + nr({
			start: E.start,
			end: E.end
		}) + "): it\u2019s not open");
		return q.position.end = a(E.end), q
	}

	function h() {
		return Zp(this.stack.pop())
	}

	function d() {
		o("expectingFirstListItemValue", !0)
	}

	function m(E) {
		if (s("expectingFirstListItemValue")) {
			const P = this.stack[this.stack.length - 2];
			P.start = Number.parseInt(this.sliceSerialize(E), 10), o("expectingFirstListItemValue")
		}
	}

	function g() {
		const E = this.resume(),
			P = this.stack[this.stack.length - 1];
		P.lang = E
	}

	function y() {
		const E = this.resume(),
			P = this.stack[this.stack.length - 1];
		P.meta = E
	}

	function k() {
		s("flowCodeInside") || (this.buffer(), o("flowCodeInside", !0))
	}

	function _() {
		const E = this.resume(),
			P = this.stack[this.stack.length - 1];
		P.value = E.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), o("flowCodeInside")
	}

	function C() {
		const E = this.resume(),
			P = this.stack[this.stack.length - 1];
		P.value = E.replace(/(\r?\n|\r)$/g, "")
	}

	function S(E) {
		const P = this.resume(),
			q = this.stack[this.stack.length - 1];
		q.label = P, q.identifier = Qe(this.sliceSerialize(E)).toLowerCase()
	}

	function b() {
		const E = this.resume(),
			P = this.stack[this.stack.length - 1];
		P.title = E
	}

	function T() {
		const E = this.resume(),
			P = this.stack[this.stack.length - 1];
		P.url = E
	}

	function M(E) {
		const P = this.stack[this.stack.length - 1];
		if (!P.depth) {
			const q = this.sliceSerialize(E).length;
			P.depth = q
		}
	}

	function F() {
		o("setextHeadingSlurpLineEnding", !0)
	}

	function z(E) {
		const P = this.stack[this.stack.length - 1];
		P.depth = this.sliceSerialize(E).charCodeAt(0) === 61 ? 1 : 2
	}

	function A() {
		o("setextHeadingSlurpLineEnding")
	}

	function D(E) {
		const P = this.stack[this.stack.length - 1];
		let q = P.children[P.children.length - 1];
		(!q || q.type !== "text") && (q = Uc(), q.position = {
			start: a(E.start)
		}, P.children.push(q)), this.stack.push(q)
	}

	function B(E) {
		const P = this.stack.pop();
		P.value += this.sliceSerialize(E), P.position.end = a(E.end)
	}

	function L(E) {
		const P = this.stack[this.stack.length - 1];
		if (s("atHardBreak")) {
			const q = P.children[P.children.length - 1];
			q.position.end = a(E.end), o("atHardBreak");
			return
		}!s("setextHeadingSlurpLineEnding") && t.canContainEols.includes(P.type) && (D.call(this, E), B.call(this, E))
	}

	function N() {
		o("atHardBreak", !0)
	}

	function x() {
		const E = this.resume(),
			P = this.stack[this.stack.length - 1];
		P.value = E
	}

	function G() {
		const E = this.resume(),
			P = this.stack[this.stack.length - 1];
		P.value = E
	}

	function $() {
		const E = this.resume(),
			P = this.stack[this.stack.length - 1];
		P.value = E
	}

	function Z() {
		const E = this.stack[this.stack.length - 1];
		s("inReference") ? (E.type += "Reference", E.referenceType = s("referenceType") || "shortcut", delete E.url, delete E.title) : (delete E.identifier, delete E.label), o("referenceType")
	}

	function K() {
		const E = this.stack[this.stack.length - 1];
		s("inReference") ? (E.type += "Reference", E.referenceType = s("referenceType") || "shortcut", delete E.url, delete E.title) : (delete E.identifier, delete E.label), o("referenceType")
	}

	function w(E) {
		const P = this.stack[this.stack.length - 2],
			q = this.sliceSerialize(E);
		P.label = Hu(q), P.identifier = Qe(q).toLowerCase()
	}

	function v() {
		const E = this.stack[this.stack.length - 1],
			P = this.resume(),
			q = this.stack[this.stack.length - 1];
		o("inReference", !0), q.type === "link" ? q.children = E.children : q.alt = P
	}

	function Le() {
		const E = this.resume(),
			P = this.stack[this.stack.length - 1];
		P.url = E
	}

	function ht() {
		const E = this.resume(),
			P = this.stack[this.stack.length - 1];
		P.title = E
	}

	function pe() {
		o("inReference")
	}

	function ne() {
		o("referenceType", "collapsed")
	}

	function ce(E) {
		const P = this.resume(),
			q = this.stack[this.stack.length - 1];
		q.label = P, q.identifier = Qe(this.sliceSerialize(E)).toLowerCase(), o("referenceType", "full")
	}

	function Ee(E) {
		o("characterReferenceType", E.type)
	}

	function Te(E) {
		const P = this.sliceSerialize(E),
			q = s("characterReferenceType");
		let ee;
		q ? (ee = $u(P, q === "characterReferenceMarkerNumeric" ? 10 : 16), o("characterReferenceType")) : ee = Eo(P);
		const De = this.stack.pop();
		De.value += ee, De.position.end = a(E.end)
	}

	function Ge(E) {
		B.call(this, E);
		const P = this.stack[this.stack.length - 1];
		P.url = this.sliceSerialize(E)
	}

	function Yr(E) {
		B.call(this, E);
		const P = this.stack[this.stack.length - 1];
		P.url = "mailto:" + this.sliceSerialize(E)
	}

	function Pc() {
		return {
			type: "blockquote",
			children: []
		}
	}

	function Fo() {
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

	function zo() {
		return {
			type: "heading",
			depth: void 0,
			children: []
		}
	}

	function No() {
		return {
			type: "break"
		}
	}

	function jo() {
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

	function Bo() {
		return {
			type: "link",
			title: null,
			url: "",
			children: []
		}
	}

	function Uo(E) {
		return {
			type: "list",
			ordered: E.type === "listOrdered",
			start: null,
			spread: E._spread,
			children: []
		}
	}

	function Nc(E) {
		return {
			type: "listItem",
			spread: E._spread,
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
		Array.isArray(r) ? qu(e, r) : Wg(e, r)
	}
	return e
}

function Wg(e, t) {
	let n;
	for (n in t)
		if (Ji.call(t, n)) {
			const r = n === "canContainEols" || n === "transforms",
				o = (Ji.call(e, n) ? e[n] : void 0) || (e[n] = r ? [] : {}),
				s = t[n];
			s && (r ? e[n] = [...o, ...s] : Object.assign(o, s))
		}
}

function Ca(e, t) {
	throw e ? new Error("Cannot close `" + e.type + "` (" + nr({
		start: e.start,
		end: e.end
	}) + "): a different token (`" + t.type + "`, " + nr({
		start: t.start,
		end: t.end
	}) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + nr({
		start: t.start,
		end: t.end
	}) + ") is still open")
}

function Qg(e) {
	Object.assign(this, {
		Parser: n => {
			const r = this.data("settings");
			return Hg(n, Object.assign({}, r, e, {
				extensions: this.data("micromarkExtensions") || [],
				mdastExtensions: this.data("fromMarkdownExtensions") || []
			}))
		}
	})
}
var he = function(e, t, n) {
	var r = {
		type: String(e)
	};
	return n == null && (typeof t == "string" || Array.isArray(t)) ? n = t : Object.assign(r, t), Array.isArray(n) ? r.children = n : n != null && (r.value = String(n)), r
};
const rr = {}.hasOwnProperty;

function Xg(e, t) {
	const n = t.data || {};
	return "value" in t && !(rr.call(n, "hName") || rr.call(n, "hProperties") || rr.call(n, "hChildren")) ? e.augment(t, he("text", t.value)) : e(t, "div", xe(e, t))
}

function Wu(e, t, n) {
	const r = t && t.type;
	let i;
	if (!r) throw new Error("Expected node, got `" + t + "`");
	return rr.call(e.handlers, r) ? i = e.handlers[r] : e.passThrough && e.passThrough.includes(r) ? i = Gg : i = e.unknownHandler, (typeof i == "function" ? i : Xg)(e, t, n)
}

function Gg(e, t) {
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
	if (e == null) return Jg;
	if (typeof e == "string") return Zg(e);
	if (typeof e == "object") return Array.isArray(e) ? Yg(e) : Kg(e);
	if (typeof e == "function") return Dr(e);
	throw new Error("Expected function, string, or object as test")
};

function Yg(e) {
	const t = [];
	let n = -1;
	for (; ++n < e.length;) t[n] = Qu(e[n]);
	return Dr(r);

	function r(...i) {
		let o = -1;
		for (; ++o < t.length;)
			if (t[o].call(this, ...i)) return !0;
		return !1
	}
}

function Kg(e) {
	return Dr(t);

	function t(n) {
		let r;
		for (r in e)
			if (n[r] !== e[r]) return !1;
		return !0
	}
}

function Zg(e) {
	return Dr(t);

	function t(n) {
		return n && n.type === e
	}
}

function Dr(e) {
	return t;

	function t(...n) {
		return Boolean(e.call(this, ...n))
	}
}

function Jg() {
	return !0
}
const e0 = !0,
	t0 = "skip",
	Sa = !1,
	n0 = function(e, t, n, r) {
		typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null);
		const i = Qu(t),
			o = r ? -1 : 1;
		s(e, null, [])();

		function s(a, l, u) {
			const c = typeof a == "object" && a !== null ? a : {};
			let f;
			return typeof c.type == "string" && (f = typeof c.tagName == "string" ? c.tagName : typeof c.name == "string" ? c.name : void 0, Object.defineProperty(p, "name", {
				value: "node (" + (c.type + (f ? "<" + f + ">" : "")) + ")"
			})), p;

			function p() {
				let h = [],
					d, m, g;
				if ((!t || i(a, l, u[u.length - 1] || null)) && (h = r0(n(a, u)), h[0] === Sa)) return h;
				if (a.children && h[0] !== t0)
					for (m = (r ? a.children.length : -1) + o, g = u.concat(a); m > -1 && m < a.children.length;) {
						if (d = s(a.children[m], m, g)(), d[0] === Sa) return d;
						m = typeof d[1] == "number" ? d[1] : m + o
					}
				return h
			}
		}
	};

function r0(e) {
	return Array.isArray(e) ? e : typeof e == "number" ? [e0, e] : [e]
}
const Xu = function(e, t, n, r) {
		typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null), n0(e, t, i, r);

		function i(o, s) {
			const a = s[s.length - 1];
			return n(o, a ? a.children.indexOf(o) : null, a)
		}
	},
	Gu = Ku("start"),
	Yu = Ku("end");

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

function i0(e) {
	return !e || !e.position || !e.position.start || !e.position.start.line || !e.position.start.column || !e.position.end || !e.position.end.line || !e.position.end.column
}
const Ea = {}.hasOwnProperty;

function o0(e) {
	const t = Object.create(null);
	if (!e || !e.type) throw new Error("mdast-util-definitions expected node");
	return Xu(e, "definition", r => {
		const i = Ta(r.identifier);
		i && !Ea.call(t, i) && (t[i] = r)
	}), n;

	function n(r) {
		const i = Ta(r);
		return i && Ea.call(t, i) ? t[i] : null
	}
}

function Ta(e) {
	return String(e || "").toUpperCase()
}
const s0 = {
	'"': "quot",
	"&": "amp",
	"<": "lt",
	">": "gt"
};

function a0(e) {
	return e.replace(/["&<>]/g, t);

	function t(n) {
		return "&" + s0[n] + ";"
	}
}

function Zu(e, t) {
	const n = a0(l0(e || ""));
	if (!t) return n;
	const r = n.indexOf(":"),
		i = n.indexOf("?"),
		o = n.indexOf("#"),
		s = n.indexOf("/");
	return r < 0 || s > -1 && r > s || i > -1 && r > i || o > -1 && r > o || t.test(n.slice(0, r)) ? n : ""
}

function l0(e) {
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

function ut(e, t) {
	const n = [];
	let r = -1;
	for (t && n.push(he("text", `
`)); ++r < e.length;) r && n.push(he("text", `
`)), n.push(e[r]);
	return t && e.length > 0 && n.push(he("text", `
`)), n
}

function u0(e) {
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
		const u = i[i.length - 1];
		if (u && u.type === "element" && u.tagName === "p") {
			const f = u.children[u.children.length - 1];
			f && f.type === "text" ? f.value += " " : u.children.push({
				type: "text",
				value: " "
			}), u.children.push(...l)
		} else i.push(...l);
		const c = {
			type: "element",
			tagName: "li",
			properties: {
				id: e.clobberPrefix + "fn-" + s
			},
			children: ut(i, !0)
		};
		r.position && (c.position = r.position), n.push(c)
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
			children: [he("text", e.footnoteLabel)]
		}, {
			type: "text",
			value: `
`
		}, {
			type: "element",
			tagName: "ol",
			properties: {},
			children: ut(n, !0)
		}, {
			type: "text",
			value: `
`
		}]
	}
}

function c0(e, t) {
	return e(t, "blockquote", ut(xe(e, t), !0))
}

function f0(e, t) {
	return [e(t, "br"), he("text", `
`)]
}

function d0(e, t) {
	const n = t.value ? t.value + `
` : "",
		r = t.lang && t.lang.match(/^[^ \t]+(?=[ \t]|$)/),
		i = {};
	r && (i.className = ["language-" + r]);
	const o = e(t, "code", i, [he("text", n)]);
	return t.meta && (o.data = {
		meta: t.meta
	}), e(t.position, "pre", [o])
}

function h0(e, t) {
	return e(t, "del", xe(e, t))
}

function p0(e, t) {
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
	}, [he("text", String(o))])])
}

function m0(e, t) {
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

function g0(e, t) {
	return e(t, "h" + t.depth, xe(e, t))
}

function y0(e, t) {
	return e.dangerous ? e.augment(t, he("raw", t.value)) : null
}
var Aa = {};

function b0(e) {
	var t, n, r = Aa[e];
	if (r) return r;
	for (r = Aa[e] = [], t = 0; t < 128; t++) n = String.fromCharCode(t), /^[0-9a-z]$/i.test(n) ? r.push(n) : r.push("%" + ("0" + t.toString(16).toUpperCase()).slice(-2));
	for (t = 0; t < e.length; t++) r[e.charCodeAt(t)] = e[t];
	return r
}

function Fr(e, t, n) {
	var r, i, o, s, a, l = "";
	for (typeof t != "string" && (n = t, t = Fr.defaultChars), typeof n == "undefined" && (n = !0), a = b0(t), r = 0, i = e.length; r < i; r++) {
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
Fr.defaultChars = ";/?:@&=+$,-_.!~*'()#";
Fr.componentChars = "-_.!~*'()";
var zr = Fr;

function ec(e, t) {
	const n = t.referenceType;
	let r = "]";
	if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference") return he("text", "![" + t.alt + r);
	const i = xe(e, t),
		o = i[0];
	o && o.type === "text" ? o.value = "[" + o.value : i.unshift(he("text", "["));
	const s = i[i.length - 1];
	return s && s.type === "text" ? s.value += r : i.push(he("text", r)), i
}

function v0(e, t) {
	const n = e.definition(t.identifier);
	if (!n) return ec(e, t);
	const r = {
		src: zr(n.url || ""),
		alt: t.alt
	};
	return n.title !== null && n.title !== void 0 && (r.title = n.title), e(t, "img", r)
}

function w0(e, t) {
	const n = {
		src: zr(t.url),
		alt: t.alt
	};
	return t.title !== null && t.title !== void 0 && (n.title = t.title), e(t, "img", n)
}

function _0(e, t) {
	return e(t, "code", [he("text", t.value.replace(/\r?\n|\r/g, " "))])
}

function x0(e, t) {
	const n = e.definition(t.identifier);
	if (!n) return ec(e, t);
	const r = {
		href: zr(n.url || "")
	};
	return n.title !== null && n.title !== void 0 && (r.title = n.title), e(t, "a", r, xe(e, t))
}

function k0(e, t) {
	const n = {
		href: zr(t.url)
	};
	return t.title !== null && t.title !== void 0 && (n.title = t.title), e(t, "a", n, xe(e, t))
}

function C0(e, t, n) {
	const r = xe(e, t),
		i = n ? S0(n) : tc(t),
		o = {},
		s = [];
	if (typeof t.checked == "boolean") {
		let u;
		r[0] && r[0].type === "element" && r[0].tagName === "p" ? u = r[0] : (u = e(null, "p", []), r.unshift(u)), u.children.length > 0 && u.children.unshift(he("text", " ")), u.children.unshift(e(null, "input", {
			type: "checkbox",
			checked: t.checked,
			disabled: !0
		})), o.className = ["task-list-item"]
	}
	let a = -1;
	for (; ++a < r.length;) {
		const u = r[a];
		(i || a !== 0 || u.type !== "element" || u.tagName !== "p") && s.push(he("text", `
`)), u.type === "element" && u.tagName === "p" && !i ? s.push(...u.children) : s.push(u)
	}
	const l = r[r.length - 1];
	return l && (i || !("tagName" in l) || l.tagName !== "p") && s.push(he("text", `
`)), e(t, "li", o, s)
}

function S0(e) {
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

function E0(e, t) {
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
	return e(t, r, n, ut(i, !0))
}

function T0(e, t) {
	return e(t, "p", xe(e, t))
}

function A0(e, t) {
	return e.augment(t, he("root", ut(xe(e, t))))
}

function O0(e, t) {
	return e(t, "strong", xe(e, t))
}

function I0(e, t) {
	const n = t.children;
	let r = -1;
	const i = t.align || [],
		o = [];
	for (; ++r < n.length;) {
		const s = n[r].children,
			a = r === 0 ? "th" : "td",
			l = [];
		let u = -1;
		const c = t.align ? i.length : s.length;
		for (; ++u < c;) {
			const f = s[u];
			l.push(e(f, a, {
				align: i[u]
			}, f ? xe(e, f) : []))
		}
		o[r] = e(n[r], "tr", ut(l, !0))
	}
	return e(t, "table", ut([e(o[0].position, "thead", ut([o[0]], !0))].concat(o[1] ? e({
		start: Gu(o[1]),
		end: Yu(o[o.length - 1])
	}, "tbody", ut(o.slice(1), !0)) : []), !0))
}
const Oa = 9,
	Ia = 32;

function R0(e) {
	const t = String(e),
		n = /\r?\n|\r/g;
	let r = n.exec(t),
		i = 0;
	const o = [];
	for (; r;) o.push(Ra(t.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = n.exec(t);
	return o.push(Ra(t.slice(i), i > 0, !1)), o.join("")
}

function Ra(e, t, n) {
	let r = 0,
		i = e.length;
	if (t) {
		let o = e.codePointAt(r);
		for (; o === Oa || o === Ia;) r++, o = e.codePointAt(r)
	}
	if (n) {
		let o = e.codePointAt(i - 1);
		for (; o === Oa || o === Ia;) i--, o = e.codePointAt(i - 1)
	}
	return i > r ? e.slice(r, i) : ""
}

function M0(e, t) {
	return e.augment(t, he("text", R0(String(t.value))))
}

function P0(e, t) {
	return e(t, "hr")
}
const L0 = {
	blockquote: c0,
	break: f0,
	code: d0,
	delete: h0,
	emphasis: p0,
	footnoteReference: Ju,
	footnote: m0,
	heading: g0,
	html: y0,
	imageReference: v0,
	image: w0,
	inlineCode: _0,
	linkReference: x0,
	link: k0,
	listItem: C0,
	list: E0,
	paragraph: T0,
	root: A0,
	strong: O0,
	table: I0,
	text: M0,
	thematicBreak: P0,
	toml: Wn,
	yaml: Wn,
	definition: Wn,
	footnoteDefinition: Wn
};

function Wn() {
	return null
}
const D0 = {}.hasOwnProperty;

function F0(e, t) {
	const n = t || {},
		r = n.allowDangerousHtml || !1,
		i = {};
	return s.dangerous = r, s.clobberPrefix = n.clobberPrefix === void 0 || n.clobberPrefix === null ? "user-content-" : n.clobberPrefix, s.footnoteLabel = n.footnoteLabel || "Footnotes", s.footnoteBackLabel = n.footnoteBackLabel || "Back to content", s.definition = o0(e), s.footnoteById = i, s.footnoteOrder = [], s.footnoteCounts = {}, s.augment = o, s.handlers = {
		...L0,
		...n.handlers
	}, s.unknownHandler = n.unknownHandler, s.passThrough = n.passThrough, Xu(e, "footnoteDefinition", a => {
		const l = String(a.identifier).toUpperCase();
		D0.call(i, l) || (i[l] = a)
	}), s;

	function o(a, l) {
		if (a && "data" in a && a.data) {
			const u = a.data;
			u.hName && (l.type !== "element" && (l = {
				type: "element",
				tagName: "",
				properties: {},
				children: []
			}), l.tagName = u.hName), l.type === "element" && u.hProperties && (l.properties = {
				...l.properties,
				...u.hProperties
			}), "children" in l && l.children && u.hChildren && (l.children = u.hChildren)
		}
		if (a) {
			const u = "type" in a ? a : {
				position: a
			};
			i0(u) || (l.position = {
				start: Gu(u),
				end: Yu(u)
			})
		}
		return l
	}

	function s(a, l, u, c) {
		return Array.isArray(u) && (c = u, u = {}), o(a, {
			type: "element",
			tagName: l,
			properties: u || {},
			children: c || []
		})
	}
}

function nc(e, t) {
	const n = F0(e, t),
		r = Wu(n, e, null),
		i = u0(n);
	return i && r.children.push(he("text", `
`), i), Array.isArray(r) ? {
		type: "root",
		children: r
	} : r
}
const z0 = function(e, t) {
	return e && "run" in e ? j0(e, t) : B0(e || t)
};
var N0 = z0;

function j0(e, t) {
	return (n, r, i) => {
		e.run(nc(n, t), r, o => {
			i(o)
		})
	}
}

function B0(e) {
	return t => nc(t, e)
}
var rc = {
		exports: {}
	},
	U0 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
	V0 = U0,
	$0 = V0;

function ic() {}

function oc() {}
oc.resetWarningCache = ic;
var H0 = function() {
	function e(r, i, o, s, a, l) {
		if (l !== $0) {
			var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
			throw u.name = "Invariant Violation", u
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
rc.exports = H0();
var H = rc.exports;
class jn {
	constructor(t, n, r) {
		this.property = t, this.normal = n, r && (this.space = r)
	}
}
jn.prototype.property = {};
jn.prototype.normal = {};
jn.prototype.space = null;

function sc(e, t) {
	const n = {},
		r = {};
	let i = -1;
	for (; ++i < e.length;) Object.assign(n, e[i].property), Object.assign(r, e[i].normal);
	return new jn(n, r, t)
}

function eo(e) {
	return e.toLowerCase()
}
class Ve {
	constructor(t, n) {
		this.property = t, this.attribute = n
	}
}
Ve.prototype.space = null;
Ve.prototype.boolean = !1;
Ve.prototype.booleanish = !1;
Ve.prototype.overloadedBoolean = !1;
Ve.prototype.number = !1;
Ve.prototype.commaSeparated = !1;
Ve.prototype.spaceSeparated = !1;
Ve.prototype.commaOrSpaceSeparated = !1;
Ve.prototype.mustUseProperty = !1;
Ve.prototype.defined = !1;
let q0 = 0;
const Q = Rt(),
	ae = Rt(),
	ac = Rt(),
	R = Rt(),
	ie = Rt(),
	Bt = Rt(),
	Me = Rt();

function Rt() {
	return 2 ** ++q0
}
var to = Object.freeze(Object.defineProperty({
	__proto__: null,
	boolean: Q,
	booleanish: ae,
	overloadedBoolean: ac,
	number: R,
	spaceSeparated: ie,
	commaSeparated: Bt,
	commaOrSpaceSeparated: Me
}, Symbol.toStringTag, {
	value: "Module"
}));
const gi = Object.keys(to);
class Ao extends Ve {
	constructor(t, n, r, i) {
		let o = -1;
		if (super(t, n), Ma(this, "space", i), typeof r == "number")
			for (; ++o < gi.length;) {
				const s = gi[o];
				Ma(this, gi[o], (r & to[s]) === to[s])
			}
	}
}
Ao.prototype.defined = !0;

function Ma(e, t, n) {
	n && (e[t] = n)
}
const W0 = {}.hasOwnProperty;

function Kt(e) {
	const t = {},
		n = {};
	let r;
	for (r in e.properties)
		if (W0.call(e.properties, r)) {
			const i = e.properties[r],
				o = new Ao(r, e.transform(e.attributes || {}, r), i, e.space);
			e.mustUseProperty && e.mustUseProperty.includes(r) && (o.mustUseProperty = !0), t[r] = o, n[eo(r)] = r, n[eo(o.attribute)] = r
		} return new jn(t, n, e.space)
}
const lc = Kt({
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
	uc = Kt({
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
const dc = Kt({
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
	hc = Kt({
		transform(e, t) {
			return t === "role" ? t : "aria-" + t.slice(4).toLowerCase()
		},
		properties: {
			ariaActiveDescendant: null,
			ariaAtomic: ae,
			ariaAutoComplete: null,
			ariaBusy: ae,
			ariaChecked: ae,
			ariaColCount: R,
			ariaColIndex: R,
			ariaColSpan: R,
			ariaControls: ie,
			ariaCurrent: null,
			ariaDescribedBy: ie,
			ariaDetails: null,
			ariaDisabled: ae,
			ariaDropEffect: ie,
			ariaErrorMessage: null,
			ariaExpanded: ae,
			ariaFlowTo: ie,
			ariaGrabbed: ae,
			ariaHasPopup: null,
			ariaHidden: ae,
			ariaInvalid: null,
			ariaKeyShortcuts: null,
			ariaLabel: null,
			ariaLabelledBy: ie,
			ariaLevel: R,
			ariaLive: null,
			ariaModal: ae,
			ariaMultiLine: ae,
			ariaMultiSelectable: ae,
			ariaOrientation: null,
			ariaOwns: ie,
			ariaPlaceholder: null,
			ariaPosInSet: R,
			ariaPressed: ae,
			ariaReadOnly: ae,
			ariaRelevant: null,
			ariaRequired: ae,
			ariaRoleDescription: ie,
			ariaRowCount: R,
			ariaRowIndex: R,
			ariaRowSpan: R,
			ariaSelected: ae,
			ariaSetSize: R,
			ariaSort: null,
			ariaValueMax: R,
			ariaValueMin: R,
			ariaValueNow: R,
			ariaValueText: null,
			role: null
		}
	}),
	Q0 = Kt({
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
			accept: Bt,
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
			cols: R,
			colSpan: null,
			content: null,
			contentEditable: ae,
			controls: Q,
			controlsList: ie,
			coords: R | Bt,
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
			draggable: ae,
			encType: null,
			enterKeyHint: null,
			form: null,
			formAction: null,
			formEncType: null,
			formMethod: null,
			formNoValidate: Q,
			formTarget: null,
			headers: ie,
			height: R,
			hidden: Q,
			high: R,
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
			low: R,
			manifest: null,
			max: null,
			maxLength: R,
			media: null,
			method: null,
			min: null,
			minLength: R,
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
			optimum: R,
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
			rows: R,
			rowSpan: R,
			sandbox: ie,
			scope: null,
			scoped: Q,
			seamless: Q,
			selected: Q,
			shape: null,
			size: R,
			sizes: null,
			slot: null,
			span: R,
			spellCheck: ae,
			src: null,
			srcDoc: null,
			srcLang: null,
			srcSet: null,
			start: R,
			step: null,
			style: null,
			tabIndex: R,
			target: null,
			title: null,
			translate: null,
			type: null,
			typeMustMatch: Q,
			useMap: null,
			value: ae,
			width: R,
			wrap: null,
			align: null,
			aLink: null,
			archive: ie,
			axis: null,
			background: null,
			bgColor: null,
			border: R,
			borderColor: null,
			bottomMargin: R,
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
			hSpace: R,
			leftMargin: R,
			link: null,
			longDesc: null,
			lowSrc: null,
			marginHeight: R,
			marginWidth: R,
			noResize: Q,
			noHref: Q,
			noShade: Q,
			noWrap: Q,
			object: null,
			profile: null,
			prompt: null,
			rev: null,
			rightMargin: R,
			rules: null,
			scheme: null,
			scrolling: ae,
			standby: null,
			summary: null,
			text: null,
			topMargin: R,
			valueType: null,
			version: null,
			vAlign: null,
			vLink: null,
			vSpace: R,
			allowTransparency: null,
			autoCorrect: null,
			autoSave: null,
			disablePictureInPicture: Q,
			disableRemotePlayback: Q,
			prefix: null,
			property: null,
			results: R,
			security: null,
			unselectable: null
		}
	}),
	X0 = Kt({
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
			about: Me,
			accentHeight: R,
			accumulate: null,
			additive: null,
			alignmentBaseline: null,
			alphabetic: R,
			amplitude: R,
			arabicForm: null,
			ascent: R,
			attributeName: null,
			attributeType: null,
			azimuth: R,
			bandwidth: null,
			baselineShift: null,
			baseFrequency: null,
			baseProfile: null,
			bbox: null,
			begin: null,
			bias: R,
			by: null,
			calcMode: null,
			capHeight: R,
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
			descent: R,
			diffuseConstant: R,
			direction: null,
			display: null,
			dur: null,
			divisor: R,
			dominantBaseline: null,
			download: Q,
			dx: null,
			dy: null,
			edgeMode: null,
			editable: null,
			elevation: R,
			enableBackground: null,
			end: null,
			event: null,
			exponent: R,
			externalResourcesRequired: null,
			fill: null,
			fillOpacity: R,
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
			g1: Bt,
			g2: Bt,
			glyphName: Bt,
			glyphOrientationHorizontal: null,
			glyphOrientationVertical: null,
			glyphRef: null,
			gradientTransform: null,
			gradientUnits: null,
			handler: null,
			hanging: R,
			hatchContentUnits: null,
			hatchUnits: null,
			height: null,
			href: null,
			hrefLang: null,
			horizAdvX: R,
			horizOriginX: R,
			horizOriginY: R,
			id: null,
			ideographic: R,
			imageRendering: null,
			initialVisibility: null,
			in: null,
			in2: null,
			intercept: R,
			k: R,
			k1: R,
			k2: R,
			k3: R,
			k4: R,
			kernelMatrix: Me,
			kernelUnitLength: null,
			keyPoints: null,
			keySplines: null,
			keyTimes: null,
			kerning: null,
			lang: null,
			lengthAdjust: null,
			letterSpacing: null,
			lightingColor: null,
			limitingConeAngle: R,
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
			mediaSize: R,
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
			overlinePosition: R,
			overlineThickness: R,
			paintOrder: null,
			panose1: null,
			path: null,
			pathLength: R,
			patternContentUnits: null,
			patternTransform: null,
			patternUnits: null,
			phase: null,
			ping: ie,
			pitch: null,
			playbackOrder: null,
			pointerEvents: null,
			points: null,
			pointsAtX: R,
			pointsAtY: R,
			pointsAtZ: R,
			preserveAlpha: null,
			preserveAspectRatio: null,
			primitiveUnits: null,
			propagate: null,
			property: Me,
			r: null,
			radius: null,
			referrerPolicy: null,
			refX: null,
			refY: null,
			rel: Me,
			rev: Me,
			renderingIntent: null,
			repeatCount: null,
			repeatDur: null,
			requiredExtensions: Me,
			requiredFeatures: Me,
			requiredFonts: Me,
			requiredFormats: Me,
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
			specularConstant: R,
			specularExponent: R,
			spreadMethod: null,
			spacing: null,
			startOffset: null,
			stdDeviation: null,
			stemh: null,
			stemv: null,
			stitchTiles: null,
			stopColor: null,
			stopOpacity: null,
			strikethroughPosition: R,
			strikethroughThickness: R,
			string: null,
			stroke: null,
			strokeDashArray: Me,
			strokeDashOffset: null,
			strokeLineCap: null,
			strokeLineJoin: null,
			strokeMiterLimit: R,
			strokeOpacity: R,
			strokeWidth: null,
			style: null,
			surfaceScale: R,
			syncBehavior: null,
			syncBehaviorDefault: null,
			syncMaster: null,
			syncTolerance: null,
			syncToleranceDefault: null,
			systemLanguage: Me,
			tabIndex: R,
			tableValues: null,
			target: null,
			targetX: R,
			targetY: R,
			textAnchor: null,
			textDecoration: null,
			textRendering: null,
			textLength: null,
			timelineBegin: null,
			title: null,
			transformBehavior: null,
			type: null,
			typeOf: Me,
			to: null,
			transform: null,
			u1: null,
			u2: null,
			underlinePosition: R,
			underlineThickness: R,
			unicode: null,
			unicodeBidi: null,
			unicodeRange: null,
			unitsPerEm: R,
			values: null,
			vAlphabetic: R,
			vMathematical: R,
			vectorEffect: null,
			vHanging: R,
			vIdeographic: R,
			version: null,
			vertAdvY: R,
			vertOriginX: R,
			vertOriginY: R,
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
			xHeight: R,
			y: null,
			y1: null,
			y2: null,
			yChannelSelector: null,
			z: null,
			zoomAndPan: null
		}
	}),
	G0 = /^data[-\w.:]+$/i,
	Pa = /-[a-z]/g,
	Y0 = /[A-Z]/g;

function K0(e, t) {
	const n = eo(t);
	let r = t,
		i = Ve;
	if (n in e.normal) return e.property[e.normal[n]];
	if (n.length > 4 && n.slice(0, 4) === "data" && G0.test(t)) {
		if (t.charAt(4) === "-") {
			const o = t.slice(5).replace(Pa, J0);
			r = "data" + o.charAt(0).toUpperCase() + o.slice(1)
		} else {
			const o = t.slice(4);
			if (!Pa.test(o)) {
				let s = o.replace(Y0, Z0);
				s.charAt(0) !== "-" && (s = "-" + s), t = "data" + s
			}
		}
		i = Ao
	}
	return new i(r, t)
}

function Z0(e) {
	return "-" + e.toLowerCase()
}

function J0(e) {
	return e.charAt(1).toUpperCase()
}
const La = {
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
	ey = sc([uc, lc, dc, hc, Q0], "html"),
	ty = sc([uc, lc, dc, hc, X0], "svg"),
	pc = function(e) {
		if (e == null) return oy;
		if (typeof e == "string") return iy(e);
		if (typeof e == "object") return Array.isArray(e) ? ny(e) : ry(e);
		if (typeof e == "function") return Nr(e);
		throw new Error("Expected function, string, or object as test")
	};

function ny(e) {
	const t = [];
	let n = -1;
	for (; ++n < e.length;) t[n] = pc(e[n]);
	return Nr(r);

	function r(...i) {
		let o = -1;
		for (; ++o < t.length;)
			if (t[o].call(this, ...i)) return !0;
		return !1
	}
}

function ry(e) {
	return Nr(t);

	function t(n) {
		let r;
		for (r in e)
			if (n[r] !== e[r]) return !1;
		return !0
	}
}

function iy(e) {
	return Nr(t);

	function t(n) {
		return n && n.type === e
	}
}

function Nr(e) {
	return t;

	function t(...n) {
		return Boolean(e.call(this, ...n))
	}
}

function oy() {
	return !0
}
const sy = !0,
	ay = "skip",
	Da = !1,
	ly = function(e, t, n, r) {
		typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null);
		const i = pc(t),
			o = r ? -1 : 1;
		s(e, null, [])();

		function s(a, l, u) {
			const c = typeof a == "object" && a !== null ? a : {};
			let f;
			return typeof c.type == "string" && (f = typeof c.tagName == "string" ? c.tagName : typeof c.name == "string" ? c.name : void 0, Object.defineProperty(p, "name", {
				value: "node (" + (c.type + (f ? "<" + f + ">" : "")) + ")"
			})), p;

			function p() {
				let h = [],
					d, m, g;
				if ((!t || i(a, l, u[u.length - 1] || null)) && (h = uy(n(a, u)), h[0] === Da)) return h;
				if (a.children && h[0] !== ay)
					for (m = (r ? a.children.length : -1) + o, g = u.concat(a); m > -1 && m < a.children.length;) {
						if (d = s(a.children[m], m, g)(), d[0] === Da) return d;
						m = typeof d[1] == "number" ? d[1] : m + o
					}
				return h
			}
		}
	};

function uy(e) {
	return Array.isArray(e) ? e : typeof e == "number" ? [sy, e] : [e]
}
const cy = function(e, t, n, r) {
	typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null), ly(e, t, i, r);

	function i(o, s) {
		const a = s[s.length - 1];
		return n(o, a ? a.children.indexOf(o) : null, a)
	}
};

function fy(e) {
	if (e.allowedElements && e.disallowedElements) throw new TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");
	if (e.allowedElements || e.disallowedElements || e.allowElement) return t => {
		cy(t, "element", (n, r, i) => {
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
var Oo = Symbol.for("react.element"),
	Io = Symbol.for("react.portal"),
	jr = Symbol.for("react.fragment"),
	Br = Symbol.for("react.strict_mode"),
	Ur = Symbol.for("react.profiler"),
	Vr = Symbol.for("react.provider"),
	$r = Symbol.for("react.context"),
	dy = Symbol.for("react.server_context"),
	Hr = Symbol.for("react.forward_ref"),
	qr = Symbol.for("react.suspense"),
	Wr = Symbol.for("react.suspense_list"),
	Qr = Symbol.for("react.memo"),
	Xr = Symbol.for("react.lazy"),
	hy = Symbol.for("react.offscreen"),
	gc;
gc = Symbol.for("react.module.reference");

function $e(e) {
	if (typeof e == "object" && e !== null) {
		var t = e.$$typeof;
		switch (t) {
			case Oo:
				switch (e = e.type, e) {
					case jr:
					case Ur:
					case Br:
					case qr:
					case Wr:
						return e;
					default:
						switch (e = e && e.$$typeof, e) {
							case dy:
							case $r:
							case Hr:
							case Xr:
							case Qr:
							case Vr:
								return e;
							default:
								return t
						}
				}
				case Io:
					return t
		}
	}
}
J.ContextConsumer = $r;
J.ContextProvider = Vr;
J.Element = Oo;
J.ForwardRef = Hr;
J.Fragment = jr;
J.Lazy = Xr;
J.Memo = Qr;
J.Portal = Io;
J.Profiler = Ur;
J.StrictMode = Br;
J.Suspense = qr;
J.SuspenseList = Wr;
J.isAsyncMode = function() {
	return !1
};
J.isConcurrentMode = function() {
	return !1
};
J.isContextConsumer = function(e) {
	return $e(e) === $r
};
J.isContextProvider = function(e) {
	return $e(e) === Vr
};
J.isElement = function(e) {
	return typeof e == "object" && e !== null && e.$$typeof === Oo
};
J.isForwardRef = function(e) {
	return $e(e) === Hr
};
J.isFragment = function(e) {
	return $e(e) === jr
};
J.isLazy = function(e) {
	return $e(e) === Xr
};
J.isMemo = function(e) {
	return $e(e) === Qr
};
J.isPortal = function(e) {
	return $e(e) === Io
};
J.isProfiler = function(e) {
	return $e(e) === Ur
};
J.isStrictMode = function(e) {
	return $e(e) === Br
};
J.isSuspense = function(e) {
	return $e(e) === qr
};
J.isSuspenseList = function(e) {
	return $e(e) === Wr
};
J.isValidElementType = function(e) {
	return typeof e == "string" || typeof e == "function" || e === jr || e === Ur || e === Br || e === qr || e === Wr || e === hy || typeof e == "object" && e !== null && (e.$$typeof === Xr || e.$$typeof === Qr || e.$$typeof === Vr || e.$$typeof === $r || e.$$typeof === Hr || e.$$typeof === gc || e.getModuleId !== void 0)
};
J.typeOf = $e;
mc.exports = J;
var py = mc.exports;

function my(e) {
	var t = e && typeof e == "object" && e.type === "text" ? e.value || "" : e;
	return typeof t == "string" && t.replace(/[ \t\n\f\r]/g, "") === ""
}

function gy(e) {
	return e.join(" ").trim()
}

function yy(e, t) {
	var n = t || {};
	return e[e.length - 1] === "" && (e = e.concat("")), e.join((n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")).trim()
}
var Fa = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
	by = /\n/g,
	vy = /^\s*/,
	wy = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
	_y = /^:\s*/,
	xy = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
	ky = /^[;\s]*/,
	Cy = /^\s+|\s+$/g,
	Sy = `
`,
	za = "/",
	Na = "*",
	kt = "",
	Ey = "comment",
	Ty = "declaration",
	Ay = function(e, t) {
		if (typeof e != "string") throw new TypeError("First argument must be a string");
		if (!e) return [];
		t = t || {};
		var n = 1,
			r = 1;

		function i(d) {
			var m = d.match(by);
			m && (n += m.length);
			var g = d.lastIndexOf(Sy);
			r = ~g ? d.length - g : r + d.length
		}

		function o() {
			var d = {
				line: n,
				column: r
			};
			return function(m) {
				return m.position = new s(d), u(), m
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

		function u() {
			l(vy)
		}

		function c(d) {
			var m;
			for (d = d || []; m = f();) m !== !1 && d.push(m);
			return d
		}

		function f() {
			var d = o();
			if (!(za != e.charAt(0) || Na != e.charAt(1))) {
				for (var m = 2; kt != e.charAt(m) && (Na != e.charAt(m) || za != e.charAt(m + 1));) ++m;
				if (m += 2, kt === e.charAt(m - 1)) return a("End of comment missing");
				var g = e.slice(2, m - 2);
				return r += 2, i(g), e = e.slice(m), r += 2, d({
					type: Ey,
					comment: g
				})
			}
		}

		function p() {
			var d = o(),
				m = l(wy);
			if (!!m) {
				if (f(), !l(_y)) return a("property missing ':'");
				var g = l(xy),
					y = d({
						type: Ty,
						property: ja(m[0].replace(Fa, kt)),
						value: g ? ja(g[0].replace(Fa, kt)) : kt
					});
				return l(ky), y
			}
		}

		function h() {
			var d = [];
			c(d);
			for (var m; m = p();) m !== !1 && (d.push(m), c(d));
			return d
		}
		return u(), h()
	};

function ja(e) {
	return e ? e.replace(Cy, kt) : kt
}
var Oy = Ay;

function Iy(e, t) {
	var n = null;
	if (!e || typeof e != "string") return n;
	for (var r, i = Oy(e), o = typeof t == "function", s, a, l = 0, u = i.length; l < u; l++) r = i[l], s = r.property, a = r.value, o ? t(s, a, r) : a && (n || (n = {}), n[s] = a);
	return n
}
var Ry = Iy;
const no = {}.hasOwnProperty,
	My = new Set(["table", "thead", "tbody", "tfoot", "tr"]);

function yc(e, t) {
	const n = [];
	let r = -1,
		i;
	for (; ++r < t.children.length;) i = t.children[r], i.type === "element" ? n.push(Py(e, i, r, t)) : i.type === "text" ? (t.type !== "element" || !My.has(t.tagName) || !my(i)) && n.push(i.value) : i.type === "raw" && !e.options.skipHtml && n.push(i.value);
	return n
}

function Py(e, t, n, r) {
	const i = e.options,
		o = e.schema,
		s = t.tagName,
		a = {};
	let l = o,
		u;
	if (o.space === "html" && s === "svg" && (l = ty, e.schema = l), t.properties)
		for (u in t.properties) no.call(t.properties, u) && Dy(a, u, t.properties[u], e);
	(s === "ol" || s === "ul") && e.listDepth++;
	const c = yc(e, t);
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
		p = i.components && no.call(i.components, s) ? i.components[s] : s,
		h = typeof p == "string" || p === Ft.Fragment;
	if (!py.isValidElementType(p)) throw new TypeError(`Component for name \`${s}\` not defined or is not renderable`);
	if (a.key = [s, f.start.line, f.start.column, n].join("-"), s === "a" && i.linkTarget && (a.target = typeof i.linkTarget == "function" ? i.linkTarget(String(a.href || ""), t.children, typeof a.title == "string" ? a.title : null) : i.linkTarget), s === "a" && i.transformLinkUri && (a.href = i.transformLinkUri(String(a.href || ""), t.children, typeof a.title == "string" ? a.title : null)), !h && s === "code" && r.type === "element" && r.tagName !== "pre" && (a.inline = !0), !h && (s === "h1" || s === "h2" || s === "h3" || s === "h4" || s === "h5" || s === "h6") && (a.level = Number.parseInt(s.charAt(1), 10)), s === "img" && i.transformImageUri && (a.src = i.transformImageUri(String(a.src || ""), String(a.alt || ""), typeof a.title == "string" ? a.title : null)), !h && s === "li" && r.type === "element") {
		const d = Ly(t);
		a.checked = d && d.properties ? Boolean(d.properties.checked) : null, a.index = yi(r, t), a.ordered = r.tagName === "ol"
	}
	return !h && (s === "ol" || s === "ul") && (a.ordered = s === "ol", a.depth = e.listDepth), (s === "td" || s === "th") && (a.align && (a.style || (a.style = {}), a.style.textAlign = a.align, delete a.align), h || (a.isHeader = s === "th")), !h && s === "tr" && r.type === "element" && (a.isHeader = Boolean(r.tagName === "thead")), i.sourcePos && (a["data-sourcepos"] = Ny(f)), !h && i.rawSourcePos && (a.sourcePosition = t.position), !h && i.includeElementIndex && (a.index = yi(r, t), a.siblingCount = yi(r)), h || (a.node = t), c.length > 0 ? Ft.createElement(p, a, c) : Ft.createElement(p, a)
}

function Ly(e) {
	let t = -1;
	for (; ++t < e.children.length;) {
		const n = e.children[t];
		if (n.type === "element" && n.tagName === "input") return n
	}
	return null
}

function yi(e, t) {
	let n = -1,
		r = 0;
	for (; ++n < e.children.length && e.children[n] !== t;) e.children[n].type === "element" && r++;
	return r
}

function Dy(e, t, n, r) {
	const i = K0(r.schema, t);
	let o = n;
	o == null || o !== o || (Array.isArray(o) && (o = i.commaSeparated ? yy(o) : gy(o)), i.property === "style" && typeof o == "string" && (o = Fy(o)), i.space && i.property ? e[no.call(La, i.property) ? La[i.property] : i.property] = o : i.attribute && (e[i.attribute] = o))
}

function Fy(e) {
	const t = {};
	try {
		Ry(e, n)
	} catch {}
	return t;

	function n(r, i) {
		const o = r.slice(0, 4) === "-ms-" ? `ms-${r.slice(4)}` : r;
		t[o.replace(/-([a-z])/g, zy)] = i
	}
}

function zy(e, t) {
	return t.toUpperCase()
}

function Ny(e) {
	return [e.start.line, ":", e.start.column, "-", e.end.line, ":", e.end.column].map(t => String(t)).join("")
}
const Ba = {}.hasOwnProperty,
	jy = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md",
	Qn = {
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

function Ro(e) {
	for (const o in Qn)
		if (Ba.call(Qn, o) && Ba.call(e, o)) {
			const s = Qn[o];
			console.warn(`[react-markdown] Warning: please ${s.to?`use \`${s.to}\` instead of`:"remove"} \`${o}\` (see <${jy}#${s.id}> for more info)`), delete Qn[o]
		} const t = Xp().use(Qg).use(e.remarkPlugins || []).use(N0, {
			...e.remarkRehypeOptions,
			allowDangerousHtml: !0
		}).use(e.rehypePlugins || []).use(fy, e),
		n = new Au;
	typeof e.children == "string" ? n.value = e.children : e.children !== void 0 && e.children !== null && console.warn(`[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`);
	const r = t.runSync(t.parse(n), n);
	if (r.type !== "root") throw new TypeError("Expected a `root` node");
	let i = Ft.createElement(Ft.Fragment, {}, yc({
		options: e,
		schema: ey,
		listDepth: 0
	}, r));
	return e.className && (i = Ft.createElement("div", {
		className: e.className
	}, i)), i
}
Ro.defaultProps = {
	transformLinkUri: Lp
};
Ro.propTypes = {
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
const By = {
		tokenize: qy,
		partial: !0
	},
	bc = {
		tokenize: Wy,
		partial: !0
	},
	vc = {
		tokenize: Qy,
		partial: !0
	},
	Ut = {
		tokenize: Gy,
		partial: !0
	},
	wc = {
		tokenize: Xy,
		partial: !0
	},
	_c = {
		tokenize: $y,
		previous: Cc
	},
	xc = {
		tokenize: Hy,
		previous: Po
	},
	dt = {
		tokenize: Vy,
		previous: Sc
	},
	ot = {},
	Uy = {
		text: ot
	};
let _t = 48;
for (; _t < 123;) ot[_t] = dt, _t++, _t === 58 ? _t = 65 : _t === 91 && (_t = 97);
ot[43] = dt;
ot[45] = dt;
ot[46] = dt;
ot[95] = dt;
ot[72] = [dt, xc];
ot[104] = [dt, xc];
ot[87] = [dt, _c];
ot[119] = [dt, _c];

function Vy(e, t, n) {
	const r = this;
	let i, o;
	return s;

	function s(h) {
		return !Ua(h) || !Sc(r.previous) || Lo(r.events) ? n(h) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), a(h))
	}

	function a(h) {
		return Ua(h) ? (e.consume(h), a) : h === 64 ? (e.consume(h), l) : n(h)
	}

	function l(h) {
		return h === 46 ? e.check(Ut, p, u)(h) : h === 45 || h === 95 ? e.check(Ut, n, c)(h) : Se(h) ? (!o && yr(h) && (o = !0), e.consume(h), l) : p(h)
	}

	function u(h) {
		return e.consume(h), i = !0, o = void 0, l
	}

	function c(h) {
		return e.consume(h), f
	}

	function f(h) {
		return h === 46 ? e.check(Ut, n, u)(h) : l(h)
	}

	function p(h) {
		return i && !o ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(h)) : n(h)
	}
}

function $y(e, t, n) {
	const r = this;
	return i;

	function i(s) {
		return s !== 87 && s !== 119 || !Cc(r.previous) || Lo(r.events) ? n(s) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(By, e.attempt(bc, e.attempt(vc, o), n), n)(s))
	}

	function o(s) {
		return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(s)
	}
}

function Hy(e, t, n) {
	const r = this;
	return i;

	function i(d) {
		return d !== 72 && d !== 104 || !Po(r.previous) || Lo(r.events) ? n(d) : (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), e.consume(d), o)
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
		return d === 83 || d === 115 ? (e.consume(d), u) : u(d)
	}

	function u(d) {
		return d === 58 ? (e.consume(d), c) : n(d)
	}

	function c(d) {
		return d === 47 ? (e.consume(d), f) : n(d)
	}

	function f(d) {
		return d === 47 ? (e.consume(d), p) : n(d)
	}

	function p(d) {
		return d === null || In(d) || Mr(d) || Pr(d) ? n(d) : e.attempt(bc, e.attempt(vc, h), n)(d)
	}

	function h(d) {
		return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(d)
	}
}

function qy(e, t, n) {
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

function Wy(e, t, n) {
	let r, i;
	return o;

	function o(l) {
		return l === 38 ? e.check(wc, a, s)(l) : l === 46 || l === 95 ? e.check(Ut, a, s)(l) : l === null || In(l) || Mr(l) || l !== 45 && Pr(l) ? a(l) : (e.consume(l), o)
	}

	function s(l) {
		return l === 46 ? (i = r, r = void 0, e.consume(l), o) : (l === 95 && (r = !0), e.consume(l), o)
	}

	function a(l) {
		return !i && !r ? t(l) : n(l)
	}
}

function Qy(e, t) {
	let n = 0;
	return r;

	function r(s) {
		return s === 38 ? e.check(wc, t, i)(s) : (s === 40 && n++, s === 41 ? e.check(Ut, o, i)(s) : Mo(s) ? t(s) : kc(s) ? e.check(Ut, t, i)(s) : (e.consume(s), r))
	}

	function i(s) {
		return e.consume(s), r
	}

	function o(s) {
		return n--, n < 0 ? t(s) : i(s)
	}
}

function Xy(e, t, n) {
	return r;

	function r(s) {
		return e.consume(s), i
	}

	function i(s) {
		return je(s) ? (e.consume(s), i) : s === 59 ? (e.consume(s), o) : n(s)
	}

	function o(s) {
		return Mo(s) ? t(s) : n(s)
	}
}

function Gy(e, t, n) {
	return r;

	function r(o) {
		return e.consume(o), i
	}

	function i(o) {
		return kc(o) ? (e.consume(o), i) : Mo(o) ? t(o) : n(o)
	}
}

function kc(e) {
	return e === 33 || e === 34 || e === 39 || e === 41 || e === 42 || e === 44 || e === 46 || e === 58 || e === 59 || e === 60 || e === 63 || e === 95 || e === 126
}

function Mo(e) {
	return e === null || e === 60 || ue(e)
}

function Ua(e) {
	return e === 43 || e === 45 || e === 46 || e === 95 || Se(e)
}

function Cc(e) {
	return e === null || e === 40 || e === 42 || e === 95 || e === 126 || ue(e)
}

function Po(e) {
	return e === null || !je(e)
}

function Sc(e) {
	return e !== 47 && Po(e)
}

function Lo(e) {
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
const Yy = {
	tokenize: ib,
	partial: !0
};

function Ky() {
	return {
		document: {
			[91]: {
				tokenize: tb,
				continuation: {
					tokenize: nb
				},
				exit: rb
			}
		},
		text: {
			[91]: {
				tokenize: eb
			},
			[93]: {
				add: "after",
				tokenize: Zy,
				resolveTo: Jy
			}
		}
	}
}

function Zy(e, t, n) {
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
		const u = Qe(r.sliceSerialize({
			start: s.end,
			end: r.now()
		}));
		return u.charCodeAt(0) !== 94 || !o.includes(u.slice(1)) ? n(l) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(l), e.exit("gfmFootnoteCallLabelMarker"), t(l))
	}
}

function Jy(e, t) {
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

function eb(e, t, n) {
	const r = this,
		i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
	let o = 0,
		s;
	return a;

	function a(p) {
		return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(p), e.exit("gfmFootnoteCallLabelMarker"), l
	}

	function l(p) {
		return p !== 94 ? n(p) : (e.enter("gfmFootnoteCallMarker"), e.consume(p), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", u)
	}

	function u(p) {
		let h;
		return p === null || p === 91 || o++ > 999 ? n(p) : p === 93 ? s ? (e.exit("chunkString"), h = e.exit("gfmFootnoteCallString"), i.includes(Qe(r.sliceSerialize(h))) ? f(p) : n(p)) : n(p) : (e.consume(p), ue(p) || (s = !0), p === 92 ? c : u)
	}

	function c(p) {
		return p === 91 || p === 92 || p === 93 ? (e.consume(p), o++, u) : u(p)
	}

	function f(p) {
		return e.enter("gfmFootnoteCallLabelMarker"), e.consume(p), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t
	}
}

function tb(e, t, n) {
	const r = this,
		i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
	let o, s = 0,
		a;
	return l;

	function l(m) {
		return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionLabelMarker"), u
	}

	function u(m) {
		return m === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), c) : n(m)
	}

	function c(m) {
		let g;
		return m === null || m === 91 || s > 999 ? n(m) : m === 93 ? a ? (g = e.exit("gfmFootnoteDefinitionLabelString"), o = Qe(r.sliceSerialize(g)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), h) : n(m) : U(m) ? (e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), s++, c) : (e.enter("chunkString").contentType = "string", f(m))
	}

	function f(m) {
		return m === null || U(m) || m === 91 || m === 93 || s > 999 ? (e.exit("chunkString"), c(m)) : (ue(m) || (a = !0), s++, e.consume(m), m === 92 ? p : f)
	}

	function p(m) {
		return m === 91 || m === 92 || m === 93 ? (e.consume(m), s++, f) : f(m)
	}

	function h(m) {
		return m === 58 ? (e.enter("definitionMarker"), e.consume(m), e.exit("definitionMarker"), X(e, d, "gfmFootnoteDefinitionWhitespace")) : n(m)
	}

	function d(m) {
		return i.includes(o) || i.push(o), t(m)
	}
}

function nb(e, t, n) {
	return e.check(Nn, t, e.attempt(Yy, t, n))
}

function rb(e) {
	e.exit("gfmFootnoteDefinition")
}

function ib(e, t, n) {
	const r = this;
	return X(e, i, "gfmFootnoteDefinitionIndent", 4 + 1);

	function i(o) {
		const s = r.events[r.events.length - 1];
		return s && s[1].type === "gfmFootnoteDefinitionIndent" && s[2].sliceSerialize(s[1], !0).length === 4 ? t(o) : n(o)
	}
}

function ob(e = {}) {
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
						const u = {
								type: "strikethrough",
								start: Object.assign({}, o[l][1].start),
								end: Object.assign({}, o[a][1].end)
							},
							c = {
								type: "strikethroughText",
								start: Object.assign({}, o[l][1].end),
								end: Object.assign({}, o[a][1].start)
							},
							f = [
								["enter", u, s],
								["enter", o[l][1], s],
								["exit", o[l][1], s],
								["enter", c, s]
							];
						Pe(f, f.length, 0, Lr(s.parser.constructs.insideSpan.null, o.slice(l + 1, a), s)), Pe(f, f.length, 0, [
							["exit", c, s],
							["enter", o[a][1], s],
							["exit", o[a][1], s],
							["exit", u, s]
						]), Pe(o, l - 1, a - l + 3, f), a = l + f.length - 2;
						break
					}
			} for (a = -1; ++a < o.length;) o[a][1].type === "strikethroughSequenceTemporary" && (o[a][1].type = "data");
		return o
	}

	function i(o, s, a) {
		const l = this.previous,
			u = this.events;
		let c = 0;
		return f;

		function f(h) {
			return l === 126 && u[u.length - 1][1].type !== "characterEscape" ? a(h) : (o.enter("strikethroughSequenceTemporary"), p(h))
		}

		function p(h) {
			const d = br(l);
			if (h === 126) return c > 1 ? a(h) : (o.consume(h), c++, p);
			if (c < 2 && !t) return a(h);
			const m = o.exit("strikethroughSequenceTemporary"),
				g = br(h);
			return m._open = !g || g === 2 && Boolean(d), m._close = !d || d === 2 && Boolean(g), s(h)
		}
	}
}
const sb = {
		flow: {
			null: {
				tokenize: lb,
				resolve: ab
			}
		}
	},
	Va = {
		tokenize: ub,
		partial: !0
	};

function ab(e, t) {
	let n = -1,
		r, i, o, s, a, l, u;
	for (; ++n < e.length;) {
		const c = e[n][1];
		if (o && (c.type === "temporaryTableCellContent" && (s = s || n, a = n), (c.type === "tableCellDivider" || c.type === "tableRow") && a)) {
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
		if (e[n][0] === "exit" && l !== void 0 && l + (u ? 0 : 1) < n && (c.type === "tableCellDivider" || c.type === "tableRow" && (l + 3 < n || e[l][1].type !== "whitespace"))) {
			const f = {
				type: i ? "tableDelimiter" : r ? "tableHeader" : "tableData",
				start: e[l][1].start,
				end: e[n][1].end
			};
			e.splice(n + (c.type === "tableCellDivider" ? 1 : 0), 0, ["exit", f, t]), e.splice(l, 0, ["enter", f, t]), n += 2, l = n + 1, u = !0
		}
		c.type === "tableRow" && (o = e[n][0] === "enter", o && (l = n + 1, u = !1)), c.type === "tableDelimiterRow" && (i = e[n][0] === "enter", i && (l = n + 1, u = !1)), c.type === "tableHead" && (r = e[n][0] === "enter")
	}
	return e
}

function lb(e, t, n) {
	const r = this,
		i = [];
	let o = 0,
		s, a;
	return l;

	function l(x) {
		return e.enter("table")._align = i, e.enter("tableHead"), e.enter("tableRow"), x === 124 ? u(x) : (o++, e.enter("temporaryTableCellContent"), p(x))
	}

	function u(x) {
		return e.enter("tableCellDivider"), e.consume(x), e.exit("tableCellDivider"), s = !0, c
	}

	function c(x) {
		return x === null || U(x) ? d(x) : te(x) ? (e.enter("whitespace"), e.consume(x), f) : (s && (s = void 0, o++), x === 124 ? u(x) : (e.enter("temporaryTableCellContent"), p(x)))
	}

	function f(x) {
		return te(x) ? (e.consume(x), f) : (e.exit("whitespace"), c(x))
	}

	function p(x) {
		return x === null || x === 124 || ue(x) ? (e.exit("temporaryTableCellContent"), c(x)) : (e.consume(x), x === 92 ? h : p)
	}

	function h(x) {
		return x === 92 || x === 124 ? (e.consume(x), p) : p(x)
	}

	function d(x) {
		if (x === null) return n(x);
		e.exit("tableRow"), e.exit("tableHead");
		const G = r.interrupt;
		return r.interrupt = !0, e.attempt({
			tokenize: N,
			partial: !0
		}, function($) {
			return r.interrupt = G, e.enter("tableDelimiterRow"), m($)
		}, function($) {
			return r.interrupt = G, n($)
		})(x)
	}

	function m(x) {
		return x === null || U(x) ? C(x) : te(x) ? (e.enter("whitespace"), e.consume(x), g) : x === 45 ? (e.enter("tableDelimiterFiller"), e.consume(x), a = !0, i.push("none"), y) : x === 58 ? (e.enter("tableDelimiterAlignment"), e.consume(x), e.exit("tableDelimiterAlignment"), i.push("left"), k) : x === 124 ? (e.enter("tableCellDivider"), e.consume(x), e.exit("tableCellDivider"), m) : n(x)
	}

	function g(x) {
		return te(x) ? (e.consume(x), g) : (e.exit("whitespace"), m(x))
	}

	function y(x) {
		return x === 45 ? (e.consume(x), y) : (e.exit("tableDelimiterFiller"), x === 58 ? (e.enter("tableDelimiterAlignment"), e.consume(x), e.exit("tableDelimiterAlignment"), i[i.length - 1] = i[i.length - 1] === "left" ? "center" : "right", _) : m(x))
	}

	function k(x) {
		return x === 45 ? (e.enter("tableDelimiterFiller"), e.consume(x), a = !0, y) : n(x)
	}

	function _(x) {
		return x === null || U(x) ? C(x) : te(x) ? (e.enter("whitespace"), e.consume(x), g) : x === 124 ? (e.enter("tableCellDivider"), e.consume(x), e.exit("tableCellDivider"), m) : n(x)
	}

	function C(x) {
		return e.exit("tableDelimiterRow"), !a || o !== i.length ? n(x) : x === null ? S(x) : e.check(Va, S, e.attempt({
			tokenize: N,
			partial: !0
		}, X(e, b, "linePrefix", 4), S))(x)
	}

	function S(x) {
		return e.exit("table"), t(x)
	}

	function b(x) {
		return e.enter("tableBody"), T(x)
	}

	function T(x) {
		return e.enter("tableRow"), x === 124 ? M(x) : (e.enter("temporaryTableCellContent"), A(x))
	}

	function M(x) {
		return e.enter("tableCellDivider"), e.consume(x), e.exit("tableCellDivider"), F
	}

	function F(x) {
		return x === null || U(x) ? B(x) : te(x) ? (e.enter("whitespace"), e.consume(x), z) : x === 124 ? M(x) : (e.enter("temporaryTableCellContent"), A(x))
	}

	function z(x) {
		return te(x) ? (e.consume(x), z) : (e.exit("whitespace"), F(x))
	}

	function A(x) {
		return x === null || x === 124 || ue(x) ? (e.exit("temporaryTableCellContent"), F(x)) : (e.consume(x), x === 92 ? D : A)
	}

	function D(x) {
		return x === 92 || x === 124 ? (e.consume(x), A) : A(x)
	}

	function B(x) {
		return e.exit("tableRow"), x === null ? L(x) : e.check(Va, L, e.attempt({
			tokenize: N,
			partial: !0
		}, X(e, T, "linePrefix", 4), L))(x)
	}

	function L(x) {
		return e.exit("tableBody"), S(x)
	}

	function N(x, G, $) {
		return Z;

		function Z(w) {
			return x.enter("lineEnding"), x.consume(w), x.exit("lineEnding"), X(x, K, "linePrefix")
		}

		function K(w) {
			if (r.parser.lazy[r.now().line] || w === null || U(w)) return $(w);
			const v = r.events[r.events.length - 1];
			return !r.parser.constructs.disable.null.includes("codeIndented") && v && v[1].type === "linePrefix" && v[2].sliceSerialize(v[1], !0).length >= 4 ? $(w) : (r._gfmTableDynamicInterruptHack = !0, x.check(r.parser.constructs.flow, function(Le) {
				return r._gfmTableDynamicInterruptHack = !1, $(Le)
			}, function(Le) {
				return r._gfmTableDynamicInterruptHack = !1, G(Le)
			})(w))
		}
	}
}

function ub(e, t, n) {
	let r = 0;
	return i;

	function i(s) {
		return e.enter("check"), e.consume(s), o
	}

	function o(s) {
		return s === -1 || s === 32 ? (e.consume(s), r++, r === 4 ? t : o) : s === null || ue(s) ? t(s) : n(s)
	}
}
const cb = {
		tokenize: db
	},
	fb = {
		text: {
			[91]: cb
		}
	};

function db(e, t, n) {
	const r = this;
	return i;

	function i(a) {
		return r.previous !== null || !r._gfmTasklistFirstContentOfListItem ? n(a) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(a), e.exit("taskListCheckMarker"), o)
	}

	function o(a) {
		return ue(a) ? (e.enter("taskListCheckValueUnchecked"), e.consume(a), e.exit("taskListCheckValueUnchecked"), s) : a === 88 || a === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(a), e.exit("taskListCheckValueChecked"), s) : n(a)
	}

	function s(a) {
		return a === 93 ? (e.enter("taskListCheckMarker"), e.consume(a), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), e.check({
			tokenize: hb
		}, t, n)) : n(a)
	}
}

function hb(e, t, n) {
	const r = this;
	return X(e, i, "whitespace");

	function i(o) {
		const s = r.events[r.events.length - 1];
		return (s && s[1].type === "whitespace" || U(o)) && o !== null ? t(o) : n(o)
	}
}

function pb(e) {
	return Pu([Uy, Ky(), ob(e), sb, fb])
}

function $a(e, t) {
	const n = String(e);
	if (typeof t != "string") throw new TypeError("Expected character");
	let r = 0,
		i = n.indexOf(t);
	for (; i !== -1;) r++, i = n.indexOf(t, i + t.length);
	return r
}

function mb(e) {
	if (typeof e != "string") throw new TypeError("Expected a string");
	return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")
}
const Do = function(e) {
	if (e == null) return vb;
	if (typeof e == "string") return bb(e);
	if (typeof e == "object") return Array.isArray(e) ? gb(e) : yb(e);
	if (typeof e == "function") return Gr(e);
	throw new Error("Expected function, string, or object as test")
};

function gb(e) {
	const t = [];
	let n = -1;
	for (; ++n < e.length;) t[n] = Do(e[n]);
	return Gr(r);

	function r(...i) {
		let o = -1;
		for (; ++o < t.length;)
			if (t[o].call(this, ...i)) return !0;
		return !1
	}
}

function yb(e) {
	return Gr(t);

	function t(n) {
		let r;
		for (r in e)
			if (n[r] !== e[r]) return !1;
		return !0
	}
}

function bb(e) {
	return Gr(t);

	function t(n) {
		return n && n.type === e
	}
}

function Gr(e) {
	return t;

	function t(...n) {
		return Boolean(e.call(this, ...n))
	}
}

function vb() {
	return !0
}
const wb = !0,
	_b = "skip",
	Ha = !1,
	xb = function(e, t, n, r) {
		typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null);
		const i = Do(t),
			o = r ? -1 : 1;
		s(e, null, [])();

		function s(a, l, u) {
			const c = typeof a == "object" && a !== null ? a : {};
			let f;
			return typeof c.type == "string" && (f = typeof c.tagName == "string" ? c.tagName : typeof c.name == "string" ? c.name : void 0, Object.defineProperty(p, "name", {
				value: "node (" + (c.type + (f ? "<" + f + ">" : "")) + ")"
			})), p;

			function p() {
				let h = [],
					d, m, g;
				if ((!t || i(a, l, u[u.length - 1] || null)) && (h = kb(n(a, u)), h[0] === Ha)) return h;
				if (a.children && h[0] !== _b)
					for (m = (r ? a.children.length : -1) + o, g = u.concat(a); m > -1 && m < a.children.length;) {
						if (d = s(a.children[m], m, g)(), d[0] === Ha) return d;
						m = typeof d[1] == "number" ? d[1] : m + o
					}
				return h
			}
		}
	};

function kb(e) {
	return Array.isArray(e) ? e : typeof e == "number" ? [wb, e] : [e]
}
const Cb = {}.hasOwnProperty,
	Sb = function(e, t, n, r) {
		let i, o;
		typeof t == "string" || t instanceof RegExp ? (o = [
			[t, n]
		], i = r) : (o = t, i = n), i || (i = {});
		const s = Do(i.ignore || []),
			a = Eb(o);
		let l = -1;
		for (; ++l < a.length;) xb(e, "text", u);
		return e;

		function u(f, p) {
			let h = -1,
				d;
			for (; ++h < p.length;) {
				const m = p[h];
				if (s(m, d ? d.children.indexOf(m) : void 0, d)) return;
				d = m
			}
			if (d) return c(f, p)
		}

		function c(f, p) {
			const h = p[p.length - 1],
				d = a[l][0],
				m = a[l][1];
			let g = 0;
			const y = h.children.indexOf(f);
			let k = !1,
				_ = [],
				C;
			d.lastIndex = 0;
			let S = d.exec(f.value);
			for (; S;) {
				C = S.index;
				const b = {
					index: S.index,
					input: S.input,
					stack: [...p, f]
				};
				let T = m(...S, b);
				if (typeof T == "string" && (T = T.length > 0 ? {
						type: "text",
						value: T
					} : void 0), T !== !1 && (g !== C && _.push({
						type: "text",
						value: f.value.slice(g, C)
					}), Array.isArray(T) ? _.push(...T) : T && _.push(T), g = C + S[0].length, k = !0), !d.global) break;
				S = d.exec(f.value)
			}
			return k ? (g < f.value.length && _.push({
				type: "text",
				value: f.value.slice(g)
			}), h.children.splice(y, 1, ..._)) : _ = [f], y + _.length
		}
	};

function Eb(e) {
	const t = [];
	if (typeof e != "object") throw new TypeError("Expected array or object as schema");
	if (Array.isArray(e)) {
		let n = -1;
		for (; ++n < e.length;) t.push([qa(e[n][0]), Wa(e[n][1])])
	} else {
		let n;
		for (n in e) Cb.call(e, n) && t.push([qa(n), Wa(e[n])])
	}
	return t
}

function qa(e) {
	return typeof e == "string" ? new RegExp(mb(e), "g") : e
}

function Wa(e) {
	return typeof e == "function" ? e : () => e
}
const bi = "phrasing",
	vi = ["autolink", "link", "image", "label"],
	Tb = {
		transforms: [Lb],
		enter: {
			literalAutolink: Ob,
			literalAutolinkEmail: wi,
			literalAutolinkHttp: wi,
			literalAutolinkWww: wi
		},
		exit: {
			literalAutolink: Pb,
			literalAutolinkEmail: Mb,
			literalAutolinkHttp: Ib,
			literalAutolinkWww: Rb
		}
	},
	Ab = {
		unsafe: [{
			character: "@",
			before: "[+\\-.\\w]",
			after: "[\\-.\\w]",
			inConstruct: bi,
			notInConstruct: vi
		}, {
			character: ".",
			before: "[Ww]",
			after: "[\\-.\\w]",
			inConstruct: bi,
			notInConstruct: vi
		}, {
			character: ":",
			before: "[ps]",
			after: "\\/",
			inConstruct: bi,
			notInConstruct: vi
		}]
	};

function Ob(e) {
	this.enter({
		type: "link",
		title: null,
		url: "",
		children: []
	}, e)
}

function wi(e) {
	this.config.enter.autolinkProtocol.call(this, e)
}

function Ib(e) {
	this.config.exit.autolinkProtocol.call(this, e)
}

function Rb(e) {
	this.config.exit.data.call(this, e);
	const t = this.stack[this.stack.length - 1];
	t.url = "http://" + this.sliceSerialize(e)
}

function Mb(e) {
	this.config.exit.autolinkEmail.call(this, e)
}

function Pb(e) {
	this.exit(e)
}

function Lb(e) {
	Sb(e, [
		[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, Db],
		[/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, Fb]
	], {
		ignore: ["link", "linkReference"]
	})
}

function Db(e, t, n, r, i) {
	let o = "";
	if (!Ec(i) || (/^w/i.test(t) && (n = t + n, t = "", o = "http://"), !zb(n))) return !1;
	const s = Nb(n + r);
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

function Fb(e, t, n, r) {
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

function zb(e) {
	const t = e.split(".");
	return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])))
}

function Nb(e) {
	const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
	let n, r, i, o;
	if (t)
		for (e = e.slice(0, t.index), o = t[0], n = o.indexOf(")"), r = $a(e, "("), i = $a(e, ")"); n !== -1 && r > i;) e += o.slice(0, n + 1), o = o.slice(n + 1), n = o.indexOf(")"), i++;
	return [e, o]
}

function Ec(e, t) {
	const n = e.input.charCodeAt(e.index - 1);
	return (e.index === 0 || Mr(n) || Pr(n)) && (!t || n !== 47)
}

function Qa(e) {
	return e.label || !e.identifier ? e.label || "" : Hu(e.identifier)
}

function bt(e) {
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

	function a(u) {
		r += u
	}

	function l(u = "") {
		const c = u.split(/\r?\n|\r/g),
			f = c[c.length - 1];
		return i += c.length - 1, o = c.length === 1 ? o + f.length : 1 + f.length + r, u
	}
}

function Tc(e, t, n) {
	const r = t.indexStack,
		i = e.children || [],
		o = bt(n),
		s = [];
	let a = -1;
	for (r.push(-1); ++a < i.length;) {
		const u = i[a];
		r[r.length - 1] = a, s.push(o.move(t.handle(u, e, t, {
			before: `
`,
			after: `
`,
			...o.current()
		}))), u.type !== "list" && (t.bulletLastUsed = void 0), a < i.length - 1 && s.push(o.move(l(u, i[a + 1])))
	}
	return r.pop(), s.join("");

	function l(u, c) {
		let f = t.join.length;
		for (; f--;) {
			const p = t.join[f](u, c, e, t);
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
const jb = /\r?\n|\r/g;

function Ac(e, t) {
	const n = [];
	let r = 0,
		i = 0,
		o;
	for (; o = jb.exec(e);) s(e.slice(r, o.index)), n.push(o[0]), r = o.index + o[0].length, i++;
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

function Bb(e, t) {
	return Xa(e, t.inConstruct, !0) && !Xa(e, t.notInConstruct, !1)
}

function Xa(e, t, n) {
	if (!t) return n;
	typeof t == "string" && (t = [t]);
	let r = -1;
	for (; ++r < t.length;)
		if (e.includes(t[r])) return !0;
	return !1
}

function Ga(e, t, n) {
	const r = (n.before || "") + (t || "") + (n.after || ""),
		i = [],
		o = [],
		s = {};
	let a = -1;
	for (; ++a < e.unsafe.length;) {
		const c = e.unsafe[a];
		if (!Bb(e.stack, c)) continue;
		const f = Oc(c);
		let p;
		for (; p = f.exec(r);) {
			const h = "before" in c || Boolean(c.atBreak),
				d = "after" in c,
				m = p.index + (h ? p[1].length : 0);
			i.includes(m) ? (s[m].before && !h && (s[m].before = !1), s[m].after && !d && (s[m].after = !1)) : (i.push(m), s[m] = {
				before: h,
				after: d
			})
		}
	}
	i.sort(Ub);
	let l = n.before ? n.before.length : 0;
	const u = r.length - (n.after ? n.after.length : 0);
	for (a = -1; ++a < i.length;) {
		const c = i[a];
		c < l || c >= u || c + 1 < u && i[a + 1] === c + 1 && s[c].after && !s[c + 1].before && !s[c + 1].after || i[a - 1] === c - 1 && s[c].before && !s[c - 1].before && !s[c - 1].after || (l !== c && o.push(Ya(r.slice(l, c), "\\")), l = c, /[!-/:-@[-`{-~]/.test(r.charAt(c)) && (!n.encode || !n.encode.includes(r.charAt(c))) ? o.push("\\") : (o.push("&#x" + r.charCodeAt(c).toString(16).toUpperCase() + ";"), l++))
	}
	return o.push(Ya(r.slice(l, u), n.after)), o.join("")
}

function Ub(e, t) {
	return e - t
}

function Ya(e, t) {
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

function Vb() {
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
		const u = this.resume(),
			c = this.stack[this.stack.length - 1];
		c.label = u, c.identifier = Qe(this.sliceSerialize(l)).toLowerCase()
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
		const u = this.resume(),
			c = this.stack[this.stack.length - 1];
		c.label = u, c.identifier = Qe(this.sliceSerialize(l)).toLowerCase()
	}

	function a(l) {
		this.exit(l)
	}
}

function $b() {
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
		const a = bt(s);
		let l = a.move("[^");
		const u = o.enter("footnoteReference"),
			c = o.enter("reference");
		return l += a.move(Ga(o, Qa(r), {
			...a.current(),
			before: l,
			after: "]"
		})), c(), u(), l += a.move("]"), l
	}

	function t() {
		return "["
	}

	function n(r, i, o, s) {
		const a = bt(s);
		let l = a.move("[^");
		const u = o.enter("footnoteDefinition"),
			c = o.enter("label");
		return l += a.move(Ga(o, Qa(r), {
			...a.current(),
			before: l,
			after: "]"
		})), c(), l += a.move("]:" + (r.children && r.children.length > 0 ? " " : "")), a.shift(4), l += a.move(Ac(Tc(r, o, a.current()), f)), u(), l;

		function f(p, h, d) {
			return h ? (d ? "" : "    ") + p : p
		}
	}
}

function Ic(e, t, n) {
	const r = t.indexStack,
		i = e.children || [],
		o = [];
	let s = -1,
		a = n.before;
	r.push(-1);
	let l = bt(n);
	for (; ++s < i.length;) {
		const u = i[s];
		let c;
		if (r[r.length - 1] = s, s + 1 < i.length) {
			let f = t.handle.handlers[i[s + 1].type];
			f && f.peek && (f = f.peek), c = f ? f(i[s + 1], e, t, {
				before: "",
				after: "",
				...l.current()
			}).charAt(0) : ""
		} else c = n.after;
		o.length > 0 && (a === "\r" || a === `
`) && u.type === "html" && (o[o.length - 1] = o[o.length - 1].replace(/(\r?\n|\r)$/, " "), a = " ", l = bt(n), l.move(o.join(""))), o.push(l.move(t.handle(u, e, t, {
			...l.current(),
			before: a,
			after: c
		}))), a = o[o.length - 1].slice(-1)
	}
	return r.pop(), o.join("")
}
const Hb = {
		canContainEols: ["delete"],
		enter: {
			strikethrough: Wb
		},
		exit: {
			strikethrough: Qb
		}
	},
	qb = {
		unsafe: [{
			character: "~",
			inConstruct: "phrasing"
		}],
		handlers: {
			delete: Rc
		}
	};
Rc.peek = Xb;

function Wb(e) {
	this.enter({
		type: "delete",
		children: []
	}, e)
}

function Qb(e) {
	this.exit(e)
}

function Rc(e, t, n, r) {
	const i = bt(r),
		o = n.enter("emphasis");
	let s = i.move("~~");
	return s += Ic(e, n, {
		...i.current(),
		before: s,
		after: "~"
	}), s += i.move("~~"), o(), s
}

function Xb() {
	return "~"
}
Mc.peek = Gb;

function Mc(e, t, n) {
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
				let u = l.index;
				r.charCodeAt(u) === 10 && r.charCodeAt(u - 1) === 13 && u--, r = r.slice(0, u) + " " + r.slice(l.index + 1)
			}
	}
	return i + r + i
}

function Gb() {
	return "`"
}

function Yb(e, t = {}) {
	const n = (t.align || []).concat(),
		r = t.stringLength || Zb,
		i = [],
		o = [],
		s = [],
		a = [];
	let l = 0,
		u = -1;
	for (; ++u < e.length;) {
		const d = [],
			m = [];
		let g = -1;
		for (e[u].length > l && (l = e[u].length); ++g < e[u].length;) {
			const y = Kb(e[u][g]);
			if (t.alignDelimiters !== !1) {
				const k = r(y);
				m[g] = k, (a[g] === void 0 || k > a[g]) && (a[g] = k)
			}
			d.push(y)
		}
		o[u] = d, s[u] = m
	}
	let c = -1;
	if (typeof n == "object" && "length" in n)
		for (; ++c < l;) i[c] = Ka(n[c]);
	else {
		const d = Ka(n);
		for (; ++c < l;) i[c] = d
	}
	c = -1;
	const f = [],
		p = [];
	for (; ++c < l;) {
		const d = i[c];
		let m = "",
			g = "";
		d === 99 ? (m = ":", g = ":") : d === 108 ? m = ":" : d === 114 && (g = ":");
		let y = t.alignDelimiters === !1 ? 1 : Math.max(1, a[c] - m.length - g.length);
		const k = m + "-".repeat(y) + g;
		t.alignDelimiters !== !1 && (y = m.length + y + g.length, y > a[c] && (a[c] = y), p[c] = y), f[c] = k
	}
	o.splice(1, 0, f), s.splice(1, 0, p), u = -1;
	const h = [];
	for (; ++u < o.length;) {
		const d = o[u],
			m = s[u];
		c = -1;
		const g = [];
		for (; ++c < l;) {
			const y = d[c] || "";
			let k = "",
				_ = "";
			if (t.alignDelimiters !== !1) {
				const C = a[c] - (m[c] || 0),
					S = i[c];
				S === 114 ? k = " ".repeat(C) : S === 99 ? C % 2 ? (k = " ".repeat(C / 2 + .5), _ = " ".repeat(C / 2 - .5)) : (k = " ".repeat(C / 2), _ = k) : _ = " ".repeat(C)
			}
			t.delimiterStart !== !1 && !c && g.push("|"), t.padding !== !1 && !(t.alignDelimiters === !1 && y === "") && (t.delimiterStart !== !1 || c) && g.push(" "), t.alignDelimiters !== !1 && g.push(k), g.push(y), t.alignDelimiters !== !1 && g.push(_), t.padding !== !1 && g.push(" "), (t.delimiterEnd !== !1 || c !== l - 1) && g.push("|")
		}
		h.push(t.delimiterEnd === !1 ? g.join("").replace(/ +$/, "") : g.join(""))
	}
	return h.join(`
`)
}

function Kb(e) {
	return e == null ? "" : String(e)
}

function Zb(e) {
	return e.length
}

function Ka(e) {
	const t = typeof e == "string" ? e.codePointAt(0) : 0;
	return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0
}
const Jb = {
	enter: {
		table: e1,
		tableData: Za,
		tableHeader: Za,
		tableRow: n1
	},
	exit: {
		codeText: r1,
		table: t1,
		tableData: _i,
		tableHeader: _i,
		tableRow: _i
	}
};

function e1(e) {
	const t = e._align;
	this.enter({
		type: "table",
		align: t.map(n => n === "none" ? null : n),
		children: []
	}, e), this.setData("inTable", !0)
}

function t1(e) {
	this.exit(e), this.setData("inTable")
}

function n1(e) {
	this.enter({
		type: "tableRow",
		children: []
	}, e)
}

function _i(e) {
	this.exit(e)
}

function Za(e) {
	this.enter({
		type: "tableCell",
		children: []
	}, e)
}

function r1(e) {
	let t = this.resume();
	this.getData("inTable") && (t = t.replace(/\\([\\|])/g, i1));
	const n = this.stack[this.stack.length - 1];
	n.value = t, this.exit(e)
}

function i1(e, t) {
	return t === "|" ? t : e
}

function o1(e) {
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
		return u(c(h, m, g), h.align)
	}

	function a(h, d, m, g) {
		const y = f(h, m, g),
			k = u([y]);
		return k.slice(0, k.indexOf(`
`))
	}

	function l(h, d, m, g) {
		const y = m.enter("tableCell"),
			k = m.enter("phrasing"),
			_ = Ic(h, m, {
				...g,
				before: o,
				after: o
			});
		return k(), y(), _
	}

	function u(h, d) {
		return Yb(h, {
			align: d,
			alignDelimiters: r,
			padding: n,
			stringLength: i
		})
	}

	function c(h, d, m) {
		const g = h.children;
		let y = -1;
		const k = [],
			_ = d.enter("table");
		for (; ++y < g.length;) k[y] = f(g[y], d, m);
		return _(), k
	}

	function f(h, d, m) {
		const g = h.children;
		let y = -1;
		const k = [],
			_ = d.enter("tableRow");
		for (; ++y < g.length;) k[y] = l(g[y], h, d, m);
		return _(), k
	}

	function p(h, d, m) {
		let g = Mc(h, d, m);
		return m.stack.includes("tableCell") && (g = g.replace(/\|/g, "\\$&")), g
	}
}

function s1(e) {
	const t = e.options.bullet || "*";
	if (t !== "*" && t !== "+" && t !== "-") throw new Error("Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`");
	return t
}

function a1(e) {
	const t = e.options.listItemIndent || "tab";
	if (t === 1 || t === "1") return "one";
	if (t !== "tab" && t !== "one" && t !== "mixed") throw new Error("Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
	return t
}

function l1(e, t, n, r) {
	const i = a1(n);
	let o = n.bulletCurrent || s1(n);
	t && t.type === "list" && t.ordered && (o = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + o);
	let s = o.length + 1;
	(i === "tab" || i === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (s = Math.ceil(s / 4) * 4);
	const a = bt(r);
	a.move(o + " ".repeat(s - o.length)), a.shift(s);
	const l = n.enter("listItem"),
		u = Ac(Tc(e, n, a.current()), c);
	return l(), u;

	function c(f, p, h) {
		return p ? (h ? "" : " ".repeat(s)) + f : (h ? o : o + " ".repeat(s - o.length)) + f
	}
}
const u1 = {
		exit: {
			taskListCheckValueChecked: Ja,
			taskListCheckValueUnchecked: Ja,
			paragraph: f1
		}
	},
	c1 = {
		unsafe: [{
			atBreak: !0,
			character: "-",
			after: "[:|-]"
		}],
		handlers: {
			listItem: d1
		}
	};

function Ja(e) {
	const t = this.stack[this.stack.length - 2];
	t.checked = e.type === "taskListCheckValueChecked"
}

function f1(e) {
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

function d1(e, t, n, r) {
	const i = e.children[0],
		o = typeof e.checked == "boolean" && i && i.type === "paragraph",
		s = "[" + (e.checked ? "x" : " ") + "] ",
		a = bt(r);
	o && a.move(s);
	let l = l1(e, t, n, {
		...r,
		...a.current()
	});
	return o && (l = l.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, u)), l;

	function u(c) {
		return c + s
	}
}

function h1() {
	return [Tb, Vb(), Hb, Jb, u1]
}

function p1(e) {
	return {
		extensions: [Ab, $b(), qb, o1(e), c1]
	}
}

function m1(e = {}) {
	const t = this.data();
	n("micromarkExtensions", pb(e)), n("fromMarkdownExtensions", h1()), n("toMarkdownExtensions", p1(e));

	function n(r, i) {
		(t[r] ? t[r] : t[r] = []).push(i)
	}
}

function g1({
	content: e,
	style: t
}) {
	const n = e.data;
	if (!n.text) return null;
	const r = n.text;
	return I(Yt, {
		style: t,
		children: I("div", {
			"data-sm-content": e.id,
			className: "sm-sans sm-flex sm-flex-col sm-gap-y-3 sm-items-start sm-h-full sm-max-h-contentCard sm-overflow-y-auto sm-text-neutral-700 sm-font-normal sm-font-primary",
			children: I(Ro, {
				remarkPlugins: [m1],
				components: {
					h1: ({
						type: i = "h1",
						children: o,
						size: s = "2xl"
					}) => I(xt, {
						type: i,
						children: o,
						size: s
					}),
					h2: ({
						type: i = "h2",
						children: o,
						size: s = "2xl"
					}) => I(xt, {
						type: i,
						children: o,
						size: s
					}),
					h3: ({
						type: i = "h3",
						children: o,
						size: s = "lg"
					}) => I(xt, {
						type: i,
						children: o,
						size: s
					}),
					h4: ({
						type: i = "h4",
						children: o,
						size: s = "lg"
					}) => I(xt, {
						type: i,
						children: o,
						size: s
					}),
					h5: ({
						type: i = "h5",
						children: o,
						size: s = "md"
					}) => I(xt, {
						type: i,
						children: o,
						size: s
					}),
					h6: ({
						type: i = "h6",
						children: o,
						size: s = "md"
					}) => I(xt, {
						type: i,
						children: o,
						size: s
					}),
					li: ({
						children: i
					}) => I("li", {
						children: i
					}),
					ol: ({
						children: i
					}) => I("ol", {
						className: "sm-ml-4 sm-list-decimal",
						children: i
					}),
					ul: ({
						children: i,
						className: o
					}) => o === "task-list-item" ? I("ul", {
						className: "sm-ml-4 sm-list-none",
						children: i
					}) : I("ul", {
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
							const c = window.location.hostname,
								f = new URL(i).hostname;
							c !== f && (l = !0)
						}
						const u = {};
						return l && (u.target = "_blank", u.rel = "noopener noreferrer"), I("a", {
							className: "sm-text-blue-400 active:sm-text-red-500 hover:sm-underline focus:underline visited:sm-text-pink-500",
							href: i,
							title: s,
							...u,
							children: o
						})
					},
					p: ({
						children: i
					}) => I(jt, {
						children: i,
						size: "md"
					}),
					hr: () => I("hr", {
						className: "sm-w-11/12 sm-bg-gray-400"
					}),
					table: ({
						...i
					}) => I("table", {
						className: "sm-table-auto md:sm-table-fixed sm-w-full sm-border-spacing-0",
						...i
					}),
					tr: ({
						...i
					}) => I("tr", {
						className: "even:sm-bg-gray-200",
						...i
					}),
					thead: ({
						...i
					}) => I("thead", {
						className: "sm-bg-blue-300 sm-text-left",
						...i
					}),
					pre: ({
						...i
					}) => I("pre", {
						className: "sm-bg-gray-300 sm-rounded-sm",
						...i
					})
				},
				children: r
			})
		})
	})
}

function y1({
	content: e,
	style: t
}) {
	const {
		sendTextMessage: n
	} = It(), r = e.data;
	return r.options.length ? I(Yt, {
		isDismissible: !1,
		style: t,
		children: I("div", {
			"data-sm-content": e.id,
			className: "sm-max-h-contentCard sm-h-full sm-flex sm-flex-col sm-gap-y-2 sm-overflow-y-auto",
			children: r.options.map(i => ve(On, {
				theme: "outline",
				onClick: () => n((i == null ? void 0 : i.value) || i.label),
				children: [i.label, I(Rr, {
					name: "chevronRight"
				})]
			}, e.id + i.label))
		})
	}) : null
}

function b1() {
	const {
		scene: e
	} = It(), [t, n] = Be([]), r = gu(t, {
		from: {
			opacity: 0,
			transform: "translateY(20px)"
		},
		enter: {
			opacity: 1,
			transform: "translateY(0px)"
		},
		config: Or.gentle
	}), i = {
		options: y1,
		image: Eu,
		externalLink: o => I(Qi, {
			...o,
			isExternal: !0
		}),
		internalLink: o => I(Qi, {
			...o,
			isExternal: !1
		}),
		markdown: g1
	};
	return we(() => {
		e.conversation.onCardChanged.addListener(o => n(o)), e.conversation.autoClearCards = !0
	}, [e]), I(Xe, {
		children: r((o, s) => {
			const a = i[(s == null ? void 0 : s.type) || ""];
			if (!a) return null;
			const l = Ir(a);
			return I(l, {
				style: o,
				content: s
			})
		})
	})
}

function v1({
	profilePicture: e,
	greeting: t,
	loadingIndicator: n
}) {
	const {
		connectionStatus: r,
		connect: i
	} = It(), o = r === be.CONNECTED, s = r !== be.CONNECTED && r !== be.CONNECTING;
	we(() => {
		s && sessionStorage.getItem(Re.sessionId) && i()
	}, [i, s]);
	const a = () => I("div", {
			className: "sm-w-full sm-max-h-full sm-flex sm-items-center sm-justify-center sm-text-primary-600",
			children: I("div", {
				className: "sm-w-12 sm-h-12 md:sm-w-24 md:sm-h-24 sm-text-base",
				children: n || I(xu, {})
			})
		}),
		l = mu({
			transform: o ? "scale(2)" : "scale(1)",
			config: Or.stiff
		}),
		u = ft({
			"sm-scale-50": o
		});
	return I("div", {
		className: "et_pb_section et_pb_section_1  et_pb_with_background et_section_regular",
		children: ve("div", {
			style: {
				backgroundImage: `url(${e})`
			},
			className: "sm-z-max sm-pointer-events-none sm-h-full",
			children: [I("div", {
				class: "",
				children: I(b1, {})
			}), ve("div", {
				className: "",
				children: [s && I("div", {
					className: "sm-max-w-xs sm-origin-bottom-right sm-fixed sm-bottom-100 sm-right-0 sm-z-max",
					children: I(Mp, {
						greeting: t
					})
				}), I("div", {
					className: u,
					children: ve(Ir.div, {
						style: l,
						className: "sm-shadow-lg sm-pointer-events-auto",
						children: [s && I("button", {
							onClick: i,
							"data-sm-cy": "connectButton",
							className: "sm-w-full sm-max-h-800 sm-flex sm-justify-center sm-items-center sm-text-primary-300 sm-border-2 sm-border-transparent sm-bg-transparent hover:sm-border-primary-400 sm-transition-colors sm-overflow-hidden sm-top-0 ",
							children: I(Pp, {
								src: e
							})
						}), ve("div", {
							className: ft({
								"sm-transform-gpu sm-background-null": !0,
								"sm-w-full sm-max-h-800 sm-border-2 sm-border-primary-400": o
							}),
							children: [I(Cu, {
								autoConnect: 1,
								loadingIndicator: I(a, {})
							}), o && I(Rp, {})] //o && I(Rp, {})
						})]
					})
				})]
			})]
		})
	})
}

function w1({
	element: e
}) {
	const t = e,
		{
			connectionStatus: n,
			sendTextMessage: r
		} = It();
	return we(() => {
		const i = [
				["sendTextMessage", r]
			],
			o = () => {
				i.map(([a, l]) => {
					t[a] = l
				})
			},
			s = () => {
				i.map(([a]) => {
					t[a] = void 0
				})
			};
		n === be.CONNECTED ? o() : s()
	}, [n, t, r]), null
}

function _1({
	tokenServer: e,
	apiKey: t,
	connectingIndicator: n,
	greeting: r,
	profilePicture: i,
	parent: o
}) {
	return ve(Ol, {
		apiKey: t,
		tokenServer: e,
		children: [I(w1, {
			element: o
		}), I(v1, {
			greeting: r,
			profilePicture: i,
			loadingIndicator: n
		})]
	})
}
ro.exports.define("sm-widget", () => _1, {
	attributes: ["api-key", "token-server", "greeting", "profile-picture"]
});