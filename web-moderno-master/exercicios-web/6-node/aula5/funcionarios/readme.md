# Arquivos package.json


- $ npm init 

Esse comando habilita um wizard para voce responder com vai ser definido seu projeto no packege.json

- $ npm init -y

Esse comando responde sim para todas as perguntas e cria o packege.json

- $ npm i --save axios

Esse instala axios dentro e salva a dependencia no packege.json (Obs: dentro de um diretorio node_modules)

- $ npm i --save-dev axios@0.17.1 -E

Esse instala axios salva na dependencia de desenvolvedor no packege.json fixando a atualizaçao (Obs:o axios e instalado dentro do diretorio node_modules agora detro de funcionario)


## "axios": "^0.17.1"

O circunflexo permite que atualize para a versão do meio  0.99.1 ; 0.55.1

## "axios": "~0.17.1"

O tio permite que pegue versão co o fix diferente  0.17.6; 0.17.8

## "axios": "0.17.1"

Não permite atualização


## pakage-lok.json

Esté e a garantia que todos os desenvolvedores estão usando os mesmos pacotes

## AXIOS

E um client que faz requsições HTTP para opter informações


## Recriar pasta node_modules

{
  "name": "funcionarios",
  "version": "1.0.0",
  "main": "funcionarios.js",
  "scripts": {
    "start": "nodemon",
    "dev": "nodemon",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "axios": "^0.17.1"
  },
  "description": ""
}


Com o package-lock.json e possivel recriar a pasta assim não precisamos versionar no git
O nodemon foi adicionado ao start assim qualquer atualização na aplicação ele restart o projeto

$ npm i # Cria a pasta node_modules

$ npm start # start o nodemon



