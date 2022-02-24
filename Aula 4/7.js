let func = (a, b, c) => {
    vetor = []
    let delta = b * b - 4 * a * c
    if (delta < 0)
        return console.log('Delta é negativo');
    else {
        vetor.push((-b + Math.sqrt(delta)) / (2 * a))
        vetor.push((-b - Math.sqrt(delta)) / (2 * a))
        return console.log(vetor)
    }
}

func(1, -2, 1)