const notas = [8.9, 4.6, 7.7, 10.0, 2.5, 5.7, 6.8, 9.4, 7.4]

let conceito = notas.map(e => {
    if (e <= 4.9)
        return 'D'
    else if (e <= 6.9)
        return 'C'
    else if (e <= 8.9)
        return 'B'
    else
        return 'A'
})

console.log(conceito);