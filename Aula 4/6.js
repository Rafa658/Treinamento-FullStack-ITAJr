var capital = 100000 //100k 
var taxa = 0.05 //5% de taxa
var tempo = 24 //meses de aplicação

let jurosSimples = (capital, taxa, tempo) => capital * (1 + taxa * tempo)

let jurosCompostos = (capital, taxa, tempo) => capital * Math.pow(1 + taxa, tempo)

console.log(jurosSimples(capital, taxa, tempo), jurosCompostos(capital, taxa, tempo));