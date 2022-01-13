require('dotenv').config()
const {  PORT } = process.env

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

require('./database/db')

const whitelist = ['http://192.168.1.6:3001', 'http://localhost:3001', 'https://www.labler.com.ar', 'https://labler.com.ar']
app.use(cors(
  {
    origin: whitelist,
    creadentials: true,
    optionsSuccessStatus: 200
  } 
))

app.use(morgan('dev'))
app.use(express.json()) 
app.use(express.urlencoded({extended:false}))

app.set('port', PORT || 5012)
const server = app.listen(app.get('port'), ()=>{
  console.log(`Connection successful on port ${app.get('port')}`)
})

app.use('/country', require('./routes/countries_routes'))
app.use('/state', require('./routes/states_routes'))


module.exports=server 