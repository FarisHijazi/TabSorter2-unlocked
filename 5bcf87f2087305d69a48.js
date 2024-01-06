window.addEventListener("load", function t(d) {
  const l = location.href;
  let [r, n] = l.split("&fav="),
    [i, o] = r.split("&uri="),
    [c, s] = i.split("&pos="),
    [a, e] = c.split("ttl=");
  (e = decodeURIComponent(e)),
    console.log("page is fully loaded"),
    console.log("script on???", location.href),
    console.log("originalUrl = ", o),
    console.log("title = ", e),
    (document.title = e),
    (document.querySelector("#favicon").href = n),
    (document.querySelector("#url_title").innerHTML = e),
    (document.querySelector("#reload_link_ahref").href = o),
    (document.querySelector("#reload_link_ahref").innerHTML = o),
    document.addEventListener("click", (u) => {
      location.href = o;
    }),
    (document.querySelector("html").style =
      "cursor: pointer; overflow: hidden;"),
    window.removeEventListener("load", t, !1);
});
