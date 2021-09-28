1. Criar o arquivo package.json, esse arquivo algumas coisas sobre o projeto
`npm init -y`
2. No arquivo package.json apagamos o `"test": "echo \"Error: no test specified\" && exit 1",` e inserimos o `"start": "nodemon server.js"`
3. Depois inserimos as dependecias que será utilizadas nesse projeto 
    - body-parser -> lé os dados(EX: enviados por formulario) que são enviados no body de um requisição e dixa disponivel no back-end(servidor)
    - express -> Será o servidor utilizado
    - muter -> E responsavel pelo upload de documentos ou imagens
4. Para dependencias de desenvolvimento 
    - nodemon -> atualiza o projeto sempre que a uma atualização
    ```json 
    "dependencies": {
        "body-parser": "1.18.2",
        "express": "4.16.3",
        "multer": "1.3.0"
    },
    "devDependencies": {
        "nodemon": "1.17.3"
    }
    ```
5. Salvar e rodar o comando no terminal dentro do projeto(pasta ajax) `npm i`
6. Configure o servidor em server.js
7. Dentro do terminal na pasta ajax rode o comando `npm start` para iniciar o servidor
8. no navaegador `http://localhost:8080/`
9. no navaegador `http://localhost:8080/teste` o get deve funcionar

### https://caniuse.com/  local para o percentual de broswer que suporta algum codigo

##### Erros por porta sendo usada
 - renomear o ` app.listen(8080, () => console.log('Executando...'))` para ` app.listen(8081, () => console.log('Executando...'))`
 - No terminal digíte o comando `ps -ax` ache o processo que está impedindo da porta rodar e mate o processo com o comando `kill -9 numeroDoProcesso`