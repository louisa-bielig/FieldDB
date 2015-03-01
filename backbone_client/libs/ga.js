(function() {
  var g = void 0,
    h = !0,
    i = null,
    k = !1,
    aa = encodeURIComponent,
    ba = Infinity,
    ca = setTimeout,
    fa = decodeURIComponent,
    l = Math;

  function ga(a, b) {
    return a.name = b
  }
  var n = "push",
    ha = "test",
    ia = "slice",
    o = "replace",
    ja = "load",
    ka = "floor",
    la = "charAt",
    ma = "value",
    p = "indexOf",
    na = "match",
    oa = "port",
    pa = "createElement",
    qa = "path",
    q = "name",
    t = "host",
    u = "toString",
    v = "length",
    w = "prototype",
    ra = "clientWidth",
    x = "split",
    sa = "stopPropagation",
    ta = "scope",
    y = "location",
    ua = "search",
    z = "protocol",
    va = "clientHeight",
    wa = "href",
    A = "substring",
    xa = "apply",
    ya = "navigator",
    B = "join",
    C = "toLowerCase",
    D;

  function za(a, b) {
    switch (b) {
      case 0:
        return "" + a;
      case 1:
        return 1 * a;
      case 2:
        return !!a;
      case 3:
        return 1E3 * a
    }
    return a
  }

  function Aa(a) {
    return "function" == typeof a
  }

  function Ba(a) {
    return a != g && -1 < (a.constructor + "")[p]("String")
  }

  function E(a, b) {
    return g == a || "-" == a && !b || "" == a
  }

  function Ca(a) {
    if (!a || "" == a) return "";
    for (; a && -1 < " \n\r\t" [p](a[la](0));) a = a[A](1);
    for (; a && -1 < " \n\r\t" [p](a[la](a[v] - 1));) a = a[A](0, a[v] - 1);
    return a
  }

  function F(a) {
    var b = 1,
      c = 0,
      d;
    if (!E(a)) {
      b = 0;
      for (d = a[v] - 1; 0 <= d; d--) c = a.charCodeAt(d), b = (b << 6 & 268435455) + c + (c << 14), c = b & 266338304, b = 0 != c ? b ^ c >> 21 : b
    }
    return b
  }

  function Da() {
    return l.round(2147483647 * l.random())
  }

  function Ea() {}

  function G(a, b) {
    if (aa instanceof Function) return b ? encodeURI(a) : aa(a);
    H(68);
    return escape(a)
  }

  function I(a) {
    a = a[x]("+")[B](" ");
    if (fa instanceof Function) try {
      return fa(a)
    } catch (b) {
      H(17)
    } else H(68);
    return unescape(a)
  }
  var Fa = function(a, b, c, d) {
      a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
    },
    Ha = function(a, b, c, d) {
      a.removeEventListener ? a.removeEventListener(b, c, !!d) : a.detachEvent && a.detachEvent("on" + b, c)
    };

  function Ia(a, b) {
    if (a) {
      var c = J[pa]("script");
      c.type = "text/javascript";
      c.async = h;
      c.src = a;
      c.id = b;
      var d = J.getElementsByTagName("script")[0];
      d.parentNode.insertBefore(c, d);
      return c
    }
  }

  function K(a) {
    return a && 0 < a[v] ? a[0] : ""
  }

  function L(a) {
    var b = a ? a[v] : 0;
    return 0 < b ? a[b - 1] : ""
  }
  var Ja = function() {
    this.prefix = "ga.";
    this.S = {}
  };
  Ja[w].set = function(a, b) {
    this.S[this.prefix + a] = b
  };
  Ja[w].get = function(a) {
    return this.S[this.prefix + a]
  };
  Ja[w].contains = function(a) {
    return this.get(a) !== g
  };

  function Ka(a) {
    0 == a[p]("www.") && (a = a[A](4));
    return a[C]()
  }

  function La(a, b) {
    var c, d = {
      url: a,
      protocol: "http",
      host: "",
      path: "",
      d: new Ja,
      anchor: ""
    };
    if (!a) return d;
    c = a[p]("://");
    0 <= c && (d.protocol = a[A](0, c), a = a[A](c + 3));
    c = a[ua]("/|\\?|#");
    if (0 <= c) d.host = a[A](0, c)[C](), a = a[A](c);
    else return d.host = a[C](), d;
    c = a[p]("#");
    0 <= c && (d.anchor = a[A](c + 1), a = a[A](0, c));
    c = a[p]("?");
    0 <= c && (Ma(d.d, a[A](c + 1)), a = a[A](0, c));
    d.anchor && b && Ma(d.d, d.anchor);
    a && "/" == a[la](0) && (a = a[A](1));
    d.path = a;
    return d
  }

  function Na(a, b) {
    function c(a) {
      var b = (a.hostname || "")[x](":")[0][C](),
        c = (a[z] || "")[C](),
        c = 1 * a[oa] || ("https:" == c ? 80 : "https:" == c ? 443 : ""),
        a = a.pathname || "";
      0 == a[p]("/") || (a = "/" + a);
      return [b, "" + c, a]
    }
    var d = b || J[pa]("a");
    d.href = J[y][wa];
    var e = (d[z] || "")[C](),
      f = c(d),
      j = d[ua] || "",
      m = e + "//" + f[0] + (f[1] ? ":" + f[1] : "");
    0 == a[p]("//") ? a = e + a : 0 == a[p]("/") ? a = m + a : !a || 0 == a[p]("?") ? a = m + f[2] + (a || j) : 0 > a[x]("/")[0][p](":") && (a = m + f[2][A](0, f[2].lastIndexOf("/")) + "/" + a);
    d.href = a;
    e = c(d);
    return {
      protocol: (d[z] || "")[C](),
      host: e[0],
      port: e[1],
      path: e[2],
      Pa: d[ua] || "",
      url: a || ""
    }
  }

  function Ma(a, b) {
    function c(b, c) {
      a.contains(b) || a.set(b, []);
      a.get(b)[n](c)
    }
    for (var d = Ca(b)[x]("&"), e = 0; e < d[v]; e++)
      if (d[e]) {
        var f = d[e][p]("=");
        0 > f ? c(d[e], "1") : c(d[e][A](0, f), d[e][A](f + 1))
      }
  }

  function Oa(a, b) {
    if (E(a) || "[" == a[la](0) && "]" == a[la](a[v] - 1)) return "-";
    var c = J.domain;
    return a[p](c + (b && "/" != b ? b : "")) == (0 == a[p]("https://") ? 7 : 0 == a[p]("https://") ? 8 : 0) ? "0" : a
  };
  var Pa = 0;

  function Qa(a, b, c) {
    !(1 <= Pa) && !(1 <= 100 * l.random()) && (a = ["utmt=error", "utmerr=" + a, "utmwv=5.3.5", "utmn=" + Da(), "utmsp=1"], b && a[n]("api=" + b), c && a[n]("msg=" + G(c[A](0, 100))), M.w && a[n]("aip=1"), Ra(a[B]("&")), Pa++)
  };
  var Sa = 0,
    Ua = {};

  function N(a) {
    return Va("x" + Sa++, a)
  }

  function Va(a, b) {
    Ua[a] = !!b;
    return a
  }
  var O = N(),
    Wa = N(),
    Xa = N(),
    Ya = N(),
    Za = N(),
    P = N(),
    Q = N(),
    $a = N(),
    ab = N(),
    bb = N(),
    cb = N(),
    db = N(),
    eb = N(),
    gb = N(),
    hb = N(),
    ib = N(),
    jb = N(),
    kb = N(),
    lb = N(),
    mb = N(),
    nb = N(),
    ob = N(),
    pb = N(),
    qb = N(),
    rb = N(),
    sb = N(),
    tb = N(),
    ub = N(),
    vb = N(),
    wb = N(),
    xb = N(),
    yb = N(),
    zb = N(),
    Ab = N(),
    Bb = N(),
    Cb = N(h),
    Db = Va("currencyCode"),
    Eb = Va("page"),
    Fb = Va("title"),
    Gb = N(),
    Hb = N(),
    Ib = N(),
    Jb = N(),
    Kb = N(),
    Lb = N(),
    Mb = N(),
    Nb = N(),
    Ob = N(),
    R = N(h),
    Pb = N(h),
    Qb = N(h),
    Rb = N(h),
    Sb = N(h),
    Ub = N(h),
    Vb = N(h),
    Wb = N(h),
    Xb = N(h),
    Yb = N(h),
    Zb = N(h),
    S = N(h),
    $b = N(h),
    ac = N(h),
    bc = N(h),
    cc = N(h),
    dc = N(h),
    ec = N(h),
    fc = N(h),
    gc = N(h),
    hc = N(h),
    ic = N(h),
    jc = N(h),
    kc = N(h),
    lc = N(h),
    mc = N(h),
    nc = N(h),
    oc = Va("campaignParams"),
    pc = N(),
    qc = Va("hitCallback"),
    rc = N();
  N();
  var sc = N(),
    tc = N(),
    uc = N(),
    vc = N(),
    wc = N(),
    xc = N(),
    yc = N(),
    zc = N(),
    Ac = N(),
    Bc = N(),
    Cc = N(),
    Dc = N();
  N();
  var Hc = N(),
    Ic = N(),
    Jc = N(),
    Kc = N();

  function Lc(a) {
    var b = this.plugins_;
    if (b) return b.get(a)
  }
  var T = function(a, b, c, d) {
      a[b] = function() {
        try {
          return d != g && H(d), c[xa](this, arguments)
        } catch (a) {
          throw Qa("exc", b, a && a[q]), a;
        }
      }
    },
    Mc = function(a, b, c, d) {
      U[w][a] = function() {
        try {
          return H(c), za(this.a.get(b), d)
        } catch (e) {
          throw Qa("exc", a, e && e[q]), e;
        }
      }
    },
    V = function(a, b, c, d, e) {
      U[w][a] = function(f) {
        try {
          H(c), e == g ? this.a.set(b, za(f, d)) : this.a.set(b, e)
        } catch (j) {
          throw Qa("exc", a, j && j[q]), j;
        }
      }
    };
  var Nc = RegExp(/(^|\.)doubleclick\.net$/i),
    Oc = function(a, b) {
      return Nc[ha](J[y].hostname) ? h : "/" !== b ? k : (0 == a[p]("www.google.") || 0 == a[p](".google.") || 0 == a[p]("google.")) && !(-1 < a[p]("google.org")) ? h : k
    },
    Pc = function(a) {
      var b = a.get(Za),
        c = a.c(Q, "/");
      Oc(b, c) && a[sa]()
    };
  var Uc = function() {
    var a = {},
      b = {},
      c = new Qc;
    this.i = function(a, b) {
      c.add(a, b)
    };
    var d = new Qc;
    this.e = function(a, b) {
      d.add(a, b)
    };
    var e = k,
      f = k,
      j = h;
    this.U = function() {
      e = h
    };
    this.j = function(a) {
      this[ja]();
      this.set(pc, a, h);
      a = new Rc(this);
      e = k;
      d.execute(this);
      e = h;
      b = {};
      this.n();
      a.Ka()
    };
    this.load = function() {
      e && (e = k, this.La(), Sc(this), f || (f = h, c.execute(this), Tc(this), Sc(this)), e = h)
    };
    this.n = function() {
      if (e)
        if (f) e = k, Tc(this), e = h;
        else this[ja]()
    };
    this.get = function(c) {
      Ua[c] && this[ja]();
      return b[c] !== g ? b[c] : a[c]
    };
    this.set =
      function(c, d, e) {
        Ua[c] && this[ja]();
        e ? b[c] = d : a[c] = d;
        Ua[c] && this.n()
      };
    this.z = function(b) {
      a[b] = this.b(b, 0) + 1
    };
    this.b = function(a, b) {
      var c = this.get(a);
      return c == g || "" === c ? b : 1 * c
    };
    this.c = function(a, b) {
      var c = this.get(a);
      return c == g ? b : c + ""
    };
    this.La = function() {
      if (j) {
        var b = this.c(Za, ""),
          c = this.c(Q, "/");
        Oc(b, c) || (a[P] = a[eb] && "" != b ? F(b) : 1, j = k)
      }
    }
  };
  Uc[w].stopPropagation = function() {
    throw "aborted";
  };
  var Rc = function(a) {
    var b = this;
    this.q = 0;
    var c = a.get(qc);
    this.Va = function() {
      0 < b.q && c && (b.q--, b.q || c())
    };
    this.Ka = function() {
      !b.q && c && ca(c, 10)
    };
    a.set(rc, b, h)
  };

  function Vc(a, b) {
    for (var b = b || [], c = 0; c < b[v]; c++) {
      var d = b[c];
      if ("" + a == d || 0 == d[p](a + ".")) return d
    }
    return "-"
  }
  var Xc = function(a, b, c) {
      c = c ? "" : a.c(P, "1");
      b = b[x](".");
      if (6 !== b[v] || Wc(b[0], c)) return k;
      var c = 1 * b[1],
        d = 1 * b[2],
        e = 1 * b[3],
        f = 1 * b[4],
        b = 1 * b[5];
      if (!(0 <= c && 0 < d && 0 < e && 0 < f && 0 <= b)) return H(110), k;
      a.set(R, c);
      a.set(Sb, d);
      a.set(Ub, e);
      a.set(Vb, f);
      a.set(Wb, b);
      return h
    },
    Yc = function(a) {
      var b = a.get(R),
        c = a.get(Sb),
        d = a.get(Ub),
        e = a.get(Vb),
        f = a.b(Wb, 1);
      b == g ? H(113) : NaN == b && H(114);
      0 <= b && 0 < c && 0 < d && 0 < e && 0 <= f || H(115);
      return [a.b(P, 1), b != g ? b : "-", c || "-", d || "-", e || "-", f][B](".")
    },
    Zc = function(a) {
      return [a.b(P, 1), a.b(Zb, 0), a.b(S, 1),
        a.b($b, 0)
      ][B](".")
    },
    $c = function(a, b, c) {
      var c = c ? "" : a.c(P, "1"),
        d = b[x](".");
      if (4 !== d[v] || Wc(d[0], c)) d = i;
      a.set(Zb, d ? 1 * d[1] : 0);
      a.set(S, d ? 1 * d[2] : 10);
      a.set($b, d ? 1 * d[3] : a.get(Ya));
      return d != i || !Wc(b, c)
    },
    ad = function(a, b) {
      var c = G(a.c(Qb, "")),
        d = [],
        e = a.get(Cb);
      if (!b && e) {
        for (var f = 0; f < e[v]; f++) {
          var j = e[f];
          j && 1 == j[ta] && d[n](f + "=" + G(j[q]) + "=" + G(j[ma]) + "=1")
        }
        0 < d[v] && (c += "|" + d[B]("^"))
      }
      return c ? a.b(P, 1) + "." + c : i
    },
    bd = function(a, b, c) {
      c = c ? "" : a.c(P, "1");
      b = b[x](".");
      if (2 > b[v] || Wc(b[0], c)) return k;
      b = b[ia](1)[B](".")[x]("|");
      0 < b[v] && a.set(Qb, I(b[0]));
      if (1 >= b[v]) return h;
      b = b[1][x](-1 == b[1][p](",") ? "^" : ",");
      for (c = 0; c < b[v]; c++) {
        var d = b[c][x]("=");
        if (4 == d[v]) {
          var e = {};
          ga(e, I(d[1]));
          e.value = I(d[2]);
          e.scope = 1;
          a.get(Cb)[d[0]] = e
        }
      }
      return h
    },
    cd = function(a) {
      var b;
      b = function(b, e) {
        if (!E(a.get(b))) {
          var f = a.c(b, ""),
            f = f[x](" ")[B]("%20"),
            f = f[x]("+")[B]("%20");
          c[n](e + "=" + f)
        }
      };
      var c = [];
      b(ec, "utmcid");
      b(kc, "utmcsr");
      b(gc, "utmgclid");
      b(ic, "utmdclid");
      b(fc, "utmccn");
      b(lc, "utmcmd");
      b(mc, "utmctr");
      b(nc, "utmcct");
      return (b = c[B]("|")) ? [a.b(P,
        1), a.b(ac, 0), a.b(bc, 1), a.b(cc, 1), b][B](".") : ""
    },
    dd = function(a, b, c) {
      c = c ? "" : a.c(P, "1");
      b = b[x](".");
      if (5 > b[v] || Wc(b[0], c)) return a.set(ac, g), a.set(bc, g), a.set(cc, g), a.set(ec, g), a.set(fc, g), a.set(kc, g), a.set(lc, g), a.set(mc, g), a.set(nc, g), a.set(gc, g), a.set(hc, g), a.set(ic, g), a.set(jc, g), k;
      a.set(ac, 1 * b[1]);
      a.set(bc, 1 * b[2]);
      a.set(cc, 1 * b[3]);
      var d = b[ia](4)[B]("."),
        b = function(a) {
          return (a = d[na](a + "=(.*?)(?:\\|utm|$)")) && 2 == a[v] ? a[1] : g
        },
        c = function(b, c) {
          c && (c = e ? I(c) : c[x]("%20")[B](" "), a.set(b, c))
        }; - 1 == d[p]("=") &&
        (d = I(d));
      var e = "2" == b("utmcvr");
      c(ec, b("utmcid"));
      c(fc, b("utmccn"));
      c(kc, b("utmcsr"));
      c(lc, b("utmcmd"));
      c(mc, b("utmctr"));
      c(nc, b("utmcct"));
      c(gc, b("utmgclid"));
      c(ic, b("utmdclid"));
      return h
    },
    Wc = function(a, b) {
      return b ? a != b : !/^\d+$/ [ha](a)
    };
  var Qc = function() {
    this.B = []
  };
  Qc[w].add = function(a, b) {
    this.B[n]({
      name: a,
      s: b
    })
  };
  Qc[w].execute = function(a) {
    try {
      for (var b = 0; b < this.B[v]; b++) this.B[b].s.call(W, a)
    } catch (c) {}
  };

  function ed(a) {
    100 != a.get(sb) && a.get(R) % 1E4 >= 100 * a.get(sb) && a[sa]()
  }

  function fd(a) {
    gd(a.get(O)) && a[sa]()
  }

  function hd(a) {
    "file:" == J[y][z] && a[sa]()
  }

  function id(a) {
    a.get(Fb) || a.set(Fb, J.title, h);
    a.get(Eb) || a.set(Eb, J[y].pathname + J[y][ua], h)
  };
  var jd = new function() {
    var a = [];
    this.set = function(b) {
      a[b] = h
    };
    this.Ya = function() {
      for (var b = [], c = 0; c < a[v]; c++) a[c] && (b[l[ka](c / 6)] = b[l[ka](c / 6)] ^ 1 << c % 6);
      for (c = 0; c < b[v]; c++) b[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_" [la](b[c] || 0);
      return b[B]("") + "~"
    }
  };

  function H(a) {
    jd.set(a)
  };
  var W = window,
    J = document,
    gd = function(a) {
      var b = W._gaUserPrefs;
      return b && b.ioo && b.ioo() || !!a && W["ga-disable-" + a] === h
    },
    kd = function(a) {
      for (var b = [], c = J.cookie[x](";"), a = RegExp("^\\s*" + a + "=\\s*(.*?)\\s*$"), d = 0; d < c[v]; d++) {
        var e = c[d][na](a);
        e && b[n](e[1])
      }
      return b
    },
    X = function(a, b, c, d, e, f) {
      e = gd(e) ? k : Oc(d, c) ? k : h;
      if (e) {
        if (b && 0 <= W[ya].userAgent[p]("Firefox"))
          for (var b = b[o](/\n|\r/g, " "), e = 0, j = b[v]; e < j; ++e) {
            var m = b.charCodeAt(e) & 255;
            if (10 == m || 13 == m) b = b[A](0, e) + "?" + b[A](e + 1)
          }
        b && 2E3 < b[v] && (b = b[A](0, 2E3), H(69));
        a = a + "=" + b + "; path=" + c + "; ";
        f && (a += "expires=" + (new Date((new Date).getTime() + f)).toGMTString() + "; ");
        d && (a += "domain=" + d + ";");
        J.cookie = a
      }
    };
  var ld, md, nd = function() {
      if (!ld) {
        var a = {},
          b = W[ya],
          c = W.screen;
        a.R = c ? c.width + "x" + c.height : "-";
        a.Q = c ? c.colorDepth + "-bit" : "-";
        a.language = (b && (b.language || b.browserLanguage) || "-")[C]();
        a.javaEnabled = b && b.javaEnabled() ? 1 : 0;
        a.characterSet = J.characterSet || J.charset || "-";
        try {
          var d = J.documentElement,
            e = J.body,
            f = e && e[ra] && e[va],
            b = [];
          d && (d[ra] && d[va]) && ("CSS1Compat" === J.compatMode || !f) ? b = [d[ra], d[va]] : f && (b = [e[ra], e[va]]);
          a.Xa = b[B]("x")
        } catch (j) {
          H(135)
        }
        ld = a
      }
    },
    od = function() {
      nd();
      for (var a = ld, b = W[ya], a = b.appName +
          b.version + a.language + b.platform + b.userAgent + a.javaEnabled + a.R + a.Q + (J.cookie ? J.cookie : "") + (J.referrer ? J.referrer : ""), b = a[v], c = W.history[v]; 0 < c;) a += c-- ^ b++;
      return F(a)
    },
    pd = function(a) {
      nd();
      var b = ld;
      a.set(Ib, b.R);
      a.set(Jb, b.Q);
      a.set(Mb, b.language);
      a.set(Nb, b.characterSet);
      a.set(Kb, b.javaEnabled);
      a.set(Ob, b.Xa);
      if (a.get(gb) && a.get(hb)) {
        if (!(b = md)) {
          var c, d, e;
          d = "ShockwaveFlash";
          if ((b = (b = W[ya]) ? b.plugins : g) && 0 < b[v])
            for (c = 0; c < b[v] && !e; c++) d = b[c], -1 < d[q][p]("Shockwave Flash") && (e = d.description[x]("Shockwave Flash ")[1]);
          else {
            d = d + "." + d;
            try {
              c = new ActiveXObject(d + ".7"), e = c.GetVariable("$version")
            } catch (f) {}
            if (!e) try {
              c = new ActiveXObject(d + ".6"), e = "WIN 6,0,21,0", c.AllowScriptAccess = "always", e = c.GetVariable("$version")
            } catch (j) {}
            if (!e) try {
              c = new ActiveXObject(d), e = c.GetVariable("$version")
            } catch (m) {}
            e && (e = e[x](" ")[1][x](","), e = e[0] + "." + e[1] + " r" + e[2])
          }
          b = e ? e : "-"
        }
        md = b;
        a.set(Lb, md)
      } else a.set(Lb, "-")
    };
  var qd = function(a) {
      if (Aa(a)) this.s = a;
      else {
        var b = a[0],
          c = b.lastIndexOf(":"),
          d = b.lastIndexOf(".");
        this.g = this.h = this.l = ""; - 1 == c && -1 == d ? this.g = b : -1 == c && -1 != d ? (this.h = b[A](0, d), this.g = b[A](d + 1)) : -1 != c && -1 == d ? (this.l = b[A](0, c), this.g = b[A](c + 1)) : c > d ? (this.h = b[A](0, d), this.l = b[A](d + 1, c), this.g = b[A](c + 1)) : (this.h = b[A](0, d), this.g = b[A](d + 1));
        this.k = a[ia](1);
        this.Na = !this.l && "_require" == this.g;
        this.K = !this.h && !this.l && "_provide" == this.g
      }
    },
    Y = function() {
      T(Y[w], "push", Y[w][n], 5);
      T(Y[w], "_getPlugin", Lc, 121);
      T(Y[w],
        "_createAsyncTracker", Y[w].Ta, 33);
      T(Y[w], "_getAsyncTracker", Y[w].Ua, 34);
      this.J = new Ja;
      this.p = []
    };
  D = Y[w];
  D.Oa = function(a, b, c) {
    var d = this.J.get(a);
    if (!Aa(d)) return k;
    b.plugins_ = b.plugins_ || new Ja;
    b.plugins_.set(a, new d(b, c || {}));
    return h
  };
  D.push = function(a) {
    var b = Z.Wa[xa](this, arguments),
      b = Z.p.concat(b);
    for (Z.p = []; 0 < b[v] && !Z.P(b[0]) && !(b.shift(), 0 < Z.p[v]););
    Z.p = Z.p.concat(b);
    return 0
  };
  D.Wa = function(a) {
    for (var b = [], c = 0; c < arguments[v]; c++) try {
      var d = new qd(arguments[c]);
      d.K ? this.P(d) : b[n](d)
    } catch (e) {}
    return b
  };
  D.P = function(a) {
    try {
      if (a.s) a.s[xa](W);
      else if (a.K) this.J.set(a.k[0], a.k[1]);
      else {
        var b = "_gat" == a.h ? M : "_gaq" == a.h ? Z : M.u(a.h);
        if (a.Na) {
          if (!this.Oa(a.k[0], b, a.k[2])) {
            if (!a.Qa) {
              var c = Na("" + a.k[1]);
              var d = c[z],
                e = J[y][z];
              var f;
              if (f = "https:" == d || d == e ? h : "https:" != d ? k : "https:" == e) {
                var j;
                a: {
                  var m = Na(J[y][wa]);
                  if (!(c.Pa || 0 <= c.url[p]("?") || 0 <= c[qa][p]("://") || c[t] == m[t] && c[oa] == m[oa]))
                    for (var r = "https:" == c[z] ? 80 : 443, s = M.T, b = 0; b < s[v]; b++)
                      if (c[t] == s[b][0] && (c[oa] || r) == (s[b][1] || r) && 0 == c[qa][p](s[b][2])) {
                        j = h;
                        break a
                      }
                  j =
                    k
                }
                f = j && !gd()
              }
              f && (a.Qa = Ia(c.url))
            }
            return h
          }
        } else a.l && (b = b.plugins_.get(a.l)), b[a.g][xa](b, a.k)
      }
    } catch (Ta) {}
  };
  D.Ta = function(a, b) {
    return M.r(a, b || "")
  };
  D.Ua = function(a) {
    return M.u(a)
  };
  var td = function() {
    function a(a, b, c, d) {
      g == f[a] && (f[a] = {});
      g == f[a][b] && (f[a][b] = []);
      f[a][b][c] = d
    }

    function b(a, b, c) {
      if (g != f[a] && g != f[a][b]) return f[a][b][c]
    }

    function c(a, b) {
      if (g != f[a] && g != f[a][b]) {
        f[a][b] = g;
        var c = h,
          d;
        for (d = 0; d < j[v]; d++)
          if (g != f[a][j[d]]) {
            c = k;
            break
          }
        c && (f[a] = g)
      }
    }

    function d(a) {
      var b = "",
        c = k,
        d, e;
      for (d = 0; d < j[v]; d++)
        if (e = a[j[d]], g != e) {
          c && (b += j[d]);
          for (var c = [], f = g, ea = g, ea = 0; ea < e[v]; ea++)
            if (g != e[ea]) {
              f = "";
              ea != fb && g == e[ea - 1] && (f += ea[u]() + Ta);
              for (var yd = e[ea], Ec = "", Tb = g, Fc = g, Gc = g, Tb = 0; Tb < yd[v]; Tb++) Fc =
                yd[la](Tb), Gc = Ga[Fc], Ec += g != Gc ? Gc : Fc;
              f += Ec;
              c[n](f)
            }
          b += m + c[B](s) + r;
          c = k
        } else c = h;
      return b
    }
    var e = this,
      f = [],
      j = ["k", "v"],
      m = "(",
      r = ")",
      s = "*",
      Ta = "!",
      Ga = {
        "'": "'0"
      };
    Ga[r] = "'1";
    Ga[s] = "'2";
    Ga[Ta] = "'3";
    var fb = 1;
    e.Sa = function(a) {
      return g != f[a]
    };
    e.A = function() {
      for (var a = "", b = 0; b < f[v]; b++) g != f[b] && (a += b[u]() + d(f[b]));
      return a
    };
    e.Ra = function(a) {
      if (a == g) return e.A();
      for (var b = a.A(), c = 0; c < f[v]; c++) g != f[c] && !a.Sa(c) && (b += c[u]() + d(f[c]));
      return b
    };
    e.f = function(b, c, d) {
      if (!rd(d)) return k;
      a(b, "k", c, d);
      return h
    };
    e.o = function(b,
      c, d) {
      if (!sd(d)) return k;
      a(b, "v", c, d[u]());
      return h
    };
    e.getKey = function(a, c) {
      return b(a, "k", c)
    };
    e.O = function(a, c) {
      return b(a, "v", c)
    };
    e.M = function(a) {
      c(a, "k")
    };
    e.N = function(a) {
      c(a, "v")
    };
    T(e, "_setKey", e.f, 89);
    T(e, "_setValue", e.o, 90);
    T(e, "_getKey", e.getKey, 87);
    T(e, "_getValue", e.O, 88);
    T(e, "_clearKey", e.M, 85);
    T(e, "_clearValue", e.N, 86)
  };

  function rd(a) {
    return "string" == typeof a
  }

  function sd(a) {
    return "number" != typeof a && (g == Number || !(a instanceof Number)) || l.round(a) != a || NaN == a || a == ba ? k : h
  };
  var ud = function(a) {
      var b = W.gaGlobal;
      a && !b && (W.gaGlobal = b = {});
      return b
    },
    vd = function() {
      var a = ud(h).hid;
      a == i && (a = Da(), ud(h).hid = a);
      return a
    },
    zd = function(a) {
      a.set(Hb, vd());
      var b = ud();
      if (b && b.dh == a.get(P)) {
        var c = b.sid;
        c && ("0" == c && H(112), a.set(Vb, c), a.get(Pb) && a.set(Ub, c));
        b = b.vid;
        a.get(Pb) && b && (b = b[x]("."), 1 * b[1] || H(112), a.set(R, 1 * b[0]), a.set(Sb, 1 * b[1]))
      }
    };
  var Ad, Bd = function(a, b, c) {
      var d = a.c(Za, ""),
        e = a.c(Q, "/"),
        f = a.b($a, 0),
        a = a.c(O, "");
      X(b, c, e, d, a, f)
    },
    Tc = function(a) {
      var b = a.c(Za, "");
      a.b(P, 1);
      var c = a.c(Q, "/"),
        d = a.c(O, "");
      X("__utma", Yc(a), c, b, d, a.get($a));
      X("__utmb", Zc(a), c, b, d, a.get(ab));
      X("__utmc", "" + a.b(P, 1), c, b, d);
      var e = cd(a, h);
      e ? X("__utmz", e, c, b, d, a.get(bb)) : X("__utmz", "", c, b, "", -1);
      (e = ad(a, k)) ? X("__utmv", e, c, b, d, a.get($a)): X("__utmv", "", c, b, "", -1)
    },
    Sc = function(a) {
      var b = a.b(P, 1);
      if (!Xc(a, Vc(b, kd("__utma")))) return a.set(Rb, h), k;
      var c = !$c(a, Vc(b, kd("__utmb")));
      a.set(Yb, c);
      dd(a, Vc(b, kd("__utmz")));
      bd(a, Vc(b, kd("__utmv")));
      Ad = !c;
      return h
    },
    Cd = function(a) {
      !Ad && !(0 < kd("__utmb")[v]) && (X("__utmd", "1", a.c(Q, "/"), a.c(Za, ""), a.c(O, ""), 1E4), 0 == kd("__utmd")[v] && a[sa]())
    };
  var Fd = function(a) {
      a.get(R) == g ? Dd(a) : a.get(Rb) && !a.get(Hc) ? Dd(a) : a.get(Yb) && Ed(a)
    },
    Gd = function(a) {
      a.get(dc) && !a.get(Xb) && (Ed(a), a.set(bc, a.get(Wb)))
    },
    Dd = function(a) {
      var b = a.get(Ya);
      a.set(Pb, h);
      a.set(R, Da() ^ od(a) & 2147483647);
      a.set(Qb, "");
      a.set(Sb, b);
      a.set(Ub, b);
      a.set(Vb, b);
      a.set(Wb, 1);
      a.set(Xb, h);
      a.set(Zb, 0);
      a.set(S, 10);
      a.set($b, b);
      a.set(Cb, []);
      a.set(Rb, k);
      a.set(Yb, k)
    },
    Ed = function(a) {
      a.set(Ub, a.get(Vb));
      a.set(Vb, a.get(Ya));
      a.z(Wb);
      a.set(Xb, h);
      a.set(Zb, 0);
      a.set(S, 10);
      a.set($b, a.get(Ya));
      a.set(Yb, k)
    };
  var Hd = "daum:q eniro:search_word naver:query pchome:q images.google:q google:q yahoo:p yahoo:q msn:q bing:q aol:query aol:q lycos:q lycos:query ask:q netscape:query cnn:query about:terms mamma:q voila:rdata virgilio:qs live:q baidu:wd alice:qs yandex:text najdi:q seznam:q rakuten:qt biglobe:q goo.ne:MT wp:szukaj onet:qt yam:k kvasir:q ozu:q terra:query rambler:query conduit:q babylon:q search-results:q avg:q comcast:q incredimail:q startsiden:q go.mail.ru:q search.centrum.cz:q".split(" "),
    Od = function(a) {
      if (a.get(ib) &&
        !a.get(Hc)) {
        for (var b = !E(a.get(ec)) || !E(a.get(kc)) || !E(a.get(gc)) || !E(a.get(ic)), c = {}, d = 0; d < Id[v]; d++) {
          var e = Id[d];
          c[e] = a.get(e)
        }(d = a.get(oc)) ? (H(149), e = new Ja, Ma(e, d), d = e) : d = La(J[y][wa], a.get(db)).d;
        if (!("1" == L(d.get(a.get(rb))) && b)) {
          var f = d,
            j = function(b, c) {
              var c = c || "-",
                d = L(f.get(a.get(b)));
              return d && d != "-" ? I(d) : c
            },
            d = L(f.get(a.get(kb))) || "-",
            e = L(f.get(a.get(nb))) || "-",
            m = L(f.get(a.get(mb))) || "-",
            r = L(f.get("gclsrc")) || "-",
            s = L(f.get("dclid")) || "-",
            Ta = j(lb, "(not set)"),
            Ga = j(ob, "(not set)"),
            fb = j(pb),
            j = j(qb);
          if (E(d) && E(m) && E(s) && E(e)) d = k;
          else {
            var wd = !E(s) && E(e),
              xd = E(fb);
            if (wd || xd) {
              var da = Jd(a),
                da = La(da, h);
              if ((da = Kd(a, da)) && !E(da[1] && !da[2])) wd && (e = da[0]), xd && (fb = da[1])
            }
            Ld(a, d, e, m, r, s, Ta, Ga, fb, j);
            d = h
          }
          d = d || Md(a);
          !d && (!b && a.get(Xb)) && (Ld(a, g, "(direct)", g, g, g, "(direct)", "(none)", g, g), d = h);
          if (d && (a.set(dc, Nd(a, c)), b = "(direct)" == a.get(kc) && "(direct)" == a.get(fc) && "(none)" == a.get(lc), a.get(dc) || a.get(Xb) && !b)) a.set(ac, a.get(Ya)), a.set(bc, a.get(Wb)), a.z(cc)
        }
      }
    },
    Md = function(a) {
      var b = Jd(a),
        c = La(b, h);
      if (!(b !=
          g && b != i && "" != b && "0" != b && "-" != b && 0 <= b[p]("://")) || c && -1 < c[t][p]("google") && c.d.contains("q") && "cse" == c[qa]) return k;
      if ((b = Kd(a, c)) && !b[2]) return Ld(a, g, b[0], g, g, g, "(organic)", "organic", b[1], g), h;
      if (b || !a.get(Xb)) return k;
      a: {
        for (var b = a.get(yb), d = Ka(c[t]), e = 0; e < b[v]; ++e)
          if (-1 < d[p](b[e])) {
            a = k;
            break a
          }
        Ld(a, g, d, g, g, g, "(referral)", "referral", g, "/" + c[qa]);
        a = h
      }
      return a
    },
    Kd = function(a, b) {
      for (var c = a.get(wb), d = 0; d < c[v]; ++d) {
        var e = c[d][x](":");
        if (-1 < b[t][p](e[0][C]())) {
          var f = b.d.get(e[1]);
          if (f && (f = K(f), !f &&
              -1 < b[t][p]("google.") && (f = "(not provided)"), !e[3] || -1 < b.url[p](e[3]))) {
            a: {
              for (var c = f, d = a.get(xb), c = I(c)[C](), j = 0; j < d[v]; ++j)
                if (c == d[j]) {
                  c = h;
                  break a
                }
              c = k
            }
            return [e[2] || e[0], f, c]
          }
        }
      }
      return i
    },
    Ld = function(a, b, c, d, e, f, j, m, r, s) {
      a.set(ec, b);
      a.set(kc, c);
      a.set(gc, d);
      a.set(hc, e);
      a.set(ic, f);
      a.set(fc, j);
      a.set(lc, m);
      a.set(mc, r);
      a.set(nc, s)
    },
    Id = [fc, ec, gc, ic, kc, lc, mc, nc],
    Nd = function(a, b) {
      function c(a) {
        a = ("" + a)[x]("+")[B]("%20");
        return a = a[x](" ")[B]("%20")
      }

      function d(c) {
        var d = "" + (a.get(c) || ""),
          c = "" + (b[c] || "");
        return 0 <
          d[v] && d == c
      }
      if (d(gc) || d(ic)) return H(131), k;
      for (var e = 0; e < Id[v]; e++) {
        var f = Id[e],
          j = b[f] || "-",
          f = a.get(f) || "-";
        if (c(j) != c(f)) return h
      }
      return k
    },
    Pd = RegExp(/^https:\/\/(www\.)?google(\.com?)?(\.[a-z]{2}t?)?\/?$/i),
    Jd = function(a) {
      a = Oa(a.get(Gb), a.get(Q));
      try {
        if (Pd[ha](a)) return H(136), a + "?q="
      } catch (b) {
        H(145)
      }
      return a
    };
  var Rd = function(a) {
      Qd(a, J[y][wa]) ? (a.set(Hc, h), H(12)) : a.set(Hc, k)
    },
    Qd = function(a, b) {
      if (!a.get(cb)) return k;
      var c = La(b, a.get(db)),
        d = K(c.d.get("__utma")),
        e = K(c.d.get("__utmb")),
        f = K(c.d.get("__utmc")),
        j = K(c.d.get("__utmx")),
        m = K(c.d.get("__utmz")),
        r = K(c.d.get("__utmv")),
        c = K(c.d.get("__utmk"));
      if (F("" + d + e + f + j + m + r) != c) {
        d = I(d);
        e = I(e);
        f = I(f);
        j = I(j);
        f = Sd(d + e + f + j, m, r, c);
        if (!f) return k;
        m = f[0];
        r = f[1]
      }
      if (!Xc(a, d, h)) return k;
      $c(a, e, h);
      dd(a, m, h);
      bd(a, r, h);
      Td(a, j, h);
      return h
    },
    Vd = function(a, b, c) {
      var d;
      d = Yc(a) || "-";
      var e = Zc(a) || "-",
        f = "" + a.b(P, 1) || "-",
        j = Ud(a) || "-",
        m = cd(a, k) || "-",
        a = ad(a, k) || "-",
        r = F("" + d + e + f + j + m + a),
        s = [];
      s[n]("__utma=" + d);
      s[n]("__utmb=" + e);
      s[n]("__utmc=" + f);
      s[n]("__utmx=" + j);
      s[n]("__utmz=" + m);
      s[n]("__utmv=" + a);
      s[n]("__utmk=" + r);
      d = s[B]("&");
      if (!d) return b;
      e = b[p]("#");
      if (c) return 0 > e ? b + "#" + d : b + "&" + d;
      c = "";
      f = b[p]("?");
      0 < e && (c = b[A](e), b = b[A](0, e));
      return 0 > f ? b + "?" + d + c : b + "&" + d + c
    },
    Sd = function(a, b, c, d) {
      for (var e = 0; 3 > e; e++) {
        for (var f = 0; 3 > f; f++) {
          if (d == F(a + b + c)) return H(127), [b, c];
          var j = b[o](/ /g, "%20"),
            m =
            c[o](/ /g, "%20");
          if (d == F(a + j + m)) return H(128), [j, m];
          j = j[o](/\+/g, "%20");
          m = m[o](/\+/g, "%20");
          if (d == F(a + j + m)) return H(129), [j, m];
          try {
            var r = b[na]("utmctr=(.*?)(?:\\|utm|$)");
            if (r && 2 == r[v] && (j = b[o](r[1], G(I(r[1]))), d == F(a + j + c))) return H(139), [j, c]
          } catch (s) {}
          b = I(b)
        }
        c = I(c)
      }
    };
  var Wd = "|",
    Yd = function(a, b, c, d, e, f, j, m, r) {
      var s = Xd(a, b);
      s || (s = {}, a.get(zb)[n](s));
      s.id_ = b;
      s.affiliation_ = c;
      s.total_ = d;
      s.tax_ = e;
      s.shipping_ = f;
      s.city_ = j;
      s.state_ = m;
      s.country_ = r;
      s.items_ = s.items_ || [];
      return s
    },
    Zd = function(a, b, c, d, e, f, j) {
      var a = Xd(a, b) || Yd(a, b, "", 0, 0, 0, "", "", ""),
        m;
      a: {
        if (a && a.items_) {
          m = a.items_;
          for (var r = 0; r < m[v]; r++)
            if (m[r].sku_ == c) {
              m = m[r];
              break a
            }
        }
        m = i
      }
      r = m || {};
      r.transId_ = b;
      r.sku_ = c;
      r.name_ = d;
      r.category_ = e;
      r.price_ = f;
      r.quantity_ = j;
      m || a.items_[n](r);
      return r
    },
    Xd = function(a, b) {
      for (var c =
          a.get(zb), d = 0; d < c[v]; d++)
        if (c[d].id_ == b) return c[d];
      return i
    };
  var $d, ae = function(a) {
    if (!$d) {
      var b;
      b = J[y].hash;
      var c = W[q],
        d = /^#?gaso=([^&]*)/;
      if (c = (b = (b = b && b[na](d) || c && c[na](d)) ? b[1] : K(kd("GASO"))) && b[na](/^(?:[|!]([-0-9a-z.]{1,40})[|!])?([-.\w]{10,1200})$/i)) Bd(a, "GASO", "" + b), M._gasoDomain = a.get(Za), M._gasoCPath = a.get(Q), a = c[1], Ia("https://www.google.com/analytics/web/inpage/pub/inpage.js?" + (a ? "prefix=" + a + "&" : "") + Da(), "_gasojs");
      $d = h
    }
  };
  var Td = function(a, b, c) {
      c && (b = I(b));
      c = a.b(P, 1);
      b = b[x](".");
      !(2 > b[v]) && /^\d+$/ [ha](b[0]) && (b[0] = "" + c, Bd(a, "__utmx", b[B](".")))
    },
    Ud = function(a, b) {
      var c = Vc(a.get(P), kd("__utmx"));
      "-" == c && (c = "");
      return b ? G(c) : c
    };
  var ce = function(a, b) {
      var c = l.min(a.b(Ac, 0), 100);
      if (a.b(R, 0) % 100 >= c) return k;
      a: {
        if (c = (c = W.performance || W.webkitPerformance) && c.timing) {
          var d = c.navigationStart;
          if (0 == d) H(133);
          else {
            c = [c.loadEventStart - d, c.domainLookupEnd - c.domainLookupStart, c.connectEnd - c.connectStart, c.responseStart - c.requestStart, c.responseEnd - c.responseStart, c.fetchStart - d];
            break a
          }
        }
        c = g
      }
      c || (W.top != W ? c = g : (d = (c = W.external) && c.onloadT, c && !c.isValidLoadTime && (d = g), 2147483648 < d && (d = g), 0 < d && c.setPageReadyTime(), c = d == g ? g : [d]));
      if (c == g) return k;
      d = c[0];
      if (d == g || d == ba || isNaN(d)) return k;
      if (0 < d) {
        a: {
          for (d = 1; d < c[v]; d++)
            if (isNaN(c[d]) || c[d] == ba || 0 > c[d]) {
              d = k;
              break a
            }
          d = h
        }
        d ? b(be(c)) : b(be(c[ia](0, 1)))
      } else Fa(W, "load", function() {
        ce(a, b)
      }, k);
      return h
    },
    ee = function(a, b, c, d) {
      var e = new td;
      e.f(14, 90, b[A](0, 64));
      e.f(14, 91, a[A](0, 64));
      e.f(14, 92, "" + de(c));
      d != g && e.f(14, 93, d[A](0, 64));
      e.o(14, 90, c);
      return e
    },
    de = function(a) {
      return isNaN(a) || 0 > a ? 0 : 5E3 > a ? 10 * l[ka](a / 10) : 5E4 > a ? 100 * l[ka](a / 100) : 41E5 > a ? 1E3 * l[ka](a / 1E3) : 41E5
    },
    be = function(a) {
      for (var b = new td, c = 0; c < a[v]; c++) b.f(14,
        c + 1, "" + de(a[c])), b.o(14, c + 1, a[c]);
      return b
    };
  var U = function(a, b, c) {
    function d(a) {
      return function(b) {
        if ((b = b.get(Ic)[a]) && b[v])
          for (var c = {
              type: a,
              target: e,
              stopPropagation: function() {
                throw "aborted";
              }
            }, d = 0; d < b[v]; d++) b[d].call(e, c)
      }
    }
    var e = this;
    this.a = new Uc;
    this.get = function(a) {
      return this.a.get(a)
    };
    this.set = function(a, b, c) {
      this.a.set(a, b, c)
    };
    this.set(O, b || "UA-35422317-1");
    this.set(Xa, a || "");
    this.set(Wa, c || "");
    this.set(Ya, l.round((new Date).getTime() / 1E3));
    this.set(Q, "/");
    this.set($a, 63072E6);
    this.set(bb, 15768E6);
    this.set(ab, 18E5);
    this.set(cb, k);
    this.set(vb,
      50);
    this.set(db, k);
    this.set(eb, h);
    this.set(gb, h);
    this.set(hb, h);
    this.set(ib, h);
    this.set(jb, h);
    this.set(lb, "utm_campaign");
    this.set(kb, "utm_id");
    this.set(mb, "gclid");
    this.set(nb, "utm_source");
    this.set(ob, "utm_medium");
    this.set(pb, "utm_term");
    this.set(qb, "utm_content");
    this.set(rb, "utm_nooverride");
    this.set(sb, 100);
    this.set(Ac, 1);
    this.set(Bc, k);
    this.set(tb, "/__utm.gif");
    this.set(ub, 1);
    this.set(zb, []);
    this.set(Cb, []);
    this.set(wb, Hd[ia](0));
    this.set(xb, []);
    this.set(yb, []);
    this.C("auto");
    this.set(Gb, J.referrer);
    a = this.a;
    try {
      var f = La(J[y][wa], k),
        j = fa(L(f.d.get("utm_referrer"))) || "";
      j && a.set(Gb, j);
      var m = fa(K(f.d.get("utm_expid")));
      m && a.set(Kc, m)
    } catch (r) {
      H(146)
    }
    this.set(Ic, {
      hit: [],
      load: []
    });
    this.a.i("0", Rd);
    this.a.i("2", Fd);
    this.a.i("3", Od);
    this.a.i("5", Gd);
    this.a.i("6", d("load"));
    this.a.i("7", ae);
    this.a.e("A", fd);
    this.a.e("B", hd);
    this.a.e("C", Fd);
    this.a.e("D", ed);
    this.a.e("E", Pc);
    this.a.e("F", fe);
    this.a.e("G", Cd);
    this.a.e("H", id);
    this.a.e("I", pd);
    this.a.e("J", zd);
    this.a.e("K", d("hit"));
    this.a.e("L", ge);
    this.a.e("M",
      he);
    0 === this.get(Ya) && H(111);
    this.a.U();
    this.I = g
  };
  D = U[w];
  D.m = function() {
    var a = this.get(Ab);
    a || (a = new td, this.set(Ab, a));
    return a
  };
  D.Ma = function(a) {
    for (var b in a) {
      var c = a[b];
      a.hasOwnProperty(b) && this.set(b, c, h)
    }
  };
  D.L = function(a) {
    if (this.get(Bc)) return k;
    var b = this,
      c = ce(this.a, function(c) {
        b.set(Eb, a, h);
        b.t(c)
      });
    this.set(Bc, c);
    return c
  };
  D.Ga = function(a) {
    a && Ba(a) ? (H(13), this.set(Eb, a, h)) : "object" === typeof a && a !== i && this.Ma(a);
    this.I = a = this.get(Eb);
    if (1 >= 1E3 * l.random()) try {
      var b = J[y];
      this.a.set(Jc, b.hash[v]); - 1 != b.hash[ua](/utm_/) && H(137)
    } catch (c) {
      H(134)
    }
    this.a.j("page");
    this.L(a)
  };
  D.G = function(a, b, c, d, e) {
    if ("" == a || (!rd(a) || "" == b || !rd(b)) || c != g && !rd(c) || d != g && !sd(d)) return k;
    this.set(tc, a, h);
    this.set(uc, b, h);
    this.set(vc, c, h);
    this.set(wc, d, h);
    this.set(sc, !!e, h);
    this.a.j("event");
    return h
  };
  D.Ia = function(a, b, c, d, e) {
    var f = this.a.b(Ac, 0);
    1 * e === e && (f = e);
    if (this.a.b(R, 0) % 100 >= f) return k;
    c = 1 * ("" + c);
    if ("" == a || (!rd(a) || "" == b || !rd(b) || !sd(c) || isNaN(c) || 0 > c || 0 > f || 100 < f) || d != g && ("" == d || !rd(d))) return k;
    this.t(ee(a, b, c, d));
    return h
  };
  D.Ha = function(a, b, c, d) {
    if (!a || !b) return k;
    this.set(xc, a, h);
    this.set(yc, b, h);
    this.set(zc, c || J[y][wa], h);
    d && this.set(Eb, d, h);
    this.a.j("social");
    return h
  };
  D.Fa = function() {
    this.set(Ac, 10);
    this.L(this.I)
  };
  D.Ja = function() {
    this.a.j("trans")
  };
  D.t = function(a) {
    this.set(Bb, a, h);
    this.a.j("event")
  };
  D.ja = function(a) {
    this.v();
    var b = this;
    return {
      _trackEvent: function(c, d, e) {
        H(91);
        b.G(a, c, d, e)
      }
    }
  };
  D.na = function(a) {
    return this.get(a)
  };
  D.ya = function(a, b) {
    if (a)
      if (Ba(a)) this.set(a, b);
      else if ("object" == typeof a)
      for (var c in a) a.hasOwnProperty(c) && this.set(c, a[c])
  };
  D.addEventListener = function(a, b) {
    var c = this.get(Ic)[a];
    c && c[n](b)
  };
  D.removeEventListener = function(a, b) {
    for (var c = this.get(Ic)[a], d = 0; c && d < c[v]; d++)
      if (c[d] == b) {
        c.splice(d, 1);
        break
      }
  };
  D.ra = function() {
    return "5.3.5"
  };
  D.C = function(a) {
    this.get(eb);
    a = "auto" == a ? Ka(J.domain) : !a || "-" == a || "none" == a ? "" : a[C]();
    this.set(Za, a)
  };
  D.wa = function(a) {
    this.set(eb, !!a)
  };
  D.oa = function(a, b) {
    return Vd(this.a, a, b)
  };
  D.link = function(a, b) {
    if (this.a.get(cb) && a) {
      var c = Vd(this.a, a, b);
      J[y].href = c
    }
  };
  D.va = function(a, b) {
    this.a.get(cb) && (a && a.action) && (a.action = Vd(this.a, a.action, b))
  };
  D.Aa = function() {
    this.v();
    var a = this.a,
      b = J.getElementById ? J.getElementById("utmtrans") : J.utmform && J.utmform.utmtrans ? J.utmform.utmtrans : i;
    if (b && b[ma]) {
      a.set(zb, []);
      for (var b = b[ma][x]("UTM:"), c = 0; c < b[v]; c++) {
        b[c] = Ca(b[c]);
        for (var d = b[c][x](Wd), e = 0; e < d[v]; e++) d[e] = Ca(d[e]);
        "T" == d[0] ? Yd(a, d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8]) : "I" == d[0] && Zd(a, d[1], d[2], d[3], d[4], d[5], d[6])
      }
    }
  };
  D.aa = function(a, b, c, d, e, f, j, m) {
    return Yd(this.a, a, b, c, d, e, f, j, m)
  };
  D.Z = function(a, b, c, d, e, f) {
    return Zd(this.a, a, b, c, d, e, f)
  };
  D.Ba = function(a) {
    Wd = a || "|"
  };
  D.fa = function() {
    this.set(zb, [])
  };
  D.xa = function(a, b, c, d) {
    var e = this.a;
    if (0 >= a || a > e.get(vb)) a = k;
    else if (!b || !c || 128 < b[v] + c[v]) a = k;
    else {
      1 != d && 2 != d && (d = 3);
      var f = {};
      ga(f, b);
      f.value = c;
      f.scope = d;
      e.get(Cb)[a] = f;
      a = h
    }
    a && this.a.n();
    return a
  };
  D.la = function(a) {
    this.a.get(Cb)[a] = g;
    this.a.n()
  };
  D.sa = function(a) {
    return (a = this.a.get(Cb)[a]) && 1 == a[ta] ? a[ma] : g
  };
  D.Da = function(a, b, c) {
    this.m().f(a, b, c)
  };
  D.Ea = function(a, b, c) {
    this.m().o(a, b, c)
  };
  D.ta = function(a, b) {
    return this.m().getKey(a, b)
  };
  D.ua = function(a, b) {
    return this.m().O(a, b)
  };
  D.ga = function(a) {
    this.m().M(a)
  };
  D.ha = function(a) {
    this.m().N(a)
  };
  D.ka = function() {
    return new td
  };
  D.X = function(a) {
    a && this.get(xb)[n](a[C]())
  };
  D.ca = function() {
    this.set(xb, [])
  };
  D.Y = function(a) {
    a && this.get(yb)[n](a[C]())
  };
  D.da = function() {
    this.set(yb, [])
  };
  D.$ = function(a, b, c, d, e) {
    if (a && b) {
      a = [a, b[C]()][B](":");
      if (d || e) a = [a, d, e][B](":");
      d = this.get(wb);
      d.splice(c ? 0 : d[v], 0, a)
    }
  };
  D.ea = function() {
    this.set(wb, [])
  };
  D.ia = function(a) {
    this.a[ja]();
    var b = this.get(Q),
      c = Ud(this.a);
    this.set(Q, a);
    this.a.n();
    Td(this.a, c);
    this.set(Q, b)
  };
  D.za = function(a, b) {
    if (0 < a && 5 >= a && Ba(b) && "" != b) {
      var c = this.get(Cc) || [];
      c[a] = b;
      this.set(Cc, c)
    }
  };
  D.W = function(a) {
    a = "" + a;
    if (a[na](/^[A-Za-z0-9]{1,5}$/)) {
      var b = this.get(Dc) || [];
      b[n](a);
      this.set(Dc, b)
    }
  };
  D.v = function() {
    this.a[ja]()
  };
  D.Ca = function(a) {
    a && "" != a && (this.set(Qb, a), this.a.j("var"))
  };
  var fe = function(a) {
      "trans" !== a.get(pc) && 500 <= a.b(Zb, 0) && a[sa]();
      if ("event" === a.get(pc)) {
        var b = (new Date).getTime(),
          c = a.b($b, 0),
          d = a.b(Vb, 0),
          c = l[ka](1 * ((b - (c != d ? c : 1E3 * c)) / 1E3));
        0 < c && (a.set($b, b), a.set(S, l.min(10, a.b(S, 0) + c)));
        0 >= a.b(S, 0) && a[sa]()
      }
    },
    he = function(a) {
      "event" === a.get(pc) && a.set(S, l.max(0, a.b(S, 10) - 1))
    };
  var ie = function() {
      var a = [];
      this.add = function(b, c, d) {
        d && (c = G("" + c));
        a[n](b + "=" + c)
      };
      this.toString = function() {
        return a[B]("&")
      }
    },
    je = function(a, b) {
      (b || 2 != a.get(ub)) && a.z(Zb)
    },
    ke = function(a, b) {
      b.add("utmwv", "5.3.5");
      b.add("utms", a.get(Zb));
      b.add("utmn", Da());
      var c = J[y].hostname;
      E(c) || b.add("utmhn", c, h);
      c = a.get(sb);
      100 != c && b.add("utmsp", c, h)
    },
    le = function(a, b) {
      b.add("utmac", Ca(a.get(O)));
      a.get(Kc) && b.add("utmxkey", a.get(Kc), h);
      a.get(sc) && b.add("utmni", 1);
      var c = a.get(Dc);
      c && 0 < c[v] && b.add("utmdid", c[B]("."));
      var c = function(a, b) {
          b && d[n](a + "=" + b + ";")
        },
        d = [];
      c("__utma", Yc(a));
      c("__utmz", cd(a, k));
      c("__utmv", ad(a, h));
      c("__utmx", Ud(a));
      b.add("utmcc", d[B]("+"), h);
      M.w && b.add("aip", 1);
      b.add("utmu", jd.Ya());
      a.get(Jc) != g && b.add("utmhlen", a.get(Jc), h)
    },
    me = function(a, b) {
      for (var c = a.get(Cc) || [], d = [], e = 1; e < c[v]; e++) c[e] && d[n](e + ":" + G(c[e][o](/%/g, "%25")[o](/:/g, "%3A")[o](/,/g, "%2C")));
      d[v] && b.add("utmpg", d[B](","))
    },
    ne = function(a, b) {
      a.get(gb) && (b.add("utmcs", a.get(Nb), h), b.add("utmsr", a.get(Ib)), a.get(Ob) && b.add("utmvp",
        a.get(Ob)), b.add("utmsc", a.get(Jb)), b.add("utmul", a.get(Mb)), b.add("utmje", a.get(Kb)), b.add("utmfl", a.get(Lb), h))
    },
    oe = function(a, b) {
      a.get(jb) && a.get(Fb) && b.add("utmdt", a.get(Fb), h);
      b.add("utmhid", a.get(Hb));
      b.add("utmr", Oa(a.get(Gb), a.get(Q)), h);
      b.add("utmp", G(a.get(Eb), h), h)
    },
    pe = function(a, b) {
      for (var c = a.get(Ab), d = a.get(Bb), e = a.get(Cb) || [], f = 0; f < e[v]; f++) {
        var j = e[f];
        j && (c || (c = new td), c.f(8, f, j[q]), c.f(9, f, j[ma]), 3 != j[ta] && c.f(11, f, "" + j[ta]))
      }!E(a.get(tc)) && !E(a.get(uc), h) && (c || (c = new td), c.f(5, 1,
        a.get(tc)), c.f(5, 2, a.get(uc)), e = a.get(vc), e != g && c.f(5, 3, e), e = a.get(wc), e != g && c.o(5, 1, e));
      c ? b.add("utme", c.Ra(d), h) : d && b.add("utme", d.A(), h)
    },
    qe = function(a, b, c) {
      var d = new ie;
      je(a, c);
      ke(a, d);
      d.add("utmt", "tran");
      d.add("utmtid", b.id_, h);
      d.add("utmtst", b.affiliation_, h);
      d.add("utmtto", b.total_, h);
      d.add("utmttx", b.tax_, h);
      d.add("utmtsp", b.shipping_, h);
      d.add("utmtci", b.city_, h);
      d.add("utmtrg", b.state_, h);
      d.add("utmtco", b.country_, h);
      pe(a, d);
      ne(a, d);
      oe(a, d);
      (b = a.get(Db)) && d.add("utmcu", b, h);
      c || (me(a, d),
        le(a, d));
      return d[u]()
    },
    re = function(a, b, c) {
      var d = new ie;
      je(a, c);
      ke(a, d);
      d.add("utmt", "item");
      d.add("utmtid", b.transId_, h);
      d.add("utmipc", b.sku_, h);
      d.add("utmipn", b.name_, h);
      d.add("utmiva", b.category_, h);
      d.add("utmipr", b.price_, h);
      d.add("utmiqt", b.quantity_, h);
      pe(a, d);
      ne(a, d);
      oe(a, d);
      (b = a.get(Db)) && d.add("utmcu", b, h);
      c || (me(a, d), le(a, d));
      return d[u]()
    },
    se = function(a, b) {
      var c = a.get(pc);
      if ("page" == c) c = new ie, je(a, b), ke(a, c), pe(a, c), ne(a, c), oe(a, c), b || (me(a, c), le(a, c)), c = [c[u]()];
      else if ("event" == c) c =
        new ie, je(a, b), ke(a, c), c.add("utmt", "event"), pe(a, c), ne(a, c), oe(a, c), b || (me(a, c), le(a, c)), c = [c[u]()];
      else if ("var" == c) c = new ie, je(a, b), ke(a, c), c.add("utmt", "var"), !b && le(a, c), c = [c[u]()];
      else if ("trans" == c)
        for (var c = [], d = a.get(zb), e = 0; e < d[v]; ++e) {
          c[n](qe(a, d[e], b));
          for (var f = d[e].items_, j = 0; j < f[v]; ++j) c[n](re(a, f[j], b))
        } else "social" == c ? b ? c = [] : (c = new ie, je(a, b), ke(a, c), c.add("utmt", "social"), c.add("utmsn", a.get(xc), h), c.add("utmsa", a.get(yc), h), c.add("utmsid", a.get(zc), h), pe(a, c), ne(a, c), oe(a, c), me(a,
          c), le(a, c), c = [c[u]()]) : c = [];
      return c
    },
    ge = function(a) {
      var b, c = a.get(ub),
        d = a.get(rc),
        e = d && d.Va,
        f = 0;
      if (0 == c || 2 == c) {
        var j = a.get(tb) + "?";
        b = se(a, h);
        for (var m = 0, r = b[v]; m < r; m++) Ra(b[m], e, j, h), f++
      }
      if (1 == c || 2 == c) {
        b = se(a);
        m = 0;
        for (r = b[v]; m < r; m++) try {
          Ra(b[m], e), f++
        } catch (s) {
          s && Qa(s[q], g, s.message)
        }
      }
      d && (d.q = f)
    };
  var te = function() {
      return "https:" == J[y][z] || M.H ? "https://ssl.google-analytics.com" : "https://ssl.google-analytics.com"
    },
    ue = function(a) {
      ga(this, "len");
      this.message = a + "-8192"
    },
    ve = function(a) {
      ga(this, "ff2post");
      this.message = a + "-2036"
    },
    Ra = function(a, b, c, d) {
      b = b || Ea;
      if (d || 2036 >= a[v]) {
        var e = b,
          b = c || te() + "/__utm.gif?",
          f = new Image(1, 1);
        f.src = b + a;
        f.onload = function() {
          f.onload = i;
          f.onerror = i;
          e()
        };
        f.onerror = function() {
          f.onload = i;
          f.onerror = i;
          e()
        }
      } else if (8192 >= a[v]) {
        var j = b;
        if (0 <= W[ya].userAgent[p]("Firefox") && ![].reduce) throw new ve(a[v]);
        var m, b = te() + "/p/__utm.gif";
        if (c = W.XDomainRequest) m = new c, m.open("POST", b);
        else if (c = W.XMLHttpRequest) c = new c, "withCredentials" in c && (m = c, m.open("POST", b, h), m.setRequestHeader("Content-Type", "text/plain"));
        m ? (m.onreadystatechange = function() {
          4 == m.readyState && (j(), m = i)
        }, m.send(a), b = h) : b = g;
        b || we(a, j)
      } else throw new ue(a[v]);
    },
    we = function(a, b) {
      if (J.body) {
        a = aa(a);
        try {
          var c = J[pa]('<iframe name="' + a + '"></iframe>')
        } catch (d) {
          c = J[pa]("iframe"), ga(c, a)
        }
        c.height = "0";
        c.width = "0";
        c.style.display = "none";
        c.style.visibility =
          "hidden";
        var e = J[y],
          e = te() + "/u/post_iframe.html#" + aa(e[z] + "//" + e[t] + "/favicon.ico"),
          f = function() {
            c.src = "";
            c.parentNode && c.parentNode.removeChild(c)
          };
        Fa(W, "beforeunload", f);
        var j = k,
          m = 0,
          r = function() {
            if (!j) {
              try {
                if (9 < m || c.contentWindow[y][t] == J[y][t]) {
                  j = h;
                  f();
                  Ha(W, "beforeunload", f);
                  b();
                  return
                }
              } catch (a) {}
              m++;
              ca(r, 200)
            }
          };
        Fa(c, "load", r);
        J.body.appendChild(c);
        c.src = e
      } else ca(function() {
        we(a, b)
      }, 100)
    };
  var $ = function() {
    this.H = this.w = k;
    this.D = {};
    this.F = [];
    this.V = 0;
    this.T = [
      ["www.google-analytics.com", "", "/plugins/"]
    ];
    this._gasoCPath = this._gasoDomain = g;
    var a = function(a, c, d) {
      T($[w], a, c, d)
    };
    a("_createTracker", $[w].r, 55);
    a("_getTracker", $[w].pa, 0);
    a("_getTrackerByName", $[w].u, 51);
    a("_getTrackers", $[w].qa, 130);
    a("_anonymizeIp", $[w].ba, 16);
    a("_forceSSL", $[w].ma, 125);
    a("_getPlugin", Lc, 120);
    a = function(a, c, d) {
      T(U[w], a, c, d)
    };
    Mc("_getName", Xa, 58);
    Mc("_getAccount", O, 64);
    Mc("_visitCode", R, 54);
    Mc("_getClientInfo",
      gb, 53, 1);
    Mc("_getDetectTitle", jb, 56, 1);
    Mc("_getDetectFlash", hb, 65, 1);
    Mc("_getLocalGifPath", tb, 57);
    Mc("_getServiceMode", ub, 59);
    V("_setClientInfo", gb, 66, 2);
    V("_setAccount", O, 3);
    V("_setNamespace", Wa, 48);
    V("_setAllowLinker", cb, 11, 2);
    V("_setDetectFlash", hb, 61, 2);
    V("_setDetectTitle", jb, 62, 2);
    V("_setLocalGifPath", tb, 46, 0);
    V("_setLocalServerMode", ub, 92, g, 0);
    V("_setRemoteServerMode", ub, 63, g, 1);
    V("_setLocalRemoteServerMode", ub, 47, g, 2);
    V("_setSampleRate", sb, 45, 1);
    V("_setCampaignTrack", ib, 36, 2);
    V("_setAllowAnchor",
      db, 7, 2);
    V("_setCampNameKey", lb, 41);
    V("_setCampContentKey", qb, 38);
    V("_setCampIdKey", kb, 39);
    V("_setCampMediumKey", ob, 40);
    V("_setCampNOKey", rb, 42);
    V("_setCampSourceKey", nb, 43);
    V("_setCampTermKey", pb, 44);
    V("_setCampCIdKey", mb, 37);
    V("_setCookiePath", Q, 9, 0);
    V("_setMaxCustomVariables", vb, 0, 1);
    V("_setVisitorCookieTimeout", $a, 28, 1);
    V("_setSessionCookieTimeout", ab, 26, 1);
    V("_setCampaignCookieTimeout", bb, 29, 1);
    V("_setReferrerOverride", Gb, 49);
    V("_setSiteSpeedSampleRate", Ac, 132);
    a("_trackPageview", U[w].Ga, 1);
    a("_trackEvent",
      U[w].G, 4);
    a("_trackPageLoadTime", U[w].Fa, 100);
    a("_trackSocial", U[w].Ha, 104);
    a("_trackTrans", U[w].Ja, 18);
    a("_sendXEvent", U[w].t, 78);
    a("_createEventTracker", U[w].ja, 74);
    a("_getVersion", U[w].ra, 60);
    a("_setDomainName", U[w].C, 6);
    a("_setAllowHash", U[w].wa, 8);
    a("_getLinkerUrl", U[w].oa, 52);
    a("_link", U[w].link, 101);
    a("_linkByPost", U[w].va, 102);
    a("_setTrans", U[w].Aa, 20);
    a("_addTrans", U[w].aa, 21);
    a("_addItem", U[w].Z, 19);
    a("_clearTrans", U[w].fa, 105);
    a("_setTransactionDelim", U[w].Ba, 82);
    a("_setCustomVar", U[w].xa,
      10);
    a("_deleteCustomVar", U[w].la, 35);
    a("_getVisitorCustomVar", U[w].sa, 50);
    a("_setXKey", U[w].Da, 83);
    a("_setXValue", U[w].Ea, 84);
    a("_getXKey", U[w].ta, 76);
    a("_getXValue", U[w].ua, 77);
    a("_clearXKey", U[w].ga, 72);
    a("_clearXValue", U[w].ha, 73);
    a("_createXObj", U[w].ka, 75);
    a("_addIgnoredOrganic", U[w].X, 15);
    a("_clearIgnoredOrganic", U[w].ca, 97);
    a("_addIgnoredRef", U[w].Y, 31);
    a("_clearIgnoredRef", U[w].da, 32);
    a("_addOrganic", U[w].$, 14);
    a("_clearOrganic", U[w].ea, 70);
    a("_cookiePathCopy", U[w].ia, 30);
    a("_get", U[w].na,
      106);
    a("_set", U[w].ya, 107);
    a("_addEventListener", U[w].addEventListener, 108);
    a("_removeEventListener", U[w].removeEventListener, 109);
    a("_addDevId", U[w].W);
    a("_getPlugin", Lc, 122);
    a("_setPageGroup", U[w].za, 126);
    a("_trackTiming", U[w].Ia, 124);
    a("_initData", U[w].v, 2);
    a("_setVar", U[w].Ca, 22);
    V("_setSessionTimeout", ab, 27, 3);
    V("_setCookieTimeout", bb, 25, 3);
    V("_setCookiePersistence", $a, 24, 1);
    a("_setAutoTrackOutbound", Ea, 79);
    a("_setTrackOutboundSubdomains", Ea, 81);
    a("_setHrefExamineLimit", Ea, 80)
  };
  D = $[w];
  D.pa = function(a, b) {
    return this.r(a, g, b)
  };
  D.r = function(a, b, c) {
    b && H(23);
    c && H(67);
    b == g && (b = "~" + M.V++);
    a = new U(b, a, c);
    M.D[b] = a;
    M.F[n](a);
    return a
  };
  D.u = function(a) {
    a = a || "";
    return M.D[a] || M.r(g, a)
  };
  D.qa = function() {
    return M.F[ia](0)
  };
  D.ba = function() {
    this.w = h
  };
  D.ma = function() {
    this.H = h
  };
  var xe = function(a) {
    if ("prerender" == J.webkitVisibilityState) return k;
    a();
    return h
  };
  var M = new $;
  var ye = W._gat;
  ye && Aa(ye._getTracker) ? M = ye : W._gat = M;
  var Z = new Y;
  var ze = function() {
    var a = W._gaq,
      b = k;
    if (a && Aa(a[n]) && (b = "[object Array]" == Object[w][u].call(Object(a)), !b)) {
      Z = a;
      return
    }
    W._gaq = Z;
    b && Z[n][xa](Z, a)
  };
  if (!xe(ze)) {
    H(123);
    var Ae = k,
      Be = function() {
        !Ae && xe(ze) && (Ae = h, Ha(J, "webkitvisibilitychange", Be))
      };
    Fa(J, "webkitvisibilitychange", Be)
  };
})();
