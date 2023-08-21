// @ts-nocheck
export const StarryParticles = () => {
  window.requestAnimFrame = (function () {
    return window.requestAnimationFrame;
  })();

  var t,
    e,
    n,
    o = document.getElementById("warp"),
    r = o.getContext("2d"),
    i = 1800, //点的数量
    s = "0." + Math.floor(9 * Math.random()) + 1,
    a = 5 * o.width, //点的大小
    c = 0,
    l = [];

  function u() {
    window.requestAnimFrame(u), p(), h();
  }
  function d() {
    (t = o.width / 2), (e = o.height / 2), (l = []);
    for (var r = 0; r < i; r++)
      (n = {
        x: Math.random() * o.width,
        y: Math.random() * o.height,
        z: Math.random() * o.width,
        o: "0." + Math.floor(99 * Math.random()) + 1,
      }),
        l.push(n);
  }
  function p() {
    for (var t = 0; t < i; t++) (n = l[t]), n.z--, n.z <= 0 && (n.z = o.width);
  }
  function h() {
    var u, p, h;
    if (
      ((o.width === window.innerWidth && o.width === window.innerWidth) ||
        ((o.width = window.innerWidth), (o.height = window.innerHeight), d()),
      0 === c)
    ) {
      (r.fillStyle = "rgba(0,10,20,1)"),
        r.fillRect(0, 0, o.width, o.height),
        (r.fillStyle = "rgba(209, 255, 255, " + s + ")");
      for (var f = 0; f < i; f++)
        (n = l[f]),
          (u = (n.x - t) * (a / n.z)),
          (u += t),
          (p = (n.y - e) * (a / n.z)),
          (p += e),
          (h = (a / n.z) * 1),
          r.fillRect(u, p, h, h),
          (r.fillStyle = "rgba(209, 255, 255, " + n.o + ")");
    }
  }
  d(), u();
};
