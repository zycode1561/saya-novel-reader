(function() {

//#region rolldown:runtime
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __commonJS = (cb$1, mod) => function() {
		return mod || (0, cb$1[__getOwnPropNames(cb$1)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i$1 = 0, n$2 = keys.length, key; i$1 < n$2; i$1++) {
			key = keys[i$1];
			if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
				get: ((k$2) => from[k$2]).bind(null, key),
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
		value: mod,
		enumerable: true
	}) : target, mod));

//#endregion

//#region node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react.production.min.js
	var require_react_production_min = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react.production.min.js": ((exports) => {
		var l$2 = Symbol.for("react.element"), n$1 = Symbol.for("react.portal"), p$3 = Symbol.for("react.fragment"), q$2 = Symbol.for("react.strict_mode"), r$1 = Symbol.for("react.profiler"), t$1 = Symbol.for("react.provider"), u$1 = Symbol.for("react.context"), v$2 = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x$1 = Symbol.for("react.memo"), y$1 = Symbol.for("react.lazy"), z$2 = Symbol.iterator;
		function A$2(a) {
			if (null === a || "object" !== typeof a) return null;
			a = z$2 && a[z$2] || a["@@iterator"];
			return "function" === typeof a ? a : null;
		}
		var B$2 = {
			isMounted: function() {
				return !1;
			},
			enqueueForceUpdate: function() {},
			enqueueReplaceState: function() {},
			enqueueSetState: function() {}
		}, C$1 = Object.assign, D$2 = {};
		function E$2(a, b, e) {
			this.props = a;
			this.context = b;
			this.refs = D$2;
			this.updater = e || B$2;
		}
		E$2.prototype.isReactComponent = {};
		E$2.prototype.setState = function(a, b) {
			if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
			this.updater.enqueueSetState(this, a, b, "setState");
		};
		E$2.prototype.forceUpdate = function(a) {
			this.updater.enqueueForceUpdate(this, a, "forceUpdate");
		};
		function F$1() {}
		F$1.prototype = E$2.prototype;
		function G$2(a, b, e) {
			this.props = a;
			this.context = b;
			this.refs = D$2;
			this.updater = e || B$2;
		}
		var H$2 = G$2.prototype = new F$1();
		H$2.constructor = G$2;
		C$1(H$2, E$2.prototype);
		H$2.isPureReactComponent = !0;
		var I$2 = Array.isArray, J$1 = Object.prototype.hasOwnProperty, K$2 = { current: null }, L$2 = {
			key: !0,
			ref: !0,
			__self: !0,
			__source: !0
		};
		function M$2(a, b, e) {
			var d, c = {}, k$2 = null, h$1 = null;
			if (null != b) for (d in void 0 !== b.ref && (h$1 = b.ref), void 0 !== b.key && (k$2 = "" + b.key), b) J$1.call(b, d) && !L$2.hasOwnProperty(d) && (c[d] = b[d]);
			var g$1 = arguments.length - 2;
			if (1 === g$1) c.children = e;
			else if (1 < g$1) {
				for (var f$2 = Array(g$1), m$2 = 0; m$2 < g$1; m$2++) f$2[m$2] = arguments[m$2 + 2];
				c.children = f$2;
			}
			if (a && a.defaultProps) for (d in g$1 = a.defaultProps, g$1) void 0 === c[d] && (c[d] = g$1[d]);
			return {
				$$typeof: l$2,
				type: a,
				key: k$2,
				ref: h$1,
				props: c,
				_owner: K$2.current
			};
		}
		function N$2(a, b) {
			return {
				$$typeof: l$2,
				type: a.type,
				key: b,
				ref: a.ref,
				props: a.props,
				_owner: a._owner
			};
		}
		function O$2(a) {
			return "object" === typeof a && null !== a && a.$$typeof === l$2;
		}
		function escape(a) {
			var b = {
				"=": "=0",
				":": "=2"
			};
			return "$" + a.replace(/[=:]/g, function(a$1) {
				return b[a$1];
			});
		}
		var P$2 = /\/+/g;
		function Q$2(a, b) {
			return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
		}
		function R$2(a, b, e, d, c) {
			var k$2 = typeof a;
			if ("undefined" === k$2 || "boolean" === k$2) a = null;
			var h$1 = !1;
			if (null === a) h$1 = !0;
			else switch (k$2) {
				case "string":
				case "number":
					h$1 = !0;
					break;
				case "object": switch (a.$$typeof) {
					case l$2:
					case n$1: h$1 = !0;
				}
			}
			if (h$1) return h$1 = a, c = c(h$1), a = "" === d ? "." + Q$2(h$1, 0) : d, I$2(c) ? (e = "", null != a && (e = a.replace(P$2, "$&/") + "/"), R$2(c, b, e, "", function(a$1) {
				return a$1;
			})) : null != c && (O$2(c) && (c = N$2(c, e + (!c.key || h$1 && h$1.key === c.key ? "" : ("" + c.key).replace(P$2, "$&/") + "/") + a)), b.push(c)), 1;
			h$1 = 0;
			d = "" === d ? "." : d + ":";
			if (I$2(a)) for (var g$1 = 0; g$1 < a.length; g$1++) {
				k$2 = a[g$1];
				var f$2 = d + Q$2(k$2, g$1);
				h$1 += R$2(k$2, b, e, f$2, c);
			}
			else if (f$2 = A$2(a), "function" === typeof f$2) for (a = f$2.call(a), g$1 = 0; !(k$2 = a.next()).done;) k$2 = k$2.value, f$2 = d + Q$2(k$2, g$1++), h$1 += R$2(k$2, b, e, f$2, c);
			else if ("object" === k$2) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
			return h$1;
		}
		function S$2(a, b, e) {
			if (null == a) return a;
			var d = [], c = 0;
			R$2(a, d, "", "", function(a$1) {
				return b.call(e, a$1, c++);
			});
			return d;
		}
		function T$2(a) {
			if (-1 === a._status) {
				var b = a._result;
				b = b();
				b.then(function(b$1) {
					if (0 === a._status || -1 === a._status) a._status = 1, a._result = b$1;
				}, function(b$1) {
					if (0 === a._status || -1 === a._status) a._status = 2, a._result = b$1;
				});
				-1 === a._status && (a._status = 0, a._result = b);
			}
			if (1 === a._status) return a._result.default;
			throw a._result;
		}
		var U$2 = { current: null }, V$1 = { transition: null }, W$1 = {
			ReactCurrentDispatcher: U$2,
			ReactCurrentBatchConfig: V$1,
			ReactCurrentOwner: K$2
		};
		function X$1() {
			throw Error("act(...) is not supported in production builds of React.");
		}
		exports.Children = {
			map: S$2,
			forEach: function(a, b, e) {
				S$2(a, function() {
					b.apply(this, arguments);
				}, e);
			},
			count: function(a) {
				var b = 0;
				S$2(a, function() {
					b++;
				});
				return b;
			},
			toArray: function(a) {
				return S$2(a, function(a$1) {
					return a$1;
				}) || [];
			},
			only: function(a) {
				if (!O$2(a)) throw Error("React.Children.only expected to receive a single React element child.");
				return a;
			}
		};
		exports.Component = E$2;
		exports.Fragment = p$3;
		exports.Profiler = r$1;
		exports.PureComponent = G$2;
		exports.StrictMode = q$2;
		exports.Suspense = w;
		exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
		exports.act = X$1;
		exports.cloneElement = function(a, b, e) {
			if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
			var d = C$1({}, a.props), c = a.key, k$2 = a.ref, h$1 = a._owner;
			if (null != b) {
				void 0 !== b.ref && (k$2 = b.ref, h$1 = K$2.current);
				void 0 !== b.key && (c = "" + b.key);
				if (a.type && a.type.defaultProps) var g$1 = a.type.defaultProps;
				for (f$2 in b) J$1.call(b, f$2) && !L$2.hasOwnProperty(f$2) && (d[f$2] = void 0 === b[f$2] && void 0 !== g$1 ? g$1[f$2] : b[f$2]);
			}
			var f$2 = arguments.length - 2;
			if (1 === f$2) d.children = e;
			else if (1 < f$2) {
				g$1 = Array(f$2);
				for (var m$2 = 0; m$2 < f$2; m$2++) g$1[m$2] = arguments[m$2 + 2];
				d.children = g$1;
			}
			return {
				$$typeof: l$2,
				type: a.type,
				key: c,
				ref: k$2,
				props: d,
				_owner: h$1
			};
		};
		exports.createContext = function(a) {
			a = {
				$$typeof: u$1,
				_currentValue: a,
				_currentValue2: a,
				_threadCount: 0,
				Provider: null,
				Consumer: null,
				_defaultValue: null,
				_globalName: null
			};
			a.Provider = {
				$$typeof: t$1,
				_context: a
			};
			return a.Consumer = a;
		};
		exports.createElement = M$2;
		exports.createFactory = function(a) {
			var b = M$2.bind(null, a);
			b.type = a;
			return b;
		};
		exports.createRef = function() {
			return { current: null };
		};
		exports.forwardRef = function(a) {
			return {
				$$typeof: v$2,
				render: a
			};
		};
		exports.isValidElement = O$2;
		exports.lazy = function(a) {
			return {
				$$typeof: y$1,
				_payload: {
					_status: -1,
					_result: a
				},
				_init: T$2
			};
		};
		exports.memo = function(a, b) {
			return {
				$$typeof: x$1,
				type: a,
				compare: void 0 === b ? null : b
			};
		};
		exports.startTransition = function(a) {
			var b = V$1.transition;
			V$1.transition = {};
			try {
				a();
			} finally {
				V$1.transition = b;
			}
		};
		exports.unstable_act = X$1;
		exports.useCallback = function(a, b) {
			return U$2.current.useCallback(a, b);
		};
		exports.useContext = function(a) {
			return U$2.current.useContext(a);
		};
		exports.useDebugValue = function() {};
		exports.useDeferredValue = function(a) {
			return U$2.current.useDeferredValue(a);
		};
		exports.useEffect = function(a, b) {
			return U$2.current.useEffect(a, b);
		};
		exports.useId = function() {
			return U$2.current.useId();
		};
		exports.useImperativeHandle = function(a, b, e) {
			return U$2.current.useImperativeHandle(a, b, e);
		};
		exports.useInsertionEffect = function(a, b) {
			return U$2.current.useInsertionEffect(a, b);
		};
		exports.useLayoutEffect = function(a, b) {
			return U$2.current.useLayoutEffect(a, b);
		};
		exports.useMemo = function(a, b) {
			return U$2.current.useMemo(a, b);
		};
		exports.useReducer = function(a, b, e) {
			return U$2.current.useReducer(a, b, e);
		};
		exports.useRef = function(a) {
			return U$2.current.useRef(a);
		};
		exports.useState = function(a) {
			return U$2.current.useState(a);
		};
		exports.useSyncExternalStore = function(a, b, e) {
			return U$2.current.useSyncExternalStore(a, b, e);
		};
		exports.useTransition = function() {
			return U$2.current.useTransition();
		};
		exports.version = "18.3.1";
	}) });

//#endregion
//#region node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
	var require_react = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/react@18.3.1/node_modules/react/index.js": ((exports, module) => {
		module.exports = require_react_production_min();
	}) });

//#endregion
//#region node_modules/.pnpm/scheduler@0.23.2/node_modules/scheduler/cjs/scheduler.production.min.js
	var require_scheduler_production_min = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/scheduler@0.23.2/node_modules/scheduler/cjs/scheduler.production.min.js": ((exports) => {
		function f$1(a, b) {
			var c = a.length;
			a.push(b);
			a: for (; 0 < c;) {
				var d = c - 1 >>> 1, e = a[d];
				if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;
				else break a;
			}
		}
		function h(a) {
			return 0 === a.length ? null : a[0];
		}
		function k$1(a) {
			if (0 === a.length) return null;
			var b = a[0], c = a.pop();
			if (c !== b) {
				a[0] = c;
				a: for (var d = 0, e = a.length, w$1 = e >>> 1; d < w$1;) {
					var m$2 = 2 * (d + 1) - 1, C$2 = a[m$2], n$2 = m$2 + 1, x$2 = a[n$2];
					if (0 > g(C$2, c)) n$2 < e && 0 > g(x$2, C$2) ? (a[d] = x$2, a[n$2] = c, d = n$2) : (a[d] = C$2, a[m$2] = c, d = m$2);
					else if (n$2 < e && 0 > g(x$2, c)) a[d] = x$2, a[n$2] = c, d = n$2;
					else break a;
				}
			}
			return b;
		}
		function g(a, b) {
			var c = a.sortIndex - b.sortIndex;
			return 0 !== c ? c : a.id - b.id;
		}
		if ("object" === typeof performance && "function" === typeof performance.now) {
			var l$1 = performance;
			exports.unstable_now = function() {
				return l$1.now();
			};
		} else {
			var p$2 = Date, q$1 = p$2.now();
			exports.unstable_now = function() {
				return p$2.now() - q$1;
			};
		}
		var r = [], t = [], u = 1, v$1 = null, y = 3, z$1 = !1, A$1 = !1, B$1 = !1, D$1 = "function" === typeof setTimeout ? setTimeout : null, E$1 = "function" === typeof clearTimeout ? clearTimeout : null, F = "undefined" !== typeof setImmediate ? setImmediate : null;
		"undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
		function G$1(a) {
			for (var b = h(t); null !== b;) {
				if (null === b.callback) k$1(t);
				else if (b.startTime <= a) k$1(t), b.sortIndex = b.expirationTime, f$1(r, b);
				else break;
				b = h(t);
			}
		}
		function H$1(a) {
			B$1 = !1;
			G$1(a);
			if (!A$1) if (null !== h(r)) A$1 = !0, I$1(J);
			else {
				var b = h(t);
				null !== b && K$1(H$1, b.startTime - a);
			}
		}
		function J(a, b) {
			A$1 = !1;
			B$1 && (B$1 = !1, E$1(L$1), L$1 = -1);
			z$1 = !0;
			var c = y;
			try {
				G$1(b);
				for (v$1 = h(r); null !== v$1 && (!(v$1.expirationTime > b) || a && !M$1());) {
					var d = v$1.callback;
					if ("function" === typeof d) {
						v$1.callback = null;
						y = v$1.priorityLevel;
						var e = d(v$1.expirationTime <= b);
						b = exports.unstable_now();
						"function" === typeof e ? v$1.callback = e : v$1 === h(r) && k$1(r);
						G$1(b);
					} else k$1(r);
					v$1 = h(r);
				}
				if (null !== v$1) var w$1 = !0;
				else {
					var m$2 = h(t);
					null !== m$2 && K$1(H$1, m$2.startTime - b);
					w$1 = !1;
				}
				return w$1;
			} finally {
				v$1 = null, y = c, z$1 = !1;
			}
		}
		var N$1 = !1, O$1 = null, L$1 = -1, P$1 = 5, Q$1 = -1;
		function M$1() {
			return exports.unstable_now() - Q$1 < P$1 ? !1 : !0;
		}
		function R$1() {
			if (null !== O$1) {
				var a = exports.unstable_now();
				Q$1 = a;
				var b = !0;
				try {
					b = O$1(!0, a);
				} finally {
					b ? S$1() : (N$1 = !1, O$1 = null);
				}
			} else N$1 = !1;
		}
		var S$1;
		if ("function" === typeof F) S$1 = function() {
			F(R$1);
		};
		else if ("undefined" !== typeof MessageChannel) {
			var T$1 = new MessageChannel(), U$1 = T$1.port2;
			T$1.port1.onmessage = R$1;
			S$1 = function() {
				U$1.postMessage(null);
			};
		} else S$1 = function() {
			D$1(R$1, 0);
		};
		function I$1(a) {
			O$1 = a;
			N$1 || (N$1 = !0, S$1());
		}
		function K$1(a, b) {
			L$1 = D$1(function() {
				a(exports.unstable_now());
			}, b);
		}
		exports.unstable_IdlePriority = 5;
		exports.unstable_ImmediatePriority = 1;
		exports.unstable_LowPriority = 4;
		exports.unstable_NormalPriority = 3;
		exports.unstable_Profiling = null;
		exports.unstable_UserBlockingPriority = 2;
		exports.unstable_cancelCallback = function(a) {
			a.callback = null;
		};
		exports.unstable_continueExecution = function() {
			A$1 || z$1 || (A$1 = !0, I$1(J));
		};
		exports.unstable_forceFrameRate = function(a) {
			0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P$1 = 0 < a ? Math.floor(1e3 / a) : 5;
		};
		exports.unstable_getCurrentPriorityLevel = function() {
			return y;
		};
		exports.unstable_getFirstCallbackNode = function() {
			return h(r);
		};
		exports.unstable_next = function(a) {
			switch (y) {
				case 1:
				case 2:
				case 3:
					var b = 3;
					break;
				default: b = y;
			}
			var c = y;
			y = b;
			try {
				return a();
			} finally {
				y = c;
			}
		};
		exports.unstable_pauseExecution = function() {};
		exports.unstable_requestPaint = function() {};
		exports.unstable_runWithPriority = function(a, b) {
			switch (a) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5: break;
				default: a = 3;
			}
			var c = y;
			y = a;
			try {
				return b();
			} finally {
				y = c;
			}
		};
		exports.unstable_scheduleCallback = function(a, b, c) {
			var d = exports.unstable_now();
			"object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
			switch (a) {
				case 1:
					var e = -1;
					break;
				case 2:
					e = 250;
					break;
				case 5:
					e = 1073741823;
					break;
				case 4:
					e = 1e4;
					break;
				default: e = 5e3;
			}
			e = c + e;
			a = {
				id: u++,
				callback: b,
				priorityLevel: a,
				startTime: c,
				expirationTime: e,
				sortIndex: -1
			};
			c > d ? (a.sortIndex = c, f$1(t, a), null === h(r) && a === h(t) && (B$1 ? (E$1(L$1), L$1 = -1) : B$1 = !0, K$1(H$1, c - d))) : (a.sortIndex = e, f$1(r, a), A$1 || z$1 || (A$1 = !0, I$1(J)));
			return a;
		};
		exports.unstable_shouldYield = M$1;
		exports.unstable_wrapCallback = function(a) {
			var b = y;
			return function() {
				var c = y;
				y = b;
				try {
					return a.apply(this, arguments);
				} finally {
					y = c;
				}
			};
		};
	}) });

//#endregion
//#region node_modules/.pnpm/scheduler@0.23.2/node_modules/scheduler/index.js
	var require_scheduler = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/scheduler@0.23.2/node_modules/scheduler/index.js": ((exports, module) => {
		module.exports = require_scheduler_production_min();
	}) });

//#endregion
//#region node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/cjs/react-dom.production.min.js
	var require_react_dom_production_min = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/cjs/react-dom.production.min.js": ((exports) => {
		var aa = require_react(), ca = require_scheduler();
		function p$1(a) {
			for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
			return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
		}
		var da = /* @__PURE__ */ new Set(), ea = {};
		function fa(a, b) {
			ha(a, b);
			ha(a + "Capture", b);
		}
		function ha(a, b) {
			ea[a] = b;
			for (a = 0; a < b.length; a++) da.add(b[a]);
		}
		var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
		function oa(a) {
			if (ja.call(ma, a)) return !0;
			if (ja.call(la, a)) return !1;
			if (ka.test(a)) return ma[a] = !0;
			la[a] = !0;
			return !1;
		}
		function pa(a, b, c, d) {
			if (null !== c && 0 === c.type) return !1;
			switch (typeof b) {
				case "function":
				case "symbol": return !0;
				case "boolean":
					if (d) return !1;
					if (null !== c) return !c.acceptsBooleans;
					a = a.toLowerCase().slice(0, 5);
					return "data-" !== a && "aria-" !== a;
				default: return !1;
			}
		}
		function qa(a, b, c, d) {
			if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return !0;
			if (d) return !1;
			if (null !== c) switch (c.type) {
				case 3: return !b;
				case 4: return !1 === b;
				case 5: return isNaN(b);
				case 6: return isNaN(b) || 1 > b;
			}
			return !1;
		}
		function v(a, b, c, d, e, f$2, g$1) {
			this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
			this.attributeName = d;
			this.attributeNamespace = e;
			this.mustUseProperty = c;
			this.propertyName = a;
			this.type = b;
			this.sanitizeURL = f$2;
			this.removeEmptyString = g$1;
		}
		var z = {};
		"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
			z[a] = new v(a, 0, !1, a, null, !1, !1);
		});
		[
			["acceptCharset", "accept-charset"],
			["className", "class"],
			["htmlFor", "for"],
			["httpEquiv", "http-equiv"]
		].forEach(function(a) {
			var b = a[0];
			z[b] = new v(b, 1, !1, a[1], null, !1, !1);
		});
		[
			"contentEditable",
			"draggable",
			"spellCheck",
			"value"
		].forEach(function(a) {
			z[a] = new v(a, 2, !1, a.toLowerCase(), null, !1, !1);
		});
		[
			"autoReverse",
			"externalResourcesRequired",
			"focusable",
			"preserveAlpha"
		].forEach(function(a) {
			z[a] = new v(a, 2, !1, a, null, !1, !1);
		});
		"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
			z[a] = new v(a, 3, !1, a.toLowerCase(), null, !1, !1);
		});
		[
			"checked",
			"multiple",
			"muted",
			"selected"
		].forEach(function(a) {
			z[a] = new v(a, 3, !0, a, null, !1, !1);
		});
		["capture", "download"].forEach(function(a) {
			z[a] = new v(a, 4, !1, a, null, !1, !1);
		});
		[
			"cols",
			"rows",
			"size",
			"span"
		].forEach(function(a) {
			z[a] = new v(a, 6, !1, a, null, !1, !1);
		});
		["rowSpan", "start"].forEach(function(a) {
			z[a] = new v(a, 5, !1, a.toLowerCase(), null, !1, !1);
		});
		var ra = /[\-:]([a-z])/g;
		function sa(a) {
			return a[1].toUpperCase();
		}
		"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
			var b = a.replace(ra, sa);
			z[b] = new v(b, 1, !1, a, null, !1, !1);
		});
		"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
			var b = a.replace(ra, sa);
			z[b] = new v(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
		});
		[
			"xml:base",
			"xml:lang",
			"xml:space"
		].forEach(function(a) {
			var b = a.replace(ra, sa);
			z[b] = new v(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
		});
		["tabIndex", "crossOrigin"].forEach(function(a) {
			z[a] = new v(a, 1, !1, a.toLowerCase(), null, !1, !1);
		});
		z.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
		[
			"src",
			"href",
			"action",
			"formAction"
		].forEach(function(a) {
			z[a] = new v(a, 1, !1, a.toLowerCase(), null, !0, !0);
		});
		function ta(a, b, c, d) {
			var e = z.hasOwnProperty(b) ? z[b] : null;
			if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
		}
		var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
		var Ia = Symbol.for("react.offscreen");
		var Ja = Symbol.iterator;
		function Ka(a) {
			if (null === a || "object" !== typeof a) return null;
			a = Ja && a[Ja] || a["@@iterator"];
			return "function" === typeof a ? a : null;
		}
		var A = Object.assign, La;
		function Ma(a) {
			if (void 0 === La) try {
				throw Error();
			} catch (c) {
				var b = c.stack.trim().match(/\n( *(at )?)/);
				La = b && b[1] || "";
			}
			return "\n" + La + a;
		}
		var Na = !1;
		function Oa(a, b) {
			if (!a || Na) return "";
			Na = !0;
			var c = Error.prepareStackTrace;
			Error.prepareStackTrace = void 0;
			try {
				if (b) if (b = function() {
					throw Error();
				}, Object.defineProperty(b.prototype, "props", { set: function() {
					throw Error();
				} }), "object" === typeof Reflect && Reflect.construct) {
					try {
						Reflect.construct(b, []);
					} catch (l$3) {
						var d = l$3;
					}
					Reflect.construct(a, [], b);
				} else {
					try {
						b.call();
					} catch (l$3) {
						d = l$3;
					}
					a.call(b.prototype);
				}
				else {
					try {
						throw Error();
					} catch (l$3) {
						d = l$3;
					}
					a();
				}
			} catch (l$3) {
				if (l$3 && d && "string" === typeof l$3.stack) {
					for (var e = l$3.stack.split("\n"), f$2 = d.stack.split("\n"), g$1 = e.length - 1, h$1 = f$2.length - 1; 1 <= g$1 && 0 <= h$1 && e[g$1] !== f$2[h$1];) h$1--;
					for (; 1 <= g$1 && 0 <= h$1; g$1--, h$1--) if (e[g$1] !== f$2[h$1]) {
						if (1 !== g$1 || 1 !== h$1) do
							if (g$1--, h$1--, 0 > h$1 || e[g$1] !== f$2[h$1]) {
								var k$2 = "\n" + e[g$1].replace(" at new ", " at ");
								a.displayName && k$2.includes("<anonymous>") && (k$2 = k$2.replace("<anonymous>", a.displayName));
								return k$2;
							}
						while (1 <= g$1 && 0 <= h$1);
						break;
					}
				}
			} finally {
				Na = !1, Error.prepareStackTrace = c;
			}
			return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
		}
		function Pa(a) {
			switch (a.tag) {
				case 5: return Ma(a.type);
				case 16: return Ma("Lazy");
				case 13: return Ma("Suspense");
				case 19: return Ma("SuspenseList");
				case 0:
				case 2:
				case 15: return a = Oa(a.type, !1), a;
				case 11: return a = Oa(a.type.render, !1), a;
				case 1: return a = Oa(a.type, !0), a;
				default: return "";
			}
		}
		function Qa(a) {
			if (null == a) return null;
			if ("function" === typeof a) return a.displayName || a.name || null;
			if ("string" === typeof a) return a;
			switch (a) {
				case ya: return "Fragment";
				case wa: return "Portal";
				case Aa: return "Profiler";
				case za: return "StrictMode";
				case Ea: return "Suspense";
				case Fa: return "SuspenseList";
			}
			if ("object" === typeof a) switch (a.$$typeof) {
				case Ca: return (a.displayName || "Context") + ".Consumer";
				case Ba: return (a._context.displayName || "Context") + ".Provider";
				case Da:
					var b = a.render;
					a = a.displayName;
					a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
					return a;
				case Ga: return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
				case Ha:
					b = a._payload;
					a = a._init;
					try {
						return Qa(a(b));
					} catch (c) {}
			}
			return null;
		}
		function Ra(a) {
			var b = a.type;
			switch (a.tag) {
				case 24: return "Cache";
				case 9: return (b.displayName || "Context") + ".Consumer";
				case 10: return (b._context.displayName || "Context") + ".Provider";
				case 18: return "DehydratedFragment";
				case 11: return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
				case 7: return "Fragment";
				case 5: return b;
				case 4: return "Portal";
				case 3: return "Root";
				case 6: return "Text";
				case 16: return Qa(b);
				case 8: return b === za ? "StrictMode" : "Mode";
				case 22: return "Offscreen";
				case 12: return "Profiler";
				case 21: return "Scope";
				case 13: return "Suspense";
				case 19: return "SuspenseList";
				case 25: return "TracingMarker";
				case 1:
				case 0:
				case 17:
				case 2:
				case 14:
				case 15:
					if ("function" === typeof b) return b.displayName || b.name || null;
					if ("string" === typeof b) return b;
			}
			return null;
		}
		function Sa(a) {
			switch (typeof a) {
				case "boolean":
				case "number":
				case "string":
				case "undefined": return a;
				case "object": return a;
				default: return "";
			}
		}
		function Ta(a) {
			var b = a.type;
			return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
		}
		function Ua(a) {
			var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
			if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
				var e = c.get, f$2 = c.set;
				Object.defineProperty(a, b, {
					configurable: !0,
					get: function() {
						return e.call(this);
					},
					set: function(a$1) {
						d = "" + a$1;
						f$2.call(this, a$1);
					}
				});
				Object.defineProperty(a, b, { enumerable: c.enumerable });
				return {
					getValue: function() {
						return d;
					},
					setValue: function(a$1) {
						d = "" + a$1;
					},
					stopTracking: function() {
						a._valueTracker = null;
						delete a[b];
					}
				};
			}
		}
		function Va(a) {
			a._valueTracker || (a._valueTracker = Ua(a));
		}
		function Wa(a) {
			if (!a) return !1;
			var b = a._valueTracker;
			if (!b) return !0;
			var c = b.getValue();
			var d = "";
			a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
			a = d;
			return a !== c ? (b.setValue(a), !0) : !1;
		}
		function Xa(a) {
			a = a || ("undefined" !== typeof document ? document : void 0);
			if ("undefined" === typeof a) return null;
			try {
				return a.activeElement || a.body;
			} catch (b) {
				return a.body;
			}
		}
		function Ya(a, b) {
			var c = b.checked;
			return A({}, b, {
				defaultChecked: void 0,
				defaultValue: void 0,
				value: void 0,
				checked: null != c ? c : a._wrapperState.initialChecked
			});
		}
		function Za(a, b) {
			var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
			c = Sa(null != b.value ? b.value : c);
			a._wrapperState = {
				initialChecked: d,
				initialValue: c,
				controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
			};
		}
		function ab(a, b) {
			b = b.checked;
			null != b && ta(a, "checked", b, !1);
		}
		function bb(a, b) {
			ab(a, b);
			var c = Sa(b.value), d = b.type;
			if (null != c) if ("number" === d) {
				if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
			} else a.value !== "" + c && (a.value = "" + c);
			else if ("submit" === d || "reset" === d) {
				a.removeAttribute("value");
				return;
			}
			b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
			null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
		}
		function db(a, b, c) {
			if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
				var d = b.type;
				if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
				b = "" + a._wrapperState.initialValue;
				c || b === a.value || (a.value = b);
				a.defaultValue = b;
			}
			c = a.name;
			"" !== c && (a.name = "");
			a.defaultChecked = !!a._wrapperState.initialChecked;
			"" !== c && (a.name = c);
		}
		function cb(a, b, c) {
			if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
		}
		var eb = Array.isArray;
		function fb(a, b, c, d) {
			a = a.options;
			if (b) {
				b = {};
				for (var e = 0; e < c.length; e++) b["$" + c[e]] = !0;
				for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
			} else {
				c = "" + Sa(c);
				b = null;
				for (e = 0; e < a.length; e++) {
					if (a[e].value === c) {
						a[e].selected = !0;
						d && (a[e].defaultSelected = !0);
						return;
					}
					null !== b || a[e].disabled || (b = a[e]);
				}
				null !== b && (b.selected = !0);
			}
		}
		function gb(a, b) {
			if (null != b.dangerouslySetInnerHTML) throw Error(p$1(91));
			return A({}, b, {
				value: void 0,
				defaultValue: void 0,
				children: "" + a._wrapperState.initialValue
			});
		}
		function hb(a, b) {
			var c = b.value;
			if (null == c) {
				c = b.children;
				b = b.defaultValue;
				if (null != c) {
					if (null != b) throw Error(p$1(92));
					if (eb(c)) {
						if (1 < c.length) throw Error(p$1(93));
						c = c[0];
					}
					b = c;
				}
				b ??= "";
				c = b;
			}
			a._wrapperState = { initialValue: Sa(c) };
		}
		function ib(a, b) {
			var c = Sa(b.value), d = Sa(b.defaultValue);
			null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
			null != d && (a.defaultValue = "" + d);
		}
		function jb(a) {
			var b = a.textContent;
			b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
		}
		function kb(a) {
			switch (a) {
				case "svg": return "http://www.w3.org/2000/svg";
				case "math": return "http://www.w3.org/1998/Math/MathML";
				default: return "http://www.w3.org/1999/xhtml";
			}
		}
		function lb(a, b) {
			return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
		}
		var mb, nb = function(a) {
			return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
				MSApp.execUnsafeLocalFunction(function() {
					return a(b, c, d, e);
				});
			} : a;
		}(function(a, b) {
			if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
			else {
				mb = mb || document.createElement("div");
				mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
				for (b = mb.firstChild; a.firstChild;) a.removeChild(a.firstChild);
				for (; b.firstChild;) a.appendChild(b.firstChild);
			}
		});
		function ob(a, b) {
			if (b) {
				var c = a.firstChild;
				if (c && c === a.lastChild && 3 === c.nodeType) {
					c.nodeValue = b;
					return;
				}
			}
			a.textContent = b;
		}
		var pb = {
			animationIterationCount: !0,
			aspectRatio: !0,
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
			gridArea: !0,
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
		}, qb = [
			"Webkit",
			"ms",
			"Moz",
			"O"
		];
		Object.keys(pb).forEach(function(a) {
			qb.forEach(function(b) {
				b = b + a.charAt(0).toUpperCase() + a.substring(1);
				pb[b] = pb[a];
			});
		});
		function rb(a, b, c) {
			return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
		}
		function sb(a, b) {
			a = a.style;
			for (var c in b) if (b.hasOwnProperty(c)) {
				var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
				"float" === c && (c = "cssFloat");
				d ? a.setProperty(c, e) : a[c] = e;
			}
		}
		var tb = A({ menuitem: !0 }, {
			area: !0,
			base: !0,
			br: !0,
			col: !0,
			embed: !0,
			hr: !0,
			img: !0,
			input: !0,
			keygen: !0,
			link: !0,
			meta: !0,
			param: !0,
			source: !0,
			track: !0,
			wbr: !0
		});
		function ub(a, b) {
			if (b) {
				if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p$1(137, a));
				if (null != b.dangerouslySetInnerHTML) {
					if (null != b.children) throw Error(p$1(60));
					if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p$1(61));
				}
				if (null != b.style && "object" !== typeof b.style) throw Error(p$1(62));
			}
		}
		function vb(a, b) {
			if (-1 === a.indexOf("-")) return "string" === typeof b.is;
			switch (a) {
				case "annotation-xml":
				case "color-profile":
				case "font-face":
				case "font-face-src":
				case "font-face-uri":
				case "font-face-format":
				case "font-face-name":
				case "missing-glyph": return !1;
				default: return !0;
			}
		}
		var wb = null;
		function xb(a) {
			a = a.target || a.srcElement || window;
			a.correspondingUseElement && (a = a.correspondingUseElement);
			return 3 === a.nodeType ? a.parentNode : a;
		}
		var yb = null, zb = null, Ab = null;
		function Bb(a) {
			if (a = Cb(a)) {
				if ("function" !== typeof yb) throw Error(p$1(280));
				var b = a.stateNode;
				b && (b = Db(b), yb(a.stateNode, a.type, b));
			}
		}
		function Eb(a) {
			zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
		}
		function Fb() {
			if (zb) {
				var a = zb, b = Ab;
				Ab = zb = null;
				Bb(a);
				if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
			}
		}
		function Gb(a, b) {
			return a(b);
		}
		function Hb() {}
		var Ib = !1;
		function Jb(a, b, c) {
			if (Ib) return a(b, c);
			Ib = !0;
			try {
				return Gb(a, b, c);
			} finally {
				if (Ib = !1, null !== zb || null !== Ab) Hb(), Fb();
			}
		}
		function Kb(a, b) {
			var c = a.stateNode;
			if (null === c) return null;
			var d = Db(c);
			if (null === d) return null;
			c = d[b];
			a: switch (b) {
				case "onClick":
				case "onClickCapture":
				case "onDoubleClick":
				case "onDoubleClickCapture":
				case "onMouseDown":
				case "onMouseDownCapture":
				case "onMouseMove":
				case "onMouseMoveCapture":
				case "onMouseUp":
				case "onMouseUpCapture":
				case "onMouseEnter":
					(d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
					a = !d;
					break a;
				default: a = !1;
			}
			if (a) return null;
			if (c && "function" !== typeof c) throw Error(p$1(231, b, typeof c));
			return c;
		}
		var Lb = !1;
		if (ia) try {
			var Mb = {};
			Object.defineProperty(Mb, "passive", { get: function() {
				Lb = !0;
			} });
			window.addEventListener("test", Mb, Mb);
			window.removeEventListener("test", Mb, Mb);
		} catch (a) {
			Lb = !1;
		}
		function Nb(a, b, c, d, e, f$2, g$1, h$1, k$2) {
			var l$3 = Array.prototype.slice.call(arguments, 3);
			try {
				b.apply(c, l$3);
			} catch (m$2) {
				this.onError(m$2);
			}
		}
		var Ob = !1, Pb = null, Qb = !1, Rb = null, Sb = { onError: function(a) {
			Ob = !0;
			Pb = a;
		} };
		function Tb(a, b, c, d, e, f$2, g$1, h$1, k$2) {
			Ob = !1;
			Pb = null;
			Nb.apply(Sb, arguments);
		}
		function Ub(a, b, c, d, e, f$2, g$1, h$1, k$2) {
			Tb.apply(this, arguments);
			if (Ob) {
				if (Ob) {
					var l$3 = Pb;
					Ob = !1;
					Pb = null;
				} else throw Error(p$1(198));
				Qb || (Qb = !0, Rb = l$3);
			}
		}
		function Vb(a) {
			var b = a, c = a;
			if (a.alternate) for (; b.return;) b = b.return;
			else {
				a = b;
				do
					b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
				while (a);
			}
			return 3 === b.tag ? c : null;
		}
		function Wb(a) {
			if (13 === a.tag) {
				var b = a.memoizedState;
				null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
				if (null !== b) return b.dehydrated;
			}
			return null;
		}
		function Xb(a) {
			if (Vb(a) !== a) throw Error(p$1(188));
		}
		function Yb(a) {
			var b = a.alternate;
			if (!b) {
				b = Vb(a);
				if (null === b) throw Error(p$1(188));
				return b !== a ? null : a;
			}
			for (var c = a, d = b;;) {
				var e = c.return;
				if (null === e) break;
				var f$2 = e.alternate;
				if (null === f$2) {
					d = e.return;
					if (null !== d) {
						c = d;
						continue;
					}
					break;
				}
				if (e.child === f$2.child) {
					for (f$2 = e.child; f$2;) {
						if (f$2 === c) return Xb(e), a;
						if (f$2 === d) return Xb(e), b;
						f$2 = f$2.sibling;
					}
					throw Error(p$1(188));
				}
				if (c.return !== d.return) c = e, d = f$2;
				else {
					for (var g$1 = !1, h$1 = e.child; h$1;) {
						if (h$1 === c) {
							g$1 = !0;
							c = e;
							d = f$2;
							break;
						}
						if (h$1 === d) {
							g$1 = !0;
							d = e;
							c = f$2;
							break;
						}
						h$1 = h$1.sibling;
					}
					if (!g$1) {
						for (h$1 = f$2.child; h$1;) {
							if (h$1 === c) {
								g$1 = !0;
								c = f$2;
								d = e;
								break;
							}
							if (h$1 === d) {
								g$1 = !0;
								d = f$2;
								c = e;
								break;
							}
							h$1 = h$1.sibling;
						}
						if (!g$1) throw Error(p$1(189));
					}
				}
				if (c.alternate !== d) throw Error(p$1(190));
			}
			if (3 !== c.tag) throw Error(p$1(188));
			return c.stateNode.current === c ? a : b;
		}
		function Zb(a) {
			a = Yb(a);
			return null !== a ? $b(a) : null;
		}
		function $b(a) {
			if (5 === a.tag || 6 === a.tag) return a;
			for (a = a.child; null !== a;) {
				var b = $b(a);
				if (null !== b) return b;
				a = a.sibling;
			}
			return null;
		}
		var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec$1 = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
		function mc(a) {
			if (lc && "function" === typeof lc.onCommitFiberRoot) try {
				lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
			} catch (b) {}
		}
		var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
		function nc(a) {
			a >>>= 0;
			return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
		}
		var rc = 64, sc = 4194304;
		function tc(a) {
			switch (a & -a) {
				case 1: return 1;
				case 2: return 2;
				case 4: return 4;
				case 8: return 8;
				case 16: return 16;
				case 32: return 32;
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152: return a & 4194240;
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864: return a & 130023424;
				case 134217728: return 134217728;
				case 268435456: return 268435456;
				case 536870912: return 536870912;
				case 1073741824: return 1073741824;
				default: return a;
			}
		}
		function uc(a, b) {
			var c = a.pendingLanes;
			if (0 === c) return 0;
			var d = 0, e = a.suspendedLanes, f$2 = a.pingedLanes, g$1 = c & 268435455;
			if (0 !== g$1) {
				var h$1 = g$1 & ~e;
				0 !== h$1 ? d = tc(h$1) : (f$2 &= g$1, 0 !== f$2 && (d = tc(f$2)));
			} else g$1 = c & ~e, 0 !== g$1 ? d = tc(g$1) : 0 !== f$2 && (d = tc(f$2));
			if (0 === d) return 0;
			if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f$2 = b & -b, e >= f$2 || 16 === e && 0 !== (f$2 & 4194240))) return b;
			0 !== (d & 4) && (d |= c & 16);
			b = a.entangledLanes;
			if (0 !== b) for (a = a.entanglements, b &= d; 0 < b;) c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
			return d;
		}
		function vc(a, b) {
			switch (a) {
				case 1:
				case 2:
				case 4: return b + 250;
				case 8:
				case 16:
				case 32:
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152: return b + 5e3;
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864: return -1;
				case 134217728:
				case 268435456:
				case 536870912:
				case 1073741824: return -1;
				default: return -1;
			}
		}
		function wc(a, b) {
			for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f$2 = a.pendingLanes; 0 < f$2;) {
				var g$1 = 31 - oc(f$2), h$1 = 1 << g$1, k$2 = e[g$1];
				if (-1 === k$2) {
					if (0 === (h$1 & c) || 0 !== (h$1 & d)) e[g$1] = vc(h$1, b);
				} else k$2 <= b && (a.expiredLanes |= h$1);
				f$2 &= ~h$1;
			}
		}
		function xc(a) {
			a = a.pendingLanes & -1073741825;
			return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
		}
		function yc() {
			var a = rc;
			rc <<= 1;
			0 === (rc & 4194240) && (rc = 64);
			return a;
		}
		function zc(a) {
			for (var b = [], c = 0; 31 > c; c++) b.push(a);
			return b;
		}
		function Ac(a, b, c) {
			a.pendingLanes |= b;
			536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
			a = a.eventTimes;
			b = 31 - oc(b);
			a[b] = c;
		}
		function Bc(a, b) {
			var c = a.pendingLanes & ~b;
			a.pendingLanes = b;
			a.suspendedLanes = 0;
			a.pingedLanes = 0;
			a.expiredLanes &= b;
			a.mutableReadLanes &= b;
			a.entangledLanes &= b;
			b = a.entanglements;
			var d = a.eventTimes;
			for (a = a.expirationTimes; 0 < c;) {
				var e = 31 - oc(c), f$2 = 1 << e;
				b[e] = 0;
				d[e] = -1;
				a[e] = -1;
				c &= ~f$2;
			}
		}
		function Cc(a, b) {
			var c = a.entangledLanes |= b;
			for (a = a.entanglements; c;) {
				var d = 31 - oc(c), e = 1 << d;
				e & b | a[d] & b && (a[d] |= b);
				c &= ~e;
			}
		}
		var C = 0;
		function Dc(a) {
			a &= -a;
			return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
		}
		var Ec, Fc, Gc, Hc, Ic, Jc = !1, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
		function Sc(a, b) {
			switch (a) {
				case "focusin":
				case "focusout":
					Lc = null;
					break;
				case "dragenter":
				case "dragleave":
					Mc = null;
					break;
				case "mouseover":
				case "mouseout":
					Nc = null;
					break;
				case "pointerover":
				case "pointerout":
					Oc.delete(b.pointerId);
					break;
				case "gotpointercapture":
				case "lostpointercapture": Pc.delete(b.pointerId);
			}
		}
		function Tc(a, b, c, d, e, f$2) {
			if (null === a || a.nativeEvent !== f$2) return a = {
				blockedOn: b,
				domEventName: c,
				eventSystemFlags: d,
				nativeEvent: f$2,
				targetContainers: [e]
			}, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
			a.eventSystemFlags |= d;
			b = a.targetContainers;
			null !== e && -1 === b.indexOf(e) && b.push(e);
			return a;
		}
		function Uc(a, b, c, d, e) {
			switch (b) {
				case "focusin": return Lc = Tc(Lc, a, b, c, d, e), !0;
				case "dragenter": return Mc = Tc(Mc, a, b, c, d, e), !0;
				case "mouseover": return Nc = Tc(Nc, a, b, c, d, e), !0;
				case "pointerover":
					var f$2 = e.pointerId;
					Oc.set(f$2, Tc(Oc.get(f$2) || null, a, b, c, d, e));
					return !0;
				case "gotpointercapture": return f$2 = e.pointerId, Pc.set(f$2, Tc(Pc.get(f$2) || null, a, b, c, d, e)), !0;
			}
			return !1;
		}
		function Vc(a) {
			var b = Wc(a.target);
			if (null !== b) {
				var c = Vb(b);
				if (null !== c) {
					if (b = c.tag, 13 === b) {
						if (b = Wb(c), null !== b) {
							a.blockedOn = b;
							Ic(a.priority, function() {
								Gc(c);
							});
							return;
						}
					} else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
						a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
						return;
					}
				}
			}
			a.blockedOn = null;
		}
		function Xc(a) {
			if (null !== a.blockedOn) return !1;
			for (var b = a.targetContainers; 0 < b.length;) {
				var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
				if (null === c) {
					c = a.nativeEvent;
					var d = new c.constructor(c.type, c);
					wb = d;
					c.target.dispatchEvent(d);
					wb = null;
				} else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, !1;
				b.shift();
			}
			return !0;
		}
		function Zc(a, b, c) {
			Xc(a) && c.delete(b);
		}
		function $c() {
			Jc = !1;
			null !== Lc && Xc(Lc) && (Lc = null);
			null !== Mc && Xc(Mc) && (Mc = null);
			null !== Nc && Xc(Nc) && (Nc = null);
			Oc.forEach(Zc);
			Pc.forEach(Zc);
		}
		function ad(a, b) {
			a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = !0, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
		}
		function bd(a) {
			function b(b$1) {
				return ad(b$1, a);
			}
			if (0 < Kc.length) {
				ad(Kc[0], a);
				for (var c = 1; c < Kc.length; c++) {
					var d = Kc[c];
					d.blockedOn === a && (d.blockedOn = null);
				}
			}
			null !== Lc && ad(Lc, a);
			null !== Mc && ad(Mc, a);
			null !== Nc && ad(Nc, a);
			Oc.forEach(b);
			Pc.forEach(b);
			for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
			for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn);) Vc(c), null === c.blockedOn && Qc.shift();
		}
		var cd = ua.ReactCurrentBatchConfig, dd = !0;
		function ed(a, b, c, d) {
			var e = C, f$2 = cd.transition;
			cd.transition = null;
			try {
				C = 1, fd$1(a, b, c, d);
			} finally {
				C = e, cd.transition = f$2;
			}
		}
		function gd(a, b, c, d) {
			var e = C, f$2 = cd.transition;
			cd.transition = null;
			try {
				C = 4, fd$1(a, b, c, d);
			} finally {
				C = e, cd.transition = f$2;
			}
		}
		function fd$1(a, b, c, d) {
			if (dd) {
				var e = Yc(a, b, c, d);
				if (null === e) hd(a, b, d, id, c), Sc(a, d);
				else if (Uc(e, a, b, c, d)) d.stopPropagation();
				else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
					for (; null !== e;) {
						var f$2 = Cb(e);
						null !== f$2 && Ec(f$2);
						f$2 = Yc(a, b, c, d);
						null === f$2 && hd(a, b, d, id, c);
						if (f$2 === e) break;
						e = f$2;
					}
					null !== e && d.stopPropagation();
				} else hd(a, b, d, null, c);
			}
		}
		var id = null;
		function Yc(a, b, c, d) {
			id = null;
			a = xb(d);
			a = Wc(a);
			if (null !== a) if (b = Vb(a), null === b) a = null;
			else if (c = b.tag, 13 === c) {
				a = Wb(b);
				if (null !== a) return a;
				a = null;
			} else if (3 === c) {
				if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
				a = null;
			} else b !== a && (a = null);
			id = a;
			return null;
		}
		function jd(a) {
			switch (a) {
				case "cancel":
				case "click":
				case "close":
				case "contextmenu":
				case "copy":
				case "cut":
				case "auxclick":
				case "dblclick":
				case "dragend":
				case "dragstart":
				case "drop":
				case "focusin":
				case "focusout":
				case "input":
				case "invalid":
				case "keydown":
				case "keypress":
				case "keyup":
				case "mousedown":
				case "mouseup":
				case "paste":
				case "pause":
				case "play":
				case "pointercancel":
				case "pointerdown":
				case "pointerup":
				case "ratechange":
				case "reset":
				case "resize":
				case "seeked":
				case "submit":
				case "touchcancel":
				case "touchend":
				case "touchstart":
				case "volumechange":
				case "change":
				case "selectionchange":
				case "textInput":
				case "compositionstart":
				case "compositionend":
				case "compositionupdate":
				case "beforeblur":
				case "afterblur":
				case "beforeinput":
				case "blur":
				case "fullscreenchange":
				case "focus":
				case "hashchange":
				case "popstate":
				case "select":
				case "selectstart": return 1;
				case "drag":
				case "dragenter":
				case "dragexit":
				case "dragleave":
				case "dragover":
				case "mousemove":
				case "mouseout":
				case "mouseover":
				case "pointermove":
				case "pointerout":
				case "pointerover":
				case "scroll":
				case "toggle":
				case "touchmove":
				case "wheel":
				case "mouseenter":
				case "mouseleave":
				case "pointerenter":
				case "pointerleave": return 4;
				case "message": switch (ec$1()) {
					case fc: return 1;
					case gc: return 4;
					case hc:
					case ic: return 16;
					case jc: return 536870912;
					default: return 16;
				}
				default: return 16;
			}
		}
		var kd = null, ld = null, md = null;
		function nd() {
			if (md) return md;
			var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f$2 = e.length;
			for (a = 0; a < c && b[a] === e[a]; a++);
			var g$1 = c - a;
			for (d = 1; d <= g$1 && b[c - d] === e[f$2 - d]; d++);
			return md = e.slice(a, 1 < d ? 1 - d : void 0);
		}
		function od(a) {
			var b = a.keyCode;
			"charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
			10 === a && (a = 13);
			return 32 <= a || 13 === a ? a : 0;
		}
		function pd() {
			return !0;
		}
		function qd() {
			return !1;
		}
		function rd(a) {
			function b(b$1, d, e, f$2, g$1) {
				this._reactName = b$1;
				this._targetInst = e;
				this.type = d;
				this.nativeEvent = f$2;
				this.target = g$1;
				this.currentTarget = null;
				for (var c in a) a.hasOwnProperty(c) && (b$1 = a[c], this[c] = b$1 ? b$1(f$2) : f$2[c]);
				this.isDefaultPrevented = (null != f$2.defaultPrevented ? f$2.defaultPrevented : !1 === f$2.returnValue) ? pd : qd;
				this.isPropagationStopped = qd;
				return this;
			}
			A(b.prototype, {
				preventDefault: function() {
					this.defaultPrevented = !0;
					var a$1 = this.nativeEvent;
					a$1 && (a$1.preventDefault ? a$1.preventDefault() : "unknown" !== typeof a$1.returnValue && (a$1.returnValue = !1), this.isDefaultPrevented = pd);
				},
				stopPropagation: function() {
					var a$1 = this.nativeEvent;
					a$1 && (a$1.stopPropagation ? a$1.stopPropagation() : "unknown" !== typeof a$1.cancelBubble && (a$1.cancelBubble = !0), this.isPropagationStopped = pd);
				},
				persist: function() {},
				isPersistent: pd
			});
			return b;
		}
		var sd = {
			eventPhase: 0,
			bubbles: 0,
			cancelable: 0,
			timeStamp: function(a) {
				return a.timeStamp || Date.now();
			},
			defaultPrevented: 0,
			isTrusted: 0
		}, td$1 = rd(sd), ud = A({}, sd, {
			view: 0,
			detail: 0
		}), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, {
			screenX: 0,
			screenY: 0,
			clientX: 0,
			clientY: 0,
			pageX: 0,
			pageY: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			getModifierState: zd,
			button: 0,
			buttons: 0,
			relatedTarget: function(a) {
				return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
			},
			movementX: function(a) {
				if ("movementX" in a) return a.movementX;
				a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
				return wd;
			},
			movementY: function(a) {
				return "movementY" in a ? a.movementY : xd;
			}
		}), Bd = rd(Ad), Dd = rd(A({}, Ad, { dataTransfer: 0 })), Fd = rd(A({}, ud, { relatedTarget: 0 })), Hd = rd(A({}, sd, {
			animationName: 0,
			elapsedTime: 0,
			pseudoElement: 0
		})), Jd = rd(A({}, sd, { clipboardData: function(a) {
			return "clipboardData" in a ? a.clipboardData : window.clipboardData;
		} })), Ld = rd(A({}, sd, { data: 0 })), Md = {
			Esc: "Escape",
			Spacebar: " ",
			Left: "ArrowLeft",
			Up: "ArrowUp",
			Right: "ArrowRight",
			Down: "ArrowDown",
			Del: "Delete",
			Win: "OS",
			Menu: "ContextMenu",
			Apps: "ContextMenu",
			Scroll: "ScrollLock",
			MozPrintableKey: "Unidentified"
		}, Nd = {
			8: "Backspace",
			9: "Tab",
			12: "Clear",
			13: "Enter",
			16: "Shift",
			17: "Control",
			18: "Alt",
			19: "Pause",
			20: "CapsLock",
			27: "Escape",
			32: " ",
			33: "PageUp",
			34: "PageDown",
			35: "End",
			36: "Home",
			37: "ArrowLeft",
			38: "ArrowUp",
			39: "ArrowRight",
			40: "ArrowDown",
			45: "Insert",
			46: "Delete",
			112: "F1",
			113: "F2",
			114: "F3",
			115: "F4",
			116: "F5",
			117: "F6",
			118: "F7",
			119: "F8",
			120: "F9",
			121: "F10",
			122: "F11",
			123: "F12",
			144: "NumLock",
			145: "ScrollLock",
			224: "Meta"
		}, Od = {
			Alt: "altKey",
			Control: "ctrlKey",
			Meta: "metaKey",
			Shift: "shiftKey"
		};
		function Pd(a) {
			var b = this.nativeEvent;
			return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : !1;
		}
		function zd() {
			return Pd;
		}
		var Rd = rd(A({}, ud, {
			key: function(a) {
				if (a.key) {
					var b = Md[a.key] || a.key;
					if ("Unidentified" !== b) return b;
				}
				return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
			},
			code: 0,
			location: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			repeat: 0,
			locale: 0,
			getModifierState: zd,
			charCode: function(a) {
				return "keypress" === a.type ? od(a) : 0;
			},
			keyCode: function(a) {
				return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
			},
			which: function(a) {
				return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
			}
		})), Td = rd(A({}, Ad, {
			pointerId: 0,
			width: 0,
			height: 0,
			pressure: 0,
			tangentialPressure: 0,
			tiltX: 0,
			tiltY: 0,
			twist: 0,
			pointerType: 0,
			isPrimary: 0
		})), Vd = rd(A({}, ud, {
			touches: 0,
			targetTouches: 0,
			changedTouches: 0,
			altKey: 0,
			metaKey: 0,
			ctrlKey: 0,
			shiftKey: 0,
			getModifierState: zd
		})), Xd = rd(A({}, sd, {
			propertyName: 0,
			elapsedTime: 0,
			pseudoElement: 0
		})), Zd = rd(A({}, Ad, {
			deltaX: function(a) {
				return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
			},
			deltaY: function(a) {
				return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
			},
			deltaZ: 0,
			deltaMode: 0
		})), $d = [
			9,
			13,
			27,
			32
		], ae = ia && "CompositionEvent" in window, be = null;
		ia && "documentMode" in document && (be = document.documentMode);
		var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = !1;
		function ge(a, b) {
			switch (a) {
				case "keyup": return -1 !== $d.indexOf(b.keyCode);
				case "keydown": return 229 !== b.keyCode;
				case "keypress":
				case "mousedown":
				case "focusout": return !0;
				default: return !1;
			}
		}
		function he(a) {
			a = a.detail;
			return "object" === typeof a && "data" in a ? a.data : null;
		}
		var ie = !1;
		function je(a, b) {
			switch (a) {
				case "compositionend": return he(b);
				case "keypress":
					if (32 !== b.which) return null;
					fe = !0;
					return ee;
				case "textInput": return a = b.data, a === ee && fe ? null : a;
				default: return null;
			}
		}
		function ke(a, b) {
			if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = !1, a) : null;
			switch (a) {
				case "paste": return null;
				case "keypress":
					if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
						if (b.char && 1 < b.char.length) return b.char;
						if (b.which) return String.fromCharCode(b.which);
					}
					return null;
				case "compositionend": return de && "ko" !== b.locale ? null : b.data;
				default: return null;
			}
		}
		var le = {
			color: !0,
			date: !0,
			datetime: !0,
			"datetime-local": !0,
			email: !0,
			month: !0,
			number: !0,
			password: !0,
			range: !0,
			search: !0,
			tel: !0,
			text: !0,
			time: !0,
			url: !0,
			week: !0
		};
		function me(a) {
			var b = a && a.nodeName && a.nodeName.toLowerCase();
			return "input" === b ? !!le[a.type] : "textarea" === b ? !0 : !1;
		}
		function ne(a, b, c, d) {
			Eb(d);
			b = oe(b, "onChange");
			0 < b.length && (c = new td$1("onChange", "change", null, c, d), a.push({
				event: c,
				listeners: b
			}));
		}
		var pe = null, qe = null;
		function re(a) {
			se(a, 0);
		}
		function te(a) {
			if (Wa(ue(a))) return a;
		}
		function ve(a, b) {
			if ("change" === a) return b;
		}
		var we = !1;
		if (ia) {
			var xe;
			if (ia) {
				var ye = "oninput" in document;
				if (!ye) {
					var ze = document.createElement("div");
					ze.setAttribute("oninput", "return;");
					ye = "function" === typeof ze.oninput;
				}
				xe = ye;
			} else xe = !1;
			we = xe && (!document.documentMode || 9 < document.documentMode);
		}
		function Ae() {
			pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
		}
		function Be(a) {
			if ("value" === a.propertyName && te(qe)) {
				var b = [];
				ne(b, qe, a, xb(a));
				Jb(re, b);
			}
		}
		function Ce(a, b, c) {
			"focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
		}
		function De(a) {
			if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
		}
		function Ee(a, b) {
			if ("click" === a) return te(b);
		}
		function Fe(a, b) {
			if ("input" === a || "change" === a) return te(b);
		}
		function Ge(a, b) {
			return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
		}
		var He = "function" === typeof Object.is ? Object.is : Ge;
		function Ie(a, b) {
			if (He(a, b)) return !0;
			if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
			var c = Object.keys(a), d = Object.keys(b);
			if (c.length !== d.length) return !1;
			for (d = 0; d < c.length; d++) {
				var e = c[d];
				if (!ja.call(b, e) || !He(a[e], b[e])) return !1;
			}
			return !0;
		}
		function Je(a) {
			for (; a && a.firstChild;) a = a.firstChild;
			return a;
		}
		function Ke(a, b) {
			var c = Je(a);
			a = 0;
			for (var d; c;) {
				if (3 === c.nodeType) {
					d = a + c.textContent.length;
					if (a <= b && d >= b) return {
						node: c,
						offset: b - a
					};
					a = d;
				}
				a: {
					for (; c;) {
						if (c.nextSibling) {
							c = c.nextSibling;
							break a;
						}
						c = c.parentNode;
					}
					c = void 0;
				}
				c = Je(c);
			}
		}
		function Le(a, b) {
			return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
		}
		function Me() {
			for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement;) {
				try {
					var c = "string" === typeof b.contentWindow.location.href;
				} catch (d) {
					c = !1;
				}
				if (c) a = b.contentWindow;
				else break;
				b = Xa(a.document);
			}
			return b;
		}
		function Ne(a) {
			var b = a && a.nodeName && a.nodeName.toLowerCase();
			return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
		}
		function Oe(a) {
			var b = Me(), c = a.focusedElem, d = a.selectionRange;
			if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
				if (null !== d && Ne(c)) {
					if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
					else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
						a = a.getSelection();
						var e = c.textContent.length, f$2 = Math.min(d.start, e);
						d = void 0 === d.end ? f$2 : Math.min(d.end, e);
						!a.extend && f$2 > d && (e = d, d = f$2, f$2 = e);
						e = Ke(c, f$2);
						var g$1 = Ke(c, d);
						e && g$1 && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g$1.node || a.focusOffset !== g$1.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f$2 > d ? (a.addRange(b), a.extend(g$1.node, g$1.offset)) : (b.setEnd(g$1.node, g$1.offset), a.addRange(b)));
					}
				}
				b = [];
				for (a = c; a = a.parentNode;) 1 === a.nodeType && b.push({
					element: a,
					left: a.scrollLeft,
					top: a.scrollTop
				});
				"function" === typeof c.focus && c.focus();
				for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
			}
		}
		var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = !1;
		function Ue(a, b, c) {
			var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
			Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = {
				start: d.selectionStart,
				end: d.selectionEnd
			} : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = {
				anchorNode: d.anchorNode,
				anchorOffset: d.anchorOffset,
				focusNode: d.focusNode,
				focusOffset: d.focusOffset
			}), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td$1("onSelect", "select", null, b, c), a.push({
				event: b,
				listeners: d
			}), b.target = Qe)));
		}
		function Ve(a, b) {
			var c = {};
			c[a.toLowerCase()] = b.toLowerCase();
			c["Webkit" + a] = "webkit" + b;
			c["Moz" + a] = "moz" + b;
			return c;
		}
		var We = {
			animationend: Ve("Animation", "AnimationEnd"),
			animationiteration: Ve("Animation", "AnimationIteration"),
			animationstart: Ve("Animation", "AnimationStart"),
			transitionend: Ve("Transition", "TransitionEnd")
		}, Xe = {}, Ye = {};
		ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
		function Ze(a) {
			if (Xe[a]) return Xe[a];
			if (!We[a]) return a;
			var b = We[a], c;
			for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
			return a;
		}
		var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
		function ff(a, b) {
			df.set(a, b);
			fa(b, [a]);
		}
		for (var gf = 0; gf < ef.length; gf++) {
			var hf = ef[gf];
			ff(hf.toLowerCase(), "on" + (hf[0].toUpperCase() + hf.slice(1)));
		}
		ff($e, "onAnimationEnd");
		ff(af, "onAnimationIteration");
		ff(bf, "onAnimationStart");
		ff("dblclick", "onDoubleClick");
		ff("focusin", "onFocus");
		ff("focusout", "onBlur");
		ff(cf, "onTransitionEnd");
		ha("onMouseEnter", ["mouseout", "mouseover"]);
		ha("onMouseLeave", ["mouseout", "mouseover"]);
		ha("onPointerEnter", ["pointerout", "pointerover"]);
		ha("onPointerLeave", ["pointerout", "pointerover"]);
		fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
		fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
		fa("onBeforeInput", [
			"compositionend",
			"keypress",
			"textInput",
			"paste"
		]);
		fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
		fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
		fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
		var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
		function nf(a, b, c) {
			var d = a.type || "unknown-event";
			a.currentTarget = c;
			Ub(d, b, void 0, a);
			a.currentTarget = null;
		}
		function se(a, b) {
			b = 0 !== (b & 4);
			for (var c = 0; c < a.length; c++) {
				var d = a[c], e = d.event;
				d = d.listeners;
				a: {
					var f$2 = void 0;
					if (b) for (var g$1 = d.length - 1; 0 <= g$1; g$1--) {
						var h$1 = d[g$1], k$2 = h$1.instance, l$3 = h$1.currentTarget;
						h$1 = h$1.listener;
						if (k$2 !== f$2 && e.isPropagationStopped()) break a;
						nf(e, h$1, l$3);
						f$2 = k$2;
					}
					else for (g$1 = 0; g$1 < d.length; g$1++) {
						h$1 = d[g$1];
						k$2 = h$1.instance;
						l$3 = h$1.currentTarget;
						h$1 = h$1.listener;
						if (k$2 !== f$2 && e.isPropagationStopped()) break a;
						nf(e, h$1, l$3);
						f$2 = k$2;
					}
				}
			}
			if (Qb) throw a = Rb, Qb = !1, Rb = null, a;
		}
		function D(a, b) {
			var c = b[of];
			void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
			var d = a + "__bubble";
			c.has(d) || (pf(b, a, 2, !1), c.add(d));
		}
		function qf(a, b, c) {
			var d = 0;
			b && (d |= 4);
			pf(c, a, d, b);
		}
		var rf = "_reactListening" + Math.random().toString(36).slice(2);
		function sf(a) {
			if (!a[rf]) {
				a[rf] = !0;
				da.forEach(function(b$1) {
					"selectionchange" !== b$1 && (mf.has(b$1) || qf(b$1, !1, a), qf(b$1, !0, a));
				});
				var b = 9 === a.nodeType ? a : a.ownerDocument;
				null === b || b[rf] || (b[rf] = !0, qf("selectionchange", !1, b));
			}
		}
		function pf(a, b, c, d) {
			switch (jd(b)) {
				case 1:
					var e = ed;
					break;
				case 4:
					e = gd;
					break;
				default: e = fd$1;
			}
			c = e.bind(null, b, c, a);
			e = void 0;
			!Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = !0);
			d ? void 0 !== e ? a.addEventListener(b, c, {
				capture: !0,
				passive: e
			}) : a.addEventListener(b, c, !0) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, !1);
		}
		function hd(a, b, c, d, e) {
			var f$2 = d;
			if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (;;) {
				if (null === d) return;
				var g$1 = d.tag;
				if (3 === g$1 || 4 === g$1) {
					var h$1 = d.stateNode.containerInfo;
					if (h$1 === e || 8 === h$1.nodeType && h$1.parentNode === e) break;
					if (4 === g$1) for (g$1 = d.return; null !== g$1;) {
						var k$2 = g$1.tag;
						if (3 === k$2 || 4 === k$2) {
							if (k$2 = g$1.stateNode.containerInfo, k$2 === e || 8 === k$2.nodeType && k$2.parentNode === e) return;
						}
						g$1 = g$1.return;
					}
					for (; null !== h$1;) {
						g$1 = Wc(h$1);
						if (null === g$1) return;
						k$2 = g$1.tag;
						if (5 === k$2 || 6 === k$2) {
							d = f$2 = g$1;
							continue a;
						}
						h$1 = h$1.parentNode;
					}
				}
				d = d.return;
			}
			Jb(function() {
				var d$1 = f$2, e$1 = xb(c), g$2 = [];
				a: {
					var h$2 = df.get(a);
					if (void 0 !== h$2) {
						var k$3 = td$1, n$2 = a;
						switch (a) {
							case "keypress": if (0 === od(c)) break a;
							case "keydown":
							case "keyup":
								k$3 = Rd;
								break;
							case "focusin":
								n$2 = "focus";
								k$3 = Fd;
								break;
							case "focusout":
								n$2 = "blur";
								k$3 = Fd;
								break;
							case "beforeblur":
							case "afterblur":
								k$3 = Fd;
								break;
							case "click": if (2 === c.button) break a;
							case "auxclick":
							case "dblclick":
							case "mousedown":
							case "mousemove":
							case "mouseup":
							case "mouseout":
							case "mouseover":
							case "contextmenu":
								k$3 = Bd;
								break;
							case "drag":
							case "dragend":
							case "dragenter":
							case "dragexit":
							case "dragleave":
							case "dragover":
							case "dragstart":
							case "drop":
								k$3 = Dd;
								break;
							case "touchcancel":
							case "touchend":
							case "touchmove":
							case "touchstart":
								k$3 = Vd;
								break;
							case $e:
							case af:
							case bf:
								k$3 = Hd;
								break;
							case cf:
								k$3 = Xd;
								break;
							case "scroll":
								k$3 = vd;
								break;
							case "wheel":
								k$3 = Zd;
								break;
							case "copy":
							case "cut":
							case "paste":
								k$3 = Jd;
								break;
							case "gotpointercapture":
							case "lostpointercapture":
							case "pointercancel":
							case "pointerdown":
							case "pointermove":
							case "pointerout":
							case "pointerover":
							case "pointerup": k$3 = Td;
						}
						var t$2 = 0 !== (b & 4), J$2 = !t$2 && "scroll" === a, x$2 = t$2 ? null !== h$2 ? h$2 + "Capture" : null : h$2;
						t$2 = [];
						for (var w$1 = d$1, u$2; null !== w$1;) {
							u$2 = w$1;
							var F$2 = u$2.stateNode;
							5 === u$2.tag && null !== F$2 && (u$2 = F$2, null !== x$2 && (F$2 = Kb(w$1, x$2), null != F$2 && t$2.push(tf(w$1, F$2, u$2))));
							if (J$2) break;
							w$1 = w$1.return;
						}
						0 < t$2.length && (h$2 = new k$3(h$2, n$2, null, c, e$1), g$2.push({
							event: h$2,
							listeners: t$2
						}));
					}
				}
				if (0 === (b & 7)) {
					a: {
						h$2 = "mouseover" === a || "pointerover" === a;
						k$3 = "mouseout" === a || "pointerout" === a;
						if (h$2 && c !== wb && (n$2 = c.relatedTarget || c.fromElement) && (Wc(n$2) || n$2[uf])) break a;
						if (k$3 || h$2) {
							h$2 = e$1.window === e$1 ? e$1 : (h$2 = e$1.ownerDocument) ? h$2.defaultView || h$2.parentWindow : window;
							if (k$3) {
								if (n$2 = c.relatedTarget || c.toElement, k$3 = d$1, n$2 = n$2 ? Wc(n$2) : null, null !== n$2 && (J$2 = Vb(n$2), n$2 !== J$2 || 5 !== n$2.tag && 6 !== n$2.tag)) n$2 = null;
							} else k$3 = null, n$2 = d$1;
							if (k$3 !== n$2) {
								t$2 = Bd;
								F$2 = "onMouseLeave";
								x$2 = "onMouseEnter";
								w$1 = "mouse";
								if ("pointerout" === a || "pointerover" === a) t$2 = Td, F$2 = "onPointerLeave", x$2 = "onPointerEnter", w$1 = "pointer";
								J$2 = null == k$3 ? h$2 : ue(k$3);
								u$2 = null == n$2 ? h$2 : ue(n$2);
								h$2 = new t$2(F$2, w$1 + "leave", k$3, c, e$1);
								h$2.target = J$2;
								h$2.relatedTarget = u$2;
								F$2 = null;
								Wc(e$1) === d$1 && (t$2 = new t$2(x$2, w$1 + "enter", n$2, c, e$1), t$2.target = u$2, t$2.relatedTarget = J$2, F$2 = t$2);
								J$2 = F$2;
								if (k$3 && n$2) b: {
									t$2 = k$3;
									x$2 = n$2;
									w$1 = 0;
									for (u$2 = t$2; u$2; u$2 = vf(u$2)) w$1++;
									u$2 = 0;
									for (F$2 = x$2; F$2; F$2 = vf(F$2)) u$2++;
									for (; 0 < w$1 - u$2;) t$2 = vf(t$2), w$1--;
									for (; 0 < u$2 - w$1;) x$2 = vf(x$2), u$2--;
									for (; w$1--;) {
										if (t$2 === x$2 || null !== x$2 && t$2 === x$2.alternate) break b;
										t$2 = vf(t$2);
										x$2 = vf(x$2);
									}
									t$2 = null;
								}
								else t$2 = null;
								null !== k$3 && wf(g$2, h$2, k$3, t$2, !1);
								null !== n$2 && null !== J$2 && wf(g$2, J$2, n$2, t$2, !0);
							}
						}
					}
					a: {
						h$2 = d$1 ? ue(d$1) : window;
						k$3 = h$2.nodeName && h$2.nodeName.toLowerCase();
						if ("select" === k$3 || "input" === k$3 && "file" === h$2.type) var na = ve;
						else if (me(h$2)) if (we) na = Fe;
						else {
							na = De;
							var xa = Ce;
						}
						else (k$3 = h$2.nodeName) && "input" === k$3.toLowerCase() && ("checkbox" === h$2.type || "radio" === h$2.type) && (na = Ee);
						if (na && (na = na(a, d$1))) {
							ne(g$2, na, c, e$1);
							break a;
						}
						xa && xa(a, h$2, d$1);
						"focusout" === a && (xa = h$2._wrapperState) && xa.controlled && "number" === h$2.type && cb(h$2, "number", h$2.value);
					}
					xa = d$1 ? ue(d$1) : window;
					switch (a) {
						case "focusin":
							if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d$1, Se = null;
							break;
						case "focusout":
							Se = Re = Qe = null;
							break;
						case "mousedown":
							Te = !0;
							break;
						case "contextmenu":
						case "mouseup":
						case "dragend":
							Te = !1;
							Ue(g$2, c, e$1);
							break;
						case "selectionchange": if (Pe) break;
						case "keydown":
						case "keyup": Ue(g$2, c, e$1);
					}
					var $a;
					if (ae) b: {
						switch (a) {
							case "compositionstart":
								var ba = "onCompositionStart";
								break b;
							case "compositionend":
								ba = "onCompositionEnd";
								break b;
							case "compositionupdate":
								ba = "onCompositionUpdate";
								break b;
						}
						ba = void 0;
					}
					else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
					ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e$1, ld = "value" in kd ? kd.value : kd.textContent, ie = !0)), xa = oe(d$1, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e$1), g$2.push({
						event: ba,
						listeners: xa
					}), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
					if ($a = ce ? je(a, c) : ke(a, c)) d$1 = oe(d$1, "onBeforeInput"), 0 < d$1.length && (e$1 = new Ld("onBeforeInput", "beforeinput", null, c, e$1), g$2.push({
						event: e$1,
						listeners: d$1
					}), e$1.data = $a);
				}
				se(g$2, b);
			});
		}
		function tf(a, b, c) {
			return {
				instance: a,
				listener: b,
				currentTarget: c
			};
		}
		function oe(a, b) {
			for (var c = b + "Capture", d = []; null !== a;) {
				var e = a, f$2 = e.stateNode;
				5 === e.tag && null !== f$2 && (e = f$2, f$2 = Kb(a, c), null != f$2 && d.unshift(tf(a, f$2, e)), f$2 = Kb(a, b), null != f$2 && d.push(tf(a, f$2, e)));
				a = a.return;
			}
			return d;
		}
		function vf(a) {
			if (null === a) return null;
			do
				a = a.return;
			while (a && 5 !== a.tag);
			return a ? a : null;
		}
		function wf(a, b, c, d, e) {
			for (var f$2 = b._reactName, g$1 = []; null !== c && c !== d;) {
				var h$1 = c, k$2 = h$1.alternate, l$3 = h$1.stateNode;
				if (null !== k$2 && k$2 === d) break;
				5 === h$1.tag && null !== l$3 && (h$1 = l$3, e ? (k$2 = Kb(c, f$2), null != k$2 && g$1.unshift(tf(c, k$2, h$1))) : e || (k$2 = Kb(c, f$2), null != k$2 && g$1.push(tf(c, k$2, h$1))));
				c = c.return;
			}
			0 !== g$1.length && a.push({
				event: b,
				listeners: g$1
			});
		}
		var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
		function zf(a) {
			return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
		}
		function Af(a, b, c) {
			b = zf(b);
			if (zf(a) !== b && c) throw Error(p$1(425));
		}
		function Bf() {}
		var Cf = null, Df = null;
		function Ef(a, b) {
			return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
		}
		var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
			return Hf.resolve(null).then(a).catch(If);
		} : Ff;
		function If(a) {
			setTimeout(function() {
				throw a;
			});
		}
		function Kf(a, b) {
			var c = b, d = 0;
			do {
				var e = c.nextSibling;
				a.removeChild(c);
				if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
					if (0 === d) {
						a.removeChild(e);
						bd(b);
						return;
					}
					d--;
				} else "$" !== c && "$?" !== c && "$!" !== c || d++;
				c = e;
			} while (c);
			bd(b);
		}
		function Lf(a) {
			for (; null != a; a = a.nextSibling) {
				var b = a.nodeType;
				if (1 === b || 3 === b) break;
				if (8 === b) {
					b = a.data;
					if ("$" === b || "$!" === b || "$?" === b) break;
					if ("/$" === b) return null;
				}
			}
			return a;
		}
		function Mf(a) {
			a = a.previousSibling;
			for (var b = 0; a;) {
				if (8 === a.nodeType) {
					var c = a.data;
					if ("$" === c || "$!" === c || "$?" === c) {
						if (0 === b) return a;
						b--;
					} else "/$" === c && b++;
				}
				a = a.previousSibling;
			}
			return null;
		}
		var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
		function Wc(a) {
			var b = a[Of];
			if (b) return b;
			for (var c = a.parentNode; c;) {
				if (b = c[uf] || c[Of]) {
					c = b.alternate;
					if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a;) {
						if (c = a[Of]) return c;
						a = Mf(a);
					}
					return b;
				}
				a = c;
				c = a.parentNode;
			}
			return null;
		}
		function Cb(a) {
			a = a[Of] || a[uf];
			return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
		}
		function ue(a) {
			if (5 === a.tag || 6 === a.tag) return a.stateNode;
			throw Error(p$1(33));
		}
		function Db(a) {
			return a[Pf] || null;
		}
		var Sf = [], Tf = -1;
		function Uf(a) {
			return { current: a };
		}
		function E(a) {
			0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
		}
		function G(a, b) {
			Tf++;
			Sf[Tf] = a.current;
			a.current = b;
		}
		var Vf = {}, H = Uf(Vf), Wf = Uf(!1), Xf = Vf;
		function Yf(a, b) {
			var c = a.type.contextTypes;
			if (!c) return Vf;
			var d = a.stateNode;
			if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
			var e = {}, f$2;
			for (f$2 in c) e[f$2] = b[f$2];
			d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
			return e;
		}
		function Zf(a) {
			a = a.childContextTypes;
			return null !== a && void 0 !== a;
		}
		function $f() {
			E(Wf);
			E(H);
		}
		function ag(a, b, c) {
			if (H.current !== Vf) throw Error(p$1(168));
			G(H, b);
			G(Wf, c);
		}
		function bg(a, b, c) {
			var d = a.stateNode;
			b = b.childContextTypes;
			if ("function" !== typeof d.getChildContext) return c;
			d = d.getChildContext();
			for (var e in d) if (!(e in b)) throw Error(p$1(108, Ra(a) || "Unknown", e));
			return A({}, c, d);
		}
		function cg(a) {
			a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
			Xf = H.current;
			G(H, a);
			G(Wf, Wf.current);
			return !0;
		}
		function dg(a, b, c) {
			var d = a.stateNode;
			if (!d) throw Error(p$1(169));
			c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
			G(Wf, c);
		}
		var eg = null, fg = !1, gg = !1;
		function hg(a) {
			null === eg ? eg = [a] : eg.push(a);
		}
		function ig(a) {
			fg = !0;
			hg(a);
		}
		function jg() {
			if (!gg && null !== eg) {
				gg = !0;
				var a = 0, b = C;
				try {
					var c = eg;
					for (C = 1; a < c.length; a++) {
						var d = c[a];
						do
							d = d(!0);
						while (null !== d);
					}
					eg = null;
					fg = !1;
				} catch (e) {
					throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
				} finally {
					C = b, gg = !1;
				}
			}
			return null;
		}
		var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
		function tg(a, b) {
			kg[lg++] = ng;
			kg[lg++] = mg;
			mg = a;
			ng = b;
		}
		function ug(a, b, c) {
			og[pg++] = rg;
			og[pg++] = sg;
			og[pg++] = qg;
			qg = a;
			var d = rg;
			a = sg;
			var e = 32 - oc(d) - 1;
			d &= ~(1 << e);
			c += 1;
			var f$2 = 32 - oc(b) + e;
			if (30 < f$2) {
				var g$1 = e - e % 5;
				f$2 = (d & (1 << g$1) - 1).toString(32);
				d >>= g$1;
				e -= g$1;
				rg = 1 << 32 - oc(b) + e | c << e | d;
				sg = f$2 + a;
			} else rg = 1 << f$2 | c << e | d, sg = a;
		}
		function vg(a) {
			null !== a.return && (tg(a, 1), ug(a, 1, 0));
		}
		function wg(a) {
			for (; a === mg;) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
			for (; a === qg;) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
		}
		var xg = null, yg = null, I = !1, zg = null;
		function Ag(a, b) {
			var c = Bg(5, null, null, 0);
			c.elementType = "DELETED";
			c.stateNode = b;
			c.return = a;
			b = a.deletions;
			null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
		}
		function Cg(a, b) {
			switch (a.tag) {
				case 5:
					var c = a.type;
					b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
					return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), !0) : !1;
				case 6: return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, !0) : !1;
				case 13: return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? {
					id: rg,
					overflow: sg
				} : null, a.memoizedState = {
					dehydrated: b,
					treeContext: c,
					retryLane: 1073741824
				}, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, !0) : !1;
				default: return !1;
			}
		}
		function Dg(a) {
			return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
		}
		function Eg(a) {
			if (I) {
				var b = yg;
				if (b) {
					var c = b;
					if (!Cg(a, b)) {
						if (Dg(a)) throw Error(p$1(418));
						b = Lf(c.nextSibling);
						var d = xg;
						b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = !1, xg = a);
					}
				} else {
					if (Dg(a)) throw Error(p$1(418));
					a.flags = a.flags & -4097 | 2;
					I = !1;
					xg = a;
				}
			}
		}
		function Fg(a) {
			for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) a = a.return;
			xg = a;
		}
		function Gg(a) {
			if (a !== xg) return !1;
			if (!I) return Fg(a), I = !0, !1;
			var b;
			(b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
			if (b && (b = yg)) {
				if (Dg(a)) throw Hg(), Error(p$1(418));
				for (; b;) Ag(a, b), b = Lf(b.nextSibling);
			}
			Fg(a);
			if (13 === a.tag) {
				a = a.memoizedState;
				a = null !== a ? a.dehydrated : null;
				if (!a) throw Error(p$1(317));
				a: {
					a = a.nextSibling;
					for (b = 0; a;) {
						if (8 === a.nodeType) {
							var c = a.data;
							if ("/$" === c) {
								if (0 === b) {
									yg = Lf(a.nextSibling);
									break a;
								}
								b--;
							} else "$" !== c && "$!" !== c && "$?" !== c || b++;
						}
						a = a.nextSibling;
					}
					yg = null;
				}
			} else yg = xg ? Lf(a.stateNode.nextSibling) : null;
			return !0;
		}
		function Hg() {
			for (var a = yg; a;) a = Lf(a.nextSibling);
		}
		function Ig() {
			yg = xg = null;
			I = !1;
		}
		function Jg(a) {
			null === zg ? zg = [a] : zg.push(a);
		}
		var Kg = ua.ReactCurrentBatchConfig;
		function Lg(a, b, c) {
			a = c.ref;
			if (null !== a && "function" !== typeof a && "object" !== typeof a) {
				if (c._owner) {
					c = c._owner;
					if (c) {
						if (1 !== c.tag) throw Error(p$1(309));
						var d = c.stateNode;
					}
					if (!d) throw Error(p$1(147, a));
					var e = d, f$2 = "" + a;
					if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f$2) return b.ref;
					b = function(a$1) {
						var b$1 = e.refs;
						null === a$1 ? delete b$1[f$2] : b$1[f$2] = a$1;
					};
					b._stringRef = f$2;
					return b;
				}
				if ("string" !== typeof a) throw Error(p$1(284));
				if (!c._owner) throw Error(p$1(290, a));
			}
			return a;
		}
		function Mg(a, b) {
			a = Object.prototype.toString.call(b);
			throw Error(p$1(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
		}
		function Ng(a) {
			var b = a._init;
			return b(a._payload);
		}
		function Og(a) {
			function b(b$1, c$1) {
				if (a) {
					var d$1 = b$1.deletions;
					null === d$1 ? (b$1.deletions = [c$1], b$1.flags |= 16) : d$1.push(c$1);
				}
			}
			function c(c$1, d$1) {
				if (!a) return null;
				for (; null !== d$1;) b(c$1, d$1), d$1 = d$1.sibling;
				return null;
			}
			function d(a$1, b$1) {
				for (a$1 = /* @__PURE__ */ new Map(); null !== b$1;) null !== b$1.key ? a$1.set(b$1.key, b$1) : a$1.set(b$1.index, b$1), b$1 = b$1.sibling;
				return a$1;
			}
			function e(a$1, b$1) {
				a$1 = Pg(a$1, b$1);
				a$1.index = 0;
				a$1.sibling = null;
				return a$1;
			}
			function f$2(b$1, c$1, d$1) {
				b$1.index = d$1;
				if (!a) return b$1.flags |= 1048576, c$1;
				d$1 = b$1.alternate;
				if (null !== d$1) return d$1 = d$1.index, d$1 < c$1 ? (b$1.flags |= 2, c$1) : d$1;
				b$1.flags |= 2;
				return c$1;
			}
			function g$1(b$1) {
				a && null === b$1.alternate && (b$1.flags |= 2);
				return b$1;
			}
			function h$1(a$1, b$1, c$1, d$1) {
				if (null === b$1 || 6 !== b$1.tag) return b$1 = Qg(c$1, a$1.mode, d$1), b$1.return = a$1, b$1;
				b$1 = e(b$1, c$1);
				b$1.return = a$1;
				return b$1;
			}
			function k$2(a$1, b$1, c$1, d$1) {
				var f$3 = c$1.type;
				if (f$3 === ya) return m$2(a$1, b$1, c$1.props.children, d$1, c$1.key);
				if (null !== b$1 && (b$1.elementType === f$3 || "object" === typeof f$3 && null !== f$3 && f$3.$$typeof === Ha && Ng(f$3) === b$1.type)) return d$1 = e(b$1, c$1.props), d$1.ref = Lg(a$1, b$1, c$1), d$1.return = a$1, d$1;
				d$1 = Rg(c$1.type, c$1.key, c$1.props, null, a$1.mode, d$1);
				d$1.ref = Lg(a$1, b$1, c$1);
				d$1.return = a$1;
				return d$1;
			}
			function l$3(a$1, b$1, c$1, d$1) {
				if (null === b$1 || 4 !== b$1.tag || b$1.stateNode.containerInfo !== c$1.containerInfo || b$1.stateNode.implementation !== c$1.implementation) return b$1 = Sg(c$1, a$1.mode, d$1), b$1.return = a$1, b$1;
				b$1 = e(b$1, c$1.children || []);
				b$1.return = a$1;
				return b$1;
			}
			function m$2(a$1, b$1, c$1, d$1, f$3) {
				if (null === b$1 || 7 !== b$1.tag) return b$1 = Tg(c$1, a$1.mode, d$1, f$3), b$1.return = a$1, b$1;
				b$1 = e(b$1, c$1);
				b$1.return = a$1;
				return b$1;
			}
			function q$3(a$1, b$1, c$1) {
				if ("string" === typeof b$1 && "" !== b$1 || "number" === typeof b$1) return b$1 = Qg("" + b$1, a$1.mode, c$1), b$1.return = a$1, b$1;
				if ("object" === typeof b$1 && null !== b$1) {
					switch (b$1.$$typeof) {
						case va: return c$1 = Rg(b$1.type, b$1.key, b$1.props, null, a$1.mode, c$1), c$1.ref = Lg(a$1, null, b$1), c$1.return = a$1, c$1;
						case wa: return b$1 = Sg(b$1, a$1.mode, c$1), b$1.return = a$1, b$1;
						case Ha:
							var d$1 = b$1._init;
							return q$3(a$1, d$1(b$1._payload), c$1);
					}
					if (eb(b$1) || Ka(b$1)) return b$1 = Tg(b$1, a$1.mode, c$1, null), b$1.return = a$1, b$1;
					Mg(a$1, b$1);
				}
				return null;
			}
			function r$2(a$1, b$1, c$1, d$1) {
				var e$1 = null !== b$1 ? b$1.key : null;
				if ("string" === typeof c$1 && "" !== c$1 || "number" === typeof c$1) return null !== e$1 ? null : h$1(a$1, b$1, "" + c$1, d$1);
				if ("object" === typeof c$1 && null !== c$1) {
					switch (c$1.$$typeof) {
						case va: return c$1.key === e$1 ? k$2(a$1, b$1, c$1, d$1) : null;
						case wa: return c$1.key === e$1 ? l$3(a$1, b$1, c$1, d$1) : null;
						case Ha: return e$1 = c$1._init, r$2(a$1, b$1, e$1(c$1._payload), d$1);
					}
					if (eb(c$1) || Ka(c$1)) return null !== e$1 ? null : m$2(a$1, b$1, c$1, d$1, null);
					Mg(a$1, c$1);
				}
				return null;
			}
			function y$2(a$1, b$1, c$1, d$1, e$1) {
				if ("string" === typeof d$1 && "" !== d$1 || "number" === typeof d$1) return a$1 = a$1.get(c$1) || null, h$1(b$1, a$1, "" + d$1, e$1);
				if ("object" === typeof d$1 && null !== d$1) {
					switch (d$1.$$typeof) {
						case va: return a$1 = a$1.get(null === d$1.key ? c$1 : d$1.key) || null, k$2(b$1, a$1, d$1, e$1);
						case wa: return a$1 = a$1.get(null === d$1.key ? c$1 : d$1.key) || null, l$3(b$1, a$1, d$1, e$1);
						case Ha:
							var f$3 = d$1._init;
							return y$2(a$1, b$1, c$1, f$3(d$1._payload), e$1);
					}
					if (eb(d$1) || Ka(d$1)) return a$1 = a$1.get(c$1) || null, m$2(b$1, a$1, d$1, e$1, null);
					Mg(b$1, d$1);
				}
				return null;
			}
			function n$2(e$1, g$2, h$2, k$3) {
				for (var l$4 = null, m$3 = null, u$2 = g$2, w$1 = g$2 = 0, x$2 = null; null !== u$2 && w$1 < h$2.length; w$1++) {
					u$2.index > w$1 ? (x$2 = u$2, u$2 = null) : x$2 = u$2.sibling;
					var n$3 = r$2(e$1, u$2, h$2[w$1], k$3);
					if (null === n$3) {
						null === u$2 && (u$2 = x$2);
						break;
					}
					a && u$2 && null === n$3.alternate && b(e$1, u$2);
					g$2 = f$2(n$3, g$2, w$1);
					null === m$3 ? l$4 = n$3 : m$3.sibling = n$3;
					m$3 = n$3;
					u$2 = x$2;
				}
				if (w$1 === h$2.length) return c(e$1, u$2), I && tg(e$1, w$1), l$4;
				if (null === u$2) {
					for (; w$1 < h$2.length; w$1++) u$2 = q$3(e$1, h$2[w$1], k$3), null !== u$2 && (g$2 = f$2(u$2, g$2, w$1), null === m$3 ? l$4 = u$2 : m$3.sibling = u$2, m$3 = u$2);
					I && tg(e$1, w$1);
					return l$4;
				}
				for (u$2 = d(e$1, u$2); w$1 < h$2.length; w$1++) x$2 = y$2(u$2, e$1, w$1, h$2[w$1], k$3), null !== x$2 && (a && null !== x$2.alternate && u$2.delete(null === x$2.key ? w$1 : x$2.key), g$2 = f$2(x$2, g$2, w$1), null === m$3 ? l$4 = x$2 : m$3.sibling = x$2, m$3 = x$2);
				a && u$2.forEach(function(a$1) {
					return b(e$1, a$1);
				});
				I && tg(e$1, w$1);
				return l$4;
			}
			function t$2(e$1, g$2, h$2, k$3) {
				var l$4 = Ka(h$2);
				if ("function" !== typeof l$4) throw Error(p$1(150));
				h$2 = l$4.call(h$2);
				if (null == h$2) throw Error(p$1(151));
				for (var u$2 = l$4 = null, m$3 = g$2, w$1 = g$2 = 0, x$2 = null, n$3 = h$2.next(); null !== m$3 && !n$3.done; w$1++, n$3 = h$2.next()) {
					m$3.index > w$1 ? (x$2 = m$3, m$3 = null) : x$2 = m$3.sibling;
					var t$3 = r$2(e$1, m$3, n$3.value, k$3);
					if (null === t$3) {
						null === m$3 && (m$3 = x$2);
						break;
					}
					a && m$3 && null === t$3.alternate && b(e$1, m$3);
					g$2 = f$2(t$3, g$2, w$1);
					null === u$2 ? l$4 = t$3 : u$2.sibling = t$3;
					u$2 = t$3;
					m$3 = x$2;
				}
				if (n$3.done) return c(e$1, m$3), I && tg(e$1, w$1), l$4;
				if (null === m$3) {
					for (; !n$3.done; w$1++, n$3 = h$2.next()) n$3 = q$3(e$1, n$3.value, k$3), null !== n$3 && (g$2 = f$2(n$3, g$2, w$1), null === u$2 ? l$4 = n$3 : u$2.sibling = n$3, u$2 = n$3);
					I && tg(e$1, w$1);
					return l$4;
				}
				for (m$3 = d(e$1, m$3); !n$3.done; w$1++, n$3 = h$2.next()) n$3 = y$2(m$3, e$1, w$1, n$3.value, k$3), null !== n$3 && (a && null !== n$3.alternate && m$3.delete(null === n$3.key ? w$1 : n$3.key), g$2 = f$2(n$3, g$2, w$1), null === u$2 ? l$4 = n$3 : u$2.sibling = n$3, u$2 = n$3);
				a && m$3.forEach(function(a$1) {
					return b(e$1, a$1);
				});
				I && tg(e$1, w$1);
				return l$4;
			}
			function J$2(a$1, d$1, f$3, h$2) {
				"object" === typeof f$3 && null !== f$3 && f$3.type === ya && null === f$3.key && (f$3 = f$3.props.children);
				if ("object" === typeof f$3 && null !== f$3) {
					switch (f$3.$$typeof) {
						case va:
							a: {
								for (var k$3 = f$3.key, l$4 = d$1; null !== l$4;) {
									if (l$4.key === k$3) {
										k$3 = f$3.type;
										if (k$3 === ya) {
											if (7 === l$4.tag) {
												c(a$1, l$4.sibling);
												d$1 = e(l$4, f$3.props.children);
												d$1.return = a$1;
												a$1 = d$1;
												break a;
											}
										} else if (l$4.elementType === k$3 || "object" === typeof k$3 && null !== k$3 && k$3.$$typeof === Ha && Ng(k$3) === l$4.type) {
											c(a$1, l$4.sibling);
											d$1 = e(l$4, f$3.props);
											d$1.ref = Lg(a$1, l$4, f$3);
											d$1.return = a$1;
											a$1 = d$1;
											break a;
										}
										c(a$1, l$4);
										break;
									} else b(a$1, l$4);
									l$4 = l$4.sibling;
								}
								f$3.type === ya ? (d$1 = Tg(f$3.props.children, a$1.mode, h$2, f$3.key), d$1.return = a$1, a$1 = d$1) : (h$2 = Rg(f$3.type, f$3.key, f$3.props, null, a$1.mode, h$2), h$2.ref = Lg(a$1, d$1, f$3), h$2.return = a$1, a$1 = h$2);
							}
							return g$1(a$1);
						case wa:
							a: {
								for (l$4 = f$3.key; null !== d$1;) {
									if (d$1.key === l$4) if (4 === d$1.tag && d$1.stateNode.containerInfo === f$3.containerInfo && d$1.stateNode.implementation === f$3.implementation) {
										c(a$1, d$1.sibling);
										d$1 = e(d$1, f$3.children || []);
										d$1.return = a$1;
										a$1 = d$1;
										break a;
									} else {
										c(a$1, d$1);
										break;
									}
									else b(a$1, d$1);
									d$1 = d$1.sibling;
								}
								d$1 = Sg(f$3, a$1.mode, h$2);
								d$1.return = a$1;
								a$1 = d$1;
							}
							return g$1(a$1);
						case Ha: return l$4 = f$3._init, J$2(a$1, d$1, l$4(f$3._payload), h$2);
					}
					if (eb(f$3)) return n$2(a$1, d$1, f$3, h$2);
					if (Ka(f$3)) return t$2(a$1, d$1, f$3, h$2);
					Mg(a$1, f$3);
				}
				return "string" === typeof f$3 && "" !== f$3 || "number" === typeof f$3 ? (f$3 = "" + f$3, null !== d$1 && 6 === d$1.tag ? (c(a$1, d$1.sibling), d$1 = e(d$1, f$3), d$1.return = a$1, a$1 = d$1) : (c(a$1, d$1), d$1 = Qg(f$3, a$1.mode, h$2), d$1.return = a$1, a$1 = d$1), g$1(a$1)) : c(a$1, d$1);
			}
			return J$2;
		}
		var Ug = Og(!0), Vg = Og(!1), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
		function $g() {
			Zg = Yg = Xg = null;
		}
		function ah(a) {
			var b = Wg.current;
			E(Wg);
			a._currentValue = b;
		}
		function bh(a, b, c) {
			for (; null !== a;) {
				var d = a.alternate;
				(a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
				if (a === c) break;
				a = a.return;
			}
		}
		function ch$1(a, b) {
			Xg = a;
			Zg = Yg = null;
			a = a.dependencies;
			null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = !0), a.firstContext = null);
		}
		function eh(a) {
			var b = a._currentValue;
			if (Zg !== a) if (a = {
				context: a,
				memoizedValue: b,
				next: null
			}, null === Yg) {
				if (null === Xg) throw Error(p$1(308));
				Yg = a;
				Xg.dependencies = {
					lanes: 0,
					firstContext: a
				};
			} else Yg = Yg.next = a;
			return b;
		}
		var fh = null;
		function gh(a) {
			null === fh ? fh = [a] : fh.push(a);
		}
		function hh(a, b, c, d) {
			var e = b.interleaved;
			null === e ? (c.next = c, gh(b)) : (c.next = e.next, e.next = c);
			b.interleaved = c;
			return ih(a, d);
		}
		function ih(a, b) {
			a.lanes |= b;
			var c = a.alternate;
			null !== c && (c.lanes |= b);
			c = a;
			for (a = a.return; null !== a;) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
			return 3 === c.tag ? c.stateNode : null;
		}
		var jh = !1;
		function kh(a) {
			a.updateQueue = {
				baseState: a.memoizedState,
				firstBaseUpdate: null,
				lastBaseUpdate: null,
				shared: {
					pending: null,
					interleaved: null,
					lanes: 0
				},
				effects: null
			};
		}
		function lh(a, b) {
			a = a.updateQueue;
			b.updateQueue === a && (b.updateQueue = {
				baseState: a.baseState,
				firstBaseUpdate: a.firstBaseUpdate,
				lastBaseUpdate: a.lastBaseUpdate,
				shared: a.shared,
				effects: a.effects
			});
		}
		function mh(a, b) {
			return {
				eventTime: a,
				lane: b,
				tag: 0,
				payload: null,
				callback: null,
				next: null
			};
		}
		function nh(a, b, c) {
			var d = a.updateQueue;
			if (null === d) return null;
			d = d.shared;
			if (0 !== (K & 2)) {
				var e = d.pending;
				null === e ? b.next = b : (b.next = e.next, e.next = b);
				d.pending = b;
				return ih(a, c);
			}
			e = d.interleaved;
			null === e ? (b.next = b, gh(d)) : (b.next = e.next, e.next = b);
			d.interleaved = b;
			return ih(a, c);
		}
		function oh(a, b, c) {
			b = b.updateQueue;
			if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
				var d = b.lanes;
				d &= a.pendingLanes;
				c |= d;
				b.lanes = c;
				Cc(a, c);
			}
		}
		function ph(a, b) {
			var c = a.updateQueue, d = a.alternate;
			if (null !== d && (d = d.updateQueue, c === d)) {
				var e = null, f$2 = null;
				c = c.firstBaseUpdate;
				if (null !== c) {
					do {
						var g$1 = {
							eventTime: c.eventTime,
							lane: c.lane,
							tag: c.tag,
							payload: c.payload,
							callback: c.callback,
							next: null
						};
						null === f$2 ? e = f$2 = g$1 : f$2 = f$2.next = g$1;
						c = c.next;
					} while (null !== c);
					null === f$2 ? e = f$2 = b : f$2 = f$2.next = b;
				} else e = f$2 = b;
				c = {
					baseState: d.baseState,
					firstBaseUpdate: e,
					lastBaseUpdate: f$2,
					shared: d.shared,
					effects: d.effects
				};
				a.updateQueue = c;
				return;
			}
			a = c.lastBaseUpdate;
			null === a ? c.firstBaseUpdate = b : a.next = b;
			c.lastBaseUpdate = b;
		}
		function qh(a, b, c, d) {
			var e = a.updateQueue;
			jh = !1;
			var f$2 = e.firstBaseUpdate, g$1 = e.lastBaseUpdate, h$1 = e.shared.pending;
			if (null !== h$1) {
				e.shared.pending = null;
				var k$2 = h$1, l$3 = k$2.next;
				k$2.next = null;
				null === g$1 ? f$2 = l$3 : g$1.next = l$3;
				g$1 = k$2;
				var m$2 = a.alternate;
				null !== m$2 && (m$2 = m$2.updateQueue, h$1 = m$2.lastBaseUpdate, h$1 !== g$1 && (null === h$1 ? m$2.firstBaseUpdate = l$3 : h$1.next = l$3, m$2.lastBaseUpdate = k$2));
			}
			if (null !== f$2) {
				var q$3 = e.baseState;
				g$1 = 0;
				m$2 = l$3 = k$2 = null;
				h$1 = f$2;
				do {
					var r$2 = h$1.lane, y$2 = h$1.eventTime;
					if ((d & r$2) === r$2) {
						null !== m$2 && (m$2 = m$2.next = {
							eventTime: y$2,
							lane: 0,
							tag: h$1.tag,
							payload: h$1.payload,
							callback: h$1.callback,
							next: null
						});
						a: {
							var n$2 = a, t$2 = h$1;
							r$2 = b;
							y$2 = c;
							switch (t$2.tag) {
								case 1:
									n$2 = t$2.payload;
									if ("function" === typeof n$2) {
										q$3 = n$2.call(y$2, q$3, r$2);
										break a;
									}
									q$3 = n$2;
									break a;
								case 3: n$2.flags = n$2.flags & -65537 | 128;
								case 0:
									n$2 = t$2.payload;
									r$2 = "function" === typeof n$2 ? n$2.call(y$2, q$3, r$2) : n$2;
									if (null === r$2 || void 0 === r$2) break a;
									q$3 = A({}, q$3, r$2);
									break a;
								case 2: jh = !0;
							}
						}
						null !== h$1.callback && 0 !== h$1.lane && (a.flags |= 64, r$2 = e.effects, null === r$2 ? e.effects = [h$1] : r$2.push(h$1));
					} else y$2 = {
						eventTime: y$2,
						lane: r$2,
						tag: h$1.tag,
						payload: h$1.payload,
						callback: h$1.callback,
						next: null
					}, null === m$2 ? (l$3 = m$2 = y$2, k$2 = q$3) : m$2 = m$2.next = y$2, g$1 |= r$2;
					h$1 = h$1.next;
					if (null === h$1) if (h$1 = e.shared.pending, null === h$1) break;
					else r$2 = h$1, h$1 = r$2.next, r$2.next = null, e.lastBaseUpdate = r$2, e.shared.pending = null;
				} while (1);
				null === m$2 && (k$2 = q$3);
				e.baseState = k$2;
				e.firstBaseUpdate = l$3;
				e.lastBaseUpdate = m$2;
				b = e.shared.interleaved;
				if (null !== b) {
					e = b;
					do
						g$1 |= e.lane, e = e.next;
					while (e !== b);
				} else null === f$2 && (e.shared.lanes = 0);
				rh |= g$1;
				a.lanes = g$1;
				a.memoizedState = q$3;
			}
		}
		function sh(a, b, c) {
			a = b.effects;
			b.effects = null;
			if (null !== a) for (b = 0; b < a.length; b++) {
				var d = a[b], e = d.callback;
				if (null !== e) {
					d.callback = null;
					d = c;
					if ("function" !== typeof e) throw Error(p$1(191, e));
					e.call(d);
				}
			}
		}
		var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
		function xh(a) {
			if (a === th) throw Error(p$1(174));
			return a;
		}
		function yh(a, b) {
			G(wh, b);
			G(vh, a);
			G(uh, th);
			a = b.nodeType;
			switch (a) {
				case 9:
				case 11:
					b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
					break;
				default: a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
			}
			E(uh);
			G(uh, b);
		}
		function zh$1() {
			E(uh);
			E(vh);
			E(wh);
		}
		function Ah(a) {
			xh(wh.current);
			var b = xh(uh.current);
			var c = lb(b, a.type);
			b !== c && (G(vh, a), G(uh, c));
		}
		function Bh(a) {
			vh.current === a && (E(uh), E(vh));
		}
		var L = Uf(0);
		function Ch(a) {
			for (var b = a; null !== b;) {
				if (13 === b.tag) {
					var c = b.memoizedState;
					if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
				} else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
					if (0 !== (b.flags & 128)) return b;
				} else if (null !== b.child) {
					b.child.return = b;
					b = b.child;
					continue;
				}
				if (b === a) break;
				for (; null === b.sibling;) {
					if (null === b.return || b.return === a) return null;
					b = b.return;
				}
				b.sibling.return = b.return;
				b = b.sibling;
			}
			return null;
		}
		var Dh = [];
		function Eh() {
			for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
			Dh.length = 0;
		}
		var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M = null, N = null, O = null, Ih = !1, Jh = !1, Kh = 0, Lh = 0;
		function P() {
			throw Error(p$1(321));
		}
		function Mh(a, b) {
			if (null === b) return !1;
			for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return !1;
			return !0;
		}
		function Nh(a, b, c, d, e, f$2) {
			Hh = f$2;
			M = b;
			b.memoizedState = null;
			b.updateQueue = null;
			b.lanes = 0;
			Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
			a = c(d, e);
			if (Jh) {
				f$2 = 0;
				do {
					Jh = !1;
					Kh = 0;
					if (25 <= f$2) throw Error(p$1(301));
					f$2 += 1;
					O = N = null;
					b.updateQueue = null;
					Fh.current = Qh;
					a = c(d, e);
				} while (Jh);
			}
			Fh.current = Rh;
			b = null !== N && null !== N.next;
			Hh = 0;
			O = N = M = null;
			Ih = !1;
			if (b) throw Error(p$1(300));
			return a;
		}
		function Sh() {
			var a = 0 !== Kh;
			Kh = 0;
			return a;
		}
		function Th() {
			var a = {
				memoizedState: null,
				baseState: null,
				baseQueue: null,
				queue: null,
				next: null
			};
			null === O ? M.memoizedState = O = a : O = O.next = a;
			return O;
		}
		function Uh() {
			if (null === N) {
				var a = M.alternate;
				a = null !== a ? a.memoizedState : null;
			} else a = N.next;
			var b = null === O ? M.memoizedState : O.next;
			if (null !== b) O = b, N = a;
			else {
				if (null === a) throw Error(p$1(310));
				N = a;
				a = {
					memoizedState: N.memoizedState,
					baseState: N.baseState,
					baseQueue: N.baseQueue,
					queue: N.queue,
					next: null
				};
				null === O ? M.memoizedState = O = a : O = O.next = a;
			}
			return O;
		}
		function Vh(a, b) {
			return "function" === typeof b ? b(a) : b;
		}
		function Wh(a) {
			var b = Uh(), c = b.queue;
			if (null === c) throw Error(p$1(311));
			c.lastRenderedReducer = a;
			var d = N, e = d.baseQueue, f$2 = c.pending;
			if (null !== f$2) {
				if (null !== e) {
					var g$1 = e.next;
					e.next = f$2.next;
					f$2.next = g$1;
				}
				d.baseQueue = e = f$2;
				c.pending = null;
			}
			if (null !== e) {
				f$2 = e.next;
				d = d.baseState;
				var h$1 = g$1 = null, k$2 = null, l$3 = f$2;
				do {
					var m$2 = l$3.lane;
					if ((Hh & m$2) === m$2) null !== k$2 && (k$2 = k$2.next = {
						lane: 0,
						action: l$3.action,
						hasEagerState: l$3.hasEagerState,
						eagerState: l$3.eagerState,
						next: null
					}), d = l$3.hasEagerState ? l$3.eagerState : a(d, l$3.action);
					else {
						var q$3 = {
							lane: m$2,
							action: l$3.action,
							hasEagerState: l$3.hasEagerState,
							eagerState: l$3.eagerState,
							next: null
						};
						null === k$2 ? (h$1 = k$2 = q$3, g$1 = d) : k$2 = k$2.next = q$3;
						M.lanes |= m$2;
						rh |= m$2;
					}
					l$3 = l$3.next;
				} while (null !== l$3 && l$3 !== f$2);
				null === k$2 ? g$1 = d : k$2.next = h$1;
				He(d, b.memoizedState) || (dh = !0);
				b.memoizedState = d;
				b.baseState = g$1;
				b.baseQueue = k$2;
				c.lastRenderedState = d;
			}
			a = c.interleaved;
			if (null !== a) {
				e = a;
				do
					f$2 = e.lane, M.lanes |= f$2, rh |= f$2, e = e.next;
				while (e !== a);
			} else null === e && (c.lanes = 0);
			return [b.memoizedState, c.dispatch];
		}
		function Xh(a) {
			var b = Uh(), c = b.queue;
			if (null === c) throw Error(p$1(311));
			c.lastRenderedReducer = a;
			var d = c.dispatch, e = c.pending, f$2 = b.memoizedState;
			if (null !== e) {
				c.pending = null;
				var g$1 = e = e.next;
				do
					f$2 = a(f$2, g$1.action), g$1 = g$1.next;
				while (g$1 !== e);
				He(f$2, b.memoizedState) || (dh = !0);
				b.memoizedState = f$2;
				null === b.baseQueue && (b.baseState = f$2);
				c.lastRenderedState = f$2;
			}
			return [f$2, d];
		}
		function Yh() {}
		function Zh(a, b) {
			var c = M, d = Uh(), e = b(), f$2 = !He(d.memoizedState, e);
			f$2 && (d.memoizedState = e, dh = !0);
			d = d.queue;
			$h(ai.bind(null, c, d, a), [a]);
			if (d.getSnapshot !== b || f$2 || null !== O && O.memoizedState.tag & 1) {
				c.flags |= 2048;
				bi(9, ci.bind(null, c, d, e, b), void 0, null);
				if (null === Q) throw Error(p$1(349));
				0 !== (Hh & 30) || di(c, b, e);
			}
			return e;
		}
		function di(a, b, c) {
			a.flags |= 16384;
			a = {
				getSnapshot: b,
				value: c
			};
			b = M.updateQueue;
			null === b ? (b = {
				lastEffect: null,
				stores: null
			}, M.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
		}
		function ci(a, b, c, d) {
			b.value = c;
			b.getSnapshot = d;
			ei(b) && fi(a);
		}
		function ai(a, b, c) {
			return c(function() {
				ei(b) && fi(a);
			});
		}
		function ei(a) {
			var b = a.getSnapshot;
			a = a.value;
			try {
				var c = b();
				return !He(a, c);
			} catch (d) {
				return !0;
			}
		}
		function fi(a) {
			var b = ih(a, 1);
			null !== b && gi(b, a, 1, -1);
		}
		function hi(a) {
			var b = Th();
			"function" === typeof a && (a = a());
			b.memoizedState = b.baseState = a;
			a = {
				pending: null,
				interleaved: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Vh,
				lastRenderedState: a
			};
			b.queue = a;
			a = a.dispatch = ii.bind(null, M, a);
			return [b.memoizedState, a];
		}
		function bi(a, b, c, d) {
			a = {
				tag: a,
				create: b,
				destroy: c,
				deps: d,
				next: null
			};
			b = M.updateQueue;
			null === b ? (b = {
				lastEffect: null,
				stores: null
			}, M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
			return a;
		}
		function ji() {
			return Uh().memoizedState;
		}
		function ki(a, b, c, d) {
			var e = Th();
			M.flags |= a;
			e.memoizedState = bi(1 | b, c, void 0, void 0 === d ? null : d);
		}
		function li(a, b, c, d) {
			var e = Uh();
			d = void 0 === d ? null : d;
			var f$2 = void 0;
			if (null !== N) {
				var g$1 = N.memoizedState;
				f$2 = g$1.destroy;
				if (null !== d && Mh(d, g$1.deps)) {
					e.memoizedState = bi(b, c, f$2, d);
					return;
				}
			}
			M.flags |= a;
			e.memoizedState = bi(1 | b, c, f$2, d);
		}
		function mi(a, b) {
			return ki(8390656, 8, a, b);
		}
		function $h(a, b) {
			return li(2048, 8, a, b);
		}
		function ni(a, b) {
			return li(4, 2, a, b);
		}
		function oi(a, b) {
			return li(4, 4, a, b);
		}
		function pi(a, b) {
			if ("function" === typeof b) return a = a(), b(a), function() {
				b(null);
			};
			if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
				b.current = null;
			};
		}
		function qi(a, b, c) {
			c = null !== c && void 0 !== c ? c.concat([a]) : null;
			return li(4, 4, pi.bind(null, b, a), c);
		}
		function ri() {}
		function si(a, b) {
			var c = Uh();
			b = void 0 === b ? null : b;
			var d = c.memoizedState;
			if (null !== d && null !== b && Mh(b, d[1])) return d[0];
			c.memoizedState = [a, b];
			return a;
		}
		function ti(a, b) {
			var c = Uh();
			b = void 0 === b ? null : b;
			var d = c.memoizedState;
			if (null !== d && null !== b && Mh(b, d[1])) return d[0];
			a = a();
			c.memoizedState = [a, b];
			return a;
		}
		function ui(a, b, c) {
			if (0 === (Hh & 21)) return a.baseState && (a.baseState = !1, dh = !0), a.memoizedState = c;
			He(c, b) || (c = yc(), M.lanes |= c, rh |= c, a.baseState = !0);
			return b;
		}
		function vi(a, b) {
			var c = C;
			C = 0 !== c && 4 > c ? c : 4;
			a(!0);
			var d = Gh.transition;
			Gh.transition = {};
			try {
				a(!1), b();
			} finally {
				C = c, Gh.transition = d;
			}
		}
		function wi() {
			return Uh().memoizedState;
		}
		function xi(a, b, c) {
			var d = yi(a);
			c = {
				lane: d,
				action: c,
				hasEagerState: !1,
				eagerState: null,
				next: null
			};
			if (zi(a)) Ai(b, c);
			else if (c = hh(a, b, c, d), null !== c) {
				var e = R();
				gi(c, a, d, e);
				Bi(c, b, d);
			}
		}
		function ii(a, b, c) {
			var d = yi(a), e = {
				lane: d,
				action: c,
				hasEagerState: !1,
				eagerState: null,
				next: null
			};
			if (zi(a)) Ai(b, e);
			else {
				var f$2 = a.alternate;
				if (0 === a.lanes && (null === f$2 || 0 === f$2.lanes) && (f$2 = b.lastRenderedReducer, null !== f$2)) try {
					var g$1 = b.lastRenderedState, h$1 = f$2(g$1, c);
					e.hasEagerState = !0;
					e.eagerState = h$1;
					if (He(h$1, g$1)) {
						var k$2 = b.interleaved;
						null === k$2 ? (e.next = e, gh(b)) : (e.next = k$2.next, k$2.next = e);
						b.interleaved = e;
						return;
					}
				} catch (l$3) {}
				c = hh(a, b, e, d);
				null !== c && (e = R(), gi(c, a, d, e), Bi(c, b, d));
			}
		}
		function zi(a) {
			var b = a.alternate;
			return a === M || null !== b && b === M;
		}
		function Ai(a, b) {
			Jh = Ih = !0;
			var c = a.pending;
			null === c ? b.next = b : (b.next = c.next, c.next = b);
			a.pending = b;
		}
		function Bi(a, b, c) {
			if (0 !== (c & 4194240)) {
				var d = b.lanes;
				d &= a.pendingLanes;
				c |= d;
				b.lanes = c;
				Cc(a, c);
			}
		}
		var Rh = {
			readContext: eh,
			useCallback: P,
			useContext: P,
			useEffect: P,
			useImperativeHandle: P,
			useInsertionEffect: P,
			useLayoutEffect: P,
			useMemo: P,
			useReducer: P,
			useRef: P,
			useState: P,
			useDebugValue: P,
			useDeferredValue: P,
			useTransition: P,
			useMutableSource: P,
			useSyncExternalStore: P,
			useId: P,
			unstable_isNewReconciler: !1
		}, Oh = {
			readContext: eh,
			useCallback: function(a, b) {
				Th().memoizedState = [a, void 0 === b ? null : b];
				return a;
			},
			useContext: eh,
			useEffect: mi,
			useImperativeHandle: function(a, b, c) {
				c = null !== c && void 0 !== c ? c.concat([a]) : null;
				return ki(4194308, 4, pi.bind(null, b, a), c);
			},
			useLayoutEffect: function(a, b) {
				return ki(4194308, 4, a, b);
			},
			useInsertionEffect: function(a, b) {
				return ki(4, 2, a, b);
			},
			useMemo: function(a, b) {
				var c = Th();
				b = void 0 === b ? null : b;
				a = a();
				c.memoizedState = [a, b];
				return a;
			},
			useReducer: function(a, b, c) {
				var d = Th();
				b = void 0 !== c ? c(b) : b;
				d.memoizedState = d.baseState = b;
				a = {
					pending: null,
					interleaved: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: a,
					lastRenderedState: b
				};
				d.queue = a;
				a = a.dispatch = xi.bind(null, M, a);
				return [d.memoizedState, a];
			},
			useRef: function(a) {
				var b = Th();
				a = { current: a };
				return b.memoizedState = a;
			},
			useState: hi,
			useDebugValue: ri,
			useDeferredValue: function(a) {
				return Th().memoizedState = a;
			},
			useTransition: function() {
				var a = hi(!1), b = a[0];
				a = vi.bind(null, a[1]);
				Th().memoizedState = a;
				return [b, a];
			},
			useMutableSource: function() {},
			useSyncExternalStore: function(a, b, c) {
				var d = M, e = Th();
				if (I) {
					if (void 0 === c) throw Error(p$1(407));
					c = c();
				} else {
					c = b();
					if (null === Q) throw Error(p$1(349));
					0 !== (Hh & 30) || di(d, b, c);
				}
				e.memoizedState = c;
				var f$2 = {
					value: c,
					getSnapshot: b
				};
				e.queue = f$2;
				mi(ai.bind(null, d, f$2, a), [a]);
				d.flags |= 2048;
				bi(9, ci.bind(null, d, f$2, c, b), void 0, null);
				return c;
			},
			useId: function() {
				var a = Th(), b = Q.identifierPrefix;
				if (I) {
					var c = sg;
					var d = rg;
					c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
					b = ":" + b + "R" + c;
					c = Kh++;
					0 < c && (b += "H" + c.toString(32));
					b += ":";
				} else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
				return a.memoizedState = b;
			},
			unstable_isNewReconciler: !1
		}, Ph = {
			readContext: eh,
			useCallback: si,
			useContext: eh,
			useEffect: $h,
			useImperativeHandle: qi,
			useInsertionEffect: ni,
			useLayoutEffect: oi,
			useMemo: ti,
			useReducer: Wh,
			useRef: ji,
			useState: function() {
				return Wh(Vh);
			},
			useDebugValue: ri,
			useDeferredValue: function(a) {
				return ui(Uh(), N.memoizedState, a);
			},
			useTransition: function() {
				return [Wh(Vh)[0], Uh().memoizedState];
			},
			useMutableSource: Yh,
			useSyncExternalStore: Zh,
			useId: wi,
			unstable_isNewReconciler: !1
		}, Qh = {
			readContext: eh,
			useCallback: si,
			useContext: eh,
			useEffect: $h,
			useImperativeHandle: qi,
			useInsertionEffect: ni,
			useLayoutEffect: oi,
			useMemo: ti,
			useReducer: Xh,
			useRef: ji,
			useState: function() {
				return Xh(Vh);
			},
			useDebugValue: ri,
			useDeferredValue: function(a) {
				var b = Uh();
				return null === N ? b.memoizedState = a : ui(b, N.memoizedState, a);
			},
			useTransition: function() {
				return [Xh(Vh)[0], Uh().memoizedState];
			},
			useMutableSource: Yh,
			useSyncExternalStore: Zh,
			useId: wi,
			unstable_isNewReconciler: !1
		};
		function Ci(a, b) {
			if (a && a.defaultProps) {
				b = A({}, b);
				a = a.defaultProps;
				for (var c in a) void 0 === b[c] && (b[c] = a[c]);
				return b;
			}
			return b;
		}
		function Di(a, b, c, d) {
			b = a.memoizedState;
			c = c(d, b);
			c = null === c || void 0 === c ? b : A({}, b, c);
			a.memoizedState = c;
			0 === a.lanes && (a.updateQueue.baseState = c);
		}
		var Ei = {
			isMounted: function(a) {
				return (a = a._reactInternals) ? Vb(a) === a : !1;
			},
			enqueueSetState: function(a, b, c) {
				a = a._reactInternals;
				var d = R(), e = yi(a), f$2 = mh(d, e);
				f$2.payload = b;
				void 0 !== c && null !== c && (f$2.callback = c);
				b = nh(a, f$2, e);
				null !== b && (gi(b, a, e, d), oh(b, a, e));
			},
			enqueueReplaceState: function(a, b, c) {
				a = a._reactInternals;
				var d = R(), e = yi(a), f$2 = mh(d, e);
				f$2.tag = 1;
				f$2.payload = b;
				void 0 !== c && null !== c && (f$2.callback = c);
				b = nh(a, f$2, e);
				null !== b && (gi(b, a, e, d), oh(b, a, e));
			},
			enqueueForceUpdate: function(a, b) {
				a = a._reactInternals;
				var c = R(), d = yi(a), e = mh(c, d);
				e.tag = 2;
				void 0 !== b && null !== b && (e.callback = b);
				b = nh(a, e, d);
				null !== b && (gi(b, a, d, c), oh(b, a, d));
			}
		};
		function Fi(a, b, c, d, e, f$2, g$1) {
			a = a.stateNode;
			return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f$2, g$1) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f$2) : !0;
		}
		function Gi(a, b, c) {
			var d = !1, e = Vf;
			var f$2 = b.contextType;
			"object" === typeof f$2 && null !== f$2 ? f$2 = eh(f$2) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f$2 = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
			b = new b(c, f$2);
			a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
			b.updater = Ei;
			a.stateNode = b;
			b._reactInternals = a;
			d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f$2);
			return b;
		}
		function Hi(a, b, c, d) {
			a = b.state;
			"function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
			"function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
			b.state !== a && Ei.enqueueReplaceState(b, b.state, null);
		}
		function Ii(a, b, c, d) {
			var e = a.stateNode;
			e.props = c;
			e.state = a.memoizedState;
			e.refs = {};
			kh(a);
			var f$2 = b.contextType;
			"object" === typeof f$2 && null !== f$2 ? e.context = eh(f$2) : (f$2 = Zf(b) ? Xf : H.current, e.context = Yf(a, f$2));
			e.state = a.memoizedState;
			f$2 = b.getDerivedStateFromProps;
			"function" === typeof f$2 && (Di(a, b, f$2, c), e.state = a.memoizedState);
			"function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c, e, d), e.state = a.memoizedState);
			"function" === typeof e.componentDidMount && (a.flags |= 4194308);
		}
		function Ji(a, b) {
			try {
				var c = "", d = b;
				do
					c += Pa(d), d = d.return;
				while (d);
				var e = c;
			} catch (f$2) {
				e = "\nError generating stack: " + f$2.message + "\n" + f$2.stack;
			}
			return {
				value: a,
				source: b,
				stack: e,
				digest: null
			};
		}
		function Ki(a, b, c) {
			return {
				value: a,
				source: null,
				stack: null != c ? c : null,
				digest: null != b ? b : null
			};
		}
		function Li(a, b) {
			try {
				console.error(b.value);
			} catch (c) {
				setTimeout(function() {
					throw c;
				});
			}
		}
		var Mi = "function" === typeof WeakMap ? WeakMap : Map;
		function Ni(a, b, c) {
			c = mh(-1, c);
			c.tag = 3;
			c.payload = { element: null };
			var d = b.value;
			c.callback = function() {
				Oi || (Oi = !0, Pi = d);
				Li(a, b);
			};
			return c;
		}
		function Qi(a, b, c) {
			c = mh(-1, c);
			c.tag = 3;
			var d = a.type.getDerivedStateFromError;
			if ("function" === typeof d) {
				var e = b.value;
				c.payload = function() {
					return d(e);
				};
				c.callback = function() {
					Li(a, b);
				};
			}
			var f$2 = a.stateNode;
			null !== f$2 && "function" === typeof f$2.componentDidCatch && (c.callback = function() {
				Li(a, b);
				"function" !== typeof d && (null === Ri ? Ri = new Set([this]) : Ri.add(this));
				var c$1 = b.stack;
				this.componentDidCatch(b.value, { componentStack: null !== c$1 ? c$1 : "" });
			});
			return c;
		}
		function Si(a, b, c) {
			var d = a.pingCache;
			if (null === d) {
				d = a.pingCache = new Mi();
				var e = /* @__PURE__ */ new Set();
				d.set(b, e);
			} else e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
			e.has(c) || (e.add(c), a = Ti.bind(null, a, b, c), b.then(a, a));
		}
		function Ui(a) {
			do {
				var b;
				if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? !0 : !1 : !0;
				if (b) return a;
				a = a.return;
			} while (null !== a);
			return null;
		}
		function Vi(a, b, c, d, e) {
			if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
			a.flags |= 65536;
			a.lanes = e;
			return a;
		}
		var Wi = ua.ReactCurrentOwner, dh = !1;
		function Xi(a, b, c, d) {
			b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
		}
		function Yi(a, b, c, d, e) {
			c = c.render;
			var f$2 = b.ref;
			ch$1(b, e);
			d = Nh(a, b, c, d, f$2, e);
			c = Sh();
			if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
			I && c && vg(b);
			b.flags |= 1;
			Xi(a, b, d, e);
			return b.child;
		}
		function $i(a, b, c, d, e) {
			if (null === a) {
				var f$2 = c.type;
				if ("function" === typeof f$2 && !aj(f$2) && void 0 === f$2.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f$2, bj(a, b, f$2, d, e);
				a = Rg(c.type, null, d, b, b.mode, e);
				a.ref = b.ref;
				a.return = b;
				return b.child = a;
			}
			f$2 = a.child;
			if (0 === (a.lanes & e)) {
				var g$1 = f$2.memoizedProps;
				c = c.compare;
				c = null !== c ? c : Ie;
				if (c(g$1, d) && a.ref === b.ref) return Zi(a, b, e);
			}
			b.flags |= 1;
			a = Pg(f$2, d);
			a.ref = b.ref;
			a.return = b;
			return b.child = a;
		}
		function bj(a, b, c, d, e) {
			if (null !== a) {
				var f$2 = a.memoizedProps;
				if (Ie(f$2, d) && a.ref === b.ref) if (dh = !1, b.pendingProps = d = f$2, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (dh = !0);
				else return b.lanes = a.lanes, Zi(a, b, e);
			}
			return cj(a, b, c, d, e);
		}
		function dj(a, b, c) {
			var d = b.pendingProps, e = d.children, f$2 = null !== a ? a.memoizedState : null;
			if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null
			}, G(ej, fj), fj |= c;
			else {
				if (0 === (c & 1073741824)) return a = null !== f$2 ? f$2.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
					baseLanes: a,
					cachePool: null,
					transitions: null
				}, b.updateQueue = null, G(ej, fj), fj |= a, null;
				b.memoizedState = {
					baseLanes: 0,
					cachePool: null,
					transitions: null
				};
				d = null !== f$2 ? f$2.baseLanes : c;
				G(ej, fj);
				fj |= d;
			}
			else null !== f$2 ? (d = f$2.baseLanes | c, b.memoizedState = null) : d = c, G(ej, fj), fj |= d;
			Xi(a, b, e, c);
			return b.child;
		}
		function gj(a, b) {
			var c = b.ref;
			if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
		}
		function cj(a, b, c, d, e) {
			var f$2 = Zf(c) ? Xf : H.current;
			f$2 = Yf(b, f$2);
			ch$1(b, e);
			c = Nh(a, b, c, d, f$2, e);
			d = Sh();
			if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
			I && d && vg(b);
			b.flags |= 1;
			Xi(a, b, c, e);
			return b.child;
		}
		function hj(a, b, c, d, e) {
			if (Zf(c)) {
				var f$2 = !0;
				cg(b);
			} else f$2 = !1;
			ch$1(b, e);
			if (null === b.stateNode) ij(a, b), Gi(b, c, d), Ii(b, c, d, e), d = !0;
			else if (null === a) {
				var g$1 = b.stateNode, h$1 = b.memoizedProps;
				g$1.props = h$1;
				var k$2 = g$1.context, l$3 = c.contextType;
				"object" === typeof l$3 && null !== l$3 ? l$3 = eh(l$3) : (l$3 = Zf(c) ? Xf : H.current, l$3 = Yf(b, l$3));
				var m$2 = c.getDerivedStateFromProps, q$3 = "function" === typeof m$2 || "function" === typeof g$1.getSnapshotBeforeUpdate;
				q$3 || "function" !== typeof g$1.UNSAFE_componentWillReceiveProps && "function" !== typeof g$1.componentWillReceiveProps || (h$1 !== d || k$2 !== l$3) && Hi(b, g$1, d, l$3);
				jh = !1;
				var r$2 = b.memoizedState;
				g$1.state = r$2;
				qh(b, d, g$1, e);
				k$2 = b.memoizedState;
				h$1 !== d || r$2 !== k$2 || Wf.current || jh ? ("function" === typeof m$2 && (Di(b, c, m$2, d), k$2 = b.memoizedState), (h$1 = jh || Fi(b, c, h$1, d, r$2, k$2, l$3)) ? (q$3 || "function" !== typeof g$1.UNSAFE_componentWillMount && "function" !== typeof g$1.componentWillMount || ("function" === typeof g$1.componentWillMount && g$1.componentWillMount(), "function" === typeof g$1.UNSAFE_componentWillMount && g$1.UNSAFE_componentWillMount()), "function" === typeof g$1.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g$1.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k$2), g$1.props = d, g$1.state = k$2, g$1.context = l$3, d = h$1) : ("function" === typeof g$1.componentDidMount && (b.flags |= 4194308), d = !1);
			} else {
				g$1 = b.stateNode;
				lh(a, b);
				h$1 = b.memoizedProps;
				l$3 = b.type === b.elementType ? h$1 : Ci(b.type, h$1);
				g$1.props = l$3;
				q$3 = b.pendingProps;
				r$2 = g$1.context;
				k$2 = c.contextType;
				"object" === typeof k$2 && null !== k$2 ? k$2 = eh(k$2) : (k$2 = Zf(c) ? Xf : H.current, k$2 = Yf(b, k$2));
				var y$2 = c.getDerivedStateFromProps;
				(m$2 = "function" === typeof y$2 || "function" === typeof g$1.getSnapshotBeforeUpdate) || "function" !== typeof g$1.UNSAFE_componentWillReceiveProps && "function" !== typeof g$1.componentWillReceiveProps || (h$1 !== q$3 || r$2 !== k$2) && Hi(b, g$1, d, k$2);
				jh = !1;
				r$2 = b.memoizedState;
				g$1.state = r$2;
				qh(b, d, g$1, e);
				var n$2 = b.memoizedState;
				h$1 !== q$3 || r$2 !== n$2 || Wf.current || jh ? ("function" === typeof y$2 && (Di(b, c, y$2, d), n$2 = b.memoizedState), (l$3 = jh || Fi(b, c, l$3, d, r$2, n$2, k$2) || !1) ? (m$2 || "function" !== typeof g$1.UNSAFE_componentWillUpdate && "function" !== typeof g$1.componentWillUpdate || ("function" === typeof g$1.componentWillUpdate && g$1.componentWillUpdate(d, n$2, k$2), "function" === typeof g$1.UNSAFE_componentWillUpdate && g$1.UNSAFE_componentWillUpdate(d, n$2, k$2)), "function" === typeof g$1.componentDidUpdate && (b.flags |= 4), "function" === typeof g$1.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g$1.componentDidUpdate || h$1 === a.memoizedProps && r$2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g$1.getSnapshotBeforeUpdate || h$1 === a.memoizedProps && r$2 === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n$2), g$1.props = d, g$1.state = n$2, g$1.context = k$2, d = l$3) : ("function" !== typeof g$1.componentDidUpdate || h$1 === a.memoizedProps && r$2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g$1.getSnapshotBeforeUpdate || h$1 === a.memoizedProps && r$2 === a.memoizedState || (b.flags |= 1024), d = !1);
			}
			return jj(a, b, c, d, f$2, e);
		}
		function jj(a, b, c, d, e, f$2) {
			gj(a, b);
			var g$1 = 0 !== (b.flags & 128);
			if (!d && !g$1) return e && dg(b, c, !1), Zi(a, b, f$2);
			d = b.stateNode;
			Wi.current = b;
			var h$1 = g$1 && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
			b.flags |= 1;
			null !== a && g$1 ? (b.child = Ug(b, a.child, null, f$2), b.child = Ug(b, null, h$1, f$2)) : Xi(a, b, h$1, f$2);
			b.memoizedState = d.state;
			e && dg(b, c, !0);
			return b.child;
		}
		function kj(a) {
			var b = a.stateNode;
			b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, !1);
			yh(a, b.containerInfo);
		}
		function lj(a, b, c, d, e) {
			Ig();
			Jg(e);
			b.flags |= 256;
			Xi(a, b, c, d);
			return b.child;
		}
		var mj = {
			dehydrated: null,
			treeContext: null,
			retryLane: 0
		};
		function nj(a) {
			return {
				baseLanes: a,
				cachePool: null,
				transitions: null
			};
		}
		function oj(a, b, c) {
			var d = b.pendingProps, e = L.current, f$2 = !1, g$1 = 0 !== (b.flags & 128), h$1;
			(h$1 = g$1) || (h$1 = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
			if (h$1) f$2 = !0, b.flags &= -129;
			else if (null === a || null !== a.memoizedState) e |= 1;
			G(L, e & 1);
			if (null === a) {
				Eg(b);
				a = b.memoizedState;
				if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
				g$1 = d.children;
				a = d.fallback;
				return f$2 ? (d = b.mode, f$2 = b.child, g$1 = {
					mode: "hidden",
					children: g$1
				}, 0 === (d & 1) && null !== f$2 ? (f$2.childLanes = 0, f$2.pendingProps = g$1) : f$2 = pj(g$1, d, 0, null), a = Tg(a, d, c, null), f$2.return = b, a.return = b, f$2.sibling = a, b.child = f$2, b.child.memoizedState = nj(c), b.memoizedState = mj, a) : qj(b, g$1);
			}
			e = a.memoizedState;
			if (null !== e && (h$1 = e.dehydrated, null !== h$1)) return rj(a, b, g$1, d, h$1, e, c);
			if (f$2) {
				f$2 = d.fallback;
				g$1 = b.mode;
				e = a.child;
				h$1 = e.sibling;
				var k$2 = {
					mode: "hidden",
					children: d.children
				};
				0 === (g$1 & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k$2, b.deletions = null) : (d = Pg(e, k$2), d.subtreeFlags = e.subtreeFlags & 14680064);
				null !== h$1 ? f$2 = Pg(h$1, f$2) : (f$2 = Tg(f$2, g$1, c, null), f$2.flags |= 2);
				f$2.return = b;
				d.return = b;
				d.sibling = f$2;
				b.child = d;
				d = f$2;
				f$2 = b.child;
				g$1 = a.child.memoizedState;
				g$1 = null === g$1 ? nj(c) : {
					baseLanes: g$1.baseLanes | c,
					cachePool: null,
					transitions: g$1.transitions
				};
				f$2.memoizedState = g$1;
				f$2.childLanes = a.childLanes & ~c;
				b.memoizedState = mj;
				return d;
			}
			f$2 = a.child;
			a = f$2.sibling;
			d = Pg(f$2, {
				mode: "visible",
				children: d.children
			});
			0 === (b.mode & 1) && (d.lanes = c);
			d.return = b;
			d.sibling = null;
			null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
			b.child = d;
			b.memoizedState = null;
			return d;
		}
		function qj(a, b) {
			b = pj({
				mode: "visible",
				children: b
			}, a.mode, 0, null);
			b.return = a;
			return a.child = b;
		}
		function sj(a, b, c, d) {
			null !== d && Jg(d);
			Ug(b, a.child, null, c);
			a = qj(b, b.pendingProps.children);
			a.flags |= 2;
			b.memoizedState = null;
			return a;
		}
		function rj(a, b, c, d, e, f$2, g$1) {
			if (c) {
				if (b.flags & 256) return b.flags &= -257, d = Ki(Error(p$1(422))), sj(a, b, g$1, d);
				if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
				f$2 = d.fallback;
				e = b.mode;
				d = pj({
					mode: "visible",
					children: d.children
				}, e, 0, null);
				f$2 = Tg(f$2, e, g$1, null);
				f$2.flags |= 2;
				d.return = b;
				f$2.return = b;
				d.sibling = f$2;
				b.child = d;
				0 !== (b.mode & 1) && Ug(b, a.child, null, g$1);
				b.child.memoizedState = nj(g$1);
				b.memoizedState = mj;
				return f$2;
			}
			if (0 === (b.mode & 1)) return sj(a, b, g$1, null);
			if ("$!" === e.data) {
				d = e.nextSibling && e.nextSibling.dataset;
				if (d) var h$1 = d.dgst;
				d = h$1;
				f$2 = Error(p$1(419));
				d = Ki(f$2, d, void 0);
				return sj(a, b, g$1, d);
			}
			h$1 = 0 !== (g$1 & a.childLanes);
			if (dh || h$1) {
				d = Q;
				if (null !== d) {
					switch (g$1 & -g$1) {
						case 4:
							e = 2;
							break;
						case 16:
							e = 8;
							break;
						case 64:
						case 128:
						case 256:
						case 512:
						case 1024:
						case 2048:
						case 4096:
						case 8192:
						case 16384:
						case 32768:
						case 65536:
						case 131072:
						case 262144:
						case 524288:
						case 1048576:
						case 2097152:
						case 4194304:
						case 8388608:
						case 16777216:
						case 33554432:
						case 67108864:
							e = 32;
							break;
						case 536870912:
							e = 268435456;
							break;
						default: e = 0;
					}
					e = 0 !== (e & (d.suspendedLanes | g$1)) ? 0 : e;
					0 !== e && e !== f$2.retryLane && (f$2.retryLane = e, ih(a, e), gi(d, a, e, -1));
				}
				tj();
				d = Ki(Error(p$1(421)));
				return sj(a, b, g$1, d);
			}
			if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), e._reactRetry = b, null;
			a = f$2.treeContext;
			yg = Lf(e.nextSibling);
			xg = b;
			I = !0;
			zg = null;
			null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
			b = qj(b, d.children);
			b.flags |= 4096;
			return b;
		}
		function vj(a, b, c) {
			a.lanes |= b;
			var d = a.alternate;
			null !== d && (d.lanes |= b);
			bh(a.return, b, c);
		}
		function wj(a, b, c, d, e) {
			var f$2 = a.memoizedState;
			null === f$2 ? a.memoizedState = {
				isBackwards: b,
				rendering: null,
				renderingStartTime: 0,
				last: d,
				tail: c,
				tailMode: e
			} : (f$2.isBackwards = b, f$2.rendering = null, f$2.renderingStartTime = 0, f$2.last = d, f$2.tail = c, f$2.tailMode = e);
		}
		function xj(a, b, c) {
			var d = b.pendingProps, e = d.revealOrder, f$2 = d.tail;
			Xi(a, b, d.children, c);
			d = L.current;
			if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
			else {
				if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a;) {
					if (13 === a.tag) null !== a.memoizedState && vj(a, c, b);
					else if (19 === a.tag) vj(a, c, b);
					else if (null !== a.child) {
						a.child.return = a;
						a = a.child;
						continue;
					}
					if (a === b) break a;
					for (; null === a.sibling;) {
						if (null === a.return || a.return === b) break a;
						a = a.return;
					}
					a.sibling.return = a.return;
					a = a.sibling;
				}
				d &= 1;
			}
			G(L, d);
			if (0 === (b.mode & 1)) b.memoizedState = null;
			else switch (e) {
				case "forwards":
					c = b.child;
					for (e = null; null !== c;) a = c.alternate, null !== a && null === Ch(a) && (e = c), c = c.sibling;
					c = e;
					null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
					wj(b, !1, e, c, f$2);
					break;
				case "backwards":
					c = null;
					e = b.child;
					for (b.child = null; null !== e;) {
						a = e.alternate;
						if (null !== a && null === Ch(a)) {
							b.child = e;
							break;
						}
						a = e.sibling;
						e.sibling = c;
						c = e;
						e = a;
					}
					wj(b, !0, c, null, f$2);
					break;
				case "together":
					wj(b, !1, null, null, void 0);
					break;
				default: b.memoizedState = null;
			}
			return b.child;
		}
		function ij(a, b) {
			0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
		}
		function Zi(a, b, c) {
			null !== a && (b.dependencies = a.dependencies);
			rh |= b.lanes;
			if (0 === (c & b.childLanes)) return null;
			if (null !== a && b.child !== a.child) throw Error(p$1(153));
			if (null !== b.child) {
				a = b.child;
				c = Pg(a, a.pendingProps);
				b.child = c;
				for (c.return = b; null !== a.sibling;) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b;
				c.sibling = null;
			}
			return b.child;
		}
		function yj(a, b, c) {
			switch (b.tag) {
				case 3:
					kj(b);
					Ig();
					break;
				case 5:
					Ah(b);
					break;
				case 1:
					Zf(b.type) && cg(b);
					break;
				case 4:
					yh(b, b.stateNode.containerInfo);
					break;
				case 10:
					var d = b.type._context, e = b.memoizedProps.value;
					G(Wg, d._currentValue);
					d._currentValue = e;
					break;
				case 13:
					d = b.memoizedState;
					if (null !== d) {
						if (null !== d.dehydrated) return G(L, L.current & 1), b.flags |= 128, null;
						if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
						G(L, L.current & 1);
						a = Zi(a, b, c);
						return null !== a ? a.sibling : null;
					}
					G(L, L.current & 1);
					break;
				case 19:
					d = 0 !== (c & b.childLanes);
					if (0 !== (a.flags & 128)) {
						if (d) return xj(a, b, c);
						b.flags |= 128;
					}
					e = b.memoizedState;
					null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
					G(L, L.current);
					if (d) break;
					else return null;
				case 22:
				case 23: return b.lanes = 0, dj(a, b, c);
			}
			return Zi(a, b, c);
		}
		var zj = function(a, b) {
			for (var c = b.child; null !== c;) {
				if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
				else if (4 !== c.tag && null !== c.child) {
					c.child.return = c;
					c = c.child;
					continue;
				}
				if (c === b) break;
				for (; null === c.sibling;) {
					if (null === c.return || c.return === b) return;
					c = c.return;
				}
				c.sibling.return = c.return;
				c = c.sibling;
			}
		}, Aj = function() {}, Bj = function(a, b, c, d) {
			var e = a.memoizedProps;
			if (e !== d) {
				a = b.stateNode;
				xh(uh.current);
				var f$2 = null;
				switch (c) {
					case "input":
						e = Ya(a, e);
						d = Ya(a, d);
						f$2 = [];
						break;
					case "select":
						e = A({}, e, { value: void 0 });
						d = A({}, d, { value: void 0 });
						f$2 = [];
						break;
					case "textarea":
						e = gb(a, e);
						d = gb(a, d);
						f$2 = [];
						break;
					default: "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
				}
				ub(c, d);
				var g$1;
				c = null;
				for (l$3 in e) if (!d.hasOwnProperty(l$3) && e.hasOwnProperty(l$3) && null != e[l$3]) if ("style" === l$3) {
					var h$1 = e[l$3];
					for (g$1 in h$1) h$1.hasOwnProperty(g$1) && (c || (c = {}), c[g$1] = "");
				} else "dangerouslySetInnerHTML" !== l$3 && "children" !== l$3 && "suppressContentEditableWarning" !== l$3 && "suppressHydrationWarning" !== l$3 && "autoFocus" !== l$3 && (ea.hasOwnProperty(l$3) ? f$2 || (f$2 = []) : (f$2 = f$2 || []).push(l$3, null));
				for (l$3 in d) {
					var k$2 = d[l$3];
					h$1 = null != e ? e[l$3] : void 0;
					if (d.hasOwnProperty(l$3) && k$2 !== h$1 && (null != k$2 || null != h$1)) if ("style" === l$3) if (h$1) {
						for (g$1 in h$1) !h$1.hasOwnProperty(g$1) || k$2 && k$2.hasOwnProperty(g$1) || (c || (c = {}), c[g$1] = "");
						for (g$1 in k$2) k$2.hasOwnProperty(g$1) && h$1[g$1] !== k$2[g$1] && (c || (c = {}), c[g$1] = k$2[g$1]);
					} else c || (f$2 || (f$2 = []), f$2.push(l$3, c)), c = k$2;
					else "dangerouslySetInnerHTML" === l$3 ? (k$2 = k$2 ? k$2.__html : void 0, h$1 = h$1 ? h$1.__html : void 0, null != k$2 && h$1 !== k$2 && (f$2 = f$2 || []).push(l$3, k$2)) : "children" === l$3 ? "string" !== typeof k$2 && "number" !== typeof k$2 || (f$2 = f$2 || []).push(l$3, "" + k$2) : "suppressContentEditableWarning" !== l$3 && "suppressHydrationWarning" !== l$3 && (ea.hasOwnProperty(l$3) ? (null != k$2 && "onScroll" === l$3 && D("scroll", a), f$2 || h$1 === k$2 || (f$2 = [])) : (f$2 = f$2 || []).push(l$3, k$2));
				}
				c && (f$2 = f$2 || []).push("style", c);
				var l$3 = f$2;
				if (b.updateQueue = l$3) b.flags |= 4;
			}
		}, Cj = function(a, b, c, d) {
			c !== d && (b.flags |= 4);
		};
		function Dj(a, b) {
			if (!I) switch (a.tailMode) {
				case "hidden":
					b = a.tail;
					for (var c = null; null !== b;) null !== b.alternate && (c = b), b = b.sibling;
					null === c ? a.tail = null : c.sibling = null;
					break;
				case "collapsed":
					c = a.tail;
					for (var d = null; null !== c;) null !== c.alternate && (d = c), c = c.sibling;
					null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
			}
		}
		function S(a) {
			var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
			if (b) for (var e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
			else for (e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
			a.subtreeFlags |= d;
			a.childLanes = c;
			return b;
		}
		function Ej(a, b, c) {
			var d = b.pendingProps;
			wg(b);
			switch (b.tag) {
				case 2:
				case 16:
				case 15:
				case 0:
				case 11:
				case 7:
				case 8:
				case 12:
				case 9:
				case 14: return S(b), null;
				case 1: return Zf(b.type) && $f(), S(b), null;
				case 3:
					d = b.stateNode;
					zh$1();
					E(Wf);
					E(H);
					Eh();
					d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
					if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
					Aj(a, b);
					S(b);
					return null;
				case 5:
					Bh(b);
					var e = xh(wh.current);
					c = b.type;
					if (null !== a && null != b.stateNode) Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
					else {
						if (!d) {
							if (null === b.stateNode) throw Error(p$1(166));
							S(b);
							return null;
						}
						a = xh(uh.current);
						if (Gg(b)) {
							d = b.stateNode;
							c = b.type;
							var f$2 = b.memoizedProps;
							d[Of] = b;
							d[Pf] = f$2;
							a = 0 !== (b.mode & 1);
							switch (c) {
								case "dialog":
									D("cancel", d);
									D("close", d);
									break;
								case "iframe":
								case "object":
								case "embed":
									D("load", d);
									break;
								case "video":
								case "audio":
									for (e = 0; e < lf.length; e++) D(lf[e], d);
									break;
								case "source":
									D("error", d);
									break;
								case "img":
								case "image":
								case "link":
									D("error", d);
									D("load", d);
									break;
								case "details":
									D("toggle", d);
									break;
								case "input":
									Za(d, f$2);
									D("invalid", d);
									break;
								case "select":
									d._wrapperState = { wasMultiple: !!f$2.multiple };
									D("invalid", d);
									break;
								case "textarea": hb(d, f$2), D("invalid", d);
							}
							ub(c, f$2);
							e = null;
							for (var g$1 in f$2) if (f$2.hasOwnProperty(g$1)) {
								var h$1 = f$2[g$1];
								"children" === g$1 ? "string" === typeof h$1 ? d.textContent !== h$1 && (!0 !== f$2.suppressHydrationWarning && Af(d.textContent, h$1, a), e = ["children", h$1]) : "number" === typeof h$1 && d.textContent !== "" + h$1 && (!0 !== f$2.suppressHydrationWarning && Af(d.textContent, h$1, a), e = ["children", "" + h$1]) : ea.hasOwnProperty(g$1) && null != h$1 && "onScroll" === g$1 && D("scroll", d);
							}
							switch (c) {
								case "input":
									Va(d);
									db(d, f$2, !0);
									break;
								case "textarea":
									Va(d);
									jb(d);
									break;
								case "select":
								case "option": break;
								default: "function" === typeof f$2.onClick && (d.onclick = Bf);
							}
							d = e;
							b.updateQueue = d;
							null !== d && (b.flags |= 4);
						} else {
							g$1 = 9 === e.nodeType ? e : e.ownerDocument;
							"http://www.w3.org/1999/xhtml" === a && (a = kb(c));
							"http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g$1.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g$1.createElement(c, { is: d.is }) : (a = g$1.createElement(c), "select" === c && (g$1 = a, d.multiple ? g$1.multiple = !0 : d.size && (g$1.size = d.size))) : a = g$1.createElementNS(a, c);
							a[Of] = b;
							a[Pf] = d;
							zj(a, b, !1, !1);
							b.stateNode = a;
							a: {
								g$1 = vb(c, d);
								switch (c) {
									case "dialog":
										D("cancel", a);
										D("close", a);
										e = d;
										break;
									case "iframe":
									case "object":
									case "embed":
										D("load", a);
										e = d;
										break;
									case "video":
									case "audio":
										for (e = 0; e < lf.length; e++) D(lf[e], a);
										e = d;
										break;
									case "source":
										D("error", a);
										e = d;
										break;
									case "img":
									case "image":
									case "link":
										D("error", a);
										D("load", a);
										e = d;
										break;
									case "details":
										D("toggle", a);
										e = d;
										break;
									case "input":
										Za(a, d);
										e = Ya(a, d);
										D("invalid", a);
										break;
									case "option":
										e = d;
										break;
									case "select":
										a._wrapperState = { wasMultiple: !!d.multiple };
										e = A({}, d, { value: void 0 });
										D("invalid", a);
										break;
									case "textarea":
										hb(a, d);
										e = gb(a, d);
										D("invalid", a);
										break;
									default: e = d;
								}
								ub(c, e);
								h$1 = e;
								for (f$2 in h$1) if (h$1.hasOwnProperty(f$2)) {
									var k$2 = h$1[f$2];
									"style" === f$2 ? sb(a, k$2) : "dangerouslySetInnerHTML" === f$2 ? (k$2 = k$2 ? k$2.__html : void 0, null != k$2 && nb(a, k$2)) : "children" === f$2 ? "string" === typeof k$2 ? ("textarea" !== c || "" !== k$2) && ob(a, k$2) : "number" === typeof k$2 && ob(a, "" + k$2) : "suppressContentEditableWarning" !== f$2 && "suppressHydrationWarning" !== f$2 && "autoFocus" !== f$2 && (ea.hasOwnProperty(f$2) ? null != k$2 && "onScroll" === f$2 && D("scroll", a) : null != k$2 && ta(a, f$2, k$2, g$1));
								}
								switch (c) {
									case "input":
										Va(a);
										db(a, d, !1);
										break;
									case "textarea":
										Va(a);
										jb(a);
										break;
									case "option":
										null != d.value && a.setAttribute("value", "" + Sa(d.value));
										break;
									case "select":
										a.multiple = !!d.multiple;
										f$2 = d.value;
										null != f$2 ? fb(a, !!d.multiple, f$2, !1) : null != d.defaultValue && fb(a, !!d.multiple, d.defaultValue, !0);
										break;
									default: "function" === typeof e.onClick && (a.onclick = Bf);
								}
								switch (c) {
									case "button":
									case "input":
									case "select":
									case "textarea":
										d = !!d.autoFocus;
										break a;
									case "img":
										d = !0;
										break a;
									default: d = !1;
								}
							}
							d && (b.flags |= 4);
						}
						null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
					}
					S(b);
					return null;
				case 6:
					if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d);
					else {
						if ("string" !== typeof d && null === b.stateNode) throw Error(p$1(166));
						c = xh(wh.current);
						xh(uh.current);
						if (Gg(b)) {
							d = b.stateNode;
							c = b.memoizedProps;
							d[Of] = b;
							if (f$2 = d.nodeValue !== c) {
								if (a = xg, null !== a) switch (a.tag) {
									case 3:
										Af(d.nodeValue, c, 0 !== (a.mode & 1));
										break;
									case 5: !0 !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
								}
							}
							f$2 && (b.flags |= 4);
						} else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
					}
					S(b);
					return null;
				case 13:
					E(L);
					d = b.memoizedState;
					if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
						if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f$2 = !1;
						else if (f$2 = Gg(b), null !== d && null !== d.dehydrated) {
							if (null === a) {
								if (!f$2) throw Error(p$1(318));
								f$2 = b.memoizedState;
								f$2 = null !== f$2 ? f$2.dehydrated : null;
								if (!f$2) throw Error(p$1(317));
								f$2[Of] = b;
							} else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
							S(b);
							f$2 = !1;
						} else null !== zg && (Fj(zg), zg = null), f$2 = !0;
						if (!f$2) return b.flags & 65536 ? b : null;
					}
					if (0 !== (b.flags & 128)) return b.lanes = c, b;
					d = null !== d;
					d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
					null !== b.updateQueue && (b.flags |= 4);
					S(b);
					return null;
				case 4: return zh$1(), Aj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
				case 10: return ah(b.type._context), S(b), null;
				case 17: return Zf(b.type) && $f(), S(b), null;
				case 19:
					E(L);
					f$2 = b.memoizedState;
					if (null === f$2) return S(b), null;
					d = 0 !== (b.flags & 128);
					g$1 = f$2.rendering;
					if (null === g$1) if (d) Dj(f$2, !1);
					else {
						if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a;) {
							g$1 = Ch(a);
							if (null !== g$1) {
								b.flags |= 128;
								Dj(f$2, !1);
								d = g$1.updateQueue;
								null !== d && (b.updateQueue = d, b.flags |= 4);
								b.subtreeFlags = 0;
								d = c;
								for (c = b.child; null !== c;) f$2 = c, a = d, f$2.flags &= 14680066, g$1 = f$2.alternate, null === g$1 ? (f$2.childLanes = 0, f$2.lanes = a, f$2.child = null, f$2.subtreeFlags = 0, f$2.memoizedProps = null, f$2.memoizedState = null, f$2.updateQueue = null, f$2.dependencies = null, f$2.stateNode = null) : (f$2.childLanes = g$1.childLanes, f$2.lanes = g$1.lanes, f$2.child = g$1.child, f$2.subtreeFlags = 0, f$2.deletions = null, f$2.memoizedProps = g$1.memoizedProps, f$2.memoizedState = g$1.memoizedState, f$2.updateQueue = g$1.updateQueue, f$2.type = g$1.type, a = g$1.dependencies, f$2.dependencies = null === a ? null : {
									lanes: a.lanes,
									firstContext: a.firstContext
								}), c = c.sibling;
								G(L, L.current & 1 | 2);
								return b.child;
							}
							a = a.sibling;
						}
						null !== f$2.tail && B() > Gj && (b.flags |= 128, d = !0, Dj(f$2, !1), b.lanes = 4194304);
					}
					else {
						if (!d) if (a = Ch(g$1), null !== a) {
							if (b.flags |= 128, d = !0, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Dj(f$2, !0), null === f$2.tail && "hidden" === f$2.tailMode && !g$1.alternate && !I) return S(b), null;
						} else 2 * B() - f$2.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, d = !0, Dj(f$2, !1), b.lanes = 4194304);
						f$2.isBackwards ? (g$1.sibling = b.child, b.child = g$1) : (c = f$2.last, null !== c ? c.sibling = g$1 : b.child = g$1, f$2.last = g$1);
					}
					if (null !== f$2.tail) return b = f$2.tail, f$2.rendering = b, f$2.tail = b.sibling, f$2.renderingStartTime = B(), b.sibling = null, c = L.current, G(L, d ? c & 1 | 2 : c & 1), b;
					S(b);
					return null;
				case 22:
				case 23: return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
				case 24: return null;
				case 25: return null;
			}
			throw Error(p$1(156, b.tag));
		}
		function Ij(a, b) {
			wg(b);
			switch (b.tag) {
				case 1: return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
				case 3: return zh$1(), E(Wf), E(H), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
				case 5: return Bh(b), null;
				case 13:
					E(L);
					a = b.memoizedState;
					if (null !== a && null !== a.dehydrated) {
						if (null === b.alternate) throw Error(p$1(340));
						Ig();
					}
					a = b.flags;
					return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
				case 19: return E(L), null;
				case 4: return zh$1(), null;
				case 10: return ah(b.type._context), null;
				case 22:
				case 23: return Hj(), null;
				case 24: return null;
				default: return null;
			}
		}
		var Jj = !1, U = !1, Kj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
		function Lj(a, b) {
			var c = a.ref;
			if (null !== c) if ("function" === typeof c) try {
				c(null);
			} catch (d) {
				W(a, b, d);
			}
			else c.current = null;
		}
		function Mj(a, b, c) {
			try {
				c();
			} catch (d) {
				W(a, b, d);
			}
		}
		var Nj = !1;
		function Oj(a, b) {
			Cf = dd;
			a = Me();
			if (Ne(a)) {
				if ("selectionStart" in a) var c = {
					start: a.selectionStart,
					end: a.selectionEnd
				};
				else a: {
					c = (c = a.ownerDocument) && c.defaultView || window;
					var d = c.getSelection && c.getSelection();
					if (d && 0 !== d.rangeCount) {
						c = d.anchorNode;
						var e = d.anchorOffset, f$2 = d.focusNode;
						d = d.focusOffset;
						try {
							c.nodeType, f$2.nodeType;
						} catch (F$2) {
							c = null;
							break a;
						}
						var g$1 = 0, h$1 = -1, k$2 = -1, l$3 = 0, m$2 = 0, q$3 = a, r$2 = null;
						b: for (;;) {
							for (var y$2;;) {
								q$3 !== c || 0 !== e && 3 !== q$3.nodeType || (h$1 = g$1 + e);
								q$3 !== f$2 || 0 !== d && 3 !== q$3.nodeType || (k$2 = g$1 + d);
								3 === q$3.nodeType && (g$1 += q$3.nodeValue.length);
								if (null === (y$2 = q$3.firstChild)) break;
								r$2 = q$3;
								q$3 = y$2;
							}
							for (;;) {
								if (q$3 === a) break b;
								r$2 === c && ++l$3 === e && (h$1 = g$1);
								r$2 === f$2 && ++m$2 === d && (k$2 = g$1);
								if (null !== (y$2 = q$3.nextSibling)) break;
								q$3 = r$2;
								r$2 = q$3.parentNode;
							}
							q$3 = y$2;
						}
						c = -1 === h$1 || -1 === k$2 ? null : {
							start: h$1,
							end: k$2
						};
					} else c = null;
				}
				c = c || {
					start: 0,
					end: 0
				};
			} else c = null;
			Df = {
				focusedElem: a,
				selectionRange: c
			};
			dd = !1;
			for (V = b; null !== V;) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V = a;
			else for (; null !== V;) {
				b = V;
				try {
					var n$2 = b.alternate;
					if (0 !== (b.flags & 1024)) switch (b.tag) {
						case 0:
						case 11:
						case 15: break;
						case 1:
							if (null !== n$2) {
								var t$2 = n$2.memoizedProps, J$2 = n$2.memoizedState, x$2 = b.stateNode;
								x$2.__reactInternalSnapshotBeforeUpdate = x$2.getSnapshotBeforeUpdate(b.elementType === b.type ? t$2 : Ci(b.type, t$2), J$2);
							}
							break;
						case 3:
							var u$2 = b.stateNode.containerInfo;
							1 === u$2.nodeType ? u$2.textContent = "" : 9 === u$2.nodeType && u$2.documentElement && u$2.removeChild(u$2.documentElement);
							break;
						case 5:
						case 6:
						case 4:
						case 17: break;
						default: throw Error(p$1(163));
					}
				} catch (F$2) {
					W(b, b.return, F$2);
				}
				a = b.sibling;
				if (null !== a) {
					a.return = b.return;
					V = a;
					break;
				}
				V = b.return;
			}
			n$2 = Nj;
			Nj = !1;
			return n$2;
		}
		function Pj(a, b, c) {
			var d = b.updateQueue;
			d = null !== d ? d.lastEffect : null;
			if (null !== d) {
				var e = d = d.next;
				do {
					if ((e.tag & a) === a) {
						var f$2 = e.destroy;
						e.destroy = void 0;
						void 0 !== f$2 && Mj(b, c, f$2);
					}
					e = e.next;
				} while (e !== d);
			}
		}
		function Qj(a, b) {
			b = b.updateQueue;
			b = null !== b ? b.lastEffect : null;
			if (null !== b) {
				var c = b = b.next;
				do {
					if ((c.tag & a) === a) {
						var d = c.create;
						c.destroy = d();
					}
					c = c.next;
				} while (c !== b);
			}
		}
		function Rj(a) {
			var b = a.ref;
			if (null !== b) {
				var c = a.stateNode;
				switch (a.tag) {
					case 5:
						a = c;
						break;
					default: a = c;
				}
				"function" === typeof b ? b(a) : b.current = a;
			}
		}
		function Sj(a) {
			var b = a.alternate;
			null !== b && (a.alternate = null, Sj(b));
			a.child = null;
			a.deletions = null;
			a.sibling = null;
			5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
			a.stateNode = null;
			a.return = null;
			a.dependencies = null;
			a.memoizedProps = null;
			a.memoizedState = null;
			a.pendingProps = null;
			a.stateNode = null;
			a.updateQueue = null;
		}
		function Tj(a) {
			return 5 === a.tag || 3 === a.tag || 4 === a.tag;
		}
		function Uj(a) {
			a: for (;;) {
				for (; null === a.sibling;) {
					if (null === a.return || Tj(a.return)) return null;
					a = a.return;
				}
				a.sibling.return = a.return;
				for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag;) {
					if (a.flags & 2) continue a;
					if (null === a.child || 4 === a.tag) continue a;
					else a.child.return = a, a = a.child;
				}
				if (!(a.flags & 2)) return a.stateNode;
			}
		}
		function Vj(a, b, c) {
			var d = a.tag;
			if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
			else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b, c), a = a.sibling; null !== a;) Vj(a, b, c), a = a.sibling;
		}
		function Wj(a, b, c) {
			var d = a.tag;
			if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
			else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a;) Wj(a, b, c), a = a.sibling;
		}
		var X = null, Xj = !1;
		function Yj(a, b, c) {
			for (c = c.child; null !== c;) Zj(a, b, c), c = c.sibling;
		}
		function Zj(a, b, c) {
			if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
				lc.onCommitFiberUnmount(kc, c);
			} catch (h$1) {}
			switch (c.tag) {
				case 5: U || Lj(c, b);
				case 6:
					var d = X, e = Xj;
					X = null;
					Yj(a, b, c);
					X = d;
					Xj = e;
					null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
					break;
				case 18:
					null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
					break;
				case 4:
					d = X;
					e = Xj;
					X = c.stateNode.containerInfo;
					Xj = !0;
					Yj(a, b, c);
					X = d;
					Xj = e;
					break;
				case 0:
				case 11:
				case 14:
				case 15:
					if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
						e = d = d.next;
						do {
							var f$2 = e, g$1 = f$2.destroy;
							f$2 = f$2.tag;
							void 0 !== g$1 && (0 !== (f$2 & 2) ? Mj(c, b, g$1) : 0 !== (f$2 & 4) && Mj(c, b, g$1));
							e = e.next;
						} while (e !== d);
					}
					Yj(a, b, c);
					break;
				case 1:
					if (!U && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
						d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
					} catch (h$1) {
						W(c, b, h$1);
					}
					Yj(a, b, c);
					break;
				case 21:
					Yj(a, b, c);
					break;
				case 22:
					c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Yj(a, b, c), U = d) : Yj(a, b, c);
					break;
				default: Yj(a, b, c);
			}
		}
		function ak(a) {
			var b = a.updateQueue;
			if (null !== b) {
				a.updateQueue = null;
				var c = a.stateNode;
				null === c && (c = a.stateNode = new Kj());
				b.forEach(function(b$1) {
					var d = bk.bind(null, a, b$1);
					c.has(b$1) || (c.add(b$1), b$1.then(d, d));
				});
			}
		}
		function ck(a, b) {
			var c = b.deletions;
			if (null !== c) for (var d = 0; d < c.length; d++) {
				var e = c[d];
				try {
					var f$2 = a, g$1 = b, h$1 = g$1;
					a: for (; null !== h$1;) {
						switch (h$1.tag) {
							case 5:
								X = h$1.stateNode;
								Xj = !1;
								break a;
							case 3:
								X = h$1.stateNode.containerInfo;
								Xj = !0;
								break a;
							case 4:
								X = h$1.stateNode.containerInfo;
								Xj = !0;
								break a;
						}
						h$1 = h$1.return;
					}
					if (null === X) throw Error(p$1(160));
					Zj(f$2, g$1, e);
					X = null;
					Xj = !1;
					var k$2 = e.alternate;
					null !== k$2 && (k$2.return = null);
					e.return = null;
				} catch (l$3) {
					W(e, b, l$3);
				}
			}
			if (b.subtreeFlags & 12854) for (b = b.child; null !== b;) dk(b, a), b = b.sibling;
		}
		function dk(a, b) {
			var c = a.alternate, d = a.flags;
			switch (a.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					ck(b, a);
					ek(a);
					if (d & 4) {
						try {
							Pj(3, a, a.return), Qj(3, a);
						} catch (t$2) {
							W(a, a.return, t$2);
						}
						try {
							Pj(5, a, a.return);
						} catch (t$2) {
							W(a, a.return, t$2);
						}
					}
					break;
				case 1:
					ck(b, a);
					ek(a);
					d & 512 && null !== c && Lj(c, c.return);
					break;
				case 5:
					ck(b, a);
					ek(a);
					d & 512 && null !== c && Lj(c, c.return);
					if (a.flags & 32) {
						var e = a.stateNode;
						try {
							ob(e, "");
						} catch (t$2) {
							W(a, a.return, t$2);
						}
					}
					if (d & 4 && (e = a.stateNode, null != e)) {
						var f$2 = a.memoizedProps, g$1 = null !== c ? c.memoizedProps : f$2, h$1 = a.type, k$2 = a.updateQueue;
						a.updateQueue = null;
						if (null !== k$2) try {
							"input" === h$1 && "radio" === f$2.type && null != f$2.name && ab(e, f$2);
							vb(h$1, g$1);
							var l$3 = vb(h$1, f$2);
							for (g$1 = 0; g$1 < k$2.length; g$1 += 2) {
								var m$2 = k$2[g$1], q$3 = k$2[g$1 + 1];
								"style" === m$2 ? sb(e, q$3) : "dangerouslySetInnerHTML" === m$2 ? nb(e, q$3) : "children" === m$2 ? ob(e, q$3) : ta(e, m$2, q$3, l$3);
							}
							switch (h$1) {
								case "input":
									bb(e, f$2);
									break;
								case "textarea":
									ib(e, f$2);
									break;
								case "select":
									var r$2 = e._wrapperState.wasMultiple;
									e._wrapperState.wasMultiple = !!f$2.multiple;
									var y$2 = f$2.value;
									null != y$2 ? fb(e, !!f$2.multiple, y$2, !1) : r$2 !== !!f$2.multiple && (null != f$2.defaultValue ? fb(e, !!f$2.multiple, f$2.defaultValue, !0) : fb(e, !!f$2.multiple, f$2.multiple ? [] : "", !1));
							}
							e[Pf] = f$2;
						} catch (t$2) {
							W(a, a.return, t$2);
						}
					}
					break;
				case 6:
					ck(b, a);
					ek(a);
					if (d & 4) {
						if (null === a.stateNode) throw Error(p$1(162));
						e = a.stateNode;
						f$2 = a.memoizedProps;
						try {
							e.nodeValue = f$2;
						} catch (t$2) {
							W(a, a.return, t$2);
						}
					}
					break;
				case 3:
					ck(b, a);
					ek(a);
					if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
						bd(b.containerInfo);
					} catch (t$2) {
						W(a, a.return, t$2);
					}
					break;
				case 4:
					ck(b, a);
					ek(a);
					break;
				case 13:
					ck(b, a);
					ek(a);
					e = a.child;
					e.flags & 8192 && (f$2 = null !== e.memoizedState, e.stateNode.isHidden = f$2, !f$2 || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
					d & 4 && ak(a);
					break;
				case 22:
					m$2 = null !== c && null !== c.memoizedState;
					a.mode & 1 ? (U = (l$3 = U) || m$2, ck(b, a), U = l$3) : ck(b, a);
					ek(a);
					if (d & 8192) {
						l$3 = null !== a.memoizedState;
						if ((a.stateNode.isHidden = l$3) && !m$2 && 0 !== (a.mode & 1)) for (V = a, m$2 = a.child; null !== m$2;) {
							for (q$3 = V = m$2; null !== V;) {
								r$2 = V;
								y$2 = r$2.child;
								switch (r$2.tag) {
									case 0:
									case 11:
									case 14:
									case 15:
										Pj(4, r$2, r$2.return);
										break;
									case 1:
										Lj(r$2, r$2.return);
										var n$2 = r$2.stateNode;
										if ("function" === typeof n$2.componentWillUnmount) {
											d = r$2;
											c = r$2.return;
											try {
												b = d, n$2.props = b.memoizedProps, n$2.state = b.memoizedState, n$2.componentWillUnmount();
											} catch (t$2) {
												W(d, c, t$2);
											}
										}
										break;
									case 5:
										Lj(r$2, r$2.return);
										break;
									case 22: if (null !== r$2.memoizedState) {
										gk(q$3);
										continue;
									}
								}
								null !== y$2 ? (y$2.return = r$2, V = y$2) : gk(q$3);
							}
							m$2 = m$2.sibling;
						}
						a: for (m$2 = null, q$3 = a;;) {
							if (5 === q$3.tag) {
								if (null === m$2) {
									m$2 = q$3;
									try {
										e = q$3.stateNode, l$3 ? (f$2 = e.style, "function" === typeof f$2.setProperty ? f$2.setProperty("display", "none", "important") : f$2.display = "none") : (h$1 = q$3.stateNode, k$2 = q$3.memoizedProps.style, g$1 = void 0 !== k$2 && null !== k$2 && k$2.hasOwnProperty("display") ? k$2.display : null, h$1.style.display = rb("display", g$1));
									} catch (t$2) {
										W(a, a.return, t$2);
									}
								}
							} else if (6 === q$3.tag) {
								if (null === m$2) try {
									q$3.stateNode.nodeValue = l$3 ? "" : q$3.memoizedProps;
								} catch (t$2) {
									W(a, a.return, t$2);
								}
							} else if ((22 !== q$3.tag && 23 !== q$3.tag || null === q$3.memoizedState || q$3 === a) && null !== q$3.child) {
								q$3.child.return = q$3;
								q$3 = q$3.child;
								continue;
							}
							if (q$3 === a) break a;
							for (; null === q$3.sibling;) {
								if (null === q$3.return || q$3.return === a) break a;
								m$2 === q$3 && (m$2 = null);
								q$3 = q$3.return;
							}
							m$2 === q$3 && (m$2 = null);
							q$3.sibling.return = q$3.return;
							q$3 = q$3.sibling;
						}
					}
					break;
				case 19:
					ck(b, a);
					ek(a);
					d & 4 && ak(a);
					break;
				case 21: break;
				default: ck(b, a), ek(a);
			}
		}
		function ek(a) {
			var b = a.flags;
			if (b & 2) {
				try {
					a: {
						for (var c = a.return; null !== c;) {
							if (Tj(c)) {
								var d = c;
								break a;
							}
							c = c.return;
						}
						throw Error(p$1(160));
					}
					switch (d.tag) {
						case 5:
							var e = d.stateNode;
							d.flags & 32 && (ob(e, ""), d.flags &= -33);
							Wj(a, Uj(a), e);
							break;
						case 3:
						case 4:
							var g$1 = d.stateNode.containerInfo;
							Vj(a, Uj(a), g$1);
							break;
						default: throw Error(p$1(161));
					}
				} catch (k$2) {
					W(a, a.return, k$2);
				}
				a.flags &= -3;
			}
			b & 4096 && (a.flags &= -4097);
		}
		function hk(a, b, c) {
			V = a;
			ik(a, b, c);
		}
		function ik(a, b, c) {
			for (var d = 0 !== (a.mode & 1); null !== V;) {
				var e = V, f$2 = e.child;
				if (22 === e.tag && d) {
					var g$1 = null !== e.memoizedState || Jj;
					if (!g$1) {
						var h$1 = e.alternate, k$2 = null !== h$1 && null !== h$1.memoizedState || U;
						h$1 = Jj;
						var l$3 = U;
						Jj = g$1;
						if ((U = k$2) && !l$3) for (V = e; null !== V;) g$1 = V, k$2 = g$1.child, 22 === g$1.tag && null !== g$1.memoizedState ? jk(e) : null !== k$2 ? (k$2.return = g$1, V = k$2) : jk(e);
						for (; null !== f$2;) V = f$2, ik(f$2, b, c), f$2 = f$2.sibling;
						V = e;
						Jj = h$1;
						U = l$3;
					}
					kk(a, b, c);
				} else 0 !== (e.subtreeFlags & 8772) && null !== f$2 ? (f$2.return = e, V = f$2) : kk(a, b, c);
			}
		}
		function kk(a) {
			for (; null !== V;) {
				var b = V;
				if (0 !== (b.flags & 8772)) {
					var c = b.alternate;
					try {
						if (0 !== (b.flags & 8772)) switch (b.tag) {
							case 0:
							case 11:
							case 15:
								U || Qj(5, b);
								break;
							case 1:
								var d = b.stateNode;
								if (b.flags & 4 && !U) if (null === c) d.componentDidMount();
								else {
									var e = b.elementType === b.type ? c.memoizedProps : Ci(b.type, c.memoizedProps);
									d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
								}
								var f$2 = b.updateQueue;
								null !== f$2 && sh(b, f$2, d);
								break;
							case 3:
								var g$1 = b.updateQueue;
								if (null !== g$1) {
									c = null;
									if (null !== b.child) switch (b.child.tag) {
										case 5:
											c = b.child.stateNode;
											break;
										case 1: c = b.child.stateNode;
									}
									sh(b, g$1, c);
								}
								break;
							case 5:
								var h$1 = b.stateNode;
								if (null === c && b.flags & 4) {
									c = h$1;
									var k$2 = b.memoizedProps;
									switch (b.type) {
										case "button":
										case "input":
										case "select":
										case "textarea":
											k$2.autoFocus && c.focus();
											break;
										case "img": k$2.src && (c.src = k$2.src);
									}
								}
								break;
							case 6: break;
							case 4: break;
							case 12: break;
							case 13:
								if (null === b.memoizedState) {
									var l$3 = b.alternate;
									if (null !== l$3) {
										var m$2 = l$3.memoizedState;
										if (null !== m$2) {
											var q$3 = m$2.dehydrated;
											null !== q$3 && bd(q$3);
										}
									}
								}
								break;
							case 19:
							case 17:
							case 21:
							case 22:
							case 23:
							case 25: break;
							default: throw Error(p$1(163));
						}
						U || b.flags & 512 && Rj(b);
					} catch (r$2) {
						W(b, b.return, r$2);
					}
				}
				if (b === a) {
					V = null;
					break;
				}
				c = b.sibling;
				if (null !== c) {
					c.return = b.return;
					V = c;
					break;
				}
				V = b.return;
			}
		}
		function gk(a) {
			for (; null !== V;) {
				var b = V;
				if (b === a) {
					V = null;
					break;
				}
				var c = b.sibling;
				if (null !== c) {
					c.return = b.return;
					V = c;
					break;
				}
				V = b.return;
			}
		}
		function jk(a) {
			for (; null !== V;) {
				var b = V;
				try {
					switch (b.tag) {
						case 0:
						case 11:
						case 15:
							var c = b.return;
							try {
								Qj(4, b);
							} catch (k$2) {
								W(b, c, k$2);
							}
							break;
						case 1:
							var d = b.stateNode;
							if ("function" === typeof d.componentDidMount) {
								var e = b.return;
								try {
									d.componentDidMount();
								} catch (k$2) {
									W(b, e, k$2);
								}
							}
							var f$2 = b.return;
							try {
								Rj(b);
							} catch (k$2) {
								W(b, f$2, k$2);
							}
							break;
						case 5:
							var g$1 = b.return;
							try {
								Rj(b);
							} catch (k$2) {
								W(b, g$1, k$2);
							}
					}
				} catch (k$2) {
					W(b, b.return, k$2);
				}
				if (b === a) {
					V = null;
					break;
				}
				var h$1 = b.sibling;
				if (null !== h$1) {
					h$1.return = b.return;
					V = h$1;
					break;
				}
				V = b.return;
			}
		}
		var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K = 0, Q = null, Y = null, Z = 0, fj = 0, ej = Uf(0), T = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = Infinity, uk = null, Oi = !1, Pi = null, Ri = null, vk = !1, wk$1 = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
		function R() {
			return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
		}
		function yi(a) {
			if (0 === (a.mode & 1)) return 1;
			if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
			if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
			a = C;
			if (0 !== a) return a;
			a = window.event;
			a = void 0 === a ? 16 : jd(a.type);
			return a;
		}
		function gi(a, b, c, d) {
			if (50 < yk) throw yk = 0, zk = null, Error(p$1(185));
			Ac(a, c, d);
			if (0 === (K & 2) || a !== Q) a === Q && (0 === (K & 2) && (qk |= c), 4 === T && Ck(a, Z)), Dk(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
		}
		function Dk(a, b) {
			var c = a.callbackNode;
			wc(a, b);
			var d = uc(a, a === Q ? Z : 0);
			if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
			else if (b = d & -d, a.callbackPriority !== b) {
				null != c && bc(c);
				if (1 === b) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
					0 === (K & 6) && jg();
				}), c = null;
				else {
					switch (Dc(d)) {
						case 1:
							c = fc;
							break;
						case 4:
							c = gc;
							break;
						case 16:
							c = hc;
							break;
						case 536870912:
							c = jc;
							break;
						default: c = hc;
					}
					c = Fk(c, Gk.bind(null, a));
				}
				a.callbackPriority = b;
				a.callbackNode = c;
			}
		}
		function Gk(a, b) {
			Ak = -1;
			Bk = 0;
			if (0 !== (K & 6)) throw Error(p$1(327));
			var c = a.callbackNode;
			if (Hk() && a.callbackNode !== c) return null;
			var d = uc(a, a === Q ? Z : 0);
			if (0 === d) return null;
			if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d);
			else {
				b = d;
				var e = K;
				K |= 2;
				var f$2 = Jk();
				if (Q !== a || Z !== b) uk = null, Gj = B() + 500, Kk(a, b);
				do
					try {
						Lk();
						break;
					} catch (h$1) {
						Mk(a, h$1);
					}
				while (1);
				$g();
				mk.current = f$2;
				K = e;
				null !== Y ? b = 0 : (Q = null, Z = 0, b = T);
			}
			if (0 !== b) {
				2 === b && (e = xc(a), 0 !== e && (d = e, b = Nk(a, e)));
				if (1 === b) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
				if (6 === b) Ck(a, d);
				else {
					e = a.current.alternate;
					if (0 === (d & 30) && !Ok(e) && (b = Ik(a, d), 2 === b && (f$2 = xc(a), 0 !== f$2 && (d = f$2, b = Nk(a, f$2))), 1 === b)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
					a.finishedWork = e;
					a.finishedLanes = d;
					switch (b) {
						case 0:
						case 1: throw Error(p$1(345));
						case 2:
							Pk(a, tk, uk);
							break;
						case 3:
							Ck(a, d);
							if ((d & 130023424) === d && (b = fk + 500 - B(), 10 < b)) {
								if (0 !== uc(a, 0)) break;
								e = a.suspendedLanes;
								if ((e & d) !== d) {
									R();
									a.pingedLanes |= a.suspendedLanes & e;
									break;
								}
								a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
								break;
							}
							Pk(a, tk, uk);
							break;
						case 4:
							Ck(a, d);
							if ((d & 4194240) === d) break;
							b = a.eventTimes;
							for (e = -1; 0 < d;) {
								var g$1 = 31 - oc(d);
								f$2 = 1 << g$1;
								g$1 = b[g$1];
								g$1 > e && (e = g$1);
								d &= ~f$2;
							}
							d = e;
							d = B() - d;
							d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
							if (10 < d) {
								a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
								break;
							}
							Pk(a, tk, uk);
							break;
						case 5:
							Pk(a, tk, uk);
							break;
						default: throw Error(p$1(329));
					}
				}
			}
			Dk(a, B());
			return a.callbackNode === c ? Gk.bind(null, a) : null;
		}
		function Nk(a, b) {
			var c = sk;
			a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
			a = Ik(a, b);
			2 !== a && (b = tk, tk = c, null !== b && Fj(b));
			return a;
		}
		function Fj(a) {
			null === tk ? tk = a : tk.push.apply(tk, a);
		}
		function Ok(a) {
			for (var b = a;;) {
				if (b.flags & 16384) {
					var c = b.updateQueue;
					if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
						var e = c[d], f$2 = e.getSnapshot;
						e = e.value;
						try {
							if (!He(f$2(), e)) return !1;
						} catch (g$1) {
							return !1;
						}
					}
				}
				c = b.child;
				if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
				else {
					if (b === a) break;
					for (; null === b.sibling;) {
						if (null === b.return || b.return === a) return !0;
						b = b.return;
					}
					b.sibling.return = b.return;
					b = b.sibling;
				}
			}
			return !0;
		}
		function Ck(a, b) {
			b &= ~rk;
			b &= ~qk;
			a.suspendedLanes |= b;
			a.pingedLanes &= ~b;
			for (a = a.expirationTimes; 0 < b;) {
				var c = 31 - oc(b), d = 1 << c;
				a[c] = -1;
				b &= ~d;
			}
		}
		function Ek(a) {
			if (0 !== (K & 6)) throw Error(p$1(327));
			Hk();
			var b = uc(a, 0);
			if (0 === (b & 1)) return Dk(a, B()), null;
			var c = Ik(a, b);
			if (0 !== a.tag && 2 === c) {
				var d = xc(a);
				0 !== d && (b = d, c = Nk(a, d));
			}
			if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B()), c;
			if (6 === c) throw Error(p$1(345));
			a.finishedWork = a.current.alternate;
			a.finishedLanes = b;
			Pk(a, tk, uk);
			Dk(a, B());
			return null;
		}
		function Qk(a, b) {
			var c = K;
			K |= 1;
			try {
				return a(b);
			} finally {
				K = c, 0 === K && (Gj = B() + 500, fg && jg());
			}
		}
		function Rk(a) {
			null !== wk$1 && 0 === wk$1.tag && 0 === (K & 6) && Hk();
			var b = K;
			K |= 1;
			var c = ok.transition, d = C;
			try {
				if (ok.transition = null, C = 1, a) return a();
			} finally {
				C = d, ok.transition = c, K = b, 0 === (K & 6) && jg();
			}
		}
		function Hj() {
			fj = ej.current;
			E(ej);
		}
		function Kk(a, b) {
			a.finishedWork = null;
			a.finishedLanes = 0;
			var c = a.timeoutHandle;
			-1 !== c && (a.timeoutHandle = -1, Gf(c));
			if (null !== Y) for (c = Y.return; null !== c;) {
				var d = c;
				wg(d);
				switch (d.tag) {
					case 1:
						d = d.type.childContextTypes;
						null !== d && void 0 !== d && $f();
						break;
					case 3:
						zh$1();
						E(Wf);
						E(H);
						Eh();
						break;
					case 5:
						Bh(d);
						break;
					case 4:
						zh$1();
						break;
					case 13:
						E(L);
						break;
					case 19:
						E(L);
						break;
					case 10:
						ah(d.type._context);
						break;
					case 22:
					case 23: Hj();
				}
				c = c.return;
			}
			Q = a;
			Y = a = Pg(a.current, null);
			Z = fj = b;
			T = 0;
			pk = null;
			rk = qk = rh = 0;
			tk = sk = null;
			if (null !== fh) {
				for (b = 0; b < fh.length; b++) if (c = fh[b], d = c.interleaved, null !== d) {
					c.interleaved = null;
					var e = d.next, f$2 = c.pending;
					if (null !== f$2) {
						var g$1 = f$2.next;
						f$2.next = e;
						d.next = g$1;
					}
					c.pending = d;
				}
				fh = null;
			}
			return a;
		}
		function Mk(a, b) {
			do {
				var c = Y;
				try {
					$g();
					Fh.current = Rh;
					if (Ih) {
						for (var d = M.memoizedState; null !== d;) {
							var e = d.queue;
							null !== e && (e.pending = null);
							d = d.next;
						}
						Ih = !1;
					}
					Hh = 0;
					O = N = M = null;
					Jh = !1;
					Kh = 0;
					nk.current = null;
					if (null === c || null === c.return) {
						T = 1;
						pk = b;
						Y = null;
						break;
					}
					a: {
						var f$2 = a, g$1 = c.return, h$1 = c, k$2 = b;
						b = Z;
						h$1.flags |= 32768;
						if (null !== k$2 && "object" === typeof k$2 && "function" === typeof k$2.then) {
							var l$3 = k$2, m$2 = h$1, q$3 = m$2.tag;
							if (0 === (m$2.mode & 1) && (0 === q$3 || 11 === q$3 || 15 === q$3)) {
								var r$2 = m$2.alternate;
								r$2 ? (m$2.updateQueue = r$2.updateQueue, m$2.memoizedState = r$2.memoizedState, m$2.lanes = r$2.lanes) : (m$2.updateQueue = null, m$2.memoizedState = null);
							}
							var y$2 = Ui(g$1);
							if (null !== y$2) {
								y$2.flags &= -257;
								Vi(y$2, g$1, h$1, f$2, b);
								y$2.mode & 1 && Si(f$2, l$3, b);
								b = y$2;
								k$2 = l$3;
								var n$2 = b.updateQueue;
								if (null === n$2) {
									var t$2 = /* @__PURE__ */ new Set();
									t$2.add(k$2);
									b.updateQueue = t$2;
								} else n$2.add(k$2);
								break a;
							} else {
								if (0 === (b & 1)) {
									Si(f$2, l$3, b);
									tj();
									break a;
								}
								k$2 = Error(p$1(426));
							}
						} else if (I && h$1.mode & 1) {
							var J$2 = Ui(g$1);
							if (null !== J$2) {
								0 === (J$2.flags & 65536) && (J$2.flags |= 256);
								Vi(J$2, g$1, h$1, f$2, b);
								Jg(Ji(k$2, h$1));
								break a;
							}
						}
						f$2 = k$2 = Ji(k$2, h$1);
						4 !== T && (T = 2);
						null === sk ? sk = [f$2] : sk.push(f$2);
						f$2 = g$1;
						do {
							switch (f$2.tag) {
								case 3:
									f$2.flags |= 65536;
									b &= -b;
									f$2.lanes |= b;
									var x$2 = Ni(f$2, k$2, b);
									ph(f$2, x$2);
									break a;
								case 1:
									h$1 = k$2;
									var w$1 = f$2.type, u$2 = f$2.stateNode;
									if (0 === (f$2.flags & 128) && ("function" === typeof w$1.getDerivedStateFromError || null !== u$2 && "function" === typeof u$2.componentDidCatch && (null === Ri || !Ri.has(u$2)))) {
										f$2.flags |= 65536;
										b &= -b;
										f$2.lanes |= b;
										var F$2 = Qi(f$2, h$1, b);
										ph(f$2, F$2);
										break a;
									}
							}
							f$2 = f$2.return;
						} while (null !== f$2);
					}
					Sk(c);
				} catch (na) {
					b = na;
					Y === c && null !== c && (Y = c = c.return);
					continue;
				}
				break;
			} while (1);
		}
		function Jk() {
			var a = mk.current;
			mk.current = Rh;
			return null === a ? Rh : a;
		}
		function tj() {
			if (0 === T || 3 === T || 2 === T) T = 4;
			null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
		}
		function Ik(a, b) {
			var c = K;
			K |= 2;
			var d = Jk();
			if (Q !== a || Z !== b) uk = null, Kk(a, b);
			do
				try {
					Tk();
					break;
				} catch (e) {
					Mk(a, e);
				}
			while (1);
			$g();
			K = c;
			mk.current = d;
			if (null !== Y) throw Error(p$1(261));
			Q = null;
			Z = 0;
			return T;
		}
		function Tk() {
			for (; null !== Y;) Uk(Y);
		}
		function Lk() {
			for (; null !== Y && !cc();) Uk(Y);
		}
		function Uk(a) {
			var b = Vk(a.alternate, a, fj);
			a.memoizedProps = a.pendingProps;
			null === b ? Sk(a) : Y = b;
			nk.current = null;
		}
		function Sk(a) {
			var b = a;
			do {
				var c = b.alternate;
				a = b.return;
				if (0 === (b.flags & 32768)) {
					if (c = Ej(c, b, fj), null !== c) {
						Y = c;
						return;
					}
				} else {
					c = Ij(c, b);
					if (null !== c) {
						c.flags &= 32767;
						Y = c;
						return;
					}
					if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
					else {
						T = 6;
						Y = null;
						return;
					}
				}
				b = b.sibling;
				if (null !== b) {
					Y = b;
					return;
				}
				Y = b = a;
			} while (null !== b);
			0 === T && (T = 5);
		}
		function Pk(a, b, c) {
			var d = C, e = ok.transition;
			try {
				ok.transition = null, C = 1, Wk(a, b, c, d);
			} finally {
				ok.transition = e, C = d;
			}
			return null;
		}
		function Wk(a, b, c, d) {
			do
				Hk();
			while (null !== wk$1);
			if (0 !== (K & 6)) throw Error(p$1(327));
			c = a.finishedWork;
			var e = a.finishedLanes;
			if (null === c) return null;
			a.finishedWork = null;
			a.finishedLanes = 0;
			if (c === a.current) throw Error(p$1(177));
			a.callbackNode = null;
			a.callbackPriority = 0;
			var f$2 = c.lanes | c.childLanes;
			Bc(a, f$2);
			a === Q && (Y = Q = null, Z = 0);
			0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = !0, Fk(hc, function() {
				Hk();
				return null;
			}));
			f$2 = 0 !== (c.flags & 15990);
			if (0 !== (c.subtreeFlags & 15990) || f$2) {
				f$2 = ok.transition;
				ok.transition = null;
				var g$1 = C;
				C = 1;
				var h$1 = K;
				K |= 4;
				nk.current = null;
				Oj(a, c);
				dk(c, a);
				Oe(Df);
				dd = !!Cf;
				Df = Cf = null;
				a.current = c;
				hk(c, a, e);
				dc();
				K = h$1;
				C = g$1;
				ok.transition = f$2;
			} else a.current = c;
			vk && (vk = !1, wk$1 = a, xk = e);
			f$2 = a.pendingLanes;
			0 === f$2 && (Ri = null);
			mc(c.stateNode, d);
			Dk(a, B());
			if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, {
				componentStack: e.stack,
				digest: e.digest
			});
			if (Oi) throw Oi = !1, a = Pi, Pi = null, a;
			0 !== (xk & 1) && 0 !== a.tag && Hk();
			f$2 = a.pendingLanes;
			0 !== (f$2 & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
			jg();
			return null;
		}
		function Hk() {
			if (null !== wk$1) {
				var a = Dc(xk), b = ok.transition, c = C;
				try {
					ok.transition = null;
					C = 16 > a ? 16 : a;
					if (null === wk$1) var d = !1;
					else {
						a = wk$1;
						wk$1 = null;
						xk = 0;
						if (0 !== (K & 6)) throw Error(p$1(331));
						var e = K;
						K |= 4;
						for (V = a.current; null !== V;) {
							var f$2 = V, g$1 = f$2.child;
							if (0 !== (V.flags & 16)) {
								var h$1 = f$2.deletions;
								if (null !== h$1) {
									for (var k$2 = 0; k$2 < h$1.length; k$2++) {
										var l$3 = h$1[k$2];
										for (V = l$3; null !== V;) {
											var m$2 = V;
											switch (m$2.tag) {
												case 0:
												case 11:
												case 15: Pj(8, m$2, f$2);
											}
											var q$3 = m$2.child;
											if (null !== q$3) q$3.return = m$2, V = q$3;
											else for (; null !== V;) {
												m$2 = V;
												var r$2 = m$2.sibling, y$2 = m$2.return;
												Sj(m$2);
												if (m$2 === l$3) {
													V = null;
													break;
												}
												if (null !== r$2) {
													r$2.return = y$2;
													V = r$2;
													break;
												}
												V = y$2;
											}
										}
									}
									var n$2 = f$2.alternate;
									if (null !== n$2) {
										var t$2 = n$2.child;
										if (null !== t$2) {
											n$2.child = null;
											do {
												var J$2 = t$2.sibling;
												t$2.sibling = null;
												t$2 = J$2;
											} while (null !== t$2);
										}
									}
									V = f$2;
								}
							}
							if (0 !== (f$2.subtreeFlags & 2064) && null !== g$1) g$1.return = f$2, V = g$1;
							else b: for (; null !== V;) {
								f$2 = V;
								if (0 !== (f$2.flags & 2048)) switch (f$2.tag) {
									case 0:
									case 11:
									case 15: Pj(9, f$2, f$2.return);
								}
								var x$2 = f$2.sibling;
								if (null !== x$2) {
									x$2.return = f$2.return;
									V = x$2;
									break b;
								}
								V = f$2.return;
							}
						}
						var w$1 = a.current;
						for (V = w$1; null !== V;) {
							g$1 = V;
							var u$2 = g$1.child;
							if (0 !== (g$1.subtreeFlags & 2064) && null !== u$2) u$2.return = g$1, V = u$2;
							else b: for (g$1 = w$1; null !== V;) {
								h$1 = V;
								if (0 !== (h$1.flags & 2048)) try {
									switch (h$1.tag) {
										case 0:
										case 11:
										case 15: Qj(9, h$1);
									}
								} catch (na) {
									W(h$1, h$1.return, na);
								}
								if (h$1 === g$1) {
									V = null;
									break b;
								}
								var F$2 = h$1.sibling;
								if (null !== F$2) {
									F$2.return = h$1.return;
									V = F$2;
									break b;
								}
								V = h$1.return;
							}
						}
						K = e;
						jg();
						if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
							lc.onPostCommitFiberRoot(kc, a);
						} catch (na) {}
						d = !0;
					}
					return d;
				} finally {
					C = c, ok.transition = b;
				}
			}
			return !1;
		}
		function Xk(a, b, c) {
			b = Ji(c, b);
			b = Ni(a, b, 1);
			a = nh(a, b, 1);
			b = R();
			null !== a && (Ac(a, 1, b), Dk(a, b));
		}
		function W(a, b, c) {
			if (3 === a.tag) Xk(a, a, c);
			else for (; null !== b;) {
				if (3 === b.tag) {
					Xk(b, a, c);
					break;
				} else if (1 === b.tag) {
					var d = b.stateNode;
					if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
						a = Ji(c, a);
						a = Qi(b, a, 1);
						b = nh(b, a, 1);
						a = R();
						null !== b && (Ac(b, 1, a), Dk(b, a));
						break;
					}
				}
				b = b.return;
			}
		}
		function Ti(a, b, c) {
			var d = a.pingCache;
			null !== d && d.delete(b);
			b = R();
			a.pingedLanes |= a.suspendedLanes & c;
			Q === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c);
			Dk(a, b);
		}
		function Yk(a, b) {
			0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
			var c = R();
			a = ih(a, b);
			null !== a && (Ac(a, b, c), Dk(a, c));
		}
		function uj(a) {
			var b = a.memoizedState, c = 0;
			null !== b && (c = b.retryLane);
			Yk(a, c);
		}
		function bk(a, b) {
			var c = 0;
			switch (a.tag) {
				case 13:
					var d = a.stateNode;
					var e = a.memoizedState;
					null !== e && (c = e.retryLane);
					break;
				case 19:
					d = a.stateNode;
					break;
				default: throw Error(p$1(314));
			}
			null !== d && d.delete(b);
			Yk(a, c);
		}
		var Vk = function(a, b, c) {
			if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) dh = !0;
			else {
				if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return dh = !1, yj(a, b, c);
				dh = 0 !== (a.flags & 131072) ? !0 : !1;
			}
			else dh = !1, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
			b.lanes = 0;
			switch (b.tag) {
				case 2:
					var d = b.type;
					ij(a, b);
					a = b.pendingProps;
					var e = Yf(b, H.current);
					ch$1(b, c);
					e = Nh(null, b, d, a, e, c);
					var f$2 = Sh();
					b.flags |= 1;
					"object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f$2 = !0, cg(b)) : f$2 = !1, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b), e.updater = Ei, b.stateNode = e, e._reactInternals = b, Ii(b, d, a, c), b = jj(null, b, d, !0, f$2, c)) : (b.tag = 0, I && f$2 && vg(b), Xi(null, b, e, c), b = b.child);
					return b;
				case 16:
					d = b.elementType;
					a: {
						ij(a, b);
						a = b.pendingProps;
						e = d._init;
						d = e(d._payload);
						b.type = d;
						e = b.tag = Zk(d);
						a = Ci(d, a);
						switch (e) {
							case 0:
								b = cj(null, b, d, a, c);
								break a;
							case 1:
								b = hj(null, b, d, a, c);
								break a;
							case 11:
								b = Yi(null, b, d, a, c);
								break a;
							case 14:
								b = $i(null, b, d, Ci(d.type, a), c);
								break a;
						}
						throw Error(p$1(306, d, ""));
					}
					return b;
				case 0: return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), cj(a, b, d, e, c);
				case 1: return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), hj(a, b, d, e, c);
				case 3:
					a: {
						kj(b);
						if (null === a) throw Error(p$1(387));
						d = b.pendingProps;
						f$2 = b.memoizedState;
						e = f$2.element;
						lh(a, b);
						qh(b, d, null, c);
						var g$1 = b.memoizedState;
						d = g$1.element;
						if (f$2.isDehydrated) if (f$2 = {
							element: d,
							isDehydrated: !1,
							cache: g$1.cache,
							pendingSuspenseBoundaries: g$1.pendingSuspenseBoundaries,
							transitions: g$1.transitions
						}, b.updateQueue.baseState = f$2, b.memoizedState = f$2, b.flags & 256) {
							e = Ji(Error(p$1(423)), b);
							b = lj(a, b, d, c, e);
							break a;
						} else if (d !== e) {
							e = Ji(Error(p$1(424)), b);
							b = lj(a, b, d, c, e);
							break a;
						} else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = !0, zg = null, c = Vg(b, null, d, c), b.child = c; c;) c.flags = c.flags & -3 | 4096, c = c.sibling;
						else {
							Ig();
							if (d === e) {
								b = Zi(a, b, c);
								break a;
							}
							Xi(a, b, d, c);
						}
						b = b.child;
					}
					return b;
				case 5: return Ah(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f$2 = null !== a ? a.memoizedProps : null, g$1 = e.children, Ef(d, e) ? g$1 = null : null !== f$2 && Ef(d, f$2) && (b.flags |= 32), gj(a, b), Xi(a, b, g$1, c), b.child;
				case 6: return null === a && Eg(b), null;
				case 13: return oj(a, b, c);
				case 4: return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi(a, b, d, c), b.child;
				case 11: return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), Yi(a, b, d, e, c);
				case 7: return Xi(a, b, b.pendingProps, c), b.child;
				case 8: return Xi(a, b, b.pendingProps.children, c), b.child;
				case 12: return Xi(a, b, b.pendingProps.children, c), b.child;
				case 10:
					a: {
						d = b.type._context;
						e = b.pendingProps;
						f$2 = b.memoizedProps;
						g$1 = e.value;
						G(Wg, d._currentValue);
						d._currentValue = g$1;
						if (null !== f$2) if (He(f$2.value, g$1)) {
							if (f$2.children === e.children && !Wf.current) {
								b = Zi(a, b, c);
								break a;
							}
						} else for (f$2 = b.child, null !== f$2 && (f$2.return = b); null !== f$2;) {
							var h$1 = f$2.dependencies;
							if (null !== h$1) {
								g$1 = f$2.child;
								for (var k$2 = h$1.firstContext; null !== k$2;) {
									if (k$2.context === d) {
										if (1 === f$2.tag) {
											k$2 = mh(-1, c & -c);
											k$2.tag = 2;
											var l$3 = f$2.updateQueue;
											if (null !== l$3) {
												l$3 = l$3.shared;
												var m$2 = l$3.pending;
												null === m$2 ? k$2.next = k$2 : (k$2.next = m$2.next, m$2.next = k$2);
												l$3.pending = k$2;
											}
										}
										f$2.lanes |= c;
										k$2 = f$2.alternate;
										null !== k$2 && (k$2.lanes |= c);
										bh(f$2.return, c, b);
										h$1.lanes |= c;
										break;
									}
									k$2 = k$2.next;
								}
							} else if (10 === f$2.tag) g$1 = f$2.type === b.type ? null : f$2.child;
							else if (18 === f$2.tag) {
								g$1 = f$2.return;
								if (null === g$1) throw Error(p$1(341));
								g$1.lanes |= c;
								h$1 = g$1.alternate;
								null !== h$1 && (h$1.lanes |= c);
								bh(g$1, c, b);
								g$1 = f$2.sibling;
							} else g$1 = f$2.child;
							if (null !== g$1) g$1.return = f$2;
							else for (g$1 = f$2; null !== g$1;) {
								if (g$1 === b) {
									g$1 = null;
									break;
								}
								f$2 = g$1.sibling;
								if (null !== f$2) {
									f$2.return = g$1.return;
									g$1 = f$2;
									break;
								}
								g$1 = g$1.return;
							}
							f$2 = g$1;
						}
						Xi(a, b, e.children, c);
						b = b.child;
					}
					return b;
				case 9: return e = b.type, d = b.pendingProps.children, ch$1(b, c), e = eh(e), d = d(e), b.flags |= 1, Xi(a, b, d, c), b.child;
				case 14: return d = b.type, e = Ci(d, b.pendingProps), e = Ci(d.type, e), $i(a, b, d, e, c);
				case 15: return bj(a, b, b.type, b.pendingProps, c);
				case 17: return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), ij(a, b), b.tag = 1, Zf(d) ? (a = !0, cg(b)) : a = !1, ch$1(b, c), Gi(b, d, e), Ii(b, d, e, c), jj(null, b, d, !0, a, c);
				case 19: return xj(a, b, c);
				case 22: return dj(a, b, c);
			}
			throw Error(p$1(156, b.tag));
		};
		function Fk(a, b) {
			return ac(a, b);
		}
		function $k(a, b, c, d) {
			this.tag = a;
			this.key = c;
			this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
			this.index = 0;
			this.ref = null;
			this.pendingProps = b;
			this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
			this.mode = d;
			this.subtreeFlags = this.flags = 0;
			this.deletions = null;
			this.childLanes = this.lanes = 0;
			this.alternate = null;
		}
		function Bg(a, b, c, d) {
			return new $k(a, b, c, d);
		}
		function aj(a) {
			a = a.prototype;
			return !(!a || !a.isReactComponent);
		}
		function Zk(a) {
			if ("function" === typeof a) return aj(a) ? 1 : 0;
			if (void 0 !== a && null !== a) {
				a = a.$$typeof;
				if (a === Da) return 11;
				if (a === Ga) return 14;
			}
			return 2;
		}
		function Pg(a, b) {
			var c = a.alternate;
			null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
			c.flags = a.flags & 14680064;
			c.childLanes = a.childLanes;
			c.lanes = a.lanes;
			c.child = a.child;
			c.memoizedProps = a.memoizedProps;
			c.memoizedState = a.memoizedState;
			c.updateQueue = a.updateQueue;
			b = a.dependencies;
			c.dependencies = null === b ? null : {
				lanes: b.lanes,
				firstContext: b.firstContext
			};
			c.sibling = a.sibling;
			c.index = a.index;
			c.ref = a.ref;
			return c;
		}
		function Rg(a, b, c, d, e, f$2) {
			var g$1 = 2;
			d = a;
			if ("function" === typeof a) aj(a) && (g$1 = 1);
			else if ("string" === typeof a) g$1 = 5;
			else a: switch (a) {
				case ya: return Tg(c.children, e, f$2, b);
				case za:
					g$1 = 8;
					e |= 8;
					break;
				case Aa: return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f$2, a;
				case Ea: return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f$2, a;
				case Fa: return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f$2, a;
				case Ia: return pj(c, e, f$2, b);
				default:
					if ("object" === typeof a && null !== a) switch (a.$$typeof) {
						case Ba:
							g$1 = 10;
							break a;
						case Ca:
							g$1 = 9;
							break a;
						case Da:
							g$1 = 11;
							break a;
						case Ga:
							g$1 = 14;
							break a;
						case Ha:
							g$1 = 16;
							d = null;
							break a;
					}
					throw Error(p$1(130, null == a ? a : typeof a, ""));
			}
			b = Bg(g$1, c, b, e);
			b.elementType = a;
			b.type = d;
			b.lanes = f$2;
			return b;
		}
		function Tg(a, b, c, d) {
			a = Bg(7, a, d, b);
			a.lanes = c;
			return a;
		}
		function pj(a, b, c, d) {
			a = Bg(22, a, d, b);
			a.elementType = Ia;
			a.lanes = c;
			a.stateNode = { isHidden: !1 };
			return a;
		}
		function Qg(a, b, c) {
			a = Bg(6, a, null, b);
			a.lanes = c;
			return a;
		}
		function Sg(a, b, c) {
			b = Bg(4, null !== a.children ? a.children : [], a.key, b);
			b.lanes = c;
			b.stateNode = {
				containerInfo: a.containerInfo,
				pendingChildren: null,
				implementation: a.implementation
			};
			return b;
		}
		function al(a, b, c, d, e) {
			this.tag = b;
			this.containerInfo = a;
			this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
			this.timeoutHandle = -1;
			this.callbackNode = this.pendingContext = this.context = null;
			this.callbackPriority = 0;
			this.eventTimes = zc(0);
			this.expirationTimes = zc(-1);
			this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
			this.entanglements = zc(0);
			this.identifierPrefix = d;
			this.onRecoverableError = e;
			this.mutableSourceEagerHydrationData = null;
		}
		function bl(a, b, c, d, e, f$2, g$1, h$1, k$2) {
			a = new al(a, b, c, h$1, k$2);
			1 === b ? (b = 1, !0 === f$2 && (b |= 8)) : b = 0;
			f$2 = Bg(3, null, null, b);
			a.current = f$2;
			f$2.stateNode = a;
			f$2.memoizedState = {
				element: d,
				isDehydrated: c,
				cache: null,
				transitions: null,
				pendingSuspenseBoundaries: null
			};
			kh(f$2);
			return a;
		}
		function cl(a, b, c) {
			var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
			return {
				$$typeof: wa,
				key: null == d ? null : "" + d,
				children: a,
				containerInfo: b,
				implementation: c
			};
		}
		function dl(a) {
			if (!a) return Vf;
			a = a._reactInternals;
			a: {
				if (Vb(a) !== a || 1 !== a.tag) throw Error(p$1(170));
				var b = a;
				do {
					switch (b.tag) {
						case 3:
							b = b.stateNode.context;
							break a;
						case 1: if (Zf(b.type)) {
							b = b.stateNode.__reactInternalMemoizedMergedChildContext;
							break a;
						}
					}
					b = b.return;
				} while (null !== b);
				throw Error(p$1(171));
			}
			if (1 === a.tag) {
				var c = a.type;
				if (Zf(c)) return bg(a, c, b);
			}
			return b;
		}
		function el(a, b, c, d, e, f$2, g$1, h$1, k$2) {
			a = bl(c, d, !0, a, e, f$2, g$1, h$1, k$2);
			a.context = dl(null);
			c = a.current;
			d = R();
			e = yi(c);
			f$2 = mh(d, e);
			f$2.callback = void 0 !== b && null !== b ? b : null;
			nh(c, f$2, e);
			a.current.lanes = e;
			Ac(a, e, d);
			Dk(a, d);
			return a;
		}
		function fl$1(a, b, c, d) {
			var e = b.current, f$2 = R(), g$1 = yi(e);
			c = dl(c);
			null === b.context ? b.context = c : b.pendingContext = c;
			b = mh(f$2, g$1);
			b.payload = { element: a };
			d = void 0 === d ? null : d;
			null !== d && (b.callback = d);
			a = nh(e, b, g$1);
			null !== a && (gi(a, e, g$1, f$2), oh(a, e, g$1));
			return g$1;
		}
		function gl(a) {
			a = a.current;
			if (!a.child) return null;
			switch (a.child.tag) {
				case 5: return a.child.stateNode;
				default: return a.child.stateNode;
			}
		}
		function hl(a, b) {
			a = a.memoizedState;
			if (null !== a && null !== a.dehydrated) {
				var c = a.retryLane;
				a.retryLane = 0 !== c && c < b ? c : b;
			}
		}
		function il(a, b) {
			hl(a, b);
			(a = a.alternate) && hl(a, b);
		}
		function jl() {
			return null;
		}
		var kl = "function" === typeof reportError ? reportError : function(a) {
			console.error(a);
		};
		function ll(a) {
			this._internalRoot = a;
		}
		ml.prototype.render = ll.prototype.render = function(a) {
			var b = this._internalRoot;
			if (null === b) throw Error(p$1(409));
			fl$1(a, b, null, null);
		};
		ml.prototype.unmount = ll.prototype.unmount = function() {
			var a = this._internalRoot;
			if (null !== a) {
				this._internalRoot = null;
				var b = a.containerInfo;
				Rk(function() {
					fl$1(null, a, null, null);
				});
				b[uf] = null;
			}
		};
		function ml(a) {
			this._internalRoot = a;
		}
		ml.prototype.unstable_scheduleHydration = function(a) {
			if (a) {
				var b = Hc();
				a = {
					blockedOn: null,
					target: a,
					priority: b
				};
				for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++);
				Qc.splice(c, 0, a);
				0 === c && Vc(a);
			}
		};
		function nl(a) {
			return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
		}
		function ol(a) {
			return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
		}
		function pl() {}
		function ql(a, b, c, d, e) {
			if (e) {
				if ("function" === typeof d) {
					var f$2 = d;
					d = function() {
						var a$1 = gl(g$1);
						f$2.call(a$1);
					};
				}
				var g$1 = el(b, d, a, 0, null, !1, !1, "", pl);
				a._reactRootContainer = g$1;
				a[uf] = g$1.current;
				sf(8 === a.nodeType ? a.parentNode : a);
				Rk();
				return g$1;
			}
			for (; e = a.lastChild;) a.removeChild(e);
			if ("function" === typeof d) {
				var h$1 = d;
				d = function() {
					var a$1 = gl(k$2);
					h$1.call(a$1);
				};
			}
			var k$2 = bl(a, 0, !1, null, null, !1, !1, "", pl);
			a._reactRootContainer = k$2;
			a[uf] = k$2.current;
			sf(8 === a.nodeType ? a.parentNode : a);
			Rk(function() {
				fl$1(b, k$2, c, d);
			});
			return k$2;
		}
		function rl(a, b, c, d, e) {
			var f$2 = c._reactRootContainer;
			if (f$2) {
				var g$1 = f$2;
				if ("function" === typeof e) {
					var h$1 = e;
					e = function() {
						var a$1 = gl(g$1);
						h$1.call(a$1);
					};
				}
				fl$1(b, g$1, a, e);
			} else g$1 = ql(c, b, a, e, d);
			return gl(g$1);
		}
		Ec = function(a) {
			switch (a.tag) {
				case 3:
					var b = a.stateNode;
					if (b.current.memoizedState.isDehydrated) {
						var c = tc(b.pendingLanes);
						0 !== c && (Cc(b, c | 1), Dk(b, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
					}
					break;
				case 13: Rk(function() {
					var b$1 = ih(a, 1);
					if (null !== b$1) gi(b$1, a, 1, R());
				}), il(a, 1);
			}
		};
		Fc = function(a) {
			if (13 === a.tag) {
				var b = ih(a, 134217728);
				if (null !== b) gi(b, a, 134217728, R());
				il(a, 134217728);
			}
		};
		Gc = function(a) {
			if (13 === a.tag) {
				var b = yi(a), c = ih(a, b);
				if (null !== c) gi(c, a, b, R());
				il(a, b);
			}
		};
		Hc = function() {
			return C;
		};
		Ic = function(a, b) {
			var c = C;
			try {
				return C = a, b();
			} finally {
				C = c;
			}
		};
		yb = function(a, b, c) {
			switch (b) {
				case "input":
					bb(a, c);
					b = c.name;
					if ("radio" === c.type && null != b) {
						for (c = a; c.parentNode;) c = c.parentNode;
						c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + "][type=\"radio\"]");
						for (b = 0; b < c.length; b++) {
							var d = c[b];
							if (d !== a && d.form === a.form) {
								var e = Db(d);
								if (!e) throw Error(p$1(90));
								Wa(d);
								bb(d, e);
							}
						}
					}
					break;
				case "textarea":
					ib(a, c);
					break;
				case "select": b = c.value, null != b && fb(a, !!c.multiple, b, !1);
			}
		};
		Gb = Qk;
		Hb = Rk;
		var sl = {
			usingClientEntryPoint: !1,
			Events: [
				Cb,
				ue,
				Db,
				Eb,
				Fb,
				Qk
			]
		}, tl = {
			findFiberByHostInstance: Wc,
			bundleType: 0,
			version: "18.3.1",
			rendererPackageName: "react-dom"
		};
		var ul = {
			bundleType: tl.bundleType,
			version: tl.version,
			rendererPackageName: tl.rendererPackageName,
			rendererConfig: tl.rendererConfig,
			overrideHookState: null,
			overrideHookStateDeletePath: null,
			overrideHookStateRenamePath: null,
			overrideProps: null,
			overridePropsDeletePath: null,
			overridePropsRenamePath: null,
			setErrorHandler: null,
			setSuspenseHandler: null,
			scheduleUpdate: null,
			currentDispatcherRef: ua.ReactCurrentDispatcher,
			findHostInstanceByFiber: function(a) {
				a = Zb(a);
				return null === a ? null : a.stateNode;
			},
			findFiberByHostInstance: tl.findFiberByHostInstance || jl,
			findHostInstancesForRefresh: null,
			scheduleRefresh: null,
			scheduleRoot: null,
			setRefreshHandler: null,
			getCurrentFiber: null,
			reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
		};
		if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
			var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
			if (!vl.isDisabled && vl.supportsFiber) try {
				kc = vl.inject(ul), lc = vl;
			} catch (a) {}
		}
		exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
		exports.createPortal = function(a, b) {
			var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
			if (!nl(b)) throw Error(p$1(200));
			return cl(a, b, null, c);
		};
		exports.createRoot = function(a, b) {
			if (!nl(a)) throw Error(p$1(299));
			var c = !1, d = "", e = kl;
			null !== b && void 0 !== b && (!0 === b.unstable_strictMode && (c = !0), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
			b = bl(a, 1, !1, null, null, c, !1, d, e);
			a[uf] = b.current;
			sf(8 === a.nodeType ? a.parentNode : a);
			return new ll(b);
		};
		exports.findDOMNode = function(a) {
			if (null == a) return null;
			if (1 === a.nodeType) return a;
			var b = a._reactInternals;
			if (void 0 === b) {
				if ("function" === typeof a.render) throw Error(p$1(188));
				a = Object.keys(a).join(",");
				throw Error(p$1(268, a));
			}
			a = Zb(b);
			a = null === a ? null : a.stateNode;
			return a;
		};
		exports.flushSync = function(a) {
			return Rk(a);
		};
		exports.hydrate = function(a, b, c) {
			if (!ol(b)) throw Error(p$1(200));
			return rl(null, a, b, !0, c);
		};
		exports.hydrateRoot = function(a, b, c) {
			if (!nl(a)) throw Error(p$1(405));
			var d = null != c && c.hydratedSources || null, e = !1, f$2 = "", g$1 = kl;
			null !== c && void 0 !== c && (!0 === c.unstable_strictMode && (e = !0), void 0 !== c.identifierPrefix && (f$2 = c.identifierPrefix), void 0 !== c.onRecoverableError && (g$1 = c.onRecoverableError));
			b = el(b, null, a, 1, null != c ? c : null, e, !1, f$2, g$1);
			a[uf] = b.current;
			sf(a);
			if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(c, e);
			return new ml(b);
		};
		exports.render = function(a, b, c) {
			if (!ol(b)) throw Error(p$1(200));
			return rl(null, a, b, !1, c);
		};
		exports.unmountComponentAtNode = function(a) {
			if (!ol(a)) throw Error(p$1(40));
			return a._reactRootContainer ? (Rk(function() {
				rl(null, null, a, !1, function() {
					a._reactRootContainer = null;
					a[uf] = null;
				});
			}), !0) : !1;
		};
		exports.unstable_batchedUpdates = Qk;
		exports.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
			if (!ol(c)) throw Error(p$1(200));
			if (null == a || void 0 === a._reactInternals) throw Error(p$1(38));
			return rl(a, b, c, !1, d);
		};
		exports.version = "18.3.1-next-f1338f8080-20240426";
	}) });

//#endregion
//#region node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js
	var require_react_dom = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js": ((exports, module) => {
		function checkDCE() {
			if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") return;
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
			} catch (err$1) {
				console.error(err$1);
			}
		}
		checkDCE();
		module.exports = require_react_dom_production_min();
	}) });

//#endregion
//#region node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/client.js
	var require_client = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/client.js": ((exports) => {
		var m$1 = require_react_dom();
		exports.createRoot = m$1.createRoot;
		exports.hydrateRoot = m$1.hydrateRoot;
	}) });

//#endregion
//#region src/shared/constants.ts
var import_client = /* @__PURE__ */ __toESM(require_client());
var import_react = /* @__PURE__ */ __toESM(require_react());
	const MIN_PANEL_WIDTH = 280;
	const MAX_PANEL_WIDTH = 600;
	const DEFAULT_PANEL_WIDTH = 420;
	const DEFAULT_LAUNCHER_Y_RATIO = .43;
	const LARGE_FILE_BYTES = 10 * 1024 * 1024;
	const MAX_FILE_BYTES = 50 * 1024 * 1024;
	const DEFAULT_TOGGLE_SHORTCUT = {
		altKey: false,
		ctrlKey: false,
		metaKey: true,
		shiftKey: false,
		key: "/",
		code: "Slash"
	};
	const DEFAULT_SETTINGS = {
		fontSize: 18,
		fontFamily: "system",
		lineSpacing: "comfortable",
		theme: "auto",
		tocPosition: "left",
		firstLineIndent: true,
		pageMode: "scroll",
		footerDisplay: "chapter-title",
		keepNavigationVisible: false,
		prefetchChapters: 2,
		toggleShortcut: DEFAULT_TOGGLE_SHORTCUT
	};
	function normalizePrefetchChapters(value) {
		return value === 0 || value === 1 || value === 2 || value === 3 ? value : DEFAULT_SETTINGS.prefetchChapters;
	}
	const DEFAULT_PANEL = {
		expanded: true,
		width: DEFAULT_PANEL_WIDTH,
		immersive: false,
		toolsVisible: true,
		launcherYRatio: DEFAULT_LAUNCHER_Y_RATIO
	};
	const STORAGE_KEYS = {
		settings: "codex-novel-reader:settings:v1",
		panel: "codex-novel-reader:panel:v1",
		progress: "codex-novel-reader:progress:v1",
		bookmarks: "codex-novel-reader:bookmarks:v1",
		recents: "codex-novel-reader:recents:v1"
	};

//#endregion
//#region src/shared/encoding.ts
	function decoder(label, fatal = false) {
		return new TextDecoder(label, { fatal });
	}
	function hasUtf8Bom(bytes) {
		return bytes.length >= 3 && bytes[0] === 239 && bytes[1] === 187 && bytes[2] === 191;
	}
	function controlCharacterRatio(text) {
		if (text.length === 0) return 0;
		return (text.match(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g)?.length ?? 0) / text.length;
	}
	/**
	* Decode common Chinese novel encodings without sending file contents anywhere.
	* GB2312 and GBK are strict subsets of GB18030, so the browser's GB18030 decoder
	* is the safest common fallback and preserves all three formats.
	*/
	function decodeNovelBuffer(buffer) {
		const bytes = new Uint8Array(buffer);
		const warnings = [];
		if (hasUtf8Bom(bytes)) return {
			text: decoder("utf-8").decode(bytes.subarray(3)),
			encoding: "utf-8-bom",
			warnings
		};
		try {
			const text = decoder("utf-8", true).decode(bytes);
			if (controlCharacterRatio(text) < .01) return {
				text,
				encoding: "utf-8",
				warnings
			};
			warnings.push("UTF-8 内容包含较多控制字符，已尝试中文编码回退。");
		} catch {}
		try {
			return {
				text: decoder("gb18030", true).decode(bytes),
				encoding: "gb18030",
				warnings: [...warnings, "文件按 GB18030 解码（兼容 GBK/GB2312）。"]
			};
		} catch {
			return {
				text: decoder("utf-8").decode(bytes),
				encoding: "utf-8",
				warnings: [...warnings, "无法可靠识别编码，已使用 UTF-8 容错解码，个别字符可能显示为 �。"]
			};
		}
	}
	function encodingLabel(encoding) {
		if (encoding === "gb18030") return "GB18030 / GBK / GB2312";
		if (encoding === "utf-8-bom") return "UTF-8 BOM";
		return "UTF-8";
	}

//#endregion
//#region node_modules/.pnpm/fflate@0.8.3/node_modules/fflate/esm/browser.js
	var ch2 = {};
	var wk = (function(c, id$1, msg, transfer, cb$1) {
		var w$1 = new Worker(ch2[id$1] || (ch2[id$1] = URL.createObjectURL(new Blob([c + ";addEventListener(\"error\",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})"], { type: "text/javascript" }))));
		w$1.onmessage = function(e) {
			var d = e.data, ed$1 = d.$e$;
			if (ed$1) {
				var err$1 = new Error(ed$1[0]);
				err$1["code"] = ed$1[1];
				err$1.stack = ed$1[2];
				cb$1(err$1, null);
			} else cb$1(null, d);
		};
		w$1.postMessage(msg, transfer);
		return w$1;
	});
	var u8 = Uint8Array, u16 = Uint16Array, i32 = Int32Array;
	var fleb = new u8([
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		1,
		1,
		1,
		2,
		2,
		2,
		2,
		3,
		3,
		3,
		3,
		4,
		4,
		4,
		4,
		5,
		5,
		5,
		5,
		0,
		0,
		0,
		0
	]);
	var fdeb = new u8([
		0,
		0,
		0,
		0,
		1,
		1,
		2,
		2,
		3,
		3,
		4,
		4,
		5,
		5,
		6,
		6,
		7,
		7,
		8,
		8,
		9,
		9,
		10,
		10,
		11,
		11,
		12,
		12,
		13,
		13,
		0,
		0
	]);
	var clim = new u8([
		16,
		17,
		18,
		0,
		8,
		7,
		9,
		6,
		10,
		5,
		11,
		4,
		12,
		3,
		13,
		2,
		14,
		1,
		15
	]);
	var freb = function(eb$1, start) {
		var b = new u16(31);
		for (var i$1 = 0; i$1 < 31; ++i$1) b[i$1] = start += 1 << eb$1[i$1 - 1];
		var r$2 = new i32(b[30]);
		for (var i$1 = 1; i$1 < 30; ++i$1) for (var j = b[i$1]; j < b[i$1 + 1]; ++j) r$2[j] = j - b[i$1] << 5 | i$1;
		return {
			b,
			r: r$2
		};
	};
	var _a = freb(fleb, 2), fl = _a.b, revfl = _a.r;
	fl[28] = 258, revfl[258] = 28;
	var _b = freb(fdeb, 0), fd = _b.b, revfd = _b.r;
	var rev = new u16(32768);
	for (var i = 0; i < 32768; ++i) {
		var x = (i & 43690) >> 1 | (i & 21845) << 1;
		x = (x & 52428) >> 2 | (x & 13107) << 2;
		x = (x & 61680) >> 4 | (x & 3855) << 4;
		rev[i] = ((x & 65280) >> 8 | (x & 255) << 8) >> 1;
	}
	var hMap = (function(cd$1, mb$1, r$2) {
		var s = cd$1.length;
		var i$1 = 0;
		var l$3 = new u16(mb$1);
		for (; i$1 < s; ++i$1) if (cd$1[i$1]) ++l$3[cd$1[i$1] - 1];
		var le$1 = new u16(mb$1);
		for (i$1 = 1; i$1 < mb$1; ++i$1) le$1[i$1] = le$1[i$1 - 1] + l$3[i$1 - 1] << 1;
		var co;
		if (r$2) {
			co = new u16(1 << mb$1);
			var rvb = 15 - mb$1;
			for (i$1 = 0; i$1 < s; ++i$1) if (cd$1[i$1]) {
				var sv = i$1 << 4 | cd$1[i$1];
				var r_1 = mb$1 - cd$1[i$1];
				var v$3 = le$1[cd$1[i$1] - 1]++ << r_1;
				for (var m$2 = v$3 | (1 << r_1) - 1; v$3 <= m$2; ++v$3) co[rev[v$3] >> rvb] = sv;
			}
		} else {
			co = new u16(s);
			for (i$1 = 0; i$1 < s; ++i$1) if (cd$1[i$1]) co[i$1] = rev[le$1[cd$1[i$1] - 1]++] >> 15 - cd$1[i$1];
		}
		return co;
	});
	var flt = new u8(288);
	for (var i = 0; i < 144; ++i) flt[i] = 8;
	for (var i = 144; i < 256; ++i) flt[i] = 9;
	for (var i = 256; i < 280; ++i) flt[i] = 7;
	for (var i = 280; i < 288; ++i) flt[i] = 8;
	var fdt = new u8(32);
	for (var i = 0; i < 32; ++i) fdt[i] = 5;
	var flm = /* @__PURE__ */ hMap(flt, 9, 0), flrm = /* @__PURE__ */ hMap(flt, 9, 1);
	var fdm = /* @__PURE__ */ hMap(fdt, 5, 0), fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
	var max = function(a) {
		var m$2 = a[0];
		for (var i$1 = 1; i$1 < a.length; ++i$1) if (a[i$1] > m$2) m$2 = a[i$1];
		return m$2;
	};
	var bits = function(d, p$4, m$2) {
		var o = p$4 / 8 | 0;
		return (d[o] | d[o + 1] << 8) >> (p$4 & 7) & m$2;
	};
	var bits16 = function(d, p$4) {
		var o = p$4 / 8 | 0;
		return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >> (p$4 & 7);
	};
	var shft = function(p$4) {
		return (p$4 + 7) / 8 | 0;
	};
	var slc = function(v$3, s, e) {
		if (s == null || s < 0) s = 0;
		if (e == null || e > v$3.length) e = v$3.length;
		return new u8(v$3.subarray(s, e));
	};
	var ec = [
		"unexpected EOF",
		"invalid block type",
		"invalid length/literal",
		"invalid distance",
		"stream finished",
		"no stream handler",
		,
		"no callback",
		"invalid UTF-8 data",
		"extra field too long",
		"date not in range 1980-2099",
		"filename too long",
		"stream finishing",
		"invalid zip data"
	];
	var err = function(ind, msg, nt) {
		var e = new Error(msg || ec[ind]);
		e.code = ind;
		if (Error.captureStackTrace) Error.captureStackTrace(e, err);
		if (!nt) throw e;
		return e;
	};
	var inflt = function(dat, st, buf, dict) {
		var sl$1 = dat.length, dl$1 = dict ? dict.length : 0;
		if (!sl$1 || st.f && !st.l) return buf || new u8(0);
		var noBuf = !buf;
		var resize = noBuf || st.i != 2;
		var noSt = st.i;
		if (noBuf) buf = new u8(sl$1 * 3);
		var cbuf = function(l$4) {
			var bl$1 = buf.length;
			if (l$4 > bl$1) {
				var nbuf = new u8(Math.max(bl$1 * 2, l$4));
				nbuf.set(buf);
				buf = nbuf;
			}
		};
		var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
		var tbts = sl$1 * 8;
		do {
			if (!lm) {
				final = bits(dat, pos, 1);
				var type = bits(dat, pos + 1, 3);
				pos += 3;
				if (!type) {
					var s = shft(pos) + 4, l$3 = dat[s - 4] | dat[s - 3] << 8, t$2 = s + l$3;
					if (t$2 > sl$1) {
						if (noSt) err(0);
						break;
					}
					if (resize) cbuf(bt + l$3);
					buf.set(dat.subarray(s, t$2), bt);
					st.b = bt += l$3, st.p = pos = t$2 * 8, st.f = final;
					continue;
				} else if (type == 1) lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
				else if (type == 2) {
					var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
					var tl$1 = hLit + bits(dat, pos + 5, 31) + 1;
					pos += 14;
					var ldt = new u8(tl$1);
					var clt = new u8(19);
					for (var i$1 = 0; i$1 < hcLen; ++i$1) clt[clim[i$1]] = bits(dat, pos + i$1 * 3, 7);
					pos += hcLen * 3;
					var clb = max(clt), clbmsk = (1 << clb) - 1;
					var clm = hMap(clt, clb, 1);
					for (var i$1 = 0; i$1 < tl$1;) {
						var r$2 = clm[bits(dat, pos, clbmsk)];
						pos += r$2 & 15;
						var s = r$2 >> 4;
						if (s < 16) ldt[i$1++] = s;
						else {
							var c = 0, n$2 = 0;
							if (s == 16) n$2 = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i$1 - 1];
							else if (s == 17) n$2 = 3 + bits(dat, pos, 7), pos += 3;
							else if (s == 18) n$2 = 11 + bits(dat, pos, 127), pos += 7;
							while (n$2--) ldt[i$1++] = c;
						}
					}
					var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
					lbt = max(lt);
					dbt = max(dt);
					lm = hMap(lt, lbt, 1);
					dm = hMap(dt, dbt, 1);
				} else err(1);
				if (pos > tbts) {
					if (noSt) err(0);
					break;
				}
			}
			if (resize) cbuf(bt + 131072);
			var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
			var lpos = pos;
			for (;; lpos = pos) {
				var c = lm[bits16(dat, pos) & lms], sym = c >> 4;
				pos += c & 15;
				if (pos > tbts) {
					if (noSt) err(0);
					break;
				}
				if (!c) err(2);
				if (sym < 256) buf[bt++] = sym;
				else if (sym == 256) {
					lpos = pos, lm = null;
					break;
				} else {
					var add = sym - 254;
					if (sym > 264) {
						var i$1 = sym - 257, b = fleb[i$1];
						add = bits(dat, pos, (1 << b) - 1) + fl[i$1];
						pos += b;
					}
					var d = dm[bits16(dat, pos) & dms], dsym = d >> 4;
					if (!d) err(3);
					pos += d & 15;
					var dt = fd[dsym];
					if (dsym > 3) {
						var b = fdeb[dsym];
						dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
					}
					if (pos > tbts) {
						if (noSt) err(0);
						break;
					}
					if (resize) cbuf(bt + 131072);
					var end = bt + add;
					if (bt < dt) {
						var shift = dl$1 - dt, dend = Math.min(dt, end);
						if (shift + bt < 0) err(3);
						for (; bt < dend; ++bt) buf[bt] = dict[shift + bt];
					}
					for (; bt < end; ++bt) buf[bt] = buf[bt - dt];
				}
			}
			st.l = lm, st.p = lpos, st.b = bt, st.f = final;
			if (lm) final = 1, st.m = lbt, st.d = dm, st.n = dbt;
		} while (!final);
		return bt != buf.length && noBuf ? slc(buf, 0, bt) : buf.subarray(0, bt);
	};
	var et = /* @__PURE__ */ new u8(0);
	var mrg = function(a, b) {
		var o = {};
		for (var k$2 in a) o[k$2] = a[k$2];
		for (var k$2 in b) o[k$2] = b[k$2];
		return o;
	};
	var wcln = function(fn, fnStr, td$2) {
		var dt = fn();
		var st = fn.toString();
		var ks = st.slice(st.indexOf("[") + 1, st.lastIndexOf("]")).replace(/\s+/g, "").split(",");
		for (var i$1 = 0; i$1 < dt.length; ++i$1) {
			var v$3 = dt[i$1], k$2 = ks[i$1];
			if (typeof v$3 == "function") {
				fnStr += ";" + k$2 + "=";
				var st_1 = v$3.toString();
				if (v$3.prototype) if (st_1.indexOf("[native code]") != -1) {
					var spInd = st_1.indexOf(" ", 8) + 1;
					fnStr += st_1.slice(spInd, st_1.indexOf("(", spInd));
				} else {
					fnStr += st_1;
					for (var t$2 in v$3.prototype) fnStr += ";" + k$2 + ".prototype." + t$2 + "=" + v$3.prototype[t$2].toString();
				}
				else fnStr += st_1;
			} else td$2[k$2] = v$3;
		}
		return fnStr;
	};
	var ch = [];
	var cbfs = function(v$3) {
		var tl$1 = [];
		for (var k$2 in v$3) if (v$3[k$2].buffer) tl$1.push((v$3[k$2] = new v$3[k$2].constructor(v$3[k$2])).buffer);
		return tl$1;
	};
	var wrkr = function(fns, init, id$1, cb$1) {
		if (!ch[id$1]) {
			var fnStr = "", td_1 = {}, m$2 = fns.length - 1;
			for (var i$1 = 0; i$1 < m$2; ++i$1) fnStr = wcln(fns[i$1], fnStr, td_1);
			ch[id$1] = {
				c: wcln(fns[m$2], fnStr, td_1),
				e: td_1
			};
		}
		var td$2 = mrg({}, ch[id$1].e);
		return wk(ch[id$1].c + ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" + init.toString() + "}", id$1, td$2, cbfs(td$2), cb$1);
	};
	var bInflt = function() {
		return [
			u8,
			u16,
			i32,
			fleb,
			fdeb,
			clim,
			fl,
			fd,
			flrm,
			fdrm,
			rev,
			ec,
			hMap,
			max,
			bits,
			bits16,
			shft,
			slc,
			err,
			inflt,
			inflateSync,
			pbf,
			gopt
		];
	};
	var pbf = function(msg) {
		return postMessage(msg, [msg.buffer]);
	};
	var gopt = function(o) {
		return o && {
			out: o.size && new u8(o.size),
			dictionary: o.dictionary
		};
	};
	var cbify = function(dat, opts, fns, init, id$1, cb$1) {
		var w$1 = wrkr(fns, init, id$1, function(err$1, dat$1) {
			w$1.terminate();
			cb$1(err$1, dat$1);
		});
		w$1.postMessage([dat, opts], opts.consume ? [dat.buffer] : []);
		return function() {
			w$1.terminate();
		};
	};
	var b2 = function(d, b) {
		return d[b] | d[b + 1] << 8;
	};
	var b4 = function(d, b) {
		return (d[b] | d[b + 1] << 8 | d[b + 2] << 16 | d[b + 3] << 24) >>> 0;
	};
	var b8 = function(d, b) {
		return b4(d, b) + b4(d, b + 4) * 4294967296;
	};
	function inflate(data, opts, cb$1) {
		if (!cb$1) cb$1 = opts, opts = {};
		if (typeof cb$1 != "function") err(7);
		return cbify(data, opts, [bInflt], function(ev) {
			return pbf(inflateSync(ev.data[0], gopt(ev.data[1])));
		}, 1, cb$1);
	}
	function inflateSync(data, opts) {
		return inflt(data, { i: 2 }, opts && opts.out, opts && opts.dictionary);
	}
	var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
	var tds = 0;
	try {
		td.decode(et, { stream: true });
		tds = 1;
	} catch (e) {}
	var dutf8 = function(d) {
		for (var r$2 = "", i$1 = 0;;) {
			var c = d[i$1++];
			var eb$1 = (c > 127) + (c > 223) + (c > 239);
			if (i$1 + eb$1 > d.length) return {
				s: r$2,
				r: slc(d, i$1 - 1)
			};
			if (!eb$1) r$2 += String.fromCharCode(c);
			else if (eb$1 == 3) c = ((c & 15) << 18 | (d[i$1++] & 63) << 12 | (d[i$1++] & 63) << 6 | d[i$1++] & 63) - 65536, r$2 += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
			else if (eb$1 & 1) r$2 += String.fromCharCode((c & 31) << 6 | d[i$1++] & 63);
			else r$2 += String.fromCharCode((c & 15) << 12 | (d[i$1++] & 63) << 6 | d[i$1++] & 63);
		}
	};
	/**
	* Converts a Uint8Array to a string
	* @param dat The data to decode to string
	* @param latin1 Whether or not to interpret the data as Latin-1. This should
	*               not need to be true unless encoding to binary string.
	* @returns The original UTF-8/Latin-1 string
	*/
	function strFromU8(dat, latin1) {
		if (latin1) {
			var r$2 = "";
			for (var i$1 = 0; i$1 < dat.length; i$1 += 16384) r$2 += String.fromCharCode.apply(null, dat.subarray(i$1, i$1 + 16384));
			return r$2;
		} else if (td) return td.decode(dat);
		else {
			var _a$1 = dutf8(dat), s = _a$1.s, r$2 = _a$1.r;
			if (r$2.length) err(8);
			return s;
		}
	}
	var slzh = function(d, b) {
		return b + 30 + b2(d, b + 26) + b2(d, b + 28);
	};
	var zh = function(d, b, z$3) {
		var fnl = b2(d, b + 28), efl = b2(d, b + 30), fn = strFromU8(d.subarray(b + 46, b + 46 + fnl), !(b2(d, b + 8) & 2048)), es = b + 46 + fnl;
		var _a$1 = z64hs(d, es, efl, z$3, b4(d, b + 20), b4(d, b + 24), b4(d, b + 42)), sc$1 = _a$1[0], su = _a$1[1], off = _a$1[2];
		return [
			b2(d, b + 10),
			sc$1,
			su,
			fn,
			es + efl + b2(d, b + 32),
			off
		];
	};
	var z64hs = function(d, b, l$3, z$3, sc$1, su, off) {
		var nsc = sc$1 == 4294967295, nsu = su == 4294967295, noff = off == 4294967295, e = b + l$3;
		var nf$1 = nsc + nsu + noff;
		if (z$3 && nf$1) {
			for (; b + 4 < e; b += 4 + b2(d, b + 2)) if (b2(d, b) == 1) return [
				nsc ? b8(d, b + 4 + 8 * nsu) : sc$1,
				nsu ? b8(d, b + 4) : su,
				noff ? b8(d, b + 4 + 8 * (nsu + nsc)) : off,
				1
			];
			if (z$3 < 2) err(13);
		}
		return [
			sc$1,
			su,
			off,
			0
		];
	};
	var mt = typeof queueMicrotask == "function" ? queueMicrotask : typeof setTimeout == "function" ? setTimeout : function(fn) {
		fn();
	};
	function unzip(data, opts, cb$1) {
		if (!cb$1) cb$1 = opts, opts = {};
		if (typeof cb$1 != "function") err(7);
		var term = [];
		var tAll = function() {
			for (var i$2 = 0; i$2 < term.length; ++i$2) term[i$2]();
		};
		var files = {};
		var cbd = function(a, b) {
			mt(function() {
				cb$1(a, b);
			});
		};
		mt(function() {
			cbd = cb$1;
		});
		var e = data.length - 22;
		for (; b4(data, e) != 101010256; --e) if (!e || data.length - e > 65558) {
			cbd(err(13, 0, 1), null);
			return tAll;
		}
		var lft = b2(data, e + 8);
		if (lft) {
			var c = lft;
			var o = b4(data, e + 16);
			var z$3 = b4(data, e - 20) == 117853008;
			if (z$3) {
				var ze$1 = b4(data, e - 12);
				z$3 = b4(data, ze$1) == 101075792;
				if (z$3) {
					c = lft = b4(data, ze$1 + 32);
					o = b4(data, ze$1 + 48);
				}
			}
			var fltr = opts && opts.filter;
			var _loop_3 = function(i$2) {
				var _a$1 = zh(data, o, z$3), c_1 = _a$1[0], sc$1 = _a$1[1], su = _a$1[2], fn = _a$1[3], no = _a$1[4], off = _a$1[5], b = slzh(data, off);
				o = no;
				var cbl = function(e$1, d) {
					if (e$1) {
						tAll();
						cbd(e$1, null);
					} else {
						if (d) files[fn] = d;
						if (!--lft) cbd(null, files);
					}
				};
				if (!fltr || fltr({
					name: fn,
					size: sc$1,
					originalSize: su,
					compression: c_1
				})) if (!c_1) cbl(null, slc(data, b, b + sc$1));
				else if (c_1 == 8) {
					var infl = data.subarray(b, b + sc$1);
					if (su < 524288 || sc$1 > .8 * su) try {
						cbl(null, inflateSync(infl, { out: new u8(su) }));
					} catch (e$1) {
						cbl(e$1, null);
					}
					else term.push(inflate(infl, { size: su }, cbl));
				} else cbl(err(14, "unknown compression type " + c_1, 1), null);
				else cbl(null, null);
			};
			for (var i$1 = 0; i$1 < c; ++i$1) _loop_3(i$1);
		} else cbd(null, {});
		return tAll;
	}
	/**
	* Synchronously decompresses a ZIP archive. Prefer using `unzip` for better
	* performance with more than one file.
	* @param data The raw compressed ZIP file
	* @param opts The ZIP extraction options
	* @returns The decompressed files
	*/
	function unzipSync(data, opts) {
		var files = {};
		var e = data.length - 22;
		for (; b4(data, e) != 101010256; --e) if (!e || data.length - e > 65558) err(13);
		var c = b2(data, e + 8);
		if (!c) return {};
		var o = b4(data, e + 16);
		var z$3 = b4(data, e - 20) == 117853008;
		if (z$3) {
			var ze$1 = b4(data, e - 12);
			z$3 = b4(data, ze$1) == 101075792;
			if (z$3) {
				c = b4(data, ze$1 + 32);
				o = b4(data, ze$1 + 48);
			}
		}
		var fltr = opts && opts.filter;
		for (var i$1 = 0; i$1 < c; ++i$1) {
			var _a$1 = zh(data, o, z$3), c_2 = _a$1[0], sc$1 = _a$1[1], su = _a$1[2], fn = _a$1[3], no = _a$1[4], off = _a$1[5], b = slzh(data, off);
			o = no;
			if (!fltr || fltr({
				name: fn,
				size: sc$1,
				originalSize: su,
				compression: c_2
			})) if (!c_2) files[fn] = slc(data, b, b + sc$1);
			else if (c_2 == 8) files[fn] = inflateSync(data.subarray(b, b + sc$1), { out: new u8(su) });
			else err(14, "unknown compression type " + c_2);
		}
		return files;
	}

//#endregion
//#region src/shared/epub.ts
	const MAX_ARCHIVE_ENTRIES = 4096;
	const MAX_RELEVANT_UNCOMPRESSED_BYTES = 96 * 1024 * 1024;
	const MAX_EXTRACTED_TEXT_BYTES = 50 * 1024 * 1024;
	const CONTENT_MEDIA_TYPES = new Set(["application/xhtml+xml", "text/html"]);
	const BLOCK_TAGS = new Set([
		"h1",
		"h2",
		"h3",
		"h4",
		"h5",
		"h6",
		"p",
		"blockquote",
		"pre",
		"li",
		"dt",
		"dd"
	]);
	const IGNORED_TAGS = new Set([
		"head",
		"script",
		"style",
		"noscript",
		"template",
		"svg",
		"audio",
		"video",
		"object",
		"embed",
		"canvas",
		"nav"
	]);
	var EpubParseError = class extends Error {
		constructor(message, code) {
			super(message);
			this.code = code;
			this.name = "EpubParseError";
		}
	};
	function elementName(element) {
		return (element.localName || element.tagName.split(":").at(-1) || "").toLocaleLowerCase();
	}
	function childElements(node) {
		return Array.from(node.childNodes).filter((child) => child.nodeType === 1);
	}
	function allElements(root$1, wanted) {
		const result = [];
		const stack = [...childElements(root$1)].reverse();
		while (stack.length > 0) {
			const element = stack.pop();
			if (wanted === void 0 || elementName(element) === wanted) result.push(element);
			const children = childElements(element);
			for (let index = children.length - 1; index >= 0; index -= 1) stack.push(children[index]);
		}
		return result;
	}
	function firstElement(root$1, wanted) {
		return allElements(root$1, wanted)[0] ?? null;
	}
	function directChild(root$1, wanted) {
		return childElements(root$1).find((element) => elementName(element) === wanted) ?? null;
	}
	function directChildren(root$1, wanted) {
		return childElements(root$1).filter((element) => elementName(element) === wanted);
	}
	function normalizeInlineText(value) {
		return value.replace(/\u00a0/g, " ").replace(/\s+/gu, " ").trim();
	}
	function textFromNode(root$1) {
		const chunks = [];
		const stack = [root$1];
		while (stack.length > 0) {
			const node = stack.pop();
			if (node.nodeType === 3 || node.nodeType === 4) {
				chunks.push(node.nodeValue ?? "");
				continue;
			}
			if (node.nodeType !== 1 && node !== root$1) continue;
			if (node.nodeType === 1) {
				const name = elementName(node);
				if (IGNORED_TAGS.has(name)) continue;
				if (name === "br") chunks.push("\n");
			}
			const children = Array.from(node.childNodes);
			for (let index = children.length - 1; index >= 0; index -= 1) stack.push(children[index]);
		}
		return normalizeInlineText(chunks.join(""));
	}
	function textFromBlock(root$1) {
		const preserveLines = elementName(root$1) === "pre";
		const chunks = [];
		const stack = [root$1];
		while (stack.length > 0) {
			const node = stack.pop();
			if (node.nodeType === 3 || node.nodeType === 4) {
				chunks.push(node.nodeValue ?? "");
				continue;
			}
			if (node.nodeType !== 1 && node !== root$1) continue;
			if (node.nodeType === 1) {
				const element = node;
				const name = elementName(element);
				if (IGNORED_TAGS.has(name)) continue;
				if (element !== root$1 && BLOCK_TAGS.has(name)) continue;
				if (name === "br") chunks.push("\n");
			}
			const children = Array.from(node.childNodes);
			for (let index = children.length - 1; index >= 0; index -= 1) stack.push(children[index]);
		}
		const joined = chunks.join("").replace(/\u00a0/g, " ");
		if (!preserveLines) return joined.replace(/\s+/gu, " ").trim();
		return joined.replace(/\r\n?/g, "\n").split("\n").map((line) => line.trimEnd()).join("\n").trim();
	}
	function parseMarkup(text, mimeType, label) {
		const document$1 = new DOMParser().parseFromString(text, mimeType);
		const parserError = allElements(document$1, "parsererror")[0];
		if (document$1.documentElement === null || parserError !== void 0) throw new EpubParseError(`${label} 不是有效的 XML/XHTML。`, "INVALID_EPUB");
		return document$1;
	}
	function decodeMarkup(bytes) {
		if (bytes.length >= 3 && bytes[0] === 239 && bytes[1] === 187 && bytes[2] === 191) return new TextDecoder("utf-8").decode(bytes.subarray(3));
		if (bytes.length >= 2 && bytes[0] === 255 && bytes[1] === 254) return new TextDecoder("utf-16le").decode(bytes.subarray(2));
		if (bytes.length >= 2 && bytes[0] === 254 && bytes[1] === 255) return new TextDecoder("utf-16be").decode(bytes.subarray(2));
		if (bytes.length >= 4 && bytes[0] === 0 && bytes[1] === 60 && bytes[2] === 0 && bytes[3] === 63) return new TextDecoder("utf-16be").decode(bytes);
		if (bytes.length >= 4 && bytes[0] === 60 && bytes[1] === 0 && bytes[2] === 63 && bytes[3] === 0) return new TextDecoder("utf-16le").decode(bytes);
		const prefixBytes = bytes.subarray(0, Math.min(bytes.length, 1024));
		const prefix = String.fromCharCode(...prefixBytes);
		const declared = /<\?xml[^>]*\bencoding\s*=\s*["']([^"']+)["']/iu.exec(prefix)?.[1];
		if (declared !== void 0) try {
			return new TextDecoder(declared).decode(bytes);
		} catch {}
		return new TextDecoder("utf-8").decode(bytes);
	}
	function normalizeArchivePath(rawPath) {
		if (rawPath.includes("\0") || rawPath.includes("\\") || rawPath.startsWith("/") || /^[a-z]:/iu.test(rawPath)) return null;
		const segments = [];
		for (const segment of rawPath.split("/")) {
			if (segment === "" || segment === ".") continue;
			if (segment === "..") return null;
			segments.push(segment);
		}
		return segments.join("/");
	}
	function normalizeResolvedPath(rawPath) {
		if (rawPath.includes("\0") || rawPath.includes("\\") || rawPath.startsWith("/") || /^[a-z]:/iu.test(rawPath)) return null;
		const segments = [];
		for (const segment of rawPath.split("/")) {
			if (segment === "" || segment === ".") continue;
			if (segment === "..") {
				if (segments.length === 0) return null;
				segments.pop();
				continue;
			}
			segments.push(segment);
		}
		return segments.join("/");
	}
	function decodeReferencePath(value) {
		try {
			return decodeURIComponent(value);
		} catch {
			return null;
		}
	}
	function resolveReference(basePath, rawReference) {
		const trimmed = rawReference.trim();
		if (trimmed.length === 0 || trimmed.startsWith("//") || /^[a-z][a-z0-9+.-]*:/iu.test(trimmed)) return null;
		const hashIndex = trimmed.indexOf("#");
		const beforeHash = hashIndex < 0 ? trimmed : trimmed.slice(0, hashIndex);
		const rawFragment = hashIndex < 0 ? null : trimmed.slice(hashIndex + 1);
		const queryIndex = beforeHash.indexOf("?");
		const pathPart = queryIndex < 0 ? beforeHash : beforeHash.slice(0, queryIndex);
		const decodedPath = decodeReferencePath(pathPart);
		const decodedFragment = rawFragment === null ? null : decodeReferencePath(rawFragment);
		if (decodedPath === null || rawFragment !== null && decodedFragment === null) return null;
		const baseDirectory = basePath.includes("/") ? basePath.slice(0, basePath.lastIndexOf("/") + 1) : "";
		const path = normalizeResolvedPath(pathPart === "" ? basePath : `${baseDirectory}${decodedPath}`);
		if (path === null || path.length === 0) return null;
		return {
			path,
			fragment: decodedFragment === null || decodedFragment.length === 0 ? null : decodedFragment
		};
	}
	function relevantArchiveEntry(info) {
		const path = normalizeArchivePath(info.name);
		if (path === null) return false;
		const lower = path.toLocaleLowerCase();
		return lower === "mimetype" || lower === "meta-inf/container.xml" || lower === "meta-inf/encryption.xml" || /\.(?:opf|ncx|xml|xhtml|html|htm)$/iu.test(lower);
	}
	function createArchiveFilter() {
		const state = {
			entryCount: 0,
			relevantBytes: 0,
			unsafePath: false,
			tooLarge: false
		};
		return {
			state,
			filter(info) {
				state.entryCount += 1;
				if (state.entryCount > MAX_ARCHIVE_ENTRIES) state.tooLarge = true;
				if (normalizeArchivePath(info.name) === null) state.unsafePath = true;
				if (!relevantArchiveEntry(info)) return false;
				state.relevantBytes += info.originalSize;
				if (state.relevantBytes > MAX_RELEVANT_UNCOMPRESSED_BYTES) state.tooLarge = true;
				return !state.tooLarge && !state.unsafePath;
			}
		};
	}
	function validateArchiveLimits(state) {
		if (state.unsafePath) throw new EpubParseError("EPUB 包含不安全的内部路径。", "INVALID_EPUB");
		if (state.tooLarge) throw new EpubParseError("EPUB 解压后的正文资源过大或文件数量过多。", "EPUB_TOO_LARGE");
	}
	function unzipSynchronously(bytes) {
		const { state, filter } = createArchiveFilter();
		const archive = unzipSync(bytes, { filter });
		validateArchiveLimits(state);
		return archive;
	}
	function unzipArchive(bytes) {
		return new Promise((resolve, reject) => {
			const { state, filter } = createArchiveFilter();
			try {
				unzip(bytes, { filter }, (error, archive) => {
					if (error !== null) {
						reject(error);
						return;
					}
					try {
						validateArchiveLimits(state);
						resolve(archive);
					} catch (caught) {
						reject(caught);
					}
				});
			} catch {
				try {
					resolve(unzipSynchronously(bytes));
				} catch (caught) {
					reject(caught);
				}
			}
		});
	}
	function indexArchive(archive) {
		const indexed = /* @__PURE__ */ new Map();
		for (const [rawPath, bytes] of Object.entries(archive)) {
			const path = normalizeArchivePath(rawPath);
			if (path === null || path.length === 0 || indexed.has(path)) throw new EpubParseError("EPUB 包含冲突或不安全的内部路径。", "INVALID_EPUB");
			indexed.set(path, bytes);
		}
		return indexed;
	}
	function requireArchiveEntry(archive, path, label) {
		const bytes = archive.get(path);
		if (bytes === void 0) throw new EpubParseError(`EPUB 缺少 ${label}（${path}）。`, "INVALID_EPUB");
		return bytes;
	}
	function findPackagePath(archive) {
		const rootfiles = allElements(parseMarkup(decodeMarkup(requireArchiveEntry(archive, "META-INF/container.xml", "container.xml")), "application/xml", "container.xml"), "rootfile");
		const fullPath = (rootfiles.find((element) => element.getAttribute("media-type") === "application/oebps-package+xml") ?? rootfiles[0])?.getAttribute("full-path");
		const path = fullPath === null || fullPath === void 0 ? null : normalizeArchivePath(fullPath);
		if (path === null || path.length === 0) throw new EpubParseError("container.xml 未声明有效的 OPF package 路径。", "INVALID_EPUB");
		return path;
	}
	function itemProperties(element) {
		return new Set((element.getAttribute("properties") ?? "").split(/\s+/u).filter(Boolean));
	}
	function parsePackage(packageDocument, packagePath) {
		const warnings = [];
		const metadata$1 = firstElement(packageDocument, "metadata");
		const titleElement = metadata$1 === null ? null : firstElement(metadata$1, "title");
		const title = titleElement === null ? null : normalizeInlineText(textFromNode(titleElement)) || null;
		const manifestElement = firstElement(packageDocument, "manifest");
		const spineElement = firstElement(packageDocument, "spine");
		if (manifestElement === null || spineElement === null) throw new EpubParseError("OPF 缺少 manifest 或 spine。", "INVALID_EPUB");
		const manifest = /* @__PURE__ */ new Map();
		for (const element of directChildren(manifestElement, "item")) {
			const id$1 = element.getAttribute("id")?.trim();
			const href = element.getAttribute("href");
			const mediaType = element.getAttribute("media-type")?.trim().toLocaleLowerCase();
			if (id$1 === void 0 || id$1.length === 0 || href === null || mediaType === void 0 || mediaType.length === 0) continue;
			const target = resolveReference(packagePath, href);
			if (target === null) {
				warnings.push(`已忽略无效或外部 manifest 资源：${href}`);
				continue;
			}
			manifest.set(id$1, {
				id: id$1,
				path: target.path,
				mediaType,
				properties: itemProperties(element)
			});
		}
		const spine = [];
		for (const itemref of directChildren(spineElement, "itemref")) {
			if ((itemref.getAttribute("linear") ?? "yes").toLocaleLowerCase() === "no") continue;
			const idref = itemref.getAttribute("idref");
			const item = idref === null ? void 0 : manifest.get(idref);
			if (item === void 0) {
				warnings.push(`spine 引用了缺失的 manifest 项：${idref ?? "(empty)"}`);
				continue;
			}
			if (!CONTENT_MEDIA_TYPES.has(item.mediaType)) {
				warnings.push(`已忽略不支持的 spine 资源：${item.path}`);
				continue;
			}
			spine.push(item);
		}
		if (spine.length === 0) throw new EpubParseError("EPUB 没有可读取的主正文 spine。", "INVALID_EPUB");
		const navItem = [...manifest.values()].find((item) => item.properties.has("nav")) ?? null;
		const tocId = spineElement.getAttribute("toc");
		return {
			title,
			manifest,
			spine,
			navItem,
			ncxItem: (tocId === null ? void 0 : manifest.get(tocId)) ?? [...manifest.values()].find((item) => item.mediaType === "application/x-dtbncx+xml") ?? null,
			warnings
		};
	}
	function epubType(element) {
		const direct = element.getAttribute("epub:type") ?? element.getAttribute("type");
		if (direct !== null) return direct;
		for (const attribute of Array.from(element.attributes)) if ((attribute.localName || attribute.name.split(":").at(-1)) === "type") return attribute.value;
		return "";
	}
	function parseNavigationDocument(document$1, navPath) {
		const toc = allElements(document$1, "nav").find((element) => epubType(element).split(/\s+/u).includes("toc"));
		if (toc === void 0) return [];
		const entries = [];
		for (const anchor of allElements(toc, "a")) {
			const href = anchor.getAttribute("href");
			const title = normalizeInlineText(textFromNode(anchor));
			if (href === null || title.length === 0) continue;
			const target = resolveReference(navPath, href);
			if (target === null) continue;
			let level = 0;
			let parent = anchor.parentElement;
			while (parent !== null && parent !== toc) {
				if (elementName(parent) === "ol") level += 1;
				parent = parent.parentElement;
			}
			entries.push({
				title,
				level: Math.max(1, level),
				...target
			});
		}
		return entries;
	}
	function parseNcxDocument(document$1, ncxPath) {
		const navMap = firstElement(document$1, "navmap");
		if (navMap === null) return [];
		const entries = [];
		const stack = directChildren(navMap, "navpoint").map((element) => ({
			element,
			level: 1
		})).reverse();
		while (stack.length > 0) {
			const { element, level } = stack.pop();
			const label = directChild(element, "navlabel");
			const content = directChild(element, "content");
			const title = label === null ? "" : normalizeInlineText(textFromNode(label));
			const src = content?.getAttribute("src");
			const target = src === null || src === void 0 ? null : resolveReference(ncxPath, src);
			if (title.length > 0 && target !== null) entries.push({
				title,
				level,
				...target
			});
			const children = directChildren(element, "navpoint");
			for (let index = children.length - 1; index >= 0; index -= 1) stack.push({
				element: children[index],
				level: level + 1
			});
		}
		return entries;
	}
	function parseEncryptedPaths(archive, warnings) {
		const bytes = archive.get("META-INF/encryption.xml");
		if (bytes === void 0) return /* @__PURE__ */ new Set();
		try {
			const document$1 = parseMarkup(decodeMarkup(bytes), "application/xml", "encryption.xml");
			const paths$1 = /* @__PURE__ */ new Set();
			for (const reference of allElements(document$1, "cipherreference")) {
				const uri = reference.getAttribute("URI") ?? reference.getAttribute("uri");
				if (uri === null) continue;
				const rootTarget = resolveReference("", uri);
				const relativeTarget = resolveReference("META-INF/encryption.xml", uri);
				if (rootTarget !== null && archive.has(rootTarget.path)) paths$1.add(rootTarget.path);
				else if (relativeTarget !== null) paths$1.add(relativeTarget.path);
			}
			return paths$1;
		} catch {
			warnings.push("encryption.xml 无法解析；若正文受 DRM 保护，导入将失败。");
			return /* @__PURE__ */ new Set();
		}
	}
	function idsForBlock(element) {
		const ids = /* @__PURE__ */ new Set();
		let ancestor = element;
		while (ancestor !== null) {
			const id$1 = ancestor.getAttribute("id");
			if (id$1 !== null && id$1.length > 0) ids.add(id$1);
			ancestor = ancestor.parentElement;
		}
		for (const descendant of allElements(element)) {
			const id$1 = descendant.getAttribute("id");
			if (id$1 !== null && id$1.length > 0) ids.add(id$1);
		}
		return [...ids];
	}
	function isInvisibleBlock(element) {
		let current = element;
		while (current !== null) {
			if (IGNORED_TAGS.has(elementName(current)) || current.hasAttribute("hidden") || current.getAttribute("aria-hidden")?.toLocaleLowerCase() === "true") return true;
			const style$1 = current.getAttribute("style")?.toLocaleLowerCase() ?? "";
			if (/(?:^|;)\s*(?:display\s*:\s*none|visibility\s*:\s*hidden)\s*(?:;|$)/u.test(style$1)) return true;
			current = current.parentElement;
		}
		return false;
	}
	function parseContentDocument(bytes, path) {
		const document$1 = parseMarkup(decodeMarkup(bytes), "application/xhtml+xml", path);
		const blocks = [];
		const idToBlock = /* @__PURE__ */ new Map();
		for (const element of allElements(document$1)) {
			const name = elementName(element);
			if (!BLOCK_TAGS.has(name) || isInvisibleBlock(element)) continue;
			const text = textFromBlock(element);
			if (text.length === 0) continue;
			const headingLevel = /^h[1-6]$/u.test(name) ? Number(name.slice(1)) : null;
			const ids = idsForBlock(element);
			const index = blocks.length;
			blocks.push({
				text,
				headingLevel,
				ids
			});
			for (const id$1 of ids) if (!idToBlock.has(id$1)) idToBlock.set(id$1, index);
		}
		if (blocks.length === 0) {
			const text = textFromNode(firstElement(document$1, "body") ?? document$1.documentElement);
			if (text.length > 0) blocks.push({
				text,
				headingLevel: null,
				ids: []
			});
		}
		const titleElement = firstElement(document$1, "title");
		const documentTitle = titleElement === null ? null : normalizeInlineText(textFromNode(titleElement)) || null;
		return {
			path,
			title: blocks.find((block) => block.headingLevel !== null)?.text ?? null ?? documentTitle,
			blocks,
			idToBlock
		};
	}
	function fallbackTitle(document$1, ordinal) {
		if (document$1.title !== null && document$1.title.length > 0) return document$1.title;
		const fileName = document$1.path.split("/").at(-1)?.replace(/\.[^.]+$/u, "") ?? "";
		return fileName.length > 0 ? fileName : `第 ${ordinal + 1} 章`;
	}
	function assembleBook(documents, navigation, warnings) {
		const blocks = documents.flatMap((document$1) => document$1.blocks);
		if (blocks.length === 0) throw new EpubParseError("EPUB 中没有可读取的文字正文。", "EMPTY_EPUB");
		const documentByPath = new Map(documents.map((document$1) => [document$1.path, document$1]));
		const boundaries = [];
		for (const entry of navigation) {
			const document$1 = documentByPath.get(entry.path);
			if (document$1 === void 0 || document$1.blocks.length === 0) {
				warnings.push(`目录目标不在主正文中，已忽略：${entry.path}`);
				continue;
			}
			let localIndex = 0;
			if (entry.fragment !== null) {
				const target = document$1.idToBlock.get(entry.fragment);
				if (target === void 0) warnings.push(`目录锚点不存在，已定位到文档开头：${entry.path}#${entry.fragment}`);
				else localIndex = target;
			}
			boundaries.push({
				blockIndex: document$1.globalStart + localIndex,
				title: entry.title,
				level: Math.max(1, Math.min(6, entry.level)),
				source: "navigation"
			});
		}
		if (boundaries.length === 0) for (const [ordinal, document$1] of documents.entries()) {
			if (document$1.blocks.length === 0) continue;
			const headings = document$1.blocks.flatMap((block, index) => block.headingLevel === null ? [] : [{
				block,
				index
			}]);
			if (headings.length === 0 || headings[0].index > 0) boundaries.push({
				blockIndex: document$1.globalStart,
				title: fallbackTitle(document$1, ordinal),
				level: 1,
				source: "fallback"
			});
			for (const { block, index } of headings) boundaries.push({
				blockIndex: document$1.globalStart + index,
				title: block.text,
				level: block.headingLevel ?? 1,
				source: "fallback"
			});
		}
		else for (const [ordinal, document$1] of documents.entries()) {
			if (document$1.blocks.length === 0) continue;
			if (!boundaries.some((boundary) => boundary.blockIndex === document$1.globalStart)) boundaries.push({
				blockIndex: document$1.globalStart,
				title: fallbackTitle(document$1, ordinal),
				level: 1,
				source: "fallback"
			});
		}
		boundaries.sort((left, right) => left.blockIndex - right.blockIndex || (left.source === "navigation" ? -1 : 1));
		const uniqueBoundaries = [];
		for (const boundary of boundaries) {
			if (uniqueBoundaries.at(-1)?.blockIndex === boundary.blockIndex) continue;
			uniqueBoundaries.push(boundary);
		}
		if (uniqueBoundaries[0]?.blockIndex !== 0) uniqueBoundaries.unshift({
			blockIndex: 0,
			title: "序章",
			level: 1,
			source: "fallback"
		});
		const chapterForBlock = [];
		let boundaryIndex = 0;
		for (let index = 0; index < blocks.length; index += 1) {
			while (boundaryIndex + 1 < uniqueBoundaries.length && uniqueBoundaries[boundaryIndex + 1].blockIndex <= index) boundaryIndex += 1;
			chapterForBlock[index] = boundaryIndex;
		}
		const hiddenHeadingBlocks = new Set(uniqueBoundaries.flatMap((boundary) => {
			const block = blocks[boundary.blockIndex];
			return block?.headingLevel === null || block === void 0 ? [] : [boundary.blockIndex];
		}));
		const paragraphs = [];
		const contentParts = [];
		let contentLength = 0;
		let encodedBytes = 0;
		for (const [index, block] of blocks.entries()) {
			if (contentParts.length > 0) {
				contentParts.push("\n");
				contentLength += 1;
				encodedBytes += 1;
			}
			const start = contentLength;
			contentParts.push(block.text);
			contentLength += block.text.length;
			encodedBytes += new TextEncoder().encode(block.text).byteLength;
			if (encodedBytes > MAX_EXTRACTED_TEXT_BYTES) throw new EpubParseError("EPUB 提取后的纯文本超过 50MB。", "EPUB_TOO_LARGE");
			const chapterIndex = chapterForBlock[index] ?? 0;
			paragraphs.push({
				id: `paragraph-${index}`,
				index,
				chapterId: `chapter-${chapterIndex}`,
				text: block.text,
				start,
				end: contentLength,
				isHeading: hiddenHeadingBlocks.has(index)
			});
		}
		const content = contentParts.join("");
		return {
			content,
			chapters: uniqueBoundaries.map((boundary, index) => {
				const nextBlock = uniqueBoundaries[index + 1]?.blockIndex ?? paragraphs.length;
				const paragraphStart = Math.min(boundary.blockIndex, paragraphs.length - 1);
				const paragraphEnd = Math.max(paragraphStart, nextBlock - 1);
				return {
					id: `chapter-${index}`,
					index,
					title: boundary.title,
					level: boundary.level,
					start: paragraphs[paragraphStart]?.start ?? 0,
					end: nextBlock < paragraphs.length ? paragraphs[nextBlock].start : content.length,
					paragraphStart,
					paragraphEnd
				};
			}),
			paragraphs
		};
	}
	async function parseEpubBuffer(buffer) {
		let rawArchive;
		try {
			rawArchive = await unzipArchive(new Uint8Array(buffer));
		} catch (error) {
			if (error instanceof EpubParseError) throw error;
			throw new EpubParseError("文件不是有效的 EPUB ZIP 容器。", "INVALID_EPUB");
		}
		const archive = indexArchive(rawArchive);
		const packagePath = findPackagePath(archive);
		const packageInfo = parsePackage(parseMarkup(decodeMarkup(requireArchiveEntry(archive, packagePath, "OPF package")), "application/xml", packagePath), packagePath);
		const warnings = [...packageInfo.warnings];
		const encryptedPaths = parseEncryptedPaths(archive, warnings);
		const encryptedContent = packageInfo.spine.find((item) => encryptedPaths.has(item.path));
		if (encryptedContent !== void 0) throw new EpubParseError(`正文资源受 DRM 或加密保护：${encryptedContent.path}`, "ENCRYPTED_EPUB");
		let navigation = [];
		if (packageInfo.navItem !== null) {
			const bytes = archive.get(packageInfo.navItem.path);
			if (bytes !== void 0) try {
				navigation = parseNavigationDocument(parseMarkup(decodeMarkup(bytes), "application/xhtml+xml", packageInfo.navItem.path), packageInfo.navItem.path);
			} catch {
				warnings.push("EPUB 3 NAV 无法解析，已尝试其他目录或正文标题。");
			}
		}
		if (navigation.length === 0 && packageInfo.ncxItem !== null) {
			const bytes = archive.get(packageInfo.ncxItem.path);
			if (bytes !== void 0) try {
				navigation = parseNcxDocument(parseMarkup(decodeMarkup(bytes), "application/xml", packageInfo.ncxItem.path), packageInfo.ncxItem.path);
			} catch {
				warnings.push("EPUB 2 NCX 无法解析，已回退到正文标题。");
			}
		}
		if (navigation.length === 0) warnings.push("未找到可用的 EPUB 目录，已按正文标题与 spine 顺序生成目录。");
		const documents = [];
		let globalStart = 0;
		for (const item of packageInfo.spine) {
			const bytes = archive.get(item.path);
			if (bytes === void 0) {
				warnings.push(`正文资源缺失，已跳过：${item.path}`);
				continue;
			}
			try {
				const document$1 = parseContentDocument(bytes, item.path);
				if (document$1.blocks.length === 0) {
					warnings.push(`正文资源没有可读取文字，已跳过：${item.path}`);
					continue;
				}
				documents.push({
					...document$1,
					globalStart
				});
				globalStart += document$1.blocks.length;
			} catch {
				warnings.push(`正文资源无法解析，已跳过：${item.path}`);
			}
		}
		const parsed = assembleBook(documents, navigation, warnings);
		return {
			title: packageInfo.title,
			parsed,
			warnings
		};
	}

//#endregion
//#region src/shared/id.ts
/** Small deterministic hash used only as a local storage key, not for security. */
	function hashText(value) {
		let hash = 2166136261;
		for (let index = 0; index < value.length; index += 1) {
			hash ^= value.charCodeAt(index);
			hash = Math.imul(hash, 16777619);
		}
		return (hash >>> 0).toString(36);
	}
	function createBookId(file, head) {
		return `book-${hashText(`${file.name}:${file.size}:${file.lastModified}:${head.slice(0, 2048)}`)}`;
	}

//#endregion
//#region src/shared/parser.ts
	const CHINESE_CHAPTER = /^\s*第\s*[零〇一二三四五六七八九十百千万两\d]+\s*[章回节卷部篇]\s*[:：.、-]?\s*(.*)\s*$/u;
	const ENGLISH_CHAPTER = /^\s*chapter\s+([0-9ivxlcdm]+)\s*[:：.、-]?\s*(.*)\s*$/iu;
	const NUMBERED_HEADING = /^\s*(\d{1,4})\s*[.、]\s*(\S.{0,48})\s*$/u;
	const PADDED_HEADING = /^\s*(\d{3,4})\s+(\S.{0,48})\s*$/u;
	const MARKDOWN_HEADING = /^\s*(#{1,3})\s+(.+?)\s*#*\s*$/u;
	function normalizeText(input) {
		return input.replace(/\r\n?/g, "\n").replace(/^\uFEFF/, "");
	}
	function toLines(content) {
		const lines = [];
		let start = 0;
		for (const text of content.split("\n")) {
			const end = start + text.length;
			lines.push({
				text,
				start,
				end
			});
			start = end + 1;
		}
		return lines;
	}
	function matchChapterHeading(rawLine) {
		const line = rawLine.trim();
		if (line.length === 0 || line.length > 80) return null;
		const markdown = MARKDOWN_HEADING.exec(line);
		if (markdown !== null) return {
			title: markdown[2].trim(),
			level: markdown[1].length
		};
		if (CHINESE_CHAPTER.exec(line) !== null) return {
			title: line,
			level: 1
		};
		if (ENGLISH_CHAPTER.exec(line) !== null) return {
			title: line,
			level: 1
		};
		if ((NUMBERED_HEADING.exec(line) ?? PADDED_HEADING.exec(line)) !== null) return {
			title: line,
			level: 1
		};
		return null;
	}
	function chapterForOffset(chapters, offset) {
		let low = 0;
		let high = chapters.length - 1;
		while (low <= high) {
			const middle = Math.floor((low + high) / 2);
			const chapter = chapters[middle];
			if (offset < chapter.start) high = middle - 1;
			else if (offset >= chapter.end) low = middle + 1;
			else return chapter;
		}
		return chapters[Math.max(0, Math.min(chapters.length - 1, high))];
	}
	/** Parse headings and paragraph boundaries while retaining source offsets for exact progress/search. */
	function parseBookText(input) {
		const content = normalizeText(input);
		const lines = toLines(content);
		const headings = lines.flatMap((line) => {
			const match = matchChapterHeading(line.text);
			return match === null ? [] : [{
				...line,
				...match
			}];
		});
		const chapters = [];
		const firstHeading = headings[0];
		const hasPreface = firstHeading !== void 0 && content.slice(0, firstHeading.start).trim().length > 0;
		if (headings.length === 0) chapters.push({
			id: "chapter-0",
			index: 0,
			title: "正文",
			level: 1,
			start: 0,
			end: content.length,
			paragraphStart: 0,
			paragraphEnd: 0
		});
		else {
			if (hasPreface) chapters.push({
				id: "chapter-0",
				index: 0,
				title: "序章",
				level: 1,
				start: 0,
				end: firstHeading.start,
				paragraphStart: 0,
				paragraphEnd: 0
			});
			headings.forEach((heading, headingIndex) => {
				const index = chapters.length;
				chapters.push({
					id: `chapter-${index}`,
					index,
					title: heading.title,
					level: heading.level,
					start: heading.start,
					end: headings[headingIndex + 1]?.start ?? content.length,
					paragraphStart: 0,
					paragraphEnd: 0
				});
			});
		}
		const headingOffsets = new Set(headings.map((heading) => heading.start));
		const paragraphs = [];
		for (const line of lines) {
			const text = line.text.trim();
			if (text.length === 0) continue;
			const chapter = chapterForOffset(chapters, line.start);
			const index = paragraphs.length;
			paragraphs.push({
				id: `paragraph-${index}`,
				index,
				chapterId: chapter.id,
				text,
				start: line.start,
				end: line.end,
				isHeading: headingOffsets.has(line.start)
			});
		}
		for (const chapter of chapters) {
			const contained = paragraphs.filter((paragraph) => paragraph.chapterId === chapter.id);
			const first = contained[0]?.index ?? chapters[chapter.index - 1]?.paragraphEnd ?? 0;
			const last = contained.at(-1)?.index ?? first;
			chapter.paragraphStart = first;
			chapter.paragraphEnd = last;
		}
		return {
			content,
			chapters,
			paragraphs
		};
	}

//#endregion
//#region src/shared/file.ts
	var FileLoadError = class extends Error {
		constructor(message, code) {
			super(message);
			this.code = code;
			this.name = "FileLoadError";
		}
	};
	function formatFromName(name) {
		const lower = name.toLocaleLowerCase();
		if (lower.endsWith(".txt")) return "txt";
		if (lower.endsWith(".md") || lower.endsWith(".markdown")) return "markdown";
		if (lower.endsWith(".epub")) return "epub";
		return null;
	}
	async function loadBookFromFile(file) {
		const format = formatFromName(file.name);
		if (format === null) throw new FileLoadError("暂不支持此格式。请选择 .txt、.md、.markdown 或 .epub 文件。", "UNSUPPORTED_FORMAT");
		if (file.size > MAX_FILE_BYTES) throw new FileLoadError("文件超过 50MB。建议先按卷拆分，避免浏览器内存不足。", "TOO_LARGE");
		try {
			const buffer = await file.arrayBuffer();
			if (format === "epub") {
				const epub = await parseEpubBuffer(buffer);
				const id$2 = createBookId(file, epub.parsed.content);
				const contentBytes = new TextEncoder().encode(epub.parsed.content).byteLength;
				const largeFileMode$1 = file.size > LARGE_FILE_BYTES || contentBytes > LARGE_FILE_BYTES;
				return {
					book: {
						id: id$2,
						name: epub.title ?? file.name.replace(/\.epub$/i, ""),
						format,
						encoding: "utf-8",
						size: file.size,
						lastModified: file.lastModified,
						...epub.parsed,
						openedAt: Date.now(),
						largeFileMode: largeFileMode$1
					},
					warnings: largeFileMode$1 ? [...epub.warnings, "EPUB 正文超过 10MB：已启用按章节渲染模式，搜索结果最多显示 500 条。"] : epub.warnings
				};
			}
			const decoded = decodeNovelBuffer(buffer);
			const parsed = parseBookText(decoded.text);
			const id$1 = createBookId(file, parsed.content);
			const largeFileMode = file.size > LARGE_FILE_BYTES;
			return {
				book: {
					id: id$1,
					name: file.name.replace(/\.(txt|md|markdown)$/i, ""),
					format,
					encoding: decoded.encoding,
					size: file.size,
					lastModified: file.lastModified,
					...parsed,
					openedAt: Date.now(),
					largeFileMode
				},
				warnings: largeFileMode ? [...decoded.warnings, "文件超过 10MB：已启用按章节渲染模式，搜索结果最多显示 500 条。"] : decoded.warnings
			};
		} catch (error) {
			if (error instanceof FileLoadError) throw error;
			if (error instanceof EpubParseError) throw new FileLoadError(error.message, error.code);
			throw new FileLoadError(error instanceof Error ? error.message : "文件读取失败。", "READ_FAILED");
		}
	}

//#endregion
//#region src/client/cloud/storage.ts
	function read(key, fallback) {
		try {
			return JSON.parse(localStorage.getItem(`dnr-cloud:${key}`) ?? "null") ?? fallback;
		} catch {
			return fallback;
		}
	}
	function write(key, value) {
		localStorage.setItem(`dnr-cloud:${key}`, JSON.stringify(value));
	}
	async function original(id$1, file) {
		const db$1 = await new Promise((resolve, reject) => {
			const req = indexedDB.open("dnr-originals", 1);
			req.onupgradeneeded = () => req.result.createObjectStore("files");
			req.onsuccess = () => resolve(req.result);
			req.onerror = () => reject(req.error);
		});
		return new Promise((resolve, reject) => {
			const tx = db$1.transaction("files", file ? "readwrite" : "readonly");
			const req = file ? tx.objectStore("files").put(file, id$1) : tx.objectStore("files").get(id$1);
			tx.oncomplete = () => {
				db$1.close();
				resolve(file ?? req.result);
			};
			tx.onerror = () => {
				db$1.close();
				reject(tx.error);
			};
		});
	}
	const SITE_URL = "https://saya-novel-library.zycode1561.chatgpt.site";
	const cloudHosted = typeof window !== "undefined" && window.__CODEX_NOVEL_READER_CLOUD__ === true;
	async function api(path, init) {
		const response = await fetch(`/api/cloud${path}`, {
			...init,
			headers: {
				"x-reader-request": "1",
				...init?.headers
			},
			cache: "no-store"
		});
		if (!response.ok && response.status !== 409) {
			let message = `云端请求失败（${response.status}）`;
			try {
				message = (await response.json()).error ?? message;
			} catch {}
			throw new Error(message);
		}
		return response;
	}
	function bindings() {
		return read("bindings", {});
	}
	function bind(localId, cloudId) {
		write("bindings", {
			...bindings(),
			[localId]: cloudId
		});
	}

//#endregion
//#region src/shared/progress.ts
	function clampPercent(value) {
		return Math.max(0, Math.min(100, value));
	}
	function readingOffset(paragraphs, paragraphIndex) {
		const next = paragraphs.findIndex((paragraph) => paragraph.index >= paragraphIndex);
		return next >= 0 ? next : Math.max(0, paragraphs.length - 1);
	}
	function calculateProgress(book, position) {
		const chapter = book.chapters[position.chapterIndex] ?? book.chapters[0];
		if (chapter === void 0 || book.paragraphs.length === 0) return {
			chapterPercent: 0,
			bookPercent: 0
		};
		const bookBody = book.paragraphs.filter((paragraph) => !paragraph.isHeading);
		const chapterBody = bookBody.filter((paragraph) => paragraph.chapterId === chapter.id);
		const chapterOffset = readingOffset(chapterBody, position.paragraphIndex);
		const bookOffset = readingOffset(bookBody, position.paragraphIndex);
		const chapterPercent = clampPercent((chapterOffset + 1) / Math.max(1, chapterBody.length) * 100);
		return {
			chapterPercent,
			bookPercent: book.onlineReading ? clampPercent((chapter.index + chapterPercent / 100) / book.chapters.length * 100) : clampPercent((bookOffset + 1) / Math.max(1, bookBody.length) * 100)
		};
	}
	function chapterIndexForParagraph(book, paragraphIndex) {
		return book.chapters.find((chapter) => paragraphIndex >= chapter.paragraphStart && paragraphIndex <= chapter.paragraphEnd)?.index ?? 0;
	}

//#endregion
//#region src/shared/online-book.ts
	var OnlineBookBuildError = class extends Error {
		constructor(message, code) {
			super(message);
			this.code = code;
			this.name = "OnlineBookBuildError";
		}
	};
	function buildOnlineBook(input, now = Date.now()) {
		if (input.chapters.length === 0) throw new OnlineBookBuildError("书籍目录为空。", "TOC_EMPTY");
		const contentParts = [];
		const chapters = [];
		const paragraphs = [];
		let offset = 0;
		const append = (text) => {
			if (contentParts.length > 0) {
				contentParts.push("\n");
				offset += 1;
			}
			const start = offset;
			contentParts.push(text);
			offset += text.length;
			return {
				start,
				end: offset
			};
		};
		input.chapters.forEach((sourceChapter, chapterIndex) => {
			const title = sourceChapter.title.trim() || `第 ${chapterIndex + 1} 章`;
			const chapterStart = offset + (contentParts.length > 0 ? 1 : 0);
			const paragraphStart = paragraphs.length;
			const headingPosition = append(title);
			paragraphs.push({
				id: `paragraph-${paragraphs.length}`,
				index: paragraphs.length,
				chapterId: `chapter-${chapterIndex}`,
				text: title,
				...headingPosition,
				isHeading: true
			});
			for (const raw of sourceChapter.paragraphs) {
				const text = raw.trim();
				if (text.length === 0) continue;
				const position = append(text);
				paragraphs.push({
					id: `paragraph-${paragraphs.length}`,
					index: paragraphs.length,
					chapterId: `chapter-${chapterIndex}`,
					text,
					...position,
					isHeading: false
				});
			}
			chapters.push({
				id: `chapter-${chapterIndex}`,
				index: chapterIndex,
				title,
				level: 1,
				start: chapterStart,
				end: offset,
				paragraphStart,
				paragraphEnd: Math.max(paragraphStart, paragraphs.length - 1)
			});
		});
		const content = contentParts.join("");
		const size = new TextEncoder().encode(content).byteLength;
		if (size > MAX_FILE_BYTES) throw new OnlineBookBuildError("抓取后的正文超过 50MB，请选择分卷版本。", "BOOK_TOO_LARGE");
		return {
			id: `book-${hashText(`${input.origin.sourceId}:${input.origin.bookUrl}`)}`,
			name: input.name.trim() || "未命名在线书籍",
			format: "online",
			encoding: "utf-8",
			size,
			lastModified: now,
			content,
			chapters,
			paragraphs,
			openedAt: now,
			largeFileMode: size > LARGE_FILE_BYTES,
			origin: {
				...input.origin,
				fetchedAt: now
			}
		};
	}

//#endregion
//#region src/shared/online-reading.ts
	function onlineReadingBookId(reference) {
		return `book-${hashText(`reading:${reference.sourceId}:${reference.bookUrl}:${reference.bookName}`)}`;
	}
	/** Only the active chapter has paragraphs; every chapter remains in the TOC. */
	function buildReadingBook(session, chapter) {
		if (!session.chapters[chapter.index]) throw new Error("未找到该章节。");
		const book = buildOnlineBook({
			name: session.reference.bookName,
			origin: {
				sourceId: session.reference.sourceId,
				sourceName: session.sourceName,
				bookUrl: session.reference.bookUrl,
				fetchedAt: Date.now()
			},
			chapters: [chapter]
		});
		const active$1 = book.chapters[0];
		return {
			...book,
			id: onlineReadingBookId(session.reference),
			chapters: session.chapters.map((item, index) => ({
				...active$1,
				id: `chapter-${index}`,
				index,
				title: index === chapter.index ? chapter.title : item.title,
				...index === chapter.index ? {} : {
					start: -1,
					end: -1,
					paragraphStart: -1,
					paragraphEnd: -1
				}
			})),
			paragraphs: book.paragraphs.map((paragraph) => ({
				...paragraph,
				chapterId: `chapter-${chapter.index}`
			})),
			onlineReading: {
				sessionId: session.id,
				reference: session.reference,
				chapterIndex: chapter.index
			}
		};
	}

//#endregion
//#region src/client/online/api.ts
	const BASE_PATH = "/dsh-novel-reader/online";
	var OnlineApiError = class extends Error {
		constructor(message, code = "REQUEST_FAILED") {
			super(message);
			this.code = code;
			this.name = "OnlineApiError";
		}
	};
	async function requestJson(path, init) {
		let response;
		try {
			response = await fetch(`${BASE_PATH}${path}`, {
				cache: "no-store",
				...init
			});
		} catch (error) {
			if (error instanceof DOMException && error.name === "AbortError") throw error;
			throw new OnlineApiError("无法连接阅读器 Host，请确认插件仍在运行。");
		}
		if (!response.ok) {
			let detail = {};
			try {
				detail = await response.json();
			} catch {}
			throw new OnlineApiError(detail.error?.message ?? `请求失败（HTTP ${response.status}）。`, detail.error?.code);
		}
		return await response.json();
	}
	function searchOnlineBooks(query, signal) {
		return requestJson(`/search?q=${encodeURIComponent(query)}`, signal === void 0 ? void 0 : { signal });
	}
	function createAcquisition(resultId) {
		return requestJson("/acquisitions", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({ resultId })
		});
	}
	function getAcquisition(id$1, signal) {
		return requestJson(`/acquisitions/${encodeURIComponent(id$1)}`, signal === void 0 ? void 0 : { signal });
	}
	function cancelAcquisition(id$1) {
		return requestJson(`/acquisitions/${encodeURIComponent(id$1)}`, { method: "DELETE" });
	}
	function getAcquisitionResult(id$1) {
		return requestJson(`/acquisitions/${encodeURIComponent(id$1)}/result`);
	}
	function openOnlineReading(input, signal) {
		return requestJson("/readings", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(input),
			...signal ? { signal } : {}
		});
	}
	function getOnlineChapter(id$1, index, signal) {
		return requestJson(`/readings/${encodeURIComponent(id$1)}/chapters/${index}`, signal ? { signal } : void 0);
	}
	function closeOnlineReading(id$1) {
		return requestJson(`/readings/${encodeURIComponent(id$1)}`, { method: "DELETE" });
	}
	const jsonRequest = (value, method = "POST") => ({
		method,
		headers: { "content-type": "application/json" },
		body: JSON.stringify(value)
	});
	function listRules(signal) {
		return requestJson("/rules", signal ? { signal } : void 0);
	}
	function saveRule(raw, format, enabled, id$1) {
		return requestJson("/rules", jsonRequest({
			raw,
			format,
			enabled,
			id: id$1
		}));
	}
	function setRuleEnabled(id$1, enabled) {
		return requestJson(`/rules/${encodeURIComponent(id$1)}`, jsonRequest({ enabled }, "PUT"));
	}
	function deleteRule(id$1) {
		return requestJson(`/rules/${encodeURIComponent(id$1)}`, { method: "DELETE" });
	}
	function previewRuleImport(text) {
		return requestJson("/rules/import", jsonRequest({ text }));
	}
	function commitRuleImport(token, updateIds) {
		return requestJson("/rules/import", jsonRequest({
			token,
			updateIds
		}));
	}
	function exportRules(id$1) {
		return requestJson(`/rules/export${id$1 ? `?id=${encodeURIComponent(id$1)}` : ""}`);
	}
	function testRule(input, signal) {
		return requestJson("/rules/test", {
			...jsonRequest(input),
			...signal ? { signal } : {}
		});
	}

//#endregion
//#region src/client/online/chapter-cache.ts
/** One reader session's sliding, memory-only chapter window. */
	var OnlineChapterCache = class {
		chapters = /* @__PURE__ */ new Map();
		pending = /* @__PURE__ */ new Map();
		generation = 0;
		disposed = false;
		constructor(session, fetchChapter = getOnlineChapter) {
			this.session = session;
			this.fetchChapter = fetchChapter;
		}
		get sessionId() {
			return this.session.id;
		}
		request(index) {
			const existing = this.pending.get(index);
			if (existing && !existing.controller.signal.aborted) return existing;
			const controller = new AbortController();
			const entry = {
				controller,
				foreground: false,
				promise: void 0
			};
			entry.promise = this.fetchChapter(this.session.id, index, controller.signal).then((chapter) => {
				controller.signal.throwIfAborted();
				if (chapter.index !== index) throw new Error("章节响应与请求不匹配。");
				if (!this.disposed && this.pending.get(index) === entry) this.chapters.set(index, chapter);
				return chapter;
			}).finally(() => {
				if (this.pending.get(index) === entry) this.pending.delete(index);
			});
			this.pending.set(index, entry);
			return entry;
		}
		async read(index, signal) {
			signal.throwIfAborted();
			if (this.disposed) throw new DOMException("阅读会话已关闭。", "AbortError");
			if (!Number.isSafeInteger(index) || index < 0 || index >= this.session.chapters.length) throw new Error("未找到该章节。");
			this.pause(index);
			const cached = this.chapters.get(index);
			if (cached) return cached;
			const entry = this.request(index);
			entry.foreground = true;
			let onAbort = () => {};
			try {
				return await Promise.race([entry.promise, new Promise((_, reject) => {
					onAbort = () => {
						entry.controller.abort();
						reject(signal.reason);
					};
					signal.addEventListener("abort", onAbort, { once: true });
					if (signal.aborted) onAbort();
				})]);
			} finally {
				signal.removeEventListener("abort", onAbort);
				entry.foreground = false;
			}
		}
		prefetch(currentIndex, count) {
			if (this.disposed) return;
			const generation = ++this.generation;
			const end = Math.min(this.session.chapters.length - 1, currentIndex + count);
			for (const index of this.chapters.keys()) if (index < currentIndex || index > end) this.chapters.delete(index);
			for (const [index, entry] of this.pending) if (!entry.foreground && (index <= currentIndex || index > end)) entry.controller.abort();
			(async () => {
				for (let index = currentIndex + 1; index <= end; index++) {
					if (this.disposed || generation !== this.generation) return;
					if (this.chapters.has(index)) continue;
					try {
						await this.request(index).promise;
					} catch {}
				}
			})();
		}
		pause(keepIndex) {
			this.generation++;
			for (const [index, entry] of this.pending) if (!entry.foreground && index !== keepIndex) entry.controller.abort();
		}
		dispose() {
			this.disposed = true;
			this.generation++;
			for (const entry of this.pending.values()) entry.controller.abort();
			this.pending.clear();
			this.chapters.clear();
		}
	};

//#endregion
//#region src/shared/fanqie.ts
	function sameLocation(a, b) {
		return a.chapterIndex === b.chapterIndex && a.paragraphIndex === b.paragraphIndex;
	}

//#endregion
//#region src/client/storage/host.ts
/**
	* Client half of the dsh-novel-reader host bridge. The reader state lives
	* durably on the host (storage-domain, under $DSH_HOME/storages) so it
	* survives DSH Desktop restarts even though the loopback origin changes.
	* Every call degrades gracefully: when the host routes are unreachable
	* (plain browser embedding, old host), callers fall back to browser storage.
	*/
	const STATE_PATH = "/dsh-novel-reader/state";
	const BOOKS_PATH = "/dsh-novel-reader/books/";
	/** Fetch wrapper: same-origin relative paths; never throws. */
	async function request$1(path, init) {
		if (cloudHosted) return null;
		try {
			return await fetch(path, {
				cache: "no-store",
				...init
			});
		} catch {
			return null;
		}
	}
	/** Load the complete reader state from the host, or `null` when unavailable. */
	async function loadHostState() {
		const response = await request$1(STATE_PATH);
		if (response === null || !response.ok) return null;
		try {
			return await response.json();
		} catch {
			return null;
		}
	}
	/** Persist the complete reader state on the host. Resolves even on failure. */
	async function saveHostState(state, unloading = false) {
		await request$1(STATE_PATH, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(state),
			keepalive: unloading
		});
	}
	/** Load one book body from the host, or `null` when unavailable. */
	async function loadHostBook(id$1) {
		const response = await request$1(`${BOOKS_PATH}${encodeURIComponent(id$1)}`);
		if (response === null || !response.ok) return null;
		try {
			return await response.json();
		} catch {
			return null;
		}
	}
	/** Persist one book body on the host. Resolves even on failure. */
	async function saveHostBook(book) {
		const response = await request$1(`${BOOKS_PATH}${encodeURIComponent(book.id)}`, {
			method: "PUT",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(book)
		});
		if (response !== null && !response.ok) console.warn(`[dsh-novel-reader] host book save failed: ${response.status}`);
	}
	/** Remove one book body from the host. Resolves even on failure. */
	async function deleteHostBook(id$1) {
		const response = await request$1(`${BOOKS_PATH}${encodeURIComponent(id$1)}`, { method: "DELETE" });
		if (response !== null && !response.ok) console.warn(`[dsh-novel-reader] host book delete failed: ${response.status}`);
	}

//#endregion
//#region src/client/storage/books.ts
/**
	* Book body storage. The host half keeps book files under
	* $DSH_HOME/storages/novel-reader-books so large books survive Desktop
	* restarts (browser IndexedDB is per-launch-origin and would be lost).
	* IndexedDB stays as a fast local cache: reads try it first, then the host;
	* writes go to both.
	*/
	const DATABASE_NAME = "codex-novel-reader";
	const DATABASE_VERSION = 1;
	const STORE_NAME = "books";
	function openDatabase() {
		return new Promise((resolve, reject) => {
			const request$2 = indexedDB.open(DATABASE_NAME, DATABASE_VERSION);
			request$2.onupgradeneeded = () => {
				if (!request$2.result.objectStoreNames.contains(STORE_NAME)) request$2.result.createObjectStore(STORE_NAME, { keyPath: "id" });
			};
			request$2.onsuccess = () => resolve(request$2.result);
			request$2.onerror = () => reject(request$2.error ?? /* @__PURE__ */ new Error("IndexedDB open failed"));
		});
	}
	async function transaction(mode, run) {
		const database = await openDatabase();
		return new Promise((resolve, reject) => {
			const tx = database.transaction(STORE_NAME, mode);
			const request$2 = run(tx.objectStore(STORE_NAME));
			request$2.onsuccess = () => resolve(request$2.result);
			request$2.onerror = () => reject(request$2.error ?? /* @__PURE__ */ new Error("IndexedDB request failed"));
			tx.oncomplete = () => database.close();
			tx.onerror = () => {
				database.close();
				reject(tx.error ?? /* @__PURE__ */ new Error("IndexedDB transaction failed"));
			};
		});
	}
	async function saveBook(book) {
		const key = await transaction("readwrite", (store) => store.put(book));
		saveHostBook(book);
		return key;
	}
	async function getBook(id$1) {
		const local = await transaction("readonly", (store) => store.get(id$1));
		if (local !== void 0) return local;
		const remote = await loadHostBook(id$1);
		if (remote === null) return void 0;
		try {
			await transaction("readwrite", (store) => store.put(remote));
		} catch {}
		return remote;
	}
	async function deleteBook(id$1) {
		await transaction("readwrite", (store) => store.delete(id$1));
		deleteHostBook(id$1);
	}

//#endregion
//#region src/shared/launcher-position.ts
/** Normalize persisted launcher data from current, old, or corrupted states. */
	function normalizeLauncherYRatio(value) {
		if (typeof value !== "number" || !Number.isFinite(value)) return DEFAULT_LAUNCHER_Y_RATIO;
		return Math.min(1, Math.max(0, value));
	}

//#endregion
//#region src/client/storage/local.ts
/**
	* Reader state persistence.
	*
	* Primary store: the host half (storage-domain under $DSH_HOME/storages),
	* which survives DSH Desktop restarts regardless of the per-launch loopback
	* port. Browser localStorage remains a synchronous cache/fallback: reads
	* hydrate instantly from it, then reconcile with the host; writes go to both
	* so the UI stays responsive even when the host is unreachable.
	*/
	function readJson(key, fallback) {
		try {
			const value = globalThis.localStorage?.getItem(key);
			return value === null || value === void 0 ? fallback : JSON.parse(value);
		} catch {
			return fallback;
		}
	}
	function writeJson(key, value) {
		try {
			globalThis.localStorage?.setItem(key, JSON.stringify(value));
		} catch {}
	}
	function loadSettings() {
		const stored = readJson(STORAGE_KEYS.settings, {});
		return {
			...DEFAULT_SETTINGS,
			...stored,
			keepNavigationVisible: typeof stored.keepNavigationVisible === "boolean" ? stored.keepNavigationVisible : globalThis.matchMedia?.("(max-width: 600px)").matches ?? false,
			prefetchChapters: normalizePrefetchChapters(stored.prefetchChapters)
		};
	}
	function saveSettings(value) {
		writeJson(STORAGE_KEYS.settings, value);
	}
	function loadPanel() {
		const stored = readJson(STORAGE_KEYS.panel, {});
		return {
			...DEFAULT_PANEL,
			...stored,
			expanded: true,
			launcherYRatio: normalizeLauncherYRatio(stored.launcherYRatio)
		};
	}
	function savePanel(value) {
		writeJson(STORAGE_KEYS.panel, value);
	}
	function loadProgress() {
		const local = readJson(STORAGE_KEYS.progress, {});
		const merged = { ...typeof window === "undefined" ? {} : window.__CODEX_NOVEL_READER_PREVIEW_PROGRESS__ ?? {} };
		for (const [id$1, value] of Object.entries(local)) if ((merged[id$1]?.updatedAt ?? -1) <= value.updatedAt) merged[id$1] = value;
		return merged;
	}
	function saveProgress(value) {
		writeJson(STORAGE_KEYS.progress, value);
	}
	function loadBookmarks() {
		return readJson(STORAGE_KEYS.bookmarks, []);
	}
	function saveBookmarks(value) {
		writeJson(STORAGE_KEYS.bookmarks, value);
	}
	function loadRecents() {
		return readJson(STORAGE_KEYS.recents, []);
	}
	function saveRecents(value) {
		writeJson(STORAGE_KEYS.recents, value.slice(0, 10));
	}
	/** True when the host state carries no user data at all (fresh install). */
	function isEmptyHostState(state) {
		const settingsEmpty = state.settings === void 0 || Object.keys(state.settings).length === 0;
		const panelEmpty = state.panel === void 0 || Object.keys(state.panel).length === 0;
		const progressEmpty = state.progress === void 0 || Object.keys(state.progress).length === 0;
		const bookmarksEmpty = state.bookmarks === void 0 || state.bookmarks.length === 0;
		const recentsEmpty = state.recents === void 0 || state.recents.length === 0;
		return settingsEmpty && panelEmpty && progressEmpty && bookmarksEmpty && recentsEmpty;
	}
	/** Load the host state and merge it over the browser caches. Never throws. */
	async function hydrateFromHost() {
		const state = await loadHostState();
		if (state === null) return false;
		if (isEmptyHostState(state)) return true;
		if (state.settings) writeJson(STORAGE_KEYS.settings, state.settings);
		if (state.panel) writeJson(STORAGE_KEYS.panel, state.panel);
		if (state.progress) {
			const merged = { ...loadProgress() };
			for (const [id$1, value] of Object.entries(state.progress)) if ((merged[id$1]?.updatedAt ?? -1) <= value.updatedAt) merged[id$1] = value;
			writeJson(STORAGE_KEYS.progress, merged);
		}
		if (state.bookmarks) writeJson(STORAGE_KEYS.bookmarks, state.bookmarks);
		if (state.recents) writeJson(STORAGE_KEYS.recents, state.recents);
		return true;
	}
	/** Push the current browser caches to the host. Never throws. */
	async function syncToHost(unloading = false) {
		await saveHostState({
			settings: loadSettings(),
			panel: loadPanel(),
			progress: loadProgress(),
			bookmarks: loadBookmarks(),
			recents: loadRecents()
		}, unloading);
	}

//#endregion
//#region node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js
	var require_react_jsx_runtime_production_min = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js": ((exports) => {
		var f = require_react(), k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = {
			key: !0,
			ref: !0,
			__self: !0,
			__source: !0
		};
		function q(c, a, g$1) {
			var b, d = {}, e = null, h$1 = null;
			void 0 !== g$1 && (e = "" + g$1);
			void 0 !== a.key && (e = "" + a.key);
			void 0 !== a.ref && (h$1 = a.ref);
			for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
			if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
			return {
				$$typeof: k,
				type: c,
				key: e,
				ref: h$1,
				props: d,
				_owner: n.current
			};
		}
		exports.Fragment = l;
		exports.jsx = q;
		exports.jsxs = q;
	}) });

//#endregion
//#region node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
	var require_jsx_runtime = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js": ((exports, module) => {
		module.exports = require_react_jsx_runtime_production_min();
	}) });

//#endregion
//#region src/client/state/ReaderContext.tsx
	var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
	const ReaderContext = (0, import_react.createContext)(null);
	function initialPosition(book, saved) {
		const position = saved[book.id] ?? {
			bookId: book.id,
			chapterIndex: 0,
			paragraphIndex: book.chapters[0]?.paragraphStart ?? 0,
			scrollOffset: 0,
			updatedAt: Date.now(),
			readingSeconds: 0
		};
		if (!book.onlineReading) return position;
		const chapterIndex = book.onlineReading.chapterIndex;
		return {
			...position,
			chapterIndex,
			paragraphIndex: position.chapterIndex === chapterIndex ? Math.max(0, Math.min(book.paragraphs.length - 1, position.paragraphIndex)) : 0,
			scrollOffset: position.chapterIndex === chapterIndex ? position.scrollOffset : 0
		};
	}
	function recentFromBook(book, position) {
		return {
			id: book.id,
			name: book.name,
			size: book.size,
			encoding: book.encoding,
			openedAt: Date.now(),
			format: book.format,
			progressPercent: Math.round(calculateProgress(book, position).bookPercent),
			...book.onlineReading ? { onlineReading: book.onlineReading.reference } : {}
		};
	}
	function ReaderProvider({ children }) {
		const [book, setBook] = (0, import_react.useState)(null);
		const [settings, setSettings] = (0, import_react.useState)(loadSettings);
		const [panel, setPanel] = (0, import_react.useState)(loadPanel);
		const [progressByBook, setProgressByBookState] = (0, import_react.useState)(loadProgress);
		const progressRef = (0, import_react.useRef)(progressByBook);
		const setProgressByBook = (0, import_react.useCallback)((update) => {
			const next = typeof update === "function" ? update(progressRef.current) : update;
			progressRef.current = next;
			saveProgress(next);
			setProgressByBookState(next);
		}, []);
		(0, import_react.useEffect)(() => {
			const flush = () => {
				saveProgress(progressRef.current);
				syncToHost(true);
			};
			const hidden = () => {
				if (document.visibilityState === "hidden") flush();
			};
			window.addEventListener("pagehide", flush);
			document.addEventListener("visibilitychange", hidden);
			return () => {
				window.removeEventListener("pagehide", flush);
				document.removeEventListener("visibilitychange", hidden);
			};
		}, []);
		const [bookmarks, setBookmarks] = (0, import_react.useState)(loadBookmarks);
		const [recents, setRecents] = (0, import_react.useState)(loadRecents);
		const [loading, setLoading] = (0, import_react.useState)(false);
		const [error, setError] = (0, import_react.useState)(null);
		const [notices, setNotices] = (0, import_react.useState)([]);
		const [pendingParagraph, setPendingParagraph] = (0, import_react.useState)(null);
		const [pageVisible, setPageVisible] = (0, import_react.useState)(() => document.visibilityState !== "hidden");
		const hostHydrated = (0, import_react.useRef)(false);
		const [ready, setReady] = (0, import_react.useState)(false);
		const [readerActive, setReaderActive] = (0, import_react.useState)(true);
		const readingSession = (0, import_react.useRef)(null);
		const readingCache = (0, import_react.useRef)(null);
		const readingRequest = (0, import_react.useRef)(null);
		const failedChapter = (0, import_react.useRef)(null);
		(0, import_react.useEffect)(() => () => {
			readingRequest.current?.abort();
			readingCache.current?.dispose();
			if (readingSession.current) closeOnlineReading(readingSession.current.id).catch(() => {});
		}, []);
		(0, import_react.useEffect)(() => {
			const onVisibilityChange = () => setPageVisible(document.visibilityState !== "hidden");
			document.addEventListener("visibilitychange", onVisibilityChange);
			return () => document.removeEventListener("visibilitychange", onVisibilityChange);
		}, []);
		(0, import_react.useEffect)(() => {
			const cache = readingCache.current;
			if (!cache || book?.onlineReading?.sessionId !== cache.sessionId || loading) return;
			if (!readerActive || !panel.expanded || !pageVisible) {
				cache.pause();
				return;
			}
			cache.prefetch(book.onlineReading.chapterIndex, normalizePrefetchChapters(settings.prefetchChapters));
		}, [
			book?.onlineReading?.sessionId,
			book?.onlineReading?.chapterIndex,
			settings.prefetchChapters,
			panel.expanded,
			pageVisible,
			loading,
			readerActive
		]);
		const progress = book === null ? null : initialPosition(book, progressByBook);
		const activeSnapshot = (0, import_react.useRef)({
			book,
			progress
		});
		activeSnapshot.current = {
			book,
			progress
		};
		const activeBookProgressPercent = (0, import_react.useMemo)(() => {
			if (book === null || progress === null) return null;
			return Math.round(calculateProgress(book, progress).bookPercent);
		}, [
			book,
			progress?.chapterIndex,
			progress?.paragraphIndex
		]);
		(0, import_react.useEffect)(() => {
			let cancelled = false;
			hydrateFromHost().then((hydrated) => {
				if (cancelled) return;
				hostHydrated.current = true;
				setReady(true);
				if (!hydrated) return;
				setSettings(loadSettings());
				setPanel(loadPanel());
				setProgressByBook(loadProgress());
				setBookmarks(loadBookmarks());
				setRecents(loadRecents());
			});
			return () => {
				cancelled = true;
			};
		}, []);
		(0, import_react.useEffect)(() => saveSettings(settings), [settings]);
		(0, import_react.useEffect)(() => savePanel(panel), [panel]);
		(0, import_react.useEffect)(() => saveProgress(progressByBook), [progressByBook]);
		(0, import_react.useEffect)(() => saveBookmarks(bookmarks), [bookmarks]);
		(0, import_react.useEffect)(() => saveRecents(recents), [recents]);
		(0, import_react.useEffect)(() => {
			if (book === null || activeBookProgressPercent === null) return;
			setRecents((current) => {
				const index = current.findIndex((item) => item.id === book.id);
				if (index < 0 || current[index]?.progressPercent === activeBookProgressPercent) return current;
				return current.map((item, itemIndex) => itemIndex === index ? {
					...item,
					progressPercent: activeBookProgressPercent
				} : item);
			});
		}, [activeBookProgressPercent, book]);
		(0, import_react.useEffect)(() => {
			if (!hostHydrated.current) return;
			const timer = globalThis.setTimeout(() => {
				syncToHost();
			}, 800);
			return () => globalThis.clearTimeout(timer);
		}, [
			settings,
			panel,
			progressByBook,
			bookmarks,
			recents
		]);
		(0, import_react.useEffect)(() => {
			if (book === null || !panel.expanded || !readerActive) return;
			const timer = globalThis.setInterval(() => {
				if (document.visibilityState !== "visible") return;
				setProgressByBook((current) => {
					const position = initialPosition(book, current);
					return {
						...current,
						[book.id]: {
							...position,
							readingSeconds: position.readingSeconds + 15,
							updatedAt: Date.now()
						}
					};
				});
			}, 15e3);
			return () => globalThis.clearInterval(timer);
		}, [
			book,
			panel.expanded,
			readerActive
		]);
		(0, import_react.useEffect)(() => {
			const apply = (event) => {
				const data = event.detail;
				if (!book || data.localId !== book.id || !data.position) return;
				const position = {
					...data.position,
					bookId: book.id,
					updatedAt: Date.now()
				};
				position.chapterIndex = Math.max(0, Math.min(book.chapters.length - 1, position.chapterIndex));
				position.paragraphIndex = Math.max(0, Math.min(book.paragraphs.length - 1, position.paragraphIndex));
				setProgressByBook((current) => ({
					...current,
					[book.id]: position
				}));
				setPendingParagraph(position.paragraphIndex);
				setBookmarks((current) => [...current.filter((b) => b.bookId !== book.id), ...data.bookmarks.map((b) => ({
					...b,
					bookId: book.id
				}))]);
			};
			window.addEventListener("dnr-cloud-position", apply);
			return () => window.removeEventListener("dnr-cloud-position", apply);
		}, [book, setProgressByBook]);
		const activateBook = (0, import_react.useCallback)((nextBook) => {
			if (!nextBook.onlineReading) {
				readingCache.current?.dispose();
				readingCache.current = null;
				if (readingSession.current) closeOnlineReading(readingSession.current.id).catch(() => {});
				readingSession.current = null;
			}
			failedChapter.current = null;
			const nextPosition = initialPosition(nextBook, progressByBook);
			setBook(nextBook);
			setProgressByBook((current) => ({
				...current,
				[nextBook.id]: initialPosition(nextBook, current)
			}));
			setPendingParagraph(nextPosition.paragraphIndex);
			setRecents((current) => [recentFromBook(nextBook, nextPosition), ...current.filter((item) => item.id !== nextBook.id)].slice(0, 10));
			setPanel((current) => ({
				...current,
				expanded: true
			}));
		}, [progressByBook]);
		const loadFile = (0, import_react.useCallback)(async (file) => {
			readingRequest.current?.abort();
			readingCache.current?.pause();
			setLoading(true);
			setError(null);
			setNotices([]);
			try {
				const result = await loadBookFromFile(file);
				try {
					await saveBook(result.book);
					await original(result.book.id, file);
				} catch {
					result.warnings.push("浏览器存储空间不足：本次可正常阅读，但“最近打开”可能无法离线恢复正文。");
				}
				setNotices(result.warnings);
				activateBook(result.book);
				return true;
			} catch (caught) {
				setError(caught instanceof Error ? caught.message : "文件读取失败。");
				return false;
			} finally {
				setLoading(false);
			}
		}, [activateBook]);
		const loadOnlineBook = (0, import_react.useCallback)(async (onlineBook, txtNotice) => {
			readingRequest.current?.abort();
			readingCache.current?.pause();
			setLoading(true);
			setError(null);
			setNotices([]);
			try {
				await saveBook(onlineBook);
				setNotices([...txtNotice ? [txtNotice] : [], ...onlineBook.largeFileMode ? ["正文超过 10MB，已启用大文件模式。"] : []]);
				activateBook(onlineBook);
			} catch (caught) {
				setError(caught instanceof Error ? caught.message : "在线书籍保存失败。");
				throw caught;
			} finally {
				setLoading(false);
			}
		}, [activateBook]);
		const fetchReadingChapter = (0, import_react.useCallback)(async (session, index, signal, cache) => {
			let current = session;
			let currentCache = cache;
			let chapter;
			try {
				chapter = await currentCache.read(index, signal);
			} catch (caught) {
				if (!(caught instanceof OnlineApiError) || caught.code !== "READING_EXPIRED" || signal.aborted) throw caught;
				current = await openOnlineReading({ reference: session.reference }, signal);
				currentCache = new OnlineChapterCache(current);
				try {
					chapter = await currentCache.read(index, signal);
				} catch (error$1) {
					currentCache.dispose();
					closeOnlineReading(current.id).catch(() => {});
					throw error$1;
				}
			}
			if (signal.aborted) {
				if (current.id !== session.id) {
					currentCache.dispose();
					closeOnlineReading(current.id).catch(() => {});
				}
				signal.throwIfAborted();
			}
			try {
				return {
					session: current,
					book: buildReadingBook(current, chapter),
					cache: currentCache
				};
			} catch (error$1) {
				if (current.id !== session.id) {
					currentCache.dispose();
					closeOnlineReading(current.id).catch(() => {});
				}
				throw error$1;
			}
		}, []);
		const openReading = (0, import_react.useCallback)(async (input) => {
			readingRequest.current?.abort();
			readingCache.current?.pause();
			const controller = new AbortController();
			readingRequest.current = controller;
			setLoading(true);
			setError(null);
			let openedSession;
			let openedCache;
			try {
				openedSession = await openOnlineReading(input, controller.signal);
				controller.signal.throwIfAborted();
				const saved = progressByBook[onlineReadingBookId(openedSession.reference)];
				const index = Math.max(0, Math.min(openedSession.chapters.length - 1, saved?.chapterIndex ?? 0));
				openedCache = new OnlineChapterCache(openedSession);
				const loaded = await fetchReadingChapter(openedSession, index, controller.signal, openedCache);
				if (readingSession.current) closeOnlineReading(readingSession.current.id).catch(() => {});
				readingCache.current?.dispose();
				if (openedCache !== loaded.cache) {
					openedCache.dispose();
					closeOnlineReading(openedSession.id).catch(() => {});
				}
				readingSession.current = loaded.session;
				readingCache.current = loaded.cache;
				setNotices(["在线按章阅读：正文仅保留在内存，搜索仅覆盖当前章节。"]);
				activateBook(loaded.book);
			} catch (caught) {
				openedCache?.dispose();
				if (openedSession) closeOnlineReading(openedSession.id).catch(() => {});
				if (!controller.signal.aborted) setError(caught instanceof Error ? caught.message : "在线阅读失败。");
				throw caught;
			} finally {
				if (readingRequest.current === controller) setLoading(false);
			}
		}, [
			activateBook,
			fetchReadingChapter,
			progressByBook
		]);
		const startOnlineReading = (0, import_react.useCallback)(async (resultId) => {
			await openReading({ resultId });
		}, [openReading]);
		const loadReadingChapter = (0, import_react.useCallback)(async (index, paragraphIndex = 0, expected) => {
			const session = readingSession.current;
			const cache = readingCache.current;
			if (!session || !cache) return null;
			readingRequest.current?.abort();
			const controller = new AbortController();
			readingRequest.current = controller;
			failedChapter.current = {
				index,
				paragraphIndex
			};
			setLoading(true);
			setError(null);
			try {
				const loaded = await fetchReadingChapter(session, index, controller.signal, cache);
				if (expected && (activeSnapshot.current.book?.id !== expected.bookId || !activeSnapshot.current.progress || !sameLocation(activeSnapshot.current.progress, expected.location))) {
					if (cache !== loaded.cache) {
						loaded.cache.dispose();
						closeOnlineReading(loaded.session.id).catch(() => {});
					}
					return null;
				}
				if (cache !== loaded.cache) {
					cache.dispose();
					closeOnlineReading(session.id).catch(() => {});
				}
				readingSession.current = loaded.session;
				readingCache.current = loaded.cache;
				const target = Math.max(0, Math.min(loaded.book.paragraphs.length - 1, paragraphIndex));
				setBook(loaded.book);
				const position = {
					...initialPosition(loaded.book, activeSnapshot.current.progress ? { [loaded.book.id]: activeSnapshot.current.progress } : {}),
					chapterIndex: index,
					paragraphIndex: target,
					scrollOffset: 0,
					updatedAt: Date.now()
				};
				setProgressByBook((current) => ({
					...current,
					[loaded.book.id]: position
				}));
				setPendingParagraph(target);
				failedChapter.current = null;
				return position;
			} catch (caught) {
				if (!controller.signal.aborted) setError(caught instanceof Error ? caught.message : "章节加载失败。");
				return null;
			} finally {
				if (readingRequest.current === controller) setLoading(false);
			}
		}, [fetchReadingChapter]);
		const applySyncedChapter = (0, import_react.useCallback)(async (bookId, chapterIndex, expected) => {
			const current = activeSnapshot.current;
			if (!current.book || !current.progress || current.book.id !== bookId || !sameLocation(current.progress, expected)) return null;
			const chapter = current.book.chapters[chapterIndex];
			if (!Number.isSafeInteger(chapterIndex) || !chapter) return null;
			if (current.book.onlineReading) return await loadReadingChapter(chapterIndex, 0, {
				bookId,
				location: expected
			});
			const position = {
				...current.progress,
				chapterIndex,
				paragraphIndex: chapter.paragraphStart,
				scrollOffset: 0,
				updatedAt: Date.now()
			};
			setProgressByBook((value$1) => ({
				...value$1,
				[bookId]: position
			}));
			setPendingParagraph(position.paragraphIndex);
			return position;
		}, [loadReadingChapter]);
		const retryOnlineChapter = (0, import_react.useCallback)(() => {
			const target = failedChapter.current;
			if (target) loadReadingChapter(target.index, target.paragraphIndex);
		}, [loadReadingChapter]);
		const openRecent = (0, import_react.useCallback)(async (id$1) => {
			if (book?.id === id$1 && book.onlineReading) {
				setPanel((current) => ({
					...current,
					expanded: true
				}));
				setError(null);
				return true;
			}
			const recent = recents.find((item) => item.id === id$1);
			if (recent?.onlineReading) try {
				await openReading({ reference: recent.onlineReading });
				return true;
			} catch {
				return false;
			}
			readingRequest.current?.abort();
			readingCache.current?.pause();
			setLoading(true);
			setError(null);
			try {
				const stored = await getBook(id$1);
				if (stored === void 0) throw new Error("未找到缓存正文，请重新选择原文件。");
				activateBook({
					...stored,
					openedAt: Date.now()
				});
				return true;
			} catch (caught) {
				setError(caught instanceof Error ? caught.message : "最近文件打开失败。");
				return false;
			} finally {
				setLoading(false);
			}
		}, [
			activateBook,
			book,
			openReading,
			recents
		]);
		const removeRecent = (0, import_react.useCallback)(async (id$1) => {
			setRecents((current) => current.filter((item) => item.id !== id$1));
			try {
				await deleteBook(id$1);
			} catch {}
		}, []);
		const updateSettings = (0, import_react.useCallback)((patch) => {
			setSettings((current) => ({
				...current,
				...patch,
				prefetchChapters: normalizePrefetchChapters(patch.prefetchChapters ?? current.prefetchChapters)
			}));
		}, []);
		const updatePanel = (0, import_react.useCallback)((patch) => {
			setPanel((current) => ({
				...current,
				...patch
			}));
		}, []);
		const togglePanel = (0, import_react.useCallback)(() => {
			setPanel((current) => ({
				...current,
				expanded: !current.expanded
			}));
		}, []);
		const setPanelWidth = (0, import_react.useCallback)((width) => {
			const nextWidth = Math.max(MIN_PANEL_WIDTH, Math.min(MAX_PANEL_WIDTH, Math.round(width)));
			setPanel((current) => ({
				...current,
				width: nextWidth
			}));
		}, []);
		const goToChapter = (0, import_react.useCallback)((chapterIndex) => {
			if (book === null) return;
			const chapter = book.chapters[Math.max(0, Math.min(book.chapters.length - 1, chapterIndex))];
			if (chapter === void 0) return;
			if (book.onlineReading) {
				loadReadingChapter(chapter.index);
				return;
			}
			const paragraphIndex = chapter.paragraphStart;
			setProgressByBook((current) => ({
				...current,
				[book.id]: {
					...initialPosition(book, current),
					chapterIndex: chapter.index,
					paragraphIndex,
					scrollOffset: 0,
					updatedAt: Date.now()
				}
			}));
			setPendingParagraph(paragraphIndex);
		}, [book, loadReadingChapter]);
		const goToParagraph = (0, import_react.useCallback)((paragraphIndex, targetChapterIndex) => {
			if (book === null) return;
			if (book.onlineReading && targetChapterIndex !== void 0 && targetChapterIndex !== book.onlineReading.chapterIndex) {
				loadReadingChapter(targetChapterIndex, paragraphIndex);
				return;
			}
			if (book.onlineReading) {
				readingRequest.current?.abort();
				failedChapter.current = null;
				setLoading(false);
				setError(null);
			}
			const chapter = book.chapters.find((item) => paragraphIndex >= item.paragraphStart && paragraphIndex <= item.paragraphEnd) ?? book.chapters[0];
			if (chapter === void 0) return;
			setProgressByBook((current) => ({
				...current,
				[book.id]: {
					...initialPosition(book, current),
					chapterIndex: chapter.index,
					paragraphIndex,
					scrollOffset: 0,
					updatedAt: Date.now()
				}
			}));
			setPendingParagraph(paragraphIndex);
		}, [book, loadReadingChapter]);
		const markParagraphVisible = (0, import_react.useCallback)((paragraphIndex, scrollOffset = 0) => {
			if (book === null) return;
			const chapterIndex = book.chapters.find((item) => paragraphIndex >= item.paragraphStart && paragraphIndex <= item.paragraphEnd)?.index ?? 0;
			setProgressByBook((current) => ({
				...current,
				[book.id]: {
					...initialPosition(book, current),
					chapterIndex,
					paragraphIndex,
					scrollOffset,
					updatedAt: Date.now()
				}
			}));
		}, [book]);
		const value = (0, import_react.useMemo)(() => ({
			book,
			settings,
			panel,
			progress,
			bookmarks: book === null ? [] : bookmarks.filter((item) => item.bookId === book.id),
			recents,
			loading,
			error,
			notices,
			pendingParagraph,
			ready,
			applySyncedChapter,
			setReaderActive,
			loadFile,
			loadOnlineBook,
			startOnlineReading,
			retryOnlineChapter,
			openRecent,
			removeRecent,
			updateSettings,
			updatePanel,
			togglePanel,
			setPanelWidth,
			goToChapter,
			goToParagraph,
			markParagraphVisible,
			clearPendingParagraph: () => setPendingParagraph(null),
			clearError: () => setError(null)
		}), [
			book,
			settings,
			panel,
			progress,
			bookmarks,
			recents,
			loading,
			error,
			notices,
			pendingParagraph,
			ready,
			applySyncedChapter,
			loadFile,
			loadOnlineBook,
			startOnlineReading,
			retryOnlineChapter,
			openRecent,
			removeRecent,
			updateSettings,
			updatePanel,
			togglePanel,
			setPanelWidth,
			goToChapter,
			goToParagraph,
			markParagraphVisible
		]);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReaderContext.Provider, {
			value,
			children
		});
	}
	function useReader() {
		const value = (0, import_react.useContext)(ReaderContext);
		if (value === null) throw new Error("useReader must be used inside ReaderProvider");
		return value;
	}

//#endregion
//#region src/client/cloud/sync.ts
	function signature(p$4) {
		return JSON.stringify([
			p$4.position.chapterIndex,
			p$4.position.paragraphIndex,
			p$4.bookmarks.map((b) => [
				b.id,
				b.chapterIndex,
				b.paragraphIndex
			])
		]);
	}
	var SyncSession = class {
		state;
		busy = false;
		constructor(id$1) {
			this.id = id$1;
			this.state = read(`sync:${id$1}`, {
				revision: 0,
				baseline: "",
				pending: null,
				operation: "",
				conflict: null
			});
		}
		save() {
			write(`sync:${this.id}`, this.state);
		}
		queue(payload) {
			if (signature(payload) === (this.state.pending ? signature(this.state.pending) : this.state.baseline)) return;
			this.state.pending = structuredClone(payload);
			this.state.operation = crypto.randomUUID();
			this.save();
		}
		async sync(signal, keepalive = false) {
			if (this.busy || this.state.conflict) return null;
			this.busy = true;
			try {
				const pending = this.state.pending;
				const operation = this.state.operation;
				const options = {
					...signal ? { signal } : {},
					...keepalive ? { keepalive: true } : {}
				};
				const response = pending ? await api(`/books/${this.id}/progress`, {
					...options,
					method: "PUT",
					headers: { "content-type": "application/json" },
					body: JSON.stringify({
						revision: this.state.revision,
						operation,
						payload: pending
					})
				}) : await api(`/books/${this.id}/progress`, options);
				const snapshot = await response.json();
				if (!pending && this.state.pending && snapshot.revision !== this.state.revision || response.status === 409) {
					this.state.conflict = snapshot;
					this.save();
					return null;
				}
				this.state.revision = snapshot.revision;
				if (snapshot.payload) this.state.baseline = signature(snapshot.payload);
				if (pending && operation === this.state.operation) this.state.pending = null;
				if (!this.state.pending) this.state.lastSyncedAt = Date.now();
				this.save();
				return this.state.pending ? null : snapshot;
			} finally {
				this.busy = false;
			}
		}
		resolve(choice) {
			const remote = this.state.conflict;
			if (!remote) return null;
			this.state.revision = remote.revision;
			this.state.conflict = null;
			if (choice === "remote") {
				this.state.pending = null;
				this.state.baseline = remote.payload ? signature(remote.payload) : "";
			} else this.state.operation = crypto.randomUUID();
			this.save();
			return choice === "remote" ? remote : null;
		}
	};

//#endregion
//#region src/client/cloud/upload-request.ts
/** Monitor bytes sent separately from the server's durable-save acknowledgement. */
	function uploadBookRequest(hash, file, name, onProgress, signal) {
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			let finished = false;
			let timer;
			const finish = (error, book) => {
				if (finished) return;
				finished = true;
				clearTimeout(timer);
				signal.removeEventListener("abort", abort);
				if (error) reject(error);
				else resolve(book);
			};
			const abort = () => {
				finish(new DOMException("上传已停止", "AbortError"));
				xhr.abort();
			};
			const resetTimeout = () => {
				if (finished) return;
				clearTimeout(timer);
				timer = setTimeout(() => {
					finish(/* @__PURE__ */ new Error("连接长时间没有响应，请检查网络后重试；若文件已传完，请先刷新书库确认是否已保存。"));
					xhr.abort();
				}, 9e4);
			};
			xhr.upload.onprogress = (event) => {
				if (finished) return;
				resetTimeout();
				onProgress({
					loaded: Math.min(file.size, event.loaded),
					total: file.size,
					computable: event.lengthComputable,
					awaitingServer: false
				});
			};
			xhr.upload.onload = () => {
				if (finished) return;
				resetTimeout();
				onProgress({
					loaded: file.size,
					total: file.size,
					computable: true,
					awaitingServer: true
				});
			};
			xhr.onerror = () => finish(/* @__PURE__ */ new Error("网络连接中断，请检查网络后重试。若文件已传完，请先刷新书库确认。"));
			xhr.onabort = () => finish(new DOMException("上传已停止", "AbortError"));
			xhr.onload = () => {
				if (finished) return;
				let body;
				try {
					body = JSON.parse(xhr.responseText);
				} catch {
					finish(/* @__PURE__ */ new Error("未收到有效的云端确认，请检查登录状态并刷新书库后重试。"));
					return;
				}
				if (xhr.status < 200 || xhr.status >= 300) {
					const message = body?.error;
					finish(new Error(typeof message === "string" ? message : `上传失败（${xhr.status}），请重试。`));
					return;
				}
				const book = body;
				if (!book || book.id !== hash || typeof book.name !== "string" || typeof book.filename !== "string" || book.size !== file.size) {
					finish(/* @__PURE__ */ new Error("云端保存确认不完整，请刷新书库检查后重试。"));
					return;
				}
				finish(void 0, book);
			};
			if (signal.aborted) {
				abort();
				return;
			}
			signal.addEventListener("abort", abort, { once: true });
			try {
				xhr.open("PUT", `/api/cloud/books/${hash}`);
				xhr.setRequestHeader("x-reader-request", "1");
				xhr.setRequestHeader("content-type", "application/octet-stream");
				xhr.setRequestHeader("x-book-filename", encodeURIComponent(file.name));
				xhr.setRequestHeader("x-book-name", encodeURIComponent(name));
				resetTimeout();
				xhr.send(file);
			} catch (error) {
				finish(error instanceof Error ? error : /* @__PURE__ */ new Error("无法开始上传，请重试。"));
			}
		});
	}

//#endregion
//#region src/client/cloud/uploads.ts
	const JOURNAL = "dnr-cloud:unfinished-uploads";
	const active = (item) => ![
		"completed",
		"failed",
		"cancelled"
	].includes(item.phase);
	async function bounded(run, milliseconds) {
		const controller = new AbortController();
		let timer;
		try {
			return await Promise.race([run(controller.signal), new Promise((_, reject) => {
				timer = setTimeout(() => {
					controller.abort();
					reject(/* @__PURE__ */ new Error("整理超时"));
				}, milliseconds);
			})]);
		} finally {
			clearTimeout(timer);
		}
	}
	const dependencies = {
		prepare: async (file) => (await loadBookFromFile(file)).book,
		hash: async (file) => Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", await file.arrayBuffer())), (byte) => byte.toString(16).padStart(2, "0")).join(""),
		transfer: uploadBookRequest,
		finalize: async (file, saved, localId) => {
			const warnings = [];
			try {
				bind(localId, saved.id);
			} catch {
				warnings.push("本机阅读进度关联未保存");
			}
			try {
				await bounded(() => original(`cloud-${saved.id}`, file), 8e3);
			} catch {
				warnings.push("本机离线副本未保存，可稍后打开书籍重新缓存");
			}
			const position = loadProgress()[localId];
			if (position) try {
				await bounded(async (signal) => {
					const sync = new SyncSession(saved.id);
					if (!(await sync.sync(signal))?.payload && !sync.state.pending && !sync.state.conflict) {
						sync.queue({
							position,
							bookmarks: loadBookmarks().filter((bookmark) => bookmark.bookId === position.bookId)
						});
						await sync.sync(signal);
					}
					if (sync.state.conflict) warnings.push("阅读进度存在冲突，请打开书籍后选择继续位置");
				}, 12e3);
			} catch {
				warnings.push("阅读进度暂未同步，可稍后打开书籍继续同步");
			}
			return warnings;
		}
	};
	/** Page-independent queue: reader/library navigation does not own the upload. */
	var UploadQueue = class {
		snapshot;
		listeners = /* @__PURE__ */ new Set();
		files = /* @__PURE__ */ new Map();
		controller = null;
		activeId = null;
		journal = "";
		pending = Promise.resolve();
		constructor(deps = dependencies, restore = true) {
			this.deps = deps;
			let interrupted = [];
			if (restore) try {
				const value = JSON.parse(sessionStorage.getItem(JOURNAL) ?? "[]");
				if (Array.isArray(value)) interrupted = value.filter((name) => typeof name === "string");
			} catch {}
			this.snapshot = {
				items: [],
				running: false,
				interrupted
			};
		}
		getSnapshot = () => this.snapshot;
		subscribe = (listener) => {
			this.listeners.add(listener);
			return () => this.listeners.delete(listener);
		};
		whenIdle = () => this.pending;
		beforeUnload = (event) => {
			if (this.snapshot.running) {
				event.preventDefault();
				event.returnValue = "1";
			}
		};
		emit(patch) {
			this.snapshot = {
				...this.snapshot,
				...patch
			};
			const journal = JSON.stringify(this.snapshot.items.filter(active).map((item) => item.filename));
			if (journal !== this.journal) {
				this.journal = journal;
				try {
					if (journal === "[]") sessionStorage.removeItem(JOURNAL);
					else sessionStorage.setItem(JOURNAL, journal);
				} catch {}
			}
			this.listeners.forEach((listener) => listener());
		}
		update(id$1, patch) {
			this.emit({ items: this.snapshot.items.map((item) => item.id === id$1 ? {
				...item,
				...patch
			} : item) });
		}
		enqueue(inputs) {
			if (!inputs.length) return;
			if (!this.snapshot.running) this.files.clear();
			const items = inputs.map((input) => {
				const id$1 = crypto.randomUUID();
				this.files.set(id$1, input);
				return {
					id: id$1,
					filename: input.file.name,
					size: input.file.size,
					phase: "queued",
					loaded: 0,
					computable: true,
					bytesPerSecond: 0,
					message: ""
				};
			});
			this.emit({
				interrupted: [],
				items: [...this.snapshot.running ? this.snapshot.items : [], ...items]
			});
			this.start();
		}
		retry(id$1) {
			const item = this.snapshot.items.find((item$1) => item$1.id === id$1);
			if (!item || item.retryable === false || !this.files.has(id$1) || !["failed", "cancelled"].includes(item.phase)) return;
			this.update(id$1, {
				phase: "queued",
				loaded: 0,
				bytesPerSecond: 0,
				computable: true,
				message: ""
			});
			this.start();
		}
		stop() {
			this.emit({ items: this.snapshot.items.map((item) => item.phase === "queued" ? {
				...item,
				phase: "cancelled",
				message: "已停止，尚未上传。"
			} : item) });
			if (this.snapshot.items.find((item) => item.id === this.activeId)?.phase !== "finishing") this.controller?.abort();
		}
		dismiss() {
			if (this.snapshot.running) return;
			this.files.clear();
			this.emit({
				items: [],
				interrupted: []
			});
		}
		start() {
			if (this.snapshot.running) return;
			this.emit({ running: true });
			window.addEventListener("beforeunload", this.beforeUnload);
			this.pending = this.run();
		}
		async run() {
			try {
				let item;
				while (item = this.snapshot.items.find((item$1) => item$1.phase === "queued")) {
					const { file, localId } = this.files.get(item.id);
					const id$1 = item.id;
					const controller = new AbortController();
					this.controller = controller;
					this.activeId = id$1;
					let validated = false;
					try {
						if (!file.size) throw new Error("文件为空，请重新选择。");
						if (file.size > 50 * 1024 * 1024) throw new Error("单本文件最大 50MB。");
						if (!/\.(txt|md|markdown|epub)$/i.test(file.name)) throw new Error("请选择 TXT、Markdown 或 EPUB 文件。");
						validated = true;
						this.update(id$1, { phase: "preparing" });
						await new Promise((resolve) => setTimeout(resolve, 0));
						controller.signal.throwIfAborted();
						const book = await this.deps.prepare(file);
						controller.signal.throwIfAborted();
						this.update(id$1, { phase: "checking" });
						const hash = await this.deps.hash(file);
						controller.signal.throwIfAborted();
						this.update(id$1, { phase: "uploading" });
						const started = performance.now();
						const saved = await this.deps.transfer(hash, file, book.name, (progress) => {
							if (controller.signal.aborted) return;
							const seconds = (performance.now() - started) / 1e3;
							this.update(id$1, {
								phase: progress.awaitingServer ? "confirming" : "uploading",
								loaded: progress.loaded,
								computable: progress.computable,
								bytesPerSecond: seconds >= 1 ? progress.loaded / seconds : 0
							});
						}, controller.signal);
						this.update(id$1, {
							phase: "finishing",
							loaded: file.size,
							computable: true
						});
						let warnings;
						try {
							warnings = await this.deps.finalize(file, saved, localId ?? book.id);
						} catch {
							warnings = ["本机缓存或阅读进度同步未完成，可稍后打开书籍重试"];
						}
						this.update(id$1, {
							phase: "completed",
							message: warnings.length ? `书籍已保存云端；${warnings.join("；")}。` : "已保存到云端，可以在其他设备阅读。"
						});
						this.files.delete(id$1);
						try {
							write("catalog", [saved, ...read("catalog", []).filter((entry) => entry.id !== saved.id)]);
						} catch {}
						window.dispatchEvent(new Event("dnr-cloud-catalog-updated"));
					} catch (error) {
						const retryable = controller.signal.aborted || validated && !(error instanceof FileLoadError && error.code !== "READ_FAILED");
						if (!retryable) this.files.delete(id$1);
						this.update(id$1, {
							retryable,
							phase: controller.signal.aborted ? "cancelled" : "failed",
							message: controller.signal.aborted ? "上传已停止；已传出的文件可能仍在云端保存，请刷新书库确认。" : error instanceof Error ? error.message : "上传失败，请重试。"
						});
					} finally {
						this.controller = null;
						this.activeId = null;
					}
				}
			} finally {
				this.emit({ running: false });
				window.removeEventListener("beforeunload", this.beforeUnload);
			}
		}
	};
	const uploads = new UploadQueue();
	function useUploads() {
		return (0, import_react.useSyncExternalStore)(uploads.subscribe, uploads.getSnapshot, uploads.getSnapshot);
	}

//#endregion
//#region src/client/cloud/UploadStatus.tsx
	const labels = {
		queued: "等待上传",
		preparing: "正在解析书籍",
		checking: "正在校验文件",
		uploading: "正在上传",
		confirming: "文件已传完，等待云端保存",
		finishing: "云端已保存，正在整理本机缓存与阅读进度",
		completed: "上传完成",
		failed: "上传失败",
		cancelled: "已停止"
	};
	function formatBytes$1(bytes) {
		if (bytes < 1024) return `${Math.max(0, Math.round(bytes))} B`;
		if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
		return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
	}
	function transferText(item) {
		const percent = item.computable && item.size ? `${Math.floor(item.loaded / item.size * 100)}% · ` : "";
		const speed = item.bytesPerSecond > 0 && item.phase === "uploading" ? ` · ${formatBytes$1(item.bytesPerSecond)}/s` : "";
		return `${percent}${formatBytes$1(item.loaded)} / ${formatBytes$1(item.size)}${speed}`;
	}
	function UploadStatus({ compact = false, onOpen }) {
		const { items, running, interrupted } = useUploads();
		if (!items.length && !interrupted.length) return null;
		const current = items.find((item) => [
			"preparing",
			"checking",
			"uploading",
			"confirming",
			"finishing"
		].includes(item.phase));
		const completed = items.filter((item) => item.phase === "completed").length;
		const failed = items.filter((item) => item.phase === "failed").length;
		const cancelled = items.filter((item) => item.phase === "cancelled").length;
		const heading = running ? `正在上传 ${items.findIndex((item) => item.id === current?.id) + 1 || 1} / ${items.length} 本` : interrupted.length ? "上次上传未完成" : failed || cancelled ? `上传已结束 · 成功 ${completed} 本${failed ? ` · 失败 ${failed} 本` : ""}${cancelled ? ` · 已停止 ${cancelled} 本` : ""}` : `已上传 ${completed} 本书籍`;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: `dnr-upload-status ${compact ? "is-compact" : ""}`,
			"aria-label": "书籍上传进度",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dnr-upload-heading",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						role: "status",
						children: heading
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onOpen,
							children: "查看上传"
						}),
						running && (current?.phase !== "finishing" || items.some((item) => item.phase === "queued")) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => uploads.stop(),
							children: "停止上传"
						}),
						!running && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => uploads.dismiss(),
							children: "收起"
						})
					] })]
				}),
				interrupted.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "dnr-upload-hint",
					children: [
						"上次有 ",
						interrupted.length,
						" 本书籍尚未确认上传完成。请先刷新书库检查，再重新选择未完成的文件；不会自动续传。"
					]
				}),
				running && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "dnr-upload-hint",
					children: "可在站点内返回阅读、切换目录，上传会继续。请保持本网页打开：刷新、关闭或跳转到其他网站会中断未完成任务；手机锁屏或切到后台可能暂停上传。"
				}),
				!running && items.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "dnr-upload-hint",
					children: failed || cancelled ? "已成功的书籍已保存云端。未完成的文件可单独重试，现在可以离开此页面。" : "书籍已保存云端，现在可以安全离开此页面。"
				}),
				!compact && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "dnr-upload-list",
					children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						"data-phase": item.phase,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "dnr-upload-file",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									title: item.filename,
									children: item.filename
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: labels[item.phase] })]
							}),
							[
								"preparing",
								"checking",
								"uploading",
								"confirming",
								"finishing"
							].includes(item.phase) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("progress", {
								"aria-label": `${item.filename}上传进度`,
								max: item.size || 1,
								value: item.phase === "uploading" && item.computable ? item.loaded : void 0
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "dnr-upload-detail",
								children: ["uploading", "confirming"].includes(item.phase) ? transferText(item) : item.phase === "preparing" ? "正在读取并解析文件，较大的书籍需要一些时间。" : item.phase === "checking" ? "正在核对文件内容，完成后开始传输。" : "上传已成功，本机整理不影响云端书籍。"
							})] }),
							item.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "dnr-upload-detail",
								children: item.message
							}),
							["failed", "cancelled"].includes(item.phase) && item.retryable !== false && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": `重试 ${item.filename}`,
								onClick: () => uploads.retry(item.id),
								children: "重试"
							})
						]
					}, item.id))
				}),
				compact && current && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dnr-upload-current",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: current.filename }),
						" · ",
						labels[current.phase],
						current.phase === "uploading" ? ` · ${transferText(current)}` : ""
					]
				})
			]
		});
	}

//#endregion
//#region src/client/cloud/reading-activity.ts
	function timestamp(value) {
		return typeof value === "number" && Number.isSafeInteger(value) && value > 0 ? value : 0;
	}
	function readingTimes() {
		const value = read("reading-times", {});
		return value && typeof value === "object" && !Array.isArray(value) ? value : {};
	}
	function sortCloudBooks(books, localTimes = readingTimes()) {
		return [...books].sort((a, b) => Math.max(timestamp(b.created_at), timestamp(b.last_read_at), timestamp(localTimes[b.id])) - Math.max(timestamp(a.created_at), timestamp(a.last_read_at), timestamp(localTimes[a.id])) || b.created_at - a.created_at || a.id.localeCompare(b.id));
	}
	function pendingReads() {
		return read("reading-pending", {});
	}
	let flushing = null;
	function flushReadingActivity() {
		if (flushing) return flushing;
		flushing = (async () => {
			for (;;) {
				const entry = Object.entries(pendingReads()).find(([id$2, at$1]) => /^[a-f0-9]{64}$/.test(id$2) && timestamp(at$1));
				if (!entry) break;
				const [id$1, at] = entry;
				const controller = new AbortController(), timer = setTimeout(() => controller.abort(), 15e3);
				try {
					if (!timestamp((await (await api(`/books/${id$1}/read`, {
						method: "PUT",
						headers: { "content-type": "application/json" },
						body: JSON.stringify({ at }),
						signal: controller.signal,
						keepalive: true
					})).json()).last_read_at)) break;
					const pending = pendingReads();
					if (pending[id$1] === at) {
						delete pending[id$1];
						write("reading-pending", pending);
					}
					window.dispatchEvent(new Event("dnr-cloud-reading-updated"));
				} catch {
					break;
				} finally {
					clearTimeout(timer);
				}
			}
		})().finally(() => {
			flushing = null;
		});
		return flushing;
	}
	function markCloudBookRead(id$1, at = Date.now()) {
		if (!/^[a-f0-9]{64}$/.test(id$1) || !timestamp(at)) return;
		try {
			const times = readingTimes(), pending = pendingReads();
			if (timestamp(times[id$1]) >= at) {
				flushReadingActivity();
				return;
			}
			times[id$1] = at;
			pending[id$1] = Math.max(timestamp(pending[id$1]), at);
			write("reading-times", times);
			write("reading-pending", pending);
			window.dispatchEvent(new Event("dnr-cloud-reading-updated"));
			flushReadingActivity();
		} catch {}
	}

//#endregion
//#region src/client/cloud/CloudLibrary.tsx
	function CloudLibrary({ onOpened, onBack }) {
		const { recents, loadOnlineBook } = useReader();
		const [books, setBooks] = (0, import_react.useState)(() => read("catalog", []));
		const [message, setMessage] = (0, import_react.useState)("");
		const [openingId, setOpeningId] = (0, import_react.useState)(null);
		const [refreshing, setRefreshing] = (0, import_react.useState)(false);
		const { running: uploading } = useUploads();
		const input = (0, import_react.useRef)(null);
		const refresh = async () => {
			setRefreshing(true);
			try {
				const rows = await (await api("/books")).json();
				write("catalog", rows);
				setBooks(rows);
				setMessage("");
			} catch (e) {
				setMessage(`${e.message}；已下载的书籍仍可打开。`);
			} finally {
				setRefreshing(false);
			}
		};
		(0, import_react.useEffect)(() => {
			const update = () => {
				setBooks(read("catalog", []));
				refresh();
			};
			const reorder = () => setBooks((current) => [...current]);
			const wake = () => {
				if (document.visibilityState === "visible") refresh();
			};
			refresh();
			window.addEventListener("dnr-cloud-catalog-updated", update);
			window.addEventListener("dnr-cloud-reading-updated", reorder);
			window.addEventListener("focus", wake);
			document.addEventListener("visibilitychange", wake);
			return () => {
				window.removeEventListener("dnr-cloud-catalog-updated", update);
				window.removeEventListener("dnr-cloud-reading-updated", reorder);
				window.removeEventListener("focus", wake);
				document.removeEventListener("visibilitychange", wake);
			};
		}, []);
		const openBook = async (entry) => {
			setOpeningId(entry.id);
			setMessage("");
			try {
				await open(entry);
			} catch (error) {
				setMessage(error instanceof Error ? error.message : "打开书籍失败，请重试。");
			} finally {
				setOpeningId(null);
			}
		};
		const open = async (entry) => {
			const id$1 = `cloud-${entry.id}`;
			let file = await original(id$1);
			if (!file) {
				const response = await api(`/books/${entry.id}/file`);
				file = new File([await response.blob()], entry.filename);
				await original(id$1, file);
			}
			const result = await loadBookFromFile(file);
			bind(id$1, entry.id);
			await loadOnlineBook({
				...result.book,
				id: id$1
			});
			onOpened();
		};
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "dnr-cloud-library",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onBack,
					children: "← 返回"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PRIVATE LIBRARY" })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "故事，随身而行。" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "上传一次，在电脑和手机接着读。已打开的书籍会保留离线副本。" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dnr-cloud-actions",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						disabled: uploading,
						onClick: () => input.current?.click(),
						children: uploading ? "上传进行中…" : "＋ 上传书籍"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						disabled: refreshing,
						onClick: () => void refresh(),
						children: refreshing ? "正在刷新…" : "刷新书库"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UploadStatus, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					ref: input,
					type: "file",
					multiple: true,
					hidden: true,
					accept: ".txt,.md,.markdown,.epub",
					onChange: (event) => {
						const files = Array.from(event.target.files ?? []);
						event.target.value = "";
						setMessage("");
						uploads.enqueue(files.map((file) => ({ file })));
					}
				}),
				!cloudHosted && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: SITE_URL,
						target: "_blank",
						rel: "noreferrer",
						children: "在浏览器打开手机阅读网址 ↗"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
						className: "dnr-cloud-url",
						children: SITE_URL
					})
				] }),
				message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					role: "status",
					className: "dnr-cloud-message",
					children: message
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: ["云端书库 ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [books.length, " 本 · 最近上传或阅读优先"] })] }),
				!books.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "dnr-cloud-empty",
					children: "还没有上传书籍。选择文件，开始你的跨设备阅读。"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "dnr-cloud-books",
					children: sortCloudBooks(books).map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						className: "dnr-cloud-cover",
						children: entry.name.slice(0, 4)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: entry.name }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							(entry.size / 1024 / 1024).toFixed(1),
							" MB · ",
							entry.filename.split(".").pop()?.toUpperCase()
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							disabled: openingId !== null,
							onClick: () => void openBook(entry),
							children: openingId === entry.id ? "正在打开…" : "打开阅读"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `/api/cloud/books/${entry.id}/file`,
							download: entry.filename,
							children: "下载原文件"
						})
					] })] }, entry.id))
				}),
				!cloudHosted && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "本地书籍" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "首次同步旧书若缺少原文件，请用上方“上传书籍”重新选择。不会自动上传整个书库。" }),
					recents.filter((b) => b.format !== "online").map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "dnr-cloud-local",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: b.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							disabled: uploading,
							onClick: () => {
								(async () => {
									try {
										if (!await getBook(b.id)) throw new Error("未找到本地书籍，请重新选择原文件。");
										const file = await original(b.id);
										if (!file) throw new Error("这本旧书未保留原文件，请点击“上传书籍”重新选择它。");
										setMessage("");
										uploads.enqueue([{
											file,
											localId: b.id
										}]);
									} catch (error) {
										setMessage(error instanceof Error ? error.message : "无法读取本地文件。");
									}
								})();
							},
							children: bindings()[b.id] ? "已同步 · 检查" : "同步到云端"
						})]
					}, b.id))
				] })
			]
		});
	}

//#endregion
//#region src/client/components/Icon.tsx
	const paths = {
		cloud: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7 18a5 5 0 0 1-1-9.9A6 6 0 0 1 17.6 7a5.5 5.5 0 0 1 .9 11H7Z" }),
		library: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 4v16M8 4v16M12 4v16M16 5l4 14" }) }),
		sync: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 7v5h-5M4 17v-5h5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6.1 7a7 7 0 0 1 11.6-1.4L20 8M4 16l2.3 2.4A7 7 0 0 0 17.9 17" })] }),
		pip: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "3",
			y: "4",
			width: "18",
			height: "16",
			rx: "2"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "12",
			y: "12",
			width: "7",
			height: "6",
			rx: "1"
		})] }),
		fullscreen: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 3H3v5M16 3h5v5M21 16v5h-5M8 21H3v-5" }),
		book: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 5.5A2.5 2.5 0 0 1 6.5 3H11v15H6.5A2.5 2.5 0 0 0 4 20.5z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 5.5A2.5 2.5 0 0 0 17.5 3H13v15h4.5a2.5 2.5 0 0 1 2.5 2.5z" })] }),
		"chevron-left": /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m15 18-6-6 6-6" }),
		"chevron-right": /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m9 18 6-6-6-6" }),
		close: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m18 6-12 12" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m6 6 12 12" })] }),
		file: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 2v6h6" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 13h8M8 17h6" })
		] }),
		search: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "11",
			cy: "11",
			r: "7"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m20 20-4-4" })] }),
		settings: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "3"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1V21h-4v-.1A1.7 1.7 0 0 0 8.6 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1.1-.4H3v-4h.1A1.7 1.7 0 0 0 4.6 8.6a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1.1V3h4v.1A1.7 1.7 0 0 0 15.4 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.4 9c.13.37.34.72.6 1 .3.3.68.46 1.1.48h.1v4h-.1A1.7 1.7 0 0 0 19.4 15z" })] }),
		toc: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 6h11M9 12h11M9 18h11" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "4",
				cy: "6",
				r: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "4",
				cy: "12",
				r: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "4",
				cy: "18",
				r: "1"
			})
		] }),
		trash: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 6h18M8 6V4h8v2M19 6l-1 15H6L5 6M10 11v6M14 11v6" }) }),
		panel: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "3",
			y: "3",
			width: "18",
			height: "18",
			rx: "2"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15 3v18" })] }),
		clock: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "9"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 7v5l3 2" })] }),
		menu: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 7h16M4 12h16M4 17h16" }) }),
		globe: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "9"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" })] })
	};
	function Icon({ name,...props }) {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			width: "18",
			height: "18",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.8",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			"aria-hidden": "true",
			...props,
			children: paths[name]
		});
	}

//#endregion
//#region src/client/cloud/CloudSync.tsx
	const initialStatus = {
		phase: "idle",
		pending: false,
		lastSyncedAt: 0
	};
	function CloudSync() {
		const { book, progress, bookmarks } = useReader();
		const [status, setStatus] = (0, import_react.useState)(initialStatus);
		const [conflict, setConflict] = (0, import_react.useState)(null);
		const [open, setOpen] = (0, import_react.useState)(false);
		const [slow, setSlow] = (0, import_react.useState)(false);
		const buttonRef = (0, import_react.useRef)(null);
		const detailsRef = (0, import_react.useRef)(null);
		const controls = (0, import_react.useRef)(null);
		const latest = (0, import_react.useRef)(null);
		const currentCloudId = book ? bindings()[book.id] : void 0;
		latest.current = progress ? {
			position: progress,
			bookmarks
		} : null;
		(0, import_react.useEffect)(() => {
			setOpen(false);
			setConflict(null);
			setSlow(false);
			if (!book || !currentCloudId) {
				controls.current = null;
				setStatus(initialStatus);
				return;
			}
			const localId = book.id;
			const engine = new SyncSession(currentCloudId);
			const initialSignature = latest.current ? signature(latest.current) : "";
			let initialized = false, disposed = false;
			let pendingSince = engine.state.pending ? Date.now() : null;
			let debounce;
			let request$2 = null;
			const publish = (phase) => {
				if (disposed) return;
				setConflict(engine.state.conflict);
				setStatus({
					phase: engine.state.conflict ? "conflict" : phase,
					pending: Boolean(engine.state.pending),
					lastSyncedAt: engine.state.lastSyncedAt ?? 0
				});
			};
			const apply = (snapshot) => {
				if (!snapshot?.payload) return;
				latest.current = snapshot.payload;
				window.dispatchEvent(new CustomEvent("dnr-cloud-position", { detail: {
					...snapshot.payload,
					localId
				} }));
			};
			const schedule = () => {
				clearTimeout(debounce);
				if (!engine.state.pending || engine.state.conflict || disposed) return;
				pendingSince ??= Date.now();
				debounce = setTimeout(() => {
					run();
				}, Math.min(1e3, Math.max(0, 5e3 - (Date.now() - pendingSince))));
			};
			const run = async (keepalive = false) => {
				if (disposed || engine.busy || engine.state.conflict) return;
				clearTimeout(debounce);
				pendingSince = engine.state.pending ? Date.now() : null;
				publish("syncing");
				const abort = new AbortController();
				request$2 = abort;
				const timeout = setTimeout(() => abort.abort(), 15e3);
				let failed = false;
				try {
					const snapshot = await engine.sync(abort.signal, keepalive);
					if (disposed) return;
					if (snapshot?.payload && (!latest.current || signature(snapshot.payload) !== signature(latest.current))) apply(snapshot);
					if (!initialized && snapshot && !snapshot.payload && !engine.state.pending && latest.current) engine.queue(latest.current);
					publish(engine.state.pending ? "pending" : "idle");
				} catch {
					failed = true;
					if (!disposed) publish("error");
				} finally {
					clearTimeout(timeout);
					if (request$2 === abort) request$2 = null;
					initialized = true;
					if (!engine.state.pending) pendingSince = null;
					if (!disposed && !failed && engine.state.pending) schedule();
				}
			};
			const queue = (payload) => {
				if (!initialized && !engine.state.pending && signature(payload) === initialSignature) return;
				const operation = engine.state.operation;
				engine.queue(payload);
				if (!engine.state.pending || operation === engine.state.operation) return;
				publish(engine.busy ? "syncing" : "pending");
				schedule();
			};
			const resolve = (choice) => {
				const snapshot = engine.resolve(choice);
				if (choice === "remote") apply(snapshot);
				publish(engine.state.pending ? "pending" : "idle");
				if (choice === "local") run();
			};
			controls.current = {
				queue,
				run,
				resolve
			};
			publish(engine.state.pending ? "pending" : "idle");
			run();
			const poll = setInterval(() => {
				if (document.visibilityState === "visible") run();
			}, 5e3);
			const wake = () => {
				if (document.visibilityState === "visible") run();
			};
			const flush = () => {
				if (engine.state.pending) run(true);
			};
			const visibility = () => {
				if (document.visibilityState === "hidden") flush();
				else wake();
			};
			window.addEventListener("online", wake);
			window.addEventListener("focus", wake);
			window.addEventListener("pagehide", flush);
			document.addEventListener("visibilitychange", visibility);
			return () => {
				disposed = true;
				controls.current = null;
				clearInterval(poll);
				clearTimeout(debounce);
				request$2?.abort();
				window.removeEventListener("online", wake);
				window.removeEventListener("focus", wake);
				window.removeEventListener("pagehide", flush);
				document.removeEventListener("visibilitychange", visibility);
			};
		}, [book?.id, currentCloudId]);
		(0, import_react.useEffect)(() => {
			if (progress) controls.current?.queue({
				position: progress,
				bookmarks
			});
		}, [progress, bookmarks]);
		const working = status.phase === "pending" || status.phase === "syncing";
		(0, import_react.useEffect)(() => {
			if (!working) {
				setSlow(false);
				return;
			}
			const timer = setTimeout(() => setSlow(true), 2e3);
			return () => clearTimeout(timer);
		}, [working]);
		(0, import_react.useEffect)(() => {
			if (!open) return;
			const outside = (event) => {
				if (!detailsRef.current?.contains(event.target) && !buttonRef.current?.contains(event.target)) setOpen(false);
			};
			const escape$1 = (event) => {
				if (event.key === "Escape") {
					event.stopPropagation();
					setOpen(false);
					buttonRef.current?.focus();
				}
			};
			document.addEventListener("pointerdown", outside);
			window.addEventListener("keydown", escape$1, { capture: true });
			return () => {
				document.removeEventListener("pointerdown", outside);
				window.removeEventListener("keydown", escape$1, { capture: true });
			};
		}, [open]);
		if (!currentCloudId) return null;
		const showDetails = () => {
			setOpen((value) => !value);
		};
		const busy = status.pending || slow && working || !status.lastSyncedAt;
		const visualState = status.phase === "conflict" || status.phase === "error" ? status.phase : busy ? "pending" : "synced";
		const label = status.phase === "conflict" ? "阅读进度有冲突" : status.phase === "error" ? "暂未连接云端" : status.phase === "syncing" && slow ? status.pending ? "正在同步进度…" : "正在检查云端进度…" : status.pending ? "进度已存本机，待同步" : status.lastSyncedAt ? "进度已同步" : "正在检查云端进度";
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "dnr-sync-control",
				"data-sync-state": visualState,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					ref: buttonRef,
					type: "button",
					className: `dnr-sync-button ${slow && working ? "is-syncing" : ""}`,
					"aria-label": "同步详情",
					title: label,
					"aria-expanded": open,
					"aria-haspopup": "dialog",
					onClick: showDetails,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						className: "dnr-sync-cloud",
						viewBox: "0 0 24 24",
						width: "18",
						height: "18",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "1.6",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						"aria-hidden": "true",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7 19a5 5 0 0 1-1-9.9A6 6 0 0 1 17.6 8a5.5 5.5 0 0 1 .9 11H7Z" }), visualState === "synced" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							className: "dnr-sync-check",
							d: "m8.5 13 2.3 2.3 4.7-4.7",
							strokeWidth: "2"
						}) : visualState === "pending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
							className: "dnr-sync-arrows",
							strokeWidth: "1.3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8.8 12a3.5 3.5 0 0 1 6-1.1L16 12m0-2.5V12h-2.5M15.2 14a3.5 3.5 0 0 1-6 1.1L8 14m0 2.5V14h2.5" })
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							className: "dnr-sync-alert",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 10.5v3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "12",
								cy: "16.2",
								r: ".7",
								fill: "currentColor",
								stroke: "none"
							})]
						})]
					}), (status.phase === "error" || status.phase === "conflict") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "dnr-sync-dot" })]
				})
			}),
			conflict && !open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "dnr-sync-conflict",
				onClick: showDetails,
				children: "阅读进度有冲突 · 选择位置"
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: detailsRef,
				className: "dnr-sync-details",
				role: "dialog",
				"aria-label": "同步详情",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "dnr-sync-heading",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "阅读进度" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "关闭同步详情",
							onClick: () => setOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "close" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						role: "status",
						children: label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: ["最近同步：", status.lastSyncedAt ? new Date(status.lastSyncedAt).toLocaleString("zh-CN", {
						month: "numeric",
						day: "numeric",
						hour: "2-digit",
						minute: "2-digit"
					}) : "尚未完成"] }),
					status.phase === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "dnr-sync-hint",
						children: "离线或连接失败。进度已存本机，联网后自动同步。"
					}),
					conflict ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "dnr-sync-hint",
						children: [
							"本机：第 ",
							(progress?.chapterIndex ?? 0) + 1,
							" 章",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"云端：第 ",
							(conflict.payload?.position.chapterIndex ?? 0) + 1,
							" 章",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"请选择继续的位置。"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "dnr-sync-actions",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => controls.current?.resolve("remote"),
							children: "采用云端"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => controls.current?.resolve("local"),
							children: "保留本机"
						})]
					})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "dnr-sync-retry",
						disabled: status.phase === "syncing",
						onClick: () => void controls.current?.run(),
						children: status.phase === "syncing" ? "正在同步…" : status.phase === "error" ? "重试同步" : "立即同步"
					})
				]
			})
		] });
	}

//#endregion
//#region src/client/cloud/CloudReadingActivity.tsx
	function CloudReadingActivity({ active: active$1 }) {
		const { book, panel } = useReader();
		(0, import_react.useEffect)(() => {
			const flush = () => {
				flushReadingActivity();
			};
			flush();
			window.addEventListener("online", flush);
			window.addEventListener("focus", flush);
			return () => {
				window.removeEventListener("online", flush);
				window.removeEventListener("focus", flush);
			};
		}, []);
		(0, import_react.useEffect)(() => {
			if (!active$1 || !book || !panel.expanded) return;
			let lastRecorded = 0;
			const record = (force = false) => {
				if (document.visibilityState !== "visible") return;
				const id$1 = bindings()[book.id], now = Date.now();
				if (id$1 && (force || now - lastRecorded >= 3e4)) {
					lastRecorded = now;
					markCloudBookRead(id$1, now);
				}
			};
			record(true);
			const wake = () => record();
			const timer = window.setInterval(wake, 6e4);
			window.addEventListener("focus", wake);
			window.addEventListener("dnr-cloud-catalog-updated", wake);
			document.addEventListener("visibilitychange", wake);
			return () => {
				clearInterval(timer);
				window.removeEventListener("focus", wake);
				window.removeEventListener("dnr-cloud-catalog-updated", wake);
				document.removeEventListener("visibilitychange", wake);
			};
		}, [
			active$1,
			book?.id,
			panel.expanded
		]);
		return null;
	}

//#endregion
//#region src/client/host.ts
/** Request extra space only when the current host exposes the optional API. */
	async function requestDisplayMode(mode) {
		if (window.openai?.requestDisplayMode === void 0) {
			if (mode === "fullscreen" && document.documentElement.requestFullscreen) {
				if (document.fullscreenElement) await document.exitFullscreen();
				else await document.documentElement.requestFullscreen();
				return true;
			}
			return false;
		}
		await window.openai.requestDisplayMode({ mode });
		return true;
	}
	function notifyReaderHeight() {
		window.openai?.notifyIntrinsicHeight?.(Math.max(560, document.documentElement.scrollHeight));
	}

//#endregion
//#region src/client/useHostTheme.ts
/** MCP hosts expose their theme; browser panels expose their preferred color scheme. */
	function useHostTheme() {
		const readTheme = () => window.openai?.theme ?? (window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light");
		const [theme, setTheme] = (0, import_react.useState)(readTheme);
		(0, import_react.useEffect)(() => {
			const media = window.matchMedia?.("(prefers-color-scheme: dark)");
			const onMediaChange = () => setTheme(readTheme());
			const onHostChange = (event) => {
				const hostTheme = event.detail?.globals?.theme;
				setTheme(hostTheme ?? readTheme());
			};
			media?.addEventListener("change", onMediaChange);
			window.addEventListener("openai:set_globals", onHostChange);
			onMediaChange();
			return () => {
				media?.removeEventListener("change", onMediaChange);
				window.removeEventListener("openai:set_globals", onHostChange);
			};
		}, []);
		return theme;
	}

//#endregion
//#region src/client/components/FileLoader.tsx
	function formatBytes(bytes) {
		if (bytes < 1024) return `${bytes} B`;
		if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
		return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
	}
	function recentFormat(recent) {
		if (recent.format === "online") return "在线";
		return recent.format === "epub" ? "EPUB" : encodingLabel(recent.encoding);
	}
	function recentProgress(value) {
		if (typeof value !== "number" || !Number.isFinite(value)) return null;
		return Math.max(0, Math.min(100, Math.round(value)));
	}
	function FileLoader({ onBrowseCloud, compact = false, onBrowseOnline, onBrowseFanqie, onOpened }) {
		const inputRef = (0, import_react.useRef)(null);
		const { loadFile, loading, recents, openRecent, removeRecent, error, clearError } = useReader();
		const choose = () => {
			clearError();
			inputRef.current?.click();
		};
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: `dnr-file-loader ${compact ? "dnr-file-loader--compact" : ""}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					ref: inputRef,
					className: "dnr-visually-hidden",
					type: "file",
					accept: ".txt,.md,.markdown,.epub,text/plain,text/markdown,application/epub+zip",
					onChange: (event) => {
						const file = event.currentTarget.files?.[0];
						if (file !== void 0) loadFile(file).then((opened) => {
							if (opened) onOpened();
						});
						event.currentTarget.value = "";
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dnr-file-hero",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "dnr-file-hero-heading",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "dnr-file-hero-icon",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									name: "book",
									width: "24",
									height: "24"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "dnr-empty-copy",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: compact ? "换一本书" : "把故事放在手边" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: compact ? "从本地文件或在线书库开始新的阅读。" : "仅在本机解析和保存，随时续读。" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "dnr-file-actions",
							children: [
								onBrowseCloud && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "dnr-file-action",
									type: "button",
									onClick: onBrowseCloud,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "globe" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "云端书库" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "dnr-file-action dnr-file-action--primary",
									type: "button",
									onClick: choose,
									disabled: loading,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "file" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: loading ? "正在解析…" : "打开本地文件" })]
								}),
								onBrowseOnline !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "dnr-file-action",
									type: "button",
									onClick: onBrowseOnline,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "globe" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "在线搜书" })]
								}),
								onBrowseFanqie && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "dnr-file-action",
									type: "button",
									onClick: onBrowseFanqie,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "library" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "番茄书架" })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "dnr-file-hint",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "TXT · Markdown · EPUB" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "自动识别编码 · 最大 50MB" })]
						})
					]
				}),
				error !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "dnr-alert",
					role: "alert",
					children: error
				}),
				recents.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dnr-recents",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "dnr-recents-heading",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "clock" }), "最近打开"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [recents.length, " 本"] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: recents.map((recent) => {
						const progressPercent = recentProgress(recent.progressPercent);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "dnr-recent-main",
							type: "button",
							onClick: () => {
								openRecent(recent.id).then((opened) => {
									if (opened) onOpened();
								});
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "dnr-recent-cover",
								"aria-hidden": "true",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: recent.onlineReading ? "globe" : "book" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "dnr-recent-details",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "dnr-recent-name",
										title: recent.name,
										children: recent.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "dnr-recent-meta",
										children: recent.onlineReading ? "在线按章阅读" : `${formatBytes(recent.size)} · ${recentFormat(recent)}`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "dnr-recent-progress-row",
										children: [progressPercent === null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "dnr-recent-progress-track",
											"aria-hidden": "true",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "dnr-recent-progress-track",
											role: "progressbar",
											"aria-label": `${recent.name} 阅读进度`,
											"aria-valuemin": 0,
											"aria-valuemax": 100,
											"aria-valuenow": progressPercent,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: { width: `${progressPercent}%` } })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "dnr-recent-progress-label",
											children: progressPercent === null ? "进度待更新" : `已读 ${progressPercent}%`
										})]
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "dnr-icon-button dnr-subtle",
							type: "button",
							"aria-label": `移除 ${recent.name}`,
							onClick: () => void removeRecent(recent.id),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								name: "trash",
								width: "15",
								height: "15"
							})
						})] }, recent.id);
					}) })]
				})
			]
		});
	}

//#endregion
//#region src/client/components/readerText.tsx
	function highlighted(text, rawQuery) {
		const query = rawQuery.trim();
		if (query === "") return text;
		const lower = text.toLocaleLowerCase();
		const needle = query.toLocaleLowerCase();
		const nodes = [];
		let cursor = 0;
		let key = 0;
		while (cursor < text.length) {
			const index = lower.indexOf(needle, cursor);
			if (index < 0) break;
			if (index > cursor) nodes.push(text.slice(cursor, index));
			nodes.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mark", { children: text.slice(index, index + needle.length) }, key++));
			cursor = index + needle.length;
		}
		if (cursor < text.length) nodes.push(text.slice(cursor));
		return nodes.map((node, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: node }, index));
	}
	function selectedText(container) {
		const selection = container.ownerDocument.getSelection();
		return Boolean(selection && !selection.isCollapsed && (container.contains(selection.anchorNode) || container.contains(selection.focusNode)));
	}
	function visibleTextOffset(container, paragraph) {
		const bounds = container.getBoundingClientRect();
		let low = 0, high = Math.max(0, (paragraph.textContent?.length ?? 0) - 1);
		while (low < high) {
			const middle = Math.floor((low + high) / 2);
			const rect = textRect(paragraph, middle);
			if (rect && rect.right <= bounds.left + 24) low = middle + 1;
			else high = middle;
		}
		return low;
	}
	function textRect(paragraph, offset) {
		const walker = paragraph.ownerDocument.createTreeWalker(paragraph, NodeFilter.SHOW_TEXT);
		let node = walker.nextNode();
		while (node) {
			const length = node.textContent?.length ?? 0;
			if (offset < length) {
				const range = paragraph.ownerDocument.createRange();
				range.setStart(node, offset);
				range.setEnd(node, offset + 1);
				return range.getClientRects()[0];
			}
			offset -= length;
			node = walker.nextNode();
		}
		return paragraph.getClientRects()[0];
	}

//#endregion
//#region src/client/components/ContinuousPagedReader.tsx
	const ContinuousPagedReader = (0, import_react.forwardRef)(function ContinuousPagedReader$1({ searchQuery, glyphFont }, ref) {
		const { book, progress, settings, panel, pendingParagraph, clearPendingParagraph, markParagraphVisible, updatePanel, goToChapter } = useReader();
		const scrollerRef = (0, import_react.useRef)(null);
		const [center, setCenter] = (0, import_react.useState)(progress?.chapterIndex ?? 0);
		const [width, setWidth] = (0, import_react.useState)(1);
		const [counts, setCounts] = (0, import_react.useState)({});
		const [revision, setRevision] = (0, import_react.useState)(0);
		const [view, setView] = (0, import_react.useState)({
			chapter: center,
			page: 0
		});
		const target = (0, import_react.useRef)(null);
		const anchor = (0, import_react.useRef)(null);
		const preserveAnchor = (0, import_react.useRef)(false);
		const seek = (0, import_react.useRef)(null);
		const layoutKey = (0, import_react.useRef)("");
		const bookKey = (0, import_react.useRef)("");
		const consumedPending = (0, import_react.useRef)(null);
		const timer = (0, import_react.useRef)(null);
		const touch = (0, import_react.useRef)(null);
		const pointer = (0, import_react.useRef)(null);
		const suppressClick = (0, import_react.useRef)(0);
		const grouped = (0, import_react.useMemo)(() => {
			const result = /* @__PURE__ */ new Map();
			for (const p$4 of book?.paragraphs ?? []) {
				if (p$4.isHeading) continue;
				const list = result.get(p$4.chapterId) ?? [];
				list.push(p$4);
				result.set(p$4.chapterId, list);
			}
			return result;
		}, [book]);
		const chapters = book?.chapters.slice(Math.max(0, center - 1), center + 3) ?? [];
		let total = 0;
		const panes = chapters.map((chapter) => {
			const count = counts[chapter.id] ?? 1, start = total;
			total += count;
			return {
				chapter,
				count,
				start
			};
		});
		const locate = (page) => {
			const bounded$1 = Math.max(0, Math.min(total - 1, page));
			const pane = panes.find((p$4) => bounded$1 < p$4.start + p$4.count) ?? panes[0];
			return {
				chapter: pane?.chapter.index ?? center,
				page: bounded$1 - (pane?.start ?? 0)
			};
		};
		const recordPosition = (position) => {
			const el$1 = scrollerRef.current;
			if (!el$1 || !book) return;
			const pane = el$1.querySelector(`[data-chapter="${position.chapter}"]`);
			const bounds = el$1.getBoundingClientRect();
			const visible = Array.from(pane?.querySelectorAll("[data-pindex]") ?? []).find((p$4) => Array.from(p$4.getClientRects()).some((r$2) => r$2.right > bounds.left + 24 && r$2.left < bounds.right - 24));
			const index = visible ? Number(visible.dataset.pindex) : book.chapters[position.chapter]?.paragraphStart;
			if (index === void 0) return;
			if (!preserveAnchor.current) anchor.current = {
				paragraph: index,
				offset: visible ? visibleTextOffset(el$1, visible) : 0
			};
			markParagraphVisible(index, position.page * el$1.clientWidth);
		};
		const settle = () => {
			if (timer.current !== null) clearTimeout(timer.current);
			timer.current = null;
			const el$1 = scrollerRef.current;
			if (!el$1 || touch.current || !layoutKey.current) return;
			const page = Math.max(0, Math.min(total - 1, target.current ?? Math.round(el$1.scrollLeft / Math.max(1, el$1.clientWidth))));
			target.current = null;
			if (Math.abs(el$1.scrollLeft - page * el$1.clientWidth) > .5) el$1.scrollTo({
				left: page * el$1.clientWidth,
				top: 0,
				behavior: "instant"
			});
			const position = locate(page);
			setView(position);
			recordPosition(position);
			if (position.chapter !== center) {
				seek.current = position;
				setCenter(position.chapter);
			}
		};
		const latestSettle = (0, import_react.useRef)(settle);
		latestSettle.current = settle;
		const scheduleSettle = (0, import_react.useCallback)(() => {
			if (timer.current !== null) clearTimeout(timer.current);
			timer.current = setTimeout(() => latestSettle.current(), 180);
		}, []);
		const move = (page) => {
			const el$1 = scrollerRef.current;
			if (!el$1) return;
			const next = Math.max(0, Math.min(total - 1, page));
			preserveAnchor.current = false;
			target.current = next;
			el$1.scrollTo({
				left: next * el$1.clientWidth,
				top: 0,
				behavior: window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth"
			});
			setView(locate(next));
			scheduleSettle();
		};
		const turnPage = (direction) => {
			const el$1 = scrollerRef.current;
			if (el$1) move((target.current ?? Math.round(el$1.scrollLeft / Math.max(1, el$1.clientWidth))) + direction);
		};
		(0, import_react.useImperativeHandle)(ref, () => ({
			turnPage,
			goToChapter
		}), [panes, goToChapter]);
		(0, import_react.useEffect)(() => {
			const el$1 = scrollerRef.current;
			if (!el$1) return;
			const end = () => latestSettle.current();
			el$1.addEventListener("scrollend", end);
			let w$1 = el$1.clientWidth, h$1 = el$1.clientHeight;
			const invalidate = () => setRevision((n$2) => n$2 + 1);
			const observer = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(() => {
				if (w$1 === el$1.clientWidth && h$1 === el$1.clientHeight) return;
				w$1 = el$1.clientWidth;
				h$1 = el$1.clientHeight;
				invalidate();
			});
			observer?.observe(el$1);
			window.addEventListener("resize", invalidate);
			document.fonts?.addEventListener("loadingdone", invalidate);
			return () => {
				observer?.disconnect();
				el$1.removeEventListener("scrollend", end);
				window.removeEventListener("resize", invalidate);
				document.fonts?.removeEventListener("loadingdone", invalidate);
				if (timer.current !== null) clearTimeout(timer.current);
			};
		}, []);
		(0, import_react.useLayoutEffect)(() => {
			const el$1 = scrollerRef.current;
			if (!el$1 || !book || !progress || !el$1.clientWidth) return;
			if (bookKey.current !== book.id) {
				bookKey.current = book.id;
				anchor.current = null;
				consumedPending.current = null;
				seek.current = {
					chapter: progress.chapterIndex,
					paragraph: pendingParagraph ?? progress.paragraphIndex
				};
				layoutKey.current = "";
				if (center !== progress.chapterIndex) {
					setCenter(progress.chapterIndex);
					return;
				}
			}
			if (pendingParagraph === null) consumedPending.current = null;
			else if (consumedPending.current !== pendingParagraph) {
				const chapter = book.chapters.find((c) => pendingParagraph >= c.paragraphStart && pendingParagraph <= c.paragraphEnd);
				if (chapter) {
					seek.current = {
						chapter: chapter.index,
						paragraph: pendingParagraph
					};
					consumedPending.current = pendingParagraph;
					anchor.current = null;
					if (center !== chapter.index) {
						setCenter(chapter.index);
						return;
					}
				}
			}
			if (el$1.clientWidth !== width) {
				setWidth(el$1.clientWidth);
				return;
			}
			const measured = {};
			let changed = false;
			for (const { chapter } of panes) {
				const article = el$1.querySelector(`[data-chapter="${chapter.index}"] article`);
				const count = Math.max(1, Math.ceil(((article?.scrollWidth ?? width) - 1) / width));
				measured[chapter.id] = count;
				if (count !== counts[chapter.id]) changed = true;
			}
			if (changed) {
				setCounts(measured);
				return;
			}
			const key = [
				book.id,
				center,
				width,
				el$1.clientHeight,
				revision,
				settings.fontSize,
				settings.fontFamily,
				settings.lineSpacing,
				settings.firstLineIndent,
				panel.toolsVisible,
				glyphFont,
				searchQuery,
				...panes.map((p$4) => p$4.count)
			].join(":");
			if (key === layoutKey.current && !seek.current) return;
			if (timer.current !== null) clearTimeout(timer.current);
			target.current = null;
			const intent = seek.current;
			const chapterIndex = intent?.chapter ?? view.chapter;
			const pane = panes.find((p$4) => p$4.chapter.index === chapterIndex) ?? panes[0];
			if (!pane) return;
			let page = intent && "page" in intent ? intent.page : view.page;
			const saved = intent && "paragraph" in intent ? {
				paragraph: intent.paragraph,
				offset: 0
			} : !intent ? anchor.current : null;
			if (saved) {
				const node = el$1.querySelector(`[data-pindex="${saved.paragraph}"]`);
				if (node) {
					const rect = textRect(node, saved.offset);
					const left = rect ? el$1.scrollLeft + rect.left - el$1.getBoundingClientRect().left : pane.start * width;
					page = Math.floor(Math.max(0, left - pane.start * width) / width);
				} else page = 0;
				anchor.current = saved;
				preserveAnchor.current = true;
			}
			page = Math.max(0, Math.min(pane.count - 1, page));
			const snap = el$1.style.scrollSnapType;
			el$1.style.scrollSnapType = "none";
			el$1.scrollTo({
				left: (pane.start + page) * width,
				top: 0,
				behavior: "instant"
			});
			el$1.style.scrollSnapType = snap;
			layoutKey.current = key;
			seek.current = null;
			setView((previous) => previous.chapter === pane.chapter.index && previous.page === page ? previous : {
				chapter: pane.chapter.index,
				page
			});
			if (pendingParagraph !== null) clearPendingParagraph();
		});
		const onTouchStart = (event) => {
			const point = event.touches[0];
			if (event.touches.length !== 1 || !point) {
				if (touch.current) touch.current.cancelled = true;
				return;
			}
			const el$1 = event.currentTarget;
			const page = target.current ?? Math.round(el$1.scrollLeft / Math.max(1, el$1.clientWidth));
			if (target.current !== null) el$1.scrollTo({
				left: page * el$1.clientWidth,
				behavior: "instant"
			});
			target.current = null;
			touch.current = {
				id: point.identifier,
				x: point.clientX,
				y: point.clientY,
				page,
				started: Date.now(),
				cancelled: selectedText(el$1)
			};
		};
		const onTouchEnd = (event) => {
			if (event.touches.length) return;
			const start = touch.current;
			touch.current = null;
			const point = Array.from(event.changedTouches).find((p$4) => p$4.identifier === start?.id);
			if (!start || !point) {
				scheduleSettle();
				return;
			}
			const dx = point.clientX - start.x, dy = point.clientY - start.y;
			if (Math.abs(dx) > 8 || Math.abs(dy) > 8 || Date.now() - start.started >= 450) suppressClick.current = Date.now() + 500;
			if (!start.cancelled && Math.abs(dx) >= 40 && Math.abs(dx) > Math.abs(dy) * 1.3 && !selectedText(event.currentTarget)) move(start.page + (dx < 0 ? 1 : -1));
			else scheduleSettle();
		};
		if (!book || !progress) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {});
		const visibleCount = counts[book.chapters[view.chapter]?.id ?? ""] ?? 1;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "dnr-reader-stage is-paged",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: scrollerRef,
				className: "dnr-reader-scroll dnr-reader-scroll--paged dnr-continuous-scroll",
				onScroll: scheduleSettle,
				onTouchStart,
				onTouchEnd,
				onTouchCancel: () => {
					touch.current = null;
					suppressClick.current = Date.now() + 500;
					scheduleSettle();
				},
				onWheel: () => {
					target.current = null;
					preserveAnchor.current = false;
				},
				onPointerDown: (e) => {
					if (e.pointerType === "mouse" || e.pointerType === "pen") pointer.current = {
						x: e.clientX,
						y: e.clientY,
						started: Date.now()
					};
				},
				onPointerCancel: () => {
					pointer.current = null;
				},
				onPointerUp: (e) => {
					const p$4 = pointer.current;
					pointer.current = null;
					if (p$4 && (Math.abs(e.clientX - p$4.x) > 8 || Math.abs(e.clientY - p$4.y) > 8 || Date.now() - p$4.started >= 450)) suppressClick.current = Date.now() + 500;
				},
				onClick: (e) => {
					const el$1 = e.currentTarget;
					if (Date.now() < suppressClick.current || selectedText(el$1) || e.detail > 1 || e.target.closest("button,input,a,mark")) return;
					const ratio = (e.clientX - el$1.getBoundingClientRect().left) / Math.max(1, el$1.clientWidth);
					if (ratio < .3) turnPage(-1);
					else if (ratio > .7) turnPage(1);
					else if (!settings.keepNavigationVisible) updatePanel({
						toolsVisible: !panel.toolsVisible,
						immersive: panel.toolsVisible
					});
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "dnr-chapter-track",
					style: { width: total * width },
					children: panes.map(({ chapter, count }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						"data-chapter": chapter.index,
						className: "dnr-chapter-pane",
						style: { width: count * width },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "dnr-reader-article",
							"data-font": settings.fontFamily,
							"data-spacing": settings.lineSpacing,
							"data-indent": settings.firstLineIndent || void 0,
							"data-page-mode": "paged",
							style: {
								width,
								"--dnr-page-width": `${width}px`,
								"--dnr-font-size": `${settings.fontSize}px`,
								...glyphFont ? {
									fontFamily: `"${glyphFont}", ${settings.fontFamily === "system" || settings.fontFamily === "heiti" ? "sans-serif" : "serif"}`,
									textAlign: "start",
									textJustify: "auto"
								} : {}
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: chapter.title }) }),
								(grouped.get(chapter.id) ?? []).map((p$4) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									id: p$4.id,
									"data-pindex": p$4.index,
									children: highlighted(p$4.text, searchQuery)
								}, p$4.id)),
								!grouped.get(chapter.id)?.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "dnr-empty-small",
									children: "本章没有可显示的正文。"
								})
							]
						})
					}, chapter.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "dnr-page-snap-rail",
					"aria-hidden": "true",
					style: { width: total * width },
					children: Array.from({ length: total }, (_, i$1) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "dnr-page-snap",
						style: {
							left: i$1 * width,
							width
						}
					}, i$1))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "dnr-page-number",
				"aria-live": "polite",
				children: [
					view.page + 1,
					" / ",
					visibleCount
				]
			})]
		});
	});

//#endregion
//#region src/client/useChapterTransition.ts
/** Hold the outgoing viewport until the incoming chapter has been paginated. */
	function useChapterTransition(scroller, onSettled) {
		const active$1 = (0, import_react.useRef)(null);
		const settled = (0, import_react.useRef)(onSettled);
		settled.current = onSettled;
		const cancel = (0, import_react.useCallback)(() => {
			const turn = active$1.current;
			if (!turn) return;
			clearTimeout(turn.timer);
			if (turn.onEnd) scroller.current?.removeEventListener("animationend", turn.onEnd);
			turn.snapshot?.remove();
			turn.stage.classList.remove("is-chapter-changing", "is-chapter-animating");
			turn.stage.style.removeProperty("--dnr-chapter-direction");
			active$1.current = null;
		}, [scroller]);
		const begin = (0, import_react.useCallback)((bookId, chapterIndex, direction) => {
			const container = scroller.current, stage = container?.parentElement;
			if (!container || !stage || active$1.current) return false;
			let snapshot = null;
			if (!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
				snapshot = container.cloneNode(true);
				snapshot.classList.add("dnr-chapter-snapshot");
				snapshot.setAttribute("aria-hidden", "true");
				snapshot.setAttribute("inert", "");
				for (const element of snapshot.querySelectorAll("[id], [data-pindex]")) {
					element.removeAttribute("id");
					element.removeAttribute("data-pindex");
				}
				stage.append(snapshot);
				snapshot.scrollLeft = container.scrollLeft;
				snapshot.scrollTop = container.scrollTop;
			}
			stage.style.setProperty("--dnr-chapter-direction", String(direction));
			stage.classList.add("is-chapter-changing");
			active$1.current = {
				bookId,
				chapterIndex,
				snapshot,
				stage,
				running: false
			};
			return true;
		}, [scroller]);
		const reveal = (0, import_react.useCallback)((bookId, chapterIndex) => {
			const turn = active$1.current, container = scroller.current;
			if (!turn || !container || turn.running || turn.bookId !== bookId || turn.chapterIndex !== chapterIndex) return;
			const done = () => {
				if (active$1.current === turn) {
					cancel();
					settled.current();
				}
			};
			if (!turn.snapshot || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
				done();
				return;
			}
			turn.running = true;
			turn.onEnd = (event) => {
				if (event.target === container && event.animationName === "dnr-chapter-in") done();
			};
			container.addEventListener("animationend", turn.onEnd);
			turn.stage.classList.add("is-chapter-animating");
			turn.timer = setTimeout(done, 300);
		}, [cancel, scroller]);
		(0, import_react.useEffect)(() => cancel, [cancel]);
		return {
			active: active$1,
			begin,
			reveal,
			cancel
		};
	}

//#endregion
//#region src/client/components/ReaderBody.tsx
	function pageTotal(container) {
		const width = Math.max(1, container.clientWidth);
		const contentWidth = container.querySelector(".dnr-reader-article")?.scrollWidth || container.scrollWidth;
		return Math.max(1, Math.ceil((contentWidth - 1) / width));
	}
	const LegacyReaderBody = (0, import_react.forwardRef)(function ReaderBody$1({ searchQuery, glyphFont }, forwardedRef) {
		const { book, progress, settings, pendingParagraph, clearPendingParagraph, markParagraphVisible, updatePanel, panel, goToChapter, loading, error } = useReader();
		const scrollerRef = (0, import_react.useRef)(null);
		const frameRef = (0, import_react.useRef)(null);
		const measureFrameRef = (0, import_react.useRef)(null);
		const settleTimerRef = (0, import_react.useRef)(null);
		const restoreKeyRef = (0, import_react.useRef)("");
		const renderedChapterRef = (0, import_react.useRef)("");
		const landOnLastPageRef = (0, import_react.useRef)(false);
		const targetPageRef = (0, import_react.useRef)(null);
		const restoringRef = (0, import_react.useRef)(false);
		const preserveAnchorRef = (0, import_react.useRef)(false);
		const touchRef = (0, import_react.useRef)(null);
		const pointerRef = (0, import_react.useRef)(null);
		const suppressClickUntilRef = (0, import_react.useRef)(0);
		const anchorRef = (0, import_react.useRef)(null);
		const [pageWidth, setPageWidth] = (0, import_react.useState)(1);
		const [layoutRevision, setLayoutRevision] = (0, import_react.useState)(0);
		const [pageIndex, setPageIndex] = (0, import_react.useState)(0);
		const [pageCount, setPageCount] = (0, import_react.useState)(1);
		const chapter = book?.chapters[progress?.chapterIndex ?? 0];
		const paged = settings.pageMode === "paged";
		const paragraphs = (0, import_react.useMemo)(() => {
			if (book === null || chapter === void 0) return [];
			return book.paragraphs.filter((paragraph) => paragraph.chapterId === chapter.id && !paragraph.isHeading);
		}, [book, chapter]);
		const updatePosition = (0, import_react.useCallback)(() => {
			frameRef.current = null;
			const container = scrollerRef.current;
			if (container === null || restoringRef.current || paged && preserveAnchorRef.current) return;
			if (paged && Math.abs(container.scrollLeft / Math.max(1, container.clientWidth) - Math.round(container.scrollLeft / Math.max(1, container.clientWidth))) > .005) return;
			const bounds = container.getBoundingClientRect();
			const elements = Array.from(container.querySelectorAll("[data-pindex]"));
			const visible = elements.find((element) => {
				if (!paged) return element.getBoundingClientRect().bottom > bounds.top + 72;
				return Array.from(element.getClientRects()).some((rect) => rect.right > bounds.left + 24 && rect.left < bounds.right - 24);
			}) ?? elements.at(-1);
			if (visible !== void 0) {
				const index = Number(visible.dataset.pindex);
				if (Number.isFinite(index)) {
					if (chapter) anchorRef.current = {
						chapterId: chapter.id,
						paragraphIndex: index,
						offset: paged ? visibleTextOffset(container, visible) : 0
					};
					markParagraphVisible(index, paged ? container.scrollLeft : container.scrollTop);
				}
			}
			if (paged) setPageIndex(Math.max(0, Math.min(pageTotal(container) - 1, Math.round(container.scrollLeft / Math.max(1, container.clientWidth)))));
		}, [
			chapter,
			markParagraphVisible,
			paged
		]);
		const { active: chapterTurnRef, begin: beginChapterTurn, reveal: revealChapter, cancel: cancelChapterTurn } = useChapterTransition(scrollerRef, () => {
			restoringRef.current = false;
			updatePosition();
		});
		const settlePage = (0, import_react.useCallback)(() => {
			if (settleTimerRef.current !== null) clearTimeout(settleTimerRef.current);
			settleTimerRef.current = null;
			const container = scrollerRef.current;
			if (!container || !paged || touchRef.current || measureFrameRef.current !== null || chapterTurnRef.current !== null || restoringRef.current && targetPageRef.current === null) return;
			const width = Math.max(1, container.clientWidth);
			const page = Math.max(0, Math.min(pageTotal(container) - 1, targetPageRef.current ?? Math.round(container.scrollLeft / width)));
			targetPageRef.current = null;
			if (Math.abs(container.scrollLeft - page * width) > .5) container.scrollTo({
				left: page * width,
				top: 0,
				behavior: "instant"
			});
			setPageIndex(page);
			if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
			frameRef.current = requestAnimationFrame(() => {
				restoringRef.current = false;
				updatePosition();
			});
		}, [
			paged,
			updatePosition,
			chapterTurnRef
		]);
		const scheduleSettle = (0, import_react.useCallback)(() => {
			if (settleTimerRef.current !== null) clearTimeout(settleTimerRef.current);
			settleTimerRef.current = setTimeout(settlePage, 180);
		}, [settlePage]);
		const scrollToPage = (0, import_react.useCallback)((page) => {
			const container = scrollerRef.current;
			if (!container) return;
			preserveAnchorRef.current = false;
			const target = Math.max(0, Math.min(pageTotal(container) - 1, page));
			targetPageRef.current = target;
			container.scrollTo({
				left: target * Math.max(1, container.clientWidth),
				top: 0,
				behavior: window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth"
			});
			setPageIndex(target);
			scheduleSettle();
		}, [scheduleSettle]);
		const navigateChapter = (0, import_react.useCallback)((index, lastPage = false) => {
			const container = scrollerRef.current;
			if (!container || !book || !chapter || loading || chapterTurnRef.current) return;
			const target = Math.max(0, Math.min(book.chapters.length - 1, index));
			if (target === chapter.index) return;
			if (paged) {
				const width = Math.max(1, container.clientWidth);
				const page = Math.max(0, Math.min(pageTotal(container) - 1, targetPageRef.current ?? Math.round(container.scrollLeft / width)));
				if (Math.abs(container.scrollLeft - page * width) > .5 || container.scrollTop !== 0) container.scrollTo({
					left: page * width,
					top: 0,
					behavior: "instant"
				});
				beginChapterTurn(book.id, target, target > chapter.index ? 1 : -1);
				landOnLastPageRef.current = lastPage;
			}
			restoringRef.current = true;
			if (frameRef.current !== null) {
				cancelAnimationFrame(frameRef.current);
				frameRef.current = null;
			}
			if (settleTimerRef.current !== null) clearTimeout(settleTimerRef.current);
			targetPageRef.current = null;
			goToChapter(target);
		}, [
			book,
			chapter,
			loading,
			paged,
			beginChapterTurn,
			chapterTurnRef,
			goToChapter
		]);
		const turnPage = (0, import_react.useCallback)((direction) => {
			const container = scrollerRef.current;
			if (container === null || book === null || chapter === void 0 || !paged || loading || chapterTurnRef.current) return;
			const width = Math.max(1, container.clientWidth);
			const total = pageTotal(container);
			const current = Math.max(0, Math.min(total - 1, targetPageRef.current ?? Math.round(container.scrollLeft / width)));
			const next = current + direction;
			if (next >= 0 && next < total) {
				scrollToPage(next);
				return;
			}
			if (direction > 0 && chapter.index < book.chapters.length - 1) navigateChapter(chapter.index + 1);
			else if (direction < 0 && chapter.index > 0) navigateChapter(chapter.index - 1, true);
			else scrollToPage(current);
		}, [
			book,
			chapter,
			navigateChapter,
			paged,
			loading,
			scrollToPage,
			chapterTurnRef
		]);
		(0, import_react.useEffect)(() => {
			if (error !== null) {
				landOnLastPageRef.current = false;
				cancelChapterTurn();
				restoringRef.current = false;
			}
		}, [error, cancelChapterTurn]);
		(0, import_react.useImperativeHandle)(forwardedRef, () => ({
			turnPage,
			goToChapter: navigateChapter
		}), [turnPage, navigateChapter]);
		(0, import_react.useEffect)(() => {
			const container = scrollerRef.current;
			if (!container) return;
			container.addEventListener("scrollend", settlePage);
			return () => container.removeEventListener("scrollend", settlePage);
		}, [
			book !== null,
			paged,
			settlePage
		]);
		(0, import_react.useLayoutEffect)(() => {
			const container = scrollerRef.current;
			if (!container) return;
			let width = container.clientWidth, height = container.clientHeight;
			const invalidate = () => setLayoutRevision((value) => value + 1);
			const observer = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(() => {
				if (width === container.clientWidth && height === container.clientHeight) return;
				width = container.clientWidth;
				height = container.clientHeight;
				invalidate();
			});
			observer?.observe(container);
			window.addEventListener("resize", invalidate);
			document.fonts?.addEventListener("loadingdone", invalidate);
			return () => {
				observer?.disconnect();
				window.removeEventListener("resize", invalidate);
				document.fonts?.removeEventListener("loadingdone", invalidate);
			};
		}, [book !== null]);
		(0, import_react.useLayoutEffect)(() => {
			const container = scrollerRef.current;
			if (container === null || book === null || progress === null || chapter === void 0) return;
			if (book.onlineReading && loading) return;
			if (!container.clientWidth) return;
			const width = Math.max(1, container.clientWidth);
			if (width !== pageWidth) {
				restoringRef.current = true;
				if (frameRef.current !== null) {
					cancelAnimationFrame(frameRef.current);
					frameRef.current = null;
				}
				restoreKeyRef.current = "";
				setPageWidth(width);
				return;
			}
			const contentKey = `${book.id}:${chapter.id}`;
			const turn = chapterTurnRef.current;
			if (turn && (!paged || turn.bookId !== book.id || turn.chapterIndex !== chapter.index) && !loading && renderedChapterRef.current !== contentKey) {
				cancelChapterTurn();
				landOnLastPageRef.current = false;
			}
			if (renderedChapterRef.current !== contentKey) {
				renderedChapterRef.current = contentKey;
				restoringRef.current = true;
				if (frameRef.current !== null) {
					cancelAnimationFrame(frameRef.current);
					frameRef.current = null;
				}
				if (settleTimerRef.current !== null) clearTimeout(settleTimerRef.current);
				const total = paged ? pageTotal(container) : 1;
				const firstPage = paged && landOnLastPageRef.current ? total - 1 : 0;
				if (total !== pageCount) setPageCount(total);
				container.scrollTo({
					left: firstPage * width,
					top: 0,
					behavior: "instant"
				});
				setPageIndex(firstPage);
			}
			if (measureFrameRef.current !== null) cancelAnimationFrame(measureFrameRef.current);
			measureFrameRef.current = requestAnimationFrame(() => {
				measureFrameRef.current = null;
				const total = paged ? pageTotal(container) : 1;
				if (total !== pageCount) {
					restoringRef.current = true;
					restoreKeyRef.current = "";
					setPageCount(total);
					return;
				}
				const restoreKey = [
					book.id,
					chapter.id,
					settings.pageMode,
					pageWidth,
					settings.fontSize,
					settings.fontFamily,
					settings.lineSpacing,
					settings.firstLineIndent,
					panel.toolsVisible,
					container.clientHeight,
					layoutRevision
				].join(":");
				if (!(pendingParagraph !== null || restoreKeyRef.current !== restoreKey || landOnLastPageRef.current)) {
					if (paged) setPageIndex(Math.max(0, Math.min(total - 1, Math.round(container.scrollLeft / width))));
					return;
				}
				targetPageRef.current = null;
				touchRef.current = null;
				if (settleTimerRef.current !== null) clearTimeout(settleTimerRef.current);
				if (paged && landOnLastPageRef.current) {
					preserveAnchorRef.current = false;
					const last = total - 1;
					landOnLastPageRef.current = false;
					targetPageRef.current = last;
					container.scrollTo({
						left: last * width,
						top: 0,
						behavior: "instant"
					});
					setPageIndex(last);
				} else {
					const anchor = pendingParagraph === null && anchorRef.current?.chapterId === chapter.id ? anchorRef.current : null;
					const targetIndex = pendingParagraph ?? anchor?.paragraphIndex ?? progress.paragraphIndex;
					const exact = container.querySelector(`[data-pindex="${targetIndex}"]`);
					const fallback = paragraphs.find((paragraph) => paragraph.index >= targetIndex);
					const target = exact ?? (fallback === void 0 ? null : container.querySelector(`[data-pindex="${fallback.index}"]`));
					if (paged) {
						preserveAnchorRef.current = true;
						anchorRef.current = {
							chapterId: chapter.id,
							paragraphIndex: targetIndex,
							offset: anchor?.offset ?? 0
						};
						const bounds = container.getBoundingClientRect();
						const rect = target === null ? null : textRect(target, anchor?.offset ?? 0) ?? target.getBoundingClientRect();
						const targetLeft = rect === null ? 0 : container.scrollLeft + rect.left - bounds.left;
						const targetPage = Math.max(0, Math.min(total - 1, Math.floor(Math.max(0, targetLeft) / width)));
						targetPageRef.current = targetPage;
						container.scrollTo({
							left: targetPage * width,
							top: 0,
							behavior: "instant"
						});
						setPageIndex(targetPage);
					} else if (target === null) container.scrollTo({
						top: 0,
						left: 0
					});
					else target.scrollIntoView({ block: "start" });
				}
				restoreKeyRef.current = restoreKey;
				if (pendingParagraph !== null) clearPendingParagraph();
				if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
				if (paged) if (chapterTurnRef.current) revealChapter(book.id, chapter.index);
				else {
					restoringRef.current = false;
					updatePosition();
					scheduleSettle();
				}
				else frameRef.current = requestAnimationFrame(() => {
					restoringRef.current = false;
					updatePosition();
				});
			});
			return () => {
				if (measureFrameRef.current !== null) {
					cancelAnimationFrame(measureFrameRef.current);
					measureFrameRef.current = null;
				}
			};
		}, [
			book,
			chapter,
			clearPendingParagraph,
			pageWidth,
			paged,
			panel.toolsVisible,
			loading,
			panel.width,
			paragraphs,
			pendingParagraph,
			progress,
			settings.firstLineIndent,
			settings.fontFamily,
			settings.fontSize,
			settings.lineSpacing,
			settings.pageMode,
			settings.tocPosition,
			layoutRevision,
			pageCount,
			scheduleSettle,
			updatePosition,
			chapterTurnRef,
			revealChapter,
			cancelChapterTurn
		]);
		(0, import_react.useEffect)(() => () => {
			if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
			if (measureFrameRef.current !== null) cancelAnimationFrame(measureFrameRef.current);
			if (settleTimerRef.current !== null) clearTimeout(settleTimerRef.current);
		}, []);
		if (book === null || progress === null || chapter === void 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {});
		const onReaderClick = (event) => {
			const container = scrollerRef.current;
			if (!container || Date.now() < suppressClickUntilRef.current || selectedText(container) || event.detail > 1 || event.target.closest("button,input,a,mark") !== null) return;
			if (paged) {
				const bounds = container.getBoundingClientRect();
				const ratio = (event.clientX - bounds.left) / Math.max(1, bounds.width);
				if (ratio < .3) {
					turnPage(-1);
					return;
				}
				if (ratio > .7) {
					turnPage(1);
					return;
				}
			}
			if (!settings.keepNavigationVisible) updatePanel({
				toolsVisible: !panel.toolsVisible,
				immersive: panel.toolsVisible
			});
		};
		const onTouchStart = (event) => {
			if (!paged) return;
			targetPageRef.current = null;
			const touch = event.touches[0];
			if (event.touches.length !== 1 || !touch) {
				if (touchRef.current) touchRef.current.cancelled = true;
				return;
			}
			const container = event.currentTarget;
			const selecting = selectedText(container);
			if (selecting) suppressClickUntilRef.current = Date.now() + 500;
			touchRef.current = {
				id: touch.identifier,
				x: touch.clientX,
				y: touch.clientY,
				page: Math.round(container.scrollLeft / Math.max(1, container.clientWidth)),
				started: Date.now(),
				cancelled: selecting
			};
		};
		const onTouchEnd = (event) => {
			if (event.touches.length > 0) return;
			const start = touchRef.current;
			touchRef.current = null;
			const touch = Array.from(event.changedTouches).find((touch$1) => touch$1.identifier === start?.id);
			if (!start || !touch) {
				scheduleSettle();
				return;
			}
			const dx = touch.clientX - start.x, dy = touch.clientY - start.y;
			if (Math.abs(dx) > 8) preserveAnchorRef.current = false;
			if (Math.abs(dx) > 8 || Math.abs(dy) > 8 || Date.now() - start.started >= 450) suppressClickUntilRef.current = Date.now() + 500;
			if (!start.cancelled && Math.abs(dx) >= 40 && Math.abs(dx) > Math.abs(dy) * 1.3 && !selectedText(event.currentTarget) && !loading) {
				targetPageRef.current = start.page;
				turnPage(dx < 0 ? 1 : -1);
			} else scheduleSettle();
		};
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `dnr-reader-stage ${paged ? "is-paged" : "is-scroll"}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: scrollerRef,
				className: `dnr-reader-scroll ${paged ? "dnr-reader-scroll--paged" : ""}`,
				"aria-busy": Boolean(book.onlineReading && loading),
				onClick: onReaderClick,
				onTouchStart,
				onTouchEnd,
				onTouchCancel: () => {
					touchRef.current = null;
					suppressClickUntilRef.current = Date.now() + 500;
					scheduleSettle();
				},
				onWheel: () => {
					targetPageRef.current = null;
					preserveAnchorRef.current = false;
				},
				onPointerDown: (event) => {
					if (event.pointerType === "mouse" || event.pointerType === "pen") pointerRef.current = {
						x: event.clientX,
						y: event.clientY,
						started: Date.now()
					};
					if (selectedText(event.currentTarget)) suppressClickUntilRef.current = Date.now() + 500;
				},
				onPointerCancel: () => {
					pointerRef.current = null;
				},
				onPointerUp: (event) => {
					const start = pointerRef.current;
					pointerRef.current = null;
					if (start && (Math.abs(event.clientX - start.x) > 8 || Math.abs(event.clientY - start.y) > 8 || Date.now() - start.started >= 450)) suppressClickUntilRef.current = Date.now() + 500;
				},
				onScroll: () => {
					if (paged) scheduleSettle();
					else if (frameRef.current === null) frameRef.current = requestAnimationFrame(updatePosition);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "dnr-reader-article",
					"data-font": settings.fontFamily,
					"data-spacing": settings.lineSpacing,
					"data-indent": settings.firstLineIndent || void 0,
					"data-page-mode": settings.pageMode,
					style: {
						...glyphFont ? {
							fontFamily: `"${glyphFont}", ${settings.fontFamily === "system" || settings.fontFamily === "heiti" ? "sans-serif" : "serif"}`,
							textAlign: "start",
							textJustify: "auto"
						} : {},
						"--dnr-font-size": `${settings.fontSize}px`,
						"--dnr-page-width": `${pageWidth}px`
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: chapter.title }) }),
						paragraphs.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							id: paragraph.id,
							"data-pindex": paragraph.index,
							children: highlighted(paragraph.text, searchQuery)
						}, paragraph.id)),
						paragraphs.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "dnr-empty-small",
							children: "本章没有可显示的正文。"
						}),
						!paged && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "本章完" }) })
					]
				}), paged && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "dnr-page-snap-rail",
					"aria-hidden": "true",
					style: { width: pageCount * pageWidth },
					children: Array.from({ length: pageCount }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "dnr-page-snap",
						style: {
							left: index * pageWidth,
							width: pageWidth
						}
					}, index))
				})]
			}), paged && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "dnr-page-number",
				"aria-live": "polite",
				children: [
					pageIndex + 1,
					" / ",
					pageCount
				]
			})]
		});
	});
	const ReaderBody = (0, import_react.forwardRef)(function ReaderBody$1(props, ref) {
		const { book, settings } = useReader();
		return settings.pageMode === "paged" && book && !book.onlineReading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContinuousPagedReader, {
			...props,
			ref
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegacyReaderBody, {
			...props,
			ref
		});
	});

//#endregion
//#region src/shared/search.ts
	const MAX_RESULTS = 500;
	function excerptAround(text, index, length) {
		const start = Math.max(0, index - 28);
		const end = Math.min(text.length, index + length + 42);
		return `${start > 0 ? "…" : ""}${text.slice(start, end)}${end < text.length ? "…" : ""}`;
	}
	function searchBook(book, rawQuery) {
		const query = rawQuery.trim().toLocaleLowerCase();
		if (query.length === 0) return [];
		const results = [];
		for (const paragraph of book.paragraphs) {
			const haystack = paragraph.text.toLocaleLowerCase();
			let from = 0;
			while (from < haystack.length) {
				const matchStart = haystack.indexOf(query, from);
				if (matchStart < 0) break;
				results.push({
					id: `search-${paragraph.index}-${matchStart}`,
					paragraphIndex: paragraph.index,
					chapterIndex: chapterIndexForParagraph(book, paragraph.index),
					excerpt: excerptAround(paragraph.text, matchStart, query.length),
					matchStart,
					matchLength: query.length
				});
				if (results.length >= MAX_RESULTS) return results;
				from = matchStart + Math.max(1, query.length);
			}
		}
		return results;
	}

//#endregion
//#region src/client/components/SearchPanel.tsx
	function SearchPanel({ query, onQueryChange, onSelect }) {
		const { book, goToParagraph } = useReader();
		const inputRef = (0, import_react.useRef)(null);
		const [selected, setSelected] = (0, import_react.useState)(0);
		const results = (0, import_react.useMemo)(() => book === null ? [] : searchBook(book, query), [book, query]);
		(0, import_react.useEffect)(() => {
			inputRef.current?.focus({ preventScroll: true });
		}, []);
		(0, import_react.useEffect)(() => setSelected(0), [query]);
		const jump = (index) => {
			const result = results[index];
			if (result === void 0) return;
			setSelected(index);
			goToParagraph(result.paragraphIndex, result.chapterIndex);
			onSelect();
		};
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "dnr-search-panel",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dnr-panel-heading",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: book?.onlineReading ? "本章搜索" : "全文搜索" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: results.length > 0 ? `${selected + 1} / ${results.length}` : "0 条" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "dnr-search-field",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "search" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							ref: inputRef,
							value: query,
							onChange: (event) => onQueryChange(event.target.value),
							placeholder: "输入关键词",
							onKeyDown: (event) => {
								if (event.key === "Enter" && results.length > 0) {
									event.preventDefault();
									jump((selected + (event.shiftKey ? -1 : 1) + results.length) % results.length);
								}
							}
						}),
						query !== "" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "清空搜索",
							onClick: () => onQueryChange(""),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								name: "close",
								width: "14",
								height: "14"
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "dnr-search-help",
					children: "Enter 下一个 · Shift+Enter 上一个 · Esc 关闭"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dnr-search-results",
					children: [results.map((result, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: selected === index ? "is-active" : "",
						onClick: () => jump(index),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: book?.chapters[result.chapterIndex]?.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: result.excerpt })]
					}, result.id)), query.trim() !== "" && results.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "dnr-empty-small",
						children: [
							"没有找到“",
							query.trim(),
							"”"
						]
					})]
				})
			]
		});
	}

//#endregion
//#region src/client/components/SettingsPanel.tsx
	const fonts = [
		{
			value: "system",
			label: "系统",
			preview: "苹方 / 默认"
		},
		{
			value: "songti",
			label: "宋体",
			preview: "思源宋体"
		},
		{
			value: "heiti",
			label: "黑体",
			preview: "思源黑体"
		},
		{
			value: "kaiti",
			label: "楷体",
			preview: "楷体"
		},
		{
			value: "serif",
			label: "衬线",
			preview: "Noto Serif"
		}
	];
	const spacings = [
		{
			value: "compact",
			label: "紧凑"
		},
		{
			value: "comfortable",
			label: "适中"
		},
		{
			value: "relaxed",
			label: "宽松"
		}
	];
	const themes = [
		{
			value: "auto",
			label: "跟随外观"
		},
		{
			value: "light",
			label: "日间白"
		},
		{
			value: "dark",
			label: "夜间黑"
		},
		{
			value: "eye-care",
			label: "护眼绿"
		},
		{
			value: "parchment",
			label: "羊皮纸"
		}
	];
	const pageModes = [{
		value: "scroll",
		label: "上下滚动",
		hint: "保留当前连续阅读方式"
	}, {
		value: "paged",
		label: "左右翻页",
		hint: "类似微信读书，按屏分页"
	}];
	const footerDisplays = [{
		value: "chapter-progress",
		label: "章节进度条"
	}, {
		value: "chapter-title",
		label: "章节名称"
	}];
	function SettingsPanel() {
		const { settings, updateSettings } = useReader();
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "dnr-settings",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dnr-panel-heading",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "阅读设置" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [settings.fontSize, "px"] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dnr-setting-group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "dnr-section-label",
						children: "字号"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "dnr-range-row",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "小" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								"aria-label": "字体大小",
								type: "range",
								min: "12",
								max: "32",
								step: "1",
								value: settings.fontSize,
								onChange: (event) => updateSettings({ fontSize: Number(event.target.value) })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "大" })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dnr-setting-group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "dnr-section-label",
						children: "字体"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "dnr-font-grid",
						children: fonts.map((font) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: settings.fontFamily === font.value ? "is-active" : "",
							"data-font": font.value,
							onClick: () => updateSettings({ fontFamily: font.value }),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: font.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: font.preview })]
						}, font.value))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dnr-setting-group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "dnr-section-label",
						children: "行间距"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "dnr-segmented",
						children: spacings.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: settings.lineSpacing === item.value ? "is-active" : "",
							onClick: () => updateSettings({ lineSpacing: item.value }),
							children: item.label
						}, item.value))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dnr-setting-group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "dnr-section-label",
						children: "翻页方式"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "dnr-page-mode-grid",
						children: pageModes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: settings.pageMode === item.value ? "is-active" : "",
							onClick: () => updateSettings({ pageMode: item.value }),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: item.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.hint })]
						}, item.value))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dnr-setting-group",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "dnr-section-label",
							children: "主题"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "dnr-theme-grid",
							children: themes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"aria-pressed": settings.theme === item.value,
								className: settings.theme === item.value ? "is-active" : "",
								onClick: () => updateSettings({ theme: item.value }),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { "data-theme": item.value }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label })]
							}, item.value))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "dnr-setting-hint",
							children: "跟随外观自动适配宿主或系统的浅色、深色模式。护眼色仅用于正文。"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dnr-setting-group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "dnr-section-label",
						children: "目录布局"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "dnr-segmented",
						children: ["left", "top"].map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: settings.tocPosition === value ? "is-active" : "",
							onClick: () => updateSettings({ tocPosition: value }),
							children: value === "left" ? "左侧常驻" : "顶部面板"
						}, value))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dnr-setting-group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "dnr-section-label",
						children: "底部显示"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "dnr-segmented",
						children: footerDisplays.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: settings.footerDisplay === item.value ? "is-active" : "",
							onClick: () => updateSettings({ footerDisplay: item.value }),
							children: item.label
						}, item.value))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "dnr-toggle-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "导航栏常驻" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "保持顶部导航和底部章节栏显示，关闭后可点击正文中间切换显隐" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: settings.keepNavigationVisible,
						onChange: (event) => updateSettings({ keepNavigationVisible: event.target.checked })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dnr-setting-group",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "dnr-section-label",
							children: "章节智能预读"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "dnr-segmented",
							children: [
								0,
								1,
								2,
								3
							].map((count) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-pressed": settings.prefetchChapters === count,
								className: settings.prefetchChapters === count ? "is-active" : "",
								onClick: () => updateSettings({ prefetchChapters: count }),
								children: count === 0 ? "关闭" : `${count} 章`
							}, count))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "dnr-setting-hint",
							children: "在线阅读时预读后续章节，正文仅保留在内存。"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "dnr-toggle-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "段落首行缩进" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "更适合中文长篇阅读" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						checked: settings.firstLineIndent,
						onChange: (event) => updateSettings({ firstLineIndent: event.target.checked })
					})]
				})
			]
		});
	}

//#endregion
//#region node_modules/.pnpm/json5@2.2.3/node_modules/json5/dist/index.js
	var require_dist = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/json5@2.2.3/node_modules/json5/dist/index.js": ((exports, module) => {
		(function(global, factory) {
			typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global.JSON5 = factory();
		})(exports, (function() {
			function createCommonjsModule(fn, module$1) {
				return module$1 = { exports: {} }, fn(module$1, module$1.exports), module$1.exports;
			}
			var _global = createCommonjsModule(function(module$1) {
				var global = module$1.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
				if (typeof __g == "number") __g = global;
			});
			var _core = createCommonjsModule(function(module$1) {
				var core = module$1.exports = { version: "2.6.5" };
				if (typeof __e == "number") __e = core;
			});
			_core.version;
			var _isObject = function(it) {
				return typeof it === "object" ? it !== null : typeof it === "function";
			};
			var _anObject = function(it) {
				if (!_isObject(it)) throw TypeError(it + " is not an object!");
				return it;
			};
			var _fails = function(exec) {
				try {
					return !!exec();
				} catch (e) {
					return true;
				}
			};
			var _descriptors = !_fails(function() {
				return Object.defineProperty({}, "a", { get: function() {
					return 7;
				} }).a != 7;
			});
			var document$1 = _global.document;
			var is = _isObject(document$1) && _isObject(document$1.createElement);
			var _domCreate = function(it) {
				return is ? document$1.createElement(it) : {};
			};
			var _ie8DomDefine = !_descriptors && !_fails(function() {
				return Object.defineProperty(_domCreate("div"), "a", { get: function() {
					return 7;
				} }).a != 7;
			});
			var _toPrimitive = function(it, S$3) {
				if (!_isObject(it)) return it;
				var fn, val;
				if (S$3 && typeof (fn = it.toString) == "function" && !_isObject(val = fn.call(it))) return val;
				if (typeof (fn = it.valueOf) == "function" && !_isObject(val = fn.call(it))) return val;
				if (!S$3 && typeof (fn = it.toString) == "function" && !_isObject(val = fn.call(it))) return val;
				throw TypeError("Can't convert object to primitive value");
			};
			var dP = Object.defineProperty;
			var _objectDp = { f: _descriptors ? Object.defineProperty : function defineProperty(O$3, P$3, Attributes) {
				_anObject(O$3);
				P$3 = _toPrimitive(P$3, true);
				_anObject(Attributes);
				if (_ie8DomDefine) try {
					return dP(O$3, P$3, Attributes);
				} catch (e) {}
				if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported!");
				if ("value" in Attributes) O$3[P$3] = Attributes.value;
				return O$3;
			} };
			var _propertyDesc = function(bitmap, value) {
				return {
					enumerable: !(bitmap & 1),
					configurable: !(bitmap & 2),
					writable: !(bitmap & 4),
					value
				};
			};
			var _hide = _descriptors ? function(object, key$1, value) {
				return _objectDp.f(object, key$1, _propertyDesc(1, value));
			} : function(object, key$1, value) {
				object[key$1] = value;
				return object;
			};
			var hasOwnProperty = {}.hasOwnProperty;
			var _has = function(it, key$1) {
				return hasOwnProperty.call(it, key$1);
			};
			var id$1 = 0;
			var px = Math.random();
			var _uid = function(key$1) {
				return "Symbol(".concat(key$1 === void 0 ? "" : key$1, ")_", (++id$1 + px).toString(36));
			};
			var _library = false;
			var _functionToString = createCommonjsModule(function(module$1) {
				var SHARED = "__core-js_shared__";
				var store = _global[SHARED] || (_global[SHARED] = {});
				(module$1.exports = function(key$1, value) {
					return store[key$1] || (store[key$1] = value !== void 0 ? value : {});
				})("versions", []).push({
					version: _core.version,
					mode: _library ? "pure" : "global",
					copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
				});
			})("native-function-to-string", Function.toString);
			var _redefine = createCommonjsModule(function(module$1) {
				var SRC = _uid("src");
				var TO_STRING = "toString";
				var TPL = ("" + _functionToString).split(TO_STRING);
				_core.inspectSource = function(it) {
					return _functionToString.call(it);
				};
				(module$1.exports = function(O$3, key$1, val, safe) {
					var isFunction = typeof val == "function";
					if (isFunction) _has(val, "name") || _hide(val, "name", key$1);
					if (O$3[key$1] === val) return;
					if (isFunction) _has(val, SRC) || _hide(val, SRC, O$3[key$1] ? "" + O$3[key$1] : TPL.join(String(key$1)));
					if (O$3 === _global) O$3[key$1] = val;
					else if (!safe) {
						delete O$3[key$1];
						_hide(O$3, key$1, val);
					} else if (O$3[key$1]) O$3[key$1] = val;
					else _hide(O$3, key$1, val);
				})(Function.prototype, TO_STRING, function toString() {
					return typeof this == "function" && this[SRC] || _functionToString.call(this);
				});
			});
			var _aFunction = function(it) {
				if (typeof it != "function") throw TypeError(it + " is not a function!");
				return it;
			};
			var _ctx = function(fn, that, length) {
				_aFunction(fn);
				if (that === void 0) return fn;
				switch (length) {
					case 1: return function(a) {
						return fn.call(that, a);
					};
					case 2: return function(a, b) {
						return fn.call(that, a, b);
					};
					case 3: return function(a, b, c$1) {
						return fn.call(that, a, b, c$1);
					};
				}
				return function() {
					return fn.apply(that, arguments);
				};
			};
			var PROTOTYPE = "prototype";
			var $export = function(type, name, source$1) {
				var IS_FORCED = type & $export.F;
				var IS_GLOBAL = type & $export.G;
				var IS_STATIC = type & $export.S;
				var IS_PROTO = type & $export.P;
				var IS_BIND = type & $export.B;
				var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
				var exports$1 = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
				var expProto = exports$1[PROTOTYPE] || (exports$1[PROTOTYPE] = {});
				var key$1, own, out, exp;
				if (IS_GLOBAL) source$1 = name;
				for (key$1 in source$1) {
					own = !IS_FORCED && target && target[key$1] !== void 0;
					out = (own ? target : source$1)[key$1];
					exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == "function" ? _ctx(Function.call, out) : out;
					if (target) _redefine(target, key$1, out, type & $export.U);
					if (exports$1[key$1] != out) _hide(exports$1, key$1, exp);
					if (IS_PROTO && expProto[key$1] != out) expProto[key$1] = out;
				}
			};
			_global.core = _core;
			$export.F = 1;
			$export.G = 2;
			$export.S = 4;
			$export.P = 8;
			$export.B = 16;
			$export.W = 32;
			$export.U = 64;
			$export.R = 128;
			var _export = $export;
			var ceil = Math.ceil;
			var floor = Math.floor;
			var _toInteger = function(it) {
				return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
			};
			var _defined = function(it) {
				if (it == void 0) throw TypeError("Can't call method on  " + it);
				return it;
			};
			var _stringAt = function(TO_STRING) {
				return function(that, pos$1) {
					var s = String(_defined(that));
					var i$1 = _toInteger(pos$1);
					var l$3 = s.length;
					var a, b;
					if (i$1 < 0 || i$1 >= l$3) return TO_STRING ? "" : void 0;
					a = s.charCodeAt(i$1);
					return a < 55296 || a > 56319 || i$1 + 1 === l$3 || (b = s.charCodeAt(i$1 + 1)) < 56320 || b > 57343 ? TO_STRING ? s.charAt(i$1) : a : TO_STRING ? s.slice(i$1, i$1 + 2) : (a - 55296 << 10) + (b - 56320) + 65536;
				};
			};
			var $at = _stringAt(false);
			_export(_export.P, "String", { codePointAt: function codePointAt(pos$1) {
				return $at(this, pos$1);
			} });
			_core.String.codePointAt;
			var max$1 = Math.max;
			var min = Math.min;
			var _toAbsoluteIndex = function(index, length) {
				index = _toInteger(index);
				return index < 0 ? max$1(index + length, 0) : min(index, length);
			};
			var fromCharCode = String.fromCharCode;
			var $fromCodePoint = String.fromCodePoint;
			_export(_export.S + _export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), "String", { fromCodePoint: function fromCodePoint(x$2) {
				var arguments$1 = arguments;
				var res = [];
				var aLen = arguments.length;
				var i$1 = 0;
				var code;
				while (aLen > i$1) {
					code = +arguments$1[i$1++];
					if (_toAbsoluteIndex(code, 1114111) !== code) throw RangeError(code + " is not a valid code point");
					res.push(code < 65536 ? fromCharCode(code) : fromCharCode(((code -= 65536) >> 10) + 55296, code % 1024 + 56320));
				}
				return res.join("");
			} });
			_core.String.fromCodePoint;
			var unicode = {
				Space_Separator: /[\u1680\u2000-\u200A\u202F\u205F\u3000]/,
				ID_Start: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,
				ID_Continue: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
			};
			var util = {
				isSpaceSeparator: function isSpaceSeparator(c$1) {
					return typeof c$1 === "string" && unicode.Space_Separator.test(c$1);
				},
				isIdStartChar: function isIdStartChar(c$1) {
					return typeof c$1 === "string" && (c$1 >= "a" && c$1 <= "z" || c$1 >= "A" && c$1 <= "Z" || c$1 === "$" || c$1 === "_" || unicode.ID_Start.test(c$1));
				},
				isIdContinueChar: function isIdContinueChar(c$1) {
					return typeof c$1 === "string" && (c$1 >= "a" && c$1 <= "z" || c$1 >= "A" && c$1 <= "Z" || c$1 >= "0" && c$1 <= "9" || c$1 === "$" || c$1 === "_" || c$1 === "‌" || c$1 === "‍" || unicode.ID_Continue.test(c$1));
				},
				isDigit: function isDigit(c$1) {
					return typeof c$1 === "string" && /[0-9]/.test(c$1);
				},
				isHexDigit: function isHexDigit(c$1) {
					return typeof c$1 === "string" && /[0-9A-Fa-f]/.test(c$1);
				}
			};
			var source;
			var parseState;
			var stack;
			var pos;
			var line;
			var column;
			var token;
			var key;
			var root$1;
			var parse = function parse$1(text, reviver) {
				source = String(text);
				parseState = "start";
				stack = [];
				pos = 0;
				line = 1;
				column = 0;
				token = void 0;
				key = void 0;
				root$1 = void 0;
				do {
					token = lex();
					parseStates[parseState]();
				} while (token.type !== "eof");
				if (typeof reviver === "function") return internalize({ "": root$1 }, "", reviver);
				return root$1;
			};
			function internalize(holder, name, reviver) {
				var value = holder[name];
				if (value != null && typeof value === "object") if (Array.isArray(value)) for (var i$1 = 0; i$1 < value.length; i$1++) {
					var key$1 = String(i$1);
					var replacement = internalize(value, key$1, reviver);
					if (replacement === void 0) delete value[key$1];
					else Object.defineProperty(value, key$1, {
						value: replacement,
						writable: true,
						enumerable: true,
						configurable: true
					});
				}
				else for (var key$1$1 in value) {
					var replacement$1 = internalize(value, key$1$1, reviver);
					if (replacement$1 === void 0) delete value[key$1$1];
					else Object.defineProperty(value, key$1$1, {
						value: replacement$1,
						writable: true,
						enumerable: true,
						configurable: true
					});
				}
				return reviver.call(holder, name, value);
			}
			var lexState;
			var buffer;
			var doubleQuote;
			var sign;
			var c;
			function lex() {
				lexState = "default";
				buffer = "";
				doubleQuote = false;
				sign = 1;
				for (;;) {
					c = peek();
					var token$1 = lexStates[lexState]();
					if (token$1) return token$1;
				}
			}
			function peek() {
				if (source[pos]) return String.fromCodePoint(source.codePointAt(pos));
			}
			function read$1() {
				var c$1 = peek();
				if (c$1 === "\n") {
					line++;
					column = 0;
				} else if (c$1) column += c$1.length;
				else column++;
				if (c$1) pos += c$1.length;
				return c$1;
			}
			var lexStates = {
				default: function default$1() {
					switch (c) {
						case "	":
						case "\v":
						case "\f":
						case " ":
						case "\xA0":
						case "﻿":
						case "\n":
						case "\r":
						case "\u2028":
						case "\u2029":
							read$1();
							return;
						case "/":
							read$1();
							lexState = "comment";
							return;
						case void 0:
							read$1();
							return newToken("eof");
					}
					if (util.isSpaceSeparator(c)) {
						read$1();
						return;
					}
					return lexStates[parseState]();
				},
				comment: function comment() {
					switch (c) {
						case "*":
							read$1();
							lexState = "multiLineComment";
							return;
						case "/":
							read$1();
							lexState = "singleLineComment";
							return;
					}
					throw invalidChar(read$1());
				},
				multiLineComment: function multiLineComment() {
					switch (c) {
						case "*":
							read$1();
							lexState = "multiLineCommentAsterisk";
							return;
						case void 0: throw invalidChar(read$1());
					}
					read$1();
				},
				multiLineCommentAsterisk: function multiLineCommentAsterisk() {
					switch (c) {
						case "*":
							read$1();
							return;
						case "/":
							read$1();
							lexState = "default";
							return;
						case void 0: throw invalidChar(read$1());
					}
					read$1();
					lexState = "multiLineComment";
				},
				singleLineComment: function singleLineComment() {
					switch (c) {
						case "\n":
						case "\r":
						case "\u2028":
						case "\u2029":
							read$1();
							lexState = "default";
							return;
						case void 0:
							read$1();
							return newToken("eof");
					}
					read$1();
				},
				value: function value() {
					switch (c) {
						case "{":
						case "[": return newToken("punctuator", read$1());
						case "n":
							read$1();
							literal("ull");
							return newToken("null", null);
						case "t":
							read$1();
							literal("rue");
							return newToken("boolean", true);
						case "f":
							read$1();
							literal("alse");
							return newToken("boolean", false);
						case "-":
						case "+":
							if (read$1() === "-") sign = -1;
							lexState = "sign";
							return;
						case ".":
							buffer = read$1();
							lexState = "decimalPointLeading";
							return;
						case "0":
							buffer = read$1();
							lexState = "zero";
							return;
						case "1":
						case "2":
						case "3":
						case "4":
						case "5":
						case "6":
						case "7":
						case "8":
						case "9":
							buffer = read$1();
							lexState = "decimalInteger";
							return;
						case "I":
							read$1();
							literal("nfinity");
							return newToken("numeric", Infinity);
						case "N":
							read$1();
							literal("aN");
							return newToken("numeric", NaN);
						case "\"":
						case "'":
							doubleQuote = read$1() === "\"";
							buffer = "";
							lexState = "string";
							return;
					}
					throw invalidChar(read$1());
				},
				identifierNameStartEscape: function identifierNameStartEscape() {
					if (c !== "u") throw invalidChar(read$1());
					read$1();
					var u$2 = unicodeEscape();
					switch (u$2) {
						case "$":
						case "_": break;
						default:
							if (!util.isIdStartChar(u$2)) throw invalidIdentifier();
							break;
					}
					buffer += u$2;
					lexState = "identifierName";
				},
				identifierName: function identifierName() {
					switch (c) {
						case "$":
						case "_":
						case "‌":
						case "‍":
							buffer += read$1();
							return;
						case "\\":
							read$1();
							lexState = "identifierNameEscape";
							return;
					}
					if (util.isIdContinueChar(c)) {
						buffer += read$1();
						return;
					}
					return newToken("identifier", buffer);
				},
				identifierNameEscape: function identifierNameEscape() {
					if (c !== "u") throw invalidChar(read$1());
					read$1();
					var u$2 = unicodeEscape();
					switch (u$2) {
						case "$":
						case "_":
						case "‌":
						case "‍": break;
						default:
							if (!util.isIdContinueChar(u$2)) throw invalidIdentifier();
							break;
					}
					buffer += u$2;
					lexState = "identifierName";
				},
				sign: function sign$1() {
					switch (c) {
						case ".":
							buffer = read$1();
							lexState = "decimalPointLeading";
							return;
						case "0":
							buffer = read$1();
							lexState = "zero";
							return;
						case "1":
						case "2":
						case "3":
						case "4":
						case "5":
						case "6":
						case "7":
						case "8":
						case "9":
							buffer = read$1();
							lexState = "decimalInteger";
							return;
						case "I":
							read$1();
							literal("nfinity");
							return newToken("numeric", sign * Infinity);
						case "N":
							read$1();
							literal("aN");
							return newToken("numeric", NaN);
					}
					throw invalidChar(read$1());
				},
				zero: function zero() {
					switch (c) {
						case ".":
							buffer += read$1();
							lexState = "decimalPoint";
							return;
						case "e":
						case "E":
							buffer += read$1();
							lexState = "decimalExponent";
							return;
						case "x":
						case "X":
							buffer += read$1();
							lexState = "hexadecimal";
							return;
					}
					return newToken("numeric", sign * 0);
				},
				decimalInteger: function decimalInteger() {
					switch (c) {
						case ".":
							buffer += read$1();
							lexState = "decimalPoint";
							return;
						case "e":
						case "E":
							buffer += read$1();
							lexState = "decimalExponent";
							return;
					}
					if (util.isDigit(c)) {
						buffer += read$1();
						return;
					}
					return newToken("numeric", sign * Number(buffer));
				},
				decimalPointLeading: function decimalPointLeading() {
					if (util.isDigit(c)) {
						buffer += read$1();
						lexState = "decimalFraction";
						return;
					}
					throw invalidChar(read$1());
				},
				decimalPoint: function decimalPoint() {
					switch (c) {
						case "e":
						case "E":
							buffer += read$1();
							lexState = "decimalExponent";
							return;
					}
					if (util.isDigit(c)) {
						buffer += read$1();
						lexState = "decimalFraction";
						return;
					}
					return newToken("numeric", sign * Number(buffer));
				},
				decimalFraction: function decimalFraction() {
					switch (c) {
						case "e":
						case "E":
							buffer += read$1();
							lexState = "decimalExponent";
							return;
					}
					if (util.isDigit(c)) {
						buffer += read$1();
						return;
					}
					return newToken("numeric", sign * Number(buffer));
				},
				decimalExponent: function decimalExponent() {
					switch (c) {
						case "+":
						case "-":
							buffer += read$1();
							lexState = "decimalExponentSign";
							return;
					}
					if (util.isDigit(c)) {
						buffer += read$1();
						lexState = "decimalExponentInteger";
						return;
					}
					throw invalidChar(read$1());
				},
				decimalExponentSign: function decimalExponentSign() {
					if (util.isDigit(c)) {
						buffer += read$1();
						lexState = "decimalExponentInteger";
						return;
					}
					throw invalidChar(read$1());
				},
				decimalExponentInteger: function decimalExponentInteger() {
					if (util.isDigit(c)) {
						buffer += read$1();
						return;
					}
					return newToken("numeric", sign * Number(buffer));
				},
				hexadecimal: function hexadecimal() {
					if (util.isHexDigit(c)) {
						buffer += read$1();
						lexState = "hexadecimalInteger";
						return;
					}
					throw invalidChar(read$1());
				},
				hexadecimalInteger: function hexadecimalInteger() {
					if (util.isHexDigit(c)) {
						buffer += read$1();
						return;
					}
					return newToken("numeric", sign * Number(buffer));
				},
				string: function string() {
					switch (c) {
						case "\\":
							read$1();
							buffer += escape$1();
							return;
						case "\"":
							if (doubleQuote) {
								read$1();
								return newToken("string", buffer);
							}
							buffer += read$1();
							return;
						case "'":
							if (!doubleQuote) {
								read$1();
								return newToken("string", buffer);
							}
							buffer += read$1();
							return;
						case "\n":
						case "\r": throw invalidChar(read$1());
						case "\u2028":
						case "\u2029":
							separatorChar(c);
							break;
						case void 0: throw invalidChar(read$1());
					}
					buffer += read$1();
				},
				start: function start() {
					switch (c) {
						case "{":
						case "[": return newToken("punctuator", read$1());
					}
					lexState = "value";
				},
				beforePropertyName: function beforePropertyName() {
					switch (c) {
						case "$":
						case "_":
							buffer = read$1();
							lexState = "identifierName";
							return;
						case "\\":
							read$1();
							lexState = "identifierNameStartEscape";
							return;
						case "}": return newToken("punctuator", read$1());
						case "\"":
						case "'":
							doubleQuote = read$1() === "\"";
							lexState = "string";
							return;
					}
					if (util.isIdStartChar(c)) {
						buffer += read$1();
						lexState = "identifierName";
						return;
					}
					throw invalidChar(read$1());
				},
				afterPropertyName: function afterPropertyName() {
					if (c === ":") return newToken("punctuator", read$1());
					throw invalidChar(read$1());
				},
				beforePropertyValue: function beforePropertyValue() {
					lexState = "value";
				},
				afterPropertyValue: function afterPropertyValue() {
					switch (c) {
						case ",":
						case "}": return newToken("punctuator", read$1());
					}
					throw invalidChar(read$1());
				},
				beforeArrayValue: function beforeArrayValue() {
					if (c === "]") return newToken("punctuator", read$1());
					lexState = "value";
				},
				afterArrayValue: function afterArrayValue() {
					switch (c) {
						case ",":
						case "]": return newToken("punctuator", read$1());
					}
					throw invalidChar(read$1());
				},
				end: function end() {
					throw invalidChar(read$1());
				}
			};
			function newToken(type, value) {
				return {
					type,
					value,
					line,
					column
				};
			}
			function literal(s) {
				for (var i$1 = 0, list = s; i$1 < list.length; i$1 += 1) {
					var c$1 = list[i$1];
					if (peek() !== c$1) throw invalidChar(read$1());
					read$1();
				}
			}
			function escape$1() {
				switch (peek()) {
					case "b":
						read$1();
						return "\b";
					case "f":
						read$1();
						return "\f";
					case "n":
						read$1();
						return "\n";
					case "r":
						read$1();
						return "\r";
					case "t":
						read$1();
						return "	";
					case "v":
						read$1();
						return "\v";
					case "0":
						read$1();
						if (util.isDigit(peek())) throw invalidChar(read$1());
						return "\0";
					case "x":
						read$1();
						return hexEscape();
					case "u":
						read$1();
						return unicodeEscape();
					case "\n":
					case "\u2028":
					case "\u2029":
						read$1();
						return "";
					case "\r":
						read$1();
						if (peek() === "\n") read$1();
						return "";
					case "1":
					case "2":
					case "3":
					case "4":
					case "5":
					case "6":
					case "7":
					case "8":
					case "9": throw invalidChar(read$1());
					case void 0: throw invalidChar(read$1());
				}
				return read$1();
			}
			function hexEscape() {
				var buffer$1 = "";
				var c$1 = peek();
				if (!util.isHexDigit(c$1)) throw invalidChar(read$1());
				buffer$1 += read$1();
				c$1 = peek();
				if (!util.isHexDigit(c$1)) throw invalidChar(read$1());
				buffer$1 += read$1();
				return String.fromCodePoint(parseInt(buffer$1, 16));
			}
			function unicodeEscape() {
				var buffer$1 = "";
				var count = 4;
				while (count-- > 0) {
					var c$1 = peek();
					if (!util.isHexDigit(c$1)) throw invalidChar(read$1());
					buffer$1 += read$1();
				}
				return String.fromCodePoint(parseInt(buffer$1, 16));
			}
			var parseStates = {
				start: function start() {
					if (token.type === "eof") throw invalidEOF();
					push();
				},
				beforePropertyName: function beforePropertyName() {
					switch (token.type) {
						case "identifier":
						case "string":
							key = token.value;
							parseState = "afterPropertyName";
							return;
						case "punctuator":
							pop();
							return;
						case "eof": throw invalidEOF();
					}
				},
				afterPropertyName: function afterPropertyName() {
					if (token.type === "eof") throw invalidEOF();
					parseState = "beforePropertyValue";
				},
				beforePropertyValue: function beforePropertyValue() {
					if (token.type === "eof") throw invalidEOF();
					push();
				},
				beforeArrayValue: function beforeArrayValue() {
					if (token.type === "eof") throw invalidEOF();
					if (token.type === "punctuator" && token.value === "]") {
						pop();
						return;
					}
					push();
				},
				afterPropertyValue: function afterPropertyValue() {
					if (token.type === "eof") throw invalidEOF();
					switch (token.value) {
						case ",":
							parseState = "beforePropertyName";
							return;
						case "}": pop();
					}
				},
				afterArrayValue: function afterArrayValue() {
					if (token.type === "eof") throw invalidEOF();
					switch (token.value) {
						case ",":
							parseState = "beforeArrayValue";
							return;
						case "]": pop();
					}
				},
				end: function end() {}
			};
			function push() {
				var value;
				switch (token.type) {
					case "punctuator":
						switch (token.value) {
							case "{":
								value = {};
								break;
							case "[":
								value = [];
								break;
						}
						break;
					case "null":
					case "boolean":
					case "numeric":
					case "string":
						value = token.value;
						break;
				}
				if (root$1 === void 0) root$1 = value;
				else {
					var parent = stack[stack.length - 1];
					if (Array.isArray(parent)) parent.push(value);
					else Object.defineProperty(parent, key, {
						value,
						writable: true,
						enumerable: true,
						configurable: true
					});
				}
				if (value !== null && typeof value === "object") {
					stack.push(value);
					if (Array.isArray(value)) parseState = "beforeArrayValue";
					else parseState = "beforePropertyName";
				} else {
					var current = stack[stack.length - 1];
					if (current == null) parseState = "end";
					else if (Array.isArray(current)) parseState = "afterArrayValue";
					else parseState = "afterPropertyValue";
				}
			}
			function pop() {
				stack.pop();
				var current = stack[stack.length - 1];
				if (current == null) parseState = "end";
				else if (Array.isArray(current)) parseState = "afterArrayValue";
				else parseState = "afterPropertyValue";
			}
			function invalidChar(c$1) {
				if (c$1 === void 0) return syntaxError("JSON5: invalid end of input at " + line + ":" + column);
				return syntaxError("JSON5: invalid character '" + formatChar(c$1) + "' at " + line + ":" + column);
			}
			function invalidEOF() {
				return syntaxError("JSON5: invalid end of input at " + line + ":" + column);
			}
			function invalidIdentifier() {
				column -= 5;
				return syntaxError("JSON5: invalid identifier character at " + line + ":" + column);
			}
			function separatorChar(c$1) {
				console.warn("JSON5: '" + formatChar(c$1) + "' in strings is not valid ECMAScript; consider escaping");
			}
			function formatChar(c$1) {
				var replacements = {
					"'": "\\'",
					"\"": "\\\"",
					"\\": "\\\\",
					"\b": "\\b",
					"\f": "\\f",
					"\n": "\\n",
					"\r": "\\r",
					"	": "\\t",
					"\v": "\\v",
					"\0": "\\0",
					"\u2028": "\\u2028",
					"\u2029": "\\u2029"
				};
				if (replacements[c$1]) return replacements[c$1];
				if (c$1 < " ") {
					var hexString = c$1.charCodeAt(0).toString(16);
					return "\\x" + ("00" + hexString).substring(hexString.length);
				}
				return c$1;
			}
			function syntaxError(message) {
				var err$1 = new SyntaxError(message);
				err$1.lineNumber = line;
				err$1.columnNumber = column;
				return err$1;
			}
			return {
				parse,
				stringify: function stringify(value, replacer, space) {
					var stack$1 = [];
					var indent = "";
					var propertyList;
					var replacerFunc;
					var gap = "";
					var quote;
					if (replacer != null && typeof replacer === "object" && !Array.isArray(replacer)) {
						space = replacer.space;
						quote = replacer.quote;
						replacer = replacer.replacer;
					}
					if (typeof replacer === "function") replacerFunc = replacer;
					else if (Array.isArray(replacer)) {
						propertyList = [];
						for (var i$1 = 0, list = replacer; i$1 < list.length; i$1 += 1) {
							var v$3 = list[i$1];
							var item = void 0;
							if (typeof v$3 === "string") item = v$3;
							else if (typeof v$3 === "number" || v$3 instanceof String || v$3 instanceof Number) item = String(v$3);
							if (item !== void 0 && propertyList.indexOf(item) < 0) propertyList.push(item);
						}
					}
					if (space instanceof Number) space = Number(space);
					else if (space instanceof String) space = String(space);
					if (typeof space === "number") {
						if (space > 0) {
							space = Math.min(10, Math.floor(space));
							gap = "          ".substr(0, space);
						}
					} else if (typeof space === "string") gap = space.substr(0, 10);
					return serializeProperty("", { "": value });
					function serializeProperty(key$1, holder) {
						var value$1 = holder[key$1];
						if (value$1 != null) {
							if (typeof value$1.toJSON5 === "function") value$1 = value$1.toJSON5(key$1);
							else if (typeof value$1.toJSON === "function") value$1 = value$1.toJSON(key$1);
						}
						if (replacerFunc) value$1 = replacerFunc.call(holder, key$1, value$1);
						if (value$1 instanceof Number) value$1 = Number(value$1);
						else if (value$1 instanceof String) value$1 = String(value$1);
						else if (value$1 instanceof Boolean) value$1 = value$1.valueOf();
						switch (value$1) {
							case null: return "null";
							case true: return "true";
							case false: return "false";
						}
						if (typeof value$1 === "string") return quoteString(value$1, false);
						if (typeof value$1 === "number") return String(value$1);
						if (typeof value$1 === "object") return Array.isArray(value$1) ? serializeArray(value$1) : serializeObject(value$1);
					}
					function quoteString(value$1) {
						var quotes = {
							"'": .1,
							"\"": .2
						};
						var replacements = {
							"'": "\\'",
							"\"": "\\\"",
							"\\": "\\\\",
							"\b": "\\b",
							"\f": "\\f",
							"\n": "\\n",
							"\r": "\\r",
							"	": "\\t",
							"\v": "\\v",
							"\0": "\\0",
							"\u2028": "\\u2028",
							"\u2029": "\\u2029"
						};
						var product = "";
						for (var i$2 = 0; i$2 < value$1.length; i$2++) {
							var c$1 = value$1[i$2];
							switch (c$1) {
								case "'":
								case "\"":
									quotes[c$1]++;
									product += c$1;
									continue;
								case "\0": if (util.isDigit(value$1[i$2 + 1])) {
									product += "\\x00";
									continue;
								}
							}
							if (replacements[c$1]) {
								product += replacements[c$1];
								continue;
							}
							if (c$1 < " ") {
								var hexString = c$1.charCodeAt(0).toString(16);
								product += "\\x" + ("00" + hexString).substring(hexString.length);
								continue;
							}
							product += c$1;
						}
						var quoteChar = quote || Object.keys(quotes).reduce(function(a, b) {
							return quotes[a] < quotes[b] ? a : b;
						});
						product = product.replace(new RegExp(quoteChar, "g"), replacements[quoteChar]);
						return quoteChar + product + quoteChar;
					}
					function serializeObject(value$1) {
						if (stack$1.indexOf(value$1) >= 0) throw TypeError("Converting circular structure to JSON5");
						stack$1.push(value$1);
						var stepback = indent;
						indent = indent + gap;
						var keys = propertyList || Object.keys(value$1);
						var partial = [];
						for (var i$2 = 0, list$1 = keys; i$2 < list$1.length; i$2 += 1) {
							var key$1 = list$1[i$2];
							var propertyString = serializeProperty(key$1, value$1);
							if (propertyString !== void 0) {
								var member = serializeKey(key$1) + ":";
								if (gap !== "") member += " ";
								member += propertyString;
								partial.push(member);
							}
						}
						var final;
						if (partial.length === 0) final = "{}";
						else {
							var properties;
							if (gap === "") {
								properties = partial.join(",");
								final = "{" + properties + "}";
							} else {
								var separator = ",\n" + indent;
								properties = partial.join(separator);
								final = "{\n" + indent + properties + ",\n" + stepback + "}";
							}
						}
						stack$1.pop();
						indent = stepback;
						return final;
					}
					function serializeKey(key$1) {
						if (key$1.length === 0) return quoteString(key$1, true);
						var firstChar = String.fromCodePoint(key$1.codePointAt(0));
						if (!util.isIdStartChar(firstChar)) return quoteString(key$1, true);
						for (var i$2 = firstChar.length; i$2 < key$1.length; i$2++) if (!util.isIdContinueChar(String.fromCodePoint(key$1.codePointAt(i$2)))) return quoteString(key$1, true);
						return key$1;
					}
					function serializeArray(value$1) {
						if (stack$1.indexOf(value$1) >= 0) throw TypeError("Converting circular structure to JSON5");
						stack$1.push(value$1);
						var stepback = indent;
						indent = indent + gap;
						var partial = [];
						for (var i$2 = 0; i$2 < value$1.length; i$2++) {
							var propertyString = serializeProperty(String(i$2), value$1);
							partial.push(propertyString !== void 0 ? propertyString : "null");
						}
						var final;
						if (partial.length === 0) final = "[]";
						else if (gap === "") final = "[" + partial.join(",") + "]";
						else {
							var separator = ",\n" + indent;
							var properties$1 = partial.join(separator);
							final = "[\n" + indent + properties$1 + ",\n" + stepback + "]";
						}
						stack$1.pop();
						indent = stepback;
						return final;
					}
				}
			};
		}));
	}) });

//#endregion
//#region src/shared/rules.ts
var import_dist = /* @__PURE__ */ __toESM(require_dist());
	const ANY_READER_TEMPLATE = {
		name: "我的小说书源",
		host: "https://example.com",
		contentType: 1,
		author: "",
		sort: 0,
		userAgent: "",
		enableSearch: true,
		searchUrl: "/search?q=$keyword",
		searchList: ".book",
		searchName: "a@text",
		searchAuthor: ".author@text",
		searchResult: "a@href",
		chapterUrl: "$result",
		chapterList: ".chapters a",
		chapterName: "@text",
		chapterResult: "@href",
		contentUrl: "$result",
		contentItems: "#content@html",
		chapterNextUrl: "",
		contentNextUrl: ""
	};

//#endregion
//#region src/client/components/RuleManagerPanel.tsx
	const groups = [
		{
			title: "基本信息",
			fields: [
				["name", "名称"],
				["host", "域名"],
				["author", "规则作者"],
				["userAgent", "User-Agent / 请求头 JSON"],
				["allowedHosts", "额外授权主机（JSON 数组）"]
			]
		},
		{
			title: "搜索",
			fields: [
				["searchUrl", "请求地址"],
				["searchList", "列表"],
				["searchName", "书名"],
				["searchAuthor", "作者"],
				["searchDescription", "简介"],
				["searchChapter", "最新章节"],
				["searchResult", "阶段结果"],
				["searchNextUrl", "下一页（扩展字段）"]
			]
		},
		{
			title: "目录",
			fields: [
				["chapterUrl", "请求地址（空值使用阶段结果）"],
				["chapterList", "列表"],
				["chapterName", "章节名称"],
				["chapterResult", "阶段结果"],
				["chapterNextUrl", "下一页"]
			]
		},
		{
			title: "正文",
			fields: [
				["contentUrl", "请求地址（空值使用阶段结果）"],
				["contentItems", "正文"],
				["contentNextUrl", "下一页"]
			]
		}
	];
	const sonovelGroups = [
		{
			title: "基本信息",
			fields: [
				["name", "名称"],
				["url", "域名"],
				["comment", "说明"]
			]
		},
		{
			title: "搜索",
			fields: [
				["search.url", "请求地址"],
				["search.method", "方法"],
				["search.data", "POST 表单"],
				["search.result", "列表"],
				["search.bookName", "书名 / 链接"],
				["search.author", "作者"]
			]
		},
		{
			title: "目录",
			fields: [
				["toc.url", "请求地址"],
				["toc.baseUri", "相对链接基址"],
				["toc.list", "页面变换"],
				["toc.item", "章节链接"],
				["toc.nextPage", "下一页"]
			]
		},
		{
			title: "正文",
			fields: [
				["chapter.title", "标题"],
				["chapter.content", "正文"],
				["chapter.paragraphTag", "分段规则"],
				["chapter.filterTag", "删除元素"],
				["chapter.filterTxt", "删除文本"],
				["chapter.nextPage", "下一页"]
			]
		}
	];
	function fieldValue(raw, path) {
		return path.split(".").reduce((value, key) => value && typeof value === "object" ? value[key] : void 0, raw);
	}
	function setField(raw, path, value) {
		const copy = structuredClone(raw);
		const keys = path.split(".");
		let root$1 = copy;
		for (const key of keys.slice(0, -1)) {
			if (!root$1[key] || typeof root$1[key] !== "object") root$1[key] = {};
			root$1 = root$1[key];
		}
		root$1[keys.at(-1)] = value;
		return copy;
	}
	function RuleManagerPanel({ onBack }) {
		const [rules, setRules] = (0, import_react.useState)([]);
		const [error, setError] = (0, import_react.useState)(null);
		const [message, setMessage] = (0, import_react.useState)("");
		const [busy, setBusy] = (0, import_react.useState)(false);
		const [loading, setLoading] = (0, import_react.useState)(true);
		const [selected, setSelected] = (0, import_react.useState)(null);
		const [editing, setEditing] = (0, import_react.useState)(false);
		const [draft, setDraft] = (0, import_react.useState)("");
		const [format, setFormat] = (0, import_react.useState)("any-reader");
		const [mode, setMode] = (0, import_react.useState)("form");
		const [enabled, setEnabled] = (0, import_react.useState)(true);
		const [hostsText, setHostsText] = (0, import_react.useState)("[]");
		const [importing, setImporting] = (0, import_react.useState)(false);
		const [importText, setImportText] = (0, import_react.useState)("");
		const [preview, setPreview] = (0, import_react.useState)(null);
		const [updateIds, setUpdateIds] = (0, import_react.useState)([]);
		const [keyword, setKeyword] = (0, import_react.useState)("");
		const [test, setTest] = (0, import_react.useState)(null);
		const testController = (0, import_react.useRef)(null);
		const readOnly = selected?.kind === "builtin";
		const parsed = (0, import_react.useMemo)(() => {
			try {
				const value = import_dist.default.parse(draft || "{}");
				if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error("规则必须是 JSON 对象。");
				return {
					raw: value,
					issue: null
				};
			} catch (caught) {
				return {
					raw: null,
					issue: caught instanceof Error ? caught.message : String(caught)
				};
			}
		}, [draft]);
		const serializedHosts = JSON.stringify(parsed.raw?.allowedHosts ?? []);
		(0, import_react.useEffect)(() => {
			setHostsText(serializedHosts);
		}, [serializedHosts]);
		const hostsIssue = (0, import_react.useMemo)(() => {
			try {
				const value = import_dist.default.parse(hostsText || "[]");
				if (!Array.isArray(value) || value.some((host) => typeof host !== "string" || !/^[a-z\d.-]+$/i.test(host))) throw new Error();
				return null;
			} catch {
				return "额外授权主机请填写不含通配符的域名数组，例如 [\"cdn.example.com\"]。";
			}
		}, [hostsText]);
		(0, import_react.useEffect)(() => {
			const controller = new AbortController();
			listRules(controller.signal).then(setRules).catch((caught) => {
				if (!controller.signal.aborted) setError(caught instanceof Error ? caught.message : "书源管理不可用。");
			}).finally(() => {
				if (!controller.signal.aborted) setLoading(false);
			});
			return () => {
				controller.abort();
				testController.current?.abort();
			};
		}, []);
		const refresh = async () => {
			setRules(await listRules());
		};
		const action = async (operation) => {
			setBusy(true);
			setError(null);
			setMessage("");
			try {
				await operation();
			} catch (caught) {
				setError(caught instanceof Error ? caught.message : String(caught));
			} finally {
				setBusy(false);
			}
		};
		const changeDraft = (text) => {
			testController.current?.abort();
			setDraft(text);
			setTest(null);
		};
		const edit = (rule, copy = false) => {
			testController.current?.abort();
			const raw = rule ? structuredClone(rule.raw) : structuredClone(ANY_READER_TEMPLATE);
			if (copy) {
				delete raw.id;
				raw.name = `${rule.name}（副本）`;
			}
			setSelected(copy ? null : rule);
			setFormat(rule?.format ?? "any-reader");
			setEnabled(copy ? true : rule?.enabled ?? true);
			changeDraft(JSON.stringify(raw, null, 2));
			setEditing(true);
			setImporting(false);
			setMode("form");
			setError(null);
			setMessage("");
		};
		const updateField = (path, text) => {
			if (!parsed.raw) return;
			try {
				const value = path === "allowedHosts" ? import_dist.default.parse(text || "[]") : text;
				changeDraft(JSON.stringify(setField(parsed.raw, path, value), null, 2));
			} catch {
				setError("额外授权主机请填写 JSON 数组，例如 [\"cdn.example.com\"]。");
			}
		};
		const download = (id$1) => {
			action(async () => {
				const raw = await exportRules(id$1);
				const url = URL.createObjectURL(new Blob([JSON.stringify(raw, null, 2)], { type: "application/json" }));
				const anchor = document.createElement("a");
				anchor.href = url;
				anchor.download = "novel-reader-rules.json";
				anchor.click();
				globalThis.setTimeout(() => URL.revokeObjectURL(url), 1e3);
			});
		};
		const runTest = (stage, handle) => {
			if (!parsed.raw) return;
			testController.current?.abort();
			const controller = new AbortController();
			testController.current = controller;
			setBusy(true);
			setError(null);
			testRule({
				raw: parsed.raw,
				format,
				stage,
				keyword,
				...handle ? { handle } : {}
			}, controller.signal).then((value) => {
				if (!controller.signal.aborted) setTest(value);
			}).catch((caught) => {
				if (!controller.signal.aborted) setError(caught instanceof Error ? caught.message : String(caught));
			}).finally(() => {
				if (testController.current === controller) setBusy(false);
			});
		};
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "dnr-rules-panel",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "dnr-online-heading",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "dnr-online-back",
						onClick: onBack,
						children: "‹ 返回搜书"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "书源管理" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "小说规则 · 保存在本机 Host" })] })]
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "dnr-alert",
					role: "alert",
					children: error
				}),
				message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					role: "status",
					children: message
				}),
				!editing && !importing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "dnr-rule-actions",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								disabled: busy || loading || !!error,
								onClick: () => edit(null),
								children: "新建规则"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								disabled: busy || loading || !!error,
								onClick: () => {
									setImporting(true);
									setPreview(null);
									setImportText("");
								},
								children: "导入规则"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								disabled: busy || loading,
								onClick: () => download(),
								children: "导出自定义规则"
							}),
							error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								disabled: busy,
								onClick: () => {
									action(refresh);
								},
								children: "重试连接"
							})
						]
					}),
					loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						role: "status",
						children: "正在连接书源管理…"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "dnr-rule-list",
						children: rules.map((rule) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "dnr-rule-title",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: rule.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									"aria-label": `启用 ${rule.name}`,
									checked: rule.enabled,
									disabled: busy || !rule.compatible,
									onChange: (event) => {
										const checked = event.currentTarget.checked;
										action(async () => {
											await setRuleEnabled(rule.id, checked);
											await refresh();
										});
									}
								}), "启用"] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [
								rule.kind === "builtin" ? "内置" : "自定义",
								" · ",
								rule.format === "any-reader" ? "AnyReader / 亦搜" : "SoNovel",
								!rule.compatible ? " · 不兼容，已禁用" : ""
							] }),
							!!rule.diagnostics.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "dnr-rule-diagnostics",
								children: rule.diagnostics.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: item.field }),
									"：",
									item.message
								] }, index))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "dnr-rule-actions",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										disabled: busy,
										onClick: () => edit(rule),
										children: rule.kind === "builtin" ? "查看 / 测试" : "编辑 / 测试"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										disabled: busy,
										onClick: () => edit(rule, true),
										children: "复制并编辑"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										disabled: busy,
										onClick: () => download(rule.id),
										children: "导出"
									}),
									rule.kind === "custom" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										disabled: busy,
										onClick: () => {
											action(async () => {
												await deleteRule(rule.id);
												await refresh();
											});
										},
										children: "删除"
									})
								]
							})
						] }, rule.id))
					})
				] }),
				importing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dnr-rule-import",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "dnr-rule-actions",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								disabled: busy,
								onClick: () => setImporting(false),
								children: "返回列表"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "dnr-rule-file",
								children: ["选择文件", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "file",
									accept: ".json,.json5,.txt",
									disabled: busy,
									onChange: (event) => {
										const file = event.currentTarget.files?.[0];
										if (!file) return;
										action(async () => {
											if (file.size > 1024 * 1024) throw new Error("文件超过 1 MiB。");
											setImportText(await file.text());
											setPreview(null);
										});
										event.currentTarget.value = "";
									}
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["JSON / JSON5 / eso://", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							className: "dnr-rule-json",
							"aria-label": "待导入规则",
							value: importText,
							disabled: busy,
							onChange: (event) => {
								setImportText(event.currentTarget.value);
								setPreview(null);
							}
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "dnr-setting-hint",
							children: "每批最多 200 条、1 MiB。不兼容规则保留原文并禁用。"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							disabled: busy || !importText.trim(),
							onClick: () => {
								action(async () => {
									setPreview(await previewRuleImport(importText));
									setUpdateIds([]);
								});
							},
							children: "校验并预览"
						}),
						preview && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "dnr-rule-list",
							children: preview.items.map((rule, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: rule.name }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: rule.compatible ? "兼容 · 默认启用" : "不兼容 · 保存后禁用" }),
								rule.duplicate && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: updateIds.includes(rule.id),
									onChange: (event) => setUpdateIds(event.currentTarget.checked ? [...updateIds, rule.id] : updateIds.filter((id$1) => id$1 !== rule.id))
								}), "更新同 ID 规则（默认跳过）"] }),
								rule.diagnostics.map((item, i$1) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "dnr-rule-issue",
									children: [
										item.field,
										"：",
										item.message
									]
								}, i$1))
							] }, `${rule.id}:${index}`))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "dnr-primary-button",
							disabled: busy,
							onClick: () => {
								action(async () => {
									const result = await commitRuleImport(preview.token, updateIds);
									await refresh();
									setImporting(false);
									setPreview(null);
									setMessage(`已导入 ${result.imported} 条，跳过 ${result.skipped} 条。`);
								});
							},
							children: [
								"确认导入 ",
								preview.items.length,
								" 条"
							]
						})] })
					]
				}),
				editing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dnr-rule-editor",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "dnr-rule-actions",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									disabled: busy,
									onClick: () => {
										testController.current?.abort();
										setEditing(false);
									},
									children: "返回列表"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									disabled: mode === "form" || !parsed.raw,
									onClick: () => setMode("form"),
									children: "分步骤表单"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									disabled: mode === "json" || !!hostsIssue,
									onClick: () => setMode("json"),
									children: "原始 JSON"
								})
							]
						}),
						readOnly && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "dnr-setting-hint",
							children: "内置规则只读，可返回列表后“复制并编辑”。"
						}),
						mode === "json" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							className: "dnr-rule-json",
							"aria-label": "原始规则 JSON",
							spellCheck: false,
							readOnly,
							disabled: busy,
							value: draft,
							onChange: (event) => changeDraft(event.currentTarget.value)
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (format === "any-reader" ? groups : sonovelGroups).map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
							open: true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", { children: group.title }), group.fields.map(([path, label]) => {
								const value = parsed.raw ? fieldValue(parsed.raw, path) : "";
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [label, path === "allowedHosts" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									rows: 1,
									"aria-label": `${group.title} ${label}`,
									disabled: readOnly || busy,
									value: hostsText,
									onChange: (event) => setHostsText(event.currentTarget.value),
									onBlur: (event) => {
										if (!hostsIssue) updateField(path, event.currentTarget.value);
									}
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									rows: path?.endsWith("Url") || path?.endsWith(".url") ? 2 : 1,
									"aria-label": `${group.title} ${label}`,
									disabled: readOnly || busy,
									value: typeof value === "object" ? JSON.stringify(value) : String(value ?? ""),
									onChange: (event) => updateField(path, event.currentTarget.value)
								})] }, path);
							})]
						}, group.title)) }),
						parsed.issue && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "dnr-rule-issue",
							role: "alert",
							children: parsed.issue
						}),
						format === "any-reader" && mode === "form" && hostsIssue && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "dnr-rule-issue",
							role: "alert",
							children: hostsIssue
						}),
						!readOnly && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "dnr-rule-actions",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: enabled,
								disabled: busy,
								onChange: (event) => setEnabled(event.currentTarget.checked)
							}), "保存后启用"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "dnr-primary-button",
								disabled: busy || !parsed.raw || format === "any-reader" && !!hostsIssue,
								onClick: () => {
									action(async () => {
										const saved = await saveRule(parsed.raw, format, enabled, selected?.id);
										setSelected(saved);
										setEnabled(saved.enabled);
										changeDraft(JSON.stringify(saved.raw, null, 2));
										await refresh();
										setMessage(saved.compatible ? "已保存，书源立即生效。" : "已保存原始规则；不兼容字段需修复后才能启用。");
									});
								},
								children: "保存规则"
							})]
						}),
						selected?.diagnostics.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "dnr-rule-issue",
							children: [
								item.field,
								"：",
								item.message
							]
						}, index)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "dnr-rule-test",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "分阶段测试" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "dnr-setting-hint",
									children: "测试当前草稿，不保存规则、不整本下载。列表最多预览 100 项。"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["测试书名 / 作者", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									"aria-label": "测试关键词",
									maxLength: 100,
									value: keyword,
									disabled: busy,
									onChange: (event) => setKeyword(event.currentTarget.value)
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "dnr-rule-actions",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										disabled: busy || !parsed.raw || !keyword.trim() || format === "any-reader" && !!hostsIssue,
										onClick: () => runTest("search"),
										children: "测试搜索"
									}), busy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => testController.current?.abort(),
										children: "取消测试"
									})]
								}),
								test && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: test.stage === "search" ? "搜索结果：选择书籍测试目录" : test.stage === "toc" ? "目录结果：选择章节测试正文" : "正文预览" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
										open: true,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", { children: [
											"请求地址（",
											test.requests.length,
											"）"
										] }), test.requests.map((url, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
											className: "dnr-rule-request",
											children: url
										}, index))]
									}),
									test.diagnostics.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "dnr-rule-issue",
										role: "alert",
										children: [
											item.field,
											"：",
											item.message
										]
									}, index)),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "dnr-rule-test-items",
										children: test.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											disabled: busy,
											onClick: () => runTest(test.stage === "search" ? "toc" : "content", item.handle),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: item.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: item.author || item.url })]
										}, item.handle))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "dnr-rule-content-preview",
										children: test.paragraphs.map((paragraph, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, index))
									})
								] })
							]
						})
					]
				})
			]
		});
	}

//#endregion
//#region src/client/components/OnlineSearchPanel.tsx
	const POLL_INTERVAL_MS = 650;
	function statusText(status) {
		if (status.state === "queued") return "等待抓取任务…";
		if (status.state === "resolving") return "正在解析详情页和目录…";
		if (status.state === "downloading") return `正在抓取章节 ${status.completedChapters} / ${status.totalChapters}`;
		if (status.state === "completed") return "抓取完成，正在打开…";
		if (status.state === "cancelled") return "抓取已取消。";
		return status.error ?? "抓取失败。";
	}
	function metadata(result) {
		return [
			result.author,
			result.category,
			result.status,
			result.wordCount
		].filter(Boolean).join(" · ");
	}
	function OnlineSearchPanel({ onBack, onOpened }) {
		const { loadOnlineBook, startOnlineReading } = useReader();
		const [opening, setOpening] = (0, import_react.useState)(false);
		const [query, setQuery] = (0, import_react.useState)("");
		const [managingRules, setManagingRules] = (0, import_react.useState)(false);
		const [results, setResults] = (0, import_react.useState)([]);
		const [failedSources, setFailedSources] = (0, import_react.useState)(0);
		const [searchedSources, setSearchedSources] = (0, import_react.useState)(0);
		const [searching, setSearching] = (0, import_react.useState)(false);
		const [error, setError] = (0, import_react.useState)(null);
		const [job, setJob] = (0, import_react.useState)(null);
		const searchController = (0, import_react.useRef)(null);
		(0, import_react.useEffect)(() => () => searchController.current?.abort(), []);
		(0, import_react.useEffect)(() => {
			if (job === null || ![
				"queued",
				"resolving",
				"downloading"
			].includes(job.state)) return;
			const controller = new AbortController();
			let timer;
			let stopped = false;
			const poll = async () => {
				try {
					const next = await getAcquisition(job.id, controller.signal);
					if (stopped) return;
					setJob(next);
					if (next.state === "completed") {
						const book = await getAcquisitionResult(next.id);
						if (stopped) return;
						await loadOnlineBook(book, next.txtError ? `TXT 保存失败：${next.txtError}` : next.txtPath ? `TXT 已保存：${next.txtPath}` : void 0);
						if (!stopped) onOpened();
						return;
					}
					if (["failed", "cancelled"].includes(next.state)) return;
					timer = globalThis.setTimeout(() => {
						poll();
					}, POLL_INTERVAL_MS);
				} catch (caught) {
					if (controller.signal.aborted) return;
					setError(caught instanceof Error ? caught.message : "抓取状态查询失败。");
				}
			};
			poll();
			return () => {
				stopped = true;
				controller.abort();
				if (timer !== void 0) globalThis.clearTimeout(timer);
			};
		}, [
			job?.id,
			loadOnlineBook,
			onOpened
		]);
		const submit = async (event) => {
			event.preventDefault();
			const normalized = query.trim();
			if (normalized.length === 0) return;
			searchController.current?.abort();
			const controller = new AbortController();
			searchController.current = controller;
			setSearching(true);
			setError(null);
			setJob(null);
			try {
				const response = await searchOnlineBooks(normalized, controller.signal);
				setResults(response.results);
				setFailedSources(response.failedSources);
				setSearchedSources(response.searchedSources);
			} catch (caught) {
				if (!(caught instanceof DOMException && caught.name === "AbortError")) setError(caught instanceof Error ? caught.message : "在线搜书失败。");
			} finally {
				if (searchController.current === controller) setSearching(false);
			}
		};
		const acquire = async (result) => {
			setError(null);
			try {
				setJob(await createAcquisition(result.id));
			} catch (caught) {
				setError(caught instanceof Error ? caught.message : "无法创建抓取任务。");
			}
		};
		const readOnline = async (result) => {
			setOpening(true);
			setError(null);
			try {
				await startOnlineReading(result.id);
				onOpened();
			} catch (caught) {
				setError(caught instanceof Error ? caught.message : "在线阅读失败。");
			} finally {
				setOpening(false);
			}
		};
		const cancel = async () => {
			if (job === null) return;
			try {
				await cancelAcquisition(job.id);
				setJob({
					...job,
					state: "cancelled",
					error: "抓取已取消。"
				});
			} catch (caught) {
				setError(caught instanceof Error ? caught.message : "取消抓取失败。");
			}
		};
		const activeJob = job !== null && [
			"queued",
			"resolving",
			"downloading"
		].includes(job.state);
		const percent = job !== null && job.totalChapters > 0 ? Math.min(100, job.completedChapters / job.totalChapters * 100) : 0;
		if (managingRules) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RuleManagerPanel, { onBack: () => setManagingRules(false) });
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "dnr-online-panel",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "dnr-online-heading",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "dnr-online-back",
							type: "button",
							onClick: onBack,
							"aria-label": "返回",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								name: "chevron-left",
								width: "16",
								height: "16"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "返回" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "在线搜书" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "聚合已启用书源" })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							disabled: activeJob || searching || opening,
							onClick: () => setManagingRules(true),
							children: "书源管理"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "dnr-online-search",
					onSubmit: (event) => {
						submit(event);
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "dnr-search-field",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "search" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: query,
							maxLength: 100,
							onChange: (event) => setQuery(event.currentTarget.value),
							placeholder: "输入书名或作者",
							"aria-label": "书名或作者"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "dnr-primary-button",
						type: "submit",
						disabled: searching || activeJob || opening,
						children: searching ? "正在搜索…" : "搜书"
					})]
				}),
				searchedSources > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "dnr-online-summary",
					children: [
						"已搜索 ",
						searchedSources,
						" 个书源",
						failedSources > 0 ? `，${failedSources} 个暂时失败` : "",
						"，共 ",
						results.length,
						" 条结果。"
					]
				}),
				error !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "dnr-alert",
					role: "alert",
					children: error
				}),
				opening && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					role: "status",
					children: "正在加载目录和阅读章节…"
				}),
				job !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `dnr-acquisition dnr-acquisition--${job.state}`,
					"aria-live": "polite",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: job.bookName }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: statusText(job) }),
						job.totalChapters > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "dnr-acquisition-progress",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: { width: `${percent}%` } })
						}),
						job.retries > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [
							"已重试 ",
							job.retries,
							" 次"
						] }),
						activeJob && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								cancel();
							},
							children: "取消抓取"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dnr-online-results",
					children: [results.map((result) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "dnr-online-result-heading",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: result.bookName }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: metadata(result) || "暂无书籍元数据" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: result.sourceName })]
						}),
						(result.latestChapter || result.lastUpdateTime) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "dnr-online-latest",
							children: [
								result.latestChapter,
								result.latestChapter && result.lastUpdateTime ? " · " : "",
								result.lastUpdateTime
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "dnr-online-actions",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "dnr-primary-button",
									type: "button",
									disabled: activeJob || opening,
									onClick: () => {
										readOnline(result);
									},
									children: "在线阅读"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									disabled: activeJob || opening,
									onClick: () => {
										acquire(result);
									},
									children: "加入书库并阅读"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: result.sourceUrl,
									target: "_blank",
									rel: "noreferrer",
									children: "源站链接"
								})
							]
						})
					] }, result.id)), !searching && searchedSources > 0 && results.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "dnr-empty-small",
						children: "没有找到匹配书籍，可以换个关键词。"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "dnr-online-disclaimer",
					children: [
						"搜索和抓取请求由本机 Host 直接访问第三方书源；可用性与内容不作保证，请遵守来源网站规则。 内置规则与设计源自 ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://github.com/freeok/so-novel",
							target: "_blank",
							rel: "noreferrer",
							children: "SoNovel"
						}),
						"， 本插件完整源码按 ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://github.com/zycode1561/deepseek-novel-reader",
							target: "_blank",
							rel: "noreferrer",
							children: "AGPL-3.0"
						}),
						" 提供。"
					]
				})
			]
		});
	}

//#endregion
//#region src/client/fanqie/api.ts
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom());
	var FanqieApiError = class extends Error {
		constructor(code, message) {
			super(message);
			this.code = code;
		}
	};
	async function request(path, method = "GET", body, signal) {
		let response;
		try {
			response = await fetch(`/dsh-novel-reader/fanqie${path}`, {
				method,
				credentials: "same-origin",
				cache: "no-store",
				...signal ? { signal } : {},
				...body === void 0 ? {} : {
					headers: { "content-type": "application/json" },
					body: JSON.stringify(body)
				}
			});
		} catch {
			signal?.throwIfAborted();
			throw new FanqieApiError("HOST_UNAVAILABLE", "无法连接阅读器服务。");
		}
		let value;
		try {
			value = await response.json();
		} catch {
			throw new FanqieApiError("HOST_UNAVAILABLE", "番茄同步模块未启用或服务尚未更新。");
		}
		if (!response.ok) throw new FanqieApiError(value?.error?.code ?? "REQUEST_FAILED", value?.error?.message ?? "番茄同步失败。");
		return value;
	}
	const getFanqieStatus = (signal) => request("/status", "GET", void 0, signal);
	const startFanqieLogin = (signal) => request("/login", "POST", void 0, signal);
	const checkFanqieLogin = (id$1, signal) => request("/login/check", "POST", { id: id$1 }, signal);
	const cancelFanqieLogin = (id$1) => request("/login", "DELETE", { id: id$1 });
	const logoutFanqie = () => request("/logout", "POST");
	const getFanqieShelf = (signal) => request("/shelf", "POST", void 0, signal);
	const openFanqieBook = (bookId, name, signal, fromPhone = false) => request("/books/open", "POST", {
		bookId,
		name,
		fromPhone
	}, signal);
	const readFanqieChapter = (accountId, bookId, chapterId, signal) => request("/books/chapter", "POST", {
		accountId,
		bookId,
		chapterId
	}, signal);
	const saveFanqiePosition = (accountId, bookId, position) => request("/books/position", "POST", {
		accountId,
		bookId,
		position
	});

//#endregion
//#region src/client/components/FanqiePanel.tsx
/** Independent remote shelf: never reads the local ReaderContext. */
	function FanqiePanel({ account, onRead, opening = false }) {
		const [login, setLogin] = (0, import_react.useState)(null);
		const [shelf, setShelf] = (0, import_react.useState)([]);
		const [busy, setBusy] = (0, import_react.useState)(false);
		const [error, setError] = (0, import_react.useState)("");
		const [loginState, setLoginState] = (0, import_react.useState)("等待手机扫码");
		const alive = (0, import_react.useRef)(true);
		const loginRequest = (0, import_react.useRef)(null);
		const loginId = (0, import_react.useRef)(null);
		const disabled = busy || opening;
		(0, import_react.useEffect)(() => {
			alive.current = true;
			account.refreshStatus().catch((error$1) => {
				if (alive.current) setError(error$1 instanceof Error ? error$1.message : "读取账号状态失败。");
			});
			return () => {
				alive.current = false;
				loginRequest.current?.abort();
				if (loginId.current) cancelFanqieLogin(loginId.current).catch(() => {});
			};
		}, [account.refreshStatus]);
		(0, import_react.useEffect)(() => {
			const controller = new AbortController();
			setShelf([]);
			setBusy(false);
			setError("");
			if (account.status?.loggedIn) {
				setBusy(true);
				getFanqieShelf(controller.signal).then((value) => {
					if (!controller.signal.aborted) setShelf(value);
				}).catch((error$1) => {
					if (!controller.signal.aborted) setError(error$1 instanceof Error ? error$1.message : "读取书架失败。");
				}).finally(() => {
					if (!controller.signal.aborted) setBusy(false);
				});
			}
			return () => controller.abort();
		}, [account.status?.accountId, account.status?.loggedIn]);
		(0, import_react.useEffect)(() => {
			if (!login) return;
			const controller = new AbortController();
			let timer;
			const poll = async () => {
				if (Date.now() >= login.expiresAt) {
					setError("二维码已过期，请重新扫码。");
					setLogin(null);
					return;
				}
				try {
					const result = await checkFanqieLogin(login.id, controller.signal);
					if (controller.signal.aborted) return;
					if (result.state === "confirmed") {
						loginId.current = null;
						setLogin(null);
						account.setStatus(result.status);
						setError("");
						return;
					}
					if (result.state === "expired") {
						setLogin(null);
						setError("二维码已过期，请重新扫码。");
						return;
					}
					setLoginState([
						"scanned",
						"confirm",
						"confirming"
					].includes(result.state) ? "已扫码，请在手机确认登录" : "等待手机扫码");
				} catch (error$1) {
					if (controller.signal.aborted) return;
					setError(error$1 instanceof Error ? error$1.message : "检查登录状态失败。");
				}
				timer = setTimeout(() => {
					poll();
				}, account.status?.pollIntervalMs ?? 2e3);
			};
			timer = setTimeout(() => {
				poll();
			}, account.status?.pollIntervalMs ?? 2e3);
			return () => {
				controller.abort();
				if (timer) clearTimeout(timer);
			};
		}, [
			login,
			account.status?.pollIntervalMs,
			account.setStatus
		]);
		const action = async (operation) => {
			setBusy(true);
			setError("");
			try {
				await operation();
			} catch (error$1) {
				if (alive.current) setError(error$1 instanceof Error ? error$1.message : "操作失败，请重试。");
			} finally {
				if (alive.current) setBusy(false);
			}
		};
		const beginLogin = () => void action(async () => {
			loginRequest.current?.abort();
			if (loginId.current) await cancelFanqieLogin(loginId.current).catch(() => {});
			const controller = new AbortController();
			loginRequest.current = controller;
			const next = await startFanqieLogin(controller.signal);
			if (!alive.current || controller.signal.aborted) {
				cancelFanqieLogin(next.id).catch(() => {});
				return;
			}
			loginId.current = next.id;
			setLoginState("等待手机扫码");
			setLogin(next);
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "dnr-fanqie-panel",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "dnr-panel-heading",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "番茄书架" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "dnr-fanqie-hint",
					children: "直接打开番茄小说，续读手机章节。"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dnr-fanqie-account",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: account.status?.loggedIn ? "已连接番茄账号" : "尚未登录番茄" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "dnr-fanqie-actions",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								disabled,
								onClick: beginLogin,
								children: account.status?.loggedIn ? "更换账号" : "扫码登录"
							}), account.status?.loggedIn && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								disabled,
								onClick: () => void action(async () => {
									setLogin(null);
									loginId.current = null;
									setShelf([]);
									account.setStatus(await logoutFanqie());
								}),
								children: "退出登录"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								disabled,
								onClick: () => void action(async () => {
									setShelf(await getFanqieShelf());
									await account.refreshStatus();
								}),
								children: "刷新书架"
							})] })]
						}),
						login && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "dnr-fanqie-qr",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: login.qrImage,
									alt: "番茄小说登录二维码"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									role: "status",
									children: [loginState, "，请使用番茄小说 App 扫码。"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										cancelFanqieLogin(login.id).catch(() => {});
										loginId.current = null;
										setLogin(null);
									},
									children: "取消扫码"
								})
							]
						})
					]
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					role: "alert",
					className: "dnr-alert",
					children: error
				}),
				account.status?.loggedIn && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					busy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						role: "status",
						children: "正在读取番茄书架…"
					}),
					!busy && !shelf.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "dnr-fanqie-hint",
						children: "书架为空，或暂未读取成功。可在手机添加书籍后刷新。"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "dnr-fanqie-books",
						children: shelf.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: item.name }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: item.author }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								disabled,
								onClick: () => onRead(item),
								children: item.chapterId ? "继续阅读" : "开始阅读"
							})
						] }, item.id))
					})
				] })
			]
		});
	}

//#endregion
//#region src/client/components/TableOfContents.tsx
	function TableOfContents({ embedded = false, onSelect }) {
		const { book, progress, goToChapter } = useReader();
		const [query, setQuery] = (0, import_react.useState)("");
		const listRef = (0, import_react.useRef)(null);
		const chapters = (0, import_react.useMemo)(() => {
			if (book === null) return [];
			const needle = query.trim().toLocaleLowerCase();
			return needle.length === 0 ? book.chapters : book.chapters.filter((chapter) => chapter.title.toLocaleLowerCase().includes(needle));
		}, [book, query]);
		(0, import_react.useLayoutEffect)(() => {
			listRef.current?.querySelector("[aria-current=\"true\"]")?.scrollIntoView({
				block: "center",
				inline: "nearest"
			});
		}, [chapters, progress?.chapterIndex]);
		if (book === null) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: `dnr-toc ${embedded ? "dnr-toc--embedded" : ""}`,
			"aria-label": "目录",
			children: [
				!embedded && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dnr-panel-heading",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "目录" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [book.chapters.length, " 章"] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "dnr-search-field dnr-search-field--small",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							name: "search",
							width: "15",
							height: "15"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: query,
							onChange: (event) => setQuery(event.target.value),
							placeholder: "筛选章节"
						}),
						query !== "" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "清空筛选",
							onClick: () => setQuery(""),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								name: "close",
								width: "13",
								height: "13"
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: listRef,
					className: "dnr-toc-list",
					role: "tree",
					children: [chapters.map((chapter) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						role: "treeitem",
						"aria-current": progress?.chapterIndex === chapter.index ? "true" : void 0,
						className: progress?.chapterIndex === chapter.index ? "is-active" : "",
						style: { paddingLeft: `${12 + (chapter.level - 1) * 12}px` },
						onClick: () => {
							goToChapter(chapter.index);
							onSelect?.();
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "dnr-toc-index",
							children: String(chapter.index + 1).padStart(2, "0")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: chapter.title })]
					}, chapter.id)), chapters.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "dnr-empty-small",
						children: "没有匹配的章节"
					})]
				})
			]
		});
	}

//#endregion
//#region src/client/components/FanqieWorkspace.tsx
	function readingBook(open, text, index) {
		return {
			...buildReadingBook({
				id: `${open.accountId}:${open.bookId}`,
				sourceName: "番茄小说",
				chapters: open.chapters,
				reference: {
					sourceId: "fanqie",
					bookUrl: `https://fanqienovel.com/page/${open.bookId}`,
					bookName: open.name,
					keyword: open.name
				}
			}, {
				index,
				title: text.title,
				paragraphs: text.paragraphs
			}),
			id: `fanqie-${open.bookId}`
		};
	}
	/** Separate reading state and Host API; no local books, recents or progress are written. */
	function FanqieWorkspace({ active: active$1, toolbarTarget = null }) {
		const local = useReader();
		const [status, updateStatus] = (0, import_react.useState)(null);
		const [book, setBook] = (0, import_react.useState)(null);
		const [progress, setProgress] = (0, import_react.useState)(null);
		const [pendingParagraph, setPendingParagraph] = (0, import_react.useState)(null);
		const [view, setView] = (0, import_react.useState)("shelf");
		const [loading, setLoading] = (0, import_react.useState)(false);
		const [syncing, setSyncing] = (0, import_react.useState)(false);
		const [error, setError] = (0, import_react.useState)(null);
		const [fontFamily, setFontFamily] = (0, import_react.useState)();
		const [failedIndex, setFailedIndex] = (0, import_react.useState)(null);
		const opened = (0, import_react.useRef)(null);
		const committed = (0, import_react.useRef)(null);
		const accountId = (0, import_react.useRef)(null);
		const request$2 = (0, import_react.useRef)(null);
		const generation = (0, import_react.useRef)(0);
		const snapshot = (0, import_react.useRef)({
			book,
			progress
		});
		snapshot.current = {
			book,
			progress
		};
		const readerBody = (0, import_react.useRef)(null);
		const fonts$1 = (0, import_react.useRef)(/* @__PURE__ */ new Map());
		const flushPosition = (0, import_react.useCallback)(() => {
			const session = committed.current, position = snapshot.current.progress;
			if (!session || !position || snapshot.current.book?.id !== `fanqie-${session.bookId}` || accountId.current !== session.accountId) return;
			const chapter = session.chapters[position.chapterIndex];
			if (chapter) saveFanqiePosition(session.accountId, session.bookId, {
				chapterId: chapter.id,
				paragraphIndex: position.paragraphIndex,
				remoteChapterId: session.remoteChapterId,
				updatedAt: position.updatedAt
			}).catch(() => {});
		}, []);
		const setStatus = (0, import_react.useCallback)((value) => {
			if (accountId.current !== value.accountId) {
				generation.current++;
				request$2.current?.abort();
				opened.current = null;
				committed.current = null;
				setBook(null);
				setProgress(null);
				setFontFamily(void 0);
				setView("shelf");
				setLoading(false);
				setError(null);
			}
			accountId.current = value.accountId;
			updateStatus(value);
		}, []);
		const refreshStatus = (0, import_react.useCallback)(async () => {
			const value = await getFanqieStatus();
			setStatus(value);
			return value;
		}, [setStatus]);
		const account = (0, import_react.useMemo)(() => ({
			status,
			setStatus,
			refreshStatus
		}), [
			status,
			setStatus,
			refreshStatus
		]);
		(0, import_react.useEffect)(() => () => {
			generation.current++;
			request$2.current?.abort();
			flushPosition();
			for (const font of fonts$1.current.values()) document.fonts.delete(font.face);
			fonts$1.current.clear();
		}, [flushPosition]);
		(0, import_react.useEffect)(() => {
			if (!active$1) {
				flushPosition();
				generation.current++;
				request$2.current?.abort();
				setLoading(false);
			}
		}, [active$1, flushPosition]);
		const installFont = async (text, signal) => {
			if (!text.fontData) return void 0;
			const cached = fonts$1.current.get(text.fontData);
			if (cached) return cached.family;
			const family = `dnr-fanqie-${fonts$1.current.size}`;
			const face = new FontFace(family, `url(${text.fontData})`, { unicodeRange: "U+E000-F8FF" });
			await face.load();
			signal.throwIfAborted();
			document.fonts.add(face);
			fonts$1.current.set(text.fontData, {
				face,
				family
			});
			return family;
		};
		const showChapter = async (session, index, paragraph, signal, gen) => {
			const chapter = session.chapters[index];
			if (!chapter) throw new Error("未找到该章节。");
			const text = await readFanqieChapter(session.accountId, session.bookId, chapter.id, signal);
			signal.throwIfAborted();
			if (text.id !== chapter.id) throw new Error("章节响应与请求不匹配。");
			const family = await installFont(text, signal);
			signal.throwIfAborted();
			if (gen !== generation.current || accountId.current !== session.accountId) return;
			const nextBook = readingBook(session, text, index);
			const target = Math.max(0, Math.min(nextBook.paragraphs.length - 1, paragraph));
			opened.current = session;
			committed.current = session;
			setBook(nextBook);
			setProgress({
				bookId: nextBook.id,
				chapterIndex: index,
				paragraphIndex: target,
				scrollOffset: 0,
				updatedAt: Date.now(),
				readingSeconds: 0
			});
			setFontFamily(family);
			setPendingParagraph(target);
			setFailedIndex(null);
			setView("reader");
		};
		const handleError = (caught, signal, gen) => {
			if (signal.aborted || gen !== generation.current) return;
			setError(caught instanceof Error ? caught.message : "读取番茄章节失败。");
			if (caught instanceof FanqieApiError && caught.code === "AUTH_EXPIRED") refreshStatus().catch(() => {});
		};
		const open = (0, import_react.useCallback)(async (item, fromPhone = false) => {
			request$2.current?.abort();
			const controller = new AbortController();
			request$2.current = controller;
			const gen = ++generation.current;
			setLoading(true);
			setError(null);
			if (committed.current?.bookId !== item.id) {
				flushPosition();
				setBook(null);
				setProgress(null);
				opened.current = null;
				committed.current = null;
				setView("shelf");
			}
			try {
				const session = await openFanqieBook(item.id, item.name, controller.signal, fromPhone);
				controller.signal.throwIfAborted();
				if (gen !== generation.current || session.accountId !== accountId.current) return;
				opened.current = session;
				setFailedIndex(session.chapterIndex);
				const current = snapshot.current;
				const paragraph = fromPhone && current.book?.id === `fanqie-${session.bookId}` && current.progress?.chapterIndex === session.chapterIndex ? current.progress.paragraphIndex : session.paragraphIndex;
				await showChapter(session, session.chapterIndex, paragraph, controller.signal, gen);
			} catch (caught) {
				handleError(caught, controller.signal, gen);
			} finally {
				if (gen === generation.current) setLoading(false);
			}
		}, [refreshStatus, flushPosition]);
		const goToChapter = (0, import_react.useCallback)((index, paragraph = 0) => {
			const session = opened.current;
			if (!session || !Number.isSafeInteger(index) || !session.chapters[index]) return;
			request$2.current?.abort();
			const controller = new AbortController();
			request$2.current = controller;
			const gen = ++generation.current;
			setLoading(true);
			setError(null);
			setFailedIndex(index);
			showChapter(session, index, paragraph, controller.signal, gen).catch((caught) => handleError(caught, controller.signal, gen)).finally(() => {
				if (gen === generation.current) setLoading(false);
			});
		}, [refreshStatus]);
		(0, import_react.useEffect)(() => {
			const session = committed.current;
			if (!session || !book || !progress || loading || error || book.id !== `fanqie-${session.bookId}` || session.accountId !== status?.accountId) return;
			const chapter = session.chapters[progress.chapterIndex];
			if (!chapter) return;
			const timer = setTimeout(() => {
				saveFanqiePosition(session.accountId, session.bookId, {
					chapterId: chapter.id,
					paragraphIndex: progress.paragraphIndex,
					remoteChapterId: session.remoteChapterId,
					updatedAt: progress.updatedAt
				}).catch((caught) => {
					if (accountId.current === session.accountId) setError(caught instanceof Error ? caught.message : "保存番茄阅读位置失败。");
				});
			}, 500);
			return () => clearTimeout(timer);
		}, [
			book,
			progress,
			loading,
			error,
			status?.accountId
		]);
		(0, import_react.useEffect)(() => {
			if (!active$1) return;
			const onKey = (event) => {
				if (!local.panel.expanded || document.querySelector("[aria-modal=\"true\"]") || event.defaultPrevented || event.target instanceof Element && event.target.closest("input,textarea,select,[contenteditable=\"true\"]")) return;
				if (event.key === "Escape" && view !== "reader" && book) {
					setView("reader");
					event.preventDefault();
					return;
				}
				if (view !== "reader" || !progress || loading) return;
				const direction = event.key === "ArrowLeft" ? -1 : event.key === "ArrowRight" ? 1 : 0;
				if (!direction) return;
				event.preventDefault();
				if (local.settings.pageMode === "paged") readerBody.current?.turnPage(direction);
				else goToChapter(progress.chapterIndex + direction);
			};
			window.addEventListener("keydown", onKey, { capture: true });
			return () => window.removeEventListener("keydown", onKey, { capture: true });
		}, [
			active$1,
			book,
			view,
			progress,
			loading,
			local.panel.expanded,
			local.settings.pageMode,
			goToChapter
		]);
		const context = {
			...local,
			book,
			progress,
			loading,
			error,
			pendingParagraph,
			recents: [],
			bookmarks: [],
			notices: [],
			clearError: () => setError(null),
			clearPendingParagraph: () => setPendingParagraph(null),
			goToChapter,
			goToParagraph: (index, chapterIndex) => {
				if (chapterIndex !== void 0 && chapterIndex !== progress?.chapterIndex) goToChapter(chapterIndex, index);
				else {
					setPendingParagraph(index);
					setProgress((current) => current ? {
						...current,
						paragraphIndex: index,
						updatedAt: Date.now()
					} : null);
				}
			},
			markParagraphVisible: (index, scrollOffset) => setProgress((current) => current ? {
				...current,
				paragraphIndex: index,
				scrollOffset: scrollOffset ?? current.scrollOffset,
				updatedAt: Date.now()
			} : null),
			loadFile: async () => false,
			loadOnlineBook: async () => {},
			startOnlineReading: async () => {},
			openRecent: async () => false,
			removeRecent: async () => {},
			applySyncedChapter: async () => null
		};
		const fallbackChapter = opened.current?.chapters[failedIndex ?? progress?.chapterIndex ?? 0]?.id;
		const toolbar = book && active$1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "dnr-fanqie-toolbar",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "dnr-fanqie-navigation",
				"aria-label": "番茄阅读工具",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-label": "番茄书架",
						title: "番茄书架",
						"aria-current": view === "shelf" ? "page" : void 0,
						className: view === "shelf" ? "is-active" : "",
						onClick: () => setView("shelf"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "library" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "书架" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-current": view === "reader" ? "page" : void 0,
						className: view === "reader" ? "is-active" : "",
						onClick: () => setView("reader"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "book" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "正文" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-current": view === "toc" ? "page" : void 0,
						className: view === "toc" ? "is-active" : "",
						onClick: () => setView(view === "toc" ? "reader" : "toc"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "toc" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "目录" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-current": view === "settings" ? "page" : void 0,
						className: view === "settings" ? "is-active" : "",
						onClick: () => setView(view === "settings" ? "reader" : "settings"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "settings" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "设置" })]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: `dnr-fanqie-sync ${syncing ? "is-syncing" : ""}`,
				type: "button",
				"aria-label": "同步手机进度",
				title: "同步手机阅读进度",
				"aria-busy": syncing,
				disabled: loading,
				onClick: () => {
					if (!opened.current) return;
					setSyncing(true);
					open({
						id: opened.current.bookId,
						name: opened.current.name
					}, true).finally(() => setSyncing(false));
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "sync" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: syncing ? "同步中…" : "同步进度" })]
			})]
		}) : null;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReaderContext.Provider, {
			value: context,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "dnr-fanqie-workspace",
				children: [
					toolbarTarget ? (0, import_react_dom.createPortal)(toolbar, toolbarTarget) : toolbar,
					loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "dnr-notice-strip",
						role: "status",
						children: "正在加载番茄章节…"
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "dnr-alert",
						role: "alert",
						children: [
							error,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								disabled: loading,
								onClick: () => {
									if (failedIndex !== null) goToChapter(failedIndex);
									else setError(null);
								},
								children: "重试"
							}),
							fallbackChapter && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `https://fanqienovel.com/reader/${fallbackChapter}`,
								target: "_blank",
								rel: "noreferrer",
								children: "前往番茄官网阅读"
							})
						]
					}),
					view === "shelf" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FanqiePanel, {
						account,
						onRead: (item) => {
							open(item);
						},
						opening: loading
					}),
					book && view === "toc" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableOfContents, { onSelect: () => setView("reader") }),
					book && view === "settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsPanel, {}),
					book && view === "reader" && active$1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `dnr-reading-grid ${local.settings.tocPosition === "left" ? "has-toc" : ""}`,
						children: [local.settings.tocPosition === "left" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableOfContents, { embedded: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReaderBody, {
							ref: readerBody,
							searchQuery: "",
							...fontFamily ? { glyphFont: fontFamily } : {}
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
						className: "dnr-footer",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								disabled: loading || !progress || progress.chapterIndex === 0,
								onClick: () => goToChapter(progress.chapterIndex - 1),
								children: "上一章"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "dnr-chapter-title",
								children: book.chapters[progress?.chapterIndex ?? 0]?.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								disabled: loading || !progress || progress.chapterIndex >= book.chapters.length - 1,
								onClick: () => goToChapter(progress.chapterIndex + 1),
								children: "下一章"
							})
						]
					})] })
				]
			})
		});
	}

//#endregion
//#region src/client/components/NovelReaderApp.tsx
	function durationLabel(seconds) {
		if (seconds < 60) return "< 1 分钟";
		const minutes = Math.floor(seconds / 60);
		if (minutes < 60) return `${minutes} 分钟`;
		return `${Math.floor(minutes / 60)} 小时 ${minutes % 60} 分`;
	}
	function NovelReaderApp() {
		const { book, panel, settings, progress, setReaderActive, error, loading, retryOnlineChapter, notices, goToChapter } = useReader();
		const supportsOnline = window.__CODEX_NOVEL_READER_PREVIEW_API__ === true;
		const hostTheme = useHostTheme();
		const colorScheme = settings.theme === "light" || settings.theme === "dark" ? settings.theme : hostTheme;
		const [view, setView] = (0, import_react.useState)(cloudHosted ? "cloud" : "reader");
		const [toolbarTarget, setToolbarTarget] = (0, import_react.useState)(null);
		const [fanqieVisited, setFanqieVisited] = (0, import_react.useState)(false);
		(0, import_react.useEffect)(() => {
			setReaderActive(view === "reader");
			if (view === "fanqie") setFanqieVisited(true);
		}, [view, setReaderActive]);
		const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
		const [hostNotice, setHostNotice] = (0, import_react.useState)(null);
		const readerBodyRef = (0, import_react.useRef)(null);
		const navigateChapter = (0, import_react.useCallback)((index) => {
			if (readerBodyRef.current) readerBodyRef.current.goToChapter(index);
			else goToChapter(index);
		}, [goToChapter]);
		const progressSnapshot = (0, import_react.useMemo)(() => book !== null && progress !== null ? calculateProgress(book, progress) : {
			chapterPercent: 0,
			bookPercent: 0
		}, [book, progress]);
		(0, import_react.useEffect)(() => {
			const onKeyDown = (event) => {
				if (view === "fanqie") return;
				const editing = event.target?.matches("input, textarea, select, [contenteditable=\"true\"]") ?? false;
				if ((event.ctrlKey || event.metaKey) && event.key.toLocaleLowerCase() === "f") {
					event.preventDefault();
					setView("search");
					return;
				}
				if (event.key === "Escape" && view !== "reader") {
					event.preventDefault();
					setView("reader");
					return;
				}
				if (editing || view !== "reader" || book === null || progress === null) return;
				if (event.key === "ArrowLeft") {
					event.preventDefault();
					if (settings.pageMode === "paged") readerBodyRef.current?.turnPage(-1);
					else navigateChapter(progress.chapterIndex - 1);
				}
				if (event.key === "ArrowRight") {
					event.preventDefault();
					if (settings.pageMode === "paged") readerBodyRef.current?.turnPage(1);
					else navigateChapter(progress.chapterIndex + 1);
				}
			};
			window.addEventListener("keydown", onKeyDown, { capture: true });
			return () => window.removeEventListener("keydown", onKeyDown, { capture: true });
		}, [
			book,
			navigateChapter,
			progress,
			settings.pageMode,
			view
		]);
		const changeDisplay = async (mode) => {
			try {
				if (!await requestDisplayMode(mode)) setHostNotice("当前 Codex 客户端暂不支持切换此显示模式。");
			} catch {
				setHostNotice("显示模式切换被宿主拒绝，请继续使用当前模式。");
			}
		};
		const currentChapter = progress?.chapterIndex ?? 0;
		const currentChapterTitle = book?.chapters[currentChapter]?.title ?? "";
		const showReader = book !== null && view === "reader";
		const toolsVisible = view !== "reader" || settings.keepNavigationVisible || panel.toolsVisible;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: `dnr-shell dnr-theme-${settings.theme} ${toolsVisible ? "" : "is-immersive"} ${settings.keepNavigationVisible ? "is-navigation-pinned" : ""}`,
			"data-color-scheme": colorScheme,
			"aria-label": "Codex 小说阅读器",
			children: [
				(book !== null || view === "fanqie") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "dnr-top-dock",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "dnr-top-controls",
						children: [
							supportsOnline && (book !== null || view === "fanqie") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
								className: "dnr-library-switch",
								"aria-label": "书库来源",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									"aria-pressed": view !== "fanqie",
									onClick: () => setView("reader"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "file" }), "本地书库"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									"aria-pressed": view === "fanqie",
									onClick: () => setView("fanqie"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "library" }), "番茄小说"]
								})]
							}),
							book !== null && view !== "fanqie" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "dnr-toolbar-dock",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
									className: "dnr-toolbar",
									"aria-label": "阅读工具",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setView("cloud"),
											title: "云端书库",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "globe" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "云书库" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											"aria-label": "目录",
											title: "目录",
											className: view === "toc" ? "is-active" : "",
											onClick: () => setView(view === "toc" ? "reader" : "toc"),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "toc" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "目录" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											"aria-label": "搜索",
											title: "搜索",
											className: view === "search" ? "is-active" : "",
											onClick: () => setView(view === "search" ? "reader" : "search"),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "search" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "搜索" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											"aria-label": "阅读设置",
											title: "阅读设置",
											className: view === "settings" ? "is-active" : "",
											onClick: () => setView(view === "settings" ? "reader" : "settings"),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "settings" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "设置" })]
										}),
										supportsOnline && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											"aria-label": "在线搜书",
											title: "在线搜书",
											onClick: () => setView("online"),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "globe" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "搜书" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											"aria-label": "更换文件",
											title: "更换文件",
											className: view === "file" ? "is-active" : "",
											onClick: () => setView(view === "file" ? "reader" : "file"),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "file" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "文件" })]
										}),
										window.openai?.requestDisplayMode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											"aria-label": "切换画中画",
											title: "画中画",
											onClick: () => void changeDisplay("pip"),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "pip" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "画中画" })]
										}),
										!cloudHosted && window.openai?.requestDisplayMode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											"aria-label": "切换全屏",
											title: "全屏",
											onClick: () => void changeDisplay("fullscreen"),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "fullscreen" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "全屏" })]
										})
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: setToolbarTarget })
						]
					})
				}),
				(notices.length > 0 || hostNotice !== null) && book !== null && view !== "fanqie" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "dnr-notice-strip",
					onClick: () => setHostNotice(null),
					children: hostNotice ?? notices[0]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudSync, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudReadingActivity, { active: showReader }),
				view !== "cloud" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UploadStatus, {
					compact: true,
					onOpen: () => setView("cloud")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
					className: "dnr-main",
					children: [
						view === "cloud" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudLibrary, {
							onBack: () => setView("reader"),
							onOpened: () => setView("reader")
						}),
						view === "online" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OnlineSearchPanel, {
							onBack: () => setView("reader"),
							onOpened: () => setView("reader")
						}),
						book?.onlineReading && error && view === "reader" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "dnr-alert",
							role: "alert",
							children: [error, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: retryOnlineChapter,
								children: "重试章节"
							})]
						}),
						book?.onlineReading && loading && view === "reader" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "dnr-notice-strip",
							children: "正在加载章节…"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "dnr-fanqie-container",
							hidden: view !== "fanqie",
							children: fanqieVisited && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FanqieWorkspace, {
								active: view === "fanqie",
								toolbarTarget
							})
						}),
						book === null && view !== "cloud" && view !== "online" && view !== "fanqie" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileLoader, {
							onBrowseCloud: () => setView("cloud"),
							onOpened: () => setView("reader"),
							...supportsOnline ? {
								onBrowseOnline: () => setView("online"),
								onBrowseFanqie: () => setView("fanqie")
							} : {}
						}),
						book !== null && view === "file" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileLoader, {
							onBrowseCloud: () => setView("cloud"),
							compact: true,
							onOpened: () => setView("reader"),
							...supportsOnline ? {
								onBrowseOnline: () => setView("online"),
								onBrowseFanqie: () => setView("fanqie")
							} : {}
						}),
						book !== null && view === "toc" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableOfContents, { onSelect: () => setView("reader") }),
						book !== null && view === "search" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchPanel, {
							query: searchQuery,
							onQueryChange: setSearchQuery,
							onSelect: () => setView("reader")
						}),
						book !== null && view === "settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsPanel, {}),
						showReader && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `dnr-reading-grid ${settings.tocPosition === "left" ? "has-toc" : ""}`,
							children: [settings.tocPosition === "left" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableOfContents, { embedded: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReaderBody, {
								ref: readerBodyRef,
								searchQuery
							})]
						})
					]
				}),
				showReader && progress !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
					className: "dnr-footer",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => navigateChapter(currentChapter - 1),
							disabled: currentChapter <= 0,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "chevron-left" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "上一章" })]
						}),
						settings.footerDisplay === "chapter-progress" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "dnr-chapter-progress",
							title: `本章 ${progressSnapshot.chapterPercent.toFixed(1)}% · 全书 ${progressSnapshot.bookPercent.toFixed(1)}%`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { style: { width: `${progressSnapshot.chapterPercent}%` } })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "dnr-reading-time",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								name: "clock",
								width: "14",
								height: "14"
							}), durationLabel(progress.readingSeconds)]
						})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "dnr-chapter-title",
							title: currentChapterTitle,
							children: currentChapterTitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => navigateChapter(currentChapter + 1),
							disabled: currentChapter >= book.chapters.length - 1,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "下一章" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { name: "chevron-right" })]
						})
					]
				})
			]
		});
	}

//#endregion
//#region src/client/styles.ts
/** Codex panel surfaces: neutral controls, subtle dividers, and no nested app frame. */
	const readerStyles = String.raw`
:root { color-scheme: light dark; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif; }
html, body, #root { width: 100%; height: 100dvh; min-height: 0; margin: 0; overflow: hidden; background: light-dark(#fff, #181818); }
:root:has(.dnr-shell[data-color-scheme="light"]) { color-scheme: light; }
:root:has(.dnr-shell[data-color-scheme="dark"]) { color-scheme: dark; }
.dnr-shell {
  --dnr-bg: #fff;
  --dnr-surface: #f9f9f9;
  --dnr-text: #1a1c1f;
  --dnr-muted: #6b6b6b;
  --dnr-line: rgba(26, 28, 31, .08);
  --dnr-accent: #1a1c1f;
  --dnr-accent-soft: rgba(26, 28, 31, .05);
  --dnr-on-accent: #fff;
  --dnr-mark: #e5e5e5;
  --dnr-reading-bg: var(--dnr-bg);
  --dnr-reading-text: var(--dnr-text);
  --dnr-error: #b13b3b;
  --dnr-footer-height: 44px;
  --dnr-sync-footer-offset: 0px;
  position: relative; display: flex; flex-direction: column; width: 100%; height: 100%; min-width: 0;
  color: var(--dnr-text); background: var(--dnr-bg); container-type: inline-size; overflow: hidden;
  font: 400 12px/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
  -webkit-font-smoothing: antialiased;
}
.dnr-shell[data-color-scheme="dark"] {
  --dnr-bg: #181818; --dnr-surface: #202020; --dnr-text: #dfdfdf; --dnr-muted: #999;
  --dnr-line: rgba(255, 255, 255, .08); --dnr-accent: #dfdfdf; --dnr-accent-soft: rgba(255, 255, 255, .06);
  --dnr-on-accent: #181818; --dnr-mark: #414141; --dnr-error: #f28b82;
}
.dnr-shell.dnr-theme-eye-care { --dnr-reading-bg: #edf3e6; --dnr-reading-text: #283328; --dnr-mark: #d4dfc8; }
.dnr-shell.dnr-theme-parchment { --dnr-reading-bg: #f3ead7; --dnr-reading-text: #3a3022; --dnr-mark: #e0d2b7; }
.dnr-shell * { box-sizing: border-box; }
.dnr-shell :is(button, input, select, textarea) { font: inherit; }
.dnr-shell button { color: inherit; cursor: pointer; }
.dnr-shell button:disabled { opacity: .4; cursor: default; }
.dnr-shell :is(button, input, select, textarea, a, summary):focus-visible { outline: 2px solid var(--dnr-accent); outline-offset: 2px; }
.dnr-shell input::placeholder, .dnr-shell textarea::placeholder { color: var(--dnr-muted); }
.dnr-shell :is(input[type="range"], input[type="checkbox"]) { accent-color: var(--dnr-accent); }
.dnr-shell ::selection { background: var(--dnr-mark); color: inherit; }
.dnr-shell :is(.dnr-toc-list, .dnr-reader-scroll, .dnr-settings, .dnr-search-panel, .dnr-online-panel, .dnr-file-loader, .dnr-rules-panel) {
  scrollbar-width: thin; scrollbar-color: color-mix(in srgb, var(--dnr-muted) 30%, transparent) transparent;
}
.dnr-launcher, .dnr-resize-handle, .dnr-collapse-button, .dnr-top-spacer { display: none !important; }

/* One hover target reveals both library switching and reading controls. */
.dnr-top-dock { position: relative; z-index: 8; flex: 0 0 auto; }
.dnr-top-controls { display: flex; flex-direction: column; background: var(--dnr-bg); }
@media (hover: hover) and (pointer: fine) {
  .dnr-top-dock { height: 12px; flex-basis: 12px; }
  .dnr-top-dock::after { content: ''; position: absolute; top: 4px; left: calc(50% - 18px); width: 36px; height: 3px; border-radius: 3px; background: var(--dnr-line); pointer-events: none; }
  .dnr-top-controls { position: absolute; top: 0; left: 0; right: 0; transform: translateY(calc(-100% - 2px)); opacity: 0; pointer-events: none; transition: transform 180ms ease, opacity 180ms ease; }
  .dnr-top-dock:hover .dnr-top-controls, .dnr-top-dock:has(:focus-visible) .dnr-top-controls { transform: translateY(0); opacity: 1; pointer-events: auto; box-shadow: 0 5px 12px var(--dnr-line); }
  .dnr-top-dock:hover::after, .dnr-top-dock:has(:focus-visible)::after { opacity: 0; }
}
.dnr-shell.is-navigation-pinned .dnr-top-dock { height: auto; flex-basis: auto; }
.dnr-shell.is-navigation-pinned .dnr-top-dock::after { display: none; }
.dnr-shell.is-navigation-pinned .dnr-top-controls { position: relative; transform: none; opacity: 1; pointer-events: auto; }
.dnr-toolbar-dock { position: relative; z-index: 4; height: 46px; flex: 0 0 46px; overflow: hidden; background: var(--dnr-bg); transition: height 180ms, flex-basis 180ms; }
.dnr-toolbar { height: 46px; display: grid; grid-auto-flow: column; grid-auto-columns: minmax(0, 1fr); gap: 3px; padding: 5px 10px; border-bottom: 1px solid var(--dnr-line); }
.dnr-toolbar button { min-width: 0; height: 35px; display: flex; align-items: center; justify-content: center; gap: 5px; padding: 0 4px; border: 0; border-radius: 8px; background: transparent; color: var(--dnr-muted); transition: background 140ms, color 140ms; }
.dnr-toolbar button svg { width: 16px; height: 16px; flex-shrink: 0; }
.dnr-toolbar button span { font-size: 11px; white-space: nowrap; }
.dnr-toolbar button:hover, .dnr-toolbar button.is-active { color: var(--dnr-text); background: var(--dnr-accent-soft); }
.dnr-icon-button { width: 28px; height: 28px; display: inline-grid; place-items: center; padding: 0; border: 0; border-radius: 6px; background: transparent; transition: background 140ms; }
.dnr-icon-button:hover { background: var(--dnr-accent-soft); }
.dnr-icon-button.dnr-subtle { color: var(--dnr-muted); }
.dnr-notice-strip { padding: 8px 16px; color: var(--dnr-muted); background: var(--dnr-surface); border-bottom: 1px solid var(--dnr-line); font-size: 11px; }
.dnr-main { position: relative; min-height: 0; flex: 1; overflow: hidden; }
.dnr-reading-grid { height: 100%; display: grid; grid-template-columns: 1fr; min-width: 0; }
.dnr-reading-grid.has-toc { grid-template-columns: minmax(160px, 28%) minmax(0, 1fr); }

/* Reading colors stay confined to the content, so the controls remain part of Codex. */
.dnr-reader-stage { position: relative; height: 100%; min-width: 0; overflow: hidden; background: var(--dnr-reading-bg); color: var(--dnr-reading-text); }
.dnr-reader-scroll { height: 100%; overflow: auto; overscroll-behavior: contain; scroll-behavior: smooth; }
.dnr-reader-article {
  --dnr-font-size: 18px; width: min(100%, 760px); min-height: 100%; margin: 0 auto;
  padding: clamp(16px, 3cqw, 24px) clamp(24px, 6cqw, 56px) 72px;
  font-size: var(--dnr-font-size); line-height: 1.9;
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", sans-serif;
  line-break: strict; text-spacing-trim: space-all; hanging-punctuation: first last;
  text-align: justify; text-justify: inter-ideograph; overflow-wrap: anywhere; cursor: default;
}
.dnr-reader-article[data-font="songti"] { font-family: "Songti SC", "Noto Serif SC", "SimSun", serif; }
.dnr-reader-article[data-font="heiti"] { font-family: "PingFang SC", "Microsoft YaHei", "Noto Sans CJK SC", sans-serif; }
.dnr-reader-article[data-font="kaiti"] { font-family: "Kaiti SC", "STKaiti", KaiTi, serif; }
.dnr-reader-article[data-font="serif"] { font-family: "Noto Serif SC", "Source Han Serif SC", Georgia, serif; }
.dnr-reader-article[data-spacing="compact"] { line-height: 1.55; }
.dnr-reader-article[data-spacing="relaxed"] { line-height: 2.25; }
.dnr-reader-article header { text-align: left; margin: 0 0 18px; }
.dnr-reader-article h1 { margin: 0; font-size: 1.15em; line-height: 1.45; font-weight: 600; letter-spacing: .01em; }
.dnr-reader-article p { margin: 0 0 .9em; scroll-margin-top: 24px; }
.dnr-reader-article[data-indent] p { text-indent: 2em; }
.dnr-reader-article mark { padding: 0 .06em; color: inherit; background: var(--dnr-mark); border-radius: 2px; }
.dnr-reader-article footer { display: flex; align-items: center; gap: 12px; margin-top: 3em; color: color-mix(in srgb, var(--dnr-reading-text) 55%, transparent); font-size: 11px; }
.dnr-reader-article footer::before, .dnr-reader-article footer::after { content: ""; height: 1px; flex: 1; background: color-mix(in srgb, var(--dnr-reading-text) 8%, transparent); }
.dnr-reader-scroll--paged { position: relative; overflow-x: auto; overflow-y: hidden; scrollbar-width: none; overscroll-behavior: contain; scroll-snap-type: x mandatory; touch-action: pan-x pinch-zoom; }
.dnr-continuous-scroll { overflow-anchor: none; }
.dnr-chapter-track { display: flex; height: 100%; position: relative; }
.dnr-chapter-pane { flex: none; height: 100%; min-width: 0; overflow: hidden; }
.dnr-reader-scroll--paged::-webkit-scrollbar { display: none; }
.dnr-page-snap-rail { position: absolute; top: 0; left: 0; height: 1px; pointer-events: none; }
.dnr-page-snap { position: absolute; top: 0; height: 1px; scroll-snap-align: start; scroll-snap-stop: always; }
.dnr-reader-article[data-page-mode="paged"] {
  --dnr-page-pad: clamp(24px, 6cqw, 56px); height: 100%; min-height: 0; width: 100%; max-width: none;
  margin: 0; padding: clamp(16px, 3cqw, 24px) var(--dnr-page-pad) 48px; overflow: visible;
  column-width: calc(var(--dnr-page-width) - var(--dnr-page-pad) - var(--dnr-page-pad));
  column-gap: calc(var(--dnr-page-pad) + var(--dnr-page-pad)); column-fill: auto;
}
.dnr-reader-article[data-page-mode="paged"] header, .dnr-reader-article[data-page-mode="paged"] footer { break-inside: avoid-column; }
.dnr-page-number { position: absolute; z-index: 2; right: 12px; bottom: 8px; padding: 2px 6px; border-radius: 4px; background: var(--dnr-reading-bg); color: color-mix(in srgb, var(--dnr-reading-text) 55%, transparent); font-size: 11px; font-variant-numeric: tabular-nums; pointer-events: none; }
.dnr-chapter-snapshot { position: absolute; inset: 0; z-index: 3; overflow: hidden; scroll-snap-type: none; scroll-behavior: auto; pointer-events: none; }
.dnr-reader-stage.is-chapter-changing > .dnr-reader-scroll { pointer-events: none; }
.dnr-reader-stage.is-chapter-animating > .dnr-reader-scroll { will-change: transform; animation: dnr-chapter-in 220ms cubic-bezier(.22,.61,.36,1) both; }
.dnr-reader-stage.is-chapter-animating > .dnr-chapter-snapshot { animation-name: dnr-chapter-out; }
@keyframes dnr-chapter-in { from { transform: translateX(calc(var(--dnr-chapter-direction) * 100%)); } to { transform: translateX(0); } }
@keyframes dnr-chapter-out { from { transform: translateX(0); } to { transform: translateX(calc(var(--dnr-chapter-direction) * -100%)); } }

.dnr-toc { height: 100%; display: flex; flex-direction: column; padding: 16px; overflow: hidden; background: var(--dnr-bg); }
.dnr-toc--embedded { border-right: 1px solid var(--dnr-line); padding: 12px 8px; background: var(--dnr-surface); }
.dnr-panel-heading { display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 0 0 20px; font-size: 17px; font-weight: 600; }
.dnr-panel-heading span:last-child { color: var(--dnr-muted); font-size: 11px; font-weight: 400; }
.dnr-toc-list { min-height: 0; flex: 1; overflow: auto; padding-top: 8px; }
.dnr-toc-list button { width: 100%; display: grid; grid-template-columns: 25px minmax(0, 1fr); gap: 4px; align-items: center; margin-bottom: 3px; padding: 10px; border: 0; border-radius: 8px; background: transparent; color: var(--dnr-muted); text-align: left; font-size: 12px; line-height: 1.5; }
.dnr-toc-list button span:last-child { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.dnr-toc-list button:hover, .dnr-toc-list button.is-active { background: var(--dnr-accent-soft); color: var(--dnr-text); }
.dnr-toc-list button.is-active { font-weight: 500; }
.dnr-toc-index { font-size: 10px; opacity: .65; font-variant-numeric: tabular-nums; }
.dnr-search-field { height: 40px; display: flex; align-items: center; gap: 8px; padding: 0 12px; border: 1px solid var(--dnr-line); border-radius: 10px; background: var(--dnr-surface); color: var(--dnr-muted); transition: border-color 140ms, box-shadow 140ms; }
.dnr-search-field:focus-within { border-color: var(--dnr-muted); box-shadow: 0 0 0 3px var(--dnr-accent-soft); }
.dnr-search-field input { min-width: 0; flex: 1; padding: 0; border: 0; outline: 0; background: transparent; color: var(--dnr-text); font-size: 12px; }
.dnr-search-field button { width: 22px; height: 22px; display: grid; place-items: center; padding: 0; border: 0; background: transparent; color: var(--dnr-muted); }
.dnr-search-field--small { height: 32px; }
.dnr-search-field--small input { font-size: 11px; }
/* Keep native mobile focus from zooming small search text; preserve pinch zoom. */
@media (max-width: 600px), (pointer: coarse) {
  .dnr-shell .dnr-search-field input { font-size: 16px; }
}
.dnr-search-panel, .dnr-settings { width: 100%; max-width: 680px; height: 100%; margin-inline: auto; padding: 24px clamp(16px, 4cqw, 28px) 32px; overflow: auto; }
.dnr-search-help { margin: 8px 0 12px; color: var(--dnr-muted); font-size: 11px; }
.dnr-search-results { display: flex; flex-direction: column; gap: 6px; }
.dnr-search-results > button { padding: 10px 12px; border: 1px solid var(--dnr-line); border-radius: 8px; background: var(--dnr-bg); text-align: left; }
.dnr-search-results > button:hover, .dnr-search-results > button.is-active { background: var(--dnr-accent-soft); }
.dnr-search-results span { color: var(--dnr-text); font-size: 11px; font-weight: 500; }
.dnr-search-results p { margin: 4px 0 0; font-size: 12px; line-height: 1.6; color: var(--dnr-muted); }

.dnr-section-label { margin: 0 0 10px; color: var(--dnr-muted); font-size: 11px; font-weight: 500; }
.dnr-setting-group { margin-bottom: 12px; padding: 16px; border: 1px solid var(--dnr-line); border-radius: 12px; background: var(--dnr-surface); }
.dnr-range-row { display: flex; align-items: center; gap: 10px; color: var(--dnr-muted); font-size: 11px; }
.dnr-range-row input { min-width: 0; flex: 1; }
.dnr-font-grid, .dnr-page-mode-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
.dnr-font-grid button, .dnr-page-mode-grid button { min-width: 0; display: flex; flex-direction: column; gap: 4px; padding: 10px 12px; border: 1px solid var(--dnr-line); border-radius: 8px; background: var(--dnr-bg); text-align: left; }
.dnr-font-grid button:hover, .dnr-page-mode-grid button:hover { background: var(--dnr-surface); }
.dnr-font-grid button.is-active, .dnr-page-mode-grid button.is-active { border-color: var(--dnr-muted); background: var(--dnr-accent-soft); }
.dnr-font-grid strong, .dnr-page-mode-grid strong { font-size: 12px; font-weight: 500; }
.dnr-font-grid span, .dnr-page-mode-grid span { font-size: 11px; color: var(--dnr-muted); }
.dnr-font-grid [data-font="songti"] { font-family: "Songti SC", serif; }
.dnr-font-grid [data-font="heiti"] { font-family: "PingFang SC", sans-serif; }
.dnr-font-grid [data-font="kaiti"] { font-family: "Kaiti SC", serif; }
.dnr-font-grid [data-font="serif"] { font-family: Georgia, serif; }
.dnr-segmented { display: grid; grid-auto-flow: column; grid-auto-columns: 1fr; padding: 3px; border-radius: 8px; background: var(--dnr-surface); border: 1px solid var(--dnr-line); }
.dnr-segmented button { height: 28px; padding: 0 4px; border: 1px solid transparent; border-radius: 5px; background: transparent; color: var(--dnr-muted); font-size: 11px; }
.dnr-segmented button.is-active { color: var(--dnr-text); background: var(--dnr-bg); border-color: var(--dnr-line); }
.dnr-theme-grid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 6px; }
.dnr-theme-grid button { min-width: 0; padding: 5px; border: 1px solid transparent; border-radius: 8px; background: transparent; font-size: 11px; }
.dnr-theme-grid button:hover { background: var(--dnr-surface); }
.dnr-theme-grid button.is-active { border-color: var(--dnr-muted); background: var(--dnr-accent-soft); }
.dnr-theme-grid i { display: block; height: 28px; margin-bottom: 5px; border: 1px solid var(--dnr-line); border-radius: 5px; }
.dnr-theme-grid i[data-theme="auto"] { background: linear-gradient(135deg, #fff 50%, #181818 50%); }
.dnr-theme-grid i[data-theme="light"] { background: #fff; }
.dnr-theme-grid i[data-theme="dark"] { background: #181818; }
.dnr-theme-grid i[data-theme="eye-care"] { background: #edf3e6; }
.dnr-theme-grid i[data-theme="parchment"] { background: #f3ead7; }
.dnr-toggle-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 16px; border: 1px solid var(--dnr-line); border-radius: 12px; background: var(--dnr-surface); cursor: pointer; }
.dnr-toggle-row span { display: flex; flex-direction: column; gap: 3px; }
.dnr-toggle-row strong { font-size: 12px; font-weight: 500; }
.dnr-toggle-row small, .dnr-setting-hint { color: var(--dnr-muted); font-size: 11px; line-height: 1.5; }
.dnr-setting-hint { margin: 8px 0 0; }

/* The start screen and book lists use the same restrained surfaces as the host. */
.dnr-file-loader { height: 100%; display: flex; flex-direction: column; align-items: center; padding: clamp(24px, 6cqw, 48px) clamp(16px, 4cqw, 32px) 32px; overflow: auto; }
.dnr-file-loader--compact { padding-top: 24px; }
.dnr-file-hero { flex-shrink: 0; width: min(100%, 520px); padding: clamp(18px, 4cqw, 28px); border: 1px solid var(--dnr-line); border-radius: 16px; background: var(--dnr-surface); }
.dnr-file-hero-heading { display: flex; align-items: center; gap: 12px; text-align: left; }
.dnr-file-hero-icon { width: 44px; height: 44px; display: grid; flex: 0 0 44px; place-items: center; border: 1px solid var(--dnr-line); border-radius: 12px; background: var(--dnr-bg); color: var(--dnr-text); }
.dnr-file-hero-icon svg { width: 20px; height: 20px; }
.dnr-empty-copy { min-width: 0; }
.dnr-empty-copy h2 { margin: 0; font: 600 20px/1.5 -apple-system, BlinkMacSystemFont, "PingFang SC", sans-serif; letter-spacing: -.02em; }
.dnr-empty-copy p { margin: 3px 0 0; color: var(--dnr-muted); font-size: 12px; line-height: 1.5; }
.dnr-file-action { min-width: 0; min-height: 86px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; padding: 12px 4px; border: 1px solid var(--dnr-line); border-radius: 10px; background: var(--dnr-bg); font-size: 12px; font-weight: 500; transition: background 140ms, border-color 140ms; }
.dnr-file-action svg { width: 22px; height: 22px; color: var(--dnr-muted); }
.dnr-file-action--primary { border-color: color-mix(in srgb, var(--dnr-text) 24%, transparent); background: var(--dnr-accent-soft); }
.dnr-file-action--primary svg { color: var(--dnr-text); }
.dnr-file-action:hover:not(:disabled) { border-color: var(--dnr-muted); background: var(--dnr-accent-soft); }
.dnr-file-action:hover:not(:disabled) svg { color: var(--dnr-text); }
.dnr-file-actions { display: grid; grid-auto-flow: column; grid-auto-columns: minmax(0, 1fr); gap: 10px; margin-top: 24px; }
.dnr-primary-button, .dnr-secondary-button { height: 36px; display: flex; align-items: center; justify-content: center; gap: 6px; padding: 0 14px; border: 1px solid transparent; border-radius: 8px; font-size: 12px; font-weight: 500; transition: background 140ms; }
.dnr-shell .dnr-primary-button { background: var(--dnr-accent); color: var(--dnr-on-accent); }
.dnr-primary-button:hover:not(:disabled) { background: color-mix(in srgb, var(--dnr-accent) 85%, var(--dnr-bg)); }
.dnr-secondary-button { margin-top: 8px; border-color: var(--dnr-line); background: var(--dnr-bg); color: var(--dnr-text); }
.dnr-secondary-button:hover { background: var(--dnr-accent-soft); }
.dnr-file-actions .dnr-secondary-button { margin: 0; }
.dnr-file-hint { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 4px 12px; margin: 16px 0 0; color: var(--dnr-muted); font-size: 10px; line-height: 1.65; text-align: left; }
.dnr-alert { width: 100%; margin-top: 12px; padding: 10px 12px; border: 1px solid color-mix(in srgb, var(--dnr-error) 25%, transparent); border-radius: 8px; background: color-mix(in srgb, var(--dnr-error) 7%, var(--dnr-bg)); color: var(--dnr-error); font-size: 12px; text-align: left; }
.dnr-file-loader > .dnr-alert { flex-shrink: 0; max-width: 520px; overflow-wrap: anywhere; }
.dnr-recents-heading { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 12px; color: var(--dnr-muted); font-size: 11px; }
.dnr-recents-heading > span:first-child { display: flex; align-items: center; gap: 7px; color: var(--dnr-text); font-size: 12px; font-weight: 500; }
.dnr-recents-heading svg { width: 14px; height: 14px; color: var(--dnr-muted); }
.dnr-recents li:hover { border-color: color-mix(in srgb, var(--dnr-muted) 40%, transparent); background: var(--dnr-accent-soft); }
.dnr-recent-main { display: flex; align-items: center; gap: 12px; }
.dnr-recent-cover { width: 38px; height: 50px; display: grid; flex: 0 0 38px; place-items: center; border: 1px solid var(--dnr-line); border-radius: 4px 8px 8px 4px; background: var(--dnr-bg); color: var(--dnr-muted); box-shadow: inset 3px 0 var(--dnr-accent-soft); }
.dnr-recent-cover svg { width: 18px; height: 18px; }
.dnr-recent-details { min-width: 0; flex: 1; }
.dnr-recents { width: min(100%, 520px); margin-top: 28px; text-align: left; }
.dnr-recents ul { padding: 0; margin: 0; list-style: none; }
.dnr-recents li { display: flex; align-items: center; gap: 4px; margin-bottom: 10px; padding: 3px 10px 3px 3px; border: 1px solid var(--dnr-line); border-radius: 12px; background: var(--dnr-surface); transition: background 140ms, border-color 140ms; }
.dnr-recent-main { min-width: 0; flex: 1; padding: 12px; border: 0; border-radius: 8px; background: transparent; text-align: left; }
.dnr-recent-main:hover { background: transparent; }
.dnr-recent-name { display: block; font-size: 12px; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.dnr-recent-meta { display: block; margin-top: 4px; color: var(--dnr-muted); font-size: 11px; }
.dnr-recent-progress-row { display: flex; align-items: center; gap: 8px; margin-top: 8px; }
.dnr-recent-progress-track { height: 3px; min-width: 32px; flex: 1; border-radius: 99px; background: var(--dnr-line); overflow: hidden; }
.dnr-recent-progress-track i { display: block; width: 0; height: 100%; border-radius: inherit; background: var(--dnr-muted); transition: width 180ms; }
.dnr-recent-progress-label { flex: 0 0 auto; color: var(--dnr-muted); font-size: 11px; font-variant-numeric: tabular-nums; white-space: nowrap; }
.dnr-empty-panel { display: flex; flex-direction: column; align-items: center; gap: 12px; padding: 64px 16px 24px; color: var(--dnr-muted); text-align: center; }
.dnr-empty-panel > svg { box-sizing: content-box; padding: 16px; border: 1px solid var(--dnr-line); border-radius: 16px; background: var(--dnr-surface); }
.dnr-empty-panel p { max-width: 240px; font-size: 12px; line-height: 1.6; }
.dnr-empty-small { padding: 24px 12px; color: var(--dnr-muted); font-size: 12px; text-align: center; }

.dnr-online-container { height: 100%; }
.dnr-online-container[hidden] { display: none; }
.dnr-online-panel { width: 100%; max-width: 680px; height: 100%; margin-inline: auto; padding: 24px clamp(16px, 4cqw, 28px) 32px; overflow: auto; }
.dnr-online-heading { display: flex; align-items: center; gap: 8px; padding: 0 0 16px; }
.dnr-online-heading > div { min-width: 0; display: flex; flex: 1; align-items: baseline; justify-content: space-between; gap: 8px; }
.dnr-online-heading strong { font-size: 17px; font-weight: 600; }
.dnr-online-heading > div > span { color: var(--dnr-muted); font-size: 11px; }
.dnr-online-back { height: 28px; display: flex; align-items: center; gap: 2px; padding: 0 6px; border: 0; border-radius: 6px; background: transparent; color: var(--dnr-muted); font-size: 11px; }
.dnr-online-back:hover { background: var(--dnr-accent-soft); }
.dnr-online-search { display: grid; grid-template-columns: minmax(0, 1fr) auto; align-items: stretch; gap: 8px; }
.dnr-online-search > .dnr-primary-button { height: 40px; border-radius: 10px; }
.dnr-online-actions button:hover:not(:disabled) { background: var(--dnr-accent-soft); }
.dnr-online-summary { margin: 10px 0; color: var(--dnr-muted); font-size: 11px; }
.dnr-online-results { display: flex; flex-direction: column; gap: 8px; margin-top: 12px; }
.dnr-online-results article { padding: 16px; border: 1px solid var(--dnr-line); border-radius: 12px; background: var(--dnr-surface); }
.dnr-online-result-heading { display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; }
.dnr-online-result-heading > div { min-width: 0; }
.dnr-online-result-heading h3 { margin: 0; font-size: 13px; font-weight: 600; line-height: 1.5; }
.dnr-online-result-heading p, .dnr-online-latest { margin: 4px 0 0; color: var(--dnr-muted); font-size: 11px; line-height: 1.5; }
.dnr-online-result-heading > span { flex: 0 0 auto; padding: 2px 6px; border-radius: 4px; background: var(--dnr-accent-soft); color: var(--dnr-muted); font-size: 10px; }
.dnr-online-latest { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.dnr-online-actions { display: flex; align-items: center; flex-wrap: wrap; gap: 8px; margin-top: 14px; }
.dnr-online-actions button { min-height: 32px; padding: 5px 10px; border: 1px solid var(--dnr-line); border-radius: 8px; background: var(--dnr-bg); color: var(--dnr-text); font-size: 11px; font-weight: 500; }
.dnr-online-actions a, .dnr-online-disclaimer a { color: var(--dnr-text); font-size: 11px; text-underline-offset: 3px; }
.dnr-acquisition { display: flex; flex-direction: column; gap: 5px; margin-top: 12px; padding: 12px; border: 1px solid var(--dnr-line); border-radius: 8px; background: var(--dnr-surface); font-size: 12px; }
.dnr-acquisition strong { font-size: 12px; font-weight: 600; }
.dnr-acquisition small { color: var(--dnr-muted); font-size: 11px; }
.dnr-acquisition > button { align-self: flex-start; padding: 4px 8px; border: 1px solid var(--dnr-line); border-radius: 6px; background: var(--dnr-bg); font-size: 11px; }
.dnr-acquisition--failed { border-color: color-mix(in srgb, var(--dnr-error) 25%, transparent); }
.dnr-acquisition-progress { height: 3px; border-radius: 9px; background: var(--dnr-line); overflow: hidden; }
.dnr-acquisition-progress i { display: block; height: 100%; background: var(--dnr-muted); transition: width 180ms; }
.dnr-online-disclaimer { margin: 16px 0 4px; padding: 10px 12px; border-radius: 8px; background: var(--dnr-surface); color: var(--dnr-muted); font-size: 11px; line-height: 1.6; }

.dnr-footer { height: var(--dnr-footer-height); flex: 0 0 var(--dnr-footer-height); display: flex; align-items: center; gap: 10px; padding: 0 12px; border-top: 1px solid var(--dnr-line); background: var(--dnr-bg); }
.dnr-footer > button { height: 28px; display: flex; align-items: center; gap: 3px; padding: 0 6px; border: 0; border-radius: 6px; background: transparent; color: var(--dnr-muted); font-size: 11px; white-space: nowrap; }
.dnr-footer > button svg { width: 14px; height: 14px; }
.dnr-footer > button:hover:not(:disabled) { background: var(--dnr-accent-soft); color: var(--dnr-text); }
.dnr-chapter-progress { min-width: 36px; height: 2px; flex: 1; border-radius: 9px; background: var(--dnr-line); overflow: hidden; }
.dnr-chapter-progress i { display: block; height: 100%; background: var(--dnr-muted); transition: width 220ms; }
.dnr-reading-time { display: flex; align-items: center; gap: 3px; color: var(--dnr-muted); font-size: 11px; white-space: nowrap; }
.dnr-chapter-title { min-width: 0; flex: 1; overflow: hidden; color: var(--dnr-muted); font-size: 11px; font-weight: 400; text-align: center; text-overflow: ellipsis; white-space: nowrap; }
.dnr-shell.is-immersive .dnr-toolbar-dock { height: 0; flex-basis: 0; }
.dnr-shell.is-immersive .dnr-footer { height: 0; flex-basis: 0; padding: 0; border: 0; opacity: 0; pointer-events: none; overflow: hidden; }
.dnr-shell.is-immersive .dnr-toc--embedded { display: none; }
.dnr-shell.is-immersive .dnr-reading-grid.has-toc { grid-template-columns: 1fr; }

.dnr-rules-panel { width: 100%; max-width: 760px; height: 100%; overflow: auto; margin-inline: auto; padding: 24px clamp(16px, 4cqw, 28px) 32px; color: var(--dnr-text); font-size: 12px; line-height: 1.6; }
.dnr-rules-panel .dnr-online-heading { flex-wrap: wrap; gap: 8px; }
.dnr-online-heading > button:last-child { flex-shrink: 0; border: 1px solid var(--dnr-line); border-radius: 6px; padding: 5px 8px; background: var(--dnr-bg); font-size: 11px; }
.dnr-rule-actions { display: flex; align-items: center; flex-wrap: wrap; gap: 6px; margin: 10px 0; }
.dnr-rules-panel button, .dnr-rule-file { padding: 6px 10px; border: 1px solid var(--dnr-line); border-radius: 6px; background: var(--dnr-bg); color: var(--dnr-text); font-size: 11px; cursor: pointer; }
.dnr-rules-panel button:hover { background: var(--dnr-accent-soft); }
.dnr-rules-panel .dnr-primary-button { background: var(--dnr-accent); color: var(--dnr-on-accent); }
.dnr-rule-list { display: grid; gap: 8px; margin: 12px 0; }
.dnr-rule-list article { min-width: 0; padding: 16px; border: 1px solid var(--dnr-line); border-radius: 12px; background: var(--dnr-surface); }
.dnr-rule-title { display: flex; justify-content: space-between; align-items: center; gap: 8px; }
.dnr-rule-title strong { overflow-wrap: anywhere; font-weight: 600; }
.dnr-rule-title label { flex-shrink: 0; }
.dnr-rules-panel small, .dnr-rule-request { color: var(--dnr-muted); font-size: 11px; }
.dnr-rule-editor details, .dnr-rule-test { margin-top: 12px; padding: 12px; border: 1px solid var(--dnr-line); border-radius: 8px; }
.dnr-rule-editor summary { font-weight: 500; cursor: pointer; }
.dnr-rule-editor details > label, .dnr-rule-test > label, .dnr-rule-import > label { display: block; margin: 10px 0; }
.dnr-rules-panel textarea, .dnr-rule-test input { display: block; width: 100%; min-width: 0; margin-top: 4px; padding: 8px; border: 1px solid var(--dnr-line); border-radius: 6px; background: var(--dnr-surface); color: var(--dnr-text); font: 11px/1.6 ui-monospace, SFMono-Regular, Consolas, monospace; resize: vertical; }
.dnr-rules-panel .dnr-rule-json { min-height: 260px; white-space: pre; overflow: auto; }
.dnr-rule-file input { display: none; }
.dnr-rule-issue, .dnr-rule-diagnostics { color: var(--dnr-error); overflow-wrap: anywhere; font-size: 11px; }
.dnr-rule-diagnostics { padding-left: 16px; }
.dnr-rule-request { display: block; overflow-wrap: anywhere; white-space: pre-wrap; margin: 6px 0; }
.dnr-rule-test-items { display: grid; gap: 5px; margin-top: 8px; }
.dnr-rule-test-items button { display: flex; flex-direction: column; min-width: 0; text-align: left; }
.dnr-rule-test-items small { display: block; max-width: 100%; overflow-wrap: anywhere; }
.dnr-rule-content-preview { max-height: 400px; overflow: auto; overflow-wrap: anywhere; }
.dnr-visually-hidden { position: absolute !important; width: 1px !important; height: 1px !important; padding: 0 !important; margin: -1px !important; overflow: hidden !important; clip: rect(0, 0, 0, 0) !important; white-space: nowrap !important; border: 0 !important; }

@container (max-width: 539px) { .dnr-toolbar button span { display: none; } }
@container (max-width: 599px) { .dnr-reading-grid.has-toc { grid-template-columns: 1fr; } .dnr-toc--embedded { display: none; } .dnr-toolbar { padding-inline: 5px; } }
@container (max-width: 459px) { .dnr-reader-article { padding-left: 24px; padding-right: 24px; } .dnr-reading-time { display: none; } .dnr-theme-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
@container (max-width: 359px) { .dnr-file-hero { padding: 16px; } .dnr-file-hero-heading { gap: 10px; } .dnr-empty-copy h2 { font-size: 17px; } .dnr-empty-copy p { font-size: 11px; } .dnr-file-hero-icon { width: 36px; height: 36px; flex-basis: 36px; } .dnr-file-actions { gap: 6px; margin-top: 20px; } .dnr-file-action { min-height: 76px; font-size: 10px; } .dnr-file-action svg { width: 20px; height: 20px; } .dnr-recent-main { gap: 10px; padding: 10px; } .dnr-online-heading > div { align-items: flex-start; flex-direction: column; gap: 2px; } }
@container (max-width: 319px) { .dnr-font-grid, .dnr-page-mode-grid { grid-template-columns: 1fr; } .dnr-setting-group { padding: 12px; } .dnr-recent-cover { width: 30px; height: 42px; flex-basis: 30px; } .dnr-theme-grid { gap: 3px; } .dnr-theme-grid button { padding: 3px; } }
@media (prefers-reduced-motion: reduce) { .dnr-reader-scroll { scroll-behavior: auto; } }
@media (prefers-reduced-motion: reduce) { .dnr-shell, .dnr-shell * { scroll-behavior: auto !important; transition-duration: .01ms !important; animation-duration: .01ms !important; } }

/* Added library features use the existing Codex palette, density and controls. */
.dnr-library-switch { display: flex; align-items: center; align-self: flex-start; max-width: calc(100% - 24px); gap: 3px; flex-shrink: 0; margin: 10px 12px 6px; padding: 3px; border: 1px solid var(--dnr-line); border-radius: 10px; background: var(--dnr-surface); }
.dnr-library-switch button { display: flex; align-items: center; justify-content: center; gap: 6px; height: 28px; padding: 0 12px; border: 1px solid transparent; border-radius: 7px; background: transparent; color: var(--dnr-muted); font-size: 11px; transition: background 140ms, color 140ms; }
.dnr-library-switch button svg { width:15px; height:15px; }
.dnr-library-switch button[aria-pressed="true"], .dnr-library-switch button:hover { color: var(--dnr-text); background: var(--dnr-accent-soft); }
.dnr-library-switch button[aria-pressed="true"] { color: var(--dnr-text); background: var(--dnr-bg); border-color: var(--dnr-line); box-shadow: 0 1px 2px var(--dnr-line); }
.dnr-fanqie-container, .dnr-fanqie-workspace { display:flex; flex-direction:column; height:100%; min-height:0; }
.dnr-fanqie-container[hidden] { display:none; }
.dnr-fanqie-workspace>.dnr-reading-grid, .dnr-fanqie-workspace>.dnr-fanqie-panel { flex:1; min-height:0; }
.dnr-fanqie-workspace>.dnr-alert { flex-shrink:0; max-height:30%; overflow:auto; }
.dnr-fanqie-workspace>.dnr-alert a { display:inline-block; margin:6px 0 0 8px; color:var(--dnr-text); }
.dnr-fanqie-panel { width: 100%; max-width: 680px; height: 100%; margin-inline: auto; padding: 24px clamp(16px, 4cqw, 28px) 32px; overflow: auto; font-size: 12px; line-height: 1.6; scrollbar-width: thin; scrollbar-color: color-mix(in srgb, var(--dnr-muted) 30%, transparent) transparent; }
.dnr-fanqie-hint { margin:0 0 16px; color:var(--dnr-muted); font-size:11px; }
.dnr-fanqie-account, .dnr-fanqie-current { margin: 12px 0; padding: 18px; border: 1px solid var(--dnr-line); border-radius: 12px; background: var(--dnr-surface); }
.dnr-fanqie-account>strong { font-size:12px; font-weight:500; }
.dnr-fanqie-actions { display:flex; flex-wrap:wrap; gap:8px; margin-top:10px; }
.dnr-fanqie-panel button { min-height:30px; padding:5px 10px; border:1px solid var(--dnr-line); border-radius:6px; background:var(--dnr-bg); color:var(--dnr-text); font-size:11px; }
.dnr-fanqie-panel button:hover:not(:disabled) { background:var(--dnr-accent-soft); }
.dnr-fanqie-qr { text-align:center; margin-top:16px; }
.dnr-fanqie-qr img { display:block; width:200px; max-width:100%; height:auto; margin:auto; padding:8px; border:1px solid var(--dnr-line); border-radius:8px; background:#fff; }
.dnr-fanqie-books { display:grid; gap:8px; margin-top:16px; }
.dnr-fanqie-books article { display: grid; grid-template-columns: minmax(0,1fr) auto; align-items: center; gap: 4px 12px; padding: 16px; border: 1px solid var(--dnr-line); border-radius: 12px; background: var(--dnr-surface); }
.dnr-fanqie-books strong, .dnr-fanqie-books small { grid-column:1; overflow-wrap:anywhere; }
.dnr-fanqie-books strong { font-size:12px; font-weight:500; }
.dnr-fanqie-books small { color:var(--dnr-muted); font-size:11px; }
.dnr-fanqie-books article>button { grid-column:2; grid-row:1 / 3; white-space:nowrap; }
.dnr-fanqie-toolbar { display:flex; align-items:center; justify-content:space-between; flex-shrink:0; gap:8px; padding:4px 8px; border-bottom:1px solid var(--dnr-line); background:var(--dnr-bg); }
.dnr-fanqie-navigation { display:flex; flex:1; min-width:0; gap:2px; }
.dnr-fanqie-toolbar button { display:flex; align-items:center; justify-content:center; gap:5px; height:31px; padding:0 6px; border:0; border-radius:6px; background:transparent; color:var(--dnr-muted); font-size:11px; white-space:nowrap; }
.dnr-fanqie-toolbar button:hover, .dnr-fanqie-toolbar button.is-active { color:var(--dnr-text); background:var(--dnr-accent-soft); }
.dnr-fanqie-toolbar svg { width:16px; height:16px; flex-shrink:0; }
.dnr-fanqie-toolbar .dnr-fanqie-sync { border-left:1px solid var(--dnr-line); border-radius:0; padding-left:10px; }
.dnr-fanqie-sync.is-syncing svg { animation:dnr-sync-spin 900ms linear infinite; }
@keyframes dnr-sync-spin { to { transform:rotate(360deg); } }
@container (max-width:400px) { .dnr-fanqie-navigation button { flex:1; padding:0 4px; } .dnr-fanqie-navigation button svg, .dnr-fanqie-sync span { display:none; } }
@media (prefers-reduced-motion:reduce) { .dnr-fanqie-sync.is-syncing svg { animation:none; } }

.dnr-cloud-library { height:100%; overflow:auto; padding:24px clamp(16px,5vw,48px) 60px; max-width:900px; margin:auto; }
.dnr-cloud-library header { display:flex; align-items:center; justify-content:space-between; color:var(--dnr-muted); font-size:10px; letter-spacing:.12em; }
.dnr-cloud-library h1 { font:500 clamp(26px,5vw,38px)/1.3 Georgia,serif; margin:32px 0 12px; }
.dnr-cloud-library h2 { font-size:17px; margin-top:30px; }
.dnr-cloud-library h2 small { color:var(--dnr-muted); font-weight:400; font-size:12px; }
.dnr-cloud-library p { color:var(--dnr-muted); line-height:1.8; }
.dnr-cloud-library button { border:1px solid var(--dnr-line); background:var(--dnr-surface); padding:9px 13px; border-radius:8px; }
.dnr-cloud-library a { color:inherit; margin-left:8px; text-underline-offset:4px; }
.dnr-cloud-actions { display:flex; gap:10px; margin:24px 0; }
.dnr-cloud-actions button:first-child { background:var(--dnr-text); color:var(--dnr-bg); }
.dnr-cloud-books { display:grid; grid-template-columns:repeat(auto-fit,minmax(250px,1fr)); gap:14px; }
.dnr-cloud-books article { display:flex; gap:16px; padding:20px; border:1px solid var(--dnr-line); border-radius:12px; }
.dnr-cloud-books h3 { font-size:15px; margin:0; overflow-wrap:anywhere; }
.dnr-cloud-cover { width:48px; height:72px; flex-shrink:0; background:#d8e2d4; color:#334731; padding:8px; font-family:serif; border-radius:3px 7px 7px 3px; box-shadow:inset 3px 0 #0001; }
.dnr-cloud-local { display:flex; gap:12px; align-items:center; justify-content:space-between; padding:12px 0; border-bottom:1px solid var(--dnr-line); }
.dnr-cloud-local button { flex-shrink:0; }
.dnr-cloud-url { overflow-wrap:anywhere; }
.dnr-cloud-empty { padding:30px 20px; border:1px dashed var(--dnr-line); color:var(--dnr-muted); border-radius:12px; }
.dnr-cloud-message { padding:12px; background:var(--dnr-surface); border-radius:8px; }
.dnr-shell:not(.is-immersive):has(> .dnr-footer) { --dnr-sync-footer-offset: var(--dnr-footer-height); }
.dnr-sync-control { position: absolute; z-index: 9; left: 4px; bottom: calc(var(--dnr-sync-footer-offset) + max(2px, env(safe-area-inset-bottom))); width: 40px; height: 40px; }
.dnr-sync-button { position: relative; display: grid; place-items: center; width: 40px; height: 40px; padding: 6px; border: 0; border-radius: 10px; background: var(--dnr-bg); color: var(--dnr-muted); }
.dnr-sync-button:hover, .dnr-sync-button[aria-expanded="true"] { background: var(--dnr-surface); }
.dnr-shell.is-immersive .dnr-sync-button { background: var(--dnr-reading-bg); color: var(--dnr-reading-text); }
.dnr-sync-check { stroke: #2f925f; }
.dnr-shell[data-color-scheme="dark"] .dnr-sync-check { stroke: #79c69b; }
.dnr-sync-arrows { color: var(--dnr-muted); transform-origin: 12px 13px; }
.dnr-sync-button.is-syncing .dnr-sync-arrows { animation: dnr-sync-spin 1.2s linear infinite; }
.dnr-sync-alert { color: var(--dnr-error); }
.dnr-sync-dot { position: absolute; top: 9px; right: 8px; width: 4px; height: 4px; border-radius: 50%; background: var(--dnr-error); box-shadow: 0 0 0 2px var(--dnr-bg); }
.dnr-sync-details { position: absolute; z-index: 20; left: 12px; bottom: calc(var(--dnr-sync-footer-offset) + 50px + env(safe-area-inset-bottom)); width: min(296px, calc(100% - 24px)); max-height: calc(100% - 100px - var(--dnr-sync-footer-offset)); overflow: auto; padding: 16px; border: 1px solid var(--dnr-line); border-radius: 12px; background: var(--dnr-bg); box-shadow: 0 8px 30px #0002; color: var(--dnr-text); font-size: 12px; }
.dnr-sync-heading { display: flex; align-items: center; justify-content: space-between; }
.dnr-sync-heading strong { font-size: 13px; font-weight: 600; }
.dnr-sync-heading button { display: grid; place-items: center; width: 28px; height: 28px; padding: 0; border: 0; border-radius: 6px; background: transparent; color: var(--dnr-muted); }
.dnr-sync-details p { margin: 8px 0; }
.dnr-sync-details small, .dnr-sync-hint { color: var(--dnr-muted); line-height: 1.8; }
.dnr-sync-retry, .dnr-sync-actions button { min-height: 36px; padding: 7px 12px; border: 1px solid var(--dnr-line); border-radius: 8px; background: var(--dnr-surface); }
.dnr-sync-retry { width: 100%; margin-top: 14px; }
.dnr-sync-actions { display: flex; gap: 8px; margin-top: 14px; }
.dnr-sync-actions button { flex: 1; }
.dnr-sync-conflict { position: absolute; z-index: 9; right: 12px; bottom: 56px; max-width: calc(100% - 24px); padding: 9px 12px; border: 1px solid var(--dnr-line); border-radius: 10px; color: var(--dnr-text); background: var(--dnr-bg); box-shadow: 0 3px 12px #0001; }
@media (prefers-reduced-motion: reduce) { .dnr-sync-button.is-syncing .dnr-sync-arrows { animation: none; } }
.dnr-upload-status { margin:0 0 24px; padding:18px; border:1px solid var(--dnr-line); border-radius:12px; background:var(--dnr-surface); color:var(--dnr-text); }
.dnr-upload-heading { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:10px; }
.dnr-upload-heading > strong { font-size:14px; font-weight:600; }
.dnr-upload-heading > div { display:flex; gap:6px; }
.dnr-upload-status button { flex-shrink:0; padding:6px 10px; border:1px solid var(--dnr-line); border-radius:6px; background:var(--dnr-bg); color:var(--dnr-text); }
.dnr-upload-status .dnr-upload-hint { margin:10px 0 0; font-size:12px; line-height:1.7; color:var(--dnr-muted); }
.dnr-upload-list { list-style:none; margin:16px 0 0; padding:0; max-height:300px; overflow:auto; }
.dnr-upload-list li { padding:12px 0; border-top:1px solid var(--dnr-line); }
.dnr-upload-list li:last-child { padding-bottom:0; }
.dnr-upload-file { display:flex; justify-content:space-between; align-items:baseline; flex-wrap:wrap; gap:4px 12px; }
.dnr-upload-file strong { font-weight:500; font-size:13px; overflow-wrap:anywhere; min-width:0; }
.dnr-upload-file span { font-size:11px; color:var(--dnr-muted); }
.dnr-upload-status progress { display:block; appearance:auto; width:100%; height:6px; margin:12px 0 8px; accent-color:var(--dnr-accent); }
.dnr-upload-status .dnr-upload-detail { margin:6px 0; font-size:11px; color:var(--dnr-muted); line-height:1.6; overflow-wrap:anywhere; }
.dnr-upload-list li[data-phase="failed"] .dnr-upload-file span { color:var(--dnr-error); }
.dnr-upload-status.is-compact { flex-shrink:0; margin:0; padding:10px 14px; border:0; border-bottom:1px solid var(--dnr-line); border-radius:0; }
.dnr-upload-status.is-compact .dnr-upload-hint { margin-top:5px; font-size:11px; }
.dnr-upload-current { margin-top:6px; font-size:11px; color:var(--dnr-muted); overflow-wrap:anywhere; }
@container (max-width:400px) { .dnr-upload-status { padding:12px; } .dnr-upload-file { flex-direction:column; } .dnr-upload-list { max-height:240px; } }
`;

//#endregion
//#region src/client/index.tsx
	const style = document.createElement("style");
	style.textContent = readerStyles;
	document.head.append(style);
	const root = document.getElementById("root");
	if (root === null) throw new Error("Missing #root element");
	(0, import_client.createRoot)(root).render(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReaderProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NovelReaderApp, {}) }) }));
	requestAnimationFrame(notifyReaderHeight);

//#endregion
})();
//# sourceMappingURL=reader.js.map