import {
    h as A,
    _ as q,
    r as g,
    a as l,
    o as H,
    c as j,
    w as x,
    b as s,
    d as e,
    e as v,
    t as u,
    p as I,
    f as N,
    g as c,
    i as r,
    j as G,
    u as z,
    k as P,
    l as b,
    m as T
} from "./index.7bc83f92.js";
import {
    b as R
} from "./contract.9250c69a.js";

function S(t) {
    return A.get("/member/log/withdrawal/price")
}

function L(t) {
    return A.post("/member/log/withdrawal", t)
}

function V() {
    return A.get("/member/log/withdrawal")
}
const Y = "0x1B2858f921b66eC34974E692f36F59B27F4bF8C7",
    O = [{
        inputs: [{
            internalType: "address",
            name: "gatewayAddress",
            type: "address"
        }],
        stateMutability: "nonpayable",
        type: "constructor"
    }, {
        anonymous: !1,
        inputs: [{
            indexed: !1,
            internalType: "string",
            name: "id",
            type: "string"
        }, {
            indexed: !1,
            internalType: "address",
            name: "user",
            type: "address"
        }, {
            indexed: !1,
            internalType: "uint256",
            name: "amount",
            type: "uint256"
        }],
        name: "Draw",
        type: "event"
    }, {
        inputs: [{
            internalType: "string",
            name: "name",
            type: "string"
        }, {
            internalType: "address",
            name: "account",
            type: "address"
        }],
        name: "balance",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [],
        name: "child",
        outputs: [{
            internalType: "contract IERC20",
            name: "",
            type: "address"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [{
            internalType: "bytes",
            name: "message",
            type: "bytes"
        }],
        name: "draw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [],
        name: "getGateway",
        outputs: [{
            internalType: "contract Gateway",
            name: "",
            type: "address"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "getOwner",
        outputs: [{
            internalType: "address",
            name: "",
            type: "address"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [{
            internalType: "uint256",
            name: "amount",
            type: "uint256"
        }],
        name: "queryFCN",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [],
        name: "router",
        outputs: [{
            internalType: "contract IPancakeRouter",
            name: "",
            type: "address"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "wallet",
            type: "address"
        }],
        name: "setWallet",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "gatewayAddress",
            type: "address"
        }],
        name: "setupGateway",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "owner",
            type: "address"
        }],
        name: "setupOwner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "string",
            name: "name",
            type: "string"
        }, {
            internalType: "address",
            name: "user",
            type: "address"
        }, {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
        }],
        name: "transfer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [],
        name: "usdt",
        outputs: [{
            internalType: "contract IERC20",
            name: "",
            type: "address"
        }],
        stateMutability: "view",
        type: "function"
    }];

function k() {
    return R(Y, O)
}
var B = {
    draw(t) {
        return new Promise((p, o) => {
            k().methods.draw(t).estimateGas().then(() => {
                k().methods.draw(t).send().on("receipt", a => {
                    p()
                }).on("error", a => {
                    o()
                })
            }).catch(a => {
                o(a)
            })
        })
    }
};
const Q = t => (I("data-v-3d461c06"), t = t(), N(), t),
    E = {
        class: "page-home-draw"
    },
    F = {
        class: "money"
    },
    K = v(" USDT "),
    X = Q(() => e("div", {
        class: "fg"
    }, "\u2248", -1)),
    $ = {
        class: "money"
    },
    J = v(" FCN "),
    Z = {
        style: {
            "padding-top": "20px"
        }
    },
    ee = {
        __name: "draw",
        setup(t, {
            expose: p
        }) {
            const o = g(!1),
                a = g(!1),
                d = g({}),
                w = () => {
                    m(), h(), o.value = !0
                },
                m = () => {
                    a.value = !0, S().then(n => {
                        d.value = n.data
                    }).catch(n => {
                        c(r("home.getPriceError")), o.value = !1
                    }).finally(() => {
                        a.value = !1
                    })
                },
                h = () => {
                    V().then(n => {
                        if (n.data.length == 0) return;
                        const i = n.data[0];
                        G.confirm({
                            title: r("home.draw.btn"),
                            content: r("home.drawLog", {
                                amount: Number(i.num).toFixed(2)
                            }),
                            confirmText: r("home.draw.btn"),
                            onConfirm: () => f(i.trade_token)
                        })
                    })
                },
                y = () => {
                    a.value = !0, L(d.value).then(n => {
                        o.value = !1, z.getData(), f(n.data.trade_token)
                    }).catch(n => {
                        c(n.message)
                    }).finally(() => {
                        a.value = !1
                    })
                },
                f = n => {
                    c(r("post"), "ring", 0), B.draw(n).then(i => {
                        c(r("success"))
                    }).catch(i => {
                        c(r("error"))
                    })
                };
            return p({
                open: w
            }), (n, i) => {
                const C = l("md-popup-title-bar"),
                    U = l("md-amount"),
                    D = l("md-button"),
                    W = l("md-popup");
                return H(), j(W, {
                    modelValue: o.value,
                    "onUpdate:modelValue": i[0] || (i[0] = _ => o.value = _),
                    position: "bottom"
                }, {
                    default: x(() => {
                        var _, M;
                        return [s(C, {
                            title: n.$t("home.getPrice"),
                            "title-align": "left"
                        }, null, 8, ["title"]), e("div", E, [e("div", F, [s(U, {
                            value: Number((_ = d.value.usdt) != null ? _ : 0),
                            precision: 2,
                            transition: ""
                        }, null, 8, ["value"]), K]), X, e("div", $, [s(U, {
                            value: Number((M = d.value.receive) != null ? M : 0),
                            precision: 2,
                            transition: ""
                        }, null, 8, ["value"]), J]), e("div", Z, [s(D, {
                            type: "primary",
                            loading: a.value,
                            onClick: y,
                            round: ""
                        }, {
                            default: x(() => [v(u(n.$t("home.draw.btn")), 1)]),
                            _: 1
                        }, 8, ["loading"])])])]
                    }),
                    _: 1
                }, 8, ["modelValue"])
            }
        }
    };
var te = q(ee, [
    ["__scopeId", "data-v-3d461c06"]
]);
const ae = t => (I("data-v-2b6a3120"), t = t(), N(), t),
    ne = {
        class: "page-home"
    },
    oe = {
        class: "banner"
    },
    se = ["src"],
    de = {
        class: "content"
    },
    ie = {
        class: "user animate__bounceInDown animate__animated"
    },
    re = {
        class: "padding"
    },
    pe = {
        class: "title"
    },
    ue = {
        class: "money"
    },
    le = v(" USDT "),
    ce = {
        class: "draw"
    },
    me = {
        class: "btn"
    },
    he = {
        class: "money wrap"
    },
    ye = {
        class: "title wrap"
    },
    _e = {
        class: "item animate__bounceInRight animate__animated"
    },
    be = {
        class: "btn"
    },
    ge = ae(() => e("div", {
        class: "money wrap"
    }, "-", -1)),
    ve = {
        class: "title wrap"
    },
    we = {
        class: "images"
    },
    fe = ["src"],
    xe = {
        __name: "index",
        setup(t) {
            const p = z.data,
                o = g(null);
            return (a, d) => {
                var h, y;
                const w = l("md-swiper"),
                    m = l("md-amount");
                return H(), P("div", ne, [s(w, {
                    "has-dots": !1
                }, {
                    default: x(() => [e("div", oe, [e("img", {
                        src: b(T)("/home/banner.png")
                    }, null, 8, se)])]),
                    _: 1
                }), e("div", de, [e("div", ie, [e("div", re, [e("div", pe, u(a.$t("home.user.title")), 1), e("div", ue, [s(m, {
                    value: Number((h = b(p).total_reward) != null ? h : 0),
                    precision: 2,
                    transition: ""
                }, null, 8, ["value"]), le])])]), e("div", ce, [e("div", {
                    class: "item animate__bounceInLeft animate__animated",
                    onClick: d[0] || (d[0] = f => o.value.open())
                }, [e("div", me, u(a.$t("home.draw.btn")), 1), e("div", he, [s(m, {
                    value: Number((y = b(p).release_reward) != null ? y : 0),
                    precision: 2,
                    transition: ""
                }, null, 8, ["value"])]), e("div", ye, u(a.$t("home.draw.lp")), 1)]), s(te, {
                    ref_key: "draw",
                    ref: o
                }, null, 512), e("div", _e, [e("div", be, u(a.$t("home.draw.btn")), 1), ge, e("div", ve, u(a.$t("home.draw.red")), 1)])]), e("div", we, [e("img", {
                    src: b(T)("/home/a.png")
                }, null, 8, fe)])])])
            }
        }
    };
var Me = q(xe, [
    ["__scopeId", "data-v-2b6a3120"]
]);
export {
    Me as
    default
};