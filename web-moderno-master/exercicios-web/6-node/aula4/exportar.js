console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

// Tudo serve para exportar são todos iguais
this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

exports = {
    nome: 'Teste'
}

console.log(module.exports)

//Se precisar atribuir um novo objeto para ser exportado deve usa module.exports
module.exports = { publico: true }

//console.log(module.exports)
