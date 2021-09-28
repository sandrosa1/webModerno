//Responsavel por fazer oparse da requisição
//Importando
const bodyParser = require('body-parser')
//importando o express
const express = require('express')
//Instanciando o express e armazenando ele na variavel app
const app = express()

//DEFININDO OS MIDDLEWARES 

//Dentro da pasta atual onde o server.js está sirva os arquivos staticos (.html)
app.use(express.static('.'))
//Este esta relacionado ao body-parse, transforma os dados de um formulario em um objeto
app.use(bodyParser.urlencoded({ extended: true }))
//Se vier um json dentro da requisição este converte para um objeto
app.use(bodyParser.json())

//Exemplo de função middleware, que e envocado quando uma requisiçao do tipo get e enviada para a URL  /teste
//app.get('/teste',(req, res) => res.send('ok'))
//app.get('/teste',(req, res) => res.send(new Date))


// const multer = require('multer')

// const storage = multer.diskStorage({
//     destination: function (req, file, callback) {
//         callback(null, './upload')
//     },
//     filename: function (req, file, callback) {
//         callback(null, `${Date.now()}_${file.originalname}`)
//     }
// })

// const upload = multer({ storage }).single('arquivo')

// app.post('/upload', (req, res) => {
//     upload(req, res, err => {
//         if (err) {
//             return res.end('Ocorreu um erro.')
//         }

//         res.end('Concluído com sucesso.')
//     })
// })

// app.post('/formulario', (req, res) => {
//     res.send({
//         ...req.body,
//         id: 7
//     })
// })

// app.get('/parOuImpar', (req, res) => {
//     // req.body
//     // req.query
//     // req.params
//     const par = parseInt(req.query.numero) % 2 === 0
//     res.send({
//         resultado: par ? 'par' : 'impar'
//     })
// })

//Start o servidor DEIXAR SEMPRE DESCOMENTADO
 app.listen(8080, () => console.log('Executando...'))