var Tt = Object.defineProperty;
var xe = Object.getOwnPropertySymbols;
var Ot = Object.prototype.hasOwnProperty,
  Mt = Object.prototype.propertyIsEnumerable;
var It = (G, F, P) =>
    F in G
      ? Tt(G, F, { enumerable: !0, configurable: !0, writable: !0, value: P })
      : (G[F] = P),
  Ae = (G, F) => {
    for (var P in F || (F = {})) Ot.call(F, P) && It(G, P, F[P]);
    if (xe) for (var P of xe(F)) Mt.call(F, P) && It(G, P, F[P]);
    return G;
  };
var Ge = (G, F) => {
  var P = {};
  for (var z in G) Ot.call(G, z) && F.indexOf(z) < 0 && (P[z] = G[z]);
  if (G != null && xe)
    for (var z of xe(G)) F.indexOf(z) < 0 && Mt.call(G, z) && (P[z] = G[z]);
  return P;
};
var k = (G, F, P) =>
  new Promise((z, v) => {
    var w = (c) => {
        try {
          e(P.next(c));
        } catch (D) {
          v(D);
        }
      },
      s = (c) => {
        try {
          e(P.throw(c));
        } catch (D) {
          v(D);
        }
      },
      e = (c) => (c.done ? z(c.value) : Promise.resolve(c.value).then(w, s));
    e((P = P.apply(G, F)).next());
  });
(() => {
  "use strict";
  var G = {
      170: (v, w, s) => {
        s.d(w, {
          H5: () => p,
          M_: () => R,
          V_: () => O,
          ci: () => a,
          eg: () => U,
          tq: () => S,
        });
        var e = s(261);
        const c = (0, e.fZ)(!0),
          D = (0, e.fZ)(!0),
          W = (0, e.fZ)(!0),
          p = (0, e.fZ)(!1),
          U = (0, e.fZ)({}),
          O = (0, e.fZ)(!1),
          S = (0, e.fZ)(!1),
          R = (0, e.fZ)("Not Init"),
          a = (0, e.fZ)(-1),
          i = (0, e.fZ)("i-emo-happy");
      },
      929: (v, w, s) => {
        var e = s(69),
          c = new e.Z({ target: document.body }),
          D = null;
      },
      670: (v, w, s) => {
        s.d(w, { m: () => S });
        var e = s(150),
          c = s.n(e),
          D = s(549),
          W = s(688);
        const p = !0,
          U = (a) => {
            const i = /(\w|-)*:\/\/\S+/gi;
            return a.match(i);
          },
          O = (a) =>
            k(this, null, function* () {
              const i = a.split(D.u),
                m = i.reduce(
                  (h, C, M, y) => (M % 2 === 0 && h.push(y.slice(M, M + 2)), h),
                  []
                );
              for (const h of m) {
                let C, M;
                i.length === 1 ? ([C] = h) : (([M, C] = h), console.log(M));
                const y = U(C),
                  j = M ? JSON.parse(M) : {};
                y && (yield R(y, j, !0, !1));
              }
              return [urls, win_obj];
            }),
          S = (a) =>
            k(this, null, function* () {
              p && console.log("my loaded files: ", a);
              const i = 25e4;
              for (const m of a) {
                const h = new FileReader();
                if (
                  ((h.onloadend = (C) =>
                    k(this, null, function* () {
                      if (C.target.readyState == FileReader.DONE) {
                        const M = C.target.result;
                        yield O(M);
                      }
                    })),
                  m.name.endsWith("txt") && m.type == "text/plain")
                )
                  if (m.size <= i) h.readAsText(m);
                  else
                    throw (
                      (console.error("File is over 2 mb"),
                      new Error("File is over 2 mb"))
                    );
                else
                  throw (
                    (console.error(
                      `Invalid File '${m.name}' of type '${m.type}'`
                    ),
                    new Error(`Invalid File ${m.name} of type ${m.type}`))
                  );
              }
            }),
          R = (C, ...M) =>
            k(this, [C, ...M], function* (a, i = {}, m = !1, h = !1) {
              let y = [],
                j = 0;
              const K = a.join(" ");
              let $ = [];
              function x(g, b, E) {
                return k(this, null, function* () {
                  if (
                    (console.log("browser.tabs.onUpdated: ", g, b, E),
                    (!$.includes(g) && b.url) ||
                      (b.favIconUrl && E.url && E.favIconUrl))
                  ) {
                    if ((console.log("SW -- discardHandler", g, b, E), !h))
                      yield c().tabs.discard(g);
                    else {
                      const A = yield (0, W.f0)(E.url, E.title, E.favIconUrl);
                      yield c().tabs.update(g, { url: A });
                    }
                    $.push(g),
                      j++,
                      console.log(`created & Unloaded from mem -> ${g}`),
                      j >= a.length &&
                        (console.log("all tabs discarded", j),
                        c().tabs.onUpdated.removeListener(x));
                  }
                });
              }
              try {
                c().tabs.onUpdated.addListener(x);
              } catch (g) {
                console.warning(g);
              }
              const {
                  incognito: Y,
                  state: t,
                  type: d,
                  top: r,
                  left: L,
                  height: f,
                  width: B,
                } = i,
                _ = {
                  incognito: Y,
                  state: t,
                  type: d,
                  top: r,
                  left: L,
                  height: f,
                  width: B,
                },
                n = yield c().windows.create(Ae({}, _)),
                o = n.tabs[0].id;
              return yield Promise.all(
                a.map((g, b) =>
                  k(this, null, function* () {
                    let E = null;
                    return (
                      b === 0
                        ? (E = yield c().tabs.update(o, { url: g }))
                        : (E = yield c().tabs.create({
                            url: g,
                            windowId: n.id,
                          })),
                      y.push(E.id),
                      E
                    );
                  })
                )
              );
            });
      },
      549: (v, w, s) => {
        s.d(w, { u: () => e });
        const e = `
\r-----------------------------------------------------
\r`;
        var c = null;
      },
      185: (v, w, s) => {
        s.d(w, { W: () => e });
        const e = {
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
        var c = null;
      },
      634: (v, w, s) => {
        s.d(w, { e1: () => S });
        var e = s(150),
          c = s.n(e),
          D = s(170);
        const W = () => !!self.document;
        let p = null;
        class U {
          constructor() {}
          sendMessage(a) {
            p.postMessage(a);
          }
          start_listening(a) {
            D.M_.set("Connected to SW");
            let i = this;
            function m(h) {
              (p = h),
                p.onMessage.addListener(function (C) {
                  a(C);
                }),
                p.onDisconnect.addListener(function (C) {
                  console.log("SW -- port disconnected"), D.M_.set("Failed");
                });
            }
            c().runtime.onConnect.hasListener(m) &&
              (console.log("SW -- listening on POPUP..."),
              c().runtime.onConnect.removeListener(m)),
              c().runtime.onConnect.addListener(m),
              c().runtime.lastError && console.error(c().runtime.lastError);
          }
        }
        class O {
          constructor(a = "port-from-popup") {}
          sendMessage(a) {
            return k(this, null, function* () {
              const [i] = yield navigator.serviceWorker.getRegistrations();
              if (!i || !i.active) {
                console.error("SW not found"), D.M_.set("Failed");
                return;
              } else
                try {
                  p &&
                    (yield p.postMessage(a),
                    c().runtime.lastError &&
                      (console.error(c().runtime.lastError),
                      D.M_.set("Failed")));
                } catch (m) {
                  console.error("POPUP -- sendMessage error", m),
                    D.M_.set("Failed"),
                    D.tq.set("Failed");
                }
            });
          }
          start_listening(a) {
            return k(this, null, function* () {
              console.log("POPUP -- listening to SW", this),
                (p = yield c().runtime.connect({ name: "port-from-popup" })),
                c().runtime.lastError &&
                  (console.error(c().runtime.lastError),
                  console.info("retrying to listen...")),
                p.onMessage.addListener(a),
                p.onDisconnect.addListener(function (i) {
                  console.log("Client -- port disconnected", this),
                    D.M_.set("Failed");
                });
            });
          }
        }
        const S = (R) => {
          let a = W() ? new O() : new U();
          return a.start_listening(R), (a.onMessage = a.start_listening), a;
        };
      },
      688: (v, w, s) => {
        s.d(w, { RH: () => $, TN: () => _, f0: () => B });
        var e = s(150),
          c = s.n(e);
        const D = (n) =>
            new Promise((o, u) => {
              const g = Object.keys(n)[0],
                b = n;
              (b[g] = JSON.stringify(n[g])),
                chrome.storage.local.set(b, () => {
                  console.log(`${JSON.stringify(b)} saved`), o(b);
                });
            }),
          W = (n) =>
            new Promise((o, u) => {
              chrome.storage.local.get(n, (g) => {
                const b = Object.keys(g).includes(n) ? g[n] : "{}";
                o(JSON.parse(b));
              });
            }),
          p = {
            sendMessage: (n, o) => {
              c().runtime.sendMessage(c().runtime.id, n, o);
            },
            onMessage: (n) =>
              k(this, null, function* () {
                c().runtime.onMessage.addListener(n),
                  console.info("SW -- Listening...");
              }),
          },
          U = {
            sendMessage: (n, o) => {
              console.log(
                "%c%s",
                "color: #00f; font-size: 11px;",
                "SW -- Sent: ",
                n
              ),
                c().runtime.sendMessage(c().runtime.id, n, o);
            },
            onMessage: (n) => {
              console.info("OpenTalk Listening..."),
                c().runtime.onMessage.addListener(n);
            },
          },
          O = (n, o, u) => {
            const g = u,
              b = o.log;
            function E(...A) {
              g && b.apply(o, [`[${n}]:`, A]);
            }
            return E;
          },
          S =
            (n) =>
            (...o) =>
              new Promise((u, g) => {
                n(...o, (b, E) => {
                  E ? g(E) : u(b);
                });
              }),
          R =
            (n) =>
            (...o) =>
              k(this, null, function* () {
                return new Promise((u, g) =>
                  n(...o, (b, E) => (E ? g(E) : u(b)))
                );
              }),
          a = (n, o) => (n.push.apply(n.push(o), n.splice(0, 1)), n),
          i = (n, o) => [...n.filter((u) => u !== o), o],
          m = (n) =>
            n.reduce((o, u) => o.concat(Array.isArray(u) ? m(u) : u), []),
          h = (n, o, u = !0) => {
            let g = [...n];
            if ((g.sort((b, E) => o.indexOf(b) - o.indexOf(E)), u)) {
              const b = g.filter((A) => o.includes(A)),
                E = g.filter((A) => !o.includes(A));
              g = [...b, ...E];
            }
            return g;
          },
          C = (n, o) => n.filter((u) => o.includes(u)),
          M = (n, o) => n.filter((u) => !o.includes(u)),
          y = (n, o) =>
            n
              .filter((u) => !o.includes(u))
              .concat(o.filter((u) => !n.includes(u))),
          j = (n, o, u, g) =>
            Object.values(n)
              .filter((b) => !(b[0] instanceof Array))
              .filter((b) => (u ? b[u] !== g : b))
              .map((b) => ({ [b[o]]: b }))
              .reduce((b, E) => {
                const A = Object.keys(E)[0],
                  J = {
                    [A]: Object.keys(b).includes(A)
                      ? [...b[A], [...E[A]]]
                      : [E[A]],
                  };
                return Ae(Ae({}, b), J);
              }, {}),
          K = (n) => (
            console.log(
              "%c%s",
              "color: #00f; font-size: 11px;",
              `SW -- Sleeping for ${n / 1e3}s`
            ),
            new Promise((o) => setTimeout(o, n))
          );
        function $(n, o) {
          return (
            Object.keys(o).forEach((u) => {
              n.hasOwnProperty(u) &&
              typeof n[u] == "object" &&
              !(n[u] instanceof Array)
                ? $(n[u], o[u])
                : (n[u] = o[u]);
            }),
            n
          );
        }
        const x = (n, o) =>
            o.some((u) => n.toLowerCase().includes(u.toLowerCase())),
          Y = (n) =>
            n
              ? `#${(((1 << 24) * Math.random()) | 0).toString(16)}`.padEnd(
                  7,
                  0
                )
              : "#41296b",
          t = (n, o = "local") =>
            k(this, null, function* () {
              return (
                (o = o.toLowerCase()),
                (o = ["sync", "local"].includes(o) ? o : "local"),
                yield browser.storage[o].set(n)
              );
            }),
          d = (n, o = "local") =>
            k(this, null, function* () {
              const u = yield browser.storage[o].get([n]),
                g = u && u[n];
              return console.log(`browser.storage.${o}[${n}] = `, g), g;
            }),
          r = (n, o = "local") =>
            k(this, null, function* () {
              return yield browser.storage[o].remove(n);
            }),
          L = (n) =>
            ((J) => {
              var T = J,
                { tabs: u, state: g, id: b, alwaysOnTop: E } = T,
                A = Ge(T, ["tabs", "state", "id", "alwaysOnTop"]);
              return Ae({}, A);
            })(n),
          f = (n) =>
            k(this, null, function* () {
              const o = (yield d("discardedTabs")) || [];
              for (let u = 0; u < n.length; u++)
                o.push(
                  ((H) => {
                    var Q = H,
                      {
                        id: g,
                        title: b,
                        favIconUrl: E,
                        windowId: A,
                        index: J,
                        groupId: T,
                        pinned: he,
                      } = Q,
                      Z = Ge(Q, [
                        "id",
                        "title",
                        "favIconUrl",
                        "windowId",
                        "index",
                        "groupId",
                        "pinned",
                      ]);
                    return {
                      id: g,
                      title: b,
                      url,
                      favIconUrl: E,
                      windowId: A,
                      index: J,
                      groupId: T,
                      pinned: he,
                      timestamp: new Date().toISOString(),
                    };
                  })(n[u])
                );
              yield t({ discardedTabs: o });
            }),
          B = (n, o, u, g) =>
            k(this, null, function* () {
              let b = encodeURIComponent(o),
                E;
              return (
                n.includes("chrome-extension") &&
                n.includes("/bifrost.html#ttl=")
                  ? (E = n.split("/bifrost.html")[1])
                  : (E =
                      "#ttl=" +
                      b +
                      "&pos=" +
                      (g || "0") +
                      "&uri=" +
                      n +
                      "&fav=" +
                      (u || "")),
                yield c().runtime.getURL("bifrost.html" + E)
              );
            });
        function _(n) {
          return n[~~(n.length * Math.random())];
        }
      },
      966: (v, w, s) => {
        s.d(w, { io: () => M, kQ: () => K });
        var e = s(891),
          c = s.n(e),
          D = s(688),
          W = s(634),
          p = s(185),
          U = s(150),
          O = s.n(U),
          S = s(670),
          R = s(170);
        let a = O().windows.getCurrent,
          i = !1;
        const m = "https://forms.gle/cq72cES1fUUTvVW38";
        i && console.log("Popup Opened");
        const h = (t, d) =>
          k(this, null, function* () {
            if (t.bg_answer)
              switch (t.bg_answer) {
                case "initial_data":
                  i && console.log("isPremiumUser", t.isPremiumUser),
                    (C = t.isPremiumUser);
                  try {
                    R.V_.set(t.isPremiumUser), R.eg.set(t.options);
                  } catch (L) {
                    console.error(
                      "premiumState/extOptionsState update error",
                      L
                    );
                  }
                  R.tq.set("Done"),
                    i &&
                      console.log(
                        "%c~>POPUP -- HandShake Done.",
                        "color:#555b6e; font-size: small; font-weight: 100; font-family: monospace;"
                      );
                  break;
                case "saveBtn_content":
                  var r = new Blob([t.content], { type: "text/plain" });
                  (yield O().permissions.contains({
                    permissions: ["downloads"],
                  }))
                    ? O().downloads.download({
                        url: URL.createObjectURL(r),
                        filename: "Ts2-SavedTabs.txt",
                      })
                    : chrome.permissions.request(
                        { permissions: ["downloads"] },
                        (L) => {
                          chrome.runtime.lastError &&
                            console.error(chrome.runtime.lastError.message),
                            L
                              ? chrome.downloads.download({
                                  url: URL.createObjectURL(r),
                                  filename: "Ts2-SavedTabs.txt",
                                })
                              : (console.warn(
                                  "%c~>POPUP -- Permission to download saved tabs was denied.",
                                  "color:#555b6e; font-size: small; font-weight: 100; font-family: monospace;"
                                ),
                                c().track(
                                  "Popup -- Permission to download saved tabs was denied"
                                ));
                        }
                      );
                  break;
              }
          });
        let C = null,
          M = (0, W.e1)(h),
          y = null;
        k(this, null, function* () {
          (y = yield a()),
            M.sendMessage({
              popup_window_id: y.id,
              fetch_data: "popup_starter",
            }),
            R.tq.set("Started"),
            c().init("cceb880f55fd32d61b14c2abc295a2bc", {
              debug: i,
              ignore_dnt: !0,
            }),
            console.info("mixpanel initialized"),
            c().track("popup opened");
        });
        const j = (t, d, r) => {
            const L = t[0] === "." ? t : "." + t,
              f = document.querySelector(L),
              B = f.querySelector(".feedback-indicator");
            let _ = null,
              n = null,
              o = C || $.includes(t) ? "badge-secondary" : "badge-neutral";
            f.addEventListener("click", (u) => {
              if (
                ["loadBtn", "githubBtn", "feedbackBtn", "wikiBtn"].includes(t)
              )
                d();
              else if (y)
                if (C)
                  i &&
                    console.log("POPUP::Sent ->>", {
                      popup_window_id: y.id,
                      pressedBtn: t,
                    }),
                    M.sendMessage({ popup_window_id: y.id, pressedBtn: t });
                else if ($.includes(t))
                  M.sendMessage({ popup_window_id: y.id, pressedBtn: t });
                else {
                  n && clearTimeout(n),
                    c().track("Clicked on premium btn", { pressedBtn: t });
                  const g = document.querySelector(".manageSubBtn");
                  g.classList.add(
                    "pulsate-fwd",
                    "bg-secondary",
                    "text-primary"
                  ),
                    (n = setTimeout(() => {
                      g.classList.remove(
                        "pulsate-fwd",
                        "bg-secondary",
                        "text-primary"
                      );
                    }, 1e3));
                }
              r.misc.popupClickFeedback &&
                (_ && clearTimeout(_),
                B.classList.remove("invisible"),
                (_ = setTimeout(() => {
                  B.classList.add("invisible");
                }, 1500))),
                c().track(`${t} clicked`);
            }),
              B.classList.add(o),
              !C && !$.includes(t) && f.classList.add("disabled");
          },
          K = (t) =>
            k(this, null, function* () {
              i && console.log("POPUP::initialize_popup", t),
                (t = (0, D.RH)(p.W, t)),
                (i = t.misc.debug),
                (t.split.numberOfWindows = +t.split.numberOfWindows),
                (t.sideBySide = Boolean(t.sideBySide)),
                i && console.log("active options = ", t),
                i && console.log("active Sort = ", t.sort.type);
              let d = document.querySelector("html");
              d.classList.toggle(t.theme),
                t.misc.compactMode && d.classList.add("full_compact"),
                x(t);
              const [r] = yield navigator.serviceWorker.getRegistrations();
              i && console.log("POPUP -- FOUND REGISTERED SW: ", r),
                r.addEventListener("updatefound", function () {
                  let L = r.installing;
                  c().track("POPUP -- WAITING on SW to be INSTALLED...", {
                    installingWorker: L,
                  });
                });
            }),
          $ = [
            "githubBtn",
            "optionBtn",
            "loadBtn",
            "mergeBtn",
            "saveBtn",
            "shuffleBtn",
            "sortCurrBtn",
            "feedbackBtn",
            "wikiBtn",
          ],
          x = (t) => {
            try {
              const d = {
                mergeBtn: (_) => () => {},
                mergeLastNBtn: (_) => () => {},
                sortCurrBtn: (_) => () => {},
                sortAllBtn: (_) => () => {},
                uniteBtn: (_) => () => {},
                splitBtnV: (_) => () => {},
                splitBtnH: (_) => () => {},
                splitByGrpBtn: (_) => () => {},
                shuffleBtn: (_) => () => {},
                isolateBtn: (_) => () => {},
                closeBtn: (_) => () => {},
                saveBtn: (_) => () => {},
                saveAllBtn: (_) => () => {},
                loadBtn: (_) => f.click(),
                freezeBtn: (_) => () => {},
                removeDuplicateBtn: (_) => () => {},
                stackBtn: (_) => () => {},
                focusBtn: () => {},
                unFocusBtn: () => {},
                feedbackBtn: (_) =>
                  window.open("https://tabsorter2.com/#/feedback"),
                githubBtn: (_) =>
                  window.open("https://github.com/Mimieam/TabSorter2"),
                wikiBtn: (_) => window.open("https://tabsorter2.com/"),
              };
              for (let [_, n] of Object.entries(d)) j(_, n, t);
              const r = (_) => {
                let n = _.target,
                  o = document.querySelector("html");
                (o.classList = Array.from(o.classList).filter(
                  (u) => !u.includes("Theme")
                )),
                  o.classList.toggle(t.theme, !!n.checked);
              };
              function L() {
                return k(this, null, function* () {
                  let _ = this.files;
                  (0, S.m)(_), i && console.log(_);
                });
              }
              let f = document.querySelector("#file-upload");
              f.addEventListener("change", L, !1);
              let B = document.querySelector("#toggleBtnTest");
              B && B.addEventListener("change", r, !1);
            } catch (d) {
              console.error("Popup::setupPopup2 - ERROR:", d);
            }
            console.info("POPUP -- DONE LOADING!");
          },
          Y = (t, d = null) =>
            k(this, null, function* () {
              const r = new Date().toISOString().split("T")[0],
                L = d || `Ts2-SavedTabs-${r}.txt`,
                B = yield (yield self.showSaveFilePicker({
                  suggestedName: L,
                  types: [
                    {
                      description: "Text file",
                      accept: { "text/plain": [".txt"] },
                    },
                  ],
                })).createWritable();
              yield B.write(t), yield B.close();
            });
        addEventListener(
          "unload",
          function (t) {
            c().track("Popup Closed");
          },
          !0
        );
      },
      851: () => {},
      280: () => {},
      447: () => {},
      233: () => {},
      237: () => {},
      69: (v, w, s) => {
        s.d(w, { Z: () => Y });
        var e = s(234),
          c = s(150),
          D = s.n(c),
          W = s(958),
          p = s(270),
          U = s(747),
          O = s(688),
          S = s(966),
          R = s(891),
          a = s.n(R),
          i = s(170),
          m = s(851);
        function h(t, d, r) {
          const L = t.slice();
          return (L[13] = d[r]), L;
        }
        function C(t) {
          let d, r, L, f;
          function B() {
            return t[6](t[13]);
          }
          return (
            (r = new p.Z({
              props: {
                text: "",
                btnNameClass: t[13].btnNameClass,
                wrapperClass: "mb-2",
                iconData: t[13].iconData,
                disable: t[13].ignorePremium ? !1 : !t[1],
                onClickHandler: B,
              },
            })),
            {
              c() {
                (d = (0, e.bGB)("div")),
                  (0, e.YCL)(r.$$.fragment),
                  (L = (0, e.DhX)());
              },
              m(_, n) {
                (0, e.$Tr)(_, d, n),
                  (0, e.yef)(r, d, null),
                  (0, e.R3I)(d, L),
                  (f = !0);
              },
              p(_, n) {
                t = _;
                const o = {};
                n & 2 && (o.disable = t[13].ignorePremium ? !1 : !t[1]),
                  r.$set(o);
              },
              i(_) {
                f || ((0, e.Ui)(r.$$.fragment, _), (f = !0));
              },
              o(_) {
                (0, e.etI)(r.$$.fragment, _), (f = !1);
              },
              d(_) {
                _ && (0, e.ogt)(d), (0, e.vpE)(r);
              },
            }
          );
        }
        function M(t) {
          return { c: e.ZTd, m: e.ZTd, p: e.ZTd, d: e.ZTd };
        }
        function y(t) {
          let d, r, L;
          return {
            c() {
              (d = (0, e.bGB)("i")),
                (0, e.Ljt)(
                  d,
                  "class",
                  (r =
                    (0, e.H1I)(
                      `ts-icon-status i-emo-${
                        t[2] == "Failed" ? "unhappy" : t[3]
                      } text-primary`
                    ) + " svelte-19c7mjm")
                ),
                (0, e.Ljt)(
                  d,
                  "style",
                  (L = `margin-left: ${
                    t[3] == "coffee" ? "-6px" : t[3] == "beer" ? "-11px" : ""
                  }`)
                );
            },
            m(f, B) {
              (0, e.$Tr)(f, d, B);
            },
            p(f, B) {
              B & 12 &&
                r !==
                  (r =
                    (0, e.H1I)(
                      `ts-icon-status i-emo-${
                        f[2] == "Failed" ? "unhappy" : f[3]
                      } text-primary`
                    ) + " svelte-19c7mjm") &&
                (0, e.Ljt)(d, "class", r),
                B & 8 &&
                  L !==
                    (L = `margin-left: ${
                      f[3] == "coffee" ? "-6px" : f[3] == "beer" ? "-11px" : ""
                    }`) &&
                  (0, e.Ljt)(d, "style", L);
            },
            d(f) {
              f && (0, e.ogt)(d);
            },
          };
        }
        function j(t) {
          let d, r;
          return {
            c() {
              (d = (0, e.bGB)("i")),
                (0, e.Ljt)(
                  d,
                  "class",
                  (r =
                    (0, e.H1I)(
                      `ts-icon-status i-emo-${
                        t[2] == "Failed" ? "unhappy" : "sleep"
                      } text-primary`
                    ) + " svelte-19c7mjm")
                );
            },
            m(L, f) {
              (0, e.$Tr)(L, d, f);
            },
            p(L, f) {
              f & 4 &&
                r !==
                  (r =
                    (0, e.H1I)(
                      `ts-icon-status i-emo-${
                        L[2] == "Failed" ? "unhappy" : "sleep"
                      } text-primary`
                    ) + " svelte-19c7mjm") &&
                (0, e.Ljt)(d, "class", r);
            },
            d(L) {
              L && (0, e.ogt)(d);
            },
          };
        }
        function K(t) {
          let d,
            r,
            L,
            f,
            B,
            _,
            n,
            o,
            u,
            g,
            b,
            E,
            A,
            J,
            T,
            he,
            Z,
            H,
            Q,
            Fe,
            ne,
            Ke,
            se,
            Ze,
            we,
            He,
            ae,
            Xe,
            oe,
            ze,
            Ee,
            q,
            le,
            Ye,
            De,
            Ve,
            re,
            Je,
            Le,
            ie,
            Qe,
            ce,
            qe,
            ee,
            Pe,
            _e,
            et,
            de,
            tt,
            Be,
            ue,
            nt,
            fe,
            st,
            je,
            pe,
            at,
            Ce,
            Ie,
            me,
            ot,
            Oe,
            lt,
            ke,
            Me,
            rt,
            ye,
            te,
            Te,
            it,
            Ue,
            ct,
            Re,
            _t,
            We,
            ge,
            dt,
            be,
            Se,
            ve = t[5],
            N = [];
          for (let l = 0; l < ve.length; l += 1) N[l] = C(h(t, ve, l));
          const yt = (l) =>
            (0, e.etI)(N[l], 1, 1, () => {
              N[l] = null;
            });
          let V = {
            ctx: t,
            current: null,
            token: null,
            hasCatch: !1,
            pending: j,
            then: y,
            catch: M,
            value: 12,
          };
          return (
            (0, e.CR_)((A = t[4]), V),
            (Q = new p.Z({
              props: {
                text: "Merge All",
                btnNameClass: "mergeBtn",
                iconData: "i-merge",
              },
            })),
            (ne = new p.Z({
              props: {
                text: "Merge last 2",
                btnNameClass: "mergeLastNBtn",
                iconData: "i-merge",
                iconStyle: "transform: rotate(45deg);",
                disable: !t[1],
              },
            })),
            (se = new p.Z({
              props: {
                text: "Sort All",
                btnNameClass: "sortAllBtn",
                iconData: "i-sort-all",
                disable: !t[1],
              },
            })),
            (we = new p.Z({
              props: {
                text: "Sort Current",
                btnNameClass: "sortCurrBtn",
                iconData: "i-sort",
              },
            })),
            (ae = new p.Z({
              props: {
                text: "Focus",
                btnNameClass: "focusBtn",
                iconData: "i-target",
                disable: !t[1],
              },
            })),
            (oe = new p.Z({
              props: {
                text: "UnFocus",
                btnNameClass: "unFocusBtn",
                iconData: "i-focus-1",
                disable: !t[1],
              },
            })),
            (le = new p.Z({
              props: {
                text: "Split V",
                btnNameClass: "splitBtnV",
                iconData: "i-split",
                disable: !t[1],
              },
            })),
            (De = new p.Z({
              props: {
                text: "Shuffle",
                btnNameClass: "shuffleBtn",
                iconData: "i-shuffle",
                wrapperClass: "",
              },
            })),
            (re = new p.Z({
              props: {
                text: "Stack",
                btnNameClass: "stackBtn",
                iconData: "i-undo",
                disable: !t[1],
              },
            })),
            (ie = new p.Z({
              props: {
                text: "Split H",
                btnNameClass: "splitBtnH",
                iconData: "i-split",
                iconStyle: "transform: rotate(-90deg);",
                disable: !t[1],
              },
            })),
            (ce = new p.Z({
              props: {
                text: "Split Domains",
                btnNameClass: "splitByGrpBtn",
                iconData: "i-flow-merge",
                wrapperClass: "col-span-2",
                disable: !t[1],
              },
            })),
            (_e = new p.Z({
              props: {
                text: "Unite",
                btnNameClass: "uniteBtn",
                iconData: "i-unite-3",
                disable: !t[1],
              },
            })),
            (de = new p.Z({
              props: {
                text: "Isolate",
                btnNameClass: "isolateBtn",
                iconData: "i-isolate",
                disable: !t[1],
              },
            })),
            (ue = new p.Z({
              props: {
                text: "Freeze",
                btnNameClass: "freezeBtn",
                iconData: "i-microchip",
                disable: !t[1],
              },
            })),
            (fe = new p.Z({
              props: {
                text: "Close",
                btnNameClass: "closeBtn",
                iconData: "i-cancel-2",
                disable: !t[1],
              },
            })),
            (pe = new p.Z({
              props: {
                text: "Remove Duplicates",
                btnNameClass: "removeDuplicateBtn",
                iconData: "i-clone",
                wrapperClass: "col-span-3",
                disable: !t[1],
              },
            })),
            (me = new p.Z({
              props: {
                text: "Save All",
                btnNameClass: "saveAllBtn",
                iconData: "i-save",
                disable: !t[1],
              },
            })),
            (Oe = new p.Z({
              props: {
                text: "Save Current",
                btnNameClass: "saveBtn",
                iconData: "i-save",
              },
            })),
            (Me = new p.Z({
              props: {
                text: "Load",
                btnNameClass: "loadBtn",
                iconData: "i-upload-outline",
                innerHTML:
                  '<input type="file" name="file" id="file-upload" class="inputfile hidden" multiple />',
                wrapperClass: "col-span-3",
              },
            })),
            (Te = new p.Z({
              props: {
                text: "GitHub",
                btnNameClass: "githubBtn",
                iconData: "i-github",
                disableText: !0,
              },
            })),
            (Ue = new p.Z({
              props: {
                text: "FeedBack",
                btnNameClass: "feedbackBtn",
                iconData: "i-paper-plane",
                disableText: !1,
                wrapperClass: "col-span-3",
              },
            })),
            (Re = new p.Z({
              props: {
                text: "Help",
                btnNameClass: "wikiBtn",
                iconData: "i-help",
                disableText: !0,
                wrapperClass: "small",
              },
            })),
            (ge = new p.Z({
              props: {
                text: t[1] ? "Manage Sub" : "Unlock Premium Version",
                btnNameClass: "manageSubBtn",
                iconData: "i-settings",
                wrapperClass: "col-span-3",
                onClickHandler: t[7],
              },
            })),
            (be = new U.Z({ props: { opened: t[0] } })),
            {
              c() {
                (d = (0, e.bGB)("meta")),
                  (r = (0, e.DhX)()),
                  (L = (0, e.bGB)("div")),
                  (f = (0, e.bGB)("div")),
                  (B = (0, e.bGB)("div"));
                for (let l = 0; l < N.length; l += 1) N[l].c();
                (_ = (0, e.DhX)()),
                  (n = (0, e.bGB)("div")),
                  (o = (0, e.bGB)("i")),
                  (b = (0, e.DhX)()),
                  (E = (0, e.bGB)("div")),
                  V.block.c(),
                  (J = (0, e.DhX)()),
                  (T = (0, e.bGB)("div")),
                  (T.textContent = `v${D().runtime.getManifest().version}`),
                  (he = (0, e.DhX)()),
                  (Z = (0, e.bGB)("div")),
                  (H = (0, e.bGB)("div")),
                  (0, e.YCL)(Q.$$.fragment),
                  (Fe = (0, e.DhX)()),
                  (0, e.YCL)(ne.$$.fragment),
                  (Ke = (0, e.DhX)()),
                  (0, e.YCL)(se.$$.fragment),
                  (Ze = (0, e.DhX)()),
                  (0, e.YCL)(we.$$.fragment),
                  (He = (0, e.DhX)()),
                  (0, e.YCL)(ae.$$.fragment),
                  (Xe = (0, e.DhX)()),
                  (0, e.YCL)(oe.$$.fragment),
                  (ze = (0, e.DhX)()),
                  (Ee = (0, e.bGB)("div")),
                  (q = (0, e.bGB)("div")),
                  (0, e.YCL)(le.$$.fragment),
                  (Ye = (0, e.DhX)()),
                  (0, e.YCL)(De.$$.fragment),
                  (Ve = (0, e.DhX)()),
                  (0, e.YCL)(re.$$.fragment),
                  (Je = (0, e.DhX)()),
                  (Le = (0, e.bGB)("div")),
                  (0, e.YCL)(ie.$$.fragment),
                  (Qe = (0, e.DhX)()),
                  (0, e.YCL)(ce.$$.fragment),
                  (qe = (0, e.DhX)()),
                  (ee = (0, e.bGB)("div")),
                  (Pe = (0, e.bGB)("div")),
                  (0, e.YCL)(_e.$$.fragment),
                  (et = (0, e.DhX)()),
                  (0, e.YCL)(de.$$.fragment),
                  (tt = (0, e.DhX)()),
                  (Be = (0, e.bGB)("div")),
                  (0, e.YCL)(ue.$$.fragment),
                  (nt = (0, e.DhX)()),
                  (0, e.YCL)(fe.$$.fragment),
                  (st = (0, e.DhX)()),
                  (je = (0, e.bGB)("div")),
                  (0, e.YCL)(pe.$$.fragment),
                  (at = (0, e.DhX)()),
                  (Ce = (0, e.bGB)("div")),
                  (Ie = (0, e.bGB)("div")),
                  (0, e.YCL)(me.$$.fragment),
                  (ot = (0, e.DhX)()),
                  (0, e.YCL)(Oe.$$.fragment),
                  (lt = (0, e.DhX)()),
                  (ke = (0, e.bGB)("div")),
                  (0, e.YCL)(Me.$$.fragment),
                  (rt = (0, e.DhX)()),
                  (ye = (0, e.bGB)("div")),
                  (te = (0, e.bGB)("div")),
                  (0, e.YCL)(Te.$$.fragment),
                  (it = (0, e.DhX)()),
                  (0, e.YCL)(Ue.$$.fragment),
                  (ct = (0, e.DhX)()),
                  (0, e.YCL)(Re.$$.fragment),
                  (_t = (0, e.DhX)()),
                  (We = (0, e.bGB)("div")),
                  (0, e.YCL)(ge.$$.fragment),
                  (dt = (0, e.DhX)()),
                  (0, e.YCL)(be.$$.fragment),
                  (0, e.Ljt)(d, "name", "viewport"),
                  (0, e.Ljt)(
                    d,
                    "content",
                    "width=device-width, initial-scale=1.0"
                  ),
                  (0, e.Ljt)(B, "class", "sidebar-button-group svelte-19c7mjm"),
                  (0, e.Ljt)(
                    o,
                    "class",
                    (u =
                      (0, e.H1I)("ts-icon-status i-up-1 text-primary") +
                      " svelte-19c7mjm")
                  ),
                  (0, e.Ljt)(
                    n,
                    "class",
                    (g =
                      (0, e.H1I)(
                        `attention-grabbing-arrow ${
                          t[2] == "Failed"
                            ? "slide-in-blurred-bottom"
                            : "invisible"
                        }`
                      ) + " svelte-19c7mjm")
                  ),
                  (0, e.Ljt)(
                    T,
                    "class",
                    "text-sm text-primary flex justify-center"
                  ),
                  (0, e.Ljt)(E, "class", "version_and_status svelte-19c7mjm"),
                  (0, e.Ljt)(
                    f,
                    "class",
                    "sidebar flex-item space-between row experimental-sidebar w-auto svelte-19c7mjm"
                  ),
                  (0, e.Ljt)(L, "class", "flex-container column text-center"),
                  (0, e.Ljt)(
                    H,
                    "class",
                    "app container mx-auto w-1/3 grid grid-cols-2 grid-rows-3 gap-x-2 gap-y-2  svelte-19c7mjm"
                  ),
                  (0, e.Ljt)(
                    q,
                    "class",
                    "grid grid-cols-3 grid-rows-1 gap-x-1"
                  ),
                  (0, e.Ljt)(
                    Le,
                    "class",
                    "grid grid-cols-3 grid-rows-1 gap-x-1"
                  ),
                  (0, e.Ljt)(
                    Ee,
                    "class",
                    "app container mx-auto w-1/3 grid grid-rows-2 gap-x-2 gap-y-2 grid-flow-col svelte-19c7mjm"
                  ),
                  (0, e.Ljt)(
                    Pe,
                    "class",
                    "grid grid-cols-2 grid-rows-1 gap-x-1 gap-y-2"
                  ),
                  (0, e.Ljt)(
                    Be,
                    "class",
                    "grid grid-cols-2 grid-rows-1 gap-x-1 gap-y-2"
                  ),
                  (0, e.Ljt)(je, "class", "grid grid-cols-3 grid-rows-1"),
                  (0, e.Ljt)(
                    ee,
                    "class",
                    "app container mx-auto w-1/3 grid grid-rows-3 gap-x-2 gap-y-2 grid-flow-col svelte-19c7mjm"
                  ),
                  (0, e.Ljt)(
                    Ie,
                    "class",
                    "grid grid-cols-2 grid-rows-1 gap-x-1 gap-y-2"
                  ),
                  (0, e.Ljt)(ke, "class", "grid grid-cols-3 grid-rows-1"),
                  (0, e.Ljt)(
                    Ce,
                    "class",
                    "app container mx-auto w-1/3 grid grid-rows-2 gap-x-2 gap-y-2 grid-flow-col svelte-19c7mjm"
                  ),
                  (0, e.Ljt)(
                    te,
                    "class",
                    "grid grid-cols-5 grid-rows-1 gap-x-1 gap-y-2"
                  ),
                  (0, e.Ljt)(We, "class", "grid grid-cols-1 grid-rows-1"),
                  (0, e.Ljt)(
                    ye,
                    "class",
                    "app container mx-auto w-1/3 grid grid-rows-2 gap-x-2 gap-y-2 grid-flow-col svelte-19c7mjm"
                  );
              },
              m(l, I) {
                (0, e.R3I)(document.head, d),
                  (0, e.$Tr)(l, r, I),
                  (0, e.$Tr)(l, L, I),
                  (0, e.R3I)(L, f),
                  (0, e.R3I)(f, B);
                for (let $e = 0; $e < N.length; $e += 1) N[$e].m(B, null);
                (0, e.R3I)(f, _),
                  (0, e.R3I)(f, n),
                  (0, e.R3I)(n, o),
                  (0, e.R3I)(f, b),
                  (0, e.R3I)(f, E),
                  V.block.m(E, (V.anchor = null)),
                  (V.mount = () => E),
                  (V.anchor = J),
                  (0, e.R3I)(E, J),
                  (0, e.R3I)(E, T),
                  (0, e.$Tr)(l, he, I),
                  (0, e.$Tr)(l, Z, I),
                  (0, e.R3I)(Z, H),
                  (0, e.yef)(Q, H, null),
                  (0, e.R3I)(H, Fe),
                  (0, e.yef)(ne, H, null),
                  (0, e.R3I)(H, Ke),
                  (0, e.yef)(se, H, null),
                  (0, e.R3I)(H, Ze),
                  (0, e.yef)(we, H, null),
                  (0, e.R3I)(H, He),
                  (0, e.yef)(ae, H, null),
                  (0, e.R3I)(H, Xe),
                  (0, e.yef)(oe, H, null),
                  (0, e.R3I)(Z, ze),
                  (0, e.R3I)(Z, Ee),
                  (0, e.R3I)(Ee, q),
                  (0, e.yef)(le, q, null),
                  (0, e.R3I)(q, Ye),
                  (0, e.yef)(De, q, null),
                  (0, e.R3I)(q, Ve),
                  (0, e.yef)(re, q, null),
                  (0, e.R3I)(Ee, Je),
                  (0, e.R3I)(Ee, Le),
                  (0, e.yef)(ie, Le, null),
                  (0, e.R3I)(Le, Qe),
                  (0, e.yef)(ce, Le, null),
                  (0, e.R3I)(Z, qe),
                  (0, e.R3I)(Z, ee),
                  (0, e.R3I)(ee, Pe),
                  (0, e.yef)(_e, Pe, null),
                  (0, e.R3I)(Pe, et),
                  (0, e.yef)(de, Pe, null),
                  (0, e.R3I)(ee, tt),
                  (0, e.R3I)(ee, Be),
                  (0, e.yef)(ue, Be, null),
                  (0, e.R3I)(Be, nt),
                  (0, e.yef)(fe, Be, null),
                  (0, e.R3I)(ee, st),
                  (0, e.R3I)(ee, je),
                  (0, e.yef)(pe, je, null),
                  (0, e.R3I)(Z, at),
                  (0, e.R3I)(Z, Ce),
                  (0, e.R3I)(Ce, Ie),
                  (0, e.yef)(me, Ie, null),
                  (0, e.R3I)(Ie, ot),
                  (0, e.yef)(Oe, Ie, null),
                  (0, e.R3I)(Ce, lt),
                  (0, e.R3I)(Ce, ke),
                  (0, e.yef)(Me, ke, null),
                  (0, e.R3I)(Z, rt),
                  (0, e.R3I)(Z, ye),
                  (0, e.R3I)(ye, te),
                  (0, e.yef)(Te, te, null),
                  (0, e.R3I)(te, it),
                  (0, e.yef)(Ue, te, null),
                  (0, e.R3I)(te, ct),
                  (0, e.yef)(Re, te, null),
                  (0, e.R3I)(ye, _t),
                  (0, e.R3I)(ye, We),
                  (0, e.yef)(ge, We, null),
                  (0, e.R3I)(Z, dt),
                  (0, e.yef)(be, Z, null),
                  (Se = !0);
              },
              p(l, [I]) {
                if (((t = l), I & 34)) {
                  ve = t[5];
                  let X;
                  for (X = 0; X < ve.length; X += 1) {
                    const Ct = h(t, ve, X);
                    N[X]
                      ? (N[X].p(Ct, I), (0, e.Ui)(N[X], 1))
                      : ((N[X] = C(Ct)),
                        N[X].c(),
                        (0, e.Ui)(N[X], 1),
                        N[X].m(B, null));
                  }
                  for ((0, e.dvw)(), X = ve.length; X < N.length; X += 1) yt(X);
                  (0, e.gbL)();
                }
                (!Se ||
                  (I & 4 &&
                    g !==
                      (g =
                        (0, e.H1I)(
                          `attention-grabbing-arrow ${
                            t[2] == "Failed"
                              ? "slide-in-blurred-bottom"
                              : "invisible"
                          }`
                        ) + " svelte-19c7mjm"))) &&
                  (0, e.Ljt)(n, "class", g),
                  (V.ctx = t),
                  (I & 16 && A !== (A = t[4]) && (0, e.CR_)(A, V)) ||
                    (0, e.xfz)(V, t, I);
                const $e = {};
                I & 2 && ($e.disable = !t[1]), ne.$set($e);
                const ut = {};
                I & 2 && (ut.disable = !t[1]), se.$set(ut);
                const ft = {};
                I & 2 && (ft.disable = !t[1]), ae.$set(ft);
                const pt = {};
                I & 2 && (pt.disable = !t[1]), oe.$set(pt);
                const mt = {};
                I & 2 && (mt.disable = !t[1]), le.$set(mt);
                const gt = {};
                I & 2 && (gt.disable = !t[1]), re.$set(gt);
                const bt = {};
                I & 2 && (bt.disable = !t[1]), ie.$set(bt);
                const vt = {};
                I & 2 && (vt.disable = !t[1]), ce.$set(vt);
                const ht = {};
                I & 2 && (ht.disable = !t[1]), _e.$set(ht);
                const wt = {};
                I & 2 && (wt.disable = !t[1]), de.$set(wt);
                const Et = {};
                I & 2 && (Et.disable = !t[1]), ue.$set(Et);
                const Dt = {};
                I & 2 && (Dt.disable = !t[1]), fe.$set(Dt);
                const Lt = {};
                I & 2 && (Lt.disable = !t[1]), pe.$set(Lt);
                const Pt = {};
                I & 2 && (Pt.disable = !t[1]), me.$set(Pt);
                const Ne = {};
                I & 2 &&
                  (Ne.text = t[1] ? "Manage Sub" : "Unlock Premium Version"),
                  I & 2 && (Ne.onClickHandler = t[7]),
                  ge.$set(Ne);
                const Bt = {};
                I & 1 && (Bt.opened = t[0]), be.$set(Bt);
              },
              i(l) {
                if (!Se) {
                  for (let I = 0; I < ve.length; I += 1) (0, e.Ui)(N[I]);
                  (0, e.Ui)(Q.$$.fragment, l),
                    (0, e.Ui)(ne.$$.fragment, l),
                    (0, e.Ui)(se.$$.fragment, l),
                    (0, e.Ui)(we.$$.fragment, l),
                    (0, e.Ui)(ae.$$.fragment, l),
                    (0, e.Ui)(oe.$$.fragment, l),
                    (0, e.Ui)(le.$$.fragment, l),
                    (0, e.Ui)(De.$$.fragment, l),
                    (0, e.Ui)(re.$$.fragment, l),
                    (0, e.Ui)(ie.$$.fragment, l),
                    (0, e.Ui)(ce.$$.fragment, l),
                    (0, e.Ui)(_e.$$.fragment, l),
                    (0, e.Ui)(de.$$.fragment, l),
                    (0, e.Ui)(ue.$$.fragment, l),
                    (0, e.Ui)(fe.$$.fragment, l),
                    (0, e.Ui)(pe.$$.fragment, l),
                    (0, e.Ui)(me.$$.fragment, l),
                    (0, e.Ui)(Oe.$$.fragment, l),
                    (0, e.Ui)(Me.$$.fragment, l),
                    (0, e.Ui)(Te.$$.fragment, l),
                    (0, e.Ui)(Ue.$$.fragment, l),
                    (0, e.Ui)(Re.$$.fragment, l),
                    (0, e.Ui)(ge.$$.fragment, l),
                    (0, e.Ui)(be.$$.fragment, l),
                    (Se = !0);
                }
              },
              o(l) {
                N = N.filter(Boolean);
                for (let I = 0; I < N.length; I += 1) (0, e.etI)(N[I]);
                (0, e.etI)(Q.$$.fragment, l),
                  (0, e.etI)(ne.$$.fragment, l),
                  (0, e.etI)(se.$$.fragment, l),
                  (0, e.etI)(we.$$.fragment, l),
                  (0, e.etI)(ae.$$.fragment, l),
                  (0, e.etI)(oe.$$.fragment, l),
                  (0, e.etI)(le.$$.fragment, l),
                  (0, e.etI)(De.$$.fragment, l),
                  (0, e.etI)(re.$$.fragment, l),
                  (0, e.etI)(ie.$$.fragment, l),
                  (0, e.etI)(ce.$$.fragment, l),
                  (0, e.etI)(_e.$$.fragment, l),
                  (0, e.etI)(de.$$.fragment, l),
                  (0, e.etI)(ue.$$.fragment, l),
                  (0, e.etI)(fe.$$.fragment, l),
                  (0, e.etI)(pe.$$.fragment, l),
                  (0, e.etI)(me.$$.fragment, l),
                  (0, e.etI)(Oe.$$.fragment, l),
                  (0, e.etI)(Me.$$.fragment, l),
                  (0, e.etI)(Te.$$.fragment, l),
                  (0, e.etI)(Ue.$$.fragment, l),
                  (0, e.etI)(Re.$$.fragment, l),
                  (0, e.etI)(ge.$$.fragment, l),
                  (0, e.etI)(be.$$.fragment, l),
                  (Se = !1);
              },
              d(l) {
                (0, e.ogt)(d),
                  l && (0, e.ogt)(r),
                  l && (0, e.ogt)(L),
                  (0, e.RMB)(N, l),
                  V.block.d(),
                  (V.token = null),
                  (V = null),
                  l && (0, e.ogt)(he),
                  l && (0, e.ogt)(Z),
                  (0, e.vpE)(Q),
                  (0, e.vpE)(ne),
                  (0, e.vpE)(se),
                  (0, e.vpE)(we),
                  (0, e.vpE)(ae),
                  (0, e.vpE)(oe),
                  (0, e.vpE)(le),
                  (0, e.vpE)(De),
                  (0, e.vpE)(re),
                  (0, e.vpE)(ie),
                  (0, e.vpE)(ce),
                  (0, e.vpE)(_e),
                  (0, e.vpE)(de),
                  (0, e.vpE)(ue),
                  (0, e.vpE)(fe),
                  (0, e.vpE)(pe),
                  (0, e.vpE)(me),
                  (0, e.vpE)(Oe),
                  (0, e.vpE)(Me),
                  (0, e.vpE)(Te),
                  (0, e.vpE)(Ue),
                  (0, e.vpE)(Re),
                  (0, e.vpE)(ge),
                  (0, e.vpE)(be);
              },
            }
          );
        }
        function $(t, d, r) {
          let L = !1;
          i.H5.subscribe((T) => {
            r(0, (L = T));
          });
          let f = null;
          i.eg.subscribe((T) => {
            f = T;
          });
          let B = !1;
          i.V_.subscribe((T) => {
            console.log("PREMIUMSTATE -- ", T), r(1, (B = T));
          });
          let _ = null;
          i.tq.subscribe((T) =>
            k(this, null, function* () {
              console.log("POPUPHANDSHAKE -- ", _),
                (_ = T),
                T == "Done" && ((0, S.kQ)(yield f), r(4, (b = yield g()))),
                S.io.sendMessage("Checking that HeartBeat...");
            })
          );
          let n = null;
          i.M_.subscribe((T) => {
            console.log("PORTLINK -- ", T), r(2, (n = T));
          });
          let o = null;
          i.ci.subscribe((T) => {
            console.log("POPUPWINDOWID -- ", T), (o = T);
          });
          let u = "coffee";
          function g() {
            return k(this, null, function* () {
              return yield new Promise((T, he) => {
                _ == "Done" && T({ isPremium: B, popupHandShake: _ });
              });
            });
          }
          let b = g();
          return [
            L,
            B,
            n,
            u,
            b,
            [
              {
                text: "new Btn",
                btnNameClass: "newBtn",
                iconData: "i-asterisk",
                ignorePremium: !0,
                onClick: () => {
                  console.log("new Btn clicked"),
                    r(
                      3,
                      (u = (0, O.TN)([
                        "happy",
                        "unhappy",
                        "sleep",
                        "laugh",
                        "squint",
                        "angry",
                        "sunglasses",
                        "coffee",
                        "beer",
                      ]))
                    );
                },
              },
              {
                text: "reload extension",
                btnNameClass: "softResetBtn",
                iconData: "i-loop",
                ignorePremium: !0,
                onClick: () => {
                  a().track("reload Btn clicked"),
                    console.log("reload Btn clicked"),
                    D().runtime.reload();
                },
              },
            ],
            (T) => {
              T.onClick();
            },
            () => {
              console.log("from SVELTE -> Opening ExtPay page", B),
                S.io.sendMessage({ open: "openPaymentPage" });
            },
          ];
        }
        class x extends e.f_C {
          constructor(d) {
            super(), (0, e.S1n)(this, d, $, K, e.N8, {});
          }
        }
        const Y = x;
      },
      270: (v, w, s) => {
        s.d(w, { Z: () => R });
        var e = s(234),
          c = s(958),
          D = s(426),
          W = s(280);
        function p(a) {
          let i, m;
          return {
            c() {
              (i = (0, e.bGB)("span")),
                (m = (0, e.fLW)(a[2])),
                (0, e.Ljt)(i, "class", "ts-innerLabel");
            },
            m(h, C) {
              (0, e.$Tr)(h, i, C), (0, e.R3I)(i, m);
            },
            p(h, C) {
              C & 4 && (0, e.rTO)(m, h[2]);
            },
            d(h) {
              h && (0, e.ogt)(i);
            },
          };
        }
        function U(a) {
          let i,
            m,
            h,
            C,
            M,
            y,
            j,
            K,
            $,
            x,
            Y,
            t,
            d,
            r,
            L,
            f = !a[6] && p(a);
          return (
            (K = new D.Z({})),
            {
              c() {
                (i = (0, e.bGB)("div")),
                  (m = (0, e.bGB)("div")),
                  (h = (0, e.bGB)("button")),
                  (C = (0, e.bGB)("i")),
                  (y = (0, e.DhX)()),
                  f && f.c(),
                  (j = (0, e.DhX)()),
                  (0, e.YCL)(K.$$.fragment),
                  ($ = (0, e.DhX)()),
                  (x = new e.FWw(!1)),
                  (0, e.Ljt)(
                    C,
                    "class",
                    (M = (0, e.H1I)(`ts-icon ${a[1]}`) + " svelte-c8ugx1")
                  ),
                  (0, e.Ljt)(C, "style", a[5]),
                  (x.a = null),
                  (0, e.Ljt)(
                    h,
                    "class",
                    (Y =
                      "button " +
                      a[8] +
                      " " +
                      (a[0] == "Pressed"
                        ? "bg-primary-focus transform translate-y-1.5"
                        : "bg-primary solid_shadow solid_shadow:hover transition solid_shadow:active") +
                      " w-full h-9 rounded-lg text-center text-sm font-normal border-primary-focus hover:border-primary hover:bg-primary-focus place-items-center place-content-center flex " +
                      (a[7]
                        ? "disabled text-gray-600 bg-gray-300 hover:text-gray-600"
                        : "text-red-900 hover:text-white") +
                      " svelte-c8ugx1")
                  ),
                  (0, e.Ljt)(m, "class", "indicator block w-auto"),
                  (0, e.Ljt)(i, "data-tip", a[4]),
                  (0, e.Ljt)(
                    i,
                    "class",
                    (t =
                      "" +
                      a[3] +
                      " " +
                      (a[0] == "Pressed" ? "tooltip-open" : "") +
                      " " +
                      (a[7], "") +
                      " svelte-c8ugx1")
                  );
              },
              m(B, _) {
                (0, e.$Tr)(B, i, _),
                  (0, e.R3I)(i, m),
                  (0, e.R3I)(m, h),
                  (0, e.R3I)(h, C),
                  (0, e.R3I)(h, y),
                  f && f.m(h, null),
                  (0, e.R3I)(h, j),
                  (0, e.yef)(K, h, null),
                  (0, e.R3I)(h, $),
                  x.m(a[9], h),
                  (d = !0),
                  r ||
                    ((L = (0, e.oLt)(h, "click", function () {
                      (0, e.sBU)(a[10]) && a[10].apply(this, arguments);
                    })),
                    (r = !0));
              },
              p(B, [_]) {
                (a = B),
                  (!d ||
                    (_ & 2 &&
                      M !==
                        (M =
                          (0, e.H1I)(`ts-icon ${a[1]}`) + " svelte-c8ugx1"))) &&
                    (0, e.Ljt)(C, "class", M),
                  (!d || _ & 32) && (0, e.Ljt)(C, "style", a[5]),
                  a[6]
                    ? f && (f.d(1), (f = null))
                    : f
                    ? f.p(a, _)
                    : ((f = p(a)), f.c(), f.m(h, j)),
                  (!d || _ & 512) && x.p(a[9]),
                  (!d ||
                    (_ & 385 &&
                      Y !==
                        (Y =
                          "button " +
                          a[8] +
                          " " +
                          (a[0] == "Pressed"
                            ? "bg-primary-focus transform translate-y-1.5"
                            : "bg-primary solid_shadow solid_shadow:hover transition solid_shadow:active") +
                          " w-full h-9 rounded-lg text-center text-sm font-normal border-primary-focus hover:border-primary hover:bg-primary-focus place-items-center place-content-center flex " +
                          (a[7]
                            ? "disabled text-gray-600 bg-gray-300 hover:text-gray-600"
                            : "text-red-900 hover:text-white") +
                          " svelte-c8ugx1"))) &&
                    (0, e.Ljt)(h, "class", Y),
                  (!d || _ & 16) && (0, e.Ljt)(i, "data-tip", a[4]),
                  (!d ||
                    (_ & 137 &&
                      t !==
                        (t =
                          "" +
                          a[3] +
                          " " +
                          (a[0] == "Pressed" ? "tooltip-open" : "") +
                          " " +
                          (a[7], "") +
                          " svelte-c8ugx1"))) &&
                    (0, e.Ljt)(i, "class", t);
              },
              i(B) {
                d || ((0, e.Ui)(K.$$.fragment, B), (d = !0));
              },
              o(B) {
                (0, e.etI)(K.$$.fragment, B), (d = !1);
              },
              d(B) {
                B && (0, e.ogt)(i), f && f.d(), (0, e.vpE)(K), (r = !1), L();
              },
            }
          );
        }
        function O(a, i, m) {
          let { currentState: h = !1 } = i,
            { iconData: C = play } = i,
            { text: M = "" } = i,
            { wrapperClass: y = "" } = i,
            { tooltipText: j = "" } = i,
            { iconStyle: K = "" } = i,
            { disableText: $ = !1 } = i,
            { disable: x = !1 } = i,
            { btnNameClass: Y = "" } = i,
            { innerHTML: t = "" } = i,
            { onClickHandler: d = null } = i;
          return (
            (a.$$set = (r) => {
              "currentState" in r && m(0, (h = r.currentState)),
                "iconData" in r && m(1, (C = r.iconData)),
                "text" in r && m(2, (M = r.text)),
                "wrapperClass" in r && m(3, (y = r.wrapperClass)),
                "tooltipText" in r && m(4, (j = r.tooltipText)),
                "iconStyle" in r && m(5, (K = r.iconStyle)),
                "disableText" in r && m(6, ($ = r.disableText)),
                "disable" in r && m(7, (x = r.disable)),
                "btnNameClass" in r && m(8, (Y = r.btnNameClass)),
                "innerHTML" in r && m(9, (t = r.innerHTML)),
                "onClickHandler" in r && m(10, (d = r.onClickHandler));
            }),
            [h, C, M, y, j, K, $, x, Y, t, d]
          );
        }
        class S extends e.f_C {
          constructor(i) {
            super(),
              (0, e.S1n)(this, i, O, U, e.N8, {
                currentState: 0,
                iconData: 1,
                text: 2,
                wrapperClass: 3,
                tooltipText: 4,
                iconStyle: 5,
                disableText: 6,
                disable: 7,
                btnNameClass: 8,
                innerHTML: 9,
                onClickHandler: 10,
              });
          }
        }
        const R = S;
      },
      747: (v, w, s) => {
        s.d(w, { Z: () => S });
        var e = s(234),
          c = s(170),
          D = s(447);
        function W(R) {
          let a, i, m, h, C, M, y, j, K;
          return {
            c() {
              (a = (0, e.bGB)("div")),
                (i = (0, e.bGB)("div")),
                (h = (0, e.DhX)()),
                (C = (0, e.bGB)("div")),
                (0, e.Ljt)(
                  i,
                  "class",
                  (m =
                    "fixed h-screen w-screen transition " +
                    (R[0] ? "bg-gray-800 bg-opacity-50" : "duration-200") +
                    " ease-in-out")
                ),
                (0, e.Ljt)(
                  C,
                  "class",
                  (M =
                    "fixed h-3/4 w-screen bg-gray-800 shadow-lg rounded-t-3xl bottom-2 transform " +
                    (R[0]
                      ? "translate-y-4 bg-yellow-400"
                      : "translate-y-full") +
                    " transition-transform ease-in-out duration-500 p-5 overflow-y-auto main_drawer svelte-1m0g4i6")
                ),
                (0, e.Ljt)(
                  a,
                  "class",
                  (y =
                    "transition " +
                    (R[0] ? "" : "-z-10") +
                    " fixed h-screen w-screen overflow-hidden top-0")
                );
            },
            m($, x) {
              (0, e.$Tr)($, a, x),
                (0, e.R3I)(a, i),
                (0, e.R3I)(a, h),
                (0, e.R3I)(a, C),
                j || ((K = (0, e.oLt)(i, "click", R[1])), (j = !0));
            },
            p($, [x]) {
              x & 1 &&
                m !==
                  (m =
                    "fixed h-screen w-screen transition " +
                    ($[0] ? "bg-gray-800 bg-opacity-50" : "duration-200") +
                    " ease-in-out") &&
                (0, e.Ljt)(i, "class", m),
                x & 1 &&
                  M !==
                    (M =
                      "fixed h-3/4 w-screen bg-gray-800 shadow-lg rounded-t-3xl bottom-2 transform " +
                      ($[0]
                        ? "translate-y-4 bg-yellow-400"
                        : "translate-y-full") +
                      " transition-transform ease-in-out duration-500 p-5 overflow-y-auto main_drawer svelte-1m0g4i6") &&
                  (0, e.Ljt)(C, "class", M),
                x & 1 &&
                  y !==
                    (y =
                      "transition " +
                      ($[0] ? "" : "-z-10") +
                      " fixed h-screen w-screen overflow-hidden top-0") &&
                  (0, e.Ljt)(a, "class", y);
            },
            i: e.ZTd,
            o: e.ZTd,
            d($) {
              $ && (0, e.ogt)(a), (j = !1), K();
            },
          };
        }
        let p = !1;
        function U(R, a, i) {
          let m;
          c.H5.subscribe((y) => {
            i(0, (m = y));
          });
          let h, C;
          return [
            m,
            (y) => {
              c.H5.update((j) => !j);
            },
          ];
        }
        class O extends e.f_C {
          constructor(a) {
            super(), (0, e.S1n)(this, a, U, W, e.N8, {});
          }
        }
        const S = O;
      },
      426: (v, w, s) => {
        s.d(w, { Z: () => p });
        var e = s(234),
          c = s(233);
        function D(U) {
          let O;
          return {
            c() {
              (O = (0, e.bGB)("div")),
                (0, e.Ljt)(
                  O,
                  "class",
                  "feedback-indicator animate-bounce indicator-item indicator-bottom indicator-left badge mr-1 p-0 h-2 w-2 opacity-50 invisible svelte-woibw2"
                );
            },
            m(S, R) {
              (0, e.$Tr)(S, O, R);
            },
            p: e.ZTd,
            i: e.ZTd,
            o: e.ZTd,
            d(S) {
              S && (0, e.ogt)(O);
            },
          };
        }
        class W extends e.f_C {
          constructor(O) {
            super(), (0, e.S1n)(this, O, null, D, e.N8, {});
          }
        }
        const p = W;
      },
      958: (v, w, s) => {
        var e = s(234),
          c = s(237);
        class D extends null {
          constructor(U) {
            super(), init(this, U, null, null, safe_not_equal, {});
          }
        }
        var W = null;
      },
    },
    F = {};
  function P(v) {
    var w = F[v];
    if (w !== void 0) return w.exports;
    var s = (F[v] = { exports: {} });
    return G[v].call(s.exports, s, s.exports, P), s.exports;
  }
  (P.m = G),
    (() => {
      var v = [];
      P.O = (w, s, e, c) => {
        if (s) {
          c = c || 0;
          for (var D = v.length; D > 0 && v[D - 1][2] > c; D--) v[D] = v[D - 1];
          v[D] = [s, e, c];
          return;
        }
        for (var W = 1 / 0, D = 0; D < v.length; D++) {
          for (var [s, e, c] = v[D], p = !0, U = 0; U < s.length; U++)
            (c & !1 || W >= c) && Object.keys(P.O).every((m) => P.O[m](s[U]))
              ? s.splice(U--, 1)
              : ((p = !1), c < W && (W = c));
          if (p) {
            v.splice(D--, 1);
            var O = e();
            O !== void 0 && (w = O);
          }
        }
        return w;
      };
    })(),
    (P.n = (v) => {
      var w = v && v.__esModule ? () => v.default : () => v;
      return P.d(w, { a: w }), w;
    }),
    (P.d = (v, w) => {
      for (var s in w)
        P.o(w, s) &&
          !P.o(v, s) &&
          Object.defineProperty(v, s, { enumerable: !0, get: w[s] });
    }),
    (P.o = (v, w) => Object.prototype.hasOwnProperty.call(v, w)),
    (P.j = 769),
    (() => {
      var v = { 769: 0 };
      P.O.j = (e) => v[e] === 0;
      var w = (e, c) => {
          var [D, W, p] = c,
            U,
            O,
            S = 0;
          if (D.some((a) => v[a] !== 0)) {
            for (U in W) P.o(W, U) && (P.m[U] = W[U]);
            if (p) var R = p(P);
          }
          for (e && e(c); S < D.length; S++)
            (O = D[S]), P.o(v, O) && v[O] && v[O][0](), (v[O] = 0);
          return P.O(R);
        },
        s = (globalThis.webpackChunktabsorter2 =
          globalThis.webpackChunktabsorter2 || []);
      s.forEach(w.bind(null, 0)), (s.push = w.bind(null, s.push.bind(s)));
    })();
  var z = P.O(void 0, [923], () => P(929));
  z = P.O(z);
})();
