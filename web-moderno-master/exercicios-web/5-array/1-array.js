console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana') //Não e muito recomendado
console.log(aprovados)

//Forma literal
aprovados = ['Bia', 'Carlos', 'Ana'] //Essa é a mais recomendada
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // Não da erro retorna Undefined

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()  // Ordena o array original
console.log(aprovados)

delete aprovados[1] // Deleta mas elemento, porém o indice fica undefined
console.log(aprovados[1])
console.log(aprovados[2])
aprovados = ['Bia', 'Carlos', 'Ana']
//Exclui começando de um (1,3) até três
aprovados.splice(1, 1) // Ser para algumas coisas: adicionar elementos ao um determinado indice, remover elementos de um array ou remover e adicionar elementos ao msm tempo
//adicionado elementos apartir da posição 1 é exclui 2
aprovados.splice(1, 2,'Elemento1','Elemento2')
console.log(aprovados)
//adicionado elementos apartir da posição sem excluir elementos
aprovados.splice(1, 0,'NovoElemento1','NovoElemento2')
console.log(aprovados)