const express = require('express') 
var router = express.Router();
const { Spot } = require("../models/Spot");
const { RecomandedSpot } = require("../models/RecomandedSpot");

const config = require("../config/key");

const mongoose = require('mongoose')

mongoose.connect(config.mongoURL , { 
    useNewUrlParser : true, useUnifiedTopology : true, useCreateIndex : true, useFindAndModify : false
}).then(() => console.log("MONGO_DB connected"))
.catch(err => console.log(err))

router.get('/', (req, res) => {
    Spot.find( (err, spots) =>{
        if(err) return res.status(500).send({err : 'databaseErr'});
        res.json(Object.values(spots))
      })
});

router.get('/recomanded', (req, res) => {
    RecomandedSpot.find( (err, spots) =>{
        // console.log(err)
        if(err) return res.status(500).send({err : 'databaseErr'});
        res.json(Object.values(spots))
      })
});




module.exports = router;