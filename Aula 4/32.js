vetor = [10, 20, 30, 40]

let media = (vetor) => {
    var m = 0
    for (let i = 0; i < vetor.length; i++) {
        m += vetor[i];
    }

    m = m / vetor.length;

    return m;
}

console.log(media(vetor))