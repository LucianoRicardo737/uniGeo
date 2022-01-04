require("dotenv").config();
const router = require("express").Router();

const StateCollection = require("../schema/states");

router.get("/getAllCountryes", async (req, res) => {
  try {
    const allCountrys = await StateCollection.find();
    res.send(allCountrys);
  } catch (error) {
    console.log(error);
  }
});

router.get("/getState/:id", async (req, res) => {
  try {
    const allCountrys = await StateCollection.findOne({_id:req.params.id});
    res.send(allCountrys);
  } catch (error) {
    console.log(error);
  }
});

router.post("/addNewState", async (req, res) => {
  try {
    const {
        nameCountry,
nameState,
lat,
lon,
cityes
    } = req.body;

    const newCountryData = new StateCollection({
        nameCountry,
        nameState,
        lat,
        lon,
        cityes
    });


    const saveNewCountry = await newCountryData.save();
    res.send(saveNewCountry);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/deleteThisCountry/:id", async (req,res)=>{
    try {
        const idCountry = req.params.id
        await StateCollection.deleteOne({
            _id:idCountry
        })
        console.log(idCountry)

    } catch (error) {
        console.log(error)
    }
});

module.exports = router;