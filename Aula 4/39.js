const vetor1 = [1, 3, 5, 7, 9]
const vetor2 = [0, 2, 4, 6, 8]

function trocarVetores(vetor1, vetor2) {
    if (vetor1.length != vetor2.length)
        return

    for (var i = 0; i < vetor1.length; i++)
        [vetor1[i], vetor2[i]] = [vetor2[i], vetor1[i]]
}

trocarVetores(vetor1, vetor2)

console.log("Vetor 1:", vetor1);
console.log("Vetor 2:", vetor2);