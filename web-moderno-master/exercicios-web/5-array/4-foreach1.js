const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']


//Passando um callback para interragir com cada elemento do array com indice e o valor
aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})


//Passando um callback para interragir com cada elemento do array com indice e o valor ultilizando o terceiro parametro array
aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)

})

//Utilizando só o indíce
aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)


