require('dotenv').config()
const {  PORT } = process.env

const express = require('express')
const morgan = require('morgan')
// const cors = require('cors');

const app = express()

require('./database/db')

// const whitelist = [`*`];
// app.use(cors(
//     {
//         origin: whitelist,
//         creadentials: true,
//         optionsSuccessStatus: 200
//       } 
// ));

app.use(morgan('dev'))
app.use(express.json()) 
app.use(express.urlencoded({extended:false}))

app.set('port', PORT || 7000)
const server = app.listen(app.get('port'), ()=>{
  console.log(`Connection successful on port ${app.get('port')}`)
})

app.use('/unigeo/country', require('./routes/countries_routes'))
app.use('/unigeo/state', require('./routes/states_routes'))


module.exports=server 