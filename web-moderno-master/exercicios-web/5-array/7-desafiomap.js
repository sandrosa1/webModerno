const carrinho = [
    '{"nome": "Borracha",     "preco":  3.45}',
    '{"nome": "Caderno",      "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta",       "preco":  7.50}'
]

//Retorana um array apenas com preços
//Criar um função generica para converte um json em um array de objetos
const objCarrinnho = json => JSON.parse(json)

//pegando so o preço
const preco = elemento => elemento.preco



const precos = carrinho.map(objCarrinnho).map(preco)
console.log(precos)