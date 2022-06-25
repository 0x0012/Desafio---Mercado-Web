/*
 * Desafío - Mercado Web
 * @author Max Coronado Lorca
 */

const express = require('express')
const { engine } = require('express-handlebars')

const PRODUCTS = ['banana', 'cebollas', 'lechuga', 'papas', 'pimenton', 'tomate']

const app = express()

app.listen(3000, console.log('(⌐■_■) SERVER ONLINE', { port: 3000, url: 'http://localhost:3000' }))

app.use(express.static('assets'))
app.use('/bscss', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
app.use('/bsjs', express.static(__dirname + '/node_modules/bootstrap/dist/js'))
app.use('/jq', express.static(__dirname + '/node_modules/jquery/dist'))

app.engine(
  'hbs',
  engine({
    layoutsDir: __dirname + '/views',
    partialsDir: __dirname + '/views/components/',
    extname: 'hbs',
    defaultLayout: 'index'
  })
)

app.set('view engine', 'hbs')

app.get('/', (_, res) => res.render('index', { layout: 'index', products: PRODUCTS }))
