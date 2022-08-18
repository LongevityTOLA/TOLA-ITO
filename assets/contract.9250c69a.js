import {
    n as c,
    q as r
} from "./index.7bc83f92.js";
const n = {};

function e(t, o) {
    return n[t] || (n[t] = new c.eth.Contract(o, t, {
        from: r.value
    })), n[t]
}
export {
    e as b
};