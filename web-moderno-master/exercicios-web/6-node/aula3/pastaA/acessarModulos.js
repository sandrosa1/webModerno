const moduloA = require('../../aula1/moduloA')
console.log(moduloA.ola)


//Crie o diretorio saudacao dentro da pasta node_modules
//Crie um arquivo index.js com:
/**
 * module.exports = {
 *   ola: 'Bom dia'
 * }
 */
//const saudacao = require('saudacao')
//console.log(saudacao.ola)

const c = require('./pastaB')
console.log(c.ola2)


//Abra o navegadorna porta localhost:8080 e veja o resultado após executar sees script
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)
//ctrl M para parar