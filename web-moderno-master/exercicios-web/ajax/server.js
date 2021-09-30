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

//Importa o multer para interpretar o formulário que veio do upload
 const multer = require('multer')

// A função diskStorage recebe um objeto onde e configurada a pasta de destino do upload e o nome do arquivo
// A pasta de destino deve ser criada manualmente.
    const storage = multer.diskStorage({
    destination: function (req, file, callback) {
         callback(null, './upload')
     },
     filename: function (req, file, callback) {
         callback(null, `${Date.now()}_${file.originalname}`)
     }
 })

// Aqui passamos para o construtor do mulher o objeto storage e a função singles com o nome do arquivo que vem na requisição.
 const upload = multer({ storage }).single('arquivo')

// Cria um rota POST e chama a função middleware 
 app.post('/upload', (req, res) => {
     upload(req, res, err => {
         if (err) {
             return res.end('Ocorreu um erro.')
         }

         res.end('Concluído com sucesso.')
     })
 })

// Para utilizar o fecth POST o body-parse precisa estar configurado
 app.post('/formulario', (req, res) => {
     // Cria um objeto com operador spreed de dados que vieram da requisição e retorna para o front
     // Aqui não está enviando para nem banco de dados
     res.send({
         ...req.body,
         id: 7
     })
 })

 app.get('/parOuImpar', (req, res) => {
     // req.body
     // req.query
     // req.params
     const par = parseInt(req.query.numero) % 2 === 0
     res.send({
         resultado: par ? 'par' : 'impar'
     })
 })

//Start o servidor DEIXAR SEMPRE DESCOMENTADO
 app.listen(8080, () => console.log('Executando...'))
