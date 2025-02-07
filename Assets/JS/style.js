( () => {
  var XE = Object.create;
  var Ar = Object.defineProperty;
  var GE = Object.getOwnPropertyDescriptor;
  var VE = Object.getOwnPropertyNames;
  var BE = Object.getPrototypeOf
    , UE = Object.prototype.hasOwnProperty;
  var HE = (e => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e,{
      get: (t, r) => (typeof require < "u" ? require : t)[r]
  }) : e)(function(e) {
      if (typeof require < "u")
          return require.apply(this, arguments);
      throw new Error('Dynamic require of "' + e + '" is not supported')
  });
  var re = (e, t) => () => (e && (t = e(e = 0)),
  t);
  var l = (e, t) => () => (t || e((t = {
      exports: {}
  }).exports, t),
  t.exports)
    , ye = (e, t) => {
      for (var r in t)
          Ar(e, r, {
              get: t[r],
              enumerable: !0
          })
  }
    , aa = (e, t, r, n) => {
      if (t && typeof t == "object" || typeof t == "function")
          for (let i of VE(t))
              !UE.call(e, i) && i !== r && Ar(e, i, {
                  get: () => t[i],
                  enumerable: !(n = GE(t, i)) || n.enumerable
              });
      return e
  }
  ;
  var $ = (e, t, r) => (r = e != null ? XE(BE(e)) : {},
  aa(t || !e || !e.__esModule ? Ar(r, "default", {
      value: e,
      enumerable: !0
  }) : r, e))
    , Me = e => aa(Ar({}, "__esModule", {
      value: !0
  }), e);
  var qn = l( () => {
      "use strict";
      window.tram = function(e) {
          function t(c, g) {
              var y = new le.Bare;
              return y.init(c, g)
          }
          function r(c) {
              return c.replace(/[A-Z]/g, function(g) {
                  return "-" + g.toLowerCase()
              })
          }
          function n(c) {
              var g = parseInt(c.slice(1), 16)
                , y = g >> 16 & 255
                , I = g >> 8 & 255
                , R = 255 & g;
              return [y, I, R]
          }
          function i(c, g, y) {
              return "#" + (1 << 24 | c << 16 | g << 8 | y).toString(16).slice(1)
          }
          function o() {}
          function a(c, g) {
              f("Type warning: Expected: [" + c + "] Got: [" + typeof g + "] " + g)
          }
          function s(c, g, y) {
              f("Units do not match [" + c + "]: " + g + ", " + y)
          }
          function u(c, g, y) {
              if (g !== void 0 && (y = g),
              c === void 0)
                  return y;
              var I = y;
              return ME.test(c) || !oa.test(c) ? I = parseInt(c, 10) : oa.test(c) && (I = 1e3 * parseFloat(c)),
              0 > I && (I = 0),
              I === I ? I : y
          }
          function f(c) {
              ge.debug && window && window.console.warn(c)
          }
          function h(c) {
              for (var g = -1, y = c ? c.length : 0, I = []; ++g < y; ) {
                  var R = c[g];
                  R && I.push(R)
              }
              return I
          }
          var p = function(c, g, y) {
              function I(U) {
                  return typeof U == "object"
              }
              function R(U) {
                  return typeof U == "function"
              }
              function S() {}
              function G(U, te) {
                  function N() {
                      var fe = new K;
                      return R(fe.init) && fe.init.apply(fe, arguments),
                      fe
                  }
                  function K() {}
                  te === y && (te = U,
                  U = Object),
                  N.Bare = K;
                  var j, oe = S[c] = U[c], Ne = K[c] = N[c] = new S;
                  return Ne.constructor = N,
                  N.mixin = function(fe) {
                      return K[c] = N[c] = G(N, fe)[c],
                      N
                  }
                  ,
                  N.open = function(fe) {
                      if (j = {},
                      R(fe) ? j = fe.call(N, Ne, oe, N, U) : I(fe) && (j = fe),
                      I(j))
                          for (var Ht in j)
                              g.call(j, Ht) && (Ne[Ht] = j[Ht]);
                      return R(Ne.init) || (Ne.init = U),
                      N
                  }
                  ,
                  N.open(te)
              }
              return G
          }("prototype", {}.hasOwnProperty)
            , d = {
              ease: ["ease", function(c, g, y, I) {
                  var R = (c /= I) * c
                    , S = R * c;
                  return g + y * (-2.75 * S * R + 11 * R * R + -15.5 * S + 8 * R + .25 * c)
              }
              ],
              "ease-in": ["ease-in", function(c, g, y, I) {
                  var R = (c /= I) * c
                    , S = R * c;
                  return g + y * (-1 * S * R + 3 * R * R + -3 * S + 2 * R)
              }
              ],
              "ease-out": ["ease-out", function(c, g, y, I) {
                  var R = (c /= I) * c
                    , S = R * c;
                  return g + y * (.3 * S * R + -1.6 * R * R + 2.2 * S + -1.8 * R + 1.9 * c)
              }
              ],
              "ease-in-out": ["ease-in-out", function(c, g, y, I) {
                  var R = (c /= I) * c
                    , S = R * c;
                  return g + y * (2 * S * R + -5 * R * R + 2 * S + 2 * R)
              }
              ],
              linear: ["linear", function(c, g, y, I) {
                  return y * c / I + g
              }
              ],
              "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(c, g, y, I) {
                  return y * (c /= I) * c + g
              }
              ],
              "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(c, g, y, I) {
                  return -y * (c /= I) * (c - 2) + g
              }
              ],
              "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(c, g, y, I) {
                  return (c /= I / 2) < 1 ? y / 2 * c * c + g : -y / 2 * (--c * (c - 2) - 1) + g
              }
              ],
              "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(c, g, y, I) {
                  return y * (c /= I) * c * c + g
              }
              ],
              "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(c, g, y, I) {
                  return y * ((c = c / I - 1) * c * c + 1) + g
              }
              ],
              "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(c, g, y, I) {
                  return (c /= I / 2) < 1 ? y / 2 * c * c * c + g : y / 2 * ((c -= 2) * c * c + 2) + g
              }
              ],
              "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(c, g, y, I) {
                  return y * (c /= I) * c * c * c + g
              }
              ],
              "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(c, g, y, I) {
                  return -y * ((c = c / I - 1) * c * c * c - 1) + g
              }
              ],
              "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(c, g, y, I) {
                  return (c /= I / 2) < 1 ? y / 2 * c * c * c * c + g : -y / 2 * ((c -= 2) * c * c * c - 2) + g
              }
              ],
              "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(c, g, y, I) {
                  return y * (c /= I) * c * c * c * c + g
              }
              ],
              "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(c, g, y, I) {
                  return y * ((c = c / I - 1) * c * c * c * c + 1) + g
              }
              ],
              "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(c, g, y, I) {
                  return (c /= I / 2) < 1 ? y / 2 * c * c * c * c * c + g : y / 2 * ((c -= 2) * c * c * c * c + 2) + g
              }
              ],
              "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(c, g, y, I) {
                  return -y * Math.cos(c / I * (Math.PI / 2)) + y + g
              }
              ],
              "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(c, g, y, I) {
                  return y * Math.sin(c / I * (Math.PI / 2)) + g
              }
              ],
              "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(c, g, y, I) {
                  return -y / 2 * (Math.cos(Math.PI * c / I) - 1) + g
              }
              ],
              "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(c, g, y, I) {
                  return c === 0 ? g : y * Math.pow(2, 10 * (c / I - 1)) + g
              }
              ],
              "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(c, g, y, I) {
                  return c === I ? g + y : y * (-Math.pow(2, -10 * c / I) + 1) + g
              }
              ],
              "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(c, g, y, I) {
                  return c === 0 ? g : c === I ? g + y : (c /= I / 2) < 1 ? y / 2 * Math.pow(2, 10 * (c - 1)) + g : y / 2 * (-Math.pow(2, -10 * --c) + 2) + g
              }
              ],
              "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(c, g, y, I) {
                  return -y * (Math.sqrt(1 - (c /= I) * c) - 1) + g
              }
              ],
              "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(c, g, y, I) {
                  return y * Math.sqrt(1 - (c = c / I - 1) * c) + g
              }
              ],
              "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(c, g, y, I) {
                  return (c /= I / 2) < 1 ? -y / 2 * (Math.sqrt(1 - c * c) - 1) + g : y / 2 * (Math.sqrt(1 - (c -= 2) * c) + 1) + g
              }
              ],
              "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(c, g, y, I, R) {
                  return R === void 0 && (R = 1.70158),
                  y * (c /= I) * c * ((R + 1) * c - R) + g
              }
              ],
              "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(c, g, y, I, R) {
                  return R === void 0 && (R = 1.70158),
                  y * ((c = c / I - 1) * c * ((R + 1) * c + R) + 1) + g
              }
              ],
              "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(c, g, y, I, R) {
                  return R === void 0 && (R = 1.70158),
                  (c /= I / 2) < 1 ? y / 2 * c * c * (((R *= 1.525) + 1) * c - R) + g : y / 2 * ((c -= 2) * c * (((R *= 1.525) + 1) * c + R) + 2) + g
              }
              ]
          }
            , v = {
              "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
              "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
              "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
          }
            , b = document
            , m = window
            , A = "bkwld-tram"
            , E = /[\-\.0-9]/g
            , O = /[A-Z]/
            , T = "number"
            , w = /^(rgb|#)/
            , C = /(em|cm|mm|in|pt|pc|px)$/
            , x = /(em|cm|mm|in|pt|pc|px|%)$/
            , D = /(deg|rad|turn)$/
            , F = "unitless"
            , X = /(all|none) 0s ease 0s/
            , B = /^(width|height)$/
            , k = " "
            , P = b.createElement("a")
            , _ = ["Webkit", "Moz", "O", "ms"]
            , L = ["-webkit-", "-moz-", "-o-", "-ms-"]
            , q = function(c) {
              if (c in P.style)
                  return {
                      dom: c,
                      css: c
                  };
              var g, y, I = "", R = c.split("-");
              for (g = 0; g < R.length; g++)
                  I += R[g].charAt(0).toUpperCase() + R[g].slice(1);
              for (g = 0; g < _.length; g++)
                  if (y = _[g] + I,
                  y in P.style)
                      return {
                          dom: y,
                          css: L[g] + c
                      }
          }
            , M = t.support = {
              bind: Function.prototype.bind,
              transform: q("transform"),
              transition: q("transition"),
              backface: q("backface-visibility"),
              timing: q("transition-timing-function")
          };
          if (M.transition) {
              var W = M.timing.dom;
              if (P.style[W] = d["ease-in-back"][0],
              !P.style[W])
                  for (var H in v)
                      d[H][0] = v[H]
          }
          var J = t.frame = function() {
              var c = m.requestAnimationFrame || m.webkitRequestAnimationFrame || m.mozRequestAnimationFrame || m.oRequestAnimationFrame || m.msRequestAnimationFrame;
              return c && M.bind ? c.bind(m) : function(g) {
                  m.setTimeout(g, 16)
              }
          }()
            , Te = t.now = function() {
              var c = m.performance
                , g = c && (c.now || c.webkitNow || c.msNow || c.mozNow);
              return g && M.bind ? g.bind(c) : Date.now || function() {
                  return +new Date
              }
          }()
            , je = p(function(c) {
              function g(V, Y) {
                  var ne = h(("" + V).split(k))
                    , Q = ne[0];
                  Y = Y || {};
                  var de = Fn[Q];
                  if (!de)
                      return f("Unsupported property: " + Q);
                  if (!Y.weak || !this.props[Q]) {
                      var Oe = de[0]
                        , Ee = this.props[Q];
                      return Ee || (Ee = this.props[Q] = new Oe.Bare),
                      Ee.init(this.$el, ne, de, Y),
                      Ee
                  }
              }
              function y(V, Y, ne) {
                  if (V) {
                      var Q = typeof V;
                      if (Y || (this.timer && this.timer.destroy(),
                      this.queue = [],
                      this.active = !1),
                      Q == "number" && Y)
                          return this.timer = new Ir({
                              duration: V,
                              context: this,
                              complete: S
                          }),
                          void (this.active = !0);
                      if (Q == "string" && Y) {
                          switch (V) {
                          case "hide":
                              N.call(this);
                              break;
                          case "stop":
                              G.call(this);
                              break;
                          case "redraw":
                              K.call(this);
                              break;
                          default:
                              g.call(this, V, ne && ne[1])
                          }
                          return S.call(this)
                      }
                      if (Q == "function")
                          return void V.call(this, this);
                      if (Q == "object") {
                          var de = 0;
                          Ne.call(this, V, function(ae, qE) {
                              ae.span > de && (de = ae.span),
                              ae.stop(),
                              ae.animate(qE)
                          }, function(ae) {
                              "wait"in ae && (de = u(ae.wait, 0))
                          }),
                          oe.call(this),
                          de > 0 && (this.timer = new Ir({
                              duration: de,
                              context: this
                          }),
                          this.active = !0,
                          Y && (this.timer.complete = S));
                          var Oe = this
                            , Ee = !1
                            , Tr = {};
                          J(function() {
                              Ne.call(Oe, V, function(ae) {
                                  ae.active && (Ee = !0,
                                  Tr[ae.name] = ae.nextStyle)
                              }),
                              Ee && Oe.$el.css(Tr)
                          })
                      }
                  }
              }
              function I(V) {
                  V = u(V, 0),
                  this.active ? this.queue.push({
                      options: V
                  }) : (this.timer = new Ir({
                      duration: V,
                      context: this,
                      complete: S
                  }),
                  this.active = !0)
              }
              function R(V) {
                  return this.active ? (this.queue.push({
                      options: V,
                      args: arguments
                  }),
                  void (this.timer.complete = S)) : f("No active transition timer. Use start() or wait() before then().")
              }
              function S() {
                  if (this.timer && this.timer.destroy(),
                  this.active = !1,
                  this.queue.length) {
                      var V = this.queue.shift();
                      y.call(this, V.options, !0, V.args)
                  }
              }
              function G(V) {
                  this.timer && this.timer.destroy(),
                  this.queue = [],
                  this.active = !1;
                  var Y;
                  typeof V == "string" ? (Y = {},
                  Y[V] = 1) : Y = typeof V == "object" && V != null ? V : this.props,
                  Ne.call(this, Y, fe),
                  oe.call(this)
              }
              function U(V) {
                  G.call(this, V),
                  Ne.call(this, V, Ht, DE)
              }
              function te(V) {
                  typeof V != "string" && (V = "block"),
                  this.el.style.display = V
              }
              function N() {
                  G.call(this),
                  this.el.style.display = "none"
              }
              function K() {
                  this.el.offsetHeight
              }
              function j() {
                  G.call(this),
                  e.removeData(this.el, A),
                  this.$el = this.el = null
              }
              function oe() {
                  var V, Y, ne = [];
                  this.upstream && ne.push(this.upstream);
                  for (V in this.props)
                      Y = this.props[V],
                      Y.active && ne.push(Y.string);
                  ne = ne.join(","),
                  this.style !== ne && (this.style = ne,
                  this.el.style[M.transition.dom] = ne)
              }
              function Ne(V, Y, ne) {
                  var Q, de, Oe, Ee, Tr = Y !== fe, ae = {};
                  for (Q in V)
                      Oe = V[Q],
                      Q in Ye ? (ae.transform || (ae.transform = {}),
                      ae.transform[Q] = Oe) : (O.test(Q) && (Q = r(Q)),
                      Q in Fn ? ae[Q] = Oe : (Ee || (Ee = {}),
                      Ee[Q] = Oe));
                  for (Q in ae) {
                      if (Oe = ae[Q],
                      de = this.props[Q],
                      !de) {
                          if (!Tr)
                              continue;
                          de = g.call(this, Q)
                      }
                      Y.call(this, de, Oe)
                  }
                  ne && Ee && ne.call(this, Ee)
              }
              function fe(V) {
                  V.stop()
              }
              function Ht(V, Y) {
                  V.set(Y)
              }
              function DE(V) {
                  this.$el.css(V)
              }
              function Se(V, Y) {
                  c[V] = function() {
                      return this.children ? FE.call(this, Y, arguments) : (this.el && Y.apply(this, arguments),
                      this)
                  }
              }
              function FE(V, Y) {
                  var ne, Q = this.children.length;
                  for (ne = 0; Q > ne; ne++)
                      V.apply(this.children[ne], Y);
                  return this
              }
              c.init = function(V) {
                  if (this.$el = e(V),
                  this.el = this.$el[0],
                  this.props = {},
                  this.queue = [],
                  this.style = "",
                  this.active = !1,
                  ge.keepInherited && !ge.fallback) {
                      var Y = na(this.el, "transition");
                      Y && !X.test(Y) && (this.upstream = Y)
                  }
                  M.backface && ge.hideBackface && ft(this.el, M.backface.css, "hidden")
              }
              ,
              Se("add", g),
              Se("start", y),
              Se("wait", I),
              Se("then", R),
              Se("next", S),
              Se("stop", G),
              Se("set", U),
              Se("show", te),
              Se("hide", N),
              Se("redraw", K),
              Se("destroy", j)
          })
            , le = p(je, function(c) {
              function g(y, I) {
                  var R = e.data(y, A) || e.data(y, A, new je.Bare);
                  return R.el || R.init(y),
                  I ? R.start(I) : R
              }
              c.init = function(y, I) {
                  var R = e(y);
                  if (!R.length)
                      return this;
                  if (R.length === 1)
                      return g(R[0], I);
                  var S = [];
                  return R.each(function(G, U) {
                      S.push(g(U, I))
                  }),
                  this.children = S,
                  this
              }
          })
            , z = p(function(c) {
              function g() {
                  var S = this.get();
                  this.update("auto");
                  var G = this.get();
                  return this.update(S),
                  G
              }
              function y(S, G, U) {
                  return G !== void 0 && (U = G),
                  S in d ? S : U
              }
              function I(S) {
                  var G = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(S);
                  return (G ? i(G[1], G[2], G[3]) : S).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
              }
              var R = {
                  duration: 500,
                  ease: "ease",
                  delay: 0
              };
              c.init = function(S, G, U, te) {
                  this.$el = S,
                  this.el = S[0];
                  var N = G[0];
                  U[2] && (N = U[2]),
                  ia[N] && (N = ia[N]),
                  this.name = N,
                  this.type = U[1],
                  this.duration = u(G[1], this.duration, R.duration),
                  this.ease = y(G[2], this.ease, R.ease),
                  this.delay = u(G[3], this.delay, R.delay),
                  this.span = this.duration + this.delay,
                  this.active = !1,
                  this.nextStyle = null,
                  this.auto = B.test(this.name),
                  this.unit = te.unit || this.unit || ge.defaultUnit,
                  this.angle = te.angle || this.angle || ge.defaultAngle,
                  ge.fallback || te.fallback ? this.animate = this.fallback : (this.animate = this.transition,
                  this.string = this.name + k + this.duration + "ms" + (this.ease != "ease" ? k + d[this.ease][0] : "") + (this.delay ? k + this.delay + "ms" : ""))
              }
              ,
              c.set = function(S) {
                  S = this.convert(S, this.type),
                  this.update(S),
                  this.redraw()
              }
              ,
              c.transition = function(S) {
                  this.active = !0,
                  S = this.convert(S, this.type),
                  this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()),
                  this.redraw()),
                  S == "auto" && (S = g.call(this))),
                  this.nextStyle = S
              }
              ,
              c.fallback = function(S) {
                  var G = this.el.style[this.name] || this.convert(this.get(), this.type);
                  S = this.convert(S, this.type),
                  this.auto && (G == "auto" && (G = this.convert(this.get(), this.type)),
                  S == "auto" && (S = g.call(this))),
                  this.tween = new Ut({
                      from: G,
                      to: S,
                      duration: this.duration,
                      delay: this.delay,
                      ease: this.ease,
                      update: this.update,
                      context: this
                  })
              }
              ,
              c.get = function() {
                  return na(this.el, this.name)
              }
              ,
              c.update = function(S) {
                  ft(this.el, this.name, S)
              }
              ,
              c.stop = function() {
                  (this.active || this.nextStyle) && (this.active = !1,
                  this.nextStyle = null,
                  ft(this.el, this.name, this.get()));
                  var S = this.tween;
                  S && S.context && S.destroy()
              }
              ,
              c.convert = function(S, G) {
                  if (S == "auto" && this.auto)
                      return S;
                  var U, te = typeof S == "number", N = typeof S == "string";
                  switch (G) {
                  case T:
                      if (te)
                          return S;
                      if (N && S.replace(E, "") === "")
                          return +S;
                      U = "number(unitless)";
                      break;
                  case w:
                      if (N) {
                          if (S === "" && this.original)
                              return this.original;
                          if (G.test(S))
                              return S.charAt(0) == "#" && S.length == 7 ? S : I(S)
                      }
                      U = "hex or rgb string";
                      break;
                  case C:
                      if (te)
                          return S + this.unit;
                      if (N && G.test(S))
                          return S;
                      U = "number(px) or string(unit)";
                      break;
                  case x:
                      if (te)
                          return S + this.unit;
                      if (N && G.test(S))
                          return S;
                      U = "number(px) or string(unit or %)";
                      break;
                  case D:
                      if (te)
                          return S + this.angle;
                      if (N && G.test(S))
                          return S;
                      U = "number(deg) or string(angle)";
                      break;
                  case F:
                      if (te || N && x.test(S))
                          return S;
                      U = "number(unitless) or string(unit or %)"
                  }
                  return a(U, S),
                  S
              }
              ,
              c.redraw = function() {
                  this.el.offsetHeight
              }
          })
            , be = p(z, function(c, g) {
              c.init = function() {
                  g.init.apply(this, arguments),
                  this.original || (this.original = this.convert(this.get(), w))
              }
          })
            , Bt = p(z, function(c, g) {
              c.init = function() {
                  g.init.apply(this, arguments),
                  this.animate = this.fallback
              }
              ,
              c.get = function() {
                  return this.$el[this.name]()
              }
              ,
              c.update = function(y) {
                  this.$el[this.name](y)
              }
          })
            , _r = p(z, function(c, g) {
              function y(I, R) {
                  var S, G, U, te, N;
                  for (S in I)
                      te = Ye[S],
                      U = te[0],
                      G = te[1] || S,
                      N = this.convert(I[S], U),
                      R.call(this, G, N, U)
              }
              c.init = function() {
                  g.init.apply(this, arguments),
                  this.current || (this.current = {},
                  Ye.perspective && ge.perspective && (this.current.perspective = ge.perspective,
                  ft(this.el, this.name, this.style(this.current)),
                  this.redraw()))
              }
              ,
              c.set = function(I) {
                  y.call(this, I, function(R, S) {
                      this.current[R] = S
                  }),
                  ft(this.el, this.name, this.style(this.current)),
                  this.redraw()
              }
              ,
              c.transition = function(I) {
                  var R = this.values(I);
                  this.tween = new ra({
                      current: this.current,
                      values: R,
                      duration: this.duration,
                      delay: this.delay,
                      ease: this.ease
                  });
                  var S, G = {};
                  for (S in this.current)
                      G[S] = S in R ? R[S] : this.current[S];
                  this.active = !0,
                  this.nextStyle = this.style(G)
              }
              ,
              c.fallback = function(I) {
                  var R = this.values(I);
                  this.tween = new ra({
                      current: this.current,
                      values: R,
                      duration: this.duration,
                      delay: this.delay,
                      ease: this.ease,
                      update: this.update,
                      context: this
                  })
              }
              ,
              c.update = function() {
                  ft(this.el, this.name, this.style(this.current))
              }
              ,
              c.style = function(I) {
                  var R, S = "";
                  for (R in I)
                      S += R + "(" + I[R] + ") ";
                  return S
              }
              ,
              c.values = function(I) {
                  var R, S = {};
                  return y.call(this, I, function(G, U, te) {
                      S[G] = U,
                      this.current[G] === void 0 && (R = 0,
                      ~G.indexOf("scale") && (R = 1),
                      this.current[G] = this.convert(R, te))
                  }),
                  S
              }
          })
            , Ut = p(function(c) {
              function g(N) {
                  U.push(N) === 1 && J(y)
              }
              function y() {
                  var N, K, j, oe = U.length;
                  if (oe)
                      for (J(y),
                      K = Te(),
                      N = oe; N--; )
                          j = U[N],
                          j && j.render(K)
              }
              function I(N) {
                  var K, j = e.inArray(N, U);
                  j >= 0 && (K = U.slice(j + 1),
                  U.length = j,
                  K.length && (U = U.concat(K)))
              }
              function R(N) {
                  return Math.round(N * te) / te
              }
              function S(N, K, j) {
                  return i(N[0] + j * (K[0] - N[0]), N[1] + j * (K[1] - N[1]), N[2] + j * (K[2] - N[2]))
              }
              var G = {
                  ease: d.ease[1],
                  from: 0,
                  to: 1
              };
              c.init = function(N) {
                  this.duration = N.duration || 0,
                  this.delay = N.delay || 0;
                  var K = N.ease || G.ease;
                  d[K] && (K = d[K][1]),
                  typeof K != "function" && (K = G.ease),
                  this.ease = K,
                  this.update = N.update || o,
                  this.complete = N.complete || o,
                  this.context = N.context || this,
                  this.name = N.name;
                  var j = N.from
                    , oe = N.to;
                  j === void 0 && (j = G.from),
                  oe === void 0 && (oe = G.to),
                  this.unit = N.unit || "",
                  typeof j == "number" && typeof oe == "number" ? (this.begin = j,
                  this.change = oe - j) : this.format(oe, j),
                  this.value = this.begin + this.unit,
                  this.start = Te(),
                  N.autoplay !== !1 && this.play()
              }
              ,
              c.play = function() {
                  this.active || (this.start || (this.start = Te()),
                  this.active = !0,
                  g(this))
              }
              ,
              c.stop = function() {
                  this.active && (this.active = !1,
                  I(this))
              }
              ,
              c.render = function(N) {
                  var K, j = N - this.start;
                  if (this.delay) {
                      if (j <= this.delay)
                          return;
                      j -= this.delay
                  }
                  if (j < this.duration) {
                      var oe = this.ease(j, 0, 1, this.duration);
                      return K = this.startRGB ? S(this.startRGB, this.endRGB, oe) : R(this.begin + oe * this.change),
                      this.value = K + this.unit,
                      void this.update.call(this.context, this.value)
                  }
                  K = this.endHex || this.begin + this.change,
                  this.value = K + this.unit,
                  this.update.call(this.context, this.value),
                  this.complete.call(this.context),
                  this.destroy()
              }
              ,
              c.format = function(N, K) {
                  if (K += "",
                  N += "",
                  N.charAt(0) == "#")
                      return this.startRGB = n(K),
                      this.endRGB = n(N),
                      this.endHex = N,
                      this.begin = 0,
                      void (this.change = 1);
                  if (!this.unit) {
                      var j = K.replace(E, "")
                        , oe = N.replace(E, "");
                      j !== oe && s("tween", K, N),
                      this.unit = j
                  }
                  K = parseFloat(K),
                  N = parseFloat(N),
                  this.begin = this.value = K,
                  this.change = N - K
              }
              ,
              c.destroy = function() {
                  this.stop(),
                  this.context = null,
                  this.ease = this.update = this.complete = o
              }
              ;
              var U = []
                , te = 1e3
          })
            , Ir = p(Ut, function(c) {
              c.init = function(g) {
                  this.duration = g.duration || 0,
                  this.complete = g.complete || o,
                  this.context = g.context,
                  this.play()
              }
              ,
              c.render = function(g) {
                  var y = g - this.start;
                  y < this.duration || (this.complete.call(this.context),
                  this.destroy())
              }
          })
            , ra = p(Ut, function(c, g) {
              c.init = function(y) {
                  this.context = y.context,
                  this.update = y.update,
                  this.tweens = [],
                  this.current = y.current;
                  var I, R;
                  for (I in y.values)
                      R = y.values[I],
                      this.current[I] !== R && this.tweens.push(new Ut({
                          name: I,
                          from: this.current[I],
                          to: R,
                          duration: y.duration,
                          delay: y.delay,
                          ease: y.ease,
                          autoplay: !1
                      }));
                  this.play()
              }
              ,
              c.render = function(y) {
                  var I, R, S = this.tweens.length, G = !1;
                  for (I = S; I--; )
                      R = this.tweens[I],
                      R.context && (R.render(y),
                      this.current[R.name] = R.value,
                      G = !0);
                  return G ? void (this.update && this.update.call(this.context)) : this.destroy()
              }
              ,
              c.destroy = function() {
                  if (g.destroy.call(this),
                  this.tweens) {
                      var y, I = this.tweens.length;
                      for (y = I; y--; )
                          this.tweens[y].destroy();
                      this.tweens = null,
                      this.current = null
                  }
              }
          })
            , ge = t.config = {
              debug: !1,
              defaultUnit: "px",
              defaultAngle: "deg",
              keepInherited: !1,
              hideBackface: !1,
              perspective: "",
              fallback: !M.transition,
              agentTests: []
          };
          t.fallback = function(c) {
              if (!M.transition)
                  return ge.fallback = !0;
              ge.agentTests.push("(" + c + ")");
              var g = new RegExp(ge.agentTests.join("|"),"i");
              ge.fallback = g.test(navigator.userAgent)
          }
          ,
          t.fallback("6.0.[2-5] Safari"),
          t.tween = function(c) {
              return new Ut(c)
          }
          ,
          t.delay = function(c, g, y) {
              return new Ir({
                  complete: g,
                  duration: c,
                  context: y
              })
          }
          ,
          e.fn.tram = function(c) {
              return t.call(null, this, c)
          }
          ;
          var ft = e.style
            , na = e.css
            , ia = {
              transform: M.transform && M.transform.css
          }
            , Fn = {
              color: [be, w],
              background: [be, w, "background-color"],
              "outline-color": [be, w],
              "border-color": [be, w],
              "border-top-color": [be, w],
              "border-right-color": [be, w],
              "border-bottom-color": [be, w],
              "border-left-color": [be, w],
              "border-width": [z, C],
              "border-top-width": [z, C],
              "border-right-width": [z, C],
              "border-bottom-width": [z, C],
              "border-left-width": [z, C],
              "border-spacing": [z, C],
              "letter-spacing": [z, C],
              margin: [z, C],
              "margin-top": [z, C],
              "margin-right": [z, C],
              "margin-bottom": [z, C],
              "margin-left": [z, C],
              padding: [z, C],
              "padding-top": [z, C],
              "padding-right": [z, C],
              "padding-bottom": [z, C],
              "padding-left": [z, C],
              "outline-width": [z, C],
              opacity: [z, T],
              top: [z, x],
              right: [z, x],
              bottom: [z, x],
              left: [z, x],
              "font-size": [z, x],
              "text-indent": [z, x],
              "word-spacing": [z, x],
              width: [z, x],
              "min-width": [z, x],
              "max-width": [z, x],
              height: [z, x],
              "min-height": [z, x],
              "max-height": [z, x],
              "line-height": [z, F],
              "scroll-top": [Bt, T, "scrollTop"],
              "scroll-left": [Bt, T, "scrollLeft"]
          }
            , Ye = {};
          M.transform && (Fn.transform = [_r],
          Ye = {
              x: [x, "translateX"],
              y: [x, "translateY"],
              rotate: [D],
              rotateX: [D],
              rotateY: [D],
              scale: [T],
              scaleX: [T],
              scaleY: [T],
              skew: [D],
              skewX: [D],
              skewY: [D]
          }),
          M.transform && M.backface && (Ye.z = [x, "translateZ"],
          Ye.rotateZ = [D],
          Ye.scaleZ = [T],
          Ye.perspective = [C]);
          var ME = /ms/
            , oa = /s|\./;
          return e.tram = t
      }(window.jQuery)
  }
  );
  var ua = l( (yF, sa) => {
      "use strict";
      var kE = window.$
        , WE = qn() && kE.tram;
      sa.exports = function() {
          var e = {};
          e.VERSION = "1.6.0-Webflow";
          var t = {}
            , r = Array.prototype
            , n = Object.prototype
            , i = Function.prototype
            , o = r.push
            , a = r.slice
            , s = r.concat
            , u = n.toString
            , f = n.hasOwnProperty
            , h = r.forEach
            , p = r.map
            , d = r.reduce
            , v = r.reduceRight
            , b = r.filter
            , m = r.every
            , A = r.some
            , E = r.indexOf
            , O = r.lastIndexOf
            , T = Array.isArray
            , w = Object.keys
            , C = i.bind
            , x = e.each = e.forEach = function(_, L, q) {
              if (_ == null)
                  return _;
              if (h && _.forEach === h)
                  _.forEach(L, q);
              else if (_.length === +_.length) {
                  for (var M = 0, W = _.length; M < W; M++)
                      if (L.call(q, _[M], M, _) === t)
                          return
              } else
                  for (var H = e.keys(_), M = 0, W = H.length; M < W; M++)
                      if (L.call(q, _[H[M]], H[M], _) === t)
                          return;
              return _
          }
          ;
          e.map = e.collect = function(_, L, q) {
              var M = [];
              return _ == null ? M : p && _.map === p ? _.map(L, q) : (x(_, function(W, H, J) {
                  M.push(L.call(q, W, H, J))
              }),
              M)
          }
          ,
          e.find = e.detect = function(_, L, q) {
              var M;
              return D(_, function(W, H, J) {
                  if (L.call(q, W, H, J))
                      return M = W,
                      !0
              }),
              M
          }
          ,
          e.filter = e.select = function(_, L, q) {
              var M = [];
              return _ == null ? M : b && _.filter === b ? _.filter(L, q) : (x(_, function(W, H, J) {
                  L.call(q, W, H, J) && M.push(W)
              }),
              M)
          }
          ;
          var D = e.some = e.any = function(_, L, q) {
              L || (L = e.identity);
              var M = !1;
              return _ == null ? M : A && _.some === A ? _.some(L, q) : (x(_, function(W, H, J) {
                  if (M || (M = L.call(q, W, H, J)))
                      return t
              }),
              !!M)
          }
          ;
          e.contains = e.include = function(_, L) {
              return _ == null ? !1 : E && _.indexOf === E ? _.indexOf(L) != -1 : D(_, function(q) {
                  return q === L
              })
          }
          ,
          e.delay = function(_, L) {
              var q = a.call(arguments, 2);
              return setTimeout(function() {
                  return _.apply(null, q)
              }, L)
          }
          ,
          e.defer = function(_) {
              return e.delay.apply(e, [_, 1].concat(a.call(arguments, 1)))
          }
          ,
          e.throttle = function(_) {
              var L, q, M;
              return function() {
                  L || (L = !0,
                  q = arguments,
                  M = this,
                  WE.frame(function() {
                      L = !1,
                      _.apply(M, q)
                  }))
              }
          }
          ,
          e.debounce = function(_, L, q) {
              var M, W, H, J, Te, je = function() {
                  var le = e.now() - J;
                  le < L ? M = setTimeout(je, L - le) : (M = null,
                  q || (Te = _.apply(H, W),
                  H = W = null))
              };
              return function() {
                  H = this,
                  W = arguments,
                  J = e.now();
                  var le = q && !M;
                  return M || (M = setTimeout(je, L)),
                  le && (Te = _.apply(H, W),
                  H = W = null),
                  Te
              }
          }
          ,
          e.defaults = function(_) {
              if (!e.isObject(_))
                  return _;
              for (var L = 1, q = arguments.length; L < q; L++) {
                  var M = arguments[L];
                  for (var W in M)
                      _[W] === void 0 && (_[W] = M[W])
              }
              return _
          }
          ,
          e.keys = function(_) {
              if (!e.isObject(_))
                  return [];
              if (w)
                  return w(_);
              var L = [];
              for (var q in _)
                  e.has(_, q) && L.push(q);
              return L
          }
          ,
          e.has = function(_, L) {
              return f.call(_, L)
          }
          ,
          e.isObject = function(_) {
              return _ === Object(_)
          }
          ,
          e.now = Date.now || function() {
              return new Date().getTime()
          }
          ,
          e.templateSettings = {
              evaluate: /<%([\s\S]+?)%>/g,
              interpolate: /<%=([\s\S]+?)%>/g,
              escape: /<%-([\s\S]+?)%>/g
          };
          var F = /(.)^/
            , X = {
              "'": "'",
              "\\": "\\",
              "\r": "r",
              "\n": "n",
              "\u2028": "u2028",
              "\u2029": "u2029"
          }
            , B = /\\|'|\r|\n|\u2028|\u2029/g
            , k = function(_) {
              return "\\" + X[_]
          }
            , P = /^\s*(\w|\$)+\s*$/;
          return e.template = function(_, L, q) {
              !L && q && (L = q),
              L = e.defaults({}, L, e.templateSettings);
              var M = RegExp([(L.escape || F).source, (L.interpolate || F).source, (L.evaluate || F).source].join("|") + "|$", "g")
                , W = 0
                , H = "__p+='";
              _.replace(M, function(le, z, be, Bt, _r) {
                  return H += _.slice(W, _r).replace(B, k),
                  W = _r + le.length,
                  z ? H += `'+
  ((__t=(` + z + `))==null?'':_.escape(__t))+
  '` : be ? H += `'+
  ((__t=(` + be + `))==null?'':__t)+
  '` : Bt && (H += `';
  ` + Bt + `
  __p+='`),
                  le
              }),
              H += `';
  `;
              var J = L.variable;
              if (J) {
                  if (!P.test(J))
                      throw new Error("variable is not a bare identifier: " + J)
              } else
                  H = `with(obj||{}){
  ` + H + `}
  `,
                  J = "obj";
              H = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
  ` + H + `return __p;
  `;
              var Te;
              try {
                  Te = new Function(L.variable || "obj","_",H)
              } catch (le) {
                  throw le.source = H,
                  le
              }
              var je = function(le) {
                  return Te.call(this, le, e)
              };
              return je.source = "function(" + J + `){
  ` + H + "}",
              je
          }
          ,
          e
      }()
  }
  );
  var Fe = l( (mF, Ea) => {
      "use strict";
      var Z = {}
        , dt = {}
        , pt = []
        , Gn = window.Webflow || []
        , $e = window.jQuery
        , we = $e(window)
        , zE = $e(document)
        , De = $e.isFunction
        , xe = Z._ = ua()
        , la = Z.tram = qn() && $e.tram
        , Sr = !1
        , Vn = !1;
      la.config.hideBackface = !1;
      la.config.keepInherited = !0;
      Z.define = function(e, t, r) {
          dt[e] && da(dt[e]);
          var n = dt[e] = t($e, xe, r) || {};
          return fa(n),
          n
      }
      ;
      Z.require = function(e) {
          return dt[e]
      }
      ;
      function fa(e) {
          Z.env() && (De(e.design) && we.on("__wf_design", e.design),
          De(e.preview) && we.on("__wf_preview", e.preview)),
          De(e.destroy) && we.on("__wf_destroy", e.destroy),
          e.ready && De(e.ready) && KE(e)
      }
      function KE(e) {
          if (Sr) {
              e.ready();
              return
          }
          xe.contains(pt, e.ready) || pt.push(e.ready)
      }
      function da(e) {
          De(e.design) && we.off("__wf_design", e.design),
          De(e.preview) && we.off("__wf_preview", e.preview),
          De(e.destroy) && we.off("__wf_destroy", e.destroy),
          e.ready && De(e.ready) && jE(e)
      }
      function jE(e) {
          pt = xe.filter(pt, function(t) {
              return t !== e.ready
          })
      }
      Z.push = function(e) {
          if (Sr) {
              De(e) && e();
              return
          }
          Gn.push(e)
      }
      ;
      Z.env = function(e) {
          var t = window.__wf_design
            , r = typeof t < "u";
          if (!e)
              return r;
          if (e === "design")
              return r && t;
          if (e === "preview")
              return r && !t;
          if (e === "slug")
              return r && window.__wf_slug;
          if (e === "editor")
              return window.WebflowEditor;
          if (e === "test")
              return window.__wf_test;
          if (e === "frame")
              return window !== window.top
      }
      ;
      var br = navigator.userAgent.toLowerCase()
        , pa = Z.env.touch = "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch
        , YE = Z.env.chrome = /chrome/.test(br) && /Google/.test(navigator.vendor) && parseInt(br.match(/chrome\/(\d+)\./)[1], 10)
        , $E = Z.env.ios = /(ipod|iphone|ipad)/.test(br);
      Z.env.safari = /safari/.test(br) && !YE && !$E;
      var Xn;
      pa && zE.on("touchstart mousedown", function(e) {
          Xn = e.target
      });
      Z.validClick = pa ? function(e) {
          return e === Xn || $e.contains(e, Xn)
      }
      : function() {
          return !0
      }
      ;
      var ha = "resize.webflow orientationchange.webflow load.webflow"
        , QE = "scroll.webflow " + ha;
      Z.resize = Bn(we, ha);
      Z.scroll = Bn(we, QE);
      Z.redraw = Bn();
      function Bn(e, t) {
          var r = []
            , n = {};
          return n.up = xe.throttle(function(i) {
              xe.each(r, function(o) {
                  o(i)
              })
          }),
          e && t && e.on(t, n.up),
          n.on = function(i) {
              typeof i == "function" && (xe.contains(r, i) || r.push(i))
          }
          ,
          n.off = function(i) {
              if (!arguments.length) {
                  r = [];
                  return
              }
              r = xe.filter(r, function(o) {
                  return o !== i
              })
          }
          ,
          n
      }
      Z.location = function(e) {
          window.location = e
      }
      ;
      Z.env() && (Z.location = function() {}
      );
      Z.ready = function() {
          Sr = !0,
          Vn ? ZE() : xe.each(pt, ca),
          xe.each(Gn, ca),
          Z.resize.up()
      }
      ;
      function ca(e) {
          De(e) && e()
      }
      function ZE() {
          Vn = !1,
          xe.each(dt, fa)
      }
      var rt;
      Z.load = function(e) {
          rt.then(e)
      }
      ;
      function ga() {
          rt && (rt.reject(),
          we.off("load", rt.resolve)),
          rt = new $e.Deferred,
          we.on("load", rt.resolve)
      }
      Z.destroy = function(e) {
          e = e || {},
          Vn = !0,
          we.triggerHandler("__wf_destroy"),
          e.domready != null && (Sr = e.domready),
          xe.each(dt, da),
          Z.resize.off(),
          Z.scroll.off(),
          Z.redraw.off(),
          pt = [],
          Gn = [],
          rt.state() === "pending" && ga()
      }
      ;
      $e(Z.ready);
      ga();
      Ea.exports = window.Webflow = Z
  }
  );
  var Ia = l(kn => {
      "use strict";
      Object.defineProperty(kn, "__esModule", {
          value: !0
      });
      function JE(e, t) {
          for (var r in t)
              Object.defineProperty(e, r, {
                  enumerable: !0,
                  get: t[r]
              })
      }
      JE(kn, {
          createInstance: function() {
              return ma
          },
          destroy: function() {
              return iy
          },
          destroyInstance: function() {
              return va
          },
          getInstance: function() {
              return ry
          },
          init: function() {
              return _a
          },
          ready: function() {
              return oy
          },
          setLoadHandler: function() {
              return ny
          }
      });
      var Un;
      async function ey() {
          let {Application: e} = await import("https://unpkg.com/@splinetool/runtime/build/runtime.js");
          Un = e
      }
      var Wt = new Map
        , kt = new Map
        , ty = new Event("w-spline-load")
        , Hn = class {
          spline;
          container;
          destroy() {
              this.container && (Wt.delete(this.container),
              kt.delete(this.container)),
              this.spline?.dispose?.()
          }
          async load(t, r) {
              Un || await ey();
              let n = t.querySelector("canvas")
                , i = new Un(n);
              await i.load(r),
              Wt.set(t, this),
              this.container = t,
              this.spline = i,
              t.dispatchEvent(ty),
              kt.has(t) && (kt.get(t)(i),
              kt.delete(t))
          }
      }
        , ya = () => Array.from(document.querySelectorAll('[data-animation-type="spline"]'))
        , ma = async (e, t) => {
          let r = Wt.get(e);
          return r == null && (r = new Hn),
          await r.load(e, t),
          r
      }
        , va = e => {
          Wt.get(e)?.destroy()
      }
        , ry = e => Wt.get(e)
        , ny = (e, t) => {
          kt.set(e, t)
      }
        , _a = () => {
          ya().forEach(e => {
              let t = e.getAttribute("data-spline-url");
              t && ma(e, t)
          }
          )
      }
        , iy = () => {
          ya().forEach(va)
      }
        , oy = _a
  }
  );
  var Aa = l( (_F, Ta) => {
      "use strict";
      var ay = Fe()
        , nt = Ia();
      ay.define("spline", Ta.exports = function() {
          return {
              createInstance: nt.createInstance,
              destroyInstance: nt.destroyInstance,
              getInstance: nt.getInstance,
              setLoadHandler: nt.setLoadHandler,
              init: nt.init,
              destroy: nt.destroy,
              ready: nt.ready
          }
      }
      )
  }
  );
  var Oa = l( (IF, Sa) => {
      "use strict";
      var ba = Fe();
      ba.define("brand", Sa.exports = function(e) {
          var t = {}, r = document, n = e("html"), i = e("body"), o = ".w-webflow-badge", a = window.location, s = /PhantomJS/i.test(navigator.userAgent), u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange", f;
          t.ready = function() {
              var v = n.attr("data-wf-status")
                , b = n.attr("data-wf-domain") || "";
              /\.webflow\.io$/i.test(b) && a.hostname !== b && (v = !0),
              v && !s && (f = f || p(),
              d(),
              setTimeout(d, 500),
              e(r).off(u, h).on(u, h))
          }
          ;
          function h() {
              var v = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
              e(f).attr("style", v ? "display: none !important;" : "")
          }
          function p() {
              var v = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs")
                , b = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                  marginRight: "4px",
                  width: "26px"
              })
                , m = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
              return v.append(b, m),
              v[0]
          }
          function d() {
              var v = i.children(o)
                , b = v.length && v.get(0) === f
                , m = ba.env("editor");
              if (b) {
                  m && v.remove();
                  return
              }
              v.length && v.remove(),
              m || i.append(f)
          }
          return t
      }
      )
  }
  );
  var wa = l( (TF, xa) => {
      "use strict";
      var Wn = Fe();
      Wn.define("edit", xa.exports = function(e, t, r) {
          if (r = r || {},
          (Wn.env("test") || Wn.env("frame")) && !r.fixture && !sy())
              return {
                  exit: 1
              };
          var n = {}, i = e(window), o = e(document.documentElement), a = document.location, s = "hashchange", u, f = r.load || d, h = !1;
          try {
              h = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
          } catch {}
          h ? f() : a.search ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && f() : i.on(s, p).triggerHandler(s);
          function p() {
              u || /\?edit/.test(a.hash) && f()
          }
          function d() {
              u = !0,
              window.WebflowEditor = !0,
              i.off(s, p),
              O(function(w) {
                  e.ajax({
                      url: E("https://editor-api.webflow.com/api/editor/view"),
                      data: {
                          siteId: o.attr("data-wf-site")
                      },
                      xhrFields: {
                          withCredentials: !0
                      },
                      dataType: "json",
                      crossDomain: !0,
                      success: v(w)
                  })
              })
          }
          function v(w) {
              return function(C) {
                  if (!C) {
                      console.error("Could not load editor data");
                      return
                  }
                  C.thirdPartyCookiesSupported = w,
                  b(A(C.scriptPath), function() {
                      window.WebflowEditor(C)
                  })
              }
          }
          function b(w, C) {
              e.ajax({
                  type: "GET",
                  url: w,
                  dataType: "script",
                  cache: !0
              }).then(C, m)
          }
          function m(w, C, x) {
              throw console.error("Could not load editor script: " + C),
              x
          }
          function A(w) {
              return w.indexOf("//") >= 0 ? w : E("https://editor-api.webflow.com" + w)
          }
          function E(w) {
              return w.replace(/([^:])\/\//g, "$1/")
          }
          function O(w) {
              var C = window.document.createElement("iframe");
              C.src = "https://webflow.com/site/third-party-cookie-check.html",
              C.style.display = "none",
              C.sandbox = "allow-scripts allow-same-origin";
              var x = function(D) {
                  D.data === "WF_third_party_cookies_unsupported" ? (T(C, x),
                  w(!1)) : D.data === "WF_third_party_cookies_supported" && (T(C, x),
                  w(!0))
              };
              C.onerror = function() {
                  T(C, x),
                  w(!1)
              }
              ,
              window.addEventListener("message", x, !1),
              window.document.body.appendChild(C)
          }
          function T(w, C) {
              window.removeEventListener("message", C, !1),
              w.remove()
          }
          return n
      }
      );
      function sy() {
          try {
              return window.top.__Cypress__
          } catch {
              return !1
          }
      }
  }
  );
  var Ca = l( (AF, Ra) => {
      "use strict";
      var uy = Fe();
      uy.define("focus-visible", Ra.exports = function() {
          function e(r) {
              var n = !0
                , i = !1
                , o = null
                , a = {
                  text: !0,
                  search: !0,
                  url: !0,
                  tel: !0,
                  email: !0,
                  password: !0,
                  number: !0,
                  date: !0,
                  month: !0,
                  week: !0,
                  time: !0,
                  datetime: !0,
                  "datetime-local": !0
              };
              function s(T) {
                  return !!(T && T !== document && T.nodeName !== "HTML" && T.nodeName !== "BODY" && "classList"in T && "contains"in T.classList)
              }
              function u(T) {
                  var w = T.type
                    , C = T.tagName;
                  return !!(C === "INPUT" && a[w] && !T.readOnly || C === "TEXTAREA" && !T.readOnly || T.isContentEditable)
              }
              function f(T) {
                  T.getAttribute("data-wf-focus-visible") || T.setAttribute("data-wf-focus-visible", "true")
              }
              function h(T) {
                  T.getAttribute("data-wf-focus-visible") && T.removeAttribute("data-wf-focus-visible")
              }
              function p(T) {
                  T.metaKey || T.altKey || T.ctrlKey || (s(r.activeElement) && f(r.activeElement),
                  n = !0)
              }
              function d() {
                  n = !1
              }
              function v(T) {
                  s(T.target) && (n || u(T.target)) && f(T.target)
              }
              function b(T) {
                  s(T.target) && T.target.hasAttribute("data-wf-focus-visible") && (i = !0,
                  window.clearTimeout(o),
                  o = window.setTimeout(function() {
                      i = !1
                  }, 100),
                  h(T.target))
              }
              function m() {
                  document.visibilityState === "hidden" && (i && (n = !0),
                  A())
              }
              function A() {
                  document.addEventListener("mousemove", O),
                  document.addEventListener("mousedown", O),
                  document.addEventListener("mouseup", O),
                  document.addEventListener("pointermove", O),
                  document.addEventListener("pointerdown", O),
                  document.addEventListener("pointerup", O),
                  document.addEventListener("touchmove", O),
                  document.addEventListener("touchstart", O),
                  document.addEventListener("touchend", O)
              }
              function E() {
                  document.removeEventListener("mousemove", O),
                  document.removeEventListener("mousedown", O),
                  document.removeEventListener("mouseup", O),
                  document.removeEventListener("pointermove", O),
                  document.removeEventListener("pointerdown", O),
                  document.removeEventListener("pointerup", O),
                  document.removeEventListener("touchmove", O),
                  document.removeEventListener("touchstart", O),
                  document.removeEventListener("touchend", O)
              }
              function O(T) {
                  T.target.nodeName && T.target.nodeName.toLowerCase() === "html" || (n = !1,
                  E())
              }
              document.addEventListener("keydown", p, !0),
              document.addEventListener("mousedown", d, !0),
              document.addEventListener("pointerdown", d, !0),
              document.addEventListener("touchstart", d, !0),
              document.addEventListener("visibilitychange", m, !0),
              A(),
              r.addEventListener("focus", v, !0),
              r.addEventListener("blur", b, !0)
          }
          function t() {
              if (typeof document < "u")
                  try {
                      document.querySelector(":focus-visible")
                  } catch {
                      e(document)
                  }
          }
          return {
              ready: t
          }
      }
      )
  }
  );
  var Na = l( (bF, Pa) => {
      "use strict";
      var La = Fe();
      La.define("focus", Pa.exports = function() {
          var e = []
            , t = !1;
          function r(a) {
              t && (a.preventDefault(),
              a.stopPropagation(),
              a.stopImmediatePropagation(),
              e.unshift(a))
          }
          function n(a) {
              var s = a.target
                , u = s.tagName;
              return /^a$/i.test(u) && s.href != null || /^(button|textarea)$/i.test(u) && s.disabled !== !0 || /^input$/i.test(u) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(u) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(u) || /^video$/i.test(u) && s.controls === !0
          }
          function i(a) {
              n(a) && (t = !0,
              setTimeout( () => {
                  for (t = !1,
                  a.target.focus(); e.length > 0; ) {
                      var s = e.pop();
                      s.target.dispatchEvent(new MouseEvent(s.type,s))
                  }
              }
              , 0))
          }
          function o() {
              typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && La.env.safari && (document.addEventListener("mousedown", i, !0),
              document.addEventListener("mouseup", r, !0),
              document.addEventListener("click", r, !0))
          }
          return {
              ready: o
          }
      }
      )
  }
  );
  var Fa = l( (SF, Da) => {
      "use strict";
      var zn = window.jQuery
        , qe = {}
        , Or = []
        , Ma = ".w-ix"
        , xr = {
          reset: function(e, t) {
              t.__wf_intro = null
          },
          intro: function(e, t) {
              t.__wf_intro || (t.__wf_intro = !0,
              zn(t).triggerHandler(qe.types.INTRO))
          },
          outro: function(e, t) {
              t.__wf_intro && (t.__wf_intro = null,
              zn(t).triggerHandler(qe.types.OUTRO))
          }
      };
      qe.triggers = {};
      qe.types = {
          INTRO: "w-ix-intro" + Ma,
          OUTRO: "w-ix-outro" + Ma
      };
      qe.init = function() {
          for (var e = Or.length, t = 0; t < e; t++) {
              var r = Or[t];
              r[0](0, r[1])
          }
          Or = [],
          zn.extend(qe.triggers, xr)
      }
      ;
      qe.async = function() {
          for (var e in xr) {
              var t = xr[e];
              xr.hasOwnProperty(e) && (qe.triggers[e] = function(r, n) {
                  Or.push([t, n])
              }
              )
          }
      }
      ;
      qe.async();
      Da.exports = qe
  }
  );
  var Va = l( (OF, Ga) => {
      "use strict";
      var Kn = Fa();
      function qa(e, t) {
          var r = document.createEvent("CustomEvent");
          r.initCustomEvent(t, !0, !0, null),
          e.dispatchEvent(r)
      }
      var cy = window.jQuery
        , wr = {}
        , Xa = ".w-ix"
        , ly = {
          reset: function(e, t) {
              Kn.triggers.reset(e, t)
          },
          intro: function(e, t) {
              Kn.triggers.intro(e, t),
              qa(t, "COMPONENT_ACTIVE")
          },
          outro: function(e, t) {
              Kn.triggers.outro(e, t),
              qa(t, "COMPONENT_INACTIVE")
          }
      };
      wr.triggers = {};
      wr.types = {
          INTRO: "w-ix-intro" + Xa,
          OUTRO: "w-ix-outro" + Xa
      };
      cy.extend(wr.triggers, ly);
      Ga.exports = wr
  }
  );
  var jn = l( (xF, Ba) => {
      var fy = typeof global == "object" && global && global.Object === Object && global;
      Ba.exports = fy
  }
  );
  var Re = l( (wF, Ua) => {
      var dy = jn()
        , py = typeof self == "object" && self && self.Object === Object && self
        , hy = dy || py || Function("return this")();
      Ua.exports = hy
  }
  );
  var ht = l( (RF, Ha) => {
      var gy = Re()
        , Ey = gy.Symbol;
      Ha.exports = Ey
  }
  );
  var Ka = l( (CF, za) => {
      var ka = ht()
        , Wa = Object.prototype
        , yy = Wa.hasOwnProperty
        , my = Wa.toString
        , zt = ka ? ka.toStringTag : void 0;
      function vy(e) {
          var t = yy.call(e, zt)
            , r = e[zt];
          try {
              e[zt] = void 0;
              var n = !0
          } catch {}
          var i = my.call(e);
          return n && (t ? e[zt] = r : delete e[zt]),
          i
      }
      za.exports = vy
  }
  );
  var Ya = l( (LF, ja) => {
      var _y = Object.prototype
        , Iy = _y.toString;
      function Ty(e) {
          return Iy.call(e)
      }
      ja.exports = Ty
  }
  );
  var Qe = l( (PF, Za) => {
      var $a = ht()
        , Ay = Ka()
        , by = Ya()
        , Sy = "[object Null]"
        , Oy = "[object Undefined]"
        , Qa = $a ? $a.toStringTag : void 0;
      function xy(e) {
          return e == null ? e === void 0 ? Oy : Sy : Qa && Qa in Object(e) ? Ay(e) : by(e)
      }
      Za.exports = xy
  }
  );
  var Yn = l( (NF, Ja) => {
      function wy(e, t) {
          return function(r) {
              return e(t(r))
          }
      }
      Ja.exports = wy
  }
  );
  var $n = l( (MF, es) => {
      var Ry = Yn()
        , Cy = Ry(Object.getPrototypeOf, Object);
      es.exports = Cy
  }
  );
  var He = l( (DF, ts) => {
      function Ly(e) {
          return e != null && typeof e == "object"
      }
      ts.exports = Ly
  }
  );
  var Qn = l( (FF, ns) => {
      var Py = Qe()
        , Ny = $n()
        , My = He()
        , Dy = "[object Object]"
        , Fy = Function.prototype
        , qy = Object.prototype
        , rs = Fy.toString
        , Xy = qy.hasOwnProperty
        , Gy = rs.call(Object);
      function Vy(e) {
          if (!My(e) || Py(e) != Dy)
              return !1;
          var t = Ny(e);
          if (t === null)
              return !0;
          var r = Xy.call(t, "constructor") && t.constructor;
          return typeof r == "function" && r instanceof r && rs.call(r) == Gy
      }
      ns.exports = Vy
  }
  );
  var is = l(Zn => {
      "use strict";
      Object.defineProperty(Zn, "__esModule", {
          value: !0
      });
      Zn.default = By;
      function By(e) {
          var t, r = e.Symbol;
          return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"),
          r.observable = t) : t = "@@observable",
          t
      }
  }
  );
  var os = l( (ei, Jn) => {
      "use strict";
      Object.defineProperty(ei, "__esModule", {
          value: !0
      });
      var Uy = is()
        , Hy = ky(Uy);
      function ky(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      var gt;
      typeof self < "u" ? gt = self : typeof window < "u" ? gt = window : typeof global < "u" ? gt = global : typeof Jn < "u" ? gt = Jn : gt = Function("return this")();
      var Wy = (0,
      Hy.default)(gt);
      ei.default = Wy
  }
  );
  var ti = l(Kt => {
      "use strict";
      Kt.__esModule = !0;
      Kt.ActionTypes = void 0;
      Kt.default = cs;
      var zy = Qn()
        , Ky = us(zy)
        , jy = os()
        , as = us(jy);
      function us(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      var ss = Kt.ActionTypes = {
          INIT: "@@redux/INIT"
      };
      function cs(e, t, r) {
          var n;
          if (typeof t == "function" && typeof r > "u" && (r = t,
          t = void 0),
          typeof r < "u") {
              if (typeof r != "function")
                  throw new Error("Expected the enhancer to be a function.");
              return r(cs)(e, t)
          }
          if (typeof e != "function")
              throw new Error("Expected the reducer to be a function.");
          var i = e
            , o = t
            , a = []
            , s = a
            , u = !1;
          function f() {
              s === a && (s = a.slice())
          }
          function h() {
              return o
          }
          function p(m) {
              if (typeof m != "function")
                  throw new Error("Expected listener to be a function.");
              var A = !0;
              return f(),
              s.push(m),
              function() {
                  if (A) {
                      A = !1,
                      f();
                      var O = s.indexOf(m);
                      s.splice(O, 1)
                  }
              }
          }
          function d(m) {
              if (!(0,
              Ky.default)(m))
                  throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
              if (typeof m.type > "u")
                  throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
              if (u)
                  throw new Error("Reducers may not dispatch actions.");
              try {
                  u = !0,
                  o = i(o, m)
              } finally {
                  u = !1
              }
              for (var A = a = s, E = 0; E < A.length; E++)
                  A[E]();
              return m
          }
          function v(m) {
              if (typeof m != "function")
                  throw new Error("Expected the nextReducer to be a function.");
              i = m,
              d({
                  type: ss.INIT
              })
          }
          function b() {
              var m, A = p;
              return m = {
                  subscribe: function(O) {
                      if (typeof O != "object")
                          throw new TypeError("Expected the observer to be an object.");
                      function T() {
                          O.next && O.next(h())
                      }
                      T();
                      var w = A(T);
                      return {
                          unsubscribe: w
                      }
                  }
              },
              m[as.default] = function() {
                  return this
              }
              ,
              m
          }
          return d({
              type: ss.INIT
          }),
          n = {
              dispatch: d,
              subscribe: p,
              getState: h,
              replaceReducer: v
          },
          n[as.default] = b,
          n
      }
  }
  );
  var ni = l(ri => {
      "use strict";
      ri.__esModule = !0;
      ri.default = Yy;
      function Yy(e) {
          typeof console < "u" && typeof console.error == "function" && console.error(e);
          try {
              throw new Error(e)
          } catch {}
      }
  }
  );
  var ds = l(ii => {
      "use strict";
      ii.__esModule = !0;
      ii.default = em;
      var ls = ti()
        , $y = Qn()
        , VF = fs($y)
        , Qy = ni()
        , BF = fs(Qy);
      function fs(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      function Zy(e, t) {
          var r = t && t.type
            , n = r && '"' + r.toString() + '"' || "an action";
          return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      }
      function Jy(e) {
          Object.keys(e).forEach(function(t) {
              var r = e[t]
                , n = r(void 0, {
                  type: ls.ActionTypes.INIT
              });
              if (typeof n > "u")
                  throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
              var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
              if (typeof r(void 0, {
                  type: i
              }) > "u")
                  throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + ls.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
          })
      }
      function em(e) {
          for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
              var i = t[n];
              typeof e[i] == "function" && (r[i] = e[i])
          }
          var o = Object.keys(r);
          if (!1)
              var a;
          var s;
          try {
              Jy(r)
          } catch (u) {
              s = u
          }
          return function() {
              var f = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0]
                , h = arguments[1];
              if (s)
                  throw s;
              if (!1)
                  var p;
              for (var d = !1, v = {}, b = 0; b < o.length; b++) {
                  var m = o[b]
                    , A = r[m]
                    , E = f[m]
                    , O = A(E, h);
                  if (typeof O > "u") {
                      var T = Zy(m, h);
                      throw new Error(T)
                  }
                  v[m] = O,
                  d = d || O !== E
              }
              return d ? v : f
          }
      }
  }
  );
  var hs = l(oi => {
      "use strict";
      oi.__esModule = !0;
      oi.default = tm;
      function ps(e, t) {
          return function() {
              return t(e.apply(void 0, arguments))
          }
      }
      function tm(e, t) {
          if (typeof e == "function")
              return ps(e, t);
          if (typeof e != "object" || e === null)
              throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
          for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
              var o = r[i]
                , a = e[o];
              typeof a == "function" && (n[o] = ps(a, t))
          }
          return n
      }
  }
  );
  var si = l(ai => {
      "use strict";
      ai.__esModule = !0;
      ai.default = rm;
      function rm() {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
              t[r] = arguments[r];
          if (t.length === 0)
              return function(o) {
                  return o
              }
              ;
          if (t.length === 1)
              return t[0];
          var n = t[t.length - 1]
            , i = t.slice(0, -1);
          return function() {
              return i.reduceRight(function(o, a) {
                  return a(o)
              }, n.apply(void 0, arguments))
          }
      }
  }
  );
  var gs = l(ui => {
      "use strict";
      ui.__esModule = !0;
      var nm = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
      }
      ;
      ui.default = sm;
      var im = si()
        , om = am(im);
      function am(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      function sm() {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
              t[r] = arguments[r];
          return function(n) {
              return function(i, o, a) {
                  var s = n(i, o, a)
                    , u = s.dispatch
                    , f = []
                    , h = {
                      getState: s.getState,
                      dispatch: function(d) {
                          return u(d)
                      }
                  };
                  return f = t.map(function(p) {
                      return p(h)
                  }),
                  u = om.default.apply(void 0, f)(s.dispatch),
                  nm({}, s, {
                      dispatch: u
                  })
              }
          }
      }
  }
  );
  var ci = l(Ae => {
      "use strict";
      Ae.__esModule = !0;
      Ae.compose = Ae.applyMiddleware = Ae.bindActionCreators = Ae.combineReducers = Ae.createStore = void 0;
      var um = ti()
        , cm = Et(um)
        , lm = ds()
        , fm = Et(lm)
        , dm = hs()
        , pm = Et(dm)
        , hm = gs()
        , gm = Et(hm)
        , Em = si()
        , ym = Et(Em)
        , mm = ni()
        , zF = Et(mm);
      function Et(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      Ae.createStore = cm.default;
      Ae.combineReducers = fm.default;
      Ae.bindActionCreators = pm.default;
      Ae.applyMiddleware = gm.default;
      Ae.compose = ym.default
  }
  );
  var Ce, li, Xe, vm, _m, Rr, Im, fi = re( () => {
      "use strict";
      Ce = {
          NAVBAR_OPEN: "NAVBAR_OPEN",
          NAVBAR_CLOSE: "NAVBAR_CLOSE",
          TAB_ACTIVE: "TAB_ACTIVE",
          TAB_INACTIVE: "TAB_INACTIVE",
          SLIDER_ACTIVE: "SLIDER_ACTIVE",
          SLIDER_INACTIVE: "SLIDER_INACTIVE",
          DROPDOWN_OPEN: "DROPDOWN_OPEN",
          DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
          MOUSE_CLICK: "MOUSE_CLICK",
          MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
          MOUSE_DOWN: "MOUSE_DOWN",
          MOUSE_UP: "MOUSE_UP",
          MOUSE_OVER: "MOUSE_OVER",
          MOUSE_OUT: "MOUSE_OUT",
          MOUSE_MOVE: "MOUSE_MOVE",
          MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
          SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
          SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
          SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
          ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
          ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
          PAGE_START: "PAGE_START",
          PAGE_FINISH: "PAGE_FINISH",
          PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
          PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
          PAGE_SCROLL: "PAGE_SCROLL"
      },
      li = {
          ELEMENT: "ELEMENT",
          CLASS: "CLASS",
          PAGE: "PAGE"
      },
      Xe = {
          ELEMENT: "ELEMENT",
          VIEWPORT: "VIEWPORT"
      },
      vm = {
          X_AXIS: "X_AXIS",
          Y_AXIS: "Y_AXIS"
      },
      _m = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
      },
      Rr = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
      },
      Im = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
      }
  }
  );
  var me, Tm, Cr = re( () => {
      "use strict";
      me = {
          TRANSFORM_MOVE: "TRANSFORM_MOVE",
          TRANSFORM_SCALE: "TRANSFORM_SCALE",
          TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
          TRANSFORM_SKEW: "TRANSFORM_SKEW",
          STYLE_OPACITY: "STYLE_OPACITY",
          STYLE_SIZE: "STYLE_SIZE",
          STYLE_FILTER: "STYLE_FILTER",
          STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
          STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
          STYLE_BORDER: "STYLE_BORDER",
          STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
          OBJECT_VALUE: "OBJECT_VALUE",
          PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
          PLUGIN_SPLINE: "PLUGIN_SPLINE",
          PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
          GENERAL_DISPLAY: "GENERAL_DISPLAY",
          GENERAL_START_ACTION: "GENERAL_START_ACTION",
          GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
          GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
          GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
          GENERAL_LOOP: "GENERAL_LOOP",
          STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
      },
      Tm = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
      }
  }
  );
  var Am, Es = re( () => {
      "use strict";
      Am = {
          MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
          MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
          MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
          SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
          SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
          MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
          PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
          PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
          PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
          NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
          DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
          ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
          TAB_INTERACTION: "TAB_INTERACTION",
          SLIDER_INTERACTION: "SLIDER_INTERACTION"
      }
  }
  );
  var bm, Sm, Om, xm, wm, Rm, Cm, di, ys = re( () => {
      "use strict";
      Cr();
      ({TRANSFORM_MOVE: bm, TRANSFORM_SCALE: Sm, TRANSFORM_ROTATE: Om, TRANSFORM_SKEW: xm, STYLE_SIZE: wm, STYLE_FILTER: Rm, STYLE_FONT_VARIATION: Cm} = me),
      di = {
          [bm]: !0,
          [Sm]: !0,
          [Om]: !0,
          [xm]: !0,
          [wm]: !0,
          [Rm]: !0,
          [Cm]: !0
      }
  }
  );
  var se = {};
  ye(se, {
      IX2_ACTION_LIST_PLAYBACK_CHANGED: () => Km,
      IX2_ANIMATION_FRAME_CHANGED: () => Bm,
      IX2_CLEAR_REQUESTED: () => Xm,
      IX2_ELEMENT_STATE_CHANGED: () => zm,
      IX2_EVENT_LISTENER_ADDED: () => Gm,
      IX2_EVENT_STATE_CHANGED: () => Vm,
      IX2_INSTANCE_ADDED: () => Hm,
      IX2_INSTANCE_REMOVED: () => Wm,
      IX2_INSTANCE_STARTED: () => km,
      IX2_MEDIA_QUERIES_DEFINED: () => Ym,
      IX2_PARAMETER_CHANGED: () => Um,
      IX2_PLAYBACK_REQUESTED: () => Fm,
      IX2_PREVIEW_REQUESTED: () => Dm,
      IX2_RAW_DATA_IMPORTED: () => Lm,
      IX2_SESSION_INITIALIZED: () => Pm,
      IX2_SESSION_STARTED: () => Nm,
      IX2_SESSION_STOPPED: () => Mm,
      IX2_STOP_REQUESTED: () => qm,
      IX2_TEST_FRAME_RENDERED: () => $m,
      IX2_VIEWPORT_WIDTH_CHANGED: () => jm
  });
  var Lm, Pm, Nm, Mm, Dm, Fm, qm, Xm, Gm, Vm, Bm, Um, Hm, km, Wm, zm, Km, jm, Ym, $m, ms = re( () => {
      "use strict";
      Lm = "IX2_RAW_DATA_IMPORTED",
      Pm = "IX2_SESSION_INITIALIZED",
      Nm = "IX2_SESSION_STARTED",
      Mm = "IX2_SESSION_STOPPED",
      Dm = "IX2_PREVIEW_REQUESTED",
      Fm = "IX2_PLAYBACK_REQUESTED",
      qm = "IX2_STOP_REQUESTED",
      Xm = "IX2_CLEAR_REQUESTED",
      Gm = "IX2_EVENT_LISTENER_ADDED",
      Vm = "IX2_EVENT_STATE_CHANGED",
      Bm = "IX2_ANIMATION_FRAME_CHANGED",
      Um = "IX2_PARAMETER_CHANGED",
      Hm = "IX2_INSTANCE_ADDED",
      km = "IX2_INSTANCE_STARTED",
      Wm = "IX2_INSTANCE_REMOVED",
      zm = "IX2_ELEMENT_STATE_CHANGED",
      Km = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
      jm = "IX2_VIEWPORT_WIDTH_CHANGED",
      Ym = "IX2_MEDIA_QUERIES_DEFINED",
      $m = "IX2_TEST_FRAME_RENDERED"
  }
  );
  var ce = {};
  ye(ce, {
      ABSTRACT_NODE: () => jv,
      AUTO: () => qv,
      BACKGROUND: () => Lv,
      BACKGROUND_COLOR: () => Cv,
      BAR_DELIMITER: () => Vv,
      BORDER_COLOR: () => Pv,
      BOUNDARY_SELECTOR: () => tv,
      CHILDREN: () => Bv,
      COLON_DELIMITER: () => Gv,
      COLOR: () => Nv,
      COMMA_DELIMITER: () => Xv,
      CONFIG_UNIT: () => cv,
      CONFIG_VALUE: () => ov,
      CONFIG_X_UNIT: () => av,
      CONFIG_X_VALUE: () => rv,
      CONFIG_Y_UNIT: () => sv,
      CONFIG_Y_VALUE: () => nv,
      CONFIG_Z_UNIT: () => uv,
      CONFIG_Z_VALUE: () => iv,
      DISPLAY: () => Mv,
      FILTER: () => Ov,
      FLEX: () => Dv,
      FONT_VARIATION_SETTINGS: () => xv,
      HEIGHT: () => Rv,
      HTML_ELEMENT: () => zv,
      IMMEDIATE_CHILDREN: () => Uv,
      IX2_ID_DELIMITER: () => Qm,
      OPACITY: () => Sv,
      PARENT: () => kv,
      PLAIN_OBJECT: () => Kv,
      PRESERVE_3D: () => Wv,
      RENDER_GENERAL: () => $v,
      RENDER_PLUGIN: () => Zv,
      RENDER_STYLE: () => Qv,
      RENDER_TRANSFORM: () => Yv,
      ROTATE_X: () => vv,
      ROTATE_Y: () => _v,
      ROTATE_Z: () => Iv,
      SCALE_3D: () => mv,
      SCALE_X: () => gv,
      SCALE_Y: () => Ev,
      SCALE_Z: () => yv,
      SIBLINGS: () => Hv,
      SKEW: () => Tv,
      SKEW_X: () => Av,
      SKEW_Y: () => bv,
      TRANSFORM: () => lv,
      TRANSLATE_3D: () => hv,
      TRANSLATE_X: () => fv,
      TRANSLATE_Y: () => dv,
      TRANSLATE_Z: () => pv,
      WF_PAGE: () => Zm,
      WIDTH: () => wv,
      WILL_CHANGE: () => Fv,
      W_MOD_IX: () => ev,
      W_MOD_JS: () => Jm
  });
  var Qm, Zm, Jm, ev, tv, rv, nv, iv, ov, av, sv, uv, cv, lv, fv, dv, pv, hv, gv, Ev, yv, mv, vv, _v, Iv, Tv, Av, bv, Sv, Ov, xv, wv, Rv, Cv, Lv, Pv, Nv, Mv, Dv, Fv, qv, Xv, Gv, Vv, Bv, Uv, Hv, kv, Wv, zv, Kv, jv, Yv, $v, Qv, Zv, vs = re( () => {
      "use strict";
      Qm = "|",
      Zm = "data-wf-page",
      Jm = "w-mod-js",
      ev = "w-mod-ix",
      tv = ".w-dyn-item",
      rv = "xValue",
      nv = "yValue",
      iv = "zValue",
      ov = "value",
      av = "xUnit",
      sv = "yUnit",
      uv = "zUnit",
      cv = "unit",
      lv = "transform",
      fv = "translateX",
      dv = "translateY",
      pv = "translateZ",
      hv = "translate3d",
      gv = "scaleX",
      Ev = "scaleY",
      yv = "scaleZ",
      mv = "scale3d",
      vv = "rotateX",
      _v = "rotateY",
      Iv = "rotateZ",
      Tv = "skew",
      Av = "skewX",
      bv = "skewY",
      Sv = "opacity",
      Ov = "filter",
      xv = "font-variation-settings",
      wv = "width",
      Rv = "height",
      Cv = "backgroundColor",
      Lv = "background",
      Pv = "borderColor",
      Nv = "color",
      Mv = "display",
      Dv = "flex",
      Fv = "willChange",
      qv = "AUTO",
      Xv = ",",
      Gv = ":",
      Vv = "|",
      Bv = "CHILDREN",
      Uv = "IMMEDIATE_CHILDREN",
      Hv = "SIBLINGS",
      kv = "PARENT",
      Wv = "preserve-3d",
      zv = "HTML_ELEMENT",
      Kv = "PLAIN_OBJECT",
      jv = "ABSTRACT_NODE",
      Yv = "RENDER_TRANSFORM",
      $v = "RENDER_GENERAL",
      Qv = "RENDER_STYLE",
      Zv = "RENDER_PLUGIN"
  }
  );
  var _s = {};
  ye(_s, {
      ActionAppliesTo: () => Tm,
      ActionTypeConsts: () => me,
      EventAppliesTo: () => li,
      EventBasedOn: () => Xe,
      EventContinuousMouseAxes: () => vm,
      EventLimitAffectedElements: () => _m,
      EventTypeConsts: () => Ce,
      IX2EngineActionTypes: () => se,
      IX2EngineConstants: () => ce,
      InteractionTypeConsts: () => Am,
      QuickEffectDirectionConsts: () => Im,
      QuickEffectIds: () => Rr,
      ReducedMotionTypes: () => di
  });
  var ve = re( () => {
      "use strict";
      fi();
      Cr();
      Es();
      ys();
      ms();
      vs();
      Cr();
      fi()
  }
  );
  var Jv, Is, Ts = re( () => {
      "use strict";
      ve();
      ({IX2_RAW_DATA_IMPORTED: Jv} = se),
      Is = (e=Object.freeze({}), t) => {
          switch (t.type) {
          case Jv:
              return t.payload.ixData || Object.freeze({});
          default:
              return e
          }
      }
  }
  );
  var yt = l(ie => {
      "use strict";
      Object.defineProperty(ie, "__esModule", {
          value: !0
      });
      var e_ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
          return typeof e
      }
      : function(e) {
          return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }
      ;
      ie.clone = Pr;
      ie.addLast = Ss;
      ie.addFirst = Os;
      ie.removeLast = xs;
      ie.removeFirst = ws;
      ie.insert = Rs;
      ie.removeAt = Cs;
      ie.replaceAt = Ls;
      ie.getIn = Nr;
      ie.set = Mr;
      ie.setIn = Dr;
      ie.update = Ns;
      ie.updateIn = Ms;
      ie.merge = Ds;
      ie.mergeDeep = Fs;
      ie.mergeIn = qs;
      ie.omit = Xs;
      ie.addDefaults = Gs;
      var As = "INVALID_ARGS";
      function bs(e) {
          throw new Error(e)
      }
      function pi(e) {
          var t = Object.keys(e);
          return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
      }
      var t_ = {}.hasOwnProperty;
      function Pr(e) {
          if (Array.isArray(e))
              return e.slice();
          for (var t = pi(e), r = {}, n = 0; n < t.length; n++) {
              var i = t[n];
              r[i] = e[i]
          }
          return r
      }
      function _e(e, t, r) {
          var n = r;
          n == null && bs(As);
          for (var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3; s < o; s++)
              a[s - 3] = arguments[s];
          for (var u = 0; u < a.length; u++) {
              var f = a[u];
              if (f != null) {
                  var h = pi(f);
                  if (h.length)
                      for (var p = 0; p <= h.length; p++) {
                          var d = h[p];
                          if (!(e && n[d] !== void 0)) {
                              var v = f[d];
                              t && Lr(n[d]) && Lr(v) && (v = _e(e, t, n[d], v)),
                              !(v === void 0 || v === n[d]) && (i || (i = !0,
                              n = Pr(n)),
                              n[d] = v)
                          }
                      }
              }
          }
          return n
      }
      function Lr(e) {
          var t = typeof e > "u" ? "undefined" : e_(e);
          return e != null && (t === "object" || t === "function")
      }
      function Ss(e, t) {
          return Array.isArray(t) ? e.concat(t) : e.concat([t])
      }
      function Os(e, t) {
          return Array.isArray(t) ? t.concat(e) : [t].concat(e)
      }
      function xs(e) {
          return e.length ? e.slice(0, e.length - 1) : e
      }
      function ws(e) {
          return e.length ? e.slice(1) : e
      }
      function Rs(e, t, r) {
          return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
      }
      function Cs(e, t) {
          return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
      }
      function Ls(e, t, r) {
          if (e[t] === r)
              return e;
          for (var n = e.length, i = Array(n), o = 0; o < n; o++)
              i[o] = e[o];
          return i[t] = r,
          i
      }
      function Nr(e, t) {
          if (!Array.isArray(t) && bs(As),
          e != null) {
              for (var r = e, n = 0; n < t.length; n++) {
                  var i = t[n];
                  if (r = r?.[i],
                  r === void 0)
                      return r
              }
              return r
          }
      }
      function Mr(e, t, r) {
          var n = typeof t == "number" ? [] : {}
            , i = e ?? n;
          if (i[t] === r)
              return i;
          var o = Pr(i);
          return o[t] = r,
          o
      }
      function Ps(e, t, r, n) {
          var i = void 0
            , o = t[n];
          if (n === t.length - 1)
              i = r;
          else {
              var a = Lr(e) && Lr(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
              i = Ps(a, t, r, n + 1)
          }
          return Mr(e, o, i)
      }
      function Dr(e, t, r) {
          return t.length ? Ps(e, t, r, 0) : r
      }
      function Ns(e, t, r) {
          var n = e?.[t]
            , i = r(n);
          return Mr(e, t, i)
      }
      function Ms(e, t, r) {
          var n = Nr(e, t)
            , i = r(n);
          return Dr(e, t, i)
      }
      function Ds(e, t, r, n, i, o) {
          for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++)
              s[u - 6] = arguments[u];
          return s.length ? _e.call.apply(_e, [null, !1, !1, e, t, r, n, i, o].concat(s)) : _e(!1, !1, e, t, r, n, i, o)
      }
      function Fs(e, t, r, n, i, o) {
          for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++)
              s[u - 6] = arguments[u];
          return s.length ? _e.call.apply(_e, [null, !1, !0, e, t, r, n, i, o].concat(s)) : _e(!1, !0, e, t, r, n, i, o)
      }
      function qs(e, t, r, n, i, o, a) {
          var s = Nr(e, t);
          s == null && (s = {});
          for (var u = void 0, f = arguments.length, h = Array(f > 7 ? f - 7 : 0), p = 7; p < f; p++)
              h[p - 7] = arguments[p];
          return h.length ? u = _e.call.apply(_e, [null, !1, !1, s, r, n, i, o, a].concat(h)) : u = _e(!1, !1, s, r, n, i, o, a),
          Dr(e, t, u)
      }
      function Xs(e, t) {
          for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
              if (t_.call(e, r[i])) {
                  n = !0;
                  break
              }
          if (!n)
              return e;
          for (var o = {}, a = pi(e), s = 0; s < a.length; s++) {
              var u = a[s];
              r.indexOf(u) >= 0 || (o[u] = e[u])
          }
          return o
      }
      function Gs(e, t, r, n, i, o) {
          for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++)
              s[u - 6] = arguments[u];
          return s.length ? _e.call.apply(_e, [null, !0, !1, e, t, r, n, i, o].concat(s)) : _e(!0, !1, e, t, r, n, i, o)
      }
      var r_ = {
          clone: Pr,
          addLast: Ss,
          addFirst: Os,
          removeLast: xs,
          removeFirst: ws,
          insert: Rs,
          removeAt: Cs,
          replaceAt: Ls,
          getIn: Nr,
          set: Mr,
          setIn: Dr,
          update: Ns,
          updateIn: Ms,
          merge: Ds,
          mergeDeep: Fs,
          mergeIn: qs,
          omit: Xs,
          addDefaults: Gs
      };
      ie.default = r_
  }
  );
  var Bs, n_, i_, o_, a_, s_, Vs, Us, Hs = re( () => {
      "use strict";
      ve();
      Bs = $(yt()),
      {IX2_PREVIEW_REQUESTED: n_, IX2_PLAYBACK_REQUESTED: i_, IX2_STOP_REQUESTED: o_, IX2_CLEAR_REQUESTED: a_} = se,
      s_ = {
          preview: {},
          playback: {},
          stop: {},
          clear: {}
      },
      Vs = Object.create(null, {
          [n_]: {
              value: "preview"
          },
          [i_]: {
              value: "playback"
          },
          [o_]: {
              value: "stop"
          },
          [a_]: {
              value: "clear"
          }
      }),
      Us = (e=s_, t) => {
          if (t.type in Vs) {
              let r = [Vs[t.type]];
              return (0,
              Bs.setIn)(e, [r], {
                  ...t.payload
              })
          }
          return e
      }
  }
  );
  var pe, u_, c_, l_, f_, d_, p_, h_, g_, E_, y_, ks, m_, Ws, zs = re( () => {
      "use strict";
      ve();
      pe = $(yt()),
      {IX2_SESSION_INITIALIZED: u_, IX2_SESSION_STARTED: c_, IX2_TEST_FRAME_RENDERED: l_, IX2_SESSION_STOPPED: f_, IX2_EVENT_LISTENER_ADDED: d_, IX2_EVENT_STATE_CHANGED: p_, IX2_ANIMATION_FRAME_CHANGED: h_, IX2_ACTION_LIST_PLAYBACK_CHANGED: g_, IX2_VIEWPORT_WIDTH_CHANGED: E_, IX2_MEDIA_QUERIES_DEFINED: y_} = se,
      ks = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1
      },
      m_ = 20,
      Ws = (e=ks, t) => {
          switch (t.type) {
          case u_:
              {
                  let {hasBoundaryNodes: r, reducedMotion: n} = t.payload;
                  return (0,
                  pe.merge)(e, {
                      hasBoundaryNodes: r,
                      reducedMotion: n
                  })
              }
          case c_:
              return (0,
              pe.set)(e, "active", !0);
          case l_:
              {
                  let {payload: {step: r=m_}} = t;
                  return (0,
                  pe.set)(e, "tick", e.tick + r)
              }
          case f_:
              return ks;
          case h_:
              {
                  let {payload: {now: r}} = t;
                  return (0,
                  pe.set)(e, "tick", r)
              }
          case d_:
              {
                  let r = (0,
                  pe.addLast)(e.eventListeners, t.payload);
                  return (0,
                  pe.set)(e, "eventListeners", r)
              }
          case p_:
              {
                  let {stateKey: r, newState: n} = t.payload;
                  return (0,
                  pe.setIn)(e, ["eventState", r], n)
              }
          case g_:
              {
                  let {actionListId: r, isPlaying: n} = t.payload;
                  return (0,
                  pe.setIn)(e, ["playbackState", r], n)
              }
          case E_:
              {
                  let {width: r, mediaQueries: n} = t.payload
                    , i = n.length
                    , o = null;
                  for (let a = 0; a < i; a++) {
                      let {key: s, min: u, max: f} = n[a];
                      if (r >= u && r <= f) {
                          o = s;
                          break
                      }
                  }
                  return (0,
                  pe.merge)(e, {
                      viewportWidth: r,
                      mediaQueryKey: o
                  })
              }
          case y_:
              return (0,
              pe.set)(e, "hasDefinedMediaQueries", !0);
          default:
              return e
          }
      }
  }
  );
  var js = l( (d2, Ks) => {
      function v_() {
          this.__data__ = [],
          this.size = 0
      }
      Ks.exports = v_
  }
  );
  var Fr = l( (p2, Ys) => {
      function __(e, t) {
          return e === t || e !== e && t !== t
      }
      Ys.exports = __
  }
  );
  var jt = l( (h2, $s) => {
      var I_ = Fr();
      function T_(e, t) {
          for (var r = e.length; r--; )
              if (I_(e[r][0], t))
                  return r;
          return -1
      }
      $s.exports = T_
  }
  );
  var Zs = l( (g2, Qs) => {
      var A_ = jt()
        , b_ = Array.prototype
        , S_ = b_.splice;
      function O_(e) {
          var t = this.__data__
            , r = A_(t, e);
          if (r < 0)
              return !1;
          var n = t.length - 1;
          return r == n ? t.pop() : S_.call(t, r, 1),
          --this.size,
          !0
      }
      Qs.exports = O_
  }
  );
  var eu = l( (E2, Js) => {
      var x_ = jt();
      function w_(e) {
          var t = this.__data__
            , r = x_(t, e);
          return r < 0 ? void 0 : t[r][1]
      }
      Js.exports = w_
  }
  );
  var ru = l( (y2, tu) => {
      var R_ = jt();
      function C_(e) {
          return R_(this.__data__, e) > -1
      }
      tu.exports = C_
  }
  );
  var iu = l( (m2, nu) => {
      var L_ = jt();
      function P_(e, t) {
          var r = this.__data__
            , n = L_(r, e);
          return n < 0 ? (++this.size,
          r.push([e, t])) : r[n][1] = t,
          this
      }
      nu.exports = P_
  }
  );
  var Yt = l( (v2, ou) => {
      var N_ = js()
        , M_ = Zs()
        , D_ = eu()
        , F_ = ru()
        , q_ = iu();
      function mt(e) {
          var t = -1
            , r = e == null ? 0 : e.length;
          for (this.clear(); ++t < r; ) {
              var n = e[t];
              this.set(n[0], n[1])
          }
      }
      mt.prototype.clear = N_;
      mt.prototype.delete = M_;
      mt.prototype.get = D_;
      mt.prototype.has = F_;
      mt.prototype.set = q_;
      ou.exports = mt
  }
  );
  var su = l( (_2, au) => {
      var X_ = Yt();
      function G_() {
          this.__data__ = new X_,
          this.size = 0
      }
      au.exports = G_
  }
  );
  var cu = l( (I2, uu) => {
      function V_(e) {
          var t = this.__data__
            , r = t.delete(e);
          return this.size = t.size,
          r
      }
      uu.exports = V_
  }
  );
  var fu = l( (T2, lu) => {
      function B_(e) {
          return this.__data__.get(e)
      }
      lu.exports = B_
  }
  );
  var pu = l( (A2, du) => {
      function U_(e) {
          return this.__data__.has(e)
      }
      du.exports = U_
  }
  );
  var Ge = l( (b2, hu) => {
      function H_(e) {
          var t = typeof e;
          return e != null && (t == "object" || t == "function")
      }
      hu.exports = H_
  }
  );
  var hi = l( (S2, gu) => {
      var k_ = Qe()
        , W_ = Ge()
        , z_ = "[object AsyncFunction]"
        , K_ = "[object Function]"
        , j_ = "[object GeneratorFunction]"
        , Y_ = "[object Proxy]";
      function $_(e) {
          if (!W_(e))
              return !1;
          var t = k_(e);
          return t == K_ || t == j_ || t == z_ || t == Y_
      }
      gu.exports = $_
  }
  );
  var yu = l( (O2, Eu) => {
      var Q_ = Re()
        , Z_ = Q_["__core-js_shared__"];
      Eu.exports = Z_
  }
  );
  var _u = l( (x2, vu) => {
      var gi = yu()
        , mu = function() {
          var e = /[^.]+$/.exec(gi && gi.keys && gi.keys.IE_PROTO || "");
          return e ? "Symbol(src)_1." + e : ""
      }();
      function J_(e) {
          return !!mu && mu in e
      }
      vu.exports = J_
  }
  );
  var Ei = l( (w2, Iu) => {
      var eI = Function.prototype
        , tI = eI.toString;
      function rI(e) {
          if (e != null) {
              try {
                  return tI.call(e)
              } catch {}
              try {
                  return e + ""
              } catch {}
          }
          return ""
      }
      Iu.exports = rI
  }
  );
  var Au = l( (R2, Tu) => {
      var nI = hi()
        , iI = _u()
        , oI = Ge()
        , aI = Ei()
        , sI = /[\\^$.*+?()[\]{}|]/g
        , uI = /^\[object .+?Constructor\]$/
        , cI = Function.prototype
        , lI = Object.prototype
        , fI = cI.toString
        , dI = lI.hasOwnProperty
        , pI = RegExp("^" + fI.call(dI).replace(sI, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      function hI(e) {
          if (!oI(e) || iI(e))
              return !1;
          var t = nI(e) ? pI : uI;
          return t.test(aI(e))
      }
      Tu.exports = hI
  }
  );
  var Su = l( (C2, bu) => {
      function gI(e, t) {
          return e?.[t]
      }
      bu.exports = gI
  }
  );
  var Ze = l( (L2, Ou) => {
      var EI = Au()
        , yI = Su();
      function mI(e, t) {
          var r = yI(e, t);
          return EI(r) ? r : void 0
      }
      Ou.exports = mI
  }
  );
  var qr = l( (P2, xu) => {
      var vI = Ze()
        , _I = Re()
        , II = vI(_I, "Map");
      xu.exports = II
  }
  );
  var $t = l( (N2, wu) => {
      var TI = Ze()
        , AI = TI(Object, "create");
      wu.exports = AI
  }
  );
  var Lu = l( (M2, Cu) => {
      var Ru = $t();
      function bI() {
          this.__data__ = Ru ? Ru(null) : {},
          this.size = 0
      }
      Cu.exports = bI
  }
  );
  var Nu = l( (D2, Pu) => {
      function SI(e) {
          var t = this.has(e) && delete this.__data__[e];
          return this.size -= t ? 1 : 0,
          t
      }
      Pu.exports = SI
  }
  );
  var Du = l( (F2, Mu) => {
      var OI = $t()
        , xI = "__lodash_hash_undefined__"
        , wI = Object.prototype
        , RI = wI.hasOwnProperty;
      function CI(e) {
          var t = this.__data__;
          if (OI) {
              var r = t[e];
              return r === xI ? void 0 : r
          }
          return RI.call(t, e) ? t[e] : void 0
      }
      Mu.exports = CI
  }
  );
  var qu = l( (q2, Fu) => {
      var LI = $t()
        , PI = Object.prototype
        , NI = PI.hasOwnProperty;
      function MI(e) {
          var t = this.__data__;
          return LI ? t[e] !== void 0 : NI.call(t, e)
      }
      Fu.exports = MI
  }
  );
  var Gu = l( (X2, Xu) => {
      var DI = $t()
        , FI = "__lodash_hash_undefined__";
      function qI(e, t) {
          var r = this.__data__;
          return this.size += this.has(e) ? 0 : 1,
          r[e] = DI && t === void 0 ? FI : t,
          this
      }
      Xu.exports = qI
  }
  );
  var Bu = l( (G2, Vu) => {
      var XI = Lu()
        , GI = Nu()
        , VI = Du()
        , BI = qu()
        , UI = Gu();
      function vt(e) {
          var t = -1
            , r = e == null ? 0 : e.length;
          for (this.clear(); ++t < r; ) {
              var n = e[t];
              this.set(n[0], n[1])
          }
      }
      vt.prototype.clear = XI;
      vt.prototype.delete = GI;
      vt.prototype.get = VI;
      vt.prototype.has = BI;
      vt.prototype.set = UI;
      Vu.exports = vt
  }
  );
  var ku = l( (V2, Hu) => {
      var Uu = Bu()
        , HI = Yt()
        , kI = qr();
      function WI() {
          this.size = 0,
          this.__data__ = {
              hash: new Uu,
              map: new (kI || HI),
              string: new Uu
          }
      }
      Hu.exports = WI
  }
  );
  var zu = l( (B2, Wu) => {
      function zI(e) {
          var t = typeof e;
          return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
      }
      Wu.exports = zI
  }
  );
  var Qt = l( (U2, Ku) => {
      var KI = zu();
      function jI(e, t) {
          var r = e.__data__;
          return KI(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
      }
      Ku.exports = jI
  }
  );
  var Yu = l( (H2, ju) => {
      var YI = Qt();
      function $I(e) {
          var t = YI(this, e).delete(e);
          return this.size -= t ? 1 : 0,
          t
      }
      ju.exports = $I
  }
  );
  var Qu = l( (k2, $u) => {
      var QI = Qt();
      function ZI(e) {
          return QI(this, e).get(e)
      }
      $u.exports = ZI
  }
  );
  var Ju = l( (W2, Zu) => {
      var JI = Qt();
      function eT(e) {
          return JI(this, e).has(e)
      }
      Zu.exports = eT
  }
  );
  var tc = l( (z2, ec) => {
      var tT = Qt();
      function rT(e, t) {
          var r = tT(this, e)
            , n = r.size;
          return r.set(e, t),
          this.size += r.size == n ? 0 : 1,
          this
      }
      ec.exports = rT
  }
  );
  var Xr = l( (K2, rc) => {
      var nT = ku()
        , iT = Yu()
        , oT = Qu()
        , aT = Ju()
        , sT = tc();
      function _t(e) {
          var t = -1
            , r = e == null ? 0 : e.length;
          for (this.clear(); ++t < r; ) {
              var n = e[t];
              this.set(n[0], n[1])
          }
      }
      _t.prototype.clear = nT;
      _t.prototype.delete = iT;
      _t.prototype.get = oT;
      _t.prototype.has = aT;
      _t.prototype.set = sT;
      rc.exports = _t
  }
  );
  var ic = l( (j2, nc) => {
      var uT = Yt()
        , cT = qr()
        , lT = Xr()
        , fT = 200;
      function dT(e, t) {
          var r = this.__data__;
          if (r instanceof uT) {
              var n = r.__data__;
              if (!cT || n.length < fT - 1)
                  return n.push([e, t]),
                  this.size = ++r.size,
                  this;
              r = this.__data__ = new lT(n)
          }
          return r.set(e, t),
          this.size = r.size,
          this
      }
      nc.exports = dT
  }
  );
  var yi = l( (Y2, oc) => {
      var pT = Yt()
        , hT = su()
        , gT = cu()
        , ET = fu()
        , yT = pu()
        , mT = ic();
      function It(e) {
          var t = this.__data__ = new pT(e);
          this.size = t.size
      }
      It.prototype.clear = hT;
      It.prototype.delete = gT;
      It.prototype.get = ET;
      It.prototype.has = yT;
      It.prototype.set = mT;
      oc.exports = It
  }
  );
  var sc = l( ($2, ac) => {
      var vT = "__lodash_hash_undefined__";
      function _T(e) {
          return this.__data__.set(e, vT),
          this
      }
      ac.exports = _T
  }
  );
  var cc = l( (Q2, uc) => {
      function IT(e) {
          return this.__data__.has(e)
      }
      uc.exports = IT
  }
  );
  var fc = l( (Z2, lc) => {
      var TT = Xr()
        , AT = sc()
        , bT = cc();
      function Gr(e) {
          var t = -1
            , r = e == null ? 0 : e.length;
          for (this.__data__ = new TT; ++t < r; )
              this.add(e[t])
      }
      Gr.prototype.add = Gr.prototype.push = AT;
      Gr.prototype.has = bT;
      lc.exports = Gr
  }
  );
  var pc = l( (J2, dc) => {
      function ST(e, t) {
          for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
              if (t(e[r], r, e))
                  return !0;
          return !1
      }
      dc.exports = ST
  }
  );
  var gc = l( (eq, hc) => {
      function OT(e, t) {
          return e.has(t)
      }
      hc.exports = OT
  }
  );
  var mi = l( (tq, Ec) => {
      var xT = fc()
        , wT = pc()
        , RT = gc()
        , CT = 1
        , LT = 2;
      function PT(e, t, r, n, i, o) {
          var a = r & CT
            , s = e.length
            , u = t.length;
          if (s != u && !(a && u > s))
              return !1;
          var f = o.get(e)
            , h = o.get(t);
          if (f && h)
              return f == t && h == e;
          var p = -1
            , d = !0
            , v = r & LT ? new xT : void 0;
          for (o.set(e, t),
          o.set(t, e); ++p < s; ) {
              var b = e[p]
                , m = t[p];
              if (n)
                  var A = a ? n(m, b, p, t, e, o) : n(b, m, p, e, t, o);
              if (A !== void 0) {
                  if (A)
                      continue;
                  d = !1;
                  break
              }
              if (v) {
                  if (!wT(t, function(E, O) {
                      if (!RT(v, O) && (b === E || i(b, E, r, n, o)))
                          return v.push(O)
                  })) {
                      d = !1;
                      break
                  }
              } else if (!(b === m || i(b, m, r, n, o))) {
                  d = !1;
                  break
              }
          }
          return o.delete(e),
          o.delete(t),
          d
      }
      Ec.exports = PT
  }
  );
  var mc = l( (rq, yc) => {
      var NT = Re()
        , MT = NT.Uint8Array;
      yc.exports = MT
  }
  );
  var _c = l( (nq, vc) => {
      function DT(e) {
          var t = -1
            , r = Array(e.size);
          return e.forEach(function(n, i) {
              r[++t] = [i, n]
          }),
          r
      }
      vc.exports = DT
  }
  );
  var Tc = l( (iq, Ic) => {
      function FT(e) {
          var t = -1
            , r = Array(e.size);
          return e.forEach(function(n) {
              r[++t] = n
          }),
          r
      }
      Ic.exports = FT
  }
  );
  var xc = l( (oq, Oc) => {
      var Ac = ht()
        , bc = mc()
        , qT = Fr()
        , XT = mi()
        , GT = _c()
        , VT = Tc()
        , BT = 1
        , UT = 2
        , HT = "[object Boolean]"
        , kT = "[object Date]"
        , WT = "[object Error]"
        , zT = "[object Map]"
        , KT = "[object Number]"
        , jT = "[object RegExp]"
        , YT = "[object Set]"
        , $T = "[object String]"
        , QT = "[object Symbol]"
        , ZT = "[object ArrayBuffer]"
        , JT = "[object DataView]"
        , Sc = Ac ? Ac.prototype : void 0
        , vi = Sc ? Sc.valueOf : void 0;
      function eA(e, t, r, n, i, o, a) {
          switch (r) {
          case JT:
              if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                  return !1;
              e = e.buffer,
              t = t.buffer;
          case ZT:
              return !(e.byteLength != t.byteLength || !o(new bc(e), new bc(t)));
          case HT:
          case kT:
          case KT:
              return qT(+e, +t);
          case WT:
              return e.name == t.name && e.message == t.message;
          case jT:
          case $T:
              return e == t + "";
          case zT:
              var s = GT;
          case YT:
              var u = n & BT;
              if (s || (s = VT),
              e.size != t.size && !u)
                  return !1;
              var f = a.get(e);
              if (f)
                  return f == t;
              n |= UT,
              a.set(e, t);
              var h = XT(s(e), s(t), n, i, o, a);
              return a.delete(e),
              h;
          case QT:
              if (vi)
                  return vi.call(e) == vi.call(t)
          }
          return !1
      }
      Oc.exports = eA
  }
  );
  var Vr = l( (aq, wc) => {
      function tA(e, t) {
          for (var r = -1, n = t.length, i = e.length; ++r < n; )
              e[i + r] = t[r];
          return e
      }
      wc.exports = tA
  }
  );
  var ue = l( (sq, Rc) => {
      var rA = Array.isArray;
      Rc.exports = rA
  }
  );
  var _i = l( (uq, Cc) => {
      var nA = Vr()
        , iA = ue();
      function oA(e, t, r) {
          var n = t(e);
          return iA(e) ? n : nA(n, r(e))
      }
      Cc.exports = oA
  }
  );
  var Pc = l( (cq, Lc) => {
      function aA(e, t) {
          for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
              var a = e[r];
              t(a, r, e) && (o[i++] = a)
          }
          return o
      }
      Lc.exports = aA
  }
  );
  var Ii = l( (lq, Nc) => {
      function sA() {
          return []
      }
      Nc.exports = sA
  }
  );
  var Ti = l( (fq, Dc) => {
      var uA = Pc()
        , cA = Ii()
        , lA = Object.prototype
        , fA = lA.propertyIsEnumerable
        , Mc = Object.getOwnPropertySymbols
        , dA = Mc ? function(e) {
          return e == null ? [] : (e = Object(e),
          uA(Mc(e), function(t) {
              return fA.call(e, t)
          }))
      }
      : cA;
      Dc.exports = dA
  }
  );
  var qc = l( (dq, Fc) => {
      function pA(e, t) {
          for (var r = -1, n = Array(e); ++r < e; )
              n[r] = t(r);
          return n
      }
      Fc.exports = pA
  }
  );
  var Gc = l( (pq, Xc) => {
      var hA = Qe()
        , gA = He()
        , EA = "[object Arguments]";
      function yA(e) {
          return gA(e) && hA(e) == EA
      }
      Xc.exports = yA
  }
  );
  var Zt = l( (hq, Uc) => {
      var Vc = Gc()
        , mA = He()
        , Bc = Object.prototype
        , vA = Bc.hasOwnProperty
        , _A = Bc.propertyIsEnumerable
        , IA = Vc(function() {
          return arguments
      }()) ? Vc : function(e) {
          return mA(e) && vA.call(e, "callee") && !_A.call(e, "callee")
      }
      ;
      Uc.exports = IA
  }
  );
  var kc = l( (gq, Hc) => {
      function TA() {
          return !1
      }
      Hc.exports = TA
  }
  );
  var Br = l( (Jt, Tt) => {
      var AA = Re()
        , bA = kc()
        , Kc = typeof Jt == "object" && Jt && !Jt.nodeType && Jt
        , Wc = Kc && typeof Tt == "object" && Tt && !Tt.nodeType && Tt
        , SA = Wc && Wc.exports === Kc
        , zc = SA ? AA.Buffer : void 0
        , OA = zc ? zc.isBuffer : void 0
        , xA = OA || bA;
      Tt.exports = xA
  }
  );
  var Ur = l( (Eq, jc) => {
      var wA = 9007199254740991
        , RA = /^(?:0|[1-9]\d*)$/;
      function CA(e, t) {
          var r = typeof e;
          return t = t ?? wA,
          !!t && (r == "number" || r != "symbol" && RA.test(e)) && e > -1 && e % 1 == 0 && e < t
      }
      jc.exports = CA
  }
  );
  var Hr = l( (yq, Yc) => {
      var LA = 9007199254740991;
      function PA(e) {
          return typeof e == "number" && e > -1 && e % 1 == 0 && e <= LA
      }
      Yc.exports = PA
  }
  );
  var Qc = l( (mq, $c) => {
      var NA = Qe()
        , MA = Hr()
        , DA = He()
        , FA = "[object Arguments]"
        , qA = "[object Array]"
        , XA = "[object Boolean]"
        , GA = "[object Date]"
        , VA = "[object Error]"
        , BA = "[object Function]"
        , UA = "[object Map]"
        , HA = "[object Number]"
        , kA = "[object Object]"
        , WA = "[object RegExp]"
        , zA = "[object Set]"
        , KA = "[object String]"
        , jA = "[object WeakMap]"
        , YA = "[object ArrayBuffer]"
        , $A = "[object DataView]"
        , QA = "[object Float32Array]"
        , ZA = "[object Float64Array]"
        , JA = "[object Int8Array]"
        , eb = "[object Int16Array]"
        , tb = "[object Int32Array]"
        , rb = "[object Uint8Array]"
        , nb = "[object Uint8ClampedArray]"
        , ib = "[object Uint16Array]"
        , ob = "[object Uint32Array]"
        , ee = {};
      ee[QA] = ee[ZA] = ee[JA] = ee[eb] = ee[tb] = ee[rb] = ee[nb] = ee[ib] = ee[ob] = !0;
      ee[FA] = ee[qA] = ee[YA] = ee[XA] = ee[$A] = ee[GA] = ee[VA] = ee[BA] = ee[UA] = ee[HA] = ee[kA] = ee[WA] = ee[zA] = ee[KA] = ee[jA] = !1;
      function ab(e) {
          return DA(e) && MA(e.length) && !!ee[NA(e)]
      }
      $c.exports = ab
  }
  );
  var Jc = l( (vq, Zc) => {
      function sb(e) {
          return function(t) {
              return e(t)
          }
      }
      Zc.exports = sb
  }
  );
  var tl = l( (er, At) => {
      var ub = jn()
        , el = typeof er == "object" && er && !er.nodeType && er
        , tr = el && typeof At == "object" && At && !At.nodeType && At
        , cb = tr && tr.exports === el
        , Ai = cb && ub.process
        , lb = function() {
          try {
              var e = tr && tr.require && tr.require("util").types;
              return e || Ai && Ai.binding && Ai.binding("util")
          } catch {}
      }();
      At.exports = lb
  }
  );
  var kr = l( (_q, il) => {
      var fb = Qc()
        , db = Jc()
        , rl = tl()
        , nl = rl && rl.isTypedArray
        , pb = nl ? db(nl) : fb;
      il.exports = pb
  }
  );
  var bi = l( (Iq, ol) => {
      var hb = qc()
        , gb = Zt()
        , Eb = ue()
        , yb = Br()
        , mb = Ur()
        , vb = kr()
        , _b = Object.prototype
        , Ib = _b.hasOwnProperty;
      function Tb(e, t) {
          var r = Eb(e)
            , n = !r && gb(e)
            , i = !r && !n && yb(e)
            , o = !r && !n && !i && vb(e)
            , a = r || n || i || o
            , s = a ? hb(e.length, String) : []
            , u = s.length;
          for (var f in e)
              (t || Ib.call(e, f)) && !(a && (f == "length" || i && (f == "offset" || f == "parent") || o && (f == "buffer" || f == "byteLength" || f == "byteOffset") || mb(f, u))) && s.push(f);
          return s
      }
      ol.exports = Tb
  }
  );
  var Wr = l( (Tq, al) => {
      var Ab = Object.prototype;
      function bb(e) {
          var t = e && e.constructor
            , r = typeof t == "function" && t.prototype || Ab;
          return e === r
      }
      al.exports = bb
  }
  );
  var ul = l( (Aq, sl) => {
      var Sb = Yn()
        , Ob = Sb(Object.keys, Object);
      sl.exports = Ob
  }
  );
  var zr = l( (bq, cl) => {
      var xb = Wr()
        , wb = ul()
        , Rb = Object.prototype
        , Cb = Rb.hasOwnProperty;
      function Lb(e) {
          if (!xb(e))
              return wb(e);
          var t = [];
          for (var r in Object(e))
              Cb.call(e, r) && r != "constructor" && t.push(r);
          return t
      }
      cl.exports = Lb
  }
  );
  var it = l( (Sq, ll) => {
      var Pb = hi()
        , Nb = Hr();
      function Mb(e) {
          return e != null && Nb(e.length) && !Pb(e)
      }
      ll.exports = Mb
  }
  );
  var rr = l( (Oq, fl) => {
      var Db = bi()
        , Fb = zr()
        , qb = it();
      function Xb(e) {
          return qb(e) ? Db(e) : Fb(e)
      }
      fl.exports = Xb
  }
  );
  var pl = l( (xq, dl) => {
      var Gb = _i()
        , Vb = Ti()
        , Bb = rr();
      function Ub(e) {
          return Gb(e, Bb, Vb)
      }
      dl.exports = Ub
  }
  );
  var El = l( (wq, gl) => {
      var hl = pl()
        , Hb = 1
        , kb = Object.prototype
        , Wb = kb.hasOwnProperty;
      function zb(e, t, r, n, i, o) {
          var a = r & Hb
            , s = hl(e)
            , u = s.length
            , f = hl(t)
            , h = f.length;
          if (u != h && !a)
              return !1;
          for (var p = u; p--; ) {
              var d = s[p];
              if (!(a ? d in t : Wb.call(t, d)))
                  return !1
          }
          var v = o.get(e)
            , b = o.get(t);
          if (v && b)
              return v == t && b == e;
          var m = !0;
          o.set(e, t),
          o.set(t, e);
          for (var A = a; ++p < u; ) {
              d = s[p];
              var E = e[d]
                , O = t[d];
              if (n)
                  var T = a ? n(O, E, d, t, e, o) : n(E, O, d, e, t, o);
              if (!(T === void 0 ? E === O || i(E, O, r, n, o) : T)) {
                  m = !1;
                  break
              }
              A || (A = d == "constructor")
          }
          if (m && !A) {
              var w = e.constructor
                , C = t.constructor;
              w != C && "constructor"in e && "constructor"in t && !(typeof w == "function" && w instanceof w && typeof C == "function" && C instanceof C) && (m = !1)
          }
          return o.delete(e),
          o.delete(t),
          m
      }
      gl.exports = zb
  }
  );
  var ml = l( (Rq, yl) => {
      var Kb = Ze()
        , jb = Re()
        , Yb = Kb(jb, "DataView");
      yl.exports = Yb
  }
  );
  var _l = l( (Cq, vl) => {
      var $b = Ze()
        , Qb = Re()
        , Zb = $b(Qb, "Promise");
      vl.exports = Zb
  }
  );
  var Tl = l( (Lq, Il) => {
      var Jb = Ze()
        , e0 = Re()
        , t0 = Jb(e0, "Set");
      Il.exports = t0
  }
  );
  var Si = l( (Pq, Al) => {
      var r0 = Ze()
        , n0 = Re()
        , i0 = r0(n0, "WeakMap");
      Al.exports = i0
  }
  );
  var Kr = l( (Nq, Cl) => {
      var Oi = ml()
        , xi = qr()
        , wi = _l()
        , Ri = Tl()
        , Ci = Si()
        , Rl = Qe()
        , bt = Ei()
        , bl = "[object Map]"
        , o0 = "[object Object]"
        , Sl = "[object Promise]"
        , Ol = "[object Set]"
        , xl = "[object WeakMap]"
        , wl = "[object DataView]"
        , a0 = bt(Oi)
        , s0 = bt(xi)
        , u0 = bt(wi)
        , c0 = bt(Ri)
        , l0 = bt(Ci)
        , ot = Rl;
      (Oi && ot(new Oi(new ArrayBuffer(1))) != wl || xi && ot(new xi) != bl || wi && ot(wi.resolve()) != Sl || Ri && ot(new Ri) != Ol || Ci && ot(new Ci) != xl) && (ot = function(e) {
          var t = Rl(e)
            , r = t == o0 ? e.constructor : void 0
            , n = r ? bt(r) : "";
          if (n)
              switch (n) {
              case a0:
                  return wl;
              case s0:
                  return bl;
              case u0:
                  return Sl;
              case c0:
                  return Ol;
              case l0:
                  return xl
              }
          return t
      }
      );
      Cl.exports = ot
  }
  );
  var Xl = l( (Mq, ql) => {
      var Li = yi()
        , f0 = mi()
        , d0 = xc()
        , p0 = El()
        , Ll = Kr()
        , Pl = ue()
        , Nl = Br()
        , h0 = kr()
        , g0 = 1
        , Ml = "[object Arguments]"
        , Dl = "[object Array]"
        , jr = "[object Object]"
        , E0 = Object.prototype
        , Fl = E0.hasOwnProperty;
      function y0(e, t, r, n, i, o) {
          var a = Pl(e)
            , s = Pl(t)
            , u = a ? Dl : Ll(e)
            , f = s ? Dl : Ll(t);
          u = u == Ml ? jr : u,
          f = f == Ml ? jr : f;
          var h = u == jr
            , p = f == jr
            , d = u == f;
          if (d && Nl(e)) {
              if (!Nl(t))
                  return !1;
              a = !0,
              h = !1
          }
          if (d && !h)
              return o || (o = new Li),
              a || h0(e) ? f0(e, t, r, n, i, o) : d0(e, t, u, r, n, i, o);
          if (!(r & g0)) {
              var v = h && Fl.call(e, "__wrapped__")
                , b = p && Fl.call(t, "__wrapped__");
              if (v || b) {
                  var m = v ? e.value() : e
                    , A = b ? t.value() : t;
                  return o || (o = new Li),
                  i(m, A, r, n, o)
              }
          }
          return d ? (o || (o = new Li),
          p0(e, t, r, n, i, o)) : !1
      }
      ql.exports = y0
  }
  );
  var Pi = l( (Dq, Bl) => {
      var m0 = Xl()
        , Gl = He();
      function Vl(e, t, r, n, i) {
          return e === t ? !0 : e == null || t == null || !Gl(e) && !Gl(t) ? e !== e && t !== t : m0(e, t, r, n, Vl, i)
      }
      Bl.exports = Vl
  }
  );
  var Hl = l( (Fq, Ul) => {
      var v0 = yi()
        , _0 = Pi()
        , I0 = 1
        , T0 = 2;
      function A0(e, t, r, n) {
          var i = r.length
            , o = i
            , a = !n;
          if (e == null)
              return !o;
          for (e = Object(e); i--; ) {
              var s = r[i];
              if (a && s[2] ? s[1] !== e[s[0]] : !(s[0]in e))
                  return !1
          }
          for (; ++i < o; ) {
              s = r[i];
              var u = s[0]
                , f = e[u]
                , h = s[1];
              if (a && s[2]) {
                  if (f === void 0 && !(u in e))
                      return !1
              } else {
                  var p = new v0;
                  if (n)
                      var d = n(f, h, u, e, t, p);
                  if (!(d === void 0 ? _0(h, f, I0 | T0, n, p) : d))
                      return !1
              }
          }
          return !0
      }
      Ul.exports = A0
  }
  );
  var Ni = l( (qq, kl) => {
      var b0 = Ge();
      function S0(e) {
          return e === e && !b0(e)
      }
      kl.exports = S0
  }
  );
  var zl = l( (Xq, Wl) => {
      var O0 = Ni()
        , x0 = rr();
      function w0(e) {
          for (var t = x0(e), r = t.length; r--; ) {
              var n = t[r]
                , i = e[n];
              t[r] = [n, i, O0(i)]
          }
          return t
      }
      Wl.exports = w0
  }
  );
  var Mi = l( (Gq, Kl) => {
      function R0(e, t) {
          return function(r) {
              return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
          }
      }
      Kl.exports = R0
  }
  );
  var Yl = l( (Vq, jl) => {
      var C0 = Hl()
        , L0 = zl()
        , P0 = Mi();
      function N0(e) {
          var t = L0(e);
          return t.length == 1 && t[0][2] ? P0(t[0][0], t[0][1]) : function(r) {
              return r === e || C0(r, e, t)
          }
      }
      jl.exports = N0
  }
  );
  var nr = l( (Bq, $l) => {
      var M0 = Qe()
        , D0 = He()
        , F0 = "[object Symbol]";
      function q0(e) {
          return typeof e == "symbol" || D0(e) && M0(e) == F0
      }
      $l.exports = q0
  }
  );
  var Yr = l( (Uq, Ql) => {
      var X0 = ue()
        , G0 = nr()
        , V0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
        , B0 = /^\w*$/;
      function U0(e, t) {
          if (X0(e))
              return !1;
          var r = typeof e;
          return r == "number" || r == "symbol" || r == "boolean" || e == null || G0(e) ? !0 : B0.test(e) || !V0.test(e) || t != null && e in Object(t)
      }
      Ql.exports = U0
  }
  );
  var ef = l( (Hq, Jl) => {
      var Zl = Xr()
        , H0 = "Expected a function";
      function Di(e, t) {
          if (typeof e != "function" || t != null && typeof t != "function")
              throw new TypeError(H0);
          var r = function() {
              var n = arguments
                , i = t ? t.apply(this, n) : n[0]
                , o = r.cache;
              if (o.has(i))
                  return o.get(i);
              var a = e.apply(this, n);
              return r.cache = o.set(i, a) || o,
              a
          };
          return r.cache = new (Di.Cache || Zl),
          r
      }
      Di.Cache = Zl;
      Jl.exports = Di
  }
  );
  var rf = l( (kq, tf) => {
      var k0 = ef()
        , W0 = 500;
      function z0(e) {
          var t = k0(e, function(n) {
              return r.size === W0 && r.clear(),
              n
          })
            , r = t.cache;
          return t
      }
      tf.exports = z0
  }
  );
  var of = l( (Wq, nf) => {
      var K0 = rf()
        , j0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
        , Y0 = /\\(\\)?/g
        , $0 = K0(function(e) {
          var t = [];
          return e.charCodeAt(0) === 46 && t.push(""),
          e.replace(j0, function(r, n, i, o) {
              t.push(i ? o.replace(Y0, "$1") : n || r)
          }),
          t
      });
      nf.exports = $0
  }
  );
  var Fi = l( (zq, af) => {
      function Q0(e, t) {
          for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
              i[r] = t(e[r], r, e);
          return i
      }
      af.exports = Q0
  }
  );
  var df = l( (Kq, ff) => {
      var sf = ht()
        , Z0 = Fi()
        , J0 = ue()
        , eS = nr()
        , tS = 1 / 0
        , uf = sf ? sf.prototype : void 0
        , cf = uf ? uf.toString : void 0;
      function lf(e) {
          if (typeof e == "string")
              return e;
          if (J0(e))
              return Z0(e, lf) + "";
          if (eS(e))
              return cf ? cf.call(e) : "";
          var t = e + "";
          return t == "0" && 1 / e == -tS ? "-0" : t
      }
      ff.exports = lf
  }
  );
  var hf = l( (jq, pf) => {
      var rS = df();
      function nS(e) {
          return e == null ? "" : rS(e)
      }
      pf.exports = nS
  }
  );
  var ir = l( (Yq, gf) => {
      var iS = ue()
        , oS = Yr()
        , aS = of()
        , sS = hf();
      function uS(e, t) {
          return iS(e) ? e : oS(e, t) ? [e] : aS(sS(e))
      }
      gf.exports = uS
  }
  );
  var St = l( ($q, Ef) => {
      var cS = nr()
        , lS = 1 / 0;
      function fS(e) {
          if (typeof e == "string" || cS(e))
              return e;
          var t = e + "";
          return t == "0" && 1 / e == -lS ? "-0" : t
      }
      Ef.exports = fS
  }
  );
  var $r = l( (Qq, yf) => {
      var dS = ir()
        , pS = St();
      function hS(e, t) {
          t = dS(t, e);
          for (var r = 0, n = t.length; e != null && r < n; )
              e = e[pS(t[r++])];
          return r && r == n ? e : void 0
      }
      yf.exports = hS
  }
  );
  var Qr = l( (Zq, mf) => {
      var gS = $r();
      function ES(e, t, r) {
          var n = e == null ? void 0 : gS(e, t);
          return n === void 0 ? r : n
      }
      mf.exports = ES
  }
  );
  var _f = l( (Jq, vf) => {
      function yS(e, t) {
          return e != null && t in Object(e)
      }
      vf.exports = yS
  }
  );
  var Tf = l( (e1, If) => {
      var mS = ir()
        , vS = Zt()
        , _S = ue()
        , IS = Ur()
        , TS = Hr()
        , AS = St();
      function bS(e, t, r) {
          t = mS(t, e);
          for (var n = -1, i = t.length, o = !1; ++n < i; ) {
              var a = AS(t[n]);
              if (!(o = e != null && r(e, a)))
                  break;
              e = e[a]
          }
          return o || ++n != i ? o : (i = e == null ? 0 : e.length,
          !!i && TS(i) && IS(a, i) && (_S(e) || vS(e)))
      }
      If.exports = bS
  }
  );
  var bf = l( (t1, Af) => {
      var SS = _f()
        , OS = Tf();
      function xS(e, t) {
          return e != null && OS(e, t, SS)
      }
      Af.exports = xS
  }
  );
  var Of = l( (r1, Sf) => {
      var wS = Pi()
        , RS = Qr()
        , CS = bf()
        , LS = Yr()
        , PS = Ni()
        , NS = Mi()
        , MS = St()
        , DS = 1
        , FS = 2;
      function qS(e, t) {
          return LS(e) && PS(t) ? NS(MS(e), t) : function(r) {
              var n = RS(r, e);
              return n === void 0 && n === t ? CS(r, e) : wS(t, n, DS | FS)
          }
      }
      Sf.exports = qS
  }
  );
  var Zr = l( (n1, xf) => {
      function XS(e) {
          return e
      }
      xf.exports = XS
  }
  );
  var qi = l( (i1, wf) => {
      function GS(e) {
          return function(t) {
              return t?.[e]
          }
      }
      wf.exports = GS
  }
  );
  var Cf = l( (o1, Rf) => {
      var VS = $r();
      function BS(e) {
          return function(t) {
              return VS(t, e)
          }
      }
      Rf.exports = BS
  }
  );
  var Pf = l( (a1, Lf) => {
      var US = qi()
        , HS = Cf()
        , kS = Yr()
        , WS = St();
      function zS(e) {
          return kS(e) ? US(WS(e)) : HS(e)
      }
      Lf.exports = zS
  }
  );
  var Je = l( (s1, Nf) => {
      var KS = Yl()
        , jS = Of()
        , YS = Zr()
        , $S = ue()
        , QS = Pf();
      function ZS(e) {
          return typeof e == "function" ? e : e == null ? YS : typeof e == "object" ? $S(e) ? jS(e[0], e[1]) : KS(e) : QS(e)
      }
      Nf.exports = ZS
  }
  );
  var Xi = l( (u1, Mf) => {
      var JS = Je()
        , eO = it()
        , tO = rr();
      function rO(e) {
          return function(t, r, n) {
              var i = Object(t);
              if (!eO(t)) {
                  var o = JS(r, 3);
                  t = tO(t),
                  r = function(s) {
                      return o(i[s], s, i)
                  }
              }
              var a = e(t, r, n);
              return a > -1 ? i[o ? t[a] : a] : void 0
          }
      }
      Mf.exports = rO
  }
  );
  var Gi = l( (c1, Df) => {
      function nO(e, t, r, n) {
          for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
              if (t(e[o], o, e))
                  return o;
          return -1
      }
      Df.exports = nO
  }
  );
  var qf = l( (l1, Ff) => {
      var iO = /\s/;
      function oO(e) {
          for (var t = e.length; t-- && iO.test(e.charAt(t)); )
              ;
          return t
      }
      Ff.exports = oO
  }
  );
  var Gf = l( (f1, Xf) => {
      var aO = qf()
        , sO = /^\s+/;
      function uO(e) {
          return e && e.slice(0, aO(e) + 1).replace(sO, "")
      }
      Xf.exports = uO
  }
  );
  var Jr = l( (d1, Uf) => {
      var cO = Gf()
        , Vf = Ge()
        , lO = nr()
        , Bf = 0 / 0
        , fO = /^[-+]0x[0-9a-f]+$/i
        , dO = /^0b[01]+$/i
        , pO = /^0o[0-7]+$/i
        , hO = parseInt;
      function gO(e) {
          if (typeof e == "number")
              return e;
          if (lO(e))
              return Bf;
          if (Vf(e)) {
              var t = typeof e.valueOf == "function" ? e.valueOf() : e;
              e = Vf(t) ? t + "" : t
          }
          if (typeof e != "string")
              return e === 0 ? e : +e;
          e = cO(e);
          var r = dO.test(e);
          return r || pO.test(e) ? hO(e.slice(2), r ? 2 : 8) : fO.test(e) ? Bf : +e
      }
      Uf.exports = gO
  }
  );
  var Wf = l( (p1, kf) => {
      var EO = Jr()
        , Hf = 1 / 0
        , yO = 17976931348623157e292;
      function mO(e) {
          if (!e)
              return e === 0 ? e : 0;
          if (e = EO(e),
          e === Hf || e === -Hf) {
              var t = e < 0 ? -1 : 1;
              return t * yO
          }
          return e === e ? e : 0
      }
      kf.exports = mO
  }
  );
  var Vi = l( (h1, zf) => {
      var vO = Wf();
      function _O(e) {
          var t = vO(e)
            , r = t % 1;
          return t === t ? r ? t - r : t : 0
      }
      zf.exports = _O
  }
  );
  var jf = l( (g1, Kf) => {
      var IO = Gi()
        , TO = Je()
        , AO = Vi()
        , bO = Math.max;
      function SO(e, t, r) {
          var n = e == null ? 0 : e.length;
          if (!n)
              return -1;
          var i = r == null ? 0 : AO(r);
          return i < 0 && (i = bO(n + i, 0)),
          IO(e, TO(t, 3), i)
      }
      Kf.exports = SO
  }
  );
  var Bi = l( (E1, Yf) => {
      var OO = Xi()
        , xO = jf()
        , wO = OO(xO);
      Yf.exports = wO
  }
  );
  var Zf = {};
  ye(Zf, {
      ELEMENT_MATCHES: () => RO,
      FLEX_PREFIXED: () => Ui,
      IS_BROWSER_ENV: () => Le,
      TRANSFORM_PREFIXED: () => et,
      TRANSFORM_STYLE_PREFIXED: () => tn,
      withBrowser: () => en
  });
  var Qf, Le, en, RO, Ui, et, $f, tn, rn = re( () => {
      "use strict";
      Qf = $(Bi()),
      Le = typeof window < "u",
      en = (e, t) => Le ? e() : t,
      RO = en( () => (0,
      Qf.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)),
      Ui = en( () => {
          let e = document.createElement("i")
            , t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"]
            , r = "";
          try {
              let {length: n} = t;
              for (let i = 0; i < n; i++) {
                  let o = t[i];
                  if (e.style.display = o,
                  e.style.display === o)
                      return o
              }
              return r
          } catch {
              return r
          }
      }
      , "flex"),
      et = en( () => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
              let t = ["Webkit", "Moz", "ms"]
                , r = "Transform"
                , {length: n} = t;
              for (let i = 0; i < n; i++) {
                  let o = t[i] + r;
                  if (e.style[o] !== void 0)
                      return o
              }
          }
          return "transform"
      }
      , "transform"),
      $f = et.split("transform")[0],
      tn = $f ? $f + "TransformStyle" : "transformStyle"
  }
  );
  var Hi = l( (y1, nd) => {
      var CO = 4
        , LO = .001
        , PO = 1e-7
        , NO = 10
        , or = 11
        , nn = 1 / (or - 1)
        , MO = typeof Float32Array == "function";
      function Jf(e, t) {
          return 1 - 3 * t + 3 * e
      }
      function ed(e, t) {
          return 3 * t - 6 * e
      }
      function td(e) {
          return 3 * e
      }
      function on(e, t, r) {
          return ((Jf(t, r) * e + ed(t, r)) * e + td(t)) * e
      }
      function rd(e, t, r) {
          return 3 * Jf(t, r) * e * e + 2 * ed(t, r) * e + td(t)
      }
      function DO(e, t, r, n, i) {
          var o, a, s = 0;
          do
              a = t + (r - t) / 2,
              o = on(a, n, i) - e,
              o > 0 ? r = a : t = a;
          while (Math.abs(o) > PO && ++s < NO);
          return a
      }
      function FO(e, t, r, n) {
          for (var i = 0; i < CO; ++i) {
              var o = rd(t, r, n);
              if (o === 0)
                  return t;
              var a = on(t, r, n) - e;
              t -= a / o
          }
          return t
      }
      nd.exports = function(t, r, n, i) {
          if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
              throw new Error("bezier x values must be in [0, 1] range");
          var o = MO ? new Float32Array(or) : new Array(or);
          if (t !== r || n !== i)
              for (var a = 0; a < or; ++a)
                  o[a] = on(a * nn, t, n);
          function s(u) {
              for (var f = 0, h = 1, p = or - 1; h !== p && o[h] <= u; ++h)
                  f += nn;
              --h;
              var d = (u - o[h]) / (o[h + 1] - o[h])
                , v = f + d * nn
                , b = rd(v, t, n);
              return b >= LO ? FO(u, v, t, n) : b === 0 ? v : DO(u, f, f + nn, t, n)
          }
          return function(f) {
              return t === r && n === i ? f : f === 0 ? 0 : f === 1 ? 1 : on(s(f), r, i)
          }
      }
  }
  );
  var sr = {};
  ye(sr, {
      bounce: () => mx,
      bouncePast: () => vx,
      ease: () => qO,
      easeIn: () => XO,
      easeInOut: () => VO,
      easeOut: () => GO,
      inBack: () => cx,
      inCirc: () => ox,
      inCubic: () => kO,
      inElastic: () => dx,
      inExpo: () => rx,
      inOutBack: () => fx,
      inOutCirc: () => sx,
      inOutCubic: () => zO,
      inOutElastic: () => hx,
      inOutExpo: () => ix,
      inOutQuad: () => HO,
      inOutQuart: () => YO,
      inOutQuint: () => ZO,
      inOutSine: () => tx,
      inQuad: () => BO,
      inQuart: () => KO,
      inQuint: () => $O,
      inSine: () => JO,
      outBack: () => lx,
      outBounce: () => ux,
      outCirc: () => ax,
      outCubic: () => WO,
      outElastic: () => px,
      outExpo: () => nx,
      outQuad: () => UO,
      outQuart: () => jO,
      outQuint: () => QO,
      outSine: () => ex,
      swingFrom: () => Ex,
      swingFromTo: () => gx,
      swingTo: () => yx
  });
  function BO(e) {
      return Math.pow(e, 2)
  }
  function UO(e) {
      return -(Math.pow(e - 1, 2) - 1)
  }
  function HO(e) {
      return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
  }
  function kO(e) {
      return Math.pow(e, 3)
  }
  function WO(e) {
      return Math.pow(e - 1, 3) + 1
  }
  function zO(e) {
      return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
  }
  function KO(e) {
      return Math.pow(e, 4)
  }
  function jO(e) {
      return -(Math.pow(e - 1, 4) - 1)
  }
  function YO(e) {
      return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
  }
  function $O(e) {
      return Math.pow(e, 5)
  }
  function QO(e) {
      return Math.pow(e - 1, 5) + 1
  }
  function ZO(e) {
      return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
  }
  function JO(e) {
      return -Math.cos(e * (Math.PI / 2)) + 1
  }
  function ex(e) {
      return Math.sin(e * (Math.PI / 2))
  }
  function tx(e) {
      return -.5 * (Math.cos(Math.PI * e) - 1)
  }
  function rx(e) {
      return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
  }
  function nx(e) {
      return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
  }
  function ix(e) {
      return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
  }
  function ox(e) {
      return -(Math.sqrt(1 - e * e) - 1)
  }
  function ax(e) {
      return Math.sqrt(1 - Math.pow(e - 1, 2))
  }
  function sx(e) {
      return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
  }
  function ux(e) {
      return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
  }
  function cx(e) {
      let t = ke;
      return e * e * ((t + 1) * e - t)
  }
  function lx(e) {
      let t = ke;
      return (e -= 1) * e * ((t + 1) * e + t) + 1
  }
  function fx(e) {
      let t = ke;
      return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
  }
  function dx(e) {
      let t = ke
        , r = 0
        , n = 1;
      return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3),
      n < 1 ? (n = 1,
      t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
      -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
  }
  function px(e) {
      let t = ke
        , r = 0
        , n = 1;
      return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3),
      n < 1 ? (n = 1,
      t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
      n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
  }
  function hx(e) {
      let t = ke
        , r = 0
        , n = 1;
      return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5),
      n < 1 ? (n = 1,
      t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
      e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
  }
  function gx(e) {
      let t = ke;
      return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
  }
  function Ex(e) {
      let t = ke;
      return e * e * ((t + 1) * e - t)
  }
  function yx(e) {
      let t = ke;
      return (e -= 1) * e * ((t + 1) * e + t) + 1
  }
  function mx(e) {
      return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
  }
  function vx(e) {
      return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
  }
  var ar, ke, qO, XO, GO, VO, ki = re( () => {
      "use strict";
      ar = $(Hi()),
      ke = 1.70158,
      qO = (0,
      ar.default)(.25, .1, .25, 1),
      XO = (0,
      ar.default)(.42, 0, 1, 1),
      GO = (0,
      ar.default)(0, 0, .58, 1),
      VO = (0,
      ar.default)(.42, 0, .58, 1)
  }
  );
  var od = {};
  ye(od, {
      applyEasing: () => Ix,
      createBezierEasing: () => _x,
      optimizeFloat: () => ur
  });
  function ur(e, t=5, r=10) {
      let n = Math.pow(r, t)
        , i = Number(Math.round(e * n) / n);
      return Math.abs(i) > 1e-4 ? i : 0
  }
  function _x(e) {
      return (0,
      id.default)(...e)
  }
  function Ix(e, t, r) {
      return t === 0 ? 0 : t === 1 ? 1 : ur(r ? t > 0 ? r(t) : t : t > 0 && e && sr[e] ? sr[e](t) : t)
  }
  var id, Wi = re( () => {
      "use strict";
      ki();
      id = $(Hi())
  }
  );
  var ud = {};
  ye(ud, {
      createElementState: () => sd,
      ixElements: () => Dx,
      mergeActionState: () => zi
  });
  function sd(e, t, r, n, i) {
      let o = r === Tx ? (0,
      Ot.getIn)(i, ["config", "target", "objectId"]) : null;
      return (0,
      Ot.mergeIn)(e, [n], {
          id: n,
          ref: t,
          refId: o,
          refType: r
      })
  }
  function zi(e, t, r, n, i) {
      let o = qx(i);
      return (0,
      Ot.mergeIn)(e, [t, Mx, r], n, o)
  }
  function qx(e) {
      let {config: t} = e;
      return Fx.reduce( (r, n) => {
          let i = n[0]
            , o = n[1]
            , a = t[i]
            , s = t[o];
          return a != null && s != null && (r[o] = s),
          r
      }
      , {})
  }
  var Ot, v1, Tx, _1, Ax, bx, Sx, Ox, xx, wx, Rx, Cx, Lx, Px, Nx, ad, Mx, Dx, Fx, cd = re( () => {
      "use strict";
      Ot = $(yt());
      ve();
      ({HTML_ELEMENT: v1, PLAIN_OBJECT: Tx, ABSTRACT_NODE: _1, CONFIG_X_VALUE: Ax, CONFIG_Y_VALUE: bx, CONFIG_Z_VALUE: Sx, CONFIG_VALUE: Ox, CONFIG_X_UNIT: xx, CONFIG_Y_UNIT: wx, CONFIG_Z_UNIT: Rx, CONFIG_UNIT: Cx} = ce),
      {IX2_SESSION_STOPPED: Lx, IX2_INSTANCE_ADDED: Px, IX2_ELEMENT_STATE_CHANGED: Nx} = se,
      ad = {},
      Mx = "refState",
      Dx = (e=ad, t={}) => {
          switch (t.type) {
          case Lx:
              return ad;
          case Px:
              {
                  let {elementId: r, element: n, origin: i, actionItem: o, refType: a} = t.payload
                    , {actionTypeId: s} = o
                    , u = e;
                  return (0,
                  Ot.getIn)(u, [r, n]) !== n && (u = sd(u, n, a, r, o)),
                  zi(u, r, s, i, o)
              }
          case Nx:
              {
                  let {elementId: r, actionTypeId: n, current: i, actionItem: o} = t.payload;
                  return zi(e, r, n, i, o)
              }
          default:
              return e
          }
      }
      ;
      Fx = [[Ax, xx], [bx, wx], [Sx, Rx], [Ox, Cx]]
  }
  );
  var ld = l(Ki => {
      "use strict";
      Object.defineProperty(Ki, "__esModule", {
          value: !0
      });
      function Xx(e, t) {
          for (var r in t)
              Object.defineProperty(e, r, {
                  enumerable: !0,
                  get: t[r]
              })
      }
      Xx(Ki, {
          clearPlugin: function() {
              return Wx
          },
          createPluginInstance: function() {
              return Hx
          },
          getPluginConfig: function() {
              return Gx
          },
          getPluginDestination: function() {
              return Ux
          },
          getPluginDuration: function() {
              return Vx
          },
          getPluginOrigin: function() {
              return Bx
          },
          renderPlugin: function() {
              return kx
          }
      });
      var Gx = e => e.value
        , Vx = (e, t) => {
          if (t.config.duration !== "auto")
              return null;
          let r = parseFloat(e.getAttribute("data-duration"));
          return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
      }
        , Bx = e => e || {
          value: 0
      }
        , Ux = e => ({
          value: e.value
      })
        , Hx = e => {
          let t = window.Webflow.require("lottie").createInstance(e);
          return t.stop(),
          t.setSubframe(!0),
          t
      }
        , kx = (e, t, r) => {
          if (!e)
              return;
          let n = t[r.actionTypeId].value / 100;
          e.goToFrame(e.frames * n)
      }
        , Wx = e => {
          window.Webflow.require("lottie").createInstance(e).stop()
      }
  }
  );
  var dd = l(ji => {
      "use strict";
      Object.defineProperty(ji, "__esModule", {
          value: !0
      });
      function zx(e, t) {
          for (var r in t)
              Object.defineProperty(e, r, {
                  enumerable: !0,
                  get: t[r]
              })
      }
      zx(ji, {
          clearPlugin: function() {
              return rw
          },
          createPluginInstance: function() {
              return ew
          },
          getPluginConfig: function() {
              return $x
          },
          getPluginDestination: function() {
              return Jx
          },
          getPluginDuration: function() {
              return Qx
          },
          getPluginOrigin: function() {
              return Zx
          },
          renderPlugin: function() {
              return tw
          }
      });
      var Kx = e => document.querySelector(`[data-w-id="${e}"]`)
        , jx = () => window.Webflow.require("spline")
        , Yx = (e, t) => e.filter(r => !t.includes(r))
        , $x = (e, t) => e.value[t]
        , Qx = () => null
        , fd = Object.freeze({
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1
      })
        , Zx = (e, t) => {
          let r = t.config.value
            , n = Object.keys(r);
          if (e) {
              let o = Object.keys(e)
                , a = Yx(n, o);
              return a.length ? a.reduce( (u, f) => (u[f] = fd[f],
              u), e) : e
          }
          return n.reduce( (o, a) => (o[a] = fd[a],
          o), {})
      }
        , Jx = e => e.value
        , ew = (e, t) => {
          let r = t?.config?.target?.pluginElement;
          return r ? Kx(r) : null
      }
        , tw = (e, t, r) => {
          let n = jx()
            , i = n.getInstance(e)
            , o = r.config.target.objectId
            , a = s => {
              if (!s)
                  throw new Error("Invalid spline app passed to renderSpline");
              let u = o && s.findObjectById(o);
              if (!u)
                  return;
              let {PLUGIN_SPLINE: f} = t;
              f.positionX != null && (u.position.x = f.positionX),
              f.positionY != null && (u.position.y = f.positionY),
              f.positionZ != null && (u.position.z = f.positionZ),
              f.rotationX != null && (u.rotation.x = f.rotationX),
              f.rotationY != null && (u.rotation.y = f.rotationY),
              f.rotationZ != null && (u.rotation.z = f.rotationZ),
              f.scaleX != null && (u.scale.x = f.scaleX),
              f.scaleY != null && (u.scale.y = f.scaleY),
              f.scaleZ != null && (u.scale.z = f.scaleZ)
          }
          ;
          i ? a(i.spline) : n.setLoadHandler(e, a)
      }
        , rw = () => null
  }
  );
  var $i = l(Yi => {
      "use strict";
      Object.defineProperty(Yi, "__esModule", {
          value: !0
      });
      Object.defineProperty(Yi, "normalizeColor", {
          enumerable: !0,
          get: function() {
              return nw
          }
      });
      var pd = {
          aliceblue: "#F0F8FF",
          antiquewhite: "#FAEBD7",
          aqua: "#00FFFF",
          aquamarine: "#7FFFD4",
          azure: "#F0FFFF",
          beige: "#F5F5DC",
          bisque: "#FFE4C4",
          black: "#000000",
          blanchedalmond: "#FFEBCD",
          blue: "#0000FF",
          blueviolet: "#8A2BE2",
          brown: "#A52A2A",
          burlywood: "#DEB887",
          cadetblue: "#5F9EA0",
          chartreuse: "#7FFF00",
          chocolate: "#D2691E",
          coral: "#FF7F50",
          cornflowerblue: "#6495ED",
          cornsilk: "#FFF8DC",
          crimson: "#DC143C",
          cyan: "#00FFFF",
          darkblue: "#00008B",
          darkcyan: "#008B8B",
          darkgoldenrod: "#B8860B",
          darkgray: "#A9A9A9",
          darkgreen: "#006400",
          darkgrey: "#A9A9A9",
          darkkhaki: "#BDB76B",
          darkmagenta: "#8B008B",
          darkolivegreen: "#556B2F",
          darkorange: "#FF8C00",
          darkorchid: "#9932CC",
          darkred: "#8B0000",
          darksalmon: "#E9967A",
          darkseagreen: "#8FBC8F",
          darkslateblue: "#483D8B",
          darkslategray: "#2F4F4F",
          darkslategrey: "#2F4F4F",
          darkturquoise: "#00CED1",
          darkviolet: "#9400D3",
          deeppink: "#FF1493",
          deepskyblue: "#00BFFF",
          dimgray: "#696969",
          dimgrey: "#696969",
          dodgerblue: "#1E90FF",
          firebrick: "#B22222",
          floralwhite: "#FFFAF0",
          forestgreen: "#228B22",
          fuchsia: "#FF00FF",
          gainsboro: "#DCDCDC",
          ghostwhite: "#F8F8FF",
          gold: "#FFD700",
          goldenrod: "#DAA520",
          gray: "#808080",
          green: "#008000",
          greenyellow: "#ADFF2F",
          grey: "#808080",
          honeydew: "#F0FFF0",
          hotpink: "#FF69B4",
          indianred: "#CD5C5C",
          indigo: "#4B0082",
          ivory: "#FFFFF0",
          khaki: "#F0E68C",
          lavender: "#E6E6FA",
          lavenderblush: "#FFF0F5",
          lawngreen: "#7CFC00",
          lemonchiffon: "#FFFACD",
          lightblue: "#ADD8E6",
          lightcoral: "#F08080",
          lightcyan: "#E0FFFF",
          lightgoldenrodyellow: "#FAFAD2",
          lightgray: "#D3D3D3",
          lightgreen: "#90EE90",
          lightgrey: "#D3D3D3",
          lightpink: "#FFB6C1",
          lightsalmon: "#FFA07A",
          lightseagreen: "#20B2AA",
          lightskyblue: "#87CEFA",
          lightslategray: "#778899",
          lightslategrey: "#778899",
          lightsteelblue: "#B0C4DE",
          lightyellow: "#FFFFE0",
          lime: "#00FF00",
          limegreen: "#32CD32",
          linen: "#FAF0E6",
          magenta: "#FF00FF",
          maroon: "#800000",
          mediumaquamarine: "#66CDAA",
          mediumblue: "#0000CD",
          mediumorchid: "#BA55D3",
          mediumpurple: "#9370DB",
          mediumseagreen: "#3CB371",
          mediumslateblue: "#7B68EE",
          mediumspringgreen: "#00FA9A",
          mediumturquoise: "#48D1CC",
          mediumvioletred: "#C71585",
          midnightblue: "#191970",
          mintcream: "#F5FFFA",
          mistyrose: "#FFE4E1",
          moccasin: "#FFE4B5",
          navajowhite: "#FFDEAD",
          navy: "#000080",
          oldlace: "#FDF5E6",
          olive: "#808000",
          olivedrab: "#6B8E23",
          orange: "#FFA500",
          orangered: "#FF4500",
          orchid: "#DA70D6",
          palegoldenrod: "#EEE8AA",
          palegreen: "#98FB98",
          paleturquoise: "#AFEEEE",
          palevioletred: "#DB7093",
          papayawhip: "#FFEFD5",
          peachpuff: "#FFDAB9",
          peru: "#CD853F",
          pink: "#FFC0CB",
          plum: "#DDA0DD",
          powderblue: "#B0E0E6",
          purple: "#800080",
          rebeccapurple: "#663399",
          red: "#FF0000",
          rosybrown: "#BC8F8F",
          royalblue: "#4169E1",
          saddlebrown: "#8B4513",
          salmon: "#FA8072",
          sandybrown: "#F4A460",
          seagreen: "#2E8B57",
          seashell: "#FFF5EE",
          sienna: "#A0522D",
          silver: "#C0C0C0",
          skyblue: "#87CEEB",
          slateblue: "#6A5ACD",
          slategray: "#708090",
          slategrey: "#708090",
          snow: "#FFFAFA",
          springgreen: "#00FF7F",
          steelblue: "#4682B4",
          tan: "#D2B48C",
          teal: "#008080",
          thistle: "#D8BFD8",
          tomato: "#FF6347",
          turquoise: "#40E0D0",
          violet: "#EE82EE",
          wheat: "#F5DEB3",
          white: "#FFFFFF",
          whitesmoke: "#F5F5F5",
          yellow: "#FFFF00",
          yellowgreen: "#9ACD32"
      };
      function nw(e) {
          let t, r, n, i = 1, o = e.replace(/\s/g, "").toLowerCase(), s = (typeof pd[o] == "string" ? pd[o].toLowerCase() : null) || o;
          if (s.startsWith("#")) {
              let u = s.substring(1);
              u.length === 3 || u.length === 4 ? (t = parseInt(u[0] + u[0], 16),
              r = parseInt(u[1] + u[1], 16),
              n = parseInt(u[2] + u[2], 16),
              u.length === 4 && (i = parseInt(u[3] + u[3], 16) / 255)) : (u.length === 6 || u.length === 8) && (t = parseInt(u.substring(0, 2), 16),
              r = parseInt(u.substring(2, 4), 16),
              n = parseInt(u.substring(4, 6), 16),
              u.length === 8 && (i = parseInt(u.substring(6, 8), 16) / 255))
          } else if (s.startsWith("rgba")) {
              let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
              t = parseInt(u[0], 10),
              r = parseInt(u[1], 10),
              n = parseInt(u[2], 10),
              i = parseFloat(u[3])
          } else if (s.startsWith("rgb")) {
              let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
              t = parseInt(u[0], 10),
              r = parseInt(u[1], 10),
              n = parseInt(u[2], 10)
          } else if (s.startsWith("hsla")) {
              let u = s.match(/hsla\(([^)]+)\)/)[1].split(",")
                , f = parseFloat(u[0])
                , h = parseFloat(u[1].replace("%", "")) / 100
                , p = parseFloat(u[2].replace("%", "")) / 100;
              i = parseFloat(u[3]);
              let d = (1 - Math.abs(2 * p - 1)) * h, v = d * (1 - Math.abs(f / 60 % 2 - 1)), b = p - d / 2, m, A, E;
              f >= 0 && f < 60 ? (m = d,
              A = v,
              E = 0) : f >= 60 && f < 120 ? (m = v,
              A = d,
              E = 0) : f >= 120 && f < 180 ? (m = 0,
              A = d,
              E = v) : f >= 180 && f < 240 ? (m = 0,
              A = v,
              E = d) : f >= 240 && f < 300 ? (m = v,
              A = 0,
              E = d) : (m = d,
              A = 0,
              E = v),
              t = Math.round((m + b) * 255),
              r = Math.round((A + b) * 255),
              n = Math.round((E + b) * 255)
          } else if (s.startsWith("hsl")) {
              let u = s.match(/hsl\(([^)]+)\)/)[1].split(","), f = parseFloat(u[0]), h = parseFloat(u[1].replace("%", "")) / 100, p = parseFloat(u[2].replace("%", "")) / 100, d = (1 - Math.abs(2 * p - 1)) * h, v = d * (1 - Math.abs(f / 60 % 2 - 1)), b = p - d / 2, m, A, E;
              f >= 0 && f < 60 ? (m = d,
              A = v,
              E = 0) : f >= 60 && f < 120 ? (m = v,
              A = d,
              E = 0) : f >= 120 && f < 180 ? (m = 0,
              A = d,
              E = v) : f >= 180 && f < 240 ? (m = 0,
              A = v,
              E = d) : f >= 240 && f < 300 ? (m = v,
              A = 0,
              E = d) : (m = d,
              A = 0,
              E = v),
              t = Math.round((m + b) * 255),
              r = Math.round((A + b) * 255),
              n = Math.round((E + b) * 255)
          }
          if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n))
              throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
          return {
              red: t,
              green: r,
              blue: n,
              alpha: i
          }
      }
  }
  );
  var hd = l(Qi => {
      "use strict";
      Object.defineProperty(Qi, "__esModule", {
          value: !0
      });
      function iw(e, t) {
          for (var r in t)
              Object.defineProperty(e, r, {
                  enumerable: !0,
                  get: t[r]
              })
      }
      iw(Qi, {
          clearPlugin: function() {
              return dw
          },
          createPluginInstance: function() {
              return lw
          },
          getPluginConfig: function() {
              return aw
          },
          getPluginDestination: function() {
              return cw
          },
          getPluginDuration: function() {
              return sw
          },
          getPluginOrigin: function() {
              return uw
          },
          renderPlugin: function() {
              return fw
          }
      });
      var ow = $i()
        , aw = (e, t) => e.value[t]
        , sw = () => null
        , uw = (e, t) => {
          if (e)
              return e;
          let r = t.config.value
            , n = t.config.target.objectId
            , i = getComputedStyle(document.documentElement).getPropertyValue(n);
          if (r.size != null)
              return {
                  size: parseInt(i, 10)
              };
          if (r.red != null && r.green != null && r.blue != null)
              return (0,
              ow.normalizeColor)(i)
      }
        , cw = e => e.value
        , lw = () => null
        , fw = (e, t, r) => {
          let n = r.config.target.objectId, i = r.config.value.unit, {PLUGIN_VARIABLE: o} = t, {size: a, red: s, green: u, blue: f, alpha: h} = o, p;
          a != null && (p = a + i),
          s != null && f != null && u != null && h != null && (p = `rgba(${s}, ${u}, ${f}, ${h})`),
          p != null && document.documentElement.style.setProperty(n, p)
      }
        , dw = (e, t) => {
          let r = t.config.target.objectId;
          document.documentElement.style.removeProperty(r)
      }
  }
  );
  var Ed = l(eo => {
      "use strict";
      Object.defineProperty(eo, "__esModule", {
          value: !0
      });
      Object.defineProperty(eo, "pluginMethodMap", {
          enumerable: !0,
          get: function() {
              return Ew
          }
      });
      var Zi = (ve(),
      Me(_s))
        , pw = Ji(ld())
        , hw = Ji(dd())
        , gw = Ji(hd());
      function gd(e) {
          if (typeof WeakMap != "function")
              return null;
          var t = new WeakMap
            , r = new WeakMap;
          return (gd = function(n) {
              return n ? r : t
          }
          )(e)
      }
      function Ji(e, t) {
          if (!t && e && e.__esModule)
              return e;
          if (e === null || typeof e != "object" && typeof e != "function")
              return {
                  default: e
              };
          var r = gd(t);
          if (r && r.has(e))
              return r.get(e);
          var n = {
              __proto__: null
          }
            , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
              if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                  var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                  a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
              }
          return n.default = e,
          r && r.set(e, n),
          n
      }
      var Ew = new Map([[Zi.ActionTypeConsts.PLUGIN_LOTTIE, {
          ...pw
      }], [Zi.ActionTypeConsts.PLUGIN_SPLINE, {
          ...hw
      }], [Zi.ActionTypeConsts.PLUGIN_VARIABLE, {
          ...gw
      }]])
  }
  );
  var yd = {};
  ye(yd, {
      clearPlugin: () => ao,
      createPluginInstance: () => mw,
      getPluginConfig: () => ro,
      getPluginDestination: () => io,
      getPluginDuration: () => yw,
      getPluginOrigin: () => no,
      isPluginType: () => at,
      renderPlugin: () => oo
  });
  function at(e) {
      return to.pluginMethodMap.has(e)
  }
  var to, st, ro, no, yw, io, mw, oo, ao, so = re( () => {
      "use strict";
      rn();
      to = $(Ed());
      st = e => t => {
          if (!Le)
              return () => null;
          let r = to.pluginMethodMap.get(t);
          if (!r)
              throw new Error(`IX2 no plugin configured for: ${t}`);
          let n = r[e];
          if (!n)
              throw new Error(`IX2 invalid plugin method: ${e}`);
          return n
      }
      ,
      ro = st("getPluginConfig"),
      no = st("getPluginOrigin"),
      yw = st("getPluginDuration"),
      io = st("getPluginDestination"),
      mw = st("createPluginInstance"),
      oo = st("renderPlugin"),
      ao = st("clearPlugin")
  }
  );
  var vd = l( (x1, md) => {
      function vw(e, t) {
          return e == null || e !== e ? t : e
      }
      md.exports = vw
  }
  );
  var Id = l( (w1, _d) => {
      function _w(e, t, r, n) {
          var i = -1
            , o = e == null ? 0 : e.length;
          for (n && o && (r = e[++i]); ++i < o; )
              r = t(r, e[i], i, e);
          return r
      }
      _d.exports = _w
  }
  );
  var Ad = l( (R1, Td) => {
      function Iw(e) {
          return function(t, r, n) {
              for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
                  var u = a[e ? s : ++i];
                  if (r(o[u], u, o) === !1)
                      break
              }
              return t
          }
      }
      Td.exports = Iw
  }
  );
  var Sd = l( (C1, bd) => {
      var Tw = Ad()
        , Aw = Tw();
      bd.exports = Aw
  }
  );
  var uo = l( (L1, Od) => {
      var bw = Sd()
        , Sw = rr();
      function Ow(e, t) {
          return e && bw(e, t, Sw)
      }
      Od.exports = Ow
  }
  );
  var wd = l( (P1, xd) => {
      var xw = it();
      function ww(e, t) {
          return function(r, n) {
              if (r == null)
                  return r;
              if (!xw(r))
                  return e(r, n);
              for (var i = r.length, o = t ? i : -1, a = Object(r); (t ? o-- : ++o < i) && n(a[o], o, a) !== !1; )
                  ;
              return r
          }
      }
      xd.exports = ww
  }
  );
  var co = l( (N1, Rd) => {
      var Rw = uo()
        , Cw = wd()
        , Lw = Cw(Rw);
      Rd.exports = Lw
  }
  );
  var Ld = l( (M1, Cd) => {
      function Pw(e, t, r, n, i) {
          return i(e, function(o, a, s) {
              r = n ? (n = !1,
              o) : t(r, o, a, s)
          }),
          r
      }
      Cd.exports = Pw
  }
  );
  var Nd = l( (D1, Pd) => {
      var Nw = Id()
        , Mw = co()
        , Dw = Je()
        , Fw = Ld()
        , qw = ue();
      function Xw(e, t, r) {
          var n = qw(e) ? Nw : Fw
            , i = arguments.length < 3;
          return n(e, Dw(t, 4), r, i, Mw)
      }
      Pd.exports = Xw
  }
  );
  var Dd = l( (F1, Md) => {
      var Gw = Gi()
        , Vw = Je()
        , Bw = Vi()
        , Uw = Math.max
        , Hw = Math.min;
      function kw(e, t, r) {
          var n = e == null ? 0 : e.length;
          if (!n)
              return -1;
          var i = n - 1;
          return r !== void 0 && (i = Bw(r),
          i = r < 0 ? Uw(n + i, 0) : Hw(i, n - 1)),
          Gw(e, Vw(t, 3), i, !0)
      }
      Md.exports = kw
  }
  );
  var qd = l( (q1, Fd) => {
      var Ww = Xi()
        , zw = Dd()
        , Kw = Ww(zw);
      Fd.exports = Kw
  }
  );
  function Xd(e, t) {
      return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
  }
  function jw(e, t) {
      if (Xd(e, t))
          return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
          return !1;
      let r = Object.keys(e)
        , n = Object.keys(t);
      if (r.length !== n.length)
          return !1;
      for (let i = 0; i < r.length; i++)
          if (!Object.hasOwn(t, r[i]) || !Xd(e[r[i]], t[r[i]]))
              return !1;
      return !0
  }
  var lo, Gd = re( () => {
      "use strict";
      lo = jw
  }
  );
  var np = {};
  ye(np, {
      cleanupHTMLElement: () => WR,
      clearAllStyles: () => kR,
      clearObjectCache: () => fR,
      getActionListProgress: () => KR,
      getAffectedElements: () => Eo,
      getComputedStyle: () => vR,
      getDestinationValues: () => OR,
      getElementId: () => gR,
      getInstanceId: () => pR,
      getInstanceOrigin: () => TR,
      getItemConfigByKey: () => SR,
      getMaxDurationItemIndex: () => rp,
      getNamespacedParameterId: () => $R,
      getRenderType: () => Jd,
      getStyleProp: () => xR,
      mediaQueriesEqual: () => ZR,
      observeStore: () => mR,
      reduceListToGroup: () => jR,
      reifyState: () => ER,
      renderHTMLElement: () => wR,
      shallowEqual: () => lo,
      shouldAllowMediaQuery: () => QR,
      shouldNamespaceEventParameter: () => YR,
      stringifyTarget: () => JR
  });
  function fR() {
      an.clear()
  }
  function pR() {
      return "i" + dR++
  }
  function gR(e, t) {
      for (let r in e) {
          let n = e[r];
          if (n && n.ref === t)
              return n.id
      }
      return "e" + hR++
  }
  function ER({events: e, actionLists: t, site: r}={}) {
      let n = (0,
      ln.default)(e, (a, s) => {
          let {eventTypeId: u} = s;
          return a[u] || (a[u] = {}),
          a[u][s.id] = s,
          a
      }
      , {})
        , i = r && r.mediaQueries
        , o = [];
      return i ? o = i.map(a => a.key) : (i = [],
      console.warn("IX2 missing mediaQueries in site data")),
      {
          ixData: {
              events: e,
              actionLists: t,
              eventTypeMap: n,
              mediaQueries: i,
              mediaQueryKeys: o
          }
      }
  }
  function mR({store: e, select: t, onChange: r, comparator: n=yR}) {
      let {getState: i, subscribe: o} = e
        , a = o(u)
        , s = t(i());
      function u() {
          let f = t(i());
          if (f == null) {
              a();
              return
          }
          n(f, s) || (s = f,
          r(s, e))
      }
      return a
  }
  function Ud(e) {
      let t = typeof e;
      if (t === "string")
          return {
              id: e
          };
      if (e != null && t === "object") {
          let {id: r, objectId: n, selector: i, selectorGuids: o, appliesTo: a, useEventTarget: s} = e;
          return {
              id: r,
              objectId: n,
              selector: i,
              selectorGuids: o,
              appliesTo: a,
              useEventTarget: s
          }
      }
      return {}
  }
  function Eo({config: e, event: t, eventTarget: r, elementRoot: n, elementApi: i}) {
      if (!i)
          throw new Error("IX2 missing elementApi");
      let {targets: o} = e;
      if (Array.isArray(o) && o.length > 0)
          return o.reduce( (P, _) => P.concat(Eo({
              config: {
                  target: _
              },
              event: t,
              eventTarget: r,
              elementRoot: n,
              elementApi: i
          })), []);
      let {getValidDocument: a, getQuerySelector: s, queryDocument: u, getChildElements: f, getSiblingElements: h, matchSelector: p, elementContains: d, isSiblingNode: v} = i
        , {target: b} = e;
      if (!b)
          return [];
      let {id: m, objectId: A, selector: E, selectorGuids: O, appliesTo: T, useEventTarget: w} = Ud(b);
      if (A)
          return [an.has(A) ? an.get(A) : an.set(A, {}).get(A)];
      if (T === li.PAGE) {
          let P = a(m);
          return P ? [P] : []
      }
      let x = (t?.action?.config?.affectedElements ?? {})[m || E] || {}, D = !!(x.id || x.selector), F, X, B, k = t && s(Ud(t.target));
      if (D ? (F = x.limitAffectedElements,
      X = k,
      B = s(x)) : X = B = s({
          id: m,
          selector: E,
          selectorGuids: O
      }),
      t && w) {
          let P = r && (B || w === !0) ? [r] : u(k);
          if (B) {
              if (w === uR)
                  return u(B).filter(_ => P.some(L => d(_, L)));
              if (w === Vd)
                  return u(B).filter(_ => P.some(L => d(L, _)));
              if (w === Bd)
                  return u(B).filter(_ => P.some(L => v(L, _)))
          }
          return P
      }
      return X == null || B == null ? [] : Le && n ? u(B).filter(P => n.contains(P)) : F === Vd ? u(X, B) : F === sR ? f(u(X)).filter(p(B)) : F === Bd ? h(u(X)).filter(p(B)) : u(B)
  }
  function vR({element: e, actionItem: t}) {
      if (!Le)
          return {};
      let {actionTypeId: r} = t;
      switch (r) {
      case Lt:
      case Pt:
      case Nt:
      case Mt:
      case dn:
          return window.getComputedStyle(e);
      default:
          return {}
      }
  }
  function TR(e, t={}, r={}, n, i) {
      let {getStyle: o} = i
        , {actionTypeId: a} = n;
      if (at(a))
          return no(a)(t[a], n);
      switch (n.actionTypeId) {
      case wt:
      case Rt:
      case Ct:
      case dr:
          return t[n.actionTypeId] || yo[n.actionTypeId];
      case pr:
          return _R(t[n.actionTypeId], n.config.filters);
      case hr:
          return IR(t[n.actionTypeId], n.config.fontVariations);
      case $d:
          return {
              value: (0,
              We.default)(parseFloat(o(e, un)), 1)
          };
      case Lt:
          {
              let s = o(e, Ve), u = o(e, Be), f, h;
              return n.config.widthUnit === tt ? f = Hd.test(s) ? parseFloat(s) : parseFloat(r.width) : f = (0,
              We.default)(parseFloat(s), parseFloat(r.width)),
              n.config.heightUnit === tt ? h = Hd.test(u) ? parseFloat(u) : parseFloat(r.height) : h = (0,
              We.default)(parseFloat(u), parseFloat(r.height)),
              {
                  widthValue: f,
                  heightValue: h
              }
          }
      case Pt:
      case Nt:
      case Mt:
          return BR({
              element: e,
              actionTypeId: n.actionTypeId,
              computedStyle: r,
              getStyle: o
          });
      case dn:
          return {
              value: (0,
              We.default)(o(e, cn), r.display)
          };
      case lR:
          return t[n.actionTypeId] || {
              value: 0
          };
      default:
          return
      }
  }
  function OR({element: e, actionItem: t, elementApi: r}) {
      if (at(t.actionTypeId))
          return io(t.actionTypeId)(t.config);
      switch (t.actionTypeId) {
      case wt:
      case Rt:
      case Ct:
      case dr:
          {
              let {xValue: n, yValue: i, zValue: o} = t.config;
              return {
                  xValue: n,
                  yValue: i,
                  zValue: o
              }
          }
      case Lt:
          {
              let {getStyle: n, setStyle: i, getProperty: o} = r
                , {widthUnit: a, heightUnit: s} = t.config
                , {widthValue: u, heightValue: f} = t.config;
              if (!Le)
                  return {
                      widthValue: u,
                      heightValue: f
                  };
              if (a === tt) {
                  let h = n(e, Ve);
                  i(e, Ve, ""),
                  u = o(e, "offsetWidth"),
                  i(e, Ve, h)
              }
              if (s === tt) {
                  let h = n(e, Be);
                  i(e, Be, ""),
                  f = o(e, "offsetHeight"),
                  i(e, Be, h)
              }
              return {
                  widthValue: u,
                  heightValue: f
              }
          }
      case Pt:
      case Nt:
      case Mt:
          {
              let {rValue: n, gValue: i, bValue: o, aValue: a, globalSwatchId: s} = t.config;
              if (s && s.startsWith("--")) {
                  let {getStyle: u} = r
                    , f = u(e, s)
                    , h = (0,
                  zd.normalizeColor)(f);
                  return {
                      rValue: h.red,
                      gValue: h.green,
                      bValue: h.blue,
                      aValue: h.alpha
                  }
              }
              return {
                  rValue: n,
                  gValue: i,
                  bValue: o,
                  aValue: a
              }
          }
      case pr:
          return t.config.filters.reduce(AR, {});
      case hr:
          return t.config.fontVariations.reduce(bR, {});
      default:
          {
              let {value: n} = t.config;
              return {
                  value: n
              }
          }
      }
  }
  function Jd(e) {
      if (/^TRANSFORM_/.test(e))
          return jd;
      if (/^STYLE_/.test(e))
          return ho;
      if (/^GENERAL_/.test(e))
          return po;
      if (/^PLUGIN_/.test(e))
          return Yd
  }
  function xR(e, t) {
      return e === ho ? t.replace("STYLE_", "").toLowerCase() : null
  }
  function wR(e, t, r, n, i, o, a, s, u) {
      switch (s) {
      case jd:
          return NR(e, t, r, i, a);
      case ho:
          return UR(e, t, r, i, o, a);
      case po:
          return HR(e, i, a);
      case Yd:
          {
              let {actionTypeId: f} = i;
              if (at(f))
                  return oo(f)(u, t, i)
          }
      }
  }
  function NR(e, t, r, n, i) {
      let o = PR.map(s => {
          let u = yo[s]
            , {xValue: f=u.xValue, yValue: h=u.yValue, zValue: p=u.zValue, xUnit: d="", yUnit: v="", zUnit: b=""} = t[s] || {};
          switch (s) {
          case wt:
              return `${Qw}(${f}${d}, ${h}${v}, ${p}${b})`;
          case Rt:
              return `${Zw}(${f}${d}, ${h}${v}, ${p}${b})`;
          case Ct:
              return `${Jw}(${f}${d}) ${eR}(${h}${v}) ${tR}(${p}${b})`;
          case dr:
              return `${rR}(${f}${d}, ${h}${v})`;
          default:
              return ""
          }
      }
      ).join(" ")
        , {setStyle: a} = i;
      ut(e, et, i),
      a(e, et, o),
      FR(n, r) && a(e, tn, nR)
  }
  function MR(e, t, r, n) {
      let i = (0,
      ln.default)(t, (a, s, u) => `${a} ${u}(${s}${LR(u, r)})`, "")
        , {setStyle: o} = n;
      ut(e, cr, n),
      o(e, cr, i)
  }
  function DR(e, t, r, n) {
      let i = (0,
      ln.default)(t, (a, s, u) => (a.push(`"${u}" ${s}`),
      a), []).join(", ")
        , {setStyle: o} = n;
      ut(e, lr, n),
      o(e, lr, i)
  }
  function FR({actionTypeId: e}, {xValue: t, yValue: r, zValue: n}) {
      return e === wt && n !== void 0 || e === Rt && n !== void 0 || e === Ct && (t !== void 0 || r !== void 0)
  }
  function VR(e, t) {
      let r = e.exec(t);
      return r ? r[1] : ""
  }
  function BR({element: e, actionTypeId: t, computedStyle: r, getStyle: n}) {
      let i = go[t]
        , o = n(e, i)
        , a = XR.test(o) ? o : r[i]
        , s = VR(GR, a).split(fr);
      return {
          rValue: (0,
          We.default)(parseInt(s[0], 10), 255),
          gValue: (0,
          We.default)(parseInt(s[1], 10), 255),
          bValue: (0,
          We.default)(parseInt(s[2], 10), 255),
          aValue: (0,
          We.default)(parseFloat(s[3]), 1)
      }
  }
  function UR(e, t, r, n, i, o) {
      let {setStyle: a} = o;
      switch (n.actionTypeId) {
      case Lt:
          {
              let {widthUnit: s="", heightUnit: u=""} = n.config
                , {widthValue: f, heightValue: h} = r;
              f !== void 0 && (s === tt && (s = "px"),
              ut(e, Ve, o),
              a(e, Ve, f + s)),
              h !== void 0 && (u === tt && (u = "px"),
              ut(e, Be, o),
              a(e, Be, h + u));
              break
          }
      case pr:
          {
              MR(e, r, n.config, o);
              break
          }
      case hr:
          {
              DR(e, r, n.config, o);
              break
          }
      case Pt:
      case Nt:
      case Mt:
          {
              let s = go[n.actionTypeId]
                , u = Math.round(r.rValue)
                , f = Math.round(r.gValue)
                , h = Math.round(r.bValue)
                , p = r.aValue;
              ut(e, s, o),
              a(e, s, p >= 1 ? `rgb(${u},${f},${h})` : `rgba(${u},${f},${h},${p})`);
              break
          }
      default:
          {
              let {unit: s=""} = n.config;
              ut(e, i, o),
              a(e, i, r.value + s);
              break
          }
      }
  }
  function HR(e, t, r) {
      let {setStyle: n} = r;
      switch (t.actionTypeId) {
      case dn:
          {
              let {value: i} = t.config;
              i === iR && Le ? n(e, cn, Ui) : n(e, cn, i);
              return
          }
      }
  }
  function ut(e, t, r) {
      if (!Le)
          return;
      let n = Zd[t];
      if (!n)
          return;
      let {getStyle: i, setStyle: o} = r
        , a = i(e, xt);
      if (!a) {
          o(e, xt, n);
          return
      }
      let s = a.split(fr).map(Qd);
      s.indexOf(n) === -1 && o(e, xt, s.concat(n).join(fr))
  }
  function ep(e, t, r) {
      if (!Le)
          return;
      let n = Zd[t];
      if (!n)
          return;
      let {getStyle: i, setStyle: o} = r
        , a = i(e, xt);
      !a || a.indexOf(n) === -1 || o(e, xt, a.split(fr).map(Qd).filter(s => s !== n).join(fr))
  }
  function kR({store: e, elementApi: t}) {
      let {ixData: r} = e.getState()
        , {events: n={}, actionLists: i={}} = r;
      Object.keys(n).forEach(o => {
          let a = n[o]
            , {config: s} = a.action
            , {actionListId: u} = s
            , f = i[u];
          f && kd({
              actionList: f,
              event: a,
              elementApi: t
          })
      }
      ),
      Object.keys(i).forEach(o => {
          kd({
              actionList: i[o],
              elementApi: t
          })
      }
      )
  }
  function kd({actionList: e={}, event: t, elementApi: r}) {
      let {actionItemGroups: n, continuousParameterGroups: i} = e;
      n && n.forEach(o => {
          Wd({
              actionGroup: o,
              event: t,
              elementApi: r
          })
      }
      ),
      i && i.forEach(o => {
          let {continuousActionGroups: a} = o;
          a.forEach(s => {
              Wd({
                  actionGroup: s,
                  event: t,
                  elementApi: r
              })
          }
          )
      }
      )
  }
  function Wd({actionGroup: e, event: t, elementApi: r}) {
      let {actionItems: n} = e;
      n.forEach(i => {
          let {actionTypeId: o, config: a} = i, s;
          at(o) ? s = u => ao(o)(u, i) : s = tp({
              effect: zR,
              actionTypeId: o,
              elementApi: r
          }),
          Eo({
              config: a,
              event: t,
              elementApi: r
          }).forEach(s)
      }
      )
  }
  function WR(e, t, r) {
      let {setStyle: n, getStyle: i} = r
        , {actionTypeId: o} = t;
      if (o === Lt) {
          let {config: a} = t;
          a.widthUnit === tt && n(e, Ve, ""),
          a.heightUnit === tt && n(e, Be, "")
      }
      i(e, xt) && tp({
          effect: ep,
          actionTypeId: o,
          elementApi: r
      })(e)
  }
  function zR(e, t, r) {
      let {setStyle: n} = r;
      ep(e, t, r),
      n(e, t, ""),
      t === et && n(e, tn, "")
  }
  function rp(e) {
      let t = 0
        , r = 0;
      return e.forEach( (n, i) => {
          let {config: o} = n
            , a = o.delay + o.duration;
          a >= t && (t = a,
          r = i)
      }
      ),
      r
  }
  function KR(e, t) {
      let {actionItemGroups: r, useFirstGroupAsInitialState: n} = e
        , {actionItem: i, verboseTimeElapsed: o=0} = t
        , a = 0
        , s = 0;
      return r.forEach( (u, f) => {
          if (n && f === 0)
              return;
          let {actionItems: h} = u
            , p = h[rp(h)]
            , {config: d, actionTypeId: v} = p;
          i.id === p.id && (s = a + o);
          let b = Jd(v) === po ? 0 : d.duration;
          a += d.delay + b
      }
      ),
      a > 0 ? ur(s / a) : 0
  }
  function jR({actionList: e, actionItemId: t, rawData: r}) {
      let {actionItemGroups: n, continuousParameterGroups: i} = e
        , o = []
        , a = s => (o.push((0,
      fn.mergeIn)(s, ["config"], {
          delay: 0,
          duration: 0
      })),
      s.id === t);
      return n && n.some( ({actionItems: s}) => s.some(a)),
      i && i.some(s => {
          let {continuousActionGroups: u} = s;
          return u.some( ({actionItems: f}) => f.some(a))
      }
      ),
      (0,
      fn.setIn)(r, ["actionLists"], {
          [e.id]: {
              id: e.id,
              actionItemGroups: [{
                  actionItems: o
              }]
          }
      })
  }
  function YR(e, {basedOn: t}) {
      return e === Ce.SCROLLING_IN_VIEW && (t === Xe.ELEMENT || t == null) || e === Ce.MOUSE_MOVE && t === Xe.ELEMENT
  }
  function $R(e, t) {
      return e + cR + t
  }
  function QR(e, t) {
      return t == null ? !0 : e.indexOf(t) !== -1
  }
  function ZR(e, t) {
      return lo(e && e.sort(), t && t.sort())
  }
  function JR(e) {
      if (typeof e == "string")
          return e;
      if (e.pluginElement && e.objectId)
          return e.pluginElement + fo + e.objectId;
      if (e.objectId)
          return e.objectId;
      let {id: t="", selector: r="", useEventTarget: n=""} = e;
      return t + fo + r + fo + n
  }
  var We, ln, sn, fn, zd, Yw, $w, Qw, Zw, Jw, eR, tR, rR, nR, iR, un, cr, lr, Ve, Be, Kd, oR, aR, Vd, sR, Bd, uR, cn, xt, tt, fr, cR, fo, jd, po, ho, Yd, wt, Rt, Ct, dr, $d, pr, hr, Lt, Pt, Nt, Mt, dn, lR, Qd, go, Zd, an, dR, hR, yR, Hd, _R, IR, AR, bR, SR, yo, RR, CR, LR, PR, qR, XR, GR, tp, ip = re( () => {
      "use strict";
      We = $(vd()),
      ln = $(Nd()),
      sn = $(qd()),
      fn = $(yt());
      ve();
      Gd();
      Wi();
      zd = $($i());
      so();
      rn();
      ({BACKGROUND: Yw, TRANSFORM: $w, TRANSLATE_3D: Qw, SCALE_3D: Zw, ROTATE_X: Jw, ROTATE_Y: eR, ROTATE_Z: tR, SKEW: rR, PRESERVE_3D: nR, FLEX: iR, OPACITY: un, FILTER: cr, FONT_VARIATION_SETTINGS: lr, WIDTH: Ve, HEIGHT: Be, BACKGROUND_COLOR: Kd, BORDER_COLOR: oR, COLOR: aR, CHILDREN: Vd, IMMEDIATE_CHILDREN: sR, SIBLINGS: Bd, PARENT: uR, DISPLAY: cn, WILL_CHANGE: xt, AUTO: tt, COMMA_DELIMITER: fr, COLON_DELIMITER: cR, BAR_DELIMITER: fo, RENDER_TRANSFORM: jd, RENDER_GENERAL: po, RENDER_STYLE: ho, RENDER_PLUGIN: Yd} = ce),
      {TRANSFORM_MOVE: wt, TRANSFORM_SCALE: Rt, TRANSFORM_ROTATE: Ct, TRANSFORM_SKEW: dr, STYLE_OPACITY: $d, STYLE_FILTER: pr, STYLE_FONT_VARIATION: hr, STYLE_SIZE: Lt, STYLE_BACKGROUND_COLOR: Pt, STYLE_BORDER: Nt, STYLE_TEXT_COLOR: Mt, GENERAL_DISPLAY: dn, OBJECT_VALUE: lR} = me,
      Qd = e => e.trim(),
      go = Object.freeze({
          [Pt]: Kd,
          [Nt]: oR,
          [Mt]: aR
      }),
      Zd = Object.freeze({
          [et]: $w,
          [Kd]: Yw,
          [un]: un,
          [cr]: cr,
          [Ve]: Ve,
          [Be]: Be,
          [lr]: lr
      }),
      an = new Map;
      dR = 1;
      hR = 1;
      yR = (e, t) => e === t;
      Hd = /px/,
      _R = (e, t) => t.reduce( (r, n) => (r[n.type] == null && (r[n.type] = RR[n.type]),
      r), e || {}),
      IR = (e, t) => t.reduce( (r, n) => (r[n.type] == null && (r[n.type] = CR[n.type] || n.defaultValue || 0),
      r), e || {});
      AR = (e, t) => (t && (e[t.type] = t.value || 0),
      e),
      bR = (e, t) => (t && (e[t.type] = t.value || 0),
      e),
      SR = (e, t, r) => {
          if (at(e))
              return ro(e)(r, t);
          switch (e) {
          case pr:
              {
                  let n = (0,
                  sn.default)(r.filters, ({type: i}) => i === t);
                  return n ? n.value : 0
              }
          case hr:
              {
                  let n = (0,
                  sn.default)(r.fontVariations, ({type: i}) => i === t);
                  return n ? n.value : 0
              }
          default:
              return r[t]
          }
      }
      ;
      yo = {
          [wt]: Object.freeze({
              xValue: 0,
              yValue: 0,
              zValue: 0
          }),
          [Rt]: Object.freeze({
              xValue: 1,
              yValue: 1,
              zValue: 1
          }),
          [Ct]: Object.freeze({
              xValue: 0,
              yValue: 0,
              zValue: 0
          }),
          [dr]: Object.freeze({
              xValue: 0,
              yValue: 0
          })
      },
      RR = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100
      }),
      CR = Object.freeze({
          wght: 0,
          opsz: 0,
          wdth: 0,
          slnt: 0
      }),
      LR = (e, t) => {
          let r = (0,
          sn.default)(t.filters, ({type: n}) => n === e);
          if (r && r.unit)
              return r.unit;
          switch (e) {
          case "blur":
              return "px";
          case "hue-rotate":
              return "deg";
          default:
              return "%"
          }
      }
      ,
      PR = Object.keys(yo);
      qR = "\\(([^)]+)\\)",
      XR = /^rgb/,
      GR = RegExp(`rgba?${qR}`);
      tp = ({effect: e, actionTypeId: t, elementApi: r}) => n => {
          switch (t) {
          case wt:
          case Rt:
          case Ct:
          case dr:
              e(n, et, r);
              break;
          case pr:
              e(n, cr, r);
              break;
          case hr:
              e(n, lr, r);
              break;
          case $d:
              e(n, un, r);
              break;
          case Lt:
              e(n, Ve, r),
              e(n, Be, r);
              break;
          case Pt:
          case Nt:
          case Mt:
              e(n, go[t], r);
              break;
          case dn:
              e(n, cn, r);
              break
          }
      }
  }
  );
  var ct = l(mo => {
      "use strict";
      Object.defineProperty(mo, "__esModule", {
          value: !0
      });
      function eC(e, t) {
          for (var r in t)
              Object.defineProperty(e, r, {
                  enumerable: !0,
                  get: t[r]
              })
      }
      eC(mo, {
          IX2BrowserSupport: function() {
              return tC
          },
          IX2EasingUtils: function() {
              return nC
          },
          IX2Easings: function() {
              return rC
          },
          IX2ElementsReducer: function() {
              return iC
          },
          IX2VanillaPlugins: function() {
              return oC
          },
          IX2VanillaUtils: function() {
              return aC
          }
      });
      var tC = Dt((rn(),
      Me(Zf)))
        , rC = Dt((ki(),
      Me(sr)))
        , nC = Dt((Wi(),
      Me(od)))
        , iC = Dt((cd(),
      Me(ud)))
        , oC = Dt((so(),
      Me(yd)))
        , aC = Dt((ip(),
      Me(np)));
      function op(e) {
          if (typeof WeakMap != "function")
              return null;
          var t = new WeakMap
            , r = new WeakMap;
          return (op = function(n) {
              return n ? r : t
          }
          )(e)
      }
      function Dt(e, t) {
          if (!t && e && e.__esModule)
              return e;
          if (e === null || typeof e != "object" && typeof e != "function")
              return {
                  default: e
              };
          var r = op(t);
          if (r && r.has(e))
              return r.get(e);
          var n = {
              __proto__: null
          }
            , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
              if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                  var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                  a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
              }
          return n.default = e,
          r && r.set(e, n),
          n
      }
  }
  );
  var hn, ze, sC, uC, cC, lC, fC, dC, pn, ap, pC, hC, vo, gC, EC, yC, mC, sp, up = re( () => {
      "use strict";
      ve();
      hn = $(ct()),
      ze = $(yt()),
      {IX2_RAW_DATA_IMPORTED: sC, IX2_SESSION_STOPPED: uC, IX2_INSTANCE_ADDED: cC, IX2_INSTANCE_STARTED: lC, IX2_INSTANCE_REMOVED: fC, IX2_ANIMATION_FRAME_CHANGED: dC} = se,
      {optimizeFloat: pn, applyEasing: ap, createBezierEasing: pC} = hn.IX2EasingUtils,
      {RENDER_GENERAL: hC} = ce,
      {getItemConfigByKey: vo, getRenderType: gC, getStyleProp: EC} = hn.IX2VanillaUtils,
      yC = (e, t) => {
          let {position: r, parameterId: n, actionGroups: i, destinationKeys: o, smoothing: a, restingValue: s, actionTypeId: u, customEasingFn: f, skipMotion: h, skipToValue: p} = e
            , {parameters: d} = t.payload
            , v = Math.max(1 - a, .01)
            , b = d[n];
          b == null && (v = 1,
          b = s);
          let m = Math.max(b, 0) || 0
            , A = pn(m - r)
            , E = h ? p : pn(r + A * v)
            , O = E * 100;
          if (E === r && e.current)
              return e;
          let T, w, C, x;
          for (let F = 0, {length: X} = i; F < X; F++) {
              let {keyframe: B, actionItems: k} = i[F];
              if (F === 0 && (T = k[0]),
              O >= B) {
                  T = k[0];
                  let P = i[F + 1]
                    , _ = P && O !== B;
                  w = _ ? P.actionItems[0] : null,
                  _ && (C = B / 100,
                  x = (P.keyframe - B) / 100)
              }
          }
          let D = {};
          if (T && !w)
              for (let F = 0, {length: X} = o; F < X; F++) {
                  let B = o[F];
                  D[B] = vo(u, B, T.config)
              }
          else if (T && w && C !== void 0 && x !== void 0) {
              let F = (E - C) / x
                , X = T.config.easing
                , B = ap(X, F, f);
              for (let k = 0, {length: P} = o; k < P; k++) {
                  let _ = o[k]
                    , L = vo(u, _, T.config)
                    , W = (vo(u, _, w.config) - L) * B + L;
                  D[_] = W
              }
          }
          return (0,
          ze.merge)(e, {
              position: E,
              current: D
          })
      }
      ,
      mC = (e, t) => {
          let {active: r, origin: n, start: i, immediate: o, renderType: a, verbose: s, actionItem: u, destination: f, destinationKeys: h, pluginDuration: p, instanceDelay: d, customEasingFn: v, skipMotion: b} = e
            , m = u.config.easing
            , {duration: A, delay: E} = u.config;
          p != null && (A = p),
          E = d ?? E,
          a === hC ? A = 0 : (o || b) && (A = E = 0);
          let {now: O} = t.payload;
          if (r && n) {
              let T = O - (i + E);
              if (s) {
                  let F = O - i
                    , X = A + E
                    , B = pn(Math.min(Math.max(0, F / X), 1));
                  e = (0,
                  ze.set)(e, "verboseTimeElapsed", X * B)
              }
              if (T < 0)
                  return e;
              let w = pn(Math.min(Math.max(0, T / A), 1))
                , C = ap(m, w, v)
                , x = {}
                , D = null;
              return h.length && (D = h.reduce( (F, X) => {
                  let B = f[X]
                    , k = parseFloat(n[X]) || 0
                    , _ = (parseFloat(B) - k) * C + k;
                  return F[X] = _,
                  F
              }
              , {})),
              x.current = D,
              x.position = w,
              w === 1 && (x.active = !1,
              x.complete = !0),
              (0,
              ze.merge)(e, x)
          }
          return e
      }
      ,
      sp = (e=Object.freeze({}), t) => {
          switch (t.type) {
          case sC:
              return t.payload.ixInstances || Object.freeze({});
          case uC:
              return Object.freeze({});
          case cC:
              {
                  let {instanceId: r, elementId: n, actionItem: i, eventId: o, eventTarget: a, eventStateKey: s, actionListId: u, groupIndex: f, isCarrier: h, origin: p, destination: d, immediate: v, verbose: b, continuous: m, parameterId: A, actionGroups: E, smoothing: O, restingValue: T, pluginInstance: w, pluginDuration: C, instanceDelay: x, skipMotion: D, skipToValue: F} = t.payload
                    , {actionTypeId: X} = i
                    , B = gC(X)
                    , k = EC(B, X)
                    , P = Object.keys(d).filter(L => d[L] != null && typeof d[L] != "string")
                    , {easing: _} = i.config;
                  return (0,
                  ze.set)(e, r, {
                      id: r,
                      elementId: n,
                      active: !1,
                      position: 0,
                      start: 0,
                      origin: p,
                      destination: d,
                      destinationKeys: P,
                      immediate: v,
                      verbose: b,
                      current: null,
                      actionItem: i,
                      actionTypeId: X,
                      eventId: o,
                      eventTarget: a,
                      eventStateKey: s,
                      actionListId: u,
                      groupIndex: f,
                      renderType: B,
                      isCarrier: h,
                      styleProp: k,
                      continuous: m,
                      parameterId: A,
                      actionGroups: E,
                      smoothing: O,
                      restingValue: T,
                      pluginInstance: w,
                      pluginDuration: C,
                      instanceDelay: x,
                      skipMotion: D,
                      skipToValue: F,
                      customEasingFn: Array.isArray(_) && _.length === 4 ? pC(_) : void 0
                  })
              }
          case lC:
              {
                  let {instanceId: r, time: n} = t.payload;
                  return (0,
                  ze.mergeIn)(e, [r], {
                      active: !0,
                      complete: !1,
                      start: n
                  })
              }
          case fC:
              {
                  let {instanceId: r} = t.payload;
                  if (!e[r])
                      return e;
                  let n = {}
                    , i = Object.keys(e)
                    , {length: o} = i;
                  for (let a = 0; a < o; a++) {
                      let s = i[a];
                      s !== r && (n[s] = e[s])
                  }
                  return n
              }
          case dC:
              {
                  let r = e
                    , n = Object.keys(e)
                    , {length: i} = n;
                  for (let o = 0; o < i; o++) {
                      let a = n[o]
                        , s = e[a]
                        , u = s.continuous ? yC : mC;
                      r = (0,
                      ze.set)(r, a, u(s, t))
                  }
                  return r
              }
          default:
              return e
          }
      }
  }
  );
  var vC, _C, IC, cp, lp = re( () => {
      "use strict";
      ve();
      ({IX2_RAW_DATA_IMPORTED: vC, IX2_SESSION_STOPPED: _C, IX2_PARAMETER_CHANGED: IC} = se),
      cp = (e={}, t) => {
          switch (t.type) {
          case vC:
              return t.payload.ixParameters || {};
          case _C:
              return {};
          case IC:
              {
                  let {key: r, value: n} = t.payload;
                  return e[r] = n,
                  e
              }
          default:
              return e
          }
      }
  }
  );
  var pp = {};
  ye(pp, {
      default: () => AC
  });
  var fp, dp, TC, AC, hp = re( () => {
      "use strict";
      fp = $(ci());
      Ts();
      Hs();
      zs();
      dp = $(ct());
      up();
      lp();
      ({ixElements: TC} = dp.IX2ElementsReducer),
      AC = (0,
      fp.combineReducers)({
          ixData: Is,
          ixRequest: Us,
          ixSession: Ws,
          ixElements: TC,
          ixInstances: sp,
          ixParameters: cp
      })
  }
  );
  var Ep = l( (tX, gp) => {
      var bC = Qe()
        , SC = ue()
        , OC = He()
        , xC = "[object String]";
      function wC(e) {
          return typeof e == "string" || !SC(e) && OC(e) && bC(e) == xC
      }
      gp.exports = wC
  }
  );
  var mp = l( (rX, yp) => {
      var RC = qi()
        , CC = RC("length");
      yp.exports = CC
  }
  );
  var _p = l( (nX, vp) => {
      var LC = "\\ud800-\\udfff"
        , PC = "\\u0300-\\u036f"
        , NC = "\\ufe20-\\ufe2f"
        , MC = "\\u20d0-\\u20ff"
        , DC = PC + NC + MC
        , FC = "\\ufe0e\\ufe0f"
        , qC = "\\u200d"
        , XC = RegExp("[" + qC + LC + DC + FC + "]");
      function GC(e) {
          return XC.test(e)
      }
      vp.exports = GC
  }
  );
  var Rp = l( (iX, wp) => {
      var Tp = "\\ud800-\\udfff"
        , VC = "\\u0300-\\u036f"
        , BC = "\\ufe20-\\ufe2f"
        , UC = "\\u20d0-\\u20ff"
        , HC = VC + BC + UC
        , kC = "\\ufe0e\\ufe0f"
        , WC = "[" + Tp + "]"
        , _o = "[" + HC + "]"
        , Io = "\\ud83c[\\udffb-\\udfff]"
        , zC = "(?:" + _o + "|" + Io + ")"
        , Ap = "[^" + Tp + "]"
        , bp = "(?:\\ud83c[\\udde6-\\uddff]){2}"
        , Sp = "[\\ud800-\\udbff][\\udc00-\\udfff]"
        , KC = "\\u200d"
        , Op = zC + "?"
        , xp = "[" + kC + "]?"
        , jC = "(?:" + KC + "(?:" + [Ap, bp, Sp].join("|") + ")" + xp + Op + ")*"
        , YC = xp + Op + jC
        , $C = "(?:" + [Ap + _o + "?", _o, bp, Sp, WC].join("|") + ")"
        , Ip = RegExp(Io + "(?=" + Io + ")|" + $C + YC, "g");
      function QC(e) {
          for (var t = Ip.lastIndex = 0; Ip.test(e); )
              ++t;
          return t
      }
      wp.exports = QC
  }
  );
  var Lp = l( (oX, Cp) => {
      var ZC = mp()
        , JC = _p()
        , eL = Rp();
      function tL(e) {
          return JC(e) ? eL(e) : ZC(e)
      }
      Cp.exports = tL
  }
  );
  var Np = l( (aX, Pp) => {
      var rL = zr()
        , nL = Kr()
        , iL = it()
        , oL = Ep()
        , aL = Lp()
        , sL = "[object Map]"
        , uL = "[object Set]";
      function cL(e) {
          if (e == null)
              return 0;
          if (iL(e))
              return oL(e) ? aL(e) : e.length;
          var t = nL(e);
          return t == sL || t == uL ? e.size : rL(e).length
      }
      Pp.exports = cL
  }
  );
  var Dp = l( (sX, Mp) => {
      var lL = "Expected a function";
      function fL(e) {
          if (typeof e != "function")
              throw new TypeError(lL);
          return function() {
              var t = arguments;
              switch (t.length) {
              case 0:
                  return !e.call(this);
              case 1:
                  return !e.call(this, t[0]);
              case 2:
                  return !e.call(this, t[0], t[1]);
              case 3:
                  return !e.call(this, t[0], t[1], t[2])
              }
              return !e.apply(this, t)
          }
      }
      Mp.exports = fL
  }
  );
  var To = l( (uX, Fp) => {
      var dL = Ze()
        , pL = function() {
          try {
              var e = dL(Object, "defineProperty");
              return e({}, "", {}),
              e
          } catch {}
      }();
      Fp.exports = pL
  }
  );
  var Ao = l( (cX, Xp) => {
      var qp = To();
      function hL(e, t, r) {
          t == "__proto__" && qp ? qp(e, t, {
              configurable: !0,
              enumerable: !0,
              value: r,
              writable: !0
          }) : e[t] = r
      }
      Xp.exports = hL
  }
  );
  var Vp = l( (lX, Gp) => {
      var gL = Ao()
        , EL = Fr()
        , yL = Object.prototype
        , mL = yL.hasOwnProperty;
      function vL(e, t, r) {
          var n = e[t];
          (!(mL.call(e, t) && EL(n, r)) || r === void 0 && !(t in e)) && gL(e, t, r)
      }
      Gp.exports = vL
  }
  );
  var Hp = l( (fX, Up) => {
      var _L = Vp()
        , IL = ir()
        , TL = Ur()
        , Bp = Ge()
        , AL = St();
      function bL(e, t, r, n) {
          if (!Bp(e))
              return e;
          t = IL(t, e);
          for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
              var u = AL(t[i])
                , f = r;
              if (u === "__proto__" || u === "constructor" || u === "prototype")
                  return e;
              if (i != a) {
                  var h = s[u];
                  f = n ? n(h, u, s) : void 0,
                  f === void 0 && (f = Bp(h) ? h : TL(t[i + 1]) ? [] : {})
              }
              _L(s, u, f),
              s = s[u]
          }
          return e
      }
      Up.exports = bL
  }
  );
  var Wp = l( (dX, kp) => {
      var SL = $r()
        , OL = Hp()
        , xL = ir();
      function wL(e, t, r) {
          for (var n = -1, i = t.length, o = {}; ++n < i; ) {
              var a = t[n]
                , s = SL(e, a);
              r(s, a) && OL(o, xL(a, e), s)
          }
          return o
      }
      kp.exports = wL
  }
  );
  var Kp = l( (pX, zp) => {
      var RL = Vr()
        , CL = $n()
        , LL = Ti()
        , PL = Ii()
        , NL = Object.getOwnPropertySymbols
        , ML = NL ? function(e) {
          for (var t = []; e; )
              RL(t, LL(e)),
              e = CL(e);
          return t
      }
      : PL;
      zp.exports = ML
  }
  );
  var Yp = l( (hX, jp) => {
      function DL(e) {
          var t = [];
          if (e != null)
              for (var r in Object(e))
                  t.push(r);
          return t
      }
      jp.exports = DL
  }
  );
  var Qp = l( (gX, $p) => {
      var FL = Ge()
        , qL = Wr()
        , XL = Yp()
        , GL = Object.prototype
        , VL = GL.hasOwnProperty;
      function BL(e) {
          if (!FL(e))
              return XL(e);
          var t = qL(e)
            , r = [];
          for (var n in e)
              n == "constructor" && (t || !VL.call(e, n)) || r.push(n);
          return r
      }
      $p.exports = BL
  }
  );
  var Jp = l( (EX, Zp) => {
      var UL = bi()
        , HL = Qp()
        , kL = it();
      function WL(e) {
          return kL(e) ? UL(e, !0) : HL(e)
      }
      Zp.exports = WL
  }
  );
  var th = l( (yX, eh) => {
      var zL = _i()
        , KL = Kp()
        , jL = Jp();
      function YL(e) {
          return zL(e, jL, KL)
      }
      eh.exports = YL
  }
  );
  var nh = l( (mX, rh) => {
      var $L = Fi()
        , QL = Je()
        , ZL = Wp()
        , JL = th();
      function eP(e, t) {
          if (e == null)
              return {};
          var r = $L(JL(e), function(n) {
              return [n]
          });
          return t = QL(t),
          ZL(e, r, function(n, i) {
              return t(n, i[0])
          })
      }
      rh.exports = eP
  }
  );
  var oh = l( (vX, ih) => {
      var tP = Je()
        , rP = Dp()
        , nP = nh();
      function iP(e, t) {
          return nP(e, rP(tP(t)))
      }
      ih.exports = iP
  }
  );
  var sh = l( (_X, ah) => {
      var oP = zr()
        , aP = Kr()
        , sP = Zt()
        , uP = ue()
        , cP = it()
        , lP = Br()
        , fP = Wr()
        , dP = kr()
        , pP = "[object Map]"
        , hP = "[object Set]"
        , gP = Object.prototype
        , EP = gP.hasOwnProperty;
      function yP(e) {
          if (e == null)
              return !0;
          if (cP(e) && (uP(e) || typeof e == "string" || typeof e.splice == "function" || lP(e) || dP(e) || sP(e)))
              return !e.length;
          var t = aP(e);
          if (t == pP || t == hP)
              return !e.size;
          if (fP(e))
              return !oP(e).length;
          for (var r in e)
              if (EP.call(e, r))
                  return !1;
          return !0
      }
      ah.exports = yP
  }
  );
  var ch = l( (IX, uh) => {
      var mP = Ao()
        , vP = uo()
        , _P = Je();
      function IP(e, t) {
          var r = {};
          return t = _P(t, 3),
          vP(e, function(n, i, o) {
              mP(r, i, t(n, i, o))
          }),
          r
      }
      uh.exports = IP
  }
  );
  var fh = l( (TX, lh) => {
      function TP(e, t) {
          for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
              ;
          return e
      }
      lh.exports = TP
  }
  );
  var ph = l( (AX, dh) => {
      var AP = Zr();
      function bP(e) {
          return typeof e == "function" ? e : AP
      }
      dh.exports = bP
  }
  );
  var gh = l( (bX, hh) => {
      var SP = fh()
        , OP = co()
        , xP = ph()
        , wP = ue();
      function RP(e, t) {
          var r = wP(e) ? SP : OP;
          return r(e, xP(t))
      }
      hh.exports = RP
  }
  );
  var yh = l( (SX, Eh) => {
      var CP = Re()
        , LP = function() {
          return CP.Date.now()
      };
      Eh.exports = LP
  }
  );
  var _h = l( (OX, vh) => {
      var PP = Ge()
        , bo = yh()
        , mh = Jr()
        , NP = "Expected a function"
        , MP = Math.max
        , DP = Math.min;
      function FP(e, t, r) {
          var n, i, o, a, s, u, f = 0, h = !1, p = !1, d = !0;
          if (typeof e != "function")
              throw new TypeError(NP);
          t = mh(t) || 0,
          PP(r) && (h = !!r.leading,
          p = "maxWait"in r,
          o = p ? MP(mh(r.maxWait) || 0, t) : o,
          d = "trailing"in r ? !!r.trailing : d);
          function v(x) {
              var D = n
                , F = i;
              return n = i = void 0,
              f = x,
              a = e.apply(F, D),
              a
          }
          function b(x) {
              return f = x,
              s = setTimeout(E, t),
              h ? v(x) : a
          }
          function m(x) {
              var D = x - u
                , F = x - f
                , X = t - D;
              return p ? DP(X, o - F) : X
          }
          function A(x) {
              var D = x - u
                , F = x - f;
              return u === void 0 || D >= t || D < 0 || p && F >= o
          }
          function E() {
              var x = bo();
              if (A(x))
                  return O(x);
              s = setTimeout(E, m(x))
          }
          function O(x) {
              return s = void 0,
              d && n ? v(x) : (n = i = void 0,
              a)
          }
          function T() {
              s !== void 0 && clearTimeout(s),
              f = 0,
              n = u = i = s = void 0
          }
          function w() {
              return s === void 0 ? a : O(bo())
          }
          function C() {
              var x = bo()
                , D = A(x);
              if (n = arguments,
              i = this,
              u = x,
              D) {
                  if (s === void 0)
                      return b(u);
                  if (p)
                      return clearTimeout(s),
                      s = setTimeout(E, t),
                      v(u)
              }
              return s === void 0 && (s = setTimeout(E, t)),
              a
          }
          return C.cancel = T,
          C.flush = w,
          C
      }
      vh.exports = FP
  }
  );
  var Th = l( (xX, Ih) => {
      var qP = _h()
        , XP = Ge()
        , GP = "Expected a function";
      function VP(e, t, r) {
          var n = !0
            , i = !0;
          if (typeof e != "function")
              throw new TypeError(GP);
          return XP(r) && (n = "leading"in r ? !!r.leading : n,
          i = "trailing"in r ? !!r.trailing : i),
          qP(e, t, {
              leading: n,
              maxWait: t,
              trailing: i
          })
      }
      Ih.exports = VP
  }
  );
  var bh = {};
  ye(bh, {
      actionListPlaybackChanged: () => qt,
      animationFrameChanged: () => En,
      clearRequested: () => fN,
      elementStateChanged: () => Po,
      eventListenerAdded: () => gn,
      eventStateChanged: () => Ro,
      instanceAdded: () => Co,
      instanceRemoved: () => Lo,
      instanceStarted: () => yn,
      mediaQueriesDefined: () => Mo,
      parameterChanged: () => Ft,
      playbackRequested: () => cN,
      previewRequested: () => uN,
      rawDataImported: () => So,
      sessionInitialized: () => Oo,
      sessionStarted: () => xo,
      sessionStopped: () => wo,
      stopRequested: () => lN,
      testFrameRendered: () => dN,
      viewportWidthChanged: () => No
  });
  var Ah, BP, UP, HP, kP, WP, zP, KP, jP, YP, $P, QP, ZP, JP, eN, tN, rN, nN, iN, oN, aN, sN, So, Oo, xo, wo, uN, cN, lN, fN, gn, dN, Ro, En, Ft, Co, yn, Lo, Po, qt, No, Mo, mn = re( () => {
      "use strict";
      ve();
      Ah = $(ct()),
      {IX2_RAW_DATA_IMPORTED: BP, IX2_SESSION_INITIALIZED: UP, IX2_SESSION_STARTED: HP, IX2_SESSION_STOPPED: kP, IX2_PREVIEW_REQUESTED: WP, IX2_PLAYBACK_REQUESTED: zP, IX2_STOP_REQUESTED: KP, IX2_CLEAR_REQUESTED: jP, IX2_EVENT_LISTENER_ADDED: YP, IX2_TEST_FRAME_RENDERED: $P, IX2_EVENT_STATE_CHANGED: QP, IX2_ANIMATION_FRAME_CHANGED: ZP, IX2_PARAMETER_CHANGED: JP, IX2_INSTANCE_ADDED: eN, IX2_INSTANCE_STARTED: tN, IX2_INSTANCE_REMOVED: rN, IX2_ELEMENT_STATE_CHANGED: nN, IX2_ACTION_LIST_PLAYBACK_CHANGED: iN, IX2_VIEWPORT_WIDTH_CHANGED: oN, IX2_MEDIA_QUERIES_DEFINED: aN} = se,
      {reifyState: sN} = Ah.IX2VanillaUtils,
      So = e => ({
          type: BP,
          payload: {
              ...sN(e)
          }
      }),
      Oo = ({hasBoundaryNodes: e, reducedMotion: t}) => ({
          type: UP,
          payload: {
              hasBoundaryNodes: e,
              reducedMotion: t
          }
      }),
      xo = () => ({
          type: HP
      }),
      wo = () => ({
          type: kP
      }),
      uN = ({rawData: e, defer: t}) => ({
          type: WP,
          payload: {
              defer: t,
              rawData: e
          }
      }),
      cN = ({actionTypeId: e=me.GENERAL_START_ACTION, actionListId: t, actionItemId: r, eventId: n, allowEvents: i, immediate: o, testManual: a, verbose: s, rawData: u}) => ({
          type: zP,
          payload: {
              actionTypeId: e,
              actionListId: t,
              actionItemId: r,
              testManual: a,
              eventId: n,
              allowEvents: i,
              immediate: o,
              verbose: s,
              rawData: u
          }
      }),
      lN = e => ({
          type: KP,
          payload: {
              actionListId: e
          }
      }),
      fN = () => ({
          type: jP
      }),
      gn = (e, t) => ({
          type: YP,
          payload: {
              target: e,
              listenerParams: t
          }
      }),
      dN = (e=1) => ({
          type: $P,
          payload: {
              step: e
          }
      }),
      Ro = (e, t) => ({
          type: QP,
          payload: {
              stateKey: e,
              newState: t
          }
      }),
      En = (e, t) => ({
          type: ZP,
          payload: {
              now: e,
              parameters: t
          }
      }),
      Ft = (e, t) => ({
          type: JP,
          payload: {
              key: e,
              value: t
          }
      }),
      Co = e => ({
          type: eN,
          payload: {
              ...e
          }
      }),
      yn = (e, t) => ({
          type: tN,
          payload: {
              instanceId: e,
              time: t
          }
      }),
      Lo = e => ({
          type: rN,
          payload: {
              instanceId: e
          }
      }),
      Po = (e, t, r, n) => ({
          type: nN,
          payload: {
              elementId: e,
              actionTypeId: t,
              current: r,
              actionItem: n
          }
      }),
      qt = ({actionListId: e, isPlaying: t}) => ({
          type: iN,
          payload: {
              actionListId: e,
              isPlaying: t
          }
      }),
      No = ({width: e, mediaQueries: t}) => ({
          type: oN,
          payload: {
              width: e,
              mediaQueries: t
          }
      }),
      Mo = () => ({
          type: aN
      })
  }
  );
  var he = {};
  ye(he, {
      elementContains: () => qo,
      getChildElements: () => TN,
      getClosestElement: () => gr,
      getProperty: () => yN,
      getQuerySelector: () => Fo,
      getRefType: () => Xo,
      getSiblingElements: () => AN,
      getStyle: () => EN,
      getValidDocument: () => vN,
      isSiblingNode: () => IN,
      matchSelector: () => mN,
      queryDocument: () => _N,
      setStyle: () => gN
  });
  function gN(e, t, r) {
      e.style[t] = r
  }
  function EN(e, t) {
      return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style[t]
  }
  function yN(e, t) {
      return e[t]
  }
  function mN(e) {
      return t => t[Do](e)
  }
  function Fo({id: e, selector: t}) {
      if (e) {
          let r = e;
          if (e.indexOf(Sh) !== -1) {
              let n = e.split(Sh)
                , i = n[0];
              if (r = n[1],
              i !== document.documentElement.getAttribute(xh))
                  return null
          }
          return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
      }
      return t
  }
  function vN(e) {
      return e == null || e === document.documentElement.getAttribute(xh) ? document : null
  }
  function _N(e, t) {
      return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
  }
  function qo(e, t) {
      return e.contains(t)
  }
  function IN(e, t) {
      return e !== t && e.parentNode === t.parentNode
  }
  function TN(e) {
      let t = [];
      for (let r = 0, {length: n} = e || []; r < n; r++) {
          let {children: i} = e[r]
            , {length: o} = i;
          if (o)
              for (let a = 0; a < o; a++)
                  t.push(i[a])
      }
      return t
  }
  function AN(e=[]) {
      let t = []
        , r = [];
      for (let n = 0, {length: i} = e; n < i; n++) {
          let {parentNode: o} = e[n];
          if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
              continue;
          r.push(o);
          let a = o.firstElementChild;
          for (; a != null; )
              e.indexOf(a) === -1 && t.push(a),
              a = a.nextElementSibling
      }
      return t
  }
  function Xo(e) {
      return e != null && typeof e == "object" ? e instanceof Element ? pN : hN : null
  }
  var Oh, Do, Sh, pN, hN, xh, gr, wh = re( () => {
      "use strict";
      Oh = $(ct());
      ve();
      ({ELEMENT_MATCHES: Do} = Oh.IX2BrowserSupport),
      {IX2_ID_DELIMITER: Sh, HTML_ELEMENT: pN, PLAIN_OBJECT: hN, WF_PAGE: xh} = ce;
      gr = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
          if (!document.documentElement.contains(e))
              return null;
          let r = e;
          do {
              if (r[Do] && r[Do](t))
                  return r;
              r = r.parentNode
          } while (r != null);
          return null
      }
  }
  );
  var Go = l( (CX, Ch) => {
      var bN = Ge()
        , Rh = Object.create
        , SN = function() {
          function e() {}
          return function(t) {
              if (!bN(t))
                  return {};
              if (Rh)
                  return Rh(t);
              e.prototype = t;
              var r = new e;
              return e.prototype = void 0,
              r
          }
      }();
      Ch.exports = SN
  }
  );
  var vn = l( (LX, Lh) => {
      function ON() {}
      Lh.exports = ON
  }
  );
  var In = l( (PX, Ph) => {
      var xN = Go()
        , wN = vn();
      function _n(e, t) {
          this.__wrapped__ = e,
          this.__actions__ = [],
          this.__chain__ = !!t,
          this.__index__ = 0,
          this.__values__ = void 0
      }
      _n.prototype = xN(wN.prototype);
      _n.prototype.constructor = _n;
      Ph.exports = _n
  }
  );
  var Fh = l( (NX, Dh) => {
      var Nh = ht()
        , RN = Zt()
        , CN = ue()
        , Mh = Nh ? Nh.isConcatSpreadable : void 0;
      function LN(e) {
          return CN(e) || RN(e) || !!(Mh && e && e[Mh])
      }
      Dh.exports = LN
  }
  );
  var Gh = l( (MX, Xh) => {
      var PN = Vr()
        , NN = Fh();
      function qh(e, t, r, n, i) {
          var o = -1
            , a = e.length;
          for (r || (r = NN),
          i || (i = []); ++o < a; ) {
              var s = e[o];
              t > 0 && r(s) ? t > 1 ? qh(s, t - 1, r, n, i) : PN(i, s) : n || (i[i.length] = s)
          }
          return i
      }
      Xh.exports = qh
  }
  );
  var Bh = l( (DX, Vh) => {
      var MN = Gh();
      function DN(e) {
          var t = e == null ? 0 : e.length;
          return t ? MN(e, 1) : []
      }
      Vh.exports = DN
  }
  );
  var Hh = l( (FX, Uh) => {
      function FN(e, t, r) {
          switch (r.length) {
          case 0:
              return e.call(t);
          case 1:
              return e.call(t, r[0]);
          case 2:
              return e.call(t, r[0], r[1]);
          case 3:
              return e.call(t, r[0], r[1], r[2])
          }
          return e.apply(t, r)
      }
      Uh.exports = FN
  }
  );
  var zh = l( (qX, Wh) => {
      var qN = Hh()
        , kh = Math.max;
      function XN(e, t, r) {
          return t = kh(t === void 0 ? e.length - 1 : t, 0),
          function() {
              for (var n = arguments, i = -1, o = kh(n.length - t, 0), a = Array(o); ++i < o; )
                  a[i] = n[t + i];
              i = -1;
              for (var s = Array(t + 1); ++i < t; )
                  s[i] = n[i];
              return s[t] = r(a),
              qN(e, this, s)
          }
      }
      Wh.exports = XN
  }
  );
  var jh = l( (XX, Kh) => {
      function GN(e) {
          return function() {
              return e
          }
      }
      Kh.exports = GN
  }
  );
  var Qh = l( (GX, $h) => {
      var VN = jh()
        , Yh = To()
        , BN = Zr()
        , UN = Yh ? function(e, t) {
          return Yh(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: VN(t),
              writable: !0
          })
      }
      : BN;
      $h.exports = UN
  }
  );
  var Jh = l( (VX, Zh) => {
      var HN = 800
        , kN = 16
        , WN = Date.now;
      function zN(e) {
          var t = 0
            , r = 0;
          return function() {
              var n = WN()
                , i = kN - (n - r);
              if (r = n,
              i > 0) {
                  if (++t >= HN)
                      return arguments[0]
              } else
                  t = 0;
              return e.apply(void 0, arguments)
          }
      }
      Zh.exports = zN
  }
  );
  var tg = l( (BX, eg) => {
      var KN = Qh()
        , jN = Jh()
        , YN = jN(KN);
      eg.exports = YN
  }
  );
  var ng = l( (UX, rg) => {
      var $N = Bh()
        , QN = zh()
        , ZN = tg();
      function JN(e) {
          return ZN(QN(e, void 0, $N), e + "")
      }
      rg.exports = JN
  }
  );
  var ag = l( (HX, og) => {
      var ig = Si()
        , eM = ig && new ig;
      og.exports = eM
  }
  );
  var ug = l( (kX, sg) => {
      function tM() {}
      sg.exports = tM
  }
  );
  var Vo = l( (WX, lg) => {
      var cg = ag()
        , rM = ug()
        , nM = cg ? function(e) {
          return cg.get(e)
      }
      : rM;
      lg.exports = nM
  }
  );
  var dg = l( (zX, fg) => {
      var iM = {};
      fg.exports = iM
  }
  );
  var Bo = l( (KX, hg) => {
      var pg = dg()
        , oM = Object.prototype
        , aM = oM.hasOwnProperty;
      function sM(e) {
          for (var t = e.name + "", r = pg[t], n = aM.call(pg, t) ? r.length : 0; n--; ) {
              var i = r[n]
                , o = i.func;
              if (o == null || o == e)
                  return i.name
          }
          return t
      }
      hg.exports = sM
  }
  );
  var An = l( (jX, gg) => {
      var uM = Go()
        , cM = vn()
        , lM = 4294967295;
      function Tn(e) {
          this.__wrapped__ = e,
          this.__actions__ = [],
          this.__dir__ = 1,
          this.__filtered__ = !1,
          this.__iteratees__ = [],
          this.__takeCount__ = lM,
          this.__views__ = []
      }
      Tn.prototype = uM(cM.prototype);
      Tn.prototype.constructor = Tn;
      gg.exports = Tn
  }
  );
  var yg = l( (YX, Eg) => {
      function fM(e, t) {
          var r = -1
            , n = e.length;
          for (t || (t = Array(n)); ++r < n; )
              t[r] = e[r];
          return t
      }
      Eg.exports = fM
  }
  );
  var vg = l( ($X, mg) => {
      var dM = An()
        , pM = In()
        , hM = yg();
      function gM(e) {
          if (e instanceof dM)
              return e.clone();
          var t = new pM(e.__wrapped__,e.__chain__);
          return t.__actions__ = hM(e.__actions__),
          t.__index__ = e.__index__,
          t.__values__ = e.__values__,
          t
      }
      mg.exports = gM
  }
  );
  var Tg = l( (QX, Ig) => {
      var EM = An()
        , _g = In()
        , yM = vn()
        , mM = ue()
        , vM = He()
        , _M = vg()
        , IM = Object.prototype
        , TM = IM.hasOwnProperty;
      function bn(e) {
          if (vM(e) && !mM(e) && !(e instanceof EM)) {
              if (e instanceof _g)
                  return e;
              if (TM.call(e, "__wrapped__"))
                  return _M(e)
          }
          return new _g(e)
      }
      bn.prototype = yM.prototype;
      bn.prototype.constructor = bn;
      Ig.exports = bn
  }
  );
  var bg = l( (ZX, Ag) => {
      var AM = An()
        , bM = Vo()
        , SM = Bo()
        , OM = Tg();
      function xM(e) {
          var t = SM(e)
            , r = OM[t];
          if (typeof r != "function" || !(t in AM.prototype))
              return !1;
          if (e === r)
              return !0;
          var n = bM(r);
          return !!n && e === n[0]
      }
      Ag.exports = xM
  }
  );
  var wg = l( (JX, xg) => {
      var Sg = In()
        , wM = ng()
        , RM = Vo()
        , Uo = Bo()
        , CM = ue()
        , Og = bg()
        , LM = "Expected a function"
        , PM = 8
        , NM = 32
        , MM = 128
        , DM = 256;
      function FM(e) {
          return wM(function(t) {
              var r = t.length
                , n = r
                , i = Sg.prototype.thru;
              for (e && t.reverse(); n--; ) {
                  var o = t[n];
                  if (typeof o != "function")
                      throw new TypeError(LM);
                  if (i && !a && Uo(o) == "wrapper")
                      var a = new Sg([],!0)
              }
              for (n = a ? n : r; ++n < r; ) {
                  o = t[n];
                  var s = Uo(o)
                    , u = s == "wrapper" ? RM(o) : void 0;
                  u && Og(u[0]) && u[1] == (MM | PM | NM | DM) && !u[4].length && u[9] == 1 ? a = a[Uo(u[0])].apply(a, u[3]) : a = o.length == 1 && Og(o) ? a[s]() : a.thru(o)
              }
              return function() {
                  var f = arguments
                    , h = f[0];
                  if (a && f.length == 1 && CM(h))
                      return a.plant(h).value();
                  for (var p = 0, d = r ? t[p].apply(this, f) : h; ++p < r; )
                      d = t[p].call(this, d);
                  return d
              }
          })
      }
      xg.exports = FM
  }
  );
  var Cg = l( (eG, Rg) => {
      var qM = wg()
        , XM = qM();
      Rg.exports = XM
  }
  );
  var Pg = l( (tG, Lg) => {
      function GM(e, t, r) {
          return e === e && (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
          e
      }
      Lg.exports = GM
  }
  );
  var Mg = l( (rG, Ng) => {
      var VM = Pg()
        , Ho = Jr();
      function BM(e, t, r) {
          return r === void 0 && (r = t,
          t = void 0),
          r !== void 0 && (r = Ho(r),
          r = r === r ? r : 0),
          t !== void 0 && (t = Ho(t),
          t = t === t ? t : 0),
          VM(Ho(e), t, r)
      }
      Ng.exports = BM
  }
  );
  var Hg, kg, Wg, zg, UM, HM, kM, WM, zM, KM, jM, YM, $M, QM, ZM, JM, eD, tD, rD, Kg, jg, nD, iD, oD, Yg, aD, sD, $g, uD, ko, Qg, Dg, Fg, Zg, yr, cD, Ue, Jg, lD, Ie, Pe, mr, eE, Wo, qg, zo, fD, Er, dD, pD, hD, tE, Xg, gD, Gg, ED, yD, mD, Vg, Sn, On, Bg, Ug, rE, nE = re( () => {
      "use strict";
      Hg = $(Cg()),
      kg = $(Qr()),
      Wg = $(Mg());
      ve();
      Ko();
      mn();
      zg = $(ct()),
      {MOUSE_CLICK: UM, MOUSE_SECOND_CLICK: HM, MOUSE_DOWN: kM, MOUSE_UP: WM, MOUSE_OVER: zM, MOUSE_OUT: KM, DROPDOWN_CLOSE: jM, DROPDOWN_OPEN: YM, SLIDER_ACTIVE: $M, SLIDER_INACTIVE: QM, TAB_ACTIVE: ZM, TAB_INACTIVE: JM, NAVBAR_CLOSE: eD, NAVBAR_OPEN: tD, MOUSE_MOVE: rD, PAGE_SCROLL_DOWN: Kg, SCROLL_INTO_VIEW: jg, SCROLL_OUT_OF_VIEW: nD, PAGE_SCROLL_UP: iD, SCROLLING_IN_VIEW: oD, PAGE_FINISH: Yg, ECOMMERCE_CART_CLOSE: aD, ECOMMERCE_CART_OPEN: sD, PAGE_START: $g, PAGE_SCROLL: uD} = Ce,
      ko = "COMPONENT_ACTIVE",
      Qg = "COMPONENT_INACTIVE",
      {COLON_DELIMITER: Dg} = ce,
      {getNamespacedParameterId: Fg} = zg.IX2VanillaUtils,
      Zg = e => t => typeof t == "object" && e(t) ? !0 : t,
      yr = Zg( ({element: e, nativeEvent: t}) => e === t.target),
      cD = Zg( ({element: e, nativeEvent: t}) => e.contains(t.target)),
      Ue = (0,
      Hg.default)([yr, cD]),
      Jg = (e, t) => {
          if (t) {
              let {ixData: r} = e.getState()
                , {events: n} = r
                , i = n[t];
              if (i && !fD[i.eventTypeId])
                  return i
          }
          return null
      }
      ,
      lD = ({store: e, event: t}) => {
          let {action: r} = t
            , {autoStopEventId: n} = r.config;
          return !!Jg(e, n)
      }
      ,
      Ie = ({store: e, event: t, element: r, eventStateKey: n}, i) => {
          let {action: o, id: a} = t
            , {actionListId: s, autoStopEventId: u} = o.config
            , f = Jg(e, u);
          return f && Xt({
              store: e,
              eventId: u,
              eventTarget: r,
              eventStateKey: u + Dg + n.split(Dg)[1],
              actionListId: (0,
              kg.default)(f, "action.config.actionListId")
          }),
          Xt({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s
          }),
          vr({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s
          }),
          i
      }
      ,
      Pe = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n,
      mr = {
          handler: Pe(Ue, Ie)
      },
      eE = {
          ...mr,
          types: [ko, Qg].join(" ")
      },
      Wo = [{
          target: window,
          types: "resize orientationchange",
          throttle: !0
      }, {
          target: document,
          types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
          throttle: !0
      }],
      qg = "mouseover mouseout",
      zo = {
          types: Wo
      },
      fD = {
          PAGE_START: $g,
          PAGE_FINISH: Yg
      },
      Er = ( () => {
          let e = window.pageXOffset !== void 0
            , r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
          return () => ({
              scrollLeft: e ? window.pageXOffset : r.scrollLeft,
              scrollTop: e ? window.pageYOffset : r.scrollTop,
              stiffScrollTop: (0,
              Wg.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
              scrollWidth: r.scrollWidth,
              scrollHeight: r.scrollHeight,
              clientWidth: r.clientWidth,
              clientHeight: r.clientHeight,
              innerWidth: window.innerWidth,
              innerHeight: window.innerHeight
          })
      }
      )(),
      dD = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top),
      pD = ({element: e, nativeEvent: t}) => {
          let {type: r, target: n, relatedTarget: i} = t
            , o = e.contains(n);
          if (r === "mouseover" && o)
              return !0;
          let a = e.contains(i);
          return !!(r === "mouseout" && o && a)
      }
      ,
      hD = e => {
          let {element: t, event: {config: r}} = e
            , {clientWidth: n, clientHeight: i} = Er()
            , o = r.scrollOffsetValue
            , u = r.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
          return dD(t.getBoundingClientRect(), {
              left: 0,
              top: u,
              right: n,
              bottom: i - u
          })
      }
      ,
      tE = e => (t, r) => {
          let {type: n} = t.nativeEvent
            , i = [ko, Qg].indexOf(n) !== -1 ? n === ko : r.isActive
            , o = {
              ...r,
              isActive: i
          };
          return (!r || o.isActive !== r.isActive) && e(t, o) || o
      }
      ,
      Xg = e => (t, r) => {
          let n = {
              elementHovered: pD(t)
          };
          return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
      }
      ,
      gD = e => (t, r) => {
          let n = {
              ...r,
              elementVisible: hD(t)
          };
          return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
      }
      ,
      Gg = e => (t, r={}) => {
          let {stiffScrollTop: n, scrollHeight: i, innerHeight: o} = Er()
            , {event: {config: a, eventTypeId: s}} = t
            , {scrollOffsetValue: u, scrollOffsetUnit: f} = a
            , h = f === "PX"
            , p = i - o
            , d = Number((n / p).toFixed(2));
          if (r && r.percentTop === d)
              return r;
          let v = (h ? u : o * (u || 0) / 100) / p, b, m, A = 0;
          r && (b = d > r.percentTop,
          m = r.scrollingDown !== b,
          A = m ? d : r.anchorTop);
          let E = s === Kg ? d >= A + v : d <= A - v
            , O = {
              ...r,
              percentTop: d,
              inBounds: E,
              anchorTop: A,
              scrollingDown: b
          };
          return r && E && (m || O.inBounds !== r.inBounds) && e(t, O) || O
      }
      ,
      ED = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom,
      yD = e => (t, r) => {
          let n = {
              finished: document.readyState === "complete"
          };
          return n.finished && !(r && r.finshed) && e(t),
          n
      }
      ,
      mD = e => (t, r) => {
          let n = {
              started: !0
          };
          return r || e(t),
          n
      }
      ,
      Vg = e => (t, r={
          clickCount: 0
      }) => {
          let n = {
              clickCount: r.clickCount % 2 + 1
          };
          return n.clickCount !== r.clickCount && e(t, n) || n
      }
      ,
      Sn = (e=!0) => ({
          ...eE,
          handler: Pe(e ? Ue : yr, tE( (t, r) => r.isActive ? mr.handler(t, r) : r))
      }),
      On = (e=!0) => ({
          ...eE,
          handler: Pe(e ? Ue : yr, tE( (t, r) => r.isActive ? r : mr.handler(t, r)))
      }),
      Bg = {
          ...zo,
          handler: gD( (e, t) => {
              let {elementVisible: r} = t
                , {event: n, store: i} = e
                , {ixData: o} = i.getState()
                , {events: a} = o;
              return !a[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === jg === r ? (Ie(e),
              {
                  ...t,
                  triggered: !0
              }) : t
          }
          )
      },
      Ug = .05,
      rE = {
          [$M]: Sn(),
          [QM]: On(),
          [YM]: Sn(),
          [jM]: On(),
          [tD]: Sn(!1),
          [eD]: On(!1),
          [ZM]: Sn(),
          [JM]: On(),
          [sD]: {
              types: "ecommerce-cart-open",
              handler: Pe(Ue, Ie)
          },
          [aD]: {
              types: "ecommerce-cart-close",
              handler: Pe(Ue, Ie)
          },
          [UM]: {
              types: "click",
              handler: Pe(Ue, Vg( (e, {clickCount: t}) => {
                  lD(e) ? t === 1 && Ie(e) : Ie(e)
              }
              ))
          },
          [HM]: {
              types: "click",
              handler: Pe(Ue, Vg( (e, {clickCount: t}) => {
                  t === 2 && Ie(e)
              }
              ))
          },
          [kM]: {
              ...mr,
              types: "mousedown"
          },
          [WM]: {
              ...mr,
              types: "mouseup"
          },
          [zM]: {
              types: qg,
              handler: Pe(Ue, Xg( (e, t) => {
                  t.elementHovered && Ie(e)
              }
              ))
          },
          [KM]: {
              types: qg,
              handler: Pe(Ue, Xg( (e, t) => {
                  t.elementHovered || Ie(e)
              }
              ))
          },
          [rD]: {
              types: "mousemove mouseout scroll",
              handler: ({store: e, element: t, eventConfig: r, nativeEvent: n, eventStateKey: i}, o={
                  clientX: 0,
                  clientY: 0,
                  pageX: 0,
                  pageY: 0
              }) => {
                  let {basedOn: a, selectedAxis: s, continuousParameterGroupId: u, reverse: f, restingState: h=0} = r
                    , {clientX: p=o.clientX, clientY: d=o.clientY, pageX: v=o.pageX, pageY: b=o.pageY} = n
                    , m = s === "X_AXIS"
                    , A = n.type === "mouseout"
                    , E = h / 100
                    , O = u
                    , T = !1;
                  switch (a) {
                  case Xe.VIEWPORT:
                      {
                          E = m ? Math.min(p, window.innerWidth) / window.innerWidth : Math.min(d, window.innerHeight) / window.innerHeight;
                          break
                      }
                  case Xe.PAGE:
                      {
                          let {scrollLeft: w, scrollTop: C, scrollWidth: x, scrollHeight: D} = Er();
                          E = m ? Math.min(w + v, x) / x : Math.min(C + b, D) / D;
                          break
                      }
                  case Xe.ELEMENT:
                  default:
                      {
                          O = Fg(i, u);
                          let w = n.type.indexOf("mouse") === 0;
                          if (w && Ue({
                              element: t,
                              nativeEvent: n
                          }) !== !0)
                              break;
                          let C = t.getBoundingClientRect()
                            , {left: x, top: D, width: F, height: X} = C;
                          if (!w && !ED({
                              left: p,
                              top: d
                          }, C))
                              break;
                          T = !0,
                          E = m ? (p - x) / F : (d - D) / X;
                          break
                      }
                  }
                  return A && (E > 1 - Ug || E < Ug) && (E = Math.round(E)),
                  (a !== Xe.ELEMENT || T || T !== o.elementHovered) && (E = f ? 1 - E : E,
                  e.dispatch(Ft(O, E))),
                  {
                      elementHovered: T,
                      clientX: p,
                      clientY: d,
                      pageX: v,
                      pageY: b
                  }
              }
          },
          [uD]: {
              types: Wo,
              handler: ({store: e, eventConfig: t}) => {
                  let {continuousParameterGroupId: r, reverse: n} = t
                    , {scrollTop: i, scrollHeight: o, clientHeight: a} = Er()
                    , s = i / (o - a);
                  s = n ? 1 - s : s,
                  e.dispatch(Ft(r, s))
              }
          },
          [oD]: {
              types: Wo,
              handler: ({element: e, store: t, eventConfig: r, eventStateKey: n}, i={
                  scrollPercent: 0
              }) => {
                  let {scrollLeft: o, scrollTop: a, scrollWidth: s, scrollHeight: u, clientHeight: f} = Er()
                    , {basedOn: h, selectedAxis: p, continuousParameterGroupId: d, startsEntering: v, startsExiting: b, addEndOffset: m, addStartOffset: A, addOffsetValue: E=0, endOffsetValue: O=0} = r
                    , T = p === "X_AXIS";
                  if (h === Xe.VIEWPORT) {
                      let w = T ? o / s : a / u;
                      return w !== i.scrollPercent && t.dispatch(Ft(d, w)),
                      {
                          scrollPercent: w
                      }
                  } else {
                      let w = Fg(n, d)
                        , C = e.getBoundingClientRect()
                        , x = (A ? E : 0) / 100
                        , D = (m ? O : 0) / 100;
                      x = v ? x : 1 - x,
                      D = b ? D : 1 - D;
                      let F = C.top + Math.min(C.height * x, f)
                        , B = C.top + C.height * D - F
                        , k = Math.min(f + B, u)
                        , _ = Math.min(Math.max(0, f - F), k) / k;
                      return _ !== i.scrollPercent && t.dispatch(Ft(w, _)),
                      {
                          scrollPercent: _
                      }
                  }
              }
          },
          [jg]: Bg,
          [nD]: Bg,
          [Kg]: {
              ...zo,
              handler: Gg( (e, t) => {
                  t.scrollingDown && Ie(e)
              }
              )
          },
          [iD]: {
              ...zo,
              handler: Gg( (e, t) => {
                  t.scrollingDown || Ie(e)
              }
              )
          },
          [Yg]: {
              types: "readystatechange IX2_PAGE_UPDATE",
              handler: Pe(yr, yD(Ie))
          },
          [$g]: {
              types: "readystatechange IX2_PAGE_UPDATE",
              handler: Pe(yr, mD(Ie))
          }
      }
  }
  );
  var _E = {};
  ye(_E, {
      observeRequests: () => XD,
      startActionGroup: () => vr,
      startEngine: () => Pn,
      stopActionGroup: () => Xt,
      stopAllActionGroups: () => yE,
      stopEngine: () => Nn
  });
  function XD(e) {
      lt({
          store: e,
          select: ({ixRequest: t}) => t.preview,
          onChange: BD
      }),
      lt({
          store: e,
          select: ({ixRequest: t}) => t.playback,
          onChange: UD
      }),
      lt({
          store: e,
          select: ({ixRequest: t}) => t.stop,
          onChange: HD
      }),
      lt({
          store: e,
          select: ({ixRequest: t}) => t.clear,
          onChange: kD
      })
  }
  function GD(e) {
      lt({
          store: e,
          select: ({ixSession: t}) => t.mediaQueryKey,
          onChange: () => {
              Nn(e),
              pE({
                  store: e,
                  elementApi: he
              }),
              Pn({
                  store: e,
                  allowEvents: !0
              }),
              hE()
          }
      })
  }
  function VD(e, t) {
      let r = lt({
          store: e,
          select: ({ixSession: n}) => n.tick,
          onChange: n => {
              t(n),
              r()
          }
      })
  }
  function BD({rawData: e, defer: t}, r) {
      let n = () => {
          Pn({
              store: r,
              rawData: e,
              allowEvents: !0
          }),
          hE()
      }
      ;
      t ? setTimeout(n, 0) : n()
  }
  function hE() {
      document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
  }
  function UD(e, t) {
      let {actionTypeId: r, actionListId: n, actionItemId: i, eventId: o, allowEvents: a, immediate: s, testManual: u, verbose: f=!0} = e
        , {rawData: h} = e;
      if (n && i && h && s) {
          let p = h.actionLists[n];
          p && (h = xD({
              actionList: p,
              actionItemId: i,
              rawData: h
          }))
      }
      if (Pn({
          store: t,
          rawData: h,
          allowEvents: a,
          testManual: u
      }),
      n && r === me.GENERAL_START_ACTION || jo(r)) {
          Xt({
              store: t,
              actionListId: n
          }),
          EE({
              store: t,
              actionListId: n,
              eventId: o
          });
          let p = vr({
              store: t,
              eventId: o,
              actionListId: n,
              immediate: s,
              verbose: f
          });
          f && p && t.dispatch(qt({
              actionListId: n,
              isPlaying: !s
          }))
      }
  }
  function HD({actionListId: e}, t) {
      e ? Xt({
          store: t,
          actionListId: e
      }) : yE({
          store: t
      }),
      Nn(t)
  }
  function kD(e, t) {
      Nn(t),
      pE({
          store: t,
          elementApi: he
      })
  }
  function Pn({store: e, rawData: t, allowEvents: r, testManual: n}) {
      let {ixSession: i} = e.getState();
      t && e.dispatch(So(t)),
      i.active || (e.dispatch(Oo({
          hasBoundaryNodes: !!document.querySelector(wn),
          reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
      })),
      r && ($D(e),
      WD(),
      e.getState().ixSession.hasDefinedMediaQueries && GD(e)),
      e.dispatch(xo()),
      zD(e, n))
  }
  function WD() {
      let {documentElement: e} = document;
      e.className.indexOf(iE) === -1 && (e.className += ` ${iE}`)
  }
  function zD(e, t) {
      let r = n => {
          let {ixSession: i, ixParameters: o} = e.getState();
          i.active && (e.dispatch(En(n, o)),
          t ? VD(e, r) : requestAnimationFrame(r))
      }
      ;
      r(window.performance.now())
  }
  function Nn(e) {
      let {ixSession: t} = e.getState();
      if (t.active) {
          let {eventListeners: r} = t;
          r.forEach(KD),
          LD(),
          e.dispatch(wo())
      }
  }
  function KD({target: e, listenerParams: t}) {
      e.removeEventListener.apply(e, t)
  }
  function jD({store: e, eventStateKey: t, eventTarget: r, eventId: n, eventConfig: i, actionListId: o, parameterGroup: a, smoothing: s, restingValue: u}) {
      let {ixData: f, ixSession: h} = e.getState()
        , {events: p} = f
        , d = p[n]
        , {eventTypeId: v} = d
        , b = {}
        , m = {}
        , A = []
        , {continuousActionGroups: E} = a
        , {id: O} = a;
      wD(v, i) && (O = RD(t, O));
      let T = h.hasBoundaryNodes && r ? gr(r, wn) : null;
      E.forEach(w => {
          let {keyframe: C, actionItems: x} = w;
          x.forEach(D => {
              let {actionTypeId: F} = D
                , {target: X} = D.config;
              if (!X)
                  return;
              let B = X.boundaryMode ? T : null
                , k = PD(X) + Yo + F;
              if (m[k] = YD(m[k], C, D),
              !b[k]) {
                  b[k] = !0;
                  let {config: P} = D;
                  Rn({
                      config: P,
                      event: d,
                      eventTarget: r,
                      elementRoot: B,
                      elementApi: he
                  }).forEach(_ => {
                      A.push({
                          element: _,
                          key: k
                      })
                  }
                  )
              }
          }
          )
      }
      ),
      A.forEach( ({element: w, key: C}) => {
          let x = m[C]
            , D = (0,
          Ke.default)(x, "[0].actionItems[0]", {})
            , {actionTypeId: F} = D
            , X = Ln(F) ? Qo(F)(w, D) : null
            , B = $o({
              element: w,
              actionItem: D,
              elementApi: he
          }, X);
          Zo({
              store: e,
              element: w,
              eventId: n,
              actionListId: o,
              actionItem: D,
              destination: B,
              continuous: !0,
              parameterId: O,
              actionGroups: x,
              smoothing: s,
              restingValue: u,
              pluginInstance: X
          })
      }
      )
  }
  function YD(e=[], t, r) {
      let n = [...e], i;
      return n.some( (o, a) => o.keyframe === t ? (i = a,
      !0) : !1),
      i == null && (i = n.length,
      n.push({
          keyframe: t,
          actionItems: []
      })),
      n[i].actionItems.push(r),
      n
  }
  function $D(e) {
      let {ixData: t} = e.getState()
        , {eventTypeMap: r} = t;
      gE(e),
      (0,
      Gt.default)(r, (i, o) => {
          let a = rE[o];
          if (!a) {
              console.warn(`IX2 event type not configured: ${o}`);
              return
          }
          rF({
              logic: a,
              store: e,
              events: i
          })
      }
      );
      let {ixSession: n} = e.getState();
      n.eventListeners.length && ZD(e)
  }
  function ZD(e) {
      let t = () => {
          gE(e)
      }
      ;
      QD.forEach(r => {
          window.addEventListener(r, t),
          e.dispatch(gn(window, [r, t]))
      }
      ),
      t()
  }
  function gE(e) {
      let {ixSession: t, ixData: r} = e.getState()
        , n = window.innerWidth;
      if (n !== t.viewportWidth) {
          let {mediaQueries: i} = r;
          e.dispatch(No({
              width: n,
              mediaQueries: i
          }))
      }
  }
  function rF({logic: e, store: t, events: r}) {
      nF(r);
      let {types: n, handler: i} = e
        , {ixData: o} = t.getState()
        , {actionLists: a} = o
        , s = JD(r, tF);
      if (!(0,
      sE.default)(s))
          return;
      (0,
      Gt.default)(s, (p, d) => {
          let v = r[d]
            , {action: b, id: m, mediaQueries: A=o.mediaQueryKeys} = v
            , {actionListId: E} = b.config;
          ND(A, o.mediaQueryKeys) || t.dispatch(Mo()),
          b.actionTypeId === me.GENERAL_CONTINUOUS_ACTION && (Array.isArray(v.config) ? v.config : [v.config]).forEach(T => {
              let {continuousParameterGroupId: w} = T
                , C = (0,
              Ke.default)(a, `${E}.continuousParameterGroups`, [])
                , x = (0,
              aE.default)(C, ({id: X}) => X === w)
                , D = (T.smoothing || 0) / 100
                , F = (T.restingState || 0) / 100;
              x && p.forEach( (X, B) => {
                  let k = m + Yo + B;
                  jD({
                      store: t,
                      eventStateKey: k,
                      eventTarget: X,
                      eventId: m,
                      eventConfig: T,
                      actionListId: E,
                      parameterGroup: x,
                      smoothing: D,
                      restingValue: F
                  })
              }
              )
          }
          ),
          (b.actionTypeId === me.GENERAL_START_ACTION || jo(b.actionTypeId)) && EE({
              store: t,
              actionListId: E,
              eventId: m
          })
      }
      );
      let u = p => {
          let {ixSession: d} = t.getState();
          eF(s, (v, b, m) => {
              let A = r[b]
                , E = d.eventState[m]
                , {action: O, mediaQueries: T=o.mediaQueryKeys} = A;
              if (!Cn(T, d.mediaQueryKey))
                  return;
              let w = (C={}) => {
                  let x = i({
                      store: t,
                      element: v,
                      event: A,
                      eventConfig: C,
                      nativeEvent: p,
                      eventStateKey: m
                  }, E);
                  MD(x, E) || t.dispatch(Ro(m, x))
              }
              ;
              O.actionTypeId === me.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(A.config) ? A.config : [A.config]).forEach(w) : w()
          }
          )
      }
        , f = (0,
      fE.default)(u, qD)
        , h = ({target: p=document, types: d, throttle: v}) => {
          d.split(" ").filter(Boolean).forEach(b => {
              let m = v ? f : u;
              p.addEventListener(b, m),
              t.dispatch(gn(p, [b, m]))
          }
          )
      }
      ;
      Array.isArray(n) ? n.forEach(h) : typeof n == "string" && h(e)
  }
  function nF(e) {
      if (!FD)
          return;
      let t = {}
        , r = "";
      for (let n in e) {
          let {eventTypeId: i, target: o} = e[n]
            , a = Fo(o);
          t[a] || (i === Ce.MOUSE_CLICK || i === Ce.MOUSE_SECOND_CLICK) && (t[a] = !0,
          r += a + "{cursor: pointer;touch-action: manipulation;}")
      }
      if (r) {
          let n = document.createElement("style");
          n.textContent = r,
          document.body.appendChild(n)
      }
  }
  function EE({store: e, actionListId: t, eventId: r}) {
      let {ixData: n, ixSession: i} = e.getState()
        , {actionLists: o, events: a} = n
        , s = a[r]
        , u = o[t];
      if (u && u.useFirstGroupAsInitialState) {
          let f = (0,
          Ke.default)(u, "actionItemGroups[0].actionItems", [])
            , h = (0,
          Ke.default)(s, "mediaQueries", n.mediaQueryKeys);
          if (!Cn(h, i.mediaQueryKey))
              return;
          f.forEach(p => {
              let {config: d, actionTypeId: v} = p
                , b = d?.target?.useEventTarget === !0 && d?.target?.objectId == null ? {
                  target: s.target,
                  targets: s.targets
              } : d
                , m = Rn({
                  config: b,
                  event: s,
                  elementApi: he
              })
                , A = Ln(v);
              m.forEach(E => {
                  let O = A ? Qo(v)(E, p) : null;
                  Zo({
                      destination: $o({
                          element: E,
                          actionItem: p,
                          elementApi: he
                      }, O),
                      immediate: !0,
                      store: e,
                      element: E,
                      eventId: r,
                      actionItem: p,
                      actionListId: t,
                      pluginInstance: O
                  })
              }
              )
          }
          )
      }
  }
  function yE({store: e}) {
      let {ixInstances: t} = e.getState();
      (0,
      Gt.default)(t, r => {
          if (!r.continuous) {
              let {actionListId: n, verbose: i} = r;
              Jo(r, e),
              i && e.dispatch(qt({
                  actionListId: n,
                  isPlaying: !1
              }))
          }
      }
      )
  }
  function Xt({store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: i}) {
      let {ixInstances: o, ixSession: a} = e.getState()
        , s = a.hasBoundaryNodes && r ? gr(r, wn) : null;
      (0,
      Gt.default)(o, u => {
          let f = (0,
          Ke.default)(u, "actionItem.config.target.boundaryMode")
            , h = n ? u.eventStateKey === n : !0;
          if (u.actionListId === i && u.eventId === t && h) {
              if (s && f && !qo(s, u.element))
                  return;
              Jo(u, e),
              u.verbose && e.dispatch(qt({
                  actionListId: i,
                  isPlaying: !1
              }))
          }
      }
      )
  }
  function vr({store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: i, groupIndex: o=0, immediate: a, verbose: s}) {
      let {ixData: u, ixSession: f} = e.getState()
        , {events: h} = u
        , p = h[t] || {}
        , {mediaQueries: d=u.mediaQueryKeys} = p
        , v = (0,
      Ke.default)(u, `actionLists.${i}`, {})
        , {actionItemGroups: b, useFirstGroupAsInitialState: m} = v;
      if (!b || !b.length)
          return !1;
      o >= b.length && (0,
      Ke.default)(p, "config.loop") && (o = 0),
      o === 0 && m && o++;
      let E = (o === 0 || o === 1 && m) && jo(p.action?.actionTypeId) ? p.config.delay : void 0
        , O = (0,
      Ke.default)(b, [o, "actionItems"], []);
      if (!O.length || !Cn(d, f.mediaQueryKey))
          return !1;
      let T = f.hasBoundaryNodes && r ? gr(r, wn) : null
        , w = bD(O)
        , C = !1;
      return O.forEach( (x, D) => {
          let {config: F, actionTypeId: X} = x
            , B = Ln(X)
            , {target: k} = F;
          if (!k)
              return;
          let P = k.boundaryMode ? T : null;
          Rn({
              config: F,
              event: p,
              eventTarget: r,
              elementRoot: P,
              elementApi: he
          }).forEach( (L, q) => {
              let M = B ? Qo(X)(L, x) : null
                , W = B ? DD(X)(L, x) : null;
              C = !0;
              let H = w === D && q === 0
                , J = SD({
                  element: L,
                  actionItem: x
              })
                , Te = $o({
                  element: L,
                  actionItem: x,
                  elementApi: he
              }, M);
              Zo({
                  store: e,
                  element: L,
                  actionItem: x,
                  eventId: t,
                  eventTarget: r,
                  eventStateKey: n,
                  actionListId: i,
                  groupIndex: o,
                  isCarrier: H,
                  computedStyle: J,
                  destination: Te,
                  immediate: a,
                  verbose: s,
                  pluginInstance: M,
                  pluginDuration: W,
                  instanceDelay: E
              })
          }
          )
      }
      ),
      C
  }
  function Zo(e) {
      let {store: t, computedStyle: r, ...n} = e, {element: i, actionItem: o, immediate: a, pluginInstance: s, continuous: u, restingValue: f, eventId: h} = n, p = !u, d = TD(), {ixElements: v, ixSession: b, ixData: m} = t.getState(), A = ID(v, i), {refState: E} = v[A] || {}, O = Xo(i), T = b.reducedMotion && di[o.actionTypeId], w;
      if (T && u)
          switch (m.events[h]?.eventTypeId) {
          case Ce.MOUSE_MOVE:
          case Ce.MOUSE_MOVE_IN_VIEWPORT:
              w = f;
              break;
          default:
              w = .5;
              break
          }
      let C = OD(i, E, r, o, he, s);
      if (t.dispatch(Co({
          instanceId: d,
          elementId: A,
          origin: C,
          refType: O,
          skipMotion: T,
          skipToValue: w,
          ...n
      })),
      mE(document.body, "ix2-animation-started", d),
      a) {
          iF(t, d);
          return
      }
      lt({
          store: t,
          select: ({ixInstances: x}) => x[d],
          onChange: vE
      }),
      p && t.dispatch(yn(d, b.tick))
  }
  function Jo(e, t) {
      mE(document.body, "ix2-animation-stopping", {
          instanceId: e.id,
          state: t.getState()
      });
      let {elementId: r, actionItem: n} = e
        , {ixElements: i} = t.getState()
        , {ref: o, refType: a} = i[r] || {};
      a === dE && CD(o, n, he),
      t.dispatch(Lo(e.id))
  }
  function mE(e, t, r) {
      let n = document.createEvent("CustomEvent");
      n.initCustomEvent(t, !0, !0, r),
      e.dispatchEvent(n)
  }
  function iF(e, t) {
      let {ixParameters: r} = e.getState();
      e.dispatch(yn(t, 0)),
      e.dispatch(En(performance.now(), r));
      let {ixInstances: n} = e.getState();
      vE(n[t], e)
  }
  function vE(e, t) {
      let {active: r, continuous: n, complete: i, elementId: o, actionItem: a, actionTypeId: s, renderType: u, current: f, groupIndex: h, eventId: p, eventTarget: d, eventStateKey: v, actionListId: b, isCarrier: m, styleProp: A, verbose: E, pluginInstance: O} = e
        , {ixData: T, ixSession: w} = t.getState()
        , {events: C} = T
        , x = C && C[p] ? C[p] : {}
        , {mediaQueries: D=T.mediaQueryKeys} = x;
      if (Cn(D, w.mediaQueryKey) && (n || r || i)) {
          if (f || u === _D && i) {
              t.dispatch(Po(o, s, f, a));
              let {ixElements: F} = t.getState()
                , {ref: X, refType: B, refState: k} = F[o] || {}
                , P = k && k[s];
              (B === dE || Ln(s)) && AD(X, k, P, p, a, A, he, u, O)
          }
          if (i) {
              if (m) {
                  let F = vr({
                      store: t,
                      eventId: p,
                      eventTarget: d,
                      eventStateKey: v,
                      actionListId: b,
                      groupIndex: h + 1,
                      verbose: E
                  });
                  E && !F && t.dispatch(qt({
                      actionListId: b,
                      isPlaying: !1
                  }))
              }
              Jo(e, t)
          }
      }
  }
  var aE, Ke, sE, uE, cE, lE, Gt, fE, xn, vD, jo, Yo, wn, dE, _D, iE, Rn, ID, $o, lt, TD, AD, pE, bD, SD, OD, xD, wD, RD, Cn, CD, LD, PD, ND, MD, Ln, Qo, DD, oE, FD, qD, QD, JD, eF, tF, Ko = re( () => {
      "use strict";
      aE = $(Bi()),
      Ke = $(Qr()),
      sE = $(Np()),
      uE = $(oh()),
      cE = $(sh()),
      lE = $(ch()),
      Gt = $(gh()),
      fE = $(Th());
      ve();
      xn = $(ct());
      mn();
      wh();
      nE();
      vD = Object.keys(Rr),
      jo = e => vD.includes(e),
      {COLON_DELIMITER: Yo, BOUNDARY_SELECTOR: wn, HTML_ELEMENT: dE, RENDER_GENERAL: _D, W_MOD_IX: iE} = ce,
      {getAffectedElements: Rn, getElementId: ID, getDestinationValues: $o, observeStore: lt, getInstanceId: TD, renderHTMLElement: AD, clearAllStyles: pE, getMaxDurationItemIndex: bD, getComputedStyle: SD, getInstanceOrigin: OD, reduceListToGroup: xD, shouldNamespaceEventParameter: wD, getNamespacedParameterId: RD, shouldAllowMediaQuery: Cn, cleanupHTMLElement: CD, clearObjectCache: LD, stringifyTarget: PD, mediaQueriesEqual: ND, shallowEqual: MD} = xn.IX2VanillaUtils,
      {isPluginType: Ln, createPluginInstance: Qo, getPluginDuration: DD} = xn.IX2VanillaPlugins,
      oE = navigator.userAgent,
      FD = oE.match(/iPad/i) || oE.match(/iPhone/),
      qD = 12;
      QD = ["resize", "orientationchange"];
      JD = (e, t) => (0,
      uE.default)((0,
      lE.default)(e, t), cE.default),
      eF = (e, t) => {
          (0,
          Gt.default)(e, (r, n) => {
              r.forEach( (i, o) => {
                  let a = n + Yo + o;
                  t(i, n, a)
              }
              )
          }
          )
      }
      ,
      tF = e => {
          let t = {
              target: e.target,
              targets: e.targets
          };
          return Rn({
              config: t,
              elementApi: he
          })
      }
  }
  );
  var AE = l(ta => {
      "use strict";
      Object.defineProperty(ta, "__esModule", {
          value: !0
      });
      function oF(e, t) {
          for (var r in t)
              Object.defineProperty(e, r, {
                  enumerable: !0,
                  get: t[r]
              })
      }
      oF(ta, {
          actions: function() {
              return uF
          },
          destroy: function() {
              return TE
          },
          init: function() {
              return dF
          },
          setEnv: function() {
              return fF
          },
          store: function() {
              return Mn
          }
      });
      var aF = ci()
        , sF = cF((hp(),
      Me(pp)))
        , ea = (Ko(),
      Me(_E))
        , uF = lF((mn(),
      Me(bh)));
      function cF(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      function IE(e) {
          if (typeof WeakMap != "function")
              return null;
          var t = new WeakMap
            , r = new WeakMap;
          return (IE = function(n) {
              return n ? r : t
          }
          )(e)
      }
      function lF(e, t) {
          if (!t && e && e.__esModule)
              return e;
          if (e === null || typeof e != "object" && typeof e != "function")
              return {
                  default: e
              };
          var r = IE(t);
          if (r && r.has(e))
              return r.get(e);
          var n = {
              __proto__: null
          }
            , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
              if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                  var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                  a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
              }
          return n.default = e,
          r && r.set(e, n),
          n
      }
      var Mn = (0,
      aF.createStore)(sF.default);
      function fF(e) {
          e() && (0,
          ea.observeRequests)(Mn)
      }
      function dF(e) {
          TE(),
          (0,
          ea.startEngine)({
              store: Mn,
              rawData: e,
              allowEvents: !0
          })
      }
      function TE() {
          (0,
          ea.stopEngine)(Mn)
      }
  }
  );
  var xE = l( (dG, OE) => {
      "use strict";
      var bE = Fe()
        , SE = AE();
      SE.setEnv(bE.env);
      bE.define("ix2", OE.exports = function() {
          return SE
      }
      )
  }
  );
  var RE = l( (pG, wE) => {
      "use strict";
      var Vt = Fe();
      Vt.define("links", wE.exports = function(e, t) {
          var r = {}, n = e(window), i, o = Vt.env(), a = window.location, s = document.createElement("a"), u = "w--current", f = /index\.(html|php)$/, h = /\/$/, p, d;
          r.ready = r.design = r.preview = v;
          function v() {
              i = o && Vt.env("design"),
              d = Vt.env("slug") || a.pathname || "",
              Vt.scroll.off(m),
              p = [];
              for (var E = document.links, O = 0; O < E.length; ++O)
                  b(E[O]);
              p.length && (Vt.scroll.on(m),
              m())
          }
          function b(E) {
              if (!E.getAttribute("hreflang")) {
                  var O = i && E.getAttribute("href-disabled") || E.getAttribute("href");
                  if (s.href = O,
                  !(O.indexOf(":") >= 0)) {
                      var T = e(E);
                      if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
                          if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash))
                              return;
                          var w = e(s.hash);
                          w.length && p.push({
                              link: T,
                              sec: w,
                              active: !1
                          });
                          return
                      }
                      if (!(O === "#" || O === "")) {
                          var C = s.href === a.href || O === d || f.test(O) && h.test(d);
                          A(T, u, C)
                      }
                  }
              }
          }
          function m() {
              var E = n.scrollTop()
                , O = n.height();
              t.each(p, function(T) {
                  if (!T.link.attr("hreflang")) {
                      var w = T.link
                        , C = T.sec
                        , x = C.offset().top
                        , D = C.outerHeight()
                        , F = O * .5
                        , X = C.is(":visible") && x + D - F >= E && x + F <= E + O;
                      T.active !== X && (T.active = X,
                      A(w, u, X))
                  }
              })
          }
          function A(E, O, T) {
              var w = E.hasClass(O);
              T && w || !T && !w || (T ? E.addClass(O) : E.removeClass(O))
          }
          return r
      }
      )
  }
  );
  var LE = l( (hG, CE) => {
      "use strict";
      var Dn = Fe();
      Dn.define("scroll", CE.exports = function(e) {
          var t = {
              WF_CLICK_EMPTY: "click.wf-empty-link",
              WF_CLICK_SCROLL: "click.wf-scroll"
          }
            , r = window.location
            , n = b() ? null : window.history
            , i = e(window)
            , o = e(document)
            , a = e(document.body)
            , s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(P) {
              window.setTimeout(P, 15)
          }
            , u = Dn.env("editor") ? ".w-editor-body" : "body"
            , f = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])"
            , h = 'a[href="#"]'
            , p = 'a[href*="#"]:not(.w-tab-link):not(' + h + ")"
            , d = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
            , v = document.createElement("style");
          v.appendChild(document.createTextNode(d));
          function b() {
              try {
                  return !!window.frameElement
              } catch {
                  return !0
              }
          }
          var m = /^#[a-zA-Z0-9][\w:.-]*$/;
          function A(P) {
              return m.test(P.hash) && P.host + P.pathname === r.host + r.pathname
          }
          let E = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
          function O() {
              return document.body.getAttribute("data-wf-scroll-motion") === "none" || E.matches
          }
          function T(P, _) {
              var L;
              switch (_) {
              case "add":
                  L = P.attr("tabindex"),
                  L ? P.attr("data-wf-tabindex-swap", L) : P.attr("tabindex", "-1");
                  break;
              case "remove":
                  L = P.attr("data-wf-tabindex-swap"),
                  L ? (P.attr("tabindex", L),
                  P.removeAttr("data-wf-tabindex-swap")) : P.removeAttr("tabindex");
                  break
              }
              P.toggleClass("wf-force-outline-none", _ === "add")
          }
          function w(P) {
              var _ = P.currentTarget;
              if (!(Dn.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(_.className))) {
                  var L = A(_) ? _.hash : "";
                  if (L !== "") {
                      var q = e(L);
                      q.length && (P && (P.preventDefault(),
                      P.stopPropagation()),
                      C(L, P),
                      window.setTimeout(function() {
                          x(q, function() {
                              T(q, "add"),
                              q.get(0).focus({
                                  preventScroll: !0
                              }),
                              T(q, "remove")
                          })
                      }, P ? 0 : 300))
                  }
              }
          }
          function C(P) {
              if (r.hash !== P && n && n.pushState && !(Dn.env.chrome && r.protocol === "file:")) {
                  var _ = n.state && n.state.hash;
                  _ !== P && n.pushState({
                      hash: P
                  }, "", P)
              }
          }
          function x(P, _) {
              var L = i.scrollTop()
                , q = D(P);
              if (L !== q) {
                  var M = F(P, L, q)
                    , W = Date.now()
                    , H = function() {
                      var J = Date.now() - W;
                      window.scroll(0, X(L, q, J, M)),
                      J <= M ? s(H) : typeof _ == "function" && _()
                  };
                  s(H)
              }
          }
          function D(P) {
              var _ = e(f)
                , L = _.css("position") === "fixed" ? _.outerHeight() : 0
                , q = P.offset().top - L;
              if (P.data("scroll") === "mid") {
                  var M = i.height() - L
                    , W = P.outerHeight();
                  W < M && (q -= Math.round((M - W) / 2))
              }
              return q
          }
          function F(P, _, L) {
              if (O())
                  return 0;
              var q = 1;
              return a.add(P).each(function(M, W) {
                  var H = parseFloat(W.getAttribute("data-scroll-time"));
                  !isNaN(H) && H >= 0 && (q = H)
              }),
              (472.143 * Math.log(Math.abs(_ - L) + 125) - 2e3) * q
          }
          function X(P, _, L, q) {
              return L > q ? _ : P + (_ - P) * B(L / q)
          }
          function B(P) {
              return P < .5 ? 4 * P * P * P : (P - 1) * (2 * P - 2) * (2 * P - 2) + 1
          }
          function k() {
              var {WF_CLICK_EMPTY: P, WF_CLICK_SCROLL: _} = t;
              o.on(_, p, w),
              o.on(P, h, function(L) {
                  L.preventDefault()
              }),
              document.head.insertBefore(v, document.head.firstChild)
          }
          return {
              ready: k
          }
      }
      )
  }
  );
  var NE = l( (gG, PE) => {
      "use strict";
      var pF = Fe();
      pF.define("touch", PE.exports = function(e) {
          var t = {}
            , r = window.getSelection;
          e.event.special.tap = {
              bindType: "click",
              delegateType: "click"
          },
          t.init = function(o) {
              return o = typeof o == "string" ? e(o).get(0) : o,
              o ? new n(o) : null
          }
          ;
          function n(o) {
              var a = !1, s = !1, u = Math.min(Math.round(window.innerWidth * .04), 40), f, h;
              o.addEventListener("touchstart", p, !1),
              o.addEventListener("touchmove", d, !1),
              o.addEventListener("touchend", v, !1),
              o.addEventListener("touchcancel", b, !1),
              o.addEventListener("mousedown", p, !1),
              o.addEventListener("mousemove", d, !1),
              o.addEventListener("mouseup", v, !1),
              o.addEventListener("mouseout", b, !1);
              function p(A) {
                  var E = A.touches;
                  E && E.length > 1 || (a = !0,
                  E ? (s = !0,
                  f = E[0].clientX) : f = A.clientX,
                  h = f)
              }
              function d(A) {
                  if (a) {
                      if (s && A.type === "mousemove") {
                          A.preventDefault(),
                          A.stopPropagation();
                          return
                      }
                      var E = A.touches
                        , O = E ? E[0].clientX : A.clientX
                        , T = O - h;
                      h = O,
                      Math.abs(T) > u && r && String(r()) === "" && (i("swipe", A, {
                          direction: T > 0 ? "right" : "left"
                      }),
                      b())
                  }
              }
              function v(A) {
                  if (a && (a = !1,
                  s && A.type === "mouseup")) {
                      A.preventDefault(),
                      A.stopPropagation(),
                      s = !1;
                      return
                  }
              }
              function b() {
                  a = !1
              }
              function m() {
                  o.removeEventListener("touchstart", p, !1),
                  o.removeEventListener("touchmove", d, !1),
                  o.removeEventListener("touchend", v, !1),
                  o.removeEventListener("touchcancel", b, !1),
                  o.removeEventListener("mousedown", p, !1),
                  o.removeEventListener("mousemove", d, !1),
                  o.removeEventListener("mouseup", v, !1),
                  o.removeEventListener("mouseout", b, !1),
                  o = null
              }
              this.destroy = m
          }
          function i(o, a, s) {
              var u = e.Event(o, {
                  originalEvent: a
              });
              e(a.target).trigger(u, s)
          }
          return t.instance = t.init(document),
          t
      }
      )
  }
  );
  Aa();
  Oa();
  wa();
  Ca();
  Na();
  Va();
  xE();
  RE();
  LE();
  NE();
}
)();
/*!
  * tram.js v0.8.2-global
  * Cross-browser CSS3 transitions in JavaScript
  * https://github.com/bkwld/tram
  * MIT License
  */
/*!
   * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
   *
   * http://underscorejs.org
   * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   * Underscore may be freely distributed under the MIT license.
   * @license MIT
   */
/*! Bundled license information:
  
  timm/lib/timm.js:
    (*!
     * Timm
     *
     * Immutability helpers with fast reads and acceptable writes.
     *
     * @copyright Guillermo Grau Panea 2016
     * @license MIT
     *)
  */
/**
   * ----------------------------------------------------------------------
   * Webflow: Interactions 2.0: Init
   */
Webflow.require('ix2').init({
  "events": {
      "e": {
          "id": "e",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "SCROLLING_IN_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
              "config": {
                  "actionListId": "a",
                  "affectedElements": {},
                  "duration": 0
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6694d16edfb46eb7e97649bf|4f2f9859-0f6c-edbe-abe4-1d44202435f7",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6694d16edfb46eb7e97649bf|4f2f9859-0f6c-edbe-abe4-1d44202435f7",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": [{
              "continuousParameterGroupId": "a-p",
              "smoothing": 85,
              "startsEntering": true,
              "addStartOffset": false,
              "addOffsetValue": 50,
              "startsExiting": false,
              "addEndOffset": false,
              "endOffsetValue": 50
          }],
          "createdOn": 1721033518312
      },
      "e-2": {
          "id": "e-2",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "SCROLLING_IN_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
              "config": {
                  "actionListId": "a-3",
                  "affectedElements": {},
                  "duration": 0
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6694d16edfb46eb7e97649bf|57faddb9-4ea0-d727-24a9-49a73a90cb3e",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6694d16edfb46eb7e97649bf|57faddb9-4ea0-d727-24a9-49a73a90cb3e",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": [{
              "continuousParameterGroupId": "a-3-p",
              "smoothing": 80,
              "startsEntering": true,
              "addStartOffset": false,
              "addOffsetValue": 50,
              "startsExiting": false,
              "addEndOffset": false,
              "endOffsetValue": 50
          }],
          "createdOn": 1721204963228
      },
      "e-3": {
          "id": "e-3",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "SCROLLING_IN_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
              "config": {
                  "actionListId": "a-4",
                  "affectedElements": {},
                  "duration": 0
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6694d16edfb46eb7e97649bf|00914f93-7a60-28da-5060-785d02ab725c",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6694d16edfb46eb7e97649bf|00914f93-7a60-28da-5060-785d02ab725c",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": [{
              "continuousParameterGroupId": "a-4-p",
              "smoothing": 80,
              "startsEntering": true,
              "addStartOffset": false,
              "addOffsetValue": 50,
              "startsExiting": false,
              "addEndOffset": false,
              "endOffsetValue": 50
          }],
          "createdOn": 1721211052413
      },
      "e-4": {
          "id": "e-4",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "SCROLLING_IN_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
              "config": {
                  "actionListId": "a-5",
                  "affectedElements": {},
                  "duration": 0
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6694d16edfb46eb7e97649bf|30f0146f-a373-af26-1473-a2f6dcf5d08b",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6694d16edfb46eb7e97649bf|30f0146f-a373-af26-1473-a2f6dcf5d08b",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": [{
              "continuousParameterGroupId": "a-5-p",
              "smoothing": 80,
              "startsEntering": true,
              "addStartOffset": false,
              "addOffsetValue": 50,
              "startsExiting": false,
              "addEndOffset": false,
              "endOffsetValue": 50
          }],
          "createdOn": 1721222964874
      },
      "e-5": {
          "id": "e-5",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-6",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-6"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6694d16edfb46eb7e97649bf|3f55c904-df2c-6262-4a45-e6f09b7e8791",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6694d16edfb46eb7e97649bf|3f55c904-df2c-6262-4a45-e6f09b7e8791",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1721224524284
      },
      "e-6": {
          "id": "e-6",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-7",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-5"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6694d16edfb46eb7e97649bf|3f55c904-df2c-6262-4a45-e6f09b7e8791",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6694d16edfb46eb7e97649bf|3f55c904-df2c-6262-4a45-e6f09b7e8791",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1721224524284
      },
      "e-7": {
          "id": "e-7",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLLING_IN_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
              "config": {
                  "actionListId": "a-5",
                  "affectedElements": {},
                  "duration": 0
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6694d16edfb46eb7e97649bf|d488f52f-5aaf-2987-6b1c-01c796c0bb8d",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6694d16edfb46eb7e97649bf|d488f52f-5aaf-2987-6b1c-01c796c0bb8d",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": [{
              "continuousParameterGroupId": "a-5-p",
              "smoothing": 80,
              "startsEntering": true,
              "addStartOffset": false,
              "addOffsetValue": 50,
              "startsExiting": false,
              "addEndOffset": false,
              "endOffsetValue": 50
          }],
          "createdOn": 1721901160635
      },
      "e-8": {
          "id": "e-8",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-6",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-9"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6694d16edfb46eb7e97649bf|d488f52f-5aaf-2987-6b1c-01c796c0bba2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6694d16edfb46eb7e97649bf|d488f52f-5aaf-2987-6b1c-01c796c0bba2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1721901160635
      },
      "e-9": {
          "id": "e-9",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-7",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-8"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6694d16edfb46eb7e97649bf|d488f52f-5aaf-2987-6b1c-01c796c0bba2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6694d16edfb46eb7e97649bf|d488f52f-5aaf-2987-6b1c-01c796c0bba2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1721901160635
      },
      "e-10": {
          "id": "e-10",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLLING_IN_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
              "config": {
                  "actionListId": "a-5",
                  "affectedElements": {},
                  "duration": 0
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6694d16edfb46eb7e97649bf|e9818367-8bba-eae2-58a7-9e3b3b02702d",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6694d16edfb46eb7e97649bf|e9818367-8bba-eae2-58a7-9e3b3b02702d",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": [{
              "continuousParameterGroupId": "a-5-p",
              "smoothing": 80,
              "startsEntering": true,
              "addStartOffset": false,
              "addOffsetValue": 50,
              "startsExiting": false,
              "addEndOffset": false,
              "endOffsetValue": 50
          }],
          "createdOn": 1721903407654
      },
      "e-11": {
          "id": "e-11",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-6",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-12"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6694d16edfb46eb7e97649bf|e9818367-8bba-eae2-58a7-9e3b3b027042",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6694d16edfb46eb7e97649bf|e9818367-8bba-eae2-58a7-9e3b3b027042",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1721903407654
      },
      "e-12": {
          "id": "e-12",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-7",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-11"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6694d16edfb46eb7e97649bf|e9818367-8bba-eae2-58a7-9e3b3b027042",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6694d16edfb46eb7e97649bf|e9818367-8bba-eae2-58a7-9e3b3b027042",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1721903407654
      },
      "e-13": {
          "id": "e-13",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "SCROLLING_IN_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
              "config": {
                  "actionListId": "a-8",
                  "affectedElements": {},
                  "duration": 0
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6694d16edfb46eb7e97649bf|7b698894-d162-73eb-ce61-f02cdf1c77e5",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6694d16edfb46eb7e97649bf|7b698894-d162-73eb-ce61-f02cdf1c77e5",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": [{
              "continuousParameterGroupId": "a-8-p",
              "smoothing": 50,
              "startsEntering": true,
              "addStartOffset": false,
              "addOffsetValue": 50,
              "startsExiting": false,
              "addEndOffset": false,
              "endOffsetValue": 50
          }],
          "createdOn": 1721913242283
      },
      "e-14": {
          "id": "e-14",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-9",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-15"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "d740e73a-1466-251b-8b2d-e4ea01eb5bf2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "d740e73a-1466-251b-8b2d-e4ea01eb5bf2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1721923541342
      },
      "e-15": {
          "id": "e-15",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-10",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-14"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "d740e73a-1466-251b-8b2d-e4ea01eb5bf2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "d740e73a-1466-251b-8b2d-e4ea01eb5bf2",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1721923541342
      },
      "e-16": {
          "id": "e-16",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "SCROLLING_IN_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
              "config": {
                  "actionListId": "a-11",
                  "affectedElements": {},
                  "duration": 0
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66a7624265148801a91022c8|0e36439e-44d7-2bdb-8471-aa77275e18e7",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66a7624265148801a91022c8|0e36439e-44d7-2bdb-8471-aa77275e18e7",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": [{
              "continuousParameterGroupId": "a-11-p",
              "smoothing": 70,
              "startsEntering": true,
              "addStartOffset": false,
              "addOffsetValue": 50,
              "startsExiting": false,
              "addEndOffset": false,
              "endOffsetValue": 50
          }],
          "createdOn": 1722259981401
      },
      "e-17": {
          "id": "e-17",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "SCROLLING_IN_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
              "config": {
                  "actionListId": "a-12",
                  "affectedElements": {},
                  "duration": 0
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66a7624265148801a91022c8|bd6e6e15-54e5-c87c-0848-680149d79093",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66a7624265148801a91022c8|bd6e6e15-54e5-c87c-0848-680149d79093",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": [{
              "continuousParameterGroupId": "a-12-p",
              "smoothing": 50,
              "startsEntering": true,
              "addStartOffset": false,
              "addOffsetValue": 50,
              "startsExiting": false,
              "addEndOffset": false,
              "endOffsetValue": 50
          }],
          "createdOn": 1722267547585
      },
      "e-18": {
          "id": "e-18",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "SCROLLING_IN_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
              "config": {
                  "actionListId": "a-13",
                  "affectedElements": {},
                  "duration": 0
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66a7624265148801a91022c8|0b908a7c-b087-b447-e1b0-acebbe9856e5",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66a7624265148801a91022c8|0b908a7c-b087-b447-e1b0-acebbe9856e5",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": [{
              "continuousParameterGroupId": "a-13-p",
              "smoothing": 50,
              "startsEntering": true,
              "addStartOffset": false,
              "addOffsetValue": 50,
              "startsExiting": false,
              "addEndOffset": false,
              "endOffsetValue": 50
          }],
          "createdOn": 1722354541659
      },
      "e-19": {
          "id": "e-19",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "SCROLLING_IN_VIEW",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
              "config": {
                  "actionListId": "a-14",
                  "affectedElements": {},
                  "duration": 0
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66a7624265148801a91022c8|e7afca7f-8f10-f490-931c-09875f345db4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66a7624265148801a91022c8|e7afca7f-8f10-f490-931c-09875f345db4",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": [{
              "continuousParameterGroupId": "a-14-p",
              "smoothing": 80,
              "startsEntering": true,
              "addStartOffset": false,
              "addOffsetValue": 50,
              "startsExiting": false,
              "addEndOffset": false,
              "endOffsetValue": 50
          }],
          "createdOn": 1722431866894
      },
      "e-20": {
          "id": "e-20",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-16",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-21"
              }
          },
          "mediaQueries": ["main", "tiny"],
          "target": {
              "id": "66a7624265148801a91022c8|e3b3415e-405e-e293-610b-4b7fb2a2cfc8",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66a7624265148801a91022c8|e3b3415e-405e-e293-610b-4b7fb2a2cfc8",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": true,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1722436377331
      },
      "e-21": {
          "id": "e-21",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-17",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-20"
              }
          },
          "mediaQueries": ["main", "tiny"],
          "target": {
              "id": "66a7624265148801a91022c8|e3b3415e-405e-e293-610b-4b7fb2a2cfc8",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66a7624265148801a91022c8|e3b3415e-405e-e293-610b-4b7fb2a2cfc8",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1722436377331
      },
      "e-24": {
          "id": "e-24",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-18",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-25"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6694d16edfb46eb7e97649bf|a1c0b425-8183-076b-a59e-7c876f42078b",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6694d16edfb46eb7e97649bf|a1c0b425-8183-076b-a59e-7c876f42078b",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1722440132165
      },
      "e-25": {
          "id": "e-25",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-19",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-24"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6694d16edfb46eb7e97649bf|a1c0b425-8183-076b-a59e-7c876f42078b",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6694d16edfb46eb7e97649bf|a1c0b425-8183-076b-a59e-7c876f42078b",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1722440132165
      },
      "e-26": {
          "id": "e-26",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-20",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-27"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "d740e73a-1466-251b-8b2d-e4ea01eb5bef",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "d740e73a-1466-251b-8b2d-e4ea01eb5bef",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1722441495108
      },
      "e-27": {
          "id": "e-27",
          "name": "",
          "animationType": "custom",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-21",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-26"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "d740e73a-1466-251b-8b2d-e4ea01eb5bef",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "d740e73a-1466-251b-8b2d-e4ea01eb5bef",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1722441495109
      },
      "e-29": {
          "id": "e-29",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-6",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-30"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6694d16edfb46eb7e97649bf|dd3c5d73-38de-61be-b38f-81c94dc1cf41",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6694d16edfb46eb7e97649bf|dd3c5d73-38de-61be-b38f-81c94dc1cf41",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1722590603545
      },
      "e-30": {
          "id": "e-30",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-7",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-29"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6694d16edfb46eb7e97649bf|dd3c5d73-38de-61be-b38f-81c94dc1cf41",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6694d16edfb46eb7e97649bf|dd3c5d73-38de-61be-b38f-81c94dc1cf41",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1722590603545
      },
      "e-31": {
          "id": "e-31",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-6",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-32"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6694d16edfb46eb7e97649bf|65c6ee30-cec7-94ab-58a6-735a026c3b4c",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6694d16edfb46eb7e97649bf|65c6ee30-cec7-94ab-58a6-735a026c3b4c",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1722591232744
      },
      "e-32": {
          "id": "e-32",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-7",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-31"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6694d16edfb46eb7e97649bf|65c6ee30-cec7-94ab-58a6-735a026c3b4c",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6694d16edfb46eb7e97649bf|65c6ee30-cec7-94ab-58a6-735a026c3b4c",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1722591232744
      },
      "e-33": {
          "id": "e-33",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-6",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-34"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6694d16edfb46eb7e97649bf|00fa19d9-e85d-abf1-3f7c-e6fd8fd336aa",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6694d16edfb46eb7e97649bf|00fa19d9-e85d-abf1-3f7c-e6fd8fd336aa",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1722591233165
      },
      "e-34": {
          "id": "e-34",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-7",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-33"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "6694d16edfb46eb7e97649bf|00fa19d9-e85d-abf1-3f7c-e6fd8fd336aa",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "6694d16edfb46eb7e97649bf|00fa19d9-e85d-abf1-3f7c-e6fd8fd336aa",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1722591233165
      },
      "e-35": {
          "id": "e-35",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-23",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-36"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66a7624265148801a91022c8|036ea764-b077-5998-2719-f40bcfcc0c50",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66a7624265148801a91022c8|036ea764-b077-5998-2719-f40bcfcc0c50",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1722605994975
      },
      "e-36": {
          "id": "e-36",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-24",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-35"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66a7624265148801a91022c8|036ea764-b077-5998-2719-f40bcfcc0c50",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66a7624265148801a91022c8|036ea764-b077-5998-2719-f40bcfcc0c50",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1722605994975
      },
      "e-37": {
          "id": "e-37",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OVER",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-25",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-38"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66a7624265148801a91022c8|036ea764-b077-5998-2719-f40bcfcc0c4c",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66a7624265148801a91022c8|036ea764-b077-5998-2719-f40bcfcc0c4c",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1722605994975
      },
      "e-38": {
          "id": "e-38",
          "name": "",
          "animationType": "preset",
          "eventTypeId": "MOUSE_OUT",
          "action": {
              "id": "",
              "actionTypeId": "GENERAL_START_ACTION",
              "config": {
                  "delay": 0,
                  "easing": "",
                  "duration": 0,
                  "actionListId": "a-26",
                  "affectedElements": {},
                  "playInReverse": false,
                  "autoStopEventId": "e-37"
              }
          },
          "mediaQueries": ["main", "medium", "small", "tiny"],
          "target": {
              "id": "66a7624265148801a91022c8|036ea764-b077-5998-2719-f40bcfcc0c4c",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          },
          "targets": [{
              "id": "66a7624265148801a91022c8|036ea764-b077-5998-2719-f40bcfcc0c4c",
              "appliesTo": "ELEMENT",
              "styleBlockIds": []
          }],
          "config": {
              "loop": false,
              "playInReverse": false,
              "scrollOffsetValue": null,
              "scrollOffsetUnit": null,
              "delay": null,
              "direction": null,
              "effectIn": null
          },
          "createdOn": 1722605994975
      }
  },
  "actionLists": {
      "a": {
          "id": "a",
          "title": "01_hero",
          "continuousParameterGroups": [{
              "id": "a-p",
              "type": "SCROLL_PROGRESS",
              "parameterLabel": "Scroll",
              "continuousActionGroups": [{
                  "keyframe": 5,
                  "actionItems": [{
                      "id": "a-n",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "inQuad",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".img_hero.z-4",
                              "selectorGuids": ["326ddda2-afc5-7e4f-f606-e8620ea9eb64", "5c2ea5ad-040d-1215-8acc-88cc4ca67fce"]
                          },
                          "yValue": 100,
                          "xUnit": "PX",
                          "yUnit": "px",
                          "zUnit": "PX"
                      }
                  }, {
                      "id": "a-n-5",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "easeIn",
                          "duration": 50,
                          "target": {
                              "id": "6694d16edfb46eb7e97649bf|0275fe91-0c0d-ef2c-47d5-d82c817984f5"
                          },
                          "yValue": -120,
                          "xUnit": "PX",
                          "yUnit": "vh",
                          "zUnit": "PX"
                      }
                  }, {
                      "id": "a-n-9",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "easeIn",
                          "duration": 50,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".img_hero.z-1",
                              "selectorGuids": ["326ddda2-afc5-7e4f-f606-e8620ea9eb64", "dec98986-8e3b-834b-bdba-934bf8663e13"]
                          },
                          "yValue": -50,
                          "xUnit": "PX",
                          "yUnit": "px",
                          "zUnit": "PX"
                      }
                  }, {
                      "id": "a-n-11",
                      "actionTypeId": "STYLE_OPACITY",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 50,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".filtre.img_hero.z-5",
                              "selectorGuids": ["b1ff5f80-0248-ad70-f31f-7ade18cc9702", "1a9bb480-a4b4-e728-4229-284376db1c11", "d2fa90b4-3693-6972-9729-e5358cc18192"]
                          },
                          "value": 0,
                          "unit": ""
                      }
                  }]
              }, {
                  "keyframe": 10,
                  "actionItems": [{
                      "id": "a-n-7",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "easeIn",
                          "duration": 50,
                          "target": {
                              "id": "6694d16edfb46eb7e97649bf|dd9a8ffc-23c3-9cd6-d387-ff0d71a51ff6"
                          },
                          "yValue": -90,
                          "xUnit": "PX",
                          "yUnit": "vh",
                          "zUnit": "PX"
                      }
                  }]
              }, {
                  "keyframe": 5,
                  "actionItems": [{
                      "id": "a-n-3",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "easeIn",
                          "duration": 50,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".img_hero.z-6.titre-hero",
                              "selectorGuids": ["326ddda2-afc5-7e4f-f606-e8620ea9eb64", "e4befce2-73c2-fd8c-e50c-cb0f0a6fdef9", "b3ff84f7-5a95-90e7-55de-013ff54e24b6"]
                          },
                          "yValue": 100,
                          "xUnit": "PX",
                          "yUnit": "vh",
                          "zUnit": "PX"
                      }
                  }]
              }, {
                  "keyframe": 10,
                  "actionItems": [{
                      "id": "a-n-6",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "easeOut",
                          "duration": 50,
                          "target": {
                              "id": "6694d16edfb46eb7e97649bf|0275fe91-0c0d-ef2c-47d5-d82c817984f5"
                          },
                          "yValue": 0,
                          "xUnit": "PX",
                          "yUnit": "vh",
                          "zUnit": "PX"
                      }
                  }]
              }, {
                  "keyframe": 60,
                  "actionItems": [{
                      "id": "a-n-12",
                      "actionTypeId": "STYLE_OPACITY",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 50,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".filtre.img_hero.z-5",
                              "selectorGuids": ["b1ff5f80-0248-ad70-f31f-7ade18cc9702", "1a9bb480-a4b4-e728-4229-284376db1c11", "d2fa90b4-3693-6972-9729-e5358cc18192"]
                          },
                          "value": 1,
                          "unit": ""
                      }
                  }]
              }, {
                  "keyframe": 35,
                  "actionItems": [{
                      "id": "a-n-8",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "easeOut",
                          "duration": 20,
                          "target": {
                              "id": "6694d16edfb46eb7e97649bf|dd9a8ffc-23c3-9cd6-d387-ff0d71a51ff6"
                          },
                          "yValue": 0,
                          "xUnit": "PX",
                          "yUnit": "vh",
                          "zUnit": "PX"
                      }
                  }, {
                      "id": "a-n-2",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "easeOut",
                          "duration": 40,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".img_hero.z-4",
                              "selectorGuids": ["326ddda2-afc5-7e4f-f606-e8620ea9eb64", "5c2ea5ad-040d-1215-8acc-88cc4ca67fce"]
                          },
                          "yValue": 4,
                          "xUnit": "PX",
                          "yUnit": "px",
                          "zUnit": "PX"
                      }
                  }, {
                      "id": "a-n-10",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "easeOut",
                          "duration": 50,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".img_hero.z-1",
                              "selectorGuids": ["326ddda2-afc5-7e4f-f606-e8620ea9eb64", "dec98986-8e3b-834b-bdba-934bf8663e13"]
                          },
                          "yValue": 0,
                          "xUnit": "PX",
                          "yUnit": "px",
                          "zUnit": "PX"
                      }
                  }]
              }, {
                  "keyframe": 65,
                  "actionItems": [{
                      "id": "a-n-4",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "easeIn",
                          "duration": 50,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".img_hero.z-6.titre-hero",
                              "selectorGuids": ["326ddda2-afc5-7e4f-f606-e8620ea9eb64", "e4befce2-73c2-fd8c-e50c-cb0f0a6fdef9", "b3ff84f7-5a95-90e7-55de-013ff54e24b6"]
                          },
                          "yValue": 0,
                          "xUnit": "PX",
                          "yUnit": "vh",
                          "zUnit": "PX"
                      }
                  }]
              }]
          }],
          "createdOn": 1721033525058
      },
      "a-3": {
          "id": "a-3",
          "title": "02_LIVRE_3D",
          "continuousParameterGroups": [{
              "id": "a-3-p",
              "type": "SCROLL_PROGRESS",
              "parameterLabel": "Scroll",
              "continuousActionGroups": [{
                  "keyframe": 5,
                  "actionItems": [{
                      "id": "a-3-n-3",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "outQuint",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".image-2",
                              "selectorGuids": ["8488a61d-aa65-40dd-9e09-0831c35c3754"]
                          },
                          "yValue": 200,
                          "xUnit": "PX",
                          "yUnit": "vh",
                          "zUnit": "PX"
                      }
                  }, {
                      "id": "a-3-n-7",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "outQuint",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".div-block-6",
                              "selectorGuids": ["edca97ee-cca7-8a16-9546-b746552e9e5c"]
                          },
                          "yValue": 20,
                          "xUnit": "PX",
                          "yUnit": "vh",
                          "zUnit": "PX"
                      }
                  }]
              }, {
                  "keyframe": 5,
                  "actionItems": [{
                      "id": "a-3-n",
                      "actionTypeId": "PLUGIN_SPLINE",
                      "config": {
                          "delay": 0,
                          "easing": "easeIn",
                          "duration": 100,
                          "target": {
                              "pluginElement": "916bca40-d7d6-d739-f30c-c5733bc85e98",
                              "objectId": "ebeda241-dec7-4c9d-b9d6-7ee1a2bd06ad",
                              "useEventTarget": "CHILDREN",
                              "id": "6694d16edfb46eb7e97649bf|916bca40-d7d6-d739-f30c-c5733bc85e98"
                          },
                          "value": {
                              "rotationX": -0.6,
                              "rotationY": 1.2,
                              "rotationZ": 3.6
                          }
                      }
                  }]
              }, {
                  "keyframe": 20,
                  "actionItems": [{
                      "id": "a-3-n-5",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "easeIn",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".order",
                              "selectorGuids": ["8686535a-0267-fca4-0ce7-90ca7ee1c07b"]
                          },
                          "yValue": 100,
                          "xUnit": "PX",
                          "yUnit": "vh",
                          "zUnit": "PX"
                      }
                  }, {
                      "id": "a-3-n-8",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "outQuint",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".div-block-6",
                              "selectorGuids": ["edca97ee-cca7-8a16-9546-b746552e9e5c"]
                          },
                          "yValue": 0,
                          "xUnit": "PX",
                          "yUnit": "vh",
                          "zUnit": "PX"
                      }
                  }]
              }, {
                  "keyframe": 25,
                  "actionItems": [{
                      "id": "a-3-n-2",
                      "actionTypeId": "PLUGIN_SPLINE",
                      "config": {
                          "delay": 0,
                          "easing": "easeOut",
                          "duration": 100,
                          "target": {
                              "pluginElement": "916bca40-d7d6-d739-f30c-c5733bc85e98",
                              "objectId": "ebeda241-dec7-4c9d-b9d6-7ee1a2bd06ad",
                              "useEventTarget": "CHILDREN",
                              "id": "6694d16edfb46eb7e97649bf|916bca40-d7d6-d739-f30c-c5733bc85e98"
                          },
                          "value": {
                              "rotationY": 4.5,
                              "rotationZ": -0.5,
                              "rotationX": -0.6
                          }
                      }
                  }]
              }, {
                  "keyframe": 35,
                  "actionItems": [{
                      "id": "a-3-n-4",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "outQuint",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".image-2",
                              "selectorGuids": ["8488a61d-aa65-40dd-9e09-0831c35c3754"]
                          },
                          "yValue": -15,
                          "xUnit": "PX",
                          "yUnit": "vh",
                          "zUnit": "PX"
                      }
                  }, {
                      "id": "a-3-n-6",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "easeOut",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".order",
                              "selectorGuids": ["8686535a-0267-fca4-0ce7-90ca7ee1c07b"]
                          },
                          "yValue": 2,
                          "xUnit": "PX",
                          "yUnit": "vh",
                          "zUnit": "PX"
                      }
                  }]
              }]
          }],
          "createdOn": 1721205952050
      },
      "a-4": {
          "id": "a-4",
          "title": "03_scale fond",
          "continuousParameterGroups": [{
              "id": "a-4-p",
              "type": "SCROLL_PROGRESS",
              "parameterLabel": "Scroll",
              "continuousActionGroups": [{
                  "keyframe": 0,
                  "actionItems": [{
                      "id": "a-4-n",
                      "actionTypeId": "TRANSFORM_SCALE",
                      "config": {
                          "delay": 0,
                          "easing": "easeInOut",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".wapper_content._80",
                              "selectorGuids": ["15e2b604-0fa3-6a02-8244-ca59756dbdff", "ef3d6040-96b7-10fa-cfbc-65e41e8e10b2"]
                          },
                          "xValue": 0,
                          "yValue": 0,
                          "locked": true
                      }
                  }, {
                      "id": "a-4-n-5",
                      "actionTypeId": "TRANSFORM_ROTATE",
                      "config": {
                          "delay": 0,
                          "easing": "easeInOut",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".wapper_content._80",
                              "selectorGuids": ["15e2b604-0fa3-6a02-8244-ca59756dbdff", "ef3d6040-96b7-10fa-cfbc-65e41e8e10b2"]
                          },
                          "zValue": 0,
                          "xUnit": "DEG",
                          "yUnit": "DEG",
                          "zUnit": "deg"
                      }
                  }]
              }, {
                  "keyframe": 45,
                  "actionItems": [{
                      "id": "a-4-n-3",
                      "actionTypeId": "STYLE_TEXT_COLOR",
                      "config": {
                          "delay": 0,
                          "easing": "easeInOut",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".heading-2",
                              "selectorGuids": ["55ac6c0a-ed6e-6a85-a563-97f9223c8eda"]
                          },
                          "globalSwatchId": "--red_dark",
                          "rValue": 173,
                          "bValue": 0,
                          "gValue": 8,
                          "aValue": 1
                      }
                  }]
              }, {
                  "keyframe": 49,
                  "actionItems": [{
                      "id": "a-4-n-4",
                      "actionTypeId": "STYLE_TEXT_COLOR",
                      "config": {
                          "delay": 0,
                          "easing": "easeInOut",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".heading-2",
                              "selectorGuids": ["55ac6c0a-ed6e-6a85-a563-97f9223c8eda"]
                          },
                          "globalSwatchId": "--text_clair",
                          "rValue": 242,
                          "bValue": 191,
                          "gValue": 228,
                          "aValue": 1
                      }
                  }]
              }, {
                  "keyframe": 55,
                  "actionItems": [{
                      "id": "a-4-n-11",
                      "actionTypeId": "STYLE_TEXT_COLOR",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".paragraph-2",
                              "selectorGuids": ["3391d978-2e7f-d1c1-787d-5da4411e43ee"]
                          },
                          "globalSwatchId": "--red_dark",
                          "rValue": 173,
                          "bValue": 0,
                          "gValue": 8,
                          "aValue": 1
                      }
                  }]
              }, {
                  "keyframe": 56,
                  "actionItems": [{
                      "id": "a-4-n-2",
                      "actionTypeId": "TRANSFORM_SCALE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".wapper_content._80",
                              "selectorGuids": ["15e2b604-0fa3-6a02-8244-ca59756dbdff", "ef3d6040-96b7-10fa-cfbc-65e41e8e10b2"]
                          },
                          "xValue": 0.8,
                          "yValue": 0.8,
                          "locked": true
                      }
                  }, {
                      "id": "a-4-n-6",
                      "actionTypeId": "TRANSFORM_ROTATE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".wapper_content._80",
                              "selectorGuids": ["15e2b604-0fa3-6a02-8244-ca59756dbdff", "ef3d6040-96b7-10fa-cfbc-65e41e8e10b2"]
                          },
                          "zValue": -2,
                          "xUnit": "DEG",
                          "yUnit": "DEG",
                          "zUnit": "deg"
                      }
                  }]
              }, {
                  "keyframe": 65,
                  "actionItems": [{
                      "id": "a-4-n-7",
                      "actionTypeId": "TRANSFORM_SCALE",
                      "config": {
                          "delay": 0,
                          "easing": "easeOut",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".blcok_2vh",
                              "selectorGuids": ["a268edde-4220-67a9-b2dd-0bac5d7cf189"]
                          },
                          "xValue": 1,
                          "yValue": 0,
                          "locked": false
                      }
                  }, {
                      "id": "a-4-n-9",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".blcok_2vh",
                              "selectorGuids": ["a268edde-4220-67a9-b2dd-0bac5d7cf189"]
                          },
                          "xValue": 0,
                          "yValue": 111,
                          "xUnit": "px",
                          "yUnit": "px",
                          "zUnit": "PX"
                      }
                  }, {
                      "id": "a-4-n-12",
                      "actionTypeId": "STYLE_TEXT_COLOR",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".paragraph-2",
                              "selectorGuids": ["3391d978-2e7f-d1c1-787d-5da4411e43ee"]
                          },
                          "globalSwatchId": "--text_clair",
                          "rValue": 242,
                          "bValue": 191,
                          "gValue": 228,
                          "aValue": 1
                      }
                  }]
              }, {
                  "keyframe": 35,
                  "actionItems": [{
                      "id": "a-4-n-13",
                      "actionTypeId": "TRANSFORM_SCALE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".wapper_content._80",
                              "selectorGuids": ["15e2b604-0fa3-6a02-8244-ca59756dbdff", "ef3d6040-96b7-10fa-cfbc-65e41e8e10b2"]
                          },
                          "xValue": 0.8,
                          "yValue": 0.8,
                          "locked": true
                      }
                  }, {
                      "id": "a-4-n-15",
                      "actionTypeId": "TRANSFORM_ROTATE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".wapper_content._80",
                              "selectorGuids": ["15e2b604-0fa3-6a02-8244-ca59756dbdff", "ef3d6040-96b7-10fa-cfbc-65e41e8e10b2"]
                          },
                          "zValue": -2,
                          "xUnit": "DEG",
                          "yUnit": "DEG",
                          "zUnit": "deg"
                      }
                  }]
              }, {
                  "keyframe": 72,
                  "actionItems": [{
                      "id": "a-4-n-10",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".blcok_2vh",
                              "selectorGuids": ["a268edde-4220-67a9-b2dd-0bac5d7cf189"]
                          },
                          "xValue": 0,
                          "yValue": 0,
                          "xUnit": "px",
                          "yUnit": "px",
                          "zUnit": "PX"
                      }
                  }, {
                      "id": "a-4-n-8",
                      "actionTypeId": "TRANSFORM_SCALE",
                      "config": {
                          "delay": 0,
                          "easing": "easeOut",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".blcok_2vh",
                              "selectorGuids": ["a268edde-4220-67a9-b2dd-0bac5d7cf189"]
                          },
                          "xValue": 1,
                          "yValue": 1,
                          "locked": true
                      }
                  }]
              }, {
                  "keyframe": 80,
                  "actionItems": [{
                      "id": "a-4-n-14",
                      "actionTypeId": "TRANSFORM_SCALE",
                      "config": {
                          "delay": 0,
                          "easing": "easeInOut",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".wapper_content._80",
                              "selectorGuids": ["15e2b604-0fa3-6a02-8244-ca59756dbdff", "ef3d6040-96b7-10fa-cfbc-65e41e8e10b2"]
                          },
                          "xValue": 1,
                          "yValue": 1,
                          "locked": true
                      }
                  }, {
                      "id": "a-4-n-16",
                      "actionTypeId": "TRANSFORM_ROTATE",
                      "config": {
                          "delay": 0,
                          "easing": "easeInOut",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".wapper_content._80",
                              "selectorGuids": ["15e2b604-0fa3-6a02-8244-ca59756dbdff", "ef3d6040-96b7-10fa-cfbc-65e41e8e10b2"]
                          },
                          "zValue": 0,
                          "xUnit": "DEG",
                          "yUnit": "DEG",
                          "zUnit": "deg"
                      }
                  }]
              }]
          }],
          "createdOn": 1721211056445
      },
      "a-5": {
          "id": "a-5",
          "title": "04_mask-photo",
          "continuousParameterGroups": [{
              "id": "a-5-p",
              "type": "SCROLL_PROGRESS",
              "parameterLabel": "Scroll",
              "continuousActionGroups": [{
                  "keyframe": 30,
                  "actionItems": [{
                      "id": "a-5-n",
                      "actionTypeId": "STYLE_SIZE",
                      "config": {
                          "delay": 0,
                          "easing": "easeOut",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".mask-photo",
                              "selectorGuids": ["90c69932-021a-c026-dbc1-ac6f056d5dba"]
                          },
                          "widthValue": 2,
                          "heightValue": 35,
                          "widthUnit": "vw",
                          "heightUnit": "vw",
                          "locked": false
                      }
                  }, {
                      "id": "a-5-n-3",
                      "actionTypeId": "TRANSFORM_ROTATE",
                      "config": {
                          "delay": 0,
                          "easing": "easeOut",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".mask-photo",
                              "selectorGuids": ["90c69932-021a-c026-dbc1-ac6f056d5dba"]
                          },
                          "zValue": 0,
                          "xUnit": "DEG",
                          "yUnit": "DEG",
                          "zUnit": "deg"
                      }
                  }, {
                      "id": "a-5-n-5",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "easeOut",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".citation",
                              "selectorGuids": ["b1ac34ce-0686-b047-182c-fc2cdb5a6e57"]
                          },
                          "xValue": -14,
                          "xUnit": "vw",
                          "yUnit": "PX",
                          "zUnit": "PX"
                      }
                  }, {
                      "id": "a-5-n-7",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "easeOut",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".prenom",
                              "selectorGuids": ["fedf451e-d47b-6f0a-3d5f-99d706d10f41"]
                          },
                          "xValue": 5,
                          "xUnit": "vw",
                          "yUnit": "PX",
                          "zUnit": "PX"
                      }
                  }, {
                      "id": "a-5-n-16",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".metier",
                              "selectorGuids": ["db619687-d5f6-28e4-1c76-f06204917ed6"]
                          },
                          "yValue": 30,
                          "xUnit": "PX",
                          "yUnit": "vh",
                          "zUnit": "PX"
                      }
                  }, {
                      "id": "a-5-n-17",
                      "actionTypeId": "TRANSFORM_SCALE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".metier",
                              "selectorGuids": ["db619687-d5f6-28e4-1c76-f06204917ed6"]
                          },
                          "yValue": 1.25,
                          "locked": false
                      }
                  }]
              }, {
                  "keyframe": 40,
                  "actionItems": [{
                      "id": "a-5-n-13",
                      "actionTypeId": "STYLE_FONT_VARIATION",
                      "config": {
                          "delay": 0,
                          "easing": "easeOut",
                          "duration": 100,
                          "fontVariations": [{
                              "type": "wght",
                              "id": "7f84",
                              "value": 100
                          }],
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".metier",
                              "selectorGuids": ["db619687-d5f6-28e4-1c76-f06204917ed6"]
                          }
                      }
                  }]
              }, {
                  "keyframe": 50,
                  "actionItems": [{
                      "id": "a-5-n-2",
                      "actionTypeId": "STYLE_SIZE",
                      "config": {
                          "delay": 0,
                          "easing": "easeOut",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".mask-photo",
                              "selectorGuids": ["90c69932-021a-c026-dbc1-ac6f056d5dba"]
                          },
                          "widthValue": 28,
                          "heightValue": 35,
                          "widthUnit": "vw",
                          "heightUnit": "vw",
                          "locked": false
                      }
                  }, {
                      "id": "a-5-n-4",
                      "actionTypeId": "TRANSFORM_ROTATE",
                      "config": {
                          "delay": 0,
                          "easing": "easeOut",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".mask-photo",
                              "selectorGuids": ["90c69932-021a-c026-dbc1-ac6f056d5dba"]
                          },
                          "zValue": 5,
                          "xUnit": "DEG",
                          "yUnit": "DEG",
                          "zUnit": "deg"
                      }
                  }, {
                      "id": "a-5-n-6",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "easeOut",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".citation",
                              "selectorGuids": ["b1ac34ce-0686-b047-182c-fc2cdb5a6e57"]
                          },
                          "xValue": 0,
                          "xUnit": "vw",
                          "yUnit": "PX",
                          "zUnit": "PX"
                      }
                  }, {
                      "id": "a-5-n-8",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "easeOut",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".prenom",
                              "selectorGuids": ["fedf451e-d47b-6f0a-3d5f-99d706d10f41"]
                          },
                          "xValue": 0,
                          "xUnit": "vw",
                          "yUnit": "PX",
                          "zUnit": "PX"
                      }
                  }, {
                      "id": "a-5-n-15",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".metier",
                              "selectorGuids": ["db619687-d5f6-28e4-1c76-f06204917ed6"]
                          },
                          "yValue": 0,
                          "xUnit": "PX",
                          "yUnit": "vh",
                          "zUnit": "PX"
                      }
                  }, {
                      "id": "a-5-n-18",
                      "actionTypeId": "TRANSFORM_SCALE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".metier",
                              "selectorGuids": ["db619687-d5f6-28e4-1c76-f06204917ed6"]
                          },
                          "yValue": 1.25,
                          "locked": false
                      }
                  }]
              }, {
                  "keyframe": 55,
                  "actionItems": [{
                      "id": "a-5-n-14",
                      "actionTypeId": "STYLE_FONT_VARIATION",
                      "config": {
                          "delay": 0,
                          "easing": "easeOut",
                          "duration": 100,
                          "fontVariations": [{
                              "type": "wght",
                              "id": "4a6e",
                              "value": 835
                          }],
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".metier",
                              "selectorGuids": ["db619687-d5f6-28e4-1c76-f06204917ed6"]
                          }
                      }
                  }]
              }]
          }],
          "createdOn": 1721222969878
      },
      "a-6": {
          "id": "a-6",
          "title": "05_hover photo_1",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-6-n-3",
                  "actionTypeId": "TRANSFORM_SCALE",
                  "config": {
                      "delay": 0,
                      "easing": "outQuint",
                      "duration": 1000,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".image",
                          "selectorGuids": ["d9178241-59a9-6b09-2542-c28fd83e906c"]
                      },
                      "xValue": 1.2,
                      "yValue": 1.2,
                      "locked": true
                  }
              }, {
                  "id": "a-6-n-2",
                  "actionTypeId": "STYLE_FILTER",
                  "config": {
                      "delay": 0,
                      "easing": "outQuint",
                      "duration": 1000,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".image",
                          "selectorGuids": ["d9178241-59a9-6b09-2542-c28fd83e906c"]
                      },
                      "filters": [{
                          "type": "saturate",
                          "filterId": "4909",
                          "value": 0,
                          "unit": "%"
                      }]
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1721224531084
      },
      "a-7": {
          "id": "a-7",
          "title": "05_hover_photo 1_out",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-7-n",
                  "actionTypeId": "TRANSFORM_SCALE",
                  "config": {
                      "delay": 0,
                      "easing": "outQuint",
                      "duration": 1000,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".image",
                          "selectorGuids": ["d9178241-59a9-6b09-2542-c28fd83e906c"]
                      },
                      "xValue": 1,
                      "yValue": 1,
                      "locked": true
                  }
              }, {
                  "id": "a-7-n-3",
                  "actionTypeId": "STYLE_FILTER",
                  "config": {
                      "delay": 0,
                      "easing": "outQuint",
                      "duration": 100,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".image",
                          "selectorGuids": ["d9178241-59a9-6b09-2542-c28fd83e906c"]
                      },
                      "filters": [{
                          "type": "saturate",
                          "filterId": "d5a4",
                          "value": 100,
                          "unit": "%"
                      }]
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1721224885743
      },
      "a-8": {
          "id": "a-8",
          "title": "05_scale_text",
          "continuousParameterGroups": [{
              "id": "a-8-p",
              "type": "SCROLL_PROGRESS",
              "parameterLabel": "Scroll",
              "continuousActionGroups": [{
                  "keyframe": 0,
                  "actionItems": [{
                      "id": "a-8-n",
                      "actionTypeId": "TRANSFORM_SCALE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".paragraph-4",
                              "selectorGuids": ["1d42a718-1b66-13dc-88c2-dc07ff2c649c"]
                          },
                          "xValue": 0.4,
                          "yValue": 0.4,
                          "locked": true
                      }
                  }, {
                      "id": "a-8-n-3",
                      "actionTypeId": "STYLE_TEXT_COLOR",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".paragraph-4",
                              "selectorGuids": ["1d42a718-1b66-13dc-88c2-dc07ff2c649c"]
                          },
                          "globalSwatchId": "--red_dark",
                          "rValue": 173,
                          "bValue": 0,
                          "gValue": 8,
                          "aValue": 1
                      }
                  }]
              }, {
                  "keyframe": 40,
                  "actionItems": [{
                      "id": "a-8-n-2",
                      "actionTypeId": "TRANSFORM_SCALE",
                      "config": {
                          "delay": 0,
                          "easing": "ease",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".paragraph-4",
                              "selectorGuids": ["1d42a718-1b66-13dc-88c2-dc07ff2c649c"]
                          },
                          "xValue": 1,
                          "yValue": 1,
                          "locked": true
                      }
                  }, {
                      "id": "a-8-n-4",
                      "actionTypeId": "STYLE_TEXT_COLOR",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".paragraph-4",
                              "selectorGuids": ["1d42a718-1b66-13dc-88c2-dc07ff2c649c"]
                          },
                          "globalSwatchId": "--yellow",
                          "rValue": 255,
                          "bValue": 0,
                          "gValue": 231,
                          "aValue": 1
                      }
                  }]
              }]
          }],
          "createdOn": 1721913249739
      },
      "a-9": {
          "id": "a-9",
          "title": "hover_top",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-9-n",
                  "actionTypeId": "TRANSFORM_SCALE",
                  "config": {
                      "delay": 0,
                      "easing": "outQuint",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".div-block-7",
                          "selectorGuids": ["592ca3d0-3f44-e328-52f8-d69f779ea216"]
                      },
                      "xValue": 1.2,
                      "yValue": 1.2,
                      "locked": true
                  }
              }, {
                  "id": "a-9-n-3",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "outQuint",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".div-block-7",
                          "selectorGuids": ["592ca3d0-3f44-e328-52f8-d69f779ea216"]
                      },
                      "globalSwatchId": "--red",
                      "rValue": 237,
                      "bValue": 11,
                      "gValue": 22,
                      "aValue": 1
                  }
              }, {
                  "id": "a-9-n-2",
                  "actionTypeId": "TRANSFORM_SCALE",
                  "config": {
                      "delay": 0,
                      "easing": "outQuint",
                      "duration": 100,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".image-6",
                          "selectorGuids": ["4ce47a18-d185-de37-80a1-e65ec696dbcc"]
                      },
                      "xValue": 0.8,
                      "yValue": 0.8,
                      "locked": true
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1721923562033
      },
      "a-10": {
          "id": "a-10",
          "title": "hover_top OUT",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-10-n",
                  "actionTypeId": "TRANSFORM_SCALE",
                  "config": {
                      "delay": 0,
                      "easing": "outQuint",
                      "duration": 400,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".div-block-7",
                          "selectorGuids": ["592ca3d0-3f44-e328-52f8-d69f779ea216"]
                      },
                      "xValue": 1,
                      "yValue": 1,
                      "locked": true
                  }
              }, {
                  "id": "a-10-n-2",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "outQuint",
                      "duration": 400,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".div-block-7",
                          "selectorGuids": ["592ca3d0-3f44-e328-52f8-d69f779ea216"]
                      },
                      "globalSwatchId": "--text_clair",
                      "rValue": 242,
                      "bValue": 191,
                      "gValue": 228,
                      "aValue": 1
                  }
              }, {
                  "id": "a-10-n-3",
                  "actionTypeId": "TRANSFORM_SCALE",
                  "config": {
                      "delay": 0,
                      "easing": "outQuint",
                      "duration": 400,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".image-6",
                          "selectorGuids": ["4ce47a18-d185-de37-80a1-e65ec696dbcc"]
                      },
                      "xValue": 1,
                      "yValue": 1,
                      "locked": true
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1721923562033
      },
      "a-11": {
          "id": "a-11",
          "title": "about_hero",
          "continuousParameterGroups": [{
              "id": "a-11-p",
              "type": "SCROLL_PROGRESS",
              "parameterLabel": "Scroll",
              "continuousActionGroups": [{
                  "keyframe": 0,
                  "actionItems": [{
                      "id": "a-11-n-3",
                      "actionTypeId": "TRANSFORM_SCALE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 50,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".photo_lomanized",
                              "selectorGuids": ["ab8280a3-54e1-3843-8562-46149e635255"]
                          },
                          "xValue": 1.5,
                          "yValue": 1.5,
                          "locked": true
                      }
                  }, {
                      "id": "a-11-n",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 50,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".photo_lomanized",
                              "selectorGuids": ["ab8280a3-54e1-3843-8562-46149e635255"]
                          },
                          "xValue": 5,
                          "yValue": -18,
                          "xUnit": "vw",
                          "yUnit": "vh",
                          "zUnit": "PX"
                      }
                  }]
              }, {
                  "keyframe": 11,
                  "actionItems": [{
                      "id": "a-11-n-5",
                      "actionTypeId": "TRANSFORM_SCALE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": "._1963",
                              "selectorGuids": ["ad4b9c0b-2876-728a-5065-b49677f97a45"]
                          },
                          "xValue": 1,
                          "yValue": 1,
                          "locked": true
                      }
                  }]
              }, {
                  "keyframe": 35,
                  "actionItems": [{
                      "id": "a-11-n-2",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 50,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".photo_lomanized",
                              "selectorGuids": ["ab8280a3-54e1-3843-8562-46149e635255"]
                          },
                          "xValue": 0,
                          "yValue": 0,
                          "xUnit": "vw",
                          "yUnit": "vh",
                          "zUnit": "PX"
                      }
                  }, {
                      "id": "a-11-n-4",
                      "actionTypeId": "TRANSFORM_SCALE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 50,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".photo_lomanized",
                              "selectorGuids": ["ab8280a3-54e1-3843-8562-46149e635255"]
                          },
                          "xValue": 1,
                          "yValue": 1,
                          "locked": true
                      }
                  }, {
                      "id": "a-11-n-6",
                      "actionTypeId": "TRANSFORM_SCALE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": "._1963",
                              "selectorGuids": ["ad4b9c0b-2876-728a-5065-b49677f97a45"]
                          },
                          "xValue": 0.9,
                          "yValue": 0.9,
                          "locked": true
                      }
                  }]
              }, {
                  "keyframe": 50,
                  "actionItems": [{
                      "id": "a-11-n-8",
                      "actionTypeId": "STYLE_OPACITY",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".fond_about",
                              "selectorGuids": ["dd85f284-77ec-de9f-52cf-4783c8ed0049"]
                          },
                          "value": 0,
                          "unit": ""
                      }
                  }]
              }, {
                  "keyframe": 55,
                  "actionItems": [{
                      "id": "a-11-n-11",
                      "actionTypeId": "TRANSFORM_SCALE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": "._1963",
                              "selectorGuids": ["ad4b9c0b-2876-728a-5065-b49677f97a45"]
                          },
                          "xValue": 0.9,
                          "yValue": 0.9,
                          "locked": true
                      }
                  }, {
                      "id": "a-11-n-13",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": "._1963",
                              "selectorGuids": ["ad4b9c0b-2876-728a-5065-b49677f97a45"]
                          },
                          "yValue": 0,
                          "xUnit": "PX",
                          "yUnit": "vh",
                          "zUnit": "PX"
                      }
                  }]
              }, {
                  "keyframe": 60,
                  "actionItems": [{
                      "id": "a-11-n-7",
                      "actionTypeId": "STYLE_OPACITY",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".fond_about",
                              "selectorGuids": ["dd85f284-77ec-de9f-52cf-4783c8ed0049"]
                          },
                          "value": 1,
                          "unit": ""
                      }
                  }]
              }, {
                  "keyframe": 65,
                  "actionItems": [{
                      "id": "a-11-n-15",
                      "actionTypeId": "STYLE_OPACITY",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".photo_papa",
                              "selectorGuids": ["0d33beac-72a7-3fa7-7baf-3fb9f4977b19"]
                          },
                          "value": 1,
                          "unit": ""
                      }
                  }]
              }, {
                  "keyframe": 35,
                  "actionItems": [{
                      "id": "a-11-n-9",
                      "actionTypeId": "STYLE_OPACITY",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".fond_about",
                              "selectorGuids": ["dd85f284-77ec-de9f-52cf-4783c8ed0049"]
                          },
                          "value": 1,
                          "unit": ""
                      }
                  }, {
                      "id": "a-11-n-12",
                      "actionTypeId": "TRANSFORM_SCALE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": "._1963",
                              "selectorGuids": ["ad4b9c0b-2876-728a-5065-b49677f97a45"]
                          },
                          "xValue": 0.79,
                          "yValue": 0.79,
                          "locked": true
                      }
                  }, {
                      "id": "a-11-n-14",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": "._1963",
                              "selectorGuids": ["ad4b9c0b-2876-728a-5065-b49677f97a45"]
                          },
                          "yValue": -115,
                          "xUnit": "PX",
                          "yUnit": "vh",
                          "zUnit": "PX"
                      }
                  }]
              }, {
                  "keyframe": 75,
                  "actionItems": [{
                      "id": "a-11-n-16",
                      "actionTypeId": "STYLE_OPACITY",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".photo_papa",
                              "selectorGuids": ["0d33beac-72a7-3fa7-7baf-3fb9f4977b19"]
                          },
                          "value": 0,
                          "unit": ""
                      }
                  }]
              }, {
                  "keyframe": 80,
                  "actionItems": [{
                      "id": "a-11-n-10",
                      "actionTypeId": "STYLE_OPACITY",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".fond_about",
                              "selectorGuids": ["dd85f284-77ec-de9f-52cf-4783c8ed0049"]
                          },
                          "value": 0,
                          "unit": ""
                      }
                  }, {
                      "id": "a-11-n-17",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".note",
                              "selectorGuids": ["2b5468b4-f177-5fca-0ac1-13e89c9e2f02"]
                          },
                          "xValue": 0,
                          "xUnit": "vw",
                          "yUnit": "PX",
                          "zUnit": "PX"
                      }
                  }, {
                      "id": "a-11-n-19",
                      "actionTypeId": "TRANSFORM_ROTATE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".note",
                              "selectorGuids": ["2b5468b4-f177-5fca-0ac1-13e89c9e2f02"]
                          },
                          "zValue": 20,
                          "xUnit": "DEG",
                          "yUnit": "DEG",
                          "zUnit": "deg"
                      }
                  }]
              }, {
                  "keyframe": 55,
                  "actionItems": [{
                      "id": "a-11-n-22",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".photo_lomanized",
                              "selectorGuids": ["ab8280a3-54e1-3843-8562-46149e635255"]
                          },
                          "xValue": 0,
                          "yValue": 0,
                          "xUnit": "vw",
                          "yUnit": "vh",
                          "zUnit": "PX"
                      }
                  }, {
                      "id": "a-11-n-23",
                      "actionTypeId": "TRANSFORM_SCALE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".photo_lomanized",
                              "selectorGuids": ["ab8280a3-54e1-3843-8562-46149e635255"]
                          },
                          "xValue": 1,
                          "yValue": 1,
                          "locked": true
                      }
                  }]
              }, {
                  "keyframe": 90,
                  "actionItems": [{
                      "id": "a-11-n-18",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".note",
                              "selectorGuids": ["2b5468b4-f177-5fca-0ac1-13e89c9e2f02"]
                          },
                          "xValue": 50,
                          "xUnit": "vw",
                          "yUnit": "PX",
                          "zUnit": "PX"
                      }
                  }, {
                      "id": "a-11-n-20",
                      "actionTypeId": "TRANSFORM_ROTATE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".note",
                              "selectorGuids": ["2b5468b4-f177-5fca-0ac1-13e89c9e2f02"]
                          },
                          "zValue": 0,
                          "xUnit": "DEG",
                          "yUnit": "DEG",
                          "zUnit": "deg"
                      }
                  }]
              }, {
                  "keyframe": 100,
                  "actionItems": [{
                      "id": "a-11-n-24",
                      "actionTypeId": "TRANSFORM_SCALE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".photo_lomanized",
                              "selectorGuids": ["ab8280a3-54e1-3843-8562-46149e635255"]
                          },
                          "xValue": 1.5,
                          "yValue": 1.5,
                          "locked": true
                      }
                  }, {
                      "id": "a-11-n-25",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".photo_lomanized",
                              "selectorGuids": ["ab8280a3-54e1-3843-8562-46149e635255"]
                          },
                          "xValue": -22,
                          "yValue": -18,
                          "xUnit": "vw",
                          "yUnit": "vh",
                          "zUnit": "PX"
                      }
                  }]
              }]
          }],
          "createdOn": 1722259987246
      },
      "a-12": {
          "id": "a-12",
          "title": "07_hero2",
          "continuousParameterGroups": [{
              "id": "a-12-p",
              "type": "SCROLL_PROGRESS",
              "parameterLabel": "Scroll",
              "continuousActionGroups": [{
                  "keyframe": 40,
                  "actionItems": [{
                      "id": "a-12-n-3",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".image-9",
                              "selectorGuids": ["725d74c4-c524-a96f-f22e-5dba140c2213"]
                          },
                          "yValue": 10,
                          "xUnit": "PX",
                          "yUnit": "vh",
                          "zUnit": "PX"
                      }
                  }, {
                      "id": "a-12-n-7",
                      "actionTypeId": "STYLE_OPACITY",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".image-9",
                              "selectorGuids": ["725d74c4-c524-a96f-f22e-5dba140c2213"]
                          },
                          "value": 0,
                          "unit": ""
                      }
                  }]
              }, {
                  "keyframe": 45,
                  "actionItems": [{
                      "id": "a-12-n",
                      "actionTypeId": "TRANSFORM_SCALE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".image-7",
                              "selectorGuids": ["6fd2c219-21c9-c193-5ddc-57749708c8d1"]
                          },
                          "xValue": 0,
                          "yValue": 0,
                          "locked": true
                      }
                  }]
              }, {
                  "keyframe": 50,
                  "actionItems": [{
                      "id": "a-12-n-4",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".image-9",
                              "selectorGuids": ["725d74c4-c524-a96f-f22e-5dba140c2213"]
                          },
                          "yValue": 0,
                          "xUnit": "PX",
                          "yUnit": "vh",
                          "zUnit": "PX"
                      }
                  }, {
                      "id": "a-12-n-8",
                      "actionTypeId": "STYLE_OPACITY",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".image-9",
                              "selectorGuids": ["725d74c4-c524-a96f-f22e-5dba140c2213"]
                          },
                          "value": 1,
                          "unit": ""
                      }
                  }]
              }, {
                  "keyframe": 55,
                  "actionItems": [{
                      "id": "a-12-n-5",
                      "actionTypeId": "TRANSFORM_SCALE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".image-8",
                              "selectorGuids": ["9b7ddf85-6b11-da7f-6653-0f740fcb40e6"]
                          },
                          "xValue": 0,
                          "yValue": 0,
                          "locked": true
                      }
                  }]
              }, {
                  "keyframe": 65,
                  "actionItems": [{
                      "id": "a-12-n-2",
                      "actionTypeId": "TRANSFORM_SCALE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".image-7",
                              "selectorGuids": ["6fd2c219-21c9-c193-5ddc-57749708c8d1"]
                          },
                          "xValue": 1,
                          "yValue": 1,
                          "locked": true
                      }
                  }]
              }, {
                  "keyframe": 75,
                  "actionItems": [{
                      "id": "a-12-n-6",
                      "actionTypeId": "TRANSFORM_SCALE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".image-8",
                              "selectorGuids": ["9b7ddf85-6b11-da7f-6653-0f740fcb40e6"]
                          },
                          "xValue": 1,
                          "yValue": 1,
                          "locked": true
                      }
                  }]
              }]
          }],
          "createdOn": 1722267554175
      },
      "a-13": {
          "id": "a-13",
          "title": "08_hero3",
          "continuousParameterGroups": [{
              "id": "a-13-p",
              "type": "SCROLL_PROGRESS",
              "parameterLabel": "Scroll",
              "continuousActionGroups": [{
                  "keyframe": 0,
                  "actionItems": [{
                      "id": "a-13-n",
                      "actionTypeId": "TRANSFORM_ROTATE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".mask_photo_about.p3b",
                              "selectorGuids": ["2e92636e-a766-8454-c358-23fbf7a1fe33", "6c174a40-ce6a-7cdb-1d8e-a24cadb62624"]
                          },
                          "zValue": 25,
                          "xUnit": "DEG",
                          "yUnit": "DEG",
                          "zUnit": "deg"
                      }
                  }, {
                      "id": "a-13-n-3",
                      "actionTypeId": "TRANSFORM_ROTATE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".mask_photo_about.p2",
                              "selectorGuids": ["2e92636e-a766-8454-c358-23fbf7a1fe33", "b3f0e791-3626-da9b-de83-c73d8b86b993"]
                          },
                          "zValue": -20,
                          "xUnit": "DEG",
                          "yUnit": "DEG",
                          "zUnit": "deg"
                      }
                  }, {
                      "id": "a-13-n-5",
                      "actionTypeId": "TRANSFORM_ROTATE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".mask_photo_about.p3",
                              "selectorGuids": ["2e92636e-a766-8454-c358-23fbf7a1fe33", "bed57faf-a16f-98a8-fc73-303e88b22612"]
                          },
                          "zValue": 5,
                          "xUnit": "DEG",
                          "yUnit": "DEG",
                          "zUnit": "deg"
                      }
                  }, {
                      "id": "a-13-n-25",
                      "actionTypeId": "TRANSFORM_ROTATE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".image-10-pad.p3b",
                              "selectorGuids": ["49f33f25-d153-c0e0-5481-eec2edd759cc", "f6290690-8270-59f7-efae-b1adfdfaaf57"]
                          },
                          "zValue": 0,
                          "xUnit": "DEG",
                          "yUnit": "DEG",
                          "zUnit": "deg"
                      }
                  }]
              }, {
                  "keyframe": 35,
                  "actionItems": [{
                      "id": "a-13-n-13",
                      "actionTypeId": "STYLE_SIZE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".mask_photo_about.p3b",
                              "selectorGuids": ["2e92636e-a766-8454-c358-23fbf7a1fe33", "6c174a40-ce6a-7cdb-1d8e-a24cadb62624"]
                          },
                          "widthValue": 0,
                          "heightValue": 18,
                          "widthUnit": "vw",
                          "heightUnit": "vw",
                          "locked": false
                      }
                  }]
              }, {
                  "keyframe": 38,
                  "actionItems": [{
                      "id": "a-13-n-15",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".whoami",
                              "selectorGuids": ["2243109a-9d2d-16ff-458a-7807bedee821"]
                          },
                          "xValue": 0,
                          "yValue": 5,
                          "zValue": 0,
                          "xUnit": "px",
                          "yUnit": "vh",
                          "zUnit": "px"
                      }
                  }, {
                      "id": "a-13-n-17",
                      "actionTypeId": "STYLE_OPACITY",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".whoami",
                              "selectorGuids": ["2243109a-9d2d-16ff-458a-7807bedee821"]
                          },
                          "value": 0,
                          "unit": ""
                      }
                  }]
              }, {
                  "keyframe": 40,
                  "actionItems": [{
                      "id": "a-13-n-19",
                      "actionTypeId": "TRANSFORM_SCALE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".flash",
                              "selectorGuids": ["9e503de8-d6e8-b0c1-db50-617d5587b644"]
                          },
                          "xValue": 0,
                          "yValue": 0,
                          "locked": true
                      }
                  }, {
                      "id": "a-13-n-21",
                      "actionTypeId": "TRANSFORM_ROTATE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".flash",
                              "selectorGuids": ["9e503de8-d6e8-b0c1-db50-617d5587b644"]
                          },
                          "zValue": 180,
                          "xUnit": "DEG",
                          "yUnit": "DEG",
                          "zUnit": "deg"
                      }
                  }, {
                      "id": "a-13-n-14",
                      "actionTypeId": "STYLE_SIZE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".mask_photo_about.p3b",
                              "selectorGuids": ["2e92636e-a766-8454-c358-23fbf7a1fe33", "6c174a40-ce6a-7cdb-1d8e-a24cadb62624"]
                          },
                          "widthValue": 12,
                          "heightValue": 18,
                          "widthUnit": "vw",
                          "heightUnit": "vw",
                          "locked": false
                      }
                  }]
              }, {
                  "keyframe": 42,
                  "actionItems": [{
                      "id": "a-13-n-16",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".whoami",
                              "selectorGuids": ["2243109a-9d2d-16ff-458a-7807bedee821"]
                          },
                          "xValue": 0,
                          "yValue": 2,
                          "zValue": 0,
                          "xUnit": "px",
                          "yUnit": "vh",
                          "zUnit": "px"
                      }
                  }, {
                      "id": "a-13-n-18",
                      "actionTypeId": "STYLE_OPACITY",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".whoami",
                              "selectorGuids": ["2243109a-9d2d-16ff-458a-7807bedee821"]
                          },
                          "value": 1,
                          "unit": ""
                      }
                  }]
              }, {
                  "keyframe": 45,
                  "actionItems": [{
                      "id": "a-13-n-9",
                      "actionTypeId": "STYLE_SIZE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".mask_photo_about.p2",
                              "selectorGuids": ["2e92636e-a766-8454-c358-23fbf7a1fe33", "b3f0e791-3626-da9b-de83-c73d8b86b993"]
                          },
                          "widthValue": 0,
                          "heightValue": 14,
                          "widthUnit": "vw",
                          "heightUnit": "vw",
                          "locked": false
                      }
                  }, {
                      "id": "a-13-n-20",
                      "actionTypeId": "TRANSFORM_SCALE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".flash",
                              "selectorGuids": ["9e503de8-d6e8-b0c1-db50-617d5587b644"]
                          },
                          "xValue": 1,
                          "yValue": 1,
                          "locked": true
                      }
                  }, {
                      "id": "a-13-n-27",
                      "actionTypeId": "TRANSFORM_SCALE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".image-10-pad.p3b",
                              "selectorGuids": ["49f33f25-d153-c0e0-5481-eec2edd759cc", "f6290690-8270-59f7-efae-b1adfdfaaf57"]
                          },
                          "xValue": 0,
                          "yValue": 0,
                          "locked": true
                      }
                  }]
              }, {
                  "keyframe": 50,
                  "actionItems": [{
                      "id": "a-13-n-22",
                      "actionTypeId": "TRANSFORM_ROTATE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".flash",
                              "selectorGuids": ["9e503de8-d6e8-b0c1-db50-617d5587b644"]
                          },
                          "zValue": 180,
                          "xUnit": "DEG",
                          "yUnit": "DEG",
                          "zUnit": "deg"
                      }
                  }]
              }, {
                  "keyframe": 55,
                  "actionItems": [{
                      "id": "a-13-n-10",
                      "actionTypeId": "STYLE_SIZE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".mask_photo_about.p2",
                              "selectorGuids": ["2e92636e-a766-8454-c358-23fbf7a1fe33", "b3f0e791-3626-da9b-de83-c73d8b86b993"]
                          },
                          "widthValue": 12,
                          "heightValue": 14,
                          "widthUnit": "vw",
                          "heightUnit": "vw",
                          "locked": false
                      }
                  }, {
                      "id": "a-13-n-7",
                      "actionTypeId": "STYLE_SIZE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".mask_photo_about.p3",
                              "selectorGuids": ["2e92636e-a766-8454-c358-23fbf7a1fe33", "bed57faf-a16f-98a8-fc73-303e88b22612"]
                          },
                          "widthValue": 0,
                          "heightValue": 14,
                          "widthUnit": "vw",
                          "heightUnit": "vw",
                          "locked": false
                      }
                  }, {
                      "id": "a-13-n-28",
                      "actionTypeId": "TRANSFORM_SCALE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".image-10-pad.p3b",
                              "selectorGuids": ["49f33f25-d153-c0e0-5481-eec2edd759cc", "f6290690-8270-59f7-efae-b1adfdfaaf57"]
                          },
                          "xValue": 1,
                          "yValue": 1,
                          "locked": true
                      }
                  }, {
                      "id": "a-13-n-26",
                      "actionTypeId": "TRANSFORM_ROTATE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".image-10-pad.p3b",
                              "selectorGuids": ["49f33f25-d153-c0e0-5481-eec2edd759cc", "f6290690-8270-59f7-efae-b1adfdfaaf57"]
                          },
                          "zValue": 5,
                          "xUnit": "DEG",
                          "yUnit": "DEG",
                          "zUnit": "deg"
                      }
                  }]
              }, {
                  "keyframe": 60,
                  "actionItems": [{
                      "id": "a-13-n-8",
                      "actionTypeId": "STYLE_SIZE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".mask_photo_about.p3",
                              "selectorGuids": ["2e92636e-a766-8454-c358-23fbf7a1fe33", "bed57faf-a16f-98a8-fc73-303e88b22612"]
                          },
                          "widthValue": 8,
                          "heightValue": 14,
                          "widthUnit": "vw",
                          "heightUnit": "vw",
                          "locked": false
                      }
                  }]
              }, {
                  "keyframe": 75,
                  "actionItems": [{
                      "id": "a-13-n-23",
                      "actionTypeId": "STYLE_OPACITY",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".transi_fond",
                              "selectorGuids": ["f44fca45-b5c6-1df0-7269-14c0d364ca2f"]
                          },
                          "value": 0,
                          "unit": ""
                      }
                  }]
              }, {
                  "keyframe": 80,
                  "actionItems": [{
                      "id": "a-13-n-24",
                      "actionTypeId": "STYLE_OPACITY",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".transi_fond",
                              "selectorGuids": ["f44fca45-b5c6-1df0-7269-14c0d364ca2f"]
                          },
                          "value": 0,
                          "unit": ""
                      }
                  }]
              }, {
                  "keyframe": 100,
                  "actionItems": [{
                      "id": "a-13-n-2",
                      "actionTypeId": "TRANSFORM_ROTATE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".mask_photo_about.p3b",
                              "selectorGuids": ["2e92636e-a766-8454-c358-23fbf7a1fe33", "6c174a40-ce6a-7cdb-1d8e-a24cadb62624"]
                          },
                          "zValue": 25,
                          "xUnit": "DEG",
                          "yUnit": "DEG",
                          "zUnit": "deg"
                      }
                  }, {
                      "id": "a-13-n-4",
                      "actionTypeId": "TRANSFORM_ROTATE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".mask_photo_about.p2",
                              "selectorGuids": ["2e92636e-a766-8454-c358-23fbf7a1fe33", "b3f0e791-3626-da9b-de83-c73d8b86b993"]
                          },
                          "zValue": -20,
                          "xUnit": "DEG",
                          "yUnit": "DEG",
                          "zUnit": "deg"
                      }
                  }, {
                      "id": "a-13-n-6",
                      "actionTypeId": "TRANSFORM_ROTATE",
                      "config": {
                          "delay": 0,
                          "easing": "",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".mask_photo_about.p3",
                              "selectorGuids": ["2e92636e-a766-8454-c358-23fbf7a1fe33", "bed57faf-a16f-98a8-fc73-303e88b22612"]
                          },
                          "zValue": 5,
                          "xUnit": "DEG",
                          "yUnit": "DEG",
                          "zUnit": "deg"
                      }
                  }]
              }]
          }],
          "createdOn": 1722354547040
      },
      "a-14": {
          "id": "a-14",
          "title": "02_LIVRE_3D about",
          "continuousParameterGroups": [{
              "id": "a-14-p",
              "type": "SCROLL_PROGRESS",
              "parameterLabel": "Scroll",
              "continuousActionGroups": [{
                  "keyframe": 50,
                  "actionItems": [{
                      "id": "a-14-n",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "outQuint",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".image-2",
                              "selectorGuids": ["8488a61d-aa65-40dd-9e09-0831c35c3754"]
                          },
                          "yValue": 200,
                          "xUnit": "PX",
                          "yUnit": "vh",
                          "zUnit": "PX"
                      }
                  }, {
                      "id": "a-14-n-2",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "outQuint",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".div-block-6",
                              "selectorGuids": ["edca97ee-cca7-8a16-9546-b746552e9e5c"]
                          },
                          "yValue": 20,
                          "xUnit": "PX",
                          "yUnit": "vh",
                          "zUnit": "PX"
                      }
                  }]
              }, {
                  "keyframe": 25,
                  "actionItems": [{
                      "id": "a-14-n-3",
                      "actionTypeId": "PLUGIN_SPLINE",
                      "config": {
                          "delay": 0,
                          "easing": "easeIn",
                          "duration": 100,
                          "target": {
                              "pluginElement": "e7afca7f-8f10-f490-931c-09875f345dba",
                              "objectId": "ebeda241-dec7-4c9d-b9d6-7ee1a2bd06ad",
                              "useEventTarget": "CHILDREN",
                              "id": "66a7624265148801a91022c8|e7afca7f-8f10-f490-931c-09875f345dba"
                          },
                          "value": {
                              "rotationX": -0.6,
                              "rotationY": 1.2,
                              "rotationZ": 3.6
                          }
                      }
                  }]
              }, {
                  "keyframe": 35,
                  "actionItems": [{
                      "id": "a-14-n-4",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "easeIn",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".order",
                              "selectorGuids": ["8686535a-0267-fca4-0ce7-90ca7ee1c07b"]
                          },
                          "yValue": 100,
                          "xUnit": "PX",
                          "yUnit": "vh",
                          "zUnit": "PX"
                      }
                  }, {
                      "id": "a-14-n-5",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "outQuint",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".div-block-6",
                              "selectorGuids": ["edca97ee-cca7-8a16-9546-b746552e9e5c"]
                          },
                          "yValue": 0,
                          "xUnit": "PX",
                          "yUnit": "vh",
                          "zUnit": "PX"
                      }
                  }]
              }, {
                  "keyframe": 35,
                  "actionItems": [{
                      "id": "a-14-n-6",
                      "actionTypeId": "PLUGIN_SPLINE",
                      "config": {
                          "delay": 0,
                          "easing": "easeOut",
                          "duration": 100,
                          "target": {
                              "pluginElement": "e7afca7f-8f10-f490-931c-09875f345dba",
                              "objectId": "ebeda241-dec7-4c9d-b9d6-7ee1a2bd06ad",
                              "useEventTarget": "CHILDREN",
                              "id": "66a7624265148801a91022c8|e7afca7f-8f10-f490-931c-09875f345dba"
                          },
                          "value": {
                              "rotationY": 4.5,
                              "rotationZ": -0.5,
                              "rotationX": -0.6
                          }
                      }
                  }]
              }, {
                  "keyframe": 75,
                  "actionItems": [{
                      "id": "a-14-n-7",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "outQuint",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".image-2",
                              "selectorGuids": ["8488a61d-aa65-40dd-9e09-0831c35c3754"]
                          },
                          "yValue": -15,
                          "xUnit": "PX",
                          "yUnit": "vh",
                          "zUnit": "PX"
                      }
                  }, {
                      "id": "a-14-n-8",
                      "actionTypeId": "TRANSFORM_MOVE",
                      "config": {
                          "delay": 0,
                          "easing": "easeOut",
                          "duration": 100,
                          "target": {
                              "useEventTarget": "CHILDREN",
                              "selector": ".order",
                              "selectorGuids": ["8686535a-0267-fca4-0ce7-90ca7ee1c07b"]
                          },
                          "yValue": 2,
                          "xUnit": "PX",
                          "yUnit": "vh",
                          "zUnit": "PX"
                      }
                  }]
              }]
          }],
          "createdOn": 1721205952050
      },
      "a-16": {
          "id": "a-16",
          "title": "07_hover-text photo",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-16-n",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 100,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "id": "66a7624265148801a91022c8|d46c989f-72e7-7cd6-d54f-1a8943aafe1f"
                      },
                      "value": "block"
                  }
              }, {
                  "id": "a-16-n-2",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 200,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "id": "66a7624265148801a91022c8|d5dc7b63-fbc5-0761-a0e7-476f8841c895"
                      },
                      "value": "block"
                  }
              }, {
                  "id": "a-16-n-3",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 300,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "id": "66a7624265148801a91022c8|27b6a4b3-caca-e2e5-3cac-249a79ba9f8f"
                      },
                      "value": "block"
                  }
              }, {
                  "id": "a-16-n-4",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 400,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "id": "66a7624265148801a91022c8|fe8c7cc4-8ec2-6001-54e3-091645f8c52d"
                      },
                      "value": "block"
                  }
              }, {
                  "id": "a-16-n-5",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 500,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "id": "66a7624265148801a91022c8|c0349e7c-46e2-b579-7122-10ce50e54d6a"
                      },
                      "value": "block"
                  }
              }, {
                  "id": "a-16-n-6",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 600,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "id": "66a7624265148801a91022c8|b40032ab-b9e5-8e2e-31f5-38ef68dbb57a"
                      },
                      "value": "block"
                  }
              }, {
                  "id": "a-16-n-8",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 700,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "id": "66a7624265148801a91022c8|a3d0f960-9dd1-aae4-8bcb-6b642f36830a"
                      },
                      "value": "block"
                  }
              }, {
                  "id": "a-16-n-9",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 800,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "id": "66a7624265148801a91022c8|bd837375-ab88-0ae1-248b-827636a75958"
                      },
                      "value": "block"
                  }
              }, {
                  "id": "a-16-n-10",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 900,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "id": "66a7624265148801a91022c8|fcb443aa-94ba-e294-1e44-61fa0900d737"
                      },
                      "value": "block"
                  }
              }, {
                  "id": "a-16-n-11",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 1000,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "id": "66a7624265148801a91022c8|9c6294b8-549c-a69b-abd1-f333586bff20"
                      },
                      "value": "block"
                  }
              }, {
                  "id": "a-16-n-12",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 1100,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "id": "66a7624265148801a91022c8|07b5aea7-c0a1-029e-0a7f-73db3876e272"
                      },
                      "value": "block"
                  }
              }, {
                  "id": "a-16-n-13",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 1200,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "id": "66a7624265148801a91022c8|5dbad6e6-0ba2-d84b-8e7c-d629d20d3e36"
                      },
                      "value": "block"
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1722434986964
      },
      "a-17": {
          "id": "a-17",
          "title": "07_hover-text photo out",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-17-n",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 100,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "id": "66a7624265148801a91022c8|d46c989f-72e7-7cd6-d54f-1a8943aafe1f"
                      },
                      "value": "none"
                  }
              }, {
                  "id": "a-17-n-2",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 100,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "id": "66a7624265148801a91022c8|d5dc7b63-fbc5-0761-a0e7-476f8841c895"
                      },
                      "value": "none"
                  }
              }, {
                  "id": "a-17-n-3",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 100,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "id": "66a7624265148801a91022c8|27b6a4b3-caca-e2e5-3cac-249a79ba9f8f"
                      },
                      "value": "none"
                  }
              }, {
                  "id": "a-17-n-4",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 100,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "id": "66a7624265148801a91022c8|fe8c7cc4-8ec2-6001-54e3-091645f8c52d"
                      },
                      "value": "none"
                  }
              }, {
                  "id": "a-17-n-5",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 100,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "id": "66a7624265148801a91022c8|c0349e7c-46e2-b579-7122-10ce50e54d6a"
                      },
                      "value": "none"
                  }
              }, {
                  "id": "a-17-n-6",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 100,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "id": "66a7624265148801a91022c8|b40032ab-b9e5-8e2e-31f5-38ef68dbb57a"
                      },
                      "value": "none"
                  }
              }, {
                  "id": "a-17-n-7",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 100,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "id": "66a7624265148801a91022c8|a3d0f960-9dd1-aae4-8bcb-6b642f36830a"
                      },
                      "value": "none"
                  }
              }, {
                  "id": "a-17-n-8",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 100,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "id": "66a7624265148801a91022c8|bd837375-ab88-0ae1-248b-827636a75958"
                      },
                      "value": "none"
                  }
              }, {
                  "id": "a-17-n-9",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 100,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "id": "66a7624265148801a91022c8|fcb443aa-94ba-e294-1e44-61fa0900d737"
                      },
                      "value": "none"
                  }
              }, {
                  "id": "a-17-n-10",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 100,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "id": "66a7624265148801a91022c8|9c6294b8-549c-a69b-abd1-f333586bff20"
                      },
                      "value": "none"
                  }
              }, {
                  "id": "a-17-n-11",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 100,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "id": "66a7624265148801a91022c8|07b5aea7-c0a1-029e-0a7f-73db3876e272"
                      },
                      "value": "none"
                  }
              }, {
                  "id": "a-17-n-12",
                  "actionTypeId": "GENERAL_DISPLAY",
                  "config": {
                      "delay": 100,
                      "easing": "",
                      "duration": 0,
                      "target": {
                          "id": "66a7624265148801a91022c8|5dbad6e6-0ba2-d84b-8e7c-d629d20d3e36"
                      },
                      "value": "none"
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1722434986964
      },
      "a-18": {
          "id": "a-18",
          "title": "08_hover-btn_about",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-18-n",
                  "actionTypeId": "TRANSFORM_ROTATE",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 100,
                      "target": {
                          "useEventTarget": true,
                          "id": "6694d16edfb46eb7e97649bf|975dcd13-6f21-7b8a-0c22-a715b47652f0"
                      },
                      "zValue": 5,
                      "xUnit": "DEG",
                      "yUnit": "DEG",
                      "zUnit": "deg"
                  }
              }]
          }, {
              "actionItems": [{
                  "id": "a-18-n-2",
                  "actionTypeId": "TRANSFORM_ROTATE",
                  "config": {
                      "delay": 0,
                      "easing": "outQuint",
                      "duration": 100,
                      "target": {
                          "useEventTarget": true,
                          "id": "6694d16edfb46eb7e97649bf|975dcd13-6f21-7b8a-0c22-a715b47652f0"
                      },
                      "zValue": 0,
                      "xUnit": "DEG",
                      "yUnit": "DEG",
                      "zUnit": "deg"
                  }
              }, {
                  "id": "a-18-n-3",
                  "actionTypeId": "TRANSFORM_SCALE",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 100,
                      "target": {
                          "useEventTarget": true,
                          "id": "6694d16edfb46eb7e97649bf|a1c0b425-8183-076b-a59e-7c876f42078b"
                      },
                      "xValue": 1.25,
                      "yValue": 1.25,
                      "locked": true
                  }
              }]
          }],
          "useFirstGroupAsInitialState": true,
          "createdOn": 1722439520176
      },
      "a-19": {
          "id": "a-19",
          "title": "08_hover-btn_about 2",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-19-n",
                  "actionTypeId": "TRANSFORM_ROTATE",
                  "config": {
                      "delay": 0,
                      "easing": "inQuint",
                      "duration": 100,
                      "target": {
                          "useEventTarget": true,
                          "id": "6694d16edfb46eb7e97649bf|975dcd13-6f21-7b8a-0c22-a715b47652f0"
                      },
                      "zValue": 5,
                      "xUnit": "DEG",
                      "yUnit": "DEG",
                      "zUnit": "deg"
                  }
              }, {
                  "id": "a-19-n-2",
                  "actionTypeId": "TRANSFORM_SCALE",
                  "config": {
                      "delay": 0,
                      "easing": "",
                      "duration": 100,
                      "target": {
                          "useEventTarget": true,
                          "id": "6694d16edfb46eb7e97649bf|a1c0b425-8183-076b-a59e-7c876f42078b"
                      },
                      "xValue": 1,
                      "yValue": 1,
                      "locked": true
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1722439520176
      },
      "a-20": {
          "id": "a-20",
          "title": "09_hover-izhak_logo",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-20-n",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "inOutQuint",
                      "duration": 200,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".logo-izhak.logo_a",
                          "selectorGuids": ["8a921d5d-435a-9549-e0e1-fa62c73a2b2f", "701a62d7-cb56-8698-d8c4-0ea2621e1905"]
                      },
                      "value": 0,
                      "unit": ""
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1722441500550
      },
      "a-21": {
          "id": "a-21",
          "title": "09_hover-izhak_logo_out",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-21-n",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "inOutQuint",
                      "duration": 100,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".logo-izhak.logo_a",
                          "selectorGuids": ["8a921d5d-435a-9549-e0e1-fa62c73a2b2f", "701a62d7-cb56-8698-d8c4-0ea2621e1905"]
                      },
                      "value": 1,
                      "unit": ""
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1722441500550
      },
      "a-23": {
          "id": "a-23",
          "title": "hover_top 2",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-23-n",
                  "actionTypeId": "TRANSFORM_SCALE",
                  "config": {
                      "delay": 0,
                      "easing": "outQuint",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".div-block-7",
                          "selectorGuids": ["592ca3d0-3f44-e328-52f8-d69f779ea216"]
                      },
                      "xValue": 1.2,
                      "yValue": 1.2,
                      "locked": true
                  }
              }, {
                  "id": "a-23-n-2",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "outQuint",
                      "duration": 300,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".div-block-7",
                          "selectorGuids": ["592ca3d0-3f44-e328-52f8-d69f779ea216"]
                      },
                      "globalSwatchId": "--red",
                      "rValue": 237,
                      "bValue": 11,
                      "gValue": 22,
                      "aValue": 1
                  }
              }, {
                  "id": "a-23-n-3",
                  "actionTypeId": "TRANSFORM_SCALE",
                  "config": {
                      "delay": 0,
                      "easing": "outQuint",
                      "duration": 100,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".image-6",
                          "selectorGuids": ["4ce47a18-d185-de37-80a1-e65ec696dbcc"]
                      },
                      "xValue": 0.8,
                      "yValue": 0.8,
                      "locked": true
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1721923562033
      },
      "a-24": {
          "id": "a-24",
          "title": "hover_top OUT 2",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-24-n",
                  "actionTypeId": "TRANSFORM_SCALE",
                  "config": {
                      "delay": 0,
                      "easing": "outQuint",
                      "duration": 400,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".div-block-7",
                          "selectorGuids": ["592ca3d0-3f44-e328-52f8-d69f779ea216"]
                      },
                      "xValue": 1,
                      "yValue": 1,
                      "locked": true
                  }
              }, {
                  "id": "a-24-n-2",
                  "actionTypeId": "STYLE_BACKGROUND_COLOR",
                  "config": {
                      "delay": 0,
                      "easing": "outQuint",
                      "duration": 400,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".div-block-7",
                          "selectorGuids": ["592ca3d0-3f44-e328-52f8-d69f779ea216"]
                      },
                      "globalSwatchId": "--text_clair",
                      "rValue": 242,
                      "bValue": 191,
                      "gValue": 228,
                      "aValue": 1
                  }
              }, {
                  "id": "a-24-n-3",
                  "actionTypeId": "TRANSFORM_SCALE",
                  "config": {
                      "delay": 0,
                      "easing": "outQuint",
                      "duration": 400,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".image-6",
                          "selectorGuids": ["4ce47a18-d185-de37-80a1-e65ec696dbcc"]
                      },
                      "xValue": 1,
                      "yValue": 1,
                      "locked": true
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1721923562033
      },
      "a-25": {
          "id": "a-25",
          "title": "09_hover-izhak_logo 2",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-25-n",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "inOutQuint",
                      "duration": 200,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".logo-izhak.logo_a",
                          "selectorGuids": ["8a921d5d-435a-9549-e0e1-fa62c73a2b2f", "701a62d7-cb56-8698-d8c4-0ea2621e1905"]
                      },
                      "value": 0,
                      "unit": ""
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1722441500550
      },
      "a-26": {
          "id": "a-26",
          "title": "09_hover-izhak_logo_out 2",
          "actionItemGroups": [{
              "actionItems": [{
                  "id": "a-26-n",
                  "actionTypeId": "STYLE_OPACITY",
                  "config": {
                      "delay": 0,
                      "easing": "inOutQuint",
                      "duration": 100,
                      "target": {
                          "useEventTarget": "CHILDREN",
                          "selector": ".logo-izhak.logo_a",
                          "selectorGuids": ["8a921d5d-435a-9549-e0e1-fa62c73a2b2f", "701a62d7-cb56-8698-d8c4-0ea2621e1905"]
                      },
                      "value": 1,
                      "unit": ""
                  }
              }]
          }],
          "useFirstGroupAsInitialState": false,
          "createdOn": 1722441500550
      }
  },
  "site": {
      "mediaQueries": [{
          "key": "main",
          "min": 992,
          "max": 10000
      }, {
          "key": "medium",
          "min": 768,
          "max": 991
      }, {
          "key": "small",
          "min": 480,
          "max": 767
      }, {
          "key": "tiny",
          "min": 0,
          "max": 479
      }]
  }
});
