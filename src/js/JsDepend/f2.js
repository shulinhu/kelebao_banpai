! function(t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.F2 = e() : t.F2 = e() }(this, function() {
    return function(t) {
        function e(n) { if (i[n]) return i[n].exports; var r = i[n] = { i: n, l: !1, exports: {} }; return t[n].call(r.exports, r, r.exports, e), r.l = !0, r.exports }
        var i = {};
        return e.m = t, e.c = i, e.d = function(t, i, n) { e.o(t, i) || Object.defineProperty(t, i, { configurable: !1, enumerable: !0, get: n }) }, e.n = function(t) { var i = t && t.__esModule ? function() { return t.default } : function() { return t }; return e.d(i, "a", i), i }, e.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, e.p = "", e(e.s = 139)
    }([function(t, e, i) {
        var n = i(46),
            r = {
                upperFirst: i(47),
                lowerFirst: i(48),
                isString: i(49),
                isNumber: i(50),
                isBoolean: i(51),
                isFunction: i(52),
                isDate: i(53),
                isArray: i(20),
                isNil: i(30),
                isObject: i(31),
                isPlainObject: i(32),
                deepMix: i(55),
                mix: i(56),
                each: i(57),
                isObjectValueEqual: function(t, e) {
                    t = Object.assign({}, t), e = Object.assign({}, e);
                    var i = Object.getOwnPropertyNames(t),
                        n = Object.getOwnPropertyNames(e);
                    if (i.length !== n.length) return !1;
                    for (var r = 0, a = i.length; r < a; r++) { var o = i[r]; if (t[o] !== e[o]) return !1 }
                    return !0
                },
                wrapBehavior: function(t, e) { if (t["_wrap_" + e]) return t["_wrap_" + e]; var i = function(i) { t[e](i) }; return t["_wrap_" + e] = i, i },
                getWrapBehavior: function(t, e) { return t["_wrap_" + e] },
                parsePadding: function(t) { var e, i, n, a; return r.isNumber(t) || r.isString(t) ? e = n = a = i = t : r.isArray(t) && (e = t[0], i = r.isNil(t[1]) ? t[0] : t[1], n = r.isNil(t[2]) ? t[0] : t[2], a = r.isNil(t[3]) ? i : t[3]), [e, i, n, a] },
                directionEnabled: function(t, e) { return void 0 === t || "string" == typeof t && -1 !== t.indexOf(e) }
            };
        r.Array = {
            merge: function(t) { for (var e = [], i = 0, n = t.length; i < n; i++) e = e.concat(t[i]); return e },
            values: function(t, e) {
                for (var i = [], n = {}, a = 0, o = t.length; a < o; a++) {
                    var s = t[a][e];
                    r.isNil(s) || (r.isArray(s) ? r.each(s, function(t) { n[t] || (i.push(t), n[t] = !0) }) : n[s] || (i.push(s), n[s] = !0))
                }
                return i
            },
            firstValue: function(t, e) { for (var i = null, n = 0, a = t.length; n < a; n++) { var o = t[n][e]; if (!r.isNil(o)) { i = r.isArray(o) ? o[0] : o; break } } return i },
            group: function(t, e, i) {
                if (void 0 === i && (i = {}), !e) return [t];
                var n = r.Array.groupToMap(t, e),
                    a = [];
                if (1 === e.length && i[e[0]]) {
                    var o = i[e[0]];
                    r.each(o, function(t) { t = "_" + t, a.push(n[t]) })
                } else
                    for (var s in n) a.push(n[s]);
                return a
            },
            groupToMap: function(t, e) {
                if (!e) return { 0: t };
                for (var i = {}, n = 0, r = t.length; n < r; n++) {
                    var a = t[n],
                        o = function(t) { for (var i = "_", n = 0, r = e.length; n < r; n++) i += t[e[n]] && t[e[n]].toString(); return i }(a);
                    i[o] ? i[o].push(a) : i[o] = [a]
                }
                return i
            },
            remove: function(t, e) { if (t) { var i = t.indexOf(e); - 1 !== i && t.splice(i, 1) } },
            getRange: function(t) { if (!t.length) return { min: 0, max: 0 }; var e = Math.max.apply(null, t); return { min: Math.min.apply(null, t), max: e } }
        }, r.mix(r, n), t.exports = r
    }, function(t, e, i) {
        var n = i(45),
            r = i(0),
            a = { version: "3.3.8", scales: {}, widthRatio: { column: .5, rose: .999999, multiplePie: .75 }, lineDash: [4, 4] };
        a.setTheme = function(t) { r.deepMix(this, t) }, a.setTheme(n), t.exports = a
    }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var r = i(0),
            a = function(t) {
                function e() { return t.apply(this, arguments) || this }
                n(e, t);
                var i = e.prototype;
                return i._initProperties = function() { this._attrs = { zIndex: 0, visible: !0, destroyed: !1, isShape: !0, attrs: {} } }, i.getType = function() { return this._attrs.type }, i.drawInner = function(t) {
                    var e = this,
                        i = e.get("attrs");
                    e.createPath(t);
                    var n = t.globalAlpha;
                    if (e.hasFill()) {
                        var a = i.fillOpacity;
                        r.isNil(a) || 1 === a ? t.fill() : (t.globalAlpha = a, t.fill(), t.globalAlpha = n)
                    }
                    if (e.hasStroke() && i.lineWidth > 0) {
                        var o = i.strokeOpacity;
                        r.isNil(o) || 1 === o || (t.globalAlpha = o), t.stroke()
                    }
                }, i.getBBox = function() { var t = this._attrs.bbox; return t || ((t = this.calculateBox()) && (t.x = t.minX, t.y = t.minY, t.width = t.maxX - t.minX, t.height = t.maxY - t.minY), this._attrs.bbox = t), t }, i.calculateBox = function() { return null }, i.createPath = function() {}, e
            }(i(27));
        t.exports = a
    }, function(t, e) {
        t.exports = {
            create: function() { return [0, 0] },
            length: function(t) {
                var e = t[0],
                    i = t[1];
                return Math.sqrt(e * e + i * i)
            },
            normalize: function(t, e) { var i = this.length(e); return 0 === i ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / i, t[1] = e[1] / i), t },
            add: function(t, e, i) { return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t },
            sub: function(t, e, i) { return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t },
            scale: function(t, e, i) { return t[0] = e[0] * i, t[1] = e[1] * i, t },
            dot: function(t, e) { return t[0] * e[0] + t[1] * e[1] },
            direction: function(t, e) { return t[0] * e[1] - e[0] * t[1] },
            angle: function(t, e) { var i = this.dot(t, e) / (this.length(t) * this.length(e)); return Math.acos(i) },
            angleTo: function(t, e, i) {
                var n = this.angle(t, e),
                    r = this.direction(t, e) >= 0;
                return i ? r ? 2 * Math.PI - n : n : r ? n : 2 * Math.PI - n
            },
            zero: function(t) { return 0 === t[0] && 0 === t[1] },
            distance: function(t, e) {
                var i = e[0] - t[0],
                    n = e[1] - t[1];
                return Math.sqrt(i * i + n * n)
            },
            clone: function(t) { return [t[0], t[1]] },
            min: function(t, e, i) { return t[0] = Math.min(e[0], i[0]), t[1] = Math.min(e[1], i[1]), t },
            max: function(t, e, i) { return t[0] = Math.max(e[0], i[0]), t[1] = Math.max(e[1], i[1]), t },
            transformMat2d: function(t, e, i) {
                var n = e[0],
                    r = e[1];
                return t[0] = i[0] * n + i[2] * r + i[4], t[1] = i[1] * n + i[3] * r + i[5], t
            }
        }
    }, function(t, e, i) {
        var n = i(25),
            r = i(13);
        t.exports = function(t, e) {
            if (t)
                if (r(t))
                    for (var i = 0, a = t.length; i < a && !1 !== e(t[i], i); i++);
                else if (n(t))
                for (var o in t)
                    if (t.hasOwnProperty(o) && !1 === e(t[o], o)) break
        }
    }, function(t, e, i) {
        var n = { Canvas: i(76), Group: i(35), Shape: i(2), Matrix: i(24), Vector2: i(3) };
        i(78), i(79), i(80), i(81), i(82), i(83), i(84), i(85), i(86), t.exports = n
    }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }

        function r(t) { return a.isArray(t) ? t : a.isString(t) ? t.split("*") : [t] }
        var a = i(0),
            o = i(33),
            s = ["color", "size", "shape"],
            c = i(1),
            l = i(61),
            u = i(8),
            h = i(23),
            f = function(t) {
                function e() { return t.apply(this, arguments) || this }
                n(e, t);
                var i = e.prototype;
                return i.getDefaultCfg = function() { return { type: null, data: null, attrs: {}, scales: {}, container: null, styleOptions: null, chart: null, shapeType: "", generatePoints: !1, attrOptions: {}, sortable: !1, startOnZero: !0, visible: !0, connectNulls: !1 } }, i.init = function() {
                    var t = this;
                    t._initAttrs();
                    var e = t._processData();
                    t.get("adjust") && t._adjustData(e), t.set("dataArray", e)
                }, i._getGroupScales = function() {
                    var t = this,
                        e = [];
                    return a.each(s, function(i) {
                        var n = t.getAttr(i);
                        if (n) {
                            var r = n.scales;
                            a.each(r, function(t) { t && t.isCategory && -1 === e.indexOf(t) && e.push(t) })
                        }
                    }), e
                }, i._groupData = function(t) {
                    var e = this,
                        i = e.get("colDefs"),
                        n = e._getGroupScales();
                    if (n.length) {
                        var r = {},
                            o = [];
                        return a.each(n, function(t) {
                            var e = t.field;
                            o.push(e), i && i[e] && i[e].values && (r[t.field] = i[e].values)
                        }), a.Array.group(t, o, r)
                    }
                    return [t]
                }, i._setAttrOptions = function(t, e) { this.get("attrOptions")[t] = e }, i._createAttrOption = function(t, e, i, n) {
                    var r = {};
                    r.field = e, i ? a.isFunction(i) ? r.callback = i : r.values = i : r.values = n, this._setAttrOptions(t, r)
                }, i._initAttrs = function() {
                    var t = this,
                        e = t.get("attrs"),
                        i = t.get("attrOptions"),
                        n = t.get("coord");
                    for (var o in i)
                        if (i.hasOwnProperty(o)) {
                            var s = i[o],
                                c = a.upperFirst(o),
                                u = r(s.field);
                            "position" === o && (s.coord = n);
                            for (var h = [], f = 0, p = u.length; f < p; f++) {
                                var g = u[f],
                                    d = t._createScale(g);
                                h.push(d)
                            }
                            if ("position" === o) { var v = h[1]; "polar" === n.type && n.transposed && t.hasAdjust("stack") && v.values.length && v.change({ nice: !1, min: 0, max: Math.max.apply(null, v.values) }) }
                            s.scales = h;
                            var y = new l[c](s);
                            e[o] = y
                        }
                }, i._createScale = function(t) {
                    var e = this.get("scales"),
                        i = e[t];
                    return i || (i = this.get("chart").createScale(t), e[t] = i), i
                }, i._processData = function() {
                    for (var t = this, e = this.get("data"), i = [], n = this._groupData(e), r = 0, a = n.length; r < a; r++) {
                        var o = n[r],
                            s = t._saveOrigin(o);
                        this.hasAdjust("dodge") && t._numberic(s), i.push(s)
                    }
                    return i
                }, i._saveOrigin = function(t) {
                    for (var e = [], i = 0, n = t.length; i < n; i++) {
                        var r = t[i],
                            a = {};
                        for (var o in r) a[o] = r[o];
                        a._origin = r, e.push(a)
                    }
                    return e
                }, i._numberic = function(t) {
                    for (var e = this.getAttr("position").scales, i = 0, n = t.length; i < n; i++)
                        for (var r = t[i], a = Math.min(2, e.length), o = 0; o < a; o++) {
                            var s = e[o];
                            if (s.isCategory) {
                                var c = s.field;
                                r[c] = s.translate(r[c])
                            }
                        }
                }, i._adjustData = function(t) {
                    var e = this,
                        i = e.get("adjust");
                    if (i) {
                        var n = a.upperFirst(i.type);
                        if (!h[n]) throw new Error("not support such adjust : " + i);
                        var r = e.getXScale(),
                            o = e.getYScale(),
                            s = a.mix({ xField: r.field, yField: o.field }, i);
                        new h[n](s).processAdjust(t), "Stack" === n && e._updateStackRange(o.field, o, t)
                    }
                }, i._updateStackRange = function(t, e, i) {
                    for (var n = a.Array.merge(i), r = e.min, o = e.max, s = 0, c = n.length; s < c; s++) {
                        var l = n[s],
                            u = Math.min.apply(null, l[t]),
                            h = Math.max.apply(null, l[t]);
                        u < r && (r = u), h > o && (o = h)
                    }(r < e.min || o > e.max) && e.change({ min: r, max: o })
                }, i._sort = function(t) {
                    var e = this,
                        i = e.getXScale(),
                        n = i.field,
                        r = i.type;
                    "identity" !== r && i.values.length > 1 && a.each(t, function(t) { t.sort(function(t, e) { return "timeCat" === r ? i._toTimeStamp(t._origin[n]) - i._toTimeStamp(e._origin[n]) : i.translate(t._origin[n]) - i.translate(e._origin[n]) }) }), e.set("hasSorted", !0), e.set("dataArray", t)
                }, i.paint = function() {
                    var t = this,
                        e = t.get("dataArray"),
                        i = [],
                        n = t.getShapeFactory();
                    n.setCoord(t.get("coord")), t._beforeMapping(e);
                    for (var r = 0, a = e.length; r < a; r++) {
                        var o = e[r];
                        o.length && (o = t._mapping(o), i.push(o), t.draw(o, n))
                    }
                    t.set("dataArray", i)
                }, i.getShapeFactory = function() {
                    var t = this.get("shapeFactory");
                    if (!t) {
                        var e = this.get("shapeType");
                        t = u.getShapeFactory(e), this.set("shapeFactory", t)
                    }
                    return t
                }, i._mapping = function(t) {
                    for (var e = this, i = e.get("attrs"), n = e.getYScale().field, r = [], o = 0, s = t.length; o < s; o++) {
                        var c = t[o],
                            l = {};
                        l._origin = c._origin, l.points = c.points, l._originY = c[n];
                        for (var u in i)
                            if (i.hasOwnProperty(u)) {
                                var h = i[u],
                                    f = h.names,
                                    p = e._getAttrValues(h, c);
                                if (f.length > 1)
                                    for (var g = 0, d = p.length; g < d; g++) {
                                        var v = p[g];
                                        l[f[g]] = a.isArray(v) && 1 === v.length ? v[0] : v
                                    } else l[f[0]] = 1 === p.length ? p[0] : p
                            }
                        r.push(l)
                    }
                    return r
                }, i._getAttrValues = function(t, e) {
                    for (var i = t.scales, n = [], r = 0, a = i.length; r < a; r++) {
                        var o = i[r],
                            s = o.field;
                        "identity" === o.type ? n.push(o.value) : n.push(e[s])
                    }
                    return t.mapping.apply(t, n)
                }, i.getAttrValue = function(t, e) {
                    var i = this.getAttr(t),
                        n = null;
                    return i && (n = this._getAttrValues(i, e)[0]), n
                }, i._beforeMapping = function(t) {
                    var e = this;
                    e.get("sortable") && e._sort(t), e.get("generatePoints") && a.each(t, function(t) { e._generatePoints(t) })
                }, i.isInCircle = function() { var t = this.get("coord"); return t && t.isPolar }, i.getCallbackCfg = function(t, e, i) {
                    if (!t) return e;
                    var n = {},
                        r = t.map(function(t) { return i[t] });
                    return a.each(e, function(t, e) { a.isFunction(t) ? n[e] = t.apply(null, r) : n[e] = t }), n
                }, i.getDrawCfg = function(t) {
                    var e = this,
                        i = e.isInCircle(),
                        n = { origin: t, x: t.x, y: t.y, color: t.color, size: t.size, shape: t.shape, isInCircle: i, opacity: t.opacity },
                        r = e.get("styleOptions");
                    return r && r.style && (n.style = e.getCallbackCfg(r.fields, r.style, t._origin)), e.get("generatePoints") && (n.points = t.points), i && (n.center = e.get("coord").center), n
                }, i.draw = function(t, e) {
                    var i = this,
                        n = i.get("container"),
                        r = i.getYScale();
                    a.each(t, function(t, o) {
                        if (!r || !a.isNil(t._origin[r.field])) {
                            t.index = o;
                            var s = i.getDrawCfg(t),
                                c = t.shape;
                            i.drawShape(c, t, s, n, e)
                        }
                    })
                }, i.drawShape = function(t, e, i, n, r) {
                    var o = r.drawShape(t, i, n);
                    o && a.each([].concat(o), function(t) { t.set("origin", e) })
                }, i._generatePoints = function(t) {
                    for (var e = this, i = e.getShapeFactory(), n = e.getAttr("shape"), r = 0, a = t.length; r < a; r++) {
                        var o = t[r],
                            s = e.createShapePointsCfg(o),
                            c = n ? e._getAttrValues(n, o) : null,
                            l = i.getShapePoints(c, s);
                        o.points = l
                    }
                }, i.createShapePointsCfg = function(t) {
                    var e, i = this.getXScale(),
                        n = this.getYScale(),
                        r = this._normalizeValues(t[i.field], i);
                    return e = n ? this._normalizeValues(t[n.field], n) : t.y ? t.y : .1, { x: r, y: e, y0: n ? n.scale(this.getYMinValue()) : void 0 }
                }, i.getYMinValue = function() {
                    var t = this.getYScale(),
                        e = t.min,
                        i = t.max;
                    return this.get("startOnZero") ? i <= 0 && e <= 0 ? i : e >= 0 ? e : 0 : e
                }, i._normalizeValues = function(t, e) {
                    var i = [];
                    if (a.isArray(t))
                        for (var n = 0, r = t.length; n < r; n++) {
                            var o = t[n];
                            i.push(e.scale(o))
                        } else i = e.scale(t);
                    return i
                }, i.getAttr = function(t) { return this.get("attrs")[t] }, i.getXScale = function() { return this.getAttr("position").scales[0] }, i.getYScale = function() { return this.getAttr("position").scales[1] }, i.hasAdjust = function(t) { return this.get("adjust") && this.get("adjust").type === t }, i._getSnap = function(t, e, i) {
                    var n, r = 0,
                        a = this.getYScale().field;
                    if (this.hasAdjust("stack") && t.field === a) { n = [], i.forEach(function(t) { n.push(t._originY) }); for (var o = n.length; r < o && !(n[0][0] > e); r++) { if (n[n.length - 1][1] <= e) { r = n.length - 1; break } if (n[r][0] <= e && n[r][1] > e) break } } else {
                        (n = t.values).sort(function(t, e) { return t - e });
                        for (var s = n.length; r < s && !((n[0] + n[1]) / 2 > e) && !((n[r - 1] + n[r]) / 2 <= e && (n[r + 1] + n[r]) / 2 > e); r++)
                            if ((n[n.length - 2] + n[n.length - 1]) / 2 <= e) { r = n.length - 1; break }
                    }
                    return n[r]
                }, i.getSnapRecords = function(t) {
                    var e = this,
                        i = e.get("coord"),
                        n = e.getXScale(),
                        r = e.getYScale(),
                        o = n.field,
                        s = e.get("dataArray");
                    this.get("hasSorted") || this._sort(s);
                    var c = [],
                        l = i.invertPoint(t),
                        u = l.x;
                    e.isInCircle() && !i.transposed && u > (1 + n.rangeMax()) / 2 && (u = n.rangeMin());
                    var h = n.invert(u);
                    n.isCategory || (h = e._getSnap(n, h));
                    var f = [];
                    if (s.forEach(function(t) {
                            t.forEach(function(t) {
                                var i = a.isNil(t._origin) ? t[o] : t._origin[o];
                                e._isEqual(i, h, n) && f.push(t)
                            })
                        }), this.hasAdjust("stack") && i.isPolar && i.transposed && 1 === n.values.length) {
                        if (u >= 0 && u <= 1) {
                            var p = r.invert(l.y);
                            p = e._getSnap(r, p, f), f.forEach(function(t) {
                                (a.isArray(p) ? t._originY.toString() === p.toString() : t._originY === p) && c.push(t)
                            })
                        }
                    } else c = f;
                    return c
                }, i._isEqual = function(t, e, i) { return "timeCat" === i.type ? i._toTimeStamp(t) === e : e === t }, i.position = function(t) { return this._setAttrOptions("position", { field: t }), this }, i.color = function(t, e) { return this._createAttrOption("color", t, e, c.colors), this }, i.size = function(t, e) { return this._createAttrOption("size", t, e, c.sizes), this }, i.shape = function(t, e) {
                    var i = this.get("type"),
                        n = c.shapes[i] || [];
                    return this._createAttrOption("shape", t, e, n), this
                }, i.style = function(t, e) {
                    var i = this.get("styleOptions");
                    i || (i = {}, this.set("styleOptions", i)), a.isObject(t) && (e = t, t = null);
                    var n;
                    return t && (n = r(t)), i.fields = n, i.style = e, this
                }, i.adjust = function(t) { return a.isString(t) && (t = { type: t }), this.set("adjust", t), this }, i.animate = function(t) { return this.set("animateCfg", t), this }, i.reset = function() { this.set("attrOptions", {}), this.set("adjust", null), this.clearInner() }, i.clearInner = function() {
                    var t = this.get("container");
                    t && (t.clear(), t.setMatrix([1, 0, 0, 1, 0, 0])), t && t.clear(), this.set("attrs", {}), this.set("groupScales", null), this.set("xDistance", null), this.set("_width", null)
                }, i.clear = function() { this.clearInner(), this.set("scales", {}) }, i.destroy = function() { this.clear(), t.prototype.destroy.call(this) }, i._display = function(t) {
                    this.set("visible", t);
                    var e = this.get("container"),
                        i = e.get("canvas");
                    e.set("visible", t), i.draw()
                }, i.show = function() { this._display(!0) }, i.hide = function() { this._display(!1) }, e
            }(o);
        t.exports = f
    }, function(t, e) {
        var i = {}.toString;
        t.exports = function(t, e) { return i.call(t) === "[object " + e + "]" }
    }, function(t, e, i) {
        var n = i(0),
            r = i(1),
            a = {},
            o = {
                _coord: null,
                draw: function(t, e) { this.drawShape && this.drawShape(t, e) },
                setCoord: function(t) { this._coord = t },
                parsePoint: function(t) { var e = this._coord; return e.isPolar && (1 === t.x && (t.x = .9999999), 1 === t.y && (t.y = .9999999)), e.convertPoint(t) },
                parsePoints: function(t) {
                    if (!t) return !1;
                    var e = this,
                        i = [];
                    return t.forEach(function(t) { i.push(e.parsePoint(t)) }), i
                }
            },
            s = {
                defaultShapeType: null,
                setCoord: function(t) { this._coord = t },
                getShape: function(t) {
                    var e = this;
                    n.isArray(t) && (t = t[0]);
                    var i = e[t] || e[e.defaultShapeType];
                    return i._coord = e._coord, i
                },
                getShapePoints: function(t, e) { var i = this.getShape(t); return (i.getPoints || i.getShapePoints || this.getDefaultPoints)(e) },
                getDefaultPoints: function() { return [] },
                drawShape: function(t, e, i) { var n = this.getShape(t); return e.color || (e.color = r.colors[0]), n.draw(e, i) }
            };
        a.registerFactory = function(t, e) {
            var i = n.upperFirst(t),
                r = n.mix({}, s, e);
            return a[i] = r, r.name = t, r
        }, a.registerShape = function(t, e, i) {
            var r = n.upperFirst(t),
                s = a[r],
                c = n.mix({}, o, i);
            return s[e] = c, c
        }, a.registShape = a.registerShape, a.getShapeFactory = function(t) { var e = this; return t = t || "point", e[n.upperFirst(t)] }, t.exports = a
    }, function(t, e) { t.exports = function(t) { return null === t || void 0 === t } }, function(t, e, i) {
        function n(t, e, i, n, a) { return { x: r(a, t.x, e.x, i.x, n.x), y: r(a, t.y, e.y, i.y, n.y) } }

        function r(t, e, i, n, r) { var a = t * t; return e + (3 * -e + t * (3 * e - e * t)) * t + (3 * i + t * (-6 * i + 3 * i * t)) * t + (3 * n - 3 * n * t) * a + r * (a * t) }

        function a(t) {
            for (var e = 1 / 0, i = -1 / 0, r = 1 / 0, a = -1 / 0, o = { x: t[0], y: t[1] }, s = { x: t[2], y: t[3] }, c = { x: t[4], y: t[5] }, l = { x: t[6], y: t[7] }, u = 0; u < 100; u++) {
                var h = n(o, s, c, l, u / 100);
                h.x < e && (e = h.x), h.x > i && (i = h.x), h.y < r && (r = h.y), h.y > a && (a = h.y)
            }
            return { minX: e, minY: r, maxX: i, maxY: a }
        }
        var o = i(3),
            s = o.create(),
            c = o.create(),
            l = o.create();
        t.exports = {
            getBBoxFromPoints: function(t, e) { if (0 !== t.length) { for (var i = t[0], n = i.x, r = i.x, a = i.y, o = i.y, s = t.length, c = 1; c < s; c++) i = t[c], n = Math.min(n, i.x), r = Math.max(r, i.x), a = Math.min(a, i.y), o = Math.max(o, i.y); return e = e / 2 || 0, { minX: n - e, minY: a - e, maxX: r + e, maxY: o + e } } },
            getBBoxFromLine: function(t, e, i, n, r) { return r = r / 2 || 0, { minX: Math.min(t, i) - r, minY: Math.min(e, n) - r, maxX: Math.max(t, i) + r, maxY: Math.max(e, n) + r } },
            getBBoxFromArc: function(t, e, i, n, r, a) {
                var u = Math.abs(n - r);
                if (u % (2 * Math.PI) < 1e-4 && u > 1e-4) return { minX: t - i, minY: e - i, maxX: t + i, maxY: e + i };
                s[0] = Math.cos(n) * i + t, s[1] = Math.sin(n) * i + e, c[0] = Math.cos(r) * i + t, c[1] = Math.sin(r) * i + e;
                var h = [0, 0],
                    f = [0, 0];
                if (o.min(h, s, c), o.max(f, s, c), (n %= 2 * Math.PI) < 0 && (n += 2 * Math.PI), (r %= 2 * Math.PI) < 0 && (r += 2 * Math.PI), n > r && !a ? r += 2 * Math.PI : n < r && a && (n += 2 * Math.PI), a) {
                    var p = r;
                    r = n, n = p
                }
                for (var g = 0; g < r; g += Math.PI / 2) g > n && (l[0] = Math.cos(g) * i + t, l[1] = Math.sin(g) * i + e, o.min(h, l, h), o.max(f, l, f));
                return { minX: h[0], minY: h[1], maxX: f[0], maxY: f[1] }
            },
            getBBoxFromBezierGroup: function(t, e) {
                for (var i = 1 / 0, n = -1 / 0, r = 1 / 0, o = -1 / 0, s = 0, c = t.length; s < c; s++) {
                    var l = a(t[s]);
                    l.minX < i && (i = l.minX), l.maxX > n && (n = l.maxX), l.minY < r && (r = l.minY), l.maxY > o && (o = l.maxY)
                }
                return e = e / 2 || 0, { minX: i - e, minY: r - e, maxX: n + e, maxY: o + e }
            }
        }
    }, function(t, e, i) {
        var n = i(0),
            r = { min: 0, median: .5, max: 1 },
            a = function() {
                function t(t) { this._initDefaultCfg(), n.deepMix(this, t) }
                var e = t.prototype;
                return e._initDefaultCfg = function() {}, e._getNormalizedValue = function(t, e) { return n.isNil(r[t]) ? e.scale(t) : r[t] }, e.parsePercentPoint = function(t, e) {
                    var i = parseFloat(e[0]) / 100,
                        n = parseFloat(e[1]) / 100,
                        r = t.start,
                        a = t.end,
                        o = Math.abs(r.x - a.x),
                        s = Math.abs(r.y - a.y);
                    return { x: o * i + Math.min(r.x, a.x), y: s * n + Math.min(r.y, a.y) }
                }, e.parsePoint = function(t, e) {
                    var i = this,
                        r = i.xScale,
                        a = i.yScales;
                    if (n.isFunction(e) && (e = e(r, a)), n.isString(e[0]) && -1 !== e[0].indexOf("%")) return this.parsePercentPoint(t, e);
                    var o = i._getNormalizedValue(e[0], r),
                        s = i._getNormalizedValue(e[1], a[0]),
                        c = t.convertPoint({ x: o, y: s });
                    return i.limitInPlot ? o >= 0 && o <= 1 && s >= 0 && s <= 1 ? c : null : c
                }, e.render = function() {}, e.repaint = function() {
                    this.remove();
                    var t = this.coord,
                        e = this.container,
                        i = this.canvas;
                    e && !e.isDestroyed() && (this.render(t, e), i.draw())
                }, e.remove = function() {
                    var t = this.element;
                    t && t.remove(!0)
                }, e.changeVisible = function(t) {
                    var e = this;
                    e.visible = t;
                    var i = e.element;
                    i && (i.set ? i.set("visible", t) : i.style.display = t ? "" : "none")
                }, t
            }();
        t.exports = a
    }, function(t, e, i) {
        var n = i(22),
            r = i(4),
            a = i(25),
            o = i(9),
            s = function() {
                function t(t) { this._initDefaultCfg(), n(this, t), this.init() }
                var e = t.prototype;
                return e._initDefaultCfg = function() { this.type = "base", this.formatter = null, this.range = [0, 1], this.ticks = null, this.values = [] }, e.init = function() {}, e.getTicks = function() {
                    var t = this,
                        e = t.ticks,
                        i = [];
                    return r(e, function(e) {
                        var n;
                        n = a(e) ? e : { text: t.getText(e), tickValue: e, value: t.scale(e) }, i.push(n)
                    }), i
                }, e.getText = function(t, e) { var i = this.formatter; return t = i ? i(t, e) : t, !o(t) && t.toString || (t = ""), t.toString() }, e.rangeMin = function() { return this.range[0] }, e.rangeMax = function() { var t = this.range; return t[t.length - 1] }, e.invert = function(t) { return t }, e.translate = function(t) { return t }, e.scale = function(t) { return t }, e.clone = function() {
                    var t = this,
                        e = t.constructor,
                        i = {};
                    return r(t, function(e, n) { i[n] = t[n] }), new e(i)
                }, e.change = function(t) { return this.ticks = null, n(this, t), this.init(), this }, t
            }();
        t.exports = s
    }, function(t, e, i) {
        var n = i(16),
            r = Array.isArray ? Array.isArray : function(t) { return n(t, "Array") };
        t.exports = r
    }, function(t, e, i) {
        function n(t, e) { return r(e) ? e : t.invert(t.scale(e)) }
        var r = i(18),
            a = i(13),
            o = i(9),
            s = i(22),
            c = i(4),
            l = function() {
                function t(t) {
                    var e = this;
                    this.type = "base", this.name = null, this.method = null, this.values = [], this.scales = [], this.linear = null;
                    var i = null,
                        n = this.callback;
                    if (t.callback) {
                        var r = t.callback;
                        i = function() { for (var t = arguments.length, i = new Array(t), a = 0; a < t; a++) i[a] = arguments[a]; var s = r.apply(void 0, i); return o(s) && (s = n.apply(e, i)), s }
                    }
                    s(this, t), i && s(this, { callback: i })
                }
                var e = t.prototype;
                return e._getAttrValue = function(t, e) { var i = this.values; if (t.isCategory && !this.linear) return i[t.translate(e) % i.length]; var n = t.scale(e); return this.getLinearValue(n) }, e.getLinearValue = function(t) {
                    var e = this.values,
                        i = e.length - 1,
                        n = Math.floor(i * t),
                        r = i * t - n,
                        a = e[n];
                    return a + ((n === i ? a : e[n + 1]) - a) * r
                }, e.callback = function(t) {
                    var e = this,
                        i = e.scales[0];
                    return "identity" === i.type ? i.value : e._getAttrValue(i, t)
                }, e.getNames = function() { for (var t = this.scales, e = this.names, i = Math.min(t.length, e.length), n = [], r = 0; r < i; r++) n.push(e[r]); return n }, e.getFields = function() {
                    var t = this.scales,
                        e = [];
                    return c(t, function(t) { e.push(t.field) }), e
                }, e.getScale = function(t) { return this.scales[this.names.indexOf(t)] }, e.mapping = function() {
                    for (var t = this.scales, e = this.callback, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
                    var a = n;
                    if (e) {
                        for (var o = 0, s = n.length; o < s; o++) n[o] = this._toOriginParam(n[o], t[o]);
                        a = e.apply(this, n)
                    }
                    return a = [].concat(a)
                }, e._toOriginParam = function(t, e) {
                    var i = t;
                    if (!e.isLinear)
                        if (a(t)) { i = []; for (var r = 0, o = t.length; r < o; r++) i.push(n(e, t[r])) } else i = n(e, t);
                    return i
                }, t
            }();
        t.exports = l
    }, function(t, e, i) {
        function n(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }

        function r(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }

        function a(t) {
            var e = t.startAngle,
                i = t.endAngle;
            return !(!u.isNil(e) && !u.isNil(i) && i - e < 2 * Math.PI)
        }

        function o(t, e) { return t - e }

        function s(t, e) {
            var i = !1;
            return u.each(t, function(t) {
                var n = [].concat(t.values),
                    r = [].concat(e.values);
                t.type !== e.type || t.field !== e.field || n.sort(o).toString() !== r.sort(o).toString() || (i = !0)
            }), i
        }
        var c = i(33),
            l = i(58),
            u = i(0),
            h = i(59),
            f = i(6),
            p = i(67),
            g = i(73),
            d = i(1),
            v = i(5).Canvas,
            y = i(28),
            m = function(t) {
                function e(e) {
                    var i, r = n(i = t.call(this, e) || this);
                    return u.each(f, function(t, e) {
                        var i = u.lowerFirst(e);
                        r[i] = function(e) { var i = new t(e); return r.addGeom(i), i }
                    }), r._init(), i
                }
                r(e, t), e.initPlugins = function() {
                    return {
                        _plugins: [],
                        _cacheId: 0,
                        register: function(t) {
                            var e = this._plugins;
                            [].concat(t).forEach(function(t) {-1 === e.indexOf(t) && e.push(t) }), this._cacheId++
                        },
                        unregister: function(t) {
                            var e = this._plugins;
                            [].concat(t).forEach(function(t) { var i = e.indexOf(t); - 1 !== i && e.splice(i, 1) }), this._cacheId++
                        },
                        clear: function() { this._plugins = [], this._cacheId++ },
                        count: function() { return this._plugins.length },
                        getAll: function() { return this._plugins },
                        notify: function(t, e, i) {
                            var n, r, a, o, s, c = this.descriptors(t),
                                l = c.length;
                            for (n = 0; n < l; ++n)
                                if (r = c[n], a = r.plugin, "function" == typeof(s = a[e]) && (o = [t].concat(i || []), !1 === s.apply(a, o))) return !1;
                            return !0
                        },
                        descriptors: function(t) {
                            var e = t._plugins || (t._plugins = {});
                            if (e.id === this._cacheId) return e.descriptors;
                            var i = [],
                                n = [];
                            return this._plugins.concat(t && t.get("plugins") || []).forEach(function(t) {-1 === i.indexOf(t) && (i.push(t), n.push({ plugin: t })) }), e.descriptors = n, e.id = this._cacheId, n
                        }
                    }
                };
                var i = e.prototype;
                return i.getDefaultCfg = function() { return { id: null, padding: d.padding, data: null, scales: {}, geoms: null, colDefs: null, pixelRatio: d.pixelRatio, filters: null, appendPadding: d.appendPadding } }, i._syncYScales = function() {
                    var t = this.get("geoms"),
                        e = [],
                        i = [],
                        n = [];
                    u.each(t, function(t) {
                        var r = t.getYScale();
                        r.isLinear && (e.push(r), i.push(r.min), n.push(r.max))
                    }), i = Math.min.apply(null, i), n = Math.max.apply(null, n), u.each(e, function(t) { t.change({ min: i }), t.change({ max: n }) })
                }, i._getFieldsForLegend = function() {
                    var t = [],
                        e = this.get("geoms");
                    return u.each(e, function(e) {
                        var i = e.get("attrOptions").color;
                        if (i && i.field && u.isString(i.field)) {
                            var n = i.field.split("*");
                            u.each(n, function(e) {-1 === t.indexOf(e) && t.push(e) })
                        }
                    }), t
                }, i._createScale = function(t, e) { return this.get("scaleController").createScale(t, e) }, i._adjustScale = function() {
                    var t = this,
                        e = t.get("coord"),
                        i = t.getXScale(),
                        n = t.getYScales(),
                        r = [];
                    i && r.push(i), r = r.concat(n);
                    var o = e.isPolar && a(e),
                        s = t.get("scaleController").defs;
                    u.each(r, function(t) {
                        if ((t.isCategory || t.isIdentity) && t.values && (!s[t.field] || !s[t.field].range)) {
                            var i, n = t.values.length;
                            if (1 === n) i = [.5, 1];
                            else {
                                var r = 0;
                                i = o ? e.transposed ? [(r = 1 / n * d.widthRatio.multiplePie) / 2, 1 - r / 2] : [0, 1 - 1 / n] : [r = 1 / n * 1 / 2, 1 - r]
                            }
                            t.range = i
                        }
                    });
                    for (var c = this.get("geoms"), l = 0; l < c.length; l++) {
                        var h = c[l];
                        if ("interval" === h.get("type")) {
                            var f = h.getYScale(),
                                p = f.field,
                                g = f.min,
                                v = f.max,
                                y = f.type;
                            s[p] && s[p].min || "time" === y || (g > 0 ? f.change({ min: 0 }) : v <= 0 && f.change({ max: 0 }))
                        }
                    }
                }, i._removeGeoms = function() { for (var t = this.get("geoms"); t.length > 0;) t.shift().destroy() }, i._clearGeoms = function() { for (var t = this.get("geoms"), e = 0, i = t.length; e < i; e++) t[e].clear() }, i._clearInner = function() { this.set("scales", {}), this.set("legendItems", null), this._clearGeoms(), e.plugins.notify(this, "clearInner"), this.get("axisController") && this.get("axisController").clear() }, i._execFilter = function(t) { var e = this.get("filters"); return e && (t = t.filter(function(t) { var i = !0; return u.each(e, function(e, n) { if (e && !(i = e(t[n], t))) return !1 }), i })), t }, i._initGeoms = function(t) {
                    for (var e = this.get("coord"), i = this.get("filteredData"), n = this.get("colDefs"), r = 0, a = t.length; r < a; r++) {
                        var o = t[r];
                        o.set("data", i), o.set("coord", e), o.set("colDefs", n), o.init()
                    }
                }, i._initCoord = function() {
                    var t = this.get("plotRange"),
                        e = u.mix({ type: "cartesian" }, this.get("coordCfg"), { plot: t }),
                        i = e.type,
                        n = new(0, h[u.upperFirst(i)])(e);
                    this.set("coord", n)
                }, i._initLayout = function() {
                    var t = this.get("_padding");
                    t || (t = this.get("margin") || this.get("padding"), t = u.parsePadding(t));
                    var e = "auto" === t[0] ? 0 : t[0],
                        i = "auto" === t[1] ? 0 : t[1],
                        n = "auto" === t[2] ? 0 : t[2],
                        r = "auto" === t[3] ? 0 : t[3],
                        a = this.get("width"),
                        o = this.get("height"),
                        s = new l({ start: { x: r, y: e }, end: { x: a - i, y: o - n } });
                    this.set("plotRange", s), this.set("plot", s)
                }, i._initCanvas = function() {
                    var t = this;
                    try {
                        var i = new v({ el: t.get("el") || t.get("id"), context: t.get("context"), pixelRatio: t.get("pixelRatio"), width: t.get("width"), height: t.get("height"), fontFamily: d.fontFamily });
                        t.set("canvas", i), t.set("width", i.get("width")), t.set("height", i.get("height"))
                    } catch (t) { throw t }
                    e.plugins.notify(t, "afterCanvasInit"), t._initLayout()
                }, i._initLayers = function() {
                    var t = this.get("canvas");
                    this.set("backPlot", t.addGroup()), this.set("middlePlot", t.addGroup({ zIndex: 10 })), this.set("frontPlot", t.addGroup({ zIndex: 20 }))
                }, i._init = function() {
                    var t = this;
                    t._initCanvas(), t._initLayers(), t.set("geoms", []), t.set("scaleController", new p), t.set("axisController", new g({ frontPlot: t.get("frontPlot").addGroup({ className: "axisContainer" }), backPlot: t.get("backPlot").addGroup({ className: "axisContainer" }), chart: t })), e.plugins.notify(t, "init")
                }, i.source = function(t, e) { return this.set("data", t), e && this.scale(e), this }, i.scale = function(t, e) { var i = this.get("colDefs") || {}; return u.isObject(t) ? u.mix(i, t) : i[t] = e, this.set("colDefs", i), this.get("scaleController").defs = i, this }, i.axis = function(t, e) { var i = this.get("axisController"); return t ? (i.axisCfg = i.axisCfg || {}, i.axisCfg[t] = e) : i.axisCfg = null, this }, i.coord = function(t, e) { var i; return u.isObject(t) ? i = t : (i = e || {}).type = t || "cartesian", this.set("coordCfg", i), this }, i.filter = function(t, e) {
                    var i = this.get("filters") || {};
                    i[t] = e, this.set("filters", i)
                }, i.render = function() {
                    var t = this.get("canvas"),
                        i = this.get("geoms"),
                        n = this.get("data") || [],
                        r = this._execFilter(n);
                    this.set("filteredData", r), this._initCoord(), e.plugins.notify(this, "beforeGeomInit"), this._initGeoms(i), this.get("syncY") && this._syncYScales(), this._adjustScale(), e.plugins.notify(this, "beforeGeomDraw"), this._renderAxis();
                    var a = this.get("middlePlot");
                    if (this.get("limitInPlot") && !a.attr("clip")) {
                        var o = this.get("coord"),
                            s = y.getClip(o);
                        s.set("canvas", a.get("canvas")), a.attr("clip", s)
                    }
                    for (var c = 0, l = i.length; c < l; c++) i[c].paint();
                    return e.plugins.notify(this, "afterGeomDraw"), t.sort(), this.get("frontPlot").sort(), e.plugins.notify(this, "beforeCanvasDraw"), t.draw(), this
                }, i.clear = function() { return e.plugins.notify(this, "clear"), this._removeGeoms(), this._clearInner(), this.set("filters", null), this.set("isUpdate", !1), this.set("_padding", null), this.get("canvas").draw(), this }, i.repaint = function() { this.set("isUpdate", !0), e.plugins.notify(this, "repaint"), this._clearInner(), this.render() }, i.changeData = function(t) { this.set("data", t), e.plugins.notify(this, "changeData"), this.set("_padding", null), this.repaint() }, i.changeSize = function(t, e) { return t ? this.set("width", t) : t = this.get("width"), e ? this.set("height", e) : e = this.get("height"), this.get("canvas").changeSize(t, e), this._initLayout(), this.repaint(), this }, i.destroy = function() { this.clear(), this.get("canvas").destroy(), e.plugins.notify(this, "afterCanvasDestroyed"), this._interactions && u.each(this._interactions, function(t) { t.destroy() }), t.prototype.destroy.call(this) }, i.getPosition = function(t) {
                    var e = this,
                        i = e.get("coord"),
                        n = e.getXScale(),
                        r = e.getYScales()[0],
                        a = n.field,
                        o = n.scale(t[a]),
                        s = r.field,
                        c = r.scale(t[s]);
                    return i.convertPoint({ x: o, y: c })
                }, i.getRecord = function(t) {
                    var e = this,
                        i = e.get("coord"),
                        n = e.getXScale(),
                        r = e.getYScales()[0],
                        a = i.invertPoint(t),
                        o = {};
                    return o[n.field] = n.invert(a.x), o[r.field] = r.invert(a.y), o
                }, i.getSnapRecords = function(t) {
                    var e = this.get("geoms")[0],
                        i = [];
                    return e && (i = e.getSnapRecords(t)), i
                }, i.createScale = function(t) {
                    var e = this.get("data"),
                        i = this.get("filteredData");
                    i.length && -1 === this._getFieldsForLegend().indexOf(t) && (e = i);
                    var n = this.get("scales");
                    return n[t] || (n[t] = this._createScale(t, e)), n[t]
                }, i.addGeom = function(t) {
                    var e = this.get("geoms"),
                        i = this.get("middlePlot");
                    e.push(t), t.set("chart", this), t.set("container", i.addGroup())
                }, i.getXScale = function() { return this.get("geoms")[0].getXScale() }, i.getYScales = function() {
                    var t = this.get("geoms"),
                        e = [];
                    return u.each(t, function(t) { var i = t.getYScale(); - 1 === e.indexOf(i) && e.push(i) }), e
                }, i.getLegendItems = function() {
                    if (this.get("legendItems")) return this.get("legendItems");
                    var t = {},
                        e = [],
                        i = this.get("geoms");
                    return u.each(i, function(i) {
                        var n = i.getAttr("color");
                        if (n) {
                            var r = n.getScale("color");
                            if ("identity" !== r.type && !s(e, r)) {
                                e.push(r);
                                var a = r.field,
                                    o = r.getTicks(),
                                    c = [];
                                u.each(o, function(t) {
                                    var e = t.text,
                                        i = t.value,
                                        a = r.invert(i),
                                        o = { fill: n.mapping(a).join("") || d.defaultColor, radius: 3, symbol: "circle", stroke: "#fff" };
                                    c.push({ name: e, dataValue: a, checked: !0, marker: o })
                                }), t[a] = c
                            }
                        }
                    }), this.set("legendItems", t), t
                }, i.registerPlugins = function(t) {
                    var i = this,
                        n = i.get("plugins") || [];
                    u.isArray(n) || (n = [n]), [].concat(t).forEach(function(t) {-1 === n.indexOf(t) && (t.init && t.init(i), n.push(t)) }), e.plugins._cacheId++, i.set("plugins", n)
                }, i._renderAxis = function() {
                    var t = this.get("axisController"),
                        i = this.getXScale(),
                        n = this.getYScales(),
                        r = this.get("coord");
                    e.plugins.notify(this, "beforeRenderAxis"), t.createAxis(r, i, n)
                }, i._isAutoPadding = function() { if (this.get("_padding")) return !1; var t = this.get("padding"); return u.isArray(t) ? -1 !== t.indexOf("auto") : "auto" === t }, i._updateLayout = function(t) {
                    var e = this.get("width"),
                        i = this.get("height"),
                        n = { x: t[3], y: t[0] },
                        r = { x: e - t[1], y: i - t[2] },
                        a = this.get("plot"),
                        o = this.get("coord");
                    a.reset(n, r), o.reset(a)
                }, e
            }(c);
        m.plugins = m.initPlugins(), t.exports = m
    }, function(t, e) {
        var i = {}.toString;
        t.exports = function(t, e) { return i.call(t) === "[object " + e + "]" }
    }, function(t, e, i) {
        var n = i(16);
        t.exports = function(t) { return n(t, "Number") }
    }, function(t, e, i) {
        var n = i(16);
        t.exports = function(t) { return n(t, "String") }
    }, function(t, e, i) {
        var n = i(0),
            r = {
                splitPoints: function(t) {
                    var e = [],
                        i = t.x,
                        r = t.y;
                    return (r = n.isArray(r) ? r : [r]).forEach(function(t, r) {
                        var a = { x: n.isArray(i) ? i[r] : i, y: t };
                        e.push(a)
                    }), e
                },
                splitArray: function(t, e, i) {
                    if (!t.length) return [];
                    var r, a = [],
                        o = [];
                    return n.each(t, function(t) { r = t._origin ? t._origin[e] : t[e], i ? n.isNil(r) || o.push(t) : n.isArray(r) && n.isNil(r[0]) || n.isNil(r) ? o.length && (a.push(o), o = []) : o.push(t) }), o.length && a.push(o), a
                }
            };
        t.exports = r
    }, function(t, e, i) {
        var n = i(7),
            r = Array.isArray ? Array.isArray : function(t) { return n(t, "Array") };
        t.exports = r
    }, function(t, e, i) {
        var n = i(0),
            r = function() {
                function t(t) {
                    this._initDefaultCfg(), n.mix(this, t);
                    var e, i;
                    this.plot ? (e = this.plot.bl, i = this.plot.tr, this.start = e, this.end = i) : (e = this.start, i = this.end), this.init(e, i)
                }
                var e = t.prototype;
                return e._initDefaultCfg = function() {}, e.init = function() {}, e.convertPoint = function(t) { return t }, e.invertPoint = function(t) { return t }, e.reset = function(t) {
                    this.plot = t;
                    var e = t.bl,
                        i = t.tr;
                    this.start = e, this.end = i, this.init(e, i)
                }, t
            }();
        t.exports = r
    }, function(t, e) {
        function i(t, e) { for (var i in e) e.hasOwnProperty(i) && "constructor" !== i && void 0 !== e[i] && (t[i] = e[i]) }
        t.exports = function(t, e, n, r) { return e && i(t, e), n && i(t, n), r && i(t, r), t }
    }, function(t, e, i) {
        var n = i(22),
            r = function() {
                function t(t) { this._initDefaultCfg(), n(this, t) }
                var e = t.prototype;
                return e._initDefaultCfg = function() { this.adjustNames = ["x", "y"] }, e.processAdjust = function() {}, t
            }();
        t.exports = r
    }, function(t, e) {
        var i = {
            multiply: function(t, e) { return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5]] },
            scale: function(t, e, i) { return t[0] = e[0] * i[0], t[1] = e[1] * i[0], t[2] = e[2] * i[1], t[3] = e[3] * i[1], t[4] = e[4], t[5] = e[5], t },
            rotate: function(t, e, i) {
                var n = Math.cos(i),
                    r = Math.sin(i),
                    a = e[0] * n + e[2] * r,
                    o = e[1] * n + e[3] * r,
                    s = e[0] * -r + e[2] * n,
                    c = e[1] * -r + e[3] * n;
                return t[0] = a, t[1] = o, t[2] = s, t[3] = c, t[4] = e[4], t[5] = e[5], t
            },
            translate: function(t, e, i) { return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + e[0] * i[0] + e[2] * i[1], t[5] = e[5] + e[1] * i[0] + e[3] * i[1], t },
            transform: function(t, e) {
                for (var n = [].concat(t), r = 0, a = e.length; r < a; r++) {
                    var o = e[r];
                    switch (o[0]) {
                        case "t":
                            i.translate(n, n, [o[1], o[2]]);
                            break;
                        case "s":
                            i.scale(n, n, [o[1], o[2]]);
                            break;
                        case "r":
                            i.rotate(n, n, o[1])
                    }
                }
                return n
            }
        };
        t.exports = i
    }, function(t, e) {
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t };
        t.exports = function(t) { var e = void 0 === t ? "undefined" : i(t); return null !== t && "object" === e || "function" === e }
    }, function(t, e, i) {
        var n = i(0),
            r = i(1),
            a = i(3),
            o = function() {
                function t(t) { this._initDefaultCfg(), n.mix(this, t), this.draw() }
                var e = t.prototype;
                return e._initDefaultCfg = function() { this.ticks = [], this.tickLine = {}, this.offsetFactor = 1, this.frontContainer = null, this.backContainer = null, this.gridPoints = [] }, e.draw = function() {
                    var t = this.line,
                        e = this.tickLine,
                        i = this.label,
                        n = this.grid;
                    n && this.drawGrid(n), e && this.drawTicks(e), t && this.drawLine(t), i && this.drawLabels()
                }, e.drawTicks = function(t) {
                    var e = this,
                        i = e.ticks,
                        r = t.length,
                        a = e.getContainer(t.top);
                    n.each(i, function(i) {
                        var o = e.getOffsetPoint(i.value),
                            s = e.getSidePoint(o, r);
                        a.addShape("line", { className: "axis-tick", attrs: n.mix({ x1: o.x, y1: o.y, x2: s.x, y2: s.y }, t) })._id = e._id + "-ticks"
                    })
                }, e.drawLabels = function() {
                    var t = this,
                        e = t.labelOffset,
                        i = t.labels;
                    n.each(i, function(i) {
                        var r = t.getContainer(i.get("top")),
                            a = t.getOffsetPoint(i.get("value")),
                            o = t.getSidePoint(a, e),
                            s = o.x,
                            c = o.y;
                        i.attr(n.mix({ x: s, y: c }, t.getTextAlignInfo(a, e), i.get("textStyle"))), i._id = t._id + "-" + i.attr("text"), r.add(i)
                    })
                }, e.drawLine = function() {}, e.drawGrid = function(t) {
                    var e = this,
                        i = e.gridPoints,
                        o = e.ticks,
                        s = t,
                        c = i.length;
                    n.each(i, function(i, l) {
                        if (n.isFunction(t)) {
                            var u = o[l] || {},
                                h = t(u.text, l, c);
                            s = h ? n.mix({}, r._defaultAxis.grid, h) : null
                        }
                        if (s) {
                            var f, p = s.type,
                                g = i.points,
                                d = e.getContainer(s.top);
                            if ("arc" === p) {
                                var v = e.center,
                                    y = e.startAngle,
                                    m = e.endAngle,
                                    x = a.length([g[0].x - v.x, g[0].y - v.y]);
                                f = d.addShape("Arc", { className: "axis-grid", attrs: n.mix({ x: v.x, y: v.y, startAngle: y, endAngle: m, r: x }, s) })
                            } else f = d.addShape("Polyline", { className: "axis-grid", attrs: n.mix({ points: g }, s) });
                            f._id = i._id
                        }
                    })
                }, e.getOffsetPoint = function() {}, e.getAxisVector = function() {}, e.getOffsetVector = function(t, e) {
                    var i = this,
                        n = i.getAxisVector(t),
                        r = a.normalize([], n),
                        o = i.offsetFactor,
                        s = [-1 * r[1] * o, r[0] * o];
                    return a.scale([], s, e)
                }, e.getSidePoint = function(t, e) { var i = this.getOffsetVector(t, e); return { x: t.x + i[0], y: t.y + i[1] } }, e.getTextAlignInfo = function(t, e) { var i, n, r = this.getOffsetVector(t, e); return i = r[0] > 0 ? "left" : r[0] < 0 ? "right" : "center", n = r[1] > 0 ? "top" : r[1] < 0 ? "bottom" : "middle", { textAlign: i, textBaseline: n } }, e.getContainer = function(t) {
                    var e = this.frontContainer,
                        i = this.backContainer;
                    return t ? e : i
                }, t
            }();
        t.exports = o
    }, function(t, e, i) {
        function n(t) { return 1 === t[0] && 0 === t[1] && 0 === t[2] && 1 === t[3] && 0 === t[4] && 0 === t[5] }
        var r = i(0),
            a = i(24),
            o = i(3),
            s = i(77),
            c = { stroke: "strokeStyle", fill: "fillStyle", opacity: "globalAlpha" },
            l = ["fillStyle", "font", "globalAlpha", "lineCap", "lineWidth", "lineJoin", "miterLimit", "shadowBlur", "shadowColor", "shadowOffsetX", "shadowOffsetY", "strokeStyle", "textAlign", "textBaseline", "lineDash", "shadow"],
            u = ["circle", "sector", "polygon", "rect", "polyline"],
            h = function() {
                function t(t) {
                    this._initProperties(), r.mix(this._attrs, t);
                    var e = this._attrs.attrs;
                    e && this.initAttrs(e), this.initTransform()
                }
                var e = t.prototype;
                return e._initProperties = function() { this._attrs = { zIndex: 0, visible: !0, destroyed: !1 } }, e.get = function(t) { return this._attrs[t] }, e.set = function(t, e) { this._attrs[t] = e }, e.isGroup = function() { return this.get("isGroup") }, e.isShape = function() { return this.get("isShape") }, e.initAttrs = function(t) { this.attr(r.mix(this.getDefaultAttrs(), t)) }, e.getDefaultAttrs = function() { return {} }, e._setAttr = function(t, e) {
                    var i = this._attrs.attrs;
                    if ("clip" === t) e = this._setAttrClip(e);
                    else {
                        var n = c[t];
                        n && (i[n] = e)
                    }
                    i[t] = e
                }, e._getAttr = function(t) { return this._attrs.attrs[t] }, e._setAttrClip = function(t) { return t && u.indexOf(t._attrs.type) > -1 ? (null === t.get("canvas") && (t = Object.assign({}, t)), t.set("parent", this.get("parent")), t.set("context", this.get("context")), t) : null }, e.attr = function(t, e) { var i = this; if (i.get("destroyed")) return null; var n = arguments.length; if (0 === n) return i._attrs.attrs; if (r.isObject(t)) { this._attrs.bbox = null; for (var a in t) i._setAttr(a, t[a]); return i._afterAttrsSet && i._afterAttrsSet(), i } return 2 === n ? (this._attrs.bbox = null, i._setAttr(t, e), i._afterAttrsSet && i._afterAttrsSet(), i) : i._getAttr(t) }, e.getParent = function() { return this.get("parent") }, e.draw = function(t) { this.get("destroyed") || this.get("visible") && (this.setContext(t), this.drawInner(t), this.restoreContext(t)) }, e.setContext = function(t) {
                    var e = this._attrs.attrs.clip;
                    t.save(), e && (e.resetTransform(t), e.createPath(t), t.clip()), this.resetContext(t), this.resetTransform(t)
                }, e.restoreContext = function(t) { t.restore() }, e.resetContext = function(t) {
                    var e = this._attrs.attrs;
                    if (!this._attrs.isGroup)
                        for (var i in e)
                            if (l.indexOf(i) > -1) { var n = e[i]; "fillStyle" !== i && "strokeStyle" !== i || (n = s.parseStyle(n, this, t)), "lineDash" === i && t.setLineDash && r.isArray(n) ? t.setLineDash(n) : t[i] = n }
                }, e.hasFill = function() { return this.get("canFill") && this._attrs.attrs.fillStyle }, e.hasStroke = function() { return this.get("canStroke") && this._attrs.attrs.strokeStyle }, e.drawInner = function() {}, e.show = function() { return this.set("visible", !0), this }, e.hide = function() { return this.set("visible", !1), this }, e.isVisible = function() { return this.get("visible") }, e._removeFromParent = function() {
                    var t = this.get("parent");
                    if (t) {
                        var e = t.get("children");
                        r.Array.remove(e, this)
                    }
                    return this
                }, e.remove = function(t) { t ? this.destroy() : this._removeFromParent() }, e.destroy = function() {
                    if (this.get("destroyed")) return null;
                    this._removeFromParent(), this._attrs = {}, this.set("destroyed", !0)
                }, e.getBBox = function() { return { minX: 0, maxX: 0, minY: 0, maxY: 0, width: 0, height: 0 } }, e.initTransform = function() {
                    var t = this._attrs.attrs || {};
                    t.matrix || (t.matrix = [1, 0, 0, 1, 0, 0]), this._attrs.attrs = t
                }, e.getMatrix = function() { return this._attrs.attrs.matrix }, e.setMatrix = function(t) { this._attrs.attrs.matrix = [t[0], t[1], t[2], t[3], t[4], t[5]] }, e.transform = function(t) { var e = this._attrs.attrs.matrix; return this._attrs.attrs.matrix = a.transform(e, t), this }, e.setTransform = function(t) { return this._attrs.attrs.matrix = [1, 0, 0, 1, 0, 0], this.transform(t) }, e.translate = function(t, e) {
                    var i = this._attrs.attrs.matrix;
                    a.translate(i, i, [t, e])
                }, e.rotate = function(t) {
                    var e = this._attrs.attrs.matrix;
                    a.rotate(e, e, t)
                }, e.scale = function(t, e) {
                    var i = this._attrs.attrs.matrix;
                    a.scale(i, i, [t, e])
                }, e.moveTo = function(t, e) {
                    var i = this._attrs.x || 0,
                        n = this._attrs.y || 0;
                    this.translate(t - i, e - n), this.set("x", t), this.set("y", e)
                }, e.apply = function(t) { var e = this._attrs.attrs.matrix; return o.transformMat2d(t, t, e), this }, e.resetTransform = function(t) {
                    var e = this._attrs.attrs.matrix;
                    n(e) || t.transform(e[0], e[1], e[2], e[3], e[4], e[5])
                }, e.isDestroyed = function() { return this.get("destroyed") }, t
            }();
        t.exports = h
    }, function(t, e, i) {
        var n = i(5).Shape;
        t.exports = {
            getClip: function(t) {
                var e, i = t.start,
                    r = t.end,
                    a = r.x - i.x,
                    o = Math.abs(r.y - i.y);
                if (t.isPolar) {
                    var s = t.circleRadius,
                        c = t.center,
                        l = t.startAngle,
                        u = t.endAngle;
                    e = new n.Sector({ attrs: { x: c.x, y: c.y, r: s, r0: 0, startAngle: l, endAngle: u } })
                } else e = new n.Rect({ attrs: { x: i.x, y: r.y - 10, width: a, height: o + 20 } });
                return e.isClip = !0, e
            },
            isPointInPlot: function(t, e) {
                var i = t.x,
                    n = t.y,
                    r = e.tl,
                    a = e.tr,
                    o = e.br;
                return i >= r.x && i <= a.x && n >= r.y && n <= o.y
            }
        }
    }, function(t, e, i) {
        var n = i(30);
        t.exports = function(t) { return n(t) ? "" : t.toString() }
    }, function(t, e) { t.exports = function(t) { return null === t || void 0 === t } }, function(t, e) {
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t };
        t.exports = function(t) { var e = void 0 === t ? "undefined" : i(t); return null !== t && "object" === e || "function" === e }
    }, function(t, e, i) {
        var n = i(54),
            r = i(7);
        t.exports = function(t) { if (!n(t) || !r(t, "Object")) return !1; if (null === Object.getPrototypeOf(t)) return !0; for (var e = t; null !== Object.getPrototypeOf(e);) e = Object.getPrototypeOf(e); return Object.getPrototypeOf(t) === e }
    }, function(t, e, i) {
        var n = i(0),
            r = function() {
                function t(t) {
                    var e = {},
                        i = this.getDefaultCfg();
                    this._attrs = e, n.mix(e, i, t)
                }
                var e = t.prototype;
                return e.getDefaultCfg = function() { return {} }, e.get = function(t) { return this._attrs[t] }, e.set = function(t, e) { this._attrs[t] = e }, e.destroy = function() { this._attrs = {}, this.destroyed = !0 }, t
            }();
        t.exports = r
    }, function(t, e, i) {
        function n(t) { return function(e, i) { var n = t(e, i); return 0 === n ? e[s] - i[s] : n } }
        var r = i(0),
            a = i(2),
            o = {},
            s = "_INDEX";
        t.exports = {
            getGroupClass: function() {},
            getChildren: function() { return this.get("children") },
            addShape: function(t, e) {
                void 0 === e && (e = {});
                var i = this.get("canvas"),
                    n = o[t];
                n || (n = r.upperFirst(t), o[t] = n), e.canvas = i, "Text" === n && i && i.get("fontFamily") && (e.attrs.fontFamily = e.attrs.fontFamily || i.get("fontFamily"));
                var s = new a[n](e);
                return this.add(s), s
            },
            addGroup: function(t) {
                var e = this.get("canvas"),
                    i = this.getGroupClass();
                (t = r.mix({}, t)).canvas = e, t.parent = this;
                var n = new i(t);
                return this.add(n), n
            },
            contain: function(t) { return this.get("children").indexOf(t) > -1 },
            sort: function() { for (var t = this.get("children"), e = 0, i = t.length; e < i; e++) t[e][s] = e; return t.sort(n(function(t, e) { return t.get("zIndex") - e.get("zIndex") })), this },
            clear: function() { for (var t = this.get("children"); 0 !== t.length;) t[t.length - 1].remove(!0); return this },
            add: function(t) {
                var e = this,
                    i = e.get("children");
                r.isArray(t) || (t = [t]);
                for (var n = 0, a = t.length; n < a; n++) {
                    var o = t[n],
                        s = o.get("parent");
                    if (s) {
                        var c = s.get("children");
                        r.Array.remove(c, o)
                    }
                    e._setEvn(o), i.push(o)
                }
                return e
            },
            _setEvn: function(t) {
                var e = this;
                t._attrs.parent = e, t._attrs.context = e._attrs.context, t._attrs.canvas = e._attrs.canvas;
                var i = t._attrs.attrs.clip;
                if (i && (i.set("parent", e), i.set("context", e.get("context"))), t._attrs.isGroup)
                    for (var n = t._attrs.children, r = 0, a = n.length; r < a; r++) t._setEvn(n[r])
            }
        }
    }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var r = i(0),
            a = i(27),
            o = i(34),
            s = i(3),
            c = function(t) {
                function e() { return t.apply(this, arguments) || this }
                n(e, t);
                var i = e.prototype;
                return i._initProperties = function() { this._attrs = { zIndex: 0, visible: !0, destroyed: !1, isGroup: !0, children: [] } }, i.drawInner = function(t) { for (var e = this.get("children"), i = 0, n = e.length; i < n; i++) e[i].draw(t); return this }, i.getBBox = function() {
                    for (var t = 1 / 0, e = -1 / 0, i = 1 / 0, n = -1 / 0, r = this.get("children"), a = 0, o = r.length; a < o; a++) {
                        var c = r[a];
                        if (c.get("visible")) {
                            var l = c.getBBox();
                            if (!l) continue;
                            var u = [l.minX, l.minY],
                                h = [l.minX, l.maxY],
                                f = [l.maxX, l.minY],
                                p = [l.maxX, l.maxY],
                                g = c.attr("matrix");
                            s.transformMat2d(u, u, g), s.transformMat2d(h, h, g), s.transformMat2d(f, f, g), s.transformMat2d(p, p, g), t = Math.min(u[0], h[0], f[0], p[0], t), e = Math.max(u[0], h[0], f[0], p[0], e), i = Math.min(u[1], h[1], f[1], p[1], i), n = Math.max(u[1], h[1], f[1], p[1], n)
                        }
                    }
                    return { minX: t, minY: i, maxX: e, maxY: n, x: t, y: i, width: e - t, height: n - i }
                }, i.destroy = function() { this.get("destroyed") || (this.clear(), t.prototype.destroy.call(this)) }, e
            }(a);
        r.mix(c.prototype, o, { getGroupClass: function() { return c } }), t.exports = c
    }, function(t, e, i) {
        function n(t) { var e = { strokeStyle: t.color }; return t.size >= 0 && (e.lineWidth = t.size), a.mix(e, t.style), a.mix({}, c.shape.line, e) }

        function r(t, e, i, n) {
            var r = t.points;
            if (r.length && a.isArray(r[0].y)) {
                for (var o = [], c = [], l = 0, u = r.length; l < u; l++) {
                    var h = r[l],
                        f = s.splitPoints(h);
                    c.push(f[0]), o.push(f[1])
                }
                return t.isInCircle && (o.push(o[0]), c.push(c[0])), t.isStack ? e.addShape("Polyline", { className: "line", attrs: a.mix({ points: o, smooth: n }, i) }) : [e.addShape("Polyline", { className: "line", attrs: a.mix({ points: o, smooth: n }, i) }), e.addShape("Polyline", { className: "line", attrs: a.mix({ points: c, smooth: n }, i) })]
            }
            return t.isInCircle && r.push(r[0]), e.addShape("Polyline", { className: "line", attrs: a.mix({ points: r, smooth: n }, i) })
        }
        var a = i(0),
            o = i(8),
            s = i(19),
            c = i(1),
            l = o.registerFactory("line", { defaultShapeType: "line" }),
            u = ["line", "smooth", "dash"];
        a.each(u, function(t) {
            o.registerShape("line", t, {
                draw: function(e, i) {
                    var a = "smooth" === t,
                        o = n(e);
                    return "dash" === t && (o.lineDash = c.lineDash), r(e, i, o, a)
                }
            })
        }), t.exports = l
    }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var r = i(12),
            a = i(38),
            o = i(4),
            s = i(17),
            c = i(18),
            l = function(t) {
                function e() { return t.apply(this, arguments) || this }
                n(e, t);
                var i = e.prototype;
                return i._initDefaultCfg = function() { t.prototype._initDefaultCfg.call(this), this.type = "cat", this.isCategory = !0, this.isRounding = !0 }, i.init = function() {
                    var t = this,
                        e = t.values,
                        i = t.tickCount;
                    if (o(e, function(t, i) { e[i] = t.toString() }), !t.ticks) {
                        var n = e;
                        i && (n = a({ maxCount: i, data: e, isRounding: t.isRounding }).ticks), this.ticks = n
                    }
                }, i.getText = function(e) { return -1 === this.values.indexOf(e) && s(e) && (e = this.values[Math.round(e)]), t.prototype.getText.call(this, e) }, i.translate = function(t) { var e = this.values.indexOf(t); return -1 === e && s(t) ? e = t : -1 === e && (e = NaN), e }, i.scale = function(t) {
                    var e, i = this.rangeMin(),
                        n = this.rangeMax();
                    return (c(t) || -1 !== this.values.indexOf(t)) && (t = this.translate(t)), e = this.values.length > 1 ? t / (this.values.length - 1) : t, i + e * (n - i)
                }, i.invert = function(t) {
                    if (c(t)) return t;
                    var e = this.rangeMin(),
                        i = this.rangeMax();
                    t < e && (t = e), t > i && (t = i);
                    var n = (t - e) / (i - e),
                        r = Math.round(n * (this.values.length - 1)) % this.values.length;
                    return r = r || 0, this.values[r]
                }, e
            }(r);
        r.Cat = l, t.exports = l
    }, function(t, e, i) {
        function n(t) { var e = []; return a(t, function(t) { e = e.concat(t) }), e }

        function r(t, e) {
            var i;
            for (i = e; i > 0 && t % i != 0; i--);
            if (1 === i)
                for (i = e; i > 0 && (t - 1) % i != 0; i--);
            return i
        }
        var a = i(4);
        t.exports = function(t) {
            var e, i = {},
                a = [],
                o = t.isRounding,
                s = n(t.data),
                c = s.length,
                l = t.maxCount || 8;
            if (o ? 2 === (e = r(c - 1, l - 1) + 1) ? e = l : e < l - 4 && (e = l - 4) : e = l, !o && c <= e + e / 2) a = [].concat(s);
            else { for (var u = parseInt(c / (e - 1), 10), h = s.map(function(t, e) { return e % u == 0 ? s.slice(e, e + u) : null }).filter(function(t) { return t }), f = 1, p = h.length; f < p && (o ? f * u < c - u : f < e - 1); f++) a.push(h[f][0]); if (s.length) { a.unshift(s[0]); var g = s[c - 1]; - 1 === a.indexOf(g) && a.push(g) } }
            return i.categories = s, i.ticks = a, i
        }
    }, function(t, e) { t.exports = { requestAnimationFrame: "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame : function(t) { return setTimeout(t, 16) } } }, function(t, e, i) {
        function n(t) { return [t.x, t.y] }

        function r(t, e, i, r) {
            var o, s, c, l, u, h, f, p, g = [],
                d = !!r;
            if (d) {
                for (c = [1 / 0, 1 / 0], l = [-1 / 0, -1 / 0], p = 0, f = t.length; p < f; p++) u = n(t[p]), a.min(c, c, u), a.max(l, l, u);
                a.min(c, c, r[0]), a.max(l, l, r[1])
            }
            for (p = 0, h = t.length; p < h; p++) {
                if (u = n(t[p]), i) o = n(t[p ? p - 1 : h - 1]), s = n(t[(p + 1) % h]);
                else {
                    if (0 === p || p === h - 1) { g.push([u[0], u[1]]); continue }
                    o = n(t[p - 1]), s = n(t[p + 1])
                }
                var v = a.sub([], s, o);
                a.scale(v, v, e);
                var y = a.distance(u, o),
                    m = a.distance(u, s),
                    x = y + m;
                0 !== x && (y /= x, m /= x);
                var _ = a.scale([], v, -y),
                    S = a.scale([], v, m),
                    b = a.add([], u, _),
                    C = a.add([], u, S);
                d && (a.max(b, b, c), a.min(b, b, l), a.max(C, C, c), a.min(C, C, l)), g.push([b[0], b[1]]), g.push([C[0], C[1]])
            }
            return i && g.push(g.shift()), g
        }
        var a = i(3);
        t.exports = { smooth: function(t, e, i) { for (var n, a, o, s = !!e, c = r(t, .4, s, i), l = t.length, u = [], h = 0; h < l - 1; h++) n = c[2 * h], a = c[2 * h + 1], o = t[h + 1], u.push(["C", n[0], n[1], a[0], a[1], o.x, o.y]); return s && (n = c[l], a = c[l + 1], o = t[0], u.push(["C", n[0], n[1], a[0], a[1], o.x, o.y])), u } }
    }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var r = i(6),
            a = i(19),
            o = i(0);
        i(36);
        var s = function(t) {
            function e() { return t.apply(this, arguments) || this }
            n(e, t);
            var i = e.prototype;
            return i.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return e.type = "path", e.shapeType = "line", e }, i.getDrawCfg = function(e) { var i = t.prototype.getDrawCfg.call(this, e); return i.isStack = this.hasAdjust("stack"), i }, i.draw = function(t, e) {
                var i = this,
                    n = i.get("container"),
                    r = i.getYScale(),
                    s = i.get("connectNulls"),
                    c = a.splitArray(t, r.field, s),
                    l = this.getDrawCfg(t[0]);
                l.origin = t, o.each(c, function(r, a) { l.splitedIndex = a, l.points = r, i.drawShape(l.shape, t[0], l, n, e) })
            }, e
        }(r);
        r.Path = s, t.exports = s
    }, function(t, e, i) {
        var n = i(1),
            r = i(0),
            a = {
                getDefalutSize: function() {
                    var t = this.get("defaultSize");
                    if (!t) {
                        var e = this.get("coord"),
                            i = this.getXScale(),
                            r = this.get("dataArray"),
                            a = i.values.length,
                            o = i.range,
                            s = 1 / a,
                            c = 1;
                        e && e.isPolar ? c = e.transposed && a > 1 ? n.widthRatio.multiplePie : n.widthRatio.rose : (i.isLinear && (s *= o[1] - o[0]), c = n.widthRatio.column), s *= c, this.hasAdjust("dodge") && (s /= r.length), t = s, this.set("defaultSize", t)
                    }
                    return t
                },
                getDimWidth: function(t) {
                    var e = this.get("coord"),
                        i = e.convertPoint({ x: 0, y: 0 }),
                        n = e.convertPoint({ x: "x" === t ? 1 : 0, y: "x" === t ? 0 : 1 }),
                        r = 0;
                    return i && n && (r = Math.sqrt(Math.pow(n.x - i.x, 2) + Math.pow(n.y - i.y, 2))), r
                },
                _getWidth: function() {
                    var t = this.get("_width");
                    if (!t) {
                        var e = this.get("coord");
                        t = e && e.isPolar && !e.transposed ? (e.endAngle - e.startAngle) * e.circleRadius : this.getDimWidth("x"), this.set("_width", t)
                    }
                    return t
                },
                _toNormalizedSize: function(t) { return t / this._getWidth() },
                _toCoordSize: function(t) { return this._getWidth() * t },
                getNormalizedSize: function(t) { var e = this.getAttrValue("size", t); return e = r.isNil(e) ? this.getDefalutSize() : this._toNormalizedSize(e) },
                getSize: function(t) {
                    var e = this.getAttrValue("size", t);
                    if (r.isNil(e)) {
                        var i = this.getDefalutSize();
                        e = this._toCoordSize(i)
                    }
                    return e
                }
            };
        t.exports = a
    }, function(t, e, i) {
        var n, r = i(0),
            a = i(15);
        r.isWx || r.isMy || (n = i(146));
        var o = ["touchstart", "touchmove", "touchend"],
            s = function() {
                function t(t, e) {
                    var i = this.getDefaultCfg();
                    r.deepMix(this, i, t), this.chart = e, this.canvas = e.get("canvas"), this.el = e.get("canvas").get("el"), this._bindEvents()
                }
                var e = t.prototype;
                return e.getDefaultCfg = function() { return { startEvent: o[0], processEvent: o[1], endEvent: o[2], resetEvent: null } }, e._start = function(t) { this.preStart && this.preStart(t), this.start(t), this.onStart && this.onStart(t) }, e._process = function(t) { this.preProcess && this.preProcess(t), this.process(t), this.onProcess && this.onProcess(t) }, e._end = function(t) { this.preEnd && this.preEnd(t), this.end(t), this.onEnd && this.onEnd(t) }, e._reset = function(t) { this.preReset && this.preReset(t), this.reset(t), this.onReset && this.onReset(t) }, e.start = function() {}, e.process = function() {}, e.end = function() {}, e.reset = function() {}, e._bindEvents = function() {
                    this._clearEvents();
                    var t = this.startEvent,
                        e = this.processEvent,
                        i = this.endEvent,
                        r = this.resetEvent,
                        a = this.el;
                    n && (this.hammer = new n(a)), this._bindEvent(t, "_start"), this._bindEvent(e, "_process"), this._bindEvent(i, "_end"), this._bindEvent(r, "_reset")
                }, e._clearEvents = function() {
                    var t = this.startEvent,
                        e = this.processEvent,
                        i = this.endEvent,
                        n = this.resetEvent;
                    this.hammer && (this.hammer.destroy(), this.hammer = null), this._clearTouchEvent(t, "_start"), this._clearTouchEvent(e, "_process"), this._clearTouchEvent(i, "_end"), this._clearTouchEvent(n, "_reset")
                }, e._bindEvent = function(t, e) {
                    var i = this.el;
                    t && (-1 !== o.indexOf(t) ? r.addEventListener(i, t, r.wrapBehavior(this, e)) : this.hammer && this.hammer.on(t, r.wrapBehavior(this, e)))
                }, e._clearTouchEvent = function(t, e) {
                    var i = this.el;
                    t && -1 !== o.indexOf(t) && r.removeEventListener(i, t, r.getWrapBehavior(this, e))
                }, e.destroy = function() { this._clearEvents() }, t
            }();
        a._Interactions = {}, a.registerInteraction = function(t, e) { a._Interactions[t] = e }, a.getInteraction = function(t) { return a._Interactions[t] }, a.prototype.interaction = function(t, e) {
            var i = this._interactions || {};
            i[t] && i[t].destroy();
            var n = new(a.getInteraction(t))(e, this);
            return i[t] = n, this._interactions = i, this
        }, a.prototype.clearInteraction = function(t) { var e = this._interactions; if (e) return t ? (e[t] && e[t].destroy(), delete e[t]) : r.each(e, function(t, i) { t.destroy(), delete e[i] }), this }, t.exports = s
    }, function(t, e, i) {
        var n = {},
            r = i(1);
        n.Global = r, n.version = r.version, n.Chart = i(15), n.Shape = i(8), n.G = i(5), n.Util = i(0), n.track = function() { return null }, t.exports = n
    }, function(t, e, i) {
        var n = i(0),
            r = { label: { fill: "#808080", fontSize: 10 }, line: { stroke: "#E8E8E8", lineWidth: 1 }, grid: { type: "line", stroke: "#E8E8E8", lineWidth: 1, lineDash: [2] }, tickLine: null, labelOffset: 7.5 },
            a = { fontFamily: '"Helvetica Neue", "San Francisco", Helvetica, Tahoma, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", sans-serif', defaultColor: "#1890FF", pixelRatio: 1, padding: "auto", appendPadding: 15, colors: ["#1890FF", "#2FC25B", "#FACC14", "#223273", "#8543E0", "#13C2C2", "#3436C7", "#F04864"], shapes: { line: ["line", "dash"], point: ["circle", "hollowCircle"] }, sizes: [4, 10], axis: { common: r, bottom: n.mix({}, r, { grid: null }), left: n.mix({}, r, { line: null }), right: n.mix({}, r, { line: null }), circle: n.mix({}, r, { line: null }), radius: n.mix({}, r, { labelOffset: 4 }) }, shape: { line: { lineWidth: 2, lineJoin: "round", lineCap: "round" }, point: { lineWidth: 0, size: 3 }, area: { fillOpacity: .1 } }, _defaultAxis: r };
        t.exports = a
    }, function(t, e) {
        function i(t, e, i, n, r) { return { type: t, chart: e, native: r || null, x: void 0 !== i ? i : null, y: void 0 !== n ? n : null } }

        function n(t, e) {
            var n = t.type,
                a = {},
                o = t.targetTouches;
            o && o.length > 0 ? (a.x = o[0].clientX, a.y = o[0].clientY) : (a.x = t.clientX, a.y = t.clientY);
            var s = e.get("canvas"),
                c = r.getRelativePosition(a, s);
            return i(n, e, c.x, c.y, t)
        }
        var r, a = !! function() {
            var t = !1;
            try {
                var e = Object.defineProperty({}, "passive", { get: function() { t = !0 } });
                window.addEventListener("e", null, e)
            } catch (t) {}
            return t
        }() && { passive: !0 };
        r = {
            isWx: "object" == typeof wx && "function" == typeof wx.getSystemInfoSync,
            isMy: "object" == typeof my && "function" == typeof my.getSystemInfoSync,
            isNode: void 0 !== t && void 0 !== t.exports,
            isBrowser: "undefined" != typeof window && void 0 !== window.document && void 0 !== window.sessionStorage,
            getPixelRatio: function() { return window && window.devicePixelRatio || 1 },
            getStyle: function(t, e) { return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e) },
            getWidth: function(t) { var e = this.getStyle(t, "width"); return "auto" === e && (e = t.offsetWidth), parseFloat(e) },
            getHeight: function(t) { var e = this.getStyle(t, "height"); return "auto" === e && (e = t.offsetHeight), parseFloat(e) },
            getDomById: function(t) { return t ? document.getElementById(t) : null },
            getRelativePosition: function(t, e) {
                var i = e.get("el"),
                    n = i.getBoundingClientRect(),
                    r = n.top,
                    a = n.right,
                    o = n.bottom,
                    s = n.left,
                    c = parseFloat(this.getStyle(i, "padding-left")),
                    l = parseFloat(this.getStyle(i, "padding-top")),
                    u = a - s - c - parseFloat(this.getStyle(i, "padding-right")),
                    h = o - r - l - parseFloat(this.getStyle(i, "padding-bottom")),
                    f = e.get("pixelRatio");
                return { x: (t.x - s - c) / u * i.width / f, y: (t.y - r - l) / h * i.height / f }
            },
            addEventListener: function(t, e, i) { r.isBrowser && t.addEventListener(e, i, a) },
            removeEventListener: function(t, e, i) { r.isBrowser && t.removeEventListener(e, i, a) },
            createEvent: function(t, e) { return n(t, e) },
            measureText: function(t, e, i) { return i || (i = document.createElement("canvas").getContext("2d")), i.font = e || "12px sans-serif", i.measureText(t) }
        }, t.exports = r
    }, function(t, e, i) {
        var n = i(29);
        t.exports = function(t) { var e = n(t); return e.charAt(0).toUpperCase() + e.substring(1) }
    }, function(t, e, i) {
        var n = i(29);
        t.exports = function(t) { var e = n(t); return e.charAt(0).toLowerCase() + e.substring(1) }
    }, function(t, e, i) {
        var n = i(7);
        t.exports = function(t) { return n(t, "String") }
    }, function(t, e, i) {
        var n = i(7);
        t.exports = function(t) { return n(t, "Number") }
    }, function(t, e, i) {
        var n = i(7);
        t.exports = function(t) { return n(t, "Boolean") }
    }, function(t, e, i) {
        var n = i(7);
        t.exports = function(t) { return n(t, "Function") }
    }, function(t, e, i) {
        var n = i(7);
        t.exports = function(t) { return n(t, "Date") }
    }, function(t, e) {
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t };
        t.exports = function(t) { return "object" === (void 0 === t ? "undefined" : i(t)) && null !== t }
    }, function(t, e, i) {
        function n(t, e, i, s) {
            i = i || 0, s = s || o;
            for (var c in e)
                if (e.hasOwnProperty(c)) {
                    var l = e[c];
                    null !== l && r(l) ? (r(t[c]) || (t[c] = {}), i < s ? n(t[c], l, i + 1, s) : t[c] = e[c]) : a(l) ? (t[c] = [], t[c] = t[c].concat(l)) : void 0 !== l && (t[c] = l)
                }
        }
        var r = i(32),
            a = i(20),
            o = 5;
        t.exports = function() { for (var t = new Array(arguments.length), e = t.length, i = 0; i < e; i++) t[i] = arguments[i]; for (var r = t[0], a = 1; a < e; a++) n(r, t[a]); return r }
    }, function(t, e) {
        function i(t, e) { for (var i in e) e.hasOwnProperty(i) && "constructor" !== i && void 0 !== e[i] && (t[i] = e[i]) }
        t.exports = function(t, e, n, r) { return e && i(t, e), n && i(t, n), r && i(t, r), t }
    }, function(t, e, i) {
        var n = i(31),
            r = i(20);
        t.exports = function(t, e) {
            if (t)
                if (r(t))
                    for (var i = 0, a = t.length; i < a && !1 !== e(t[i], i); i++);
                else if (n(t))
                for (var o in t)
                    if (t.hasOwnProperty(o) && !1 === e(t[o], o)) break
        }
    }, function(t, e, i) {
        var n = i(0),
            r = function() {
                function t(t) { n.mix(this, t), this._init() }
                var e = t.prototype;
                return e._init = function() {
                    var t = this,
                        e = t.start,
                        i = t.end,
                        n = Math.min(e.x, i.x),
                        r = Math.max(e.x, i.x),
                        a = Math.min(e.y, i.y),
                        o = Math.max(e.y, i.y);
                    this.tl = { x: n, y: a }, this.tr = { x: r, y: a }, this.bl = { x: n, y: o }, this.br = { x: r, y: o }, this.width = r - n, this.height = o - a
                }, e.reset = function(t, e) { this.start = t, this.end = e, this._init() }, e.isInRange = function(t, e) {
                    n.isObject(t) && (e = t.y, t = t.x);
                    var i = this.tl,
                        r = this.br;
                    return i.x <= t && t <= r.x && i.y <= e && e <= r.y
                }, t
            }();
        t.exports = r
    }, function(t, e, i) {
        var n = i(21);
        i(60), t.exports = n
    }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var r = i(21),
            a = function(t) {
                function e() { return t.apply(this, arguments) || this }
                n(e, t);
                var i = e.prototype;
                return i._initDefaultCfg = function() { this.type = "cartesian", this.transposed = !1, this.isRect = !0 }, i.init = function(t, e) { this.x = { start: t.x, end: e.x }, this.y = { start: t.y, end: e.y } }, i.convertPoint = function(t) {
                    var e = this,
                        i = e.transposed,
                        n = i ? "y" : "x",
                        r = i ? "x" : "y",
                        a = e.x,
                        o = e.y;
                    return { x: a.start + (a.end - a.start) * t[n], y: o.start + (o.end - o.start) * t[r] }
                }, i.invertPoint = function(t) {
                    var e = this,
                        i = e.transposed,
                        n = i ? "y" : "x",
                        r = i ? "x" : "y",
                        a = e.x,
                        o = e.y,
                        s = {};
                    return s[n] = (t.x - a.start) / (a.end - a.start), s[r] = (t.y - o.start) / (o.end - o.start), s
                }, e
            }(r);
        r.Cartesian = a, r.Rect = a, t.exports = a
    }, function(t, e, i) { t.exports = { Position: i(62), Shape: i(63), Size: i(64), Color: i(65) } }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var r = i(9),
            a = i(13),
            o = i(4),
            s = function(t) {
                function e(e) { var i; return i = t.call(this, e) || this, i.names = ["x", "y"], i.type = "position", i }
                return n(e, t), e.prototype.mapping = function(t, e) {
                    var i, n, s, c = this.scales,
                        l = this.coord,
                        u = c[0],
                        h = c[1];
                    if (r(t) || r(e)) return [];
                    if (a(e) && a(t)) { i = [], n = []; for (var f = 0, p = 0, g = t.length, d = e.length; f < g && p < d; f++, p++) s = l.convertPoint({ x: u.scale(t[f]), y: h.scale(e[p]) }), i.push(s.x), n.push(s.y) } else if (a(e)) t = u.scale(t), n = [], o(e, function(e) { e = h.scale(e), s = l.convertPoint({ x: t, y: e }), i && i !== s.x ? (a(i) || (i = [i]), i.push(s.x)) : i = s.x, n.push(s.y) });
                    else if (a(t)) e = h.scale(e), i = [], o(t, function(t) { t = u.scale(t), s = l.convertPoint({ x: t, y: e }), n && n !== s.y ? (a(n) || (n = [n]), n.push(s.y)) : n = s.y, i.push(s.x) });
                    else {
                        t = u.scale(t), e = h.scale(e);
                        var v = l.convertPoint({ x: t, y: e });
                        i = v.x, n = v.y
                    }
                    return [i, n]
                }, e
            }(i(14));
        t.exports = s
    }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var r = function(t) {
            function e(e) { var i; return i = t.call(this, e) || this, i.names = ["shape"], i.type = "shape", i.gradient = null, i }
            return n(e, t), e.prototype.getLinearValue = function(t) { var e = this.values; return e[Math.round((e.length - 1) * t)] }, e
        }(i(14));
        t.exports = r
    }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var r = function(t) {
            function e(e) { var i; return i = t.call(this, e) || this, i.names = ["size"], i.type = "size", i.gradient = null, i }
            return n(e, t), e
        }(i(14));
        t.exports = r
    }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var r = i(0),
            a = i(66),
            o = function(t) {
                function e(e) { var i; return i = t.call(this, e) || this, i.names = ["color"], i.type = "color", i.gradient = null, r.isString(i.values) && (i.linear = !0), i }
                return n(e, t), e.prototype.getLinearValue = function(t) {
                    var e = this.gradient;
                    if (!e) {
                        var i = this.values;
                        e = a.gradient(i), this.gradient = e
                    }
                    return e(t)
                }, e
            }(i(14));
        t.exports = o
    }, function(t, e, i) {
        function n(t, e, i, n) { return t[n] + (e[n] - t[n]) * i }

        function r(t) { return "#" + a(t[0]) + a(t[1]) + a(t[2]) }

        function a(t) { return t = Math.round(t), 1 === (t = t.toString(16)).length && (t = "0" + t), t }

        function o(t, e) {
            var i = t.length - 1,
                a = Math.floor(i * e),
                o = i * e - a,
                s = t[a],
                c = a === i ? s : t[a + 1];
            return r([n(s, c, o, 0), n(s, c, o, 1), n(s, c, o, 2)])
        }

        function s(t) { var e = []; return e.push(parseInt(t.substr(1, 2), 16)), e.push(parseInt(t.substr(3, 2), 16)), e.push(parseInt(t.substr(5, 2), 16)), e }
        var c = i(0),
            l = { black: "#000000", blue: "#0000ff", grey: "#808080", green: "#008000", orange: "#ffa500", pink: "#ffc0cb", purple: "#800080", red: "#ff0000", white: "#ffffff", yellow: "#ffff00" },
            u = {
                toHex: function(t) { if (l[t]) return l[t]; if ("#" === t[0]) { if (7 === t.length) return t; var e = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(t, e, i, n) { return "#" + e + e + i + i + n + n }); return l[t] = e, e } var i = t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i); return i.shift(), i = r(i), l[t] = i, i },
                hex2arr: s,
                gradient: function(t) {
                    var e = [];
                    return c.isString(t) && (t = t.split("-")), c.each(t, function(t) {-1 === t.indexOf("#") && (t = u.toHex(t)), e.push(s(t)) }),
                        function(t) { return o(e, t) }
                }
            };
        t.exports = u
    }, function(t, e, i) {
        var n = i(0),
            r = i(1),
            a = i(68),
            o = { linear: "Linear", cat: "Cat", timeCat: "TimeCat", identity: "Identity" },
            s = function() {
                function t(t) { this.defs = {}, n.mix(this, t) }
                var e = t.prototype;
                return e._getDef = function(t) {
                    var e = this.defs,
                        i = null;
                    return (r.scales[t] || e[t]) && (i = n.mix({}, r.scales[t]), n.each(e[t], function(t, e) { n.isNil(t) ? delete i[e] : i[e] = t })), i
                }, e._getDefaultType = function(t, e, i) {
                    if (i && i.type) return i.type;
                    var r = "linear",
                        a = n.Array.firstValue(e, t);
                    return n.isArray(a) && (a = a[0]), n.isString(a) && (r = "cat"), r
                }, e._getScaleCfg = function(t, e, i, r) {
                    var a, o = { field: e, values: a = r && r.values ? r.values : n.Array.values(i, e) };
                    if ("cat" !== t && "timeCat" !== t) {
                        if (!r || !r.min || !r.max) {
                            var s = n.Array.getRange(a),
                                c = s.min,
                                l = s.max;
                            o.min = c, o.max = l, o.nice = !0
                        }
                    } else o.isRounding = !1;
                    return o
                }, e.createScale = function(t, e) {
                    var i, r = this,
                        s = r._getDef(t);
                    if (!e || !e.length) return s && s.type ? (s.field = t, i = new a[o[s.type]](s)) : i = new a.Identity({ value: t, field: t.toString(), values: [t] }), i;
                    var c = e[0][t];
                    if (null === c && (c = n.Array.firstValue(e, t)), n.isNumber(t) || n.isNil(c) && !s) i = new a.Identity({ value: t, field: t.toString(), values: [t] });
                    else {
                        var l = r._getDefaultType(t, e, s),
                            u = r._getScaleCfg(l, t, e, s);
                        s && n.mix(u, s), i = new a[o[l]](u)
                    }
                    return i
                }, t
            }();
        t.exports = s
    }, function(t, e, i) {
        var n = i(12);
        i(69), i(72), i(37), t.exports = n
    }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var r = i(9),
            a = i(4),
            o = i(12),
            s = i(70),
            c = function(t) {
                function e() { return t.apply(this, arguments) || this }
                n(e, t);
                var i = e.prototype;
                return i._initDefaultCfg = function() {
                    t.prototype._initDefaultCfg.call(this);
                    var e = this;
                    e.type = "linear", e.isLinear = !0, e.nice = !1, e.min = null, e.minLimit = null, e.max = null, e.maxLimit = null, e.tickCount = null, e.tickInterval = null, e.minTickInterval = null, e.snapArray = null
                }, i.init = function() {
                    var t = this;
                    if (t.ticks) {
                        var e = t.ticks,
                            i = t.translate(e[0]),
                            n = t.translate(e[e.length - 1]);
                        (r(t.min) || t.min > i) && (t.min = i), (r(t.max) || t.max < n) && (t.max = n)
                    } else t.min = t.translate(t.min), t.max = t.translate(t.max), t.initTicks()
                }, i.calculateTicks = function() {
                    var t = this.min,
                        e = this.max,
                        i = this.minLimit,
                        n = this.maxLimit,
                        r = this.tickCount,
                        a = this.tickInterval,
                        o = this.minTickInterval,
                        c = this.snapArray;
                    if (1 === r) throw new Error("linear scale'tickCount should not be 1");
                    if (e < t) throw new Error("max: " + e + " should not be less than min: " + t);
                    return s({ min: t, max: e, minLimit: i, maxLimit: n, minCount: r, maxCount: r, interval: a, minTickInterval: o, snapArray: c }).ticks
                }, i.initTicks = function() {
                    var t = this,
                        e = t.calculateTicks();
                    if (t.nice) t.ticks = e, t.min = e[0], t.max = e[e.length - 1];
                    else {
                        var i = [];
                        a(e, function(e) { e >= t.min && e <= t.max && i.push(e) }), i.length || (i.push(t.min), i.push(t.max)), t.ticks = i
                    }
                }, i.scale = function(t) {
                    if (r(t)) return NaN;
                    var e = this.max,
                        i = this.min;
                    if (e === i) return 0;
                    var n = (t - i) / (e - i),
                        a = this.rangeMin();
                    return a + n * (this.rangeMax() - a)
                }, i.invert = function(t) { var e = (t - this.rangeMin()) / (this.rangeMax() - this.rangeMin()); return this.min + e * (this.max - this.min) }, e
            }(o);
        o.Linear = c, t.exports = c
    }, function(t, e, i) {
        var n = i(9),
            r = i(17),
            a = i(71),
            o = [0, 1, 1.2, 1.5, 1.6, 2, 2.2, 2.4, 2.5, 3, 4, 5, 6, 7.5, 8, 10],
            s = [0, 1, 2, 4, 5, 10];
        t.exports = function(t) {
            var e = t.min,
                i = t.max,
                c = t.interval,
                l = t.minTickInterval,
                u = [],
                h = t.minCount || 5,
                f = t.maxCount || 7,
                p = h === f,
                g = n(t.minLimit) ? -1 / 0 : t.minLimit,
                d = n(t.maxLimit) ? 1 / 0 : t.maxLimit,
                v = (h + f) / 2,
                y = v,
                m = t.snapArray ? t.snapArray : p ? o : s;
            if (e === g && i === d && p && (c = (i - e) / (y - 1)), n(e) && (e = 0), n(i) && (i = 0), i === e && (0 === e ? i = 1 : e > 0 ? e = 0 : i = 0, i - e < 5 && !c && i - e >= 1 && (c = 1)), n(c)) {
                var x = (i - e) / (v - 1);
                c = a.snapFactorTo(x, m, "ceil"), f !== h && ((y = parseInt((i - e) / c, 10)) > f && (y = f), y < h && (y = h), c = a.snapFactorTo((i - e) / (y - 1), m, "floor"))
            }
            if (r(l) && c < l && (c = l), t.interval || f !== h) i = Math.min(a.snapMultiple(i, c, "ceil"), d), e = Math.max(a.snapMultiple(e, c, "floor"), g), y = Math.round((i - e) / c), e = a.fixedBase(e, c), i = a.fixedBase(i, c);
            else {
                v = parseInt(v, 10);
                var _, S = (i + e) / 2,
                    b = a.snapMultiple(S, c, "ceil"),
                    C = Math.floor((v - 2) / 2),
                    P = b + C * c;
                for (_ = v % 2 == 0 ? b - C * c : b - (C + 1) * c; P < i;) P = a.fixedBase(P + c, c);
                for (; _ > e;) _ = a.fixedBase(_ - c, c);
                i = P, e = _
            }
            i = Math.min(i, d), e = Math.max(e, g), u.push(e);
            for (var w = 1; w < y; w++) {
                var M = a.fixedBase(c * w + e, c);
                M < i && u.push(M)
            }
            return u[u.length - 1] < i && u.push(i), { min: e, max: i, interval: c, count: y, ticks: u }
        }
    }, function(t, e) {
        function i(t) {
            var e = 1;
            if (t === 1 / 0 || t === -1 / 0) throw new Error("Not support Infinity!");
            if (t < 1) {
                for (var i = 0; t < 1;) e /= 10, t *= 10, i++;
                e.toString().length > a && (e = parseFloat(e.toFixed(i)))
            } else
                for (; t > 10;) e *= 10, t /= 10;
            return e
        }

        function n(t, e) { var i = t.length; if (0 === i) return NaN; var n = t[0]; if (e < t[0]) return NaN; if (e >= t[i - 1]) return t[i - 1]; for (var r = 1; r < t.length && !(e < t[r]); r++) n = t[r]; return n }

        function r(t, e) {
            var i = t.length;
            if (0 === i) return NaN;
            var n;
            if (e > t[i - 1]) return NaN;
            if (e < t[0]) return t[0];
            for (var r = 1; r < t.length; r++)
                if (e <= t[r]) { n = t[r]; break }
            return n
        }
        var a = 12,
            o = {
                snapFactorTo: function(t, e, n) {
                    if (isNaN(t)) return NaN;
                    var r = 1;
                    if (0 !== t) {
                        t < 0 && (r = -1);
                        var s = i(t *= r);
                        r *= s, t /= s
                    }
                    t = "floor" === n ? o.snapFloor(e, t) : "ceil" === n ? o.snapCeiling(e, t) : o.snapTo(e, t);
                    var c = parseFloat((t * r).toPrecision(a));
                    return Math.abs(r) < 1 && c.toString().length > a && (c = t / parseInt(1 / r) * (r > 0 ? 1 : -1)), c
                },
                snapMultiple: function(t, e, i) { return ("ceil" === i ? Math.ceil(t / e) : "floor" === i ? Math.floor(t / e) : Math.round(t / e)) * e },
                snapTo: function(t, e) {
                    var i = n(t, e),
                        a = r(t, e);
                    if (isNaN(i) || isNaN(a)) { if (t[0] >= e) return t[0]; var o = t[t.length - 1]; if (o <= e) return o }
                    return Math.abs(e - i) < Math.abs(a - e) ? i : a
                },
                snapFloor: function(t, e) { return n(t, e) },
                snapCeiling: function(t, e) { return r(t, e) },
                fixedBase: function(t, e) {
                    var i = e.toString(),
                        n = i.indexOf(".");
                    if (-1 === n) return Math.round(t);
                    var r = i.substr(n + 1).length;
                    return r > 20 && (r = 20), parseFloat(t.toFixed(r))
                }
            };
        t.exports = o
    }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var r = i(12),
            a = i(17),
            o = function(t) {
                function e() { return t.apply(this, arguments) || this }
                n(e, t);
                var i = e.prototype;
                return i._initDefaultCfg = function() { t.prototype._initDefaultCfg.call(this), this.isIdentity = !0, this.type = "identity", this.value = null }, i.getText = function() { return this.value.toString() }, i.scale = function(t) { return this.value !== t && a(t) ? t : this.range[0] }, i.invert = function() { return this.value }, e
            }(r);
        r.Identity = o, t.exports = o
    }, function(t, e, i) {
        function n(t) {
            var e = t.slice(0);
            if (e.length > 0) {
                var i = e[0],
                    n = e[e.length - 1];
                0 !== i.value && e.unshift({ value: 0 }), 1 !== n.value && e.push({ value: 1 })
            }
            return e
        }
        var r = i(0),
            a = i(74),
            o = i(1),
            s = i(5).Shape,
            c = function() {
                function t(t) { this.axisCfg = {}, this.frontPlot = null, this.backPlot = null, this.axes = {}, r.mix(this, t) }
                var e = t.prototype;
                return e._isHide = function(t) { var e = this.axisCfg; return !e || !1 === e[t] }, e._getLinePosition = function(t, e, i, n) {
                    var r = "",
                        a = t.field,
                        o = this.axisCfg;
                    return o[a] && o[a].position ? r = o[a].position : "x" === e ? r = n ? "left" : "bottom" : "y" === e && (r = i ? "right" : "left", n && (r = "bottom")), r
                }, e._getLineCfg = function(t, e, i) { var n, r, a = 1; return "x" === e ? (n = { x: 0, y: 0 }, r = { x: 1, y: 0 }) : "right" === i ? (n = { x: 1, y: 0 }, r = { x: 1, y: 1 }) : (n = { x: 0, y: 0 }, r = { x: 0, y: 1 }, a = -1), t.transposed && (a *= -1), { offsetFactor: a, start: t.convertPoint(n), end: t.convertPoint(r) } }, e._getCircleCfg = function(t) { return { startAngle: t.startAngle, endAngle: t.endAngle, center: t.center, radius: t.circleRadius } }, e._getRadiusCfg = function(t) { var e, i; return t.transposed ? (e = { x: 0, y: 0 }, i = { x: 1, y: 0 }) : (e = { x: 0, y: 0 }, i = { x: 0, y: 1 }), { offsetFactor: -1, start: t.convertPoint(e), end: t.convertPoint(i) } }, e._getAxisCfg = function(t, e, i, n, a) {
                    var c = this,
                        l = this.axisCfg,
                        u = e.getTicks(),
                        h = r.deepMix({ ticks: u, frontContainer: this.frontPlot, backContainer: this.backPlot }, a, l[e.field]),
                        f = [],
                        p = h.label,
                        g = u.length,
                        d = 0,
                        v = 0,
                        y = p;
                    return r.each(u, function(t, e) {
                        if (r.isFunction(p)) {
                            var i = p(t.text, e, g);
                            y = i ? r.mix({}, o._defaultAxis.label, i) : null
                        }
                        if (y) {
                            var n = {};
                            y.textAlign && (n.textAlign = y.textAlign), y.textBaseline && (n.textBaseline = y.textBaseline);
                            var a = new s.Text({ className: "axis-label", attrs: r.mix({ x: 0, y: 0, text: t.text, fontFamily: c.chart.get("canvas").get("fontFamily") }, y), value: t.value, textStyle: n, top: y.top, context: c.chart.get("canvas").get("context") });
                            f.push(a);
                            var l = a.getBBox(),
                                u = l.width,
                                h = l.height;
                            d = Math.max(d, u), v = Math.max(v, h)
                        }
                    }), h.labels = f, h.maxWidth = d, h.maxHeight = v, h
                }, e._createAxis = function(t, e, i, n, r) {
                    void 0 === r && (r = "");
                    var a, s, c, l = this,
                        u = t.type,
                        h = t.transposed;
                    if ("cartesian" === u || "rect" === u) {
                        var f = l._getLinePosition(e, n, r, h);
                        (c = o.axis[f]).position = f, a = "Line", s = f
                    } else "x" === n && !h || "y" === n && h ? (c = o.axis.circle, a = "Circle", s = "circle") : (c = o.axis.radius, a = "Line", s = "radius");
                    var p = l._getAxisCfg(t, e, i, n, c);
                    p.type = a, p.dimType = n, p.verticalScale = i, p.index = r, this.axes[s] = p
                }, e.createAxis = function(t, e, i) {
                    var o = this;
                    e && !o._isHide(e.field) && o._createAxis(t, e, i[0], "x"), r.each(i, function(i, n) { o._isHide(i.field) || o._createAxis(t, i, e, "y", n) });
                    var s = this.axes,
                        c = o.chart;
                    if (c._isAutoPadding()) {
                        var l = r.parsePadding(c.get("padding")),
                            u = r.parsePadding(c.get("appendPadding")),
                            h = c.get("legendRange") || { top: 0, right: 0, bottom: 0, left: 0 },
                            f = ["auto" === l[0] ? h.top + 2 * u[0] : l[0], "auto" === l[1] ? h.right + u[1] : l[1], "auto" === l[2] ? h.bottom + u[2] : l[2], "auto" === l[3] ? h.left + u[3] : l[3]];
                        if (t.isPolar) {
                            var p = s.circle;
                            if (p) {
                                var g = p.maxHeight,
                                    d = p.maxWidth,
                                    v = p.labelOffset;
                                f[0] += g + v, f[1] += d + v, f[2] += g + v, f[3] += d + v
                            }
                        } else {
                            if (s.right && "auto" === l[1]) {
                                var y = s.right,
                                    m = y.maxWidth,
                                    x = y.labelOffset;
                                f[1] += m + x
                            }
                            if (s.left && "auto" === l[3]) {
                                var _ = s.left,
                                    S = _.maxWidth,
                                    b = _.labelOffset;
                                f[3] += S + b
                            }
                            if (s.bottom && "auto" === l[2]) {
                                var C = s.bottom,
                                    P = C.maxHeight,
                                    w = C.labelOffset;
                                f[2] += P + w
                            }
                        }
                        c.set("_padding", f), c._updateLayout(f)
                    }
                    r.each(s, function(e) {
                        var i, s = e.type,
                            c = e.grid,
                            l = e.verticalScale,
                            u = e.ticks,
                            h = e.dimType,
                            f = e.position,
                            p = e.index;
                        if (t.isPolar ? "Line" === s ? i = o._getRadiusCfg(t) : "Circle" === s && (i = o._getCircleCfg(t)) : i = o._getLineCfg(t, h, f), c && l) {
                            var g = [],
                                d = n(l.getTicks());
                            r.each(u, function(e) {
                                var i = [];
                                r.each(d, function(n) {
                                    var r = "x" === h ? e.value : n.value,
                                        a = "x" === h ? n.value : e.value;
                                    if (r >= 0 && r <= 1 && a >= 0 && a <= 1) {
                                        var o = t.convertPoint({ x: r, y: a });
                                        i.push(o)
                                    }
                                }), g.push({ points: i, _id: "axis-" + h + p + "-grid-" + e.tickValue })
                            }), e.gridPoints = g, t.isPolar && (e.center = t.center, e.startAngle = t.startAngle, e.endAngle = t.endAngle)
                        }
                        i._id = "axis-" + h, r.isNil(p) || (i._id = "axis-" + h + p), new a[s](r.mix(e, i))
                    })
                }, e.clear = function() { this.axes = {}, this.frontPlot.clear(), this.backPlot.clear() }, t
            }();
        t.exports = c
    }, function(t, e, i) {
        var n = i(26);
        i(75), t.exports = n
    }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var r = i(0),
            a = i(26),
            o = function(t) {
                function e() { return t.apply(this, arguments) || this }
                n(e, t);
                var i = e.prototype;
                return i._initDefaultCfg = function() { t.prototype._initDefaultCfg.call(this), this.start = null, this.end = null }, i.getOffsetPoint = function(t) {
                    var e = this.start,
                        i = this.end;
                    return { x: e.x + (i.x - e.x) * t, y: e.y + (i.y - e.y) * t }
                }, i.getAxisVector = function() {
                    var t = this.start,
                        e = this.end;
                    return [e.x - t.x, e.y - t.y]
                }, i.drawLine = function(t) {
                    var e = this.getContainer(t.top),
                        i = this.start,
                        n = this.end;
                    e.addShape("line", { className: "axis-line", attrs: r.mix({ x1: i.x, y1: i.y, x2: n.x, y2: n.y }, t) })
                }, e
            }(a);
        a.Line = o, t.exports = o
    }, function(t, e, i) {
        var n = i(0),
            r = i(34),
            a = i(35),
            o = i(39).requestAnimationFrame,
            s = function() {
                function t(t) { this._attrs = n.mix({ type: "canvas", children: [] }, t), this._initPixelRatio(), this._initCanvas() }
                var e = t.prototype;
                return e.get = function(t) { return this._attrs[t] }, e.set = function(t, e) { this._attrs[t] = e }, e._initPixelRatio = function() { this.get("pixelRatio") || this.set("pixelRatio", n.getPixelRatio()) }, e.beforeDraw = function() {
                    var t = this._attrs.context,
                        e = this._attrs.el;
                    !n.isWx && !n.isMy && t && t.clearRect(0, 0, e.width, e.height)
                }, e._initCanvas = function() {
                    var t, e = this,
                        i = e.get("el"),
                        r = e.get("context");
                    if (!(t = r ? r.canvas : n.isString(i) ? n.getDomById(i) : i)) throw new Error("Please specify the id or el of the chart!");
                    r && t && !t.getContext && (t.getContext = function() { return r });
                    var a = e.get("width");
                    a || (a = n.getWidth(t));
                    var o = e.get("height");
                    o || (o = n.getHeight(t)), e.set("canvas", this), e.set("el", t), e.set("context", r || t.getContext("2d")), e.changeSize(a, o)
                }, e.changeSize = function(t, e) {
                    var i = this.get("pixelRatio"),
                        r = this.get("el");
                    n.isBrowser && (r.style.width = t + "px", r.style.height = e + "px"), n.isWx || n.isMy || (r.width = t * i, r.height = e * i, 1 !== i && this.get("context").scale(i, i)), this.set("width", t), this.set("height", e)
                }, e.getWidth = function() { var t = this.get("pixelRatio"); return this.get("width") * t }, e.getHeight = function() { var t = this.get("pixelRatio"); return this.get("height") * t }, e.getPointByClient = function(t, e) {
                    var i = this.get("el"),
                        n = i.getBoundingClientRect(),
                        r = n.right - n.left,
                        a = n.bottom - n.top;
                    return { x: (t - n.left) * (i.width / r), y: (e - n.top) * (i.height / a) }
                }, e._beginDraw = function() { this._attrs.toDraw = !0 }, e._endDraw = function() { this._attrs.toDraw = !1 }, e.draw = function() {
                    function t() {
                        e.set("animateHandler", o(function() { e.set("animateHandler", void 0), e.get("toDraw") && t() })), e.beforeDraw();
                        try {
                            for (var i = e._attrs.context, r = e._attrs.children, a = 0, s = r.length; a < s; a++) r[a].draw(i);
                            (n.isWx || n.isMy) && i.draw()
                        } catch (t) { console.warn("error in draw canvas, detail as:"), console.warn(t), e._endDraw() }
                        e._endDraw()
                    }
                    var e = this;
                    e.get("destroyed") || (e.get("animateHandler") ? this._beginDraw() : t())
                }, e.destroy = function() { this.get("destroyed") || (this.clear(), this._attrs = {}, this.set("destroyed", !0)) }, e.isDestroyed = function() { return this.get("destroyed") }, t
            }();
        n.mix(s.prototype, r, { getGroupClass: function() { return a } }), t.exports = s
    }, function(t, e, i) {
        function n(t, e) { return (t % e + e) % e }

        function r(t, e) { s.each(t, function(t) { t = t.split(":"), e.addColorStop(Number(t[0]), t[1]) }) }

        function a(t, e, i) {
            var a = t.split(" "),
                o = a[0].slice(2, a[0].length - 1);
            o = n(parseFloat(o) * Math.PI / 180, 2 * Math.PI);
            var s, c, l = a.slice(1),
                u = e.getBBox(),
                h = u.minX,
                f = u.minY,
                p = u.maxX,
                g = u.maxY;
            o >= 0 && o < .5 * Math.PI ? (s = { x: h, y: f }, c = { x: p, y: g }) : .5 * Math.PI <= o && o < Math.PI ? (s = { x: p, y: f }, c = { x: h, y: g }) : Math.PI <= o && o < 1.5 * Math.PI ? (s = { x: p, y: g }, c = { x: h, y: f }) : (s = { x: h, y: g }, c = { x: p, y: f });
            var d = Math.tan(o),
                v = d * d,
                y = (c.x - s.x + d * (c.y - s.y)) / (v + 1) + s.x,
                m = d * (c.x - s.x + d * (c.y - s.y)) / (v + 1) + s.y,
                x = i.createLinearGradient(s.x, s.y, y, m);
            return r(l, x), x
        }

        function o(t, e, i) {
            var n = t.split(" "),
                a = n[0].slice(2, n[0].length - 1);
            a = a.split(",");
            var o = parseFloat(a[0]),
                s = parseFloat(a[1]),
                c = parseFloat(a[2]),
                l = n.slice(1);
            if (0 === c) return l[l.length - 1].split(":")[1];
            var u = e.getBBox(),
                h = u.width,
                f = u.height,
                p = u.minX,
                g = u.minY,
                d = Math.sqrt(h * h + f * f) / 2,
                v = i.createRadialGradient(p + h * o, g + f * s, c * d, p + h / 2, g + f / 2, d);
            return r(l, v), v
        }
        var s = i(0);
        t.exports = {
            parseStyle: function(t, e, i) {
                if ("(" === t[1]) try { var n = t[0]; if ("l" === n) return a(t, e, i); if ("r" === n) return o(t, e, i) } catch (t) { console.error("error in parsing gradient string, please check if there are any extra whitespaces."), console.error(t) }
                return t
            }
        }
    }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var r = i(0),
            a = i(2),
            o = function(t) {
                function e() { return t.apply(this, arguments) || this }
                n(e, t);
                var i = e.prototype;
                return i._initProperties = function() { t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this._attrs.type = "rect" }, i.getDefaultAttrs = function() { return { x: 0, y: 0, width: 0, height: 0, radius: 0, lineWidth: 0 } }, i.createPath = function(t) {
                    var e = this.get("attrs"),
                        i = e.x,
                        n = e.y,
                        a = e.width,
                        o = e.height;
                    t.beginPath();
                    var s = e.radius;
                    s && a * o ? (s = r.parsePadding(s), t.moveTo(i + s[0], n), t.lineTo(i + a - s[1], n), t.arc(i + a - s[1], n + s[1], s[1], -Math.PI / 2, 0, !1), t.lineTo(i + a, n + o - s[2]), t.arc(i + a - s[2], n + o - s[2], s[2], 0, Math.PI / 2, !1), t.lineTo(i + s[3], n + o), t.arc(i + s[3], n + o - s[3], s[3], Math.PI / 2, Math.PI, !1), t.lineTo(i, n + s[0]), t.arc(i + s[0], n + s[0], s[0], Math.PI, 3 * Math.PI / 2, !1), t.closePath()) : t.rect(i, n, a, o)
                }, i.calculateBox = function() {
                    var t = this.get("attrs"),
                        e = t.x,
                        i = t.y;
                    return { minX: e, minY: i, maxX: e + t.width, maxY: i + t.height }
                }, e
            }(a);
        a.Rect = o, t.exports = o
    }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var r = i(2),
            a = function(t) {
                function e() { return t.apply(this, arguments) || this }
                n(e, t);
                var i = e.prototype;
                return i._initProperties = function() { t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this._attrs.type = "circle" }, i.getDefaultAttrs = function() { return { x: 0, y: 0, r: 0, lineWidth: 0 } }, i.createPath = function(t) {
                    var e = this.get("attrs"),
                        i = e.x,
                        n = e.y,
                        r = e.r;
                    t.beginPath(), t.arc(i, n, r, 0, 2 * Math.PI, !1), t.closePath()
                }, i.calculateBox = function() {
                    var t = this.get("attrs"),
                        e = t.x,
                        i = t.y,
                        n = t.r;
                    return { minX: e - n, maxX: e + n, minY: i - n, maxY: i + n }
                }, e
            }(r);
        r.Circle = a, t.exports = a
    }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var r = i(2),
            a = i(10),
            o = function(t) {
                function e() { return t.apply(this, arguments) || this }
                n(e, t);
                var i = e.prototype;
                return i._initProperties = function() { t.prototype._initProperties.call(this), this._attrs.canStroke = !0, this._attrs.type = "line" }, i.getDefaultAttrs = function() { return { x1: 0, y1: 0, x2: 0, y2: 0, lineWidth: 1 } }, i.createPath = function(t) {
                    var e = this.get("attrs"),
                        i = e.x1,
                        n = e.y1,
                        r = e.x2,
                        a = e.y2;
                    t.beginPath(), t.moveTo(i, n), t.lineTo(r, a)
                }, i.calculateBox = function() {
                    var t = this.get("attrs"),
                        e = t.x1,
                        i = t.y1,
                        n = t.x2,
                        r = t.y2,
                        o = t.lineWidth;
                    return a.getBBoxFromLine(e, i, n, r, o)
                }, e
            }(r);
        r.Line = o, t.exports = o
    }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var r = i(2),
            a = i(10),
            o = function(t) {
                function e() { return t.apply(this, arguments) || this }
                n(e, t);
                var i = e.prototype;
                return i._initProperties = function() { t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this._attrs.type = "polygon" }, i.getDefaultAttrs = function() { return { points: null, lineWidth: 0 } }, i.createPath = function(t) {
                    var e = this.get("attrs").points;
                    t.beginPath();
                    for (var i = 0, n = e.length; i < n; i++) {
                        var r = e[i];
                        0 === i ? t.moveTo(r.x, r.y) : t.lineTo(r.x, r.y)
                    }
                    t.closePath()
                }, i.calculateBox = function() { var t = this.get("attrs").points; return a.getBBoxFromPoints(t) }, e
            }(r);
        r.Polygon = o, t.exports = o
    }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }

        function r(t) {
            for (var e = [], i = 0, n = t.length; i < n; i++) {
                var r = t[i];
                isNaN(r.x) || isNaN(r.y) || e.push(r)
            }
            return e
        }
        var a = i(2),
            o = i(40),
            s = i(10),
            c = function(t) {
                function e() { return t.apply(this, arguments) || this }
                n(e, t);
                var i = e.prototype;
                return i._initProperties = function() { t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this._attrs.type = "polyline" }, i.getDefaultAttrs = function() { return { points: null, lineWidth: 1, smooth: !1 } }, i.createPath = function(t) {
                    var e = this.get("attrs"),
                        i = e.points,
                        n = e.smooth,
                        a = r(i);
                    if (t.beginPath(), a.length)
                        if (t.moveTo(a[0].x, a[0].y), n)
                            for (var s = [
                                    [0, 0],
                                    [1, 1]
                                ], c = o.smooth(a, !1, s), l = 0, u = c.length; l < u; l++) {
                                var h = c[l];
                                t.bezierCurveTo(h[1], h[2], h[3], h[4], h[5], h[6])
                            } else {
                                var f, p;
                                for (f = 1, p = a.length - 1; f < p; f++) t.lineTo(a[f].x, a[f].y);
                                t.lineTo(a[p].x, a[p].y)
                            }
                }, i.calculateBox = function() {
                    var t = this.get("attrs"),
                        e = t.points,
                        i = t.smooth,
                        n = t.lineWidth,
                        a = r(e);
                    if (i) {
                        for (var c = [], l = [
                                [0, 0],
                                [1, 1]
                            ], u = o.smooth(a, !1, l), h = 0, f = u.length; h < f; h++) {
                            var p = u[h];
                            if (0 === h) c.push([a[0].x, a[0].y, p[1], p[2], p[3], p[4], p[5], p[6]]);
                            else {
                                var g = u[h - 1];
                                c.push([g[5], g[6], p[1], p[2], p[3], p[4], p[5], p[6]])
                            }
                        }
                        return s.getBBoxFromBezierGroup(c, n)
                    }
                    return s.getBBoxFromPoints(a, n)
                }, e
            }(a);
        a.Polyline = c, t.exports = c
    }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var r = i(2),
            a = i(10),
            o = function(t) {
                function e() { return t.apply(this, arguments) || this }
                n(e, t);
                var i = e.prototype;
                return i._initProperties = function() { t.prototype._initProperties.call(this), this._attrs.canStroke = !0, this._attrs.canFill = !0, this._attrs.type = "arc" }, i.getDefaultAttrs = function() { return { x: 0, y: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !1, lineWidth: 1 } }, i.createPath = function(t) {
                    var e = this.get("attrs"),
                        i = e.x,
                        n = e.y,
                        r = e.r,
                        a = e.startAngle,
                        o = e.endAngle,
                        s = e.clockwise;
                    t.beginPath(), t.arc(i, n, r, a, o, s)
                }, i.calculateBox = function() {
                    var t = this.get("attrs"),
                        e = t.x,
                        i = t.y,
                        n = t.r,
                        r = t.startAngle,
                        o = t.endAngle,
                        s = t.clockwise;
                    return a.getBBoxFromArc(e, i, n, r, o, s)
                }, e
            }(r);
        r.Arc = o, t.exports = o
    }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var r = i(2),
            a = i(10),
            o = function(t) {
                function e() { return t.apply(this, arguments) || this }
                n(e, t);
                var i = e.prototype;
                return i._initProperties = function() { t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this._attrs.type = "sector" }, i.getDefaultAttrs = function() { return { x: 0, y: 0, lineWidth: 0, r: 0, r0: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !1 } }, i.createPath = function(t) {
                    var e = this.get("attrs"),
                        i = e.x,
                        n = e.y,
                        r = e.startAngle,
                        a = e.endAngle,
                        o = e.r,
                        s = e.r0,
                        c = e.clockwise;
                    t.beginPath();
                    var l = Math.cos(r),
                        u = Math.sin(r);
                    t.moveTo(l * s + i, u * s + n), t.lineTo(l * o + i, u * o + n), (Math.abs(a - r) > 1e-4 || 0 === r && a < 0) && (t.arc(i, n, o, r, a, c), t.lineTo(Math.cos(a) * s + i, Math.sin(a) * s + n), 0 !== s && t.arc(i, n, s, a, r, !c)), t.closePath()
                }, i.calculateBox = function() {
                    var t = this.get("attrs"),
                        e = t.x,
                        i = t.y,
                        n = t.r,
                        r = t.r0,
                        o = t.startAngle,
                        s = t.endAngle,
                        c = t.clockwise,
                        l = a.getBBoxFromArc(e, i, n, o, s, c),
                        u = a.getBBoxFromArc(e, i, r, o, s, c);
                    return { minX: Math.min(l.minX, u.minX), minY: Math.min(l.minY, u.minY), maxX: Math.max(l.maxX, u.maxX), maxY: Math.max(l.maxY, u.maxY) }
                }, e
            }(r);
        r.Sector = o, t.exports = o
    }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var r = i(0),
            a = i(2),
            o = 0,
            s = {},
            c = function(t) {
                function e() { return t.apply(this, arguments) || this }
                n(e, t);
                var i = e.prototype;
                return i._initProperties = function() { t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this._attrs.type = "text" }, i.getDefaultAttrs = function() { return { lineWidth: 0, lineCount: 1, fontSize: 12, fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "normal", fontVariant: "normal", textAlign: "start", textBaseline: "bottom", lineHeight: null, textArr: null } }, i._getFontStyle = function() {
                    var t = this._attrs.attrs,
                        e = t.fontSize,
                        i = t.fontFamily,
                        n = t.fontWeight;
                    return t.fontStyle + " " + t.fontVariant + " " + n + " " + e + "px " + i
                }, i._afterAttrsSet = function() {
                    var t = this._attrs.attrs;
                    if (t.font = this._getFontStyle(), t.text) {
                        var e = t.text,
                            i = null,
                            n = 1;
                        r.isString(e) && -1 !== e.indexOf("\n") && (n = (i = e.split("\n")).length), t.lineCount = n, t.textArr = i
                    }
                    this.set("attrs", t)
                }, i._getTextHeight = function() {
                    var t = this._attrs.attrs;
                    if (t.height) return t.height;
                    var e = t.lineCount,
                        i = 1 * t.fontSize;
                    return e > 1 ? i * e + this._getSpaceingY() * (e - 1) : i
                }, i._getSpaceingY = function() {
                    var t = this._attrs.attrs,
                        e = t.lineHeight,
                        i = 1 * t.fontSize;
                    return e ? e - i : .14 * i
                }, i.drawInner = function(t) {
                    var e = this,
                        i = e._attrs.attrs,
                        n = i.text,
                        a = i.x,
                        o = i.y;
                    if (!(r.isNil(n) || isNaN(a) || isNaN(o))) {
                        var s = i.textArr,
                            c = 1 * i.fontSize,
                            l = e._getSpaceingY();
                        i.rotate && (t.translate(a, o), t.rotate(i.rotate), a = 0, o = 0);
                        var u, h = i.textBaseline;
                        s && (u = e._getTextHeight());
                        var f;
                        if (e.hasFill()) {
                            var p = i.fillOpacity;
                            if (r.isNil(p) || 1 === p || (t.globalAlpha = p), s)
                                for (var g = 0, d = s.length; g < d; g++) {
                                    var v = s[g];
                                    f = o + g * (l + c) - u + c, "middle" === h && (f += u - c - (u - c) / 2), "top" === h && (f += u - c), t.fillText(v, a, f)
                                } else t.fillText(n, a, o)
                        }
                        if (e.hasStroke())
                            if (s)
                                for (var y = 0, m = s.length; y < m; y++) {
                                    var x = s[y];
                                    f = o + y * (l + c) - u + c, "middle" === h && (f += u - c - (u - c) / 2), "top" === h && (f += u - c), t.strokeText(x, a, f)
                                } else t.strokeText(n, a, o)
                    }
                }, i.calculateBox = function() {
                    var t = this,
                        e = t._attrs.attrs,
                        i = e.x,
                        n = e.y,
                        r = e.textAlign,
                        a = e.textBaseline,
                        o = t._getTextWidth();
                    if (!o) return { minX: i, minY: n, maxX: i, maxY: n };
                    var s = t._getTextHeight(),
                        c = { x: i, y: n - s };
                    return r && ("end" === r || "right" === r ? c.x -= o : "center" === r && (c.x -= o / 2)), a && ("top" === a ? c.y += s : "middle" === a && (c.y += s / 2)), { minX: c.x, minY: c.y, maxX: c.x + o, maxY: c.y + s }
                }, i._getTextWidth = function() {
                    var t = this._attrs.attrs;
                    if (t.width) return t.width;
                    var e = t.text,
                        i = this.get("context");
                    if (!r.isNil(e)) {
                        var n = t.font,
                            a = t.textArr,
                            c = e + "" + n;
                        if (s[c]) return s[c];
                        var l = 0;
                        if (a)
                            for (var u = 0, h = a.length; u < h; u++) {
                                var f = a[u];
                                l = Math.max(l, r.measureText(f, n, i).width)
                            } else l = r.measureText(e, n, i).width;
                        return o > 5e3 && (o = 0, s = {}), o++, s[c] = l, l
                    }
                }, e
            }(a);
        a.Text = c, t.exports = c
    }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var r = i(2),
            a = function(t) {
                function e() { return t.apply(this, arguments) || this }
                n(e, t);
                var i = e.prototype;
                return i._initProperties = function() { t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this._attrs.createPath = null, this._attrs.type = "custom" }, i.createPath = function(t) {
                    var e = this.get("createPath");
                    e && e.call(this, t)
                }, i.calculateBox = function() { var t = this.get("calculateBox"); return t && t.call(this) }, e
            }(r);
        r.Custom = a, t.exports = a
    }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var r = i(41),
            a = i(6);
        i(36);
        var o = function(t) {
            function e() { return t.apply(this, arguments) || this }
            return n(e, t), e.prototype.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return e.type = "line", e.sortable = !0, e }, e
        }(r);
        a.Line = o, t.exports = o
    }, function(t, e, i) {
        function n(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }

        function r(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var a = i(6),
            o = i(0),
            s = i(42);
        i(89);
        var c = function(t) {
            function e(e) { var i; return i = t.call(this, e) || this, o.mix(n(i), s), i }
            r(e, t);
            var i = e.prototype;
            return i.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return e.type = "interval", e.shapeType = "interval", e.generatePoints = !0, e }, i.createShapePointsCfg = function(e) { var i = t.prototype.createShapePointsCfg.call(this, e); return i.size = this.getNormalizedSize(e), i }, i.clearInner = function() { t.prototype.clearInner.call(this), this.set("defaultSize", null) }, e
        }(a);
        a.Interval = c, t.exports = c
    }, function(t, e, i) {
        function n(t) {
            var e = t.x,
                i = t.y,
                n = t.y0,
                r = t.size,
                o = n,
                s = i;
            a.isArray(i) && (s = i[1], o = i[0]);
            var c, l;
            return a.isArray(e) ? (c = e[0], l = e[1]) : (c = e - r / 2, l = e + r / 2), [{ x: c, y: o }, { x: c, y: s }, { x: l, y: s }, { x: l, y: o }]
        }

        function r(t) {
            for (var e = [], i = [], n = 0, r = t.length; n < r; n++) {
                var a = t[n];
                e.push(a.x), i.push(a.y)
            }
            var o = Math.min.apply(null, e),
                s = Math.min.apply(null, i);
            return { x: o, y: s, width: Math.max.apply(null, e) - o, height: Math.max.apply(null, i) - s }
        }
        var a = i(0),
            o = i(8),
            s = i(3),
            c = i(1),
            l = o.registerFactory("interval", { defaultShapeType: "rect", getDefaultPoints: function(t) { return n(t) } });
        o.registerShape("interval", "rect", {
            draw: function(t, e) {
                var i = this.parsePoints(t.points),
                    n = a.mix({ fill: t.color }, c.shape.interval, t.style);
                if (t.isInCircle) {
                    var o = i.slice(0);
                    this._coord.transposed && (o = [i[0], i[3], i[2], i[1]]);
                    var l = t.center,
                        u = l.x,
                        h = l.y,
                        f = [1, 0],
                        p = [o[0].x - u, o[0].y - h],
                        g = [o[1].x - u, o[1].y - h],
                        d = [o[2].x - u, o[2].y - h],
                        v = s.angleTo(f, g),
                        y = s.angleTo(f, d),
                        m = s.length(p),
                        x = s.length(g);
                    return v >= 1.5 * Math.PI && (v -= 2 * Math.PI), y >= 1.5 * Math.PI && (y -= 2 * Math.PI), e.addShape("Sector", { className: "interval", attrs: a.mix({ x: u, y: h, r: x, r0: m, startAngle: v, endAngle: y }, n) })
                }
                var _ = r(i);
                return e.addShape("rect", { className: "interval", attrs: a.mix(_, n) })
            }
        }), t.exports = l
    }, function(t, e, i) { t.exports = { Stack: i(91), Dodge: i(93) } }, function(t, e, i) {
        var n = i(92);
        t.exports = n
    }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var r = i(13),
            a = i(9),
            o = i(23),
            s = function(t) {
                function e() { return t.apply(this, arguments) || this }
                n(e, t);
                var i = e.prototype;
                return i._initDefaultCfg = function() { this.xField = null, this.yField = null }, i.processAdjust = function(t) { this.processStack(t) }, i.processStack = function(t) {
                    var e = this,
                        i = e.xField,
                        n = e.yField,
                        o = t.length,
                        s = { positive: {}, negative: {} };
                    e.reverseOrder && (t = t.slice(0).reverse());
                    for (var c = 0; c < o; c++)
                        for (var l = t[c], u = 0, h = l.length; u < h; u++) {
                            var f = l[u],
                                p = f[i] || 0,
                                g = f[n],
                                d = p.toString();
                            if (g = r(g) ? g[1] : g, !a(g)) {
                                var v = g >= 0 ? "positive" : "negative";
                                s[v][d] || (s[v][d] = 0), f[n] = [s[v][d], g + s[v][d]], s[v][d] += g
                            }
                        }
                }, e
            }(o);
        o.Stack = s, t.exports = s
    }, function(t, e, i) {
        var n = i(94);
        t.exports = n
    }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var r = i(23),
            a = i(4),
            o = function(t) {
                function e() { return t.apply(this, arguments) || this }
                n(e, t);
                var i = e.prototype;
                return i._initDefaultCfg = function() { this.marginRatio = .5, this.dodgeRatio = .5, this.adjustNames = ["x", "y"] }, i.getDodgeOffset = function(t, e, i) {
                    var n = this,
                        r = t.pre,
                        a = t.next,
                        o = a - r,
                        s = o * n.dodgeRatio / i,
                        c = n.marginRatio * s;
                    return (r + a) / 2 + (.5 * (o - i * s - (i - 1) * c) + ((e + 1) * s + e * c) - .5 * s - .5 * o)
                }, i.processAdjust = function(t) {
                    var e = this,
                        i = t.length,
                        n = e.xField;
                    a(t, function(t, r) {
                        for (var a = 0, o = t.length; a < o; a++) {
                            var s = t[a],
                                c = s[n],
                                l = { pre: 1 === o ? c - 1 : c - .5, next: 1 === o ? c + 1 : c + .5 },
                                u = e.getDodgeOffset(l, r, i);
                            s[n] = u
                        }
                    })
                }, e
            }(r);
        r.Dodge = o, t.exports = o
    }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var r = i(21),
            a = i(3),
            o = i(24),
            s = function(t) {
                function e() { return t.apply(this, arguments) || this }
                n(e, t);
                var i = e.prototype;
                return i._initDefaultCfg = function() { this.type = "polar", this.startAngle = -Math.PI / 2, this.endAngle = 3 * Math.PI / 2, this.inner = 0, this.innerRadius = 0, this.isPolar = !0, this.transposed = !1, this.center = null, this.radius = null }, i.init = function(t, e) {
                    var i, n, r = this,
                        a = r.inner || r.innerRadius,
                        o = Math.abs(e.x - t.x),
                        s = Math.abs(e.y - t.y);
                    r.startAngle === -Math.PI && 0 === r.endAngle ? (i = Math.min(o / 2, s), n = { x: (t.x + e.x) / 2, y: t.y }) : (i = Math.min(o, s) / 2, n = { x: (t.x + e.x) / 2, y: (t.y + e.y) / 2 });
                    var c = r.radius;
                    c > 0 && c <= 1 && (i *= c), this.x = { start: r.startAngle, end: r.endAngle }, this.y = { start: i * a, end: i }, this.center = n, this.circleRadius = i
                }, i.convertPoint = function(t) {
                    var e = this,
                        i = e.center,
                        n = e.transposed,
                        r = n ? "y" : "x",
                        a = n ? "x" : "y",
                        o = e.x,
                        s = e.y,
                        c = o.start + (o.end - o.start) * t[r],
                        l = s.start + (s.end - s.start) * t[a];
                    return { x: i.x + Math.cos(c) * l, y: i.y + Math.sin(c) * l }
                }, i.invertPoint = function(t) {
                    var e = this,
                        i = e.center,
                        n = e.transposed,
                        r = e.x,
                        s = e.y,
                        c = n ? "y" : "x",
                        l = n ? "x" : "y",
                        u = [1, 0, 0, 1, 0, 0];
                    o.rotate(u, u, r.start);
                    var h = [1, 0];
                    a.transformMat2d(h, h, u), h = [h[0], h[1]];
                    var f = [t.x - i.x, t.y - i.y];
                    if (a.zero(f)) return { x: 0, y: 0 };
                    var p = a.angleTo(h, f, r.end < r.start);
                    Math.abs(p - 2 * Math.PI) < .001 && (p = 0);
                    var g = a.length(f),
                        d = p / (r.end - r.start);
                    d = r.end - r.start > 0 ? d : -d;
                    var v = (g - s.start) / (s.end - s.start),
                        y = {};
                    return y[c] = d, y[l] = v, y
                }, e
            }(r);
        r.Polar = s, t.exports = s
    }, function(t, e, i) {
        var n = i(18),
            r = i(115);
        t.exports = { toTimeStamp: function(t) { return n(t) && (t = t.indexOf("T") > 0 ? new Date(t).getTime() : new Date(t.replace(/-/gi, "/")).getTime()), r(t) && (t = t.getTime()), t } }
    }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var r = i(0),
            a = { circle: function(t, e, i, n) { n.arc(t, e, i, 0, 2 * Math.PI, !1) }, square: function(t, e, i, n) { n.moveTo(t - i, e - i), n.lineTo(t + i, e - i), n.lineTo(t + i, e + i), n.lineTo(t - i, e + i), n.closePath() } },
            o = function(t) {
                function e() { return t.apply(this, arguments) || this }
                n(e, t);
                var i = e.prototype;
                return i._initProperties = function() { t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this._attrs.type = "marker" }, i.getDefaultAttrs = function() { return { x: 0, y: 0, lineWidth: 0 } }, i.createPath = function(t) {
                    var e, i = this.get("attrs"),
                        n = i.x,
                        o = i.y,
                        s = i.radius,
                        c = i.symbol || "circle";
                    e = r.isFunction(c) ? c : a[c], t.beginPath(), e(n, o, s, t, this)
                }, i.calculateBox = function() {
                    var t = this.get("attrs"),
                        e = t.x,
                        i = t.y,
                        n = t.radius;
                    return { minX: e - n, minY: i - n, maxX: e + n, maxY: i + n }
                }, e
            }(i(5).Shape);
        t.exports = o
    }, function(t, e, i) {
        var n = i(0),
            r = i(5).Group,
            a = i(97),
            o = function() {
                function t(t) { n.deepMix(this, this.getDefaultCfg(), t), this._init(), this._renderTitle(), this._renderItems() }
                var e = t.prototype;
                return e.getDefaultCfg = function() { return { showTitle: !1, title: null, items: null, titleGap: 12, itemGap: 10, itemMarginBottom: 12, itemFormatter: null, itemWidth: null, wordSpace: 6, x: 0, y: 0, layout: "horizontal", joinString: ": " } }, e._init = function() {
                    var t = new r({ zIndex: this.zIndex || 0 });
                    this.container = t;
                    var e = t.addGroup();
                    this.wrapper = e;
                    var i = e.addGroup({ className: "itemsGroup" });
                    this.itemsGroup = i, this.parent && this.parent.add(t)
                }, e._renderTitle = function(t) {
                    t = t || this.title;
                    var e = this.titleShape,
                        i = 0;
                    if (this.showTitle && t) {
                        if (e && !e.get("destroyed")) e.attr("text", t);
                        else {
                            var r = this.wrapper,
                                a = this.titleStyle;
                            e = r.addShape("text", { className: "title", attrs: n.mix({ x: 0, y: 0, text: t }, a) }), this.titleShape = e
                        }
                        i = e.getBBox().height + this.titleGap
                    }
                    this._titleHeight = i
                }, e._renderItems = function(t) {
                    var e = this;
                    (t = t || e.items) && (e.reversed && t.reverse(), n.each(t, function(t, i) { e._addItem(t, i) }), t.length > 1 && this._adjustItems(), this._renderBackground())
                }, e._renderBackground = function() {
                    var t = this.background;
                    if (t) {
                        var e = this.container,
                            i = this.wrapper.getBBox(),
                            r = i.minX,
                            a = i.minY,
                            o = i.width,
                            s = i.height,
                            c = t.padding || [0, 0, 0, 0];
                        c = n.parsePadding(c);
                        var l = n.mix({ x: r - c[3], y: a - c[0], width: o + c[1] + c[3], height: s + c[0] + c[2] }, t),
                            u = this.backShape;
                        u ? u.attr(l) : u = e.addShape("Rect", { zIndex: -1, attrs: l }), this.backShape = u, e.sort()
                    }
                }, e._addItem = function(t) {
                    var e = this.itemsGroup.addGroup({ name: t.name, value: t.value, dataValue: t.dataValue, checked: t.checked }),
                        i = this.unCheckStyle,
                        r = this.unCheckColor,
                        o = this.nameStyle,
                        s = this.valueStyle,
                        c = this.wordSpace,
                        l = t.marker,
                        u = t.value,
                        h = 0;
                    if (r && (i.fill = r), l) {
                        var f = l.radius || 3,
                            p = n.mix({ x: f, y: this._titleHeight }, l);
                        !1 === t.checked && n.mix(p, i);
                        var g = new a({ className: "item-marker", attrs: p });
                        e.add(g), h += g.getBBox().width + c
                    }
                    var d, v = t.name;
                    if (v) {
                        var y = this.joinString || "";
                        v = u ? v + y : v, d = e.addShape("text", { className: "name", attrs: n.mix({ x: h, y: this._titleHeight, text: this._formatItemValue(v) }, o, !1 === t.checked ? i : null) })
                    }
                    if (u) {
                        var m = h;
                        d && (m += d.getBBox().width), e.addShape("text", { className: "value", attrs: n.mix({ x: m, y: this._titleHeight, text: u }, s, !1 === t.checked ? i : null) })
                    }
                    return e
                }, e._formatItemValue = function(t) { var e = this.itemFormatter; return e && (t = e.call(this, t)), t }, e._getMaxItemWidth = function() {
                    var t = this.itemWidth;
                    if (n.isNumber(t) || n.isNil(t)) return t;
                    if ("auto" === t) {
                        for (var e = this.itemsGroup.get("children"), i = e.length, r = 0, a = 0; a < i; a++) {
                            var o = e[a].getBBox().width;
                            r = Math.max(r, o)
                        }
                        var s = this.maxLength,
                            c = this.itemGap,
                            l = (s - c) / 2,
                            u = (s - 2 * c) / 3;
                        return 2 === i ? Math.max(r, l) : r <= u ? u : r <= l ? l : r
                    }
                }, e._adjustHorizontal = function() {
                    for (var t, e, i = this.maxLength, n = this.itemsGroup.get("children"), r = this.itemGap, a = this.itemMarginBottom, o = this._titleHeight, s = 0, c = 0, l = this._getMaxItemWidth(), u = [], h = 0, f = n.length; h < f; h++) {
                        var p = n[h],
                            g = p.getBBox(),
                            d = g.height,
                            v = g.width;
                        e = d + a, (t = l || v) - (i - c) > 1e-4 && (s++, c = 0), p.moveTo(c, s * e), u.push({ x: c, y: s * e + o - d / 2, width: 1.375 * v, height: 1.375 * d }), c += t + r
                    }
                    this.legendHitBoxes = u
                }, e._adjustVertical = function() {
                    for (var t, e, i = this.maxLength, r = this.itemsGroup, a = this.itemGap, o = this.itemMarginBottom, s = this.itemWidth, c = this._titleHeight, l = r.get("children"), u = 0, h = 0, f = 0, p = [], g = 0, d = l.length; g < d; g++) {
                        var v = l[g],
                            y = v.getBBox();
                        t = y.width, e = y.height, n.isNumber(s) ? h = s + a : t > h && (h = t + a), i - u < e ? (u = 0, f += h, v.moveTo(f, 0), p.push({ x: f, y: c - e / 2, width: 1.375 * t, height: 1.375 * e })) : (v.moveTo(f, u), p.push({ x: f, y: u - e / 2 + c, width: 1.375 * t, height: 1.375 * e })), u += e + o
                    }
                    this.legendHitBoxes = p
                }, e._adjustItems = function() { "horizontal" === this.layout ? this._adjustHorizontal() : this._adjustVertical() }, e.moveTo = function(t, e) { this.x = t, this.y = e; var i = this.container; return i && i.moveTo(t, e), this }, e.setItems = function(t) { this.clearItems(), this._renderItems(t) }, e.setTitle = function(t) { this._renderTitle(t) }, e.clearItems = function() { this.itemsGroup.clear() }, e.getWidth = function() { return this.container.getBBox().width }, e.getHeight = function() { return this.container.getBBox().height }, e.show = function() { this.container.show() }, e.hide = function() { this.container.hide() }, e.clear = function() {
                    var t = this.container;
                    t.clear(), t.remove(!0)
                }, t
            }();
        t.exports = o
    }, function(t, e, i) {
        var n = i(0),
            r = { appear: { duration: 450, easing: "quadraticOut" }, update: { duration: 300, easing: "quadraticOut" }, enter: { duration: 300, easing: "quadraticOut" }, leave: { duration: 350, easing: "quadraticIn" } },
            a = {
                defaultCfg: {},
                Action: {},
                getAnimation: function(t, e, i) { var r = this.defaultCfg[t]; if (r) { var a = r[i]; if (n.isFunction(a)) return a(e) } return !1 },
                getAnimateCfg: function(t, e) {
                    var i = r[e],
                        a = this.defaultCfg[t];
                    return a && a.cfg && a.cfg[e] ? n.deepMix({}, i, a.cfg[e]) : i
                },
                registerAnimation: function(t, e) { this.Action || (this.Action = {}), this.Action[t] = e }
            };
        t.exports = a
    }, function(t, e, i) {
        var n = i(5).Matrix,
            r = i(0),
            a = {
                getCoordInfo: function(t) {
                    var e = t.start,
                        i = t.end;
                    return { start: e, end: i, width: i.x - e.x, height: Math.abs(i.y - e.y) }
                },
                getScaledMatrix: function(t, e, i) {
                    var r;
                    t.apply(e);
                    var a = e[0],
                        o = e[1];
                    if ("x" === i) {
                        t.transform([
                            ["t", a, o],
                            ["s", .01, 1],
                            ["t", -a, -o]
                        ]);
                        var s = t.getMatrix();
                        r = n.transform(s, [
                            ["t", a, o],
                            ["s", 100, 1],
                            ["t", -a, -o]
                        ])
                    } else if ("y" === i) {
                        t.transform([
                            ["t", a, o],
                            ["s", 1, .01],
                            ["t", -a, -o]
                        ]);
                        var c = t.getMatrix();
                        r = n.transform(c, [
                            ["t", a, o],
                            ["s", 1, 100],
                            ["t", -a, -o]
                        ])
                    } else if ("xy" === i) {
                        t.transform([
                            ["t", a, o],
                            ["s", .01, .01],
                            ["t", -a, -o]
                        ]);
                        var l = t.getMatrix();
                        r = n.transform(l, [
                            ["t", a, o],
                            ["s", 100, 100],
                            ["t", -a, -o]
                        ])
                    }
                    return r
                },
                getAnimateParam: function(t, e, i) { var n = {}; return t.delay && (n.delay = r.isFunction(t.delay) ? t.delay(e, i) : t.delay), n.easing = t.easing, n.duration = t.duration, n.delay = t.delay, n },
                doAnimation: function(t, e, i, n) {
                    var r = t._id,
                        o = t.get("index"),
                        s = a.getAnimateParam(i, o, r),
                        c = s.easing,
                        l = s.delay,
                        u = s.duration,
                        h = t.animate().to({ attrs: e, duration: u, delay: l, easing: c });
                    n && h.onEnd(function() { n() })
                }
            };
        t.exports = a
    }, function(t, e, i) {
        var n = i(96),
            r = i(0);
        t.exports = {
            getColDef: function(t, e) { var i; return t.get("colDefs") && t.get("colDefs")[e] && (i = t.get("colDefs")[e]), i },
            getFieldRange: function(t, e, i) {
                if (!t) return [0, 1];
                var n = 0,
                    r = 0;
                if ("linear" === i) {
                    var a = e.min,
                        o = e.max;
                    n = (t.min - a) / (o - a), r = (t.max - a) / (o - a)
                } else {
                    var s = e,
                        c = t.values || [],
                        l = s.indexOf(c[0]),
                        u = s.indexOf(c[c.length - 1]);
                    n = l / (s.length - 1), r = u / (s.length - 1)
                }
                return [n, r]
            },
            getLimitRange: function(t, e) {
                var i, a = e.field,
                    o = e.type,
                    s = r.Array.values(t, a);
                return "linear" === o ? (i = r.Array.getRange(s), e.min < i.min && (i.min = e.min), e.max > i.max && (i.max = e.max)) : "timeCat" === o ? (r.each(s, function(t, e) { s[e] = n.toTimeStamp(t) }), s.sort(function(t, e) { return t - e }), i = s) : i = s, i
            }
        }
    }, function(t, e, i) {
        var n = i(6);
        i(103), i(41), i(87), i(105), i(88), i(107), i(109), t.exports = n
    }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var r = i(0),
            a = i(6);
        i(104);
        var o = function(t) {
            function e() { return t.apply(this, arguments) || this }
            n(e, t);
            var i = e.prototype;
            return i.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return e.type = "point", e.shapeType = "point", e.generatePoints = !0, e }, i.draw = function(t, e) {
                var i = this,
                    n = i.get("container");
                r.each(t, function(t) {
                    var a = t.shape,
                        o = i.getDrawCfg(t);
                    if (r.isArray(t.y)) {
                        var s = i.hasAdjust("stack");
                        r.each(t.y, function(r, c) { o.y = r, s && 0 === c || i.drawShape(a, t, o, n, e) })
                    } else r.isNil(t.y) || i.drawShape(a, t, o, n, e)
                })
            }, e
        }(a);
        a.Point = o, t.exports = o
    }, function(t, e, i) {
        function n(t) { var e = { lineWidth: 0, stroke: t.color, fill: t.color }; return t.size && (e.size = t.size), a.mix(e, t.style), a.mix({}, o.shape.point, e) }

        function r(t, e, i) {
            if (0 !== t.size) {
                var r = n(t),
                    o = r.r || r.size,
                    s = t.x,
                    c = a.isArray(t.y) ? t.y : [t.y];
                "hollowCircle" === i && (r.lineWidth = 1, r.fill = null);
                for (var l = 0, u = c.length; l < u; l++) return "rect" === i ? e.addShape("Rect", { className: "point", attrs: a.mix({ x: s - o, y: c[l] - o, width: 2 * o, height: 2 * o }, r) }) : e.addShape("Circle", { className: "point", attrs: a.mix({ x: s, y: c[l], r: o }, r) })
            }
        }
        var a = i(0),
            o = i(1),
            s = i(19),
            c = i(8),
            l = ["circle", "hollowCircle", "rect"],
            u = c.registerFactory("point", { defaultShapeType: "circle", getDefaultPoints: function(t) { return s.splitPoints(t) } });
        a.each(l, function(t) { c.registerShape("point", t, { draw: function(e, i) { return r(e, i, t) } }) }), t.exports = u
    }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var r = i(6),
            a = i(19),
            o = i(0);
        i(106);
        var s = function(t) {
            function e() { return t.apply(this, arguments) || this }
            n(e, t);
            var i = e.prototype;
            return i.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return e.type = "area", e.shapeType = "area", e.generatePoints = !0, e.sortable = !0, e }, i.draw = function(t, e) {
                var i = this,
                    n = i.get("container"),
                    r = this.getDrawCfg(t[0]),
                    s = i.getYScale(),
                    c = i.get("connectNulls"),
                    l = a.splitArray(t, s.field, c);
                r.origin = t, o.each(l, function(a, o) {
                    r.splitedIndex = o;
                    var s = a.map(function(t) { return t.points });
                    r.points = s, i.drawShape(r.shape, t[0], r, n, e)
                })
            }, e
        }(r);
        r.Area = s, t.exports = s
    }, function(t, e, i) {
        function n(t, e) { return Math.abs(t - e) < 1e-5 }

        function r(t) { return !isNaN(t) && !l.isNil(t) }

        function a(t) {
            for (var e = [], i = 0, n = t.length; i < n; i++) {
                var a = t[i];
                r(a.x) && r(a.y) && e.push(a)
            }
            return e
        }

        function o(t, e) { var i = !0; return l.each(t, function(t) { if (!n(t.x, e.x) || !n(t.y, e.y)) return i = !1, !1 }), i }

        function s(t, e, i, n, r) {
            var o = t.concat(e);
            return r ? i.addShape("Custom", {
                className: "area",
                attrs: l.mix({ points: o }, n),
                createPath: function(t) {
                    var e = [
                            [0, 0],
                            [1, 1]
                        ],
                        i = a(this._attrs.attrs.points),
                        n = i.length,
                        r = i.slice(0, n / 2),
                        o = i.slice(n / 2, n),
                        s = h.smooth(r, !1, e);
                    t.beginPath(), t.moveTo(r[0].x, r[0].y);
                    for (var c = 0, l = s.length; c < l; c++) {
                        var u = s[c];
                        t.bezierCurveTo(u[1], u[2], u[3], u[4], u[5], u[6])
                    }
                    if (o.length) {
                        var f = h.smooth(o, !1, e);
                        t.lineTo(o[0].x, o[0].y);
                        for (var p = 0, g = f.length; p < g; p++) {
                            var d = f[p];
                            t.bezierCurveTo(d[1], d[2], d[3], d[4], d[5], d[6])
                        }
                    }
                    t.closePath()
                },
                calculateBox: function() { var t = a(this._attrs.attrs.points); return f.getBBoxFromPoints(t) }
            }) : i.addShape("Polyline", { className: "area", attrs: l.mix({ points: o }, n) })
        }

        function c(t, e, i) {
            var n = this,
                r = t.points,
                a = [],
                c = [];
            l.each(r, function(t) { c.push(t[0]), a.push(t[1]) });
            var u = l.mix({ fillStyle: t.color }, p.shape.area, t.style);
            return c.reverse(), a = n.parsePoints(a), c = n.parsePoints(c), t.isInCircle && (a.push(a[0]), c.unshift(c[c.length - 1]), o(c, t.center) && (c = [])), s(a, c, e, u, i)
        }
        var l = i(0),
            u = i(8),
            h = i(40),
            f = i(10),
            p = i(1),
            g = u.registerFactory("area", {
                defaultShapeType: "area",
                getDefaultPoints: function(t) {
                    var e = t.x,
                        i = t.y,
                        n = t.y0;
                    i = l.isArray(i) ? i : [n, i];
                    var r = [];
                    return r.push({ x: e, y: i[0] }, { x: e, y: i[1] }), r
                }
            }),
            d = ["area", "smooth"];
        l.each(d, function(t) { u.registerShape("area", t, { draw: function(e, i) { var n = "smooth" === t; return c.call(this, e, i, n) } }) }), t.exports = g
    }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var r = i(6),
            a = i(0);
        i(108);
        var o = function(t) {
            function e() { return t.apply(this, arguments) || this }
            n(e, t);
            var i = e.prototype;
            return i.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return e.type = "polygon", e.shapeType = "polygon", e.generatePoints = !0, e }, i.createShapePointsCfg = function(e) {
                var i, n = t.prototype.createShapePointsCfg.call(this, e),
                    r = this,
                    o = n.x,
                    s = n.y;
                if (!a.isArray(o) || !a.isArray(s)) {
                    var c = r.getXScale(),
                        l = r.getYScale(),
                        u = .5 / (c.values ? c.values.length : c.ticks.length),
                        h = .5 / (l.values ? l.values.length : l.ticks.length);
                    c.isCategory && l.isCategory ? (o = [o - u, o - u, o + u, o + u], s = [s - h, s + h, s + h, s - h]) : a.isArray(o) ? (o = [(i = o)[0], i[0], i[1], i[1]], s = [s - h / 2, s + h / 2, s + h / 2, s - h / 2]) : a.isArray(s) && (s = [(i = s)[0], i[1], i[1], i[0]], o = [o - u / 2, o - u / 2, o + u / 2, o + u / 2]), n.x = o, n.y = s
                }
                return n
            }, e
        }(r);
        r.Polygon = o, t.exports = o
    }, function(t, e, i) {
        var n = i(8),
            r = i(0),
            a = n.registerFactory("polygon", { defaultShapeType: "polygon", getDefaultPoints: function(t) { for (var e = [], i = t.x, n = t.y, r = 0, a = i.length; r < a; r++) e.push({ x: i[r], y: n[r] }); return e } });
        n.registerShape("polygon", "polygon", {
            draw: function(t, e) {
                var i = this.parsePoints(t.points),
                    n = r.mix({ fill: t.color, points: i }, t.style);
                return e.addShape("Polygon", { className: "polygon", attrs: n })
            }
        }), t.exports = a
    }, function(t, e, i) {
        function n(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }

        function r(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var a = i(6),
            o = i(0),
            s = i(42);
        i(110);
        var c = function(t) {
            function e(e) { var i; return i = t.call(this, e) || this, o.mix(n(i), s), i }
            r(e, t);
            var i = e.prototype;
            return i.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return e.type = "schema", e.shapeType = "schema", e.generatePoints = !0, e }, i.createShapePointsCfg = function(e) { var i = t.prototype.createShapePointsCfg.call(this, e); return i.size = this.getNormalizedSize(e), i }, i.clearInner = function() { t.prototype.clearInner.call(this), this.set("defaultSize", null) }, e
        }(a);
        a.Schema = c, t.exports = c
    }, function(t, e, i) {
        function n(t) {
            var e = t.sort(function(t, e) { return t < e ? 1 : -1 }),
                i = e.length;
            if (i < 4)
                for (var n = e[i - 1], r = 0; r < 4 - i; r++) e.push(n);
            return e
        }

        function r(t, e, i) { var r = n(e); return [{ x: t, y: r[0] }, { x: t, y: r[1] }, { x: t - i / 2, y: r[2] }, { x: t - i / 2, y: r[1] }, { x: t + i / 2, y: r[1] }, { x: t + i / 2, y: r[2] }, { x: t, y: r[2] }, { x: t, y: r[3] }] }
        var a = i(8),
            o = i(0),
            s = a.registerFactory("schema", {});
        a.registerShape("schema", "candle", {
            getPoints: function(t) { return r(t.x, t.y, t.size) },
            draw: function(t, e) {
                var i = this.parsePoints(t.points),
                    n = o.mix({ stroke: t.color, fill: t.color, lineWidth: 1 }, t.style);
                return e.addShape("Custom", {
                    className: "schema",
                    attrs: n,
                    createPath: function(t) {
                        t.beginPath(), t.moveTo(i[0].x, i[0].y), t.lineTo(i[1].x, i[1].y), t.moveTo(i[2].x, i[2].y);
                        for (var e = 3; e < 6; e++) t.lineTo(i[e].x, i[e].y);
                        t.closePath(), t.moveTo(i[6].x, i[6].y), t.lineTo(i[7].x, i[7].y)
                    }
                })
            }
        }), t.exports = s
    }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var r = i(0),
            a = i(26),
            o = function(t) {
                function e() { return t.apply(this, arguments) || this }
                n(e, t);
                var i = e.prototype;
                return i._initDefaultCfg = function() { t.prototype._initDefaultCfg.call(this), this.startAngle = -Math.PI / 2, this.endAngle = 3 * Math.PI / 2, this.radius = null, this.center = null }, i.getOffsetPoint = function(t) {
                    var e = this.startAngle,
                        i = e + (this.endAngle - e) * t;
                    return this._getCirclePoint(i)
                }, i._getCirclePoint = function(t, e) {
                    var i = this,
                        n = i.center;
                    return e = e || i.radius, { x: n.x + Math.cos(t) * e, y: n.y + Math.sin(t) * e }
                }, i.getTextAlignInfo = function(t, e) {
                    var i, n = this.getOffsetVector(t, e),
                        r = "middle";
                    return n[0] > 0 ? i = "left" : n[0] < 0 ? i = "right" : (i = "center", n[1] > 0 ? r = "top" : n[1] < 0 && (r = "bottom")), { textAlign: i, textBaseline: r }
                }, i.getAxisVector = function(t) {
                    var e = this.center,
                        i = this.offsetFactor;
                    return [(t.y - e.y) * i, -1 * (t.x - e.x) * i]
                }, i.drawLine = function(t) {
                    var e = this.center,
                        i = this.radius,
                        n = this.startAngle,
                        a = this.endAngle;
                    this.getContainer(t.top).addShape("arc", { className: "axis-line", attrs: r.mix({ x: e.x, y: e.y, r: i, startAngle: n, endAngle: a }, t) })
                }, e
            }(a);
        a.Circle = o, t.exports = o
    }, function(t, e, i) {
        var n = i(113);
        t.exports = n
    }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var r = i(12),
            a = i(37),
            o = i(114),
            s = i(38),
            c = i(96),
            l = i(4),
            u = i(17),
            h = i(25),
            f = i(18),
            p = function(t) {
                function e() { return t.apply(this, arguments) || this }
                n(e, t);
                var i = e.prototype;
                return i._initDefaultCfg = function() { t.prototype._initDefaultCfg.call(this), this.type = "timeCat", this.sortable = !0, this.tickCount = 5, this.mask = "YYYY-MM-DD" }, i.init = function() {
                    var t = this,
                        e = this.values;
                    l(e, function(i, n) { e[n] = t._toTimeStamp(i) }), this.sortable && e.sort(function(t, e) { return t - e }), t.ticks || (t.ticks = this.calculateTicks())
                }, i.calculateTicks = function() {
                    var t = this,
                        e = t.tickCount;
                    return e ? s({ maxCount: e, data: t.values, isRounding: t.isRounding }).ticks : t.values
                }, i.translate = function(t) { t = this._toTimeStamp(t); var e = this.values.indexOf(t); return -1 === e && (e = u(t) && t < this.values.length ? t : NaN), e }, i.scale = function(t) {
                    var e, i = this.rangeMin(),
                        n = this.rangeMax(),
                        r = this.translate(t);
                    return e = 1 === this.values.length || isNaN(r) ? r : r > -1 ? r / (this.values.length - 1) : 0, i + e * (n - i)
                }, i.getText = function(t) {
                    var e = "",
                        i = this.translate(t);
                    e = i > -1 ? this.values[i] : t;
                    var n = this.formatter;
                    return e = parseInt(e, 10), e = n ? n(e) : o.format(e, this.mask)
                }, i.getTicks = function() {
                    var t = this,
                        e = this.ticks,
                        i = [];
                    return l(e, function(e) {
                        var n;
                        n = h(e) ? e : { text: f(e) ? e : t.getText(e), value: t.scale(e), tickValue: e }, i.push(n)
                    }), i
                }, i._toTimeStamp = function(t) { return c.toTimeStamp(t) }, e
            }(a);
        r.TimeCat = p, t.exports = p
    }, function(t, e, i) {
        var n;
        ! function(r) {
            "use strict";

            function a(t, e) { for (var i = [], n = 0, r = t.length; n < r; n++) i.push(t[n].substr(0, e)); return i }

            function o(t) { return function(e, i, n) { var r = n[t].indexOf(i.charAt(0).toUpperCase() + i.substr(1).toLowerCase());~r && (e.month = r) } }

            function s(t, e) { for (t = String(t), e = e || 2; t.length < e;) t = "0" + t; return t }
            var c = {},
                l = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,
                u = /\d\d?/,
                h = /\d{3}/,
                f = /\d{4}/,
                p = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
                g = /\[([^]*?)\]/gm,
                d = function() {},
                v = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                y = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                m = a(y, 3),
                x = a(v, 3);
            c.i18n = { dayNamesShort: x, dayNames: v, monthNamesShort: m, monthNames: y, amPm: ["am", "pm"], DoFn: function(t) { return t + ["th", "st", "nd", "rd"][t % 10 > 3 ? 0 : (t - t % 10 != 10) * t % 10] } };
            var _ = { D: function(t) { return t.getDate() }, DD: function(t) { return s(t.getDate()) }, Do: function(t, e) { return e.DoFn(t.getDate()) }, d: function(t) { return t.getDay() }, dd: function(t) { return s(t.getDay()) }, ddd: function(t, e) { return e.dayNamesShort[t.getDay()] }, dddd: function(t, e) { return e.dayNames[t.getDay()] }, M: function(t) { return t.getMonth() + 1 }, MM: function(t) { return s(t.getMonth() + 1) }, MMM: function(t, e) { return e.monthNamesShort[t.getMonth()] }, MMMM: function(t, e) { return e.monthNames[t.getMonth()] }, YY: function(t) { return String(t.getFullYear()).substr(2) }, YYYY: function(t) { return s(t.getFullYear(), 4) }, h: function(t) { return t.getHours() % 12 || 12 }, hh: function(t) { return s(t.getHours() % 12 || 12) }, H: function(t) { return t.getHours() }, HH: function(t) { return s(t.getHours()) }, m: function(t) { return t.getMinutes() }, mm: function(t) { return s(t.getMinutes()) }, s: function(t) { return t.getSeconds() }, ss: function(t) { return s(t.getSeconds()) }, S: function(t) { return Math.round(t.getMilliseconds() / 100) }, SS: function(t) { return s(Math.round(t.getMilliseconds() / 10), 2) }, SSS: function(t) { return s(t.getMilliseconds(), 3) }, a: function(t, e) { return t.getHours() < 12 ? e.amPm[0] : e.amPm[1] }, A: function(t, e) { return t.getHours() < 12 ? e.amPm[0].toUpperCase() : e.amPm[1].toUpperCase() }, ZZ: function(t) { var e = t.getTimezoneOffset(); return (e > 0 ? "-" : "+") + s(100 * Math.floor(Math.abs(e) / 60) + Math.abs(e) % 60, 4) } },
                S = {
                    D: [u, function(t, e) { t.day = e }],
                    Do: [new RegExp(u.source + p.source), function(t, e) { t.day = parseInt(e, 10) }],
                    M: [u, function(t, e) { t.month = e - 1 }],
                    YY: [u, function(t, e) {
                        var i = +("" + (new Date).getFullYear()).substr(0, 2);
                        t.year = "" + (e > 68 ? i - 1 : i) + e
                    }],
                    h: [u, function(t, e) { t.hour = e }],
                    m: [u, function(t, e) { t.minute = e }],
                    s: [u, function(t, e) { t.second = e }],
                    YYYY: [f, function(t, e) { t.year = e }],
                    S: [/\d/, function(t, e) { t.millisecond = 100 * e }],
                    SS: [/\d{2}/, function(t, e) { t.millisecond = 10 * e }],
                    SSS: [h, function(t, e) { t.millisecond = e }],
                    d: [u, d],
                    ddd: [p, d],
                    MMM: [p, o("monthNamesShort")],
                    MMMM: [p, o("monthNames")],
                    a: [p, function(t, e, i) {
                        var n = e.toLowerCase();
                        n === i.amPm[0] ? t.isPm = !1 : n === i.amPm[1] && (t.isPm = !0)
                    }],
                    ZZ: [/([\+\-]\d\d:?\d\d|Z)/, function(t, e) {
                        "Z" === e && (e = "+00:00");
                        var i, n = (e + "").match(/([\+\-]|\d\d)/gi);
                        n && (i = 60 * n[1] + parseInt(n[2], 10), t.timezoneOffset = "+" === n[0] ? i : -i)
                    }]
                };
            S.dd = S.d, S.dddd = S.ddd, S.DD = S.D, S.mm = S.m, S.hh = S.H = S.HH = S.h, S.MM = S.M, S.ss = S.s, S.A = S.a, c.masks = { default: "ddd MMM DD YYYY HH:mm:ss", shortDate: "M/D/YY", mediumDate: "MMM D, YYYY", longDate: "MMMM D, YYYY", fullDate: "dddd, MMMM D, YYYY", shortTime: "HH:mm", mediumTime: "HH:mm:ss", longTime: "HH:mm:ss.SSS" }, c.format = function(t, e, i) { var n = i || c.i18n; if ("number" == typeof t && (t = new Date(t)), "[object Date]" !== Object.prototype.toString.call(t) || isNaN(t.getTime())) throw new Error("Invalid Date in fecha.format"); var r = []; return e = (e = c.masks[e] || e || c.masks.default).replace(g, function(t, e) { return r.push(e), "??" }), (e = e.replace(l, function(e) { return e in _ ? _[e](t, n) : e.slice(1, e.length - 1) })).replace(/\?\?/g, function() { return r.shift() }) }, c.parse = function(t, e, i) {
                var n = i || c.i18n;
                if ("string" != typeof e) throw new Error("Invalid format in fecha.parse");
                if (e = c.masks[e] || e, t.length > 1e3) return !1;
                var r = !0,
                    a = {};
                if (e.replace(l, function(e) {
                        if (S[e]) {
                            var i = S[e],
                                o = t.search(i[0]);
                            ~o ? t.replace(i[0], function(e) { return i[1](a, e, n), t = t.substr(o + e.length), e }) : r = !1
                        }
                        return S[e] ? "" : e.slice(1, e.length - 1)
                    }), !r) return !1;
                var o = new Date;
                !0 === a.isPm && null != a.hour && 12 != +a.hour ? a.hour = +a.hour + 12 : !1 === a.isPm && 12 == +a.hour && (a.hour = 0);
                var s;
                return null != a.timezoneOffset ? (a.minute = +(a.minute || 0) - +a.timezoneOffset, s = new Date(Date.UTC(a.year || o.getFullYear(), a.month || 0, a.day || 1, a.hour || 0, a.minute || 0, a.second || 0, a.millisecond || 0))) : s = new Date(a.year || o.getFullYear(), a.month || 0, a.day || 1, a.hour || 0, a.minute || 0, a.second || 0, a.millisecond || 0), s
            }, void 0 !== t && t.exports ? t.exports = c : void 0 !== (n = function() { return c }.call(e, i, e, t)) && (t.exports = n)
        }()
    }, function(t, e, i) {
        var n = i(16);
        t.exports = function(t) { return n(t, "Date") }
    }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var r = i(0),
            a = i(11),
            o = function(t) {
                function e() { return t.apply(this, arguments) || this }
                n(e, t);
                var i = e.prototype;
                return i._initDefaultCfg = function() { this.type = "arc", this.start = [], this.end = [], this.style = { stroke: "#999", lineWidth: 1 } }, i.render = function(t, e) {
                    var i = this,
                        n = i.parsePoint(t, i.start),
                        a = i.parsePoint(t, i.end);
                    if (n && a) {
                        var o = t.center,
                            s = Math.sqrt((n.x - o.x) * (n.x - o.x) + (n.y - o.y) * (n.y - o.y)),
                            c = Math.atan2(n.y - o.y, n.x - o.x),
                            l = Math.atan2(a.y - o.y, a.x - o.x),
                            u = e.addShape("arc", { className: "guide-arc", attrs: r.mix({ x: o.x, y: o.y, r: s, startAngle: c, endAngle: l }, i.style) });
                        return i.element = u, u
                    }
                }, e
            }(a);
        a.Arc = o, t.exports = o
    }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }

        function r(t, e, i, n) { var r = []; return "left" === t && "top" === e ? (r[0] = 0, r[1] = 0) : "right" === t && "top" === e ? (r[0] = -i, r[1] = 0) : "left" === t && "bottom" === e ? (r[0] = 0, r[1] = Math.floor(-n)) : "right" === t && "bottom" === e ? (r[0] = Math.floor(-i), r[1] = Math.floor(-n)) : "right" === t && "middle" === e ? (r[0] = Math.floor(-i), r[1] = Math.floor(-n / 2)) : "left" === t && "middle" === e ? (r[0] = 0, r[1] = Math.floor(-n / 2)) : "center" === t && "bottom" === e ? (r[0] = Math.floor(-i / 2), r[1] = Math.floor(-n)) : "center" === t && "top" === e ? (r[0] = Math.floor(-i / 2), r[1] = 0) : (r[0] = Math.floor(-i / 2), r[1] = Math.floor(-n / 2)), r }

        function a(t, e) { for (var i in e) e.hasOwnProperty(i) && (t.style[i] = e[i]); return t }

        function o(t) { var e = document.createElement("div"); return t = t.replace(/(^\s*)|(\s*$)/g, ""), e.innerHTML = "" + t, e.childNodes[0] }
        var s = i(0),
            c = i(11),
            l = function(t) {
                function e() { return t.apply(this, arguments) || this }
                n(e, t);
                var i = e.prototype;
                return i._initDefaultCfg = function() { this.type = "html", this.position = null, this.alignX = "center", this.alignY = "middle", this.offsetX = null, this.offsetY = null, this.html = null }, i.render = function(t, e) {
                    var i = this,
                        n = i.parsePoint(t, i.position);
                    if (n) {
                        var c = o(i.html);
                        c = a(c, { position: "absolute", top: Math.floor(n.y) + "px", left: Math.floor(n.x) + "px", visibility: "hidden" });
                        var l = e.get("canvas").get("el"),
                            u = l.parentNode;
                        u = a(u, { position: "relative" });
                        var h = o('<div class="guideWapper" style="position: absolute;top: 0; left: 0;"></div>');
                        u.appendChild(h), h.appendChild(c);
                        var f = l.offsetTop,
                            p = l.offsetLeft,
                            g = i.alignX,
                            d = i.alignY,
                            v = i.offsetX,
                            y = i.offsetY,
                            m = r(g, d, s.getWidth(c), s.getHeight(c));
                        n.x = n.x + m[0] + p, n.y = n.y + m[1] + f, v && (n.x += v), y && (n.y += y), a(c, { top: Math.floor(n.y) + "px", left: Math.floor(n.x) + "px", visibility: "visible" }), i.element = h
                    }
                }, i.remove = function() {
                    var t = this.element;
                    t && t.parentNode && t.parentNode.removeChild(t)
                }, e
            }(c);
        c.Html = l, t.exports = l
    }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var r = i(0),
            a = i(11),
            o = function(t) {
                function e() { return t.apply(this, arguments) || this }
                n(e, t);
                var i = e.prototype;
                return i._initDefaultCfg = function() { this.type = "line", this.start = [], this.end = [], this.style = { stroke: "#000", lineWidth: 1 } }, i.render = function(t, e) { var i = []; if (i[0] = this.parsePoint(t, this.start), i[1] = this.parsePoint(t, this.end), i[0] && i[1]) { var n = e.addShape("Line", { className: "guide-line", attrs: r.mix({ x1: i[0].x, y1: i[0].y, x2: i[1].x, y2: i[1].y }, this.style) }); return this.element = n, n } }, e
            }(a);
        a.Line = o, t.exports = o
    }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var r = i(0),
            a = i(11),
            o = function(t) {
                function e() { return t.apply(this, arguments) || this }
                n(e, t);
                var i = e.prototype;
                return i._initDefaultCfg = function() { this.type = "rect", this.start = [], this.end = [], this.style = { fill: "#CCD7EB", opacity: .4 } }, i.render = function(t, e) {
                    var i = this.parsePoint(t, this.start),
                        n = this.parsePoint(t, this.end);
                    if (i && n) { var a = e.addShape("rect", { className: "guide-rect", attrs: r.mix({ x: Math.min(i.x, n.x), y: Math.min(i.y, n.y), width: Math.abs(n.x - i.x), height: Math.abs(i.y - n.y) }, this.style) }); return this.element = a, a }
                }, e
            }(a);
        a.Rect = o, t.exports = o
    }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var r = i(0),
            a = i(11),
            o = function(t) {
                function e() { return t.apply(this, arguments) || this }
                n(e, t);
                var i = e.prototype;
                return i._initDefaultCfg = function() { this.type = "text", this.position = null, this.content = null, this.style = { fill: "#000" }, this.offsetX = 0, this.offsetY = 0 }, i.render = function(t, e) {
                    var i = this.position,
                        n = this.parsePoint(t, i);
                    if (n) {
                        var a = this.content,
                            o = this.style,
                            s = this.offsetX,
                            c = this.offsetY;
                        s && (n.x += s), c && (n.y += c);
                        var l = e.addShape("text", { className: "guide-text", attrs: r.mix({ x: n.x, y: n.y, text: a }, o) });
                        return this.element = l, l
                    }
                }, e
            }(a);
        a.Text = o, t.exports = o
    }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var r = i(0),
            a = i(11),
            o = function(t) {
                function e() { return t.apply(this, arguments) || this }
                n(e, t);
                var i = e.prototype;
                return i._initDefaultCfg = function() { this.type = "tag", this.position = null, this.content = null, this.direct = "tl", this.autoAdjust = !0, this.offsetX = 0, this.offsetY = 0, this.side = 4, this.background = { padding: 5, radius: 2, fill: "#1890FF" }, this.textStyle = { fontSize: 12, fill: "#fff", textAlign: "center", textBaseline: "middle" }, this.withPoint = !0, this.pointStyle = { fill: "#1890FF", r: 3, lineWidth: 1, stroke: "#fff" } }, i._getDirect = function(t, e, i, n) {
                    var r = this.direct,
                        a = this.side,
                        o = t.get("canvas"),
                        s = o.get("width"),
                        c = o.get("height"),
                        l = e.x,
                        u = e.y,
                        h = r[0],
                        f = r[1];
                    "t" === h && u - a - n < 0 ? h = "b" : "b" === h && u + a + n > c && (h = "t");
                    var p = "c" === h ? a : 0;
                    return "l" === f && l - p - i < 0 ? f = "r" : "r" === f && l + p + i > s ? f = "l" : "c" === f && (i / 2 + l + p > s ? f = "l" : l - i / 2 - p < 0 && (f = "r")), r = h + f
                }, i.render = function(t, e) {
                    var i = this.parsePoint(t, this.position);
                    if (i) {
                        var n = this.content,
                            a = this.background,
                            o = this.textStyle,
                            s = [],
                            c = e.addGroup({ className: "guide-tag" });
                        if (this.withPoint) {
                            var l = c.addShape("Circle", { className: "guide-tag-point", attrs: r.mix({ x: i.x, y: i.y }, this.pointStyle) });
                            s.push(l)
                        }
                        var u = c.addGroup(),
                            h = u.addShape("text", { className: "guide-tag-text", zIndex: 1, attrs: r.mix({ x: 0, y: 0, text: n }, o) });
                        s.push(h);
                        var f = h.getBBox(),
                            p = r.parsePadding(a.padding),
                            g = f.width + p[1] + p[3],
                            d = f.height + p[0] + p[2],
                            v = f.minY - p[0],
                            y = f.minX - p[3],
                            m = u.addShape("rect", { className: "guide-tag-bg", zIndex: -1, attrs: r.mix({ x: y, y: v, width: g, height: d }, a) });
                        s.push(m);
                        var x, _ = this.autoAdjust ? this._getDirect(e, i, g, d) : this.direct,
                            S = this.side,
                            b = i.x + this.offsetX,
                            C = i.y + this.offsetY,
                            P = r.parsePadding(a.radius);
                        "tl" === _ ? (x = [{ x: g + y - S - 1, y: d + v - 1 }, { x: g + y, y: d + v - 1 }, { x: g + y, y: d + S + v }], P[2] = 0, b -= g, C = C - S - d) : "cl" === _ ? (x = [{ x: g + y - 1, y: (d - S) / 2 + v - 1 }, { x: g + y - 1, y: (d + S) / 2 + v + 1 }, { x: g + S + y, y: d / 2 + v }], b = b - g - S, C -= d / 2) : "bl" === _ ? (x = [{ x: g + y, y: -S + v }, { x: g + y - S - 1, y: v + 1 }, { x: g + y, y: v + 1 }], P[1] = 0, b -= g, C += S) : "bc" === _ ? (x = [{ x: g / 2 + y, y: -S + v }, { x: (g - S) / 2 + y - 1, y: v + 1 }, { x: (g + S) / 2 + y + 1, y: v + 1 }], b -= g / 2, C += S) : "br" === _ ? (x = [{ x: y, y: v - S }, { x: y, y: v + 1 }, { x: y + S + 1, y: v + 1 }], P[0] = 0, C += S) : "cr" === _ ? (x = [{ x: y - S, y: d / 2 + v }, { x: y + 1, y: (d - S) / 2 + v - 1 }, { x: y + 1, y: (d + S) / 2 + v + 1 }], b += S, C -= d / 2) : "tr" === _ ? (x = [{ x: y, y: d + S + v }, { x: y, y: d + v - 1 }, { x: S + y + 1, y: d + v - 1 }], P[3] = 0, C = C - d - S) : "tc" === _ && (x = [{ x: (g - S) / 2 + y - 1, y: d + v - 1 }, { x: (g + S) / 2 + y + 1, y: d + v - 1 }, { x: g / 2 + y, y: d + S + v }], b -= g / 2, C = C - d - S);
                        var w = u.addShape("Polygon", { className: "guide-tag-side", zIndex: 0, attrs: { points: x, fill: a.fill } });
                        return s.push(w), m.attr("radius", P), u.moveTo(b - y, C - v), u.sort(), this.element = c, s
                    }
                }, e
            }(a);
        a.Tag = o, t.exports = o
    }, function(t, e, i) {
        function n(t) {
            var e = t.getAttr("color");
            if (e) { var i = e.getScale(e.type); if (i.isLinear) return i }
            var n = t.getXScale(),
                r = t.getYScale();
            return r || n
        }

        function r(t, e) {
            var i, r, a = t._getGroupScales();
            if (a.length && u.each(a, function(t) { return r = t, !1 }), r) {
                var o = r.field;
                i = r.getText(e[o])
            } else {
                var s = n(t);
                i = s.alias || s.field
            }
            return i
        }

        function a(t, e) { var i = n(t); return i.getText(e[i.field]) }

        function o(t, e) {
            var i = t.getAttr("position").getFields()[0],
                n = t.get("scales")[i];
            return n.getText(e[n.field])
        }

        function s(t, e) { var i = -1; return u.each(t, function(t, n) { if (t.title === e.title && t.name === e.name && t.value === e.value && t.color === e.color) return i = n, !1 }), i }

        function c(t) { var e = []; return u.each(t, function(t) { var i = s(e, t); - 1 === i ? e.push(t) : e[i] = t }), e }

        function l(t, e) { return JSON.stringify(t) === JSON.stringify(e) }
        var u = i(0),
            h = i(1),
            f = i(123),
            p = i(28);
        h.tooltip = u.deepMix({ triggerOn: ["touchstart", "touchmove"], alwaysShow: !1, showTitle: !1, showCrosshairs: !1, crosshairsStyle: { stroke: "rgba(0, 0, 0, 0.25)", lineWidth: 1 }, showTooltipMarker: !0, background: { radius: 1, fill: "rgba(0, 0, 0, 0.65)", padding: [3, 5] }, titleStyle: { fontSize: 12, fill: "#fff", textAlign: "start", textBaseline: "top" }, nameStyle: { fontSize: 12, fill: "rgba(255, 255, 255, 0.65)", textAlign: "start", textBaseline: "middle" }, valueStyle: { fontSize: 12, fill: "#fff", textAlign: "start", textBaseline: "middle" }, showItemMarker: !0, itemMarkerStyle: { radius: 3, symbol: "circle", lineWidth: 1, stroke: "#fff" }, layout: "horizontal", snap: !1 }, h.tooltip || {});
        var g = function() {
            function t(t) {
                this.enable = !0, this.cfg = {}, this.tooltip = null, this.chart = null, this.timeStamp = 0, u.mix(this, t);
                var e = this.chart;
                this.canvasDom = e.get("canvas").get("el")
            }
            var e = t.prototype;
            return e._setCrosshairsCfg = function() {
                var t = this.chart,
                    e = u.mix({}, h.tooltip),
                    i = t.get("geoms"),
                    n = [];
                u.each(i, function(t) { var e = t.get("type"); - 1 === n.indexOf(e) && n.push(e) });
                var r = t.get("coord").type;
                return !i.length || "cartesian" !== r && "rect" !== r || 1 === n.length && -1 !== ["line", "area", "path", "point"].indexOf(n[0]) && u.mix(e, { showCrosshairs: !0 }), e
            }, e._getMaxLength = function(t) {
                void 0 === t && (t = {});
                var e = t,
                    i = e.layout,
                    n = e.plotRange;
                return "horizontal" === i ? n.br.x - n.bl.x : n.bl.y - n.tr.y
            }, e.render = function() {
                var t = this;
                if (!t.tooltip) {
                    var e = t.chart,
                        i = e.get("canvas"),
                        n = e.get("frontPlot").addGroup({ className: "tooltipContainer", zIndex: 10 }),
                        r = e.get("backPlot").addGroup({ className: "tooltipContainer" }),
                        a = e.get("plotRange"),
                        o = e.get("coord"),
                        s = t._setCrosshairsCfg(),
                        c = t.cfg;
                    (c = u.deepMix({ plotRange: a, frontPlot: n, backPlot: r, canvas: i, fixed: o.transposed || o.isPolar }, s, c)).maxLength = t._getMaxLength(c), this.cfg = c;
                    var l = new f(c);
                    t.tooltip = l, t.bindEvents()
                }
            }, e.clear = function() {
                var t = this.tooltip;
                t && t.destroy(), this.tooltip = null, this.prePoint = null, this._lastActive = null, this.unBindEvents()
            }, e._getTooltipMarkerStyle = function(t) {
                void 0 === t && (t = {});
                var e = t,
                    i = e.type,
                    n = e.items,
                    r = this.cfg;
                if ("rect" === i) {
                    var a, o, s, c, l = this.chart,
                        h = l.get("plotRange"),
                        f = h.tl,
                        p = h.br,
                        g = l.get("coord"),
                        d = n[0],
                        v = n[n.length - 1],
                        y = d.width;
                    g.transposed ? (a = f.x, o = v.y - .75 * y, s = p.x - f.x, c = d.y - v.y + 1.5 * y) : (a = d.x - .75 * y, o = f.y, s = v.x - d.x + 1.5 * y, c = p.y - f.y), t.style = u.mix({ x: a, y: o, width: s, height: c, fill: "#CCD6EC", opacity: .3 }, r.tooltipMarkerStyle)
                } else t.style = u.mix({ radius: 4, fill: "#fff", lineWidth: 2 }, r.tooltipMarkerStyle);
                return t
            }, e._setTooltip = function(t, e, i) {
                void 0 === i && (i = {});
                var n = this._lastActive,
                    r = this.tooltip,
                    a = this.cfg;
                e = c(e);
                var o = this.chart,
                    s = o.get("coord"),
                    h = o.getYScales()[0],
                    f = a.snap;
                if (!1 === f && h.isLinear) {
                    var g, d, v = s.invertPoint(t),
                        y = o.get("plotRange");
                    p.isPointInPlot(t, y) && (s.transposed ? (g = h.invert(v.x), d = t.x, r.setXTipContent(g), r.setXTipPosition(d), r.setYCrosshairPosition(d)) : (g = h.invert(v.y), d = t.y, r.setYTipContent(g), r.setYTipPosition(d), r.setXCrosshairPosition(d)))
                }
                if (a.onShow && a.onShow({ x: t.x, y: t.y, tooltip: r, items: e, tooltipMarkerCfg: i }), l(n, e)) !1 === f && (u.directionEnabled(a.crosshairsType, "y") || a.showYTip) && this.chart.get("canvas").draw();
                else {
                    this._lastActive = e;
                    var m = a.onChange;
                    m && m({ x: t.x, y: t.y, tooltip: r, items: e, tooltipMarkerCfg: i });
                    var x = e[0],
                        _ = x.title || x.name,
                        S = x.x;
                    if (e.length > 1 && (S = (e[0].x + e[e.length - 1].x) / 2), r.setContent(_, e, s.transposed), r.setPosition(e, t), s.transposed) {
                        var b = x.y;
                        e.length > 1 && (b = (e[0].y + e[e.length - 1].y) / 2), r.setYTipContent(_), r.setYTipPosition(b), r.setXCrosshairPosition(b), f && (r.setXTipContent(x.value), r.setXTipPosition(S), r.setYCrosshairPosition(S))
                    } else r.setXTipContent(_), r.setXTipPosition(S), r.setYCrosshairPosition(S), f && (r.setYTipContent(x.value), r.setYTipPosition(x.y), r.setXCrosshairPosition(x.y));
                    var C = i.items;
                    a.showTooltipMarker && C.length ? (i = this._getTooltipMarkerStyle(i), r.setMarkers(i)) : r.clearMarkers(), r.show()
                }
            }, e.showTooltip = function(t) {
                var e, i, n = this,
                    s = n.chart,
                    c = [],
                    l = [],
                    f = n.cfg;
                f.showItemMarker && (i = f.itemMarkerStyle);
                var p = s.get("geoms"),
                    g = s.get("coord");
                if (u.each(p, function(n) {
                        if (n.get("visible")) {
                            var s = n.get("type"),
                                f = n.getSnapRecords(t);
                            u.each(f, function(t) {
                                if (t.x && t.y) {
                                    var f = t.x,
                                        p = t.y,
                                        d = t._origin,
                                        v = t.color,
                                        y = { x: f, y: u.isArray(p) ? p[1] : p, color: v || h.defaultColor, origin: d, name: r(n, d), value: a(n, d), title: o(n, d) };
                                    i && (y.marker = u.mix({ fill: v || h.defaultColor }, i)), l.push(y), -1 !== ["line", "area", "path"].indexOf(s) ? (e = "circle", c.push(y)) : "interval" !== s || "cartesian" !== g.type && "rect" !== g.type || (e = "rect", y.width = n.getSize(t._origin), c.push(y))
                                }
                            })
                        }
                    }), l.length) {
                    var d = { items: c, type: e };
                    n._setTooltip(t, l, d)
                } else n.hideTooltip()
            }, e.hideTooltip = function() {
                var t = this.cfg;
                this._lastActive = null;
                var e = this.tooltip;
                e && (e.hide(), t.onHide && t.onHide({ tooltip: e }), this.chart.get("canvas").draw())
            }, e.handleShowEvent = function(t) {
                var e = this.chart;
                if (this.enable && !e.get("_closeTooltip")) {
                    var i = e.get("plotRange"),
                        n = u.createEvent(t, e);
                    if (p.isPointInPlot(n, i) || this.cfg.alwaysShow) {
                        var r = this.timeStamp,
                            a = +new Date;
                        a - r > 16 && (this.showTooltip(n), this.timeStamp = a)
                    } else this.hideTooltip()
                }
            }, e.handleHideEvent = function() {
                var t = this.chart;
                this.enable && !t.get("_closeTooltip") && this.hideTooltip()
            }, e.handleDocEvent = function(t) {
                var e = this.chart;
                if (this.enable && !e.get("_closeTooltip")) {
                    var i = this.canvasDom;
                    t.target !== i && this.hideTooltip()
                }
            }, e._handleEvent = function(t, e, i) {
                var n = this.canvasDom;
                u.each([].concat(t), function(t) { "bind" === i ? u.addEventListener(n, t, e) : u.removeEventListener(n, t, e) })
            }, e.bindEvents = function() {
                var t = this.cfg,
                    e = t.triggerOn,
                    i = t.triggerOff,
                    n = t.alwaysShow,
                    r = u.wrapBehavior(this, "handleShowEvent"),
                    a = u.wrapBehavior(this, "handleHideEvent");
                if (e && this._handleEvent(e, r, "bind"), i && this._handleEvent(i, a, "bind"), !n) {
                    var o = u.wrapBehavior(this, "handleDocEvent");
                    u.isBrowser && u.addEventListener(document, "touchstart", o)
                }
            }, e.unBindEvents = function() {
                var t = this.cfg,
                    e = t.triggerOn,
                    i = t.triggerOff,
                    n = t.alwaysShow,
                    r = u.getWrapBehavior(this, "handleShowEvent"),
                    a = u.getWrapBehavior(this, "handleHideEvent");
                if (e && this._handleEvent(e, r, "unBind"), i && this._handleEvent(i, a, "unBind"), !n) {
                    var o = u.getWrapBehavior(this, "handleDocEvent");
                    u.isBrowser && u.removeEventListener(document, "touchstart", o)
                }
            }, t
        }();
        t.exports = {
            init: function(t) {
                var e = new g({ chart: t });
                t.set("tooltipController", e), t.tooltip = function(t, i) { return u.isObject(t) && (i = t, t = !0), e.enable = t, i && (e.cfg = i), this }
            },
            afterGeomDraw: function(t) {
                var e = t.get("tooltipController");
                e.render(), t.showTooltip = function(t) { return e.showTooltip(t), this }, t.hideTooltip = function() { return e.hideTooltip(), this }
            },
            clearInner: function(t) { t.get("tooltipController").clear() }
        }
    }, function(t, e, i) {
        var n = i(0),
            r = i(97),
            a = i(98),
            o = i(124),
            s = function() {
                function t(t) {
                    n.deepMix(this, this.getDefaultCfg(), t);
                    var e = this.frontPlot;
                    if (!this.custom) {
                        var i = new a(n.mix({ parent: e, zIndex: 3 }, t));
                        this.container = i;
                        var r = this.fixed,
                            s = this.background;
                        r || (this.tooltipArrow = e.addShape("Polygon", { className: "tooltip-arrow", visible: !1, zIndex: 2, attrs: n.mix({ points: [] }, s) }))
                    }
                    if (this.showXTip) {
                        var c = this.xTipBackground,
                            l = new o({ className: "xTip", background: c, visible: !1 });
                        e.add(l.container), this.xTipBox = l
                    }
                    if (this.showYTip) {
                        var u = this.yTipBackground,
                            h = new o({ className: "yTip", background: u, visible: !1 });
                        e.add(h.container), this.yTipBox = h
                    }
                    this.showCrosshairs && this._renderCrosshairs(), e.sort()
                }
                var e = t.prototype;
                return e.getDefaultCfg = function() { return { showCrosshairs: !1, crosshairsStyle: { stroke: "rgba(0, 0, 0, 0.25)", lineWidth: 1 }, crosshairsType: "y", showXTip: !1, showYTip: !1, xTip: null, xTipBackground: { radius: 1, fill: "rgba(0, 0, 0, 0.65)", padding: [3, 5] }, yTip: null, yTipBackground: { radius: 1, fill: "rgba(0, 0, 0, 0.65)", padding: [3, 5] }, background: null, layout: "horizontal", offsetX: 0, offsetY: 0 } }, e.setContent = function(t, e) {
                    if (this.title = t, this.items = e, !this.custom) {
                        var i = this.container;
                        i.setTitle(t), i.setItems(e)
                    }
                }, e.setYTipContent = function(t) {
                    var e = this.yTip;
                    t = n.isFunction(e) ? e(t) : n.mix({ text: t }, e), this.yTipBox && this.yTipBox.updateContent(t)
                }, e.setYTipPosition = function(t) {
                    var e = this.plotRange,
                        i = this.crosshairsShapeX;
                    if (this.showYTip) {
                        var n = this.yTipBox,
                            r = n.getHeight(),
                            a = n.getWidth(),
                            o = e.tl.x - a,
                            s = t - r / 2;
                        s <= e.tl.y && (s = e.tl.y), s + r >= e.br.y && (s = e.br.y - r), o < 0 && (o = e.tl.x, i && i.attr("x1", e.tl.x + a)), n.updatePosition(o, s)
                    }
                }, e.setXTipContent = function(t) {
                    var e = this.xTip;
                    t = n.isFunction(e) ? e(t) : n.mix({ text: t }, e), this.xTipBox && this.xTipBox.updateContent(t)
                }, e.setXTipPosition = function(t) {
                    var e = this.showXTip,
                        i = this.canvas,
                        n = this.plotRange,
                        r = this.xTipBox,
                        a = this.crosshairsShapeY;
                    if (e) {
                        var o = i.get("height"),
                            s = r.getWidth(),
                            c = r.getHeight(),
                            l = t - s / 2,
                            u = n.br.y;
                        l <= n.tl.x && (l = n.tl.x), l + s >= n.tr.x && (l = n.tr.x - s), o - u < c && (u -= c), r.updatePosition(l, u), a && a.attr("y1", u)
                    }
                }, e.setXCrosshairPosition = function(t) { this.crosshairsShapeX && this.crosshairsShapeX.moveTo(0, t) }, e.setYCrosshairPosition = function(t) { this.crosshairsShapeY && this.crosshairsShapeY.moveTo(t, 0) }, e.setPosition = function(t) {
                    var e = this.container,
                        i = this.plotRange,
                        r = this.offsetX,
                        a = this.offsetY,
                        o = this.fixed,
                        s = this.tooltipArrow;
                    if (e) {
                        var c = e.container.getBBox(),
                            l = c.minX,
                            u = c.minY,
                            h = c.width,
                            f = c.height,
                            p = i.tl,
                            g = i.tr,
                            d = 0,
                            v = p.y - f - 4 + a;
                        if (o) d = (p.x + g.x) / 2 - h / 2 + r;
                        else {
                            var y;
                            if (y = t.length > 1 ? (t[0].x + t[t.length - 1].x) / 2 : t[0].x, (d = y - h / 2 + r) < p.x && (d = p.x), d + h > g.x && (d = g.x - h), s) {
                                s.attr("points", [{ x: y - 3, y: p.y - 4 + a }, { x: y + 3, y: p.y - 4 + a }, { x: y, y: p.y + a }]);
                                var m = e.backShape,
                                    x = n.parsePadding(m.attr("radius"));
                                y === p.x ? (x[3] = 0, s.attr("points", [{ x: p.x, y: p.y + a }, { x: p.x, y: p.y - 4 + a }, { x: p.x + 4, y: p.y - 4 + a }])) : y === g.x && (x[2] = 0, s.attr("points", [{ x: g.x, y: p.y + a }, { x: g.x - 4, y: p.y - 4 + a }, { x: g.x, y: p.y - 4 + a }])), m.attr("radius", x)
                            }
                        }
                        e.moveTo(d - l, v - u)
                    }
                }, e.setMarkers = function(t) {
                    void 0 === t && (t = {});
                    var e = this,
                        i = t,
                        a = i.items,
                        o = i.style,
                        s = i.type,
                        c = e._getMarkerGroup(s);
                    if ("circle" === s)
                        for (var l = 0, u = a.length; l < u; l++) {
                            var h = a[l],
                                f = new r({ className: "tooltip-circle-marker", attrs: n.mix({ x: h.x, y: h.y, stroke: h.color }, o) });
                            c.add(f)
                        } else c.addShape("rect", { className: "tooltip-rect-marker", attrs: o })
                }, e.clearMarkers = function() {
                    var t = this.markerGroup;
                    t && t.clear()
                }, e.show = function() {
                    var t = this.crosshairsShapeX,
                        e = this.crosshairsShapeY,
                        i = this.markerGroup,
                        n = this.container,
                        r = this.tooltipArrow,
                        a = this.xTipBox,
                        o = this.yTipBox,
                        s = this.canvas;
                    t && t.show(), e && e.show(), i && i.show(), n && n.show(), r && r.show(), a && a.show(), o && o.show(), s.draw()
                }, e.hide = function() {
                    var t = this.crosshairsShapeX,
                        e = this.crosshairsShapeY,
                        i = this.markerGroup,
                        n = this.container,
                        r = this.tooltipArrow,
                        a = this.xTipBox,
                        o = this.yTipBox;
                    t && t.hide(), e && e.hide(), i && i.hide(), n && n.hide(), r && r.hide(), a && a.hide(), o && o.hide()
                }, e.destroy = function() {
                    var t = this.crosshairsShapeX,
                        e = this.crosshairsShapeY,
                        i = this.markerGroup,
                        n = this.container,
                        r = this.tooltipArrow,
                        a = this.xTipBox,
                        o = this.yTipBox;
                    t && t.remove(!0), e && e.remove(!0), i && i.remove(!0), r && r.remove(!0), n && n.clear(), a && a.clear(), o && o.clear(), this.destroyed = !0
                }, e._getMarkerGroup = function(t) { var e = this.markerGroup; return e ? e.clear() : ("circle" === t ? (e = this.frontPlot.addGroup({ zIndex: 1 }), this.frontPlot.sort()) : e = this.backPlot.addGroup(), this.markerGroup = e), e }, e._renderCrosshairs = function() {
                    var t = this.crosshairsType,
                        e = this.crosshairsStyle,
                        i = this.frontPlot,
                        r = this.plotRange,
                        a = r.tl,
                        o = r.br;
                    n.directionEnabled(t, "x") && (this.crosshairsShapeX = i.addShape("Line", { className: "tooltip-crosshairs-x", zIndex: 0, visible: !1, attrs: n.mix({ x1: a.x, y1: 0, x2: o.x, y2: 0 }, e) })), n.directionEnabled(t, "y") && (this.crosshairsShapeY = i.addShape("Line", { className: "tooltip-crosshairs-y", zIndex: 0, visible: !1, attrs: n.mix({ x1: 0, y1: o.y, x2: 0, y2: a.y }, e) }))
                }, t
            }();
        t.exports = s
    }, function(t, e, i) {
        var n = i(0),
            r = i(5).Group,
            a = function() {
                function t(t) {
                    n.deepMix(this, this.getDefaultCfg(), t), this._init();
                    var e = this.content,
                        i = this.x,
                        r = this.y;
                    n.isNil(e) || this.updateContent(e), this.updatePosition(i, r)
                }
                var e = t.prototype;
                return e.getDefaultCfg = function() { return { x: 0, y: 0, content: "", textStyle: { fontSize: 12, fill: "#fff", textAlign: "center", textBaseline: "middle" }, background: { radius: 1, fill: "rgba(0, 0, 0, 0.65)", padding: [3, 5] }, width: 0, height: 0, className: "" } }, e._init = function() {
                    var t = this.content,
                        e = this.textStyle,
                        i = this.background,
                        a = this.className,
                        o = this.visible,
                        s = new r({ className: a, zIndex: 0, visible: o }),
                        c = s.addShape("Text", { className: a + "-text", zIndex: 1, attrs: n.mix({ text: t, x: 0, y: 0 }, e) }),
                        l = s.addShape("Rect", { className: a + "-bg", zIndex: -1, attrs: n.mix({ x: 0, y: 0, width: 0, height: 0 }, i) });
                    s.sort(), this.container = s, this.textShape = c, this.backgroundShape = l
                }, e._getBBox = function() {
                    var t = this.textShape,
                        e = this.background,
                        i = t.getBBox(),
                        r = n.parsePadding(e.padding),
                        a = i.width + r[1] + r[3],
                        o = i.height + r[0] + r[2];
                    return { x: i.minX - r[3], y: i.minY - r[0], width: a, height: o }
                }, e.updateContent = function(t) {
                    var e = this.textShape,
                        i = this.backgroundShape;
                    if (!n.isNil(t)) {
                        n.isObject(t) || (t = { text: t }), e.attr(t);
                        var r = this._getBBox(),
                            a = r.x,
                            o = r.y,
                            s = r.width,
                            c = r.height,
                            l = this.width || s,
                            u = this.height || c;
                        i.attr({ x: a, y: o, width: l, height: u }), this._width = l, this._height = u, this.content = t.text
                    }
                }, e.updatePosition = function(t, e) {
                    var i = this.container,
                        n = this._getBBox(),
                        r = n.x,
                        a = n.y;
                    i.moveTo(t - r, e - a), this.x = t - r, this.y = e - a
                }, e.getWidth = function() { return this._width }, e.getHeight = function() { return this._height }, e.show = function() { this.container.show() }, e.hide = function() { this.container.hide() }, e.clear = function() {
                    var t = this.container;
                    t.clear(), t.remove(!0), this.container = null, this.textShape = null, this.backgroundShape = null
                }, t
            }();
        t.exports = a
    }, function(t, e, i) {
        var n = i(0),
            r = i(11),
            a = i(1);
        a.guide = n.deepMix({ line: { style: { stroke: "#a3a3a3", lineWidth: 1 }, top: !0 }, text: { style: { fill: "#787878", textAlign: "center", textBaseline: "middle" }, offsetX: 0, offsetY: 0, top: !0 }, rect: { style: { fill: "#fafafa" }, top: !1 }, arc: { style: { stroke: "#a3a3a3" }, top: !0 }, html: { offsetX: 0, offsetY: 0, alignX: "center", alignY: "middle" }, tag: { top: !0, offsetX: 0, offsetY: 0, side: 4, background: { padding: 5, radius: 2, fill: "#1890FF" }, textStyle: { fontSize: 12, fill: "#fff", textAlign: "center", textBaseline: "middle" } }, point: { top: !0, offsetX: 0, offsetY: 0, style: { fill: "#fff", r: 3, lineWidth: 2, stroke: "#1890ff" } } }, a.guide || {});
        var o = function() {
            function t(t) { this.guides = [], this.xScale = null, this.yScales = null, this.guideShapes = [], n.mix(this, t) }
            var e = t.prototype;
            return e._toString = function(t) { return n.isFunction(t) && (t = t(this.xScale, this.yScales)), t = t.toString() }, e._getId = function(t, e) {
                var i = e.id;
                if (!i) {
                    var n = e.type;
                    i = "arc" === n || "line" === n || "rect" === n ? this._toString(e.start) + "-" + this._toString(e.end) : this._toString(e.position)
                }
                return i
            }, e.paint = function(t) {
                var e = this,
                    i = e.chart,
                    r = e.guides,
                    a = e.xScale,
                    o = e.yScales,
                    s = [];
                n.each(r, function(n, r) {
                    n.xScale = a, n.yScales = o;
                    var c;
                    "regionFilter" === n.type ? n.chart = i : c = n.top ? e.frontPlot : e.backPlot, n.coord = t, n.container = c, n.canvas = i.get("canvas");
                    var l = n.render(t, c);
                    if (l) {
                        var u = e._getId(l, n);
                        [].concat(l).forEach(function(t) { t._id = t.get("className") + "-" + u, t.set("index", r), s.push(t) })
                    }
                }), e.guideShapes = s
            }, e.clear = function() { return this.reset(), this.guides = [], this }, e.reset = function() {
                var t = this.guides;
                n.each(t, function(t) { t.remove() })
            }, e._createGuide = function(t, e) {
                var i = n.upperFirst(t),
                    o = new r[i](n.deepMix({}, a.guide[t], e));
                return this.guides.push(o), o
            }, e.line = function(t) { return void 0 === t && (t = {}), this._createGuide("line", t) }, e.text = function(t) { return void 0 === t && (t = {}), this._createGuide("text", t) }, e.arc = function(t) { return void 0 === t && (t = {}), this._createGuide("arc", t) }, e.html = function(t) { return void 0 === t && (t = {}), this._createGuide("html", t) }, e.rect = function(t) { return void 0 === t && (t = {}), this._createGuide("rect", t) }, e.tag = function(t) { return void 0 === t && (t = {}), this._createGuide("tag", t) }, e.point = function(t) { return void 0 === t && (t = {}), this._createGuide("point", t) }, e.regionFilter = function(t) { return void 0 === t && (t = {}), this._createGuide("regionFilter", t) }, t
        }();
        t.exports = {
            init: function(t) {
                var e = new o({ frontPlot: t.get("frontPlot").addGroup({ zIndex: 20, className: "guideContainer" }), backPlot: t.get("backPlot").addGroup({ className: "guideContainer" }) });
                t.set("guideController", e), t.guide = function() { return e }
            },
            afterGeomDraw: function(t) {
                var e = t.get("guideController");
                if (e.guides.length) {
                    var i = t.getXScale(),
                        n = t.getYScales(),
                        r = t.get("coord");
                    e.xScale = i, e.yScales = n, e.chart = t, e.paint(r)
                }
            },
            clear: function(t) { t.get("guideController").clear() },
            repaint: function(t) { t.get("guideController").reset() }
        }
    }, function(t, e, i) {
        function n(t, e) {
            var i = 0;
            switch (e = r.parsePadding(e), t) {
                case "top":
                    i = e[0];
                    break;
                case "right":
                    i = e[1];
                    break;
                case "bottom":
                    i = e[2];
                    break;
                case "left":
                    i = e[3]
            }
            return i
        }
        var r = i(0),
            a = i(98),
            o = i(1),
            s = { itemMarginBottom: 12, itemGap: 10, showTitle: !1, titleStyle: { fontSize: 12, fill: "#808080", textAlign: "start", textBaseline: "top" }, nameStyle: { fill: "#808080", fontSize: 12, textAlign: "start", textBaseline: "middle" }, valueStyle: { fill: "#000000", fontSize: 12, textAlign: "start", textBaseline: "middle" }, unCheckStyle: { fill: "#bfbfbf" }, itemWidth: "auto", wordSpace: 6, selectedMode: "multiple" };
        o.legend = r.deepMix({ common: s, right: r.mix({ position: "right", layout: "vertical" }, s), left: r.mix({ position: "left", layout: "vertical" }, s), top: r.mix({ position: "top", layout: "horizontal" }, s), bottom: r.mix({ position: "bottom", layout: "horizontal" }, s) }, o.legend || {});
        var c = function() {
            function t(t) {
                this.legendCfg = {}, this.enable = !0, this.position = "top", r.mix(this, t);
                var e = this.chart;
                this.canvasDom = e.get("canvas").get("el"), this.clear()
            }
            var e = t.prototype;
            return e.addLegend = function(t, e, i) {
                var n = this,
                    r = n.legendCfg,
                    a = t.field,
                    o = r[a];
                if (!1 === o) return null;
                if (o && o.custom) n.addCustomLegend(a);
                else {
                    var s = r.position || n.position;
                    o && o.position && (s = o.position), t.isCategory && n._addCategoryLegend(t, e, s, i)
                }
            }, e.addCustomLegend = function(t) {
                var e = this,
                    i = e.legendCfg;
                t && i[t] && (i = i[t]);
                var n = i.position || e.position,
                    s = e.legends;
                s[n] = s[n] || [];
                var c = i.items;
                if (!c) return null;
                var l = e.container;
                r.each(c, function(t) { r.isPlainObject(t.marker) ? t.marker.radius = t.marker.radius || 3 : t.marker = { symbol: t.marker || "circle", fill: t.fill, radius: 3 }, t.checked = !!r.isNil(t.checked) || t.checked, t.name = t.name || t.value });
                var u = new a(r.deepMix({}, o.legend[n], i, { maxLength: e._getMaxLength(n), items: c, parent: l }));
                s[n].push(u)
            }, e.clear = function() {
                var t = this.legends;
                r.each(t, function(t) { r.each(t, function(t) { t.clear() }) }), this.legends = {}, this.unBindEvents()
            }, e._isFiltered = function(t, e, i) { var n = !1; return r.each(e, function(e) { if (n = n || t.getText(e) === t.getText(i)) return !1 }), n }, e._getMaxLength = function(t) {
                var e = this.chart,
                    i = r.parsePadding(e.get("appendPadding"));
                return "right" === t || "left" === t ? e.get("height") - (i[0] + i[2]) : e.get("width") - (i[1] + i[3])
            }, e._addCategoryLegend = function(t, e, i, n) {
                var s = this,
                    c = s.legendCfg,
                    l = s.legends,
                    u = s.container,
                    h = s.chart,
                    f = t.field;
                l[i] = l[i] || [];
                var p = "circle";
                c[f] && c[f].marker ? p = c[f].marker : c.marker && (p = c.marker), r.each(e, function(e) { r.isPlainObject(p) ? r.mix(e.marker, p) : e.marker.symbol = p, n && (e.checked = s._isFiltered(t, n, e.dataValue)) }), h.get("legendItems")[f] = e;
                var g = r.deepMix({}, o.legend[i], c[f] || c, { maxLength: s._getMaxLength(i), items: e, field: f, filterVals: n, parent: u });
                g.showTitle && r.deepMix(g, { title: t.alias || t.field });
                var d = new a(g);
                return l[i].push(d), d
            }, e._alignLegend = function(t, e, i) {
                var n = this,
                    a = n.plotRange,
                    o = a.tl,
                    s = a.bl,
                    c = n.chart,
                    l = t.offsetX || 0,
                    u = t.offsetY || 0,
                    h = c.get("width"),
                    f = c.get("height"),
                    p = r.parsePadding(c.get("appendPadding")),
                    g = t.getHeight(),
                    d = t.getWidth(),
                    v = 0,
                    y = 0;
                if ("left" === i || "right" === i) {
                    var m = t.verticalAlign || "middle",
                        x = Math.abs(o.y - s.y);
                    v = "left" === i ? p[3] : h - d - p[1], y = (x - g) / 2 + o.y, "top" === m ? y = o.y : "bottom" === m && (y = s.y - g), e && (y = e.get("y") - g - 12)
                } else {
                    var _ = t.align || "left";
                    if (v = p[3], "center" === _ ? v = h / 2 - d / 2 : "right" === _ && (v = h - (d + p[1])), y = "top" === i ? p[0] + Math.abs(t.container.getBBox().minY) : f - g, e) {
                        var S = e.getWidth();
                        v = e.x + S + 12
                    }
                }
                "bottom" === i && u > 0 && (u = 0), "right" === i && l > 0 && (l = 0), t.moveTo(v + l, y + u)
            }, e.alignLegends = function() {
                var t = this,
                    e = t.legends;
                return r.each(e, function(e, i) {
                    r.each(e, function(n, r) {
                        var a = e[r - 1];
                        t._alignLegend(n, a, i)
                    })
                }), t
            }, e.handleEvent = function(t) {
                var e = this,
                    i = e.chart,
                    n = r.createEvent(t, i),
                    a = function(t, i) {
                        var n = null,
                            a = e.legends;
                        return r.each(a, function(e) {
                            r.each(e, function(e) {
                                var a = e.itemsGroup,
                                    o = e.legendHitBoxes,
                                    s = a.get("children");
                                if (s.length) {
                                    var c = e.x,
                                        l = e.y;
                                    r.each(o, function(r, a) { if (t >= r.x + c && t <= r.x + r.width + c && i >= r.y + l && i <= r.height + r.y + l) return n = { clickedItem: s[a], clickedLegend: e }, !1 })
                                }
                            })
                        }), n
                    }(n.x, n.y);
                if (a && !1 !== a.clickedLegend.clickable) {
                    var o = a.clickedItem,
                        s = a.clickedLegend;
                    if (s.onClick) t.clickedItem = o, s.onClick(t);
                    else if (!s.custom) {
                        var c = o.get("checked"),
                            l = o.get("dataValue"),
                            u = s.filterVals,
                            h = s.field;
                        "single" === s.selectedMode ? i.filter(h, function(t) { return t === l }) : (c ? r.Array.remove(u, l) : u.push(l), i.filter(h, function(t) { return -1 !== u.indexOf(t) })), i.repaint()
                    }
                }
            }, e.bindEvents = function() {
                var t = this.legendCfg.triggerOn || "touchstart",
                    e = r.wrapBehavior(this, "handleEvent");
                r.addEventListener(this.canvasDom, t, e)
            }, e.unBindEvents = function() {
                var t = this.legendCfg.triggerOn || "touchstart",
                    e = r.getWrapBehavior(this, "handleEvent");
                r.removeEventListener(this.canvasDom, t, e)
            }, t
        }();
        t.exports = {
            init: function(t) {
                var e = new c({ container: t.get("backPlot"), plotRange: t.get("plotRange"), chart: t });
                t.set("legendController", e), t.legend = function(t, i) { var n = e.legendCfg; return e.enable = !0, r.isBoolean(t) ? (e.enable = t, n = i || {}) : r.isObject(t) ? n = t : n[t] = i, e.legendCfg = n, this }
            },
            beforeGeomDraw: function(t) {
                var e = t.get("legendController");
                if (!e.enable) return null;
                var i = e.legendCfg;
                if (i && i.custom) e.addCustomLegend();
                else {
                    var a = t.getLegendItems(),
                        o = t.get("scales"),
                        s = t.get("filters");
                    r.each(a, function(t, i) {
                        var n, r = o[i],
                            a = r.values;
                        n = s && s[i] ? a.filter(s[i]) : a.slice(0), e.addLegend(r, t, n)
                    })
                }
                i && !1 !== i.clickable && e.bindEvents();
                var c = e.legends,
                    l = { top: 0, right: 0, bottom: 0, left: 0 };
                r.each(c, function(e, i) {
                    var a = 0;
                    r.each(e, function(t) {
                        var e = t.getWidth(),
                            n = t.getHeight();
                        "top" === i || "bottom" === i ? (a = Math.max(a, n), t.offsetY > 0 && (a += t.offsetY)) : (a = Math.max(a, e), t.offsetX > 0 && (a += t.offsetX))
                    }), l[i] = a + n(i, t.get("appendPadding"))
                }), t.set("legendRange", l)
            },
            afterGeomDraw: function(t) { t.get("legendController").alignLegends() },
            clearInner: function(t) { t.get("legendController").clear(), t.set("legendRange", null) }
        }
    }, function(t, e, i) {
        function n(t, e) { var i = {}; for (var n in e) f.isNumber(t[n]) && t[n] !== e[n] ? i[n] = e[n] : f.isArray(t[n]) && JSON.stringify(t[n]) !== JSON.stringify(e[n]) && (i[n] = e[n]); return i }

        function r(t, e, i) {
            var n, r = t.get("type"),
                a = "geom" + i + "-" + r,
                o = t.getXScale(),
                s = t.getYScale(),
                c = o.field || "x",
                l = s.field || "y",
                u = e[l];
            n = o.isIdentity ? o.value : e[c], a += "interval" === r || "schema" === r ? "-" + n : "line" === r || "area" === r || "path" === r ? "-" + r : o.isCategory ? "-" + n : "-" + n + "-" + u;
            var h = t._getGroupScales();
            return f.each(h, function(t) { var i = t.field; "identity" !== t.type && (a += "-" + e[i]) }), a
        }

        function a(t, e, i) {
            var n = [];
            return f.each(t, function(t, a) {
                var o = t.get("container").get("children"),
                    s = t.get("type"),
                    c = f.isNil(t.get("animateCfg")) ? u(s, e) : t.get("animateCfg");
                !1 !== c && f.each(o, function(e, o) { e.get("className") === s && (e._id = r(t, e.get("origin")._origin, a), e.set("coord", i), e.set("animateCfg", c), e.set("index", o), n.push(e)) }), t.set("shapes", o)
            }), n
        }

        function o(t) {
            for (var e = {}, i = 0, n = t.length; i < n; i++) {
                var r = t[i];
                if (r._id && !r.isClip) {
                    var a = r._id;
                    e[a] = { _id: a, type: r.get("type"), attrs: f.mix({}, r._attrs.attrs), className: r.get("className"), geomType: r.get("className"), index: r.get("index"), coord: r.get("coord"), animateCfg: r.get("animateCfg") }
                }
            }
            return e
        }

        function s(t, e, i, n) { return f.isFunction(n) ? n : f.isString(n) ? v.Action[n] : v.getAnimation(t, e, i) }

        function c(t, e, i) { if (!1 === i || f.isObject(i) && !1 === i[e]) return !1; var n = v.getAnimateCfg(t, e); return i && i[e] ? f.deepMix({}, n, i[e]) : n }

        function l(t, e, i) {
            var r, a, o = [],
                l = [];
            f.each(e, function(e) {
                var i = t[e._id];
                i ? (e.set("cacheShape", i), o.push(e), delete t[e._id]) : l.push(e)
            }), f.each(t, function(t) {
                var e = t.className,
                    n = t.coord,
                    o = t._id,
                    l = t.attrs,
                    u = t.index,
                    h = t.type;
                if (!1 === (a = c(e, "leave", t.animateCfg))) return !0;
                if (r = s(e, n, "leave", a.animation), f.isFunction(r)) {
                    var p = i.addShape(h, { attrs: l, index: u, canvas: i, className: e });
                    p._id = o, r(p, a, n)
                }
            }), f.each(o, function(t) {
                var e = t.get("className");
                if (!1 === (a = c(e, "update", t.get("animateCfg")))) return !0;
                var i = t.get("coord"),
                    o = t.get("cacheShape").attrs,
                    l = n(o, t._attrs.attrs);
                Object.keys(l).length && (r = s(e, i, "update", a.animation), f.isFunction(r) ? r(t, a, i) : (t.attr(o), t.animate().to({ attrs: l, duration: a.duration, easing: a.easing, delay: a.delay }).onEnd(function() { t.set("cacheShape", null) })))
            }), f.each(l, function(t) {
                var e = t.get("className"),
                    i = t.get("coord");
                if (!1 === (a = c(e, "enter", t.get("animateCfg")))) return !0;
                if (r = s(e, i, "enter", a.animation), f.isFunction(r))
                    if ("interval" === e && i.isPolar && i.transposed) {
                        var n = t.get("index"),
                            l = o[n - 1];
                        r(t, a, l)
                    } else r(t, a, i)
            })
        }

        function u(t, e) { if (!t) return null; var i = e.get("animate"); return t.indexOf("guide-tag") > -1 && (t = "guide-tag"), f.isObject(i) ? i[t] : !1 !== i && null }
        var h, f = i(0),
            p = i(27),
            g = i(128),
            d = i(129),
            v = i(99),
            y = i(131),
            m = i(132),
            x = i(15);
        p.prototype.animate = function() { var t = f.mix({}, this.get("attrs")); return new d(this, t, h) }, x.prototype.animate = function(t) { return this.set("animate", t), this }, v.Action = y, v.defaultCfg = { interval: { enter: function(t) { return t.isPolar && t.transposed ? function(t) { t.set("zIndex", -1), t.get("parent").sort() } : y.fadeIn } }, area: { enter: function(t) { return t.isPolar ? null : y.fadeIn } }, line: { enter: function(t) { return t.isPolar ? null : y.fadeIn } }, path: { enter: function(t) { return t.isPolar ? null : y.fadeIn } } };
        var _ = { line: function(t) { return t.isPolar ? m.groupScaleInXY : m.groupWaveIn }, area: function(t) { return t.isPolar ? m.groupScaleInXY : m.groupWaveIn }, path: function(t) { return t.isPolar ? m.groupScaleInXY : m.groupWaveIn }, point: function() { return m.shapesScaleInXY }, interval: function(t) { var e; return t.isPolar ? (e = m.groupScaleInXY, t.transposed && (e = m.groupWaveIn)) : e = t.transposed ? m.groupScaleInX : m.groupScaleInY, e }, schema: function() { return m.groupWaveIn } };
        t.exports = {
            afterCanvasInit: function() {
                (h = new g).play()
            },
            beforeCanvasDraw: function(t) {
                if (!1 !== t.get("animate")) {
                    var e = t.get("isUpdate"),
                        i = t.get("canvas"),
                        n = t.get("coord"),
                        r = t.get("geoms"),
                        h = i.get("caches") || [];
                    0 === h.length && (e = !1);
                    var p = a(r, t, n),
                        g = t.get("axisController"),
                        d = g.frontPlot,
                        y = g.backPlot,
                        x = d.get("children").concat(y.get("children")),
                        S = [];
                    t.get("guideController") && (S = t.get("guideController").guideShapes);
                    var b = [];
                    if (x.concat(S).forEach(function(e) {
                            var i = u(e.get("className"), t);
                            e.set("coord", n), e.set("animateCfg", i), b.push(e), p.push(e)
                        }), i.set("caches", o(p)), e) l(h, p, i);
                    else {
                        var C, P;
                        f.each(r, function(e) {
                            var i = e.get("type"),
                                r = f.isNil(e.get("animateCfg")) ? u(i, t) : e.get("animateCfg");
                            if (!1 !== r)
                                if (C = c(i, "appear", r), P = s(i, n, "appear", C.animation), f.isFunction(P)) {
                                    var a = e.get("shapes");
                                    f.each(a, function(t) { P(t, C, n) })
                                } else if (_[i]) {
                                P = m[C.animation] || _[i](n);
                                var o = e.getYScale(),
                                    l = n.convertPoint({ x: 0, y: o.scale(e.getYMinValue()) }),
                                    h = e.get("container");
                                P && P(h, C, n, l)
                            }
                        }), f.each(b, function(t) {
                            var e = t.get("animateCfg"),
                                i = t.get("className");
                            if (e && e.appear) {
                                var r = v.getAnimateCfg(i, "appear"),
                                    a = f.deepMix({}, r, e.appear),
                                    o = s(i, n, "appear", a.animation);
                                f.isFunction(o) && o(t, a, n)
                            }
                        })
                    }
                }
            },
            afterCanvasDestroyed: function() { h.stop() }
        }
    }, function(t, e, i) {
        var n = i(39).requestAnimationFrame,
            r = "object" == typeof performance && performance.now ? performance : Date,
            a = function() {
                function t() { this.anims = [], this.time = null, this.playing = !1, this.canvas = [] }
                var e = t.prototype;
                return e.play = function() {
                    function t() { e.playing && (n(t), e.update()) }
                    var e = this;
                    e.time = r.now(), e.playing = !0, n(t)
                }, e.stop = function() { this.playing = !1, this.time = null, this.canvas = [] }, e.update = function() {
                    var t = r.now();
                    this.canvas = [];
                    for (var e = 0; e < this.anims.length; e++) {
                        var i = this.anims[e];
                        if (!(t < i.startTime || i.hasEnded)) {
                            var n = i.shape;
                            if (n.get("destroyed")) this.anims.splice(e, 1), e--;
                            else {
                                var a = i.startState,
                                    o = i.endState,
                                    s = i.interpolate,
                                    c = i.duration;
                                t >= i.startTime && !i.hasStarted && (i.hasStarted = !0, i.onStart && i.onStart());
                                var l = (t - i.startTime) / c;
                                if (l = Math.max(0, Math.min(l, 1)), l = i.easing(l), i.onFrame) i.onFrame(l);
                                else
                                    for (var u in s) {
                                        var h = (0, s[u])(l),
                                            f = void 0;
                                        if ("points" === u) { f = []; for (var p = Math.max(a.points.length, o.points.length), g = 0; g < p; g += 2) f.push({ x: h[g], y: h[g + 1] }) } else f = h;
                                        n._attrs.attrs[u] = f, n._attrs.bbox = null
                                    }
                                var d = n.get("canvas"); - 1 === this.canvas.indexOf(d) && this.canvas.push(d), i.onUpdate && i.onUpdate(l), t >= i.endTime && !i.hasEnded && (i.hasEnded = !0, i.onEnd && i.onEnd()), 1 === l && (this.anims.splice(e, 1), e--)
                            }
                        }
                    }
                    this.canvas.map(function(t) { return t.draw(), t }), this.time = r.now()
                }, t
            }();
        t.exports = a
    }, function(t, e, i) {
        function n(t) { for (var e = [], i = 0, n = t.length; i < n; i++) t[i] && (e.push(t[i].x), e.push(t[i].y)); return e }

        function r(t, e) {
            return t = +t, e -= t,
                function(i) { return t + e * i }
        }

        function a(t, e) {
            var i, n = e ? e.length : 0,
                a = t ? Math.min(n, t.length) : 0,
                o = new Array(a),
                s = new Array(n);
            for (i = 0; i < a; ++i) o[i] = r(t[i], e[i]);
            for (; i < n; ++i) s[i] = e[i];
            return function(t) { for (i = 0; i < a; ++i) s[i] = o[i](t); return s }
        }
        var o = i(130),
            s = function() {
                function t(t, e, i) { this.hasStarted = !1, this.hasEnded = !1, this.shape = t, this.source = e, this.timeline = i, this.animate = null }
                var e = t.prototype;
                return e.to = function(t) {
                    void 0 === t && (t = {});
                    var e, i = t.delay || 0,
                        s = t.attrs || {},
                        c = t.duration || 1e3;
                    e = "function" == typeof t.easing ? t.easing : o[t.easing] || o.linear;
                    var l = { shape: this.shape, startTime: this.timeline.time + i, duration: c, easing: e },
                        u = {};
                    for (var h in s) {
                        var f = this.source[h],
                            p = s[h];
                        "points" === h ? (f = n(f), p = n(p), u.points = a(f, p), this.source.points = f, s.points = p) : "matrix" === h ? u.matrix = a(f, p) : u[h] = r(f, p)
                    }
                    return l.interpolate = u, l.startState = this.source, l.endState = s, l.endTime = l.startTime + c, this.timeline.anims.push(l), this.animate = l, this
                }, e.onFrame = function(t) { return this.animate && (this.animate.onFrame = function(e) { t(e) }), this }, e.onStart = function(t) { return this.animate && (this.animate.onStart = function() { t() }), this }, e.onUpdate = function(t) { return this.animate && (this.animate.onUpdate = function(e) { t(e) }), this }, e.onEnd = function(t) { return this.animate && (this.animate.onEnd = function() { t() }), this }, t
            }();
        t.exports = s
    }, function(t, e) {
        var i = {
            linear: function(t) { return t },
            quadraticIn: function(t) { return t * t },
            quadraticOut: function(t) { return t * (2 - t) },
            quadraticInOut: function(t) { return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1) },
            cubicIn: function(t) { return t * t * t },
            cubicOut: function(t) { return --t * t * t + 1 },
            cubicInOut: function(t) { return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2) },
            elasticIn: function(t) {
                var e, i = .1,
                    n = .4;
                return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), !i || i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), -i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n))
            },
            elasticOut: function(t) {
                var e, i = .1,
                    n = .4;
                return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), !i || i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1)
            },
            elasticInOut: function(t) {
                var e, i = .1,
                    n = .4;
                return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), !i || i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), (t *= 2) < 1 ? i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5 : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1)
            },
            backIn: function(t) { var e = 1.70158; return t * t * ((e + 1) * t - e) },
            backOut: function(t) { var e = 1.70158; return (t -= 1) * t * ((e + 1) * t + e) + 1 },
            backInOut: function(t) { var e = 2.5949095; return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2) },
            bounceIn: function(t) { return 1 - i.bounceOut(1 - t) },
            bounceOut: function(t) { return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375 },
            bounceInOut: function(t) { return t < .5 ? .5 * i.bounceIn(2 * t) : .5 * i.bounceOut(2 * t - 1) + .5 }
        };
        t.exports = i
    }, function(t, e, i) {
        var n = i(0),
            r = i(100);
        t.exports = {
            fadeIn: function(t, e) {
                var i = n.isNil(t.attr("fillOpacity")) ? 1 : t.attr("fillOpacity"),
                    a = n.isNil(t.attr("strokeOpacity")) ? 1 : t.attr("strokeOpacity");
                t.attr("fillOpacity", 0), t.attr("strokeOpacity", 0);
                var o = { fillOpacity: i, strokeOpacity: a };
                r.doAnimation(t, o, e)
            }
        }
    }, function(t, e, i) {
        function n(t, e, i, n, r) {
            var o, c, l = a.getCoordInfo(i),
                u = l.start,
                h = l.end,
                f = l.width,
                p = l.height,
                g = new s.Rect({ attrs: { x: u.x, y: h.y, width: f, height: p } });
            "y" === r ? (o = u.x + f / 2, c = n.y < u.y ? n.y : u.y) : "x" === r ? (o = n.x > u.x ? n.x : u.x, c = u.y + p / 2) : "xy" === r && (i.isPolar ? (o = i.center.x, c = i.center.y) : (o = (u.x + h.x) / 2, c = (u.y + h.y) / 2));
            var d = a.getScaledMatrix(g, [o, c], r);
            g.isClip = !0, g.endState = { matrix: d }, g.set("canvas", t.get("canvas")), t.attr("clip", g);
            a.doAnimation(g, g.endState, e, function() { t.attr("clip", null), g.remove(!0) })
        }

        function r(t, e, i) {
            for (var n, r, o, s = t.get("children"), c = 0, l = s.length; c < l; c++) {
                var u = s[c],
                    h = u.getBBox();
                n = (h.minX + h.maxX) / 2, r = (h.minY + h.maxY) / 2, o = a.getScaledMatrix(u, [n, r], i), a.doAnimation(u, { matrix: o }, e)
            }
        }
        var a = i(100),
            o = i(28),
            s = i(5).Shape;
        t.exports = {
            groupWaveIn: function(t, e, i) {
                var n = o.getClip(i);
                n.set("canvas", t.get("canvas")), t.attr("clip", n);
                var r = {};
                if (i.isPolar) {
                    var s = i.startAngle,
                        c = i.endAngle;
                    r.endAngle = c, n.attr("endAngle", s)
                } else {
                    var l = i.start,
                        u = i.end,
                        h = Math.abs(l.x - u.x),
                        f = Math.abs(l.y - u.y);
                    i.isTransposed ? (n.attr("height", 0), r.height = f) : (n.attr("width", 0), r.width = h)
                }
                a.doAnimation(n, r, e, function() { t.attr("clip", null), n.remove(!0) })
            },
            groupScaleInX: function(t, e, i, r) { n(t, e, i, r, "x") },
            groupScaleInY: function(t, e, i, r) { n(t, e, i, r, "y") },
            groupScaleInXY: function(t, e, i, r) { n(t, e, i, r, "xy") },
            shapesScaleInX: function(t, e) { r(t, e, "x") },
            shapesScaleInY: function(t, e) { r(t, e, "y") },
            shapesScaleInXY: function(t, e) { r(t, e, "xy") }
        }
    }, function(t, e, i) {
        var n = i(0),
            r = i(96);
        t.exports = {
            beforeGeomInit: function(t) {
                t.set("limitInPlot", !0);
                var e = t.get("filteredData"),
                    i = t.get("colDefs");
                if (!i) return e;
                var a = t.get("geoms"),
                    o = !1;
                n.each(a, function(t) { if (-1 !== ["area", "line", "path"].indexOf(t.get("type"))) return o = !0, !1 });
                var s = [];
                if (n.each(i, function(t, e) {!o && t && (t.values || t.min || t.max) && s.push(e) }), 0 === s.length) return e;
                var c = [];
                n.each(e, function(t) {
                    var e = !0;
                    n.each(s, function(a) {
                        var o = t[a];
                        if (o) {
                            var s = i[a];
                            if ("timeCat" === s.type) {
                                var c = s.values;
                                n.isNumber(c[0]) && (o = r.toTimeStamp(o))
                            }(s.values && -1 === s.values.indexOf(o) || s.min && o < s.min || s.max && o > s.max) && (e = !1)
                        }
                    }), e && c.push(t)
                }), t.set("filteredData", c)
            }
        }
    }, function(t, e, i) {
        var n = i(101),
            r = i(0);
        t.exports = {
            updateLinearScale: function(t, e, i) {
                var a = this.chart,
                    o = n.getColDef(a, t);
                a.scale(t, r.mix({}, o, { min: e, max: i, nice: !1 }))
            },
            updateCatScale: function(t, e, i, a, o, s) {
                var c = this.chart,
                    l = n.getColDef(c, t);
                c.scale(t, r.mix({}, l, {
                    values: e,
                    ticks: i,
                    scale: function(t) {
                        "timeCat" === this.type && (t = this._toTimeStamp(t));
                        var e, i, n, r = this.rangeMin(),
                            c = this.rangeMax(),
                            l = c - r,
                            u = a.indexOf(t);
                        if (u >= 0 && u < o) e = (i = r > 0 ? -.1 : r - .1) - l, n = u / o;
                        else if (u >= 0 && u > s) i = (e = c < 1 ? 1.1 : c + .1) + l, n = (u - s - 1) / (a.length - 1 - s);
                        else {
                            var h = this.translate(t);
                            n = 1 === this.values.length ? h : h / (this.values.length - 1), e = r, i = c
                        }
                        return e + n * (i - e)
                    },
                    getTicks: function() {
                        var t = this,
                            e = this.ticks,
                            i = [];
                        return r.each(e, function(e) {
                            var n;
                            if (r.isObject(e)) n = e;
                            else {
                                var a = t.scale(e);
                                a = a >= 0 && a <= 1 ? a : NaN, n = { text: r.isString(e) ? e : t.getText(e), value: a, tickValue: e }
                            }
                            i.push(n)
                        }), i
                    }
                }))
            }
        }
    }, function(t, e, i) {
        var n = i(0),
            r = i(101),
            a = ["touchstart", "touchmove", "touchend", "touchStart", "touchMove", "touchEnd"];
        t.exports = {
            _handleMove: function(t) {
                if ("swipe" === t.type && t.deltaTime > 350) return null;
                var e, i, n = this.currentDeltaX,
                    r = this.currentDeltaY,
                    o = this.lastPoint;
                if (-1 !== a.indexOf(t.type)) {
                    var s = t.touches[0];
                    e = s.x - o.x, i = s.y - o.y, this.lastPoint = s
                } else null !== n && null !== r && (e = t.deltaX - n, i = t.deltaY - r, this.currentDeltaX = t.deltaX, this.currentDeltaY = t.deltaY);
                if (Math.abs(e) > 0 || Math.abs(i) > 0) {
                    var c = this._timestamp,
                        l = +new Date;
                    l - c > 16 && (this._doMove(e, i), this._timestamp = l)
                }
            },
            _doMove: function(t, e) {
                var i = this,
                    a = i.mode,
                    o = i.chart,
                    s = i.limitRange,
                    c = o.get("coord"),
                    l = c.start,
                    u = c.end,
                    h = o.get("data");
                if (n.directionEnabled(a, "x") && 0 !== t) {
                    var f = o.getXScale(),
                        p = f.field;
                    s[p] || (s[p] = r.getLimitRange(h, f));
                    var g = u.x - l.x;
                    f.isCategory ? i._handleCatScale(f, t, g) : f.isLinear && i._handleLinearScale(f, t, g, "x");
                    var d = r.getColDef(o, p);
                    i.xRange = r.getFieldRange(d, s[p], f.type)
                }
                if (n.directionEnabled(a, "y") && 0 !== e) {
                    var v = l.y - u.y,
                        y = o.getYScales();
                    n.each(y, function(t) {
                        var n = t.field;
                        s[n] || (s[n] = r.getLimitRange(h, t)), t.isLinear && i._handleLinearScale(t, e, v, "y")
                    });
                    var m = r.getColDef(o, y[0].field);
                    i.yRange = r.getFieldRange(m, s[y[0].field], y[0].type)
                }
                o.repaint()
            },
            _handleLinearScale: function(t, e, i, r) {
                var a = t.field,
                    o = t.min,
                    s = t.max,
                    c = this.limitRange;
                if (o !== c[a].min || s !== c[a].max) {
                    var l = e / i * (s - o),
                        u = "x" === r ? s - l : s + l,
                        h = "x" === r ? o - l : o + l;
                    c[a] && !n.isNil(c[a].min) && h <= c[a].min && (u = s - o + (h = c[a].min)), c[a] && !n.isNil(c[a].max) && u >= c[a].max && (h = (u = c[a].max) - (s - o)), this.updateLinearScale(a, h, u)
                }
            },
            _handleCatScale: function(t, e, i) {
                var n = t.type,
                    r = t.field,
                    a = t.values,
                    o = t.ticks,
                    s = this.limitRange[r],
                    c = s.length - 1,
                    l = a.length,
                    u = i / (l * (this.speed || 1)),
                    h = s.indexOf(a[0]),
                    f = s.indexOf(a[l - 1]),
                    p = h,
                    g = f,
                    d = Math.abs(e / i),
                    v = this.step || Math.max(1, parseInt(d * l));
                if (this._panCumulativeDelta += e, p = this._panCumulativeDelta > u ? Math.max(0, p - v) : this._panCumulativeDelta < -u ? Math.min(c - l + 1, p + v) : p, g = Math.min(c, p + l - 1), p === h && g === f) return null;
                var y = s.slice(p, g + 1),
                    m = null;
                if ("timeCat" === n) {
                    var x = o.length > 2 ? o[1] - o[0] : 864e5;
                    if (this._panCumulativeDelta > u)
                        for (var _ = o[0] - x; _ >= y[0]; _ -= x) o.unshift(_);
                    else if (this._panCumulativeDelta < -u)
                        for (var S = o[o.length - 1] + x; S <= y[y.length - 1]; S += x) o.push(S);
                    m = o
                }
                this.updateCatScale(r, y, m, s, p, g), this._panCumulativeDelta = p !== h ? 0 : this._panCumulativeDelta
            }
        }
    }, function(t, e, i) {
        var n = i(0);
        t.exports = {
            _bindPress: function() {
                var t = this.chart,
                    e = this.hammer,
                    i = this.el,
                    r = this.pressThreshold,
                    a = this.pressTime,
                    o = t.get("tooltipController");
                o && o.enable && (t.set("_closeTooltip", !0), e ? (e.get("press").set({ threshold: r, time: a }), e.on("press", n.wrapBehavior(this, "_handlePress"))) : n.addEventListener(i, "press", n.wrapBehavior(this, "_handlePress")))
            },
            reset: function() {
                var t = this.chart,
                    e = t.get("tooltipController");
                e && (this.pressed = !1, !e.cfg.alwaysShow && t.hideTooltip(), t.set("_closeTooltip", !0))
            },
            _handlePress: function(t) {
                this.pressed = !0;
                var e = t.center || t.touches[0];
                this.chart.set("_closeTooltip", !1), this.chart.showTooltip(e)
            }
        }
    }, , , function(t, e, i) {
        var n = i(44);
        i(102), i(90), i(95), i(111), i(112), i(140);
        var r = i(122),
            a = i(125),
            o = i(126),
            s = i(127),
            c = i(143),
            l = i(144);
        n.Animate = i(99), n.Chart.plugins.register([r, o, a, s, c, l]), i(145), n.Interaction = i(43), t.exports = n
    }, function(t, e, i) { t.exports = { Text: i(120), Line: i(118), Arc: i(116), Rect: i(119), Html: i(117), Tag: i(121), Point: i(141), RegionFilter: i(142) } }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var r = i(0),
            a = i(11),
            o = function(t) {
                function e() { return t.apply(this, arguments) || this }
                n(e, t);
                var i = e.prototype;
                return i._initDefaultCfg = function() { this.type = "point", this.position = null, this.offsetX = 0, this.offsetY = 0, this.style = { fill: "#1890FF", r: 3, lineWidth: 1, stroke: "#fff" } }, i.render = function(t, e) { var i = this.parsePoint(t, this.position); if (!i) return null; var n = e.addShape("Circle", { className: "guide-point", attrs: r.mix({ x: i.x + this.offsetX, y: i.y + this.offsetY }, this.style) }); return this.element = n, n }, e
            }(a);
        a.Point = o, t.exports = o
    }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var r = i(0),
            a = i(11),
            o = i(2).Rect,
            s = function(t) {
                function e() { return t.apply(this, arguments) || this }
                n(e, t);
                var i = e.prototype;
                return i._initDefaultCfg = function() { this.type = "regionFilter", this.start = [], this.end = [], this.color = null, this.style = null }, i.render = function(t) {
                    var e = this.parsePoint(t, this.start),
                        i = this.parsePoint(t, this.end);
                    if (e && i) {
                        var n = new o({ attrs: { x: Math.min(e.x, i.x), y: Math.min(e.y, i.y), width: Math.abs(i.x - e.x), height: Math.abs(i.y - e.y) } });
                        this.clip = n;
                        var a = this.chart,
                            s = this.color,
                            c = this.style || {},
                            l = [];
                        a.get("geoms").map(function(t) {
                            var e = t.get("container"),
                                i = e.get("children"),
                                a = e.addGroup({ zIndex: 10, className: "guide-region-filter" });
                            return i.map(function(t) {
                                if (t.get("isShape")) {
                                    var e = t.get("type"),
                                        i = r.mix({}, t.get("attrs"), c);
                                    s && (i.fill || i.fillStyle) && (i.fill = i.fillStyle = s), s && (i.stroke || i.strokeStyle) && (i.stroke = i.strokeStyle = s);
                                    var n = { attrs: i };
                                    "custom" !== e && "Custom" !== e || (n.createPath = t.get("createPath"), n.calculateBox = t.get("calculateBox")), a.addShape(e, n)
                                }
                                return t
                            }), a.attr("clip", n), e.sort(), l.push(a), t
                        }), this.element = l
                    }
                }, i.remove = function() {
                    var t = this.element;
                    r.each(t, function(t) { t && t.remove(!0) }), this.clip && this.clip.remove(!0)
                }, e
            }(a);
        a.RegionFilter = s, t.exports = s
    }, function(t, e, i) {
        var n = i(101),
            r = i(0),
            a = { mode: "x", xStyle: { backgroundColor: "rgba(202, 215, 239, .2)", fillerColor: "rgba(202, 215, 239, .5)", size: 4, lineCap: "round", offsetX: 0, offsetY: 8 }, yStyle: { backgroundColor: "rgba(202, 215, 239, .2)", fillerColor: "rgba(202, 215, 239, .5)", size: 4, lineCap: "round", offsetX: 8, offsetY: 0 } };
        t.exports = {
            init: function(t) { t.set("_limitRange", {}), t.scrollBar = function(t) {!0 === t ? t = a : r.isObject(t) && (t = r.deepMix({}, a, t)), this.set("_scrollBarCfg", t) } },
            clear: function(t) { t.set("_limitRange", {}) },
            changeData: function(t) { t.set("_limitRange", {}) },
            clearInner: function(t) {
                var e = t.get("_horizontalBar"),
                    i = t.get("_verticalBar");
                e && e.remove(!0), i && i.remove(!0), t.set("_horizontalBar", null), t.set("_verticalBar", null)
            },
            afterGeomDraw: function(t) {
                var e = t.get("_scrollBarCfg");
                if (e) {
                    var i = t.get("data"),
                        a = t.get("plotRange"),
                        o = t.get("backPlot"),
                        s = t.get("canvas").get("height"),
                        c = t.get("_limitRange"),
                        l = e.mode;
                    if (r.directionEnabled(l, "x")) {
                        var u = e.xStyle,
                            h = u.offsetX,
                            f = u.offsetY,
                            p = u.lineCap,
                            g = u.backgroundColor,
                            d = u.fillerColor,
                            v = u.size,
                            y = t.getXScale(),
                            m = c[y.field];
                        m || (m = n.getLimitRange(i, y), c[y.field] = m);
                        var x = n.getFieldRange(y, m, y.type),
                            _ = t.get("_horizontalBar"),
                            S = s - v / 2 + f;
                        _ ? _.get("children")[1].attr({ x1: Math.max(a.bl.x + a.width * x[0] + h, a.bl.x), x2: Math.min(a.bl.x + a.width * x[1] + h, a.br.x) }) : ((_ = o.addGroup({ className: "horizontalBar" })).addShape("line", { attrs: { x1: a.bl.x + h, y1: S, x2: a.br.x + h, y2: S, lineWidth: v, stroke: g, lineCap: p } }), _.addShape("line", { attrs: { x1: Math.max(a.bl.x + a.width * x[0] + h, a.bl.x), y1: S, x2: Math.min(a.bl.x + a.width * x[1] + h, a.br.x), y2: S, lineWidth: v, stroke: d, lineCap: p } }), t.set("_horizontalBar", _))
                    }
                    if (r.directionEnabled(l, "y")) {
                        var b = e.yStyle,
                            C = b.offsetX,
                            P = b.offsetY,
                            w = b.lineCap,
                            M = b.backgroundColor,
                            T = b.fillerColor,
                            A = b.size,
                            D = t.getYScales()[0],
                            k = c[D.field];
                        k || (k = n.getLimitRange(i, D), c[D.field] = k);
                        var I = n.getFieldRange(D, k, D.type),
                            O = t.get("_verticalBar"),
                            E = A / 2 + C;
                        O ? O.get("children")[1].attr({ y1: Math.max(a.tl.y + a.height * I[0] + P, a.tl.y), y2: Math.min(a.tl.y + a.height * I[1] + P, a.bl.y) }) : ((O = o.addGroup({ className: "verticalBar" })).addShape("line", { attrs: { x1: E, y1: a.tl.y + P, x2: E, y2: a.bl.y + P, lineWidth: A, stroke: M, lineCap: w } }), O.addShape("line", { attrs: { x1: E, y1: Math.max(a.tl.y + a.height * I[0] + P, a.tl.y), x2: E, y2: Math.min(a.tl.y + a.height * I[1] + P, a.bl.y), lineWidth: A, stroke: T, lineCap: w } }), t.set("_verticalBar", O))
                    }
                }
            }
        }
    }, function(t, e, i) {
        function n(t, e, i) { return { x: t.x + i * Math.cos(e), y: t.y + i * Math.sin(e) } }

        function r(t, e) { return e < t && (e += 2 * Math.PI), (e + t) / 2 }

        function a(t, e) {
            var i = t.getBBox(),
                n = e.getBBox();
            return Math.max(i.minX, n.minX) <= Math.min(i.maxX, n.minX) && Math.max(i.minY, n.minY) <= Math.min(i.maxY, n.maxY)
        }
        var o = i(0),
            s = i(5).Group,
            c = { anchorOffset: 5, inflectionOffset: 15, sidePadding: 20, lineHeight: 32, adjustOffset: 15, skipOverlapLabels: !1, triggerOn: "touchstart", activeShape: !1, activeStyle: { offset: 1, appendRadius: 8, fillOpacity: .5 }, label1OffsetY: -1, label2OffsetY: 1 },
            l = function() {
                function t(t) {
                    o.mix(this, t);
                    var e = this.chart;
                    this.canvasDom = e.get("canvas").get("el")
                }
                var e = t.prototype;
                return e.renderLabels = function() {
                    var t = this,
                        e = t.chart,
                        i = t.pieLabelCfg,
                        c = t.labelGroup,
                        l = [
                            [],
                            []
                        ],
                        u = e.get("geoms")[0].get("container").get("children"),
                        h = i.anchorOffset,
                        f = i.inflectionOffset,
                        p = i.label1,
                        g = i.label2,
                        d = i.lineHeight,
                        v = i.skipOverlapLabels,
                        y = i.label1OffsetY,
                        m = i.label2OffsetY,
                        x = e.get("coord"),
                        _ = x.center,
                        S = x.circleRadius;
                    u.forEach(function(t) {
                        var i = t._attrs.attrs,
                            a = r(i.startAngle, i.endAngle),
                            c = n(_, a, S + h),
                            u = n(_, a, S + f),
                            d = t.get("origin"),
                            v = d._origin,
                            x = d.color,
                            b = { _anchor: c, _inflection: u, _data: v, x: u.x, y: u.y, r: S + f, fill: x },
                            C = new s({ context: e.get("canvas").get("context"), data: v }),
                            P = { x: 0, y: 0, fontSize: 12, lineHeight: 12, fill: "#808080" };
                        o.isFunction(p) && C.addShape("Text", { attrs: o.mix({ textBaseline: "bottom" }, P, p(v, x)), data: v, offsetY: y }), o.isFunction(g) && C.addShape("Text", { attrs: o.mix({ textBaseline: "top" }, P, g(v, x)), data: v, offsetY: m }), b.textGroup = C, c.x < _.x ? (b._side = "left", l[0].push(b)) : (b._side = "right", l[1].push(b))
                    });
                    var b = [];
                    if (v)
                        for (var C, P = l[1].concat(l[0]), w = 0, M = P.length; w < M; w++) {
                            var T = P[w],
                                A = t._drawLabel(T);
                            C && a(A, C) || (c.add(A), t._drawLabelLine(T), C = A, b.push(A))
                        } else {
                            var D = e.get("height"),
                                k = parseInt(D / d, 10);
                            l.forEach(function(e) {
                                e.length > k && e.splice(k, e.length - k), e.sort(function(t, e) { return t.y - e.y });
                                var i = t._antiCollision(e);
                                b = b.concat(i)
                            })
                        }
                    this.drawnLabels = b
                }, e.bindEvents = function() {
                    var t = this.pieLabelCfg.triggerOn || "touchstart",
                        e = o.wrapBehavior(this, "_handleEvent");
                    o.addEventListener(this.canvasDom, t, e)
                }, e.unBindEvents = function() {
                    var t = this.pieLabelCfg.triggerOn || "touchstart",
                        e = o.getWrapBehavior(this, "_handleEvent");
                    o.removeEventListener(this.canvasDom, t, e)
                }, e.clear = function() { this.labelGroup && this.labelGroup.clear(), this.halo && this.halo.remove(!0), this.lastSelectedData = null, this.drawnLabels = [], this.unBindEvents() }, e._drawLabel = function(t) {
                    var e = this.pieLabelCfg,
                        i = this.chart.get("width"),
                        n = e.sidePadding,
                        r = t.y,
                        a = t.textGroup,
                        o = a.get("children"),
                        s = { textAlign: "left" === t._side ? "left" : "right", x: "left" === t._side ? n : i - n };
                    return o.forEach(function(t) { t.attr(s), t.attr("y", r + t.get("offsetY")) }), a
                }, e._drawLabelLine = function(t, e) {
                    var i = this.chart,
                        n = this.pieLabelCfg,
                        r = this.labelGroup,
                        a = i.get("width"),
                        s = n.sidePadding,
                        c = n.adjustOffset,
                        l = n.lineStyle,
                        u = n.anchorStyle,
                        h = n.skipOverlapLabels,
                        f = t._anchor,
                        p = t._inflection,
                        g = t.fill,
                        d = t.y,
                        v = { x: "left" === t._side ? s : a - s, y: d },
                        y = [f, p, v];
                    if (!h && p.y !== d)
                        if (p.y < d) {
                            var m = p,
                                x = { x: "left" === t._side ? v.x + e + c : v.x - e - c, y: p.y },
                                _ = { x: "left" === t._side ? v.x + e : v.x - e, y: v.y };
                            y = [f, m, x, _, v], ("right" === t._side && x.x < m.x || "left" === t._side && x.x > m.x) && (y = [f, _, v])
                        } else y = [f, { x: p.x, y: d }, v];
                    r.addShape("Polyline", { attrs: o.mix({ points: y, lineWidth: 1, stroke: g }, l) }), r.addShape("Circle", { attrs: o.mix({ x: f.x, y: f.y, r: 2, fill: g }, u) })
                }, e._antiCollision = function(t) {
                    var e, i = this,
                        n = i.chart,
                        r = i.pieLabelCfg,
                        a = n.get("coord"),
                        o = n.get("height"),
                        s = a.center,
                        c = a.circleRadius,
                        l = r.inflectionOffset,
                        u = r.lineHeight,
                        h = s.y - c - l - u,
                        f = !0,
                        p = o,
                        g = 0,
                        d = Number.MIN_VALUE,
                        v = 0,
                        y = t.map(function(t) {
                            var e = t.y;
                            e > g && (g = e), e < d && (d = e);
                            var i = t.textGroup.getBBox().width;
                            return i >= v && (v = i), { size: u, targets: [e - h] }
                        });
                    g - h > p && (p = g - h);
                    for (; f;)
                        for (! function(t) {
                                t.forEach(function(t) {
                                    var e = (Math.min.apply(d, t.targets) + Math.max.apply(d, t.targets)) / 2;
                                    t.pos = Math.min(Math.max(d, e - t.size / 2), p - t.size)
                                })
                            }(y), f = !1, e = y.length; e--;)
                            if (e > 0) {
                                var m = y[e - 1],
                                    x = y[e];
                                m.pos + m.size > x.pos && (m.size += x.size, m.targets = m.targets.concat(x.targets), m.pos + m.size > p && (m.pos = p - m.size), y.splice(e, 1), f = !0)
                            }
                    e = 0, y.forEach(function(i) {
                        var n = h;
                        i.targets.forEach(function() { t[e].y = i.pos + n + u / 2, n += u, e++ })
                    });
                    var _ = [];
                    return t.forEach(function(t) {
                        var e = i._drawLabel(t);
                        i.labelGroup.add(e), i._drawLabelLine(t, v), _.push(e)
                    }), _
                }, e._handleEvent = function(t) {
                    for (var e, i = this, n = i.chart, r = i.drawnLabels, a = i.pieLabelCfg, s = a.onClick, c = a.activeShape, l = o.createEvent(t, n), u = l.x, h = l.y, f = 0, p = r.length; f < p; f++) {
                        var g = r[f],
                            d = g.getBBox();
                        if (u >= d.minX && u <= d.maxX && h >= d.minY && h <= d.maxY) { e = g; break }
                    }
                    var v = n.getSnapRecords({ x: u, y: h });
                    e ? l.data = e.get("data") : v.length && (l.data = v[0]._origin), s && s(l), l.data && c && this._activeShape(l.data)
                }, e._getSelectedShapeByData = function(t) {
                    var e = null,
                        i = this.chart.get("geoms")[0],
                        n = i.get("container").get("children");
                    return o.each(n, function(n) { if (n.get("isShape") && n.get("className") === i.get("type")) { var r = n.get("origin")._origin; if (o.isObjectValueEqual(r, t)) return e = n, !1 } }), e
                }, e._activeShape = function(t) {
                    var e = this.chart,
                        i = this.lastSelectedData,
                        n = this.pieLabelCfg;
                    if (t !== i) {
                        this.lastSelectedData = t;
                        var r = n.activeStyle,
                            a = this._getSelectedShapeByData(t)._attrs.attrs,
                            s = a.x,
                            c = a.y,
                            l = a.startAngle,
                            u = a.endAngle,
                            h = a.r,
                            f = a.fill,
                            p = e.get("frontPlot");
                        this.halo && this.halo.remove(!0);
                        var g = p.addShape("sector", { attrs: o.mix({ x: s, y: c, r: h + r.offset + r.appendRadius, r0: h + r.offset, fill: f, startAngle: l, endAngle: u }, r) });
                        this.halo = g, e.get("canvas").draw()
                    }
                }, t
            }();
        t.exports = {
            init: function(t) {
                var e = t.get("frontPlot").addGroup({ className: "pie-label", zIndex: 0 }),
                    i = new l({ chart: t, labelGroup: e });
                t.set("pieLabelController", i), t.pieLabel = function(t) { return t = o.deepMix({}, c, t), i.pieLabelCfg = t, this }
            },
            afterGeomDraw: function(t) {
                var e = t.get("pieLabelController");
                e.pieLabelCfg && (e.renderLabels(), e.bindEvents())
            },
            clearInner: function(t) {
                var e = t.get("pieLabelController");
                e.pieLabelCfg && e.clear()
            }
        }
    }, function(t, e, i) { t.exports = { Interaction: i(43), PieSelect: i(147), IntervalSelect: i(148), Swipe: i(149), Pan: i(150), Pinch: i(151) } }, function(t, e, i) {
        var n;
        ! function(r, a, o, s) {
            "use strict";

            function c(t, e, i) { return setTimeout(p(t, i), e) }

            function l(t, e, i) { return !!Array.isArray(t) && (u(t, i[e], i), !0) }

            function u(t, e, i) {
                var n;
                if (t)
                    if (t.forEach) t.forEach(e, i);
                    else if (t.length !== s)
                    for (n = 0; n < t.length;) e.call(i, t[n], n, t), n++;
                else
                    for (n in t) t.hasOwnProperty(n) && e.call(i, t[n], n, t)
            }

            function h(t, e, i) {
                var n = "DEPRECATED METHOD: " + e + "\n" + i + " AT \n";
                return function() {
                    var e = new Error("get-stack-trace"),
                        i = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                        a = r.console && (r.console.warn || r.console.log);
                    return a && a.call(r.console, n, i), t.apply(this, arguments)
                }
            }

            function f(t, e, i) {
                var n, r = e.prototype;
                (n = t.prototype = Object.create(r)).constructor = t, n._super = r, i && gt(n, i)
            }

            function p(t, e) { return function() { return t.apply(e, arguments) } }

            function g(t, e) { return typeof t == yt ? t.apply(e ? e[0] || s : s, e) : t }

            function d(t, e) { return t === s ? e : t }

            function v(t, e, i) { u(_(e), function(e) { t.addEventListener(e, i, !1) }) }

            function y(t, e, i) { u(_(e), function(e) { t.removeEventListener(e, i, !1) }) }

            function m(t, e) {
                for (; t;) {
                    if (t == e) return !0;
                    t = t.parentNode
                }
                return !1
            }

            function x(t, e) { return t.indexOf(e) > -1 }

            function _(t) { return t.trim().split(/\s+/g) }

            function S(t, e, i) {
                if (t.indexOf && !i) return t.indexOf(e);
                for (var n = 0; n < t.length;) {
                    if (i && t[n][i] == e || !i && t[n] === e) return n;
                    n++
                }
                return -1
            }

            function b(t) { return Array.prototype.slice.call(t, 0) }

            function C(t, e, i) {
                for (var n = [], r = [], a = 0; a < t.length;) {
                    var o = e ? t[a][e] : t[a];
                    S(r, o) < 0 && n.push(t[a]), r[a] = o, a++
                }
                return i && (n = e ? n.sort(function(t, i) { return t[e] > i[e] }) : n.sort()), n
            }

            function P(t, e) {
                for (var i, n, r = e[0].toUpperCase() + e.slice(1), a = 0; a < dt.length;) {
                    if (i = dt[a], (n = i ? i + r : e) in t) return n;
                    a++
                }
                return s
            }

            function w() { return Ct++ }

            function M(t) { var e = t.ownerDocument || t; return e.defaultView || e.parentWindow || r }

            function T(t, e) {
                var i = this;
                this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) { g(t.options.enable, [t]) && i.handler(e) }, this.init()
            }

            function A(t) { var e = t.options.inputClass; return new(e || (Mt ? j : Tt ? H : wt ? q : z))(t, D) }

            function D(t, e, i) {
                var n = i.pointers.length,
                    r = i.changedPointers.length,
                    a = e & Dt && n - r == 0,
                    o = e & (It | Ot) && n - r == 0;
                i.isFirst = !!a, i.isFinal = !!o, a && (t.session = {}), i.eventType = e, k(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i
            }

            function k(t, e) {
                var i = t.session,
                    n = e.pointers,
                    r = n.length;
                i.firstInput || (i.firstInput = E(e)), r > 1 && !i.firstMultiple ? i.firstMultiple = E(e) : 1 === r && (i.firstMultiple = !1);
                var a = i.firstInput,
                    o = i.firstMultiple,
                    s = o ? o.center : a.center,
                    c = e.center = Y(n);
                e.timeStamp = _t(), e.deltaTime = e.timeStamp - a.timeStamp, e.angle = R(s, c), e.distance = N(s, c), I(i, e), e.offsetDirection = F(e.deltaX, e.deltaY);
                var l = B(e.deltaTime, e.deltaX, e.deltaY);
                e.overallVelocityX = l.x, e.overallVelocityY = l.y, e.overallVelocity = xt(l.x) > xt(l.y) ? l.x : l.y, e.scale = o ? L(o.pointers, n) : 1, e.rotation = o ? X(o.pointers, n) : 0, e.maxPointers = i.prevInput ? e.pointers.length > i.prevInput.maxPointers ? e.pointers.length : i.prevInput.maxPointers : e.pointers.length, O(i, e);
                var u = t.element;
                m(e.srcEvent.target, u) && (u = e.srcEvent.target), e.target = u
            }

            function I(t, e) {
                var i = e.center,
                    n = t.offsetDelta || {},
                    r = t.prevDelta || {},
                    a = t.prevInput || {};
                e.eventType !== Dt && a.eventType !== It || (r = t.prevDelta = { x: a.deltaX || 0, y: a.deltaY || 0 }, n = t.offsetDelta = { x: i.x, y: i.y }), e.deltaX = r.x + (i.x - n.x), e.deltaY = r.y + (i.y - n.y)
            }

            function O(t, e) {
                var i, n, r, a, o = t.lastInterval || e,
                    c = e.timeStamp - o.timeStamp;
                if (e.eventType != Ot && (c > At || o.velocity === s)) {
                    var l = e.deltaX - o.deltaX,
                        u = e.deltaY - o.deltaY,
                        h = B(c, l, u);
                    n = h.x, r = h.y, i = xt(h.x) > xt(h.y) ? h.x : h.y, a = F(l, u), t.lastInterval = e
                } else i = o.velocity, n = o.velocityX, r = o.velocityY, a = o.direction;
                e.velocity = i, e.velocityX = n, e.velocityY = r, e.direction = a
            }

            function E(t) { for (var e = [], i = 0; i < t.pointers.length;) e[i] = { clientX: mt(t.pointers[i].clientX), clientY: mt(t.pointers[i].clientY) }, i++; return { timeStamp: _t(), pointers: e, center: Y(e), deltaX: t.deltaX, deltaY: t.deltaY } }

            function Y(t) { var e = t.length; if (1 === e) return { x: mt(t[0].clientX), y: mt(t[0].clientY) }; for (var i = 0, n = 0, r = 0; r < e;) i += t[r].clientX, n += t[r].clientY, r++; return { x: mt(i / e), y: mt(n / e) } }

            function B(t, e, i) { return { x: e / t || 0, y: i / t || 0 } }

            function F(t, e) { return t === e ? Et : xt(t) >= xt(e) ? t < 0 ? Yt : Bt : e < 0 ? Ft : Nt }

            function N(t, e, i) {
                i || (i = zt);
                var n = e[i[0]] - t[i[0]],
                    r = e[i[1]] - t[i[1]];
                return Math.sqrt(n * n + r * r)
            }

            function R(t, e, i) {
                i || (i = zt);
                var n = e[i[0]] - t[i[0]],
                    r = e[i[1]] - t[i[1]];
                return 180 * Math.atan2(r, n) / Math.PI
            }

            function X(t, e) { return R(e[1], e[0], jt) + R(t[1], t[0], jt) }

            function L(t, e) { return N(e[0], e[1], jt) / N(t[0], t[1], jt) }

            function z() { this.evEl = Wt, this.evWin = Ht, this.pressed = !1, T.apply(this, arguments) }

            function j() { this.evEl = Ut, this.evWin = Zt, T.apply(this, arguments), this.store = this.manager.session.pointerEvents = [] }

            function G() { this.evTarget = $t, this.evWin = Kt, this.started = !1, T.apply(this, arguments) }

            function W(t, e) {
                var i = b(t.touches),
                    n = b(t.changedTouches);
                return e & (It | Ot) && (i = C(i.concat(n), "identifier", !0)), [i, n]
            }

            function H() { this.evTarget = te, this.targetIds = {}, T.apply(this, arguments) }

            function V(t, e) {
                var i = b(t.touches),
                    n = this.targetIds;
                if (e & (Dt | kt) && 1 === i.length) return n[i[0].identifier] = !0, [i, i];
                var r, a, o = b(t.changedTouches),
                    s = [],
                    c = this.target;
                if (a = i.filter(function(t) { return m(t.target, c) }), e === Dt)
                    for (r = 0; r < a.length;) n[a[r].identifier] = !0, r++;
                for (r = 0; r < o.length;) n[o[r].identifier] && s.push(o[r]), e & (It | Ot) && delete n[o[r].identifier], r++;
                return s.length ? [C(a.concat(s), "identifier", !0), s] : void 0
            }

            function q() {
                T.apply(this, arguments);
                var t = p(this.handler, this);
                this.touch = new H(this.manager, t), this.mouse = new z(this.manager, t), this.primaryTouch = null, this.lastTouches = []
            }

            function U(t, e) { t & Dt ? (this.primaryTouch = e.changedPointers[0].identifier, Z.call(this, e)) : t & (It | Ot) && Z.call(this, e) }

            function Z(t) {
                var e = t.changedPointers[0];
                if (e.identifier === this.primaryTouch) {
                    var i = { x: e.clientX, y: e.clientY };
                    this.lastTouches.push(i);
                    var n = this.lastTouches;
                    setTimeout(function() {
                        var t = n.indexOf(i);
                        t > -1 && n.splice(t, 1)
                    }, ee)
                }
            }

            function J(t) {
                for (var e = t.srcEvent.clientX, i = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
                    var r = this.lastTouches[n],
                        a = Math.abs(e - r.x),
                        o = Math.abs(i - r.y);
                    if (a <= ie && o <= ie) return !0
                }
                return !1
            }

            function $(t, e) { this.manager = t, this.set(e) }

            function K(t) {
                if (x(t, se)) return se;
                var e = x(t, ce),
                    i = x(t, le);
                return e && i ? se : e || i ? e ? ce : le : x(t, oe) ? oe : ae
            }

            function Q(t) { this.options = gt({}, this.defaults, t || {}), this.id = w(), this.manager = null, this.options.enable = d(this.options.enable, !0), this.state = he, this.simultaneous = {}, this.requireFail = [] }

            function tt(t) { return t & ve ? "cancel" : t & ge ? "end" : t & pe ? "move" : t & fe ? "start" : "" }

            function et(t) { return t == Nt ? "down" : t == Ft ? "up" : t == Yt ? "left" : t == Bt ? "right" : "" }

            function it(t, e) { var i = e.manager; return i ? i.get(t) : t }

            function nt() { Q.apply(this, arguments) }

            function rt() { nt.apply(this, arguments), this.pX = null, this.pY = null }

            function at() { nt.apply(this, arguments) }

            function ot() { Q.apply(this, arguments), this._timer = null, this._input = null }

            function st() { nt.apply(this, arguments) }

            function ct() { nt.apply(this, arguments) }

            function lt() { Q.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0 }

            function ut(t, e) { return e = e || {}, e.recognizers = d(e.recognizers, ut.defaults.preset), new ht(t, e) }

            function ht(t, e) {
                this.options = gt({}, ut.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = A(this), this.touchAction = new $(this, this.options.touchAction), ft(this, !0), u(this.options.recognizers, function(t) {
                    var e = this.add(new t[0](t[1]));
                    t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
                }, this)
            }

            function ft(t, e) {
                var i = t.element;
                if (i.style) {
                    var n;
                    u(t.options.cssProps, function(r, a) { n = P(i.style, a), e ? (t.oldCssProps[n] = i.style[n], i.style[n] = r) : i.style[n] = t.oldCssProps[n] || "" }), e || (t.oldCssProps = {})
                }
            }

            function pt(t, e) {
                var i = a.createEvent("Event");
                i.initEvent(t, !0, !0), i.gesture = e, e.target.dispatchEvent(i)
            }
            var gt, dt = ["", "webkit", "Moz", "MS", "ms", "o"],
                vt = a.createElement("div"),
                yt = "function",
                mt = Math.round,
                xt = Math.abs,
                _t = Date.now;
            gt = "function" != typeof Object.assign ? function(t) {
                if (t === s || null === t) throw new TypeError("Cannot convert undefined or null to object");
                for (var e = Object(t), i = 1; i < arguments.length; i++) {
                    var n = arguments[i];
                    if (n !== s && null !== n)
                        for (var r in n) n.hasOwnProperty(r) && (e[r] = n[r])
                }
                return e
            } : Object.assign;
            var St = h(function(t, e, i) { for (var n = Object.keys(e), r = 0; r < n.length;)(!i || i && t[n[r]] === s) && (t[n[r]] = e[n[r]]), r++; return t }, "extend", "Use `assign`."),
                bt = h(function(t, e) { return St(t, e, !0) }, "merge", "Use `assign`."),
                Ct = 1,
                Pt = /mobile|tablet|ip(ad|hone|od)|android/i,
                wt = "ontouchstart" in r,
                Mt = P(r, "PointerEvent") !== s,
                Tt = wt && Pt.test(navigator.userAgent),
                At = 25,
                Dt = 1,
                kt = 2,
                It = 4,
                Ot = 8,
                Et = 1,
                Yt = 2,
                Bt = 4,
                Ft = 8,
                Nt = 16,
                Rt = Yt | Bt,
                Xt = Ft | Nt,
                Lt = Rt | Xt,
                zt = ["x", "y"],
                jt = ["clientX", "clientY"];
            T.prototype = { handler: function() {}, init: function() { this.evEl && v(this.element, this.evEl, this.domHandler), this.evTarget && v(this.target, this.evTarget, this.domHandler), this.evWin && v(M(this.element), this.evWin, this.domHandler) }, destroy: function() { this.evEl && y(this.element, this.evEl, this.domHandler), this.evTarget && y(this.target, this.evTarget, this.domHandler), this.evWin && y(M(this.element), this.evWin, this.domHandler) } };
            var Gt = { mousedown: Dt, mousemove: kt, mouseup: It },
                Wt = "mousedown",
                Ht = "mousemove mouseup";
            f(z, T, {
                handler: function(t) {
                    var e = Gt[t.type];
                    e & Dt && 0 === t.button && (this.pressed = !0), e & kt && 1 !== t.which && (e = It), this.pressed && (e & It && (this.pressed = !1), this.callback(this.manager, e, { pointers: [t], changedPointers: [t], pointerType: "mouse", srcEvent: t }))
                }
            });
            var Vt = { pointerdown: Dt, pointermove: kt, pointerup: It, pointercancel: Ot, pointerout: Ot },
                qt = { 2: "touch", 3: "pen", 4: "mouse", 5: "kinect" },
                Ut = "pointerdown",
                Zt = "pointermove pointerup pointercancel";
            r.MSPointerEvent && !r.PointerEvent && (Ut = "MSPointerDown", Zt = "MSPointerMove MSPointerUp MSPointerCancel"), f(j, T, {
                handler: function(t) {
                    var e = this.store,
                        i = !1,
                        n = t.type.toLowerCase().replace("ms", ""),
                        r = Vt[n],
                        a = qt[t.pointerType] || t.pointerType,
                        o = "touch" == a,
                        s = S(e, t.pointerId, "pointerId");
                    r & Dt && (0 === t.button || o) ? s < 0 && (e.push(t), s = e.length - 1) : r & (It | Ot) && (i = !0), s < 0 || (e[s] = t, this.callback(this.manager, r, { pointers: e, changedPointers: [t], pointerType: a, srcEvent: t }), i && e.splice(s, 1))
                }
            });
            var Jt = { touchstart: Dt, touchmove: kt, touchend: It, touchcancel: Ot },
                $t = "touchstart",
                Kt = "touchstart touchmove touchend touchcancel";
            f(G, T, {
                handler: function(t) {
                    var e = Jt[t.type];
                    if (e === Dt && (this.started = !0), this.started) {
                        var i = W.call(this, t, e);
                        e & (It | Ot) && i[0].length - i[1].length == 0 && (this.started = !1), this.callback(this.manager, e, { pointers: i[0], changedPointers: i[1], pointerType: "touch", srcEvent: t })
                    }
                }
            });
            var Qt = { touchstart: Dt, touchmove: kt, touchend: It, touchcancel: Ot },
                te = "touchstart touchmove touchend touchcancel";
            f(H, T, {
                handler: function(t) {
                    var e = Qt[t.type],
                        i = V.call(this, t, e);
                    i && this.callback(this.manager, e, { pointers: i[0], changedPointers: i[1], pointerType: "touch", srcEvent: t })
                }
            });
            var ee = 2500,
                ie = 25;
            f(q, T, {
                handler: function(t, e, i) {
                    var n = "touch" == i.pointerType,
                        r = "mouse" == i.pointerType;
                    if (!(r && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
                        if (n) U.call(this, e, i);
                        else if (r && J.call(this, i)) return;
                        this.callback(t, e, i)
                    }
                },
                destroy: function() { this.touch.destroy(), this.mouse.destroy() }
            });
            var ne = P(vt.style, "touchAction"),
                re = ne !== s,
                ae = "auto",
                oe = "manipulation",
                se = "none",
                ce = "pan-x",
                le = "pan-y",
                ue = function() {
                    if (!re) return !1;
                    var t = {},
                        e = r.CSS && r.CSS.supports;
                    return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(i) { t[i] = !e || r.CSS.supports("touch-action", i) }), t
                }();
            $.prototype = {
                set: function(t) { "compute" == t && (t = this.compute()), re && this.manager.element.style && ue[t] && (this.manager.element.style[ne] = t), this.actions = t.toLowerCase().trim() },
                update: function() { this.set(this.manager.options.touchAction) },
                compute: function() { var t = []; return u(this.manager.recognizers, function(e) { g(e.options.enable, [e]) && (t = t.concat(e.getTouchAction())) }), K(t.join(" ")) },
                preventDefaults: function(t) {
                    var e = t.srcEvent,
                        i = t.offsetDirection;
                    if (this.manager.session.prevented) e.preventDefault();
                    else {
                        var n = this.actions,
                            r = x(n, se) && !ue[se],
                            a = x(n, le) && !ue[le],
                            o = x(n, ce) && !ue[ce];
                        if (r) {
                            var s = 1 === t.pointers.length,
                                c = t.distance < 2,
                                l = t.deltaTime < 250;
                            if (s && c && l) return
                        }
                        if (!o || !a) return r || a && i & Rt || o && i & Xt ? this.preventSrc(e) : void 0
                    }
                },
                preventSrc: function(t) { this.manager.session.prevented = !0, t.preventDefault() }
            };
            var he = 1,
                fe = 2,
                pe = 4,
                ge = 8,
                de = ge,
                ve = 16;
            Q.prototype = {
                defaults: {},
                set: function(t) { return gt(this.options, t), this.manager && this.manager.touchAction.update(), this },
                recognizeWith: function(t) { if (l(t, "recognizeWith", this)) return this; var e = this.simultaneous; return t = it(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this },
                dropRecognizeWith: function(t) { return l(t, "dropRecognizeWith", this) ? this : (t = it(t, this), delete this.simultaneous[t.id], this) },
                requireFailure: function(t) { if (l(t, "requireFailure", this)) return this; var e = this.requireFail; return t = it(t, this), -1 === S(e, t) && (e.push(t), t.requireFailure(this)), this },
                dropRequireFailure: function(t) {
                    if (l(t, "dropRequireFailure", this)) return this;
                    t = it(t, this);
                    var e = S(this.requireFail, t);
                    return e > -1 && this.requireFail.splice(e, 1), this
                },
                hasRequireFailures: function() { return this.requireFail.length > 0 },
                canRecognizeWith: function(t) { return !!this.simultaneous[t.id] },
                emit: function(t) {
                    function e(e) { i.manager.emit(e, t) }
                    var i = this,
                        n = this.state;
                    n < ge && e(i.options.event + tt(n)), e(i.options.event), t.additionalEvent && e(t.additionalEvent), n >= ge && e(i.options.event + tt(n))
                },
                tryEmit: function(t) {
                    if (this.canEmit()) return this.emit(t);
                    this.state = 32
                },
                canEmit: function() {
                    for (var t = 0; t < this.requireFail.length;) {
                        if (!(this.requireFail[t].state & (32 | he))) return !1;
                        t++
                    }
                    return !0
                },
                recognize: function(t) {
                    var e = gt({}, t);
                    if (!g(this.options.enable, [this, e])) return this.reset(), void(this.state = 32);
                    this.state & (de | ve | 32) && (this.state = he), this.state = this.process(e), this.state & (fe | pe | ge | ve) && this.tryEmit(e)
                },
                process: function(t) {},
                getTouchAction: function() {},
                reset: function() {}
            }, f(nt, Q, {
                defaults: { pointers: 1 },
                attrTest: function(t) { var e = this.options.pointers; return 0 === e || t.pointers.length === e },
                process: function(t) {
                    var e = this.state,
                        i = t.eventType,
                        n = e & (fe | pe),
                        r = this.attrTest(t);
                    return n && (i & Ot || !r) ? e | ve : n || r ? i & It ? e | ge : e & fe ? e | pe : fe : 32
                }
            }), f(rt, nt, {
                defaults: { event: "pan", threshold: 10, pointers: 1, direction: Lt },
                getTouchAction: function() {
                    var t = this.options.direction,
                        e = [];
                    return t & Rt && e.push(le), t & Xt && e.push(ce), e
                },
                directionTest: function(t) {
                    var e = this.options,
                        i = !0,
                        n = t.distance,
                        r = t.direction,
                        a = t.deltaX,
                        o = t.deltaY;
                    return r & e.direction || (e.direction & Rt ? (r = 0 === a ? Et : a < 0 ? Yt : Bt, i = a != this.pX, n = Math.abs(t.deltaX)) : (r = 0 === o ? Et : o < 0 ? Ft : Nt, i = o != this.pY, n = Math.abs(t.deltaY))), t.direction = r, i && n > e.threshold && r & e.direction
                },
                attrTest: function(t) { return nt.prototype.attrTest.call(this, t) && (this.state & fe || !(this.state & fe) && this.directionTest(t)) },
                emit: function(t) {
                    this.pX = t.deltaX, this.pY = t.deltaY;
                    var e = et(t.direction);
                    e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
                }
            }), f(at, nt, {
                defaults: { event: "pinch", threshold: 0, pointers: 2 },
                getTouchAction: function() { return [se] },
                attrTest: function(t) { return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & fe) },
                emit: function(t) {
                    if (1 !== t.scale) {
                        var e = t.scale < 1 ? "in" : "out";
                        t.additionalEvent = this.options.event + e
                    }
                    this._super.emit.call(this, t)
                }
            }), f(ot, Q, {
                defaults: { event: "press", pointers: 1, time: 251, threshold: 9 },
                getTouchAction: function() { return [ae] },
                process: function(t) {
                    var e = this.options,
                        i = t.pointers.length === e.pointers,
                        n = t.distance < e.threshold,
                        r = t.deltaTime > e.time;
                    if (this._input = t, !n || !i || t.eventType & (It | Ot) && !r) this.reset();
                    else if (t.eventType & Dt) this.reset(), this._timer = c(function() { this.state = de, this.tryEmit() }, e.time, this);
                    else if (t.eventType & It) return de;
                    return 32
                },
                reset: function() { clearTimeout(this._timer) },
                emit: function(t) { this.state === de && (t && t.eventType & It ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = _t(), this.manager.emit(this.options.event, this._input))) }
            }), f(st, nt, { defaults: { event: "rotate", threshold: 0, pointers: 2 }, getTouchAction: function() { return [se] }, attrTest: function(t) { return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & fe) } }), f(ct, nt, {
                defaults: { event: "swipe", threshold: 10, velocity: .3, direction: Rt | Xt, pointers: 1 },
                getTouchAction: function() { return rt.prototype.getTouchAction.call(this) },
                attrTest: function(t) { var e, i = this.options.direction; return i & (Rt | Xt) ? e = t.overallVelocity : i & Rt ? e = t.overallVelocityX : i & Xt && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && i & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && xt(e) > this.options.velocity && t.eventType & It },
                emit: function(t) {
                    var e = et(t.offsetDirection);
                    e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
                }
            }), f(lt, Q, {
                defaults: { event: "tap", pointers: 1, taps: 1, interval: 300, time: 250, threshold: 9, posThreshold: 10 },
                getTouchAction: function() { return [oe] },
                process: function(t) {
                    var e = this.options,
                        i = t.pointers.length === e.pointers,
                        n = t.distance < e.threshold,
                        r = t.deltaTime < e.time;
                    if (this.reset(), t.eventType & Dt && 0 === this.count) return this.failTimeout();
                    if (n && r && i) {
                        if (t.eventType != It) return this.failTimeout();
                        var a = !this.pTime || t.timeStamp - this.pTime < e.interval,
                            o = !this.pCenter || N(this.pCenter, t.center) < e.posThreshold;
                        if (this.pTime = t.timeStamp, this.pCenter = t.center, o && a ? this.count += 1 : this.count = 1, this._input = t, 0 === this.count % e.taps) return this.hasRequireFailures() ? (this._timer = c(function() { this.state = de, this.tryEmit() }, e.interval, this), fe) : de
                    }
                    return 32
                },
                failTimeout: function() { return this._timer = c(function() { this.state = 32 }, this.options.interval, this), 32 },
                reset: function() { clearTimeout(this._timer) },
                emit: function() { this.state == de && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input)) }
            }), ut.VERSION = "2.0.7", ut.defaults = {
                domEvents: !1,
                touchAction: "compute",
                enable: !0,
                inputTarget: null,
                inputClass: null,
                preset: [
                    [st, { enable: !1 }],
                    [at, { enable: !1 },
                        ["rotate"]
                    ],
                    [ct, { direction: Rt }],
                    [rt, { direction: Rt },
                        ["swipe"]
                    ],
                    [lt],
                    [lt, { event: "doubletap", taps: 2 },
                        ["tap"]
                    ],
                    [ot]
                ],
                cssProps: { userSelect: "none", touchSelect: "none", touchCallout: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)" }
            };
            ht.prototype = {
                set: function(t) { return gt(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this },
                stop: function(t) { this.session.stopped = t ? 2 : 1 },
                recognize: function(t) {
                    var e = this.session;
                    if (!e.stopped) {
                        this.touchAction.preventDefaults(t);
                        var i, n = this.recognizers,
                            r = e.curRecognizer;
                        (!r || r && r.state & de) && (r = e.curRecognizer = null);
                        for (var a = 0; a < n.length;) i = n[a], 2 === e.stopped || r && i != r && !i.canRecognizeWith(r) ? i.reset() : i.recognize(t), !r && i.state & (fe | pe | ge) && (r = e.curRecognizer = i), a++
                    }
                },
                get: function(t) {
                    if (t instanceof Q) return t;
                    for (var e = this.recognizers, i = 0; i < e.length; i++)
                        if (e[i].options.event == t) return e[i];
                    return null
                },
                add: function(t) { if (l(t, "add", this)) return this; var e = this.get(t.options.event); return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t },
                remove: function(t) {
                    if (l(t, "remove", this)) return this;
                    if (t = this.get(t)) {
                        var e = this.recognizers,
                            i = S(e, t); - 1 !== i && (e.splice(i, 1), this.touchAction.update())
                    }
                    return this
                },
                on: function(t, e) { if (t !== s && e !== s) { var i = this.handlers; return u(_(t), function(t) { i[t] = i[t] || [], i[t].push(e) }), this } },
                off: function(t, e) { if (t !== s) { var i = this.handlers; return u(_(t), function(t) { e ? i[t] && i[t].splice(S(i[t], e), 1) : delete i[t] }), this } },
                emit: function(t, e) { this.options.domEvents && pt(t, e); var i = this.handlers[t] && this.handlers[t].slice(); if (i && i.length) { e.type = t, e.preventDefault = function() { e.srcEvent.preventDefault() }; for (var n = 0; n < i.length;) i[n](e), n++ } },
                destroy: function() { this.element && ft(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null }
            }, gt(ut, { INPUT_START: Dt, INPUT_MOVE: kt, INPUT_END: It, INPUT_CANCEL: Ot, STATE_POSSIBLE: he, STATE_BEGAN: fe, STATE_CHANGED: pe, STATE_ENDED: ge, STATE_RECOGNIZED: de, STATE_CANCELLED: ve, STATE_FAILED: 32, DIRECTION_NONE: Et, DIRECTION_LEFT: Yt, DIRECTION_RIGHT: Bt, DIRECTION_UP: Ft, DIRECTION_DOWN: Nt, DIRECTION_HORIZONTAL: Rt, DIRECTION_VERTICAL: Xt, DIRECTION_ALL: Lt, Manager: ht, Input: T, TouchAction: $, TouchInput: H, MouseInput: z, PointerEventInput: j, TouchMouseInput: q, SingleTouchInput: G, Recognizer: Q, AttrRecognizer: nt, Tap: lt, Pan: rt, Swipe: ct, Pinch: at, Rotate: st, Press: ot, on: v, off: y, each: u, merge: bt, extend: St, assign: gt, inherit: f, bindFn: p, prefixed: P }), (void 0 !== r ? r : "undefined" != typeof self ? self : {}).Hammer = ut, (n = function() { return ut }.call(e, i, e, t)) !== s && (t.exports = n)
        }(window, document)
    }, function(t, e, i) {
        function n(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }

        function r(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var a = i(0),
            o = i(43),
            s = i(15),
            c = function(t) {
                function e(e, i) {
                    var r, o = n(r = t.call(this, e, i) || this);
                    i.registerPlugins({ clearInner: function() { o.halo && o.halo.remove(!0), o.selected = !1, o.selectedShape = null, o.lastShape = null, o.halo = null, o.defaultSelected = null } });
                    var s = o.defaultSelected;
                    if (a.isObject(s)) {
                        var c = o._getSelectedShapeByData(s);
                        c && o._selectedShape(c), r.canvas.draw()
                    }
                    return r
                }
                r(e, t);
                var i = e.prototype;
                return i.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return e = a.mix({}, e, { startEvent: "tap", processEvent: null, animate: !1, offset: 1, appendRadius: 8, style: { fillOpacity: .5 }, cancelable: !0, defaultSelected: null }), (a.isWx || a.isMy) && (e.startEvent = "touchstart", e.endEvent = "touchend"), e }, i._getSelectedShapeByData = function(t) {
                    var e = null,
                        i = this.chart.get("geoms")[0],
                        n = i.get("container").get("children");
                    return a.each(n, function(n) { if (n.get("isShape") && n.get("className") === i.get("type")) { var r = n.get("origin")._origin; if (a.isObjectValueEqual(r, t)) return e = n, !1 } }), e
                }, i._selectedShape = function(t) {
                    var e = this.offset,
                        i = this.style,
                        n = this.appendRadius,
                        r = this.chart;
                    this.lastShape = t;
                    var o = t._attrs.attrs,
                        s = o.x,
                        c = o.y,
                        l = o.startAngle,
                        u = o.endAngle,
                        h = o.r,
                        f = o.fill,
                        p = r.get("frontPlot").addShape("sector", { attrs: a.mix({ x: s, y: c, r: h + e + n, r0: h + e, fill: f, startAngle: l, endAngle: u }, i) });
                    this.halo = p;
                    var g = this.animate;
                    g && (!0 === g && (g = { duration: 300 }), p.attr("r", h + e), p.animate().to(a.mix({ attrs: { r: h + e + n } }, g)))
                }, i.start = function(t) {
                    var e = this.chart;
                    "tap" === t.type && (t.clientX = t.center.x, t.clientY = t.center.y);
                    var i = a.createEvent(t, e),
                        n = i.x,
                        r = i.y;
                    this.halo && this.halo.remove(!0);
                    var o = e.getSnapRecords({ x: n, y: r });
                    if (!o.length) return this.selected = !1, void(this.selectedShape = null);
                    var s = o[0]._origin,
                        c = this._getSelectedShapeByData(s),
                        l = this.lastShape;
                    if (this.selectedShape = c, this.selected = !0, c === l) {
                        if (!this.cancelable) return;
                        this.halo && this.halo.remove(!0), this.lastShape = null, this.selected = !1
                    } else this._selectedShape(c);
                    this.canvas.draw()
                }, i.end = function(t) {
                    var e = this.selectedShape;
                    e && !e.get("destroyed") && (t.data = e.get("origin")._origin, t.shapeInfo = e.get("origin"), t.shape = e, t.selected = !!this.selected)
                }, e
            }(o);
        s.registerInteraction("pie-select", c), t.exports = c
    }, function(t, e, i) {
        function n(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var r = i(0),
            a = i(28),
            o = i(43),
            s = i(15),
            c = function(t) {
                function e(e, i) {
                    var n, a = (n = t.call(this, e, i) || this).defaultSelected;
                    if (r.isObject(a)) {
                        var o = n._selectShapesByData(a),
                            s = o.selectedShape,
                            c = o.unSelectedShapes;
                        s && n._selectShapes(s, c), n.selectedShape = s
                    }
                    return n
                }
                n(e, t);
                var i = e.prototype;
                return i.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return e = r.mix({}, e, { startEvent: "tap", processEvent: null, selectAxis: !0, selectAxisStyle: { fontWeight: "bold" }, mode: "shape", selectStyle: { fillOpacity: 1 }, unSelectStyle: { fillOpacity: .4 }, cancelable: !0, defaultSelected: null }), (r.isWx || r.isMy) && (e.startEvent = "touchstart", e.endEvent = "touchend"), e }, i._getIntervalShapes = function() {
                    var t = [];
                    return this.chart.get("geoms").forEach(function(e) {
                        if ("interval" === e.get("type")) {
                            var i = e.get("container");
                            t = t.concat(i.get("children"))
                        }
                    }), t
                }, i._resetShape = function(t) {
                    var e = t.get("_originAttrs");
                    e && (t._attrs.attrs = e, t.set("_originAttrs", null))
                }, i._setEventData = function(t) {
                    var e = this.selectedShape;
                    e && !e.get("destroyed") && (t.data = e.get("origin")._origin, t.shapeInfo = e.get("origin"), t.shape = e, t.selected = !!e.get("_selected"))
                }, i._selectShapesByData = function(t) {
                    var e = this._getIntervalShapes(),
                        i = null,
                        n = [];
                    return r.each(e, function(e) {
                        if (e.get("isShape") && "interval" === e.get("className")) {
                            var a = e.get("origin")._origin;
                            r.isObjectValueEqual(a, t) ? i = e : n.push(e)
                        }
                    }), { selectedShape: i, unSelectedShapes: n }
                }, i._selectShapes = function(t, e) {
                    var i = this.selectStyle,
                        n = this.unSelectStyle,
                        a = this.selectAxisStyle,
                        o = this.chart;
                    if (!t.get("_originAttrs")) {
                        var s = Object.assign({}, t.attr());
                        t.set("_originAttrs", s)
                    }
                    if (t.attr(i), r.each(e, function(t) {
                            if (t.get("_originAttrs")) t.attr(t.get("_originAttrs"));
                            else {
                                var e = Object.assign({}, t.attr());
                                t.set("_originAttrs", e)
                            }
                            t.set("_selected", !1), n && t.attr(n)
                        }), t.set("_selected", !0), this.selectAxis) {
                        this.selectedAxisShape && this._resetShape(this.selectedAxisShape);
                        var c, l = o.getXScale(),
                            u = t.get("origin")._origin,
                            h = o.get("axisController"),
                            f = h.frontPlot,
                            p = h.backPlot;
                        r.each(f.get("children").concat(p.get("children")), function(t) { if (t.get("value") === l.scale(u[l.field])) return c = t, !1 }), this.selectedAxisShape = c, c.set("_originAttrs", Object.assign({}, c.attr())), c.attr(a)
                    }
                    this.canvas.draw()
                }, i.reset = function() {
                    var t = this;
                    if (t.selectedShape) {
                        var e = t._getIntervalShapes();
                        r.each(e, function(e) { t._resetShape(e), e.set("_selected", !1) }), t.selectedAxisShape && t._resetShape(t.selectedAxisShape), t.canvas.draw(), t.selectedShape = null, t.selectedAxisShape = null
                    }
                }, i.start = function(t) {
                    var e = this.chart;
                    "tap" === t.type && (t.clientX = t.center.x, t.clientY = t.center.y);
                    var i, n = r.createEvent(t, e),
                        o = n.x,
                        s = n.y,
                        c = this.mode,
                        l = this._getIntervalShapes(),
                        u = [];
                    if ("shape" === c) {
                        var h = e.get("plotRange");
                        if (!a.isPointInPlot({ x: o, y: s }, h)) return void this.reset();
                        r.each(l, function(t) {
                            var e = t.getBBox();
                            o >= e.x && o <= e.x + e.width && s >= e.y && s <= e.height + e.y ? i = t : u.push(t)
                        })
                    } else if ("range" === c) {
                        var f = e.getSnapRecords({ x: o, y: s });
                        if (!f.length) return void this.reset();
                        var p = f[0]._origin,
                            g = this._selectShapesByData(p);
                        i = g.selectedShape, u = g.unSelectedShapes
                    }
                    if (i)
                        if (this.selectedShape = i, i.get("_selected")) {
                            if (!this.cancelable) return void this._setEventData(t);
                            this.reset()
                        } else this._selectShapes(i, u);
                    else this.reset();
                    this._setEventData(t)
                }, i.end = function(t) { this._setEventData(t) }, e
            }(o);
        s.registerInteraction("interval-select", c), t.exports = c
    }, function(t, e, i) {
        function n(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }

        function r(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var a = i(0),
            o = i(43),
            s = i(15),
            c = i(133),
            l = i(135),
            u = i(134),
            h = function(t) {
                function e(e, i) {
                    var r, o = n(r = t.call(this, e, i) || this),
                        s = o.hammer,
                        h = o.threshold,
                        f = o.velocity;
                    return s && s.get("swipe").set({ direction: 6, threshold: h, velocity: f }), i.registerPlugins([c, { changeData: function() { o.limitRange = {} }, clear: function() { o.limitRange = {} } }]), o.mode = "x", a.mix(o, u, l), r
                }
                r(e, t);
                var i = e.prototype;
                return i.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return e = a.mix({}, e, { startEvent: "touchstart", processEvent: "swipe", endEvent: "touchend", currentDeltaX: null, threshold: 10, velocity: .3, limitRange: {}, _timestamp: 0, _panCumulativeDelta: 0, speed: 5 }) }, i.process = function(t) { this.currentDeltaX = 0, this._handleMove(t) }, i.end = function() { this.currentDeltaX = null, this._panCumulativeDelta = 0 }, e
            }(o);
        s.registerInteraction("swipe", h), t.exports = h
    }, function(t, e, i) {
        function n(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }

        function r(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var a = i(0),
            o = i(43),
            s = i(15),
            c = i(133),
            l = i(135),
            u = i(136),
            h = i(134),
            f = function(t) {
                function e(e, i) {
                    var r, o = n(r = t.call(this, e, i) || this),
                        s = o.hammer,
                        f = o.panThreshold;
                    return s && s.get("pan").set({ threshold: f }), i.registerPlugins([c, { changeData: function() { o.limitRange = {} }, clear: function() { o.limitRange = {} } }]), a.mix(n(r), h, l, u), r._bindPress(), r
                }
                r(e, t);
                var i = e.prototype;
                return i.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return e = a.mix({}, e, { startEvent: "panstart", processEvent: "panmove", endEvent: "panend", resetEvent: "touchend", mode: "x", panThreshold: 10, pressThreshold: 9, pressTime: 251, currentDeltaX: null, currentDeltaY: null, limitRange: {}, _timestamp: 0, lastPoint: null, _panCumulativeDelta: 0, speed: 5 }), (a.isWx || a.isMy) && (e.startEvent = "touchstart", e.processEvent = "touchmove", e.endEvent = "touchend"), e }, i.start = function(t) { this.pressed || (this.currentDeltaX = 0, this.currentDeltaY = 0, "touchstart" !== t.type && "touchStart" !== t.type || (this.lastPoint = t.touches[0]), this._handleMove(t)) }, i.process = function(t) { this.pressed || this._handleMove(t) }, i.end = function() { this.pressed || (this.currentDeltaX = null, this.currentDeltaY = null, this.lastPoint = null, this._panCumulativeDelta = 0) }, e
            }(o);
        s.registerInteraction("pan", f), t.exports = f
    }, function(t, e, i) {
        function n(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t }

        function r(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e }
        var a = i(0),
            o = i(101),
            s = i(43),
            c = i(15),
            l = i(133),
            u = i(136),
            h = i(134),
            f = function(t) {
                function e(e, i) { var r, o = n(r = t.call(this, e, i) || this); return o.hammer.get("pinch").set({ enable: !0 }), i.registerPlugins([l, { changeData: function() { o.limitRange = {}, o.originTicks = null }, clear: function() { o.limitRange = {}, o.originTicks = null } }]), a.mix(o, u, h), o._bindPress(), r }
                r(e, t);
                var i = e.prototype;
                return i.getDefaultCfg = function() { var e = t.prototype.getDefaultCfg.call(this); return a.mix({}, e, { startEvent: "pinchstart", processEvent: "pinch", endEvent: "pinchend", resetEvent: "touchend", pressThreshold: 9, pressTime: 251, mode: "x", currentPinchScaling: null, originValues: null, minScale: null, maxScale: null, limitRange: {}, sensitivity: 1, _pinchCumulativeDelta: 0, _timestamp: 0 }) }, i.start = function() { this.pressed || (this.currentPinchScaling = 1) }, i.process = function(t) { this.pressed || this._handlePinch(t) }, i.end = function(t) { this.pressed || (this._handlePinch(t), this.currentPinchScaling = null, this.pinchCumulativeDelta = 0) }, i._handlePinch = function(t) {
                    var e, i = 1 / this.currentPinchScaling * t.scale,
                        n = t.target.getBoundingClientRect(),
                        r = { x: t.center.x - n.left, y: t.center.y - n.top },
                        a = Math.abs(t.pointers[0].clientX - t.pointers[1].clientX),
                        o = Math.abs(t.pointers[0].clientY - t.pointers[1].clientY),
                        s = a / o;
                    e = s > .3 && s < 1.7 ? "xy" : a > o ? "x" : "y";
                    var c = this._timestamp,
                        l = +new Date;
                    l - c > 16 && (this._doZoom(i, r, e), this._timestamp = l), this.currentPinchScaling = t.scale
                }, i._doZoom = function(t, e, i) {
                    var n, r = this,
                        s = r.mode,
                        c = r.chart,
                        l = r.limitRange;
                    n = "xy" === s && void 0 !== i ? i : "xy";
                    var u = c.get("data");
                    if (a.directionEnabled(s, "x") && a.directionEnabled(n, "x")) {
                        var h = c.getXScale(),
                            f = h.field;
                        l[f] || (l[f] = o.getLimitRange(u, h)), h.isCategory ? r._zoomCatScale(h, t, e) : h.isLinear && r._zoomLinearScale(h, t, e, "x");
                        var p = o.getColDef(c, f);
                        this.xRange = o.getFieldRange(p, l[f], h.type)
                    }
                    if (a.directionEnabled(s, "y") && a.directionEnabled(n, "y")) {
                        var g = c.getYScales();
                        a.each(g, function(i) {
                            var n = i.field;
                            l[n] || (l[n] = o.getLimitRange(u, i)), i.isLinear && r._zoomLinearScale(i, t, e, "y")
                        });
                        var d = o.getColDef(c, g[0].field);
                        this.yRange = o.getFieldRange(d, l[g[0].field], g[0].type)
                    }
                    c.repaint()
                }, i._zoomLinearScale = function(t, e, i, n) {
                    var r = this.chart,
                        a = t.min,
                        o = t.max,
                        s = t.field,
                        c = o - a,
                        l = this.limitRange,
                        u = l[s].max - l[s].min,
                        h = r.get("coord"),
                        f = c * (e - 1);
                    if (this.minScale && e < 1) {
                        var p = u / this.minScale;
                        f = Math.max(c - p, f)
                    }
                    if (this.maxScale && e >= 1) {
                        var g = u / this.maxScale;
                        f = Math.min(c - g, f)
                    }
                    var d = h.invertPoint(i),
                        v = "x" === n ? d.x : d.y,
                        y = o - f * (1 - v),
                        m = a + f * v;
                    this.updateLinearScale(s, m, y)
                }, i._zoomCatScale = function(t, e, i) {
                    var n = this._pinchCumulativeDelta,
                        r = this.sensitivity;
                    n = e > 1 ? n + 1 : n - 1, this._pinchCumulativeDelta = n;
                    var a = t.field,
                        o = t.values,
                        s = this.chart.get("coord");
                    this.originTicks || (this.originTicks = t.ticks);
                    var c = this.limitRange[a],
                        l = c.length,
                        u = this.minScale || 1,
                        h = this.maxScale || 5,
                        f = parseInt(l / h),
                        p = parseInt(l / u),
                        g = o.length;
                    if (n > 0 && g <= f) return null;
                    if (n < 0 && g >= p) return null;
                    var d = l - 1,
                        v = o[0],
                        y = o[g - 1],
                        m = c.indexOf(v),
                        x = c.indexOf(y),
                        _ = (s.start.x + s.end.x) / 2,
                        S = i.x;
                    if (Math.abs(n) > r) {
                        var b = Math.max(1, parseInt(g * Math.abs(e - 1)));
                        n < 0 ? (S >= _ ? m <= 0 ? x = Math.min(d, x + b) : m = Math.max(0, m - b) : S < _ && (x >= d ? m = Math.max(0, m - b) : x = Math.min(d, x + b)), this._pinchCumulativeDelta = 0) : n > 0 && (S >= _ ? m = m < x ? m = Math.min(x, m + b) : m : S < _ && (x = x > m ? x = Math.max(m, x - b) : x), this._pinchCumulativeDelta = 0);
                        var C = c.slice(m, x + 1);
                        this.updateCatScale(a, C, this.originTicks, c, m, x)
                    }
                }, e
            }(s);
        c.registerInteraction("pinch", f), t.exports = f
    }])
});