let pa = (n, a1, r) => {
    progressao = []
    for (let i = 0; i < n; i++) {
        progressao.push(a1 + r * i)
    }

    return progressao
}
let pg = (n, a1, r) => {
    progressao = []
    for (let i = 0; i < n; i++) {
        progressao.push(a1 * Math.pow(r, i))
    }

    return progressao
}

console.log(pa(10, 1, 2))
console.log(pg(10, 1, 2))