//스키마 설정하는 과정
const mongoose = require('mongoose')

const recomandedSpotSchema = mongoose.Schema({
    spot : {
        type : String,
        maxlength : 50
    },
    des : {
        type : String,
    },
    moreLink : {
        type : String,
        minlength : 1,
    },
    picLink : {
        type : String,
    },
    lat : {
        type : Number,
    },
    lng : {
        type : Number,
    },
    createdAt: {
        type: Date, 
        default: Date.now
    },  
    updatedAt: {
        type: Date, 
        default: Date.now
    }
})

const RecomandedSpot = mongoose.model('RecomandedSpot', recomandedSpotSchema)

module.exports = {RecomandedSpot}