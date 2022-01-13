require('dotenv').config()
const router = require('express').Router()

const CountriesDb = require('../schema/countries')

router.get('/getAllCountryes', async (req, res) => {
  try {
    const allCountrys = await CountriesDb.find()
    res.send(allCountrys)
  } catch (error) {
    console.log(error)
  }
})

router.get('/getCounty/:id', async (req, res) => {
  try {
    console.log('Llega')
    return null
    const allCountrys = await CountriesDb.findOne({_id:req.params.id})
    res.send(allCountrys)
  } catch (error) {
    console.log(error)
  }
})

router.post('/addNewCountry', async (req, res) => {
  try {
    let {
      nameCountry,
      coi,
      domain,
      capitalCountry,
      populationCountry,
      SurfaceCountry,
      religionCountry,
      coinCountry,
      agreementsCountry,
      states
    } = req.body

    const newCountryData = new CountriesDb({
      nameCountry,
      coi,
      domain,
      capitalCountry,
      populationCountry,
      SurfaceCountry,
      religionCountry,
      coinCountry,
      agreementsCountry,
      states
    })

    const saveNewCountry = await newCountryData.save()
    res.send(saveNewCountry)
  } catch (error) {
    console.log(error)
  }
})

router.delete('/deleteThisCountry/:id', async (req,res)=>{
  try {
    const idCountry = req.params.id
    await CountriesDb.deleteOne({
      _id:idCountry
    })
    console.log(idCountry)

  } catch (error) {
    console.log(error)
  }
})

module.exports = router
