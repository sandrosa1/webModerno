//Conacatena varios elementos ou array eu um unico array

const filhas = ['Ualeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
const todos = filhas.concat(filhos)
const todosMaisUm = filhas.concat(filhos,'Fulano')
console.log(todos, filhas, filhos)
console.log(todosMaisUm, filhas, filhos)

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))