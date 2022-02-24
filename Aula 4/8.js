let string = "10 20 20 8 25 3 0 30 1"
let func = (string) => {
    let vetor = string.split(" ")
    let piorPontuacao = vetor[0]
    let melhorPontuacao = vetor[0]
    for (i = 1; i <= vetor.lenght; i++) {
        if (vetor[i] < piorPontuacao)
            piorPontuacao = vetor[i]
        else if (vetor[i] > melhorPontuacao)
            melhorPontuacao = vetor[i]
    }

    console.log(melhorPontuacao, piorPontuacao)

}

func(string)