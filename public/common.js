css('/public/style.css')
js('/public/vue.js')

function random(min, max) {
    return min + Math.floor(Math.random() * (max + 1 - min))
}
function getParam(name) {
    return new URL(window.location.href).searchParams.get(name)
}
function u(url) {
    if (url.indexOf('?') < 0)
        url += '?' + Math.random()
    return url
}
async function g(url, next = null) {
    url = u(url)
    if (! next)
        return await fetch(url)
    else
        return await (await fetch(url))[next]()
}
function objInverse(obj) {
    let nobj = {}
    for (let k in obj) {
        let v = obj[k]
        nobj[v] = k
    }
    return nobj
}

globalThis.t = (...args) => document.querySelector(...args)
globalThis.t2 = (...args) => document.querySelectorAll(...args)