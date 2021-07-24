const mongoose = require('mongoose');

const geoCountrySchema = new mongoose.Schema({
    nameCountry:{type:String, required:true, unique:false},
    coi:{type:String, required:false, unique:false},
    domain:{type:String, required:false, unique:false},
    capitalCountry:{type:String, required:true, unique:false},
    populationCountry:{type:String, required:false, unique:false},
    SurfaceCountry:{type:String, required:false, unique:false},
    religionCountry:{type:String, required:false, unique:false},
    coinCountry:{type:String, required:false, unique:false},
    agreementsCountry:[{
        nameAgreement:{type:String, required:false, unique:false}
    }],
    states:[{
        nameState:{type:String, required:false, unique:false},
        lat:{type:String, required:false, unique:false},
        lon:{type:String, required:false, unique:false},
        cities:[{
            nameCity:{type:String, required:false, unique:false},
            lat:{type:String, required:false, unique:false},
            lon:{type:String, required:false, unique:false},
        }]
    }]

});

module.exports = mongoose.model('countryData', geoCountrySchema)