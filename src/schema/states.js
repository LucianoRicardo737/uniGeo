const mongoose = require('mongoose')

const geoCountrySchema = new mongoose.Schema({
  nameCountry:{type:String, required:true, unique:false},
  nameState:{type:String, required:true, unique:true},
  lat:{type:String, required:false, unique:false},
  lon:{type:String, required:false, unique:false},
  cityes:[{
    nameCity:{type:String, required:true, unique:false},
    department:{type:String, required:false, unique:false},
    lat:{type:String, required:false, unique:false},
    lon:{type:String, required:false, unique:false},
  }]
})

module.exports = mongoose.model('statesData', geoCountrySchema)