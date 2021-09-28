const nums = [1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
//parseFloat -> converte para floate
//to.Fixed -> fixa duas casas decimais
//replace -> substitui ponto pela virgula
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

// maps de forma encadeada. Obs os resultaldos de cada map gera um array que na pratica está sendo passado para o proximo map
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)