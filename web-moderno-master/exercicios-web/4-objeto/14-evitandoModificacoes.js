// Object.preventExtensions evita adicionar novas chaves e valores
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha' // vai mundar o mome
produto.descricao = 'Borracha escolar branca' //descrição não existe, então não faz nada
delete produto.tag // Vai excluir tag
console.log(produto)

// Object.seal não consegue adicionar novos atributos, não consegue excluir atributos do objeto, mas pode modificar os valores dos atributos do objeto
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' // Não vai fazer nada
delete pessoa.nome // Não pode deletar, o objeto esta selado
pessoa.idade = 29 
console.log(pessoa)

// Object.freeze = selado + valores constantes