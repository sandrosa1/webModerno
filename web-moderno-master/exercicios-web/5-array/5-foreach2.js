
//Para cria uma função utilizamos o prototype do array associando com o nome da funçao Array.prototype.nomeFuncao
//A funçao recebe um callback que vai ser um function
Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})