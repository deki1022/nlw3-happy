// importar dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js')

console.log(pages)

// iniciando o express
const server = express()
server
    //utilizar body do req
    .use(express.urlencoded({ extended: true}))
    // utilizando os arquivos estáticos
    .use(express.static('public'))

    // configurar templete engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // rotas da aplicação
    .get('/', pages.index)
    .get('/orphanages', pages.orphanages)
    .get('/orphanage', pages.orphanage)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

// ligar o servidor
server.listen(5500)


/* comandos bash
cd                      //change directory
ctrl + l                //clear
node arquivo            //executa o arquivo
npm init -y             //instala plugins e inicia o projeto
../                     //volta 1 pasta
npm install express     // instala um plugin
npm install nodemon     // live server
npm install hbs         // instala a template engine
npm install sqlite.async// instala o sqlite
node src/database/db.js // executa o arquivo e cria o database.sqlite
*/