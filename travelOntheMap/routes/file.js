const express = require('express') 
var router = express.Router();
const { Spot } = require("../models/Spot");
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

// router.post('/', (req, res) => {
//     //회원 가입 할때 필요한 정보들을 클라이언트에서 가져오면
//     //그것들을 데이터 베이스에 넣어준다.
//     //데이터 모델을 가져와야한다.

//     const spot = new Spot(req.body)
//     //body에는 
//     // {
//     //     id : qhdgkdbs,
//     //     password : asdf,
//     // }
//     // 처럼 데이터가 들어있음

//     spot.save((err, userInfo) => {
//         if(err) return res.json({success : false, err})

//         return res.status(200).json({
//             success : true
//         }
//         )
//     })

// })

module.exports = router;