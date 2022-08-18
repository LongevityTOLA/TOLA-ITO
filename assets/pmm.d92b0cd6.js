import {
    q as C,
    _ as q,
    x as L,
    r as v,
    y as W,
    a as _,
    o as l,
    k as d,
    d as s,
    F as T,
    t as n,
    e as m,
    b,
    l as x,
    z as k,
    A as J,
    B as K,
    w as z,
    g as u,
    i as p,
    C as Q
} from "./index.7bc83f92.js";
import {
    b as N
} from "./contract.9250c69a.js";
const X = [{
    inputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "constructor"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "spender",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "value",
        type: "uint256"
    }],
    name: "Approval",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "OwnershipTransferred",
    type: "event"
}, {
    anonymous: !1,
    inputs: [{
        indexed: !0,
        internalType: "address",
        name: "from",
        type: "address"
    }, {
        indexed: !0,
        internalType: "address",
        name: "to",
        type: "address"
    }, {
        indexed: !1,
        internalType: "uint256",
        name: "value",
        type: "uint256"
    }],
    name: "Transfer",
    type: "event"
}, {
    constant: !0,
    inputs: [],
    name: "_decimals",
    outputs: [{
        internalType: "uint8",
        name: "",
        type: "uint8"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "_name",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "_symbol",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [{
        internalType: "address",
        name: "owner",
        type: "address"
    }, {
        internalType: "address",
        name: "spender",
        type: "address"
    }],
    name: "allowance",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        internalType: "address",
        name: "spender",
        type: "address"
    }, {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }],
    name: "approve",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [{
        internalType: "address",
        name: "account",
        type: "address"
    }],
    name: "balanceOf",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }],
    name: "burn",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "decimals",
    outputs: [{
        internalType: "uint8",
        name: "",
        type: "uint8"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        internalType: "address",
        name: "spender",
        type: "address"
    }, {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256"
    }],
    name: "decreaseAllowance",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "getOwner",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        internalType: "address",
        name: "spender",
        type: "address"
    }, {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256"
    }],
    name: "increaseAllowance",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }],
    name: "mint",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "name",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "owner",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "symbol",
    outputs: [{
        internalType: "string",
        name: "",
        type: "string"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !0,
    inputs: [],
    name: "totalSupply",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    payable: !1,
    stateMutability: "view",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        internalType: "address",
        name: "recipient",
        type: "address"
    }, {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }],
    name: "transfer",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        internalType: "address",
        name: "sender",
        type: "address"
    }, {
        internalType: "address",
        name: "recipient",
        type: "address"
    }, {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
    }],
    name: "transferFrom",
    outputs: [{
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: !1,
    inputs: [{
        internalType: "address",
        name: "newOwner",
        type: "address"
    }],
    name: "transferOwnership",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
}];
class Y {
    constructor(r, o) {
        this.gateway = r, this.contract = N(o, X)
    }
    approve() {
        return new Promise((r, o) => {
            this.contract.methods.approve(this.gateway, "115792089237316195423570985008687907853269984665640564039457584007913129639935").send().on("receipt", e => {
                r()
            }).on("error", e => {
                o()
            })
        })
    }
    allowance() {
        return this.contract.methods.allowance(C.value, this.gateway).call()
    }
    balance() {
        return this.contract.methods.balanceOf(C.value).call()
    }
}
const A = "0x7Eb9b344B6AFD3d87e8D253f93ce4233a77b27d3",
    Z = [{
        inputs: [{
            internalType: "string",
            name: "name",
            type: "string"
        }],
        name: "getFunction",
        outputs: [{
            internalType: "address",
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
            internalType: "string",
            name: "name",
            type: "string"
        }],
        name: "getToken",
        outputs: [{
            internalType: "contract IERC20",
            name: "",
            type: "address"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "member",
            type: "address"
        }],
        name: "hasMember",
        outputs: [],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [{
            internalType: "string",
            name: "name",
            type: "string"
        }, {
            internalType: "address",
            name: "member",
            type: "address"
        }],
        name: "setupFunction",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "address",
            name: "member",
            type: "address"
        }, {
            internalType: "bool",
            name: "status",
            type: "bool"
        }],
        name: "setupMember",
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
            internalType: "contract IERC20",
            name: "tokenAddress",
            type: "address"
        }],
        name: "setupToken",
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
            name: "account",
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
    }],
    $ = {};

function j() {
    return N(A, Z)
}

function ee(a) {
    return new Promise((r, o) => {
        if ($[a]) return r($[a]);
        j().methods.getToken(a).call().then(e => {
            $[a] = new Y(A, e), r($[a])
        })
    })
}
const te = "0x5aAB9f50a2e1970777e2D2973444117c7C148c8D",
    ne = [{
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
            internalType: "uint256",
            name: "i",
            type: "uint256"
        }, {
            indexed: !1,
            internalType: "address",
            name: "account",
            type: "address"
        }, {
            indexed: !1,
            internalType: "uint256",
            name: "amount",
            type: "uint256"
        }],
        name: "Buy",
        type: "event"
    }, {
        anonymous: !1,
        inputs: [{
            indexed: !1,
            internalType: "uint256",
            name: "i",
            type: "uint256"
        }, {
            indexed: !1,
            internalType: "address",
            name: "account",
            type: "address"
        }, {
            indexed: !1,
            internalType: "uint256",
            name: "amount",
            type: "uint256"
        }],
        name: "BuyHolder",
        type: "event"
    }, {
        anonymous: !1,
        inputs: [{
            indexed: !1,
            internalType: "uint256",
            name: "i",
            type: "uint256"
        }, {
            indexed: !1,
            internalType: "address",
            name: "account",
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
        anonymous: !1,
        inputs: [{
            indexed: !1,
            internalType: "uint256",
            name: "i",
            type: "uint256"
        }, {
            indexed: !1,
            internalType: "address",
            name: "account",
            type: "address"
        }, {
            indexed: !1,
            internalType: "uint256",
            name: "amount",
            type: "uint256"
        }],
        name: "DrawHolder",
        type: "event"
    }, {
        inputs: [{
            internalType: "uint256",
            name: "count",
            type: "uint256"
        }, {
            internalType: "string",
            name: "buy_",
            type: "string"
        }, {
            internalType: "uint256",
            name: "buy_amount",
            type: "uint256"
        }, {
            internalType: "string",
            name: "draw_",
            type: "string"
        }, {
            internalType: "uint256",
            name: "draw_amount",
            type: "uint256"
        }],
        name: "_add",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "uint256",
            name: "i",
            type: "uint256"
        }],
        name: "_del",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "uint256",
            name: "i",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "holder_buy",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "holder_draw",
            type: "uint256"
        }, {
            internalType: "uint256",
            name: "share",
            type: "uint256"
        }],
        name: "_hold",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "uint256",
            name: "i",
            type: "uint256"
        }, {
            internalType: "bool",
            name: "status",
            type: "bool"
        }, {
            internalType: "bool",
            name: "open",
            type: "bool"
        }],
        name: "_set",
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
            name: "account",
            type: "address"
        }],
        name: "balance",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "uint256",
            name: "i",
            type: "uint256"
        }, {
            internalType: "address",
            name: "share",
            type: "address"
        }],
        name: "buy",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "uint256",
            name: "i",
            type: "uint256"
        }],
        name: "buyHolder",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "uint256",
            name: "i",
            type: "uint256"
        }],
        name: "draw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "uint256",
            name: "i",
            type: "uint256"
        }],
        name: "drawHolder",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [{
            internalType: "uint256",
            name: "i",
            type: "uint256"
        }],
        name: "get",
        outputs: [{
            components: [{
                internalType: "uint256",
                name: "count",
                type: "uint256"
            }, {
                internalType: "string",
                name: "buy",
                type: "string"
            }, {
                internalType: "uint256",
                name: "buy_amount",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "buy_count",
                type: "uint256"
            }, {
                internalType: "string",
                name: "draw",
                type: "string"
            }, {
                internalType: "uint256",
                name: "draw_amount",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "draw_count",
                type: "uint256"
            }, {
                internalType: "bool",
                name: "status",
                type: "bool"
            }, {
                internalType: "bool",
                name: "open",
                type: "bool"
            }, {
                components: [{
                    internalType: "uint256",
                    name: "buy",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "buy_count",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "draw",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "draw_count",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "share",
                    type: "uint256"
                }],
                internalType: "struct Ido.Holder",
                name: "holder",
                type: "tuple"
            }],
            internalType: "struct Ido.Project",
            name: "",
            type: "tuple"
        }],
        stateMutability: "view",
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
        inputs: [{
            internalType: "uint256",
            name: "i",
            type: "uint256"
        }],
        name: "getHolderBuy",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        stateMutability: "view",
        type: "function"
    }, {
        inputs: [{
            internalType: "uint256",
            name: "i",
            type: "uint256"
        }],
        name: "getHolderCount",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
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
            name: "i",
            type: "uint256"
        }],
        name: "getShare",
        outputs: [{
            internalType: "address[]",
            name: "",
            type: "address[]"
        }],
        stateMutability: "view",
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
    }];

function y() {
    return N(te, ne)
}
var g = {
    get(a) {
        return y().methods.get(a).call()
    },
    getShare(a) {
        return y().methods.getShare(a).call()
    },
    getHolderBuy(a) {
        return y().methods.getHolderBuy(a).call()
    },
    getHolderCount(a) {
        return y().methods.getHolderCount(a).call()
    },
    buy(a, r) {
        return new Promise((o, e) => {
            y().methods.buy(a, r).estimateGas().then(() => {
                y().methods.buy(a, r).send().on("receipt", f => {
                    o()
                }).on("error", f => {
                    e()
                })
            }).catch(f => {
                e(f)
            })
        })
    },
    draw(a) {
        return new Promise((r, o) => {
            y().methods.draw(a).estimateGas().then(() => {
                y().methods.draw(a).send().on("receipt", e => {
                    r()
                }).on("error", e => {
                    o()
                })
            }).catch(e => {
                o(e)
            })
        })
    },
    buyHolder(a) {
        return new Promise((r, o) => {
            y().methods.buyHolder(a).estimateGas().then(() => {
                y().methods.buyHolder(a).send().on("receipt", e => {
                    r()
                }).on("error", e => {
                    o()
                })
            }).catch(e => {
                o(e)
            })
        })
    },
    drawHolder(a) {
        return new Promise((r, o) => {
            y().methods.drawHolder(a).estimateGas().then(() => {
                y().methods.drawHolder(a).send().on("receipt", e => {
                    r()
                }).on("error", e => {
                    o()
                })
            }).catch(e => {
                o(e)
            })
        })
    }
};
const ae = {
        class: "page-ido-info"
    },
    ie = {
        class: "list animate__bounceInUp animate__animated"
    },
    se = {
        class: "title"
    },
    oe = {
        class: "body"
    },
    re = {
        key: 1,
        class: "btn"
    },
    ue = {
        class: "title"
    },
    pe = {
        class: "body"
    },
    le = m(" / "),
    de = {
        class: "list list2 animate__bounceInUp animate__animated",
        style: {
            "animation-delay": ".3s"
        }
    },
    ye = {
        class: "title"
    },
    me = {
        class: "body"
    },
    ce = {
        key: 1,
        class: "btn"
    },
    be = {
        class: "body"
    },
    fe = {
        class: "content"
    },
    ve = {
        class: "user-list"
    },
    Te = {
        class: "title"
    },
    ge = {
        class: "item"
    },
    we = {
        class: "wrap"
    },
    he = {
        style: {
            background: "var(--md-popup-title-bg)",
            padding: "20px"
        }
    },
    _e = {
        style: {
            "padding-top": "20px"
        }
    },
    Me = {
        __name: "pmm",
        setup(a) {
            const o = L();
            v(!1);
            const e = v({
                    holder: {}
                }),
                f = v(o.query.share),
                O = v(""),
                M = v(!1),
                H = v([]),
                V = v({}),
                w = () => {
                    g.get(0).then(t => {
                        e.value = t, console.log(t), O.value = location.origin + "/#/ido/pmm?share=" + C.value
                    }), g.getShare(0).then(t => {
                        H.value = t
                    }), g.getHolderCount(0).then(t => {
                        V.value.count = t
                    })
                },
                B = async () => {
                    const t = await ee("USDT");
                    if (Number(await t.balance()) < Number(e.value[0])) throw u(p("erc20.balance"));
                    if (Number(await t.allowance()) < Number(e.value[0])) {
                        u(p("erc20.approve"), "ring", 0);
                        try {
                            await t.approve()
                        } catch {
                            throw u(p("erc20.error"))
                        }
                    }
                },
                D = async () => {
                    M.value = !1;
                    const t = f.value ? f.value : "0x0000000000000000000000000000000000000000";
                    try {
                        await B()
                    } catch {
                        return
                    }
                    u(p("erc20.transfer"), "ring", 0), g.buy(0, t).then(i => {
                        u(p("ido.buy_ok")), w()
                    }).catch(i => {
                        u(p("error"))
                    })
                },
                S = async t => {
                    u(p("ido.draw_load"), "ring", 0), g.draw(0).then(i => {
                        u(p("ido.draw_ok")), w()
                    }).catch(i => {
                        u(p("error"))
                    })
                },
                G = async () => {
                    try {
                        await B()
                    } catch {
                        return
                    }
                    u(p("erc20.transfer"), "ring", 0), g.buyHolder(0).then(t => {
                        u(p("ido.buy_ok")), w()
                    }).catch(t => {
                        u(p("error"))
                    })
                },
                I = async t => {
                    u(p("ido.draw_load"), "ring", 0), g.drawHolder(0).then(i => {
                        u(p("ido.draw_ok")), w()
                    }).catch(i => {
                        u(p("error"))
                    })
                },
                P = () => {
                    Q.copy(O.value, () => {
                        u(p("copy"), "right")
                    })
                };
            return W.on(w), (t, i) => {
                const h = _("md-amount"),
                    F = _("md-popup-title-bar"),
                    U = _("md-input-item"),
                    E = _("md-button"),
                    R = _("md-popup");
                return l(), d(T, null, [s("div", ae, [e.value.count ? (l(), d(T, {
                    key: 0
                }, [s("div", ie, [e.value.status ? (l(), d(T, {
                    key: 1
                }, [s("div", ue, n(t.$t("ido.draw")) + " " + n(e.value.draw), 1), s("div", pe, [m(n(t.$t("ido.draw_count")) + " ", 1), b(h, {
                    value: Number(e.value.draw_count),
                    precision: 0,
                    transition: ""
                }, null, 8, ["value"]), le, b(h, {
                    value: Number(e.value.buy_count),
                    precision: 0,
                    transition: ""
                }, null, 8, ["value"]), m(" " + n(t.$t("ido.unit")), 1)]), s("div", {
                    class: "btn",
                    onClick: i[1] || (i[1] = c => S())
                }, n(x(k)(e.value.draw_amount)) + " " + n(e.value.draw), 1)], 64)) : (l(), d(T, {
                    key: 0
                }, [s("div", se, n(t.$t("ido.buy")) + " " + n(e.value.draw), 1), s("div", oe, [m(n(t.$t("ido.buy_count")) + " ", 1), b(h, {
                    value: Number(e.value.buy_count),
                    precision: 0,
                    transition: ""
                }, null, 8, ["value"]), m(" " + n(t.$t("ido.unit")), 1)]), e.value.open ? (l(), d("div", {
                    key: 0,
                    class: "btn",
                    onClick: i[0] || (i[0] = c => M.value = !0)
                }, n(x(k)(e.value.buy_amount)) + " " + n(e.value.buy), 1)) : (l(), d("div", re, n(t.$t("ido.open")), 1))], 64))]), s("div", de, [s("div", ye, n(t.$t("ido.pmm.holder")), 1), e.value.status ? (l(), d(T, {
                    key: 1
                }, [s("div", be, [m(n(t.$t("ido.draw_count")) + " ", 1), b(h, {
                    value: Number(e.value.holder.draw_count),
                    precision: 0,
                    transition: ""
                }, null, 8, ["value"]), m(" " + n(t.$t("ido.unit")), 1)]), s("div", {
                    class: "btn",
                    onClick: i[3] || (i[3] = c => I())
                }, n(V.value.count) + " * " + n(x(k)(e.value.holder.draw)) + " " + n(e.value.draw), 1)], 64)) : (l(), d(T, {
                    key: 0
                }, [s("div", me, [m(n(t.$t("ido.buy_count")) + " ", 1), b(h, {
                    value: Number(e.value.holder.buy_count),
                    precision: 0,
                    transition: ""
                }, null, 8, ["value"]), m(" " + n(t.$t("ido.unit")), 1)]), e.value.open ? (l(), d("div", {
                    key: 0,
                    class: "btn",
                    onClick: i[2] || (i[2] = c => G())
                }, n(x(k)(e.value.holder.buy)) + " " + n(e.value.buy), 1)) : (l(), d("div", ce, n(t.$t("ido.open")), 1))], 64))])], 64)) : J("", !0), s("div", fe, [s("div", {
                    class: "share-url",
                    onClick: P
                }, [s("span", null, n(t.$t("ido.share_url")), 1)]), s("div", ve, [s("div", Te, n(t.$t("ido.share")) + " (" + n(H.value.length) + ")", 1), (l(!0), d(T, null, K(H.value, c => (l(), d("div", ge, [s("span", we, n(c), 1)]))), 256))])])]), b(R, {
                    modelValue: M.value,
                    "onUpdate:modelValue": i[5] || (i[5] = c => M.value = c),
                    position: "bottom"
                }, {
                    default: z(() => [b(F, {
                        title: t.$t("ido.share"),
                        "title-align": "left"
                    }, null, 8, ["title"]), s("div", he, [b(U, {
                        modelValue: f.value,
                        "onUpdate:modelValue": i[4] || (i[4] = c => f.value = c),
                        placeholder: "0x",
                        "is-highlight": ""
                    }, null, 8, ["modelValue"]), s("div", _e, [b(E, {
                        type: "primary",
                        onClick: D,
                        round: ""
                    }, {
                        default: z(() => [m(n(t.$t("confirm")), 1)]),
                        _: 1
                    })])])]),
                    _: 1
                }, 8, ["modelValue"])], 64)
            }
        }
    };
var $e = q(Me, [
    ["__scopeId", "data-v-ef6e2f2e"]
]);
export {
    $e as
    default
};