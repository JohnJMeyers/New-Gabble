const express = require('express');
const mustache = require('mustache-express');
const parseurl = require('parseurl')
const bodyParser = require('body-parser');
const validator = require('express-validator')
const sequelize = require('sequelize');
const models = require('./models')
const faker = require('faker');
const pg = require('pg');
const session = require('express-session');
const app = express();

const gabble = require('./routes/gabble')
const login = require('./routes/login')
const signup = require('./routes/signup')
const create = require('./routes/create')
const logout = require('./routes/logout')
const deleteKey = require('./routes/delete')

app.engine('mustache', mustache())
app.set('view engine', 'mustache');
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.get('/', gabble)
app.post('/', gabble)

app.get('/login', login)
app.post('/login', login)

app.get('/signup', signup)
app.post('/signup', signup)

app.get('/create', create)
app.post('/create', create)

app.post('/logout', logout)
app.post('/delete',deleteKey )

app.listen(3000, function(){
  console.log("Looking good!")
})
