vetor = [4, 8, 12, 16]
n = 3
let func1 = (vetor, n = 5) => {
    let vetor1 = []
    for (let i = 0; i < vetor.length; i++)
        vetor1[i] = n * vetor[i]

    return vetor1;
}
let func2 = (vetor, n = 5) => {
    let vetor2 = []
    for (let i = 0; i < vetor.length; i++)
        if (vetor[i] > 5) vetor2[i] = n * vetor[i]
        else vetor2[i] = vetor[i]

    return vetor2;
}
console.log(func1(vetor, 3))
console.log(func2(vetor, 3))