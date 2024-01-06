var fe = Object.defineProperty,
  me = Object.defineProperties;
var Ee = Object.getOwnPropertyDescriptors;
var oe = Object.getOwnPropertySymbols;
var ce = Object.prototype.hasOwnProperty,
  de = Object.prototype.propertyIsEnumerable;
var re = (K, x, v) =>
    x in K
      ? fe(K, x, { enumerable: !0, configurable: !0, writable: !0, value: v })
      : (K[x] = v),
  G = (K, x) => {
    for (var v in x || (x = {})) ce.call(x, v) && re(K, v, x[v]);
    if (oe) for (var v of oe(x)) de.call(x, v) && re(K, v, x[v]);
    return K;
  },
  te = (K, x) => me(K, Ee(x));
var se = (K, x) => {
  var v = {};
  for (var X in K) ce.call(K, X) && x.indexOf(X) < 0 && (v[X] = K[X]);
  if (K != null && oe)
    for (var X of oe(K)) x.indexOf(X) < 0 && de.call(K, X) && (v[X] = K[X]);
  return v;
};
var w = (K, x, v) =>
  new Promise((X, I) => {
    var h = (s) => {
        try {
          u(v.next(s));
        } catch (o) {
          I(o);
        }
      },
      e = (s) => {
        try {
          u(v.throw(s));
        } catch (o) {
          I(o);
        }
      },
      u = (s) => (s.done ? X(s.value) : Promise.resolve(s.value).then(h, e));
    u((v = v.apply(K, x)).next());
  });
self.importScripts("vendors.js"),
  (() => {
    "use strict";
    var K = {
        170: (I, h, e) => {
          e.d(h, { M_: () => a, tq: () => t });
          var u = e(261);
          const s = (0, u.fZ)(!0),
            o = (0, u.fZ)(!0),
            D = (0, u.fZ)(!0),
            E = (0, u.fZ)(!1),
            g = (0, u.fZ)({}),
            r = (0, u.fZ)(!1),
            t = (0, u.fZ)(!1),
            a = (0, u.fZ)("Not Init"),
            _ = (0, u.fZ)(-1),
            p = (0, u.fZ)("i-emo-happy");
        },
        18: (I, h, e) => {
          e.d(h, { W: () => d });
          var u = e(150),
            s = e.n(u),
            o = e(655),
            D = e(941),
            E = e(631),
            g = e(688),
            r = e(86),
            t = e(172),
            a = e(955),
            _ = e(813),
            p = e(262),
            l = e(502),
            f = e(698),
            n = e(891),
            i = e.n(n),
            c = e(634);
          const m = "https://tabsorter2.com/#/welcome?type=install",
            T =
              "https://docs.google.com/forms/d/e/1FAIpQLSd1rfM9UGlxn-G0esggLL93E1sLM2S8SDAgUxWQVyo0QQDiUg/viewform";
          self.addEventListener("activate", (b) =>
            w(this, null, function* () {
              yield i().init("cceb880f55fd32d61b14c2abc295a2bc", {
                debug: S,
                ignore_dnt: !0,
              }),
                i().track("SW -- ACTIVATED", b);
              const C = new f.y("focus_ts2_ws");
              C.loadWorkSpace(), (t.Z.WSM = C), B();
              const R = self.registration;
              console.log("SW -- REGISTERED SW: ", R),
                R.addEventListener("updatefound", function () {
                  console.log(
                    "A new service worker is being installed:",
                    R.installing
                  ),
                    i().track("SW -- Update found");
                });
            })
          );
          const P = (b) => (t.Z.CURRENT_WINDOW = b),
            d = () => t.Z.CURRENT_WINDOW,
            S = t.Z.DEBUG,
            B = (b = !1) =>
              w(this, null, function* () {
                let C = t.Z.LAST_FOCUS_WINDOW;
                C = C == -1 ? (yield s().windows.getCurrent()).id : C;
                const R = yield o.Bt.getAll({ populate: !1 }),
                  Z = yield s().windows.get(C, { populate: !0 });
                let k = t.Z.TS2_OPTIONS.misc.extendedIcon
                  ? `${Z.tabs.length}|${R.length}`
                  : `${Z.length}`;
                s().action.setBadgeText({ text: `${k}` }),
                  s().action.setBadgeBackgroundColor({ color: t.Z.ICON_COLOR }),
                  b ||
                    (yield P(Z.id),
                    (t.Z.WINDOW_IDS = (0, g.t9)(t.Z.WINDOW_IDS, Z.id))),
                  s().runtime.lastError && console.error(s().runtime.lastError),
                  (0, g.RY)({ SHARED: t.Z }, "local");
              }),
            F = () => {
              console.log("Initializing extpay"),
                $ ||
                  (($ = (0, l.Z)("lmmmdnmgmgnimgcfbnomdgeldehlfafn")),
                  $.startBackground()),
                (globalThis.extpay = $);
            },
            j = B,
            H = (b, C = null, R = null) =>
              w(this, null, function* () {
                if (yield O()) return C ? b(...C) : b();
                console.log("SW -- Not a premium user => ", b, C, R),
                  i().track(
                    "THIS_SHOULDNT_HAPPEN...Someone is snooping around..."
                  ),
                  $.openPaymentPage();
              });
          function z(
            b,
            { days: C = 0, hours: R = 0, minutes: Z = 0, seconds: k = 0 } = {}
          ) {
            const U = new Date(b);
            return (
              U.setDate(U.getDate() + C),
              U.setHours(U.getHours() + R),
              U.setMinutes(U.getMinutes() + Z),
              U.setSeconds(U.getSeconds() + k),
              U
            );
          }
          function Y(b, C) {
            const R = b - C,
              Z = 1e3 * 60 * 60 * 24,
              k = 1e3 * 60 * 60,
              U = 1e3 * 60,
              J = 1e3;
            let V = Math.floor(R / Z),
              ne = Math.floor((R - V * Z) / k),
              ae = Math.floor((R - V * Z - ne * k) / U),
              le = Math.floor((R - V * Z - ne * k - ae * U) / J),
              ue = Math.floor(R - V * Z - ne * k - ae * U - le * J);
            return `${V} days, ${ne} hours, ${ae} minutes, ${le} seconds, ${ue} milliseconds`;
          }
          const Q = (b = 1, C = 0, R = 0, Z = 0) =>
              w(this, null, function* () {
                let k = yield (0, g.mO)("lastCheck", "local"),
                  U = yield (0, g.mO)("user_subscription", "local");
                if (((U = U ? JSON.parse(U) : null), U && true && k)) {
                  let J = z(k, { days: b, hours: C, minutes: R, seconds: Z });
                  console.log("Next Check Date = ", J.toISOString());
                  let V = new Date();
                  J <= V
                    ? ((U = yield $.getUser()),
                      console.log(
                        "SW -- Subcription status:",
                        U ? U.subscriptionStatus : null
                      ),
                      U &&
                        (yield (0, g.RY)(
                          { user_subscription: JSON.stringify(U) },
                          "local"
                        ),
                        yield (0, g.RY)(
                          { lastCheck: V.toISOString() },
                          "local"
                        )))
                    : console.log(`SW -- Subcription found, next live check in... 
	 ${Y(J, V)}`);
                } else if (
                  (true)
                ) {
                  yield (0, g.RY)(
                    { user_subscription: JSON.stringify(U) },
                    "local"
                  ),
                    yield (0, g.RY)({ lastCheck: k }, "local"),
                    i().track("User subscribed and logged in", { user: U });
                  let J = z(k, { days: b, hours: C, minutes: R, seconds: Z });
                  console.log(
                    "SW -- Subcription status:",
                    U ? U.subscriptionStatus : null
                  ),
                    console.log(`SW -- Next live check in... 
	 ${Y(J, new Date())}`);
                } else
                  console.log("SW -- No user subscription found on stripe", U);
                return U;
              }),
            O = () =>
              w(this, null, function* () {
                $ || F();
                const b = yield Q();
                return b && true;
              }),
            M = (b, C, R) =>
              w(this, null, function* () {
                A.sendMessage({ bg_answer: b, content: yield H(C, R) });
              }),
            W = (b, C) =>
              w(this, null, function* () {
                try {
                  if (
                    (b.popup_window_id &&
                      (console.log(
                        "%cSW -- Received msg: ",
                        "color:#5FD4B0; font-size: 11px; font-weight: 100;",
                        b
                      ),
                      (t.Z.CURRENT_WINDOW = b.popup_window_id)),
                    b.pressedBtn)
                  )
                    switch (b.pressedBtn) {
                      case "closeBtn":
                        a.X0.close();
                        break;
                      case "freezeBtn":
                        a.X0.freezeAll(
                          t.Z.TS2_OPTIONS.freeze.createSuspendedPage
                        );
                        break;
                      case "isolateBtn":
                        a.X0.isolate();
                        break;
                      case "loadBtn":
                        break;
                      case "mergeBtn":
                        a.jh.mergeAll();
                        break;
                      case "mergeLastNBtn":
                        a.jh.mergeLastXWin();
                        break;
                      case "removeDuplicateBtn":
                        a.X0.deduplicate();
                        break;
                      case "saveAllBtn":
                        M("saveBtn_content", a.X0.saveAll, []);
                        break;
                      case "saveBtn":
                        A.sendMessage({
                          bg_answer: "saveBtn_content",
                          content: yield a.jh.save(),
                        });
                        break;
                      case "focusBtn":
                        a.X0.focus();
                        break;
                      case "unFocusBtn":
                        a.X0.unFocus();
                        break;
                      case "shuffleBtn":
                        a.jh.shuffle();
                        break;
                      case "sortAllBtn":
                        a.jh.sort(!1, t.Z.TS2_OPTIONS.sort.type);
                        break;
                      case "sortCurrBtn":
                        a.jh.sort(!0, t.Z.TS2_OPTIONS.sort.type);
                        break;
                      case "splitBtnV":
                        H(a.X0.split, [t.Z.TS2_OPTIONS.split, !0]);
                        break;
                      case "splitBtnH":
                        H(a.X0.split, [t.Z.TS2_OPTIONS.split, !1]);
                        break;
                      case "splitByGrpBtn":
                        H(a.X0.splitByDomain, []);
                        break;
                      case "stackBtn":
                        H(a.X0.stack, [], b.pressedBtn);
                        break;
                      case "uniteBtn":
                        a.X0.unite();
                        break;
                      case "githubBtn":
                        window.open("https://github.com/Mimieam/TabSorter2");
                        break;
                      case "donationBtn":
                        window.open("https://www.buymeacoffee.com/tabSorter2");
                        break;
                      default:
                        break;
                    }
                  if (b.fetch_data)
                    switch (b.fetch_data) {
                      case "popup_starter":
                        A.sendMessage({
                          bg_answer: "initial_data",
                          options: t.Z.TS2_OPTIONS,
                          isPremiumUser: yield O(),
                        });
                        break;
                      default:
                        break;
                    }
                  if (b.open)
                    switch (b.open) {
                      case "openPaymentPage":
                        let [R] = yield s().tabs.query({
                          title: "*TabSorter2 \u2014 ExtensionPay*",
                        });
                        R
                          ? yield s().windows.update(R.windowId, {
                              focused: !0,
                            })
                          : (R = $.openPaymentPage());
                        break;
                    }
                } catch (R) {
                  console.log("ChromeRPC.onMessage - ERROR = ", R, b, C);
                }
              });
          let A = (0, c.e1)(W),
            L = A;
          t.Z.LINK = A;
          const y = () => {
            chrome.runtime.openOptionsPage
              ? chrome.runtime.openOptionsPage()
              : window.open(chrome.runtime.getURL("options.html"));
          };
          chrome.tabs.onUpdated.addListener(function (b, C, R) {
            C.status == "complete";
          }),
            s().runtime.onUpdateAvailable.addListener((b) => {
              console.log("SW -- UPDATE AVAILABLE: ", b), s().runtime.reload();
            });
          let N = !1;
          s().tabs.onRemoved.addListener((b, C) =>
            w(this, null, function* () {
              if (
                (S && console.log("onRemoved -- tab", b, C),
                t.Z.TS2_OPTIONS.misc.forcePinned &&
                  C &&
                  C.isWindowClosing &&
                  !N)
              ) {
                S && console.log("RATS ===> ", t.Z.PINNED_TABS);
                const R = t.Z.WINDOW_IDS[t.Z.WINDOW_IDS.length - 2];
                yield Promise.all(
                  t.Z.PINNED_TABS.map(
                    (Z) =>
                      new Promise((k) =>
                        w(this, null, function* () {
                          N = !0;
                          const U = yield o.g3.create({
                            url: Z.url,
                            windowId: R,
                            pinned: !0,
                          });
                          S && console.log("Recreating Pinned tabs =>", U),
                            yield sleep(700);
                        })
                      )
                  )
                );
              }
              t.Z.TAB_HISTORY = t.Z.TAB_HISTORY.filter((R) => R[1] !== b);
            })
          ),
            s().tabs.onActivated.addListener((b) => {
              j();
            }),
            s().windows.onFocusChanged.addListener((b) =>
              w(this, null, function* () {
                b != -1 && (t.Z.LAST_FOCUS_WINDOW = b), yield j();
              })
            );
          let q;
          s().windows.onCreated.addListener(
            (q = (b) =>
              w(this, null, function* () {
                if (
                  (yield j(!0),
                  (t.Z.WINDOW_IDS = (0, g.t9)(t.Z.WINDOW_IDS, b.id)),
                  t.Z.TS2_OPTIONS.misc.forcePinned)
                ) {
                  yield sleep(200);
                  const C = yield getPinnedTabs(!1);
                  (0, r.d)(!0, C);
                }
              }))
          );
          let ee;
          s().windows.onRemoved.addListener(
            (ee = (b) =>
              w(this, null, function* () {
                yield j(!0),
                  (N = !1),
                  (t.Z.WINDOW_IDS = t.Z.WINDOW_IDS.filter((C) => C != b));
              }))
          );
          let $ = null;
          s().runtime.onInstalled.addListener((b) =>
            w(this, null, function* () {
              F(),
                S &&
                  console.log(
                    "TS2 Version: ",
                    yield s().runtime.getManifest().version
                  ),
                b.reason == "install"
                  ? (console.log(
                      "TS2 - Fresh new Install -> TODO: Open Welcome Page"
                    ),
                    s().tabs.create({ url: m }),
                    i().track("SW -- Extension Installed"),
                    s().runtime.setUninstallURL(T))
                  : b.reason == "update" &&
                    console.log("TS2 - Update detected -> Code update"),
                j(),
                (t.Z.PUBLIC_SUFFIX_LIST = yield (0, E.w)(i(), !0, !1)),
                S && console.log("SW -- PUBLIC_SUFFIX_LIST Installed"),
                yield (0, g.RY)(
                  { PublicSuffixList: t.Z.PUBLIC_SUFFIX_LIST },
                  "local"
                ),
                (t.Z.TS2_OPTIONS = yield (0, D.F)()),
                S && console.log("TS2 -- OPTIONS LOADED:", t.Z.TS2_OPTIONS),
                (0, _.ts)(),
                (0, p.nT)(),
                console.log("SW -- INSTALLED:", b),
                console.log("SW -- SHARED:", t.Z);
            })
          ),
            s().runtime.onUpdateAvailable.addListener((b) =>
              w(this, null, function* () {
                console.log("SW -- onUpdateAvailable", b),
                  i().track("Update Available"),
                  s().runtime.reload();
              })
            ),
            s().runtime.onStartup.addListener(() =>
              w(this, null, function* () {
                S && console.log("SW -- Startup"),
                  j(),
                  (0, _.ts)(),
                  (0, p.nT)();
              })
            );
          const ie = {
            openOptionWindow: y,
            saveToStorage: g.RY,
            loadFromStorage: g.mO,
            ChromeRPC: L,
            browser: s(),
            getOptions: D.F,
            console,
            SHARED: t.Z,
            EXPERIMENTAL_FNs: a.DJ,
            isPremiumUser: O,
          };
          (self.ts2 = ie), (globalThis.SHARED = t.Z);
          var _e = null;
        },
        182: (I, h, e) => {
          e.d(h, { t: () => D });
          var u = e(150),
            s = e.n(u),
            o = e(655);
          const D = (E) =>
            w(this, null, function* () {
              const g = yield (0, o.jA)();
              if (((E = E.filter((r) => !g.includes(r))), E.length > 0)) {
                let r = yield s().tabs.remove(E);
              }
            });
        },
        86: (I, h, e) => {
          e.d(h, { d: () => D });
          var u = e(134),
            s = e(655);
          const o = (g = null) => {
              let r = g.map((f) =>
                te(G({}, f), { url: f.url || f.pendingUrl })
              );
              if (!r) return;
              const a = [...E(r, "url").values()],
                _ = a.map((f) => f.id),
                l = r.map((f) => f.id).filter((f) => !_.includes(f));
              return closeTabs(l), a;
            },
            D = (g = !0, r = null) =>
              w(this, null, function* () {
                let t = r;
                t || ([{ tabs: t }] = yield (0, u.y)());
                const a = t.filter((d) => d.pinned),
                  _ = t.filter((d) => !d.pinned),
                  p = E(a, "url"),
                  l = E(_, "url"),
                  f = [...p.values()].map((d) => d.id),
                  n = [...l.values()].map((d) => d.id),
                  i = a.map((d) => d.id),
                  c = _.map((d) => d.id),
                  m = i.filter((d) => !f.includes(d)),
                  T = c.filter((d) => !n.includes(d)),
                  P = [...m, ...T];
                (0, s.Kt)(P);
              }),
            E = (g, r) => {
              const t = r || Object.keys(g[0])[0];
              return g.reduce((a, _) => a.set(_[t], _), new Map());
            };
        },
        73: (I, h, e) => {
          e.d(h, { TO: () => a, mW: () => p });
          var u = e(172),
            s = e(150),
            o = e.n(s),
            D = e(961),
            E = e.n(D),
            g = e(670),
            r = e(688);
          const t = (l, f = !1) => {
              const n = JSON.stringify(l),
                i = (0, D.compressToUTF16)(n);
              return (
                f && (console.log(n), console.log(i)),
                console.log("Initial Size: " + n.length),
                console.log("Compresseed Size: " + i.length),
                i
              );
            },
            a = () =>
              w(this, null, function* () {
                const l = yield o().windows.getAll({ populate: !0 }),
                  f = l.map((c, m) => {
                    const T = (0, r.Em)(c),
                      P = c.tabs.map((d) => ({
                        title: d.title || "",
                        url: d.url,
                      }));
                    return [T, P];
                  }),
                  n = l.map((c) => c.id),
                  i = t(f);
                u.A.WSM.addWorkSpace("focus_" + u.A.WSM.count, i),
                  yield o().windows.create({ url: "about:blank" }),
                  n.map((c) =>
                    w(this, null, function* () {
                      const m = yield o().windows.remove(c);
                      console.log("Done removing", m);
                    })
                  );
              }),
            _ = (l) =>
              w(this, null, function* () {
                return yield Promise.all(
                  l.map((n) =>
                    w(this, null, function* () {
                      return yield generateSuspendedUrl(
                        n.url,
                        n.title,
                        n.favIconUrl
                      );
                    })
                  )
                );
              }),
            p = () =>
              w(this, null, function* () {
                const l = yield u.A.WSM.pop();
                if (l) {
                  console.log("data retrieved from FocusMode -> ", l);
                  const f = (0, D.decompressFromUTF16)(l);
                  JSON.parse(f).map((i) =>
                    w(this, null, function* () {
                      const [c, m] = i,
                        T = m.map((P) => P.url);
                      if (T && T.length) return yield (0, g.b)(T, c, !0, !1);
                    })
                  );
                }
              });
        },
        716: (I, h, e) => {
          e.d(h, { DF: () => g, K8: () => a, O6: () => r, mg: () => t });
          var u = e(172),
            s = e(150),
            o = e.n(s),
            D = e(688);
          const E = u.A.DEBUG,
            g = (_ = !1) =>
              w(this, null, function* () {
                const p = u.A.TS2_OPTIONS.freeze.audible;
                console.log("freezeAudibles = ", p);
                let l = yield o().tabs.query({});
                (l = p ? l : l.filter((f) => f.audible != !0)),
                  E &&
                    console.log(
                      'HEY STOP IT !! I"m Trying to Freeze the WORLD HERE !!!'
                    ),
                  yield l.map((f) =>
                    w(this, null, function* () {
                      E && console.log("Try to  Discard =>", f.id);
                      let n = _ ? a(f.id) : yield o().tabs.discard(f.id);
                      E && console.log("Tab Discarded", n);
                    })
                  );
              }),
            r = (_ = !0) =>
              w(this, null, function* () {
                (yield o().tabs.query({}))
                  .filter((l) => l.audible != !0)
                  .map((l) => {
                    console.debug(l.url, l.url.includes("/bifrost.html#ttl=")),
                      l.url.includes("/bifrost.html#ttl=")
                        ? t(l.id)
                        : o().tabs.reload(l.id);
                  });
              }),
            t = (_) =>
              w(this, null, function* () {
                const p = (yield o().tabs.get(_)).url;
                let [l, f] = p.split("uri=");
                yield o().tabs.update(_, { url: f });
              }),
            a = (_) =>
              w(this, null, function* () {
                const p = yield o().tabs.get(_),
                  l = yield (0, D.f0)(p.url, p.title, p.favIconUrl);
                console.log(l), yield o().tabs.update(_, { url: l });
              });
        },
        941: (I, h, e) => {
          e.d(h, { F: () => E });
          var u = e(150),
            s = e.n(u),
            o = e(185),
            D = e(688);
          const E = function () {
            return w(this, null, function* () {
              let r = {},
                t = {},
                a = yield s().storage.sync.get(["flatOptions"]);
              a = Object.keys(a).length == 0 ? null : a;
              try {
                r = JSON.parse(a.flatOptions);
              } catch (_) {
                console.warn(
                  "Error Loading Options, falling back to default options..."
                ),
                  (0, D.RY)({ flatOptions: JSON.stringify(o.W) });
              } finally {
                (t = (0, D.RH)(o.W, r)), console.log("Options - Loaded");
              }
              return t;
            });
          };
        },
        359: (I, h, e) => {
          e.d(h, { Gp: () => f, PG: () => t, _F: () => p, v1: () => l });
          var u = e(150),
            s = e.n(u),
            o = e(172),
            D = e(631),
            E = e(182),
            g = e(655);
          const r = o.A.DEBUG,
            t = (n = 2) =>
              w(this, null, function* () {
                const i = yield g.g3.query({});
                r && console.log(i);
                const m = yield i
                    .map((d) =>
                      te(G({}, (0, D.Q)(d.url, o.A.PUBLIC_SUFFIX_LIST)), {
                        id: d.id,
                      })
                    )
                    .reduce(
                      (d, S) => (
                        Object.keys(d).includes(S.domain)
                          ? d[S.domain].push(S)
                          : (d[S.domain] = [S]),
                        d
                      ),
                      {}
                    ),
                  T = Object.keys(m)
                    .filter((d) => m[d].length >= n)
                    .map((d) => m[d].map((S) => S.id))
                    .sort((d, S) => S.length - d.length),
                  P = Object.keys(m)
                    .filter((d) => m[d].length < n)
                    .flatMap((d) => m[d].map((S) => S.id))
                    .sort((d, S) =>
                      d.domain < S.domain ? -1 : d.domain > S.domain ? 1 : 0
                    );
                return (
                  T.push(P), r && console.log(T), T.map((d) => (0, g.rD)(d)), T
                );
              }),
            a = (n = !1, i = !1) =>
              w(this, null, function* () {
                g.Bt.getWindow(o.A.CURRENT_WINDOW).then((m) => {
                  r && console.log("Isolating domain from current Tab ", m);
                  const T = m.map(
                    (P) =>
                      P.tabs
                        .filter((d) => d.active === !0)
                        .map((d) => ({ url: d.url, windowId: d.windowId }))[0]
                  )[0];
                  r && console.log("activeTab", T), _(T.url, T.windowId, n, i);
                });
              }),
            _ = (n, i, c = !1, m = !1) =>
              w(this, null, function* () {
                const T = new URL(n);
                r && console.log(T);
                const P = (yield ts2.browser.tabs.query({ pinned: !1 })).filter(
                    (S) => new URL(S.url).hostname === T.hostname && !S.pinned
                  ),
                  d = P.map((S) => S.id);
                console.log(P, d, T.hostname),
                  m ? (0, E.t)(d) : c ? (0, g.rD)(d) : (0, g.zG)(d, i);
              }),
            p = () => {
              a(!0);
            },
            l = () => {
              a(!1);
            },
            f = () => {
              a(!1, !0);
            };
        },
        670: (I, h, e) => {
          e.d(h, { b: () => a, m: () => t });
          var u = e(150),
            s = e.n(u),
            o = e(549),
            D = e(688);
          const E = !0,
            g = (_) => {
              const p = /(\w|-)*:\/\/\S+/gi;
              return _.match(p);
            },
            r = (_) =>
              w(this, null, function* () {
                const p = _.split(o.u),
                  l = p.reduce(
                    (f, n, i, c) => (
                      i % 2 === 0 && f.push(c.slice(i, i + 2)), f
                    ),
                    []
                  );
                for (const f of l) {
                  let n, i;
                  p.length === 1 ? ([n] = f) : (([i, n] = f), console.log(i));
                  const c = g(n),
                    m = i ? JSON.parse(i) : {};
                  c && (yield a(c, m, !0, !1));
                }
                return [urls, win_obj];
              }),
            t = (_) =>
              w(this, null, function* () {
                E && console.log("my loaded files: ", _);
                const p = 25e4;
                for (const l of _) {
                  const f = new FileReader();
                  if (
                    ((f.onloadend = (n) =>
                      w(this, null, function* () {
                        if (n.target.readyState == FileReader.DONE) {
                          const i = n.target.result;
                          yield r(i);
                        }
                      })),
                    l.name.endsWith("txt") && l.type == "text/plain")
                  )
                    if (l.size <= p) f.readAsText(l);
                    else
                      throw (
                        (console.error("File is over 2 mb"),
                        new Error("File is over 2 mb"))
                      );
                  else
                    throw (
                      (console.error(
                        `Invalid File '${l.name}' of type '${l.type}'`
                      ),
                      new Error(`Invalid File ${l.name} of type ${l.type}`))
                    );
                }
              }),
            a = (n, ...i) =>
              w(this, [n, ...i], function* (_, p = {}, l = !1, f = !1) {
                let c = [],
                  m = 0;
                const T = _.join(" ");
                let P = [];
                function d(A, L, y) {
                  return w(this, null, function* () {
                    if (
                      (console.log("browser.tabs.onUpdated: ", A, L, y),
                      (!P.includes(A) && L.url) ||
                        (L.favIconUrl && y.url && y.favIconUrl))
                    ) {
                      if ((console.log("SW -- discardHandler", A, L, y), !f))
                        yield s().tabs.discard(A);
                      else {
                        const N = yield (0, D.f0)(y.url, y.title, y.favIconUrl);
                        yield s().tabs.update(A, { url: N });
                      }
                      P.push(A),
                        m++,
                        console.log(`created & Unloaded from mem -> ${A}`),
                        m >= _.length &&
                          (console.log("all tabs discarded", m),
                          s().tabs.onUpdated.removeListener(d));
                    }
                  });
                }
                try {
                  s().tabs.onUpdated.addListener(d);
                } catch (A) {
                  console.warning(A);
                }
                const {
                    incognito: S,
                    state: B,
                    type: F,
                    top: j,
                    left: H,
                    height: z,
                    width: Y,
                  } = p,
                  Q = {
                    incognito: S,
                    state: B,
                    type: F,
                    top: j,
                    left: H,
                    height: z,
                    width: Y,
                  },
                  O = yield s().windows.create(G({}, Q)),
                  M = O.tabs[0].id;
                return yield Promise.all(
                  _.map((A, L) =>
                    w(this, null, function* () {
                      let y = null;
                      return (
                        L === 0
                          ? (y = yield s().tabs.update(M, { url: A }))
                          : (y = yield s().tabs.create({
                              url: A,
                              windowId: O.id,
                            })),
                        c.push(y.id),
                        y
                      );
                    })
                  )
                );
              });
        },
        104: (I, h, e) => {
          e.d(h, { J: () => r, K: () => g });
          var u = e(150),
            s = e.n(u),
            o = e(172),
            D = e(655);
          function E(t) {
            return t === Object(t);
          }
          const g = (t) =>
              w(this, null, function* () {
                if ((console.log("=====>>>>>", !E(t), t), !E(t))) {
                  const [_] = yield s().tabs.query({
                    active: !0,
                    currentWindow: !0,
                  });
                  t = _;
                }
                const a = new Date().getTime().toString();
                return (
                  (o.Z.TAB_HISTORY = [
                    ...o.Z.TAB_HISTORY.filter((_) => _[1] !== t.id),
                    [a, t.id, t.url],
                  ]),
                  o.Z.TAB_HISTORY
                );
              }),
            r = (t = 5) => {
              const a = o.Z.TAB_HISTORY.slice(0, -t).map((_) => _[1]);
              console.log(a), (0, D.Kt)(a);
            };
        },
        542: (I, h, e) => {
          e.d(h, { $: () => a, t: () => r });
          var u = e(150),
            s = e.n(u),
            o = e(655),
            D = e(18),
            E = e(172),
            g = e(688);
          const r = () =>
              w(this, null, function* () {
                const _ = (0, D.W)(),
                  l = (yield s().tabs.query({ windowId: -1 })).map((f) => f.id);
                (0, o.zG)(l, _);
              }),
            t = (_) =>
              w(this, null, function* () {
                const p = [];
                for (const l of _) {
                  const f = yield o.Bt.get(l, { populate: !0 });
                  p.push(f.tabs.map((n) => n.id));
                }
                return p;
              }),
            a = (_ = 2) =>
              w(this, null, function* () {
                let p = !1;
                E.A.DEBUG && console.log(E.A.WINDOW_IDS), (_ = _ || 2);
                const l = E.A.WINDOW_IDS.slice(-_);
                if (l) {
                  const f = (0, g.xH)(yield t(l));
                  try {
                    const [n] = l.slice(-1);
                    (0, o.zG)(f, n);
                  } catch (n) {
                    p = !0;
                  } finally {
                    !p && E.A.WINDOW_IDS.splice(-2, 1);
                  }
                  E.A.DEBUG && console.log(E.A.WINDOW_IDS);
                }
                return l[0];
              });
        },
        39: (I, h, e) => {
          e.d(h, { G: () => o, l: () => D });
          var u = e(150),
            s = e.n(u);
          const o = () =>
              w(this, null, function* () {
                console.log("Resetting all configs..."),
                  yield s().storage.sync.get(),
                  yield s().storage.local.clear(),
                  yield s().runtime.reload(),
                  console.log("Done - resetting all configs");
              }),
            D = () =>
              w(this, null, function* () {
                console.log("Reloading extension..."),
                  yield s().runtime.reload(),
                  console.log("Done - reloading extension");
              });
        },
        84: (I, h, e) => {
          e.d(h, { QP: () => t, bq: () => r });
          var u = e(134),
            s = e(549),
            o = e(688),
            D = e(597),
            E = e(655);
          const g = (f, n) => {
              const i = ((S) => {
                var B = S,
                  { tabs: m, state: T, id: P } = B,
                  d = se(B, ["tabs", "state", "id"]);
                return G({}, d);
              })(f);
              return JSON.stringify(i);
            },
            r = (f = !0) =>
              w(this, null, function* () {
                const i = (yield E.Bt.getAll()).map((T, P) =>
                    w(this, null, function* () {
                      const d = yield t(T.id, !1);
                      return [g(T, P), d];
                    })
                  ),
                  c = yield Promise.all(i);
                return yield (0, o.xH)(c).join(s.Z);
              }),
            t = (f = null, n = !0) =>
              w(this, null, function* () {
                const c = (f ? yield E.Bt.getWindow(f) : yield (0, u.y)()).map(
                    (d) => (0, D.i0)(d, D.m7)
                  ),
                  { tabs: m } = c[0];
                console.log("tabs=", m);
                const T = m.map((d) => {
                    const B = d.url;
                    return { title: d.title, url: d.url, shortUrl: B };
                  }),
                  P = a(T);
                return console.log("formatedData=", P), P;
              }),
            a = (f) => {
              let n = "";
              return (
                f.map((i) => {
                  n += `
\u2022 ${i.title}
	\u2192 ${i.shortUrl}\r`;
                }),
                n
              );
            },
            _ = (f, n = null) =>
              w(this, null, function* () {
                YYYY_MM_DD = new Date().toISOString().split("T")[0];
                const i = n || `Ts2-SavedTabs-${YYYY_MM_DD} ().txt`,
                  m = yield (yield self.showSaveFilePicker({
                    suggestedName: i,
                    types: [
                      {
                        description: "Text file",
                        accept: { "text/plain": [".txt"] },
                      },
                    ],
                  })).createWritable();
                yield m.write(f), yield m.close();
              });
          function p() {
            if ("showSaveFilePicker" in window) {
              const n = {
                types: [
                  {
                    description: "Text file",
                    accept: { "text/plain": [".txt"] },
                  },
                ],
              };
              return window.showSaveFilePicker(n);
            }
            const f = {
              type: "save-file",
              accepts: [
                {
                  description: "Text file",
                  extensions: ["txt"],
                  mimeTypes: ["text/plain"],
                },
              ],
            };
            return window.chooseFileSystemEntries(f);
          }
          function l(f, n) {
            return w(this, null, function* () {
              if (f.createWriter) {
                const c = yield f.createWriter();
                yield c.write(0, n), yield c.close();
                return;
              }
              const i = yield f.createWritable();
              yield i.write(n), yield i.close();
            });
          }
        },
        273: (I, h, e) => {
          e.d(h, { f: () => E });
          var u = e(134),
            s = e(655),
            o = e(172);
          const D = (r) => (
              r.forEach((t, a, _) => {
                const p = Math.floor(Math.random() * (a + 1));
                [_[a], _[p]] = [_[p], _[a]];
              }),
              r
            ),
            E = () =>
              w(this, null, function* () {
                let r = o.Z.LINK;
                r.sendMessage({ msg: "Shuffle|STARTED" }),
                  (0, u.y)()
                    .then((t) => {
                      const a = D(t[0].tabs.map((_) => _.id));
                      (0, s.zG)(a, t[0].windowId);
                    })
                    .then((t) => {
                      r.sendMessage({ msg: "Shuffle|DONE" });
                    });
              }),
            g = null;
        },
        597: (I, h, e) => {
          e.d(h, { Vu: () => f, i0: () => a, m7: () => r, wO: () => n });
          var u = e(172),
            s = e(688),
            o = e(631),
            D = e(655);
          const E = u.Z.DEBUG,
            g = (i, c) => {
              const m = (0, o.Q)(i.url, u.Z.PUBLIC_SUFFIX_LIST),
                T = (0, o.Q)(c.url, u.Z.PUBLIC_SUFFIX_LIST);
              return m.domain < T.domain ||
                (m.domain == T.domain &&
                  (m.subdomain < T.subdomain ||
                    (m.subdomain == T.subdomain &&
                      m.pathname + m.search < T.pathname + T.search)))
                ? -1
                : 0;
            },
            r = (i, c) => {
              const m = i.title.toLowerCase(),
                T = c.title.toLowerCase();
              return m.toLowerCase().localeCompare(T.toLowerCase());
            },
            t = { url: g, title: r },
            a = (i, c) => {
              let { tabs: m } = i;
              if (((m = (0, s.xH)(m)), c == g)) {
                E && console.log("prepSort Using sortByDomainWithSubDomain"),
                  E && console.log(m);
                const [P, d] = _(m);
                P.sort(g);
                const S = d.sort((B, F) => (B.url > F.url ? 1 : -1));
                m = [...P, ...S];
              } else E && console.log("prepSort Using sortByTitle"), m.sort(c);
              const T = m.map((P) => P.id);
              return { tabs: m, tabsId: T, windowId: i.windowId };
            },
            _ = (i) => {
              const c = i
                  .filter((P) => P.url.startsWith("http"))
                  .map((P) =>
                    Object.assign(P, {
                      _parsed: (0, o.Q)(P.url, u.Z.PUBLIC_SUFFIX_LIST),
                    })
                  ),
                m = i
                  .filter((P) => !P.url.startsWith("http"))
                  .map((P) =>
                    Object.assign(
                      P,
                      P.url
                        ? { _parsed: (0, o.Q)(P.url, u.Z.PUBLIC_SUFFIX_LIST) }
                        : { _parsed: { domain: "" } }
                    )
                  ),
                T = new Set(c.map((P) => P._parsed.domain));
              return (
                m.map((P) => (T.has(P._parsed.domain) ? (c.push(P), null) : P)),
                [c, m]
              );
            },
            p = () => D.Bt.getWindow(u.Z.CURRENT_WINDOW),
            l = (i) =>
              new Promise((c, m) => {
                E && console.log("Sort ALL Tabs", i);
                const T = i.map(
                  (P) =>
                    new Promise((d, S) => {
                      chrome.tabs.query({ windowId: P.id }, (B) =>
                        d({ windowId: P.id, window: P, tabs: B })
                      );
                    })
                );
                return c(T);
              }),
            f = (i = !1, c = "url", m = !0) => {
              (c = c.toLowerCase()),
                (c = Object.keys(t).includes(c) ? c : "url"),
                E && console.log("Sorting Type = ", c),
                chrome.windows.getAll((T) => {
                  (i ? p() : l(T))
                    .then((d) => Promise.all(d))
                    .then((d) => d.map((S) => a(S, t[c])))
                    .then((d) => {
                      d.map((S) => {
                        (0, D.zG)(S.tabsId, S.windowId);
                        const B = S.tabs
                          .filter((F) => F.url.includes("chrome://"))
                          .map((F) => F.id);
                        m && D.g3.closeEmptyTabs(S.tabs);
                      });
                    });
                });
            },
            n = f;
        },
        54: (I, h, e) => {
          e.d(h, { b: () => _ });
          var u = e(150),
            s = e.n(u),
            o = e(655),
            D = e(172);
          const E = D.A.DEBUG,
            g = (p, l) =>
              w(this, null, function* () {
                const f = yield s().windows.get(l, { populate: !0 });
                console.log(f);
                const n = f.tabs,
                  i = Math.ceil(n.length / p || 1) || 1;
                E && console.log(`==> Number of Window ?? = ${p}, ${i}`);
                const c = [];
                for (; n.length; ) c.push(n.splice(0, i).map((m) => m.id));
                return c;
              }),
            r = (p) =>
              w(this, null, function* () {
                const l = yield s().windows.get(p, { populate: !0 });
                let f = [],
                  n = l.tabs;
                const [i] = n.filter((m) => m.active).map((m) => m.id);
                let c = n.findIndex((m) => m.id == i);
                return (
                  (c = c > 0 ? c : 0),
                  (n = n.map((m) => m.id)),
                  (f = [n, n.splice(c)]),
                  f
                );
              }),
            t = (p, l, f = !0) =>
              w(this, null, function* () {
                l = l > 0 ? l : 1;
                let n,
                  i,
                  c,
                  m,
                  T,
                  P = null;
                const [{ workArea: d }] = yield s().system.display.getInfo(),
                  S = d;
                return (
                  f
                    ? ((i = S.width),
                      (c = S.height),
                      (m = Math.ceil(i / l) || i),
                      (T = Math.ceil(Number(p) * m)),
                      (P = S.top))
                    : ((n = S.height),
                      (c = Math.ceil(n / l) || n),
                      (m = S.width),
                      (T = S.left),
                      (P = Math.ceil(Number(p) * (c + 25)))),
                  { width: m, height: c, left: T, top: P }
                );
              }),
            a = (p, l, f = !1, n = !1, i = !1, c = !0) => {
              (n ? r(l) : g(p, l)).then((T) =>
                w(this, null, function* () {
                  const P = yield o.Bt.get(l),
                    d = T.length;
                  E &&
                    console.log(
                      `Spliting args:
          numberOfWindows=${d},
          sideBySide=${f}
          fromHere=${n}
          vertical=${c}
    `,
                      T,
                      P
                    ),
                    T.map((S, B) =>
                      w(this, null, function* () {
                        const F = f ? yield t(B, d, c) : {};
                        i &&
                          (c
                            ? ((F.top = P.top), (F.height = P.height))
                            : ((F.left = P.left), (F.width = P.width))),
                          yield (0, o.rD)(S, F, () => {
                            if (n && B === T.length - 1) {
                              const [j] = S;
                              chrome.tabs.get(j, (H) => {
                                chrome.tabs.highlight(
                                  { windowId: H.windowId, tabs: H.index },
                                  (z) => {
                                    E && console.log("SPLIT DONE->", H, z);
                                  }
                                );
                              });
                            }
                          });
                      })
                    );
                })
              );
            },
            _ = (p = {}, l) => {
              a(
                p.numberOfWindows,
                D.A.CURRENT_WINDOW,
                p.sideBySide,
                p.fromHere,
                p.forceDimensions,
                l
              );
            };
        },
        611: (I, h, e) => {
          e.d(h, { o: () => l });
          var u = e(150),
            s = e.n(u),
            o = e(651);
          let D = { width: 500, height: 375 },
            E,
            g,
            r;
          const t = 35;
          let a = 0;
          const _ = { state: "normal", drawAttention: !0 },
            p = (n) =>
              w(this, null, function* () {
                const i = {
                  width: n.width,
                  height: n.height,
                  left: n.left,
                  top: n.top,
                };
                let c = yield (0, o.F5)();
                (r = { width: 0, height: 0, left: c.left, top: c.top }),
                  console.log("getOverlappingMonitor() => locked and loaded"),
                  (g = (B, F) => te(G({}, r), { top: r.top + F * t + a }));
                const m = yield s().windows.update(n.id, {
                  left: c.left,
                  top: c.top,
                  width: 0,
                  height: 0,
                });
                let { width: T, height: P, left: d, top: S } = m;
                (T = Math.max(T, 525)),
                  console.log("CALIBRATED W: ", {
                    width: T,
                    height: P,
                    left: d,
                    top: S,
                  }),
                  (r = { width: T, height: P, left: d, top: S }),
                  s().windows.update(n.id, G({}, i));
              }),
            l = () =>
              w(this, null, function* () {
                let n = yield s().windows.getAll({ populate: !0 });
                yield p(n[0]),
                  (n = n.map((i, c) =>
                    w(this, null, function* () {
                      const m = g(i, c);
                      yield s().windows.update(
                        i.id,
                        G(G(G({}, m), _), i.type === "normal" ? {} : D)
                      );
                    })
                  ));
              });
          var f = null;
        },
        655: (I, h, e) => {
          e.d(h, {
            Bt: () => D,
            Kt: () => f,
            g3: () => o,
            jA: () => r,
            rD: () => l,
            zG: () => a,
          });
          var u = e(150),
            s = e.n(u);
          let o = {},
            D = {};
          (o.get = s().tabs.get),
            (o.move = s().tabs.move),
            (o.query = s().tabs.query),
            (o.create = s().tabs.create),
            (o.discard = s().tabs.discard),
            (o.update = s().tabs.update),
            (D.get = s().windows.get),
            (D.create = s().windows.create),
            (D.getAll = s().windows.getAll),
            (D.getLastFocused = s().windows.getLastFocused);
          const E = !0;
          (D.getWindow = (n) =>
            w(this, null, function* () {
              const i = yield s().windows.get(n, { populate: !0 });
              return Promise.resolve([
                { windowId: i.id, window: i, tabs: i.tabs },
              ]);
            })),
            (D._createWindow = (...c) =>
              w(this, [...c], function* (n = {}, i = !1) {
                return yield new Promise((T, P) => {
                  chrome.windows.create({}, (d) =>
                    w(this, null, function* () {
                      console.log(
                        `New Windows Created with ID : ${d.id}`,
                        d,
                        n.url
                      ),
                        (n.url = n.url ? n.url : []);
                      const S = n.url,
                        B = yield S.map(
                          (j, H) => (
                            console.log(
                              `trying to open new URL => : ${d.id}`,
                              d,
                              n.urls
                            ),
                            H === S.length - 1
                              ? o.createTabAtWindowID(j, d.id, !1)
                              : o.createTabAtWindowID(j, d.id, i)
                          )
                        ),
                        F = yield Promise.all(B);
                      console.log("new tabs??", d.tabs, F), T(d);
                    })
                  );
                });
              })),
            (o.createTabAtWindowID = (n, i, c = !1) =>
              new Promise((T) => {
                chrome.tabs.create({ url: n, windowId: i }, (P) =>
                  w(this, null, function* () {
                    c &&
                      chrome.tabs.onUpdated.addListener(function d(S, B) {
                        return w(this, null, function* () {
                          B.status === "complete" &&
                            S === P.id &&
                            (yield chrome.tabs.discard(P.id, (F) => {}),
                            chrome.tabs.onUpdated.removeListener(d),
                            T(P));
                        });
                      });
                  })
                );
              })),
            (o.closeEmptyTabs = (n) => {
              const i = n
                .filter((c) => c.url.includes("chrome://newtab/"))
                .map((c) => c.id);
              if (i.length > 0) {
                const c = s().tabs.remove(i);
              }
              return i;
            });
          let g = [];
          const r = (n = !0, i = !1) =>
              w(this, null, function* () {
                return yield new Promise((m, T) =>
                  w(this, null, function* () {
                    const P = yield s().tabs.query({ pinned: !0 });
                    if (P.length !== 0) {
                      let d = JSON.stringify(P);
                      g = JSON.parse(d);
                    }
                    return m(n ? P.map((d) => d.id) : i ? g : P);
                  })
                );
              }),
            t = (n = null, i = !1) =>
              w(this, null, function* () {
                const c = yield r();
                if (c && c.length) {
                  const m = yield D.getLastFocused(!1),
                    T = n || m.id;
                  E && console.log("keepThemPinned -- ", c, "->To Win: ", T),
                    c && (yield a(c, T));
                }
              }),
            a = (n, i, c = () => {}) =>
              w(this, null, function* () {
                if (i) {
                  const m = yield r();
                  yield o.move(n, { windowId: i, index: 0 }), _(m), c();
                }
              }),
            _ = (n) =>
              w(this, null, function* () {
                n.map((i) => {
                  s().tabs.update(i, { pinned: !0 });
                });
              }),
            p = (n) => {
              const i = n.map((c) =>
                new Promise((m, T) => {
                  const P = s().tabs.get(c);
                  return P ? m(P) : T(s().runtime.lastError.message);
                }).catch((m) => {})
              );
              return Promise.all(i);
            },
            l = (m, ...T) =>
              w(this, [m, ...T], function* (n, i = {}, c = () => {}) {
                if (((i = i || {}), n)) {
                  const [d] = n.slice(-1),
                    S = yield o.get(d),
                    B = G({ tabId: S.id }, i),
                    F = yield s().windows.create(B),
                    P = S,
                    { pinned: j } = P,
                    H = se(P, ["pinned"]);
                  o.update(d, { pinned: j }),
                    p(n).then((z) => {
                      const Y = z.filter((O) => O !== void 0),
                        Q = Y.map((O) => O.id);
                      a(Q, F.id, () => {
                        s().runtime.lastError
                          ? s().windows.remove(F.id)
                          : s().windows.update(F.id, { drawAttention: !0 }),
                          o.closeEmptyTabs(Y),
                          c();
                      });
                    });
                }
              }),
            f = (n) =>
              w(this, null, function* () {
                if (n.length > 0) {
                  const i = yield s().tabs.remove(n);
                  E && console.log(`${n.length || 0} closed`);
                }
              });
        },
        172: (I, h, e) => {
          e.d(h, { A: () => D, Z: () => E });
          var u = e(185),
            s = e(688),
            o = e(698);
          const D = {
            CURRENT_WINDOW: null,
            DEBUG: u.W.misc.debug,
            LAST_FOCUS_WINDOW: -1,
            ICON_COLOR: "#D95C69",
            PINNED_TABS: [],
            PUBLIC_SUFFIX_LIST: [],
            TS2_OPTIONS: u.W,
            WINDOW_IDS: [],
            TAB_HISTORY: [],
            WSM: null,
          };
          if (((globalThis.SHARED = D), !D.WSM)) {
            const g = new o.y("focus_ts2_ws");
            g.loadWorkSpace(), (D.WSM = g);
          }
          const E = D;
        },
        262: (I, h, e) => {
          e.d(h, { nT: () => D });
          var u = e(172);
          let s = !1;
          function o(E, g) {
            return w(this, null, function* () {
              s && keepThemPinned();
            });
          }
          const D = (E = !1) =>
            w(this, null, function* () {
              const g = u.A.TS2_OPTIONS,
                r = E || g.misc.forcePinned;
              return (
                r
                  ? ((s = !0),
                    chrome.windows.onFocusChanged.addListener(o),
                    chrome.windows.onCreated.addListener(o))
                  : ((s = !1),
                    chrome.windows.onFocusChanged.removeListener(o),
                    chrome.windows.onCreated.removeListener(o)),
                console.log("Automation -- Active Tab Pin = ", r),
                r
              );
            });
        },
        813: (I, h, e) => {
          e.d(h, { ts: () => E });
          var u = e(597),
            s = e(172);
          let o = !1;
          function D(g, r) {
            return w(this, null, function* () {
              const [t, a] = this;
              o && (0, u.Vu)(!0, t.sort.type, !1);
            });
          }
          const E = (g = !1) =>
            w(this, null, function* () {
              const r = s.A.TS2_OPTIONS,
                t = g || r.misc.forceSort;
              return (
                t
                  ? ((o = !0),
                    chrome.tabs.onUpdated.addListener(D.bind([r, !1])))
                  : ((o = !1), chrome.tabs.onUpdated.removeListener(D)),
                console.log("Automation -- Active Sort = ", t),
                t
              );
            });
        },
        134: (I, h, e) => {
          e.d(h, { y: () => o });
          var u = e(655),
            s = e(172);
          const o = () =>
            w(this, null, function* () {
              return yield u.Bt.getWindow(
                s.A.CURRENT_WINDOW != -1
                  ? s.A.CURRENT_WINDOW
                  : s.A.LAST_FOCUS_WINDOW
              );
            });
        },
        549: (I, h, e) => {
          e.d(h, { Z: () => s, u: () => u });
          const u = `
\r-----------------------------------------------------
\r`,
            s = u;
        },
        185: (I, h, e) => {
          e.d(h, { W: () => u });
          const u = {
            freeze: {
              audible: !1,
              auto: !1,
              createSuspendedPage: !1,
              time: "30",
            },
            sort: { regexInput: "", type: "URL" },
            misc: {
              debug: !0,
              extendedIcon: !0,
              autoSort: !1,
              forceSort: !1,
              extraDelimiters: "#,?",
              compactMode: !1,
              forcePinned: !1,
              popupClickFeedback: !0,
            },
            save: { filePrefix: "Ts2_SavedTabs", type: "Current" },
            split: {
              sideBySide: !0,
              forceDimensions: !0,
              numberOfWindows: "2",
              fromHere: !1,
            },
            merge: { exclude_list: "google.com;slack" },
            theme: "nightLightTheme",
          };
          var s = null;
        },
        634: (I, h, e) => {
          e.d(h, { e1: () => t });
          var u = e(150),
            s = e.n(u),
            o = e(170);
          const D = () => !!self.document;
          let E = null;
          class g {
            constructor() {}
            sendMessage(_) {
              E.postMessage(_);
            }
            start_listening(_) {
              o.M_.set("Connected to SW");
              let p = this;
              function l(f) {
                (E = f),
                  E.onMessage.addListener(function (n) {
                    _(n);
                  }),
                  E.onDisconnect.addListener(function (n) {
                    console.log("SW -- port disconnected"), o.M_.set("Failed");
                  });
              }
              s().runtime.onConnect.hasListener(l) &&
                (console.log("SW -- listening on POPUP..."),
                s().runtime.onConnect.removeListener(l)),
                s().runtime.onConnect.addListener(l),
                s().runtime.lastError && console.error(s().runtime.lastError);
            }
          }
          class r {
            constructor(_ = "port-from-popup") {}
            sendMessage(_) {
              return w(this, null, function* () {
                const [p] = yield navigator.serviceWorker.getRegistrations();
                if (!p || !p.active) {
                  console.error("SW not found"), o.M_.set("Failed");
                  return;
                } else
                  try {
                    E &&
                      (yield E.postMessage(_),
                      s().runtime.lastError &&
                        (console.error(s().runtime.lastError),
                        o.M_.set("Failed")));
                  } catch (l) {
                    console.error("POPUP -- sendMessage error", l),
                      o.M_.set("Failed"),
                      o.tq.set("Failed");
                  }
              });
            }
            start_listening(_) {
              return w(this, null, function* () {
                console.log("POPUP -- listening to SW", this),
                  (E = yield s().runtime.connect({ name: "port-from-popup" })),
                  s().runtime.lastError &&
                    (console.error(s().runtime.lastError),
                    console.info("retrying to listen...")),
                  E.onMessage.addListener(_),
                  E.onDisconnect.addListener(function (p) {
                    console.log("Client -- port disconnected", this),
                      o.M_.set("Failed");
                  });
              });
            }
          }
          const t = (a) => {
            let _ = D() ? new r() : new g();
            return _.start_listening(a), (_.onMessage = _.start_listening), _;
          };
        },
        651: (I, h, e) => {
          e.d(h, { F5: () => g });
          var u = e(688);
          class s {
            constructor({ top: t, left: a, width: _, height: p }) {
              const l = _,
                f = p;
              (this.width = _),
                (this.height = p),
                (this.topLeft = { x: a, y: t }),
                (this.bottomRight = { x: a + l, y: t + f });
            }
          }
          const o = (r, t, a, _) => Math.min(t, _) - Math.max(r, a),
            D = (r, t) => E(r.topLeft, r.bottomRight, t.topLeft, t.bottomRight),
            E = (r, t, a, _) => {
              let p = o(r.y, t.y, a.y, _.y),
                l = o(r.x, t.x, a.x, _.x);
              return (p = p < 0 ? 0 : p), (l = l < 0 ? 0 : l), l * p;
            },
            g = () =>
              w(this, null, function* () {
                if (chrome && chrome.system) {
                  let r = yield (0, u.Fr)(chrome.system.display.getInfo)();
                  const t = yield (0, u.Fr)(chrome.windows.getCurrent)(),
                    a = new s(t);
                  return (
                    (r = r.map((p) =>
                      te(G({ id: p.id, isPrimary: p.isPrimary }, p.bounds), {
                        overlapArea: D(a, new s(p.bounds)),
                      })
                    )),
                    r.reduce((p, l) => (p.overlapArea > l.overlapArea ? p : l))
                  );
                } else return yield browser.windows.getCurrent();
              });
        },
        631: (I, h, e) => {
          e.d(h, { Q: () => D, w: () => o });
          var u = e(688);
          function s(E) {
            return w(this, null, function* () {
              const g = E.getReader(),
                r = [];
              let t, a;
              for (; !t; ) {
                if ((({ value: a, done: t } = yield g.read()), t))
                  return r.map((p) => new TextDecoder().decode(p)).join();
                r.push(a);
              }
            });
          }
          const o = (E, g = !0, r = !1) =>
              w(this, null, function* () {
                if (!r) {
                  const t = yield (0, u.mO)("publicSuffixList");
                  if (t)
                    return (
                      console.log(t),
                      console.log(
                        `SW -- PUBLIC_SUFFIX_LIST loaded ${t.length} top-level domains from cache...`
                      ),
                      Promise.resolve(t)
                    );
                }
                return new Promise((t, a) =>
                  w(this, null, function* () {
                    console.log("SW -- fetching PUBLIC_SUFFIX_LIST...");
                    try {
                      const p = (yield fetch(
                        "https://publicsuffix.org/list/effective_tld_names.dat"
                      )).body;
                      let f = (yield s(p))
                        .split(
                          `
`
                        )
                        .filter((n) => !(n.startsWith("//") || n == ""));
                      g && (yield (0, u.RY)({ publicSuffixList: f })),
                        E &&
                          E.track("PUBLIC_SUFFIX_LIST fetched and Saved", {
                            tlds: f.length,
                          }),
                        console.info(
                          `SW -- PUBLIC_SUFFIX_LIST Updated with ${f.length} top-level domains`
                        ),
                        t(f);
                    } catch (_) {
                      E
                        ? E.track("fetching PUBLIC_SUFFIX_LIST failed", {
                            error: _,
                          })
                        : console.log(_),
                        a([]);
                    }
                  })
                );
              }),
            D = (E, g = []) => {
              const r = new URL(E);
              let t = r.hostname,
                a = t.split(".").reverse(),
                _ = [],
                p = a.reduce((c, m) => {
                  let T = c ? m + "." + c : m;
                  return g.includes(T) && T != t && _.push(T), T;
                }, "");
              a.reverse();
              const l = _.pop() || a[a.length - 1],
                f = l ? l.split(".").length : 1;
              a.splice(-f);
              const n = a.pop(),
                i = a.join(".");
              return {
                tld: l,
                sld: n,
                domain: l ? n + "." + l : n,
                subdomain: i,
                search: r.search,
                pathname: r.pathname,
                protocol: r.protocol.replace(":", ""),
                original_url: E,
              };
            };
        },
        688: (I, h, e) => {
          e.d(h, {
            DC: () => j,
            Em: () => H,
            Fr: () => t,
            RH: () => P,
            RY: () => B,
            f0: () => Y,
            mO: () => F,
            t9: () => p,
            xH: () => l,
          });
          var u = e(150),
            s = e.n(u);
          const o = (O) =>
              new Promise((M, W) => {
                const A = Object.keys(O)[0],
                  L = O;
                (L[A] = JSON.stringify(O[A])),
                  chrome.storage.local.set(L, () => {
                    console.log(`${JSON.stringify(L)} saved`), M(L);
                  });
              }),
            D = (O) =>
              new Promise((M, W) => {
                chrome.storage.local.get(O, (A) => {
                  const L = Object.keys(A).includes(O) ? A[O] : "{}";
                  M(JSON.parse(L));
                });
              }),
            E = {
              sendMessage: (O, M) => {
                s().runtime.sendMessage(s().runtime.id, O, M);
              },
              onMessage: (O) =>
                w(this, null, function* () {
                  s().runtime.onMessage.addListener(O),
                    console.info("SW -- Listening...");
                }),
            },
            g = {
              sendMessage: (O, M) => {
                console.log(
                  "%c%s",
                  "color: #00f; font-size: 11px;",
                  "SW -- Sent: ",
                  O
                ),
                  s().runtime.sendMessage(s().runtime.id, O, M);
              },
              onMessage: (O) => {
                console.info("OpenTalk Listening..."),
                  s().runtime.onMessage.addListener(O);
              },
            },
            r = (O, M, W) => {
              const A = W,
                L = M.log;
              function y(...N) {
                A && L.apply(M, [`[${O}]:`, N]);
              }
              return y;
            },
            t =
              (O) =>
              (...M) =>
                new Promise((W, A) => {
                  O(...M, (L, y) => {
                    y ? A(y) : W(L);
                  });
                }),
            a =
              (O) =>
              (...M) =>
                w(this, null, function* () {
                  return new Promise((W, A) =>
                    O(...M, (L, y) => (y ? A(y) : W(L)))
                  );
                }),
            _ = (O, M) => (O.push.apply(O.push(M), O.splice(0, 1)), O),
            p = (O, M) => [...O.filter((W) => W !== M), M],
            l = (O) =>
              O.reduce((M, W) => M.concat(Array.isArray(W) ? l(W) : W), []),
            f = (O, M, W = !0) => {
              let A = [...O];
              if ((A.sort((L, y) => M.indexOf(L) - M.indexOf(y)), W)) {
                const L = A.filter((N) => M.includes(N)),
                  y = A.filter((N) => !M.includes(N));
                A = [...L, ...y];
              }
              return A;
            },
            n = (O, M) => O.filter((W) => M.includes(W)),
            i = (O, M) => O.filter((W) => !M.includes(W)),
            c = (O, M) =>
              O.filter((W) => !M.includes(W)).concat(
                M.filter((W) => !O.includes(W))
              ),
            m = (O, M, W, A) =>
              Object.values(O)
                .filter((L) => !(L[0] instanceof Array))
                .filter((L) => (W ? L[W] !== A : L))
                .map((L) => ({ [L[M]]: L }))
                .reduce((L, y) => {
                  const N = Object.keys(y)[0],
                    q = {
                      [N]: Object.keys(L).includes(N)
                        ? [...L[N], [...y[N]]]
                        : [y[N]],
                    };
                  return G(G({}, L), q);
                }, {}),
            T = (O) => (
              console.log(
                "%c%s",
                "color: #00f; font-size: 11px;",
                `SW -- Sleeping for ${O / 1e3}s`
              ),
              new Promise((M) => setTimeout(M, O))
            );
          function P(O, M) {
            return (
              Object.keys(M).forEach((W) => {
                O.hasOwnProperty(W) &&
                typeof O[W] == "object" &&
                !(O[W] instanceof Array)
                  ? P(O[W], M[W])
                  : (O[W] = M[W]);
              }),
              O
            );
          }
          const d = (O, M) =>
              M.some((W) => O.toLowerCase().includes(W.toLowerCase())),
            S = (O) =>
              O
                ? `#${(((1 << 24) * Math.random()) | 0).toString(16)}`.padEnd(
                    7,
                    0
                  )
                : "#41296b",
            B = (O, M = "local") =>
              w(this, null, function* () {
                return (
                  (M = M.toLowerCase()),
                  (M = ["sync", "local"].includes(M) ? M : "local"),
                  yield s().storage[M].set(O)
                );
              }),
            F = (O, M = "local") =>
              w(this, null, function* () {
                const W = yield s().storage[M].get([O]),
                  A = W && W[O];
                return console.log(`browser.storage.${M}[${O}] = `, A), A;
              }),
            j = (O, M = "local") =>
              w(this, null, function* () {
                return yield s().storage[M].remove(O);
              }),
            H = (O) =>
              ((q) => {
                var ee = q,
                  { tabs: W, state: A, id: L, alwaysOnTop: y } = ee,
                  N = se(ee, ["tabs", "state", "id", "alwaysOnTop"]);
                return G({}, N);
              })(O),
            z = (O) =>
              w(this, null, function* () {
                const M = (yield F("discardedTabs")) || [];
                for (let W = 0; W < O.length; W++)
                  M.push(
                    ((_e) => {
                      var b = _e,
                        {
                          id: A,
                          title: L,
                          favIconUrl: y,
                          windowId: N,
                          index: q,
                          groupId: ee,
                          pinned: $,
                        } = b,
                        ie = se(b, [
                          "id",
                          "title",
                          "favIconUrl",
                          "windowId",
                          "index",
                          "groupId",
                          "pinned",
                        ]);
                      return {
                        id: A,
                        title: L,
                        url,
                        favIconUrl: y,
                        windowId: N,
                        index: q,
                        groupId: ee,
                        pinned: $,
                        timestamp: new Date().toISOString(),
                      };
                    })(O[W])
                  );
                yield B({ discardedTabs: M });
              }),
            Y = (O, M, W, A) =>
              w(this, null, function* () {
                let L = encodeURIComponent(M),
                  y;
                return (
                  O.includes("chrome-extension") &&
                  O.includes("/bifrost.html#ttl=")
                    ? (y = O.split("/bifrost.html")[1])
                    : (y =
                        "#ttl=" +
                        L +
                        "&pos=" +
                        (A || "0") +
                        "&uri=" +
                        O +
                        "&fav=" +
                        (W || "")),
                  yield s().runtime.getURL("bifrost.html" + y)
                );
              });
          function Q(O) {
            return O[~~(O.length * Math.random())];
          }
        },
        698: (I, h, e) => {
          e.d(h, { y: () => g });
          var u = e(688),
            s = e(73);
          let o = (r) => (0, u.mO)(r),
            D = (r, t) => (0, u.RY)({ [r]: t }),
            E = (r) => (0, u.DC)(r);
          class g {
            constructor(t = "ws") {
              (this.name = t),
                (this.wsArr = []),
                (this.count = this.wsArr.length);
            }
            loadWorkSpace() {
              return w(this, null, function* () {
                let t = yield o(this.name);
                return t
                  ? JSON.parse(t)
                  : (console.error("WorkSpace Unavailable...", t), []);
              });
            }
            addWorkSpace(t, a) {
              return w(this, null, function* () {
                const _ = [t].concat(this.wsArr);
                (this.wsArr = Array.from(new Set(_))),
                  (this.count = this.wsArr.length);
                const p = yield D(t, a);
                console.log("Workspace added: ", t, p), this.saveWorkSpace();
              });
            }
            listAllWorkSpace() {
              return this.wsArr;
            }
            openAWorkSpace(t) {
              t in this.wsArr && o(t);
            }
            removeWorkSpace(t) {
              (this.wsArr = this.wsArr.filter((a) => a != t)),
                (this.count = this.wsArr.length),
                E(t),
                this.saveWorkSpace();
            }
            saveWorkSpace() {
              const t = D(this.name, JSON.stringify(this.wsArr));
              console.log("saveWorkSpace = ", this.name, t);
            }
            deleteAllWorkSpace() {
              this.wsArr.map((a) => E(a)),
                (this.wsArr = []),
                (this.count = 0),
                E(this.name);
            }
            pop() {
              return w(this, null, function* () {
                const t = this.wsArr[0],
                  a = t ? yield o(t) : null;
                return (
                  a && (this.removeWorkSpace(t), this.saveWorkSpace()),
                  console.log("pop", t, a),
                  a
                );
              });
            }
          }
        },
        955: (I, h, e) => {
          e.d(h, { DJ: () => c, X0: () => i, jh: () => n });
          var u = e(86),
            s = e(73),
            o = e(716),
            D = e(359),
            E = e(670),
            g = e(104),
            r = e(84),
            t = e(273),
            a = e(597),
            _ = e(54),
            p = e(611),
            l = e(542),
            f = e(39);
          const n = {
              load: E.m,
              mergeAll: l.t,
              mergeLastXWin: l.$,
              save: () => (0, r.QP)(),
              shuffle: t.f,
              sort: a.wO,
            },
            i = {
              unite: D.v1,
              close: D.Gp,
              deduplicate: u.d,
              focus: s.TO,
              freezeAll: o.DF,
              isolate: D._F,
              reloadAll: o.O6,
              saveAll: () => (0, r.bq)(!0),
              split: _.b,
              splitByDomain: D.PG,
              stack: p.o,
              undoMerge: () => {
                console.log("Coming soon..");
              },
              unFocus: s.mW,
            },
            c = {
              maxFive: g.J,
              remember_me: g.K,
              sleep: o.K8,
              wake: o.mg,
              hardReset: f.G,
              softReset: f.l,
              smartLoad: E.b,
            };
          (globalThis.BASIC_FNs = n),
            (globalThis.PREMIUM_FNs = i),
            (globalThis.EXPERIMENTAL_FNs = c);
          var m = null;
        },
      },
      x = {};
    function v(I) {
      var h = x[I];
      if (h !== void 0) return h.exports;
      var e = (x[I] = { exports: {} });
      return K[I].call(e.exports, e, e.exports, v), e.exports;
    }
    (v.m = K),
      (() => {
        var I = [];
        v.O = (h, e, u, s) => {
          if (e) {
            s = s || 0;
            for (var o = I.length; o > 0 && I[o - 1][2] > s; o--)
              I[o] = I[o - 1];
            I[o] = [e, u, s];
            return;
          }
          for (var D = 1 / 0, o = 0; o < I.length; o++) {
            for (var [e, u, s] = I[o], E = !0, g = 0; g < e.length; g++)
              (s & !1 || D >= s) && Object.keys(v.O).every((l) => v.O[l](e[g]))
                ? e.splice(g--, 1)
                : ((E = !1), s < D && (D = s));
            if (E) {
              I.splice(o--, 1);
              var r = u();
              r !== void 0 && (h = r);
            }
          }
          return h;
        };
      })(),
      (v.n = (I) => {
        var h = I && I.__esModule ? () => I.default : () => I;
        return v.d(h, { a: h }), h;
      }),
      (v.d = (I, h) => {
        for (var e in h)
          v.o(h, e) &&
            !v.o(I, e) &&
            Object.defineProperty(I, e, { enumerable: !0, get: h[e] });
      }),
      (v.o = (I, h) => Object.prototype.hasOwnProperty.call(I, h)),
      (v.j = 357),
      (() => {
        var I = { 357: 0 };
        v.O.j = (u) => I[u] === 0;
        var h = (u, s) => {
            var [o, D, E] = s,
              g,
              r,
              t = 0;
            if (o.some((_) => I[_] !== 0)) {
              for (g in D) v.o(D, g) && (v.m[g] = D[g]);
              if (E) var a = E(v);
            }
            for (u && u(s); t < o.length; t++)
              (r = o[t]), v.o(I, r) && I[r] && I[r][0](), (I[r] = 0);
            return v.O(a);
          },
          e = (globalThis.webpackChunktabsorter2 =
            globalThis.webpackChunktabsorter2 || []);
        e.forEach(h.bind(null, 0)), (e.push = h.bind(null, e.push.bind(e)));
      })();
    var X = v.O(void 0, [923], () => v(18));
    X = v.O(X);
  })();
